### TL;DR

* StarkNet Alpha 0.8.0 apresenta a versão inicial do mecanismo de taxa (opcional até StarkNet Alfa 0.9.0.)
* Novas chamadas de API para estimar a taxa de transação para obter o rastreamento de transação, permitindo uma melhor visibilidade e capacidade de depuração
* Melhorias de desempenho no sequenciador StarkNet
* Cancelamento de mensagem L1→L2

### Introdução

Como compartilhado no nosso[roadmap](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51), seguindo a última adição à funcionalidade e recursos da StarkNet, nossa atenção se desloca para aprimoramentos de desempenho e design do protocolo (incluindo taxas, abstração da conta, descentralização, etc.). StarkNet Alpha 0.8.0 inicia o processo de adicionar taxas de transação e melhorar o desempenho do sequenciador.

O roteiro para StarkNet inclui um mecanismo de taxas, e ao progredir com essa versão, estamos dando um passo importante mais próximo do desempenho total da plataforma.

Adicionar o mecanismo de taxas é uma parte essencial do projeto de desempenho da StarkNet. Sem uma taxa mínima, arriscamo-nos a enfrentar transações infinitas: o que tornaria impossível o desempenho do sistema, independente das otimizações sequenciais.

### Funcionalidades

#### Suporte de tarifas

StarkNet Alpha suporta agora a primeira versão do mecanismo de taxas. Este mecanismo é essencial, mesmo nesta fase inicial, e até mesmo na Testnet, por duas razões principais:

1. Ele permite que os desenvolvedores comecem a otimizar seus contratos de acordo com o modelo de custo da StarkNet.
2. É uma contrapartida crucial melhorar o desempenho do sistema, pois impede o spamming através do envio de inúmeras transações.

Esta versão introduz os componentes necessários para os desenvolvedores incorporarem taxas em suas ferramentas e aplicativos. Os desenvolvedores agora podem estimar a taxa de transação chamando o endpoint \`estimate_fee\` e fazer o pagamento de taxa como parte da execução da transação.

Uma vez que este recurso não é compatível com versões anteriores, não aplicaremos o pagamento de taxas neste momento, mas apenas da versão 0. .0, que deverá ser libertado dentro de algumas semanas. Esta transição gradual permitirá que usuários e desenvolvedores se adaptem ao novo modelo.

#### Estrutura em 0.8.0

No 0.8.0, as taxas serão cobradas apenas de acordo com a complexidade computacional, enquanto a StarkWare ainda subsidiará o custo de comunicação L1. Vamos atualizar o mecanismo de taxas para incluir os custos de operação L1 e comunicação nas próximas semanas. O pagamento será coletado atomicamente com a execução da transação na StarkNet L2. Veja a documentação de[taxas](https://starknet.io/documentation/fee-mechanism/)para uma descrição profunda.

É importante notar que trabalharemos em estreita colaboração com a comunidade de desenvolvedores para ajustar e desenvolver o mecanismo de taxas à medida que a StarkNet evoluir.

#### L2 Goerli ETH Faucet

Nós lançamos o[L2 Goerli ETH Faucet](https://faucet.goerli.starknet.io/)para permitir que os usuários paguem taxas no Testnet. Este Faucet envia pequenas quantidades de L2 Goerli ETH para o endereço da sua conta no StarkNet Goerli que você pode usar para pagar a taxa de transação.

#### Trace API

Adicionamos a capacidade de recuperar o traço de execução de uma transação na API da StarkNet. Dentro do rastreamento da transação, todas as chamadas internas são visíveis, acompanhadas de informações como recursos de execução consumidos, valor de retorno, eventos emitidos e mensagens enviadas. Esta nova chamada simplifica a compreensão do comportamento do contrato ou a depuração de transações. Além disso, ferramentas como[Voyager](https://voyager.online/)ou[StarkTx](https://starktx.info/)podem incorporar estes dados; fornecendo análises mais detalhadas aos usuários, em particular para interação de contrato da conta.

Para obter o traço, você pode usar \`get_transaction_trace\` na CLI do StarkNet. Para ver um exemplo de como usá-lo, verifique o[tutorial](https://www.cairo-lang.org/docs/hello_starknet/cli.html?#get-transaction-trace).

#### Cancelamento de mensagem

Uma característica adicional desta versão é a capacidade de cancelar as mensagens L1→L2. Por que isso é útil? Imagine um cenário onde um usuário transfere um ativo do L1 para o L2. O fluxo começa com o usuário enviando o ativo para uma ponte StarkNet e a geração L1→L2 de mensagem. Agora, imagine que o consumo da mensagem de L2 não funciona (isso pode acontecer devido a um bug no contrato do Cairo do dApps). Isso pode resultar em o usuário perder custódia sobre seu ativo para sempre.

Para mitigar esse risco, permitimos que o contrato que iniciou a mensagem L1→L2 o cancele — depois de declarar a intenção de fazer isso e esperar pela quantidade de tempo adequada (consulte a[documentação](https://starknet.io/l1-l2-messaging/#cancellation)).

### Melhorias de desempenho

Esta versão diminui significativamente o tempo que um sequenciador precisa para executar um fluxo de transações recebidas do Cairo.

Este é apenas o primeiro passo! Nosso próximo grande marco de desempenho, a ser introduzido em breve (0.9.0), é a execução paralela do sequenciador e muito mais otimizações são esperadas no fundo da estrada.

### E agora?

Leia a documentação técnica[aqui](https://starknet.io/documentation/fee-mechanism/).

Vá para[starknet.io](https://starknet.io/), para todas as informações do StarkNet, documentação, tutoriais e atualizações.

Participe do[Discord StarkNet](https://discord.gg/uJ9HZTUk2Y)para suporte a desenvolvedores, anúncios de ecossistema, e se torne parte da comunidade.

Visite[StarkNet Shamans](https://community.starknet.io/)para ficar atualizado e participar de todas as discussões de pesquisa da StarkNet.