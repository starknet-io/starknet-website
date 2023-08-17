### TL;DR

* *StarkNet Alpha lanserar på Mainnet Ethereum i november*
* Nu är det dags att bygga på StarkNet

### En kort historik

Vi meddelade vår vision för[StarkNet](https://starkware.co/product/starknet/)i början av året: att få massiv skalbarhet till Ethereum samtidigt som L1 säkerhet, tillståndsfria interaktioner och decentralisering.\
Vi släppte**[StarkNet Alpha](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)**på ett offentligt testnät i juni. Denna version stöds fullt behörighetslös allmänna beräkning smarta kontrakt. Vi har sedan uppgraderat den två gånger: först till**Alpha 1**— tillhandahålla[L1<>L2 meddelanden och on-chain data](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), och sedan till**Alpha 2**- stödja[kompositbarhet](https://medium.com/starkware/starknet-alpha-2-4aa116f0ecfc).

StarkNet Alpha 2 stöder nu kompositabla smarta kontrakt för allmän beräkning i ett Ethereum-liknande tillstånd, med förmåga för L1 och L2 kontrakt att interagera med varandra. Läs mer[här](https://www.cairo-lang.org/docs/hello_starknet/index.html).

### Vad är StarkNet Alpha på Mainnet?

StarkNet Alpha på Mainnet kommer att stödja liknande funktioner som för närvarande finns på Goerli offentliga testnet.

#### **Vad man kan förvänta sig**

Eftersom StarkNet fortfarande är under utveckling vill vi införa kapacitet på ett stegvist sätt och se till att utvecklarförväntningarna uppfylls i varje enskilt steg. Två särskilt viktiga aspekter som vi vill betona är:

* **Tillåten smart kontraktsanpassning**: Vi kommer att följa den förnuftiga spelbok som införts av våra optimistiska Rollup kollegor: börja med*tillåten*kontraktsanpassad distribution. Protokollet som anger hur man begär att ditt smarta kontrakt inkluderas i denna första vitlista kommer att publiceras under de kommande veckorna.
* **Ingen garanti för bakåtkompatibilitet**: vi förväntar oss den framtida övergången från StarkNet Alpha till StarkNet Beta att inkludera regenesis av staten. Nätverket kommer att börja från block 0, och applikationer måste omplacera sina kontrakt. Dessutom bör utvecklare och användare notera att den förväntade StarkNet Beta kanske inte är bakåtkompatibel med StarkNet Alpha, e. . utvecklare kan behöva ändra sina kontrakt. Självklart kommer vi att försöka möjliggöra en enkel övergång för tillämpningar, med minimala ändringar som krävs.

#### Ytterligare funktioner på nära sikt

Som en del av övergången av StarkNet Alpha från testnet till Mainnet kommer vi:

1. Lägg till konstruktörer till kontrakt.
2. Förbättra testramen.
3. För block och transaktioner, gå från att använda ett ID till att använda en hash.

Vi planerar att fortsätta utbyggnaden av nya funktioner med en regelbunden kadens, precis som vi har gjort på det offentliga testnätet. På kort sikt planerar vi följande uppgraderingar:

1. Kontrakt och Token Contracts — öppna vägen för DeFi-applikationer för att interagera med StarkNet på det sätt de är bekanta med.
2. Förbättrad Kontrakt Funktionalitet — stödjande kontrakt uppgraderbarhet och händelser.
3. Warp: Solidity-to-Cairo kompilatorn som utvecklats av Nederländerna kommer att möjliggöra en smidig övergång från Solidity-smarta kontrakt till StarkNet smarta kontrakt.
4. Ethereum Signatures: inbyggt stöd för ECDSA över secp256k1 kommer att möjliggöra enklare integration med befintliga plånböcker.
5. StarkNet Full Node: en Full Node gör det möjligt för användare att delta i nätverket med hårdvarukrav i nivå med kraven på en Ethereum Full Node.

#### Avgiftsmekanism

Avgiftsmekanismen kommer att aktiveras så snart kontoavtal och tokenkontrakt läggs till i StarkNet Alpha.

Alla transaktioner som lämnas in till StarkNet kommer att medföra en avgift som är utformad för att täcka L1- och off-kedjekostnader. Avgiften kommer initialt att debiteras i ETH. Kostnaden för en enda transaktion kommer att minska när StarkNet ökar sin skala (vilket är fallet för alla befintliga STARK-baserade system). När vi tillverkar de ursprungliga avgiftsmekanismerna, vi föredrar enkelhet framför exakt prissättning transaktioner enligt de resurser som de konsumerar. Förvänta dig att denna mekanism ska förfinas och förbättras över tid.

Med sikte på att göra StarkNet till ett hållbart nätverk och stimulera dess operatörer och utvecklare, en del av intäkterna från avgifterna kommer att distribueras till applikationsutvecklare och StarkNet kärnutvecklare.

#### Säkerhet

StarkNet Alphas säkerhetsmodell på Mainnet kommer att följa den aktuella modellen på testnätet:

* Varje statlig övergång backas upp av en STARK bevis, således säkerställs att vara giltig.
* Alla statliga data kommer att publiceras on-chain så staten kommer att vara fullt konstruerbar från L1.
* Det kommer att finnas en enda sequencer.
* Nätverket kommer att vara uppgraderingsbart utan tidsfördröjningar.

### StarkNet ekosystem växer

Att öppna StarkNet till världen lockade en massiv våg av utvecklare som var intresserade av att lära sig Kairo och utvecklas över StarkNet. De gav ovärderlig feedback, och det var en sann glädje att se levande diskussioner på StarkNet[Discord](https://discord.gg/uJ9HZTUk2Y).

Dessutom utvecklas StarkNet inte bara av StarkWare-teamet utan också av några av de starkaste lagen i blockkedje-ekosystemet:

* Nederländerna arbetar med två projekt:

1. **[Varp](https://github.com/NethermindEth/warp)**: en soliditet till Kairo kompilator

2. **[Voyager](https://voyager.online/)**: en StarkNet block explorer

* Open Zeppelin arbetar på en[Standard Contracts](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)implementation för StarkNet och började också arbeta på en utvecklares miljö:[Nilen](https://github.com/martriay/nile).
* ShardLabs arbetar på en[StarkNet HardHat plugin](https://github.com/Shard-Labs/starknet-hardhat-plugin)och på ett bättre testramverk.
* Erigon teamet arbetar på att utöka sin Ethereum Full Node för att stödja StarkNet (kodame: Fermion). De arbetar tillsammans med oss med att utforma kärnmekanismerna i StarkNet.
* Equilibrium arbetar på en StarkNet Full Node implementation i Rust,
* Kairo revisionstjänster: Under de kommande månaderna, ABDK, ConsenSys Diligence, Peckshield och Trail of Bits kommer att genomföra Kairo revisioner.
* StarkNet revisioner: vi började med att granska nätverkets grundvalar:

1. **CryptoExperts**kommer att genomföra en revision av Cairo Solidity Verifier.
2. Ett formellt**LEAN-bevis**av Kairos specifikationer slutfördes nyligen och publicerades som en[uppsats](https://arxiv.org/abs/2109.14534)och en GitHub[repo](https://github.com/starkware-libs/formal-proofs).

Förvänta dig att många fler intressanta samarbeten kommer att publiceras under de kommande månaderna!

### STARKs skalar idag

Vi närmar oss lanseringen av StarkNet Alpha med tillförsikt, som StarkEx, vår fristående skalning SaaS, har visat hur STARKs kan skala Ethereum-applikationer. Vi lanserade StarkEx för[dYdX](https://dydx.exchange/)(eviga kontrakt),[DeversiFi](https://www.deversifi.com/)(punkthandel och betalningar), såväl som för[oföränderliga](https://www.immutable.com/)och[Sorare](https://sorare.com/)(NFT minting och handel). Vi såg deras gas/tx kostnader sänkas med 100X–200X, till ca 650 gas/tx i Validium (off-chain data), och 1100 gas/tx för en ZK-Rollup.

Hittills har StarkEx avvecklat $ 80B i affärer och över 27M transaktioner, långt förmörkelse någon annan L2 lösning - och alla av dem tillsammans.

### Agera nu

Det har aldrig funnits en bättre tid att gå med i den växande StarkNet ekosystem genom att bygga antingen din nästa dApp eller användbara utvecklarverktyg.

Vi bjuder in dig till:

1. Gå med i[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y), där du kan träffa och engagera StarkNet-communityn.
2. [Börja lära dig](https://www.cairo-lang.org/docs/hello_starknet/index.html)hur du skriver StarkNet smarta kontrakt.
3. [DM oss](https://twitter.com/StarkWareLtd)- vårt team är angelägna om att hjälpa dina idéer och initiativ komma till liv.

**Uppdatering (nov 2021):**StarkNet Alpha live på Ethereum Mainnet