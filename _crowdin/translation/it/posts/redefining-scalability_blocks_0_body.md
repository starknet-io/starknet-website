La scalabilità Blockchain è sempre stata un argomento riscaldato. Quasi ogni rete blockchain touts alto numero di transazioni al secondo (TPS) come punto di vendita. Tuttavia, TPS non è una metrica valida per confrontare le reti blockchain con — rendendole una sfida per valutare le loro prestazioni relative. Inoltre, i grandi numeri TPS di solito vengono a un costo — che pone la domanda: fare queste reti effettivamente scalano, o aumentano solo la loro produttività?

Quindi, esaminiamo come definire la scalabilità, quali compromessi sono fatti per raggiungerlo, e perché Validity Rollup sono la soluzione di scalabilità finale.

### Non tutte le transazioni sono uguali

In primo luogo, dobbiamo stabilire la nostra affermazione che la metrica semplice e conveniente di TPS non è una misura accurata di scalabilità.

Per compensare i nodi per l'esecuzione delle transazioni (e per dissuadere gli utenti dallo spamming della rete con inutili calcoli), blockchain addebita una commissione proporzionale al carico computazionale imposto sulla blockchain. In Ethereum la complessità del carico computazionale è misurata in*gas.*Poiché il gas è una misura molto conveniente della complessità delle transazioni, il termine sarà utilizzato in tutto questo articolo per blockchain non-Ethereum, anche se è tipicamente Ethereum-specific.

Le transazioni differiscono notevolmente in termini di complessità e, pertanto, quanto gas consumano. Bitcoin, pioniere delle transazioni peer-to-peer senza fiducia, supporta solo lo script Bitcoin rudimentale. Questi semplici trasferimenti dall'indirizzo per affrontare l'uso poco gas. Al contrario, le catene smart contract come Ethereum o Solana supportano una macchina virtuale e linguaggi di programmazione Turing-complete che consentono transazioni molto più complesse. Quindi, dApps come Uniswap richiedono molto più gas.

Questo è il motivo per cui non ha senso confrontare il TPS di diverse blockchain. Quello che dovremmo invece confrontare è la capacità di calcolo — o di throughput.

Tutte le Blockchain hanno una dimensione (variabile) del blocco e un tempo di blocco che determinano quante*unità di calcolo*possono essere elaborate per blocco e quanto*velocemente*un nuovo blocco può essere aggiunto. Insieme, queste due variabili determinano il*throughput*di una blockchain.

### Che Vincola La Scalabilità?

Le catene bloccate si sforzano di essere le reti più decentrate e inclusive. A tal fine, occorre tenere sotto controllo due proprietà fondamentali.

#### **1. Requisiti Hardware**

La decentralizzazione di una rete blockchain è determinata dalla capacità del nodo più debole della rete di verificare la blockchain e tenere il suo stato. Pertanto, i costi per eseguire un nodo (hardware, larghezza di banda, e lo stoccaggio) dovrebbe essere mantenuto il più basso possibile per consentire al maggior numero possibile di persone di diventare partecipanti senza permesso nella rete senza fiducia.

#### 2**.**Crescita dello Stato

La crescita dello stato si riferisce a quanto rapidamente cresce la blockchain. Quanto più una blockchain permette di passare per unità di tempo, tanto più velocemente cresce la blockchain. I nodi completi memorizzano la cronologia della rete e devono essere in grado di convalidare lo stato della rete. Lo stato di Ethereum è immagazzinato e referenziato utilizzando strutture efficienti come gli alberi. Man mano che lo stato cresce, ad esso si aggiungono nuove foglie e rami, rendendolo sempre più complesso e dispendioso in termini di tempo per eseguire determinate azioni. Man mano che la catena cresce di dimensioni, peggiora la peggiore esecuzione per nodi, il che porta a un tempo in continua crescita per convalidare nuovi blocchi. Nel tempo, questo aumenta anche il tempo totale necessario per sincronizzare un nodo completo.

### Impatto deleterio dell'aumento della portata

#### 1. Conteggio Nodi

I requisiti minimi per eseguire un numero di nodi e nodi sono:

* Bitcoin1: 350GB spazio disco HDD, connessione 5 Mbit/s, 1GB RAM, CPU >1 Ghz. **Numero di nodi: ~10.000**
* Ethereum2: spazio su disco SSD 500GB+, connessione 25 Mbit/s, RAM-8GB RAM, CPU 2-4 core. **Numero di nodi: ~6.000**
* Solana3: spazio su disco SSD 1.5TB+, 300 Mbit/s di connessione, 128 GB RAM CPU 12+ core. **Numero di nodi: ~1,200**

Notare che maggiore è la CPU, larghezza di banda e requisiti di archiviazione per i nodi necessari per il throughput di una blockchain, il minor numero di nodi sulla rete — con conseguente indebolimento del decentramento e una rete meno inclusiva.

#### 2. È ora di sincronizzare un nodo completo

