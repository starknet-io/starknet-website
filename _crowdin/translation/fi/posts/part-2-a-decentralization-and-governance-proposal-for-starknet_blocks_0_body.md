Aiemmassa[julkaisussamme](https://medium.com/@starkware/part-1-starknet-sovereignty-a-decentralization-proposal-bca3e98a01ef)selitettiin, mitä StarkNet on, miten sitä hajautetaan asteittain ja esitetään yhteenveto sen kahdesta hajauttamismekanismista. Tässä artikkelissa käsitellään StarkNet-hajautusprosessia, StarkNet-säätiön roolia ja tarvetta luoda uusi syntyperäinen tunnus StarkNetille. Siinä käsitellään myös muita seikkoja, jotka liittyvät StarkNetin hallintoon.

### Hajauttamisen periaatteet

[STARK](https://eprint.iacr.org/2018/046.pdf)-tekniikka on kypsä ja turvallinen, mutta toistaiseksi se on toteutettu ja käytetty ensisijaisesti keskitetty palvelu Ethereum ([StarkEx](https://starkware.co/starkex/)), ja Alpha versio hajautetusta palvelusta ([StarkNet](https://starkware.co/starknet/)). StarkNet pitäisi olla saatavilla todella luvaton julkinen hyödyke, kuten Ethereum, tai Internet. StarkNetin hajauttamisen jatkaminen ja seuraavat neljä periaatetta muutoksen ohjaamiseksi:

**Liveness.**StarkNet ei luota yhteen ainoaan yritykseen operaattorinaan. Yritykset voivat lakata olemasta olemassa tai ne voivat päättää lopettaa verkon huollon. Hajauttamisen jälkeen tällaiset skenaariot eivät vähennä StarkNetia.

**Censorship resistance.**Yksi yritys voi teoriassa päättää tai pakottaa sensuroimaan tiettyjä liiketoimia ja älykkäitä sopimuksia täyttäessään muita. StarkNet käyttää hajautettua mallia suojautuakseen tällaista skenaariota vastaan.

**Avoimuus.**Ohjelmistopäivitykset ja ylläpito ovat väistämätön osa hajautettua palvelua. Näistä toimista on keskusteltava avoimesti, joten yhteisölle tiedotetaan ja sitä valvotaan. Suuremman StarkNet-käyttäjien, operaattoreiden ja kehittäjien yhteisön on tehtävä yhteistyötä päivitysten ja ylläpidon määrittämiseksi avoimen, oikeudenmukaisen, osallistavan ja osallistavan prosessin avulla.

**Luovuus.**StarkNetin on sallittava kenen tahansa kehittäjän osallistua ydininfrastruktuurin ja -sovellusten rakentamiseen, estää monopoliaseman syntyminen ja lisätä laajuudeltaan luovaa ja yhteiskunnallisesti hyödyllistä lohkoketjujen käyttöä.

Hajauttaminen on vaikea ongelma, jota ei saa lähestyä kiireisesti. StarkNetin hallinnointia koskeva ehdotus, joka on jaettu tähän, kehittyy todennäköisesti ja muuttuu ajan myötä. Seurauksena on vain sen ensimmäinen iteraatio.

### Perustus

Säätiö tulee olemaan tavoittelematon voittoa tavoittelematon organisaatio, ja sille myönnetään StarkNet Tokens (katso[seuraava viesti](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6)). Ennakoimme, että säätiön tehtävänä on pitää StarkNet yleishyödyllisenä asiana. StarkNet on luvaton infrastruktuuri, jonka pitäisi olla kaikkien saatavilla. Se on säilytettävä hyvin, jotta se olisi turvallinen ja tehokas julkisen käytön kannalta. Se ei myöskään saa syrjiä käyttäjiä, operaattoreita ja kehittäjiä. Säätiö on omistautunut edellä kuvattujen hajauttamistavoitteiden edistämiseen: valheellisuus, sensuuriresistenssi, avoimuus ja luovuus.

StarkNetin liveniteetti ja sensuurivastus saavutetaan parhaiten luvanvaraisella ja hajautetulla konsensuksella osoittamalla STARK-pakattujen liiketoimien sekvensointia ja todistamista varten. Tämä mekanismi on automatisoitu, se tukeutuu hyvin toimiva protokollan ohjelmisto hoitaa solmut verkossa sekä validiteetti ja jatkuva liveness taustalla Ethereum blockchain. Säätiö toimii näin ollen myös resurssina käynnissä olevaan kehitykseen, dokumentointiin, ja julkaiseminen kyseisen protokollan ohjelmisto, erityisesti koska se liittyy vikakorjauksia ja tehokkuutta parannuksia.

Tavanomaisen ylläpidon lisäksi ennakoimme eläviä keskusteluja yhteisön sisällä ominaisuuksien muutoksista tai muista perustavanlaatuisista päivityksistä pöytäkirjaan. Tämä on väistämätöntä luvattomissa järjestelmissä, kuten on historiallisesti todistettu Bitcoinin lohkon kokokeskustelussa, Ethereum’s proof-of-of-stake merge, ja lukuisia muita esimerkkejä koko kryptocurrency ekosysteemi. Nämä ohjelmistokehityspäätökset ovat muutakin kuin objektiivisia matematiikka- ja tehokkuushyötyjä, vaan niihin liittyy subjektiivisia arvoarvioita ja ominaispiirteitä. Monissa lohkoketjuyhteisöissä nämä päätökset tehdään epävirallisesti ilman selviä keskusteluja koskevia sääntöjä tai päätöksentekoprosessia. Jopa ei-päätös on päätös, joka suosii vallitsevaa tilannetta. Näiden ongelmien välttämiseksi säätiön tehtävänä on myös kehittää, testata ja toteuttaa yhteisön päätöksentekoprosesseja keskeisten teknisten kysymysten ratkaisemiseksi. Mekanismi on keskeisessä asemassa käsiteltäessä pöytäkirjojen päivityksiä, riitojenratkaisua ja julkisia hyödykkeitä koskevaa rahoitusta. Säätiö edistää avoimuutta jakamalla tietoja, joita tarvitaan näiden päätösten tekemiseen, ja pitää yllä arkistoa tällaisista tiedoista tulevaa viittausta varten.

### Miksi poletti?

StarkNet oli aina visioitu yhteyskäytäntönä, jota yhteisö johtaa, ei ole kuitenkaan ollut mitään selkeää tapaa määritellä, kuka tarkkaan ottaen käsittää tämän yhteisön. *Tunnus mahdollistaa sen, että yhteisön kannattajat, jotka tekevät työtä, joka on osaltaan edistänyt ekosysteemin menestystä, voivat osallistua kyseisen ekosysteemin hallinnointiin.*

Lisäksi oikeudenmukainen, avoin ja sensuurikestoinen palvelu on mahdollista vain, jos useat osapuolet näyttävät jopa kilpailla tehdä työtä, joka valtuuttaa hajautettu palvelu, ja tämä voidaan taata vain, jos näille työntekijöille maksetaan korvaus heidän asemastaan verkko-operaattoreina.

Sen vuoksi on välttämätöntä sisällyttää rahakkeita osana StarkNetin kaltaista verkkoteknologiaa. Ja vaikka maksu sensuuri vastus voidaan saavuttaa käyttämällä olemassa ei-natiivi token, esimerkiksi Bitcoin tai Ether (ETH), uskomme, että tällainen lähestymistapa epäonnistuisi ajan mittaan siten, että verkon käyttäjät saisivat erillisen yhteisön ja äänen päätöksenteossa.

Kotoisin merkki, joka palkitsee yhteisön jäseniä, jotka kehittävät verkostoa, edistää ekosysteemiä siinä määrin, että ei-kotoperäisen tunnuksen käyttö ei tule tapahtumaan. Jos tunnus on ei-syntyperäinen, muissa ekosysteemeissä tehdyistä päätöksistä johtuvat taloudelliset sokit voivat vaikuttaa StarkNetin palveluun ja sen käyttäjiin ja palveluntarjoajiin.

### Mihin tunnusta käytetään?

Tunnus on verkon (maksujen) toiminnan mekanismi, verkoston ylläpitäminen ja turvaaminen (konsensukseen osallistuminen) sekä sen arvoista ja strategisista tavoitteista (hallintotapa).

**Tapahtumamaksut:**Tällä hetkellä maksut StarkNetissä maksetaan Etherissä (ETH). Mutta myöhemmin, me ennakoida maksut maksetaan yksinomaan natiivi StarkNet Token. Hyvän käyttäjäkokemuksen tueksi, automatisoidut ja hajautetut ketjumekanismit mahdollistavat sen, että käyttäjät voivat maksaa maksuja ETH:ssä.

**Staking:**Tietyt palvelut, jotka ovat kriittisiä StarkNet- liveniteetin ja turvallisuuden kannalta, voivat vaatia panostamista StarkNet Tokensiin. Näitä palveluja voivat olla sekvensointi, tilapäisen L2 konsensuksen saavuttaminen ennen L1 lopullisuuden saavuttamista, STARK-näyttöpalvelut ja tietojen saatavuuden tarjoaminen, muutamia esimerkkejä mainitakseni. Odotamme, että nämä palvelut hajautetaan vuonna 2023.

**Hallintotapa:**StarkNet-järjestelmän parantamista koskevat ehdotukset edellyttävät vähimmäistasoa, joka määritellään myöhemmin. Voting, joko suoraan tai valtuutuksen kautta, vaaditaan kaikissa muutoksissa pöytäkirjaan, jotka ovat olennaisia StarkNetin liventeetin, turvallisuuden ja ylläpidon kannalta. Esimerkiksi kaikki StarkNet-käyttöjärjestelmän tärkeimmät päivitykset edellyttävät tunnuksen haltijoiden hyväksyntää.

### Hallintaa koskevien pohdintojen päättäminen

Hajautetut hallintomekanismit ovat vielä lapsenkengissään, eikä mikään hanke tässä tilassa ole tarjonnut meille pakottavaa mallia emulointiin. Onko kaikkien merkitsijöiden säännöllinen ja suora äänestys paras polku? Tämä on suhteellisen yksinkertaista suunnitella tekniseksi mekanismiksi, mutta se voi olla wieldy ja voi epäoikeudenmukaisesti etuoikeus haltijat suuri määrä rahakkeita, eikä henkilöiden, jotka käyttävät aktiivisesti verkkoa.

Kun harkitaan parasta lähestymistapaa, Ehdotamme, että tarkastetaan useita erillisiä rakenteita, jotka ohjaavat viranomaisen StarkNet Tokenin omistajien yhteisöltä.

Suosittelemme myös, että StarkNet Tokenin haltijat hyödyntävät hyvin ydinkehittäjien asiantuntemusta. Kaikissa lohkoketjuisissa ekosysteemeissä ydinkehittäjillä on keskeinen rooli perustana olevan teknologian turvaamisessa, ylläpitämisessä ja kehittämisessä. Sen vuoksi on syytä pohtia niiden virallisen roolin määrittelyä hallintoprosessissa.

Tämän sarjan[kolmannessa virassa](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6)kuvataan StarkNet Tokenin suunnittelua, joka on avainasemassa oleva suunnittelu, ja tunnisteen jakamisen eri vaiheet.