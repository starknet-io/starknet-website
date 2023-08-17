### TL;DR

* Vi bygger StarkNet i trinn, og begynner med å etablere**brukervennlighet**, deretter forbedrer**ytelse**, og endelig, går videre til**desentralisering**
* Vi har nådd vårt første mål: brukbarhet. Dette betyr at vi leverer allmenn data i en ethereum-lignende tilstand (år før den ble tenkt mulig)
* Vi går nå til byggestrategi fase 2 av vår 3-del: prestasjon, med fokus på gjennom, transaksjonskostnad og latens.
* Neste opp: Desentralisering

Rett år etter planer for[StarkNet](https://starknet.io/)ble først kunngjort har plattformen svært god funksjonalitet. Utviklerfellesskapet blomstrer ut over våre villeste forventninger og sørger for konstant flurry for nye L2 Native prosjekter.

Vår prioritet det siste året var å gi nettopp dette, ved å lage et fungerende StarkNet med en raskt voksende rekke funksjoner, som gjør det mulig å dage rett inn.

De har gjort dette i store tall. Et godt barometer er nedlastingstelleren for[JavaScript-biblioteket for StarkNet](https://www.starknetjs.com/): allerede på 5k siden det ble tilgjengelig for 4 måneder siden.

Men mens StarkNet leverer kompresjonsmagien, lovte vi akkurat nå, det er langt fra å kunne gjøre det for nok modul med nok gjennomstrømning, Dette kan bevise en kilde til frustrasjon for utviklerne på kort sikt.

Vår felles kjerneteknologi, STARK-prøving av mange transaksjoner og sammenpressing av prøvene må gjennomføres i forkant av utføring eller sekvensering av transaksjoner. Det er en prosess StarkWare teamet har allerede perfekt en gang for[StarkEx](https://starkware.co/starkex/)skaleringsmotor, og vi jobber nå med å gjøre det igjen for behovene til StarkNet.

Nå som mange av målene for vår brukervennlighet er nådd, forskyver vi fokuset for å prioritere dette arbeidet ytterligere. Det er alle ledd i vårt 3-trinns veikart:**brukervennlighet**, etterfulgt av nettverkets**performance**, og deretter**desentralisering**. Ett år i, vi ønsker å gi deg en titt under panseret – en beskrivelse av hvilke biter på plass og hva som fortsatt er et pågående arbeid.

### Historien som er så langt borte

StarkNet Alpha ble utgitt til offentlig testnet i juni, og til Mainnet i november. På tidspunktet for distribusjonen av Mainnet leverte StarkNet allerede fram generell databehandling i en ethereum-lignende stat som ble ansett for mye å være år unna.

Gjennom hele utviklingen har vi valgt en tilnærming som først fokuserer på de viktigste funksjonalitetene og løslatt dem så snart de ble tilgjengelige, del hovedsakelig utviklingen med samfunnet. StarkNet er langt fra å være funksjonsdyktig, men enda nå, kan utviklere allerede bygge meningsfulle og kompliserte programmer. I dag har vi hundrevis av utviklere[bygget på StarkNet,](https://starkware.notion.site/Projects-Building-on-StarkNet-a33dee55778a4515a9be9bdae02ee682)tens med apper og mer enn et dusin eksterne team som utvikler verktøy og infrastruktur for StarkNet økosystemet.

En rekke oppgraderinger har levert mange viktige funksjoner, inkludert L1<>L2 meldinger, on-chain data og støtte for komposittbarhet, hendelsesstøtte, grunnleggende gebyrmekanisme, oppgraderbarhet, abstraksjon ved testing, verktøy for utviklere og rask bekreftelse, blokkeringsnummer, tidsstempel, støtte for regnskapskontrakter.

Utviklerfellesskapet er både sterkt interessert i StarkNet, og faktisk former sin utvikling. Allerede er det innført funksjoner basert på tilbakemelding fra utviklere. Forutsetningene kan være godt rustet til å øke gjennomslaget, og derfor prioriteres dette med stor tyngde nå.

### Neste skritt

Når vi nå har nådd brukervennlighet, er det på tide å forbedre systemets ytelse. I systemets nåværende tilstand kan systemet tåle begrenset gjennomstrømming av transaksjoner. Måten å løse dette på er ved å forbedre utførelsen av Sequencer Node, som er StarkNets tilsvarende en mindreårige. Det er "maskinen" at transaksjoner går i rekkefølge etter at de er levert. Når dette er optimalisert, vil dataoverføringen av skyens rakett.

For dette til slutt analyserer vi samtidig hvor flaskehalsene er, og møter dem én etter én. For tiden er alle flaskehalsene knyttet til den sekvenseringsprosessen som kommer før vi benytter seg av STARK-proverene. Kammerprøvespillet er klar til å støtte gjennomstrømningen av StarkExliknende støt på StarkNet.

Vi forventer at optimalisering av sekvensen blir en prosess som varer noen måneder, med gradvis forbedring gjennom H1/22. Vårt mål er å nå fram til begynnelsen av andre halvdel av 2022, minst én størrelsesorden høyere TPS enn ett, til en pris som er minst to store ordre lavere enn Ethereum. Og det er bare starten.

Det er god grunn til at det er behov for denne optimaliseringsfasen. og at StarkNet ikke var startet med en leseoptimalisert sekvens: StarkNet var i stand til å oppnå brukervennlighet så fort fordi vi fikk en startede head-start. I stedet for å starte fra bunnen av, og bygge en helt ny sekvens, brukte vi batchen fra StarkEx som en sentral komponent.

Det var en fin måte å bygge på. Det var ikke bare raskt levert det, det er sikkert at vi bygger på solide stiftelser. StarkEx testet så godt som kjernefunksjonaliteten som driver StarkNet, fordi det konstaterte hundrevis av milliarder dollar i kumulativ handel.

[StarkEx](https://starkware.co/starkex/)er skaleringsmotoren for noen av de mest vellykkede app'ene ved bruk av L2: dYdX (evigvarende kontrakter), DeversiFi (spot trading and payments), samt Immutable og sorare (NFT minting og trading).

Men sekvenseren som er bygget for dem og andre StarkEx-klienter kan så langt kun ta StarkNet Hver av disse håndterer bredt samme type transaksjon hver dag. StarkNet er alt om**generell beregning**, så behovene er åpne. Når sekvenseren tar transaksjoner fra minnestedet, kommer de i ulike former og størrelser. StarkNet er også et åpent nettverk som betyr ytterligere informasjonsoverhode som ikke finnes i StarkEx.

Den nåværende utfordringen, nemlig å optimalisere sekvensen for de nye behovene, er en betydelig garanti, men vi har en sterk forståelse av den ruten vi trenger, basert på vår vellykkede StarkEx-utbygging.

### Neste opp: Desentralisering

StarkNet skal være et fullt desentralisert permisjonsløst nettverk, ferdig med ledende valg- og styringsmekanismer. Det vil bli vårt hovedfokus når skyraketter og kostnadsfall kommer i gang, og vi ønsker å få en første desentralisert versjon innen utgangen av 2022. Vi forventer at det offentlige deles desentraliseringsplanen de neste månedene.

På samme måte som den nåværende begrensede gjennomgangen utgjør en foreløpig fase i StarkNes utvikling, er dagens nivå av StarkWare involvering også midlertidig. Vi ser på oss som en stillas av sorter, som tjener en viktig funksjon i byggefasen, men som rulles tilbake etter hvert.

Full node utviklingen, et spennende første skritt mot desentralisering, er allerede i gang. Fullnoder vil gjøre det mulig for hvem som helst å holde og verifisere tilstanden til nettverket lokalt, å holde oversikt over nøyaktig hva som skjer. Tre team —*Erigon, Nethermind og Equilibrium*— utvikler fulle noder, og potensielt mer vil starte utviklingen i fremtiden.

I en parallell utvikling pågår forberedelser til å åpne sekvensering og protestere programvare til publikum. Alle vil kunne delta som sekvenser eller en prover på StarkNet.

Det vil bli utviklet en struktur for å inspirere folk til å involvere seg, noe som vil inkludere økonomisk belønning. Starknettohonorarene vil delvis gå til forløpere og leverandører.

På mellomlang sikt regner vi med å gjøre sekvensen tilgjengelig for tredjeparter, og på lang sikt forventer vi også at flere team bygger sekvenserere som vil sekvenserer for StarkNet.

### Forbedring; Lytter alltid

I takt med fokus skifter til den neste utfordringen, vil vi fortsette å forbedre resultatene i fortiden. I tillegg til å fortsette arbeidet med alle[StarkNet](https://starknet.io/)vil ørene våre alltid være åpne for hele utviklersamfunnet. Så bli involvert i diskusjonen, via[Discord](https://discord.com/invite/uJ9HZTUk2Y),[StarkNet Shamans](https://www.google.com/search?client=safari&rls=en&q=StarkNet+Shamans&ie=UTF-8&oe=UTF-8)samfunn,[Twitter](https://twitter.com/Starknet_Intern), eller en annen rute, og bidra til å forme fremtidens skalering av blokkjer.