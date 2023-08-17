### TL; DR

* Ons bou StarkNet in stappe, begin met die vestiging van**bruikbaarheid**, verbeter dan**werkverrigting**, en gaan uiteindelik voort na**desentralisasie**
* Ons het ons eerste doelwit bereik: bruikbaarheid. Dit beteken dat ons algemene berekeninge in 'n Ethereum-agtige toestand gelewer het (jare voordat dit moontlik gedink is)
* Ons beweeg nou na fase 2 van ons 3-delige bouplan: prestasie, fokus op deurset, transaksiekoste en latensie.
* Volgende: Desentralisasie

Net 'n jaar nadat planne vir[StarkNet](https://starknet.io/)die eerste keer aangekondig is, het die platform baie goeie funksionaliteit. Die ontwikkelaargemeenskap floreer bo ons stoutste verwagtinge en bied 'n konstante vlaag nuwe L2 Naturelle-projekte.

Ons prioriteit oor die afgelope jaar was om presies dit moontlik te maak, deur 'n werkende StarkNet te skep met 'n vinnig-uitbreidende reeks kenmerke, wat ontwikkelaars in staat stel om reguit in te duik.

Hulle het dit in groot getalle gedoen. 'n Goeie barometer is die aflaaitelling vir die[JavaScript-biblioteek vir StarkNet](https://www.starknetjs.com/): reeds op 5k sedert dit 4 maande gelede beskikbaar geword het.

Alhoewel StarkNet die kompressie-magie lewer wat ons belowe het, is dit op die oomblik nog lank nie in staat om dit te doen vir genoeg dApps met genoeg deurset nie, en dit kan op kort termyn 'n bron van frustrasie vir ontwikkelaars wees.

Ons stryd-getoetste kerntegnologie, wat baie transaksies bewys en die bewyse saamdruk deur STARK, moet voorafgegaan word deur groepering of volgorde van transaksies. Dit is 'n proses wat die StarkWare-span reeds een keer vir die[StarkEx](https://starkware.co/starkex/)skaalenjin vervolmaak het, en ons werk tans daaraan om dit weer te doen vir die behoeftes van StarkNet.

Noudat baie van ons bruikbaarheidsteikens bereik is, verskuif ons die fokus om dit ons topprioriteit te maak. Dit is alles deel van ons 3-fase padkaart:**bruikbaarheid**, gevolg deur die netwerk se**werkverrigting**, en dan**desentralisasie**. 'n Jaar later wil ons jou 'n blik onder die enjinkap gee - 'n uiteensetting van watter stukke in plek is en wat nog 'n werk aan die gang is.

### Die storie so ver

StarkNet Alpha is in Junie aan die publieke toetsnet vrygestel en in November aan Mainnet. Teen die tyd van die Mainnet-ontplooiing het StarkNet reeds algemene berekeninge in 'n Ethereum-agtige toestand gelewer, wat algemeen gedink is dat dit jare weg is.

Deur die ontwikkeling het ons 'n benadering gekies wat eers op die belangrikste funksies gefokus het en dit vrygestel het sodra dit beskikbaar geword het, en in wese die evolusieproses met die gemeenskap gedeel. StarkNet is nog lank nie funksie voltooi nie, maar selfs nou kan ontwikkelaars reeds betekenisvolle en komplekse toepassings bou. Vandag het ons[ontwikkelaars wat op StarkNet bou,](https://starkware.notion.site/Projects-Building-on-StarkNet-a33dee55778a4515a9be9bdae02ee682)tientalle dApps, en meer as 'n dosyn eksterne spanne wat gereedskap en infrastruktuur vir die StarkNet-ekosisteem ontwikkel.

'n String opgraderings het baie belangrike kenmerke gelewer, insluitend L1<>L2-boodskappe, on-ketting data en ondersteuning vir saamstelbaarheid, gebeurtenisondersteuning, basiese fooimeganisme, kontrakte-opgradeerbaarheid, rekeningabstraksie, toetsraamwerk, ontwikkelaarnutsgoed, vinnige bevestiging, bloknommer , blok tydstempel, ondersteuning vir rekeningkontrakte.

Die ontwikkelaargemeenskap stel beide diep belang in StarkNet, en vorm eintlik die ontwikkeling daarvan. Kenmerke is reeds bekendgestel op grond van ontwikkelaarterugvoer. Aanneming kan heel moontlik die toename in deurset oortref, en daarom is hierdie hupstoot nou ons groot prioriteit.

### Volgende stappe

Noudat ons bruikbaarheid bereik het, is dit tyd om die stelsel se werkverrigting te verbeter. Die stelsel, in sy huidige toestand, is in staat om beperkte deurvloei van transaksies te ondersteun. Die manier om dit op te los is deur die werkverrigting van die Sequencer Node te verbeter, wat StarkNet se ekwivalent van 'n mynwerker is. Dit is die "masjien" wat transaksies orden nadat dit ingedien is. Wanneer dit geoptimaliseer is, sal deurset die hoogte inskiet.

