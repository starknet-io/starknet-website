### TL;DR

* Recursief Bewezen is live op Mainnet en het schalen van StarkEx apps en StarkNet met één bewijs
* Het verhoogt de schaal en levert voordeel op in kosten, en latentie (een zeldzaam en opwindend voorval van schaal en latency bewegen in tandem, en niet een aflossing)
* Het stelt de fase in voor L3 en andere profititsGo lees de blogpost op[Recursive Proving](https://medium.com/@starkware/recursive-starks-78f8dd401025). Het is coole dingen 😉

### Schaalt omhoog!

Recursief bewijs – aangedreven door de algemene berekening van Cairo – is nu in productie. Dit betekent een belangrijke stimulans voor de kracht van L2 schalen met STARKs. Het zal snel een veelvoud toename opleveren van het aantal transacties dat naar Ethereum kan worden geschreven via één enkel bewijs.

Tot nu toe heeft STARK schalen gewerkt door tientallen of zelfs honderdduizenden transacties in één enkel bewijs op te rollen. die naar Ethereum is geschreven. Door terugkerende maatregelen kunnen veel van deze bewijzen “worden opgesloten” tot één enkel bewijs.

Deze methode is nu in productie voor een veelheid aan op Caïro gebaseerde applicaties: apps die draaien op StarkEx, StarkWare's SaaS schellengine, en StarkNet, de toegestane rollup.

### Het verhaal tot nu toe

Sinds het eerste bewijs van Mainnet in maart 2020 is de manier waarop STARK's worden gebruikt de volgende ontwikkelingen ontstaan.

### STARK-gebaseerd schalen

In juni 2020 werd de eerste op STARK-gebaseerde schalingsoplossing —[StarkEx](https://youtu.be/P-qoPVoneQA)- ingezet op Ethereum Mainnet. StarkEx heeft een Prover die grote berekeningen buiten keten uitvoert en een STARK-bewijs produceert voor hun juistheid, en een Verifier die deze proof on-chain verifieert. De beperkingen voor deze eerste inzet waren handgeschreven door de ingenieurs van StarkWare, waardoor de functiesnelheid voor StarkEx, sterk wordt beperkt. We zijn tot de conclusie gekomen dat er een programmeertaal nodig is om de algemene berekening te ondersteunen — Cairo.

#### Cairo

In de zomer van 2020 heeft Caïro zijn[eerste verschijning gemaakt op Ethereum Mainnet](https://medium.com/starkware/hello-cairo-3cb43b13b209). Cairo staat voor CPU Algebraïsche Intermediate Vertegenwoordiging (AIR), en bevat een enkele AIR die de instructie van deze “CPU” controleert. Het opende de deur voor het coderen van bewijzen voor een complexere bedrijfslogica, voor willekeurige rekenkundige uitspraken, en wel op een snellere en veiligere manier. Een Caïro-programma kan de uitvoering van de logica van een enkele applicatie bewijzen. Maar een Caïro-programma kan ook een samenvoeging zijn van meerdere soortgelijke toepassingen - SHARP.

#### SCHERM

SHARP - een SHARed Prover - neemt transacties uit verschillende apps, en bewijst ze allemaal in één enkele STARK-proof. Apps combineren hun partijen transacties, vullen de capaciteit van een STARK-proofs sneller. Transacties worden tegen een beter tempo en vertraging verwerkt. De volgende grens: Recursief Proefs, maar niet alleen voor wat harde gecodeerde logica, maar eerder voor**algemene berekening**.

Om het volledige voordeel van het Recursief Bewijs te begrijpen is het de moeite waard om wat meer te weten te komen over hoe (niet-recursieve) het bewijs werd geleverd dat tot nu toe door SHARP werd uitgevoerd. 1 geeft een typische niet-recursieve stroom weer:

![Tekenen 1: Een typische niet-recursief debiet](/assets/recursive_starks_01.png "Tekenen 1: Een typische niet-recursief debiet")

Hier komen verklaringen na verloop van tijd. Wanneer een bepaalde capaciteit (of tijd) wordt bereikt, wordt een grote verklaring (a.k.a Train) gegenereerd. Deze gezamenlijke verklaring is pas bewezen als alle afzonderlijke verklaringen zijn ontvangen. Dit bewijs kost veel tijd om te bewijzen (ongeveer de som van tijd die nodig is om elke uitspraak afzonderlijk te bewijzen).

Het betogen van extreem grote stellingen wordt uiteindelijk beperkt door beschikbare computerbronnen zoals geheugen. Voorafgaand aan herhalingen was dit in feite de beperkende schaalbaarheidsbarrière van STARK proef.

### Wat is Recursief Betocht?

Met STARK-bewijzen is de tijd die nodig is om een statement te bewijzen ongeveer lineair met de tijd die nodig is om de verklaring uit te voeren. Bovendien, als het bewijzen van een verklaring T tijd in beslag neemt, neemt het controleren van een bewijs ruwweg log(T) tijd in beslag, wat meestal 'logaritmische compressie' wordt genoemd. Met andere woorden, met STARK's besteed u veel minder tijd aan het controleren van de verklaring dan aan het berekenen ervan.

[Caïro](https://starkware.co/cairo/)maakt het mogelijk algemene computationele instructies uit te drukken die kunnen worden bewezen door STARK proofs en geverifieerd door de bijbehorende STARK verificanten.

Hier staat de mogelijkheid om[recursie](https://en.wikipedia.org/wiki/Recursion)uit te voeren in: op dezelfde manier dat we een programma van Caïro schrijven dat de juistheid van duizenden transacties aantoont. we kunnen ook een Caïro-programma schrijven dat meerdere STARK-bewijzen controleert. We kunnen één enkel bewijs genereren dat bevestigt dat meerdere bewijzen "up-stream" geldig zijn. Dit is wat we Recursive Proervan noemen.

Door de logaritmische compressie en ruwweg lineair bewijs tijd. het bewijzen van de verificatie van een STARK proof kost relatief weinig tijd (verwacht wordt dat het in de nabije toekomst slechts een paar minuten zal zijn).

Bij het implementeren van Recursie kan SHARP op het moment dat ze binnenkomen verklaringen bewijzen. Hun bewijzen kunnen steeds worden samengevoegd tot periodieke bewijzen in verschillende patronen, totdat op een bepaald moment wordt het resulterende bewijs voorgelegd aan een on-chain verificatiecontract. Een typisch patroon wordt weergegeven in de Tekening 2:

![Tekenen 2: Een typische recursieve falende stroom.](/assets/recursive_starks_02.png "Tekenen 2: Een typische recursieve falende stroom.")

### Onmiddellijke voordelen van Recursief Bewijs

#### Verminderde On-chain Kosten

Van de vleermuis krijgen we een “compressie” van meerdere bewijzen tot één. wat lagere on-chain verificatiekosten per transactie impliceert (waar in elke verklaring veel transacties kunnen worden opgenomen).

Met recursie, de computer middelen barrière (bijv. geheugen) die tot nu toe beperkt is, wordt geëlimineerd, aangezien elke beperkte afbakening van de grootte afzonderlijk kan worden bewezen. Vandaar dat bij gebruik van herhalingen de effectieve Trein grootte bijna onbeperkt is en de kosten per transactie kunnen worden verlaagd met orders van de grootte.

Praktisch gezien hangt de verlaging af van de aanvaardbare vertraging (en van het tempo waarin transacties plaatsvinden). Daar komt nog bij dat elk bewijs doorgaans ook vergezeld gaat van enkele output zoals on-chain gegevens. er zijn grenzen aan de hoeveelheid gegevens die in de on-chain geschreven kan worden, samen met één enkel bewijs. Toch is het zo dat het terugdringen van de kosten bij een orde van grootte en zelfs beter haalbaar is.

#### Verminderde latentie

Het recursieve betoveringspatroon vermindert de latentie van het bewijzen van grote treinen met uitspraken. Dit is het gevolg van twee factoren:

1. Inkomende verklaringen kunnen worden bewezen**parallel**(tegen het bewijzen van een extreem grote gecombineerde verklaring).
2. Er is geen reden om te wachten tot de laatste verklaring in de Train aankomt om te beginnen met het bewijzen. Veeleer kunnen bewijzen worden gecombineerd met nieuwe verklaringen bij aankomst. Dit betekent dat de laatstgenoemde verklaring bij een trein komt is ongeveer de tijd die het kost om te bewijzen dat het zeer laatste statement plus de tijd die het kost om een verklaring van Recursive Verifier te bewijzen (die alle verklaringen die deze specifieke Train al "aan boord” hebben bevestigd).

We zijn actief bezig met het ontwikkelen en optimaliseren van de latentie van het bewijzen van de verklaring van Recursive Verifiëring. Wij verwachten dat dit binnen enkele minuten op orde zal komen. Zo kan een zeer efficiënte SHARP latenties bieden van enkele minuten tot enkele uren afhankelijk van de transactiekosten versus on-chain kosten per transactie. Dit is een betekenisvolle verbetering van de publicatie van SHARP.

#### Faciliterend L3

De ontwikkeling van de verklaring voor Recursive Verifier in Caïro opent ook de mogelijkheid om bewijzen aan StarkNet te verzenden, aangezien die verklaring in een slim StarkNet contract kan worden gebakken. Dit staat het bouwen toe van[L3 implementaties bovenop de openbare StarkNet](https://medium.com/starkware/fractal-scaling-from-l2-to-l3-7fe238ecfb4f)(een L2 netwerk).

Het recursieve patroon is ook van toepassing op de samenvoeging van bewijzen van L3, die moet worden geverifieerd door één enkel bewijs op L2. Zo wordt er ook daar hyper-scaling bereikt.

### Meer subtiele voordelen

#### Toepassing Recursie

Recursie biedt nog meer mogelijkheden voor platforms en toepassingen die hun kosten en prestaties verder willen schatten.

Elke STARK proof bevestigt de geldigheid van een bewering die van toepassing is op een invoer die bekend staat als de "publieke invoer" (of "programmauitvoer" in Caïro termen). Begrijpelijk: STARK recursion comprimeert twee bewijzen met*twee*input in*één*proof met twee inputs. In andere woorden, terwijl het aantal bewijzen wordt verminderd, wordt het aantal inputs constant gehouden. Deze invoer wordt dan meestal gebruikt door een toepassing om een of andere status op L1 (bijvoorbeeld te updaten. . om een staat root te updaten of een opname-on-chain uit te voeren).

Als de recursieve bewering*application-aware*is, d.w.z. herkent de semantiek van de applicatie zelf het kan allebei twee bewijzen comprimeren in één*en*de twee ingangen in één combineren. De resulterende verklaring bevestigt de geldigheid van de invoercombinatie gebaseerd op de applicatie semantiek, Vandaar de naam van de Applicatieve Recursie (zie Drawing 3, om een voorbeeld)..

![Tekening 3: Applicatieve Recursie voorbeeld](/assets/recursive_starks_03.png "Tekening 3: Applicatieve Recursie voorbeeld")

Op dit punt bevestigt de verklaring van 1 een staatsupdate van A tot B en verklaring 2 een verdere update van B tot C. Bewijzen van verklaring 1 en verklaring 2 kunnen worden gecombineerd in een derde verklaring, die de directe update van A tot C bevestigt. Door herhaaldelijk dezelfde logica toe te passen, kan men de kosten van staatsvernieuwingen aanzienlijk verlagen tot aan de finaliteitseis.

Een ander belangrijk voorbeeld van de applicatieve Recursie is het comprimeren van rollup-gegevens uit meerdere proeven. Bijvoorbeeld voor een Geldigheid Rollup zoals StarkNet, elke opslagupdate van L2 is ook opgenomen als transmissiegegevens van L1, om de beschikbaarheid van gegevens te waarborgen. Het is echter niet nodig om meerdere updates te verzenden voor hetzelfde opslagelement, omdat alleen de definitieve waarde van door het bewijs geverifieerde transacties vereist is voor de beschikbaarheid van gegevens. Deze optimalisatie wordt al uitgevoerd binnen een*enkele*StarkNet-blok. Door echter een bewijs per blok te genereren, kan applicatieve Recursie deze rollup-gegevens over*meerdere*L2 blokken comprimeren. Dit kan tot een aanzienlijke kostenverlaging leiden, waardoor kortere blokintervallen op L2 mogelijk zijn, zonder dat de schaalbaarheid van L1 wordt opgeofferd.

Opgelet: Applicatieve Recursie kan gecombineerd worden met application-agnostische recursie zoals eerder weergegeven. Deze twee optimalisaties zijn onafhankelijk.

#### Verminderd On-chain Verifier Complexiteit

De complexiteit van de STARK-verificateur hangt af van het soort stellingen dat het ontworpen is om te verifiëren. Met name voor de verklaringen van Caïro is de complexiteit van de verificateur afhankelijk van de specifieke elementen in de taal van Caïro. meer in het bijzonder de ondersteunde insins (als we de CPU-metafoor voor Caïro gebruiken, vervolgens ingebouwde ins zijn het equivalent van micro-circuits in een CPU: berekeningen uitgevoerd zo vaak dat ze hun eigen geoptimaliseerde berekening vereisen).

De taal van Caïro blijft evolueren en biedt steeds nuttiger ingebouwde ingebouwde producten aan. Aan de andere kant hoeft de Recursieve Verifier slechts een klein deel van deze ingebouwde ingebouwde onderdelen te gebruiken. Daarom kan een recursieve SHARP elke verklaring in Caïro succesvol ondersteunen door de volledige taal in de recursieve verificateurs te steunen. Speciaal de L1 Solidity Verifier hoeft alleen maar periodieke bewijzen te verifiëren, en kan dus worden beperkt tot een stabieler subset van de Caïro-taal: de L1-Verifier hoeft niet bij te houden met de nieuwste en grootste ingebouwde inrichtingen. Met andere woorden, de verificatie van steeds evoluerende complexe statements wordt gedegradeerd tot L2, waardoor de L1-verificateur de eenvoudigere en stabielere uitlatingen laat controleren.

#### Verminderde Compute Voetafdruk

Voor herhaling, de mogelijkheid om meerdere statements samen te voegen in één bewijs werd beperkt door de maximale grootte van de verklaring die kon worden aangetoond op beschikbare computerinstanties (en de tijd die het kan duren om dergelijke bewijzen te genereren).

Bij herhaling is het niet meer nodig om zulke grote verklaringen te bewijzen. Als gevolg daarvan kleiner Minder dure en meer beschikbare rekenperiodes kunnen worden gebruikt (hoewel er meer van deze nodig zijn dan met grote monolithische provers). Dit maakt het gebruik van proverstations in meer fysieke en virtuele omgevingen mogelijk dan voorheen mogelijk.

### Summary

Recursieve bewijzen van algemene berekening dienen nu meerdere productiesystemen, waaronder StarkNet, op Mainnet Ethereum.

De voordelen van herhalingen zullen geleidelijk worden gerealiseerd, aangezien het nieuwe verbeteringen mogelijk blijft en het zal spoedig leiden tot hyperschaalvergroting, vermindering van de gasprijzen en verbetering van de latentie door het potentieel van de parallelisatie te benutten.

Het zal aanzienlijke kosten en voordelen met zich meebrengen, evenals nieuwe kansen zoals L3 en applicatieve-recursie. Verdere optimalisatie van de Recursieve Verifier is gaande en er worden naar verwachting over de tijd nog betere prestaties en kostenvoordelen geboden.



**Gidi Kaempfer**, Hoofd van Core Engineering, StarkWare