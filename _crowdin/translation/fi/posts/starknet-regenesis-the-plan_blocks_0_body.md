### TL;DR

* Jaamme yksityiskohtaisen Regenesis-suunnitelman, jota on muokannut StarkNet-yhteisön kanssa käydyt laajat keskustelut. Erityiset kiitokset Kuba@SWM:ille.
* Regenesis seuraa Cairo 1.0:n vapauttamista ja tekee järjestelmästä turvallisemman mahdollistamalla yksinkertaisemmat ja turvallisemmat StarkNet-sopimukset
* Käyttäjien tulee olla valmiita päivittämään lompakkonsa siirtymävaiheen aikana
* Kehittäjien on toimitettava sopimuksensa Kairo 1.0:lle

### Johdanto

StarkNet Alpha etenee kohti Regenesiaa, joka on tärkeä askel kohti tuotantoa. Tässä päivityksessä haluamme jakaa lisätietoja tärkeimmistä syistä Regenesis —[Kairo 1.](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)— ja alkaa selittää, mitä se vaatii käyttäjiltä ja kehittäjiltä. Regenesisin jälkeen StarkNet toimii vain Kairossa 1.0-pohjaisten sopimusten kanssa ja aloittaa uuden genesisohkon nykytilassa.

Mitä Regenesis vaatii käyttäjiltä? Yksinkertainen lompakon päivitys. Mitä se vaatii StarkNetin dappien rakentajilta? Sopimusten siirtäminen Kairo 1.0:een ja yksinkertaisen päivitysohjeen mukaisesti. Tarkemmin sanottuna puhtaan tilan uudelleenkäynnistystä ei tapahdu ja pysymme samassa StarkNet-esimerkissä, tarkoittaa , että muuttoliike ei ole tarpeen**.**

Regenesis -suunnitelmalla pyritään säilyttämään sovellusten tila kokonaisuudessaan ja olemaan tekemättä mitään seisokkeja sovelluksiin. Näin ollen sovellukset, jotka noudattavat antamiamme ohjeita, voivat käynnistää StarkNet Alpha Mainnet'ssa heti häiritsemättä niiden toimintaa ja niiden käyttäjiä Regenesis-prosessin aikana. e ovat sitoutuneet työskentelemään yhteisön kanssa ja antamaan kaiken tarvittavan tuen, jotta prosessi olisi mahdollisimman sujuva.

Olemme menossa tähän suuntaan yhteisön kanssa käytyjen laajojen keskustelujen tuloksena, joihin sisältyi Software Mansion -tiimin tärkeä ehdotus.

### Miksi Sukupuoli?

#### Kairo 1.0 ja Sierra

Tärkein motivaatio Regenesis on hyödyntää uusia mahdollisuuksia saatu Kairo 1. — eli sekvensserit DOS suoja, sensuurivastus ja kaasun mittaus, jotka ovat välttämättömiä StarkNet hajautettu verkko.

Kairo 1.0 varmistaa, että jokainen tapahtuma voidaan todistaa. Näin StarkNet voi sisällyttää palautetut tapahtumat lohkoihin ja tuottaa todisteen niiden toteuttamisesta. Tämän mekanismin avulla sekvenssejä voidaan maksaa palautettujen liiketoimien toteuttamisesta, mikä lisää DOS-suojaa haitallisilta toimijoilta. Lisäksi Cairo 1.0 tukee kaasun mittausta, jonka avulla StarkNet voi siirtyä intuitiivisempiin maksumarkkinoihin. Tämän ansiosta StarkNet voi ottaa käyttöön pakotettuja liiketoimia L1:ltä ja parantaa verkon sensuurivastuksen valmiuksia.

Näiden etujen saamiseksi Kairon v0:n ja Kairon 1.0:n sopimuksia ei voida sekoittaa. Virheellisiä lausuntoja ei voida todistaa virheellisiksi, eikä kaasun seurantaa voi tapahtua, jos meillä on osia Kairo v0 -sopimuksista. Tätä varten meidän on poistettava Kairo v0 -koodi kokonaan StarkNet-tilasta, ergo Regenesisistä.

**Jälkeen Regenesis, meillä on Starknet järjestelmä täysin perustuu Kairo 1.0.**

#### Koodin ja protokollan yksinkertaistaminen

StarkNet, kun vielä Alfassa, kävi jo läpi monia muutoksia. Jokainen versio tähän mennessä muutti StarkNet OS, lohkot ja transaktiorakenne. Tämä aiheutti joidenkin koodien vanhentumisen. Täydellisten solmukohtien ja infrastruktuurin tarjoajien (kuten indeksoijien ja valtion tutkimusmatkailijoiden) on kuitenkin oltava tietoisia, ja toteuttaa, kaikki aiemmat käyttäytyminen StarkNet Alpha versiot jotta synkronoida valtion luotettavasti. Ilman Regenesiä tämä taakka saattaa olla merkittävä pelote kehittäjille, jotka harkitsevat tällaisten palvelujen rakentamista StarkNet-yhtiölle.

