### TL;DR

* Un nuovo sequencer StarkNet è in fase di sviluppo
* È open-source sotto la licenza Apache 2.0
* È il primo obiettivo è quello di aumentare la produttività di StarkNet.

### Un nuovo sequencer lucido

Siamo felici di annunciare un nuovo StarkNet Sequencer è nei lavori. Come StarkNet’s tech stack si muove verso open-source, seguendo[Cairo 1.](https://medium.com/starkware/open-sourcing-cairo-1-0-b3100a664bb0)e[Papyrus Full Node](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202), ora continuiamo con il nuovo sequenziatore di StarkNet. Sarà open-source, disponibile sotto licenza Apache 2.0, e puoi andare a controllare[il repo](https://github.com/starkware-libs/blockifier)ora!

Costruire un nuovo Sequencer fa parte della[StarkNet Roadmap](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de)che abbiamo presentato qualche mese fa. L'implementazione del nuovo sequencer inizierà con la sostituzione del**Blockifier**, il modulo all'interno del sequencer che esegue l'esecuzione del blocco. Come spiegato nella tabella di marcia, si prevede che apporterà benefici per le prestazioni di StarkNet.

Il nostro approccio alla costruzione di questo sequencer è lo stesso approccio che ci ha guidato a StarkNet Alpha. Il sequencer**sarà implementato nelle fasi**e oggi condividiamo il suo primo modulo. Nel corso del tempo, i nuovi componenti del sequencer saranno completati, fino a quando un sequencer basato su Ruggine sostituirà completamente l'attuale sequencer basato su Python.

### Cosa fa il sequencer?

Su StarkNet, dopo che gli utenti inviano transazioni, la prima tappa nel viaggio della transazione verso la scala STARK è il sequencer. Nel protocollo StarkNet, i sequencer sono responsabili per ordinare le transazioni e produrre blocchi. Dopo che il blocco è stato creato da un sequenziatore, e approvato dal protocollo di consenso, i provers prendono in consegna e generano una prova per L1.

![](/assets/1_ndrekwqunjixo_wskdeycw-1.png)

### Open-sourcing

StarkNet Alpha lanciato su Mainnet nel novembre 2021. Fin dall’inizio, si è impegnata a condividere il potere di STARK in scala con il mondo.

Oggi stiamo rilasciando il primo in una linea di moduli del nuovo sequenziatore open-source. Ci vorranno diversi mesi perché tutti i moduli e i sottomoduli siano distribuiti. Open sourcing tutto permetterà ai membri della comunità di contribuire allo sviluppo e di controllare il codebase.

Questo permetterà StarkNet più vicino a un punto di sequenziamento decentralizzato senza permessi. Ora stiamo progettando il protocollo decentralizzato di StarkNet, e stiamo incoraggiando la comunità a partecipare alla[ricerca e alla discussione](https://community.starknet.io/t/starknet-decentralized-protocol-consensus/5386).

### Prestazioni

Il sequencer originale di StarkNet è in gran parte un adattamento dell'infrastruttura StarkEx. Ora, vi è la necessità di infrastrutture costruite soprattutto per le esigenze di una rete decentralizzata ad alte prestazioni.

Costruito in Rust, il nuovo sequencer è progettato e sviluppato tenendo conto delle prestazioni. Il nuovo sequencer si basa anche su solide basi: Papyrus, il nuovo[StarkNet full node,](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202)gestirà la gestione dello stato e cairo-rs, la nuova Cairo-VM di LambdaClass, velocizzerà l'esecuzione del Cairo. Ci aspettiamo che il nuovo sequencer migliori sul sequencer esistente in ogni aspetto. La produttività e la latenza della rete dovrebbero migliorare drasticamente con l'integrazione di questo sequencer in StarkNet.

Ci aspettiamo inoltre che altri strumenti infrastrutturali e di sviluppo siano in grado di utilizzare il nuovo sequencer per migliorare l'esperienza di sviluppo. Si prevede che le prestazioni del nodo completo migliorino così come tutti i quadri di prova.

### Summary

Siamo entusiasti di annunciare oggi il nuovo sequencer open-source. Il suo primo modulo è già disponibile per la comunità da rivedere, e sarà seguito con più moduli nei prossimi mesi . Siamo anche felici di fare un altro passo nella nostra roadmap per migliorare le prestazioni di StarkNet. Puntiamo a rendere la rete più efficiente e accessibile, e apprezziamo il sostegno di tutti coloro che si sono uniti a noi in questo viaggio.