### TL;DR

* StarkNet Alpha 0.8.0 présente la version initiale du mécanisme des frais (optionnelle jusqu'à StarkNet Alpha 0.9.0.)
* La nouvelle API appelle à l'estimation des frais de transaction pour obtenir la trace de la transaction, permettant une meilleure visibilité et des capacités de débogage
* Amélioration des performances du séquenceur StarkNet
* L1→L2 message d'annulation

### Introduction

Comme partagé dans notre[feuille de route](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51), suite au dernier ajout aux fonctionnalités et fonctionnalités de StarkNet notre attention se déplace vers l'amélioration des performances et la conception de protocoles (y compris les frais, l'abstraction de compte, la décentralisation, etc.). StarkNet Alpha 0.8.0 démarre le processus d’ajout de frais de transaction et d’amélioration des performances du séquenceur.

La feuille de route pour StarkNet comprend un mécanisme de tarification, et en progressant avec cette version, nous sommes en train de faire un pas important vers une performance complète pour la plate-forme.

L'ajout du mécanisme de frais est un élément essentiel de la conception de performance de StarkNet. Sans frais minimaux, nous risquons de faire face à des transactions infinies : ce qui rendrait impossible la performance du système, indépendamment des optimisations du séquenceur.

### Fonctionnalités

#### Support des frais

StarkNet Alpha supporte maintenant la première version du mécanisme de frais. Ce mécanisme est essentiel même à ce stade précoce, et même sur Testnet, pour deux raisons principales:

1. Il permet aux développeurs de commencer à optimiser leurs contrats selon le modèle de coûts de StarkNet.
2. Il s’agit d’une contrepartie essentielle à l’amélioration des performances du système, car il empêche le spamming en envoyant d’innombrables transactions.

Cette version introduit les composants nécessaires pour que les développeurs intègrent les paiements de frais dans leurs outils et applications. Les développeurs peuvent maintenant estimer les frais de transaction en appelant le point de terminaison \`estimate_fee\` et faire le paiement des frais dans le cadre de l'exécution de la transaction.

Comme cette fonctionnalité n'est pas compatible avec le passé, nous n'appliquerons pas le paiement des frais à ce stade, mais seulement à partir de la version 0. .0, qui devrait sortir dans quelques semaines. Cette transition progressive permettra aux utilisateurs et aux développeurs de s'adapter au nouveau modèle.

#### Structure des frais sur la 0.8.0

Sur la 0.8.0, les frais seront perçus en fonction de la seule complexité de calcul, tandis que StarkWare continuera à subventionner les coûts de communication L1. Nous mettrons à jour le mécanisme des frais pour inclure ces coûts d’exploitation et de communication au cours des prochaines semaines. Le paiement sera collecté atomiquement avec l'exécution de la transaction sur StarkNet L2. Consultez la documentation[sur les frais](https://starknet.io/documentation/fee-mechanism/)pour une description détaillée.

Il est important de noter que nous travaillerons en étroite collaboration avec la communauté des développeurs pour modifier et développer le mécanisme des frais au fur et à mesure que StarkNet évolue.

#### L2 Goerli ETH Faucet

Nous avons lancé le[L2 Goerli ETH Faucet](https://faucet.goerli.starknet.io/)pour permettre aux utilisateurs de payer des frais sur Testnet. Ce Faucet envoie de petites quantités d'ETH L2 Goerli à l'adresse de votre compte sur StarkNet Goerli que vous pouvez utiliser pour payer les frais de transaction.

#### Trace API

Nous avons ajouté la possibilité de récupérer la trace d'exécution d'une transaction à l'API de StarkNet. Dans la trace de la transaction, tous les appels internes sont visibles, accompagnés d'informations telles que les ressources d'exécution utilisées, la valeur de retour, les événements émis et les messages envoyés. Ce nouvel appel simplifie la compréhension du comportement d'un contrat ou des opérations de débogage. En outre, des outils tels que[Voyager](https://voyager.online/)ou[StarkTx](https://starktx.info/)pourraient incorporer ces données ; fournir aux utilisateurs une analyse plus détaillée, en particulier pour l'interaction avec le contrat de compte.

Pour obtenir la trace, vous pouvez utiliser \`get_transaction_trace\` dans le CLI de StarkNet. Pour voir un exemple de comment l'utiliser, consultez le[tutoriel](https://www.cairo-lang.org/docs/hello_starknet/cli.html?#get-transaction-trace).

#### Message d'annulation

Une fonctionnalité supplémentaire de cette version est la possibilité d'annuler les messages L1→L2. Pourquoi est-ce utile ? Imaginez un scénario où un utilisateur transfère un actif de L1 à L2. Le flux commence par l'envoi de l'actif vers un pont StarkNet et la génération de messages L1→L2 correspondante. Maintenant, imaginez que la consommation de messages L2 ne fonctionne pas (cela peut être dû à un bug dans le contrat du Caire de dApps). Cela pourrait entraîner la perte de la garde de l'utilisateur sur son actif pour toujours.

Pour atténuer ce risque, nous permettons au contrat qui a initié le message L1→L2 de l'annuler — après avoir déclaré l'intention de le faire et en attendant un temps approprié (voir la documentation[](https://starknet.io/l1-l2-messaging/#cancellation)).

### Améliorations des performances

Cette version réduit considérablement le temps qu'un séquenceur a besoin d'exécuter un flux de transactions Cairo entrantes.

Ce n'est que la première étape! Notre prochaine étape majeure de performance, qui sera bientôt introduite (0.9.0), est l'exécution parallèle du séquenceur, et beaucoup plus d'optimisations sont attendues sur la route.

### Et maintenant?

Lisez la documentation technique[ici](https://starknet.io/documentation/fee-mechanism/).

Allez sur[starknet.io](https://starknet.io/), pour toutes les informations, documentation, tutoriels et mises à jour de StarkNet.

Rejoignez[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)pour le support des développeurs, les annonces écosystémiques, et devenez une partie de la communauté.

Visitez[les chamanes StarkNet](https://community.starknet.io/)pour rester à jour et participer à toutes les discussions de recherche de StarkNet.