### TL;DR

* Nous partageons un plan détaillé pour la Régenèse, qui a été façonné par des discussions approfondies avec la communauté StarkNet. Remerciements spéciaux à Kuba@SWM.
* Regenesis suivra la sortie de Cairo 1.0, rendant le système plus sécurisé en permettant des contrats StarkNet plus simples et plus sûrs
* Les utilisateurs devraient être prêts à mettre à jour leur portefeuille pendant la phase de transition
* Les développeurs seront tenus de porter leurs contrats vers le Caire 1.0

### Introduction

StarkNet Alpha progresse vers Regenesis, une étape importante vers la production. Dans cette mise à jour, nous voulons partager plus de détails sur la motivation principale de Regenesis —[Caire 1.](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)— et pour commencer à expliquer ce que cela exigera des utilisateurs et des développeurs. Après Regenesis, StarkNet ne fonctionnera qu'avec les contrats basés sur le Caire 1.0, et commencera à partir d'un nouveau bloc de genèse avec l'état existant.

Qu'est-ce que la Régénésie exigera des utilisateurs? Une simple mise à jour de leur portefeuille. Qu’est-ce que cela exigera des constructeurs des dapps de StarkNet ? Porter leurs contrats au Caire 1.0 et suivre une simple directive de mise à niveau. Plus précisément, il n'y aura pas de redémarrage à partir d'un état propre et nous resterons avec la même instance StarkNet, ce qui signifie qu'il n'y aura pas besoin d'une migration**.**

Le plan de la Régenèse est de préserver pleinement l'état des applications et de ne pas encourir de temps d'arrêt aux demandes. Ainsi, les applications qui suivent les directives que nous fournirons pourront être lancées immédiatement sur le réseau StarkNet Alpha Mainnet sans aucune perturbation de leur fonctionnement et de leurs utilisateurs pendant le processus Regenesis. e s'engage à travailler avec la communauté et à fournir tout le soutien nécessaire pour rendre ce processus aussi fluide que possible.

Nous prenons cette direction à la suite de discussions approfondies avec la communauté, qui comprenaient une suggestion importante de l'équipe de Software Mansion.

### Pourquoi la régenèse?

#### Le Caire 1.0 et la Sierra

La principale motivation de la Régenèse est de tirer parti des nouvelles possibilités offertes par le Caire 1. — à savoir les séquenceurs de protection DOS, la résistance à la censure et la mesure du gaz, qui sont essentiels pour StarkNet en tant que réseau décentralisé.

Le Caire 1.0 garantit que chaque transaction peut être prouvée. Ceci permettra à StarkNet d'inclure les transactions annulées dans les blocs, et de générer une preuve de leur exécution. Ce mécanisme permettra aux séquenceurs d'être payés sur l'exécution de transactions annulées, augmentant la protection DOS contre les acteurs malveillants. De plus, le Cairo 1.0 prendra en charge la mesure du gaz, ce qui permettra à StarkNet de passer à un marché des frais plus intuitif. Enfin, cela permettra à StarkNet d'introduire des transactions forcées à partir de L1, et renforcera les capacités de résistance à la censure du réseau.

Pour récolter ces avantages, les contrats du Caire v0 et du Caire 1.0 ne peuvent pas être mélangés. Les déclarations incorrectes ne peuvent pas être jugées incorrectes, pas plus que le suivi de gaz, si nous avons des parties de contrats du Caire v0. Pour cela, nous devrons supprimer complètement le code Cairo v0 de l'état StarkNet, ergo Regenesis.

**Après Regenesis, nous aurons un système Starknet entièrement basé sur le Caire 1.0.**

#### Simplification du code et du protocole

