### TL;DR

* StarkNet prend désormais en charge la composabilité, la caractéristique principale qui définit la phase de Constellations de StarkNet.
* Nous publions un framework de test pour StarkNet — les développeurs peuvent maintenant tester leurs contrats localement et efficacement.
* Cette version comprend plusieurs améliorations notables des performances, telles que le support de Merkle-Patricia Tries et un ensemble intégré pour les opérations de type bitwise .
* Avant-devant écosystème:

1. **Contrats standardisés**: OpenZeppelin va développer des contrats standardisés pour StarkNet, comme ils l'ont fait pour Ethereum!
2. **EVM->Compilateur Cairo**: l'équipe Warp @ Nethermind a démontré une compilation de code ERC-20 Solidity aux contrats StarkNet

### Arrière-plan

StarkNet est un Validity-Rollup décentralisé sans permission (aka un « ZK-Rollup »). Nous avons annoncé sa[feuille de route](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)au début de l'année. L'[Alpha](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), fonctionne actuellement sur un testnet Ethereum public, supporte déjà le déploiement sans autorisation de contrats intelligents implémentant toute logique métier, avec la messagerie L1<>L2 et les données en chaîne. De plus, il permet à tout utilisateur d'envoyer des transactions sur le réseau sans autorisation, de style Ethereum.

Cette version: StarkNet Alpha 2, inclut la fonctionnalité principale qui nous permet de passer de Planètes à Constellations : la composabilité entre les contrats intelligents déployés.

### Fonctionnalités

StarkNet Alpha 2 introduit les fonctionnalités suivantes :

* **Composabilité :**StarkNet Alpha prend désormais en charge l'interaction entre les contrats intelligents - en avance sur le planning ! La beauté de cette mise à jour est que les développeurs peuvent s'attendre à presque la même expérience que Ethereum; les appels sont synchrones et peuvent être utilisés comme appels de fonctions. Nous attendons avec impatience les nouvelles applications qui bénéficieront à la fois d'une échelle de calcul illimitée et d'une capacité de composabilité contractuelle, telle que libérée par StarkNet. Pour comprendre comment utiliser cette fonctionnalité, vous pouvez commencer par suivre ce[tutoriel](https://www.cairo-lang.org/docs/hello_starknet/calling_contracts.html). Nous aimerions entendre vos commentaires et voir ce que vous construisez sur la discorde[StarkNet](https://discord.gg/uJ9HZTUk2Y).
* **Cadre de test local :**que vous avez demandé, et nous avons livré — un[meilleur framework de test](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/starknet/testing). Cela permettra aux développeurs d'accélérer leur développement dApp en testant localement leurs déploiements de contrats StarkNet et leurs interactions — sans dépendances externes. Cette version ne comprend que l'interaction L2, les prochaines versions étendront la fonctionnalité et la facilité d'utilisation. Consultez le tutoriel[ici](https://www.cairo-lang.org/docs/hello_starknet/unit_tests.html), et nous aimerions entendre vos commentaires sur cette fonctionnalité.
* **Améliorations de performance :**

**Arbres de Patricia :**nous avons amélioré le design de StarkNet pour supporter des débits plus élevés et raccourcir le temps de génération de la preuve en passant à l'engagement de Merkle-Patricia dans l'état de l'arbre ([documentation](https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/cairo/common/patricia_utils.py)). Ce changement permet la création de blocs beaucoup plus importants, réduisant ainsi le coût par transaction. Le passage à un engagement étatique plus sophistiqué a été activé par le Caire, le langage ZKP — un composant essentiel du système d'exploitation StarkNet.

**Opérations Bitwise :**nous avons ajouté un[intégré](https://www.cairo-lang.org/docs/how_cairo_works/builtins.html)pour supporter des opérations beaucoup plus efficaces dans les contrats StarkNet ([documentation](https://www.cairo-lang.org/docs/reference/common_library.html#common-library-bitwise)).

* **Goerli :**StarkNet passe de Ropsten à[Goerli](https://goerli.etherscan.io/address/0xee02F29aE9A4988aE064940bF11954d6eafE26Ac)! Nous avons enfin libéré notre système des caprices des dieux du Ropsten. L'Alpha 2 va maintenant fonctionner sur un environnement de développement plus stable.

### Écosystème

L'écosystème StarkNet ne cesse de croître, et nous sommes heureux de partager les dernières nouvelles:

* **Contrats standardisés**: nous sommes honorés de travailler avec OpenZeppelin dans la bibliothèque de contrats standard de StarkNet. Leur travail canonique sur les contrats normalisés d'Ethereum nous dessert tous les jours, et nous sommes certains qu'ils seront aussi impactés ici.
* **EVM->Compilateur Cairo**: l'équipe Warp de Nethermind[a démontré](https://medium.com/nethermind-eth/warp-your-way-to-starknet-ddd6856875e0)transpilation d'un contrat ERC-20 depuis le bytecode EVM vers un contrat StarkNet et son déploiement sur StarkNet. Cet effort évolue rapidement, et notre prochain objectif est la transpilation de contrats arbitraires intelligents de Yul au Caire.
* **Maker-on-StarkNet**: une[proposition](https://forum.makerdao.com/t/mip39c2-sp19-adding-the-starknet-engineering-core-unit-sne-001/9745)a été soumise au Maker DAO pour implémenter le protocole Maker sur StarkNet. La première phase propose un pont DAI d'Ethereum à StarkNet avec DAI sur StarkNet à suivre.
* **Services d'audit StarkNet / Cairo**: nous engageons de multiples cabinets d'audit à fournir des services d'audit de contrats intelligents StarkNet et de programmes du Caire.

### Le réseau principal autour du coin

Nous nous préparons pour le lancement du StarkNet Alpha Mainnet, en commençant progressivement par un ensemble d'applications en liste blanche. Plusieurs projets sont en cours et d'autres s'ajoutent activement d'ici la journée. Pour rejoindre le groupe, vous êtes invité à vous adresser via[discord](https://discord.gg/uJ9HZTUk2Y).

**Mise à jour (Nov. 2021):**StarkNet Alpha est en direct sur le réseau principal Ethereum