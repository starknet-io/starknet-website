### TL;DR

* Starknet Alpha sera lancé sur Mainnet Ethereum d'ici novembre
* Le temps de construire sur Starknet est maintenant

### Une histoire brève

Nous avons annoncé notre vision pour [Starknet](https://starkware.co/product/starknet/) au début de l'année : apporter une évolutivité massive à Ethereum tout en préservant la sécurité L1, les interactions sans autorisation et la décentralisation.\
Nous avons publié [Starknet Alpha](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95) sur un testnet public en juin. Cette version prenait en charge les contrats intelligents de calcul général entièrement sans autorisation. Depuis, nous l'avons mis à niveau deux fois : d'abord vers l'Alpha 1 — fournissant une messagerie [L1<>L2 et des données en chaîne](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), puis vers l'Alpha 2 — prenant en charge [la composabilité](https://medium.com/starkware/starknet-alpha-2-4aa116f0ecfc).

Starknet Alpha 2 prend désormais en charge les contrats intelligents composables de calcul général dans un état de type Ethereum, avec la possibilité pour les contrats L1 et L2 d'interagir les uns avec les autres. En savoir plus [ici](https://www.cairo-lang.org/docs/hello_starknet/index.html).

### Qu'est-ce que Starknet Alpha sur Mainnet ?

Starknet Alpha sur Mainnet prendra en charge des fonctionnalités similaires à celles actuellement disponibles sur le testnet public Goerli.

#### À quoi s'attendre

Étant donné que Starknet est toujours en cours de développement, nous souhaitons introduire des fonctionnalités de manière progressive et nous assurer que les attentes des développeurs sont satisfaites à chaque étape. Deux aspects particulièrement importants que nous voudrions souligner sont :

* Déploiement de contrats intelligents autorisés : Nous suivrons le manuel de jeu sensé présenté par nos collègues Optimistic Rollup : commencez par le déploiement de contrats autorisés. Le protocole précisant comment demander l'inscription de votre smart contract dans cette première liste blanche sera publié dans les prochaines semaines.
* Aucune garantie de rétrocompatibilité : nous nous attendons à ce que la future transition de Starknet Alpha à Starknet Beta inclue la régénération de l'état. Le réseau commencera à partir du bloc 0, et les applications devront redéployer leurs contrats. En outre, les développeurs et les utilisateurs doivent noter que la version bêta de Starknet attendue pourrait ne pas être rétrocompatible avec Starknet Alpha, par exemple, les développeurs pourraient avoir besoin de modifier leurs contrats. Évidemment, nous essaierons de permettre une transition facile pour les applications, avec un minimum de modifications requises.

#### Fonctionnalités supplémentaires à court terme

Dans le cadre de la transition de Starknet Alpha de testnet à Mainnet, nous allons :

1. Ajoutez des constructeurs aux contrats.
2. Améliorer le cadre de test.
3. Pour les blocs et les transactions, passez de l'utilisation d'un ID à l'utilisation d'un hachage.

Nous prévoyons de poursuivre le déploiement de nouvelles fonctionnalités à un rythme régulier, tout comme nous l'avons fait sur le testnet public. À court terme, nous prévoyons les mises à niveau suivantes :

1. Contrats de compte et contrats de jeton - ouvrant la voie aux applications DeFi pour interagir avec Starknet de la manière dont elles sont familières.
2. Fonctionnalité de contrat améliorée — prise en charge de l'évolutivité des contrats et des événements.
3. Warp : le compilateur Solidity-to-Cairo développé par Nethermind permettra une transition en douceur des contrats intelligents Solidity vers les contrats intelligents Starknet.
4. Signatures Ethereum : la prise en charge native d'ECDSA sur secp256k1 permettra une intégration plus facile avec les portefeuilles existants.
5. Starknet Full Node : un Full Node permettra aux utilisateurs de participer au réseau avec des exigences matérielles équivalentes à celles d'un Ethereum Full Node.

#### Mécanisme de frais

Le mécanisme de frais sera activé dès que les contrats de compte et les contrats de jeton seront ajoutés à Starknet Alpha.

Toutes les transactions soumises à Starknet entraîneront des frais destinés à couvrir les coûts L1 et hors chaîne. Les frais seront initialement facturés en ETH. Le coût d'une seule transaction diminuera à mesure que Starknet augmentera son échelle (comme c'est le cas sur tous les systèmes STARK existants). Lors de l'élaboration des mécanismes de frais initiaux, nous privilégions la simplicité plutôt que la tarification précise des transactions en fonction des ressources qu'elles consomment. Attendez-vous à ce que ce mécanisme soit affiné et amélioré au fil du temps.

Dans le but de faire de Starknet un réseau durable et d'inciter ses opérateurs et développeurs, une partie des revenus générés par les frais sera distribuée aux développeurs d'applications et aux développeurs principaux de Starknet.

#### Sécurité

Le modèle de sécurité de Starknet Alpha sur Mainnet suivra le modèle actuel sur testnet :

* Chaque transition d'état est étayée par une preuve STARK, elle est donc garantie d'être valide.
* Toutes les données d'état seront publiées en chaîne afin que l'état soit entièrement constructible à partir de L1.
* Il y aura un seul séquenceur.
* Le réseau sera évolutif sans délai.

### L'écosystème Starknet se développe

L'ouverture de Starknet au monde a attiré une vague massive de développeurs intéressés par l'apprentissage du Caire et le développement sur Starknet. Ils ont fourni des commentaires inestimables, et ce fut un vrai plaisir de voir des discussions animées sur le Starknet [Discord](https://discord.gg/uJ9HZTUk2Y).

De plus, Starknet est développé non seulement par l'équipe StarkWare mais également par certaines des équipes les plus solides de l'écosystème blockchain :

* Nethermind travaille sur deux projets :\
  \
  1. [Warp](https://github.com/NethermindEth/warp): un compilateur Solidity to Cairo\
     \
  2. [Voyager](https://voyager.online/): un explorateur de blocs Starknet
* Open Zeppelin travaille sur une implémentation [Contrats standard](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts) pour Starknet et a également commencé à travailler sur un environnement de développement : [Nile](https://github.com/martriay/nile).
* ShardLabs travaille sur un plugin [Starknet HardHat](https://github.com/Shard-Labs/starknet-hardhat-plugin) et sur un meilleur framework de test.
* L'équipe d'Erigon travaille à l'extension de son nœud complet Ethereum pour prendre en charge Starknet (nom de code : Fermion). Ils travaillent avec nous sur la conception des mécanismes de base de Starknet.
* Equilibrium travaille sur une implémentation Starknet Full Node dans Rust,
* Services d'audit du Caire : dans les mois à venir, ABDK, ConsenSys Diligence, Peckshield et Trail of Bits effectueront des audits du Caire.
* Audits Starknet : nous avons commencé par auditer les fondations du réseau :

1. CryptoExperts effectuera un audit du vérificateur de solidité du Caire.
2. Une preuve formelle LEAN des spécifications du Caire a été récemment achevée et publiée sous la forme d'un article [](https://arxiv.org/abs/2109.14534) et d'un dépôt GitHub [](https://github.com/starkware-libs/formal-proofs).

Attendez-vous à ce que de nombreuses autres collaborations intéressantes soient publiées dans les mois à venir !

### Les STARK évoluent aujourd'hui

Nous abordons le lancement de Starknet Alpha avec confiance, car StarkEx, notre SaaS de mise à l'échelle autonome, a démontré comment les STARK peuvent faire évoluer massivement les applications Ethereum. Nous avons lancé StarkEx pour [dYdX](https://dydx.exchange/) (contrats perpétuels), [DeversiFi](https://www.deversifi.com/) (spot trading et paiements), ainsi que pour [Immutable](https://www.immutable.com/) et [Sorare](https://sorare.com/) (NFT monnayage et trading). Nous avons vu leurs coûts de gaz/tx réduits de 100X à 200X, à environ 650 gaz/tx dans Validium (données hors chaîne) et 1100 gaz/tx pour un ZK-Rollup.

À ce jour, StarkEx a réglé 80 milliards de dollars de transactions et plus de 27 millions de transactions, éclipsant de loin toute autre solution L2 – et toutes combinées.

### Agir maintenant

Il n'y a jamais eu de meilleur moment pour rejoindre l'écosystème croissant de Starknet en créant soit votre prochaine dApp, soit des outils de développement utiles.

Nous vous invitons à :

1. Rejoignez le [Starknet Discord](https://discord.gg/uJ9HZTUk2Y), où vous pourrez rencontrer et engager la communauté Starknet.
2. [Commencez à apprendre](https://www.cairo-lang.org/docs/hello_starknet/index.html) comment rédiger des contrats intelligents Starknet.
3. [DM us](https://twitter.com/StarkWareLtd) — notre équipe est impatiente de donner vie à vos idées et initiatives.

Mise à jour (novembre 2021) : Starknet Alpha est en direct sur Ethereum Mainnet



### TL;DR

* Starknet Alpha sera lancé sur Mainnet Ethereum d'ici novembre
* Le temps de construire sur Starknet est maintenant

### Une histoire brève

Nous avons annoncé notre vision pour [Starknet](https://starkware.co/product/starknet/) au début de l'année : apporter une évolutivité massive à Ethereum tout en préservant la sécurité L1, les interactions sans autorisation et la décentralisation.\
Nous avons publié [Starknet Alpha](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95) sur un testnet public en juin. Cette version prenait en charge les contrats intelligents de calcul général entièrement sans autorisation. Depuis, nous l'avons mis à niveau deux fois : d'abord vers l'Alpha 1 — fournissant une messagerie [L1<>L2 et des données en chaîne](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), puis vers l'Alpha 2 — prenant en charge [la composabilité](https://medium.com/starkware/starknet-alpha-2-4aa116f0ecfc).

Starknet Alpha 2 prend désormais en charge les contrats intelligents composables de calcul général dans un état de type Ethereum, avec la possibilité pour les contrats L1 et L2 d'interagir les uns avec les autres. En savoir plus [ici](https://www.cairo-lang.org/docs/hello_starknet/index.html).

### Qu'est-ce que Starknet Alpha sur Mainnet ?

Starknet Alpha sur Mainnet prendra en charge des fonctionnalités similaires à celles actuellement disponibles sur le testnet public Goerli.

#### À quoi s'attendre

Étant donné que Starknet est toujours en cours de développement, nous souhaitons introduire des fonctionnalités de manière progressive et nous assurer que les attentes des développeurs sont satisfaites à chaque étape. Deux aspects particulièrement importants que nous voudrions souligner sont :

* Déploiement de contrats intelligents autorisés : Nous suivrons le manuel de jeu sensé présenté par nos collègues Optimistic Rollup : commencez par le déploiement de contrats autorisés. Le protocole précisant comment demander l'inscription de votre smart contract dans cette première liste blanche sera publié dans les prochaines semaines.
* Aucune garantie de rétrocompatibilité : nous nous attendons à ce que la future transition de Starknet Alpha à Starknet Beta inclue la régénération de l'état. Le réseau commencera à partir du bloc 0, et les applications devront redéployer leurs contrats. En outre, les développeurs et les utilisateurs doivent noter que la version bêta de Starknet attendue pourrait ne pas être rétrocompatible avec Starknet Alpha, par exemple, les développeurs pourraient avoir besoin de modifier leurs contrats. Évidemment, nous essaierons de permettre une transition facile pour les applications, avec un minimum de modifications requises.

#### Fonctionnalités supplémentaires à court terme

Dans le cadre de la transition de Starknet Alpha de testnet à Mainnet, nous allons :

1. Ajoutez des constructeurs aux contrats.
2. Améliorer le cadre de test.
3. Pour les blocs et les transactions, passez de l'utilisation d'un ID à l'utilisation d'un hachage.

Nous prévoyons de poursuivre le déploiement de nouvelles fonctionnalités à un rythme régulier, tout comme nous l'avons fait sur le testnet public. À court terme, nous prévoyons les mises à niveau suivantes :

1. Contrats de compte et contrats de jeton - ouvrant la voie aux applications DeFi pour interagir avec Starknet de la manière dont elles sont familières.
2. Fonctionnalité de contrat améliorée — prise en charge de l'évolutivité des contrats et des événements.
3. Warp : le compilateur Solidity-to-Cairo développé par Nethermind permettra une transition en douceur des contrats intelligents Solidity vers les contrats intelligents Starknet.
4. Signatures Ethereum : la prise en charge native d'ECDSA sur secp256k1 permettra une intégration plus facile avec les portefeuilles existants.
5. Starknet Full Node : un Full Node permettra aux utilisateurs de participer au réseau avec des exigences matérielles équivalentes à celles d'un Ethereum Full Node.

#### Mécanisme de frais

Le mécanisme de frais sera activé dès que les contrats de compte et les contrats de jeton seront ajoutés à Starknet Alpha.

Toutes les transactions soumises à Starknet entraîneront des frais destinés à couvrir les coûts L1 et hors chaîne. Les frais seront initialement facturés en ETH. Le coût d'une seule transaction diminuera à mesure que Starknet augmentera son échelle (comme c'est le cas sur tous les systèmes STARK existants). Lors de l'élaboration des mécanismes de frais initiaux, nous privilégions la simplicité plutôt que la tarification précise des transactions en fonction des ressources qu'elles consomment. Attendez-vous à ce que ce mécanisme soit affiné et amélioré au fil du temps.

Dans le but de faire de Starknet un réseau durable et d'inciter ses opérateurs et développeurs, une partie des revenus générés par les frais sera distribuée aux développeurs d'applications et aux développeurs principaux de Starknet.

#### Sécurité

Le modèle de sécurité de Starknet Alpha sur Mainnet suivra le modèle actuel sur testnet :

* Chaque transition d'état est étayée par une preuve STARK, elle est donc garantie d'être valide.
* Toutes les données d'état seront publiées en chaîne afin que l'état soit entièrement constructible à partir de L1.
* Il y aura un seul séquenceur.
* Le réseau sera évolutif sans délai.

### L'écosystème Starknet se développe

L'ouverture de Starknet au monde a attiré une vague massive de développeurs intéressés par l'apprentissage du Caire et le développement sur Starknet. Ils ont fourni des commentaires inestimables, et ce fut un vrai plaisir de voir des discussions animées sur le Starknet [Discord](https://discord.gg/uJ9HZTUk2Y).

De plus, Starknet est développé non seulement par l'équipe StarkWare mais également par certaines des équipes les plus solides de l'écosystème blockchain :

* Nethermind travaille sur deux projets :\
  \
  1. [Warp](https://github.com/NethermindEth/warp): un compilateur Solidity to Cairo\
     \
  2. [Voyager](https://voyager.online/): un explorateur de blocs Starknet
* Open Zeppelin travaille sur une implémentation [Contrats standard](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts) pour Starknet et a également commencé à travailler sur un environnement de développement : [Nile](https://github.com/martriay/nile).
* ShardLabs travaille sur un plugin [Starknet HardHat](https://github.com/Shard-Labs/starknet-hardhat-plugin) et sur un meilleur framework de test.
* L'équipe d'Erigon travaille à l'extension de son nœud complet Ethereum pour prendre en charge Starknet (nom de code : Fermion). Ils travaillent avec nous sur la conception des mécanismes de base de Starknet.
* Equilibrium travaille sur une implémentation Starknet Full Node dans Rust,
* Services d'audit du Caire : dans les mois à venir, ABDK, ConsenSys Diligence, Peckshield et Trail of Bits effectueront des audits du Caire.
* Audits Starknet : nous avons commencé par auditer les fondations du réseau :

1. CryptoExperts effectuera un audit du vérificateur de solidité du Caire.
2. Une preuve formelle LEAN des spécifications du Caire a été récemment achevée et publiée sous la forme d'un article [](https://arxiv.org/abs/2109.14534) et d'un dépôt GitHub [](https://github.com/starkware-libs/formal-proofs).

Attendez-vous à ce que de nombreuses autres collaborations intéressantes soient publiées dans les mois à venir !

### Les STARK évoluent aujourd'hui

Nous abordons le lancement de Starknet Alpha avec confiance, car StarkEx, notre SaaS de mise à l'échelle autonome, a démontré comment les STARK peuvent faire évoluer massivement les applications Ethereum. Nous avons lancé StarkEx pour [dYdX](https://dydx.exchange/) (contrats perpétuels), [DeversiFi](https://www.deversifi.com/) (spot trading et paiements), ainsi que pour [Immutable](https://www.immutable.com/) et [Sorare](https://sorare.com/) (NFT monnayage et trading). Nous avons vu leurs coûts de gaz/tx réduits de 100X à 200X, à environ 650 gaz/tx dans Validium (données hors chaîne) et 1100 gaz/tx pour un ZK-Rollup.

À ce jour, StarkEx a réglé 80 milliards de dollars en transactions et plus de 27 millions de transactions, éclipsant de loin toute autre solution L2 – et toutes combinées.

### Agir maintenant

Il n'y a jamais eu de meilleur moment pour rejoindre l'écosystème croissant de Starknet en créant soit votre prochaine dApp, soit des outils de développement utiles.

Nous vous invitons à :

1. Rejoignez le [Starknet Discord](https://discord.gg/uJ9HZTUk2Y), où vous pourrez rencontrer et engager la communauté Starknet.
2. [Commencez à apprendre](https://www.cairo-lang.org/docs/hello_starknet/index.html) comment rédiger des contrats intelligents Starknet.
3. [DM us](https://twitter.com/StarkWareLtd) — notre équipe est impatiente de donner vie à vos idées et initiatives.

Mise à jour (novembre 2021) : Starknet Alpha est en direct sur Ethereum Mainnet