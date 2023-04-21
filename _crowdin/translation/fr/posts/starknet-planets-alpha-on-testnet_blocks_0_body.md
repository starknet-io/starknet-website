### **TL;DR**

* [StarkNet Planets Alpha](https://voyager.online/)— la première étape sur notre route vers le réseau principal — est maintenant en ligne sur Testnet !
* [StarkNet](https://starkware.co/product/starknet/)est un ZK-Rollup1 de Turing-complete sans permission.
* Les développeurs peuvent implémenter leur logique commerciale de choix dans un contrat intelligent et la déployer sans autorisation sur StarkNet.
* Les transitions d'état de StarkNet sont éprouvées hors chaîne puis vérifiées sur la chaîne.
* Tout comme Ethereum, les utilisateurs peuvent interagir directement avec ces contrats intelligents.

### **Introduction**

Nous avons[annoncé](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)la feuille de route pour[StarkNet](https://starkware.co/product/starknet/)en janvier 2021. Le Saint Graal des solutions d’évolutivité soutiendrait (i) les contrats intelligents arbitraires, avec (ii) la composabilité, (iii) gérés sur un réseau décentralisé. Aujourd'hui, nous annonçons le déploiement sur testnet de l'étape 1 : StarkNet Planets Alpha. Le système Alpha prend en charge les contrats intelligents arbitraires. La composition sera soutenue plus tard dans l'année, avec une décentralisation à suivre.

Il est très important que nous soyons pleinement transparents et que nous définissions les attentes comme il se doit. Le but de ce message est de lister clairement ce qui est déjà pris en charge, et quelles fonctionnalités manquent encore. Ce que nous publions aujourd'hui, c'est le travail en cours sur testnet. Nous pensons que cette publication précoce aidera à la formation d’un écosystème sain autour de StarkNet et de ses outils. Nous sommes impatients d'impliquer les développeurs dans la construction du réseau avec nous, et d'obtenir des commentaires continus de la part de la communauté.

### **Que se passe-t-il dans les Planètes de StarkNet Alpha?**

**Fonctionnalité :**L'Alpha permet aux développeurs d'écrire et de déployer des contrats StarkNet pour le calcul général. Il n'y a pas de liste blanche — tout développeur peut écrire et déployer le contrat qu'il veut. Les utilisateurs peuvent interagir avec ces contrats, en leur envoyant des transactions et en inspectant leur état. Tous les contrats existent en un seul état2. Les mises à jour de cet état sont éprouvées hors chaîne, et vérifiées en chaîne — dans l'Alpha, la vérification se fait sur testnet.

**Système d'exploitation StarkNet :**La fonctionnalité ci-dessus est prise en charge par un nouveau « système d'exploitation » que nous appelons StarkNet OS. Il offre des transitions d'état*prouvables*sur StarkNet. Les développeurs d'Ethereum peuvent y penser comme l'équivalent de l'EVM : il est chargé d'invoquer des fonctions de contrat intelligent, de gérer le stockage des contrats, etc. Nous publierons un message séparé détaillant l'architecture de l'OS StarkNet.

**Ce qui n'est pas dans l'Alpha :**L'Alpha manque toujours des capacités clés, telles que l'interaction L1<>L2, les données sur la chaîne et la composabilité. Plus de détails à ce sujet ci-dessous.

#### **En train de mouiller vos pieds**

Commencez par notre[tutoriel et notre documentation](https://www.cairo-lang.org/docs/hello_starknet/).

Ensuite, vous pouvez lire les[exemples de contrat intelligent AMM](http://cairo-lang.org/docs/hello_starknet/amm.html)que nous avons écrit et déployé sur StarkNet. C'est un AMM simple, et vous pouvez interagir avec lui[ici](https://starkware-amm-demo.netlify.app/swap). Vous êtes maintenant prêt à écrire et à déployer des contrats intelligents sur StarkNet. L'explorateur de blocs pour StarkNet —[Voyager](https://voyager.online/)— permet à quiconque d'inspecter l'état de StarkNet.\
En vous mouillant, nous pensons que vous serez mieux préparé à construire sur StarkNet, au fur et à mesure que nous continuons à déployer des fonctionnalités supplémentaires. Nous sommes déjà occupés à planifier un premier hackathon, ainsi que des ateliers pour les développeurs.

### **Prochaines étapes pour StarkNet**

Les capacités clés manquantes dans l'Alpha seront déployées dans les semaines à venir. Voici :

* L1<>Interaction L2, par exemple la possibilité de déposer et de retirer des fonds dans L1.
* Données en chaîne : publication de tous les changements de stockage sur Ethereum.
* Composabilité: permettre aux contrats de communiquer entre eux.

Avec ces fonctionnalités en place, nous serons prêts à apporter StarkNet au réseau principal Ethereum. Nous appelons cette étape dans les Constellations d’évolution de StarkNet, et quand nous y arrivons, vous serez en mesure de construire et de déployer sans permission sur les dApps L2 scalables Ethereum Mainnet.

#### **L’écosystème StarkNet**

Nous sommes très excités par l’écosystème qui se forme autour de StarkNet, donc nous mettrons en pause pour remercier nos collaborateurs jusqu’à présent.

Nous travaillons en étroite collaboration avec[Nethermind](https://twitter.com/nethermindeth)et l'équipe Nubia,[Alexey Akhunov](https://twitter.com/realLedgerwatch)(Erigon) &[Igor Mandrigin](https://twitter.com/mandrigin)(passerelle. m),[Iddo Bentov](https://www.cs.cornell.edu/~iddo/),[dOrg](https://twitter.com/dOrg_tech),[Prof. Tim Roughgarden](https://twitter.com/algo_class),[Prof. Jeremy Avigad](https://www.andrew.cmu.edu/user/avigad/)& Yoav Seginer, dernier mais non des moindres, l'équipe[Paradigm](https://twitter.com/paradigm).\
Nos premiers partenaires —[dYdX](https://twitter.com/dydxprotocol),[Immuables](https://twitter.com/Immutable),[DeversiFi](https://twitter.com/deversifi), ainsi que[Sorare](https://twitter.com/SorareHQ),[Celer](https://twitter.com/CelerNetwork), et d'autres — nous ont fourni une contribution inestimable du premier jour, et nous permettre de construire un réseau de production pour les utilisateurs réels.\
Nous continuons à être étonnés par la qualité du contenu créé par la communauté, par des personnes telles que[Bobbin Threadbare](https://twitter.com/bobbinth),[Daniel Kroni](https://github.com/danielkroeni/cairo-playground/blob/main/anon-bank/README.md),[Adrian Hamelink](https://twitter.com/adr1anh),[perama](https://twitter.com/eth_worm),[Francesco Ceccon](https://twitter.com/ceccon_me),[Ilian Malchev](http://twitter.com/imalchev), et[équipe Alexandrie](https://blockchainpartner.fr/).

Nous sommes impatients de voir ce que la communauté va créer sur tous les fronts : outils de développement, contenu, et bien sûr applications StarkNet qu'ils vont construire. Gardons la conversation dans votre média préféré de choix:[discord](https://discord.gg/uJ9HZTUk2Y),[Twitter](https://twitter.com/CairoLang),[email](mailto:info@starkware.co), et bientôt en utilisant les formulaires de communication les plus décentralisés : f2f.

1 Nous ne sommes pas fans du terme ZK-Rollup, car — mathématiquement — il ne s’agit pas d’une connaissance zéro, mais vous savez tous ce que nous entendons par là.

2 Contrairement à l'état séparé maintenu pour les déploiements StarkEx actuels sur le réseau principal

**Mise à jour (Nov. 2021):**StarkNet Alpha est en direct sur le réseau principal Ethereum