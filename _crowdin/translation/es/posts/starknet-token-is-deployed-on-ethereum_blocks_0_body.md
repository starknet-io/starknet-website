### TL;DR

* El Token de StarkNet (STRK) ahora está desplegado en Ethereum Mainnet
* **¡Cuidado con las estafas!**No se ofrecen tokens StarkNet a la venta
* La Fundación tardará tiempo en determinar el mecanismo de distribución de sus tokens
* Tokens en poder de los accionistas StarkWare, empleados y desarrolladores de software asociados independientes están bloqueados por un período de cuatro años. con una versión gradual que comienza después de un año
* La ficha continuará la descentralización de StarkNet gracias a su uso para votar, apostar y pagar honorarios

Hoy,[StarkNet](https://starknet.io/)está dando otro paso hacia la descentralización. El token StarkNet ahora está[en Ethereum](https://etherscan.io/address/0xca14007eff0db1f8135f4c25b34de49ab0d42766). Recuperando rápidamente: STRK se utilizará como señal de apuesta para la participación en los mecanismos de consenso de StarkNet, como ficha de gobernanza, y para el pago de tasas de transacción. La racionalidad para cada una de estas utilidades se presenta en[nuestra propuesta de descentralización](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), en la sección titulada “¿Para qué se usarán las fichas?”

***Cuidado con las estafas:**en el momento de escribir no hay forma de comprar los tokens de StarkNet; este período de no venta permanecerá en su lugar hasta que la[Fundación StarkNet](https://twitter.com/StarkNetFndn)no; seguir la comunicación oficial de la Fundación StarkNet para conocer cualquier actualización del estado de STRK. Puedes reportar estafas y comprobar si hay otros informes de estafas en el canal[scam-report](https://discord.gg/qypnmzkhbc)en el servidor[StarkNet Discord](http://starknet.io/discord).*

Este puesto explica el proceso de asignación de tokens, y cómo los contratos de tokens desplegados sirven a dos de las tres utilidades diseñadas, a saber, el voto y la apuesta. La tercera utilidad – pagando los honorarios de StarkNet – será discutida más adelante.

### Planeando el proceso de asignación de tokens

previamente hemos propuesto un[plan](https://medium.com/starkware/part-3-starknet-token-design-5cc17af066c6)para la asignación inicial de los tokens. Los tokens asignados a los accionistas, empleados y desarrolladores de software independientes están bloqueados durante cuatro años, con un programa de liberación gradual que comienza después de un año. Los tokens bloqueados pueden ser usados para votar y apuestas, pero no pueden ser transferidos o intercambiados. Algunos de los tokens están cerrados a través de un contrato inteligente dedicado en Ethereum mientras que otros tokens están bloqueados a través de los custodianos.

Por separado, el 50.1% de los tokens StarkNet existentes se asignan a la Fundación StarkNet, que se utilizará para cumplir con sus objetivos[](https://medium.com/@StarkNet_Foundation/welcome-to-the-world-starknet-foundation-7bd55d5dbc59)(cf.[la publicación de StarkWare](https://medium.com/starkware/introducing-the-starknet-foundation-bd4b4379fbb)). Estas fichas no están bloqueadas. Sin embargo, la Fundación necesitará tiempo para formular el mecanismo exacto para seguir asignando esas fichas y compartirá sus planes a su debido tiempo.

#### ¿Por qué bloquear?

El bloqueo de las fichas por el período más temprano garantiza que los contribuyentes actuales se alinean con los incentivos a largo plazo de StarkNet. También desalienta la especulación sobre el tope antes de un uso generalizado para sus fines previstos: asegurar la red, pagar honorarios y descentralizar la gobernanza.

A continuación, explicamos cómo la implementación del token apoya la votación y la apuesta.

### Votaciones

La Fundación se encargará de facilitar una buena gobernanza y de formular los mecanismos de votación. El StarkNet Token fue diseñado para permitir tanto la votación directa como una serie de mecanismos de delegación.

#### L1 voto

La implementación desplegada ahora incluye**uso**opcional del módulo[delegación de Compound](https://docs.compound.finance/v2/governance/) de Compound. Este módulo es ampliamente utilizado para votar en cadena. La razón por la que es opcional en StarkNet, y girada por defecto, es la consideración de costo. Encenderlo significa que cada transferencia de los tokens StarkNet en L1 requiere que se necesite gas adicional únicamente para rastrear los cambios en el poder de voto.

#### Non-L1 voting

Las alternativas a la votación en cadena L1 con el módulo de delegación de Compound incluyen la votación fuera de cadena, así como los sistemas de votación en cadena basados en StarkNetwork (como[SnapshotX](https://snapshot.mirror.xyz/cUOrwdtEs5PvNh0sqYWWxPjt8GdJWn_Qp3cl7E3_8IU)). Estas alternativas, que reducen significativamente el consumo de gas para transferencias de L1, no requieren el apoyo explícito del código ERC actualmente desplegado, y por lo tanto son soportadas de manera inherente.

Como se mencionó anteriormente, todas las fichas — bloqueadas y desbloqueadas — serán usables en el mecanismo de votación de StarkNet.

### Tomando

La operación sin permisos y resistente a la censura de StarkNet requiere una selección aleatoria de secuenciadores. La probabilidad de que un nodo sea seleccionado para secuenciar y proponer un bloque es proporcional al número de fichas StarkNet que el nodo aposta. La clasificación para usar StarkNet Tokens (en vez de, digamos, Ethereum o Bitcoin) se explica en la propuesta de gobernanza[](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), y los detalles exactos de la apuesta, la secuenciación y creación de bloques en StarkNet están siendo debatidas en curso[por la comunidad](https://community.starknet.io/t/starknet-decentralized-protocol-introduction/2671)y aún están por finalizar.

Como en el caso de las votaciones, las fichas se pueden utilizar para apostar incluso cuando están bloqueadas. Esto contribuye a la diversidad de los operadores StarkNet y a la resistencia de StarkNet.

### Summary

El despliegue de los contratos StarkNet Token en Ethereum es otro paso en la descentralización de StarkNet.

¡Instamos a los desarrolladores y a los usuarios a ser cautelosos con las estafas! En el momento de la publicación, no hay fichas comercializables, y este estado de no comercio permanecerá vigente hasta que la Fundación StarkNet lo note.

Para más preguntas puedes ir al canal[de discusiones](https://discord.gg/qypnmzkhbc)en el servidor[StarkNet Discord](http://starknet.io/discord).