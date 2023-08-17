### TL;DR

L2-infödda dApps kan nu blomstra utan traditionella gasrestriktioner för L1

### Introduktion

dApp-utvecklare har alltid stått inför allvarliga begränsningar på grund av Ethereums (L1) block gas gräns. Det begränsar inte bara*hur*dessa dApps fungerar utan också*vad*dessa dApps kan göra.

Layer 2 (L2) erbjuder dApp-utvecklare ett beräkningsbart grönområde, fritt från det här glastaket. Vi tror att de allra flesta dApps kommer att vara L2-infödda inom ett par år: de kommer att ha byggts från grunden på L2 för att dra nytta av denna beräkningsgrad av frihet.

### L1 gas gränser form L1-infödda dApps

*Låt oss överväga två exempel på populära dApps vars design är djupt formad av gasbegränsningar i L1: AMMs och DEX-aggregatorer.*

En automatisk Market Maker (AMM) är i huvudsak en låg gas approximation av en order-bok-baserat utbyte. Istället för att låta användare att placera och ta bort gränser, stoppa förlust, eller en mängd andra ordningstyper, L1 AMMs tillåter bara enkla swaps med en central underliggande likviditetspool - för att tillgodose den intensiva beräkningskostnaden för L1.

DEX-aggregatorer behöver helst tillgång till alla möjliga likviditetspooler, även den minsta likviditetspoolen, för att utnyttja de bästa priserna för användarna. Men på grund av kostnaden för att fråga många olika pooler, är det helt enkelt inte värt att transaktionera över L1. Det är motiverat att få tillgång till pooler och betala de tillhörande transaktionsavgifterna endast när likviditetspooler har tillräckligt djup likviditet. I en liknande anda, likvidationer i utlåning/upplåning och andra säkerheter baserade dApps kan vara mycket mer exakta om skillnaden mellan likvidationsrabatt och transaktionsavgift var mycket mindre.

Den begränsade funktionalitet och design av många L1 dApps direkt resultat från utvecklare optimera sin kod för att följa Ethereums gasbegränsningar. Varför säger vi Ethereum, ni kanske frågar? Kan inte soliditetskoden köras på många L1s och även några L2s? Faktum är att Ethereum är den dyraste (och därmed säkra) miljön. Soliditet dApps är utformade för "den dyraste länken", dvs Ethereum. Därför drar de inte nytta av den datorfördel som erbjuds av billigare runtime miljöer. För att låsa upp funktionaliteten genom att designa en dApp för den dyraste körtiden måste dApp's kod anpassas.

### Ökningen av L2-infödda dApps

Giltighet Rollups (alias ZK-Rollups) möjliggör extremt billig beräkning. Till skillnad från alla andra skalningslösningar - L2 beräkningen kan växa exponentiellt med bara en liten inverkan på den kedje-verifieringsgaskostnaden. Dessutom, en giltighet Rollup processer ingångar till beräkningar — “bevittna data” — utan att konsumera ytterligare L1-resurser, vilket möjliggör beräkningar med många ingångar.

Kodning dApps inbyggt på L2 i**[Kairo](https://www.cairo-lang.org/)**(Turing-komplett språk för att skala dApps via STARK-bevis) låser upp ett stort antal möjligheter för utvecklare. Det gör det möjligt för dem att använda betydande mängder av data — både beräkningar och bevittna data — att de inte kunde använda innan.

Låt oss utforska sådana L2-infödda dApps och deras nya, berikade funktioner.

#### DeFi

Innan starten till StarkEx fungerade StarkWares Giltighet Rollup, dYdX som en L1 dApp på Ethereum. Den erbjöd sina användare hävstång av x10 på syntetiska tillgångar och stödda positioner med endast en syntetisk tillgång. Att bygga om dYdX i Kairo som en L2-inbyggd dApp ger en dramatiskt mer skalbar, billigare och effektiv DeFi-plattform:

* Oracle prisuppdateringar: Sådana uppdateringar inkluderar vanligtvis dussintals priser och signaturer från olika källor för att beräkna en median. En validitet Rollup ger exponentiell skalning av priset orakel logik (signatur verifiering och beräkning av medianpriset) — utan att rapportera att bevittna data till L1. Jämför detta med dYdX L1-implementering, där varje pris orakel uppdatering kostar ca 300K gas och var, därför, begränsad i sin frekvens och storleken på den uppsättning prisreportrar.
* Leverage: Ett exakt prisflöde tillåter dYdX att uppskatta risken för en position i realtid och erbjuda högre hävstång för användarna. Tack vare de förbättrade orakelprisuppdateringarna ökade dYdX hävstångseffekten från x10 på L1 till x25 på L2.
* Gränssnitt: Med dYdX på L2 kan marknadens tillverkare lägga långa / korta beställningar på många tillgångar med samma säkerhet. Den genomsnittliga uppgörelsen på dYdX L2 innebär positioner med mer än 10 olika syntetiska tillgångar! Som jämförelse, med denna tvärmarginalförmåga på L1 skulle ha mer än fördubblat kostnaden för on-chain gas.

#### Spel och generativ konst

Den aktuella grödan av L1-infödda spel lagrar vanligtvis speltillgångar på L1 samtidigt som den implementerar hela spellogiken i en betrodd off-kedje-applikation. Detta mönster är ett direkt resultat av L1:s gasbegränsningar. Tack vare billig beräkning på L2, utvecklare av L2-infödda spel dApps kan nu implementera spellogiken i ett smart kontrakt och manipulera speltillgångarna på ett pålitligt sätt. snarare än att bara lagra dem. Att föra in spellogiken i världen av pålitliga beräkningar är ett viktigt steg mot en mycket rikare värld av blockchain-baserade spel. L2-infödda spel utvecklas redan på StarkNet, StarkWares behörighetslösa nätverk (t.ex.[Dope Wars](https://github.com/dopedao/RYO)och[Influence](https://medium.com/influenceth/influence-to-launch-on-starknet-afd3c26ea25a)).

Men bra, hur komplex kan en blockchain-baserade spel verkligen vara? Till exempel verkar det omöjligt att hantera grafik direkt on-chain —[eller är det](https://twitter.com/guiltygyoza/status/1449637155001798657)? Att lösa differentialekvationer och simulera planarrörelse i ett smart kontrakt är ett viktigt steg mot vad som i framtiden kan vara en blockkedjefysikmotor. Konsekvenserna är enorma. Föreställ dig ett konkurrenskraftigt multiplayer spel som Counter-Strike. Om man kunde simulera spelet logik on-chain, många fruktade hacks skulle bli ett minne blott - spelare kunde njuta av ett bevisligen rättvist spel.

Generative Art använder beräkning, slumpmässighet och andra data för att skapa blockkedje-baserad konst. Ju mer komplex logik och beräkning en konstnär kan använda på ett trovärdigt sätt, desto fler alternativ finns för att generera unika singulära konstverk. [WhaleStreet DAO](https://blog.whalestreet.xyz/whalestreet-dao-to-launch-gen-art-ecosystem-on-ethereum-with-starknet/)lanserar en av de första Gen Art projekt på StarkNet, dra nytta av StarkNet: s obegränsade beräkningsresurser.

### Vad händer härnäst?

Giltighet Rollups - och Cairo-drivna StarkEx och StarkNet, i synnerhet — ge en miljö där man kan utveckla och driva dApps som förbrukar en hel del beräkningar eller bevittna data. Med alla fördelar med distribuerad huvudbok teknik, förutspår vi en oerhört spännande framtid för L2-infödda dApps.

Vad kan*du*skapa med allmän beräkning som stöds av kompositör, pålitlighet och decentralisering?