Quando si esegue un nodo per la prima volta, si deve sincronizzare con tutti i nodi esistenti, scaricare, e convalidare, lo stato della rete fino al blocco di genesi fino alla punta della catena. Questo processo dovrebbe essere il più rapido ed efficiente possibile per consentire a chiunque di agire come un partecipante senza permesso del protocollo.

Prendendo come indicatore[2020 Bitcoin Nodo](https://blog.lopp.net/2020-bitcoin-node-performance-tests/)e[2021 Node Sync Tests](https://blog.lopp.net/2021-altcoin-node-sync-tests/)di Jameson Lopp, La tabella 1 confronta il tempo necessario per sincronizzare un nodo completo di Bitcoin vs. Ethereum vs. Solana su un PC medio di qualità consumatore.

![Tabella 1. Confronto throughput e nodo-sync della blockchain](/assets/1_gmpi_1c9zipoc-znrh7b5q.png "Tabella 1. Confronto throughput e nodo-sync della blockchain")

La tabella 1 dimostra che l'aumento del flusso di lavoro porta a tempi di sincronizzazione più lunghi perché sempre più dati devono essere elaborati e memorizzati.

Mentre i miglioramenti al software dei nodi sono costantemente fatti per mitigare la sfida della blockchain in crescita (abbassando l'impronta del disco, velocità di sincronizzazione più veloci, maggiore resilienza al crash, modularizzazione di alcuni componenti, ecc. , i nodi evidentemente non possono ancora tenere il passo con gli aumenti di throughput.

### Come dovrebbe essere definita la scalabilità?

La scalabilità è il termine più erroneamente rappresentato nello spazio blockchain. Mentre aumentare la produttività è auspicabile, è solo una parte del puzzle.

***Scalability**means**more transactions**for the**same hardware**.*

Per questo motivo, la scalabilità può essere separata in due categorie.

#### Scalabilità del sequenziatore

Il sequenziamento descrive l'atto di ordinazione ed elaborazione delle transazioni in una rete. Come precedentemente stabilito, qualsiasi blockchain potrebbe aumentare in modo banale la sua produttività aumentando la dimensione del blocco e riducendo il suo tempo di blocco — fino a quando un punto in cui l'impatto negativo alla sua decentralizzazione è considerato troppo significativo. Ma, modificare questi semplici parametri non fornisce i miglioramenti richiesti. EVM di Ethereum può, in teoria,[gestire fino a ~2.000 TPS](https://twitter.com/dankrad/status/1459607325854121989), che è insufficiente per servire la domanda di spazio blocco a lungo termine. Per scalare il sequenziamento, Solana ha fatto alcune innovazioni impressionanti: approfittare di un ambiente di esecuzione parallelizzabile e di un meccanismo di consenso intelligente, che consente un rendimento molto più efficiente. Ma, nonostante i suoi miglioramenti, non è sufficiente né scalabile. Come Solana aumenta il suo throughput, anche i costi hardware per eseguire un nodo e processare le transazioni aumentano.

#### Scalabilità della verifica

*La scalabilità di verifica descrive approcci che aumentano la produttività senza appesantire i nodi con costi hardware in costante aumento.*Specificamente, si riferisce a innovazioni crittografiche come le prove di validità. Sono il motivo per cui Validity Rollup può scalare una blockchain in modo sostenibile.

**Cos'è un rollup di validità?**

Validità Rollup (noto anche come “ZK-Rollups”) spostare il calcolo e lo stato di archiviazione off-chain ma mantenere una piccola quantità di alcuni dati on-chain. Un smart contract sulla blockchain sottostante mantiene la radice dello stato del Rollup. Sul Rollup, un lotto di transazioni altamente compresse, insieme alla radice di stato corrente, vengono inviati a un Prover off-chain. Il Prover calcola le transazioni, genera una prova di validità dei risultati e della radice del nuovo stato e la invia a un verificatore on-chain. Il verificatore verifica la prova di validità, e lo smart contract che mantiene lo stato del Rollup lo aggiorna al nuovo stato fornito dal Prover.

**Come scalano i Rollup Validità con gli stessi requisiti hardware?**

Anche se Provers richiedono hardware di fascia alta, non influiscono sulla decentralizzazione di una blockchain; perché la validità delle operazioni è garantita da prove matematiche verificabili.

Ciò che conta sono i requisiti per verificare le prove. Poiché i dati coinvolti sono altamente compressi e in gran parte astratti via attraverso il calcolo, il suo impatto sui nodi della blockchain sottostante è minimo*.*

I verificatori (Ethereum nodes) non richiedono hardware di fascia alta, e la dimensione dei lotti non aumenta i requisiti hardware. Solo le transizioni di stato e una piccola quantità di dati di chiamata devono essere elaborati e memorizzati dai nodi. Questo consente a tutti i nodi Ethereum di verificare i lotti di Validity Rollup utilizzando l'hardware esistente.

**Più transazioni, più è costoso che ottiene**

Nelle blockchain tradizionali, più transazioni accadono, il più costoso che ottiene per tutti, come lo spazio di blocco viene riempito - e gli utenti hanno bisogno di superare l'un l'altro in un mercato di commissioni per ottenere le loro transazioni incluse.

Per un Rollup di Validità, questa dinamica è invertita. La verifica di un lotto di transazioni su Ethereum ha un certo costo. Man mano che cresce il numero di transazioni all'interno di un lotto, il costo per verificare il lotto cresce ad un tasso esponenzialmente più lento. L'aggiunta di più transazioni a un batch porta a commissioni di transazione più economiche anche se il costo di verifica batch aumenta - perché è ammortizzato tra tutte le transazioni all'interno del lotto. Validity Rollups vuole il maggior numero possibile di transazioni all'interno di un lotto, in modo che la tassa di verifica possa essere condivisa tra tutti gli utenti. Man mano che la dimensione del lotto cresce all'infinito, la commissione ammortizzata per transazione converge a zero, i. ., più transazioni su un Rollup di Validità, il più economico che ottiene per tutti.

dYdX, un dApp alimentato da un Rollup di Validità, vede spesso dimensioni di lotti di oltre 12.000 transazioni. Il confronto tra il consumo di gas delle stesse operazioni su Mainnet e su un Rollup di Validità illustra i guadagni di scalabilità:

Settling a dYdX transaction on Ethereum Mainnet:**200,000 gas**

Settling a dYdX transaction on StarkEx:**<500 gas**

Un altro modo per esaminarlo: Validity Rollup è scalare i costi in modo lineare con il numero di utenti all'interno dello stesso lotto.

#### Perché i Rollup ottimistici non sono scalabili come si potrebbe pensare

In teoria, i Rollup ottimistici offrono quasi gli stessi vantaggi di scalabilità dei Rollup di Validità. Ma c'è una distinzione importante: i Rollup ottimistici ottimizzano per il caso medio, mentre i Rollup Validità ottimizzano per il caso peggiore. Poiché i sistemi blockchain operano in condizioni estremamente contraddittorie, l'ottimizzazione per il peggiore dei casi è l'unico modo per raggiungere la sicurezza.

Nel peggiore dei casi di Optimistic Rollup, le transazioni di un utente non saranno controllate da truffe. Quindi, per contestare la frode, l'utente deve sincronizzare un nodo Ethereum completo, un nodo completo L2, e calcolare la transazione sospetta in se stesso.

Nel peggiore dei casi di Validità Rollup, un utente dovrebbe solo sincronizzare un nodo Ethereum completo per verificare la prova di validità, risparmiando loro stessi l'onere computazionale.

A differenza dei Rollup di Validità, i costi di Rollup ottimistici sono in linea con il numero di transazioni invece che con il numero di utenti, rendendoli più costosi.

### Pezzo finale del puzzle — Accesso senza permesso allo stato rollup

Per garantire la validità delle transazioni, gli utenti devono eseguire solo un nodo Ethereum. Tuttavia, gli utenti e gli sviluppatori potrebbero voler visualizzare, ed eseguire, lo stato e l'esecuzione del Rollup per vari scopi. Un nodo*di indicizzazione L2*riempie perfettamente questa esigenza. Non solo consente agli utenti di vedere le transazioni nella rete, ma si tratta anche di un elemento essenziale dell'infrastruttura necessaria per il funzionamento dell'ecosistema. Indicizzatori come The Graph, Alchemy, Infura; reti Oracle come Chainlink, e block explorer, tutti questi sono completamente supportati da un nodo L2 senza permessi, indicizzatori.

### Conclusione

Molti approcci per affrontare la scalabilità della blockchain si concentrano falsamente sull'aumento del*throughput*. Ma, questo trascura l'impatto dei throughput sui nodi: i requisiti hardware in costante aumento per elaborare i blocchi e memorizzare la cronologia della rete, e come questo inibisce il decentramento di una rete.

Con l'avvento della crittografia a prova di validità, una blockchain può ottenere**una vera scalabilità**che non appesantisce i nodi con costi sempre crescenti e consente un ampio decentramento. Più transazioni con calcoli potenti e più complessi per lo stesso hardware sono ora possibili, invertire il dilemma del mercato delle commissioni nel processo — più attività su un Rollup di Validità, più economico ottiene!

[SwagtimusPrime.eth](https://twitter.com/SwagtimusP?t=pO0L1vGIhuC-ZgWOusQYtA&s=09)e[Louis Guthmann](https://twitter.com/GuthL)

1 Da<https://bitcoin.org/en/bitcoin-core/features/requirements>

2 Da<https://ethereum.org/en/developers/docs/nodes-and-clients/>

3 Da<https://docs.solana.com/running-validator/validator-reqs>

4 Semplificato e regolato fortemente per dimensioni medie dei blocchi dinamici