#### **TL;DR**

Estamos construyendo StarkNet en cuatro pasos:

* Paso 0 — Fundaciones (completadas*)
* Paso I — Planetas: Rollups de una sola aplicación
* Paso II — Constelaciones: Multi-App Rollups
* Paso III — Universo: Un Rollup Descentralizado

Esperamos tener el paso que he desplegado en unos pocos meses, y esté bien en camino a los pasos II & III para finales de 2021.

### **Introducción**

StarkWare está construyendo StarkNet, un descentralizado, sin permisos y resistente a la censura con tecnología STARK L2 ZK-Rollup que soporta el cálculo general sobre Ethereum. Se basa en el Turing completo[El Cairo language](https://www.cairo-lang.org/).

Desarrolladores, los usuarios y los nodos StarkNet podrán hacer todo lo que se esperaría de un Rollup L2 sin permisos: los desarrolladores pueden construir aplicaciones que implementen su propia lógica de negocio y desplegarlas en StarkNet. Los usuarios pueden enviar transacciones a StarkNet para ser ejecutadas, al igual que interactúan con Ethereum hoy. Los nodos StarkNet y los participantes serán cifrados económicamente viznados para asegurar que la red funcione de manera eficiente y justa.

Todas las transacciones de StarkNet serán anotadas periódicamente, y su validez será probada en una prueba de STARK, para ser verificada en Ethereum. Como el esfuerzo computacional necesario para verificar las pruebas de STARK es exponencialmente pequeño en comparación con el provenir del cálculo, StarkNet escalará Ethereum por órdenes de magnitud.

Dado que todas las transiciones del estado StarkNet serán propensas a STARK-proven, sólo las válidas serán aceptadas en Ethereum. Todos los datos necesarios para reconstruir el estado completo de StarkNet serán publicados en cadena. Cualquiera podrá ejecutar su propio nodo StarkNet. Estas propiedades harán que StarkNet sea tan seguro y sin permisos como Ethereum.

Llevamos tres años en él y ya han logrado algunos hitos notables al convertir “Luna Matemática” en software eficiente y de grado de producción corriendo en Ethereum. La forma en que StarkWare hace las cosas es abordar primero los problemas difíciles, construir la tecnología básica, y luego liberarla a la producción de forma piecemeal. Seguiremos construyendo de esta manera mientras llevamos StarkNet a la conclusión.

![](/assets/ontheroad_02.png)

**Paso 0 — Fundaciones**

StarkWare ha terminado de sentar algunas bases importantes para StarkNet.

#### **Cairo**

[El Cairo](https://twitter.com/StarkWareLtd/status/1300353049836376066?s=20)es nuestro framework de lenguaje de alto nivel & Turing completo para producir pruebas de STARK para el cálculo general. En lugar de crear complejos “circuitos” o AIR a mano, un desarrollador de aplicaciones puede utilizar El Cairo para definir cualquier lógica de negocio, que haya demostrado estar fuera de cadena y verificado en cadena. El Cairo está[en producción en Mainnet](https://twitter.com/StarkWareLtd/status/1320695603492507648?s=20), y también está[disponible para los desarrolladores](http://cairo-lang.org/).

En un par de semanas lanzaremos en una red de pruebas pública de Ethereum una versión Alpha del Servicio de Prueba Genérica de Cairo. *Esto permitirá a los desarrolladores construir sus propias aplicaciones usando Cairo, implementando cualquier lógica de negocio que deseen. Enviarán su código de El Cairo al GPS para ser provisores y luego verificarán en cadena.*

GPS permite una única prueba para asegurar la integridad de la ejecución de aplicaciones completamente independientes e independientes, dando así a esas aplicaciones la capacidad de amortizar el gasto de gas de verificación de prueba entre ellas.

El Cairo y el GPS son la base de StarkNet — nuestra decisión de externalizar ambos desarrolladores les proporciona una exposición temprana a esta tecnología, no sólo para que puedan empezar a construir sobre ella, sino también para que puedan influir en la evolución de StarkNet.

Continuaremos desarrollando El Cairo basado en las necesidades y retroalimentación de la comunidad de desarrolladores. Mejoraremos este lenguaje con nuevas características, sintaxis y construcciones que mejoren su usabilidad, y continuaremos desarrollando y mejorando herramientas de El Cairo: compiladores, tracer/debugger, e integraciones a IDEs comunes.

StarkNet tendrá El Cairo corriendo bajo el capó.

#### **La pila de software STARK**

StarkWare ha desarrollado el sistema de prueba más potente del ecosistema, y ha sido[en vivo en Mainnet](https://medium.com/starkware/starks-over-mainnet-b83e63db04c0)durante meses. StarkWare también ha desarrollado[ethSTARK](https://twitter.com/StarkWareLtd/status/1264911004099543040?s=20), nuestro proverbio de código abierto, que es 20X más rápido que cualquier otro prover; ofrece tanto[cero conocimientos como firmas post-cuánticas seguras](https://twitter.com/StarkWareLabs/status/1331930111227080709).

Nuestras mediciones*de escala*— no extrapolaciones ni promesas — incluyen el procesamiento de 300K transacciones en una única prueba en Mainnet, consiguiendo[el récord mundial en Rollup: 3K tps](https://twitter.com/StarkWareLtd/status/1287770381525422082?s=20). En el proceso, hemos conseguido el récord mundial de eficiencia de gas Rollup: 315 gas/tx, pedidos de magnitud más baratos que las transacciones en Ethereum L1.

Esta tecnología será la piedra angular de la capa de prueba descentralizada de StarkNet, y por lo tanto publicaremos promotores adicionales y mejorados como parte del desarrollo de StarkNet (más sobre esto en un post próximo del blog).

#### **StarkEx**

StarkEx es nuestro motor de escalabilidad L2. Ha estado sirviendo a los clientes de[DeversiFi](https://twitter.com/deversifi)en Mainnet desde junio de 2020. Aumentará el poder de[dYdX](https://twitter.com/dydxprotocol)e[inmutableX](https://twitter.com/Immutable)a partir de unas pocas semanas. StarkEx puede manejar complejas lógicas de trading (spot trading, derivados, NFTs) así como pagos.

Desarrollar StarkEx era nuestra manera de alimentar nuestra cadena de herramientas y probarla contra las necesidades del mundo real. No hay nada parecido a las demandas de las aplicaciones reales y los usuarios en vivo para ayudar a las herramientas madurar y evolucionar. También nos ayuda a entender qué elementos deben ser dirigidos para servir mejor al ecosistema: por ejemplo, integraciones con carteras y exploradores de bloques.

StarkEx es un ejemplo en vivo de la capacidad de escalar aplicaciones usando un ZK-Rollup basado en STARK, y es la primera aplicación en producción en Mainnet escrito en Cairo. Como tal, también será una de las aplicaciones que se ejecuten en StarkNet.

![](/assets/ontheroad_03.png)

### **El camino por recorrer**

#### **Paso I — Planetas: Rollups de una sola aplicación**

Este paso permitirá a los desarrolladores construir e implementar sus propias aplicaciones escalables en StarkNet.

En este punto, cada instancia de StarkNet podrá ejecutar una sola aplicación. Diferentes instancias pueden ejecutar diferentes aplicaciones.\
El framework StarkNet incluirá lo siguiente:

* Se necesitaba un mecanismo para generar pruebas STARK para la lógica arbitraria de El Cairo y luego enviarlas y verificarlas en Ethereum.
* Interacciones con L1 Ethereum: depósitos y retiros de tokens L1, publicación de los datos en cadena, Mecanismo de Escape que protege a los usuarios de StarkNet de operadores StarkNet maliciosos, etc.
* Gestión de los saldos de usuario L2 y de la memoria y almacenamiento de la aplicación.

Los desarrolladores podrán centrarse únicamente en construir la lógica de negocio de su aplicación, y luego moverse hacia la producción: desplegar y ejecutarlo a escala en StarkNet.

Lo que nos permite construir un ZK-Rollup escalable de cálculo general es la combinación de:

* Cairo, que es un lenguaje de programación Turing-general
* Nuestra sólida pila STARK (prover y verificador), que permite agrupar enormes cálculos en una única prueba.

#### **Paso II — Constelaciones: Multi-App Rollups**

El siguiente paso soportará múltiples aplicaciones ejecutándose en la misma instancia de StarkNet y accediendo al mismo estado global L2. Esto permitirá la interoperabilidad entre diferentes aplicaciones, así como la reducción del coste del gas debido a la mejora de las economías de escala.

Cairo, la potente pila STARK y GPS amplifican la ventaja competitiva de StarkNet en el soporte de un Rollup multiaplicaciones.

En esta fase, StarkNet será un framework completamente funcional para ejecutar*múltiples*aplicaciones con cualquier lógica de negocio arbitraria encima de Ethereum, con cada instancia ejecutada por un único operador.

Un operador ahora puede girar un nodo StarkNet y los desarrolladores de aplicaciones pueden desplegar sus contratos en él. Desde la perspectiva de los usuarios, StarkNet ahora parece y se siente como Ethereum, con una escala mayor.

#### **Paso III — Universo: Rollup descentralizado**

El último paso en la evolución de StarkNet es descentralizar su operación.

Preguntas de I&D que estamos abordando ahora que afectan a esta etapa incluyen (i) el uso de ZK-Rollups para mejorar los mecanismos de alcance consensal, y (ii) diseñar mecanismos criptoeconómicos para hacer valer a los colaboradores y operadores descentralizados de StarkNet (secuencias de transacciones, provers, etc. para funcionar de forma eficiente, justa y segura.

### **Conclusión**

StarkWare está construyendo StarkNet, un descentralizado sin permisos STARK impulsado por L2 ZK-Rollup over Ethereum, que soporta el cálculo general basado en el lenguaje de El Cairo.

StarkNet permitirá a las aplicaciones escalar sin comprometer la seguridad, para pagar tarifas de transacción razonables, y todo el ecosistema para crecer sustancialmente y cumplir con su promesa.

Invitamos gustosamente a la comunidad de desarrolladores a[unirse a nosotros](https://twitter.com/StarkWareLtd)en este viaje.

**Actualización (Nov. 2021):**StarkNet Alpha está en vivo en Ethereum Mainnet