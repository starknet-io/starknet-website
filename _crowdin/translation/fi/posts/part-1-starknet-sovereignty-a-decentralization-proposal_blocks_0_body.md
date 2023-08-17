### TL;DR

* StarkNetin hajauttamiseen liittyy syntyperäinen merkki ja uusi säätiö.
* StarkNet-tunnusta käytetään hallinnossa ja verkoston maksu- ja panostamisomaisuutena.
* Kymmenen miljardia rahaketta on lyöty ja niiden määrärahat ovat alkaneet.
* Nyt perustettavalla StarkNet-säätiöllä on tehtävä ylläpitää StarkNet-järjestelmää yleisen edun nimissä.

StarkNet on permissionless decentralized Layer 2 (L2) voimassaoloaika, joka on rakennettu jotta Ethereum voi skaalata kautta salausprotokollia kutsutaan STARKs, vaarantamatta Ethereumin hajauttamisen, avoimuuden, osallisuuden ja turvallisuuden perusperiaatteita.

StarkNetin Alpha lanseerattiin Mainnetissa marraskuussa 2021. Alle vuoden kuluttua ekosysteemi on luomassa kymmeniä tiimejä, jotka työskentelevät sen parissa. Nyt on aika edistää verkon hajauttamista, joten se saa aikaan elävyyden, Eteriumin sensuuri vastustuskyky, läpinäkyvyys ja kattavuus vaativat L2:ta.

Hajauttamisella tarkoitetaan verkon toimintaa ja evoluutio ei luota mihinkään yksittäiseen kokonaisuuteen, mukaan lukien StarkWare. On luvaton todiste johtajan vaalimekanismista ja maksuista, jotka maksetaan ketjulla ja joissa käytetään sekä alkuperäisiä maksuvälineitä. mahdollistaa verkon toimimaan luotettavasti kuin L2 Ethereum jopa jos StarkWare lakkaa olemasta. StarkNet-järjestelmän jatkuvaa ylläpitoa koskevat päätökset siirtyvät StarkWeesta yhteisöön. StarkNet Token ja säätiö ovat tämän työn keskeisiä osatekijöitä.

Kolmesta samaan aikaan julkaistusta postista ensimmäinen esittää StarkNetin matkan ja esittelee StarkNet Tokenin ja StarkNet-säätiön. Seuraava[viesti](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)käsittelee StarkNet-ohjausmallia ja kolmas[](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6)keskittyy StarkNet-tunnuksen malliin.

*Kiitämme seuraavia StarkNet-tukijoita (aakkosjärjestyksessä) heidän kommenteistaan näiden virkojen luonnoksesta: Guily_Gioza (Topologia), Itamar Lesuisse (Argentiina), Jonas Nelle (Pontis), Martin Triay (OpenZeppelin), Polynya, Sylve Chevet (Briq) ja Tomasz Staněczak (Alankomaat).*

### Tarina tähän mennessä

