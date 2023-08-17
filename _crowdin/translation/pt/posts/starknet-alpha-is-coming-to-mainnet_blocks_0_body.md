### TL;DR

* *StarkNet Alpha é lançado na Mainnet Ethereum até Novembro*
* Agora é a hora de construir na StarkNet

### Uma breve história

Anunciamos a nossa visão para a[StarkNet](https://starkware.co/product/starknet/)no início do ano: trazer uma escalabilidade enorme para Ethereum, preservando a segurança L1, interações sem permissão e descentralização.\
Lançamos**[StarkNet Alpha](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)**em um testnet público em junho. Esta versão suporta totalmente contratos inteligentes de computação geral e sem permissão. Desde a atualizamo-la duas vezes: primeiro para**Alpha 1**— fornecendo[L1<>L2 mensagens e dados on-chain](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), e, então, para**Alfa 2**— suportando[composição](https://medium.com/starkware/starknet-alpha-2-4aa116f0ecfc).

StarkNet Alpha 2 agora suporta contratos inteligentes compostos de computação geral em um estado de Ethereum, com a capacidade de contratos L1 e L2 interagir um com o outro. Leia mais[aqui](https://www.cairo-lang.org/docs/hello_starknet/index.html).

### O que é StarkNet Alpha no Mainnet?

StarkNet Alfa na Mainnet suportará características semelhantes às que estão disponíveis actualmente na rede pública de testes Goerli.

#### **O que esperar**

Uma vez que StarkNet ainda está em desenvolvimento, queremos introduzir capacidades de forma gradual e garantir que as expectativas dos desenvolvedores sejam satisfeitas em cada passo. Dois aspectos particularmente importantes que gostaríamos de salientar são:

* **Implementação de contrato inteligente Permissionada**: Acompanharemos o livro de jogo sensato introduzido pelos nossos colegas Otimistas Rollup (Optimiztic Rollup): Comece com a implantação de contratos*autorizados*. O protocolo que especifica como solicitar a inclusão do seu contrato inteligente nesta lista branca inicial será publicado nas próximas semanas.
* **Nenhuma garantia para a compatibilidade retrógrada**: esperamos que a transição futura de StarkNet Alpha para StarkNet Beta inclua regenesis do estado. A rede começará do bloco 0, e as aplicações terão de refazer os seus contratos. Além disso, desenvolvedores e usuários devem notar que o esperado StarkNet Beta pode não ser compatível com o StarkNet Alpha. . Talvez os desenvolvedores precisem modificar os seus contratos. Obviamente, tentaremos permitir uma transição fácil para as aplicações, com alterações mínimas exigidas.

#### Funcionalidades Adicionais do Perto

Como parte da transição do StarkNet Alpha do testnet para Mainnet, nós vamos:

1. Adicionar construtores aos contratos.
2. Melhore o framework de teste.
3. Para blocos e transações, mova-se de usar um ID para usar um hash.

Planejamos continuar a implantação de novas funcionalidades em uma cadência regular, assim como fazemos na rede de testes pública. No curto prazo, planejamos as seguintes melhorias:

1. Contratos de conta e Contratos de token — abrindo o caminho para aplicativos DeFi interagirem com StarkNet da forma com que estão familiarizados.
2. Melhorada a Funcionalidade do Contrato — apoiando aprimoramento de contrato e eventos.
3. Warp: o compilador Solidity-to-Cairo desenvolvido por Nethermind permitirá uma transição suave de contratos inteligentes Solidity para contratos inteligentes StarkNet.
4. Assinaturas Ethereum: suporte nativo para ECDSA sobre secp256k1 permitirá uma integração mais fácil com carteiras existentes.
5. StarkNet Full Node: um nó completo permitirá que os usuários participem da rede com requisitos de hardware par com os de um nó Ethereum Completo.

#### Mecanismo de taxas

O mecanismo de taxa será ativado assim que os contratos de conta e os contratos de token forem adicionados a StarkNet Alpha.

Todas as transações apresentadas à StarkNet pagarão uma taxa projetada para cobrir custos L1 e off-chain . A taxa será inicialmente cobrada em ETH. O custo de uma única transação diminuirá à medida que StarkNet aumenta sua escala (como é o caso em todos os sistemas STARK's existentes). Ao criar os mecanismos de taxa inicial, preferimos simplificar sobre transações com preços precisos de acordo com os recursos que elas consomem. Espere que este mecanismo seja aperfeiçoado e melhorado ao longo do tempo.

Com a visão de fazer da StarkNet uma rede sustentável e incentivar seus operadores e desenvolvedores, uma parte das receitas coletadas das taxas será distribuída aos desenvolvedores do aplicativo e aos desenvolvedores do core da StarkNet.

#### Segurança

O modelo de segurança do StarkNet Alpha no Mainnet seguirá o modelo atual no testnet:

* Todas as transições de Estado são apoiadas por uma prova STARK, o que garante a sua validade.
* Todos os dados do estado serão publicados na cadeia para que o estado seja totalmente construível a partir de L1.
* Haverá uma única sequência.
* A rede poderá ser atualizada sem demora.

### O Ecossistema StarkNet está crescendo

Abrir a StarkNet para o mundo atraiu uma enorme onda de desenvolvedores interessados em aprender o Cairo e desenvolver com a StarkNet. Eles forneceram um feedback inestimável, e foi um verdadeiro prazer ver discussões vibrantes no Discord do StarkNet[](https://discord.gg/uJ9HZTUk2Y).

Além disso, StarkNet está sendo desenvolvida não apenas pela equipe StarkWare, mas também por algumas das equipes mais fortes do ecossistema blockchain:

* O Nethermind está trabalhando em dois projetos:

1. **[Warp](https://github.com/NethermindEth/warp)**: um compilador Solidity to Cairo

2. **[Voyager](https://voyager.online/)**: um explorador de bloco StarkNet

* O Open Zeppelin está trabalhando em uma implementação</a>de

Contratos padrão para o StarkNet e também começou a trabalhar no ambiente de um desenvolvedor:[Nile](https://github.com/martriay/nile).</li> 
  
  * ShardLabs está trabalhando em um[StarkNet HardHat plugin](https://github.com/Shard-Labs/starknet-hardhat-plugin)e em um melhor framework de teste.
* A equipe da Erigon está trabalhando em expandir o seu nó Ethereum Full para apoiar StarkNet (codenome: Fermion). Estão a trabalhar connosco na concepção dos mecanismos fundamentais da StarkNet.
* Equilibrio está trabalhando em uma implementação StarkNet Full Node no Rust,
* Serviços de auditoria do Cairo: nos próximos meses, ABDK, ConsenSys Diligence, Peckshield e Rastro de Bits serão conduzidas auditorias do Cairo.
* Auditorias Starknet: começamos com a auditoria das fundações da rede:</ul> 

1. **Peritos em Criptomoedas**realizarão uma auditoria ao Verificador de Solidity do Cairo.
2. Uma prova formal de**LEAN**das especificações do Cairo foi recentemente concluída e publicada como um[papel](https://arxiv.org/abs/2109.14534)e um[repositório](https://github.com/starkware-libs/formal-proofs) do GitHub.

Espere que sejam publicadas muitas outras colaborações interessantes nos próximos meses!



### STARKs estão escalonando hoje

Aproximamo-nos do lançamento do StarkNet Alpha com confiança, como StarkEx, nosso escalonamento autônomo do SaaS, demonstrou como o STARKs pode escalar massivamente aplicativos de Ethereum. Lançamos StarkEx para[dYdX](https://dydx.exchange/)(contratos perpétuos),[DeversiFi](https://www.deversifi.com/)(trading e pagamentos spot), bem como para[Imutáveis](https://www.immutable.com/)e[Sorare](https://sorare.com/)(NFT mining and trading). Vimos seus custos de gás/tx reduzidos em 100X–200X, para cerca de 650 gás/tx em Validium (dados off-chain) e 1100 g/tx para um ZK-Rollup.

Até a data, StarkEx estabeleceu $80B em negociações e mais de 27M transações, eclipsando qualquer outra solução L2 — e todos eles combinados.



### Agir agora

Nunca houve um momento melhor para participar do crescente ecossistema do StarkNet, criando seu próximo dApp ou ferramentas úteis para desenvolvedores.

Convidamos você para:

1. Junte-se ao[Discord StarkNet](https://discord.gg/uJ9HZTUk2Y), onde você pode se encontrar e envolver a comunidade StarkNet.
2. [Comece a aprender](https://www.cairo-lang.org/docs/hello_starknet/index.html)como escrever contratos inteligentes da StarkNet.
3. [Mande-nos uma mensagem](https://twitter.com/StarkWareLtd)— nossa equipe está ansiosa para ajudar suas idéias e iniciativas a viver.

**Atualização (Nov. 2021):**StarkNet Alpha está ao vivo na Ethereum Mainnet