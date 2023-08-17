### TL;DR

* StarkNet Alpha 0.7.0 lançado para Goerli; cheio de melhorias
* Os contratos agora podem ser atualizados usando o padrão de atualização do Proxy
* Contratos agora podem emitir Eventos
* Suporte para o número de bloco e chamadas do sistema de bloco de tempo há muito esperado

### Introdução

Estamos felizes em lançar a Alfa 0.7.0, uma versão empacotada com novas funcionalidades e melhorias. Um dos melhores estimulantes da StarkNet nos últimos meses foi o maior envolvimento da comunidade na definição do futuro da StarkNet. Esta versão aborda algumas das necessidades de queima da comunidade.

#### Mudanças na Convenção de Nomeação

O leitor observador pode ter percebido que a versão anterior do StarkNet Alfa foi nomeada como Alfa 4, enquanto agora estamos lançando a Alfa 0.7.0. Decidimos omitir o número da versão dedicada da Alfa e, em vez disso, depender apenas da versão associada cairo-lang.

### Novos recursos

#### Melhoria de Contrato

O[padrão de atualização de proxy da OpenZeppelin](https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies)agora é totalmente suportado para atualizações de contratos no StarkNet. O padrão Proxy é o método comum para permitir atualizações de contratos sobre a Ethereum. Alfa 0.7.0 habilita esse padrão sobre StarkNet.

Fizemos um breve[tutorial](https://starknet.io/docs/hello_starknet/default_entrypoint.html)para demonstrar uma implementação básica do padrão, e o OpenZeppelin já está trabalhando pesado implementando um contrato padrão para o padrão do proxy; veja o protótipo[](https://github.com/OpenZeppelin/cairo-contracts/pull/129).

#### Número do Bloco e Tempo do Bloco

A Alfa 0.7.0 adiciona duas novas chamadas de sistema que muitos desenvolvedores estão solicitando. Essas chamadas permitem que um contrato acesse o número do bloco e o horário do bloco. O número do bloco retorna o número do bloco executado atual. O timestamp do bloco retorna o timestamp dado pelo Sequenciador na criação do bloco.

Você pode ver um exemplo de como usar esses recursos no[tutorial](https://starknet.io/docs/hello_starknet/more_features.html#block-number-and-timestamp).

#### Eventos

Surpresa! Um objeto que foi planejado para uma versão futura entrou nessa anterior.

Os contratos StarkNet suportam agora a definição e a emissão de eventos, permitindo-lhes expor informações de execução para aplicativos off-chain consumirem. Os desenvolvedores Ethereum encontrarão a semântica e a sintaxe muito parecida com a Solidity. Você pode ler a[documentação](https://starknet.io/documentation/events/), ou seguir o[tutorial](https://starknet.io/docs/hello_starknet/events.html), isso explica esse recurso.

#### Definição de %builtins removida

A directiva de uiltin %bjá não é necessária nos contratos StarkNet. Essa alteração seguiu uma discussão na comunidade sobre o[padrão de extensibilidade do contrato](https://community.starknet.io/t/contract-extensibility-pattern/210)em[Shamans StarkNet](https://community.starknet.io/). Ele simplifica significativamente a usabilidade desse padrão de extensibilidade.

Por exemplo, o seguinte contrato será alterado de:

```
%lang starknet

# Esta é a diretiva "%builtins"
# Já não é necessário.
%builtins range_check

@view
func add(x : felt, y : felt) -> (res : felt):
return (res=x + y)
end
```

Para isso:

```
%lang starknet
@view
func add(x : felt, y : felt) -> (res : felt):
return (res=x + y)

```

Você pode conferir os[contratos padrão ERC-20](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts/token), que usam o novo padrão.

#### Matrizes de Funções Externas de Estruturas

Alfa 0.7.0 suporta passar e retornar matrizes de structs em funções externas. Esta funcionalidade adicional permite que os Contratos da Conta suportem melhor[multicalls](https://github.com/OpenZeppelin/cairo-contracts/pull/73#discussion_r753535751).

Multicall é um poderoso recurso de Abstração da Conta que permite que uma conta faça várias chamadas em uma única transação. Um caso óbvio de uso é o de criar uma**única transação**que chama o subsídio e em seguida a transferência.

Estamos ansiosos para ver o que a comunidade faz com isso.

#### Melhorias na CLI do StarkNet

**Suporte para Blocos Pendentes**

[Blocos Pendentes](https://starknet.io/documentation/block-structure-and-hash/#pending_block)foram[introduzidos](https://community.starknet.io/t/cairo-v0-6-2-api-change-pending-block/195)na última versão menor (v0.6.2) e ofereceram confirmações mais rápidas nas transações. Esta versão inclui suporte para consultar os blocos através do StarkNet CLI.

Para usá-lo, em todos os comandos CLI que pega block_number como um argumento (contract_call/get_block/get_code/get_storage_at), podemos consultar a StarkNet em relação ao bloco pendente especificando block_number=pendente.

**Suporte para Contratos da Conta**

StarkNet usa a abstração de conta, ou seja, todas as contas são implementadas como contratos inteligentes. As primeiras implementações dos contratos de conta foram feitas por[Argent](https://github.com/argentlabs/argent-contracts-starknet)e[OZ](https://github.com/OpenZeppelin/cairo-contracts/blob/main/contracts/Account.cairo), mas esperamos que muitas outras estejam por vir.

Em StarkNet, todas as transações devem passar por um contrato de conta, e a CLI agora permite interação com StarkNet Alpha diretamente através de contratos de conta. Veja o[tutorial](https://starknet.io/docs/hello_starknet/account_setup.html#setting-up-a-starknet-account)sobre como configurá-lo.

Funcionalidade semelhante também foi adicionada ao[StarkNet.py](https://github.com/software-mansion/starknet.py/)e ao[Nile](https://github.com/OpenZeppelin/nile)no último mês.

#### L1<>L2 Messaging no Framework de Teste

Alfa 0.7.0 introduz o Postman. O Postman permite que os desenvolvedores usem o framework de testes para testar fluxos mais complicados.

Em um nível alto — simula a responsabilidade do StarkNet Sequencer, ao enviar mensagens de L1 para L2 e L2 para L1. Assegura que as mensagens enviadas através do contrato de mensagens Solidity aparecerão no contrato de destino de StarkNet e que as mensagens enviadas de um contrato StarkNet aparecerão no contrato de mensagens Solidity.

#### E Mais Recursos

A Alfa 0.7.0 fornece muito mais recursos e mudanças, como a adição de uma função raiz quadrada eficiente à biblioteca comum matemática. Uma lista completa aparece no[changelog](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.7.0).

### Próximo Up?

O suporte inicial da[taxa de mecanismo](https://community.starknet.io/t/fees-in-starknet-alpha/286/29)será lançado em questão de semanas, como uma sub-versão do StarkNet.

### Mais informações?

[starknet.io](https://starknet.io/): para todas as informações da StarkNet, tutoriais e atualizações.

[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y): junte-se para obter respostas para suas perguntas, obter suporte e se tornar parte da comunidade.

[StarkNet Shamans](https://community.starknet.io/): participe de seguir (e participar!) nas discussões de pesquisa da StarkNet.