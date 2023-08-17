### TL;DR

* Vydáváme Káhiru 1.0-alfa.2, která přináší mnoho nových funkcí do jazyka
* Nyní je možné provést smlouvu ERC20
* Tyto nové jazykové funkce budou použitelné v nadcházející verzi StarkNet-v0.11.0

### Nové funkce!

Káhira 1.0 pokračuje ve svém rychlém zlepšování. Dnešní vydání mimo jiné zavádí všechny potřebné prvky pro vypracování smlouvy ERC-20.

Abych zmínil některé nové funkce:

* Slovníky
* Události ve smlouvách
* Proměnné úložiště mapování
* Podpora znaků
* Typ ference
* Metody

Viz kompletní seznam v GitHub [repozitáři.](https://github.com/starkware-libs/cairo)

Podívejme se na příklad smlouvy ERC20 (úplný konkrétní příklad je samozřejmě na[GitHub](https://github.com/starkware-libs/cairo/blob/main/crates/cairo-lang-starknet/test_data/erc20.cairo)) k prokázání použití případu události a mapování v úložišti:

![](/assets/0_i4ch5-4rxxal4rkt.png)

### Přejít na vodu!

Nadále pracujeme na dvou paralelních vektorech:

1. Vyvinout Káhiru 1.0 plnou rychlostí směrem k plné kompatibilitě se starým Káhirem.
2. Vyvinout Starknet v0.11.0, který bude podporovat smlouvy napsané v Káhiře 1.0

Mezitím povzbuzujeme ďábely, aby začali psát s Káhirou 1.0 a seznámili se s ní.

Pro jakékoliv otázky — můžeš použít Káhiru 1.0 Discord[kanál](https://discord.com/channels/793094838509764618/1065544063245365288).

Pro jakékoliv návrhy nebo zpětnou vazbu - neváhejte otevřít[problém](https://github.com/starkware-libs/cairo/issues)v Káhiře.