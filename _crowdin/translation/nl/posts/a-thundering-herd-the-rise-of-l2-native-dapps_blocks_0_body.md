### TL;DR

L2-native dApps kunnen nu bloeien zonder traditionele L1-gasbeperkingen

### Introductie

dApp ontwikkelaars hebben altijd te maken gehad met ernstige beperkingen als gevolg van de (L1) blok gas limiet van Ethereum. Het beperkt niet alleen*hoe*die dApps werken, maar ook*wat*die dApps kunnen doen.

Laag 2 (L2) biedt dApp ontwikkelaars een computationeel groenveld, vrij van dit plafond van gasglas Wij denken dat de overgrote meerderheid van dApps binnen een paar jaar L2-native zal zijn: ze zijn vanaf de grond op L2 gebouwd om te profiteren van deze computationele mate van vrijheid.

### L1 gaslimieten vorm L1-native dApps

*Laten we twee voorbeelden van populaire dApps waarvan het ontwerp sterk wordt gevormd door L1-gasbeperkingen: AMM's en DEX-aggregators.*

Een geautomatiseerde markt Maker (AMM) is in wezen een lage gasbenadering van een order-book-gebaseerde uitwisseling. In plaats van het toestaan van gebruikers om limieten te plaatsen en te verwijderen, stop verlies of een verscheidenheid van andere ordertypes, L1 AMMs laten alleen eenvoudige swaps met een centrale onderliggende liquiditeitspool - om de intense computational kosten van L1 op te vangen.

DEX aggregators hebben idealiter toegang nodig tot alle mogelijke liquiditeitspools, zelfs de kleinste liquiditeitspoel om de beste prijzen voor gebruikers te verhogen. Vanwege de kosten om veel verschillende pools op te vragen is het echter niet de moeite waard om transacties uit te voeren boven L1. Het is te rechtvaardigen om toegang te krijgen tot pools en de bijbehorende transactiekosten alleen te betalen wanneer liquiditeitspools voldoende sterke liquiditeit hebben. In een gelijksoortige geest liquidaties in leningen/leningen en andere op zakelijke zekerheid gebaseerde dApps zouden veel nauwkeuriger kunnen zijn als het verschil tussen liquidatie korting en transactie vergoeding veel kleiner was.

De beperkte functionaliteit en ontwerp van veel L1 dApps is rechtstreeks het resultaat van ontwikkelaars die hun code optimaliseren om zich te houden aan de gasbeperkingen van Ethereum. Waarom, vraagt u zich misschien af, zeggen we Ethereum? Kan je geen Solidity code uitvoeren op veel L1s en zelfs enkele L2's? Ethereum is inderdaad het duurste (en dus veilig) milieu. Solidity dApps zijn ontworpen voor “de duurste link”, d.w.z. Ethereum. Daarom profiteren zij niet van het computationeel voordeel van minder dure runtime omgevingen. Om functionaliteit foregone te ontgrendelen door het ontwerpen van een dApp voor de duurste runtime omgeving, moet de dApp code worden aangepast.

### De opkomst van L2-native dApps

Geldigheid Rollups (aka ZK-Rollups) maken extreem goedkope berekeningen mogelijk. In tegenstelling tot elke andere schalieoplossing kan de L2-berekening exponentieel groeien met slechts een klein effect op de kosten voor de verificatie van de on-chain keten. Bovendien, een Validiteit Rollup processen voert in op de berekeningen - ‘witness data’ - zonder extra L1 bronnen te consumeren, waardoor berekeningen met veel inputs mogelijk zijn.

