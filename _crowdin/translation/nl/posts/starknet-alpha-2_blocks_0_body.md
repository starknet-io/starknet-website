### TL;DR

* StarkNet ondersteunt nu de composability, de belangrijkste functie die SongNet's Constellatiefase definieert.
* We zijn bezig een testkader voor StarkNet vrij te geven - ontwikkelaars kunnen nu hun contracten lokaal en effectief testen.
* Deze release bevat verschillende opmerkelijke verbeteringen, zoals steun voor Merkle-Patricia Tries en een ingebouwd voor bitwise operaties.
* Ecosysteem front:

1. **gestandaardiseerde contracten voor**: OpenZeppelin zal gestandaardiseerde contracten voor StarkNet ontwikkelen, zoals voor Ethereum!
2. **EVM->Cairo Compiler**: het Warp team @ Nethermind heeft een compilatie van ERC-20 Solidity code aan StarkNet contracts laten zien

### Achtergrond

StarkNet is een gedecentraliseerde Validity-Rollup (ook wel een "ZK-Rollup"). We hebben de[roadmap](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)aan het begin van het jaar aangekondigd. De[Alpha](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), die momenteel wordt uitgevoerd op een openbare Ethereum-testnet, Smart contracts die elke bedrijfslogica implementeren, met L1<>L2 messaging en on-chain gegevens al zonder permissies. Bovendien staat het elke gebruiker toe om transacties zonder rechten naar het netwerk Ethereum-stijl te verzenden.

Deze release: StarkNet Alpha 2 bevat de kernfunctie die ons in staat stelt vooruitgang te boeken van Planets naar Constellaties: samenvoegbaarheid tussen geïmplementeerde smart contracts.

### Eigenschappen

Alpha StarkNet 2 introduceert de volgende functies:

* **Composabiliteit:**StarkNet Alpha ondersteunt nu interactie tussen slimme contracten - vóór schema! De schoonheid van deze upgrade is dat ontwikkelaars bijna dezelfde ervaring kunnen verwachten als Ethereum; Aanroepen zijn gesynchroniseerd en kunnen worden gebruikt als functie-oproepen. We wachten met spanning op de nieuwe toepassingen die zullen profiteren van zowel onbeperkte computerschaal als contractcomposabiliteit, zoals ontketend door StarkNet. Om te begrijpen hoe je deze functie moet gebruiken, kan je beginnen met het volgen van deze[handleiding](https://www.cairo-lang.org/docs/hello_starknet/calling_contracts.html). We horen graag uw feedback en zien graag wat u bouwt op de[StarkNet discord](https://discord.gg/uJ9HZTUk2Y).
* **Lokaal testframework:**dat je hebt gevraagd en we hebben je geleverd — een[beter testframework](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/starknet/testing). Dit stelt ontwikkelaars in staat hun dApp ontwikkeling te versnellen door hun StarkNet contracten en interacties lokaal te testen - zonder externe afhankelijkheden. Deze versie bevat alleen L2 interactie, de volgende versies zullen de functionaliteit en het gebruiksgemak uitbreiden. Bekijk de tutorial[hier](https://www.cairo-lang.org/docs/hello_starknet/unit_tests.html), en we horen graag uw feedback over die functie.
* **Verbeteringen van prestaties:**

**Patricia Bomen:**we hebben het ontwerp van StarkNet, verbeterd om betere doorputs en kortere bewijstijd te ondersteunen door over te gaan naar Merkle-Patricia Tree state commitment ([documentation](https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/cairo/common/patricia_utils.py)). Deze wijziging maakt het mogelijk om veel grotere blokken te maken, waardoor de kosten per transactie dalen. Cairo, de ZKP-taal – een kernonderdeel van het StarkNet-besturingssysteem – heeft de overgang naar een meer geavanceerde staatsverplichting mogelijk gemaakt.

**Bitwise Operaties:**we hebben een[builtin](https://www.cairo-lang.org/docs/how_cairo_works/builtins.html)toegevoegd om veel efficiëntere bitwise operaties in StarkNet contracten te ondersteunen ([documentatie](https://www.cairo-lang.org/docs/reference/common_library.html#common-library-bitwise)).

* **Goerli:**StarkNet beweegt van Ropsten naar[Goerli](https://goerli.etherscan.io/address/0xee02F29aE9A4988aE064940bF11954d6eafE26Ac)! Eindelijk hebben we ons systeem bevrijd uit de grillen van de goden van de Ropsten. Alpha 2 zal nu over een stabielere ontwikkelingsomgeving lopen.

### ecosysteem

Het StarkNet ecosysteem groeit voortdurend, en we delen graag het laatste nieuws:

* **Standaardcontracten**: we zijn vereerd om te werken met OpenZeppelin op de standaard contract bibliotheek van StarkNet. Hun kanonische werk aan de standaardcontracten van Ethereum komt ons allemaal ten goede, en we vertrouwen erop dat ze hier net zo impactvol zullen zijn.
* **EVM->Cairo Compiler**: Nederland's Warp team[demonstreerde](https://medium.com/nethermind-eth/warp-your-way-to-starknet-ddd6856875e0)transpilatie van een ERC-20 contract van EVM bytecode tot een StarkNet contract en inzet op StarkNet. Deze inspanning vordert snel, en ons volgende doel is de transpilatie van willekeurige smart contracts van Yul naar Caïro.
* **Maker-on-StarkNet**: een[voorstel](https://forum.makerdao.com/t/mip39c2-sp19-adding-the-starknet-engineering-core-unit-sne-001/9745)is ingediend bij de Maker DAO om het Maker-protocol uit te voeren boven StarkNet. De eerste fase stelt een DAI-brug van Ethereum naar StarkNet voor met het minen van DAI op StarkNet om te volgen.
* **StarkNet/Cairo Auditing Services**: we betrekken meerdere auditbedrijven om StarkNet Smart Contracts en Cairo auditservices aan te bieden.

### Hoofdnet rond de hoek

We maken ons klaar voor de StarkNet Alpha Mainnet lancering, die geleidelijk begint met een set applicaties op de witte lijst. Er zijn verscheidene projecten van start gegaan en er worden er dagelijks meer projecten toegevoegd. Om lid te worden van het feest ben je uitgenodigd om uit te komen via[discord](https://discord.gg/uJ9HZTUk2Y).

**Update (Nov. 2021):**StarkNet Alpha is live op Ethereum Mainnet