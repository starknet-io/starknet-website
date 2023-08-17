### TL;DR

* StarkWare propose une gamme de modes de disponibilité de données (DA) pour le choix des clients, en fonction de leur priorité.
* Il y a trois approches à la disponibilité des données pour les preuves STARK, tous sont déjà disponibles en production :\
  —**Rollup**: le registre est publié directement sur la blockchain\
  —**Validium**: un comité de disponibilité de données sécurise le livre, avec seulement un hash stocké à la chaîne\
  —**Volition**: les applications peuvent laisser les utilisateurs choisir leur mode DA — Rollup ou Validium — pour chaque transaction
* Peu importe quelle DA est utilisée, la validité de toutes les transactions est garantie par STARKs

### Introduction

En novembre 2022,[StarkEx](https://starkware.co/starkex/)a réglé plus de 750 milliards de dollars de volume de négociation et plus de 270 millions de transactions sur Ethereum. Dans l'espace NFT, les applications telles que ImmutableX et Sorare StarkEx a frappé plus de 85 millions de NFT à un prix qui est de 1000x moins cher que de le faire directement sur Ethereum. La technologie STARK évolue sur Ethereum. Par exemple, en une seule semaine, StarkEx a exécuté 1.6x le nombre de transactions en tant qu'Ethereum (12m sur StarkEx vs 7. m sur Ethereum) en consommant moins de 0,1 % de l'espace de stockage Ethereum. Et il fait tout cela tout en donnant aux utilisateurs le même niveau de sécurité que s'ils s'installaient directement sur Ethereum.

### Comment StarkWare y parvient-il ?

Les utilisateurs envoient des transactions sur Layer 2 (soit StarkEx ou StarkNet), qui sont en lot et envoyées à un proverbe STARK. Ce proverbe STARK connaît l'état du registre avant et après le traitement de ces opérations. Le prouveur produit une preuve STARK qui atteste de la validité du nouvel état du livre après l'exécution de ces opérations. Le nouvel état et la preuve STARK sont envoyés au vérificateur STARK sur la chaîne. La vérification de cette preuve se fait de manière autonome via un contrat intelligent immuable sur Ethereum.

Cette architecture offre le meilleur des deux mondes : nous pouvons avoir de faibles coûts de transaction, tout en gardant Ethereum au milieu comme arbitre neutre. Ethereum en tant qu'arbitre n'est pas seulement un atout important ; il fournit une sécurité critique à l'utilisateur final. Une transaction utilisateur peut maintenant être confiante que ses fonds sont sécurisés par Ethereum, et que les transactions sont immuables une fois vérifiées sur Ethereum. L’utilisateur dispose également de l’autogarde complète de ses fonds. L'autogarde est importante parce qu'elle garantit à l'utilisateur l'accès à ses fonds en tout temps, sans compter sur un tiers.

### Où la disponibilité des données s'intègre-t-elle à tout cela?

Il est important de souligner à la fois ce que cette preuve fait ainsi que ce que fait*pas*. La preuve atteste de la validité du nouvel état, mais ne vous dit pas quel est le nouvel état. Pour cela, vous avez besoin de la disponibilité des données. Si nous avons seulement la preuve, alors la blockchain sait que ce qui a été soumis est valide, mais elle ne sait pas ce que le nouvel état (par ex. le solde du livre) est ! Les consommateurs de ces données comprennent les utilisateurs qui ont des transactions dans le cadre de ces preuves. Les données doivent être mises à leur disposition s'ils veulent retirer des fonds sur Ethereum sans devoir faire confiance à l'opérateur de la couche 2. Cela donne aux utilisateurs la pleine auto-garde de leurs fonds.

Une analogie pour cela est votre professeur de lycée vous demandant de prouver que x équivaut à x. C'est insignifiant à prouver. Quoi de plus difficile à répondre : à quoi est réellement égal x ? Pour cela, vous avez besoin d'une information séparée. Il pourrait être que x équivaut à 5, ou à une autre valeur. De même, sur la blockchain, une preuve STARK peut être soumise à un contrat intelligent de vérification STARK pour vérification. Et le vérificateur peut attester que la preuve est valide (que x=x). Mais vous avez besoin d'une entrée séparée pour vous dire quel est x (le nouveau solde du livre).

Il y a trois approches pour rendre ces données disponibles :

#### Mode déroulant

Le mode déroulant assure que l'état du registre est stocké sur Ethereum avec les épreuves. Le mode Rollup est actuellement utilisé par[dYdX](https://dydx.exchange/)en production, et est également utilisé par le réseau[Public StarkNet](http://starknet.io/)L2. Les avantages ici sont clairs : on peut recréer l'état du livre en interagissant uniquement avec la blockchain d'Ethereum. Cela implique que vous, en tant qu'utilisateur final, pouvez parler en toute confiance avec le contrat intelligent sur Ethereum, et retirez vos fonds même si le système Layer 2 s'arrête.

#### Valide

En mode Rollup, la majorité des coûts de gaz Ethereum sont imputés à la disponibilité des données et non à la vérification des preuves. C'est parce qu'il est très gourmand en gaz de stocker des données sur la blockchain. En mode Validium, les informations du registre ne sont pas envoyées à Ethereum. Il est plutôt stocké hors de la chaîne avec un comité de disponibilité des données. Ethereum stocke un hachage de ces informations de livre. Ce comité de disponibilité des données se compose d'un quorum de membres indépendants qui supervisent la mise à jour correcte de l'état ainsi que de conserver une copie des données traitées. Chaque instance de StarkEx peut créer son propre quorum. Les membres de Quorum pour les applications existantes exécutées sur StarkEx incluent des entités comme[Consensys](https://consensys.net/),[Nethermind](https://nethermind.io/),[Iqlusion](https://iqlusion.io/)et[Cephalopod](https://cephalopod.equipment/).

Les avantages en la matière sont clairs. Il n'est pas nécessaire de payer des frais de gaz Ethereum pour stocker les informations du grand livre sur la chaîne. Au contraire, la seule chose stockée sur Ethereum est un simple hachage des informations du livre. Si vous voulez retirer des fonds de la couche 2 en toute confiance en parlant à Ethereum, vous avez simplement besoin de la signature numérique d'un des membres du comité de disponibilité des données. Les membres du CAD utiliseront la cryptographie pour prouver que vous êtes propriétaire de ces fonds.

Un autre avantage caché de la disponibilité des données en Validium est la confidentialité des personnes qui lisent la blockchain. En mode Rollup, le solde de chaque compte au moment où chaque preuve est soumise est connu du public. Avec Validium, ces données sont cachées de la blockchain — seul le comité de disponibilité des données en est conscient, car elles sont maintenues hors chaîne. Ce niveau de confidentialité permet une grande variété de cas d'utilisation où l'obscurcissement des données de transactions est important.

#### Volition

La Volition est une architecture de disponibilité de données qui offre le choix entre le mode Validium et le mode Rollup au niveau de la transaction. Il le fait en conservant un grand livre sur la chaîne et un autre livre avec un comité de disponibilité des données. Les utilisateurs peuvent choisir entre le mode Validium et Rollup pour chaque transaction individuelle.

Imaginez que vous achetiez un NFT vraiment coûteux comme un Singe ennuyé ou un Cryptopunk, sur une application fonctionnant sur StarkEx. Vous pouvez utiliser le mode Rollup pour sécuriser les données pour ce NFT, parce que vous voulez un enregistrement de cette transaction spécifique stockée sur Ethereum. Cependant, vous pouvez alors acheter une PFN vraiment bon marché (p. ex. une cape pour votre personnage dans un jeu blockchain), et dans cette circonstance, vous serez heureux d'économiser de l'argent en utilisant Validium.

Si vous êtes intéressé par la taille obtenue par les preuves STARK, alors s'il vous plaît venir et construire sur nous.



Vous pouvez toujours envoyer un e-mail à[info@starkware.co](mailto:info@starkware.co)et un humain recevra votre email.