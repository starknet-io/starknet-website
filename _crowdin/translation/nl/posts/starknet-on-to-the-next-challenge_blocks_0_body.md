### TL;DR

* We bouwen StarkNet in stappen, te beginnen met het creëren van**bruikbaarheid**, verbeter**prestaties**, en tot slot gaan we verder met**decentralisatie**
* We hebben ons eerste doel bereikt: bruikbaarheid. Dit betekent dat we de algemene berekening in een Ethereum-achtige staat leveren (jaren voordat het mogelijk werd gedacht)
* We gaan nu over naar fase 2 van ons 3-delige bouwplan: prestaties, focus op doorvoering, transactiekosten en latentie.
* Volgende stap: decentralisatie

Slechts een jaar nadat de plannen voor[StarkNet](https://starknet.io/)voor het eerst waren aangekondigd, heeft het platform zeer goede functionaliteit. De ontwikkelaarsgemeenschap bloeit levendig boven onze wilde verwachtingen en biedt een constante waaier aan nieuwe L2-projecten.

Onze prioriteit in het afgelopen jaar was juist om dit mogelijk te maken. door het maken van een werkend StarkNet met een snel uitbreidend scala aan functies, waardoor devs direct kunnen duiken.

Ze hebben dit in grote aantallen gedaan. Een goede barometer is de downloadtelling voor de[JavaScript bibliotheek voor StarkNet](https://www.starknetjs.com/): al op 5k sinds 4 maanden geleden beschikbaar is geworden.

Terwijl StarkNet de compressie magie oplevert, hebben we op dit moment beloofd het is nog lang niet in staat om dat te doen voor genoeg dApps met genoeg doorvoer: en dit kan op korte termijn een bron van frustratie voor ontwikkelaars zijn.

Onze door strijd geteste kerntechnologie, STARK-bewijs van veel transacties en het bewijs comprimeren, moet voorafgegaan worden door het baden of het vervolgen van transacties. Het is een proces dat het StarkWare team al één keer heeft geperfectioneerd voor de[StarkEx](https://starkware.co/starkex/)schaliemachine en we werken momenteel opnieuw aan de behoeften van StarkNet.

Nu veel van onze bruikbaarheidsdoelen zijn bereikt, gaan we de focus verleggen naar de hoogste prioriteit. Het is allemaal onderdeel van onze 3-fase roadmap:**usability**, gevolgd door**prestatie**, en vervolgens**decentralisatie**. Een jaar in, We willen je een kijkje geven onder de capuchon - een omlijning van de stukken die op hun plek staan en wat nog steeds een werk in uitvoering is.

### Het verhaal zo Verre

StarkNet Alpha is in juni vrijgegeven voor openbare testnetten, en is in november in Mainnet vrijgegeven. Tegen de tijd van de implementatie van Mainnet leverde StarkNet al algemene berekeningen in een Ethereum-achtige staat, wat algemeen werd gedacht dat het jaren weg zou zijn.

Gedurende de hele ontwikkeling hebben we gekozen voor een benadering die zich eerst concentreerde op de belangrijkste functionaliteiten en ze vrijgaf zodra ze beschikbaar waren. in essentie het evolutieproces met de gemeenschap delen. StarkNet is verre van compleet maar ontwikkelaars kunnen al zinvolle en complexe toepassingen bouwen. Vandaag hebben we honderden ontwikkelaars[die bouwen op StarkNet,](https://starkware.notion.site/Projects-Building-on-StarkNet-a33dee55778a4515a9be9bdae02ee682)tientallen dApps, en meer dan een dozijn externe teams die gereedschap en infrastructuur ontwikkelen voor het StarkNet ecosysteem.

Een reeks upgrades heeft vele belangrijke functies geleverd, waaronder L1<>L2 berichten, on-chain gegevens en ondersteuning voor compositie, events ondersteuning, basis vergoeding mechanisme opgeschort contracten, account abstractie, testkader, ontwikkelaarsgereedschap, snelle bevestiging, bloknummer, bloktijdstempel, ondersteuning voor accountcontracten.

De ontwikkelaarsgemeenschap is zowel zeer geïnteresseerd in StarkNet als zelf vorm geven aan haar ontwikkeling. Er zijn al functies geïntroduceerd op basis van commentaar van de ontwikkelaar. Adoptie zou de toename van de doorvoer kunnen versnellen, en daarom is deze boost nu onze grote prioriteit.

### Volgende stappen

Nu we bruikbaarheid hebben bereikt, is het tijd om de prestaties van het systeem te verbeteren. Het systeem is in zijn huidige staat in staat om beperkte doorvoer van transacties te ondersteunen. De manier om dit op te lossen is door de prestaties van de Sequencer Node te verbeteren, wat het equivalent is van StarkNet's mijnwerker. Het is de "machine" die transacties volgt nadat ze zijn ingediend. Als dit wordt geoptimaliseerd, zal de doorvoer raket afschieten.

Hiertoe analyseren we tegelijkertijd waar de knelpunten zich bevinden en pakken we ze een voor een aan. Alle knelpunten houden momenteel verband met het volgproces, dat komt voordat we de STARK-provers aanroepen. De op gevechten geteste prover-stack is klaar om StarkEx-achtige uitvoer op StarkNet te ondersteunen.

We verwachten dat de optimalisatie van de sequencer een proces zal zijn dat enkele maanden duurt, met geleidelijke verbeteringen gedurende H1/22. Ons doel is om aan het begin van de tweede helft van 2022 ten minste één volgorde van grootte hogere TPS dan Ethereum te bereiken, met een prijs die minstens twee orders van grootte lager is dan die van Ethereum. En dat is nog maar het begin.

Er is alle reden om deze optimalisatiefase te gebruiken. en dat StarkNet niet werd gelanceerd met een kant-en-geoptimaliseerde sequencer: StarkNet was in staat om zo snel bruikbaarheid te bereiken omdat we een kop-start hadden. In plaats van bij nul te beginnen en een volledig nieuwe sequentie te bouwen, gebruikten we de batcher van StarkEx als centraal component.

Dit was een geweldige manier om op te bouwen. Het leverde niet alleen vlug; het betekende dat we op stevige fundamenten bouwden. StarkEx heeft in wezen de core functionaliteit getest die StarkNet bestuurt, omdat het honderden miljarden dollars opsloeg in cumulatieve handel.

[StarkEx](https://starkware.co/starkex/)is de scheller motor voor enkele van de meest succesvolle dApps met behulp van L2: dYdX (eeuwigdurende contracten), Deversifi (spot trading en payments), evenals voor Immutable en Sorare (NFT minen and trading).

Maar de sequencer die voor hen en andere StarkEx clients is gebouwd, kan tot nu toe alleen StarkNet gebruiken. Elk van hen behandelt dagelijks in grote lijnen hetzelfde soort transacties. StarkNet gaat alles over**algemene berekening**, dus zijn behoeften zijn open beëindigd. Wanneer de sequencer transacties van de mempool haalt, komen ze in verschillende vormen en groottes. Bovendien is StarkNet ook een open netwerk wat betekent dat er extra rekening-overhead is die niet wordt aangetroffen in StarkEx.

De huidige uitdaging, namelijk het optimaliseren van de sequentie voor deze nieuwe behoeften, is een belangrijke onderneming. maar op basis van de succesvolle ontwikkeling van StarkEx zijn we ons terdege bewust van de route die we nodig hebben.

### Volgende op: Decentralisatie

StarkNet moet een volledig gedecentraliseerd netwerk zonder vergunning worden, compleet met mechanismen voor leidende verkiezingen en bestuur. Het bereiken hiervan zal onze voornaamste focus worden als we eenmaal torenraketten en kostendalingen doorvoeren. en we hopen eind 2022 een eerste gedecentraliseerde versie te hebben. Wij zijn van plan ons decentralisatieplan in de komende maanden openbaar te delen.

Net zoals de huidige beperkte doorvoer een tussenfase in de ontwikkeling van StarkNet, is de huidige betrokkenheid van StarkWare ook van tijdelijke aard. We zien onszelf als een steiger van soorten, die een belangrijke functie dient tijdens de bouwfase, maar te zijner tijd weer teruggezet wordt.

Volledige ontwikkeling op dit gebied, een spannende eerste stap in de richting van decentralisatie, is al aan de gang. Met volledige knooppunten kan iedereen ter plaatse de stand van zaken van het netwerk controleren en bijhouden van wat er precies gebeurt. Drie teams -*Erigon, Nethermind en Equilibrium*- ontwikkelen volledige knooppunten en mogelijk zullen er meer beginnen met de ontwikkeling in de toekomst.

Parallel daaraan wordt gewerkt aan de voorbereidingen voor het openen van sequenties en het tonen van software aan het publiek. Iedereen kan meedoen als sequencer of prover op StarkNet.

Er zal een structuur worden ontwikkeld die mensen stimuleert om mee te doen, waaronder economische beloningen. StarkNet-kosten zullen deels naar sequentieers en provers gaan.

Op de middellange termijn verwachten we onze sequentie ter beschikking van derden te stellen. en op de lange termijn verwachten we ook dat er in verschillende teams sequenties worden gebouwd die in de volgorde van StarkNet zullen worden geplaatst.

### Altijd verbeteren; altijd luisteren

Naarmate de focus verschuift naar de volgende uitdaging, zullen we de prestaties uit het verleden blijven verbeteren. En als we blijven werken aan alle gebieden van[StarkNet](https://starknet.io/), blijven onze oren altijd open voor de hele ontwikkelaargemeenschap. Dus neem deel aan de discussie via[Discord](https://discord.com/invite/uJ9HZTUk2Y), de[StarkNet Shamans](https://www.google.com/search?client=safari&rls=en&q=StarkNet+Shamans&ie=UTF-8&oe=UTF-8)gemeenschap,[Twitter](https://twitter.com/Starknet_Intern), of een andere route, en helpen vorm te geven aan de toekomst van blockchainschaal.