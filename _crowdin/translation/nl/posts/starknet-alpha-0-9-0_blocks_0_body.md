### TL;DR

* **Vergoedingen zijn nu verplicht op Testnet, binnenkort op Mainnet**
* Contract fabriekspatroon is nu mogelijk!
* StarkNet introduceert contractklassen
* Oproep delegeren wordt vervangen door bibliotheekoproep

### Introductie

We zijn blij met StarkNet Alpha 0.9.0! Dit is een belangrijke versie waarin StarkNet belangrijke stappen in de richting van rijpheid zet, met een substantiële aanvulling op zowel de functionaliteit als het protocol ontwerp.

**transactiekosten zijn verplicht**(momenteel alleen op Testnet, tot versie 0.9. zal leven van Mainnet) - elk welvarend L2 moet zijn eigen onafhankelijke vergoedingensysteem hebben. Na het introduceren van kosten als optionele functie in versie 0.8. , we hebben er nu vertrouwen in dat we ze als kernonderdeel van het protocol opnemen en ze verplicht stellen. Meer details hieronder.

Een andere belangrijke verandering op het protocolniveau is de invoering van contractklassen en de scheiding tussen klasse en instantie. Dit zorgt voor een eenvoudiger gebruik van de \`delegate_call\` functionaliteit en implementaties uit bestaande contracten, waardoor het fabriekspatroon op Starknet kan worden ingeschakeld.

### Contract Lessen

Op basis van objectgerichte programmering maken we onderscheid tussen de contractcode en de tenuitvoerlegging ervan. We doen dit door contracten te scheiden van klassen en instanties.

Een**contractklasse**is de definitie van het contract: de Caïro bytecode, informatieve informatie, namen van toegangspunten en alles wat nodig is om de semantiek ervan ondubbelzinnig te definiëren. Elke klas wordt geïdentificeerd door zijn klassenhash (analoog aan een klassenaam van OOOP-talen).

Een**contract instance**, of gewoon een contract, is een ingebouwde overeenkomst die overeenkomt met sommige klasse. Merk op dat alleen contractvoorbeelden zich gedragen als contracten, dat wil zeggen dat ze hun eigen opslag hebben en dat ze kalmerbaar zijn door transacties/andere contracten. Een contractklasse heeft niet noodzakelijkerwijs een ingebouwde instantie in StarkNet. De invoering van klassen brengt verschillende wijzigingen in het protocol met zich mee.

#### Transactie 'Declare'

We introduceren een nieuw type transactie in StarkNet: de['declare'](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)transactie, waarmee je contract**klasse kunt afschrijven.**Anders dan de \`deploy\` transactie, dit zet geen exemplaar van die klasse. De status van StarkNet zal een lijst van verklaarde klassen bevatten. Nieuwe klassen kunnen worden toegevoegd via de nieuwe \`declare\` transactie.

#### De “Deploy”-systeemoproep en contractfabrieken.

Zodra een klasse is uitgeroepen, dat wil zeggen de bijbehorende \`declare\` transactie is geaccepteerd, kunnen we nieuwe exemplaren van die klasse implementeren. Hiertoe gebruiken we het nieuwe \`deploy\` systeem, dat de volgende argumenten gebruikt:

* De klasse hash
* Zout
* Constructor argumenten

De ‘deploy’-syscall zal vervolgens een nieuw exemplaar van die contract inzetten, wiens[-adres](https://docs.starknet.io/docs/Contracts/contract-address)zal worden bepaald door de drie bovenstaande parameters en het adres van de deployer (het contract dat het systeemoproep heeft aangeroerd).

Door implementaties in een aanroeptransactie op te nemen kunnen we prijzen en kosten in rekening brengen voor implementaties, zonder dat we implementaties en inroepingen anders hoeven te behandelen. Voor meer informatie over implementatiekosten zie[de documenten](https://docs.starknet.io/docs/Fees/fee-mechanism#deployed-contracts).

Deze functie introduceert contractfabrieken in StarkNet, omdat elk contract de \`deploy\` syscall kan inroepen en nieuwe contracten kan aanmaken.

#### Verplaatsing van ‘Delegate Call’ naar ‘Library Call’

De invoering van klassen stelt ons in staat om een bekend probleem aan te pakken in het oproepmechanisme van afgevaardigden van Ethereum: wanneer een contract een oproep uitvoert aan een ander contract, dan is dat een gedelegeerde oproep. het heeft alleen zijn klasse (zijn code) nodig in plaats van een echte instantie (zijn opslag). Het is dan ook een slechte gewoonte om een specifieke contractuele instantie te specificeren wanneer een gedelegeerde oproep wordt gedaan (inderdaad, het heeft enkele fouten in Ethereum-contracten veroorzaakt) - alleen de klasse moet worden gespecificeerd.

Het oude \`delegate_call\` systeem call wordt nu verouderd (oude contracten die al zijn ingezet zullen blijven functioneren, maar**contracten die \`delegate_call\` gebruikt zullen niet langer**compileren), en wordt vervangen door een nieuwe library_call system call die de class hash (van een eerder gedeclareerde klas) krijgt in plaats van een contract instantie adres. Merk op dat slechts één echt contract betrokken is bij een bibliotheekoproep, dus we voorkomen dat er onduidelijkheid bestaat tussen het belcontract en het uitvoeringscontract.

#### Nieuwe API eindpunten

We hebben twee nieuwe eindpunten aan de API toegevoegd, waardoor het ophalen van klassengerelateerde gegevens mogelijk is:

* \`get_class_class_by_hash\`: retourneert de klasse definitie gegeven de klasse hash
* \`get_class_hash_at\`: geeft de class hash van een deployde contract terug gegeven het contract adres

Merk op dat het verkrijgen van de klasse van een inzetbaar contract direct in plaats van de twee methodes hierboven te doorlopen, u kunt het oude \`get_full_contract\` eindpunt gebruiken, dat in toekomstige versies zal worden hernoemd. Alle bovenstaande eindpunten zijn ook bruikbaar in de[StarkNet CLI](https://docs.starknet.io/docs/CLI/commands).

#### Vergoedingen

We zijn verder gegaan om vergoedingen in StarkNet in te voeren, waardoor ze verplicht worden (eerst op Testnet, en later ook op Mainnet) voor ``[invoke](https://docs.starknet.io/docs/Blocks/transactions#invoke-function)\` transacties. De transactie \`declare\` zal op dit moment geen kosten vereisen. Evenzo zullen \`deployy`` transacties ook geen kosten vereisen, maar merk op dat dit transactietype hoogstwaarschijnlijk niet meer zal worden ondersteund in toekomstige versies.

Er zijn op dit gebied nog steeds verscheidene open vragen, waarvan de meest prominente zijn het aanrekenen van vergoedingen voor aangiften en de inzet van StarkNet-accounts. We zullen deze kwesties in toekomstige versies aan de orde stellen.

### Wat is nu?

Na onze routekaart die we[in februari](https://medium.com/starkware/starknet-on-to-the-next-challenge-96a39de7717)hebben aangekondigd, zetten we ons in voor het verbeteren van de prestaties van StarkNets in het algemeen. en de prestaties van de reeks in het bijzonder, om gebruikers sneller feedback te geven over hun transacties. In de volgende versie zijn we van plan om parallelisering in de sequentie in te voeren, waardoor de productie kan worden versneld.

De volgende grote versie van StarkNet zal zich richten op de structuur van de rekeningen van StarkNet, op een manier die vergelijkbaar is met[ERC-4337](https://medium.com/infinitism/erc-4337-account-abstraction-without-ethereum-protocol-changes-d75c9d94dc4a). Daarmee hebben we de laatste hand gelegd aan de manier waarop StarkNet-rekeningen zich gedragen en een nieuwe grote stap gezet in de richting van massale adoptie!