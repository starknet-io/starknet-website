### TL;DR

* StarkWare oferece um intervalo de modos de Disponibilidade de Dados (DA) para os clientes escolherem, de acordo com sua prioridade
* Existem três abordagens para a Disponibilidade de Dados para provas STARK, todos eles já estão disponíveis em produção:\
  -**Rollup**: o livro razão é publicado diretamente no blockchain\
  -**Validium**: um Comité de Disponibilidade de Dados garante o livro, com apenas um hash armazenado na cadeia\
  —**Volition**: os aplicativos podem permitir que usuários escolham o modo DA — Rollup ou Validium — para cada transação
* Não importa qual DA é usada — a validade de todas as transações é garantida por STARKs

### Introdução

A partir de 2022 de novembro,[StarkEx](https://starkware.co/starkex/)definiu mais de $750 bilhões de transações em volume de negociação e mais de 270m na Ethereum. No espaço NFT, powering apps como ImmutableX e Sorare, StarkEx imprimiu mais de 85 milhões de NFTs a um preço que é 1000x mais barato do que fazer isso diretamente na Ethereum. Tecnologia baseada em STARK, está escalando a Ethereum. Por exemplo, em uma única semana, StarkEx executou 1,6x o número de transações como Ethereum (12m no StarkEx vs 7. m na Ethereum) ocupando menos de 0,1% do blockspace Ethereum. E isso faz tudo isso enquanto dá aos usuários o mesmo nível de segurança como se eles estivessem se estabelecendo diretamente no Ethereum.

### Como é que o StarkWare o consegue?

Os usuários enviam transações na Layer 2 (StarkEx ou StarkNet), que são lotadas e enviadas para um prover STARK. Este prover STARK sabe o estado do livro de registros antes e depois dessas transações serem processadas. O prover produz uma prova STARK de que atesta a validade do novo estado do livro razão depois que essas transações forem executadas. O novo estado e a prova STARK são enviados para o verificador STARK em cadeia. A verificação dessa prova acontece de forma autônoma por meio de um contrato inteligente imutável na Ethereum.

Esta arquitetura fornece o melhor de ambos os mundos: podemos ter baixos custos de transação, enquanto ainda temos o Ethereum no meio como árbitro neutro. O Ethereum como árbitro não é apenas um bom árbitro; fornece segurança crítica para o usuário final. Uma transação de usuário pode agora estar confiante de que os seus fundos são seguros pela Ethereum, e as transações são imutáveis uma vez verificadas na Ethereum. O utilizador também tem total autocustódia dos seus fundos. A autocustódia é importante porque garante que o utilizador tem acesso aos seus fundos a todo o momento, sem depender de terceiros.

### Onde é que a disponibilidade de dados se encaixa em tudo isto?

É importante enfatizar tanto o que esta prova está fazendo quanto o que*não*faz. A prova está atestando a validade do novo estado, mas não está te dizendo o que é o novo estado. Para isso, é necessária disponibilidade de dados. Se apenas tivermos a prova, então o blockchain sabe que o que foi enviado é válido, mas não sabe qual o novo estado (ex. Saldo do livro livreiro) é! Os consumidores destes dados incluem usuários que têm transações dentro dessas provas. Os dados devem ser disponibilizados para eles se eles quiserem retirar fundos na Ethereum sem precisar confiar no operador Layer 2. Isto dá aos utilizadores plena autocustódia dos seus fundos.

Uma analogia para isso é a sua professora do ensino médio pedindo que você prove que x é igual a x. Isto é trivial para provar. O que é mais difícil de responder: o que é realmente de x? Para isso, é necessária uma informação separada. Pode ser que x seja igual a 5, ou outro valor. Da mesma forma, no blockchain, uma prova STARK pode ser enviada para um contrato inteligente de verificação STARK. E o verificador pode atestar que o comprovante é válido (que x=x). Mas você precisa de uma entrada separada para lhe dizer o que é x (o novo saldo registrado).

Existem três abordagens para disponibilizar estes dados:

#### Modo Rollup

O modo Rollup garante que o estado do livro razão é armazenado no Ethereum em conjunto com as provas. O modo rolagem é atualmente usado por[dYdX](https://dydx.exchange/)em produção, e também é usado pela[rede pública StarkNet](http://starknet.io/)L2. Os benefícios aqui são claros: pode-se recriar o estado do livro razão apenas interagindo com a blockchain Ethereum. A implicação disso é que você, como usuário final, pode conversar sem confiança com o contrato inteligente relevante na Ethereum, e sacar seus fundos mesmo que o sistema da Layer 2 seja encerrado.

#### Validade

Sob o modo Rollup, a maioria dos custos de gás Ethereum vai para a Disponibilidade de Dados e não para verificação de prova. Isto porque é muito intenso em gás armazenar dados na blockchain. No modo Validium, as informações do livro razão não são enviadas para o Ethereum. Em vez disso, é armazenado fora da cadeia com um Comité de Disponibilidade de Dados. O Ethereum armazena um hash desta informação de ledger. Este Comitê de Disponibilidade de Dados é composto por um quórum de membros independentes que supervisionam a atualização correta do estado e mantêm uma cópia dos dados que foram processados. Cada instância do StarkEx pode criar seu próprio quórum. Membros de quórum para aplicativos existentes em execução na StarkEx incluem entidades como[Consensys](https://consensys.net/), ,[Nethermind](https://nethermind.io/),[Iqlusão](https://iqlusion.io/)e[Cephalopod](https://cephalopod.equipment/).

Os benefícios são claros. Não há necessidade de pagar taxas de gás na Ethereum para armazenar as informações na cadeia. Em vez disso, a única coisa armazenada no Ethereum é um único hash da informação de ledger. Se você quiser retirar dinheiro de forma confiável da Layer 2 conversando com o Ethereum, Basta exigir a assinatura digital de um dos membros do Comité de Disponibilidade de Dados. Os membros do DAC usarão criptografia para provar que você é dono desses fundos.

Outro benefício oculto da Validium Data Availability é a confidencialidade das pessoas que lêem o blockchain. No modo Rollup, o saldo de cada conta no momento em que cada prova é enviada é conhecido pelo público. Com Validium, esses dados ficam ocultos da blockchain — apenas o Comité de Disponibilidade de Dados está ciente disso, pois são mantidos fora da cadeia. Este nível de confidencialidade permite uma grande variedade de casos de utilização em que é importante ofuscar os dados das transacções.

#### Votação

Votação é uma arquitetura de disponibilidade de dados que fornece a escolha entre Validium e o Modo Rollup no nível de transação. Isso faz isso mantendo um livro razão na cadeia e outro livro razão com um comitê de disponibilidade de dados. Os usuários podem escolher entre o modo Validium e Rollup para cada transação individual.

Imagine que você compra uma NFT muito cara como um Macaco Bored ou um Cryptopunk, em um aplicativo em execução no StarkEx. Você pode querer usar o Modo Rollup para proteger os dados para essa NFT, porque você quer um registro dessa transação específica armazenada na Ethereum. No entanto, você pode comprar uma NFT muito barata (por exemplo, um manto para seu personagem em um jogo de blockchain) e, nessas circunstâncias, você terá prazer em economizar dinheiro usando o Validium.

Se você está interessado na escala alcançada pelas provas STARK, então por favor venha e construa sobre nós.



Você sempre pode enviar um e-mail para[info@starkware.co](mailto:info@starkware.co)e um ser humano irá para o seu e-mail.