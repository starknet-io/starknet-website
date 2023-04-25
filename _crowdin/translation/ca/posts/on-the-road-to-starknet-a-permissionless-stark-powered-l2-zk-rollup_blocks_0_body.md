#### **TL;DR**

Estem construint StarkNet en quatre passos:

* Pas 0 — Fonaments (completat*)
* Pas I — Planetes: paquets acumulatius d'una sola aplicació
* Pas II — Constel·lacions: paquets acumulats de múltiples aplicacions
* Pas III — Univers: un conjunt descentralitzat

Esperem tenir el pas I desplegat en pocs mesos i estar en bon camí cap als passos II & III a finals del 2021.

### **Introducció**

StarkWare està construint StarkNet, un L2 ZK-Rollup descentralitzat, sense permís i resistent a la censura que admet la computació general a través d'Ethereum. Es basa en l'idioma Turing-complet[Cairo](https://www.cairo-lang.org/).

Els desenvolupadors, els usuaris i els nodes de StarkNet podran fer tot el que es podria esperar d'un paquet L2 sense permís: els desenvolupadors poden crear aplicacions que implementin la seva pròpia lògica de negoci i desplegar-les a StarkNet. Els usuaris poden enviar transaccions a StarkNet per executar-les, igual que interactuen amb Ethereum avui. Els nodes i participants de StarkNet seran incentivats econòmicament per garantir que la xarxa funcioni de manera eficient i justa.

Totes les transaccions de StarkNet es agruparan periòdicament i la seva validesa es comprovarà en una prova STARK, que es verificarà a Ethereum. Com que l'esforç computacional necessari per verificar les proves STARK és exponencialment petit en comparació amb el càlcul provat, StarkNet escalarà Ethereum per ordres de magnitud.

Com que totes les transicions d'estat de StarkNet estaran provades per STARK, només s'acceptaran les vàlides a Ethereum. Totes les dades necessàries per reconstruir l'estat complet de StarkNet es publicaran a la cadena. Qualsevol persona podrà executar el seu propi node StarkNet. Aquestes propietats faran que StarkNet sigui tan segur i sense permís com Ethereum.

Hi portem tres anys i ja hem assolit algunes fites notables en convertir "Moon Math" en un programari eficient i de qualitat que s'executa a Ethereum. La forma en què StarkWare fa les coses és abordar primer els problemes difícils, construir la tecnologia bàsica i després llançar-la a la producció de manera fragmentària. Continuarem construint d'aquesta manera a mesura que finalitzem StarkNet.

![](/assets/ontheroad_02.png)

**Pas 0 — Fonaments**

StarkWare ha acabat d'establir algunes bases importants per a StarkNet.

#### **El Caire**

[Cairo](https://twitter.com/StarkWareLtd/status/1300353049836376066?s=20)és el nostre marc Turing-Complete High Level Language & per produir proves STARK per a càlcul general. En lloc d'elaborar manualment "circuits" complexos o AIR, un desenvolupador d'aplicacions pot utilitzar El Caire per definir qualsevol lògica de negoci, provar-la fora de la cadena i verificada a la cadena. Cairo és[en producció a Mainnet](https://twitter.com/StarkWareLtd/status/1320695603492507648?s=20), i[està disponible per als desenvolupadors](http://cairo-lang.org/).

D'aquí a un parell de setmanes llançarem a una xarxa de proves pública Ethereum una versió alfa del servei de prova genèrica (GPS) del Caire. *Això permetrà als desenvolupadors crear les seves pròpies aplicacions amb Cairo, implementant qualsevol lògica de negoci que vulguin. Enviaran el seu codi del Caire al GPS perquè es comprovi i després es verifiqui en cadena.*

El GPS permet una única prova per afirmar la integritat de l'execució d'aplicacions totalment separades i independents, donant així a aquestes aplicacions la possibilitat d'amortitzar la despesa de gas de verificació de proves entre elles.

El Caire i el GPS són la base de StarkNet: la nostra decisió d'exterioritzar tots dos als desenvolupadors els proporciona una exposició primerenca a aquesta tecnologia, no només perquè puguin començar a construir-hi, sinó també perquè puguin influir en l'evolució de StarkNet.

Continuarem desenvolupant Cairo en funció de les necessitats i els comentaris de la comunitat de desenvolupadors. Millorarem aquest llenguatge amb noves característiques, sintaxis i integracions que millorin la seva usabilitat, i continuarem desenvolupant i millorant les eines de Cairo: compiladors, traçador/depurador i integracions a IDE comuns.

StarkNet tindrà el Caire corrent sota el capó.

#### **La pila de programari STARK**

StarkWare ha desenvolupat el sistema de prova més potent de l'ecosistema i fa mesos[està en directe a Mainnet](https://medium.com/starkware/starks-over-mainnet-b83e63db04c0). StarkWare també ha desenvolupat[ethSTARK](https://twitter.com/StarkWareLtd/status/1264911004099543040?s=20), el nostre provador de codi obert, que és 20 vegades més ràpid que qualsevol altre provador; ofereix[signatures de coneixement zero i postquàntics segures](https://twitter.com/StarkWareLabs/status/1331930111227080709).

Les nostres mesures d'escala**, no extrapolacions, ni promeses, inclouen el processament de 300.000 transaccions en una única prova a Mainnet, aconseguint[el rècord mundial de rendiment de Rollup: 3K tps](https://twitter.com/StarkWareLtd/status/1287770381525422082?s=20). En el procés, hem aconseguit el rècord mundial d'eficiència de gas Rollup: 315 gas/tx, ordres de magnitud més barats que les transaccions a Ethereum L1.

Aquesta tecnologia serà la pedra angular de la capa de prova descentralitzada de StarkNet i, per tant, llançarem proves addicionals i millorades com a part del desenvolupament de StarkNet (més informació sobre això en una propera entrada al bloc).

#### **StarkEx**

StarkEx és el nostre motor d'escalabilitat L2. Ha estat donant servei a[clients de DeversiFi](https://twitter.com/deversifi)a Mainnet des del juny de 2020. Potenciarà tant[dYdX](https://twitter.com/dydxprotocol)com[ImmutableX](https://twitter.com/Immutable)a partir d'unes poques setmanes. StarkEx pot gestionar lògiques comercials complexes (comercialització puntual, derivats, NFT) així com pagaments.

Desenvolupar StarkEx va ser la nostra manera de provar la nostra cadena d'eines i provar-la amb les necessitats del món real. No hi ha res com les demandes de les aplicacions reals i dels usuaris en directe per ajudar les eines a madurar i evolucionar. També ens ajuda a entendre quins elements s'han d'abordar per servir millor l'ecosistema, per exemple, integracions amb carteres i exploradors de blocs.

StarkEx és un exemple en viu de la capacitat d'escalar aplicacions mitjançant un ZK-Rollup basat en STARK i és la primera aplicació en producció a Mainnet escrita al Caire. Com a tal, també serà una de les aplicacions que s'executen a StarkNet.

![](/assets/ontheroad_03.png)

### **El camí per endavant**

#### **Pas I — Planetes: paquets acumulatius d'una sola aplicació**

Aquest pas permetrà als desenvolupadors crear i desplegar les seves pròpies aplicacions escalables a StarkNet.

En aquest punt, cada instància de StarkNet podrà executar una única aplicació. Diferents instàncies poden executar aplicacions diferents.\
El marc de StarkNet inclourà el següent:

* Mecanismes necessaris per generar proves STARK per a la lògica arbitrària del Caire, i després enviar-les i verificar-les a Ethereum.
* Interaccions amb L1 Ethereum: dipòsits i retirades de fitxes L1, publicació de dades en cadena, mecanismes d'escapament que protegeixen els usuaris de StarkNet d'operadors maliciosos de StarkNet, etc.
* Gestió dels saldos d'usuari L2, i de l'emmagatzematge i memòria de l'aplicació.

Els desenvolupadors podran centrar-se únicament a crear la lògica empresarial de la seva aplicació i després passar a la producció: desplegar-la i executar-la a escala a StarkNet.

El que ens permet construir un ZK-Rollup escalable de càlcul general és la combinació de:

* Cairo, que és un llenguatge de programació complet de Turing de propòsit general
* La nostra forta pila STARK (provador i verificador), que permet agrupar càlculs enormes en una única prova

#### **Pas II — Constel·lacions: paquets acumulats de múltiples aplicacions**

El següent pas admetrà diverses aplicacions que s'executen a la mateixa instància de StarkNet i accedeixen al mateix estat L2 global. Això permetrà la interoperabilitat entre diferents aplicacions, així com una reducció del cost del gas gràcies a les economies d'escala millorades.

El Caire, la poderosa pila STARK i el GPS amplifiquen l'avantatge competitiu de StarkNet per donar suport a un Rollup multi-aplicació.

En aquesta etapa, StarkNet serà un marc completament funcional per executar*aplicacions múltiples*amb qualsevol lògica empresarial arbitrària a sobre d'Ethereum, amb cada instància executada per un únic operador.

Ara un operador pot fer girar un node StarkNet i els desenvolupadors d'aplicacions poden desplegar-hi els seus contractes. Des de la perspectiva dels usuaris, StarkNet ara sembla i se sent com Ethereum, amb una escala més alta.

#### **Pas III — Univers: Rollup descentralitzat**

L'últim pas en l'evolució de StarkNet és la descentralització del seu funcionament.

Les qüestions d'R&D intrigants que ara estem abordant que afecten aquesta etapa inclouen (i) utilitzar ZK-Rollups per millorar els mecanismes d'assoliment de consens i (ii) dissenyar mecanismes criptoeconòmics per incentivar els col·laboradors i operadors descentralitzats de StarkNet (seqüenciadors de transaccions, provadors, etc.) per funcionar de manera eficient, justa i segura.

### **Conclusió**

StarkWare està construint StarkNet, un L2 ZK-Rollup descentralitzat sense permís alimentat per STARK sobre Ethereum, que admet la computació general basada en l'idioma del Caire.

StarkNet permetrà que les aplicacions s'escalin sense comprometre la seguretat, que els usuaris paguin tarifes de transacció raonables i que tot l'ecosistema creixi substancialment i compleixi la seva promesa.

Convidem amb molt de gust la comunitat de desenvolupadors a[unir-se a nosaltres](https://twitter.com/StarkWareLtd)en aquest viatge.

Actualització **(novembre de 2021):**StarkNet Alpha està en directe a Ethereum Mainnet