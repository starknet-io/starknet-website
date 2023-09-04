### TL;DR

* La preuve récursive est en direct sur Mainnet, mettant à l'échelle les applications StarkEx ainsi que StarkNet avec une seule preuve
* Il augmente l'échelle et offre des avantages en termes de coût et de latence (un événement rare et passionnant où l'échelle et la latence évoluent en tandem et ne constituent pas un compromis)
* Il prépare le terrain pour L3 et d'autres avantages. Allez lire le billet de blog sur[Recursive Proving](https://medium.com/@starkware/recursive-starks-78f8dd401025). C'est cool 😉

### Mise à l'échelle !

Des preuves récursives - alimentées par le calcul général de Cairo - sont maintenant en production. Cela marque une augmentation majeure de la puissance de la mise à l'échelle L2 avec les STARK. Il fournira rapidement une augmentation multiple du nombre de transactions pouvant être écrites sur Ethereum via une seule preuve.

Jusqu'à présent, la mise à l'échelle de STARK fonctionnait en «regroupant» des dizaines, voire des centaines de milliers de transactions en une seule preuve, qui était écrite sur Ethereum. Avec la récursivité, de nombreuses preuves de ce type peuvent être « regroupées » en une seule preuve.

Cette méthode est désormais en production pour une multitude d'applications basées sur Cairo : des applications exécutées sur StarkEx, le moteur de mise à l'échelle SaaS de StarkWare, et StarkNet, le cumul sans autorisation.

### L'histoire jusqu'ici

Depuis la première preuve sur Mainnet, en mars 2020, les développements suivants ont façonné la façon dont les STARK sont utilisés.

### Mise à l'échelle basée sur STARK

En juin 2020, la première solution de mise à l'échelle basée sur STARK -[StarkEx](https://youtu.be/P-qoPVoneQA)- a été déployée sur Ethereum Mainnet. StarkEx a un prouveur qui effectue de gros calculs hors chaîne et produit une preuve STARK pour leur exactitude, et un vérificateur qui vérifie cette preuve en chaîne. Les contraintes pour ce premier déploiement ont été "écrites à la main" par les ingénieurs de StarkWare, limitant ainsi considérablement la vitesse des fonctionnalités pour StarkEx. Nous avons conclu qu'un langage de programmation pour prendre en charge la preuve du calcul général est nécessaire - Cairo.

#### Cairo

À l'été 2020, Le Caire a fait sa[première apparition sur Ethereum Mainnet](https://medium.com/starkware/hello-cairo-3cb43b13b209). Cairo signifie CPU Algebraic Intermediate Representation (AIR), et comprend un seul AIR qui vérifie le jeu d'instructions de ce "CPU". Cela a ouvert la porte au codage de preuves pour une logique métier plus complexe, pour des déclarations de calcul arbitraires, et pour le faire de manière plus rapide et plus sûre. Un programme Cairo peut prouver l'exécution de la logique d'une seule application. Mais un programme Cairo peut également être une concaténation de plusieurs applications de ce type - SHARP.

#### POINTU

SHARP - un SHARed Prover - prend les transactions de plusieurs applications distinctes et les prouve toutes dans une seule épreuve STARK. Les applications combinent leurs lots de transactions, remplissant plus rapidement la capacité d'un test STARK. Les transactions sont traitées à un rythme et une latence améliorés. La prochaine frontière : les preuves récursives, mais pas seulement pour une logique codée en dur, mais plutôt pour**calcul général**.

Pour comprendre tous les avantages de la preuve récursive, il est utile de comprendre un peu plus comment la preuve (non récursive) était effectuée par SHARP jusqu'à présent. Le dessin 1 illustre un flux non récursif typique :

![Dessin 1 : Un flux de preuve non récursif typique](/assets/recursive_starks_01.png "Dessin 1 : Un flux de preuve non récursif typique")

Ici, les déclarations arrivent au fil du temps. Lorsqu'un certain seuil de capacité (ou de temps) est atteint, une grande déclaration combinée (alias Train) est générée. Cette déclaration combinée n'est prouvée qu'une fois que toutes les déclarations individuelles ont été reçues. Cette preuve prend beaucoup de temps à prouver (environ la somme de temps qu'il faut pour prouver chaque déclaration individuellement).

La preuve d'instructions extrêmement volumineuses est finalement limitée par les ressources de calcul disponibles telles que la mémoire. Avant la récursivité, c'était effectivement la barrière limitant l'évolutivité de la preuve STARK.

### Qu'est-ce que la preuve récursive ?

Avec les preuves STARK, le temps nécessaire pour prouver une déclaration est à peu près linéaire avec le temps nécessaire pour exécuter la déclaration. De plus, si prouver une déclaration prend un temps T, alors la vérification de la preuve prend environ un temps log(T), ce qui est généralement appelé « compression logarithmique ». En d'autres termes, avec les STARK, vous passez beaucoup moins de temps à vérifier le relevé qu'à le calculer.

