### TL;DR

* Um novo sequenciador StarkNet está sendo desenvolvido
* É de código aberto sob a licença Apache 2.0
* É o primeiro objetivo é aumentar a transferência do StarkNet's

### Um novo e brilhante sequenciador

Estamos felizes em anunciar uma nova Sequência StarkNet em trabalho. Enquanto a tecnologia StarkNet's se move para o código aberto, seguindo o[Cairo 1.](https://medium.com/starkware/open-sourcing-cairo-1-0-b3100a664bb0)e[Nó Completo de Papyrus](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202), agora continuamos com o novo sequenciador de StarkNet. Será de código aberto, disponível sob a licença Apache 2.0, e você pode conferir[o repositório](https://github.com/starkware-libs/blockifier)agora!

Construindo uma nova Sequenciador faz parte do[Roteiro StarkNet](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de)que apresentamos há alguns meses atrás. A implementação do novo sequenciador começará com a substituição do**Blockifier**, o módulo dentro do sequenciador que executa a execução do bloco de execução. Conforme explicado no roadmap, espera-se que ele traga benefícios para o desempenho da StarkNet.

A nossa abordagem da construção deste sequenciador é a mesma que nos guiou em StarkNet Alpha. O sequenciador**será implementado nos estágios**, e estamos compartilhando hoje seu primeiro módulo. Ao longo do tempo, novos componentes do sequenciador serão concluídos, até que eventualmente um sequenciador baseado em Ruster substituirá completamente o sequenciador baseado em Python.

### O que faz o sequenciador?

Na StarkNet, depois que os usuários enviam transações, a primeira parada na jornada da transação para a escala STARK são os sequenciadores. No protocolo StarkNet, os sequenciadores são responsáveis por ordenar as transações e produzir blocos. Depois que o bloco é criado por um sequenciador e aprovado pelo protocolo de consenso, os provers tomam o controle e geram uma prova para L1.

![](/assets/1_ndrekwqunjixo_wskdeycw-1.png)

### Fontes Abertas

StarkNet Alpha lançado no Mainnet em Novembro de 2021. Desde o início, ele estava comprometido em compartilhar o poder da escala STARK com o mundo.

Hoje, estamos lançando o primeiro em uma linha de módulos do novo sequenciador de código aberto. Levará vários meses para que todos os módulos e submódulos sejam implementados. Abrir tudo permitirá que os membros da comunidade contribuam para o desenvolvimento e auditarem a base de código.

Isto aproximará a StarkNet mais perto de um ponto de sequência descentralizada sem permissão. Agora estamos projetando o protocolo descentralizado da StarkNetk, e estamos incentivando a comunidade a participar da pesquisa[e da discussão](https://community.starknet.io/t/starknet-decentralized-protocol-consensus/5386).

### Desempenho

O sequenciador original da StarkNet é em grande parte uma adaptação da infraestrutura da StarkEx. Agora, há necessidade de infra-estruturas que são construídas especialmente para os requisitos de uma rede descentralizada de alto desempenho.

Construído no Rust, o novo sequenciador é projetado e desenvolvido tendo em mente o desempenho. O novo sequenciador também se constrói sobre fundações sólidas: Papyrus, o novo[nó completo do StarkNet,](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202)lidará com o gerenciamento de estados e caos-rs, a nova Cairo-VM de LambdaClass, acelerará a execução do Cairo. Esperamos que o novo sequenciador melhore o sequenciador existente em todos os aspectos. Espera-se que a transferência e a latência da rede melhorem dramaticamente com a integração deste sequenciador na StarkNet.

Esperamos também que outras infra-estruturas e outras ferramentas de desenvolvimento sejam capazes de utilizar o novo sequenciador para melhorar a experiência de desenvolvimento. Espera-se que o desempenho do nó completo melhore assim como todos os quadros de teste.

### Summary

Estamos animados em anunciar hoje o novo sequenciador de código aberto. Seu primeiro módulo já está disponível para a comunidade revisar, e será seguido com mais módulos nos próximos meses Também estamos felizes em dar mais um passo no nosso roteiro para melhorar o desempenho da StarkNet. O nosso objectivo é tornar a rede mais eficiente e acessível, e apreciamos o apoio de todos os que se juntaram a nós nesta viagem.