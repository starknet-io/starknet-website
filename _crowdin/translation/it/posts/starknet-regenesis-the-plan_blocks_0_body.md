### TL;DR

* Stiamo condividendo un piano dettagliato per Regenesis, che è stato modellato da ampie discussioni con la comunità StarkNet. Un ringraziamento speciale a Kuba@SWM.
* Regenesis seguirà il rilascio di Cairo 1.0, rendendo il sistema più sicuro consentendo contratti StarkNet più semplici e sicuri
* Gli utenti dovrebbero essere pronti ad aggiornare il loro portafoglio durante la fase di transizione
* Gli sviluppatori saranno tenuti a portare i loro contratti al Cairo 1.0

### Introduzione

StarkNet Alpha sta progredendo verso Regenesis, un passo importante verso la produzione. In questo aggiornamento vogliamo condividere maggiori dettagli sulla motivazione principale di Regenesis —[Cairo 1.](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)— e per iniziare a spiegare ciò che richiederà agli utenti e agli sviluppatori. Dopo Regenesis, StarkNet lavorerà solo con contratti basati sul Cairo 1.0, e partirà da un nuovo blocco di genesi con lo stato esistente.

Che cosa richiederà Regenesis agli utenti? Un semplice aggiornamento del loro portafoglio. Che cosa richiederà dai costruttori dei dapp di StarkNet? Portare i loro contratti al Cairo 1.0, e seguendo un semplice orientamento di aggiornamento. In particolare, non ci sarà alcun riavvio da uno stato pulito e rimarremo con la stessa istanza StarkNet, significa che non ci sarà bisogno di una migrazione**.**

Il piano Regenesis è quello di preservare completamente lo stato delle applicazioni e di non incorrere in alcun tempo di fermo per le applicazioni. Così, le applicazioni che seguono le linee guida che forniremo saranno in grado di lanciare subito su StarkNet Alpha Mainnet senza alcun disturbo per il loro funzionamento e i loro utenti durante il processo di Regenesis. e sono impegnati a collaborare con la comunità e fornire tutto il sostegno necessario per rendere questo processo il più agevole possibile.

Stiamo prendendo questa direzione a seguito di ampie discussioni con la comunità, che hanno incluso un importante suggerimento da parte del team di Software Mansion.

### Perché Regenesis?

#### Cairo 1.0 e Sierra

La motivazione principale per la Regenesi è sfruttare le nuove possibilità create dal Cairo 1. — ossia sequencers DOS, resistenza alla censura e misurazione del gas, che sono essenziali per StarkNet come rete decentralizzata.

Il Cairo 1.0 garantirà che ogni transazione possa essere dimostrata. Questo permetterà a StarkNet di includere le transazioni ripristinate in blocchi, e generare una prova della loro esecuzione. Questo meccanismo consentirà ai sequencer di essere pagati sull'esecuzione di transazioni annullate, aumentando la protezione DOS contro gli attori dannosi. Inoltre, il Cairo 1.0 sosterrà la misurazione del gas, che consentirà a StarkNet di passare a un mercato delle tariffe più intuitivo. Infine, ciò consentirà a StarkNet di introdurre transazioni forzate da L1 e migliorerà le capacità di resistenza alla censura della rete.

Per cogliere questi vantaggi, i contratti Cairo v0 e Cairo 1.0 non possono essere misti. Dichiarazioni errate non possono essere dimostrate inesatte, né possono accadere tracciamenti del gas, se abbiamo bit di contratti Cairo v0. A tal fine, dovremo eliminare completamente il codice Cairo v0 dallo stato di StarkNet, ergo Regenesis.

**Dopo Regenesis, avremo un sistema Starknet completamente basato sul Cairo 1.0.**

#### Semplificazione del codice e del protocollo

StarkNet, mentre ancora ad Alfa, ha già subito molti cambiamenti. Ogni versione finora ha modificato il sistema operativo StarkNet, i blocchi e la struttura delle transazioni. Ciò ha causato l'obsolescenza di alcuni codici. Tuttavia, i nodi completi e i fornitori di infrastrutture (come gli indicizzatori e gli esploratori di stato) devono essere a conoscenza, e implementare, tutti i comportamenti passati delle versioni di StarkNet Alpha al fine di sincronizzare con lo stato senza fiducia. Senza Regenesis, questo onere potrebbe essere un deterrente importante per gli sviluppatori che prenderebbero in considerazione la costruzione di tali servizi per StarkNet.

