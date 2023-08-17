### TL;DR

* **Taxas agora são obrigatórias no Testnet, em breve no Mainnet**
* Padrão de fábrica de contrato agora é possível!
* StarkNet está introduzindo classes de contrato
* Delegar chamada é substituído pela chamada da biblioteca

### Introdução

Estamos felizes em introduzir o StarkNet Alpha 0.9.0! Esta é uma versão importante na qual StarkNet dá passos significativos no sentido da maturidade, com complementos substanciais tanto à funcionalidade como à concepção do protocolo.

**Taxas são obrigatórias**(atualmente apenas no Testnet, até a versão 0.9. viverá na Mainnet) — qualquer prosperação L2 deve ter seu próprio sistema independente de taxas. Após introduzir taxas como um recurso opcional na versão 0.8. , agora nos sentimos confiantes em incluí-los como componente central do protocolo, e torná-los obrigatórios. Mais detalhes abaixo.

Outra mudança significativa a nível do protocolo é a introdução de Classes de Contrato e a separação de classe/instância. Isto permite uma utilização mais simples da funcionalidade \`delegate_call\` e implantações de contratos existentes, permitindo o padrão de fábrica no StarkNet.

### Aulas do contrato

Levando inspiração da programação orientada para objetos, distinguimos entre o código do contrato e sua implementação. Fazemo-lo separando os contratos em classes e instâncias.

Uma classe de contrato de****é a definição do contrato: Seu código Cairo informação de dicas, nomes de entrada e tudo o que for necessário para definir inequivocamente sua semântica. Cada classe é identificada pelo seu hash de classe (analógico ao nome de uma classe de idiomas OPP).

Uma instância de contrato****, ou simplesmente um contrato, é um contrato implantado correspondente a alguma classe. Observe que apenas instâncias de contrato se comportam como contratos, ou seja, têm seu próprio armazenamento e são callable por transações/outros contratos. Uma classe de contrato não tem necessariamente uma instância implantada no StarkNet. A introdução de classes vem com várias alterações de protocolo.

#### Declarar Transação

Apresentamos um novo tipo de transação para StarkNet: a transação['declarada'](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction), que permite declarar a classe de um contrato**.**Ao contrário da transação \`deploy\`, isso não faz deploy de uma instância dessa classe. O estado do StarkNet incluirá uma lista de classes declaradas. Novas classes podem ser adicionadas através da nova transação \`declare\`.

#### A “Implantar” System Call e Fábricas do Contrato.

Uma vez que uma classe é declarada, ou seja, a transação correspondente \`declare\` foi aceita, podemos implantar novas instâncias dessa classe. Para esse fim, usamos o novo sistema de chamada \`deploy\`, que tem os seguintes argumentos:

* O hash da classe
* Sal
* Argumentos estruturais

O syscall 'deploy' irá então implantar uma nova instância da classe contratada, cujo endereço[](https://docs.starknet.io/docs/Contracts/contract-address)será determinado pelos três parâmetros acima e o endereço da implantação (o contrato que invocou a chamada do sistema).

Incluir deploys em uma chamada transação nos permite pagar e cobrar taxas pelas implantações, sem ter que tratar deploys e invocações de forma diferente. Para obter mais informações sobre as taxas de implantação, consulte[a documentação](https://docs.starknet.io/docs/Fees/fee-mechanism#deployed-contracts).

Este recurso introduz fábricas de contrato na StarkNet, já que qualquer contrato pode invocar a sistematização \`deploy\`, criando novos contratos.

#### Movendo de 'Delegar Call' para 'Biblioteca Chamada'

A introdução de classes nos permite resolver um problema bem conhecido no mecanismo de chamadas delegadas da Ethereum: Quando um contrato executa uma chamada delegada para outro contrato, ele só precisa de sua classe (seu código) ao invés de uma instância real (seu armazenamento). Ter que especificar uma instância específica do contrato ao fazer uma chamada delegada é, portanto, uma prática ruim (na verdade, isso levou a alguns bugs nos contratos Ethereum) - apenas a classe precisa ser especificada.

O sistema antigo \`delegate_call\` chamada agora fica obsoleto (contratos antigos que já foram implantados continuarão a funcionar, mas**contratos usando \`delegate_call\` não compilarão mais**), e é substituído por uma nova chamada do sistema library_call que obtém o hash da classe (de uma classe anteriormente declarada) em vez de um endereço de instância do contrato. Observe que apenas um contrato real está envolvido em uma chamada da biblioteca, portanto evitamos a ambiguidade entre o contrato de chamada e o contrato de implementação.

#### Novos endpoints de API

Adicionamos dois novos endpoints à API, permitindo a recuperação de dados relacionados à classe:

* \`get_class_by_hash\`: retorna a definição da classe dada o hash da classe
* \`get_class_hash_at\`: retorna o hash da classe de um contrato implantado de acordo com o endereço do contrato

Note que para obter a classe de um contrato implantado diretamente, ao invés de passar pelos dois métodos acima, você pode usar o endpoint antigo \`get_full_contract\`, que será renomeado em versões futuras. Todos os endpoints mencionados acima também são utilizáveis da[StarkNet CLI](https://docs.starknet.io/docs/CLI/commands).

#### Tarifas

Vamos incorporar taxas na StarkNet, tornando-as obrigatórias (primeiro no Testnet e, mais tarde, também no Mainnet) para as transações ``[invoke](https://docs.starknet.io/docs/Blocks/transações#invoke-function)\`. A transação \`declarada \` não exigirá taxas neste momento. Da mesma forma, \`implantar as transações`` também não exigirá uma taxa, no entanto, note que esse tipo de transação provavelmente será descontinuado em versões futuras.

Subsistem várias questões em aberto neste domínio, sendo as mais importantes a forma de cobrar taxas pelas declarações de contratos e pela distribuição das contas de StarkNet. Abordaremos estas questões em versões futuras.

### E agora?

Seguindo nosso roteiro que[anunciamos em fevereiro](https://medium.com/starkware/starknet-on-to-the-next-challenge-96a39de7717), estamos empenhados em melhorar o desempenho da StarkNety, em geral, e o desempenho do sequenciador, em particular, para obter os usuários feedback mais rápido sobre suas transações. Na próxima versão, planejamos introduzir a paralelização no sequenciador, permitindo uma produção mais rápida de blocos.

A próxima versão principal do StarkNet irá se concentrar na estrutura das contas do StarkNet, de uma forma semelhante ao[ERC-4337](https://medium.com/infinitism/erc-4337-account-abstraction-without-ethereum-protocol-changes-d75c9d94dc4a). Com isso, teremos concluído o comportamento das contas StarkNet, dando mais um passo importante no sentido da adopção em massa!