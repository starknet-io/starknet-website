### TL;DR

* Estamos compartiendo un plan detallado para Regenesis, que ha sido moldeado por extensas discusiones con la comunidad StarkNet. Un agradecimiento especial a Kuba@SWM.
* Regenesis seguirá el lanzamiento de El Cairo 1.0, haciendo que el sistema sea más seguro al permitir contratos StarkNet más simples y seguros
* Los usuarios deben estar preparados para actualizar su cartera durante la fase de transición
* Los desarrolladores tendrán que transportar sus contratos a El Cairo 1.0

### Introducción

StarkNet Alpha está avanzando hacia Regenesis, un paso importante hacia la producción. En esta actualización queremos compartir más detalles sobre la motivación principal para la Regenesis —[El Cairo 1.](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)— y para empezar a explicar qué requerirá de los usuarios y desarrolladores. Después de Regenesis, StarkNet sólo trabajará con los contratos basados en El Cairo 1.0, y comenzará desde un nuevo bloque de génesis con el estado existente.

¿Qué requerirá Regenesis de los usuarios? Una simple actualización de su cartera. ¿Qué requerirá de los constructores de las aplicaciones de StarkNet? Transporte de sus contratos a El Cairo 1.0, y siguiendo una simple guía de actualización. Específicamente, no habrá reinicio desde un estado limpio y nos quedaremos con la misma instancia de StarkNet, lo que significa que no habrá necesidad de una migración**.**

El plan de Regenesis es preservar completamente el estado de las solicitudes y no incurrir en ningún tiempo de inactividad de las solicitudes. Así, las aplicaciones que sigan las pautas que proporcionaremos podrán lanzarse inmediatamente en StarkNet Alpha Mainnet sin molestias a su funcionamiento y a sus usuarios durante el proceso de Regenesis. e están comprometidos a trabajar con la comunidad y proporcionar todo el apoyo necesario para que este proceso sea lo más fluido posible.

Estamos tomando esta dirección como resultado de extensas discusiones con la comunidad, que incluyeron una importante sugerencia del equipo de Mansión de Software.

### ¿Por qué Regenesis?

#### El Cairo 1.0 y Sierra

La motivación principal de Regenesis es aprovechar las nuevas posibilidades que ofrece El Cairo 1. — a saber, la protección de secuenciadores DOS, la resistencia a la censura y la medición de gas, que son esenciales para StarkNet como una red descentralizada.

El Cairo 1.0 se asegurará de que cada transacción pueda ser probada. Esto permitirá a StarkNet incluir transacciones revertidas en bloques, y generar una prueba de su ejecución. Este mecanismo permitirá que se paguen secuenciadores en la ejecución de transacciones revertidas, aumentando la protección de DOS contra los actores maliciosos. Además, El Cairo 1.0 apoyará la medición de gas, lo que permitirá a StarkNet pasar a un mercado de tasas más intuitivo. Por último, esto permitirá a StarkNet introducir transacciones forzadas desde L1 y mejorará las capacidades de resistencia a la censura de la red.

Para cosechar estos beneficios, los contratos de El Cairo v0 y El Cairo 1.0 no se pueden mezclar. No se puede demostrar que las afirmaciones incorrectas son incorrectas, ni que el seguimiento del gas puede ocurrir, si tenemos partes de los contratos de El Cairo v0. A tal fin, necesitaremos eliminar por completo el código de El Cairo v0 del estado StarkNet, ergo Regenesis.

**Después de Regenesis, tendremos un sistema Starknet totalmente basado en El Cairo 1.0.**

#### Simplificando el código y el protocolo

StarkNet, mientras todavía en Alpha, ya experimentó muchos cambios. Hasta ahora cada versión alteraba el sistema operativo StarkNet, bloques y estructura de transacciones. Esto hizo que parte del código fuera obsoleto. Sin embargo, los nodos completos y los proveedores de infraestructura (como los indexadores y los exploradores estatales) deben ser conscientes, e implementar, todos los comportamientos pasados de las versiones StarkNet Alpha para sincronizar con el estado sin confianza. Sin Regenesis, esta carga podría ser un importante elemento disuasorio para los desarrolladores que considerarían la construcción de tales servicios para StarkNet.

