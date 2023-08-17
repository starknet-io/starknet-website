### TL;DR

* StarkNet Alpha 0.8.0 presenteert de initiële versie van het kostenmechanisme (optioneel tot StarkNet Alpha 0.9.0.)
* Nieuwe API roept op tot het schatten van de transactiekosten voor het verkrijgen van de transactie trace, waardoor betere zichtbaarheid en debugging mogelijkheden
* Prestatie verbeteringen aan de StarkNet sequencer
* L1→L2 bericht annulering

### Introductie

Zoals gedeeld in onze[roadmap](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51), volgt u de nieuwste toevoeging aan de functionaliteit en functies van StarkNet, onze aandacht verschuift naar prestatieverbeteringen en protocolontwerp (inclusief kosten, rekening abstractie, decentralisatie, etc.). StarkNet Alpha 0.8.0 begint met het toevoegen van transactiekosten en het verbeteren van de prestaties van de sequentie.

De routekaart voor StarkNet bevat een vergoedingenmechanisme. en door verder te gaan met deze versie zetten we een belangrijke stap dichter bij volledige prestaties van het platform.

Het toevoegen van het kostenmechanisme is een essentieel onderdeel van het prestatieontwerp van StarkNet. Zonder een minimale vergoeding lopen we het risico te maken met oneindige transacties: waardoor het onmogelijk zou zijn om een systeem te laten functioneren, ongeacht sequencer optimalisaties.

### Eigenschappen

#### Vergoeding ondersteuning

StarkNet Alpha ondersteunt nu de eerste versie van het vergoedingenmechanisme. Dit mechanisme is al in dit vroege stadium noodzakelijk en zelfs op het gebied van Testnet, en wel om twee belangrijke redenen:

1. Het stelt ontwikkelaars in staat om hun contracten te optimaliseren volgens het kostenmodel van StarkNet.
2. Het is een cruciale tegenhanger bij het verbeteren van de prestaties van het systeem, omdat het spam voorkomt door ontelbare transacties.

Deze versie introduceert de componenten die nodig zijn voor ontwikkelaars om vergoedingen te integreren in hun tools en toepassingen. Ontwikkelaars kunnen nu de transactiekosten schatten door het eindpunt \`estimate_fee\` aan te roepen en de vergoeding betalen als onderdeel van de transactieuitvoering.

Aangezien deze functie niet achterwaarts compatibel is, zullen we de vergoeding op dit moment niet afdwingen, maar alleen vanaf versie 0. .0, dat over enkele weken zal worden vrijgelaten. Deze geleidelijke overgang zal gebruikers en ontwikkelaars in staat stellen zich aan het nieuwe model aan te passen.

#### Vergoeding Structuur op 0.8.0

Op 0,8.0 worden de tarieven alleen op basis van de computercomplexiteit geïnd, terwijl StarkWare nog steeds de communicatiekosten van L1 subsidieert. We zullen het vergoedingenmechanisme bijwerken om deze L1-operationele en communicatiekosten in de komende weken op te nemen. De betaling wordt geactualiseerd met de transactieuitvoering op StarkNet L2. Zie de[documentatie over kosten](https://starknet.io/documentation/fee-mechanism/)voor een diepgaande beschrijving.

Het is belangrijk om op te merken dat we nauw met de ontwikkelaar gemeenschap zullen samenwerken om het kostenmechanisme aan te passen en te ontwikkelen naarmate StarkNet evolueert.

#### L2 Goerli ETH Faucet

We lanceerden de[L2 Goerli ETH Faucet](https://faucet.goerli.starknet.io/)om gebruikers in staat te stellen kosten te betalen op Testnet. Deze Faucet stuurt kleine hoeveelheden L2 Goerli ETH naar je account op StarkNet Goerli die je kunt gebruiken voor het betalen van de transactiekosten.

#### Trace API

We hebben de mogelijkheid om het uitvoertraject van een transactie op te halen toegevoegd aan de API van StarkNet. Binnen het spoor van de transactie zijn alle interne oproepen zichtbaar, vergezeld van informatie zoals gebruikte executiehulpmiddelen, retourwaarde, uitgestoten evenementen en berichten verzonden. Deze nieuwe oproep vereenvoudigt het begrijpen van het gedrag van een contract of debugging transacties. Daarnaast kunnen hulpmiddelen zoals[Voyager](https://voyager.online/)of[StarkTx](https://starktx.info/)deze gegevens bevatten; de gebruikers voorzien van een gedetailleerdere analyse, met name voor de contractinteractie van de rekening.

Om het spoor te krijgen, kunt u \`get_transaction_trace\` gebruiken in StarkNet's CLI. Bekijk de[handleiding](https://www.cairo-lang.org/docs/hello_starknet/cli.html?#get-transaction-trace) om een voorbeeld te zien van hoe je het moet gebruiken.

#### Annulering van bericht

Een extra functie van deze versie is de mogelijkheid om L1→L2 berichten te annuleren. Waarom is dit nuttig? Stel je een scenario voor waarin een gebruiker een activum van L1 naar L2 overplaatst. De stroom begint met het verzenden van asset naar een StarkNet bridge en de bijbehorende L1→L2 bericht generatie. Stel je nu voor dat het L2-bericht niet werkt (dit kan gebeuren door een bug in het contract van dApps). Dit kan ertoe leiden dat de gebruiker voor altijd zijn asset verliest.

Om dit risico te verkleinen we staan het contract toe dat het L1→L2 bericht lanceerde om het te annuleren - na het verklaren van het voornemen om dit te doen en een geschikte hoeveelheid tijd wachten (zie de[documentatie](https://starknet.io/l1-l2-messaging/#cancellation)).

### Verbetering van prestaties

Deze versie vermindert aanzienlijk de tijd die een sequencer nodig heeft om een stroom inkomende Cairo transacties uit te voeren.

Dit is nog maar de eerste stap! Onze volgende grote prestatiemijlpaal, die binnenkort (0,9.0) wordt geïntroduceerd, is de parallelle uitvoering van de sequencer, en er worden veel meer optimalisaties verwacht op de weg.

### Wat nu?

Lees de technische documentatie[hier](https://starknet.io/documentation/fee-mechanism/).

Ga naar[starknet.io](https://starknet.io/), voor alle StarkNet-informatie, documentatie, tutorials en updates.

Word lid van[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)voor ontwikkelaars ondersteuning, ecosysteem aankondigingen en word onderdeel van de gemeenschap.

Bezoek[StarkNet Shamans](https://community.starknet.io/)om bijgewerkt te blijven en deel te nemen aan alle StarkNet onderzoeksdiscussies.