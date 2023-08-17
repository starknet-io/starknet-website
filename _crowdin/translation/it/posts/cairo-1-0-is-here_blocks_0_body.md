### TL;DR

* Cairo 1.0 prima release è qui!
* Gli sviluppatori possono iniziare a scrivere e testare programmi Cairo 1.0
* La parità di funzionalità con la versione precedente del Cairo sarà raggiunta nelle prossime settimane
* Il supporto per i contratti StarkNet verrà aggiunto nella prossima versione di StarkNet Alpha

### Sfondo

Siamo entusiasti di annunciare che la prima versione pubblica del Cairo 1.0 è ora disponibile. Si tratta di una pietra miliare nell'evoluzione del Cairo, che è stato introdotto per la prima volta nel 2020 come un linguaggio di programmazione Turing-complete per scrivere in modo efficiente programmi STARK-provable. Il Cairo 1.0 è un linguaggio di alto livello simile a Rust. Come Rust, è destinato a consentire agli sviluppatori di scrivere facilmente il codice che è efficiente e sicuro.

Fin dalla sua nascita, il Cairo è stato utilizzato per costruire applicazioni Layer-2 che hanno[gestito](https://dashboard.starkware.co/starkex)oltre $790 miliardi di mestieri, ha trattato oltre 300 milioni di operazioni e ha coniato più di 90 milioni di FTN, tutte eseguite off-chain e regolate su Ethereum con l'integrità matematica garantita da prove STARK. Il Cairo è diventato il quarto linguaggio di programmazione più utilizzato nell'ecosistema blockchain[](https://defillama.com/languages)in generale. Con il rilascio del Cairo 1. , miriamo a rendere il linguaggio ancora più accessibile e facile da usare, introducendo al contempo nuove funzionalità che migliorino la sicurezza e la comodità.

Uno dei cambiamenti più significativi del Cairo 1.0 è la sintassi. Abbiamo preso ispirazione da**Rust**per creare un linguaggio più adatto agli sviluppatori che è più facile da leggere e scrivere. La nuova versione del Cairo permette di scrivere codice più sicuro (fortemente digitato, proprietà e prestito, ecc.), pur essendo anche più espressivo.

Cairo 1.0 introduce anche Sierra, una nuova rappresentazione intermedia che garantisce**ogni**esecuzione del Cairo può essere dimostrata. Questo rende Cairo 1.0 particolarmente adatto per l'uso in una rete senza permesso come StarkNet, dove può fornire una solida protezione DoS e resistenza alla censura. Puoi leggere di più sulla Sierra nel nostro post[precedente](https://medium.com/starkware/cairo-1-0-aa96eefb19a0).

## Primo gusto!

### Cosa puoi fare oggi?

Gli sviluppatori possono iniziare a scrivere, compilare e testare programmi Cairo 1.0! Incoraggiamo gli sviluppatori a iniziare a sperimentare con Cairo 1.0 e ad abituarsi alla nuova sintassi e funzionalità.

Dal momento che Cairo 1.0 è ancora attivamente sviluppato e nuove funzionalità vengono costantemente aggiunte, controlla il repository[Cairo](https://github.com/starkware-libs/cairo/)per gli ultimi aggiornamenti.

### Cosa c'è dopo?

Al momento, il Cairo 1. mancano ancora alcune delle caratteristiche supportate nella versione precedente del Cairo ([vedi questa tabella per maggiori dettagli](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)). Il nostro prossimo traguardo, previsto nelle prossime settimane, fornirà la parità di funzionalità Cairo 1.0 con la versione più vecchia. È possibile monitorare i progressi verso quella pietra miliare[qui](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md).

### Supporto Starknet

La scrittura dei contratti StarkNet in Cairo 1.0 è supportata (anche se mancano ancora alcune caratteristiche). Tuttavia, StarkNet non supporta ancora lo spiegamento e l'esecuzione dei contratti Cairo 1.0. StarkNet Alpha V0.11.0, in programma nelle prossime settimane, introdurrà la capacità di implementare ed eseguire i contratti Cairo 1.0. L'aggiornamento a v0.11.0 segnerà l'inizio del Periodo di Transizione verso un sistema che esegue solo i contratti Cairo 1.0. Questo Periodo di Transizione terminerà con la[Regenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4), prevista qualche mese dopo.

![](/assets/0_odxbxeacqdwizlfw.jpg)

### Costruiamo!

L'obiettivo di StarkNet è quello di scalare Ethereum in modo esponenziale utilizzando l'integrità matematica di STARK, e l'obiettivo del Cairo è quello di rendere questa scala esponenziale accessibile agli sviluppatori. Accessibilità significa un linguaggio di programmazione efficiente, facile da leggere e scrivere, sicuro da usare. Speriamo che il rilascio di Cairo 1.0 ispirerà ancora più sviluppatori a unirsi a StarkNet e scala Ethereum per soddisfare la domanda globale.