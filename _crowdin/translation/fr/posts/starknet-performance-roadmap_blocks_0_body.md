### TL;DR

* Les rollups de validité ne sont pas limités dans le débit de la même manière que les L1. Cela donne lieu à des TPS potentiellement beaucoup plus élevés sur les rollups de validité L2.
* StarkNet performance roadmap aborde un élément clé du système : le séquenceur.
* Nous présentons ici la feuille de route pour les améliorations de performances :\
  — parallélisation séquenceur\
  — Une nouvelle implémentation de rouille pour la VM du Caire\
  — Réimplémentation du séquenceur en rouille\
* Les aventuriers, qui sont testés dans la bataille, ne sont pas le goulot d'étranglement et peuvent gérer beaucoup plus qu'ils ne le font maintenant!

### Introduction

StarkNet a été lancé sur le réseau principal il y a près d'un an. Nous avons commencé à construire StarkNet en nous concentrant sur les fonctionnalités. Maintenant, nous mettons l'accent sur l'amélioration des performances grâce à une série d'étapes qui contribueront à améliorer l'expérience de StarkNet.

Dans ce post, nous expliquons pourquoi il y a un large éventail d'optimisations qui ne sont applicables qu'en rollups de validité, et nous partagerons notre plan pour mettre en œuvre ces étapes sur StarkNet. Certaines de ces étapes sont déjà implémentées dans StarkNet Alpha 0.10.2, qui a été publié sur Testnet les 16 et hier sur le réseau principal. Mais avant de discuter des solutions, passons en revue les limites et leur cause.

### Limitation de bloc: décollage de validité par rapport à L1

Une approche potentielle vers une évolutivité accrue de la blockchain et une augmentation du TPS serait de lever les limitations des blocs (en termes de gaz/taille) tout en maintenant le temps de bloc constant. Cela nécessiterait plus d'efforts de la part des producteurs de blocs (validateurs sur L1, séquenceurs sur L2) et demande donc une mise en œuvre plus efficace de ces composants. À cette fin, nous déplaçons maintenant l'attention vers les optimisations du séquenceur StarkNet, que nous décrivons plus en détail dans les sections suivantes.

Une question naturelle se pose ici. Pourquoi les optimisations du séquenceur sont-elles limitées à des rollups de validité, autrement dit, Pourquoi ne pouvons-nous pas mettre en œuvre les mêmes améliorations sur L1 et éviter complètement la complexité des rollups de validité ? Dans la section suivante, nous affirmons qu'il y a une différence fondamentale entre les deux, permettant une large gamme d'optimisations sur L2 qui ne sont pas applicables à L1.

### Pourquoi le débit de L1 est-il limité ?

Malheureusement, la levée des limites de blocage sur le L1 souffre d'un écueil majeur. En augmentant le taux de croissance de la chaîne, nous augmentons également les demandes des nœuds complets, qui tentent de suivre l'état le plus récent. Puisque les nœuds complets L1 doivent réexécuter tout l'historique, une forte augmentation de la taille des blocs (en termes de gaz) leur place une déformation significative, de nouveau conduisant à des machines plus faibles qui tombent hors du système et laissant la possibilité d'exécuter des nœuds complets uniquement sur des entités assez grandes. En conséquence, les utilisateurs ne seront pas en mesure de vérifier l’état eux-mêmes et de participer au réseau en toute confiance.

Nous comprenons donc que le débit de L1 devrait être limité, afin de maintenir un système réellement décentralisé et sécurisé.

### Pourquoi les mêmes barrières n’affectent-elles pas les roulements de validité ?

