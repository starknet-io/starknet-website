### TL;DR

L2-natiivi dApps voi nyt kukoistaa ilman perinteisiä L1-kaasun rajoituksia

### Johdanto

dApp kehittäjät ovat aina kohdanneet vakavia rajoitteita johtuen Ethereumin (L1) lohkokaasujen raja. Se rajoittaa paitsi*kuinka*nämä dApps toimivat, myös*mitä*ne ovat kykeneviä tekemään.

Kerros 2 (L2) tarjoaa dApp-kehittäjille laskennallisen viheralueen, joka ei sisällä tätä kaasulasikattoa. Uskomme, että valtaosa dAppsista on muutaman vuoden kuluessa L2-syntyperäisiä: ne on rakennettu maasta ylöspäin L2-asteelle, jotta ne voisivat hyötyä tästä laskennallisesta vapauden asteesta.

### L1 kaasun raja-arvot muoto L1 natiivi dApps

*Tarkastellaanpa kahta esimerkkiä suosituista dAppsista, joiden suunnitteluun L1-kaasurajoitukset vaikuttavat syvällisesti: AMM:t ja DEX-aggregaattorit.*

Automated Market Maker (AMM) on lähinnä vähän kaasua lähentävä tilauskirjapohjainen vaihto. Sen sijaan, että käyttäjät voisivat asettaa ja poistaa rajoja, pysäyttää häviöitä tai erilaisia muita tilaustyyppejä, L1 Rahamarkkinainstrumentit sallivat ainoastaan yksinkertaiset swapit, joissa on keskitetty likviditeettipooli – jotta ne vastaisivat L1:n voimakkaita laskennallisia kustannuksia.

DEX-yhdistäjien on mieluiten saatava käyttöönsä kaikki mahdolliset likviditeettipoolit, jopa pienin likviditeettipooli, jotta käyttäjille saadaan parhaat hinnat. Monien eri poolien kyselyjen kustannusten vuoksi ei kuitenkaan yksinkertaisesti kannata käydä kauppaa yli L1:n. On perusteltua käyttää pooleja ja maksaa niihin liittyvät transaktiomaksut vain, jos likviditeettipooleissa on riittävästi likviditeettiä. Samankaltaisessa laskimossa Lainojen/lainanoton ja muiden vakuuksiin perustuvien dAppsin selvitystila voisi olla paljon tarkempi, jos realisointialennuksen ja transaktiomaksun ero olisi paljon pienempi.

Monien L1 dAppsin rajoitetut toiminnot ja suunnittelu johtuvat suoraan kehittäjistä, jotka optimoivat koodinsa Ethereumin kaasurajoitusten noudattamiseksi. Miksi te voitte kysyä, sanommeko me Ethereum? Ei voida käyttää Solidaarisuuskoodia monilla L1- ja jopa joillakin L2-tasoilla? Todellakin, mutta nämä, Ethereum on kallein (ja siksi turvallinen) ympäristö. Solidaarisuus dApps on suunniteltu “kallein linkki”, eli Ethereum. Näin ollen ne eivät hyödynnä laskennallista etua, joka aiheutuu halvemmista ajoaikaympäristöistä. Jotta voit avata toiminnallisuuden etäännyttää suunnittelemalla dApp kalleimpaan ajoaikaan ympäristöön, dAppin koodi on mukautettava.

### Nousu L2-natiivi dApps

Voimassaolo Rollupit (esim. ZK-Rollups) mahdollistavat erittäin halvan laskennan. Toisin kuin mikä tahansa muu skaalausratkaisu – L2-laskenta voi kasvaa eksponentiaalisesti, ja sillä on vain vähäinen vaikutus toimitusketjun verifiointikaasun kustannuksiin. Lisäksi validiteetti Rollup prosessoi tietolähteitä laskelmiin – ”todistajatietoja” – kuluttamatta ylimääräisiä L1-resursseja, jotka mahdollistavat lukuisilla syötteillä tehdyt laskelmat.

