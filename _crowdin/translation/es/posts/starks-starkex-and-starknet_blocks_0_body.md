### TL;DR

* STARKs permite escalar la cadena de bloques al probar eficientemente la integridad de los cálculos
* StarkEx es un motor de escalado específico de la aplicación
* StarkNet es una red de la capa 2 de contrato inteligente sin permisos

### **ARCHIVOS**

STARKs (Scalable, ARgumento Transparente del Conocimiento) son un sistema de prueba que permite la comprobación y verificación de cálculos. Permite procesar un gran cómputo, generar una prueba de la exactitud del cálculo y verificar la prueba en muy pocos pasos.

Los STARKs pueden desempeñar un papel clave en la escalabilidad del blockchain permitiendo que los cálculos grandes se hagan fuera de la cadena, donde es más barato, dejando sólo la verificación, que requiere una fracción del cálculo, que se hace en cadena. En otras palabras, al realizar muy pocos pasos en cadena, el verificador verifica la integridad de un cálculo mucho más grande que se hizo fuera de la cadena.

Usando STARKs, las soluciones de capa 2 combinan y calculan miles de transacciones, y luego verifican su validez en cadena con una única prueba de STARK. El costo del proceso en cadena se divide entre**todas**transacciones en el lote. Esto da lugar a la seguridad de Ethereum y a un bajo coste de gas por transacción.

El bajo costo computacional dará paso a una nueva clase de aplicaciones que anteriormente no eran feasibles en cadena. Estas propiedades hacen de STARKs un excelente bloque de construcción para mejorar la experiencia del usuario y reducir los costes de gas. todo manteniendo la seguridad de la capa de asentamiento de Ethereum.

StarkWare proporciona dos soluciones para escalar Ethereum con STARKs: StarkEx y StarkNet.

### **StarkEx**

[StarkEx](https://starkware.co/starkex/)es un marco de trabajo para crear soluciones de escala autorizadas específicas de la aplicación. StarkEx es una caja de herramientas de útil[la aplicación fluye](https://docs.starkware.co/starkex-v4/starkex-deep-dive/regular-flows)que los proyectos pueden utilizar para lograr una computación barata fuera de la cadena. Se genera una prueba de STARK, que atestigua la exactitud de la ejecución. Tal prueba puede incluir hasta 12.000–500.000 transacciones (dependiendo del tipo de transacción). La prueba es entonces enviada al Verificador STARK para ser aceptada en cadena. Esto significa una verificación para todas las transacciones — por un coste de gas increíblemente bajo por transacción.

Algunos ejemplos de las aplicaciones desplegadas en StarkEx son dYdX (operaciones con autores), Inmutable y Sorare (NFTs — minting y trading), DeversiFi (spot trading), y Celer (DeFi Pooling).

StarkWare añade continuamente más flujos de aplicaciones a StarkEx, siguiendo las necesidades del mercado y de sus clientes.

### **StarkNet**

*[StarkNet](https://starkware.co/starknet/)es una red de capa 2 sin permisos donde cualquier usuario o desarrollador puede implementar contratos inteligentes desarrollados en el lenguaje de El Cairo.*

Comparable con la experiencia de contrato inteligente de Ethereum, dentro del ecosistema StarkNet, su contrato puede interactuar con cualquier otro contrato desplegado en StarkNet, permitiendo así la elaboración de protocolos compuestos. Los contratos de StarkNet también pueden interactuar con los contratos de Ethereum a través de mensajes asíncronos.

A diferencia de StarkEx, donde las aplicaciones son responsables de enviar transacciones, StarkNet secuencia transacciones por lotes y las envía para ser procesadas y probadas. (Los secuenciadores de StarkNet son actualmente operados por StarkWare con planes futuros de descentralizarse.) Esto significa que una vez que las aplicaciones desplieguen sus contratos de El Cairo, no tienen que preocuparse por ejecutar una infraestructura adicional de Operador. StarkNet soporta el modo de disponibilidad de datos Rollup, lo que significa que el estado del rollup está escrito en Ethereum junto con las pruebas STARK.

Una enorme comunidad de desarrolladores está profundamente comprometida con el ecosistema StarkNet, construyendo aplicaciones, herramientas e infraestructura. Decenas de aplicaciones ya están en vivo en testnet — DeFi, juegos, votando, IA y más. Más aún, herramientas de desarrollador como explorador de bloques, entorno de pruebas local y framework, La comunidad StarkNet está construyendo SDK en varios idiomas y más. Además, las discusiones activas tienen lugar en la plataforma de[chamanes](https://community.starknet.io/), con sugerencias para mejoras, características potenciales y buenas prácticas.

### **Sumar**

Tanto[StarkEx](https://youtu.be/P-qoPVoneQA)como StarkNet son soluciones de escalado basadas en STARK. Ambos proporcionan escalabilidad, bajos costos de gas y Seguridad, pero tienen diferentes requisitos operativos y patrones de interoperabilidad. StarkEx podría ser la solución correcta para una aplicación que es en gran medida autónoma y encaja en las APIs que proporciona StarkEx. StarkNet podría ser más adecuado para un protocolo que requiere interactuar sincrónicamente con otros protocolos o tiene necesidades que van más allá de lo que StarkEx ofrece.

Los STARKs han revolucionado cómo se pueden construir aplicaciones en Ethereum. StarkEx y StarkNet continuarán permitiendo aplicaciones que anteriormente eran inviables y empujando los límites de lo que es posible en la cadena de bloques.

Este artículo fue escrito en colaboración por[Tim Gestson](https://twitter.com/IcemanTim)y el equipo[StarkWare](https://starkware.co/)