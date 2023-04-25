### TL;DR

* Voimassaoloa koskevia rullia ei ole rajoitettu samalla tavalla kuin L1s. Tämä voi johtaa paljon korkeampaan TPS L2 rullina.
* StarkNet-suorituskykyä koskevassa etenemissuunnitelmassa käsitellään järjestelmän keskeistä elementtiä: sekvensseriä.
* Esitetään tässä etenemissuunnitelma suorituskyvyn parantamiseksi:\
  — Sequencer parallelization\
  — Uusi ruoste Kairon VM\
  — Sequencer reimplementation in ruost\
* Sananlaskut, jotka ovat taistelun testattu sellaisina kuin ne ovat, eivät ole pullonkaula, ja pystyvät käsittelemään paljon enemmän kuin nyt!

### Esittely

StarkNet lanseerasi Mainnetissa lähes vuosi sitten. Aloitimme Starknetin rakentamisen keskittymällä toiminnallisuuteen. Nyt siirrymme keskittymään suorituskyvyn parantamiseen useita vaiheita, jotka auttavat parantamaan StarkNet-kokemusta.

Tässä postitse, selitämme miksi on olemassa laaja valikoima optimointeja, jotka ovat sovellettavissa vain voimassaoloa rullina, ja aiomme jakaa suunnitelmamme toteuttaa nämä StarkNetia koskevat toimet. Osa näistä vaiheista on jo toteutettu StarkNet Alpha 0.10.2, joka julkaistiin Testnetissä 16. marraskuuta ja eilen Mainnetissa. Mutta ennen kuin keskustelemme ratkaisut, Katsotaanpa tarkistaa rajoitukset ja niiden syy.

### Lohkorajoitukset: voimassaoloajan jatkaminen verrattuna L1:een

Mahdollinen lähestymistapa lohkoketjujen skaalautuvuuden lisäämiseen ja TPS-järjestelmän lisäämiseen olisi lohkorajoitusten poistaminen (kaasua/kokoa) siten, että lohkoaika pidetään vakiona. Tämä edellyttäisi lisäponnistuksia lohkojen tuottajilta (validoijat L1:ssä), L2-lohkon sekvensserit ja vaativat näin ollen näiden osien tehokkaampaa täytäntöönpanoa. Tätä varten siirrymme nyt keskittyä StarkNet sekvensseri optimoinnit, jotka me kuvailemme yksityiskohtaisemmin seuraavissa osissa.

Tässä nousee esiin luonnollinen kysymys. Miksi sekvensseri optimointi rajoitettu voimassaoloa rollups, eli miksi emme voi toteuttaa samoja parannuksia L1 ja välttää monimutkaisia voimassaoloa rullia kokonaan? Seuraavassa osiossa väitetään, että näiden kahden välillä on perustavanlaatuinen ero, mahdollistaa laajan valikoiman optimointeja L2:ssa, joita ei voida soveltaa L1:een.

### Miksi L1 on rajattu?

Valitettavasti L1:n lohkorajoitusten poistaminen kärsii suuresta sudenkuopasta. Lisäämällä ketjun kasvuvauhtia me lisäämme myös täysistä solmukohdista peräisin olevia vaatimuksia, jotka yrittävät pysyä samassa tahdissa kuin viimeisin tila. Koska L1 koko solmut on suoritettava uudelleen kaikki historia, jos lohkon koon suuri lisäys (kaasulla mitattuna) aiheuttaa merkittäviä rasitteita, johtaa jälleen heikompiin koneisiin jättäen pois järjestelmästä ja jättäen mahdollisuuden ajaa täydet solmut vain tarpeeksi suuria. Tämän seurauksena käyttäjät eivät voi tarkistaa valtion itse ja osallistua verkkoon luotettavasti.

Tämä saa meidät ymmärtämään, että L1-luokan läpivientiä olisi rajoitettava todella hajautetun ja turvallisen järjestelmän ylläpitämiseksi.

### Miksi samat esteet eivät vaikuta voimassaoloajan uudelleenjärjestelyihin?

