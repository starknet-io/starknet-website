### TL;DR

* StarkNet Alpha 0.8.0 presenta la versión inicial del mecanismo de comisión (opcional hasta StarkNet Alpha 0.9.0.)
* Nuevas llamadas API para estimar la cuota de transacción para obtener el seguimiento de la transacción, permitiendo una mejor visibilidad y capacidades de depuración
* Mejoras de rendimiento en el secuenciador StarkNet
* Cancelación de mensaje L1→ L2

### Introducción

Como se comparte en nuestro mapa de ruta[](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51), después de la última incorporación a la funcionalidad y características de StarkNet, nuestra atención se desplaza hacia mejoras de rendimiento y diseño de protocolos (incluyendo tasas, abstracción de cuenta, descentralización, etc.). StarkNet Alpha 0.8.0 inicia el proceso de agregar comisiones de transacción y mejorar el rendimiento del secuenciador.

El mapa de ruta para StarkNet incluye un mecanismo de tasas, y progresando con esta versión estamos dando un paso importante hacia el rendimiento completo de la plataforma.

Añadir el mecanismo de tasas es una parte esencial del diseño de desempeño de StarkNet. Sin una tarifa mínima, corremos el riesgo de afrontar transacciones infinitas: lo que haría imposible que el sistema fuera un rendimiento, sin importar las optimizaciones del secuenciador.

### Características

#### Soporte de Cuota

StarkNet Alpha ahora soporta la primera versión del mecanismo de tasas. Este mecanismo es esencial incluso en esta fase temprana, e incluso en Testnet, por dos razones principales:

1. Permite a los desarrolladores comenzar a optimizar sus contratos según el modelo de costes de StarkNet.
2. Es una contrapartida crucial para mejorar el rendimiento del sistema, ya que evita el spamming mediante el envío de innumerables transacciones.

Esta versión introduce los componentes necesarios para que los desarrolladores incorporen pagos de comisiones a sus herramientas y aplicaciones. Los desarrolladores ahora pueden estimar la cuota de transacción llamando al punto final \`estimate_fee\` y hacer el pago de la cuota como parte de la ejecución de la transacción.

Dado que esta característica no es compatible con versiones anteriores, no haremos cumplir el pago de la cuota en este momento, sino sólo a partir de la versión 0. .0, que está previsto que se publique en unas semanas. Esta transición gradual permitirá a los usuarios y desarrolladores ajustarse al nuevo modelo.

#### Cuota de estructura en 0.8.0

En 0,8,0 las tasas se cobrarán únicamente según la complejidad computacional, mientras que StarkWare seguirá subsidiando el costo de comunicación L1. Actualizaremos el mecanismo de tasas para incluir estos costes de operación L1 y de comunicación en las próximas semanas. El pago se cobrará atómicamente con la ejecución de la transacción en StarkNet L2. Consulte la documentación de[comisiones](https://starknet.io/documentation/fee-mechanism/)para obtener una descripción en profundidad.

Es importante señalar que trabajaremos estrechamente con la comunidad de desarrolladores para ajustar y desarrollar el mecanismo de honorarios a medida que evolucione StarkNet.

#### L2 Goerli ETH Faucet

Lanzamos el[Faucet de Goerli ETH L2](https://faucet.goerli.starknet.io/)para permitir a los usuarios pagar comisiones en Testnet. Este Faucet envía pequeñas cantidades de L2 Goerli ETH a su dirección de cuenta en StarkNet Goerli que usted puede utilizar para pagar el cargo de transacción.

#### Trace API

Añadimos la capacidad de recuperar el rastro de ejecución de una transacción a la API de StarkNet. Dentro del trazado de la transacción, todas las llamadas internas son visibles, acompañadas de información como recursos de ejecución consumidos, valor de devolución, eventos emitidos y mensajes enviados. Esta nueva llamada simplifica la comprensión del comportamiento de un contrato o las transacciones de depuración. Además, herramientas como[Voyager](https://voyager.online/)o[StarkTx](https://starktx.info/)podrían incorporar estos datos; proporcionar a los usuarios un análisis más detallado, en particular para la interacción de los contratos de cuenta.

Para obtener la traza, puede utilizar \`get_transaction_trace\` en la CLI de StarkNet. Para ver un ejemplo de cómo usarlo, revisa el[tutorial](https://www.cairo-lang.org/docs/hello_starknet/cli.html?#get-transaction-trace).

#### Cancelación del mensaje

Una característica adicional de esta versión es la capacidad de cancelar los mensajes L1→ L2. ¿Por qué es útil? Imagine un escenario donde un usuario transfiera un activo de L1 a L2. El flujo comienza con el envío del activo a un puente StarkNet y a la correspondiente generación de mensajes L1 + L2. Ahora, imagínese que el consumo de mensajes de L2 no funciona (esto podría ocurrir debido a un error en el contrato de El Cairo de dApps). Esto podría llevar a que el usuario pierda la custodia de sus activos para siempre.

Para mitigar este riesgo, permitimos que el contrato que inició el mensaje L1 - L2 lo cancele — después de declarar la intención de hacerlo y esperar una cantidad de tiempo adecuada (ver la documentación[](https://starknet.io/l1-l2-messaging/#cancellation)).

### Mejoras de rendimiento

Esta versión disminuye significativamente el tiempo que un secuenciador necesita para ejecutar un flujo de transacciones entrantes en El Cairo.

¡Este es sólo el primer paso! Nuestro próximo gran hito de rendimiento, que se introducirá pronto (0.9.0), es la ejecución paralela del secuenciador, y se esperan muchas más optimizaciones a lo largo del camino.

### ¿Qué ahora?

Lea la documentación técnica[aquí](https://starknet.io/documentation/fee-mechanism/).

Ve a[starknet.io](https://starknet.io/), para toda la información de StarkNet, documentación, tutoriales y actualizaciones.

Únase a[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)para obtener soporte para desarrolladores, anuncios de ecosistemas y convertirse en parte de la comunidad.

Visita a[los chamanes StarkNet](https://community.starknet.io/)para mantenerte actualizado y participar en todas las discusiones de investigación de StarkNet.