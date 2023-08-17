Lohkoketjujen skaalautuvuus on aina ollut lämmitetty aihe. Lähes jokainen lohkoketjuverkko koskettaa useita liiketoimia sekunnissa (TPS) myyntipisteenä. TPS ei kuitenkaan ole kelvollinen mittari lohkoketjuverkkojen vertailemiseksi – joten on haastavaa arvioida niiden suhteellista suorituskykyä. Lisäksi suuret TPS-numerot tulevat yleensä hintaan – mikä asettaa kysymyksen: tehdä nämä verkot todella mittakaavassa, vai lisäävätkö ne vain niiden läpivientiä?

Joten tutkitaan miten määritellä skaalautuvuus, mitkä kompromissit tehdään sen saavuttamiseksi, ja miksi validiteetti Rollups on lopullinen skaalautuvuusratkaisu.

### Kaikki liiketoimet eivät ole samanarvoisia

Ensinnäkin meidän on vahvistettava väite, jonka mukaan yksinkertainen ja kätevä TPS-mittari ei ole tarkka mittaus skaalautuvuudesta.

Korvata solmut tapahtumien suorittamisesta (ja estää käyttäjiä lähettämästä verkkoa roskapostin tarpeettomalla laskentalla), lohkoketjuista peritään maksu, joka on suhteutettu lohkoketjulle aiheutuvaan laskennalliseen rasitteeseen. Ethereumissa laskennallisen taakan monimutkaisuus mitataan*kaasussa.*Koska kaasu on erittäin kätevä mitta liiketoimen monimutkaisuus, termiä käytetään koko tässä artikkelissa ei-Ethereum lohkoketjut, vaikka se on tyypillisesti Ethereum-erityinen.

Kaupat eroavat toisistaan huomattavasti monimutkaisissa tilanteissa, ja sen vuoksi niiden kulutuksessa on paljon kaasua. Bitcoin, luotettavien vertaismaksutapahtumien edelläkävijä, tukee vain alkeellista Bitcoin-käsikirjoitusta. Nämä yksinkertaiset siirrot osoitteesta osoitteeseen käyttää vähän kaasua. Sen sijaan älykkäät sopimusketjut kuten Ethereum tai Solana tukevat virtuaalista koneistoa ja kääntöä täydentäviä ohjelmointikieliä, jotka mahdollistavat paljon monimutkaisemmat tapahtumat. Näin ollen dApps kuten Uniswap vaatii paljon enemmän kaasua.

Tämän vuoksi ei ole mitään järkeä verrata eri lohkoketjujen TPS-järjestelmää. Mitä meidän pitäisi verrata sen sijaan kapasiteetti laskenta — tai throughput.

Kaikilla lohkoketjuilla on (muuttuva) lohkon koko ja lohkoaika, jotka määrittävät kuinka monta*laskenta-yksikköä*voidaan käsitellä lohkoa kohti, ja kuinka*nopea*uusi lohko voidaan lisätä. Yhdessä nämä kaksi muuttujaa määrittävät lohkoketjun*tilavuuden*.

### Mitä Rajoita Scalability?

Lohkoketjut pyrkivät olemaan maksimaalisesti hajautettuja, osallistavia verkostoja. Tämän saavuttamiseksi kaksi perusominaisuutta on pidettävä kurissa.

#### **1. Laitteiston Vaatimukset**

Lohkoketjuverkon hajauttaminen määräytyy sen mukaan, pystyvätkö verkon heikoimman solmun tarkistamaan lohkoketjun ja pitämään sen tilan. Näin ollen kustannukset solmun (laitteisto, kaistanleveys, ja varastointi) olisi pidettävä mahdollisimman alhaisena, jotta mahdollisimman monesta henkilöstä voi tulla luvanvaraisia osallistujia luotettavaan verkostoon.

#### 2**.**Valtion kasvu

Valtion kasvu viittaa siihen, miten nopeasti lohkoketju kasvaa. Mitä enemmän läpivientiä lohkoketju sallii tapahtua per yksikkö aikaa, sitä nopeammin lohkoketju kasvaa. Täysi solmut tallentaa verkon historiaa, ja niiden on voitava vahvistaa verkon tila. Ethereumin tila tallennetaan ja siihen viitataan käyttämällä tehokkaita rakenteita, kuten puita. Kun valtio kasvaa, siihen lisätään uusia lehtiä ja oksia, mikä tekee yhä monimutkaisemmaksi ja aikaa vievämmäksi tiettyjen toimien toteuttamiseksi. Kun ketju kasvaa kooltaan, se pahentaa pahimman tapauksen suorituksen solmut, mikä johtaa yhä enemmän aikaa validoida uusia lohkoja. Ajan myötä tämä myös lisää kokonaisaikaa se vaatii täyden solmun synkronointia.

