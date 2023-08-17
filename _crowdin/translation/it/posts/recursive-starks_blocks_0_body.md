### TL;DR

* Prova ricorsiva è in diretta su Mainnet, scalare le app StarkEx e StarkNet con una singola prova
* Aumenta la scala e offre benefici in termini di costi, latenza (una rara ed entusiasmante presenza di scala e latenza che si muovono in tandem, e non essendo un compromesso)
* Si imposta il palcoscenico per L3 e altri vantaggiGo leggere il post del blog su[Recursive Proving](https://medium.com/@starkware/recursive-starks-78f8dd401025). E 'roba cool 😉

### Scalando verso l'alto!

Le prove ricorsive — alimentate dal calcolo generale del Cairo — sono ora in produzione. Questo segna una grande spinta alla potenza di scala L2 con STARKs. Consentirà rapidamente un aumento multiplo del numero di transazioni che possono essere scritte a Ethereum tramite un'unica prova.

Fino ad ora, il ridimensionamento STARK ha funzionato “rolling up” decine o addirittura centinaia di migliaia di transazioni in una singola prova, che è stato scritto a Ethereum. Con la ricorsione, molte di queste prove possono essere “rotolate” in una singola prova.

Questo metodo è ora in produzione per una moltitudine di applicazioni basate su Cairo: applicazioni in esecuzione su StarkEx, il motore di scala SaaS di StarkWare e StarkNet, il rollup senza permessi.

### La storia finora

Dalla prima prova su Mainnet, nel marzo 2020, i seguenti sviluppi hanno modellato il modo in cui vengono utilizzati gli STARK.

### Scala basata su STARK

Nel giugno 2020 la prima soluzione di scaling basata su STARK —[StarkEx](https://youtu.be/P-qoPVoneQA)— è stata implementata su Ethereum Mainnet. StarkEx ha un Prover che esegue grandi calcoli off-chain e produce una prova STARK per la loro correttezza, e un Verifier che verifica questa prova on-chain. I vincoli per questo primo spiegamento sono stati “scritti a mano” dagli ingegneri di StarkWare, limitando così notevolmente la velocità delle funzionalità per StarkEx. Abbiamo concluso che è necessario un linguaggio di programmazione per supportare il calcolo generale — il Cairo.

#### Cairo

Nell'estate del 2020 Cairo ha fatto la sua prima apparizione[su Ethereum Mainnet](https://medium.com/starkware/hello-cairo-3cb43b13b209). Cairo sta per CPU Algebraic Intermediate Representation (AIR) e include un singolo AIR che verifica il set di istruzioni di questa “CPU”. Ha aperto la porta per le prove di codifica per la logica commerciale più complessa, per dichiarazioni computazionali arbitrarie, e per farlo in modo più rapido e sicuro. Un programma del Cairo può dimostrare l'esecuzione della logica di una singola applicazione. Ma un programma del Cairo può anche essere una concatenazione di più tali applicazioni — SHARP.

#### SHARP

SHARP — un SHARed Prover — preleva transazioni da diverse app separate e le dimostra tutte in un'unica prova STARK. Le app combinano i loro lotti di transazioni, completando la capacità di una prova STARK più velocemente. Le transazioni sono trattate ad una velocità e una latenza migliorate. La prossima frontiera: Prove ricorsive, ma non solo per una logica dura, ma piuttosto per**calcolo generale**.

Per capire il pieno beneficio di Recursive Proving vale la pena capire un po 'di più su come (non-ricorsivo) la prova è stata eseguita da SHARP fino ad ora. Disegno 1 raffigura un tipico flusso non ricorsivo:

![Disegno 1: Un tipico flusso non ricorsivo che dimostra](/assets/recursive_starks_01.png "Disegno 1: Un tipico flusso non ricorsivo che dimostra")

Qui, le dichiarazioni arrivano nel tempo. Quando viene raggiunta una determinata soglia di capacità (o tempo), viene generata una grande dichiarazione combinata (pseudonimo Train). Questa dichiarazione combinata è comprovata solo una volta che tutte le singole dichiarazioni sono state ricevute. Questa prova richiede molto tempo per dimostrare (approssimativamente la somma del tempo necessario per dimostrare ogni dichiarazione individualmente).

Dimostrare dichiarazioni estremamente grandi è alla fine limitata da risorse di calcolo disponibili come la memoria. Prima della ricorsione, questa era effettivamente la barriera limitante di scalabilità di STARK dimostrando.

### Che cos'è la Provazione Ricorsiva?

Con le prove STARK, il tempo necessario per dimostrare una dichiarazione è approssimativamente lineare con il tempo necessario per eseguire l'istruzione. Inoltre, se dimostrare una dichiarazione richiede tempo T, la verifica della prova richiede approssimativamente il tempo di log(T), che è tipicamente chiamato “compressione logaritmica”. In altre parole, con STARKs si spende molto meno tempo per verificare la dichiarazione che per calcolarla.

[Cairo](https://starkware.co/cairo/)permette di esprimere dichiarazioni computazionali generali che possono essere comprovate da prove STARK e verificate dai corrispondenti verificatori STARK.

È qui che la possibilità di eseguire[ricorsione](https://en.wikipedia.org/wiki/Recursion)prende il via in: Allo stesso modo in cui scriviamo un programma del Cairo che dimostra la correttezza di migliaia di transazioni, possiamo anche scrivere un programma Cairo che verifica più prove STARK. Possiamo generare una singola prova attestante la validità di più prove “up-stream”. Questo è quello che chiamiamo Provazione Ricorsiva.

A causa della compressione logaritmica e del tempo di prova approssimativamente lineare, provare una verifica di una prova STARK richiede un tempo relativamente breve (si prevede di essere solo pochi minuti nel prossimo futuro).

Quando implementa ricorsione, SHARP può dimostrare dichiarazioni al loro arrivo. Le loro prove possono essere unite più e più volte in prove ricorsive in vari modelli finché, a un certo punto la prova risultante è presentata a un contratto di verificatore on-chain. Un modello tipico è raffigurato nel disegno 2:

![Disegno 2: Un tipico flusso ricorsivo che dimostra.](/assets/recursive_starks_02.png "Disegno 2: Un tipico flusso ricorsivo che dimostra.")

### Benefici immediati della prova ricorsiva

#### Costo In Catena Ridotto

Fuori dal pipistrello, otteniamo “compressione” di prove multiple in uno, che comporta costi di verifica nella catena più bassi per transazione (dove ogni estratto conto può includere molte transazioni).

Con ricorsione, la barriera delle risorse di calcolo (ad es. memoria) che fino ad ora la dimensione limitata delle prove è eliminata, poiché ogni dichiarazione di dimensione limitata può essere provata separatamente. Quindi, quando si utilizza la ricorsione, la dimensione effettiva del treno di ricorsione è quasi illimitata e il costo per transazione può essere ridotto di ordine di grandezza.

In termini pratici, la riduzione dipende dalla latenza accettabile (e dal tasso di arrivo delle operazioni). Inoltre, poiché ogni prova è tipicamente accompagnata da alcuni output come i dati on-chain, vi sono limiti alla quantità di dati che possono essere scritti in catena insieme ad una singola prova. Tuttavia, ridurre i costi in ordine di grandezza e ancora meglio è banalmente possibile.

#### Latenza Ridotta

Il modello di Prove Ricorsive riduce la latenza di dimostrare grandi Treni di dichiarazioni. Questo è il risultato di due fattori:

1. Le dichiarazioni in arrivo possono essere comprovate**in parallelo**(invece di dimostrare una dichiarazione combinata estremamente grande).
2. Non c'è bisogno di aspettare fino all'ultima dichiarazione sul treno arriva per iniziare a provare. Piuttosto, le prove possono essere combinate con nuove dichiarazioni al loro arrivo. Ciò significa che la latenza dell'ultima dichiarazione che entra in un treno, è all'incirca il tempo necessario per dimostrare che l'ultima dichiarazione più il tempo necessario per dimostrare una dichiarazione di verificatore ricorsivo (che attesta tutte quelle affermazioni che hanno già “onboarded” questo particolare Train).

Stiamo attivamente sviluppando e ottimizzando la latenza di provare la dichiarazione Verifier ricorsiva. Ci aspettiamo che ciò raggiunga l'ordine di pochi minuti nel giro di pochi mesi. Quindi, un SHARP altamente efficiente può offrire latenze da pochi minuti fino a poche ore, a seconda del costo della transazione rispetto a quello della catena. Ciò rappresenta un significativo miglioramento della latenza di SHARP.

#### Facilitare L3

Lo sviluppo della dichiarazione Recursive Verifier al Cairo apre anche la possibilità di presentare prove a StarkNet, come tale dichiarazione può essere cotto in un contratto intelligente StarkNet. Questo permette di costruire[distribuzioni L3 in cima allo StarkNet pubblico](https://medium.com/starkware/fractal-scaling-from-l2-to-l3-7fe238ecfb4f)(una rete L2).

Il modello ricorsivo si applica anche all'aggregazione delle prove di L3, da verificare mediante un'unica prova su L2. Quindi, l'iperscala si ottiene anche lì.

### Più Vantaggi Sottili

#### Ricorsione Applicativa

La ricorsione offre ancora più opportunità alle piattaforme e alle applicazioni che desiderano ridimensionare ulteriormente i loro costi e le loro prestazioni.

Ogni prova STARK attesta la validità di una dichiarazione applicata ad alcuni input noti come “input pubblico” (o “output del programma” in termini Cairo). Concettualmente, STARK recursion comprime due prove con*due*ingressi in*uno*prova con due ingressi. In altre parole, mentre il numero di prove è ridotto, il numero di ingressi è mantenuto costante. Questi input sono quindi tipicamente utilizzati da un'applicazione al fine di aggiornare alcuni stati su L1 (e. . aggiornare una radice di stato o eseguire un prelievo on-chain).

Se la dichiarazione ricorsiva può essere*application-aware*, cioè riconosce la semantica dell'applicazione stessa, possono entrambe comprimere due prove in una*e*combinare i due ingressi in una. La dichiarazione risultante attesta la validità della combinazione di input basata sulla semantica dell'applicazione, da qui il nome Applicative Recursion (vedi Disegno 3, per esempio)..

![Disegno 3: Esempio di ricorsione applicativa](/assets/recursive_starks_03.png "Disegno 3: Esempio di ricorsione applicativa")

Qui, la dichiarazione 1 attesta un aggiornamento di stato da A a B e la dichiarazione 2 attesta un ulteriore aggiornamento da B a C. Le prove della dichiarazione 1 e della dichiarazione 2 possono essere combinate in una terza dichiarazione attestante l'aggiornamento diretto da A a C. Applicando una logica analoga ricorsivamente, si può ridurre il costo degli aggiornamenti di stato molto significativamente fino al requisito di latenza di finalità.

Un altro importante esempio di ricorsione applicativa è quello di comprimere i dati rollup da prove multiple. Ad esempio, per un rollup di validità come StarkNet, ogni aggiornamento di archiviazione su L2 è incluso anche come dati di trasmissione su L1, per garantire la disponibilità dei dati. Tuttavia, non c'è bisogno di inviare più aggiornamenti per lo stesso elemento di archiviazione, poiché solo il valore finale delle operazioni attestato dalla prova verificata è richiesto per la disponibilità dei dati. Questa ottimizzazione è già eseguita all'interno di un blocco*singolo*StarkNet. Tuttavia, generando una prova per blocco, Applicative Recursion può comprimere questi dati rollup su*più blocchi*L2. Ciò può comportare una significativa riduzione dei costi, consentendo intervalli di blocco più brevi su L2, senza sacrificare la scalabilità degli aggiornamenti L1.

Da notare: Ricorsione Applicativa può essere combinato con ricorsione applicazione-agnostica come descritto in precedenza. Queste due ottimizzazioni sono indipendenti.

#### Complessità Di Verificatore A Catena Ridotta

La complessità del verificatore STARK dipende dal tipo di dichiarazioni che è stato progettato per verificare. In particolare, per le dichiarazioni del Cairo, la complessità del verificatore dipende dagli elementi specifici consentiti nella lingua del Cairo, e, più specificamente, i built-ins supportati (se usiamo la metafora della CPU per il Cairo, poi built-ins sono l'equivalente di micro-circuiti in una CPU: calcoli eseguiti così frequentemente che richiedono il proprio calcolo ottimizzato).

Il linguaggio del Cairo continua ad evolversi e offre sempre più utili costruzioni. D'altra parte, il Verificatore Ricorsivo richiede solo l'utilizzo di un piccolo sottoinsieme di questi built-in. Quindi, un SHARP ricorsivo può supportare con successo qualsiasi dichiarazione al Cairo supportando la lingua completa nei verificatori ricorsivi. In particolare, il verificatore di solidarietà L1 deve solo verificare le prove ricorsive, e quindi può essere limitato ad un sottoinsieme più stabile della lingua del Cairo: il verificatore L1 non deve essere tenuto al passo con gli ultimi e più grandi costruiti. In altre parole, la verifica di dichiarazioni complesse in continua evoluzione viene relegata a L2, lasciando il verificatore L1 per verificare dichiarazioni più semplici e più stabili.

#### Calcola L'Impronta Ridotta

Prima della ricorsione, la capacità di aggregare più dichiarazioni in una prova è stata limitata dalla dimensione massima della dichiarazione che potrebbe essere dimostrata sulle istanze di calcolo disponibili (e il tempo che potrebbe impiegare per generare tali prove).

Con la ricorsione, non c'è più bisogno di dimostrare dichiarazioni così grandissime. Di conseguenza, più piccolo, casi di calcolo meno costosi e più disponibili possono essere utilizzati (anche se più di quelli possono essere necessari rispetto ai grandi profondi monolitici). Ciò consente di implementare le istanze di prover in ambienti più fisici e virtuali di quanto non fosse possibile in precedenza.

### Summary

Le prove ricorsive di calcolo generale ora servono più sistemi di produzione, tra cui StarkNet, su Mainnet Ethereum.

I benefici della ricorsione saranno realizzati gradualmente, in quanto continua a consentire nuovi miglioramenti, e presto fornirà iperscala, tagliare le tasse del gas, e migliorare la latenza sbloccando il potenziale di parallelizzazione.

Ne deriveranno notevoli benefici in termini di costi e di latenza, nonché nuove opportunità come L3 e ricorsioni applicative. Un'ulteriore ottimizzazione del Verificatore Ricorsivo è in corso e si prevede che nel tempo saranno forniti prestazioni e benefici in termini di costi.



**Gidi Kaempfer**, Head of Core Engineering, StarkWare