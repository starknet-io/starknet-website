### TL;DR

* StarkNet Alpha 0.7.0 julkaistiin Goerli; täynnä parannuksia
* Sopimukset voidaan nyt päivittää käyttämällä Proxy Päivitys Kuvio
* Sopimukset voivat nyt lähettää tapahtumia
* Tuki kauan odotetuille lohkon numeroille ja lohkon aikaleima järjestelmän puheluille

### Esittely

Olemme iloisia voidessamme vapauttaa Alpha 0.7.0, versio täynnä uusia ominaisuuksia ja parannuksia. Yksi Starknetin parhaista stimulanteista viime kuukausien aikana on ollut yhteisön lisääntynyt osallistuminen StarkNetin tulevaisuuden muokkaamiseen. Tässä versiossa käsitellään joitakin yhteisön polttamistarpeita.

#### Nimeämisyleissopimuksen muutokset

Tarkkailulukija on ehkä huomannut, että edellinen StarkNet Alpha julkaisu nimettiin Alpha 4, kun taas nyt julkaisemme Alpha 0.7.0. Päätimme jättää tämän Alpha version numeron ja luottaa sen sijaan vain siihen liittyvään cairo-lang versioon.

### Uudet Ominaisuudet

#### Sopimuksen Päivittäminen

OpenZeppelinin[välityspalvelimen päivitys Kuvio](https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies)on nyt täysin tuettu StarkNetin sopimuspäivityksille. Proxy malli on yleinen menetelmä, jolla sopimuspäivitykset Ethereumin yli. Alpha 0.7.0 mahdollistaa tämän kuvion StarkNetin päällä.

