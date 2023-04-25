### TL;DR

* Cairo 1.0 è la prima major release dopo l'[di Cairo](https://medium.com/starkware/hello-cairo-3cb43b13b209)due anni fa
* Il Cairo 1.0 darà agli sviluppatori un linguaggio di programmazione più sicuro, più semplice e più utilizzabile
* Al centro del Cairo 1.0 sarà**Sierra**, uno strato di rappresentazione intermedia che promette una maggiore stabilità a lungo termine per i programmi del Cairo
* Sierra avanza il Cairo per servire in una rete senza permesso:\
  -**Proteggere la rete**: permette una protezione DoS più robusta\
  -**Proteggere l'utente**: consente una resistenza alla censura di grado Ethereum-Cairo 1. avrà effetto StarkNet in molti modi. Effettuerà anche la[Regenesis](https://medium.com/starkware/regenesis-starknets-no-sweat-state-reset-e296b12b80ae). Pubblicheremo ulteriori informazioni su Regenesis nelle prossime settimane.

### Introduzione

Nel 2020 abbiamo rilasciato il Cairo, un linguaggio di programmazione Turing-completo, e abbiamo fatto un grande passo avanti verso il supporto di calcolo verificabile utilizzando STARKs. Oggi annunciamo**il Cairo 1.0**, il più grande progresso del Cairo fino ad oggi. Introdurrà un linguaggio migliorato, con caratteristiche che miglioreranno l'usabilità, la sicurezza e la convenienza. È progettato per supportare i requisiti di StarkNet come una rete senza permessi, consentendo al protocollo di diventare più semplice e sicuro.\
Lo sviluppo è già in corso, e ci aspettiamo che il primo rilascio accada presto.

In questo post descriveremo il viaggio del Cairo fino ad oggi e condivideremo i dettagli sulle prossime funzionalità.

### Il Viaggio Del Cairo

Fino al 2020 era necessaria una conoscenza di nicchia per costruire programmi STARK-provable per il calcolo generale. E 'stato possibile solo per coloro che hanno capito la matematica complessa dietro STARKs. In particolare, per ogni logica aziendale, cioè ogni calcolo, necessario per generare una Rappresentanza Intermedia Algebraica (AIR) — un insieme di vincoli polinomiali che rappresenta il calcolo specifico.

Il Cairo è nato dalla consapevolezza che il calcolo verificabile dovrebbe essere messo a disposizione degli sviluppatori ovunque. Il Cairo permette agli sviluppatori di sfruttare il potere di STARKs.

