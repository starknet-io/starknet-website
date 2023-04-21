### TL;DR

* La décentralisation de StarkNet implique un jeton natif et une nouvelle fondation.
* Le jeton StarkNet est utilisé pour la gouvernance et comme actif de paiement et de mise en jeu du réseau.
* Dix milliards de jetons ont été frappés, et leur allocation a commencé.
* La Fondation StarkNet, en cours de création, aura pour mission de maintenir StarkNet en tant que bien public.

StarkNet est un rollup de validité décentralisé de la couche 2 (L2) sans permission, construit pour permettre à Ethereum de s'échelonner via des protocoles cryptographiques appelés STARKs, sans compromettre les principes fondamentaux d'Ethereum de décentralisation, de transparence, d'inclusivité et de sécurité.

L’Alpha de StarkNet a été lancée sur le réseau principal en novembre 2021. Moins d'un an dans l'autre, un écosystème est en train de se former, avec des dizaines d'équipes dans le monde entier qui y travaillent. Il est maintenant temps de faire avancer la décentralisation du réseau, donc il réalise la vie, résistance à la censure, transparence et inclusivité exigées d'un L2 sur Ethereum.

La décentralisation signifie que le fonctionnement du réseau et son évolution ne dépendent d'aucune entité, y compris StarkWare. Un mécanisme d'élection sans autorisation du chef de preuve de mise en jeu et le paiement on-chain des frais de transaction, tous deux en utilisant un jeton natif, permettra au réseau de fonctionner de manière fiable comme un L2 sur Ethereum même si StarkWare cesse d'exister. Les décisions concernant la maintenance continue de StarkNet passeront de StarkWare à la communauté. Un Token StarkNet et une Fondation seront les éléments clés de cet effort.

Ce poste, le premier des trois publiés simultanément, résume le parcours de StarkNet et introduit le Token StarkNet et la Fondation StarkNet. Le[prochain post](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)traite du modèle de gouvernance StarkNet et le[troisième](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6)se concentre sur le modèle de jeton de StarkNet.

*Nous remercions les supporters StarkNet suivants (classés par ordre alphabétique) pour leurs commentaires sur un brouillon de ces postes: Guily_Gioza (Topology), Itamar Lesuisse (Argent), Jonas Nelle (Pontis), Martin Triay (OpenZeppelin), Polynya, Sylve Chevet (Briq) et Tomasz Stańczak (Nethermind).*

### L'histoire jusqu'à présent

[StarkNet](https://starknet.io/)est construit à partir de la cryptographie et d'un écosystème ouvert. La**cryptographie**est**[STARKs](https://eprint.iacr.org/2018/046.pdf)**. Ce sont des protocoles basés sur des mathématiques qui échelonnent Ethereum par ordre de grandeur. Ils ne nécessitent aucune configuration fiable, sont sécurisés après quantum et peuvent être déployés de manière succincte à n'importe quelle échelle. L'écosystème est composé de développeurs de base qui veulent depuis des années construire des infrastructures et des outils pour mettre à l'échelle la technologie blockchain. ainsi que des domaines d'application nouveaux et créatifs qui deviennent possibles lorsque la puissance de calcul d'Ethereum est développée.

StarkNet permet à tous les développeurs et utilisateurs d'accéder à l'échelle et aux avantages de sécurité des STARKs, dans le but de redimensionner Ethereum tout en maintenant les valeurs de base d'Ethereum. Les STARKs ont été inventés par des co-fondateurs de StarkWare, qui les ont utilisés pour construire la solution d'échelle[StarkEx](https://starkware.co/starkex/)pour les clients. Par la suite, StarkWare et d'autres équipes de développeurs (collectivement « Contributeurs principaux ») ont construit[StarkNet](https://starkware.co/starknet/), un public, des infrastructures décentralisées et sans permission, afin de garantir que ces technologies d'échelle sont accessibles à tous à perpétuité.

Le lancement de StarkNet Alpha il y a près d'un an a provoqué l'émergence d'un écosystème plus vaste qui s'est engagé à construire et à nourrir StarkNet. Il y a de nombreuses équipes de développeurs dans le monde entier qui construisent son infrastructure de base, ainsi que de nouvelles applications.

### **La façon de décentraliser**

La technologie STARK est mature et sûre, mais StarkNet n'a pas atteint le statut de bien public comme Ethereum ou Internet. Pour que StarkNet atteigne cet objectif, sa gouvernance, son fonctionnement et son développement doivent continuer à décentraliser. Cela sera facilité par deux mécanismes : la**StarkNet Foundation**et le**Token StarkNet**.

#### Fondation

En tant que sans but lucratif, la Fondation a pour mission de maintenir StarkNet comme un bien public — un bien ou un service mis à la disposition de tous les membres de la société. StarkNet est une infrastructure sans permission qui devrait être disponible pour tous. Elle doit être bien entretenue afin d'être sûre et efficace pour une utilisation publique. Elle ne doit pas non plus faire de discrimination entre les utilisateurs.

La Fondation sera financée par une subvention unique de StarkNet Tokens. Il encouragera le développement de mécanismes ascendants pour la prise de décision communautaire sur des questions technologiques essentielles, telles que les mises à jour de protocole, le règlement des différends et le financement des biens publics.

#### Token

Le Token StarkNet est nécessaire pour gérer l'écosystème, le maintenir et le sécuriser, décider de ses valeurs et objectifs stratégiques, et diriger son évolution. Ce jeton sera requis pour (i) la gouvernance, (ii) le paiement des frais de transaction sur StarkNet et (iii) la participation au mécanisme de consensus de StarkNet.

Nous avons récolté 10 milliards de jetons qui sont alloués aux contributeurs principaux de l'écosystème StarkNet, y compris StarkWare et les investisseurs de StarkWare, aux partenaires de StarkNet et à la Fondation. Bientôt (cible: Septembre 2022) le jeton ira sur Ethereum en tant que jeton ERC-20 et sera demandé pour être utilisé dans la gouvernance et le vote sur les mises à niveau du réseau. Plus tard, les frais StarkNet seront payés uniquement avec ce jeton, tout en assurant une bonne expérience utilisateur pour les utilisateurs intéressés à payer les frais de l'ETH. Plus tard encore, la correction automatique des jetons StarkNet supplémentaires commencera, c'est-à-dire que le nombre de jetons circulants sera supérieur à dix milliards).

Le modèle StarkNet Token met l'accent sur la compensation des développeurs pour leur travail. Une partie des nouveaux frais de correction et de transaction — frais évalués pour l'utilisation de StarkNet — sera accordée aux développeurs d'infrastructures de base et aux développeurs de contrats intelligents pour le travail qu'ils ont accompli pour concevoir et lancer le protocole, en plus d'indemniser les opérateurs StarkNet pour le travail qu'ils ont accompli pour l'opérer.

La raison d'être d'un nouveau jeton StarkNet dédié est expliquée dans notre[second post](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), et les principes de conception du jeton StarkNet et l'allocation initiale sont discutés dans le[troisième poste](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6).