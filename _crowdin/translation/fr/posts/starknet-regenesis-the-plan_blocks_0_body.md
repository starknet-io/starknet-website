### TL;DR

* Nous partageons un plan détaillé pour Regenesis, qui a été façonné par de longues discussions avec la communauté Starknet. Remerciements particuliers à Kuba@SWM.
* Regenesis suivra la sortie de Cairo 1.0, rendant le système plus sûr en permettant des contrats Starknet plus simples et plus sûrs
* Les utilisateurs doivent être prêts à mettre à jour leur portefeuille pendant la phase de transition
* Les développeurs devront transférer leurs contrats vers Cairo 1.0

### Introduction

Starknet Alpha progresse vers Regenesis, une étape importante vers la production. Dans cette mise à jour, nous souhaitons partager plus de détails sur la principale motivation de Regenesis -[Cairo 1.0](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)- et commencer à expliquer ce qu'il exigera des utilisateurs et des développeurs. Après Regenesis, Starknet ne fonctionnera qu'avec les contrats basés sur Cairo 1.0 et partira d'un nouveau bloc de genèse avec l'état existant.

Qu'est-ce que Regenesis exigera des utilisateurs ? Une simple mise à jour de leur portefeuille. Qu'exigera-t-il des constructeurs des dapps de Starknet ? Porter leurs contrats vers Cairo 1.0 et suivre une simple directive de mise à niveau. Plus précisément, il n'y aura pas de redémarrage à partir d'un état propre et nous resterons avec la même instance Starknet, ce qui signifie qu'il n'y aura pas besoin de migration**.**

Le plan Regenesis est de préserver pleinement l'état des applications et de ne subir aucun temps d'arrêt des applications. Ainsi, les applications qui suivent les directives que nous fournirons pourront être lancées sur Starknet Alpha Mainnet immédiatement sans aucune perturbation de leur fonctionnement et de leurs utilisateurs pendant le processus de regénèse. Nous nous engageons à travailler avec la communauté et à fournir tout le support nécessaire pour rendre ce processus aussi fluide que possible.

Nous prenons cette direction à la suite de discussions approfondies avec la communauté, qui comprenaient une suggestion importante de l'équipe de Software Mansion.

### Pourquoi Regenesis ?

#### Le Caire 1.0 et Sierra

La principale motivation de Regenesis est de capitaliser sur les nouvelles possibilités apportées par Cairo 1.0, à savoir la protection des séquenceurs DOS, la résistance à la censure et la mesure du gaz, qui sont essentielles pour Starknet en tant que réseau décentralisé.

Cairo 1.0 garantira que chaque transaction peut être prouvée. Cela permettra à Starknet d'inclure les transactions annulées dans des blocs et de générer une preuve de leur exécution. Ce mécanisme permettra aux séquenceurs d'être payés sur l'exécution des transactions annulées, augmentant la protection DOS contre les acteurs malveillants. De plus, Cairo 1.0 prendra en charge le comptage du gaz, ce qui permettra à Starknet de passer à un marché payant plus intuitif. Enfin, cela permettra à Starknet d'introduire des transactions forcées à partir de L1 et améliorera les capacités de résistance à la censure du réseau.

Pour profiter de ces avantages, les contrats Cairo v0 et Cairo 1.0 ne peuvent pas être mélangés. Des déclarations incorrectes ne peuvent pas être prouvées comme étant incorrectes, et le suivi du gaz ne peut pas non plus se produire, si nous avons des morceaux de contrats Cairo v0. À cette fin, nous devrons éliminer complètement le code Cairo v0 de l'état Starknet, ergo Regenesis.

**Après Regenesis, nous aurons un système Starknet entièrement basé sur Cairo 1.0.**

#### Simplification du code et du protocole

