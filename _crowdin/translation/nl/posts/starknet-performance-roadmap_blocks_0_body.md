### TL;DR

* Geldigheid rollups zijn niet beperkt in de uitvoering op dezelfde manier als L1s. Dit geeft aanleiding tot potentieel veel hogere TPS op L2-geldigheids rollups.
* StarkNet performance roadmap richt zich op een belangrijk element in het systeem: de sequencer.
* We presenteren hier de roadmap voor prestatieverbeteringen:\
  - Sequencer parallelization\
  - Een nieuwe rust implementatie voor de Caïro VM\
  — Sequencer re-implementatie in roest\
* Provers, die in gevecht worden getest zoals ze zijn, zijn niet de bottleneck en kunnen veel meer doen dan ze nu!

### Introductie

StarkNet is bijna een jaar geleden gelanceerd op Mainnet We zijn StarkNet begonnen te bouwen door ons te richten op functionaliteit. Nu verschuiven we de focus naar het verbeteren van de prestaties met een reeks stappen die de ervaring met StarkNet zullen helpen verbeteren.

In dit bericht leggen we uit waarom er een breed scala aan optimalisaties bestaat die alleen van toepassing zijn in geldigheidslijsten, en we zullen ons plan om deze stappen op Starknet te implementeren delen. Sommige van deze stappen zijn al geïmplementeerd in StarkNet Alpha 0.10.2, die werd vrijgegeven op Testnet op Nov 16 en gisteren op Mainnet. Maar laten we, voordat we de oplossingen bespreken, eerst de beperkingen en de oorzaak ervan herzien.

### Blok beperkingen: geldigheidsduur van rollups versus L1

Een potentiële benadering in de richting van het verhogen van blockchain-schaalbaarheid en het verhogen van TPS zou zijn om de blokbeperkingen (in termen van gas/grootte) op te heffen en de bloktijd constant te houden. Dit vereist meer inspanning van de producenten van blokken (validators op L1, sequenties op L2) vragen dus om een efficiëntere tenuitvoerlegging van die componenten. Om dit te bereiken verschuiven we nu de focus naar StarkNet sequencer optimalisaties, die we in meer detail beschrijven in de volgende secties.

Hier doet zich een natuurlijke vraag voor. Waarom zijn sequencer optimalisaties beperkt tot de geldigheidsduur van rollups, dat wil zeggen Waarom kunnen we niet dezelfde verbeteringen toepassen op L1 en vermijden we de complexe aard van rollups volledig? In het volgende deel zeggen we dat er een fundamenteel verschil is tussen deze twee. het toestaan van een breed scala aan optimalisaties voor L2 die niet van toepassing zijn op L1.

### Waarom is de doorvoer van L1 beperkt?

Helaas heeft het opheffen van de beperkingen van de blokken op L1 een grote valkuil. Door het groeiritme van de keten te verhogen, verhogen we ook de eisen van het volledige knooppunt. die proberen de meest recente staat bij te houden. Omdat L1 volledige knooppunten alle geschiedenis opnieuw moeten uitvoeren een hoge stijging van de blokgrootte (in termen van gas) plaatst er een aanzienlijke druk op. weer leiden tot het wegvallen van de zwakste machines en het vermogen om alleen op volle toeren te draaien aan voldoende grote entiteiten. Als gevolg daarvan kunnen gebruikers de staat zelf niet verifiëren en zonder vertrouwen deelnemen aan het netwerk.

Om een echt gedecentraliseerd en veilig systeem in stand te houden, moeten de prestaties van de L1-groep worden beperkt.

### Waarom beïnvloeden dezelfde barrières de geldigheidsduur van rollups?

**Alleen als we kijken naar de volledige knooppunt perspectieven, zien we het echte vermogen van geldigheids rollups.**Een volledige L1 node moet de hele geschiedenis opnieuw uitvoeren om de juistheid van de huidige staat te waarborgen. StarkNet nodes hoeven alleen de STARK-bewijzen te verifiëren, en deze verificatie neemt een exponentieel lagere hoeveelheid computer middelen in beslag. Met name het synchroniseren vanaf nul hoeft geen betrekking te hebben op de uitvoering. een node kan een dump van de huidige status van zijn collega's ontvangen en alleen verifiëren via een STARK-bewijs dat deze status geldig is. Dit stelt ons in staat om de doorvoer van het netwerk te verhogen zonder de eisen van het volledige knooppunt te verhogen.

