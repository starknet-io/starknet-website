### TL;DR

* StarkNet Alpha 0.7.0 liberado a Goerli; lleno de mejoras
* Los contratos ahora pueden actualizarse usando el Patrón de Actualización de Proxy
* Los contratos ahora pueden emitir eventos
* Soporte para las tan esperadas llamadas del sistema Block Number y Block Timestamp

### Introducción

Estamos felices de lanzar Alpha 0.7.0, una versión repleta de nuevas características y mejoras. Uno de los mejores estimulantes de StarkNet en los últimos meses ha sido la mayor participación de la comunidad en la configuración del futuro de StarkNet. Esta versión cubre algunas de las necesidades de la comunidad.

#### Cambios a la Convención de Nombramiento

El lector observante podría haber notado que la versión anterior de StarkNet Alpha se llamaba Alpha 4, mientras que ahora estamos lanzando Alpha 0.7.0. Decidimos omitir el número de versión Alpha dedicado y depender en su lugar sólo de la versión cairo-lang asociada.

### Características nuevas

#### Actualización de Contratos

El[Patrón de Actualización de Proxy](https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies)de OpenZeppelin ahora es totalmente compatible con actualizaciones de contratos en StarkNet. El patrón Proxy es el método común para habilitar actualizaciones de contratos sobre Ethereum. Alpha 0.7.0 habilita este patrón sobre StarkNet.

Hicimos un breve[tutorial](https://starknet.io/docs/hello_starknet/default_entrypoint.html)para demostrar una implementación básica del patrón, y OpenZeppelin ya está trabajando duro implementando un contrato estándar para el patrón proxy; ver el prototipo[](https://github.com/OpenZeppelin/cairo-contracts/pull/129).

#### Bloquear número y marca de tiempo

Alpha 0.7.0 añade dos nuevas llamadas al sistema que muchos desarrolladores han estado pidiendo. Estas llamadas permiten que un contrato acceda al número de bloque y a la marca de tiempo del bloque. El número de bloque devuelve el número del bloque ejecutado actual. La marca de tiempo del bloque devuelve la marca de tiempo dada por el secuenciador en la creación del bloque.

Puedes ver un ejemplo de cómo utilizar estas características en el[tutorial](https://starknet.io/docs/hello_starknet/more_features.html#block-number-and-timestamp).

#### Eventos

¡Sorpresa! Una característica que estaba planeada para una versión futura ha entrado en esta anterior.

Los contratos de StarkNet ahora apoyan la definición y emisión de eventos, permitiéndoles exponer información de ejecución para aplicaciones fuera de la cadena de consumo. Los desarrolladores de Ethereum encontrarán la semántica y la sintaxis muy similares a Solidity. Puede leer la[documentación](https://starknet.io/documentation/events/)o seguir el[tutorial](https://starknet.io/docs/hello_starknet/events.html)que explica esta función.

#### Eliminada la Directiva de %bde uiltinas.

La directiva de uiltin %bya no es necesaria en los contratos de StarkNet. Este cambio siguió a una discusión comunitaria sobre el[patrón de extensión del contrato](https://community.starknet.io/t/contract-extensibility-pattern/210)en[StarkNet chamanes](https://community.starknet.io/). Simplifica significativamente la usabilidad de este patrón de extensibilidad.

Por ejemplo, el siguiente contrato será cambiado de:

```
%lang starknet

# Esta es la directiva "%builtins".
# Ya no es necesario.
%builtins range_check

@view
func add(x : felt, y : felt) -> (res : felt):
return (res=x + y)
end
```

A esto:

```
%lang starknet
@view
func add(x : felt, y : felt) -> (res : felt):
return (res=x + y)
end
```

Puedes echar un vistazo a los contratos estándar de[ERC](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts/token), que utilizan el nuevo patrón.

#### Soporte de funciones externas Arrays de estructuras

Alpha 0.7.0 soporta matrices de paso y retorno de estructuras en funciones externas. Esta funcionalidad adicional permite que los contratos de cuentas soporten mejor[multicalls](https://github.com/OpenZeppelin/cairo-contracts/pull/73#discussion_r753535751).

Multicall es una poderosa característica de Abstracción de Cuenta que permite a una cuenta realizar múltiples llamadas en una sola transacción. Un caso de uso obvio es el de crear una**transacción única**que llama a permitir y luego transferFrom.

Esperamos ver qué hace la comunidad con ella.

#### Mejoras a StarkNet CLI

**Soporte para bloques pendientes**

[Los bloques pendientes](https://starknet.io/documentation/block-structure-and-hash/#pending_block)fueron[introducidos](https://community.starknet.io/t/cairo-v0-6-2-api-change-pending-block/195)en la última versión menor (v0.6.2) y ofrecieron confirmaciones más rápidas en las transacciones. Esta versión incluye soporte para consultar esos bloques a través de la CLI de StarkNet.

Para usarlo, en cada comando CLI que tome block_number como argumento (contract_call/get_block/get_code/get_storage_at), podemos consultar al StarkNet con respecto al bloque pendiente especificando block_number=pending.

**Soporte para Contratos de Cuenta**

StarkNet utiliza la abstracción de la cuenta, es decir, todas las cuentas se implementan como contratos inteligentes. Las primeras implementaciones de contratos de cuenta fueron realizadas por[Argenta](https://github.com/argentlabs/argent-contracts-starknet)y[OZ](https://github.com/OpenZeppelin/cairo-contracts/blob/main/contracts/Account.cairo), pero esperamos que vengan muchos más.

En StarkNet, todas las transacciones deben pasar por un contrato de cuenta, y el CLI ahora permite la interacción con StarkNet Alpha directamente a través de contratos de cuenta. Mira el[tutorial](https://starknet.io/docs/hello_starknet/account_setup.html#setting-up-a-starknet-account)sobre cómo configurarlo.

La funcionalidad similar también se añadió a[StarkNet.py](https://github.com/software-mansion/starknet.py/)y a[Nilo](https://github.com/OpenZeppelin/nile)en el último mes.

#### L1<>L2 Messaging in the Testing Framework

La Alfa 0.7.0 introduce el Postman. El Postman permite a los desarrolladores usar el framework de pruebas para probar flujos más complicados.

A un alto nivel, motiva la responsabilidad del secuenciador StarkNet de transmitir mensajes de L1 a L2 y L2 a L1. Asegúrate de que los mensajes que se envían a través del contrato de mensajería Solidity aparecerán en el destino del contrato StarkNet y los mensajes enviados desde un contrato StarkNet aparecerán en el contrato de mensajería Solidity.

#### Y más características

Alpha 0.7.0 proporciona muchas más características y cambios, como la adición de una función raíz cuadrada eficiente a la biblioteca común de matemáticas. Aparece una lista completa en el registro de cambios de[](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.7.0).

### ¿Siguiente?

El soporte inicial de[Mecanismo de Cuota](https://community.starknet.io/t/fees-in-starknet-alpha/286/29)será liberado en cuestión de semanas, como una subversión de StarkNet.

### ¿Más información?

[starknet.io](https://starknet.io/): para toda la información de StarkNet, tutoriales y actualizaciones.

[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y): únete para obtener respuestas a tus preguntas, recibe apoyo de desarrollo y hazte parte de la comunidad.

[Chamanes StarkNet](https://community.starknet.io/): únete para seguir (y participar) en las discusiones de investigación de StarkNet.