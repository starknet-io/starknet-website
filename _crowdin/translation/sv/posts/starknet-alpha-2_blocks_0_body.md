### TL;DR

* StarkNet stödjer nu kompositören, den viktigaste funktionen som definierar Starknets konstellationsfas.
* Vi släpper ett testramverk för StarkNet – utvecklare kan nu testa sina kontrakt lokalt och effektivt.
* Denna utgåva innehåller flera anmärkningsvärda prestandaförbättringar, såsom stöd för Merkle-Patricia Tries och en inbyggd för bitwise operationer.
* Ekosystemets framsida:

1. **Standardiserade kontrakt**: OpenZeppelin kommer att utveckla standardiserade kontrakt för StarkNet som de gjorde för Ethereum!
2. **EVM->Kairo Compiler**: Warp team @ Nethermind demonstrerade sammanställning av ERC-20 Solidity kod till StarkNet kontrakt

### Bakgrund

StarkNet är ett tillståndsfritt decentraliserat Validity-Rollup (även kallat ZK-Rollup). Vi tillkännagav sin[färdplan](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)i början av året. [Alpha](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), som för närvarande körs på ett offentligt Ethereum testnet, stöder redan tillåten distribution av smarta kontrakt genomföra någon affärslogik, med L1<>L2 meddelanden och on-chain data. Dessutom gör det möjligt för alla användare att skicka transaktioner till nätverket behörighet, Ethereum-stil.

Denna utgåva: StarkNet Alpha 2, innehåller kärnfunktionen som gör det möjligt för oss att avancera från planeter till konstellationer: sammansättning mellan distribuerade smarta kontrakt.

### Funktioner

StarkNet Alpha 2 introducerar följande funktioner:

* **Komposabilitet:**StarkNet Alpha stödjer nu interaktion mellan smarta kontrakt – före tidtabellen! Skönheten i denna uppgradering är att utvecklare kan förvänta sig nästan samma erfarenhet som Ethereum; anrop är synkrona och kan användas som funktionsanrop. Vi väntar ivrigt på de nya applikationer som kommer att gynnas av både obegränsad beräkningsskala och kontraktskompatibilitet, som utlöstes av StarkNet. För att förstå hur du använder den här funktionen kan du börja med att följa denna[handledning](https://www.cairo-lang.org/docs/hello_starknet/calling_contracts.html). Vi vill gärna höra din feedback och se vad du bygger på[StarkNet discord](https://discord.gg/uJ9HZTUk2Y).
* **Lokala testramar:**du frågade och vi levererade — ett[bättre testramverk](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/starknet/testing). Detta gör det möjligt för utvecklare att påskynda sin dApp utveckling genom att testa sina StarkNet kontrakt distributioner och interaktioner lokalt — utan några externa beroenden. Denna version innehåller endast L2 interaktion, nästa versioner kommer att utöka funktionaliteten och användarvänligheten. Kontrollera handledningen[här](https://www.cairo-lang.org/docs/hello_starknet/unit_tests.html), och vi skulle älska att höra din feedback på den funktionen.
* **Förbättringar av prestanda:**

**Patricia Trees:**Vi har förbättrat StarkNet’s design för att stödja högre genomströmningar och kortare säker genereringstid genom att flytta till Merkle-Patricia Tree statliga åtagande ([dokumentation](https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/cairo/common/patricia_utils.py)). Denna förändring gör det möjligt att skapa mycket större block, vilket sänker kostnaden per transaktion. Flytten till ett mer sofistikerat statligt åtagande möjliggjordes av Kairo, ZKP språk — en kärnkomponent i StarkNet operativsystem.

**Bitwise Operations:**vi har lagt till en[inbyggd](https://www.cairo-lang.org/docs/how_cairo_works/builtins.html)för att stödja mycket effektivare bitwise operationer i StarkNet-kontrakt ([dokumentation](https://www.cairo-lang.org/docs/reference/common_library.html#common-library-bitwise)).

* **Goerli:**StarkNet flyttar från Ropsten till[Goerli](https://goerli.etherscan.io/address/0xee02F29aE9A4988aE064940bF11954d6eafE26Ac)! Äntligen har vi befriat vårt system från Ropstens gudars nycker. Alpha 2 kommer nu att köra över en stabilare utvecklingsmiljö.

### Ekosystem

StarkNet ekosystem växer ständigt, och vi är glada att dela de senaste nyheterna:

* **Standardiserade kontrakt**: vi är hedrade över att arbeta med OpenZeppelin på StarkNet’s standard kontrakt bibliotek. Deras kanoniska arbete med Ethereums standardiserade kontrakt betjänar oss alla dagligen, och vi är övertygade om att de kommer att bli lika effektiva här.
* **EVM->Cairo Compiler**: Nederländernas Warp team[demonstrerade](https://medium.com/nethermind-eth/warp-your-way-to-starknet-ddd6856875e0)transpilering av ett ERC-20-kontrakt från EVM bytecode till ett StarkNet kontrakt och distribution på StarkNet. Denna insats går snabbt framåt och vårt nästa mål är införlivandet av godtyckliga smarta kontrakt från Yul till Kairo.
* **Maker-on-StarkNet**: ett[förslag](https://forum.makerdao.com/t/mip39c2-sp19-adding-the-starknet-engineering-core-unit-sne-001/9745)lämnades till Maker DAO för att genomföra Maker protokollet över StarkNet. Den första fasen föreslår en DAI-bro från Ethereum till StarkNet med tryckning DAI på StarkNet att följa.
* **StarkNet/Cairo Auditing Services**: Vi engagerar flera revisionsföretag för att tillhandahålla StarkNet smarta kontrakt och Kairo program revisionstjänster.

### Mainnet runt hörnet

Vi gör oss redo för StarkNet Alpha Mainnet lansering, börjar gradvis med en vitlistad uppsättning applikationer. Flera projekt pågår och fler läggs till för varje dag. För att gå med i festen är du inbjuden att nå ut via[discord](https://discord.gg/uJ9HZTUk2Y).

**Uppdatering (nov 2021):**StarkNet Alpha live på Ethereum Mainnet