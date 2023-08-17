## TL;DR

* Starknet alfa v0.11.0 on ulkona ja elää Testnet
* Nyt voit ottaa käyttöön ja olla vuorovaikutuksessa Kairo 1.0 -sopimuksen kanssa Starknet Testnetissä!
* Laskenta Starknetissa on 5x halvempaa!
* Ensimmäistä kertaa Mainnet päivittää Starknet alpha v0.11.0 toimitetaan hallituksen äänestykseen
* Tämä merkitsee siirtymäajan alkua ennen[Regenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)
* Toteutetaan Kairo 1. Sopimukset Mainnetissa ovat käytössä vasta muutaman viikon kuluttua Testnetin käytöstä, kun varmistamme uuden järjestelmän sujuvan moitteettomasti.

## Johdanto

Olemme innoissamme ilmoittaa, että paljon odotettu Starknet alfa v0.11.0 on suorana lähetyksenä Testnetissä! Miksi tämä on suuri askel Starknetissa? Starknetissa v0.11.0 voit ilmoittaa, ottaa käyttöön ja ajaa[Kairo 1.0](https://medium.com/starkware/cairo-1-0-is-here-7e1ac8377038)älykkäitä sopimuksia. Otamme käyttöön myös uuden järjestelmän, joka mahdollistaa nykyisten sopimusten sujuvan siirtymisen Kairossa 1.0:n täytäntöönpanoon.

Kairo 1.0 parantaa Starknettia kahdella eri tavalla. Ensinnäkin se parantaa kehityskokemusta tarjoamalla rikkaamman ohjelmointikielen, joka tuo Kairolle (muun muassa) tyyppejä/geneerisiä ominaisuuksia/virheiden käsittelyä. Toiseksi Kairo 1.0 on avainasemassa Starknet'n hajauttamismatkalla: Kairo 1.0 -sopimus lähetettiin Starknet-alpha v0.11.0 yhdistettynä Sierraan. Sierra takaa, että jokainen sopimustoteutus on todistettavissa, mikä on keskeinen ominaisuus hajautetussa Starknetissa.

Toinen tärkeä parannus, joka on tulossa tässä versiossa on 5x kustannusten vähentäminen laskenta. Tämä tekee Starknetista entistä ystävällisemmän tietokoneellisesti intensiivisille sovelluksille. Lisätietoja jäljempänä.

## Valmistautuminen Regenesis-valmisteeseen

Starknet alfa v0.11.0 merkitsee alkua Siirtymäkauden ajan, joka mahdollistaa valmistelun ennen Starknet n Regenesis. Starknet'n Regenesis-suunnitelma[julkaistiin](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)muutama kuukausi sitten, ja siinä keskitytään siirtymiseen Kairo 0 -järjestelmään perustuvasta järjestelmästä Kairo 1,0 -järjestelmään perustuvaan järjestelmään.

Siirtymäkauden aikana, olemassa olevat Kairo 0 sopimukset (jos ne päivitetään) on mahdollisuus ylläpitää osoitteensa ja varastoinnin, ja siirtyvät saumattomasti niiden täytäntöönpanoon Kairo 1:een. (ks. seuraava jakso).

Starknet-käyttäjänä tämä tarkoittaa, että sinun tarvitsee päivittää lompakkoa vain kun uusi Kairo 1. tilin toteutus on julkaistu (voit tehdä sen milloin tahansa jopa Regenesis itse). Mitään seisokkeja ei ole odotettavissa, kaikki järjestelmän kartat toimivat edelleen tavalliseen tapaan.

Regenesisin jälkeen Starknet lopettaa muiden Kairo 0 -sopimusten tukemisen koko järjestelmässä. Tästä tiedotetaan hyvissä ajoin etukäteen, ja kehittäjille annetaan riittävästi aikaa muuttaa sopimuksia. Siirtymäkauden odotetaan kestävän muutama kuukausi, ja sopeutumisprosessin kehittäjät voivat jo alkaa muuttaa täytäntöönpanoaan Kairo 1.0:een. Lopussa Siirtymäkauden aikana, Regenesis tulee tapahtumaan.

## Pehmeä siirtyminen Kairoon 1,0

Kairo 1.0:een siirtymisen myötä olemassa olevat Kairo 0 -sopimukset ovat vanhentuneet, eikä niitä enää tueta Regenesis-ohjelman yhteydessä. Jotta päivitettävät Kairo 0 -sopimukset voisivat jatkaa toimintaansa, myös Regenesin jälkeen, ja pitää tila rakennettu siihen asti, lisäsimme uuden järjestelmäpuhelun — ['replace_class'](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#replace_class_syscall). Päivitettävissä olevilla sopimuksilla ei ole ongelmia parantaa Kairo 1:tä. täytäntöönpano, mutta sen taustalla oleva valtakirja (sopimus, joka pitää hallussaan todellista valtiota) jää edelleen kiinni Kairo 0 -toteutuksesta. \`replace_class\` syscall ratkaisee tämän ongelman sallimalla välityspalvelisopimuksen korvata sen taustalla oleva luokka, i. . säilyttää sama osoite ja varastointi, mutta korvaa täytäntöönpano.

## Laskenta on nyt 5x Cheaper!

Nykyään Starknet-maksuilla on kaksi pääosaa: laskenta ja ketjun sisäiset tiedot. Starknet-siirtomaksun laskennallinen osatekijä määräytyy rajakustannuksilla, joita aiheutuu sen todisteiden tarkistamisesta L1:ssä (katso lisätietoja[-dokumentista](https://docs.starknet.io/documentation/architecture_and_concepts/Fees/fee-mechanism/)).

Alun perin 200m Kairo vaiheet todiste siitä, että tarvitaan 5m kaasua todentamista varten, johti naiiviin arvioihin 0,05 kaasusta Kairon vaihetta kohti. Sittemmin olemme siirtyneet[rekursiivisiin todisteisiin](https://medium.com/starkware/recursive-starks-78f8dd401025), jotka mahdollistavat merkittävän vähennyksen L1 todentamiskustannuksissa (vain rekursiopuun juuri saavuttaa L1). Nyt on aika päivittää alkuperäiset arviomme tämän mukaisesti – kunkin L2-luokan Kairo-vaiheen hintaa alennetaan viidellä, ja nyt maksaa 0. 1 kaasu.

Kustannusten alentaminen on merkittävää laskennallisesti intensiivisissä sovelluksissa, kuten ei-alkuperäisillä allekirjoituksilla tehdyissä tilisopimuksissa. Yksinkertaisissa liiketoimissa kustannukset pienenevät hieman (~ 5 %). Tulevissa versioissa käsittelemme toista osaa: on-chain datan kustannuksia. Kun Starknet'lle (ka Volition) on otettu käyttöön vaihtoehtoja ketjukohtaisille tiedoille, kustannukset vähenevät kaikkialla.

## Starknetin Hallinnointi Ensimmäinen Äänestys

Starknetin hallinnon ensimmäinen vaihe on käynnistetty (lisätietoja[täältä](https://medium.com/starknet-foundation/starknets-governance-first-phase-4614c7566f40)). Yhteisön jäsenet voivat nyt osallistua Starknetin muotoiluun uuden kanavan eli pöytäkirjan muutoksista äänestämisen kautta.

Starknetin hallintojärjestelmän ensimmäiset vaiheet keskittyvät Starknet-protokollan päivityksiin. Jokainen Starknet-versiopäivitys otetaan käyttöön ensin Testnet-versiossa. äänestäjillä on kuusi päivää aikaa tutkia ja testata päivitettyä versiota, koska se toimii Goerlissa. Tänä aikana avataan Snapshot-ehdotus, ja yhteisö voi äänestää siitä, hyväksytäänkö uusi versio Mainnet'n lähettämistä varten.

Jos ehdotus saa enemmistön äänistä kuuden päivän äänestysajan aikana, ehdotus hyväksytään ja Starknet Mainnet päivitetään vastaavasti.

Starknet alfa v0.11.0 on ensimmäinen Starknet-versio, joka on äänestyksen kohteena. Starknet-alfa v0.11.0 -äänestys on avoinna kuudeksi päiväksi Testnetin käyttöönoton jälkeen.

Merkitykselliset linkit:

* [Tila tilana](https://snapshot.org/#/starknet.eth/proposal/0x00889bc468509610e516e8602f00b21ca8c32466dd4f0140eca38becb7f40bef)
* [Delegaation löytö sivu](https://delegate.starknet.io/)
* Starknet alfa v0.11.0 keskusteluketju[Yhteisön foorumilla](https://community.starknet.io/t/proposal-starknet-alpha-v0-11-0/50334)

## Kairo 1.0 ja Sierra

Sierra (**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**tion) on välitason edustus, joka kokoaa Kairo-kokoonpanon (CASM). Pre Starknet alfa v0.11.0, kehittäjä kokoaisi Kairo 0 CASM ja lähettää tuloksen Starknet-sekvensserille. Kanssa Kairo 1.0, kehittäjät kokoavat koodinsa Sierra, ja lähettää tämän välimuotoinen edustus järjestyksessä. Sekvensseri kokoaa sen sitten CASM:iin. Sierra on taattu kokoamaan “turvallinen CASM” eli osajoukko CASM, joka ei voi epäonnistua, mikä tekee jokaisesta suorituksesta todistettavan. Tämä takaa sen, että sekvensseri voi periä maksuja myös peruutetuista liiketoimista ja suojata DOS:ltä. Lisätietoja, katso[asiak.](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/).

![](https://miro.medium.com/v2/resize:fit:1400/0*KsAwaJTIsOuCsJIe)

Starknet alfa 0.11.0 käyttää[Kairo 1.0-alpha.6 versio](https://github.com/starkware-libs/cairo/releases/tag/v1.0.0-alpha.6). Tämä versio on lähellä[ominaisuuden pariteettia](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)Kairossa 0, kaikki Starknet-järjestelmäpuhelut ovat jo olemassa.

Huomaa, että Starknet-sekvensserissä käytetään kiinteää kääntäjän versiota, mikä tarkoittaa, että kielenparannukset eivät välttämättä ole välittömästi saatavilla Starknetissa, ja ne ovat käytettävissä vasta Starknet-version päivityksen jälkeen. Erityisesti, vaikka parannuksia, jotka vaikuttavat Kairo 1. → Sierra kooste voi tulla voimaan välittömästi, muutokset Sierra → CASM kääntäjä (katso[docs](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/)lisätietoja) täytyy odottaa Starknet päivitys.

## Mitä Else on New?

### Uusi tapahtumatyyppi – Declare v2

Lisäämme[uuden tapahtuman tyypin](https://docs.starknet.io/documentation/architecture_and_concepts/Blocks/transactions/#declare_v2_cairo_1_0)Kairo 1.0 -luokan ilmoittamiseen.

Tämä uusi \`ľare\` tapahtumaversio on samanlainen kuin olemassa oleva \`ľare\`, jossa on kaksi tärkeää eroa:

* Nyt lähetettävä luokan objekti edustaa pikemminkin Sierra kuin CASM, eli luokan semantiikka on määritelty Sierra edustus.
* Käyttäjä on myös allekirjoittamassa käännettyä luokan hash. Tämä on ratkaiseva askel, kunnes Sierra→CASM kooste on todistettu osana Starknet OS.

Lisätietoja on asiakirjassa[(asiak.](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#what_to_expect)).

Kehittäjän näkökulmasta kokemus on edelleen sama. Kun olet kirjoittanut Kairo 1.0 -koodin, voit käyttää CLI-koodia ilmoittaaksesi luokan.

**Huomaa, että aluksi \`declare v2\` -tapahtumia ei hyväksytä Starknet Mainnet. Testnet-kokeiden jälkeen uusi tapahtumatyyppi otetaan käyttöön Mainnetissa, ja Cairo 1.0 -luokissa tulee käyttöön.**

### Poseidon on täällä

[Poseidon](https://www.poseidon-hash.info/)on perhe hash toimintoja, jotka on suunniteltu ottaa erittäin tehokkaita algebraic piirejä. Sellaisenaan ne voivat olla erittäin hyödyllisiä ZK todistaa järjestelmät, kuten STARKs ja SNARK. Kuten Starknet alfa v0.11.0, kehittäjät voivat käyttää Poseidon. Lisäksi, jotkut hash laskelmat, jotka ovat osa Starknet-protokolla siirtyvät Poseidon (erityisesti, luokan hash, koottu luokan hash, ja osa valtion sitoumus käyttää Poseidon, katso[docs](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#poseidon_hash)lisätietoja). Tulevaisuudessa yhä useammat sisäiset komponentit siirtyvät käyttämään Poseidonin tiivistetoimintoa.

Tarkka versio ja parametrit, joita käytetään Starknetissa löytyvät[täältä](https://docs.starknet.io/documentation/architecture_and_concepts/Hashing/hash-functions/#poseidon_hash).

### Sekalaiset muutokset

Aiempien Starknet-versioiden tavoin päivityksellä on vaikutuksia myös APIimme ja muihin matalan tason komponentteihimme. Seuraavassa luetellaan ne ja käsitellään erityisiä muutoksia, jotka on tehty:

* v0 laskua/ilmoita tapahtumia ei enää tueta
* L1→L2 viestit vaativat nyt[maksut](https://docs.starknet.io/documentation/architecture_and_concepts/L1-L2_Communication/messaging-mechanism/#l1-l2_message_fees). Toisin sanoen, Starknet-sekvensseri ei käsittele viestejä, jotka lähetetään nollapalkkiolla
* Ketjun datamuoto on[muuttunut](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/#on_chain_data_post_v0_11_0)
* [API muutokset](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#api_changes)(ei kaikkia muutoksia on lueteltu tässä, katso docs for an exhaustive list) :
* lisäsi uuden \`get_compiled_class_by_class_hash\` päätepisteen
* \`get_class_by_hash\` palauttaa molemmat Cairo 0 / Cairo 1.0 luokat (riippuen pyydetystä hashista)
* \`get_state_update\` on uusi osa korvatuista luokista, ja ilmoitukset jaetaan Kairo 0 ja Kairo 1 -luokkiin.
* \`estimate_fee\` ja \`simulate_tx\` voivat nyt ohittaa vahvistuksen
* A[new](https://github.com/starkware-libs/starknet-specs/releases/tag/v0.3.0-rc1)Starknet JSON-RPC-versio

## Mitä seuraavaksi?

Nyt kun kaikki Kairon 1.0-infrastruktuuri on otettu käyttöön, voit odottaa:

* Kairo 1.0:n kielen parantaminen edelleen
* Suorituskyvyn parannukset:[kuten lupasi](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de), etenemme edelleen kohti merkittävästi lisätä TPS. Seuraava askel etenemissuunnitelmassa on siirtymässä[Rust sekvensseriin](https://github.com/starkware-libs/blockifier), joka on kehitetty auki Apache 2. lisenssi. Uusi sekvensseri käyttää[ruoste CairoVM](https://github.com/lambdaclass/cairo-rs)ja[Papyrus](https://github.com/starkware-libs/papyrus)koko solmu, jotka muodostavat Performance Trio.
* Offchain[DA](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/)! Tässä versiossa käsittelimme liiketoimen laskennallista osaa sen kustannuksista. Tulevissa versioissa käsittelemme ketjukohtaisten tietojen kustannuksia, jotka ovat tällä hetkellä keskimääräisten liiketoimien hallitseva hinta.

![](/assets/starknet-alpha-v0.11.0-diagram.png)