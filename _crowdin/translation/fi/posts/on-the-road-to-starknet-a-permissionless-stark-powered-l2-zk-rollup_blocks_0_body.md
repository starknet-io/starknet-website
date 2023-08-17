#### **TL;DR**

Rakennamme StarkNettia neljässä vaiheessa:

* Vaihe 0 – Säätiöt (Valmis*)
* Vaihe I – Planeetat: Yhden Sovelluksen Rollups
* Vaihe Ii – Konstellaatiot: Usean Sovelluksen Rullat
* Vaihe Iii – Maailmanlaajuinen: Hajautettu Rollup

Odotamme, että vaihe I on otettu käyttöön muutamassa lyhyessä kuukaudessa, ja olla hyvin matkalla Steps II & III loppuun mennessä 2021.

### **Johdanto**

StarkWare rakentaa StarkNet, hajautettu, luvaton ja sensuurikestävä, STARK-powered L2 ZK-Rollup, joka tukee yleislaskentaa Ethereumin yli. Se perustuu Turing-täydellinen[Kairo kieli](https://www.cairo-lang.org/).

Kehittäjät Käyttäjät ja StarkNet-solmut voivat tehdä kaiken mitä luvattomalta L2 Rollupilta odotetaan: Kehittäjät voivat rakentaa sovelluksia, jotka toteuttavat omaa liiketoimintalogiikkaansa ja ottaa ne käyttöön StarkNetissä. Käyttäjät voivat lähettää tapahtumia StarkNet suoritettavaksi, aivan kuten he ovat vuorovaikutuksessa Ethereum tänään. StarkNet-solmut ja osallistujat ovat kryptotaloudellisesti kannustettuja, jotta verkko toimisi tehokkaasti ja oikeudenmukaisesti.

Kaikki StarkNet-tapahtumat eritellään määräajoin, ja niiden voimassaolo todistetaan STARK-todistuksella, joka tarkistetaan Ethere-järjestelmän avulla. Koska STARK-näyttöjen todentamiseen tarvittava laskenta on eksponentiaalisesti pieni, StarkNet mittakaavaa Ethereum suuruusluokan mukaan mitattuna.

Koska kaikki StarkNet-osavaltion siirtymät ovat STARK-todistettuja, vain voimassa olevat siirtymät hyväksytään Ethereum-osaan. Kaikki tiedot, jotka tarvitaan koko StarkNet-tilan jälleenrakentamiseen, julkaistaan ketjulla. Kuka tahansa voi ajaa omaa StarkNet-solmuaan. Nämä ominaisuudet tekevät StarkNetista turvallisen ja luvattoman kuin Ethereum.

Olemme olleet siinä kolme vuotta, ja ovat jo saavuttaneet joitakin merkittäviä virstanpylväitä muuntamisessa “Moon Math” tuotantokelpoiseksi ja tehokkaaksi ohjelmistoksi käynnissä Ethereum. Tapa, jolla StarkWare tekee asioita on ratkaista vaikeita ongelmia ensin, rakentaa ydinteknologian ja sitten vapauttaa se tuotantoon pala muoti. Jatkamme rakentamista tällä tavoin, kun saamme StarkNet-järjestelmän valmiiksi.

![](/assets/ontheroad_02.png)

**Vaihe 0 – Perustukset**

StarkWare on saanut valmiiksi joitakin tärkeitä perustuksia StarkNetille.

#### **Cairo**

[Kairo](https://twitter.com/StarkWareLtd/status/1300353049836376066?s=20)on meidän Turing-Complete korkean tason kieli & puitteet tuottaa STARK vedoksia yleiseen laskentaan. Käsin muotoilevien monimutkaisten ”piirejä” tai AIR-sovelluskehittäjä voi käyttää Kairoa määrittelemään mitä tahansa liiketoimintalogiikkaa, onko se todistettu ketjun ulkopuoliseksi ja todennettu ketjulla. Kairo on[tuotannossa Mainnetissa](https://twitter.com/StarkWareLtd/status/1320695603492507648?s=20), ja on myös[saatavilla kehittäjille](http://cairo-lang.org/).

Muutaman viikon kuluttua lanseeraamme julkisella Ethereum testnet joka on Alpha versio Kairossa yleisestä Proof Service (GPS). *Näin kehittäjät voivat rakentaa omia sovelluksiaan Kairolla toteuttaen mitä tahansa liiketoimintalogiikkaa he haluavat. He lähettävät Kairon koodinsa todistettavaan GPS:ään ja varmistivat sen jälkeen ketjulla.*

GPS:n avulla voidaan todistaa täysin erillisten ja riippumattomien sovellusten suorituksen eheys, siten annetaan kyseisille sovelluksille mahdollisuus kuitata niiden kesken kaasun todentamisesta aiheutuvat kustannukset.

Kairo ja GPS ovat StarkNet-pohjaisia - päätöksemme ulkoistaa sekä kehittäjille antaa heille varhaisen altistumisen tälle tekniikalle, paitsi jotta he voivat alkaa rakentaa sen päälle, mutta myös niin ne voivat vaikuttaa StarkNet'in evoluutioon.

Jatkamme Kairon kehittämistä, joka perustuu kehittäjäyhteisön tarpeisiin ja palautteeseen. Parannamme tätä kieltä uusilla ominaisuuksilla, syntaksilla ja sisäänrakennetuilla ominaisuuksilla, jotka parantavat sen käytettävyyttä, ja jatkamme Kairon työkalujen kehittämistä ja parantamista: kääntäjiä, tracer/debuggeria ja integrointeja yhteisille IDE:ille.

StarkNet on Kairo käynnissä huppu.

#### **STARK Software Stack**

StarkWare on kehittänyt tehokkaimman todistejärjestelmän ekosysteemiin, ja se on ollut[elää Mainnetissa](https://medium.com/starkware/starks-over-mainnet-b83e63db04c0)kuukausia. StarkWare on myös kehittänyt[ethSTARK](https://twitter.com/StarkWareLtd/status/1264911004099543040?s=20), avoimen lähdekoodin ohjaimen, joka on 20X nopeampi kuin mikään muu ilmaisin se tarjoaa sekä[nollatuntemusta että postkvanttiturvallisia allekirjoituksia](https://twitter.com/StarkWareLabs/status/1331930111227080709).

Skaalauksemme*mittauksemme*– ei ekstrapolaatioita eikä lupauksia – sisältävät 300K-tapahtumien käsittelyn yhdellä todistuksella Mainnetissa, saavuttaa[maailmanennätyksen Rollupin teholla: 3K tps](https://twitter.com/StarkWareLtd/status/1287770381525422082?s=20). Prosessissa olemme saavuttaneet maailman ennätys Rollup kaasun tehokkuus: 315 kaasu/tx, tilaukset suuruus halvempaa kuin liiketoimet Ethereum L1.

Tämä tekniikka tulee olemaan kulmakivi hajautettu Proving Layer StarkNet, ja näin ollen vapautamme ylimääräisiä ja parannettuja provers osana StarkNetin kehitystä (enemmän siitä, että tulevassa blogikirjoituksessa).

#### **StarkEx**

StarkEx on L2-skaalautuvuusmoottori. Se on palvellut[DeversiFi](https://twitter.com/deversifi)asiakkaita Mainnetissa kesäkuusta 2020 lähtien. Se virtaa sekä[dYdX](https://twitter.com/dydxprotocol)että[ImmutableX](https://twitter.com/Immutable)muutaman lyhyen viikon kuluttua. StarkEx pystyy käsittelemään monimutkaista kaupankäynnin logiikkaa (spot-kauppa, johdannaiset, NFT) sekä maksuja.

StarkExin kehittäminen oli meidän tapa dogmoida työkaluketjuamme ja testata sitä todellisilta tarpeilta. Ei ole mitään kuin vaatimukset todellisten sovellusten ja elävien käyttäjien auttaa työkaluja kypsä ja kehittyä. Se auttaa meitä myös ymmärtämään, mitä elementtejä on käsiteltävä, jotta ekosysteemiä voidaan palvella paremmin, esimerkiksi integroitumalla lompakkoihin ja estämällä tutkimusmatkailijoita.

StarkEx on elävä esimerkki kyvystä skaalata sovelluksia STARK-pohjaisen ZK-Rollupin avulla, ja on ensimmäinen hakemus tuotannossa Mainnet kirjoitettu Kairossa. Näin ollen se on myös yksi StarkNetissa käynnissä olevista sovelluksista.

![](/assets/ontheroad_03.png)

### **Edessä Oleva Tie**

#### **Vaihe I – Planeetat: Yhden Sovelluksen Rollups**

Tämän vaiheen avulla kehittäjät voivat rakentaa ja ottaa käyttöön omia skaalautuvia sovelluksiaan StarkNetissa.

Tässä vaiheessa jokainen StarkNet instanssi voi suorittaa yhden hakemuksen. Eri tapaukset voivat toimia eri sovelluksissa.\
StarkNet-järjestelmä sisältää seuraavat osat:

* Mekanismit, joita tarvitaan STARK-vedoksen luomiseksi mielivaltaista Kairon logiikkaa varten, ja sen jälkeen lähetä ja tarkastaa ne Ethereum-ympäristössä.
* Vuorovaikutus L1 Ethereum: talletukset ja nostot L1 rahakkeista, julkaisu, StarkNet-käyttäjien suojaaminen pahansuopilta StarkNet-operaattoreilta jne.
* L2-käyttäjän saldojen ja sovelluksen tallennustilan ja muistin hallinta.

Kehittäjät voivat keskittyä ainoastaan sovellustensa liiketoimintalogiikan kehittämiseen, ja sitten siirtyä tuotantoon: ottaa käyttöön ja ajaa se mittakaavassa StarkNet.

Skaalautuvan ZK-Rollupin avulla voimme rakentaa yleisen laskennan avulla seuraavat yhdistelmät:

* Kairo, joka on yleiskäyttöinen kääntö- täydellinen ohjelmointikieli
* Vahva STARK pino (prover ja verifier), joka mahdollistaa valtavien laskelmien niputtamisen yhdeksi todistukseksi

#### **Vaihe Ii – Konstellaatiot: Usean Sovelluksen Rullat**

Seuraava vaihe tukee useita sovelluksia, jotka toimivat samalla StarkNet-esiintymällä ja pääsevät samaan maailmanlaajuiseen L2-tilaan. Tämä mahdollistaa eri sovellusten yhteentoimivuuden sekä kaasunkustannusten alenemisen, koska mittakaavaedut ovat parantuneet.

Kairo, voimakas STARK pino, ja GPS vahvistaa StarkNetin kilpailuetua tukemalla monisovellusta Rollup.

Tässä vaiheessa StarkNet tulee olemaan täysin toimiva kehys*useita*sovelluksia varten minkä tahansa mielivaltaisen liiketoimintalogiikan päälle Ethereum, kunkin yksittäisen toimijan ylläpitämän ilmentymän yhteydessä.

Toiminnanharjoittaja voi nyt spin StarkNet-solmun kanssa, ja sovelluskehittäjät voivat ottaa sen käyttöön sopimuksensa. Käyttäjien näkökulmasta StarkNet näyttää nyt ja tuntuu Ethereum, jossa on suurempi mittakaava.

#### **Vaihe Iii – Maailmanlaajuinen: Hajautettu Rollup**

Viimeinen askel Starknetin kehityksessä on sen toiminnan hajauttaminen.

Kiehtovia t&k-kysymyksiä, joita käsittelemme nyt tähän vaiheeseen, ovat i) ZK-Rollupin käyttö konsensukseen johtavien mekanismien parantamiseksi, ja ii) suunnittelemalla salausmekanismeja hajautettujen StarkNet-maksajien ja -toimijoiden kannustamiseksi (liiketoimien sekvenssit, proverit jne. toimia tehokkaasti, oikeudenmukaisesti ja turvallisesti.

### **Päätelmät**

StarkWare rakentaa StarkNetia, hajautettua STARK-käyttöistä L2 ZK-Rollup Ethereumin yli, joka tukee Kairon kieleen perustuvaa yleislaskentaa.

StarkNet mahdollistaa sovellusten mittakaavan vaarantamatta turvallisuutta, käyttäjät maksavat kohtuulliset maksut, ja koko ekosysteemi kasvaa merkittävästi ja täyttää lupauksensa.

Kutsumme mielellämme kehittäjäyhteisön[liittymään meihin](https://twitter.com/StarkWareLtd)tällä matkalla.

**Päivitys (marraskuu 2021):**StarkNet Alpha elää Ethereum Mainnetissa