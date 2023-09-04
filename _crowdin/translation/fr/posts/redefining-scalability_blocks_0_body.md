L'évolutivité de la blockchain a toujours été un sujet brûlant. Presque tous les réseaux de blockchain vantent un nombre élevé de transactions par seconde (TPS) comme argument de vente. Cependant, le TPS n'est pas une mesure valide pour comparer les réseaux blockchain, ce qui rend difficile l'évaluation de leurs performances relatives. De plus, les grands nombres de TPS ont généralement un coût - ce qui pose la question : ces réseaux évoluent-ils réellement ou augmentent-ils simplement leur débit ?

Examinons donc comment définir l'évolutivité, quels compromis sont faits pour y parvenir et pourquoi les cumuls de validité sont la solution d'évolutivité ultime.

### Toutes les transactions ne sont pas égales

Tout d'abord, nous devons établir notre affirmation selon laquelle la métrique simple et pratique du TPS n'est pas une mesure précise de l'évolutivité.

Pour compenser les nœuds pour l'exécution des transactions (et pour dissuader les utilisateurs de spammer le réseau avec des calculs inutiles), les blockchains facturent des frais proportionnels à la charge de calcul imposée à la blockchain. Dans Ethereum, la complexité de la charge de calcul est mesurée en gaz*.*Étant donné que le gaz est une mesure très pratique de la complexité des transactions, le terme sera également utilisé tout au long de cet article pour les chaînes de blocs non Ethereum, même s'il est généralement spécifique à Ethereum.

Les transactions diffèrent considérablement en complexité et, par conséquent, en quantité de gaz qu'elles consomment. Bitcoin, le pionnier des transactions peer-to-peer sans confiance, ne prend en charge que le script Bitcoin rudimentaire. Ces simples transferts d'adresse à adresse consomment peu d'essence. En revanche, les chaînes de contrats intelligents comme Ethereum ou Solana prennent en charge une machine virtuelle et des langages de programmation complets de Turing qui permettent des transactions beaucoup plus complexes. Par conséquent, les dApps comme Uniswap nécessitent beaucoup plus de gaz.

C'est pourquoi cela n'a aucun sens de comparer les TPS de différentes blockchains. Ce que nous devrions plutôt comparer, c'est la capacité de calcul - ou le débit.

Toutes les Blockchains ont une taille de bloc (variable) et un temps de bloc qui déterminent combien de*unités de calcul*peuvent être traitées par bloc et à quelle vitesse**un nouveau bloc peut être ajouté. Ensemble, ces deux variables déterminent le débit**d'une blockchain.

### Qu'est-ce qui limite l'évolutivité ?

Les blockchains s'efforcent d'être des réseaux inclusifs et décentralisés au maximum. Pour y parvenir, deux propriétés fondamentales doivent être contrôlées.

#### **1. Exigences matérielles**

La décentralisation d'un réseau blockchain est déterminée par la capacité du nœud le plus faible du réseau à vérifier la blockchain et à conserver son état. Par conséquent, les coûts de fonctionnement d'un nœud (matériel, bande passante et stockage) doivent être maintenus aussi bas que possible pour permettre au plus grand nombre de personnes possible de devenir des participants sans autorisation au réseau sans confiance.

#### 2**.**État de croissance

La croissance de l'état fait référence à la rapidité avec laquelle la blockchain se développe. Plus une blockchain permet de débit par unité de temps, plus la blockchain se développe rapidement. Les nœuds complets stockent l'historique du réseau et doivent pouvoir valider l'état du réseau. L'état d'Ethereum est stocké et référencé à l'aide de structures efficaces telles que des arbres. Au fur et à mesure que l'état grandit, de nouvelles feuilles et branches s'y ajoutent, rendant de plus en plus complexe et chronophage l'exécution de certaines actions. Au fur et à mesure que la chaîne augmente en taille, elle aggrave l'exécution dans le pire des cas par les nœuds, ce qui entraîne un temps toujours plus long pour valider de nouveaux blocs. Au fil du temps, cela augmente également le temps total nécessaire à la synchronisation d'un nœud complet.

### Impacts néfastes de l'augmentation du débit

#### 1. Nombre de nœuds

Les exigences minimales pour exécuter un nœud et le nombre de nœuds sont :

* Bitcoin¹ : 350 Go d'espace disque sur le disque dur, connexion 5 Mbit/s, 1 Go de RAM, CPU >1 Ghz. **Nombre de nœuds : ~10 000**
* Ethereum² : 500 Go d'espace disque SSD, connexion 25 Mbit/s, 4 à 8 Go de RAM, CPU 2 à 4 cœurs. **Nombre de nœuds : ~6 000**
* Solana³ : 1,5 To+ d'espace disque SSD, connexion 300 Mbit/s, 128 Go de RAM CPU 12+ cœurs. **Nombre de nœuds : ~1 200**

Notez que plus les exigences en matière de CPU, de bande passante et de stockage pour les nœuds requis pour le débit d'une blockchain sont importantes, moins il y a de nœuds sur le réseau, ce qui entraîne une décentralisation plus faible et un réseau moins inclusif.

