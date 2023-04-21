### TL;DR

* **Cairo 1.0 è open source! Questo è solo il primo passo verso l'open-sourcing dello stack StarkNet.**
* Ora presentiamo una[prima occhiata](https://github.com/starkware-libs/cairo)nel compilatore Cairo 1.0. Ora puoi iniziare a sperimentare con il codice base Cairo 1.0
* Il Cairo 1.0 al suo centro è molto simile a Rust
* Consideralo un primo gusto, non un rilascio. Sono in corso ulteriori miglioramenti. La prima versione del compilatore è prevista per l'inizio del primo trimestre del prossimo anno.
* Cairo 1.0 non è ancora supportato su StarkNet. Sarà supportato su StarkNet nel primo trimestre del prossimo anno.

### Introduzione

Nel 2020 abbiamo pubblicato[Cairo](https://eprint.iacr.org/2021/1063.pdf), un linguaggio di programmazione Turing-complete che supporta il calcolo verificabile. Il Cairo iniziò come linguaggio di assemblea e divenne gradualmente più espressivo. Due mesi fa abbiamo annunciato[Cairo 1.0](https://medium.com/starkware/cairo-1-0-aa96eefb19a0), che affronta alcuni problemi importanti nella situazione attuale:

* Mentre la sintassi del Cairo ha visto un miglioramento significativo dal suo inizio, l'esperienza dello sviluppatore può sempre migliorare. Cairo 1.0 è un linguaggio completamente tipizzato ispirato alla ruggine, rendendo la scrittura la stessa logica molto più facile e meno errore-prone.
* Il compilatore esistente è sviluppato nello stesso repo di StarkNet stesso, rendendo più difficile monitorare i cambiamenti di lingua. Il compilatore Cairo 1.0 è scritto dal suolo, consentendo uno sviluppo più rapido delle funzionalità e un maggiore coinvolgimento della comunità.
* Ogni calcolo è ora dimostrabile. Attualmente, un programma Cairo può fallire con input specifici (ad esempio raggiungendo un'istruzione \`assert 1=2\` in alcuni rami di calcolo), rendendo il calcolo indimostrabile. Con Cairo 1.0, i programmi sono provabili in ogni ramo possibile. Questo è particolarmente importante per la protezione DOS e la resistenza alla censura in StarkNet.

Oggi segniamo la prima pietra miliare nel raggiungimento degli obiettivi di cui sopra mentre spostiamo lo sviluppo ad un pubblico repo, e**open source Cairo 1. !**Gli sviluppatori possono ora, per la prima volta, compilare ed eseguire semplici programmi Cairo 1.0. Questo permette agli sviluppatori di iniziare a sperimentare con il Cairo 1. e gradualmente abituati alle nuove funzionalità, anche se, in questa fase, non possono ancora implementare su StarkNet.

### Funzionalità attuali

Attualmente, è possibile compilare ed eseguire programmi nativi di base Cairo. Mentre molti dei miglioramenti della sintassi / lingua sono ancora in corso, questo permette di abituarsi al Cairo 1.0 e godere di aggiornamenti come vengono.

**Nota che la scrittura di contratti StarkNet non è ancora supportata.**La sintassi StarkNet (variabili di archiviazione / contratti di chiamata / eventi e altre chiamate di sistema) sarà aggiunta nelle prossime settimane.

### Esempi di codice

Per illustrare le differenze tra la vecchia sintassi e il Cairo 1. , abbiamo scelto di mostrare alcune diverse implementazioni/sapori di trovare il numero n’° Fibonacci.

### Esempio I: Espressioni di corrispondenza

In Cairo 1.0, puoi usare espressioni rust-like[match](https://doc.rust-lang.org/rust-by-example/flow_control/match.html?highlight=match#match). Non temerai più le dichiarazioni che potrebbero causare la revoca di riferimento!

![](/assets/code01.png)

### Esempio II: Tipi di dati

Mentre Cairo 0 ha lavorato con feltri e puntatori, nel Cairo 1.0 abbiamo accesso nativo a tipi di dati complessi nella lingua. Qui di seguito puoi trovare un esempio che genera una matrice dei primi n numeri di Fibonacci.

![](/assets/code02.png)

Come si può vedere sopra, piuttosto che lavorare direttamente con i puntatori di memoria, usiamo il `Array::<felt>\` tipo e la funzione \`array_append\`.

### Esempio III: strutture & proprietà

Il seguente codice illustra l'utilizzo di strutture in Cairo 1.0.

![](/assets/code03.png)

> Il paragrafo seguente è destinato per i Rustacei tra il pubblico. Cairo 1.0 gestisce la memoria in modo simile alla ruggine. In particolare, utilizza i concetti di[proprietà e prestito](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html). Quindi, accedendo a un membro della struttura \`FibResult\` (in questo caso, \`result). alue\`), abbiamo spostato \`result\`, il che significa che, a meno che FibResult non sia copiabile, non possiamo accedervi di nuovo in \`result.index\`. Per superare questo problema, aggiungiamo l'attributo \`#\[derive(Copy)]\` del tipo \`FibResult\`. Nelle versioni future, aggiungeremo la decostruzione automatica per le strutture. Ciò consentirà di trasferire la proprietà di un membro senza toccare gli altri (in particolare, il codice sopra compilerebbe anche se \`FibResult\` non avesse l'attributo di copia).

**In particolare, notare che il Cairo 1.0 è completamente astratto via l'originale (nessuno deterministico sola lettura) modello di memoria del Cairo.**

## Esempio IV: propagazione degli errori

Il seguente codice calcola il numero n’° Fibonacci, ma a differenza degli esempi precedenti, tutti gli ingressi sono del tipo uint128. Si noti che questo risolve un principale punto di dolore nella manipolazione delle uints nel Cairo 0. Qui, uint128 (e in futuro uint256) sono tipi nativi.

![](/assets/0_s8bhjf_ade3carmi.png)

L'aggiunta di due interi a 128 bit può causare un overflow. Il codice di cui sopra utilizza l'enum[Option](https://doc.rust-lang.org/rust-by-example/std/option.html)e l'operatore[punto interrogativo](https://doc.rust-lang.org/rust-by-example/std/result/question_mark.html)per gestire il caso di overflow in una delle aggiunte intermedie. Confronta questo con la sintassi di aggiunta[](https://github.com/starkware-libs/cairo-lang/blob/9889fbd522edc5eff603356e1912e20642ae20af/src/starkware/cairo/common/uint256.cairo#L31)uint256, dove la funzione \`unit256_check\` doveva essere chiamata per garantire la solidità. Inoltre, nel prossimo futuro, aggiungeremo il concetto di \`panic\` alla lingua (simile alla macro[panico](https://doc.rust-lang.org/rust-by-example/std/panic.html)in ruggine), e semplici errori come l'addizione overflow sarà uncatchable e propagato automaticamente, il che significa che non dovrai usare \`Option\` o \`? ` quando si aggiungono gli uint.

## Provalo da solo

Ora puoi compilare ed eseguire programmi Cairo 1.0 attualmente supportati! Segui queste[istruzioni](https://github.com/starkware-libs/cairo/tree/main/crates/cairo-lang-runner)su come usare il comando \`cairo-run\`. Nota che sotto il cofano, la[Rust Cairo VM](https://github.com/lambdaclass/cairo-rs), sviluppata da[Lambdaclass](https://lambdaclass.com/), viene utilizzata per l'esecuzione.

Puoi trovare altri esempi per aiutarti a iniziare[qui](https://github.com/starkware-libs/cairo2/tree/main/examples). Si noti che questo è solo il primo sguardo nello sviluppo del compilatore; nelle prossime settimane, miglioreremo il CLI accanto al compilatore.

## Piani Futuri

Il fulcro della prima versione del compilatore, che è prevista per i primi Q1, sta supportando tutte le funzionalità esistenti di StarkNet in Cairo 1.0. Inoltre, stiamo lavorando per estendere le funzionalità del compilatore Cairo 1.0. Nelle prossime settimane, ci si può aspettare:

* Funzionalità StarkNet — scrittura di smart contract e utilizzo di chiamate di sistema.
* Cicli
* Nuove funzioni della libreria
* Server lingua migliorato
* Una nozione nativa di gas StarkNet

Assicurati di rimanere sintonizzati e monitorare i progressi del compilatore!