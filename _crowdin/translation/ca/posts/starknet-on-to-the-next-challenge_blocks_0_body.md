### TL;DR

* Estem construint StarkNet per passos, començant per establir**usabilitat**, després millorant**rendiment**, i finalment, passant a**descentralització**
* Hem assolit el nostre primer objectiu: la usabilitat. Això vol dir que vam oferir un càlcul general en un estat semblant a Ethereum (anys abans que es cregués possible)
* Ara passem a l'etapa 2 del nostre pla de construcció de 3 parts: rendiment, centrat en el rendiment, el cost de transacció i la latència.
* Següent: descentralització

Només un any després que es van anunciar per primera vegada els plans per a[StarkNet](https://starknet.io/), la plataforma té una funcionalitat molt bona. La comunitat de desenvolupadors està creixent més enllà de les nostres expectatives més salvatges i ofereix una ràfega constant de nous projectes natius L2.

La nostra prioritat durant l'últim any va ser habilitar exactament això, creant una StarkNet que funcioni amb una gamma de funcions que s'expandeix ràpidament, que permeti als desenvolupadors submergir-se directament.

Ho han fet en gran nombre. Un bon baròmetre és el recompte de descàrregues de la biblioteca de JavaScript[per a StarkNet](https://www.starknetjs.com/): ja a 5k des que va estar disponible fa 4 mesos.

Tot i que StarkNet ofereix la màgia de compressió que vam prometre, de moment, està lluny de poder-ho fer amb prou dApps amb prou rendiment, i això pot resultar una font de frustració per als desenvolupadors a curt termini.

La nostra tecnologia bàsica provada a la batalla, que demostra STARK moltes transaccions i comprimeix les proves, ha d'anar precedida per lots o seqüenciació de transaccions. És un procés que l'equip de StarkWare ja ha perfeccionat una vegada per al motor d'escalat[StarkEx](https://starkware.co/starkex/), i actualment estem treballant per tornar-ho a fer per a les necessitats de StarkNet.

Ara que s'han assolit molts dels nostres objectius d'usabilitat, estem canviant l'enfocament per fer d'aquesta la nostra màxima prioritat. Tot forma part del nostre full de ruta en 3 etapes:**usabilitat**, seguida del**rendiment de la xarxa**, i després**descentralització**. Al cap d'un any, volem donar-vos un cop d'ull sota el capó: un esquema de quines peces hi ha al seu lloc i què encara està en procés.

### La història fins ara

StarkNet Alpha es va llançar a la xarxa de proves pública al juny i a Mainnet al novembre. En el moment del desplegament de Mainnet, StarkNet ja oferia un càlcul general en un estat semblant a Ethereum, que es pensava que es trobava a anys de distància.

Al llarg del desenvolupament hem escollit un enfocament que primer es va centrar en les funcionalitats més importants i les vam llançar tan bon punt estaven disponibles, compartint bàsicament el procés d'evolució amb la comunitat. StarkNet està lluny de tenir les funcions completes, però fins i tot ara, els desenvolupadors ja poden crear aplicacions significatives i complexes. Avui dia, tenim centenars de desenvolupadors[basats en StarkNet,](https://starkware.notion.site/Projects-Building-on-StarkNet-a33dee55778a4515a9be9bdae02ee682)desenes d'Apps i més d'una dotzena d'equips externs que desenvolupen eines i infraestructures per a l'ecosistema StarkNet.

Una sèrie d'actualitzacions ha proporcionat moltes característiques importants, com ara missatgeria L1<>L2, dades en cadena i suport per a la composició, suport d'esdeveniments, mecanisme de tarifa bàsica, possibilitat d'actualització de contractes, abstracció de comptes, marc de proves, eines per a desenvolupadors, confirmació ràpida, número de bloc , marca de temps de bloqueig, suport per a contractes de compte.

La comunitat de desenvolupadors està profundament interessada en StarkNet i, de fet, està donant forma al seu desenvolupament. Ja s'han introduït funcions basades en els comentaris dels desenvolupadors. L'adopció podria superar l'augment del rendiment, per això aquest impuls és la nostra gran prioritat ara.

### Propers passos

Ara que hem arribat a la usabilitat, és hora de millorar el rendiment del sistema. El sistema, en el seu estat actual, és capaç de suportar un rendiment limitat de transaccions. La manera de resoldre-ho és millorant el rendiment del Node Seqüenciador, que és l'equivalent d'un miner de StarkNet. És la "màquina" que seqüencia les transaccions després d'enviar-les. Quan això s'optimitza, el rendiment es dispararà.

Amb aquesta finalitat, simultàniament estem analitzant on es troben els colls d'ampolla i abordant-los un per un. Actualment, tots els colls d'ampolla estan relacionats amb el procés de seqüenciació, que arriba abans que invoquem els provadors STARK. La pila de proves provada a la batalla està preparada per suportar un rendiment semblant a StarkEx a StarkNet.

Esperem que l'optimització del seqüenciador sigui un procés que duri uns mesos, amb millores graduals al llarg de l'H1/22. El nostre objectiu és assolir, a principis de la segona meitat del 2022, almenys un ordre de magnitud superior al TPS d'Ethereum, a un cost que sigui almenys dos ordres de magnitud inferior al d'Ethereum. I això és només el començament.

Hi ha una bona raó per la qual es necessita aquesta fase d'optimització i que StarkNet no es va llançar amb un seqüenciador optimitzat: StarkNet va ser capaç d'aconseguir la usabilitat tan ràpidament perquè vam tenir un avantatge. En lloc de començar des de zero i construir un seqüenciador totalment nou, vam utilitzar el batcher de StarkEx com a component central.

Aquesta va ser una gran manera de construir. No només es va lliurar ràpidament; significava que estem segurs que vam construir sobre fonaments sòlids. StarkEx va provar bàsicament la funcionalitat bàsica que impulsa StarkNet, ja que va aconseguir centenars de milers de milions de dòlars en comerç acumulat.

[StarkEx](https://starkware.co/starkex/)és el motor d'escala d'algunes de les dApps més reeixides que utilitzen L2: dYdX (contractes perpetus), DeversiFi (comerç puntual i pagaments), així com per a Immutable i Sorare (encunyació i comerç de NFT).

Però el seqüenciador creat per a ells i altres clients de StarkEx només pot portar StarkNet fins ara. Cadascun d'ells gestiona gairebé el mateix tipus de transacció cada dia. StarkNet és tot sobre**càlcul general**, de manera que les seves necessitats són obertes. Quan el seu seqüenciador pren transaccions del mempool, tenen diverses formes i mides. A més, StarkNet també és una xarxa oberta, cosa que significa que hi ha una sobrecàrrega computacional addicional que no es troba a StarkEx.

El repte actual, és a dir, optimitzar el seqüenciador per a aquestes noves necessitats, és una empresa important, però tenim una bona comprensió de la ruta necessària, sobre la base del nostre desenvolupament reeixit de StarkEx.

### Següent: descentralització

StarkNet ha de ser una xarxa totalment descentralitzada sense permís, amb mecanismes d'elecció de líders i de govern. Aconseguir-ho es convertirà en el nostre objectiu principal una vegada que el rendiment es dispari i baixi els costos, i esperem tenir una primera versió descentralitzada a finals de 2022. Preveiem compartir públicament el nostre pla de descentralització en els propers mesos.

De la mateixa manera que el rendiment limitat actual representa una fase provisional en el desenvolupament de StarkNet, el nivell actual de participació de StarkWare també és temporal. Ens veiem com una mena de bastida, que compleix una funció important durant la fase de construcció, però que es torna enrere en el seu moment.

El desenvolupament complet del node, un primer pas emocionant cap a la descentralització, ja està en marxa. Els nodes complets permetran a qualsevol persona mantenir i verificar l'estat de la xarxa localment, fent un seguiment del que està passant exactament. Tres equips (*Erigon, Nethermind i Equilibrium*) estan desenvolupant nodes complets i, potencialment, en començaran el desenvolupament més en el futur.

En un desenvolupament paral·lel, s'estan preparant per obrir el programari de seqüenciació i prova al públic. Qualsevol persona podrà participar com a seqüenciador o provador a StarkNet.

Es desenvoluparà una estructura per incentivar la participació de la gent, que inclourà recompenses econòmiques. Les tarifes de StarkNet aniran, en part, a seqüenciadors i provadors.

A mitjà termini esperem posar el nostre seqüenciador a disposició de tercers, i a llarg termini també esperem veure diversos equips construir seqüenciadors que seqüenciaran per a StarkNet.

### Sempre millorant; Sempre Escoltant

A mesura que l'atenció es canviï cap al següent repte, continuarem millorant els assoliments anteriors. I en continuar treballant en totes les àrees de[StarkNet](https://starknet.io/), les nostres orelles romandran sempre obertes a tota la comunitat de desenvolupadors. Per tant, participeu en la discussió, a través de[Discord](https://discord.com/invite/uJ9HZTUk2Y), la comunitat[StarkNet Shamans](https://www.google.com/search?client=safari&rls=en&q=StarkNet+Shamans&ie=UTF-8&oe=UTF-8),[Twitter](https://twitter.com/Starknet_Intern), o una altra ruta, i ajudeu a donar forma al futur de l'escala de blockchain.