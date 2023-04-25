### TL;DR

* Estem compartint un pla detallat per a Regenesis, que s'ha modelat per àmplies discussions amb la comunitat StarkNet. Un agraïment especial a Kuba@SWM.
* Regenesis seguirà el llançament de Cairo 1.0, fent que el sistema sigui més segur permetent contractes StarkNet més senzills i segurs.
* Els usuaris haurien d'estar preparats per actualitzar la seva cartera durant la fase de transició
* Els desenvolupadors hauran de portar els seus contractes a Cairo 1.0

### Introducció

StarkNet Alpha avança cap a Regenesis, un pas important cap a la producció. En aquesta actualització volem compartir més detalls sobre la principal motivació de Regenesis —[Cairo 1.0](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)— i començar a explicar què requerirà dels usuaris i desenvolupadors. Després de Regenesis, StarkNet funcionarà només amb contractes basats en Cairo 1.0 i començarà a partir d'un nou bloc de gènesi amb l'estat existent.

Què requerirà Regenesis dels usuaris? Una senzilla actualització de la seva cartera. Què requerirà dels creadors dels dapps de StarkNet? Portant els seus contractes a Cairo 1.0 i seguint una senzilla pauta d'actualització. Concretament, no hi haurà cap reinici des d'un estat net i ens quedarem amb la mateixa instància de StarkNet, el que significa que no caldrà una migració**.**

El pla de Regenesis és preservar completament l'estat de les aplicacions i no incórrer en temps d'inactivitat de les aplicacions. Així, les aplicacions que segueixin les directrius que us proporcionarem es podran llançar a StarkNet Alpha Mainnet immediatament sense cap pertorbació al seu funcionament i als seus usuaris durant el procés de Regènesi. Ens comprometem a treballar amb la comunitat i oferir tot el suport necessari. perquè aquest procés sigui el més fluid possible.

Estem prenent aquesta direcció com a resultat d'àmplies discussions amb la comunitat, que incloïa un important suggeriment de l'equip de Software Mansion.

### Per què Regenesis?

#### El Caire 1.0 i Sierra

La principal motivació de Regenesis és aprofitar les noves possibilitats que ofereix Cairo 1.0, és a dir, seqüenciadors, protecció DOS, resistència a la censura i mesura de gas, que són essencials per a StarkNet com a xarxa descentralitzada.

El Caire 1.0 garantirà que cada transacció es pugui provar. Això permetrà a StarkNet incloure transaccions revertides en blocs i generar una prova de la seva execució. Aquest mecanisme permetrà pagar als seqüenciadors per l'execució de transaccions revertides, augmentant la protecció de DOS contra actors maliciosos. A més, Cairo 1.0 admetrà la mesura de gas, que permetrà a StarkNet fer la transició a un mercat de tarifes més intuïtiu. Finalment, això permetrà que StarkNet introdueixi transaccions forçades des de la L1 i millorarà les capacitats de resistència a la censura de la xarxa.

Per obtenir aquests avantatges, els contractes Cairo v0 i Cairo 1.0 no es poden combinar. No es pot demostrar que les declaracions incorrectes siguin incorrectes, ni el seguiment del gas, si tenim fragments de contractes de Cairo v0. Amb aquesta finalitat, haurem d'eliminar completament el codi Cairo v0 de l'estat de StarkNet, per tant, Regenesis.

**Després de Regenesis, tindrem un sistema Starknet totalment basat en Cairo 1.0.**

#### Simplificació del codi i protocol

