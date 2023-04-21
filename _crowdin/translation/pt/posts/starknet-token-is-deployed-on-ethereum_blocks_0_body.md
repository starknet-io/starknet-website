### TL;DR

* O Token StarkNet (STRK) foi agora implantado no Mainnet da Ethereum
* **Cuidado com golpes!**Tokens StarkNet não são oferecidos para venda
* Vai levar tempo para a Fundação determinar o mecanismo de distribuição de seus tokens
* Tokens detidos por acionistas da StarkWare, funcionários e por desenvolvedores de software independentes estão bloqueados por um período de quatro anos, com um lançamento gradual a partir de um ano
* O token irá aumentar a descentralização da StarkNet, graças à sua utilização para votar, hospedar e pagar taxas

Hoje,[StarkNet](https://starknet.io/)está dando outro passo para a descentralização. O token StarkNet agora é[na Ethereum](https://etherscan.io/address/0xca14007eff0db1f8135f4c25b34de49ab0d42766). Retirada rapidamente: o STRK será usado como um sinalizador para a participação nos mecanismos de consenso da StarkNet, como um token de governança e para o pagamento de taxas de transação. A lógica para cada um desses utilitários é apresentada na[nossa proposta de descentralização](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), na seção intitulada “Para que os tokens serão usados?”

***Cuidado com golpes:**no momento da escrita, não há como comprar Tokens Starknet; este período de não venda permanecerá em vigor até novo aviso feito pela[StarkNet Foundation](https://twitter.com/StarkNetFndn); Acompanhe a comunicação oficial da StarkNet Foundation para saber de quaisquer actualizações sobre o estatuto da STRK. You can report scams and check for other reports of scams in the [scam-report](https://discord.gg/qypnmzkhbc) channel on the [StarkNet Discord](http://starknet.io/discord) server.*

Este post explica o processo de alocação de token, e como os contratos de token implantados servem dois dos três utilitários projetados, a saber, o voto e a participação. O terceiro utilitário — pagando taxas da StarkNet — será discutido mais tarde.

### Planejando o processo de alocação dos tokens

Anteriormente, propusemos um plano[](https://medium.com/starkware/part-3-starknet-token-design-5cc17af066c6)para alocação inicial dos tokens. Tokens alocados para acionistas, funcionários e desenvolvedores de software independentes são bloqueados por quatro anos, com um cronograma de lançamento gradual a partir de um ano. Tokens bloqueados podem ser usados para votação e participação, mas não podem ser transferidos ou negociados. Alguns dos tokens são travados através de um contrato inteligente dedicado na Ethereum, enquanto outros tokens são travados através de custódios.

Separadamente, 50.1% dos tokens StarkNet existentes são alocados para a StarkNet Foundation, para serem usados para atingir seus[objetivos](https://medium.com/@StarkNet_Foundation/welcome-to-the-world-starknet-foundation-7bd55d5dbc59)(cf.[Publicação do StarkWare](https://medium.com/starkware/introducing-the-starknet-foundation-bd4b4379fbb)). Estes tokens não estão trancados. No entanto, a Fundação vai precisar de tempo para formular o mecanismo exacto para atribuir ainda mais esses tokens e vai partilhar os seus planos em tempo útil.

#### Por que bloquear?

Bloquear os tokens para o período acima mencionado garante que os colaboradores atuais se alinhem com os incentivos a longo prazo do StarkNet. Além disso, desincentiva a especulação sobre o símbolo da utilização generalizada para os seus fins pretendidos: a segurança da rede, o pagamento de taxas e a descentralização da governação.

Em seguida, explicamos como a implementação do token suporta votação e staking.

### Votação

A Fundação será responsável por facilitar uma governação sólida e por formular os mecanismos de votação. O token StarkNet foi concebido para permitir tanto a votação directa como uma série de mecanismos de delegação.

#### Votos L1

A implementação ERC-20 implementada agora inclui**opcional**uso do módulo de delegação[do Compound](https://docs.compound.finance/v2/governance/). Este módulo é amplamente utilizado para votação em cadeia. A razão pela qual é opcional no StarkNet e desligado por padrão é a consideração de custo. Ligando a questão, significa que todas as transferências de Tokens StarkNet sobre a L1 requerem mais gás necessário apenas para efeitos de acompanhamento de mudanças no poder de voto.

#### Non-L1 voting

Alternativas para o voto na cadeia L1 com o módulo da delegação do Compoundi incluem votação off-chain (além de sistemas de voto on-chain baseados em StarkNet) (como[SnapshotX](https://snapshot.mirror.xyz/cUOrwdtEs5PvNh0sqYWWxPjt8GdJWn_Qp3cl7E3_8IU)). Essas alternativas, que reduzem significativamente o consumo de gás para transferências L1, não exigem suporte explícito do código ERC-20 atualmente implantado, sendo assim inerentemente suportadas.

Como mencionado acima, todos os tokens — bloqueados e desbloqueados — poderão ser usados no mecanismo de votação de StarkNet.

### Implantação

A operação sem permissão e resistente à censura de StarkNet requer uma seleção aleatória de sequenciadores. A probabilidade de um nó ser selecionado sequencialmente e propor um bloco é proporcional ao número de Tokens StarkNet que o nó participa. A lógica para usar StarkNet Tokens (em vez de, digamos, Ethereum ou Bitcoin) é explicada na[proposta de governança](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), e os detalhes exatos da participação, sequenciamento e criação de blocos na StarkNet estão sob uma[discussão pela comunidade](https://community.starknet.io/t/starknet-decentralized-protocol-introduction/2671)e ainda não foram finalizadas.

Como na votação, os tokens podem ser usados para ficar parados mesmo quando estiverem bloqueados. Isto contribui para a diversidade dos operadores da StarkNet e para a resiliência da StarkNet.

### Summary

A implantação dos contratos do StarkNet Token na Ethereum é mais um passo na descentralização da StarkNet.

Nós pedimos aos desenvolvedores e usuários que tenham cuidado com fraudes! No momento da publicação, nenhum token é negociável e este status de nenhuma negociação permanecerá em vigor até um novo aviso da Fundação StarkNet.

Para mais perguntas você pode ir ao canal de[discussões Token-](https://discord.gg/qypnmzkhbc)no servidor de[StarkNet Discord](http://starknet.io/discord).