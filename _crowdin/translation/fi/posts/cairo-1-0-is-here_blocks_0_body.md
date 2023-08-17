### TL;DR

* Kairo 1.0 ensimmäinen julkaisu on täällä!
* Kehittäjät voivat aloittaa Kairo 1.0 -ohjelmien kirjoittamisen ja testaamisen
* Ominaisuuden pariteetti vanhempi versio Kairo saavutetaan tulevina viikkoina
* Tukea StarkNet-sopimuksille lisätään tulevaan StarkNet Alpha -versioon

### Tausta

Olemme innoissamme ilmoittaa, että ensimmäinen julkinen versio Kairo 1.0 on nyt saatavilla. Tämä on merkittävä virstanpylväs Kairon kehityksessä, joka esiteltiin ensimmäisen kerran vuonna 2020 käännöskokonaisena ohjelmointikielenä tehokkaasti STARK-todistettavissa olevien ohjelmien kirjoittamiseksi. Kairo 1.0 on ruostemainen korkean tason kieli. Kuten Rust, sen tarkoituksena on antaa kehittäjien helposti kirjoittaa koodia, joka on tehokas ja turvallinen.

Perustamisestaan lähtien Kairo on käytetty rakentamaan Layer-2 sovelluksia, jotka ovat[käsitellyt](https://dashboard.starkware.co/starkex)yli $ 790 miljardia arvoinen kaupat, Jalostettu yli 300 miljoonaa transaktiota ja lyöty yli 90 miljoonaa NFT:tä, kaikki suoritetaan off-ketjun ja asettui Ethereum kanssa matemaattinen koskemattomuus taattu STARK todisteita. Kairosta tuli neljänneksi eniten käytetty ohjelmointikieli lohkoketjussa[ekosysteemissä](https://defillama.com/languages)yleensä. Kanssa vapauttamalla Kairo 1. , Pyrimme tekemään kielestä entistä helppokäyttöisempi ja käyttäjäystävällisempi ja ottamaan käyttöön uusia ominaisuuksia, jotka parantavat turvallisuutta ja mukavuutta.

Yksi merkittävimmistä muutoksista Kairo 1.0 on syntaksi. Olemme ottaneet inspiraation**Rust**luodaksemme kehittäjäystävällisemmän kielen, joka on helpompi lukea ja kirjoittaa. Kairon uusi versio mahdollistaa turvallisemman koodin kirjoittamisen (voimakkaasti kirjoitettu, omistajuus ja lainanotto, jne.), mutta myös ilmeisempi.

Kairo 1.0 esittelee myös Sierran uuden välilehden, joka takaa**jokaisen**Kairon ajon. Tämä tekee Kairo 1.0:sta erityisen sopivan käytettäväksi StarkNetin kaltaisessa luvattomassa verkossa, jossa se voi tarjota vahvan DoS-suojauksen ja sensuurivastuksen. Voit lukea lisää Sierra meidän[edellinen](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)postitse.

## Ensimmäinen maku!

### Mitä voit tehdä tänään?

Kehittäjät voivat aloittaa kirjoittamisen, kokoamisen ja testaamisen Kairo 1.0:n! Kannustamme kehittäjiä aloittamaan Kairo 1.0:n kokeilun ja tottumaan uuteen syntaksiin ja ominaisuuksiin.

Koska Kairo 1.0 on edelleen aktiivisesti kehitetty ja uusia ominaisuuksia lisätään jatkuvasti, tutustu[Kairo arkistoon](https://github.com/starkware-libs/cairo/)viimeisimmistä päivityksistä.

### Mitä seuraavaksi?

Tällä hetkellä Kairo 1. puuttuu edelleen joitakin Kairon vanhassa versiossa tuettuja ominaisuuksia ([katso tämä taulukko lisätietoja](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)). Meidän seuraava merkkipaalu odotetaan lähiviikkoina, antaa Kairo 1.0 ominaisuus pariteetti vanhemman version. Voit seurata edistymistä kohti että virstanpylväs[täällä](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md).

### Starknet- tuki

StarkNet-sopimusten kirjoittaminen Kairossa 1.0:ssa on tuettu (vaikka tietyt ominaisuudet puuttuvat). StarkNet ei kuitenkaan vielä tue Kairo 1.0:n sopimusten käyttöönottoa ja toteuttamista. StarkNet Alpha V0.11.0, suunniteltu tulevina viikkoina, tuo mahdollisuuden ottaa käyttöön ja ajaa Kairo 1.0 sopimuksia. Päivitys on v0.11.0 merkitsee alussa Siirtymäkausi kohti järjestelmää, joka toimii vain Kairo 1.0 sopimuksia. Tämä siirtymäkausi päättyy[Regenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4), odotetaan muutamaa kuukautta myöhemmin.

![](/assets/0_odxbxeacqdwizlfw.jpg)

### Rakennetaan!

StarkNetin tavoitteena on eksponentiaalisesti mittakaava Ethereum käyttäen matemaattinen eheys STARKs, ja Kairon tavoitteena on tehdä tämä eksponentiaalinen mittakaava saataville kehittäjille. Esteettömyys tarkoittaa ohjelmointikieltä, joka on tehokas, helppo lukea ja kirjoittaa, sekä turvallista käyttää. Toivomme, että vapautus Kairo 1.0 innostaa vielä enemmän kehittäjät liittyä StarkNet ja mittakaavassa Ethereum vastaamaan maailmanlaajuiseen kysyntään.