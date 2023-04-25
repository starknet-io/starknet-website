### TL; DR

* Alpha is regstreeks op Mainnet
* Dit ondersteun algemene berekening en saamstelbaarheid
* Vinnig groeiende gemeenskap, ontwikkeling van gereedskap en toepassings
* Bykomende kenmerke sal in die komende weke op 'n deurlopende basis uitgerol word
* Vrywaring: dit is 'n Alpha-weergawe (lees die fynskrif hieronder)

### Inleiding

StarkNet Alpha word vandag op Ethereum Mainnet bekendgestel!

StarkNet is 'n toestemminglose gedesentraliseerde Rollup wat as 'n L2-netwerk oor Ethereum werk. StarkNet laat enige dApp toe om onbeperkte skaal vir sy berekening te bereik, sonder om Ethereum se saamstelbaarheid en sekuriteit te benadeel, danksy sy vertroue op die veiligste en mees skaalbare kriptografiese bewysstelsel —[STARK](https://starkware.co/stark/). StarkNet is gebou op die[Cairo](https://starkware.co/cairo/)programmeertaal, die eerste produksiegraad Turing-volledige von-Neumann-verifieerder op Ethereum. Beide Kaïro en STARK is intern ontwikkel deur StarkWare en het al ons produksiegraadtoepassings aangedryf, wat sedert die somer 2020 meer as 50 miljoen txs en $250 miljard betaal het.

StarkNet Alpha maak onder meer algemene rekenaarslimkontrakte moontlik wat saamstelbaarheid ondersteun, beide met ander StarkNet-kontrakte en via L1<>L2-boodskappe met L1-kontrakte. StarkNet Alpha werk in 'n oprolmodus, wat beteken dat al die staatsverskildata in die ketting gestuur word.

Terug in Januarie het ons die StarkNet[-padkaart](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)gedeel. In Junie het StarkNet Alpha regstreeks op 'n publieke toetsnet verskyn, en is op 'n deurlopende basis opgedateer met nuwe kenmerke. Ons is verheug om voor skedule te wees, deels te danke aan ons vertroue op ons produksiegraad geharde STARK/Cairo-sagtewarestapel.

### Hoe moet jy StarkNet Alpha behandel?

Eerstens, met groot sorg, aangesien die "Alpha"-etiket daar is vir 'n rede. Verwag dat veranderinge, regstellings en verbeterings sal kom. StarkNet Alpha moet nog geoudit word, en ons kan so 'n oudit uitstel totdat die netwerk 'n bietjie meer volwasse is (lees die vrywaring aan die einde van hierdie pos vir meer inligting).

Oor die algemeen volg ons die versigtige en verstandige pad wat deur ons Optimistic Rollup-kollegas gedefinieer is, naamlik, Arbitrum en Optimism: begin die netwerk met 'n enkele sequencer, en witlys-toepassings om te verseker dat hul ontwikkelaars die risiko's wat betrokke is, verstaan. Ons is steeds ten volle verbind tot 'n volledige desentralisasie van StarkNet.

En hoe moet jy StarkNet Alpha se ekonomie hanteer? Die Alpha begin sonder transaksiefooie. Die volgende opgradering, slegs 'n paar weke weg, sal 'n fooimeganisme bekendstel - ons sal meer besonderhede in 'n aparte pos deel.

### Begin bou

Ons nooi jou uit om jou eie aansoeke oor StarkNet te begin skryf deur óf die (nuwe!) [webwerf](http://starknet.io/), of spring direk na die[tutoriaal](https://starknet.io/docs/).

As jy gereed is om te ontplooi, volg asseblief hierdie[aanboordproses](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu); geskep om te verseker dat alle ontwikkelaars deeglik bewus is van die voorlopige toestand van die stelsel.

### Ekosisteem

Oor die afgelope paar maande het ons ongelooflike groei in die grootte en aktiwiteit van die StarkNet-gemeenskap gesien, wat op die[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)vergader. Tientalle ontwikkelaars - spanne en individue - regoor die blokketting-ekosisteem dra by tot hierdie poging. (Sien die vrywaring aan die einde van hierdie pos)

#### Ontwikkelaarnutsgoed

* OpenZeppelin definieer die standaardkontrakte. Hulle[repo](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)en[besprekings](https://github.com/OpenZeppelin/cairo-contracts/discussions)is die moeite werd om te volg
* Die[Warp](https://github.com/NethermindEth/warp)Solidity–>Cairo transpiler, ontwikkel deur Nethermind
* Shard Labs se[HardHat-inprop](https://github.com/Shard-Labs/starknet-hardhat-plugin)en[StarkNet Deevnet](https://github.com/Shard-Labs/starknet-devnet)
* Argent ontwikkel gereedskap, insluitend sy gesamentlike poging op StarkNet.js, saam met[Sean Han](https://twitter.com/seanjameshan), sy skepper

#### Infrastruktuur

**Blokverkenner**:

* [Die Voyager](http://voyager.online/)-projek deur Nethermind
* [Eth.tx](https://ethtx.info/)sal ondersteuningsanalise en 'n gedetailleerde oorsig van StarkNet-transaksies bied

**Volle nodusse**: twee pogings aan die gang: een is die Fermion-projek gelei deur Erigon, die ander is die[Pathfinder](https://github.com/eqlabs/pathfinder)-projek, gelei deur Equilibrium

**beursies**:

* [ArgentX](https://github.com/argentlabs/argent-x)is 'n blaaieruitbreiding wat deur Argent ontwikkel is, reeds beskikbaar vir devs
* Torus-sleutelbestuuroplossing is StarkNet-gereed
* Ledger ontwikkel 'n inheemse StarkNet-toepassing; beskikbaar gestel word voor die einde van die jaar

**Kaïro-oudits**: ConsenSys Diligence, Trail of Bits, Peckshield en ABDK doen óf reeds Kaïro-oudits, óf gaan binnekort begin

**API-dienste**: nadat 'n StarkNet-volle nodus beskikbaar gestel is, sal API-dienste deur Figment, Chainstack en Infura aangebied word

**Indexer**: ons sal saam met die Figment-span daaraan werk om TheGraph te integreer om met StarkNet te werk

### Die pad vorentoe

In die komende weke en maande sal ons die Alpha opgradeer met die volgende vermoëns:

* Kontrak opgradeerbaarheid meganisme
* Fooi-meganisme
* Gebeurtenisse
* Byvoeging van ontbrekende stelseloproepe (get_block_number, get_block_timestamp, en meer)
* Skelet weergawe van Volition
* En nog baie meer …

Om hierdie poging op 'n deurlopende basis te monitor, sien die kenmerke se[voorlopige padkaart](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51).

As ons verder kyk, gaan ons voort om swaar te belê in aktiewe navorsing op verskeie fronte (kom sluit aan by die[Shamans](https://community.starknet.io/)poging):

* Desentralisasie
* Skaal
* Data beskikbaarheid
* Toestemminglose aansporing

### Oproep tot aksie

* Begin kontrakte op die toestemminglose StarkNet-toetsnet op Goerli skryf
* Sluit aan by die[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)
* Sluit aan by die gemeenskapsoproepe
* Woon die eerste[StarkNet-ekosisteemberaad](https://www.eventbrite.com/e/starknet-ecosystem-summit-2022-tickets-206671880157)by (27–28 Jan 2022, Stanford CA)
* Sluit aan by die[StarkNet Shamans](https://community.starknet.io/)vir 'n dieper duik in navorsingsuitdagings

### Vrywaring

***StarkNet Alpha is 'n nuwe en komplekse stelsel wat nie ten volle geoudit is nie. Soos alle komplekse sagtewarestelsels, kan die StarkNet-stelsel foute bevat wat, in uiterste gevalle, kan lei tot 'n verlies van al jou fondse. So,***trap versigtig en pasop!******

*Die StarkNet-ekosisteem is 'n groot en vinnig groeiende stel onafhanklike spanne en individue, waaroor StarkWare geen toesig het nie en geen verantwoordelikheid aanvaar nie. Enige een van die projekte wat deur ekosisteemlede ontwikkel is, kan foute bevat wat in uiterste gevalle tot 'n verlies van al jou fondse kan lei. Verder, namate meer slim kontrakte ontplooi word, neem die potensiaal vir onbedoelde skadelike foute en selfs kwaadwillige swendelary en rugtrekkings toe. Behandel dus alle slim kontrakte op StarkNet soos jy slim kontrakte op Ethereum behandel, en gebruik slegs dié wat jy goeie rede het om as veilig te vertrou.*