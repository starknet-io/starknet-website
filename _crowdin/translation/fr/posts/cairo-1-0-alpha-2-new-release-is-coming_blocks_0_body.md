### TL;DR

* Nous libérons le Cairo 1.0-alpha.2, qui apporte une foule de nouvelles fonctionnalités dans la langue
* Il est maintenant possible de mettre en œuvre un contrat ERC20
* Ces nouvelles fonctionnalités linguistiques seront applicables dans la prochaine version de StarkNet-v0.11.0

### Nouvelles fonctionnalités nouvelles!

Le Caire 1.0 poursuit son rythme d'amélioration rapide. La publication d’aujourd’hui introduit entre autres toutes les fonctionnalités nécessaires à la rédaction d’un contrat ERC-20.

Pour mentionner certaines des nouvelles fonctionnalités :

* Dictionnaires
* Événements dans les contrats
* Mappage des variables de stockage
* Support de la Trait
* Inférence de type
* Méthodes

Voir la liste complète dans le dépôt GitHub [.](https://github.com/starkware-libs/cairo)

Examinons un exemple de contrat ERC20 (le plein exemple concret est, bien sûr, sur[GitHub](https://github.com/starkware-libs/cairo/blob/main/crates/cairo-lang-starknet/test_data/erc20.cairo)) pour démontrer un cas d'utilisation d'un événement et des mappings dans le stockage :

![](/assets/0_i4ch5-4rxxal4rkt.png)

### Sautez dans l'eau !

Nous continuons à travailler sur deux vecteurs parallèles:

1. Evolve Cairo 1.0 à pleine vitesse vers la compatibilité avec l'ancien Caire.
2. Développer Starknet v0.11.0 qui prendra en charge les contrats écrits au Caire 1.0

Pendant ce temps, nous encourageons les développeurs à commencer à écrire avec Cairo 1.0 et à se familiariser avec lui.

Pour toute question — vous pouvez utiliser le canal[Discord Cairo 1.0](https://discord.com/channels/793094838509764618/1065544063245365288).

Pour toute suggestion ou commentaire, n'hésitez pas à ouvrir un[problème](https://github.com/starkware-libs/cairo/issues)dans le dépôt du Caire.