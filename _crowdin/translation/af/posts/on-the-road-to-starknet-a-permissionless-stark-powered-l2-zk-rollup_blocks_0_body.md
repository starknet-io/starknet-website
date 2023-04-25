#### **TL; DR**

Ons bou StarkNet in vier stappe:

* Stap 0 — Grondslae (voltooi*)
* Stap I — Planete: Enkeltoepassing-opsommings
* Stap II — Konstellasies: Multi-App Opsommings
* Stap III — Heelal: 'n Gedesentraliseerde opsomming

Ons verwag om Stap I oor 'n paar kort maande te laat ontplooi en teen die einde van 2021 goed op pad te wees na Stap II & III.

### **Inleiding**

StarkWare bou StarkNet, 'n gedesentraliseerde, toestemminglose en sensuurbestande STARK-aangedrewe L2 ZK-Rollup wat algemene berekening oor Ethereum ondersteun. Dit is gebaseer op die Turing-volledige[Kaïro-taal](https://www.cairo-lang.org/).

Ontwikkelaars, gebruikers en StarkNet-nodusse sal alles kan doen wat 'n mens sou verwag van 'n toestemminglose L2-opsomming: Ontwikkelaars kan toepassings bou wat hul eie besigheidslogika implementeer en dit op StarkNet ontplooi. Gebruikers kan transaksies na StarkNet stuur om uitgevoer te word, net soos hulle vandag met Ethereum kommunikeer. StarkNet-nodusse en deelnemers sal kripto-ekonomies aangespoor word om te verseker dat die netwerk doeltreffend en regverdig funksioneer.

Alle StarkNet-transaksies sal periodiek saamgevoeg word, en hul geldigheid sal bewys word in 'n STARK-bewys, om op Ethereum geverifieer te word. Aangesien die berekeningspoging wat nodig is om STARK-bewyse te verifieer eksponensieel klein is in vergelyking met die berekening wat bewys is, sal StarkNet Ethereum volgens grootteordes skaal.

Aangesien alle StarkNet-staatoorgange STARK-bewys sal wees, sal slegs geldige oorgange op Ethereum aanvaar word. Alle data wat nodig is om die volle StarkNet-staat te rekonstrueer, sal op die ketting gepubliseer word. Enigeen sal hul eie StarkNet-nodus kan bestuur. Hierdie eienskappe sal StarkNet so veilig en toestemmingloos maak soos Ethereum.

Ons is al drie jaar daarmee besig en het reeds 'n paar merkwaardige mylpale bereik deur "Moon Math" te omskep in produksiegraad en doeltreffende sagteware wat op Ethereum loop. Die manier waarop StarkWare dinge doen, is om eers die moeilike probleme aan te pak, die kerntegnologie te bou en dit dan stuksgewys na produksie vry te stel. Ons sal voortgaan om op hierdie manier te bou soos ons StarkNet tot voltooiing bring.

![](/assets/ontheroad_02.png)

**Stap 0 — Grondslae**

StarkWare het 'n paar belangrike grondslae vir StarkNet voltooi.

#### **Kaïro**

