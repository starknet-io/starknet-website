#### TL;DR

Nous construisons Starknet en quatre étapes :

* Étape 0 — Fondations (terminées*)
* Étape I — Planètes : Rollups à une seule application
* Étape II — Constellations : Rollups multi-applications
* Étape III — Univers : Un Rollup décentralisé

Nous prévoyons de déployer la première étape dans quelques mois seulement, et d'être bien avancés dans les étapes II & III d'ici la fin de 2021.

### Introduction

StarkWare construit Starknet, un ZK-Rollup L2 alimenté par STARK décentralisé, sans autorisation et résistant à la censure qui prend en charge le calcul général sur Ethereum. Il est basé sur le langage Turing-complet [Cairo](https://www.cairo-lang.org/).

Les développeurs, les utilisateurs et les nœuds Starknet pourront faire tout ce que l'on attend d'un rollup L2 sans autorisation : les développeurs peuvent créer des applications implémentant leur propre logique métier et les déployer sur Starknet. Les utilisateurs peuvent envoyer des transactions à Starknet pour être exécutées, tout comme ils interagissent avec Ethereum aujourd'hui. Les nœuds et les participants de Starknet seront incités sur le plan crypto-économique pour garantir que le réseau fonctionne de manière efficace et équitable.

Toutes les transactions Starknet seront périodiquement regroupées, et leur validité sera prouvée dans une preuve STARK, à vérifier sur Ethereum. Comme l'effort de calcul requis pour vérifier les preuves STARK est exponentiellement petit par rapport au calcul prouvé, Starknet mettra à l'échelle Ethereum par ordre de grandeur.

Étant donné que toutes les transitions d'état Starknet seront éprouvées par STARK, seules les transitions valides seront acceptées sur Ethereum. Toutes les données nécessaires pour reconstruire l'état complet de Starknet seront publiées en chaîne. N'importe qui pourra exécuter son propre nœud Starknet. Ces propriétés rendront Starknet aussi sûr et sans autorisation qu'Ethereum.

Nous y travaillons depuis trois ans et avons déjà franchi des étapes remarquables en transformant « Moon Math» en logiciel de qualité de production et efficace fonctionnant sur Ethereum. La méthode de StarkWare est de résoudre les problèmes difficiles en premier, de construire la technologie de base, puis de lancer la production de manière fragmentée. Nous continuerons à construire de cette manière au fur et à mesure que nous terminerons Starknet.

Étape 0 — Fondations

StarkWare a terminé de jeter des bases importantes pour Starknet.

#### Cairo

[Cairo](https://twitter.com/StarkWareLtd/status/1300353049836376066?s=20) est notre framework Turing-Complete High-Level Language & pour produire des preuves STARK pour le calcul général. Au lieu de créer des « circuits » ou des AIRs complexes à la main, un développeur d'applications peut utiliser Cairo pour définir toute logique commerciale, la prouver off-chain et la vérifier sur la chaîne. Cairo est [en production sur Mainnet](https://twitter.com/StarkWareLtd/status/1320695603492507648?s=20), et est également [disponible pour les développeurs](http://cairo-lang.org/).

Dans quelques semaines, nous lancerons sur un réseau de test Ethereum public une version Alpha du Service de Proof Générique (GPS) de Cairo. Cela permettra aux développeurs de créer leurs propres applications à l'aide de Cairo, en implémentant la logique métier de leur choix. Ils enverront leur code du Caire au GPS pour être prouvé, puis vérifié en chaîne.

GPS permet à une seule preuve d'affirmer l'intégrité de l'exécution d'applications séparées et indépendantes, en donnant ainsi à ces applications la capacité d'amortir les dépenses de gaz de vérification de la preuve.

Le Caire et le GPS sont à la base de Starknet - notre décision d'externaliser les deux aux développeurs leur offre une exposition précoce à cette technologie, non seulement pour qu'ils puissent commencer à construire dessus, mais aussi pour qu'ils puissent influencer l'évolution de Starknet.

Nous continuerons à développer Cairo en fonction des besoins et des retours de la communauté des développeurs. Nous allons améliorer ce langage avec de nouvelles fonctionnalités, syntaxe et builtins qui améliorent son utilisation, et nous continuerons à développer et à améliorer l'outil Cairo : compilateurs, traceurs/débogueurs et intégrations aux IDE communes.

Starknet fera tourner Cairo sous le capot.

#### La pile de logiciels STARK

StarkWare a développé le système de preuve le plus puissant de l'écosystème, et il est [en direct sur Mainnet](https://medium.com/starkware/starks-over-mainnet-b83e63db04c0) depuis des mois. StarkWare a également développé [ethSTARK](https://twitter.com/StarkWareLtd/status/1264911004099543040?s=20), notre prouveur open-source, qui est 20 fois plus rapide que tout autre prouveur ; il offre à la fois des signatures sans connaissance [et des signatures post-quantique sécurisées](https://twitter.com/StarkWareLabs/status/1331930111227080709).

Nos mesures de mise à l'échelle - pas d'extrapolations, ni de promesses - incluent le traitement de 300 000 transactions en une seule preuve sur le réseau principal, atteignant [le record mondial de débit cumulatif : 3 000 tps](https://twitter.com/StarkWareLtd/status/1287770381525422082?s=20). Dans le processus, nous avons établi le record du monde pour l'efficacité de Rollup en termes de gaz : 315 gaz/tx, plusieurs fois moins cher que les transactions sur la L1 d'Ethereum.

Cette technologie sera la pierre angulaire de la couche de preuve décentralisée de Starknet, et par conséquent, nous publierons des prouveurs supplémentaires et améliorés dans le cadre du développement de Starknet (plus à ce sujet dans un prochain article de blog).

#### StarkEx

StarkEx est notre moteur de scalabilité L2. Il dessert [clients de DeversiFi](https://twitter.com/deversifi)sur Mainnet depuis juin 2020. Il alimentera à la fois [dYdX](https://twitter.com/dydxprotocol) et [ImmutableX](https://twitter.com/Immutable) à partir de quelques semaines. StarkEx peut gérer une logique de trading complexe (trading au comptant, dérivés, NFTs) ainsi que des paiements.

Développer StarkEx était notre façon de nourrir notre chaîne de compilation et de la tester pour satisfaire les besoins du monde réel. Il n’y a rien de tel que les demandes des applications et des utilisateurs réels pour aider les outils à mûrir et à évoluer. Il nous aide également à comprendre quels éléments doivent être abordés pour mieux servir l'écosystème — par exemple, les intégrations avec les portefeuilles et les explorateurs de blocs.

StarkEx est un exemple vivant de la capacité à scale les applications en utilisant un ZK-Rollup basé sur STARK, et est la première application en production sur Mainnet écrite en Cairo. En tant que tel, ce sera également l'une des applications fonctionnant sur Starknet.

### La route à suivre

#### Étape I — Planètes : Rollups à une seule application

Cette étape permettra aux développeurs de créer et de déployer leurs propres applications évolutives sur Starknet.

À ce stade, chaque instance de Starknet pourra exécuter une seule application. Différentes instances peuvent exécuter différentes applications.\
Le framework Starknet comprendra les éléments suivants :

* Les mécanismes nécessaires pour générer des preuves STARK pour une logique Cairo arbitraire, puis les soumettre et les vérifier sur Ethereum.
* Interactions avec L1 Ethereum : dépôts et retraits de jetons L1, publication des données en chaîne, mécanismes d'évasion protégeant les utilisateurs de Starknet des opérateurs malveillants de Starknet, etc.
* Gestion des soldes des utilisateurs L2 et du stockage et de la mémoire de l’application.

Les développeurs pourront se concentrer uniquement sur la construction de la logique métier de leur application, puis passer en production : la déployer et l'exécuter à grande échelle sur Starknet.

Ce qui nous permet de construire un ZK-Rollup extensible de calcul général est la combinaison de :

* Cairo, qui est un langage de programmation Turing-complet polyvalent
* Notre solide pile STARK (prouveur et vérificateur), qui permet de regrouper d'énormes calculs en une seule preuve

#### Étape II — Constellations : Rollups multi-applications

L'étape suivante prendra en charge plusieurs applications s'exécutant sur la même instance Starknet et accédant au même état L2 global. Cela permettra l'interopérabilité entre différentes applications ainsi qu'une réduction des coûts de gaz grâce à des économies d'échelle améliorées.

Cairo, la puissante pile STARK et le GPS amplifient l'avantage concurrentiel de Starknet en prenant en charge un cumul multi-applications.

À ce stade, Starknet sera un cadre entièrement fonctionnel pour exécuter plusieurs applications avec n'importe quelle logique métier arbitraire au-dessus d'Ethereum, chaque instance étant exécutée par un seul opérateur.

Un opérateur peut désormais créer un nœud Starknet et les développeurs d'applications peuvent y déployer leurs contrats. Du point de vue des utilisateurs, Starknet ressemble maintenant à Ethereum, avec une échelle plus élevée.

#### Étape III — Univers : Un Rollup décentralisé

La dernière étape de l'évolution de Starknet consiste à décentraliser son fonctionnement.

Les questions intrigantes de R&D que nous abordons actuellement et qui affectent cette étape incluent (i) l'utilisation de ZK-Rollups pour améliorer les mécanismes de consensus, et (ii) la conception de mécanismes crypto-économiques pour inciter les contributeurs et opérateurs décentralisés de Starknet (séquenceurs de transactions, prouveurs, etc.) pour fonctionner efficacement, équitablement et en toute sécurité.

### Conclusion

StarkWare construit Starknet, un L2 ZK-Rollup décentralisé sans autorisation alimenté par STARK sur Ethereum, qui prend en charge le calcul général basé sur la langue du Caire.

Starknet permettra aux applications d'évoluer sans compromettre la sécurité, aux utilisateurs de payer des frais de transaction raisonnables et à l'ensemble de l'écosystème de se développer considérablement et de tenir ses promesses.

Nous invitons volontiers la communauté des développeurs à [nous rejoindre](https://twitter.com/StarkWareLtd) dans ce voyage.

Mise à jour (novembre 2021) : Starknet Alpha est en direct sur Ethereum Mainnet