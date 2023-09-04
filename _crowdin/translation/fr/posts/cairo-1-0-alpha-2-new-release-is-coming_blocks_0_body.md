### TL;DR

* Nous publions Cairo 1.0-alpha.2, qui apporte une foule de nouvelles fonctionnalités au langage
* Il est désormais possible de mettre en place un contrat ERC20
* Ces nouvelles fonctionnalités linguistiques seront applicables dans la prochaine version de StarkNet-v0.11.0

### De nouvelles fonctionnalités fraîches !

Cairo 1.0 poursuit son rythme d'amélioration rapide. La version d'aujourd'hui introduit, entre autres, toutes les fonctionnalités nécessaires pour rédiger un contrat ERC-20.

Pour mentionner quelques-unes des nouvelles fonctionnalités :

* Dictionnaires
* Événements dans les contrats
* Mappage des variables de stockage
* Prise en charge des traits
* Inférence de type
* Méthodes

Voir la liste complète dans le référentiel GitHub [.](https://github.com/starkware-libs/cairo)

Jetons un coup d'œil à un exemple de contrat ERC20 (l'exemple concret complet est, bien sûr, sur[GitHub](https://github.com/starkware-libs/cairo/blob/main/crates/cairo-lang-starknet/test_data/erc20.cairo)) pour démontrer un cas d'utilisation d'un événement et des mappages dans le stockage :

![](/assets/0_i4ch5-4rxxal4rkt.png)

### Sauter dans l'eau!

Nous continuons à travailler sur deux vecteurs parallèles :

1. Faites évoluer Cairo 1.0 à toute vitesse vers une compatibilité complète avec l'ancien Cairo.
2. Développer Starknet v0.11.0 qui prendra en charge les contrats écrits en Cairo 1.0

En attendant, nous encourageons les développeurs à commencer à écrire avec Cairo 1.0 et à se familiariser avec.

Pour toute question — vous pouvez utiliser le canal Cairo 1.0 Discord[](https://discord.com/channels/793094838509764618/1065544063245365288).

Pour toute suggestion ou commentaire, n'hésitez pas à ouvrir un[issue](https://github.com/starkware-libs/cairo/issues)dans le repo du Caire.