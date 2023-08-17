### TL;DR

StarkNet Alpha 1 har två nya funktioner:

* L1<>L2 interaktion
* On-chain data

### Introduktion

I början av året meddelade vi att StarkWare bygger[StarkNet](https://starkware.co/product/starknet/), en behörighetslös decentraliserad STARK-baserad ZK-Rollup1 som fungerar som ett L2-nätverk över Ethereum. StarkNet tillåter alla dApp att uppnå obegränsad skala för sin beräkning - utan att äventyra Ethereums kompositbarhet och säkerhet.

Förra månaden släpptes[StarkNet Alpha 0](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)till världen. För första gången kan utvecklare[skriva](https://kobi.one/2021/07/14/stardrop.html)något smart kontrakt och distribuera det, tillåtet, till en ZK-Rollup. Användare kan skicka transaktioner till nätverket, Ethereum-stil.

Idag släpper vi en ny version; Alpha 1. Vi släpper funktioner på rullande basis för att tillåta utvecklare att interagera med nya funktioner så snart som möjligt. Vi räknar med att detta kommer att strama åt återkopplingscykeln och möjliggöra feedback från samhället för att snabbt förbättra StarkNet.

### **Alpha 1 funktioner**

#### L1<>L2 interaktion

Alpha 1 innehåller ett L1<>L2 meddelandeprotokoll, vilket gör det möjligt för utvecklare att implementera sömlösa transaktionsflöden mellan L1 och L2. Utvecklare kan nu skicka meddelanden från kontrakt på L1 till kontrakt på L2 och vice versa.

En av skönheterna i ZK-Rollups är att statliga uppdateringar är slutgiltiga, utan dröjsmål. Detta innebär att meddelanden som skickades från L2 till L1 kan omedelbart vidarebefordras till deras destinationskontrakt. Detta öppnar vägen för att bygga appar som verkligen är kompatibla mellan lagren.

Intresserad av att prova det? Det bästa sättet att komma igång är att följa handledningen[här](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html).

Vårt L1<>L2-protokoll beror mycket på andra L2s (specifikt Optimism och Arbitrum) vars tidigare arbete på detta område påverkade vår design.

#### On-Chain Data-Tillgänglighet

StarkNet tillstånd uppdatering är nu också publiceras som on-chain data på Ethereum. Detta gör att alla användare att helt konstruera StarkNet tillstånd från L1-data. Varje statsuppdatering inkluderar statsuppdateringen, dvs. vilken lagring som ändrades och dess nya värde.

Även här visar ZK-Rollup sin styrka. I motsats till Optimistic Rollups, där de fullständiga transaktionernas data måste skickas on-chain, i ZK-Rollups, endast de absolut minsta data som krävs för att härleda delningsstaten skickas on-chain.

Överväg ett utmärkt exempel, pris orakel. En transaktion för att uppdatera ett pris orakel innehåller vanligtvis flera transaktioner men uppdaterar endast en lagringscell, parets pris. Den on-chain data som krävs för en statlig uppdatering som innehåller pris orakel transaktioner i en Optimistic Rollup växer linjärt med antalet uppdateringar, medan du är i en ZK-Rollup kommer det alltid att vara en enda lagringsuppdatering.

Dessutom kan komprimeringsalgoritmer tillämpas på publicerade data, och deras giltighet kommer att intygas av STARK bevis, ytterligare minska on-chain fotavtryck. Framtida versioner av StarkNet kommer att introducera innovativa optimeringar inom detta område.

#### StarkNet OS

Vi släpper även koden StarkNet Operativsystem. StarkNet OS är Kairoprogrammet som driver StarkNet. OS hanterar allt som görs på nätverket — kontrakt distribution, transaktion utförande, L1<>L2 meddelanden och mer. StarkNet OS arkitektur och design kommer att förklaras i detalj i ett separat inlägg.

#### Extra funktioner

Inte bara har StarkNet Alpha utvecklats, vi förbättrar också ständigt Kairo. För en fullständig beskrivning av de nya funktionerna i Kairo v0.3.0, se versionsfakta[här](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.3.0).

### Ekosystemet växer

Bortsett från det ständiga arbetet på StarkNet Core, expanderar ekosystemets arbete på StarkNet kontinuerligt. Vi är glada över att samarbeta med några av de mest begåvade lagen från ekosystemet.

Fermion, StarkNet första Full Node ansträngning, utvecklas av Erigon (tidigare TurboGeth) laget. Baserat på deras enorma kunskap från att arbeta på Ethereum, kan vi arbeta med dem för att bygga en kraftfull Full Node, som innehåller många lärdomar när du bygger för Ethereum, samtidigt dra nytta av den skala som erbjuds av STARK bevis.

Nethermind arbetar på Warp, en kompilator från EVM till Kairo. Bundna av vår kultur att presentera nya verktyg först när de är redo, allt vi kan säga är, förvänta dig spännande nyheter på denna front mycket snart! Vi kan dock säga att de rör sig i varphastighet.

### Vad framtiden håller

Nästa stopp på vår väg till StarkNet kommer att vara sammanhängande – vilket gör att kontrakt kan interagera med varandra. Håll ögonen öppna.

[StarkWare](https://starkware.co/)

1 Som vi har sagt tidigare, är ZK-Rollup vid det här laget en vanlig term, men mycket vilseledande: dessa lösningar inte (nuvarande) erbjuder noll-kunskap.

**Uppdatering (nov 2021):**StarkNet Alpha live på Ethereum Mainnet