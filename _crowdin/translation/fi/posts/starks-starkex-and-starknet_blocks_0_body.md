### TL;DR

* STARKit mahdollistavat lohkoketjujen skaalauksen todistamalla tehokkaasti laskentojen eheyden
* StarkEx on sovelluskohtainen skaalausmoottori
* StarkNet on luvaton, älykäs sopimus Layer 2 verkko

### **STARKit**

STARKit (Skaalattava, Läpinäkyvä tiedon argument of Knowledge) ovat todistusaineisto, joka mahdollistaa laskennan osoittamisen ja todentamisen. Sen avulla voidaan käsitellä iso laskenta, tuottaa todiste laskenta oikeellisuutta, ja sitten todentamalla todiste hyvin harvoissa vaiheissa.

STARKeilla voi olla keskeinen rooli lohkoketjun skaalautuvuudessa, koska suuret laskelmat voidaan tehdä ketjun ulkopuolella, jos se on halvempaa, jättäen vain tarkastus, joka edellyttää murto-osa laskennasta, on tehtävä ketjulla. Toisin sanoen, suorittamalla hyvin harvoja vaiheita ketjulla, todentaja vahvistaa eheyden paljon suurempi laskenta, joka tehtiin ketjun ulkopuolella.

STARKsin avulla kerros 2 -ratkaisut erittävät yhteen ja laskevat tuhansia liiketoimia ja varmistavat niiden voimassaolon ketjulla yhdellä STARK-todistuksella. Ketjussa tapahtuvan prosessin kustannukset on jaettu**kaikkien**erän tapahtumien kesken. Tämä johtaa Ethereum turvallisuus ja alhaiset kaasukustannukset per liiketoimi.

Alhaiset laskennalliset kustannukset ohjaavat uuden luokan sovelluksia, jotka eivät aiemmin olleet toteutettavissa ketjulla. Nämä ominaisuudet tekevät STARKista erinomaisen rakennuspalikan käyttäjäkokemuksen parantamiseen ja kaasukustannusten vähentämiseen, kaikki samalla säilyttää turvallisuuden Ethereum selvityskerroksen.

StarkWare tarjoaa kaksi ratkaisua asteikko Ethereum kanssa STARKs: StarkEx ja StarkNet.

### **StarkEx**

[StarkEx](https://starkware.co/starkex/)on kehys, jolla luodaan sallittuja sovelluskohtaisia skaalausratkaisuja. StarkEx on hyödyllinen[sovellusvirtaa](https://docs.starkware.co/starkex-v4/starkex-deep-dive/regular-flows)työkalupakki, jota projektit voivat käyttää saavuttaakseen halvan ketjun ulkopuolisen laskennan. Suorituksen oikeellisuuden osoittava STARK-todiste on tuotettu ketjun ulkopuolella. Tällainen todiste voi sisältää enintään 12 000–500 000 liiketoimea (riippuen transaktiotyypistä). Tämän jälkeen todiste lähetetään STARK Verifier -palvelimelle hyväksyttäväksi ketjussa. Tämä tarkoittaa yhtä todentamista kaikille liiketoimille – koska kaasunhankintakustannukset ovat uskomattoman alhaiset liiketoimikohtaisesti.

Muutamia esimerkkejä StarkExin sovelluksista ovat dYdX (perpetuals trading), Immutable ja Sorare (NFTs – kaivostoiminta ja kauppa), DeversiFi (spot-kauppa), ja Celer (DeFi-yhdistäminen).

StarkWare lisää jatkuvasti sovellusvirtoja StarkExiin markkinoiden ja asiakkaiden tarpeiden mukaisesti.

### **StarkNet**

*[StarkNet](https://starkware.co/starknet/)on luvaton kerroksen 2 verkko, jossa käyttäjä tai kehittäjä voi ottaa käyttöön Kairon kielellä kehitettyjä älykkäitä sopimuksia.*

Verrattuna Ethereum älykkään sopimuksen kokemukseen, sisällä StarkNet ekosysteemin, sopimuksesi voi olla vuorovaikutuksessa minkä tahansa muun StarkNetin kanssa ja mahdollistaa runsaasti kompostoitavat protokollat. StarkNet-sopimukset voivat myös olla vuorovaikutuksessa Ethereum sopimusten kanssa asynkronisen viestin ohittamisen kautta.

Toisin kuin StarkEx, jossa hakemukset ovat vastuussa tapahtumien lähettämisestä, StarkNet-sekvensserit erätapahtumista ja lähetä ne käsiteltäviksi ja todistettaviksi. (StarkNetin sekvensserit toimivat tällä hetkellä StarkWarella ja tulevat suunnitelmat hajautettavaksi.) Tämä tarkoittaa sitä, että kun sovellukset ottavat käyttöön Kairon sopimukset, niiden ei tarvitse huolehtia lisäinfrastruktuurin käytöstä. StarkNet tukee Rollupin tietojen saatavuustilaa, mikä tarkoittaa, että rullan tila on kirjoitettu Ethereum yhdessä STARK todisteiden kanssa.

Valtava kehittäjäyhteisö on vahvasti mukana StarkNet-ekosysteemissä, rakentamassa sovelluksia, työkaluja ja infrastruktuuria. Kymmenet sovellukset ovat jo suorassa testnet - DeFi, pelit, äänestäminen, tekoäly ja paljon muuta. Kehittäjien työkalut, kuten lohkokartoitus, paikallinen testausympäristö ja -kehys, StarkNet-yhteisö rakentaa SDK: n useita kieliä ja enemmän. Lisäksi aktiivisia keskusteluja käydään[Shamansin foorumissa](https://community.starknet.io/)ja niissä esitetään parannusehdotuksia, mahdollisia ominaisuuksia ja parhaita käytäntöjä.

### **Summa Se Ylös**

Sekä[StarkEx](https://youtu.be/P-qoPVoneQA)että StarkNet ovat STARK-pohjaisia skaalausratkaisuja. Molemmat takaavat skaalautuvuuden, alhaiset kaasukustannukset ja varmuuden, mutta niillä on erilaiset toimintavaatimukset ja yhteentoimivuusmallit. StarkEx saattaa olla oikea ratkaisu sovellukseen, joka on pitkälti itsenäinen ja sopii StarkExin tarjoamiin sovelluksiin. StarkNet saattaa sopia paremmin protokollaan, joka vaatii synkronista vuorovaikutusta muiden protokollien kanssa tai jolla on tarpeita, jotka ylittävät StarkExin tarjoamat mahdollisuudet.

STARKit ovat mullistaneet sen, miten sovellukset voidaan rakentaa Eteriumille. StarkEx ja StarkNet jatkavat sellaisten sovellusten sallimista, jotka olivat aiemmin kannattamattomia ja työntävät rajoja sille, mikä on mahdollista lohkoketjulla.

Tämän artikkelin on kirjoittanut yhteistyössä[Tim Gestson](https://twitter.com/IcemanTim)ja[StarkWare](https://starkware.co/)-tiimi