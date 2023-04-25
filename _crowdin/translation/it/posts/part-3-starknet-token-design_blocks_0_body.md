In questo post ci immergiamo più in profondità nel design del token StarkNet, il suo programma di minting e la tempistica prevista.

### Considerazioni

Il design dello StarkNet Token è modellato dalla necessità di alimentare una rete composta da (i)**Utenti**di StarkNet, (ii)**Operatori**— persone che forniscono alla rete risorse informatiche che eseguono la sequenza delle operazioni, generazione di prove STARK e fornitori di stoccaggio a lungo termine, e iii)**Gli sviluppatori**scrivono software per la sua infrastruttura e per le applicazioni in esecuzione su di essa.

I meccanismi per la struttura delle tariffe e la coniazione dei gettoni dovrebbero essere:

* Molto automatizzato, invece di basarsi su un significativo intervento umano
* Conosciuto e testato in altri sistemi blockchain
* Semplice da analizzare e spiegare; trasparente
* Resistente alla manipolazione speculativa e alla gamificazione non creatrice di valore
* Considerato di avere una buona esperienza utente (UX)

Queste preferenze configureranno il meccanismo di allocazione dei token da nuove commissioni di minting e di transazione pagate dagli utenti:

**Operatori**garantiscono la continuità di vita di StarkNet e forniscono le prestazioni di alta qualità del protocollo che gli utenti richiedono.

**Gli sviluppatori**costruiscono e mantengono il software utilizzato dagli operatori per proteggere la rete, e creano app che migliorano la funzionalità della rete per gli utenti. Di conseguenza, una parte delle tasse e della nuova minting andrà agli sviluppatori di contratti intelligenti e agli sviluppatori principali, come segue:

* **Smart Contract Developers:**il protocollo StarkNet può misurare automaticamente il valore fornito dagli smart contract, attraverso le commissioni L1 e L2 pagate dagli Utenti di tali contratti. Il protocollo StarkNet assegnerà automaticamente una frazione di commissioni e in corso di nuovo minting agli sviluppatori di contratti intelligenti. I contratti intelligenti che offrono più valore agli Utenti — misurati dalle commissioni pagate per loro — riceveranno una maggior parte dei token assegnati a questo scopo.
* **Core Developers:**Il protocollo StarkNet non ha modo automatico di quantificare il contributo degli sviluppatori principali, come quei codici di scrittura per provers, sequencer, nodi completi, ecc. Di conseguenza, l'assegnazione simbolica a tali sviluppatori e altri contributori il cui contributo non è misurabile dal protocollo richiede necessariamente una certa discrezionalità umana. Verrà stabilito un modello per applicare questo in modo coerente con l'obiettivo del decentramento.
* Il meccanismo esatto per l'allocazione di gettoni da nuove minting e tasse a entrambi i tipi di Sviluppatori deve ancora essere determinato. I principi di progettazione comprenderanno anti-gamification e trasparenza.

### Assegnazione iniziale di StarkNet Tokens

Dieci miliardi di gettoni sono stati coniati off-chain da StarkWare. Per chiarire: questi StarkNet Tokens non rappresentano il capitale proprio di StarkWare né forniscono alcun diritto di partecipazione a StarkWare né concedono alcun diritto di rivendicazione a StarkWare. La fornitura circolante di token aumenterà nel tempo con la coniazione di nuovi token dal protocollo, secondo un calendario che sarà determinato dalla comunità in un secondo momento.\
*La fornitura circolante non può quindi rimanere fissa.*

L'assegnazione è così:

**17%**— StarkWare Investors

**32.9%**— Contributori principali: StarkWare e i suoi dipendenti e consulenti e partner di sviluppo software StarkNet

**50,1%**concesso da StarkWare alla Fondazione, assegnato come segue:

