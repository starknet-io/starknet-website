### TL;DR

* Récursive Proving est en direct sur le réseau principal, mise à l'échelle des applications StarkEx ainsi que StarkNet avec une seule preuve
* Il renforce l'échelle et offre des avantages en coûts, et la latence (une occurrence rare et excitante de l'échelle et de la latence se déplaçant en tandem, sans être un compromis)
* Il définit la scène pour L3 et d'autres bénéficitsGo lire le post de blog sur[Récursive Proving](https://medium.com/@starkware/recursive-starks-78f8dd401025). C'est cool 😉

### Mise à l'échelle !

Les preuves récurrentes — alimentées par le calcul général du Caire — sont maintenant en production. Ceci marque une augmentation majeure de la puissance de mise à l'échelle L2 avec STARKs. Il fournira rapidement une multiplication du nombre de transactions qui peuvent être écrites sur Ethereum via une seule preuve.

Jusqu’à présent, la mise à l'échelle STARK a fonctionné en « lançant» des dizaines ou même des centaines de milliers de transactions en une seule preuve, qui a été écrit sur Ethereum. Avec la récursion, beaucoup de ces preuves peuvent être « enroulées » en une seule preuve.

Cette méthode est maintenant en production pour une multitude d'applications basées sur le Caire : des applications fonctionnant sur StarkEx, le moteur de mise à l'échelle SaaS de StarkWare et StarkNet, le rollup sans permission.

### L'histoire jusqu'à présent

Depuis la première preuve du réseau principal, en mars 2020, les développements suivants ont façonné la façon dont les STARKs sont utilisés.

### Echelle basée sur STARK

En juin 2020, la première solution de mise à l'échelle basée sur STARK —[StarkEx](https://youtu.be/P-qoPVoneQA)— a été déployée sur le réseau principal Ethereum. StarkEx a un Prover qui effectue de grands calculs hors chaîne et produit un STARK étanche pour leur exactitude, et un Verifier qui vérifie cette preuve sur la chaîne. Les contraintes pour ce premier déploiement ont été « manuscrites » par les ingénieurs de StarkWare, limitant ainsi considérablement la vitesse des fonctionnalités pour StarkEx. Nous avons conclu qu’un langage de programmation permettant de prouver que le calcul général est nécessaire — le Caire.

#### Cairo

À l'été 2020, le Caire a fait sa[première apparition sur le réseau principal Ethereum](https://medium.com/starkware/hello-cairo-3cb43b13b209). Le Cairo signifie CPU Algebraic Intermediate Representation (AIR), et comprend un seul AIR qui vérifie le jeu d'instructions de ce “CPU”. Il a ouvert la porte à des preuves de codage pour une logique commerciale plus complexe, pour des instructions informatiques arbitraires, et pour le faire de manière plus rapide et plus sûre. Un programme Cairo peut prouver l’exécution de la logique d’une seule application. Mais un programme du Caire peut aussi être une concaténation de plusieurs de ces applications — SHARP.

#### SHARP

SHARP — un SHARed Prover — prend des transactions dans plusieurs applications distinctes et les prouve en un seul et même étanchéité STARK. Les applications combinent leurs lots de transactions, remplissant la capacité d'un STARK-proofs plus rapidement. Les transactions sont traitées à un taux et à une latence améliorées. La frontière suivante : Récursive Proofs, mais pas seulement pour une logique codée en dur, mais plutôt pour**le calcul général**.

Pour comprendre le plein avantage de la Récursive Proving, il vaut la peine de comprendre un peu plus sur la façon dont (non-récursive) la preuve a été effectuée par SHARP jusqu'à présent. Dessiner 1 représente un flux non récursif typique:

![Dessin 1 : Un flux de preuve non récursif typique](/assets/recursive_starks_01.png "Dessin 1 : Un flux de preuve non récursif typique")

Ici, les déclarations arrivent au fil du temps. Lorsqu'un seuil de capacité (ou temps) est atteint, un relevé combiné important (c.-à-d. un train) est généré. Cette déclaration combinée n'est prouvée que lorsque toutes les déclarations individuelles ont été reçues. Cette preuve prend beaucoup de temps à prouver (approximativement la somme du temps nécessaire pour prouver chaque déclaration individuellement).

La preuve que des instructions extrêmement importantes sont éventuellement limitées par des ressources de calcul disponibles telles que la mémoire. Avant la récursion, il s’agissait en fait de la barrière d’évolutivité limite de STARK.

### Qu'est-ce que la preuve récursive ?

Avec les preuves STARK, le temps nécessaire pour prouver qu'une déclaration est à peu près linéaire avec le temps nécessaire pour exécuter la requête. En outre, si la preuve prend du temps en T, la vérification de la preuve prend à peu près du temps de log(T) qui est généralement appelé « compression logarithmique ». En d'autres termes, avec STARKs, vous passez beaucoup moins de temps à vérifier l'instruction qu'à la calculer.

