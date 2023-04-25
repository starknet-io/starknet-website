### TL; DR

* Cairo 1.0 is die eerste groot vrystelling na die[bekendstelling van Cairo](https://medium.com/starkware/hello-cairo-3cb43b13b209)twee jaar gelede
* Cairo 1.0 sal ontwikkelaars 'n veiliger, eenvoudiger, meer bruikbare programmeertaal gee
* In die hart van Kaïro 1.0 sal**Sierra**wees, 'n tussengangervoorstellingslaag wat groter langtermynstabiliteit vir Kaïro-programme beloof
* Sierra bevorder Kaïro om in 'n toestemminglose netwerk te dien:\
  -**Beskerming van die netwerk**: dit laat meer robuuste DoS-beskerming toe\
  -**Beskerming van die gebruiker**: dit laat Ethereum-graad sensuurweerstand toe. Cairo 1.0 sal StarkNet op baie maniere beïnvloed. Dit sal ook die[Regenese](https://medium.com/starkware/regenesis-starknets-no-sweat-state-reset-e296b12b80ae)beïnvloed. Ons sal in die komende weke meer inligting oor Regenesis plaas.

### Inleiding

In 2020 het ons Cairo vrygestel, 'n Turing-volledige programmeertaal, en het 'n groot stap geneem om verifieerbare berekeninge te ondersteun deur STARK's te gebruik. Vandag kondig ons**Cairo 1.0**aan, die grootste vooruitgang van Kaïro tot nog toe. Dit sal 'n verbeterde taal bekendstel, met kenmerke wat bruikbaarheid, veiligheid en gerief sal verbeter. Dit is ontwerp om StarkNet se vereistes as 'n toestemminglose netwerk te ondersteun, sodat die protokol eenvoudiger en veiliger kan word.\
Die ontwikkeling is reeds aan die gang, en ons verwag dat die eerste vrystelling binnekort sal plaasvind.

In hierdie pos sal ons die reis van Kaïro tot dusver beskryf en besonderhede oor die komende funksies deel.

### Die Kaïro-reis

Tot 2020 was niskennis nodig om STARK-bewysbare programme vir algemene berekening te bou. Dit was slegs moontlik vir diegene wat die komplekse wiskunde agter STARKs verstaan het. Spesifiek, vir elke besigheidslogika, dws elke berekening, was een nodig om 'n Algebraïese Intermediêre Voorstelling (AIR) te genereer - 'n stel polinoombeperkings wat die spesifieke berekening verteenwoordig.

Kaïro is gebore uit die besef dat verifieerbare berekening oral aan ontwikkelaars beskikbaar gestel moet word. Kaïro maak dit vir ontwikkelaars moontlik om die krag van STARKs te benut.

Die ontwikkelaargemeenskap het sedertdien Kaïro aangegryp om entoesiasties te bou. Alles in die florerende StarkNet-ekosisteem vandag is op Kaïro gebaseer. Tussen[StarkNet](https://starkware.co/starknet/)en[StarkEx](https://starkware.co/starkex/), het Kaïro-aangedrewe toepassings meer as 220M transaksies verwerk, meer as 65M NFT's gemunt en $700B se transaksies hanteer, alles op Ethereum vereffen.

Terwyl Kaïro STARKs toeganklik gemaak het, is dit oorspronklik ontwerp as 'n samestellende taal, en as sodanig is dit as 'n laevlaktaal geskryf.

!['n Voorbeeld vir die vroeë programme wat in Kaïro geskryf is](/assets/cairocode_01.png "'n Voorbeeld vir die vroeë programme wat in Kaïro geskryf is")

Aangespoor deur terugvoer van ontwikkelaars en die opkoms van[StarkNet](https://starkware.co/starknet/), het ons Kaïro geleidelik meer ekspressief en meer ontwikkelaarvriendelik gemaak.

!['n Voorbeeld uit die ERC-20 Cairo-kontrak wat ondersteuning van veranderlikes, if-stellings, foute en UINT256-biblioteek demonstreer](/assets/cairocode_02.png "'n Voorbeeld uit die ERC-20 Cairo-kontrak wat ondersteuning van veranderlikes, if-stellings, foute en UINT256-biblioteek demonstreer")

Maar ons het gou tot die gevolgtrekking gekom dat dit tyd is om 'n groot sprong vorentoe te neem en, in plaas van inkrementele verbeterings aan Kaïro, vir 'n dapper transformasie te gaan.

### Kaïro 1.0

Vir Cairo 1.0 het ons 'n hele nuwe samesteller van die grond af gebou, wat ontwikkelaars van veiligheidskenmerke sal voorsien en hulle sal toelaat om kontrakte op 'n eenvoudiger en meer ekspressiewe manier te skryf.

#### Stel Sierra bekend: verseker dat elke Kaïro-lopie bewys kan word

Die hoofbyvoeging in Kaïro 1.0 is Sierra (**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**tion). Sierra vorm 'n nuwe tussenliggende voorstellingslaag tussen Cairo 1.0 en Cairo byte-kode. Sierra se doelwit is om te verseker dat elke Kaïro-lopie — dws 'n Kaïro-program en sy insette — bewys kan word (sien meer hieronder).

Sierra beloof Kaïro-ontwikkelaars beter toekomsvaste kode. Verdere stabiliteit word verskaf deur die feit dat StarkNet-kontrakte nie hersaamgestel hoef te word in die geval van verbeterings aan die onderliggende stelsel nie (bv. CPU AIR-argitektuurveranderinge, verbeterings van die finale vertaling van Sierra na Kaïro greepkode).

**Bewys elke Kaïro-lopie.**In ou Kaïro kan 'n Kaïro-lopie drie gevalle tot gevolg hê - WAAR, ONWAAR of mislukking. Mislukte lopies kan nie bewys word nie. Sierra, verseker dat 'n Kaïro-lopie nooit sal misluk nie, en kan slegs WAAR of ONWAAR tot gevolg hê. Dit verseker op sy beurt dat elke Kaïro-lopie bewys kan word.

Hierdie bekendstelling van Sierra het belangrike implikasies vir StarkNet as 'n toestemminglose netwerk. Sierra verseker dat selfs teruggekeerde transaksies in StarkNet-blokke ingesluit kan word. Hierdie eienskap sal die StarkNet-protokol toelaat om skraal en eenvoudig te bly sonder dat dit nodig is om komplekse kripto-ekonomiese meganismes by te voeg.\
Twee betekenisvolle voorbeelde:

1. Sequencers sal fooie op teruggekeerde transaksies kan invorder, wat StarkNet in staat stel om Sequencer DoS op 'n goed gevestigde wyse te voorkom.
2. Die implementering van gedwonge L1-transaksies sal moontlik wees, wat StarkNet in staat stel om die volle sensuurweerstand van Ethereum te erf.

### **Taalkenmerke**

Cairo 1.0 sal baie verbeterings aan die programmeertaal self bied. Nie alles wat hieronder gelys word, sal deel wees van die eerste vrystelling nie, maar dit is deel van die padkaart.

#### **Verbeterde sintaksis**

* Nie meer*plaaslike*en*tempvar*nie. Ons het nou net*laat*nodig om hulle almal veranderlikes te reël.
* Verbeterde sintaksis van*as*stellings

```python
#Ou
as toestand != 0 {
  tempvar x = x+1;
} anders {
  tempvar x = x;
}
__________________________________
#Nuwe
as voorwaarde { x = x + 1; }
```

#### **Tik veiligheidswaarborge**

Die samesteller sal sterk tik gebruik om die sekuriteit van die kode te verbeter. Byvoorbeeld:

* Wysers sal altyd na geïnisialiseerde geheue wys.
* Woordeboeke sal altyd verpletter word, in teenstelling met die verantwoordelikheid om squash_dict aan die programmeerder oor te laat.

#### **Makliker om taalkonstrukte te gebruik**

Byvoorbeeld:

* Vir lusse

```
laat som = 0
vir x in iter {
  som = som + x;
}
```

* Boolese uitdrukkings
* Heelgetalle (met gereelde heelgetalverdeling 👯)
* Oorloopbeskerming vir die betrokke tipes
* Boolese toestande

```
#Ou
If cond1:
  if cond2:
       # Some code
  else if cond3:
       # Dieselfde kode
__________________________________
#New
If cond1 && (cond2 || cond3) { … }
```

#### **'n Volwaardige tipe stelsel**

* Abstrakte datatipes (bv Roesagtige enum)

```
enum Opsie<T> {
 Sommige: T,
 Geen,
}
wedstrydresultaat {
 Sommige(r) => {..},
 Geen => {..},
}
```

* Eienskappe

```
eienskap Voeg by<Uint256> {
    fn voeg by (…) { … }
}

laat a: Uint256 = 1;
laat b: Uint256 = 4;
+ b; // Geëvalueer tot 5 van tipe Uint256.
```

#### **Meer intuïtiewe biblioteke**

(bv. dict, skikkings)

* Dict<Uint256, MyStruct>;
* Skikking<MyOtherStruct>;

#### **Meer geoptimaliseerde kode**

Dit is nie nodig om die toewysing van plaaslike veranderlikes uitdruklik te noem nie - outomaties opgespoor en outomaties gedoen.

#### **Beter samesteller-integrasie**

Om beter IO-ondersteuning, pakketbestuur en beter fasilitering van gemeenskapsbydraes moontlik te maak.

### **Afsluiting**

Twee jaar nadat Cairo die eerste keer in produksie gebruik is, ontwikkel ons Cairo 1.0, wat verbeterde uitdrukbaarheid, sekuriteit en sintaksis sal lewer. Dit sal 'n groot stap vorentoe neem, wat ontwikkelaars in staat stel om makliker hul StarkNet-kontrakte te skryf.

In 'n ander plasing, wat binnekort kom, sal ons meer besonderhede deel oor hoe Cairo 1.0 StarkNet se regenese sal bewerkstellig, en hoe ontwikkelaars moet voorberei vir die vrystelling daarvan.