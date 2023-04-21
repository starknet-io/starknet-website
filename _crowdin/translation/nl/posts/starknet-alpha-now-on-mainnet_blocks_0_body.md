### TL;DR

* Alfa is live op Mainnet
* Het ondersteunt algemene berekening en uitvoerbaarheid
* Snelgroeiende gemeenschap, ontwikkeling van gereedschap en toepassingen
* Aanvullende functies die in de komende weken op continue basis moeten worden toegepast
* Disclaimer: dit is een Alpha versie (lees de kleine lettertjes hieronder)

### Introductie

StarkNet Alpha lanceert vandaag op Ethereum Mainnet!

StarkNet is een gedecentraliseerd Rollup dat werkt als een L2-netwerk boven Ethereum. StarkNet staat elke dApp toe ongelimiteerde schaal te bereiken voor de berekening, zonder afbreuk te doen aan de composabiliteit en beveiliging van Ethereum. dankzij het vertrouwen op het veiligste en meest schaalbare cryptografische systeem —[STARK](https://starkware.co/stark/). StarkNet is gebouwd op de[Cairo](https://starkware.co/cairo/)programmeertaal, de eerste productie-graad Turing complete von-Neumann verificer op Ethereum. Zowel Caïro als STARK zijn intern ontwikkeld door StarkWare en hebben al onze toepassingen van productie-kwaliteit aangedreven die sinds Zomer 2020 meer dan 50 miljoen ton en 250 miljard dollar hebben verdiend.

Naast andere functies maakt StarkNet Alpha algemene berekeningen van slimme contracten die composabiliteit ondersteunen, zowel met andere StarkNet contracten als via L1<>L2 messaging met L1 contracten. StarkNet Alpha werkt in een Rollup modus, wat betekent dat alle status diff gegevens on-chain worden verzonden.

Al in januari deelden we de StarkNet[roadmap](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880). In juni is StarkNet Alpha live gegaan op een openbare testnet, en is bijgewerkt met nieuwe functies op voortschrijdende basis. We zijn blij dat we op schema liggen te zitten, ten dele dankzij ons vertrouwen op onze moeilijk te produceren gevechtsproject STARK/Cairo softwarestack.

### Hoe moet je StarkNet Alpha?

Ten eerste met grote voorzichtigheid, want het ‘Alpha’-label is er om een reden. Verwacht veranderingen, fixes en verbeteringen in de toekomst. StarkNet Alpha moet nog worden gecontroleerd, en we kunnen een dergelijke audit vertragen tot het netwerk nog wat meer is (lees de disclaimer aan het einde van deze post voor meer informatie).

Over het algemeen volgen we de voorzichtige en verstandige weg die door onze collega's van de Optimistische Rollup is uitgezet, namelijk Arbitrum en Optimisme: start het netwerk met een enkele sequencer, en whitelist-applicaties om ervoor te zorgen dat hun ontwikkelaars de risico's begrijpen. We blijven ons volledig inzetten voor een volledige decentralisatie van StarkNet.

En hoe moet je omgaan met de economieën van StarkNet Alpha? De Alpha zal beginnen zonder transactiekosten. De volgende upgrade, slechts een paar weken later, zal een vergoedingenmechanisme introduceren - we zullen meer details delen in een aparte post.

### Begin gebouw

We nodigen je uit om je eigen applicaties te schrijven over StarkNet door het (nieuw!) te controleren [website](http://starknet.io/), of spring direct naar de[tutorial](https://starknet.io/docs/).

Als u klaar bent om te implementeren, volg dan deze[onboarding proces](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu); om ervoor te zorgen dat alle ontwikkelaars goed op de hoogte zijn van de voorlopige staat van het systeem.

### ecosysteem

De afgelopen maanden hebben we een verbazingwekkende groei gezien in de omvang en de activiteit van de StarkNet-gemeenschap. welke congregeert op[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y). Tientallen ontwikkelaars – teams en individuen – in het blockchain ecosysteem leveren een bijdrage aan deze inspanning. (Zie de disclaimer aan het einde van dit bericht)

#### Hulpmiddelen voor ontwikkelaars

* OpenZeppelin definieert standaardcontracten. Hun[repo](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)en[discussies](https://github.com/OpenZeppelin/cairo-contracts/discussions)zijn het volgen waard
* De[Warp](https://github.com/NethermindEth/warp)Solidity->Cairo transpiler, ontwikkeld door Nederland.
* Shard Labs[HardHat plugin](https://github.com/Shard-Labs/starknet-hardhat-plugin)en[StarkNet Devnet](https://github.com/Shard-Labs/starknet-devnet)
* Argent is gereedschap aan het ontwikkelen, inclusief zijn gezamenlijke inspanning op StarkNet.js, naast[Sean Han](https://twitter.com/seanjameshan), de maker ervan

#### Infrastructuur

**blokverkenner**:

* [Voyager](http://voyager.online/)project door Nederland
* [Eth.tx](https://ethtx.info/)biedt ondersteuning analyse en een gedetailleerde weergave van StarkNet transacties

**Full nodes**: twee inspanningen onderweg: een is het Fermion project geleid door Erigon, de andere is het[Pathfinder](https://github.com/eqlabs/pathfinder)project, geleid door Equilibrium

**Portemonnee**:

* [Argentinië](https://github.com/argentlabs/argent-x)is een browserextensie ontwikkeld door Argent, al beschikbaar voor devs
* Torus sleuteloplossing voor beheer is klaar voor StarkNet
* Ledger is een native StarkNet app aan het ontwikkelen; beschikbaar te maken voor het einde van het jaar

**Cairo Audits**: ConsenSys Diligence, Trail of Bits, Peckshield, en ABDK voeren al audits uit van Cairo, of willen binnenkort beginnen

**API Services**: nadat een volledige StarkNet node beschikbaar is, worden API-diensten aangeboden door Figment, Chainstack en Infura

**Indexer**: we zullen werken aan de integratie van TheGraph om samen met StarkNet te werken, samen met het Figment Team

### De weg vooruit

In de komende weken en maanden zullen we de Alfa upgraden met de volgende mogelijkheden:

* Contractverbeteringsmechanisme
* Vergoeding mechanisme
* Evenementen
* Toevoeging van ontbrekende syscalls (get_block_number, get_block_timestamp, en meer)
* Skelet versie van stem
* En veel meer …

Zie de voorzichtige routekaart[voor het volgen van deze inspanning op basis van voortgezette routebeschrijving](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51).

Vooruitkijkend blijven we zwaar investeren in actief onderzoek op meerdere fronten (kom samen met de[Shamans](https://community.starknet.io/)inspanning):

* Decentralisatie
* Schalen
* Gegevens beschikbaar
* Soepeloze aanmoediging

### Oproep aan actie

* Start contracten schrijven op het toegestane StarkNet testnet op Goerli
* Word lid van[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)
* Word lid van de community oproepen
* Deelnemen aan de eerste[StarkNet Ecosystem Summit](https://www.eventbrite.com/e/starknet-ecosystem-summit-2022-tickets-206671880157)(Jan 27–28 2022, Stanford CA)
* Sluit je aan bij de[StarkNet Shamans](https://community.starknet.io/)voor een dieper duiven in onderzoeksuitdagingen

### Disclaimer

***StarkNet Alpha is een nieuw en complex systeem dat niet volledig is gecontroleerd. Net als alle complexe softwaresystemen kan het Starknet-systeem bugs bevatten die in het uiterste geval kunnen leiden tot een verlies van al uw geld. Dus,***trad voorzichtig en pas op!******

*Het StarkNet ecosysteem is een groot en snel groeiend geheel van onafhankelijke teams en individuen, waarop StarkWare geen toezicht heeft en geen verantwoordelijkheid neemt. Elk van de projecten die door leden van het ecosysteem worden ontwikkeld kan bugs bevatten die in extreme gevallen kunnen leiden tot een verlies van al uw geld. Bovendien neemt het potentieel voor onbedoelde schadelijke bugs en zelfs kwaadwillende zwendel en tapijt toe, naarmate er meer slimme contracten worden gebruikt. Behandel dus alle smart contracts op StarkNet terwijl je smart contracts op Ethereum behandelt, en gebruik alleen degenen die u met recht en reden als veilig kunt vertrouwen.*