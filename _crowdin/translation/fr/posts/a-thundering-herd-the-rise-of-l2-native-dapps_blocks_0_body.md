### TL;DR

Les dApps natives L2 peuvent désormais prospérer sans les restrictions de gaz L1 traditionnelles

### Introduction

Les développeurs dApp ont toujours été confrontés à de fortes contraintes en raison de la limite de gaz de bloc d'Ethereum (L1). Cela limite non seulement*le fonctionnement de ces dApps, mais également*ce que*ces dApps sont capables de faire*

La couche 2 (L2) offre aux développeurs dApp un champ informatique vierge, sans ce plafond de verre à gaz. Nous pensons que la grande majorité des dApps seront natives L2 d'ici quelques années : elles auront été construites à partir de zéro sur L2 pour bénéficier de ce degré de liberté de calcul.

### Les limites de gaz L1 forment les dApps natives L1

*Considérons deux exemples de dApps populaires dont la conception est profondément façonnée par les contraintes de gaz L1 : les AMM et les agrégateurs DEX.*

Un teneur de marché automatisé (AMM) est essentiellement une approximation à faible consommation de gaz d'un échange basé sur le carnet d'ordres. Au lieu de permettre aux utilisateurs de placer et de supprimer des limites, d'arrêter les pertes ou une variété d'autres types d'ordres, les AMM L1 ne permettent que des échanges simples avec un pool central de liquidités sous-jacentes - pour s'adapter au coût de calcul intense de L1.

Les agrégateurs DEX ont idéalement besoin d'accéder à tous les pools de liquidités possibles, même au plus petit pool de liquidités, pour tirer parti des meilleurs prix pour les utilisateurs. Cependant, en raison du coût d'interrogation de nombreux pools différents, il ne vaut tout simplement pas la peine d'effectuer des transactions sur L1. Il est justifiable d'accéder aux pools et de payer les frais de transaction associés uniquement lorsque les pools de liquidité disposent d'une liquidité suffisamment importante. Dans le même ordre d'idées, les liquidations de prêts/emprunts et d'autres dApps basées sur des garanties pourraient être beaucoup plus précises si la différence entre la remise de liquidation et les frais de transaction était beaucoup plus petite.

La fonctionnalité et la conception limitées de nombreuses dApps L1 résultent directement du fait que les développeurs optimisent leur code pour respecter les contraintes de gaz d'Ethereum. Pourquoi, vous demanderez-vous peut-être, disons-nous Ethereum ? Le code Solidity ne peut-il pas fonctionner sur de nombreux L1 et même sur certains L2 ? En effet, mais de ceux-ci, Ethereum est l'environnement le plus cher (et donc le plus sécurisé). Les dApps Solidity sont conçues pour "le lien le plus cher", c'est-à-dire Ethereum. Par conséquent, ils ne bénéficient pas de l'avantage informatique offert par des environnements d'exécution moins coûteux. Pour déverrouiller les fonctionnalités abandonnées en concevant une dApp pour l'environnement d'exécution le plus cher, le code de la dApp doit être adapté.

### La montée en puissance des dApps natives L2

Les cumuls de validité (alias ZK-Rollups) permettent un calcul extrêmement bon marché. Contrairement à toute autre solution de mise à l'échelle, le calcul L2 peut croître de manière exponentielle avec seulement un faible impact sur le coût du gaz de vérification en chaîne. De plus, un Validity Rollup traite les entrées des calculs - "données témoins" - sans consommer de ressources L1 supplémentaires, ce qui permet des calculs avec de nombreuses entrées.

