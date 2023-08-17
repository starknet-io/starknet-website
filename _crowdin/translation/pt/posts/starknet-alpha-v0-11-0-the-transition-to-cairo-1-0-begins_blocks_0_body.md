## TL;DR

* Starknet alpha v0.11.0 está fora e ao vivo no Testnet
* Agora você pode implantar e interagir com os contratos do Cairo 1.0 no Starknet Testnet!
* O cálculo no Starknet é 5x mais barato!
* Pela primeira vez, a atualização do Mainnet para Starknet alpha v0.11.0 será colocada em uma votação de governança
* Isso marca o início do período de transição antes de[Regeneração](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)
* Implantando o Cairo 1. os contratos no Mainnet só serão habilitados após algumas semanas de funcionamento no Testnet, assim que garantirmos que o novo sistema funcione sem problemas.

## Introdução

Estamos entusiasmados em anunciar que o muito esperado Starknet alpha v0.11.0 está disponível na Testnet! Por que este é um grande passo para Starknet? Em Starknet v0.11.0, você pode declarar, implantar e executar[contratos inteligentes do Cairo 1.0](https://medium.com/starkware/cairo-1-0-is-here-7e1ac8377038). Introduzimos também uma nova chamada de sistema que permite uma transição suave dos contratos existentes para uma implementação do Cairo 1.0.

Cairo 1.0 melhora Starknet em dois aspectos diferentes. Em primeiro lugar, melhora a experiência de desenvolvimento, oferecendo uma linguagem de programação mais rica, que introduz (entre outras coisas) tipo/genéricos/características/manipulação de erro no Cairo. Segundo, o Cairo 1.0 desempenha um papel fundamental na jornada de descentralização de Starknet: contratos do Cairo 1.0 enviados em Starknet v0.11.0 compilam para a Sierra. Sierra garante que toda execução do contrato é provável, que é uma propriedade crucial em uma Starknet descentralizada.

Outra melhoria importante que está a ser introduzida nesta versão é uma redução de custos de computação de 5x. Isto fará com que a Starknet seja ainda mais amigável para aplicações com intenso intensidade computacional. Mais detalhes abaixo.

## Preparando-se para Regenesis

Starknet alpha v0.11.0 marca o início do período de transição, o que permitirá a preparação antes da Regenesis de Starknet. O plano Regenesis da Starknet foi[publicado](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)há alguns meses atrás e concentra-se na transição de um sistema baseado no Cairo 0 para um sistema baseado no Cairo 1.0.

Durante o período de transição, os contratos existentes do Cairo 0 (se forem atualizáveis) têm a oportunidade de manter seu endereço e armazenamento, e transitem perfeitamente sua implementação para o Cairo 1. (veja a próxima seção).

Como usuário Starknet, isso significa que você só precisa atualizar sua carteira uma vez que o novo Cairo 1. a implementação da sua conta é lançada (você poderá fazê-lo a qualquer momento até a própria Regenesis). Nenhum tempo de inatividade é esperado, todos os dapps no sistema continuarão a operar como sempre.

Depois da Regênesis, Starknet deixará de apoiar os restantes contratos do Cairo 0 ao longo do sistema. Isto será comunicado antecipadamente e os programadores disporão de tempo suficiente para migrar os seus contratos. O período de transição deve durar alguns meses, e os desenvolvedores de dapp já podem começar a migrar sua implementação para o Cairo 1.0. No final do período de transição, a Regênesis irá acontecer.

## Migração suave para o Cairo 1.0

Com a transição para o Cairo 1.0, os contratos existentes do Cairo 0 são obsoletos e deixarão de ser apoiados na Regenesis. Para permitir que o Cairo 0 possa continuar operando, mesmo após a Regenesis, e manter o estado construído até esse momento, adicionamos uma nova chamada do sistema — ['replace_class'](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#replace_class_syscall). Contratos atualizáveis não têm nenhuma issue com a atualização para o Cairo 1. implementação, mas o proxy subjacente (o contrato que contém o estado real) ainda será travado com a implementação do Cairo 0. O syscall \`replace_class\` resolve esse problema permitindo que o contrato proxy substitua sua classe subjacente, i. . manter o mesmo endereço e armazenamento, mas substituir a implementação.

## O cálculo é agora 5x mais barato!

Hoje, as taxas Starknet de transação têm dois componentes principais: computação e dados on-chain . O elemento computacional da taxa de transação Starknet é determinado pelo custo marginal de verificar sua prova L1 (veja a[documentação](https://docs.starknet.io/documentation/architecture_and_concepts/Fees/fee-mechanism/)para mais detalhes).

Inicialmente, os nossos 200 milhões de passos no Cairo numa prova que exige 5 milhões de gás para verificação conduziram a uma estimativa ingénua de 0,05 gás por passo do Cairo. Desde então, nós movemos para[provas recursivas](https://medium.com/starkware/recursive-starks-78f8dd401025)que permitem uma redução significativa no custo de verificação L1 (apenas a raiz de uma árvore de recursão alcança L1). Agora é hora de atualizar nossas estimativas originais de acordo com isso — o preço de cada etapa Cairo-em L2 será reduzido em 5x, e agora vai custar 0. 1 gás.

Esta redução de custo é significativa para aplicativos computacionalmente intensivos, ex.: contratos de conta com assinaturas não nativas. Transações simples verão uma menor redução de custo (~ 5%). Em versões futuras, vamos lidar com o segundo componente: custos de dados em cadeia. Uma vez que são introduzidas alternativas aos dados on-chain na Starknet (aka Volition), a redução de custo será sentida em todos os domínios.

## Primeira votação sobre Governação Starknet

A primeira fase da governança Starknet foi lançada (mais detalhes[aqui](https://medium.com/starknet-foundation/starknets-governance-first-phase-4614c7566f40)). Agora os membros da Comunidade podem participar na modelagem do Starknet através de um canal adicional, nomeadamente votando sobre alterações de protocolo.

As primeiras fases de governança Starknet serão concentradas nas melhorias de protocolo Starknet. Cada atualização da versão Starknet será implementada no Testnet; Os eleitores terão um período de 6 dias para examinar e testar a versão atualizada, conforme funciona no Goerli. Durante este tempo, uma proposta de Snapshot será aberta, e a comunidade pode votar sobre a aprovação da nova versão para a implantação do Mainnet.

Se a proposta conseguir uma maioria de votos “SIM” durante o período de votação de 6 dias, a proposta passa e Starknet Mainnet será actualizada em conformidade.

Starknet alpha v0.11.0 é a primeira versão Starknet votada. O resultado alpha Starknet v0.11.0 será aberto durante seis dias a partir da implantação do Testnet.

Links relevantes:

* [Espaço de snapshot](https://snapshot.org/#/starknet.eth/proposal/0x00889bc468509610e516e8602f00b21ca8c32466dd4f0140eca38becb7f40bef)
* [Delegação página de descoberta](https://delegate.starknet.io/)
* Thread de discussão alfa Starknet v0.11.0 no[Fórum da Comunidade](https://community.starknet.io/t/proposal-starknet-alpha-v0-11-0/50334)

## Cairo 1.0 e Sierra

Sierra (**S**diste**I**nt**e**rmediate**R**ep**r**esent**a**tion) é uma representação intermediária que compila para a montagem do Cairo (CASM). Pre Starknet alpha v0.11.0, um desenvolvedor compilará o Cairo 0 para o CASM e enviará o resultado para o sequenciador Starknet. Com o Cairo 1.0, os desenvolvedores compilam seu código para a Sierra e enviam esta representação intermediária para o sequenciador. O sequenciador então compilará para o CASM. Sierra tem a garantia de compilar para "CASM seguro", ou seja, um subconjunto de CASM que não pode falhar, tornando toda e qualquer execução provável. Isso garante que o sequenciador poderá cobrar taxas mesmo por transações revertidas, protegendo contra DOS. Para obter mais informações, consulte[a documentação](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/).

![](https://miro.medium.com/v2/resize:fit:1400/0*KsAwaJTIsOuCsJIe)

Starknet alpha 0.11.0 usará a[versão do Cairo 1.0-alpha.6](https://github.com/starkware-libs/cairo/releases/tag/v1.0.0-alpha.6). Esta versão está perto de[recurso parity](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)com o Cairo 0, com todas as chamadas do sistema Starknet já presentes.

Observe que o sequenciador Starknet usa uma versão do compilador fixa, o que significa que melhorias de linguagem podem não estar disponíveis imediatamente em Starknet, e só estarão disponíveis após uma atualização da versão do Starknet. Especificamente, embora as melhorias afectem o Cairo 1. → Compilação da Serra pode ter efeito imediatamente, Mudanças para o compilador Sierra → CASM (consulte a documentação[](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/)para obter mais detalhes) precisará esperar por uma atualização do Starknet.

## O que mais é novo?

### Novo tipo de transação - Declarar v2

Estamos adicionando[um novo tipo de transação](https://docs.starknet.io/documentation/architecture_and_concepts/Blocks/transactions/#declare_v2_cairo_1_0)para declarar classes do Cairo 1.0.

Esta nova versão de transação \`declare\` é semelhante ao existente \`declare\`, com duas distinções importantes:

* O objeto de classe que está sendo enviado agora representa Sierra em vez de CASM, ou seja, a semântica da classe é definida pela representação da Serra.
* O usuário também está assinando o hash da classe compilada. Este é um passo crucial até que a compilação do Sierra→CASM seja comprovada como parte do SO Starknet.

Para obter mais detalhes, consulte[a documentação](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#what_to_expect).

Do ponto de vista do desenvolvedor, a experiência continua a ser a mesma. Depois de escrever o seu código Cairo 1.0, você pode usar o CLI para declarar a aula.

**Note que inicialmente, transações \`declarar v2\` não serão aceitas no Starknet Mainnet. Depois de um período de experimentação no Testnet, o novo tipo de transação será ativado nas classes principal e Cairo 1.0 estará disponível.**

### Poseidon está aqui

[Poseidon](https://www.poseidon-hash.info/)é uma família de funções hash projetadas para ter circuitos algébricos muito eficientes. Como tal, eles podem ser muito úteis em sistemas de prova ZK como STARKs e SNARKs. A partir da Starknet alpha v0.11.0, os desenvolvedores poderão usar o Poseidon. Além disso, alguns dos cálculos de hash que fazem parte do protocolo Starknet serão transferidos para o Poseidon (especificamente, o hash da classe, compilado classe hash e partes do compromisso do state usarão o Poseidon, veja[a documentação](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#poseidon_hash)para mais detalhes). No futuro, mais componentes internos serão transferidos para a função hash do Poseidon.

A versão exata e parâmetros usados no Starknet podem ser encontrados[aqui](https://docs.starknet.io/documentation/architecture_and_concepts/Hashing/hash-functions/#poseidon_hash).

### Mudanças diversas

Como as versões anteriores do Starknet, uma atualização também tem implicações para nossas APIs e outros componentes de baixo nível. Abaixo nós listamos essas e abordamos as alterações específicas que foram feitas:

* v0 invocar/declarar transações não são mais suportadas
* L1→Mensagens L2 agora requerem uma tarifa[](https://docs.starknet.io/documentation/architecture_and_concepts/L1-L2_Communication/messaging-mechanism/#l1-l2_message_fees). Ou seja, mensagens enviadas com zero taxa não serão processadas pelo sequenciador Starknet
* O formato dos dados em cadeia foi[alterado](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/#on_chain_data_post_v0_11_0)
* [As alterações da API](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#api_changes)(não todas as alterações estão listadas aqui, por favor, consulte a documentação para obter uma lista exaustiva) :
* adicionou um novo \`get_compiled_class_by_class_hash\` endpoint
* \`get_class_by_hash\` retorna ambos classes do Cairo 0 / Cairo 1.0 (dependendo do hash solicitado)
* \`get_state_update\` tem uma nova seção para classes substituídas, e declarações são divididas entre as classes do Cairo 0 e do Cairo 1.
* \`estimate_fee\` e \`simulate_tx\` agora podem ignorar a validação
* Uma nova versão de[](https://github.com/starkware-libs/starknet-specs/releases/tag/v0.3.0-rc1)Starknet JSON-RPC

## O que vem a seguir?

Agora que toda a infraestrutura relacionada ao Cairo 1.0 foi colocada, você pode esperar:

* Mais melhorias de linguagem para o Cairo 1.0
* Melhorias de desempenho:[conforme prometido](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de), continuamos avançando para aumentar significativamente o TPS. O próximo passo no roadmap é a transição para a[Rust sequenencer](https://github.com/starkware-libs/blockifier), que é desenvolvido de forma aberta sob o Apache 2. licença. O novo sequenciador fará uso do[rust CairoVM](https://github.com/lambdaclass/cairo-rs)e do nó completo de[Papyrus](https://github.com/starkware-libs/papyrus), formando o Trio de Desempenho.
* Offchain[DA](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/)! Nessa versão, nós manipulamos o componente computacional do custo da transação. Nas próximas versões, vamos lidar com os custos de dados na cadeia, que são hoje o custo dominante das transações médias.

![](/assets/starknet-alpha-v0.11.0-diagram.png)