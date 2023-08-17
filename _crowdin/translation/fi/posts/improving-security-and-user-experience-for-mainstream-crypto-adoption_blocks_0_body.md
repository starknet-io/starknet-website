Teknologinen innovaatio lohkoketjussa on kukoistanut viime vuosina – STARKs, SNARKs, EIP-1559, Ethereum Merge – ovat kaikki valtavia teknologisia saavutuksia. UX- ja UI-suunnittelu eivät kuitenkaan ole pysyneet entisellään. Ihmiset juuttuvat yhä 16-sanan siemenlauseisiin, ja ilman keskitettyä välittäjää joutuminen Defiin on edelleen liian pelottavaa monille. Ottaa seuraava miljardi käyttäjää Web3, parantaa käyttäjän perehdytys kokemus on kriittinen.

Kuten FTX osoitti (ja Gemini, Celsius ja Mt. Gox), säilyttää itse säilytys oman omaisuuden on ratkaisevan tärkeää. Kuitenkin viime aikoihin asti omaehtoiset lompakot ovat olleet pakkomielteisiä ja hämmentäviä keskivertokäyttäjille. Useimmat ihmiset unohtavat Web2 salasanat kuukausittain; miten käyttäjien odotetaan pitävän heidän seed phrase ja yksityiset avaimet turvallisia ikuisuutta?

Yksinkertaisesti sanottuna, se on turvallisuus painajainen. Kuten olemme nähneet lukemattomia kertoja, yksi väärä siirto, olipa se aloitettu huonojen toimijoiden tai huolimattomuuden, voi johtaa miljoonien dollarien menetykseen.

Ensimmäisenä yhteyspisteenä uusille kryptokäyttäjille, Ethereum lompakojen on oltava helppokäyttöisiä, turvallisia ja muokattavissa kunkin käyttäjän tarpeiden mukaan. Tämä edellyttää kehittäjät integroida yksinkertaisuus Web2 rahoitustuotteiden kanssa ominaisuuksia Web3.

Tämä on juuri sitä, mitä tilinpäätöksen abstraktilla saavutetaan.

Tilin abstraktio parantaa omatoimisten lompakkotuotteiden turvallisuutta ja turvallisuutta poistamalla käyttäjien riippuvuuden yksityisestä avaimesta ja tekemällä lompakoista ohjelmoitavampia. Parannetun UX:n avulla muut lompakot kuin omaisuudenhoitajat voivat lopulta skaalata miljoonat valtavirran salauskäyttäjät.

Mutta täysin ymmärtää vaikutuksia tilien abstraktio, meidän on virkistää itseämme siitä, miten Ethereum tilit toimivat.

### Perusteet Ethereum tilien

On olemassa kahdenlaisia Ethereum tilejä:

1. Ulkomaiset Omistustilit (EOA)
2. Sopimustilit (CA)

Rikkotaan jokainen alas hieman pidemmälle.

### Ulkomaan omistuksessa olevat tilit

Ulkopuolisesti omistamat tilit, kuten MetaMask ja Coinbase Wallet, ovat tyypillisiä Ethereum käyttäjille. Jokainen EOA koostuu yksityisestä ja julkisesta avaimesta, jota kutsutaan avainpariksi.

Kaikki tapahtumat on valtuutettu ja allekirjoitettu yksityisillä avaimilla. Kun tapahtuma on allekirjoitettu, EVM tarkistaa, että allekirjoitus on voimassa EOA:n tiliosoitetta käyttäen. EVM:n kovalla koodattu logiikka tarkoittaa sitä, että tili (kohde jolla on tunnisteitasi) ja yksityinen avain (allekirjoittaja) kytketään yhteen.

Yksityisen avaimen menettäminen tarkoittaa lopullisesti varojen menettämistä tai jopa tilin hallintaa.

### Sopimuksen tilit

Samaan aikaan sopimustilit, synonyymi tilin abstraktio, ovat älykkäitä sopimuksia otetaan käyttöön Ethereum blockchain. Nämä sopimukset ovat käytännesääntöjen mukaisia eivätkä vaadi yksityisiä avaimia. Toisin kuin EOA:t, sopimustilit eivät voi käynnistää tapahtumia. Sen sijaan niiden liiketoimet laukeavat eurooppalaisten standardointielinten ohjeet.

### Miksi tilin abstraktilla on merkitystä

Tilin abstraktioon sisältyy kovalla koodilla varustetun valtuutuslogiikan käyttö pois eurooppalaisista standardointielimistä, kääntämällä jokainen tili ohjelmoitava älykäs sopimus, joka voidaan räätälöidä vastaamaan yksilöiden tarpeisiin.

