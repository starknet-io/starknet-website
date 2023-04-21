### TL;DR

* **Kairo 1.0 on avoin lähdekoodi! Tämä on vasta ensimmäinen askel kohti avoimen hankinnan StarkNet pino.**
* Esitämme nyt[ensimmäisen katsauksen](https://github.com/starkware-libs/cairo)Kairo 1.0 -kääntäjän. Voit nyt aloittaa kokeilemisen Kairo 1.0:n peruskoodilla
* Kairo 1.0 sen ytimessä on hyvin samanlainen kuin ruoste
* Harkitse sitä ensimmäinen maku, ei julkaisu. Parannuksia on vielä jäljellä. Kustantajan ensimmäinen versio on suunniteltu ensi vuoden ensimmäisen neljänneksen alkua varten.
* Kairo 1.0 ei ole vielä tuettu StarkNetissa. Sitä tuetaan StarkNetissä ensi vuoden ensimmäisellä neljänneksellä.

### Esittely

Vuonna 2020 julkaisimme[Kairo](https://eprint.iacr.org/2021/1063.pdf), Turing-täydellinen ohjelmointikieli tukee todennettavissa laskenta. Kairo alkoi kokoonpanon kieli ja vähitellen tuli ilmeikkäämpi. Kaksi kuukautta sitten ilmoitimme[Kairo 1.0](https://medium.com/starkware/cairo-1-0-aa96eefb19a0), jossa käsitellään joitakin merkittäviä kysymyksiä nykyisessä tilanteessa:

* Vaikka Kairossa syntaksilla on tapahtunut merkittävää parannusta sen alusta lähtien, kehittäjän kokemus voi aina parantua. Kairo 1.0 on rust-inspiroitu täysin kirjoitettu kieli, mikä tekee kirjoittamisesta saman logiikan paljon helpompaa ja vähemmän virhealttiita.
* Olemassa oleva kääntäjä on kehitetty samassa repossa kuin itse StarkNet ja vaikeuttaa kielten muutosten jäljittämistä. Kairo 1.0 kääntäjä on kirjoitettu maasta ylös, mikä mahdollistaa nopeamman ominaisuuskehityksen ja yhteisöllinen osallistuminen.
* Jokainen laskenta on nyt todistettavissa. Tällä hetkellä Kairo ohjelma voi epäonnistua tietyllä syötteellä (esim. saavuttamalla \`assert 1=2\` -opetuksen jossakin laskentahaarassa), jolloin laskenta ei ole todistettavissa. Kairo 1.0, ohjelmat ovat todistettavissa jokaisessa mahdollisessa haarassa. Tämä on erityisen tärkeää DOS-suojauksen ja sensuuriresistenssin kannalta StarkNetissa.

Tänään olemme ensimmäinen virstanpylväs edellä mainittujen tavoitteiden saavuttamisessa, kun siirrämme kehityksen julkisen repo, ja**avoimen lähdekoodin Kairo 1. !**Kehittäjät voivat nyt ensimmäistä kertaa koota ja toteuttaa yksinkertaisia Kairo 1.0 -ohjelmia. Näin kehittäjät voivat aloittaa kokeilunsa Kairo 1:llä. ja vähitellen tottuvat uusiin ominaisuuksiin, vaikka ne eivät tässä vaiheessa voi toteuttaa sitä StarkNetissa vielä.

### Nykyiset ominaisuudet

Tällä hetkellä voit koota ja toteuttaa perus natiivi Kairo ohjelmia. Vaikka monet syntaksi / kieli parannuksia ovat vielä käynnissä, Tämä mahdollistaa tottua Kairo 1.0 ja nauttia päivityksiä tultuaan.

**Huomaa, että StarkNet-sopimusten kirjoittaminen ei ole vieläkään tuettu.**StarkNet-syntaksi (tallennusmuuttujat / kutsuvat sopimukset / tapahtumat ja muut järjestelmäpuhelut) lisätään tulevina viikkoina.

### Esimerkkejä koodista

Kuvitella eroja vanhan syntaksin ja Kairo 1:n välillä. , Olemme päättäneet näyttää muutamia erilaisia toteutuksia / makuja löytää n 'th Fibonacci numero.

### Esimerkki I: Täsmää lausekkeet

Kairo 1.0:ssa voit käyttää ruostemaisia[täsmääviä](https://doc.rust-lang.org/rust-by-example/flow_control/match.html?highlight=match#match)lausekkeita. Et enää pelkää jos / muu lausunto, joka voi aiheuttaa viittauksen kumoamista!

![](/assets/code01.png)

### Esimerkki II: Tietotyypit

Vaikka Kairo 0 työskenteli huovaa ja osoittimia, Kairo 1.0 meillä on natiivi pääsy monimutkaisia tietotyyppejä kielellä. Alla voit löytää esimerkin, joka tuottaa joukon ensimmäisen n Fibonacci numerot.

![](/assets/code02.png)

Kuten näette edellä, sen sijaan, että työskentelisimme suoraan muistiosoittimien kanssa, käytämme `Array::<felt>\` tyyppi ja \`array_append\`-funktio.

### Esimerkki III: rakenteet & omistus

Seuraava koodi havainnollistaa rakenteiden käyttöä Kairossa 1.0.

![](/assets/code03.png)

> Seuraava kappale on tarkoitettu Rustaceans yleisön keskuudessa. Kairo 1.0 hallitsee muistia samalla tavalla kuin ruostetta. Siinä käytetään erityisesti[omistuksen ja lainanoton käsitteitä](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html). Näin ollen pääsemällä \`FibResult\` -jäseneen (tässä tapauksessa \`result. alue\`), olemme siirtäneet \`result\`, mikä tarkoittaa, että ellei FibResult ole kopioitu, emme voi käyttää sitä uudelleen \`result.index\`. Tämän poistamiseksi lisäämme \`#\[derive(Copy)]\` attribuutin \`FibResult\` tyypistä. Tulevaisuudessa versiot lisätään automaattinen dekonstruktio rakennelmia. Tämä mahdollistaa yhden jäsenen siirtymisen omistusoikeuteen koskematta muita jäseniä (erityisesti yllä oleva koodi kääntäisi, vaikka \`FibResult\`:lla ei olisi kopion attribuuttia).

**Erityisesti on huomattava, että Kairo 1.0 on täysin abstraktia pois alkuperäinen (ei deterministinen luku-malli) muistia Kairo.**

## Esimerkki IV: Virhe etenemisessä

Seuraava koodi laskee n’th Fibonacci numeron, mutta toisin kuin edelliset esimerkit, kaikki syötteet ovat tyyppiä uint128. Huomaa, että tämä ratkaisee suuren kipupisteen kohdun käsittely Kairossa 0. Täällä, uint128 (ja tulevaisuudessa uint256) ovat natiivi tyyppejä.

![](/assets/0_s8bhjf_ade3carmi.png)

Lisäksi kaksi 128 bittinen kokonaislukua voi aiheuttaa ylivuotoa. Edellä olevassa koodissa käytetään[Vaihtoehto Enum](https://doc.rust-lang.org/rust-by-example/std/option.html)ja[kysymysmerkkioperaattoria](https://doc.rust-lang.org/rust-by-example/std/result/question_mark.html), kun kyseessä on ylivuoto jonkin välivaiheen lisäyksen yhteydessä. Vertaa tätä[nykyiseen](https://github.com/starkware-libs/cairo-lang/blob/9889fbd522edc5eff603356e1912e20642ae20af/src/starkware/cairo/common/uint256.cairo#L31)uint256 addition syntaksiin, jossa \`unit256_check\` -funktiota oli kutsuttava äänen takaamiseksi. Lisäksi lähitulevaisuudessa, lisäämme \`panic\` -käsitteen kielelle (samanlainen kuin[paniikin](https://doc.rust-lang.org/rust-by-example/std/panic.html)makron ruoppauksessa), ja yksinkertaiset virheet, kuten lisäysten ylivuoto, ovat mahdottomia ja lisätään automaattisesti, mikä tarkoittaa, että sinun ei tarvitse käyttää \`Option\` tai \`? ` lisättäessä apuvälineitä.

## Kokeile sitä itse

Voit nyt kääntää ja ajaa tällä hetkellä tuettuja Cairo 1.0 -ohjelmia! Seuraa näitä[ohjeita](https://github.com/starkware-libs/cairo/tree/main/crates/cairo-lang-runner)kuinka voit käyttää \`cairo-run\` -komentoa. Huomaa, että huuvan alla suoritetaan[Rust Cairo VM](https://github.com/lambdaclass/cairo-rs), kehittämä[Lambdaclass](https://lambdaclass.com/).

Löydät lisää esimerkkejä auttaaksesi sinua aloittamaan[täältä](https://github.com/starkware-libs/cairo2/tree/main/examples). Huomaa, että tämä on vasta ensimmäinen kurkistaa kääntäjän kehittämiseen; tulevina viikkoina parannamme CLI yhdessä kääntäjän kanssa.

## Tulevat Suunnitelmat

Ensimmäinen versio Compiler, joka on suunniteltu Q1, keskittyy tukemaan kaikkia olemassa olevia toimintoja StarkNet Kairossa 1.0. Lisäksi työskentelemme laajentamalla valmiuksia Kairo 1.0 kääntäjä. Tulevina viikkoina voit odottaa:

* StarkNet-valmiudet – älykkäiden sopimusten tekeminen ja järjestelmäpuhelujen käyttäminen.
* Silmukat
* Uudet kirjaston toiminnot
* Parannettu kielipalvelin
* StarkNet-kaasun syntyperäinen käsite

Varmista, että pysyt kuulolla ja seuraa kääntäjän edistymistä!