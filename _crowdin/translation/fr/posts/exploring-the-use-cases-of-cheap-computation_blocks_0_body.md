

Les coûts de calcul élevés ont freiné l'adoption et les cas d'utilisation de la blockchain

* Starknet, un cumul Ethereum de couche 2, permet un calcul bon marché
* Starknet existe déjà sur le réseau principal, avec des millions de transactions traitées
* Possibilités d'intégration AI/ML avec inférence vérifiable, ensembles de modèles en chaîne et formation vérifiable
* Les développeurs peuvent utiliser le livre Starknet pour en savoir plus sur le Caire et s'appuyer sur Starknet

Dans les marchés haussiers de 2021 (ou saison Pepe mai 2023), alors que tout le monde parlait de crypto et envoyait des millions de transactions sur Ethereum, les prix du gaz pouvaient atteindre 200 Gwei ou plus. Cela signifiait que si vous vouliez envoyer 10 USDC à quelqu'un sur Ethereum, cela vous coûterait 50 $ ou plus. Pas une très bonne affaire.

Avec de nombreux nouveaux utilisateurs des blockchains, la demande d'espace de bloc a explosé. Cette flambée des prix du gaz sur Ethereum (et d'autres chaînes) a révélé les limites des blockchains monolithiques. Le public était prêt, mais la technologie ne l'était pas.

