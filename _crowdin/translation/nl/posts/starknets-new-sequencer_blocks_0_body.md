### TL;DR

* Er wordt een nieuwe StarkNet sequencer ontwikkeld
* Het is open source onder de Apache 2.0 licentie
* Het eerste doel is het vergroten van de doorvoer van StarkNet's

### Een glimmende nieuwe sequencer

We kondigen met genoegen aan dat er een nieuwe StarkNet Sequencer aan de slag gaat. Terwijl StarkNet's tech stack zich naar open-source beweegt, volgt[Cairo 1.](https://medium.com/starkware/open-sourcing-cairo-1-0-b3100a664bb0)en[Papyrus Full Node](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202), we gaan nu verder met StarkNet's nieuwe sequencer. Het is open-source, beschikbaar onder Apache 2.0 licentie, en je kunt nu[de repo](https://github.com/starkware-libs/blockifier)bekijken!

Het maken van een nieuwe Sequencer maakt deel uit van de[StarkNet Roadmap](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de)die we een paar maanden geleden hebben gepresenteerd. Implementatie van de nieuwe sequencer zal beginnen met de vervanging van de**Blockifier**, de module binnen de reeks die de blok uitvoering uitvoert. Zoals uitgelegd in de roadmap zal het naar verwachting voordelen opleveren voor de prestaties van StarkNet.

Onze aanpak om deze sequentie op te bouwen is dezelfde aanpak die ons in het StarkNet Alfa heeft geleid. De reeks**zal geïmplementeerd worden in fasen**, en we delen vandaag zijn eerste module. Na verloop van tijd zullen nieuwe onderdelen van de sequencer worden voltooid, totdat uiteindelijk een op Rust-gebaseerde sequencer de huidige sequentie van Python-based geheel zal vervangen.

### Wat doet de opvolger?

Op StarkNet, nadat gebruikers transacties hebben verzonden, is de eerste stop in de reis naar STARK schalen de sequencers. In het StarkNet-protocol zijn de opvolgers verantwoordelijk voor het bestellen van de transacties en het produceren van blokken. Nadat het blok is gemaakt door een sequencer, en goedgekeurd door het consensusprotocol, nemen de provers het over en genereren een bewijs voor L1.

![](/assets/1_ndrekwqunjixo_wskdeycw-1.png)

### Open-Bronnen

StarkNet Alpha gelanceerd op Mainnet in november 2021. Van het begin af aan heeft het zich ingezet om de kracht van het schalen van STARK met de wereld te delen.

Vandaag publiceren we de eerste in een regel modules van de nieuwe open-source sequencer. Het zal meerdere maanden duren voordat alle modules en sub-modules worden geïmplementeerd. Open sourcing alles zal de community leden in staat stellen om bij te dragen aan de ontwikkeling en de controle van de codebase.

Dit brengt de rand van StarkNet dichterbij een punt van gedecentraliseerde volgorde zonder permissies. We zijn nu StarkNet's gedecentraliseerd protocol aan het ontwerpen en we moedigen de gemeenschap aan om deel te nemen aan het[onderzoek en de discussie](https://community.starknet.io/t/starknet-decentralized-protocol-consensus/5386).

### Prestaties

De oorspronkelijke sequencer van StarkNet, is grotendeels een aanpassing van de StarkEx-infrastructuur. Nu is er behoefte aan infrastructuur die met name wordt gebouwd voor de behoeften van een gedecentraliseerd netwerk met hoge prestaties.

Gebouwd in Rust, de nieuwe sequencer is ontworpen en ontwikkeld met prestaties in gedachten. De nieuwe sequencer bouwt ook op solide fundamenten: Papyrus, het nieuwe[StarkNet full node,](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202)behandelt het staatsbeheer en de cairo-rs, de nieuwe Cairo-VM van LambdaClass, versnelt de uitvoering van Caïro. Wij verwachten dat de nieuwe reeks de bestaande sequenties in alle opzichten verbetert. De doorvoer en latentie van het netwerk zullen naar verwachting drastisch verbeteren door de integratie van deze sequentie in StarkNet.

We verwachten ook dat andere infrastructuur- en ontwikkelingsinstrumenten de nieuwe reeks kunnen gebruiken om de ontwikkelingservaring te verbeteren. Naar verwachting zullen de volledige node prestaties verbeteren evenals alle testframeings.

### Summary

We zijn blij vandaag de nieuwe open-source sequentie aan te kondigen. De eerste module is al beschikbaar voor de gemeenschap om te bekijken en zal worden gevolgd met meer modules in de komende maanden. We willen ook graag een volgende stap zetten in onze routekaart om de prestaties van StarkNetwork te verbeteren. We streven ernaar het netwerk efficiënter en toegankelijker te maken en we waarderen de steun van iedereen die zich bij deze reis heeft aangesloten.