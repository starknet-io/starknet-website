Blockchain schaalbaarheid is altijd een verwarmd onderwerp geweest. Bijna elk blockchainnetwerk raakt een hoog aantal transacties per seconde (TPS) als verkooppunt. TPS is echter geen geldige metrisch om blockchainnetwerken te vergelijken - waardoor het een uitdaging is om hun relatieve prestaties te evalueren. Bovendien gaan grote TPS-nummers meestal ten koste – wat de vraag oproept: schaalgrootte van deze netwerken. of verhogen ze gewoon hun doorvoer?

Laten we daarom onderzoeken hoe we schaalbaarheid kunnen definiëren, welke transacties worden gemaakt om dit te bereiken, en waarom Validity Rollups de ultieme schaalbaarheidsoplossing zijn.

### Niet alle transacties zijn gelijk

Ten eerste moeten we onze bewering vaststellen dat de eenvoudige en handige metrische toepassing van TPS geen juiste maatstaf van schaalbaarheid is.

Om nodes te compenseren voor het uitvoeren van transacties (en gebruikers ervan te weerhouden het netwerk te spammen met onnodige berekeningen), blockchains berekenen een vergoeding in verhouding tot de rekenlast die op de blockchain wordt opgelegd. In Ethereum wordt de complexiteit van de computational burden gemeten in*gas.*Omdat gas een heel handige maat is van transactiecomplexiteit, de term zal in dit artikel ook voor niet-Ethereum-blockchains worden gebruikt, ook al is het meestal Ethereum-specifiek.

Transacties verschillen aanzienlijk in complexiteit en dus in hoeveel gas ze verbruiken. Bitcoin, de pionier van vertrouwelijke peer-to-peer transacties, ondersteunt alleen het rudimentaire Bitcoin script. Deze eenvoudige overdrachten van adres naar adres gebruiken weinig gas. Smart Contracts-ketens zoals Ethereum of Solana ondersteunen daarentegen een virtuele machine en Turing-complete programmeertalen die veel complexere transacties mogelijk maken. Daarom hebben dApps zoals Uniswap veel meer gas nodig.

Dit is waarom het geen zin heeft om de TPS van verschillende blockchains te vergelijken. Wat we in plaats daarvan zouden moeten vergelijken is de capaciteit voor berekening – of doorvoer.

Alle Blockchains hebben een (variabele) blokgrootte en bloktijd die bepaalt hoeveel*eenheden berekening*per blok verwerkt kunnen worden en hoe*snel*een nieuw blok toegevoegd kan worden. Samen bepalen deze twee variabelen de*doorvoer*van een blockchain.

### Wat zijn de beperkingen van de calabiliteit?

Blockchains streven naar maximale decentralisatie, inclusief netwerken. Om dit te bereiken moeten twee fundamentele eigenschappen gecontroleerd worden.

#### **1. Hardware vereisten**

De decentralisatie van een blockchain-netwerk wordt bepaald door de mogelijkheid van de zwakste node in het netwerk om de blockchain te verifiëren en de status ervan vast te houden. Daarom zijn de kosten voor het runnen van een knooppunt (hardware, bandbreedte, en opslag) moeten zo laag mogelijk worden gehouden, zodat zoveel mogelijk individuen getolereerd kunnen worden in het vertrouwensloze netwerk.

#### 2**.**State Growth

Staatsgroei verwijst naar hoe snel de blockchain groeit. Hoe meer doorvoer, een blockchain kan gebeuren per eenheid van tijd, hoe sneller de blockchain groeit. Volledige nodes slaan de geschiedenis van het netwerk op en ze moeten de status van het netwerk kunnen valideren. De staat Ethereum wordt opgeslagen en gerefereerd met behulp van efficiënte structuren zoals bomen. Naarmate de staat groeit, worden er nieuwe bladeren en takken aan toegevoegd, waardoor het steeds ingewikkelder en tijdrovender wordt om bepaalde acties uit te voeren. Naarmate de keten groter wordt, verslechtert het de slechtst mogelijke uitvoering door knooppunten, wat leidt tot een steeds groeiende tijd om nieuwe blokken te valideren. Na verloop van tijd verhoogt dit ook de totale tijd die het kost om een volledige node te synchroniseren.

