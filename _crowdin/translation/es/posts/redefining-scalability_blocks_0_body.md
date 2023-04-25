La escalabilidad de la cadena de bloques siempre ha sido un tema calentado. Casi cada red de blockchain promociona un gran número de transacciones por segundo (TPS) como punto de venta. Sin embargo, TPS no es una métrica válida con la que comparar las redes de blockchain — convirtiéndolo en un desafío para evaluar su rendimiento relativo. Es más, los números grandes de TPS suelen tener un costo — lo que plantea la pregunta: si estas redes realmente escalan, ¿O simplemente aumentan su éxito?

Por lo tanto, examinemos cómo definir escalabilidad, qué compensaciones se hacen para lograrlo, y por qué los Rollups de Validez son la solución definitiva de escalabilidad.

### No todas las transacciones son iguales

En primer lugar, tenemos que establecer nuestra afirmación de que la métrica simple y conveniente de TPS no es una medida precisa de escalabilidad.

Para compensar los nodos de ejecución de transacciones (y para disuadir a los usuarios de spamming de la red con cálculo innecesario), las cadenas de bloques cobran una comisión proporcional a la carga computacional impuesta en la cadena de bloques. En Ethereum, la complejidad de la carga computacional se mide en*gas.*Porque el gas es una medida muy conveniente de la complejidad de las transacciones, el término será usado a través de este artículo también para blockchains no Ethereum, aunque es típicamente específico de Ethereum.

Las transacciones difieren significativamente en complejidad y, por tanto, en cuanto al gas que consumen. Bitcoin, el pioneer de transacciones de par a par sin confianza, sólo soporta el script rudimentario de Bitcoin. Estas transferencias simples de dirección a dirección utilizan poco gas. Por el contrario, cadenas de contratos inteligentes como Ethereum o Solana soportan una máquina virtual y lenguajes de programación Turing completos que permiten transacciones mucho más complejas. Por lo tanto, dApps como Uniswap requieren mucho más gas.

Por eso no tiene sentido comparar el TPS de diferentes blockchains. Lo que deberíamos comparar, en cambio, es la capacidad de cómputo — o de evaluación.

Todos los Blockchains tienen un tamaño de bloque (variable) y tiempo de bloque que determinan cuántas*unidades de cálculo*pueden ser procesadas por bloque y cómo*rápido*un nuevo bloque puede ser añadido. Juntas, estas dos variables determinan el*recorrido*de una blockchain.

### ¿Qué restringe la escalabilidad?

Blockchains se esfuerzan por ser redes maximalmente descentralizadas, inclusivas. Para lograrlo, hay que controlar dos propiedades fundamentales.

#### **1. Requisitos de hardware**

La descentralización de una red blockchain está determinada por la capacidad del nodo más débil de la red para verificar la cadena de bloques y mantener su estado. Por lo tanto, los costos para ejecutar un nodo (hardware, ancho de banda, y almacenamiento) debe mantenerse lo más bajo posible para permitir que el mayor número posible de individuos se conviertan en participantes sin permisos en la red sin confianza.

#### 2**.**Crecimiento del Estado

El crecimiento del Estado se refiere a la rapidez con la que crece la cadena de bloques. Cuanto más rápido crezca un blockchain por unidad de tiempo, más rápido crecerá el blockchain. Los nodos completos almacenan la historia de la red y deben ser capaces de validar el estado de la red. El estado de Ethereum se almacena y hace referencia utilizando estructuras eficientes como árboles. A medida que el estado crece, se le añaden nuevas hojas y ramas, lo que hace que sea cada vez más complejo y consume más tiempo realizar ciertas acciones. A medida que la cadena crece en tamaño, empeora la peor ejecución de los nodos por parte de los nodos, lo que lleva a un tiempo cada vez mayor para validar nuevos bloques. Con el tiempo, esto también aumenta el tiempo total que tarda en sincronizar un nodo completo.

### Impactos detrimentales de aumento de rendimiento

#### 1. Número de nodos

Los requisitos mínimos para ejecutar un nodo y contadores de nodos son:

* Bitcoin1: espacio en disco HDD 350GB, conexión de 5 Mbit/s, 1GB RAM, CPU >1 Ghz. **Número de nodos: ~10,000**
* Ethereum2: espacio de disco SSD de 500GB+, conexión de 25 Mbit/s, 4–8GB RAM, CPU de 2–4 núcleos. **Número de nodos: ~6,000**
* Solana3: espacio de disco SSD 1.5TB+, conexión de 300 Mbit/s, 128GB de CPU de 12+ núcleos. **Número de nodos: ~1,200**

Tenga en cuenta que cuanto más grande sea la CPU, ancho de banda y requerimientos de almacenamiento para nodos requeridos para el resultado de una cadena de bloqueos, menos nodos en la red — lo que conduce a una descentralización más débil y a una red menos inclusiva.

