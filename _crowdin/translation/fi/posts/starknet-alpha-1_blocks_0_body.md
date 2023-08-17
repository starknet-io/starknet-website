### TL;DR

StarkNet Alpha 1:llä on kaksi uutta ominaisuutta:

* L1<>L2 vuorovaikutus
* Ketjun sisäiset tiedot

### Johdanto

Vuoden alussa ilmoitimme, että StarkWare rakentaa[StarkNet](https://starkware.co/product/starknet/), hajautettu STARK-pohjainen ZK-Rollup1, joka toimii L2-verkolla Ethereumin yli. StarkNet sallii minkä tahansa dAppin saavuttaa rajattoman mittakaavan laskentaansa – vaarantamatta Ethereumin sävyttävyyttä ja turvallisuutta.

Viime kuussa[StarkNet Alpha 0](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)julkaistiin maailmalle. Kehittäjät pystyvät ensimmäistä kertaa[kirjoittamaan](https://kobi.one/2021/07/14/stardrop.html)mitä tahansa älykästä sopimusta ja ottamaan sen käyttöön ZK-Rollupissa. Käyttäjät voivat lähettää tapahtumia verkkoon, Ethereum-tyyliin.

Tänään julkaisemme uuden version; Alpha 1. Olemme julkaisemassa ominaisuuksia säännöllisesti jotta kehittäjät voivat olla vuorovaikutuksessa uusien ominaisuuksien kanssa mahdollisimman pian. Ennakoimme, että tämä kiristää palautejaksoa ja antaa yhteisön palautteen nopeasti parantaa StarkNetia.

### **Alfa 1 Ominaisuudet**

#### L1<>L2 Vuorovaikutus

Alpha 1 sisältää L1<>L2-viestiprotokollan, jonka avulla kehittäjät voivat toteuttaa saumattomia siirtovirtoja L1- ja L2-välillä. Kehittäjät voivat nyt lähettää L1:n sopimuksia koskevia viestejä L2:een ja päinvastoin.

Yksi ZK-Rollupin kauneuksista on se, että valtion päivitykset ovat lopullisia, ilman viivytystä. Tämä tarkoittaa sitä, että viestejä, jotka lähetettiin L2:sta L1:een, voidaan välittömästi välittää määränpääsopimukseen. Tämä avaa tien rakentaa sovelluksia, jotka ovat todella yhteentoimivia tasojen välillä.

Oletko kiinnostunut kokeilemaan sitä? Paras tapa päästä alkuun on seurata opetusohjelma[täällä](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html).

Meidän L1<>L2-protokollamme on paljon velkaa muille L2s (erityisesti Optimismille ja Arbitrumille), joiden edellinen työ tällä alalla vaikutti suunnitteluun.

#### On-Chain Data-Saatavuus

StarkNetin osavaltion päivitys julkaistaan nyt myös Ethereumin ketjukohtaisina tietoina. Tämän avulla kuka tahansa käyttäjä voi rakentaa täysin StarkNetin tilan L1-datasta. Jokaiseen valtion päivitykseen sisältyy valtion diff, eli mitä tallennustilaa muutettiin ja sen uusi arvo.

Myös tässä ZK-Rollup näyttää vahvuutensa. Toisin kuin Optimistiset rullaukset, joissa koko liiketoimen tiedot on lähetettävä ketjulla, ZK-Rollupsissa vain vähimmäistiedot, jotka tarvitaan valtion diffin johtamiseksi, lähetetään ketjuun.

Harkitse prime esimerkki, hinta oracles. Hintaorakelin päivittäminen sisältää yleensä useita tapahtumia, mutta päivittää vain yhden tallennuskentän; parin hinnan. Käytössä olevat tiedot, jotka tarvitaan valtion päivitykseen, joka sisältää hintaorakleja liiketoimia Optimistisessa Rollupissa, kasvavat linjassa päivitysten lukumäärän kanssa, ZK-Rollupissa se on aina vain yksi tallennuspäivitys.

Lisäksi pakkausalgoritmeja voidaan soveltaa julkaistuihin tietoihin, ja niiden pätevyys todistetaan STARKin todistuksella ja vähennetään edelleen ketjujalanjälkeä. Tulevaisuuden versiot StarkNet ottaa käyttöön innovatiivisia optimointi tällä alalla.

#### StarkNet OS

Olemme myös julkaisemassa StarkNet-käyttöjärjestelmän koodia. StarkNet OS on Kairo ohjelma, joka käyttää StarkNetia. Käyttöjärjestelmä käsittelee kaikkea mitä verkossa tehdään: sopimuksen käyttöönottoa, tapahtumien suorittamista, L1<>L2 viestejä ja paljon muuta. StarkNet OS:n arkkitehtuuri ja suunnittelu selitetään yksityiskohtaisesti erillisessä postissa.

#### Ylimääräiset Ominaisuudet

Sen lisäksi, että StarkNet Alpha on kehittynyt, olemme myös jatkuvasti parantamassa Kairoa. Jos haluat täydellisen kuvauksen Kairon v0.3.0:n uusista ominaisuuksista, tarkista julkaisutiedot[täältä](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.3.0).

### Ekosysteemi on kasvussa

StarkNet Coren jatkuvan työn lisäksi ekosysteemin työ StarkNetissa laajenee jatkuvasti. Olemme innoissamme siitä, että teemme yhteistyötä joidenkin ekosysteemin lahjakkaimpien tiimien kanssa.

Fermion, StarkNetin ensimmäinen Full Node vaiva, on kehittänyt Erigon (aiemmin TurboGeth) joukkue. Niiden valtavan tietämyksen, joka on saatu Ethereumin työstämisestä, ansiosta pystymme työskentelemään heidän kanssaan rakentaaksemme voimakkaan Full Node, joka sisältää monia oppitunteja rakennettaessa Ethereum, mutta hyödyntää mittakaavasta tarjoaa STARK vedoksia.

Nethermind työskentelee Warpin parissa, joka on EVM:stä Kairoon kääntäjä. Kulttuurimme sitoo uusien työkalujen esittelyä vasta kun ne ovat valmiita, voimme vain sanoa on, odottaa jännittäviä uutisia tällä rintamalla hyvin pian! Voimme kuitenkin sanoa, että ne liikkuvat loppinopeudella.

### Mitä tulevaisuus pitää

Seuraava pysähdys matkallamme StarkNetiin tulee olemaan kompostoituvuus – jolloin sopimukset voivat olla vuorovaikutuksessa keskenään. Pysy kuulolla.

[StarkWare](https://starkware.co/)

1 Kuten olemme aiemmin todenneet, ZK-Rollup on tällä hetkellä yleisesti käytetty termi, mutta hyvin harhaanjohtava: nämä ratkaisut eivät (tällä hetkellä) tarjoa nollatietoa.

**Päivitys (marraskuu 2021):**StarkNet Alpha elää Ethereum Mainnetissa