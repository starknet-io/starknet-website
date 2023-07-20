## TL;DR

* Le Caire continue d'évoluer. Pour la commodité de la communauté, nous avons créé un tableau public décrivant les fonctionnalités intéressantes à venir.
* Une nouvelle syntaxe de contrat sera bientôt lancée avec Starknet alpha v0.12.0, nécessitant des modifications de code minimales et enrichissant considérablement le langage de contrat intelligent.
* Avec Cairo 1.1.0 sur Starknet Mainnet et l'arrivée prochaine de la v2 sur Starknet, nous avons franchi une étape importante dans la maturité du langage. Entre les [docs](https://cairo-lang.org/docs/v1.0/), [book](https://cairo-book.github.io/title-page.html)et le Starknet [discord](https://discord.gg/qypnmzkhbc), vous devriez avoir suffisamment de ressources pour démarrer et migrer depuis Cairo 0.



## Introduction

Cairo v1 a considérablement évolué depuis ses débuts alpha, atteignant la parité des fonctionnalités avec Cairo 0 et accumulant de nouvelles fonctionnalités en plus (des boucles de base sont désormais disponibles et de nombreuses autres fonctionnalités sont en cours). Notre objectif dans cet article est de faire la lumière sur la feuille de route à court terme du Caire : ce sur quoi nous travaillons actuellement et ce à quoi les développeurs peuvent s'attendre dans les semaines et les mois à venir. À l'avenir, vous pourrez vous tenir au courant des derniers développements ou projets concernant la langue en suivant le tableau de bord [cairo-roadmap](https://github.com/orgs/starkware-libs/projects/1/views/1) sur Github.



## Pourquoi Le Caire ?

Parallèlement aux avancées majeures dans le langage de haut niveau, nous pensons qu'il est important de souligner l'avantage fondamental du Caire, et pourquoi nous pensons que c'est le fondement de l'avenir de la mise à l'échelle de la blockchain. 

Dès sa création, Cairo a été conçu dans le seul but d'être le langage le plus efficace pour écrire des programmes démontrables. L'architecture de la machine virtuelle Cairo, telle que décrite [dans l'article original](https://eprint.iacr.org/2021/1063.pdf), a été conçue pour générer efficacement des preuves STARK pour l'exécution des programmes Cairo, ce qui en fait la base idéale pour les Validity Rollups. Cairo v2, le nouveau langage de type rouille que nous avons aujourd'hui, est construit sur ces fondations, mais conçu pour servir une large communauté de développeurs, en termes d'ergonomie, de sécurité et de facilité d'apprentissage et d'écriture. L'évolution que Cairo a connue au cours des deux dernières années l'a transformé d'un langage de niche de bas niveau en un langage de haut niveau convivial pour les développeurs, qui offre un avantage en matière de preuves et d'efficacité de mise à l'échelle.

## Dites simplement Le Caire

Ne dites plus "Cairo 1 - version du compilateur vX.YZ". À partir de maintenant, dites simplement Le Caire. Yaï ! 

Avec le nouveau compilateur Cairo, nous suivons la norme [version sémantique](https://semver.org/) ; c'est-à-dire que les versions du compilateur se composent de trois chiffres et qu'un changement dans le chiffre le plus significatif indique des changements avec rupture. Avec la prochaine version de Cairo, nous avons des changements de rupture dans la syntaxe du contrat intelligent (décrit plus loin dans le post), donc la bonne chose à faire est de faire passer la version à Cairo v2. Pour éviter les notations fastidieuses, nous arrêterons de dire Cairo 1, et désormais, identifierons la version du langage avec la (seule) version du compilateur. La langue d'origine, qui pourrait encore être utilisée à l'avenir dans différents contextes en dehors de Starknet, sera appelée "Cairo 0".

![](/assets/screenshot-2023-06-29-at-17.04.49.png)

## Quelle est la prochaine étape pour Le Caire ?

Dans les sections suivantes, nous passons en revue les développements majeurs à venir dans le langage et expliquons comment ils affectent l'expérience des développeurs au Caire.

### Fonctionnalités à venir

Bien que la parité des fonctionnalités avec Cairo 0 ait été une étape importante, ce n'est certainement pas la destination finale. Le langage de haut niveau peut toujours être amélioré et de nombreuses autres fonctionnalités sont en cours de développement. Vous pouvez consulter la feuille de route [](https://github.com/orgs/starkware-libs/projects/1/views/1) pour voir les fonctionnalités sur lesquelles vous travaillez et suivre le backlog. Quelques mentions notables sont :

* **Composants**: la phase suivante de la nouvelle syntaxe des contrats, permettant aux contrats d'importer des composants définis dans des bibliothèques externes
* **Keccak et Secp-k1**: Déjà inclus dans Cairo v2, ceux-ci permettront de vérifier les signatures Ethereum sur la prochaine version de Starknet.
* **Prise en charge des entiers signés**
* **Opérations de courbe Secp-r1**: Cela permettra d'utiliser du matériel natif pour signer des transactions, ce qui se traduira par une UX beaucoup plus simple pour interagir avec Starknet
* **Strings**: Un type natif pour les chaînes (longues), permettant la manipulation standard des chaînes. Il s'agit d'une fonctionnalité de base, qui est également très demandée par les projets NFT et de jeux.
* **Iterators**: ceux-ci nous permettront d'enrichir la syntaxe de la boucle et d'itérer sur les tableaux/spans beaucoup plus facilement



### Cairo v2 - Nouvelle syntaxe de contrat

La syntaxe actuelle du contrat intelligent de Starknet hérite principalement de la conception précédente de Cairo 0. Cette conception souffre de quelques problèmes que nous aimerions résoudre. Notre objectif en passant à une nouvelle syntaxe est d'augmenter la sécurité en rendant le comportement du contrat plus explicite. En introduisant plus de structure dans les fonctions externes, le stockage et les événements du contrat, nous pouvons réduire considérablement la probabilité de bogues. Cela aidera à protéger les protocoles contre les piratages potentiels et la perte de fonds. De plus, la nouvelle syntaxe nous permet d'introduire l'extensibilité **, une fonctionnalité très demandée par la communauté, qui permet aux développeurs d'utiliser facilement des composants écrits dans des bibliothèques externes.

La nouvelle syntaxe nécessite des modifications avec rupture. Bien que nous choisissions d'éviter autant que possible de casser les changements à ce stade, après des discussions internes et communautaires, nous avons conclu que c'est la bonne voie qui rapportera des dividendes à l'avenir.

Ces changements sont longuement discutés dans un article [plus technique](https://community.starknet.io/t/cairo-1-contract-syntax-is-evolving/94794/20) qui a été publié sur le forum de la communauté (consultez-le pour un aperçu complet des changements à venir). Ici, nous voudrions seulement souligner que **seule la « couche la plus externe » de votre contrat (définition des fonctions externes et des événements) doit être modifiée**. Votre code Cairo v1 existant ne nécessite que des ajustements mineurs (voir la documentation pour un guide de migration rapide [](https://docs.starknet.io/documentation/architecture_and_concepts/Cairo_on_Starknet/contract-syntax/)). L'avantage de la nouvelle syntaxe, en revanche, est très important : l'utilisation de composants provenant de bibliothèques externes (une fonctionnalité essentielle lorsque vous travaillez sur de grands projets) deviendra banale et ne nécessitera plus de solutions de contournement ad hoc.

### Garantie de rétrocompatibilité

Certains des changements à venir décrits dans l'article (en particulier, la nouvelle syntaxe du contrat) entraîneront des changements de rupture dans le langage. Alors que, après Cairo v2, l'essentiel des changements de rupture est derrière nous, s'engager pour la rétrocompatibilité à partir de maintenant est encore trop tôt. Cela dit, les projets développant des contrats intelligents au-dessus de Starknet nécessitent de la stabilité et un audit minutieux, et cela présente une considération importante pour nous. Pour répondre à ces préoccupations, nous fournissons les garanties de stabilité suivantes :

1. Toute classe déclarée sur Starknet continuera à fonctionner comme avant et ne sera pas affectée par les changements de langue
2. Tout contrat déployé sur Starknet continuera à fonctionner comme avant et ne sera pas affecté par les changements de langue
3. Pour chaque mise à niveau de langue de rupture, les contrats écrits dans la version précédente continueront d'être déclarables sur Starknet pendant une période d'au moins six mois.

Par exemple, si vous développez votre projet (ou êtes sur le point de le déployer / pendant la phase d'audit) avec la version X de Cairo, et que Cairo Y est publié avec des modifications majeures, ** contrats écrits avec la version X seront toujours acceptés sur Starknet pendant au moins six mois**. Autrement dit, vous disposez d'une période d'au moins six mois pour déployer vos contrats sur Starknet, après quoi ils sont protégés à jamais par les points 1 & 2.

## Quand dois-je migrer ?

Avec la nouvelle syntaxe de contrat publiée (et rendue disponible sur Starknet dans la prochaine version 0.12.0) et le gros des changements de rupture derrière nous, Cairo est maintenant suffisamment stable et riche pour prendre en charge des applications complexes et pour porter la logique Cairo 0 existante. De plus, les garanties de compatibilité descendante sur Starknet garantissent que même s'il y a des changements de rupture dans la langue, vous aurez suffisamment de temps (au moins six mois) pour terminer le développement ou l'audit et le déploiement de vos contrats.

## Résumé

Le Caire continue d'évoluer et a atteint un point où il contourne largement la langue d'origine. Si vous ne l'avez pas déjà fait, c'est le moment de vous impliquer. Nous invitons la communauté des développeurs à participer activement aux discussions, soit directement sur le référentiel du compilateur [](https://github.com/starkware-libs/cairo) en soulevant des problèmes, soit en postant sur le canal discord [du caire](https://discord.gg/qypnmzkhbc) ou sur le forum de la communauté Starknet [](https://community.starknet.io/latest). Espérons que ce message (aux côtés de son homologue plus technique [](https://docs.google.com/document/d/1qemNmIWYuYyVg0f9J_SO6SqGQVDPOBVt10wXH0rrT_U/edit#)) a aidé à faire la lumière sur les changements attendus et à lever une grande partie du doute sur l'avenir du Caire.