**Seulement en considérant la perspective du noeud complet, nous voyons la puissance réelle offerte par les rollups de validité.**Un noeud complet L1 a besoin de réexécuter l'historique entier pour assurer l'exactitude de l'état actuel. Les nœuds StarkNet n'ont besoin que de vérifier les preuves STARK, et cette vérification prend une quantité exponentiellement plus faible de ressources de calcul. En particulier, la synchronisation à partir de zéro ne doit pas impliquer l'exécution ; un noeud peut recevoir un dump de l'état courant de ses pairs et ne vérifier que via une preuve STARK que cet état est valide. Cela nous permet d’augmenter le débit du réseau sans augmenter les exigences du noeud complet.

Nous concluons donc que le séquenceur L2 est soumis à un spectre entier d'optimisations qui ne sont pas possibles sur un L1.

### Feuille de route des performances à venir

Dans les sections suivantes, nous discutons de ceux qui sont actuellement prévus pour le séquenceur StarkNet.

### Parallélisation du séquenceur

La première étape de notre feuille de route a été d’introduire la parallélisation de l’exécution de la transaction. Cela a été introduit dans StarkNet alpha 0.10.2, qui a été publié hier sur le réseau principal. Nous plongons maintenant dans ce qu'est la parallélisation (il s'agit d'une section semi-technique, pour continuer sur la feuille de route, sauter à la section suivante).

Que signifie alors la « parallélisation des transactions » ? Naïvement, il est impossible d'exécuter un bloc de transactions en parallèle car différentes transactions peuvent être dépendantes. Ceci est illustré dans l'exemple suivant. Considérez un bloc avec trois transactions du même utilisateur :

* Transaction A : swap USDC pour ETH
* Transaction B: payer ETH pour une NFT
* Transaction C : échanger USDT contre BTC

Il est clair que Tx A doit se produire avant Tx B, mais Tx C est entièrement indépendant des deux et peut être exécuté en parallèle. Si chaque transaction nécessite une seconde pour s'exécuter, alors le temps de production du bloc peut être réduit de 3 secondes à 2 secondes en introduisant la parallélisation.

Le nœud du problème est que nous ne connaissons pas les dépendances de transaction à l'avance. Dans la pratique, nous ne voyons que lorsque nous exécutons la transaction B à partir de notre exemple que nous voyons qu'elle repose sur les modifications apportées par la transaction A. Plus formellement, la dépendance découle du fait que la transaction B lit à partir des cellules de stockage vers lesquelles la transaction A a écrit. Nous pouvons considérer les transactions comme un graphique de dépendance, où il y a une arête de la transaction A à la transaction B iff A écrit sur une cellule de stockage qui est lue par B, et doit donc être exécuté avant B. La figure suivante montre un exemple d'un tel graphique de dépendances :