[StarkNet](https://starknet.io/)on rakennettu kryptografiasta ja avoimesta ekosysteemistä. Salaa****on**[STARKit](https://eprint.iacr.org/2018/046.pdf)**. Nämä ovat protokollat perustuvat matematiikka, että mittakaavassa Ethereum suuruusluokan. Ne eivät vaadi luotettavaa asennusta, ne ovat postkvanttiturvallisia, ja niitä voidaan käyttää ytimekkäästi missä tahansa mittakaavassa. Ekosysteemi koostuu keskeisistä kehittäjistä, jotka ovat jo vuosia halunneet rakentaa infrastruktuuria ja työkaluja lohkoketjuteknologian mittaamiseksi, sekä uusia ja luovia sovelluksen verkkotunnuksia, jotka tulevat mahdollisiksi, kun laskennallisen teho Ethereum on laajennettu.

StarkNet tarjoaa kaikille kehittäjille ja käyttäjille pääsyn STARKsin mittakaavaan ja tietoturvaan, tarkoituksena skaalaus Ethereum säilyttäen Ethereumin ydinarvoja. STARKit keksivät yhdessä StarkWaren perustajat, jotka ensin käyttivät niitä[StarkExin](https://starkware.co/starkex/)skaalauksen rakentamiseen asiakkaille. StarkWare ja muut kehittäjätiimit (yhdessä “Core Contributors”) rakensivat[StarkNet](https://starkware.co/starknet/), julkinen, hajautettu ja luvaton infrastruktuuri sen varmistamiseksi, että nämä skaalautuvat teknologiat ovat jatkuvasti kaikkien ulottuvilla.

StarkNet Alphan lanseeraus lähes vuosi sitten sai aikaan suuremman ekosysteemin, joka on sitoutunut rakentamaan ja vaalimaan StarkNetia. Maailmassa on lukuisia kehittäjien tiimejä, jotka rakentavat ydininfrastruktuuriaan sekä uusia sovelluksia.

### **Tie hajauttamiseen**

STARK-tekniikka on kypsä ja turvallinen, mutta StarkNet ei ole saavuttanut yleistä hyvää, kuten Ethereum tai Internet. Jotta StarkNet voisi saavuttaa tämän tavoitteen, sen hallinnon, toiminnan ja kehityksen on jatkettava hajauttamista. Tätä helpotetaan kahdella tavalla:**StarkNet-säätiö**ja**StarkNet Token**.

#### Perustus

Voittoa tavoittelemattomana Säätiön tehtävänä on ylläpitää StarkNet-palvelua julkisena hyödykkeenä tai palveluna, joka on kaikkien yhteiskunnan jäsenten käytettävissä. StarkNet on luvaton infrastruktuuri, jonka pitäisi olla kaikkien saatavilla. Se on säilytettävä hyvin, jotta se olisi turvallinen ja tehokas julkisen käytön kannalta. Se ei myöskään saa syrjiä käyttäjiä.

Säätiö rahoitetaan kertaluonteisella StarkNet Tokensin avustuksella. Se kannustaa kehittämään alhaalta ylöspäin suuntautuvia mekanismeja, joiden avulla yhteisö voi tehdä päätöksiä keskeisistä teknologisista kysymyksistä, kuten pöytäkirjojen päivityksistä, riitojen ratkaisemisesta ja julkisten hyödykkeiden rahoituksesta.

#### Pääsymerkki

StarkNet Tokenia tarvitaan ekosysteemin ylläpitämiseen, sen ylläpitämiseen ja turvaamiseen, sen arvoista ja strategisista tavoitteista päättämiseen sekä sen kehityksen ohjaamiseen. Tätä tunnusta tarvitaan i) hallintotavassa, ii) StarkNetissa suoritettavissa maksuissa ja iii) osallistumisessa StarkNetin konsensusmekanismiin.

Olemme lyöneet ensimmäiset kymmenen miljardia rahakkeita, jotka on varattu StarkNet-ekosysteemin ydinvaikuttajille, mukaan lukien StarkWare- ja StarkWare-sijoittajat, StarkNet-ohjelmistojen kehittäjäkumppaneille ja säätiölle. Pian (tavoite: syyskuu 2022) tunnus menee Ethereum kuin ERC-20 merkki, ja sitä pyydetään käytettäväksi hallinnassa ja äänestämään verkon päivitykset. Myöhemmin StarkNet-maksut maksetaan vain tässä tarkoituksessa ja samalla varmistetaan hyvä käyttäjäkokemus niille käyttäjille, jotka ovat kiinnostuneita maksujen maksamisesta ETH:ssä. Myöhemmin aloitetaan vielä StarkNet Tokensin automaattinen lyönti (toisin sanoen kiertävien rahakkeiden määrä on yli kymmenen miljardia).

StarkNet Token -mallissa painotetaan kompensoivia kehittäjiä työstään. Osa uudesta kaivostoiminnasta ja liiketoimista – Starknetin käytöstä arvioidut maksut – myönnetään perusinfrastruktuurin kehittäjille ja älykkäille sopimuskehittäjille siitä työstä, jota he ovat tehneet protokollan suunnittelemiseksi ja käynnistämiseksi, sen lisäksi, että StarkNet-operaattoreille on maksettu korvaus työstä, jota he ovat tehneet sen käyttämiseksi.

Uuden ja omistautuneen StarkNet Tokenin täysi perustelu selitetään[toisessa postitse](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), ja StarkNet Tokenin suunnitteluperiaatteita ja alkuperäistä kohdentamista käsitellään[kolmannessa virassa](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6).