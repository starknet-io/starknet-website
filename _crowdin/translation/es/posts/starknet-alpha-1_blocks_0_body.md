### TL;DR

StarkNet Alpha 1 tiene dos nuevas características:

* Interacción L1<>L2
* Datos en cadena

### Introducción

A principios de año, anunciamos que StarkWare está construyendo[StarkNet](https://starkware.co/product/starknet/), un ZK-Rollup1 sin permisos descentralizados basado en STARK-Rollup1 operando como una red L2 sobre Ethereum. StarkNet permite a cualquier dApp alcanzar una escala ilimitada para su cómputo — sin comprometer la composición y seguridad de Ethereum.

El mes pasado,[StarkNet Alpha 0](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)fue lanzado al mundo. Por primera vez, los desarrolladores pueden[escribir](https://kobi.one/2021/07/14/stardrop.html)cualquier contrato inteligente y implementarlo, sin permisos, en un ZK-Rollup. Los usuarios pueden enviar transacciones a la red, al estilo Ethereum.

Hoy lanzamos una nueva versión; la Alfa 1. Estamos lanzando características de forma progresiva para permitir a los desarrolladores interactuar con nuevas características tan pronto como sea posible. Anticipamos que esto afectará el ciclo de retroalimentación y permitirá que los comentarios de la comunidad mejoren rápidamente StarkNet.

### **Características de la Alfa 1**

#### Interacción L1<>L2

La Alfa 1 incluye un protocolo de mensajería L1<>L2, que permite a los desarrolladores implementar flujos de transacción sin problemas entre L1 y L2. Los desarrolladores ahora pueden enviar mensajes desde contratos en L1 a contratos en L2 y viceversa.

Uno de los lazos de ZK-Rollups es que las actualizaciones de estado son definitivas, sin demora. Esto significa que los mensajes enviados de L2 a L1 pueden ser enviados inmediatamente a su contrato de destino. Esto abre la manera de construir aplicaciones que son realmente interoperables entre las capas.

¿Le interesa probarlo? La mejor manera de empezar es seguir el tutorial[aquí](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html).

Nuestro protocolo L1<>L2 debe mucho a otros L2s (específicamente Optimismo y Arbitrón) cuyo trabajo anterior en esta área influyó en nuestro diseño.

#### Disponibilidad de datos en cadena

La actualización del estado de StarkNet también se publica ahora como datos en cadena en Ethereum. Esto permite a cualquier usuario construir completamente el estado de StarkNet a partir de datos L1. Cada actualización de estado incluye el estado difiere, es decir, qué almacenamiento fue cambiado y su nuevo valor.

AquГ­ también, ZK-Rollup muestra su fuerza. En contraste con los Rollups Optimistas, en los que se deben enviar los datos de las transacciones completas en cadena, en ZK-Rollups, sólo los datos mínimos absolutos necesarios para derivar la diferencia de estado se envían en cadena.

Consideremos un ejemplo primordial, los oráculos de los precios. Una transacción para actualizar un oráculo de precio normalmente contiene varias transacciones pero sólo una celda de almacenamiento; el precio de la pareja. Los datos en cadena requeridos para una actualización de estado que contengan transacciones de oráculo de precios en un Rollup optimista crecen linealmente con el número de actualizaciones, mientras esté en un ZK-Rollup, siempre será una única actualización de almacenamiento.

Además, los algoritmos de compresión pueden aplicarse a los datos publicados, y su validez será comprobada por la prueba STARK, reduciendo aún más la huella de la cadena. Las versiones futuras de StarkNet introducirán optimizaciones innovadoras en esta área.

#### StarkNet OS

También estamos publicando el código del sistema operativo StarkNet. El sistema operativo StarkNet es el programa El Cairo que funciona con StarkNet. El sistema operativo maneja todo lo que se hace en la red: despliegue de contratos, ejecución de transacciones, L1<>L2 y más. La arquitectura y el diseño del sistema operativo StarkNet se explicarán detalladamente en un post separado.

#### Características extra

No sólo ha evolucionado StarkNet Alpha, también estamos mejorando constantemente Cairo. Para una descripción completa de las nuevas características en El Cairo v0.3.0, revise las notas de lanzamiento[aquí](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.3.0).

### El ecosistema está creciendo

Aparte del trabajo constante en StarkNet Core, el trabajo del ecosistema en StarkNet se está expandiendo continuamente. Estamos encantados de colaborar con algunos de los equipos más talentosos del ecosistema.

Fermion, el primer esfuerzo de StarkNet, es desarrollado por el equipo de Erigon (antes TurboGeth). Basándonos en su enorme conocimiento obtenido al trabajar en Ethereum, somos capaces de trabajar con ellos para construir un poderoso Nodo Completo, que incorpora muchas lecciones aprendidas durante la construcción de Ethereum, aprovechando al mismo tiempo la escala ofrecida por las pruebas STARK.

La mente está trabajando en Warp, un compilador de EVM a Cairo. Vinculado con nuestra cultura de presentar nuevas herramientas sólo una vez que estén listas, Todo lo que podemos decir es que esperamos noticias emocionantes en este frente muy pronto! Sin embargo, podemos decir que se están moviendo a velocidad deforme.

### Lo que el futuro aguanta

La siguiente parada en nuestro camino a StarkNet será la composición: permitir que los contratos interactúen entre sí. Mantente atento.

[StarkWare](https://starkware.co/)

1 Como hemos dicho anteriormente, ZK-Rollup es ya un término comúnmente utilizado, pero muy engañoso: estas soluciones no ofrecen (actualmente) conocimiento cero.

**Actualización (Nov. 2021):**StarkNet Alpha está en vivo en Ethereum Mainnet