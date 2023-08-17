Il nostro precedente[post](https://medium.com/@starkware/part-1-starknet-sovereignty-a-decentralization-proposal-bca3e98a01ef)ha spiegato cosa è StarkNet, come viene progressivamente decentralizzato, e ha fornito una sintesi dei suoi due meccanismi di decentramento. Questo post discute il processo di decentramento StarkNet, il ruolo della Fondazione StarkNet e la necessità di un nuovo token nativo per StarkNet. Infine, discute ulteriori considerazioni sulla governance di StarkNet.

### Principi di decentramento

[STARK](https://eprint.iacr.org/2018/046.pdf)la tecnologia è matura e sicura, ma finora è stato implementato e utilizzato principalmente come servizio centralizzato su Ethereum ([StarkEx](https://starkware.co/starkex/)), e una versione alfa di un servizio decentrato ([StarkNet](https://starkware.co/starknet/)). StarkNet dovrebbe essere disponibile come un vero bene pubblico senza permesso, come Ethereum o Internet. Ci impegniamo quindi a promuovere il decentramento di StarkNet e i seguenti quattro principi per guidare il cambiamento:

**Liveness.**StarkNet non farà affidamento su una singola azienda come suo operatore. Le imprese possono cessare di esistere o decidere di interrompere la manutenzione della rete. Dopo il decentramento, tali scenari non faranno scendere StarkNet.

**Resistenza alla censura.**Una singola azienda può teoricamente decidere, o essere costretta, di censurare transazioni particolari e contratti intelligenti mentre soddisfacendo gli altri. StarkNet utilizzerà un modello decentrato per proteggere da tale scenario.

**Trasparenza.**Gli aggiornamenti e la manutenzione del software sono una parte inevitabile di qualsiasi servizio decentralizzato. Tali azioni devono essere discusse in modo trasparente, in modo che la comunità sia informata e sotto il controllo della tecnologia. La più grande comunità di utenti, operatori e sviluppatori StarkNet deve lavorare collettivamente per determinare gli aggiornamenti e la manutenzione attraverso un processo trasparente, equo, partecipativo e inclusivo.

**Creatività.**StarkNet deve consentire a qualsiasi sviluppatore di partecipare alla costruzione della sua infrastruttura e delle sue applicazioni, prevenire il monopolio e aumentare gli usi creativi e socialmente vantaggiosi delle blockchain su scala.

La decentralizzazione è un problema difficile, da non affrontare in modo affrettato. La proposta di governance di StarkNet, condivisa qui, probabilmente si svilupperà e cambierà nel tempo. Quello che segue è solo la sua prima iterazione.

### Fondazione

La Fondazione sarà un'organizzazione no-profit guidata dalla missione, e sarà concessa StarkNet Tokens (vedi[prossimo post](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6)). Prevediamo che la missione della Fondazione sarà quella di mantenere StarkNet come bene pubblico. StarkNet è un'infrastruttura senza permesso che dovrebbe essere disponibile per tutti. Deve essere ben mantenuta per essere sicura ed efficiente per l'uso pubblico. Inoltre, non deve discriminare gli utenti, gli operatori e gli sviluppatori. La Fondazione sarà dedicata a promuovere gli obiettivi di decentramento sopra descritti: vita, resistenza alla censura, trasparenza e creatività.

La vitalità e la resistenza alla censura di StarkNet, si ottengono al meglio grazie a un consenso senza autorizzazioni e decentrato attraverso l’elezione del leader di prova della partecipazione per il sequenziamento e la dimostrazione delle transazioni compresso di STARK. Mentre questo meccanismo è automatizzato, si basa su un software di protocollo ben funzionante eseguito da nodi sulla rete, così come la validità e la vita continua della blockchain Ethereum sottostante. Pertanto, la Fondazione fungerà anche da risorsa per lo sviluppo in corso, la documentazione, e la pubblicazione di quel software di protocollo, soprattutto per quanto riguarda le correzioni di bug e i miglioramenti di efficienza.

Al di là della manutenzione di routine, anticipiamo vivaci dibattiti all'interno della comunità sui cambiamenti di funzionalità o altri aggiornamenti più fondamentali del protocollo. Questo è inevitabile in sistemi permissless, come dimostrato storicamente dal dibattito di dimensioni del blocco di Bitcoin, Ethereum proof-of-stake merge, e numerosi altri esempi in tutto l'ecosistema di criptovaluta. Queste decisioni di sviluppo del software non sono semplici guadagni oggettivi di matematica e di efficienza, ma comportano piuttosto giudizi soggettivi di valore e compromessi di caratteristiche. In molte comunità blockchain queste decisioni vengono prese in modo informale senza regole chiare di dibattito o un processo decisionale. Anche una mancata decisione è una decisione che favorisce lo status quo. Per evitare questi problemi, la missione della Fondazione comprenderà anche lo sviluppo, la sperimentazione e l'attuazione di processi decisionali comunitari per risolvere le questioni tecnologiche essenziali. Tale meccanismo sarà centrale nelle decisioni sugli aggiornamenti dei protocolli, sulla risoluzione delle controversie e sul finanziamento dei beni pubblici. La Fondazione promuoverà la trasparenza distribuendo le informazioni necessarie per prendere tali decisioni, e manterrà un archivio di tali informazioni per riferimenti futuri.

### Perché token?

StarkNet è sempre stato pensato come un protocollo che viene eseguito dalla comunità, eppure non c'è stato modo chiaro di definire chi comprende esattamente questa comunità. *Il token permetterà ai sostenitori della comunità che svolgono un lavoro che ha contribuito al successo dell'ecosistema di svolgere un ruolo nella governance di quell'ecosistema.*

Inoltre, un servizio equo, aperto e resistente alla censura è possibile solo se più parti si mostrano in concorrenza per svolgere un lavoro che potenzia il servizio decentralizzato, e ciò può essere garantito solo se tali lavoratori vengono compensati per il loro ruolo di operatori della rete.

Pertanto, è necessario includere i token come parte di una tecnologia di rete come StarkNet. E anche se la resistenza alla censura di pagamento può essere ottenuta utilizzando un gettone non nativo esistente, per esempio Bitcoin o Ether (ETH), crediamo che un tale approccio mancherebbe nel tempo di fornire agli utenti della rete una comunità distinta e una voce nelle decisioni.

Un token nativo che premia i membri della comunità che sviluppano la rete avanzerà l'ecosistema a un livello che l'uso di un token non nativo non lo farà. Inoltre, se il token non è nativo, gli shock economici derivanti da decisioni prese in altri ecosistemi potrebbero avere un impatto sul servizio di StarkNet e sui suoi utenti e fornitori.

### Per che cosa verrà utilizzato il token?

Il token sarà il meccanismo per gestire la rete (commissioni), mantenere e garantire la rete (partecipazione al consenso) e decidere in merito ai suoi valori e obiettivi strategici (governance).

**Spese di transazione:**Attualmente, le commissioni in StarkNet sono pagate in Ether (ETH). Ma più tardi, anticipiamo le tasse saranno pagate esclusivamente con il nativo StarkNet Token. Per supportare una buona esperienza utente, meccanismi automatizzati e decentrati nella catena consentiranno agli utenti di pagare commissioni in ETH.

**Staking:**Alcuni servizi che sono critici per la vita e la sicurezza di StarkNet possono richiedere lo staking di StarkNet Tokens. Questi servizi possono includere sequenziamento, raggiungendo il consenso temporaneo di L2 prima che sia raggiunta la finalità di L1, i servizi di prova di STARK e la fornitura di dati disponibili, per citare alcuni esempi. Ci aspettiamo che questi servizi siano decentrati nel 2023.

**Governance:**Le proposte per migliorare StarkNet richiederanno una soglia minima di supporto token, da definire in seguito. Il voto, direttamente o tramite delega, sarà richiesto per tutte le modifiche al protocollo che sono essenziali per la vita, la sicurezza e la manutenzione di StarkNet. Ad esempio, tutti i principali aggiornamenti del sistema operativo StarkNet richiederanno l'approvazione dei possessori di token.

### Riflessioni finali sulla governance

I meccanismi di governance decentrati sono ancora agli inizi e nessun progetto in questo spazio ci ha fornito un modello convincente di emulazione. Il voto regolare e diretto di tutti i titolari di token è il miglior percorso? È relativamente semplice concepire questo aspetto come un meccanismo tecnologico, ma può essere ingombrante e può ingiustamente privilegiare i titolari di un gran numero di gettoni, piuttosto che le persone che utilizzano attivamente la rete.

Quando si considera l'approccio migliore, suggeriamo di considerare i controlli e gli equilibri tra diverse strutture separate che derivano la loro autorità dalla comunità di possessori di StarkNet Token.

Si consiglia inoltre ai titolari di token StarkNet di fare buon uso delle competenze degli sviluppatori di base. In tutti gli ecosistemi blockchain, gli sviluppatori principali svolgono un ruolo centrale nella sicurezza, nel mantenimento e nell'avanzamento della tecnologia sottostante. Vale quindi la pena di prendere in considerazione la definizione di un ruolo formale da svolgere nell'ambito del processo di governance.

Il[terzo post](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6)di questa serie descrive il design dello StarkNet Token: le considerazioni di progettazione del token chiave, e le diverse fasi di allocazione del token.