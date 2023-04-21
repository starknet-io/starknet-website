### TL;DR

* recursive Proving está en vivo en Mainnet, escalando aplicaciones StarkEx así como StarkNet con una única prueba
* Aumenta la escala y genera beneficios en costo, y latencia (una ocurrencia rara y emocionante de escala y latencia que se mueve en tándem, y no ser una compensación)
* Establece el escenario para L3 y otros beneficiosGo leer la entrada del blog en[Proving recursivo](https://medium.com/@starkware/recursive-starks-78f8dd401025). Son cosas geniales 😉

### ¡Escalando!

Las pruebas recursivas, alimentadas por el cálculo general de Cairo, están ahora en producción. Esto marca un importante impulso a la potencia de la escala de L2 con STARKs. Entregará rápidamente un aumento múltiple en el número de transacciones que se pueden escribir en Ethereum a través de una sola prueba.

Hasta ahora, la escalada de STARK ha funcionado al “lanzar” decenas o incluso cientos de miles de transacciones en una sola prueba, que fue escrito en Ethereum. Con la recursión, muchas de esas pruebas pueden “enrollarse” en una sola prueba.

Este método está ahora en producción para una multitud de aplicaciones basadas en Cairo: aplicaciones que se ejecutan en StarkEx, el motor de escalado SaaS de StarkWare y StarkNet, la aplicación sin permisos.

### La historia hasta ahora

Desde la primera prueba en Mainnet, en marzo de 2020, los siguientes acontecimientos han dado forma a cómo se utilizan los STARKs.

### Escala basada en STARK

En junio de 2020 se desplegó en Ethereum Mainnet la primera solución de escalado basada en STARK:[StarkEx](https://youtu.be/P-qoPVoneQA). StarkEx tiene un Prover que realiza grandes cálculos fuera de la cadena y produce una prueba de STARK por su corrección, y un Verifier que verifica esta prueba en cadena. Las restricciones para este primer despliegue fueron “escritas a mano” por los ingenieros de StarkWare, lo que limitó en gran medida la velocidad de las características para StarkEx. Concluimos que se necesita un lenguaje de programación para apoyar la prueba de cálculo general — Cairo.

#### Cairo

En el verano de 2020 El Cairo hizo su[primera aparición en Ethereum Mainnet](https://medium.com/starkware/hello-cairo-3cb43b13b209). El Cairo significa Representación Intermedia de Algebraic de CPU (AIR), e incluye un único AIR que verifica el conjunto de instrucciones de esta “CPU”. Abrió la puerta a las pruebas de codificación para una lógica empresarial más compleja, para sentencias computacionales arbitrarias, y para hacerlo de una manera más rápida y segura. Un programa de El Cairo puede probar la ejecución de la lógica de una sola aplicación. Pero un programa de El Cairo también puede ser una concatenación de múltiples aplicaciones de este tipo, SHARP.

#### REAPARECER

SHARP — un SHARed Prover — toma transacciones desde varias aplicaciones separadas, y las prueba todas en una única prueba de STARK. Las aplicaciones combinan sus lotes de transacciones, llenando la capacidad de un STARK más rápido. Las transacciones se procesan a un ritmo y latencia mejorados. La siguiente frontera: Pruebas recursivas, pero no solo para una lógica dura, sino más bien para**cálculo general**.

Para entender todo el beneficio de la Prueba recursiva vale la pena entender un poco más sobre cómo (no recursiva) la prueba fue realizada por SHARP hasta ahora. Dibujar 1 representa un flujo no recursivo típico:

![Dibujo 1: Un típico flujo de prueba no recursiva](/assets/recursive_starks_01.png "Dibujo 1: Un típico flujo de prueba no recursiva")

Aquí, las declaraciones llegan con el tiempo. Cuando se alcanza un umbral de cierta capacidad (o tiempo), se genera una gran declaración combinada (también llamado Train). Esta declaración combinada sólo se demuestra una vez que se han recibido todas las declaraciones individuales. Esta prueba toma mucho tiempo para probar (aproximadamente la suma de tiempo que toma probar cada sentencia individualmente).

Demostrar declaraciones extremadamente grandes eventualmente está limitado por recursos de cómputo disponibles como la memoria. Antes de la recurrencia, se trataba efectivamente de la barrera de escalabilidad limitada de STARK probando.

### ¿Qué es Provenza recursiva?

Con pruebas de STARK, el tiempo que se tarda en probar una declaración es más o menos lineal con el tiempo que se tarda en ejecutar la declaración. Además, si probar una sentencia toma un tiempo T, entonces verificar la prueba toma aproximadamente un tiempo de log(T), que normalmente se llama “compresión logarítmica”. En otras palabras, con STARKs se pasa mucho menos tiempo en verificar el comando que en calcularlo.

[El Cairo](https://starkware.co/cairo/)permite expresar declaraciones computacionales generales que pueden ser probadas por pruebas de STARK y verificadas por los verificadores correspondientes de STARK.

Aquí es donde la oportunidad de realizar[recursión](https://en.wikipedia.org/wiki/Recursion)patea en: de la misma manera que escribimos un programa de El Cairo que demuestra la exactitud de miles de transacciones, también podemos escribir un programa de El Cairo que verifique múltiples pruebas de STARK. Podemos generar una única prueba que demuestre la validez de múltiples pruebas “aguas arriba”. Esto es lo que llamamos Provenza recursiva.

Debido a la compresión logarítmica y el tiempo de prueba lineal aproximadamente, probar una verificación de una prueba de STARK toma un tiempo relativamente corto (se espera que sea sólo unos minutos en el futuro cercano).

Al implementar recurso, el SHARP puede probar declaraciones a su llegada. Sus pruebas pueden fusionarse una y otra vez en pruebas recursivas en varios patrones hasta que, en un determinado momento, la prueba resultante se somete a un contrato de verificador en cadena. Un patrón típico se muestra en el Dibujo 2:

![Dibujo 2: Un típico flujo de prueba recursiva.](/assets/recursive_starks_02.png "Dibujo 2: Un típico flujo de prueba recursiva.")

### Beneficios inmediatos de la prueba recursiva

#### Costo reducido de la cadena

Fuera del murciélago, logramos la “compresión” de múltiples pruebas en una sola, lo que implica un menor costo de verificación en cadena por transacción (donde cada extracto puede incluir muchas transacciones).

Con recursión, la barrera de recursos computacionales (p. ej. memoria) que el tamaño de las pruebas limitadas hasta ahora, es eliminado, ya que cada declaración de tamaño limitado puede ser probada por separado. Por lo tanto, cuando se utiliza recursión, el tamaño efectivo del tren de recursión es casi ilimitado y el costo por transacción puede reducirse por órdenes de magnitud.

En términos prácticos, la reducción depende de la latencia aceptable (y del ritmo al que llegan las transacciones). Además, ya que cada prueba está típicamente acompañada de alguna salida como los datos en cadena, hay límites a la cantidad de datos que pueden ser escritos en cadena junto con una única prueba. Sin embargo, reducir los costes en un orden de magnitud y aún mejor es trivialmente alcanzable.

#### Latencia reducida

El patrón de Prueba recursiva reduce la latencia de probar grandes Trenes de declaraciones. Este es el resultado de dos factores:

1. Las proposiciones entrantes pueden probarse**en paralelo**(en lugar de demostrar una proposición combinada extremadamente grande).
2. No hay necesidad de esperar hasta que llegue la última declaración en el tren para empezar a demostrar. Más bien, las pruebas pueden combinarse con nuevas declaraciones cuando llegan. Esto significa que la latencia de la última declaración de unirse a un tren, es aproximadamente el tiempo que se tarda en demostrar que la última sentencia más el tiempo que se tarda en probar una sentencia Verifier recursiva (que atestigua todas aquellas afirmaciones que ya han “incluido” este Entrenamiento en particular).

Estamos desarrollando y optimizando activamente la latencia de probar la declaración Verificador recursivo. Esperamos que esto alcance el orden de unos minutos en unos pocos meses. Por lo tanto, un SHARP altamente eficiente puede ofrecer latencias desde unos minutos hasta unas pocas horas, dependiendo de la compensación frente al costo de la cadena por transacción. Esto representa una mejora significativa de la latencia de SHARP.

#### Facilitando L3

El desarrollo de la declaración del Verificador recursivo en El Cairo también abre la posibilidad de presentar pruebas a StarkNet, ya que esa declaración se puede pegar en un contrato inteligente de StarkNet. Esto permite construir[implementaciones de L3 sobre el StarkNet público](https://medium.com/starkware/fractal-scaling-from-l2-to-l3-7fe238ecfb4f)(una red de L2).

El patrón recursivo también se aplica a la agregación de pruebas de L3, que se verificará mediante una única prueba en L2. Por lo tanto, también allí se consigue una escala de hiperación.

### Beneficios más sutiles

#### Recursión solicitada

El recurso abre aún más oportunidades para plataformas y aplicaciones que deseen escalar aún más su costo y rendimiento.

Cada prueba de STARK atestigua la validez de una declaración aplicada a alguna entrada conocida como la “entrada pública” (o “salida del programa” en términos de El Cairo). Conceptualmente, la recursión de STARK comprime dos pruebas con*dos*entradas en*una*prueba con dos entradas. En otras palabras, mientras se reduce el número de pruebas, el número de insumos se mantiene constante. Estas entradas son típicamente usadas por una aplicación para actualizar algún estado en L1 (e. para actualizar una raíz de estado o realizar un retiro en cadena).

Si la sentencia recursiva puede ser*consciente de la aplicación*, i.e. reconoce la semántica de la propia aplicación puede comprimir dos pruebas en una*así como*combinar las dos entradas en una. La sentencia resultante confirma la validez de la combinación de entrada basada en la semántica de la aplicación, Por lo tanto, el nombre Recursión Aplicativa (ver Dibujo 3, para un ejemplo)..

![Dibujando 3: Ejemplo de recurso aplicado](/assets/recursive_starks_03.png "Dibujando 3: Ejemplo de recurso aplicado")

Aquí, la declaración 1 atestigua una actualización del estado de A a B y la declaración 2 atestigua una actualización adicional de B a C. Las pruebas de la Declaración 1 y la Declaración 2 pueden combinarse en una tercera declaración, que atestigua la actualización directa de A a C. Aplicando una lógica similar recursivamente, uno puede reducir el costo de las actualizaciones estatales de manera muy significativa hasta el requerimiento de latencia final.

Otro ejemplo importante de Recursión Aplicativa es la compresión de datos acumulativos de múltiples pruebas. Por ejemplo, para un Rollup de Validez como StarkNet, cada actualización de almacenamiento en L2 también se incluye como datos de transmisión en L1, para asegurar la disponibilidad de los datos. Sin embargo, no hay necesidad de enviar actualizaciones múltiples para el mismo elemento de almacenamiento, como sólo el valor final de las transacciones atestiguadas por la prueba verificada es necesario para la disponibilidad de datos. Esta optimización ya se realiza dentro de un bloque*único*StarkNet. Sin embargo, al generar un comprobante por bloque, la recursión aplicativa puede comprimir estos datos enrollables a través de*múltiples bloques de*L2. Esto puede resultar en una reducción significativa de costes, permitiendo intervalos de bloques más cortos en L2, sin sacrificar la escalabilidad de las actualizaciones de L1.

Vale la observación: El Recurso Aplicativo puede combinarse con la recursión-agnóstico de la aplicación como se describe anteriormente. Estas dos optimizaciones son independientes.

#### Complejidad reducida del verificador en cadena

La complejidad del verificador STARK depende del tipo de sentencias que está diseñado para verificar. En particular, para las declaraciones de El Cairo, la complejidad del verificador depende de los elementos específicos permitidos en el lenguaje de El Cairo y, más específicamente, las incorporaciones soportadas (si usamos la metáfora de CPU para Cairo, entonces las incorporaciones son el equivalente de microcircuitos en una CPU: los cálculos realizados con tanta frecuencia que requieren su propio cálculo optimizado).

La lengua de El Cairo continúa evolucionando y ofreciendo cada vez más útiles incorporados. Por otro lado, el Verificador recursivo solo requiere usar un pequeño subconjunto de estos incorporados. Por lo tanto, un SHARP recursivo puede apoyar con éxito cualquier declaración en El Cairo apoyando el lenguaje completo en los verificadores recursivos. Específicamente, el verificador de solidez L1 solo necesita verificar pruebas recursivas, y por lo tanto puede limitarse a un subconjunto más estable del lenguaje de El Cairo: El Verificador L1 no necesita mantenerse al día con el último y más grande incorporado. En otras palabras, la verificación de sentencias complejas que evolucionan constantemente se relega a L2, dejando el Verifier L1 para verificar sentencias más simples y estables.

#### Huella calculada reducida

Antes de la recursión, la capacidad de agregación de múltiples sentencias en una prueba estaba limitada por el tamaño máximo del comando que podía ser probado en las instancias de computación disponibles (y el tiempo que podría tardar en generar tales pruebas).

Con la repetición ya no es necesario demostrar declaraciones tan grandes. Como resultado, más pequeño, Se pueden utilizar instancias de cálculo más baratas y disponibles (aunque se pueden necesitar más de ellas que con grandes propulsiones monolíticas). Esto permite el despliegue de instancias prover en entornos más físicos y virtuales que antes.

### Summary

Las pruebas recursivas de cómputo general ahora sirven múltiples sistemas de producción, incluyendo StarkNet, en Mainnet Ethereum.

Los beneficios de la recursión se realizarán gradualmente, ya que continúa permitiendo nuevas mejoras, y pronto entregará hiper-escala, recortarán las tarifas de gas y mejorarán la latencia desbloqueando el potencial de la paralelización.

Aportará importantes beneficios de coste y latencia, junto con nuevas oportunidades como el L3 y la recursión aplicativa. La optimización adicional del Verificador recursivo está en curso y se espera que con el tiempo se proporcionen mejores prestaciones y beneficios de costo.



**Gidi Kaempfer**, Jefe de Ingeniería de núcleos, StarkWare