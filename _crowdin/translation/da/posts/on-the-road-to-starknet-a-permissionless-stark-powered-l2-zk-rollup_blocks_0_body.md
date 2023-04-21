#### **TL;DR**

Vi bygger StarkNet i fire trin:

* Trin 0 — Grundlag (afsluttet*)
* Trin I — Planeter: Single-App Rollups
* Trin II — Konstellationer: Multi-App Rollups
* Trin III — Univers: En Decentraliseret Rollup

Vi forventer, at jeg har taget skridt i brug om et par korte måneder og vær godt på vej til trin II & III i slutningen af 2021.

### **Indledning**

StarkWare er bygning StarkNet, en decentraliseret, permissionless og censureret STARK-drevet L2 ZK-Rollup, der understøtter generelle beregninger over Ethereum. Det er baseret på Turing-komplet[Kairo sprog](https://www.cairo-lang.org/).

Udviklere brugere og StarkNet nodes vil være i stand til at gøre alt, hvad man ville forvente fra en tilladelsesfri L2 Rollup: Udviklere kan opbygge applikationer implementere deres egen forretningslogik og implementere dem på StarkNet. Brugere kan sende transaktioner til StarkNet skal udføres, ligesom de interagerer med Ethereum i dag. StarkNet knudepunkter og deltagere vil være krypto-økonomisk incitamenter til at sikre, at netværket fungerer effektivt og retfærdigt.

Alle StarkNet-transaktioner vil med jævne mellemrum blive partieret, og deres gyldighed vil blive bevist i et STARK-bevis, der skal kontrolleres på Ethereum. Som den beregningsmæssige indsats kræves for at kontrollere STARK beviser er eksponentielt lille i forhold til beregningen bevist, StarkNet vil skalere Ethereum ved størrelsesordener.

Da alle StarkNet tilstand overgange vil være STARK-bevist, kun gyldige dem vil blive accepteret på Ethereum. Alle data, der er nødvendige for at rekonstruere den fulde StarkNet tilstand, vil blive offentliggjort on-chain. Alle vil være i stand til at køre deres egen StarkNet node. Disse egenskaber vil gøre StarkNet som sikker og tilladelsesfri som Ethereum.

Vi har været på det i tre år, og har allerede opnået nogle bemærkelsesværdige milepæle i at gøre “Månen Matematik” til produktion-kvalitet og effektiv software, der kører på Ethereum. Den måde StarkWare gør tingene er at løse de hårde problemer først, opbygge kerneteknologien, og derefter frigive det til produktion i stykemeal mode. Vi vil fortsætte med at bygge på denne måde, da vi bringer StarkNet til fuldendelse.

![](/assets/ontheroad_02.png)

**Trin 0 — Grundlag**

StarkWare er færdig med at skabe nogle vigtige fundament for StarkNet.

#### **Cairo**

[Cairo](https://twitter.com/StarkWareLtd/status/1300353049836376066?s=20)er vores Turing-Complete High-Level Language & framework til fremstilling af STARK beviser til generel beregning. I stedet for hånd-crafting komplekse “kredsløb” eller AIR kan en applikationsudvikler bruge Cairo til at definere enhver business logik, har det vist sig off-chain, og verificeret on-chain. Kairo er[i produktion på Mainnet](https://twitter.com/StarkWareLtd/status/1320695603492507648?s=20)og er også[tilgængelig for udviklere](http://cairo-lang.org/).

Om et par uger vil vi lancere på en offentlig Ethereum testnet en Alpha version af Cairos Generic Proof Service (GPS). *Dette vil give udviklere mulighed for at opbygge deres egne applikationer ved hjælp af Cairo, implementere uanset forretningslogik, de ønsker. De vil sende deres Cairo kode til GPS for at blive bevist, og derefter verificeret on-chain.*

GPS gør det muligt for et enkelt bevis at hævde integriteten af udførelsen af helt separate og uafhængige applikationer, derved give disse anvendelser mulighed for at afskrive gas udgifter af bevis kontrol blandt dem.

Cairo og GPS er grundlaget for StarkNet - vores beslutning om at eksternalisere begge til udviklere giver dem tidlig eksponering for denne teknologi, ikke kun så de kan begynde at bygge på toppen af det, men også så de kan påvirke StarkNet evolution.

Vi vil fortsætte med at udvikle Kairo baseret på udviklingssamfundets behov og feedback. Vi vil forbedre dette sprog med nye funktioner, syntaks og builtins, der forbedrer dets brugervenlighed, og vi vil fortsætte med at udvikle og forbedre Kairo værktøj: compilers, tracer/debugger, og integrationer til fælles IDE.

StarkNet vil have Cairo kører under hætten.

#### **STARK Software Stak**

StarkWare har udviklet det mest kraftfulde bevis system i økosystemet, og det har været[live på Mainnet](https://medium.com/starkware/starks-over-mainnet-b83e63db04c0)i månedsvis. StarkWare har også udviklet[ethSTARK](https://twitter.com/StarkWareLtd/status/1264911004099543040?s=20), vores open source prover, som er 20 X hurtigere end nogen anden prover; det giver både[nul-viden og post-quantum-sikre signaturer](https://twitter.com/StarkWareLabs/status/1331930111227080709).

Vores*skaleringsmålinger*— hverken ekstrapoleringer eller løfter — omfatter behandling af 300K-transaktioner i et enkelt bevis på Mainnet at opnå[verdensrekorden i Rollup gennemløb: 3K tps](https://twitter.com/StarkWareLtd/status/1287770381525422082?s=20). I processen har vi opnået verdensrekorden for Rollup gas effektivitet: 315 gas/tx, størrelsesorden billigere end transaktioner på Ethereum L1.

Denne teknologi vil være hjørnestenen i det decentraliserede Beving Layer of StarkNet, og dermed vil vi frigive yderligere og forbedrede beviser som en del af StarkNet udvikling (mere om det i en kommende blogindlæg).

#### **StarkEx**

StarkEx er vores L2 skalerbarhedsmotor. Det har været tjeneste[DeversiFi](https://twitter.com/deversifi)'s kunder på Mainnet siden juni 2020. Det vil drive både[dYdX](https://twitter.com/dydxprotocol)og[ImmutableX](https://twitter.com/Immutable)startende om et par korte uger. StarkEx kan håndtere kompleks handel logik (spot handel, derivater, NFTs) samt betalinger.

Udvikling af StarkEx var vores måde at dogfooding vores toolchain og teste det mod den virkelige verden behov. Der er intet som kravene i faktiske applikationer og levende brugere til at hjælpe værktøjer modne og udvikle sig. Det hjælper os også med at forstå, hvilke elementer der skal tages fat på for bedre at kunne tjene økosystemet — for eksempel integrationer med tegnebøger og blokere opdagelsesrejsende.

StarkEx er et levende eksempel på evnen til at skalere applikationer ved hjælp af en STARK-baseret ZK-Rollup, og er den første ansøgning i produktion på Mainnet skrevet i Cairo. Som sådan vil det også være en af de programmer, der kører på StarkNet.

![](/assets/ontheroad_03.png)

### **Vejen Forude**

#### **Trin I — Planeter: Single-App Rollups**

Dette trin vil gøre det muligt for udviklere at opbygge og implementere deres egne skalerbare programmer på StarkNet.

På dette tidspunkt, hver StarkNet instans vil være i stand til at køre en enkelt ansøgning. Forskellige tilfælde kan køre forskellige applikationer.\
StarkNet framework vil omfatte følgende:

* Mekanismer er nødvendige for at generere STARK beviser for vilkårlig Cairo logik, og derefter indsende og kontrollere dem på Ethereum.
* Interaktioner med L1 Ethereum: indskud og udbetalinger af L1 tokens, offentliggørelse af on-chain data, Escape Mechanisms beskytter StarkNet brugere mod ondsindede StarkNet operatører, etc.
* Forvaltning af L2-brugerbalancer og af applikationens lagring og hukommelse.

Udviklere vil være i stand til at fokusere udelukkende på at opbygge deres ansøgning ‘ s forretningslogik, og derefter flytte ind i produktionen: implementere og køre det på skala på StarkNet.

Hvad gør det muligt for os at opbygge en general-beregning skalerbar ZK-Rollup er kombinationen af:

* Kairo, som er en generel formål Turing-komplet programmeringssprog
* Vores stærke STARK stak (sikker og verifikator), der gør det muligt at samle enorme beregninger i et enkelt bevis

#### **Trin II — Konstellationer: Multi-App Rollups**

Det næste skridt vil støtte flere programmer, der kører på den samme StarkNet instans og adgang til den samme globale L2 tilstand. Dette vil muliggøre interoperabilitet mellem forskellige anvendelser samt reducerede gasomkostninger som følge af forbedrede stordriftsfordele.

Kairo, den kraftfulde STARK-stak og GPS-forstærkning StarkNet’ konkurrencemæssige fordel ved at støtte en multi-app Rollup.

På dette stadium StarkNet vil være en fuldt funktionel ramme for at køre*multiple*applikationer med vilkårlig forretningslogik oven på Ethereum, med hver instans, der drives af en enkelt operatør.

En operatør kan nu spinde en StarkNet node, og applikationsudviklere kan implementere deres kontrakter på det. Set fra brugernes perspektiv ser StarkNet nu ud og føles som Ethereum, med en højere skala.

#### **Trin III — Universe: Decentraliseret Rollup**

Det sidste skridt i udviklingen af StarkNet er at decentralisere sin drift.

Intriguing R&D spørgsmål, vi nu håndterer, der påvirker denne fase omfatter (i) at bruge ZK-Rollups til at forbedre konsensus-nå mekanismer, og (ii) at designe kryptoøkonomiske mekanismer til at tilskynde de decentraliserede StarkNet bidragydere og operatører (transaktion sequencere, ordsprog, etc. at fungere effektivt, retfærdigt og sikkert.

### **Konklusion**

StarkWare er bygning StarkNet, en decentraliseret tilladelsesfri STARK-drevet L2 ZK-Rollup over Ethereum, der understøtter generelle beregninger baseret på Cairo sproget.

StarkNet vil gøre det muligt for applikationer at skalere uden at kompromittere sikkerheden, brugere til at betale rimelige transaktionsgebyrer, og hele økosystemet til at vokse væsentligt og opfylde sit løfte.

Vi inviterer gerne udviklerfællesskabet til at[slutte sig til os](https://twitter.com/StarkWareLtd)på denne rejse.

**Opdatering (Nov. 2021):**StarkNet Alpha er live på Ethereum Mainnet