### TL;DR

* Le Starknet Token (STRK) est maintenant déployé sur Ethereum Mainnet
* Attention aux arnaques ! Les jetons Starknet ne sont pas proposés à la vente
* Il faudra du temps à la Fondation pour déterminer le mécanisme de distribution de ses tokens
* Les jetons détenus par les actionnaires, les employés et les développeurs de logiciels partenaires indépendants de StarkWare sont verrouillés pendant une période de quatre ans, avec une libération progressive commençant après un an
* Le jeton favorisera la décentralisation de Starknet grâce à son utilisation pour le vote, le jalonnement et le paiement des frais

Aujourd'hui, [Starknet](https://starknet.io/) franchit une nouvelle étape vers la décentralisation. Le jeton Starknet est désormais [sur Ethereum](https://etherscan.io/address/0xca14007eff0db1f8135f4c25b34de49ab0d42766). Récapitulons rapidement : STRK sera utilisé comme jeton de jalonnement pour la participation aux mécanismes de consensus de Starknet, comme jeton de gouvernance et pour payer les frais de transaction. La logique de chacun de ces utilitaires est présentée dans [notre proposition de décentralisation](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), dans la section intitulée « À quoi serviront les tokens ?

\* Méfiez-vous des arnaques : au moment de la rédaction, il n'y a aucun moyen d'acheter des jetons Starknet ; cette période de non-vente restera en place jusqu'à nouvel ordre de la Fondation [Starknet](https://twitter.com/StarkNetFndn); suivez la communication officielle de la Fondation Starknet pour connaître toute mise à jour du statut de STRK. Vous pouvez signaler des escroqueries et rechercher d'autres rapports d'escroqueries dans le canal [scam-report](https://discord.gg/qypnmzkhbc) sur le serveur [Starknet Discord](http://starknet.io/discord)*

Cet article explique le processus d'allocation de jetons et comment les contrats de jetons déployés servent deux des trois utilitaires conçus pour le jeton, à savoir le vote et le jalonnement. Le troisième utilitaire - payer les frais de Starknet - sera discuté ultérieurement.

### Planification du processus d'allocation de jetons

Nous avons précédemment proposé un [plan](https://medium.com/starkware/part-3-starknet-token-design-5cc17af066c6) pour l'allocation initiale des jetons. Les jetons alloués aux actionnaires, aux employés et aux développeurs de logiciels indépendants sont verrouillés pendant quatre ans, avec un calendrier de libération progressive commençant après un an. Les jetons verrouillés peuvent être utilisés pour voter et pour le "staking", mais ne peuvent pas être transférés ou échangés. Certains des jetons sont verrouillés via un contrat intelligent dédié sur Ethereum, tandis que d'autres jetons sont verrouillés via des gardiens (custodians).

Séparément, 50,1 % des jetons Starknet existants sont alloués à la Fondation Starknet, pour être utilisés pour atteindre ses [objectifs](https://medium.com/@StarkNet_Foundation/welcome-to-the-world-starknet-foundation-7bd55d5dbc59) (cf. [le post de StarkWare](https://medium.com/starkware/introducing-the-starknet-foundation-bd4b4379fbb)). Ces jetons ne sont pas verrouillés. Cependant, la Fondation aura besoin de temps pour formuler le mécanisme exact pour allouer davantage ces jetons et partagera ses plans en temps voulu.

#### Pourquoi enfermer ?

Le verrouillage des jetons pour la période susmentionnée garantit que les contributeurs actuels s'alignent sur les incitations à long terme de Starknet. Cela décourage également la spéculation sur le jeton avant son utilisation généralisée aux fins prévues : sécuriser le réseau, payer des frais et décentraliser la gouvernance.

Ensuite, nous expliquons comment la mise en œuvre du jeton prend en charge le vote et le jalonnement.

### Vote

La Fondation sera chargée de faciliter la bonne gouvernance et de formuler les mécanismes de vote. Le jeton Starknet a été conçu pour permettre à la fois le vote direct et une gamme de mécanismes de délégation.

#### Vote L1

L'implémentation ERC-20 déployée inclut désormais l'utilisation facultative du module de délégation [de Compound](https://docs.compound.finance/v2/governance/). Ce module est largement utilisé pour le vote en chaîne. La raison pour laquelle il est facultatif sur Starknet et désactivé par défaut est une considération de coût. L'activer signifie que chaque transfert des jetons Starknet sur L1 nécessite du gaz supplémentaire nécessaire uniquement dans le but de suivre les changements de pouvoir de vote.

#### Vote non-L1

Les alternatives au vote en chaîne L1 avec le module de délégation de Compound incluent le vote hors chaîne, ainsi que les systèmes de vote en chaîne basés sur Starknet (tels que [SnapshotX](https://snapshot.mirror.xyz/cUOrwdtEs5PvNh0sqYWWxPjt8GdJWn_Qp3cl7E3_8IU)). Ces alternatives, qui réduisent considérablement la consommation de gaz pour les transferts L1, ne nécessitent pas de support explicite du code ERC-20 actuellement déployé, et sont donc supportées de manière inhérente.

Comme mentionné ci-dessus, tous les jetons - verrouillés et déverrouillés - seront utilisables dans le mécanisme de vote de Starknet.

### Jalonnement

Le fonctionnement sans autorisation et résistant à la censure de Starknet nécessite une sélection aléatoire de séquenceurs. La probabilité qu'un nœud soit sélectionné pour séquencer et proposer un bloc est proportionnelle au nombre de jetons Starknet que ce nœud mise. La raison d'être de l'utilisation des jetons Starknet (plutôt que, disons, Ethereum ou Bitcoin) est expliquée dans la proposition de gouvernance [](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), et les détails exacts du jalonnement, du séquençage et de la création de blocs sur Starknet sont en cours de discussion [par la communauté](https://community.starknet.io/t/starknet-decentralized-protocol-introduction/2671), et sont encore à finaliser.

Comme pour le vote, les jetons peuvent être utilisés pour le jalonnement même lorsqu'ils sont verrouillés. Cela contribue à la diversité des opérateurs de Starknet et à la résilience de Starknet.

### Résumé

Le déploiement des contrats Starknet Token sur Ethereum est une autre étape dans la décentralisation de Starknet.

Nous exhortons les développeurs et les utilisateurs à se méfier des arnaques ! Au moment de la publication, aucun jeton n'est négociable, et ce statut de non-échange restera en place jusqu'à nouvel ordre de la Fondation Starknet.

Pour plus de questions, vous pouvez vous rendre sur le canal [Token-discussions](https://discord.gg/qypnmzkhbc) sur le serveur [Starknet Discord](http://starknet.io/discord).