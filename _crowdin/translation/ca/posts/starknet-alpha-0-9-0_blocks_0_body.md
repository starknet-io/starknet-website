### TL;DR

* **Ara les tarifes són obligatòries a Testnet, aviat a Mainnet**
* El patró de fàbrica de contracte ara és possible!
* StarkNet està introduint classes de contracte
* La trucada de delegat es substitueix per la trucada de biblioteca

### Introducció

Estem encantats de presentar StarkNet Alpha 0.9.0! Aquesta és una versió important en la qual StarkNet fa passos significatius cap a la maduresa, amb addicions substancials tant a la funcionalitat com al disseny del protocol.

**Les tarifes són obligatòries**(actualment només a Testnet, fins que la versió 0.9.0 estigui disponible a Mainnet) — qualsevol L2 pròsper ha de tenir el seu propi sistema independent de tarifes. Després d'introduir les tarifes com a característica opcional a la versió 0.8.0, ara ens sentim segurs per incloure-les com a component bàsic del protocol i fer-les obligatòries. Més detalls a continuació.

Un altre canvi significatiu a nivell de protocol és la introducció de Classes de Contracte i la separació classe/instància. Això permet un ús més senzill de la funcionalitat \`delegate_call\` i els desplegaments dels contractes existents, habilitant el patró de fàbrica a StarkNet.

### Classes de contracte

Inspirant-nos en la programació orientada a objectes, distingim entre el codi del contracte i la seva implementació. Ho fem separant els contractes en classes i instàncies.

Una classe de contracte****és la definició del contracte: el seu codi de bytes del Caire, informació d'indicacions, noms de punts d'entrada i tot el necessari per definir sense ambigüitats la seva semàntica. Cada classe s'identifica pel seu hash de classe (anàloga a un nom de classe dels llenguatges OOP).

Una instància de contracte****, o simplement un contracte, és un contracte desplegat corresponent a alguna classe. Tingueu en compte que només les instàncies de contracte es comporten com a contractes, és a dir, tenen el seu propi emmagatzematge i es poden cridar per transaccions/altres contractes. Una classe de contracte no té necessàriament una instància desplegada a StarkNet. La introducció de classes inclou diversos canvis de protocol.

#### "Declarar" la transacció

Estem introduint un nou tipus de transacció a StarkNet: la transacció['declare'](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction), que permet declarar una classe de contracte**.**A diferència de la transacció \`deploy\`, aquesta no desplega cap instància d'aquesta classe. L'estat de StarkNet inclourà una llista de classes declarades. Es poden afegir noves classes mitjançant la nova transacció \`declare\`.

#### Les fàbriques de trucades i contractes del sistema 'Desplega'.

Un cop declarada una classe, és a dir, s'ha acceptat la transacció \`declare\` corresponent, podem desplegar noves instàncies d'aquesta classe. Per a això, utilitzem la nova crida al sistema \`deploy\`, que pren els arguments següents:

* El hash de classe
* Sal
* Arguments del constructor

La trucada de sistema "desplega" desplegarà una nova instància d'aquesta classe de contracte, l'adreça[de la qual](https://docs.starknet.io/docs/Contracts/contract-address)estarà determinada pels tres paràmetres anteriors i l'adreça del desplegador (el contracte que va invocar la trucada del sistema).

Incloure desplegaments dins d'una transacció d'invocació ens permet fixar un preu i cobrar les tarifes dels desplegaments, sense haver de tractar els desplegaments i les invocacions de manera diferent. Per obtenir més informació sobre les tarifes de desplegament, consulteu[the docs](https://docs.starknet.io/docs/Fees/fee-mechanism#deployed-contracts).

Aquesta característica introdueix fàbriques de contracte a StarkNet, ja que qualsevol contracte pot invocar el \`deploy\` syscall, creant nous contractes.

#### Passar de "Trucada de delegació" a "Trucada de biblioteca"

La introducció de classes ens permet abordar un problema conegut en el mecanisme de trucada de delegats d'Ethereum: quan un contracte realitza una trucada de delegat a un altre contracte, només necessita la seva classe (el seu codi) en lloc d'una instància real (el seu emmagatzematge). Per tant, haver d'especificar una instància de contracte específica quan es fa una trucada de delegat és una mala pràctica (de fet, ha provocat alguns errors en els contractes d'Ethereum): només cal especificar la classe.

L'antiga crida al sistema \`delegate_call\` ara queda obsoleta (els contractes antics que ja estan desplegats continuaran funcionant, però**contractes que utilitzen \`delegate_call\` ja no compilaran**) i es substitueix per una nova crida al sistema library_call que obté el hash de classe (d'una classe declarada anteriorment) en lloc de l'adreça d'una instància de contracte. Tingueu en compte que només hi ha un contracte real en una convocatòria de biblioteca, de manera que evitem l'ambigüitat entre el contracte de convocatòria i el contracte d'execució.

#### Nous punts finals de l'API

Hem afegit dos nous punts finals a l'API, que permeten recuperar dades relacionades amb la classe:

* \`get_class_by_hash\`: retorna la definició de classe donada el hash de classe
* \`get_class_hash_at\`: retorna el hash de classe d'un contracte desplegat donada l'adreça del contracte

Tingueu en compte que per obtenir la classe d'un contracte desplegat directament, en comptes de passar pels dos mètodes anteriors, podeu utilitzar l'antic punt final \`get_full_contract\`, que es canviarà de nom en futures versions. Tots els punts finals esmentats anteriorment també es poden utilitzar des de la[StarkNet CLI](https://docs.starknet.io/docs/CLI/commands).

#### Comissions

Procedim a incorporar les tarifes a StarkNet, fent-les obligatòries (primer a Testnet, i més tard també a Mainnet) per a les transaccions ``[invoke](https://docs.starknet.io/docs/Blocks/transactions#invoke-function)\`. La transacció \`declare\` no requerirà comissions en aquest moment. De la mateixa manera, \`desplega`` transaccions tampoc no requerirà cap tarifa, però tingueu en compte que aquest tipus de transacció probablement quedarà obsolet en futures versions.

Queden diverses preguntes obertes en aquesta àrea, les més destacades són com cobrar tarifes per declaracions de contracte i desplegament de comptes StarkNet. Tractarem aquests problemes en futures versions.

### Que segueix?

Seguint el nostre full de ruta que vam anunciar</a>

febrer, ens comprometem a millorar el rendiment de StarkNet en general, i el rendiment del seqüenciador en particular, per obtenir comentaris més ràpids dels usuaris sobre les seves transaccions. A la següent versió, tenim previst introduir la paral·lelització al seqüenciador, permetent una producció de blocs més ràpida.</p> 

La propera versió principal de StarkNet se centrarà en l'estructura dels comptes de StarkNet, d'una manera similar a[ERC-4337](https://medium.com/infinitism/erc-4337-account-abstraction-without-ethereum-protocol-changes-d75c9d94dc4a). Amb això, haurem finalitzat la manera com es comporten els comptes de StarkNet, fent un altre pas important cap a l'adopció massiva!