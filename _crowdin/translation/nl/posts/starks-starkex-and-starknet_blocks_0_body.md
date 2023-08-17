### TL;DR

* STARK's maken het mogelijk om blockchain te schalen door de integriteit van de berekeningen op efficiënte wijze te bewijzen
* StarkEx is een toepassing-specifieke schalie-engine
* StarkNet is een toegestaan, smart contract Layer 2-netwerk

### **STAARS**

STARK's (Scalable, Transparant ARgument of Knowledge) zijn een bewijs dat het mogelijk maakt berekeningen te bewijzen en te verifiëren. Het staat het verwerken van een grote berekening toe, het genereren van een bewijs voor de juistheid van de berekening, en het vervolgens verifiëren van het bewijs in zeer weinig stappen.

STARK's kunnen een belangrijke rol spelen in blockchain-schaalbaarheid door grote berekeningen uit te voeren buiten de keten, waar het goedkoper is, laat alleen de verificatie, die een fractie van de berekening vereist, worden gedaan on-chain. Met andere woorden, door zeer weinig stappen op de keten uit te voeren bevestigt de verificateur de integriteit van een veel grotere berekening die buiten de keten werd gedaan.

Met behulp van STARK, kun je 2 oplossingen samen verzamelen en duizenden transacties berekenen, en vervolgens hun geldigheid on-chain verifiëren met één STARK-bewijs. De kosten van het on-chain proces zijn verdeeld tussen**alle**transacties in de batch. Dit resulteert in de veiligheid van Ethereum en lage gaskosten per transactie.

De lage berekeningskosten zullen leiden tot een nieuwe klasse toepassingen die voorheen niet haalbaar waren. Deze eigenschappen maken STARK's een uitstekend bouwblok voor het verbeteren van de gebruikerservaring en het verlagen van de gaskosten. alles terwijl de beveiliging van de Ethereum-afwikkelingslaag wordt gehandhaafd.

StarkWare biedt twee oplossingen om Ethereum te schalen met STARKs: StarkEx en StarkNet.

### **StarkEx**

[StarkEx](https://starkware.co/starkex/)is een framework voor het maken van toestemming, applicatie-specifieke schaaloplossingen. StarkEx is een toolbox van nuttige[applicatiestromen](https://docs.starkware.co/starkex-v4/starkex-deep-dive/regular-flows)die projecten kunnen gebruiken om goedkope offline computer te krijgen. Een STARK-bewijs, naar de juistheid van uitvoering, wordt gegenereerd in de off-chain. Een dergelijk bewijs kan maximaal 12.000–500.000 transacties bevatten (afhankelijk van het type transactie) Het bewijs wordt vervolgens verzonden naar de STARK-Verifier om aanvaard te worden. Dit betekent één verificatie voor alle transacties - voor een ongelooflijk lage afgeleide gasprijs per transactie.

Enkele voorbeelden van de toepassingen van StarkEx zijn dYdX (perpetuals trading), Ondempbaar en sorteerbaar (NFT's - minen en traden), Deversifi (spot trading), en Celer (DeFi Pooling).

StarkWare voegt voortdurend meer toepassingsstromen toe naar StarkEx, volgt de markt en de behoeften van zijn klanten.

### **StarkNet**

*[StarkNet](https://starkware.co/starknet/)is een toelaatbaar laag 2-netwerk waar elke gebruiker of ontwikkelaar smart contracts ontwikkeld in de taal van Caïro kan implementeren.*

Vergelijkbaar met de Ethereum-smart-contractervaring binnen het StarkNet-ecosysteem uw contract kan communiceren met elk ander contract dat op StarkNet is ingezet, wat rijkelijk samengestelde protocollen mogelijk maakt. StarkNet-contracten kunnen ook communiceren met Ethereum contracten via asynchrone message passing.

In tegenstelling tot StarkEx, waar toepassingen verantwoordelijk zijn voor het indienen van transacties, StarkNet sequencers batch-transacties en ze verzenden om te worden verwerkt en bewezen. (StarkNet's sequencers worden momenteel beheerd door StarkWare met toekomstige plannen om te decentraliseren.) Dit betekent dat wanneer de sollicitaties hun contracten van Caïro uitvoeren, zij zich geen zorgen hoeven te maken over het functioneren van extra operatorinfrastructuur. StarkNet ondersteunt de rollup gegevensbeschikbaarheidsmodus, wat betekent dat de status van de rollup naar Ethereum wordt geschreven samen met de STARK-proofs.

Een grote ontwikkelaarsgemeenschap is nauw betrokken bij het StarkNet ecosysteem, het bouwen van apps, gereedschappen en infrastructuur. Tientallen toepassingen zijn al actief op testnet — DeFi, games, stemmen, AI en meer. Meer over ontwikkelaarshulpmiddelen zoals blokverkenning, lokale testomgeving en framework SDK’s in meerdere talen en meer worden gebouwd door de StarkNet-Gemeenschap. Daarnaast vinden actieve discussies plaats op het[Shamans' platform](https://community.starknet.io/), met suggesties voor verbeteringen, potentiële functies en beste praktijken.

### **Om te verzamelen**

Zowel[StarkEx](https://youtu.be/P-qoPVoneQA)als StarkNet zijn STARK-gebaseerde schouderoplossingen. Beide bieden schaalbaarheid, lage gaskosten en beveiliging, maar hebben verschillende exploitatievereisten en interoperabiliteitspatronen. StarkEx kan de juiste oplossing zijn voor een applicatie die grotendeels zelf-ingeperkt is en past in de API's die StarkEx biedt. StarkNet is misschien beter geschikt voor een protocol dat synchroon moet communiceren met andere protocollen of behoefte heeft die verder gaat dan wat StarkEx biedt.

STARK's hebben revolutionair gemaakt hoe toepassingen op Ethereum kunnen worden gebouwd. StarkEx en StarkNet zullen toepassingen blijven inschakelen die voorheen niet levensvatbaar waren en de grenzen van wat mogelijk is op de blockchain blijven verleggen.

Dit artikel is geschreven in samenwerking met[Tim Gestson](https://twitter.com/IcemanTim)en het[StarkWare](https://starkware.co/)team