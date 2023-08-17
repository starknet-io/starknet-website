### TL;DR

* *StarkNet Alpha lancerer på Mainnet Ethereum ved november*
* Tiden til at bygge videre på StarkNet er nu

### En Kort Historie

Vi annoncerede vores vision for[StarkNet](https://starkware.co/product/starknet/)i begyndelsen af året: at bringe massiv skalerbarhed til Ethereum og samtidig bevare L1 sikkerhed, permissionsfri interaktioner, og decentralisering.\
Vi har udgivet**[StarkNet Alpha](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)**på en offentlig testnet i juni. Denne version understøttes fuldt tilladelsesfri generel beregning smart kontrakter. Vi har siden opgraderet det to gange: først til**Alpha 1**— leverer[L1<>L2 besked- og on-chain data](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), og derefter til**Alpha 2**— støtte[sammensætning](https://medium.com/starkware/starknet-alpha-2-4aa116f0ecfc).

StarkNet Alpha 2 understøtter nu komposterbare smart kontrakter af generel beregning i en Ethereum-lignende tilstand, med mulighed for L1 og L2 kontrakter til at interagere med hinanden. Læs mere[her](https://www.cairo-lang.org/docs/hello_starknet/index.html).

### Hvad er StarkNet Alpha på Mainnet?

StarkNet Alpha på Mainnet vil støtte lignende funktioner som dem, der i øjeblikket er tilgængelige på Goerli offentlige testnet.

#### **Hvad skal man forvente**

Fordi StarkNet stadig er under udvikling, ønsker vi at introducere kapaciteter på en trinvis måde og sikre, at udviklerforventningerne opfyldes på hvert enkelt trin. To særligt vigtige aspekter, vi gerne vil understrege, er:

* **Tilladelse til smart contract implementering**: Vi vil følge den fornuftige playbook introduceret af vores Optimistiske Rollup kollegaer: Start med*tilladelser*kontrakt implementering. Protokollen med angivelse af, hvordan du anmoder om at din smarte kontrakt medtages i denne oprindelige hvidliste, vil blive offentliggjort i de kommende uger.
* **Ingen garanti for bagudkompatibilitet**: Vi forventer, at den fremtidige overgang fra StarkNet Alpha til StarkNet Beta vil omfatte gendannelse af staten. Netværket vil begynde fra blok 0, og applikationer vil være nødt til at omimplementere deres kontrakter. Endvidere, udviklere og brugere bør bemærke, at den forventede StarkNet Beta måske ikke være bagud kompatibel med StarkNet Alpha, e. . udviklere måske nødt til at ændre deres kontrakter. Vi vil naturligvis forsøge at give mulighed for en nem overgang til applikationer med minimale nødvendige ændringer.

#### Yderligere Nærmeste Egenskaber

Som en del af overgangen til StarkNet Alpha fra testnet til Mainnet, vil vi:

1. Tilføj konstruktører til kontrakter.
2. Forbedre testrammen.
3. For blokke og transaktioner, flyt fra at bruge et ID til at bruge en hash.

Vi planlægger at fortsætte indførelsen af nye funktioner på en regelmæssig kadence, ligesom vi har gjort på den offentlige testnet. På kort sigt planlægger vi følgende opgraderinger:

1. Konto Kontrakter og Token Kontrakter - åbner vejen for DeFi applikationer til at interagere med StarkNet den måde, de er bekendt med.
2. Forbedret Kontrakt Funktionalitet — støtte kontrakt opgraderbarhed og begivenheder.
3. Warp: Solidity-til-Cairo compiler udviklet af Nethermind vil give en jævn overgang fra Solidity smart kontrakter til StarkNet smart kontrakter.
4. Ethereum Signatures: native støtte til ECDSA over secp256k1 vil tillade lettere integration med eksisterende tegnebøger.
5. StarkNet Fulde Node: en Full Node vil give brugerne mulighed for at deltage i netværket med hardwarekrav på niveau med dem af en Ethereum Fulde Node.

#### Gebyrer Mekanisme

Gebyret mekanisme vil blive tændt så snart konto kontrakter og token kontrakter føjes til StarkNet Alpha.

Alle transaktioner, der indsendes til StarkNet, vil medføre et gebyr, der er beregnet til at dække omkostninger i forbindelse med L1 og off-chain. Gebyret vil oprindeligt blive opkrævet i ETH. Omkostningerne ved en enkelt transaktion vil falde, efterhånden som StarkNet øger sin skala (som det er tilfældet på alle eksisterende STARK-baserede systemer). Når vi fremstiller de oprindelige gebyrmekanismer, foretrækker vi enkelhed frem for præcist prissætning transaktioner i henhold til de ressourcer, de forbruger. Forventer denne mekanisme at blive forfinet og forbedret over tid.

Med et øje mod at gøre StarkNet et bæredygtigt netværk og tilskynde sine operatører og udviklere, En del af indtægterne fra gebyrerne vil blive distribueret til applikationsudviklere og StarkNet kerneudviklere.

#### Sikkerhed

StarkNet Alpha's sikkerhedsmodel på Mainnet vil følge den aktuelle model på testnet:

* Hver stat overgang er bakket op af en STARK bevis, således er sikret at være gyldig.
* Alle statslige data vil blive offentliggjort on-chain så staten vil være fuldt konstruktivt fra L1.
* Der vil være en enkelt sequencer.
* Netværket kan opgraderes uden tidsforsinkelser.

### Det StarkNet Ecosystem er Voksende

Åbning StarkNet til verden tiltrak en massiv bølge af udviklere interesseret i at lære Cairo og udvikle sig over StarkNet. De gav uvurderlig feedback, og det var en sand glæde at se levende diskussioner om StarkNet[Discord](https://discord.gg/uJ9HZTUk2Y).

Desuden er StarkNet ved at blive udviklet ikke kun af StarkWare teamet, men også af nogle af de stærkeste hold i blokkæden økosystem:

* Hollandsk arbejder på to projekter:

1. **[Warp](https://github.com/NethermindEth/warp)**: en Soliditet til Cairo compiler

2. **[Voyager](https://voyager.online/)**: en StarkNet blok explorer

* Open Zeppelin arbejder på en[Standard Contracts](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)implementering til StarkNet og begyndte også at arbejde på en udviklers miljø:[Nile](https://github.com/martriay/nile).
* ShardLabs arbejder på et[StarkNet HardHat plugin](https://github.com/Shard-Labs/starknet-hardhat-plugin)og på et bedre testrammer.
* Erigon-holdet arbejder på at udvide deres Ethereum Full Node til at støtte StarkNet (kodenavn: Fermion). De arbejder sammen med os om at designe centrale mekanismer i StarkNet.
* Equilibrium arbejder på en StarkNet Full Node implementering i Rust,
* Cairo audittjenester: I de kommende måneder vil ABDK, ConsenSys Diligence, Peckshield og Trail of Bits foretage Cairo-audits.
* StarkNet audits: vi startede med at revidere netværkets fundamenter:

1. **CryptoExperts**vil foretage en revision af Cairo Solidity Verifier.
2. Et formelt**LEAN-bevis**af Cairo specs blev for nylig afsluttet og offentliggjort som et[papir](https://arxiv.org/abs/2109.14534)og et GitHub[repo](https://github.com/starkware-libs/formal-proofs).

Forvent mange flere interessante samarbejder, der skal offentliggøres i de kommende måneder!

### STARKs skalerer i dag

Vi nærmer os lanceringen af StarkNet Alpha med tillid, som StarkEx, vores standalone skalering SaaS, har vist, hvordan STARKs kan massivt skalere Ethereum applikationer. Vi lancerede StarkEx for[dYdX](https://dydx.exchange/)(perpetual contracts),[DeversiFi](https://www.deversifi.com/)(spot trading og betalinger), samt for[uforanderlige](https://www.immutable.com/)og[Sorare](https://sorare.com/)(NFT prægning og handel). Vi så deres gas/tx omkostninger reduceret med 100X-200X, til omkring 650 gas/tx i Validium (off-chain data), og 1100 gas/tx for en ZK-Rollup.

Til dato har StarkEx afviklet $80B i handler og over 27 M transaktioner, langt overskygge enhver anden L2 løsning — og alle af dem kombineret.

### Handl Nu

Der har aldrig været et bedre tidspunkt at deltage i det voksende StarkNet økosystem ved at opbygge enten din næste dApp eller nyttige udviklerværktøjer.

Vi inviterer dig til:

1. Deltag i[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y), hvor du kan mødes og engagere dig i StarkNet-fællesskabet.
2. [Begynd at lære](https://www.cairo-lang.org/docs/hello_starknet/index.html)hvordan man skriver StarkNet smart kontrakter.
3. [DM us](https://twitter.com/StarkWareLtd)- vores team er ivrige efter at hjælpe dine ideer og initiativer til at komme til livs.

**Opdatering (Nov. 2021):**StarkNet Alpha er live på Ethereum Mainnet