We komen dan ook tot de conclusie dat de L2-reeks onderworpen is aan een hele reeks optimalisaties die niet mogelijk zijn op een L1.

### Prestatie roadmap voor

In de volgende secties bespreken we welke daarvan momenteel gepland zijn voor de sequentie van StarkNet.

### Sequencer parallel

De eerste stap op onze roadmap was het invoeren van parallelisering met de uitvoering van transacties. Dit werd ingevoerd in StarkNet alpha 0.10.2, dat gisteren werd vrijgegeven op Mainnet. We duiken nu in wat een parallelisering is (dit is een semi-technische sectie, om door te gaan op de roadmap, spring naar het volgende deel).

Dus wat betekent "parallelisatie van transacties" ? Het is onmogelijk om een parallel opgezette reeks transacties uit te voeren omdat verschillende transacties afhankelijk kunnen zijn. Dat blijkt uit het volgende voorbeeld. Beschouw een blok met drie transacties van dezelfde gebruiker:

* Transactie A: Wissel USDC voor ETH
* Transactie B: betaal ETH voor een NFT
* Transactie C: Wissel USDT naar BTC

Tx A moet duidelijk gebeuren voor Tx B, maar Tx C is volledig onafhankelijk van beide en kan parallel worden uitgevoerd. Als elke transactie 1 seconde nodig heeft om uit te voeren, dan kan de blokproductieduur worden verminderd van 3 seconden naar 2 seconden door parallelisatie in te voeren.

De kern van het probleem is dat we de transactieafhankelijkheden niet van tevoren kennen. Alleen in de praktijk wanneer we transactie B uit ons voorbeeld uitvoeren, zien we dat het afhankelijk is van wijzigingen die door transactie-A zijn doorgevoerd. formeler volgt de afhankelijkheid op het feit dat transactie B leest uit opslagcellen waar transactie A naar geschreven heeft. We kunnen de transacties zien als een afhankelijkheid grafiek, waar een rand is van transactie A tot transactie B iff A schrijft naar een opslagcel die wordt gelezen door B, en dus voor B moet worden uitgevoerd. Het volgende cijfer toont een voorbeeld van een dergelijke afhankelijkheidsgrafiek:

