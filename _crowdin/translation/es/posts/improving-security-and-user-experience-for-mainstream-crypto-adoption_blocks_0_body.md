La innovación tecnológica en blockchain ha florecido en los últimos años —STARKs, SNARKs, EIP-1559, la Fusión Ethereum— son grandes logros tecnológicos. Sin embargo, el diseño de UX y UI no han podido mantenerse. La gente sigue atascada en frases semilla de 16 palabras, y entrar en DeFi sin un intermediario centralizado es todavía demasiado intimidante para muchos . Para incorporar a los próximos mil millones de usuarios en la Web 3, es fundamental mejorar la experiencia de incorporación de los usuarios.

Como demostró FTX (y Gemini, Celsius y Mt. Gox), mantener la autocustodia sobre los activos de uno es críticamente importante. Sin embargo, hasta hace poco, las carteras autosuficientes han sido astutas y confusas para el usuario promedio. La mayoría de la gente olvida sus contraseñas Web2 mensualmente; ¿cómo se espera que los usuarios mantengan su frase de semilla y claves privadas seguras para la eternidad?

En pocas palabras, es una pesadilla de seguridad. Como hemos visto innumerables veces, una medida equivocada, ya sea iniciada por actores malos o negligencia, puede resultar en la pérdida de millones de dólares.

Como primer punto de contacto para nuevos usuarios de criptomonedas, las carteras Ethereum deben ser fáciles de usar, asegurar y personalizar para satisfacer las necesidades de cada usuario. Esto requiere que los desarrolladores integren la simplicidad de los productos financieros Web2 con las características de Web3.

Esto es exactamente lo que consigue la abstracción de la cuenta.

La abstracción de la cuenta mejora la seguridad y seguridad de los productos de la cartera autosuficiente eliminando la dependencia de los usuarios de la clave privada y haciendo más programables las carteras. Con esta UX mejorada, las carteras no amortiguadoras pueden finalmente escalar a millones de criptomonedas.

Pero para comprender plenamente el impacto de la abstracción de la cuenta, debemos actualizarnos sobre cómo funcionan las cuentas de Ethereum.

### Los fundamentos de las cuentas de Ethereum

Hay dos tipos de cuentas de Ethereum:

1. Cuentas de posesión externa (EOA)
2. Cuentas de Contrato (CA)

Desglosemos cada uno un poco más allá.

### Cuentas de propiedad externa

Las cuentas de propiedad externa, como MetaMask y Coinbase Wallet, son el tipo de cuenta típico para los usuarios de Ethereum. Cada EOA consiste en una clave privada y pública, llamada un par de claves.

Todas las transacciones están autorizadas y firmadas por claves privadas. Una vez firmada una transacción, la EVM verifica que la firma es válida usando la dirección de cuenta de la EOA. La lógica de código duro en la EVM significa que la cuenta (el objeto que contiene los tokens) y la clave privada (firmante) están unidas como una.

Perder su clave privada significa perder sus fondos, o incluso controlar su cuenta, para siempre.

### Contrato de cuentas

Mientras tanto, las cuentas de contratos, sinónimo de abstracción de cuentas, son contratos inteligentes desplegados en la cadena de bloques Ethereum. Estos contratos están controlados por la lógica del código y no requieren claves privadas. A diferencia de EOA, las cuentas de contrato no pueden iniciar transacciones. En cambio, sus transacciones se desencadenan con instrucciones de las EOA.

### ¿Por qué la abstracción de la cuenta importa

La abstracción de la cuenta implica abstraerse de la lógica de autorización codificada duramente lejos de los EOA, convirtiendo cada cuenta en un contrato inteligente programable que se puede adaptar a las necesidades de cualquier persona.

