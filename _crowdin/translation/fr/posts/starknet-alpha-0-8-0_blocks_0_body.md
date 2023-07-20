### TL;DR

* Starknet Alpha 0.8.0 présente la version initiale du mécanisme de frais (facultatif jusqu'à Starknet Alpha 0.9.0.)
* De nouveaux appels API pour estimer les frais de transaction pour obtenir la trace de la transaction, permettant une meilleure visibilité et des capacités de débogage
* Améliorations des performances du séquenceur Starknet
* Annulation des messages L1→L2

### Introduction

Comme indiqué dans notre feuille de route [](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51), suite au dernier ajout aux fonctionnalités et caractéristiques de Starknet, notre attention se tourne vers l'amélioration des performances et la conception du protocole (y compris les frais, l'abstraction de compte, la décentralisation, etc.). Starknet Alpha 0.8.0 démarre le processus d'ajout de frais de transaction et d'amélioration des performances du séquenceur.

La feuille de route pour Starknet comprend un mécanisme de frais, et en progressant avec cette version, nous faisons un pas important vers la pleine performance de la plate-forme.

L'ajout du mécanisme de frais est un élément essentiel de la conception des performances de Starknet. Sans frais minimes, nous risquons d'être confrontés à des transactions infinies : ce qui rendrait impossible la performance du système, quelles que soient les optimisations du séquenceur.

### Caractéristiques

#### Prise en charge des frais

Starknet Alpha prend désormais en charge la première version du mécanisme de frais. Ce mécanisme est essentiel même à ce stade précoce, et même sur Testnet, pour deux raisons principales :

1. Il permet aux développeurs de commencer à optimiser leurs contrats selon le modèle de coût de Starknet.
2. C'est une contrepartie cruciale pour améliorer les performances du système, car il empêche le spam en envoyant d'innombrables transactions.

Cette version introduit les composants nécessaires aux développeurs pour intégrer les paiements de frais dans leurs outils et applications. Les développeurs peuvent désormais estimer les frais de transaction en appelant le point de terminaison \`estimate_fee\` et effectuer le paiement des frais dans le cadre de l'exécution de la transaction.

Étant donné que cette fonctionnalité n'est pas rétrocompatible, nous n'appliquerons pas le paiement des frais à ce stade, mais uniquement à partir de la version 0.9.0, qui doit être publiée dans quelques semaines. Cette transition progressive permettra aux utilisateurs et aux développeurs de s'adapter au nouveau modèle.

#### Structure des frais sur 0.8.0

Sur 0.8.0, les frais seront perçus en fonction de la seule complexité de calcul, tandis que StarkWare subventionnera toujours le coût de communication L1. Nous mettrons à jour le mécanisme de tarification pour inclure ces coûts de fonctionnement et de communication L1 au cours des prochaines semaines. Le paiement sera collecté de manière atomique avec l'exécution de la transaction sur Starknet L2. Voir la documentation [frais](https://starknet.io/documentation/fee-mechanism/) pour une description détaillée.

Il est important de noter que nous travaillerons en étroite collaboration avec la communauté des développeurs pour peaufiner et développer le mécanisme de frais à mesure que Starknet évolue.

#### Robinet L2 Goerli ETH

Nous avons lancé le [L2 Goerli ETH Faucet](https://faucet.goerli.starknet.io/) pour permettre aux utilisateurs de payer des frais sur Testnet. Ce robinet envoie de petites quantités de L2 Goerli ETH à votre adresse de compte sur Starknet Goerli que vous pouvez utiliser pour payer les frais de transaction.

#### API de suivi

Nous avons ajouté la possibilité de récupérer la trace d'exécution d'une transaction dans l'API de Starknet. Dans la trace de la transaction, tous les appels internes sont visibles, accompagnés d'informations telles que les ressources d'exécution consommées, la valeur de retour, les événements émis et les messages envoyés. Ce nouvel appel simplifie la compréhension du comportement d'un contrat ou le débogage des transactions. De plus, des outils tels que [Voyager](https://voyager.online/) ou [StarkTx](https://starktx.info/) pourraient intégrer ces données ; fournir aux utilisateurs une analyse plus détaillée, en particulier pour l'interaction des contrats de compte.

Pour obtenir la trace, vous pouvez utiliser \`get_transaction_trace\` dans la CLI de Starknet. Pour voir un exemple d'utilisation, consultez le tutoriel [](https://www.cairo-lang.org/docs/hello_starknet/cli.html?#get-transaction-trace).

#### Annulation des messages

Une fonctionnalité supplémentaire de cette version est la possibilité d'annuler les messages L1 → L2. Pourquoi est-ce utile ? Imaginez un scénario dans lequel un utilisateur transfère un actif de L1 à L2. Le flux commence par l'envoi par l'utilisateur de l'actif à un pont Starknet et la génération de messages L1 → L2 correspondants. Maintenant, imaginez que la consommation de messages L2 ne fonctionne pas (cela peut se produire en raison d'un bogue dans le contrat Cairo de dApps). Cela pourrait entraîner la perte définitive de la garde de son actif par l'utilisateur.

Pour atténuer ce risque, nous autorisons le contrat qui a lancé le message L1→L2 à l'annuler — après avoir déclaré l'intention de le faire et attendu un laps de temps approprié (voir la documentation [](https://starknet.io/l1-l2-messaging/#cancellation)).

### Amélioration des performances

Cette version réduit considérablement le temps nécessaire à un séquenceur pour exécuter un flux de transactions Cairo entrantes.

Ce n'est que la première étape ! Notre prochaine étape majeure en matière de performances, qui sera bientôt introduite (0.9.0), est l'exécution parallèle du séquenceur, et de nombreuses autres optimisations sont attendues sur la route.

### Et maintenant?

Lire la documentation technique [ici](https://starknet.io/documentation/fee-mechanism/).

Accédez à [starknet.io](https://starknet.io/), pour toutes les informations, la documentation, les tutoriels et les mises à jour de Starknet.

Rejoignez [Starknet Discord](https://discord.gg/uJ9HZTUk2Y) pour l'assistance aux développeurs, les annonces de l'écosystème et pour devenir membre de la communauté.

Visitez [Starknet Shamans](https://community.starknet.io/) pour rester à jour et participer à toutes les discussions sur la recherche Starknet.