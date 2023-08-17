#### **TL;DR**

Vi bygger StarkNet i fyra steg:

* Steg 0 — Stiftelser (klara*)
* Steg I — Planets: Rollups med enkelappar
* Steg II — Konstellationer: Multi-App Rollups
* Steg III - Universum: En Decentraliserad Rollup

Vi räknar med att ha Steg I utplacerad inom några korta månader, och vara på god väg till steg II & III i slutet av 2021.

### **Introduktion**

StarkWare bygger StarkNet, en decentraliserad, tillståndsfri och censur-resistent STARK-driven L2 ZK-Rollup som stöder generell beräkning över Ethereum. Den är baserad på Turing-Complete[Kairo språk](https://www.cairo-lang.org/).

Utvecklare, användare och StarkNet noder kommer att kunna göra allt man kan förvänta sig av en tillåten L2 Rollup: Utvecklare kan bygga applikationer som implementerar sin egen affärslogik och distribuera dem på StarkNet. Användare kan skicka transaktioner till StarkNet för att genomföras, precis som de interagerar med Ethereum idag. StarkNet noder och deltagare kommer att kryptoekonomiskt stimuleras för att säkerställa att nätverket fungerar effektivt och rättvist.

Alla StarkNet transaktioner kommer periodvis att satsas och deras giltighet kommer att bevisas i ett STARK bevis, som ska verifieras på Ethereum. Som beräkningsarbetet som krävs för att verifiera STARK korrekturer är exponentiellt liten jämfört med den bevisade beräkningen, kommer StarkNet skala Ethereum av storleksordningar.

Eftersom alla StarkNet tillstånd övergångar kommer att STARK-bevisas, kommer endast giltiga sådana accepteras på Ethereum. Alla data som krävs för att rekonstruera hela StarkNet staten kommer att publiceras on-chain. Vem som helst kommer att kunna köra sin egen StarkNet nod. Dessa egenskaper kommer att göra StarkNet så säker och otillåten som Ethereum.

Vi har varit på det i tre år, och har redan uppnått några anmärkningsvärda milstolpar när det gäller att förvandla “Moon Math” till produktionsklass och effektiv programvara som körs på Ethereum. StarkWares sätt att göra saker är att ta itu med de hårda problemen först, bygga kärntekniken, och sedan släppa den till produktion i bitvis mode. Vi kommer att fortsätta att bygga på detta sätt när vi slutför Starknet.

![](/assets/ontheroad_02.png)

**Steg 0 - Stiftelser**

StarkWare har färdigställt en del viktiga fundament för StarkNet.

#### **Cairo**

[Kairo](https://twitter.com/StarkWareLtd/status/1300353049836376066?s=20)är vårt Turing-Complete High-Level Language & ramverk för att producera STARK bevis för allmän beräkning. Istället för handgjorda komplexa "kretsar" eller AIR, en applikationsutvecklare kan använda Kairo för att definiera någon affärslogik, har det bevisat off-chain, och verifieras on-chain. Kairo är[i produktion på Mainnet](https://twitter.com/StarkWareLtd/status/1320695603492507648?s=20), och är också[tillgänglig för utvecklare](http://cairo-lang.org/).

Om ett par veckor kommer vi att lansera på en offentlig Ethereum testnet en Alpha version av Cairos Generic Proof Service (GPS). *Detta kommer att göra det möjligt för utvecklare att bygga sina egna program med hjälp av Kairo, genomföra vilken affärslogik de vill. De kommer att skicka sin Kairo kod till GPS som ska bevisas, och sedan verifieras on-chain.*

GPS möjliggör ett enda bevis för att hävda integriteten i utförandet av helt separata och oberoende applikationer, därmed ger dessa tillämpningar möjlighet att amortera gaskostnaderna för verifiering av bevis bland dem.

Kairo och GPS är grunden för StarkNet — vårt beslut att externalisera båda utvecklarna ger dem tidig exponering för denna teknik, inte bara så att de kan börja bygga vidare på det, men också så att de kan påverka StarkNets evolution.

Vi ska fortsätta att utveckla Kairo utifrån utvecklarsamhällets behov och återkoppling. Vi ska förbättra detta språk med nya funktioner, syntax och inbyggda funktioner som förbättrar dess användbarhet, och vi kommer att fortsätta att utveckla och förbättra Kairo verktyg: kompilatorer, tracer/debugger, och integrationer till gemensamma IDE.

StarkNet kommer att få Kairo att köra under huvan.

#### **STARK Software Stack**

StarkWare har utvecklat det mest kraftfulla systemet i ekosystemet, och det har varit[live på Mainnet](https://medium.com/starkware/starks-over-mainnet-b83e63db04c0)i månader. StarkWare har också utvecklat[ethSTARK](https://twitter.com/StarkWareLtd/status/1264911004099543040?s=20), vår open-source prover, som är 20X snabbare än något annat ord; den erbjuder både[nollkunskap och post-quantum-säkra signaturer](https://twitter.com/StarkWareLabs/status/1331930111227080709).

Vår skalning*mätningar*– inte extrapoleringar eller löften – inkluderar behandling av 300K transaktioner i ett enda bevis på Mainnet, uppnå[världsrekordet i Rollup genomströmning: 3K tps](https://twitter.com/StarkWareLtd/status/1287770381525422082?s=20). I processen har vi uppnått världsrekord för Rollup gaseffektivitet: 315 gas/tx, storleksordningar billigare än transaktioner på Ethereum L1.

Denna teknik kommer att vara hörnstenen i det decentraliserade provskiktet i StarkNet, och därmed kommer vi att släppa ytterligare och förbättrade bevis som en del av Starknets utveckling (mer om det i en kommande blogginlägg).

#### **StarkEx**

StarkEx är vår L2 skalbarhetsmotor. Det har tjänat[DeversiFi](https://twitter.com/deversifi)kunder på Mainnet sedan juni 2020. Det kommer att driva både[dYdX](https://twitter.com/dydxprotocol)och[oföränderliga X](https://twitter.com/Immutable)med start om några korta veckor. StarkEx kan hantera komplex handel logik (spot trading, derivat, NFTs) samt betalningar.

Att utveckla StarkEx var vårt sätt att dogfooding vår verktygskedja och testa den mot verkliga behov. Det finns inget som kräver av faktiska applikationer och levande användare för att hjälpa verktyg mogna och utvecklas. Det hjälper oss också att förstå vilka element som behöver åtgärdas för att bättre tjäna ekosystemet — till exempel integrationer med plånböcker och block Explorers.

StarkEx är ett levande exempel på möjligheten att skala applikationer med hjälp av en STARK-baserad ZK-Rollup, och är den första applikationen i produktion på Mainnet skriven i Kairo. Som sådan, kommer det också att vara en av de program som körs på StarkNet.

![](/assets/ontheroad_03.png)

### **Vägen framåt**

#### **Steg I — Planets: Rollups med enkelappar**

Detta steg gör det möjligt för utvecklare att bygga och distribuera sina egna skalbara applikationer på StarkNet.

Vid denna punkt, kommer varje StarkNet instans att kunna köra en enda applikation. Olika instanser kan köra olika applikationer.\
StarkNet ramverket kommer att innehålla följande:

* Mekanismer som behövs för att generera STARK bevis för godtycklig Kairo logik, och sedan lämna in och verifiera dem på Ethereum.
* Interaktioner med L1 Ethereum: insättningar och uttag av L1-tokens, publicering av on-chain data, Escape Mechanisms skyddar StarkNet användare från skadliga StarkNet operatörer, etc.
* Hantering av L2-användarsaldon och av programmets lagring och minne.

Utvecklare kommer att kunna fokusera enbart på att bygga sin applikation affärslogik, och sedan flytta in i produktionen: distribuera och köra den i skala på StarkNet.

Vad som gör det möjligt för oss att bygga en generell beräkning skalbar ZK-Rollup är kombinationen av:

* Kairo, som är ett allmänt syfte Turing-komplett programmeringsspråk
* Vår starka STARK stack (prover och verifierare), som gör det möjligt att bunta ihop enorma beräkningar till ett enda bevis

#### **Steg II — Konstellationer: Multi-App Rollups**

Nästa steg kommer att stödja flera program som körs på samma StarkNet instans och tillgång till samma globala L2-tillstånd. Detta kommer att möjliggöra driftskompatibilitet mellan olika tillämpningar samt minskade gaskostnader på grund av förbättrade stordriftsfördelar.

Kairo, den kraftfulla STARK stack och GPS förstärker StarkNet’ konkurrensfördel i att stödja en multi-app Rollup.

I detta skede, StarkNet kommer att vara ett fullt fungerande ramverk för att köra*flera*applikationer med någon godtycklig affärslogik ovanpå Ethereum, med varje instans som drivs av en enda operatör.

En operatör kan nu snurra upp en StarkNet nod, och applikationsutvecklare kan distribuera sina kontrakt på den. Ur användarens perspektiv ser nu StarkNet ut och känns som Ethereum, med en högre skala.

#### **Steg III — Universum: Decentraliserad rollup**

Det sista steget i utvecklingen av StarkNet decentraliserar sin verksamhet.

Intriguing R&D-frågor vi nu tar itu med som påverkar detta steg inkluderar (i) att använda ZK-Rollups för att förbättra konsensusnår mekanismer, och (ii) utforma kryptoekonomiska mekanismer för att stimulera de decentraliserade StarkNet bidragsgivarna och operatörer (transaktionssekvenser, talesätt, etc. att fungera effektivt, rättvist och säkert.

### **Slutsats**

StarkWare bygger StarkNet, en decentraliserad tillstånd utan STARK-drivna L2 ZK-Rollup över Ethereum, som stöder allmän beräkning baserat på Kairo språk.

StarkNet kommer att göra det möjligt för applikationer att skala utan att kompromissa med säkerhet, användare att betala rimliga transaktionsavgifter, och hela ekosystemet för att växa avsevärt och uppfylla sitt löfte.

Vi bjuder gärna in utvecklargruppen att[gå med oss](https://twitter.com/StarkWareLtd)på denna resa.

**Uppdatering (nov 2021):**StarkNet Alpha live på Ethereum Mainnet