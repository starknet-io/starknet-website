### TL;DR

* Os músculos de validade não são limitados na taxa de transferência da mesma forma que os L1s. Isso dá azo a dividendos de validade do L2 potencialmente muito superiores.
* O roadmap de desempenho StarkNet aborda um elemento-chave do sistema: o sequenciador.
* Apresentamos aqui o roadmap para melhorias de desempenho:\
  — Paralelismo sequenciador\
  — Uma nova implementação para a Cairo VM\
  — Reimplementação Sequencer em ruga\
* Provedores, que estão a ser testados em batalha, não são o estrangulamento e podem lidar com muito mais do que agora fazem!

### Introdução

StarkNet lançada em Mainnet há quase um ano. Nós começamos a construir a StarkNet focando na funcionalidade. Agora, mudamos o foco para a melhoria do desempenho com uma série de passos que ajudarão a melhorar a experiência do StarkNet.

Nesta publicação, explicamos por que há uma ampla gama de otimizações que só são aplicáveis em leituras de validade, e compartilharemos nosso plano de implementar essas etapas no StarkNet. Alguns destes passos já estão implementados em StarkNet Alpha 0.10.2, que foi lançado no Testnet em nov 16 e ontem no Mainnet. Mas antes de discutirmos as soluções, vamos rever as limitações e suas causas.

### Limitação de blocos: valentia versus L1

Uma potencial abordagem para aumentar a escalabilidade da blockchain e aumentar o TPS seria eliminar as limitações em blocos (em termos de gás/tamanho), mantendo o tempo do bloco constante. Isto exigiria mais esforço dos produtores de blocos (validadores em L1, sequências sobre o L2) e, por conseguinte, apela a uma implementação mais eficiente dessas componentes. Para esse fim, agora mudamos o foco para as otimizações de sequenciadores StarkNet, que descrevemos com mais detalhes nas seguintes seções.

Coloca-se aqui uma questão natural. Por que são otimizações de sequenciador limitadas a tacos de validade, isto é, por que não podemos implementar as mesmas melhorias no L1 e evitar completamente as complexidades dos rolamentos de validade? Na próxima seção, afirmamos que há uma diferença fundamental entre os dois, permitindo uma ampla gama de otimizações em L2 que não são aplicáveis a L1.

### Por que razão a transferência L1 é limitada?

Infelizmente, o levantamento das limitações do bloco de L1 sofre de uma grande armadilha. Ao aumentar a taxa de crescimento da cadeia, também aumentamos as demandas de nós completos, que estão tentando acompanhar o estado mais recente. Uma vez que L1 nós completos devem executar novamente todo o histórico, um aumento alto no tamanho do bloco (em termos de gás) coloca uma tensão significativa sobre eles, novamente levando a máquinas mais fracas saindo do sistema e deixando a capacidade de rodar nós cheios apenas para entidades grandes o suficiente. Como resultado, os usuários não poderão verificar o próprio estado e participar na rede sem confiança.

Isso deixa-nos com a compreensão de que a transferência do L1 deve ser limitada, a fim de manter um sistema verdadeiramente descentralizado e seguro.

### Por que as mesmas barreiras não afetam a validade?

**Apenas quando consideramos a perspectiva completa do nó vemos o poder real oferecido por lances de validade.**Um nó completo L1 precisa executar novamente o histórico inteiro para garantir a exatidão do estado atual. Os nós StarkNet só precisam verificar as provas STARK, e esta verificação toma uma quantidade exponencialmente menor de recursos computacionais. Em particular, a sincronização do zero não tem de envolver a execução; um nó pode receber um dump do estado atual de seus pares e somente verificar através de uma prova STARK de que este estado é válido. Isso nos permite aumentar a transferência da rede sem aumentar os requisitos a partir de um nó completo.

Por conseguinte, concluímos que o sequenciador L2 está sujeito a todo um espectro de otimizações que não são possíveis num L1.

### Planejamento do desempenho à frente

Nas próximas secções, discutimos quais dessas estão actualmente previstas para o sequenciador StarkNet.

### Paralelismo sequenciador

O primeiro passo em nosso roteiro foi introduzir a paralelização à execução da transação. Isto foi introduzido em StarkNet alpha 0.10.2, que foi publicado ontem sobre a Mainnet. Agora mergulhamos no que é a paralelização (esta é uma seção semi-técnica, para continuar no roteiro, saltar para a próxima seção).

Então, o que significa "paralelização de transação"? É impossível executar um bloco de transações em paralelo pois diferentes transações podem ser dependentes. Isto é ilustrado no seguinte exemplo. Considere um bloco com três transações do mesmo usuário:

* Transação A: swap USDC para ETH
* Transação B: pagamento ETH por uma NFT
* Transação C: swap USDT para BTC

Claramente, o Tx A deve acontecer antes do Tx B, mas o Tx C é totalmente independente de ambos e pode ser executado em paralelo. Se cada transação requer 1 segundo para ser executada, então o tempo de produção do bloco pode ser reduzido de 3 segundos para 2 segundos introduzindo a paralelização.