[Cairo](https://starkware.co/cairo/)permet d'exprimer des déclarations informatiques générales qui peuvent être prouvées par des preuves STARK et vérifiées par les vérificateurs STARK correspondants.

C'est là que l'opportunité d'effectuer[récursivité](https://en.wikipedia.org/wiki/Recursion)entre en jeu : de la même manière que nous écrivons un programme Cairo qui prouve l'exactitude de milliers de transactions, nous pouvons également écrire un programme Cairo qui vérifie plusieurs preuves STARK. Nous pouvons générer une preuve unique attestant de la validité de multiples preuves « en amont ». C'est ce que nous appelons la preuve récursive.

En raison de la compression logarithmique et du temps de preuve à peu près linéaire, prouver une vérification d'une preuve STARK prend un temps relativement court (qui ne devrait être que de quelques minutes dans un proche avenir).

Lors de la mise en œuvre de la récursivité, SHARP peut prouver les déclarations à leur arrivée. Leurs preuves peuvent être fusionnées encore et encore en preuves récursives dans divers modèles jusqu'à ce que, à un certain moment, la preuve résultante soit soumise à un contrat de vérificateur en chaîne. Un modèle typique est illustré dans le dessin 2 :

![Dessin 2 : Un flux de preuve récursif typique.](/assets/recursive_starks_02.png "Dessin 2 : Un flux de preuve récursif typique.")

### Avantages immédiats de la preuve récursive

#### Réduction des coûts en chaîne

Dès le départ, nous obtenons la «compression» de plusieurs preuves en une seule, ce qui implique un coût de vérification en chaîne inférieur par transaction (où chaque déclaration peut inclure de nombreuses transactions).

Avec la récursivité, la barrière des ressources de calcul (par exemple la mémoire) qui limitait la taille des preuves jusqu'à présent, est éliminée, puisque chaque instruction de taille limitée peut être prouvée séparément. Par conséquent, lors de l'utilisation de la récursivité, la taille effective du train de récursivité est presque illimitée et le coût par transaction peut être réduit de plusieurs ordres de grandeur.

Concrètement, la réduction dépend de la latence acceptable (et du rythme d'arrivée des transactions). De plus, étant donné que chaque preuve est généralement accompagnée de certaines sorties telles que des données en chaîne, il y a des limites à la quantité de données qui peuvent être écrites en chaîne avec une seule preuve. Néanmoins, réduire les coûts d'un ordre de grandeur et même mieux est tout à fait réalisable.

#### Latence réduite

Le modèle de preuve récursive réduit la latence de la preuve de grands trains d'instructions. Ceci est le résultat de deux facteurs :

1. Les déclarations entrantes peuvent être prouvées**en parallèle**(par opposition à la preuve d'une déclaration combinée extrêmement grande).
2. Il n'est pas nécessaire d'attendre que la dernière déclaration du train arrive pour commencer à prouver. Au contraire, les preuves peuvent être combinées avec de nouvelles déclarations à mesure qu'elles arrivent. Cela signifie que la latence de la dernière déclaration rejoignant un train correspond à peu près au temps nécessaire pour prouver cette toute dernière déclaration plus le temps nécessaire pour prouver une déclaration de vérificateur récursif (qui atteste de toutes les déclarations qui ont déjà "intégré" ce train particulier).

Nous développons et optimisons activement la latence de la preuve de l'instruction Recursive Verifier. Nous nous attendons à ce que cela atteigne l'ordre de quelques minutes d'ici quelques mois. Par conséquent, un SHARP très efficace peut offrir des latences allant de quelques minutes à quelques heures, en fonction du compromis par rapport au coût en chaîne par transaction. Cela représente une amélioration significative de la latence de SHARP.

#### Faciliter L3

Le développement de la déclaration Recursive Verifier au Caire ouvre également la possibilité de soumettre des preuves à StarkNet, car cette déclaration peut être intégrée dans un contrat intelligent StarkNet. Cela permet de construire[déploiements L3 au-dessus du StarkNet](https://medium.com/starkware/fractal-scaling-from-l2-to-l3-7fe238ecfb4f)public (un réseau L2).

Le schéma récursif s'applique également à l'agrégation des preuves de L3, à vérifier par une seule preuve sur L2. Par conséquent, l'hyper-scalabilité y est également réalisée.

### Avantages plus subtils

#### Récursivité applicative

La récursivité ouvre encore plus d'opportunités pour les plates-formes et les applications souhaitant augmenter davantage leurs coûts et leurs performances.

Chaque preuve STARK atteste de la validité d'un énoncé appliqué à une entrée appelée «entrée publique» (ou «sortie de programme» en termes du Caire). Conceptuellement, la récursivité STARK comprime deux preuves avec*deux*entrées en*une*preuves avec deux entrées. En d'autres termes, alors que le nombre de preuves est réduit, le nombre d'entrées est maintenu constant. Ces entrées sont alors généralement utilisées par une application afin de mettre à jour un état sur L1 (par exemple pour mettre à jour une racine d'état ou effectuer un retrait en chaîne).

Si l'instruction récursive est autorisée à être*sensible à l'application*, c'est-à-dire qu'elle reconnaît la sémantique de l'application elle-même, elle peut à la fois compresser deux preuves en une seule*et*combiner les deux entrées en une seule. L'instruction résultante atteste de la validité de la combinaison d'entrée basée sur la sémantique de l'application, d'où le nom Applicative Recursion (voir Dessin 3, pour un exemple).

![Dessin 3 : Exemple de récursivité applicative](/assets/recursive_starks_03.png "Dessin 3 : Exemple de récursivité applicative")

Ici, la déclaration 1 atteste d'une mise à jour de l'état de A à B et la déclaration 2 atteste d'une nouvelle mise à jour de B à C. Les preuves de la déclaration 1 et de la déclaration 2 peuvent être combinées dans une troisième déclaration, attestant de la mise à jour directe de A à C. En appliquant une logique similaire de manière récursive, on peut réduire le coût des mises à jour d'état de manière très significative jusqu'à l'exigence de latence de finalité.

Un autre exemple important de récursivité applicative consiste à compresser les données cumulées de plusieurs preuves. Par exemple, pour un cumul de validité tel que StarkNet, chaque mise à jour de stockage sur L2 est également incluse en tant que données de transmission sur L1, pour garantir la disponibilité des données. Cependant, il n'est pas nécessaire d'envoyer plusieurs mises à jour pour le même élément de stockage, car seule la valeur finale des transactions attestée par la preuve vérifiée est requise pour la disponibilité des données. Cette optimisation est déjà effectuée dans un bloc*unique*StarkNet. Cependant, en générant une preuve par bloc, Applicative Recursion peut compresser ces données de cumul sur*multiples*blocs L2. Cela peut entraîner une réduction significative des coûts, permettant des intervalles de bloc plus courts sur L2, sans sacrifier l'évolutivité des mises à jour L1.

À noter : la récursivité applicative peut être combinée avec la récursivité indépendante de l'application, comme illustré précédemment. Ces deux optimisations sont indépendantes.

#### Complexité réduite du vérificateur en chaîne

La complexité du vérificateur STARK dépend du type d'instructions qu'il est conçu pour vérifier. En particulier, pour les instructions Cairo, la complexité du vérificateur dépend des éléments spécifiques autorisés dans le langage Cairo et, plus précisément, des éléments intégrés pris en charge (si nous utilisons la métaphore CPU pour Cairo, les éléments intégrés sont l'équivalent de micro -circuits dans un CPU : calculs effectués si fréquemment qu'ils nécessitent leur propre calcul optimisé).

Le langage Cairo continue d'évoluer et offre de plus en plus d'éléments intégrés utiles. D'autre part, le vérificateur récursif ne nécessite l'utilisation que d'un petit sous-ensemble de ces éléments intégrés. Par conséquent, un SHARP récursif peut prendre en charge avec succès n'importe quelle instruction du Caire en prenant en charge le langage complet dans les vérificateurs récursifs. Plus précisément, le vérificateur de solidité L1 n'a besoin que de vérifier les preuves récursives et peut donc être limité à un sous-ensemble plus stable du langage du Caire : le vérificateur L1 n'a pas besoin de suivre les dernières et les meilleures fonctionnalités intégrées. En d'autres termes, la vérification des déclarations complexes en constante évolution est reléguée à L2, laissant le vérificateur L1 vérifier des déclarations plus simples et plus stables.

#### Empreinte de calcul réduite

Avant la récursivité, la capacité d'agréger plusieurs déclarations en une seule preuve était limitée par la taille maximale de la déclaration qui pouvait être prouvée sur les instances de calcul disponibles (et le temps qu'il fallait pour générer de telles preuves).

Avec la récursivité, il n'est plus nécessaire de prouver de telles déclarations extrêmement volumineuses. En conséquence, des instances de calcul plus petites, moins chères et plus disponibles peuvent être utilisées (bien qu'un plus grand nombre d'entre elles puisse être nécessaire qu'avec de grands prouveurs monolithiques). Cela permet le déploiement d'instances de preuve dans plus d'environnements physiques et virtuels qu'auparavant.

### Résumé

Les preuves récursives de calcul général servent désormais plusieurs systèmes de production, y compris StarkNet, sur Mainnet Ethereum.

Les avantages de la récursivité se concrétiseront progressivement, car elle continue de permettre de nouvelles améliorations, et elle offrira bientôt une hyper-échelle, réduira les frais de gaz et améliorera la latence en libérant le potentiel de la parallélisation.

Il apportera des avantages significatifs en termes de coût et de latence, ainsi que de nouvelles opportunités telles que L3 et la récursivité applicative. Une optimisation plus poussée du vérificateur récursif est en cours et des performances et des coûts encore meilleurs devraient être fournis au fil du temps.



**Gidi Kaempfer**, responsable de l'ingénierie centrale, StarkWare