Da allora la comunità degli sviluppatori si è afferrata al Cairo per costruire con entusiasmo. Tutto nel fiorente ecosistema StarkNet oggi si basa sul Cairo. Tra[StarkNet](https://starkware.co/starknet/)e[StarkEx](https://starkware.co/starkex/), le applicazioni Cairo-powered hanno elaborato oltre 220M transazioni, coniato più di 65M NFTs, e gestito $700B vale la pena di scambi, tutti regolati su Ethereum.

Mentre Cairo ha reso gli STARK accessibili, è stato originariamente progettato come un linguaggio di montaggio, e come tale è stato scritto come un linguaggio di basso livello.

![Un esempio per i primi programmi che sono stati scritti al Cairo](/assets/cairocode_01.png "Un esempio per i primi programmi che sono stati scritti al Cairo")

Prompted by feedback from developers and the rise of[StarkNet](https://starkware.co/starknet/), we gradually made Cairo more expressive and developer-friendly.

![Un esempio del contratto del Cairo ERC-20 che dimostra il supporto delle variabili, se dichiarazioni, errori e libreria UINT256](/assets/cairocode_02.png "Un esempio del contratto del Cairo ERC-20 che dimostra il supporto delle variabili, se dichiarazioni, errori e libreria UINT256")

Ma presto abbiamo concluso che è giunto il momento di compiere un grande salto in avanti e, invece di miglioramenti incrementali al Cairo, vai per una trasformazione più audace.

### Cairo 1.0

Per Il Cairo 1. abbiamo costruito un compilatore completamente nuovo dal suolo, che fornirà agli sviluppatori le caratteristiche di sicurezza, e permetterà loro di scrivere contratti in modo più semplice e più espressivo.

#### Introduzione a Sierra: garantire che ogni esecuzione del Cairo possa essere provata

L'aggiunta principale al Cairo 1. is Sierra (**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**tion). La Sierra costituisce un nuovo livello intermedio di rappresentazione tra il Cairo 1.0 e il codice di byte del Cairo. L’obiettivo di Sierra è quello di garantire che ogni Cairo esegua – cioè un programma Cairo e il suo input – possa essere dimostrato (vedi più avanti).

Sierra promette il Cairo devs miglior codice a prova di futuro. Un’ulteriore stabilità è assicurata dal fatto che i contratti StarkNet non dovranno essere ricostruiti in caso di miglioramenti al sistema sottostante (e. ., modifiche di architettura AIR CPU, miglioramenti della traduzione finale dalla Sierra al codice byte del Cairo).

**Provare ogni esecuzione del Cairo.**Nel vecchio Cairo, una corsa del Cairo può causare tre casi — VERO, FALSE, o fallimento. Non è possibile dimostrare l'esecuzione non riuscita. Sierra, assicura che una corsa del Cairo non fallirà mai, e può solo portare a VERO o FALSE. Ciò a sua volta, assicura che ogni corsa del Cairo può essere dimostrata.

Questa introduzione della Sierra ha importanti implicazioni per StarkNet come rete senza permesso. Sierra garantisce che anche le transazioni ripristinate possano essere incluse nei blocchi StarkNet. Questa proprietà permetterà al protocollo StarkNet di rimanere magro e semplice senza la necessità di aggiungere complessi meccanismi cripto-economici.\
Due esempi significativi:

1. I sequenziatori saranno in grado di raccogliere le commissioni sulle transazioni annullate, consentendo a StarkNet di prevenire Sequencer DoS in modo consolidato.
2. L'implementazione di transazioni forzate L1 sarà possibile, consentendo a StarkNet di ereditare la completa resistenza alla censura di Ethereum.

### **Funzionalità Linguistiche**

Il Cairo 1.0 offrirà molti miglioramenti al linguaggio di programmazione stesso. Non tutto quanto di seguito elencato farà parte della prima release, ma fa parte della roadmap.

#### **Sintassi migliorata**

* Non più*locale*e*tempvar*. Ora abbiamo solo bisogno di*let*per regolarli tutte le variabili.
* Migliorato*se*dichiarazione sintassi

```python
#Vecchio
se cond ! 0 {
  tempvar x = x+1;
} else {
  tempvar x = x;
}
__________________________________
#New
if cond { x = x + 1; }
```

#### **Garanzie di sicurezza del tipo**

Il compilatore userà una forte digitazione per migliorare la sicurezza del codice. Per esempio:

* I puntatori punteranno sempre alla memoria inizializzata.
* I dizionari saranno sempre schiacciati, invece di lasciare la responsabilità di chiamare squash_dict al programmatore.

#### **Più facile da usare i costrutti di lingua**

Per esempio:

* Per loop

```
let sum = 0
for x in iter {
  sum = sum + x;
}
```

* Espressioni booleane
* Interi (con divisione intera regolare 👯)
* Protezione dal flusso di scarico per i tipi pertinenti
* Condizioni booleane

```
#Old
If cond1:
  if cond2:
       # Some code
  else if cond3:
       # Same code
__________________________________
#New
If cond1 && (cond2 <unk> <unk> cond3) { … }
```

#### **Un sistema di tipo completo**

* Tipi di dati astratti (es. Enum rust-like

```
enum Option<T> {
 Some: T,
 None,
}
match result {
 Some(r) => {..},
 Nessuno => {..},
}
```

* Tratti

```
trait Add<Uint256> {
    fn add(…) { … }
}

let a: Uint256 = 1;
let b: Uint256 = 4;
a + b; // Valutato a 5 del tipo Uint256.
```

#### **Librerie più intuitive**

(ad es. dict, matrici)

* Dict<Uint256, MyStruct>;
* Array<MyOtherStruct>;

#### **Codice più ottimizzato**

Nessuna necessità di indicare esplicitamente l'allocazione delle variabili locali — auto rilevata e fatta automaticamente.

#### **Migliore integrazione del compilatore**

Consentire un migliore supporto IDE, la gestione dei pacchetti e una migliore facilitazione dei contributi comunitari.

### **Conclusione**

Due anni dopo che il Cairo è stato utilizzato per la prima volta in produzione, stiamo sviluppando il Cairo 1.0, che fornirà una migliore espressibilità, sicurezza e sintassi. Ci vorrà un grande passo avanti, consentendo agli sviluppatori di scrivere più facilmente i loro contratti StarkNet.

In un altro post, arrivando presto, condivideremo maggiori dettagli su come il Cairo 1. influenzerà la regenesi di StarkNet, e come gli sviluppatori dovrebbero prepararsi per il suo rilascio.