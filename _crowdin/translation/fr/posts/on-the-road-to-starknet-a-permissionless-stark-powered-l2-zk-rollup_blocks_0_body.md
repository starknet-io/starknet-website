#### **TL;DR**

Nous construisons Starknet en quatre étapes :

* Étape 0 — Fondations (terminées*)
* Étape I — Planètes : Rollups à une seule application
* Étape II — Constellations : Rollups multi-applications
* Étape III — Univers : Un Rollup décentralisé

Nous prévoyons de déployer la première étape dans quelques mois seulement, et d'être bien avancés dans les étapes II & III d'ici la fin de 2021.

### **Introduction**

StarkWare construit Starknet, un L2 ZK-Rollup décentralisé, permissionless et résistant à la censure qui supporte le calcul général sur Ethereum. Il est basé sur le[langage Cairo](https://www.cairo-lang.org/) qui est un langage Turing complet.

Développeurs, les utilisateurs et les nœuds Starknet seront en mesure de faire tout ce que l'on attend d'un Rollup L2 permissionless : les développeurs peuvent construire des applications implémentant leur propre logique commerciale et les déployer sur Starknet. Les utilisateurs peuvent envoyer des transactions à Starknet pour être exécutées, tout comme ils le font avec Ethereum aujourd'hui. Les nœuds et les participants Starknet seront récompensés par des mesures crypto-économiques pour assurer un fonctionnement efficace et équitable du réseau.

Toutes les transactions Starknet seront périodiquement batchées et leur validité sera prouvée dans une preuve STARK qui sera vérifiée sur Ethereum. Étant donné que l'effort de calcul nécessaire pour vérifier que les preuves STARK sont exponentiellement réduites par rapport au calcul prouvé, Starknet permettra le déploiement à très grande échelle d'Ethereum.

Puisque toutes les transitions d'état Starknet sont éprouvées par STARK, seules les transitions valides seront acceptées sur Ethereum. Toutes les données nécessaires à la reconstruction de l'état complet de Starknet seront publiées sur la chaîne. N'importe qui pourra utiliser son propre nœud Starknet. Ces propriétés rendront StarkNet aussi sécurisé et permissionless que Ethereum.

Nous y travaillons depuis trois ans et avons déjà franchi des étapes remarquables en transformant « Moon Math» en logiciel de qualité de production et efficace fonctionnant sur Ethereum. La méthode de StarkWare est de résoudre les problèmes difficiles en premier, de construire la technologie de base, puis de lancer la production de manière fragmentée. Nous continuerons à construire de cette manière au fur et à mesure que nous réaliserons Starknet.

![](/assets/ontheroad_02.png)

**Étape 0 — Fondations**

StarkWare a terminé de mettre en place des fondations importantes pour Starknet.

#### **Cairo**

[Cairo](https://twitter.com/StarkWareLtd/status/1300353049836376066?s=20) est notre langage de haut niveau, Turing-complet, et notre cadre de travail pour produire des preuves STARK pour les calculs généraux. Au lieu de créer des « circuits » ou des AIRs complexes à la main, un développeur d'applications peut utiliser Cairo pour définir toute logique commerciale, la prouver off-chain et la vérifier sur la chaîne. Le Cairo est[en production sur Mainnet](https://twitter.com/StarkWareLtd/status/1320695603492507648?s=20), et est également[disponible pour les développeurs](http://cairo-lang.org/).

Dans quelques semaines, nous lancerons sur un réseau de test Ethereum public une version Alpha du Service de Proof Générique (GPS) de Cairo. *Cela permettra aux développeurs de construire leurs propres applications en utilisant Cairo, en implémentant la logique commerciale qu'ils souhaitent. Ils enverront leur code Cairo au GPS pour être prouvé, puis vérifié sur la chaîne.*

GPS permet à une seule preuve d'affirmer l'intégrité de l'exécution d'applications séparées et indépendantes, en donnant ainsi à ces applications la capacité d'amortir les dépenses de gaz de vérification de la preuve.

Cairo et GPS sont à la base de Starknet — notre décision d'externaliser les deux à des développeurs leur fournit une exposition précoce à cette technologie, non seulement pour qu'ils puissent commencer à construire dessus mais aussi pour qu'ils puissent influencer l'évolution de Starknet.

Nous continuerons à développer Cairo en fonction des besoins et des retours de la communauté des développeurs. Nous allons améliorer ce langage avec de nouvelles fonctionnalités, syntaxe et builtins qui améliorent son utilisation, et nous continuerons à développer et à améliorer l'outil Cairo : compilateurs, traceurs/débogueurs et intégrations aux IDE communes.

Starknet tournera grâce à Cairo.

#### **La pile de logiciels STARK**

StarkWare a développé le système de preuve le plus puissant de l'écosystème, et il a été[live sur Mainnet](https://medium.com/starkware/starks-over-mainnet-b83e63db04c0)pendant des mois. StarkWare a également développé[ethSTARK](https://twitter.com/StarkWareLtd/status/1264911004099543040?s=20), notre prouveur open-source, qui est 20X plus rapide que tout autre prouveur ; il offre à la fois[des signatures ZK et des signatures sécurisées post-quantiques.](https://twitter.com/StarkWareLabs/status/1331930111227080709).

Nos*mesures* du gain de scalabilité - pas d'extrapolations, ni de promesses - incluent le traitement des transactions de 300K en une seule preuve sur le réseau principal, réalisant ainsi le [record du monde de débit de Rollup : 3K tps](https://twitter.com/StarkWareLtd/status/1287770381525422082?s=20). Dans le processus, nous avons établi le record du monde pour l'efficacité de Rollup en termes de gaz : 315 gaz/tx, plusieurs fois moins cher que les transactions sur la L1 d'Ethereum.

Cette technologie sera la pierre angulaire du Proving Layer décentralisé de Starknet, et nous sortirons donc des prouveurs supplémentaires et améliorés dans le cadre du développement de Starknet (nous en dirons plus dans un prochain article de blog)

#### **StarkEx**

StarkEx est notre moteur de scalabilité L2. Elle dessert les clients de[DeversiFi](https://twitter.com/deversifi)sur le Mainnet depuis juin 2020. Il va supporter à la fois[dYdX](https://twitter.com/dydxprotocol)et[ImmutableX](https://twitter.com/Immutable)dans quelques semaines seulement. StarkEx peut gérer une logique de trading complexe (trading au comptant, dérivés, NFTs) ainsi que des paiements.

Développer StarkEx était notre façon de nourrir notre chaîne de compilation et de la tester pour satisfaire les besoins du monde réel. Il n’y a rien de tel que les demandes des applications et des utilisateurs réels pour aider les outils à mûrir et à évoluer. Il nous aide également à comprendre quels éléments doivent être abordés pour mieux servir l'écosystème — par exemple, les intégrations avec les portefeuilles et les explorateurs de blocs.

StarkEx est un exemple vivant de la capacité à scale les applications en utilisant un ZK-Rollup basé sur STARK, et est la première application en production sur Mainnet écrite en Cairo. En tant que tel, ce sera aussi l'une des applications qui fonctionnera sur Starknet.

![](/assets/ontheroad_03.png)

### **La route à suivre**

#### **Étape I — Planètes : Rollups à une seule application**

Cette étape permettra aux développeurs de construire et de déployer leurs propres applications à grande échelle sur Starknet.

À ce stade, chaque instance Starknet sera en mesure d'exécuter une seule application. Différentes instances peuvent exécuter différentes applications.\
Le framework Starknet inclura les éléments suivants :

* Les mécanismes nécessaires pour générer des preuves STARK pour une logique Cairo arbitraire, puis les soumettre et les vérifier sur Ethereum.
* Les interactions avec la L1 d'Ethereum: dépôts et retraits de jetons L1, publication des données sur la chaîne, Escape Mechanisms protégeant les utilisateurs de Starknet contre les opérateurs malveillants, etc.
* Gestion des soldes des utilisateurs L2 et du stockage et de la mémoire de l’application.

Les développeurs seront en mesure de se concentrer uniquement sur la construction de la logique métier de leur application, et ensuite passer en production : déployez et exécutez-la à grande échelle sur Starknet.

Ce qui nous permet de construire un ZK-Rollup extensible de calcul général est la combinaison de :

* Cairo, qui est un langage de programmation Turing-complet polyvalent
* Notre solide pile STARK (prouveur et vérificateur), qui permet de regrouper d'énormes calculs en une seule preuve

#### **Étape II — Constellations : Rollups multi-applications**

La prochaine étape consistera à prendre en charge plusieurs applications fonctionnant sur la même instance de Starknet et accédant au même état global L2. Cela permettra l'interopérabilité entre différentes applications ainsi qu'une réduction des coûts de gaz grâce à des économies d'échelle améliorées.

Cairo, la puissante pile STARK et GPS amplifient l'avantage concurrentiel de Starknet en soutenant un Rollup multi-applications.

À ce stade, Starknet sera un cadre entièrement fonctionnel pour exécuter de *multiples* applications avec n'importe quelle logique métier arbitraire sur Ethereum, chaque instance étant gérée par un seul opérateur.

Un opérateur peut maintenant lancer un nœud StarkNet et les développeurs d'applications peuvent déployer leurs contrats dessus. Du point de vue des utilisateurs, Starknet ressemble et se ressent comme Ethereum, à une plus grande échelle.

#### **Étape III — Univers : Un Rollup décentralisé**

La dernière étape dans l'évolution de Starknet consiste à décentraliser son fonctionnement.

Les questions de R&D intrigantes que nous abordons maintenant et qui affectent cette étape comprennent (i) l'utilisation de ZK-Rollups pour améliorer les mécanismes de consensus et (ii) la conception de mécanismes cryptographiques pour inciter les contributeurs et les opérateurs décentralisés de Starknet (séquenceurs de transactions, prouveurs, etc.) à fonctionner efficacement, équitablement et en toute sécurité.

### **Conclusion**

StarkWare construit Starknet, un Rollup ZK de couche 2 décentralisé et sans permission alimenté par STARK sur Ethereum, qui prend en charge la computation générale basée sur le langage Cairo.

Starknet permettra aux applications de scale sans compromettre la sécurité, aux utilisateurs de payer des frais de transaction raisonnables et à l'ensemble de l'écosystème de croître considérablement et de réaliser son potentiel.

Nous invitons volontiers la communauté de développeurs à nous  [rejoindre ](https://twitter.com/StarkWareLtd)dans cette aventure.

**Mise à jour (novembre 2021) :** StarkNet Alpha est live sur Ethereum Mainnet