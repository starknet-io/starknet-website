### TL;DR

* **Maksut ovat nyt pakollisia Testnetissä, pian Mainnetissa**
* Sopimuksen tehdasmalli on nyt mahdollista!
* StarkNet ottaa käyttöön sopimusluokat
* Delegoitu puhelu on korvattu kirjastopuhelulla

### Esittely

Olemme iloisia voidessamme esitellä StarkNet Alpha 0.9.0! Tämä on tärkeä versio, jossa StarkNet tekee merkittäviä askelia kohti kypsyys, ja merkittäviä lisäyksiä sekä toiminnallisuus ja protokollan suunnittelu.

**Maksut ovat pakollisia**(tällä hetkellä vain Testnetissä, kunnes versio 0.9. tulee elää Mainnet) — millä tahansa vauraudella L2 on oltava oma riippumaton maksujärjestelmä. Kun otetaan käyttöön maksut valinnainen ominaisuus versiossa 0.8. , me tunnemme nyt luottavaisesti siihen, että ne sisällytetään pöytäkirjan keskeiseen osaan, ja tehdä niistä pakollisia. Lisätietoja jäljempänä.

Toinen merkittävä muutos protokollan tasolla on sopimusluokkien ja luokan / instanssin erottelun käyttöönotto. Tämä mahdollistaa \`delegate_call\` -toiminnon ja -käyttöönoton yksinkertaisemman käytön olemassa olevista sopimuksista, mikä mahdollistaa StarkNetin tehdaskuvion.

### Sopimuksen Luokat

Otamme innoituksen objektipainotteisesta ohjelmasuunnittelusta ja teemme eron sopimussäännöstön ja sen täytäntöönpanon välillä. Me teemme niin jakamalla sopimukset luokkiin ja tapauksiin.

Sopimuksen**luokka**on sopimuksen määritelmä: sen Kairo bytecode, vihje tietoja, lähtöpisteiden nimet, ja kaikki tarvittavat yksiselitteisesti määritellä sen semantiikka. Kukin luokka yksilöidään sen luokan hash (analoginen luokan nimi OOP kielellä).

A**contract instanssi**, tai yksinkertaisesti sopimus , on käyttöönotettu sopimus , joka vastaa jotakin luokkaa. Huomioi, että vain sopimustapaukset käyttäytyvät sopimuksina eli niillä on oma varasto ja niitä voidaan vaatia liiketoimilla/muilla sopimuksilla. Sopimusluokalla ei välttämättä ole StarkNetissa käytössä olevaa instanssia. Luokkien käyttöönotto sisältää useita protokollan muutoksia.

#### ‘Declare’ Transaction

Otamme käyttöön uuden tyyppisen tapahtuman StarkNet-tapahtumaan:[”notiare”](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)tapahtumaan, joka mahdollistaa sopimuksen**luokan ilmoittamisen.**Toisin kuin \`deploy\` -tapahtuma, tämä ei käytä kyseisen luokan instanssia. StarkNetin osavaltio sisältää luettelon ilmoitetuista luokista. Uusia luokkia voidaan lisätä uuden \`ľare\` -tapahtuman kautta.

#### Deploy-järjestelmän puhelu- ja sopimustehtaat.

Kun luokka on ilmoitettu, eli vastaava \`ľare\` tapahtuma hyväksyttiin, voimme ottaa käyttöön uusia kyseisen luokan tapauksia. Tätä varten käytämme uutta \`deploy\` -järjestelmäpuhelua, joka sisältää seuraavat argumentit:

* Luokan tiiviste
* Suola
* Rakentajan argumentit

Tämän jälkeen otetaan käyttöön ”käyttöönotto” -järjestelmä ottaa käyttöön kyseisen sopimusluokan uuden esimerkin. jonka[osoite](https://docs.starknet.io/docs/Contracts/contract-address)määräytyy edellä mainittujen kolmen parametrin ja lähettäjän osoitteen (sopimus, joka vetoaa järjestelmäpuheluun).

Sisällyttäminen vetotapahtumaan mahdollistaa sen, että voimme hinnoitella ja veloittaa käyttöönottomaksuja ilman, että joudumme käsittelemään käyttöönottoja ja kutsumisia eri tavoin. Lisätietoja käyttöönottomaksuista, katso[(asiak.](https://docs.starknet.io/docs/Fees/fee-mechanism#deployed-contracts)).

Tämä ominaisuus tuo sopimustehtaat StarkNetiin, koska mikä tahansa sopimus voi vedota \`deploy\` syscalliin ja luoda uusia sopimuksia.

#### Siirtyminen ”Delegate Call” -nimisestä ”Kirjastokutsuun” -nimisestä

Luokkien käyttöönotto antaa meille mahdollisuuden käsitellä tunnettua ongelmaa Ethereumin valtuuttamassa puhelumekanismissa: Kun sopimus suorittaa valtuutetun puhelun toiseen sopimukseen, se tarvitsee vain luokan (koodin) eikä varsinaisen instanssin (sen tallennustilan). Tietyn sopimustapauksen määrittäminen valtuutetun ehdotuspyynnön esittämisen yhteydessä on näin ollen huono käytäntö (todellakin, se on johtanut muutamia bugeja Ethereum sopimukset) — vain luokka on määritettävä.

Vanha \`delegate_call\` -järjestelmäpuhelu on nyt vanhentunut (vanhat sopimukset, jotka on jo otettu käyttöön, jatkavat toimintaansa, mutta**sopimukset jotka käyttävät \`delegate_call\` eivät enää kokoa**ja se korvataan uudella library_call -järjestelmäpuhelulla, joka saa luokan hash (aiemmin ilmoitetun luokan) sopimusoikeusasteen osoitteen sijaan. Huomaa, että vain yksi varsinainen sopimus on mukana kirjaston puhelun, joten vältämme epäselvyyksiä puhelun sopimuksen ja täytäntöönpanosopimuksen välillä.

#### Uudet API-päätetapahtumat

Lisäsimme kaksi uutta päätepistettä API:hen, mikä mahdollistaa luokan tietojen hakemisen:

* \`get_class_by_hash\`: palauttaa luokan määrityksen luokan hash
* \`get_class_hash_at\`: palauttaa käyttöön otetun sopimuksen luokan hash sopimusosoitteen

On huomattava, että saada käyttöön otetun sopimuksen luokka suoraan sen sijaan, että läpikäyisi edellä mainitut kaksi menetelmää, voit käyttää vanhaa \`get_full_contract\` -päätetapahtumaa, joka nimetään uudelleen tulevissa versioissa. Kaikki edellä mainitut päätetapahtumat ovat käytettävissä myös[StarkNet CLI](https://docs.starknet.io/docs/CLI/commands).

#### Maksut

Jatkamme maksujen sisällyttämistä StarkNetiin, tehden niistä pakollisia (ensin Testnetissä ja myöhemmin myös Mainnetissa) ``[invoke](https://docs.starknet.io/docs/Blocks/transactions#invoke-function)\` tapahtumia. Tapahtuma \`ľare\` ei vaadi maksuja tässä vaiheessa. Vastaavasti \`deploy`` -tapahtumat eivät myöskään vaadi maksua, mutta huomaa, että tämä transaktiotyyppi on todennäköisesti vanhentunut tulevissa versioissa.

Tällä alalla on vielä useita avoimia kysymyksiä, joista merkittävimpiä ovat sopimusilmoituksista perittävät maksut ja StarkNet-tilien käyttöönotto. Aiomme käsitellä näitä kysymyksiä tulevissa versioissa.

### Mitä Seuraavaksi?

Helmikuussa[julkaisemamme etenemissuunnitelmamme mukaisesti olemme sitoutuneet parantamaan StarkNetin suorituskykyä yleensä ja sekvensserin](https://medium.com/starkware/starknet-on-to-the-next-challenge-96a39de7717)erityisesti saadaksemme käyttäjille nopeampaa palautetta tapahtumistaan. Seuraavassa versiossa, aiomme ottaa käyttöön rinnakkaisen osaksi sekvensseri, mahdollistaa nopeamman lohkon tuotantoa.

StarkNetin seuraava suuri versio keskittyy StarkNetin tilien rakenteeseen tavalla, joka on samankaltainen kuin[ERC-4337](https://medium.com/infinitism/erc-4337-account-abstraction-without-ethereum-protocol-changes-d75c9d94dc4a). Tämän myötä olemme viimeistelleet tavan, jolla StarkNet-tilit käyttäytyvät, ottaen jälleen yhden suuren askeleen kohti massaadoptiota!