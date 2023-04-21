### TL;DR

* StarkNet Alpha 0.7.0 släpptes till Goerli; packad med förbättringar
* Kontrakt kan nu uppgraderas med Proxy Upgrade Mönster
* Kontrakt kan nu släppa ut händelser
* Stöd för de efterlängtade blocknummer och block tidsstämpel systemanrop

### Introduktion

Vi är glada att släppa Alpha 0.7.0, en version fylld med nya funktioner och förbättringar. En av de bästa stimulantia till StarkNet under de senaste månaderna har varit samhällets ökade engagemang för att forma Starknets framtid. Denna version tar upp några av gemenskapens brinnande behov.

#### Ändringar i namngivningskonventionen

Den observerande läsaren kanske har märkt att den tidigare StarkNet Alpha utgåvan hette Alpha 4, medan vi nu släpper Alpha 0.7.0. Vi bestämde oss för att utelämna det dedikerade Alpha-versionsnumret och istället bara förlita sig på den associerade cairo-lang versionen.

### Nya funktioner

#### Uppgraderingsbarhet för kontrakt

OpenZeppelins[Proxy Upgrade Pattern](https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies)stöds nu fullt ut för kontraktsuppgraderingar i StarkNet. Proxymönstret är den vanligaste metoden för att möjliggöra kontraktsuppgraderingar över Ethereum. Alpha 0.7.0 möjliggör detta mönster över StarkNet.

Vi gjorde en kort[handledning](https://starknet.io/docs/hello_starknet/default_entrypoint.html)för att visa en grundläggande implementering av mönstret, och OpenZeppelin arbetar redan hårt med att implementera ett standardavtal för proxymönstret; se[prototypen](https://github.com/OpenZeppelin/cairo-contracts/pull/129).

#### Block Nummer och Block Tidsstämpel

Alpha 0.7.0 lägger till två nya system samtal som många devs har bett om. Dessa samtal tillåter ett kontrakt att få tillgång till blocknumret och blockets tidsstämplar. Blocknumret returnerar antalet av det aktuella körda blocket. Blockets tidsstämpel returnerar tidsstämpel som ges av Sequencer vid skapandet av blocket.

Du kan se ett exempel på hur du använder dessa funktioner i[handledningen](https://starknet.io/docs/hello_starknet/more_features.html#block-number-and-timestamp).

#### Händelser

Överraskning! En funktion som var planerad till en framtida version har smyga sig in i denna tidigare.

StarkNet kontrakt stöder nu att definiera och släppa ut händelser, vilket gör det möjligt för dem att exponera exekveringsinformation för off-kedje-applikationer att konsumera. Ethereum utvecklare kommer att hitta semantik och syntax mycket lik Solidity. Du kan läsa[dokumentation](https://starknet.io/documentation/events/), eller följa[handledning](https://starknet.io/docs/hello_starknet/events.html), som förklarar den här funktionen.

#### Tog bort %builtins direktiv

%builtin direktivet behövs inte längre i StarkNet kontrakt. Denna förändring följde en samhällsdiskussion om[avtalets extensibilitetsmönster](https://community.starknet.io/t/contract-extensibility-pattern/210)på[StarkNet Shamans](https://community.starknet.io/). Det förenklar avsevärt användbarheten av detta extensibilitetsmönster.

Till exempel kommer följande kontrakt att ändras från:

```
%lang starknet

# Detta är direktivet "%builtins".
# Det behövs inte längre.
%builtins range_check

@view
func add(x : filt, y : filt) -> (res : filt):
return (res=x + y)
end
```

Till detta:

```
%lang starknet
@view
func add(x : filt, y : filt) -> (res : filt):
retur (res=x + y)
slut
```

Du kan kolla in standardkontrakten[ERC-20](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts/token)som använder det nya mönstret.

#### Externa funktioner stöd Arrays of Structs

Alpha 0.7.0 stöder passerar och returnerar arrayer av strukturer i externa funktioner. Denna ytterligare funktionalitet gör det möjligt för Kontrakt att bättre stödja[multicalls](https://github.com/OpenZeppelin/cairo-contracts/pull/73#discussion_r753535751).

Multicall är en kraftfull funktion i Konto Abstraktion som tillåter ett konto att ringa flera samtal i en enda transaktion. Ett självklart användningsfall är att skapa en**enda transaktion**som anropar ersättning och sedan överför.

Vi ser fram emot att se vad samhället gör med det.

#### Förbättringar av StarkNet CLI

**Stöd för väntande block**

[Väntande block](https://starknet.io/documentation/block-structure-and-hash/#pending_block)introducerades[](https://community.starknet.io/t/cairo-v0-6-2-api-change-pending-block/195)i den sista mindre versionen (v0.6.2) och erbjöd snabbare bekräftelser på transaktioner. Denna version innehåller stöd för att fråga dessa block via StarkNet CLI.

För att använda det, i varje CLI-kommando som tar block_number som ett argument (contract_call/get_block/get_code/get_storage_at), vi kan fråga StarkNet med avseende på det väntande blocket genom att ange block_number=väntande.

**Stöd för kontoavtal**

StarkNet använder kontoabstraktion, dvs alla konton implementeras som smarta kontrakt. De första implementeringarna av kontoavtal gjordes av[Argent](https://github.com/argentlabs/argent-contracts-starknet)och[OZ](https://github.com/OpenZeppelin/cairo-contracts/blob/main/contracts/Account.cairo), men vi förväntar oss många fler framöver.

I StarkNet måste alla transaktioner gå igenom ett kontoavtal, och CLI möjliggör nu interaktion med StarkNet Alpha direkt via kontoavtal. Se[handledningen](https://starknet.io/docs/hello_starknet/account_setup.html#setting-up-a-starknet-account)om hur du ställer in den.

Liknande funktionalitet har också lagts till[StarkNet.py](https://github.com/software-mansion/starknet.py/)och[Nilen](https://github.com/OpenZeppelin/nile)under den senaste månaden.

#### L1<>L2 Meddelanden i Testing Framework

Alpha 0.7.0 introducerar Postman. Postman gör det möjligt för utvecklare att använda testningsramverket för att testa mer komplicerade flöden.

På en hög nivå — det hånar StarkNet Sequencers ansvar att skicka meddelanden från L1 till L2 och L2 till L1. Det gör att meddelanden som skickas via Solidity meddelandekontrakt kommer att visas på destinationen StarkNet kontrakt och meddelanden som skickas från ett StarkNet kontrakt kommer att visas i Solidity meddelandekontrakt.

#### Och fler funktioner

Alpha 0.7.0 ger många fler funktioner och förändringar, som tillägget av en effektiv kvadratrotsfunktion till matematiska gemensamma biblioteket. En fullständig lista visas i[ändringsloggen](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.7.0).

### Nästa upp?

Första[Avgiftsmekanism](https://community.starknet.io/t/fees-in-starknet-alpha/286/29)stöd kommer att släppas inom några veckor, som en delversion av StarkNet.

### Mer information?

[starknet.io](https://starknet.io/): för all StarkNet information, handledning och uppdateringar.

[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y): gå med för att få svar på dina frågor, få dev support och bli en del av samhället.

[StarkNet Shamans](https://community.starknet.io/): gå med och följa (och delta!) i StarkNet forskningsdiskussioner.