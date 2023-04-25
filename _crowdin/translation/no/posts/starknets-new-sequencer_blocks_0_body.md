### TL;DR

* En ny sekvenser for StarkNet er i ferd med å bli utviklet
* Det er en åpen kilde under Apache 2.0-lisensen
* Det er første mål å øke gjennomstrømningen til StarkNM

### En skinnende ny sekvenser

Vi er glade for å kunngjøre en ny StarkNet Sequencer er med i arbeidet. Som StarkNetts tekniske stabel beveger seg mot åpen kildekode, ifølge[Cairo 1.](https://medium.com/starkware/open-sourcing-cairo-1-0-b3100a664bb0)and[Papyrus Full Node](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202), vi fortsetter nå med StarkNets nye sekveler. Det vil være åpen kildekode, tilgjengelig under Apache 2.0 lisens, og du kan gå gjennom[repoet](https://github.com/starkware-libs/blockifier)nå!

Å bygge en ny Sequencer inngår i[StarkNet Roadmap](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de)vi presenterte for noen måneder siden. Implementering av den nye sekvensen starter med at**Blockifier**, modulen i sekvensen som utfører blokkutførelsen. Som forklart på veikartet forventes det at det skal være fordelaktig for StarkNetts resultater.

Vår tilnærming til bygging av denne sekvensen er den samme tilnærmingen som førte oss i StarkNet Alpha. Sekvenseren**vil bli implementert i nivå**, og vi deler i dag dens første modul. Over tid vil nye komponenter i sekvenseren fullføres, inntil det til slutt vil en Rust-basert sekvenser erstatte den aktuelle Python-baserte sekvenseren.

### Hva gjør sekvenseren?

På StarkNet er det etter brukere som sender transaksjoner, det første stoppet i transaksjonens reise til STARK-skalering, som er sekvensene. I StarkNet protokollen er sekvensatorene ansvarlig for å bestille transaksjonene og produsere blokker. Etter at blokken er opprettet av en sekvensgiver, og godkjent av konsensus-protokollen, overtar provene og genererer et bevis for L1.

![](/assets/1_ndrekwqunjixo_wskdeycw-1.png)

### Åpne kildekode

StarkNet Alpha ble lansert på Mainnet i november 2021. Fra starten er det forpliktet til å dele STARK-skalering med verden.

I dag lanserer vi de første i en linje av modulene til den nye sekvensen åpen kildekode. Det vil ta flere måneder før alle moduler og submoduler blir distribuert. Open sourcing everything will enable community members to contribute to the development, and to audit the codebase.

Dette vil knytte StarkNet nærmere et punkt med desentralisert tillatelsesfri sekvensering. Vi prosjekterer nå StarkNetts desentraliserte protokoll, og vi oppfordrer samfunnet til å delta i[forskning og diskusjonen](https://community.starknet.io/t/starknet-decentralized-protocol-consensus/5386).

### Ytelse

StarkNetts opprinnelige sekvensprogram er i stor grad en tilpasning av StarkEx-infrastruktur. Nå er det behov for infrastruktur som bygges spesielt for kravene til et desentralisert velfungerende nettverk.

Bygget i Rust, den nye sekvensen er utformet og utviklet med tanke på prestasjon. Den nye sekvensen bygger også på solide stiftelser: Papyrus, den nye[StarkNet full node,](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202)skal håndtere statsledelse, og ciro-rs, den nye Cairo-VM ved LambdaClass, vil fremskynde gjennomføringen av Kairo. Vi forventer at den nye sekvensen forbedres på eksisterende sekvenser for hvert tilfelle. Gjennomstrømmingen og forsinkelsen i nettverket forventes å forbedre dramatisk ved integreringen av denne sekvensen i StarkNet.

Vi forventer også at annen infrastruktur og utviklingsverktøy vil kunne ta i bruk den nye sekvensen for å forbedre utviklingserfaringen. Full node ytelse forventes å bli både bedre og alle rammeverk for prøving.

### Summary

Vi er glade for å kunngjøre i dag den nye åpen kildekode-sekvensen. Den første modulen er allerede tilgjengelig for samfunnet som skal gjennomgå, og vil bli fulgt med flere moduler de neste månedene som kommer. Vi er også glade for å ta et annet steg i veikartet for å bedre StarkNetts resultater. Vi ønsker å gjøre nettverket mer effektivt og tilgjengelig, og vi setter pris på støtten til alle som har sluttet oss på denne reisen.