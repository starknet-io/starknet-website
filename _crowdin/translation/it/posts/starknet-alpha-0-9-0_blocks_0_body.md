### TL;DR

* **Le tasse sono ora obbligatorie su Testnet, presto su Mainnet**
* Il modello di fabbrica del contratto è ora possibile!
* StarkNet sta introducendo classi di contratto
* La chiamata delegata è sostituita con la chiamata libreria

### Introduzione

Siamo felici di presentare StarkNet Alpha 0.9.0! Questa è una versione importante in cui StarkNet compie passi significativi verso la maturità, con aggiunte sostanziali sia alla funzionalità che al design del protocollo.

**Le commissioni sono obbligatorie**(attualmente solo su Testnet, fino alla versione 0.9. vivrà su Mainnet) — qualsiasi L2 prosperante deve avere un proprio sistema indipendente di tasse. Dopo aver introdotto le tasse come funzione opzionale nella versione 0.8. , ora ci sentiamo fiduciosi di includerli come una componente centrale del protocollo, e renderli obbligatori. Maggiori dettagli qui sotto.

Un altro cambiamento significativo a livello di protocollo è l'introduzione delle classi Contract e la separazione classe/istanza. Ciò consente un uso più semplice della funzionalità \`delegate_call\` e delle distribuzioni dei contratti esistenti, abilitando il modello di fabbrica su StarkNet.

### Classi Di Contratto

Prendendo ispirazione dalla programmazione orientata agli oggetti, distinguiamo tra il codice del contratto e la sua attuazione. Lo facciamo separando i contratti in classi e casi.

Una classe di contratto****è la definizione del contratto: Il suo bytecode del Cairo, informazioni sui suggerimenti, nomi dei punti di ingresso e tutto il necessario per definirne in modo inequivocabile la semantica. Ogni classe è identificata dal suo hash di classe (analogo a un nome di classe delle lingue OOP).

Un'istanza di contratto****, o semplicemente un contratto, è un contratto distribuito corrispondente ad alcune classi. Si noti che solo le istanze del contratto si comportano come contratti, vale a dire, hanno il loro deposito e sono chiamabili da transazioni/altri contratti. Una classe contrattuale non ha necessariamente un'istanza distribuita in StarkNet. L'introduzione delle classi viene con diverse modifiche del protocollo.

#### ‘Dichiarare’ Transazione

Stiamo introducendo un nuovo tipo di transazione per StarkNet: la transazione[‘declare’](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction), che consente di dichiarare una classe di contratto**.**A differenza della transazione \`deploy\`, questa non distribuisce un'istanza di quella classe. Lo stato di StarkNet includerà un elenco di classi dichiarate. Nuove classi possono essere aggiunte tramite la nuova transazione \`declare\`.

#### Le fabbriche di chiamata e contratto del sistema di “Deploy”.

Una volta che una classe è stata dichiarata, cioè, la corrispondente transazione \`declare\` è stata accettata, possiamo distribuire nuove istanze di quella classe. A tal fine, utilizziamo la nuova chiamata di sistema \`deploy\`, che prende i seguenti argomenti:

* La classe hash
* Sale
* Argomenti del costruttore

Il syscall «deploy» dispiegherà una nuova istanza di quella classe di contratto, il cui[indirizzo](https://docs.starknet.io/docs/Contracts/contract-address)sarà determinato dai tre parametri di cui sopra e l'indirizzo del deployer (il contratto che ha invocato la chiamata di sistema).

Includere le distribuzioni all'interno di una transazione di invocazione ci permette di tariffare e addebitare le tariffe per le distribuzioni senza dover trattare le distribuzioni e le invocazioni in modo diverso. Per ulteriori informazioni sulle commissioni di implementazione, vedere[i documenti](https://docs.starknet.io/docs/Fees/fee-mechanism#deployed-contracts).

Questa funzione introduce le fabbriche di contratto in StarkNet, come qualsiasi contratto può invocare il syscall \`deploy\`, creando nuovi contratti.

#### Passando da ‘Delegate Call’ a ‘Library Call’

L’introduzione delle classi ci permette di affrontare un problema ben noto nel meccanismo di chiamata dei delegati di Ethereum: Quando un contratto esegue una chiamata dei delegati a un altro contratto, ha solo bisogno della sua classe (il suo codice) piuttosto che di un'istanza effettiva (il suo stoccaggio). La necessità di specificare una specifica istanza contrattuale quando si effettua una chiamata di un delegato è quindi una cattiva pratica (anzi, ha portato ad alcuni bug nei contratti di Ethereum) — solo la classe deve essere specificata.

La vecchia chiamata di sistema \`delegate_call\` ora diventa deprecata (i vecchi contratti già distribuiti continueranno a funzionare, ma**i contratti che utilizzano \`delegate_call\` non saranno più compilati**), ed è sostituito da una nuova chiamata di sistema library_call che ottiene l'hash di classe (di una classe precedentemente dichiarata) invece di un indirizzo di istanza di contratto. Si noti che un solo contratto effettivo è coinvolto in una chiamata della biblioteca, in modo da evitare l'ambiguità tra il contratto di chiamata e il contratto di esecuzione.

#### Nuovi endpoint API

Abbiamo aggiunto due nuovi endpoint all'API, consentendo il recupero dei dati relativi alla classe:

* \`get_class_by_hash\`: restituisce la definizione della classe dato l'hash della classe
* \`get_class_hash_at\`: restituisce l'hash di classe di un contratto distribuito all'indirizzo del contratto

Si noti che per ottenere la classe di un contratto schierato direttamente, piuttosto che passare attraverso i due metodi di cui sopra, puoi usare il vecchio endpoint \`get_full_contract\`, che sarà rinominato nelle versioni future. Tutti gli endpoint di cui sopra sono utilizzabili anche dalla[StarkNet CLI](https://docs.starknet.io/docs/CLI/commands).

#### Commissioni

Procediamo a incorporare commissioni in StarkNet, rendendole obbligatorie (prima su Testnet, e poi anche su Mainnet) per ``[invoke](https://docs.starknet.io/docs/Blocks/transactions#invoke-function)\` transazioni. La transazione \`declare\` non richiederà commissioni a questo punto. Allo stesso modo, le transazioni \`deploy`` non richiederanno una commissione, tuttavia, si noti che questo tipo di transazione molto probabilmente sarà deprecato nelle versioni future.

Rimangono molte questioni aperte in questo settore, le più importanti sono come addebitare le commissioni per le dichiarazioni contrattuali e la distribuzione dei conti StarkNet. Ci occuperemo di questi temi nelle future versioni.

### Che Cosa È Successivo?

Seguendo la nostra roadmap che[abbiamo annunciato nel febbraio](https://medium.com/starkware/starknet-on-to-the-next-challenge-96a39de7717), siamo impegnati a migliorare le prestazioni di StarkNet in generale, e le prestazioni del sequenziatore in particolare, per ottenere feedback più veloce degli utenti sulle loro transazioni. Nella prossima versione, abbiamo in programma di introdurre la parallelizzazione nel sequencer, consentendo una produzione di blocchi più veloce.

La prossima versione principale di StarkNet si concentrerà sulla struttura degli account di StarkNet, in un modo simile a[ERC-4337](https://medium.com/infinitism/erc-4337-account-abstraction-without-ethereum-protocol-changes-d75c9d94dc4a). Con questo, avremo finalizzato il modo in cui gli account StarkNet si comportano, compiendo un ulteriore passo importante verso l'adozione di massa!