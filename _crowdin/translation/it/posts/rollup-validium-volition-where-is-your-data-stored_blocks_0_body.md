### TL;DR

* StarkWare offre ai clienti una gamma di modalità di disponibilità dati (DA) tra cui scegliere, in base alla loro priorità.
* Ci sono tre approcci alla disponibilità dei dati per prove STARK, tutti sono già disponibili in produzione:\
  —**Rollup**: il libro mastro è pubblicato direttamente sulla blockchain\
  —**Validium**: un Data Availability Committee protegge il registro, with only a hash being stored on-chain\
  —**Volition**: apps can let users choose their DA mode — Rollup or Validium — for each and every transaction
* Non importa quale DA sia utilizzato — la validità di tutte le transazioni è garantita da STARKs

### Introduzione

Dal novembre 2022,[StarkEx](https://starkware.co/starkex/)ha regolato oltre 750 miliardi di dollari di volume di trading, e oltre 270 milioni di transazioni su Ethereum. Nello spazio NFT, applicazioni di alimentazione come ImmutableX e Sorare, StarkEx ha coniato oltre 85 milioni di NFTs ad un prezzo che è 1000x più economico di farlo direttamente su Ethereum. La tecnologia basata su STARK sta ridimensionando Ethereum. Ad esempio, in una sola settimana, StarkEx ha eseguito 1,6x il numero di transazioni come Ethereum (12m su StarkEx vs 7. m su Ethereum) mentre occupa meno dello 0,1% di Ethereum blockspace. E fa tutto questo dando agli utenti lo stesso livello di sicurezza come se si stesse sistemando direttamente su Ethereum.

### Come fa StarkWare a raggiungere questo obiettivo?

Gli utenti inviano transazioni su Layer 2 (StarkEx o StarkNet), che vengono batched e inviate a un prover. Questo prover STARK conosce lo stato del registro prima e dopo che queste transazioni sono state elaborate. Il dimostratore produce una prova STARK che attesta la validità del nuovo stato del libro mastro dopo che queste transazioni sono state eseguite. Il nuovo stato e la prova STARK vengono inviati al verificatore STARK on-chain. La verifica di questa prova avviene autonomamente tramite un smart contract immutabile su Ethereum.

Questa architettura fornisce il meglio di entrambi i mondi: possiamo avere bassi costi di transazione, pur avendo Ethereum nel mezzo come un arbitro neutrale. Ethereum come arbitro non è solo un bel da avere; fornisce una sicurezza critica per l'utente finale. Un utente che effettua transazioni può ora essere sicuro che i suoi fondi sono garantiti da Ethereum, e le transazioni sono immutabili una volta che sono verificati su Ethereum. L'utente ha anche la completa auto-custodia dei loro fondi. L'autocustodia è importante perché garantisce che l'utente abbia sempre accesso ai propri fondi, senza fare affidamento su terzi.

### Dove si inserisce la disponibilità dei dati?

È importante sottolineare sia ciò che questa prova sta facendo che ciò che non è**fare. La prova sta attestando la validità del nuovo stato, ma non è dire quello che è il nuovo stato. Per questo, hai bisogno della disponibilità dei dati. Se abbiamo solo la prova, allora la blockchain sa che ciò che è stato inviato è valido, ma non sa cosa il nuovo stato (ad es. bilancio del registro) è! I consumatori di questi dati includono gli utenti che hanno transazioni all'interno di queste prove. I dati dovrebbero essere messi a loro disposizione se vogliono prelevare fondi su Ethereum senza dover fidarsi dell'operatore Layer 2. Questo dà agli utenti piena autosufficienza dei loro fondi.

Una analogia per questo è il vostro insegnante di scuola superiore che ti chiede di dimostrare che x è uguale a x. Questo è banale per dimostrare. Che cosa è più difficile da rispondere: a che cosa è x in realtà uguale? Per questo, avete bisogno di un pezzo separato di informazioni. Potrebbe essere che x è uguale a 5, o un altro valore. Allo stesso modo, sulla blockchain, una prova STARK può essere presentata a un verificatore STARK smart contract per la verifica. E il verificatore può attestare che la prova è valida (x=x). Ma avete bisogno di un input separato per dirvi che cosa x (il nuovo bilancio del registro) è.

Per rendere disponibili questi dati esistono tre approcci:

#### Modalità Rollup

La modalità rollup assicura che lo stato del libro mastro sia memorizzato su Ethereum insieme alle prove. La modalità Rollup è attualmente utilizzata da[dYdX](https://dydx.exchange/)in produzione, ed è utilizzata anche dalla rete[Public StarkNet](http://starknet.io/)L2. I benefici qui sono chiari: si può ricreare lo stato del libro mastro solo interagendo con la blockchain Ethereum. L'implicazione di questo è che voi, in qualità di utente finale, potete fidatamente parlare con il relativo smart contract su Ethereum, e preleva i tuoi fondi anche se il sistema Layer 2 si spegne.

#### Validio

In modalità Rollup, la maggior parte dei costi del gas Ethereum va alla disponibilità dei dati e non alla verifica della prova. Questo perché è molto gas-intensive per memorizzare i dati sulla blockchain. In modalità Validium le informazioni del libro mastro non vengono inviate a Ethereum. Piuttosto, viene memorizzato off-chain con un Comitato di disponibilità dei dati. Ethereum memorizza un hash di queste informazioni di registro. Questo comitato per la disponibilità dei dati consiste in un quorum di membri indipendenti che sorvegliano il corretto aggiornamento dello stato e conservano una copia dei dati trattati. Ogni istanza StarkEx può creare il proprio quorum. I membri del Quorum per le applicazioni esistenti in esecuzione su StarkEx includono entità come[Consensys](https://consensys.net/),[Dutch mind](https://nethermind.io/),[Iqlusion](https://iqlusion.io/)e[Cephalopod](https://cephalopod.equipment/).

I vantaggi in questo caso sono evidenti. Non c'è bisogno di pagare le tasse di Ethereum gas per memorizzare le informazioni di registro in catena. Piuttosto, l'unica cosa memorizzata su Ethereum è un singolo hash delle informazioni del registro. Se vuoi prelevare fondi dal livello 2 senza fiducia parlando con Ethereum, è sufficiente richiedere la firma digitale di uno dei membri del Comitato per la disponibilità dei dati. I membri del DAC utilizzeranno la crittografia per dimostrare di possedere tali fondi.

Un altro vantaggio nascosto della Validium Data Availability è la riservatezza da parte delle persone che leggono la blockchain. In modalità Rollup, il saldo di ciascun conto al momento della presentazione di ogni prova è noto al pubblico. Con Validium, questi dati sono nascosti dalla blockchain — solo il Comitato disponibilità dati è consapevole di questo, perché è mantenuto fuori catena. Questo livello di riservatezza consente un'ampia varietà di casi di utilizzo in cui è importante offuscare i dati sulle transazioni.

#### Volition

Volition è un'architettura di disponibilità dei dati che offre la scelta tra Validium e Rollup Mode a livello di transazione. Lo fa tenendo un libro mastro in catena, e un altro libro mastro con un comitato di disponibilità dei dati. Gli utenti possono scegliere tra Validium e Rollup per ogni singola transazione.

Immaginate di acquistare un NFT davvero costoso come una Ape annoiata o un Cryptopunk, su un'app in esecuzione su StarkEx. Si consiglia di utilizzare la modalità Rollup per proteggere i dati per quel NFT, perché si desidera un record di quella specifica transazione memorizzata su Ethereum. Tuttavia, si può quindi acquistare un NFT davvero a buon mercato (ad es. un mantello per il tuo personaggio in un gioco blockchain), e in questa circostanza sarai felice di risparmiare denaro utilizzando Validium.

Se siete interessati alla scala raggiunta dalle prove STARK, allora per favore vieni a costruire su di noi.



Puoi sempre inviare un'email a[info@starkware.co](mailto:info@starkware.co)e un umano arriverà alla tua email.