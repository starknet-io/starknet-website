### TL;DR

* Cuentas de Mejoras de Abstracción en espíritu de EIP-4337

1. Validar — Ejecutar separación
2. La singularidad de la transacción ahora está garantizada en el protocolo (Una vez)

* El mecanismo de tasas se extiende para incluir:

1. Mensajes L1→ L2
2. Declarar transacciones

* Masivo cambios de sintaxis de El Cairo

### Introducción

Estamos entusiasmados de presentar StarkNet Alpha 0.10.0. Esta versión es otro paso hacia la escalada de Ethereum sin comprometer la seguridad y descentralización.

Esta entrada describe brevemente las principales características de esta versión. Para ver la lista completa de cambios, revisa las[notas de lanzamiento](https://github.com/starkware-libs/cairo-lang/releases). Para obtener información más detallada, consulte la[documentación](https://docs.starknet.io/).

### Cambios de abstracción de cuenta

Avanzamos con la abstracción de la cuenta de[StarkNet](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781). Esta versión introduce cambios inspirados en[EIP-4337](https://eips.ethereum.org/EIPS/eip-4337).

#### Validar/Ejecutar Separación

Hasta ahora, la función \_\_execute\_\_ de la cuenta era responsable de la validación y ejecución de la transacción. En 0.10.0 rompemos este acoplamiento e introducimos una función \_\_validate\_\_ separada en las cuentas. Al recibir una transacción, el contrato de cuenta llamará primero a \_\_validate\_\_, y después, si es exitoso, proceda a \_\_execute\_\_.

La separación validar/ejecutar proporciona una distinción de nivel de protocolo entre transacciones inválidas y revertidas (aún válidas). Gracias a ello, los secuenciadores podrán cobrar honorarios por la ejecución de una transacción válida, independientemente de si ha sido revertida o no.

#### Nonce

En la versión 0.10.0 se añade un campo nonce para hacer cumplir la singularidad de las transacciones a nivel de protocolo. Hasta ahora no se manejaban ni una sola vez en el nivel del contrato de cuenta, lo que significaba que una transacción con el mismo hash podía ejecutarse dos veces teóricamente.

Del mismo modo que Ethereum, cada contrato incluye ahora una nouna, que cuenta el número de transacciones ejecutadas desde esta cuenta. Los contratos de la cuenta sólo aceptarán transacciones con una coincidencia nunca, p.ej. si el nonce actual de la cuenta es X, entonces sólo aceptará transacciones con nonce X.

#### Nueva versión de la transacción

Para permitir la compatibilidad con versiones anteriores, introduciremos esos dos cambios a través de una nueva versión de transacción:[v1](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C). Estos cambios sólo se aplicarán a la nueva versión, y las cuentas antiguas seguirán siendo capaces de ejecutar transacciones con la versión 0.

Nota: la transacción v0 está ahora obsoleta y se eliminará en StarkNet Alpha v0.11.0. Por favor, asegúrese de actualizar para utilizar la nueva versión de la transacción.

Para obtener información más detallada sobre la versión de la transacción, por favor lea la[documentación](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C).

#### Cuotas de Mecanismo

La nueva versión permite incluir cuotas para dos componentes requeridos:

* [Mensaje L1→ L2](https://docs.starknet.io/docs/L1-L2%20Communication/messaging-mechanism#l1--l2-message-fees)
* [Declarar transacción](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)

Estos honorarios no serán obligatorios en esta versión y sólo serán forzados a partir de StarkNet Alpha v0.11.0.

#### Cambios de sintaxis del Cairo

A favor del progreso gradual hacia una actualización de Cairo,[El Cairo 1.0](https://www.youtube.com/watch?v=Ny4Rv6ztINU), esta versión incluye varios cambios de sintaxis.

Para minimizar las molestias, la versión incluirá un[script de migración](https://www.youtube.com/watch?v=kXs59zaQrsc)que aplica automáticamente los cambios anteriores. Puedes encontrar más detalles[aquí](https://github.com/starkware-libs/cairo-lang/releases).

### ¿Qué sigue?

* En unas semanas, tenemos previsto introducir paralelización en el secuenciador, permitiendo una producción de bloque más rápida (V0.10.1)
* Pronto completaremos la última parte que debe ser incluida en el pago de la cuota — Despliegue de la cuenta
* ¡Lanzamiento Cairo 1.0! Más información sobre esto en un post próximo.

### ¿Cómo puedo participar más?

* Ve a[starknet.io](https://starknet.io/)para toda la información de StarkNet, documentación, tutoriales y actualizaciones.
* Únase a[StarkNet Discord](http://starknet.io/discord)para obtener soporte para desarrolladores, anuncios de ecosistemas y convertirse en parte de la comunidad.
* Visite el[Foro StarkNet](http://community.starknet.io/)para mantenerse al día y participar en las discusiones de investigación de StarkNet.

¡Siempre estamos encantados de recibir comentarios sobre nuestra[documentación](https://docs.starknet.io/)!