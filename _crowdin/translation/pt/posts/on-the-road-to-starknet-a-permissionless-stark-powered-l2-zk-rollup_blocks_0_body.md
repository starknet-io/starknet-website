#### **TL;DR**

Estamos construindo o StarkNet em quatro etapas:

* Passo 0 — Fundamentos (completados*)
* Passo I — Planetas: Rollups Um-App
* Passo II - Constelações: Rolagens de Aplicativos Múltiplos
* Passo III - Universo: Um Rollup Descentralizado

Esperamos que o passo a dar em poucos meses seja posto em prática. e esteja bem no nosso caminho para os Passos II & III até finais de 2021.

### **Introdução**

StarkWare está construindo StarkNet, um StarkNet, descentralizado, sem permissão e resistente à censura STARK-powered L2 ZK-Rollup que suporta computação geral sobre a Ethereum. É baseado na[linguagem Cairo, completa](https://www.cairo-lang.org/).

Desenvolvedores, usuários e nós StarkNet serão capazes de fazer tudo o que se espera de um Rollup L2 sem permissão: Desenvolvedores podem criar aplicativos implementando sua própria lógica de negócios e implantando-os no StarkNet. Os usuários podem enviar transações para StarkNet para serem executadas, como hoje interagem com a Ethereum. Os nós e os participantes da StarkNet serão incentivados economicamente a garantir que a rede opera de forma eficiente e justa.

Todas as transações StarkNet serão periodicamente acumuladas, e sua validade será provada com uma prova STARK, para ser verificada na Ethereum. Como o esforço computacional necessário para verificar as provas STARK é exponencialmente pequeno em comparação com a prova de computação, StarkNet irá dimensionar o Ethereum por ordens de magnitude.

Como todas as transições de estado StarkNet serão comprovadas pelo STARK, apenas as válidas serão aceitas na Ethereum. Todos os dados necessários para reconstruir o estado completo do StarkNet serão publicados na cadeia. Qualquer um poderá executar seu próprio nó StarkNet. Essas propriedades tornarão StarkNet tão segura e sem permissão como Ethereum.

Estamos nisso há três anos. e já alcançaram alguns marcos notáveis ao transformar "Moon Math" em software eficiente e de nível produtivo rodando na Ethereum. A maneira como StarkWare faz as coisas é primeiro resolver os problemas difíceis, construir a tecnologia principal e depois liberá-la para a produção de forma fragmentada. Continuaremos a construir desta forma à medida que formos concluindo o StarkNet.

![](/assets/ontheroad_02.png)

**Passo 0 - Fundamentos**

StarkWare concluiu o lançamento de algumas bases importantes para o StarkNet.

#### **Cairo**

[Cairo](https://twitter.com/StarkWareLtd/status/1300353049836376066?s=20)é nossa estrutura de alto nível & para produzir provas STARK para computação geral. Em vez de criar manualmente, "circuitos" complexos ou AIRs, um desenvolvedor de aplicativos pode usar o Cairo para definir qualquer lógica de negócios, comprová-lo fora da cadeia e verificado on-chain. O Cairo é[em produção no Mainnet](https://twitter.com/StarkWareLtd/status/1320695603492507648?s=20), e também está[disponível para desenvolvedores](http://cairo-lang.org/).

Dentro de algumas semanas, lançaremos em um teste público Ethereum uma versão Alfa da Proof Generic Service (GPS). *Isso permitirá que os desenvolvedores construam seus próprios aplicativos usando o Cairo, implementando qualquer lógica de negócios que desejarem. Eles enviarão seu código Cairo para o GPS a ser comprovado, e então verificado on-chain.*

GPS permite que uma única prova afirme a integridade da execução de aplicações completamente separadas e independentes, Dando, assim, a essas aplicações a possibilidade de amortizar entre elas o custo do gás da verificação da prova.

Cairo e GPS são a base da StarkNet — a nossa decisão de externalizar ambos os desenvolvedores proporciona-lhes uma exposição rápida a esta tecnologia. não só para que possam começar a desenvolver sobre isso, mas também para que possam influenciar a evolução de StarkNet.

Continuaremos a desenvolver o Cairo com base nas necessidades e no feedback da comunidade de desenvolvedores. Vamos melhorar essa linguagem com novos recursos, sintaxe e construções que melhoram a sua usabilidade, e continuaremos a desenvolver e melhorar a ferramenta do Cairo: compiladores, tracer/depurador, e integrações a IDEs comuns.

StarkNet terá o Cairo a correr debaixo do pano.

#### **A pilha de software STARK**

StarkWare desenvolveu o sistema de prova mais poderoso do ecossistema, e ele foi[ao vivo no Mainnet](https://medium.com/starkware/starks-over-mainnet-b83e63db04c0)por meses. StarkWare também desenvolveu o[ethSTARK](https://twitter.com/StarkWareLtd/status/1264911004099543040?s=20), nosso prover de código aberto, que é 20X mais rápido que qualquer outro provador; oferece tanto[conhecimento zero e assinaturas pós-quantum-secure](https://twitter.com/StarkWareLabs/status/1331930111227080709).

Nossa escala de*medições*— não extrapolações, nem promessas — inclui o processamento de 300 mil transações em uma única prova no Mainnet, alcançando[o recorde mundial em taxa de rolagem: 3K tps](https://twitter.com/StarkWareLtd/status/1287770381525422082?s=20). No processo, atingimos o recorde mundial de eficiência de gás Rollup: 315 gases/tx, ordens de magnitude mais baratas do que transações na Ethereum L1.

Essa tecnologia será a pedra angular da Camada de Prova descentralizada da StarkNet, e, portanto, vamos lançar provers adicionais e aprimorados como parte do desenvolvimento da StarkNet's (mais sobre isso em um próximo post de blog).

#### **StarkEx**

StarkEx é nosso mecanismo de escalabilidade L2. Tem servido aos clientes de[DeversiFi](https://twitter.com/deversifi)na Mainnet desde junho de 2020. Irá energizar tanto[dYdX](https://twitter.com/dydxprotocol)quanto[ImmutableX](https://twitter.com/Immutable)começando em algumas poucas semanas. A StarkEx pode lidar com lógica complexa de negociação (trading spot, derivativos, NFTs) e pagamentos.

Desenvolver o StarkEx era nossa maneira de dogmatizar nossa cadeia de ferramentas e testá-la contra as necessidades do mundo real. Não há nada como as exigências de aplicativos reais e usuários ao vivo para ajudar ferramentas a amadurecer e evoluir. Isso também nos ajuda a entender quais elementos precisam ser dirigidos para servir melhor o ecossistema — por exemplo, integrações com carteiras e exploradores de blocos.

StarkEx é um exemplo ao vivo da habilidade de dimensionar aplicativos usando um Rollup ZK baseado em STARK, e é a primeira aplicação em produção de Mainnet escrita no Cairo. Como tal, também será uma das aplicações em execução no StarkNet.

![](/assets/ontheroad_03.png)

### **O Caminho à Frente**

#### **Passo I — Planetas: Rollups Um-App**

Esta etapa permitirá que os desenvolvedores criem e apliquem seus próprios aplicativos escaláveis no StarkNet.

Neste ponto, cada instância do StarkNet será capaz de executar um único aplicativo. Instâncias diferentes podem executar aplicações diferentes.\
O framework StarkNet incluirá o seguinte:

* Mecanismos necessários para gerar provas STARK para uma lógica arbitrária do Cairo e, em seguida, enviá-los e verificá-los na Ethereum.
* Interações com L1 Ethereum: depósitos e retiradas de tokens L1, publicação dos dados on-chain , mecanismos de fuga que protegem os usuários da StarkNet contra operadores maliciosos da StarkNet, etc.
* Gestão dos saldos de usuários do L2 e do armazenamento e memória do aplicativo.

Os desenvolvedores serão capazes de se concentrar apenas na construção da lógica de negócios do seu aplicativo, e, em seguida, vá para produção: implantar e executar em escala no StarkNet.

O que nos permite construir uma escala de cálculo geral ZK-Rollup é a combinação de:

* Cairo, que é uma linguagem de programação completa para uso geral
* Nossa forte pilha STARK (prover e verificador), que permite agrupar enormes computações em uma única prova

#### **Passo II - Constelações: Rolagens de Aplicativos Múltiplos**

O próximo passo suportará vários aplicativos executando na mesma instância do StarkNet e acessando o mesmo estado global de L2. Isto permitirá a interoperabilidade entre as diferentes aplicações, bem como a redução do custo do gás devido à melhoria das economias de escala.

Cairo, a poderosa pilha STARK e a vantagem competitiva do GPS amplificar StarkNet, apoiando um Rollup multi-aplicativos.

Nesta fase, StarkNet será um framework totalmente funcional para executar*várias*aplicações com qualquer lógica comercial arbitrária em cima da Ethereum, com cada instância de execução por um único operador.

Um operador pode agora girar um nó StarkNet e os desenvolvedores de aplicativos poderão publicar seus contratos nele. Do ponto de vista dos usuários, StarkNet agora se parece com o Ethereum, com uma escala mais alta.

#### **Passo III - Universo: Rollup descentralizado**

O último passo na evolução de StarkNet é descentralizar sua operação.

Perguntas Intrigantes de R&D que estamos enfrentando que afetam esta etapa inclui (i) usando ZK-Rollups para melhorar os mecanismos de obtenção de consenso, e (ii) projetando mecanismos cripto-econômicos para incentivar os colaboradores e operadores descentralizados do StarkNet (sequências de transações, provadores, etc. funcionar de forma eficiente, justa e segura.

### **Conclusão**

StarkWare está construindo StarkNet, um L2 ZK-Rollup sobre o Ethereum, que oferece suporte a computação geral com base na língua do Cairo.

StarkNet permitirá que as aplicações aumentem sem comprometer a segurança, usuários para pagar taxas de transação razoáveis e todo o ecossistema para crescer substancialmente e cumprir sua promessa.

Nós convidamos com prazer a comunidade de desenvolvedores para[se juntar](https://twitter.com/StarkWareLtd)a nós nessa jornada.

**Atualização (Nov. 2021):**StarkNet Alpha está ao vivo na Ethereum Mainnet