* **9%**— Disposizioni comunitarie — per coloro che hanno eseguito lavori per StarkNet e hanno alimentato o sviluppato la tecnologia sottostante, e. . tramite l’uso passato dei sistemi StarkEx L2. Fondamentalmente, tutte le disposizioni comunitarie si baseranno su un lavoro verificabile svolto in passato. Ad esempio, nella misura in cui le disposizioni comunitarie saranno date agli utenti passati di StarkEx, le assegnazioni saranno determinate in base all’uso verificabile della tecnologia StarkEx che ha avuto luogo**prima del 1 giugno 2022.**
* **9%**— Community Rebates — sconti in StarkNet Tokens per**parzialmente**coprire i costi di onboarding per StarkNet da Ethereum. Per prevenire la gamificazione, Community Rebates si applicherà solo alle transazioni che si verificano**dopo**viene annunciato il meccanismo di sconto.
* **12%**— Sovvenzioni per la ricerca e il lavoro svolto per sviluppare, provare, distribuire e mantenere il protocollo StarkNet
* **10%**— una riserva strategica, finanziare attività ecosistemiche allineate alla missione della Fondazione come spiegato nel[post precedente](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)di questa serie.
* **2%**— Donazioni a istituzioni e organizzazioni di alto livello, come università, ONG, ecc, come deciso dai titolari di StarkNet Token e dalla Fondazione.
* **8. %**Non assegnato — il tesoro non assegnato della Fondazione è in atto per sostenere ulteriormente la comunità StarkNet in un modo che deve essere deciso dalla comunità.

Allineare gli incentivi a lungo termine dei principali contributori e investitori agli interessi della comunità StarkNet e seguire le pratiche comuni negli ecosistemi decentrati, tutti i token assegnati a Core Contributors e Investors saranno soggetti a un periodo di blocco di 4 anni, con rilascio lineare e una scogliera di un anno.

![](/assets/1_qcosthgskfd-q6bn3yzghq-1.png)

### C'è un modo per ricevere StarkNet Tokens?

La risposta breve è sì, ma non ci sono scorciatoie per ricevere gettoni.

StarkNet Token allocazione e il suo mercato delle tariffe e la nuova progettazione di minting danno la precedenza agli sviluppatori di infrastrutture di base e dApps, così come altri che contribuiscono alla sicurezza e alla salute dell’ecosistema. Che cosa significa praticamente in relazione al token?

Se sei uno sviluppatore e hai già scritto un software per l'infrastruttura StarkNet o per uno smart contract, che sono autenticamente valutati e utilizzati dagli utenti finali StarkNet, quindi si può aspettare di ricevere i token automaticamente attraverso il protocollo. Una delle tante misure di salvaguardia contro la gamification di questo meccanismo è che le tasse ricevute dagli sviluppatori saranno rigorosamente inferiori a quelle pagate dagli utenti.

Gli sviluppatori possono anche ricevere donazioni token per il lavoro svolto per sviluppare, testare e mantenere il protocollo StarkNet. Tali sovvenzioni saranno stabilite a tempo debito dalla Fondazione conformemente alla sua missione.

Se sei uno sviluppatore blockchain che crede che StarkNet sia la risposta alle esigenze di scala di Ethereum, ti invitiamo a saperne di più su[StarkNet](https://starknet.io/)e il suo linguaggio di programmazione,[Cairo](https://www.cairo-lang.org/), e per iniziare a sviluppare i tuoi smart contract.

Se sei un utente finale, usa StarkNet — ma solo perché serve le tue esigenze oggi. Usalo per quelle transazioni e applicazioni che valorizzi,*non in attesa di alcuna ricompensa futura di StarkNet Tokens.*Quando vengono annunciate le disposizioni comunitarie, esse si riferiranno solo alle istantanee che si sono verificate prima della data di annuncio, e filtrerà ed escluderà l'utilizzo che è considerato da esso un abuso e la gamificazione della rete, sulla base delle informazioni disponibili in quel momento. Quando vengono istituiti i rimborsi comunitari, non si applicheranno mai alle operazioni che si sono verificate prima dell'annuncio dello sconto, così operare oggi in previsione di un futuro sconto è inutile.

### Osservazioni finali

Costruire una rete aperta significa abbracciare l'ignoto. Internet, Bitcoin ed Ethereum, sono stati inventati da innovatori che credevano che i loro strumenti potessero cambiare il mondo, ma non sapevano come. Umidamente, speriamo che la capacità di StarkNet di scalare blockchain sia buona per Ethereum e buona per un web decentralizzato. Non possiamo sapere cosa si costruirà. Ma crediamo che StarkNet metta una notevole capacità tecnologica nelle mani di una comunità creativa, e speriamo di vedere che la comunità la utilizza in una miriade di modi, molti di loro come ancora inimmaginati.