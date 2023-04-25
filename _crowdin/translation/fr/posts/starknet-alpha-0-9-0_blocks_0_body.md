### TL;DR

* **Les frais sont maintenant obligatoires sur le réseau Testnet, bientôt sur le réseau principal**
* Le modèle d'usine du contrat est maintenant possible!
* StarkNet introduit des classes de contrat
* L'appel délégué est remplacé par un appel de bibliothèque

### Introduction

Nous sommes heureux de vous présenter StarkNet Alpha 0.9.0! C'est une version importante dans laquelle StarkNet fait des pas importants vers la maturité, avec des ajouts substantiels à la fonctionnalité et à la conception de protocole.

**Les frais sont obligatoires**(actuellement uniquement sur Testnet, jusqu'à la version 0.9. seront sur Mainnet) — tout L2 prospère doit avoir son propre système de redevances indépendant. Après l'introduction des frais en tant que fonctionnalité facultative dans la version 0.8. , nous sommes maintenant confiants de les inclure en tant que composant central du protocole, et de les rendre obligatoires. Plus de détails ci-dessous.

Un autre changement significatif au niveau du protocole est l'introduction des classes de contrat et la séparation de classe/instance. Cela permet une utilisation plus simple de la fonctionnalité \`delegate_call\` et des déploiements à partir des contrats existants, permettant le modèle d'usine sur StarkNet.

### Classes de Contrat

S'inspirant de la programmation orientée objet, nous distinguons entre le code du contrat et sa mise en œuvre. Nous le faisons en séparant les contrats en classes et instances.

Une**classe de contrat**est la définition du contrat : son bytecode du Caire, indice d'information, noms de point d'entrée et tout ce qui est nécessaire pour définir sans ambiguïté sa sémantique. Chaque classe est identifiée par son hash de classe (analogue à un nom de classe des langues OOP).

Une**instance de contrat**, ou simplement un contrat, est un contrat déployé correspondant à une certaine classe. Notez que seules les instances contractuelles se comportent comme des contrats, c'est-à-dire qu'elles ont leur propre stockage et sont appelables par transactions/autres contrats. Une classe de contrat n'a pas nécessairement d'instance déployée dans StarkNet. L'introduction de classes est accompagnée de plusieurs changements de protocole.

#### Déclarer la transaction

Nous introduisons un nouveau type de transaction dans StarkNet : la transaction[« déclarer»](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction), qui permet de déclarer une classe de contrat**.**Contrairement à la transaction \`deploy\`, cela ne déploie pas une instance de cette classe. L'état de StarkNet inclura une liste des classes déclarées. De nouvelles classes peuvent être ajoutées via la nouvelle transaction \`declare\`.

#### Les usines d’appel de systèmes et de contrats de déploiement.

Une fois qu'une classe est déclarée, c'est-à-dire que la transaction \`declare\` correspondante a été acceptée, nous pouvons déployer de nouvelles instances de cette classe. Pour cela, nous utilisons le nouvel appel système \`deploy\` qui prend les arguments suivants :

* Le hash de la classe
* Sel
* Arguments constructeur

Le « déploiement» syscall va ensuite déployer une nouvelle instance de cette classe de contrat, dont l'adresse[](https://docs.starknet.io/docs/Contracts/contract-address)sera déterminée par les trois paramètres ci-dessus et l'adresse de déploiement (le contrat qui a invoqué l'appel système).

Inclure les déploiements dans une transaction d'invocation nous permet de fixer des prix et de facturer des frais pour les déploiements, sans avoir à traiter différemment les déploiements et les invocations. Pour plus d'informations sur les frais de déploiement, voir[la documentation](https://docs.starknet.io/docs/Fees/fee-mechanism#deployed-contracts).

Cette fonctionnalité introduit des usines de contrat dans StarkNet, car n'importe quel contrat peut invoquer le \`deploy\` syscall, en créant de nouveaux contrats.

#### Déplacement de « Appel délégué» à « Appel à la bibliothèque»

L’introduction de classes nous permet de résoudre un problème bien connu dans le mécanisme d’appel délégué d’Ethereum: lorsqu’un contrat effectue un appel délégué à un autre contrat, il a seulement besoin de sa classe (son code) plutôt que d'une instance réelle (son stockage). Avoir à spécifier une instance de contrat spécifique lors d'un appel de délégué est donc une mauvaise pratique (effectivement, cela a conduit à quelques bugs dans les contrats Ethereum) — seule la classe doit être spécifiée.

L'ancien appel système \`delegate_call\` devient maintenant obsolète (les anciens contrats qui sont déjà déployés continueront à fonctionner, mais**les contrats utilisant \`delegate_call\` ne compileront plus**), et est remplacé par un nouvel appel système library_call qui récupère le hachage de la classe (de la classe déclarée précédemment) au lieu d'une adresse d'instance de contrat. Notez qu'un seul contrat réel est impliqué dans un appel à la bibliothèque, nous évitons donc l'ambiguïté entre le contrat d'appel et le contrat d'implémentation.

#### Nouveaux terminaux API

Nous avons ajouté deux nouveaux points de terminaison à l'API, permettant la récupération des données liées à la classe:

* \`get_class_by_hash\`: retourne la définition de la classe étant donné le hachage de la classe
* \`get_class_hash_at\`: retourne le hachage de la classe d'un contrat déployé à l'adresse du contrat

Notez que pour obtenir directement la classe d'un contrat déployé, plutôt que de passer par les deux méthodes ci-dessus, vous pouvez utiliser l'ancien point de terminaison \`get_full_contract\` qui sera renommé dans les futures versions. Tous les points de terminaison mentionnés ci-dessus sont également utilisables depuis le[CLI StarkNet](https://docs.starknet.io/docs/CLI/commands).

#### Frais

Nous procédons à l'incorporation des frais dans StarkNet, les rendant obligatoires (d'abord sur Testnet, puis aussi sur Mainnet) pour les transactions ``[invoke](https://docs.starknet.io/docs/Blocks/transactions#invoke-function)\`. La transaction \`declare\` n'exigera pas de frais à ce stade. De même, \`déployer les transactions`` ne nécessitera pas non plus de frais, cependant, notez que ce type de transaction sera très probablement obsolète dans les versions futures.

Plusieurs questions restent en suspens dans ce domaine, les plus importantes étant la façon de facturer des frais pour les déclarations de contrat et le déploiement de comptes StarkNet. Nous aborderons ces questions dans les versions futures.

### Quelle est la suite ?

Suite à notre feuille de route que nous avons annoncée[en février](https://medium.com/starkware/starknet-on-to-the-next-challenge-96a39de7717), nous nous engageons à améliorer les performances de StarkNet en général et les performances du séquenceur en particulier, pour obtenir aux utilisateurs des retours plus rapides sur leurs transactions. Dans la version suivante, nous prévoyons d'introduire la parallélisation dans le séquenceur, permettant une production de blocs plus rapide.

La prochaine version majeure de StarkNet se concentrera sur la structure des comptes de StarkNet, d'une manière similaire à[ERC-4337](https://medium.com/infinitism/erc-4337-account-abstraction-without-ethereum-protocol-changes-d75c9d94dc4a). Avec cela, nous aurons finalisé la façon dont se comportent les comptes StarkNet, faisant encore un pas important vers l'adoption de masse!