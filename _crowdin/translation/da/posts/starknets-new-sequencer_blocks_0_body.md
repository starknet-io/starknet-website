### TL;DR

* En ny StarkNet sequencer bliver udviklet
* Det er open source under Apache 2.0 licens
* Det er første mål er at øge StarkNet ‘ s gennemløb

### En skinnende ny sequencer

Vi er glade for at annoncere en ny StarkNet Sequencer er i værkerne. Som StarkNet ‘ s tech stack bevæger sig mod open source, efter[Cairo 1.](https://medium.com/starkware/open-sourcing-cairo-1-0-b3100a664bb0)og[Papyrus Full Node](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202)fortsætter vi nu med StarkNet nye sequencer. Det vil være open source, tilgængelig under Apache 2.0 licens, og du kan gå tjekke[repo](https://github.com/starkware-libs/blockifier)nu!

Opbygning af en ny Sequencer er en del af den[StarkNet Roadmap](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de), som vi præsenterede for et par måneder siden. Implementering af den nye sequencer vil starte med udskiftning af**Blockifier**, modulet i den sequencer, der udfører blok udførelse. Som forklaret i køreplanen, forventes det at levere fordele for StarkNet ‘ s ydeevne.

Vores tilgang til at bygge denne sequencer er den samme tilgang, der styrede os i StarkNet Alpha. Den sequencer**vil blive implementeret i trin**, og vi deler i dag sin første modul. Over tid, nye komponenter af sequencer vil blive afsluttet, indtil i sidste ende en Rust-baseret sequencer vil erstatte den aktuelle Python-baseret sequencer helt.

### Hvad gør sequenceren?

På StarkNet, når brugerne sender transaktioner, det første stop i transaktionens rejse til STARK skalering er sequencere. I StarkNet protokol, sequencers er ansvarlig for at bestille transaktionerne og producere blokke. Efter at blokken er skabt af en sequencer, og godkendt af konsensusprotokollen, dystre overtage og generere et bevis for L1.

![](/assets/1_ndrekwqunjixo_wskdeycw-1.png)

### Open-Sourcing

StarkNet Alpha lanceret på Mainnet i november 2021. Lige fra starten var det forpligtet til at dele STARK's skalering med verden.

I dag frigiver vi den første i en linje af moduler af den nye open source sequencer. Det vil tage flere måneder at anvende alle moduler og undermoduler. Open sourcing alt vil gøre det muligt for fællesskabets medlemmer at bidrage til udviklingen og revidere kodebasen.

Dette vil kant StarkNet tættere på et punkt af decentraliseret permissionless sekventering. Vi er nu ved at designe StarkNets decentraliserede protokol, og vi opfordrer fællesskabet til at deltage i[forskningen og diskussionen](https://community.starknet.io/t/starknet-decentralized-protocol-consensus/5386).

### Ydeevne

StarkNet ‘ s oprindelige sequencer er stort set en tilpasning af StarkEx infrastruktur. Nu er der behov for infrastruktur, der er bygget specielt til kravene i et decentralt højtydende netværk.

Bygget i Rust, den nye sequencer er designet og udviklet med henblik på ydeevne. Den nye sequencer bygger også på solidt grundlag: Papyrus, den nye[StarkNet fulde node,](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202)vil håndtere statslig ledelse og cairo-rs, den nye Cairo-VM af LambdaClass, vil fremskynde Cairo-udførelsen . Vi forventer, at den nye sequencer til at forbedre på den eksisterende sequencer i alle aspekter. Den gennemstrømning og latens-tid af netværket forventes at forbedre dramatisk med integrationen af denne sequencer i StarkNet.

Vi forventer også, at andre infrastruktur- og udviklingsværktøjer kan bruge den nye sequencer til at forbedre udviklingsoplevelsen. Fuld node ydeevne forventes at forbedre samt alle de test rammer.

### Summary

Vi er glade for at annoncere i dag den nye open source-sequencer. Dens første modul er allerede tilgængelig for fællesskabet til gennemgang, og vil blive fulgt med flere moduler i de følgende måneder fremover. Vi er også glade for at tage endnu et skridt i vores køreplan for at forbedre StarkNet ydeevne. Vi sigter mod at gøre netværket mere effektivt og tilgængeligt, og vi værdsætter støtten fra alle, der har tilsluttet sig os på denne rejse.