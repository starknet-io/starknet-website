L'escalabilitat de la cadena de blocs sempre ha estat un tema candent. Gairebé totes les xarxes blockchain ofereixen un gran nombre de transaccions per segon (TPS) com a punt de venda. Tanmateix, TPS no és una mètrica vàlida per comparar les xarxes blockchain, cosa que fa que sigui un repte avaluar el seu rendiment relatiu. A més, els grans números de TPS solen tenir un cost, cosa que planteja la pregunta: aquestes xarxes realment s'escalen o simplement augmenten el seu rendiment?

Així doncs, examinem com definir l'escalabilitat, quins intercanvis es fan per aconseguir-ho i per què els Validity Rollups són la solució d'escalabilitat definitiva.

### No totes les transaccions es fan iguals

En primer lloc, hem d'establir la nostra afirmació que la mètrica senzilla i convenient de TPS no és una mesura precisa d'escalabilitat.

Per compensar els nodes per executar transaccions (i per dissuadir els usuaris d'enviar correu brossa a la xarxa amb càlculs innecessaris), les cadenes de blocs cobren una tarifa proporcional a la càrrega computacional imposada a la cadena de blocs. A Ethereum, la complexitat de la càrrega computacional es mesura en*gas.*Com que el gas és una mesura molt convenient de la complexitat de la transacció, el terme també s'utilitzarà al llarg d'aquest article per a cadenes de blocs que no són d'Ethereum, tot i que normalment és específic d'Ethereum.

Les transaccions difereixen significativament en complexitat i, per tant, en quant gas consumeixen. Bitcoin, el pioner de les transaccions peer-to-peer sense confiança, només admet el rudimentari script de Bitcoin. Aquests senzills trasllats d'adreça a adreça fan servir poc gas. En canvi, les cadenes de contractes intel·ligents com Ethereum o Solana admeten una màquina virtual i llenguatges de programació complets de Turing que permeten transaccions molt més complexes. Per tant, dApps com Uniswap requereixen molt més gas.

Per això no té sentit comparar el TPS de diferents blockchains. En canvi, el que hauríem de comparar és la capacitat de càlcul o el rendiment.

Totes les cadenes de bloc tenen una mida de bloc (variable) i un</em>de bloc que determinen quantes unitats*de càlcul*es poden processar per bloc i amb quina velocitat*es pot afegir un bloc nou. En conjunt, aquestes dues variables determinen el rendiment**d'una cadena de blocs.</p>

### Què limita l'escalabilitat?

Les cadenes de blocs s'esforcen per ser xarxes inclusives i descentralitzades al màxim. Per aconseguir-ho, s'han de controlar dues propietats fonamentals.

#### **1. Requisits de maquinari**

La descentralització d'una xarxa de blockchain està determinada per la capacitat del node més feble de la xarxa per verificar la blockchain i mantenir el seu estat. Per tant, els costos per executar un node (maquinari, amplada de banda i emmagatzematge) s'han de mantenir tan baixos com sigui possible per permetre que tantes persones com sigui possible es converteixin en participants sense permís a la xarxa sense confiança.

#### 2**.**Creixement de l'Estat

El creixement de l'estat fa referència a la rapidesa amb què creix la cadena de blocs. Com més rendiment permet que passi una cadena de blocs per unitat de temps, més ràpid creixerà la cadena de blocs. Els nodes complets emmagatzemen l'historial de la xarxa i han de poder validar l'estat de la xarxa. L'estat d'Ethereum s'emmagatzema i es fa referència mitjançant estructures eficients com ara arbres. A mesura que l'estat creix, s'hi afegeixen noves fulles i branques, la qual cosa fa que cada vegada sigui més complex i requereix temps dur a terme determinades accions. A mesura que la cadena creix de mida, empitjora l'execució dels nodes en el pitjor dels casos, la qual cosa fa que el temps cada cop creixi per validar nous blocs. Amb el temps, això també augmenta el temps total que triga a sincronitzar un node complet.

### Impactes perjudicials de l'augment del rendiment

#### 1. Recompte de nodes

Els requisits mínims per executar un node i el recompte de nodes són:

* Bitcoin¹: 350 GB d'espai en disc dur, connexió de 5 Mbit/s, 1 GB de RAM, CPU >1 Ghz. **Nombre de nodes: ~10.000**
* Ethereum²: 500 GB+ d'espai en disc SSD, connexió de 25 Mbit/s, 4–8 GB de RAM, CPU 2–4 nuclis. **Nombre de nodes: ~6.000**
* Solana³: 1,5 TB+ d'espai en disc SSD, connexió de 300 Mbit/s, 128 GB de RAM CPU 12 o més nuclis. **Nombre de nodes: ~1.200**

Tingueu en compte que com més grans siguin els requisits de CPU, amplada de banda i emmagatzematge dels nodes necessaris per al rendiment d'una cadena de blocs, menys nodes a la xarxa, cosa que comportarà una descentralització més feble i una xarxa menys inclusiva.

#### 2. És hora de sincronitzar un node complet

Quan s'executa un node per primera vegada, s'ha de sincronitzar amb tots els nodes existents, descarregar i validar l'estat de la xarxa des del bloc de gènesi fins a la punta de la cadena. Aquest procés ha de ser el més ràpid i eficient possible per permetre que qualsevol persona actuï com a participant sense permís del protocol.

Prenent com a indicador les proves de sincronització de nodes</a>[2020 Bitcoin Node](https://blog.lopp.net/2020-bitcoin-node-performance-tests/)i

2021 de Jameson Lopp, la taula 1 compara el temps que triga a sincronitzar un node complet de Bitcoin vs. Ethereum vs. Solana en un ordinador de grau mitjà de consum.</p> 

![Taula 1. Rendiment de cadena de blocs i comparació de sincronització de nodes](/assets/1_gmpi_1c9zipoc-znrh7b5q.png "Taula 1. Rendiment de cadena de blocs i comparació de sincronització de nodes")

La taula 1 demostra que augmentar el rendiment comporta temps de sincronització més llargs perquè cada cop cal processar i emmagatzemar més dades.

Tot i que es fan millores al programari dels nodes constantment per mitigar el repte de la cadena de blocs en creixement (reducció de la petjada del disc, velocitats de sincronització més ràpides, resistència als accidents més forta, modularització de certs components, etc.), evidentment, els nodes encara no poden seguir el ritme dels augments. al rendiment.



### Com s'ha de definir l'escalabilitat?

L'escalabilitat és el terme més tergiversat a l'espai blockchain. Tot i que és desitjable augmentar el rendiment, només és una part del trencaclosques.

***Escalabilitat**significa**transaccions més**per al mateix maquinari****.*

Per aquest motiu, l'escalabilitat es pot separar en dues categories.



#### Escalabilitat del seqüenciador

La seqüenciació descriu l'acte d'ordenar i processar transaccions en una xarxa. Com s'ha establert anteriorment, qualsevol cadena de blocs podria augmentar trivialment el seu rendiment augmentant la mida del bloc i escurçant el seu temps de bloc, fins a un punt en què l'impacte negatiu a la seva descentralització es consideri massa significatiu. Però, ajustar aquests paràmetres senzills no proporciona les millores necessàries. L'EVM d'Ethereum pot, en teoria,[fins a ~ 2.000 TPS](https://twitter.com/dankrad/status/1459607325854121989), cosa que és insuficient per atendre la demanda d'espai de blocs a llarg termini. Per escalar la seqüenciació, Solana va fer algunes innovacions impressionants: aprofitant un entorn d'execució paral·lelitzable i un mecanisme de consens intel·ligent, que permet un rendiment molt més eficient. Però, malgrat les seves millores, no és ni suficient ni escalable. A mesura que Solana augmenta el seu rendiment, també augmenten els costos de maquinari per executar un node i processar transaccions.



#### Escalabilitat de verificació

*L'escalabilitat de verificació descriu enfocaments que augmenten el rendiment sense carregar els nodes amb costos de maquinari cada cop més elevats.*Concretament, es refereix a innovacions criptogràfiques com les proves de validesa. Són la raó per la qual Validity Rollups pot escalar una cadena de blocs de manera sostenible.

**Què és un acumulador de validesa?**

Els acumuladors de validesa (també coneguts com a "ZK-Rollups") mouen el càlcul i l'emmagatzematge de l'estat fora de la cadena, però mantenen una petita quantitat de determinades dades a la cadena. Un contracte intel·ligent a la cadena de blocs subjacent manté l'arrel estatal del Rollup. Al Rollup, un lot de transaccions altament comprimides, juntament amb l'arrel de l'estat actual, s'envien a un Prover fora de la cadena. El Prover calcula les transaccions, genera una prova de validesa dels resultats i la nova arrel d'estat i l'envia a un verificador en cadena. El verificador verifica la prova de validesa i el contracte intel·ligent que manté l'estat del Rollup l'actualitza al nou estat proporcionat pel Prover.

**Com s'escala Validity Rollups amb els mateixos requisits de maquinari?**

Tot i que els Provers requereixen maquinari de gamma alta, no afecten la descentralització d'una cadena de blocs; perquè la validesa de les transaccions està garantida per proves matemàticament verificables.

El que importa són els requisits per verificar les proves. Com que les dades implicades estan molt comprimides i s'abstraeixen en gran mesura mitjançant el càlcul, el seu impacte en els nodes de la cadena de blocs subjacent és mínim*.*

Els verificadors (nodes Ethereum) no requereixen maquinari de gamma alta i la mida dels lots no augmenta els requisits de maquinari. Els nodes només han de processar i emmagatzemar les transicions d'estat i una petita quantitat de dades de trucades. Això permet que tots els nodes d'Ethereum verifiquen els lots acumulats de validesa mitjançant el seu maquinari existent.

**Com més transaccions, més barat és**

A les cadenes de blocs tradicionals, com més transaccions es produeixen, més car és per a tothom a mesura que s'omple l'espai del bloc, i els usuaris han de superar-se entre ells en un mercat de tarifes per incloure les seves transaccions.

Per a una acumulació de validesa, aquesta dinàmica s'inverteix. Verificar un lot de transaccions a Ethereum té un cost determinat. A mesura que el nombre de transaccions dins d'un lot creix, el cost per verificar el lot creix a un ritme exponencialment més lent. Afegir més transaccions a un lot comporta tarifes de transacció més barates tot i que el cost de verificació del lot augmenta, ja que s'amortitza entre totes les transaccions dins del lot. Validity Rollups volen tantes transaccions com sigui possible dins d'un lot, de manera que la tarifa de verificació es pugui compartir entre tots els usuaris. A mesura que la mida del lot creix fins a l'infinit, la tarifa amortitzada per transacció convergeix a zero, és a dir, com més transaccions en un acumulador de validesa, més barat serà per a tothom.

dYdX, una dApp impulsada per un paquet acumulatiu de validesa, sovint veu mides de lots de més de 12.000 transaccions. La comparació del consum de gas de les mateixes transaccions a Mainnet amb una Validity Rollup il·lustra els guanys d'escalabilitat:

Liquidació d'una transacció dYdX a Ethereum Mainnet:**200.000 gas**

Liquidació d'una transacció dYdX a StarkEx:**<500 gas**

Una altra manera de veure-ho: el cost principal de Validity Rollups s'escala linealment amb el nombre d'usuaris del mateix lot.



#### Per què els Optimistic Rollups no són tan escalables com es pot pensar

En teoria, Optimistic Rollups ofereix gairebé els mateixos avantatges d'escalabilitat que Validity Rollups. Però hi ha una distinció important: les acumulacions optimistes optimitzen per al cas mitjà, mentre que les acumulacions de validesa optimitzen per al pitjor dels casos. Com que els sistemes de cadena de blocs funcionen en condicions extremadament adverses, l'optimització per al pitjor dels casos és l'única manera d'aconseguir la seguretat.

En el pitjor dels casos de l'Optimistic Rollup, les transaccions d'un usuari no seran verificades pels verificadors de frau. Per tant, per contestar el frau, l'usuari ha de sincronitzar un node complet d'Ethereum, un node complet L2 i calcular la transacció sospitosa.

En el pitjor dels casos de Validity Rollup, un usuari només hauria de sincronitzar un node complet d'Ethereum per verificar la prova de validesa, estalviant-se la càrrega computacional.

A diferència de Validity Rollups, el cost d'Optimistic Rollups s'escala de manera lineal amb el nombre de transaccions en lloc del nombre d'usuaris, fent-los més cars.



### Peça final del trencaclosques: Accés sense permís a l'estat acumulat

Per garantir la validesa de les transaccions, els usuaris només han d'executar un node Ethereum. No obstant això, és possible que els usuaris i desenvolupadors vulguin veure i executar l'estat i l'execució del Rollup per a diversos propòsits. Un node</em>L2 d'indexació*omple perfectament aquesta necessitat. No només permet als usuaris veure les transaccions a la xarxa, sinó que també és una peça crítica d'infraestructura que és necessària perquè la infraestructura de l'ecosistema funcioni. Indexadors com The Graph, Alchemy, Infura; Xarxes Oracle com Chainlink i exploradors de blocs, tots ells totalment compatibles amb un node L2 d'indexació sense permís.</p> 



### Conclusió

Molts enfocaments per abordar l'escalabilitat de la cadena de blocs se centren falsament en augmentar el rendiment**. Però això descuida l'impacte dels rendiments als nodes: els requisits de maquinari cada cop més creixents per processar blocs i emmagatzemar l'historial de la xarxa, i com això inhibeix la descentralització d'una xarxa.

Amb l'arribada de la criptografia a prova de validesa, una cadena de blocs pot assolir**escalabilitat real**que no carregui els nodes amb costos cada cop més creixents i permeti una àmplia descentralització. Ara són possibles més transaccions amb càlculs potents i més complexos per al mateix maquinari, invertint el dilema del mercat de tarifes en el procés: com més activitat en un acumulador de validesa, més barat serà!

[SwagtimusPrime.eth](https://twitter.com/SwagtimusP?t=pO0L1vGIhuC-ZgWOusQYtA&s=09)i[Louis Guthmann](https://twitter.com/GuthL)

¹ Des de<https://bitcoin.org/en/bitcoin-core/features/requirements>

² Des de<https://ethereum.org/en/developers/docs/nodes-and-clients/>

³ Des de<https://docs.solana.com/running-validator/validator-reqs>

⁴ Fortament simplificat i ajustat per a mides mitjanes de blocs dinàmics