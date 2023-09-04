### TL;DR

* Les frais sont désormais obligatoires sur Testnet, bientôt sur Mainnet
* Le modèle d'usine de contrat est maintenant possible!
* Starknet introduit des classes de contrat
* L'appel de délégué est remplacé par l'appel de bibliothèque

### Introduction

Nous sommes heureux de vous présenter Starknet Alpha 0.9.0 ! Il s'agit d'une version importante dans laquelle Starknet fait des pas significatifs vers la maturité, avec des ajouts substantiels à la fois à la fonctionnalité et à la conception du protocole.

Les frais sont obligatoires (actuellement uniquement sur Testnet, jusqu'à ce que la version 0.9.0 soit en ligne sur Mainnet) - toute L2 prospère doit avoir son propre système de frais indépendant. Après avoir introduit les frais en tant que fonctionnalité facultative dans la version 0.8.0, nous sommes maintenant confiants de les inclure en tant que composant central du protocole et de les rendre obligatoires. Plus de détails ci-dessous.

Un autre changement important au niveau du protocole est l'introduction des classes de contrat et la séparation classe/instance. Cela permet une utilisation plus simple de la fonctionnalité \`delegate_call\` et des déploiements à partir de contrats existants, activant le modèle d'usine sur Starknet.

### Classes de contrat

En nous inspirant de la programmation orientée objet, nous distinguons le code du contrat et son implémentation. Nous le faisons en séparant les contrats en classes et instances.

Une classe de contrat est la définition du contrat : son bytecode Cairo, les informations d'indication, les noms des points d'entrée et tout ce qui est nécessaire pour définir sans ambiguïté sa sémantique. Chaque classe est identifiée par son hachage de classe (analogue à un nom de classe des langages POO).

Une instance de contrat, ou simplement un contrat, est un contrat déployé correspondant à une classe. Notez que seules les instances de contrat se comportent comme des contrats, c'est-à-dire qu'elles ont leur propre stockage et sont appelables par des transactions/autres contrats. Une classe de contrat n'a pas nécessairement une instance déployée dans Starknet. L'introduction des classes s'accompagne de plusieurs changements de protocole.

#### 'Déclarer' Transaction

Nous introduisons un nouveau type de transaction dans Starknet : la transaction ['declare'](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction) , qui permet de déclarer une classe de contrat. Contrairement à la transaction \`deploy\`, cela ne déploie pas une instance de cette classe. L'état de Starknet inclura une liste des classes déclarées. De nouvelles classes peuvent être ajoutées via la nouvelle transaction \`declare\`.

#### Les fabriques d'appels et de contrats système "Déploiement".

Une fois qu'une classe est déclarée, c'est-à-dire que la transaction \`declare\` correspondante a été acceptée, nous pouvons déployer de nouvelles instances de cette classe. Pour cela, nous utilisons le nouvel appel système \`deploy\`, qui prend les arguments suivants :

* Le hachage de classe
* Sel
* Arguments du constructeur

L'appel système 'deploy' déploiera alors une nouvelle instance de cette classe de contrat, dont l'adresse [](https://docs.starknet.io/docs/Contracts/contract-address) sera déterminée par les trois paramètres ci-dessus et l'adresse du déployeur (le contrat qui a invoqué l'appel système).

L'inclusion de déploiements dans une transaction d'appel nous permet de tarifer et de facturer des frais pour les déploiements, sans avoir à traiter les déploiements et les appels différemment. Pour plus d'informations sur les frais de déploiement, consultez [la documentation](https://docs.starknet.io/docs/Fees/fee-mechanism#deployed-contracts).

Cette fonctionnalité introduit des fabriques de contrats dans Starknet, car tout contrat peut invoquer l'appel système \`deploy\`, créant de nouveaux contrats.

#### Passer de « Appel délégué » à « Appel de bibliothèque »

L'introduction de classes nous permet de résoudre un problème bien connu dans le mécanisme d'appel délégué d'Ethereum : lorsqu'un contrat effectue un appel délégué à un autre contrat, il n'a besoin que de sa classe (son code) plutôt que d'une instance réelle (son stockage). Devoir spécifier une instance de contrat spécifique lors d'un appel délégué est donc une mauvaise pratique (en effet, cela a conduit à quelques bogues dans les contrats Ethereum) - seule la classe doit être spécifiée.

L'ancien appel système \`delegate_call\` devient désormais obsolète (les anciens contrats déjà déployés continueront de fonctionner, mais les contrats utilisant \`delegate_call\` ne seront plus compilés), et est remplacé par un nouvel appel système library_call qui obtient le hachage de classe (d'une classe précédemment déclarée) au lieu d'une adresse d'instance de contrat. Notez qu'un seul contrat réel est impliqué dans un appel de bibliothèque, nous évitons donc l'ambiguïté entre le contrat d'appel et le contrat d'implémentation.

#### Nouveaux points de terminaison d'API

Nous avons ajouté deux nouveaux points de terminaison à l'API, permettant la récupération des données liées aux classes :

* \`get_class_by_hash\` : renvoie la définition de la classe en fonction du hachage de la classe
* \`get_class_hash_at\` : renvoie le hachage de classe d'un contrat déployé en fonction de l'adresse du contrat

Notez que pour obtenir directement la classe d'un contrat déployé, plutôt que de passer par les deux méthodes ci-dessus, vous pouvez utiliser l'ancien point de terminaison \`get_full_contract\`, qui sera renommé dans les futures versions. Tous les points de terminaison mentionnés ci-dessus sont également utilisables à partir de la CLI [Starknet](https://docs.starknet.io/docs/CLI/commands).

#### Frais

Nous procédons à l'intégration des frais dans Starknet, en les rendant obligatoires (d'abord sur Testnet, puis également sur Mainnet) pour \[invoke](https://docs.Starknet.io/docs/Blocks/transactions#invoke-function)\ transactions. La transaction \`declare\` ne nécessitera pas de frais à ce stade. De même, les transactions \`deploy\` ne nécessiteront pas non plus de frais, cependant, notez que ce type de transaction sera très probablement obsolète dans les futures versions.

Plusieurs questions ouvertes demeurent dans ce domaine, les plus importantes étant de savoir comment facturer les frais pour les déclarations de contrat et le déploiement des comptes Starknet. Nous aborderons ces problèmes dans les prochaines versions.

### Et après?

Suite à notre feuille de route que nous avons annoncée</a>

, nous nous engageons à améliorer les performances de Starknet en général, et les performances du séquenceur en particulier, afin d'obtenir des retours plus rapides des utilisateurs sur leurs transactions. Dans la prochaine version, nous prévoyons d'introduire la parallélisation dans le séquenceur, permettant une production de blocs plus rapide.</p> 

La prochaine version majeure de Starknet se concentrera sur la structure des comptes de Starknet, d'une manière similaire à [ERC-4337](https://medium.com/infinitism/erc-4337-account-abstraction-without-ethereum-protocol-changes-d75c9d94dc4a). Avec cela, nous aurons finalisé le comportement des comptes Starknet, franchissant une nouvelle étape majeure vers l'adoption massive !