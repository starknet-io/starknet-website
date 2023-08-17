### TL;DR

* Kairo 1.0 on ensimmäinen suuri julkaisu[jälkeen Kairon](https://medium.com/starkware/hello-cairo-3cb43b13b209)kaksi vuotta sitten
* Kairo 1.0 antaa kehittäjille turvallisemman, yksinkertaisemman, käyttökelpoisemman ohjelmointikielen
* Kairo 1.0 sydämessä on**Sierra**, välittäjän edustus kerros, joka lupaa enemmän pitkän aikavälin vakautta Kairo ohjelmia
* Sierra ennakoi Kairon palvelemaan luvattomassa verkossa:\
  -**Verkon suojaaminen**: se sallii vankemman DoS-suojan\
  -**Käyttäjän suojaamisen**: se sallii Ethereum-luokan sensuuri kestävyysKairo 1. tulee voimaan StarkNet monin tavoin. Se myös vaikuttaa[Regenesis](https://medium.com/starkware/regenesis-starknets-no-sweat-state-reset-e296b12b80ae). Julkaisemme lähiviikkoina lisää tietoa Regenesisistä.

### Johdanto

Vuonna 2020 vapautimme Kairon, kääntyvän täydellisen ohjelmointikielen, ja otimme suuren askeleen kohti todennettavissa olevan laskennan tukemista STARcksin avulla. Tänään ilmoitamme**Kairo 1.0**, suurin edistyminen Kairo tähän mennessä. Siinä otetaan käyttöön parempi kieli ja ominaisuudet, jotka parantavat käytettävyyttä, turvallisuutta ja mukavuutta. Se on suunniteltu tukemaan Starknetin vaatimuksia luvattomana verkostona, jolloin protokollasta tulee yksinkertaisempi ja turvallisempi.\
Kehitys on jo käynnissä, ja odotamme, että ensimmäinen julkaisu tapahtuu pian.

Tässä post aiomme kuvata matkan Kairo toistaiseksi ja jakaa yksityiskohtia tulevista ominaisuuksista.

### Kairon Matka

Vuoteen 2020 asti tarvittiin kapeaa tietoa STARK-todistettavissa olevien ohjelmien rakentamiseen yleislaskentaa varten. Se oli mahdollista vain niille, jotka ymmärsivät monimutkainen matematiikka takana STARKs. Tarkemmin sanottuna jokaista liiketoimintalogiikkaa eli jokainen laskenta, yksi tarvitaan luoda Algebrallinen välivaiheen edustusto (AIR) — joukko polynomi rajoitteita, jotka edustavat erityistä laskentaa.

Kairo syntyi siitä tajuamisesta, että todennettavissa laskenta olisi asetettava saataville kehittäjät kaikkialla. Kairo mahdollistaa sen, että kehittäjät voivat valjastaa STARkkien voiman.

Kehittäjäyhteisö on sittemmin tarttunut Kairoon rakentamaan innokkaasti. Kaikki kukoistavassa StarkNet-ekosysteemissä perustuu tänään Kairoon. Välillä[StarkNet](https://starkware.co/starknet/)ja[StarkEx](https://starkware.co/starkex/), Kairolla toimivat sovellukset ovat käsitelleet yli 220M tapahtumia, lyöty yli 65M NFT:t, ja käsitelty $ 700B arvoinen kaupat, kaikki ratkaistu Ethereum.

Vaikka Kairo teki STARKs saatavilla, se oli alun perin suunniteltu kokoonpanon kieli, ja sellaisena se oli kirjoitettu alhaisen tason kieli.

![Esimerkki varhaisista ohjelmista, jotka oli kirjoitettu Kairossa](/assets/cairocode_01.png "Esimerkki varhaisista ohjelmista, jotka oli kirjoitettu Kairossa")

Kehittäjiltä saadun palautteen ja[StarkNet](https://starkware.co/starknet/)nousun myötä Kairosta tehtiin vähitellen ilmeikkäämpi ja kehittäjäystävällisempi.

![Esimerkki ERC-20 Kairon sopimuksesta, joka osoittaa muuttujien tuen, jos lausumat, virheet ja UINT256 kirjasto](/assets/cairocode_02.png "Esimerkki ERC-20 Kairon sopimuksesta, joka osoittaa muuttujien tuen, jos lausumat, virheet ja UINT256 kirjasto")

Olemme kuitenkin pian päättäneet siitä, että on aika ottaa suuri harppaus eteenpäin, ja sen sijaan, että parannuksia Kairo, siirry rohkeampi muutos.

### Cairo 1.0

Kairo 1. olemme rakentaneet aivan uuden kääntäjän maasta ylös, joka tarjoaa kehittäjille turvaominaisuuksia, ja antaa heille mahdollisuuden kirjoittaa sopimuksia yksinkertaisemmalla ja ilmaisuvoimaisemmalla tavalla.

#### Esittelyssä Sierra: varmistaa, että jokainen Kairo ajaa voidaan todistaa

Tärkein lisäys Kairo 1. on Sierra (**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**tion). Sierra muodostaa uuden välitason edustuskerroksen Kairo 1.0:n ja Kairon tavukoodin. Sierran tavoitteena on varmistaa, että jokainen Kairo ajaa – eli Kairo ohjelma ja sen syöte – voidaan todistaa (ks. lisää alla).

Sierra lupaa Kairo kehittää parempaa tulevaisuudenkestävää koodia. Lisävakautta synnyttää se seikka, että StarkNet-sopimuksia ei tarvitse laatia uudelleen, jos kohde-etuutena olevaa järjestelmää on parannettu. ., CPU AIR arkkitehtuurin muutokset, parannuksia lopullinen käännös Sierra to Cairo byte koodi).

**Todistaen jokaisen Kairon ajon.**Vanhassa Kairossa Kairon ajo voi johtaa kolmeen tapaukseen — TRUE, FALSE, tai epäonnistumiseen. Epäonnistuneita suorituksia ei voida todistaa. Sierra, varmistaa, että Kairo ajaa ei koskaan epäonnistu, ja voi johtaa vain TRUE tai FALSE. Tämä puolestaan varmistaa, että jokainen Kairo ajaa voidaan todistaa.

Tällä Sierra -järjestelmän käyttöönotolla on merkittäviä vaikutuksia StarkNet-verkkoon luvattomana verkostona. Sierra varmistaa, että jopa peruutetut tapahtumat voidaan sisällyttää StarkNet-lohkoihin. Tämä ominaisuus mahdollistaa StarkNet-protokollan pysymisen vähäisenä ja yksinkertaisena ilman tarvetta lisätä monimutkaisia salaustaloudellisia mekanismeja.\
Kaksi merkityksellistä esimerkkiä:

1. Sekvenssit voivat periä maksuja peruutetuista liiketoimista, jolloin StarkNet voi estää Sequencer DoS:n vakiintuneella tavalla.
2. Pakollisten L1-liiketoimien toteuttaminen on mahdollista, jotta StarkNet voi periä Ethereumin täyden sensuurivastuksen.

### **Kielen Ominaisuudet**

Kairo 1.0 tarjoaa monia parannuksia ohjelmointikielelle itse. Kaikki alla luetellut eivät ole osa ensimmäistä julkaisua, mutta se on osa etenemissuunnitelmaa.

#### **Parannettu syntaksi**

* Ei enää*paikallista*ja*tempvar*. Nyt tarvitsemme vain*anna*hallita niitä kaikkia muuttujia.
* Paranneltu*jos*lauseke syntaksi

```python
#Vanha
jos cond ! 0 {
  tempvar x = x+1;
} muu {
  tempvar x = x;
}
__________________________________
#New
jos cond { x = x + 1; }
```

#### **Tyyppien turvallisuutta koskevat takeet**

Kustantaja käyttää vahvaa kirjoittamista parantaakseen koodin turvallisuutta. Esimerkiksi:

* Pointers tulee aina osoittamaan alustettua muistia.
* Sanakirjat ovat aina tuhlattu, toisin kuin jättää vastuun soittaa squash_dict ohjelmoija.

#### **Helpompi käyttää kielirakenteita**

Esimerkiksi:

* Silmukoita varten

```
anna summa = 0
x iter {
  summa = summa + x;
}
```

* Totuusarvojen ilmaukset
* Kokonaisluvut (kanssa säännöllinen kokonaisluku jako 👯)
* Asianomaisten tyyppien ylivuotosuojaus
* Totuusarvon edellytykset

```
#Vanha
Jos cond1:
  jos cond2:
       # Joitakin koodeja
  jos cond3:
       # Sama koodi
__________________________________
#Uusi
Jos cond1 && (cond2 ¶ cond3) { … }
```

#### **Täysin otettu tyyppijärjestelmä**

* Abstraktit tietotyypit (ts. Rust-like enum)

```
enum Option<T> {
 Joku: T,
 Ei mitään,
}
ottelun tulos {
 Some(r) => {..},
 Ei mitään => {..},
}
```

* Piirteet

```
trait Add<Uint256> {
    fn add(…) { … }
}

anna a: Uint256 = 1;
anna b: Uint256 = 4;
a + b; // Arvioitu viiteen tyypin Uint256.
```

#### **Lisää intuitiivisia kirjastoja**

(esim. dict, ryhmät)

* Dict<Uint256, MyStruct>;
* Array<MyOtherStruct>;

#### **Optimoitu koodi**

Paikallisten muuttujien jakamista ei tarvitse erikseen ilmoittaa – auto tunnistettu ja tehty automaattisesti.

#### **Parempi kääntäjän integrointi**

Mahdollistetaan parempi IDE-tuki, pakettien hallinta ja yhteisön panosten parempi helpottaminen.

### **Päätelmät**

Kaksi vuotta sen jälkeen, kun Kairoa käytettiin ensimmäistä kertaa tuotannossa, kehitämme Kairo 1.0, joka parantaa ilmaisukykyä, turvallisuutta ja syntaksia. Se vie suuren askeleen eteenpäin, jolloin kehittäjät voivat helpommin kirjoittaa StarkNet-sopimuksia.

Toisessa postitse, tulossa pian, jaamme lisätietoja siitä, miten Kairo 1. tulee voimaan StarkNetin regenesis, ja miten kehittäjien tulisi valmistautua sen vapauttamiseen.