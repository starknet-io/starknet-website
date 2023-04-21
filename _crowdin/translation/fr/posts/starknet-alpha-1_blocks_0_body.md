### TL;DR

StarkNet Alpha 1 a deux nouvelles fonctionnalités :

* Interaction L1<>L2
* Données On-chain

### Introduction

Au début de l'année, nous avons annoncé que StarkWare construisait[StarkNet](https://starkware.co/product/starknet/), un ZK-Rollup1 décentralisé sans autorisation, basé sur STARK, fonctionnant en tant que réseau L2 sur Ethereum. StarkNet permet à n'importe quel dApp d'atteindre une échelle illimitée pour son calcul — sans compromettre la composabilité et la sécurité d'Ethereum.

Le mois dernier,[StarkNet Alpha 0](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)a été publié dans le monde. Pour la première fois, les développeurs peuvent[écrire](https://kobi.one/2021/07/14/stardrop.html)n'importe quel contrat intelligent et le déployer, sans permission, sur un ZK-Rollup. Les utilisateurs peuvent envoyer des transactions sur le réseau, de style Ethereum.

Aujourd'hui, nous sommes en train de sortir une nouvelle version; Alpha 1. Nous publions des fonctionnalités sur une base continue pour permettre aux développeurs d'interagir avec de nouvelles fonctionnalités dès que possible. Nous prévoyons que cela renforcera le cycle de rétroaction et permettra aux commentaires de la communauté d'améliorer rapidement StarkNet.

### **Caractéristiques de l'Alpha 1**

#### Interaction L1<>L2

L'Alpha 1 comprend un protocole de messagerie L1<>L2, qui permet aux développeurs d'implémenter des flux de transactions transparents entre L1 et L2. Les développeurs peuvent maintenant envoyer des messages de contrats sur L1 à des contrats sur L2 et vice versa.

Une des beautés de ZK-Rollups est que les mises à jour d'état sont définitives, sans aucun délai. Cela signifie que les messages qui ont été envoyés de L2 à L1 peuvent être transférés immédiatement à leur contrat de destination. Cela ouvre la voie à la construction d'applications réellement interopérables entre les couches.

Intéressé à l'essayer? La meilleure façon de commencer est de suivre le tutoriel[ici](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html).

Notre protocole L1<>L2 doit beaucoup à d'autres L2s (spécifiquement Optimism et Arbitrum) dont les travaux précédents dans ce domaine ont influencé notre conception.

#### Disponibilité des données sur la chaîne

La mise à jour d'état de StarkNet est maintenant également publiée sous forme de données sur Ethereum. Ceci permet à tout utilisateur de construire complètement l'état de StarkNet à partir des données L1. Chaque mise à jour comprend le diff d'état, c'est-à-dire quel stockage a été modifié et sa nouvelle valeur.

Ici aussi, ZK-Rollup montre sa force. Contrairement aux Rollups optimistes, dans lesquels les données des transactions complètes doivent être envoyées en chaîne, dans ZK-Rollups, seules les données minimales absolues nécessaires pour dériver le diff d'état sont envoyées sur la chaîne.

Prenons un exemple exemplaire, les oracles de prix. Une transaction pour mettre à jour un oracle de prix contient généralement plusieurs transactions mais ne met à jour qu'une seule cellule de stockage ; le prix de la paire. Les données sur la chaîne requises pour une mise à jour d'état contenant des transactions oracles de prix dans un Rollup optimiste croît linéairement avec le nombre de mises à jour, pendant que vous êtes dans un ZK-Rollup, ce sera toujours une seule mise à jour de stockage.

De plus, les algorithmes de compression peuvent être appliqués aux données publiées, et leur validité sera attestée par la preuve STARK, réduisant encore davantage l'empreinte sur la chaîne. Les futures versions de StarkNet introduiront des optimisations innovantes dans ce domaine.

#### StarkNet OS

Nous publions également le code du système d'exploitation StarkNet. Le StarkNet OS est le programme Cairo qui exécute StarkNet. L'OS gère tout ce qui est fait sur le réseau — déploiement de contrats, exécution de transaction, messages L1<>L2 et plus encore. L'architecture et la conception de StarkNet OS seront expliquées en détail dans une publication séparée.

#### Fonctionnalités supplémentaires

Non seulement StarkNet Alpha a évolué, mais nous améliorons constamment le Caire. Pour une description complète des nouvelles fonctionnalités du Caire v0.3.0, consultez les notes de version[ici](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.3.0).

### L'écosystème est en pleine croissance

Outre le travail constant de StarkNet Core, les travaux de l’écosystème sur StarkNet ne cessent de se développer. Nous sommes ravis de collaborer avec certaines des équipes les plus talentueuses de l'écosystème.

Fermion, le premier effort de StarkNet, est développé par l’équipe d’Erigon (anciennement TurboGeth). Sur la base de leurs connaissances énormes acquises en travaillant sur Ethereum, nous sommes en mesure de travailler avec eux pour construire un nœud complet puissant, qui incorpore de nombreuses leçons apprises en construisant pour Ethereum, tout en profitant de l'échelle offerte par les preuves STARK.

Nethermind travaille sur Warp, un compilateur de EVM au Caire. Lié à notre culture de présenter de nouveaux outils seulement une fois qu'ils sont prêts, tout ce que nous pouvons dire est, s'attendre à des nouvelles passionnantes sur ce front très bientôt! Nous pouvons toutefois dire qu'ils évoluent à une vitesse de distorsion.

### Ce que le futur tient

Le prochain arrêt sur notre route vers StarkNet sera la compostabilité – permettant aux contrats d’interagir entre eux. Restez à l'écoute.

[StarkWare](https://starkware.co/)

1 Comme nous l’avons dit précédemment, ZK-Rollup est maintenant un terme couramment utilisé, mais très trompeur : ces solutions n’offrent pas (actuellement) de connaissance zéro.

**Mise à jour (Nov. 2021):**StarkNet Alpha est en direct sur le réseau principal Ethereum