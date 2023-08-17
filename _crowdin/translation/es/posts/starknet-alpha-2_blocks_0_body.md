### TL;DR

* StarkNet ahora apoya la composabilidad, la característica principal que define la fase de Constelaciones de StarkNet.
* Estamos lanzando un framework de pruebas para StarkNet — los desarrolladores ahora pueden probar sus contratos de forma local y efectiva.
* Esta versión incluye varias mejoras notables en el rendimiento, como el soporte para Merkle-Patricia Tries y una incorporada para operaciones de bits.
* Frontal ecosistema:

1. **Contratos estandarizados**: ¡OpenZeppelin desarrollará contratos estandarizados para StarkNet, como lo hicieron para Ethereum!
2. **EVM->Compilador de El Cairo**: el equipo de Warp @ py mind demostró la compilación del código ERC® Solididad para los contratos de StarkNet

### Fondo

StarkNet es una Validez descentralizada sin permisos (así como un “ZK-Rollup”). Anunciamos su mapa de ruta[](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)a principios de año. El[Alfa](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f)actualmente se ejecuta en una red de prueba pública de Ethereum, ya soporta el despliegue sin permisos de contratos inteligentes que implementan cualquier lógica de negocio, con mensajería L1<>L2 y datos en cadena. Además, permite a cualquier usuario enviar transacciones a la red sin permisos, estilo Ethereum.

Este lanzamiento: StarkNet Alpha 2, incluye la característica principal que nos permite avanzar de Planetas a Constellaciones: composición entre contratos inteligentes desplegados.

### Características

StarkNet Alpha 2 presenta las siguientes características:

* **Composabilidad:**StarkNet Alpha ahora soporta la interacción entre contratos inteligentes, ¡antes de lo programado! La belleza de esta actualización es que los desarrolladores pueden esperar casi la misma experiencia que Ethereum; son sincrónicas y se pueden usar como llamadas a funciones. Esperamos con impaciencia las nuevas aplicaciones que se beneficiarán tanto de la escala computacional ilimitada como de la composición de contratos, como desatado por StarkNet. Para entender cómo utilizar esta función, puede comenzar siguiendo este[tutorial](https://www.cairo-lang.org/docs/hello_starknet/calling_contracts.html). Nos encantaría escuchar tus comentarios y ver lo que estás construyendo en la discordia[StarkNet](https://discord.gg/uJ9HZTUk2Y).
* **Estructura de pruebas locales:**preguntó, y nosotros entregamos — un[mejor marco de pruebas](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/starknet/testing). Esto permitirá a los desarrolladores acelerar su desarrollo de dApp probando sus implementaciones de contrato de StarkNet e interacciones localmente — sin dependencias externas. Esta versión incluye sólo la interacción L2, las próximas versiones ampliarán la funcionalidad y la facilidad de uso. Consulta el tutorial[aquí](https://www.cairo-lang.org/docs/hello_starknet/unit_tests.html), y nos encantaría escuchar tus comentarios sobre esa función.
* **Mejoras de rendimiento:**

**Árboles de Patricia:**Hemos mejorado el diseño de StarkNet para soportar un mayor rendimiento y un menor tiempo de generación de pruebas, moviéndonos al compromiso del estado de Merkle-Patricia Tree ([documentación](https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/cairo/common/patricia_utils.py)). Este cambio permite la creación de bloques mucho más grandes, reduciendo así el costo por transacción. El paso a un compromiso estatal más sofisticado fue habilitado por Cairo, el lenguaje ZKP, un componente central del sistema operativo StarkNet.

**Operaciones en sentido Bitwise:**hemos añadido una[incorporada](https://www.cairo-lang.org/docs/how_cairo_works/builtins.html)para soportar operaciones mucho más eficientes en términos de bits en contratos de StarkNet ([documentación](https://www.cairo-lang.org/docs/reference/common_library.html#common-library-bitwise)).

* **Goerli:**StarkNet se mueve de Ropsten a[Goerli](https://goerli.etherscan.io/address/0xee02F29aE9A4988aE064940bF11954d6eafE26Ac)! Por fin hemos liberado nuestro sistema de los caprichos de los Dioses Ropsten. La Alfa 2 ahora se ejecutará sobre un entorno de desarrollo más estable.

### Ecosistema

El ecosistema StarkNet crece constantemente, y nos complace compartir las últimas noticias:

* **Contratos estandarizados**: tenemos el honor de trabajar con OpenZeppelin en la biblioteca estándar de contratos de StarkNet. Su trabajo canónico en los contratos estandarizados de Ethereum nos sirve a todos todos los días, y estamos seguros de que tendrán el mismo impacto en este caso.
* **EVM->Compilador Cairo**: El equipo Warp de la mente[demostró](https://medium.com/nethermind-eth/warp-your-way-to-starknet-ddd6856875e0)la transpilación de un contrato ERC desde el código de byte EVM a un contrato StarkNet y su despliegue en StarkNet. Este esfuerzo está avanzando rápidamente, y nuestro próximo objetivo es la transpilación de contratos inteligentes arbitrarios de Yul a Cairo.
* **Maker-on-StarkNet**: una[propuesta](https://forum.makerdao.com/t/mip39c2-sp19-adding-the-starknet-engineering-core-unit-sne-001/9745)fue enviada al Maker DAO para implementar el protocolo Maker sobre StarkNet. La primera fase propone un puente DAI de Ethereum a StarkNet con DAI minting en StarkNet a seguir.
* **StarkNet/Cairo Sales Services**: estamos comprometiendo a varias empresas de auditoría para proporcionar los servicios de auditoría de StarkNet para contratos inteligentes y programas de auditoría de El Cairo.

### Mainnet cerca de la esquina

Estamos preparándonos para el lanzamiento de StarkNet Alpha Mainnet, comenzando gradualmente con un conjunto de aplicaciones en la lista blanca. Varios proyectos están en marcha y cada día se añaden más. Para unirte a la fiesta, estás invitado a comunicarte a través de[Discord](https://discord.gg/uJ9HZTUk2Y).

**Actualización (Nov. 2021):**StarkNet Alpha está en vivo en Ethereum Mainnet