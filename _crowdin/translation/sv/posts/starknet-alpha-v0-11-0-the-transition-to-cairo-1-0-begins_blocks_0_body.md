## TL;DR

* Starknet alfa v0.11.0 är ute och lever på Testnet
* Du kan nu distribuera och interagera med Kairo 1.0 kontrakt på Starknet Testnet!
* Beräkning på Starknet är 5x billigare!
* För första gången kommer Mainnet uppgradering till Starknet alpha v0.11.0 att röstas igenom av en bolagsstyrning.
* Detta markerar början på övergångsperioden före[Regenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)
* Utplacering av Kairo 1. Kontrakt på Mainnet kommer att aktiveras först efter några veckors löpning på Testnet, när vi ser till att det nya systemet fungerar smidigt.

## Introduktion

Vi är glada att meddela att den mycket efterlängtade Starknet alpha v0.11.0 är live på Testnet! Varför är detta ett stort steg för Starknet? I Starknet v0.11.0 kan du deklarera, distribuera och köra[Kairo 1.0](https://medium.com/starkware/cairo-1-0-is-here-7e1ac8377038)smarta kontrakt. Vi introducerar också ett nytt systemsamtal som möjliggör en smidig övergång av befintliga kontrakt till en implementering av Kairo 1.0.

Kairo 1.0 förbättrar Starknet i två olika aspekter. Först och främst förbättrar det utvecklingserfarenheten genom att erbjuda ett rikare programmeringsspråk, som introducerar (bland annat) typer/generik/egenskaper/felhantering till Kairo. För det andra spelar Kairo 1.0 en nyckelroll i Starknets decentraliseringsresa: Kairo 1.0 kontrakt som skickas i Starknet alfa v0.11.0 sammanställs till Sierra. Sierra garanterar att varje kontrakt utförande är bevisligt, vilket är en avgörande egendom i en decentraliserad Starknet.

En annan viktig förbättring som kommer i denna version är en 5x kostnadsminskning för beräkning. Detta kommer att göra Starknet ännu mer vänligt mot beräkningsintensiva applikationer. Mer information nedan.

## Få Redo för Regenesis

Starknet alfa v0.11.0 markerar början av övergångsperioden, vilket kommer att möjliggöra förberedelse inför Starknets Regenesis. Starknets Regenesis plan[publicerades](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)för några månader sedan och det fokuserar på övergången från ett system baserat på Kairo 0 till ett system baserat på Kairo 1.0.

Under övergångsperioden, befintliga Kairo 0 kontrakt (om de är uppgraderbara) har möjlighet att behålla sin adress och lagring, och sömlöst övergå deras genomförande till Kairo 1. (se nästa avsnitt).

Som Starknet-användare innebär detta att du bara behöver uppgradera din plånbok när det nya Kairo 1. implementering av ditt konto släpps (du kommer att kunna göra det när som helst upp till Regenesis själv). Ingen stilleståndstid förväntas, alla dapps i systemet kommer att fortsätta att fungera som vanligt.

Efter Regenesis, kommer Starknet sluta stödja de återstående Kairo 0 kontrakt i hela systemet. Detta kommer att kommuniceras väl i förväg, och utvecklare kommer att ges tillräckligt med tid för att migrera sina kontrakt. Övergångsperioden förväntas pågå under några månader, och dapp-utvecklare kan redan migrera sitt genomförande till Kairo 1.0. I slutet av övergångsperioden, kommer Regenesis att hända.

## Smidig migration till Kairo 1.0

Med övergången till Kairo 1.0, befintliga Kairo 0 kontrakt är föråldrad och kommer inte längre att stödjas på Regenesis. Att låta uppgraderingsbara Kairo 0 kontrakt fortsätta fungera, även efter Regenesis, och hålla staten uppbyggd fram till den tiden, lade vi till ett nytt systemanrop — ['replace_class'](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#replace_class_syscall). Uppgraderingsbara kontrakt har inga problem med att uppgradera till ett Kairo 1. Genomförande, men den underliggande proxy (kontraktet som innehar den faktiska staten) kommer fortfarande att vara fast med Kairo 0 genomförande. \`replace_class\` syscall löser detta problem genom att låta proxykontraktet ersätta dess underliggande klass, dvs. . hålla samma adress och lagring, men ersätta genomförandet.

## Beräkningen är nu 5x billigare!

Idag har Starknet transaktionsavgifter två huvudkomponenter: Beräkning och on-chain data. Beräkningsdelen av Starknet-transaktionsavgiften bestäms av marginalkostnaden för att verifiera dess bevis på L1 (se[docs](https://docs.starknet.io/documentation/architecture_and_concepts/Fees/fee-mechanism/)för mer information).

Ursprungligen ledde våra 200m Kairo steg i ett bevis som kräver 5m gas för verifiering till en naiv uppskattning av 0,05 gas per Kairo steg. Sedan dess, vi har flyttat till[rekursiva bevis](https://medium.com/starkware/recursive-starks-78f8dd401025)som möjliggör en betydande minskning av L1-verifieringskostnaden (endast roten till ett rekursionsträd når L1). Det är nu dags att uppdatera våra ursprungliga uppskattningar i enlighet med detta — priset för varje Kairo-steg på L2 kommer att sänkas med 5x, och kommer nu att kosta 0. 1 gas.

Denna kostnadsminskning är betydande för beräkningsintensiva tillämpningar, t.ex. kontoavtal med icke-inhemska signaturer. Enkla transaktioner kommer att se en mindre kostnadsminskning (~ 5%). I framtiden kommer vi att hantera den andra komponenten: kostnader för data i kedjan. När alternativ till on-chain data införs till Starknet (alias Volition), kommer kostnadsminskningen att kännas över hela linjen.

## Starknet Styrning Första Omröstning

Den första fasen av Starknet Governance har lanserats (mer detaljer[här](https://medium.com/starknet-foundation/starknets-governance-first-phase-4614c7566f40)). Gemenskapsmedlemmar kan nu delta i utformningen av Starknet genom en extra kanal, nämligen röstning om protokolländringar.

Starknet Governance första faserna kommer att fokusera på uppgraderingar av Starknetprotokollet. Varje uppgradering av Starknet kommer först att distribueras på Testnet; väljarna kommer att ha en 6-dagars period för att undersöka och testa den uppgraderade versionen som den körs på Goerli. Under denna tid kommer ett förslag om ögonblicksbilder att öppnas och samhället kan rösta om huruvida den nya versionen för Mainnet ska godkännas.

Om förslaget får en majoritet av ”JA”-rösterna under den 6-dagars omröstningsperioden kommer förslaget att godkännas och Starknet Mainnet kommer att uppgraderas därefter.

Starknet alfa v0.11.0 är den första Starknet versionen som är upp för en röst. Starknet alpha v0.11.0 kommer att vara öppen i sex dagar från och med utbyggnaden av Testnet.

Relevanta länkar:

* [Plats för ögonblicksbilder](https://snapshot.org/#/starknet.eth/proposal/0x00889bc468509610e516e8602f00b21ca8c32466dd4f0140eca38becb7f40bef)
* [Upptäcktssida för delegering](https://delegate.starknet.io/)
* Starknet alpha v0.11.0 diskussionstråden på[Community forum](https://community.starknet.io/t/proposal-starknet-alpha-v0-11-0/50334)

## Kairo 1.0 och Sierra

Sierra (**S**har**I**nt**e**rmediate**R**ep**r**esent**a**tion) är en mellanliggande representation som sammanställer till Kairo montering (CASM). Pre Starknet alpha v0.11.0, en utvecklare skulle sammanställa Kairo 0 till CASM och skicka resultatet till Starknet sequencer. Med Kairo 1.0, kompilerar utvecklarna sin kod till Sierra, och skickar denna mellanliggande representation till sequencer. Sekvenseraren kommer sedan att sammanställa den till CASM. Sierra är garanterat att sammanställa till “säker CASM”, dvs en delmängd av CASM som inte kan misslyckas, vilket gör varje körning bevisbar. Detta garanterar att sequencer kommer att kunna ta ut avgifter även för återställda transaktioner, som skyddar från DOS. För mer information, se[docs](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/).

![](https://miro.medium.com/v2/resize:fit:1400/0*KsAwaJTIsOuCsJIe)

Starknet alpha 0.11.0 kommer att använda[Kairo 1.0-alpha.6 version](https://github.com/starkware-libs/cairo/releases/tag/v1.0.0-alpha.6). Denna version är nära[funktionen paritet](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)med Kairo 0, med alla Starknet system samtal redan närvarande.

Observera att Starknet sequencer använder en fast kompileringsversion, vilket innebär att språkförbättringar kanske inte är omedelbart tillgängliga i Starknet, och kommer att vara tillgängliga först efter en Starknet versionsuppdatering. Specifikt, medan förbättringar som påverkar Kairo 1. → Sierra sammanställning kan träda i kraft omedelbart, ändringar i Sierra → CASM-kompilatorn (se[dokument](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/)för mer detaljer) måste vänta på en Starknet uppgradering.

## Vad annat är nytt?

### Ny transaktionstyp — Deklarera v2

Vi lägger till[en ny transaktionstyp](https://docs.starknet.io/documentation/architecture_and_concepts/Blocks/transactions/#declare_v2_cairo_1_0)för att deklarera Kairo 1.0 klasser.

Denna nya \`declare\`-transaktionsversion liknar den befintliga \`declare\`, med två viktiga skillnader:

* Klassobjektet som nu sänds representerar Sierra snarare än CASM, dvs klassens semantik definieras av Sierra representationen.
* Användaren signerar också den kompilerade klassen hash. Detta är ett avgörande steg tills Sierra≥ CASM-sammanställningen kommer att bevisas som en del av Starknet OS.

För mer information, se[docs](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#what_to_expect).

Ur utvecklarens synvinkel är upplevelsen densamma. Efter att ha skrivit din Kairo 1.0-kod kan du använda CLI för att deklarera klassen.

**Notera att \`deklarera v2\` transaktioner inte kommer att accepteras på Starknet Mainnet. Efter en period av experiment på Testnet kommer den nya transaktionstypen att aktiveras på Mainnet och Kairo 1.0 klasserna kommer att bli tillgängliga.**

### Poseidon är här

[Poseidon](https://www.poseidon-hash.info/)är en familj av hashfunktioner utformade för att ha mycket effektiva algebraiska kretsar. Som sådan, de kan vara mycket användbar i ZK bevisar system liksom STARKs och SNARKs. Från och med Starknet alpha v0.11.0, kommer utvecklare att kunna använda Poseidon. Dessutom kommer några av de hashberäkningar som är en del av Starknet protokollet övergången till Poseidon (specifikt, klassen hash, sammanställt klasshash, och delar av det statliga åtagandet kommer att använda Poseidon, se[dokumenten](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#poseidon_hash)för mer information). I framtiden kommer fler interna komponenter övergå till att använda Poseidon hash-funktionen.

Den exakta versionen och parametrarna som används i Starknet hittar du[här](https://docs.starknet.io/documentation/architecture_and_concepts/Hashing/hash-functions/#poseidon_hash).

### Diverse ändringar

Precis som tidigare versioner av Starknet har en uppgradering också konsekvenser för våra API:er och andra komponenter på låg nivå. Nedan listar vi dessa och tar upp de specifika ändringar som gjorts:

* v0 anrop/deklarationstransaktioner stöds inte längre
* L1≥ L2-meddelanden kräver nu[avgifter](https://docs.starknet.io/documentation/architecture_and_concepts/L1-L2_Communication/messaging-mechanism/#l1-l2_message_fees). Det vill säga, meddelanden som skickas med noll avgift kommer inte att behandlas av Starknet sequencer
* Onchain-dataformatet är[ändrat](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/#on_chain_data_post_v0_11_0)
* [API-ändringar](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#api_changes)(inte alla ändringar listas här, se dokument för en uttömmande lista) :
* lade till en ny slutpunkt \`get_compiled_class_by_class_hash\`
* \`get_class_by_hash\` returnerar både Kairo 0 / Kairo 1.0 klasser (beroende på begärd hash)
* \`get_state_update\` har ett nytt avsnitt för ersatta klasser, och deklarationer delas mellan Kairo 0 och Kairo 1 klasser.
* \`estimate_fee\` och \`simulate_tx\` kan nu hoppa över validering
* En[ny](https://github.com/starkware-libs/starknet-specs/releases/tag/v0.3.0-rc1)Starknet JSON-RPC version

## Vad kommer härnäst?

Nu när hela Kairo 1.0-relaterad infrastruktur har införts kan du förvänta dig:

* Ytterligare språkförbättringar till Kairo 1.0
* Prestandaförbättringar:[som utlovat](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de)fortsätter vi att gå framåt mot att avsevärt öka TPS. Nästa steg i färdplanen övergår till[rost sequenencer](https://github.com/starkware-libs/blockifier), som utvecklas i det öppna under Apache 2. licens. Den nya sequencer kommer att använda[rost CairoVM](https://github.com/lambdaclass/cairo-rs)och[Papyrus](https://github.com/starkware-libs/papyrus)full nod och bildar Performance Trio.
* Offchain[DA](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/)! I den här versionen hanterade vi den beräkningskomponenten i transaktionens kostnad. I kommande versioner kommer vi att hantera de kedjade datakostnaderna, som idag är den dominerande kostnaden för genomsnittliga transaktioner.

![](/assets/starknet-alpha-v0.11.0-diagram.png)