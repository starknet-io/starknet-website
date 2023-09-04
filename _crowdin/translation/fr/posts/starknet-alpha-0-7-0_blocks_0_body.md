### TL;DR

* Starknet Alpha 0.7.0 publié sur Goerli ; bourré d'améliorations
* Les contrats peuvent désormais être mis à niveau à l'aide du modèle de mise à niveau de proxy
* Les contrats peuvent désormais émettre des événements
* Prise en charge des appels système Block Number et Block Timestamp tant attendus

### Introduction

Nous sommes heureux de publier Alpha 0.7.0, une version riche en nouvelles fonctionnalités et améliorations. L'un des meilleurs stimulants pour Starknet au cours des derniers mois a été l'implication accrue de la communauté dans l'élaboration de l'avenir de Starknet. Cette version répond à certains des besoins brûlants de la communauté.

#### Modifications de la convention de dénomination

Le lecteur attentif a peut-être remarqué que la version précédente de Starknet Alpha s'appelait Alpha 4, alors que nous publions maintenant Alpha 0.7.0. Nous avons décidé d'omettre le numéro de version Alpha dédié et de nous fier uniquement à la version cairo-lang associée.

### Nouvelles fonctionnalités

#### Évolutivité du contrat

[Proxy Upgrade Pattern](https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies)d'OpenZeppelin est désormais entièrement pris en charge pour les mises à niveau de contrat dans Starknet. Le modèle Proxy est la méthode courante pour activer les mises à niveau de contrat sur Ethereum. Alpha 0.7.0 active ce modèle sur Starknet.

