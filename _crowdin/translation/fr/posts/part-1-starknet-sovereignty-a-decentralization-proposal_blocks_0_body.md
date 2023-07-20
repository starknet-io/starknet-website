### TL;DR

* La décentralisation de Starknet implique un jeton natif et une nouvelle fondation.
* Le jeton Starknet est utilisé pour la gouvernance et comme actif de paiement et de jalonnement du réseau.
* Dix milliards de jetons ont été frappés et leur attribution a commencé.
* La Fondation Starknet, en cours de création, aura pour mission de maintenir Starknet en tant que bien public.

Starknet est un cumul de validité de couche 2 (L2) décentralisé sans autorisation, conçu pour permettre à Ethereum d'évoluer via des protocoles cryptographiques appelés STARK, sans compromettre les principes fondamentaux d'Ethereum de décentralisation, de transparence, d'inclusivité et de sécurité.

L'Alpha de Starknet a été lancé sur Mainnet en novembre 2021. Moins d'un an plus tard, un écosystème se forme, avec des dizaines d'équipes dans le monde entier qui y travaillent. Il est maintenant temps de faire avancer la décentralisation du réseau, afin qu'il atteigne la vivacité, la résistance à la censure, la transparence et l'inclusivité exigées d'un L2 sur Ethereum.

La décentralisation signifie que le fonctionnement et l'évolution du réseau ne dépendront d'aucune entité unique, y compris StarkWare. Un mécanisme d'élection de chef de file sans autorisation et un paiement en chaîne des frais de transaction, tous deux utilisant un jeton natif, permettront au réseau de fonctionner de manière fiable en tant que L2 sur Ethereum même si StarkWare cesse d'exister. Les décisions concernant la maintenance continue de Starknet passeront de StarkWare à la communauté. Un jeton et une fondation Starknet seront des éléments clés de cet effort.

Ce billet, le premier des trois publiés simultanément, résume le parcours de Starknet jusqu'à présent et présente le jeton Starknet et la Fondation Starknet. Le [prochain article](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778) traite du modèle de gouvernance de Starknet et le [troisième](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6) se concentre sur le modèle de jeton de Starknet.

Nous remercions les partisans de Starknet suivants (par ordre alphabétique) pour leurs commentaires sur une ébauche de ces articles : Guily_Gioza (Topology), Itamar Lesuisse (Argent), Jonas Nelle (Pontis), Martin Triay (OpenZeppelin), Polynya, Sylve Chevet (Briq) , et Tomasz Stańczak (Nethermind).

### L'histoire jusqu'ici

[Starknet](https://starknet.io/) est construit à partir de la cryptographie et d'un écosystème ouvert. La cryptographie est [STARKs](https://eprint.iacr.org/2018/046.pdf). Ce sont des protocoles basés sur les mathématiques qui mettent à l'échelle Ethereum par ordre de grandeur. Ils ne nécessitent aucune configuration fiable, sont sécurisés post-quantique et peuvent être déployés succinctement à n'importe quelle échelle. L'écosystème est composé de développeurs principaux qui souhaitent depuis des années construire une infrastructure et des outils pour faire évoluer la technologie de la blockchain, ainsi que de nouveaux domaines d'application créatifs qui deviennent possibles lorsque la puissance de calcul d'Ethereum est étendue.

Starknet donne à tous les développeurs et utilisateurs l'accès aux avantages d'échelle et de sécurité des STARK, dans le but de faire évoluer Ethereum tout en maintenant les valeurs fondamentales d'Ethereum. Les STARK ont été inventés par les co-fondateurs de StarkWare, qui les ont d'abord utilisés pour créer la solution de mise à l'échelle [StarkEx](https://starkware.co/starkex/) pour les clients. Par la suite, StarkWare et d'autres équipes de développeurs (collectivement, les «contributeurs principaux») ont construit [Starknet](https://starkware.co/starknet/), une infrastructure publique, décentralisée et sans autorisation, pour garantir que ces technologies de mise à l'échelle sont accessibles à tous à perpétuité.

Le lancement de Starknet Alpha il y a près d'un an a provoqué l'émergence d'un écosystème plus vaste qui s'est engagé à construire et à entretenir Starknet. Il existe de nombreuses équipes de développeurs dans le monde entier qui construisent son infrastructure de base, ainsi que de nouvelles applications dessus.

### La manière de décentraliser

La technologie STARK est mature et sécurisée, mais Starknet n'a pas atteint le statut de bien public comme Ethereum ou Internet. Pour que Starknet atteigne cet objectif, sa gouvernance, son exploitation et son développement doivent continuer à se décentraliser. Cela sera facilité par deux mécanismes : la Fondation Starknet et le Starknet Token.

#### Fondation

En tant qu'organisation à but non lucratif, la mission de la Fondation sera de maintenir Starknet en tant que bien public - un bien ou un service mis à la disposition de tous les membres de la société. Starknet est une infrastructure sans autorisation qui devrait être accessible à tous. Il doit être bien entretenu afin d'être sûr et efficace pour un usage public. Il ne doit pas non plus faire de discrimination entre les utilisateurs.

La Fondation sera financée par une subvention unique de jetons Starknet. Il encouragera le développement de mécanismes ascendants pour la prise de décision communautaire sur des questions technologiques essentielles, telles que les mises à jour des protocoles, le règlement des différends et le financement des biens publics.

#### Token

Le jeton Starknet est nécessaire pour faire fonctionner l'écosystème, le maintenir et le sécuriser, décider de ses valeurs et de ses objectifs stratégiques et diriger son évolution. Ce jeton sera requis pour (i) la gouvernance, (ii) le paiement des frais de transaction sur Starknet et (iii) la participation au mécanisme de consensus de Starknet.

Nous avons frappé un premier milliard de jetons qui sont alloués aux principaux contributeurs de l'écosystème Starknet, y compris StarkWare et les investisseurs de StarkWare, aux partenaires développeurs de logiciels Starknet et à la Fondation. Bientôt (objectif : septembre 2022), le jeton ira sur Ethereum en tant que jeton ERC-20 et sera demandé pour une utilisation dans la gouvernance et le vote sur les mises à niveau du réseau. Plus tard, les frais de Starknet ne seront payés que dans ce jeton, tout en garantissant une bonne expérience utilisateur aux utilisateurs intéressés à payer des frais en ETH. Plus tard encore, la frappe automatique de jetons Starknet supplémentaires commencera (c'est-à-dire que le nombre de jetons en circulation sera supérieur à dix milliards).

Le modèle Starknet Token met l'accent sur la rémunération des développeurs pour leur travail. Une partie des nouveaux frais de frappe et de transaction – frais évalués pour l'utilisation de Starknet – sera accordée aux développeurs d'infrastructures de base et aux développeurs de contrats intelligents pour le travail qu'ils ont effectué pour concevoir et lancer le protocole, en plus de compenser les opérateurs de Starknet pour le travail qu'ils ont fait pour le faire fonctionner.

La justification complète d'un nouveau jeton Starknet dédié est expliquée dans notre [deuxième post](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), et les principes de conception et l'allocation initiale du jeton Starknet sont discutés dans le [troisième post](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6).