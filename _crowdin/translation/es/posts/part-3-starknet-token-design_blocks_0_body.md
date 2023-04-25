En este post nos sumergiremos más en el diseño del StarkNet Token, su programa de minting y la línea de tiempo esperada.

### Consideraciones

El diseño del StarkNet Token está modelado por la necesidad de alimentar una red compuesta por (i)**usuarios**de StarkNet, (ii)**Operadores**— personas que proporcionan a la red recursos de computación que realizan secuencias de transacciones, generación de pruebas STARK y proveedores de almacenamiento a largo plazo, y (iii)**Desarrolladores**escribiendo software para su infraestructura y para aplicaciones que se ejecutan en ella.

El mecanismo para la estructura de comisiones y la mintado de tokens debe ser:

* Gran automatización, en lugar de basarse en una intervención humana significativa
* Conocido y probado en otros sistemas de blockchain
* Simple de analizar y explicar; transparente
* Resistente a la manipulación especulativa y a la gamificación no generadora de valor
* Considerado tener una buena experiencia de usuario (UX)

Estas preferencias darán forma al mecanismo de asignación de tokens de nuevas comisiones de minting y transacción pagadas por los usuarios:

**Los operadores**aseguran la vida continua de StarkNet y proporcionan el rendimiento de alta calidad del protocolo que los usuarios demandan.

**Desarrolladores**construyen y mantienen el software utilizado por los operadores para asegurar la red, y crean aplicaciones que mejoran la funcionalidad de la red para los usuarios. En consecuencia, una parte de las comisiones y la nueva minting irán a Smart Contract Developers y Core Developopers, de la siguiente manera:

* **Desarrolladores Inteligentes de contratos:**el protocolo StarkNet puede medir automáticamente el valor proporcionado por los contratos inteligentes, a través de las tarifas L1 y L2 pagadas por los Usuarios de estos contratos. El protocolo StarkNet asignará automáticamente una fracción de comisiones y nuevas mintas a los desarrolladores de contratos inteligentes. Los contratos inteligentes que ofrezcan más valor a los usuarios — medidos por las tarifas pagadas por ellos — recibirán una porción mayor de fichas asignadas para este propósito.
* **Desarrolladores principales:**El protocolo StarkNet no tiene una forma automática de cuantificar la contribución de los desarrolladores principales, tales como aquellos que escriben código para provers, secuencers, nodos completos, etc. En consecuencia, la asignación de tokens a tales desarrolladores de núcleos y otros colaboradores cuya contribución no es asumible por el protocolo requiere necesariamente cierta discreción humana. Se establecerá un modelo para aplicarlo de una manera que sea coherente con el objetivo de la descentralización.
* El mecanismo exacto para asignar tokens desde nuevas minting y comisiones a ambos tipos de desarrolladores todavía está por determinar. Los principios de diseño incluirán la lucha contra la gamificación y la transparencia.

### Asignación inicial de tokens StarkNet

StarkWare ha medido diez mil millones de fichas fuera de la cadena. Para aclarar: estos tokens StarkNet no representan equidad en StarkWare ni proporcionan ningún derecho de participación en StarkWare ni conceden ningún derecho de reclamación de StarkWare. El suministro circulante de tokens aumentará con el tiempo con la mintado de nuevos tokens por el protocolo, de acuerdo a un calendario que será determinado por la comunidad en un momento posterior.\
*El suministro circulante no puede, por lo tanto, permanecer fijo.*

La asignación es:

**17%**— Inversores StarkWare

**32.9%**— Colaboradores principales: StarkWare y sus empleados y consultores, y socios de desarrollo de software StarkNet

**50,1%**otorgado por StarkWare a la Fundación, asignada de la siguiente manera:

