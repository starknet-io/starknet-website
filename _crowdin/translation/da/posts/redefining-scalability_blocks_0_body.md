Blockchain skalerbarhed har altid været et opvarmet emne. Næsten alle blockchain netværket rører et stort antal transaktioner pr. sekund (TPS) som et salgssted. TPS er imidlertid ikke en gyldig metrisk metode til at sammenligne blockchain netværk med — hvilket gør det til en udfordring at evaluere deres relative ydeevne. Desuden store TPS numre normalt kommer til en pris — hvilket rejser spørgsmålet: gøre disse netværk faktisk skalere, eller øger de bare deres gennemløb?

Så lad os undersøge, hvordan man definerer skalerbarhed, hvilke tradeoffs der er lavet for at opnå det, og hvorfor Validity Rollups er den ultimative skalerbarhed løsning.

### Ikke alle transaktioner er gjort lige store

For det første er vi nødt til at fastslå vores påstand om, at den enkle og bekvemme måling af TPS ikke er et præcist mål for skalerbarhed.

For at kompensere noder for udførelse af transaktioner (og for at afskrække brugere fra at spamme netværket med unødvendig beregning), blockchains opkræver et gebyr i forhold til den beregningsbyrde, der pålægges blockchain. I Ethereum måles kompleksiteten af beregningsbyrden i*gas.*Fordi gas er en meget praktisk måling af transaktionskompleksiteten, udtrykket vil blive anvendt i hele denne artikel for ikke-Ethereum blockchains samt, selv om det typisk Ethereum-specifik.

Transaktionerne varierer betydeligt i kompleksitet, og derfor hvor meget gas, de forbruger. Bitcoin, pioner inden for troværdige peer-to-peer-transaktioner, understøtter kun det rudimentære Bitcoin-script. Disse enkle overførsler fra adresse til adresse bruger lidt gas. I modsætning hertil understøtter smarte kontraktkæder som Ethereum eller Solana en virtuel maskine og Turing-komplette programmeringssprog, der giver mulighed for meget mere komplekse transaktioner. Derfor kræver dApps som Uniswap meget mere gas.

Derfor giver det ingen mening at sammenligne TPS for forskellige blockchainer. Det, vi bør sammenligne i stedet, er evnen til beregning - eller gennemløb.

Alle blokkæder har en (variabel) blokstørrelse og bloktid, der bestemmer, hvor mange*regneenheder*kan behandles pr. blok, og hvor*hurtig*en ny blok kan tilføjes. Tilsammen bestemmer disse to variabler*gennemstrømningen*af en blockchain.

### Hvad Stammer Skalerbarhed?

Blokkæder stræber efter at være maksimalt decentraliserede, inklusive netværk. For at opnå dette skal to grundlæggende egenskaber holdes i skak.

#### **1. Krav Til Hardware**

decentraliseringen af et blockchain netværk er bestemt af den svageste node i netværket til at kontrollere blockchain og holde sin stat. Derfor omkostninger til at køre en knude (hardware, båndbredde og opbevaring) bør holdes så lavt som muligt for at gøre det muligt for så mange individer som muligt at blive tilladelsesfrie deltagere i det troværdige netværk.

#### 2**.**Statsvækst

Statsvæksten henviser til, hvor hurtigt blokkæden vokser. Jo mere gennemløb en blockchain gør det muligt at ske pr. tidsenhed, jo hurtigere blokkæden vokser. Fulde knudepunkter gemmer netværkets historie, og de skal kunne validere tilstanden af netværket. Ethereum tilstand gemmes og refereres ved hjælp af effektive strukturer såsom træer. Efterhånden som staten vokser, tilføjes nye blade og grene til den, hvilket gør det stadig mere kompliceret og tidskrævende at udføre visse handlinger. Når kæden vokser i størrelse, det forværrer den værst tænkelige udførelse af knuder, hvilket fører til en stadigt voksende tid til at validere nye blokke. Over tid, dette øger også den samlede tid det tager for en fuld node at synkronisere.

### Ubehagelige virkninger af stigende gennemstrømning

#### 1. Indholdselement Antal

Minimumskravene til at køre et indholdselement og indholdselementer er:

* Bitcoin1: 350GB HDD-diskplads, 5 Mbit/s forbindelse, 1GB RAM, CPU >1 Ghz. **Antal indholdselementer: ~10.000**
* Ethereum2: 500GB+ SSD-diskplads, 25 Mbit/s forbindelse, 4–8GB RAM, CPU 2-4 kerner. **Antal indholdselementer: ~6.000**
* Solana3: 1.5TB+ SSD-diskplads, 300 Mbit/s forbindelse, 128GB RAM CPU 12+ kerner. **Antal indholdselementer: ~1,200**

Bemærk, at jo større CPU, båndbredde og opbevaring krav til knudepunkter kræves for gennemstrømning af en blockchain, de færre knudepunkter på netværket — hvilket fører til svagere decentralisering og et mindre inkluderende netværk.

#### 2. Tid til at synkronisere en fuld node

