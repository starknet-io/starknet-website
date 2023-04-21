### TL;DR

* StarkNet Alpha 0.8.0 præsenterer den første version af gebyret mekanisme (valgfri indtil StarkNet Alpha 0.9.0.)
* Nye API-opkald til at anslå transaktionsgebyret for at opnå transaktionssporet, hvilket giver bedre synlighed og fejlfindingsmuligheder
* Ydeevne forbedringer af StarkNet sequencer
* Annullering af L1→L2-meddelelse

### Introduktion

Som delt i vores[køreplan](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51), efter den seneste tilføjelse til StarkNet funktionalitet og funktioner, vores opmærksomhed skifter til præstationsforbedringer og protokoldesign (herunder gebyrer, kontoabstraktion, decentralisering osv.). StarkNet Alpha 0.8.0 starter processen med at tilføje transaktionsgebyrer og forbedre sequencerens ydeevne.

Køreplanen for StarkNet omfatter en gebyrmekanisme, og ved at gå videre med denne version tager vi et vigtigt skridt tættere på fuld ydeevne for platformen.

Tilføjelse af gebyrmekanismen er en vigtig del af StarkNet præstation design. Uden et minimalt gebyr, risikerer vi at stå over for uendelige transaktioner: hvilket ville gøre det umuligt for systemet at være performant, uanset sequencer optimeringer.

### Funktioner

#### Gebyr Support

StarkNet Alpha understøtter nu den første version af gebyret mekanisme. Denne mekanisme er afgørende selv på dette tidlige stadium og endda på Testnet af to hovedårsager:

1. Det giver udviklere mulighed for at begynde at optimere deres kontrakter i henhold til StarkNet ‘ s omkostningsmodel.
2. Det er et afgørende modstykke til at forbedre systemets ydeevne, da det forhindrer spamming ved at sende utallige transaktioner.

Denne version introducerer de komponenter, der er nødvendige for udviklere at inkorporere gebyrbetalinger i deres værktøjer og applikationer. Udviklere kan nu estimere transaktionsgebyret ved at ringe til \`estimate_fee\` endepunktet og gøre gebyret betaling som en del af transaktionens udførelse.

Da denne funktion ikke er bagud kompatibel, vil vi ikke håndhæve gebyret betaling på dette tidspunkt, men kun fra version 0. .0, som skal frigives om et par uger. Denne gradvise overgang vil give brugere og udviklere mulighed for at tilpasse sig til den nye model.

#### Gebyr struktur på 0.8.0

Den 0.8.0, vil gebyrer blive indsamlet i henhold til den beregningsmæssige kompleksitet alene, mens StarkWare stadig vil subsidiere L1 kommunikation omkostninger. Vi vil opdatere gebyrmekanismen til at inkludere disse L1-drifts- og kommunikationsomkostninger i løbet af de næste par uger. Betalingen vil blive indsamlet atomisk med transaktionen udførelse på StarkNet L2. Se[gebyrdokumentation](https://starknet.io/documentation/fee-mechanism/)for en tilbundsgående beskrivelse.

Det er vigtigt at bemærke, at vi vil arbejde tæt sammen med udviklerfællesskabet til at justere og udvikle gebyrmekanismen som StarkNet udvikler sig.

#### L2 Goerli ETH Faucet

Vi lancerede[L2 Goerli ETH Faucet](https://faucet.goerli.starknet.io/)for at give brugerne mulighed for at betale gebyrer på Testnet. Dette Faucet sender små mængder L2 Goerli ETH til din kontoadresse på StarkNet Goerli, som du kan bruge til at betale transaktionsgebyret.

#### Trace API

Vi tilføjede evnen til at hente en transaktion ‘ s udførelse spor til StarkNet ‘ s API. Inde i transaktionens spor, er alle interne opkald synlige, ledsaget af oplysninger som eksekveringsressourcer, returværdi, udsendte begivenheder og meddelelser sendt. Dette nye opkald forenkler forståelsen af en kontrakts adfærd eller debugging transaktioner. Derudover kan værktøjer såsom[Voyager](https://voyager.online/)eller[StarkTx](https://starktx.info/)indeholde disse data. at give brugerne en mere detaljeret analyse, navnlig med henblik på interaktion mellem kontokontrakter.

For at få sporet, kan du bruge \`get_transaction_trace\` i StarkNet’s CLI. For at se et eksempel på, hvordan du bruger det, så tjek[tutorial](https://www.cairo-lang.org/docs/hello_starknet/cli.html?#get-transaction-trace).

#### Annullering Af Besked

En ekstra funktion i denne version er evnen til at annullere L1→L2 beskeder. Hvorfor er det nyttige? Forestil dig et scenarie, hvor en bruger overfører et aktiv fra L1 til L2. Flowet starter med, at brugeren sender aktivet til en StarkNet bro og den tilsvarende L1→L2 besked generation. Forestil dig nu, at L2-meddelelsesforbruget ikke fungerer (dette kan ske på grund af en fejl i dApps' Cairo kontrakt). Dette kan resultere i, at brugeren mister forældremyndigheden over deres aktiv for evigt.

For at mindske denne risiko vi tillader den kontrakt, der indledte L1→L2 meddelelsen til at annullere den — efter at have erklæret hensigten med at gøre det og vente på et passende tidsrum (se[dokumentationen](https://starknet.io/l1-l2-messaging/#cancellation).

### Forbedringer Af Ydelse

Denne version reducerer den tid, en sequencer har brug for at udføre en strøm af indgående Kairo transaktioner.

Dette er kun det første skridt! Vores næste store præstation milepæl, der skal indføres snart (0.9.0), er parallel udførelse af sequencer, og mange flere optimeringer forventes ned ad vejen.

### Hvad nu?

Læs den tekniske dokumentation[her](https://starknet.io/documentation/fee-mechanism/).

Gå til[starknet.io](https://starknet.io/), for alle StarkNet information, dokumentation, tutorials og opdateringer.

Deltag i[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)for dev support, økosystem annonceringer og blive en del af fællesskabet.

Besøg[StarkNet Shamans](https://community.starknet.io/)for at holde dig opdateret og deltage i alle StarkNet forskningsdiskussioner.