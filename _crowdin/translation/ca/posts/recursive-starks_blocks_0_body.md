### TL;DR

* La prova recursiva està en directe a Mainnet, escalant les aplicacions StarkEx i StarkNet amb una única prova
* Augmenta l'escala i ofereix beneficis en costos i latència (una aparició rara i emocionant d'escala i latència que es mouen en tàndem, i no és una compensació)
* Prepara l'escenari per a L3 i altres avantatgesVes a llegir la publicació del bloc sobre[Prova recursiva](https://medium.com/@starkware/recursive-starks-78f8dd401025). És una cosa genial 😉

### Ampliant!

Les proves recursives, impulsades pel càlcul general del Caire, ara estan en producció. Això suposa un gran impuls a la potència de l'escala L2 amb STARK. Proporcionarà ràpidament un augment múltiple del nombre de transaccions que es poden escriure a Ethereum mitjançant una única prova.

Fins ara, l'escala STARK ha funcionat "agregant" desenes o fins i tot centenars de milers de transaccions en una única prova, que es va escriure a Ethereum. Amb la recursivitat, moltes d'aquestes proves es poden "agregar" en una única prova.

Aquest mètode es troba ara en producció per a multitud d'aplicacions basades en El Caire: aplicacions que s'executen a StarkEx, el motor d'escalat SaaS de StarkWare i StarkNet, el paquet acumulat sense permís.

### La història fins ara

Des de la primera prova a Mainnet, el març de 2020, els desenvolupaments següents han donat forma a com s'utilitzen els STARK.

### Escalat basat en STARK

El juny de 2020 es va desplegar la primera solució d'escala basada en STARK,[StarkEx](https://youtu.be/P-qoPVoneQA), a Ethereum Mainnet. StarkEx té un Prover que realitza grans càlculs fora de la cadena i produeix una prova STARK per a la seva correcció, i un verificador que verifica aquesta prova en cadena. Les limitacions d'aquest primer desplegament van ser "escrites a mà" pels enginyers de StarkWare, limitant així molt la velocitat de les funcions de StarkEx. Vam concloure que es necessita un llenguatge de programació per donar suport a la demostració de la computació general: El Caire.

#### El Caire

A l'estiu del 2020, el Caire va fer la seva primera aparició[a Ethereum Mainnet](https://medium.com/starkware/hello-cairo-3cb43b13b209). Cairo significa CPU Algebraic Intermediate Representation (AIR) i inclou un únic AIR que verifica el conjunt d'instruccions d'aquesta "CPU". Va obrir la porta per a la codificació de proves per a una lògica empresarial més complexa, per a declaracions computacionals arbitràries i per fer-ho d'una manera més ràpida i segura. Un programa Cairo pot provar l'execució de la lògica d'una única aplicació. Però un programa del Caire també pot ser una concatenació de múltiples aplicacions d'aquest tipus: SHARP.

#### AGUT

SHARP, un provador compartit, pren transaccions de diverses aplicacions separades i les demostra totes en una única prova STARK. Les aplicacions combinen els seus lots de transaccions, omplint la capacitat d'una prova STARK més ràpidament. Les transaccions es processen a un ritme i latència millorats. La següent frontera: proves recursives, però no només per a una mica de lògica codificada, sinó més aviat per a**càlcul general**.

Per entendre tot el benefici de la prova recursiva, val la pena entendre una mica més sobre com SHARP feia la prova (no recursiva) fins ara. El dibuix 1 representa un flux no recursiu típic:

![Dibuix 1: un flux de prova típic no recursiu](/assets/recursive_starks_01.png "Dibuix 1: un flux de prova típic no recursiu")

Aquí les declaracions arriben amb el temps. Quan s'arriba a un determinat llindar de capacitat (o de temps), es genera una declaració combinada gran (també conegut com Train). Aquesta declaració combinada només es prova un cop s'han rebut totes les declaracions individuals. Aquesta demostració triga molt de temps a demostrar-se (aproximadament la suma del temps que es necessita per demostrar cada afirmació individualment).

La prova de declaracions extremadament grans es veu limitada finalment pels recursos informàtics disponibles, com ara la memòria. Abans de la recursivitat, aquesta era efectivament la barrera d'escalabilitat limitant de la prova STARK.

### Què és la demostració recursiva?

Amb les proves STARK, el temps que es necessita per demostrar una declaració és aproximadament lineal amb el temps que es triga a executar la sentència. A més, si la demostració d'una afirmació requereix un temps T, aleshores verificar la demostració requereix un temps aproximadament log(T), que normalment s'anomena "compressió logarítmica". En altres paraules, amb els STARK dediques molt menys temps a verificar l'enunciat que a calcular-lo.

