### TL;DR

* STARKs aktivere blockchain skalering ved effektivt at bevise integriteten af beregninger
* StarkEx er en applikationsspecifik skaleringsmotor
* StarkNet er en tilladelsesfri, smart contract Layer 2 netværk

### **Stjerne**

STARKs (Scalable, Transparent ARgument of Knowledge) er et bevis system, der gør det muligt at bevise og verificere beregninger. Det gør det muligt at behandle en stor beregning, generere et bevis for beregningens korrekthed, og derefter kontrollere beviset i meget få trin.

STARKs kan spille en vigtig rolle i blockchain skalerbarhed ved at tillade store beregninger skal gøres uden for kæden, hvor det er billigere, og kun efterlader verifikationen, som kræver en brøkdel af beregningen, til at blive udført i kæden. Med andre ord, ved at udføre meget få trin på kæden, verifikatoren hævder integriteten af en langt større beregning, der blev gjort uden kæde.

Ved hjælp af STARKs, lag 2 løsninger batch sammen og beregne tusindvis af transaktioner, og derefter kontrollere deres gyldighed on-chain med en enkelt STARK bevis. Omkostningerne ved on-chain processen er opdelt mellem**alle**transaktioner i partiet. Dette resulterer i Ethereum sikkerhed og lave gasomkostninger pr. transaktion.

De lave beregningsmæssige omkostninger vil indvarsle en ny klasse af applikationer, der tidligere ikke var gennemførlige on-chain. Disse egenskaber gør STARKs en fremragende byggesten til at forbedre brugeroplevelsen og reducere gasomkostningerne alle samtidig bevare sikkerheden i Ethereum afviklingslaget.

StarkWare tilbyder to løsninger til at skalere Ethereum med STARKs: StarkEx og StarkNet.

### **StarkEx**

[StarkEx](https://starkware.co/starkex/)er en ramme for oprettelse af tilladelses-, applikationsspecifikke skaleringsløsninger. StarkEx er en værktøjskasse af nyttige[applikationsstrømme](https://docs.starkware.co/starkex-v4/starkex-deep-dive/regular-flows), som projekter kan bruge til at opnå billig off-chain beregning. Et STARK-bevis, der attesterer, at udførelsen er korrekt, genereres uden for kæden. Et sådant bevis kan omfatte op til 12.000-500.000 transaktioner (afhængigt af transaktionstypen). Beviset sendes derefter til STARK-verifikatoren for at blive accepteret på kæden. Det betyder en verifikation for alle transaktionerne — for en utrolig lav amortiseret gas omkostninger per transaktion.

Et par eksempler på de applikationer, der anvendes på StarkEx er dYdX (perpetuals trading), Immutable and Sorare (NFTs — minting and trading), DeversiFi (spot trading), og Celer (DeFi Pooling).

StarkWare tilføjer løbende flere applikationsstrømme til StarkEx, efter markedet og kundernes behov.

### **StarkNet**

*[StarkNet](https://starkware.co/starknet/)er et tilladelsesfrit lag 2-netværk, hvor enhver bruger eller udvikler kan implementere smarte kontrakter, der er udviklet på Cairo-sproget.*

Sammenlignelig med Ethereum smart-kontrakt erfaring, inde i StarkNet økosystemet, din kontrakt kan interagere med enhver anden kontrakt indsat på StarkNet, giver mulighed for rigt composable protokoller. StarkNet kontrakter kan også interagere med Ethereum kontrakter via asynkron besked passerer.

I modsætning til StarkEx, hvor applikationer er ansvarlige for at indsende transaktioner, StarkNet sequencers batch transaktioner og sende dem til at blive behandlet og bevist. (StarkNet s sequencers drives i øjeblikket af StarkWare med fremtidige planer om at decentralisere.) Det betyder, at når applikationer implementerer deres Cairokontrakter, behøver de ikke at bekymre sig om at køre yderligere operatørinfrastruktur. StarkNet understøtter Rollup datatilgængelighedstilstand, hvilket betyder, at tilstanden af rollup er skrevet til Ethereum sammen med STARK beviser.

Et stort udviklerfællesskab er dybt engageret i StarkNet økosystemet, opbygning af apps, værktøjer og infrastruktur. Snesevis af applikationer er allerede live på testnet — DeFi, spil, afstemning, AI og meget mere. Mere over, udvikler værktøjer såsom blok explorer, lokale testmiljø og rammer, SDK’s på flere sprog og mere er ved at blive bygget af StarkNet Fællesskabet. Desuden finder der aktive diskussioner sted på[Shamans' platform](https://community.starknet.io/)med forslag til forbedringer, potentielle funktioner og bedste praksis.

### **For At Sum Det Op**

Både[StarkEx](https://youtu.be/P-qoPVoneQA)og StarkNet er STARK-baserede skaleringsløsninger. Begge giver skalerbarhed, lave gasomkostninger og sikkerhed, men har forskellige driftskrav og interoperabilitetsmønstre. StarkEx kan være den rigtige løsning til et program, der er stort set selvstændig og passer ind i de API'er, StarkEx giver. StarkNet kan være bedre egnet til en protokol, der kræver interaktion synkront med andre protokoller eller har behov, der går ud over, hvad StarkEx tilbyder.

STARKs har revolutioneret, hvordan applikationer kan bygges på Ethereum. StarkEx og StarkNet vil fortsætte med at aktivere applikationer, der tidligere var ulevedygtige og skubbe grænserne for, hvad der er muligt på blockchain.

Denne artikel er skrevet i samarbejde af[Tim Gestson](https://twitter.com/IcemanTim)og[StarkWare](https://starkware.co/)holdet