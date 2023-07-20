L'innovation technologique dans la blockchain a prospéré au cours des dernières années - STARKs, SNARKs, EIP-1559, Ethereum Merge - sont toutes d'énormes réalisations technologiques. Cependant, la conception UX et UI n'a pas suivi le rythme. Les gens sont toujours bloqués sur des phrases de départ de 16 mots, et entrer dans DeFi sans intermédiaire centralisé est encore trop intimidant pour beaucoup. Pour intégrer le prochain milliard d'utilisateurs dans Web3, l'amélioration de l'expérience d'intégration des utilisateurs est essentielle.

Comme FTX l'a démontré (et Gemini, Celsius et Mt. Gox), conserver la garde de ses actifs est d'une importance cruciale. Cependant, jusqu'à récemment, les portefeuilles auto-dépositaires étaient maladroits et déroutants pour l'utilisateur moyen. La plupart des gens oublient leurs mots de passe Web2 tous les mois ; comment les utilisateurs sont-ils censés conserver leur phrase de départ et leurs clés privées en toute sécurité pour l'éternité ?

Autrement dit, c'est un cauchemar de sécurité. Comme nous l'avons vu d'innombrables fois, un faux mouvement, qu'il soit initié par de mauvais acteurs ou par négligence, peut entraîner la perte de millions de dollars.

En tant que premier point de contact pour les nouveaux utilisateurs de crypto, les portefeuilles Ethereum doivent être faciles à utiliser, sécurisés et personnalisables pour répondre aux besoins de chaque utilisateur. Cela oblige les développeurs à intégrer la simplicité des produits financiers Web2 aux fonctionnalités de Web3.

C'est exactement ce que réalise l'abstraction de compte.

L'abstraction de compte améliore la sûreté et la sécurité des produits de portefeuille auto-dépositaires en supprimant la dépendance des utilisateurs à la clé privée et en rendant les portefeuilles plus programmables. Avec cette UX améliorée, les portefeuilles non dépositaires peuvent enfin s'adapter à des millions d'utilisateurs de crypto grand public.

Mais pour bien comprendre l'impact de l'abstraction de compte, nous devons nous rafraîchir sur le fonctionnement des comptes Ethereum.

### Les bases des comptes Ethereum

Il existe deux types de comptes Ethereum :

1. Comptes détenus en externe (EOA)
2. Comptes contractuels (CA)

Décomposons chacun un peu plus loin.

### Comptes détenus en externe

Les comptes externes, comme MetaMask et Coinbase Wallet, sont le type de compte typique pour les utilisateurs d'Ethereum. Chaque EOA se compose d'une clé privée et d'une clé publique, appelée paire de clés.

Toutes les transactions sont autorisées et signées par des clés privées. Une fois qu'une transaction est signée, l'EVM vérifie que la signature est valide en utilisant l'adresse du compte de l'EOA. La logique codée en dur dans l'EVM signifie que le compte (l'objet contenant vos jetons) et la clé privée (le signataire) sont couplés en un seul.

Perdre votre clé privée signifie perdre vos fonds, ou même le contrôle de votre compte, pour toujours.

### Comptes contractuels

Pendant ce temps, les comptes contractuels, synonymes d'abstraction de compte, sont des contrats intelligents déployés sur la blockchain Ethereum. Ces contrats sont contrôlés par une logique de code et ne nécessitent pas de clés privées. Contrairement aux EOA, les comptes contractuels ne peuvent pas initier de transactions. Au lieu de cela, leurs transactions sont déclenchées par les instructions des EOA.

### Pourquoi l'abstraction de compte est importante

L'abstraction de compte implique d'abstraire la logique d'autorisation codée en dur des EOA, transformant chaque compte en un contrat intelligent programmable qui peut être adapté pour répondre aux besoins de tout individu.

Comme l'a expliqué le co-fondateur et directeur scientifique d'Argent Julien Niset lors d'un récent événement[Stark @ Home](https://www.crowdcast.io/e/7olimxqv), cette logique d'autorisation flexible donne aux développeurs la liberté de jouer avec des fonctionnalités de compte telles que…

**Signataires matériels :**Utilisation de l'enclave sécurisée d'un iPhone ou d'Android pour transformer n'importe quel smartphone en portefeuille matériel. À partir de là, les utilisateurs peuvent vérifier les transactions à l'aide de données biométriques comme une empreinte digitale ou Apple Face ID. Nous avons déjà commencé à voir des portefeuilles auto-dépositaires comme Braavos[déployer cette fonctionnalité.](https://medium.com/@braavos_starknet_wallet/hardware-signer-the-last-innovation-for-wallet-crypto-everyday-users-7e1974f93944)