### Detrimentale effectbeoordelingen van Vergroting gedurende de hele

#### 1. Node aantal

The minimum requirements for run a node and node counts are:

* Bitcoin1: 350GB HDD schijfruimte, 5 Mbit/s verbinding, 1GB RAM, CPU >1 Ghz. **Aantal nodes: ~10.000**
* Ethereum2: 500GB+ SSD schijfruimte, 25 Mbit/s verbinding, 4–8GB RAM, CPU 2–4 kerns. **Aantal nodes: ~6.000**
* Solana3: 1.5TB+ SSD schijfruimte, 300 Mbit/s connectie, 128GB RAM CPU 12+ kerns. **Aantal nodes: ~1,200**

Merk op dat hoe groter de CPU, bandbreedte en opslagvereisten voor nodes die nodig zijn voor de doorvoer van een blockchain, de minder knooppunten op het netwerk - wat leidt tot een zwakkere decentralisatie en een minder inclusief netwerk.

#### 2. Tijd om een Full Node te synchroniseren

Wanneer een node voor de eerste keer draait, moet deze synchroniseren met alle bestaande nodes, downloaden, en bevestig de status van het netwerk helemaal vanaf het genesis-blok tot het puntje van de keten. Dit proces moet zo snel en efficiënt mogelijk verlopen zodat iedereen zich kan gedragen als een permissie deelnemer aan het protocol.

