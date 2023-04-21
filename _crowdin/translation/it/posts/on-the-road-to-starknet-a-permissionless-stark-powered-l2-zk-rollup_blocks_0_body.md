#### **TL;DR**

Stiamo costruendo StarkNet in quattro fasi:

* Fase 0 — Fondazioni (completate*)
* Fase I — Pianeti: Rollup Single-App
* Fase Ii — Costellazioni: Rollup Multi-App
* Fase III — Universo: Un Rollup Decentralizzato

Ci aspettiamo di avere Passo che ho schierato in pochi mesi, ed essere sul nostro cammino verso i passi II & III entro la fine del 2021.

### **Introduzione**

StarkWare sta costruendo StarkNet, un L2 ZK-Rollup decentralizzato, permissless e resistente alla censura con tecnologia STARK che supporta il calcolo generico su Ethereum. Si basa sulla lingua[del Cairo completa di Turing](https://www.cairo-lang.org/).

Sviluppatori, gli utenti e i nodi StarkNet saranno in grado di fare tutto ciò che ci si aspetterebbe da un Rollup L2 senza permesso: gli sviluppatori possono costruire applicazioni che implementano la loro logica aziendale e li distribuiscono su StarkNet. Gli utenti possono inviare transazioni a StarkNet da eseguire, proprio come interagiscono con Ethereum oggi. I nodi e i partecipanti di StarkNet saranno incentivati economicamente per garantire che la rete funzioni in modo efficiente ed equo.

Tutte le transazioni StarkNet saranno periodicamente lotti e la loro validità sarà dimostrata in una prova STARK, da verificare su Ethereum. Poiché lo sforzo computazionale richiesto per verificare le prove STARK è esponenzialmente piccolo rispetto al calcolo dimostrato, StarkNet scalerà Ethereum per ordini di magnitudine.

Poiché tutte le transizioni dello stato StarkNet saranno STARK-provate, solo quelle valide saranno accettate su Ethereum. Tutti i dati necessari per ricostruire l'intero stato StarkNet saranno pubblicati nella catena. Chiunque sarà in grado di eseguire il proprio nodo StarkNet. Queste proprietà renderanno StarkNet sicuro e permissless come Ethereum.

Siamo stati in esso per tre anni, e hanno già raggiunto alcune pietre miliari notevoli nel trasformare “Moon Math” in software di produzione-grado ed efficiente in esecuzione su Ethereum. Il modo in cui StarkWare fa le cose è affrontare i problemi difficili prima, costruire la tecnologia di base, e poi rilasciarla alla produzione in modo frammentario. Continueremo a costruire in questo modo mentre portiamo StarkNet al completamento.

![](/assets/ontheroad_02.png)

**Fase 0 — Fondazioni**

StarkWare ha completato la creazione di alcune importanti fondamenta per StarkNet.

#### **Cairo**

[Il Cairo](https://twitter.com/StarkWareLtd/status/1300353049836376066?s=20)è il nostro framework Turing-Complete High Level Language & per la produzione di prove STARK per il calcolo generale. Invece di “circuiti” o AIRs complessi artigianali, uno sviluppatore di applicazioni può utilizzare Cairo per definire qualsiasi logica di business, hanno dimostrato off-chain, e verificato on-chain. Cairo è[in produzione su Mainnet](https://twitter.com/StarkWareLtd/status/1320695603492507648?s=20), ed è anche[disponibile per gli sviluppatori](http://cairo-lang.org/).

Tra un paio di settimane lanceremo su un pubblico Ethereum testnet una versione Alpha del Cairo Generic Proof Service (GPS). *Questo permetterà agli sviluppatori di costruire le proprie applicazioni utilizzando il Cairo, implementando qualsiasi logica commerciale desideri. Essi invieranno il loro codice del Cairo al GPS per essere dimostrato, e poi verificato in catena.*

Il GPS consente una prova unica per affermare l'integrità dell'esecuzione di applicazioni completamente separate e indipendenti, dando così a tali applicazioni la possibilità di ammortizzare la spesa gas di verifica della prova tra di loro.

Cairo e GPS sono la base di StarkNet — la nostra decisione di esternalizzare entrambi agli sviluppatori fornisce loro un'esposizione precoce a questa tecnologia, non solo in modo che possano iniziare a costruire su di esso, ma anche in modo che possano influenzare l'evoluzione di StarkNet.

Continueremo a sviluppare il Cairo in base alle esigenze e al feedback della comunità degli sviluppatori. Miglioreremo questo linguaggio con nuove funzionalità, sintassi e builtins che ne miglioreranno l'usabilità, e continueremo a sviluppare e migliorare gli strumenti Cairo: compilatori, tracer/debugger, e le integrazioni a IDE.

StarkNet avrà il Cairo in esecuzione sotto il cofano.

#### **STARK Software Stack**

StarkWare ha sviluppato il più potente sistema a prova nell’ecosistema, ed è stato[vivo su Mainnet](https://medium.com/starkware/starks-over-mainnet-b83e63db04c0)per mesi. StarkWare ha anche sviluppato[ethSTARK](https://twitter.com/StarkWareLtd/status/1264911004099543040?s=20), il nostro prover, open-source, che è 20X più veloce di qualsiasi altro prover; offre[firme a conoscenza zero e post-quanto-sicure](https://twitter.com/StarkWareLabs/status/1331930111227080709).

Le nostre misurazioni di scala**— non estrapolazioni né promesse — includono l'elaborazione di transazioni 300K in un'unica prova su Mainnet, raggiungere[il record mondiale in Rollup throughput: 3K tps](https://twitter.com/StarkWareLtd/status/1287770381525422082?s=20). Nel processo, abbiamo raggiunto il record mondiale per l'efficienza del gas Rollup: 315 gas/tx, ordini di grandezza più economici delle transazioni su Ethereum L1.

Questa tecnologia sarà la pietra angolare dello strato di prova decentralizzato di StarkNet, e quindi rilasceremo ulteriori e potenziati provers come parte dello sviluppo di StarkNet (più su quello in un prossimo post sul blog).

#### **StarkEx**

StarkEx è il nostro motore di scalabilità L2. It has been serving [DeversiFi](https://twitter.com/deversifi)’s customers on Mainnet since June 2020. Potenzierà sia[dYdX](https://twitter.com/dydxprotocol)che[ImmutableX](https://twitter.com/Immutable)a partire da poche settimane. StarkEx è in grado di gestire complesse logiche di trading (trading a pronti, derivati, NFTs) e pagamenti.

Sviluppare StarkEx è stato il nostro modo di dogfood la nostra catena di strumenti e testarlo in base alle esigenze del mondo reale. Non c’è niente di simile alle esigenze delle applicazioni reali e degli utenti live per aiutare gli strumenti a maturare ed evolvere. Ci aiuta anche a capire quali elementi devono essere indirizzati per servire meglio l'ecosistema, ad esempio le integrazioni con portafogli e gli esploratori di blocchi.

StarkEx è un esempio live della capacità di scalare le applicazioni utilizzando un ZK-Rollup basato su STARK, ed è la prima applicazione in produzione su Mainnet scritta al Cairo. Come tale, sarà anche una delle applicazioni in esecuzione su StarkNet.

![](/assets/ontheroad_03.png)

### **La Strada In Avanti**

#### **Fase I — Pianeti: Rollup Single-App**

Questo passo consentirà agli sviluppatori di costruire e distribuire le proprie applicazioni scalabili su StarkNet.

A questo punto, ogni istanza StarkNet sarà in grado di eseguire una singola applicazione. Diverse istanze possono eseguire diverse applicazioni.\
Il framework StarkNet includerà quanto segue:

* Meccanismi necessari per generare prove STARK per la logica arbitraria del Cairo, e quindi inviarli e verificarli su Ethereum.
* Interazioni con L1 Ethereum: depositi e prelievi di gettoni L1, pubblicazione dei dati on-chain, Escape Mechanisms proteggendo gli utenti StarkNet da operatori dannosi StarkNet, ecc.
* Gestione dei saldi utente L2, e dello storage e della memoria dell'applicazione.

Gli sviluppatori saranno in grado di concentrarsi esclusivamente sulla costruzione della logica commerciale della loro applicazione, e poi passare alla produzione: distribuire e eseguire su scala StarkNet.

Ciò che ci permette di costruire un general-computation scalabile ZK-Rollup è la combinazione di:

* Il Cairo, che è un linguaggio di programmazione generale-completo
* Il nostro robusto stack STARK (prover e verificatore), che consente di combinare enormi calcoli in un'unica prova

#### **Fase Ii — Costellazioni: Rollup Multi-App**

Il passo successivo supporterà più applicazioni in esecuzione sulla stessa istanza StarkNet e accedendo allo stesso stato globale L2. Ciò consentirà l'interoperabilità tra le diverse applicazioni, nonché la riduzione dei costi del gas grazie a economie di scala migliorate.

Il Cairo, il potente stack STARK e GPS amplificano il vantaggio competitivo di StarkNet nel supportare un rollup multi-app.

In questa fase, StarkNet sarà un framework completamente funzionale per l'esecuzione di*applicazioni multiple*con qualsiasi logica commerciale arbitraria in cima a Ethereum, con ogni istanza gestita da un singolo operatore.

Un operatore può ora girare un nodo StarkNet, e gli sviluppatori di applicazioni possono distribuire i loro contratti su di esso. Dal punto di vista degli utenti, StarkNet ora sembra e si sente come Ethereum, con una scala più alta.

#### **Fase III — Universo: Rollup Decentralizzato**

L'ultimo passo nell'evoluzione di StarkNet sta decentrando il suo funzionamento.

Intriganti domande di R&S che stiamo affrontando ora che riguardano questa fase includono (i) l'uso di ZK-Rollups per migliorare i meccanismi di raggiungimento del consenso, e (ii) la progettazione di meccanismi cripto-economici per incentivare i contributori e gli operatori decentralizzati StarkNet (sequenziatori di transazioni, provers, ecc. funzionare in modo efficiente, equo e sicuro.

### **Conclusione**

StarkWare sta costruendo StarkNet, una ZK-Rollup su Ethereum senza permessi STARK alimentata da STARK, che supporta il calcolo generale basato sul linguaggio del Cairo.

StarkNet consentirà alle applicazioni di scalare senza compromettere la sicurezza, gli utenti a pagare tariffe di transazione ragionevoli, e l'intero ecosistema per crescere in modo sostanziale e soddisfare la sua promessa.

Siamo lieti di invitare la comunità di sviluppatori a[unirsi a noi](https://twitter.com/StarkWareLtd)in questo viaggio.

**Aggiornamento (novembre 2021):**StarkNet Alpha è in diretta su Ethereum Mainnet