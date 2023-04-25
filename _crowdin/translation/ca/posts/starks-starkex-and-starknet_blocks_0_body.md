### TL;DR

* Els STARK permeten l'escala de la cadena de blocs demostrant de manera eficient la integritat dels càlculs
* StarkEx és un motor d'escalat específic de l'aplicació
* StarkNet és una xarxa de Capa 2 de contracte intel·ligent sense permís

### **STARK**

Els STARK (Scalable, Transparent ARgument of Knowledge) són un sistema de prova que permet la prova i verificació de càlculs. Permet processar un gran càlcul, generar una demostració de la correcció del càlcul, i després verificar la prova en molt pocs passos.

Els STARK poden tenir un paper clau en l'escalabilitat de la cadena de blocs, ja que permeten que es facin grans càlculs fora de la cadena, on és més barat, deixant només la verificació, que requereix una fracció del càlcul, que es faci a la cadena. En altres paraules, fent molt pocs passos a la cadena, el verificador afirma la integritat d'un càlcul molt més gran que es va fer fora de la cadena.

Amb STARK, les solucions de la capa 2 s'agrupen i calculen milers de transaccions i, a continuació, verifiquen la seva validesa a la cadena amb una única prova STARK. El cost del procés en cadena es divideix entre**les**transaccions del lot. Això es tradueix en seguretat Ethereum i baix cost de gas per transacció.

El baix cost computacional donarà lloc a una nova classe d'aplicacions que abans no eren factibles en cadena. Aquestes propietats converteixen els STARK en un excel·lent bloc de construcció per millorar l'experiència de l'usuari i reduir els costos del gas, tot mantenint la seguretat de la capa de liquidació d'Ethereum.

StarkWare ofereix dues solucions per escalar Ethereum amb STARK: StarkEx i StarkNet.

### **StarkEx**

[StarkEx](https://starkware.co/starkex/)és un marc per crear solucions d'escalat específiques de l'aplicació amb permís. StarkEx és una caixa d'eines de[fluxos d'aplicacions](https://docs.starkware.co/starkex-v4/starkex-deep-dive/regular-flows)útils que els projectes poden utilitzar per aconseguir càlculs barats fora de la cadena. Una prova STARK, que certifica la correcció de l'execució, es genera fora de la cadena. Aquesta prova pot incloure fins a 12.000-500.000 transaccions (segons el tipus de transacció). A continuació, la prova s'envia al verificador STARK per ser acceptada a la cadena. Això significa una verificació per a totes les transaccions, per a un cost de gas amortitzat increïblement baix per transacció.

Alguns exemples de les aplicacions desplegades a StarkEx són dYdX (comercialització perpètua), Immutable i Sorare (NFTs: encunyació i comerç), DeversiFi (comercialització puntual) i Celer (DeFi Pooling).

StarkWare està afegint contínuament més fluxos d'aplicacions a StarkEx, seguint el mercat i les necessitats dels seus clients.

### **StarkNet**

*[StarkNet](https://starkware.co/starknet/)és una xarxa de capa 2 sense permís on qualsevol usuari o desenvolupador pot desplegar contractes intel·ligents desenvolupats en l'idioma del Caire.*

Comparable a l'experiència de contracte intel·ligent d'Ethereum, dins de l'ecosistema StarkNet, el vostre contracte pot interactuar amb qualsevol altre contracte desplegat a StarkNet, permetent protocols ricament componibles. Els contractes de StarkNet també poden interactuar amb els contractes d'Ethereum mitjançant el pas de missatges asíncrons.

A diferència de StarkEx, on les aplicacions s'encarreguen d'enviar les transaccions, els seqüenciadors de StarkNet agrupan les transaccions i les envien perquè es processin i demostrin. (Els seqüenciadors de StarkNet són actualment operats per StarkWare amb plans futurs de descentralització). Això vol dir que una vegada que les aplicacions despleguen els seus contractes al Caire, no s'han de preocupar d'executar una infraestructura addicional de l'operador. StarkNet admet el mode de disponibilitat de dades de l'acumulació, és a dir, l'estat de la acumulació s'escriu a Ethereum juntament amb les proves STARK.

Una gran comunitat de desenvolupadors està profundament compromesa amb l'ecosistema StarkNet, creant aplicacions, eines i infraestructura. Desenes d'aplicacions ja estan en directe a testnet: DeFi, jocs, votació, IA i molt més. A més, la comunitat StarkNet està creant eines de desenvolupament com ara l'explorador de blocs, l'entorn i el marc de proves locals, els SDK en diversos idiomes i més. A més, hi ha debats actius a la plataforma[Shamans](https://community.starknet.io/), amb suggeriments de millores, funcions potencials i bones pràctiques.

### **Per resumir-ho**

Tant[StarkEx](https://youtu.be/P-qoPVoneQA)com StarkNet són solucions d'escalat basades en STARK. Tots dos proporcionen escalabilitat, baixos costos de gas i seguretat, però tenen diferents requisits operatius i patrons d'interoperabilitat. StarkEx podria ser la solució adequada per a una aplicació que en gran part és autònoma i s'adapta a les API que ofereix StarkEx. StarkNet podria ser més adequat per a un protocol que requereixi interactuar de manera sincrònica amb altres protocols o que tingui necessitats que van més enllà del que ofereix StarkEx.

Els STARK han revolucionat com es poden crear aplicacions a Ethereum. StarkEx i StarkNet continuaran habilitant aplicacions que abans eren inviables i superar els límits del que és possible a la cadena de blocs.

Aquest article va ser escrit en col·laboració per[Tim Gestson](https://twitter.com/IcemanTim)i l'equip de[StarkWare](https://starkware.co/)