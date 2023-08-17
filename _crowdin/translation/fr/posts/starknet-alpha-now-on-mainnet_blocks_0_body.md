### TL;DR

* L'Alpha est en direct sur le réseau principal
* Il supporte le calcul général et la composabilité
* Communauté en pleine croissance, développement des outils et des applications
* Des fonctionnalités supplémentaires seront déployées sur une base continue dans les semaines à venir
* Avertissement : il s'agit d'une version Alpha (lire les petits caractères ci-dessous)

### Introduction

StarkNet Alpha est lancé aujourd'hui sur Ethereum Mainnet!

StarkNet est un Rollup décentralisé sans permission, opérant en tant que réseau L2 sur Ethereum. StarkNet permet à n'importe quel dApp d'atteindre une échelle illimitée pour son calcul, sans compromettre la composabilité et la sécurité d'Ethereum. grâce à sa dépendance sur le système cryptographique le plus sûr et le plus évolutif —[STARK](https://starkware.co/stark/). StarkNet est construit sur le langage de programmation[Cairo](https://starkware.co/cairo/), le premier vérificateur complet de von-Neumann sur Ethereum. Le Cairo et le STARK ont été développés en interne par StarkWare et ont propulsé toutes nos applications de qualité de production qui ont réglé plus de 50 millions de txs et 250 milliards de dollars depuis l'été 2020.

Entre autres fonctionnalités, StarkNet Alpha permet des contrats intelligents de calcul général qui supportent la composabilité, à la fois avec d'autres contrats StarkNet et via L1<>L2 messagerie avec des contrats L1. StarkNet Alpha fonctionne en mode Rollup, ce qui signifie que toutes les données de diff d'état sont envoyées en chaîne.

En janvier, nous avons partagé la feuille de route[de StarkNet](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880). En juin, StarkNet Alpha est devenu un réseau de test public et a été mis à jour avec de nouvelles fonctionnalités sur une base roulante. Nous sommes ravis d'être en avance sur le calendrier, grâce en partie à notre dépendance à l'égard de notre pile logicielle STARK/Cairo durcie pour la qualité de la production.

### Comment devriez-vous traiter StarkNet Alpha ?

Tout d’abord, avec beaucoup de soin, puisque l’étiquette « Alpha » est là pour une raison. Attendez-vous à des changements, des corrections et des améliorations à venir. StarkNet Alpha doit encore être vérifié, et nous pouvons retarder un tel audit jusqu'à ce que le réseau arrive à maturité (lire l'avertissement à la fin de ce poste pour plus d'informations).

Généralement, nous suivons la voie prudente et sensée définie par nos collègues optimistes, à savoir Arbitrum et Optimisme : lancez le réseau avec un séquenceur unique et des applications de liste blanche afin de s'assurer que leurs développeurs comprennent les risques impliqués. Nous continuons à être pleinement engagés dans une décentralisation complète de StarkNet.

Et comment devriez-vous traiter l’économie de StarkNet Alpha? L'Alpha commencera sans frais de transaction. La prochaine mise à niveau, à quelques semaines à peine, introduira un mécanisme de frais — nous partagerons plus de détails dans un message séparé.

### Commencer à construire

