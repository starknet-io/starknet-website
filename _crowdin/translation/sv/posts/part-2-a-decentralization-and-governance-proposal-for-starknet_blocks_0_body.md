Vårt tidigare[inlägg](https://medium.com/@starkware/part-1-starknet-sovereignty-a-decentralization-proposal-bca3e98a01ef)förklarade vad StarkNet är, hur det successivt decentraliseras, och gav en sammanfattning av dess två decentraliseringsmekanismer. Det här inlägget diskuterar StarkNet decentraliseringsprocess, rollen som StarkNet Foundation, och behovet av en ny inhemsk token för StarkNet. Slutligen diskuterar det ytterligare överväganden för Starknets styrning på vägen.

### Principer för decentralisering

[STARK](https://eprint.iacr.org/2018/046.pdf)tekniken är mogen och säker, men hittills har det implementerats och utnyttjats främst som en centraliserad tjänst på Ethereum ([StarkEx](https://starkware.co/starkex/)), och en Alphaversion av en decentraliserad tjänst ([StarkNet](https://starkware.co/starknet/)). StarkNet bör vara tillgänglig som ett verkligt tillstånd för allmännyttiga varor, som Ethereum, eller Internet. Så vi åtar oss att främja Starknets decentralisering och följande fyra principer för att vägleda förändringen:

**Liveness.**StarkNet kommer inte att förlita sig på ett enda företag som dess operatör. Företag kan upphöra att existera, eller kan besluta sig för att sluta betjäna nätverket. Efter decentralisering kommer sådana scenarier inte att få ner StarkNet.

**Censureringsmotstånd.**Ett enda företag kan teoretiskt bestämma eller tvingas censurera särskilda transaktioner och smarta kontrakt samtidigt som de uppfyller andra. StarkNet kommer att använda en decentraliserad modell för att skydda mot ett sådant scenario.

**Transparens.**Uppgraderingar och underhåll av programvara är en oundviklig del av alla decentraliserade tjänster. Sådana åtgärder måste diskuteras öppet, så att samhället informeras och kontrolleras av tekniken. Den större gemenskapen av StarkNet-användare, operatörer och utvecklare måste arbeta kollektivt för att bestämma uppgraderingar och underhåll via en transparent, rättvis, deltagande och inkluderande process.

**Kreativitet.**StarkNet måste tillåta alla utvecklare att delta i byggandet av sin kärninfrastruktur och applikationer, för att förhindra monopolisering och för att öka kreativ och socialt fördelaktig användning av blockkedjor i skala.

Decentralisering är ett svårt problem, inte att närma sig på ett hastat sätt. Starknets förslag om styrning, som delas här, kommer sannolikt att utvecklas och förändras över tid. Det som följer är bara dess första upprepning.

### Stiftelse

Stiftelsen kommer att vara en uppdragsdriven ideell organisation och kommer att beviljas StarkNet Tokens (se[nästa inlägg](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6)). Vi räknar med att stiftelsens uppdrag kommer att vara att behålla StarkNet som en offentlig nyttighet. StarkNet är tillåten infrastruktur som ska vara tillgänglig för alla. Den måste upprätthållas väl för att vara säker och effektiv för allmänhetens bruk. Den får inte heller diskriminera sina användare, operatörer och utvecklare. Stiftelsen kommer att ägna sig åt att främja de decentraliseringsmål som beskrivs ovan: livlighet, censurmotstånd, öppenhet och kreativitet.

Starknets livskraft och censur-motstånd uppnås bäst genom tillåten och decentraliserad konsensus genom ett proof-of-stake ledare val för sekvensering och bevisa STARK-komprimerade transaktioner. Medan den mekanismen är automatiserad, den förlitar sig på väl fungerande protokoll programvara som körs av noder på nätverket samt giltigheten och pågående livlighet i den underliggande Ethereum blockchain. Därför kommer stiftelsen också att fungera som en resurs för den pågående utvecklingen, dokumentationen, och publicering av denna protokollprogramvara, särskilt eftersom det rör bug-fixar och effektiviseringar.

Bortom rutinmässigt underhåll räknar vi med livfulla debatter inom gemenskapen om funktionsförändringar eller andra mer grundläggande uppgraderingar till protokollet. Detta är oundvikligt i tillstånd utan system, som framgår historiskt av Bitcoins blockstorlek debatt, Ethereum proof-of-stake sammanslagning, och många andra exempel i kryptovalutekosystemet. Dessa programvaruutvecklingsbeslut är mer än bara objektiva matematik och effektivitetsvinster, utan handlar snarare om subjektiva värdebedömningar och funktionsavdelningar. I många blockchainsamhällen fattas dessa beslut informellt utan några tydliga debattregler eller en process för beslutsfattande. Även ett icke-beslut är ett beslut som gynnar status quo. För att undvika dessa frågor kommer stiftelsens uppdrag även att omfatta utveckling, testning och genomförande av samhälleliga beslutsprocesser för att lösa viktiga tekniska frågor. Denna mekanism kommer att vara central för överläggningar om protokolluppdateringar, tvistlösning och finansiering av offentliga nyttigheter. Stiftelsen kommer att främja öppenheten genom att dela ut den information som behövs för att fatta dessa beslut, och kommer att upprätthålla ett arkiv av sådan information för framtida referens.

### Varför token?

StarkNet var alltid tänkt som ett protokoll som drivs av gemenskapen, Ändå har det inte funnits något tydligt sätt att definiera vilka som exakt ingår i denna gemenskap. *Tecken kommer att göra det möjligt för anhängare av samhället som utför arbete som bidragit till framgången för ekosystemet att spela en roll i styrningen av detta ekosystem.*

Dessutom är en rättvis, öppen och censur resistent tjänst endast möjlig om flera parter dyker upp för att konkurrera om att utföra arbete som driver den decentraliserade tjänsten, och detta kan endast garanteras om dessa arbetstagare kompenseras för sin roll som operatörer av nätet.

Därför, inklusive polletter som en del av en nätverksteknik som StarkNet är nödvändigt. Och även om motstånd mot betalning censur kan uppnås genom att använda en befintlig icke-infödd token, till exempel Bitcoin eller Ether (ETH), Vi anser att en sådan strategi skulle misslyckas med tiden för att ge användarna av nätverket en distinkt gemenskap och en röst i beslut.

En inhemsk token som belönar medlemmar i samhället som utvecklar nätverket kommer att främja ekosystemet i en grad som användning av en icke-infödda token inte. Dessutom, om tecknet är icke-infödda, ekonomiska chocker från beslut som fattas i andra ekosystem kan påverka StarkNet tjänst och dess användare och leverantörer.

### Vad kommer token att användas för?

Symbolen kommer att vara mekanismen för drift av nätverket (avgifter), upprätthålla och säkra nätverket (konsensus delaktighet), och besluta om dess värderingar och strategiska mål (styrning).

**Transaktionsavgifter:**För närvarande betalas avgifter i StarkNet i Ether (ETH). Men senare förväntar vi oss avgifter kommer att betalas uteslutande med infödda StarkNet Token. För att stödja god användarupplevelse kommer automatiserade och decentraliserade on-chain mekanismer att tillåta användare att betala avgifter i ETH.

**Staking:**Vissa tjänster som är kritiska för StarkNet livlighet och säkerhet kan kräva insatser av StarkNet Tokens. Dessa tjänster kan omfatta sekvensering, nå tillfällig L2-konsensus innan L1-finaliteten nås, STARK-proving tjänster och tillgång till data, för att nämna några exempel. Vi förväntar oss att dessa tjänster kommer att decentraliseras 2023.

**Styrning:**Förslag för att förbättra StarkNet kommer att kräva en minimal tröskel för symboliskt stöd, för att definieras senare. Röstning, antingen direkt eller via delegation, kommer att krävas för alla ändringar i protokollet som är avgörande för Starknets livlighet, säkerhet och underhåll. Till exempel, alla större uppdateringar av StarkNet operativsystem kommer att kräva godkännande av token innehavare.

### Slutför reflektioner om styrning

Decentraliserade styrningsmekanismer är fortfarande i sin linda och inget projekt i detta område har försett oss med en övertygande modell för emulering. Är regelbunden och direkt röstning av alla symboliska innehavare den bästa vägen? Det är relativt enkelt att utforma detta som en teknisk mekanism, men det kan vara otympligt och kan orättvist privilegiera innehavarna av ett stort antal tokens, snarare än personer som aktivt använder nätverket.

När man överväger det bästa tillvägagångssättet, Vi föreslår att överväga kontroller och balans mellan flera separata strukturer som härleder deras auktoritet från gemenskapen av StarkNet Token innehavare.

Vi rekommenderar också att StarkNet Token innehavare använder sig av kärnutvecklarnas kompetens. I alla blockkedje-ekosystem, kärnutvecklare spelar en central roll för att säkra, upprätthålla och främja den underliggande tekniken. Därför är det värt att överväga att definiera en formell roll för dem inom styrningsprocessen.

Den[tredje inlägget](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6)i denna serie beskriver utformningen av StarkNet Token: den viktigaste token design överväganden, och de olika faserna av token fördelning.