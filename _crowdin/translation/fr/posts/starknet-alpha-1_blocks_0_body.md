### TL;DR

Starknet Alpha 1 a deux nouvelles fonctionnalités :

* Interaction L1<>L2
* Données en chaîne

### Introduction

Au début de l'année, nous avons annoncé que StarkWare construisait [Starknet](https://starkware.co/product/starknet/), un ZK-Rollup¹ décentralisé sans autorisation basé sur STARK fonctionnant comme un réseau L2 sur Ethereum. Starknet permet à n'importe quelle dApp d'atteindre une échelle illimitée pour son calcul - sans compromettre la composabilité et la sécurité d'Ethereum.

Le mois dernier, [Starknet Alpha 0](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95) est sorti dans le monde. Pour la première fois, les développeurs peuvent [écrire](https://kobi.one/2021/07/14/stardrop.html) n'importe quel contrat intelligent et le déployer, sans autorisation, sur un ZK-Rollup. Les utilisateurs peuvent envoyer des transactions au réseau, à la manière d'Ethereum.

Aujourd'hui, nous publions une nouvelle version; Alpha 1. Nous publions des fonctionnalités sur une base continue pour permettre aux développeurs d'interagir avec de nouvelles fonctionnalités dès que possible. Nous prévoyons que cela resserrera le cycle de rétroaction et permettra aux commentaires de la communauté d'améliorer rapidement Starknet.

### Caractéristiques Alpha 1

#### Interaction L1<>L2

Alpha 1 inclut un protocole de messagerie L1<>L2, qui permet aux développeurs de mettre en œuvre des flux de transaction transparents entre L1 et L2. Les développeurs peuvent désormais envoyer des messages de contrats sur L1 à des contrats sur L2 et vice versa.

L'une des beautés de ZK-Rollups est que les mises à jour d'état sont définitives, sans aucun délai. Cela signifie que les messages qui ont été envoyés de L2 à L1 peuvent être immédiatement transférés vers leur contrat de destination. Cela ouvre la voie à la création d'applications véritablement interopérables entre les couches.

Intéressé à l'essayer? La meilleure façon de commencer est de suivre le tutoriel [ici](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html).

Notre protocole L1<>L2 doit beaucoup aux autres L2 (en particulier Optimism et Arbitrum) dont les travaux antérieurs dans ce domaine ont influencé notre conception.

#### Disponibilité des données en chaîne

La mise à jour de l'état de Starknet est désormais également publiée sous forme de données en chaîne sur Ethereum. Cela permet à tout utilisateur de construire entièrement l'état de Starknet à partir des données L1. Chaque mise à jour d'état inclut le diff d'état, c'est-à-dire quel stockage a été modifié et sa nouvelle valeur.

Ici aussi, ZK-Rollup montre sa force. Contrairement aux cumuls optimistes, dans lesquels les données complètes des transactions doivent être envoyées en chaîne, dans les cumuls ZK, seules les données minimales absolues requises pour dériver le diff d'état sont envoyées en chaîne.

Prenons un excellent exemple, les oracles de prix. Une transaction pour mettre à jour un oracle de prix contient généralement plusieurs transactions mais ne met à jour qu'une seule cellule de stockage ; le prix de la paire. Les données en chaîne requises pour une mise à jour d'état contenant des transactions d'oracle de prix dans un cumul optimiste augmentent de manière linéaire avec le nombre de mises à jour, tandis que dans un cumul ZK, il s'agira toujours d'une seule mise à jour de stockage.

De plus, des algorithmes de compression peuvent être appliqués aux données publiées, et leur validité sera attestée par la preuve STARK, réduisant encore l'empreinte sur la chaîne. Les futures versions de Starknet introduiront des optimisations innovantes dans ce domaine.

#### Système d'exploitation Starknet

Nous publions également le code du système d'exploitation Starknet. Le système d'exploitation Starknet est le programme Cairo qui exécute Starknet. Le système d'exploitation gère tout ce qui se fait sur le réseau : déploiement de contrats, exécution de transactions, messages L1<>L2, etc. L'architecture et la conception de Starknet OS seront expliquées en détail dans un article séparé.

#### Fonctionnalités supplémentaires

Non seulement Starknet Alpha a évolué, mais nous améliorons constamment Cairo. Pour une description complète des nouvelles fonctionnalités de Cairo v0.3.0, consultez les notes de version [ici](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.3.0).

### L'écosystème s'agrandit

Outre le travail constant sur Starknet Core, le travail de l'écosystème sur Starknet est en constante expansion. Nous sommes ravis de collaborer avec certaines des équipes les plus talentueuses de l'écosystème.

Fermion, le premier effort de nœud complet de Starknet, est développé par l'équipe d'Erigon (anciennement TurboGeth). Sur la base de leurs énormes connaissances acquises en travaillant sur Ethereum, nous sommes en mesure de travailler avec eux pour construire un puissant nœud complet, qui intègre de nombreuses leçons apprises lors de la construction pour Ethereum, tout en bénéficiant de l'échelle offerte par les preuves STARK.

Nethermind travaille sur Warp, un compilateur d'EVM à Cairo. Liés par notre culture de présenter de nouveaux outils seulement une fois qu'ils sont prêts, tout ce que nous pouvons dire, c'est, attendez-vous à des nouvelles passionnantes sur ce front très bientôt ! Nous pouvons dire, cependant, qu'ils se déplacent à une vitesse fulgurante.

### Ce que l'avenir nous réserve

La prochaine étape sur notre route vers Starknet sera la composabilité - permettant aux contrats d'interagir les uns avec les autres. Restez à l'écoute.

[StarkWare](https://starkware.co/)

1 Comme nous l'avons dit précédemment, ZK-Rollup est désormais un terme couramment utilisé, mais très trompeur : ces solutions n'offrent pas (actuellement) de connaissance zéro.

Mise à jour (novembre 2021) : Starknet Alpha est en direct sur Ethereum Mainnet