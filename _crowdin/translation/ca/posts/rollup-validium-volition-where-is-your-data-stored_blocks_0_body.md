### TL;DR

* StarkWare ofereix una gamma de modes de disponibilitat de dades (DA) perquè els clients puguin triar, segons la seva prioritat.
* Hi ha tres enfocaments de la disponibilitat de dades per a proves STARK, tots ja estan disponibles en producció:\
  —**Rollup**: el llibre major es publica directament a la cadena de blocs\
  —**Validium**: un comitè de disponibilitat de dades assegura el llibre major, amb només un hash que s'emmagatzema a la cadena\
  —**Volition**: les aplicacions poden permetre als usuaris triar el seu mode DA — Rollup o Validium — per a cada transacció
* Independentment de quin DA s'utilitzi, la validesa de totes les transaccions està garantida per STARK

### Introducció

Al novembre de 2022,[StarkEx](https://starkware.co/starkex/)ha liquidat més de 750.000 milions de dòlars de volum de negociació i més de 270 milions de transaccions a Ethereum. A l'espai NFT, alimentant aplicacions com ImmutableX i Sorare, StarkEx ha encunyat més de 85 milions de NFT a un preu 1000 vegades més barat que fer-ho directament a Ethereum. La tecnologia basada en STARK està escalant Ethereum. Per exemple, en una sola setmana, StarkEx va executar 1,6 vegades el nombre de transaccions que Ethereum (12 milions a StarkEx vs 7,5 milions a Ethereum) mentre ocupava menys del 0,1% de l'espai de blocs d'Ethereum. I fa tot això alhora que ofereix als usuaris el mateix nivell de seguretat com si s'instal·lessin directament a Ethereum.

### Com ho aconsegueix StarkWare?

Els usuaris envien transaccions a la capa 2 (ja sigui StarkEx o StarkNet), que s'agrupen i s'envien a un provador STARK. Aquest provador STARK coneix l'estat del llibre major abans i després que s'hagin processat aquestes transaccions. El provador produeix una prova STARK que certifica la validesa del nou estat del llibre major després d'haver executat aquestes transaccions. El nou estat i la prova STARK s'envien al verificador STARK en cadena. La verificació d'aquesta prova es fa de manera autònoma mitjançant un contracte intel·ligent immutable a Ethereum.

Aquesta arquitectura ofereix el millor dels dos mons: podem tenir costos de transacció baixos, tot i que encara tenim Ethereum al mig com a àrbitre neutral. Ethereum com a àrbitre no és només un agradable; proporciona seguretat crítica a l'usuari final. Un usuari que fa transaccions ara pot estar segur que els seus fons estan garantits per Ethereum i que les transaccions són immutables un cop es verifiquen a Ethereum. L'usuari també té la total autocustodia dels seus fons. L'autocustodia és important perquè garanteix que l'usuari tingui accés als seus fons en tot moment, sense dependre de cap tercer.

### On encaixa la disponibilitat de dades en tot això?

És important emfatitzar tant el que està fent aquesta prova com el que està fent*no*. La prova demostra la validesa del nou estat, però no us diu quin és el nou estat. Per això, necessiteu disponibilitat de dades. Si només tenim la prova, llavors la cadena de blocs sap que el que s'ha enviat és vàlid, però no sap quin és el nou estat (per exemple, el saldo del llibre major)! Els consumidors d'aquestes dades inclouen els usuaris que tenen transaccions dins d'aquestes proves. Les dades s'han de posar a la seva disposició si volen retirar fons a Ethereum sense necessitat de confiar en l'operador de la capa 2. Això ofereix als usuaris l'autocustodia total dels seus fons.

Una analogia amb això és que el vostre professor de secundària us demana que demostreu que x és igual a x. Això és trivial de demostrar. Què és més difícil de respondre: a què és realment igual x? Per a això, necessiteu una informació a part. Pot ser que x sigui igual a 5 o un altre valor. De la mateixa manera, a la cadena de blocs, es pot enviar una prova STARK a un contracte intel·ligent del verificador STARK per a la seva verificació. I el verificador pot certificar que la prova és vàlida (que x=x). Però necessiteu una entrada independent per dir-vos què és x (el nou saldo del llibre major).

Hi ha tres enfocaments per fer disponibles aquestes dades:

#### Mode de acumulació

El mode acumulatiu garanteix que l'estat del llibre major s'emmagatzema a Ethereum juntament amb les proves. El mode acumulació l'utilitza actualment[dYdX](https://dydx.exchange/)en producció, i també l'utilitza la xarxa pública[StarkNet](http://starknet.io/)L2. Els avantatges aquí són clars: es pot recrear l'estat del llibre major només interactuant amb la cadena de blocs d'Ethereum. La implicació d'això és que, com a usuari final, podeu parlar sense confiança amb el contracte intel·ligent rellevant a Ethereum i retirar els vostres fons fins i tot si el sistema de capa 2 s'apaga.

#### Validium

Sota el mode acumulatiu, la majoria dels costos de gas d'Ethereum es dirigeixen a la disponibilitat de dades i no a la verificació de proves. Això es deu al fet que és molt intensiu en gas emmagatzemar dades a la cadena de blocs. En el mode Validium, la informació del llibre major no s'envia a Ethereum. Més aviat, s'emmagatzema fora de la cadena amb un Comitè de Disponibilitat de Dades. Ethereum emmagatzema un hash d'aquesta informació del llibre major. Aquest Comitè de Disponibilitat de Dades està format per un quòrum de membres independents que supervisen l'actualització correcta de l'estat i conserven una còpia de les dades que s'han processat. Cada instància de StarkEx pot crear el seu propi quòrum. Els membres del quòrum de les aplicacions existents que s'executen a StarkEx inclouen entitats com[Consensys](https://consensys.net/),[Nethermind](https://nethermind.io/),[Iqlusion](https://iqlusion.io/)i[Cephalopod](https://cephalopod.equipment/).

Els beneficis aquí són clars. No cal pagar les tarifes del gas Ethereum per emmagatzemar la informació del llibre major a la cadena. Més aviat, l'únic que s'emmagatzema a Ethereum és un únic hash de la informació del llibre major. Si voleu retirar fons sense confiança de la capa 2 parlant amb Ethereum, només necessiteu la signatura digital d'un dels membres del Comitè de Disponibilitat de Dades. Els membres del DAC utilitzaran la criptografia per demostrar que sou la propietat d'aquests fons.

Un altre avantatge ocult de Validium Data Availability és la confidencialitat de les persones que llegeixen la cadena de blocs. En el mode de acumulació, el públic coneix el saldo de cada compte en el moment en què s'envien les proves. Amb Validium, aquestes dades s'oculten de la cadena de blocs; només el Comitè de Disponibilitat de Dades n'és conscient, perquè es manté fora de la cadena. Aquest nivell de confidencialitat permet una gran varietat de casos d'ús on és important ofuscar les dades de les transaccions.

#### Voluntat

Volition és una arquitectura de disponibilitat de dades que ofereix l'opció entre el mode Validium i el mode acumulatiu a nivell de transacció. Ho fa mantenint un llibre major en cadena i un altre amb un comitè de disponibilitat de dades. Els usuaris poden triar entre els modes Validium i Rollup per a cada transacció individual.

Imagineu que compreu un NFT molt car com un Bored Ape o un Cryptopunk, en una aplicació que s'executa a StarkEx. És possible que vulgueu utilitzar el mode de acumulació per protegir les dades d'aquest NFT, perquè voleu un registre d'aquesta transacció específica emmagatzemat a Ethereum. Tanmateix, podeu comprar un NFT molt barat (per exemple, una capa per al vostre personatge en un joc de cadena de blocs) i, en aquesta circumstància, estarà encantat d'estalviar diners utilitzant Validium.

Si esteu interessats en l'escala aconseguida per les proves STARK, veniu a construir-nos.



Sempre podeu enviar un correu electrònic a[info@starkware.co](mailto:info@starkware.co)i un humà arribarà al vostre correu electrònic.