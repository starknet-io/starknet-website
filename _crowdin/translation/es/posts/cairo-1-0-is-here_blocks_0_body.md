### TL;DR

* La primera versión de El Cairo 1.0 está aquí!
* Los desarrolladores pueden comenzar a escribir y probar programas de El Cairo 1.0
* La paridad de características con la versión anterior de El Cairo se alcanzará en las próximas semanas
* Se añadirá soporte para los contratos de StarkNet en la próxima versión de StarkNet Alpha

### Fondo

Estamos encantados de anunciar que la primera versión pública de El Cairo 1.0 ya está disponible. Esto marca un hito importante en la evolución de Cairo, que se introdujo por primera vez en 2020 como un lenguaje de programación Turing completo para escribir eficientemente programas demostrables de STARK. El Cairo 1.0 es un lenguaje de alto nivel ruso. Al igual que Rust, está pensado para permitir a los desarrolladores escribir fácilmente código que sea eficiente y seguro.

Desde sus inicios, Cairo se ha utilizado para crear aplicaciones de capa 2 que han manejado[más de $790 mil millones en transacciones, procesado más de 300 millones de transacciones y acuñado más de 90 millones de NFT](https://dashboard.starkware.co/starkex)todo realizado fuera de la cadena y liquidado en Ethereum con el integridad matemática garantizada por las pruebas STARK. El Cairo se convirtió en el cuarto lenguaje de programación más utilizado en el ecosistema[de la cadena de bloques](https://defillama.com/languages)en general. Con el lanzamiento de El Cairo 1. , nuestro objetivo es hacer el lenguaje aún más accesible y fácil de usar, al mismo tiempo que introducimos nuevas características que mejoran la seguridad y la comodidad.

Uno de los cambios más significativos en El Cairo 1.0 es la sintaxis. Nos hemos inspirado en**Rust**para crear un lenguaje más amigable con el desarrollador que sea más fácil de leer y escribir. La nueva versión de El Cairo permite escribir un código más seguro (escrito fuertemente, propiedad y prestado, etc.), siendo también más expresivo.

El Cairo 1.0 también introduce Sierra, una nueva representación intermedia que asegura**cada**ejecución del Cairo puede ser probada. Esto hace que El Cairo 1.0 sea especialmente adecuado para su uso en una red sin permisos como StarkNet, donde puede proporcionar una sólida protección de DoS y resistencia a la censura. Puedes leer más sobre Sierra en nuestro[post](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)anterior.

## ¡Primer sabor!

### ¿Qué puedes hacer hoy?

Los desarrolladores pueden comenzar a escribir, compilar y probar programas de El Cairo 1.0! Animamos a los desarrolladores a empezar a experimentar con El Cairo 1.0 y acostumbrarse a la nueva sintaxis y características.

Dado que El Cairo 1.0 sigue siendo desarrollado activamente, y las nuevas características se añaden constantemente, consulte el[repositorio de El Cairo](https://github.com/starkware-libs/cairo/)para obtener las últimas actualizaciones.

### ¿Qué sigue?

Por el momento, El Cairo 1. todavía le faltan algunas de las características soportadas en la versión anterior de El Cairo ([vea esta tabla para más detalles](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)). Nuestro próximo hito, que se espera en las próximas semanas, proporcionará la paridad de características de El Cairo 1.0 con la versión anterior. Puede rastrear el progreso hacia ese hito[aquí](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md).

### Soporte de Starknet

Se apoya la escritura de contratos StarkNet en El Cairo 1.0 (aunque todavía faltan algunas características). Sin embargo, StarkNet todavía no apoya el despliegue y ejecución de los contratos de El Cairo 1.0. StarkNet Alpha V0.11.0, planeado en las próximas semanas, introducirá la capacidad de desplegar y ejecutar contratos de El Cairo 1.0. La actualización a v0.11.0 marcará el comienzo del Periodo de Transition hacia un sistema que sólo ejecuta los contratos de El Cairo 1.0. Este período de transición terminará con la[Regenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4), esperada unos meses más tarde.

![](/assets/0_odxbxeacqdwizlfw.jpg)

### ¡Construyamos!

El objetivo de StarkNet es escalar exponencialmente Ethereum usando la integridad matemática de STARKs, y el objetivo de El Cairo es hacer esta escala exponencial accesible a los desarrolladores. Accesibilidad significa un lenguaje de programación eficiente, fácil de leer y escribir, y seguro de usar. Esperamos que el lanzamiento de El Cairo 1.0 inspire aún más desarrolladores a unirse a StarkNet y a escala de Ethereum para satisfacer la demanda global.