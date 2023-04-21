### TL;DR

* StarkNet Token (STRK) on nyt käytössä Ethereum Mainnetissa
* **Varokaa huijauksia!**StarkNet Tokeneita ei ole tarjolla myyntiin
* Säätiön on aika määrittää mekanismi, jonka avulla se voi jakaa kuponkiaan.
* StarkWaren osakkeenomistajien, työntekijöiden ja riippumattomien kumppaniohjelmistojen kehittäjien omistuksessa olevat rahakkeet on lukittu neljän vuoden ajaksi, jonka vähittäinen vapauttaminen alkaa vuoden kuluttua
* Tunnus lisää StarkNetin hajauttamista sen käytön ansiosta, että se äänestää ja maksaa palkkioita

Tänään,[StarkNet](https://starknet.io/)ottaa jälleen askeleen kohti hajauttamista. StarkNet tunnus on nyt[Ethereum](https://etherscan.io/address/0xca14007eff0db1f8135f4c25b34de49ab0d42766). Nopeasti uudelleentarkastelu tapahtuu seuraavasti: STRK:a käytetään panoksena StarkNetin konsensusmekanismeihin osallistumiseen, joka on hallintotapa ja joka maksaa transaktiomaksuja. Kunkin hyödykkeen perustelut on esitetty[hajauttamista koskevassa ehdotuksessamme](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), kohdassa otsikko “Mitä kuponkia käytetään?”

***Varokaa huijauksista:**kirjoitushetkellä ei ole mitään keinoa ostaa StarkNet Tokens; tämä myyntikiellon määräaika pysyy voimassa, kunnes[StarkNet-säätiön ilmoitus](https://twitter.com/StarkNetFndn); seuraa StarkNet-säätiön virallista yhteydenpitoa ja opi kaikista STRK:n tilan päivityksistä. Voit raportoida huijauksista ja tarkistaa muut huijauksista[-huijausraportissa](https://discord.gg/qypnmzkhbc)kanavalla[StarkNet Discord](http://starknet.io/discord)-palvelimella.*

Tässä virassa selitetään token jakomenettely ja miten käytetyt token sopimukset palvelevat kahta symbolin kolmesta suunnitelluista laitoksista eli äänestystä ja panostamista. Kolmas yhteisö, joka maksaa StarkNet-maksuja, keskustelee asiasta myöhemmin.

### Tokenin käyttöoikeuden myöntämisprosessin suunnittelu

Olemme aiemmin ehdottaneet[suunnitelmaa](https://medium.com/starkware/part-3-starknet-token-design-5cc17af066c6)rahakkeiden alustavasta jakamisesta. Osakkeenomistajille, työntekijöille ja riippumattomille ohjelmistokehittäjille osoitetut osoitteet on lukittu neljään vuoteen, ja vähittäinen julkaisuaikataulu alkaa vuoden kuluttua. Lukittuja kuponkeja voidaan käyttää äänestämiseen ja panostamiseen, mutta ei voi siirtää tai käydä kauppaa. Jotkut kuponkia ovat lukittu kautta omistettu älykäs sopimus Ethereum kun taas muut kuponkia ovat lukittu kautta säilyttäjille.

Erillisesti 50,1 prosenttia nykyisistä StarkNet-kuponkeista on kohdennettu StarkNet-säätiölle, jotta se voi saavuttaa[tavoitteensa](https://medium.com/@StarkNet_Foundation/welcome-to-the-world-starknet-foundation-7bd55d5dbc59)(vrt.[StarkWare's post](https://medium.com/starkware/introducing-the-starknet-foundation-bd4b4379fbb)). Näitä kuponkia ei ole lukittu. Säätiö tarvitsee kuitenkin aikaa muotoilla täsmällinen mekanismi näiden rahakkeiden jakamiseksi edelleen ja jakaa suunnitelmansa hyvissä ajoin.

#### Miksi työsulku?

Kansioiden lukitseminen edellä mainitulle ajanjaksolle takaa, että nykyiset tietolähteet ovat StarkNetin pitkän aikavälin kannustimien mukaisia. Se lannistaa myös keinottelua ennen kuin sitä käytetään laajasti aiottuihin tarkoituksiin: verkon turvaaminen, maksujen maksaminen ja hallinnon hajauttaminen.

Seuraavaksi kerromme, miten toteutus tukee äänestystä ja panostamista.

### Äänestys

Säätiö vastaa siitä, että se helpottaa moitteetonta hallintoa ja muotoilee äänestysjärjestelmiä. StarkNet Tokenin tarkoituksena oli mahdollistaa sekä suora äänestys että joukko valtuutusmekanismeja.

#### L1 äänestys

ERC-20:n täytäntöönpanoon sisältyy nyt**valinnainen**yhdistetyn yhdisteen[valtuutusmoduuli](https://docs.compound.finance/v2/governance/). Tätä moduulia käytetään laajalti ketjuäänestyksessä. Syy, miksi se on valinnainen StarkNetissa, ja käännetään oletusarvoisesti, on kustannusten huomioon ottaminen. Sen käyttöönotto tarkoittaa, että jokainen StarkNet Tokensin siirto L1 vaatii ylimääräistä kaasua, jota tarvitaan ainoastaan äänivallan siirtymien seuraamiseksi.

#### Non-L1 voting

Vaihtoehtoisia vaihtoehtoja L1-ketjun äänestykselle Compoundin valtuutusmoduulin kanssa ovat ketjun ulkopuoliset äänestykset sekä StarkNet-pohjaiset ketjuiset äänestysjärjestelmät (kuten[SnapshotX](https://snapshot.mirror.xyz/cUOrwdtEs5PvNh0sqYWWxPjt8GdJWn_Qp3cl7E3_8IU)). Nämä vaihtoehdot, jotka vähentävät merkittävästi kaasun kulutusta L1-siirtoissa, eivät edellytä nimenomaista tukea tällä hetkellä käyttöön otetusta ERC-20-säännöstöstä, joten niitä tuetaan luonnostaan.

Kuten edellä mainittiin, kaikki tunnisteet – lukitut ja avatut – ovat käytettävissä StarkNet-äänestysmekanismissa.

### Pinoaminen

StarkNetin luvaton ja sensuroinnin kestävä toiminta edellyttää satunnaista sekvensserien valintaa. Todennäköisyys, että solmu on valittu järjestykseen ja ehdottaa lohko on verrannollinen määrä StarkNet Tokens, että solmu panoksia. Peruste käyttää StarkNet Tokens (pikemminkin kuin vaikkapa Ethereum tai Bitcoin) on selitetty[hallintoehdotus](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), ja tarkkoja tietoja panostaminen, sekvensointi ja lohkojen luominen StarkNetissä ovat käynnissä[yhteisön keskustelu](https://community.starknet.io/t/starknet-decentralized-protocol-introduction/2671), ja ne on vielä viimeisteltävä.

Kuten äänestäminen, kuponkia voidaan käyttää panostamiseen vaikka ne ovat lukittuja. Tämä edistää StarkNet-operaattoreiden moninaisuutta ja StarkNet-järjestelmän häiriönsietokykyä.

### Summary

StarkNet Token -sopimusten käyttöönotto Ethereum on toinen askel StarkNet-hajautuksessa.

Kehotamme kehittäjiä ja käyttäjiä olemaan pelottavia huijauksia! Julkaisun aikana ei ole poletteja vaihdettavissa, ja tämä ei-kaupallinen asema pysyy voimassa kunnes StarkNet-säätiö ilmoittaa asiasta myöhemmin.

Lisää kysymyksiä voit mennä[Token-keskustelut](https://discord.gg/qypnmzkhbc)kanava[StarkNet Discord](http://starknet.io/discord)palvelimella.