#### 2. Tiempo para sincronizar un nodo completo

Cuando se ejecuta un nodo por primera vez, tiene que sincronizar con todos los nodos existentes, descargar, y validar, el estado de la red hasta el extremo de la cadena. Este proceso debería ser lo más rápido y eficiente posible para permitir que cualquiera actúe como un participante sin permisos del protocolo.

Realizando las pruebas de Sincronización de Nodo de Bitcoin[2020](https://blog.lopp.net/2020-bitcoin-node-performance-tests/)de Jameson Lopp y[2021](https://blog.lopp.net/2021-altcoin-node-sync-tests/)como un indicador La tabla 1 compara el tiempo que tarda en sincronizar un nodo completo de Bitcoin vs. Ethereum vs. Solana en un PC promedio de grado de consumo.

![Tabla 1. Comparación de la cadena de bloques y la sincronización de nodos](/assets/1_gmpi_1c9zipoc-znrh7b5q.png "Tabla 1. Comparación de la cadena de bloques y la sincronización de nodos")

La tabla 1 demuestra que el aumento del rendimiento lleva a tiempos de sincronización más largos porque cada vez hay que procesar y almacenar más datos.

Mientras que las mejoras en el software de nodos se realizan constantemente para mitigar el desafío del creciente blockchain (reduciendo la huella del disco, velocidades de sincronización más rápidas, resiliencia de choque, modularización de ciertos componentes, etc. , los nodos evidentemente todavía no pueden seguir el ritmo con los aumentos a seguir.

### ¿Cómo debe definirse la escalabilidad?

La escalabilidad es el término más mal representado en el espacio del blockchain. Mientras que aumentar el rendimiento es asequible, es sólo una parte del rompecabezas.

***Scalability**significa**transacciones más**para el**mismo hardware**.*

Por esta razón, la escalabilidad puede separarse en dos categorías.

#### Escalabilidad del secuenciador

La secuenciación describe el acto de ordenar y procesar las transacciones en una red. Como se estableció previamente, cualquier cadena de bloques podría trivialmente aumentar su rendimiento aumentando el tamaño del bloque y acortando su tiempo de bloque — hasta un punto en el que el impacto negativo a su descentralización se considera demasiado significativo. Pero ajustar estos parámetros sencillos no proporciona las mejoras necesarias. La EVM de Ethereum puede, en teoría,[manejar hasta ~2,000 TPS](https://twitter.com/dankrad/status/1459607325854121989), lo que es insuficiente para atender la demanda de espacio de bloques a largo plazo. Para escalar la secuenciación, Solana hizo algunas innovaciones impresionantes: aprovechando un entorno de ejecución paralelizable y un inteligente mecanismo de consenso, que permite un rendimiento mucho más eficiente. Pero, a pesar de sus mejoras, no es suficiente ni escalable. A medida que Solana aumenta su rendimiento, los costos de hardware para ejecutar un nodo y las transacciones de proceso también aumentan.

#### Escalabilidad de la verificación

*La escalabilidad de la verificación describe enfoques que aumentan sin cargar nodos con costos de hardware cada vez mayores.*Específicamente, se refiere a innovaciones criptográficas como pruebas de validez. Ellos son la razón por la cual Validity Rollups puede escalar una cadena de bloques de manera sostenible.

**¿Qué es un Rollup de Validez?**

Validity Rollups (también conocido como “ZK-Rollups”) mueven el cálculo y el almacenamiento del estado fuera de la cadena, pero mantienen una pequeña cantidad de datos en cadena. Un contrato inteligente en el blockchain subyacente mantiene la raíz del Rollup. En el Rollup, un lote de transacciones altamente comprimidas, junto con la raíz del estado actual, se envían a un Prover fuera de la cadena. La Prover calcula las transacciones, genera una prueba de validez de los resultados y la nueva raíz de estado, y la envía a un Verificador en cadena. El verificador verifica la prueba de validez, y el contrato inteligente que mantiene el estado del Rollup lo actualiza al nuevo estado proporcionado por el Prover.

**¿Cómo escala Validity Rollups con los mismos requerimientos de hardware?**

Aunque los Proveedores requieren hardware de gama alta, no afectan a la descentralización de un blockchain; porque la validez de las transacciones está garantizada por pruebas matemáticas-verificables.

Lo que importa son los requisitos para verificar las pruebas. Debido a que los datos involucrados son altamente comprimidos y ampliamente abstrajados a través del cálculo, su impacto en los nodos del blockchain subyacente es mínimo*.*

Los verificadores (Ethereum nodes) no requieren hardware de alta gama, y el tamaño de los lotes no aumenta los requerimientos de hardware. Sólo las transiciones de estado y una pequeña cantidad de datos de llamadas deben ser procesados y almacenados por los nodos. Esto permite a todos los nodos Ethereum verificar los lotes de Validity Rollup usando su hardware existente.

**Cuantas más transacciones, más barato será**

En blockchains tradicionales, más transacciones suceden, cuanto más caro sea para todos a medida que se llena el espacio de bloque — y los usuarios necesitan superarse entre sí en un mercado de comisiones para que se incluyan sus transacciones.

Para un Rollup de Validez, esta dinámica es invertida. La verificación de un lote de transacciones en Ethereum tiene un coste determinado. A medida que el número de transacciones dentro de un lote crece, el costo de verificar el lote crece a una velocidad exponencialmente más lenta. Añadir más transacciones a un lote lleva a tarifas de transacción más baratas aunque el costo de verificación por lotes aumente — porque se amortiza entre todas las transacciones dentro del lote. Los Rollups de Validez quieren tantas transacciones como sea posible dentro de un lote — para que la cuota de verificación pueda ser compartida entre todos los usuarios. A medida que el tamaño de los lotes crece hasta ser infinito, la comisión amortizada por transacción converge a cero, i. ., cuanto más transacciones en un Rollup de Validez, más barato será para todos.

dYdX, un dApp desarrollado por un Validity Rollup, suele ver tamaños por lotes de más de 12.000 transacciones. Comparar el consumo de gas de las mismas transacciones en Mainnet vs. en un Rollup de Validez ilustra las ganancias de escalabilidad:

Configurando una transacción dYdX en Ethereum Mainnet:**200,000 gas**

Ajustando una transacción dYdX en StarkEx:**<500 gas**

Otra forma de verlo: El costo principal de Validity Rollups es escalable linealmente con el número de usuarios dentro del mismo lote.

#### Por qué los derribos optimistas no son tan escalables como se puede pensar

En teoría, los Rollups ópticos proporcionan casi los mismos beneficios de escalabilidad que los Rollups de Validez. Pero hay una diferencia importante: los Rollups optimizan para el caso promedio, mientras que los Rollups de Validez optimizan para el peor caso. Debido a que los sistemas blockchain operan en condiciones extremadamente adversas, optimizar para el peor caso es la única manera de lograr la seguridad.

En el peor caso del Rollup optimista, las transacciones de un usuario no serán verificadas por verificadores de fraude. Por lo tanto, para luchar contra el fraude, el usuario tiene que sincronizar un nodo completo de Ethereum, un nodo completo L2, y calcular la transacción sospechosa por sí mismo.

En el peor caso del Rollup de Valididad, un usuario solo tendría que sincronizar un nodo completo de Ethereum para verificar la prueba de validez, salvándose a sí mismo la carga computacional.

A diferencia de los Rollup de Validez, el costo de los Rollups optimistas es lineal con el número de transacciones en lugar del número de usuarios, haciéndolas más caras.

### Pieza final del rompecabezas — Acceso sin permiso al Estado de Rollup

Para garantizar la validez de las transacciones, los usuarios necesitan ejecutar un nodo de Ethereum solamente. Sin embargo, los usuarios y desarrolladores pueden querer ver y ejecutar, el estado y la ejecución del Rollup para varios propósitos. Un nodo*indexante L2*rellena esta necesidad perfectamente. No sólo permite a los usuarios ver las transacciones en la red, pero también es un elemento crítico de infraestructura que es necesario para que funcione la infraestructura del ecosistema. Indexadores como The Graph, Alchemy, Infura; redes de Oracle como Chainlink, y exploradores de bloques, todos ellos están totalmente soportados por un nodo L2 sin permisos ni permisos.

### Conclusión

Muchos enfoques para abordar la escalabilidad de la cadena de bloques se centran falsamente en aumentar*el rendimiento*. Pero esto no tiene en cuenta el impacto de los nodos: los requerimientos de hardware cada vez mayores para procesar bloques y almacenar el historial de la red. y cómo esto inhibe la descentralización de una red.

Con la llegada de la criptografía a prueba de validez, una cadena de bloques puede alcanzar**verdadera escalabilidad**que no carga los nodos con un costo cada vez mayor y permite una amplia descentralización. Ahora son posibles más transacciones con cálculos potentes y más complejos para el mismo hardware, invertir el dilema del mercado de las comisiones en el proceso — ¡cuanto más actividad tenga en un Rollup de la Validez, más barato será!

[SwagtimusPrime.eth](https://twitter.com/SwagtimusP?t=pO0L1vGIhuC-ZgWOusQYtA&s=09)y[Louis Guthmann](https://twitter.com/GuthL)

1 de<https://bitcoin.org/en/bitcoin-core/features/requirements>

2 Desde[https://ethereum.org/es/Developopers/docs/nodes-and-clients/](https://ethereum.org/en/developers/docs/nodes-and-clients/)

3 de<https://docs.solana.com/running-validator/validator-reqs>

4 fuertemente simplificado y ajustado para los tamaños promedio de bloques dinámicos