Kuten Argent yhdessä perustaja ja Chief Science Officer Julien Niset viime[Stark @ Home event](https://www.crowdcast.io/e/7olimxqv), tämä joustava valtuutuksen logiikka antaa kehittäjille vapauden pelata ympäri tiliominaisuuksia, kuten…

**Laitteiston allekirjoittajat:**Käyttämällä iPhonea tai Androidin suojattua erillisaluetta muuttaaksesi minkä tahansa älypuhelimen laitteistolompakkoksi. Sieltä käyttäjät voivat tarkistaa tapahtumat biometrisillä tiedoilla, kuten sormenjälkillä tai Apple Face ID:llä. Olemme jo alkaneet nähdä omia lompakkoja, kuten Braavos[roll out this feature.](https://medium.com/@braavos_starknet_wallet/hardware-signer-the-last-innovation-for-wallet-crypto-everyday-users-7e1974f93944)

**Paymasters:**Käyttäjät voivat maksaa kaasumaksuja mihin hyvänsä, tai heillä on jopa kolmannen osapuolen suunnittelema mekanismi, joka maksaa maksutapahtumista.

**Sosiaalinen palautus:**Jos yksityinen avain on kadonnut tai vaarantunut, käyttäjät voivat valtuuttaa uuden avaimen lailliseksi lompakon omistajaksi. Tämä voi sisältää erilaisia palautusmenetelmiä luotetut yhteystiedot, laitteiston lompakot tai kolmannen osapuolen palvelut. Ideana on tehdä takaisin pääsy tilillesi yhtä helppoa kuin palauttaa pankkitilin salasanan sähköpostitse.

**Multifactor Authentication:**Samanlainen kuin tavallinen Web2 2FA käytäntöjä, käyttäjät voivat määrittää kaksi (tai useampaa) autentikointimenetelmää salauslompakkoihinsa, jos tapahtuma on allekirjoitettu vasta, kun käyttäjä vahvistaa hyväksynnän toisella vaihtoehdolla, kuten sähköpostilla tai tekstiviestillä. Käyttäjät voivat myös asettaa päivittäisiä siirtorajoja tai listoja tiliosoitteista, joista lompakko on automaattisesti estetty vuorovaikutukselta.

**Quantum Resistant ja Gas-Efficient Signatures:**Ethereumin nykyinen allekirjoitusjärjestelmä, ECDSA, on laskennallisesti laaja (luku: korkeammat kaasumaksut) ja se voidaan rikkoa kvanttitietokoneilla. Allekirjoituksen abstraktilla erilaiset tilisopimukset käyttävät tehokkaampia ja kvanttisuojattuja allekirjoitusjärjestelmiä. StarkNet käyttää omaa STARK-ystävällistä käyräänsä.

Nämä ominaisuudet eivät ainoastaan tarjoa käyttäjille parempaa turvallisuutta ja joustavuutta, vaan mikä vielä tärkeämpää, johtavat paljon**parempaan**käyttökokemukseen.

Luetellut Vitalik Buterin kuin “pitkäaikainen unelma” Ethereum kehittäjä yhteisö, innovaatioita ympäri tilitietojen abstraktio, lähinnä EIP-2938 ja EIP-3074, ovat pyörittäneet vuodesta 2020. Kumpikin kuitenkin vaati kompromisseja turvallisuuden ja täytäntöönpanon osalta. [EIP-4337](https://github.com/ethereum/EIPs/blob/3fd65b1a782912bfc18cb975c62c55f733c7c96e/EIPS/eip-4337.md), lupaavin kehitys tähän mennessä ehdottaa versio tilin abstraktio ilman muutoksia Ethereum protokolla.

### **Tilin vedenotto ja Starknet**

Toisin kuin Bitcoin ja Ethereum jotka jälkiasentavat niiden nykyiset protokollat tukemaan tilin abstraktio,[StarkNet](https://starkware.co/starknet/)on ottanut käyttöön tilin abstraktio vuodesta yksi. Kun yhdistettynä STARK-näyttöjemme skaalautuvuuteen ja ominaisuuksiin, lompakon innovaatioiden mahdollisuudet ovat rajattomat. Tästä syystä seuraavan sukupolven omavaraisuuden lompakkoja, kuten Argent ja Braavos, rakennetaan parhaillaan verkkomme päälle.

StarkNetin lähestymistapa on samanlainen kuin EIP-4337,[myöntää, että](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781)täydellinen tilin abstraktio johtaisi silti sekavaan UX:iin ja[voisi avata oven](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4337.md#rationale)sekvensseihin kohdistuville hyökkäyksille. Pikemminkin sillä pyritään saamaan aikaan sekä allekirjoitusten abstraktio että maksujen abstraktio yhdistämällä osa tarvittavista infrastruktuuriin ja sen ulkopuoliseen infrastruktuuriin.

Ja vaikka on vielä paljon enemmän työtä, huomioon abstraktio on saamassa vetovoimaa yli pienen ympyrän crypto alkuasukkaat. Joulukuussa[Visa ehdotti ajatusta](https://www.coindesk.com/tech/2023/01/11/ethereum-upgrade-could-make-it-harder-to-lose-all-your-crypto/)tilin abstraktin käyttämisestä StarkNetin automaattisten toistuvien maksujen perustamiseen. Käyttämällä siirrettävää tiliä käyttäjät voivat myöntää luvan maksun aloittamiseen ennalta hyväksytylle älykkäälle sopimukselle. Sieltä käsin toimiva sopimus ohjelmoidaan siten, että se vähentää tietyn maksumäärän tiettynä päivänä, tietyn ajan kuluessa. Vaikka Visa ei ole vielä paljastanut suunnitelmiaan omille palveluilleen, kiinnostus puhuu yksin, ja voi ennakoida maailmaa, jossa big-tech tilausalustojen, kuten Netflix ja Spotify voisivat omaksua krypto-adoptio.

Mitä tulee tulevaisuuteen, vain aika näyttää. Yksi asia on kuitenkin varma. Tekemällä lompakot helpommiksi ja turvallisiksi käyttää, tilin abstraktio toimii tehokkaana katalysaattorina omatoimiselle lohkoketjujen lompakoille, jotka mittaavat miljoonia valtavirran salausta käyttäjiä. Me jatkamme rakentamista sillä välin.