Como explicó el cofundador de Argent y el Director de Ciencias Julien Niset en un reciente[Stark @ Home event](https://www.crowdcast.io/e/7olimxqv), esta lógica de autorización flexible da libertad a los desarrolladores para jugar con características de cuenta como…

**Firmadores de hardware:**Utilizando un enclave seguro de iPhone o Android para convertir cualquier smartphone en una cartera de hardware. A partir de ahí, los usuarios pueden verificar las transacciones utilizando datos biométricos como una huella digital o el ID de Apple Face. Ya hemos empezado a ver monederos auto-custodiales como Braavos[desplegar esta función.](https://medium.com/@braavos_starknet_wallet/hardware-signer-the-last-innovation-for-wallet-crypto-everyday-users-7e1974f93944)

**Paymasters:**Permite a los usuarios pagar comisiones de gas en cualquier token, o incluso tener un mecanismo diseñado por terceros pagar por las transacciones.

**Recuperación social:**En el caso de que una clave privada se pierda o se vea comprometida, los usuarios pueden autorizar una nueva clave como propietario de una billetera legítima. Esto puede incluir una variedad de métodos de recuperación a través de contactos de confianza, carteras de hardware o servicios de terceros. La idea es hacer que el acceso a su cuenta sea tan fácil como recuperar la contraseña de su cuenta bancaria a través de un correo electrónico.

**Autenticación multifactor:**Similar a las prácticas comunes de Web2 2FA, los usuarios pueden configurar dos (o más) métodos de autenticación para sus criptomonedas, cuando una transacción sólo se firma una vez que un usuario confirma la aprobación a través de una segunda opción como correo electrónico o SMS. Los usuarios también pueden configurar límites de transferencia diarios o listas de direcciones de cuentas de las cuales la cartera se bloquea automáticamente para interactuar.

**Signaturas Resistentes Cuánticos y Eficientes de Gas:**El esquema de firma actual de Ethereum, ECDSA, es extensivo computacionalmente (léase: tarifas de gas más altas) y puede ser roto por computadoras cuánticas. A través de la abstracción de firmas, diferentes contratos de cuenta utilizan esquemas de firma más eficientes y cuánticos. StarkNet utiliza su propia curva propia, amigable con STARK.

Estas características no solo proporcionan a los usuarios una mayor seguridad y más flexibilidad, sino que lo que es más importante, dan como resultado una experiencia de usuario****mejor.

Listado por Vitalik Buterin como un “sueño de mucho tiempo” para la comunidad de desarrolladores de Ethereum, las innovaciones en torno a la abstracción de las cuentas, principalmente EIP-2938 y EIP-3074, han girado desde 2020. Sin embargo, ambos requerían concesiones en materia de seguridad e implementación. [EIP-4337](https://github.com/ethereum/EIPs/blob/3fd65b1a782912bfc18cb975c62c55f733c7c96e/EIPS/eip-4337.md), el desarrollo más promisorio hasta ahora, propone una versión de abstracción de la cuenta sin requerir cambios en el protocolo Ethereum.

### **Abstracción de la cuenta y Starknet**

A diferencia de Bitcoin y Ethereum, que están retrofitando sus protocolos actuales para soportar la abstracción de la cuenta,[StarkNet](https://starkware.co/starknet/)ha implementado la abstracción de la cuenta desde el primer día. Cuando se combina con la escalabilidad y las capacidades de nuestras pruebas STARK, el potencial de innovación en el monedero es ilimitado. Es por ello que la próxima generación de carteras autosuficientes, como Argent y Braavos, se están construyendo actualmente sobre nuestra red.

El enfoque de StarkNet es similar al EIP-4337,[reconocer que](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781)la abstracción completa de la cuenta todavía daría como resultado una confusión en UX y[podría abrir la puerta](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4337.md#rationale)a ataques en secuenciadores. Más bien, pretende lograr tanto la abstracción de firmas como la abstracción de pagos mediante la mutualización de algunas de las infraestructuras requeridas en y fuera de la cadena.

Y mientras todavía queda mucho por hacer, la abstracción de la cuenta está ganando tracción más allá de un pequeño círculo de nativos criptográficos. En diciembre,[Visa propuso la idea](https://www.coindesk.com/tech/2023/01/11/ethereum-upgrade-could-make-it-harder-to-lose-all-your-crypto/)de utilizar la abstracción de la cuenta para establecer pagos automáticos recurrentes en StarkNet. Usando una cuenta delegable, los usuarios pueden conceder permiso para iniciar un pago a un contrato inteligente previamente aprobado. A partir de ahí, el contrato inteligente se programará para deducir una cantidad fija de pago en un día específico, a lo largo de un tiempo determinado. Si bien Visa todavía no ha revelado sus planes para sus propios servicios, el interés por sí solo habla mucho, y puede abandonar un mundo en el que las plataformas de suscripción de alta tecnología como Netflix y Spotify podrían incorporar la criptoadopción.

En cuanto a lo que tiene el futuro, sólo el tiempo lo dirá. Pero una cosa es cierta. Al hacer que las carteras sean más fáciles y seguras de usar, la abstracción de la cuenta servirá como un potente catalizador para las carteras de blockchain auto-custodial para escalar a millones de criptomonedores/usuarios. Seguiremos construyendo mientras tanto.