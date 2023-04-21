### TL;DR

* StarkWare tarjoaa asiakkailleen valikoiman datan saatavuutta (DA) -tiloja heidän prioriteettinsa mukaan
* Tietojen saatavuuteen sovelletaan kolmea lähestymistapaa STARK-todisteisiin, kaikki ne ovat jo saatavilla tuotannossa:\
  —**Rollup**: ruutu julkaistaan suoraan lohkoketjussa\
  —**Validium**: tietojen saatavuutta käsittelevä komitea turvaa ruudun, vain tiiviste on varastoitu ketjussa\
  —**Purkaminen**: sovellusten avulla käyttäjät voivat valita DA-tilansa — Rollup tai Validium — jokaisen tapahtuman osalta
* Riippumatta siitä, mitä DA-menetelmää käytetään, kaikkien transaktioiden voimassaoloaika on taattu STARK:illa

### Johdanto

Marraskuusta 2022 lähtien[StarkEx](https://starkware.co/starkex/)on maksanut yli 750 miljardin dollarin kauppavolyymi ja yli 270m kauppoja Ethereumissa. NFT-tilassa, käynnistävät sovelluksia kuten ImmutableX ja Sorare, StarkEx on lyönyt yli 85 miljoonaa NFT:tä hintaan, joka on 1000x halvempi kuin suoraan Ethereum. STARK-pohjainen teknologia skaalautuu Ethereumilla. Esimerkiksi yhden viikon aikana StarkEx juoksi 1,6x tapahtumien määrä Ethereum (12m StarkEx vs. 7. m Ethereumin yhteydessä), mutta alle 0,1 % Ethereum blockspace. Ja se tekee kaiken tämän samalla antaa käyttäjille saman turvallisuustason kuin jos he asettuvat suoraan Ethereum.

### Miten StarkWare saavuttaa tämän?

Käyttäjät lähettävät tapahtumia Layer 2:ssa (joko StarkExissa tai StarkNetissä), jotka eritellään ja lähetetään STARK-proveriin. Tämä STARK-testaaja tuntee kirjanpidon tilan ennen ja jälkeen näitä tapahtumia on käsitelty. Näytteenottimessa on STARKin todistus, joka todistaa uuden tilan sen jälkeen, kun nämä tapahtumat on suoritettu. Uusi tila ja STARK todisteet lähetetään ketjulle STARK -todentajalle. Tämän todisteen todentaminen tapahtuu itsenäisesti Ethereum-sopimuksen avulla, jota ei voida muuttaa.

Tämä arkkitehtuuri tarjoaa parhaat molemmat maailmat: voimme olla alhaiset transaktiokustannukset, vaikka silti Ethereum keskellä neutraali välimiesmenettely. Ethereum kuin välimiehen ei ole vain nice-to-have; se tarjoaa kriittisen turvallisuuden loppukäyttäjälle. Käyttäjä voi nyt luottaa siihen, että heidän varansa ovat Ethereumin turvaamia, ja liiketoimet ovat muuttumattomia, kun ne on todennettu Ethereum. Käyttäjällä on myös täysi omavastuu varoistaan. Itsensä säilyttäminen on tärkeää, koska sillä varmistetaan, että käyttäjä voi käyttää varojaan kaikkina aikoina luottamatta mihinkään kolmanteen osapuoleen.

### Mihin tietojen saatavuus sopii kaikkeen tähän?

On tärkeää korostaa sekä sitä, mitä tämä todiste on tekemässä että mitä se*ei*tee. Todisteena on uuden valtion pätevyys, mutta se ei kerro sinulle mitä uusi valtio on. Sitä varten tarvitset tietoja. Jos meillä on vain todiste, niin lohkoketju tietää, että mitä jätettiin on voimassa, mutta se ei tiedä, mitä uusi tila (esim. kirjanpidon saldo) on! Näiden tietojen kuluttajiin kuuluu käyttäjiä, joilla on näiden todisteiden mukaisia liiketoimia. Tiedot olisi asetettava niiden saataville, jos ne haluavat nostaa varoja Ethereum ilman, että niiden tarvitsee luottaa Layer 2 -operaattoriin. Näin käyttäjille annetaan täysi omavastuu varoistaan.

Yksi analoginen tämä on teidän lukion opettaja pyytää teitä todistamaan, että x on x yhtä kuin x. Tämä on vähäpätöistä todistaa. Mitä on vaikeampi vastata: mikä on x todella tasa-arvoinen? Sitä varten tarvitset erillisen tiedon. Voi olla, että x on 5 tai muu arvo. Vastaavasti lohkoketjussa STARKin todisteet voidaan toimittaa STARKin todentajan älykkäälle todentamissopimukselle. Ja todentaja voi todistaa, että todiste on pätevä (että x=x). Mutta tarvitset erillisen syötteen kertoaksesi, mikä x (uusi pääkirjanpidon saldo) on.

Näiden tietojen saatavuuteen on olemassa kolme lähestymistapaa:

#### Rollup Tila

Rollup tila varmistaa, että tila kirjanpidon on tallennettu Ethereum yhdessä todisteiden kanssa. Rollup tilaa käyttää tällä hetkellä[dYdX](https://dydx.exchange/)tuotannossa, ja sitä käyttää myös[Public StarkNet](http://starknet.io/)L2 verkko. Edut tässä ovat selvät: yksi voi luoda tilan kirjanpidon vain vuorovaikutuksessa Ethereum blockchain. Tästä seuraa, että loppukäyttäjänä te voitte puhua luotettavasti asiaankuuluvan älykkään sopimuksen kanssa Ethereum-sopimuksesta, ja peruuttaa varat, vaikka Layer 2 järjestelmä sulkeutuu.

#### Validium

Alla Rollup Mode, suurin osa Ethereum kaasun kustannukset mennä Data Saatavuus, eikä todiste todentaminen. Tämä johtuu siitä, että on erittäin kaasuintensiivistä tallentaa tietoja lohkoketjuun. Validium-tilassa kirjanpidon tietoja ei lähetetä Ethereumiin. Pikemminkin se on tallennettu ketjun ulkopuoliseen vaiheeseen tietojen saatavuutta käsittelevän komitean avulla. Ethereum tallentaa hash tämän ledger tiedot. Tämä tietojen saatavuutta käsittelevä komitea koostuu päätösvaltaisesta riippumattomista jäsenistä, jotka valvovat oikeaa valtion päivittämistä ja pitävät jäljennöksen käsitellyistä tiedoista. Jokainen StarkEx instanssi voi luoda oman päätösvaltaisuutensa. Quorum jäsenet olemassa oleville sovelluksille käynnissä StarkExissa sisältävät yhteisöt kuten[Consensys](https://consensys.net/),[Alankomieli](https://nethermind.io/),[Iqlusion](https://iqlusion.io/)ja[Cephalopod](https://cephalopod.equipment/).

Hyödyt tässä ovat selvät. Ei ole tarvetta maksaa Ethereum kaasu maksuja tallentaa kirjanpidon tiedot ketjulla. Pikemminkin ainoa asia, joka tallennetaan Ethereum on yksi hash ledger tietoja. Jos haluat palauttaa varoja luottamattomasti Layer 2:sta keskustelemalla Ethereumin kanssa, Asiakas tarvitsee vain yhden tietojen saatavuutta käsittelevän komitean jäsenen digitaalisen allekirjoituksen. DAC jäsenet käyttävät salausta todistaa, että sinulla on omistusoikeus näistä varoista.

Toinen piilotettu etu Validium Data Saatavuus on luottamuksellisuus ihmisiltä, jotka lukevat lohkoketjua. Rollup-tilassa kunkin tilin saldo silloin, kun kukin todiste on toimitettu julkisesti, on yleisön tiedossa. Validiumin avulla tämä tieto on piilossa lohkoketjusta – vain tietojen saatavuutta käsittelevä komitea on tietoinen tästä, koska se pidetään ketjun ulkopuolella. Tämä luottamuksellisuuden taso mahdollistaa laajan valikoiman käyttötapauksia, joissa liiketoimia koskevien tietojen hämärtäminen on tärkeää.

#### Purkaminen

Volition on tietojen saatavuuden arkkitehtuuri, joka tarjoaa valinnan Validiumin ja Rollup Moodin välillä transaktiotasolla. Se tekee näin pitämällä yhden kirjanpidon ketjulla ja toisen kirjanpidon tietojen saatavuutta käsittelevän komitean kanssa. Käyttäjät voivat valita Validium ja Rollup -tilan jokaiselle yksittäiselle tapahtumalle.

Kuvittele, että ostat todella kalliin NFT kuten Bored Ape tai Cryptopunk, sovelluksessa, joka on käynnissä StarkExissa. Voit halutessasi käyttää Rollup Modea suojataksesi kyseisen NFT:n tiedot, koska haluat tietueen kyseisestä tietystä tapahtumasta, joka on tallennettu Ethereumiin. Voit kuitenkin ostaa todella halvan NFT:n (esim. viitta hahmosi lohkoketjuisessa pelissä), ja tässä tilanteessa voit mielellään säästää rahaa käyttämällä Validium.

Jos olet kiinnostunut STARKin oikolukujen saavuttamasta mittakaavasta, tulkaa sitten ja rakentakaa se meille.



Voit aina lähettää sähköpostia[info@starkware.co](mailto:info@starkware.co)ja ihminen pääsee sähköpostiisi.