Teimme lyhyen[tutorial](https://starknet.io/docs/hello_starknet/default_entrypoint.html)osoittaaksemme perus täytäntöönpano malli, ja OpenZeppelin on jo kovaa työtä täytäntöön standardin sopimuksen välityspalvelimen malli; katso[prototyyppi](https://github.com/OpenZeppelin/cairo-contracts/pull/129).

#### Lohkon numero ja esto aikaleima

Alpha 0.7.0 lisää kaksi uutta järjestelmää, joita monet devs ovat pyytäneet. Nämä puhelut mahdollistavat sopimuksen käyttää lohkon numeroa ja lohkon aikaleima. Lohkon numero palauttaa nykyisen suoritetun lohkon määrän. Lohkon aikaleima palauttaa Sequencerin antaman aikaleiman lohkon luomisen yhteydessä.

Voit nähdä esimerkin siitä, miten näitä ominaisuuksia käytetään[opetusohjelmassa](https://starknet.io/docs/hello_starknet/more_features.html#block-number-and-timestamp).

#### Tapahtumat

Yllätys! Ominaisuus joka oli suunniteltu tulevaisuuden versio on hiiponnut tiensä tähän aikaisemmin.

StarkNet-sopimukset tukevat nyt tapahtumien määrittelyä ja lähettämistä, jolloin ne voivat paljastaa toimitustiedot ketjun ulkopuolisille sovelluksille kuluttamista varten. Ethereum kehittäjät löytävät semantiikka ja syntaksi hyvin samanlainen kuin Solidaarisuus. Voit lukea[dokumentin](https://starknet.io/documentation/events/), tai seurata[opetusohjelmaa](https://starknet.io/docs/hello_starknet/events.html), joka selittää tämän ominaisuuden.

#### Poistettu %builtiinidirektiivi

Uiltin-direktiiviä %bei enää tarvita StarkNet-sopimuksissa. Tämä muutos seurasi yhteisöllistä keskustelua[sopimuksen laajennus malli](https://community.starknet.io/t/contract-extensibility-pattern/210)[StarkNet Shamans](https://community.starknet.io/). Se yksinkertaistaa merkittävästi tämän laajennuksen käytettävyyttä.

Seuraavat sopimukset muutetaan esimerkiksi seuraavasta sopimuksesta:

```
%lang starknet

# Tämä on "%builtins" -direktiivi.
# Sitä ei tarvita enää.
%builtins range_check

@view
func add(x : felt, y : felt) -> (res : felt):
return (res=x + y)
end
```

Tätä varten:

```
%lang starknet
@view
func add(x : felt, y : felt) -> (res : felt):
return (res=x + y)
end
```

Voit tarkistaa[ERC-20](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts/token)vakiosopimukset, jotka käyttävät uutta mallia.

#### Ulkoiset toiminnot Rakenteiden tukijärjestelmät

Alfa 0.7.0 tukee ohimeneviä ja palaavia rakenteita ulkoisissa toiminnoissa. Tämä lisätoiminto mahdollistaa Tilisopimusten paremman tuen[multicalls](https://github.com/OpenZeppelin/cairo-contracts/pull/73#discussion_r753535751).

Multicall on tehokas ominaisuus Tilin Abstraktio, jonka avulla tili voi soittaa useita puheluja yhdessä tapahtumassa. Selvä käyttötapaus on se, että luodaan**yksittäinen tapahtuma**, joka kutsuu päästöoikeuksia ja siirtää.

Odotamme mielenkiinnolla näkevämme, mitä yhteisö tekee sen kanssa.

#### StarkNet CLI:n parannukset

**Odottavien lohkojen tuki**

[Odottavat lohkot](https://starknet.io/documentation/block-structure-and-hash/#pending_block)esiteltiin[](https://community.starknet.io/t/cairo-v0-6-2-api-change-pending-block/195)viimeisimmässä pienessä versiossa (v0.6.2) ja tarjottiin nopeampia vahvistuksia tapahtumista. Tämä versio sisältää tuen näiden lohkojen kyselyyn StarkNet CLI.

Voit käyttää sitä jokaisessa CLI-komennossa, joka ottaa block_number argumenttina (contract_call/get_block/get_code/get_storage_at), Voimme kysyä StarkNet-sovelluksesta odottavan lohkon osalta määrittämällä block_number=pending.

**Tilisopimusten tukeminen**

StarkNet käyttää tilinpäätöksen abstraktiota eli kaikki tilit toteutetaan älykkäinä sopimuksina. Ensimmäiset tilisopimukset toteutettiin[Argent](https://github.com/argentlabs/argent-contracts-starknet)ja[OZ](https://github.com/OpenZeppelin/cairo-contracts/blob/main/contracts/Account.cairo), mutta odotamme vielä paljon muuta.

StarkNetissa kaikkien tapahtumien on käytävä läpi tilisiirto, ja CLI mahdollistaa nyt yhteyden StarkNet Alphan kanssa suoraan tilisiirtojen kautta. Katso[opetusohjelma](https://starknet.io/docs/hello_starknet/account_setup.html#setting-up-a-starknet-account)siitä, miten se asetetaan.

Samanlaisia toimintoja on lisätty myös[StarkNet.py](https://github.com/software-mansion/starknet.py/)ja[Niiliin](https://github.com/OpenZeppelin/nile)viimeisen kuukauden aikana.

#### L1<>L2 Viestit testauskehyksessä

Alfa 0.7.0 esittelee Postmanin. Postmanin avulla kehittäjät voivat käyttää testauskehystä testatakseen monimutkaisempia virtoja.

Korkealla tasolla – se pilkkaa StarkNet-Sequencerin vastuuta viestien siirtämisestä L1:stä L2:een ja L2:een L1:een. Sen avulla varmistetaan, että Solidaarisuusviestisopimuksen kautta lähetetyt viestit näkyvät StarkNet-sopimuksen kohdepaikassa ja StarkNet-sopimuksen kautta lähetetyt viestit tulevat näkymään Solidaarisuusviestisopimuksessa.

#### Ja Lisää Ominaisuuksia

Alpha 0.7.0 tarjoaa monia muita ominaisuuksia ja muutoksia, kuten tehokkaan neliöjuurifunktion lisääminen matematiikan yhteiseen kirjastoon. Täydellinen luettelo näkyy[muutoslokissa](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.7.0).

### Seuraava Ylös?

Alkuperäinen[Maksumekanismi](https://community.starknet.io/t/fees-in-starknet-alpha/286/29)-tuki vapautetaan muutamassa viikossa StarkNetin osaversiona.

### Lisää Tietoja?

[starknet.io](https://starknet.io/): kaikille StarkNet-tiedoille, oppaille ja päivityksille.

[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y): Liity saadaksesi vastauksia kysymyksiisi, hanki dev tukea ja tule osaksi yhteisöä.

[StarkNet Shamans](https://community.starknet.io/): Seurata (ja osallistua!) StarkNet-tutkimuskeskusteluissa.