[Le Caire](https://starkware.co/cairo/)permet d'exprimer des déclarations de calcul générales qui peuvent être prouvées par des preuves STARK et vérifiées par les vérificateurs STARK correspondants.

C'est là que commence la possibilité d'effectuer[récursion](https://en.wikipedia.org/wiki/Recursion): de la même manière que nous écrivons un programme du Caire qui prouve la justesse de milliers de transactions, Nous pouvons également écrire un programme Cairo qui vérifie plusieurs preuves STARK. Nous pouvons générer une seule preuve attestant de la validité de plusieurs preuves « en amont ». C'est ce que nous appelons le Récursive Proving.

En raison de la compression logarithmique et du temps de preuve à peu près linéaire, prouver une vérification d'une preuve STARK prend relativement peu de temps (ne devrait être que quelques minutes dans un avenir proche).

Lors de la mise en œuvre de la Récursion, SHARP peut prouver les déclarations à leur arrivée. Leurs preuves peuvent être fusionnées encore et encore en preuves récursives dans diverses pratiques jusqu'à ce qu'elles soient à un certain moment, la preuve qui en résulte est soumise à un contrat de vérification sur la chaîne. Un motif typique est représenté dans le dessin 2 :

![Dessin 2 : Un flux récursif typique.](/assets/recursive_starks_02.png "Dessin 2 : Un flux récursif typique.")

### Avantages immédiats de la preuve récurrente

#### Réduction du coût en chaîne

En dehors de la chauve-souris, nous réalisons une « compression » de plusieurs preuves en un, ce qui implique un coût de vérification sur la chaîne plus faible par transaction (où chaque relevé peut inclure plusieurs transactions).

Avec la récursion, la barrière des ressources informatiques (par ex. mémoire) que la taille limitée des preuves jusqu'à présent, est éliminée, car chaque instruction de taille limitée peut être prouvée séparément. Ainsi, lors de l'utilisation de la récursion, la taille effective de la récursion du train est presque illimitée, et le coût par transaction peut être réduit par des ordres de grandeur.

En termes pratiques, la réduction dépend de la latence acceptable (et du taux auquel les transactions arrivent). De plus, puisque chaque preuve est généralement accompagnée de certaines données telles que les données sur la chaîne il y a des limites à la quantité de données qui peuvent être écrites en chaîne avec une seule preuve. Néanmoins, réduire les coûts par ordre de grandeur et encore mieux est facilement réalisable.

#### Latence réduite

Le modèle de preuve récursive réduit la latence de prouver de grands trains de déclarations. Ceci est le résultat de deux facteurs :

1. Les instructions entrantes peuvent être prouvées**en parallèle**(par opposition à une instruction combinée extrêmement grande).
2. Il n'est pas nécessaire d'attendre que le dernier relevé dans le train arrive pour commencer à prouver. Au contraire, les preuves peuvent être combinées avec de nouvelles déclarations à leur arrivée. Cela signifie que la latence de la dernière déclaration rejoignant un Train, est à peu près le temps qu’il faut pour prouver que la dernière déclaration plus le temps qu’il faut pour prouver une déclaration Recursive Verifier (qui atteste de toutes les déclarations qui ont déjà « embarqué » ce train en particulier).

Nous développons et optimisons activement la latence de preuve de la déclaration Recursive Verifier. Nous nous attendons à ce que cela atteigne l'ordre de quelques minutes en quelques mois. Ainsi, un SHARP très efficace peut offrir des latences de quelques minutes à quelques heures, selon le coût de la transaction par rapport au coût de la chaîne par transaction. Cela représente une amélioration significative par rapport à la latence de SHARP.

#### Facilitation L3

Le développement de la déclaration Recursive Verifier au Caire ouvre également la possibilité de soumettre des preuves à StarkNet, comme cette déclaration peut être cuite dans un contrat intelligent StarkNet. Cela permet de construire[déploiements L3 sur le réseau public StarkNet](https://medium.com/starkware/fractal-scaling-from-l2-to-l3-7fe238ecfb4f)(un réseau L2).

Le modèle récursif s'applique également à l'agrégation des preuves de L3, à vérifier par une seule preuve sur L2. L'hyper-scaling y est donc également atteint.

### Plus de subtilités

#### Récursion Applicative

La récursion offre encore plus de possibilités aux plates-formes et aux applications qui souhaitent augmenter leur coût et leurs performances.

Chaque preuve STARK atteste de la validité d'une déclaration appliquée à une entrée connue sous le nom d'« entrée publique » (ou « sortie du programme » en termes de Cairo). Conceptuellement, la récursion STARK compresse deux preuves avec*deux entrées*dans*une*preuve avec deux entrées. En d'autres termes, alors que le nombre de preuves est réduit, le nombre d'entrées est maintenu constant. Ces entrées sont alors généralement utilisées par une application afin de mettre à jour un état sur L1 (e. pour mettre à jour une racine d'état ou effectuer un retrait en chaîne).

Si la requête récursive est autorisée à être*respectueuse de l'application*, i.e. reconnaît la sémantique de l'application elle-même, il peut à la fois compresser deux preuves en un*et*combiner les deux entrées en une. La déclaration qui en résulte atteste de la validité de la combinaison d'entrée basée sur la sémantique de l'application, donc le nom Applicative Recursion (voir Dessin 3, par exemple)..

![Dessin 3 : Exemple de Récursion Applicative](/assets/recursive_starks_03.png "Dessin 3 : Exemple de Récursion Applicative")

Ici, la déclaration 1 atteste d'une mise à jour d'état de A à B et la déclaration 2 atteste d'une nouvelle mise à jour de B à C. Les preuves des déclarations 1 et 2 peuvent être combinées en une troisième déclaration, attestant de la mise à jour directe de A à C. En appliquant une logique similaire récursivement, on peut réduire le coût des mises à jour d'état très significativement jusqu'à l'exigence de latence de finalité.

Un autre exemple important de la Récursion Applicative est de compresser les données de rollup à partir de preuves multiples. Par exemple, pour un Rollup de Validité comme StarkNet, chaque mise à jour de stockage sur L2 est également incluse en tant que données de transmission sur L1, pour assurer la disponibilité des données. Cependant, il n'est pas nécessaire d'envoyer plusieurs mises à jour pour le même élément de stockage, car seule la valeur finale des transactions attestée par la preuve vérifiée est requise pour la disponibilité des données. Cette optimisation est déjà effectuée dans un bloc*unique*de StarkNet. Cependant, en générant une preuve par bloc, la Récursion Applicative peut compresser ces données de rollup sur*plusieurs blocs L2*multiples. Cela peut entraîner une réduction significative des coûts, permettant des intervalles de blocs plus courts sur L2, sans sacrifier la évolutivité des mises à jour L1.

À noter : La récursion applicative peut être combinée avec la récursion agnostique de l'application comme décrite plus haut. Ces deux optimisations sont indépendantes.

#### Réduction de la complexité du vérificateur On-chain

La complexité du vérificateur STARK dépend du type d'instructions qu'il est conçu pour vérifier. En particulier, pour les instructions du Caire, la complexité du vérificateur dépend des éléments spécifiques autorisés dans la langue du Caire, et, plus spécifiquement, les intégrés pris en charge (si nous utilisons la métaphore du processeur pour le Caire, sont alors intégrés l'équivalent de microcircuits dans un processeur : les calculs effectués si souvent qu'ils nécessitent leur propre calcul optimisé).

La langue du Caire continue d’évoluer et d’offrir des constructions de plus en plus utiles. D'autre part, le vérificateur Récursif nécessite seulement l'utilisation d'un petit sous-ensemble de ces built-ins. Ainsi, un SHARP récursif peut soutenir avec succès n'importe quelle déclaration au Caire en soutenant la langue complète dans les vérificateurs récursifs. Plus précisément, le vérificateur de Solidity L1 n'a besoin que de vérifier les preuves récursives, et donc peut être limité à un sous-ensemble plus stable de la langue du Caire : le L1 Verifier n'a pas besoin de suivre les derniers et les plus grands bâtiments. En d'autres termes, la vérification des déclarations complexes en constante évolution est reléguée à L2, laissant le L1 Verifier pour vérifier des instructions plus simples et plus stables.

#### Empreinte calculée réduite

Avant récursion, la capacité d'agréger plusieurs requêtes en une seule preuve était limitée par la taille maximale de la requête qui pouvait être prouvée sur les instances de calcul disponibles (et le temps qu'il fallait pour générer de telles preuves).

Avec la répétition, il n'est plus nécessaire de prouver des déclarations aussi importantes. En conséquence, plus petit, des instances de calcul moins coûteuses et plus disponibles peuvent être utilisées (même si plus de ces instances peuvent être nécessaires qu'avec de grandes prouesses monolithiques). Cela permet de déployer des instances de proue dans un plus grand nombre d'environnements physiques et virtuels que ce qui était précédemment possible.

### Summary

Des preuves récurrentes de calcul général desservent désormais plusieurs systèmes de production, y compris StarkNet, sur Ethereum réseau principal.

Les avantages de la récursion se réaliseront progressivement, car elle continue à permettre de nouvelles améliorations, et il produira bientôt une hyper-échelle, réduira les frais de gaz et améliorera la latence en débloquant le potentiel de parallélisation.

Il apportera des avantages importants en termes de coûts et de latence, ainsi que de nouvelles opportunités telles que le L3 et la récurrence applicative. L'optimisation du vérificateur récursif est en cours et des performances et des coûts encore plus élevés devraient être fournis au fil du temps.



**Gidi Kaempfer**, Chef de l'ingénierie de base, StarkWare