Når du kører et indholdselement for første gang, skal det synkroniseres med alle eksisterende indholdselementer, downloades og validere, status af netværket hele vejen fra genese blok til spidsen af kæden. Denne proces bør være så hurtig og effektiv som muligt for at give nogen mulighed for at fungere som en tilladelsesfri deltager i protokollen.

Tager Jameson Lopps[2020 Bitcoin Node](https://blog.lopp.net/2020-bitcoin-node-performance-tests/)og[2021 Node Sync Tests](https://blog.lopp.net/2021-altcoin-node-sync-tests/)som indikator, Tabel 1 sammenligner den tid, det tager at synkronisere en fuld node af Bitcoin vs. Ethereum vs. Solana i gennemsnit forbrugerkvalitet PC.

![Tabel 1. Sammenligning af blokkæde gennemløb og node-sync](/assets/1_gmpi_1c9zipoc-znrh7b5q.png "Tabel 1. Sammenligning af blokkæde gennemløb og node-sync")

Tabel 1 viser, at stigende gennemstrømning fører til længere synkroniseringstider, fordi flere og flere data skal behandles og gemmes.

Mens forbedringer af node software er konstant foretaget for at afbøde udfordringen i den voksende blockchain (sænkning af disk fodaftryk, hurtigere synkroniseringshastigheder, stærkere nedbrud elasticitet, modularisering af visse komponenter osv. , knudepunkterne åbenbart stadig ikke kan holde trit med stigninger til gennemløb.

### Hvordan skal skalerbarhed defineres?

Skalerbarhed er det mest misrepræsenterede udtryk i blockchain rummet. Mens stigende gennemløb er ønskeligt, det er kun en del af puslespillet.

***Skalerbarhed**betyder**flere transaktioner**for den**samme hardware**.*

Derfor kan skalerbarhed opdeles i to kategorier.

#### Sequencer skalerbarhed

Sequencing beskriver handlingen af bestilling og behandling af transaktioner i et netværk. Som tidligere fastslået enhver blokkæde kan trivielt øge sin gennemstrømning ved at hæve blokkens størrelse og afkorte blokkens tid — indtil det tidspunkt, hvor den negative indvirkning på dens decentralisering anses for at være for betydelig. Men tweaking disse enkle parametre giver ikke de nødvendige forbedringer. Ethereum’s EVM kan, i teorien,[håndtere op til ~2.000 TPS](https://twitter.com/dankrad/status/1459607325854121989), hvilket er utilstrækkeligt til at servicere langsigtet blokering plads efterspørgsel. For at skalere sekventering, Solana lavet nogle imponerende innovationer: drage fordel af et paralleliserbart udførelsesmiljø og en smart konsensusmekanisme, som giver mulighed for langt mere effektiv gennemgang. Men til trods for forbedringerne er den hverken tilstrækkelig eller skalerbar. Efterhånden som Solana øger sin gennemgang, øges hardwareomkostningerne til at køre en knude og procestransaktioner.

#### Verifikation skalerbarhed

*Verifikation skalerbarhed beskriver tilgange, der øger gennemstrømningen uden at bebyrde knudepunkter med stadigt stigende hardwareomkostninger.*Specifikt, det refererer til kryptografiske innovationer som Validity proofs. De er grunden til, at Validity Rollups kan skalere en blockchain bæredygtigt.

**Hvad er et gyldighedsvalg?**

Gyldighed Rollups (også kendt som “ZK-Rollups”) flytte beregning og tilstand opbevaring off-chain men holde en lille mængde af visse data on-chain. En smart kontrakt på den underliggende blockchain opretholder statskassen i Rollup. På Rollup sendes et parti af højt komprimerede transaktioner, sammen med den nuværende statslige rod, til en off-chain Prover. Leverandøren beregner transaktionerne, genererer et validitetsbevis for resultaterne og den nye statslige rod, og sender det til en on-chain Verifier. Verifikatoren verificerer validitetsbeviset, og den smarte kontrakt, der opretholder tilstanden af Rollup opdaterer det til den nye stat, som Prover.

**Hvordan skalerer Validity Rollups med de samme hardwarekrav?**

Selv om Provers kræver high-end hardware, påvirker de ikke decentraliseringen af en blockchain; fordi gyldigheden af transaktioner er garanteret af matematisk verificerbare beviser.

Hvad der betyder noget er kravene til at kontrollere beviserne. Fordi de involverede data er meget komprimeret og stort set abstraheret væk gennem beregning, dens indvirkning på knudepunkter i den underliggende blockchain er minimal*.*

Verifikatorer (Ethereum nodes) kræver ikke high-end hardware, og størrelsen af partierne øger ikke hardwarekrav. Kun statslige overgange og en lille mængde af opkaldsdata skal behandles og lagres af knudepunkter. Dette tillader alle Ethereum noder til at kontrollere Validity Rollup batches ved hjælp af deres eksisterende hardware.

**Jo flere transaktioner, jo billigere bliver det**

I traditionelle blockchains, jo flere transaktioner sker, jo dyrere det bliver for alle, som blokken rummet bliver fyldt op — og brugerne har brug for at overbyde hinanden i et gebyr marked for at få deres transaktioner inkluderet.

For en Gyldighed Rollup, denne dynamik er omvendt. Verifikation af et parti transaktioner på Ethereum har en vis pris. Da antallet af transaktioner inde i et parti vokser, omkostningerne til at kontrollere batchen vokser med en eksponentielt langsommere hastighed. Tilføjelse af flere transaktioner til et parti fører til billigere transaktionsgebyrer, selvom batch-verifikation omkostninger stiger — fordi det er amortiseret blandt alle transaktioner inde i partiet. Gyldighed Rollups ønsker så mange transaktioner som muligt inde i et parti — så verifikation gebyr kan deles blandt alle brugere. Som batch størrelse vokser til uendelighed, amortiseret gebyr per transaktion konvergerer til nul, i. ., jo flere transaktioner på en Validity Rollup, jo billigere det får for alle.

dYdX, en dApp drevet af en Validity Rollup, ser ofte batchstørrelser på over 12.000 transaktioner. Sammenligning af gasforbruget for de samme transaktioner på Mainnet i forhold til en Validity Rollup illustrerer skalabilitetsgevinsterne:

Afvikling af en dYdX-transaktion på Ethereum Mainnet:**200.000 gas**

Afvikling af en dYdX-transaktion på StarkEx:**<500 gas**

En anden måde at se på det: Validity Rollups’ vigtigste omkostningsskalaer lineært med antallet af brugere inden for samme batch.

#### Hvorfor Optimistiske Rollups er ikke så skalerbar som man kan tænke

I teorien giver Optimistiske Rollups næsten de samme skalerbarhedsfordele som Validity Rollups. Men der er en vigtig forskel: Optimistiske Rollups optimerer til det gennemsnitlige tilfælde, mens Validity Rollups optimerer til det værste. Fordi blockchain systemer fungerer under ekstremt modstridende forhold, optimering til det værst tænkelige tilfælde er den eneste måde at opnå sikkerhed.

I den Optimistiske Rollup værste tilfælde, en brugers transaktioner vil ikke blive kontrolleret af svig checkere. Så, for at bestride svig, brugeren har til at synkronisere en Ethereum fuld node, en L2 fuld node, og beregne den mistænkelige transaktion selv.

I Validity Rollups værst tænkelige tilfælde behøver en bruger kun at synkronisere en Ethereum fuld node for at verificere validitetsbeviset, gemme sig selv beregningsbyrden.

I modsætning til Validity Rollups, Optimistic Rollups’ omkostningsskalaer lineært med antallet af transaktioner i stedet for antal brugere, hvilket gør dem dyrere.

### Endelige stykke af puslespillet - Tilladelsesfri adgang til Rollup staten

For at sikre transaktionernes gyldighed skal brugerne kun køre en Ethereum-node. Men, brugere og udviklere kan ønske at se, og køre, tilstand og udførelse af Rollup til forskellige formål. En*indeksering L2 node*udfylder dette behov perfekt. Ikke alene giver det brugerne mulighed for at se transaktionerne i netværket, men det er også en kritisk infrastruktur, der er nødvendig for, at økosysteminfrastrukturen kan fungere. Indekser som The Graph, Alchemy, Infura; Oracle netværk som Chainlink, og blokere Explorers, alle disse er fuldt understøttet af en tilladelsesfri indeksering L2 node.

### Konklusion

Mange tilgange til at håndtere blockchain skalerbarhed fejlagtigt fokusere på at øge*gennemstrømning*. Men dette forsømmer gennemløb’ indvirkning på noder: de stadigt stigende hardwarekrav til at behandle blokke og gemme netværkshistorik og hvordan det hæmmer decentraliseringen af et netværk.

Med fremkomsten af Gyldighed-bevis kryptografi, en blockchain kan opnå**sand skalerbarhed**, der ikke belaster knudepunkter med stadigt stigende omkostninger og giver mulighed for bred decentralisering. Flere transaktioner med kraftfulde og mere komplekse beregninger for den samme hardware er nu muligt, invertering af gebyr marked dilemma i processen - jo mere aktivitet på en Validity Rollup, jo billigere det bliver!

[SwagtimusPrime.eth](https://twitter.com/SwagtimusP?t=pO0L1vGIhuC-ZgWOusQYtA&s=09)og[Louis Guthmann](https://twitter.com/GuthL)

1 Fra[https://bitcoin.org/da/bitcoin-core/features/requirements](https://bitcoin.org/en/bitcoin-core/features/requirements)

2 Fra[https://ethereum.org/da/developers/docs/nodes-and-clients/](https://ethereum.org/en/developers/docs/nodes-and-clients/)

3 Fra<https://docs.solana.com/running-validator/validator-reqs>

4 Stærkt forenklet og justeret for gennemsnitlige dynamiske blokstørrelser