Le codage natif des dApps sur L2 en**[Cairo](https://www.cairo-lang.org/)**(un langage complet de Turing pour mettre à l'échelle les dApps via des preuves STARK) ouvre un vaste domaine de possibilités pour les développeurs. Cela leur permet d'utiliser des quantités importantes de données - à la fois des données informatiques et des données témoins - qu'ils ne pouvaient pas utiliser auparavant.

Explorons ces dApps natives L2 et leurs nouvelles capacités enrichies.

#### DeFi

Avant d'intégrer StarkEx, le Validity Rollup de StarkWare, dYdX fonctionnait comme un dApp L1 sur Ethereum. Il offrait à ses utilisateurs un effet de levier x10 sur les actifs synthétiques et des positions prises en charge avec un seul actif synthétique. La reconstruction de dYdX au Caire en tant que dApp native L2 fournit une plate-forme DeFi considérablement plus évolutive, moins chère et plus efficace :

* Mises à jour des prix Oracle : ces mises à jour incluent généralement des dizaines de prix et de signatures provenant de diverses sources pour calculer une médiane. Un cumul de validité fournit une mise à l'échelle exponentielle de la logique oracle des prix (vérification de la signature et calcul du prix médian) - sans signaler ces données témoins à L1. Comparez cela à l'implémentation L1 de dYdX, où chaque mise à jour de l'oracle des prix coûtait environ 300 000 gaz et était donc limitée dans sa fréquence et dans la taille de l'ensemble des rapporteurs de prix.
* Effet de levier : un flux de prix précis permet à dYdX d'estimer le risque d'une position en temps réel et d'offrir un effet de levier plus élevé aux utilisateurs. Grâce aux mises à jour améliorées des prix Oracle, dYdX a augmenté l'effet de levier de x10 sur L1 à x25 sur L2.
* Cross-margin : Avec dYdX sur L2, les teneurs de marché peuvent passer des ordres long/short sur de nombreux actifs en utilisant le même collatéral. Le règlement moyen sur la L2 de dYdX implique des positions avec plus de 10 actifs synthétiques différents ! En comparaison, avoir cette capacité de marge croisée sur L1 aurait plus que doublé le coût du gaz sur la chaîne.

#### Jeu et art génératif

La récolte actuelle de jeux natifs L1 stocke généralement les ressources de jeu sur L1 tout en implémentant toute la logique de jeu dans une application hors chaîne de confiance. Ce modèle est le résultat direct des limitations de gaz de L1. Grâce au calcul bon marché sur L2, les développeurs de dApps de jeu natifs L2 peuvent désormais implémenter la logique du jeu dans un contrat intelligent et manipuler les actifs du jeu en toute confiance, plutôt que de simplement les stocker. Amener la logique de jeu dans le domaine du calcul sans confiance est une étape importante vers un monde beaucoup plus riche de jeux basés sur la blockchain. Des jeux natifs L2 sont déjà développés sur StarkNet, le réseau sans autorisation de StarkWare (par exemple,[Dope Wars](https://github.com/dopedao/RYO)et[Influence](https://medium.com/influenceth/influence-to-launch-on-starknet-afd3c26ea25a)).

Mais à quel point un jeu basé sur la blockchain peut-il vraiment être complexe ? Par exemple, gérer les graphiques directement sur la chaîne semble impossible —[ou est-ce](https://twitter.com/guiltygyoza/status/1449637155001798657)? Résoudre des équations différentielles et simuler un mouvement planaire dans un contrat intelligent représente une étape importante vers ce qui pourrait être à l'avenir un moteur physique blockchain. Les implications sont énormes. Imaginez un jeu multijoueur compétitif comme Counter-Strike. Si l'on pouvait simuler la logique du jeu en chaîne, de nombreux hacks redoutés appartiendraient au passé - les joueurs pourraient profiter d'un jeu dont l'équité est prouvée.

L'art génératif utilise le calcul, le hasard et d'autres données pour créer de l'art basé sur la blockchain. Plus un artiste peut utiliser une logique et un calcul complexes sans confiance, plus il existe d'options pour générer des œuvres d'art uniques et singulières. [WhaleStreet DAO](https://blog.whalestreet.xyz/whalestreet-dao-to-launch-gen-art-ecosystem-on-ethereum-with-starknet/)lance l'un des premiers projets Gen Art sur StarkNet, tirant parti des ressources de calcul illimitées de StarkNet.

### Et après?

Validity Rollups - et StarkEx et StarkNet alimentés par Cairo, en particulier - fournissent un environnement dans lequel on peut développer et exploiter des dApps qui consomment beaucoup de calculs ou de données témoins. Avec tous les avantages de la technologie des registres distribués, nous prévoyons un avenir extrêmement excitant pour les dApps natives L2.

Que pouvez-vous**avec un calcul général soutenu par la composabilité, l'absence de confiance et la décentralisation ?