#### 2. Il est temps de synchroniser un nœud complet

Lors de l'exécution d'un nœud pour la première fois, il doit se synchroniser avec tous les nœuds existants, télécharger et valider l'état du réseau depuis le bloc de genèse jusqu'à la pointe de la chaîne. Ce processus doit être aussi rapide et efficace que possible pour permettre à quiconque d'agir en tant que participant sans autorisation du protocole.

En prenant comme indicateur les tests de synchronisation des nœuds</a>et 2 2021 de Jameson Lopp

2020 Bitcoin Node 1 et[2021](https://blog.lopp.net/2021-altcoin-node-sync-tests/), le tableau 1 compare le temps nécessaire pour synchroniser un nœud complet de Bitcoin contre Ethereum contre Solana sur un PC grand public moyen.</p> 

![Tableau 1. Comparaison du débit de la blockchain et de la synchronisation des nœuds](/assets/1_gmpi_1c9zipoc-znrh7b5q.png "Tableau 1. Comparaison du débit de la blockchain et de la synchronisation des nœuds")

Le tableau 1 montre que l'augmentation du débit entraîne des temps de synchronisation plus longs car de plus en plus de données doivent être traitées et stockées.

Alors que des améliorations sont constamment apportées au logiciel des nœuds pour atténuer le défi de la blockchain croissante (réduction de l'empreinte du disque, vitesses de synchronisation plus rapides, meilleure résilience aux collisions, modularisation de certains composants, etc.), les nœuds ne peuvent évidemment toujours pas suivre le rythme des augmentations. au débit.



### Comment définir l'évolutivité ?

L'évolutivité est le terme le plus mal représenté dans l'espace blockchain. Bien qu'il soit souhaitable d'augmenter le débit, ce n'est qu'une partie du puzzle.

***Évolutivité**signifie**transactions supplémentaires**pour les**mêmes matériels**.*

Pour cette raison, l'évolutivité peut être séparée en deux catégories.



#### Évolutivité du séquenceur

Le séquençage décrit l'acte de commander et de traiter des transactions dans un réseau. Comme établi précédemment, toute blockchain pourrait augmenter trivialement son débit en augmentant la taille du bloc et en raccourcissant son temps de blocage - jusqu'à un point où l'impact négatif sur sa décentralisation est jugé trop important. Mais, peaufiner ces paramètres simples ne fournit pas les améliorations requises. L'EVM d'Ethereum peut, en théorie,[jusqu'à ~2 000 TPS](https://twitter.com/dankrad/status/1459607325854121989), ce qui est insuffisant pour répondre à la demande d'espace de bloc à long terme. Pour faire évoluer le séquençage, Solana a fait des innovations impressionnantes : en tirant parti d'un environnement d'exécution parallélisable et d'un mécanisme de consensus intelligent, qui permet un débit beaucoup plus efficace. Mais, malgré ses améliorations, il n'est ni suffisant ni évolutif. À mesure que Solana augmente son débit, les coûts matériels pour exécuter un nœud et traiter les transactions augmentent également.



#### Évolutivité de la vérification

*L'évolutivité de la vérification décrit les approches qui augmentent le débit sans alourdir les nœuds avec des coûts matériels en constante augmentation.*Plus précisément, il fait référence aux innovations cryptographiques telles que les preuves de validité. Ils sont la raison pour laquelle Validity Rollups peut faire évoluer une blockchain de manière durable.

**Qu'est-ce qu'un cumul de validité ?**

Les cumuls de validité (également appelés « cumuls ZK ») déplacent le calcul et le stockage d'état hors chaîne, mais conservent une petite quantité de certaines données en chaîne. Un contrat intelligent sur la blockchain sous-jacente maintient la racine d'état du Rollup. Sur le Rollup, un lot de transactions hautement compressées, ainsi que la racine de l'état actuel, sont envoyés à un prouveur hors chaîne. Le prouveur calcule les transactions, génère une preuve de validité des résultats et de la nouvelle racine d'état, et l'envoie à un vérificateur en chaîne. Le vérificateur vérifie la preuve de validité, et le contrat intelligent qui maintient l'état du cumul le met à jour avec le nouvel état fourni par le prouveur.

**Comment les cumuls de validité évoluent-ils avec les mêmes exigences matérielles ?**

Même si les Provers nécessitent du matériel haut de gamme, ils n'impactent pas la décentralisation d'une blockchain ; car la validité des transactions est garantie par des preuves mathématiquement vérifiables.

Ce qui compte, ce sont les exigences de vérification des preuves. Étant donné que les données impliquées sont hautement compressées et largement extraites par le calcul, leur impact sur les nœuds de la blockchain sous-jacente est minime*.*

Les vérificateurs (nœuds Ethereum) ne nécessitent pas de matériel haut de gamme et la taille des lots n'augmente pas les exigences matérielles. Seules les transitions d'état et une petite quantité de données d'appel doivent être traitées et stockées par les nœuds. Cela permet à tous les nœuds Ethereum de vérifier les lots Validity Rollup à l'aide de leur matériel existant.

**Plus il y a de transactions, moins c'est cher**

Dans les chaînes de blocs traditionnelles, plus il y a de transactions, plus cela devient cher pour tout le monde à mesure que l'espace de bloc se remplit - et les utilisateurs doivent surenchérir les uns sur les autres sur un marché payant pour que leurs transactions soient incluses.

Pour un cumul de validité, cette dynamique est inversée. Vérifier un lot de transactions sur Ethereum a un certain coût. À mesure que le nombre de transactions dans un lot augmente, le coût de vérification du lot augmente à un rythme exponentiellement plus lent. L'ajout de plusieurs transactions à un lot entraîne des frais de transaction moins chers, même si le coût de vérification du lot augmente, car il est amorti sur toutes les transactions du lot. Les cumuls de validité veulent autant de transactions que possible dans un lot, afin que les frais de vérification puissent être partagés entre tous les utilisateurs. Au fur et à mesure que la taille du lot augmente à l'infini, les frais amortis par transaction convergent vers zéro, c'est-à-dire que plus il y a de transactions sur un cumul de validité, moins il est bon marché pour tout le monde.

dYdX, une dApp alimentée par un Validity Rollup, voit fréquemment des tailles de lots de plus de 12 000 transactions. La comparaison de la consommation de gaz des mêmes transactions sur Mainnet et sur un Validity Rollup illustre les gains d'évolutivité :

Régler une transaction dYdX sur Ethereum Mainnet :**200 000 gaz**

Régler une transaction dYdX sur StarkEx :**<500 gaz**

Une autre façon de voir les choses : le coût principal des cumuls de validité évolue de manière linéaire avec le nombre d'utilisateurs dans le même lot.



#### Pourquoi les cumuls optimistes ne sont pas aussi évolutifs qu'on pourrait le penser

En théorie, les cumuls optimistes offrent presque les mêmes avantages d'évolutivité que les cumuls de validité. Mais il existe une distinction importante : les cumuls optimistes optimisent le cas moyen, tandis que les cumuls de validité optimisent le cas le plus défavorable. Étant donné que les systèmes de blockchain fonctionnent dans des conditions extrêmement conflictuelles, l'optimisation pour le pire des cas est le seul moyen d'assurer la sécurité.

Dans le pire des cas du cumul optimiste, les transactions d'un utilisateur ne seront pas vérifiées par les vérificateurs de fraude. Ainsi, pour contester la fraude, l'utilisateur doit synchroniser un nœud complet Ethereum, un nœud complet L2 et calculer lui-même la transaction suspecte.

Dans le pire des cas du cumul de validité, un utilisateur n'aurait qu'à synchroniser un nœud complet Ethereum pour vérifier la preuve de validité, s'épargnant ainsi la charge de calcul.

Contrairement aux cumuls de validité, les coûts des cumuls optimistes évoluent de manière linéaire avec le nombre de transactions au lieu du nombre d'utilisateurs, ce qui les rend plus chers.



### Dernière pièce du puzzle - Accès sans autorisation à l'état de cumul

Pour garantir la validité des transactions, les utilisateurs doivent exécuter un nœud Ethereum uniquement. Toutefois, les utilisateurs et les développeurs peuvent souhaiter afficher et exécuter l'état et l'exécution du correctif cumulatif à diverses fins. Un nœud L2 d'indexation*répond parfaitement*ce besoin. Non seulement il permet aux utilisateurs de voir les transactions sur le réseau, mais il s'agit également d'un élément essentiel de l'infrastructure nécessaire au fonctionnement de l'infrastructure de l'écosystème. Des indexeurs comme The Graph, Alchemy, Infura ; Les réseaux Oracle comme Chainlink et les explorateurs de blocs sont tous entièrement pris en charge par un nœud L2 d'indexation sans autorisation.



### Conclusion

De nombreuses approches pour s'attaquer au problème de la scalabilité de la blockchain se concentrent à tort sur l'augmentation du*débit*. Mais cela néglige l'impact des débits sur les nœuds : les exigences matérielles sans cesse croissantes pour traiter les blocs et stocker l'historique du réseau, et comment cela inhibe la décentralisation d'un réseau.

Avec l'avènement de la cryptographie à l'épreuve de la validité, une blockchain peut atteindre**véritable évolutivité**qui n'alourdit pas les nœuds avec des coûts sans cesse croissants et permet une large décentralisation. Plus de transactions avec des calculs puissants et plus complexes pour le même matériel sont désormais possibles, inversant le dilemme du marché des frais dans le processus - plus il y a d'activité sur un Validity Rollup, moins c'est cher !

[SwagtimusPrime.eth](https://twitter.com/SwagtimusP?t=pO0L1vGIhuC-ZgWOusQYtA&s=09)et[Louis Guthmann](https://twitter.com/GuthL)

¹ De<https://bitcoin.org/en/bitcoin-core/features/requirements>

² De <https://ethereum.org/en/developers/docs/nodes-and-clients/>

³ De<https://docs.solana.com/running-validator/validator-reqs>

4 Fortement simplifié et ajusté pour les tailles moyennes de blocs dynamiques