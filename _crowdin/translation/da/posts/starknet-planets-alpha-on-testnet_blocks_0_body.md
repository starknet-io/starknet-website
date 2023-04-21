### **TL;DR**

* [StarkNet Planets Alpha](https://voyager.online/)— det første skridt på vores vej til Mainnet — lever nu på Testnet!
* [StarkNet](https://starkware.co/product/starknet/)er en tilladelsesfri Turing-complete ZK-Rollup1.
* Udviklere kan implementere deres forretningslogik valg i en smart kontrakt og implementere den uden videre på StarkNet.
* Staten overgange af StarkNet er bevist off-chain og derefter verificeret on-chain.
* Meget ligesom Ethereum, brugere kan interagere direkte med disse smarte kontrakter.

### **Indledning**

Vi[annoncerede](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)køreplanen for[StarkNet](https://starkware.co/product/starknet/)i januar 2021. Den hellige gral af skalerbarhedsløsninger ville støtte (i) vilkårlige smart kontrakter, med (ii) sammensætning, (iii) drives over en decentraliseret netværk. I dag annoncerer vi implementering på testnet af Trin 1: StarkNet Planets Alpha. Alfa systemet understøtter vilkårlige smarte kontrakter. Sammensætningen vil blive støttet senere på året, og decentraliseringen vil følge efter.

Det er meget vigtigt, at vi er fuldt ud gennemsigtige og sætter forventningerne ordentligt. Formålet med dette indlæg er klart at liste, hvad der allerede er understøttet, og hvilke funktioner der stadig mangler. Hvad vi frigiver i dag er Arbejde i Progress på testnet. Vi mener, at denne tidlige udgivelse vil hjælpe med dannelsen af et sundt økosystem omkring StarkNet og dets værktøjer. Vi er ivrige efter at involvere udviklere i at opbygge netværket med os, og få løbende feedback fra fællesskabet.

### **Hvad er i StarkNet Planets Alpha?**

**Funktionalitet:**The Alpha giver udviklere mulighed for at skrive og implementere StarkNet kontrakter til generelle beregninger. Der er ingen whitelisting - enhver udvikler kan skrive og implementere uanset kontrakt, de ønsker. Brugerne kan interagere med disse kontrakter, ved at sende transaktioner til dem, og inspicere deres stat. Alle kontrakter findes i en enkelt stat2. Opdateringer til denne tilstand er bevist off-chain, og verificeret on-chain — i Alpha, verifikation udføres på testnet.

**StarkNet OS:**Ovenstående funktionalitet understøttes af et nyt “operativsystem”, vi kalder StarkNet OS. Det tilbyder*beviselige*tilstand overgange på StarkNet. Ethereum udviklere kan tænke på det som svarende til EVM: det er ansvarlig for påberåbelse af smarte kontraktfunktioner, håndtering af kontrakters opbevaring osv. Vi vil offentliggøre et særskilt indlæg med nærmere oplysninger om arkitekturen i StarkNet OS.

**Hvad er der ikke i Alpha?**Alpha mangler stadig nogle vigtige kapaciteter, såsom L1<>L2 interaktion, on-chain data og sammensætning. Mere om disse nedenfor.

#### **Få Dine Fødder Vådt**

Start med vores[tutorial og dokumentation](https://www.cairo-lang.org/docs/hello_starknet/).

Derefter kan du læse den[prøve AMM smart contract](http://cairo-lang.org/docs/hello_starknet/amm.html)vi har skrevet og implementeret på StarkNet. Det er en simpel AMM, og du kan interagere med det[her](https://starkware-amm-demo.netlify.app/swap). Du er nu klar til at skrive og implementere smarte kontrakter på StarkNet. Blokken explorer til StarkNet -[Voyager](https://voyager.online/)- giver alle mulighed for at inspicere StarkNet ‘ s tilstand.\
Ved at få dine fødder våde, tror vi, at du vil være bedre forberedt på at bygge videre på StarkNet, da vi fortsætter med at rulle ud yderligere funktioner. Vi har allerede travlt med at planlægge en første hackathon, samt workshops for udviklere.

### **Næste trin til StarkNet**

De vigtigste kapaciteter, der stadig mangler i Alpha vil blive rullet ud fra de kommende uger. Disse er:

* L1<>L2 Interaktion f.eks. muligheden for at indskyde og hæve midler i L1.
* On-chain data: offentliggøre alle lagringsændringer på Ethereum.
* Sammensætning: at give kontrakter mulighed for at kommunikere med hinanden.

Med disse funktioner på plads, vil vi være klar til at bringe StarkNet til Ethereum Mainnet. Vi kalder dette skridt i StarkNets evolutionskonstellationer, og når vi når det, du vil være i stand til at opbygge og tilladeligt implementere på Ethereum Mainnet skalerbar L2 dApps.

#### **Det StarkNet Ecosystem**

Vi er meget glade for det økosystem, der danner omkring StarkNet så vi vil holde pause til at takke vores samarbejdspartnere indtil videre.

Vi arbejder tæt sammen med[Nethermind](https://twitter.com/nethermindeth)og Nubia-holdet,[Alexey Akhunov](https://twitter.com/realLedgerwatch)(Erigon) &[Igor Mandrigin](https://twitter.com/mandrigin)(gateway. m),[Iddo Bentov](https://www.cs.cornell.edu/~iddo/),[dOrg](https://twitter.com/dOrg_tech),[Prof. Tim Roughgarden](https://twitter.com/algo_class),[Prof. Jeremy Avigad](https://www.andrew.cmu.edu/user/avigad/)& Yoav Seginer, sidst, men ikke mindst — den[Paradigm](https://twitter.com/paradigm)team.\
Vores tidlige partnere —[dYdX](https://twitter.com/dydxprotocol),[Immutable](https://twitter.com/Immutable),[DeversiFi](https://twitter.com/deversifi), samt[Sorare](https://twitter.com/SorareHQ),[Celer](https://twitter.com/CelerNetwork)og andre — har givet os uvurderlige input fra dag 1, og giver os mulighed for at opbygge et produktions-grade netværk for rigtige brugere.\
Vi fortsætter med at blive forbløffet over kvaliteten af indhold skabt af fællesskabet, af folk som[Bobbin Threadbare](https://twitter.com/bobbinth),[Daniel Kroni](https://github.com/danielkroeni/cairo-playground/blob/main/anon-bank/README.md),[Adrian Hamelink](https://twitter.com/adr1anh),[perama](https://twitter.com/eth_worm),[Francesco Ceccon](https://twitter.com/ceccon_me),[Ilian Malchev](http://twitter.com/imalchev)og[Alexandria holdet](https://blockchainpartner.fr/).

Vi er ivrige efter at se, hvad fællesskabet vil skabe på alle fronter: udviklerværktøjer, indhold og selvfølgelig StarkNet applikationer, de vil bygge. Lad os holde samtalen i dine foretrukne foretrukne medier:[discord](https://discord.gg/uJ9HZTUk2Y),[Twitter](https://twitter.com/CairoLang),[e-mail](mailto:info@starkware.co), og snart bruger de mest decentraliserede af kommunikationsformularer: f2f.

1 Vi er ikke fans af udtrykket ZK-Rollup, som — matematisk set — det er ikke nul-viden, men I ved alle, hvad vi mener

2 I modsætning til den separate tilstand opretholdt for nuværende StarkEx deployments på Mainnet

**Opdatering (Nov. 2021):**StarkNet Alpha er live på Ethereum Mainnet