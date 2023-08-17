### TL;DR

* Ensimmäinen versio StarkNet Bridge, StarkGate Alpha, elää**[Testnet](https://goerli.starkgate.starknet.io/)**, ja**[Mainnet](https://starkgate.starknet.io/)**!
* Odotamme yhteisön palautetta siitä, miten asioita voidaan parantaa. Voit lähettää palautetta sekä[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)ja[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).
* Mainnet käyttöönotto seuraa pian (päivitys, 9. toukokuuta 2022: StarkGate elää Mainnet)

Jännitys! Olemme innoissamme voidessamme vapauttaa StarkGate Alpha, ensimmäinen versio StarkNet’s Bridge, elää nyt Goerli testnet, Mainnet käyttöönotto seurata pian.*

\*(päivitys, 9. toukokuuta 2022: StarkGate asuu Mainnetissa)

**Tärkeä vastuuvapauslauseke: tämä on alfa versio StarkGate Alpha (lue hieno tulostaa alla!).**

![](/assets/starkgate_01.png)

Ennen kuin jatkat, mene tarkista se! [StarkGate Testnet](https://goerli.starkgate.starknet.io/),[StarkGate Mainnet](https://starkgate.starknet.io/)

StarkGate toimii porttina Ethereum ja[StarkNet](https://starknet.io/), ja käyttäjät voivat tehdä kaiken mitä he voivat odottaa silta.

#### **Mistä löydän tietoa siitä, miten StarkGate toimii?**

Ymmärtääksesi miten StarkGate toimii, lue[tekninen dokumentaatio](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)ja katso[koodi](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate). Huomaa, että tämä on ensimmäinen versio, ja kutsumme palautetta ja ehdotuksia siitä, miten parantaa sekä[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)ja[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).

#### **Mitkä kuponkia tuetaan StarkGate?**

* StarkGate Alpha on Goerli tukee ETH ja muutamia muita ERC-20 kuponkia. Täydellinen luettelo ja asianmukaiset sopimusosoitteet, sekä Ethereum että StarkNet, ovat saatavilla tässä[repo](https://github.com/starkware-libs/starknet-addresses).
* Mainnet'ssa StarkGate Alpha tukee aluksi vain ETH:tä, jotta se voi käyttää maksujärjestelmää. Myöhemmin lisäämme tukea WBTC:lle, USDC:lle, USDT:lle ja DAI:lle. Näet tässä[repossa olevat sopimusosoitteet](https://github.com/starkware-libs/starknet-addresses/blob/master/bridged_tokens/mainnet.json).

Jatkamme tiellä ja julkaisemme mekanismin, jolla lisärahakkeita voidaan lisätä.

#### **Mitä turvallisuusrajoituksia StarkGate Alpha on Mainnet?**

StarkGate Alpha on Mainnet on lanseerattu kahdella rajoituksella – jotta voidaan vähentää riskejä käyttämällä Alpha versio:

1. Kokonaisarvo, joka on lukittu (TVL) sillalla L1:ssä, rajoitetaan kunkin token tyypin määrää.
2. Enimmäismäärä kussakin tapahtumassa, joka on lähetetty L1:stä L2:een (Ethereum→StarkNet) StarkGaten kautta, on rajoitettu.

Aiomme vähitellen helpottaa näitä rajoituksia ja poistaa ne kokonaan, kun luottamus kasvaa. Päivitetyt parametrit löytyvät StarkGaten[dokumentaatiosta](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge).

![](/assets/starkgate_02.png)

### Alfa ja mitä se tarkoittaa

Kuten aina, muistutamme teitä siitä, että StarkNet on tällä hetkellä**Alpha**-vaiheessa:

* Asiat voivat murtua. Jos ne epäonnistuvat katastrofaalisesti, varat voitaisiin menettää (**lue vastuuvapauslauseke alla**!).
* Sekä StarkNet Alpha että StarkGate sopimuksia voidaan päivittää ilman timelock. Vaikka odotamme ilmoittavamme tällaisista parannuksista jo paljon ennen aikaa, kun on kyse tulevista turvallisuusriskeistä (esimerkiksi jos kriittinen vika löytyy, päivitystä voidaan käyttää vain vähän tai ei ollenkaan.
* Sillan koodia sekä StarkNet Alphan osia ei ole vielä tarkastettu. StarkGate Alphan ABDK:n ja Alankomaiden auditoinnit saatetaan pian päätökseen.

Kehotamme kaikkia käyttäjiä auttamaan siltaa parantamaan antamalla palautetta käyttämällä jotakin seuraavista alustoista:

1. [StarkGate frontend repo](https://github.com/starkware-libs/starkgate-frontend)
2. [StarkGate Sopimukset repo](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate)
3. [StarkNet Shamans](http://community.starknet.io/)

Jos haluat kysymyksiä ja dev tukea, liity[StarkNet discord palvelin](https://discord.gg/uJ9HZTUk2Y).

### Vastuuvapauslauseke

***StarkNet Alpha on uusi ja monimutkainen järjestelmä, jota ei ole täysin tarkastettu. Sama koskee myös StarkNet-siltaa. Kuten kaikki monimutkaiset ohjelmistojärjestelmät, sekä StarkNet että silta voivat sisältää vikoja, jotka äärimmäisissä tapauksissa se voi johtaa kaikkien varojenne menettämiseen. Joten,***juoksee huolellisesti ja varo!******

*StarkNet-ekosysteemi on suuri ja nopeasti kasvava joukko itsenäisiä tiimejä ja yksilöitä, joista StarkWarella ei ole minkäänlaista valvontaa eikä se ota vastuuta. Jokaiseen ekosysteemin jäsenten kehittämiin hankkeisiin voi sisältyä vikoja, jotka äärimmäisissä tapauksissa voivat johtaa kaikkien varojesi menetykseen. Kun lisäksi otetaan käyttöön älykkäitä sopimuksia, mahdollisuudet tahattomiin haitallisiin vikoihin ja jopa ilkivaltaisiin huijauksiin ja mattovetoihin lisääntyvät. Joten kohdella kaikkia älykkäitä sopimuksia StarkNet kuin kohdella älykkäitä sopimuksia Ethereum, ja käyttää vain niitä, jotka sinulla on hyvä syy luottaa turvallisesti.*