Vir hierdie doel ontleed ons terselfdertyd waar die knelpunte is en spreek dit een vir een aan. Tans hou al die knelpunte verband met die volgordebepalingsproses, wat kom voordat ons die STARK-bewysers oproep. Die stryd-getoetsde proefstapel is gereed om StarkEx-agtige deurset op StarkNet te ondersteun.

Ons verwag dat die optimalisering van die sequencer 'n proses sal wees wat 'n paar maande duur, met geleidelike verbeterings regdeur H1/22. Ons doel is om teen die begin van die tweede helfte van 2022 ten minste een orde van grootte hoër TPS as Ethereum te bereik, teen 'n koste wat ten minste twee ordes van grootte laer as Ethereum s'n is. En dit is net die begin.

Daar is goeie rede dat hierdie optimaliseringsfase nodig is, en dat StarkNet nie met 'n gereed-geoptimaliseerde volgorder bekendgestel is nie: StarkNet kon so vinnig bruikbaarheid bereik omdat ons 'n voorsprong gekry het. In plaas daarvan om van nuuts af te begin en 'n totaal nuwe volgorde te bou, het ons die batcher van StarkEx as 'n sentrale komponent gebruik.

Dit was 'n goeie manier om te bou. Dit het nie net vinnig afgelewer nie; dit het beteken ons is seker dat ons op stewige fondamente gebou het. StarkEx het in wese die kernfunksies wat StarkNet dryf, getoets, aangesien dit honderde miljarde dollars in kumulatiewe verhandeling opgedoen het.

[StarkEx](https://starkware.co/starkex/)is die skaalenjin vir sommige van die suksesvolste dApps wat L2 gebruik: dYdX (ewigdurende kontrakte), DeversiFi (spothandel en betalings), sowel as vir Onveranderlike en Sorare (NFT-muntmaak en verhandeling).

Maar die sequencer wat vir hulle en ander StarkEx-kliënte gebou is, kan StarkNet tot dusver net neem. Elkeen van hulle hanteer min of meer dieselfde tipe transaksie elke dag. StarkNet gaan alles oor**algemene berekening**, so sy behoeftes is oop. Wanneer sy sequencer transaksies uit die mempool neem, kom dit in verskillende vorms en groottes voor. Plus, StarkNet is ook 'n oop netwerk wat beteken dat daar bykomende berekeningsbokoste is wat nie in StarkEx teëgekom word nie.

Die huidige uitdaging, naamlik die optimalisering van die volgordebepaling vir hierdie nuwe behoeftes, is 'n beduidende onderneming, maar ons het 'n sterk begrip van die roete wat nodig is, op grond van ons suksesvolle StarkEx-ontwikkeling.

### Volgende: Desentralisasie

StarkNet moet 'n volledig gedesentraliseerde netwerk sonder toestemming wees, kompleet met leierverkiesing en bestuursmeganismes. Om dit te bereik, sal ons hooffokus word sodra deurset die hoogte inskiet en koste daal, en ons hoop om 'n eerste gedesentraliseerde weergawe teen die einde van 2022 te hê. Ons verwag om ons desentralisasieplan in die komende maande in die openbaar te deel.

Net soos die huidige beperkte deurset 'n tussentydse fase in StarkNet se ontwikkeling verteenwoordig, is die huidige vlak van StarkWare-betrokkenheid ook tydelik. Ons sien onsself as 'n soort steierwerk wat tydens die konstruksiefase 'n belangrike funksie dien, maar mettertyd teruggerol word.

Volle nodusontwikkeling, 'n opwindende eerste stap na desentralisasie, is reeds aan die gang. Volle nodusse sal enigiemand in staat stel om die toestand van die netwerk plaaslik vas te hou en te verifieer, om tred te hou met presies wat gebeur. Drie spanne -*Erigon, Nethermind en Equilibrium*- is besig om volledige nodusse te ontwikkel, en moontlik sal meer ontwikkel in die toekoms.

In 'n parallelle ontwikkeling is voorbereidings aan die gang om opeenvolging en bewys van sagteware aan die publiek oop te maak. Enigiemand sal as 'n opeenvolger of 'n toetser op StarkNet kan deelneem.

’n Struktuur sal ontwikkel word om mense aan te spoor om betrokke te raak, wat ekonomiese belonings sal insluit. StarkNet-fooie sal deels aan opvolgers en toetsers gaan.

Op mediumtermyn verwag ons om ons sequencer aan derde partye beskikbaar te stel, en op lang termyn verwag ons om ook te sien dat verskeie spanne reekse bou wat opeenvolging vir StarkNet sal maak.

### Altyd verbeter; Vir ewig luister

Namate fokus na die volgende uitdaging verskuif, sal ons voortgaan om te verbeter op vorige prestasies. En deur aan te hou werk aan alle areas van[StarkNet](https://starknet.io/), sal ons ore altyd oop bly vir die hele ontwikkelaargemeenskap. Raak dus betrokke by die bespreking, via[Discord](https://discord.com/invite/uJ9HZTUk2Y), die[StarkNet Shamans](https://www.google.com/search?client=safari&rls=en&q=StarkNet+Shamans&ie=UTF-8&oe=UTF-8)gemeenskap,[Twitter](https://twitter.com/Starknet_Intern), of 'n ander roete, en help om die toekoms van blokkettingskaal te vorm.