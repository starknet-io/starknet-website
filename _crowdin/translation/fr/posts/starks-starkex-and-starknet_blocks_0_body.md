### TL;DR

* Les STARK permettent la mise à l'échelle de la blockchain en prouvant efficacement l'intégrité des calculs
* StarkEx est un moteur de mise à l'échelle spécifique à l'application
* Starknet est un réseau de couche 2 de contrat intelligent sans autorisation

### STARK

Les STARK (Scalable, Transparent ARgument of Knowledge) sont un système de preuve qui permet de prouver et de vérifier des calculs. Il permet de traiter un gros calcul, de générer une preuve de l'exactitude du calcul, puis de vérifier la preuve en très peu d'étapes.

Les STARK peuvent jouer un rôle clé dans l'évolutivité de la blockchain en permettant d'effectuer de gros calculs hors chaîne, là où c'est moins cher, ne laissant que la vérification, qui nécessite une fraction du calcul, à effectuer en chaîne. En d'autres termes, en effectuant très peu d'étapes en chaîne, le vérificateur affirme l'intégrité d'un calcul beaucoup plus important effectué hors chaîne.

À l'aide de STARK, les solutions de couche 2 regroupent et calculent des milliers de transactions, puis vérifient leur validité en chaîne avec une seule preuve STARK. Le coût du processus en chaîne est réparti entre toutes les transactions du lot. Cela se traduit par la sécurité Ethereum et un faible coût du gaz par transaction.

Le faible coût de calcul inaugurera une nouvelle classe d'applications qui n'étaient auparavant pas réalisables en chaîne. Ces propriétés font des STARK un excellent élément de base pour améliorer l'expérience utilisateur et réduire les coûts de gaz, tout en maintenant la sécurité de la couche de règlement Ethereum.

StarkWare fournit deux solutions pour faire évoluer Ethereum avec STARK : StarkEx et Starknet.

### StarkEx

[StarkEx](https://starkware.co/starkex/) est un cadre pour créer des solutions de mise à l'échelle autorisées et spécifiques à l'application. StarkEx est une boîte à outils de [flux d'application](https://docs.starkware.co/starkex-v4/starkex-deep-dive/regular-flows) utiles que les projets peuvent utiliser pour réaliser des calculs hors chaîne bon marché. Une preuve STARK, attestant de l'exactitude de l'exécution, est générée hors chaîne. Une telle preuve peut inclure jusqu'à 12 000 à 500 000 transactions (selon le type de transaction). La preuve est ensuite envoyée au vérificateur STARK pour être acceptée en chaîne. Cela signifie une vérification pour toutes les transactions - pour un coût de gaz amorti incroyablement bas par transaction.

Quelques exemples d'applications déployées sur StarkEx sont dYdX (trading perpétuel), Immutable et Sorare (NFT - frappe et trading), DeversiFi (trading au comptant) et Celer (DeFi Pooling).

StarkWare ajoute continuellement plus de flux d'applications à StarkEx, suivant le marché et les besoins de ses clients.

### Starknet

[Starknet](https://starkware.co/starknet/) est un réseau de couche 2 sans autorisation où tout utilisateur ou développeur peut déployer des contrats intelligents développés dans la langue du Caire.

Comparable à l'expérience de contrat intelligent Ethereum, à l'intérieur de l'écosystème Starknet, votre contrat peut interagir avec tout autre contrat déployé sur Starknet, permettant des protocoles richement composables. Les contrats Starknet peuvent également interagir avec les contrats Ethereum via la transmission de messages asynchrones.

Contrairement à StarkEx, où les applications sont responsables de la soumission des transactions, les séquenceurs Starknet regroupent les transactions et les envoient pour être traitées et prouvées. (Les séquenceurs de Starknet sont actuellement exploités par StarkWare avec des plans futurs de décentralisation.) Cela signifie qu'une fois que les applications déploient leurs contrats Cairo, elles n'ont pas à se soucier de l'exécution d'une infrastructure d'opérateur supplémentaire. Starknet prend en charge le mode de disponibilité des données Rollup, ce qui signifie que l'état du rollup est écrit sur Ethereum avec les preuves STARK.

Une immense communauté de développeurs est profondément engagée dans l'écosystème Starknet, créant des applications, des outils et une infrastructure. Des dizaines d'applications sont déjà en ligne sur testnet - DeFi, jeux, vote, IA et plus encore. De plus, des outils de développement tels que l'explorateur de blocs, un environnement et un framework de test local, des SDK en plusieurs langues et plus encore, sont en cours de construction par la communauté Starknet. De plus, des discussions actives ont lieu sur la plate-forme [Shamans](https://community.starknet.io/), proposant des suggestions d'améliorations, des fonctionnalités potentielles et des meilleures pratiques.

### Résumer

[StarkEx](https://youtu.be/P-qoPVoneQA) et Starknet sont des solutions de mise à l'échelle basées sur STARK. Les deux offrent évolutivité, faibles coûts de gaz et sécurité, mais ont des exigences de fonctionnement et des modèles d'interopérabilité différents. StarkEx pourrait être la bonne solution pour une application qui est largement autonome et s'intègre dans les API fournies par StarkEx. Starknet pourrait être mieux adapté à un protocole qui nécessite une interaction synchrone avec d'autres protocoles ou qui a des besoins qui vont au-delà de ce que propose StarkEx.

Les STARK ont révolutionné la façon dont les applications peuvent être construites sur Ethereum. StarkEx et Starknet continueront d'activer des applications qui n'étaient auparavant pas viables et repousseront les limites de ce qui est possible sur la blockchain.

Cet article a été écrit en collaboration par [Tim Gestson](https://twitter.com/IcemanTim) et l'équipe [StarkWare](https://starkware.co/)