### TL;DR

* [Starknet Planets Alpha](https://voyager.online/) - la première étape sur notre route vers Mainnet - est maintenant en ligne sur Testnet !
* [Starknet](https://starkware.co/product/starknet/) est un ZK-Rollup¹ complet de Turing sans autorisation.
* Les développeurs peuvent implémenter la logique métier de leur choix dans un contrat intelligent et la déployer sans autorisation sur Starknet.
* Les transitions d'état de Starknet sont prouvées hors chaîne, puis vérifiées en chaîne.
* Tout comme Ethereum, les utilisateurs peuvent interagir directement avec ces contrats intelligents.

### Introduction

Nous [avons annoncé](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880) la feuille de route pour [Starknet](https://starkware.co/product/starknet/) en janvier 2021. Le Saint Graal des solutions d'évolutivité prendrait en charge (i) les contrats intelligents arbitraires, avec (ii) la composabilité, (iii) exploités sur un réseau décentralisé. Aujourd'hui, nous annonçons le déploiement sur testnet de Step 1: Starknet Planets Alpha. Le système Alpha prend en charge les contrats intelligents arbitraires. La composabilité sera prise en charge plus tard cette année, avec une décentralisation à suivre.

Il est très important pour nous d'être totalement transparents et de définir correctement les attentes. Le but de cet article est de répertorier clairement ce qui est déjà pris en charge et les fonctionnalités qui manquent encore. Ce que nous publions aujourd'hui est Work in Progress sur testnet. Nous pensons que cette version anticipée aidera à la formation d'un écosystème sain autour de Starknet et de ses outils. Nous sommes impatients d'impliquer les développeurs dans la construction du réseau avec nous et d'obtenir des commentaires continus de la communauté.

### Qu'y a-t-il dans l'alpha des planètes Starknet ?

Fonctionnalité : L'Alpha permet aux développeurs d'écrire et de déployer des contrats Starknet pour le calcul général. Il n'y a pas de liste blanche - n'importe quel développeur peut écrire et déployer le contrat qu'il souhaite. Les utilisateurs peuvent interagir avec ces contrats, en leur envoyant des transactions et en inspectant leur état. Tous les contrats existent dans un seul état². Les mises à jour de cet état sont prouvées hors chaîne et vérifiées en chaîne - dans l'Alpha, la vérification est effectuée sur testnet.

Starknet OS : La fonctionnalité ci-dessus est prise en charge par un nouveau "système d'exploitation" que nous appelons Starknet OS. Il offre des transitions d'état prouvables sur Starknet. Les développeurs d'Ethereum peuvent le considérer comme l'équivalent de l'EVM : il est responsable de l'appel des fonctions de contrat intelligent, de la gestion du stockage des contrats, etc. Nous publierons un article séparé détaillant l'architecture du système d'exploitation Starknet.

Qu'est-ce qu'il n'y a pas dans l'Alpha ? Il manque encore à l'Alpha certaines fonctionnalités clés, telles que l'interaction L1<>L2, les données en chaîne et la composabilité. Plus d'informations ci-dessous.

#### Se mouiller les pieds

Commencez avec notre tutoriel [et notre documentation](https://www.cairo-lang.org/docs/hello_starknet/).

Ensuite, vous pouvez lire le [exemple de contrat intelligent AMM](http://cairo-lang.org/docs/hello_starknet/amm.html) que nous avons écrit et déployé sur Starknet. C'est un simple AMM, et vous pouvez interagir avec lui [ici](https://starkware-amm-demo.netlify.app/swap). Vous êtes maintenant prêt à écrire et déployer des contrats intelligents sur Starknet. L'explorateur de blocs pour Starknet - [Voyager](https://voyager.online/) - permet à quiconque d'inspecter l'état de Starknet.\
En vous mouillant les pieds, nous pensons que vous serez mieux préparé à développer sur Starknet, car nous continuons à déployer des fonctionnalités supplémentaires. Nous sommes déjà occupés à planifier un premier hackathon, ainsi que des ateliers pour les développeurs.

### Prochaines étapes pour Starknet

Les fonctionnalités clés qui manquent encore dans l'Alpha seront déployées à partir des prochaines semaines. Ceux-ci sont:

* L1<>L2 Interaction, par exemple la possibilité de déposer et de retirer des fonds en L1.
* Données en chaîne : publication de toutes les modifications de stockage sur Ethereum.
* Composabilité : permettre aux contrats de communiquer entre eux.

Avec ces fonctionnalités en place, nous serons prêts à amener Starknet sur Ethereum Mainnet. Nous appelons cette étape dans l'évolution de Starknet Constellations, et lorsque nous l'atteindrons, vous pourrez créer et déployer sans autorisation sur des dApps L2 évolutifs Ethereum Mainnet.

#### L'écosystème Starknet

Nous sommes très enthousiasmés par l'écosystème qui se forme autour de Starknet, nous allons donc faire une pause pour remercier nos collaborateurs jusqu'à présent.

Nous travaillons en étroite collaboration avec [Nethermind](https://twitter.com/nethermindeth) et l'équipe Nubia, [Alexey Akhunov](https://twitter.com/realLedgerwatch) (Erigon) & [Igor Mandrigin](https://twitter.com/mandrigin) (gateway.fm), [Iddo Bentov](https://www.cs.cornell.edu/~iddo/), [dOrg](https://twitter.com/dOrg_tech), [Prof. Tim Roughgarden](https://twitter.com/algo_class), [Prof Jeremy Avigad](https://www.andrew.cmu.edu/user/avigad/) & Yoav Seginer, enfin et surtout — l'équipe [Paradigm](https://twitter.com/paradigm) .\
Nos premiers partenaires — [dYdX](https://twitter.com/dydxprotocol), [Immutable](https://twitter.com/Immutable), [DeversiFi](https://twitter.com/deversifi), ainsi que [Sorare](https://twitter.com/SorareHQ), [Celer](https://twitter.com/CelerNetwork)et d'autres — nous ont fourni une contribution inestimable dès le premier jour et nous ont permis de construire une production -réseau de qualité pour les utilisateurs réels.\
Nous continuons d'être étonnés par la qualité du contenu créé par la communauté, par des personnes telles que [Bobbin Threadbare](https://twitter.com/bobbinth), [Daniel Kroni](https://github.com/danielkroeni/cairo-playground/blob/main/anon-bank/README.md), [Adrian Hamelink](https://twitter.com/adr1anh), [perama](https://twitter.com/eth_worm), [Francesco Ceccon](https://twitter.com/ceccon_me), [Ilian Malchev](http://twitter.com/imalchev), et l'équipe d'Alexandrie [](https://blockchainpartner.fr/).

Nous sommes impatients de voir ce que la communauté va créer sur tous les fronts : outils de développement, contenu et bien sûr les applications Starknet qu'ils construiront. Poursuivons la conversation dans votre média préféré de prédilection : [discord](https://discord.gg/uJ9HZTUk2Y), [Twitter](https://twitter.com/CairoLang), e-mail, et bientôt en utilisant la forme de communication la plus décentralisée : f2f.

¹ Nous ne sommes pas fans du terme ZK-Rollup, car - mathématiquement parlant - ce n'est pas une connaissance nulle, mais vous savez tous ce que nous voulons dire

² Contrairement à l'état séparé maintenu pour les déploiements actuels de StarkEx sur Mainnet

Mise à jour (novembre 2021) : Starknet Alpha est en direct sur Ethereum Mainnet