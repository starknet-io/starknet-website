### TL;DR

* Estamos lançando o Cairo 1.0-alpha.2, que traz uma série de novos recursos para o idioma
* Agora é possível implementar um contrato do ERC20
* Esses novos recursos linguísticos serão aplicáveis na próxima versão StarkNet-v0.11.0

### Novas funcionalidades!

O Cairo 1.0 continua seu ritmo de melhoria rápido. A libertação de hoje introduz, entre outras coisas, todas as características necessárias para escrever um contrato ERC-20.

Para mencionar alguns dos novos recursos:

* Dicionários
* Eventos nos contratos
* Mapeando variáveis de armazenamento
* Suporte para Característica
* inferência de tipo
* Métodos

Veja a lista completa no repositório [GitHub.](https://github.com/starkware-libs/cairo)

Vamos dar uma olhada num exemplo de um contrato do ERC20 (o exemplo concreto completo, é claro, no[GitHub](https://github.com/starkware-libs/cairo/blob/main/crates/cairo-lang-starknet/test_data/erc20.cairo)) para demonstrar um caso de uso de um evento e mapeamentos no armazenamento:

![](/assets/0_i4ch5-4rxxal4rkt.png)

### Pule na água!

Continuamos a trabalhar em dois vetores paralelos:

1. Evolua o Cairo 1.0 a velocidade total para compatibilidade completa com o antigo Cairo.
2. Desenvolva Starknet v0.11.0 que irá suportar contratos escritos no Cairo 1.0

Enquanto isso, encorajamos os desenvolvedores a escreverem com o Cairo 1.0 e a se familiarizarem com ele.

Para qualquer dúvida — você pode usar o canal do Discord 1.0 do Cairo[](https://discord.com/channels/793094838509764618/1065544063245365288).

Para quaisquer sugestões ou comentários — não hesite em abrir um[problema](https://github.com/starkware-libs/cairo/issues)no repositório do Cairo.