### Tiempo emocionante por delante

La Alfa 4 fue lanzada hoy en Goerli. Esta versión es la candidata a la liberación de Mainnet y, si todo va según lo previsto, se desplegará en Mainnet al final del mes.

La Alfa 4 sigue la versión empaquetada de características de la Alpha 3, que incluye, entre otras cosas, mejoras en los tiempos de compilación del Cairo, constructores de contratos y mucho más (ver las[notas de lanzamiento completo](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.5.0)).

Importante de nota: esta es todavía una versión Alpha — para desplegar su contrato en el despliegue de Mainnet, por favor siga las pautas[de incorporación](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu)de las nuevas aplicaciones.

### Características nuevas

Aunque esta versión se centra principalmente en prepararse para la implementación de Mainnet, también incluye varias características nuevas:

#### Obtener la dirección de este contrato

Los contratos ahora pueden obtener su propia dirección a través del nuevo syscall \`get_contract_address\`. Por último, podemos acabar con el contrato por separado.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">contrato selfie RIP: Septiembre 2021-Noviembre 2021</p>&mdash; Francesco Ceccon (@ceccon_me) <a href="https://twitter.com/ceccon_me/status/1458410251078836227?ref_src=twsrc%5Etfw">10 de noviembre de 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### Bloquear Hash

Los bloques ahora se identifican a través de hash en lugar de Id. Esto sigue a nuestra última transición a los hash de transacción. Todas las APIs han sido actualizadas en consecuencia. Pronto publicaremos la documentación técnica completa del sistema, que también incluirá la especificación de la estructura de bloques.

#### Direcciones de Contrato

Esta versión introduce un cambio en la forma en que se calculan las direcciones del contrato. La dirección es un hash de Pedersen en la dirección de llamada, una sal (aleatoria o elegida por el desplegador), el código del contrato hash, y el hash de los argumentos del constructor, todos anexados por un prefijo.

```
Hash(PREFIX, caller_address, salt, contract_hash, ctr_args_hash)
```

En la versión actual, la dirección de llamada siempre es igual a 0, pero en las versiones futuras, esto permitirá el despliegue de contratos directamente de los contratos existentes.

Tenga en cuenta que este esquema es muy similar a CREATE2.

[Ver las notas de la versión completa](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.6.0)

#### Bridges Token

Los puentes token son una parte crucial de la infraestructura StarkNet. Permiten transferir fondos a y desde StarkNet. El puente no está desplegado en el momento de la publicación, pero debería estar disponible en unos días — junto con la documentación completa de su funcionalidad y uso. Una cosa importante que hay que tener en cuenta es que el puente utiliza el protocolo[L1<>L2 mensajería](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html). Como tal, ofrece breves tiempos de retiro — una vez que un retiro está incluido en un lote y aceptado el L1, los fondos están disponibles instantáneamente para el usuario en L1.

Esta es la primera versión de los puentes simbólicos, y nos encantaría recibir comentarios del ecosistema al respecto.

### Únete a StarkNet

Nunca ha habido un mejor momento para unirse a la creciente comunidad StarkNet. Puedes unirte a la conversación en la discordia[StarkNet](https://discord.gg/uJ9HZTUk2Y), participar en un[taller online](https://forms.reform.app/starkware/join-a-starknet-workshop/2ma1x8), o usa uno de los[tutoriales](https://www.cairo-lang.org/docs/hello_starknet/index.html)para empezar a construir tu primera aplicación.

**Actualización (Nov. 2021):**StarkNet Alpha está en vivo en Ethereum Mainnet