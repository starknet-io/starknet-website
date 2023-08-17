### TL;DR

* I rollup di validità non sono limitati nel flusso nello stesso modo di L1. Ciò dà luogo a TPS potenzialmente molto più alto sui rollup di validità L2.
* La roadmap delle prestazioni StarkNet affronta un elemento chiave del sistema: il sequencer.
* Vi presentiamo qui la tabella di marcia per il miglioramento delle prestazioni:\
  — parallelizzazione di Sequencer\
  — Una nuova implementazione di ruggine per la VM del Cairo\
  — Reimplementazione di Sequencer in ruggine \
* Prover, essendo battaglia-testati come sono, non sono la strozzatura e in grado di gestire molto di più di quanto fanno ora!

### Introduzione

StarkNet lanciato su Mainnet quasi un anno fa. Abbiamo iniziato a costruire StarkNet concentrandoci sulle funzionalità. Ora, spostiamo l'attenzione per migliorare le prestazioni con una serie di passaggi che aiuteranno a migliorare l'esperienza StarkNet.

In questo post spieghiamo perché c'è una vasta gamma di ottimizzazioni che sono applicabili solo nei rollup di validità, e condivideremo il nostro piano per implementare questi passi su StarkNet. Alcuni di questi passi sono già implementati in StarkNet Alpha 0.10.2, che è stato rilasciato su Testnet il novembre 16 e Ieri su Mainnet. Ma prima di discutere le soluzioni, esaminiamo i limiti e la loro causa.

### Limitazioni di blocco: rollup di validità rispetto a L1

Un approccio potenziale per aumentare la scalabilità della blockchain e aumentare il TPS sarebbe quello di sollevare le limitazioni del blocco (in termini di gas/dimensioni) mantenendo la costante del tempo di blocco. Ciò richiederebbe maggiori sforzi da parte dei produttori di blocchi (validatori su L1, i sequencer su L2) e quindi richiedono un'attuazione più efficiente di tali componenti. A tal fine, ora spostiamo l'attenzione sulle ottimizzazioni del sequencer StarkNet, che descriviamo in modo più dettagliato nelle sezioni seguenti.

Qui sorge una domanda naturale. Perché le ottimizzazioni del sequencer sono limitate ai rollup di validità, cioè, perché non possiamo attuare gli stessi miglioramenti su L1 ed evitare completamente le complessità dei rollup di validità? Nella sezione successiva, sosteniamo che vi è una differenza fondamentale tra i due, consentendo una vasta gamma di ottimizzazioni su L2 che non sono applicabili a L1.

### Perché la produttività L1 è limitata?

Sfortunatamente, alzare i limiti di blocco su L1 soffre di una grande insidia. Aumentando il tasso di crescita della catena, aumentiamo anche le richieste dai nodi completi, che stanno cercando di tenere il passo con lo stato più recente. Poiché i nodi completi L1 devono rieseguire tutta la cronologia, un aumento elevato della dimensione del blocco (in termini di gas) pone su di essi una forte pressione, di nuovo portando a macchine più deboli abbandonando il sistema e lasciando la capacità di eseguire nodi completi solo a entità abbastanza grandi. Di conseguenza, gli utenti non saranno in grado di verificare lo stato stesso e partecipare alla rete senza fiducia.

Ciò lascia intendere che il flusso di produzione L1 dovrebbe essere limitato, al fine di mantenere un sistema veramente decentrato e sicuro.

### Perché le stesse barriere non influenzano i rollup di validità?

**Solo quando consideriamo la prospettiva del nodo completo vediamo il vero potere offerto dai rollup di validità.**Un nodo completo L1 ha bisogno di ri-eseguire l'intera cronologia per garantire la correttezza dello stato attuale. I nodi StarkNet devono solo verificare le prove STARK, e questa verifica richiede una quantità esponenzialmente inferiore di risorse computazionali. In particolare, la sincronizzazione da zero non deve comportare l'esecuzione; un nodo può ricevere un dump dello stato corrente dai suoi peer e verificare solo tramite una prova STARK che questo stato sia valido. Questo ci permette di aumentare la produttività della rete senza aumentare i requisiti dal nodo completo.

Si conclude quindi che il sequencer L2 è soggetto a un intero spettro di ottimizzazioni che non sono possibili su un L1.

### Tabella di marcia per le prestazioni

Nelle prossime sezioni, discutiamo di quali di queste sono attualmente in programma per il sequenziatore StarkNet.

### Parallelizzazione sequenziatore

Il primo passo sulla nostra tabella di marcia è stato quello di introdurre la parallelizzazione all'esecuzione della transazione. Questo è stato introdotto in StarkNet alfa 0.10.2, che è stato rilasciato ieri su Mainnet. Ora ci immergiamo in ciò che è la parallelizzazione (questa è una sezione semi-tecnica, per continuare sulla roadmap, saltare alla prossima sezione).

Che cosa significa dunque “parallelizzazione delle transazioni”? In modo ingenuo, eseguire un blocco di transazioni in parallelo è impossibile in quanto diverse transazioni possono essere dipendenti. Ciò è illustrato nel seguente esempio. Considera un blocco con tre transazioni dallo stesso utente:

* Transazione A: swap USDC per ETH
* Transazione B: pagare ETH per un NFT
* Transazione C: swap USDT per BTC

Chiaramente, Tx A deve avvenire prima Tx B, ma Tx C è completamente indipendente da entrambi e può essere eseguito in parallelo. Se ogni transazione richiede 1 secondo per eseguire, il tempo di produzione del blocco può essere ridotto da 3 secondi a 2 secondi introducendo la parallelizzazione.

