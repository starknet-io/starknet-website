### TL;DR

* Se está desarrollando un nuevo secuenciador StarkNet
* Es de código abierto bajo la licencia Apache 2.0
* Su primer objetivo es aumentar el avance de StarkNet

### Un nuevo secuenciador brillante

Estamos felices de anunciar un nuevo secuenciador StarkNet está en la obra. A medida que la pila de tecnología de StarkNet se mueve hacia el código abierto, después de[El Cairo 1.](https://medium.com/starkware/open-sourcing-cairo-1-0-b3100a664bb0)y[Papyrus Full Node](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202), ahora continuamos con el nuevo secuenciador de StarkNet. Será de código abierto, disponible bajo licencia Apache 2.0, y puedes echar un vistazo a[el repositorio](https://github.com/starkware-libs/blockifier)ahora!

Construir un nuevo secuenciador es parte del mapa de ruta[StarkNet](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de)que presentamos hace unos meses. La implementación del nuevo secuenciador comenzará con el reemplazo del**Blockifier**, el módulo dentro del secuenciador que realiza la ejecución de bloques. Como se explica en la hoja de ruta, se espera que ofrezca beneficios para el desempeño de StarkNet.

Nuestro enfoque para construir este secuenciador es el mismo que nos guió en StarkNet Alpha. El secuenciador**se implementará en las etapas**, y hoy estamos compartiendo su primer módulo. Con el tiempo, se completarán los nuevos componentes del secuenciador, hasta que eventualmente un secuenciador basado en Rust reemplazará por completo al secuenciador basado en Python actual.

### ¿Qué hace el secuenciador?

En StarkNet, después de que los usuarios envíen transacciones, la primera parada en el viaje de la transacción a la escala de STARK son los secuenciadores. En el protocolo StarkNet los secuenciadores son responsables de ordenar las transacciones y producir bloques. Después de que el bloque es creado por un secuenciador, y aprobado por el protocolo de consenso, los promotores toman el relevo y generan una prueba para L1.

![](/assets/1_ndrekwqunjixo_wskdeycw-1.png)

### Abierto

StarkNet Alpha se lanzó en Mainnet en noviembre de 2021. Desde el principio, se comprometió a compartir el poder de la escala de STARK con el mundo.

Hoy lanzamos el primero en una línea de módulos del nuevo secuenciador de código abierto. Tardará varios meses en desplegarse todos los módulos y submódulos. Open sourcing todo permitirá a los miembros de la comunidad contribuir al desarrollo y auditar el código base.

Esto contendrá a StarkNet más cerca de un punto de secuenciación descentralizada de permisos. Ahora estamos diseñando el protocolo descentralizado de StarkNet y estamos animando a la comunidad a tomar parte en la[investigación y la discusión](https://community.starknet.io/t/starknet-decentralized-protocol-consensus/5386).

### Rendimiento

El secuenciador original de StarkNet es en gran medida una adaptación de la infraestructura StarkEx. Ahora hay una necesidad de infraestructura que se construye especialmente para los requerimientos de una red descentralizada de alto rendimiento.

Construido en Rust, el nuevo secuenciador está diseñado y desarrollado teniendo en cuenta el rendimiento. El nuevo secuenciador también se basa en fundamentos sólidos: Papyrus, el nuevo[nodo completo StarkNet,](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202)manejará la administración del estado, y cairo-rs, la nueva Cairo-VM de LambdaClass, acelerará la ejecución de El Cairo. Esperamos que el nuevo secuenciador mejore el secuenciador existente en todos los aspectos. Se espera que el rendimiento y la latencia de la red mejoren drásticamente con la integración de este secuenciador en StarkNet.

También esperamos que otras herramientas de infraestructura y desarrollo puedan utilizar el nuevo secuenciador para mejorar la experiencia de desarrollo. Se espera que el rendimiento completo del nodo mejore así como todos los frameworks de pruebas.

### Summary

Estamos encantados de anunciar hoy el nuevo secuenciador de código abierto. Su primer módulo ya está disponible para que la comunidad lo revise, y será seguido con más módulos en los meses venideros. También estamos encantados de dar otro paso en nuestro mapa de ruta para mejorar el rendimiento de StarkNet. Nuestro objetivo es hacer la red más eficiente y accesible, y agradecemos el apoyo de todos los que se han unido a nosotros en este viaje.