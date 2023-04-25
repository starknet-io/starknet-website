### TL;DR

* La première version du Cairo 1.0 est là !
* Les développeurs peuvent commencer à écrire et à tester les programmes Cairo 1.0
* La parité avec l'ancienne version du Caire sera atteinte dans les semaines à venir
* La prise en charge des contrats StarkNet sera ajoutée dans la prochaine version Alpha de StarkNet

### Arrière-plan

Nous sommes heureux d'annoncer que la première version publique du Cairo 1.0 est maintenant disponible. Cela marque un jalon majeur dans l'évolution du Caire, qui a été introduite pour la première fois en 2020 en tant que langage de programmation Turing-complete pour l'écriture efficace de programmes STARK éprouvés. Le Cairo 1.0 est un langage de haut niveau ressemblant à la Rust. Comme Rust, il est conçu pour permettre aux développeurs d'écrire facilement du code efficace et sûr.

Depuis sa création, le Caire a été utilisé pour construire des applications Layer-2 qui ont[géré](https://dashboard.starkware.co/starkex)de transactions d'une valeur de plus de 790 milliards de dollars, a traité plus de 300 millions de transactions et a frappé plus de 90 millions de NFTs, toutes exécutées hors chaîne et installées sur Ethereum avec l'intégrité mathématique garantie par les preuves STARK. Le Caire est devenu le quatrième langage de programmation le plus utilisé dans l'écosystème de la blockchain[](https://defillama.com/languages)en général. Avec la sortie du Caire 1. , nous visons à rendre le langage encore plus accessible et convivial tout en introduisant de nouvelles fonctionnalités qui améliorent la sécurité et la commodité.

L'un des changements les plus significatifs du Caire 1.0 est la syntaxe. Nous nous sommes inspirés de**Rust**pour créer un langage plus convivial pour les développeurs qui soit plus facile à lire et à écrire. La nouvelle version du Cairo permet d'écrire un code plus sûr (fortement tapé, propriété et emprunt, etc.), tout en étant plus expressif.

Le Caire 1.0 introduit également la Sierra, une nouvelle représentation intermédiaire qui assure**chaque**run du Caire peut être prouvée. Cela rend le Cairo 1.0 particulièrement bien adapté pour une utilisation dans un réseau sans autorisation comme StarkNet, où il peut fournir une protection DoS robuste et une résistance à la censure. Vous pouvez en savoir plus sur la Sierra dans notre post[précédent](https://medium.com/starkware/cairo-1-0-aa96eefb19a0).

## Premier goût !

### Que pouvez-vous faire aujourd'hui?

Les développeurs peuvent commencer à écrire, compiler et tester les programmes Cairo 1.0 ! Nous encourageons les développeurs à commencer à expérimenter avec Cairo 1.0 et à s'habituer à la nouvelle syntaxe et aux nouvelles fonctionnalités.

Puisque le Cairo 1.0 est toujours activement développé et que de nouvelles fonctionnalités sont constamment ajoutées, consultez le[dépôt Cairo](https://github.com/starkware-libs/cairo/)pour les dernières mises à jour.

### Et ensuite?

Pour l'instant, le Caire 1. manque encore certaines des fonctionnalités supportées dans l'ancienne version du Cairo ([voir ce tableau pour plus de détails](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)). Notre prochain jalon, prévu dans les prochaines semaines, fournira la parité de fonctionnalité du Cairo 1.0 avec la version précédente. Vous pouvez suivre la progression vers ce jalon[ici](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md).

### Support de Starknet

L'écriture de contrats StarkNet dans le Cairo 1.0 est prise en charge (bien que certaines fonctionnalités manquent toujours). Cependant, StarkNet ne supporte pas encore le déploiement et l'exécution des contrats du Caire 1.0. StarkNet Alpha V0.11.0, prévu dans les semaines à venir, introduira la possibilité de déployer et de gérer les contrats du Cairo 1.0. La mise à niveau vers la version 0.11.0 marquera le début de la période de transition vers un système qui exécute uniquement les contrats du Caire 1.0. Cette période de transition se terminera avec la[Régenèse](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4), attendue quelques mois plus tard.

![](/assets/0_odxbxeacqdwizlfw.jpg)

### Nous allons construire !

Le but de StarkNet est de mettre à l'échelle exponentielle Ethereum en utilisant l'intégrité mathématique des STARKs, et l'objectif du Caire est de rendre cette échelle exponentielle accessible aux développeurs. L'accessibilité signifie un langage de programmation efficace, facile à lire et à écrire et sécuritaire à utiliser. Nous espérons que la sortie du Cairo 1.0 inspirera encore plus de développeurs à rejoindre StarkNet et scale Ethereum pour répondre à la demande mondiale.