Sen vuoksi aiomme vähentää pöytäkirjan monimutkaisuutta ennen tuotantoa, ja valmistautuessamme hajautettuun maailmaan, jossa on monia infrastruktuurityökaluja. Tähän päästäisiin, jos ei vaadita tulevaa infrastruktuuria minkään StarkNet 0 -järjestelmän toteuttamiseksi. koodi, ja merkitse ensimmäinen lohko siirtymäajan jälkeen genesis piste.

### Wen Regeness? Yleinen aikataulu

Regenesis seuraa Kairo 1.0, joka on suunniteltu tapahtuvaksi vuoden 2022 loppuun mennessä. Vuoden 2023 ensimmäisen neljänneksen aikana StarkNet päivitetään tukemaan Kairo 1:tä. , ja pyrimme siirtymään täysin Kairo 1.0-pohjainen verkko loppuun mennessä Q1.

**Käyttäjien ja sovellusten on tehtävä siirtymäkausi tämän ajanjakson aikana.**

![](/assets/1_ef85shzd2uudwex-cy8wdg-1.png)

### Mitä minun siis tarvitsee tietää?

Sovellusten kehittäjien on oltava tietoisia seuraavista Regenesiin liittyvistä seikoista:

1. Varmista, että sopimuksesi on valmis päivitystä varten. Suunnitelman kaikki tekniset seikat on jaettu[StarkNet-yhteisön foorumissa](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080). Kun yksityiskohdat on viimeistelty, olemme samaa mieltä tiiviistä suuntaviivoista.
2. Varmista, että olet valmis siirtämään koodisi Kairo 1.0:lle. Katso seuraava kohta viimeisimmistä tiedoista.

#### Sopimuksen siirtäminen Kairoon 1.0

Kairo 1.0 on StarkNet-kehittäjille suuri lupaus. Parannus nykyiseen Kairo joka on turvallisempi, parempi ja helpompi kirjoittaa sopimuksia, parannettu syntaksi, täysin kehittynyt tyyppi järjestelmä (natiivi uint256 kukaan? ja enemmän. Kehittäjät joutuvat siirtämään nykyiset StarkNet-sopimuksensa Kairoon 1.0 syntaksiin. Kuitenkin, koska logiikka ja koodin rakenne pysyy samana, tämän ponnistuksen odotetaan olevan vähäpätöinen verrattuna siihen ponnistukseen, joka oli tehty sovelluksen kehittämiseksi.

Tässä yhteydessä on syytä huomata, että voit tarkistaa uudelleen Kairo 1.0 -version sovelluksestasi. Jos sovelluksesi on jo tarkastettu aiemmin, uudelleentarkastusprosessi on huomattavasti halvempi ja yksinkertaisempi, koska tilintarkastajat ovat jo perehtyneet teidän logiikka.

Julkaisemme kaiken dokumentaation Kairo 1.0:n ympärille sekä tutoriaaleja ja työpajoja vuoden 2022 Q4 aikana.

### Olen StarkNet käyttäjä. Mitä Minun Pitäisi Tehdä?

Käyttäjänä sinun täytyy todennäköisesti tehdä joitakin toimia aikana Regenesis. Ainakin sinun täytyy päivittää tilisi sopimus. Jos näin ei tapahdu (muutaman kuukauden pituisena) siirtymäaikana, se johtaa tiliesi menetykseen. Riippuen käyttämiesi StarkNet-sovellusten kehittäjien valitsemasta päivityspolusta, sinun on ehkä otettava ylimääräisiä askelia.

Muistutamme kaikille, että StarkNet on edelleen Alfa-vaiheessa, ja käyttäjien on pysyttävä tarkkaavaisina StarkNet- ja käyttämiensä sovellusten viestinnässä. On sinun vastuullasi varmistaa, että päivität uuden järjestelmän varhaisessa vaiheessa. *Varhaisena adoptoijana oleminen ei ole aina helppoa, ja luotamme siihen, että teet osasi!*

### Päätteeksi

Kairo 1.0 on aivan nurkan takana ja tarjoaa monia mielenkiintoisia hyötyjä ja parannuksia StarkNetille ja sen kehittäjille. Niiden hyödyntämiseksi tarvitaan verkoston Regenesis-tapahtuma. Onneksi meillä on mielessämme suunnittelu, joka tekee tästä prosessista mahdollisimman vähän häiritsevän, täysin saumattoman käyttäjille ja varsin yksinkertaisen sovelluksille.

Kehotamme sinua osallistumaan[yhteisön keskusteluun](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080)ja jakamaan kommenttejasi ja huolenaiheitasi, sekä pysyä ajan tasalla koskien vaiheita, jotka sinun täytyy ottaa sovelluskehittäjänä StarkNetissa.