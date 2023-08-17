### TL;DR

* Prova recursiva está ao vivo no Mainnet, dimensionando aplicativos StarkEx bem como StarkNet com uma única prova
* Aumenta a escala e oferece benefício de custo e latência (uma ocorrência rara e emocionante de escala e latência se movendo em paralelo, e não sendo um tradoff)
* Ele define o palco para L3 e outros benefíciosGo leia o post do blog na[Prova Recursiva](https://medium.com/@starkware/recursive-starks-78f8dd401025). São coisas legais 😉

### Ampliando o nível!

Provas recursivas — alimentadas pelo cálculo geral do Caio — estão agora em produção. Isso marca um grande impulso para o poder de escalar L2 com STARKs. Ele rapidamente produzirá um aumento múltiplo do número de transações que podem ser escritas no Ethereum através de uma única prova.

Até agora, o dimensionamento STARK funcionou “aumentando” dezenas ou até mesmo centenas de milhares de transações em uma única prova, que foi escrito na Ethereum. Com recursão, muitas dessas provas podem ser “enroladas” em uma única prova.

Esse método está agora em produção para uma infinidade de aplicativos baseados no Cairo: aplicativos rodando no StarkEx, mecanismo de escala SaaS da StarkWare, e StarkNet, o rollup sem permissão.

### A história até agora

Desde a primeira prova no Mainnet, em Março de 2020, os seguintes desenvolvimentos moldaram a forma como o STARKs é utilizado.

### Dimensionamento baseado em STARK's

Em junho de 2020, a primeira solução de dimensionamento baseada em STARK —[StarkEx](https://youtu.be/P-qoPVoneQA)— foi implantada no Ethereum Mainnet. StarkEx possui um Prover que executa grandes computações fora da cadeia e produz uma prova de ARK para sua correção, e um verificador que verifica esta prova na cadeia. As restrições para esta primeira implantação foram "escritas" por engenheiros da StarkWare, limitando assim grandemente a velocidade de recurso para StarkEx. Concluímos que é necessária uma linguagem de programação para apoiar a prova de computação geral — Cairo.

#### Cairo

No verão de 2020, o Cairo fez sua primeira aparência[na Ethereum Mainnet](https://medium.com/starkware/hello-cairo-3cb43b13b209). Cairo significa Representação Intermediária de CPU Algebraic (AIR), e inclui um único AIR que verifica a instrução desta "CPU". Abriu a porta para provas de codificação para uma lógica de negócios mais complexa para declarações computacionais arbitrárias, e para o fazer de uma forma mais rápida e mais segura. Um programa do Cairo pode provar a execução da lógica de uma aplicação única. Mas um programa do Cairo também pode ser uma concatenação de várias aplicações tais — SHARP.

#### COMPRAR

SHARP — um Prover de COMPARTILHamento — leva transações de vários aplicativos separados e prova-as de todos em uma única prova STARK. Os aplicativos combinam seus lotes de transações, preenchendo mais rapidamente a capacidade de um prova STARK. As transações são processadas a uma melhor taxa e latência. A próxima Fronteira: Provas Recursivas, mas não apenas para alguma lógica codificada, mas ao invés disso para**computação geral**.

Para compreender plenamente o benefício da Prova Recursiva, vale a pena compreender um pouco mais como (não recorrente) a prova foi executada pelo SHARP até agora. Desenhando 1 retrata um fluxo típico não-recursivo:

![Desenho 1: Um fluxo típico de provações não-recursivas](/assets/recursive_starks_01.png "Desenho 1: Um fluxo típico de provações não-recursivas")

Aqui, as declarações chegam com o tempo. Quando um determinado limite de capacidade (ou tempo) é atingido, uma grande declaração combinada (a.k.a Train) é gerada. Esta declaração conjunta só é comprovada uma vez que todas as declarações individuais foram recebidas. Esta prova demora muito tempo para provar (aproximadamente a soma de tempo necessária para provar cada afirmação individualmente).

Prova de declarações extremamente grandes é eventualmente limitada por recursos de computação disponíveis como memória. Antes da recorrência, isto era, na verdade, a barreira de escalabilidade limitadora da prova STARK.

### O que é a Prova Recursiva?

Com as provas STARK, o tempo que leva para provar que uma afirmação é aproximadamente linear com o tempo que leva para executar a afirmação. Além disso, se a aprovação de uma declaração leva o tempo T, então a verificação da prova demora aproximadamente tempo de log(T), o que normalmente é chamado de "compressão logarítmica". Por outras palavras, com o STARKs, gastamos muito menos tempo a verificar o extrato do que a calculá-lo.

[Cairo](https://starkware.co/cairo/)permite expressar declarações computacionais gerais que podem ser comprovadas pelas provas STARK e verificadas pelos verificadores STARK correspondentes.

É aqui que a oportunidade de executar[recursão](https://en.wikipedia.org/wiki/Recursion)kicka: Da mesma forma que escrevemos um programa do Cairo que prova a exatidão de milhares de transações, também podemos escrever um programa do Cairo que verifique várias provas do STARK. Podemos gerar uma única prova que atesta a validade de múltiplas provas de "up-stream". Isto é aquilo a que chamamos “Prova Recursiva”.

Por causa da compressão logarítmica e do tempo de prova linear grosseiramente, provar uma verificação de uma prova STARK leva relativamente pouco tempo (esperado até alguns minutos no futuro próximo).

Ao implementar a Recursion, SHARP pode provar declarações sobre a sua chegada. Suas provas podem ser mescladas várias vezes em provas recursivas em vários padrões sem fixar, em determinado ponto, a prova resultante é submetida a um contrato de verificador em cadeia. Um padrão típico é retratado em Desenho 2:

![Desenho 2: Um fluxo típico de provação recursivo.](/assets/recursive_starks_02.png "Desenho 2: Um fluxo típico de provação recursivo.")

### Benefícios Imediatos da Proliferação Recursiva

#### Custo On-chain reduzido

Ao descer o morcego, nós conseguimos "compressão" de várias provas em uma, o que implica o custo de verificação inferior em cadeia por transação (onde cada instrução pode incluir muitas transações).

Com recursão, a barreira de recursos computacionais (por exemplo, memória) que o tamanho de provas limitadas até agora é eliminado, uma vez que cada afirmação de tamanho limitado pode ser provada separadamente. Portanto, ao usar a recursão, o tamanho do trem efetivo da recursão é quase ilimitado, e o custo por transação pode ser reduzido por ordens de magnitude.

Em termos práticos, a redução depende da latência aceitável (e da taxa de chegada das transações). Além disso, uma vez que cada prova é tipicamente acompanhada por algumas saídas, como dados em cadeia, existem limites à quantidade de dados que podem ser escritos na cadeia juntamente com uma única prova. No entanto, reduzir os custos numa ordem de grandeza e ainda melhor é trivialmente possível.

#### Latência Reduzida

O padrão de demonstração recursiva reduz a latência de provar grandes trens de instruções. Este é o resultado de dois factores:

1. Instruções de entrada podem ser comprovadas**em**paralelo (ao contrário de provar uma instrução combinada extremamente grande).
2. Não há necessidade de esperar até que a última declaração do comboio chegue ao fim. Em vez disso, as provas podem ser combinadas com novas declarações à medida que chegam. Isso significa que a latência da última declaração juntando a um Treinamento, é mais ou menos o tempo que leva para provar que a última declaração mais o tempo que leva para provar uma declaração Recursive Verifier (que atesta todas as declarações que já "integraram" este Treino em particular).

Estamos a desenvolver e a otimizar activamente a latência de provar a declaração verificadora Recursiva. Esperamos que isto atinja a ordem dos poucos minutos dentro de alguns meses. Por conseguinte, um SHARP altamente eficiente pode oferecer latências de algumas minutos até algumas horas, dependendo do tradeoff versus custo on-chain por transação. Isto representa uma melhoria significativa da latência do SHARP.

#### Facilitando L3

O desenvolvimento da declaração verificadora recursiva no Cairo também abre a possibilidade de apresentar provas para StarkNet, já que essa instrução pode ser cozida num contrato inteligente da StarkNet. Isso permite a construção de[implantações L3 em cima da StarkNet pública](https://medium.com/starkware/fractal-scaling-from-l2-to-l3-7fe238ecfb4f)(uma rede L2).

O padrão recursivo também se aplica à agregação de provas de L3, a ser verificada por uma única prova de L2. Por conseguinte, também aí se consegue a hiperescalonação.

### Mais benefícios sutis

#### Recursão Aplicativa

A recorrência abre ainda mais oportunidades para plataformas e aplicações que desejam expandir ainda mais o seu custo e desempenho.

Cada prova STARK atesta a validade de uma instrução aplicada a alguma entrada conhecida como "entrada pública" (ou "saída do programa" em termos do Cairo). Conceitualmente, a recursão STARK compõe duas provas com*duas*entradas em*uma*prova de </em> com duas entradas. Por outras palavras, embora o número de provas seja reduzido, o número de entradas é mantido constante. Esses inputs são normalmente usados por um aplicativo para atualizar algum estado no L1 (e. . para atualizar uma raiz de estado ou realizar uma retirada em cadeia).

Se a declaração recursiva tiver permissão para ser*do aplicativo*, ou seja, reconhece a semântica do próprio aplicativo ambos podem comprimir duas provas em um*bem como*combinar as duas entradas em um. A declaração resultante atesta a validade da combinação de entrada baseada na semântica da aplicação, Daí o nome de Recursão Aplicativa (veja Desenho 3, para um exemplo)..

![Desenhando 3: Exemplo de recursão aplicável](/assets/recursive_starks_03.png "Desenhando 3: Exemplo de recursão aplicável")

Aqui, a Declaração 1 atesta uma atualização do estado de A para B e a Declaração 2 atesta uma nova atualização de B para C. As revisões da Declaração 1 e da Declaração 2 podem ser combinadas em uma terceira declaração, atestando a atualização directa de A a C. Aplicando uma lógica semelhante recursivamente, podemos reduzir o custo das atualizações de estado de forma muito significativa até o requisito de latência de finalidade.

Outro exemplo importante de recursão obrigatória é a compressão de dados de múltiplas provas. Por exemplo, para um Rollup de Validade como StarkNet, cada atualização de armazenamento no L2 também é incluída como dados de transmissão no L1, para garantir a disponibilidade de dados. No entanto, não há necessidade de enviar várias atualizações para o mesmo elemento de armazenamento, como apenas o valor final das transações atestadas pelo comprovante verificado é necessário para a disponibilidade de dados. Essa otimização já é realizada dentro de um bloco*único*StarkNet. No entanto, ao gerar uma prova por bloco, a Recursão Aplicativa pode compactar estes dados através de*múltiplos blocos de*L2. Isso pode resultar em redução significativa de custos, permitindo intervalos de blocos mais curtos em L2, sem sacrificar a escalabilidade das atualizações L1.

Valor da nota: Recursão aplicável pode ser combinada com a recursão agnóstica do aplicativo, conforme descrito anteriormente. Essas duas otimizações são independentes.

#### Reduzida Complexidade Verificadora On-chain

A complexidade do verificador STARK depende do tipo de declarações que se pretende verificar. Em particular, no que se refere às declarações do Cairo, a complexidade do verificador depende dos elementos específicos permitidos na língua do Cairo. e, mais especificamente, os built-ins suportados (se nós utilizarmos a metáfora da CPU para Cairo, então construídos são equivalentes a micro-circuitos em uma CPU: computação executada com tanta frequência que eles requerem seu próprio cálculo otimizado).

A língua do Cairo continua a evoluir e a oferecer mais e mais e mais úteis incorporados. Por outro lado, o Verificador Recursivo requer apenas o uso de um pequeno subconjunto destes embutidos. Portanto, um SHARP recursivo pode apoiar qualquer declaração no Cairo, apoiando a linguagem completa nos verificadores recursivos. Especificamente, o verificador de L1 Solidity precisa apenas verificar provas recursivas, e, portanto, pode estar limitado a um subconjunto mais estável da língua do Cairo: o Verificador L1 não precisa acompanhar as melhores e mais recentes construídas. Em outras palavras, a verificação de declarações complexas em constante evolução é relegada para L2, deixando o Verificador L1 a verificar instruções mais simples e mais estáveis.

#### Rastro de Computação Reduzido

Antes de recursão, a capacidade de agregar várias declarações em uma prova era limitada pelo tamanho máximo da afirmação que poderia ser provada nas instâncias disponíveis de computação (e o tempo que poderia levar para gerar tais provas).

Em caso de recorrência, já não há necessidade de provar afirmações tão grandes. Como resultado, menor, instâncias de computação menos caras e mais disponíveis podem ser usadas (embora mais destes possam ser necessários do que com grandes proversões monolíticas). Isso permite a implantação de instâncias de prover em ambientes mais físicos e virtuais do que o anteriormente possível.

### Summary

Provas recursivas de computação geral agora servem vários sistemas de produção, incluindo StarkNet, na Mainnet Ethereum.

Os benefícios da recorrência serão gradualmente concretizados, uma vez que continua a permitir novas melhorias. e em breve você produzirá hiper-escala, reduzirá as taxas de gás e melhorará a latência, desbloqueando o potencial da paralelização.

Irá trazer-lhe benefícios significativos em termos de custos e de latência, juntamente com novas oportunidades, como os L3 e a recursão de aplicativos. Uma maior otimização do Recursive Verifier está em curso, esperando-se que seja proporcionado um desempenho e benefícios de custo ainda melhores ao longo do tempo.



**Gidi Kaempfer**, Cabeça de Engenharia Principal, StarkWare