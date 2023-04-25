### TL; DR

L2-inheemse dApps kan nou vry van tradisionele L1-gasbeperkings floreer

### Inleiding

dApp-ontwikkelaars het nog altyd ernstige beperkings in die gesig gestaar as gevolg van Ethereum (L1) se blokgaslimiet. Dit beperk nie net*hoe*daardie dApps werk nie, maar ook*wat*daardie dApps in staat is om te doen.

Laag 2 (L2) bied aan dApp-ontwikkelaars 'n rekenaar-groenveld, vry van hierdie gasglasplafon. Ons glo dat die oorgrote meerderheid dApps binne 'n paar jaar L2-inheems sal wees: hulle sal van die grond af op L2 gebou gewees het om voordeel te trek uit hierdie berekeningsgraad van vryheid.

### L1-gaslimiete vorm L1-inheemse dApps

*Kom ons kyk na twee voorbeelde van gewilde dApps waarvan die ontwerp diep gevorm word deur L1-gasbeperkings: AMM's en DEX-aggregators.*

'n Outomatiese markmaker (AMM) is in wese 'n lae-gas benadering van 'n bestelling-boek-gebaseerde uitruil. In plaas daarvan om gebruikers toe te laat om limiete, stopverlies of 'n verskeidenheid ander bestellingtipes te plaas en te verwyder, maak L1 AMM's slegs voorsiening vir eenvoudige ruiltransaksies met 'n sentrale onderliggende likiditeitspoel - om die intense berekeningskoste van L1 te akkommodeer.

DEX-samestellers benodig ideaal toegang tot alle moontlike likiditeitpoele, selfs die kleinste likiditeitspoel, om die beste pryse vir gebruikers te benut. As gevolg van die koste om baie verskillende poele navraag te doen, is dit egter eenvoudig nie die moeite werd om transaksies oor L1 te doen nie. Dit is geregverdig om toegang tot poele te verkry en die gepaardgaande transaksiefooie te betaal slegs wanneer likiditeitpoele voldoende diep likiditeit het. Op soortgelyke wyse kan likwidasies in uitleen/lenings en ander kollaterale-gebaseerde dApps baie meer akkuraat wees as die verskil tussen likwidasiekorting en transaksiefooi baie kleiner was.

Die beperkte funksionaliteit en ontwerp van baie L1 dApps is direk die gevolg van ontwikkelaars wat hul kode optimeer om by Ethereum se gasbeperkings te hou. Hoekom, kan jy vra, sê ons Ethereum? Kan Solidity-kode nie op baie L1's en selfs sommige L2'e loop nie? Inderdaad, maar hiervan is Ethereum die duurste (en dus veilige) omgewing. Solidity dApps is ontwerp vir “die duurste skakel”, dit wil sê Ethereum. Gevolglik trek hulle nie voordeel uit die berekeningsvoordeel wat deur goedkoper looptydomgewings gebied word nie. Om funksionaliteit te ontsluit wat deur die ontwerp van 'n dApp vir die duurste looptyd-omgewing ontsluit is, moet die dApp se kode aangepas word.

### Die opkoms van L2-inheemse dApps

Geldigheidsopsommings (ook bekend as ZK-opsommings) maak uiters goedkoop berekening moontlik. Anders as enige ander skaaloplossing - die L2-berekening kan eksponensieel groei met slegs 'n klein impak op die on-ketting verifikasie gas koste. Boonop verwerk 'n Geldigheidsopsomming insette na die berekeninge - "getuiedata" - sonder om bykomende L1-hulpbronne te verbruik, wat berekenings met baie insette moontlik maak.

