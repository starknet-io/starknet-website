### TL;DR

* Les cumuls de validité ne sont pas limités en débit de la même manière que les L1. Cela donne lieu à des TPS potentiellement beaucoup plus élevés sur les cumuls de validité L2.
* La feuille de route des performances de Starknet aborde un élément clé du système : le séquenceur.
* Nous présentons ici la feuille de route pour l'amélioration des performances :\
  — Parallélisation du séquenceur\
  — Une nouvelle implémentation de Rust pour la VM du Caire\
  — Ré-implémentation du séquenceur dans Rust\
* Les prouveurs, étant testés au combat comme ils le sont, ne sont pas le goulot d'étranglement et peuvent gérer beaucoup plus qu'ils ne le font actuellement !

### Introduction

Starknet a été lancé sur Mainnet il y a près d'un an. Nous avons commencé à construire Starknet en nous concentrant sur la fonctionnalité. Maintenant, nous nous concentrons sur l'amélioration des performances avec une série d'étapes qui contribueront à améliorer l'expérience Starknet.

Dans cet article, nous expliquons pourquoi il existe un large éventail d'optimisations qui ne sont applicables que dans les cumuls de validité, et nous partagerons notre plan pour mettre en œuvre ces étapes sur Starknet. Certaines de ces étapes sont déjà implémentées dans Starknet Alpha 0.10.2, qui a été publié sur Testnet le 16 novembre et hier sur Mainnet. Mais avant de discuter des solutions, passons en revue les limites et leur cause.

### Limitations des blocs : cumuls de validité par rapport à L1

Une approche potentielle pour augmenter l'évolutivité de la blockchain et augmenter le TPS serait de lever les limitations de bloc (en termes de gaz/taille) tout en maintenant le temps de bloc constant. Cela nécessiterait plus d'efforts de la part des producteurs de blocs (validateurs sur L1, séquenceurs sur L2) et appelle donc une implémentation plus efficace de ces composants. À cette fin, nous nous concentrons maintenant sur les optimisations du séquenceur Starknet, que nous décrivons plus en détail dans les sections suivantes.

Une question naturelle se pose ici. Pourquoi les optimisations du séquenceur sont-elles limitées aux cumuls de validité, c'est-à-dire pourquoi ne pouvons-nous pas implémenter les mêmes améliorations sur L1 et éviter entièrement les complexités des cumuls de validité ? Dans la section suivante, nous affirmons qu'il existe une différence fondamentale entre les deux, permettant une large gamme d'optimisations sur L2 qui ne sont pas applicables à L1.

### Pourquoi le débit L1 est-il limité ?

Malheureusement, la levée des limitations de blocage sur L1 souffre d'un écueil majeur. En augmentant le taux de croissance de la chaîne, nous augmentons également les demandes des nœuds complets, qui tentent de suivre l'état le plus récent. Étant donné que les nœuds complets L1 doivent réexécuter tout l'historique, une forte augmentation de la taille des blocs (en termes de gaz) leur impose une pression importante, ce qui entraîne à nouveau l'abandon de machines plus faibles du système et la possibilité d'exécuter des nœuds complets. uniquement à des entités suffisamment grandes. Par conséquent, les utilisateurs ne pourront pas vérifier l'état eux-mêmes et participer au réseau en toute confiance.

Cela nous laisse comprendre que le débit L1 doit être limité, afin de maintenir un système véritablement décentralisé et sécurisé.

### Pourquoi les mêmes obstacles n'affectent-ils pas les cumuls de validité ?

Ce n'est que lorsque l'on considère la perspective du nœud complet que nous voyons le véritable pouvoir offert par les cumuls de validité. Un nœud complet L1 doit réexécuter l'intégralité de l'historique pour garantir l'exactitude de l'état actuel. Les nœuds Starknet n'ont besoin que de vérifier les preuves STARK, et cette vérification nécessite une quantité exponentiellement inférieure de ressources de calcul. En particulier, la synchronisation à partir de zéro ne doit pas nécessairement impliquer d'exécution ; un nœud peut recevoir un vidage de l'état actuel de ses pairs et vérifier uniquement via une preuve STARK que cet état est valide. Cela nous permet d'augmenter le débit du réseau sans augmenter les exigences du nœud complet.

