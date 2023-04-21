### TL;DR

* **Le Cairo 1.0 est open source! Ce n'est que la première étape vers l'open-sourcing de la pile StarkNet.**
* Nous présentons maintenant un[premier coup d'oeil](https://github.com/starkware-libs/cairo)dans le compilateur Cairo 1.0. Vous pouvez maintenant commencer à expérimenter avec le code Cairo 1.0
* Le Caire 1.0 à son cœur est très similaire à Rust
* Considérez que c'est un premier goût, pas une publication. D'autres améliorations sont en cours. La première version du compilateur est prévue pour le premier trimestre de l'année prochaine.
* Cairo 1.0 n'est pas encore pris en charge sur StarkNet. Il sera supporté sur StarkNet au premier trimestre de l'année prochaine.

### Introduction

En 2020, nous avons publié[Cairo](https://eprint.iacr.org/2021/1063.pdf), un langage de programmation complet qui prend en charge le calcul vérifiable. Le Caire a commencé en tant que langage d'assemblage et est devenu progressivement plus expressif. Il y a deux mois, nous avons annoncé[Cairo 1.0](https://medium.com/starkware/cairo-1-0-aa96eefb19a0), qui traite certains problèmes majeurs dans la situation actuelle :

* Bien que la syntaxe du Caire ait connu des améliorations significatives depuis sa création, l'expérience des développeurs peut toujours s'améliorer. Le Cairo 1.0 est un langage entièrement typé inspiré de la rouille, ce qui rend l'écriture de la même logique beaucoup plus facile et moins causée par les erreurs.
* Le compilateur existant est développé dans le même dépôt que StarkNet lui-même, ce qui rend plus difficile le suivi des changements de langage. Le compilateur Cairo 1.0 est écrit depuis le début, ce qui permet un développement plus rapide des fonctionnalités et une plus grande implication de la communauté.
* Tous les calculs sont maintenant prouvés. Actuellement, un programme du Caire peut échouer avec des entrées spécifiques (par exemple, en atteignant une instruction \`assert 1=2\` dans une branche de calcul), rendant le calcul invisible. Avec le Caire 1.0, les programmes sont éprouvables dans toutes les branches possibles. Ceci est particulièrement important pour la protection DOS et la résistance à la censure dans StarkNet.

Aujourd'hui, nous marquons la première étape dans la réalisation des objectifs ci-dessus en transférant le développement vers un dépôt public, et**Open source Cairo 1. !**Les développeurs peuvent maintenant, pour la première fois, compiler et exécuter des programmes simples Cairo 1.0. Cela permet aux développeurs de commencer à expérimenter avec le Cairo 1. et s'habituer progressivement aux nouvelles fonctionnalités, même si, à ce stade, elles ne peuvent pas encore l'implémenter sur StarkNet.

### Capacités actuelles

Actuellement, vous pouvez compiler et exécuter des programmes natifs de base. Alors que de nombreuses améliorations de la syntaxe et du langage sont encore en cours, cela permet de s'habituer au Cairo 1.0 et de profiter des mises à jour à mesure qu'elles viennent.

**Notez que l'écriture de contrats StarkNet n'est toujours pas prise en charge.**La syntaxe StarkNet (variables de stockage / contrats d'appel / événements et autres appels système) sera ajoutée dans les semaines à venir.

### Exemples de code

Pour illustrer les différences entre l'ancienne syntaxe et le Caire 1. , nous avons choisi de montrer quelques implémentations/saveurs différentes de trouver le numéro n'th Fibonacci.

### Exemple I: Expressions de correspondance

Dans Cairo 1.0, vous pouvez utiliser des expressions[correspondantes](https://doc.rust-lang.org/rust-by-example/flow_control/match.html?highlight=match#match)à la rouille. Vous ne redouterez plus les déclarations si/Sinon qui peuvent provoquer une révocation de référence!

![](/assets/code01.png)

### Exemple II : Types de données

Tandis que le Caire 0 a travaillé avec des feutres et des pointeurs, au Caire 1.0, nous avons un accès natif à des types de données complexes dans la langue. Ci-dessous vous pouvez trouver un exemple qui génère un tableau des premiers nombres de Fibonacci.

![](/assets/code02.png)

Comme vous pouvez le voir ci-dessus, plutôt que de travailler directement avec des pointeurs de mémoire, nous utilisons le `Tableau::<felt>\` et la fonction \`array_append\`.

### Exemple III: structures & propriété

Le code suivant illustre l'utilisation des structures dans le Caire 1.0.

![](/assets/code03.png)

> Le paragraphe suivant est destiné aux Rustaceans parmi le public. Cairo 1.0 gère la mémoire de la même manière que la rouille. En particulier, il utilise les concepts de la propriété[et de l'emprunt](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html). Ainsi, en accédant à un membre de la structure \`FibResult\` (dans ce cas, \`result. alue\`), nous avons déplacé \`result\`, ce qui signifie que si FibResult n'est pas copyable, nous ne pouvons plus y accéder dans \`result.index\`. Pour surmonter cela, nous ajoutons l'attribut \`#\[derive(Copy)]\` du type \`FibResult\`. Dans les versions futures, nous ajouterons la déconstruction automatique pour les structs. Cela permettra de transférer la propriété d'un membre sans toucher aux autres (en particulier le code ci-dessus compilerait même si \`FibResult\` ne possédait pas l'attribut copie).

**En particulier, notez que le Cairo 1.0 est complètement abstraction du modèle de mémoire original (aucun déterministe en lecture seule) du Caire.**

## Exemple IV: propagation des erreurs

Le code suivant calcule le numéro n'th Fibonacci, mais contrairement aux exemples précédents, toutes les entrées sont du type uint128. Notez que cela résout un point de douleur majeur de la manipulation des pointes au Caire 0. Ici, uint128 (et dans le futur uint256) sont des types natifs.

![](/assets/0_s8bhjf_ade3carmi.png)

L'ajout de deux entiers 128 bits peut causer un débordement. Le code ci-dessus utilise l'[Option enum](https://doc.rust-lang.org/rust-by-example/std/option.html)et l'opérateur[point d'interrogation](https://doc.rust-lang.org/rust-by-example/std/result/question_mark.html)pour gérer le cas du débordement dans l'un des ajouts intermédiaires. Comparer ceci à la syntaxe d'ajout[actuelle](https://github.com/starkware-libs/cairo-lang/blob/9889fbd522edc5eff603356e1912e20642ae20af/src/starkware/cairo/common/uint256.cairo#L31)uint256, où la fonction \`unit256_check\` a dû être appelée pour garantir la stabilité. En outre, dans un avenir proche, nous ajouterons le concept de \`panique\` au langage (similaire à la macro[panique](https://doc.rust-lang.org/rust-by-example/std/panic.html)en rouille), et des erreurs simples comme le débordement d'ajout seront impossibles à accrocher et à se propager automatiquement, ce qui signifie que vous n'aurez pas à utiliser \`Option\` ou \`? ` lors de l'ajout d'uints.

## Essayez-la vous-même

Vous pouvez maintenant compiler et exécuter les programmes Cairo 1.0 actuellement pris en charge ! Suivez ces[instructions](https://github.com/starkware-libs/cairo/tree/main/crates/cairo-lang-runner)sur comment utiliser la commande \`cairo-run\`. Notez que sous le capot, la VM[Rust Cairo](https://github.com/lambdaclass/cairo-rs), développée par[Lambdaclass](https://lambdaclass.com/), est utilisée pour l'exécution.

Vous pouvez trouver plus d'exemples pour vous aider à démarrer[ici](https://github.com/starkware-libs/cairo2/tree/main/examples). Notez que ce n'est que le premier aperçu du développement du compilateur ; dans les semaines à venir, nous améliorerons le CLI à côté du compilateur.

## Plans futurs

La première version du Compiler, qui est prévue pour le premier Q1, est le support de toutes les fonctionnalités de StarkNet dans le Cairo 1.0. De plus, nous travaillons à étendre les capacités du compilateur Cairo 1.0. Dans les semaines à venir, vous pouvez vous attendre à :

* Fonctionnalités de StarkNet — écrire des contrats intelligents et utiliser des appels système.
* Boucles
* Nouvelles fonctions de la bibliothèque
* Amélioration du serveur de langue
* Une notion native de gaz StarkNet

Assurez-vous de rester à l'écoute et de suivre la progression du compilateur !