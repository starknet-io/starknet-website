### TL;DR

* Nous construisons StarkNet par étapes, en commençant par établir**utilisabilité**, puis améliorer**la performance**, et enfin, passer à**décentralisation**
* Nous avons atteint notre premier objectif: la facilité d'utilisation. Cela signifie que nous avons livré un calcul général dans un état semblable à un Ethereum (des années avant que cela soit possible)
* Nous passons maintenant à l'étape 2 de notre plan de construction en trois parties : la performance, en nous concentrant sur le débit, le coût des transactions et la latence.
* Suivant : Décentralisation

Un an après que les plans pour[StarkNet](https://starknet.io/)ont été annoncés pour la première fois, la plate-forme a de très bonnes fonctionnalités. La communauté des développeurs s'épanouit au-delà de nos attentes les plus fous et fournit une flambée constante de nouveaux projets natifs de L2.

Notre priorité au cours de l'année dernière était de permettre exactement cela, en créant un StarkNet fonctionnel avec une gamme de fonctionnalités en expansion rapide qui permet aux développeurs de plonger tout droit.

Ils ont fait cela en grand nombre. Un bon baromètre est le nombre de téléchargements pour la bibliothèque[JavaScript pour StarkNet](https://www.starknetjs.com/): déjà à 5k depuis sa disponibilité il y a 4 mois.

Pourtant, alors que StarkNet délivre la magie de compression que nous avons promise, pour le moment, il est loin de pouvoir le faire pour suffisamment de dApps avec suffisamment de débit, et cela peut s'avérer une source de frustration pour les développeurs à court terme.

Notre technologie de base éprouvée par la bataille, STARK prouvant de nombreuses transactions et comprimant les preuves, doit être précédée par le traitement ou le séquençage des transactions. C'est un processus que l'équipe de StarkWare a déjà perfectionné une fois pour le moteur d'échelle[StarkEx](https://starkware.co/starkex/), et nous travaillons actuellement à le faire à nouveau pour les besoins de StarkNet.

Maintenant que bon nombre de nos objectifs d'utilisation ont été atteints, nous changeons de priorité pour en faire notre première priorité. Tout cela fait partie de notre feuille de route en 3 étapes :**utilisabilité**, suivie de la**performance du réseau**, puis**décentralisation**. Un an dedans nous voulons vous donner un aperçu sous la capuche — un aperçu des pièces en place et de ce qui reste un travail en cours.

### L’histoire si lointaine

StarkNet Alpha a été publié sur le réseau de test public en juin, et sur le réseau principal en novembre. Au moment du déploiement du réseau principal, StarkNet effectuait déjà des calculs généraux dans un état semblable à un Ethereum, qui était largement considéré comme des années plus tard.

Tout au long du développement, nous avons choisi une approche qui se concentre d'abord sur les fonctionnalités les plus importantes et les a publiées dès qu'elles sont disponibles. en partageant essentiellement le processus d'évolution avec la communauté. StarkNet est loin d'être complet, mais même maintenant, les développeurs peuvent déjà construire des applications significatives et complexes. Aujourd'hui, nous avons des centaines de développeurs[construisant sur StarkNet,](https://starkware.notion.site/Projects-Building-on-StarkNet-a33dee55778a4515a9be9bdae02ee682)des dizaines de dApps, et plus d'une douzaine d'équipes externes développant des outils et des infrastructures pour l'écosystème StarkNet.

Une série de mises à jour a fourni de nombreuses fonctionnalités importantes, y compris la messagerie L1<>L2, les données sur la chaîne et la prise en charge de la composabilité, le support des événements, le mécanisme de frais de base, mise à jour des contrats, abstraction des comptes, framework de test, outils de développement, confirmation rapide, numéro de bloc, horodatage des blocs, support des contrats de compte.

La communauté des développeurs est à la fois profondément intéressée par StarkNet et façonne en fait son développement. Déjà, des fonctionnalités ont été introduites sur la base des commentaires des développeurs. L’adoption pourrait bien dépasser l’augmentation du débit, raison pour laquelle cette impulsion est aujourd’hui notre grande priorité.

### Étapes suivantes

Maintenant que nous avons atteint la capacité d'utilisation, il est temps d'améliorer les performances du système. Le système, dans son état actuel, est capable de supporter un débit de transactions limité. La façon de résoudre ce problème est d’améliorer la performance du Sequencer Node, qui est l’équivalent d’un mineur de StarkNet. C'est la « machine » que les séquences de transactions après avoir été soumises. Lorsque cela est optimisé, le débit explosera le ciel.

À cette fin, nous analysons simultanément où se trouvent les goulets d’étranglement et nous les abordons un par un. Actuellement, tous les goulets d'étranglement sont liés au processus de séquençage, qui arrive avant que nous n'invoquions les prouesses STARK. La pile de prouesses testées par la bataille est prête à supporter le débit de StarkEx-like sur StarkNet.

Nous espérons que l'optimisation du séquenceur sera un processus qui durera quelques mois, avec des améliorations progressives tout au long du H1/22. Notre objectif est d'atteindre d'ici le début de la seconde moitié de 2022, au moins un ordre de magnitude TPS supérieur à Ethereum, à un coût d’au moins deux ordres de magnitude inférieure à Ethereum’s. Et ce n’est que le début.

Il y a de bonnes raisons pour que cette phase d'optimisation soit nécessaire. et que StarkNet n’a pas été lancé avec un séquenceur optimisé : StarkNet a pu atteindre sa facilité d’utilisation aussi rapidement parce que nous avons pris un premier départ. Au lieu de partir de zéro et de construire un séquenceur totalement nouveau, nous avons utilisé le batcher de StarkEx comme composant central.

Ce fut une excellente façon de construire. Il ne s’est pas contenté de livrer rapidement, mais nous sommes certains que nous avons construit sur des fondations solides. StarkEx a essentiellement testé la fonctionnalité de base qui conduit StarkNet, car il a accumulé des centaines de milliards de dollars dans le trading cumulatif.

[StarkEx](https://starkware.co/starkex/)est le moteur de mise à l'échelle de certains des dApps les plus réussis en utilisant L2: dYdX (contrats perpétuels), DeversiFi (trading spot et paiements), ainsi que pour Immutable et Sorare (frappe et trading NFT).

Mais le séquenceur construit pour eux et pour les autres clients de StarkEx ne peut que prendre StarkNet jusqu'à présent. Chacune d'entre elles gère de manière générale le même type de transaction chaque jour. StarkNet est une affaire de**calcul général**, donc ses besoins sont ouverts. Quand son séquenceur prend des transactions de la mémoire, elles se présentent sous différentes formes et tailles. De plus, StarkNet est également un réseau ouvert, ce qui signifie qu’il y a des frais supplémentaires de calcul qui ne sont pas rencontrés dans StarkEx.

Le défi actuel, à savoir l'optimisation du séquenceur pour ces nouveaux besoins, est une entreprise significative, mais nous avons une bonne compréhension de la route nécessaire, sur la base de notre développement réussi de StarkEx.

### Prochaine Up: Décentralisation

StarkNet doit être un réseau entièrement décentralisé sans permission, avec des mécanismes d'élection et de gouvernance de dirigeants. Atteindre cela deviendra notre principal objectif une fois que la vitesse des fusées et les coûts baisseront, et nous espérons avoir une première version décentralisée d'ici la fin 2022. Nous prévoyons de partager publiquement notre plan de décentralisation dans les mois à venir.

Tout comme le débit limité actuel représente une phase intermédiaire dans le développement de StarkNet, le niveau actuel d’implication de StarkWare est également temporaire. Nous nous considérons comme une sorte d'échafaudage qui sert une fonction importante pendant la phase de construction, mais qui est retardée en temps voulu.

Le développement de nœuds complets, un premier pas passionnant vers la décentralisation, est déjà en cours. Les nœuds complets permettront à n'importe qui de conserver et de vérifier l'état du réseau localement, en gardant une trace exacte de ce qui se passe. Trois équipes —*Erigon, Nethermind et Equilibrium*— sont en train de développer des nœuds complets, et potentiellement plus seront développés dans le futur.

Dans un développement parallèle, des préparatifs sont en cours pour ouvrir le séquençage et prouver le logiciel au public. N'importe qui pourra participer en tant que séquenceur ou un prouveur sur StarkNet.

Une structure sera développée pour inciter les gens à s'impliquer, ce qui comprendra des récompenses économiques. Les frais de StarkNet vont en partie aux séquenceurs et aux prouvés.

À moyen terme, nous espérons mettre notre séquenceur à la disposition de tierces parties et à long terme nous nous attendons à voir aussi différentes équipes de séquenceurs de construction qui seront séquençage pour StarkNet.

### Toujours améliorer ; Écouter éternellement

Au fur et à mesure que les priorités se déplaceront vers le prochain défi, nous continuerons à améliorer les réalisations passées. Et en continuant à travailler sur tous les domaines de[StarkNet](https://starknet.io/), nos oreilles resteront toujours ouvertes à toute la communauté des développeurs. Alors participez à la discussion, via[Discord](https://discord.com/invite/uJ9HZTUk2Y), la communauté des chamanes[StarkNet](https://www.google.com/search?client=safari&rls=en&q=StarkNet+Shamans&ie=UTF-8&oe=UTF-8)[Twitter](https://twitter.com/Starknet_Intern), ou une autre route, et aider à façonner le futur de la mise à l'échelle de la blockchain.