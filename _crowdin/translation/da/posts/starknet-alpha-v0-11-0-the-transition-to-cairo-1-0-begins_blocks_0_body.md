## TL;DR

* Starknet alpha v0.11.0 er ude og live på Testnet
* Du kan nu implementere og interagere med Cairo 1.0 kontrakter på Starknet Testnet!
* Beregning på Starknet er 5x billigere!
* For første gang, Mainnet opgradering til Starknet alpha v0.11.0 vil blive sat til en regeringsførelse afstemning
* Dette markerer begyndelsen af overgangsperioden før[Gengenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)
* Implementering af Kairo 1. Kontrakter på Mainnet vil først blive aktiveret efter et par ugers kørsel på Testnet, når vi sikrer, at det nye system fungerer gnidningsløst.

## Indledning

Vi er glade for at kunne meddele, at den længe ventede Starknet alpha v0.11.0 lever på Testnet! Hvorfor er det et stort skridt for Starknet? I Starknet v0.11.0, kan du erklære, implementere og køre[Cairo 1.0](https://medium.com/starkware/cairo-1-0-is-here-7e1ac8377038)smarte kontrakter. Vi introducerer også et nyt systemopkald, der muliggør en smidig overgang af eksisterende kontrakter til en implementering af Cairo 1.0.

Cairo 1.0 forbedrer Starknet i to forskellige aspekter. For det første forbedrer det udviklingserfaringen ved at tilbyde et rigere programmeringssprog, som introducerer (blandt andre) typer/generiske egenskaber/fejlhåndtering til Cairo. For det andet, Cairo 1.0 spiller en central rolle i Starknet decentralisering rejse: Cairo 1.0 kontrakter sendes i Starknet alpha v0.11.0 kompilere til Sierra. Sierra garanterer, at enhver kontraktudførelse er beviselig, hvilket er en afgørende ejendom i en decentraliseret Starknet.

En anden vigtig forbedring, der kommer i denne version er en 5x omkostningsreduktion for beregning. Dette vil gøre Starknet endnu mere venlige til beregningskrævende applikationer. Flere detaljer nedenfor.

## Klar til gendannelse

Starknet alpha v0.11.0 markerer begyndelsen af overgangsperioden, som vil tillade forberedelse forud for Starknet Gengenese. Starknets Regenesis plan blev[offentliggjort](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)for et par måneder siden og det fokuserer på at skifte fra et system baseret på Cairo 0 til et system baseret på Cairo 1.0.

I overgangsperioden har eksisterende Cairo 0 kontrakter (hvis de kan opgraderes) mulighed for at opretholde deres adresse og opbevaring, og problemfrit overgå deres implementering til Cairo 1. (se næste afsnit).

Som Starknet-bruger betyder det, at du kun behøver at opgradere din tegnebog, når den nye Cairo 1. implementering af din konto er udgivet (du vil være i stand til at gøre det til enhver tid op til Gengenesis selv). Ingen nedetid forventes, alle dapps i systemet vil fortsætte med at fungere som sædvanligt.

Efter genoprettelsen vil Starknet stoppe med at støtte de resterende Cairo 0 kontrakter i hele systemet. Dette vil blive godt kommunikeret i forvejen, og udviklere vil få tilstrækkelig tid til at migrere deres kontrakter. Overgangsperioden forventes at vare et par måneder, og dapp udviklere kan allerede begynde at migrere deres implementering til Cairo 1.0. Ved afslutningen af overgangsperioden vil genoprettelsen ske.

## Glat Migration til Kairo 1.0

Med overgangen til Kairo 1.0, er eksisterende Kairo 0 kontrakter forældede og vil ikke længere blive understøttet ved gendannelse. For at tillade opgraderbare Cairo 0 kontrakter til at fortsætte med at fungere, selv efter genoprettelsen og holde tilstanden konstrueret indtil det tidspunkt, vi har tilføjet et nyt systemopkald — ['replace_class'](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#replace_class_syscall). Opgraderbare kontrakter har ingen problemer med opgradering til en Kairo 1. implementering, men den underliggende proxy (den kontrakt, der besidder den faktiske stat) vil stadig blive holdt fast i implementeringen af Kairo 0. Den \`replace_class\` syscall løser dette problem ved at lade proxy-kontrakten erstatte sin underliggende klasse, dvs. . holde den samme adresse og oplagring, men erstatte gennemførelsen.

## Beregning er nu 5x billigere!

I dag har Starknet-transaktionsgebyrer to store komponenter: Computation og on-chain data. Det beregningsmæssige element af Starknet-transaktionsgebyret bestemmes af den marginale omkostning ved at verificere sin dokumentation på L1 (se[dokumenterne](https://docs.starknet.io/documentation/architecture_and_concepts/Fees/fee-mechanism/)for flere detaljer).

Oprindeligt vores 200m Cairo skridt i et bevis, der kræver 5 m gas til verificering førte til et naivt skøn på 0,05 gas per Cairo trin. Siden da, vi er flyttet til[rekursive beviser](https://medium.com/starkware/recursive-starks-78f8dd401025), som giver mulighed for en betydelig reduktion i L1-verifikationsomkostninger (kun roden af et rekursionstræ når L1). Tiden er nu inde til at opdatere vores oprindelige skøn i overensstemmelse hermed - prisen på hvert Cairo-trin på L2 vil blive reduceret med 5 x og vil nu koste 0. 1 gas.

Denne omkostningsreduktion er betydelig for beregningskrævende applikationer, f.eks. kontoaftaler med ikke-indfødte underskrifter. Enkle transaktioner vil se en mindre omkostningsreduktion (~ 5%). I fremtidige versioner, vil vi håndtere den anden komponent: on-chain data omkostninger. Når der indføres alternativer til on-chain data til Starknet (alias Volition), vil omkostningsreduktionen kunne mærkes over hele linjen.

## Starknet Governance Første Afstemning

Den første fase af Starknet Governance har lanceret (flere detaljer[her](https://medium.com/starknet-foundation/starknets-governance-first-phase-4614c7566f40)). Fællesskabets medlemmer kan nu deltage i udformningen af Starknet via en ekstra kanal, nemlig afstemning om protokolændringer.

Starknet Governance første faser vil fokusere på Starknet protokolopgraderinger. Hver Starknet version opgradering vil først blive implementeret på Testnet; vælgerne vil have en 6-dages periode til at undersøge og teste den opgraderede version, som den kører på Goerli. I løbet af denne tid, et Snapshot forslag vil blive åbnet, og fællesskabet kan stemme om, hvorvidt at godkende den nye version til Mainnet implementering.

Hvis forslaget får et flertal af ja-stemmerne i løbet af 6-dages afstemningsperioden, vil forslaget passere og Starknet Mainnet blive opgraderet i overensstemmelse hermed.

Starknet alpha v0.11.0 er den første Starknet version, som er op til en afstemning. Starknet alpha v0.11.0 afstemningen vil være åben i seks dage startende fra Testnet implementering.

Relevante links:

* [Snapshot plads](https://snapshot.org/#/starknet.eth/proposal/0x00889bc468509610e516e8602f00b21ca8c32466dd4f0140eca38becb7f40bef)
* [Opdagelse af delegationer](https://delegate.starknet.io/)
* Starknet alpha v0.11.0 diskussionstråd på[Community forum](https://community.starknet.io/t/proposal-starknet-alpha-v0-11-0/50334)

## Cairo 1.0 og Sierra

Sierra (**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**tion) er en mellemliggende repræsentation, der samler til Cairo samling (CASM). Før Starknet alpha v0.11.0, en udvikler ville kompilere Cairo 0 i CASM og sende resultatet til Starknet sequencer. Med Cairo 1.0, udviklere kompilere deres kode til Sierra, og sende denne mellemliggende repræsentation til sequencer. Den sequencer vil derefter kompilere det til CASM. Sierra er garanteret at kompilere til “safe CASM”, dvs. en delmængde af CASM, der ikke kan mislykkes, hvilket gør hver eneste udførelse beviselig. Dette sikrer, at sequencer vil være i stand til at opkræve gebyrer selv for omvendte transaktioner, beskyttelse mod DOS. For mere information, se[dokumenterne](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/).

![](https://miro.medium.com/v2/resize:fit:1400/0*KsAwaJTIsOuCsJIe)

Starknet alpha 0.11.0 vil bruge[Cairo 1.0-alpha.6 version](https://github.com/starkware-libs/cairo/releases/tag/v1.0.0-alpha.6). Denne version er tæt på[funktion paritet](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)med Cairo 0, med alle Starknet systemopkald allerede til stede.

Bemærk, at Starknet sequencer bruger en fast compiler version, hvilket betyder sprogforbedringer er muligvis ikke umiddelbart tilgængelige i Starknet, og vil kun være tilgængelige efter en Starknet version opdatering. Specifikt, mens forbedringer, der påvirker Kairo 1. → Sierra kompilering kan træde i kraft straks, ændringer til Sierra → CASM compiler (se[docs](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/)for flere detaljer) skal vente på en Starknet opgradering.

## Hvad Else er nyt?

### Ny transaktionstype — Declare v2

Vi tilføjer[en ny transaktionstype](https://docs.starknet.io/documentation/architecture_and_concepts/Blocks/transactions/#declare_v2_cairo_1_0)til at erklære Cairo 1.0 klasser.

Denne nye \`erklære\` transaktionsversion svarer til den eksisterende \`erklære\`, med to vigtige sondringer:

* Klassen objekt bliver sendt nu repræsenterer Sierra snarere end CASM, dvs. klassen semantik er defineret af Sierra repræsentation.
* Brugeren signerer også den kompilerede klasse hash. Dette er et afgørende skridt, indtil Sierra→CASM samling vil blive bevist som en del af Starknet OS.

For flere detaljer, se[dokumenterne](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#what_to_expect).

Fra udviklerens synspunkt er oplevelsen stadig den samme. Efter at have skrevet din Cairo 1.0 kode, kan du bruge CLI til at erklære klassen.

**Bemærk, at i første omgang \`erklærer v2\` transaktioner ikke vil blive accepteret på Starknet Mainnet. Efter en periode med eksperimenter på Testnet, vil den nye transaktionstype blive aktiveret på Mainnet, og Cairo 1.0 klasser vil blive tilgængelige.**

### Poseidon er her

[Poseidon](https://www.poseidon-hash.info/)er en familie af hash funktioner designet til at have meget effektive algebraiske kredsløb. Som sådan kan de være meget nyttige i ZK bevise systemer som STARKs og SNARKs. Fra Starknet alpha v0.11.0, udviklere vil være i stand til at bruge Poseidon. Derudover, nogle af de hash beregninger, der er en del af Starknet protokollen vil gå over til Poseidon (specifikt, klassen hash, kompileret klasse hash, og dele af statens forpligtelse vil bruge Poseidon, se[dokumenterne](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#poseidon_hash)for flere detaljer). Fremover vil flere interne komponenter gå over til at bruge Poseidon hash funktion.

Den nøjagtige version og parametre, der bruges i Starknet kan findes[her](https://docs.starknet.io/documentation/architecture_and_concepts/Hashing/hash-functions/#poseidon_hash).

### Diverse ændringer

Ligesom tidligere Starknet versioner, en opgradering har også konsekvenser for vores API'er og andre komponenter på lavt niveau. Nedenfor viser vi dem og adresserer de specifikke ændringer, der blev foretaget:

* v0 invoke/declare transactions understøttes ikke længere
* L1→L2 beskeder kræver nu[gebyrer](https://docs.starknet.io/documentation/architecture_and_concepts/L1-L2_Communication/messaging-mechanism/#l1-l2_message_fees). Det vil sige, meddelelser sendt med nul gebyr vil ikke blive behandlet af Starknet sequencer
* Dataformatet on-chain er[ændret](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/#on_chain_data_post_v0_11_0)
* [API ændringer](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#api_changes)(ikke alle ændringer er angivet her, henvises til dokumenterne for en udtømmende liste) :
* tilføjede et nyt \`get_compiled_class_by_class_hash\` endpoint
* \`get_ class_ by_ hash\` returnerer både Cairo 0 / Cairo 1. 0 klasser (afhængigt af det ønskede hash)
* \`get_state_update\` har et nyt afsnit for erstattede klasser, og deklarationer er delt mellem Kairo 0 og Kairo 1 klasser.
* \`estimate_fee\` og \`simulate_tx\` kan nu springe over valideringen
* En[ny](https://github.com/starkware-libs/starknet-specs/releases/tag/v0.3.0-rc1)Starknet JSON-RPC version

## Hvad kommer næste?

Nu, hvor al Cairo 1.0-relateret infrastruktur er blevet etableret, kan du forvente:

* Yderligere sprogforbedringer til Cairo 1.0
* Ydeevneforbedringer:[som lovet](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de)fortsætter vi med at bevæge os fremad mod en markant forøgelse af TPS. Det næste skridt i køreplanen er at gå over til[Rust sequenencer](https://github.com/starkware-libs/blockifier), som er udviklet i det åbne under Apache 2. licens. Den nye sequencer vil gøre brug af[rusten CairoVM](https://github.com/lambdaclass/cairo-rs)og[Papyrus](https://github.com/starkware-libs/papyrus)fuld node, der udgør Performance Trio.
* Offchain[DA](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/)! I denne version håndterede vi den beregningskomponent af transaktionens omkostninger. I de kommende versioner vil vi håndtere omkostningerne til on-chain data, som i dag er de dominerende omkostninger for gennemsnitlige transaktioner.

![](/assets/starknet-alpha-v0.11.0-diagram.png)