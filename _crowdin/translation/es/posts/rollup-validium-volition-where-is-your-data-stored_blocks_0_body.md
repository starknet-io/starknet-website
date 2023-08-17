### TL;DR

* StarkWare ofrece una gama de modos de Disponibilidad de Datos (DA) para que los clientes elijan, de acuerdo a su prioridad
* Existen tres enfoques para la disponibilidad de datos para las pruebas STARK, todos ellos ya están disponibles en producción:\
  —**Rollup**: el libro de valores se publica directamente en el blockchain\
  —**Validium**: un Comité de Disponibilidad de Datos asegura el mayor, con solo un hash almacenado en cadena\
  —**Volition**: las aplicaciones pueden permitir a los usuarios elegir su modo DA — Rollup o Validium — para cada transacción
* No importa que DA se utilice, la validez de todas las transacciones está garantizada por STARKs

### Introducción

A partir de noviembre de 2022,[StarkEx](https://starkware.co/starkex/)se ha liquidado más de $750 mil millones de volumen de trading y más de 270 millones de transacciones en Ethereum. En el espacio NFT, potenciando aplicaciones como ImmutableX y Sorare, StarkEx ha mintado más de 85 millones de NFT a un precio que es 1000 veces más barato que hacerlo directamente en Ethereum. La tecnología basada en STARK está escalando Ethereum. Por ejemplo, en una sola semana, StarkEx ejecutó 1.6x el número de transacciones como Ethereum (12m en StarkEx vs 7. m en Ethereum) mientras ocupa menos del 0.1% del espacio de bloqueo de Ethereum. Y hace todo esto dando a los usuarios el mismo nivel de seguridad que si estuvieran ajustando directamente en Ethereum.

### ¿Cómo lo logra StarkWare?

Los usuarios envían transacciones en Layer 2 (StarkEx o StarkNet), las cuales se envían en lotes y se envían a un prover STARK. Este prover STARK conoce el estado del libro de contabilidad antes y después de que estas transacciones hayan sido procesadas. El prover produce una prueba de STARK que atestigua la validez del nuevo estado del contador después de que estas transacciones hayan sido ejecutadas. El nuevo estado y la prueba STARK se envían al verificador STARK en cadena. La verificación de esta prueba se realiza de forma autónoma a través de un contrato inteligente inmutable en Ethereum.

Esta arquitectura proporciona lo mejor de ambos mundos: podemos tener costos de transacción bajos, mientras que Ethereum se encuentra en el centro como un arbitrador neutral. Ethereum como árbitro no es sólo una buena cosa, sino que proporciona seguridad crítica al usuario final. Una transacción de usuario ahora puede estar segura de que sus fondos están asegurados por Ethereum, y las transacciones son inmutables una vez que son verificadas en Ethereum. El usuario también tiene plena autocustodia de sus fondos. La autocustodia es importante porque garantiza que el usuario tenga acceso a sus fondos en todo momento, sin depender de terceros.

### ¿Dónde encaja la disponibilidad de datos en todo esto?

Es importante enfatizar lo que esta prueba está haciendo, así como lo que*no*está haciendo. La prueba demuestra la validez del nuevo estado, pero no le dice cuál es el nuevo estado. Para ello, necesita disponibilidad de datos. Si sólo tenemos la prueba, entonces el blockchain sabe que lo que fue enviado es válido, pero no sabe cuál es el nuevo estado (ej. ¡Saldo del contador) es! Los consumidores de estos datos incluyen usuarios que tienen transacciones dentro de estas pruebas. Los datos deben ponerse a su disposición si quieren retirar fondos en Ethereum sin necesidad de confiar en el operador de Capa 2. Esto da a los usuarios la plena autocustodia de sus fondos.

Una analogía para esto es su profesor de secundaria que le pide que demuestre que x es igual a x. Esto es trivial. ¿Qué es más difícil de responder: ¿a qué es x realmente igual? Para ello, necesita una información separada. Podría ser que x sea igual a 5, u otro valor. Del mismo modo, en el blockchain, una prueba de STARK puede ser enviada a un contrato inteligente de verificación de STARK para la verificación. Y el verificador puede confirmar que la prueba es válida (que x=x). Pero necesita una entrada separada para decirle qué x (el nuevo saldo del contador) es.

Existen tres enfoques para que estos datos estén disponibles:

#### Modo Rollup

El modo Rollup asegura que el estado del contador se almacene en Ethereum junto con las pruebas. El modo Rollup es actualmente utilizado por[dYdX](https://dydx.exchange/)en producción, y también es usado por la red[Public StarkNet](http://starknet.io/)L2. Los beneficios aquí son claros: uno puede recrear el estado del libro de valores sólo interactuando con el blockchain de Ethereum. La implicación de esto es que usted, como usuario final, puede hablar sin confianza con el contrato inteligente pertinente en Ethereum, y retirar sus fondos incluso si el sistema de capa 2 se apaga.

#### Validio

En el modo Rollup, la mayoría de los costos de gas de Ethereum van a la disponibilidad de datos, y no a la verificación de pruebas. Esto se debe a que es muy intensivo en gas almacenar datos en la cadena de bloques. En el modo Validium, la información del contador no se envía a Ethereum. Más bien, se almacena fuera de la cadena con un Comité de Disponibilidad de Datos. Ethereum almacena un hash de esta información del libro de notas. Este Comité de Disponibilidad de Datos consiste en un quórum de miembros independientes que supervisan la correcta actualización del estado así como mantener una copia de los datos que fueron procesados. Cada instancia de StarkEx puede crear su propio quórum. Los miembros de Quorum para aplicaciones existentes en StarkEx incluyen entidades como[Consensys](https://consensys.net/),[Atención](https://nethermind.io/),[Iqlusion](https://iqlusion.io/)y[Cefalopod](https://cephalopod.equipment/).

Los beneficios están claros. No hay necesidad de pagar las tasas de gas de Ethereum para almacenar la información de la empresa en cadena. Más bien, lo único que se almacena en Ethereum es un solo hash de la información del libro de notas. Si quieres retirar fondos sin confianza de la Capa 2 hablando con Ethereum, simplemente requiere la firma digital de uno de los miembros del Comité de Disponibilidad de Datos. Los miembros de la DAC usarán criptografía para demostrar que usted es dueño de esos fondos.

Otro beneficio oculto de la disponibilidad de datos de Validium es la confidencialidad de la gente que lee la cadena de bloques. Bajo el modo Rollup, el saldo de cada cuenta en el momento en que se presenta cada prueba es conocido al público. Con Validium, estos datos están ocultos en el blockchain — sólo el Comité de Disponibilidad de Datos es consciente de esto, porque se mantiene fuera de la cadena. Este nivel de confidencialidad permite una amplia variedad de casos de uso en los que obfusionar los datos de las transacciones es importante.

#### Volición

Volition es una arquitectura de disponibilidad de datos que proporciona la opción entre Validium y Rollup a nivel de transacción. Esto lo hace manteniendo un libro sobre la cadena y otro libro con un Comité de Disponibilidad de Datos. Los usuarios pueden elegir entre el modo Validium y Rollup para cada transacción individual.

Imagine que usted compra un NFT realmente caro como un Bored Ape o un Cryptopunk, en una aplicación corriendo en StarkEx. Puede utilizar el modo Rollup para asegurar los datos de ese NFT, porque desea un registro de esa transacción específica almacenada en Ethereum. Sin embargo, puede comprar un NFT realmente barato (p.e. una túnica para tu personaje en un juego de blockchain), y en esa tónica estarás encantado de ahorrar dinero usando Validium.

Si usted está interesado en la escala lograda por las pruebas de STARK, entonces por favor venga a construir sobre nosotros.



Siempre puedes enviar un correo electrónico a[info@starkware.co](mailto:info@starkware.co)y un humano recibirá tu correo electrónico.