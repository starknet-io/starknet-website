### TL; DR

* Ons deel 'n gedetailleerde plan vir Regenesis, wat gevorm is deur uitgebreide samesprekings met die StarkNet-gemeenskap. Spesiale dank aan Kuba@SWM.
* Regenesis sal die vrystelling van Cairo 1.0 volg, wat die stelsel veiliger maak deur eenvoudiger en veiliger StarkNet-kontrakte toe te laat
* Gebruikers moet bereid wees om hul beursie tydens die oorgangsfase op te dateer
* Daar sal van ontwikkelaars verwag word om hul kontrakte na Cairo 1.0 oor te dra

### Inleiding

StarkNet Alpha vorder na Regenesis, 'n belangrike stap na produksie. In hierdie opdatering wil ons meer besonderhede deel oor die hoofmotivering vir Regenesis -[Cairo 1.0](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)- en om te begin verduidelik wat dit van gebruikers en ontwikkelaars sal vereis. Na Regenesis sal StarkNet slegs met Kaïro 1.0-gebaseerde kontrakte werk, en sal begin met 'n nuwe genesisblok met die bestaande staat.

Wat sal Regenesis van gebruikers vereis? 'N Eenvoudige opdatering van hul beursie. Wat sal dit van die bouers van StarkNet se dapps vereis? Dra hul kontrakte na Cairo 1.0, en volg 'n eenvoudige opgraderingsriglyn. Spesifiek, daar sal geen herbegin vanaf 'n skoon toestand wees nie en ons sal by dieselfde StarkNet-instansie bly, wat beteken dat daar geen behoefte aan 'n migrasie**sal wees nie.**

Die Regenesis-plan is om die toestand van aansoeke ten volle te bewaar en om geen stilstand vir die aansoeke aan te gaan nie. Toepassings wat die riglyne volg wat ons sal verskaf, sal dus dadelik op StarkNet Alpha Mainnet kan begin sonder enige steurnis vir hul werking en hul gebruikers tydens die Regenesis-proses. Ons is daartoe verbind om met die gemeenskap saam te werk en al die nodige ondersteuning te verskaf om hierdie proses so glad moontlik te maak.

Ons neem hierdie rigting as gevolg van uitgebreide gesprekke met die gemeenskap, wat 'n belangrike voorstel deur die Software Mansion-span ingesluit het.

### Hoekom Regenesis?

#### Kaïro 1.0 en Sierra

Die hoofmotivering vir Regenesis is om munt te slaan uit die nuwe moontlikhede wat deur Cairo 1.0 teweeggebring word - naamlik sequencers DOS-beskerming, sensuurweerstand en gasmeting, wat noodsaaklik is vir StarkNet as 'n gedesentraliseerde netwerk.

Cairo 1.0 sal verseker dat elke transaksie bewys kan word. Dit sal StarkNet toelaat om teruggekeerde transaksies in blokke in te sluit en 'n bewys van hul uitvoering te genereer. Hierdie meganisme sal dit moontlik maak om opeenvolgers te betaal op die uitvoering van teruggekeerde transaksies, wat DOS-beskerming teen kwaadwillige akteurs verhoog. Daarbenewens sal Cairo 1.0 gasmeting ondersteun, wat StarkNet in staat sal stel om na 'n meer intuïtiewe fooimark oor te skakel. Laastens sal dit StarkNet in staat stel om gedwonge transaksies vanaf L1 in te voer, en sal die sensuurweerstandsvermoë van die netwerk verbeter.

Om hierdie voordele te pluk, kan Cairo v0 en Cairo 1.0 kontrakte nie gemeng word nie. Verkeerde stellings kan nie as verkeerd bewys word nie, en gasopsporing kan ook nie plaasvind as ons stukkies Kaïro v0-kontrakte het nie. Vir daardie doel sal ons Cairo v0-kode heeltemal uit StarkNet-staat moet uitfaseer, dus Regenesis.

**Na Regenesis sal ons 'n Starknet-stelsel hê wat volledig gebaseer is op Kaïro 1.0.**

#### Vereenvoudig die kode en protokol

StarkNet, terwyl hy nog in Alpha was, het reeds baie veranderinge ondergaan. Elke weergawe tot dusver het die StarkNet-bedryfstelsel, blokke en transaksiestruktuur verander. Dit het veroorsaak dat sommige van die kode verouderd was. Tog moet volledige nodusse en infrastruktuurverskaffers (soos indekseerders en staatverkenners) bewus wees, en implementeer, al die vorige gedrag van StarkNet Alpha-weergawes om vertroueloos met die staat te sinkroniseer. Sonder Regenesis kan hierdie las 'n groot afskrikmiddel wees vir ontwikkelaars wat dit sal oorweeg om sulke dienste vir StarkNet te bou.