### Koko ajan lisääntyvän vähenemisen vaikutukset

#### 1. Solmujen Määrä

Solmun ja solmun käyttöä koskevat vähimmäisvaatimukset ovat seuraavat:

* Bitcoin1: 350GB kiintolevytilaa, 5 Mbit/s yhteys, 1GB RAM, CPU >1 Ghz. **Solmujen lukumäärä: ~10,000**
* Ethereum2: 500GB+ SSD-levytila, 25 Mbit/s yhteys, 4–8 Gt RAM, CPU 2–4 ytimiä. **Solmujen lukumäärä: ~6,000**
* Solana3: 1.5TB+ SSD-levytila, 300 Mbit/s yhteys, 128 GB RAM CPU 12+ ytimiä. **Solmujen lukumäärä: ~1,200**

Huomaa, että lohkoketjun läpi kulkevien solmujen suurempi suoritinsuhde, kaistanleveys ja varastointivaatimukset verkon vähemmän solmukohtia – mikä johtaa heikompaan hajauttamiseen ja vähemmän osallisuutta edistävään verkkoon.

#### 2. Aika synkronoida koko solmun

Kun käytät solmua ensimmäistä kertaa, sen on synkronoitava kaikki olemassa olevat solmut, lataus, ja vahvistaa, että verkon tila aina genesis lohkosta aina ketjun kärkeen. Prosessin olisi oltava mahdollisimman nopea ja tehokas, jotta kuka tahansa voi toimia pöytäkirjan luvattomana osallistujana.

