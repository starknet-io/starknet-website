### TL;DR

StarkNet Alpha 1 tem duas novas funções:

* Interação L1<>L2
* Dados em cadeia

### Introdução

No início do ano, anunciamos que StarkWare está construindo[StarkNet](https://starkware.co/product/starknet/), uma rede L2 sobre Ethereum baseado em STARK-Rollup1 descentralizada operando como uma rede L2. StarkNet permite que qualquer dApp alcance uma escala ilimitada para o seu cálculo - sem comprometer a composição e a segurança da Ethereum.

No mês passado,[StarkNet Alpha 0](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)foi liberado para o mundo. Pela primeira vez, os desenvolvedores podem[escrever](https://kobi.one/2021/07/14/stardrop.html)qualquer contrato inteligente e publicá-lo, sem permissão, para um ZK-Rollup. Os usuários podem enviar transações para a rede, estilo Ethereum.

Hoje estamos lançando uma nova versão; Alfa 1. Estamos lançando recursos numa base contínua para permitir que os desenvolvedores interajam com novos recursos o mais rápido possível. Nós prevemos que isso vá apertar o ciclo de feedback e permitir que feedback da comunidade melhore rapidamente a StarkNet.

### **Características Alfa 1**

#### L1<>Interação de L2

Alpha 1 inclui um protocolo de mensagens L1<>L2, que permite aos desenvolvedores implementar fluxos de transação ininterruptos entre L1 e L2. Os desenvolvedores agora podem enviar mensagens de contratos em L1 para contratos em L2 e vice-versa.

Uma das belezas do ZK-Rollups é que as atualizações de estado são finais, sem demora. Isso significa que mensagens que foram enviadas de L2 para L1 podem ser imediatamente encaminhadas para seu contrato de destino. Isso abre o caminho para a construção de aplicativos que sejam verdadeiramente interoperáveis entre as camadas.

Interessado em experimentar? A melhor maneira de começar é seguir o tutorial[aqui](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html).

Nosso protocolo L1<>L2 deve muito a outros L2 (especificamente Otimismo e Arbitrum) cujo trabalho anterior nesta área influenciou o nosso design.

#### Conectar Dados em Cadeia

A atualização de estado da StarkNet agora também é publicada como dados em cadeia na Ethereum. Isso permite que qualquer usuário construa completamente o estado do StarkNet's a partir de dados L1. Cada atualização de estado inclui a diferença de estado, ou seja, qual armazenamento foi alterado e seu novo valor.

Aqui também, ZK-Rollup mostra sua força. Em contraste com as Rollups Optimistas, nas quais os dados completos das transações devem ser enviados na cadeia, em ZK-Rollups, apenas os dados mínimos absolutos necessários para derivar a diferença de estado são enviados na cadeia.

Consideremos um exemplo primo: oráculos de preço. Uma transação para atualizar um oráculo de preço geralmente contém várias transações, mas atualiza apenas uma célula de armazenamento; o preço do par. Os dados on-chain necessários para uma atualização de estado contendo transações oracelas de preço em um Rollup Otimista aumentam linearmente com o número de atualizações, enquanto estiver em um ZK-Rollup, será sempre uma atualização de armazenamento único.

Além disso, os algoritmos de compressão podem ser aplicados aos dados publicados. e sua validade será atestada pela prova STARK, reduzindo ainda mais a pegada na cadeia de dados. As futuras versões do StarkNet introduzirão otimizações inovadoras neste domínio.

#### StarkNet OS

Estamos também a lançar o código do sistema operacional StarkNet. O StarkNet OS é o programa do Cairo que roda o StarkNet. O sistema operacional lida com tudo o que é feito na rede — implantação do contrato, execução de transações, L1<>Mensagens L2 e muito mais. A arquitetura e design do StarkNet OS serão explicados em detalhes em um post separado.

#### Recursos extras

Não só evoluiu o StarkNet Alfa, como também estamos constantemente a melhorar o Cairo. Para uma descrição completa das novas funcionalidades no Cairo v0.3.0, confira as notas de lançamento[aqui](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.3.0).

### O Ecossistema está crescendo

Além do trabalho constante na StarkNet Core, o trabalho do ecossistema na StarkNet está continuamente a expandir-se. Estamos entusiasmados por colaborar com algumas das equipas mais talentosas do ecossistema.

Fermion, o primeiro esforço de Nó Completo da StarkNett, é desenvolvido pela equipe Erigon (anteriormente TurboGeth). Com base em seu enorme conhecimento adquirido no trabalho na Ethereum, podemos trabalhar com eles para construir um poderoso Node, que incorpora muitas lições aprendidas durante a construção para o Ethereum, ao mesmo tempo que se beneficia da escala oferecida pelas provas STARK.

O Nethermind está trabalhando no Warp, um compilador de EVM para Cairo. Vincule pela nossa cultura de apresentar novas ferramentas apenas quando elas estiverem prontas, Tudo o que podemos dizer é esperar notícias empolgantes nesta frente muito em breve! No entanto, podemos dizer que estão a avançar a uma velocidade de fuga.

### O que o futuro reserva

A próxima parada na nossa estrada para StarkNet será a composição — permitindo que os contratos interajam entre si. Fique atento.

[StarkWare](https://starkware.co/)

1 como já dissemos anteriormente, ZK-Rollup é agora um termo comumente usado, porém muito enganador: essas soluções não oferecem (atualmente) conhecimento zero.

**Atualização (Nov. 2021):**StarkNet Alpha está ao vivo na Ethereum Mainnet