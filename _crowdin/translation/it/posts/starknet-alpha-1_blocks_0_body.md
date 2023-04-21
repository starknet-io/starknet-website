### TL;DR

StarkNet Alpha 1 ha due nuove funzionalità:

* Interazione L1<>L2
* Dati in catena

### Introduzione

All'inizio dell'anno, abbiamo annunciato che StarkWare sta costruendo[StarkNet](https://starkware.co/product/starknet/), un ZK-Rollup1 decentralizzato senza permesso, basato su STARK, che funziona come una rete L2 su Ethereum. StarkNet consente a qualsiasi dApp di ottenere una scala illimitata per il suo calcolo — senza compromettere la composizione e la sicurezza di Ethereum.

Il mese scorso,[StarkNet Alpha 0](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)è stato rilasciato al mondo. Per la prima volta, gli sviluppatori sono in grado di[scrivere](https://kobi.one/2021/07/14/stardrop.html)qualsiasi smart contract e distribuirlo, senza permesso, in un ZK-Rollup. Gli utenti sono in grado di inviare transazioni alla rete, Ethereum-style.

Oggi stiamo rilasciando una nuova versione; Alpha 1. Stiamo rilasciando funzionalità su base continuativa per consentire agli sviluppatori di interagire con le nuove funzionalità il più presto possibile. Prevediamo che questo rafforzerà il ciclo di feedback e permetterà alla community di migliorare rapidamente StarkNet.

### **Funzionalità Alpha 1**

#### Interazione L1<>L2

Alpha 1 include un protocollo di messaggistica L1<>L2, che consente agli sviluppatori di implementare flussi di transazioni senza soluzione di continuità tra L1 e L2. Gli sviluppatori possono ora inviare messaggi dai contratti L1 ai contratti L2 e viceversa.

Una delle bellezze di ZK-Rollups è che gli aggiornamenti di stato sono finali, senza alcun ritardo. Ciò significa che i messaggi inviati da L2 a L1 possono essere immediatamente inoltrati al contratto di destinazione. Ciò apre la strada alla creazione di applicazioni realmente interoperabili tra gli strati.

Sei interessato a provarlo? Il modo migliore per iniziare è seguire il tutorial[qui](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html).

Il nostro protocollo L1<>L2 deve molto ad altri L2s (in particolare Optimism e Arbitrum) il cui lavoro precedente in questo settore ha influenzato il nostro design.

#### Disponibilità Dei Dati On-Chain

Lo stato di aggiornamento di StarkNet è ora pubblicato anche come dati on-chain su Ethereum. Questo consente a qualsiasi utente di costruire completamente lo stato di StarkNet dai dati L1. Ogni aggiornamento dello stato include lo stato diff, cioè quello che l'archiviazione è stata cambiata e il suo nuovo valore.

Anche qui ZK-Rollup mostra la sua forza. Contrariamente ai Rollup ottimistici, in cui i dati completi delle transazioni devono essere inviati in catena, in ZK-Rollups, solo i dati minimi assoluti necessari per ricavare il diff di stato vengono inviati in catena.

Considera un esempio primo, oracoli di prezzo. Una transazione per aggiornare un oracolo di prezzo di solito contiene più transazioni, ma aggiorna solo una cella di archiviazione; il prezzo della coppia. I dati on-chain necessari per un aggiornamento di stato contenente le transazioni oracolo di prezzo in un Rollup ottimistico cresce in linea con il numero di aggiornamenti, mentre in un ZK-Rollup, sarà sempre un singolo aggiornamento di archiviazione.

Inoltre, gli algoritmi di compressione possono essere applicati ai dati pubblicati, e la loro validità sarà attestata dalla prova STARK, riducendo ulteriormente l’impronta on-chain. Le versioni future di StarkNet introdurranno ottimizzazioni innovative in questo settore.

#### StarkNet OS

Stiamo anche rilasciando il codice StarkNet Operating System. Il sistema operativo StarkNet è il programma Cairo che esegue StarkNet. Il sistema operativo gestisce tutto ciò che viene fatto sulla rete — distribuzione del contratto, esecuzione delle transazioni, L1<>L2 messaggi e altro ancora. L'architettura e il design di StarkNet OS saranno spiegati in dettaglio in un post separato.

#### Funzionalità Extra

Non solo lo StarkNet Alpha si è evoluto, ma stiamo anche costantemente migliorando il Cairo. Per una descrizione completa delle nuove funzionalità in Cairo v0.3.0, controllare le note di rilascio[qui](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.3.0).

### L'ecosistema sta crescendo

Oltre al costante lavoro su StarkNet Core, il lavoro dell’ecosistema su StarkNet è in continua espansione. Siamo entusiasti di collaborare con alcuni dei team più talentuosi dell'ecosistema.

Fermion, il primo sforzo Full Node di StarkNet, è sviluppato dal team di Erigon (ex TurboGeth). Sulla base della loro enorme conoscenza acquisita dal lavoro su Ethereum, siamo in grado di lavorare con loro per costruire un potente Full Node, che incorpora molte lezioni apprese mentre si costruisce per Ethereum, pur beneficiando della scala offerta dalle prove STARK.

Minuti stanno lavorando su Warp, un compilatore da EVM al Cairo. Legato dalla nostra cultura di presentare nuovi strumenti solo una volta che sono pronti, tutto quello che possiamo dire è, aspettatevi notizie entusiasmanti su questo fronte molto presto! Possiamo dire, tuttavia, che si muovono a velocità di ordito.

### Quello che il futuro detiene

La prossima tappa sulla nostra strada per StarkNet sarà la compositività — permettendo ai contratti di interagire tra di loro. Rimani sintonizzato.

[StarkWare](https://starkware.co/)

1 Come abbiamo detto in precedenza, ZK-Rollup è ormai un termine comunemente usato, ma molto fuorviante: queste soluzioni non offrono (attualmente) conoscenze zero.

**Aggiornamento (novembre 2021):**StarkNet Alpha è in diretta su Ethereum Mainnet