Starknet, alors qu'il était encore en Alpha, a déjà subi de nombreux changements. Jusqu'à présent, chaque version a modifié le système d'exploitation Starknet, les blocs et la structure des transactions. Cela a rendu une partie du code obsolète. Pourtant, les nœuds complets et les fournisseurs d'infrastructure (tels que les indexeurs et les explorateurs d'état) doivent connaître et mettre en œuvre tous les comportements passés des versions Starknet Alpha afin de se synchroniser avec l'état en toute confiance. Sans Regenesis, ce fardeau pourrait être un obstacle majeur pour les développeurs qui envisageraient de créer de tels services pour Starknet.

Par conséquent, avant de passer en production, et en guise de préparation à un monde décentralisé avec de nombreuses implémentations d'outils d'infrastructure, nous avons l'intention de réduire la complexité du protocole. Nous y parviendrons en n'exigeant pas que l'infrastructure future exécute un code Starknet 0.x et en marquant le premier bloc après la période de transition comme point de genèse.

### Wen Regenesis? La chronologie globale

Regenesis suivra la sortie de Cairo 1.0, qui devrait avoir lieu d'ici la fin de 2022. Au cours du premier trimestre 2023, Starknet sera mis à jour pour prendre en charge Cairo 1.0, et nous visons à migrer vers un réseau entièrement basé sur Cairo 1.0 d'ici la fin du premier trimestre.

**Les utilisateurs et les applications devront faire la transition pendant cette période.**

![](/assets/1_ef85shzd2uudwex-cy8wdg-1.png)

### Alors, que dois-je savoir ?

Les développeurs d'applications doivent être conscients des aspects suivants concernant Regenesis :

1. Assurez-vous que votre contrat est prêt pour la mise à niveau. Les détails techniques complets du plan sont partagés sur le forum de la communauté[Starknet](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080). Une fois les détails finalisés, nous partagerons une directive concise.
2. Assurez-vous que vous êtes prêt à porter votre code vers Cairo 1.0. Voir la section suivante pour tous les derniers détails.

#### Porter votre contrat vers Cairo 1.0

Cairo 1.0 est très prometteur pour les développeurs de Starknet. Une amélioration par rapport au Cairo existant qui sera plus sûr, meilleur et plus facile pour la rédaction de contrats, avec une syntaxe améliorée, un système de type à part entière (uint256 natif quelqu'un ?) et plus encore. Les développeurs devront porter leurs contrats Starknet existants vers la syntaxe Cairo 1.0. Cependant, comme la logique et la structure du code resteront les mêmes, cet effort devrait être négligeable par rapport à l'effort qu'il a fallu pour développer l'application en premier lieu.

Dans ce contexte, il convient de noter que vous pouvez choisir de ré-auditer la version Cairo 1.0 de votre application. Si votre application a déjà été auditée dans le passé, le processus de ré-audit sera nettement moins cher et plus simple, car les auditeurs connaissent déjà votre logique.

Nous publierons toute la documentation autour de Cairo 1.0, ainsi que des tutoriels et des ateliers au cours du quatrième trimestre 2022.

### Je suis un utilisateur de Starknet. Que dois-je faire?

En tant qu'utilisateur, vous devrez probablement prendre quelques mesures pendant Regenesis. À tout le moins, vous devrez mettre à jour votre contrat de compte. Ne pas le faire pendant la période de transition (de quelques mois) entraînera la perte de votre compte. Selon le chemin de mise à niveau choisi par les développeurs des applications Starknet que vous utilisez, vous devrez peut-être prendre des mesures supplémentaires.

Nous rappelons à tous que Starknet est toujours en phase Alpha et que les utilisateurs sont tenus de rester attentifs aux communications de Starknet et des applications qu'ils utilisent. Il est de votre responsabilité de vous assurer d'effectuer la mise à jour tôt vers le nouveau système. *Être un early adopter n'est pas toujours facile, et nous comptons sur vous pour faire votre part !*

### De conclure

Cairo 1.0 est à nos portes, offrant de nombreux avantages et améliorations passionnants pour Starknet et ses développeurs. Pour les récolter, un événement de regénèse du réseau est nécessaire. Heureusement, nous avons en tête une conception qui rend ce processus peu perturbateur - complètement transparent pour les utilisateurs et assez simple pour les applications.

Nous vous invitons à participer à la discussion de la communauté[](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080)et à partager vos commentaires et préoccupations, ainsi qu'à vous tenir au courant des étapes que vous devrez suivre en tant que développeur d'applications sur Starknet.