Kodering van dApps inheems op L2 in**[Cairo](https://www.cairo-lang.org/)**('n Turing-volledige taal om dApps via STARK-bewyse te skaal) ontsluit 'n groot verskeidenheid moontlikhede vir ontwikkelaars. Dit stel hulle in staat om aansienlike hoeveelhede data te gebruik - beide rekenaar- en getuiedata - wat hulle nie voorheen kon gebruik nie.

Kom ons verken sulke L2-inheemse dApps en hul nuwe, verrykte vermoëns.

#### DeFi

Voordat dYdX by StarkEx, StarkWare se Geldigheidsopsomming, aan boord gegaan het, het dYdX as 'n L1 dApp op Ethereum gewerk. Dit het sy gebruikers 'n hefboom van x10 op sintetiese bates en ondersteunde posisies met slegs een sintetiese bate gebied. Die herbou van dYdX in Kaïro as 'n L2-inheemse dApp bied 'n dramaties meer skaalbare, goedkoper en doeltreffende DeFi-platform:

* Oracle-prysopdaterings: Sulke opdaterings sluit tipies dosyne pryse en handtekeninge van verskeie bronne in om 'n mediaan te bereken. 'n Geldigheidsopsomming bied eksponensiële skaal van die prysorakellogika (handtekeningverifikasie en berekening van die mediaanprys) - sonder om daardie getuiedata aan L1 te rapporteer. Vergelyk dit met dYdX se L1-implementering, waar elke prysorakelopdatering ongeveer 300K gas gekos het en dus beperk was in sy frekwensie en die grootte van die stel prysverslaggewers.
* Hefboom: 'n Akkurate prysvoer laat dYdX toe om die risiko van 'n posisie intyds te skat en bied hoër hefboomfinansiering vir gebruikers. Danksy die verbeterde orakelprysopdaterings het dYdX die hefboomwerking van x10 op L1 tot x25 op L2 verhoog.
* Kruismarge: Met dYdX op L2, kan markmakers lang/kort bestellings op baie bates plaas met dieselfde kollaterale gebruik. Die gemiddelde vereffening op dYdX se L2 behels posisies met meer as 10 verskillende sintetiese bates! Ter vergelyking, met hierdie kruismarge-vermoë op L1 sou die on-ketting-gaskoste meer as verdubbel het.

#### Speletjies en generatiewe kuns

Die huidige oes van L1-inheemse speletjies stoor tipies speletjiebates op L1 terwyl die hele speletjielogika in 'n betroubare off-chain-toepassing geïmplementeer word. Hierdie patroon is 'n direkte gevolg van L1 se gasbeperkings. Danksy goedkoop berekeninge op L2 kan ontwikkelaars van L2-inheemse speletjie-dApps nou die speletjielogika in 'n slim kontrak implementeer en die speletjiebates vertroueloos manipuleer, eerder as om dit net te stoor. Om spellogika in die gebied van vertrouelose berekening te bring, is 'n belangrike stap in die rigting van 'n baie ryker wêreld van blockchain-gebaseerde speletjies. L2-inheemse speletjies word reeds ontwikkel op StarkNet, StarkWare se toestemminglose netwerk (bv.[Dope Wars](https://github.com/dopedao/RYO)en[Influence](https://medium.com/influenceth/influence-to-launch-on-starknet-afd3c26ea25a)).

Maar hoe kompleks kan 'n blockchain-gebaseerde speletjie werklik wees? Byvoorbeeld, die hantering van grafika direk op die ketting lyk onmoontlik -[of is dit](https://twitter.com/guiltygyoza/status/1449637155001798657)? Die oplossing van differensiaalvergelykings en die simulering van planêre beweging in 'n slim kontrak verteenwoordig 'n belangrike stap in die rigting van wat in die toekoms 'n blokkettingfisika-enjin kan wees. Die implikasies is groot. Stel jou 'n mededingende multispeler-speletjie voor soos Counter-Strike. As 'n mens die spellogika op die ketting kon simuleer, sou baie gevreesde hacks iets van die verlede word - spelers kan 'n bewysbaar regverdige speletjie geniet.

Generatiewe kuns gebruik berekening, ewekansigheid en ander data om blokketting-gebaseerde kuns te skep. Hoe meer komplekse logika en berekening 'n kunstenaar vertroueloos kan gebruik, hoe meer opsies bestaan daar om unieke enkelvoudige kunswerke te genereer. [WhaleStreet DAO](https://blog.whalestreet.xyz/whalestreet-dao-to-launch-gen-art-ecosystem-on-ethereum-with-starknet/)loods een van die eerste Gen Art-projekte op StarkNet, wat voordeel trek uit StarkNet se onbeperkte rekenaarhulpbronne.

### Wat is volgende?

Geldigheidsopsommings - en veral Kaïro-aangedrewe StarkEx en StarkNet - bied 'n omgewing waar 'n mens dApps kan ontwikkel en bedryf wat baie berekeninge of getuiedata verbruik. Met al die voordele van verspreide grootboektegnologie, voorspel ons 'n uiters opwindende toekoms vir L2-inheemse dApps.

Wat kan*jy*skep met algemene berekening wat ondersteun word deur saamstelbaarheid, vertroueloosheid en desentralisasie?