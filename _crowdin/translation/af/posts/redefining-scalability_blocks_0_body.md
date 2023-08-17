Blockchain-skaalbaarheid was nog altyd 'n warm onderwerp. Byna elke blokkettingnetwerk stel hoë getalle transaksies per sekonde (TPS) as 'n verkoopspunt voor. TPS is egter nie 'n geldige maatstaf om blockchain-netwerke mee te vergelyk nie - wat dit 'n uitdaging maak om hul relatiewe prestasie te evalueer. Boonop kom groot TPS-getalle gewoonlik teen 'n prys - wat die vraag stel: skaal hierdie netwerke werklik, of verhoog hulle net hul deurset?

Dus, kom ons ondersoek hoe om skaalbaarheid te definieer, watter afwegings gemaak word om dit te bereik, en waarom Validity Rollups die uiteindelike skaalbaarheidsoplossing is.

### Nie alle transaksies word gelyk gemaak nie

Eerstens moet ons ons bewering vasstel dat die eenvoudige en gerieflike maatstaf van TPS nie 'n akkurate maatstaf van skaalbaarheid is nie.

Om nodusse te vergoed vir die uitvoering van transaksies (en om gebruikers daarvan te weerhou om die netwerk met onnodige berekening te spam), hef blokkettings 'n fooi wat eweredig is aan die berekeningslas wat op die blokketting opgelê word. In Ethereum word die kompleksiteit van die berekeningslas gemeet in*gas.*Omdat gas 'n baie gerieflike maatstaf van transaksiekompleksiteit is, sal die term ook regdeur hierdie artikel vir nie-Ethereum-blokkettings gebruik word, al is dit tipies Ethereum-spesifiek.

Transaksies verskil aansienlik in kompleksiteit en dus hoeveel gas hulle verbruik. Bitcoin, die pionier van vertrouelose eweknie-transaksies, ondersteun slegs die rudimentêre Bitcoin-skrif. Hierdie eenvoudige oorplasings van adres na adres gebruik min gas. In teenstelling hiermee ondersteun slim kontrakkettings soos Ethereum of Solana 'n virtuele masjien en Turing-volledige programmeertale wat baie meer komplekse transaksies moontlik maak. Daarom benodig dApps soos Uniswap baie meer gas.

Dit is hoekom dit nie sin maak om die TPS van verskillende blokkettings te vergelyk nie. Wat ons eerder moet vergelyk, is die kapasiteit vir berekening - of deurset.

Alle blokkettings het 'n (veranderlike) blokgrootte en bloktyd wat bepaal hoeveel*eenhede van berekening*per blok verwerk kan word en hoe*vinnig*'n nuwe blok bygevoeg mag word. Saam bepaal hierdie twee veranderlikes die*deurset*van 'n blokketting.

### Wat beperk skaalbaarheid?

Blockchains streef daarna om maksimaal gedesentraliseerde, inklusiewe netwerke te wees. Om dit te bereik, moet twee fundamentele eienskappe in toom gehou word.

#### **1. Hardewarevereistes**

Die desentralisasie van 'n blokkettingnetwerk word bepaal deur die vermoë van die swakste nodus in die netwerk om die blokketting te verifieer en sy toestand te behou. Daarom moet die koste om 'n nodus te bestuur (hardeware, bandwydte en berging) so laag as moontlik gehou word om soveel as moontlik individue in staat te stel om toestemminglose deelnemers aan die vertrouelose netwerk te word.

#### 2**.**Staatsgroei

Staatsgroei verwys na hoe vinnig die blokketting groei. Hoe meer deurset 'n blokketting toelaat om per eenheid van tyd te gebeur, hoe vinniger groei die blokketting. Volle nodusse stoor die netwerk se geskiedenis, en hulle moet die toestand van die netwerk kan valideer. Ethereum se toestand word gestoor en verwys deur doeltreffende strukture soos bome. Soos die staat groei, word nuwe blare en takke daarby gevoeg, wat dit al hoe meer kompleks en tydrowend maak om sekere aksies uit te voer. Soos die ketting in grootte groei, vererger dit die slegste-geval uitvoering deur nodusse, wat lei tot 'n steeds groeiende tyd om nuwe blokke te bekragtig. Met verloop van tyd verhoog dit ook die totale tyd wat dit neem vir 'n volledige nodus om te sinkroniseer.

