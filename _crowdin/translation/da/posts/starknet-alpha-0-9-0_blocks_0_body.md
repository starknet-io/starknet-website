### TL;DR

* **Gebyrer er nu obligatoriske på Testnet, snart på Mainnet**
* Kontrakt fabriksmønster er nu muligt!
* StarkNet introducerer kontraktklasser
* Delegér opkald erstattes med biblioteks opkald

### Introduktion

Vi er glade for at introducere StarkNet Alpha 0.9.0! Dette er en vigtig version, hvor StarkNet gør betydelige skridt i retning af modenhed, med betydelige tilføjelser til både funktionalitet og protokol design.

**Gebyrer er obligatoriske**(pt. kun på Testnet, indtil version 0.9. vil være levende på Mainnet) — enhver fremadskridende L2 skal have sit eget uafhængige system af gebyrer. Efter at have indført gebyrer som en valgfri funktion i version 0.8. , Vi føler os nu sikre på at medtage dem som en central del af protokollen, og gøre dem obligatoriske. Flere detaljer nedenfor.

En anden væsentlig ændring på protokolniveau er indførelsen af Kontrakt Klasser og klasse/instans adskillelse. Dette giver mulighed for en mere ligetil brug af funktionen \`delegate_call\` og implementeringer fra eksisterende kontrakter, hvilket muliggør fabriksmønstret på StarkNet.

### Kontrakt Klasser

Med inspiration fra objektorienteret programmering skelner vi mellem kontraktkoden og dens gennemførelse. Det gør vi ved at opdele kontrakter i klasser og tilfælde.

A**contract class**is the definition of the contract: Its Cairo bytecode, hint information, indgangspunktnavne og alt det nødvendige for utvetydigt at definere dets semantik. Hver klasse identificeres ved sin klasse hash (analogt med en klasse navn fra OOP sprog).

En**kontrakt instans**eller blot en kontrakt, er en implementeret kontrakt, der svarer til nogle klasser. Bemærk, at kun kontrakttilfælde opfører sig som kontrakter, dvs. har deres eget lager og kan indbetales ved transaktioner/andre kontrakter. En kontraktklasse har ikke nødvendigvis en indsat instans i StarkNet. Indførelsen af klasser kommer med flere protokolændringer.

#### ‘Deklare’ Transaktion

Vi introducerer en ny type transaktion til StarkNet:[‘erklære’](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)-transaktionen, som gør det muligt at erklære en kontrakt**klasse.**I modsætning til transaktionen \`deploy\, så implementerer dette ikke en instans af denne klasse. Staten StarkNet vil indeholde en liste over erklærede klasser. Nye klasser kan tilføjes via den nye \`erklære\` transaktion.

#### The ‘Deploy’ System Call and Contract Factories.

Når en klasse er erklæret, dvs. den tilsvarende \`erklære\` transaktion blev accepteret, kan vi implementere nye forekomster af den klasse. Til dette formål bruger vi det nye \`deploy\` systemopkald, som tager følgende argumenter:

* Klassen hash
* Salt
* Constructor argumenter

Den »implementerede« syscall vil derefter implementere en ny instans af denne kontraktklasse hvis[adresse](https://docs.starknet.io/docs/Contracts/contract-address)vil blive bestemt af de tre ovenstående parametre og implementeringsadressen (den kontrakt, der påberåbte systemopkaldet).

Herunder udrulninger inde i en påberåbe sig transaktion giver os mulighed for at pris og opkræve gebyrer for udrulninger, uden at skulle behandle udrulninger og påkaldelser forskelligt. For mere information om deployeringsgebyrer, se[dokumenterne](https://docs.starknet.io/docs/Fees/fee-mechanism#deployed-contracts).

Denne funktion introducerer kontraktfabrikker i StarkNet, da enhver kontrakt kan påberåbe sig \`deploy\` syscall, oprette nye kontrakter.

#### Flytning fra »Delegate Call« til »Library Call«

Indførelsen af klasser giver os mulighed for at løse et velkendt problem i Ethereum's delegate call mekanisme: Når en kontrakt udfører en delegeret opkald til en anden kontrakt, den har kun brug for sin klasse (sin kode) i stedet for en faktisk instans (dens lagring). At skulle specificere en specifik kontrakt instans, når du foretager en delegeret opkald er derfor dårlig praksis (ja, ja, Det har ført til nogle få fejl i Ethereum kontrakter) - kun klassen skal specificeres.

Det gamle \`delegate_call\` systemopkald bliver nu forældet (gamle kontrakter, der allerede er implementeret, vil fortsætte med at fungere, men**kontrakter med \`delegate_call\` vil ikke længere kompilere**og erstattes af et nyt library_call systemopkald, som får klassen hash (af en tidligere erklæret klasse) i stedet for en kontrakt instans adresse. Bemærk, at kun én faktisk kontrakt er involveret i et bibliotek opkald, så vi undgår tvetydighed mellem opkald kontrakt og implementering kontrakt.

#### Nye API endepunkter

Vi tilføjede to nye endepunkter til API, så hentning af klasserelaterede data:

* \`get_class_by_hash\`: returnerer klassedefinitionen givet klassehash
* \`get_class_hash_at\`: returnerer klassen hash af en indsat kontrakt givet kontraktadressen

Bemærk, at for at opnå klassen af en indsat kontrakt direkte, snarere end at gå gennem de to metoder ovenfor, du kan bruge det gamle \`get_full_contract\` endepunkt, som vil blive omdøbt i fremtidige versioner. Alle ovennævnte endepunkter kan også bruges fra[StarkNet CLI](https://docs.starknet.io/docs/CLI/commands).

#### Gebyrer

Vi fortsætter med at indarbejde gebyrer i StarkNet, hvilket gør dem obligatoriske (første på Testnet, og senere også på Mainnet) for ``[invoke](https://docs.starknet.io/docs/Blocks/transactions#invoke-function)\` transaktioner. Transaktionen \`erklære\` kræver ikke gebyrer på dette tidspunkt. Tilsvarende vil \`deploy`` transaktioner heller ikke kræve et gebyr, men bemærke, at denne transaktionstype højst sandsynligt vil blive udfaset i fremtidige versioner.

Der er stadig flere uafklarede spørgsmål på dette område, hvoraf de mest prominente er, hvordan man opkræver gebyrer for kontrakterklæringer og implementering af StarkNet-konti. Vi vil tage fat på disse spørgsmål i fremtidige versioner.

### Hvad Er Næste?

Efter vores køreplan, som vi[annoncerede i februar](https://medium.com/starkware/starknet-on-to-the-next-challenge-96a39de7717), er vi forpligtet til at forbedre StarkNet's ydeevne generelt, og sequencerens ydeevne i særdeleshed, at få brugerne hurtigere feedback om deres transaktioner. I den næste version, planlægger vi at indføre parallelisering i sequencer, hvilket gør det muligt hurtigere blok produktion.

Den næste store version af StarkNet vil fokusere på strukturen af StarkNet ‘ s konti, på en måde, der svarer til[ERC-4337](https://medium.com/infinitism/erc-4337-account-abstraction-without-ethereum-protocol-changes-d75c9d94dc4a). Med dette vil vi have afsluttet den måde, StarkNet konti opfører sig, tage endnu et stort skridt i retning af masseadoption!