Blockkedjans skalbarhet har alltid varit ett upphettat ämne. Nästan varje blockchain-nätverk har ett stort antal transaktioner per sekund (TPS) som försäljningsställe. TPS är dock inte ett giltigt mått för att jämföra blockkedje-nätverk med — vilket gör det till en utmaning att utvärdera deras relativa prestanda. Dessutom kommer stora TPS-nummer oftast till en kostnad — vilket ställer frågan: gör dessa nätverk faktiskt skala, eller ökar de bara sin genomströmning?

Så, låt oss undersöka hur man definierar skalbarhet, vilka avvägningar görs för att uppnå det, och varför Validity Rollups är den ultimata skalbarhet lösning.

### Alla transaktioner är inte lika

För det första måste vi fastställa vårt påstående att den enkla och smidiga mätningen av TPS inte är ett korrekt mått på skalbarhet.

För att kompensera noder för att utföra transaktioner (och för att avskräcka användare från att spamma nätverket med onödig beräkning), blockchains debiterar en avgift proportionell mot den beräkningsbörda som påtvingas blockchain. I Ethereum mäts komplexiteten i beräkningsbördan i*gas.*Eftersom gas är ett mycket bekvämt mått på transaktionskomplexitet, termen kommer att användas i hela denna artikel för icke-Ethereum blockchains också, även om det är typiskt Ethereum-specifik.

Transaktionerna skiljer sig avsevärt i komplexitet och därmed i vilken grad gas de förbrukar. Bitcoin, pionjären för pålitliga peer-to-peer-transaktioner, stöder bara det rudimentära Bitcoin-skriptet. Dessa enkla överföringar från adress till adress använder lite gas. I kontrakt, smarta kontraktskedjor som Ethereum eller Solana stöder en virtuell maskin och Turing-kompletta programmeringsspråk som möjliggör mycket mer komplexa transaktioner. Därför kräver dApps som Uniswap mycket mer gas.

Det är därför det är meningslöst att jämföra TPS av olika blockkedjor. Vad vi istället bör jämföra är kapaciteten för beräkning – eller genomströmning.

Alla blockkedjor har en (variabel) blockstorlek och blocktid som avgör hur många*beräkningsenheter*kan bearbetas per block och hur*snabbt*ett nytt block kan läggas till. Tillsammans bestämmer dessa två variabler*genomströmningen*av en blockkedja.

### Vilka begränsningar skalbarhet?

Blockchains strävar efter att vara maximalt decentraliserade, inkluderande nätverk. För att uppnå detta måste två grundläggande egenskaper hållas i schack.

#### **1. Maskinvarukrav**

decentraliseringen av ett blockchain-nätverk bestäms av möjligheten för den svagaste noden i nätverket att verifiera blockkedjan och hålla dess tillstånd. Därför kostnaderna för att köra en nod (hårdvara, bandbredd, och lagring) bör hållas så lågt som möjligt för att så många individer som möjligt ska kunna bli tillåtna deltagare i det pålitliga nätverket.

#### 2**.**Tillväxt tillstånd

Statlig tillväxt hänvisar till hur snabbt blockchain växer. Ju mer genomströmning en blockchain gör det möjligt att hända per tidsenhet, desto snabbare växer blockkedjan. Fullständiga noder lagra nätverkets historik, och de måste kunna validera tillståndet i nätverket. Ethereums tillstånd lagras och refereras med hjälp av effektiva strukturer som träd. Allteftersom staten växer läggs nya blad och grenar till den, vilket gör det ännu mer komplext och tidskrävande att utföra vissa åtgärder. När kedjan växer i storlek, förvärrar den det värsta fallet utförande av noder, vilket leder till en ständigt växande tid att validera nya block. Med tiden ökar detta också den totala tiden det tar för en hel nod att synkronisera.

### Skadliga effekter av ökande genom hela

#### 1. Antal noder

Minimikraven för att köra en nod och nod räknas är:

* Bitcoin1: 350 GB hårddiskutrymme, 5 Mbit/s anslutning, 1 GB RAM, CPU >1 Ghz. **Antal noder: ~10,000**
* Ethereum2: 500GB+ SSD diskutrymme, 25 Mbit/s anslutning, 4–8GB RAM, CPU 2–4 kärnor. **Antal noder: ~6000**
* Solana3: 1.5TB+ SSD-diskutrymme, 300 Mbit/s anslutning, 128GB RAM-processor 12+ kärnor. **Antal noder: ~1,200**

Observera att ju större CPU, bandbredd och lagringskrav för noder som krävs för genomströmning av en blockkedja, färre noder på nätverket — vilket leder till svagare decentralisering och ett mindre inkluderande nätverk.

#### 2. Dags att synkronisera en hel nod

