### TL;DR

Aplicativos de gás L2 nativos podem agora florescer sem as restrições de gás L1 tradicionais

### Introdução

Os desenvolvedores dApp sempre enfrentaram fortes restrições devido ao limite de gás da Ethereum (L1). Ele limita não apenas*como*esses dApps funcionam, mas também*o que*esses dApps são capazes de fazer.

Layer 2 (L2) oferece aos desenvolvedores de DApp um campo verde computacional, livre desse teto de vidro a gasolina. Acreditamos que a grande maioria dos dApps serão L2-nativos dentro de alguns anos: eles terão sido construídos a partir do fundamento em L2 para se beneficiarem deste grau computacional de liberdade.

### L1 gás limita a forma L1-native dApps

*Vejamos dois exemplos de dApps populares cujo design é profundamente moldado por restrições L1 de gás: AMMs e DEX agregadores.*

Um Criador de Mercado Automatizado (AMM) é essencialmente uma aproximação de baixo custo de uma troca baseada em ordens. Em vez de permitir que os usuários coloquem e removam os limites, pare a perda ou uma variedade de outros tipos de ordens, AMMs L1 só permitem swaps simples com um pool de liquidez subjacente central — para acomodar o intenso custo computacional de L1.

Os agregadores DEX precisam, idealmente, acesso a todos os bancos de liquidez possíveis, mesmo o menor conjunto de liquidez, para aproveitar os melhores preços para os usuários. No entanto, devido ao custo da consulta de muitos agrupamentos diferentes, não vale a pena transpor mais do que o L1. É justificável acessar pools e pagar as taxas de transação associadas apenas quando as pools de liquidez têm liquidez suficientemente profunda. De forma semelhante, as liquidações nos empréstimos/empréstimos e outros dApps baseados em garantias poderiam ser muito mais precisas se a diferença entre o desconto de liquidação e a taxa de transação fosse muito menor.

A funcionalidade e o design limitados de muitos dApps L1 resultam diretamente de desenvolvedores otimizando seus códigos para cumprirem as restrições de gás da Ethereum. Por que razão dizemos "Ethereum"? Não é possível executar o código Solidity em muitos L1s e mesmo alguns L2s? Na verdade, mas destes, o Ethereum é o ambiente mais caro (e, portanto, seguro) Solidity dApps são projetados para “o link mais caro”, ou seja, Ethereum. Logo, eles não se beneficiam da vantagem computacional proporcionada por ambientes de tempo de execução menos caros. Para desbloquear a funcionalidade de acordo com o design de um dApp para o ambiente de execução mais caro, o código do dApp deve ser adaptado.

### O aumento de dApps nativos de L2

Os Rollups de Validade (também conhecida como ZK-Rollups) permitem computação extremamente barata. Ao contrário de qualquer outra solução escalável — o cálculo L2 pode crescer exponencialmente com apenas um pequeno impacto no custo de gás de verificação em cadeia. Além disso, um Rollup de Validade processa entradas para os cálculos — "testemunha dados" — sem consumir recursos L1 adicionais, permitindo computação com muitas entradas.

A codificação dApps nativa no L2 em**[Cairo](https://www.cairo-lang.org/)**(uma linguagem completa para dimensionar dApps através de provas STARK) desbloqueia um vasto domínio de possibilidades para desenvolvedores. Ele permite que eles usem quantidades significativas de dados — tanto dados computacionais quanto de testemunhas — que não podiam usar antes.

Vamos explorar esses dApps nativos de L2 e suas novas capacidades enriquecidas.

#### DeFi

Antes de integrar a StarkEx, StarkWare Rollup, dYdX operado como um d1 dApp na Ethereum. Ofereceu aos seus usuários alavancagem de x10 em recursos sintéticos e posições suportadas com apenas um ativo sintético. Reconstruir dYdX no Cairo como um dApp nativo de L2 fornece uma plataforma de DeFi drasticamente mais escalável, mais barata e eficiente:

* Atualizações de preço Oracle: tais atualizações geralmente incluem dezenas de preços e assinaturas de várias fontes para calcular a mediana. Uma Rolagem de Validade fornece escalabilidade exponencial da lógica orácula de preço (verificação de assinatura e cálculo do preço mediano) - sem relatar que testemunham os dados para L1. Compare isto com a implementação L1 do dYdX, onde cada preço de atualização custa cerca de 300K de gás e era, Por conseguinte, limitado na sua frequência e na dimensão do conjunto de repórteres de preços.
* Alavancagem: Um índice preciso do preço permite ao dYdX estimar o risco de uma posição em tempo real e oferecer maior alavancagem para os usuários. Graças às atualizações de preço dos oráculos melhoradas, dYdX aumentou a alavancagem de x10 em L1 para x25 em L2.
* Cross-margin: Com dYdX no L2, os fabricantes de mercado podem colocar ordens longas/curtas em muitos ativos usando a mesma garantia. A liquidação média no L2 do dYdX envolve posições com mais de 10 ativos sintéticos diferentes! Em comparação, ter essa capacidade de margem cruzada na L1 teria mais do que duplicado o custo do gás na cadeia.

#### Jogos e Artes Gerais

O recorte atual de jogos L1 nativos normalmente armazenam ativos de jogos L1 ao implementar a lógica inteira do jogo em um aplicativo off-chain confiável. Este padrão é um resultado directo das limitações do gás do L1. Graças ao cálculo barato de L2, desenvolvedores de dApps de jogos nativos de L2 agora podem implementar a lógica do jogo em um contrato inteligente e manipular os recursos do jogo de forma confiável, em vez de simplesmente armazená-los. Trazer lógica do jogo para o reino da computação sem confiança é um passo significativo para um mundo muito mais rico de jogos baseados na blockchain. Jogos de L2-nativos já estão sendo desenvolvidos na StarkNet, na rede sem permissões da StarkWare (por exemplo,[Dope Wars](https://github.com/dopedao/RYO)e[Influence](https://medium.com/influenceth/influence-to-launch-on-starknet-afd3c26ea25a)).

Mas, quão complexo pode ser um jogo baseado em blockchain? Por exemplo, manipular gráficos diretamente na cadeia parece impossível —[ou é](https://twitter.com/guiltygyoza/status/1449637155001798657)? Resolver equações diferenciais e simular um movimento planar em um contrato inteligente representa um passo significativo em direção ao que no futuro poderia ser um motor de física da blockchain. As implicações são enormes. Imaginem um jogo multijogador competitivo como Counter-Strike. Se alguém pudesse simular a lógica do jogo on-chain, vários hacks temidos se tornariam uma coisa do passado — os jogadores poderiam desfrutar de um jogo comprovadamente justo.

A Arte Gerativa usa computação, aleatoriedade e outros dados para criar arte baseada em blockchain. Quanto mais complexa for a lógica e a computação que um artista possa usar sem confiança, mais opções existem para gerar partes únicas de arte. [WhaleStreet DAO](https://blog.whalestreet.xyz/whalestreet-dao-to-launch-gen-art-ecosystem-on-ethereum-with-starknet/)está lançando um dos primeiros projetos de Gen Art na StarkNet, aproveitando os recursos computacionais ilimitados da StarkNete.

### E agora?

Rollups de validade — e StarkEx e StarkNet, fortalecidos por caos, em particular - fornecer um ambiente onde se pode desenvolver e operar dApps que consomem muito dados de computação ou testemunhas. Com todos os benefícios da tecnologia distribuída dos livros contabilísticos, nós prevemos um futuro imensamente empolgante para dApps nativos de L2.

O que*você pode*criar com computação geral suportada pela composição, sem confiança e descentralização?