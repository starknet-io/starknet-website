### TL;DR

* La première version de Cairo 1.0 est arrivée !
* Les développeurs peuvent commencer à écrire et à tester les programmes Cairo 1.0
* La parité des fonctionnalités avec l'ancienne version de Cairo sera atteinte dans les prochaines semaines
* La prise en charge des contrats StarkNet sera ajoutée dans la prochaine version StarkNet Alpha

### Arrière-plan

Nous sommes ravis d'annoncer que la première version publique de Cairo 1.0 est maintenant disponible. Cela marque une étape majeure dans l'évolution de Cairo, qui a été introduit pour la première fois en 2020 en tant que langage de programmation complet de Turing pour écrire efficacement des programmes prouvables par STARK. Cairo 1.0 est un langage de haut niveau de type Rust. Comme Rust, il est destiné à permettre aux développeurs d'écrire facilement du code efficace et sûr.

Depuis sa création, Cairo a été utilisé pour créer des applications de couche 2 qui ont traité[plus de 790 milliards de dollars de transactions, traité plus de 300 millions de transactions et émis plus de 90 millions de](https://dashboard.starkware.co/starkex), toutes effectuées hors chaîne et réglées sur Ethereum avec le intégrité mathématique garantie par les preuves STARK. Cairo est devenu le 4ème langage de programmation le plus utilisé dans l'écosystème blockchain[](https://defillama.com/languages)au sens large. Avec la sortie de Cairo 1.0, nous visons à rendre le langage encore plus accessible et convivial tout en introduisant de nouvelles fonctionnalités qui améliorent la sécurité et la commodité.

L'un des changements les plus significatifs de Cairo 1.0 est la syntaxe. Nous nous sommes inspirés de**Rust**pour créer un langage plus convivial pour les développeurs, plus facile à lire et à écrire. La nouvelle version de Cairo permet d'écrire du code plus sûr (fortement typé, propriété et emprunt, etc.), tout en étant plus expressif.

Cairo 1.0 introduit également Sierra, une nouvelle représentation intermédiaire qui garantit que****exécution de Cairo peut être prouvée. Cela rend Cairo 1.0 particulièrement bien adapté à une utilisation dans un réseau sans autorisation comme StarkNet, où il peut fournir une protection DoS robuste et une résistance à la censure. Vous pouvez en savoir plus sur Sierra dans notre[précédent](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)post.

## Premier goût!

### Que pouvez-vous faire aujourd'hui ?

Les développeurs peuvent commencer à écrire, compiler et tester les programmes Cairo 1.0 ! Nous encourageons les développeurs à commencer à expérimenter Cairo 1.0 et à s'habituer à la nouvelle syntaxe et aux nouvelles fonctionnalités.

Étant donné que Cairo 1.0 est toujours activement développé et que de nouvelles fonctionnalités sont constamment ajoutées, consultez le référentiel[Cairo](https://github.com/starkware-libs/cairo/)pour les dernières mises à jour.

### Et après?

Pour le moment, Cairo 1.0 manque encore de certaines des fonctionnalités prises en charge dans l'ancienne version de Cairo ([voir ce tableau pour plus de détails](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)). Notre prochaine étape, attendue dans les prochaines semaines, fournira la parité des fonctionnalités de Cairo 1.0 avec l'ancienne version. Vous pouvez suivre la progression vers ce jalon[ici](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md).

### Assistance Starknet

L'écriture de contrats StarkNet dans Cairo 1.0 est prise en charge (bien que certaines fonctionnalités manquent encore). Cependant, StarkNet ne prend pas encore en charge le déploiement et l'exécution des contrats Cairo 1.0. StarkNet Alpha V0.11.0, prévu dans les semaines à venir, introduira la possibilité de déployer et d'exécuter des contrats Cairo 1.0. La mise à niveau vers la v0.11.0 marquera le début de la période de transition vers un système qui exécute uniquement les contrats Cairo 1.0. Cette Période de Transition se terminera avec la[Regenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4), attendue quelques mois plus tard.

![](/assets/0_odxbxeacqdwizlfw.jpg)

### Construisons!

L'objectif de StarkNet est de faire évoluer Ethereum de manière exponentielle en utilisant l'intégrité mathématique des STARK, et l'objectif de Cairo est de rendre cette échelle exponentielle accessible aux développeurs. L'accessibilité signifie un langage de programmation efficace, facile à lire et à écrire et sûr à utiliser. Nous espérons que la sortie de Cairo 1.0 incitera encore plus de développeurs à rejoindre StarkNet et à faire évoluer Ethereum pour répondre à la demande mondiale.