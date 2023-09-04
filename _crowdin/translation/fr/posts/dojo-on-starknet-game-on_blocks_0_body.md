### Le premier moteur de jeu éprouvé pour Starknet

#   

## TL;DR

* Dojo est un moteur de jeu en chaîne éprouvé, permettant des jeux avec propriété, interopérabilité et extensibilité.
* Il fonctionne sur Starknet, fournissant un cadre logiciel aux créateurs de jeux, pour les aider à créer un jeu fluide et rapide de haute qualité.
* Dojo améliore le développement de jeux en permettant des transactions rapides et bon marché, nécessaires pour les jeux cryptographiques de qualité production.
* Des composants comme ECS, Sozu, Torii et Katana facilitent le développement et le déploiement de jeux.
* Les futures améliorations de Dojo incluent la recherche de jeux de couche 3, des mises à jour optimistes, des preuves côté client et des transferts inter-chaînes.
* Les jeux alimentés par Dojo sur Starknet, comme Dope Wars, Influence, Realms et CafeCosmos, se multiplient, marquant une tendance à la hausse dans les jeux en chaîne.

#  

*Les jeux Blockchain n'ont pas tenu leurs promesses. Les limites d'échelle et les coûts élevés ont limité la plupart des jeux en chaîne à la tokenisation des actifs du jeu. Mais avec les transactions bon marché et rapides permises par Starknet et le nouveau moteur de jeu cryptographique Dojo, la promesse de non seulement posséder vos actifs dans le jeu, mais aussi de prouver la logique du jeu en chaîne, se réalise.*  

