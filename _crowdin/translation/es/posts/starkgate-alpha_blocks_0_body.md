### TL;DR

* La primera versión de StarkNet Bridge, StarkGate Alpha, está en vivo en**[Testnet](https://goerli.starkgate.starknet.io/)**y en**[Mainnet](https://starkgate.starknet.io/)**!
* Esperamos comentarios de la comunidad sobre cómo pueden mejorarse las cosas. Puedes enviar tus comentarios tanto para[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)como[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).
* Próximamente seguirá el despliegue de Mainnet (actualización, 9 de mayo de 2022: StarkGate está en vivo en Mainnet)

¡Excitación! Estamos encantados de lanzar StarkGate Alpha, la primera versión del Bridge de StarkNet, ahora en vivo en Goerli testnet, con el despliegue de Mainnet que seguirá pronto.*

\*(actualización, 9 de mayo de 2022: StarkGate está en vivo en Mainnet)

**Aviso importante: esta es una versión alfa en StarkGate Alpha (¡lea la impresión fina abajo!).**

![](/assets/starkgate_01.png)

Antes de continuar, ¡echa un vistazo! [StarkGate Testnet](https://goerli.starkgate.starknet.io/),[StarkGate Mainnet](https://starkgate.starknet.io/)

StarkGate sirve como puerta de enlace entre Ethereum y[StarkNet](https://starknet.io/), y permite a los usuarios hacer todo lo que pueden esperar de un puente.

#### **¿Dónde puedo encontrar información sobre cómo funciona StarkGate?**

Para entender cómo funciona StarkGate, lee la[documentación técnica](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)y echa un vistazo al[código](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate). Tenga en cuenta que esta es la primera versión, e invitamos a sus comentarios y sugerencias sobre cómo mejorar[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)y[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).

#### **¿Qué tokens serán apoyados por StarkGate?**

* StarkGate Alpha en Goerli soporta los tokens ETH y algunos otros ERC. La lista completa y las direcciones relevantes del contrato, tanto en Ethereum como en StarkNet, están disponibles en este[repo](https://github.com/starkware-libs/starknet-addresses).
* En Mainnet, inicialmente, StarkGate Alpha sólo soportará ETH para permitir el uso del mecanismo de tasas. Más adelante añadiremos soporte para WBTC, USDC, USDT y DAI. Puede ver las direcciones del contrato relevantes en este[repo](https://github.com/starkware-libs/starknet-addresses/blob/master/bridged_tokens/mainnet.json).

Más adelante, publicaremos el mecanismo para añadir soporte para fichas adicionales.

#### **¿Qué limitaciones de seguridad tendrá StarkGate Alpha en Mainnet?**

StarkGate Alpha en Mainnet se lanza con dos limitaciones — con el fin de reducir los riesgos que implica el uso de una versión Alfa:

1. El valor total bloqueado (TVL) en el puente L1 limitará la cantidad de cada tipo de token.
2. El monto máximo en cada transacción enviada de L1 a L2 (Ethereum→ StarkNet) a través de StarkGate será limitado.

Tenemos previsto aliviar gradualmente estas limitaciones y levantarlas completamente a medida que crezca la confianza. Los parámetros actualizados se pueden encontrar en la[documentación](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge) de StarkGate.

![](/assets/starkgate_02.png)

### Alfa y lo que significa

Como siempre, te recordamos que StarkNet se encuentra actualmente en su etapa**Alfa**:

* Las cosas pueden romperse. Si fallan de forma profíaca, tus fondos podrían perderse (**lee la exención de responsabilidad debajo de**!).
* Tanto StarkNet Alpha como StarkGate pueden ser actualizados sin un bloqueo de tiempo. Si bien esperamos anunciar tales actualizaciones mucho antes de tiempo, en el caso de los riesgos inminentes de seguridad (por ejemplo, si se encuentra un fallo crítico), la actualización puede ser aplicada con poca o ninguna advertencia.
* El código del puente, así como partes de StarkNet Alpha, todavía no han sido auditados. Las auditorías de ABDK y mente de StarkGate Alpha se completarán pronto.

Animamos a todos los usuarios a que ayuden a mejorar el puente proporcionando sus comentarios usando una de las siguientes plataformas:

1. [Repo del frontend StarkGate](https://github.com/starkware-libs/starkgate-frontend)
2. [Repo de contratos StarkGate](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate)
3. [chamanes StarkNet](http://community.starknet.io/)

Para preguntas y soporte para desarrolladores, únete al[servidor de discord StarkNet](https://discord.gg/uJ9HZTUk2Y).

### Descargo de responsabilidad

***StarkNet Alpha es un nuevo y complejo sistema que no ha sido completamente auditado. Lo mismo se aplica al StarkNet Bridge. Como todos los sistemas de software complejos, tanto StarkNet como el puente pueden contener errores que, en casos extremos, podría provocar una pérdida de todos sus fondos. Así que***¡huye con cuidado y cuidado!******

*El ecosistema StarkNet es un conjunto grande y de rápido crecimiento de equipos e individuos independientes, sobre los que StarkWare no tiene nada que ver y no asume ninguna responsabilidad. Cualquiera de los proyectos desarrollados por los miembros del ecosistema puede contener errores que, en casos extremos, podrían llevar a una pérdida de todos sus fondos. Además, a medida que se implementan más contratos inteligentes, aumenta el potencial de errores nocivos no intencionados e incluso estafas y alfombras maliciosas. Por lo tanto, trate todos los contratos inteligentes en StarkNet mientras trata los contratos inteligentes en Ethereum, y utilice sólo aquellos que tenga buenas razones para confiar como seguros.*