**Paymasters :**Autorisez les utilisateurs à payer les frais de gaz dans n'importe quel jeton, ou même à faire payer les transactions par un mécanisme conçu par un tiers.

**Récupération sociale :**En cas de perte ou de compromission d'une clé privée, les utilisateurs peuvent autoriser une nouvelle clé en tant que propriétaire légitime du portefeuille. Cela peut inclure une variété de méthodes de récupération via des contacts de confiance, des portefeuilles matériels ou des services tiers. L'idée est de rendre la récupération de l'accès à votre compte aussi simple que la récupération du mot de passe de votre compte bancaire par e-mail.

**Authentification multifactorielle :**Semblable aux pratiques Web2 2FA courantes, les utilisateurs peuvent configurer deux méthodes d'authentification (ou plus) pour leurs portefeuilles cryptographiques, où une transaction n'est signée qu'une fois qu'un utilisateur confirme l'approbation via une deuxième option comme un e-mail ou un SMS. Les utilisateurs peuvent également configurer des limites de transfert quotidiennes ou des listes d'adresses de compte dont le portefeuille est automatiquement bloqué.

**Signatures quantiques résistantes et économes en gaz :**Le schéma de signature actuel d'Ethereum, ECDSA, est complexe en termes de calcul (lire : frais de gaz plus élevés) et peut être cassé par des ordinateurs quantiques. Grâce à l'abstraction de signature, différents contrats de compte utilisent des schémas de signature plus efficaces et quantiques. StarkNet utilise sa propre courbe propriétaire STARK.

Non seulement ces fonctionnalités offrent aux utilisateurs une plus grande sécurité et plus de flexibilité, mais plus important encore, elles se traduisent par une**meilleure expérience**.

Répertoriées par Vitalik Buterin comme un "rêve de longue date" pour la communauté des développeurs Ethereum, les innovations autour de l'abstraction de compte, principalement EIP-2938 et EIP-3074, tourbillonnent depuis 2020. Cependant, les deux nécessitaient des compromis autour de la sécurité et de la mise en œuvre. [EIP-4337](https://github.com/ethereum/EIPs/blob/3fd65b1a782912bfc18cb975c62c55f733c7c96e/EIPS/eip-4337.md), le développement le plus prometteur à ce jour, propose une version d'abstraction de compte sans nécessiter de modifications du protocole Ethereum.

### **Abstraction de compte et Starknet**

Contrairement à Bitcoin et Ethereum qui modernisent leurs protocoles actuels pour prendre en charge l'abstraction de compte,[StarkNet](https://starkware.co/starknet/)a mis en œuvre l'abstraction de compte depuis le premier jour. Associé à l'évolutivité et aux capacités de nos preuves STARK, le potentiel d'innovation des portefeuilles est illimité. C'est pourquoi la prochaine génération de portefeuilles auto-dépositaires, comme Argent et Braavos, est actuellement en cours de construction au-dessus de notre réseau.

L'approche de StarkNet est similaire à EIP-4337,[reconnaissant que](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781)l'abstraction complète du compte entraînerait toujours une UX confuse et[pourrait ouvrir la porte](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4337.md#rationale)à des attaques sur les séquenceurs. Il vise plutôt à réaliser à la fois l'abstraction de signature et l'abstraction de paiement en mutualisant une partie de l'infrastructure requise sur et hors chaîne.

Et bien qu'il reste encore beaucoup de travail à faire, l'abstraction de compte gagne du terrain au-delà d'un petit cercle de natifs de la cryptographie. En décembre,[Visa a proposé l'idée](https://www.coindesk.com/tech/2023/01/11/ethereum-upgrade-could-make-it-harder-to-lose-all-your-crypto/)d'utiliser l'abstraction de compte pour mettre en place des paiements récurrents automatiques sur StarkNet. À l'aide d'un compte délégable, les utilisateurs peuvent accorder l'autorisation d'initier un paiement à un contrat intelligent pré-approuvé. À partir de là, le contrat intelligent sera programmé pour déduire un montant de paiement défini un jour spécifique, sur une durée définie. Bien que Visa n'ait pas encore révélé ses plans pour ses propres services, l'intérêt à lui seul en dit long et peut préfigurer un monde où les plates-formes d'abonnement de grande technologie comme Netflix et Spotify pourraient adopter la crypto-adoption.

Quant à ce que l'avenir nous réserve, seul le temps nous le dira. Mais une chose est certaine. En rendant les portefeuilles plus faciles et sûrs à utiliser, l'abstraction de compte servira de puissant catalyseur pour que les portefeuilles de blockchain auto-dépositaires s'adaptent à des millions d'utilisateurs de crypto grand public. Nous continuerons à construire en attendant.