När du kör en nod för första gången, måste den synkroniseras till alla befintliga noder, nedladdning, och validera, tillståndet i nätverket hela vägen från uppkomsten blocket till spetsen av kedjan. Denna process bör vara så snabb och effektiv som möjligt för att tillåta någon att agera som en tillåten deltagare i protokollet.

Ta Jameson Lopps[2020 Bitcoin Node](https://blog.lopp.net/2020-bitcoin-node-performance-tests/)och[2021 Node Sync Tests](https://blog.lopp.net/2021-altcoin-node-sync-tests/)som en indikator, Tabell 1 jämför den tid det tar att synkronisera en hel nod av Bitcoin vs. Ethereum vs. Solana på en genomsnittlig konsumentdator.

![Tabell 1. Blockchain dataflöde och node-sync jämförelse](/assets/1_gmpi_1c9zipoc-znrh7b5q.png "Tabell 1. Blockchain dataflöde och node-sync jämförelse")

Tabell 1 visar att ökande genomströmning leder till längre synkroniseringstider eftersom mer och mer data behöver behandlas och lagras.

Medan förbättringar av nod programvara ständigt görs för att minska utmaningen i den växande blockchain (sänka diskavtryck, snabbare synkroniseringshastigheter, starkare krasch elasticitet, modularisering av vissa komponenter etc. , noderna uppenbarligen fortfarande inte kan hålla jämna steg med ökningar till genomströmning.

### Hur ska skalbarhet definieras?

Skalbarhet är den mest missrepresenterade termen i blockkedje-utrymmet. Samtidigt som ökad genomströmning är önskvärd, är det bara en del av pusslet.

***Skalbarhet**betyder**fler transaktioner**för**samma hårdvara**.*

Av den anledningen kan skalbarhet delas upp i två kategorier.

#### skalbarhet för sekvenser

Sekvensering beskriver handlingen att beställa och behandla transaktioner i ett nätverk. Som tidigare fastställts, någon blockkedja kunde trivialt öka sin genomströmning genom att höja blockstorlek och förkorta sin blocktid — fram till en punkt där den negativa effekten på dess decentralisering anses alltför betydande. Men, tweaking dessa enkla parametrar ger inte de nödvändiga förbättringar. Ethereums EVM kan, i teorin,[hantera upp till ~2,000 TPS](https://twitter.com/dankrad/status/1459607325854121989), vilket är otillräckligt för att tillhandahålla långsiktiga blockering utrymme efterfrågan. För att skala sekvensering gjorde Solana några imponerande innovationer: dra nytta av en parallelliserbar exekveringsmiljö och en smart konsensusmekanism, vilket möjliggör långt effektivare genomströmning. Men trots dess förbättringar är den varken tillräcklig eller skalbar. I takt med att Solana ökar genomströmningen ökar också hårdvarukostnaderna för att köra en nod och processtransaktioner.

#### Skalbarhet för verifiering

*Verifieringsskalbarhet beskriver metoder som ökar genomströmningen utan att belasta noder med ständigt ökande hårdvarukostnader.*Specifikt, det hänvisar till kryptografiska innovationer som giltighetsbevis. De är anledningen till varför Validity Rollups kan skala en blockkedja hållbart.

**Vad är en giltighet Rollup?**

Giltighet Rollups (även känd som “ZK-Rollups”) flytta beräkning och statlig lagring off-chain men hålla en liten mängd av vissa data on-chain. Ett smart kontrakt på den underliggande blockchain upprätthåller staten roten av Rollup. På Rollup, ett parti av högt komprimerade transaktioner, tillsammans med den nuvarande statliga roten, skickas till en off-chain Prover. Prover beräknar transaktionerna, genererar ett giltighetsbevis på resultaten och den nya statliga roten, och skickar det till en on-chain Verifier. Verifieraren verifierar korrekturen för giltighet, och smart kontrakt som upprätthåller tillståndet i Rollup uppdaterar det till den nya staten som tillhandahålls av Prover.

**Hur skalar Validity Rollups med samma hårdvarukrav?**

Även om Provers kräver high-end hårdvara, påverkar de inte decentraliseringen av en blockchain; eftersom giltigheten av transaktioner garanteras genom matematiskt verifierbara bevis.

Det som är viktigt är kraven för att verifiera bevisen. Eftersom de data som är inblandade är mycket komprimerad och till stor del abstraheras bort genom beräkning, dess inverkan på noder av den underliggande blockchain är minimal*.*

Verifierare (Ethereum noder) kräver inte high-end hårdvara, och storleken på batcherna ökar inte hårdvarukraven. Endast tillståndsövergångar och en liten mängd samtalsdata behöver behandlas och lagras av noderna. Detta gör det möjligt för alla Ethereum noder att verifiera Validity Rollup batcher med hjälp av sin befintliga hårdvara.

**Ju fler transaktioner, desto billigare blir det**

I traditionella blockkedjor händer fler transaktioner, desto dyrare blir det för alla som blocket utrymme blir fylld — och användare måste överbjuda varandra på en avgiftsmarknad för att få sina transaktioner inkluderade.

För en Validity Rollup är denna dynamik omvänd. Verifiera ett parti transaktioner på Ethereum har en viss kostnad. När antalet transaktioner inuti ett parti växer, kostnaden för att verifiera satsen växer i en exponentiellt långsammare takt. Lägga till fler transaktioner till ett parti leder till billigare transaktionsavgifter även om batch-verifieringskostnaderna ökar — eftersom det skrivs av bland alla transaktioner inuti satsen. Giltighet Rollups vill ha så många transaktioner som möjligt inuti ett parti — så att verifieringsavgiften kan delas mellan alla användare. Som batchstorlek växer till oändlighet, upplupen avgift per transaktion konvergerar till noll, dvs ., ju fler transaktioner på en Giltighet Rollup, desto billigare blir det för alla.

dYdX, en dApp som drivs av en Validity Rollup, ser ofta batchstorlekar på över 12.000 transaktioner. Jämföra gasförbrukningen av samma transaktioner på Mainnet jämfört med på en Giltighet Rollup illustrerar skalbarhetsvinsterna:

Avveckling av en dYdX-transaktion på Ethereum Mainnet:**200.000 gas**

Avveckling av en dYdX-transaktion på StarkEx:**<500 gas**

Ett annat sätt att se på det: Validity Rollups huvudsakliga kostnad skalor linjärt med antalet användare inom samma sats.

#### Varför Optimistiska Rollups är inte så skalbara som man kanske tror

I teorin, Optimistic Rollups ger nästan samma skalbarhet fördelar som Validity Rollups. Men det finns en viktig distinktion: Optimistiska Rollups optimerar för det genomsnittliga fallet, medan validitet Rollups optimerar för det värsta fallet. Eftersom blockkedjesystem fungerar under extremt motsatta förhållanden är optimering i värsta fall det enda sättet att uppnå säkerhet.

I Optimistic Rollup värsta fall, en användares transaktioner kommer inte att kontrolleras av bedrägerikontroller. Så, för att bestrida bedrägeri, användaren måste synkronisera en Ethereum full nod, en L2 full nod, och beräkna misstänkta transaktionen själv.

I Validity Rollups värsta fall, en användare skulle bara behöva synkronisera en Ethereum full nod för att verifiera giltighetstiden, rädda sig själva beräkningsbördan.

I motsats till Validity Rollups, Optimistic Rollups kostnadskalor linjärt med antalet transaktioner i stället för antal användare, vilket gör dem dyrare.

### Slutsats av pusslet — Tillåten till Rollup State

För att garantera giltigheten av transaktioner, användare behöver köra en Ethereum nod endast. Dock kan användare och utvecklare vill visa, och köra, staten och genomförandet av Rollup för olika ändamål. En*indexering L2-nod*fyller detta behov perfekt. Det tillåter inte bara användare att se transaktionerna i nätverket, men det är också en kritisk infrastruktur som är nödvändig för att ekosysteminfrastrukturen ska fungera. Indexerare som Grafen, Alchemy, Infura; Oracle nätverk som Chainlink, och block Explorers, alla dessa stöds fullt ut av en tillåten indexering L2-nod.

### Slutsats

Många metoder för att hantera blockkedjans skalbarhet fokuserar felaktigt på att öka*genomströmning*. Men, detta försummar genomströmning” inverkan på noder: de ständigt ökande hårdvarukraven för att bearbeta block och lagra nätverkshistorik, och hur detta hämmar decentraliseringen av ett nätverk.

Med tillkomsten av valideringssäker kryptografi, en blockchain kan uppnå**sann skalbarhet**som inte belastar noder med ständigt ökande kostnader och möjliggör bred decentralisering. Fler transaktioner med kraftfulla och mer komplexa beräkningar för samma hårdvara är nu möjliga, invertera avgiftsmarknaden dilemma i processen - desto mer aktivitet på en validitet Rollup, desto billigare blir det!

[SwagtimusPrime.eth](https://twitter.com/SwagtimusP?t=pO0L1vGIhuC-ZgWOusQYtA&s=09)och[Louis Guthmann](https://twitter.com/GuthL)

1 Från<https://bitcoin.org/en/bitcoin-core/features/requirements>

2 Från<https://ethereum.org/en/developers/docs/nodes-and-clients/>

3 Från<https://docs.solana.com/running-validator/validator-reqs>

4 Starkt förenklad och justerad för genomsnittliga dynamiska blockstorlekar