A escalabilidade da Blockchain sempre foi um tema aquecido. Quase todas as redes blockchain tocam um elevado número de transações por segundo (TPS) como um ponto de venda. No entanto, o TPS não é uma métrica válida para comparar as redes blockchain com — fazendo dele um desafio para avaliar seu desempenho relativo. Além disso, grandes números TPS geralmente vêm a um custo — o que coloca a pergunta: essas redes realmente escalam, ou apenas aumentam a sua taxa de execução?

Então, vamos examinar como definir escalabilidade, quais trade-offs são feitos para alcançá-lo, e por que validações são a solução de escalabilidade final.

### Nem todas as transações são iguais

Primeiro, precisamos estabelecer a nossa afirmação de que a métrica simples e conveniente do TPS não é uma medida precisa de escalabilidade.

Para compensar nós para executar transações (e para dissuadir os usuários de fazer spam na rede com computação desnecessária), As blockchains cobram uma taxa proporcional ao fardo computacional imposto na blockchain. Na Ethereum, a complexidade da carga computacional é medida em*gás.*Porque o gás é uma medida muito conveniente da complexidade da transação, o termo será usado em todo este artigo também para blockchains não-Ethereum, mesmo que seja tipicamente específico do Ethereum.

As transacções diferem significativamente em complexidade e, por conseguinte, quanto gás consomem. Bitcoin, o pioneiro de transações peer-to-peer-to-peer, só suporta o script rudimentar do Bitcoin. Estas transferências simples de endereço para endereço usam pouco gás. Em contraste, cadeias de contratos inteligentes como Ethereum ou Solana suportam uma máquina virtual e linguagens de programação completa que permitem transações muito mais complexas. Por isso, dApps como o Uniswap exigem muito mais gás.

É por isso que não faz sentido comparar o TPS de diferentes blockchains. O que devemos comparar é a capacidade de computação — ou taxa de transmissão.

Todas as Blockchains têm um tamanho de bloco (variável) e tempo de bloco que determinam quantas*unidades de cálculo*podem ser processadas por bloco e como*rápido*um novo bloco pode ser adicionado. Juntos, essas duas variáveis determinam a*transferência*de uma blockchain.

### O que restringe a escalabilidade?

Blockchains procuram ser redes ao máximo descentralizadas e inclusivas. Para o conseguir, há duas propriedades fundamentais que devem ser controladas.

#### **1. Requisitos de Hardware**

A descentralização de uma rede blockchain é determinada pela capacidade do nó mais fraco da rede de verificar o blockchain e manter seu estado. Portanto, os custos para executar um nó (hardware, bandwidth, e o armazenamento) devem ser mantidos o mais baixo possível, de modo a permitir que o maior número possível de indivíduos se torne participantes sem permissão na rede sem confiança.

#### 2**.**Crescimento da Fortaleza

Crescimento do estado se refere a quão rápido o blockchain cresce. Quanto mais taxa de blockchain permitir que aconteça por unidade de tempo, mais rápido o blockchain cresce. Nós completos armazenam o histórico da rede, e eles devem ser capazes de validar o estado da rede. O estado da Ethereum é armazenado e referenciado usando estruturas eficientes como árvores. À medida que o estado cresce, novas folhas e ramos são adicionados a ele, fazendo com que seja cada vez mais complexo e demorado executar certas ações. À medida que a cadeia cresce em tamanho, piora a execução por nós, o que leva a um tempo cada vez maior para validar novos blocos. Ao longo do tempo, isto também aumenta o tempo total que leva para um nó completo ser sincronizado.

### Impactos negativos de aumentar a Capacidade

#### 1. Contagem de nós

Os requisitos mínimos para executar um nó e a contagem de nós são:

* Bitcoin1: 350GB HDD, espaço de disco de 5 Mbit/s, conexão de 1GB RAM, CPU >1 Ghz. **Número de nós: ~10.000**
* Ethereum2: 500 GB+ espaço de disco SSD, conexão de 25 Mbit/s, 4–8GB RAM, núcleos de CPU 2–4. **Número de nós: ~6,000**
* Solana3: 1.5TB+ espaço em disco SSD, conexão de 300 Mbit/s, 128GB de CPU 12+ núcleos. **Número de nós: ~1,200**

Observe que quanto maior for a CPU, largura de banda e requisitos de armazenamento para nós necessários para a transferência da blockchain, os menos nós na rede — levando a uma descentralização mais fraca e uma rede menos inclusiva.

#### 2. Hora de sincronizar um nó completo