Nous vous invitons à commencer à écrire vos propres applications sur StarkNet en vérifiant le (nouveau!) [site web](http://starknet.io/), ou sautant directement au[tutoriel](https://starknet.io/docs/).

Si vous êtes prêt à déployer, veuillez suivre ce[processus d'intégration](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu); créé pour s'assurer que tous les développeurs sont bien conscients de l'état préliminaire du système.

### Écosystème

Au cours des deux derniers mois, nous avons assisté à une croissance incroyable de la taille et de l'activité de la communauté StarkNet, qui se rassemble sur le[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y). Des dizaines de développeurs — équipes et individus — à travers l'écosystème de la blockchain contribuent à cet effort. (Voir l'avertissement à la fin de ce post)

#### Outils de développement

* OpenZeppelin définit les contrats standard. Leurs[dépôts](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)et[discussions](https://github.com/OpenZeppelin/cairo-contracts/discussions)valent la peine d'être suivis
* Le transpilateur[Warp](https://github.com/NethermindEth/warp)Solidity–>Cairo, développé par Nethermind
* [HardHat plugin de Shard Labs](https://github.com/Shard-Labs/starknet-hardhat-plugin)et[StarkNet Devnet](https://github.com/Shard-Labs/starknet-devnet)
* Argent développe des outils, y compris son effort conjoint sur StarkNet.js, aux côtés de[Sean Han](https://twitter.com/seanjameshan), son créateur

#### Infrastructure

**Explorateur de blocs**:

* [Le projet Voyager](http://voyager.online/)par Nethermind
* [Eth.tx](https://ethtx.info/)proposera une analyse de support et une vue détaillée des transactions de StarkNet

**Nœuds entiers**: deux efforts en cours : l'un est le projet Fermion dirigé par Erigon, l'autre est le projet[Éclaireur](https://github.com/eqlabs/pathfinder)dirigé par Equilibrium

**Portefeuilles**:

* [ArgentX](https://github.com/argentlabs/argent-x)est une extension de navigateur développée par Argent, déjà disponible pour les développeurs
* La solution de gestion des clés Torus est prête pour StarkNet
* Ledger développe une application StarkNet native ; à mettre à disposition avant la fin de l'année

**Audits du Caire**: Diligence ConsenSys, Trail of Bits, Peckshield, et ABDK conduisent déjà des audits du Caire, ou vont bientôt commencer

**Services API**: après qu'un nœud complet StarkNet soit disponible, les services API seront offerts par Figment, Chainstack et Infura

**Indexeur**: nous allons travailler à l'intégration de TheGraph pour travailler avec StarkNet, avec l'équipe Figment

### La route devant

Dans les semaines et les mois à venir, nous allons mettre à jour l'Alpha avec les capacités suivantes :

* Mécanisme d'amélioration du contrat
* Mécanisme de frais
* Événements
* Ajout de syscalls manquants (get_block_number, get_block_timestamp et plus)
* Version squelettique de Volition
* Et bien plus …

Pour surveiller cet effort en permanence, consultez la[feuille de route provisoire](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51) des fonctionnalités.

En regardant plus loin, nous continuons à investir massivement dans la recherche active sur plusieurs fronts (rejoignez les efforts de[chamanes](https://community.starknet.io/)) :

* Décentralisation
* Mise à l'échelle
* Disponibilité des données
* Incitation sans autorisation

### Appel à l'action

* Commencez à écrire des contrats sur le testnet StarkNet sans permission sur Goerli
* Rejoignez le[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)
* Rejoignez les appels communautaires
* Assistez au premier[Sommet Écosystème StarkNet](https://www.eventbrite.com/e/starknet-ecosystem-summit-2022-tickets-206671880157)(Jan 27-28 2022, Stanford CA)
* Rejoignez les[chamanes StarkNet](https://community.starknet.io/)pour une plongée plus profonde dans les défis de la recherche

### Clause de non-responsabilité

***StarkNet Alpha est un nouveau système complexe qui n'a pas été entièrement vérifié. Comme tous les logiciels complexes, le système StarkNet peut contenir des bogues qui, dans des cas extrêmes, peuvent entraîner une perte de tous vos fonds. Alors,***marchez prudemment et méfiez-vous !******

*L’écosystème StarkNet est un ensemble d’équipes et d’individus indépendants en pleine expansion, sur lequel StarkWare n’exerce aucune surveillance et n’assume aucune responsabilité. Tous les projets développés par les membres de l'écosystème peuvent contenir des bugs qui, dans des cas extrêmes, pourraient entraîner une perte de tous vos fonds. En outre, au fur et à mesure que des contrats plus intelligents sont déployés, le potentiel de bugs dangereux non intentionnés et même de fraudes et de tapis augmentent. Ainsi, traitez tous les contrats intelligents sur StarkNet comme vous traitez les contrats intelligents sur Ethereum, et n'utiliser que ceux que vous avez de bonnes raisons de faire confiance à la sécurité.*