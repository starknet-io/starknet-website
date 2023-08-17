### **TL;DR**

* [StarkNet Planets Alpha](https://voyager.online/)— primul pas pe drumul nostru către Mainnet — este acum în direct pe platforma de testare!
* [StarkNet](https://starkware.co/product/starknet/)este un ZK-Rollup1 fără permisiune.
* Dezvoltatorii își pot pune în aplicare logica de afaceri a alegerii într-un contract inteligent și o pot implementa fără permisiune pe StarkNet.
* Tranziţiile statului StarkNet sunt dovedite în afara lanţului şi apoi verificate în lanţ.
* Ca și Ethereum, utilizatorii pot interacționa direct cu aceste contracte inteligente.

### **Introducere**

Am anunțat[](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)foaia de parcurs pentru[StarkNet](https://starkware.co/product/starknet/)în Jan 2021. Sfântul Graal al soluțiilor de scalabilitate ar sprijini (i) contractele arbitrare inteligente, cu (ii) compozabilitatea, (iii) operate printr-o rețea descentralizată. Astăzi anunţăm desfăşurarea pe bancul de probă a Pasului 1: StarkNet Planets Alpha. Sistemul Alpha sprijină contractele arbitrare inteligente. Compozabilitatea va fi sprijinită în cursul acestui an, iar descentralizarea va urma.

Este foarte important să fim pe deplin transparenți și să stabilim așteptările în mod corespunzător. Scopul acestei postări este de a enumera în mod clar ceea ce este deja susţinut şi ce funcţionalităţi încă lipsesc. Ceea ce lansăm astăzi este lucrul în Progress la testnet. Credem că această eliberare timpurie va ajuta la formarea unui ecosistem sănătos în jurul StarkNet şi a uneltelor sale. Suntem nerăbdători să implicăm dezvoltatorii în construirea rețelei cu noi și să obținem în permanență feedback de la comunitate.

### **Ce este în Planetele StarkNet Alpha?**

**Funcționalitate:**Alpha permite dezvoltatorilor să scrie și să implementeze contracte StarkNet pentru calcule generale. Nu există whitelisting — orice dezvoltator poate scrie și desfășura orice contract pe care îl doresc. Utilizatorii pot interacționa cu aceste contracte, trimițându-le tranzacții și inspectând starea. Toate contractele există într-un singur stat2. Actualizările aduse acestui stat sunt dovedite în afara lanțului și sunt verificate în lanț – în Alpha, verificarea se face prin intermediul plasei testate.

**StarkNet OS:**Funcționalitatea de mai sus este suportată de un nou "sistem de operare" pe care îl numim StarkNet OS. Oferă*tranziții demonstrabile*la starea StarkNet. Dezvoltatorii pot considera acest lucru ca fiind echivalent al EVM: sunt responsabili de utilizarea unor funcții contractuale inteligente, de gestionarea stocării contractelor etc. Vom publica un post separat care detaliază arhitectura sistemului StarkNet.

**Ce nu este în Alpha?**Alpha încă lipsește unele capabilități cheie, cum ar fi interacțiunea L1<>L2, datele în lanț și compozabilitatea. Mai multe informații despre acestea mai jos.

#### **Obține Piciorul tău Wet**

Începe cu tutorialul și documentația noastră[](https://www.cairo-lang.org/docs/hello_starknet/).

Apoi, poți citi prin eșantionul[AMM contract inteligent](http://cairo-lang.org/docs/hello_starknet/amm.html)pe care l-am scris și implementat pe StarkNet. Este un simplu AMM, și puteți interacționa cu el[aici](https://starkware-amm-demo.netlify.app/swap). Acum ești gata să scrii și să implementezi contracte inteligente pe StarkNet. Exploratorul de blocuri StarkNet —[Voyager](https://voyager.online/)— permite oricui să inspecteze starea StarkNet.\
Dacă îți udi picioarele, noi credem că vei fi mai bine pregătit să construiești pe StarkNet, în timp ce continuăm să implementăm funcții suplimentare. Deja suntem ocupați cu planificarea unui prim hackathon, precum și a unor ateliere pentru dezvoltatori.

### **Pașii următori pentru StarkNet**

Capacitățile cheie care încă lipsesc în cadrul programului Alpha vor fi implementate începând cu săptămânile următoare. Acestea sunt:

* L1<>Interacțiunea L2, de ex. abilitatea de a depune și retrage fonduri în L1.
* Date în lanț: publicarea tuturor schimbărilor de stocare pe site-ul Ethereum.
* Compozabilitate: permiterea comunicării între contracte.

Cu aceste caracteristici în vigoare, vom fi gata să aducem StarkNet la Ethereum Mainnet. Numim acest pas în Constelaţiile evolutive ale StarkNet, şi când ajungem la ea, vei fi capabil să construiești și să implementezi fără permisiune pe aplicațiile L2 care pot fi scalabile Ethereum Mainnet.

#### **Ecosistemul StarkNet**

Suntem foarte entuziasmaţi de ecosistemul care se formează în jurul StarkNet aşa că vom face o pauză pentru a mulţumi colaboratorilor noştri până acum.

Lucrăm îndeaproape cu[Nethermind](https://twitter.com/nethermindeth)și echipa Nubia,[Alexey Akhunov](https://twitter.com/realLedgerwatch)(Erigon) &[Igor Mandrigin](https://twitter.com/mandrigin)(gateway. m),[Iddo Bentov](https://www.cs.cornell.edu/~iddo/),[dOrg](https://twitter.com/dOrg_tech),[Prof. Tim Roughgarden](https://twitter.com/algo_class),[Prof. Jeremy Avigad](https://www.andrew.cmu.edu/user/avigad/)& Yoav Seginer, nu în ultimul rând — echipa[Paradigm](https://twitter.com/paradigm).\
Primii noștri parteneri —[dYdX](https://twitter.com/dydxprotocol),[Immutabil](https://twitter.com/Immutable)[DeversiFi](https://twitter.com/deversifi), precum și[Sorare](https://twitter.com/SorareHQ)[Celer](https://twitter.com/CelerNetwork)și alții — ne-au oferit informații inestimabile de la prima zi; și permiteți-ne să construim o rețea la nivel de producție pentru utilizatorii reali.\
Continuăm să fim uimiți de calitatea conținutului creat de comunitate, de persoane precum[Bobbin Threadbare](https://twitter.com/bobbinth),[Daniel Kroni](https://github.com/danielkroeni/cairo-playground/blob/main/anon-bank/README.md),[Adrian Hamelink](https://twitter.com/adr1anh),[perama](https://twitter.com/eth_worm),[Francesco Ceccon](https://twitter.com/ceccon_me),[Ilian Malchev](http://twitter.com/imalchev), și echipa[Alexandria](https://blockchainpartner.fr/).

Suntem nerăbdători să vedem ce va crea comunitatea pe toate fronturile: instrumente de dezvoltare, conținut și, desigur, aplicații StarkNet pe care le vor construi. Hai să păstrăm conversația în media favorită aleasă:[discord](https://discord.gg/uJ9HZTUk2Y),[Twitter](https://twitter.com/CairoLang),[e-mail](mailto:info@starkware.co), şi în curând folosind cele mai descentralizate formulare de comunicare: f2f.

1 Nu suntem suporteri ai termenului ZK-Rollup, deoarece - vorbind matematic - nu este cunoaștere zero, dar știți cu toții ce înțelegem

2 Spre deosebire de starea separată menținută pentru actualele implementări StarkEx pe Mainnet

**Actualizare (Nov. 2021):**StarkNet Alpha este live pe Ethereum Mainnet