StarkNet, mentre encara era a Alpha, ja va patir molts canvis. Totes les versions fins ara van alterar l'estructura del sistema operatiu StarkNet, els blocs i les transaccions. Això va fer que part del codi quedés obsolet. Tanmateix, els nodes complets i els proveïdors d'infraestructura (com ara els indexadors i els exploradors d'estats) han de ser conscients i implementar tots els comportaments passats de les versions StarkNet Alpha per sincronitzar-se amb l'estat sense confiança. Sense Regènesi, aquesta càrrega podria ser un element dissuasiu important per als desenvolupadors que es plantegin construir aquests serveis per a StarkNet.

Per tant, abans de passar a la producció, i com a preparació per a un món descentralitzat amb moltes implementacions d'eines d'infraestructura, pretenem reduir la complexitat del protocol. Ho aconseguiríem no requerint una infraestructura futura per executar cap codi StarkNet 0.x i marcar el primer bloc després del període de transició com a punt de gènesi.

### Wen Regenesis? La cronologia global

Regenesis seguirà el llançament de Cairo 1.0, que està previst que tingui lloc a finals de 2022. Durant el primer trimestre del 2023, StarkNet s'actualitzarà per donar suport a Cairo 1.0 i el nostre objectiu és migrar a una xarxa totalment basada en el Caire 1.0 a finals del primer trimestre.

**Els usuaris i les aplicacions hauran de fer la transició durant aquest període.**

![](/assets/1_ef85shzd2uudwex-cy8wdg-1.png)

### Aleshores, què he de saber?

Els desenvolupadors d'aplicacions han de ser conscients dels aspectes següents al voltant de Regenesis:

1. Assegureu-vos que el vostre contracte estigui preparat per a l'actualització. Els aspectes tècnics complets del pla es comparteixen al[Fòrum de la comunitat StarkNet](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080). Un cop finalitzin els detalls, compartirem una guia concisa.
2. Assegureu-vos que esteu preparat per portar el vostre codi a Cairo 1.0. Vegeu la següent secció per veure tots els detalls més recents.

#### Portar el vostre contracte al Caire 1.0

Cairo 1.0 és una gran promesa per als desenvolupadors de StarkNet. Una millora del Cairo existent que serà més segura, millor i més fàcil per escriure contractes, amb una sintaxi millorada, un sistema de lletres complets (algú uint256 natiu?) i molt més. Els desenvolupadors hauran de portar els seus contractes StarkNet existents a la sintaxi de Cairo 1.0. Tanmateix, com que la lògica i l'estructura del codi es mantindran iguals, s'espera que aquest esforç sigui insignificant en comparació amb l'esforç que va suposar desenvolupar l'aplicació en primer lloc.

En aquest context, val la pena tenir en compte que podeu optar per tornar a auditar la versió Cairo 1.0 de la vostra aplicació. Si la vostra aplicació ja es va auditar en el passat, el procés de reauditoria serà molt més barat i senzill, ja que els auditors ja estan familiaritzats amb la vostra lògica.

Llançarem tota la documentació sobre Cairo 1.0, juntament amb tutorials i tallers durant el quart trimestre de 2022.

### Sóc un usuari de StarkNet. Que hauria de fer?

Com a usuari, probablement haureu de fer algunes accions durant la Regènesi. Com a mínim, haureu d'actualitzar el contracte del vostre compte. Si no ho feu durant el període de transició (d'uns quants mesos), es perdrà el vostre compte. Depenent de la ruta d'actualització escollida pels desenvolupadors de les aplicacions StarkNet que utilitzeu, és possible que hàgiu de fer passos addicionals.

Recordem a tothom que StarkNet encara es troba en fase alfa i que els usuaris estan obligats a estar atents a les comunicacions de StarkNet i a les aplicacions que utilitzen. És la vostra responsabilitat assegurar-vos d'actualitzar aviat al nou sistema. *Ser un early adopter no sempre és fàcil, i comptem amb tu per fer la teva part!*

### Concloure

Cairo 1.0 és a la volta de la cantonada, oferint molts avantatges i millores interessants per a StarkNet i els seus desenvolupadors. Per recollir-los, cal un esdeveniment de Regenesis de la xarxa. Afortunadament, tenim un disseny en ment que fa que aquest procés sigui mínimament disruptiu, completament perfecte per als usuaris i bastant senzill per a les aplicacions.

Us animem a participar en la discussió de la comunitat[](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080)i compartir els vostres comentaris i preocupacions, així com estar al dia sobre els passos que haureu de seguir com a desenvolupador d'aplicacions a StarkNet.