**Vasta kun otetaan huomioon koko solmun näkökulmasta näemme todellinen teho tarjosi validiteetti rullat.**L1:n koko solmun on suoritettava koko historia uudelleen, jotta nykyinen tila on oikein. StarkNet-solmujen tarvitsee vain tarkistaa STARK-todisteet, ja tämä varmennus vie eksponentiaalisesti pienemmän määrän laskennallisia resursseja. Erityisesti synkronointiin tyhjästä ei tarvitse liittyä toteutusta; solmupiste voi saada nykytilan dumpauksen toisiltaan ja varmistaa ainoastaan STARK-todistuksella, että tämä tila on voimassa. Tämä antaa meille mahdollisuuden lisätä verkon suorituskykyä ilman, että vaatimuksia lisätään koko solmun osalta.

Voimme siis päätellä, että L2 sekvensseri on altis koko spektrin optimointeja, jotka eivät ole mahdollisia, L1.

### Etenevä tulossuunnitelma

Seuraavassa osiossa keskustelemme siitä, mitkä niistä ovat tällä hetkellä suunnitteilla StarkNet-sekvensserille.

### Sekvensserin rinnakkaisuus

Ensimmäinen askel etenemissuunnitelmassamme oli ottaa käyttöön rinnakkaisuus liiketoimen toteutuksen kanssa. Tämä esiteltiin StarkNet alfa 0.10.2, joka julkaistiin eilen Mainnetissa. Sukelemme nyt siihen, mikä rinnakkainen on (tämä on puolitekninen osa, jatkaa etenemissuunnitelmassa, hypätä seuraavaan osaan).

Joten mitä ”liiketoimi rinnakkain” tarkoittaa? Lohkon suorittaminen rinnakkain on mahdotonta, koska eri tapahtumat voivat olla riippuvaisia. Tämä käy ilmi seuraavasta esimerkistä. Harkitse lohkoa, jossa on kolme tapahtumaa samalta käyttäjiltä:

* Tapahtuma A: USDC:n vaihtaminen ETH:ää varten
* Tapahtuma B: Maksa ETH NFT:stä
* Tapahtuma C: vaihtaa USDT BTC:lle

Tx A:n on tietenkin tapahduttava ennen Tx B:tä, mutta Tx C on täysin riippumaton molemmista ja voidaan suorittaa rinnakkain. Jos jokainen tapahtuma vaatii 1 sekunnin suoritetaan, lohkon tuotantoaikaa voidaan vähentää 3 sekunnista 2 sekuntiin ottamalla käyttöön rinnakkain.

Ongelman ydin on se, että emme tiedä liiketoimien riippuvuutta etukäteen. Käytännössä vain silloin, kun toteutamme liiketoimen B esimerkistämme, näemme, että se perustuu liiketoimen A tekemiin muutoksiin. Muodollisesti riippuvuus seuraa siitä, että tapahtuma B lukee muistisoluista, joihin tapahtuma A on kirjoittanut. Voimme ajatella, että liiketoimet muodostavat riippuvuuskaavion, jos on olemassa reuna tapahtumasta A tapahtumaan B iff A kirjoittaa tallennussolun, jonka B lukee, ja se on näin ollen toteutettava ennen B. Seuraavassa kuvassa esitetään esimerkki tällaisesta riippuvuuskaaviosta:

