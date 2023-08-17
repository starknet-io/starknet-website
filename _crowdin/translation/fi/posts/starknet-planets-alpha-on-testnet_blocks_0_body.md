### **TL;DR**

* [StarkNet Planets Alpha](https://voyager.online/)— ensimmäinen askel tiellämme Mainnet — on nyt elää Testnetissä!
* [StarkNet](https://starkware.co/product/starknet/)on luvaton kääntö- täydellinen ZK-Rollup1.
* Kehittäjät voivat toteuttaa valintansa liiketoimintalogiikkaa älykkäässä sopimuksessa ja ottaa sen käyttöön StarkNetissa.
* StarkNetin osavaltion siirtymät ovat todistettu ketjun ulkopuolisiksi ja todennetut ketjussa.
* Kuten Ethereum, käyttäjät voivat olla suoraan vuorovaikutuksessa näiden älykkäiden sopimusten kanssa.

### **Johdanto**

Ilmoitimme[](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)[StarkNet](https://starkware.co/product/starknet/)-tiekartan tammikuussa 2021. Graalin skaalautuvuusratkaisut tukisivat i) mielivaltaisia älykkäitä sopimuksia, ii) kompostoitavuutta, iii) toimivat hajautetun verkon kautta. Tänään ilmoitamme käyttöönoton testnet vaihe 1: StarkNet Planets Alpha. Alpha järjestelmä tukee mielivaltaisia älykkäitä sopimuksia. Myöhemmin tänä vuonna tuetaan säveltämistä, jonka jälkeen hajauttaminen jatkuu.

On erittäin tärkeää, että toimimme täysin avoimesti ja asetamme odotukset asianmukaisesti. Tämän julkaisun tarkoituksena on luetella selkeästi, mitä on jo tuettu, ja mitä toimintoja vielä puuttuu. Tänään julkaisemme Work in Progress on testnet. Uskomme, että tämä varhainen julkaiseminen auttaa luomaan terveellisen ekosysteemin StarkNet-järjestelmän ja sen työkalujen ympärille. Olemme innokkaita ottamaan kehittäjät mukaan verkoston rakentamiseen kanssamme ja saamaan jatkuvaa palautetta yhteisöltä.

### **Mitä StarkNet Planets Alpha?**

**Toiminnallisuus:**Alpha sallii kehittäjien kirjoittaa ja ottaa käyttöön StarkNet-sopimuksia yleisestä laskennasta. Ei ole valkoista - kuka tahansa kehittäjä voi kirjoittaa ja ottaa käyttöön mitä tahansa sopimusta he haluavat. Käyttäjät voivat olla vuorovaikutuksessa näiden sopimusten kanssa lähettämällä niille tapahtumia ja tarkastamalla niiden tilan. Kaikki sopimukset ovat olemassa yhdessä valtiossa2. Päivitykset tähän tilaan ovat todistettu ketjun ulkopuolella, ja todennettu ketjun - Alpha, todentaminen tehdään testnet .

**StarkNet OS:**Edellä olevaa toimintoa tukee uusi ”käyttöjärjestelmä”, jota kutsumme StarkNet OS:ksi. Se tarjoaa*todistettavissa*valtion siirtymiä StarkNetissa. Ethereum kehittäjät voivat ajatella sitä vastaavaksi EVM: se on vastuussa vedota älykäs sopimustoimintoja, käsittely sopimusten varastointiin jne. Julkaisemme erillisen postin, jossa kerrotaan StarkNet OS:n arkkitehtuurista.

**Mitä ei ole Alpha?**Alpha puuttuu vielä joitakin avaimia, kuten L1<>L2 vuorovaikutus, on-chain data ja säveltettävyys. Lisää näistä jäljempänä.

#### **Saada Jalkojen Märkä**

Aloita meidän[opetusohjelma ja dokumentaatio](https://www.cairo-lang.org/docs/hello_starknet/).

Sitten voit lukea[näytteen AMM älykäs sopimus](http://cairo-lang.org/docs/hello_starknet/amm.html)olemme kirjoittaneet ja ottaneet käyttöön StarkNetissa. Se on yksinkertainen AMM, ja voit olla vuorovaikutuksessa sen kanssa[täällä](https://starkware-amm-demo.netlify.app/swap). Olet nyt valmis kirjoittamaan ja ottamaan käyttöön älykkäitä sopimuksia StarkNetissa. StarkNet –[Voyager](https://voyager.online/)-lohkon tutkimusmatkailija sallii kenen tahansa tarkastaa StarkNetin tilan.\
Asettumalla jalat märkäksi uskomme, että olet paremmin valmistautunut rakentamaan StarkNetiä, kun jatkamme uusien ominaisuuksien käyttöönottoa. Olemme jo kiireisiä suunnittelemassa ensimmäistä hackathonia sekä työpajoja kehittäjille.

### **Seuraavat vaiheet StarkNetissä**

Keskeiset kyvyt vielä puuttuu Alpha tullaan ottamaan käyttöön alkaen tulevina viikkoina. Ne ovat:

* L1<>L2 Vuorovaikutus, esim. kyky tallettaa ja nostaa varoja L1:een.
* Ketjun sisäiset tiedot: kaikkien varastojen muutosten julkaiseminen Ethereumissa.
* Composability: mahdollistaa sopimusten kommunikoinnin keskenään.

Näiden ominaisuuksien kanssa, olemme valmiita tuomaan StarkNet Ethereum Mainnet. Kutsumme tätä askelta StarkNetin evoluutiotesteissä, ja kun saavutamme sen, voit rakentaa ja luvattomasti ottaa käyttöön Ethereum Mainnet skaalautuva L2 dApps.

#### **Starknetin Ekosysteemi**

Olemme erittäin innoissamme ekosysteemistä, joka muodostaa StarkNetin, joten pysähdymme kiittämään yhteistyökumppaneitamme tähän mennessä.

Teemme läheistä yhteistyötä[Nethermind](https://twitter.com/nethermindeth)ja Nubia tiimin kanssa,[Alexey Akhunov](https://twitter.com/realLedgerwatch)(Erigon) &[Igor Mandrigin](https://twitter.com/mandrigin)(yhdyskäytävä. m),[Iddo Bentov](https://www.cs.cornell.edu/~iddo/),[dOrg](https://twitter.com/dOrg_tech),[Prof. Tim Roughgarden](https://twitter.com/algo_class),[Prof. Jeremy Avigad](https://www.andrew.cmu.edu/user/avigad/)& Yoav Seginer, viimeisenä mutta ei vähiten —[Paradigma](https://twitter.com/paradigm)joukkue.\
Varhaiset kumppanimme —[dYdX](https://twitter.com/dydxprotocol),[Immutable](https://twitter.com/Immutable),[DeversiFi](https://twitter.com/deversifi), sekä[Sorare](https://twitter.com/SorareHQ),[Celer](https://twitter.com/CelerNetwork)ja muut – ovat antaneet meille korvaamattoman panoksen päivästä yksi, ja anna meidän rakentaa tuotanto-laatuinen verkko todellisia käyttäjiä.\
Olemme edelleen hämmästyneitä yhteisön luoman sisällön laadusta, esimerkiksi[Bobbin Threadbare](https://twitter.com/bobbinth),[Daniel Kroni](https://github.com/danielkroeni/cairo-playground/blob/main/anon-bank/README.md),[Adrian Hamelink](https://twitter.com/adr1anh),[perama](https://twitter.com/eth_worm),[Francesco Ceccon](https://twitter.com/ceccon_me),[Ilian Malchev](http://twitter.com/imalchev), ja[Aleksandria joukkue](https://blockchainpartner.fr/).

Olemme innokkaita näkemään, mitä yhteisö luo kaikilla rintamilla: kehittäjien työkaluilla, sisällöllä ja tietenkin StarkNet-sovelluksilla, joita ne rakentavat. Let's keep the discussion going in your favorite media of choice:[discord](https://discord.gg/uJ9HZTUk2Y),[Twitter](https://twitter.com/CairoLang),[email](mailto:info@starkware.co), ja pian käyttämällä hajautetuin viestintälomakkeet: f2f.

1 Me emme ole termin ZK-Rollup faneja, sillä — matemaattisesti puhuvina — se ei ole nollatietoa, mutta te kaikki tiedätte, mitä tarkoitamme

2 Toisin kuin erillisessä tilassa, jota ylläpidetään nykyisissä StarkEx-lähetyksissä Mainnetissa

**Päivitys (marraskuu 2021):**StarkNet Alpha elää Ethereum Mainnetissa