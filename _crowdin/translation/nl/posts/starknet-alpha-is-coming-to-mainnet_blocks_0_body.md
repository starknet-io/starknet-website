### TL;DR

* *StarkNet Alpha start tegen november op Mainnet Ethereum*
* De tijd om te bouwen op StarkNet is nu

### Een korte geschiedenis

We hebben ons zicht op[StarkNet](https://starkware.co/product/starknet/)aan het begin van het jaar aangekondigd: grootschalige schaalbaarheid naar Ethereum brengen terwijl de L1 beveiliging behouden blijft. toegestane interacties, decentralisatie.\
We hebben**[StarkNet Alpha](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)**vrijgegeven op een openbare testnet in juni. Deze versie ondersteund volledig permissionieke algemene berekening van Smart Contracts. Sinds twee keer upgraden: eerst naar**Alpha 1**- beschikbaar[L1<>L2 messaging en on-chain gegevens](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), en vervolgens**Alpha 2**- Ondersteunt[composability](https://medium.com/starkware/starknet-alpha-2-4aa116f0ecfc).

StarkNet Alpha 2 ondersteunt nu samengestelde smart contracts of general computation in een Ethereum-achtige toestand, met de mogelijkheid voor L1 en L2 contracten om met elkaar te communiceren. Lees meer[hier](https://www.cairo-lang.org/docs/hello_starknet/index.html).

### Wat is StarkNet Alpha op Mainnet?

StarkNet Alpha op Mainnet ondersteunt vergelijkbare functies als de openbare testnet van Goerli.

#### **Wat te verwachten**

Omdat StarkNet nog in ontwikkeling is, willen we stapsgewijs capaciteit invoeren en ervoor zorgen dat bij elke stap aan de verwachtingen van de ontwikkelaar wordt voldaan. Twee bijzonder belangrijke aspecten die we graag willen benadrukken:

* **Optimale Rollup collega's voor Smart Controle**: Wij volgen het verstandige speelboek dat is geïntroduceerd door hun Optimistische Rollup collega's: begin met*permissioned*contract deploying. Het protocol dat aangeeft hoe u kunt vragen om uw smart contract op te nemen in deze eerste whitelist zal de komende weken worden gepubliceerd.
* **Geen garantie voor compatibiliteit**: we verwachten de toekomstige overgang van StarkNet Alpha naar StarkNet Beta om regenesis van de staat op te nemen. Het netwerk begint vanaf blok 0 en applicaties zullen hun contracten opnieuw moeten herschikken. Bovendien moeten ontwikkelaars en gebruikers merken dat de verwachte StarkNet Beta mogelijk niet achterwaarts compatibel is met StarkNet Alpha, bijv. . ontwikkelaars moeten mogelijk hun contracten aanpassen. Het is duidelijk dat we zullen proberen toepassingen gemakkelijk te laten overstappen met minimaal noodzakelijke veranderingen.

#### Extra functies in de buurt

Als onderdeel van de overgang van StarkNet Alpha van testnet naar Mainnet zullen we het volgende doen:

1. Voeg constructoren toe aan contracten.
2. Verbeter het testframework.
3. Ga voor blokken en transacties van een ID naar het gebruik van een hash.

We zijn van plan om de inzet van nieuwe functies op een regelmatige cadance voort te zetten, net zoals we gedaan hebben op het publieke testnet. In de nabije termijn plannen we de volgende upgrades:

1. Klant contracten en Token contracten - wat de weg opent voor DeFi applicaties om te communiceren met StarkNet zoals ze bekend zijn.
2. Verbeterde contractfunctionaliteit - ondersteuning voor contractverbetering verbetering en evenementen.
3. Warp: de door Nederland ontwikkelde compiler Solidity-to-Cairo maakt een soepele overgang van smart contracts van Solidity naar StarkNet-smart contracts mogelijk.
4. Ethereum Signatures: native ondersteuning voor ECDSA over secp256k1 zal gemakkelijker integratie mogelijk maken met bestaande portemonnees.
5. StarkNet Full Node: een Full Node laat gebruikers toe om deel te nemen aan het netwerk met hardware vereisten op dezelfde manier als die van een Ethereum Full Node.

#### Vergoeding mechanisme

Het vergoedingenmechanisme zal worden ingeschakeld zodra account contracten en token contracten worden toegevoegd aan StarkNet Alpha.

Alle transacties die bij StarkNet zijn ingediend moeten een vergoeding betalen voor L1 en off-chain kosten. De kosten worden in eerste instantie in rekening gebracht in de ETH. De kosten van een enkele transactie zullen dalen, aangezien StarkNet zijn schaal verhoogt (zoals het geval is op alle bestaande systemen op STARK). Bij het maken van de initiële vergoedingsmechanismen geven we de voorkeur aan eenvoud boven het nauwkeurig prijsgeven van transacties afhankelijk van de middelen die ze gebruiken. Verwacht dat dit mechanisme in de loop der tijd zal worden verfijnd en verbeterd.

Met het oog op StarkNet tot een duurzaam netwerk en het stimuleren van de operatoren en ontwikkelaars, een deel van de inkomsten uit de vergoedingen zal worden verdeeld onder applicatie-ontwikkelaars en StarkNet core ontwikkelaars.

#### Beveiliging

Het veiligheidsmodel van StarkNet Alpha-op Mainnet zal het huidige model op testnet volgen:

* Elke overgang van een staat wordt ondersteund door een STARK-bewijs, dus wordt ervoor gezorgd dat deze geldig is.
* Alle staatsgegevens zullen worden gepubliceerd on-chain zodat de staat volledig te bouwen is van L1.
* Er zal één enkele sequentie zijn.
* Het netwerk kan zonder enige vertraging worden opgewaardeerd.

### Het StarkNet ecosysteem is aan het groeien

Openstelling van StarkNet naar de wereld trok een enorme golf van ontwikkelaars die geïnteresseerd waren in Cairo en zich wilden ontwikkelen via StarkNet. Ze hebben waardevolle feedback gegeven en het was een waar genoegen om levendige discussies te zien op het StarkNet[Discord](https://discord.gg/uJ9HZTUk2Y).

Bovendien wordt StarkNet niet alleen ontwikkeld door het StarkWare team, maar ook door enkele van de sterkste teams van het blockchain ecosysteem:

* Nederland werkt aan twee projecten:

1. **[Warp](https://github.com/NethermindEth/warp)**: een Solidity naar de compiler van Caïro

2. **[Voyager](https://voyager.online/)**: een StarkNet blok verkenner

* Open Zeppelin werkt aan een[Standaard Contracts](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)implementatie voor StarkNet en werkt ook aan de omgeving van een ontwikkelaar:[Nile](https://github.com/martriay/nile).
* ShardLabs werkt aan een[StarkNet HardHat plugin](https://github.com/Shard-Labs/starknet-hardhat-plugin)en een beter testkader.
* Het Erigon-team werkt aan het uitbreiden van hun Ethereum Full Node om StarkNet (codename: Fermion) te ondersteunen. Ze werken samen met ons aan het ontwerpen van kernmechanismen van StarkNet.
* Equilibrium is bezig met een StarkNet Full Node implementatie in Rust,
* Cairo auditservices: de komende maanden zullen ABDK, ConsenSys Diligence, Peckshield en Trail of Bits Cairo audits uitvoeren.
* StarkNet audits: we zijn begonnen met het controleren van de fundamenten van het netwerk:

1. **CryptoExperts**zullen een audit uitvoeren van de Caïro Solidity Verifier.
2. Een formeel**LEAN-bewijs**van de specificaties van Caïro is onlangs ingevuld en gepubliceerd als[papier](https://arxiv.org/abs/2109.14534)en een GitHub[repo](https://github.com/starkware-libs/formal-proofs).

Verwacht dat er in de komende maanden nog veel meer interessante samenwerking zal worden gepubliceerd!

### STARK's schalen vandaag

We naderen de lancering van StarkNet Alpha met vertrouwen, omdat StarkEx, onze op zichzelf staande schalen van SaaS, heeft laten zien hoe STARKs Ethereum applicaties op grote schaal kan uitbreiden. We hebben StarkEx gestart voor[dYdX](https://dydx.exchange/)(eeuwige contracten),[Deversifi](https://www.deversifi.com/)(spot trading en payments), evenals[Onveranderbaar](https://www.immutable.com/)en[Sorare](https://sorare.com/)(NFT minen en traden). We zagen hun gas/tx kosten met 100X–200 verlaagd, tot ongeveer 650 gas/tx in Validium (off-chain gegevens), en 1100 gas/tx voor een ZK-Rollup.

Tot op heden heeft StarkEx $80B in transacties en meer dan 27M transacties samengevoegd, waarbij hij elke andere L2-oplossing heeft overgeslagen - en ze allemaal samengevoegd.

### Nu gedragen

Er is nog nooit een beter moment geweest om deel te nemen aan het groeiende StarkNet ecosysteem door uw volgende dApp of nuttige ontwikkelaarshulpmiddelen te bouwen.

Wij nodigen je uit voor:

1. Word lid van[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y), waar je de StarkNet community kunt ontmoeten en erbij betrekken.
2. [Begin te leren](https://www.cairo-lang.org/docs/hello_starknet/index.html)hoe u Smart Contracts van StarkNet kunt schrijven.
3. [DM ons](https://twitter.com/StarkWareLtd)- ons team helpt graag je ideeën en initiatieven tot leven te brengen.

**Update (Nov. 2021):**StarkNet Alpha is live op Ethereum Mainnet