Koodaus dAppsia natiivisti L2:ssa**[Kairo](https://www.cairo-lang.org/)**(käänteinen kieli skaalatakseen dAppsin STARK-vedoksi) avaa laajan valikoiman mahdollisuuksia kehittäjille. Sen avulla he voivat käyttää merkittäviä määriä tietoja – sekä laskennallisia että todistajatietoja – joita he eivät voineet käyttää aikaisemmin.

Tutkitaan tällaisia L2-natiivi dApps ja niiden uusia, rikastettuja ominaisuuksia.

#### DeFi

Ennen StarkExiin perehdyttämistä StarkWare’s valididity Rollup, dYdX toimii L1 dApp -sovelluksena Ethereumissa. Se tarjosi käyttäjilleen vipuvaikutusta synteettisiin omaisuuseriin ja tuettuihin omaisuuseriin, joilla oli vain yksi synteettinen omaisuuserä. DYdX:n jälleenrakentaminen Kairossa L2-natiivina dApp tarjoaa dramaattisesti skaalautuvamman, halvemman ja tehokkaan DeFi-alustan:

* Oracle hintapäivitykset: Tällaiset päivitykset tyypillisesti sisältää kymmeniä hintoja ja allekirjoituksia eri lähteistä laskea mediaan. Voimassaolo Rollup mahdollistaa hintaorakettilogiikan eksponentiaalisen skaalaamisen (allekirjoituksen tarkistaminen ja mediaanihinnan laskeminen) – ilman että todistajan tiedot ilmoitetaan L1:lle. Vertaa tätä dYdX: n L1 täytäntöönpanoon, jossa jokainen hinta oracle päivitys maksaa noin 300K kaasua ja oli, sen vuoksi hintaraportoijien joukon tiheys ja koko on rajoitettu.
* Hyödykkeet: Tarkan hintasyötteen avulla dYdX voi arvioida reaaliaikaisen aseman riskin ja tarjota käyttäjille enemmän vaikutusvaltaa. Parannetun oraklen hintapäivityksen ansiosta dYdX lisäsi vivutusta L2-arvon x10 arvosta L1-x25.
* Cross-margin: Kun dYdX L2:ssa, markkinatakaajat voivat tehdä pitkiä ja lyhyitä tilauksia monille omaisuuserille käyttäen samaa vakuutta. Keskimääräinen toimitus dYdX L2 sisältää positioita, joissa on enemmän kuin 10 erilaista synteettistä omaisuutta! Vertailun vuoksi voidaan todeta, että jos tämä ristiinkompensointikyky L1:ssä olisi yli kaksinkertaistunut ketjun sisäisten kaasukustannusten tasolle.

#### Pelaaminen ja Generatiivinen taide

Nykyinen sato L1-natiivi pelejä tyypillisesti tallentaa pelin varat L1 samalla koko pelin logiikkaa luotettu ketjun ulkopuolinen sovellus. Tämä malli on suora seurausta L1:n kaasun rajoituksista. Kiitos halpa laskenta L2 L2-natiivin pelaamisen dAppsin kehittäjät voivat nyt toteuttaa pelin logiikkaa älykkäässä sopimuksessa ja manipuloida pelin varoja luotettavasti, sen sijaan, että vain varastoitaisiin. Pelitason logiikan tuominen luotettava laskenta on merkittävä askel kohti paljon rikkaampaa maailmaa blockchain-pohjaiset pelit. L2-natiivia pelejä kehitetään jo StarkNetissa, StarkWare-käyttöoikeudettomassa verkossa (esim.,[Dope Wars](https://github.com/dopedao/RYO)ja[Influence](https://medium.com/influenceth/influence-to-launch-on-starknet-afd3c26ea25a)).

Mutta kuinka monimutkainen voi blockchain-pohjainen peli todella olla? Esimerkiksi, grafiikan käsittely suoraan ketjulla vaikuttaa mahdottomalta —[vai onko se](https://twitter.com/guiltygyoza/status/1449637155001798657)? Solving DIFFERENTIAL EQUATIONS ja simuloivat planar liikettä älykäs sopimus on merkittävä askel kohti mitä tulevaisuudessa voisi olla blockchain fysiikka moottori. Vaikutukset ovat valtavat. Kuvittele kilpailukykyinen moninpeli peli kuten Counter-Strike. Jos voisi simuloida pelin logiikkaa ketjussa, monet pelätty hakata olisi tullut asia menneisyyden - pelaajat voisivat nauttia todistettavasti oikeudenmukainen peli.

Generative Art käyttää laskentaa, satunnaisuutta ja muuta dataa lohkoketjupohjaisen taiteen luomiseen. Mitä monimutkaisempi logiikka ja laskenta taiteilija voi käyttää luottavaisesti, sitä enemmän vaihtoehtoja on luoda ainutlaatuisia yksittäisiä taideteoksia. [WhaleStreet DAO](https://blog.whalestreet.xyz/whalestreet-dao-to-launch-gen-art-ecosystem-on-ethereum-with-starknet/)on käynnistämässä yhden ensimmäisistä StarkNet-hankkeista, jossa hyödynnetään StarkNetin rajoittamattomia laskennallisia resursseja.

### Mitä seuraavaksi?

Voimassaolo rullat – ja Kairo-käyttöinen StarkEx ja StarkNet, erityisesti — tarjota ympäristö, jossa voidaan kehittää ja käyttää dApps, joka kuluttaa paljon laskentaa tai todistajan tietoja. Kun kaikki edut hajautetun kirjanpidon teknologiaa, ennustamme äärimmäisen jännittävä tulevaisuus L2-natiivi dApps.

Mitä*voit*luoda yleisen laskennan tukena säveltäminen, luotettavuus ja hajauttaminen?