Nous concluons donc que le séquenceur L2 est sujet à tout un spectre d'optimisations qui ne sont pas possibles sur un L1.

### Feuille de route des performances à venir

Dans les sections suivantes, nous discutons de celles qui sont actuellement prévues pour le séquenceur Starknet.

### Parallélisation du séquenceur

La première étape de notre feuille de route consistait à introduire la parallélisation dans l'exécution des transactions. Cela a été introduit dans Starknet alpha 0.10.2, qui a été publié hier sur Mainnet. Nous nous penchons maintenant sur ce qu'est la parallélisation (il s'agit d'une section semi-technique, pour continuer sur la feuille de route, passez à la section suivante).

Alors, que signifie « parallélisation des transactions » ? Naïvement, exécuter un bloc de transactions en parallèle est impossible car différentes transactions peuvent être dépendantes. Ceci est illustré dans l'exemple suivant. Considérez un bloc avec trois transactions du même utilisateur :

* Transaction A : échanger USDC contre ETH
* Transaction B : payez des ETH pour un NFT
* Transaction C : échanger USDT contre BTC

Clairement, Tx A doit arriver avant Tx B, mais Tx C est entièrement indépendant des deux et peut être exécuté en parallèle. Si chaque transaction nécessite 1 seconde pour s'exécuter, alors le temps de production du bloc peut être réduit de 3 secondes à 2 secondes en introduisant la parallélisation.

Le nœud du problème est que nous ne connaissons pas à l'avance les dépendances des transactions. En pratique, ce n'est que lorsque nous exécutons la transaction B de notre exemple que nous voyons qu'elle repose sur les modifications apportées par la transaction A. Plus formellement, la dépendance découle du fait que la transaction B lit à partir des cellules de stockage dans lesquelles la transaction A a écrit. Nous pouvons considérer les transactions comme formant un graphe de dépendance, où il y a un bord de la transaction A à la transaction B si A écrit dans une cellule de stockage qui est lue par B, et doit donc être exécutée avant B. La figure suivante montre un exemple d'un tel graphe de dépendance :

