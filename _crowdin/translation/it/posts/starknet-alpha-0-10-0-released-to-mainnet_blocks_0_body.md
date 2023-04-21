### TL;DR

* Miglioramenti dell'astrazione dell'account nello spirito dell'EIP-4337

1. Convalida — Esegui separazione
2. L'unicità della transazione è ora garantita nel protocollo (Nunque)

* Il meccanismo di contribuzione è esteso ai seguenti aspetti:

1. Messaggi L1→L2
2. Dichiarare Le Transazioni

* Poche modifiche della sintassi del Cairo

### Introduzione

Siamo entusiasti di presentare StarkNet Alpha 0.10.0. Questa versione è un altro passo verso il ridimensionamento di Ethereum senza compromettere la sicurezza e il decentramento.

Questo post del blog descrive brevemente le caratteristiche principali di questa versione. Per l'elenco completo delle modifiche, controlla le[note di rilascio](https://github.com/starkware-libs/cairo-lang/releases). Per informazioni più dettagliate, consulta la documentazione[](https://docs.starknet.io/).

### Modifiche Di Astrazione Dell'Account

Ci muoviamo in avanti con l'astrazione dell'account[StarkNet](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781). Questa versione introduce modifiche ispirate a[EIP-4337](https://eips.ethereum.org/EIPS/eip-4337).

#### Convalida/Esegui Separazione

Fino ad ora, la funzione \_\_execute\_\_ dell'account era responsabile sia per la convalida che per l'esecuzione della transazione. In 0.10.0 rompiamo questo accoppiamento e introduciamo una funzione separata \_\_validate\_\_ negli account. Dopo aver ricevuto una transazione, il contratto dell'account chiamerà prima \_\_validate\_\_, e poi, se riuscito, procedi con \_\_execute\_\_.

La separazione validata/esecuzione fornisce una distinzione a livello di protocollo tra transazioni non valide e ripristinate (ancora valide). Grazie a ciò, i sequencer potranno addebitare commissioni per l'esecuzione di una transazione valida, indipendentemente dal fatto che sia stata ripristinata o meno.

#### Nonce

Nella versione 0.10.0 viene aggiunto un campo nonce per imporre l'unicità della transazione a livello di protocollo. Fino ad ora i nonces erano gestiti a livello di contratto del conto, il che significava che una transazione con lo stesso hash poteva essere eseguita due volte teoricamente.

Analogamente a Ethereum, ogni contratto ora include una nonce, che conta il numero di transazioni eseguite da questo conto. I contratti di conto accetteranno solo transazioni con una controparte corrispondente, cioè se la nonce corrente del conto è X, allora accetterà solo le transazioni con nonce X.

#### Nuova Versione Transazione

Per consentire la retrocompatibilità, introdurremo queste due modifiche tramite una nuova versione della transazione —[v1](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C). Queste modifiche si applicheranno solo alla nuova versione, e i conti più vecchi saranno ancora in grado di eseguire le transazioni della versione 0.

Nota — la transazione v0 è ora deprecata e verrà rimossa in StarkNet Alpha v0.11.0. Assicurati di aggiornare per utilizzare la nuova versione della transazione.

Per informazioni più dettagliate sulla versione della transazione, si prega di leggere la documentazione[](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C).

#### Meccanismo Delle Commissioni

La nuova versione permette di includere le commissioni per due componenti necessari:

* [Messaggio L1→L2](https://docs.starknet.io/docs/L1-L2%20Communication/messaging-mechanism#l1--l2-message-fees)
* [Dichiara transazione](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)

Queste commissioni non saranno obbligatorie in questa versione e saranno applicate solo a partire da StarkNet Alpha v0.11.0.

#### Modifiche Sintassi Del Cairo

A favore del graduale progresso verso un aggiornamento del Cairo,[Cairo 1.0](https://www.youtube.com/watch?v=Ny4Rv6ztINU), questa versione include diverse modifiche della sintassi.

Per minimizzare l'inconveniente, la versione di rilascio includerà uno script di migrazione[](https://www.youtube.com/watch?v=kXs59zaQrsc)che applica automaticamente le modifiche di cui sopra. Puoi trovare maggiori dettagli[qui](https://github.com/starkware-libs/cairo-lang/releases).

### Che Cosa È Successivo?

* In poche settimane, abbiamo intenzione di introdurre la parallelizzazione nel sequencer, consentendo una produzione di blocchi più veloce (V0.10.1)
* A breve completeremo l'ultima parte che deve essere inclusa nel pagamento della tassa — Dispiegamento del conto
* Rilascio Cairo 1.0! Maggiori informazioni su questo in un prossimo post.

### Come Posso Essere Più Impegnato?

* Vai su[starknet.io](https://starknet.io/)per tutte le informazioni StarkNet, la documentazione, i tutorial e gli aggiornamenti.
* Unisciti a[StarkNet Discord](http://starknet.io/discord)per supportare gli sviluppi, gli annunci degli ecosistemi e diventare parte della comunità.
* Visita il[StarkNet Forum](http://community.starknet.io/)per rimanere aggiornato e partecipare alle discussioni di ricerca StarkNet.

Siamo sempre felici di ricevere un feedback sulla nostra[documentazione](https://docs.starknet.io/)!