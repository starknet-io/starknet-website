### TL;DR

* Estamos compartilhando um plano detalhado para a Regenesis, que foi moldado por amplas discussões com a comunidade StarkNet. Um agradecimento especial ao Kuba@SWM.
* A regênesis seguirá o lançamento do Cairo 1.0, tornando o sistema mais seguro, permitindo contratos StarkNet mais simples e seguros
* Os usuários devem estar preparados para atualizar sua carteira durante a fase de transição
* Desenvolvedores serão obrigados a entregar seus contratos para o Cairo 1.0

### Introdução

StarkNet Alpha está avançando para a Regenesis, um passo importante para a produção. Nesta atualização queremos compartilhar mais detalhes sobre a motivação principal para a Regênesis —[Cairo 1.](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)— e começar a explicar o que isso vai exigir dos usuários e desenvolvedores. Depois da Regenesis, StarkNet funcionará apenas com contratos baseados em 1,0 e começará a partir de um novo bloco de genesis com o estado existente.

O que a Regênesis exigirá dos usuários? Uma atualização simples de sua carteira. O que será necessário dos construtores dos dapps da StarkNet? Distribuindo seus contratos para o Cairo 1.0 e seguindo uma simples orientação de atualização. Especificamente, não haverá reinício a partir de um estado limpo e ficaremos com a mesma instância do StarkNet, significando que não haverá necessidade de migração**.**

O plano Regenesis é preservar totalmente o estado das aplicações e não ter tempo de inatividade nas aplicações. Assim, as aplicações que seguem as orientações que forneceremos poderão lançar imediatamente no StarkNet Alpha Mainnet sem qualquer perturbação para a sua operação e seus usuários durante o processo de Regenesis. e estão empenhados em trabalhar com a comunidade e fornecer todo o apoio necessário para que este processo seja o mais suave possível.

Estamos a enveredar por essa via em resultado de amplas discussões com a comunidade, que incluiu uma sugestão importante da equipa Software Mansion .

### Por que Regenesis?

#### Cairo 1.0 e Sierra

A principal motivação para a Regenesis é capitalizar sobre as novas possibilidades trazidas pelo Cairo 1. — nomeadamente sequenciadores da proteção Do, resistência à censura e medição de gás, que são essenciais para StarkNet como uma rede descentralizada.

O Cairo 1.0 garantirá que cada transação possa ser provada. Isto permitirá que a StarkNet inclua transações revertidas em blocos e gere uma prova da sua execução. Este mecanismo permitirá o pagamento de sequenciadores na execução de transações revertidas, aumentando a protecção DOS contra agentes maliciosos. Além disso, o Cairo 1.0 apoiará a medição de gás, o que permitirá a StarkNet a transição para um mercado de taxas mais intuitivo. Por último, isto permitirá à StarkNet introduzir transacções forçadas da L1 e aumentará as capacidades de resistência à censura da rede.

Para colher estes benefícios, os contratos do Cairo v0 e do Cairo 1.0 não podem ser misturados. Declarações incorretas não podem ser provadas incorretas, nem o rastreamento de gás pode acontecer, se tivermos bits de contratos v0 do Cairo. Para tal, teremos de eliminar gradualmente o código do Cairo v0 completamente do estado StarkNet, ergo Regenesis.

**Depois da Regênesis, teremos um sistema Starknet totalmente baseado no Cairo 1.0.**

#### Simplificando o código e o protocolo

StarkNet, enquanto ainda estava em Alpha, já passou por muitas mudanças. Todas as versões até agora alteraram a estrutura do StarkNet OS, blocos e transações. Isto fez com que alguns dos códigos fossem obsoletos. No entanto, os nós e provedores de infraestrutura completos (como indexadores e exploradores de estado) precisam ser cientes, e implementar, todos os comportamentos passados de versões StarkNet Alpha para sincronizar com o state sem confiança. Sem Regênesis, este encargo poderia constituir uma importante dissuasão para os desenvolvedores que considerariam a construção de tais serviços para StarkNet.

