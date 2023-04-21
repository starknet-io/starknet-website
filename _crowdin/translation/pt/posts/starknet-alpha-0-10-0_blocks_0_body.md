### TL;DR

* Melhorias de Abstração da Conta no espírito da EIP-4337

1. Validar — Executar separação
2. A unicidade da transação está agora assegurada no protocolo (Nonce)

* O mecanismo de taxas é estendido para incluir:

1. L1→L2 Mensagens
2. Declarar transações

* Algumas alterações de sintaxe do Cairo

### Introdução

Estamos animados para apresentar StarkNet Alpha 0.10.0. Esta versão é mais um passo para escalar o Ethereum sem comprometer a segurança e a descentralização.

Esse post descreve brevemente os principais recursos desta versão. Para a lista completa de alterações, verifique as[notas de lançamento](https://github.com/starkware-libs/cairo-lang/releases). Para obter informações mais detalhadas, verifique a[documentação](https://docs.starknet.io/).

### Alterações de Abstração

Avançamos com a[abstração da conta StarkNet](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781). Esta versão introduz mudanças inspiradas em[EIP-4337](https://eips.ethereum.org/EIPS/eip-4337).

#### Validar/Executar Separação

Até agora, a função \_\_execute\_\_ da conta era responsável tanto pela validação da transação quanto pela execução. Em 0.10.0, quebramos este acoplamento e introduzimos uma função separada \_\_validate\_\_ em contas. Após receber uma transação, o contrato de conta chamará primeiro \_\_validate\_\_, e então, se for bem sucedido, prosseguir para \_\_execute\_.

A separação valida/executada fornece uma distinção de nível de protocolo entre transações inválidas e revertidas (ainda assim válidas). Graças a isso, sequenciadores poderão cobrar taxas pela execução de uma transação válida, independentemente de ter sido revertida ou não.

#### Nonce

Na versão 0.10.0 um campo nonce é adicionado para impor a unicidade da transação no nível do protocolo. Até agora as não eram tratadas no nível do contrato da conta, o que significava que uma transação com o mesmo hash poderia ser executada duas vezes teoricamente.

Da mesma forma que o Ethereum, todo contrato agora inclui um nonce, que conta o número de transações executadas dessa conta. Os contratos da conta só aceitarão transações com uma pessoa que não corresponda, ou seja, se o nonce atual da conta é X, então só vai aceitar transações com nonce X.

#### Nova Versão de Transação

Para permitir a compatibilidade com backward-compatibilidade, apresentaremos essas duas alterações através de uma nova versão de transação —[v1](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C). Essas alterações só se aplicarão à nova versão, e contas mais antigas ainda poderão executar transações da versão 0.

Nota — a transação v0 foi descontinuada e será removida no StarkNet Alpha v0.11.0. Por favor, certifique-se de atualizar para usar a nova versão de transação.

Para informações mais detalhadas sobre a versão da transação, leia a[documentação](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C).

#### Mecanismo de taxas

A nova versão permite incluir taxas para dois componentes obrigatórios:

* [L1→Mensagem L2](https://docs.starknet.io/docs/L1-L2%20Communication/messaging-mechanism#l1--l2-message-fees)
* [Declarar transação](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)

Essas taxas não serão obrigatórias nesta versão e só serão aplicadas iniciando StarkNet Alpha v0.11.0.

#### Mudanças de Sintaxe do Cairo

Em favor de um progresso gradual para uma atualização do Cairo,[Cairo 1.0](https://www.youtube.com/watch?v=Ny4Rv6ztINU), esta versão inclui várias alterações de sintaxe.

Para minimizar o inconveniente, a versão lançada incluirá um[script de migração](https://www.youtube.com/watch?v=kXs59zaQrsc)que automaticamente aplica as alterações acima. Você pode encontrar mais detalhes[aqui](https://github.com/starkware-libs/cairo-lang/releases).

### E agora?

* Em algumas semanas, planejamos introduzir a paralelização no sequenciador, permitindo uma produção mais rápida de blocos (V0.10.1)
* Em breve completaremos a última parte que deve ser incluída no pagamento de taxas — Conta de implantação
* Lançamento do Cairo 1.0! Mais informações sobre isso em um próximo post.

### Como posso ser mais envolvido?

* Vá para[starknet.io](https://starknet.io/)para todas as informações do StarkNet, documentação, tutoriais e atualizações.
* Participe do[Discord StarkNet](http://starknet.io/discord)para suporte a desenvolvedores, anúncios de ecossistema, e se torne parte da comunidade.
* Visite o[Fórum StarkNet](http://community.starknet.io/)para se manter atualizado e participar de discussões de pesquisa do StarkNet.

Estamos sempre felizes em receber feedback sobre a nossa[documentação](https://docs.starknet.io/)!