### TL;DR

* Vi deler en detaljert plan for Regenesis, som er formet i omfattende diskusjoner med StarkNet-samfunnet. Spesiell takk til Kuba@SWM.
* Regenesen vil følge frigivelsen av Cairo 1.0, noe som gjør systemet sikrere ved å tillate enklere og tryggere StarkNet kontrakter
* Brukere bør være forberedt på å oppdatere deres lommebok under overgangsfasen
* Utviklere må levere sine kontrakter til Cairo 1.0

### Introduksjon

StarkNet Alpha går videre mot Regenesis, et viktig skritt mot produksjon. I denne oppdateringen ønsker vi å dele flere detaljer om hovedmotivasjonen for Regenesis —[Cairo 1.](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)— og for å forklare hva den vil kreve av brukere og utviklere. Etter Regenesis, vil StarkNet fungere kun med Cairo 1,0 baserte kontrakter, og vil starte fra en ny geneseblokk med eksisterende tilstand.

Hva vil Regenese kreve fra brukere? En enkel oppdatering av deres lommebok. Hva vil det kreve av bygningsmennene til StarkNetts apps? Portere kontraktene til Cairo 1,0 og følge en enkel retningslinje for oppgradering. Spesielt vil det ikke være noen omstart fra en ren tilstand, og vi vil forbli med samme StarkNet-forekomst. betydning for at det ikke vil være noe behov for migrasjon**.**

Regeneseplanen skal bevare tilstanden i applikasjonene fullt ut, og ikke pådra seg noen nedtid til applikasjonene. Derfor vil søknader som følger retningslinjene vi gir kunne lansere StarkNet Alpha Mainnet med en gang uten noen forstyrrelser i driften av dem og brukerne av dem under sykdomsprosessen. Det er forpliktet til å jobbe med samfunnet og gi all støtte til å gjøre prosessen så smidig som mulig.

Vi tar denne retningen som følge av omfattende diskusjoner med fellesskapet, med et viktig forslag fra Mansion Software team.

### Hvorfor Regenesise?

#### Kairo 1.0 og Sierra

Hovedmotivasjonen for pleiing preges av de nye mulighetene fra Kairo 1. — nemlig sekvenser for DOS-beskyttelse, sensurering og gassmåling, som er viktige for StarkNet som et desentralisert nettverk.

Cairo 1.0 vil sørge for at alle transaksjoner kan påvises. Dette vil tillate at StarkNet inkluderer reverserte transaksjoner i blokker og genererer et bevis på gjennomføringen. Denne mekanismen vil gjøre det mulig for sekvenserne å betale på utførelsen av reverserte transaksjoner, noe som øker DOS-beskyttelsen mot ondsinnede aktører. I tillegg vil Cairo 1.0 støtte gassmåling, som vil gjøre StarkNet i stand til å gå over til et mer intuitivt gebyrmarked. Til slutt vil dette tillate StarkNet å innføre tvangstransaksjoner fra L1, og vil forbedre tetthetsmotstandsevnen til nettverket.

For å trekke tilbake disse fordelene, kan ikke Cairo v0 og Cairo 1.0 kontrakter blandes. Feil utsagn kan ikke påvises å være feil, og det kan heller ikke skje gasssporing dersom det finnes biter av Cairo v0-kontrakter. For å oppnå dette må vi fase ut Cairo v0-kode fullstendig fra StarkNet state, ergo Regenesis.

**Etter Regenesis får vi et Starknet system fullt ut basert på Cairo 1,0.**

#### Forenkling av kode og protokoll

StarkNet, i Alpha, gjennomgikk allerede mange forandringer. Alle versjoner så langt endret StarkNet OS, blokker og transaksjonsstruktur. Dette forårsaket at noe av koden var foreldet. Men alle noder og infrastrukturleverandører (for eksempel indeksere og statlige utforskere) må være bevisste, og implementere, alle tidligere oppførsler til StarkNet Alpha-versjoner for å synkronisere med den pålitelige statusen. Uten Regenese kan denne belastningen være et sterkt skremsel for utviklere som ville vurdere å bygge slike tjenester for StarkNet.

