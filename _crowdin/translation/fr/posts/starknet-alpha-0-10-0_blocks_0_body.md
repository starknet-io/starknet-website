### TL;DR

* Améliorations de l'abstraction de compte dans l'esprit de l'EIP-4337

1. Valider — Exécuter la séparation
2. L'unicité des transactions est désormais assurée dans le protocole (Nonce)

* Le mécanisme de redevance est étendu pour inclure :

1. Messages L1→L2
2. Déclarer les transactions

* Peu de changements de syntaxe du Caire

### Introduction

Nous sommes ravis de présenter Starknet Alpha 0.10.0. Cette version est une autre étape vers la mise à l'échelle d'Ethereum sans compromettre la sécurité et la décentralisation.

Ce billet de blog décrit brièvement les principales fonctionnalités de cette version. Pour la liste complète des modifications, consultez les notes de version[](https://github.com/starkware-libs/cairo-lang/releases). Pour des informations plus détaillées, consultez la documentation[](https://docs.starknet.io/).

### Changements d'abstraction de compte

Nous avançons avec[l'abstraction du compte de Starknet](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781). Cette version introduit des modifications inspirées de[EIP-4337](https://eips.ethereum.org/EIPS/eip-4337).

#### Valider/exécuter la séparation

Jusqu'à présent, la fonction \_\_execute\_\_ du compte était responsable à la fois de la validation et de l'exécution de la transaction. Dans la version 0.10.0, nous brisons ce couplage et introduisons une fonction \_\_validate\_\_ distincte dans les comptes. Lors de la réception d'une transaction, le contrat de compte appellera d'abord \_\_validate\_\_, puis, en cas de succès, procédera à \_\_execute\_\_.

La séparation validation/exécution fournit une distinction au niveau du protocole entre les transactions invalides et annulées (mais valides). Grâce à cela, les séquenceurs pourront facturer des frais pour l'exécution d'une transaction valide, qu'elle ait été annulée ou non.

#### Nonce

Dans la version 0.10.0, un champ nonce est ajouté afin d'appliquer l'unicité des transactions au niveau du protocole. Jusqu'à présent, les nonces étaient gérés au niveau du contrat de compte, ce qui signifiait qu'une transaction avec le même hachage pouvait théoriquement être exécutée deux fois.

Comme pour Ethereum, chaque contrat inclut désormais un nonce, qui compte le nombre de transactions exécutées à partir de ce compte. Les contrats de compte n'accepteront que les transactions avec un nonce correspondant, c'est-à-dire que si le nonce actuel du compte est X, il n'acceptera que les transactions avec le nonce X.

#### Nouvelle version des transactions

Pour permettre la rétrocompatibilité, nous introduirons ces deux modifications via une nouvelle version de transaction —[v1](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C). Ces modifications ne s'appliqueront qu'à la nouvelle version, et les anciens comptes pourront toujours exécuter des transactions de la version 0.

Remarque - la transaction v0 est désormais obsolète et sera supprimée dans Starknet Alpha v0.11.0. Assurez-vous de mettre à niveau pour utiliser la nouvelle version de transaction.

Pour des informations plus détaillées sur la version de transaction, veuillez lire la documentation[](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C).

#### Mécanisme de frais

La nouvelle version permet d'inclure des frais pour deux composants requis :

* [Message L1→L2](https://docs.starknet.io/docs/L1-L2%20Communication/messaging-mechanism#l1--l2-message-fees)
* [Déclarer l'opération](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)

Ces frais ne seront pas obligatoires dans cette version et ne seront appliqués qu'à partir de Starknet Alpha v0.11.0

#### Modifications de la syntaxe du Caire

A la faveur d'une évolution progressive vers une mise à jour de Cairo,[Cairo 1.0](https://www.youtube.com/watch?v=Ny4Rv6ztINU), cette version intègre plusieurs changements de syntaxe.

Pour minimiser les inconvénients, la version inclura un script de migration[](https://www.youtube.com/watch?v=kXs59zaQrsc)qui applique automatiquement les modifications ci-dessus. Vous pouvez trouver plus de détails[ici](https://github.com/starkware-libs/cairo-lang/releases).

### Et après?

* Dans quelques semaines, nous prévoyons d'introduire la parallélisation dans le séquenceur, permettant une production de blocs plus rapide (V0.10.1)
* Nous terminerons bientôt la dernière partie qui doit être incluse dans le paiement des frais — Déploiement du compte
* Sortie du Caire 1.0 ! Plus d'infos à ce sujet dans un prochain post.

### Comment puis-je être plus engagé ?

* Accédez à[starknet.io](https://starknet.io/)pour toutes les informations, la documentation, les didacticiels et les mises à jour de Starknet.
* Rejoignez[Starknet Discord](http://starknet.io/discord)pour l'assistance aux développeurs, les annonces de l'écosystème et pour devenir membre de la communauté.
* Visitez le Forum[Starknet](http://community.starknet.io/)pour rester à jour et participer aux discussions sur la recherche Starknet.

Nous sommes toujours heureux de recevoir des commentaires sur notre[documentation](https://docs.starknet.io/)!