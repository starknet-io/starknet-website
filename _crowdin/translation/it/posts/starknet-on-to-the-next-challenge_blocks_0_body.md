### TL;DR

* Stiamo costruendo StarkNet in passi, iniziando con la creazione di**usabilità**, quindi migliorare**prestazioni**e, infine, passare a**decentralizzazione**
* Abbiamo raggiunto il nostro primo obiettivo: usabilità. Questo significa che abbiamo consegnato il calcolo generale in uno stato etero-simile (anni prima che fosse pensato possibile)
* Ora ci stiamo muovendo verso la fase 2 del nostro piano di costruzione in 3 parti: prestazioni, concentrandosi su throughput, costi di transazione e latenza.
* Prossimo passo: Decentralizzazione

Solo un anno dopo che i piani per[StarkNet](https://starknet.io/)sono stati annunciati per la prima volta, la piattaforma ha ottime funzionalità. La comunità degli sviluppatori sta fiorendo al di là delle nostre aspettative più selvagge e fornisce una costante raffica di nuovi progetti L2 Nativi.

La nostra priorità nell'ultimo anno era quella di consentire esattamente questo, creando un StarkNet funzionante con una gamma di funzionalità in rapida espansione, che consente agli sviluppatori di immergersi dritto.

Lo hanno fatto in grandi numeri. Un buon barometro è il numero di download per la libreria[JavaScript per StarkNet](https://www.starknetjs.com/): già a 5k da quando è diventato disponibile 4 mesi fa.

Eppure, mentre StarkNet offre la magia della compressione che abbiamo promesso, al momento, è lontano da essere in grado di farlo per abbastanza dApps con sufficiente throughput, e questo può rivelarsi una fonte di frustrazione per gli sviluppatori a breve termine.

La nostra tecnologia di base collaudata in battaglia, STARK-che dimostra molte transazioni e comprimere le prove, deve essere preceduta da un batching o sequenziamento delle transazioni. È un processo che il team StarkWare ha già perfezionato una volta per il motore di scala[StarkEx](https://starkware.co/starkex/), e stiamo lavorando per farlo di nuovo per le esigenze di StarkNet.

Ora che molti dei nostri obiettivi di usabilità sono stati raggiunti, stiamo spostando l'attenzione per rendere questo la nostra massima priorità. Fa parte della nostra roadmap in 3 tappe:**usability**, seguita dalle**performance del network**e poi**decentralizzazione**. Un anno dopo, vogliamo darvi una sbirciata sotto il cofano — un contorno di quali pezzi sono in atto e che cosa è ancora un lavoro in corso.

### La Storia Così Lontano

StarkNet Alpha è stato rilasciato al pubblico testnet in giugno, e a Mainnet in novembre. Al momento della distribuzione di Mainnet, StarkNet stava già fornendo il calcolo generale in uno stato simile a Ethereo, che è stato ampiamente pensato di essere anni di distanza.

Durante tutto lo sviluppo abbiamo scelto un approccio che si è concentrato sulle funzionalità più importanti e le ha rilasciate non appena sono diventate disponibili, condividere essenzialmente il processo di evoluzione con la comunità. StarkNet è lungi dall'essere completo ma anche ora, gli sviluppatori possono già costruire applicazioni significative e complesse. Oggi abbiamo centinaia di sviluppatori[che costruiscono su StarkNet,](https://starkware.notion.site/Projects-Building-on-StarkNet-a33dee55778a4515a9be9bdae02ee682)decine di dApps, e più di una dozzina di team esterni che sviluppano strumenti e infrastrutture per l'ecosistema StarkNet.

Una stringa di aggiornamenti ha fornito molte funzioni importanti, tra cui la messaggistica L1<>L2, i dati on-chain e il supporto per la compostabilità, il supporto agli eventi, il meccanismo base delle tasse, contratti di aggiornabilità, astrazione account, framework di test, strumenti di sviluppatori, conferma veloce, numero di blocco, blocco timestamp, supporto per i contratti di account.

La comunità degli sviluppatori è sia profondamente interessata a StarkNet, sia in realtà plasmando il suo sviluppo. Sono già state introdotte funzionalità basate sul feedback degli sviluppatori. L'adozione potrebbe ben superare l'aumento della produttività ed è per questo che questo impulso è la nostra grande priorità ora.

### Prossimi Passi

Ora che abbiamo raggiunto l'usabilità, è il momento di migliorare le prestazioni del sistema. Il sistema, nel suo stato attuale, è in grado di supportare un flusso limitato di transazioni. Il modo per risolvere questo problema è migliorare le prestazioni del Sequencer Node, che è l'equivalente di StarkNet di un minatore. È la “macchina” che le sequenze di transazioni dopo la loro presentazione. Quando questo è ottimizzato, il throughput sarà razzo cielo.

A tal fine, stiamo analizzando simultaneamente dove si trovano le strozzature e affrontandole una ad una. Attualmente, tutte le strozzature sono legate al processo di sequenziamento, che viene prima di invocare i provers STARK. Il prover-stack collaudato dalla battaglia è pronto a supportare il throughput StarkEx-like su StarkNet.

Ci aspettiamo che l'ottimizzazione del sequencer sia un processo che dura pochi mesi, con miglioramenti graduali in tutta la H1/22. Il nostro obiettivo è quello di raggiungere, all'inizio della seconda metà del 2022, almeno un ordine di grandezza TPS superiore a Ethereum, ad un costo che è almeno due ordini di grandezza inferiore a quello di Ethereum. E questo è solo l’inizio.

C'è una buona ragione per cui questa fase di ottimizzazione è necessaria, e che StarkNet non è stato lanciato con un sequencer pronto per l'ottimizzazione: StarkNet è stato in grado di ottenere usabilità così rapidamente perché abbiamo ottenuto un head-start. Invece di partire da zero e costruire un sequencer completamente nuovo, abbiamo usato il batcher di StarkEx come componente centrale.

Questo è stato un ottimo modo per costruire. Non ha fatto solo consegnare velocemente; significava che siamo sicuri di aver costruito su basi solide. StarkEx essenzialmente battaglia-testato la funzionalità di base che guida StarkNet, come ha notato centinaia di miliardi di dollari nel trading cumulativo.

[StarkEx](https://starkware.co/starkex/)è il motore di ridimensionamento per alcuni dei dApps di maggior successo utilizzando L2: dYdX (contratti perpetui), DeversiFi (trading spot e pagamenti), così come per Immutable e Sorare (NFT minting and trading).

Ma il sequencer costruito per loro e altri clienti StarkEx può solo prendere StarkNet finora. Ognuno di loro sta gestendo in linea di massima lo stesso tipo di transazione ogni giorno. StarkNet è tutto su**calcolo generale**, quindi le sue esigenze sono aperte. Quando il suo sequencer prende le transazioni dal mempool, vengono in varie forme e dimensioni. Inoltre, StarkNet è anche una rete aperta, il che significa che c’è un sovraccarico computazionale aggiuntivo che non si incontra in StarkEx.

La sfida attuale, ovvero l'ottimizzazione del sequencer per queste nuove esigenze, è un impegno significativo, ma abbiamo una forte comprensione del percorso necessario, sulla base del nostro successo sviluppo StarkEx.

### Prossimo Su: Decentralizzazione

StarkNet deve essere una rete completamente decentralizzata senza permessi, completa di meccanismi di elezione e governance del leader. Il raggiungimento di questo obiettivo diventerà il nostro obiettivo principale una volta che i razzi di produzione e le gocce di costo, e speriamo di avere una prima versione decentrata entro la fine del 2022. Prevediamo di condividere pubblicamente il nostro piano di decentramento nei prossimi mesi.

Proprio come l'attuale flusso limitato rappresenta una fase provvisoria nello sviluppo di StarkNet, il livello attuale di coinvolgimento di StarkWare è anche temporaneo. Ci vediamo come un ponteggio di sorta, che serve una funzione importante durante la fase di costruzione, ma è rotolato indietro a tempo debito.

Lo sviluppo del nodo completo, un primo passo entusiasmante verso il decentramento, è già in corso. I nodi completi consentiranno a chiunque di tenere e verificare lo stato della rete localmente, tenendo traccia di esattamente ciò che sta accadendo. Tre squadre —*Erigon, Dutch mind ed Equilibrium*— stanno sviluppando nodi completi, e potenzialmente molto altro inizierà lo sviluppo in futuro.

Parallelamente sono in corso i preparativi per aprire il sequenziamento e dimostrare il software al pubblico. Chiunque sarà in grado di partecipare come sequencer o un prover su StarkNet.

Si svilupperà una struttura che incoraggerà le persone a partecipare e comprenderà i premi economici. Le commissioni StarkNet andranno, in parte, a sequencer e provers.

A medio termine ci aspettiamo di mettere il nostro sequencer a disposizione di terzi, e a lungo termine ci aspettiamo di vedere anche vari team di costruire sequencer che saranno sequenziamento per StarkNet.

### Sempre In Miglioramento; Ascolto Per Sempre

Mentre il focus si sposta verso la prossima sfida, continueremo a migliorare rispetto ai risultati del passato. E nel continuare a lavorare su tutte le aree di[StarkNet](https://starknet.io/), le nostre orecchie rimarranno sempre aperte a tutta la comunità di sviluppatori. Quindi prendi parte alla discussione, tramite[Discord](https://discord.com/invite/uJ9HZTUk2Y), la comunità[StarkNet Shamans](https://www.google.com/search?client=safari&rls=en&q=StarkNet+Shamans&ie=UTF-8&oe=UTF-8),[Twitter](https://twitter.com/Starknet_Intern), o un altro percorso, e contribuire a modellare il futuro della scalatura blockchain.