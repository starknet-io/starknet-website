### TL;DR

* Alpha està en directe a Mainnet
* Admet el càlcul general i la composició
* Comunitat en creixement ràpid, desenvolupament d'eines i aplicacions
* Funcions addicionals que es desplegaran de manera continuada en les properes setmanes
* Exempció de responsabilitat: aquesta és una versió alfa (llegiu la lletra petita a continuació)

### Introducció

StarkNet Alpha es llança avui a Ethereum Mainnet!

StarkNet és un Rollup descentralitzat sense permís que funciona com a xarxa L2 sobre Ethereum. StarkNet permet que qualsevol dApp assoleixi una escala il·limitada per al seu càlcul, sense comprometre la composició i la seguretat d'Ethereum, gràcies a la seva confiança en el sistema de prova criptogràfica més segur i escalable:[STARK](https://starkware.co/stark/). StarkNet es basa en el llenguatge de programació[Cairo](https://starkware.co/cairo/), el primer verificador von-Neumann complet de Turing de producció a Ethereum. Tant Cairo com STARK van ser desenvolupats internament per StarkWare i han alimentat totes les nostres aplicacions de producció, que s'han liquidat més de 50 milions de txs i 250 milions de dòlars des de l'estiu del 2020.

Entre altres funcions, StarkNet Alpha permet contractes intel·ligents de càlcul general que admeten la composició, tant amb altres contractes StarkNet com mitjançant missatgeria L1<>L2 amb contractes L1. StarkNet Alpha funciona en un mode de acumulació, és a dir, totes les dades de diferència d'estat s'envien a la cadena.

Al gener, vam compartir el full de ruta de StarkNet[](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880). Al juny, StarkNet Alpha es va posar en funcionament en una xarxa de proves pública i s'ha actualitzat amb noves funcions de manera continuada. Estem encantats d'avançar-nos a l'horari previst, gràcies, en part, a la nostra confiança en la nostra pila de programari STARK/Cairo, endurida per la batalla, de qualitat de producció.

### Com hauríeu de tractar StarkNet Alpha?

Primer, amb molta cura, ja que l'etiqueta "Alpha" hi és per una raó. Espereu que vinguin canvis, correccions i millores. StarkNet Alpha encara no s'ha auditat, i és possible que endarrerim aquesta auditoria fins que la xarxa maduri una mica més (llegiu l'exempció de responsabilitat al final d'aquesta publicació per obtenir més informació).

En general, seguim el camí prudent i assenyat definit pels nostres companys d'Optimistic Rollup, és a dir, Arbitrum i Optimism: llançar la xarxa amb un únic seqüenciador i incloure aplicacions a la llista blanca per assegurar-se que els seus desenvolupadors entenguin els riscos implicats. Continuem totalment compromesos amb una descentralització completa de StarkNet.

I com hauríeu de tractar l'economia de StarkNet Alpha? L'Alfa començarà sense comissions de transacció. La propera actualització, a només unes setmanes, introduirà un mecanisme de comissions; compartirem més detalls en una publicació independent.

### Comença a construir