![](https://miro.medium.com/max/641/0*I-qGgxdJJmqmgZWM)

In het bovenstaande voorbeeld kan elke kolom parallel worden uitgevoerd, en dit is de optimale regeling (hoewel naïef, zouden we transacties tussen de 1 en 9 opeenvolgende hebben uitgevoerd).

Om het feit te overwinnen dat de afhankelijkheid grafiek niet van tevoren bekend is, introduceren we***een optimistische parallel***, in de geest van[BLOCK-STM](https://malkhi.com/posts/2022/04/block-stm/)ontwikkeld door Aptos Labs, volgens de StarkNet-sequencer. Onder dit paradigma hebben we optimistisch gepoogd om parallelle transacties uit te voeren en opnieuw uit te voeren op het vinden van een botsing. We kunnen bijvoorbeeld transacties van 1 tot 4 tegelijk uitvoeren, om er daarna achter te komen dat Tx4 afhankelijk is van Tx1. Vandaar dat de executie nutteloos was (we liepen het in relatie tot de staat waar we Tx1 tegen hielden, terwijl we het tegen de staat van toepassing van Tx1 hadden moeten uitvatten). In dat geval zullen we Tx4 opnieuw uitvoeren.

We kunnen nog veel optimalisaties toevoegen boven op de optimistische parallelisatie. In plaats van naïef te wachten tot elke uitvoering beëindigd is, kunnen we bijvoorbeeld een uitvoering afbreken op het moment dat we een afhankelijkheid vinden die deze ongeldig maakt.

Een ander voorbeeld is het optimaliseren van de keuze welke transacties opnieuw moeten worden uitgevoerd. Stel dat een blok dat bestaat uit alle transacties van getal 1 wordt gevoerd in een sequencer met vijf CPU-cores. Ten eerste proberen we transacties van 1 tot 5 parallel uit te voeren. Als de volgorde van de voltooiing Tx2, Tx3, Tx4, Tx1 en ten slotte Tx5 was, dan vinden we de afhankelijkheid Tx1→Tx4 pas nadat Tx4 al was uitgevoerd - wat aangeeft dat het opnieuw uitgevoerd moet worden. Bovendien, kunnen we Tx5 misschien opnieuw uitvoeren, omdat het anders kan optreden in het licht van de nieuwe uitvoering van Tx4. Maar in plaats van alle transacties opnieuw uit te voeren nadat de Tx4 ongeldig is geworden, we kunnen de afhankelijkheid grafiek van de transacties waarvan de uitvoering al is beëindigd verleggen en alleen transacties die afhankelijk zijn van Tx4 opnieuw uitvoeren.

### Een nieuwe Rust implementatie voor de Caïro-VM

Smart contracts in StarkNet zijn geschreven in Caïro en worden uitgevoerd in de Cairo-VM, welke specificatie verschijnt in het[Caïro-papier](https://eprint.iacr.org/2021/1063.pdf). Momenteel gebruikt de sequencer een[python implementatie](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/cairo/lang/vm)van de Cairo-VM. Om de prestaties van de VM-implementatie te optimaliseren, hebben we een inspanning gedaan om de VM in rost te herschrijven. Dankzij het geweldige werk van[Lambdaclas](https://lambdaclass.com/), die inmiddels een onschatbaar team van het StarkNet-ecosysteem zijn, wordt deze inspanning binnenkort waargemaakt.

De rust implementatie van de VM,[cairo-uren](https://github.com/lambdaclass/cairo-rs), kan nu native Cairo code uitvoeren. De volgende stap is het afhandelen van de uitvoering van smart-contracts en de integratie met de pythonic sequencer. Eenmaal geïntegreerd met cairo-rs, worden de prestaties van de sequentie naar verwachting aanzienlijk verbeterd.

### Sequencer re-implementatie in Rust

Onze verschuiving van python naar rust om prestaties te verbeteren is niet beperkt tot de Caïro VM. Naast de verbeteringen die hierboven zijn genoemd, zijn we van plan de sequencer vanaf het begin in de rost te herschrijven. Naast de interne voordelen van Rust biedt dit de mogelijkheid voor andere optimalisaties van de sequencer. Als je een stel aanschouwt, kunnen we genieten van de voordelen van de cairo-uren zonder het bovenhoofd van de python-rust communicatie. en we kunnen de manier waarop de status wordt opgeslagen en benaderd volledig herontwerp (die vandaag is gebaseerd op de[Patricia-Trie structuur](https://docs.starknet.io/documentation/develop/State/starknet-state/#state_commitment)).

### Hoe zit het met provers?

Tijdens deze post noemden we niet het misschien wel meest bekende element van geldigheids rollups - de prover. Je zou je kunnen voorstellen dat het waarschijnlijk het meest verfijnde onderdeel van de architectuur moet zijn, dat het knelpunt moet zijn en dus de focus van optimalisatie. Interessant genoeg zijn het de meer ‘normale’ componenten die nu het knelpunt van Starknet zijn. Vandaag de dag, vooral met[recursieve bewijzen](https://medium.com/starkware/recursive-starks-78f8dd401025)kunnen we veel meer transacties passen dan het huidige verkeer op Testnet/Mainnet in een bewijs. Op dit moment zijn StarkNet blokken bewezen naast StarkEx transacties, waarbij deze transacties soms tot enkele honderdduizenden NFT-muntjes kunnen leiden.

### Summary

Parallelizatie, Rust en meer - brak jezelf voor een verbeterde TPS in de aanstaande StarkNet-versies.