Portanto, antes de ir para a produção, e como preparação para um mundo descentralizado, com muitas implementações de ferramentas de infra-estruturas, pretendemos reduzir a complexidade do protocolo. Isso seria possível se não exigíssemos que as infra-estruturas futuras fossem executadas a partir de uma StarkNet 0. código e marque o primeiro bloco após o período de transição como o ponto de génese.

### Wen Regenesis? O cronograma geral

A regênesis seguirá a libertação do Cairo 1.0, que está prevista para o final de 2022. Durante o primeiro trimestre de 2023, StarkNet será atualizado para oferecer suporte ao Cairo 1. , e nós pretendemos migrar para uma rede totalmente baseada em 1,0 até ao final do Q1.

**Os utilizadores e os pedidos terão de fazer a transição durante este período.**

![](/assets/1_ef85shzd2uudwex-cy8wdg-1.png)

### Então o que eu preciso saber?

Os desenvolvedores de aplicação precisam estar cientes dos seguintes aspectos em torno do Regenesis:

1. Certifique-se de que seu contrato esteja pronto para a atualização. Os aspectos técnicos completos do plano são compartilhados no[Fórum da Comunidade StarkNet](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080). Uma vez que os detalhes serão finalizados, compartilharemos um guia conciso.
2. Certifique-se de que está pronto para porta seu código para o Cairo 1.0. Veja a próxima seção para todos os detalhes mais recentes.

#### Portando seu Contrato para o Cairo 1.0

O Cairo 1.0 tem uma grande promessa para os desenvolvedores da StarkNet. Uma melhoria em relação ao Cairo existente que será mais seguro, melhor e mais fácil para a escrita de contratos, com melhor sintaxe, sistema de tipo totalmente refinado (uint256 nativos? e mais. Os desenvolvedores serão obrigados a portar os seus contratos StarkNet existentes para a sintaxe Cairo 1.0. No entanto, como a lógica e a estrutura de código permanecerão iguais, espera-se que este esforço seja insignificante comparado ao esforço que levou para desenvolver o aplicativo em primeiro lugar.

Neste contexto, vale a pena notar que você pode optar por rever a versão 1.0 do seu aplicativo do Cairo. Se seu aplicativo já foi auditado no passado, o processo de re-auditoria será significativamente mais barato e mais direto, já que os auditores já conhecem a sua lógica.

Vamos lançar toda a documentação sobre o Cairo 1.0, juntamente com tutoriais e oficinas durante o número 4 de 2022.

### Eu sou um Usuário do StarkNet. O que devo fazer?

Como usuário, você provavelmente terá que tomar algumas ações durante a Regenesis. No mínimo, você terá que melhorar o contrato de sua conta. Não fazer isso durante o período de transição (alguns meses) resultará na perda da sua conta. Dependendo do caminho de atualização escolhido pelos desenvolvedores dos aplicativos StarkNet que você está usando, talvez seja necessário dar passos adicionais.

Lembramos a todos que StarkNet ainda está na fase Alfa, e os utilizadores são obrigados a permanecer atentos às comunicações da StarkNet e dos aplicativos que utilizam. É sua responsabilidade garantir que você atualize cedo para o novo sistema. *Ser um early adopter nem sempre é fácil, e contamos com você para fazer a sua parte!*

### Para Concluir

Cairo 1.0 está logo no final, oferecendo muitos benefícios e melhorias empolgantes para a StarkNet e seus desenvolvedores. Para colhê-los, é necessário um evento de Regenesis da rede. Felizmente, nós temos um design em mente que torna este processo minimamente disruptivo — completamente perfeito para os usuários e muito simples para aplicativos.

Nós pedimos que você participe da[discussão da comunidade](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080)e compartilhe seus comentários e preocupações. além de estar atualizado sobre os passos que você precisa tomar como desenvolvedor de aplicativos no StarkNet.