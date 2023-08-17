### TL;DR

* Rakennamme StarkNettia vaiheittain, alkaen**käytettävyys**, sitten parantaa**suorituskykyä**ja lopuksi siirtyä**hajauttaminen**
* Olemme saavuttaneet ensimmäisen tavoitteemme: käytettävyyden. Tämä tarkoittaa, että olemme toimittaneet yleisen laskennan Ethereum-kaltaisessa tilassa (vuosia ennen kuin se oli ajateltu mahdolliseksi)
* Siirrymme nyt 3-osaisen rakennussuunnitelmamme vaiheeseen 2: suorituskyky, keskittyminen läpimenoon, liiketoimen kustannuksiin ja latenssiin.
* Seuraava ylös: Hajauttaminen

Vain vuosi sen jälkeen, kun[StarkNet](https://starknet.io/)-suunnitelmat oli ensimmäisen kerran julkaistu, alustalla on erittäin hyvät toiminnot. Kehittäjäyhteisö kukoistaa villeimpiä odotuksiamme pidemmälle ja tarjoaa jatkuvasti uusia L2 Native -projekteja.

Ensisijaisena tavoitteenamme viime vuoden aikana oli juuri tämän mahdollistaminen. Luomalla toimiva StarkNet-sovellus, jossa on nopeasti laajeneva valikoima ominaisuuksia, joiden avulla devs sukeltaa suoraan sisään.

He ovat tehneet tämän suurella määrällä. Hyvä ilmamittari on Starknetin[JavaScript -kirjaston latausmäärä](https://www.starknetjs.com/): jo klo 5 sen jälkeen, kun 4 kuukautta sitten tuli saataville.

Silti, kun StarkNet toimittaa kompressio magic olemme luvanneet, tällä hetkellä. se on kaukana siitä, että se voi tehdä niin tarpeeksi dApps tarpeeksi läpimenoa, ja tämä voi osoittautua kehittäjien turhautumisen lähteeksi lyhyellä aikavälillä.

Taisteluilla testattu ydintekniikkamme, STARK todistaa monia tapahtumia ja tiivistää todisteita, on ennen erittelyä tai sekvensointia. Se on prosessi StarkWare-tiimi on jo viimeistellyt kerran[StarkExille](https://starkware.co/starkex/)skaalauksen moottorille, ja teemme parhaillaan työtä sen eteen, että StarkNetin tarpeet otetaan jälleen huomioon.

Nyt kun monet käyttökelpoisuutta koskevat tavoitteemme on saavutettu, siirrämme painopistettä siihen, että tämä on ensisijainen tavoitteemme. Se on osa kolmivaiheista etenemissuunnitelmaamme:**käytettävyyttä**, seurasi verkon**suorituskyky**, ja sitten**hajauttaminen**. Vuosi sisällä haluamme antaa sinulle kurkistaa hupun alla – hahmotella mitä palaset ovat olemassa ja mikä on vielä työn alla.

### Tarina Niin Kauas

StarkNet Alpha julkaistiin julkisessa testnet kesäkuussa ja Mainnet marraskuussa. Mainnet'n käyttöönoton aikaan StarkNet tuotti jo yleistä laskentaa Ethereumin kaltaisessa tilassa, jonka yleisesti ajateltiin olevan vuosien päässä.

Kehityksen aikana olemme valinneet lähestymistavan, jossa keskitytään ensin tärkeimpiin toimintoihin ja vapautettiin ne heti kun ne tulivat saataville, pohjimmiltaan evoluutioprosessin jakaminen yhteisön kanssa. StarkNet on kaikkea muuta kuin täydellinen, mutta jo nyt kehittäjät voivat rakentaa mielekkäitä ja monimutkaisia sovelluksia. Nykyään meillä on satoja kehittäjiä[StarkNetin päälle,](https://starkware.notion.site/Projects-Building-on-StarkNet-a33dee55778a4515a9be9bdae02ee682)kymmeniä dAppsia, ja yli kymmenkunta ulkoista tiimiä, jotka kehittävät työkaluja ja infrastruktuuria StarkNet-ekosysteemille.

Päivitysten merkkijono on tuottanut monia tärkeitä ominaisuuksia, kuten L1<>L2 viestiä, ketjudataa ja kompostoituvuuden, tapahtumien tuen, perusmaksumekanismin, sopimusten ajantasaistaminen, tilin abstraktio, testauskehys, kehittäjien työkalut, nopea vahvistus, lohkon numero, lohkon aikaleima, tuki tilisopimuksiin.

Kehittäjäyhteisö on sekä syvästi kiinnostunut StarkNetista että itse asiassa muokkaa sen kehitystä. Kehittäjien palautteen perusteella on jo otettu käyttöön ominaisuuksia. Hyväksyminen voisi hyvinkin ylittää koko ajan saavutetun kasvun, minkä vuoksi tämä sysäys on nyt ensisijainen tavoitteemme.

### Seuraavat Vaiheet

Nyt kun olemme saavuttaneet käytettävyyden, on aika parantaa järjestelmän suorituskykyä. Järjestelmä pystyy nykyisessä tilassaan tukemaan rajoitettua liiketoimien käsittelyä. Tämä ratkaisu voidaan ratkaista parantamalla Sequencer Node, joka on StarkNetin kaivostoimintaa vastaava taso. Se on kone, joka sekvenssit liiketoimet sen jälkeen, kun ne on toimitettu. Kun tämä on optimoitu, läpivienti taivaanraketti.

Tätä varten analysoimme samanaikaisesti, missä pullonkaulat ovat ja käsittelemme niitä yksitellen. Tällä hetkellä kaikki pullonkaulat liittyvät sekvensointiprosessiin, joka tulee ennen kuin vetoamme STARK-sananaloihin. Taistelussa testattu sananpino on valmis tukemaan StarkNetin StarkExin kaltaista ulostuloa.

Odotamme optimointi sekvensseri on prosessi, joka kestää muutaman kuukauden, asteittaisia parannuksia koko H1/22. Tavoitteenamme on saavuttaa vuoden 2022 toisen puoliskon alussa vähintään yksi suuruusluokka korkeampi TPS kuin Ethereum, kustannuksella, joka on vähintään kaksi suuruusluokkaa pienempi kuin Ethereum’s. Ja se on vasta alku.

On olemassa hyvä syy siihen, että tätä optimointivaihetta tarvitaan. ja että StarkNet ei ollut laukaistu valmiiksi optimoidulla sekvensserillä: StarkNet pystyi saavuttamaan käytettävyyden niin nopeasti, koska saimme päähän. Sen sijaan, että aloitamme tyhjästä ja rakennamme täysin uuden sekvensserin, käytimme StarkExin erästä keskeisenä osana.

Tämä oli hieno tapa rakentaa. Se ei vain toimittaa nopeasti, se tarkoitti olemme varmoja, että rakennamme tukevia säätiöt. StarkEx lähinnä taistelun testattu ydintoiminto, joka ajaa StarkNet, koska se lovitti satoja miljardeja dollareita kumulatiivisessa kaupankäynnissä.

[StarkEx](https://starkware.co/starkex/)on skaalauksen moottori joillekin kaikkein onnistuneimmista dApps käyttäen L2: dYdX (ikuiset sopimukset), DeversiFi (spot-kauppa ja maksut) sekä Immutable ja Sorare (NFT kaivostoiminta ja kauppa).

Mutta sekvensseri rakennettu heille ja muut StarkEx asiakkaat voivat vain ottaa StarkNet toistaiseksi. Jokainen niistä käsittelee suurin piirtein samantyyppisiä liiketoimia joka päivä. StarkNetissä on kyse**yleisestä laskennasta**, joten sen tarpeet ovat avoimia. Kun sen sekvensseri ottaa tapahtumia mempool, ne tulevat eri muotoja ja kokoja. Lisäksi StarkNet on myös avoin verkosto, mikä tarkoittaa, että StarkExissa ei ole ylimääräistä laskennallista ylärajaa.

Tämänhetkinen haaste, nimittäin näiden uusien tarpeiden järjestyksen optimointi, on merkittävä sitoumus. mutta meillä on vahva ymmärrys tarvittavasta reitistä, joka perustuu menestyksekkääseen StarkEx-kehitykseen.

### Seuraava Ylös: Hajauttaminen

StarkNet on täysin hajautettu ja luvaton verkosto, joka on täydellinen johtajaliikkeiden ja hallintomekanismien avulla. Tämän saavuttamisesta tulee meidän tärkein painopisteemme kun läpikäyä skyrockets ja kustannusten lasku, ja toivomme saada ensimmäisen hajautetun version vuoden 2022 loppuun mennessä. Ennakoimme, että hajauttamissuunnitelmamme on julkisesti jaettu tulevina kuukausina.

Yhtä lailla kuin nykyinen rajallinen tuotantokapasiteetti on väliaikainen vaihe StarkNetin kehittämisessä, myös StarkWare-hankkeen nykyinen taso on väliaikainen. Näemme itsemme rakennustelineinä, jotka palvelevat tärkeää tehtävää rakennusvaiheen aikana, mutta jotka on rullattu takaisin aikanaan.

Täydellinen solmukohtien kehitys, jännittävä ensimmäinen askel kohti hajauttamista, on jo käynnissä. Täysi solmut mahdollistavat sen, että kuka tahansa voi pitää ja tarkistaa verkon tilan paikallisesti, pitää kirjaa siitä, mitä tapahtuu. Kolme työryhmää –*Erigon, Nethermind ja Equilibrium*– kehittävät täyttä solmua ja voivat aloittaa kehityksen tulevaisuudessa.

Samanaikaisesti on käynnissä valmisteluja, joiden tarkoituksena on avata sekvensointi ja todistaa ohjelmistoja yleisölle. Kuka tahansa voi osallistua sekvensserinä tai proverina StarkNetissa.

Tarkoituksena on kehittää rakenne, jolla kannustetaan ihmisiä osallistumaan toimintaan, johon kuuluu myös taloudellisia palkintoja. StarkNet-maksut menevät osittain sekvensseihin ja sananaloihin.

Keskipitkällä aikavälillä odotamme saavamme sekvensserimme kolmansille osapuolille, ja pitkällä aikavälillä odotamme myös nähdä eri joukkueet rakentaa sekvenssejä, jotka ovat sekvensointi StarkNet.

### Aina Pareminen; Ikuisesti Kuunteleminen

Kun painopiste siirtyy seuraavaan haasteeseen, parannamme edelleen aiempia saavutuksia. Ja kun jatkamme työtä kaikilla[StarkNet](https://starknet.io/)alueilla, korvat pysyvät aina avoinna koko kehittäjäyhteisölle. Joten osallistua keskusteluun, kautta[Discord](https://discord.com/invite/uJ9HZTUk2Y),[StarkNet Shamans](https://www.google.com/search?client=safari&rls=en&q=StarkNet+Shamans&ie=UTF-8&oe=UTF-8),[Twitter](https://twitter.com/Starknet_Intern), tai toinen reitti ja auttaa muokkaamaan tulevaisuuden lohkoketjujen skaalaus.