A inovação tecnológica em blockchain tem prosperado nos últimos anos — STARKs, SNARKs, EIP-1559, a Ethereum Merge — são todas enormes realizações tecnológicas. No entanto, UX e design da interface falharam ao se manter. As pessoas ainda ficam presas em frases de 16 palavras, e entrar no DeFi sem um intermediário centralizado ainda é demasiado intimidado para muitos . Para integrar os próximos bilhões de usuários na Web3, melhorar a experiência de integração do usuário é crucial.

Como o FTX demonstrou (e Gemini, Celsius e Mt. Gox), manter a autocustódia sobre os seus ativos é extremamente importante. No entanto, até há pouco tempo, carteiras autoprivativas têm sido desajeitadas e confusas para o utilizador médio. A maioria das pessoas esquece suas senhas Web2 mensal; como se espera que os usuários mantenham sua semente e chaves privadas seguras para eternidade?

Simplificando, é um pesadelo de segurança. Como vimos inúmeras vezes, um movimento errado, seja iniciado por maus atores ou negligência, pode resultar na perda de milhões de dólares.

Como primeiro ponto de contato para novos usuários de criptomoedas, as carteiras Ethereum devem ser fáceis de usar, seguras e personalizáveis para atender às necessidades de cada usuário. Isto requer que os desenvolvedores integrem a simplicidade dos produtos financeiros Web2 com os recursos da Web3.

É exatamente isso que a abstração de conta faz.

A abstração da conta melhora a segurança dos produtos de carteira autocustódia ao remover a dependência da chave privada dos usuários e tornar as carteiras mais programáveis. Com esta UX, carteiras não-privativas de custódia podem finalmente escalar para milhões de usuários de criptomoedas.

Mas para entender completamente o impacto da abstração da conta, devemos nos atualizar sobre como as contas Ethereum funcionam.

### O básico das contas Ethereum

Existem dois tipos de contas Ethereum:

1. Contas detidas externamente (EOA)
2. Contas de contrato (CA)

Vamos dividir cada um um pouco mais.

### Contas de propriedade externa

Contas de propriedade externa, como a MetaMask e a Coinbase, são o tipo de conta típico para usuários Ethereum. Cada AEOA consiste numa chave privada e pública, chamada de "pai" chave.

Todas as transações são autorizadas e assinadas por chaves privadas. Uma vez assinada uma transação, o EVM verifica que a assinatura é válida usando o endereço da conta da EOA. A lógica codificada no EVM significa que a conta (o objeto que mantém seus tokens) e a chave privada (assinante) estão associadas a uma.

Perder sua chave privada significa perder fundos ou até mesmo controlar sua conta para sempre.

### Contas de contrato

Enquanto isso, contas de contratos, sinónimo de abstração de conta, são contratos inteligentes implementados na blockchain Ethereum. Esses contratos são controlados pela lógica do código e não exigem chaves privadas. Ao contrário da EOA, as contas de contrato não podem iniciar transações. Em vez disso, suas transações são acionadas por instruções da EOA.

### Porquê a abstração de conta importa

Abstração de conta implica abstração da lógica de autorização codificada longe dos EOA, transformando cada conta em um contrato inteligente programável que pode ser adaptado para atender às necessidades de qualquer indivíduo.

