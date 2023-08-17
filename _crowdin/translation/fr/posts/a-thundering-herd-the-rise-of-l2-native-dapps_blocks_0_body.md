### TL;DR

Les dApps natifs L2 peuvent maintenant prospérer sans restrictions de gaz L1 traditionnelles

### Introduction

Les développeurs dApp ont toujours été confrontés à de sérieuses contraintes en raison de la limite de gaz du bloc Ethereum (L1). Cela limite non seulement*comment*ces dApps fonctionnent mais aussi*ce que*ces dApps sont capables de faire.

La couche 2 (L2) offre aux développeurs dApp un champ de verdure calculateur, sans plafond de verre de gaz. Nous pensons que la grande majorité des dApps seront natifs de L2 dans quelques années: ils auront été construits de base sur L2 pour bénéficier de ce degré de liberté informatique.

### Limites de gaz L1 formant des dApps natifs L1

*Prenons deux exemples de dApps populaires dont la conception est profondément façonnée par les contraintes de gaz L1 : AMMs et DEX.*

Un fournisseur de marché automatisé (AMM) est essentiellement une approximation à faible intensité gazeuse d'un échange basé sur le carnet de commandes. Au lieu de permettre aux utilisateurs de placer et de supprimer des limites, de stopper la perte, ou une variété d'autres types d'ordres, Les MGC L1 ne permettent que des swaps simples avec un pool de liquidités central sous-jacent — pour tenir compte du coût de calcul intensif de L1.

Les agrégateurs DEX ont idéalement besoin d’avoir accès à tous les bassins de liquidités possibles, même le plus petit bassin de liquidités, pour tirer parti des meilleurs prix pour les utilisateurs. Cependant, en raison du coût de l'interrogation de plusieurs piscines, il n'est tout simplement pas utile de faire des transactions sur L1. Il est justifié d'accéder aux bassins et de ne payer les frais de transaction connexes que lorsque les bassins de liquidités ont suffisamment de liquidités. Dans une veine similaire, les liquidations de prêts/emprunts et d'autres applications basées sur des garanties pourraient être beaucoup plus précises si la différence entre la remise de liquidation et les frais de transaction était beaucoup plus faible.

Les fonctionnalités et la conception limitées de nombreux dApps L1 résultent directement des développeurs qui optimisent leur code pour se conformer aux contraintes de gaz d'Ethereum. Pourquoi, vous le demandez, disons-nous Ethereum? Impossible d’exécuter le code Solidity sur plusieurs L1 et même sur quelques L2 ? En effet, mais de ceux-ci, Ethereum est l'environnement le plus coûteux (et, par conséquent, sécurisé). Les dApps Solidity sont conçus pour « le lien le plus cher », c'est-à-dire Ethereum. Ils ne bénéficient donc pas de l'avantage calculateur qu'offrent les environnements de temps d'exécution moins coûteux. Pour déverrouiller les fonctionnalités, il faut adapter le code du dApp à la conception d'un dApp pour l'environnement d'exécution le plus coûteux.

### La montée des dApps natifs L2

Les Rollups de validité (alias ZK-Rollups) permettent un calcul extrêmement bon marché. Contrairement à toute autre solution de mise à l'échelle — le calcul L2 peut croître de façon exponentielle, avec seulement un faible impact sur le coût du gaz de vérification sur la chaîne. De plus, un Rollup de validité traite les entrées aux calculs — « données de témoins » — sans consommer de ressources L1 supplémentaires, ce qui permet des calculs avec de nombreuses entrées.