Por lo tanto, antes de ir a la producción y como preparación a un mundo descentralizado con muchas herramientas de infraestructura, pretendemos reducir la complejidad del protocolo. Esto se lograría si no se necesitara una infraestructura futura para ejecutar ningún StarkNet 0. y marque el primer bloque después del período de transición como punto de génesis.

### ¿Regenesis? El cronograma general

Regenesis seguirá a la publicación de El Cairo 1.0, que está previsto que tendrá lugar a finales de 2022. Durante el primer trimestre de 2023, StarkNet se actualizará para apoyar a El Cairo 1. , y nuestro objetivo es migrar a una red totalmente basada en El Cairo para finales del Q1.

**Los usuarios y las aplicaciones tendrán que hacer la transición durante este período.**

![](/assets/1_ef85shzd2uudwex-cy8wdg-1.png)

### Entonces, ¿qué necesito saber?

Los desarrolladores de aplicaciones necesitan ser conscientes de los siguientes aspectos alrededor de Regenesis:

1. Asegúrese de que su contrato está listo para la actualización. Las técnicas completas del plan se comparten en el[Foro de la comunidad StarkNet](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080). Una vez finalizados los detalles, compartiremos una guía concisa.
2. Asegúrese de que está listo para transportar su código a El Cairo 1.0. Vea la siguiente sección para los últimos detalles.

#### Transporte su contrato a El Cairo 1.0

El Cairo 1.0 tiene una gran promesa para los desarrolladores de StarkNet. Una mejora en la existente El Cairo que será más segura, mejor y más fácil para escribir contratos, con mejor sintaxis, sistema de tipo completo (uint256 nativo de cualquiera? y más. Los desarrolladores tendrán que adaptar sus contratos StarkNet a la sintaxis de El Cairo 1.0. Sin embargo, como la lógica y la estructura del código permanecerán igual, se espera que este esfuerzo sea desdeñable en comparación con el esfuerzo que tomó para desarrollar la aplicación en primer lugar.

En este contexto, vale la pena notar que puede optar por volver a auditar la versión 1.0 de El Cairo de su aplicación. Si tu aplicación ya fue auditada en el pasado, el proceso de reauditoría será significativamente más barato y directo, ya que los auditores ya están familiarizados con su lógica.

Publicaremos toda la documentación en torno a El Cairo 1.0, junto con los tutoriales y talleres durante el Q4 de 2022.

### Soy un usuario de StarkNet. ¿Qué debo hacer?

Como usuario, es probable que tenga que tomar algunas acciones durante Regenesis. Como mínimo, tendrás que actualizar el contrato de tu cuenta. Si no lo hace durante el período de transición (unos pocos meses) resultará en la pérdida de su cuenta. Dependiendo de la ruta de actualización elegida por los desarrolladores de las aplicaciones StarkNet que está usando, puede que tenga que dar pasos adicionales.

Recordamos a todos que StarkNet todavía está en la fase Alpha, y los usuarios están obligados a permanecer atentos a las comunicaciones de StarkNet y a las aplicaciones que están utilizando. Es su responsabilidad asegurarse de que actualiza antes al nuevo sistema. *Ser un adoptor temprano no siempre es fácil, ¡contamos con ti para hacer tu parte!*

### A Concluir

El Cairo 1.0 está a la vuelta de la esquina, proporcionando muchos beneficios y mejoras emocionantes para StarkNet y sus desarrolladores. Para cosechar estos, se necesita un evento Regenesis de la red. Por suerte, tenemos en mente un diseño que hace que este proceso sea mínimamente perturbador — completamente transparente para los usuarios, y bastante sencillo para las aplicaciones.

Te instamos a participar en la discusión sobre la comunidad[](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080)y compartir tus comentarios y preocupaciones, así como mantenerse al día con respecto a los pasos que necesitará tomar como desarrollador de aplicaciones en StarkNet.