[El Caire](https://starkware.co/cairo/)permet expressar enunciats computacionals generals que poden ser demostrats per proves STARK i verificats pels verificadors STARK corresponents.

Aquí és on apareix l'oportunitat de realitzar[recursivitat](https://en.wikipedia.org/wiki/Recursion): de la mateixa manera que escrivim un programa del Caire que demostra la correcció de milers de transaccions, també podem escriure un programa del Caire que verifiqui múltiples proves STARK. Podem generar una única prova que acrediti la validesa de múltiples proves "amunt". Això és el que anomenem demostració recursiva.

A causa de la compressió logarítmica i el temps de prova aproximadament lineal, la prova d'una verificació d'una prova STARK triga un temps relativament curt (s'espera que sigui uns minuts en un futur proper).

Quan s'implementa Recursion, SHARP pot provar les declaracions a la seva arribada. Les seves proves es poden fusionar una i altra vegada en proves recursives en diversos patrons fins que, en un moment determinat, la prova resultant s'envia a un contracte de verificador en cadena. Al dibuix 2 es mostra un patró típic:

![Dibuix 2: un flux de demostració recursiu típic.](/assets/recursive_starks_02.png "Dibuix 2: un flux de demostració recursiu típic.")

### Beneficis immediats de la demostració recursiva

#### Cost reduït en cadena

D'entrada, aconseguim la "compressió" de múltiples proves en una, la qual cosa implica un cost de verificació a la cadena més baix per transacció (on cada declaració pot incloure moltes transaccions).

Amb la recursivitat, s'elimina la barrera dels recursos computacionals (per exemple, la memòria) que limitava la mida de les proves fins ara, ja que cada declaració de mida limitada es pot provar per separat. Per tant, quan s'utilitza la recursivitat, la mida efectiva de la recursivitat del tren és gairebé il·limitada i el cost per transacció es pot reduir en ordres de magnitud.

En termes pràctics, la reducció depèn de la latència acceptable (i del ritme al qual arriben les transaccions). A més, com que cada prova normalment també s'acompanya d'alguna sortida, com ara dades en cadena, hi ha límits a la quantitat de dades que es poden escriure en cadena juntament amb una única prova. No obstant això, reduir els costos en un ordre de magnitud i encara millor és trivialment assolible.

#### Latència reduïda

El patró de prova recursiva redueix la latència de provar grans trens de declaracions. Aquest és el resultat de dos factors:

1. Les declaracions entrants es poden demostrar**en paral·lel**(en lloc de demostrar una declaració combinada extremadament gran).
2. No cal esperar fins que arribi l'última declaració al Tren per començar a demostrar. Més aviat, les proves es poden combinar amb noves declaracions a mesura que arriben. Això vol dir que la latència de l'última declaració que s'uneix a un Train, és aproximadament el temps que triga a demostrar aquesta última declaració més el temps que triga a provar una declaració del verificador recursiu (que dóna fe de totes aquelles declaracions que ja han "incorporat" aquesta declaració). Tren particular).

Estem desenvolupant i optimitzant activament la latència de la prova de la declaració del verificador recursiu. Esperem que això arribi a l'ordre d'uns minuts en pocs mesos. Per tant, un SHARP altament eficient pot oferir latències des d'uns quants minuts fins a unes poques hores, depenent de la compensació versus el cost per transacció a la cadena. Això representa una millora significativa de la latència de SHARP.

#### Facilitant L3

El desenvolupament de la declaració del verificador recursiu al Caire també obre la possibilitat d'enviar proves a StarkNet, ja que aquesta declaració es pot incorporar a un contracte intel·ligent de StarkNet. Això permet construir[desplegaments L3 a la part superior de la StarkNet](https://medium.com/starkware/fractal-scaling-from-l2-to-l3-7fe238ecfb4f)pública (una xarxa L2).

El patró recursiu també s'aplica a l'agregació de proves de L3, que s'han de verificar mitjançant una única prova a L2. Per tant, també s'aconsegueix una hiperescala.

### Beneficis més subtils

#### Recurs aplicatiu

La recursivitat obre encara més oportunitats per a plataformes i aplicacions que volen augmentar encara més el seu cost i rendiment.

Cada prova STARK dóna fe de la validesa d'una declaració aplicada a alguna entrada coneguda com a "entrada pública" (o "sortida del programa" en termes del Caire). Conceptualment, la recursivitat STARK comprimeix dues proves amb*dos*entrades en*una*prova amb dues entrades. En altres paraules, mentre es redueix el nombre de proves, el nombre d'entrades es manté constant. Aquestes entrades són normalment utilitzades per una aplicació per actualitzar algun estat a L1 (per exemple, per actualitzar una arrel d'estat o realitzar una retirada en cadena).

Si es permet que la declaració recursiva sigui**, és a dir, reconeix la semàntica de l'</em>en si, pot comprimir dues proves en una*i combinar les dues entrades en una. La declaració resultant dóna fe de la validesa de la combinació d'entrada basada en la semàntica de l'aplicació, d'aquí el nom de recursivitat aplicativa (vegeu el dibuix 3, per a un exemple).</p>

![Dibuix 3: Exemple de recursivitat aplicativa](/assets/recursive_starks_03.png "Dibuix 3: Exemple de recursivitat aplicativa")

Aquí, la declaració 1 dóna fe d'una actualització de l'estat d'A a B i la declaració 2 dóna fe d'una nova actualització de B a C. Les proves de la declaració 1 i la declaració 2 es poden combinar en una tercera declaració, que atesti l'actualització directa de l'A a la C. Aplicant una lògica similar de manera recursiva, es pot reduir el cost de les actualitzacions d'estat molt significativament fins al requisit de latència final.

Un altre exemple important de recursivitat aplicativa és comprimir les dades acumulades de múltiples proves. Per exemple, per a una acumulació de validesa com StarkNet, totes les actualitzacions d'emmagatzematge a L2 també s'inclouen com a dades de transmissió a L1, per garantir la disponibilitat de dades. Tanmateix, no cal enviar diverses actualitzacions per al mateix element d'emmagatzematge, ja que només es requereix el valor final de les transaccions acreditades per la prova verificada per a la disponibilitat de dades. Aquesta optimització ja es realitza dins d'un bloc StarkNet*únic*. Tanmateix, en generar una prova per bloc, la recursivitat aplicativa pot comprimir aquestes dades acumulades en*blocs múltiples*L2. Això pot comportar una reducció de costos significativa, permetent intervals de bloc més curts a la L2, sense sacrificar l'escalabilitat de les actualitzacions de la L1.

Val la pena tenir en compte: la recursivitat aplicativa es pot combinar amb la recursivitat independent de l'aplicació, tal com es mostra anteriorment. Aquestes dues optimitzacions són independents.

#### Reducció de la complexitat del verificador en cadena

La complexitat del verificador STARK depèn del tipus d'afirmacions que està dissenyat per verificar. En particular, per a les declaracions del Caire, la complexitat del verificador depèn dels elements específics permesos en l'idioma del Caire i, més concretament, dels incorporats admesos (si fem servir la metàfora de la CPU per al Caire, els integrats són l'equivalent de micro -circuits en una CPU: càlculs realitzats amb tanta freqüència que requereixen el seu propi càlcul optimitzat).

L'idioma del Caire continua evolucionant i oferint incorporacions cada cop més útils. D'altra banda, el verificador recursiu només requereix utilitzar un petit subconjunt d'aquests integrats. Per tant, un SHARP recursiu pot suportar amb èxit qualsevol declaració al Caire donant suport al llenguatge complet als verificadors recursius. Concretament, el verificador de solidesa L1 només necessita verificar proves recursives i, per tant, es pot limitar a un subconjunt més estable de l'idioma del Caire: el verificador L1 no necessita estar al dia amb els últims i millors incorporats. En altres paraules, la verificació d'enunciats complexes en constant evolució queda relegada a L2, deixant que el verificador L1 verifici declaracions més simples i estables.

#### Reducció de la petjada informàtica

Abans de la recursivitat, la capacitat d'agregar diverses declaracions en una prova estava limitada per la mida màxima de la declaració que es podia demostrar a les instàncies de càlcul disponibles (i el temps que podia trigar a generar aquestes proves).

Amb la recursivitat, ja no hi ha necessitat de demostrar afirmacions tan grans. Com a resultat, es poden utilitzar instàncies de càlcul més petites, menys costoses i més disponibles (tot i que es poden necessitar més que amb grans provadors monolítics). Això permet desplegar instàncies de prova en més entorns físics i virtuals del que era possible abans.

### Resum

Les proves recursives de càlcul general ara serveixen a diversos sistemes de producció, inclòs StarkNet, a Mainnet Ethereum.

Els avantatges de la recursivitat es realitzaran gradualment, ja que continua permetent noves millores, i aviat oferirà una gran escala, reduirà les tarifes del gas i millorarà la latència al desbloquejar el potencial de paral·lelització.

Aportarà importants beneficis de costos i latència, juntament amb noves oportunitats com L3 i recursivitat aplicativa. L'optimització addicional del verificador recursiu està en curs i s'espera que s'ofereixin fins i tot un millor rendiment i beneficis en costos amb el temps.



**Gidi Kaempfer**, cap d'enginyeria bàsica, StarkWare