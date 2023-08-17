### TL;DR

* StarkNet agora suporta compostabilidade, o recurso principal que define a fase de Constellações do StarkNet.
* Estamos lançando um framework de testes para a StarkNet — desenvolvedores agora podem testar seus contratos localmente e de forma eficaz.
* Esta versão inclui várias melhorias notáveis de desempenho, como suporte para as tentativas de Merkle-Patricia e um embutido para operações bitsy.
* Frente do ecossistema:

1. **Contratos padronizados**: OpenZeppelin irá desenvolver contratos padronizados para StarkNet, como eles fizeram para a Ethereum!
2. **EVM->Compilador do Cairo**: a equipe de Warp @ Nethermind demonstrou a compilação de código ERC-20 Solidity para contratos StarkNet

### Fundo

StarkNet é uma permissão descentralizada para Validade-Rollup (também conhecida como "ZK-Rollup"). Anunciamos seu[mapa](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)no início do ano. [Alpha](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), atualmente em execução em uma rede pública de testes Ethereum, já suporta a implantação sem permissão de contratos inteligentes implementando qualquer lógica de negócios, com L1<>Mensagens L2 e dados em cadeia. Além disso, ele permite que qualquer usuário envie transações para a rede sem permissão, estilo Ethereum.

Esta versão: StarkNet Alpha 2, inclui o recurso principal que nos permite avançar de Planetas para Constelles: composição entre contratos inteligentes implementados.

### Funcionalidades

StarkNet Alpha 2 introduz os seguintes recursos:

* **Composabilidade:**StarkNet Alpha agora suporta interação entre contratos inteligentes — antes da programação! A beleza desta atualização é que os desenvolvedores podem esperar quase a mesma experiência que o Ethereum; chamadas síncronas e podem ser usadas como chamadas de função. Aguardamos ansiosamente as novas aplicações que se beneficiarão tanto de escala computacional ilimitada quanto da composição do contrato, conforme lançado pela StarkNet. Para entender como usar esse recurso, você pode começar seguindo este[tutorial](https://www.cairo-lang.org/docs/hello_starknet/calling_contracts.html). Gostaríamos muito de ouvir seu feedback e ver o que você está desenvolvendo com a[discord StarkNet](https://discord.gg/uJ9HZTUk2Y).
* **Estrutura de Teste Local:**que você perguntou e nós entregamos — uma[melhor estrutura de testes](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/starknet/testing). Isso permitirá que os desenvolvedores acelere seu desenvolvimento de dApp testando suas implementações de contratos StarkNet e interações localmente — sem nenhuma dependência externa. Essa versão inclui apenas interação L2, próximas versões expandirão a funcionalidade e a facilidade de uso. Verifique o[tutorial aqui](https://www.cairo-lang.org/docs/hello_starknet/unit_tests.html), e nós adoraríamos ouvir seus comentários sobre esse recurso.
* **Melhorias de desempenho:**

**Patricia Trees:**melhoramos o design da StarkNET para suportar maiores recursos e menor tempo de geração de prova, mudando para compromisso do estado da Merkle-Patricia Tree ([documentação](https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/cairo/common/patricia_utils.py)). Esta mudança permite a criação de blocos muito maiores, reduzindo assim o custo por transação. A mudança para um compromisso mais sofisticado com o estado foi ativada pelo Cairo, a língua ZKP — um componente central do sistema operacional StarkNet.

**Operações Bitwise :**nós adicionamos um[builtin](https://www.cairo-lang.org/docs/how_cairo_works/builtins.html)para apoiar operações bitwise muito mais eficientes em contratos StarkNet ([documentação](https://www.cairo-lang.org/docs/reference/common_library.html#common-library-bitwise)).

* **Goerli:**StarkNet está mudando de Ropsten para[Goerli](https://goerli.etherscan.io/address/0xee02F29aE9A4988aE064940bF11954d6eafE26Ac)! Finalmente, libertamos o sistema dos caprichos dos deuses de Ropston. A Alfa 2 irá agora atravessar um ambiente de desenvolvimento mais estável.

### Eco-sistema

O ecossistema StarkNet está crescendo constantemente, e estamos felizes em compartilhar as últimas notícias:

* **Contratos padronizados**: somos honrados em trabalhar com a biblioteca de contratos padrão da OpenZeppelin na StarkNet. O seu trabalho canônico nos contratos padronizados da Ethereum nos serve todos os dias, e estamos confiantes de que eles terão um impacto tão importante aqui.
* **EVM->Compilador do Cairo**: A equipe de Warp do Nether[demonstrou](https://medium.com/nethermind-eth/warp-your-way-to-starknet-ddd6856875e0)transpilação de um contrato ERC-20 de EVM bytecode para um contrato StarkNet e implantação na StarkNet. Este esforço está a avançar rapidamente, e o nosso próximo objectivo é a transpilação de contratos inteligentes arbitrários de Yul ao Cairo.
* **Maker-on-StarkNet**: uma[proposta](https://forum.makerdao.com/t/mip39c2-sp19-adding-the-starknet-engineering-core-unit-sne-001/9745)foi enviada ao Maker DAO para implementar o protocolo Maker sobre StarkNet. A primeira fase propõe uma ponte DAI da Ethereum à StarkNet com a elaboração da DAI na StarkNet a seguir.
* **Serviços de auditoria StarkNet/Cairo**: estamos envolvendo várias empresas de auditoria para fornecer contratos inteligentes e programas de auditoria da StarkNet e do Cairo.

### Mainnet ao redor da esquina

Estamos nos preparando para o lançamento da StarkNet Alpha Mainnet, começando gradualmente com um conjunto de aplicativos na lista de permissões. Vários projectos estão em curso e mais são adicionados de dia para dia. Para se juntar a festa, você foi convidado a entrar em contato via[discord](https://discord.gg/uJ9HZTUk2Y).

**Atualização (Nov. 2021):**StarkNet Alpha está ao vivo na Ethereum Mainnet