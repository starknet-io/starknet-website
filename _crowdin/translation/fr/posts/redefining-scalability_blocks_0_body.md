L'évolutivité de la blockchain a toujours été un sujet chauffé. Presque tous les réseaux blockchain présentent un nombre élevé de transactions par seconde (TPS) comme point de vente. Cependant, le TPS n'est pas une métrique valide pour comparer les réseaux blockchain avec — ce qui rend difficile l'évaluation de leurs performances relatives. De plus, les gros numéros TPS ont généralement un coût — ce qui pose la question : ces réseaux sont-ils réellement à l'échelle, ou ne feraient-ils qu'augmenter leur débit ?

Examinons donc comment définir l'évolutivité, quels compromis sont faits pour l'atteindre, et pourquoi les Rollups Validity sont la solution ultime d'évolutivité.

### Toutes les transactions ne sont pas égales

Premièrement, nous devons affirmer que la mesure simple et pratique du TPS n’est pas une mesure précise de l’évolutivité.

Pour compenser les nœuds pour l'exécution des transactions (et pour dissuader les utilisateurs de spammer le réseau avec un calcul inutile), les blockchains chargent un frais proportionnel au fardeau de calcul imposé sur la blockchain. En Ethereum, la complexité de la charge de calcul est mesurée en*gaz.*Parce que le gaz est une mesure très pratique de la complexité de la transaction, le terme sera également utilisé dans tout cet article pour les blockchains non-Ethereum, même s'il est typiquement spécifique à Ethereum.

Les transactions varient considérablement en termes de complexité et, par conséquent, de quantité de gaz qu'elles consomment. Bitcoin, le pionnier des transactions sans confiance, ne prend en charge que le script rudimentaire Bitcoin. Ces simples transferts d'adresse à adresse utilisent peu de gaz. En revanche, les chaînes de contrats intelligents comme Ethereum ou Solana prennent en charge une machine virtuelle et des langages de programmation complets Turing qui permettent des transactions beaucoup plus complexes. Par conséquent, les dApps comme Uniswap nécessitent beaucoup plus de gaz.

C'est pourquoi il est absurde de comparer le TPS de différentes blockchains. Ce que nous devrions comparer, c'est la capacité de calcul — ou le débit.

Toutes les Blockchains ont une taille de bloc et un temps de bloc (variable) qui déterminent combien d'unités de calcul**peuvent être traitées par bloc et comment*accélérer*un nouveau bloc peut être ajouté. Ensemble, ces deux variables déterminent le débit**d'une blockchain.

### Qu'est-ce qui limite la Scalabilité?

Les Blockchains s’efforcent d’être des réseaux décentralisés et inclusifs au maximum. Pour y parvenir, deux propriétés fondamentales doivent être contrôlées.

#### **1. Exigences matérielles**

La décentralisation d'un réseau blockchain est déterminée par la capacité du nœud le plus faible du réseau de vérifier la blockchain et de conserver son état. Par conséquent, les coûts de fonctionnement d'un nœud (matériel, bande passante, et le stockage) doivent être maintenus aussi bas que possible pour permettre au plus grand nombre de personnes de devenir des participants sans autorisation dans le réseau sans confiance.

#### 2**.**Croissance d'Etat

La croissance de l'état indique la vitesse de croissance de la blockchain. Plus une chaîne de blocs de débit permet de se produire par unité de temps, plus la chaîne de blocs grandit rapidement. Les nœuds complets stockent l’historique du réseau et doivent être en mesure de valider l’état du réseau. L'état d'Ethereum est stocké et référencé à l'aide de structures efficaces telles que les arbres. Au fur et à mesure de la croissance de l'État, de nouvelles feuilles et de nouvelles branches y sont ajoutées, rendant de plus en plus complexe et de plus en plus long l'exécution de certaines actions. Au fur et à mesure que la chaîne prend de l'ampleur, elle aggrave la pire exécution de cas par nœud, ce qui mène à une période de plus en plus longue pour valider de nouveaux blocs. Avec le temps, cela augmente également le temps total nécessaire à la synchronisation d'un noeud complet.

### Impacts néfastes de l'accroissement de débit

#### 1. Nombre de nœuds

Les exigences minimales pour exécuter le nombre de noeuds et de noeuds sont :

* Bitcoin1 : 350 Go d'espace disque dur, 5 Mbit/s de connexion, 1 Go de RAM, CPU >1 Ghz. **Nombre de noeuds : ~1000**
* Ethereum2: Espace disque SSD de 500 GB+, connexion de 25 Mbit/s, mémoire RAM de 4–8 Go, 2 à 4 cœurs. **Nombre de noeuds : ~6,000**
* Solana3: Espace disque SSD 1.5TB+, connexion 300 Mbit/s, 128 Go CPU RAM 12+ cœurs. **Nombre de noeuds : ~1.200**

Notez que plus le processeur est grand, plus la bande passante et les exigences de stockage pour les nœuds requis pour le débit d'une blockchain, moins de nœuds sur le réseau — ce qui entraîne une décentralisation plus faible et un réseau moins inclusif.

