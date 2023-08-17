### TL;DR

* StarkNet Alpha 0.7.0 sort sur Goerli; rempli d'améliorations
* Les contrats peuvent maintenant être améliorés en utilisant le modèle de mise à niveau du proxy
* Les contrats peuvent maintenant émettre des événements
* Prise en charge des appels système de blocs et de blocs d'horodatage tant attendus

### Introduction

Nous sommes heureux de sortir l'Alpha 0.7.0, une version pleine de nouvelles fonctionnalités et améliorations. L’un des meilleurs stimulants de StarkNet ces derniers mois a été l’implication accrue de la communauté dans la formation de l’avenir de StarkNet. Cette version répond à certains des besoins de combustion de la communauté.

#### Modifications de la convention de nommage

Le lecteur observant a peut-être remarqué que la version précédente de StarkNet Alpha était nommée Alpha 4, alors que nous sommes en train de sortir l'Alpha 0.7.0. Nous avons décidé d'omettre le numéro de version Alpha dédié et de ne compter que sur la version cairo-lang associée.

### Nouvelles fonctionnalités

#### Amélioration du Contrat

Le modèle de mise à jour du Proxy[d'OpenZeppelin](https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies)est maintenant entièrement pris en charge pour les mises à jour du contrat dans StarkNet. Le modèle Proxy est la méthode courante pour activer les mises à jour de contrats sur Ethereum. L'Alpha 0.7.0 permet ce masque sur StarkNet.

Nous avons fait un court[tutoriel](https://starknet.io/docs/hello_starknet/default_entrypoint.html)pour démontrer une implémentation de base du modèle, et OpenZeppelin est déjà dur à mettre en œuvre un contrat standard pour le modèle de proxy ; voir le[prototype](https://github.com/OpenZeppelin/cairo-contracts/pull/129).

#### Horodatage du numéro de bloc et du bloc

L'Alpha 0.7.0 ajoute deux nouveaux appels système que de nombreux développeurs ont demandés. Ces appels permettent à un contrat d'accéder au numéro de bloc et à l'horodatage du bloc. Le numéro de bloc retourne le numéro du bloc exécuté en cours. L'horodatage du bloc retourne l'horodatage donné par le séquenceur lors de la création du bloc.

Vous pouvez voir un exemple d'utilisation de ces fonctionnalités dans le tutoriel[](https://starknet.io/docs/hello_starknet/more_features.html#block-number-and-timestamp).

#### Événements

Surprise! Une fonctionnalité qui était prévue pour une version future a sombré dans cette version précédente.

Les contrats StarkNet prennent désormais en charge la définition et l'émission d'événements, ce qui leur permet d'exposer des informations d'exécution pour les applications hors chaîne à consommer. Les développeurs d'Ethereum trouveront la sémantique et la syntaxe très similaires à Solidity. Vous pouvez lire la[documentation](https://starknet.io/documentation/events/), ou suivre le[tutoriel](https://starknet.io/docs/hello_starknet/events.html), qui explique cette fonctionnalité.

#### Directive uiltins retirée %b

La directive uiltin %bn'est plus nécessaire dans les contrats StarkNet. Ce changement a suivi une discussion communautaire à propos du[modèle d'extensibilité de contrat](https://community.starknet.io/t/contract-extensibility-pattern/210)sur[les shamans StarkNet](https://community.starknet.io/). Il simplifie considérablement l'utilisation de ce modèle d'extensibilité.

Par exemple, le contrat suivant sera modifié de :

```
%lang starknet

# C'est la directive "%builtins" .
# Ce n'est plus nécessaire.
%builtins range_check

@view
func add(x : felt, y : felt) -> (res : felt):
return (res=x + y)
end
```

À cela :

```
%lang starknet
@view
func add(x : felt, y : felt) -> (res : felt):
return (res=x + y)
end
```

Vous pouvez consulter les contrats standards[ERC-20](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts/token)qui utilisent le nouveau patron.

#### Fonctions Externes Support Tableaux de Structures

Alpha 0.7.0 supporte le passage et le retour de tableaux de structures dans des fonctions externes. Cette fonctionnalité supplémentaire permet aux Contrats de Compte de mieux prendre en charge les[multicalls](https://github.com/OpenZeppelin/cairo-contracts/pull/73#discussion_r753535751).

Multicall est une fonctionnalité puissante de l'abstraction de compte qui permet à un compte d'effectuer plusieurs appels en une seule transaction. Un cas d'utilisation évident est celui de la création d'une**transaction unique**qui appelle l'indemnité puis le transfert depuis..

Nous sommes impatients de voir ce que la communauté en fait.

#### Améliorations de StarkNet CLI

**Prise en charge des blocs en attente**

[Les blocs en attente](https://starknet.io/documentation/block-structure-and-hash/#pending_block)ont été[introduits](https://community.starknet.io/t/cairo-v0-6-2-api-change-pending-block/195)dans la dernière version mineure (v0.6.2) et proposés des confirmations plus rapides sur les transactions. Cette version inclut le support pour interroger ces blocs via la CLI StarkNet.

Pour l'utiliser, dans chaque commande CLI qui prend block_number comme argument (contract_call/get_block/get_code/get_storage_at), nous pouvons interroger le StarkNet par rapport au bloc en attente en spécifiant block_number=pending.

**Prise en charge des contrats de compte**

StarkNet utilise l'abstraction de compte, c'est-à-dire que tous les comptes sont implémentés en tant que contrats intelligents. Les premières implémentations de contrats de compte ont été faites par[Argent](https://github.com/argentlabs/argent-contracts-starknet)et[OZ](https://github.com/OpenZeppelin/cairo-contracts/blob/main/contracts/Account.cairo), mais nous attendons beaucoup plus à venir.

Dans StarkNet, toutes les transactions doivent passer par un contrat de compte, et le CLI permet maintenant l'interaction avec StarkNet Alpha directement via les contrats de compte. Consultez le[tutoriel](https://starknet.io/docs/hello_starknet/account_setup.html#setting-up-a-starknet-account)sur la façon de le configurer.

Des fonctionnalités similaires ont également été ajoutées à[StarkNet.py](https://github.com/software-mansion/starknet.py/)et à[Nil](https://github.com/OpenZeppelin/nile)au cours du mois dernier.

#### L1<>Messagerie L2 dans le framework de test

L'Alpha 0.7.0 introduit le Postman. Le Postman permet aux développeurs d'utiliser le framework de test pour tester des flux plus complexes.

À un niveau élevé — il se moque de la responsabilité du Séquenceur StarkNet de passer des messages de L1 à L2 et L2 à L1. Il s'assure que les messages envoyés via le contrat de messagerie Solidity apparaîtront au contrat de destination StarkNet et que les messages envoyés à partir d'un contrat StarkNet apparaîtront dans le contrat de messagerie Solidity.

#### Et plus de fonctionnalités

L'Alpha 0.7.0 fournit beaucoup plus de fonctionnalités et de changements, comme l'ajout d'une fonction de racine carrée efficace à la bibliothèque commune de mathématiques. Une liste complète apparaît dans le[journal des modifications](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.7.0).

### Suivant ?

Le support initial du[mécanisme de frais](https://community.starknet.io/t/fees-in-starknet-alpha/286/29)sera publié dans quelques semaines en tant que sous-version de StarkNet.

### Plus d'informations?

[starknet.io](https://starknet.io/): pour toutes les informations, tutoriels et mises à jour de StarkNet.

[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y): rejoignez-nous pour obtenir des réponses à vos questions, obtenir du soutien aux développeurs et faire partie de la communauté.

[StarkNet Shamans](https://community.starknet.io/): rejoignez StarkNet pour suivre (et participer !) les discussions de recherche de StarkNet.