Før vi skal til produksjon og som forberedelse til en desentralisert verden med mange infrastrukturverktøy vil vi derfor redusere protokollens kompleksitet. Vi skulle nå dette ved å ikke kreve framtidig infrastruktur for å gjennomføre noe StarkNet 0. kode, og marker den første blokken etter overgangsperioden som genespunktet.

### Var regeneser? Den totale tidslinjen

Regenesen vil følge frigivelsen av Cairo 1.0, som etter planen skal finne sted i slutten av 2022. I løpet av første kvartal 2023 vil StarkNet bli oppdatert for å støtte Cairo 1. og vi sikter mot å migrere til et fullstendig Cairo 1.0-basert nettverk innen utgangen av Q1.

**Brukere og applikasjoner må foreta overgangen gjennom denne perioden.**

![](/assets/1_ef85shzd2uudwex-cy8wdg-1.png)

### Så hva må jeg ha Knå?

Programutviklerne må være oppmerksomme på følgende aspekter rundt Regenesis:

1. Pass på at kontrakten din er klar for oppgraderingen. De fulle teknisitetene i planen deles i[StarkNet Community Forum](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080). Når detaljene vil bli ferdigstilt, vil vi dele en kortfattet veiledning.
2. Sørg for at du er klar til å sette koden din til Cairo 1.0. Se neste avsnitt for alle de siste detaljene.

#### Portere Kontrakten til Cairo 1.0

Cairo 1.0 holder lovnad for StarkNet-utviklere. En forbedring av eksisterende Cairo som blir tryggere, bedre og enklere for å skrive kontrakter, med forbedret syntaks, fullskjermet typesystem (naturlig uint256 personer? og mer. Utviklere vil være påkrevd for å sende sine eksisterende StarkNet kontrakter til Cairo 1.0 syntaks. Men siden logikk- og kodestrukturen forblir den samme, Dette bidraget forventes å være ubetydelig i forhold til innsatsen det tok å utvikle appen på første plass.

I denne sammenhengen er det verdig å merke deg at du kan velge å revidere Kairo 1.0 versjonen av appen. Dersom appen din allerede har blitt revidert tidligere blir rerevisjonsprosessen vesentlig billigere og mer enkelt, siden revisorene allerede er kjent med din logic.

Vi vil legge ut all dokumentasjon rundt Cairo 1.0, sammen med opplæring og verksted i 4. kvartal 2022.

### Jeg er en StarkNet User. Hva bør jeg gjøre?

Som bruker vil du sannsynligvis måtte gjennomføre noen handlinger under Regenesis. I det minste må du oppgradere kontopengen. Ikke gjør det i løpet av de (få måneder lange) overgangsperioden vil føre til at du mister kontoen din. Avhengig av oppgraderingsbanen valgt av utviklerne av StarkNet appene du bruker, kan det hende du må ta ekstra steg.

Vi minner om at StarkNet fortsatt er i Alpha-fasen. og brukere må være oppmerksomme på kommunikasjon med StarkNet og appene de bruker. Det er ditt ansvar å sørge for tidlig oppgradering til det nye systemet. *Å være en tidlig adopter er ikke alltid enkel, og vi regner på deg å gjøre ditt parti!*

### Til konkluderer

Cairo 1.0 er rett rundt hjørnet og gir mange spennende gevinster og forbedringer for StarkNet og utviklerne av den. For å høste disse må en anerkjent hendelse av nettverket ytterligere. Heldigvis har vi et design som gjør denne prosessen så minimalt forstyrrende – helt sømløs for brukerne, og ganske enkelt for søknader.

Vi oppfordrer deg til å delta i[samfunnsdiskusjon](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080)og dele dine kommentarer og bekymringer, I tillegg til å holde deg oppdatert om stegene må du ta som en applikasjonsutvikler på StarkNet.