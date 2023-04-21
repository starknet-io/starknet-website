### TL;DR

* Account Abstractie verbeteringen in de geest van EIP-4337

1. Valideren — scheiding uitvoeren
2. Transactie uniekheid is nu gegarandeerd in het protocol (eenmalig)

* Het vergoedingenmechanisme is verlengd met de volgende mogelijkheden:

1. L1→L2 berichten
2. Transacties verklaren

* Weinig veranderingen in de syntaxis van Caïro

### Introductie

We zijn erg blij om StarkNet Alpha 0.10.0 te presenteren. Deze versie is een andere stap in de richting van het schalen van Ethereum zonder in te leveren op veiligheid en decentralisatie.

Deze blogpost beschrijft kort de belangrijkste functies van deze versie. Voor de volledige lijst met wijzigingen, controleer de[release-opmerkingen](https://github.com/starkware-libs/cairo-lang/releases). Raadpleeg de[documentatie](https://docs.starknet.io/) voor meer gedetailleerde informatie.

### Account Abstractie Wijzigingen

We gaan vooruit met[StarkNet's account abstractie](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781). Deze versie introduceert wijzigingen geïnspireerd door[EIP-4337](https://eips.ethereum.org/EIPS/eip-4337).

#### Scheiding valideren/uitvoeren

Tot nu toe was de functie \_\_execute\_\_ verantwoordelijk voor zowel de validatie als de uitvoering van de transactie. In 0.10.0 breken we deze koppeling en introduceren we een aparte \_\_validate\_\_ functie in accounts. Bij het ontvangen van een transactie zal het account-contract eerst \_\_validate\_\_\_, bellen en dan, indien succesvol, doorgaan naar \_\_\_execute\_\_.

De scheiding valideren/uitvoeren biedt een protocol-niveau onderscheid tussen ongeldige en teruggedraaide (nog geldig) transacties. Hierdoor kunnen sequencers kosten in rekening brengen voor de uitvoering van een geldige transactie, ongeacht of deze is teruggedraaid of niet.

#### Nonce

In versie 0.10.0 wordt een veld van nonce toegevoegd om uniekheid van transacties op protocolniveau te handhaven. Tot nu toe werden er op het niveau van het contract op de rekening niet-afgehandeld, wat betekende dat een transactie met dezelfde hash twee keer in theorie kon worden uitgevoerd.

Net als Ethereum bevat elk contract nu een nonce, die het aantal uitgevoerde transacties van deze rekening berekent. Rekeningcontracten accepteren alleen transacties met een overeenkomende nonce, d.w.z. als de huidige nonce van het account X is, dan accepteert het alleen transacties met nonce X.

#### Nieuwe transactie versie

Om toestemming te geven voor backward-compatibiliteit, zullen we deze twee wijzigingen invoeren via een nieuwe transactieversie —[v1](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C). Deze wijzigingen zullen alleen van toepassing zijn op de nieuwe versie, en oudere accounts zullen nog steeds versie 0 transacties kunnen uitvoeren.

Opmerking: transactie v0 wordt nu niet meer ondersteund en zal worden verwijderd in StarkNet Alpha v0.11.0. Zorg ervoor dat u upgradet om de nieuwe transactieversie te gebruiken.

Lees de[documentatie](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C) voor meer gedetailleerde informatie over de transactieversie.

#### Vergoedingen mechanisme

De nieuwe versie maakt het mogelijk om kosten voor twee vereiste componenten op te nemen:

* [L1→L2 bericht](https://docs.starknet.io/docs/L1-L2%20Communication/messaging-mechanism#l1--l2-message-fees)
* [Transactie opgeven](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)

Deze vergoedingen zullen niet verplicht zijn in deze versie en zullen slechts van start gaan met StarkNet Alpha v0.11.0.

#### Caïro syntaxiswijzigingen

In deze versie staan verschillende syntaxiswijzigingen voor in de richting van een geleidelijke verbetering van Cairo,[Cairo 1.0](https://www.youtube.com/watch?v=Ny4Rv6ztINU).

Om ongemak te minimaliseren, zal de versie release een[migratiescript](https://www.youtube.com/watch?v=kXs59zaQrsc)bevatten die de bovenstaande wijzigingen automatisch toepast. U kunt meer details[hier](https://github.com/starkware-libs/cairo-lang/releases) vinden.

### Wat is nu?

* Over een paar weken zijn we van plan om parallelisering in de sequentie te introduceren, waardoor een snellere blokproductie (V0.10.1) mogelijk wordt.
* We zullen binnenkort het laatste deel afronden dat in de transactiebetaling moet worden opgenomen – Account implementatie
* Caïro 1.0 release! Meer informatie hierover in een aankomende post.

### Hoe kan ik meer Engaged?

* Ga naar[starknet.io](https://starknet.io/)voor alle StarkNet-informatie, documentatie, tutorials en updates.
* Word lid van[StarkNet Discord](http://starknet.io/discord)voor ontwikkelaars ondersteuning, ecosysteem aankondigingen en word onderdeel van de gemeenschap.
* Bezoek het[StarkNet Forum](http://community.starknet.io/)om up-to-date te blijven en deel te nemen aan de onderzoeksdiscussies van StarkNet

We ontvangen altijd graag feedback over onze[documentatie](https://docs.starknet.io/)!