### **TL; DR**

* [StarkNet Planets Alpha](https://voyager.online/)— die eerste stap op ons pad na Mainnet — is nou regstreeks op Testnet!
* [StarkNet](https://starkware.co/product/starknet/)is 'n toestemminglose Turing-volledige ZK-Rollup¹.
* Ontwikkelaars kan hul besigheidslogika van keuse in 'n slim kontrak implementeer en dit sonder toestemming op StarkNet ontplooi.
* Die staatsoorgange van StarkNet word van die ketting af bewys en dan in die ketting geverifieer.
* Net soos Ethereum, kan gebruikers direk met hierdie slim kontrakte interaksie hê.

### **Inleiding**

Ons het[](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)padkaart vir[StarkNet](https://starkware.co/product/starknet/)in Januarie 2021 aangekondig. Die Heilige Graal van skaalbaarheidsoplossings sal (i) arbitrêre slim kontrakte ondersteun, met (ii) saamstelbaarheid, (iii) wat oor 'n gedesentraliseerde netwerk bedryf word. Vandag kondig ons die ontplooiing op toetsnet van Stap 1: StarkNet Planets Alpha aan. Die Alpha-stelsel ondersteun arbitrêre slim kontrakte. Samestelbaarheid sal later vanjaar ondersteun word, met desentralisasie wat volg.

Dit is vir ons baie belangrik om ten volle deursigtig te wees en verwagtinge behoorlik te stel. Die doel van hierdie pos is om duidelik te lys wat reeds ondersteun word, en watter funksies nog ontbreek. Wat ons vandag vrystel, is Work in Progress op toetsnet. Ons glo dat hierdie vroeë vrystelling die vorming van 'n gesonde ekosisteem rondom StarkNet en sy gereedskap sal help. Ons is gretig om ontwikkelaars te betrek by die bou van die netwerk saam met ons, en om deurlopende terugvoer van die gemeenskap te kry.

### **Wat is in die StarkNet Planets Alpha?**

**Funksionaliteit:**Die Alpha laat ontwikkelaars toe om StarkNet-kontrakte vir algemene berekening te skryf en te ontplooi. Daar is geen witlys nie - enige ontwikkelaar kan enige kontrak skryf en ontplooi wat hulle wil. Gebruikers kan met hierdie kontrakte interaksie hê deur transaksies aan hulle te stuur en hul toestand te inspekteer. Alle kontrakte bestaan in 'n enkele staat². Opdaterings aan hierdie toestand word van die ketting af bewys en in die ketting geverifieer - in die Alpha word verifikasie op toetsnet gedoen.

**StarkNet OS:**Bogenoemde funksionaliteit word ondersteun deur 'n nuwe "bedryfstelsel" wat ons StarkNet OS noem. Dit bied*bewysbare*staatsoorgange op StarkNet. Ethereum-ontwikkelaars kan daaraan dink as die ekwivalent van die EVM: dit is verantwoordelik vir die aanroep van slimkontrakfunksies, die hantering van kontrakte se berging, ens. Ons sal 'n aparte pos publiseer wat die argitektuur van die StarkNet-bedryfstelsel uiteensit.

**Wat is nie in die Alpha nie?**Die Alpha ontbreek steeds 'n paar sleutelvermoëns, soos L1<>L2-interaksie, on-ketting data en saamstelbaarheid. Meer hieroor hieronder.

#### **Om jou voete nat te maak**

Begin met ons[tutoriaal en dokumentasie](https://www.cairo-lang.org/docs/hello_starknet/).

Dan kan jy deur die[voorbeeld AMM slim kontrak](http://cairo-lang.org/docs/hello_starknet/amm.html)lees wat ons op StarkNet geskryf en ontplooi het. Dit is 'n eenvoudige AMM, en jy kan interaksie daarmee[hier](https://starkware-amm-demo.netlify.app/swap). Jy is nou gereed om slim kontrakte op StarkNet te skryf en te ontplooi. Die blokverkenner vir StarkNet —[Voyager](https://voyager.online/)— laat enigiemand toe om StarkNet se toestand te inspekteer.\
Deur jou voete nat te maak, glo ons dat jy beter voorbereid sal wees om op StarkNet te bou, aangesien ons voortgaan om bykomende kenmerke uit te voer. Ons is reeds besig om 'n eerste hackathon te beplan, asook werkswinkels vir ontwikkelaars.

### **Volgende stappe vir StarkNet**

Die sleutelvermoëns wat nog in die Alpha ontbreek, sal in die komende weke ontplooi word. Hierdie is:

* L1<>L2 Interaksie, bv. die vermoë om fondse in L1 te deponeer en te onttrek.
* On-chain data: publiseer alle berging veranderinge op Ethereum.
* Samestelbaarheid: laat kontrakte toe om met mekaar te kommunikeer.

Met hierdie kenmerke in plek, sal ons gereed wees om StarkNet na Ethereum Mainnet te bring. Ons noem hierdie stap in StarkNet se evolusie Constellations, en wanneer ons dit bereik, sal jy in staat wees om te bou en toestemmingloos te ontplooi op Ethereum Mainnet skaalbare L2 dApps.

#### **Die StarkNet-ekosisteem**

Ons is baie opgewonde oor die ekosisteem wat rondom StarkNet vorm, so ons sal stilstaan om ons medewerkers tot dusver te bedank.

Ons werk nou saam met[Nethermind](https://twitter.com/nethermindeth)en die Nubia-span,[Alexey Akhunov](https://twitter.com/realLedgerwatch)(Erigon) &[Igor Mandrigin](https://twitter.com/mandrigin)(gateway.fm),[Iddo Bentov](https://www.cs.cornell.edu/~iddo/),[dOrg](https://twitter.com/dOrg_tech),[Prof. Tim Roughgarden](https://twitter.com/algo_class),[Prof. Jeremy Avigad](https://www.andrew.cmu.edu/user/avigad/)& Yoav Seginer, laaste maar nie die minste nie — die[Paradigm](https://twitter.com/paradigm)span.\
Ons vroeë vennote —[dYdX](https://twitter.com/dydxprotocol),[Immutable](https://twitter.com/Immutable),[DeversiFi](https://twitter.com/deversifi), sowel as[Sorare](https://twitter.com/SorareHQ),[Celer](https://twitter.com/CelerNetwork), en ander - het ons van onskatbare insette van Dag Een af voorsien, en stel ons in staat om 'n produksie te bou -graad netwerk vir regte gebruikers.\
Ons bly verstom deur die kwaliteit van inhoud wat deur die gemeenskap geskep is, deur mense soos[Bobbin Threadbare](https://twitter.com/bobbinth),[Daniel Kroni](https://github.com/danielkroeni/cairo-playground/blob/main/anon-bank/README.md),[Adrian Hamelink](https://twitter.com/adr1anh),[perama](https://twitter.com/eth_worm),[Francesco Ceccon](https://twitter.com/ceccon_me),[Ilian](http://twitter.com/imalchev), en die[Alexandria-span](https://blockchainpartner.fr/).

Ons is gretig om te sien wat die gemeenskap op alle fronte sal skep: ontwikkelaarnutsgoed, inhoud, en natuurlik StarkNet-toepassings wat hulle sal bou. Kom ons hou die gesprek aan die gang in jou gunsteling media van keuse:[onenigheid](https://discord.gg/uJ9HZTUk2Y),[Twitter](https://twitter.com/CairoLang),[e-pos](mailto:info@starkware.co), en binnekort die mees gedesentraliseerde kommunikasievorms te gebruik: f2f.

¹ Ons is nie aanhangers van die term ZK-Rollup nie, aangesien dit – wiskundig gesproke – nie nulkennis is nie, maar julle weet almal wat ons bedoel

² Anders as die aparte toestand wat vir huidige StarkEx-ontplooiings op Mainnet gehandhaaf word

**Opdatering (Nov. 2021):**StarkNet Alpha is regstreeks op Ethereum Mainnet