![](https://lh5.googleusercontent.com/OXpkhtGdVlJsLZ9fkz4bFdTIqkOyvGYDaqP3mz_XZSPmPtqy7uZFwlOIHy8e3E4N4rGEPBj0kBpYTsXfIS7q3WURb6kO7HIIZ9cWHaADaPVZoCTdUEQ-uBDLz8e2so0smCleiJRZyZqVLaDVGX3aiJo)

Dans l'exemple ci-dessus, chaque colonne peut être exécutée en parallèle, et c'est l'arrangement optimal (alors que naïvement, nous aurions exécuté les transactions 1 à 9 de manière séquentielle).

Pour pallier le fait que le graphe de dépendance n'est pas connu à l'avance, nous introduisons la parallélisation optimiste, dans l'esprit du [BLOCK-STM](https://malkhi.com/posts/2022/04/block-stm/) développé par Aptos Labs, au séquenceur Starknet. Dans ce paradigme, nous tentons avec optimisme d'exécuter des transactions en parallèle et de les réexécuter en cas de collision. Par exemple, nous pouvons exécuter les transactions 1 à 4 de la figure 1 en parallèle, pour découvrir ensuite que Tx4 dépend de Tx1. Par conséquent, son exécution était inutile (nous l'avons exécuté par rapport au même état contre lequel nous avons exécuté Tx1, alors que nous aurions dû l'exécuter contre l'état résultant de l'application de Tx1). Dans ce cas, nous allons ré-exécuter Tx4.

Notez que nous pouvons ajouter de nombreuses optimisations en plus de la parallélisation optimiste. Par exemple, plutôt que d'attendre naïvement la fin de chaque exécution, nous pouvons interrompre une exécution au moment où nous trouvons une dépendance qui l'invalide.

Un autre exemple est l'optimisation du choix des transactions à réexécuter. Supposons qu'un bloc composé de toutes les transactions de la figure 1 soit introduit dans un séquenceur à cinq cœurs de processeur. Tout d'abord, nous essayons d'exécuter les transactions 1 à 5 en parallèle. Si l'ordre d'achèvement était Tx2, Tx3, Tx4, Tx1 et enfin Tx5, nous ne trouverons la dépendance Tx1 → Tx4 qu'après que Tx4 ait déjà été exécuté - indiquant qu'il doit être réexécuté. Naïvement, nous pouvons également vouloir réexécuter Tx5 car il peut se comporter différemment compte tenu de la nouvelle exécution de Tx4. Cependant, plutôt que de simplement ré-exécuter toutes les transactions après le Tx4 maintenant invalidé, nous pouvons parcourir le graphe de dépendance construit à partir des transactions dont l'exécution s'est déjà terminée et ne ré-exécuter que les transactions qui dépendaient de Tx4.

### Une nouvelle implémentation de Rust pour Cairo-VM

Les contrats intelligents dans Starknet sont écrits au Caire et sont exécutés à l'intérieur de la VM du Caire, dont la spécification apparaît dans l'article [du Caire](https://eprint.iacr.org/2021/1063.pdf). Actuellement, le séquenceur utilise une implémentation [python](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/cairo/lang/vm) de Cairo-VM. Pour optimiser les performances d'implémentation de la VM, nous avons lancé un effort de réécriture de la VM en rust. Grâce à l'excellent travail de [Lambdaclass](https://lambdaclass.com/), qui est désormais une équipe inestimable dans l'écosystème Starknet, cet effort porte bientôt ses fruits.

L'implémentation de rouille de la machine virtuelle, [cairo-rs](https://github.com/lambdaclass/cairo-rs), peut désormais exécuter du code Cairo natif. L'étape suivante consiste à gérer l'exécution des contrats intelligents et les intégrations avec le séquenceur pythonic. Une fois intégré à cairo-rs, les performances du séquenceur devraient s'améliorer de manière significative.

### Réimplémentation du séquenceur dans Rust

Notre passage de Python à Rust pour améliorer les performances ne se limite pas à la machine virtuelle Cairo. Parallèlement aux améliorations mentionnées ci-dessus, nous prévoyons de réécrire le séquenceur à partir de zéro en rouille. En plus des avantages internes de Rust, cela présente une opportunité pour d'autres optimisations du séquenceur. En énumérant quelques-uns, nous pouvons profiter des avantages de cairo-rs sans les frais généraux de la communication python-rust, et nous pouvons complètement repenser la façon dont l'état est stocké et accessible (qui est aujourd'hui basé sur la structure [Patricia-Trie](https://docs.starknet.io/documentation/develop/State/starknet-state/#state_commitment)).

### Qu'en est-il des prouveurs ?

Tout au long de cet article, nous n'avons pas mentionné l'élément peut-être le plus célèbre des cumuls de validité - le prouveur. On pourrait imaginer qu'étant sans doute le composant le plus sophistiqué de l'architecture, il devrait être le goulot d'étranglement et, par conséquent, l'objectif de l'optimisation. Fait intéressant, ce sont les composants les plus "standards" qui constituent désormais le goulot d'étranglement de Starknet. Aujourd'hui, en particulier avec [preuves récursives](https://medium.com/starkware/recursive-starks-78f8dd401025), nous pouvons intégrer beaucoup plus de transactions que le trafic actuel sur Testnet/Mainnet dans une preuve. En fait, aujourd'hui, les blocs Starknet font leurs preuves aux côtés des transactions StarkEx, où ces dernières peuvent parfois entraîner plusieurs centaines de milliers de menthes NFT.

### Résumé

Parallélisation, Rust, et plus encore - préparez-vous à un TPS amélioré dans les prochaines versions de Starknet.