### TL;DR

* Le jeton StarkNet (STRK) est maintenant déployé sur le réseau principal Ethereum
* **Méfiez-vous des arnaques !**Les jetons StarkNet ne sont pas proposés à la vente
* Il faudra du temps à la Fondation pour déterminer le mécanisme de distribution de ses jetons
* Les jetons détenus par les actionnaires, les employés et les développeurs de logiciels partenaires indépendants sont verrouillés pour une période de quatre ans. avec une version graduelle commençant après un an
* Le jeton favorisera la décentralisation de StarkNet grâce à son utilisation pour voter, cocher et payer des frais

Aujourd'hui,[StarkNet](https://starknet.io/)fait un nouveau pas vers la décentralisation. Le jeton StarkNet est maintenant[sur Ethereum](https://etherscan.io/address/0xca14007eff0db1f8135f4c25b34de49ab0d42766). Recouvrement rapide : STRK sera utilisé comme jeton de mise en jeu pour la participation aux mécanismes de consensus de StarkNet, comme jeton de gouvernance, et pour le paiement des frais de transaction. La raison d'être de chacun de ces utilitaires est présentée dans[notre proposition de décentralisation](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), dans la section intitulée « À quoi serviront les jetons ? »

***Méfiez-vous des arnaques :**lors de l'écriture il n'y a aucun moyen d'acheter des Tokens StarkNet ; cette période de non-vente restera en place jusqu'à nouvel ordre par la[Fondation StarkNet](https://twitter.com/StarkNetFndn); suivre la communication officielle de la Fondation StarkNet pour connaître les mises à jour du statut de STRK. Vous pouvez rapporter des escroqueries et vérifier d'autres rapports d'escroqueries dans le canal[de rapport d'arnaques](https://discord.gg/qypnmzkhbc)sur le serveur[StarkNet Discord](http://starknet.io/discord).*

Ce message explique le processus d'allocation des jetons, et comment les contrats de jetons déployés servent deux des trois utilitaires conçus du jeton, à savoir le vote et le mise en jeu. Le troisième utilitaire — le paiement des frais StarkNet — sera discuté ultérieurement.

### Planification du processus d'allocation des jetons

Nous avons précédemment proposé un plan[](https://medium.com/starkware/part-3-starknet-token-design-5cc17af066c6)pour l'allocation initiale des jetons. Les jetons attribués aux actionnaires, aux employés et aux développeurs de logiciels indépendants sont verrouillés pendant quatre ans, avec un calendrier de publication progressif commençant après un an. Les jetons verrouillés peuvent être utilisés pour voter et miser, mais ne peuvent pas être transférés ou échangés. Certains des jetons sont verrouillés via un contrat intelligent dédié sur Ethereum, tandis que d'autres jetons sont verrouillés via des gardiens.

Souvent, 50,1% des jetons StarkNet existants sont alloués à la Fondation StarkNet, pour atteindre ses[objectifs](https://medium.com/@StarkNet_Foundation/welcome-to-the-world-starknet-foundation-7bd55d5dbc59)(cf.[Le post de StarkWare](https://medium.com/starkware/introducing-the-starknet-foundation-bd4b4379fbb)). Ces jetons ne sont pas verrouillés. Cependant, la Fondation aura besoin de temps pour formuler le mécanisme exact pour allouer davantage ces jetons et partagera ses plans en temps voulu.

#### Pourquoi se verrouiller ?

Verrouiller les jetons pour la période susmentionnée garantit que les contributeurs actuels s'alignent sur les incitations à long terme de StarkNet. Il décourage également la spéculation sur le jeton de l'utilisation généralisée pour ses objectifs : sécuriser le réseau, payer les frais et décentraliser la gouvernance.

Ensuite, nous expliquons comment la mise en œuvre des jetons soutient le vote et l'enjeu.

### Vote

La Fondation sera chargée de faciliter la bonne gouvernance et de formuler les mécanismes de vote. Le Token StarkNet a été conçu pour permettre à la fois le vote direct et un éventail de mécanismes de délégation.

#### Vote L1

L'implémentation ERC-20 déployée inclut maintenant**l'utilisation facultative**du module de délégation[de Compound](https://docs.compound.finance/v2/governance/). Ce module est largement utilisé pour le vote en chaîne. La raison pour laquelle il est optionnel sur StarkNet, et désactivé par défaut, est la prise en compte des coûts. L'activer signifie que chaque transfert des jetons StarkNet sur L1 nécessite du gaz supplémentaire uniquement dans le but de suivre les transferts de pouvoir de vote.

#### Non-L1 voting

Les alternatives au vote sur la chaîne L1 avec le module de délégation de Compound incluent le vote hors chaîne, ainsi que les systèmes de vote sur chaîne basés sur StarkNet (comme[SnapshotX](https://snapshot.mirror.xyz/cUOrwdtEs5PvNh0sqYWWxPjt8GdJWn_Qp3cl7E3_8IU)). Ces alternatives, qui réduisent considérablement la consommation de gaz pour les transferts de L1, ne nécessitent pas un support explicite de la part du code ERC-20 actuellement déployé, et sont donc intrinsèquement supportées.

Comme mentionné ci-dessus, tous les jetons — verrouillés et déverrouillés — seront utilisables dans le mécanisme de vote de StarkNet.

### Staking

L’opération sans autorisation et sans censure de StarkNet nécessite un choix aléatoire de séquenceurs. La probabilité qu'un noeud soit sélectionné pour séquencer et proposer un bloc est proportionnelle au nombre de jetons StarkNet mis en jeu. La raison d'utiliser les jetons StarkNet (plutôt que, disons, Ethereum ou Bitcoin) est expliquée dans la[proposition de gouvernance](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), et les détails exacts de la mise en jeu, le séquençage et la création de blocs sur StarkNet sont en cours de[discussion par la communauté](https://community.starknet.io/t/starknet-decentralized-protocol-introduction/2671), et doivent encore être finalisés.

Comme pour les votes, les jetons peuvent être utilisés pour le staking même quand ils sont verrouillés. Cela contribue à la diversité des opérateurs StarkNet et à la résilience de StarkNet.

### Summary

Le déploiement des contrats StarkNet Token sur Ethereum est une autre étape de la décentralisation de StarkNet.

Nous encourageons les développeurs et les utilisateurs à se méfier des arnaques ! Au moment de la publication, aucun jeton n'est échangeable, et ce statut de non-échange restera en place jusqu'à nouvel ordre de la Fondation StarkNet.

Pour plus de questions, vous pouvez aller sur le canal[Token-discussions](https://discord.gg/qypnmzkhbc)sur le serveur[StarkNet Discord](http://starknet.io/discord).