Pertanto, prima di passare alla produzione, e come preparazione ad un mondo decentrato con molte implementazioni di strumenti infrastrutturali, intendiamo ridurre la complessità del protocollo. Questo obiettivo sarebbe raggiunto non richiedendo infrastrutture future per eseguire qualsiasi StarkNet 0. codice e contrassegnare il primo blocco dopo il periodo di transizione come punto di genesi.

### Wen Regenesis? La timeline generale

Regenesis seguirà il rilascio del Cairo 1.0, che è previsto per la fine del 2022. Durante il primo trimestre del 2023, StarkNet sarà aggiornato per supportare il Cairo 1. , e ci proponiamo di migrare verso una rete completamente basata sul Cairo 1.0 entro la fine del Q1.

**Gli utenti e le applicazioni dovranno effettuare la transizione durante questo periodo.**

![](/assets/1_ef85shzd2uudwex-cy8wdg-1.png)

### Così che cosa ho bisogno di sapere?

Gli sviluppatori di applicazioni devono essere consapevoli dei seguenti aspetti intorno a Regenesis:

1. Assicurati che il tuo contratto sia pronto per l'aggiornamento. I dettagli tecnici completi del piano sono condivisi nel[StarkNet Community Forum](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080). Una volta che i dettagli saranno definiti, condivideremo una linea guida concisa.
2. Assicurati di essere pronto a portare il tuo codice al Cairo 1.0. Vedi la sezione successiva per tutti i dettagli più recenti.

#### Portare il tuo contratto al Cairo 1.0

Cairo 1.0 mantiene una grande promessa per gli sviluppatori StarkNet. Un miglioramento rispetto al Cairo esistente che sarà più sicuro, migliore e più facile per la scrittura dei contratti, con una sintassi migliorata, sistema di tipo a pieno regime (native uint256 chiunque? e altro ancora. Gli sviluppatori saranno tenuti a portare i loro contratti StarkNet esistenti alla sintassi Cairo 1.0. Tuttavia, poiché la logica e la struttura del codice rimarranno invariate, questo sforzo dovrebbe essere trascurabile rispetto allo sforzo necessario per sviluppare l'app in primo luogo.

In questo contesto, vale la pena notare che puoi scegliere di rivedere la versione Cairo 1.0 della tua app. Se la tua app è già stata verificata in passato, il processo di revisione contabile sarà significativamente più economico e più semplice, poiché i revisori conoscono già la vostra logica.

Rilasceremo tutta la documentazione intorno al Cairo 1.0, insieme a tutorial e workshop durante il Q4 del 2022.

### Sono un utente StarkNet. Cosa Dovrei Fare?

Come utente, probabilmente dovrai intraprendere alcune azioni durante Regenesis. Almeno, dovrete aggiornare il vostro contratto di account. Non farlo durante il periodo di transizione (pochi mesi) si tradurrà in perdita del tuo conto. A seconda del percorso di aggiornamento scelto dagli sviluppatori delle app StarkNet che stai utilizzando, potrebbe essere necessario adottare ulteriori passaggi.

Ricordiamo a tutti che StarkNet è ancora in fase alfa, e gli utenti sono tenuti a stare attenti alle comunicazioni di StarkNet e le applicazioni che stanno utilizzando. È vostra responsabilità assicurarsi di aggiornare presto al nuovo sistema. *Essere un primo utilizzatore non è sempre facile, e contiamo su di te per fare la tua parte!*

### Per Concludere

Cairo 1.0 è proprio dietro l'angolo, fornendo molti vantaggi e miglioramenti entusiasmanti per StarkNet e i suoi sviluppatori. Per raccoglierli, è necessario un evento di regenesi della rete. Per fortuna, abbiamo un design in mente che rende questo processo minimamente dirompente - completamente senza soluzione di continuità per gli utenti, e abbastanza semplice per le applicazioni.

Ti invitiamo a partecipare alla[discussione della community](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080)e condividere i tuoi commenti e le tue preoccupazioni, così come rimanere aggiornati per quanto riguarda i passaggi che dovrete prendere come sviluppatore di applicazioni su StarkNet.