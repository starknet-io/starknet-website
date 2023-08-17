### TL;DR

* A primeira versão do Cairo 1.0 está aqui!
* Desenvolvedores podem começar a escrever e testar programas do Cairo 1.0
* A paridade dos recursos com a versão mais antiga do Cairo será alcançada nas próximas semanas
* Suporte a contratos StarkNet será adicionado na próxima versão da StarkNet Alfa

### Fundo

Estamos entusiasmados em anunciar que a primeira versão pública do Cairo 1.0 está agora disponível. Isso marca um marco importante na evolução do Cairo, que foi introduzido pela primeira vez em 2020 como uma linguagem de programação completa para escrever com eficiência programas comprováveis STARK. O Cairo 1.0 é uma linguagem de alto nível semelhante a Rust. Como o Rust, ele destina-se a permitir que os desenvolvedores escrevam código facilmente eficiente e seguro.

Desde a sua criação, o Cairo tem sido usado para construir aplicações Layer-2 que possuem[manipulado](https://dashboard.starkware.co/starkex)mais de $790 bilhões de negociação processado mais de 300 milhões de transações e cunhado mais de 90 milhões de NFTs, tudo realizado fora da cadeia e resolvido no Ethereum com a integridade matemática garantida pelas provas STARK. Cairo tornou-se a quarta linguagem de programação mais usada no ecossistema[da blockchain](https://defillama.com/languages)em geral. Com a libertação do Cairo 1. , procuramos tornar a língua ainda mais acessível e amiga do utilizador, introduzindo simultaneamente novos recursos que melhoram a segurança e a conveniência.

Uma das mudanças mais significativas no Cairo 1.0 é a sintaxe. Nós inspiramos**Rust**para criar uma linguagem mais amigável para o desenvolvedor que é mais fácil de ler e escrever. A nova versão do Cairo permite escrever código mais seguro (fortemente digitado, propriedade e empréstimo, etc.), enquanto também é mais expressivo.

Cairo 1.0 também introduz a Sierra, uma nova representação intermediária que garante**toda**execução do Cairo pode ser provada. Isto torna o Cairo 1.0 particularmente adequado para uso em uma rede sem permissão como StarkNet, onde pode fornecer forte proteção de DoS e resistência à censura. Você pode ler mais sobre o Sierra em nosso[](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)post anterior.

## Primeiro gosto!

### O que vocês podem fazer hoje?

Desenvolvedores podem começar a escrever, compilar e testar programas do Cairo 1.0! Nós encorajamos desenvolvedores a começar a experimentar com o Cairo 1.0 e a se acostumar com a nova sintaxe e recursos.

Desde que a versão 1.0 do Cairo ainda está ativamente desenvolvida, e novos recursos são constantemente adicionados, confira o[repositório do Cairo](https://github.com/starkware-libs/cairo/)para ver as últimas atualizações.

### E agora?

Neste momento, Cairo 1. ainda falta alguns dos recursos suportados na versão mais antiga do Cairo ([veja esta tabela para detalhes](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)). O próximo marco, esperado nas próximas semanas, proporcionará ao Cairo uma paridade de recursos 1,0 com a versão mais antiga. Você pode acompanhar o progresso em direção àquele marco[aqui](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md).

### Suporte Starknet

A escrita de contratos StarkNet no Cairo 1.0 é suportada (embora certos recursos ainda estejam faltando). No entanto, StarkNet ainda não suporta a implantação e execução dos contratos do Cairo 1.0. StarkNet Alpha V0.11.0, planejado nas próximas semanas, introduzirá a capacidade de implantar e executar contratos do Cairo 1.0. A atualização para a v0.11.0 marcará o início do período de transição para um sistema que rode apenas os contratos do Cairo 1.0. Este Período de Transição terminará com a[Regenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4), esperada alguns meses depois.

![](/assets/0_odxbxeacqdwizlfw.jpg)

### Vamos construir!

O objetivo de StarkNet é escalar exponencialmente a Ethereum usando a integridade matemática dos STARKs, e o objetivo do Cairo é tornar esta escala exponencial acessível aos desenvolvedores. Acessibilidade significa uma linguagem de programação que é eficiente, fácil de ler e escrever e segura de usar. Esperamos que a versão do Cairo 1.0 inspire ainda mais desenvolvedores a se juntarem à StarkNet e à Ethereum em escala para atender à demanda global.