Take Jameson Lopp’s[2020 Bitcoin Node](https://blog.lopp.net/2020-bitcoin-node-performance-tests/)en[2021 Node Sync Testen](https://blog.lopp.net/2021-altcoin-node-sync-tests/)als indicator Tabel 1 vergelijkt de tijd die nodig is om een volledige node van Bitcoin vs te synchroniseren. Ethereum vs. Solana op een gemiddeld consumptiepatroon van hoog niveau.

![Tabel 1. Blockchain doorvoer en node-sync vergelijking](/assets/1_gmpi_1c9zipoc-znrh7b5q.png "Tabel 1. Blockchain doorvoer en node-sync vergelijking")

Tabel 1 laat zien dat toenemende doorvoer tot langere synchronisatietijden leidt, omdat er steeds meer gegevens moeten worden verwerkt en opgeslagen.

Hoewel verbeteringen in de node software voortdurend worden aangebracht om de uitdaging van de groeiende blockchain te verzachten (verlaging van de schijfvoetafdruk, snellere synchronisatie snelheden, sterkere crash resilientie, modulatie van bepaalde componenten, etc. , het knooppunt kan klaarblijkelijk nog steeds geen gelijke tred houden met stijgingen tot doorvoer.

### Hoe moet schaalbaarheid worden gedefinieerd?

Schaalbaarheid is de meest verkeerde term in de blockchain-ruimte. Hoewel een grotere doorvoer wenselijk is, is het slechts één deel van de puzzel.

***Schaalbaarheid**betekent**meer transacties**voor**dezelfde hardware**.*

Schaalbaarheid kan daarom worden ingedeeld in twee categorieën.

#### Schaalbaarheid van equencer

Sequencing beschrijft het bestellen en verwerken van transacties in een netwerk. Zoals eerder het geval is elke blockchain kan zijn doorvoer triviaal verhogen door de blokgrootte te verhogen en de bloktijd te verkorten - tot een punt waarop het negatieve effect van de decentralisatie te belangrijk wordt geacht. Maar het aanpassen van deze eenvoudige parameters levert niet de vereiste verbeteringen op. Ethereum’s EVM kan, in theorie,[verwerken tot ~2.000 TPS](https://twitter.com/dankrad/status/1459607325854121989), wat onvoldoende is voor de vraag naar ruimte op lange termijn. Om sequenties te schalen maakte Solana enkele indrukwekkende innovaties: gebruikmakend van een parallellibele uitvoeringsomgeving en een slim consensusmechanisme. die de doorvoer veel efficiënter mogelijk maakt. Maar ondanks de verbeteringen is het noch toereikend noch schaalbaar. Naarmate Solana de doorvoer ervan uitbreidt, stijgen de kosten voor het uitvoeren van een knooppunt en het verwerken van transacties ook.

#### Verificatie schaalbaarheid

*Verificatie schaalbaarheid beschrijft benaderingen die de doorvoer verhogen zonder nodes steeds te belasten met steeds hogere hardware kosten.*Het verwijst in het bijzonder naar cryptografische innovaties zoals validiteit proofs. Ze zijn de reden waarom Validity Rollups een blockchain duurzaam kan schalen.

**Wat is een Geldigheid Rollup?**

GeldigheidsRollups (ook bekend als "ZK-Rollups") verplaatsen de berekening en de opslag van de status buiten de keten, maar houd een kleine hoeveelheid van bepaalde gegevens on-chain. Een slim contract op de onderliggende blockchain onderhoudt de staatswortel van de Rollup. In de Rollup wordt een reeks sterk gecomprimeerde transacties samen met de huidige staatswortel naar een off-chain Prover gestuurd. De Prover berekent de transacties, genereert een geldig bewijs van de resultaten en de nieuwe staatswortel, en stuurt het naar een on-chain Verifier. De verificator controleert de geldigheidsbewijzen, en het smart contract dat de status van de Rollup in stand houdt, actualiseert het aan het nieuwe land van de Prover.

**Hoe schaalt Validity Rollups met dezelfde hardware vereisten?**

Hoewel Provers wel hoge hardware vereisen, hebben ze geen invloed op de decentralisatie van een blockchain; omdat de geldigheid van transacties wordt gegarandeerd door wiskundige controleerbare bewijzen.

Waar het om gaat zijn de vereisten om de bewijzen te controleren. Omdat de gegevens die erbij betrokken zijn zeer gecomprimeerd en grotendeels geabstracteerd zijn door middel van computing, zijn impact op nodes van de onderliggende blockchain is minimaal*.*

Verifiers (Ethereum nodes) hebben geen high-end hardware nodig en de grootte van de batches verhoogt de hardware vereisten niet. Alleen staatsovergangen en een kleine hoeveelheid gespreksgegevens moeten worden verwerkt en opgeslagen door de nodes. Dit stelt alle Ethereum-nodes in staat om Validity Rollup batches te verifiëren met behulp van hun bestaande hardware.

**Hoe meer transacties, hoe goedkoper het wordt**

In traditionele blockchains gebeuren er meer transacties. hoe duurder het voor iedereen wordt als de blokruimte wordt ingevuld - en gebruikers moeten elkaar uitbieden in een transactiemarkt om hun transacties mee te krijgen.

Voor een Geldigheid Rollup wordt deze dynamiek teruggedraaid. Het verifiëren van een reeks transacties met Ethereum brengt bepaalde kosten met zich mee. Naarmate het aantal transacties binnen een batch toeneemt, stijgt de prijs om de batch te verifiëren exponentieel trager. Het toevoegen van meer transacties aan een batch leidt tot goedkopere transactiekosten ook al stijgen de batchverificatie kosten — omdat het is opgedeeld tussen alle transacties binnen de batch. Validity Rollups willen zoveel mogelijk transacties binnen een batch - zodat de verificatiekosten gedeeld kunnen worden tussen alle gebruikers. Als de batchgrootte groeit tot oneindig en de vergoeding per transactie converteert naar nul. ., hoe meer transacties op een Validity Rollup, hoe goedkoper het voor iedereen wordt.

dYdX, een dApp aangedreven door een Validity Rollup, ziet vaak de grootte van een partij van meer dan 12.000 transacties. Het vergelijken van het gasverbruik van dezelfde transacties op Mainnet vs. op een Geldigheid Rollup illustreert de schaalbaarheid:

Het afhandelen van een dYdX-transactie op Ethereum Mainnet:**200.000 gas**

Een dYdX-transactie afwikkelen op StarkEx:**<500 gas**

Een andere manier om er naar te kijken: Validity Rollups belangrijkste kostenschalen lijn met het aantal gebruikers binnen dezelfde partij.

#### Waarom Optimaliserende Rollups niet zo schaalbaar zijn als iemand denkt

In theorie bieden Optimistische Rollups bijna dezelfde schaalbaarheidsvoordelen als Validiteit Rollups. Maar er is een belangrijk onderscheid: Optimaliserende Rollups optimaliseren voor gemiddelde gevallen, terwijl Validiteit Rollups optimaliseren voor het slechtste geval. Omdat blockchain-systemen onder extreem ongunstige omstandigheden werken, is het optimaliseren van het ergste geval de enige manier om veiligheid te bereiken.

In het slechtste geval van de Optimistische Rollup worden de transacties van een gebruiker niet gecontroleerd door frauduleuze checkers. Om fraude te bestrijden moet de gebruiker dus een Ethereum-full node synchroniseren, een L2 full node, en de verdachte transactie zelf berekenen.

In het slechtste geval van Validiteit Rollup zou een gebruiker alleen een Ethereum-volledige node hoeven te synchroniseren om het geldige bewijs te verifiëren, ze zelf de rekenkundige last besparen.

In tegenstelling tot Validiteit Rollups, de kostenschaal van Optimistische Rollups vervalt het aantal transacties in plaats van het aantal gebruikers, waardoor ze duurder worden.

### Eindstuk van de Puzzel - Permissionless Toegang tot de Rollup Staat

Om de geldigheid van transacties te garanderen, moeten gebruikers alleen een Ethereum-knooppunt uitvoeren. Gebruikers en ontwikkelaars kunnen echter de staat en uitvoering van de Rollup voor verschillende doeleinden bekijken en uitvoeren. Een*indexering L2 node*vult dit perfect aan. Het staat niet alleen gebruikers toe om de transacties in het netwerk te zien, maar het is ook een kritische infrastructuur die nodig is om de ecosysteeminfrastructuur te laten functioneren. Indexers als The Graph, Alchemy, Infura; Oracle netwerken zoals Chainlink en block explorers, allemaal worden volledig ondersteund door een machtige, indexerende L2 node.

### Conclusie

Veel manieren om de blockchainschaalbaarheid aan te pakken richten op het verhogen van*throughput*. Maar dit verwaarloost de impact van puts op knooppunten: de voortdurend toenemende hardware eisen om de netwerkgeschiedenis te verwerken en op te slaan en hoe dit de decentralisatie van een netwerk belemmert.

Met de komst van validiteit-proof cryptografie, een blockchain kan**echte schaalbaarheid**bereiken dat nodes niet belast met steeds hogere kosten en brede decentralisatie mogelijk maakt. Meer transacties met krachtige en complexere berekeningen voor dezelfde hardware zijn nu mogelijk. het dilemma van de transactiemarkt omkeren - hoe meer activiteit op een Validity Rollup plaatsvindt, hoe goedkoper het is!

[SwagtimusPrime.eth](https://twitter.com/SwagtimusP?t=pO0L1vGIhuC-ZgWOusQYtA&s=09)en[Louis Guthmann](https://twitter.com/GuthL)

1 From<https://bitcoin.org/en/bitcoin-core/features/requirements>

2 van[https://ethereum.org/nl/developers/docs/nodes-and-clients/](https://ethereum.org/en/developers/docs/nodes-and-clients/)

3 Van<https://docs.solana.com/running-validator/validator-reqs>

4 sterk vereenvoudigd en aangepast voor gemiddelde dynamische blokgroottes