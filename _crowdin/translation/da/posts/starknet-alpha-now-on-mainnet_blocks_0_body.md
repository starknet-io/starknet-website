### TL;DR

* Alpha er live på Mainnet
* Det understøtter generel beregning og kompostering
* Hurtigt voksende samfund, udvikle værktøjer og applikationer
* Yderligere funktioner, der løbende skal rulles ud i de kommende uger
* Ansvarsfraskrivelse: Dette er en Alpha version (læs de fine print nedenfor)

### Indledning

StarkNet Alpha lancerer i dag på Ethereum Mainnet!

StarkNet er en tilladelsesfri decentraliseret Rollup, der fungerer som et L2-netværk over Ethereum. StarkNet giver mulighed for enhver dApp til at opnå ubegrænset skala for sin beregning, uden at gå på kompromis Ethereum ‘ s sammensÃ¦kkelighed og sikkerhed, takket være dens afhængighed af det sikreste og mest skalerbare kryptografiske bevis system —[STARK](https://starkware.co/stark/). StarkNet er bygget på programmeringssproget[Cairo](https://starkware.co/cairo/), den første produktionskvalitet Turing komplet von-Neumann verifikator på Ethereum. Både Cairo og STARK blev udviklet i huset af StarkWare og har drevet alle vores produktions-grade applikationer, som har afviklet over 50M txs og $250B siden sommeren 2020.

Blandt andre funktioner muliggør StarkNet Alpha generelle beregningsintelligente kontrakter, der understøtter sammensætning, både med andre StarkNet-kontrakter og via L1<>L2-meddelelser med L1-kontrakter. StarkNet Alpha opererer i en Rollup tilstand, hvilket betyder at alle de statslige diff data sendes on-chain.

Tilbage i januar delte vi StarkNet[køreplanen](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880). I juni, StarkNet Alpha gik live på en offentlig testnet, og er blevet opdateret med nye funktioner på rullende basis. Vi er glade for at være forud for tidsplanen, til dels takket være vores afhængighed af vores produktions-grade kamphærdede STARK/Cairo software stack.

### Hvordan skal du behandle StarkNet Alpha?

Først, med stor omhu, som “Alfa” etiket er der af en grund. Forvent ændringer, rettelser og forbedringer fremover. StarkNet Alpha mangler endnu at blive revideret, og vi kan forsinke en sådan revision, indtil netværket modnes nogle mere (læs ansvarsfraskrivelse i slutningen af dette indlæg for mere information).

Generelt følger vi den forsigtige og fornuftige vej, som vores Optimistiske Rollup-kolleger har fastlagt, nemlig Arbitrum og Optimism: lancere netværket med en enkelt sequencer, og whitelist programmer for at sikre, at deres udviklere forstår de risici, der er involveret. Vi er fortsat fuldt ud engageret i en fuldstændig decentralisering af StarkNet.

Og hvordan skal du behandle StarkNet Alpha's økonomi? Alfa vil starte uden transaktionsgebyrer. Den næste opgradering, kun et par uger væk, vil indføre et gebyr mekanisme - vi vil dele flere detaljer i et separat indlæg.

### Start Bygning

Vi inviterer dig til at begynde at skrive dine egne programmer over StarkNet ved enten at kontrollere den (nye!) [website](http://starknet.io/), eller hoppe direkte til[tutorial](https://starknet.io/docs/).

Hvis du er klar til at implementere, så følg venligst denne[onboarding-proces](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu)oprettet for at sikre, at alle udviklere er godt klar over den foreløbige tilstand af systemet.

### Økosystem

I løbet af de seneste par måneder har vi oplevet en fantastisk vækst i størrelsen og aktiviteten af StarkNet community, som samles på[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y). Snesevis af udviklere — hold og enkeltpersoner — på tværs af blockchain økosystem bidrager til denne indsats. (Se ansvarsfraskrivelse i slutningen af dette indlæg)

#### Udviklerværktøjer

* OpenZeppelin definerer standardkontrakterne. Deres[repo](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)og[diskussioner](https://github.com/OpenZeppelin/cairo-contracts/discussions)er værd at følge
* The[Warp](https://github.com/NethermindEth/warp)Solidity–>Cairo transpiler, udviklet af Nethermind
* Shard Labs’[HardHat plugin](https://github.com/Shard-Labs/starknet-hardhat-plugin)og[StarkNet Devnet](https://github.com/Shard-Labs/starknet-devnet)
* Argent er i gang med at udvikle værktøjer, herunder sin fælles indsats på StarkNet.js, sammen med[Sean Han](https://twitter.com/seanjameshan), skaberen

#### Infrastruktur

**Blokér opdagelsesrejsende**:

* [Voyager](http://voyager.online/)-projektet af Nethermind
* [Eth.tx](https://ethtx.info/)vil tilbyde support analyse og en detaljeret oversigt over StarkNet transaktioner

**Fulde knudepunkter**: to indsats undervejs: den ene er Fermion-projektet ledet af Erigon, den anden er[Pathfinder](https://github.com/eqlabs/pathfinder)-projektet, ledet af Equilibrium

**Tegnebøger**:

* [ArgentX](https://github.com/argentlabs/argent-x)er en browser udvidelse udviklet af Argent, der allerede er tilgængelig for udviklere
* Torus nøglestyringsløsning er StarkNet klar
* Ledger er ved at udvikle en indfødt StarkNet app; skal stilles til rådighed inden udgangen af året

**Cairo Audits**: ConsenSys Diligence, Spor af Bits, Peckshield og ABDK udfører enten Cairo audits allerede eller snart starter

**API Services**: efter en StarkNet fuld node er gjort tilgængelig, API tjenester vil blive tilbudt af Figment, Chainstack, og Infura

**Indexer**: vi vil arbejde på at integrere TheGraph til at arbejde med StarkNet, sammen med Figment teamet

### Vejen Forude

I de kommende uger og måneder vil vi opgradere Alpha med følgende evner:

* Kontrakt opgraderingsmekanisme
* Gebyrer Mekanisme
* Begivenheder
* Tilføjelse af manglende syscalls (get_block_nummer, get_block_timestamp, og mere)
* Skeletal version af Volition
* Og meget mere …

For at overvåge denne indsats løbende, se funktionerne«[tentativ køreplan](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51).

Ser vi længere ud, fortsætter vi med at investere kraftigt i aktiv forskning på flere fronter (kom deltage i[Shamans](https://community.starknet.io/)indsatsen):

* Decentralisering
* Skalering
* Data tilgængelighed
* Tilladelsesfri incitamenter

### Ring til handling

* Begynde at skrive kontrakter på den tilladelsesfri StarkNet testnet på Goerli
* Deltag i[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)
* Deltag i fællesskabs opkald
* Deltag i det første[StarkNet Ecosystem Summit](https://www.eventbrite.com/e/starknet-ecosystem-summit-2022-tickets-206671880157)(27-28 2022, Stanford CA)
* Deltag i[StarkNet Shamans](https://community.starknet.io/)for en dybere dykning i forskningsudfordringer

### Ansvarsfraskrivelse

***StarkNet Alpha er et nyt og komplekst system, der ikke er blevet fuldt revideret. Ligesom alle komplekse softwaresystemer, StarkNet system kan indeholde fejl, som i ekstreme tilfælde kan føre til et tab af alle dine midler. Så***træde forsigtigt og pas på!******

*Økosystemet StarkNet er et stort og hurtigt voksende sæt af uafhængige hold og enkeltpersoner, som StarkWare ikke har noget overblik over og påtager sig intet ansvar. Enhver af de projekter, der er udviklet af økosystemmedlemmer, kan indeholde fejl, der i ekstreme tilfælde kan føre til et tab af alle dine midler. Endvidere, som mere smart kontrakter er implementeret, potentialet for utilsigtede skadelige bugs og endda ondsindede svindel og tæppe trækker stiger. Så behandl alle smarte kontrakter på StarkNet som du behandler smarte kontrakter på Ethereum, og brug kun dem, som du har god grund til at stole på som sikker.*