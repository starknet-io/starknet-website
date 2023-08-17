### TL;DR

* Alpha elää Mainnetissa
* Se tukee yleistä laskentaa ja kompostoitavuutta
* Nopeasti kasvava yhteisö, työkalujen ja sovellusten kehittäminen
* Muita ominaisuuksia, jotka on tarkoitus ottaa käyttöön jatkuvasti tulevina viikkoina
* Vastuuvapauslauseke: tämä on Alpha versio (lue hieno tulostus alla)

### Johdanto

StarkNet Alpha käynnistää tänään Ethereum Mainnet!

StarkNet on luvassa oleva hajautettu Rollup joka toimii L2-verkostona Ethereumin yli. StarkNet sallii minkä tahansa dApp saavuttaa rajattoman mittakaavan sen laskennassa vaarantamatta Ethereumin säveltettävyyttä ja turvallisuutta, koska se on riippuvainen turvallisimmasta ja skaalautuvimmasta kryptografisesta suojausjärjestelmästä —[STARK](https://starkware.co/stark/). StarkNet on rakennettu[Kairon](https://starkware.co/cairo/)ohjelmointikielelle, ensimmäiselle tuotannolle Turing-täydellinen von-Neumannin todentaja Ethereumille. Sekä Kairo että STARK kehittivät StarkWarea talon sisällä, ja ne ovat käyttäneet kaikkia tuotantoluokan sovelluksiamme. jotka ovat maksaneet yli 50M txs ja 250B dollaria kesä 2020 lähtien.

StarkNet Alpha mahdollistaa muun muassa kompostoitavuutta tukevat yleiset älykkäät sopimukset sekä muiden StarkNet-sopimusten että L1<>L2-viestien avulla L1-sopimuksilla. StarkNet Alpha toimii Rollup-tilassa, mikä tarkoittaa, että kaikki valtion diff tiedot lähetetään ketjulla.

Jo tammikuussa, jaimme Starknetin[etenemissuunnitelman](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880). Kesäkuussa StarkNet Alpha meni suorana julkisella testnettillä, ja sitä on päivitetty jatkuvasti uusilla ominaisuuksilla. Olemme iloisia ollessamme aikataulun edellä, kiitos osittain siitä, että luotamme tuotantoluokkaamme taistelujen koventavaan STARK/Kairo -ohjelmistopinoon.

### Miten sinun pitäisi käsitellä StarkNet Alpha?

Ensinnäkin, hyvin huolellisesti, koska “Alfa” etiketti on olemassa syystä. Odotetaan muutoksia, korjauksia ja parannuksia eteenpäin. StarkNet Alpha on vielä tarkastettava, ja voimme lykätä tällaisen tarkastuksen kunnes verkosto kypsyy joitakin lisää (lue vastuuvapauslauseke lopussa tämän viran lisätietoja).

Yleisesti ottaen seuraamme varovaista ja järkevää tietä, jonka Optimistiset Rollup -kollegamme määrittelevät. Arbitrum ja Optimism: käynnistää verkon yhdellä sekvensserillä ja sallittujen listojen sovelluksia, jotta niiden kehittäjät ymmärtävät niihin liittyvät riskit. Olemme edelleen täysin sitoutuneita StarkNetin täydelliseen hajauttamiseen.

Ja miten sinun pitäisi kohdella StarkNet Alpha: n talous? Alpha alkaa ilman maksuja. Seuraava päivitys, vain muutaman viikon päässä, ottaa käyttöön maksumekanismin — jaamme lisää yksityiskohtia erillisessä postitse.

### Aloita Rakennus

Kutsumme sinut aloittamaan omien sovelluksiesi kirjoittamisen StarkNetissä joko tarkistamalla (uusi!) [sivusto](http://starknet.io/), tai hyppäämällä suoraan[opetusohjelma](https://starknet.io/docs/).

Jos olet valmis ottamaan käyttöön, seuraa tätä[perehdytysprosessia](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu); luotu varmistamaan, että kaikki kehittäjät ovat hyvin tietoisia alustava tila järjestelmän.

### Ekosysteemi

Viimeisten parin kuukauden aikana olemme nähneet hämmästyttävää kasvua StarkNet-yhteisön koossa ja toiminnassa, joka kokoontuu[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y). Kymmenet kehittäjät – ryhmät ja yksilöt – koko lohkoketjun ekosysteemissä edistävät tätä pyrkimystä. (Katso vastuuvapauslauseke tämän viestin lopussa)

#### Kehittäjän Työkalut

* OpenZeppelin määrittelee vakiosopimukset. Heidän[repo](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)ja[keskustelut](https://github.com/OpenZeppelin/cairo-contracts/discussions)kannattaa seurata
* Alankomaiden kehittämä[Warp](https://github.com/NethermindEth/warp)Solidaarisuus–>Kairo transpiler,
* Shard Labs’[HardHat plugin](https://github.com/Shard-Labs/starknet-hardhat-plugin)ja[StarkNet Devnet](https://github.com/Shard-Labs/starknet-devnet)
* Argent kehittää työkaluja, mukaan lukien sen yhteinen ponnistus StarkNet.js, rinnalla[Sean Han](https://twitter.com/seanjameshan), sen luoja

#### Infrastruktuuri

**Lohkon tutkimusmatkailija**:

* [The Voyager](http://voyager.online/)-projekti Hollannissa
* [Eth.tx](https://ethtx.info/)tarjoaa tukianalyysin ja yksityiskohtaisen näkymän StarkNet-tapahtumista

**Full solmut**: kaksi pyrkimystä käynnissä: toinen on Fermion hanke johtaa Erigon, toinen on[Pathfinder](https://github.com/eqlabs/pathfinder)-hanke, jota johtaa Equilibrium

**Lompakot**:

* [ArgentiX](https://github.com/argentlabs/argent-x)on Argentin kehittämä selainlaajennus, joka on jo saatavilla devsille
* Torus-avainten hallintaratkaisu on StarkNet valmis
* Ledger kehittää natiivi StarkNet-sovellusta; se tulee saataville ennen vuoden loppua

**Kairon auditoinnit**: ConsenSys Diligence, Trail of Bits, Peckshield ja ABDK tekevät joko jo Kairon auditointeja tai aloitetaan pian

**API Palvelut**: sen jälkeen kun StarkNet koko solmun on saatavilla, API-palvelut tarjoavat Figment, Chainstack ja Infura

**Indexer**: Teemme työtä integroidaksemme TheGraph työskennellä StarkNetin kanssa yhdessä Figment tiimin kanssa

### Edessä Oleva Tie

Tulevien viikkojen ja kuukausien aikana me parannamme Alfaa, jossa on seuraavat valmiudet:

* Sopimuksen päivittämismekanismi
* Maksu Mekanismi
* Tapahtumat
* Puuttuvien järjestelmäpuhelujen lisääminen (get_block_number, get_block_timestamp, ja enemmän)
* Lyijyn luuston versio
* Ja paljon muuta …

Jotta näitä ponnisteluja voitaisiin seurata jatkuvasti, katso erityispiirteiden[alustava etenemissuunnitelma](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51).

Jatkamme edelleen investointeja aktiiviseen tutkimukseen useilla rintamilla (tule mukaan[Shamans](https://community.starknet.io/)ponnistuksiin):

* Hajauttaminen
* Skaalaus
* Tietojen saatavuus
* Lupaa vailla oleva kannustus

### Toimintopuhelu

* Aloita sopimusten kirjoittaminen luvattomasta StarkNet testnet Goerli
* Liity[StarkNet Discordiin](https://discord.gg/uJ9HZTUk2Y)
* Liity yhteisön puheluihin
* Osallistu ensimmäiseen[StarkNet Ecosystem Summit](https://www.eventbrite.com/e/starknet-ecosystem-summit-2022-tickets-206671880157)(27. - 28. tammikuuta 2022, Stanford CA)
* Liity[StarkNet Shamansiin](https://community.starknet.io/)syvempään sukellukseen tutkimushaasteisiin

### Vastuuvapauslauseke

***StarkNet Alpha on uusi ja monimutkainen järjestelmä, jota ei ole täysin tarkastettu. Kuten kaikki monimutkaiset ohjelmistojärjestelmät, StarkNet-järjestelmä voi sisältää vikoja, jotka äärimmäisissä tapauksissa voivat johtaa kaikkien varojesi menettämiseen. Joten,***juoksee huolellisesti ja varo!******

*StarkNet-ekosysteemi on suuri ja nopeasti kasvava joukko itsenäisiä tiimejä ja yksilöitä, joista StarkWarella ei ole minkäänlaista valvontaa eikä se ota vastuuta. Jokaiseen ekosysteemin jäsenten kehittämiin hankkeisiin voi sisältyä vikoja, jotka äärimmäisissä tapauksissa voivat johtaa kaikkien varojesi menetykseen. Kun lisäksi otetaan käyttöön älykkäitä sopimuksia, mahdollisuudet tahattomiin haitallisiin vikoihin ja jopa ilkivaltaisiin huijauksiin ja mattovetoihin lisääntyvät. Joten kohdella kaikkia älykkäitä sopimuksia StarkNet kuin kohdella älykkäitä sopimuksia Ethereum, ja käyttää vain niitä, jotka sinulla on hyvä syy luottaa turvallisesti.*