### **TL;DR**

* [StarkNet Planets Alpha](https://voyager.online/)— il primo passo sulla nostra strada verso Mainnet — è ora in diretta su Testnet!
* [StarkNet](https://starkware.co/product/starknet/)è un ZK-Rollup1 Turing-complete senza permessi.
* Gli sviluppatori possono implementare la loro logica di business di scelta in un smart contract e distribuirlo senza autorizzazioni su StarkNet.
* Le transizioni di stato di StarkNet sono provate off-chain e quindi verificato on-chain.
* Proprio come Ethereum, gli utenti possono interagire direttamente con questi smart contract.

### **Introduzione**

Abbiamo[annunciato](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)la tabella di marcia per[StarkNet](https://starkware.co/product/starknet/)nel gennaio 2021. Il Santo Graal delle soluzioni di scalabilità sosterrebbe (i) i contratti intelligenti arbitrari, con (ii) la compostabilità, (iii) operati su una rete decentralizzata. Oggi annunciamo lo spiegamento su testnet del Passo 1: StarkNet Planets Alpha. Il sistema Alpha supporta gli smart contract arbitrari. La composizione sarà supportata nel corso di quest'anno, con il decentramento da seguire.

E' molto importante per noi essere pienamente trasparenti e fissare le aspettative in modo adeguato. Lo scopo di questo post è quello di elencare chiaramente ciò che è già supportato e quali funzionalità sono ancora mancanti. Quello che stiamo rilasciando oggi è il lavoro in corso su testnet. Crediamo che questo rilascio precoce aiuterà la formazione di un ecosistema sano intorno a StarkNet e i suoi strumenti. Siamo ansiosi di coinvolgere gli sviluppatori nella costruzione della rete con noi, e di ottenere un feedback continuo dalla comunità.

### **Cosa c’è in StarkNet Planets Alpha?**

**Funzionalità:**L'Alpha consente agli sviluppatori di scrivere e distribuire contratti StarkNet per il calcolo generale. Non c'è whitelisting - qualsiasi sviluppatore può scrivere e distribuire qualsiasi contratto desideri. Gli utenti possono interagire con questi contratti, inviando loro transazioni e ispezionando il loro stato. Tutti i contratti esistono in un unico Stato2. Gli aggiornamenti a questo stato sono comprovati off-chain, e verificato on-chain — in Alpha, la verifica viene effettuata su testnet.

**StarkNet OS:**La funzionalità di cui sopra è supportata da un nuovo “sistema operativo” che chiamiamo StarkNet OS. Offre*transizioni di stato*dimostrabili su StarkNet. Gli sviluppatori di Ethereum possono pensarlo come l'equivalente del EVM: è responsabile per invocare le funzioni di smart contract, la gestione dei contratti di archiviazione, ecc. Pubblicheremo un post separato che dettaglierà l'architettura del sistema operativo StarkNet.

**Cosa non c'è nell'Alfa?**L'Alpha manca ancora alcune funzionalità chiave, come l'interazione L1<>L2, i dati on-chain e la compostabilità. Maggiori informazioni su questi qui sotto.

#### **Ottenere I Tuoi Piedi Bagnati**

Inizia con il nostro[tutorial e la documentazione](https://www.cairo-lang.org/docs/hello_starknet/).

Poi, puoi leggere il[esempio di smart contract AMM](http://cairo-lang.org/docs/hello_starknet/amm.html)che abbiamo scritto e distribuito su StarkNet. Si tratta di un semplice AMM, e si può interagire con esso[qui](https://starkware-amm-demo.netlify.app/swap). Ora sei pronto a scrivere e distribuire smart contract su StarkNet. L'esploratore di blocchi per StarkNet —[Voyager](https://voyager.online/)— permette a chiunque di ispezionare lo stato di StarkNet.\
Mettendo i piedi bagnati, crediamo che sarai meglio preparato a costruire su StarkNet, come continuiamo a lanciare caratteristiche aggiuntive. Siamo già impegnati a pianificare un primo hackathon, così come workshop per gli sviluppatori.

### **Prossimi passi per StarkNet**

Le capacità chiave ancora mancanti nell'Alpha saranno implementate a partire dalle prossime settimane. Si tratta di:

* L1<>L2 Interazione, ad esempio la capacità di depositare e prelevare fondi in L1.
* Dati in catena: pubblicazione di tutte le modifiche di archiviazione su Ethereum.
* Composibilità: permettere ai contratti di comunicare tra loro.

Con queste caratteristiche in atto, saremo pronti a portare StarkNet a Ethereum Mainnet. Chiamiamo questo passo nell’evoluzione di StarkNet, Costellazioni, e quando lo raggiungiamo, si sarà in grado di costruire e distribuire senza permessi su Ethereum Mainnet scalabile L2 dApps.

#### **L'Ecosistema StarkNet**

Siamo molto entusiasti dell'ecosistema che si sta formando intorno a StarkNet, quindi ci fermeremo a ringraziare i nostri collaboratori finora.

Stiamo lavorando a stretto contatto con[Nethermind](https://twitter.com/nethermindeth)e il team Nubia,[Alexey Akhunov](https://twitter.com/realLedgerwatch)(Erigon) &[Igor Mandrigin](https://twitter.com/mandrigin)(gateway.fm),[Iddo Bentov](https://www.cs.cornell.edu/~iddo/),[dOrg](https://twitter.com/dOrg_tech),[Prof. Tim Roughgarden](https://twitter.com/algo_class),[Prof Jeremy Avigad](https://www.andrew.cmu.edu/user/avigad/)& Yoav Seginer, ultimo ma non meno importante — il team[Paradigm](https://twitter.com/paradigm).\
I nostri primi partner —[dYdX](https://twitter.com/dydxprotocol),[Immutable](https://twitter.com/Immutable),[DeversiFi](https://twitter.com/deversifi), così come[Sorare](https://twitter.com/SorareHQ),[Celer](https://twitter.com/CelerNetwork)e altri — ci hanno fornito preziosi input sin dal primo giorno e ci hanno permesso di costruire una produzione rete di qualità per utenti reali.\
Continuiamo a stupirci della qualità dei contenuti creati dalla community, da persone come[Bobbin Threadbare](https://twitter.com/bobbinth),[Daniel Kroni](https://github.com/danielkroeni/cairo-playground/blob/main/anon-bank/README.md),[Adrian Hamelink](https://twitter.com/adr1anh),[perama](https://twitter.com/eth_worm),[Francesco Ceccon](https://twitter.com/ceccon_me),[Ilian Malchev](http://twitter.com/imalchev), e la[squadra di Alessandria](https://blockchainpartner.fr/).

Siamo ansiosi di vedere cosa la comunità creerà su tutti i fronti: strumenti per sviluppatori, contenuti, e naturalmente applicazioni StarkNet che costruiranno. Manteniamo la conversazione in corso nei tuoi media preferiti di scelta:[discord](https://discord.gg/uJ9HZTUk2Y),[Twitter](https://twitter.com/CairoLang),[email](mailto:info@starkware.co), e presto utilizzando i moduli di comunicazione più decentrati: f2f.

1 Non siamo ammiratori del termine ZK-Rollup, come — matematicamente parlando — non è conoscenza zero, ma tutti sanno che cosa intendiamo

2 A differenza dello stato separato mantenuto per le distribuzioni StarkEx attuali su Mainnet

**Aggiornamento (novembre 2021):**StarkNet Alpha è in diretta su Ethereum Mainnet