## TL;DR

* Starknet alpha v0.11.0 è fuori e vivo su Testnet
* Ora puoi distribuire e interagire con i contratti Cairo 1.0 su Starknet Testnet!
* Il calcolo su Starknet è 5x più conveniente!
* Per la prima volta, l'aggiornamento Mainnet a Starknet alpha v0.11.0 sarà messo a voto di governance
* Questo segna l'inizio del periodo di transizione prima[Regenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)
* Distribuzione Del Cairo 1. i contratti su Mainnet saranno abilitati solo dopo alcune settimane di funzionamento su Testnet, una volta che assicuriamo che il nuovo sistema funziona senza intoppi.

## Introduzione

Siamo entusiasti di annunciare che l'atteso Starknet alpha v0.11.0 è live su Testnet! Perché questo è un grande passo per Starknet? In Starknet v0.11.0, puoi dichiarare, distribuire ed eseguire gli smart contract[Cairo 1.0](https://medium.com/starkware/cairo-1-0-is-here-7e1ac8377038). Introdurremo anche una nuova chiamata di sistema che consente una transizione senza problemi dei contratti esistenti ad un'attuazione del Cairo 1.0.

Cairo 1,0 migliora Starknet in due diversi aspetti. In primo luogo, migliora l'esperienza di sviluppo offrendo un linguaggio di programmazione più ricco, che introduce (tra le altre cose) tipi/generici/tratti/gestione degli errori al Cairo. In secondo luogo, Cairo 1.0 svolge un ruolo chiave nel percorso di decentramento di Starknet: i contratti Cairo 1.0 inviati in Starknet alpha v0.11.0 compilano a Sierra. Sierra garantisce che ogni esecuzione del contratto è provabile, che è una proprietà cruciale in un Starknet decentralizzato.

Un altro importante miglioramento che è in arrivo in questa versione è una riduzione dei costi di 5x per il calcolo. Questo renderà Starknet ancora più amichevole per applicazioni ad alta intensità di calcolo. Maggiori dettagli qui sotto.

## Prepararsi per la regenesi

Starknet alpha v0.11.0 segna l'inizio del periodo di transizione, che permetterà la preparazione prima della Regenesi di Starknet. Il piano Regenesis di Starknet è stato[pubblicato](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)pochi mesi fa e si concentra sulla transizione da un sistema basato su Cairo 0 a un sistema basato su Cairo 1.0.

Durante il periodo di transizione, gli attuali contratti Cairo 0 (se sono aggiornabili) hanno la possibilità di mantenere il loro indirizzo e archiviazione, e transizione senza soluzione di continuità la loro attuazione al Cairo 1. (vedi sezione successiva).

Come utente Starknet, questo significa che devi solo aggiornare il tuo portafoglio una volta che il nuovo Cairo 1. la realizzazione del tuo account viene rilasciata (sarai in grado di farlo in qualsiasi momento fino alla Regenesis stessa). Non è previsto alcun tempo di inattività, tutte le app del sistema continueranno a funzionare come al solito.

Dopo il Regenesis, Starknet smetterà di sostenere i restanti contratti del Cairo 0 in tutto il sistema. Ciò sarà ben comunicato in anticipo e gli sviluppatori avranno tempo sufficiente per migrare i loro contratti. Il periodo di transizione dovrebbe durare alcuni mesi, e gli sviluppatori di dapp possono già iniziare a migrare la loro implementazione a Cairo 1.0. Alla fine del periodo di Transizione, la Regenesi si verificherà.

## Migrazione fluida al Cairo 1.0

