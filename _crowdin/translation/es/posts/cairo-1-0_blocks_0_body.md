### TL;DR

* El Cairo 1.0 es el primer lanzamiento importante después de la[introducción de El Cairo](https://medium.com/starkware/hello-cairo-3cb43b13b209)hace dos años
* El Cairo 1.0 dará a los desarrolladores un lenguaje de programación más seguro, simple y utilizable
* En el corazón de El Cairo 1.0 estará**Sierra**, una capa de representación intermedia que promete una mayor estabilidad a largo plazo para los programas de El Cairo
* Sierra avanza El Cairo para servir en una red sin permisos:\
  -**Protegiendo la red**: permite una protección más robusta del DoS\
  -**Protegiendo al usuario**: permite resistencia a la censura de grado Ethereum 1 afectará a StarkNet de muchas maneras. También afectará la[Regenesis](https://medium.com/starkware/regenesis-starknets-no-sweat-state-reset-e296b12b80ae). Publicaremos más información sobre Regenesis en las próximas semanas.

### Introducción

En 2020 lanzamos Cairo, un lenguaje de programación Turing completo, y dimos un gran paso hacia el soporte de computación verificable usando STARKs. Hoy anunciamos**El Cairo 1.0**, el mayor avance del Cairo hasta la fecha. Introducirá un lenguaje mejorado, con características que mejorarán la usabilidad, la seguridad y la comodidad. Está diseñado para apoyar los requisitos de StarkNet como una red sin permisos, permitiendo que el protocolo sea más simple y seguro.\
El desarrollo ya está en curso, y esperamos que la primera versión ocurra pronto.

En este post describiremos el viaje de El Cairo hasta ahora y compartiremos detalles sobre las próximas características.

### La Revista de El Cairo

Hasta 2020, se necesitaba conocimiento niche para construir programas demostrables de STARK para el cálculo general. Sólo era posible para aquellos que comprendieron las matemáticas complejas detrás de STARKs. Específicamente, para cada lógica de negocio, e.j. cada cálculo, necesario para generar una Representación Intermedia Algebraica (AIR) — un conjunto de restricciones polinómicas que representan el cálculo específico.

El Cairo nació de la comprensión de que los cálculos verificables deberían estar disponibles para los desarrolladores de todo el mundo. El Cairo permite a los desarrolladores aprovechar el poder de los STARKs.

Desde entonces, la comunidad de desarrolladores se ha apoderado de El Cairo para construir entusiasmo. Todo en el emocionante ecosistema StarkNet hoy está basado en Cairo. Entre[StarkNet](https://starkware.co/starknet/)y[StarkEx](https://starkware.co/starkex/), las aplicaciones alimentadas por Cairo han procesado más de 220M transacciones. mintó más de 65M NFTs, y manejó $700B en operaciones, todas saldadas en Ethereum.

Aunque El Cairo hizo accesibles, fue diseñado originalmente como un lenguaje de ensamblaje, y como tal fue escrito como un lenguaje de bajo nivel.

![Un ejemplo para los primeros programas escritos en El Cairo](/assets/cairocode_01.png "Un ejemplo para los primeros programas escritos en El Cairo")

Prompetados por los comentarios de los desarrolladores y el ascenso de[StarkNet](https://starkware.co/starknet/), gradualmente hicimos que El Cairo fuera más expresivo y más amigable con el desarrollo.

![Un ejemplo del contrato ERCATICairo que demuestra el soporte de variables, si las sentencias, errores y la biblioteca UINT256](/assets/cairocode_02.png "Un ejemplo del contrato ERCATICairo que demuestra el soporte de variables, si las sentencias, errores y la biblioteca UINT256")

Pero pronto llegamos a la conclusión de que ya es hora de dar un gran salto adelante y, por tanto, de dar un gran paso adelante. en lugar de mejoras incrementales en Cairo, ir a una transformación más audaz.

### Cairo 1.0

Para El Cairo 1. hemos construido un nuevo compilador desde cero, que proporcionará a los desarrolladores funciones de seguridad, y les permitirá escribir contratos de una manera más sencilla y expresiva.

#### Introducción a Sierra: asegurar que cada salida de El Cairo pueda ser probado

La adición principal en El Cairo 1. is Sierra (**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**tion). Sierra constituye una nueva capa intermedia de representación entre El Cairo 1.0 y el código de byte de El Cairo. El objetivo de Sierra es garantizar que todas las operaciones de El Cairo —es decir, un programa de El Cairo y sus aportaciones— puedan ser probadas (ver más abajo).

Sierra promete que El Cairo desarrollará un mejor código a prueba de futuro. Una mayor estabilidad es el hecho de que los contratos de StarkNet no necesitarán recompilar en caso de mejoras en el sistema subyacente (e. ., la arquitectura de CPU AIR cambia, mejoras de la traducción final del código de byte de Sierra al Cairo).

**Probando cada carrera de El Cairo.**En el Cairo, una ejecución de El Cairo puede resultar en tres casos: TRUE, FALSE, o fracaso. Las ejecuciones fallidas no pueden ser probadas. Sierra, se asegura de que una carrera de El Cairo nunca fallará, y sólo puede resultar en TRUE o FALSE. Esto, a su vez, garantiza que todas las operaciones de El Cairo puedan ser probadas.

Esta introducción de Sierra tiene importantes implicaciones para StarkNet como red sin permisos. Sierra asegura que incluso las transacciones revertidas pueden ser incluidas en los bloques StarkNet. Esta propiedad permitirá que el protocolo StarkNet siga siendo delgado y simple sin la necesidad de añadir mecanismos criptoeconómicos complejos.\
Dos ejemplos significativos:

1. Los secuenciadores podrán cobrar comisiones por transacciones revertidas, lo que permitirá a StarkNet prevenir el Sequencer DoS de una manera bien establecida.
2. La implementación de transacciones forzadas de L1 será posible, permitiendo a StarkNet heredar la plena resistencia a la censura de Ethereum.

### **Características del idioma**

El Cairo 1.0 ofrecerá muchas mejoras al propio lenguaje de programación. No todo lo que se enumera a continuación será parte de la primera versión, pero es parte de la ruta.

#### **Sintaxis mejorada**

* No hay más*local*y*tempvar*. Ahora solo necesitamos*dejar*para dominar todas las variables.
* Se ha mejorado*si*sentencias sintaxis

```python
#Antiguo
si cónd! 0 {
  tempvar x = x+1;
} else {
  tempvar x = x;
}
__________________________________
#Nuevo
si cond { x = x + 1; }
```

#### **Garantías de seguridad de tipo**

El compilador usará un fuerte tecleo para mejorar la seguridad del código. Por ejemplo:

* Los punteros siempre apuntan a la memoria inicializada.
* Los diccionarios siempre serán aplastados, en lugar de dejar la responsabilidad de llamar a squash_dict al programador.

#### **Más fácil de usar construcciones de lenguaje**

Por ejemplo:

* Bucles para

```
let sum = 0
for x in iter {
  sum = sum + x;
}
```

* Expresiones booleanas
* Enteros (con división entera normal :peopleple_with_bunny_ears:)
* Protección de sobreflujo para los tipos relevantes
* Condiciones booleanas

```
#Old
If cond1:
  if cond2:
       # Algún código
  else if cond3:
       # Mismo código
__________________________________
#Nuevo
If cond1 && (cond2 || cond3) { … }
```

#### **Un sistema de tipo completo**

* Tipos de datos abstractos (ej. Enumeración rusa)

```
enum Option<T> {
 Alguno: T,
 None,
}
resultado de coincidencia {
 Some(r) => {..},
 Ninguno => {..},
}
```

* Rasgos

```
trait Add<Uint256> {
    fn add(…) { … }
}

let a: Uint256 = 1;
let b: Uint256 = 4;
a + b; // Evaluado a 5 del tipo Uint256.
```

#### **Bibliotecas más intuitivas**

(ej. dictos, arreglos)

* Dice<Uint256, MyStruct>
* Matriz<MyOtherStruct>;

#### **Código más optimizado**

No hay necesidad de especificar explícitamente la asignación de variables locales — auto detectado y hecho automáticamente.

#### **Mejor integración del compilador**

Habilitando un mejor soporte para IDE, gestión de paquetes y una mejor facilitación de las contribuciones comunitarias.

### **Conclusión**

Dos años después de que El Cairo se utilizara por primera vez en la producción, estamos desarrollando El Cairo 1.0, lo que proporcionará mayor expresibilidad, seguridad y sintaxis. Tomará un gran paso adelante, lo que permitirá a los desarrolladores escribir más fácilmente sus contratos de StarkNet.

En otro puesto, próximamente, compartiremos más detalles sobre cómo El Cairo 1. afectará la regenesia de StarkNet y cómo los desarrolladores deben prepararse para su lanzamiento.