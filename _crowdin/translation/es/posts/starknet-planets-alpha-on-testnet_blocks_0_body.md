### **TL;DR**

* [StarkNet Planets Alpha](https://voyager.online/)- el primer paso en nuestro camino hacia Mainnet - ¡ahora está en vivo en Testnet!
* [StarkNet](https://starkware.co/product/starknet/)es un ZK-Rollup1 sin permisos Turing.
* Los desarrolladores pueden implementar su lógica de negocio elegida en un contrato inteligente y desplegarlo sin permiso en StarkNet.
* Las transiciones estatales de StarkNet están probadas fuera de la cadena y luego verificadas en la cadena.
* Al igual que Ethereum, los usuarios pueden interactuar directamente con estos contratos inteligentes.

### **Introducción**

[anunciamos](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)el mapa de ruta para[StarkNet](https://starkware.co/product/starknet/)en enero de 2021. Las soluciones Holy Grail de escalabilidad soportarían (i) contratos inteligentes arbitrarios, con (ii) composabilidad, (iii) operados sobre una red descentralizada. Hoy anunciamos el despliegue en red de pruebas del paso 1: StarkNet Planets Alpha. El sistema Alpha soporta contratos inteligentes arbitrarios. La composición será apoyada a finales de este año, con la descentralización a seguir.

Es muy importante que seamos totalmente transparentes y establezcamos las expectativas adecuadamente. El propósito de esta publicación es enumerar claramente lo que ya está soportado, y qué funcionalidades todavía faltan. Lo que estamos publicando hoy es Trabajo en Progreso en la red de pruebas. Creemos que este lanzamiento temprano ayudará a la formación de un ecosistema saludable alrededor de StarkNet y sus herramientas. Estamos deseosos de involucrar a los desarrolladores en la construcción de la red con nosotros, y de obtener comentarios continuos de la comunidad.

### **¿Qué hay en el StarkNet Planets Alpha?**

**Funcionalidad:**La Alfa permite a los desarrolladores escribir e implementar contratos de StarkNet para el cálculo general. No hay lista blanca — ningún desarrollador puede escribir y desplegar el contrato que desee. Los usuarios pueden interactuar con estos contratos, enviándoles transacciones e inspeccionando su estado. Todos los contratos existen en un solo estado2. Las actualizaciones de este estado están probadas fuera de la cadena y verificadas en la cadena — en el Alpha, la verificación se realiza en red de prueba.

**StarkNet OS:**La funcionalidad anterior está soportada por un nuevo "sistema operativo" que llamamos StarkNet OS. Ofrece*transiciones de estado comprobables*en StarkNet. Los desarrolladores de Ethereum pueden considerarlo el equivalente a la EVM: es responsable de invocar funciones de contratos inteligentes, manejar el almacenamiento de contratos, etc. Publicaremos un post separado detallando la arquitectura del sistema operativo StarkNet.

**¿Qué no está en la Alfa?**A la Alfa todavía le faltan algunas capacidades clave, como la interacción L1<>L2, datos en cadena y composibilidad. Más sobre estos abajo.

#### **Obtener tu alimentación mojada**

Comience con nuestro[tutorial y documentación](https://www.cairo-lang.org/docs/hello_starknet/).

Luego, puedes leer el[contrato inteligente de AMM](http://cairo-lang.org/docs/hello_starknet/amm.html)que hemos escrito e implementado en StarkNet. Es un AMM simple, y puedes interactuar con él[aquí](https://starkware-amm-demo.netlify.app/swap). Ahora está listo para escribir y desplegar contratos inteligentes en StarkNet. El explorador de bloques para StarkNet —[Voyager](https://voyager.online/)— permite a cualquiera inspeccionar el estado de StarkNet.\
Al mojarte los pies, creemos que estarás mejor preparado para construir sobre StarkNet, mientras continuamos desplegando características adicionales. Ya estamos ocupados planificando un primer hackaton, así como talleres para desarrolladores.

### **Pasos siguientes para StarkNet**

Las capacidades clave que todavía faltan en la Alpha se desplegarán a partir de las próximas semanas. Éstas son:

* L1<>L2 Interacción, por ejemplo, la capacidad de depositar y retirar fondos en L1.
* Datos en cadena: publicar todos los cambios de almacenamiento en Ethereum.
* Composabilidad: permitir que los contratos se comuniquen entre sí.

Con estas características en su lugar, estaremos listos para llevar StarkNet a Ethereum Mainnet. Llamamos este paso en las Constelaciones de la evolución de StarkNet y cuando lleguemos a él podrá construir y desplegar sin permisos en Ethereum Mainnet escalable L2 dApps.

#### **El ecosistema StarkNet**

Estamos muy emocionados por el ecosistema que se está formando alrededor de StarkNet así que nos detendremos para dar las gracias a nuestros colaboradores hasta ahora.

We’re working closely with [Nethermind](https://twitter.com/nethermindeth) and the Nubia team, [Alexey Akhunov](https://twitter.com/realLedgerwatch) (Erigon) & [Igor Mandrigin](https://twitter.com/mandrigin) (gateway.fm), [Iddo Bentov](https://www.cs.cornell.edu/~iddo/), [dOrg](https://twitter.com/dOrg_tech), [Prof. Tim Roughgarden](https://twitter.com/algo_class), [Prof. Jeremy Avigad](https://www.andrew.cmu.edu/user/avigad/) & Yoav Seginer, last but not least — the [Paradigm](https://twitter.com/paradigm) team.\
Our early partners — [dYdX](https://twitter.com/dydxprotocol), [Immutable](https://twitter.com/Immutable), [DeversiFi](https://twitter.com/deversifi), as well as [Sorare](https://twitter.com/SorareHQ), [Celer](https://twitter.com/CelerNetwork), and others — have been providing us with invaluable input from Day One, and allow us to build a production-grade network for real users.\
We continue to be amazed by the quality of content created by the community, by people such as [Bobbin Threadbare](https://twitter.com/bobbinth), [Daniel Kroni](https://github.com/danielkroeni/cairo-playground/blob/main/anon-bank/README.md), [Adrian Hamelink](https://twitter.com/adr1anh), [perama](https://twitter.com/eth_worm), [Francesco Ceccon](https://twitter.com/ceccon_me), [Ilian Malchev](http://twitter.com/imalchev), and the [Alexandria team](https://blockchainpartner.fr/).

Estamos ansiosos por ver lo que creará la comunidad en todos los frentes: herramientas para desarrolladores, contenido y, por supuesto, aplicaciones StarkNet que construirán. Mantengamos la conversación en tu medio favorito elegido:[discord](https://discord.gg/uJ9HZTUk2Y),[Twitter](https://twitter.com/CairoLang),[email](mailto:info@starkware.co), y pronto usando los formularios de comunicación más descentralizados: f2f.

1 No somos fans del término ZK-Rollup, ya que — matemáticamente hablando — no es conocimiento cero, pero todos ustedes saben lo que queremos decir

2 A diferencia del estado separado mantenido para las implementaciones actuales de StarkEx en Mainnet

**Actualización (Nov. 2021):**StarkNet Alpha está en vivo en Ethereum Mainnet