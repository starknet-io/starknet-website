### TL;DR

* STARKs permite a escala da blockchain provando eficientemente a integridade dos cálculos
* StarkEx é um mecanismo de escala específico de aplicação
* StarkNet é uma rede sem permissões e com contrato inteligente com camada 2

### **FATURAS**

STARKs (ARGumento Transparente do Conhecimento) são um sistema de prova que permite a provação e verificação de computações. Ele permite processar um grande cálculo, gerando uma prova para a correção da computação e, em seguida, verificando a prova em muito poucos passos.

STARKs podem desempenhar um papel fundamental na escalabilidade da blockchain ao permitir que grandes computação sejam feitas fora da cadeia, onde é mais barato, deixando apenas a verificação, que exige que uma fracção da computação seja feita na cadeia. Por outras palavras, ao realizar muito poucos passos na cadeia, o verificador afirma a integridade de um cálculo muito maior que foi feito fora da cadeia.

Usando STARKs, layer 2 soluções em lote e computa milhares de transações e, em seguida, verifica sua validade na cadeia com uma única prova STARK. O custo do processo em cadeia é dividido entre**todas as**transações no lote. Isso resulta na segurança Ethereum e no baixo custo de gás por transação.

O baixo custo computacional irá lançar uma nova classe de aplicativos que anteriormente não eram viáveis na cadeia. Estas propriedades fazem do STARKs um excelente bloco de construção para melhorar a experiência do usuário e reduzir os custos de gás. ao mesmo tempo que mantém a segurança da camada de liquidação Ethereum.

StarkWare fornece duas soluções para dimensionar a Ethereum com STARKs: StarkEx e StarkNet.

### **StarkEx**

[StarkEx](https://starkware.co/starkex/)é uma estrutura para criar soluções de dimensionamento permissivas e específicas para aplicação. StarkEx é uma caixa de ferramentas útil de[fluxos de aplicativos](https://docs.starkware.co/starkex-v4/starkex-deep-dive/regular-flows)que os projetos podem usar para alcançar computação off-chain barata. Uma prova STARK, que atesta a correcção da execução, é gerada fora da cadeia. Tal prova pode incluir até 12.000 a 500.000 transações (dependendo do tipo de transação). A prova é então enviada para o verificador STARK para ser aceito na cadeia. Isto significa uma verificação para todas as transações — para um custo de gás incrivelmente baixo por transação.

Alguns exemplos de aplicativos implementados no StarkEx são dYdX (perpetuals negociando), Imutável e Sorare (NFTs — cunhagem e trading), DeversiFi (negociação local) e Celebre (DeFi Pooling).

StarkWare está continuamente adicionando mais fluxos de aplicativo para StarkEx, seguindo o mercado e as necessidades de seus clientes.

### **StarkNet**

*[StarkNet](https://starkware.co/starknet/)é uma rede sem permissão de camada 2, onde qualquer usuário ou desenvolvedor pode implantar contratos inteligentes desenvolvidos no idioma do Cairo.*

Comparável à experiência do contrato inteligente Ethereum, dentro do ecossistema StarkNet, o seu contrato pode interagir com qualquer outro contrato implantado no StarkNet, permitindo protocolos ricamente compostos. Os contratos StarkNet também podem interagir com contratos Ethereum através de uma mensagem assíncrona.

Ao contrário do StarkEx, onde os pedidos são responsáveis por enviar transações, o StkNet sequencia transações em lote e envia-os para serem processados e provados. (sequenciadores da StarkNets atualmente são operados por StarkWare com futuros planos de descentralização.) Isto significa que, uma vez que as aplicações utilizem os seus contratos do Cairo, elas não têm de se preocupar com a criação de infraestruturas de Operador adicionais. StarkNet suporta o modo de disponibilidade de dados Rollup, o que significa que o estado do rollup é escrito na Ethereum juntamente com as provas STARK.

Uma enorme comunidade de desenvolvedores está profundamente envolvida com o ecossistema StarkNet, construindo aplicativos, ferramentas e infraestruturas. Dezenas de aplicativos já estão ao vivo no testnet - DeFi, jogos, votos, IA e muito mais. Mais sobre ferramentas de desenvolvimento, como explorador de blocos, ambiente de teste local e framework O SDK em vários idiomas e outros estão sendo construídos pela Comunidade StarkNet. Além disso, as discussões ativas ocorrem na[plataforma dos Shamans](https://community.starknet.io/), com sugestões para melhorias, recursos potenciais e melhores práticas.

### **A Somar Subir**

Ambos[StarkEx](https://youtu.be/P-qoPVoneQA)e StarkNet são soluções de escalonamento baseadas em STARK. Ambos proporcionam escalabilidade, baixos custos de gás e segurança, mas possuem diferentes requisitos de funcionamento e padrões de interoperabilidade. StarkEx pode ser a solução certa para um aplicativo que em grande parte se enquadra nas APIs que a StarkEx proporciona. StarkNet pode ser mais adequado para um protocolo que requer interação sincronizada com outros protocolos ou que tenha necessidades que vão além do que a StarkEx oferece.

STARKs revolucionaram como aplicativos podem ser construídos na Ethereum. StarkEx e StarkNet continuarão a permitir aplicativos que anteriormente eram inviáveis e irão os limites do que é possível no blockchain.

Este artigo foi escrito com colaboração por[Tim Gestson](https://twitter.com/IcemanTim)e a equipe[StarkWare](https://starkware.co/)