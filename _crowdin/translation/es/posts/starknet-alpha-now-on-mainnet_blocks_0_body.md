### TL;DR

* Alfa está en vivo en Mainnet
* Soporta el cálculo general y la composición
* Comunidad de rápido crecimiento, desarrollando herramientas y aplicaciones
* Características adicionales que se desplegarán de forma continua en las próximas semanas
* Descargo de responsabilidad: esta es una versión de Alpha (lea la impresión fina abajo)

### Introducción

StarkNet Alpha está lanzando hoy en Ethereum Mainnet!

StarkNet es un Rollup descentralizado sin permisos que opera como una red L2 sobre Ethereum. StarkNet permite que cualquier dApp alcance una escala ilimitada para su cómputo, sin comprometer la composición y seguridad de Ethereum gracias a su confianza en el sistema criptográfico más seguro y escalable —[STARK](https://starkware.co/stark/). StarkNet se basa en el lenguaje de programación de[El Cairo](https://starkware.co/cairo/), el primer verificador completo de Turing de grado de producción en Ethereum. Tanto El Cairo como STARK fueron desarrollados internamente por StarkWare y han potenciado todas nuestras aplicaciones de grado de producción, que se han establecido más de 50M txs y $250B desde el verano 2020.

Entre otras características, StarkNet Alpha permite contratos inteligentes de cómputo general que soportan la composabilidad, tanto con otros contratos StarkNet como a través de la mensajería L1<>L2 con contratos L1. StarkNet Alpha opera en modo Rollup, lo que significa que todos los datos de diferencia de estado se envían en cadena.

En enero, compartimos el mapa de ruta[StarkNet](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880). En junio, StarkNet Alpha se puso en vivo en una red de pruebas pública, y se ha actualizado con nuevas características de forma continua. Estamos encantados de adelantarnos a los horarios, agradecemos, en parte, nuestra confianza en nuestro programa de software STARK/Cairo de grado de producción endurecido.

### ¿Cómo debería tratar a StarkNet Alpha?

En primer lugar, con mucho cuidado, ya que la etiqueta Alfa está ahí por una razón. Espere cambios, arreglos y mejoras por venir. StarkNet Alpha aún no ha sido auditado, y podemos retrasar tal auditoría hasta que la red madure algo más (lea la declaración de responsabilidad al final de este post para más información).

Por lo general, seguimos el camino cauteloso y sensato definido por nuestros colegas de Rollup, es decir, Arbitrum y Optimismo: lanzar la red con un solo secuenciador, y aplicaciones de lista blanca para asegurar que sus desarrolladores entiendan los riesgos que implica. Seguimos estando plenamente comprometidos con una descentralización completa de StarkNet.

¿Y cómo se debe tratar la economía de StarkNet Alpha? La Alfa comenzará sin cargos de transacción. La próxima actualización, a solo unas semanas de distancia, introducirá un mecanismo de honorarios — compartiremos más detalles en un mensaje separado.

### Comenzar construcción

Te invitamos a comenzar a escribir tus propias aplicaciones a través de StarkNet comprobando la (nueva!) [sitio web](http://starknet.io/)o saltar directamente al[tutorial](https://starknet.io/docs/).

Si está listo para desplegar, siga este[proceso de incorporación](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu)creado para asegurar que todos los desarrolladores estén bien informados del estado preliminar del sistema.

### Ecosistema

En los últimos meses hemos visto un crecimiento asombroso en el tamaño y la actividad de la comunidad StarkNet. el cual se congasta en el[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y). Decenas de desarrolladores — equipos e individuos — a través del ecosistema blockchain están contribuyendo a este esfuerzo. (Ver la exención de responsabilidad al final de esta publicación)

#### Herramientas para desarrolladores

* OpenZeppelin define los contratos estándar. Su[repo](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)y[discusiones](https://github.com/OpenZeppelin/cairo-contracts/discussions)valen la pena seguir
* El transpilador[Warp](https://github.com/NethermindEth/warp)–>El transpilador de El Cairo, desarrollado por la mente
* Plugin de Shard Labs[HardHat](https://github.com/Shard-Labs/starknet-hardhat-plugin)y[StarkNet Devnet](https://github.com/Shard-Labs/starknet-devnet)
* Argent está desarrollando herramientas, incluyendo su esfuerzo conjunto en StarkNet.js, junto con[Sean Han](https://twitter.com/seanjameshan), su creador

#### Infraestructura

**Explorador de bloques**:

* [El proyecto Voyager](http://voyager.online/)por mente
* [Eth.tx](https://ethtx.info/)ofrecerá análisis de soporte y una vista detallada de las transacciones de StarkNet

**Nodos completos**: dos esfuerzos en curso: uno es el proyecto Fermion liderado por Erigon, el otro es el proyecto[Pathfinder](https://github.com/eqlabs/pathfinder), liderado por Equilibrium

**Carteras**:

* [ArgentX](https://github.com/argentlabs/argent-x)es una extensión de navegador desarrollada por Argent, ya disponible para desarrolladores
* La solución de gestión de claves de Torus es StarkNet lista
* Ledger está desarrollando una aplicación nativa StarkNet; que se pondrá a disposición antes de fin de año

**El Cairo de su**: Diligencia ConsenSys, Trail of Bits, Peckshield, y ABDK ya están llevando a cabo auditorías del Cairo o a punto de comenzar pronto

**Servicios API**: después de que un nodo completo de StarkNet esté disponible, los servicios de la API serán ofrecidos por Figment, Chainstack e Infura

**Indexer**: trabajaremos en la integración de TheGraph para trabajar con StarkNet, junto con el equipo de Figment

### El camino por recorrer

En las semanas y meses venideros, actualizaremos la Alfa con las siguientes capacidades:

* Mecanismo de mejora del contrato
* Mecanismo de cuota
* Eventos
* Adicionalmente faltan syscalls (get_block_number, get_block_timestamp, y más)
* Versión esquelética de Volition
* Y mucho más …

Para supervisar este esfuerzo de forma continua, consulte el mapa de ruta[tentativo](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51) de las características.

Si miramos más lejos, continuamos invirtiendo fuertemente en investigaciones activas en múltiples frentes (únete al esfuerzo de[](https://community.starknet.io/)chamanes):

* Descentralización
* Escala
* Disponibilidad de datos
* Vización sin permiso

### Llamar a la acción

* Comience a escribir contratos en la red de pruebas StarkNet sin permisos en Goerli
* Únete al Discord[StarkNet](https://discord.gg/uJ9HZTUk2Y)
* Unirse a las llamadas de la comunidad
* Asista a la primera[Cumbre del Ecosistema StarkNet](https://www.eventbrite.com/e/starknet-ecosystem-summit-2022-tickets-206671880157)(27–28 de 2022, Stanford CA)
* Únete a los[chamanes StarkNet](https://community.starknet.io/)para profundizar más en los desafíos de investigación

### Descargo de responsabilidad

***StarkNet Alpha es un nuevo y complejo sistema que no ha sido completamente auditado. Como todos los sistemas de software complejos, el sistema StarkNet puede contener errores que, en casos extremos, podrían llevar a una pérdida de todos sus fondos. Así que***¡huye con cuidado y cuidado!******

*El ecosistema StarkNet es un conjunto grande y de rápido crecimiento de equipos e individuos independientes, sobre los que StarkWare no tiene nada que ver y no asume ninguna responsabilidad. Cualquiera de los proyectos desarrollados por los miembros del ecosistema puede contener errores que, en casos extremos, podrían llevar a una pérdida de todos sus fondos. Además, a medida que se implementan más contratos inteligentes, aumenta el potencial de errores nocivos no intencionados e incluso estafas y alfombras maliciosas. Por lo tanto, trate todos los contratos inteligentes en StarkNet mientras trata los contratos inteligentes en Ethereum, y utilice sólo aquellos que tenga buenas razones para confiar como seguros.*