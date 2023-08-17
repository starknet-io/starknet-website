### TL; DR

* Rekursiewe bewys is regstreeks op Mainnet, en skaal StarkEx-toepassings sowel as StarkNet met 'n enkele bewys
* Dit verhoog skaal, en lewer voordeel in koste en latensie ('n seldsame en opwindende voorkoms van skaal en latensie wat in tandem beweeg, en nie 'n kompromis is nie)
* Dit stel die verhoog vir T3 en ander voordeleGaan lees die blogplasing op[Rekursiewe bewys](https://medium.com/@starkware/recursive-starks-78f8dd401025). Dis oulike goed 😉

### Verbeter!

Rekursiewe bewyse - aangedryf deur Kaïro se algemene berekening - is nou in produksie. Dit is 'n groot hupstoot vir die krag van L2-skaal met STARK's. Dit sal vinnig 'n veelvoudige toename lewer in die aantal transaksies wat via 'n enkele bewys na Ethereum geskryf kan word.

Tot nou toe het STARK-skaal gewerk deur tien of selfs honderdduisende transaksies in 'n enkele bewys te "oprol" wat na Ethereum geskryf is. Met rekursie kan baie sulke bewyse in 'n enkele bewys "opgerol" word.

Hierdie metode is nou in produksie vir 'n menigte Kaïro-gebaseerde toepassings: toepassings wat op StarkEx loop, StarkWare se SaaS-skaalenjin en StarkNet, die toestemminglose oprol.

### Die storie so ver

Sedert die eerste bewys op Mainnet, in Maart 2020, het die volgende ontwikkelings gevorm hoe STARKs gebruik word.

### STARK-gebaseerde skaal

In Junie 2020 is die eerste STARK-gebaseerde skaaloplossing -[StarkEx](https://youtu.be/P-qoPVoneQA)- op Ethereum Mainnet ontplooi. StarkEx het 'n Bewyser wat groot berekenings buite die ketting uitvoer en 'n STARK-bewys lewer vir hul korrektheid, en 'n Verifieerder wat hierdie bewys aan die ketting verifieer. Die beperkings vir hierdie eerste ontplooiing is "met die hand geskryf" deur StarkWare se ingenieurs, wat die kenmerksnelheid vir StarkEx aansienlik beperk. Ons het tot die gevolgtrekking gekom dat 'n programmeertaal nodig is om algemene berekening te bewys - Kaïro.

#### Kaïro

In die somer van 2020 het Kaïro sy[eerste verskyning op Ethereum Mainnet](https://medium.com/starkware/hello-cairo-3cb43b13b209)gemaak. Cairo staan vir CPU Algebraic Intermediate Representation (AIR), en sluit 'n enkele AIR in wat die instruksiestel van hierdie "CPU" verifieer. Dit het die deur oopgemaak vir kodering van bewyse vir meer komplekse besigheidslogika, vir arbitrêre berekeningstellings, en om dit vinniger en veiliger te doen. 'n Kaïro-program kan die uitvoering van 'n enkele toepassing se logika bewys. Maar 'n Kaïro-program kan ook 'n samevoeging van verskeie sulke toepassings wees - SHARP.

#### SKERP

SHARP - 'n GEDEELDE Bewyser - neem transaksies vanaf verskeie aparte toepassings en bewys hulle almal in een enkele STARK-bewys. Programme kombineer hul groepe transaksies, wat die kapasiteit van 'n STARK-bewys vinniger vul. Transaksies word teen 'n verbeterde tempo en vertraging verwerk. Die volgende grens: Rekursiewe bewyse, maar nie net vir een of ander hardgekodeerde logika nie, maar eerder vir**algemene berekening**.

Om die volle voordeel van Rekursiewe Bewysing te verstaan, is dit die moeite werd om 'n bietjie meer te verstaan oor hoe (nie-rekursiewe) bewys tot dusver deur SHARP uitgevoer is. Tekening 1 beeld 'n tipiese nie-rekursiewe vloei uit:

![Tekening 1: 'n Tipiese nie-rekursiewe bewysvloei](/assets/recursive_starks_01.png "Tekening 1: 'n Tipiese nie-rekursiewe bewysvloei")

Hier kom verklarings mettertyd aan. Wanneer 'n sekere kapasiteit (of tyd) drempel bereik word, word 'n groot gekombineerde stelling (ook bekend as Trein) gegenereer. Hierdie gekombineerde verklaring word eers bewys sodra al die individuele state ontvang is. Hierdie bewys neem lank om te bewys (ongeveer die som van die tyd wat dit neem om elke stelling individueel te bewys).

Die bewys van uiters groot stellings word uiteindelik beperk deur beskikbare rekenaarhulpbronne soos geheue. Voor rekursie was dit effektief die beperkende skaalbaarheidsversperring van STARK-bewys.

### Wat is rekursiewe bewys?

Met STARK-bewyse is die tyd wat dit neem om 'n stelling te bewys rofweg lineêr met die tyd wat dit neem om die stelling uit te voer. Daarbenewens, as die bewys van 'n stelling T tyd neem, neem die verifikasie van die bewys ongeveer log(T) tyd, wat tipies "logaritmiese kompressie" genoem word. Met ander woorde, met STARK's spandeer jy baie minder tyd om die stelling te verifieer as om dit te bereken.

[Kaïro](https://starkware.co/cairo/)laat die uitdrukking van algemene berekeningstellings toe wat deur STARK-bewyse bewys kan word en deur die ooreenstemmende STARK-verifieerders geverifieer kan word.

Dit is waar die geleentheid om[rekursie](https://en.wikipedia.org/wiki/Recursion)uit te voer inskop: Op dieselfde manier as wat ons 'n Kaïro-program skryf wat die korrektheid van duisende transaksies bewys, kan ons ook 'n Kaïro-program skryf wat veelvuldige STARK-bewyse verifieer. Ons kan 'n enkele bewys genereer wat getuig van die geldigheid van veelvuldige "stroomop"-bewyse. Dit is wat ons noem Rekursiewe Bewys.

As gevolg van die logaritmiese kompressie en rofweg lineêre bewystyd, neem die bewys van 'n verifikasie van 'n STARK-bewys relatief kort tyd (na verwagting net 'n paar minute in die nabye toekoms).

Wanneer Rekursie geïmplementeer word, kan SHARP stellings bewys by hul aankoms. Hul bewyse kan oor en oor saamgevoeg word in rekursiewe bewyse in verskeie patrone totdat die gevolglike bewys op 'n sekere punt aan 'n on-chain verificateur kontrak voorgelê word. 'n Tipiese patroon word in Tekening 2 uitgebeeld:

![Tekening 2: 'n Tipiese rekursiewe bewysvloei.](/assets/recursive_starks_02.png "Tekening 2: 'n Tipiese rekursiewe bewysvloei.")

### Onmiddellike voordele van rekursiewe bewys

#### Verlaagde on-ketting koste

Van die kolf af bereik ons "kompressie" van veelvuldige bewyse in een, wat laer on-ketting-verifikasiekoste per transaksie impliseer (waar elke stelling baie transaksies kan insluit).

Met rekursie word die berekeningshulpbronversperring (bv. geheue) wat bewysgrootte tot dusver beperk het, uitgeskakel, aangesien elke beperkte grootte-stelling afsonderlik bewys kan word. Dus, wanneer rekursie gebruik word, is die effektiewe treingrootte van rekursie byna onbeperk, en die koste per transaksie kan met ordes van grootte verminder word.

In praktiese terme hang die vermindering af van die aanvaarbare latency (en die tempo waarteen transaksies aankom). Daarbenewens, aangesien elke bewys tipies ook vergesel word van een of ander uitset soos on-chain data, is daar beperkinge op die hoeveelheid data wat op-ketting geskryf kan word saam met 'n enkele bewys. Nietemin, om koste met 'n orde van grootte en selfs beter te verminder, is onbenullig haalbaar.

#### Verminderde latensie

Die rekursiewe bewyspatroon verminder die vertraging van die bewys van groot treine van stellings. Dit is die gevolg van twee faktore:

1. Inkomende stellings kan**in parallel**bewys word (in teenstelling met die bewys van 'n uiters groot gekombineerde stelling).
2. Dit is nie nodig om te wag totdat die laaste verklaring in die Trein opdaag om te begin bewys nie. Bewyse kan eerder gekombineer word met nuwe stellings soos dit aankom. Dit beteken dat die vertraging van die laaste stelling wat by 'n Trein aansluit, rofweg die tyd is wat dit neem om daardie heel laaste stelling te bewys plus die tyd wat dit neem om 'n Rekursiewe Verifieerder-stelling te bewys (wat getuig van al daardie stellings wat reeds hierdie "aanboord" het spesifieke trein).

Ons is aktief besig om die latensie van die bewys van die Rekursiewe Verifier-stelling te ontwikkel en te optimaliseer. Ons verwag dat dit binne 'n paar maande die orde van 'n paar minute sal bereik. Gevolglik kan 'n hoogs doeltreffende SHARP vertragings van 'n paar minute tot 'n paar uur bied, afhangende van die afweging teenoor die koste van die ketting per transaksie. Dit verteenwoordig 'n betekenisvolle verbetering van SHARP se latensie.

#### Fasilitering van L3

Die ontwikkeling van die Recursive Verifier-verklaring in Kaïro maak ook die moontlikheid oop om bewyse by StarkNet in te dien, aangesien daardie stelling in 'n StarkNet-slimkontrak gebak kan word. Dit maak dit moontlik om[L3-ontplooiings bo-op die publieke StarkNet](https://medium.com/starkware/fractal-scaling-from-l2-to-l3-7fe238ecfb4f)('n L2-netwerk) te bou.

Die rekursiewe patroon is ook van toepassing op die samevoeging van bewyse vanaf L3, wat deur 'n enkele bewys op L2 geverifieer moet word. Gevolglik word hiperskaal ook daar bereik.

### Meer subtiele voordele

#### Toepassingsrekursie

Rekursie bied selfs meer geleenthede vir platforms en toepassings wat hul koste en werkverrigting verder wil skaal.

Elke STARK-bewys getuig van die geldigheid van 'n stelling wat toegepas word op een of ander inset wat bekend staan as die "openbare insette" (of "programuitset" in Kaïro-terme). Konseptueel komprimeer STARK rekursie twee bewyse met*twee*insette in*een*bewys met twee insette. Met ander woorde, terwyl die aantal bewyse verminder word, word die aantal insette konstant gehou. Hierdie insette word dan tipies deur 'n toepassing gebruik om 'n toestand op L1 op te dateer (bv. om 'n staatswortel op te dateer of 'n on-ketting-onttrekking uit te voer).

As die rekursiewe stelling toegelaat word om*toepassingsbewus*te wees, dit wil sê die semantiek van die toepassing self herken, kan dit beide twee bewyse saampers in een*sowel as*die twee insette in een kombineer. Die gevolglike stelling getuig van die geldigheid van die invoerkombinasie gebaseer op die toepassingssemantiek, vandaar die naam Toepassingsrekursie (sien Tekening 3, vir 'n voorbeeld).

![Tekening 3: Toepassingsrekursie-voorbeeld](/assets/recursive_starks_03.png "Tekening 3: Toepassingsrekursie-voorbeeld")

Hier getuig stelling 1 van 'n staatsopdatering van A na B en stelling 2 getuig van 'n verdere opdatering van B na C. Bewyse van stelling 1 en stelling 2 kan in 'n derde stelling gekombineer word, wat getuig van die direkte opdatering van A na C Deur soortgelyke logika rekursief toe te pas, kan 'n mens die koste van staatsopdaterings baie aansienlik verminder tot by die finale latensievereiste.

Nog 'n belangrike voorbeeld van Toepassingsrekursie is om oproldata van veelvuldige bewyse saam te pers. Byvoorbeeld, vir 'n Geldigheidsopsomming soos StarkNet, word elke bergingopdatering op L2 ook ingesluit as transmissiedata op L1, om databeskikbaarheid te verseker. Dit is egter nie nodig om verskeie opdaterings vir dieselfde bergingselement te stuur nie, aangesien slegs die finale waarde van transaksies waarvan die bewys geverifieer is, vereis word vir databeskikbaarheid. Hierdie optimalisering word reeds binne 'n*enkele*StarkNet-blok uitgevoer. Deur egter 'n bewys per blok te genereer, kan Applicative Recursion hierdie oproldata oor*veelvuldige*L2-blokke saampers. Dit kan aansienlike kostevermindering tot gevolg hê, wat korter blokintervalle op L2 moontlik maak, sonder om die skaalbaarheid van L1-opdaterings in te boet.

Opmerklik: Toepassingsrekursie kan gekombineer word met toepassing-agnostiese rekursie soos vroeër uitgebeeld. Hierdie twee optimaliserings is onafhanklik.

#### Verminderde on-chain verifier kompleksiteit

Die kompleksiteit van die STARK-verifieerder hang af van die soort stellings wat dit ontwerp is om te verifieer. In die besonder, vir Kaïro-stellings, hang die verifieerder-kompleksiteit af van die spesifieke elemente wat in die Kaïro-taal toegelaat word, en, meer spesifiek, die ondersteunde ingeboude insette (as ons die SVE-metafoor vir Kaïro gebruik, dan is ingeboude die ekwivalent van mikro -kringe in 'n SVE: berekeninge wat so gereeld uitgevoer word dat hulle hul eie geoptimaliseerde berekening benodig).

Die Kaïro-taal gaan voort om te ontwikkel en bied meer en meer bruikbare ingeboude insetsels. Aan die ander kant vereis die rekursiewe verifieerder slegs die gebruik van 'n klein subset van hierdie ingeboude insetsels. Gevolglik kan 'n rekursiewe SHARP enige stelling in Kaïro suksesvol ondersteun deur die volle taal in die rekursiewe verifieerders te ondersteun. Spesifiek, die L1 Solidity Verifier hoef net rekursiewe bewyse te verifieer, en kan dus beperk word tot 'n meer stabiele subset van die Kaïro-taal: Die L1 Verifier hoef nie tred te hou met die nuutste en beste ingeboude items nie. Met ander woorde, verifikasie van steeds-ontwikkelende komplekse stellings word na L2 verskuif, wat die L1 Verifier laat om eenvoudiger en meer stabiele stellings te verifieer.

#### Verminderde berekeningsvoetspoor

Voor rekursie was die vermoë om veelvuldige stellings in een bewys saam te voeg, beperk deur die maksimum grootte van die stelling wat op beskikbare rekenaargevalle bewys kon word (en die tyd wat dit kan neem om sulke bewyse te genereer).

Met rekursie is dit nie meer nodig om sulke uiters groot stellings te bewys nie. Gevolglik kan kleiner, goedkoper en meer beskikbare rekenaargevalle gebruik word (hoewel meer daarvan nodig mag wees as met groot monolitiese bewysstukke). Dit laat die ontplooiing van proefgevalle in meer fisiese en virtuele omgewings toe as wat voorheen moontlik was.

### Opsomming

Rekursiewe bewyse van algemene berekening dien nou verskeie produksiestelsels, insluitend StarkNet, op Mainnet Ethereum.

Die voordele van herhaling sal geleidelik besef word, aangesien dit steeds voorsiening maak vir nuwe verbeterings, en dit sal binnekort hiperskaal lewer, gasfooie verminder en latensie verbeter deur die potensiaal van parallelisering te ontsluit.

Dit sal aansienlike koste- en vertragingsvoordele meebring, tesame met nuwe geleenthede soos L3 en toepaslike-rekursie. Verdere optimalisering van die Rekursiewe Verifieerder is aan die gang en selfs beter werkverrigting en kostevoordele sal na verwagting mettertyd verskaf word.



**Gidi Kaempfer**, Hoof van Kerningenieurswese, StarkWare