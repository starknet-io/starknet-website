### TL;DR

* Alpha est en direct sur Mainnet
* Il prend en charge le calcul général et la composabilité
* Communauté à croissance rapide, développement d'outils et d'applications
* Des fonctionnalités supplémentaires seront déployées de manière continue dans les semaines à venir
* Avis de non-responsabilité : il s'agit d'une version Alpha (lisez les petits caractères ci-dessous)

### Introduction

Starknet Alpha est lancé aujourd'hui sur Ethereum Mainnet !

Starknet est un Rollup décentralisé sans autorisation fonctionnant comme un réseau L2 sur Ethereum. Starknet permet à n'importe quelle dApp d'atteindre une échelle illimitée pour son calcul, sans compromettre la composabilité et la sécurité d'Ethereum, grâce à sa confiance dans le système de preuve cryptographique le plus sûr et le plus évolutif - [STARK](https://starkware.co/stark/). Starknet est construit sur le langage de programmation [Cairo](https://starkware.co/cairo/) , le premier vérificateur von-Neumann complet Turing de niveau production sur Ethereum. Cairo et STARK ont tous deux été développés en interne par StarkWare et ont alimenté toutes nos applications de production, qui ont réglé plus de 50 millions de txs et 250 milliards de dollars depuis l'été 2020.

Entre autres fonctionnalités, Starknet Alpha permet des contrats intelligents de calcul général qui prennent en charge la composabilité, à la fois avec d'autres contrats Starknet et via la messagerie L1<>L2 avec les contrats L1. Starknet Alpha fonctionne en mode Rollup, ce qui signifie que toutes les données de différence d'état sont envoyées en chaîne.

En janvier dernier, nous avons partagé la feuille de route Starknet [](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880). En juin, Starknet Alpha a été mis en ligne sur un testnet public et a été mis à jour avec de nouvelles fonctionnalités sur une base continue. Nous sommes ravis d'être en avance sur le calendrier, en partie grâce à notre confiance dans notre pile logicielle STARK/Cairo renforcée au combat.

### Comment traiter Starknet Alpha ?

D'abord avec beaucoup de soin, car le label "Alpha" est là pour une raison. Attendez-vous à des changements, des correctifs et des améliorations à venir. Starknet Alpha n'a pas encore été audité, et nous pouvons retarder un tel audit jusqu'à ce que le réseau mûrisse un peu plus (lisez l'avertissement à la fin de cet article pour plus d'informations).

Généralement, nous suivons la voie prudente et sensée définie par nos collègues Optimistic Rollup, à savoir Arbitrum et Optimism : lancer le réseau avec un seul séquenceur, et mettre les applications en liste blanche afin de s'assurer que leurs développeurs comprennent les risques encourus. Nous restons pleinement attachés à une décentralisation complète de Starknet.

Et comment devriez-vous traiter l'économie de Starknet Alpha ? L'Alpha commencera sans frais de transaction. La prochaine mise à jour, dans quelques semaines seulement, introduira un mécanisme de frais - nous partagerons plus de détails dans un article séparé.

### Commencer à construire

