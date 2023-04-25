### TL;DR

* **Las cuotas ahora son obligatorias en Testnet, pronto en Mainnet**
* ¡El patrón de fábrica de contratos ahora es posible!
* StarkNet está introduciendo clases de contrato
* La llamada Delegate se sustituye por la llamada de biblioteca

### Introducción

¡Estamos felices de presentar StarkNet Alpha 0.9.0! Esta es una versión importante en la que StarkNet da pasos significativos hacia la madurez, con importantes adiciones tanto a la funcionalidad como al diseño de protocolos.

**Las comisiones son obligatorias**(actualmente sólo en Testnet, hasta la versión 0.9. estará en vivo en Mainnet) — cualquier persona próspera L2 debe tener su propio sistema independiente de tasas. Después de introducir los honorarios como una característica opcional en la versión 0.8. , ahora nos sentimos seguros de incluirlos como un componente central del protocolo, y hacerlos obligatorios. Más detalles abajo.

Otro cambio significativo en el nivel de protocolo es la introducción de Clases de Contrato y la separación de clase/instancia. Esto permite un uso más directo de la funcionalidad \`delegate_call\` y las implementaciones de contratos existentes, permitiendo el patrón de fábrica en StarkNet.

### Clases de contrato

Tomando inspiración en la programación orientada a objetos, distinguimos entre el código del contrato y su implementación. Lo hacemos separando los contratos en clases e instancias.

Una**clase de contrato**es la definición del contrato: su código byte de El Cairo, información de sugerencias, nombres de puntos de entrada y todo lo necesario para definir sin ambigüedades su semántica. Cada clase es identificada por su hash de clase (análogo a un nombre de clase de los idiomas OOP).

Una instancia de contrato****o simplemente un contrato es un contrato desplegado correspondiente a alguna clase. Tenga en cuenta que sólo las instancias del contrato se comportan como contratos, es decir, tienen su propio almacenamiento y son llamadas por transacciones/otros contratos. Una clase de contrato no tiene necesariamente una instancia desplegada en StarkNet. La introducción de clases viene con varios cambios de protocolo.

#### Transacción 'Denunciar'

Estamos introduciendo un nuevo tipo de transacción a StarkNet: la transacción[‘declare’](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction), que permite declarar una clase**de contrato.**A diferencia de la transacción \`deploy\`, esto no implementa una instancia de esa clase. El estado de StarkNet incluirá una lista de clases declaradas. Se pueden agregar nuevas clases mediante la nueva transacción \`declare\`.

#### Las Fábricas de Llamadas y Contratos del Sistema ‘Desplegar’.

Una vez que una clase es declarada, es decir, la transacción \`declare\` correspondiente fue aceptada, podemos desplegar nuevas instancias de esa clase. Para este fin, utilizamos la nueva llamada al sistema \`deploy\`, que toma los siguientes argumentos:

* El hash de clase
* Sal
* Argumentos del constructor

El syscall de despliegue desplegará una nueva instancia de esa clase contractual, cuya dirección[](https://docs.starknet.io/docs/Contracts/contract-address)estará determinada por los tres parámetros anteriores y la dirección del despliegue (el contrato que invocó la llamada al sistema).

Incluye implementaciones dentro de una transacción de invocación nos permite cotizar y cobrar comisiones por despliegues, sin tener que tratar implementos y invocaciones de manera diferente. Para obtener más información sobre las comisiones de despliegue consulte[la documentación](https://docs.starknet.io/docs/Fees/fee-mechanism#deployed-contracts).

Esta característica introduce las fábricas de contratos en StarkNet, ya que cualquier contrato puede invocar la \`desplegar\` syscall, creando nuevos contratos.

#### Moviendo de "Llamada Delegante" a "Llamada de Biblioteca"

La introducción de clases nos permite abordar un problema conocido en el mecanismo de llamada delegada de Ethereum: Cuando un contrato realiza una llamada delegada a otro contrato, sólo necesita su clase (su código) en lugar de una instancia real (su almacenamiento). Tener que especificar una instancia de contrato específica al hacer una llamada de delegado es por lo tanto una mala práctica (de hecho, ha dado lugar a algunos errores en los contratos de Ethereum) — sólo la clase necesita ser especificada.

La antigua llamada al sistema \`delegate_call\` ahora se vuelve obsoleta (los contratos antiguos que ya están desplegados continuarán funcionando, pero**contratos que utilizan \`delegate_call\` ya no compilarán**), y se sustituye por una nueva llamada al sistema library_call que obtiene el hash de clase (de una clase previamente declarada) en lugar de una dirección de instancia de contrato. Tenga en cuenta que sólo un contrato real está involucrado en una llamada bibliotecaria, por lo que evitamos la ambigüedad entre el contrato de llamada y el contrato de implementación.

#### Nuevos puntos finales de API

Añadimos dos nuevos puntos finales a la API, permitiendo la recuperación de datos relacionados con la clase:

* \`get_class_by_hash\`: devuelve la definición de la clase dado el hash de la clase
* \`get_class_hash_at\`: devuelve el hash de la clase de un contrato desplegado dada la dirección del contrato

Tenga en cuenta que para obtener la clase de un contrato desplegado directamente, en lugar de pasar por los dos métodos anteriores puedes usar el antiguo punto final \`get_full_contract\`, que será renombrado en versiones futuras. Todos los endpoints mencionados anteriormente también se pueden utilizar en la[CLI StarkNet](https://docs.starknet.io/docs/CLI/commands).

#### Cuotas

Procedemos a incorporar las comisiones a StarkNet, haciéndolas obligatorios (primero en Testnet, y luego también en Mainnet) para las transacciones de ``[invoke](https://docs.starknet.io/docs/Blocks/transactions#invoke-function)\` . La transacción \`declare\` no requerirá comisiones en este punto. Del mismo modo, las transacciones \`deploy`` tampoco requerirán una comisión, sin embargo, tenga en cuenta que este tipo de transacción será probablemente obsoleto en versiones futuras.

Quedan varias preguntas abiertas en este ámbito, las más destacadas son la forma de cobrar los honorarios por las declaraciones de contratos y el despliegue de cuentas StarkNet. Abordaremos estas cuestiones en futuras versiones.

### ¿Qué sigue?

Siguiendo nuestro mapa de ruta que[anunciamos en febrero](https://medium.com/starkware/starknet-on-to-the-next-challenge-96a39de7717), estamos comprometidos a mejorar el desempeño de StarkNet en general. y el rendimiento del secuenciador en particular, para obtener una retroalimentación más rápida de los usuarios sobre sus transacciones. En la siguiente versión, tenemos previsto introducir paralelización en el secuenciador, permitiendo una producción de bloques más rápida.

La próxima versión importante de StarkNet se centrará en la estructura de las cuentas de StarkNet, de una manera similar a[ERC-4337](https://medium.com/infinitism/erc-4337-account-abstraction-without-ethereum-protocol-changes-d75c9d94dc4a). Con esto, habremos finalizado la forma en que se comportan las cuentas de StarkNet ¡dando otro gran paso hacia la adopción masiva!