### TL;DR

* **Caïro 1.0 is open source! Dit is slechts een eerste stap op weg naar open sourcing van de StarkNet-stack.**
* We presenteren nu een[eerste kijk](https://github.com/starkware-libs/cairo)in de compilator van Caïro 1.0. Je kunt nu beginnen met experimenteren met de basiscode van Caïro 1.0
* Caïro 1.0 is de kern ervan erg vergelijkbaar met Rust
* Beschouw het als een eerste smaak, niet als een release. Er zijn nog meer verbeteringen onderweg. De eerste versie van de compilator is gepland voor vroege Q1 volgend jaar.
* Caïro 1.0 wordt nog niet ondersteund op StarkNet. Het zal volgend jaar worden ondersteund op StarkNet in Q1.

### Introductie

In 2020 hebben we[Caïro](https://eprint.iacr.org/2021/1063.pdf)vrijgegeven, een Turing-complete programmeertaal die verifieerbare berekeningen ondersteunt. Caïro begon als een montagetaal en werd geleidelijk meer expressief. Twee maanden geleden hebben we[Caïro 1.0](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)aangekondigd, waarin enkele belangrijke kwesties in de huidige situatie aan de orde worden gesteld:

* Hoewel de syntaxis van Caïro sinds het begin van de conferentie aanzienlijk is verbeterd, kan de ervaring van de ontwikkelaar altijd verbeteren. Cairo 1.0 is een roestige taal die volledig is getypt, waardoor het schrijven van dezelfde logica veel gemakkelijker en minder foutgevoelig is.
* De bestaande compiler is ontwikkeld in dezelfde repo als StarkNet zelf, waardoor het moeilijker is om taalwijzigingen te volgen. De Caïro 1.0 compiler wordt van de grond geschreven, wat de ontwikkeling van snellere functies en de betrokkenheid van de gemeenschap mogelijk maakt.
* Elke berekening is nu bewezen. Op dit moment kan een Caïro-programma mislukken met specifieke invoer (bijvoorbeeld door een \`assert 1=2\` instructie in sommige rekeningsbranch te bereiken), waardoor de berekening onbruikbaar wordt. Met Caïro 1.0 zijn programma's in elke mogelijke tak aantoonbaar. Dit is vooral belangrijk voor de bescherming van DOS en censuur in StarkNet.

Vandaag markeren we de eerste mijlpaal in het bereiken van bovengenoemde doelstellingen wanneer we de ontwikkeling naar een publieke repo, en**open source Caïro 1 !**Ontwikkelaars kunnen nu voor het eerst Caïro 1.0 programma's compileren en uitvoeren. Dit stelt ontwikkelaars in staat te experimenteren met Caïro 1. en geleidelijk aan gewend raken aan de nieuwe functies, ook al kunnen ze deze in deze fase nog niet op StarkNet implementeren.

### Huidige mogelijkheden

Op dit moment kunt u basisprogramma's van Caïro compileren en uitvoeren. Hoewel veel van de syntaxis- en taalverbeteringen nog gaande zijn, maakt dit het mogelijk om gewend te raken aan Caïro 1.0 en geniet van verbeteringen zodra ze komen.

**Merk op dat het schrijven van StarkNet-contracten nog steeds niet wordt ondersteund.**StarkNet syntaxis (opslag variabelen / oproep contracten / events en andere systeem oproepen) zal in de komende weken worden toegevoegd.

### Code voorbeelden

Ter illustratie van de verschillen tussen de oude syntaxis en Cairo 1. , we hebben ervoor gekozen om een paar verschillende implementaties/smaken te tonen van het niet-Fibonacci nummer.

### Voorbeeld I: Match expressies

In Caïro 1.0 kun je roest-like[match](https://doc.rust-lang.org/rust-by-example/flow_control/match.html?highlight=match#match)expressies gebruiken. Je zult niet langer bang zijn als/anders uitspraken die kunnen leiden tot referentie-herroeping!

![](/assets/code01.png)

### Voorbeeld II: gegevenstypes

Terwijl Caïro 0 werkte met vilts en aanwijzingen, hebben we in Caïro 1.0 toegang tot complexe gegevenstypes in de taal. Hieronder vindt u een voorbeeld dat een array van de eerste n Fibonacci nummers genereert.

![](/assets/code02.png)

Zoals u hierboven kunt zien, gebruiken we de `Array:: in plaats van direct met geheugenaanwijzers te werken:<felt>\` type en de \`array_append\`functie.

### Voorbeeld III: bouw & eigendom

De volgende code illustreert het gebruik van bouwwerken in Caïro 1,0.

![](/assets/code03.png)

> De volgende paragraaf is bedoeld voor de aanhangers van geruchten onder het publiek. Caïro 1.0 beheert geheugen op dezelfde manier als roest. Het gebruikt met name de concepten van[eigendom en lenen](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html). Dus, door toegang te krijgen tot een lid van de \`FibResult\` bouwt (in dit geval, \`resultaat. alue\`), we hebben \`resultaat\` verplaatst, wat betekent dat we, tenzij FibResultaat auteursbaar is, geen toegang meer kunnen krijgen in \`result.index\`. Om dit te overwinnen voegen we het \`#\[derive(Copy)]\` attribuut toe van het \`FibResult\` type. In toekomstige versies zullen we automatische deconstructie voor bouwwerken toevoegen. Dit maakt verplaatsing van het eigendom van één lid mogelijk zonder de anderen aan te raken (in het bijzonder de bovenstaande code zou compileren, zelfs als \`FibResult\` geen kopie attribuut heeft).

**Merk vooral op dat Caïro 1.0 het originele (geen deterministisch alleen-lezen) geheugenmodel van Caïro volledig aan het knippen is.**

## Voorbeeld IV: Foutpropagatie

De volgende code berekent het n'th Fibonacci nummer, maar in tegenstelling tot de vorige voorbeelden, zijn alle ingangen van het type uint128. Merk op dat dit een belangrijk pijnpunt van de behandeling in Caïro 0 oplost. Hier zijn uint128 (en in de toekomst uint256) inheemse types.

![](/assets/0_s8bhjf_ade3carmi.png)

De toevoeging van twee 128 bit integers kan een overloop veroorzaken. De bovenstaande code maakt gebruik van de[optie enum](https://doc.rust-lang.org/rust-by-example/std/option.html)en de[vraagteken operator](https://doc.rust-lang.org/rust-by-example/std/result/question_mark.html)om het geval van overloop in een van de tussenliggende toevoegingen aan te pakken. Vergelijk dit met de[huidige](https://github.com/starkware-libs/cairo-lang/blob/9889fbd522edc5eff603356e1912e20642ae20af/src/starkware/cairo/common/uint256.cairo#L31)uint256 additie syntaxis, waar de \`unit256_check\` functie aangeroepen moest worden om geluid te garanderen. Ook in de nabije toekomst we zullen het concept van \`panic\` toevoegen aan de taal (vergelijkbaar met de[paniek](https://doc.rust-lang.org/rust-by-example/std/panic.html)macro in roest), en eenvoudige fouten zoals optellen zullen niet te pakken zijn en automatisch worden gepropageerd, wat betekent dat je \`Option\` of \`? niet hoeft te gebruiken? ` bij het toevoegen van uints.

## Probeer het zelf

U kunt nu Cairo 1.0 programma's compileren en uitvoeren! Volg deze[instructies](https://github.com/starkware-libs/cairo/tree/main/crates/cairo-lang-runner)over het gebruik van het \`cairo-run\` commando. Merk op dat onder de kap, de[Rust Cairo VM](https://github.com/lambdaclass/cairo-rs), ontwikkeld door[Lambdaclass](https://lambdaclass.com/), wordt gebruikt voor uitvoering.

Je kunt meer voorbeelden vinden om te helpen[hier](https://github.com/starkware-libs/cairo2/tree/main/examples). Merk op dat dit slechts de eerste blik is in de compilatorontwikkeling; in de komende weken zullen we de CLI naast de compiler verbeteren.

## Toekomstige pakketten

Het zwaartepunt van de eerste versie van de Compiler, die gepland is voor vroege Q1, is het ondersteunen van alle bestaande functionaliteit van StarkNet in Caïro 1.0. Daarnaast werken we aan het uitbreiden van de mogelijkheden van de compiler van Cairo 1.0. In de komende weken kunt u het volgende verwachten:

* StarkNet mogelijkheden - het schrijven van slimme contracten en het gebruiken van systeemgesprekken.
* Lussen
* Nieuwe bibliotheekfuncties
* Verbeterde taalserver
* Een autochtone notie van StarkNet-gas

Let op dat je de voortgang van de compilator blijft bijhouden!