Le marché mondial du jeu, [évalué à 245 milliards de dollars](https://www.mordorintelligence.com/industry-reports/global-gaming-market) en 2023, est l'un des plus grands segments de l'industrie mondiale du divertissement. Et le jeu *blockchain* , avec sa promesse de permettre une interopérabilité illimitée, offre une ouverture sur un monde de jeu beaucoup plus excitant que le scénario actuel. Semblable à la façon dont les jeux multijoueurs ont ajouté une toute nouvelle dimension de possibilités à l'écosystème du jeu, les jeux en chaîne peuvent devenir encore plus divertissants et pertinents.

Mais cette promesse s'est heurtée à la réalité de la blockchain : les transactions sont coûteuses et lentes. Ce sont deux problèmes que les jeux ne peuvent tout simplement pas avoir. Pour cette raison, créer des jeux en chaîne réussis a été presque impossible.

Mais avec la maturité de la technologie de cumul de validité, la promesse des jeux en chaîne est enfin tenue. 

Dans cet article, nous verrons comment le TPS élevé activé par **Starknet** concrétise la promesse des jeux en chaîne. Et nous verrons comment **Dojo**, le premier moteur de jeu prouvable construit par la communauté, utilise Starknet pour responsabiliser les créateurs. Enfin, nous examinerons l'avenir de Dojo et ce qu'il débloque pour les jeux en chaîne.

## Jeux cryptographiques

Lorsque nous parlons de jeu blockchain, les deux idéologies les plus populaires que la blockchain permet sont **la propriété des actifs du jeu** et **l'interopérabilité**. 

**La propriété des actifs du jeu** signifie que les actifs du jeu appartiennent à un portefeuille appartenant à l'utilisateur **. En d'autres termes, ils n'appartiennent pas au constructeur du jeu ou à un simple compte de messagerie stocké sur un serveur centralisé que les développeurs du jeu peuvent supprimer à distance. Dans le jeu blockchain, les actifs que vous créez ou gagnez vous appartiennent vraiment.

Et une fois que ces actifs appartiennent à *vous*— les jeux peuvent permettre **l'interopérabilité**. Grâce à l'interopérabilité, les personnages et les ressources d'un jeu peuvent être transférés vers un autre jeu ou monde. Si vous investissez des centaines d'heures dans un jeu mais que vous décidez de ne plus jouer, vous pouvez emporter ces atouts durement gagnés avec vous dans le nouveau jeu de votre choix. 

Afin de mettre en œuvre ces deux concepts, les jeux doivent être construits **en chaîne**. Cela signifie que tous les actifs du jeu, toutes les actions entreprises par le joueur et tout autre changement d'état *doivent avoir lieu en tant que transaction sur la blockchain* (soit séparément pour chaque action, soit une transaction agrégée poussée périodiquement). Sur une blockchain assez décentralisée, cela peut coûter quelques centimes *à quelques centaines de dollars* (en période de congestion) et prendre plusieurs minutes voire plus pour une seule transaction. De toute évidence, cela rend l'exploitation d'une infrastructure de jeu à grande échelle sur de telles plateformes extrêmement coûteuse, lente et peu pratique.

## Starknet et le calcul bon marché 

Mais tout cela change avec l'avènement des cumuls de validité tels que Starknet. 

**Starknet** est un cumul de validité de couche 2 (communément appelé cumul de connaissance zéro) développé par [StarkWare](https://starkware.co/starknet/) qui utilise des systèmes cryptographiques appelés STARK pour réduire considérablement les coûts de calcul et de stockage. (Pour en savoir plus sur les preuves cryptographiques sur Starknet, [reportez-vous à un article d'introduction ici](https://starkware.medium.com/cambrian-explosion-of-cryptographic-proofs-5740a41cdbd2#:~:text=The%20Cambrian%20explosion%20of%20cryptographic,currently%20being%20used%20in%20web3).) 

Starknet (et Cairo, le langage de contrat intelligent pour Starknet) permettent aux dApps de traiter des TPS élevés à un coût minimal tout en profitant de la sécurité d'Ethereum. Ces transactions bon marché et rapides sont exactement ce qui est nécessaire pour débloquer la promesse du jeu blockchain. Les jeux peuvent désormais être entièrement en chaîne, rapides et abordables.   

Mais même avec la possibilité d'être en chaîne, pour que les jeux blockchain prospèrent, ils ont besoin d'un deuxième élément clé : un moteur de jeu démontrable.

## Que sont les moteurs de jeu

Un moteur de jeu **** est le cadre logiciel qui permet les beaux paramètres, les mouvements rapides des joueurs et les comportements réalistes des personnages dans les jeux que vous aimez. Un moteur de jeu comprend généralement des bibliothèques et des programmes de support qui fournissent aux développeurs un cadre leur évitant de recréer des systèmes fondamentaux (tels que la physique, les graphismes et les mécanismes de jeu) à partir de zéro pour chaque jeu. Les moteurs de jeu peuvent également inclure le traitement audio et vidéo, le rendu d'effets 3D et des fonctionnalités d'intelligence artificielle. 

Un moteur de jeu est l'étape sur laquelle un jeu est construit. 

La plupart des jeux auxquels nous aimons jouer doivent leur existence à deux des moteurs de jeu les plus populaires au monde : Unity et Unreal Engine. L'Unreal Engine, développé par Epic Games, a été utilisé dans des titres populaires comme "Fortnite", "Street Fighter V" et la série "Gears of War". Unity, un autre acteur majeur de l'industrie des moteurs de jeu, a donné vie à des jeux comme "Hearthstone", "Ori and the Blind Forest" et "Pokémon Go".

Parce que Starknet ouvre la promesse du jeu crypto, une ruée de projets a commencé à créer des jeux sur Starknet. Mais ce qui manque encore, c'est un moteur de jeu *crypto* qui permet aux développeurs de créer des jeux sans avoir à écrire de code personnalisé pour la physique, la logique et les mécanismes de jeu de base, tout en restant en chaîne. 

## Dojo - le premier moteur de jeu démontrable

**[Dojo](https://dojoengine.org/)** est ce moteur de jeu crypto. Il s'agit d'un moteur de jeu et d'une chaîne d'outils prouvés et construits par la communauté pour créer des jeux en chaîne et des mondes autonomes. Il concrétise la promesse du jeu cryptographique.

Le nombre de jeux sur Starknet utilisant Dojo augmente rapidement. Certains des plus populaires incluent:

* [Influence](https://www.influenceth.io/) - Un grand MMO de stratégie situé dans une ceinture d'astéroïdes lointaine avec une économie ouverte appartenant aux joueurs. Les utilisateurs peuvent acheter des NFT qui leur permettent d'explorer et de développer des astéroïdes. Tous les astéroïdes vivent dans le même monde et les joueurs peuvent interagir les uns avec les autres. 
* [Realms](https://linktr.ee/BibliothecaDAO) - Un jeu de stratégie avec 8 000 cartes terrestres avec des noms, des formes, des tailles et des caractéristiques géographiques spécifiques qui donnent aux utilisateurs (propriétaires de ces terres) une utilité en chaîne, telle que la génération de ressources et des primitives de logement fongibles permettant des jeux économiques.
* [CafeCosmos](https://www.cafecosmos.io/) - Un jeu terrestre en chaîne où les utilisateurs doivent gérer efficacement les ressources. Cela comprend la collecte de ressources, l'agriculture et l'élevage d'animaux, la fabrication d'appareils et de meubles, le commerce d'actifs et bien plus encore. 

## Composants du dojo

L'écosystème Dojo comprend les composants suivants : 

* ECS (Entity Component System) écrit en [Le Caire](https://github.com/starkware-libs/cairo)
* Planificateur de migration Sozu
* Torii mise en réseau & pile d'indexation
* Réseau de développement Katana RPC

Passons en revue chacun d'entre eux en détail. 

Un système **ECS** est un modèle de conception utilisé dans le développement de jeux pour promouvoir un code plus maintenable. Un système ECS permet au développeur du jeu de donner des caractéristiques uniques (composants) aux objets (entités) du jeu, permettant à l'ensemble de la scène de fonctionner comme un système intégré. 

Le framework ECS de Dojo, spécialement conçu pour le développement de jeux basés sur la blockchain, favorise la modularité, l'efficacité et la flexibilité, qui sont essentielles pour gérer les défis uniques des environnements de blockchain. Cela permet la création de jeux complexes et dynamiques sur la blockchain, prenant en charge divers mécanismes de jeu et interactions tout en exploitant les avantages transparents et décentralisés de la technologie blockchain. 

Et, puisque Dojo est écrit au Caire, il maximise l'efficacité du code qui doit être prouvé. (Pour en savoir plus sur les subtilités du Caire et sur ce que nous entendons par prouvable, [nous vous recommandons cet article](https://starkware.medium.com/moving-from-solidity-to-cairo-7d44f9723c68).) 

**Sozo** est une chaîne d'outils adaptée spécifiquement à la planification de la construction et de la migration. En d'autres termes, Sozo peut être utilisé pour déployer les jeux développés sur Starknet. Avec une simple commande \`sozo migrate\`, il est possible de déployer une instance du jeu "world" en chaîne. Sozo est uniquement disponible en tant qu'outil d'interface de ligne de commande (CLI). Cependant, une interface graphique est actuellement en développement.

**Torii** est une couche complète d'indexation et de mise en réseau pour les mondes Dojo. Étant donné que le système Torii est construit au-dessus de Dojo, il est conçu pour indexer tous les événements se produisant dans les mondes de jeu déployés en chaîne. Il organise systématiquement l'état des mondes de Dojo, rendant l'interrogation des données pour les clients pratique et efficace. Compte tenu de nombreux changements d'état dans les jeux - imaginez que chaque clic est un changement d'état - des systèmes de requête efficaces sont une fonctionnalité utile au-dessus de la pile Dojo. Les requêtes sur Torii sont faites en [GraphQL](https://www.apollographql.com/blog/graphql/basics/what-is-graphql-introduction/).

**Katana** est un nœud Starknet local extrêmement rapide conçu pour prendre en charge le développement local avec Dojo. Katana permet aux développeurs de tester leurs applications sur ce « devnet » pour un développement local rapide. Les développeurs peuvent utiliser le réseau Katana pour tester les transactions envoyées pendant le jeu. Katana fournit des méthodes RPC pratiques qui peuvent être utilisées pour modifier la configuration du réseau selon les besoins (par exemple, modifier le temps de blocage ou autoriser des transactions sans frais, etc.). De plus, Katana prend en charge la version [v0.3.0](https://github.com/starkware-libs/starknet-specs/tree/v0.3.0) des spécifications Starknet JSON-RPC (la dernière version en date de juin 2023). Les appels Starknet JSON natifs, tels que starknet_getTransactionReceipt, starknet_getStorageAt, peuvent être utilisés sur Katana. 

## L'avenir du jeu Dojo et Crypto 

La communauté Dojo recherche et construit en permanence afin de faire avancer le jeu cryptographique. En plus d'améliorer les composants actuels, les principaux développeurs travaillent sur :

* L3 pour les jeux
* Mises à jour optimistes
* Preuve côté client 
* Transferts d'actifs entre chaînes

Regardons chacun d'eux et ce que cela signifie pour les jeux.

**L3 pour les jeux** - Dojo étudie la viabilité de développer des jeux en tant que L3 sur Starknet. Cela signifie qu'une chaîne distincte est déployée au-dessus de Starknet qui prouve périodiquement l'exécution de ses transactions et soumet la preuve sur Starknet (le L2). Starknet agrège cette preuve avec d'autres transactions sur le réseau et soumet la preuve à Ethereum L1, où la preuve est vérifiée. [Cette solution pourrait augmenter l'évolutivité des jeux](https://medium.com/starkware/fractal-scaling-from-l2-to-l3-7fe238ecfb4f) même plusieurs fois plus. (En tant qu'étape supplémentaire, pensez si chaque fois qu'un joueur tente un niveau dans le jeu, une nouvelle couche est créée pour une utilisation unique au-dessus de la couche de jeu.)

**Mises à jour optimistes** - Combien de fois nous sommes-nous assis en silence à attendre que le texte "transaction en cours…" dans nos portefeuilles devienne vert et affiche la transaction comme "vérifiée" ? Beaucoup. Si chaque mouvement qu'un joueur effectue dans le jeu est envoyé en tant que transaction séparée, le joueur perdrait *beaucoup* de temps à attendre que la transaction soit acceptée. 

Les mises à jour optimistes - que Dojo travaille à ajouter en tant que fonctionnalité supplémentaire à sa pile - éliminent ce problème en exécutant de manière optimiste la transaction côté client (dans le navigateur lui-même) et en permettant au joueur de continuer le jeu. Si, pour une raison quelconque, le résultat de la transaction est différent de ce qui a été exécuté dans le navigateur, le jeu réconciliera les modifications.

**Prouvage côté client**- Parallèlement aux mises à jour optimistes exécutées côté client, Dojo explore la possibilité de prouver côté client des parties de transactions envoyées en chaîne. Cela permettrait aux jeux construits au-dessus de Dojo de masquer efficacement certaines des entrées transmises par l'utilisateur, car une preuve ZK de la réception de ces entrées côté client peut être créée. Cette preuve ZK, à son tour, pourrait être envoyée en chaîne au séquenceur, qui exécute le reste de la transaction. 

**Utilisation des preuves de stockage** - Les preuves de stockage sont un moyen cryptographique de stocker les informations de la blockchain afin qu'elles puissent être partagées entre les chaînes. Semblables aux oracles, ils fournissent la preuve que l'information est vraie. Mais contrairement aux oracles, ils n'ont pas besoin de faire confiance à un tiers pour cette preuve - avec les preuves de stockage, la confiance est intégrée au stockage. Les preuves de stockage permettent également de prouver la validité de l'état pour une autre chaîne ou couche construite au-dessus d'Ethereum. 

Dojo travaille avec l'équipe [Herodotus](https://www.herodotus.dev/) pour implémenter des preuves de stockage dans Dojo afin que le transfert</em> de l'actif *inter-chaînes ne soit pas nécessaire. La propriété d'un actif d'une chaîne différente pourrait être prouvée avec une preuve de stockage, et l'utilisateur pourrait utiliser ses actifs dans différents jeux sur différentes chaînes ou couches. (Voir la partie sur les jeux en cours de construction en tant que L3 séparés au-dessus de Starknet discuté ci-dessus.)</p>

## Conclusion

Dojo est le premier moteur de jeu prouvable au monde et est rendu possible grâce à la disponibilité de Starknet et Cairo. Avec des moteurs de jeu éprouvés tels que Dojo, de véritables jeux de cryptographie en chaîne commencent à voir le jour. La promesse « interopérabilité et appropriation » est remplie une étape à la fois.

Si vous souhaitez aider la communauté Dojo à construire l'avenir, rendez-leur visite à [https://dojoengine.org](https://dojoengine.org/) ou contactez leur Discord.