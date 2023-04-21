### TL;DR

* StarkNet tukee nyt säveltettävyyttä, joka on StarkNetin konstellaationvaiheen päätoiminto.
* Olemme julkaisemassa testauskehyksen StarkNetille — kehittäjät voivat nyt testata sopimuksiaan paikallisesti ja tehokkaasti.
* Tämä julkaisu sisältää useita merkittäviä suorituskyvyn parannuksia, kuten tuki Merkle-Patricia Tries ja sisäänrakennettu bitwise toimintaa.
* Ekosysteemin etu:

1. **Standardoidut Sopimukset**: OpenZeppelin kehittää standardoituja sopimuksia StarkNet, kuten he tekivät Ethereum!
2. **EVM->Kairo Compiler**: Warp-tiimi @ Nethermind osoitti ERC-20 Solidity code to StarkNet contracts

### Tausta

StarkNet on luvaton hajautettu Validity-Rollup (eli ZK-Rollup). Olemme ilmoittaneet[etenemissuunnitelmasta](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)vuoden alussa. The[Alpha](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), käynnissä julkisella Ethereum testnet , tukee jo älykkäiden sopimusten käyttöoikeutta liiketoimintalogiikan täytäntöönpanossa L1<>L2-viesti- ja on-chain -datan avulla. Lisäksi sen avulla kuka tahansa käyttäjä voi lähettää tapahtumia verkkoon luvattomasti, Ethereum-tyyliin.

Tämä julkaisu: StarkNet Alpha 2 sisältää ydinominaisuuden, jonka avulla voimme edetä planeetalta konstellaatioille: kompostoida käyttöön otettujen älykkäiden sopimusten välillä.

### Ominaisuudet

StarkNet Alpha 2 esittelee seuraavat ominaisuudet:

* **Composability:**StarkNet Alpha tukee nyt älykkäiden sopimusten välistä vuorovaikutusta – ennen aikataulua! Tämän päivityksen kauneus on, että kehittäjät voivat odottaa lähes samaa kokemusta kuin Ethereum; puhelut ovat synkronisia ja niitä voidaan käyttää funktiopuheluina. Odotamme innokkaasti uusia sovelluksia, jotka hyötyvät sekä rajattomasta laskennallisesta mittakaavasta että sopimuskompostoinnista, kuten StarkNetin vapauttama. Ymmärtääksesi miten tätä ominaisuutta käytetään, voit aloittaa seuraamalla tätä[opetusohjelmaa](https://www.cairo-lang.org/docs/hello_starknet/calling_contracts.html). Haluaisimme kuulla palautteesi ja nähdä, mitä olet rakentamassa[StarkNet discord](https://discord.gg/uJ9HZTUk2Y).
* **Paikallinen testauskehys:**sinä kysyit, ja me toimitimme –[paremman testauskehyksen](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/starknet/testing). Näin kehittäjät voivat nopeuttaa dApp kehitystään testaamalla StarkNet-sopimuksen käyttöönottoa ja vuorovaikutusta paikallisesti – ilman ulkoisia riippuvuussuhteita. Tämä versio sisältää vain L2-interaktio, seuraavat versiot laajentavat toiminnallisuutta ja helppokäyttöisyyttä. Tarkista opetusohjelma[täältä](https://www.cairo-lang.org/docs/hello_starknet/unit_tests.html), ja haluaisimme kuulla palautetta tuosta ominaisuudesta.
* **Suorituskyvyn Parannukset:**

**Patricia Trees:**olemme parantaneet StarkNetin suunnittelua tukeaksemme korkeampia tuotantovaiheita ja lyhyempää tuotantoaikaa siirtymällä Merkle-Patricia Tree state -sitoumukseen ([dokumentaatio](https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/cairo/common/patricia_utils.py)). Tämä muutos mahdollistaa paljon suurempien lohkojen luomisen ja alentaa näin transaktiokohtaisia kustannuksia. Siirtyminen pidemmälle kehitettyyn valtion sitoumukseen mahdollisti Kairo, ZKP-kieli, joka on StarkNet-käyttöjärjestelmän ydin. Tämä on myös yksi StarkNet-käyttöjärjestelmän keskeisistä osista.

**Bitwise Operations:**olemme lisänneet[sisäänrakennetun](https://www.cairo-lang.org/docs/how_cairo_works/builtins.html)tukemaan paljon tehokkaampia bitwise operations in StarkNet contracts ([documentation](https://www.cairo-lang.org/docs/reference/common_library.html#common-library-bitwise)).

* **Goerli:**StarkNet siirtyy Ropsten[Goerli](https://goerli.etherscan.io/address/0xee02F29aE9A4988aE064940bF11954d6eafE26Ac)! Vihdoinkin olemme vapauttaneet järjestelmämme Ropsten Jumalan ohdakkeista. Alpha 2 toimii nyt vakaamman kehitysympäristön vallitessa.

### Ekosysteemi

StarkNet-ekosysteemi kasvaa jatkuvasti, ja olemme iloisia voidessamme jakaa uutisia:

* **Standardoidut sopimukset**: Meillä on kunnia työskennellä OpenZeppelinin kanssa StarkNetin vakio-sopimuskirjastossa. Heidän kanoninen työnsä Ethereumin standardisoiduilla sopimuksilla palvelee meitä päivittäin, ja luotamme siihen, että ne ovat yhtä vaikuttavia täällä.
* **EVM->Kairo Compiler**: Nethermind’s Warp team[osoitti](https://medium.com/nethermind-eth/warp-your-way-to-starknet-ddd6856875e0)ERC-20-sopimuksen muuntamista EVM bytecode -järjestelmästä StarkNet-sopimukseen ja sen käyttöönottoa StarkNet-sovelluksessa. Tämä työ etenee nopeasti, ja seuraava tavoitteemme on mielivaltaisten älykkäiden sopimusten tekeminen Yulistä Kairoon.
* **Maker-on-StarkNet**: a[ehdotus](https://forum.makerdao.com/t/mip39c2-sp19-adding-the-starknet-engineering-core-unit-sne-001/9745)lähetettiin Maker DAO toteuttaa Maker protokollan StarkNetin kautta. Ensimmäinen vaihe ehdottaa DAI silta Ethereum StarkNet kanssa minting DAI StarkNet seurata.
* **StarkNet/Cairo Auditing Services**: Otamme mukaan useita tilintarkastusyhteisöjä tarjoamaan StarkNet-älykkäitä sopimus- ja Kairo ohjelmia tilintarkastuspalveluita.

### Mainnet Kulman ympärillä

Olemme valmistautumassa StarkNet Alpha Mainnet lanseeraukseen, joka alkaa vähitellen sallituilla sovelluksilla. Useita hankkeita on käynnissä, ja niitä lisätään aktiivisemmin tähän päivään mennessä. Voit liittyä juhliin, olet kutsuttu tavoittamaan kautta[discord](https://discord.gg/uJ9HZTUk2Y).

**Päivitys (marraskuu 2021):**StarkNet Alpha elää Ethereum Mainnetissa