### TL;DR

DApps nativos L2 ahora pueden florecer sin restricciones tradicionales de gas L1

### Introducción

Los desarrolladores de dApp siempre se han enfrentado a severas restricciones debido al límite de gas de bloque de Ethereum (L1). Limita no solo*cómo*funcionan esos dApps, sino también*qué*son capaces de hacer esos dApps.

La capa 2 (L2) ofrece a los desarrolladores de dApp un campo verde computacional, libre de esta capa de cristal de gas. Creemos que la gran mayoría de dApps será L2 nativa en un par de años: se habrán construido desde el principio en L2 para beneficiarse de este grado de libertad computacional.

### Límite de gas L1 forma dApps nativos L1

*Consideremos dos ejemplos de dApps populares cuyo diseño está formado profusamente por las restricciones de gas L1: AMMs y los agregadores DEX.*

Un fabricante Automatizado de Mercado (AMM) es esencialmente una aproximación de gas bajo de una bolsa basada en libros. En lugar de permitir a los usuarios colocar y eliminar límites, detener pérdidas, o una variedad de otros tipos de ordenes, Los MAMs L1 sólo permiten un intercambio simple con una piscina central subyacente de liquidez — para acomodar el intenso costo computacional de L1.

Los agregadores DEX idealmente necesitan acceso a todas las piscinas de liquidez posibles, incluso la piscina de liquidez más pequeña, para aprovechar los mejores precios para los usuarios. Sin embargo, debido al coste de la consulta de muchos pools diferentes, no vale la pena negociar sobre el L1. Está justificado el acceso a las piscinas y el pago de las tasas de transacción asociadas sólo cuando las piscinas de liquidez tengan liquidez suficientemente profunda. En una línea similar, Las liquidaciones en préstamo/préstamo y otras dApps basadas en garantías podrían ser mucho más precisas si la diferencia entre el descuento de liquidación y la tasa de transacción fuera mucho más pequeña.

La funcionalidad y diseño limitados de muchos dApps L1 directamente resultan de desarrolladores que optimizan su código para cumplir las restricciones de gas de Ethereum. ¿Por qué, pueden preguntarse, decimos Ethereum? ¿No se puede ejecutar el código de solidez en muchos L1 e incluso en algunos L2? De hecho, pero de estos, Ethereum es el medio ambiente más caro (y, por lo tanto, seguro). DApps de solidez están diseñados para “el enlace más caro”, es decir, Ethereum. Por lo tanto, no se benefician de la ventaja computacional que ofrecen los entornos de ejecución menos costosos. Para desbloquear la funcionalidad iniciada diseñando un dApp para el entorno de ejecución más caro, el código de dApp debe ser adaptado.

### El surgimiento de dApps nativos L2

Validity Rollups (también conocido como ZK-Rollups) permiten un cálculo extremadamente barato. A diferencia de cualquier otra solución de escala — el cálculo de L2 puede crecer exponencialmente con sólo un pequeño impacto en el costo de gas de verificación en cadena. Además, un Rollup de Validez procesa entradas a los cálculos — “datos de testigos” — sin consumir recursos L1 adicionales, permitiendo cálculos con muchas entradas.

