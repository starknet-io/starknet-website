### TL;DR

* Les STARKs permettent la mise à l'échelle de la blockchain en prouvant efficacement l'intégrité des calculs
* StarkEx est un moteur de mise à l'échelle spécifique à l'application
* StarkNet est un réseau sans permission, smart contract Layer 2

### **STARKs**

Les STARKs (Scalable et Transparent ARgument of Knowledge) sont un système de preuve qui permet de prouver et de vérifier les calculs. Il permet de traiter un gros calcul, en générant une preuve de l’exactitude du calcul, puis en vérifiant la preuve en très peu de temps.

Les STARKs peuvent jouer un rôle clé dans l'évolutivité de la blockchain en permettant de faire de gros calculs hors chaîne, là où il est moins cher, ne laissant que la vérification, qui nécessite une fraction du calcul, à faire sur la chaîne. En d'autres termes, en effectuant très peu d'étapes sur la chaîne, le vérificateur affirme l'intégrité d'un calcul beaucoup plus important qui a été fait hors chaîne.

En utilisant STARKs, les solutions de couche 2 sont en lot et calculent des milliers de transactions, puis vérifient leur validité en chaîne avec une seule preuve STARK. Le coût du processus on-chain est divisé entre**toutes les**transactions du lot. Il en résulte une sécurité Ethereum et un faible coût de gaz par transaction.

Le faible coût de calcul engendrera une nouvelle classe d’applications qui n’étaient pas réalisables auparavant sur la chaîne. Ces propriétés font des STARKs un excellent élément de construction pour améliorer l'expérience utilisateur et réduire les coûts de gaz. tout en maintenant la sécurité de la couche de règlement Ethereum.

StarkWare propose deux solutions pour mettre à l'échelle Ethereum avec STARK : StarkEx et StarkNet.

### **StarkEx**

[StarkEx](https://starkware.co/starkex/)est un cadre pour créer des solutions d'échelle autorisées, spécifiques à l'application. StarkEx est une boîte à outils de flux[d'applications utiles](https://docs.starkware.co/starkex-v4/starkex-deep-dive/regular-flows)que les projets peuvent utiliser pour réaliser des calculs hors chaîne bon marché. Une preuve STARK, attestant de l'exactitude de l'exécution, est générée hors chaîne. Une telle preuve peut comprendre jusqu'à 12 000 à 500 000 transactions (selon le type d'opération). La preuve est ensuite envoyée au vérificateur STARK pour être acceptée sur la chaîne. Cela signifie une vérification pour toutes les transactions — pour un coût de gaz incroyablement faible par transaction.

Quelques exemples d'applications déployées sur StarkEx sont dYdX (trading perpétuel), Immutable et Sorare (NFTs — la mendicité et le trading), DeversiFi (trading sur place) et Celer (DeFi Pooling).

StarkWare ajoute continuellement plus de flux d'applications à StarkEx, en suivant le marché et les besoins de ses clients.

### **StarkNet**

*[StarkNet](https://starkware.co/starknet/)est un réseau de couche 2 sans permission, où tout utilisateur ou développeur peut déployer des contrats intelligents développés dans la langue du Caire.*

Comparable à l'expérience de contrats intelligents d'Ethereum, dans l'écosystème StarkNet, votre contrat peut interagir avec tout autre contrat déployé sur StarkNet, permettant ainsi des protocoles composables. Les contrats StarkNet peuvent également interagir avec les contrats Ethereum via un passage de messages asynchrones.

Contrairement à StarkEx, où les applications sont responsables de l'envoi des transactions, les séquenceurs StarkNet sont en lot et les envoient pour être traités et prouvés. (Les séquenceurs de StarkNet sont actuellement exploités par StarkWare avec des projets futurs de décentralisation.) Cela signifie qu'une fois que les applications déploient leurs contrats du Caire, elles n'ont pas à se soucier de faire fonctionner une infrastructure d'opérateur supplémentaire. StarkNet prend en charge le mode de disponibilité des données Rollup, ce qui signifie que l'état du rollup est écrit sur Ethereum avec les preuves STARK.

Une énorme communauté de développeurs est profondément engagée dans l'écosystème StarkNet, la construction d'applications, d'outils et d'infrastructures. Des dizaines d’applications sont déjà en direct sur testnet — DeFi, jeux, vote, AI et plus encore. Plus encore, des outils de développement tels que l'explorateur de blocs, l'environnement de test local et le cadre, Les SDK en plusieurs langues et plus encore sont en cours de construction par la communauté StarkNet. En outre, des discussions actives ont lieu dans la plateforme[Shamans](https://community.starknet.io/), avec des suggestions d'améliorations, des fonctionnalités potentielles et des meilleures pratiques.

### **Pour résumer**

[StarkEx](https://youtu.be/P-qoPVoneQA)et StarkNet sont des solutions de redimensionnement basées sur STARK. Tous deux offrent une évolutivité, un faible coût de gaz et une sécurité, mais ont des exigences d’exploitation et des modèles d’interopérabilité différents. StarkEx pourrait être la bonne solution pour une application largement autonome et intégrée dans les API fournies par StarkEx. StarkNet peut être mieux adapté à un protocole qui nécessite une interaction synchronisée avec d'autres protocoles ou qui a des besoins qui vont au-delà de ce que StarkEx offre.

Les STARK ont révolutionné la façon dont les applications peuvent être construites sur Ethereum. StarkEx et StarkNet continueront d'activer les applications qui étaient auparavant inviables et repousseront les limites de ce qui est possible sur la blockchain.

Cet article a été écrit en collaboration par[Tim Gestson](https://twitter.com/IcemanTim)et l'équipe de[StarkWare](https://starkware.co/)