### TL;DR

* StarkNet Alpha 0.8.0 presenta la versió inicial del mecanisme de comissions (opcional fins a StarkNet Alpha 0.9.0.)
* La nova API demana estimar la tarifa de transacció per obtenir el rastre de la transacció, permetent una millor visibilitat i capacitats de depuració
* Millores de rendiment al seqüenciador StarkNet
* Cancel·lació de missatges L1→L2

### Introducció

Tal com es comparteix al nostre full de ruta[](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51), després de l'última incorporació a la funcionalitat i característiques de StarkNet, la nostra atenció es desplaça cap a les millores de rendiment i el disseny de protocols (incloses les tarifes, l'abstracció de comptes, la descentralització, etc.). StarkNet Alpha 0.8.0 inicia el procés d'afegir comissions de transacció i millorar el rendiment del seqüenciador.

El full de ruta per a StarkNet inclou un mecanisme de tarifes i, en avançar amb aquesta versió, estem fent un pas important més a prop del rendiment total de la plataforma.

Afegir el mecanisme de tarifa és una part essencial del disseny de rendiment de StarkNet. Sense una tarifa mínima, correm el risc d'enfrontar-nos a transaccions infinites: la qual cosa faria impossible que el sistema tingués rendiment, independentment de les optimitzacions del seqüenciador.

### Característiques

#### Suport a la tarifa

StarkNet Alpha ara admet la primera versió del mecanisme de comissions. Aquest mecanisme és essencial fins i tot en aquesta fase inicial, i fins i tot a Testnet, per dos motius principals:

1. Permet als desenvolupadors començar a optimitzar els seus contractes segons el model de costos de StarkNet.
2. És una contrapartida crucial per millorar el rendiment del sistema, ja que evita el correu brossa enviant innombrables transaccions.

Aquesta versió introdueix els components necessaris perquè els desenvolupadors incorporin el pagament de quotes a les seves eines i aplicacions. Els desenvolupadors ara poden estimar la tarifa de transacció trucant al punt final \`estimate_fee\` i fer el pagament de la tarifa com a part de l'execució de la transacció.

Atès que aquesta funció no és compatible amb versions anteriors, no farem complir el pagament de la quota en aquest moment, sinó només a partir de la versió 0.9.0, que es publicarà d'aquí a unes setmanes. Aquesta transició gradual permetrà als usuaris i desenvolupadors adaptar-se al nou model.

#### Estructura de tarifes el 0.8.0

El 0.8.0, les tarifes es cobraran només segons la complexitat computacional, mentre que StarkWare encara subvencionarà el cost de la comunicació L1. Actualitzarem el mecanisme de tarifes per incloure aquests costos d'operació i comunicació L1 durant les properes setmanes. El pagament es cobrarà atòmicament amb l'execució de la transacció a StarkNet L2. Consulteu la documentació</a>de tarifes

per obtenir una descripció detallada.</p> 

És important tenir en compte que treballarem estretament amb la comunitat de desenvolupadors per ajustar i desenvolupar el mecanisme de tarifes a mesura que evolucioni StarkNet.



#### L2 Goerli ETH Faucet

Vam llançar el[L2 Goerli ETH Faucet](https://faucet.goerli.starknet.io/)per permetre als usuaris pagar tarifes a Testnet. Aquesta aixeta envia petites quantitats de L2 Goerli ETH a l'adreça del vostre compte a StarkNet Goerli que podeu utilitzar per pagar la quota de transacció.



#### Trace API

Hem afegit la possibilitat de recuperar el rastre d'execució d'una transacció a l'API de StarkNet. Dins del rastre de la transacció, totes les trucades internes són visibles, acompanyades d'informació com els recursos d'execució consumits, el valor de retorn, els esdeveniments emesos i els missatges enviats. Aquesta nova trucada simplifica la comprensió del comportament d'un contracte o la depuració de transaccions. A més, eines com[Voyager](https://voyager.online/)o[StarkTx](https://starktx.info/)podrien incorporar aquestes dades; proporcionar als usuaris una anàlisi més detallada, en particular per a la interacció amb el contracte del compte.

Per obtenir el rastre, podeu utilitzar \`get_transaction_trace\` a la CLI de StarkNet. Per veure un exemple de com utilitzar-lo, consulteu el tutorial[](https://www.cairo-lang.org/docs/hello_starknet/cli.html?#get-transaction-trace).



#### Cancel·lació del missatge

Una característica addicional d'aquesta versió és la possibilitat de cancel·lar missatges L1→L2. Per què és útil això? Imagineu un escenari en què un usuari transfereix un actiu de L1 a L2. El flux comença amb l'usuari enviant l'actiu a un pont StarkNet i la generació de missatges L1→L2 corresponent. Ara, imagineu-vos que el consum de missatges L2 no funciona (això podria passar a causa d'un error al contracte del Caire de dApps). Això podria provocar que l'usuari perdi la custòdia del seu actiu per sempre.

Per mitigar aquest risc, permetem que el contracte que va iniciar el missatge L1→L2 el cancel·li, després de declarar la intenció de fer-ho i esperar un temps adequat (vegeu la documentació[](https://starknet.io/l1-l2-messaging/#cancellation)).



### Millores de rendiment

Aquesta versió disminueix significativament el temps que necessita un seqüenciador per executar un flux de transaccions entrants al Caire.

Aquest és només el primer pas! La nostra següent fita de rendiment important, que s'introduirà aviat (0.9.0), és l'execució paral·lela del seqüenciador, i s'esperen moltes més optimitzacions en el futur.



### Ara què?

Llegeix la documentació tècnica[aquí](https://starknet.io/documentation/fee-mechanism/).

Aneu a[starknet.io](https://starknet.io/), per obtenir tota la informació, documentació, tutorials i actualitzacions de StarkNet.

Uneix-te a[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)per obtenir suport per a desenvolupadors, anuncis d'ecosistema i formar part de la comunitat.

Visiteu[StarkNet Shamans](https://community.starknet.io/)per estar al dia i participar en totes les discussions de recerca de StarkNet.