### TL;DR

* Résumé des améliorations du compte client dans l'esprit de l'EIP-4337

1. Valider – Exécuter la séparation
2. L'unicité des transactions est maintenant assurée dans le protocole (Nonce)

* Le mécanisme de frais est étendu pour inclure :

1. L1→L2 Messages
2. Déclarer les transactions

* Peu de modifications de syntaxe du Caire

### Introduction

Nous sommes heureux de vous présenter StarkNet Alpha 0.10.0. Cette version est une nouvelle étape vers la mise à l'échelle d'Ethereum sans compromettre la sécurité et la décentralisation.

Ce billet de blog décrit brièvement les principales caractéristiques de cette version. Pour la liste complète des modifications, consultez les[notes de publication](https://github.com/starkware-libs/cairo-lang/releases). Pour plus d'informations détaillées, consultez la[documentation](https://docs.starknet.io/).

### Changements de résumé du compte client

Nous avançons avec l'abstraction du compte[StarkNet](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781). Cette version introduit des changements inspirés de[EIP-4337](https://eips.ethereum.org/EIPS/eip-4337).

#### Valider/Exécuter la séparation

Jusqu'à présent, la fonction \_\_execute\_\_ du compte était responsable de la validation et de l'exécution de la transaction. En 0.10.0, nous rompons ce couplage et introduisons une fonction séparée \_\_validate\_\_ dans les comptes. Lors de la réception d'une transaction, le contrat de compte appellera d'abord \_\_validate\_\_, puis, en cas de succès, procéder à \_\_execute\_.

La séparation valide/exécution fournit une distinction entre les opérations non valides et annulées (encore valides). Grâce à cela, les séquenceurs pourront facturer des frais pour l'exécution d'une transaction valide, qu'elle ait été annulée ou non.

#### Nonce

Dans la version 0.10.0, un champ nonce est ajouté pour imposer l'unicité des transactions au niveau du protocole. Jusqu'à présent, les nonces étaient gérées au niveau du contrat de compte, ce qui signifiait qu'une transaction avec le même hachage pouvait être exécutée deux fois théoriquement.

De la même manière qu'Ethereum, chaque contrat comprend désormais une nonce, qui compte le nombre de transactions exécutées depuis ce compte. Les contrats de compte n'accepteront que les transactions avec une nonce correspondante, i.e. si le nonce actuel du compte est X, alors il n'acceptera que les transactions avec nonce X.

#### Nouvelle version de la transaction

Pour permettre la compatibilité ascendante, nous introduirons ces deux modifications via une nouvelle version de transaction —[v1](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C). Ces modifications ne s'appliqueront qu'à la nouvelle version, et les comptes plus anciens seront toujours en mesure d'exécuter les transactions de version 0.

Note — La transaction v0 est maintenant obsolète et sera supprimée dans StarkNet Alpha v0.11.0. Veuillez vous assurer de mettre à jour pour utiliser la nouvelle version de la transaction.

Pour des informations plus détaillées sur la version de la transaction, veuillez lire la[documentation](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C).

#### Mécanisme de frais

La nouvelle version permet d'inclure des frais pour deux composants requis :

* [L1→L2 Message](https://docs.starknet.io/docs/L1-L2%20Communication/messaging-mechanism#l1--l2-message-fees)
* [Déclarer la transaction](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)

Ces frais ne seront pas obligatoires dans cette version et seront uniquement appliqués à partir de StarkNet Alpha v0.11.0.

#### Changements de syntaxe du Caire

En faveur de la progression progressive vers une mise à niveau du Caire,[Caire 1.0](https://www.youtube.com/watch?v=Ny4Rv6ztINU), cette version inclut plusieurs modifications de syntaxe.

Pour minimiser les inconvénients, la version inclura un script de migration[](https://www.youtube.com/watch?v=kXs59zaQrsc)qui applique automatiquement les modifications ci-dessus. Vous pouvez trouver plus de détails[ici](https://github.com/starkware-libs/cairo-lang/releases).

### Quelle est la suite ?

* Dans quelques semaines, nous prévoyons d'introduire la parallélisation dans le séquenceur, permettant une production de blocs plus rapide (V0.10.1)
* Nous allons bientôt compléter la dernière partie qui doit être incluse dans le paiement des frais — déploiement du compte
* Version du Cairo 1.0 ! Plus d'infos sur ce sujet dans un post à venir.

### Comment puis-je être plus impliqué ?

* Allez sur[starknet.io](https://starknet.io/)pour toutes les informations, documentation, tutoriels et mises à jour de StarkNet.
* Rejoignez[StarkNet Discord](http://starknet.io/discord)pour le support des développeurs, les annonces écosystémiques, et devenez une partie de la communauté.
* Visitez le[Forum StarkNet](http://community.starknet.io/)pour rester à jour et participer aux discussions de recherche de StarkNet.

Nous sommes toujours heureux de recevoir des commentaires sur notre[documentation](https://docs.starknet.io/)!