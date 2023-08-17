### TL;DR

StarkNet Alpha 1 té dues funcions noves:

* Interacció L1<>L2
* Dades en cadena

### Introducció

A principis d'any, vam anunciar que StarkWare està construint[StarkNet](https://starkware.co/product/starknet/), un ZK-Rollup¹ descentralitzat sense permís basat en STARK que funciona com a xarxa L2 sobre Ethereum. StarkNet permet que qualsevol dApp assoleixi una escala il·limitada per al seu càlcul, sense comprometre la composició i la seguretat d'Ethereum.

El mes passat,[StarkNet Alpha 0](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)es va llançar al món. Per primera vegada, els desenvolupadors poden[escriure](https://kobi.one/2021/07/14/stardrop.html)qualsevol contracte intel·ligent i desplegar-lo, sense permís, a un ZK-Rollup. Els usuaris poden enviar transaccions a la xarxa, a l'estil Ethereum.

Avui estrenem una nova versió; Alfa 1. Estem llançant funcions de manera continuada per permetre als desenvolupadors interactuar amb funcions noves tan aviat com sigui possible. Preveiem que això endurirà el cicle de comentaris i permetrà que els comentaris de la comunitat millorin ràpidament StarkNet.

### **Característiques Alpha 1**

#### L1<>L2 Interacció

Alpha 1 inclou un protocol de missatgeria L1<>L2, que permet als desenvolupadors implementar fluxos de transaccions sense problemes entre L1 i L2. Els desenvolupadors ara poden enviar missatges des dels contractes de la L1 fins als contractes de la L2 i viceversa.

Una de les belleses de ZK-Rollups és que les actualitzacions d'estat són definitives, sense cap demora. Això significa que els missatges enviats de L2 a L1 es poden reenviar immediatament al seu contracte de destinació. Això obre el camí per crear aplicacions que siguin realment interoperables entre les capes.

T'interessa provar-ho? La millor manera de començar és seguir el tutorial[aquí](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html).

El nostre protocol L1<>L2 deu molt a altres L2 (específicament Optimisme i Arbitrum) el treball previ dels quals en aquesta àrea va influir en el nostre disseny.

#### Disponibilitat de dades en cadena

L'actualització de l'estat de StarkNet ara també es publica com a dades de la cadena a Ethereum. Això permet a qualsevol usuari construir completament l'estat de StarkNet a partir de dades L1. Cada actualització d'estat inclou la diferència d'estat, és a dir, quin emmagatzematge s'ha canviat i el seu nou valor.

Aquí també, ZK-Rollup mostra la seva força. A diferència dels Optimistic Rollups, en què les dades completes de les transaccions s'han d'enviar a la cadena, a ZK-Rollups només s'envien a la cadena les dades mínimes necessàries per derivar la diferència d'estat.

Penseu en un bon exemple, els oracles de preus. Una transacció per actualitzar un oracle de preus normalment conté diverses transaccions, però només actualitza una cel·la d'emmagatzematge; preu de la parella. Les dades a la cadena necessàries per a una actualització d'estat que conté transaccions d'oracle de preus en un Optimistic Rollup creixen linealment amb el nombre d'actualitzacions, mentre que en un ZK-Rollup, sempre serà una única actualització d'emmagatzematge.

A més, es poden aplicar algorismes de compressió a les dades publicades, i la seva validesa serà certificada per la prova STARK, reduint encara més la petjada a la cadena. Les futures versions de StarkNet introduiran optimitzacions innovadores en aquesta àrea.

#### StarkNet OS

També estem llançant el codi del sistema operatiu StarkNet. El sistema operatiu StarkNet és el programa del Caire que executa StarkNet. El sistema operatiu gestiona tot el que es fa a la xarxa: desplegament de contractes, execució de transaccions, missatges L1<>L2 i molt més. L'arquitectura i el disseny del sistema operatiu StarkNet s'explicaran amb detall en una publicació independent.

#### Característiques addicionals

StarkNet Alpha no només ha evolucionat, sinó que també estem millorant constantment El Caire. Per obtenir una descripció completa de les noves funcions de Cairo v0.3.0, consulteu les notes de la versió[aquí](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.3.0).

### L'ecosistema està creixent

A part del treball constant a StarkNet Core, el treball de l'ecosistema a StarkNet s'està expandint contínuament. Estem encantats de col·laborar amb alguns dels equips més talentosos de l'ecosistema.

Fermion, el primer esforç de Full Node de StarkNet, està desenvolupat per l'equip Erigon (anteriorment TurboGeth). A partir dels seus enormes coneixements adquirits treballant amb Ethereum, podem treballar amb ells per construir un node complet potent, que incorpora moltes lliçons apreses mentre es construeix per a Ethereum, alhora que ens beneficiem de l'escala que ofereixen les proves STARK.

Nethermind està treballant en Warp, un compilador d'EVM al Caire. Lligats a la nostra cultura de presentar noves eines només un cop estiguin a punt, tot el que podem dir és que esperem notícies interessants en aquest sentit molt aviat! Podem dir, però, que es mouen a velocitat de deformació.

### El que depara el futur

La següent parada del nostre camí cap a StarkNet serà la composició, permetent que els contractes interactuïn entre ells. Estigueu atents.

[StarkWare](https://starkware.co/)

1 Com hem dit anteriorment, ZK-Rollup és ara un terme d'ús comú, però molt enganyós: aquestes solucions no ofereixen (actualment) coneixement zero.

Actualització **(novembre de 2021):**StarkNet Alpha està en directe a Ethereum Mainnet