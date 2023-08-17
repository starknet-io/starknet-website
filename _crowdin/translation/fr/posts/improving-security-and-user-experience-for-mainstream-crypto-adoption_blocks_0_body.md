L'innovation technologique dans la blockchain a prospéré au cours des dernières années — STARKs, SNARKs, EIP-1559, la fusion Ethereum — sont toutes d'énormes réalisations technologiques. Cependant, UX et la conception de l'interface utilisateur n'ont pas réussi à se tenir au courant. Les gens restent coincés sur des phrases de graines de 16 mots, et entrer dans DeFi sans intermédiaire centralisé est encore trop intimidant pour beaucoup . Pour embarquer le prochain milliard d'utilisateurs dans Web3, il est essentiel d'améliorer l'expérience d'intégration de l'utilisateur.

Comme l’a démontré FTX (et Gemini, Celsius et le mont Gox), le maintien de l’autogarde sur ses actifs est d’une importance capitale. Cependant, jusqu'à il y a peu, les portefeuilles auto-détenus ont été pinces et confus pour l'utilisateur moyen. La plupart des gens oublient tous les mois leurs mots de passe Web2. Comment les utilisateurs sont-ils censés garder leur phrase de graine et leurs clés privées en sécurité pour l'éternité?

Bref, c’est un cauchemar de sécurité. Comme nous l’avons vu de nombreuses fois, une mauvaise démarche, initiée par de mauvais acteurs ou par négligence, peut entraîner la perte de millions de dollars.

En tant que premier point de contact pour les nouveaux utilisateurs de cryptomonnaies, les portefeuilles Ethereum doivent être faciles à utiliser, sécurisés et personnalisables pour répondre aux besoins de chaque utilisateur. Cela nécessite que les développeurs intègrent la simplicité des produits financiers Web2 aux fonctionnalités de Web3.

C'est exactement ce que l'abstraction de compte réalise.

L'abstraction de compte améliore la sécurité et la sécurité des produits de portefeuille auto-détenus en supprimant la dépendance des utilisateurs sur la clé privée et en rendant les portefeuilles plus programmables. Grâce à cet UX amélioré, les portefeuilles non-dépositaires peuvent enfin passer à des millions d'utilisateurs de crypto-monnaies traditionnels.

Mais pour bien comprendre l'impact de l'abstraction des comptes, nous devons nous rafraichir sur le fonctionnement des comptes Ethereum.

### Les bases des comptes Ethereum

Il existe deux types de comptes Ethereum :

1. Comptes possédés en externe (EOA)
2. Comptes contractuels (CA)

Nous allons diviser un peu plus loin.

### Comptes détenus en externe

Les comptes détenus à l'extérieur, tels que MetaMask et Coinbase Wallet, sont le type de compte typique pour les utilisateurs d'Ethereum. Chaque EOA se compose d'une clé privée et publique, appelée paire de clés.

Toutes les transactions sont autorisées et signées par des clés privées. Une fois qu'une transaction est signée, l'EVM vérifie que la signature est valide en utilisant l'adresse du compte de l'OEE. La logique codée en dur dans l'EVM signifie que le compte (l'objet contenant vos jetons) et la clé privée (signataire) sont couplés comme un seul.

Perdre votre clé privée signifie perdre vos fonds, ou même contrôler votre compte, pour toujours.

### Comptes contractuels

Pendant ce temps, les comptes contractuels, synonymes d'abstraction de compte, sont des contrats intelligents déployés sur la blockchain Ethereum. Ces contrats sont contrôlés par la logique du code et ne nécessitent pas de clés privées. Contrairement aux EOA, les comptes contractuels ne peuvent pas lancer de transactions. Au lieu de cela, leurs transactions sont déclenchées par les instructions des EOA.

### Pourquoi l'abstraction de compte est importante

L'abstraction du compte implique d'absorber la logique d'autorisation codée en dur des EOA, en transformant chaque compte en un contrat intelligent programmable qui peut être adapté pour répondre aux besoins de tout individu.

