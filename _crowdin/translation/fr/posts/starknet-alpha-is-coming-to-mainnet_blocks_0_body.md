### TL;DR

* *StarkNet Alpha est lancé sur le réseau Ethereum d'ici novembre*
* Le temps de construire sur StarkNet est maintenant

### Une courte histoire

Nous avons annoncé notre vision de[StarkNet](https://starkware.co/product/starknet/)au début de l'année : apporter une évolutivité massive à Ethereum tout en préservant la sécurité L1, les interactions sans permission, et la décentralisation.\
Nous avons libéré**[StarkNet Alpha](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)**sur un réseau de test public en juin. Cette version supporte entièrement les contrats intelligents de calcul généraux sans permission. Nous l'avons mise à jour deux fois : le premier vers l'**Alpha 1**— fournissant[L1<>L2 et les données sur la chaîne](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), puis à**Alpha 2**— supportant[composabilité](https://medium.com/starkware/starknet-alpha-2-4aa116f0ecfc).

StarkNet Alpha 2 prend désormais en charge les contrats intelligents composables de calcul général dans un état de type Ethereum. avec la capacité pour les contrats L1 et L2 d'interagir entre eux. En savoir plus[ici](https://www.cairo-lang.org/docs/hello_starknet/index.html).

### Qu'est-ce que StarkNet Alpha sur le réseau principal ?

StarkNet Alpha sur le réseau principal prendra en charge des fonctionnalités similaires à celles actuellement disponibles sur le réseau public de test de Goeri.

#### **À quoi s'attendre**

Étant donné que StarkNet est encore en cours de développement, nous voulons introduire des capacités de manière progressive et nous assurer que les attentes des développeurs sont satisfaites à chaque étape. Deux aspects particulièrement importants que nous aimerions souligner sont :

* **Déploiement de contrats intelligents autorisés**: Nous suivrons le livre de lecture raisonnable introduit par nos collègues optimistes Rollup : commencer par*le déploiement autorisé*du contrat. Le protocole précisant comment demander l'inclusion de votre contrat intelligent dans cette liste blanche initiale sera publié dans les prochaines semaines.
* **Aucune garantie de compatibilité ascendante**: nous attendons que le passage futur de StarkNet Alpha à StarkNet Beta inclue la regénésie de l'état. Le réseau commencera à partir du bloc 0, et les applications devront redéployer leurs contrats. De plus, les développeurs et les utilisateurs devraient noter que la Beta de StarkNet pourrait ne pas être rétrocompatible avec StarkNet Alpha, e. . Les développeurs pourraient avoir besoin de modifier leurs contrats. Évidemment, nous allons essayer de permettre une transition facile pour les applications, avec un minimum de changements nécessaires.

#### Fonctionnalités supplémentaires à court terme

Dans le cadre de la transition de StarkNet Alpha de testnet vers le réseau principal, nous allons :

1. Ajouter des constructeurs aux contrats.
2. Améliorer le cadre de test.
3. Pour les blocs et les transactions, déplacez de l'utilisation d'un ID à l'utilisation d'un hachage.

Nous prévoyons de poursuivre le déploiement de nouvelles fonctionnalités dans une cadence régulière, comme nous l'avons fait sur le réseau de test public. À court terme, nous planifions les mises à jour suivantes :

1. Contrats de comptes et Contrats de jetons — ouvrant la voie à des applications DeFi pour interagir avec StarkNet de la manière dont elles sont familières.
2. Amélioration de la fonctionnalité du contrat – soutien à la mise à niveau du contrat et aux événements.
3. Warp : le compilateur Solidity-to-Cairo développé par Nethermind permettra une transition harmonieuse des contrats intelligents Solidity vers les contrats intelligents StarkNet.
4. Signatures Ethereum : le support natif de l'ECDSA sur secp256k1 facilitera l'intégration avec les portefeuilles existants.
5. StarkNet Full Node: un Full Node permettra aux utilisateurs de participer au réseau avec des exigences matérielles égales à celles d'un Full Node Ethereum.

#### Mécanisme de frais

Le mécanisme des frais sera activé dès que les contrats de compte et les contrats de jetons seront ajoutés à StarkNet Alpha.

Toutes les transactions soumises à StarkNet devront être payées pour couvrir les coûts L1 et hors chaîne. Les frais seront initialement facturés en ETH. Le coût d'une seule transaction diminuera à mesure que StarkNet augmentera son échelle (comme c'est le cas pour tous les systèmes STARK existants). Lorsque nous fabriquons les mécanismes de frais initiaux, nous privilégions la simplicité plutôt que de fixer des prix précis selon les ressources qu'ils consomment. Attendez-vous à ce que ce mécanisme soit affiné et amélioré au fil du temps.

En vue de faire de StarkNet un réseau durable et d'encourager ses opérateurs et développeurs, une partie des revenus perçus à partir des frais sera distribuée aux développeurs d'applications et aux développeurs de base de StarkNet.

#### Sécurité

Le modèle de sécurité de StarkNet Alpha sur le réseau principal suivra le modèle actuel sur testnet :

* Chaque transition étatique est appuyée par une preuve STARK, elle est donc assurée d'être valide.
* Toutes les données d'état seront publiées sur la chaîne de sorte que l'état sera entièrement constructible à partir de L1.
* Il y aura un seul séquenceur.
* Le réseau sera mis à jour sans aucun retard de temps.

### L’écosystème StarkNet est en pleine croissance

L'ouverture de StarkNet dans le monde a attiré une vague massive de développeurs intéressés par l'apprentissage du Caire et le développement sur StarkNet. Ils ont fourni des retours inestimables, et c'était un vrai plaisir de voir des discussions animées sur StarkNet[Discord](https://discord.gg/uJ9HZTUk2Y).

De plus, StarkNet est en cours de développement non seulement par l'équipe de StarkWare, mais aussi par certaines des équipes les plus fortes de l'écosystème blockchain :

* Nethermind travaille sur deux projets :

1. **[Warp](https://github.com/NethermindEth/warp)**: une Solidité au compilateur du Caire

2. **[Voyager](https://voyager.online/)**: un explorateur de blocs StarkNet

* Open Zeppelin travaille sur une implémentation de[Contrats Standard](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)pour StarkNet et a également commencé à travailler sur l'environnement du développeur :[Nile](https://github.com/martriay/nile).
* ShardLabs travaille sur un[plugin StarkNet HardHat](https://github.com/Shard-Labs/starknet-hardhat-plugin)et sur un meilleur framework de test.
* L'équipe d'Erigon travaille actuellement à l'extension de leur Full Node Ethereum pour prendre en charge StarkNet (nom de code : Fermion). Ils travaillent avec nous à la conception de mécanismes de base de StarkNet.
* Equilibrium travaille sur une implémentation de StarkNet Full Node en Rust,
* Services de vérification du Caire : Au cours des prochains mois, ABDK, ConsenSys Diligence, Peckshield et Trail of Bits mèneront des audits du Caire.
* Audits StarkNet : nous avons commencé avec l’audit des fondations du réseau :

1. **CryptoExperts**effectuera un audit du Vérificateur de Solidité du Caire.
2. Une preuve officielle**LEAN**des spécifications du Caire a été récemment complétée et publiée sous forme de[papier](https://arxiv.org/abs/2109.14534)et de dépôt[GitHub](https://github.com/starkware-libs/formal-proofs).

Attendez-vous à de nombreuses autres collaborations intéressantes qui seront publiées dans les mois à venir !

### STARKs sont en cours d'échelle aujourd'hui

Nous abordons le lancement de StarkNet Alpha en toute confiance, puisque StarkEx, notre SaaS autonome de mise à l'échelle autonome, a démontré comment les STARK peuvent massivement mettre à l'échelle les applications Ethereum. Nous avons lancé StarkEx pour[dYdX](https://dydx.exchange/)(contrats perpétuels),[DeversiFi](https://www.deversifi.com/)(trading spot et paiements), ainsi que pour[Immutable](https://www.immutable.com/)et[Sorare](https://sorare.com/)(NFT minting and trading). Nous avons vu leurs coûts en gaz/tx réduits de 100X–200X, à environ 650 gaz/tx en Validium (données hors chaîne) et 1100 gaz/tx pour un ZK-Rollup.

À ce jour, StarkEx a réglé des transactions de 80 milliards de dollars et plus de 27 millions de transactions, éclipsant de loin toute autre solution L2 — et toutes combinées.

### Agir maintenant

Il n'y a jamais eu de meilleur moment pour rejoindre l'écosystème StarkNet en pleine croissance en construisant votre prochain dApp ou des outils de développement utiles.

Nous vous invitons à :

1. Rejoignez le[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y), où vous pouvez rencontrer et engager la communauté StarkNet.
2. [Commencez à apprendre](https://www.cairo-lang.org/docs/hello_starknet/index.html)à écrire des contrats intelligents StarkNet.
3. [DM nous](https://twitter.com/StarkWareLtd)— notre équipe est désireuse d'aider vos idées et vos initiatives à se concrétiser.

**Mise à jour (Nov. 2021):**StarkNet Alpha est en direct sur le réseau principal Ethereum