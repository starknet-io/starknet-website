### TL;DR

* StarkNet Alpha 0.7.0 udgivet til Goerli; pakket med forbedringer
* Kontrakter kan nu opgraderes ved hjælp af Proxy Upgrade Mønster
* Kontrakter kan nu udsende begivenheder
* Støtte til de længe ventede Blok Nummer og Blok Tidsstempel systemopkald

### Introduktion

Vi er glade for at frigive Alpha 0.7.0, en version fyldt med nye funktioner og forbedringer. En af de bedste stimulanser til StarkNet i løbet af de sidste par måneder har været den øgede inddragelse af samfundet i udformningen StarkNet fremtid. Denne version løser nogle af samfundets brændende behov.

#### Ændringer af navngivningskonventionen

Den observant læser kunne have bemærket, at den tidligere StarkNet Alpha udgivelse blev opkaldt Alpha 4, mens vi nu frigiver Alpha 0.7.0. Vi besluttede at udelade den dedikerede Alpha version nummer og stole i stedet kun på den tilknyttede cairo-lang version.

### Nye Funktioner

#### Kontrakt Opgraderbarhed

OpenZeppelins[Proxy-opgraderingsmønster](https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies)understøttes nu fuldt ud til kontraktopgraderinger i StarkNet. Proxy mønster er den fælles metode til at aktivere kontrakt opgraderinger over Ethereum. Alpha 0.7.0 muliggør dette mønster over StarkNet.

Vi lavede en kort[tutorial](https://starknet.io/docs/hello_starknet/default_entrypoint.html)for at demonstrere en grundlæggende implementering af mønstret, og OpenZeppelin er allerede hårdt på arbejde at gennemføre en standardkontrakt for proxy mønster; se[prototypen](https://github.com/OpenZeppelin/cairo-contracts/pull/129).

#### Blok nummer og blokér tidsstempel

Alpha 0.7.0 tilføjer to nye systemopkald, som mange udviklere har bedt om. Disse opkald tillader en kontrakt at få adgang til blok nummer og blokens tidsstempel. Blokkenummeret returnerer nummeret på den aktuelle eksekverede blok. Blokken tidsstempel returnerer tidsstemplet givet af Sequencer ved oprettelsen af blokken.

Du kan se et eksempel på, hvordan du bruger disse funktioner i[tutorial](https://starknet.io/docs/hello_starknet/more_features.html#block-number-and-timestamp).

#### Begivenheder

Overrasket! En funktion, der var planlagt til en fremtidig version, har sneget sig vej ind i denne tidligere.

StarkNet kontrakter understøtter nu at definere og udsende begivenheder, der giver dem mulighed for at udsætte udførelse oplysninger for off-chain applikationer til at forbruge. Ethereum udviklere vil finde semantik og syntaks meget lig Solidity. Du kan læse[dokumentationen](https://starknet.io/documentation/events/)eller følge[tutorial](https://starknet.io/docs/hello_starknet/events.html), der forklarer denne funktion.

#### Fjernet %builtins-direktiv

%builtin direktivet er ikke længere nødvendigt i StarkNet kontrakter. Denne ændring fulgte efter en fælles diskussion om[kontraktforlængelsesmønstret](https://community.starknet.io/t/contract-extensibility-pattern/210)på[StarkNet Shamans](https://community.starknet.io/). Den forenkler i væsentlig grad anvendeligheden af dette udvidelsesmønster.

For eksempel vil følgende kontrakt blive ændret fra:

```
%lang starknet

# Dette er "%builtins" -direktivet.
# Det er ikke længere nødvendigt.
%builtins range_check

@view
func add(x : felt, y : felt) -> (res : felt):
return (res=x + y)
end
```

Til dette:

```
%lang starknet
@view
func add(x : felt, y : felt) -> (res : felt):
return (res=x + y)
end
```

Du kan tjekke de[ERC-20](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts/token)standardkontrakter, som bruger det nye mønster.

#### Eksterne funktioner Support Arrays of Structs

Alpha 0.7.0 understøtter passerer og returnerer arrays af konstruktioner i eksterne funktioner. Denne ekstra funktionalitet gør det muligt for Konto Kontrakter bedre at understøtte[multicalls](https://github.com/OpenZeppelin/cairo-contracts/pull/73#discussion_r753535751).

Multicall er et kraftfuldt træk ved konto Abstraktion, der giver en konto mulighed for at foretage flere opkald i en enkelt transaktion. En indlysende use-case er at oprette en**single transaktion**, der kalder kvote og derefter transferFrom.

Vi ser frem til at se, hvad samfundet gør med det.

#### Forbedringer af StarkNet CLI

**Understøttelse af Afventende blokke**

[Afventende blokke](https://starknet.io/documentation/block-structure-and-hash/#pending_block)blev[introduceret](https://community.starknet.io/t/cairo-v0-6-2-api-change-pending-block/195)i den sidste mindre version (v0.6.2) og tilbød hurtigere bekræftelser på transaktioner. Denne version indeholder støtte til at forespørge disse blokke via StarkNet CLI.

For at bruge det, i hver CLI kommando, der tager block_number som et argument (contract_call/get_block/get_code/get_storage_at), vi kan forespørge StarkNet med hensyn til den ventende blok ved at angive block_number=pending.

**Støtte til kontokontrakter**

StarkNet bruger konto abstraktion, dvs. alle konti er implementeret som smart kontrakter. De første implementeringer af kontokontrakter blev udført af[Argent](https://github.com/argentlabs/argent-contracts-starknet)og[OZ](https://github.com/OpenZeppelin/cairo-contracts/blob/main/contracts/Account.cairo), men vi forventer mange flere vil komme.

I StarkNet skal alle transaktioner gennemgå en kontokontrakt, og CLI tillader nu interaktion med StarkNet Alpha direkte via kontokontrakter. Se[tutorial](https://starknet.io/docs/hello_starknet/account_setup.html#setting-up-a-starknet-account)om, hvordan du opsætter den.

Lignende funktionalitet blev også tilføjet til[StarkNet.py](https://github.com/software-mansion/starknet.py/)og[Nile](https://github.com/OpenZeppelin/nile)i den sidste måned.

#### L1<>L2 Beskeder i testrammen

Alpha 0.7.0 introducerer Postman. Postman gør det muligt for udviklere at bruge testrammen til at teste mere komplicerede strømme.

På et højt niveau - det håner StarkNet Sequencer's ansvar for at passere meddelelser fra L1 til L2 og L2 til L1. Det sikrer, at meddelelser, der sendes via Solidity messaging kontrakten vises på destinationen StarkNet kontrakt og meddelelser sendt fra en StarkNet kontrakt vises i Solidity messaging kontrakt.

#### Og Flere Funktioner

Alpha 0.7.0 giver mange flere funktioner og ændringer, ligesom tilføjelsen af en effektiv kvadratrod funktion til matematik fælles bibliotek. En komplet liste vises i[changelog](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.7.0).

### Næste Up?

Indledende[Gebyrmekanisme](https://community.starknet.io/t/fees-in-starknet-alpha/286/29)støtte vil blive frigivet i løbet af få uger, som en underversion af StarkNet.

### Mere Information?

[starknet.io](https://starknet.io/): for alle StarkNet oplysninger, tutorials og opdateringer.

[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y): Deltag for at få svar på dine spørgsmål, få dev support og blive en del af fællesskabet.

[StarkNet Shamans](https://community.starknet.io/): Deltag i at følge (og deltag!) i StarkNet forskning diskussioner.