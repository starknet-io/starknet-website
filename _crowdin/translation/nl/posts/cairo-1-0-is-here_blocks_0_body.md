### TL;DR

* Caïro 1.0 eerste versie is er!
* Ontwikkelaars kunnen beginnen met het schrijven en testen van Caïro 1.0 programma's
* Functie pariteit met de oudere versie van Caïro zal de komende weken worden bereikt
* Ondersteuning voor StarkNet-contracten zal worden toegevoegd in de aankomende StarkNet versie

### Achtergrond

We zijn blij te kunnen aankondigen dat de eerste openbare versie van Caïro 1.0 nu beschikbaar is. Dit is een belangrijke mijlpaal in de ontwikkeling van Caïro, die in 2020 voor het eerst werd ingevoerd als een Turing-complete programmeertaal voor het efficiënt schrijven van STARK-uitvoerbare programma's. Caïro 1.0 is een Rust-achtige taal op hoog niveau. Net als Rust, is het bedoeld om ontwikkelaars makkelijk code te laten schrijven die efficiënt en veilig is.

Vanaf het begin is Cairo gebruikt om Layer-2 applicaties te bouwen die[](https://dashboard.starkware.co/starkex)meer dan $790 mrd aan transacties hebben verwerkt, meer dan 300 miljoen transacties verwerkt en geminacht meer dan 90 miljoen NFT's, alle uitgevoerde off-chain werd op Ethereum afgewikkeld met de wiskundige integriteit gegarandeerd door STARK proofs. Cairo is de 4e meest gebruikte programmeertaal geworden in het blockchain[ecosysteem](https://defillama.com/languages)aan het eerst. Met de vrijlating van Caïro 1. We willen de taal nog toegankelijker en gebruiksvriendelijker maken en tegelijkertijd nieuwe voorzieningen introduceren die de veiligheid en het gemak vergroten.

Een van de belangrijkste veranderingen in Caïro 1.0 is de syntaxis. We hebben inspiratie genomen van**Rust**om een meer ontwikkelaarvriendelijke taal te maken die makkelijker lees- en schrijfbaar is. De nieuwe versie van Caïro maakt het schrijven van veiligere code mogelijk (sterk getypt, eigendom en lenen, enz.), terwijl het ook expressiever is.

Caïro 1.0 introduceert ook Sierra, een nieuwe tussenvertegenwoordiging, die ervoor zorgt dat**elke**Cairo kan worden bewezen. Dit maakt Cairo 1.0 bijzonder geschikt voor gebruik in een permissief netwerk als StarkNet, waar het een solide DoS-bescherming en censuur kan bieden. U kunt meer lezen over Sierra in onze[vorige](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)post.

## Eerste smaak!

### Wat kan je vandaag doen?

Ontwikkelaars kunnen beginnen met het schrijven, compileren en testen van Caïro 1.0 programma's! We moedigen ontwikkelaars aan om te experimenteren met Cairo 1.0 en gewend te raken aan de nieuwe syntaxis en functies.

Omdat Caïro 1.0 nog steeds actief ontwikkeld is, en nieuwe functies voortdurend toegevoegd worden, bekijk de[Cairo repository](https://github.com/starkware-libs/cairo/)voor de laatste updates.

### Wat nu?

Op dit moment is Caïro 1. mist nog steeds sommige van de functies die worden ondersteund in de oudere versie van Caïro ([zie deze tabel voor details](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)). Onze volgende mijlpaal, die in de komende weken wordt verwacht, biedt Cairo 1.0 functie pariteit met de oudere versie. Je kunt de voortgang volgen richting die mijlpaal[hier](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md).

### Starknet ondersteuning

Het schrijven van StarkNet-contracten in Caïro 1.0 wordt ondersteund (hoewel bepaalde functies nog ontbreken). StarkNet ondersteunt de implementatie en uitvoering van Caïro 1.0 echter nog niet. StarkNet Alpha V0.11.0, gepland in de komende weken, zal de mogelijkheid introduceren om Cairo 1,0 contracten uit te voeren en uit te voeren. De upgrade naar v0.11.0 markeert het begin van de overgangsperiode, naar een systeem dat alleen Cairo 1.0 contracten gebruikt. Deze overgangsperiode zal eindigen met de[Regenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4), een paar maanden later verwacht.

![](/assets/0_odxbxeacqdwizlfw.jpg)

### Laten we bouwen!

Het doel van StarkNet is om Ethereum exponentieel te schalen met behulp van de wiskundige integriteit van STARKs, en het doel van Caïro is om deze exponentiële schaal toegankelijk te maken voor ontwikkelaars. Toegankelijkheid betekent een programmeertaal die efficiënt, eenvoudig te lezen en te schrijven is en veilig te gebruiken. We hopen dat de vrijlating van Caïro 1.0 nog meer ontwikkelaars zal inspireren om zich aan te sluiten bij StarkNet en Ethereum op te schaal om aan de wereldwijde vraag te voldoen.