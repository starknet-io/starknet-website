### TL;DR

* Los registros de validez no están limitados de la misma manera que los L1s. Esto da lugar a un SPT potencialmente mucho más alto en los registros de validez L2.
* El mapa de rendimiento StarkNet aborda un elemento clave en el sistema: el secuenciador.
* Aquí presentamos el mapa de ruta para las mejoras de rendimiento:\
  — paralelización del secuenciador\
  — Una nueva implementación de la máquina virtual de El Cairo\
  — Re-implementación del secuenciador en el óxido\
* Proveedores, ya que están probados en la batalla, no son el cuello de botella y pueden manejar mucho más de lo que lo hacen ahora.

### Introducción

StarkNet lanzó en Mainnet hace casi un año. Empezamos a construir StarkNet centrándonos en la funcionalidad. Ahora, cambiamos el enfoque para mejorar el rendimiento con una serie de pasos que ayudarán a mejorar la experiencia de StarkNet.

En este post explicamos por qué hay una amplia gama de optimizaciones que sólo son aplicables en los registros de validez, y compartiremos nuestro plan de implementar estos pasos en StarkNet. Algunos de estos pasos ya están implementados en StarkNet Alpha 0.10.2, que fue lanzado en Testnet el 16 de Noviembre y ayer en Mainnet. Pero antes de discutir las soluciones, revisemos las limitaciones y su causa.

### Limitaciones de bloques: registros de validez versus L1

Un enfoque potencial para aumentar la escalabilidad de la cadena de bloques y aumentar TPS sería levantar las limitaciones de bloque (en términos de gas/tamaño) mientras se mantiene constante el tiempo del bloque. Esto requeriría más esfuerzo de los productores de bloques (validadores en L1, secuenciadores sobre L2) y por lo tanto requieren una implementación más eficiente de esos componentes. Con este fin, ahora desplazamos el foco hacia las optimizaciones del secuenciador StarkNet, que describimos con más detalle en las siguientes secciones.

Aquí se plantea una cuestión natural. ¿Por qué las optimizaciones del secuenciador se limitan a las capturas de validez, es decir, ¿Por qué no podemos implementar las mismas mejoras en el L1 y evitar por completo las complejidades de los registros de validez? En la siguiente sección, afirmamos que hay una diferencia fundamental entre ambos, permitir una amplia gama de optimizaciones en L2 que no son aplicables a L1.

### ¿Por qué es limitado el rendimiento de L1?

Desgraciadamente, el levantamiento de las limitaciones de bloque sobre el L1 sufre de una caída importante. Al aumentar la tasa de crecimiento de la cadena, también incrementamos las demandas de los nodos completos, que están intentando mantenerse al día con el estado más reciente. Puesto que los nodos completos L1 deben volver a ejecutar todo el historial, un alto aumento en el tamaño del bloque (en términos de gas) los ejerce una presión significativa sobre ellos. conducen de nuevo a máquinas más débiles abandonando el sistema y dejando la capacidad de ejecutar nodos completos sólo a entidades suficientemente grandes. Como resultado, los usuarios no podrán verificar el estado en sí mismos y participar en la red sin confianza.

Esto nos deja con la idea de que el avance del L1 debe ser limitado, con el fin de mantener un sistema verdaderamente descentralizado y seguro.

### ¿Por qué las mismas barreras no afectan a las reducciones de validez?

**Sólo cuando se considera la perspectiva completa del nodo vemos el poder verdadero que ofrecen los rollup de validez.**Un nodo L1 completo necesita volver a ejecutar toda la historia para asegurar la corrección del estado actual. Los nodos StarkNet sólo necesitan verificar pruebas STARK, y esta verificación requiere una cantidad exponencialmente menor de recursos computacionales. En particular, la sincronización desde cero no tiene que implicar la ejecución; un nodo puede recibir un volcado del estado actual de sus pares y sólo verificar a través de una prueba STARK que este estado es válido. Esto nos permite aumentar el rendimiento de la red sin aumentar los requerimientos del nodo completo.

Por lo tanto, concluimos que el secuenciador L2 está sujeto a todo un espectro de optimizaciones que no son posibles en una L1.

### Rutas de rendimiento adelante

En las siguientes secciones, discutimos cuáles de ellas están actualmente planeadas para el secuenciador StarkNet.

### paralelización del secuenciador

El primer paso en nuestro mapa de ruta fue introducir paralelización a la ejecución de la transacción. Esto se introdujo en StarkNet alpha 0.10.2, que se publicó ayer en Mainnet. Ahora nos sumamos a lo que es la paralelización (esta es una sección semi técnica, para continuar en la ruta, saltar a la siguiente sección).

¿Qué significa entonces “paralelización de las transacciones”? Naively, ejecutar un bloque de transacciones en paralelo es imposible ya que diferentes transacciones pueden ser dependientes. Esto se ilustra en el ejemplo siguiente. Considera un bloque con tres transacciones del mismo usuario:

* Transacción A: Intercambiar USDC por ETH
* Transacción B: pagar ETH por un NFT
* Transacción C: intercambiar USDT por BTC

Claramente, Tx A debe pasar antes de Tx B, pero Tx C es totalmente independiente de ambos y puede ser ejecutado en paralelo. Si cada transacción requiere 1 segundo para ejecutarse, entonces el tiempo de producción del bloque puede reducirse de 3 segundos a 2 segundos introduciendo paralelización.

