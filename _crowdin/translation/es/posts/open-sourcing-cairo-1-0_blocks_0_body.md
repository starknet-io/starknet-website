### TL;DR

* **El Cairo 1.0 es de código abierto! Este es sólo el primer paso hacia el open sourcing de StarkNet.**
* Ahora presentamos una[primera mirada](https://github.com/starkware-libs/cairo)al compilador de El Cairo 1.0. Ahora puedes empezar a experimentar con el código básico de El Cairo 1.0
* El Cairo 1.0 en su núcleo es muy similar a Rust
* Consideremos que es un primer gusto, no una liberación. Se están produciendo más mejoras. La primera versión del compilador está prevista para principios del primer trimestre del año que viene.
* El Cairo 1.0 aún no está soportado en StarkNet. Será apoyado en StarkNet en el primer trimestre del año próximo.

### Introducción

En 2020, lanzamos[El Cairo](https://eprint.iacr.org/2021/1063.pdf), un lenguaje de programación Turing completo que soporta computación verificable. El Cairo comenzó como un lenguaje de ensamblaje y poco a poco se volvió más expresivo. Hace dos meses, anunciamos[El Cairo 1.0](https://medium.com/starkware/cairo-1-0-aa96eefb19a0), que aborda algunos problemas importantes en la situación actual:

* Si bien la sintaxis de Cairo ha experimentado mejoras significativas desde su creación, la experiencia de los desarrolladores siempre puede mejorar. El Cairo 1.0 es un lenguaje totalmente escrito inspirado en oxígeno, lo que hace que escribir la misma lógica sea mucho más fácil y menos propenso a errores.
* El compilador existente se desarrolla en el mismo repositorio que el propio StarkNet, haciendo más difícil el seguimiento de los cambios de idioma. El compilador de El Cairo 1.0 está escrito desde cero, permitiendo un desarrollo más rápido de características y más conciencia comunitaria.
* Ahora todos los cálculos son probables. Actualmente, un programa de El Cairo puede fallar con entradas específicas (por ejemplo, al alcanzar una instrucción \`assert 1=2\` en alguna rama de cálculo), haciendo que el cálculo no sea probable. Con El Cairo 1.0, los programas son probables en todas las ramas posibles. Esto es especialmente importante para la protección de DOS y la resistencia a la censura en StarkNet.

Hoy marcamos el primer hito en alcanzar los objetivos arriba mencionados a medida que trasladamos el desarrollo a un repositorio público: y**código abierto El Cairo 1. !**Los desarrolladores pueden ahora, por primera vez, compilar y ejecutar programas simples de Cairo 1.0. Esto permite a los desarrolladores comenzar a experimentar con El Cairo 1. y se acostumbran gradualmente a las nuevas características, incluso si, en esta fase, no pueden implementarlo en StarkNet todavía.

### Capacidades actuales

Actualmente, puede compilar y ejecutar programas nativos básicos de El Cairo. Mientras que muchas de las mejoras de sintaxis/lenguaje siguen en marcha, esto permite acostumbrarse a El Cairo 1.0 y disfrutar de las actualizaciones a medida que llegan.

**Tenga en cuenta que escribir contratos de StarkNet todavía no es compatible.**La sintaxis StarkNet (variables de almacenamiento / contratos de llamadas / eventos y otras llamadas del sistema) se añadirá en las próximas semanas.

### Ejemplos de código

Para ilustrar las diferencias entre la sintaxis antigua y El Cairo 1. , hemos elegido mostrar algunas implementaciones/sabores diferentes para encontrar el n’th Fibonacci número.

### Ejemplo I: Coincidir expresiones

En El Cairo 1.0, puedes usar[coincidir con](https://doc.rust-lang.org/rust-by-example/flow_control/match.html?highlight=match#match)expresiones. ¡Ya no temerá las afirmaciones si/si no, que pueden causar revocación de referencia!

![](/assets/code01.png)

### Ejemplo II: Tipos de datos

Mientras que El Cairo 0 trabajó con felts y punteros, en El Cairo 1.0 tenemos acceso nativo a tipos de datos complejos en el idioma. A continuación puede encontrar un ejemplo que genera una matriz de los primeros números de Fibonacci n .

![](/assets/code02.png)

Como puedes ver arriba, en lugar de trabajar directamente con punteros de memoria, usamos el `Array::<felt>Tipo \` y la función \`array_append\`.

### Ejemplo III: estructuras & propiedad

El siguiente código ilustra el uso de estructuras en El Cairo 1.0.

![](/assets/code03.png)

> El siguiente párrafo está destinado a los rustáceos entre la audiencia. El Cairo 1.0 maneja memoria de manera similar a la oxidación. En particular, utiliza los conceptos de[propiedad y préstamo](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html). Así, accediendo a un miembro de la estructura \`FibResult\` (en este caso, \`result. alue\`), hemos movido \`result\`, lo que significa que a menos que FibResult sea copiable, no podemos volver a acceder a él en \`result.index\`. Para superar esto, sumamos el atributo \`#\[derive(Copy)]\` del tipo \`FibResult\`. En versiones futuras, añadiremos la deconstrucción automática para las estructuras. Esto permitirá mover la propiedad de un miembro sin tocar a los demás (en particular, el código anterior compilaría incluso si \`FibResult\` no tuviera el atributo de copia).

**En particular, tenga en cuenta que El Cairo 1.0 está abusando por completo del modelo original de memoria de Cairo (no determinista sólo de lectura).**

## Ejemplo de IV: propagación de errores

El siguiente código calcula el n'th Fibonacci número, pero a diferencia de los ejemplos anteriores, todas las entradas son del tipo uint128. Tenga en cuenta que esto resuelve un gran punto de dolor en el manejo de uints en El Cairo 0. AquГ­, uint128 (y en el futuro uint256) son los tipos nativos.

![](/assets/0_s8bhjf_ade3carmi.png)

La adición de dos enteros de 128 bits puede causar un desbordamiento. El código anterior utiliza el[enum de opción](https://doc.rust-lang.org/rust-by-example/std/option.html)y el[operador de signo de interrogación](https://doc.rust-lang.org/rust-by-example/std/result/question_mark.html)para manejar el caso del desbordamiento en una de las adiciones intermedias. Compare esto con la sintaxis de suma[actual](https://github.com/starkware-libs/cairo-lang/blob/9889fbd522edc5eff603356e1912e20642ae20af/src/starkware/cairo/common/uint256.cairo#L31)uint256, donde la función \`unit256_check\` tuvo que ser llamada para garantizar la solidez. Además, en un futuro próximo. añadiremos el concepto de \`panic\` al idioma (similar a la macro[de](https://doc.rust-lang.org/rust-by-example/std/panic.html)en robo), y errores sencillos como el desbordamiento de la adición serán incapacables y propagados automáticamente, lo que significa que no tendrás que usar \`Option\` o \`? ` al añadir uints.

## Pruébalo tú mismo

¡Ahora puede compilar y ejecutar programas actualmente compatibles con Cairo 1.0! Sigue estas[instrucciones](https://github.com/starkware-libs/cairo/tree/main/crates/cairo-lang-runner)sobre cómo usar el comando \`cairo-run\`. Ten en cuenta que bajo el capó, la[VM de Rust Cairo](https://github.com/lambdaclass/cairo-rs)desarrollada por[Lambdaclass](https://lambdaclass.com/), se utiliza para ejecución.

Puedes encontrar más ejemplos para ayudarte a comenzar[aquí](https://github.com/starkware-libs/cairo2/tree/main/examples). Tenga en cuenta que este es sólo el primer vistazo al desarrollo del compilador; en las próximas semanas, mejoraremos el CLI junto al compilador.

## Planes futuros

El enfoque de la primera versión del Compilador, que está previsto para principios de Q1, es el apoyo a toda la funcionalidad existente de StarkNet en El Cairo 1.0. Además, estamos trabajando en ampliar las capacidades del compilador de El Cairo 1.0. En las próximas semanas, puedes esperar:

* Capacidades de StarkNet - escribir contratos inteligentes y usar llamadas de sistema.
* Bucles
* Nuevas funciones de biblioteca
* Servidor de idioma mejorado
* Una noción nativa de gas StarkNet

¡Asegúrate de estar atento y seguir el progreso del compilador!