Daarom, voordat ons na produksie gaan, en as 'n voorbereiding op 'n gedesentraliseerde wêreld met baie infrastruktuurnutsmiddelimplementerings, is ons van plan om die protokol se kompleksiteit te verminder. Ons sal dit bereik deur nie toekomstige infrastruktuur te vereis om enige StarkNet 0.x-kode uit te voer nie, en merk die eerste blok na die oorgangstydperk as die ontstaanspunt.

### Wen Regenesis? Die algehele tydlyn

Regenesis sal die vrystelling van Cairo 1.0 volg, wat beplan word om teen die einde van 2022 plaas te vind. Gedurende Q1 van 2023 sal StarkNet opgedateer word om Cairo 1.0 te ondersteun, en ons beoog om teen die einde van Q1 na 'n ten volle Kaïro 1.0-gebaseerde netwerk te migreer.

**Gebruikers en toepassings sal gedurende hierdie tydperk die oorgang moet maak.**

![](/assets/1_ef85shzd2uudwex-cy8wdg-1.png)

### So wat moet ek weet?

Toepassingsontwikkelaars moet bewus wees van die volgende aspekte rondom Regenesis:

1. Maak seker dat jou kontrak gereed is vir die opgradering. Die volledige tegniese aspekte van die plan word in die[StarkNet Gemeenskapsforum](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080)gedeel. Sodra die besonderhede gefinaliseer is, sal ons 'n bondige riglyn deel.
2. Maak seker dat jy gereed is om jou kode na Cairo 1.0 oor te dra. Sien volgende afdeling vir al die jongste besonderhede.

#### Dra u kontrak na Kaïro 1.0

Cairo 1.0 hou groot belofte in vir StarkNet-ontwikkelaars. 'n Verbetering op bestaande Kaïro wat veiliger, beter en makliker sal wees vir die skryf van kontrakte, met verbeterde sintaksis, volwaardige tipe stelsel (inheemse uint256 iemand?) en meer. Daar sal van ontwikkelaars verwag word om hul bestaande StarkNet-kontrakte na Cairo 1.0-sintaksis oor te dra. Aangesien die logika en kodestruktuur egter dieselfde sal bly, word verwag dat hierdie poging weglaatbaar sal wees in vergelyking met die moeite wat dit geneem het om die toepassing in die eerste plek te ontwikkel.

In hierdie konteks is dit die moeite werd om daarop te let dat jy kan kies om die Cairo 1.0-weergawe van jou toepassing te heroudit. As jou toepassing reeds in die verlede geoudit is, sal die herouditproses aansienlik goedkoper en eenvoudiger wees, aangesien die ouditeure reeds vertroud is met jou logika.

Ons sal alle dokumentasie rondom Kaïro 1.0 vrystel, saam met tutoriale en werkswinkels gedurende die vierde kwartaal van 2022.

### Ek is 'n StarkNet-gebruiker. Wat moet ek doen?

As 'n gebruiker sal jy waarskynlik 'n paar aksies moet neem tydens Regenesis. Ten minste sal jy jou rekeningkontrak moet opgradeer. As u dit nie oor die ('n paar maande lange) oorgangstydperk doen nie, sal u rekening verloor. Afhangende van die opgraderingspad wat gekies is deur die ontwikkelaars van die StarkNet-toepassings wat jy gebruik, sal jy dalk ekstra stappe moet neem.

Ons herinner almal daaraan dat StarkNet steeds in die alfafase is, en daar word van gebruikers verwag om oplettend te bly vir kommunikasie van StarkNet en toepassings wat hulle gebruik. Dit is jou verantwoordelikheid om seker te maak dat jy vroegtydig na die nuwe stelsel opgradeer. *Om 'n vroeë aannemer te wees is nie altyd maklik nie, en ons vertrou op jou om jou deel te doen!*

### In afsluiting

Cairo 1.0 is net om die draai en bied baie opwindende voordele en verbeterings vir StarkNet en sy ontwikkelaars. Om dit te oes, is 'n Regenesis-geleentheid van die netwerk nodig. Gelukkig het ons 'n ontwerp in gedagte wat hierdie proses minimaal ontwrigtend maak - heeltemal naatloos vir gebruikers, en redelik eenvoudig vir toepassings.

Ons doen 'n beroep op jou om deel te neem aan die[gemeenskapsbespreking](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080)en jou kommentaar en bekommernisse te deel, asook om op hoogte te bly van die stappe wat jy as 'n toepassingsontwikkelaar op StarkNet sal moet neem.