StarkNet, alors qu'il est toujours dans Alpha, a déjà subi de nombreux changements. Chaque version modifiait jusqu'à présent la structure de l'OS, des blocs et des transactions. Cela a fait que certains du code sont obsolètes. Pourtant, les nœuds complets et les fournisseurs d'infrastructure (comme les indexeurs et les explorateurs d'état) doivent être au courant, et implémenter, tous les comportements passés des versions Alpha de StarkNet afin de se synchroniser avec l'état en toute confiance. Sans Regenesis, ce fardeau pourrait être un moyen de dissuasion majeur pour les développeurs qui envisageraient de construire de tels services pour StarkNet.

Par conséquent, avant de passer à la production, et en tant que préparation à un monde décentralisé avec de nombreux outils d’infrastructure, nous avons l’intention de réduire la complexité du protocole. Nous y parviendrions en n'exigeant pas des infrastructures futures pour exécuter n'importe quel StarkNet 0. , et marquer le premier bloc après la période de transition comme point de genèse.

### Wen Regenesis ? La chronologie globale

Regenesis suivra la sortie du Caire 1.0, qui devrait avoir lieu d'ici la fin 2022. Durant le premier trimestre 2023, StarkNet sera mis à jour pour supporter le Caire 1. , et nous avons pour objectif de migrer vers un réseau entièrement basé sur le Cairo 1.0 à la fin de Q1.

**Les utilisateurs et les applications devront effectuer la transition durant cette période.**

![](/assets/1_ef85shzd2uudwex-cy8wdg-1.png)

### Alors que dois-je savoir ?

Les développeurs d'applications doivent être conscients des aspects suivants autour de Regenesis :

1. Assurez-vous que votre contrat est prêt pour la mise à niveau. Les détails techniques du plan sont partagés sur le[Forum Communautaire StarkNet](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080). Une fois que les détails seront finalisés, nous partagerons une ligne directrice concise.
2. Assurez-vous que vous êtes prêt à porter votre code vers Cairo 1.0. Voir la section suivante pour tous les détails les plus récents.

#### Porter votre contrat vers le Caire 1.0

Le Cairo 1.0 a de grandes promesses pour les développeurs de StarkNet. Une amélioration par rapport au Caire existant qui sera plus sûre, meilleure et plus facile pour écrire des contrats, avec une syntaxe améliorée, un système de type complet (uint256 natif de n'importe qui? et plus encore. Les développeurs seront tenus de porter leurs contrats StarkNet existants à la syntaxe Cairo 1.0. Cependant, comme la logique et la structure du code resteront les mêmes, cet effort devrait être négligeable par rapport à l'effort qu'il a fallu pour développer l'application en premier lieu.

Dans ce contexte, il est intéressant de noter que vous pouvez choisir de revérifier la version Cairo 1.0 de votre application. Si votre application a déjà été audité par le passé, le processus de réaudit sera considérablement moins cher et plus simple, puisque les auditeurs sont déjà familiers avec votre logique.

Nous publierons toute la documentation autour du Caire 1.0, ainsi que des tutoriels et des ateliers durant le quatrième trimestre 2022.

### Je suis un utilisateur StarkNet. Que dois-je faire?

En tant qu'utilisateur, vous devrez probablement effectuer quelques actions pendant la Régenèse. Au minimum, vous devrez mettre à niveau votre contrat de compte. Ne pas faire cela pendant la période de transition (de quelques mois) entraînera la perte de votre compte. Selon le chemin de mise à jour choisi par les développeurs des applications StarkNet que vous utilisez, vous devrez peut-être prendre des mesures supplémentaires.

Nous rappelons à tous que StarkNet est encore en phase Alpha, et les utilisateurs doivent rester attentifs aux communications de StarkNet et des applications qu'ils utilisent. Il est de votre responsabilité de vous assurer que vous effectuez une mise à jour rapide vers le nouveau système. *Être un adopteur précoce n'est pas toujours facile, et nous comptons sur vous pour faire votre part !*

### En finir avec

Le Cairo 1.0 est tout près de chez nous, offrant de nombreux avantages et améliorations intéressants à StarkNet et à ses développeurs. Pour les récolter, il faut un événement de régenèse du réseau. Heureusement, nous avons en tête un design qui rend ce processus le moins perturbant — complètement transparent pour les utilisateurs, et assez simple pour les applications.

Nous vous encourageons à participer à la[discussion de la communauté](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080)et à partager vos commentaires et vos préoccupations, En plus de rester au courant des étapes que vous devrez suivre en tant que développeur d'applications sur StarkNet.