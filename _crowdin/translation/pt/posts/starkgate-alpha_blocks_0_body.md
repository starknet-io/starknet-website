### TL;DR

* A primeira versão do StarkNet Bridge, StarkGate Alpha, é ativa em**[Testnet](https://goerli.starkgate.starknet.io/)**, e em**[Mainnet](https://starkgate.starknet.io/)**
* Aguardamos respostas comunitárias sobre como melhorar as coisas. Você pode enviar seus comentários para[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)e[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).
* A implantação principal ocorrerá em breve (atualize, dia 9 de maio de 2022: StarkGate estará disponível no Mainnet)

Excitação! Estamos entusiasmados em liberar StarkGate Alpha, a primeira versão da ponte de StarkNet, agora ao vivo no teste Goerli, com o deploy principal para seguir em breve.*

\*(atualização, dia 9 de maio de 2022: StarkGate está ao vivo no Mainnet)

**Aviso importante: esta é uma versão alfa no StarkGate Alpha (leia a impressão fina abaixo!).**

![](/assets/starkgate_01.png)

Antes de continuar, vá conferir! [StarkGate Testnet](https://goerli.starkgate.starknet.io/),[StarkGate Mainnet](https://starkgate.starknet.io/)

StarkGate serve como um gateway entre Ethereum e a[StarkNet](https://starknet.io/), e permite que os usuários façam tudo o que podem esperar de uma ponte.

#### **Onde posso encontrar informações sobre como o StarkGate funciona?**

Para entender como o StarkGate funciona, leia a[documentação técnica](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)e dê uma olhada no[código](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate). Note que esta é a primeira versão. e convidamos os seus comentários e sugestões sobre como melhorar tanto[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)quanto[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).

#### **Quais tokens serão suportados por StarkGate?**

* StarkGate Alpha em Goerli suporta ETH e alguns outros tokens ERC-20. A lista completa e os endereços dos contratos relevantes, tanto na Ethereum como na StarkNet, estão disponíveis neste[repositório](https://github.com/starkware-libs/starknet-addresses).
* No Mainnet, inicialmente, StarkGate Alfa só irá apoiar ETH para permitir o uso do mecanismo de taxas. Mais tarde, adicionaremos suporte para WBTC, USDC, USDT, e DAI. Você pode ver os endereços de contrato relevantes neste[repositório](https://github.com/starkware-libs/starknet-addresses/blob/master/bridged_tokens/mainnet.json).

Além disso, publicaremos o mecanismo para adicionar suporte a tokens adicionais.

#### **Que limitações de segurança o StarkGate Alfa terá no Mainnet?**

StarkGate Alpha on Mainnet é lançado com duas limitações — a fim de reduzir os riscos envolvidos no uso de uma versão Alfa:

1. O valor total bloqueado (TVL) na ponte L1 limitará a quantidade de cada tipo de token.
2. A quantidade máxima em cada transação enviada de L1 a L2 (Ethereum→StarkNet) via StarkGate será limitada.

Tencionamos reduzir gradualmente estas limitações e eliminá-las completamente à medida que a confiança aumenta. Os parâmetros atualizados podem ser encontrados na[documentação do StarkGate's](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge).

![](/assets/starkgate_02.png)

### Alfa e o que significa

Como sempre, lembramos que StarkNet está atualmente na sua fase**Alpha**:

* As coisas podem quebrar. Se eles falharem catastróficamente, seus fundos podem ser perdidos (**leia o aviso abaixo de**!).
* Os contratos StarkNet Alpha e StarkGate podem ser atualizados sem um bloqueio de tempo. Enquanto esperamos anunciar tais melhorias muito antes do tempo, no caso de riscos iminentes à segurança (por exemplo, se for encontrado um bug crítico), a atualização pode ser aplicada com pouco ou nenhum aviso.
* O código da ponte, bem como as partes de StarkNet Alpha, ainda não foram auditadas. As auditorias ABDK e Nethermind do StarkGate Alfa serão concluídas em breve.

Nós encorajamos todos os usuários a ajudar a melhorar a ponte fornecendo seus comentários usando uma das seguintes plataformas:

1. [Repositório de frontend StarkGate](https://github.com/starkware-libs/starkgate-frontend)
2. [Repositório de Contratos StarkGate](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate)
3. [Shamans StarkNet](http://community.starknet.io/)

Para perguntas e suporte de desenvolvimento, junte-se ao[servidor de Discord StarkNet](https://discord.gg/uJ9HZTUk2Y).

### Renúncia

***StarkNet Alpha é um sistema novo e complexo que não foi totalmente auditado. O mesmo se aplica à ponte StarkNet. Como todos os sistemas de software complexos, tanto StarkNet quanto a ponte podem conter bugs que em casos extremos, poderia levar à perda de todos os seus fundos. Então,***tenha cuidado e cuidado!******

*O ecossistema StarkNet é um vasto e em rápido crescimento de equipas e indivíduos independentes, sobre os quais StarkWare não tem qualquer controlo e não assume qualquer responsabilidade. Qualquer um dos projetos desenvolvidos por membros do ecossistema pode conter erros que, em casos extremos, podem levar à perda de todos os seus fundos. Além disso, à medida que mais contratos inteligentes são usados, o potencial de bugs nocivos involuntários e até mesmo fraudes maliciosas e puxões de tapete aumenta. Portanto, trate todos os contratos inteligentes na StarkNet enquanto trata contratos inteligentes na Ethereum, e utilize apenas aqueles que você tem boas razões para confiar como seguros.*