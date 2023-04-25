### TL;DR

* Uusi StarkNet-sekvensseri on kehitteillä
* Se on avoimen lähdekoodin Apache 2.0 -lisenssi nojalla
* Se ensimmäinen tavoite on lisätä StarkNetin suorituskykyä

### Kiiltävä uusi sekvenssi

Olemme iloisia voidessamme ilmoittaa uuden StarkNet Sequencer on töissä. Kun StarkNetin tekninen pino siirtyy kohti avointa lähdekoodia[Kairo 1.](https://medium.com/starkware/open-sourcing-cairo-1-0-b3100a664bb0)ja[Papyrus Full Node](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202), jatkamme nyt StarkNetin uutta sekvenssiä. Se on avoin lähdekoodi, joka on saatavilla Apache 2.0 -lisenssillä ja voit mennä katsomaan[repoa](https://github.com/starkware-libs/blockifier)nyt!

Uuden sekvensserin rakentaminen on osa[StarkNet-tiekarttaa](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de), jonka esittelimme muutama kuukausi sitten. Toteutus uusi sekvensseri alkaa korvaamalla**Blockifier**, moduuli sisällä sekvensseri joka suorittaa lohkon suorituksen. Kuten etenemissuunnitelmassa selitetään, sen odotetaan tuottavan etua StarkNetin toiminnalle.

Lähestymistapamme rakentaa tämä sekvensseri on sama lähestymistapa, joka ohjasi meitä StarkNet Alpha. Sekvensseri**pannaan täytäntöön vaiheissa**, ja jaamme tänään sen ensimmäinen moduuli. Ajan myötä uudet sekvensserin osat valmistuvat, kunnes lopulta Rust-pohjainen sekvensseri korvaa nykyisen Python-pohjaisen sekvensserin kokonaan.

### Mitä sekvenssi tekee?

StarkNetissa, kun käyttäjät lähettävät tapahtumia, ensimmäinen pysähdys liiketoimen matkalle STARK-skaalaukseen on sekvensserit. StarkNet-protokollassa sekvensserit ovat vastuussa tapahtumien tilaamisesta ja lohkojen tuottamisesta. Sen jälkeen kun lohko on luotu sekvensseri ja hyväksytty konsensusprotokolla, provers ottaa haltuunsa ja tuottaa todiste L1.

![](/assets/1_ndrekwqunjixo_wskdeycw-1.png)

### Avoin Hankinta

StarkNet Alpha lanseerasi Mainnetissa marraskuussa 2021. Alun perin se oli sitoutunut jakamaan STARKin voiman laajenemisen maailman kanssa.

Tänään olemme julkaisemassa ensimmäinen rivi moduuleja uuden avoimen lähdekoodin sekvensseri. Kaikkien moduulien ja alamoduulien käyttöönottoon kuluu useita kuukausia. Avoimen lähdekoodin avulla yhteisön jäsenet voivat osallistua kehitystyöhön ja auditoida koodausperustan.

Tämä reunaa StarkNet lähemmäs kohta hajautettu luvaton sekvensointi. Suunnittelemme nyt StarkNetin hajautettua protokollaa ja kannustamme yhteisöä osallistumaan[tutkimukseen ja keskusteluun](https://community.starknet.io/t/starknet-decentralized-protocol-consensus/5386).

### Suorituskyky

StarkNetin alkuperäinen sekvensseri on pitkälti StarkExin infrastruktuurin mukauttaminen. Nyt tarvitaan infrastruktuuria, joka on rakennettu erityisesti hajautetun ja suorituskykyisen verkon tarpeisiin.

Rakennettu Rust, uusi sekvensseri on suunniteltu ja kehitetty suorituskyvyn mielessä. Uusi sekvensseri rakentuu myös vankalle perustalle: Papyrus, uusi[StarkNet koko solmu,](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202)hoitaa valtionhallinnan, ja cairo-rs, uusi Cairo-VM LambdaClass, nopeuttaa Kairon teloitusta. Odotamme uuden sekvensserin parantaa kun nykyinen sekvensseri joka puolelta. Verkon läpikulun ja latenssin odotetaan paranevan dramaattisesti, kun tämä sekvensseri integroidaan StarkNetiin.

Odotamme myös, että myös muut infrastruktuuri- ja kehitystyökalut voivat käyttää uutta sekvensseriä parantaakseen kehityskokemusta. Täyden solmun suorituskyvyn odotetaan paranevan sekä kaikki testauskehykset.

### Summary

Olemme innoissamme voidessamme ilmoittaa tänään uudesta avoimen lähdekoodin sekvensseristä. Sen ensimmäinen moduuli on jo saatavilla yhteisölle arvioitavaksi, ja sitä seurataan useammilla moduuleilla seuraavien kuukausien aikana. Olemme myös iloisia ottaessamme uuden askeleen etenemissuunnitelmassamme StarkNetin suorituskyvyn parantamiseksi. Pyrimme tekemään verkosta tehokkaampaa ja helpompaa, ja arvostamme kaikkien niiden tukea, jotka ovat liittyneet meihin tällä matkalla.