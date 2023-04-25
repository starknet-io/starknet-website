### **TL;DR**

* [StarkNet Planets Alpha](https://voyager.online/), el primer pas del nostre camí cap a Mainnet, ja està en directe a Testnet!
* [StarkNet](https://starkware.co/product/starknet/)és un ZK-Rollup complet de Turing sense permís¹.
* Els desenvolupadors poden implementar la seva lògica empresarial preferida en un contracte intel·ligent i desplegar-lo sense permís a StarkNet.
* Les transicions d'estat de StarkNet es demostren fora de la cadena i després es verifiquen a la cadena.
* Igual que Ethereum, els usuaris poden interactuar directament amb aquests contractes intel·ligents.

### **Introducció**

Vam anunciar[el full de ruta per](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)[StarkNet](https://starkware.co/product/starknet/)el gener de 2021. El Sant Grial de les solucions d'escalabilitat suportaria (i) contractes intel·ligents arbitraris, amb (ii) composició, (iii) operats a través d'una xarxa descentralitzada. Avui anunciem el desplegament a testnet del Pas 1: StarkNet Planets Alpha. El sistema Alpha admet contractes intel·ligents arbitraris. La composició es donarà suport a finals d'any, amb la descentralització a continuació.

És molt important per a nosaltres ser totalment transparents i establir les expectatives correctament. L'objectiu d'aquesta publicació és enumerar clarament què ja és compatible i quines funcionalitats encara falten. El que estem llançant avui és Treball en curs a testnet. Creiem que aquest llançament primerenc ajudarà a la formació d'un ecosistema saludable al voltant de StarkNet i les seves eines. Tenim moltes ganes d'implicar els desenvolupadors en la construcció de la xarxa amb nosaltres i d'obtenir comentaris continus de la comunitat.

### **Què hi ha a StarkNet Planets Alpha?**

**Funcionalitat:**L'Alpha permet als desenvolupadors escriure i desplegar contractes StarkNet per al càlcul general. No hi ha cap llista blanca: qualsevol desenvolupador pot escriure i desplegar el contracte que vulgui. Els usuaris poden interactuar amb aquests contractes, enviant-los transaccions i inspeccionant el seu estat. Tots els contractes existeixen en un sol estat². Les actualitzacions d'aquest estat es demostren fora de la cadena i es verifiquen a la cadena; a l'Alfa, la verificació es fa a la xarxa de prova.

**StarkNet OS:**La funcionalitat anterior és compatible amb un nou "sistema operatiu" que anomenem StarkNet OS. Ofereix*transicions demostrables*estat a StarkNet. Els desenvolupadors d'Ethereum poden pensar-ho com l'equivalent de l'EVM: és responsable d'invocar funcions de contracte intel·ligent, gestionar l'emmagatzematge de contractes, etc. Publicarem una publicació independent que detalla l'arquitectura del sistema operatiu StarkNet.

**Què no hi ha a l'Alfa?**A l'Alfa encara li falten algunes capacitats clau, com ara la interacció L1<>L2, les dades en cadena i la composició. Més informació sobre aquests a continuació.

#### **Mullar-se els peus**

Comenceu amb el nostre[tutorial i documentació](https://www.cairo-lang.org/docs/hello_starknet/).

A continuació, podeu llegir el contracte intel·ligent AMM[de mostra](http://cairo-lang.org/docs/hello_starknet/amm.html)que hem escrit i desplegat a StarkNet. És un AMM senzill, i podeu interactuar amb ell[aquí](https://starkware-amm-demo.netlify.app/swap). Ara esteu preparat per escriure i desplegar contractes intel·ligents a StarkNet. L'explorador de blocs per a StarkNet —[Voyager](https://voyager.online/)— permet que qualsevol persona inspeccioni l'estat de StarkNet.\
En mullar-se els peus, creiem que estaràs millor preparat per construir a StarkNet, a mesura que continuem desplegant funcions addicionals. Ja estem ocupats planificant un primer hackathon, així com tallers per a desenvolupadors.

### **Següents passos per a StarkNet**

Les capacitats clau que encara falten a l'Alfa es posaran en marxa a partir de les properes setmanes. Aquests són:

* L1<>L2 Interacció, p. ex. la capacitat de dipositar i retirar fons a L1.
* Dades en cadena: publicació de tots els canvis d'emmagatzematge a Ethereum.
* Composabilitat: permet que els contractes es comuniquin entre ells.

Amb aquestes funcions al seu lloc, estarem preparats per portar StarkNet a Ethereum Mainnet. Anomenem aquest pas a les constel·lacions de l'evolució de StarkNet i, quan hi arribem, podreu crear i desplegar sense permís a les dApps escalables L2 d'Ethereum Mainnet.

#### **L'ecosistema StarkNet**

Estem molt entusiasmats amb l'ecosistema que s'està formant al voltant de StarkNet, així que farem una pausa per donar les gràcies als nostres col·laboradors fins ara.

Estem treballant estretament amb[Nethermind](https://twitter.com/nethermindeth)i l'equip de Nubia,[Alexey Akhunov](https://twitter.com/realLedgerwatch)(Erigon) &[Igor Mandrigin](https://twitter.com/mandrigin)(gateway.fm),[Iddo Bentov](https://www.cs.cornell.edu/~iddo/),[dOrg](https://twitter.com/dOrg_tech),[Prof. Tim Roughgarden](https://twitter.com/algo_class),[Prof. Jeremy Avigad](https://www.andrew.cmu.edu/user/avigad/)& Yoav Seginer, per últim, però no menys important, l'equip[Paradigm](https://twitter.com/paradigm).\
Els nostres primers socis —[dYdX](https://twitter.com/dydxprotocol),[Immutable](https://twitter.com/Immutable),[DeversiFi](https://twitter.com/deversifi), així com[Sorare](https://twitter.com/SorareHQ),[Celer](https://twitter.com/CelerNetwork)i altres — ens han estat aportant una aportació inestimable des del primer dia i ens permeten crear una producció -Grau xarxa per a usuaris reals.\
Continuem sorprès per la qualitat del contingut creat per la comunitat, per persones com ara[Bobbin Threadbare](https://twitter.com/bobbinth),[Daniel Kroni](https://github.com/danielkroeni/cairo-playground/blob/main/anon-bank/README.md),[Adrian Hamelink](https://twitter.com/adr1anh),[perama](https://twitter.com/eth_worm),[Francesco Ceccon](https://twitter.com/ceccon_me),[Ilian Malchev](http://twitter.com/imalchev), 43 i l'equip d'Alexandria[](https://blockchainpartner.fr/).

Estem ansiosos de veure què crearà la comunitat en tots els fronts: eines de desenvolupament, contingut i, per descomptat, les aplicacions StarkNet que construiran. Continuem la conversa amb el vostre mitjà preferit de la vostra elecció:[discord](https://discord.gg/uJ9HZTUk2Y),[Twitter](https://twitter.com/CairoLang),[correu electrònic](mailto:info@starkware.co), i aviat usant el formulari de comunicació més descentralitzat: f2f.

¹ No som fans del terme ZK-Rollup, ja que, matemàticament parlant, no és coneixement zero, però tots sabeu què volem dir

² A diferència de l'estat separat que es manté per als desplegaments actuals de StarkEx a Mainnet

Actualització **(novembre de 2021):**StarkNet Alpha està en directe a Ethereum Mainnet