Het programmeren van dApps op L2 in**[Cairo](https://www.cairo-lang.org/)**(een Turing-complete taal om dApps te schalen via STARK proofs) ontgrendelt een enorme waaier aan mogelijkheden voor ontwikkelaars. Het stelt hen in staat om aanzienlijke hoeveelheden gegevens te gebruiken — zowel reken- als getuigengegevens - die ze eerder niet konden gebruiken.

Laten we zulke L2-native dApps en hun nieuwe, verrijkte mogelijkheden ontdekken.

#### DeFi

Voordat StarkEx, StarkWare de Geldigheid Rollup, dYdX functioneerde als een L1 dApp op Ethereum. Het biedt zijn gebruikers een hefboomwerking van x10 op synthetische activa en ondersteunde posities met slechts één synthetische asset. Het opnieuw opbouwen van dYdX in Caïro als een L2-native dApp biedt een veel schaalbaarder, goedkoper en efficiënt DeFi platform:

* Oracle price updates: dergelijke updates omvatten doorgaans tientallen prijzen en handtekeningen uit verschillende bronnen om een mediaan te rekenen. Een Geldigheid Rollup biedt een exponentiële schaling van de prijsindicatie (handtekening verificatie en berekening van de mediaan prijs) - zonder melding van gegevens die getuigen van L1. Vergelijk dit met de L1 implementatie van dYdX, waarbij elke prijs oracle update ongeveer 300K gas kost en was, De frequentie ervan en de omvang van de prijsrapportage zijn daarom beperkt.
* Hefboom: Een nauwkeurige prijs feed geeft dYdX de mogelijkheid om het risico op een positie in realtime in te schatten en een hogere hefboom aan te bieden voor gebruikers. Dankzij de verbeterde oracle prijs updates, dYdX verhoogde hefboom van x10 op L1 tot x25 op L2.
* Cross-margin: Met dYdX op L2 kunnen marktmakers long/short orders op veel activa plaatsen met dezelfde onderpand. De gemiddelde verrekening op dYdX L2 omvat posities met meer dan 10 verschillende synthetische activa! Vergelijk hiermee zou het bestaan van deze kruismargecapaciteit op L1 de kosten van de on-chain gas meer dan verdubbeld hebben.

#### Gaming en Generatieve Kunst

Het huidige gewas van L1-native games slaat spelassets meestal op op L1 terwijl de hele spellogica in een vertrouwde off-chain applicatie wordt geïmplementeerd. Dit patroon is een direct gevolg van de gasbeperkingen van L1. Dankzij goedkope berekening op L2, ontwikkelaars van L2-native gaming dApps kunnen nu de spellogica in een smart contract implementeren en de spelactiva vertrouwelijk manipuleren. in plaats van ze gewoon op te slaan. Het meenemen van spellogica in het rijk van betrouwbare berekening is een belangrijke stap in de richting van een veel rijkere wereld van op blockchain gebaseerde spellen. L2-native games worden al ontwikkeld op StarkNet, StarkWare het toegestane netwerk (bijv.[Dope Wars](https://github.com/dopedao/RYO)en[Influence](https://medium.com/influenceth/influence-to-launch-on-starknet-afd3c26ea25a)).

Maar hoe complex kan een op blockchain gebaseerd spel zijn? Bijvoorbeeld, het direct verwerken van afbeeldingen via de on-chain lijkt onmogelijk —[of is het](https://twitter.com/guiltygyoza/status/1449637155001798657)? Het oplossen van gedifferentieerde vergelijkingen en het simuleren van planaire bewegingen in een slim contract is een belangrijke stap in de richting van wat in de toekomst een blockchain physics engine zou kunnen zijn. De gevolgen zijn enorm. Stel je een concurrerend multiplayer spel voor zoals Counter-Strike. Als je de game logica on-chain zou kunnen simuleren, veel gevreesde hacks zouden verleden tijd zijn — spelers zouden kunnen genieten van een zeer eerlijk spel.

Generatieve kunst gebruikt de berekening, willekeurigheid, en andere gegevens om blockchain-gebaseerde kunst te maken. De complexere logica en het berekenen van een artiest kan vertrouwen gebruiken, hoe meer opties er zijn om unieke unieke unieke kunststukken te genereren. [WhaleStreet DAO](https://blog.whalestreet.xyz/whalestreet-dao-to-launch-gen-art-ecosystem-on-ethereum-with-starknet/)lanceert een van de eerste Gen Art projecten op StarkNet, waarbij gebruik wordt gemaakt van StarkNet's onbeperkte computerbronnen.

### Wat is nu?

Geldigheid Rollups - en door Caïro aangedreven StarkEx en StarkNet, met name – bieden een omgeving waar je dApps kunt ontwikkelen en bedienen die veel berekeningen of getuigendata verbruiken. Met alle voordelen van gedistribueerde grootschaligheid, voorspellen we een ontzettend spannende toekomst voor L2-native dApps.

Wat kan je**maken met algemene berekening ondersteund door composabiliteit, vertrouwen en decentralisatie?