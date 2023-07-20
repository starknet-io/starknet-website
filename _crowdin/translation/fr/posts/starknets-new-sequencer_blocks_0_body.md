### TL;DR

* Un nouveau séquenceur Starknet est en cours de développement
* Il est open-source sous la licence Apache 2.0
* Le premier objectif est d'augmenter le débit de Starknet

### Un nouveau séquenceur tout neuf

Nous sommes heureux d'annoncer qu'un nouveau Séquenceur Starknet est en cours de développement. Alors que la pile technologique de Starknet évolue vers l'open-source, à la suite de [Cairo 1.0](https://medium.com/starkware/open-sourcing-cairo-1-0-b3100a664bb0) et du [Papyrus Full Node](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202), nous poursuivons maintenant avec le nouveau séquenceur de Starknet. Il sera open-source, disponible sous licence Apache 2.0, et vous pouvez dès maintenant consulter [le dépôt (repo)](https://github.com/starkware-libs/blockifier) !

La construction d'un nouveau Séquenceur fait partie de la [Feuille de route de Starknet](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de) que nous avons présentée il y a quelques mois. L'implémentation du nouveau séquenceur débutera par le remplacement du **Blockifier**, le module du séquenceur qui effectue l'exécution de blocs. Comme expliqué dans la feuille de route, cela devrait améliorer les performances de Starknet.

Notre approche pour construire ce séquenceur est la même que celle qui nous a guidés dans Starknet Alpha. Le séquenceur **sera implémenté en plusieurs étapes**, et nous partageons aujourd'hui son premier module. Au fil du temps, de nouveaux composants du séquenceur seront achevés, jusqu'à ce qu'un séquenceur basé sur Rust remplace entièrement le séquenceur actuel basé sur Python.

### Que fait le séquenceur?

Sur Starknet, après que les utilisateurs envoient des transactions, le premier arrêt dans le parcours de la transaction vers le scaling apporté par STARK est le séquenceur. Dans le protocole Starknet, les séquenceurs sont responsables de l'ordonnancement des transactions et de la production de blocs. Une fois que le bloc est créé par un séquenceur, et approuvé par le protocole du consensus, les prouveurs prennent le relais et génèrent une preuve pour la L1.

![](/assets/1_ndrekwqunjixo_wskdeycw-1.png)

### Open-Sourcing

Starknet Alpha a été lancé sur Mainnet en novembre 2021. Dès le début, il était déterminé à partager le pouvoir du scaling STARK avec le monde.

Aujourd'hui, nous publions le premier d'une série de modules du nouveau séquenceur open-source. Il faudra plusieurs mois pour que tous les modules et sous-modules soient déployés. La mise en open source de tout permettra aux membres de la communauté de contribuer au développement et d'auditer la base de code.

Cela rapprochera Starknet du point où le séquençage sera décentralisé et permissionless. Nous concevons maintenant le protocole décentralisé de StarkNet et nous encourageons la communauté à participer à [la recherche et à la discussion associées](https://community.starknet.io/t/starknet-decentralized-protocol-consensus/5386).

### Performance

Le séquenceur original de Starknet est en grande partie une adaptation de l’infrastructure StarkEx. Maintenant, il y a un besoin d'une infrastructure construite spécialement pour les exigences d'un réseau décentralisé hautement performant.

Construit en Rust, le nouveau séquenceur est conçu et développé en ayant en tête la performance. Le nouveau séquenceur s'appuie également sur des bases solides : Papyrus, le nouveau [nœud complet Starknet](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202), gérera la gestion de l'état, et cairo-rs, la nouvelle machine virtuelle Cairo de LambdaClass, accélérera l'exécution de Cairo. Nous nous attendons à ce que le nouveau séquenceur améliore tous les aspects de l'actuel séquenceur. On s'attend à ce que le débit et la latence du réseau s'améliorent considérablement avec l'intégration de ce séquenceur dans Starknet.

Nous prévoyons également que d'autres infrastructures et outils de développement puissent utiliser le nouveau séquenceur pour améliorer l'expérience de développement. Les performances du noeud complet devraient également s'améliorer, ainsi que l'ensemble des frameworks de test.

### Résumé

Nous sommes heureux de vous annoncer aujourd'hui le nouveau séquenceur open-source. Son premier module est déjà disponible pour la communauté à examiner et sera suivi de plus de modules dans les mois à venir. Nous sommes également heureux de franchir une étape supplémentaire dans notre feuille de route pour améliorer les performances de Starknet. Nous visons à rendre le réseau plus efficace et plus accessible, et nous apprécions le soutien de tous ceux qui nous ont rejoints dans cette aventure.