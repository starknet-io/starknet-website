### TL;DR

* Estamos construindo o StarkNet em etapas, começando pelo estabelecimento da**usabilidade**, melhorando o**desempenho**e, finalmente, avançando para a**descentralização**
* Alcançámos o nosso primeiro objectivo: a utilizabilidade. Isso significa que entregamos computação em geral em estado semelhante à Ethereum (anos antes de ser considerado possível)
* Agora estamos mudando para o estágio 2 de nosso plano de construção de 3 partes: desempenho, concentrando-se na transferência, custo de transação e latência.
* Próxima cima: Descentralização

Apenas um ano depois que os planos para[StarkNet](https://starknet.io/)foram anunciados, a plataforma tem muito boas funcionalidades. A comunidade de desenvolvedores está florescendo além das nossas expectativas mais selvagens e fornecendo uma enxurrada constante de novos projetos Nativos L2.

A nossa prioridade ao longo do último ano era precisamente permitir que isso acontecesse. criando uma StarkNet funcional com uma gama rápida de recursos, que permite aos desenvolvedores mergulharem direto.

Eles fizeram isso em números grandes. Um bom barómetro é a contagem de download para a biblioteca JavaScript[para StarkNet](https://www.starknetjs.com/): já a 5k desde que está disponível há 4 meses atrás.

No entanto, enquanto StarkNet entrega a magia de compressão que prometemos neste momento. está longe de ser capaz de fazer isso para dApps suficientes com taxa de transferência suficiente, e isso poderá revelar-se uma fonte de frustração para os programadores a curto prazo.

A nossa tecnologia central testada em batalha, que está provando muitas transações no STARK, e a compressão das provas, precisa ser precedida de lotes ou sequências de transações. É um processo que a equipe StarkWare já aperfeiçoou uma vez para o mecanismo de escala[StarkEx](https://starkware.co/starkex/), e estamos neste momento a trabalhar nisso novamente para as necessidades da StarkNet.

Agora que muitas das nossas metas de usabilidade foram alcançadas, estamos mudando o foco para tornar esta prioridade máxima. Faz parte do nosso roteiro de 3 etapas:**usability**, seguido do desempenho da rede****e depois da**descentralização**. Um ano de entrada, Queremos te dar uma olhada sob o capuz — um esboço das peças no lugar e o que ainda é um trabalho em andamento.

### A história está tão longe

StarkNet Alpha foi liberado para testnet público em junho e para Mainnet em novembro. Na época do deploy da Mainnet, StarkNet já estava entregando computação geral em um estado semelhante à Ethereum, que era amplamente pensado até anos de distância.

Ao longo de todo o desenvolvimento, escolhemos uma abordagem que se centrou primeiro nas funcionalidades mais importantes e as libertou assim que elas se tornaram disponíveis, essencialmente compartilhando o processo de evolução com a comunidade. StarkNet está longe de estar completa, mas mesmo assim os desenvolvedores já podem construir aplicativos significativos e complexos. Hoje, temos centenas de desenvolvedores[desenvolvendo no StarkNet,](https://starkware.notion.site/Projects-Building-on-StarkNet-a33dee55778a4515a9be9bdae02ee682)dezenas de dApps, e mais de uma dúzia de equipes externas desenvolvendo ferramentas e infraestruturas para o ecossistema StarkNet.

Uma série de melhorias forneceu muitos recursos importantes, incluindo L1<>mensagens L2, dados em cadeia e suporte para compostabilidade, suporte a eventos, suporte a taxas básicas, contrata atualizabilidade, abstração da conta, framework de testes, ferramentas de desenvolvedores, confirmação rápida, número do bloco, timestamp, suporte para contratos de conta.

A comunidade de desenvolvedores está ambos profundamente interessada no StarkNet e na verdade moldando seu desenvolvimento. Os recursos já foram introduzidos com base no feedback do desenvolvedor. A adopção pode muito bem ultrapassar o aumento da taxa de execução, e é por isso que este impulso é agora a nossa grande prioridade.

### Próximos passos

Agora que atingimos a usabilidade, é hora de melhorar o desempenho do sistema. O sistema, na sua situação actual, é capaz de apoiar operações limitadas. A maneira de resolver isto é melhorando o desempenho do nó Sequencer, que é o equivalente a um mineiro de StarkNet. É a "máquina" que sequencia transações depois que elas são submetidas. Quando otimizado, a transferência fará o céu explodir.

Para esse efeito, estamos a analisar simultaneamente onde estão os estrangulamentos e a abordá-los uma a uma. Actualmente, todos os estrangulamentos estão relacionados com o processo de sequência, que chega antes de invocarmos os prognósticos do STAR. O prover-stack testado em batalha está pronto para apoiar a transferência semelhante ao StarkEx, no StarkNet.

Esperamos que a optimização do sequenciador seja um processo que dura alguns meses, com melhorias graduais ao longo do H1/22. Nosso objetivo é alcançar, no início do segundo semestre de 2022, pelo menos uma ordem de magnitude mais alta do TPS que o Ethereum, a um custo que é pelo menos duas ordens de magnitude menor do que o da Ethereum. E isso é apenas o começo.

Há boas razões para que essa fase de otimização seja necessária. e que StarkNet não foi lançado com uma sequencia otimizada para pronto: StarkNet foi capaz de alcançar a usabilidade tão rapidamente porque tivemos um início de cabeça. Em vez de começar do zero e construir uma sequência totalmente nova, nós usamos o lote de StarkEx como um componente central.

Esta era uma ótima maneira de construir. Não se limitou a ser entregue rapidamente; significava que temos certeza de que construímos em fundações resistentes. StarkEx essencialmente testou a principal funcionalidade que impulsiona StarkNet, como notou centenas de bilhões de dólares em negociação cumulativa.

[StarkEx](https://starkware.co/starkex/)é o mecanismo de escala para alguns dos dApps mais bem sucedidos usando L2: dYdX (contratos perpétuos), DeversiFi (trading e pagamentos spot), bem como para Imutável e Sorare (cunhagem e negociação NFT).

Mas o sequenciador construído para eles e outros clientes do StarkEx só pode levar StarkNet até agora. Cada um deles lida geralmente com o mesmo tipo de transação todos os dias. StarkNet é tudo sobre**cálculo geral**, então suas necessidades foram abertas. Quando seu sequenciador leva transações do mempool, elas vêm em várias formas e tamanhos. Além disso, StarkNet também é uma rede aberta, o que significa que há sobrecarga computacional adicional que não foi encontrada na StarkEx.

O desafio actual, nomeadamente a optimização do sequenciador para estas novas necessidades, é um empreendimento significativo, mas temos uma forte compreensão do caminho necessário, com base no nosso êxito desenvolvimento StarkEx.

### Próxima Volta: Descentralização

StarkNet vai ser uma rede totalmente descentralizada sem autorização, completa com líderes eleitorais e mecanismos de governação. Alcançar isto se tornará a nossa principal prioridade quando os foguetes e quedas de custo levarem a cabo e esperamos ter uma primeira versão descentralizada até o final de 2022. Nós esperamos compartilhar publicamente nosso plano de descentralização nos próximos meses.

Tal como a actual taxa de transferência limitada representa uma fase provisória no desenvolvimento da StarkNet, o actual nível de envolvimento do StarkWare também é temporário. Vemo-nos como uma espécie de andaime, que desempenha uma função importante durante a fase de construção, mas que é revogada a seu tempo.

Desenvolvimento de nó completo, um primeiro passo empolgante para a descentralização, já está em curso. Nós completos permitirá que qualquer pessoa tenha e verifique o estado da rede localmente, mantendo o controle exato do que está acontecendo. Três equipes —*Erigon, Nethermind e Equilibrium*— estão desenvolvendo nós completos, e potencialmente mais começarão a ser desenvolvidos no futuro.

Num desenvolvimento paralelo, estão em curso preparativos para a abertura de sequências e de programas informáticos ao público. Qualquer um poderá participar como sequenciador ou um prover no StarkNet.

Será desenvolvida uma estrutura para incentivar as pessoas a participarem no processo, o que incluirá recompensas económicas. Taxas StarkNet irão, em parte, para sequenciadores e provadores.

A médio prazo, esperamos disponibilizar nosso sequenciador para terceiros. e, a longo prazo, esperamos ver também várias equipas construírem sequências que serão sequenciadas para StarkNet.

### Sempre melhorando; Ouvindo para sempre

Conforme o foco se desloca para o próximo desafio, continuaremos a melhorar as conquistas passadas. E ao continuar a trabalhar em todas as áreas da[StarkNet](https://starknet.io/), nossas orelhas estarão sempre abertas para toda a comunidade de desenvolvedores. Então se envolva na discussão, através do[Discord](https://discord.com/invite/uJ9HZTUk2Y), a comunidade[StarkNet Shamans](https://www.google.com/search?client=safari&rls=en&q=StarkNet+Shamans&ie=UTF-8&oe=UTF-8)[Twitter](https://twitter.com/Starknet_Intern)ou outra rota, e ajuda a moldar o futuro da escala da blockchain.