Pour résoudre ce problème, un passage à la conception modulaire a émergé avec des solutions de «couche 2», un ensemble de technologies construites sur une blockchain de base qui augmente l'évolutivité et la rentabilité. Selon l'article[de Polynya, "toutes les blockchains dignes de ce nom s'éloigneront du monolithisme pur, d'une manière ou d'une autre, au cours](https://polynya.mirror.xyz/wnt16H0VnFoCGDK_ds5H4J1ZcHepZfQr1DQHCzw940o)prochaines années (à moins que l'échelle ne soit pas requise, comme Bitcoin)."

**Starknet -**cumul de validité (ou de connaissance nulle) - est un leader parmi ces solutions de couche 2 et a considérablement réduit le coût de calcul. Dans cet article, nous allons explorer à quel point les coûts de calcul élevés ont freiné la blockchain, puis examiner en détail plusieurs nouveaux cas d'utilisation désormais possibles grâce aux coûts de calcul bon marché de Starknet.

## Ethereum L2

Sur Ethereum, une grande variété de ces L2 ont été développées, principalement dans trois catégories de solutions :[cumuls optimistes](https://ethereum.org/en/developers/docs/scaling/optimistic-rollups/),[cumuls sans connaissance](https://ethereum.org/en/developers/docs/scaling/zk-rollups/)et[canaux d'état](https://ethereum.org/en/developers/docs/scaling/state-channels/).

L'avantage des rollups est qu'ils tirent leur sécurité d'Ethereum L1 (utilisant ainsi un réseau décentralisé de plus de[600 000 validateurs](https://beaconcha.in/validators)). Cependant, ils offrent également une exécution beaucoup plus rapide et moins chère qu'une transaction sur le réseau principal. Ils y parviennent en effectuant les calculs en dehors de la couche un (où le calcul est moins cher), mais en publiant périodiquement l'état du L2 sur le réseau principal (pour maintenir la sécurité du réseau principal) sous forme de paquet (d'où le « cumul » des transactions) .

## Qu'est-ce que Starknet ?

**Starknet**est un cumul de validité (communément appelé cumul de connaissance zéro) développé par[StarkWare](https://starkware.co/starknet/)qui utilise des systèmes cryptographiques appelés STARK pour réduire les coûts de calcul.

Aujourd'hui, la version réseau principal de Starknet a déjà des frais de transaction bien inférieurs à Ethereum. Dans la version 0.13.0 (prévue pour le troisième trimestre 2023), les coûts de transaction de Starknet devraient encore baisser avec l'introduction de Volition Disponibilité des données). Actuellement, 95 % des frais de transaction sur Starknet sont dus aux frais de transaction sur Ethereum Mainnet (les 5 % restants sont calculés). De plus, une fois l'EIP 4844 implémenté sur la couche 1, l'équipe poussera les mises à niveau pour s'y adapter dès que possible. À la suite de ces 2 mises à niveau, les coûts de transaction devraient baisser considérablement.

## Limites des coûts de calcul élevés

Outre les frais exorbitants juste pour envoyer des jetons, il existe d'autres problèmes avec des coûts de calcul élevés. Aujourd'hui encore, de nombreuses applications sont limitées dans leurs cas d'utilisation en raison de ce coût de calcul élevé. Et à mesure que la technologie blockchain continue d'évoluer, la demande de calculs complexes augmentera. Les coûts de calcul élevés limitent la croissance et l'adoption d'applications décentralisées. Par exemple:

1. **Transactions courantes**. La promesse de "crypto as cash" ne s'est pas encore réalisée (à l'exception de[à](https://www.pwc.com/gx/en/financial-services/pdf/el-salvadors-law-a-meaningful-test-for-bitcoin.pdf)exceptions où vous pouvez "survivre sur crypto"). Parallèlement à l'incertitude réglementaire, l'une des principales raisons du manque d'adoption quotidienne par le grand public a été les transactions coûteuses. Personne ne veut payer 1 $ en frais de transaction pour un café à 2 $.
2. **Oracles**. En raison de leur conception et de leurs principes inhérents, les blockchains ne peuvent pas récupérer de données réelles hors chaîne. Afin d'obtenir des données telles que les cours des actions, les données météorologiques, les résultats des matchs sportifs, etc., des applications spéciales appelées oracles sont utilisées. Ces oracles publient périodiquement des données en chaîne, que les contrats intelligents peuvent ensuite récupérer. Cependant, en raison du coût élevé des transactions, les oracles ne peuvent pas publier régulièrement des données en chaîne, ne publiant souvent qu'à de longs intervalles. En conséquence, les données en chaîne deviennent obsolètes et pourraient potentiellement entraîner la prise de mauvaises décisions par des contrats intelligents. Ceci est particulièrement important pour pouvoir offrir des expériences de trading à la hauteur du Web 2. De plus, en raison d'une exécution coûteuse, tout type d'agrégation de données ou de calcul supplémentaire devient irréalisable.
3. **Gouvernance**. La gouvernance en chaîne, ou vote en chaîne, est un moyen efficace de rendre les processus décisionnels transparents et décentralisés. Jusqu'à présent, pour que le vote en chaîne ait lieu, les électeurs devaient voter (en fonction du nombre de jetons X qu'ils détenaient ou de tout autre mécanisme permettant d'obtenir le pouvoir de vote) en envoyant une transaction. Cependant, pour que la gouvernance soit décentralisée, des décisions efficaces doivent être prises souvent et rapidement. En raison des coûts de calcul élevés, le vote en chaîne est devenu un système de vote inefficace. C'est trop cher de voter — alors les gens ne le font tout simplement pas. Par conséquent, de nombreux projets ont opté pour une gouvernance hors chaîne, ce qui nuit à la finalité des blockchains.
4. **Jeux**. Lorsque nous entendons parler de jeux en chaîne, le jeu autrefois viral[Axie Infinity](https://axieinfinity.com/)nous vient à l'esprit. Dans le jeu développé par Sky Mavis, les personnages du jeu, Axies, étaient représentés par des NFT. Cependant, la logique du jeu fonctionnait de la même manière que tous les autres jeux traditionnels - sur un serveur centralisé. Les jeux demandent aux joueurs de prendre de nombreuses décisions sur une courte période, chacune représentant une sorte de transaction. Et en fonction de la décision du joueur, l'intrigue du jeu peut changer, ce qui nécessite de grandes quantités de calculs. Cette limitation des calculs coûteux a amené des jeux comme CryptoKitties et Axie Infinity à ne comporter que des composants en chaîne limités. Cependant, en se commercialisant comme des jeux "web3", ils ont atteint une capitalisation boursière de plusieurs milliards de dollars à leur apogée, bien qu'ils ne soient pas véritablement représentatifs du jeu blockchain.

## Ouvrir la porte à de nouveaux cas d'utilisation avec un calcul bon marché

Cependant, si nous pouvons obtenir un calcul bon marché, nous ouvrons un nouvel ensemble de cas d'utilisation de la blockchain. Starknet est déjà en ligne sur le réseau principal et traite quotidiennement des dizaines de milliers de transactions (avec plus de 7 millions de transactions effectuées à ce jour). Comme mentionné, une fois EIP-4844 intégré, le coût des transactions diminuera d'un ordre de grandeur.

Examinons quelques-uns des cas d'utilisation que ce calcul bon marché sur Starknet permet.

### Transactions abordables et abstraction de compte

La plus simple de toutes est qu'avec des transactions bon marché, il**d'utilisation quotidienne**. Payer votre café ne vous coûte plus que quelques centimes (ou même une fraction de centime). De plus, en raison de[abstraction de compte](https://medium.com/starkware/account-abstraction-improving-security-and-user-experience-for-mainstream-crypto-adoption-eb57cb09023), votre portefeuille crypto fonctionne de la même manière qu'un portefeuille traditionnel. Tout comme conserver la majeure partie de vos finances dans un compte d'épargne sécurisé, vous stockez la plupart de vos actifs dans un portefeuille avec plusieurs couches de sécurité (par exemple, en exigeant qu'une personne de confiance cosigne des transferts importants ou en utilisant une clé privée unique).

### Transformer les flux de données avec un calcul en chaîne abordable

Avec l'introduction du calcul en chaîne bon marché, les oracles seront très différents de ce qu'ils sont aujourd'hui.

Tout d'abord, les mises à jour****des flux oracle deviennent possibles puisque les transactions individuelles coûtent beaucoup moins cher. Cela se traduira par des flux de données plus précis et permettra aux utilisateurs de créer plus de cas d'utilisation pour créer des marchés basés sur ces données (protocoles d'options compliqués, marchés de prédiction, etc.).

Étant donné que Starknet est un rollup, il doit envoyer périodiquement un engagement****sur le réseau principal Ethereum pour mettre à jour l'état du rollup (généralement, l'écart entre les engagements peut aller de quelques minutes à quelques heures). Cet engagement est l'un des coûts importants qu'un utilisateur paie lorsqu'il paie des frais de transaction sur un L2. Cependant, les cumuls ne doivent valider que l'état*le plus récent*dans L1. L'écrasement du même emplacement de stockage plusieurs fois dans un seul bloc n'entraîne pas de coûts de stockage élevés. Dans le cas des oracles, si une variable (par exemple, le prix d'un actif) est mise à jour fréquemment dans le même engagement, le coût L1 serait toujours équivalent à une seule écriture, car seul l'état final est publié sur le réseau principal en tant que données d'appel.

**Les flux de calcul**- ou les flux de données agrégées et calculées - deviennent possibles en raison du coût d'exécution moins élevé. Dans la finance traditionnelle, les applications financières utilisent des flux de données sophistiqués, y compris le risque, le rendement et la volatilité. Des équipes comme[Pragma](https://www.pragmaoracle.com/)travaillent à la mise en place de ces flux sur web3. Pragma a déjà deux flux de calcul en direct sur Starknet testnet – un indice de volatilité et une courbe de rendement.

L'utilisation de**preuves de stockage**changera également le paysage des oracles. Les preuves de stockage sont un moyen cryptographique de suivre le stockage. L'utilisation de ces engagements cryptographiques permet de prouver de manière fiable qu'un état particulier existait à un certain moment (ou à un bloc spécifique, dans le cas des blockchains). Afin de vérifier ces preuves, des calculs sont nécessaires (bien qu'ils soient très légers), et des calculs bon marché amélioreront l'UX. Avec les preuves de stockage, il devient possible de transférer des informations entre différentes chaînes de manière décentralisée, de proposer des données historiques de la blockchain, et bien plus encore. Si vous souhaitez approfondir les preuves de stockage,[consultez notre article Medium](https://starkware.medium.com/what-are-storage-proofs-and-how-can-they-improve-oracles-e0379108720a).

### Le passage à la logique de jeu en chaîne

Le monde du jeu est immense. Le plus grand marché du jeu, les États-Unis, génère un énorme[**54 milliards USD**par an](https://www.statista.com/forecasts/308454/gaming-revenue-countries)de revenus provenant des jeux. Les jeux Blockchain ont récemment été à l'honneur, mais comme indiqué précédemment, ces jeux appartiennent principalement au "web2.5" plutôt qu'à de véritables jeux "web3".

Pour que les jeux soient réellement considérés comme un jeu blockchain, ils doivent :

![](/assets/cheap-computation-image-2.webp)

Pour que la logique du jeu soit complètement en chaîne, une exécution bon marché est essentielle.

Pour que le jeu soit considéré comme un jeu Web3, un «test décisif» élémentaire pourrait être de savoir si le jeu pourrait survivre si les développeurs derrière le jeu disparaissaient soudainement. Ceci est très similaire à la façon dont un contrat intelligent vit en chaîne; peu importe si le développeur du contrat intelligent est toujours actif ou non, le jeu devrait continuer. Différentes interfaces pourraient être construites sur la logique du jeu si les mécanismes et les règles de base du jeu sont en chaîne. Les développeurs, d'autre part, seraient incités à construire avec des jetons spécifiques au jeu. Même si aucun jeu majeur n'est actuellement entièrement construit en chaîne, plusieurs projets sur Starknet vont dans la bonne direction, notamment[Realms](https://linktr.ee/BibliothecaDAO)et[Influence](https://venturebeat.com/games/unstoppable-games-will-launch-web3-sci-fi-mmo-influence-on-starknet/).

Les développeurs d'écosystèmes comme[Dojo](https://dojoengine.org/)travaillent sur la fourniture d'un cadre ECS (Entity-Component-System) open source pour l'écosystème Starknet. Un framework ECS est un modèle de conception de base utilisé pour créer des jeux de manière modulaire. Par exemple, dans le cas de Mario Kart, Mario et sa voiture seraient des entités, la position et la vitesse des voitures seraient des composants et la logique des collisions de voitures serait implémentée en tant que système. Le développeur du jeu utiliserait ensuite ces composants pour créer le jeu. Des projets comme celui-ci sont nécessaires à mesure que l'écosystème se développe, et de plus en plus de développeurs de jeux se joignent pour créer des jeux sur Starknet.

### Applications d'IA transparentes

Avec le buzz récent de l'intelligence artificielle, il semble que l'IA pourrait bientôt être intégrée à notre être numérique. Bien qu'il ne soit pas certain que les modèles d'IA seront mis en chaîne, il existe plusieurs raisons pour lesquelles cela pourrait être bénéfique. Et le calcul bon marché est indispensable pour ces cas d'utilisation.

1. **Inférence vérifiable**signifie que les modèles sont pré-formés dans des serveurs centralisés. Cependant, une fois la formation terminée, les poids du modèle pourraient être publiés en chaîne. Une fois cela fait, les entrées pourraient être transmises au modèle en chaîne, et les sorties maintiendraient la transparence avec l'utilisateur ayant la preuve que le modèle génère une certaine sortie.
2. **Les ensembles de modèles en chaîne**pourraient être rendus possibles si le calcul est suffisamment bon marché pour que les modèles soient exécutés pour générer des sorties en chaîne. Les sorties de plusieurs modèles pourraient ensuite être agrégées pour former un modèle "d'ensemble" couramment utilisé dans les applications ML.
3. **Une formation vérifiable**signifierait que les modèles pourraient être formés en chaîne, en conservant une preuve vérifiable de formation bénigne sans introduire de biais externes. Il s'agit peut-être de l'application la plus gourmande en calcul ci-dessus et aussi la moins susceptible d'être mise en service prochainement. De nos jours, les grands modèles d'IA/ML mettent des jours (ou des années) à s'entraîner sur des GPU dotés d'énormes ressources. En plus de cela, générer des preuves S\[N/T]ARK pour le calcul effectué pendant la formation serait une surcharge en ce moment. De plus, Cairo fonctionne spécifiquement sur des CPU (qui sont beaucoup plus lents que les GPU).

![](/assets/cheap-computation-image-3.webp)

Source :[https://www.moduluslabs.xyz](https://www.moduluslabs.xyz/)

[Giza](https://starknet.substack.com/p/all-roads-lead-to-giza-starknet-roadmap?utm_source=substack&utm_medium=email)et[Modulus Labs](https://www.moduluslabs.xyz/)(*qui est également abrégé en ML*) font partie des principales équipes de recherche qui travaillent à mettre l'IA en chaîne à l'aide de preuves ZK.

## Quel avenir pour Starknet ?

Dans un avenir proche, la feuille de route de Starknet se concentre sur les performances et une meilleure UX. Un débit accru, une latence réduite et des frais de transaction inférieurs sont attendus d'ici le troisième trimestre de 2023. Pour plus de détails sur les plans de développement, vous pouvez vous référer à la feuille de route donnée[ici](https://medium.com/starkware/starknet-goals-and-roadmap-for-2023-fe7b89eead3b).

Cairo est conçu spécifiquement pour la preuve STARK, ce qui le rend optimal pour exploiter les avantages des systèmes de preuve algébriques et garantir des processus de calcul et de vérification efficaces.

Starknet est conçu pour l'évolutivité, garantissant qu'il peut s'adapter à une croissance exponentielle sans sacrifier la sécurité ou la décentralisation.

![](/assets/cheap-computation-image-4.webp)

## Conclusion

Avec les recherches intensives autour de l'espace "blockchain modulaire", l'objectif "amener un milliard d'utilisateurs" se rapproche de plus en plus. Et avec Starknet, le calcul bon marché est arrivé,[et il ne fait que devenir moins cher](https://www.starknet.io/de/posts/engineering/starknet-performance-roadmap).

Le livre[Starknet](https://book.starknet.io/chapter_2/index.html)en pleine croissance offre un excellent point de départ pour les développeurs qui se lancent dans leur voyage au Caire pour Starknet, les chapitres 0 à 2 fournissant une introduction à divers sujets.