Kun Jameson Lopp’s[2020 Bitcoin Node](https://blog.lopp.net/2020-bitcoin-node-performance-tests/)ja[2021 Node Sync Tests](https://blog.lopp.net/2021-altcoin-node-sync-tests/)indikaattorina, Taulukko 1 vertaa aikaa se kuluu synkronoida koko solmun Bitcoin vs. Ethereum vs. Solana keskimäärin kuluttaja-asteella PC.

![Taulukko 1. Lohkoketjun läpimeno ja solmun synkronoinnin vertailu](/assets/1_gmpi_1c9zipoc-znrh7b5q.png "Taulukko 1. Lohkoketjun läpimeno ja solmun synkronoinnin vertailu")

Taulukosta 1 käy ilmi, että kasvava määrä johtaa pidempiin synkronointiaikoihin, koska yhä enemmän tietoja on käsiteltävä ja tallennettava.

Vaikka solmukohtien ohjelmistoparannuksia tehdään jatkuvasti kasvavan lohkoketjun haasteen lieventämiseksi (levyn jalanjäljen pienentäminen, nopeampi synkronointinopeudet, vahvempi kaatumisen sietokyky, modulaarinen tiettyjen osien jne. , solmut ilmeisesti vielä voi pysyä tahdissa kasvaa throughput.

### Miten Skaalautuvuus olisi määriteltävä?

Skaalautuvuus on eniten väärin esitetty termi lohkoketjutilaan. Vyöhykkeen lisääminen on toivottavaa, mutta se on vain yksi osa palapeliä.

***Skaalautuvuus**tarkoittaa**lisää tapahtumia****saman laitteen** osalta.*

Tästä syystä skaalattavuus voidaan erottaa kahteen luokkaan.

#### Sekvensserin skaalautuvuus

Sequencing kuvailee liiketoimien tilaamista ja käsittelyä verkossa. Kuten edellä on todettu, mikä tahansa lohkoketju voisi triviaalisti lisätä sen tilavuutta korottamalla lohkon kokoa ja lyhentämällä sen lohkoaikaa — kunnes sen hajauttamiseen kohdistuvan kielteisen vaikutuksen katsotaan olevan liian merkittävä. Mutta näiden yksinkertaisten parametrien muokkaaminen ei tarjoa tarvittavia parannuksia. Ethereumin EVM voi teoriassa[käsitellä jopa ~2000 TPS](https://twitter.com/dankrad/status/1459607325854121989), mikä ei riitä pitkän aikavälin lohkotilan kysynnän tyydyttämiseen. Sarjauksen mittaamiseksi Solana teki joitakin vaikuttavia innovaatioita: hyödyntäen rinnakkaista toteutusympäristöä ja viisasta konsensuksen mekanismia, joka mahdollistaa paljon tehokkaamman teho. Mutta parannuksista huolimatta se ei ole riittävä eikä skaalautuva. Solanan osuus kasvaa sen myötä, että myös solmukohtien suorittamisesta aiheutuvat laitteistokustannukset kasvavat ja prosessoivat liiketoimia.

#### Todentamisen skaalautuvuus

*Tarkistaminen skaalautuvuus kuvaa lähestymistapoja, jotka lisäävät suorituskykyä kuormittamatta solmuja jatkuvasti kasvavilla laitteistokustannuksilla.*Erityisesti se viittaa kryptografisiin innovaatioihin kuten validiteettitodisteisiin. Ne ovat syy siihen, miksi validiteettirullat voivat laajentaa lohkoketjua kestävällä tavalla.

**Mikä on voimassa oleva rullaus?**

Voimassaolo Rollups (tunnetaan myös nimellä ZK-Rollups) siirtää laskenta ja valtion varastointi ketjun ulkopuolella, mutta pitää pieni määrä tiettyjä tietoja ketjulla. Peräkkäinen sopimus taustalla olevasta lohkoketjusta pitää yllä Rollupin valtion juurta. Rollupissa lähetetään erittäin pakattujen liiketoimien erä yhdessä nykyisen valtion juuren kanssa ketjun ulkopuoliseen Proveriin. Prover laskee maksutapahtumat, tuottaa oikeellisuuden todisteet tuloksista ja uuden valtion juureen, ja lähettää sen on-chain Verifier. Todentaja varmistaa pätevyyden todistamisen; ja älykäs sopimus, joka ylläpitää Rollupin tilaa, päivittää sen uuteen tilaan, jonka Prover on toimittanut.

**Miten validiteetti Rollups-asteikko samoilla laitteistovaatimuksilla?**

Vaikka Proverit vaativat huippuluokan laitteistoja, ne eivät vaikuta lohkoketjun hajauttamiseen. koska liiketoimien pätevyys on taattu matemaattisesti todennettavissa olevilla todisteilla.

Tärkeää on todisteiden tarkastamista koskevat vaatimukset. Koska tiedot ovat erittäin pakattuja ja suurelta osin abstracted pois laskenta, sen vaikutus solmut taustalla lohkoketjun on minimaalinen*.*

Todentajat (Ethereum solmut) eivät vaadi high-end laitteistoa, ja erien koko ei lisää laitteiston vaatimuksia. Solmukohtien on käsiteltävä ja tallennettava vain pieniä määriä puhelutietoja ja vain siirtymävaiheita. Tämä mahdollistaa kaikkien Ethereum solmujen tarkistaa validiteetti Rollup erät käyttäen niiden olemassa olevaa laitteistoa.

**Mitä enemmän tapahtumia, sitä halvempaa se saa**

Perinteisissä lohkoketjuissa tapahtuu enemmän tapahtumia, mitä kalliimpaa se saa kaikille, kun lohko tila täytetään — ja käyttäjien on ylitettävä toisensa maksumarkkinoilla saada liiketoimet mukana.

Voimassaolon Rollupin osalta tämä dynamiikka käännetään. Verifying a batch of transactions on Ethereum on tiettyjä kustannuksia. Kun erän sisällä tapahtuvien liiketoimien määrä kasvaa, erän varmentamisen kustannukset kasvavat eksponentiaalisesti hitaammin. Useampien tapahtumien lisääminen erään johtaa halvempiin maksuihin, vaikka erän vahvistuskustannukset nousevat – koska se kuoletetaan kaikkien erän sisällä tapahtuvien tapahtumien kesken. Voimassaolo Rollupit haluavat niin monta tapahtumaa kuin mahdollista erän sisällä – jotta todentamismaksu voidaan jakaa kaikkien käyttäjien kesken. Koska eräkoko kasvaa äärettömäksi, jaksotettu maksu per tapahtuma muuttuu nollaan, i. ., enemmän tapahtumia valididity Rollup, halvempaa se saa kaikille.

dYdX, dApp powered by valididity Rollup, näkee usein eräkokoja yli 12,000 tapahtumia. Kun verrataan samojen liiketoimien kaasunkulutusta Mainnet'ssa vs. valididity Rollup -ohjelmassa, voidaan todeta, että skaalautuvuushyödyt ovat seuraavat:

DYdX-tapahtuman selvittäminen Ethereum Mainnet:**200000 kaasua**

DYdX-tapahtuman selvittäminen StarkEx:**<500 kaasu**

Toinen tapa tarkastella sitä: Validity Rollupsin pääkustannusasteikot ovat linjassa saman erän käyttäjien lukumäärän kanssa.

#### Miksi Optimistiset rullat eivät ole niin skaalautuvia kuin voi ajatella

Optimistiset Rollupit tarjoavat teoriassa lähes samat skaalautuvuusedut kuin Validity Rollups. Mutta yksi tärkeä ero: Optimistiset Rollupit optimoi keskimääräisen kotelon, kun taas validiteetti Rollupit optimoi huonoimman kotelon. Koska lohkoketjujärjestelmät toimivat erittäin vastoinkäymisissä, optimointi pahin tapaus on ainoa tapa saavuttaa turvallisuutta.

Optimistisen Rollupin pahimmassa tapauksessa käyttäjän tapahtumia ei tarkisteta petosten tarkastajien toimesta. Joten, kiistääkseen petos, käyttäjän on synkronoitava Ethereum koko solmu, L2 täysi solmu, ja laskea epäilyttävän tapahtuman itse.

Vuonna Voimassaolo Rollupin huonoin tapaus, käyttäjä olisi vain tarvitse synkronoida Ethereum koko solmun tarkistaa oikeellisuuden todiste, tallentamalla itse laskennallisen taakan.

Optimistiset Rollupsin kustannusasteikot vastaavat käyttäjien määrän sijasta liiketoimien määrää, mikä tekee niistä kalliimpia.

### Palapelin lopullinen osa – Käyttöoikeus liikkuvan kaluston osavaltioon

Varmistaakseen tapahtumien pätevyyden, käyttäjien täytyy käyttää vain Ethereum solmua. Käyttäjät ja kehittäjät voivat kuitenkin haluta tarkastella ja toteuttaa Rollupin tilaa ja toteutusta eri tarkoituksiin. L2-solmun</em>indeksointi*täyttää tämän tarpeen täydellisesti. Se ei ainoastaan salli käyttäjien nähdä tapahtumia verkossa, mutta se on myös kriittinen osa infrastruktuuria, joka on tarpeen, jotta ekosysteemiinfrastruktuuri toimisi. Indeksoijat kuten Graph, Alchemy, Infura; Oracle verkot, kuten Chainlink, ja lohko Explorers, kaikki nämä ovat täysin tukena luvaton, indeksointi L2 solmu.</p>

### Päätelmät

Monet lähestymistavat, joilla puututaan lohkoketjujen skaalautuvuuteen, keskittyvät virheellisesti*tehon lisäämiseen*. Tämä kuitenkin jättää huomiotta läpimenoalueiden vaikutuksen solmukohtiin: jatkuvasti kasvavat laitevaatimukset lohkojen käsittelemiseksi ja verkkohistorian tallentamiseksi, ja miten se estää verkon hajauttamisen.

Validity-proof cryptography kynnyksellä, lohkoketju voi saavuttaa**todellisen skaalautuvuuden**, joka ei rasita solmuja jatkuvasti kasvavilla kustannuksilla ja mahdollistaa laajan hajauttamisen. Enemmän transaktioita tehokkailla ja monimutkaisemmilla laskentoja saman laitteen ovat nyt mahdollisia. kääntämällä palkkio markkinoiden ongelma prosessissa — mitä enemmän toimintaa Validity Rollup, halvempaa se saa!

[SwagtimusPrime.eth](https://twitter.com/SwagtimusP?t=pO0L1vGIhuC-ZgWOusQYtA&s=09)ja[Louis Guthmann](https://twitter.com/GuthL)

1 Alkaen<https://bitcoin.org/en/bitcoin-core/features/requirements>

2 Alkaen<https://ethereum.org/en/developers/docs/nodes-and-clients/>

3 Alkaen<https://docs.solana.com/running-validator/validator-reqs>

4 Erittäin yksinkertaistettu ja mukautettu keskimääräisiin dynaamisiin lohkokokoihin