Nous avons fait un court tutoriel[](https://starknet.io/docs/hello_starknet/default_entrypoint.html)pour démontrer une implémentation de base du modèle, et OpenZeppelin travaille déjà dur pour mettre en œuvre un contrat standard pour le modèle de proxy ; voir le[prototype](https://github.com/OpenZeppelin/cairo-contracts/pull/129).

#### Numéro de bloc et horodatage du bloc

Alpha 0.7.0 ajoute deux nouveaux appels système que de nombreux développeurs ont demandés. Ces appels permettent à un contrat d'accéder au numéro de bloc et à l'horodatage du bloc. Le numéro de bloc renvoie le numéro du bloc en cours d'exécution. L'horodatage du bloc renvoie l'horodatage donné par le Séquenceur à la création du bloc.

Vous pouvez voir un exemple d'utilisation de ces fonctionnalités dans le tutoriel[](https://starknet.io/docs/hello_starknet/more_features.html#block-number-and-timestamp).

#### Événements

Surprendre! Une fonctionnalité qui était prévue pour une future version s'est glissée dans celle-ci.

Les contrats Starknet prennent désormais en charge la définition et l'émission d'événements, leur permettant d'exposer des informations d'exécution pour les applications hors chaîne à consommer. Les développeurs d'Ethereum trouveront la sémantique et la syntaxe très similaires à Solidity. Vous pouvez lire la[documentation](https://starknet.io/documentation/events/), ou suivre le[tutoriel](https://starknet.io/docs/hello_starknet/events.html), qui explique cette fonctionnalité.

#### Suppression de la directive %builtins

La directive %builtin n'est plus nécessaire dans les contrats Starknet. Ce changement fait suite à une discussion de la communauté sur le modèle d'extensibilité de contrat[](https://community.starknet.io/t/contract-extensibility-pattern/210)sur[Starknet Shamans](https://community.starknet.io/). Cela simplifie considérablement l'utilisation de ce modèle d'extensibilité.

Par exemple, le contrat suivant sera modifié de :

```
%lang starknet

# C'est la directive "%builtins".
# Il n'est plus nécessaire.
%builtins range_check

@view
func add(x : feutre, y : feutre) -> (res : feutre):
return (res=x + y)
end
```

Pour ça:

```
%lang starknet
@view
func add(x : feutre, y : feutre) -> (res : feutre):
retour (res=x + y)
fin
```

Vous pouvez consulter les contrats standard[ERC-20](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts/token), qui utilisent le nouveau modèle.

#### Les fonctions externes prennent en charge les tableaux de structures

Alpha 0.7.0 prend en charge le passage et le retour de tableaux de structures dans les fonctions externes. Cette fonctionnalité supplémentaire permet aux contrats de compte de mieux prendre en charge[appels multiples](https://github.com/OpenZeppelin/cairo-contracts/pull/73#discussion_r753535751).

Le multi-appel est une fonctionnalité puissante de l'abstraction de compte qui permet à un compte de passer plusieurs appels en une seule transaction. Un cas d'utilisation évident est celui de la création d'une transaction unique****qui appelle allocation puis transferFrom.

Nous avons hâte de voir ce que la communauté en fera.

#### Améliorations de la CLI Starknet

**Prise en charge des blocs en attente**

[blocs en attente](https://starknet.io/documentation/block-structure-and-hash/#pending_block)ont été[introduits](https://community.starknet.io/t/cairo-v0-6-2-api-change-pending-block/195)dans la dernière version mineure (v0.6.2) et offraient des confirmations plus rapides sur les transactions. Cette version inclut la prise en charge de l'interrogation de ces blocs via la CLI Starknet.

Pour l'utiliser, dans chaque commande CLI qui prend block_number comme argument (contract_call/get_block/get_code/get_storage_at), nous pouvons interroger le Starknet par rapport au bloc en attente en spécifiant block_number=pending.

**Prise en charge des contrats de compte**

Starknet utilise l'abstraction de compte, c'est-à-dire que tous les comptes sont implémentés sous forme de contrats intelligents. Les premières implémentations de contrats de compte ont été réalisées par[Argent](https://github.com/argentlabs/argent-contracts-starknet)et[OZ](https://github.com/OpenZeppelin/cairo-contracts/blob/main/contracts/Account.cairo), mais nous en attendons beaucoup d'autres.

Dans Starknet, toutes les transactions doivent passer par un contrat de compte, et la CLI permet désormais une interaction avec Starknet Alpha directement via des contrats de compte. Voir le[tutoriel](https://starknet.io/docs/hello_starknet/account_setup.html#setting-up-a-starknet-account)sur la façon de le configurer.

Une fonctionnalité similaire a également été ajoutée à[Starknet.py](https://github.com/software-mansion/starknet.py/)et à[Nile](https://github.com/OpenZeppelin/nile)le mois dernier.

#### Messagerie L1<>L2 dans le cadre de test

Alpha 0.7.0 introduit le facteur. Le facteur permet aux développeurs d'utiliser le cadre de test pour tester des flux plus complexes.

À un niveau élevé, il se moque de la responsabilité du séquenceur Starknet de transmettre des messages de L1 à L2 et de L2 à L1. Il garantit que les messages envoyés via le contrat de messagerie Solidity apparaîtront dans le contrat Starknet de destination et que les messages envoyés à partir d'un contrat Starknet apparaîtront dans le contrat de messagerie Solidity.

#### Et plus de fonctionnalités

Alpha 0.7.0 fournit de nombreuses autres fonctionnalités et modifications, comme l'ajout d'une fonction efficace de racine carrée à la bibliothèque mathématique commune. Une liste complète apparaît dans le[changelog](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.7.0).

### La prochaine ?

La prise en charge initiale du mécanisme de frais[](https://community.starknet.io/t/fees-in-starknet-alpha/286/29)sera publiée dans quelques semaines, en tant que sous-version de Starknet.

### Plus d'information?

[starknet.io](https://starknet.io/): pour toutes les informations, tutoriels et mises à jour de Starknet.

[Starknet Discord](https://discord.gg/uJ9HZTUk2Y): rejoignez-nous pour obtenir des réponses à vos questions, obtenir de l'aide pour les développeurs et faire partie de la communauté.

[Starknet Shamans](https://community.starknet.io/): inscrivez-vous pour suivre (et participer !) aux discussions sur la recherche Starknet.