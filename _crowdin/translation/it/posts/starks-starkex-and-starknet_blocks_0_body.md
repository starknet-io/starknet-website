### TL;DR

* STARKs abilita il ridimensionamento blockchain dimostrando in modo efficiente l'integrità dei calcoli
* StarkEx è un motore di ridimensionamento specifico per applicazioni
* StarkNet è una rete di Layer 2 senza permessi, smart contract

### **STARKs**

STARK (Scalable, Transparent ARgument of Knowledge) sono un sistema di prova che consente la prova e la verifica dei calcoli. Consente di elaborare un grande calcolo, generare una prova per la correttezza del calcolo, e quindi verificare la prova in pochissimi passaggi.

STARKs può svolgere un ruolo chiave nella scalabilità blockchain consentendo che i calcoli di grandi dimensioni siano effettuati fuori catena, se è meno costoso, lasciando solo la verifica, che richiede una frazione del calcolo, deve essere effettuata in catena. In altre parole, eseguendo pochissimi passaggi in catena, il verificatore afferma l'integrità di un calcolo molto più ampio che è stato fatto fuori catena.

Utilizzando STARKs, le soluzioni di livello 2 raggruppano e calcolano migliaia di transazioni, e quindi verificano la loro validità on-chain con una singola prova STARK. Il costo del processo on-chain è suddiviso tra**tutte le**transazioni nel lotto. Ciò si traduce in Ethereum sicurezza e basso costo del gas per transazione.

Il basso costo computazionale usurerà in una nuova classe di applicazioni che in precedenza non erano realizzabili on-chain. Queste proprietà rendono STARKs un elemento eccellente per migliorare l'esperienza dell'utente e ridurre i costi del gas, tutto mantenendo la sicurezza dello strato di insediamento di Ethereum.

StarkWare offre due soluzioni per scalare Ethereum con STARKs: StarkEx e StarkNet.

### **StarkEx**

[StarkEx](https://starkware.co/starkex/)è un framework per la creazione di soluzioni di ridimensionamento specifiche per le applicazioni. StarkEx è un toolbox di utili[flussi di applicazioni](https://docs.starkware.co/starkex-v4/starkex-deep-dive/regular-flows)che i progetti possono utilizzare per ottenere un calcolo off-chain a buon mercato. Una prova STARK, attestante la correttezza dell'esecuzione, è generata fuori catena. Tale prova può includere fino a 12.000–500.000 transazioni (a seconda del tipo di transazione). La prova viene quindi inviata al verificatore STARK per essere accettata on-chain. Ciò significa una verifica per tutte le transazioni — per un costo del gas ammortizzato incredibilmente basso per transazione.

Alcuni esempi delle applicazioni distribuite su StarkEx sono dYdX (trading perpetual), Immutabile e Sorare (NFTs — minting and trading), DeversiFi (spot trading) e Celer (DeFi Pooling).

StarkWare sta continuamente aggiungendo più flussi di applicazioni a StarkEx, seguendo il mercato e le esigenze dei suoi clienti.

### **StarkNet**

*[StarkNet](https://starkware.co/starknet/)è una rete di layer 2 senza permessi dove qualsiasi utente o sviluppatore può distribuire smart contract sviluppati nel linguaggio del Cairo.*

Confrontabile all'esperienza di Ethereum smart-contract, all'interno dell'ecosistema StarkNet, il tuo contratto può interagire con qualsiasi altro contratto distribuito su StarkNet, consentendo protocolli riccamente componibili. I contratti StarkNet possono anche interagire con i contratti Ethereum tramite il passaggio di messaggi asincroni.

A differenza di StarkEx, dove le applicazioni sono responsabili per l'invio di transazioni, StarkNet sequencers batch transazioni e inviarle per essere elaborate e provate. (Le sequencer di StarkNet sono attualmente gestite da StarkWare con piani futuri per decentralizzare.) Ciò significa che una volta che le applicazioni utilizzano i loro contratti del Cairo, non devono preoccuparsi di gestire infrastrutture aggiuntive dell'operatore. StarkNet supporta la modalità di disponibilità dei dati Rollup, il che significa che lo stato del rollup è scritto su Ethereum insieme alle prove STARK.

Una vasta comunità di sviluppatori è profondamente impegnata con l'ecosistema StarkNet, costruendo app, strumenti e infrastrutture. Decine di applicazioni sono già in diretta su testnet — DeFi, giochi, votazioni, AI e altro ancora. Più oltre, strumenti di sviluppo come block explorer, ambiente di test locale e framework SDK in diverse lingue e in più, sono in fase di costruzione da parte della comunità StarkNet. Inoltre, discussioni attive si svolgono nella piattaforma[Shamans’](https://community.starknet.io/), con suggerimenti per miglioramenti, potenziali caratteristiche e migliori pratiche.

### **Somma Su**

Sia[StarkEx](https://youtu.be/P-qoPVoneQA)che StarkNet sono soluzioni di scala basate su STARK. Entrambi forniscono scalabilità, bassi costi del gas e Sicurezza, ma hanno diversi requisiti operativi e modelli di interoperabilità. StarkEx potrebbe essere la soluzione giusta per un'applicazione che è in gran parte autonoma e si inserisce nelle API che StarkEx fornisce. StarkNet potrebbe essere più adatto per un protocollo che richiede interagire in modo sincrono con altri protocolli o ha esigenze che vanno al di là di ciò che StarkEx offre.

STARK ha rivoluzionato come le applicazioni possono essere costruite su Ethereum. StarkEx e StarkNet continueranno ad abilitare le applicazioni che in precedenza erano impraticabili e a spingere i limiti di ciò che è possibile sulla blockchain.

Questo articolo è stato scritto in collaborazione con[Tim Gestson](https://twitter.com/IcemanTim)e il team[StarkWare](https://starkware.co/)