#### 2. Il est temps de synchroniser un nœud complet

Lors de l'exécution d'un noeud pour la première fois, il doit se synchroniser avec tous les nœuds existants, télécharger, et valider, l'état du réseau depuis le bloc genèse jusqu'au bout de la chaîne. Ce processus devrait être aussi rapide et efficace que possible pour permettre à quiconque d'agir comme un participant sans permission du protocole.

Faire des[Noeuds Bitcoin 2020 de Jameson Lopp](https://blog.lopp.net/2020-bitcoin-node-performance-tests/)et[Tests de synchronisation de Node 2021](https://blog.lopp.net/2021-altcoin-node-sync-tests/)comme indicateur, Le tableau 1 compare le temps nécessaire pour synchroniser un nœud complet de Bitcoin vs. Ethereum vs. Solana sur un PC de consommation moyenne.

![Tableau 1. Comparaison du débit de la blockchain et de la synchronisation des nœuds](/assets/1_gmpi_1c9zipoc-znrh7b5q.png "Tableau 1. Comparaison du débit de la blockchain et de la synchronisation des nœuds")

Le tableau 1 montre que l'augmentation du débit conduit à des temps de synchronisation plus longs parce que de plus en plus de données doivent être traitées et stockées.

Alors que des améliorations au logiciel de nœuds sont constamment apportées pour atténuer le défi de la blockchain croissante (réduisant l'empreinte disque, des vitesses de synchronisation plus rapides, une résilience de crash plus forte, la modularisation de certains composants, etc. , les nœuds ne peuvent évidemment pas encore suivre les augmentations de débit.

### Comment définir la Scalability ?

L'évolutivité est le terme le plus mal représenté dans l'espace blockchain. Bien qu’une augmentation de la vitesse soit souhaitable, ce n’est qu’une partie du puzzle.

***Échelle**signifie**plus de transactions**pour le**même matériel**.*

C'est pourquoi l'évolutivité peut être séparée en deux catégories.

#### Évolutivité du séquenceur

Le séquençage décrit l'acte de commande et de traitement des transactions dans un réseau. Tel qu'établi précédemment, toute blockchain pourrait augmenter son débit de façon triviale en augmentant la taille du bloc et en réduisant le temps de blocage — jusqu'à ce que l'impact négatif de sa décentralisation soit jugé trop important. Mais la mise à jour de ces paramètres simples ne fournit pas les améliorations nécessaires. L'EVM d'Ethereum peut, en théorie,[gérer jusqu'à ~2 000 TPS](https://twitter.com/dankrad/status/1459607325854121989), ce qui est insuffisant pour répondre à la demande d'espace de blocs à long terme. Pour scinder le séquençage, Solana a fait quelques innovations impressionnantes : tirer parti d'un environnement d'exécution parallèle et d'un mécanisme de consensus intelligent, qui permet un débit beaucoup plus efficace. Mais malgré ses améliorations, elle n’est ni suffisante ni évolutive. Comme Solana augmente son débit, les coûts matériels pour exécuter un nœud et traiter les transactions augmentent également.

#### Vérification de l'évolutivité

*L'évolutivité de la vérification décrit des approches qui augmentent le débit sans alourdir les noeuds avec des coûts matériels toujours croissants.*Plus précisément, elle fait référence à des innovations cryptographiques comme des preuves de validité. Ils sont la raison pour laquelle les Rollups de Validité peuvent redimensionner une blockchain de manière durable.

**Qu’est-ce qu’un Rollup de Validité?**

Les Rollups de validité (également appelés « ZK-Rollups ») déplacent le calcul et le stockage hors chaîne tout en conservant une petite quantité de certaines données sur la chaîne. Un contrat intelligent sur la blockchain sous-jacente maintient la racine d'état du Rollup. Sur le Rollup, un lot de transactions très comprimées, ainsi que la racine de l'état actuel, sont envoyées à un Prover hors chaîne. Le Prover calcule les transactions, génère une preuve de validité des résultats et de la racine du nouvel état, et l'envoie à un vérificateur sur la chaîne. Le vérificateur vérifie la preuve, et le contrat intelligent qui maintient l'état du Rollup le met à jour vers le nouvel état fourni par le Prover.

**Comment les Rollups Validity sont-ils mis à l'échelle avec les mêmes exigences matérielles ?**

Même si Provers nécessite du matériel haut de gamme, ils n'affectent pas la décentralisation d'une blockchain ; parce que la validité des transactions est garantie par des preuves mathématiquement vérifiables.

Ce qui importe, ce sont les exigences de vérification des preuves. Parce que les données impliquées sont fortement compressées et largement abstraites à travers le calcul, son impact sur les noeuds de la blockchain sous-jacente est minimal*.*

Les vérificateurs (Ethereum nodes) ne nécessitent pas de matériel haut de gamme, et la taille des lots n'augmente pas les exigences matérielles. Seules les transitions d'état et une petite quantité de données d'appel doivent être traitées et stockées par les nœuds. Cela permet à tous les nœuds Ethereum de vérifier les lots de Rollup valides en utilisant leur matériel existant.

**Plus il y a de transactions, moins il est cher**

Dans les blockchains traditionnels, plus il y a de transactions plus cela coûte cher pour tout le monde car l'espace de blocage est rempli — et les utilisateurs doivent surenchérir mutuellement sur un marché de frais pour que leurs transactions soient incluses.

Pour un Rollup de validité, cette dynamique est inversée. La vérification d'un lot de transactions sur Ethereum a un certain coût. À mesure que le nombre de transactions à l'intérieur d'un lot augmente, le coût de vérification du lot croît à un rythme exponentiellement plus lent. L'ajout de plus de transactions à un lot entraîne des frais de transaction moins élevés même si le coût de vérification de lot augmente — parce qu'il est amorti parmi toutes les transactions à l'intérieur du lot. Les Rollups de validité veulent autant de transactions que possible dans un lot — afin que les frais de vérification puissent être partagés entre tous les utilisateurs. Comme la taille du lot augmente à l'infini, les frais amortis par transaction convergent à zéro, i. ., plus il y a de transactions sur un Rollup de Validité, moins il est cher pour tout le monde.

dYdX, un dApp propulsé par un Rollup de validité, voit fréquemment les tailles de lots de plus de 12 000 transactions. La comparaison de la consommation de gaz des mêmes transactions sur Mainnet vs. sur un Rollup de Validité illustre les gains d'évolutivité:

Réglage d'une transaction dYdX sur le réseau principal Ethereum :**200 000 gaz**

Réglage d'une transaction dYdX sur StarkEx:**<500 gaz**

Une autre façon de le considérer : le coût principal des Rollups de validité est linéaire avec le nombre d’utilisateurs dans le même lot.

#### Pourquoi les Rollups optimistes ne sont pas aussi évolutifs qu'on pourrait le penser

En théorie, les Rollups Optimistes offrent presque les mêmes avantages d’évolutivité que les Rollups de validité. Mais il y a une différence importante : les Rollups optimisent pour le cas moyen, tandis que les Rollups Validity optimisent pour le pire des cas. Parce que les systèmes blockchain fonctionnent dans des conditions extrêmement contradictoires, l'optimisation dans le pire des cas est la seule façon de garantir la sécurité.

Dans le pire des cas du Rollup optimiste, les transactions d’un utilisateur ne seront pas vérifiées par des vérificateurs de fraude. Ainsi, pour contester la fraude, l'utilisateur doit synchroniser un nœud complet Ethereum, un nœud complet L2 et calculer lui-même la transaction suspecte.

Dans le pire des cas de Validity Rollup, un utilisateur n’aurait besoin que de synchroniser un noeud complet Ethereum pour vérifier la preuve de validité, en leur économisant eux-mêmes la charge informatique.

Contrairement aux Rollups de Validité, le coût des Rollups Optimistes est linéaire avec le nombre de transactions au lieu du nombre d’utilisateurs, ce qui les rend plus chers.

### Pièce finale du puzzle – Accès sans permission à l’État de Rollup

Pour garantir la validité des transactions, les utilisateurs doivent utiliser un noeud Ethereum uniquement. Cependant, les utilisateurs et les développeurs peuvent vouloir voir, et exécuter, l'état et l'exécution du Rollup à diverses fins. Un*noeud L2 d'indexation*remplit parfaitement ce besoin. Non seulement cela permet aux utilisateurs de voir les transactions dans le réseau, mais c'est aussi un élément essentiel d'infrastructure qui est nécessaire au bon fonctionnement des infrastructures écosystémiques. Les indexeurs comme The Graph, Alchemy, Infura ; les réseaux Oracle comme Chainlink, et les explorateurs de blocs, tous ces outils sont entièrement supportés par un noeud L2 sans permission, indexant le noeud L2.

### Conclusion

De nombreuses approches pour s'attaquer à l'évolutivité de la blockchain se concentrent à tort sur l'augmentation du*débit*. Mais cela néglige l'impact des débits sur les nœuds : les exigences matérielles sans cesse croissantes pour traiter les blocs et l'historique du réseau de stockage. et comment cela empêche la décentralisation d'un réseau.

Avec l'avènement de la cryptographie résistant à la validité, une blockchain peut atteindre**une véritable évolutivité**qui ne charge pas les nœuds avec des coûts toujours croissants et permet une décentralisation large. Plus de transactions avec des calculs puissants et plus complexes pour le même matériel sont maintenant possibles, Inverser le dilemme du marché des frais dans le processus — plus il y a d’activité sur un Rollup de validité, moins il est coûteux!

[SwagtimusPrime.eth](https://twitter.com/SwagtimusP?t=pO0L1vGIhuC-ZgWOusQYtA&s=09)et[Louis Guthmann](https://twitter.com/GuthL)

1 De<https://bitcoin.org/en/bitcoin-core/features/requirements>

2 De<https://ethereum.org/en/developers/docs/nodes-and-clients/>

3 De<https://docs.solana.com/running-validator/validator-reqs>

4 Fortement simplifié et ajusté pour les tailles moyennes de blocs dynamiques