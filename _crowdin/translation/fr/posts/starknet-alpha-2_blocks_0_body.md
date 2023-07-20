### TL;DR

* Starknet prend désormais en charge la composabilité, la principale caractéristique définissant la phase Constellations de Starknet.
* Nous publions un cadre de test pour Starknet - les développeurs peuvent désormais tester leurs contrats localement et efficacement.
* Cette version inclut plusieurs améliorations de performances notables, telles que la prise en charge des essais Merkle-Patricia et une fonction intégrée pour les opérations au niveau du bit.
* Avant l'écosystème :

1. Contrats standardisés : OpenZeppelin développera des contrats standardisés pour Starknet, comme ils l'ont fait pour Ethereum !
2. EVM->Cairo Compiler : l'équipe Warp @ Nethermind a démontré la compilation du code ERC-20 Solidity pour les contrats Starknet

### Arrière-plan

Starknet est un Validity-Rollup décentralisé sans autorisation (alias un "ZK-Rollup"). Nous avons annoncé sa feuille de route [](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880) en début d'année. Le [Alpha](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), actuellement exécuté sur un testnet public Ethereum, prend déjà en charge le déploiement sans autorisation de contrats intelligents mettant en œuvre n'importe quelle logique métier, avec la messagerie L1<>L2 et les données en chaîne. De plus, il permet à tout utilisateur d'envoyer des transactions au réseau sans autorisation, à la manière d'Ethereum.

Cette version : Starknet Alpha 2, inclut la fonctionnalité principale qui nous permet de passer des planètes aux constellations : la composabilité entre les contrats intelligents déployés.

### Caractéristiques

Starknet Alpha 2 introduit les fonctionnalités suivantes :

* Composabilité : Starknet Alpha prend désormais en charge l'interaction entre les contrats intelligents - en avance sur le calendrier ! La beauté de cette mise à niveau est que les développeurs peuvent s'attendre à presque la même expérience qu'Ethereum ; Les appels sont synchrones et peuvent être utilisés comme appels de fonction. Nous attendons avec impatience les nouvelles applications qui bénéficieront à la fois d'une échelle de calcul illimitée et d'une composabilité contractuelle, comme l'a lancé Starknet. Pour comprendre comment utiliser cette fonctionnalité, vous pouvez commencer par suivre ce [tutoriel](https://www.cairo-lang.org/docs/hello_starknet/calling_contracts.html). Nous aimerions entendre vos commentaires et voir ce que vous construisez sur le discord [Starknet](https://discord.gg/uJ9HZTUk2Y).
* Cadre de test local : vous avez demandé, et nous avons livré — un [cadre de test](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/starknet/testing). Cela permettra aux développeurs d'accélérer leur développement dApp en testant leurs déploiements et interactions de contrat Starknet localement - sans aucune dépendance externe. Cette version inclut uniquement l'interaction L2, les prochaines versions étendront les fonctionnalités et la facilité d'utilisation. Consultez le didacticiel [ici](https://www.cairo-lang.org/docs/hello_starknet/unit_tests.html), et nous serions ravis d'entendre vos commentaires sur cette fonctionnalité.
* Amélioration des performances:

Patricia Trees : nous avons amélioré la conception de Starknet pour prendre en charge des débits plus élevés et un temps de génération de preuve plus court en passant à l'engagement d'état Merkle-Patricia Tree ([documentation](https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/cairo/common/patricia_utils.py)). Ce changement permet la création de blocs beaucoup plus grands, réduisant ainsi le coût par transaction. Le passage à un engagement étatique plus sophistiqué a été rendu possible par Cairo, le langage ZKP, un composant central du système d'exploitation Starknet.

Opérations au niveau du bit : nous avons ajouté une fonction intégrée [](https://www.cairo-lang.org/docs/how_cairo_works/builtins.html) pour prendre en charge des opérations au niveau du bit beaucoup plus efficaces dans les contrats Starknet ([documentation](https://www.cairo-lang.org/docs/reference/common_library.html#common-library-bitwise)).

* Goerli : Starknet passe de Ropsten à [Goerli](https://goerli.etherscan.io/address/0xee02F29aE9A4988aE064940bF11954d6eafE26Ac)! Enfin, nous avons libéré notre système des caprices des dieux de Ropsten. Alpha 2 fonctionnera désormais dans un environnement de développement plus stable.

### Écosystème

L'écosystème Starknet ne cesse de croître et nous sommes heureux de partager les dernières nouvelles :

* Contrats standardisés : nous sommes honorés de travailler avec OpenZeppelin sur la bibliothèque de contrats standard de Starknet. Leur travail canonique sur les contrats standardisés d'Ethereum nous sert tous au quotidien, et nous sommes convaincus qu'ils auront autant d'impact ici.
* Compilateur EVM>du Caire : l'équipe Warp de Nethermind [a démontré](https://medium.com/nethermind-eth/warp-your-way-to-starknet-ddd6856875e0) la transpilation d'un contrat ERC-20 du bytecode EVM vers un contrat Starknet et son déploiement sur Starknet. Cet effort progresse rapidement et notre prochain objectif est la transpilation de contrats intelligents arbitraires de Yul au Caire.
* Maker-on-Starknet : une proposition [](https://forum.makerdao.com/t/mip39c2-sp19-adding-the-starknet-engineering-core-unit-sne-001/9745) a été soumise au Maker DAO pour implémenter le protocole Maker sur Starknet. La première phase propose un pont DAI d'Ethereum à Starknet avec la frappe DAI sur Starknet à suivre.
* Services d'audit Starknet/Cairo : nous engageons plusieurs cabinets d'audit pour fournir des services d'audit des contrats intelligents Starknet et des programmes du Caire.

### Réseau principal au coin de la rue

Nous nous préparons pour le lancement de Starknet Alpha Mainnet, en commençant progressivement par un ensemble d'applications sur liste blanche. Plusieurs projets sont en cours et d'autres sont activement ajoutés chaque jour. Pour rejoindre la fête, vous êtes invités à nous contacter via [discord](https://discord.gg/uJ9HZTUk2Y).

Mise à jour (novembre 2021) : Starknet Alpha est en direct sur Ethereum Mainnet