Comme l'expliqué le co-fondateur et chef des sciences d'Argent Julien Niset dans un récent[Stark @ Home event](https://www.crowdcast.io/e/7olimxqv), cette logique d'autorisation flexible donne aux développeurs la liberté de jouer avec des fonctionnalités de compte comme…

**Signes matériels :**Utilisation de l'enclave sécurisée d'un iPhone ou d'un Android pour transformer n'importe quel smartphone en portefeuille matériel. À partir de là, les utilisateurs peuvent vérifier les transactions en utilisant des données biométriques comme une empreinte digitale ou Apple Face ID. Nous avons déjà commencé à voir des portefeuilles autonomes comme Braavos[déployer cette fonctionnalité.](https://medium.com/@braavos_starknet_wallet/hardware-signer-the-last-innovation-for-wallet-crypto-everyday-users-7e1974f93944)

**Paymasters :**Permettre aux utilisateurs de payer des frais d'essence sur n'importe quel jeton, ou même d'avoir un mécanisme conçu par une tierce partie de payer pour les transactions.

**Récupération sociale :**En cas de perte ou de compromission d'une clé privée, les utilisateurs peuvent autoriser une nouvelle clé en tant que propriétaire légitime de portefeuille. Cela peut inclure une variété de méthodes de récupération par le biais de contacts fiables, de portefeuilles matériels ou de services tiers. L'idée est de rendre l'accès à votre compte aussi facile que la récupération du mot de passe de votre compte bancaire par courriel.

**Authentification multi-facteurs :**Similaire à la pratique commune Web2 2FA, les utilisateurs peuvent configurer deux (ou plusieurs) méthodes d'authentification pour leurs portefeuilles de cryptomonnaies, lorsqu'une transaction n'est signée qu'une fois qu'un utilisateur confirme son approbation via une seconde option comme l'e-mail ou le SMS. Les utilisateurs peuvent également configurer des limites de transfert quotidiennes ou des listes d'adresses de compte dont le portefeuille est automatiquement bloqué par l'interaction.

**Signatures Quantum Resistant and Gas-Efficient :**Modèle de signature actuel d'Ethereum, ECDSA, est calculativement extensif (lire : des frais de gaz plus élevés) et peut être brisé par des ordinateurs quantiques. Grâce à l'abstraction des signatures, différents contrats de compte utilisent des systèmes de signature plus efficaces et sécurisés par des quantums. StarkNet utilise sa propre courbe propre et conviviale STARK.

Non seulement ces fonctionnalités fournissent aux utilisateurs une plus grande sécurité et une plus grande flexibilité, mais plus important encore, elles engendrent une bien meilleure expérience utilisateur****</strong>.

Énumérés par Vitalik Buterin comme un « rêve de longue date » pour la communauté des développeurs Ethereum, les innovations autour de l'abstraction des comptes, principalement l'EIP-2938 et EIP-3074, tourbillonnent depuis 2020. Cependant, les deux compromis requis en matière de sécurité et de mise en œuvre étaient nécessaires. [EIP-4337](https://github.com/ethereum/EIPs/blob/3fd65b1a782912bfc18cb975c62c55f733c7c96e/EIPS/eip-4337.md), le développement le plus prometteur à ce jour, propose une version d'abstraction de compte sans nécessiter de modifications au protocole Ethereum.

### **Abstraction du compte et Starknet**

Contrairement à Bitcoin et Ethereum qui mettent à jour leurs protocoles actuels pour supporter l'abstraction de compte,[StarkNet](https://starkware.co/starknet/)a implémenté l'abstraction de compte depuis le premier jour. En combinaison avec la capacité d’évolutivité et les capacités de nos preuves STARK, le potentiel d’innovation du portefeuille est illimité. C'est la raison pour laquelle la prochaine génération de portefeuilles autonomes, comme Argent et Braavos, sont en cours de construction sur notre réseau.

L'approche de StarkNet est similaire à l'EIP-4337,[reconnaissant que](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781)l'abstraction complète du compte entraînerait toujours une confusion UX et[pourrait ouvrir la porte](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4337.md#rationale)aux attaques sur des séquenceurs. Il vise plutôt à réaliser à la fois l'abstraction et l'abstraction de la signature en mutualisant certaines des infrastructures requises sur et hors chaîne.

Et bien qu’il y ait encore beaucoup de travail à faire, l’abstraction des comptes gagne en traction au-delà d’un petit cercle de cryptomonnaies. En décembre,[Visa a proposé l'idée](https://www.coindesk.com/tech/2023/01/11/ethereum-upgrade-could-make-it-harder-to-lose-all-your-crypto/)d'utiliser l'abstraction de compte pour mettre en place des paiements automatiques récurrents sur StarkNet. En utilisant un compte déléguable, les utilisateurs peuvent accorder la permission d'initier un paiement à un contrat intelligent pré-approuvé. À partir de là, le contrat intelligent sera programmé pour déduire un montant fixe de paiement sur une journée spécifique, sur une durée déterminée. Bien que Visa n'ait pas encore révélé ses plans pour ses propres services, l'intérêt seul en dit long sur et pourrait prévoir un monde où des plates-formes d'abonnement de grande technologie comme Netflix et Spotify pourraient embrasser la crypto-adoption.

Quant à ce que l'avenir nous réserve, seul le temps nous le dira. Mais une chose est sûre. En rendant les portefeuilles plus faciles et sûrs à utiliser, l'abstraction du compte servira de catalyseur puissant pour les portefeuilles auto-dépositaires de la blockchain pour passer à des millions d'utilisateurs de crypto-monnaies traditionnels. Nous continuerons à construire entre-temps.