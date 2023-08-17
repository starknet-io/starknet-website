### **TL;DR**

* [StarkNet Planets Alpha](https://voyager.online/)— det första steget på vår väg mot Mainnet — är nu live på Testnet!
* [StarkNet](https://starkware.co/product/starknet/)är ett tillstånd utan Turing-complete ZK-Rollup1.
* Utvecklare kan implementera sin affärslogik i ett smart kontrakt och distribuera den utan tillstånd på StarkNet.
* De statliga övergångarna i StarkNet är beprövade off-chain och sedan verifierade on-chain.
* Ungefär som Ethereum kan användarna interagera direkt med dessa smarta kontrakt.

### **Introduktion**

Vi[tillkännagav](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)färdplanen för[StarkNet](https://starkware.co/product/starknet/)i jan 2021. Den heliga Graalen av skalbarhetslösningar skulle stödja (i) godtyckliga smarta kontrakt, med (ii) kompositabilitet, (iii) som drivs över ett decentraliserat nätverk. Idag tillkännager vi utbyggnaden på testnet av steg 1: StarkNet Planets Alpha. Alpha-systemet stöder godtyckliga smarta kontrakt. Kompatibiliteten kommer att stödjas senare i år, med decentralisering att följa.

Det är mycket viktigt att vi är helt öppna och ställer upp förväntningarna ordentligt. Syftet med detta inlägg är att tydligt lista vad som redan stöds, och vilka funktioner som fortfarande saknas. Vad vi släpper idag är Work in Progress on testnet. Vi tror att denna tidiga release kommer att hjälpa bildandet av ett hälsosamt ekosystem runt StarkNet och dess verktyg. Vi är angelägna om att involvera utvecklare i att bygga nätverket med oss, och att få kontinuerlig feedback från samhället.

### **Vad finns i StarkNet Planets Alpha?**

**Funktionalitet:**Alpha tillåter utvecklare att skriva och distribuera StarkNet kontrakt för allmän beräkning. Det finns ingen vitlistning — någon utvecklare kan skriva och distribuera vad kontrakt de vill. Användare kan interagera med dessa avtal, genom att skicka transaktioner till dem, och inspektera deras stat. Alla kontrakt finns i en enda stat2. Uppdateringar till detta tillstånd är bevisat off-chain, och verifieras on-chain — i Alpha, verifiering sker på testnet.

**StarkNet OS:**Ovanstående funktionalitet stöds av ett nytt ”operativsystem” som vi kallar StarkNet OS. Det erbjuder*bevisbara*tillståndsövergångar på StarkNet. Ethereum utvecklare kan tänka sig det som en motsvarighet till EVM: det är ansvarig för att åberopa smarta kontraktsfunktioner, hantera kontrakt lagring etc. Vi kommer att publicera ett separat inlägg som beskriver arkitekturen i StarkNet OS.

**Vad är inte i Alpha?**Alpha saknar fortfarande några nyckelfunktioner, såsom L1<>L2 interaktion, on-chain data och kompositabilitet. Mer om dessa nedan.

#### **Att få dina fötter våt**

Börja med vår[handledning och dokumentation](https://www.cairo-lang.org/docs/hello_starknet/).

Sedan kan du läsa igenom[exemplet AMM smart kontrakt](http://cairo-lang.org/docs/hello_starknet/amm.html)som vi har skrivit och distribuerat på StarkNet. Det är en enkel AMM, och du kan interagera med det[här](https://starkware-amm-demo.netlify.app/swap). Du är nu redo att skriva och distribuera smarta kontrakt på StarkNet. Blocket explorer för StarkNet —[Voyager](https://voyager.online/)— tillåter vem som helst att inspektera StarkNet tillstånd.\
Genom att få dina fötter blöta, tror vi att du kommer att vara bättre förberedd för att bygga på StarkNet, som vi fortsätter att rulla ut ytterligare funktioner. Vi är redan upptagna med att planera en första hackathon, samt workshops för utvecklare.

### **Nästa steg för StarkNet**

De nyckelfunktioner som fortfarande saknas i Alpha kommer att rullas ut från och med de kommande veckorna. Dessa är:

* L1<>L2 interaktion, t.ex. möjligheten att sätta in och ta ut pengar i L1.
* On-chain data: publicera alla lagringsändringar på Ethereum.
* Komposabilitet: tillåta kontrakt att kommunicera med varandra.

Med dessa funktioner på plats, kommer vi att vara redo att ta StarkNet till Ethereum Mainnet. Vi kallar detta steg i Starknets evolution Constellations, och när vi når det, du kommer att kunna bygga och utan tillstånd distribuera på Ethereum Mainnet skalbara L2 dApps.

#### **The StarkNet Ecosystem**

Vi är mycket glada över det ekosystem som bildas runt StarkNet så vi ska pausa för att tacka våra samarbetspartners hittills.

Vi har ett nära samarbete med[Nethermind](https://twitter.com/nethermindeth)och Nubia teamet,[Alexey Akhunov](https://twitter.com/realLedgerwatch)(Erigon) &[Igor Mandrigin](https://twitter.com/mandrigin)(gateway. m),[Iddo Bentov](https://www.cs.cornell.edu/~iddo/),[dOrg](https://twitter.com/dOrg_tech),[Prof. Tim Roughgarden](https://twitter.com/algo_class),[Prof. Jeremy Avigad](https://www.andrew.cmu.edu/user/avigad/)& Yoav Seginer, sist men inte minst —[Paradigm](https://twitter.com/paradigm)laget.\
Våra tidiga samarbetspartners —[dYdX](https://twitter.com/dydxprotocol),[Oföränderlig](https://twitter.com/Immutable),[DeversiFi](https://twitter.com/deversifi)och[Sorare](https://twitter.com/SorareHQ),[Celer](https://twitter.com/CelerNetwork), och andra – har gett oss ovärderlig input från dag ett, och låt oss bygga ett produktionsbaserat nätverk för riktiga användare.\
Vi fortsätter att bli förvånade över kvaliteten på innehåll som skapats av gemenskapen, av personer som[Bobbin Threadbare](https://twitter.com/bobbinth),[Daniel Kroni](https://github.com/danielkroeni/cairo-playground/blob/main/anon-bank/README.md),[Adrian Hamelink](https://twitter.com/adr1anh),[perama](https://twitter.com/eth_worm),[Francesco Ceccon](https://twitter.com/ceccon_me),[Ilian Malchev](http://twitter.com/imalchev)och[Alexandria laget](https://blockchainpartner.fr/).

Vi är angelägna om att se vad gemenskapen kommer att skapa på alla fronter: utvecklarverktyg, innehåll och naturligtvis StarkNet-applikationer som de kommer att bygga. Låt oss hålla konversationen igång i din favorit media av val:[discord](https://discord.gg/uJ9HZTUk2Y),[Twitter](https://twitter.com/CairoLang),[e-post](mailto:info@starkware.co), och snart med den mest decentraliserade av kommunikationsformer: f2f.

1 Vi är inte fans av termen ZK-Rollup, som - matematiskt sett - det är inte noll-kunskap, men ni vet alla vad vi menar

2 Till skillnad från den separata staten som upprätthålls för nuvarande StarkEx distributioner på Mainnet

**Uppdatering (nov 2021):**StarkNet Alpha live på Ethereum Mainnet