* **9%**— Disposiciones comunitarias — para aquellos que realizaron trabajo para StarkNet y potenciaron o desarrollaron su tecnología subyacente. . vía el uso pasado de los sistemas StarkEx L2. Es crucial que todas las disposiciones comunitarias se basen en un trabajo verificable realizado en el pasado. Por ejemplo, en la medida en que las disposiciones comunitarias se darán a los usuarios anteriores de StarkEx. Las adjudicaciones se determinarán en función del uso verificable de la tecnología de StarkEx, que tuvo lugar**antes del 1 de junio de 2022.**
* **9%**— Reembolsos de la comunidad, devoluciones en StarkNet a**parcialmente**cubren los costos de embarque en StarkNet de Ethereum. Para prevenir la gamificación, los Devolución de la Comunidad solo se aplicarán a las transacciones que ocurren**después de**que se anuncie el mecanismo de devolución.
* **12%**— Subvenciones para investigación y trabajo realizado para desarrollar, probar, desplegar y mantener el protocolo StarkNet
* **10%**— una reserva estratégica, para financiar las actividades del ecosistema que están alineadas con la misión de la Fundación, tal y como se explica en el[post anterior](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)de esta serie.
* **2%**— Donaciones a instituciones y organizaciones muy apreciadas, tales como universidades, ONG, etc, según lo decidido por los titulares de StarkNet Token y la Fundación.
* **8. %**Sin asignar — el tesoro no asignado de la Fundación está en marcha para seguir apoyando a la comunidad StarkNet de una manera que debe decidir la comunidad.

Alinear incentivos a largo plazo de los colaboradores e inversores principales con los intereses de la comunidad StarkNet y siguiendo la práctica común en ecosistemas descentralizados. todos los tokens asignados a Core Contributors e Inversores estarán sujetos a un período de bloqueo de 4 años, con liberación lineal y un precipicio de un año.

![](/assets/1_qcosthgskfd-q6bn3yzghq-1.png)

### ¿Hay alguna forma de recibir StarkNet Tokens?

La respuesta corta es sí, pero no hay atajos para recibir tokens.

La asignación de token de StarkNet y su mercado de tasas y su nuevo diseño de minting dan prioridad a los desarrolladores de infraestructura básica y dApps, así como otros que contribuyen a la seguridad y la salud del ecosistema. ¿Qué significa esto prácticamente en relación con el token?

Si eres un desarrollador y ya has escrito software para la infraestructura de StarkNet o para un contrato inteligente, que son realmente valorados y utilizados por los usuarios finales de StarkNet, entonces puede esperar recibir tokens automáticamente a través del protocolo. Una de las muchas salvaguardas contra la gamificación de este mecanismo es que los honorarios recibidos por los desarrolladores serán estrictamente inferiores a los honorarios pagados por los usuarios.

Los desarrolladores también pueden recibir subvenciones simbólicas por el trabajo realizado para desarrollar, probar y mantener el protocolo StarkNet. La Fundación determinará a su debido tiempo dichas subvenciones de conformidad con su misión.

Si eres un desarrollador de blockchain que cree que StarkNet es la respuesta a las necesidades de escala de Ethereum. te animamos a aprender más sobre[StarkNet](https://starknet.io/)y su lenguaje de programación,[El Cairo](https://www.cairo-lang.org/), y para empezar a desarrollar sus propios contratos inteligentes.

Si usted es un usuario final, use StarkNet — pero sólo como satisface sus necesidades hoy. Utilízalo para aquellas transacciones y aplicaciones que valores,*no esperando ninguna recompensa futura de StarkNet Tokens.*Cuando se anuncien las disposiciones de la Comunidad, sólo se referirán a las instantáneas que hayan ocurrido antes de la fecha del anuncio, y filtrará y excluirá el uso que se considera un abuso y gamificación de la red, basándose en la información disponible en ese momento. Cuando se instituyan los reembolsos comunitarios, nunca se aplicarán a las transacciones ocurridas antes de que se anunciara el reembolso, tan transaccionar hoy en la anticipación de un reembolso futuro es inútil.

### Cerrando comentarios

Construir una red abierta significa enmascarar lo desconocido. Internet, Bitcoin y Ethereum, fueron inventados por innovadores que creían que sus herramientas podrían cambiar el mundo, pero no sabían cómo. Humildemente, esperamos que la capacidad de StarkNet para escalar blockchains sea buena para Ethereum y buena para una web descentralizada. No podemos saber qué se construirá. Pero sí creemos que StarkNet pone una notable capacidad tecnológica en manos de una comunidad creativa. y esperamos ver que la comunidad lo use de una infinidad de maneras, muchos de ellos como aún no se han imaginado.