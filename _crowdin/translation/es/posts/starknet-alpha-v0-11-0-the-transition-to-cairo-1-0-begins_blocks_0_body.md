## TL;DR

* Starknet alpha v0.11.0 está fuera y vive en Testnet
* Ahora puede desplegar e interactuar con los contratos de El Cairo 1.0 en Starknet Testnet!
* ¡Cálculo en Starknet es 5 veces más barato!
* Por primera vez, la actualización de Mainnet a Starknet alpha v0.11.0 será sometida a votación de gobernanza
* Esto marca el comienzo del período de transición antes de[Regenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)
* Desplegando El Cairo 1. los contratos en Mainnet se habilitarán sólo después de unas semanas de funcionamiento en Testnet, una vez que nos aseguramos de que el nuevo sistema funciona sin problemas.

## Introducción

¡Estamos encantados de anunciar que el tan esperado Starknet alpha v0.11.0 está en vivo en Testnet! ¿Por qué es este un gran paso para Starknet? En Starknet v0.11.0, puede declarar, desplegar y ejecutar[Cairo 1.0](https://medium.com/starkware/cairo-1-0-is-here-7e1ac8377038)contratos inteligentes. También introducimos una nueva llamada de sistema que permite una transición fluida de los contratos existentes a una implementación de El Cairo 1.0.

El Cairo 1.0 mejora Starknet en dos aspectos diferentes. En primer lugar, mejora la experiencia de desarrollo al ofrecer un lenguaje de programación más rico, que introduce (entre otras cosas) tipos/genéricos/características/manejo de errores a Cairo. En segundo lugar, El Cairo 1.0 juega un papel clave en el viaje de descentralización de Starknet: Los contratos de El Cairo 1.0 enviados en la versión 0.11.0 de Starknet compilan a Sierra. Sierra garantiza que toda ejecución del contrato es probable, lo que es una propiedad crucial en un Starknet descentralizado.

Otra importante mejora que está llegando en esta versión es una reducción de costes de cálculo de 5x. Esto hará que Starknet sea aún más amigable para aplicaciones intensivas en cálculo. Más detalles abajo.

## Obteniendo Listo para la Regenesia

Starknet alpha v0.11.0 marca el comienzo del período de transición, que permitirá la preparación por delante de la Regenesia de Starknet. El plan de Regenesis de Starknet fue[publicado](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)hace unos meses y se centra en la transición de un sistema basado en El Cairo 0 a un sistema basado en El Cairo 1.0.

Durante el período de transición, los contratos existentes de El Cairo 0 (si están actualizados) tienen la oportunidad de mantener su dirección y almacenamiento, y transición sin problemas a su implementación al Cairo 1. (véase la siguiente sección).

Como usuario de Starknet, esto significa que sólo necesita actualizar su cartera una vez el nuevo El Cairo 1. la implementación de su cuenta es lanzada (usted podrá hacerlo en cualquier momento hasta la Regenesis misma). No se espera ningún tiempo de inactividad, todas las aplicaciones del sistema continuarán funcionando como de costumbre.

Después de la Regenesis, Starknet dejará de apoyar los contratos restantes de El Cairo 0 en todo el sistema. Esto estará bien comunicado de antemano, y los desarrolladores dispondrán de tiempo suficiente para migrar sus contratos. Se espera que el período de transición dapp dure unos meses, y los desarrolladores dapp ya pueden empezar a migrar su implementación a El Cairo 1.0. Al final del período de transición, la Regenesis sucederá.

## Migración de suavizado a El Cairo 1.0

Con la transición a El Cairo 1.0, los contratos existentes en El Cairo 0 están obsoletos y ya no serán apoyados por Regenesis. Para permitir que los contratos actualizables de El Cairo 0 continúen operando, incluso después de la Regenesis, y mantén el estado construido hasta ese momento, añadimos una nueva llamada de sistema — ['replace_class'](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#replace_class_syscall). Los contratos mejorables no tienen ningún problema con actualizar a un Cairo 1. , pero el proxy subyacente (el contrato que tiene el estado real) seguirá estando atascado en la implementación de El Cairo 0. La llamada syscall \`replace_class\` resuelve este problema permitiendo que el contrato proxy reemplace su clase subyacente, i. . Mantener la misma dirección y almacenamiento, pero reemplazar la implementación.

## La computación es ahora 5x más barata!

En la actualidad, las comisiones de transacción Starknet tienen dos componentes principales: la computación y los datos en cadena. El elemento computacional de la tarifa de transacción Starknet está determinado por el costo marginal de verificar su prueba en L1 (ver la[documentación](https://docs.starknet.io/documentation/architecture_and_concepts/Fees/fee-mechanism/)para más detalles).

Originalmente, nuestros 200 m de El Cairo pasos en una prueba que requiere 5 m de gas para la verificación condujeron a una ingenua estimación de 0,05 gas por paso de El Cairo. Desde entonces, nos hemos movido a[pruebas recursivas](https://medium.com/starkware/recursive-starks-78f8dd401025)que permiten una reducción significativa del costo de verificación de L1 (solo la raíz de un árbol de recursión alcanza L1). Ahora es el momento de actualizar nuestras estimaciones originales en consecuencia: el precio de cada paso de Cairo-L2 se reducirá en 5x, y ahora costará 0. 1 gas.

Esta reducción de costes es significativa para aplicaciones intensivas en cálculo, por ejemplo, contratos de cuenta con firmas no nativas. Las transacciones simples verán una reducción menor de costes (~ 5%). En versiones futuras, manejaremos el segundo componente: los costes de datos en cadena. Una vez que se introduzcan alternativas a los datos en cadena a Starknet (conocido como Volition), la reducción de costes se sentirá en todos los ámbitos.

## Primer voto de la gobernancia Starknet

La primera fase de la Gobernanza Starknet ha lanzado (más detalles[aquí](https://medium.com/starknet-foundation/starknets-governance-first-phase-4614c7566f40)). Los miembros de la comunidad ahora pueden participar en la configuración de Starknet a través de un canal adicional, a saber, la votación de cambios de protocolo.

Las primeras fases de la Gobernanza de Starknet se centrarán en las actualizaciones del protocolo Starknet. Cada actualización de la versión Starknet se desplegará primero en Testnet; Los votantes tendrán un período de 6 días para examinar y poner a prueba la versión actualizada mientras se ejecuta en Goerli. Durante este tiempo, se abrirá una propuesta de instantánea y la comunidad podrá votar si aprueba o no la nueva versión para el despliegue de Mainnet.

Si la propuesta obtiene una mayoría de votos «sí» durante el período de votación de 6 días, la propuesta pasa y Starknet Mainnet se actualizará en consecuencia.

Starknet alpha v0.11.0 es la primera versión de Starknet que se somete a votación. La votación de la v0.11.0 del alfa Starknet estará abierta durante seis días a partir del despliegue de Testnet.

Enlaces relevantes:

* [Espacio de instantánea](https://snapshot.org/#/starknet.eth/proposal/0x00889bc468509610e516e8602f00b21ca8c32466dd4f0140eca38becb7f40bef)
* [Página de descubrimiento de la deelegación](https://delegate.starknet.io/)
* Tema de discusión alfa v0.11.0 de Starknet en el[foro de la comunidad](https://community.starknet.io/t/proposal-starknet-alpha-v0-11-0/50334)

## El Cairo 1.0 y Sierra

Sierra (**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**tion) es una representación intermedia que compila al ensamblaje del Cairo (CASM). Pre Starknet alpha v0.11.0, un desarrollador compilaría Cairo 0 en CASM y enviaría el resultado al secuenciador Starknet. Con El Cairo 1.0, los desarrolladores compilan su código a Sierra, y envían esta representación intermedia al secuenciador. El secuenciador lo compilará a CASM. Sierra está garantizada a compilar a “safe CASM”, es decir, un subconjunto de CASM que no puede fallar, haciendo que cada ejecución sea probable. Esto garantiza que el secuenciador podrá cobrar honorarios incluso por transacciones revertidas, protegiéndose de DOS. Para obtener más información, consulte[los documentos](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/).

![](https://miro.medium.com/v2/resize:fit:1400/0*KsAwaJTIsOuCsJIe)

Starknet alpha 0.11.0 usará la[versión de Cairo 1.0-alpha.6](https://github.com/starkware-libs/cairo/releases/tag/v1.0.0-alpha.6). Esta versión está cerca de[paridad de características](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)con El Cairo 0, con todas las llamadas del sistema Starknet ya presentes.

Tenga en cuenta que el secuenciador Starknet utiliza una versión de compilador fija, lo que significa que las mejoras en el idioma no estarán disponibles inmediatamente en Starknet, y sólo estarán disponibles después de una actualización de la versión de Starknet. Específicamente, mientras que las mejoras que afectan al Cairo 1. → La compilación de Sierra puede entrar en vigor inmediatamente, los cambios en el compilador Sierra → CASM (ver la documentación[](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/)para más detalles) tendrán que esperar una actualización de Starknet.

## ¿Qué otra cosa es nueva?

### Nuevo tipo de transacción — Declarar v2

Estamos agregando[un nuevo tipo de transacción](https://docs.starknet.io/documentation/architecture_and_concepts/Blocks/transactions/#declare_v2_cairo_1_0)por declarar clases de Cairo 1.0.

Esta nueva versión de transacción \`declare\` es similar a la existente \`declare\`, con dos distinciones importantes:

* El objeto de clase que se envía ahora representa Sierra en lugar de CASM, es decir, la semántica de la clase está definida por la representación de la sierra.
* El usuario también está firmando el hash de clase compilado. Este es un paso crucial hasta que la compilación Sierra→ CASM se demuestre como parte del sistema operativo Starknet.

Para obtener más detalles, consulte[los documentos](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#what_to_expect).

Desde el punto de vista del desarrollador, la experiencia sigue siendo la misma. Después de escribir su código de El Cairo 1.0, puede utilizar la CLI para declarar la clase.

**Tenga en cuenta que inicialmente, las transacciones \`declarar v2\` no serán aceptadas en Starknet Mainnet. Después de un período de experimentación en Testnet, el nuevo tipo de transacción será activado en Mainnet, y las clases Cairo 1.0 estarán disponibles.**

### Poseidon está aquí

[Poseidon](https://www.poseidon-hash.info/)es una familia de funciones hash diseñadas para tener circuitos algebraicos muy eficientes. Como tal, pueden ser muy útiles en sistemas de prueba ZK como STARKs y SNARKs. A partir de Starknet alpha v0.11.0, los desarrolladores podrán usar Poseidon. Adicionalmente, algunos de los cálculos hash que son parte del protocolo Starknet pasarán a Poseidon (específicamente, el hash de la clase, hash de clase compilado, y partes del compromiso de estado usarán Poseidon, vea[los documentos](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#poseidon_hash)para más detalles). En el futuro, más componentes internos pasarán a usar la función hash de Poseidon.

La versión exacta y los parámetros que se utilizan en Starknet pueden encontrarse[aquí](https://docs.starknet.io/documentation/architecture_and_concepts/Hashing/hash-functions/#poseidon_hash).

### Cambios variados

Al igual que las versiones anteriores de Starknet, una actualización también tiene implicaciones para nuestras APIs y otros componentes de bajo nivel. A continuación listamos los cambios y abordamos los cambios específicos que se han realizado:

* Las transacciones v0 invoke/declarar ya no están soportadas
* Los mensajes L1 de L2 ahora requieren[comisiones](https://docs.starknet.io/documentation/architecture_and_concepts/L1-L2_Communication/messaging-mechanism/#l1-l2_message_fees). Es decir, los mensajes enviados con tarifa cero no serán procesados por el secuenciador Starknet
* El formato de datos en cadena[ha cambiado](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/#on_chain_data_post_v0_11_0)
* [Cambios de API](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#api_changes)(no todos los cambios están listados aquí, por favor consulte la documentación para una lista exhaustiva) :
* añadido un nuevo endpoint \`get_compiled_class_by_class_hash\`
* \`get_class_by_hash\` devuelve las clases de El Cairo 0 / El Cairo 1.0 (dependiendo del hash solicitado)
* \`get_state_update\` tiene una nueva sección para las clases reemplazadas, y las declaraciones se dividen entre las clases Cairo 0 y Cairo 1.
* \`estimate_fee\` y \`simulate_tx\` ahora pueden omitir la validación
* Una[nueva versión](https://github.com/starkware-libs/starknet-specs/releases/tag/v0.3.0-rc1)de Starknet JSON-RPC

## ¿Qué viene después?

Ahora que se ha puesto en marcha toda la infraestructura relacionada con El Cairo 1.0, puede esperar:

* Mejoras adicionales del idioma en El Cairo 1.0
* Mejoras de rendimiento:[como se ha prometido](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de), seguimos avanzando hacia un aumento significativo del TPS. El siguiente paso en el mapa de ruta es transicionar al[secuenciador de Rust](https://github.com/starkware-libs/blockifier), que se desarrolla en abierto bajo Apache 2. licencia. El nuevo secuenciador hará uso del[CairoVM de rust](https://github.com/lambdaclass/cairo-rs)y del nodo completo[Papyrus](https://github.com/starkware-libs/papyrus), formando el Trío de Rendimiento.
* Offchain[DA](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/)! En esta versión, manejamos el componente computacional del costo de la transacción. En las próximas versiones, nos encargaremos de los costes de los datos en cadena, que hoy son el coste dominante de las transacciones medias.

![](/assets/starknet-alpha-v0.11.0-diagram.png)