### Nadelige impak van toenemende deurset

#### 1. Knooptelling

Die minimum vereistes om 'n nodus en nodus te laat loop, is:

* Bitcoin¹: 350 GB HDD-skyfspasie, 5 Mbit/s-verbinding, 1 GB RAM, SVE >1 Ghz. **Aantal nodusse: ~10 000**
* Ethereum²: 500 GB+ SSD-skyfspasie, 25 Mbit/s-verbinding, 4–8 GB RAM, SVE 2–4 kerne. **Aantal nodusse: ~6 000**
* Solana³: 1,5 TB+ SSD-skyfspasie, 300 Mbit/s-verbinding, 128 GB RAM SVE 12+ kerne. **Aantal nodusse: ~1 200**

Let daarop dat hoe groter die SVE, bandwydte en bergingsvereistes vir nodusse benodig word vir deurset van 'n blokketting, hoe minder nodusse op die netwerk - wat lei tot swakker desentralisasie en 'n minder inklusiewe netwerk.

#### 2. Tyd om 'n volledige nodus te sinkroniseer

Wanneer 'n nodus vir die eerste keer uitgevoer word, moet dit met alle bestaande nodusse sinkroniseer, die toestand van die netwerk aflaai en bekragtig tot by die ontstaansblok tot by die punt van die ketting. Hierdie proses moet so vinnig en doeltreffend moontlik wees om enigiemand toe te laat om as 'n toestemminglose deelnemer van die protokol op te tree.

