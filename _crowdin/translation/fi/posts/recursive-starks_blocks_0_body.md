### TL;DR

* Rekursiivinen Todistus on suorana Mainnetissa, StarkEx-sovelluksissa sekä StarkNet-sovelluksissa yhdellä todistuksella
* Se lisää mittakaavaa ja tuottaa kustannushyötyä. ja latenssi (harvinainen ja jännittävä mittakaavassa ja latenssia liikkuvat rinnakkain, eikä ole kompromissina)
* Se asettaa vaiheessa L3 ja muut edutGo lukea blogi[Rekursive Proving](https://medium.com/@starkware/recursive-starks-78f8dd401025). Se on viileä tavaraa 😉

### Skaalautukaa!

Rekursiiviset vedokset – joita käytetään Kairossa yleisessä laskennassa – ovat nyt tuotannossa. Tämä on merkittävä sysäys L2:n mittakaavassa STARKSIN kanssa. Se nopeasti tuottaa moninkertainen kasvu määrä tapahtumia, jotka voidaan kirjoittaa Ethereum kautta yhden todisteen.

STARK skaalaus on tähän asti toiminut siten, että kymmeniä tai jopa satoja tuhansia tapahtumia on siirretty yhdeksi todisteeksi, joka oli kirjoitettu Ethereum. Kanssa rekursio, monet tällaiset todisteet voidaan “rullattu ylös” yhdeksi todiste.

Tämä menetelmä on nyt tuotannossa lukuisille Kairo-pohjaisille sovelluksille: sovellukset käynnissä StarkExissa, StarkWare’s SaaS skaalausmoottorissa ja StarkNet, käyttöoikeudeton rollup.

### Tarina tähän mennessä

Maaliskuussa 2020 Mainnetissa saatujen ensimmäisten todisteiden jälkeen seuraavat kehityssuunnat ovat muokanneet STARKin käyttötapaa.

### STARK- pohjainen skaalaus

Kesäkuussa 2020 ensimmäinen STARK-pohjainen skaalauksen ratkaisu —[StarkEx](https://youtu.be/P-qoPVoneQA)— otettiin käyttöön Ethereum Mainnetissa. StarkExilla on testaaja, joka suorittaa suuria laskelmia ketjun ulkopuolelta ja tuottaa STARK-todisteen oikeellisuudestaan, ja todentaja, joka vahvistaa tämän todisteen ketjulla. Tämän ensimmäisen käyttöönoton rajoitukset olivat StarkWare-insinöörien ”käsin kirjoitettu” ja rajoittivat siten suuresti ominaisuuden nopeutta StarkExille. Totesimme, että tarvitaan ohjelmointikieltä, jolla tuetaan yleisen laskennan osoittamista – Kairo.

#### Cairo

Kesällä 2020 Kairo teki[ensimmäinen ulkonäkö Ethereum Mainnet](https://medium.com/starkware/hello-cairo-3cb43b13b209). Kairo on lyhenne sanoista CPU Algebraic Intermediate Representation (AIR), ja se sisältää yhden ainoan ilmaisimen, joka vahvistaa tämän CPU:n ohjekokonaisuuden. Se avasi oven koodaus todisteet monimutkaisempi liiketoiminnan logiikka, mielivaltaiset laskennalliset lausunnot, ja tehdä niin nopeammin ja turvallisesti. Kairo ohjelma voi todistaa yhden sovelluksen logiikan toteuttamisen. Mutta Kairo ohjelma voi myös olla concatenation useita tällaisia sovelluksia — SHARP.

#### JAA

SHARP – SHARed Prover – ottaa liiketoimet useista erillisistä sovelluksista ja todistaa ne kaikki yhdessä STARK-todisteessa. Sovellukset yhdistävät liiketoimien eränsä ja täyttävät STARK-vedoksen kapasiteetin nopeammin. Liiketoimet käsitellään paremmalla nopeudella ja viiveellä. Seuraava raja: Rekursiiviset Todisteet, mutta ei vain joidenkin kovalla koodattu logiikka, vaan pikemminkin**yleinen laskenta**.

Rekursiivisen Todistamisen täyden hyödyn ymmärtämiseksi on syytä ymmärtää hieman lisää siitä, miten SHARP on tähän asti suorittanut (ei-rekursiivinen). Piirustus 1 kuvaa tyypillistä ei-rekursiivista virtausta:

![Piirustus 1: Tyypillinen ei-rekursiivinen ulkomuoto](/assets/recursive_starks_01.png "Piirustus 1: Tyypillinen ei-rekursiivinen ulkomuoto")

Täällä lausumat saapuvat ajan mittaan. Kun tietty kapasiteetin (tai aika) kynnysarvo on saavutettu, saadaan suuri yhdistetyn lausuman (ns. Train). Tämä yhdistetty selvitys on osoitettu vain sen jälkeen, kun kaikki yksittäiset lausumat on saatu. Tämä todiste vie pitkän aikaa todistaa (karkeasti summa aikaa se kestää todistaa kunkin lausuman erikseen).

Todistaen erittäin suuria lausuntoja lopulta rajoittavat käytettävissä olevat tietotekniset resurssit, kuten muisti. Ennen rekursiota tämä oli tehokkaasti STARKin osoittaman skaalautuvuuden rajoittava este.

### Mitä Rekursiivinen Proving on?

STARKin todisteiden avulla lausuman osoittamiseen kuluva aika on suunnilleen lineaarinen sen kanssa, kuinka paljon lausuman suorittamiseen kuluu aikaa. Lisäksi, jos todiste vie T aikaa, sitten todentaminen vie noin log(T) aikaa, jota kutsutaan tyypillisesti “logarithmic compression”. Toisin sanoen STARKsin avulla kulutat paljon vähemmän aikaa lausunnon tarkistamiseen kuin sen laskemiseen.

[Kairo](https://starkware.co/cairo/)sallii yleisten laskennallisten ilmoitusten esittämisen, jotka STARK-todistukset voivat todistaa ja jotka vastaavat STARK-todentajia.

Tässä on mahdollisuus suorittaa[rekursio](https://en.wikipedia.org/wiki/Recursion)potkia: Samalla tavalla, että kirjoitamme Kairo ohjelma, joka todistaa oikeellisuuden tuhansia tapahtumia, Voimme myös kirjoittaa Kairo ohjelma, joka tarkistaa useita STARK todisteita. Voimme luoda yhden todisteen todistaa pätevyyttä useita “ylävirrassa” todisteita. Tätä me kutsumme rekursiiviseksi Provingiksi.

Koska logarithmic compression ja karkeasti lineaarinen osoittautuva aika, Todisteena STARK todistuksesta kestää suhteellisen vähän aikaa (odotetaan olevan vain muutaman minuutin lähitulevaisuudessa).

Toteuttaessaan Recursionia SHARP voi todistaa lausumansa saapuessaan paikalle. Niiden todisteet voidaan yhdistää yli ja yli rekursiivisia vedoksia eri kuvioita ennen, tietyssä kohdassa esitetään todisteet siitä, että todentaja on tehnyt sopimuksen ketjun sisällä. Tyypillinen kuvio on kuvattu piirustuksessa 2:

![Piirustus 2: Tyypillinen rekursiivinen osoittava virtaus.](/assets/recursive_starks_02.png "Piirustus 2: Tyypillinen rekursiivinen osoittava virtaus.")

### Välittömät hyödyt Rekursive Proving

#### Ketjun Alennukset

Pois bat, voimme saavuttaa “puristus” useita vedoksia yhdeksi joka merkitsee alhaisempia ketjun sisäisiä todentamiskustannuksia kutakin liiketoimea kohden (jos jokaiseen laskelmaan voi sisältyä useita liiketoimia).

Rekursio, laskennallinen resurssien este (esim. muisti) että rajoitettu vedokset koko tähän asti, on poistettu, koska jokainen rajoitettu koko lausuma voidaan todistaa erikseen. Rekursiota käytettäessä rekursiota junan rekursiolla on lähes rajoittamaton koko, ja liiketoimeen liittyviä kustannuksia voidaan pienentää suuruusluokan tilauksilla.

Käytännössä vähennys riippuu hyväksyttävästä viiveestä (ja siitä, millä tasolla liiketoimet toteutuvat). Lisäksi, koska kuhunkin todistukseen liittyy tyypillisesti myös joitakin tuotoksia, kuten on-chain data, sellaisten tietojen määrälle on rajat, jotka voidaan kirjata ketjulle yhdessä yhden todisteen kanssa. Kustannusten alentaminen suuruusjärjestyksessä ja vielä paremmin, on kuitenkin mitättömän mahdollista.

#### Vähentynyt Latenssi

The Rekursive Proving malli vähentää latenssi osoittautua suurten Junat lausuntoja. Tämä johtuu kahdesta tekijästä:

1. Saapuvat lausumat voidaan todistaa**rinnakkain**(toisin kuin erittäin suuren yhdistetyn lausuman osoittaminen).
2. Ei ole tarpeen odottaa, kunnes junan viimeinen julkilausuma saapuu todistamisen alkamiseen. Sen sijaan todisteet voidaan yhdistää uusiin lausumiin niiden saapuessa. Tämä tarkoittaa sitä, että viimeinen junaan liittyvä julkilausuma on latenssi, on suunnilleen aika se vie todistaa, että hyvin viimeinen julkilausuma plus aika se vie todistaa Rekursive todentaja lausunto (joka todistaa kaikki lausunnot jotka ovat jo “onboarded” tämä nimenomainen Juna).

Olemme aktiivisesti kehittää ja optimoida latenssin osoittaminen Rekursive Verifier lausuma. Odotamme tämän pääsevän muutamassa minuutissa siihen järjestykseen muutaman kuukauden kuluessa. Näin ollen erittäin tehokas SHARP voi tarjota viiveitä muutamasta minuutista muutamaan tuntiin. riippuen vaihtoehdoista ja ketjukohtaisista kustannuksista. Tämä merkitsee merkittävää parannusta SHARP:n latenssiin.

#### L3:n Helpottaminen

Rekursiivisen todentajan selvityksen kehittäminen Kairossa avaa myös mahdollisuuden toimittaa todisteet StarkNetille, koska tämä toteamus voidaan paistaa StarkNet-älykästä sopimusta varten. Tämän avulla voidaan rakentaa[L3 käyttöönottoa julkisen StarkNet-verkon](https://medium.com/starkware/fractal-scaling-from-l2-to-l3-7fe238ecfb4f)päälle (L2-verkko).

Rekursiivista mallia sovelletaan myös L3:n todisteiden kokoamiseen, joka on tarkistettava yhdellä todistuksella L2:sta. Siten myös siellä saavutetaan hyperskaalautuminen.

### Lisää Hienoja Hyötyjä

#### Sovellettava Rekursio

Rekrytointi avaa entistä enemmän mahdollisuuksia alustoille ja sovelluksille, jotka haluavat laajentaa kustannuksiaan ja suorituskykyään.

Jokainen STARK todiste todistaa, että jokin syöte tunnetaan “julkisena syötteenä” (tai “ohjelma lähtö” Kairossa ehdot). STARK rekursio pakkaa käsitteellisesti kaksi oikolukua, joissa on*kaksi*syötettä*yksi*todistukseen kahdella syötteellä. Toisin sanoen, kun taas määrä todisteet on vähentynyt, määrä syöttöjä pidetään vakiona. Näitä syötteitä käytetään sen jälkeen tyypillisesti sovelluksessa tietyn tilan päivittämiseksi L1:ssä (e. . päivittää valtion root tai suorittaa on-chain poistaminen).

Jos rekursiivisen ilmoituksen sallitaan olevan*sovellus tietoinen*, eli tunnistaa itse sovelluksen semantiikan se voi sekä pakata kaksi vedoksia yhdeksi*ja*yhdistää kaksi tuloa yhteen. Tuloksena oleva lausunto todistaa sovelluksen semantiikkaan perustuvan syöttöyhdistelmän pätevyyden, Näin ollen nimi Applicative Recursion (katso piirustus 3, esimerkiksi)..

![Piirustus 3: Sovellettava rekursion esimerkki](/assets/recursive_starks_03.png "Piirustus 3: Sovellettava rekursion esimerkki")

Täällä, Lauseke 1 todistaa valtion päivityksen A to B ja Lauseke 2 todistavat edelleen päivityksen B to C. Lausekkeen 1 ja lausuman 2 todisteet voidaan yhdistää kolmanteen lausumaan, joka osoittaa suoran päivityksen A:sta C:hen. Soveltamalla samanlaista logiikkaa rekursiivisesti voidaan vähentää valtion päivitysten kustannuksia hyvin merkittävästi jopa lopullisuus latency vaatimus.

Toinen tärkeä esimerkki Applicative Recursion on pakata rullaa tietoja useista todisteista. Esimerkiksi validiteetti Rollup kuten StarkNet, Kaikki L2:ta koskevat tallennuspäivitykset sisältyvät myös L1:tä koskeviin siirtotietoihin tietojen saatavuuden varmistamiseksi. Samaa tallennuselementtiä varten ei kuitenkaan tarvitse lähettää useita päivityksiä, tietojen saatavuuden osalta vaaditaan ainoastaan todennettujen todisteiden perusteella todistettujen tapahtumien lopullinen arvo. Tämä optimointi suoritetaan jo*yhden*StarkNet-lohkon sisällä. Luomalla vahvistuksen lohkoa kohden, sovellusrekursio voi kuitenkin pakata tämän kaatumisdatan*usean*L2-lohkon läpi. Tämä voi johtaa merkittäviin kustannussäästöihin, mikä mahdollistaa lyhyemmät lohkovälit L2:ssa uhraamatta L1-päivitysten skaalautuvuutta.

Huomio: Sovellettava rekursio voidaan yhdistää aiemmin kuvattuun sovellusagnostiseen rekursioon. Nämä kaksi optimointia ovat riippumattomia.

#### Vähennetty Ketjun Todentajan Monimutkaisuus

STARK-todentajan monimutkaisuus riippuu siitä, millaisia lausuntoja se on suunniteltu todentamaan. Erityisesti Kairon lausuntojen osalta todentajan monimutkaisuus riippuu Kairon kielellä sallituista erityispiirteistä, ja, tarkemmin sanottuna tuetut sisäänrakennetut (jos käytämme CPU metaforia Kairo, sitten sisäänrakennetut ins ovat vastaavat mikropiirejä CPU: laskelmat suoritetaan niin usein, että ne vaativat oman optimoitu laskenta).

Kairon kieli kehittyy edelleen ja tarjoaa yhä enemmän hyödyllisiä sisäänrakennettuja. Toisaalta, Rekursiivinen todentaja vaatii vain pienen osajoukon käyttämistä näistä sisäänrakennetuista osista. Rekursiivinen SHARP voi näin ollen onnistuneesti tukea mitä tahansa Kairon lausuntoa tukemalla rekursiivisten todentajien koko kieltä. Erityisesti L1:n Solidaarisuuden todentajan on todennettava vain rekursiiviset todisteet. ja näin ollen voidaan rajoittaa vakaampi osajoukko Kairo kieli: L1 todentaja ei tarvitse pysyä uusimpien ja suurimpien sisäänrakennetut. Toisin sanoen jatkuvasti kehittyvien monimutkaisten lausuntojen todentaminen siirretään L2:een, jolloin L1-todentaja voi tarkistaa yksinkertaisemmat ja vakaammat lausunnot.

#### Alennettu Laske Jalanjälki

Ennen rekursiota, kyky koota useita lausumia yhteen todiste rajoitettiin suurin koko on lausunto, joka voitaisiin todistaa käytettävissä laskennallisia ilmentymiä (ja aika se voisi ottaa tuottaa tällaisia todisteita).

Rekursiolla ei ole enää tarvetta todistaa näin suuria lausuntoja. Tämän seurauksena pienempiä, halvempaa ja enemmän saatavilla tietokone ilmentymiä voidaan käyttää (vaikka niitä voi tarvita enemmän kuin suuria monoliittisia proversseja). Tämä mahdollistaa prover instanssien käyttöönoton fyysisissä ja virtuaalisissa ympäristöissä kuin aiemmin on mahdollista.

### Summary

Yleisen laskennan rekursiiviset todisteet palvelevat nyt useita tuotantojärjestelmiä, kuten StarkNetia Mainnet Ethereumissa.

Rekursion hyödyt toteutuvat vähitellen, koska se mahdollistaa edelleen uusia parannuksia, ja se pian tuottaa hyper-mittakaavassa, leikata kaasua, ja parantaa latenssi avaamalla mahdollisuudet parallelization.

Se tuo mukanaan merkittäviä kustannuksia ja viivästysetuja sekä uusia mahdollisuuksia, kuten L3 ja sovellusrekursio. Rekursiivisen todentajan edelleen optimointi on käynnissä ja vielä parempi suorituskyky ja kustannushyödyt odotetaan saatavan ajan mittaan.



**Gidi Kaempfer**, Core Engineering, StarkWare