![](https://miro.medium.com/max/641/0*I-qGgxdJJmqmgZWM)

Edellä olevassa esimerkissä jokainen sarake voidaan suorittaa rinnakkain, ja tämä on optimaalinen järjestely (vaikka naiivisti olisimme toteuttaneet liiketoimia 1–9 peräkkäin).

Voidakseen voittaa, että riippuvuus kaavio ei ole tiedossa etukäteen, otamme käyttöön***optimistinen rinnakkaisuus***, Aptos Labsin kehittämässä hengessä[BLOCK-STM](https://malkhi.com/posts/2022/04/block-stm/)StarkNet-sekvensserille. Tässä ajattelutavassa pyrimme optimistisesti toteuttamaan transaktioita rinnakkain ja toteuttamaan ne uudelleen törmäyksen sattuessa. Voimme esimerkiksi toteuttaa liiketoimia 1–4 kuvasta 1 rinnakkain, vain huomataksemme, että Tx4 riippuu Tx1:stä. Siksi sen teloitus oli hyödytön (me juoksi se suhteessa samaan tilaan me juoksi Tx1 vastaan, kun taas meidän olisi pitänyt vastustaa Tx1:n soveltamisesta seuraavaa valtiota. Siinä tapauksessa teloitetaan Tx4 uudelleen.

Huomaa, että voimme lisätä monia optimointeja päälle optimistinen rinnakkaisuus. Esimerkiksi sen sijaan, että odottaisimme naiivisti jokaisen teloituksen päättymistä, voimme keskeyttää teloituksen sillä hetkellä, kun havaitsemme riippuvuuden, joka mitätöi sen.

Toinen esimerkki on optimoida valinta, mitkä tapahtumat uudelleensuorittaa. Oletetaan, että lohko, joka koostuu kaikista tapahtumista kuvasta 1, syötetään sekvensseriin, jossa on viisi suorittimen ytimiä. Ensinnäkin yritämme toteuttaa rinnakkaisia liiketoimia 1–5. Jos valmistumisjärjestys oli Tx2, Tx3, Tx4, Tx1, ja lopulta Tx5, sitten löydämme riippuvuus Tx1→Tx4 vasta sen jälkeen, kun Tx4 on jo toteutettu – mikä viittaa siihen, että se pitäisi toteuttaa uudelleen. Luonnollisesti, saatamme haluta teloittaa Tx5 uudelleen, koska se voi käyttäytyä eri tavalla uuden teloituksen Tx4. Sen sijaan, että kaikki tapahtumat toteutettaisiin uudelleen nyt mitätöityjen Tx4 jälkeen, voimme kulkea sen riippuvuuskaavion läpi, joka on muodostettu liiketoimista, joiden toteutus on jo päättynyt, ja suorittaa ainoastaan Tx4:stä riippuvaiset liiketoimet.

### Uusi Rust täytäntöönpano Kairo-VM

StarkNetissä tehdyt älykkäät sopimukset on kirjoitettu Kairossa ja ne toteutetaan Kairo-VM:n sisällä, mikä on[Kairon paperissa](https://eprint.iacr.org/2021/1063.pdf). Tällä hetkellä sekvensserissä käytetään Cairo-VM:n[python-toteutusta](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/cairo/lang/vm). Optimoidaksemme VM toteutuksen suorituskyvyn, olemme käynnistäneet pyrkimyksiä kirjoittaa VM ruost. Kiitos suuren työn[Lampaanlasit](https://lambdaclass.com/), jotka ovat nyt korvaamaton tiimi StarkNet-ekosysteemissä, tämä työ on pian toteutumassa.

VM:n ruosteen toteutus,[cairo-rs](https://github.com/lambdaclass/cairo-rs)voi nyt toteuttaa Kairon alkuperäistä koodia. Seuraava askel on käsitellä älykkäiden sopimusten toteuttamista ja integraatioita pythonic sekvensserin kanssa. Kun sekvensseri on integroitu cairo-roosiin, sen suorituskyvyn odotetaan paranevan merkittävästi.

### Sequencer uudelleentoteutus ruoskissa

Meidän siirtyminen python ruoste parantaa suorituskykyä ei rajoitu Kairo VM. Edellä mainittujen parannusten ohella aiomme kirjoittaa sekvensserin tyhjästä ruostessa. Rustin sisäisten etujen lisäksi tämä tarjoaa mahdollisuuden muillekin optimoinnille sekvensserille. Pariskunnan listalta voimme nauttia cairo-rojen eduista ilman python-ruost-kommunikointia, ja voimme täysin uudistaa miten valtio on tallennettu ja päästy (joka tänään perustuu[Patricia-Trie rakenne](https://docs.starknet.io/documentation/develop/State/starknet-state/#state_commitment)).

### Entä puhujat?

Koko tämän postitse, emme maininnut ehkä tunnetuin osa voimassaoloa rullat - prover. Voisi kuvitella, että on luultavasti kaikkein hienostunut osa arkkitehtuuria, sen pitäisi olla pullonkaula, ja näin ollen painopiste optimointi. Mielenkiintoista on se, että StarkNetin pullonkaulat ovat nyt niin sanottuja ”standardisia” komponentteja. Tänään, erityisesti[rekursiivisia vedoksia](https://medium.com/starkware/recursive-starks-78f8dd401025), voimme sovittaa paljon enemmän tapahtumia kuin nykyinen liikenne Testnet / Mainnet todiste. Itse asiassa nykyään StarkNet-lohkot on todistettu StarkExin liiketoimien rinnalla, jossa jälkimmäiset voivat joskus saada useita satoja tuhansia NFT-rahapaikkoja.

### Summary

Rinnakkaistaminen, ruoste ja paljon muuta – rohkeasti tulevissa StarkNet-versioissa parannetusta TPS-järjestelmästä.