La codificación de aplicaciones nativamente en L2 en**[El Cairo](https://www.cairo-lang.org/)**(un lenguaje completo para escalar dApps a través de pruebas STARK) desbloquea un amplio ámbito de posibilidades para los desarrolladores. Les permite utilizar cantidades significativas de datos, tanto computacionales como de testigos, que no podían usar antes.

Exploremos dApps tan nativos de L2 y sus nuevas capacidades enriquecidas.

#### DeFi

Antes de embarcar en StarkEx, el dYdX de StarkWare operaba como un dApp L1 en Ethereum. Ofreció a sus usuarios apalancamiento de x10 sobre activos sintéticos y posiciones soportadas con un único activo sintético. Reconstruir dYdX en El Cairo como un dApp nativo L2 proporciona una plataforma DeFi dramáticamente más escalable, más barata y eficiente:

* Actualizaciones de precios de Oracle: Estas actualizaciones típicamente incluyen docenas de precios y firmas de diversas fuentes para calcular una mediana. Un Rollup de Validez proporciona una escala exponencial de la lógica del oráculo de precios (verificación de la firma y cálculo del precio mediano) — sin informar de los datos de los testigos a L1. Compara esto con la implementación de DYdX L1, donde cada actualización de precio costó alrededor de 300K gas y fue. por lo tanto, limitado en su frecuencia y el tamaño del conjunto de reporteros de precios.
* Apalancamiento: Un indicador de precio preciso permite a dYdX estimar el riesgo de una posición en tiempo real y ofrecer un mayor apalancamiento para los usuarios. Gracias a las actualizaciones de precios de oráculo, dYdX aumentó el apalancamiento de x10 en L1 a x25 en L2.
* Margen cruzado: Con dYdX en L2, los creadores de mercado pueden realizar pedidos largos o cortos en muchos activos utilizando el mismo colateral. ¡El acuerdo medio sobre el L2 de dYdX implica posiciones con más de 10 activos sintéticos diferentes! En comparación, tener esta capacidad de margen cruzado en el L1 habría más del doble del costo de gas en cadena.

#### Juegos y arte generativo

La actual cosecha de juegos nativos de L1 normalmente almacena activos de juego en L1 mientras implementa toda la lógica del juego en una aplicación confiable fuera de cadena. Este patrón es el resultado directo de las limitaciones de gas de L1. Gracias a un cálculo barato en L2, los desarrolladores de DApps de juegos nativos de L2 ahora pueden implementar la lógica del juego en un contrato inteligente y manipular los activos del juego sin confianza, en lugar de almacenarlos. Traer la lógica del juego al reino de la computación sin confianza es un paso significativo hacia un mundo mucho más rico de juegos basados en blockchain. Los juegos nativos L2 ya se están desarrollando en StarkNet, la red sin permisos de StarkWare (por ejemplo,[Dope Wars](https://github.com/dopedao/RYO)e[Influencia](https://medium.com/influenceth/influence-to-launch-on-starknet-afd3c26ea25a)).

Pero, ¿cuán complejo puede ser realmente un juego basado en blockchain? Por ejemplo, manejar gráficos directamente en cadena parece imposible —[o ¿es](https://twitter.com/guiltygyoza/status/1449637155001798657)? Resolver ecuaciones diferenciales y simular movimiento planar en un contrato inteligente representa un paso significativo hacia lo que en el futuro podría ser un motor de física de blockchain. Las implicaciones son altisonantes. Imagina un juego multijugador competitivo como Counter-Strike. Si se puede simular la lógica del juego en cadena, muchos temidos hacks se convertirían en cosa del pasado, los jugadores podrían disfrutar de un juego que demostrara ser justo.

El Arte Generativo utiliza computación, aleatoría y otros datos para crear arte basado en blockchain. Cuanto más compleja sea la lógica y el cómputo que un artista puede usar sin confianza, más opciones existen para generar piezas únicas de arte. [WhaleStreet DAO](https://blog.whalestreet.xyz/whalestreet-dao-to-launch-gen-art-ecosystem-on-ethereum-with-starknet/)lanza uno de los primeros proyectos Gen Art en StarkNet, aprovechando los recursos computacionales ilimitados de StarkNet.

### ¿Qué sigue?

Validity Rollups — y StarkEx y StarkNet impulsados por Cairo, en particular — proporcionar un entorno en el que uno puede desarrollar y operar dApps que consumen mucho cálculo o datos de testigos. Con todos los beneficios de la tecnología distribuida de vanguardia, predecimos un futuro inmenso y emocionante para L2-native dApps.

¿Qué puede**crear con el cálculo general soportado por la composición, la falta de confianza y la descentralización?