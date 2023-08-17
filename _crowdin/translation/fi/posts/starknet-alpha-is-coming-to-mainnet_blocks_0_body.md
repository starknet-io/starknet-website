### TL;DR

* *StarkNet Alpha käynnistyy Mainnet Ethereum marraskuuhun mennessä*
* Aika rakentaa StarkNet on nyt

### Lyhyt Historia

Ilmoitimme[StarkNet](https://starkware.co/product/starknet/)-visiomme vuoden alussa: tuo valtava skaalautuvuus Ethereum -järjestelmään säilyttäen samalla L1 -turvallisuuden, luvaton vuorovaikutus ja hajauttaminen.\
Julkaisimme**[StarkNet Alpha](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)**julkisessa testnetissä kesäkuussa. Tämä versio tukee täysin luvaton yleinen laskenta älykkäitä sopimuksia. Olemme päivittäneet sen kahdesti: ensin**Alpha 1**-versioon — tarjoamme[L1<>L2 -viesti- ja on-chain -dataa](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), ja sitten**Alpha 2**– tukee[kompostoitavuutta](https://medium.com/starkware/starknet-alpha-2-4aa116f0ecfc).

StarkNet Alpha 2 tukee nyt yleisen laskennan kompostoitavia älykkäitä sopimuksia Ethereum-kaltaisessa tilassa, joilla on kyky tehdä L1- ja L2-sopimuksia vuorovaikutuksessa keskenään. Lue lisää[täältä](https://www.cairo-lang.org/docs/hello_starknet/index.html).

### Mitä StarkNet Alpha on Mainnet?

StarkNet Alpha on Mainnet tukee samanlaisia ominaisuuksia kuin tällä hetkellä saatavilla Goerli julkinen testnet.

#### **Mitä odottaa**

Koska StarkNet on edelleen kehitteillä, haluamme ottaa käyttöön valmiuksia vaiheittain ja varmistaa, että kehittäjien odotukset täytetään joka kerralla. Kaksi erityisen tärkeää näkökohtaa haluaisimme painottaa:

* **Luvat älykkään sopimuksen käyttöönottoon**: Seuraamme Optimististen Rollup -kollegojemme esittelemää järkevää soittokirjaa: aloita*luvalla*sopimuksen käyttöönottoa. Protokolla, jossa täsmennetään, miten voit pyytää älykkään sopimuksen sisällyttämistä tähän ensimmäiseen valkoiseen listaan, julkaistaan tulevina viikkoina.
* **Ei takuuta taaksepäin yhteensopivuudesta**: odotamme tulevaa siirtymistä StarkNet Alphasta StarkNet Betaan sisältäen valtion regenesin. Verkko alkaa lohkosta 0, ja sovellusten on otettava sopimukset uudelleen käyttöön. Lisäksi kehittäjien ja käyttäjien tulisi huomata, että odotettu StarkNet Beta ei ehkä ole taaksepäin yhteensopiva StarkNet Alpha, e. . kehittäjät saattavat joutua muuttamaan sopimuksiaan. On selvää, että pyrimme mahdollistamaan helpon siirtymisen sovelluksiin ja mahdollisimman vähän vaadittavia muutoksia.

#### Muita Lähin Aikaväli -Ominaisuudet

Osana StarkNet Alphan siirtymistä testnetistä Mainnet'iin, me tulemme:

1. Lisää rakentajat sopimuksiin.
2. Sen on parannettava testauskehystä.
3. Lohkojen ja tapahtumien osalta siirry ID:n käytöstä hashin käyttöön.

Aiomme jatkaa uusien ominaisuuksien käyttöönottoa säännöllisesti poljettaessa, aivan kuten olemme tehneet julkisen testnetin kohdalla. Vuonna lähitulevaisuudessa, me suunnitella seuraavat päivitykset:

1. Tilisopimukset ja Token Contracts – avaamalla tietä DeFi-sovelluksille olla yhteydessä StarkNet-sovelluksiin heidän tuntemallaan tavalla.
2. Parempi sopimustoiminnallisuus – sopimusparannusten ja tapahtumien tukeminen.
3. Warp: Alankomaiden kehittämä Solidity-to-Cairo -kääntäjä mahdollistaa sujuvan siirtymisen Solidaarisuuden älykkäistä sopimuksista StarkNet-älykkäisiin sopimuksiin.
4. Ethereum Allekirjoitukset: natiivi tuki ECDSA yli secp256k1 helpottaa integrointia olemassa lompakkoja.
5. StarkNet Full Node: Full Node avulla käyttäjät voivat osallistua verkkoon laitteiston vaatimukset par kuin Ethereum Full Node.

#### Maksu Mekanismi

Maksumekanismi otetaan käyttöön heti, kun StarkNet Alphaa lisätään tiliin ja tunnukseen perustuviin sopimuksiin.

Kaikista StarkNet-yhtiölle toimitetuista liiketoimista peritään maksu, joka on tarkoitettu kattamaan L1- ja ketjujen ulkopuoliset kustannukset. Maksu peritään aluksi ETH:stä. Yhden transaktion kustannukset pienenevät, kun StarkNet lisää skaalaa (kuten kaikissa olemassa olevissa STARKiin perustuvissa järjestelmissä). Alkuperäisten maksumekanismien laatimisessa suosimme yksinkertaisuutta hinnoitella liiketoimet tarkasti niiden käyttämien resurssien mukaan. On odotettavissa, että tätä mekanismia parannetaan ja parannetaan ajan mittaan.

Kun katseet kohti StarkNetistä tehdään kestävä verkko ja kannustetaan sen operaattoreita ja kehittäjiä, osa maksuista kerätyistä tuloista jaetaan sovelluskehittäjille ja StarkNet-ydinkehittäjille ja -kehittäjille.

#### Turvallisuus

StarkNet Alphan turvamalli Mainnetissa seuraa nykyistä mallia testnetissä:

* Jokaisen valtion siirtymän tukena on STARKin todistus, ja näin varmistetaan sen pätevyys.
* Kaikki osavaltion tiedot julkaistaan ketjussa, joten valtio on täysin rakenteellinen L1:stä.
* Siellä on yksi sekvensseri.
* Verkko päivitetään ilman minkäänlaisia viivästyksiä.

### StarkNet-ekosysteemi on kasvussa

StarkNetin avaaminen maailmaan herätti valtavan aallon kehittäjiä, jotka olivat kiinnostuneita Kairon oppimisesta ja kehittämisestä StarkNetin yli. He antoivat arvokasta palautetta, ja oli todellinen ilo nähdä eloisia keskusteluja StarkNet[Discord](https://discord.gg/uJ9HZTUk2Y).

Lisäksi StarkNet-järjestelmän kehittäjänä ovat StarkWare-tiimi ja myös eräät lohkoketjun vahvimmat tiimit, jotka ovat mukana:

* Alankomaat työskentelee parhaillaan kahden hankkeen parissa:

1. **[Warp](https://github.com/NethermindEth/warp)**: Solidity Kairon kääntäjälle

2. **[Voyager](https://voyager.online/)**: StarkNet-lohkon tutkimusmatkailija

* Open Zeppelin valmistelee[Standard Contracts](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)-toteutusta StarkNet-sovellukselle ja aloitti myös työn kehittäjän ympäristössä:[Nile](https://github.com/martriay/nile).
* ShardLabs työskentelee[StarkNet HardHat plugin](https://github.com/Shard-Labs/starknet-hardhat-plugin)ja paremman testauksen puitteissa.
* Erigon joukkue työskentelee laajentamalla niiden Ethereum Full Node tukea StarkNet (koodinimi: Fermion). He työskentelevät kanssamme StarkNetin ydinmekanismien suunnittelussa.
* Equilibrium valmistelee StarkNet Full Node -toteutusta Rustissa
* Kairon auditointipalvelut: Kairon auditointeja tehdään lähikuukausina ABDK, ConsenSys Diligence, Peckshield ja Trail of Bits.
* StarkNet-tilintarkastukset: aloitimme tarkastelemalla verkoston säätiöitä:

1. **CryptoExperts**suorittaa Kairon Solidity Verifier -tarkastuksen.
2. Virallinen**LEAN todiste**Kairo spektrien äskettäin valmistui ja julkaistiin[paperina](https://arxiv.org/abs/2109.14534)ja GitHub[repo](https://github.com/starkware-libs/formal-proofs).

Odota paljon mielenkiintoisempaa yhteistyötä julkaistaan tulevina kuukausina!

### TARKit skaalautuvat tänään

Lähestymme käynnistää StarkNet Alpha luottavaisin mielin, kuten StarkEx, meidän itsenäinen skaalaus SaaS, on osoittanut, miten STARKs voi massiivisesti mittakaavassa Ethereum sovelluksia. Aloitimme StarkExin[dYdX](https://dydx.exchange/)(ikuiset sopimukset),[DeversiFi](https://www.deversifi.com/)(spot-kauppa ja maksut), sekä[Immutoitavat](https://www.immutable.com/)ja[Sorare](https://sorare.com/)(NFT kaivostoiminta ja kauppa). Näimme niiden kaasu-/txikustannukset alenevan 100X–200X ja noin 650 kaasua/tx Validiumissa (ketjun ulkopuolinen data) ja 1100 kaasua/tx ZK-Rollupissa.

Tähän mennessä StarkEx on ratkaissut $80B kauppoja ja yli 27M tapahtumia, kaukana eclipsing mitään muuta L2 ratkaisu - ja kaikki ne yhdistettynä.

### Toimi Nyt

Ei ole koskaan ollut parempaa aikaa liittyä kasvavaan StarkNet-ekosysteemiin rakentamalla joko seuraavaa dApp tai hyödyllisiä kehittäjätyökaluja.

Kutsumme sinut osoitteeseen:

1. Liity[StarkNet Discordiin](https://discord.gg/uJ9HZTUk2Y), jossa voit tavata ja harjoittaa StarkNet-yhteisöä.
2. [Aloita oppiminen](https://www.cairo-lang.org/docs/hello_starknet/index.html)miten kirjoittaa StarkNet älykkäitä sopimuksia.
3. [DM meitä](https://twitter.com/StarkWareLtd)— tiimimme on innokas auttamaan ideoitasi ja aloitteitasi elämään.

**Päivitys (marraskuu 2021):**StarkNet Alpha elää Ethereum Mainnetissa