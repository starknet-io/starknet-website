### TL;DR

* StarkNet støtter nå sammensetningen, og den viktigste funksjonen definerer konstellasjonsfasen for StarkNets.
* Vi frigir nå et testrammeverk for testing av StarkNet – utviklere kan teste sine kontrakter lokalt og effektivt.
* Dette utslippet omfatter flere merkbare forbedringer av ytelsen, som støtte for Merkle-Patricia Trier og et innebygd bidrag for bitvise operasjoner.
* Økosystem fram:

1. **Standardisert Kontrakter**: OpenZeppelin vil utvikle standardiserte kontrakter for StarkNet, som de gjorde for Ethereum!
2. **EVM->Kairo Compiler**: Warp-teamet @ Nethermind demonstrerte kompilering av ERC-20 Soliditetskode til STNet arkon-kontrakter

### Bakgrunn

StarkNet er en tillatelsesfri desentralisert valideringsopprulling (aka «ZK-Rollup»). Vi annonserte[veikart](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)ved inngangen til året. [Alpha](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), for tiden kjører på et offentlig Ethereum testnet, allerede støtter en tillatelsesløs utplassering av smarte kontrakter som implementerer et forretningsmessig logikk, med L1<>L2 meldinger og data på kjeden. Videre tillater den enhver bruker å sende transaksjoner til nettverket, Ethereum-style.

Denne utgivelsen: StarkNet Alpha 2 inneholder hovedfunksjonen som lar oss forflytte oss fra Planets til Constellations: composability between deployed smartkontrakts.

### Funksjoner

StarkNet Alpha 2 introduserer følgende funksjoner:

* **Komposabilitet:**StarkNet Alpha støtter nå samspill mellom smarte kontrakter - foran planen! En skjønnhet ved denne oppgraderingen er at utviklere kan forvente nesten de samme erfaringene som Ethereum samtaler er synkroniserte og kan brukes som funksjonskanaler. Vi venter sågar på nye søknader som får både ubegrenset dateringsskala og kontraktskomponiabilitet, som StarkNets uløst. For å forstå hvordan du bruker denne funksjonen, kan du starte med å følge denne[veiledningen](https://www.cairo-lang.org/docs/hello_starknet/calling_contracts.html). Vi vil gjerne høre din tilbakemelding og se hva du bygger på[StarkNet discord](https://discord.gg/uJ9HZTUk2Y).
* **Local Testing Framework:**du spurte, og vi leverte — et[bedre testingsrammeverk](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/starknet/testing). Dette gjør det mulig for utviklerne å fremskynde sin dApp-utvikling ved å teste deres StarkNet-kontraktsdistribusjoner og samhandling lokalt — uten eksterne avhengigheter. Denne versjonen omfatter bare L2-interaksjon, neste versjoner vil utvide funksjonaliteten og brukeropplevelsen. Sjekk veiledningen[her](https://www.cairo-lang.org/docs/hello_starknet/unit_tests.html)og vi vil gjerne høre din tilbakemelding på den funksjonen.
* **Forbedringer i ytelse:**

**Patricia Trær:**Vi har forbedret design for å støtte høyere gjennomstrømning og kortere sjenerasjonstid ved å gå videre til Merkle-Patricia Tree state commitment ([documentation](https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/cairo/common/patricia_utils.py)). Med denne endringen kan det lages mye større blokker, og kostnaden per transaksjon reduseres. Bevegelsen til en mer sofistikert statlig forpliktelse ble aktivert av Cairo, ZKP-språket — en kjernekomponent i StarkNet operativsystem.

**Bitkloke operasjoner:**vi har lagt til en[innebygd](https://www.cairo-lang.org/docs/how_cairo_works/builtins.html)for å støtte en mye mer effektiv bitvis drift i StarkNet-kontrakter ([dokumentasjon](https://www.cairo-lang.org/docs/reference/common_library.html#common-library-bitwise)).

* **Goerli:**StarkNet beveger seg fra Ropsten til[Goerli](https://goerli.etherscan.io/address/0xee02F29aE9A4988aE064940bF11954d6eafE26Ac)! Til sist har vi frigjort vårt system fra Ropsten Guds fylker. Alfa 2 skal nå gå over et mer stabilt utviklingsmiljø.

### Økosystem

StarkNet ecosystem vokser stadig, og vi deler de siste nyhetene:

* **Standardized Contracts**: Vi er beæret for å arbeide med OpenZeppelin på StarkNetts standardkontrakter bibliotek. Deres kanoniske arbeid på Ethereums standardiserte kontrakter gjør at vi alle dager er sikre på at de vil være like berørt her.
* **EVM->Kairo Compiler**: Nederlandsk Warp team[demonstrerte](https://medium.com/nethermind-eth/warp-your-way-to-starknet-ddd6856875e0)transkoding av en ERC-20 kontrakt fra EVM bytecode til en STarkNet kontrakt og distribusjon på StarkNet. Dette arbeidet beveger seg raskt og vårt neste mål viser utviklingen av vilkårlige smartkontrakter fra Yul til Kairo.
* **Maker-on-StarkNet**:[forslag](https://forum.makerdao.com/t/mip39c2-sp19-adding-the-starknet-engineering-core-unit-sne-001/9745)ble sendt til Maker DAO for å implementere Maker-protokollen over StarkNet. Første fase foreslår en DAI-bro fra Ethereum til StarkNet med minting DAI på StarkNet til oppfølging.
* **StarkNet/Cairo Auditing Services**: Vi engasjerer flere revisjonsfirmaer for å levere StarkNet smart kontrakt og Cairo programmer for revisjon av tjenester.

### Mainnet Rundt hjørnet

Vi gjør oss klare for StarkNet Alpha Mainnet lansering, og begynner gradvis med et hvitelistet sett med applikasjoner. Flere prosjekter er i gang og mer pålegges aktivt for dagen. For å bli med i partiet inviteres du til å nå ut via[discord](https://discord.gg/uJ9HZTUk2Y).

**Oppdatering (Nov. 2021):**StarkNet Alpha er live på Ethereum Mainnet