Con la transizione al Cairo 1.0, gli attuali contratti Cairo 0 sono deprecati e non saranno più supportati da Regenesis. Per consentire ai contratti Cairo 0 aggiornabili di continuare a funzionare, anche dopo la Regenesis, e mantenere lo stato costruito fino a quel momento, abbiamo aggiunto una nuova chiamata di sistema — ['replace_class'](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#replace_class_syscall). I contratti aggiornabili non hanno alcun problema con l'aggiornamento ad un Cairo 1. attuazione, ma il proxy sottostante (il contratto che detiene lo stato effettivo) sarà ancora bloccato con l'attuazione del Cairo 0. Il syscall \`replace_class\` risolve questo problema consentendo al contratto proxy di sostituire la sua classe sottostante, i. . mantenere lo stesso indirizzo e lo stoccaggio, ma sostituire l'attuazione.

## Il calcolo è ora 5x meno costoso!

Oggi, le commissioni di transazione Starknet hanno due componenti principali: il calcolo e i dati on-chain. L’elemento computazionale della commissione di transazione Starknet è determinato dal costo marginale di verifica della sua prova su L1 (cfr. il documento[](https://docs.starknet.io/documentation/architecture_and_concepts/Fees/fee-mechanism/)per maggiori dettagli).

Originariamente, il nostro 200m Cairo passi in una prova che richiede 5 m di gas per la verifica ha portato ad una stima ingenua di 0,05 gas per passo del Cairo. Da allora, abbiamo trasferito a[prove ricorsive](https://medium.com/starkware/recursive-starks-78f8dd401025)che consentono una riduzione significativa del costo di verifica L1 (solo la radice di un albero ricorsivo raggiunge L1). È giunto il momento di aggiornare le nostre stime originali di conseguenza — il prezzo di ogni passo del Cairo-L2 sarà ridotto di 5x, e ora costerà 0. 1 gas.

Questa riduzione dei costi è significativa per le applicazioni ad alta intensità di calcolo, ad esempio contratti di conto con firme non native. Semplici transazioni vedranno una lieve riduzione dei costi (~ 5%). Nelle future versioni, gestiremo il secondo componente: i costi dei dati on-chain. Una volta che saranno introdotte alternative ai dati on-chain per Starknet (aka Volition), la riduzione dei costi sarà percepita a tutti gli effetti.

## Primo Voto Starknet Governance

La prima fase di Starknet Governance è stata lanciata (maggiori dettagli[qui](https://medium.com/starknet-foundation/starknets-governance-first-phase-4614c7566f40). I membri della Comunità possono ora partecipare alla formazione di Starknet attraverso un canale aggiuntivo, vale a dire il voto sulle modifiche del protocollo.

Le prime fasi di Starknet Governance si concentreranno sugli aggiornamenti del protocollo Starknet. Ogni aggiornamento della versione Starknet verrà prima distribuito su Testnet; gli elettori avranno un periodo di 6 giorni per esaminare e testare la versione aggiornata come funziona su Goerli. Durante questo periodo, verrà aperta una proposta di Snapshot e la comunità potrà votare se approvare la nuova versione per la distribuzione di Mainnet.

Se la proposta ottiene la maggioranza dei voti «SÌ» durante il periodo di sei giorni, la proposta passa e Starknet Mainnet sarà aggiornato di conseguenza.

Starknet alpha v0.11.0 è la prima versione Starknet che è a disposizione per un voto. Il voto Starknet alpha v0.11.0 sarà aperto per sei giorni a partire dalla distribuzione Testnet.

Collegamenti pertinenti:

* [Spazio istantanea](https://snapshot.org/#/starknet.eth/proposal/0x00889bc468509610e516e8602f00b21ca8c32466dd4f0140eca38becb7f40bef)
* [Pagina di ricerca della delegazione](https://delegate.starknet.io/)
* Discussione di discussione Starknet alpha v0.11.0 sul[forum comunitario](https://community.starknet.io/t/proposal-starknet-alpha-v0-11-0/50334)

## Cairo 1.0 e Sierra

Sierra (**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**tion) è una rappresentazione intermedia che compila nel Cairo assembly (CASM). Pre Starknet alpha v0.11.0, uno sviluppatore compila Cairo 0 in CASM e invia il risultato al sequenziatore Starknet. Con Cairo 1.0, gli sviluppatori compilano il loro codice a Sierra, e inviano questa rappresentazione intermedia al sequencer. Il sequencer lo compilerà in CASM. Sierra è garantita la compilazione di “CASM sicuro”, cioè un sottoinsieme di CASM che non può fallire, rendendo ogni esecuzione provabile. Questo garantisce che il sequencer sarà in grado di addebitare commissioni anche per le transazioni ripristinate, proteggendo dal DOS. Per ulteriori informazioni, vedere[i documenti](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/).

![](https://miro.medium.com/v2/resize:fit:1400/0*KsAwaJTIsOuCsJIe)

Starknet alpha 0.11.0 utilizzerà la versione[Cairo 1.0-alpha.6](https://github.com/starkware-libs/cairo/releases/tag/v1.0.0-alpha.6). Questa versione è vicina alla[parità di funzionalità](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)con Cairo 0, con tutte le chiamate di sistema Starknet già presenti.

Nota che il sequencer Starknet utilizza una versione di compilatore fissa, il che significa che i miglioramenti linguistici potrebbero non essere immediatamente disponibili in Starknet e saranno disponibili solo dopo un aggiornamento della versione Starknet. In particolare, mentre i miglioramenti che riguardano il Cairo 1. → La Sierra compilation può avere effetto immediatamente, le modifiche al compilatore Sierra → CASM (vedi i documenti[](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/)per maggiori dettagli) dovranno attendere un aggiornamento Starknet.

## Che altro è Nuovo?

### Nuovo tipo di transazione — Dichiarare v2

Stiamo aggiungendo[un nuovo tipo di transazione](https://docs.starknet.io/documentation/architecture_and_concepts/Blocks/transactions/#declare_v2_cairo_1_0)per dichiarare le classi Cairo 1.0.

Questa nuova versione della transazione \`declare\` è simile a quella esistente \`declare\`, con due distinzioni importanti:

* L’oggetto di classe inviato ora rappresenta la Sierra piuttosto che il CASM, cioè la semantica della classe è definita dalla rappresentazione della Sierra .
* L'utente sta anche firmando l'hash di classe compilato. Questo è un passo cruciale fino a quando Sierra→CASM compilazione sarà dimostrato come parte del sistema operativo Starknet.

Per maggiori dettagli, vedi[i documenti](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#what_to_expect).

Dal punto di vista dello sviluppatore, l'esperienza rimane la stessa. Dopo aver scritto il tuo codice 1.0 del Cairo, puoi usare il CLI per dichiarare la classe.

**Nota che inizialmente, le transazioni \`declare v2\` non saranno accettate su Starknet Mainnet. Dopo un periodo di sperimentazione su Testnet, il nuovo tipo di transazione sarà attivato su Mainnet e le classi Cairo 1.0 saranno disponibili.**

### Poseidon è qui

[Poseidon](https://www.poseidon-hash.info/)è una famiglia di funzioni di hash progettate per avere circuiti algebrici molto efficienti. In quanto tali, possono essere molto utili in sistemi dimostrativi ZK come STARK e SNARK. A partire da Starknet alpha v0.11.0, gli sviluppatori saranno in grado di utilizzare Poseidon. Inoltre, alcuni dei calcoli di hash che fanno parte del protocollo Starknet passeranno a Poseidon (in particolare, l'hash di classe, hash di classe compilato e parti dell'impegno di stato utilizzeranno Poseidon, vedi[i documenti](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#poseidon_hash)per maggiori dettagli). In futuro, più componenti interni passeranno a utilizzare la funzione di hash Poseidon.

La versione esatta e i parametri utilizzati in Starknet possono essere trovati[qui](https://docs.starknet.io/documentation/architecture_and_concepts/Hashing/hash-functions/#poseidon_hash).

### Variazioni varie

Come le versioni precedenti di Starknet, un aggiornamento ha implicazioni anche per le nostre API e altri componenti di basso livello. Di seguito elenchiamo quelli e affrontiamo le modifiche specifiche che sono state fatte:

* v0 invoke/dichiara le transazioni non sono più supportate
* I messaggi L1→L2 richiedono ora[commissioni](https://docs.starknet.io/documentation/architecture_and_concepts/L1-L2_Communication/messaging-mechanism/#l1-l2_message_fees). Cioè, i messaggi inviati con zero fee non saranno elaborati dal sequencer Starknet
* Il formato dei dati on-chain è[cambiato](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/#on_chain_data_post_v0_11_0)
* [Modifiche API](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#api_changes)(non tutte le modifiche sono elencate qui, si prega di fare riferimento ai documenti per un elenco esaustivo) :
* aggiunto un nuovo endpoint \`get_compiled_class_by_class_hash\`
* \`get_class_by_hash\` restituisce entrambe le classi Cairo 0 / Cairo 1.0 (a seconda dell'hash richiesto)
* \`get_state_update\` ha una nuova sezione per le classi sostituite, e le dichiarazioni sono suddivise tra le classi Cairo 0 e Cairo 1.
* \`estimate_fee\` e \`simulate_tx\` ora possono saltare la convalida
* Una[nuova](https://github.com/starkware-libs/starknet-specs/releases/tag/v0.3.0-rc1)versione Starknet JSON-RPC

## Cosa succederà?

Ora che tutta l'infrastruttura relativa al Cairo 1.0 è stata realizzata, ci si può aspettare:

* Ulteriori miglioramenti linguistici al Cairo 1.0
* Miglioramenti delle prestazioni:[come promesso](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de), continuiamo a progredire verso un aumento significativo del TPS. Il prossimo passo nella roadmap è il passaggio al sequenencer[Rust](https://github.com/starkware-libs/blockifier), che si sviluppa all'aperto sotto l'Apache 2. licenza. Il nuovo sequencer si avvarrà del[rust CairoVM](https://github.com/lambdaclass/cairo-rs)e del[nodo completo Papyrus](https://github.com/starkware-libs/papyrus), formando il Performance Trio.
* Offchain[DA](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/)! In questa versione, abbiamo gestito la componente computazionale del costo della transazione. Nelle prossime versioni gestiremo i costi dei dati on-chain, che sono oggi il costo dominante per le transazioni medie.

![](/assets/starknet-alpha-v0.11.0-diagram.png)