Coder des dApps nativement sur L2 dans**[Cairo](https://www.cairo-lang.org/)**(un langage complet pour mettre à l'échelle dApps via les preuves STARK) débloque un vaste royaume de possibilités pour les développeurs. Il leur permet d’utiliser des quantités significatives de données – calculées et témoins – qu’ils ne pouvaient pas utiliser auparavant.

Examinons ces dApps natifs de L2 et leurs nouvelles capacités enrichies.

#### DeFi

Avant d’embarquer sur StarkEx, le Rollup Validity de StarkWare, dYdX fonctionnait en tant que dApp L1 sur Ethereum. Il a offert à ses utilisateurs un effet de levier de x10 sur les actifs synthétiques et les positions soutenues avec un seul actif synthétique. Reconstruire dYdX au Cairo en tant que dApp natif L2 fournit une plateforme DeFi nettement plus évolutive, moins chère et efficace :

* Mises à jour des prix Oracle : de telles mises à jour incluent généralement des dizaines de prix et de signatures provenant de différentes sources pour calculer un médian. Un Rollup de Validité fournit une mise à l'échelle exponentielle de la logique du prix oracle (vérification de la signature et calcul du prix médian) — sans rapporter les données de témoin à L1. Comparez cela à l'implémentation L1 de dYdX, où chaque mise à jour oracle coûte environ 300K de gaz et était, par conséquent, limitée dans sa fréquence et la taille de l'ensemble des reporters de prix.
* Effet de levier : Un flux de prix précis permet à dYdX d'estimer le risque d'une position en temps réel et d'offrir un effet de levier plus élevé aux utilisateurs. Grâce aux mises à jour améliorées des prix Oracle, dYdX a augmenté l'effet de levier de x10 sur L1 à x25 sur L2.
* Cross-margin: Avec dYdX sur L2, les acteurs du marché peuvent placer des ordres à long et à court terme sur de nombreux actifs en utilisant la même garantie. Le règlement moyen sur le L2 de dYdX implique des positions avec plus de 10 différents actifs synthétiques ! En comparaison, avoir cette capacité de marge croisée sur le L1 aurait plus que doublé le coût du gaz à la chaîne.

#### Jeux et arts généraux

La culture actuelle des jeux natifs L1 stocke généralement les actifs du jeu sur L1 tout en implémentant la logique du jeu dans une application hors chaîne de confiance. Cette tendance résulte directement des limites de gaz de L1. Merci au calcul bon marché sur L2, les développeurs de dApps de jeu natifs de L2 peuvent maintenant implémenter la logique du jeu dans un contrat intelligent et manipuler les actifs du jeu en toute confiance, plutôt que de les stocker. Intégrer la logique du jeu dans le domaine du calcul sans confiance est une étape significative vers un monde beaucoup plus riche de jeux basés sur la blockchain. Des jeux L2-natifs sont déjà en cours de développement sur StarkNet, le réseau sans autorisation de StarkWare (par exemple,[Dope Wars](https://github.com/dopedao/RYO)et[Influence](https://medium.com/influenceth/influence-to-launch-on-starknet-afd3c26ea25a)).

Mais, à quel point un jeu basé sur la blockchain peut-il être complexe ? Par exemple, la gestion des graphiques directement à la chaîne semble impossible —[ou est-ce](https://twitter.com/guiltygyoza/status/1449637155001798657)? Résoudre des équations différentielles et simuler des mouvements planaires dans un contrat intelligent représente une étape significative vers ce qui, à l'avenir, pourrait être un moteur physique de blockchain. Les implications sont énormes. Imaginez un jeu multijoueur compétitif comme Counter-Strike. Si l'on pouvait simuler la logique du jeu en chaîne, de nombreux hacks redoutés deviendraient une partie du passé — les joueurs pourraient profiter d'un jeu de grande ampleur.

L'art génératif utilise le calcul, l'aléatoire, et d'autres données pour créer de l'art basé sur la blockchain. La logique et le calcul plus complexes qu'un artiste peut utiliser sans confiance, plus il existe d'options pour générer des œuvres d'art uniques uniques. [WhaleStreet DAO](https://blog.whalestreet.xyz/whalestreet-dao-to-launch-gen-art-ecosystem-on-ethereum-with-starknet/)lance un des premiers projets Gen Art sur StarkNet, en profitant des ressources informatiques illimitées de StarkNet.

### Quelle est la suite ?

Rollups Validity — et StarkEx et StarkNet alimentés par Caire, en particulier — fournir un environnement où l'on peut développer et exploiter des dApps qui consomment beaucoup de données de calcul ou de témoins. Avec tous les avantages de la technologie distribuée du livre, nous prévoyons un avenir extrêmement excitant pour les dApps natifs de L2.

Que pouvez-vous créer**avec un calcul général supporté par la composabilité, la confiance et la décentralisation ?