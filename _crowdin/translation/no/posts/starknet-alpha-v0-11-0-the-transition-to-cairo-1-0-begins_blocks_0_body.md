## TL;DR

* Starknet alfa v0.11.0 er ute og live på Testnet
* Du kan nå distribuere og samhandle med Cairo 1.0 kontrakter på Starknet Testnet!
* Beregning på Starknet er 5x billigere!
* For første gang vil oppgraderingen av Mainnet til Starknet alfa v0.11.0 bli gjort til avstemming.
* Dette markerer starten på overgangsperioden før[Regenese](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)
* Distribuerer Cairo 1. kontrakter på Mainnet vil kun være aktivert etter noen få uker med å kjøre på Testnet, når vi er sikre et godt system.

## Introduksjon

Vi er glade for å annonsere at det tøffe Starknet alpha v0.11.0 er lever på Testnet! Hvorfor er dette et stort skritt for Starknet? I Starknet v0.11.0 kan du erklære, distribuere og kjøre[Cairo 1.0](https://medium.com/starkware/cairo-1-0-is-here-7e1ac8377038)smartkontrakter. Vi introduserer også en ny systemsamtale som gir en smidig overgang til en implementering av Cairo 1.0 på en smidig måte.

Cairo 1.0 forbedrer Starknet på to forskjellige områder. Det forbedrer først utviklingsopplevelsen ved å tilby et rikere programmeringsspråk som introduserer (bl.a. typer/generics/trekk/feilhåndtering til Cairo. For det andre: Cairo 1.0 spiller en nøkkelrolle på den desentraliseringsreisen: Cairo 1.0 kontrakter som sendes i Starknet alfa v0.11.0 kompilerer til Sierra. Sierra garanterer at det er bevist at alle kontraktsinn- leggelser som er en sentral eiendom i en desentralisert Starknet.

En annen viktig forbedring som kommer i denne versjonen, er en kostnadsreduksjon på 5x i beregningen. Dette gjør Starknet enda mer vennlig til beregningsintensive søknader. Mer informasjon under.

## Gjør klar for avhandling

Starknet alfa v0.11.0 markerer starten på overgangsperioden, noe som gjør det mulig å forberede seg foran Starknets Regenesis. Regeneseplanen for Starknet ble[publisert](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)for noen måneder siden. og den fokuserer på å overføre fra et system basert på Cairo 0 til et system basert på Cairo 1.0.

I overgangsperioden får eksisterende Cairo 0-kontrakter (dersom de er oppgraderbare) mulighet til å opprettholde adresse og lagring, sa Lund. og sømløst overgang til Kairo 1. (se neste seksjon).

Som en Starknet-bruker betyr dette at du bare trenger å oppgradere lommeboken når den nye Kairo 1. implementeringen av kontoen din frigis (du vil kunne gjøre det når som helst opp til Regenesis selv). Ingen nedetid er forventet, alle appene i systemet vil fortsette å fungere som vanlig.

Etter Regenesis slutter Starknet å støtte de resterende Cairo 0 kontraktene. Dette vil være godt kommunisert på forhånd, og utviklerne vil få tilstrekkelig tid til å migrere kontrakter. Overgangsperioden er forventet å vare noen måneder, og utviklerne av dapp kan allerede begynne å migrere implementeringen sin til Kairo 1.0. Ved slutten av overgangsperioden vil det skje en Regenese.

## Jevn migrering til Kairo 1,0

Med overgangen til Cairo 1.0 er eksisterende Cairo 0-kontrakter utdatert og støttes ikke lenger på Regenesis. For å tillate oppgraderbare Cairo 0-kontrakter å fortsette driften, selv etter Regenesis, og behold tilstanden satt opp til den tiden, har vi lagt til et nytt systemanrop — [](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#replace_class_syscall). Oppgraderingbare kontrakter har ingen problemer med oppgradering til en Cairo 1. gjennomføring, men den underliggende proxy (kontrakten som holder den faktiske staten) vil fortsatt ligge fast i implementeringen av Cairo 0. \`replace_class\` syscall løser dette problemet ved å la proxy skrive ut sin underliggende klasse, i. . Behold samme adresse og lagring, men erstatt implementasjonen.

## Datamaskinen er nå 5x billigere!

I dag har Starknettotransaksjonsavgifter to hovedkomponenter: Beregning og on-chain data. Det beregnete elementet av transaksjonsavgiften i Starknet fastsettes av den marginale kostnaden ved å verifisere sin dokumentasjon på L1 (se[docs](https://docs.starknet.io/documentation/architecture_and_concepts/Fees/fee-mechanism/)for mer informasjon).

Opprinnelig er våre 200m Kairo-tiltak med bevis som krever 5 m gass for verifisering, ført til en naiv estimering på 0,05 gass per kairo-trinn. Siden da vi har flyttet til[rekursive bevis](https://medium.com/starkware/recursive-starks-78f8dd401025)som tillater en betydelig reduksjon i L1-verifiseringskostnader (bare roten av et rekursivt tre når L1). Det er på tide å oppdatere våre opprinnelige estimater – prisen på hvert enkelt Kairo-trinn på L2 reduseres med 5x, og skal nå koste 0. 1 gass.

Denne kostnadsreduksjonen er vesentlig for beregningsintensive søknader, for eksempel kon- trakter med ikke-underskrifter. Enkle transaksjoner vil se en mindre kostnadsreduksjon (~ 5 %). I fremtidige versjoner tar vi hånd om den andre komponenten: datakostnader. Når alternativer til data om kjeden blir introdusert i Starknet (aka Volition), vil kostnadsreduksjonen merkes over bord.

## Starknet styring først Stemme

Den første fasen med styring av Starknet har lansert (flere detaljer[her](https://medium.com/starknet-foundation/starknets-governance-first-phase-4614c7566f40)). Samfunnsmedlemmer kan nå delta i utformingen av Starknet gjennom en ekstra kanal, nemlig stemmegivning på protokollendringer.

Starknet Governance first fase vil fokusere på Starknet protokolloppgraderinger. Hver oppdatering av Starknet vil først bli distribuert på Testnet; Velgerne skal ha en 6-dagers periode for å undersøke og teste den oppgraderte versjonen etter hvert som den kjører på Goerli. I løpet av denne tiden vil et Snapshot forslag bli åpnet, og samfunnet kan stemme om man skal godkjenne den nye versjonen for Mainnet distribusjon.

Hvis forslaget får flertallet av ‘YES’ stemmer i løpet av en 6-dagers valgperiode, blir forslaget sendt ut, og Starknet Mainnet oppgraderes tilsvarende.

Starknet alfa v0.11.0 er den første versjonen av Starknet som er oppe for en stemme. Avstemningen i Starknet alfa v0.11.0 vil bli åpen for seks dager fra testnet-distribusjonen.

Relevante lenker:

* [Øyeblikksbilde plass](https://snapshot.org/#/starknet.eth/proposal/0x00889bc468509610e516e8602f00b21ca8c32466dd4f0140eca38becb7f40bef)
* [Delegasjon oppdagelsesside](https://delegate.starknet.io/)
* Starknet alfa v0.11.0 diskusjonstråd på[fellesfora](https://community.starknet.io/t/proposal-starknet-alpha-v0-11-0/50334)

## Kairo 1.0 og Sierra

Sierra (**S**afe**I**nt**e**rmediat**R**ep**r**esent**en**) er en mellomrepresentasjon som kompilerer til Kairo forsamlingen (CASM). En utvikler vil kompilere Cairo 0 til CASM og sende resultatet til Starknet sekvensen til Starknett. Med Cairo 1.0, kompilerer utviklerne sin kode til Sierra, og sender denne formidlende representasjonen til sekvenseren. Deretter vil sekvenseren kompilere til CASM. Sierra garanterer å kompilere til «safe CASM», dvs. et delsett av CASM som ikke kan svikle, gjør det mulig å foreta hver enkelt utførelse og enhver gjennomføring. Dette garanterer at sekvensen vil kunne ta gebyr selv for reverserte transaksjoner, som beskytter mot DOS. For mer informasjon, se[dokumentasjonen](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/).

![](https://miro.medium.com/v2/resize:fit:1400/0*KsAwaJTIsOuCsJIe)

Starknet alfa 0.11.0 vil bruke[Cairo 1.0-alpha.6 versjon](https://github.com/starkware-libs/cairo/releases/tag/v1.0.0-alpha.6). Denne versjonen er nær[funksjon paritet](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)med Cairo 0, og alle Starknet-systemsamtaler er allerede tilstede.

Merk at sekvensen på Starknet bruker en fast kompilatorversjon, hvilket betyr at språkforbedringer kanskje ikke er tilgjengelig umiddelbart i Starknet, og vil kun være tilgjengelig etter en Starknet versjon oppdatering. Spesifikt mens forbedringer som påvirker Cairo 1. → Sammenstillingen av Sierra kan tre i kraft umiddelbart. endringer i Sierra → CASM-kompilatoren (se[dokumentasjonen](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/)for mer informasjon) må vente på en Starknet oppgradering.

## Hva Else er nytt?

### Ny transaksjonstype — Declare v2

Vi legger til[en ny transaksjonstype](https://docs.starknet.io/documentation/architecture_and_concepts/Blocks/transactions/#declare_v2_cairo_1_0)for deklarasjonen Cairo 1.0 klasser.

Denne nye \`declare\` transaksjonsversjonen ligner på de eksisterende \`declare\`, med to viktige forskjeller:

* Klasseobjektet som nå sendes representerer Sierra i stedet for CASM, det vil si at undervisningens semantikk er definert av Sierra-representasjonen.
* Brukeren signerer også kompilert klasse hash. Dette er et viktig steg inntil Sierra→CASM kompilering vil bli påvist som en del av Starknet OS.

For flere detaljer, se[docs](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#what_to_expect).

Fra utbyggerens synspunkt er erfaringene uendret. Etter å ha skrevet din Cairo 1.0 kode kan du bruke CLI som erklærer klassen.

**Merk at innledningsvis vil \`declare v2\` transaksjoner ikke bli godtatt på Starknet Mainnet. Etter et eksperimenterende tidsrom på Testnet, vil den nye transaksjonstypen bli aktivert på Mainnet og Cairo 1.0 klasser blir tilgjengelig.**

### Poseidon er her

[Poseidon](https://www.poseidon-hash.info/)er en familie med hashfunksjoner som er laget for å ha svært effektive algebraiske kretser. De kan derfor være svært nyttige i ZK for å påvise systemer som STARK og SNARK. Fra og med Starknet alfa v0,11.0, vil utviklerne kunne bruke Poseidon. I tillegg vil noen av hash-beregningene som er en del av Starknet-protokollen, gå over til Poseidon (spesifikt: klasse hash, kompilert klasse hash og deler av statens forpliktelse vil bruke Poseidon, se[dokumentasjonen](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#poseidon_hash)for mer detaljer). I fremtiden vil flere interne komponenter gå til bruk av Poseidon hash-funksjonen.

Den nøyaktige versjonen og parametrene som brukes i Starknet finner du[her](https://docs.starknet.io/documentation/architecture_and_concepts/Hashing/hash-functions/#poseidon_hash).

### Diverse endringer

Som tidligere versjoner av Starknet har en oppgradering også betydning for APIer og andre komponenter på lavt nivå. Nedenfor liste vi opp de og adressere de konkrete endringene som ble gjort:

* v0 invok/deklarere transaksjoner støttes ikke lenger
* →L2 meldinger som nå krever[gebyrer](https://docs.starknet.io/documentation/architecture_and_concepts/L1-L2_Communication/messaging-mechanism/#l1-l2_message_fees). Det vil si at meldinger med null gebyr ikke blir behandlet av Starknet-sekvensen
* Dataformatet på kjeden er[endret](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/#on_chain_data_post_v0_11_0)
* [API endringer](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#api_changes)(ikke alle endringer er listet her, vennligst se docs for en uttømmende liste:
* lagt til et nytt \`get_compiled_class_by_class_hash\` endepunkt
* \`get_class_by_hash\` returnerer både Cairo 0 / Kairo 1.0 klasser (avhengig av den forespurte hash)
* \`get_state_update\` har en ny seksjon for utskiftede klasser, og deklarasjoner er delt mellom Cairo 0 og Cairo 1 klassene.
* \`estimate_fee\` og \`simulate_tx\` kan nå hoppe over validering
* En[ny](https://github.com/starkware-libs/starknet-specs/releases/tag/v0.3.0-rc1)Starknet JSON-RPC-versjon

## Hva kommer nå?

Nå som all den 1,0 relaterte infrastrukturen er på plass, kan du forvente:

* Ytterligere språkforbedringer til Cairo 1.0
* Utøving forbedringer:[som lovt](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de), vi fortsetter å bevege oss fremover mot å øke TPS. Neste steg i veikartet er i ferd med å overføre til[Rust sekvenseren](https://github.com/starkware-libs/blockifier), som er utviklet i åpen fase under Apache 2. lisens. Den nye sekvensen vil gjøre bruk av[rust CairoVM](https://github.com/lambdaclass/cairo-rs)og[Papyrus](https://github.com/starkware-libs/papyrus)full node, som danner ytelsesTrio.
* Offchain[DA](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/)! I denne versjonen håndterte vi beregningsdelen av transaksjonens kostnader. I kommende versjoner vil vi håndtere datakostnadene som er knyttet til kjeden, og som i dag har den dominerende kostnaden for gjennomsnittlige transaksjoner.

![](/assets/starknet-alpha-v0.11.0-diagram.png)