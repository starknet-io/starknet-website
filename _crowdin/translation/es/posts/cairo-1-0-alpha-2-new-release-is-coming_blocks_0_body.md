### TL;DR

* Estamos lanzando El Cairo 1.0-alpha.2, que trae un montón de nuevas características al idioma
* Ahora es posible implementar un contrato ERC20
* Estas nuevas características lingüísticas serán aplicables en la próxima versión StarkNet-v0.11.0

### ¡Nuevas características!

El Cairo 1.0 continúa su ritmo de mejora rápida. La versión de hoy introduce, entre otras cosas, todas las características necesarias para redactar un contrato ERC.

Para mencionar algunas de las nuevas características:

* Diccionarios
* Eventos en contratos
* Mapeando variables de almacenamiento
* Soporte de rasgo
* Inferencia de tipo
* Métodos

Ver la lista completa en el repositorio [de GitHub](https://github.com/starkware-libs/cairo)

Echemos un vistazo a un ejemplo de contrato ERC20 (el ejemplo concreto es, por supuesto, en[GitHub](https://github.com/starkware-libs/cairo/blob/main/crates/cairo-lang-starknet/test_data/erc20.cairo)) para demostrar un caso de uso de un evento y mapeos en el almacenamiento:

![](/assets/0_i4ch5-4rxxal4rkt.png)

### ¡Salta al agua!

Seguimos trabajando en dos vectores paralelos:

1. Evoluciona El Cairo 1.0 a toda velocidad hacia la compatibilidad completa con el viejo Cairo.
2. Desarrollador Starknet v0.11.0 que soportará contratos escritos en El Cairo 1.0

Mientras tanto, animamos a los desarrolladores a comenzar a escribir con El Cairo 1.0 y familiarizarse con él.

Para cualquier pregunta — puedes usar el Cairo 1.0 Discord[canal](https://discord.com/channels/793094838509764618/1065544063245365288).

Para cualquier sugerencia o comentario, no dude en abrir un[número](https://github.com/starkware-libs/cairo/issues)en el repositorio de El Cairo.