Et convidem a començar a escriure les teves pròpies aplicacions a StarkNet marcant el (nou!) [lloc web](http://starknet.io/), o saltant directament al tutorial[](https://starknet.io/docs/).

Si esteu preparat per desplegar-vos, seguiu aquest[procés d'incorporació](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu); creat per garantir que tots els desenvolupadors coneguin bé l'estat preliminar del sistema.

### Ecosistema

Durant els últims dos mesos, hem vist un creixement sorprenent en la mida i l'activitat de la comunitat StarkNet, que es reuneix a la[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y). Desenes de desenvolupadors (equips i individus) de l'ecosistema blockchain contribueixen a aquest esforç. (Vegeu l'exempció de responsabilitat al final d'aquesta publicació)

#### Eines per a desenvolupadors

* OpenZeppelin està definint els contractes estàndard. Val la pena seguir els seus[repo](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)i[discussions](https://github.com/OpenZeppelin/cairo-contracts/discussions)
* El transpilador[Warp](https://github.com/NethermindEth/warp)Solidity–>Cairo, desenvolupat per Nethermind
* Els connectors[HardHat](https://github.com/Shard-Labs/starknet-hardhat-plugin)i[StarkNet Devnet](https://github.com/Shard-Labs/starknet-devnet)de Shard Labs
* Argent està desenvolupant eines, inclòs el seu esforç conjunt a StarkNet.js, juntament amb[Sean Han](https://twitter.com/seanjameshan), el seu creador

#### Infraestructura

**Explorador de blocs**:

* [El projecte Voyager](http://voyager.online/)de Nethermind
* [Eth.tx](https://ethtx.info/)oferirà anàlisi de suport i una visió detallada de les transaccions de StarkNet

**Nodes complets**: dos esforços en marxa: un és el projecte Fermion liderat per Erigon, l'altre és el projecte[Pathfinder](https://github.com/eqlabs/pathfinder), liderat per Equilibrium

**Carteres**:

* [ArgentX](https://github.com/argentlabs/argent-x)és una extensió del navegador desenvolupada per Argent, que ja està disponible per als desenvolupadors
* La solució de gestió de claus Torus està preparada per StarkNet
* Ledger està desenvolupant una aplicació nativa StarkNet; estar disponible abans de finals d'any

**Auditories del Caire**: ConsenSys Diligence, Trail of Bits, Peckshield i ABDK ja estan realitzant auditories del Caire o estan a punt de començar aviat

**Serveis API**: després que un node complet de StarkNet estigui disponible, Figment, Chainstack i Infura oferiran els serveis d'API

**Indexador**: treballarem per integrar TheGraph per treballar amb StarkNet, juntament amb l'equip de Figment

### El camí per endavant

En les properes setmanes i mesos, actualitzarem l'Alfa amb les següents capacitats:

* Mecanisme d'actualització del contracte
* Mecanisme de tarifes
* Esdeveniments
* Addició de les trucades de sistema que falten (get_block_number, get_block_timestamp i més)
* Versió esquelètica de Volition
* I molt més …

Per controlar aquest esforç de manera continuada, consulteu el full de ruta provisional de les característiques[](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51).

Mirant més enllà, continuem invertint molt en investigació activa en múltiples fronts (uneix-te a l'esforç[Shamans](https://community.starknet.io/)):

* Descentralització
* Escalat
* Disponibilitat de dades
* Incentius sense permís

### Crida a l'acció

* Comenceu a escriure contractes a la xarxa de proves StarkNet sense permís a Goerli
* Uneix-te a[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)
* Uneix-te a les trucades de la comunitat
* Assistiu a la primera[StarkNet Ecosystem Summit](https://www.eventbrite.com/e/starknet-ecosystem-summit-2022-tickets-206671880157)(del 27 al 28 de gener de 2022, Stanford CA)
* Uneix-te a[StarkNet Shamans](https://community.starknet.io/)per aprofundir en els reptes de recerca

### Exempció de responsabilitat

***StarkNet Alpha és un sistema nou i complex que no ha estat completament auditat. Com tots els sistemes de programari complexos, el sistema StarkNet pot contenir errors que, en casos extrems, podrien provocar la pèrdua de tots els vostres fons. Per tant,***trepitgeu amb compte i aneu amb compte!******

*L'ecosistema StarkNet és un conjunt gran i de ràpid creixement d'equips i individus independents, sobre els quals StarkWare no té cap supervisió i no assumeix cap responsabilitat. Qualsevol dels projectes desenvolupats pels membres de l'ecosistema pot contenir errors que, en casos extrems, poden provocar la pèrdua de tots els vostres fons. A més, a mesura que es despleguen més contractes intel·ligents, augmenta el potencial d'errors nocius no desitjats i fins i tot d'estafes malicioses i tirades de catifes. Per tant, tracteu tots els contractes intel·ligents a StarkNet com els contractes intel·ligents a Ethereum i utilitzeu només aquells en què tingueu bones raons per confiar com a segurs.*