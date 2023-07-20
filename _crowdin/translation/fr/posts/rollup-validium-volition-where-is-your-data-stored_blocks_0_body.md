### TL;DR

* StarkWare propose une gamme de modes de disponibilité des données (DA) parmi lesquels les clients peuvent choisir, en fonction de leur priorité
* Il existe trois approches de Data Availability pour les épreuves STARK, toutes déjà disponibles en production :\
  —**Rollup**: le ledger est publié directement sur la blockchain\
  —**Validium**: un Data Availability Committee sécurise le ledger, avec seulement un hachage stocké sur la chaîne\
  —**Volition**: les applications peuvent laisser les utilisateurs choisir leur mode DA — Rollup ou Validium — pour chaque transaction
* Quel que soit le DA utilisé, la validité de toutes les transactions est garantie par les STARK

### Introduction

En novembre 2022,[StarkEx](https://starkware.co/starkex/)avait réglé plus de 750 milliards de dollars de volume de transactions et plus de 270 millions de transactions sur Ethereum. Dans l'espace NFT, alimentant des applications telles que ImmutableX et Sorare, StarkEx a frappé plus de 85 millions de NFT à un prix 1000 fois moins cher que de le faire directement sur Ethereum. La technologie basée sur STARK fait évoluer Ethereum. Par exemple, en une seule semaine, StarkEx a exécuté 1,6 fois plus de transactions qu'Ethereum (12 millions sur StarkEx contre 7,5 millions sur Ethereum) tout en occupant moins de 0,1 % de l'espace de bloc Ethereum. Et tout cela en offrant aux utilisateurs le même niveau de sécurité que s'ils s'installaient directement sur Ethereum.

### Comment StarkWare y parvient-il ?

Les utilisateurs envoient des transactions sur la couche 2 (soit StarkEx, soit StarkNet), qui sont regroupées et envoyées à un prouveur STARK. Ce prouveur STARK connaît l'état du grand livre avant et après le traitement de ces transactions. Le prouveur produit une preuve STARK qui atteste de la validité du nouvel état du registre après l'exécution de ces transactions. Le nouvel état et la preuve STARK sont envoyés au vérificateur STARK en chaîne. La vérification de cette preuve se fait de manière autonome via un contrat intelligent immuable sur Ethereum.

Cette architecture offre le meilleur des deux mondes : nous pouvons avoir de faibles coûts de transaction, tout en ayant Ethereum au milieu en tant qu'arbitre neutre. Ethereum en tant qu'arbitre n'est pas seulement un atout ; il fournit une sécurité critique à l'utilisateur final. Un utilisateur effectuant des transactions peut désormais être sûr que ses fonds sont sécurisés par Ethereum, et les transactions sont immuables une fois qu'elles sont vérifiées sur Ethereum. L'utilisateur a également l'auto-garde complète de ses fonds. L'auto-conservation est importante car elle garantit que l'utilisateur a accès à ses fonds à tout moment, sans dépendre d'un tiers.

### Quelle est la place de la disponibilité des données dans tout cela ?

Il est important de souligner à la fois ce que fait cette preuve et ce qu'elle*fait*. La preuve atteste de la validité du nouvel état, mais elle ne vous dit pas quel est le nouvel état. Pour cela, vous avez besoin de la disponibilité des données. Si nous n'avons que la preuve, alors la blockchain sait que ce qui a été soumis est valide, mais elle ne sait pas quel est le nouvel état (par exemple, le solde du grand livre) ! Les consommateurs de ces données incluent les utilisateurs qui ont des transactions au sein de ces preuves. Les données doivent être mises à leur disposition s'ils souhaitent retirer des fonds sur Ethereum sans avoir besoin de faire confiance à l'opérateur de couche 2. Cela donne aux utilisateurs une pleine garde de leurs fonds.

Une analogie pour cela est que votre professeur de lycée vous demande de prouver que x est égal à x. C'est trivial à prouver. Quelle est la réponse la plus difficile : à quoi x est-il réellement égal ? Pour cela, vous avez besoin d'une information distincte. Il se peut que x soit égal à 5 ou à une autre valeur. De même, sur la blockchain, une preuve STARK peut être soumise à un contrat intelligent de vérificateur STARK pour vérification. Et le vérificateur peut attester que la preuve est valide (que x=x). Mais vous avez besoin d'une entrée distincte pour vous dire ce qu'est x (le nouveau solde du grand livre).

Il existe trois approches pour rendre ces données disponibles :

#### Mode cumul

Le mode cumul garantit que l'état du grand livre est stocké sur Ethereum avec les preuves. Le mode cumul est actuellement utilisé par[dYdX](https://dydx.exchange/)en production, et est également utilisé par le réseau[Public StarkNet](http://starknet.io/)L2. Les avantages ici sont clairs : on peut recréer l'état du grand livre en interagissant uniquement avec la blockchain Ethereum. Cela implique que vous, en tant qu'utilisateur final, pouvez parler en toute confiance au contrat intelligent concerné sur Ethereum et retirer vos fonds même si le système de couche 2 s'arrête.

#### Validium

En mode Rollup, la majorité des coûts du gaz Ethereum vont à la disponibilité des données, et non à la vérification des preuves. En effet, il est très gourmand en gaz de stocker des données sur la blockchain. En mode Validium, les informations du grand livre ne sont pas envoyées à Ethereum. Au lieu de cela, il est stocké hors chaîne avec un comité de disponibilité des données. Ethereum stocke un hachage de ces informations de grand livre. Ce comité de disponibilité des données se compose d'un quorum de membres indépendants qui supervisent la mise à jour correcte de l'état et conservent une copie des données qui ont été traitées. Chaque instance StarkEx peut créer son propre quorum. Les membres du quorum pour les applications existantes fonctionnant sur StarkEx incluent des entités telles que[Consensys](https://consensys.net/),[Nethermind](https://nethermind.io/),[Iqlusion](https://iqlusion.io/)et[Cephalopod](https://cephalopod.equipment/).

Les avantages ici sont clairs. Il n'est pas nécessaire de payer des frais de gaz Ethereum pour stocker les informations du grand livre en chaîne. Au contraire, la seule chose stockée sur Ethereum est un seul hachage des informations du grand livre. Si vous souhaitez retirer des fonds de la couche 2 en toute confiance en parlant à Ethereum, vous avez simplement besoin de la signature numérique de l'un des membres du comité de disponibilité des données. Les membres du CAD utiliseront la cryptographie pour prouver que vous êtes propriétaire de ces fonds.

Un autre avantage caché de Validium Data Availability est la confidentialité vis-à-vis des personnes lisant la blockchain. En mode Rollup, le solde de chaque compte au moment où chaque justificatif est soumis est connu du public. Avec Validium, ces données sont cachées de la blockchain - seul le comité de disponibilité des données en est conscient, car elles sont conservées hors chaîne. Ce niveau de confidentialité permet une grande variété de cas d'utilisation où l'obscurcissement des données de transaction est important.

#### Volition

Volition est une architecture de disponibilité des données qui offre le choix entre Validium et Rollup Mode au niveau de la transaction. Pour ce faire, il conserve un registre en chaîne et un autre registre avec un comité de disponibilité des données. Les utilisateurs peuvent choisir entre les modes Validium et Rollup pour chaque transaction individuelle.

Imaginez que vous achetez un NFT très cher comme un Bored Ape ou un Cryptopunk, sur une application fonctionnant sur StarkEx. Vous pouvez utiliser le mode Rollup pour sécuriser les données de ce NFT, car vous souhaitez qu'un enregistrement de cette transaction spécifique soit stocké sur Ethereum. Cependant, vous pouvez alors acheter un NFT vraiment bon marché (par exemple, une cape pour votre personnage dans un jeu blockchain), et dans ce cas, vous serez heureux d'économiser de l'argent en utilisant Validium.

Si vous êtes intéressé par l'échelle atteinte par les épreuves STARK, alors s'il vous plaît, venez nous appuyer.



Vous pouvez toujours envoyer un e-mail à[info@starkware.co](mailto:info@starkware.co)et un humain accédera à votre e-mail.