[Kaïro](https://twitter.com/StarkWareLtd/status/1300353049836376066?s=20)is ons Turing-volledige hoëvlaktaal & raamwerk vir die vervaardiging van STARK-bewyse vir algemene berekening. In plaas daarvan om komplekse "kringe" of AIR's met die hand te maak, kan 'n toepassingsontwikkelaar Kaïro gebruik om enige besigheidslogika te definieer, dit buite die ketting te laat bewys en in die ketting te verifieer. Cairo is[in produksie op Mainnet](https://twitter.com/StarkWareLtd/status/1320695603492507648?s=20), en is ook[beskikbaar vir ontwikkelaars](http://cairo-lang.org/).

Oor 'n paar weke sal ons 'n Alpha-weergawe van Kaïro se Generic Proof Service (GPS) op 'n openbare Ethereum-toetsnet bekendstel. *Dit sal ontwikkelaars in staat stel om hul eie toepassings te bou deur Kaïro te gebruik, en implementeer watter besigheidslogika hulle ook al wil hê. Hulle sal hul Kaïro-kode na die GPS stuur om bewys te word, en dan op die ketting geverifieer word.*

GPS stel 'n enkele bewys in staat om die integriteit van die uitvoering van heeltemal afsonderlike en onafhanklike toepassings te bevestig, waardeur daardie toepassings die vermoë gee om die gaskoste van bewysverifikasie onder hulle te amortiseer.

Kaïro en GPS is die basis van StarkNet — ons besluit om beide aan ontwikkelaars te eksternaliseer, bied hulle vroeë blootstelling aan hierdie tegnologie, nie net sodat hulle daarop kan begin bou nie, maar ook sodat hulle StarkNet se evolusie kan beïnvloed.

Ons sal voortgaan om Kaïro te ontwikkel op grond van die behoeftes en terugvoer van die ontwikkelaargemeenskap. Ons sal hierdie taal verbeter met nuwe kenmerke, sintaksis en ingeboude wat die bruikbaarheid daarvan verbeter, en ons sal voortgaan om Kaïro-gereedskap te ontwikkel en te verbeter: samestellers, tracer/debugger en integrasies met algemene IDE's.

StarkNet sal Kaïro onder die enjinkap laat loop.

#### **Die STARK sagteware stapel**

StarkWare het die kragtigste bewysstelsel in die ekosisteem ontwikkel, en dit is maande lank[regstreeks op Mainnet](https://medium.com/starkware/starks-over-mainnet-b83e63db04c0). StarkWare het ook[ethSTARK](https://twitter.com/StarkWareLtd/status/1264911004099543040?s=20)ontwikkel, ons oopbron-bewyser, wat 20X vinniger is as enige ander bewyser; dit bied beide[zero-kennis en post-kwantum-veilige handtekeninge](https://twitter.com/StarkWareLabs/status/1331930111227080709).

Ons skaal*metings*- nie ekstrapolasies of beloftes nie - sluit die verwerking van 300K transaksies in 'n enkele bewys op Mainnet in, wat[die wêreldrekord in Rollup-deurset behaal: 3K tps](https://twitter.com/StarkWareLtd/status/1287770381525422082?s=20). In die proses het ons die wêreldrekord vir Rollup-gasdoeltreffendheid behaal: 315 gas/tx, ordes van grootte goedkoper as transaksies op Ethereum L1.

Hierdie tegnologie sal die hoeksteen van die gedesentraliseerde bewyslaag van StarkNet wees, en daarom sal ons bykomende en verbeterde bewysstukke vrystel as deel van StarkNet se ontwikkeling (meer daaroor in 'n komende blogplasing).

#### **StarkEx**

StarkEx is ons L2-skaalbaarheidsenjin. Dit bedien sedert Junie 2020[DeversiFi](https://twitter.com/deversifi)se kliënte op Mainnet. Dit sal beide[dYdX](https://twitter.com/dydxprotocol)en[ImmutableX](https://twitter.com/Immutable)van krag begin oor 'n paar kort weke. StarkEx kan komplekse handelslogika (spothandel, afgeleide instrumente, NFT's) sowel as betalings hanteer.

Die ontwikkeling van StarkEx was ons manier om ons gereedskapketting te dogfood en dit te toets teen werklike behoeftes. Daar is niks soos die eise van werklike toepassings en lewendige gebruikers om gereedskap te help groei en ontwikkel nie. Dit help ons ook om te verstaan watter elemente aangespreek moet word om die ekosisteem beter te dien - byvoorbeeld integrasies met beursies en blokverkenners.

StarkEx is 'n lewendige voorbeeld van die vermoë om toepassings te skaal met behulp van 'n STARK-gebaseerde ZK-Rollup, en is die eerste toepassing in produksie op Mainnet wat in Kaïro geskryf is. As sodanig sal dit ook een van die toepassings wees wat op StarkNet loop.

![](/assets/ontheroad_03.png)

### **Die pad vorentoe**

#### **Stap I — Planete: Enkeltoepassing-opsommings**

Hierdie stap sal ontwikkelaars in staat stel om hul eie skaalbare toepassings op StarkNet te bou en te ontplooi.

Op hierdie stadium sal elke StarkNet-instansie 'n enkele toepassing kan laat loop. Verskillende gevalle kan verskillende toepassings laat loop.\
Die StarkNet-raamwerk sal die volgende insluit:

* Meganismes wat nodig is om STARK-bewyse vir arbitrêre Kaïro-logika te genereer, en dit dan op Ethereum in te dien en te verifieer.
* Interaksies met L1 Ethereum: deposito's en onttrekkings van L1-tokens, publisering van die on-ketting data, ontsnappingsmeganismes wat StarkNet-gebruikers beskerm teen kwaadwillige StarkNet-operateurs, ens.
* Bestuur van die L2-gebruikersbalanse, en van die toepassing se berging en geheue.

Ontwikkelaars sal uitsluitlik op die bou van hul toepassing se besigheidslogika kan fokus, en dan na produksie beweeg: ontplooi en op skaal op StarkNet laat loop.

Wat ons in staat stel om 'n algemene berekening skaalbare ZK-Rollup te bou, is die kombinasie van:

* Kaïro, wat 'n algemene Turing-volledige programmeertaal is
* Ons sterk STARK-stapel (bewyser en verifieerder), wat dit moontlik maak om enorme berekeninge in 'n enkele bewys te bundel

#### **Stap II — Konstellasies: Multi-App Opsommings**

Die volgende stap sal verskeie toepassings ondersteun wat op dieselfde StarkNet-instansie loop en toegang tot dieselfde globale L2-toestand verkry. Dit sal interoperabiliteit tussen verskillende toepassings moontlik maak, asook verlaagde gaskoste as gevolg van verbeterde skaalvoordele.

Kaïro, die kragtige STARK-stapel, en GPS versterk StarkNet se mededingende voordeel in die ondersteuning van 'n multi-app-opsomming.

Op hierdie stadium sal StarkNet 'n ten volle funksionele raamwerk wees om*veelvuldige*toepassings met enige arbitrêre besigheidslogika bo-op Ethereum te laat loop, met elke instansie wat deur 'n enkele operateur bestuur word.

'n Operator kan nou 'n StarkNet-nodus opbou, en toepassingsontwikkelaars kan hul kontrakte daarop ontplooi. Vanuit die gebruikers se perspektief lyk en voel StarkNet nou soos Ethereum, met 'n hoër skaal.

#### **Stap III — Heelal: Gedesentraliseerde Opsomming**

Die laaste stap in die evolusie van StarkNet is om sy werking te desentraliseer.

Interessante R&D-vrae wat ons nou aanpak wat hierdie stadium raak, sluit in (i) die gebruik van ZK-Rollups om konsensus-bereikmeganismes te verbeter, en (ii) die ontwerp van kripto-ekonomiese meganismes om die gedesentraliseerde StarkNet-bydraers en -operateurs (transaksievolgorders, provers, ens.) om doeltreffend, regverdig en veilig te funksioneer.

### **Afsluiting**

StarkWare bou StarkNet, 'n gedesentraliseerde toestemminglose STARK-aangedrewe L2 ZK-Rollup oor Ethereum, wat algemene berekening ondersteun op grond van die Kaïro-taal.

StarkNet sal toepassings in staat stel om te skaal sonder om sekuriteit in te boet, gebruikers om redelike transaksiefooie te betaal, en die hele ekosisteem om wesenlik te groei en sy belofte na te kom.

Ons nooi graag die ontwikkelaargemeenskap uit om saam met ons[hierdie reis](https://twitter.com/StarkWareLtd)te sluit.

**Opdatering (Nov. 2021):**StarkNet Alpha is regstreeks op Ethereum Mainnet