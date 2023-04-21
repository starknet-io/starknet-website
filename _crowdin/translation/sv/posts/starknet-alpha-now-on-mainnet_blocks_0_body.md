### TL;DR

* Alpha lever på Mainnet
* Den stöder allmän beräkning och kompositabilitet
* Snabbväxande samhälle, utveckling av verktyg och applikationer
* Ytterligare funktioner som ska rullas ut på löpande basis under de kommande veckorna
* Ansvarsfriskrivning: detta är en Alpha-version (läs det finstilta nedan)

### Introduktion

StarkNet Alpha lanserar idag på Ethereum Mainnet!

StarkNet är ett tillståndsfritt decentraliserat rollup som fungerar som ett L2-nätverk över Ethereum. StarkNet tillåter alla dApp att uppnå obegränsad skala för sin beräkning, utan att äventyra Ethereums kompositbarhet och säkerhet, tack vare sitt beroende av det säkraste och mest skalbara kryptografiska säkra systemet —[STARK](https://starkware.co/stark/). StarkNet är byggt på[Kairo](https://starkware.co/cairo/)programmeringsspråk, den första produktionsklass Turing komplett von-Neumann verifier på Ethereum. Både Kairo och STARK har utvecklats internt av StarkWare och har drivit alla våra produktionsprogram som har bosatt sig över 50 miljoner tx och $ 250B sedan sommaren 2020.

Bland annat möjliggör StarkNet Alpha generella kalkyleringskontrakt som stöder kompositabilitet, både med andra StarkNet-kontrakt och via L1<>L2-meddelanden med L1-kontrakt. StarkNet Alpha fungerar i ett Rollup läge, vilket innebär att alla statliga diff-data skickas on-chain.

Tillbaka i januari delade vi StarkNet[färdplan](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880). I juni gick StarkNet Alpha live på ett offentligt testnät och har uppdaterats med nya funktioner på rullande basis. Vi är glada att vara före schemat, delvis tack vare vårt beroende av vår produktionsklass strid-härdad STARK/Kairo programvara stack.

### Hur ska du behandla StarkNet Alpha?

Först med stor omsorg, som ”Alpha”-etiketten finns där av en anledning. Räkna med förändringar, korrigeringar och förbättringar framöver. StarkNet Alpha har ännu inte granskats, och vi kan fördröja en sådan revision tills nätverket mognar lite mer (läs ansvarsfriskrivningen i slutet av detta inlägg för mer information).

Generellt följer vi den försiktiga och förnuftiga väg som fastställts av våra Optimistic Rollup kollegor, nämligen Arbitrum och optimism: lansera nätverket med en enda sequencer, och vitlista program för att säkerställa att deras utvecklare förstår de risker som är inblandade. Vi fortsätter att vara helt engagerade i en fullständig decentralisering av StarkNet.

Och hur ska du behandla StarkNet Alphas ekonomi? Alpha kommer att börja utan transaktionsavgifter. Nästa uppgradering, bara några veckor bort, kommer att införa en avgiftsmekanism — vi kommer att dela mer detaljer i en separat post.

### Börja bygga

Vi inbjuder dig att börja skriva dina egna ansökningar över StarkNet genom att antingen kontrollera (ny!) [webbplats](http://starknet.io/), eller hoppa direkt till[tutorial](https://starknet.io/docs/).

Om du är redo att distribuera, följ denna[onboarding process](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu); skapas för att säkerställa att alla utvecklare är väl medvetna om det preliminära tillståndet i systemet.

### Ekosystem

Under de senaste månaderna har vi sett en fantastisk tillväxt i StarkNet-gruppens storlek och aktivitet, som samlas på[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y). Dussintals utvecklare — team och individer — över blockkedjans ekosystem bidrar till denna ansträngning. (Se friskrivningen i slutet av detta inlägg)

#### Verktyg för utvecklare

* OpenZeppelin definierar standardkontrakten. Deras[repo](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)och[diskussioner](https://github.com/OpenZeppelin/cairo-contracts/discussions)är värda att följa
* [Warp](https://github.com/NethermindEth/warp)Solidity–>Kairo transpiler, utvecklad av Nederländerna
* Shard Labs’[HardHat plugin](https://github.com/Shard-Labs/starknet-hardhat-plugin)och[StarkNet Devnet](https://github.com/Shard-Labs/starknet-devnet)
* Argent utvecklar verktyg, inklusive sin gemensamma insats på StarkNet.js, tillsammans med[Sean Han](https://twitter.com/seanjameshan), dess skapare

#### Infrastruktur

**Blockera utforskaren**:

* [The Voyager](http://voyager.online/)project by Nethermind
* [Eth.tx](https://ethtx.info/)kommer att erbjuda support analys och en detaljerad bild av StarkNet transaktioner

**Fullständiga noder**: två ansträngningar på gång: en är Fermion-projektet som leds av Erigon, det andra är projektet[Pathfinder](https://github.com/eqlabs/pathfinder)som leds av Equilibrium

**Plånböcker**:

* [ArgentX](https://github.com/argentlabs/argent-x)är ett webbläsartillägg utvecklat av Argent, redan tillgängligt för devs
* Torus lösning för nyckelhantering är StarkNet redo
* Ledger utvecklar en inhemsk StarkNet app; att göras tillgänglig före årets slut

**Cairo Audits**: ConsenSys Diligence, Trail of Bits, Peckshield och ABDK genomför antingen Kairo revisioner redan, eller håller på att börja snart

**API Services**: efter att en StarkNet full nod är tillgänglig, API-tjänster kommer att erbjudas av Figment, Chainstack och Infura

**Indexerare**: Vi kommer att arbeta med att integrera TheGraph för att arbeta med StarkNet tillsammans med Bildteamet

### Vägen framåt

Under de kommande veckorna och månaderna kommer vi att uppgradera Alpha med följande möjligheter:

* Kontrakt uppgraderingsbarhet mekanism
* Avgiftsmekanism
* Händelser
* Tillägg av saknade syscalls (get_block_nummer, get_block_timestamp, med mera)
* Skelettversion av Volition
* Och mycket mer …

För att övervaka denna ansträngning fortlöpande, se funktionerna’[preliminär färdplan](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51).

Om du tittar längre ut fortsätter vi att investera kraftigt i aktiv forskning på flera fronter (kom med i[Shamans](https://community.starknet.io/)-insatsen):

* Decentralisering
* Skalning
* Tillgänglighet för data
* Behörighetslös stimulans

### Ring till åtgärd

* Börja skriva kontrakt på tillståndsfria StarkNet testnet på Goerli
* Gå med i[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)
* Gå med i community-samtal
* Delta i den första[StarkNet Ecosystem Summit](https://www.eventbrite.com/e/starknet-ecosystem-summit-2022-tickets-206671880157)(27 jan 28 2022, Stanford CA)
* Gå med i[StarkNet Shamans](https://community.starknet.io/)för en djupare dykning i forskningsutmaningar

### Ansvarsfriskrivning

***StarkNet Alpha är ett nytt och komplext system som inte har granskats fullt ut. Liksom alla komplexa programvarusystem, StarkNet systemet kan innehålla buggar som i extrema fall kan leda till en förlust av alla dina pengar. Så,***trampa försiktigt och akta dig!******

*StarkNet ekosystem är en stor och snabbt växande uppsättning oberoende team och individer, över vilka StarkWare inte har någon tillsyn och tar inget ansvar. Någon av de projekt som utvecklats av ekosystemmedlemmar kan innehålla buggar som i extrema fall kan leda till en förlust av alla dina medel. Dessutom, eftersom fler smarta kontrakt används, ökar potentialen för oavsiktliga skadliga buggar och även skadliga bedrägerier och mattavdrag. Så, behandla alla smarta kontrakt på StarkNet som du behandlar smarta kontrakt på Ethereum, och använd bara de som du har goda skäl att lita på som säkra.*