![](https://miro.medium.com/max/641/0*I-qGgxdJJmqmgZWM)

Dans l'exemple ci-dessus, chaque colonne peut être exécutée en parallèle, et c'est l'arrangement optimal (alors que naïvement, nous aurions exécuté les transactions 1 à 9 séquentiellement).

Pour surmonter le fait que le graphique de dépendance n'est pas connu à l'avance, nous introduisons***parallélisation optimiste***, dans l'esprit de[BLOCK-STM](https://malkhi.com/posts/2022/04/block-stm/)développé par Aptos Labs, au séquenceur StarkNet. Sous ce paradigme, nous tentons avec optimisme d'exécuter des transactions en parallèle et de réexécuter lorsque nous trouvons une collision. Par exemple, nous pouvons exécuter les transactions 1 à 4 à partir de la figure 1 en parallèle, pour découvrir ensuite que Tx4 dépend de Tx1. Par conséquent, son exécution était inutile (nous l'avons exécuté par rapport au même état contre lequel nous avons exécuté Tx1, alors que nous aurions dû l'exécuter contre l'état résultant de l'application de Tx1). Dans ce cas, nous allons ré-exécuter Tx4.

Notez que nous pouvons ajouter de nombreuses optimisations en plus de la parallélisation optimiste. Par exemple, plutôt que d'attendre naïvement la fin de chaque exécution, nous pouvons interrompre une exécution au moment où nous trouvons une dépendance qui l'invalide.

Un autre exemple est d'optimiser le choix des transactions à ré-exécuter. Supposons qu'un bloc qui se compose de toutes les transactions de la figure 1 soit alimenté dans un séquenceur avec cinq cœurs de processeur. Tout d'abord, nous essayons d'exécuter les transactions 1 à 5 en parallèle. Si l'ordre d'achèvement était Tx2, Tx3, Tx4, Tx1, et enfin Tx5, alors nous trouverons la dépendance Tx1→Tx4 seulement après l'exécution de Tx4 — indiquant qu'elle doit être ré-exécutée. Naïvement, nous pourrions vouloir réexécuter Tx5 aussi parce qu'il pourrait se comporter différemment compte tenu de la nouvelle exécution de Tx4. Cependant, plutôt que de simplement réexécuter toutes les transactions après le Tx4 maintenant invalidé, nous pouvons traverser le graphique de dépendance construit à partir des transactions dont l'exécution a déjà terminé et seulement ré-exécuter les transactions qui dépendaient de Tx4.

### Une nouvelle implémentation Rust pour le Cairo-VM

Les contrats intelligents de StarkNet sont écrits au Caire et sont exécutés à l'intérieur du Cairo-VM, qui apparaît dans le[papier Caire](https://eprint.iacr.org/2021/1063.pdf). Actuellement, le séquenceur utilise une implémentation[python](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/cairo/lang/vm)du Cairo-VM. Pour optimiser la performance de l'implémentation de la VM, nous avons lancé un effort de réécriture de la VM en rouille. Merci à l'excellent travail de[Lambdaclass](https://lambdaclass.com/), qui sont maintenant une équipe inestimable dans l'écosystème StarkNet, cet effort va bientôt se concrétiser.

L'implémentation de Rust de la VM,[cairo-rs](https://github.com/lambdaclass/cairo-rs), peut maintenant exécuter du code Cairo natif. L'étape suivante est de gérer l'exécution et l'intégration avec le séquenceur pythonique. Une fois intégré avec les caïro-rs, les performances du séquenceur devraient s’améliorer de manière significative.

### Réimplémentation du séquenceur dans Rust

Notre passage de python à la rouille pour améliorer les performances ne se limite pas à la VM du Caire. Parallèlement aux améliorations mentionnées ci-dessus, nous prévoyons de réécrire le séquenceur à partir de zéro en rouille. En plus des avantages internes de Rust, il s’agit d’une opportunité pour d’autres optimisations pour le séquenceur. En listant un couple, nous pouvons profiter des avantages des cairo-rs sans les frais généraux de la communication python-rouille, et nous pouvons reconcevoir complètement la façon dont l'état est stocké et accédé (qui est aujourd'hui basé sur la structure[Patricia-Trie](https://docs.starknet.io/documentation/develop/State/starknet-state/#state_commitment)).

### Qu'en est-il des proverbes?

Tout au long de ce poste, nous n’avons pas mentionné l’élément peut-être le plus célèbre des rollups de validité — le prouve. On pourrait imaginer qu'étant la composante la plus sophistiquée de l'architecture, il devrait s'agir du goulot d'étranglement et, par conséquent, du point de vue de l'optimisation. Il est intéressant de noter que ce sont les composants les plus « standards » qui sont maintenant le goulot d’étranglement de StarkNet. Aujourd'hui, en particulier avec les[preuves récursives](https://medium.com/starkware/recursive-starks-78f8dd401025), nous pouvons intégrer beaucoup plus de transactions que le trafic actuel sur Testnet/Mainnet dans une preuve. En fait, aujourd'hui, les blocs StarkNet sont éprouvés aux côtés des transactions StarkEx, où ces derniers peuvent parfois entraîner plusieurs centaines de milliers de menthes NFT.

### Summary

Parallélisation, Rust, et plus encore — offrez-vous un TPS amélioré dans les prochaines versions de StarkNet.