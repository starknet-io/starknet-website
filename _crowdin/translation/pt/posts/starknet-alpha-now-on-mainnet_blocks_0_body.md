### TL;DR

* Alfa está ao vivo no Mainnet
* Ele suporta computação e composição geral
* Comunidade de crescimento rápido, desenvolvendo ferramentas e aplicativos
* Recursos adicionais a serem lançados de forma contínua nas próximas semanas
* Disclaimer: esta é uma versão Alfa (leia a impressão fina abaixo)

### Introdução

StarkNet Alpha está sendo lançado hoje no Ethereum Mainnet!

StarkNet é um Rollup descentralizado sem permissão operando como uma rede L2 sobre Ethereum. StarkNet permite que qualquer dApp alcance uma escala ilimitada para o seu computador, sem comprometer a composição e a segurança da Ethereum, graças à sua dependência do sistema de prova de criptografia mais seguro e mais escalável —[STARK](https://starkware.co/stark/). O StarkNet é construído na linguagem de programação[Cairo](https://starkware.co/cairo/), o primeiro verificador von-Neumann completo de Turing em nível de produção no Ethereum. Tanto o Cairo como o STARK foram desenvolvidos internamente pela StarkWare e forneceram todas as nossas aplicações de grau produtivo, que estabeleceram mais de 50M de txs e $250B desde o verão de 2020.

Entre outros recursos, StarkNet Alpha permite a computação geral de contratos inteligentes que suportam compostabilidade, tanto com outros contratos StarkNet quanto via L1<>L2 mensagens com contratos L1. StarkNet Alpha opera em modo Rollup, o que significa que todos os dados de diff de estado são enviados na cadeia.

Em janeiro, compartilhamos o roteiro[StarkNet](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880). Em Junho, StarkNet Alpha entrou em funcionamento numa rede de testes pública e foi atualizada com novos recursos numa base contínua. Estamos encantados por estar à frente do calendário, graças, em parte, à nossa confiança na pilha de software STARK/Cairo endurecida em termos de produção.

### Como você deve comer StarkNet Alpha?

Primeiro, com o maior cuidado, já que o rótulo "Alfa" existe por uma razão. Espere mudanças, correções e melhorias por vir. StarkNet Alpha ainda não foi auditado, e podemos adiar uma auditoria assim até que a rede madure mais um pouco (leia o aviso no final desta postagem para mais informações).

De um modo geral, seguimos o caminho cauteloso e sensato definido pelos nossos colegas Otimistas Rollup, nomeadamente, Arbitrum e Otimidade: lance a rede com um único sequenciador e a lista branca para garantir que os seus desenvolvedores entendam os riscos envolvidos. Nós continuamos totalmente empenhados em uma completa descentralização do StarkNet.

E como lidar com a economia da StarkNet Alfa? O Alfa começará sem tarifas de transação. A próxima atualização, a poucas semanas de distância, introduzirá um mecanismo de taxa — compartilharemos mais detalhes em um post separado.

### Comece a construir

Convidamos você a começar a escrever seus próprios aplicativos sobre o StarkNet marcando o (novo!) [site](http://starknet.io/), ou pulando diretamente para o[tutorial](https://starknet.io/docs/).

Se você estiver pronto para implantar, siga este[processo de integração](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu); criado para garantir que todos os desenvolvedores estejam bem cientes do estado preliminar do sistema.

### Eco-sistema

Nos últimos meses, assistimos a um crescimento espantoso da dimensão e da actividade da comunidade StarkNet, que se reúne no[Discord StarkNnet](https://discord.gg/uJ9HZTUk2Y). Dezenas de desenvolvedores - equipes e indivíduos - em todo o ecossistema blockchain estão contribuindo para esse esforço. (Veja o aviso ao final desta publicação)

#### Ferramentas do Desenvolvedor

* OpenZeppelin está definindo os contratos padrão. Seu[repositório](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)e[discussões](https://github.com/OpenZeppelin/cairo-contracts/discussions)valem a pena seguir
* O[Warp](https://github.com/NethermindEth/warp)Solidity->transpilador do Cairo, desenvolvido por Nethermind
* [HardHat plugin](https://github.com/Shard-Labs/starknet-hardhat-plugin)e[StarkNet Devnet](https://github.com/Shard-Labs/starknet-devnet) do Shard Labs
* O argumento está desenvolvendo ferramentas, incluindo seu esforço conjunto no StarkNet.js, ao lado do[Sean Han](https://twitter.com/seanjameshan), seu criador

#### Infraestrutura

**Explorador de blocos**:

* [O projeto Voyager](http://voyager.online/)por Nethermind
* [Eth.tx](https://ethtx.info/)oferecerá análise de suporte e uma visão detalhada de transações StarkNet

**Nós completos**: dois esforços em curso: um é o projeto Fermion liderado por Erigon, o outro é o projeto[Pathfinder,](https://github.com/eqlabs/pathfinder)liderado por Equilibrium

**Carteiras**:

* [ArgentX](https://github.com/argentlabs/argent-x)é uma extensão de navegador desenvolvida pelo Argent, já disponível para devs
* A solução de gerenciamento da chave Torus está pronta para StarkNet
* Ledger está desenvolvendo um aplicativo nativo StarkNet, a ser disponibilizado antes do final do ano

**Auditorias do Cairo**: ConsenSys Diligence, Rastro de Bits, PeckShield e ABDK já estão realizando auditorias do Cairo ou prestes a começar em breve

**Serviços de API**: depois que um nó completo StarkNet for disponibilizado, os serviços de API serão oferecidos por Figment, Chainstack e Infura

**Indexador**: vamos trabalhar na integração do TheGraph para trabalhar com o StarkNet, junto com a equipe de Figuras

### O Caminho à Frente

Nas próximas semanas e meses, iremos atualizar o Alfa com as seguintes possibilidades:

* Mecanismo de melhoria contratual
* Mecanismo de taxas
* Eventos
* Adição de syscalls ausentes (get_block_number, get_block_timestamp, e mais)
* Versão Esquelética da Volição
* E muito mais …

Para monitorar esse esforço de forma contínua, consulte o[roteiro provisório dos recursos](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51).

Olhando mais longe, nós continuamos a investir fortemente em pesquisas ativas em várias frentes (venha se juntar ao esforço</a>de

Shamans):</p> 

* Descentralização
* Escalar
* Disponibilidade de dados
* Incentividade sem permissão



### Chamar à Ação

* Comece a escrever contratos na rede de teste StarkNet sem permissão no Goerli
* Junte-se ao[Discord do StarkNet](https://discord.gg/uJ9HZTUk2Y)
* Junte-se às chamadas da comunidade
* Participe da primeira[Cimeira do ecossistema StarkNet](https://www.eventbrite.com/e/starknet-ecosystem-summit-2022-tickets-206671880157)(Jan 27–28 2022, Stanford CA)
* Junte-se ao[StarkNet Shamans](https://community.starknet.io/)para aprofundar os desafios de pesquisa



### Renúncia

***StarkNet Alpha é um sistema novo e complexo que não foi totalmente auditado. Como todos os sistemas de software complexos, o sistema StarkNet pode conter erros que, em casos extremos, podem levar à perda de todos os seus fundos. Então,***tenha cuidado e cuidado!******

*O ecossistema StarkNet é um vasto e em rápido crescimento de equipas e indivíduos independentes, sobre os quais StarkWare não tem qualquer controlo e não assume qualquer responsabilidade. Qualquer um dos projetos desenvolvidos por membros do ecossistema pode conter erros que, em casos extremos, podem levar à perda de todos os seus fundos. Além disso, à medida que mais contratos inteligentes são usados, o potencial de bugs nocivos involuntários e até mesmo fraudes maliciosas e puxões de tapete aumenta. Portanto, trate todos os contratos inteligentes na StarkNet enquanto trata contratos inteligentes na Ethereum, e utilize apenas aqueles que você tem boas razões para confiar como seguros.*