### TL; DR

StarkNet Alpha 1 het twee nuwe kenmerke:

* L1<>L2 interaksie
* On-ketting data

### Inleiding

Aan die begin van die jaar het ons aangekondig dat StarkWare[StarkNet](https://starkware.co/product/starknet/)bou, 'n toestemminglose gedesentraliseerde STARK-gebaseerde ZK-Rollup¹ wat as 'n L2-netwerk oor Ethereum werk. StarkNet laat enige dApp toe om onbeperkte skaal vir sy berekening te bereik - sonder om Ethereum se saamstelbaarheid en sekuriteit te benadeel.

Verlede maand is[StarkNet Alpha 0](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)aan die wêreld vrygestel. Vir die eerste keer kan ontwikkelaars enige slim kontrak[skryf en dit sonder toestemming na 'n ZK](https://kobi.one/2021/07/14/stardrop.html)Rollup ontplooi. Gebruikers kan transaksies na die netwerk stuur, Ethereum-styl.

Vandag stel ons 'n nuwe weergawe vry; Alfa 1. Ons stel kenmerke op 'n deurlopende basis vry om ontwikkelaars in staat te stel om so gou as moontlik met nuwe kenmerke te kommunikeer. Ons verwag dat dit die terugvoersiklus sal verskerp en gemeenskapsterugvoer sal toelaat om StarkNet vinnig te verbeter.

### **Alpha 1 kenmerke**

#### L1<>L2 Interaksie

Alpha 1 sluit 'n L1<>L2-boodskapprotokol in, wat ontwikkelaars in staat stel om naatlose transaksievloei tussen L1 en L2 te implementeer. Ontwikkelaars kan nou boodskappe stuur vanaf kontrakte op L1 na kontrakte op L2 en omgekeerd.

Een van die skoonhede van ZK-Rollups is dat staatsopdaterings finaal is, sonder enige vertraging. Dit beteken dat boodskappe wat van L2 na L1 gestuur is, onmiddellik na hul bestemmingskontrak aangestuur kan word. Dit maak die weg oop om toepassings te bou wat werklik interoperabel is tussen die lae.

Stel jy belang om dit te probeer? Die beste manier om te begin is om die tutoriaal[hier](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html)te volg.

Ons L1<>L2-protokol is baie te danke aan ander L2's (spesifiek Optimisme en Arbitrum) wie se vorige werk op hierdie gebied ons ontwerp beïnvloed het.

#### On-chain data-beskikbaarheid

StarkNet se staatsopdatering word nou ook as on-chain data op Ethereum gepubliseer. Dit laat enige gebruiker toe om StarkNet se toestand volledig uit L1-data te konstrueer. Elke staatopdatering sluit die staatsverskil in, dit wil sê watter berging verander is en die nuwe waarde daarvan.

Ook hier wys ZK-Rollup sy krag. In teenstelling met Optimistic Rollups, waarin die volledige transaksies se data aan die ketting gestuur moet word, word in ZK-Rollups slegs die absolute minimum data wat nodig is om die staatsverskil af te lei, aan die ketting gestuur.

Beskou 'n uitstekende voorbeeld, prys-orakels. 'n Transaksie om 'n prysorakel by te werk, bevat gewoonlik veelvuldige transaksies, maar werk slegs een stoorsel op; die paar se prys. Die on-chain data wat benodig word vir 'n staatsopdatering wat prysorakeltransaksies in 'n Optimistic Rollup bevat, groei lineêr met die aantal opdaterings, terwyl dit in 'n ZK-Rollup altyd 'n enkele stooropdatering sal wees.

Boonop kan kompressie-algoritmes op die gepubliseerde data toegepas word, en die geldigheid daarvan sal deur die STARK-bewys getuig word, wat die on-ketting-voetspoor verder verminder. Toekomstige weergawes van StarkNet sal innoverende optimaliserings op hierdie gebied bekendstel.

#### StarkNet OS

Ons stel ook die StarkNet-bedryfstelselkode vry. Die StarkNet OS is die Kaïro-program wat StarkNet bestuur. Die bedryfstelsel hanteer alles wat op die netwerk gedoen word - kontrakontplooiing, uitvoering van transaksies, L1<>L2-boodskappe en meer. Die StarkNet OS-argitektuur en -ontwerp sal in 'n aparte pos in detail verduidelik word.

#### Ekstra kenmerke

StarkNet Alpha het nie net ontwikkel nie, ons verbeter ook voortdurend Kaïro. Vir 'n volledige beskrywing van die nuwe kenmerke in Cairo v0.3.0, kyk na die vrystellingnotas[hier](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.3.0).

### Die ekosisteem groei

Afgesien van die konstante werk aan StarkNet Core, brei die ekosisteem se werk op StarkNet voortdurend uit. Ons is verheug om saam te werk met van die mees talentvolle spanne uit die ekosisteem.

Fermion, StarkNet se eerste Full Node-poging, word ontwikkel deur die Erigon (voorheen TurboGeth)-span. Op grond van hul enorme kennis wat opgedoen is deur aan Ethereum te werk, kan ons saam met hulle werk om 'n kragtige Full Node te bou, wat baie lesse insluit wat geleer is tydens die bou vir Ethereum, terwyl ons voordeel trek uit die skaal wat deur STARK-bewyse aangebied word.

Nethermind werk aan Warp, 'n samesteller van EVM na Kaïro. Gebonde aan ons kultuur om nuwe gereedskap aan te bied net sodra hulle gereed is, al wat ons kan sê is, verwag baie gou opwindende nuus op hierdie front! Ons kan egter sê dat hulle teen skeefspoed beweeg.

### Wat die toekoms inhou

Die volgende stop op ons pad na StarkNet sal saamstelbaarheid wees – wat kontrakte toelaat om met mekaar te kommunikeer. Bly ingeskakel.

[StarkWare](https://starkware.co/)

1 Soos ons voorheen gesê het, is ZK-Rollup nou 'n algemeen gebruikte term, maar tog baie misleidend: hierdie oplossings bied nie (tans) geen kennis nie.

**Opdatering (Nov. 2021):**StarkNet Alpha is regstreeks op Ethereum Mainnet