Como explicado pelo co-fundador da Argent e Diretor da Ciência Científica Julien Niset num recente evento[Stark @ Home event](https://www.crowdcast.io/e/7olimxqv), essa lógica de autorização flexível dá liberdade aos desenvolvedores para jogarem com os recursos de conta como…

**Assinantes de hardware:**Usando o enclave seguro de um iPhone ou Android para transformar qualquer smartphone em uma carteira de hardware. A partir daí, os usuários podem verificar transações usando dados biométricos, como uma impressão digital ou o Face ID da Apple. Já começamos a ver carteiras de autocustódia como Braavos[ampliam esse recurso.](https://medium.com/@braavos_starknet_wallet/hardware-signer-the-last-innovation-for-wallet-crypto-everyday-users-7e1974f93944)

**Pagadores:**Permite que os usuários paguem taxas de gás em qualquer token, ou até mesmo que tenham um mecanismo projetado por terceiros para transações.

**Recuperação social:**No caso de uma chave privada ser perdida ou comprometida, os usuários podem autorizar uma nova chave como dono legítimo da carteira. Isto pode incluir uma variedade de métodos de recuperação através de contatos confiáveis, carteiras de hardware ou serviços de terceiros. A ideia é recuperar o acesso à sua conta de forma tão fácil como recuperar a senha da sua conta bancária por meio de um e-mail.

**Autenticação multifator:**Semelhante às práticas de 2FA do Web2 usuários podem configurar dois (ou mais) métodos de autenticação para suas carteiras de criptomoedas, onde uma transação só é assinada quando um usuário confirma a aprovação através de uma segunda opção, como e-mail ou SMS. Os usuários também podem criar limites diários de transferência ou listas de endereços de conta dos quais a carteira é bloqueada automaticamente de interagir.

**Sinais de Resistência Quântica e de Assinaturas Gas-Efficientes:**Esquema de assinatura atual da Ethereum, ECDSA, é extensa em termos computacionais (lida: taxas de gás mais elevadas) e pode ser quebrada por computadores quânticos. Através da abstração de assinaturas, diferentes contratos de conta usam esquemas de assinatura mais eficientes e quânticas. StarkNet usa sua própria curva STARK-friendly proprietária.

Não apenas esses recursos fornecem aos usuários maior segurança e mais flexibilidade, mas, o que é mais importante, resultam em uma**melhor experiência de usuário**.

Listado por Vitalik Buterin como um "sonho de longa duração" para a comunidade de desenvolvedores do Ethereum, inovações em torno da abstração da conta, principalmente EIP-2938 e EIP-3074, mudaram desde 2020. No entanto, ambas as compensações necessárias em torno da segurança e implementação. [EIP-4337](https://github.com/ethereum/EIPs/blob/3fd65b1a782912bfc18cb975c62c55f733c7c96e/EIPS/eip-4337.md), o desenvolvimento mais promissor até agora, propõe uma versão de abstração de conta sem precisar de alterações no protocolo Ethereum.

### **Abstração de conta e Starknet**

Ao contrário do Bitcoin e do Ethereum, que estão reajustando seus protocolos atuais para suportar a abstração da conta, o[StarkNet](https://starkware.co/starknet/)implementou a abstração da conta desde o primeiro dia. Quando combinado com a escalabilidade e as capacidades de nossas provas STARK, o potencial de inovação em carteiras é ilimitado. É por isso que a próxima geração de carteiras autoprivativas, como Argent e Braavos, está actualmente a ser construída sobre a nossa rede.

A abordagem da StkNet's é semelhante à EIP-4337,[reconhecer que](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781)a abstração completa da conta ainda resultaria em confusão de UX e[poderia abrir a porta](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4337.md#rationale)para ataques em sequenciadores. Em vez disso, visa alcançar tanto a abstração da assinatura como a abstração de pagamentos, através da mutualização de algumas das infra-estruturas necessárias e fora da cadeia.

E enquanto ainda há muito mais trabalho a fazer, a abstração da conta está ganhando tração além de um pequeno círculo de cripto nativos. Em dezembro[Visa propôs a ideia](https://www.coindesk.com/tech/2023/01/11/ethereum-upgrade-could-make-it-harder-to-lose-all-your-crypto/)de usar a abstração de conta para configurar pagamentos recorrentes automáticos no StarkNet. Usando uma conta delegável, os usuários podem conceder permissão para iniciar um pagamento com um contrato inteligente pré-aprovado. A partir de lá, o contrato inteligente será programado para deduzir um valor de pagamento definido em um dia específico, por um período de tempo definido. Embora a Visa ainda não tenha revelado seus planos para seus próprios serviços, o interesse só fala por si, e pode prefigurar um mundo onde plataformas de assinatura de grande tecnologia como a Netflix e o Spotify podem abraçar a adoção de cripto.

Quanto ao que o futuro nos reserva, só o tempo o dirá. Mas uma coisa é certa. Ao tornar as carteiras mais fáceis e seguras de usar, abstração de conta servirá como um poderoso catalisador das carteiras de blockchain autocustodionais para dimensionar para milhões de usuários de criptomoedas. Continuaremos construindo enquanto isso.