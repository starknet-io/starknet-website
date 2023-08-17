### TL;DR

* *StarkNet Alpha se lanza en Mainnet Ethereum en noviembre*
* Ahora es el momento de construir sobre StarkNet

### Una breve historia

Anunciamos nuestra visión de[StarkNet](https://starkware.co/product/starknet/)a principios de año: llevar una escalabilidad masiva a Ethereum preservando al mismo tiempo la seguridad de L1. interacciones sin permisos y descentralización.\
Lanzamos**[StarkNet Alpha](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)**en una red de pruebas pública en junio. Esta versión soporta contratos inteligentes de cómputo general sin permisos. Lo hemos actualizado dos veces: primero a**Alfa 1**— proporcionando[L1<>L2 y datos en cadena](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), y luego a**Alfa 2**— soportando[composibilidad](https://medium.com/starkware/starknet-alpha-2-4aa116f0ecfc).

StarkNet Alpha 2 ahora soporta contratos inteligentes compuestos de cómputo general en un estado similar a Ethereum, con la capacidad de los contratos L1 y L2 de interactuar entre sí. Lea más[aquí](https://www.cairo-lang.org/docs/hello_starknet/index.html).

### ¿Qué es StarkNet Alpha en Mainnet?

StarkNet Alpha en Mainnet soportará características similares a las disponibles actualmente en la red pública de pruebas Goerli.

#### **Qué esperar**

Debido a que StarkNet todavía está en desarrollo, queremos introducir capacidades de forma gradual y garantizar que las expectativas de los desarrolladores se cumplan en cada paso. Dos aspectos especialmente importantes que nos gustaría destacar son:

* **Despliegue inteligente permitido**: Seguiremos el libro de reproducción sensato introducido por nuestros programas de Rollup Optimistico: comenzar con el despliegue*permitido*del contrato. El protocolo que especifica cómo solicitar la inclusión de su contrato inteligente en esta lista blanca inicial será publicado en las próximas semanas.
* **Sin garantía de compatibilidad con versiones anteriores**: esperamos que la futura transición de StarkNet Alpha a StarkNet Beta incluya regenesis del estado. La red comenzará desde el bloque 0, y las aplicaciones tendrán que redesplegar sus contratos. Además, los desarrolladores y usuarios deben tener en cuenta que la Beta StarkNet esperada podría no ser compatible con StarkNet Alpha, e. . Los desarrolladores pueden necesitar modificar sus contratos. Obviamente, trataremos de permitir una transición fácil para las aplicaciones, con los cambios mínimos requeridos.

#### Características adicionales cercanas

Como parte de la transición de StarkNet Alpha de la red de pruebas a Mainnet, lo haremos:

1. Añadir constructores a los contratos.
2. Mejorar el framework de pruebas.
3. Para bloques y transacciones, pase de usar un ID a usar un hash.

Tenemos previsto continuar con el despliegue de nuevas características en una cadencia regular, tal como hemos hecho en la red de pruebas pública. A corto plazo, planificamos las siguientes actualizaciones:

1. Contratos de cuentas y Contratos de Token — abriendo el camino para que las aplicaciones DeFi interactúen con StarkNet de la manera que están familiarizadas.
2. Funcionalidad del contrato mejorada — apoyando la mejora de contratos y eventos.
3. Warp: el compilador Solididad a El Cairo desarrollado por la mente permitirá una transición sin problemas de contratos inteligentes de Solididad a contratos inteligentes de StarkNet.
4. Signaturas de Ethereum: el soporte nativo de ECDSA a través de secp256k1 permitirá una integración más fácil con las billeteras existentes.
5. Nodo Completo StarkNet: un Nodo Completo permitirá a los usuarios participar en la red con requisitos de hardware a la par con los de un Nodo Completo Ethereum.

#### Mecanismo de cuota

El mecanismo de tasas se activará tan pronto como los contratos de cuenta y los contratos simbólicos se añadan a StarkNet Alpha.

Todas las transacciones enviadas a StarkNet incurrirán en una comisión diseñada para cubrir los costos de L1 y fuera de la cadena. La tarifa se cobrará inicialmente en ET. El costo de una sola transacción disminuirá a medida que StarkNet aumente su escala (como es el caso de todos los sistemas basados en STARK existentes). Al fabricar los mecanismos de comisión iniciales, favorecemos la simplicidad en lugar de fijar precios precisos a las transacciones según los recursos que consumen. Esperemos que este mecanismo se refine y mejore con el tiempo.

Con el objetivo de hacer de StarkNet una red sostenible y de mitigar a sus operadores y desarrolladores, una parte de los ingresos recaudados por las comisiones se distribuirán a desarrolladores de aplicaciones y desarrolladores del núcleo StarkNet.

#### Seguridad

El modelo de seguridad de StarkNet Alfa en Mainnet seguirá el modelo actual en testnet:

* Cada transición estatal está respaldada por una prueba de STARK, por lo que se garantiza que sea válida.
* Todos los datos del estado serán publicados en cadena para que el estado sea totalmente constructible a partir de L1.
* Habrá una sola secuencia.
* La red se actualizará sin demora de tiempo.

### El ecosistema StarkNet está creciendo

La apertura de StarkNet al mundo atrajo una ola masiva de desarrolladores interesados en aprender El Cairo y desarrollarse sobre StarkNet. Ellos proporcionaron comentarios invaluables, y fue un verdadero placer ver discusiones vibrantes en el StarkNet[Discord](https://discord.gg/uJ9HZTUk2Y).

Además, StarkNet está siendo desarrollado no sólo por el equipo StarkWare, sino también por algunos de los equipos más fuertes del ecosistema blockchaine:

* La mente está trabajando en dos proyectos:

1. **[Warp](https://github.com/NethermindEth/warp)**: un compilador Solidario a El Cairo

2. **[Voyager](https://voyager.online/)**: un explorador de bloques StarkNet

* Open Zeppelin está trabajando en una implementación de[Contratos Estándar](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)para StarkNet y también comenzó a trabajar en el entorno de un desarrollador:[Nilo](https://github.com/martriay/nile).
* ShardLabs está trabajando en un[plugin StarkNet HardHat](https://github.com/Shard-Labs/starknet-hardhat-plugin)y en un mejor framework de pruebas.
* El equipo de Erigon está trabajando en ampliar su Ethereum Full Node para apoyar a StarkNet (nombre en código: Fermion). Ellos están trabajando con nosotros en el diseño de los mecanismos básicos de StarkNet.
* Equilibrium está trabajando en una implementación de nodo completo StarkNet en Rust,
* Servicios de auditoría del Cairo: En los próximos meses, ABDK, ConsenSys Diligence, Peckshield, y Trail of Bits llevarán a cabo auditorías del Cairo.
* Auditorías de StarkNet: comenzamos con la auditoría de los cimientos de la red:

1. **CryptoExperts**realizará una auditoría del Verificador de Solidez de El Cairo.
2. Una prueba formal de**LEAN**de las especificaciones de El Cairo fue completada y publicada recientemente como un[papel](https://arxiv.org/abs/2109.14534)y un repositorio[de GitHub](https://github.com/starkware-libs/formal-proofs).

¡Espere muchas más colaboraciones interesantes que se publicarán en los próximos meses!

### Los STARKs están escalando hoy

Nos acercamos al lanzamiento de StarkNet Alpha con confianza, ya que StarkEx, nuestro SaaS independiente de escala, ha demostrado cómo los STARKs pueden escalar masivamente las aplicaciones Ethereum. Lanzamos StarkEx por[dYdX](https://dydx.exchange/)(contratos perpetuales),[DeversiFi](https://www.deversifi.com/)(pagos y operaciones al contado), así como para[Inmutable](https://www.immutable.com/)y[Sorare](https://sorare.com/)(NFT minting and trading). Vimos sus costos de gas/tx reducidos en 100X–200X, a unos 650 gas/tx en Validium (datos fuera de cadena), y 1100 gas/tx para un ZK-Rollup.

Hasta la fecha, StarkEx ha saldado $80B en operaciones y más de 27M transacciones, lo que ha eclipsado cualquier otra solución de L2 — y todas ellas combinadas.

### Actuar ahora

Nunca ha habido un mejor momento para unirse al creciente ecosistema StarkNet construyendo ya sea tu próximo dApp o herramientas útiles para desarrolladores.

Te invitamos a:

1. Únete a la[Discord StarkNet](https://discord.gg/uJ9HZTUk2Y), donde puedes conocer e involucrar a la comunidad StarkNet.
2. [Comience a aprender](https://www.cairo-lang.org/docs/hello_starknet/index.html)cómo escribir contratos inteligentes de StarkNet.
3. [DM nosotros](https://twitter.com/StarkWareLtd)— nuestro equipo está deseoso de ayudar a sus ideas e iniciativas a cobrar vida.

**Actualización (Nov. 2021):**StarkNet Alpha está en vivo en Ethereum Mainnet