El quid del problema es que no conocemos las dependencias de las transacciones de antemano. En la práctica, sólo cuando ejecutamos la transacción B de nuestro ejemplo vemos que se basa en cambios realizados por la transacción A. Más formalmente, la dependencia se deriva del hecho de que la transacción B lee de las celdas de almacenamiento a las que la transacción A ha escrito. Podemos pensar que las transacciones forman una gráfica de dependencia, donde hay una ventaja de la transacción A a la transacción B iff A escribe en una celda de almacenamiento que es leída por B, y por lo tanto tiene que ejecutarse antes de B. La siguiente figura muestra un ejemplo de tal gráfico de dependencia:

![](https://miro.medium.com/max/641/0*I-qGgxdJJmqmgZWM)

En el ejemplo anterior, cada columna puede ser ejecutada en paralelo, y este es el arreglo óptimo (aunque ingenuamente, habríamos ejecutado las transacciones de 1 a 9 secuencialmente).

Para superar el hecho de que el gráfico de dependencias no es conocido de antemano, introducimos***paralelización optimista***, en el espíritu de[BLOCK-STM](https://malkhi.com/posts/2022/04/block-stm/)desarrollado por Aptos Labs, al secuenciador StarkNet. Bajo este paraíso, intentamos de forma optimista ejecutar transacciones en paralelo y volver a ejecutar al encontrar una colisión. Por ejemplo, podemos ejecutar las transacciones 1–4 de la figura 1 en paralelo, sólo para averiguar después que Tx4 depende de Tx1. Por lo tanto, su ejecución fue inútil (lo ejecutamos en relación al mismo estado en el que ejecutamos Tx1, mientras que deberíamos haberlo ejecutado contra el estado resultante de la aplicación de Tx1). En ese caso, volveremos a ejecutar Tx4.

Tenga en cuenta que podemos añadir muchas optimizaciones además de la paralelización optimista. Por ejemplo, en lugar de esperar ingenuamente a que termine cada ejecución, podemos abortar una ejecución en el momento en que encontramos una dependencia que la invale.

Otro ejemplo es optimizar la elección de qué transacciones volver a ejecutar. Supongamos que un bloque que consiste en todas las transacciones de la figura 1 es alimentado a un secuenciador con cinco núcleos de CPU. Primero, tratamos de ejecutar las transacciones 1–5 en paralelo. Si el orden de realización fue Tx2, Tx3, Tx4, Tx1, y finalmente Tx5, entonces encontraremos la dependencia Tx1→ Tx4 sólo después de que Tx4 ya fue ejecutado — indicando que debería ser re-ejecutado. Naively, podemos querer también volver a ejecutar Tx5 ya que puede comportarse de forma diferente dada la nueva ejecución de Tx4. Sin embargo, en lugar de volver a ejecutar todas las transacciones después de la ahora invalidada Tx4, podemos recorrer el gráfico de dependencias construido a partir de las transacciones cuya ejecución ya ha finalizado y sólo volver a ejecutar transacciones que dependían de Tx4.

### Una nueva implementación de Rust para la Cairo-VM

Los contratos Smart en StarkNet están escritos en El Cairo y son ejecutados dentro de la MV del Cairo, la cual aparece en el[papel del Cairo](https://eprint.iacr.org/2021/1063.pdf). Actualmente, el secuenciador está usando una[implementación de python](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/cairo/lang/vm)de la Cairo-VM. Para optimizar el rendimiento de la implementación de la MV, hemos lanzado un esfuerzo de reescribir la MV en rust. Gracias al gran trabajo de[Lambdaclass](https://lambdaclass.com/), que por ahora son un equipo invaluable en el ecosistema StarkNet, este esfuerzo pronto está dando sus frutos.

La implementación de polvo de la MV,[cairo-rs](https://github.com/lambdaclass/cairo-rs), ahora puede ejecutar código nativo de El Cairo. El siguiente paso es el manejo de la ejecución de contratos inteligentes e integraciones con el secuenciador pitónico. Una vez integrado con cairo-rs, se espera que el rendimiento del secuenciador mejore significativamente.

### Reimplementación del secuenciador en Rust

Nuestro cambio de python a la oxidación para mejorar el rendimiento no se limita a la MV de El Cairo. Junto con las mejoras mencionadas anteriormente, tenemos previsto reescribir el secuenciador desde cero en el óxido. Además de las ventajas internas de Rust, esto representa una oportunidad para otras optimizaciones para el secuenciador. En la lista de una pareja, podemos disfrutar de los beneficios de cairo-rs sin la sobrecarga de la comunicación de pithon-robust. y podemos rediseñar completamente la forma en que se almacena y se accede al estado (que hoy está basado en la estructura[Patricia-Trie](https://docs.starknet.io/documentation/develop/State/starknet-state/#state_commitment)).

### ¿Qué pasa con las promesas?

A lo largo de este puesto, no mencionamos el elemento quizás más famoso de las inscripciones de validez: el prover. Uno podría imaginar que siendo el componente más sofisticado de la arquitectura, debería ser el cuello de botella y, por lo tanto, el foco de la optimización. Curiosamente, son los componentes más “estándares” los que ahora son el cuello de botella de StarkNet. Hoy, particularmente con[pruebas recursivas](https://medium.com/starkware/recursive-starks-78f8dd401025), podemos encajar muchas más transacciones que el tráfico actual en Testnet/Mainnet en una prueba. De hecho, hoy en día, los bloques StarkNet están probados junto a las transacciones de StarkEx, donde estos últimos a veces pueden incurrir en varios cientos de miles de mines NFT.

### Summary

Paralelización, Rust y más — prepárate para un mejor TPS en las próximas versiones de StarkNet.