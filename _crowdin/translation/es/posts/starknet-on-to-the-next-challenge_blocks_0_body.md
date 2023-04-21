### TL;DR

* Estamos construyendo StarkNet en pasos, empezando por establecer**usabilidad**, luego mejorando**rendimiento**y, finalmente, pasando a**descentralización**
* Hemos logrado nuestro primer objetivo: la usabilidad. Esto significa que entregamos el cálculo general en un estado similar al etéreo (años antes de que se creyera posible)
* Ahora estamos pasando a la segunda etapa de nuestro plan de construcción de 3 partes: rendimiento, centrado en el rendimiento, costo de transacción y latencia.
* Siguiente: Descentralización

Solo un año después de que se anunciaran los planes para[StarkNet](https://starknet.io/), la plataforma tiene una muy buena funcionalidad. La comunidad de desarrolladores está floreciendo más allá de nuestras expectativas, y proporcionando una constante floración de nuevos proyectos aborígenes de L2.

Nuestra prioridad durante el último año era permitir exactamente esto, al crear un StarkNet funcional con una gama de características en rápido expansión, que permite a los desarrolladores bucear directamente.

Lo han hecho en gran número. Un buen barómetro es el recuento de descargas para la librería JavaScript de[StarkNet](https://www.starknetjs.com/): ya en 5k desde que está disponible hace 4 meses.

Sin embargo, mientras StarkNet entrega la magia de la compresión que prometimos en estos momentos. está lejos de ser capaz de hacerlo para suficientes dApps con suficiente rendimiento, y esto puede ser una fuente de frustración para los desarrolladores a corto plazo.

Nuestra tecnología básica probada en la batalla, STARK-probando muchas transacciones y comprimiendo las pruebas, debe ir precedida de un batch o secuenciamiento de las transacciones. Es un proceso que el equipo StarkWare ya ha perfectado una vez para el motor de escalado[StarkEx](https://starkware.co/starkex/), y actualmente estamos trabajando en hacerlo de nuevo para las necesidades de StarkNet.

Ahora que muchos de nuestros objetivos de usabilidad han sido alcanzados, estamos desplazando el foco para que esta sea nuestra máxima prioridad. Todo es parte de nuestro mapa de ruta de 3 etapas:**usabilidad**, seguido por el rendimiento****de la red y luego**descentralización**. Un año en, queremos darle un vistazo bajo el capó — un resumen de las piezas que hay en su lugar y lo que todavía es un trabajo en progreso.

### La historia tan lejos

StarkNet Alpha fue lanzado a la red pública de pruebas en junio, y a Mainnet en noviembre. En el momento del despliegue de Mainnet, StarkNet ya estaba entregando el cómputo general en un estado parecido a Ethereum, que se creía que estaba a años de distancia.

A lo largo del desarrollo hemos elegido un enfoque que primero se centró en las funcionalidades más importantes y las liberó tan pronto como estaban disponibles, esencialmente compartiendo el proceso de evolución con la comunidad. StarkNet está lejos de estar completo pero incluso ahora, los desarrolladores ya pueden construir aplicaciones significativas y complejas. Hoy tenemos cientos de desarrolladores[construidos en StarkNet,](https://starkware.notion.site/Projects-Building-on-StarkNet-a33dee55778a4515a9be9bdae02ee682)decenas de dApps, y más de una docena de equipos externos que desarrollan herramientas e infraestructura para el ecosistema StarkNet.

Una cadena de actualizaciones ha proporcionado muchas características importantes, incluyendo mensajería L1<>L2, datos en cadena y soporte para composabilidad, soporte de eventos, mecanismo de comisión básico, contratos de actualización, abstracción de cuentas, framework de pruebas, herramientas de desarrollo, confirmación rápida, número de bloque, marca de tiempo de bloqueo, soporte para contratos de cuenta.

La comunidad de desarrolladores está profundamente interesada en StarkNet y en dar forma a su desarrollo. Ya se han introducido características basadas en la retroalimentación del desarrollador. La adopción podría muy bien superar el aumento de los resultados, razón por la cual este impulso es nuestra gran prioridad ahora.

### Siguiente paso

Ahora que hemos alcanzado la usabilidad, es hora de mejorar el rendimiento del sistema. El sistema, en su estado actual, es capaz de apoyar un alcance limitado de las transacciones. La manera de resolverlo es mejorando el rendimiento del nodo secuenciador, que es el equivalente de un minero de StarkNet. Es la “máquina” que secuencias las transacciones después de ser enviadas. Cuando esto se optimiza, por medio del cielo rocet.

Con este fin, estamos analizando simultáneamente dónde están los cuellos de botella y abordándolos uno por uno. Actualmente, todos los cuellos de botella están relacionados con el proceso de secuenciación, que viene antes de invocar a los proverbios de STARK. El prover-stack probado por la batalla está listo para soportar StarkEx-like throughhput en StarkNet.

Esperamos que la optimización del secuenciador sea un proceso que dure unos pocos meses, con mejoras graduales a lo largo de H1/22. Nuestro objetivo es alcanzar, a principios de la segunda mitad de 2022, al menos un orden de magnitud mayor TPS que Ethereum, a un costo que sea al menos dos órdenes de magnitud inferiores a las de Ethereum. Y eso es sólo el comienzo.

Hay buenas razones para que se necesite esta fase de optimización. y que StarkNet no fue lanzado con un secuenciador ya optimizado: StarkNet fue capaz de lograr la usabilidad tan rápidamente porque tenemos un buen comienzo. En lugar de partir de cero y construir un secuenciador totalmente nuevo, usamos el batcher de StarkEx como componente central.

Esta fue una gran manera de construir. No se limitó a entregar rápidamente; significó que estamos seguros de que construimos sobre cimientos sólidos. StarkEx esencialmente ha probado la funcionalidad básica que impulsa a StarkNet, ya que alcanzó cientos de miles de millones de dólares en el comercio acumulado.

[StarkEx](https://starkware.co/starkex/)es el motor de escalado para algunos de los dApps más exitosos usando L2: dYdX (contratos perpetrados), DeversiFi (operaciones al contado y pagos), así como para Inmutable y Sorare (NFT minting y trading).

Pero el secuenciador construido para ellos y otros clientes StarkEx sólo puede llevar StarkNet hasta ahora. Cada uno de ellos maneja ampliamente el mismo tipo de transacción cada día. StarkNet es todo sobre**cálculo general**, por lo que sus necesidades están abiertas. Cuando su secuenciador toma transacciones del mempool, vienen en varias formas y tamaños. Además, StarkNet es también una red abierta que significa que hay una sobrecarga computacional adicional que no se encuentra en StarkEx.

El reto actual, es decir, optimizar el secuenciador para estas nuevas necesidades, es una tarea significativa, pero tenemos una fuerte comprensión de la ruta necesaria, sobre la base de nuestro exitoso desarrollo StarkEx.

### Siguiente: Descentralización

StarkNet va a ser una red totalmente descentralizada sin permisos, completa con las elecciones de líderes y los mecanismos de gobernanza. Alcanzar este objetivo se convertirá en nuestro principal foco una vez que se produzcan cubos y caigan los costes, y esperamos tener una primera versión descentralizada para finales de 2022. Anticipamos públicamente compartir nuestro plan de descentralización en los próximos meses.

Así como el actual avance limitado representa una fase intermedia en el desarrollo de StarkNet, el nivel actual de participación de StarkWare también es temporal. Nos vemos como una especie de andamios, que cumple una función importante durante la fase de construcción, pero que se revierte a su debido tiempo.

El desarrollo de nodos completos, un primer paso emocionante hacia la descentralización, ya está en marcha. Los nodos completos permitirán a cualquiera mantener y verificar el estado de la red localmente, llevando un seguimiento de exactamente lo que está sucediendo. Tres equipos —*Erigon, mind, y Equilibrium*— están desarrollando nodos completos, y potencialmente más comenzarán el desarrollo en el futuro.

En un desarrollo paralelo, se están llevando a cabo preparativos para la secuencia abierta y la demostración de software al público. Cualquiera podrá participar como secuenciador o proverbio en StarkNet.

Se desarrollará una estructura para animar a la gente a participar, lo que incluirá recompensas económicas. Los honorarios de StarkNet pasarán, en parte, a secuenciadores y promotores.

A medio plazo esperamos que nuestro secuenciador esté disponible para terceras partes, y a largo plazo esperamos ver también varios equipos construyendo secuenciadores que estarán secuenciando para StarkNet.

### Siempre mejorando, escuchando para siempre

A medida que los cambios de enfoque se conviertan en el próximo desafío, seguiremos mejorando los logros del pasado. Y para seguir trabajando en todas las áreas de[StarkNet](https://starknet.io/), nuestros oídos siempre estarán abiertos a toda la comunidad de desarrolladores. Así que participe en la discusión, a través de[Discord](https://discord.com/invite/uJ9HZTUk2Y), la comunidad[StarkNet Shamans](https://www.google.com/search?client=safari&rls=en&q=StarkNet+Shamans&ie=UTF-8&oe=UTF-8).[Twitter](https://twitter.com/Starknet_Intern), u otra ruta, y ayudar a dar forma al futuro de la escalada de blockchain.