Ao executar um nó pela primeira vez, tem que sincronizar com todos os nós existentes, baixar, e validar, o estado da rede desde o bloco da gênesis até a ponta da cadeia. Este processo deverá ser o mais rápido e eficiente possível, de modo a permitir que qualquer pessoa possa agir como participante sem permissão do protocolo.

Tomando o[Nó Bitcoin](https://blog.lopp.net/2020-bitcoin-node-performance-tests/)do Jameson Lopp e[2021 Testes de Sincronização do Node](https://blog.lopp.net/2021-altcoin-node-sync-tests/)como um indicador, A tabela 1 compara o tempo que leva para sincronizar um nó cheio de Bitcoin vs. Ethereum vs. Solana em um PC médio de nota de consumo.

![Tabela 1. Transferência de blockchain e sincronização de nó](/assets/1_gmpi_1c9zipoc-znrh7b5q.png "Tabela 1. Transferência de blockchain e sincronização de nó")

O Table 1 demonstra que o aumento da taxa de transferência leva a horários de sincronização mais longos, porque cada vez mais dados precisam ser processados e armazenados.

Enquanto as melhorias no software do nó são constantemente feitas para mitigar o desafio da crescente blockchain (reduzindo a pegada no disco, velocidades de sincronização mais rápidas, maior resiliência de crash, modulação de certos componentes, etc. , os nós aparentemente ainda não conseguem acompanhar o ritmo com aumentos para a taxa de transferência.

### Como a Escalabilidade deve ser definida?

A escalabilidade é o termo mais errado no espaço da blockchain. Embora o aumento da taxa de execução seja desejável, é apenas uma parte do quebra-cabeça.

***O Scalability**significa mais**transações**para**o mesmo hardware**.*

Por essa razão, a escalabilidade pode ser separada em duas categorias.

#### Escalabilidade do sequenciador

A sequência descreve o ato de ordenar e processar transações em uma rede. Como estabelecido anteriormente, qualquer blockchain poderia trivialmente aumentar sua transferência, aumentando o tamanho do bloco e encurtando seu tempo de bloco - até um ponto no qual o impacto negativo de sua descentralização é considerado muito significativo. Mas adulterar estes parâmetros simples não fornece as melhorias necessárias. O EVM da Ethereum pode, em teoria,[lidar com até ~2,000 TPS](https://twitter.com/dankrad/status/1459607325854121989), que é insuficiente para atender a demanda de espaço de longo prazo. Redimensionando a sequência, Javier Solana fez algumas inovações impressionantes: aproveitando um ambiente de execução paralelo, e um mecanismo inteligente de consenso, que permite uma transferência muito mais eficiente. Mas, apesar das suas melhorias, não é suficiente nem escalável. À medida que Javier Solana aumenta a sua taxa de transferência, os custos do hardware para rodar um nó e as transações também aumentam.

#### Escalabilidade de verificação

*A escalabilidade de verificação descreve abordagens que aumentam a taxa de transferência sem sobrecarregar nós com custos de hardware cada vez maiores.*Especificamente, refere-se a inovações criptográficas, como provas de validade. Eles são a razão pela qual a Validade Rollups pode escalar um blockchain de forma sustentável.

**O que é um Rollup de Validação?**

Rollups de validade (também conhecido como "ZK-Rollups") move a computação e o armazenamento de estado off-chain mas mantém uma pequena quantidade de dados on-chain. Um contrato inteligente na blockchain subjacente mantém a raiz do estado do Rollup. No Rollup, um lote de transações altamente comprimidas, juntamente com a actual raiz estatal, são enviadas para uma Prover off-chain. O Prover calcula as transações, gera uma prova de validade dos resultados e da nova raiz do estado, e o envia para um verificador em cadeia. O verificador verifica a prova de validade, e o contrato inteligente que mantém o estado da Rollup atualiza-o para o novo estado fornecido pelo Prover.

**Como escala de Validade Rollups com os mesmos requisitos de hardware?**

Mesmo que os Provers exijam hardware de alto nível, eles não afetam a descentralização de uma blockchain; porque a validade das transações é garantida por provas matematicamente verificáveis.

O que importa são os requisitos para a verificação das provas. Como os dados envolvidos são altamente compactados e em grande parte abstraídos através da computação, seu impacto nos nós da blockchain subjacente é mínimo*.*

Os verificadores (Ethereum nodes) não requerem hardware de alto nível, e o tamanho dos lotes não aumenta as exigências do hardware. Apenas as transições de estado e uma pequena quantidade de dados de chamadas precisam ser processadas e armazenadas pelos nós. Isso permite que todos os nós da Ethereum verifiquem os lotes do Rollup de Validade usando seu hardware existente.

**Quanto mais transações, mais barato fica**

Nas blockchains tradicionais, quanto mais transações acontecem, quanto mais caro ele fica para todos, à medida que o espaço em bloco fica preenchido — e os usuários precisam se superar em um mercado de taxas para incluir suas transações.

Para um Rollup de Validade, esta dinâmica é invertida. Verificar um lote de transações na Ethereum tem um certo custo. À medida que o número de transações dentro de um lote aumenta, o custo para verificar o lote cresce a uma taxa exponencialmente mais lenta. Adicionar mais transações a um lote leva a taxas de transação mais baratas, mesmo que o custo da verificação em lote aumente - porque é amortizado entre todas as transações dentro do lote. Os Rollups de Validade querem o maior número possível de transações dentro de um lote — para que a taxa de verificação possa ser compartilhada entre todos os usuários. À medida que o tamanho do lote cresce para infinito, a taxa amortizada por transação converge para zero, i. ., quanto mais transações em um Rollup de Validade mais barato fica para todos.

dYdX, um dApp fornecido por um Rollup, frequentemente vê o tamanho do lote de mais de 12.000 transações. Comparar o consumo de gás das mesmas transações no Mainnet vs. em um Rollup de validade ilustra os ganhos de escalabilidade:

Estabelecendo uma transação dYdX no Ethereum Mainnet:**200.000 gás**

Estabelecendo uma transação de dYdX no StarkEx:**<500 gá**

Outra forma de encarar a questão: os principais custos dos Rollups de Validade aumentam linearmente com o número de usuários dentro do mesmo lote.

#### Por que os Rollups Otimistas não são tão escaláveis quanto se pode pensar

Em teoria, as rolagens otimistas proporcionam quase os mesmos benefícios de escalabilidade que as rolagens de validade. Mas há uma distinção importante: Otimizar Rollups para o caso médio, enquanto a Validade Rollups otimiza para o pior caso. Porque sistemas blockchain operam em condições extremamente adversárias, otimizar para o pior caso é a única maneira de alcançar a segurança.

No pior caso da Otimização da Rollup, as transações de um usuário não serão verificadas por verificadores de fraude. Portanto, para contestar fraudes, o usuário precisa sincronizar um nó completo da Ethereum, um nó completo de L2 e calcular a transação suspeita.

No pior caso do Rollup de Validade um usuário só precisaria sincronizar um nó completo da Ethereum para verificar a prova de validade, poupando a si mesma a carga computacional.

Em oposição ao Rollups de Vedação, o custo Otimista dos Rollups aumenta linearmente com o número de transações em vez do número de usuários, tornando-as mais caras.

### Pedaço Final do Desafio - Acesso Perdido à Fortaleza Rollup

Para garantir a validade das transações, os usuários precisam executar apenas um nó Ethereum. No entanto, usuários e desenvolvedores podem querer visualizar e executar, o estado e a execução do Rollup para vários fins. Um*indexação L2 node*preenche essa necessidade perfeitamente. Não só permite que os usuários vejam as transações na rede, mas é também uma peça de infra-estrutura crítica que é necessária para o funcionamento das infra-estruturas dos ecossistemas. Indexadores como The Graph, Alchemy, Infura; Redes Oracle como Chainlink e exploradores de blocos, todos estes são totalmente suportados por um nó L2 sem permissões.

### Conclusão

Muitas abordagens para lidar com a escalabilidade da blockchain focam falsamente no aumento da*taxa de transferência*. Mas, isso negligencia o impacto da taxa de transferência em nós: os crescentes requisitos de hardware para processar blocos e armazenar o histórico de rede e como isso inibe a descentralização de uma rede.

Com o advento da criptografia à prova de validade, uma blockchain pode atingir**escalabilidade verdadeira**que não sobrecarrega nós com custos cada vez maiores e permite descentralização ampla. Agora são possíveis mais transações com cálculos poderosos e mais complexos para o mesmo hardware, invertendo o dilema do mercado de taxas no processo — quanto mais atividade em uma rolagem de validade, mais barato ele fica!

[SwagtimusPrime.eth](https://twitter.com/SwagtimusP?t=pO0L1vGIhuC-ZgWOusQYtA&s=09)and[Louis Guthmann](https://twitter.com/GuthL)

1 de<https://bitcoin.org/en/bitcoin-core/features/requirements>

2 De<https://ethereum.org/en/developers/docs/nodes-and-clients/>

3 De<https://docs.solana.com/running-validator/validator-reqs>

4 Fortemente simplificados e ajustados para tamanhos médios de blocos dinâmicos