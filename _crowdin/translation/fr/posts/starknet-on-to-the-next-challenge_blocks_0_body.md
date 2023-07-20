### TL;DR

* Nous construisons Starknet par étapes, en commençant par établir la convivialité, puis en améliorant les performances, et enfin, en passant à la décentralisation
* Nous avons atteint notre premier objectif : la convivialité. Cela signifie que nous avons fourni un calcul général dans un état de type Ethereum (des années avant que cela ne soit pensé possible)
* Nous passons maintenant à l'étape 2 de notre plan de développement en trois parties : les performances, en nous concentrant sur le débit, le coût de transaction et la latence.
* Prochaine étape : la décentralisation

Juste un an après la première annonce des plans pour [Starknet](https://starknet.io/) , la plate-forme a de très bonnes fonctionnalités. La communauté des développeurs s'épanouit au-delà de nos attentes les plus folles et fournit une vague constante de nouveaux projets L2 Native.

Notre priorité au cours de la dernière année était de permettre exactement cela, en créant un Starknet fonctionnel avec une gamme de fonctionnalités en expansion rapide, qui permet aux développeurs de plonger directement.

Ils l'ont fait en grand nombre. Un bon baromètre est le nombre de téléchargements de la bibliothèque JavaScript [pour Starknet](https://www.starknetjs.com/): déjà à 5k depuis sa mise à disposition il y a 4 mois.

Pourtant, alors que Starknet offre la magie de compression que nous avons promise, pour le moment, il est loin d'être en mesure de le faire pour suffisamment de dApps avec un débit suffisant, et cela peut s'avérer une source de frustration pour les développeurs à court terme.

Notre technologie de base testée au combat, STARK, prouvant de nombreuses transactions et comprimant les preuves, doit être précédée d'un traitement par lots ou d'un séquençage des transactions. C'est un processus que l'équipe StarkWare a déjà perfectionné une fois pour le moteur de mise à l'échelle [StarkEx](https://starkware.co/starkex/) , et nous travaillons actuellement à le refaire pour les besoins de Starknet.

Maintenant que bon nombre de nos objectifs d'utilisabilité ont été atteints, nous réorientons nos efforts pour en faire notre priorité absolue. Tout cela fait partie de notre feuille de route en 3 étapes : l'utilisabilité, puis la performance du réseau, puis la décentralisation. Un an plus tard, nous voulons vous donner un aperçu sous le capot - un aperçu des pièces en place et de ce qui est encore en cours.

### L'histoire jusqu'ici

Starknet Alpha a été publié sur testnet public en juin et sur Mainnet en novembre. Au moment du déploiement de Mainnet, Starknet fournissait déjà un calcul général dans un état semblable à Ethereum, ce qui était largement considéré comme des années.

Tout au long du développement, nous avons choisi une approche qui s'est d'abord concentrée sur les fonctionnalités les plus importantes et les a publiées dès qu'elles sont devenues disponibles, partageant essentiellement le processus d'évolution avec la communauté. Starknet est loin d'être complet, mais même maintenant, les développeurs peuvent déjà créer des applications significatives et complexes. Aujourd'hui, nous avons des centaines de développeurs [s'appuyant sur Starknet,](https://starkware.notion.site/Projects-Building-on-StarkNet-a33dee55778a4515a9be9bdae02ee682) des dizaines de dApps et plus d'une douzaine d'équipes externes développant des outils et une infrastructure pour l'écosystème Starknet.

Une série de mises à niveau a fourni de nombreuses fonctionnalités importantes, notamment la messagerie L1<>L2, les données en chaîne et la prise en charge de la composabilité, la prise en charge des événements, le mécanisme de tarification de base, la mise à niveau des contrats, l'abstraction de compte, le cadre de test, les outils de développement, la confirmation rapide, le numéro de bloc , horodatage de bloc, prise en charge des contrats de compte.

La communauté des développeurs est à la fois profondément intéressée par Starknet et façonne réellement son développement. Déjà, des fonctionnalités ont été introduites en fonction des commentaires des développeurs. L'adoption pourrait bien dépasser l'augmentation du débit, c'est pourquoi cette augmentation est notre grande priorité maintenant.

### Prochaines étapes

Maintenant que nous avons atteint la convivialité, il est temps d'améliorer les performances du système. Le système, dans son état actuel, est capable de supporter un débit limité de transactions. La façon de résoudre ce problème consiste à améliorer les performances du nœud de séquenceur, qui est l'équivalent d'un mineur pour Starknet. C'est la « machine » qui séquence les transactions après leur soumission. Lorsque cela est optimisé, le débit va monter en flèche.

À cette fin, nous analysons simultanément où se trouvent les goulots d'étranglement et les abordons un par un. Actuellement, tous les goulots d'étranglement sont liés au processus de séquençage, qui intervient avant que nous invoquions les prouveurs STARK. La pile de preuves testée au combat est prête à prendre en charge un débit de type StarkEx sur Starknet.

Nous nous attendons à ce que l'optimisation du séquenceur soit un processus qui dure quelques mois, avec des améliorations progressives tout au long du S1/22. Notre objectif est d'atteindre, d'ici le début du second semestre 2022, un TPS supérieur d'au moins un ordre de grandeur à celui d'Ethereum, à un coût inférieur d'au moins deux ordres de grandeur à celui d'Ethereum. Et ce n'est que le début.

Il y a de bonnes raisons pour que cette phase d'optimisation soit nécessaire, et que Starknet n'ait pas été lancé avec un séquenceur prêt à l'emploi : Starknet a pu atteindre la convivialité si rapidement parce que nous avons pris une longueur d'avance. Au lieu de partir de zéro et de construire un tout nouveau séquenceur, nous avons utilisé le doseur de StarkEx comme composant central.

C'était une excellente façon de construire. Il n'a pas seulement livré rapidement; cela signifiait que nous étions sûrs d'avoir construit sur des fondations solides. StarkEx a essentiellement testé au combat la fonctionnalité de base qui pilote Starknet, car elle a engrangé des centaines de milliards de dollars en échanges cumulés.

[StarkEx](https://starkware.co/starkex/) est le moteur de mise à l'échelle de certaines des dApps les plus performantes utilisant L2 : dYdX (contrats perpétuels), DeversiFi (négociation et paiements au comptant), ainsi que pour Immutable et Sorare (frappe et négociation NFT).

Mais le séquenceur construit pour eux et d'autres clients StarkEx ne peut que mener Starknet jusqu'à présent. Chacun d'eux traite à peu près le même type de transaction chaque jour. Starknet est axé sur le calcul général, ses besoins sont donc illimités. Lorsque son séquenceur prend des transactions à partir du mempool, elles se présentent sous différentes formes et tailles. De plus, Starknet est également un réseau ouvert, ce qui signifie qu'il y a une surcharge de calcul supplémentaire qui n'est pas rencontrée dans StarkEx.

Le défi actuel, à savoir l'optimisation du séquenceur pour ces nouveaux besoins, est une entreprise importante, mais nous avons une bonne compréhension de l'itinéraire nécessaire, sur la base de notre développement StarkEx réussi.

### Prochaine étape : la décentralisation

Starknet doit être un réseau sans autorisation entièrement décentralisé, avec des mécanismes d'élection et de gouvernance des dirigeants. Atteindre cet objectif deviendra notre objectif principal une fois que le débit montera en flèche et que les coûts baisseront, et nous espérons avoir une première version décentralisée d'ici la fin de 2022. Nous prévoyons de partager publiquement notre plan de décentralisation dans les mois à venir.

Tout comme le débit limité actuel représente une phase intermédiaire dans le développement de Starknet, le niveau actuel d'implication de StarkWare est également temporaire. Nous nous considérons comme une sorte d'échafaudage, qui remplit une fonction importante pendant la phase de construction, mais qui est retiré en temps voulu.

Le développement complet du nœud, une première étape passionnante vers la décentralisation, est déjà en cours. Les nœuds complets permettront à quiconque de conserver et de vérifier l'état du réseau localement, en gardant une trace exacte de ce qui se passe. Trois équipes - Erigon, Nethermind et Equilibrium - développent des nœuds complets, et potentiellement d'autres commenceront le développement à l'avenir.

Dans un développement parallèle, des préparatifs sont en cours pour ouvrir au public des logiciels de séquençage et de preuve. N'importe qui pourra participer en tant que séquenceur ou prouveur sur Starknet.

Une structure sera développée pour inciter les gens à s'impliquer, qui comprendra des récompenses économiques. Les frais de Starknet iront, en partie, aux séquenceurs et aux prouveurs.

À moyen terme, nous prévoyons de mettre notre séquenceur à la disposition de tiers, et à long terme, nous prévoyons également de voir diverses équipes construire des séquenceurs qui séquenceront pour Starknet.

### Toujours en amélioration ; Toujours à l'écoute

Au fur et à mesure que l'accent sera mis sur le prochain défi, nous continuerons d'améliorer les réalisations passées. Et en continuant à travailler sur tous les domaines de [Starknet](https://starknet.io/), nos oreilles resteront toujours ouvertes à l'ensemble de la communauté des développeurs. Alors impliquez-vous dans la discussion, via [Discord](https://discord.com/invite/uJ9HZTUk2Y), la communauté [Starknet Shamans](https://www.google.com/search?client=safari&rls=en&q=StarkNet+Shamans&ie=UTF-8&oe=UTF-8) , [Twitter](https://twitter.com/Starknet_Intern), ou une autre voie, et aidez à façonner l'avenir de la mise à l'échelle de la blockchain.