O cerne do problema é que não conhecemos antecipadamente as dependências de transação. Na prática, somente quando executamos transações B do nosso exemplo vemos que ele depende de mudanças feitas por transação A. Mais formalmente, a dependência segue do fato de a transação B ler de células de armazenamento que a transação A escreveu. Podemos pensar nas transações como formando um gráfico de dependência, onde há uma borda da transação A a transação B iff A escreve para uma célula de armazenamento que é lida por B e, portanto, tem de ser executado antes do B. A figura a seguir mostra um exemplo de tal gráfico de dependências:

![](https://miro.medium.com/max/641/0*I-qGgxdJJmqmgZWM)

No exemplo acima, cada coluna pode ser executada em paralelo, e este é o acordo ideal (embora ingenuamente, teríamos executado as transações 1-9 sequencialmente).

Para superar o fato de que o gráfico de dependências não é conhecido antecipadamente, introduzimos a paralelização***otimista***, no espírito de[BLOCK-STM](https://malkhi.com/posts/2022/04/block-stm/)desenvolvido pelo Aptos Labs, para o sequenciador StarkNet. Sob este paradigma, tentamos com optimismo executar transações em paralelo e reexecutar quando encontrarmos uma colisão. Por exemplo, podemos executar as transações 1-4 a partir do número 1 em paralelo, apenas para descobrir depois que o Tx4 depende do Tx1. Portanto, sua execução foi inútil (executamos em relação ao mesmo estado em que executamos o Tx1 contra, embora devamos tê-lo contra o Estado resultante da aplicação do Tx1). Nesse caso, reexecutaremos o Tx4.

Note que podemos adicionar muitas otimizações em cima da paralelização otimista. Por exemplo, em vez de esperarmos ingenuamente o fim de cada execução, podemos abortar uma execução no momento em que encontrarmos uma dependência que a invalida.

Outro exemplo é a otimização da escolha de quais transações para executar novamente. Suponha que um bloco que consiste em todas as transações a partir da figura 1 é alimentado em um sequenciador com cinco núcleos de CPU. Primeiro, tentamos executar as transações de 1-5 em paralelo. Se a ordem de conclusão for Tx2, Tx3, Tx4, Tx1 e, finalmente, Tx5, então encontraremos a dependência Tx1→Tx4 somente depois de Tx4 já ter sido executado — indicando que deve ser reexecutado. Podemos querer também reexecutar o Tx5, dado que pode comportar-se de forma diferente, dada a nova execução do Tx4. No entanto, em vez de apenas reexecutar todas as transações após o Tx4 agora invalidado, podemos atravessar o gráfico de dependências construído a partir das transações cuja execução já terminou e apenas re-executar transações que dependia do Tx4.

### Uma nova implementação para o Cairo-VM

Os contratos inteligentes em StarkNet são escritos no Cairo e são executados dentro da Cairo-VM, que aparece no[papel do Cairo](https://eprint.iacr.org/2021/1063.pdf). Atualmente, o sequencer está usando uma[implementação python](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/cairo/lang/vm)do Cairo-VM. Para otimizar o desempenho da implementação da VM, lançamos um esforço para reescrever a VM na ferrugem. Graças ao excelente trabalho do[Lambdaclass](https://lambdaclass.com/), que já são uma equipa inestimável no ecossistema StarkNet, este esforço está em breve a dar frutos.

A implementação da VM,[caos-rs](https://github.com/lambdaclass/cairo-rs), agora pode executar código nativo do Cairo. O próximo passo é lidar com a execução de contratos inteligentes e integrações com o sequenciador pythonic. Uma vez integrado com caos-rs, espera-se que o desempenho do sequenciador melhore significativamente.

### Reimplementação do Sequencer em Rust

Nosso deslocamento de python para rust para melhorar o desempenho não está limitado à VM do Cairo. Paralelamente às melhorias mencionadas acima, planejamos reescrever o sequenciador do zero na base. Além das vantagens internas de Rust, isso oferece uma oportunidade para outras otimizações para o sequenciador. A listagem de um casal, podemos usufruir dos benefícios de um cao-cara, sem o excesso de comunicação do pithon, e podemos redesenhar completamente a forma como o estado é armazenado e acessado (que hoje é baseado na estrutura de[Patricia-Trie](https://docs.starknet.io/documentation/develop/State/starknet-state/#state_commitment)).

### E quanto aos propulsores?

Em todo este post, não mencionamos o possivelmente mais famoso elemento de valentia — a prova. Poder-se-ia imaginar que, sendo a componente mais sofisticada da arquitectura, deveria ser o estrangulamento e, consequentemente, o foco da otimização. Curiosamente, são os componentes mais "padrão" que agora são o estrangulamento do StarkNet. Hoje, especialmente com[provas recursivas](https://medium.com/starkware/recursive-starks-78f8dd401025), podemos caber muito mais transações que o tráfego atual no Testnet/Mainnet em uma prova. Na verdade, actualmente, os blocos StarkNet são comprovados ao lado das transacções StarkEx, onde estes podem por vezes incorrer em várias centenas de milhares de minas NFT.

### Summary

Paralelamente, Rust e muito mais — preparam-se para um TPS melhorado nas próximas versões StarkNet.