Nous vous invitons à commencer à écrire vos propres applications sur Starknet en vérifiant le (nouveau !) [site Web](http://starknet.io/), ou sauter directement au tutoriel [](https://starknet.io/docs/).

Si vous êtes prêt à déployer, veuillez suivre ce [processus d'intégration](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu); créé pour s'assurer que tous les développeurs sont bien conscients de l'état préliminaire du système.

### Écosystème

Au cours des deux derniers mois, nous avons constaté une croissance incroyable de la taille et de l'activité de la communauté Starknet, qui se rassemble sur le [Starknet Discord](https://discord.gg/uJ9HZTUk2Y). Des dizaines de développeurs - équipes et individus - à travers l'écosystème de la blockchain contribuent à cet effort. (Voir la clause de non-responsabilité à la fin de cet article)

#### Outils de développement

* OpenZeppelin définit les contrats standards. Leurs [dépôts](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts) et [discussions](https://github.com/OpenZeppelin/cairo-contracts/discussions) valent la peine d'être suivies
* Le transpileur [Warp](https://github.com/NethermindEth/warp) Solidity–>Cairo, développé par Nethermind
* Plugin [HardHat de Shard Labs](https://github.com/Shard-Labs/starknet-hardhat-plugin) et [Starknet Devnet](https://github.com/Shard-Labs/starknet-devnet)
* Argent développe des outils, y compris son effort conjoint sur Starknet.js, aux côtés de [Sean Han](https://twitter.com/seanjameshan), son créateur

#### Infrastructure

Explorateur de blocs :

* [Le projet Voyager](http://voyager.online/) de Nethermind
* [Eth.tx](https://ethtx.info/) offrira une analyse de support et une vue détaillée des transactions Starknet

Noeuds complets : deux efforts en cours : l'un est le projet Fermion dirigé par Erigon, l'autre est le projet [Pathfinder](https://github.com/eqlabs/pathfinder) , dirigé par Equilibrium

Portefeuilles :

* [ArgentX](https://github.com/argentlabs/argent-x) est une extension de navigateur développée par Argent, déjà disponible pour les développeurs
* La solution de gestion de clés Torus est prête pour Starknet
* Ledger développe une application Starknet native ; disponible avant la fin de l'année

Audits du Caire : ConsenSys Diligence, Trail of Bits, Peckshield et ABDK effectuent déjà des audits du Caire ou sont sur le point de commencer bientôt

Services API : après la mise à disposition d'un nœud complet Starknet, les services API seront proposés par Figment, Chainstack et Infura

Indexer : nous allons travailler sur l'intégration de TheGraph pour travailler avec Starknet, en collaboration avec l'équipe Figment

### La route à suivre

Dans les semaines et les mois à venir, nous mettrons à niveau l'Alpha avec les fonctionnalités suivantes :

* Mécanisme d'évolutivité du contrat
* Mécanisme de frais
* Événements
* Ajout des appels système manquants (get_block_number, get_block_timestamp, et plus)
* Version squelettique de Volition
* Et bien plus encore …

Pour surveiller cet effort de manière continue, consultez la feuille de route [des fonctionnalités](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51).

À plus long terme, nous continuons à investir massivement dans la recherche active sur plusieurs fronts (rejoignez l'effort [Shamans](https://community.starknet.io/) ) :

* Décentralisation
* Mise à l'échelle
* Disponibilité des données
* Incitation sans autorisation

### Appel à l'action

* Commencez à rédiger des contrats sur le testnet Starknet sans autorisation sur Goerli
* Rejoignez le Discord [Starknet](https://discord.gg/uJ9HZTUk2Y)
* Rejoignez les appels de la communauté
* Assistez au premier [Starknet Ecosystem Summit](https://www.eventbrite.com/e/starknet-ecosystem-summit-2022-tickets-206671880157) (27-28 janvier 2022, Stanford CA)
* Rejoignez les [Starknet Shamans](https://community.starknet.io/) pour une plongée plus profonde dans les défis de la recherche

### Clause de non-responsabilité

\*Starknet Alpha est un système nouveau et complexe qui n'a pas été entièrement audité. Comme tous les systèmes logiciels complexes, le système Starknet peut contenir des bogues qui, dans des cas extrêmes, pourraient entraîner une perte de tous vos fonds. Alors soyez prudent et méfiez-vous !\*

L'écosystème Starknet est un ensemble important et en croissance rapide d'équipes et d'individus indépendants, sur lesquels StarkWare n'a aucun contrôle et n'assume aucune responsabilité. N'importe lequel des projets développés par les membres de l'écosystème peut contenir des bogues qui, dans des cas extrêmes, pourraient entraîner une perte de tous vos fonds. De plus, à mesure que de plus en plus de contrats intelligents sont déployés, le potentiel de bogues nuisibles involontaires et même d'escroqueries malveillantes et de tirages de tapis augmente. Donc, traitez tous les contrats intelligents sur Starknet comme vous traitez les contrats intelligents sur Ethereum, et n'utilisez que ceux auxquels vous avez de bonnes raisons de faire confiance comme étant sûrs.