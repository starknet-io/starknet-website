### TL;DR

* *StarkNet Alpha sta lanciando su Mainnet Ethereum entro novembre*
* Il tempo di costruire su StarkNet è ora

### Una Breve Storia

Abbiamo annunciato la nostra visione per[StarkNet](https://starkware.co/product/starknet/)all'inizio dell'anno: portare una scalabilità massiccia a Ethereum preservando la sicurezza L1, interazioni senza permesso e decentramento.\
Abbiamo rilasciato**[StarkNet Alpha](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)**su una testnet pubblica in giugno. Questa versione supportava gli smart contract generici di calcolo completamente permissionless. Da allora lo abbiamo aggiornato due volte: prima a**Alpha 1**— fornendo[L1<>L2 messaggistica e dati on-chain](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), e poi a**Alpha 2**— supportando[di compostabilità](https://medium.com/starkware/starknet-alpha-2-4aa116f0ecfc).

StarkNet Alpha 2 ora supporta smart contract componibili di calcolo generale in uno stato simile a Ethereo, con la capacità per i contratti L1 e L2 di interagire tra loro. Leggi tutto[qui](https://www.cairo-lang.org/docs/hello_starknet/index.html).

### Che cos’è StarkNet Alpha su Mainnet?

StarkNet Alpha su Mainnet supporterà funzionalità simili a quelle attualmente disponibili sulla rete di test pubblica di Goerli.

#### **Cosa aspettarsi**

Poiché StarkNet è ancora in fase di sviluppo, vogliamo introdurre le funzionalità in modo stepwise e garantire che le aspettative degli sviluppatori siano soddisfatte in ogni singolo passo. Due aspetti particolarmente importanti che vorremmo sottolineare sono:

* **Distribuzione smart contract autorizzata**: Seguiremo il playbook sensato introdotto dai nostri colleghi Optimistic Rollup: inizieremo con*distribuzione contract*autorizzata. Il protocollo che specifica come richiedere l'inclusione del tuo smart contract in questa whitelist iniziale sarà pubblicato nelle prossime settimane.
* **Nessuna garanzia di retrocompatibilità**: ci aspettiamo che la transizione futura da StarkNet Alpha a StarkNet Beta includa la regenesi dello stato. La rete inizierà dal blocco 0 e le applicazioni dovranno ridistribuire i loro contratti. Inoltre, gli sviluppatori e gli utenti dovrebbero notare che il previsto StarkNet Beta potrebbe non essere retrocompatibile con StarkNet Alpha, e. . gli sviluppatori potrebbero aver bisogno di modificare i loro contratti. Ovviamente, cercheremo di consentire una facile transizione per le applicazioni, con cambiamenti minimi richiesti.

#### Caratteristiche Aggiuntive A Lungo Termine

Come parte della transizione di StarkNet Alpha da testnet a Mainnet, faremo:

1. Aggiungi costruttori ai contratti.
2. Migliorare il quadro di prova.
3. Per blocchi e transazioni, passare dall'utilizzo di un ID all'utilizzo di un hash.

Abbiamo in programma di continuare il dispiegamento di nuove funzionalità a cadenza regolare, proprio come abbiamo fatto sulla rete di test pubblica. A breve termine, pianifichiamo i seguenti aggiornamenti:

1. Contratti Account e Contratti Token — aprendo la strada per le applicazioni DeFi per interagire con StarkNet nel modo in cui hanno familiarità.
2. Miglioramento della funzionalità del contratto — supporto per l'aggiornamento del contratto ed eventi.
3. Warp: il compilatore Solidity-to-Cairo sviluppato da Dutch mind permetterà una transizione fluida dai contratti smart Solidity agli smart contract StarkNet.
4. Ethereum Signatures: il supporto nativo per ECDSA su secp256k1 consentirà una più facile integrazione con i portafogli esistenti.
5. StarkNet Full Node: un Full Node permetterà agli utenti di partecipare alla rete con i requisiti hardware alla pari di quelli di un Ethereum Full Node.

#### Meccanismo Di Tariffa

Il meccanismo delle commissioni sarà attivato non appena i contratti di conto e i contratti di token saranno aggiunti a StarkNet Alpha.

Tutte le operazioni sottoposte a StarkNet saranno soggette a una commissione destinata a coprire i costi L1 e off-chain. La tassa sarà inizialmente addebitata in ETH. Il costo di una singola transazione diminuirà in quanto StarkNet aumenta la sua scala (come nel caso di tutti i sistemi basati su STARK esistenti). Quando creiamo i meccanismi di commissione iniziali, siamo favorevoli alla semplicità rispetto alla determinazione accurata dei prezzi delle transazioni in base alle risorse che consumano. Aspettatevi che questo meccanismo venga perfezionato e migliorato nel tempo.

Con un occhio per rendere StarkNet una rete sostenibile e incentivare i suoi operatori e sviluppatori, una parte dei ricavi raccolti dalle commissioni sarà distribuita agli sviluppatori di applicazioni e agli sviluppatori di StarkNet.

#### Sicurezza

Il modello di sicurezza StarkNet Alpha su Mainnet seguirà il modello corrente sulla rete di test:

* Ogni transizione statale è sostenuta da una prova STARK, così è garantito per essere valido.
* Tutti i dati di stato saranno pubblicati in catena in modo che lo stato sarà pienamente realizzabile da L1.
* Ci sarà un singolo sequenziatore.
* La rete sarà aggiornabile senza alcun ritardo nel tempo.

### L'ecosistema StarkNet sta crescendo

Aprire StarkNet al mondo ha attirato una massiccia ondata di sviluppatori interessati a imparare il Cairo e a sviluppare su StarkNet. Hanno fornito un feedback inestimabile, ed è stato un vero piacere vedere vibranti discussioni sulla StarkNet[Discord](https://discord.gg/uJ9HZTUk2Y).

Inoltre, StarkNet è in fase di sviluppo non solo da parte del team StarkWare, ma anche da parte di alcuni dei team più forti dell'ecosistema blockchain:

* Minimo sta lavorando su due progetti:

1. **[Warp](https://github.com/NethermindEth/warp)**: un compilatore Solidity to Cairo

2. **[Voyager](https://voyager.online/)**: un esploratore di blocchi StarkNet

* Open Zeppelin sta lavorando su un'implementazione[Standard Contracts](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)per StarkNet e ha anche iniziato a lavorare sull'ambiente di uno sviluppatore:[Nile](https://github.com/martriay/nile).
* ShardLabs sta lavorando su un plugin[StarkNet HardHat](https://github.com/Shard-Labs/starknet-hardhat-plugin)e su un migliore framework di test.
* Il team Erigon sta lavorando per espandere il proprio Ethereum Full Node per supportare StarkNet (nome in codice: Fermion). Stanno lavorando con noi sulla progettazione di meccanismi di base di StarkNet.
* Equilibrium sta lavorando su un'implementazione StarkNet Full Node in Rust,
* Servizi di audit del Cairo: nei prossimi mesi ABDK, ConsenSys Diligence, Peckshield e Trail of Bits condurranno audit del Cairo.
* Audit StarkNet: abbiamo iniziato con la revisione delle fondamenta della rete:

1. **CryptoExperts**effettuerà un audit del Cairo Solidity Verifier.
2. Una prova formale**LEAN**delle specifiche del Cairo è stata recentemente completata e pubblicata come[carta](https://arxiv.org/abs/2109.14534)e GitHub[repo](https://github.com/starkware-libs/formal-proofs).

Aspettatevi molte collaborazioni più interessanti da pubblicare nei prossimi mesi!

### STARK sono in scala oggi

Ci avviciniamo al lancio di StarkNet Alpha con fiducia, come StarkEx, il nostro SaaS in scala standalone, ha dimostrato come STARK può scalare in modo massiccio le applicazioni Ethereum. Abbiamo lanciato StarkEx per[dYdX](https://dydx.exchange/)(contratti perpetui),[DeversiFi](https://www.deversifi.com/)(trading spot e pagamenti), così come per[Immutabile](https://www.immutable.com/)e[Sorare](https://sorare.com/)(NFT minting and trading). Abbiamo visto i loro costi di gas / tx ridotti di 100X-200X, a circa 650 gas / tx in Validium (dati off-chain), e 1100 gas / tx per un ZK-Rollup.

Ad oggi, StarkEx ha regolato $80B in operazioni e oltre 27M transazioni, molto eclissando qualsiasi altra soluzione L2 — e tutti loro combinati.

### Agisci Ora

Non c'è mai stato un momento migliore per unirsi all'ecosistema StarkNet in crescita costruendo il tuo prossimo dApp o utili strumenti di sviluppo.

Ti invitiamo a:

1. Unisciti alla[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y), dove puoi incontrare e coinvolgere la comunità StarkNet.
2. [Inizia a imparare](https://www.cairo-lang.org/docs/hello_starknet/index.html)come scrivere gli smart contract di StarkNet.
3. [DM us](https://twitter.com/StarkWareLtd)— il nostro team è ansioso di aiutare le tue idee e iniziative a prendere vita.

**Aggiornamento (novembre 2021):**StarkNet Alpha è in diretta su Ethereum Mainnet