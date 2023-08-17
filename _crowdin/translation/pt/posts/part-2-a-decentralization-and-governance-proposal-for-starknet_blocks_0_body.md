Nosso post[anterior](https://medium.com/@starkware/part-1-starknet-sovereignty-a-decentralization-proposal-bca3e98a01ef)explicou o que é StarkNet, como está sendo descentralizado progressivamente e forneceu um resumo de seus dois mecanismos de descentralização. Este post discute o processo de descentralização da StarkNet, a função da StarkNet Foundation, e a necessidade de um novo token nativo para StarkNet. Por último, o relatório discute considerações adicionais sobre a governação de StarkNet.

### Princípios de descentralização

[INICIAR](https://eprint.iacr.org/2018/046.pdf)A tecnologia é madura e segura, mas até agora tem sido implementado e utilizado principalmente como um serviço centralizado na Ethereum ([StarkEx](https://starkware.co/starkex/)), e uma versão Alfa de um serviço descentralizado ([StarkNet](https://starkware.co/starknet/)). StarkNet deve estar disponível como um bem público sem verdadeiramente permissão, como o Ethereum ou a Internet. Então estamos comprometendo a promover a descentralização da StarkNety, e os quatro seguintes princípios para orientar a mudança:

**Liveness.**A StarkNet não vai depender de uma única empresa como seu operador. As empresas podem deixar de existir, ou podem decidir parar de prestar serviço à rede. Após a descentralização, esses cenários não vão derrubar o StarkNet.

**Resistência à censura.**Uma única empresa pode, teoricamente, decidir ou ser forçada, a censurar determinadas transações e contratos inteligentes enquanto cumpre as outras. StarkNet utilizará um modelo descentralizado para proteger contra tal cenário.

**Transparência.**Atualizações e manutenção de software são uma parte inevitável de qualquer serviço descentralizado. Estas acções devem ser discutidas de forma transparente, de modo a que a comunidade seja informada e controlada pela tecnologia. A grande comunidade de usuários, operadores e desenvolvedores da StarkNet deve trabalhar colectivamente para determinar atualizações e manutenção através de um processo transparente, justo, participativo e inclusivo.

**Criatividade.**StarkNet deve permitir que qualquer desenvolvedor participe da construção da sua infraestrutura central e aplicativos, impedir a monopolização e aumentar a utilização criativa e socialmente benéfica das cadeias de blocos em escala.

A descentralização é um problema difícil, que não deve ser abordado à pressa. A proposta de governança da StarkNetet, compartilhada aqui, provavelmente se desenvolverá e mudará ao longo do tempo. O que se segue é apenas a sua primeira iteração.

### Fundação

A Fundação será uma organização sem fins lucrativos orientada pela missão e será concedida StarkNet Tokens (veja[próxima postagem](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6)). Prevemos que a missão da Fundação seja manter a StarkNet como um bem público. StarkNet é uma infra-estrutura sem permissão que deve estar disponível para todos. Deve ser bem mantido para ser seguro e eficiente para uso público. Também não deve discriminar entre utilizadores, operadores e desenvolvedores. A Fundação será dedicada a promover os objectivos de descentralização acima descritos: subsistência, resistência à censura, transparência e criatividade.

A capacidade de vida e a resistência à censura da StarkNet são melhor alcançadas através de um consenso sem permissão e descentralizado através de uma eleição de líder proof-of-stake para sequenciamento e comprovando transações compactadas com STARK. Enquanto esse mecanismo é automatizado, ele depende de um software de protocolo que funcione bem, executado por nós na rede, bem como da validade e vitalidade do blockchain Ethereum subjacente. Por conseguinte, a Fundação também funcionará como um recurso para o desenvolvimento, a documentação, e publicação desse software de protocolo, especialmente no que se refere a correções de erros e melhorias na eficiência.

Além da manutenção de rotina, antecipamos debates vibrantes dentro da comunidade sobre mudanças em recursos ou outras atualizações mais fundamentais do protocolo. Isso é inevitável em sistemas sem permissões, como evidenciado historicamente pelo debate de tamanho do bloco do Bitcoin, a fusão de proof-stake da Ethereum e vários outros exemplos em todo o ecossistema da criptomoeda. Essas decisões de desenvolvimento de software são mais do que apenas ganhos objetivos de matemática e eficiência, mas envolvem julgamentos de valor subjetivos e compromissos de funcionalidades. Em muitas comunidades blockchain, essas decisões são tomadas informalmente sem quaisquer regras claras de debate ou um processo de tomada de decisão. Mesmo uma não decisão é uma decisão que favorece o status quo. Para evitar estas questões, a missão da Fundação também incluirá o desenvolvimento, testes, e implementação de processos comunitários de tomada de decisão para a resolução de questões tecnológicas essenciais. Esse mecanismo será central nas deliberações sobre actualizações de protocolo, resolução de litígios e financiamento de bens públicos. A Fundação promoverá a transparência, distribuindo as informações necessárias para tomar estas decisões. e manterá um arquivo dessas informações para referência futura.

### Por que token?

StarkNet foi sempre visionado como um protocolo que é executado pela comunidade No entanto, não existe uma forma clara de definir quem é exactamente essa comunidade. *O token permitirá que os apoiantes da comunidade que executam o trabalho que contribuíram para o sucesso do ecossistema desempenhem um papel na governação do ecossistema.*

Além disso, um serviço justo, aberto e resistente à censura só é possível se várias partes aparecerem para competir para executar o trabalho que capacita o serviço descentralizado. e isso só pode ser garantido se esses trabalhadores forem compensados pelo seu papel de operadores da rede.

Portanto, é necessário incluir tokens como parte de uma tecnologia de rede como a StarkNet. E embora a resistência ao uso de um token não-nativo, por exemplo, Bitcoin ou Ether (ETH), possa ser alcançada usando uma resistência ao pagamento acreditamos que tal abordagem falharia ao longo do tempo para fornecer aos usuários da rede uma comunidade distinta e uma voz nas decisões.

Um token nativo que recompensa os membros da comunidade que desenvolvem a rede avançará o ecossistema em um grau que o uso de um token não-nativo não. Além disso, se o token não for nativo, os choques econômicos de decisões tomadas em outros ecossistemas podem afetar o serviço da StarkNet, seus usuários e provedores.

### Para que será usado o token?

O token será o mecanismo para operar a rede (taxas), manter e proteger a rede (participação consensual), e decidir sobre seus valores e objetivos estratégicos (governação).

**Taxas de transação:**Atualmente, as taxas na StarkNet são pagas em Ether (ETH). Mas mais tarde, prevemos que as taxas serão pagas exclusivamente com o Token StarkNet nativo. Para oferecer suporte a uma boa experiência, mecanismos automatizados e descentralizados em cadeias de usuários permitirão que os usuários paguem taxas em ETH.

**Locando:**Certos serviços que são críticos para a vida e segurança da StarkNet podem exigir staking de Tokens. Esses serviços podem incluir sequenciamento, alcançando consenso temporário L2 antes de que a L1 seja alcançada, serviços de prova STARK, e fornecimento de disponibilidade de dados, para citar alguns exemplos. Esperamos que esses serviços sejam descentralizados em 2023.

**Governação:**Propostas para melhorar a StarkNet exigirão um limite mínimo de suporte ao token, para ser definido mais tarde. A votação, seja ela directa ou através da delegação, será necessária para todas as alterações ao protocolo que são essenciais para a vitalidade, segurança e manutenção da StarkNet. Por exemplo, todas as principais atualizações do Sistema Operacional StarkNet exigirão a aprovação dos titulares dos token.

### Reflexões finais sobre governação

Os mecanismos de governação descentralizados ainda estão na sua infância e nenhum projecto neste espaço nos proporcionou um modelo imperativo de emulação. A votação regular e direta de todos os titulares de tokens é o melhor caminho? É relativamente fácil projetar isto como um mecanismo tecnológico, mas pode ser pesada e injustamente privilegiar os titulares de um grande número de tokens, em vez de pessoas que usam a rede activa.

Ao considerar a melhor abordagem, Sugerimos que se ponderem verificações e equilíbrios entre várias estruturas separadas que derivam sua autoridade da comunidade de titulares de tokens StarkNet.

Recomendamos também que os detentores de tokens da StarkNet façam bom uso da experiência dos principais desenvolvedores. Em todos os ecossistemas da blockchain, os principais desenvolvedores desempenham um papel central na curadoria, manutenção e avanço da tecnologia subjacente. Por conseguinte, vale a pena considerar a definição de um papel formal para eles no âmbito do processo de governação.

A terceira postagem[](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6)nesta série descreve o design do Token Starknet: as considerações chave sobre o design do token, e as diferentes fases de atribuição do token.