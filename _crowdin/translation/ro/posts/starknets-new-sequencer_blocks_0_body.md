### TL;DR

* Un nou secvenţial StarkNet este în curs de dezvoltare
* Este open-source sub licența Apache 2.0
* Primul obiectiv este să mărești tranzitul StarkNet-ului

### Un nou secvenţial strălucitor

Suntem bucuroşi să anunţăm un nou Sequencer StarkNet este în lucru. Cum stiva tehnologică StarkNet's se mișcă spre open-source, urmând[Cairo 1.](https://medium.com/starkware/open-sourcing-cairo-1-0-b3100a664bb0)și[Papyrus Full Node](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202), acum continuăm cu noul secvențial StarkNet. Va fi open-source, disponibil sub licența Apache 2.0, și puteți verifica[repo](https://github.com/starkware-libs/blockifier)acum!

Construirea unui nou Sequencer face parte din[Foaia de parcurs StarkNet](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de)pe care am prezentat-o acum câteva luni. Implementarea noului secvenţial va începe cu înlocuirea**Blockifier**, modulul din cadrul secvenţialului care efectuează execuţia blocului. După cum se explică în foaia de parcurs, se preconizează că aceasta va aduce beneficii performanței StarkNet.

Abordarea noastră de a construi acest secvenţial este aceeaşi abordare care ne-a ghidat în StarkNet Alpha. Succesiunea**va fi implementată în etapele**, iar astăzi distribuim primul său modul. De-a lungul timpului, noi componente ale secvenţialului vor fi finalizate, până în cele din urmă un ulcer bazat pe Rust, va înlocui în întregime secvenţialul actual bazat pe Python.

### Ce face secvenţialul?

Pe StarkNet, după ce utilizatorii trimit tranzacții, prima oprire din călătoria tranzacției la scara STARK este secvențierii. În protocolul StarkNet, secvențierii sunt responsabili pentru ordonarea tranzacțiilor și producerea blocurilor. După ce blocul este creat de un secvențiator și aprobat de protocolul consensual, proverii preiau și generează o dovadă pentru L1.

![](/assets/1_ndrekwqunjixo_wskdeycw-1.png)

### Open-Sourcing

StarkNet Alpha a lansat pe Mainnet în noiembrie 2021. Încă de la început, aceasta a fost hotărâtă să împartă puterea STARK pe scara mondială.

Astăzi lansăm prima într-o linie de module a noului secvenţial open-source. Va dura câteva luni pentru ca toate modulele și submodulele să fie implementate. O sursă deschisă de aprovizionare va permite membrilor comunităţii să contribuie la dezvoltarea codului şi să auditeze codebaza.

Acest lucru va împinge StarkNet mai aproape de un punct de secvenţiere descentralizată fără permisiuni. Acum proiectăm protocolul descentralizat al lui StarkNet, și încurajăm comunitatea să participe la[cercetarea și discuția](https://community.starknet.io/t/starknet-decentralized-protocol-consensus/5386).

### Performanță

Parametrul original al lui StarkNet, este în mare parte o adaptare a infrastructurii Starkex. Acum, este nevoie de o infrastructură construită în special pentru cerinţele unei reţele descentralizate cu performanţe înalte.

Construit în Rust, noul secvenţial este proiectat şi dezvoltat ţinând cont de performanţă. Noul secvențial se bazează, de asemenea, pe fundații solide: Papyrus, noul[Nod complet StarkNet,](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202)se va ocupa de managementul de stat, iar cairo-rs, noul Cairo-VM de LambdaClass, va accelera execuţia Cairo. Ne aşteptăm ca noul secvenţial să se îmbunătăţească la secvenţialul existent în fiecare aspect. Se preconizează că ritmul și latența rețelei se vor îmbunătăți dramatic odată cu integrarea acestui secvențial în StarkNet.

De asemenea, ne aşteptăm ca alte infrastructuri şi instrumente de dezvoltare să poată utiliza noul secvenţial pentru a îmbunătăţi experienţa de dezvoltare. Se preconizează că performanța completă a nodului se va îmbunătăți, precum și toate cadrele de testare.

### Summary

Suntem încântaţi să anunţăm astăzi noul secvenţial open-source. Primul său modul este deja disponibil pentru a fi revizuit de comunitate, și va fi urmărit cu mai multe module în următoarele luni. De asemenea, suntem bucuroși să facem încă un pas în foaia noastră de parcurs pentru îmbunătățirea performanței StarkNet. Scopul nostru este de a face reţeaua mai eficientă şi mai accesibilă şi apreciem sprijinul tuturor celor care ni s-au alăturat în această călătorie.