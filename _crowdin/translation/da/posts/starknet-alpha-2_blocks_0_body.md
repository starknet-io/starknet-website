### TL;DR

* StarkNet understøtter nu kompostering, den vigtigste funktion definerer StarkNet ‘ s Constellations fase.
* Vi frigiver en testramme for StarkNet — udviklere kan nu teste deres kontrakter lokalt og effektivt.
* Denne udgivelse indeholder flere bemærkelsesværdige forbedringer af ydeevnen, såsom støtte til Merkle-Patricia Tries og en indbygget til bitwise operationer.
* Foran Økosystemet:

1. **Standardized Contracts**: OpenZeppelin vil udvikle standardiserede kontrakter for StarkNet, som de gjorde for Ethereum!
2. **EVM ->Cairo Compiler**: Warp team @ Nethermind demonstrerede udarbejdelse af ERC-20 Solidity kode til StarkNet kontrakter

### Baggrund

StarkNet er en tilladelsesfri decentraliseret Validity-Rollup (alias “ZK-Rollup”). Vi annoncerede sin[køreplan](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)i begyndelsen af året. The[Alpha](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), currently running on a public Ethereum testnet understøtter allerede tilladelsesfri implementering af smarte kontrakter, der implementerer enhver forretningslogik, med L1<>L2 besked- og on-chain data. Endvidere, det giver enhver bruger til at sende transaktioner til netværket tilladelsesfrit, Ethereum-stil.

Denne udgivelse: StarkNet Alpha 2, omfatter den centrale funktion, der gør det muligt for os at gå videre fra Planeter til Constellations: kompostering mellem implementerede smart kontrakter.

### Funktioner

StarkNet Alpha 2 introducerer følgende funktioner:

* **Composability:**StarkNet Alpha understøtter nu interaktion mellem smarte kontrakter — forud for tidsplan! Skønheden i denne opgradering er, at udviklere kan forvente næsten den samme oplevelse som Ethereum; opkald er synkrone og kan bruges som funktion opkald. Vi venter ivrigt på de nye ansøgninger, der vil drage fordel af både ubegrænset computerkraft omfang og kontraktsammensætning, som udløst af StarkNet. For at forstå, hvordan du bruger denne funktion, kan du starte med at følge denne[tutorial](https://www.cairo-lang.org/docs/hello_starknet/calling_contracts.html). Vi vil gerne høre din feedback og se, hvad du bygger på[StarkNet discord](https://discord.gg/uJ9HZTUk2Y).
* **Local Testing Framework:**you asked and we delivered — a[better testing framework](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/starknet/testing). Dette vil gøre det muligt for udviklere at fremskynde deres dApp udvikling ved at teste deres StarkNet kontrakt implementeringer og interaktioner lokalt — uden nogen eksterne afhængigheder. Denne version indeholder kun L2 interaktion, næste versioner vil udvide funktionalitet og brugervenlighed. Tjek tutorial[her](https://www.cairo-lang.org/docs/hello_starknet/unit_tests.html), og vi vil gerne høre din feedback om denne funktion.
* **Forbedringer Af Ydelse:**

**Patricia Trees:**Vi har forbedret StarkNet design til at understøtte højere gennemgange og kortere tid til at sikre generering ved at flytte til Merkle-Patricia Tree state commitment ([dokumentation](https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/cairo/common/patricia_utils.py)). Denne ændring gør det muligt at skabe meget større blokke, hvilket reducerer omkostningerne pr. transaktion. Flytningen til en mere sofistikeret statslig forpligtelse blev aktiveret af Cairo, ZKP sprog — en central komponent i StarkNet operativsystemet.

**Bitwise Operations:**we ’ve added a[builtin](https://www.cairo-lang.org/docs/how_cairo_works/builtins.html)to support much more efficient bitwise operations in StarkNet contracts ([documentation](https://www.cairo-lang.org/docs/reference/common_library.html#common-library-bitwise)).

* **Goerli:**StarkNet flytter fra Ropsten til[Goerli](https://goerli.etherscan.io/address/0xee02F29aE9A4988aE064940bF11954d6eafE26Ac)! Endelig har vi befriet vores system fra Ropsten Gudernes luner. Alpha 2 vil nu køre over et mere stabilt udviklingsmiljø.

### Økosystem

Den StarkNet økosystem er konstant voksende, og vi er glade for at dele de seneste nyheder:

* **Standardized Contracts**: Vi er beæret over at arbejde med OpenZeppelin på StarkNet standard kontrakter bibliotek. Deres kanoniske arbejde på Ethereum ‘ s standardiserede kontrakter tjener os alle dagligt, og vi er sikre på, at de vil være så effektfulde her.
* **EVM->Cairo Compiler**: Nethermind's Warp team[demonstrerede](https://medium.com/nethermind-eth/warp-your-way-to-starknet-ddd6856875e0)transpilering af en ERC-20 kontrakt fra EVM bytecode til en StarkNet kontrakt og implementering på StarkNet. Denne indsats bevæger sig hurtigt, og vores næste mål er at omgå vilkårlige intelligente kontrakter fra Yul til Cairo.
* **Maker-on-StarkNet**: et[forslag](https://forum.makerdao.com/t/mip39c2-sp19-adding-the-starknet-engineering-core-unit-sne-001/9745)blev indsendt til Maker DAO for at gennemføre Maker protokollen over StarkNet. Den første fase foreslår en DAI bro fra Ethereum til StarkNet med minting DAI på StarkNet at følge.
* **StarkNet/Cairo Auditing Services**: vi engagerer flere revisionsfirmaer til at levere StarkNet smart contract og Cairo programmer revisionstjenester.

### Mainnet Omkring hjørnet

Vi bliver klar til StarkNet Alpha Mainnet lancering, begynder gradvist med en hvidlistet sæt applikationer. Flere projekter er i gang, og flere er aktivt tilføjet om dagen. For at deltage i festen, er du inviteret til at nå ud via[discord](https://discord.gg/uJ9HZTUk2Y).

**Opdatering (Nov. 2021):**StarkNet Alpha er live på Ethereum Mainnet