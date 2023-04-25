### TL; DR

* **Cairo 1.0 is oopbron! Dit is slegs die eerste stap in die rigting van oop-sourcing van die StarkNet-stapel.**
* Ons bied nou 'n[eerste kyk](https://github.com/starkware-libs/cairo)in die Cairo 1.0 samesteller. Jy kan nou begin eksperimenteer met basiese Cairo 1.0-kode
* Cairo 1.0 in sy kern is baie soortgelyk aan Rust
* Beskou dit as 'n eerste smaak, nie 'n vrystelling nie. Meer verbeterings is op pad. Die eerste weergawe van die samesteller word vir vroeë Q1 volgende jaar beplan.
* Cairo 1.0 word nog nie op StarkNet ondersteun nie. Dit sal volgende jaar in Q1 op StarkNet ondersteun word.

### Inleiding

In 2020 het ons[Cairo](https://eprint.iacr.org/2021/1063.pdf)vrygestel, 'n Turing-volledige programmeertaal wat verifieerbare berekening ondersteun. Kaïro het as 'n samestellende taal begin en geleidelik meer ekspressief geword. Twee maande gelede het ons[Cairo 1.0](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)aangekondig, wat 'n paar groot kwessies in die huidige situasie aanspreek:

* Terwyl Kaïro se sintaksis aansienlike verbetering gesien het sedert sy ontstaan, kan die ontwikkelaarervaring altyd verbeter. Cairo 1.0 is 'n roes-geïnspireerde volledig getikte taal, wat die skryf van dieselfde logika baie makliker maak en minder foutgevoelig maak.
* Die bestaande samesteller is ontwikkel in dieselfde repo as StarkNet self, wat dit moeiliker maak om taalveranderinge op te spoor. Die Cairo 1.0-samesteller is van die grond af geskryf, wat vinniger kenmerkontwikkeling en meer gemeenskapsbetrokkenheid moontlik maak.
* Elke berekening is nou bewysbaar. Tans kan 'n Kaïro-program misluk met spesifieke insette (bv. deur 'n \`assert 1=2\` instruksie in een of ander berekeningstak te bereik), wat die berekening onbewysbaar maak. Met Cairo 1.0 is programme bewysbaar in elke moontlike tak. Dit is veral belangrik vir DOS-beskerming en sensuurweerstand in StarkNet.

Vandag merk ons die eerste mylpaal in die bereiking van bogenoemde doelwitte, aangesien ons die ontwikkeling na 'n openbare repo skuif, en**open source Cairo 1.0!**Ontwikkelaars kan nou vir die eerste keer eenvoudige Cairo 1.0-programme saamstel en uitvoer. Dit stel ontwikkelaars in staat om met Cairo 1.0 te begin eksperimenteer en geleidelik gewoond te raak aan die nuwe kenmerke, selfs al kan hulle dit in hierdie fase nog nie op StarkNet implementeer nie.

### Huidige vermoëns

Tans kan jy basiese inheemse Kaïro-programme saamstel en uitvoer. Alhoewel baie van die sintaksis/taalverbeterings nog aan die gang is, laat dit gewoond raak aan Cairo 1.0 en geniet opgraderings soos dit kom.

**Let daarop dat die skryf van StarkNet-kontrakte steeds nie ondersteun word nie.**StarkNet-sintaksis (stoorveranderlikes / oproepkontrakte / gebeurtenisse en ander stelseloproepe) sal in die komende weke bygevoeg word.

### Kode voorbeelde

Om die verskille tussen die ou sintaksis en Cairo 1.0 te illustreer, het ons gekies om 'n paar verskillende implementerings/geure van die vind van die n'de Fibonacci-nommer te wys.

### Voorbeeld I: Pas uitdrukkings by

In Cairo 1.0 kan jy roesagtige[pas](https://doc.rust-lang.org/rust-by-example/flow_control/match.html?highlight=match#match)uitdrukkings gebruik. Jy sal nie meer vrees as/anders stellings wat verwysingsherroeping kan veroorsaak nie!

![](/assets/code01.png)

### Voorbeeld II: Datatipes

Terwyl Cairo 0 met vilte en wysers gewerk het, het ons in Cairo 1.0 inheemse toegang tot komplekse datatipes in die taal. Hieronder kan jy 'n voorbeeld vind wat 'n skikking van die eerste n Fibonacci-getalle genereer.

![](/assets/code02.png)

Soos u hierbo kan sien, gebruik ons eerder as om direk met geheuewysers te werk, die `Array::<felt>\` tipe en die \`array_append\`funksie.

### Voorbeeld III: strukture & eienaarskap

Die volgende kode illustreer die gebruik van strukture in Cairo 1.0.

![](/assets/code03.png)

> Die volgende paragraaf is bedoel vir die Rustaceans onder die gehoor. Cairo 1.0 bestuur geheue op 'n soortgelyke manier as roes. Dit gebruik veral die konsepte van[eienaarskap en leen](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html). Dus, deur toegang tot 'n lid van die \`FibResult\`-struktuur (in hierdie geval, \`result.value\`), het ons \`result\` geskuif, wat beteken dat tensy FibResult kopieerbaar is, ons nie kan kry weer toegang daartoe in \`result.index\`. Om dit te oorkom, voeg ons die \`#\[derive(Copy)]\`-kenmerk van die \`FibResult\`-tipe by. In toekomstige weergawes sal ons outomatiese dekonstruksie vir strukture byvoeg. Dit sal die verskuiwing van eienaarskap van een lid toelaat sonder om aan die ander te raak (veral die bogenoemde kode sal saamstel selfs al het \`FibResult\` nie die copy-kenmerk gehad nie).

**Let veral op dat Cairo 1.0 die oorspronklike (geen-deterministiese leesalleen-lees) geheuemodel van Kaïro heeltemal onttrek.**

## Voorbeeld IV: Foutvoortplanting

Die volgende kode bereken die n'de Fibonacci-nommer, maar anders as die vorige voorbeelde, is al die invoere van die tipe uint128. Let daarop dat dit 'n groot pynpunt van die hantering van uints in Kaïro 0 oplos. Hier is uint128 (en in die toekoms uint256) inheemse tipes.

![](/assets/0_s8bhjf_ade3carmi.png)

Die byvoeging van twee 128-bis heelgetalle kan 'n oorloop veroorsaak. Die bogenoemde kode gebruik die[-opsie-enum](https://doc.rust-lang.org/rust-by-example/std/option.html)en die[vraagtekenoperateur](https://doc.rust-lang.org/rust-by-example/std/result/question_mark.html)om die geval van oorloop in een van die intermediêre byvoegings te hanteer. Vergelyk dit met die[huidige](https://github.com/starkware-libs/cairo-lang/blob/9889fbd522edc5eff603356e1912e20642ae20af/src/starkware/cairo/common/uint256.cairo#L31)uint256-optellingsintaksis, waar die \`unit256_check\`-funksie geroep moes word om betroubaarheid te waarborg. Boonop sal ons in die nabye toekoms die konsep van \`paniek\` by die taal voeg (soortgelyk aan die[paniek](https://doc.rust-lang.org/rust-by-example/std/panic.html)makro in roes), en eenvoudige foute soos optel oorloop sal onopvangbaar wees en outomaties gepropageer word, wat beteken dat jy hoef nie \`Option\` of \`?\` te gebruik wanneer uints byvoeg nie.

## Probeer dit self

U kan nou tans ondersteunde Cairo 1.0-programme saamstel en laat loop! Volg hierdie[instruksies](https://github.com/starkware-libs/cairo/tree/main/crates/cairo-lang-runner)oor hoe om die \`cairo-run\` opdrag te gebruik. Let daarop dat onder die enjinkap die[Rust Cairo VM](https://github.com/lambdaclass/cairo-rs), ontwikkel deur[Lambdaclass](https://lambdaclass.com/), vir uitvoering gebruik word.

Jy kan meer voorbeelde vind om jou te help om aan die gang te kom[hier](https://github.com/starkware-libs/cairo2/tree/main/examples). Let daarop dat dit slegs die eerste kykie na die samestellerontwikkeling is; in die komende weke sal ons die CLI saam met die samesteller verbeter.

## Toekomsplanne

Die fokus van die eerste weergawe van die samesteller, wat vir vroeë Q1 beplan word, is om alle bestaande funksionaliteit van StarkNet in Kaïro 1.0 te ondersteun. Boonop werk ons daaraan om die vermoëns van die Cairo 1.0-samesteller uit te brei. In die komende weke kan jy verwag:

* StarkNet-vermoëns - skryf slim kontrakte en gebruik stelseloproepe.
* Lusse
* Nuwe biblioteekfunksies
* Verbeterde taalbediener
* 'n Inheemse idee van StarkNet-gas

Maak seker dat jy ingeskakel bly en die samestellervordering volg!