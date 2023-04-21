### **TL;DR**

* [Planetas StarkNet Alfa](https://voyager.online/)- o primeiro passo no nosso caminho para o Mainnet - está ativo no Testnet!
* [StarkNet](https://starkware.co/product/starknet/)é um ZK-Rollup1 sem permissão.
* Os desenvolvedores podem implementar sua lógica de negócios de escolha em um contrato inteligente e implantá-lo sem permissão no StarkNet.
* As transições do estado da StarkNet são comprovadas fora da cadeia e depois verificadas na cadeia.
* Muito parecido com o Ethereum, os usuários podem interagir diretamente com esses contratos inteligentes.

### **Introdução**

Nós[anunciamos](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)o roteiro para[StarkNet](https://starkware.co/product/starknet/)em Jan 2021. O Santo Graal das soluções de escalabilidade apoiaria (i) contratos inteligentes arbitrários, com (ii) compostabilidade, (ii) operando sobre uma rede descentralizada. Hoje anunciamos a implantação no teste da Etapa 1: StarkNet Planets Alpha. O sistema Alfa suporta contratos inteligentes arbitrários. A composição será apoiada ainda este ano, com descentralização a seguir.

É muito importante para nós sermos totalmente transparentes e estabelecermos expectativas de forma adequada. O objetivo desta publicação é listar claramente o que já é suportado e quais funcionalidades ainda estão faltando. O que vamos lançar hoje é Trabalho em Progresso na rede de testes. Acreditamos que esta rápida libertação contribuirá para a formação de um ecossistema saudável em torno da StarkNet e dos seus instrumentos. Estamos ansiosos por envolver desenvolvedores na construção da rede conosco e para obter feedback contínuo da comunidade.

### **O que há no Alfa de Planetas Starknet?**

**Funcionalidade:**O Alpha permite que os desenvolvedores escrevam e apliquem contratos StarkNet para computação em geral. Não há lista branca - qualquer desenvolvedor pode escrever e implantar o contrato que quiser. Os usuários podem interagir com esses contratos, enviando transações para eles e inspecionando seu estado. Todos os contratos existem em um único estado2. As atualizações deste estado são comprovadas fora da cadeia e verificadas na cadeia — no Alpha, a verificação é feita na rede de testes.

**StarkNet OS:**A funcionalidade acima é suportada por um novo "sistema operacional" que chamamos de StarkNet OS. Ele oferece*prováveis*transições de estado no StarkNet. Os desenvolvedores Ethereum podem pensar que ele é o equivalente ao EVM: é responsável por invocar as funções do contrato inteligente, lidar com o armazenamento dos contratos, etc. Publicaremos um post separado detalhando a arquitetura do StarkNet OS.

**O que não está no Alpha?**O Alpha ainda está faltando algumas capacidades chave, como a interação L1<>L2, dados on-chain e composição. Mais sobre estas abaixo.

#### **Conseguir seus pés molhados**

Comece com nosso[tutorial e documentação](https://www.cairo-lang.org/docs/hello_starknet/).

Então, você pode ler o[exemplo de contrato inteligente AMM](http://cairo-lang.org/docs/hello_starknet/amm.html)nós escrevemos e implantamos na StarkNet. É um simples AMM, e você pode interagir com ele[aqui](https://starkware-amm-demo.netlify.app/swap). Agora você está pronto para escrever e implantar contratos inteligentes na StarkNet. O explorador de blocos para StarkNet -[Voyager](https://voyager.online/)- permite que qualquer pessoa inspecione o estado de StarkNet.\
Ao ficar com os pés molhados, acreditamos que você estará mais bem preparado para construir na StarkNet, enquanto continuamos a divulgar recursos adicionais. Já estamos ocupados planejando uma primeira hackathon, bem como workshops para desenvolvedores.

### **Próximos passos para StarkNet**

As capacidades chave que ainda faltam na Alfa serão lançadas nas próximas semanas. Estes são:

* L1<>Interação L2, por exemplo, a capacidade de depositar e sacar fundos em L1.
* Dados on-cadeia: publicação de todas as alterações de armazenamento na Ethereum.
* Composibilidade: permitir que os contratos se comuniquem entre si.

Com esses recursos em vigor, estaremos prontos para levar StarkNet para o Ethereum Mainnet. Chamamos esta etapa de evolução da StarkNet, e quando chegamos a ela, você será capaz de criar e implantar sem permissão na Ethereum Mainnet scalable L2 dApps.

#### **O Ecossistema StarkNet**

Estamos muito animados com o ecossistema que está formando em torno da StarkNet, então vamos pausar para agradecer aos nossos colaboradores até agora.

Estamos trabalhando de perto com[Nethermind](https://twitter.com/nethermindeth)e a equipe Nubia,[Alexey Akhunov](https://twitter.com/realLedgerwatch)(Erigon) &[Igor Mandrigin](https://twitter.com/mandrigin)(gateway. m),[Iddo Bentov](https://www.cs.cornell.edu/~iddo/),[dOrg](https://twitter.com/dOrg_tech),[Prof. Tim Roughgarden](https://twitter.com/algo_class),[Prof. Jeremy Avigad](https://www.andrew.cmu.edu/user/avigad/)& Yoav Seginer, por último, mas não menos importante, — a equipe[Paradigma](https://twitter.com/paradigm).\
Nossos primeiros parceiros —[dYdX](https://twitter.com/dydxprotocol),[Imutáveis](https://twitter.com/Immutable), ,[DeversiFi](https://twitter.com/deversifi), assim como[Sortes](https://twitter.com/SorareHQ),[comemorações](https://twitter.com/CelerNetwork)e outros - nos deram uma contribuição inestimável desde o primeiro dia, e nos permite criar uma rede de grau de produção para os usuários reais.\
Nós continuamos impressionados com a qualidade do conteúdo criado pela comunidade por pessoas como[Bobbin Threadbare](https://twitter.com/bobbinth),[Daniel Kroni](https://github.com/danielkroeni/cairo-playground/blob/main/anon-bank/README.md),[Adriano Hamelink](https://twitter.com/adr1anh),[perama](https://twitter.com/eth_worm),[Francesco Ceccon](https://twitter.com/ceccon_me),[Malchev de Ilian](http://twitter.com/imalchev), e a equipe[Alexandria](https://blockchainpartner.fr/).

Estamos ansiosos para ver o que a comunidade criará em todas as frentes: ferramentas para desenvolvedores, conteúdos e, claro, aplicações StarkNet que elas criarão. Vamos manter a conversa entrando em sua mídia favorita de escolha:[discord](https://discord.gg/uJ9HZTUk2Y),[Twitter](https://twitter.com/CairoLang),[e-mail](mailto:info@starkware.co), e em breve usando os formulários de comunicação mais descentralizados: f2f.

1 não somos fãs do termo ZK-Rollup, como — matematicamente falando — não é conhecimento zero, mas todos vocês sabem o que queremos dizer

2 Ao contrário do estado separado mantido para as deploys atuais do StarkEx no Mainnet

**Atualização (Nov. 2021):**StarkNet Alpha está ao vivo na Ethereum Mainnet