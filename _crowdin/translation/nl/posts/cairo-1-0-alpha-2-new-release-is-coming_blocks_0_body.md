### TL;DR

* We brengen Cairo 1.0-alpha.2 vrij die een heleboel nieuwe functies in de taal brengt
* Het is nu mogelijk om een ERC20-contract uit te voeren
* Deze nieuwe taalfuncties zullen van toepassing zijn in de aankomende StarkNet-v0.11.0 versie

### Verse nieuwe functies!

Caïro 1.0 zet zijn snelle verbeteringstempo voort. De release van vandaag introduceert onder andere alle benodigde functies om een ERC-20 contract te schrijven.

Om enkele van de nieuwe functies te noemen:

* Woordenboeken
* Evenementen in contracten
* Opslagvariabelen toewijzen
* Eigenschap ondersteuning
* Type conclusie
* Methoden

Bekijk de volledige lijst in de GitHub [repository,](https://github.com/starkware-libs/cairo)

Laten we eens kijken naar een voorbeeld van een ERC20-contract (het volledige concrete voorbeeld is natuurlijk op[GitHub](https://github.com/starkware-libs/cairo/blob/main/crates/cairo-lang-starknet/test_data/erc20.cairo)) om de geval van een event en toewijzingen in de opslag te laten zien:

![](/assets/0_i4ch5-4rxxal4rkt.png)

### Spring in het water!

We blijven werken aan twee parallelle vectoren:

1. Evolueer Cairo 1.0 met volledige snelheid naar volledige compatibiliteit met de oude Cairo.
2. Ontwikkel Starknet v0.11.0 die contracten in Caïro 1.0 ondersteunt

In de tussentijd moedigen we devs aan om te beginnen met schrijven in Caïro 1.0 en vertrouwd te raken met Caïro.

Voor vragen - u kunt het Caïro 1.0 Discord[kanaal](https://discord.com/channels/793094838509764618/1065544063245365288) gebruiken.

Voor suggesties of feedback - aarzel niet om een[-issue](https://github.com/starkware-libs/cairo/issues)te openen in de Caïro-repo.