Il nocciolo del problema è che non conosciamo in anticipo le dipendenze delle transazioni. In pratica, solo quando eseguiamo la transazione B dal nostro esempio vediamo che si basa su modifiche apportate dalla transazione A. Più formalmente, la dipendenza deriva dal fatto che la transazione B legge da celle di archiviazione a cui la transazione A ha scritto. Possiamo pensare che le transazioni formino un grafico di dipendenza, dove c'è un bordo dall'operazione A all'operazione B iff A scrive in una cella di archiviazione letta da B, e quindi deve essere eseguito prima di B. La figura seguente mostra un esempio di tale grafico di dipendenza:

![](https://miro.medium.com/max/641/0*I-qGgxdJJmqmgZWM)

Nell'esempio precedente, ogni colonna può essere eseguita in parallelo, e questo è l'accordo ottimale (mentre ingenuamente, avremmo eseguito le transazioni 1–9 in sequenza).

Per superare il fatto che il grafico delle dipendenze non è noto in anticipo, introduciamo***una parallelizzazione ottimistica***, nello spirito di[BLOCK-STM](https://malkhi.com/posts/2022/04/block-stm/)sviluppato da Aptos Labs, al sequencer StarkNet. In questo paradigma, cerchiamo ottimisticamente di eseguire transazioni in parallelo e ri-eseguire al momento di trovare una collisione. Ad esempio, possiamo eseguire le transazioni 1–4 dalla figura 1 in parallelo, solo per scoprire in seguito che Tx4 dipende da Tx1. Quindi, la sua esecuzione è stata inutile (lo abbiamo eseguito rispetto allo stesso stato che abbiamo eseguito Tx1 contro, mentre avremmo dovuto correre contro lo stato risultante dall'applicazione del Tx1). In questo caso, rieseguiremo Tx4.

Si noti che possiamo aggiungere molte ottimizzazioni in cima alla parallelizzazione ottimistica. Ad esempio, piuttosto che aspettare ingenuamente che ogni esecuzione finisca, possiamo interrompere un'esecuzione nel momento in cui troviamo una dipendenza che la invalida.

Un altro esempio è l'ottimizzazione della scelta delle transazioni da rieseguire. Supponiamo che un blocco che consiste di tutte le transazioni dalla figura 1 sia alimentato in un sequencer con cinque core della CPU. In primo luogo, cerchiamo di eseguire le transazioni 1–5 in parallelo. Se l'ordine di completamento era Tx2, Tx3, Tx4, Tx1 e infine Tx5, poi troveremo la dipendenza Tx1→Tx4 solo dopo che Tx4 è stato già eseguito — indicando che dovrebbe essere rieseguito. In modo ingenuo, possiamo voler rieseguire Tx5 anche perché può comportarsi in modo diverso data la nuova esecuzione di Tx4. Tuttavia, piuttosto che limitarsi a rieseguire tutte le transazioni dopo il Tx4 ora invalidato, possiamo attraversare il grafico delle dipendenze costruito dalle transazioni la cui esecuzione è già terminata e solo rieseguire le transazioni che dipendevano da Tx4.

### Una nuova implementazione Rust per il Cairo-VM

I contratti intelligenti in StarkNet sono scritti al Cairo e sono eseguiti all'interno del Cairo-VM, che la specifica appare nella carta[Cairo](https://eprint.iacr.org/2021/1063.pdf). Attualmente, il sequencer sta usando un'implementazione[python](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/cairo/lang/vm)del Cairo-VM. Per ottimizzare le prestazioni di implementazione della VM, abbiamo lanciato uno sforzo di riscrivere la VM in ruggine. Grazie al grande lavoro di[Lambdaclass](https://lambdaclass.com/), che sono ormai una squadra preziosa nell'ecosistema StarkNet, questo sforzo sta presto realizzando.

L'implementazione della ruggine del VM,[cairo-rs](https://github.com/lambdaclass/cairo-rs), ora può eseguire codice nativo del Cairo. Il passo successivo è gestire l'esecuzione di smart contract e le integrazioni con il sequenziatore pitonico. Una volta integrato con il cairo-rs, le prestazioni del sequencer dovrebbero migliorare in modo significativo.

### Reattuazione del sequenziatore in ruggine

Il nostro passaggio dal python alla ruggine per migliorare le prestazioni non è limitato alla VM del Cairo. Accanto ai miglioramenti di cui sopra, abbiamo intenzione di riscrivere il sequencer da zero in ruggine. Oltre ai vantaggi interni di Rust, questo offre un’opportunità per altre ottimizzazioni al successore. Elencando una coppia, possiamo godere dei benefici di cairo-rs senza la testa di comunicazione python-rust e possiamo riprogettare completamente il modo in cui lo stato è memorizzato e accessibile (che oggi si basa sulla struttura[Patricia-Trie](https://docs.starknet.io/documentation/develop/State/starknet-state/#state_commitment)).

### Che dire dei proversi?

Durante questo post, non abbiamo menzionato l'elemento forse più famoso di rollup di validità — il prover. Si potrebbe immaginare che essendo la componente probabilmente più sofisticata dell'architettura, dovrebbe essere la strozzatura e, quindi, il fulcro dell'ottimizzazione. È interessante notare che sono i componenti più “standard” che ora sono la strozzatura di StarkNet. Oggi, in particolare con[prove ricorsive](https://medium.com/starkware/recursive-starks-78f8dd401025), possiamo adattare molte più transazioni rispetto al traffico corrente su Testnet/Mainnet in una prova. Infatti, oggi, i blocchi StarkNet sono provati insieme alle transazioni StarkEx, dove queste ultime possono talvolta incorrere in diverse centinaia di migliaia di zecche NFT.

### Summary

Parallelizzazione, Rust, e altro ancora, vi accompagnate per un TPS migliorato nelle prossime versioni di StarkNet.