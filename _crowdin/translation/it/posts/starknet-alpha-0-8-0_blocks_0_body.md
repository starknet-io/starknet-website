### TL;DR

* StarkNet Alpha 0.8.0 presenta la versione iniziale del meccanismo di commissione (opzionale fino a StarkNet Alpha 0.9.0.)
* Le nuove API richiedono la stima della commissione di transazione per ottenere la traccia della transazione, consentendo una migliore visibilità e funzionalità di debug
* Miglioramento delle prestazioni del sequencer StarkNet
* Cancellazione messaggio L1→L2

### Introduzione

Come condiviso nella nostra[roadmap](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51), seguendo l'ultima aggiunta alle funzionalità e funzionalità di StarkNet, la nostra attenzione si sposta verso il miglioramento delle prestazioni e la progettazione dei protocolli (comprese le tasse, l'astrazione dell'account, il decentramento, ecc.). StarkNet Alpha 0.8.0 avvia il processo di aggiungere le commissioni di transazione e migliorare le prestazioni del sequencer.

La tabella di marcia per StarkNet include un meccanismo tariffario, e progredendo con questa versione stiamo facendo un passo importante più vicino alla piena prestazione per la piattaforma.

L'aggiunta del meccanismo delle commissioni è una parte essenziale del design delle prestazioni di StarkNet. Senza un compenso minimo, rischiamo di affrontare transazioni infinite: ciò renderebbe impossibile per il sistema di essere performante, indipendentemente dalle ottimizzazioni sequencer.

### Caratteristiche

#### Supporto Tariffa

StarkNet Alpha ora supporta la prima versione del meccanismo di commissione. Questo meccanismo è essenziale anche in questa fase iniziale, e anche su Testnet, per due motivi principali:

1. Permette agli sviluppatori di iniziare ad ottimizzare i loro contratti secondo il modello di costo di StarkNet.
2. È una controparte fondamentale per migliorare le prestazioni del sistema, in quanto impedisce lo spamming inviando innumerevoli transazioni.

Questa versione introduce i componenti necessari agli sviluppatori per integrare i pagamenti delle commissioni nei loro strumenti e applicazioni. Gli sviluppatori possono ora stimare la commissione di transazione chiamando l'endpoint \`estimate_fee\` e effettuare il pagamento della commissione come parte dell'esecuzione della transazione.

Dal momento che questa funzione non è retrocompatibile, non applicheremo il pagamento della tassa a questo punto, ma solo dalla versione 0. .0, che dovrebbe essere rilasciato in poche settimane. Questa transizione graduale consentirà agli utenti e agli sviluppatori di adattarsi al nuovo modello.

#### Struttura commissione su 0.8.0

Su 0.8.0, le tasse saranno raccolte in base alla sola complessità computazionale, mentre StarkWare continuerà a sovvenzionare i costi di comunicazione L1. Nelle prossime settimane aggiorneremo il meccanismo delle tariffe per includere questi costi operativi e di comunicazione L1. Il pagamento sarà raccolto atomicamente con l'esecuzione della transazione su StarkNet L2. Vedi la documentazione[delle commissioni](https://starknet.io/documentation/fee-mechanism/)per una descrizione approfondita.

È importante notare che lavoreremo a stretto contatto con la comunità degli sviluppatori per modificare e sviluppare il meccanismo delle tasse come evolve StarkNet.

#### L2 Goerli ETH Faucet

Abbiamo lanciato il rubinetto[L2 Goerli ETH](https://faucet.goerli.starknet.io/)per consentire agli utenti di pagare le tasse su Testnet. Questo rubinetto invia piccole quantità di L2 Goerli ETH al tuo indirizzo account su StarkNet Goerli che puoi utilizzare per pagare la commissione della transazione.

#### Trace API

Abbiamo aggiunto la possibilità di recuperare la traccia di esecuzione di una transazione alle API di StarkNet. All'interno della traccia della transazione, tutte le chiamate interne sono visibili, accompagnate da informazioni quali le risorse di esecuzione consumate, il valore di restituzione, gli eventi emessi e i messaggi inviati. Questa nuova chiamata semplifica la comprensione del comportamento di un contratto o le transazioni di debug. Inoltre, strumenti come[Voyager](https://voyager.online/)o[StarkTx](https://starktx.info/)potrebbero incorporare questi dati; fornire agli utilizzatori un'analisi più dettagliata, in particolare per quanto riguarda l'interazione contrattuale con i conti.

Per ottenere la traccia, puoi usare \`get_transaction_trace\` nel CLI di StarkNet. Per vedere un esempio di come usarlo, controlla il[tutorial](https://www.cairo-lang.org/docs/hello_starknet/cli.html?#get-transaction-trace).

#### Cancellazione Messaggio

Una caratteristica aggiuntiva di questa versione è la possibilità di annullare i messaggi L1→L2. Perché questo è utile? Immaginate uno scenario in cui un utente trasferisce un bene da L1 a L2. Il flusso inizia con l'invio dell'asset da parte dell'utente a un ponte StarkNet e la corrispondente generazione di messaggi L1→L2. Ora, immagina che il consumo di messaggi L2 non funzioni (questo potrebbe accadere a causa di un bug nel contratto del Cairo del dApps). Ciò potrebbe portare all'utente a perdere per sempre la custodia del proprio asset.

Per attenuare questo rischio, permettiamo al contratto che ha avviato il messaggio L1→L2 di annullarlo — dopo aver dichiarato l'intenzione di farlo e attendere un congruo periodo di tempo (vedi la[documentazione](https://starknet.io/l1-l2-messaging/#cancellation)).

### Miglioramenti Delle Prestazioni

Questa versione diminuisce significativamente il tempo in cui un sequencer deve eseguire un flusso di transazioni Cairo in entrata.

Questo è solo il primo passo! Il nostro prossimo importante traguardo di prestazione, da introdurre presto (0.9.0), è l'esecuzione parallela del sequenziatore, e molte altre ottimizzazioni sono attese lungo la strada.

### Che cosa ora?

Leggi la documentazione tecnica[qui](https://starknet.io/documentation/fee-mechanism/).

Vai su[starknet.io](https://starknet.io/), per tutte le informazioni StarkNet, la documentazione, i tutorial e gli aggiornamenti.

Unisciti a[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)per supportare gli sviluppi, gli annunci degli ecosistemi e diventare parte della comunità.

Visita[StarkNet Shamans](https://community.starknet.io/)per rimanere aggiornato e partecipare a tutte le discussioni di ricerca StarkNet.