Deur Jameson Lopp se[2020 Bitcoin Node](https://blog.lopp.net/2020-bitcoin-node-performance-tests/)en[2021 Node Sync Tests](https://blog.lopp.net/2021-altcoin-node-sync-tests/)as 'n aanwyser te neem, vergelyk Tabel 1 die tyd wat dit neem om 'n volledige nodus van Bitcoin vs. Ethereum vs. Solana op 'n gemiddelde verbruikersgraad-rekenaar te sinkroniseer.

![Tabel 1. Blockchain-deurset en nodus-sinkronisering vergelyking](/assets/1_gmpi_1c9zipoc-znrh7b5q.png "Tabel 1. Blockchain-deurset en nodus-sinkronisering vergelyking")

Tabel 1 toon dat toenemende deurvloei tot langer sinkroniseringstye lei omdat meer en meer data verwerk en gestoor moet word.

Alhoewel verbeterings aan nodusagteware voortdurend aangebring word om die uitdaging van die groeiende blokketting te versag (verlaging van die skyfvoetspoor, vinniger sinkroniseringsnelhede, sterker botsingsveerkragtigheid, modularisering van sekere komponente, ens.), kan die nodusse blykbaar steeds nie tred hou met toenames nie. tot deurset.

### Hoe moet skaalbaarheid gedefinieer word?

Skaalbaarheid is die mees wanvoorgestelde term in die blokkettingruimte. Alhoewel verhoging van deurset wenslik is, is dit slegs een deel van die legkaart.

***Skaalbaarheid**beteken nog**transaksies**vir die**dieselfde hardeware**.*

Om hierdie rede kan skaalbaarheid in twee kategorieë geskei word.

#### Volgorde skaalbaarheid

Opeenvolging beskryf die handeling van ordening en verwerking van transaksies in 'n netwerk. Soos voorheen vasgestel, kan enige blokketting sy deurset triviaal verhoog deur die blokgrootte te verhoog en sy bloktyd te verkort - tot 'n punt waarop die negatiewe impak op die desentralisasie daarvan te beduidend geag word. Maar die aanpassing van hierdie eenvoudige parameters bied nie die nodige verbeterings nie. Ethereum se EVM kan, in teorie,[hanteer tot ~2,000 TPS](https://twitter.com/dankrad/status/1459607325854121989), wat onvoldoende is om langtermyn blokruimte aanvraag te voorsien. Om opeenvolging te skaal, het Solana 'n paar indrukwekkende innovasies gemaak: voordeel trek uit 'n paralleliseerbare uitvoeringsomgewing en 'n slim konsensusmeganisme, wat baie doeltreffender deurvoer moontlik maak. Maar, ten spyte van sy verbeterings, is dit nie voldoende of skaalbaar nie. Soos Solana sy deurset verhoog, verhoog die hardewarekoste om 'n nodus te bestuur en transaksies te verwerk ook.

#### Verifikasie skaalbaarheid

*Verifikasieskaalbaarheid beskryf benaderings wat deurset verhoog sonder om nodusse te belas met steeds toenemende hardewarekoste.*Spesifiek verwys dit na kriptografiese innovasies soos Geldigheidsbewyse. Dit is die rede waarom Validity Rollups 'n blokketting volhoubaar kan skaal.

**Wat is 'n geldigheidsopsomming?**

Geldigheidsopsommings (ook bekend as "ZK-opsommings") skuif berekening en staatberging van die ketting af, maar hou 'n klein hoeveelheid sekere data in die ketting. 'n Slim kontrak op die onderliggende blokketting handhaaf die staatswortel van die Rollup. Op die opsomming word 'n bondel hoogs saamgeperste transaksies, tesame met die huidige staatswortel, na 'n off-chain Prover gestuur. Die Bewyser bereken die transaksies, genereer 'n geldigheidsbewys van die resultate en die nuwe staatswortel, en stuur dit na 'n on-chain Verifier. Die Verifieerder verifieer die geldigheidsbewys, en die slim kontrak wat die toestand van die Opsomming handhaaf, dateer dit op na die nuwe toestand wat deur die Bewyser verskaf word.

**Hoe skaal Geldigheidsopsommings met dieselfde hardewarevereistes?**

Selfs al vereis Provers wel hoë-end hardeware, het hulle nie 'n impak op die desentralisasie van 'n blokketting nie; omdat die geldigheid van transaksies gewaarborg word deur wiskundig-verifieerbare bewyse.

Wat saak maak, is die vereistes om die bewyse te verifieer. Omdat die betrokke data hoogs saamgepers is en grootliks deur berekening weggeabstraheer word, is die impak daarvan op nodusse van die onderliggende blokketting minimaal*.*

Verifieerders (Ethereum-nodusse) benodig nie hoë-end hardeware nie, en die grootte van die bondels verhoog nie hardeware vereistes nie. Slegs staatsoorgange en 'n klein hoeveelheid oproepdata moet deur die nodusse verwerk en gestoor word. Dit laat alle Ethereum-nodusse toe om Geldigheidsoprolgroepe te verifieer met hul bestaande hardeware.

**Hoe meer transaksies, hoe goedkoper word dit**

In tradisionele blokkettings, hoe meer transaksies plaasvind, hoe duurder word dit vir almal namate die blokspasie gevul word - en gebruikers moet mekaar in 'n fooimark oorbied om hul transaksies ingesluit te kry.

Vir 'n Geldigheidsopsomming word hierdie dinamika omgekeer. Die verifikasie van 'n bondel transaksies op Ethereum het 'n sekere koste. Soos die aantal transaksies binne 'n bondel groei, groei die koste om die bondel te verifieer teen 'n eksponensieel stadiger tempo. Om meer transaksies by 'n bondel te voeg, lei tot goedkoper transaksiefooie, selfs al neem die bondelverifikasiekoste toe – omdat dit geamortiseer word tussen alle transaksies binne die bondel. Geldigheidsopsommings wil soveel as moontlik transaksies binne 'n bondel hê - sodat die verifikasiefooi onder alle gebruikers gedeel kan word. Namate groepgrootte tot oneindig toeneem, konvergeer geamortiseerde fooi per transaksie na nul, maw hoe meer transaksies op 'n Geldigheidsopsomming, hoe goedkoper word dit vir almal.

dYdX, 'n dApp aangedryf deur 'n Geldigheidsopsomming, sien gereeld groepgroottes van meer as 12 000 transaksies. Deur die gasverbruik van dieselfde transaksies op Mainnet vs. op 'n Geldigheidsopsomming te vergelyk, illustreer die skaalbaarheidswinste:

Vereffening van 'n dYdX-transaksie op Ethereum Mainnet:**200,000 gas**

Vereffening van 'n dYdX-transaksie op StarkEx:**<500 gas**

Nog 'n manier om daarna te kyk: Geldigheidsopsommings se hoofkoste skaal lineêr met die aantal gebruikers binne dieselfde bondel.

#### Waarom optimistiese opsommings nie so skaalbaar is as wat 'n mens dink nie

In teorie bied optimistiese opsommings byna dieselfde skaalbaarheidsvoordele as geldigheidsopsommings. Maar daar is een belangrike onderskeid: Optimistiese opsommings optimaliseer vir die gemiddelde geval, terwyl geldigheidsopsommings optimaliseer vir die ergste geval. Omdat blokkettingstelsels in uiters teenstrydige toestande werk, is optimalisering vir die ergste geval die enigste manier om sekuriteit te bereik.

In die ergste geval van die Optimistic Rollup sal 'n gebruiker se transaksies nie deur bedrogkontroleerders nagegaan word nie. Dus, om bedrog te betwis, moet die gebruiker 'n Ethereum-volle nodus, 'n L2-volle nodus sinkroniseer en self die verdagte transaksie bereken.

In die ergste geval van die Geldigheidsopsomming, sal 'n gebruiker slegs 'n Ethereum-volknooppunt hoef te sinkroniseer om die geldigheidsbewys te verifieer, wat hulself die berekeningslas spaar.

In teenstelling met Validity Rollups, skaal Optimistic Rollups se koste lineêr met die aantal transaksies in plaas van die aantal gebruikers, wat hulle duurder maak.

### Finale stuk van die legkaart - Toestemminglose toegang tot die oprolstaat

Om die geldigheid van transaksies te waarborg, moet gebruikers slegs 'n Ethereum-nodus gebruik. Gebruikers en ontwikkelaars wil egter dalk die toestand en uitvoering van die Opsomming vir verskeie doeleindes bekyk en laat loop. 'n*indekserende L2-knooppunt*vul hierdie behoefte perfek. Nie net laat dit gebruikers toe om die transaksies in die netwerk te sien nie, maar dit is ook 'n kritieke stuk infrastruktuur wat nodig is vir ekosisteem-infrastruktuur om te funksioneer. Indekseerders soos The Graph, Alchemy, Infura; Oracle-netwerke soos Chainlink en blokverkenners, al hierdie word ten volle ondersteun deur 'n toestemminglose, indekserende L2-knooppunt.

### Afsluiting

Baie benaderings om blokkettingskaalbaarheid aan te pak, fokus vals op die verhoging van*deurset*. Maar dit verwaarloos die impak van deurvloei op nodusse: die steeds toenemende hardewarevereistes om blokke te verwerk en netwerkgeskiedenis te stoor, en hoe dit die desentralisasie van 'n netwerk inhibeer.

Met die koms van geldigheidsvaste kriptografie, kan 'n blokketting**ware skaalbaarheid**bereik wat nie nodusse met steeds toenemende koste belas nie en wye desentralisasie moontlik maak. Meer transaksies met kragtige en meer komplekse berekeninge vir dieselfde hardeware is nou moontlik, wat die fooimarkdilemma in die proses omkeer – hoe meer aktiwiteit op 'n Geldigheidsopsomming, hoe goedkoper word dit!

[SwagtimusPrime.eth](https://twitter.com/SwagtimusP?t=pO0L1vGIhuC-ZgWOusQYtA&s=09)en[Louis Guthmann](https://twitter.com/GuthL)

¹ Vanaf<https://bitcoin.org/en/bitcoin-core/features/requirements>

² Vanaf<https://ethereum.org/en/developers/docs/nodes-and-clients/>

³ Vanaf<https://docs.solana.com/running-validator/validator-reqs>

⁴ Sterk vereenvoudig en aangepas vir gemiddelde dinamiese blokgroottes