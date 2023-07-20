Cet article traitera de la feuille de route de Starknet pour 2023 et fournira de la couleur sur les considérations qui la motivent. La feuille de route se concentre sur la performance et l'UX.\
Nous visons à fournir à la communauté la transparence dont elle a besoin, et partageons donc la feuille de route le plus tôt possible. Naturellement, partager la feuille de route dès le début signifie également que les choses peuvent changer.

Nous tenons à exprimer notre gratitude à la communauté des développeurs de Starknet, et au[Builders Council](https://community.starknet.io/t/starknet-builders-council-mission-statement/4045)en particulier, pour avoir fourni des informations et des commentaires inestimables dans la définition de cette feuille de route. Un merci spécial à Sylve de briq, Federico de LambdaClass et Jorik de Nethermind pour leurs précieux commentaires. Nous invitons la communauté à continuer de faire partie de cet important processus.

## Le voyage de Starknet

Starknet a été conçu pour permettre aux développeurs d'exploiter la puissance de STARK et de Cairo afin de créer leur application. Jusqu'à présent, le développement de Starknet s'est concentré sur la fourniture aux développeurs d'une fonctionnalité*à l'épreuve du temps.*La fonctionnalité de Starknet, alimentée par Cairo 1.0, est maintenant presque complète, à l'exception de Regenesis.

## Regenèse

Starknet passera par Regenesis cette année. Ce sera un événement transparent pour le réseau, car il entraînera**non**temps d'arrêt et avec**non**réinitialisation de l'état du réseau.

**Les contrats Fresh Cairo 1.0 ne nécessiteront aucune action - pour eux, Regenesis est un non-événement.**\
Les contrats Cairo 0 devront terminer la transition vers Cairo 1.0. La regénèse, où Cairo 0 sera fermé, ne se produira qu'après que nous nous serons assurés que la part du lion de la communauté a pu mener à bien cette transition.\
La Regenesis sera le dernier changement de rupture prévu sur la feuille de route de Starknet, et nous nous attendons à ce que tout futur changement de rupture soit approuvé par des décisions de gouvernance, comme c'est le cas dans Ethereum.

Ou pour expliquer Regenesis en utilisant Cairo 1.0 lui-même :

![](/assets/regenesis-image-.webp)

## Feuille de route pour 2023

Le développement actuel de Starknet se concentre sur la performance*et l'UX*. Voici un échéancier estimé :

![](/assets/roadmap-timeline-2023-image-.webp)

#### Performance

Notre objectif principal pour les mois à venir est d'améliorer les performances du réseau afin de soutenir l'augmentation attendue du nombre d'utilisateurs et de développeurs. Selon nous, les performances sont définies par le débit et la latence, bien sûr, mais aussi par le coût de transaction.\
Nous énumérons ici les domaines d'intérêt par priorité et (si possible) indiquons la version prévue pour leur publication.

#### Débit & Latence

Le prochain Starknet v0.12.0 intégrera des améliorations significatives en matière de débit et de latence. Ceci est le résultat des travaux menés au cours des six derniers mois pour Rust-ifier la pile Starknet. Cette version comprendra la transition vers un séquenceur basé sur Rust (développé par StarkWare) et la nouvelle machine virtuelle Rust-Cairo ([cairo-rs](https://github.com/lambdaclass/cairo-rs), développée par LambdaClass) — deux projets open source. Nous prévoyons d'avoir bientôt des critères de performance.

Cette transition réduira considérablement le temps d'exécution des blocs et augmentera donc le débit. En l'absence de congestion, nous nous attendons également à des améliorations de la latence des transactions, car la principale cause de la latence est le temps d'exécution des blocs.

Un débit plus élevé et une latence plus faible resteront une priorité absolue, même après la v0.12.0, et le travail pour les améliorer deviendra un pilier du développement de Starknet.

#### Coût de transaction

Dans la v0.13.0, les coûts de transaction de Starknet seront considérablement réduits. Cela se fera en ciblant la principale composante du coût de transaction : le coût des données L1 (Ethereum), qui représente aujourd'hui 95 % du coût de la transmission. Volition permettra aux développeurs de créer des applications Starknet avec un mode hybride de disponibilité des données (DA) : données en chaîne et hors chaîne. Un article dédié à Volition est à venir, avec tous les détails sur ses interfaces de conception et de développement.

[EIP-4844](https://eips.ethereum.org/EIPS/eip-4844)(Shard Blob Transaction) d'Ethereum est attendue au quatrième trimestre 2023. Starknet s'adaptera pour en bénéficier dès que possible, en plus de l'introduction de Volition.

Nous nous attendons à une réduction spectaculaire du coût des données grâce à l'EIP-4844 d'Ethereum et à la Volition de Starknet (disponibilité des données hors chaîne).

## Finalité plus rapide

Alors que nous approchons de la sortie de Starknet v0.14.0 et v0.15.0, nous restons déterminés à fournir aux utilisateurs de Starknet une expérience transparente et prévisible sur le réseau, quels que soient les niveaux de congestion. Pour y parvenir, nous priorisons deux axes de développement clés : le marché des honoraires et les intervalles de bloc.

#### Marché des frais

Les améliorations de performances prévues seront évidentes pour les développeurs et les utilisateurs, tant que le réseau ne sera pas encombré. Cependant, lorsque la congestion du réseau se produit, cela entraînera une augmentation des temps d'attente pour tout le monde. Pour résoudre ce problème, un marché des frais sera introduit dans Starknet dans la v0.14.0, pour permettre une allocation efficace des ressources limitées de Starknet, basée sur la volonté des utilisateurs de payer pour une transaction, et pas simplement sur sa place en ligne.

#### Intervalles de blocs fixes & plus courts

Dans la v0.15.0, Starknet passera à des intervalles de bloc constants et plus courts. Actuellement, chaque bloc est prouvé par sa propre preuve et les intervalles de bloc sont variables - la quantité conservée est le coût du bloc. Afin d'atteindre ce coût de bloc fixe, le réseau attend l'accumulation de suffisamment de transactions, ce qui se traduit par des intervalles de bloc variables. Pour résoudre ce problème, nous prévoyons de découpler la relation 1: 1 entre un bloc Starknet et sa preuve. À partir de la v0.15.0, une preuve attestera de l'intégrité d'un ou plusieurs blocs Starknet. Cela corrigera l'intervalle de blocage et améliorera l'UX de Starknet.

## Compromis & Considérations

Quels ont été les compromis que nous avons pris en compte pour déterminer cette feuille de route ?

La performance est la priorité absolue - c'est aussi le retour fort et clair que nous avons reçu de notre écosystème. Cela sera amélioré principalement en augmentant le débit du séquenceur, à partir de la v0.12.0.

Dans la v0.13.0, nous devions choisir entre un coût de transaction plus faible et une meilleure UX (intervalles de blocage plus courts/fixes et réponse du réseau plus prévisible pendant la congestion). Nous avons décidé de nous concentrer sur des coûts de transaction plus faibles, et non sur l'UX, car nous nous attendons à v0.12.0 pour aboutir à une bien meilleure latence (de l'ordre de quelques secondes). Comme mentionné ci-dessus, le principal levier de réduction des coûts de transaction sera l'introduction de Volition et, à mesure que de plus amples détails apparaîtront, EIP-4844.\
Nous envisagerons de déroger à ce plan si la latence ne s'améliore pas suffisamment après la v0.12.0.

L'amélioration du comportement du réseau pendant la congestion (en introduisant un marché des frais) attendra probablement la v0.14.0. Bien que la congestion puisse bien se produire après la v0.12.0, nous nous attendons à ce que les améliorations significatives du débit réduisent sa probabilité. Par conséquent, nous avons décidé d'accorder une priorité plus élevée aux coûts de transaction plus faibles.

## Résumé

La sortie de Cairo 1.0 marque la stabilisation du développement des fonctionnalités de Starknet. Le reste de 2023 sera consacré à l'amélioration des performances & UX de Starknet. D'ici la fin de cette année, nous nous attendons à ce que la couche de base du réseau ait atteint un état sain et stable en termes de fonctionnalités, de performances et d'expérience utilisateur. Nous nous attendons à ce que le rythme des changements majeurs ralentisse fortement et soit naturellement régi par tous les acteurs du réseau. En 2024, la décentralisation deviendra l'axe central du réseau, tant dans son fonctionnement que dans sa prise de décision.

Nous sommes convaincus que la combinaison de fonctionnalités évolutives et de meilleures performances améliorées & UX continuera à générer un afflux de développeurs et d'applications vers Starknet.

mise à jour : avril 2023