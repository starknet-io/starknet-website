### TL; DR

* *StarkNet Alpha word teen November op Mainnet Ethereum bekendgestel*
* Die tyd om op StarkNet te bou is nou

### 'n Kort geskiedenis

Ons het ons visie vir[StarkNet](https://starkware.co/product/starknet/)aan die begin van die jaar aangekondig: om massiewe skaalbaarheid na Ethereum te bring, terwyl L1-sekuriteit, toestemminglose interaksies en desentralisasie bewaar word.\
Ons het in Junie**[StarkNet Alpha](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)**op 'n publieke toetsnet vrygestel. Hierdie weergawe ondersteun ten volle toestemminglose algemene berekening slim kontrakte. Ons het dit sedertdien twee keer opgegradeer: eers na**Alpha 1**— verskaffing van[L1<>L2-boodskappe en on-chain data](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), en dan na**Alpha 2**— ondersteun[saamstelbaarheid](https://medium.com/starkware/starknet-alpha-2-4aa116f0ecfc).

StarkNet Alpha 2 ondersteun nou saamstelbare slim kontrakte van algemene berekening in 'n Ethereum-agtige toestand, met die vermoë vir L1 en L2 kontrakte om met mekaar te kommunikeer. Lees meer[hier](https://www.cairo-lang.org/docs/hello_starknet/index.html).

### Wat is StarkNet Alpha op Mainnet?

StarkNet Alpha op Mainnet sal soortgelyke kenmerke ondersteun as dié wat tans op die Goerli publieke toetsnet beskikbaar is.

#### **Wat om te verwag**

Omdat StarkNet nog onder ontwikkeling is, wil ons vermoëns stapsgewys bekendstel en verseker dat daar by elke stap aan ontwikkelaarverwagtinge voldoen word. Twee besonder belangrike aspekte wat ons graag wil beklemtoon, is:

* **Toegestane slim kontrak-ontplooiing**: Ons sal die sinvolle speelboek volg wat deur ons Optimistic Rollup-kollegas bekendgestel is: begin met*gemagtigde*kontrakontplooiing. Die protokol wat spesifiseer hoe om die insluiting van jou slimkontrak by hierdie aanvanklike witlys te versoek, sal in die komende weke gepubliseer word.
* **Geen waarborg vir terugwaartse verenigbaarheid**: ons verwag dat die toekomstige oorgang van StarkNet Alpha na StarkNet Beta die regenese van die staat sal insluit. Die netwerk sal vanaf blok 0 begin, en toepassings sal hul kontrakte moet herontplooi. Verder moet ontwikkelaars en gebruikers daarop let dat die verwagte StarkNet Beta dalk nie agteruit versoenbaar is met StarkNet Alpha nie, bv. ontwikkelaars sal dalk hul kontrakte moet wysig. Uiteraard sal ons probeer om 'n maklike oorgang vir toepassings toe te laat, met minimale vereiste veranderinge.

#### Bykomende naby-termyn kenmerke

As deel van die oorgang van StarkNet Alpha van toetsnet na Mainnet, sal ons:

1. Voeg konstrukteurs by kontrakte.
2. Verbeter die toetsraamwerk.
3. Vir blokke en transaksies, beweeg van die gebruik van 'n ID na die gebruik van 'n hash.

Ons beplan om voort te gaan met die ontplooiing van nuwe kenmerke teen 'n gereelde kadens, net soos ons op die publieke toetsnet gedoen het. In die nabye termyn beplan ons die volgende opgraderings:

1. Rekeningkontrakte en tekenkontrakte – maak die weg oop vir DeFi-toepassings om met StarkNet te kommunikeer soos hulle vertroud is.
2. Verbeterde kontrakfunksionaliteit – ondersteun kontrakopgradeerbaarheid en gebeure.
3. Warp: die Solidity-to-Cairo-samesteller wat deur Nethermind ontwikkel is, sal 'n gladde oorgang van Solidity-slimkontrakte na StarkNet-slimkontrakte moontlik maak.
4. Ethereum Handtekeninge: inheemse ondersteuning vir ECDSA oor secp256k1 sal makliker integrasie met bestaande beursies moontlik maak.
5. StarkNet Volle Node: 'n Volledige Node sal gebruikers toelaat om aan die netwerk deel te neem met hardeware vereistes op gelyke voet met dié van 'n Ethereum Volle Node.

#### Fooi-meganisme

Die fooimeganisme sal aangeskakel word sodra rekeningkontrakte en tekenkontrakte by StarkNet Alpha gevoeg word.

Alle transaksies wat by StarkNet ingedien word, sal 'n fooi aangaan wat ontwerp is om L1- en buite-kettingkoste te dek. Die fooi sal aanvanklik in ETH gehef word. Die koste van 'n enkele transaksie sal afneem namate StarkNet sy skaal vergroot (soos die geval is op alle bestaande STARK-gebaseerde stelsels). Wanneer ons die aanvanklike fooimeganismes saamstel, verkies ons eenvoud bo die akkurate prysbepaling van transaksies volgens die hulpbronne wat hulle verbruik. Verwag dat hierdie meganisme mettertyd verfyn en verbeter sal word.

Met die oog daarop om StarkNet 'n volhoubare netwerk te maak en sy operateurs en ontwikkelaars aan te spoor, sal 'n gedeelte van die inkomste wat uit die fooie ingevorder word, aan toepassingsontwikkelaars en StarkNet-kernontwikkelaars versprei word.

#### Sekuriteit

StarkNet Alpha se sekuriteitsmodel op Mainnet sal die huidige model op toetsnet volg:

* Elke staatsoorgang word gerugsteun deur 'n STARK-bewys, dus word verseker dat dit geldig is.
* Alle staatsdata sal op die ketting gepubliseer word, sodat die staat ten volle vanaf L1 konstrueerbaar sal wees.
* Daar sal 'n enkele sequencer wees.
* Die netwerk sal sonder enige tydsvertragings opgradeerbaar wees.

### Die StarkNet-ekosisteem groei

Die opening van StarkNet vir die wêreld het 'n massiewe golf van ontwikkelaars gelok wat daarin belangstel om Kaïro te leer en oor StarkNet te ontwikkel. Hulle het waardevolle terugvoer gegee, en dit was 'n ware plesier om lewendige besprekings op die StarkNet[Discord](https://discord.gg/uJ9HZTUk2Y)te sien.

Boonop word StarkNet nie net deur die StarkWare-span ontwikkel nie, maar ook deur sommige van die sterkste spanne in die blockchain-ekosisteem:

* Nethermind werk aan twee projekte:

1. **[Warp](https://github.com/NethermindEth/warp)**: 'n Solidity to Cairo samesteller

2. **[Voyager](https://voyager.online/)**: 'n StarkNet-blokverkenner

* Open Zeppelin werk aan 'n[Standard Contracts](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)implementering vir StarkNet en het ook aan 'n ontwikkelaar se omgewing begin werk:[Nile](https://github.com/martriay/nile).
* ShardLabs werk aan 'n[StarkNet HardHat-inprop](https://github.com/Shard-Labs/starknet-hardhat-plugin)en aan 'n beter toetsraamwerk.
* Die Erigon-span werk daaraan om hul Ethereum Full Node uit te brei om StarkNet (kodenaam: Fermion) te ondersteun. Hulle werk saam met ons aan die ontwerp van kernmeganismes van StarkNet.
* Equilibrium werk aan 'n StarkNet Full Node-implementering in Rust,
* Kaïro-ouditdienste: In die komende maande sal ABDK, ConsenSys Diligence, Peckshield en Trail of Bits Kaïro-oudits uitvoer.
* StarkNet-oudits: ons het begin met die oudit van die netwerk se fondamente:

1. **CryptoExperts**sal 'n oudit van die Cairo Solidity Verifier uitvoer.
2. 'n Formele**LEAN-bewys**van die Kaïro-spesifikasies is onlangs voltooi en gepubliseer as 'n[vraestel](https://arxiv.org/abs/2109.14534)en 'n GitHub[repo](https://github.com/starkware-libs/formal-proofs).

Verwag nog baie interessante samewerkings wat in die komende maande gepubliseer sal word!

### STARKs skaal vandag

Ons benader die bekendstelling van StarkNet Alpha met selfvertroue, aangesien StarkEx, ons selfstandige skaal-SaaS, gedemonstreer het hoe STARK's Ethereum-toepassings massief kan skaal. Ons het StarkEx bekendgestel vir[dYdX](https://dydx.exchange/)(ewigdurende kontrakte),[DeversiFi](https://www.deversifi.com/)(lokohandel en betalings), sowel as vir[Onveranderlike](https://www.immutable.com/)en[Sorare](https://sorare.com/)(NFT-ontginning en -verhandeling). Ons het gesien hoe hul gas/tx-koste met 100X–200X verminder is, tot ongeveer 650 gas/tx in Validium (buite-kettingdata), en 1100 gas/tx vir 'n ZK-Rollup.

StarkEx het tot op hede $80 miljard in transaksies en meer as 27 miljoen transaksies vereffen, wat enige ander L2-oplossing ver oorduik - en almal saam.

### Tree nou op

Daar was nog nooit 'n beter tyd om by die groeiende StarkNet-ekosisteem aan te sluit deur óf jou volgende dApp óf nuttige ontwikkelaarnutsgoed te bou nie.

Ons nooi jou uit om:

1. Sluit aan by die[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y), waar jy die StarkNet-gemeenskap kan ontmoet en betrokke kan raak.
2. [Begin leer](https://www.cairo-lang.org/docs/hello_starknet/index.html)hoe om StarkNet-slimkontrakte te skryf.
3. [DM ons](https://twitter.com/StarkWareLtd)— ons span is gretig om jou idees en inisiatiewe tot lewe te laat kom.

**Opdatering (Nov. 2021):**StarkNet Alpha is regstreeks op Ethereum Mainnet