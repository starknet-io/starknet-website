## TL;DR

* Starknet alpha V0.12.0 est déployé sur testnet
* Starknet a réalisé une augmentation remarquable de 10 fois le débit en implémentant le séquenceur dans Rust. Cela a été motivé par une étroite collaboration entre StarkWare et LambdaClass
* Une expérience utilisateur plus fluide sera fournie car le statut \`EN ATTENTE\` pour les transactions a été supprimé
* Un nouvel appel système a été introduit, permettant de récupérer facilement les hachages de blocs passés
* Starknet alpha V0.12.0 prendra en charge une nouvelle syntaxe du Caire axée sur la sécurité
* La mise à niveau du réseau vers cette version fera l'objet d'un vote communautaire, garantissant une large participation et contribution

## Introduction

Nous sommes ravis d'annoncer la sortie de Starknet Alpha V0.12.0. Cette version est une étape importante qui marquera le début d'un bond en avant majeur dans l'amélioration des performances et de l'évolutivité. Cette version est une autre étape dans le parcours de Starknet pour faire évoluer Ethereum, en mettant l'accent sur le traitement du débit et de la latence. Pour relever ces défis, nous avons ciblé le séquenceur de Starknet, car une grande partie de la limite de débit est déterminée par ses performances.\
Le développement de Starknet Alpha V0.12.0 est en grande partie le résultat d'une collaboration productive et agréable d'un an entre [LambdaClass](https://lambdaclass.com/) et StarkWare. Nous sommes fiers de construire Starknet avec l'équipe LambdaClass.

Cette version, étant majeure, sera soumise à un vote communautaire. Nous invitons la communauté à participer à façonner l'avenir de Starknet.

## Performance - Le débit est là !

Cette version se concentre sur les performances, et plus particulièrement sur l'amélioration du débit, ce qui se traduit par une augmentation significative de 10 fois. Le débit est passé d'une moyenne de 30 000 pas du Caire par seconde (CSPS) sur la v0.11.0 à un impressionnant 220 000 CSPS dans cette dernière version. Cette réalisation remarquable résulte d'optimisations ciblées qui sous-tendent l'efficacité du séquenceur Starknet, comme précédemment partagé dans notre feuille de route [performance](https://www.starknet.io/en/posts/engineering/starknet-performance-roadmap). Trois ingrédients clés ont contribué à cette amélioration des performances de Starknet : Cairo-rs, Blockifier et Papyrus, et ils bénéficient tous de la puissance de Rust.

La première amélioration du séquenceur est l'intégration de **[Cairo-rs](https://github.com/lambdaclass/cairo-vm)**, un exécuteur Cairo très efficace écrit en Rust et développé par **LambdaClass**. En tirant parti de la puissance de Rust, Cairo-rs a amélioré l'exécution des contrats Cairo, résultant en une expérience plus simple pour les utilisateurs.

De plus, l'introduction du **[Blockifier](https://github.com/starkware-libs/blockifier)**, une logique d'exécution de blocs basée sur Rust, a joué un rôle crucial dans l'amélioration du débit. En optimisant le temps d'exécution des transactions, cette implémentation a effectivement réduit les temps d'attente et atténué la congestion du réseau. L'inclusion de **[Papyrus](https://github.com/starkware-libs/papyrus)**, une solution de stockage local, a contribué à la gestion efficace de l'état local du séquenceur. Cette amélioration a encore optimisé les performances et la réactivité globales du système.

### Ce n'est que la première étape

Les optimisations du séquenceur dans cette version sont loin d'être la fin du chemin vers l'amélioration des performances.

#### cairo_native

Starknet intégrera le compilateur [cairo_native](https://github.com/lambdaclass/cairo_sierra2mlir)de LambdaClass, qui permettra l'exécution des contrats Cairo de manière plus efficace. En permettant aux contrats de s'exécuter en "code natif" tel que Rust, plutôt que de s'exécuter dans l'environnement du Caire, nous prévoyons des gains d'efficacité et de performances encore plus importants pour Starknet.

#### Parallélisation

Le précédent Pythonic Sequencer de Starknet a introduit la parallélisation [des transactions](https://www.starknet.io/en/posts/engineering/starknet-performance-roadmap), ce qui a considérablement amélioré ses performances. Cependant, il est important de noter que l'implémentation initiale de Sequencer dans Rust, incluse dans la version V0.12.0, n'inclut pas encore la parallélisation. Les efforts de développement en cours portent sur la parallélisation de l'exécution des transactions au sein du bloc, dans l'esprit du [block-STM](https://malkhi.com/posts/2022/04/block-stm/). S'appuyant sur les démonstrations réussies de l'implémentation Pythonic, cette optimisation améliorera encore le débit de Starknet, lui permettant de gérer efficacement des volumes de transactions accrus.

## Plus de transactions en attente

Dans les versions précédentes, le statut \`PENDING\` indiquait des blocs valides qui étaient exécutés par le séquenceur mais n'étaient pas encore complets, indiquant que des transactions supplémentaires pouvaient encore être ajoutées. Cependant, dans cette dernière version, le statut \`PENDING\` a été remplacé par ACCEPTED_ON_L2, reflétant le statut définitif des transactions. Ce changement simplifie le processus de confirmation des transactions et offre aux utilisateurs une expérience plus fluide. 

## appel système get_block_hash

Un autre ajout dans Starknet Alpha V0.12.0 est l'introduction de l'appel système \`get_block_hash\`. Ce nouvel appel système permet aux développeurs de récupérer le hachage d'un bloc Starknet spécifique dans la plage de \`\[first_v0_12_0_block, current_block-10]\`. La signature de ce [syscall](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/system-calls-cairo1/) est \`fn get_block_hash(u64 block_number) ->\`.

Le message d'erreur associé à ce scénario est : \`Numéro de bloc hors plage\`.

Pour implémenter ce changement, le système d'exploitation écrira, au début de chaque bloc, un mappage sous \`address = 0x1\` avec \`current_block - 10\` comme clé et son hachage correspondant comme valeur.

Avec l'appel système \`get_block_hash\`, les développeurs peuvent facilement récupérer les hachages de bloc, qui sont des composants essentiels pour construire et valider [preuves de stockage](https://www.starknet.io/en/posts/developers/what-are-storage-proofs-and-how-can-they-improve-oracles). Ces preuves permettent un accès efficace aux données inter-chaînes et améliorent la fiabilité des données de la blockchain, même sans avoir besoin de s'appuyer sur des oracles tiers. En obtenant le hachage de bloc via cet appel système, les développeurs peuvent référencer avec précision l'état d'un bloc spécifique, les transactions ou toute autre information validée dans l'en-tête de bloc [](https://docs.starknet.io/documentation/architecture_and_concepts/Blocks/header/#block_header)

## Le Caire - Syntaxe de contrat améliorée

Dans cette version, nous introduisons des améliorations significatives dans la syntaxe des contrats intelligents. La nouvelle syntaxe met l'accent sur la sécurité et pose les bases de l'extensibilité. La sécurité dans ce contexte signifie être plus explicite sur les composants externes du contrat (interface/stockage/événements), ce qui donne aux développeurs une meilleure idée de ce à quoi s'attendre lorsqu'ils interagissent avec le contrat. L'extensibilité, qui sera finalisée dans une version ultérieure, permet aux contrats d'utiliser des composants de bibliothèques externes. Il s'agit d'une caractéristique clé de tout langage de contrat intelligent et résoudra un problème important dans la communauté des développeurs de Starknet. Pour un traitement exhaustif de la motivation et des changements, voir le blog [Cairo Roadmap post](https://www.starknet.io/en/posts/ecosystem/cairo-roadmap-join-the-ride) et le [forum communautaire post](https://community.starknet.io/t/cairo-1-contract-syntax-is-evolving/94794).

Bien que la [nouvelle version du compilateur](https://github.com/starkware-libs/cairo/releases/tag/v2.0.0-rc0) inclut des changements de rupture, **vous pouvez continuer à utiliser l'ancienne version du compilateur (v1.1.0) et déployer les contrats résultants sur Starknet pendant les six prochains mois**. Cela reflète notre nouveau protocole de mise à jour du compilateur pour les changements cassants : après les nouvelles versions du compilateur, les contrats compilés par l'ancienne version du compilateur continueront d'être acceptés pendant au moins six mois, afin de permettre à la communauté de s'adapter. Bien sûr, une fois qu'un contrat Cairo (et non Cairo 0) est déclaré sur Starknet, il restera disponible pour le déploiement et l'interaction indéfiniment.

## Et après?

### Objectifs à court terme : Version 0.12.1

À court terme, Starknet se concentre sur l'amélioration de l'expérience utilisateur et de la fiabilité des transactions. La prochaine version, 0.12.1, introduira une autre amélioration significative : l'inclusion des transactions ayant échoué dans le bloc. Jusqu'à présent, les transactions ayant échoué n'étaient pas incluses dans le bloc, et le séquenceur ne pouvait donc pas facturer de frais et avancer le nonce pour elles. Cela a créé des problèmes UX pour les développeurs. Ils ne pouvaient pas compter sur l'avancement du nonce, les obligeant à surveiller en permanence l'état de la transaction avant d'en envoyer une nouvelle. Cette modification protège également le séquenceur des utilisateurs qui spamment le système avec des transactions échouées sans les payer. Cette mise à jour vise à fournir aux utilisateurs une expérience plus fluide et plus transparente lors de l'interaction avec Starknet.

### Vision à long terme : débit, latence et coûts

[Pour l'avenir](https://www.starknet.io/en/roadmap), la vision globale de Starknet est d'atteindre une évolutivité substantielle à la fois en termes d'échelle et de coût. La prochaine priorité à l'ordre du jour est de réduire considérablement les coûts de transaction.

En réduisant les coûts, Starknet vise à rendre les transactions plus abordables et inclusives, permettant ainsi un plus large éventail de cas d'utilisation et responsabilisant les développeurs et les utilisateurs. L'engagement de réduction des coûts s'aligne sur la mission de Starknet de fournir une infrastructure évolutive, flexible et rentable pour les applications décentralisées.

## Starknet Alpha V0.12.0 Voter

[Starknet Governance Phase 1](https://medium.com/starknet-foundation/starknets-governance-first-phase-4614c7566f40) se concentre sur les principales mises à jour du protocole Starknet.\
Chaque mise à niveau majeure de la version de Starknet est d'abord déployée sur Testnet, donnant à la communauté Starknet quelques jours pour examiner et tester la version mise à niveau. Au cours de cette période d'examen, une proposition d'instantané est ouverte, permettant à la communauté de voter pour approuver ou non la version mise à niveau pour le déploiement de Mainnet.

Si la proposition obtient une majorité de votes "OUI" pendant la période de vote, elle est acceptée et Starknet Mainnet sera mis à jour en conséquence.

Le vote Starknet Alpha V0.12.0 approche à grands pas !\
Tout le monde est invité à s'inscrire au service de notification sur l'espace [Snapshot de Starknet.](https://snapshot.org/#/starknet.eth/proposal/0x00889bc468509610e516e8602f00b21ca8c32466dd4f0140eca38becb7f40bef) Consultez le fil de discussion sur le profil [délégués](https://community.starknet.io/t/delegate-profile-thread/4049) & la découverte des [délégations](https://delegate.starknet.io/)pour devenir délégué ou en sélectionner un, et discutez de la proposition [Starknet alpha v0.12.0](https://community.starknet.io/t/proposal-starknet-alpha-v0-12-0/95997) sur le forum de la communauté.

## Résumé

Starknet Alpha V0.12.0 se concentre sur l'amélioration des performances et de l'expérience utilisateur. La nouvelle version introduit une implémentation basée sur Rust du séquenceur, améliorant le débit de 10 fois et réduisant la latence des transactions. Les autres fonctionnalités incluent une nouvelle version du compilateur, la suppression du statut de transaction en attente et l'ajout d'un appel système de hachage de bloc. 

Les développeurs de Starknet sont habilités à coder des solutions qui font la différence. Commencez votre parcours de développement Cairo [](https://twitter.com/Starknet/status/1674689343758168065?s=20), lisez les [documentations Cairo](https://www.cairo-lang.org/docs/), inscrivez-vous à [Cairo Basecamp](https://docs.google.com/forms/d/e/1FAIpQLSf2k9vjPpeymbUpJMRDuN3QqNcHtjWx8whX2wY4EbihF1EaPg/viewform)ou suivez [les didacticiels](https://www.starknet.io/en/tutorials). Vous voulez rester à jour avec toutes les mises à jour de version ? Inscrivez-vous à notre newsletter [Starknet Developers](https://starknet.substack.com/).