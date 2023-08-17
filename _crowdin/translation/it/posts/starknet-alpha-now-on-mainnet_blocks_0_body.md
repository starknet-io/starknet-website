### TL;DR

* Alpha è in diretta su Mainnet
* Supporta il calcolo generale e la componibilità
* Comunità in rapida crescita, sviluppo di strumenti e applicazioni
* Altre caratteristiche da sviluppare in modo continuativo nelle prossime settimane
* Disclaimer: questa è una versione Alpha (leggi la stampa fine qui sotto)

### Introduzione

StarkNet Alpha sta lanciando oggi su Ethereum Mainnet!

StarkNet è un Rollup decentralizzato senza permesso che funziona come una rete L2 su Ethereum. StarkNet consente a qualsiasi dApp di ottenere una scala illimitata per il suo calcolo, senza compromettere la composizione e la sicurezza di Ethereum, grazie al suo affidamento sul sistema di prova crittografica più sicuro e scalabile —[STARK](https://starkware.co/stark/). StarkNet è costruito sul linguaggio di programmazione[Cairo](https://starkware.co/cairo/), il primo verificatore completo di produzione di Turing von-Neumann su Ethereum. Sia Cairo che STARK sono stati sviluppati in casa da StarkWare e hanno alimentato tutte le nostre applicazioni di livello produttivo, che hanno regolato oltre 50M txs e $ 250B dall'estate 2020.

Tra le altre caratteristiche, StarkNet Alpha consente gli smart contract generici di calcolo che supportano la compositività, sia con altri contratti StarkNet che tramite messaggi L1<>L2 con contratti L1. StarkNet Alpha opera in modalità Rollup, il che significa che tutti i dati di differenza di stato vengono inviati in catena.

Nel mese di gennaio, abbiamo condiviso la roadmap StarkNet[](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880). Nel mese di giugno, StarkNet Alpha è andato in diretta su una rete di test pubblica, ed è stato aggiornato con nuove funzionalità su base continuativa. Siamo lieti di essere in anticipo rispetto al calendario, grazie, in parte, al nostro affidamento sul nostro stack software STARK/Cairo temprato per battaglia.

### Come si dovrebbe trattare StarkNet Alpha?

In primo luogo, con grande cura, come l’etichetta “Alpha” è lì per una ragione. Aspettatevi cambiamenti, correzioni e miglioramenti a venire. StarkNet Alpha deve ancora essere verificata, e possiamo ritardare tale audit fino a quando la rete matura un po 'di più (leggere la clausola di esclusione di responsabilità alla fine di questo post per ulteriori informazioni).

In generale, seguiamo il percorso prudente e sensato definito dai nostri colleghi ottimistici Rollup, vale a dire, Arbitrum e Optimism: avviare la rete con un singolo sequencer, e applicazioni whitelist al fine di garantire che i loro sviluppatori comprendano i rischi coinvolti. Continuiamo ad essere pienamente impegnati per un completo decentramento di StarkNet.

E come si dovrebbe trattare l'economia di StarkNet Alpha? L'Alpha inizierà senza commissioni di transazione. Il prossimo aggiornamento, a poche settimane di distanza, introdurrà un meccanismo di commissione — condivideremo più dettagli in un post separato.

### Inizia A Costruire

Vi invitiamo a iniziare a scrivere le vostre applicazioni su StarkNet controllando il (nuovo!) [website](http://starknet.io/), or jumping directly to the[tutorial](https://starknet.io/docs/).

Se sei pronto per la distribuzione, segui questo[processo di onboarding](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu); creato per garantire che tutti gli sviluppatori siano ben consapevoli dello stato preliminare del sistema.

### Ecosistema

Negli ultimi due mesi, abbiamo visto una crescita sorprendente delle dimensioni e delle attività della comunità StarkNet, which congregates on the[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y). Decine di sviluppatori — team e individui — in tutto l'ecosistema della blockchain stanno contribuendo a questo sforzo. (Vedi la clausola di esclusione della responsabilità alla fine di questo post)

#### Strumenti Per Sviluppatori

* OpenZeppelin sta definendo i contratti standard. Il loro[repo](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)e[discussioni](https://github.com/OpenZeppelin/cairo-contracts/discussions)vale la pena seguire
* Il[Warp](https://github.com/NethermindEth/warp)Solidity–>Il transpiler del Cairo, sviluppato da Netherlandmind
* Shard Labs’[HardHat plugin](https://github.com/Shard-Labs/starknet-hardhat-plugin)e[StarkNet Devnet](https://github.com/Shard-Labs/starknet-devnet)
* Argent sta sviluppando strumenti, compreso il suo sforzo congiunto su StarkNet.js, insieme a[Sean Han](https://twitter.com/seanjameshan), il suo creatore

#### Infrastruttura

**Block explorer**:

* [Il progetto Voyager](http://voyager.online/)by Dutch mind
* [Eth.tx](https://ethtx.info/)offrirà analisi di supporto e una visione dettagliata delle transazioni StarkNet

**Full nodes**: due sforzi in corso: uno è il progetto Fermion guidato da Erigon, l'altro è il progetto[Pathfinder](https://github.com/eqlabs/pathfinder), guidato da Equilibrium

**Portafogli**:

* [ArgentX](https://github.com/argentlabs/argent-x)è un'estensione del browser sviluppata da Argent, già disponibile su devs
* Torus key management soluzione è StarkNet pronto
* Ledger sta sviluppando un'app nativa StarkNet; da mettere a disposizione prima della fine dell'anno

**Cairo Audits**: ConsenSys Diligence, Trail of Bits, Peckshield, e ABDK stanno già conducendo audit al Cairo o stanno per iniziare presto

**Servizi API**: dopo la messa a disposizione di un nodo completo StarkNet, i servizi API saranno offerti da Figment, Chainstack e Infura

**Indexer**: lavoreremo per integrare TheGraph per lavorare con StarkNet, insieme al team Figment

### La Strada In Avanti

Nelle settimane e nei mesi a venire, aggiorneremo l'Alpha con le seguenti capacità:

* Meccanismo di aggiornamento del contratto
* Meccanismo Di Tariffa
* Eventi
* Aggiunta di syscalls mancanti (get_block_number, get_block_timestamp, e altro ancora)
* Versione scheletrica della Volizione
* E molto altro …

Per monitorare questo sforzo su base continuativa, vedere le caratteristiche[tabella di marcia tentativa](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51).

Guardando più lontano, continuiamo a investire pesantemente nella ricerca attiva su più fronti (unisciti allo sforzo[Shamans](https://community.starknet.io/)):

* Decentralizzazione
* Scala
* Disponibilità dei dati
* Incentivazione senza permesso

### Chiamata all'azione

* Inizia a scrivere contratti sul testnet StarkNet senza permesso su Goerli
* Unisciti a[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)
* Unisciti alle chiamate della comunità
* Partecipa al primo[StarkNet Ecosystem Summit](https://www.eventbrite.com/e/starknet-ecosystem-summit-2022-tickets-206671880157)(Jan 27–28 2022, Stanford CA)
* Unisciti allo[StarkNet Shamans](https://community.starknet.io/)per un tuffo più profondo nelle sfide della ricerca

### Disclaimer

***StarkNet Alpha è un sistema nuovo e complesso che non è stato completamente controllato. Come tutti i sistemi software complessi, il sistema StarkNet può contenere bug che, in casi estremi, potrebbero portare a una perdita di tutti i fondi. Così,***battuta con attenzione e attenzione!******

*L'ecosistema StarkNet è un insieme ampio e in rapida crescita di team e individui indipendenti, su cui StarkWare non ha alcuna supervisione e non si assume alcuna responsabilità. Qualsiasi progetto sviluppato da membri dell'ecosistema può contenere bug che, in casi estremi, potrebbero portare a una perdita di tutti i fondi. Inoltre, man mano che vengono utilizzati più smart contract, aumenta il potenziale di insetti dannosi non voluti e persino truffe e tappeto dannosi. Quindi, trattare tutti gli smart contract su StarkNet come si tratta smart contract su Ethereum, e utilizzare solo quelli che hai buone ragioni per fidarti come sicuro.*