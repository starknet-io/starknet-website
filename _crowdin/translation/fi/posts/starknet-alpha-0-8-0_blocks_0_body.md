### TL;DR

* StarkNet Alpha 0.8.0 esittelee maksumekanismin alkuperäisen version (valinnainen kunnes StarkNet Alpha 0.9.0.)
* Uusi sovellusliittymä kehottaa arvioimaan maksutapahtuman maksun tapahtumajäljen saamiseksi, mikä mahdollistaa paremman näkyvyyden ja virheenkorjauksen
* StarkNet-sekvensseriin liittyvät suorituskyvyn parannukset
* L1→L2 viestin peruutus

### Esittely

Kuten jaettu[roadmap](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51), viimeisimmän lisäyksen StarkNetin toiminnallisuuteen ja ominaisuuksiin, huomiomme siirtyy kohti suorituskyvyn parantamista ja protokollan suunnittelua (mukaan lukien maksut, tilien abstraktio, hajauttaminen jne.). StarkNet Alpha 0.8.0 aloittaa prosessin maksutapahtumien lisäämisestä ja sekvensserin suorituskyvyn parantamisesta.

StarkNetin etenemissuunnitelmaan sisältyy maksumekanismi, ja etenemällä tämän version kanssa otamme tärkeän askeleen lähempänä täyden suorituskyvyn foorumi.

Maksumekanismin lisääminen on olennainen osa StarkNetin suorituskyvyn suunnittelua. Ilman minimaalista maksua vaarana on ääretön tapahtuma: mikä tekisi järjestelmän mahdottomaksi olla suorituskykyinen, riippumatta sekvensseri optimointia.

### Ominaisuudet

#### Maksun Tuki

StarkNet Alpha tukee nyt maksumekanismin ensimmäistä versiota. Tämä mekanismi on olennaisen tärkeä jo tässä varhaisessa vaiheessa ja jopa Testnetissä kahdesta syystä:

1. Sen avulla kehittäjät voivat alkaa optimoida sopimuksensa StarkNetin kustannusmallin mukaisesti.
2. Se on ratkaisevan tärkeä vastapuoli järjestelmän suorituskyvyn parantamisessa, sillä se estää roskapostin lähettämisen lukemattomille tapahtumille.

Tässä versiossa otetaan käyttöön komponentit, joita kehittäjät tarvitsevat sisällyttääkseen maksumaksut työkaluihinsa ja sovelluksiinsa. Kehittäjät voivat nyt arvioida siirtomaksun soittamalla \`estimate_fee\` -päätepisteen ja suorittamalla maksun osana tapahtuman suoritusta.

Koska tämä ominaisuus ei ole taaksepäin yhteensopiva, emme valvo maksumaksua tässä vaiheessa, vaan vain versiosta 0. .0, joka on määrä vapauttaa muutaman viikon kuluttua. Tämän asteittaisen siirtymän ansiosta käyttäjät ja kehittäjät voivat sopeutua uuteen malliin.

#### Maksun rakenne 0.8.0

0.8.0 maksut peritään pelkästään laskennallisen monimutkaisuuden mukaan, kun taas StarkWare tukee edelleen L1 viestintäkustannuksia. Päivitämme maksumekanismia sisällyttämällä siihen nämä L1 operaatio- ja viestintäkustannukset muutaman seuraavan viikon aikana. Maksu peritään atomisesti StarkNet L2:n liiketoimen toteutuksen yhteydessä. Ks. yksityiskohtaisen kuvauksen[hinnoitteludokumentaatio](https://starknet.io/documentation/fee-mechanism/).

On tärkeää huomata, että teemme tiivistä yhteistyötä kehittäjäyhteisön kanssa parantaaksemme ja kehittääksemme maksumekanismia StarkNet-järjestelmän kehittyessä.

#### L2 Goerli ETH Faucet

Aloitimme[L2 Goerli ETH Faucet](https://faucet.goerli.starknet.io/)jotta käyttäjät voivat maksaa maksuja Testnetissä. Tämä Faucet lähettää pieniä määriä L2 Goerli ETH tiliisi osoitteeseen StarkNet Goerli jota voit käyttää maksutapahtuman maksuun.

#### Trace API

Lisäsimme mahdollisuuden noutaa tapahtuman suorituksen jälki StarkNetin API:lle. Liiketoimen jäljen sisällä kaikki sisäiset puhelut ovat näkyvissä, ja niihin liittyy esimerkiksi kulutettuja toteutusresursseja, palautusarvoa, päästötapahtumia ja lähetettyjä viestejä. Tämä uusi puhelu yksinkertaistaa sopimuksen käyttäytymisen tai virheenkorjaus tapahtumia. Lisäksi esimerkiksi[Voyager](https://voyager.online/)tai[StarkTx](https://starktx.info/)voisivat sisällyttää nämä tiedot. tarjota käyttäjille yksityiskohtaisempi analyysi erityisesti tilisopimusten vuorovaikutusta varten.

Kappaleen saamiseksi voit käyttää \`get_transaction_trace\` StarkNetin CLI:ssä. Jos haluat nähdä esimerkin siitä, miten sitä käytetään, tarkista[opetusohjelma](https://www.cairo-lang.org/docs/hello_starknet/cli.html?#get-transaction-trace).

#### Viestin Peruutus

Toinen ominaisuus tässä versiossa on kyky peruuttaa L1→L2 viestit. Miksi tämä on hyödyllistä? Kuvittele skenaario, jossa käyttäjä siirtää omaisuuserän L1:stä L2:een. Virtaus alkaa käyttäjällä, joka lähettää laitteen StarkNet-sillalle ja vastaavalle L1→L2 -viestin sukupolvelle. Nyt kuvitella, että L2 viestin kulutus ei toimi (tämä voi tapahtua koska vika dApps n Kairo sopimus). Tämä saattaa johtaa siihen, että käyttäjä menettää omaisuutensa säilytyksen ikuisesti.

Tämän riskin pienentäminen annamme sopimuksen joka aloitti L1→L2 viestin peruuttaa sen — ilmoitettuaan aikomuksen tehdä niin ja odottaessaan sopivaa aikaa (katso[dokumentaatio](https://starknet.io/l1-l2-messaging/#cancellation)).

### Suorituskyvyn Parannukset

Tämä versio vähentää merkittävästi aikaa sekvensserin täytyy suorittaa virta saapuvia Kairo liiketoimia.

Tämä on vain ensimmäinen askel! Seuraavan suuren suorituskyvyn virstanpylväs, joka otetaan käyttöön pian (0,9.0), on rinnakkainen suorittaminen sekvensseri, ja paljon enemmän optimointeja odotetaan tiellä.

### Mitä nyt?

Lue tekninen dokumentaatio[täältä](https://starknet.io/documentation/fee-mechanism/).

Mene[starknet.io](https://starknet.io/)kaikille StarkNet-tiedoille, dokumentaatioille, oppaille ja päivityksille.

Liity[StarkNet Discordiin](https://discord.gg/uJ9HZTUk2Y)dev-tuelle, ekosysteemien ilmoituksille ja tule osaksi yhteisöä.

Vieraile[StarkNet Shamans](https://community.starknet.io/)pysyä ajan tasalla ja osallistua kaikkiin StarkNet-tutkimuskeskusteluihin.