### TL;DR

* Tilien Abstraktio EIP-4337:n hengen parannukset

1. Validointi – Suoritus erottamisesta
2. Tapahtuman ainutkertaisuus varmistetaan nyt protokollassa (ei)

* Maksumekanismi laajennetaan kattamaan seuraavat seikat:

1. L1→L2 -viestit
2. Hylkää Tapahtumat

* Muutama Kairon syntaksin muutos

### Johdanto

Olemme innoissamme esitellä StarkNet Alpha 0.10.0. Tämä versio on toinen askel kohti skaalaus Ethereum vaarantamatta turvallisuutta ja hajauttamista.

Tässä blogikirjoituksessa kuvataan lyhyesti tämän version pääpiirteitä. Täydellinen luettelo muutoksista, tarkista[julkaisutiedot](https://github.com/starkware-libs/cairo-lang/releases). Tarkempia tietoja varten tarkista[dokumentaatio](https://docs.starknet.io/).

### Tilin Abstraktio Muutokset

Siirrymme eteenpäin[StarkNetin tilin abstraktilla](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781). Tämä versio tuo mukanaan[EIP-4337](https://eips.ethereum.org/EIPS/eip-4337) innoittamia muutoksia.

#### Validaatti/koodauserottelu

Tähän asti tilin \_\_execute\_\_ toiminto oli vastuussa sekä tapahtuman validoinnista että suorittamisesta. Jakamme tämän kytkennän 0.10.0 kohdassa ja otamme tileille erillisen \_\_validate\_\_ toiminnon. Kun tilisopimus on saatu, se soittaa ensin \_\_validate\_\_, ja sen jälkeen siirry \_\_execute\_\_.

Validoija/toteutus erotetaan toisistaan protokollan tasolla virheelliset ja peruutetut (vielä pätevät) liiketoimet. Tämän ansiosta sekvenssit voivat periä maksuja voimassa olevan liiketoimen toteuttamisesta riippumatta siitä, onko se peruttu vai ei.

#### Nonce

Versiossa 0.10.0 lisätään nonce -kenttä, jotta voidaan varmistaa tapahtuman ainutlaatuisuus protokollan tasolla. Tähän asti luottotappioita käsiteltiin tilisopimustasolla, mikä tarkoitti sitä, että samaa tiivistettä sisältävä liiketoimi voitaisiin toteuttaa teoriassa kaksi kertaa.

Samoin kuin Ethereum, jokaiseen sopimukseen sisältyy nyt nonce, joka laskee toteutettujen liiketoimien määrän tältä tililtä. Tilisopimukset hyväksyvät vain sellaiset tapahtumat, joissa on vastaavuus (nonce), eli jos tilin nonce -arvo on X, se hyväksyy vain tapahtumat, joissa on nonce X.

#### Uusi Tapahtumaversio

Jotta yhteensopivuus voidaan taata, otamme nämä kaksi muutosta käyttöön uuden siirtotapahtuman version kautta —[v1](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C). Nämä muutokset koskevat vain uutta versiota, ja vanhemmat tilit voivat silti suorittaa version 0 tapahtumia.

Huomautus – liiketoimi v0 on nyt vanhentunut, ja se poistetaan StarkNet Alpha v0.11.0. Varmista, että päivität päivityksen käyttääksesi uutta tapahtumaversiota.

Jos haluat yksityiskohtaisempia tietoja tapahtuman versiosta, lue[dokumentaatio](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C).

#### Maksumekanismi

Uudessa versiossa voidaan ottaa huomioon kahden vaaditun komponentin maksut:

* [L1→L2 Viesti](https://docs.starknet.io/docs/L1-L2%20Communication/messaging-mechanism#l1--l2-message-fees)
* [Hylkää tapahtuma](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)

Nämä maksut eivät ole pakollisia tässä versiossa, ja ne pannaan täytäntöön vain StarkNet Alpha v0.11.0.

#### Kairon Syntaksimuutokset

Kannattaen asteittaista etenemistä kohti Kairon[Kairo 1.0](https://www.youtube.com/watch?v=Ny4Rv6ztINU), tähän versioon sisältyy useita syntaksin muutoksia.

Epämukavuuden minimoimiseksi versiojulkaisu sisältää[migraatioskriptin](https://www.youtube.com/watch?v=kXs59zaQrsc), joka käyttää automaattisesti yllä olevia muutoksia. Löydät lisätietoja[täältä](https://github.com/starkware-libs/cairo-lang/releases).

### Mitä Seuraavaksi?

* Muutaman viikon kuluttua aiomme ottaa käyttöön rinnakkaistuotannon sekvensseriin mahdollistaen nopeamman lohkotuotannon (V0.10.1)
* Saamme pian valmiiksi viimeisen osan, joka on sisällytettävä maksu - Tilin käyttöönotto
* Kairo 1.0:n julkaisu! Lisää tietoa siitä tulevassa viestissä.

### Miten Voin Olla Enemmän Käyttöön?

* Mene[starknet.io](https://starknet.io/)kaikille StarkNet-tiedoille, dokumentaatioille, oppaille ja päivityksille.
* Liity[StarkNet Discordiin](http://starknet.io/discord)dev-tuelle, ekosysteemien ilmoituksille ja tule osaksi yhteisöä.
* Vieraile[StarkNet Forumissa](http://community.starknet.io/)pysyäksesi ajan tasalla ja osallistuaksesi StarkNet-tutkimuskeskusteluihin.

Olemme aina iloisia saadessamme palautetta[dokumentaatiostamme](https://docs.starknet.io/)!