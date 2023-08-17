### Jännittävä Ajat Edessä

Alpha 4 julkaistiin tänään Goerlissa. Tämä versio on Mainnet release ehdokas ja, jos kaikki menee suunnitelmien mukaan, otetaan käyttöön Mainnet kuukauden loppuun.

Alpha 4 seuraa ominaisuuksia-pakattua vapauttamista Alpha 3, joka sisälsi muun muassa parannuksia Kairo kooste ajat, sopimusrakentajat, ja paljon muuta (katso[täydellinen julkaisutiedot](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.5.0)).

Tärkeää huomata, että tämä on edelleen Alpha versio — jotta voit ottaa sopimuksen käyttöön Mainnet'ssa, noudata uusien sovellusten[perehdytys](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu)ohjeita.

### Uudet Ominaisuudet

Vaikka tämän version tärkein painopiste on valmistautuminen Mainnet'n käyttöönottoon, se sisältää myös useita uusia ominaisuuksia:

#### Hanki tämän sopimuksen osoite

Sopimukset voivat nyt saada oman osoitteensa uuden syscall \`get_contract_address\`. Lopuksi voimme panna selfien sopimuksen lepoon.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">RIP selfie sopimus: syyskuu 2021 marraskuu 2021</p>&mdash; Francesco Ceccon (@ceccon_me) <a href="https://twitter.com/ceccon_me/status/1458410251078836227?ref_src=twsrc%5Etfw">10. marraskuuta 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### Estä Hash

Lohkot on nyt tunnistettu tiivistyksen kautta mieluummin kuin Id. Tämä on seurausta viimeisestä siirtymisestämme transaktioiden vaiheeseen. Kaikki API on päivitetty vastaavasti. Tulemme pian julkaisemaan järjestelmän täydelliset tekniset asiakirjat, jotka sisältävät myös lohkon rakenteen eritelmän.

#### Sopimuksen Osoitteet

Tässä versiossa tehdään muutos tapaan, jolla sopimuksen osoitteet lasketaan. Osoite on Pedersenin hash soittajan osoitteessa, suola (satunnainen tai lähettäjä valitsee sen). sopimuskoodin hash ja rakentajan argumenttien tiivistelmä, jotka on liitetty etuliitteeseen.

```
Hash(PREFIX, caller_address, salt, contract_hash, ctr_args_hash)
```

Nykyisessä versiossa soittajan osoite on aina sama kuin 0, mutta tulevissa versioissa tämä mahdollistaa sopimusten tekemisen suoraan olemassa olevista sopimuksista.

Huomaa, että tämä järjestelmä on hyvin samanlainen kuin CREATE2.

[Katso täydelliset julkaisutiedot](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.6.0)

#### Tokenin Sillat

Tokenin sillat ovat olennainen osa StarkNet-infrastruktuuria. Ne sallivat varojen siirtämisen StarkNetiin ja sieltä pois. Sillaa ei ole otettu käyttöön julkaisuhetkellä. mutta sen pitäisi olla saatavilla muutaman päivän kuluessa – sekä täydellinen dokumentaatio sen toimivuudesta ja käytöstä. Yksi tärkeä asia on se, että silta käyttää[L1<>L2 messaging](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html)-protokollaa. Näin ollen se tarjoaa lyhyet varoajat – kun peruuttaminen sisältyy erään ja hyväksytään L1:een, varat ovat välittömästi käyttäjän käytettävissä L1:n kautta.

Tämä on merkki siltojen ensimmäinen versio, ja me haluaisimme saada siitä palautetta.

### Liity StarkNettiin

Ei ole koskaan ollut parempaa aikaa liittyä kasvavaan StarkNet-yhteisöön. Voit liittyä keskusteluun[StarkNet discord](https://discord.gg/uJ9HZTUk2Y), osallistua[online workshop](https://forms.reform.app/starkware/join-a-starknet-workshop/2ma1x8), tai käytä jotakin[tutoriaaleista](https://www.cairo-lang.org/docs/hello_starknet/index.html)aloittaaksesi ensimmäisen oman sovelluksesi.

**Päivitys (marraskuu 2021):**StarkNet Alpha elää Ethereum Mainnetissa