### TL;DR

* Vi delar en detaljerad plan för Regenesis, som har formats av omfattande diskussioner med StarkNet-gemenskapen. Särskilt tack till Kuba@SWM.
* Regenesis kommer att följa lanseringen av Kairo 1.0, vilket gör systemet säkrare genom att tillåta enklare och säkrare StarkNet kontrakt
* Användare bör vara beredda att uppdatera sin plånbok under övergångsfasen
* Utvecklare kommer att behöva anpassa sina kontrakt till Kairo 1.0

### Introduktion

StarkNet Alpha går mot Regenesis, ett viktigt steg mot produktion. I denna uppdatering vill vi dela med oss av mer information om huvudmotivationen för Regenesis —[Kairo 1.](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)— och för att börja förklara vad det kommer att kräva av användare och utvecklare. Efter Regenesis, kommer StarkNet endast att arbeta med Kairo 1.0-baserade kontrakt, och kommer att utgå från ett nytt genesis block med den befintliga staten.

Vad kommer Regenesis kräva av användare? En enkel uppdatering av plånboken. Vad kommer det att kräva från byggare av Starknet s dapps? Porting deras kontrakt till Kairo 1.0, och efter en enkel uppgradering riktlinje. Specifikt kommer det inte att bli någon omstart från ett rent tillstånd och vi kommer att stanna med samma StarkNet exempel, vilket innebär att det inte kommer att finnas något behov av en migration**.**

Regenesis planen är att helt bevara tillståndet i ansökningarna och att inte ådra sig någon nedtid för ansökningarna. Således, program som följer de riktlinjer som vi kommer att ge kommer att kunna lansera på StarkNet Alpha Mainnet direkt utan att störa deras drift och deras användare under Regenesis processen. e är engagerade i att arbeta med samhället och ge allt stöd som behövs för att göra denna process så smidig som möjligt.

Vi går i den riktningen till följd av omfattande diskussioner med gemenskapen, vilket inkluderade ett viktigt förslag från Software Mansion-teamet.

### Varför Regenesis?

#### Kairo 1.0 och Sierra

Den huvudsakliga motivationen för Regenesis är att utnyttja de nya möjligheter som Kairo 1. — nämligen sequencers DOS skydd, censur motstånd och gasmätning, som är avgörande för StarkNet som ett decentraliserat nätverk.

Kairo 1.0 kommer att se till att varje transaktion kan bevisas. Detta kommer att tillåta StarkNet att inkludera återställda transaktioner i block, och generera ett bevis på deras utförande. Denna mekanism kommer att tillåta sequencers att betalas på utförandet av återställda transaktioner, vilket ökar DOS skydd mot skadliga aktörer. Dessutom kommer Kairo 1.0 att stödja gasmätning, vilket gör det möjligt för StarkNet att övergå till en mer intuitiv avgiftsmarknad. Slutligen kommer detta att göra det möjligt för StarkNet att införa tvångstransaktioner från L1, och kommer att förbättra censur motståndskraften i nätverket.

För att dra nytta av dessa fördelar kan Cairo v0 och Kairo 1.0 kontrakt inte blandas. Felaktiga påståenden kan inte visa sig vara felaktiga, inte heller kan gasspårning ske, om vi har bitar av Kairo v0-kontrakt. För detta ändamål måste vi fasa ut Kairo v0-koden helt från StarkNet tillstånd, ergo Regenesis.

**Efter Regenesis kommer vi att ha ett Starknet-system helt baserat på Kairo 1.0.**

#### Förenkling av kod och protokoll

StarkNet, medan fortfarande i Alpha, genomgick redan många förändringar. Varje version hittills förändrat StarkNet OS, block och transaktioner struktur. Detta orsakade att en del av koden var föråldrad. Ändå måste hela noder och infrastrukturleverantörer (såsom indexerare och statliga utforskare) vara medvetna, och implementera, alla tidigare beteenden i StarkNet Alpha versioner för att synka med staten på ett tillförlitligt sätt. Utan Regenesis, denna börda kan vara ett stort avskräckande för utvecklare som skulle överväga att bygga sådana tjänster för StarkNet.

Innan vi går till produktionen, och som förberedelse till en decentraliserad värld med många implementeringar av infrastrukturverktyg, har vi därför för avsikt att minska protokollets komplexitet. Vi skulle uppnå detta genom att inte kräva framtida infrastruktur för att genomföra någon StarkNet 0. koda, och markera det första blocket efter övergångsperioden som ursprungspunkt.

### Wen Regenesis? Den övergripande tidslinjen

Regenesis kommer att följa frisläppandet av Kairo 1.0, som planeras äga rum i slutet av 2022. Under Q1 av 2023, kommer StarkNet att uppdateras för att stödja Kairo 1. , och vi strävar efter att migrera till ett fullt Kairo 1.0-baserat nätverk i slutet av Q1.

**Användare och program måste göra övergången under denna period.**

![](/assets/1_ef85shzd2uudwex-cy8wdg-1.png)

### Så vad behöver jag veta?

Applikationsutvecklare måste vara medvetna om följande aspekter kring Regenesis:

1. Se till att ditt kontrakt är redo för uppgraderingen. De fulla teknikaliteter i planen delas i[StarkNet Community Forum](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080). När detaljerna är klara kommer vi att dela en kortfattad riktlinje.
2. Se till att du är redo att porta din kod till Kairo 1.0. Se nästa avsnitt för alla de senaste detaljerna.

#### Porting av ditt kontrakt till Kairo 1.0

Cairo 1.0 håller ett stort löfte för StarkNet utvecklare. En förbättring av befintliga Kairo som kommer att bli säkrare, bättre och lättare att skriva avtal, med förbättrad syntax, fullfjädrat typsystem (infödda uint256 någon? och mer. Utvecklare kommer att krävas för att anpassa sina befintliga StarkNet-kontrakt till syntaxen Kairo 1.0. Men eftersom logiken och kodstrukturen kommer att förbli densamma, detta arbete förväntas vara försumbart jämfört med den ansträngning som krävdes för att utveckla appen i första hand.

I detta sammanhang är det värt att notera att du kan välja att åter granska versionen Kairo 1.0 av din app. Om din app redan har granskats tidigare, kommer återgranskningsprocessen att bli betydligt billigare och mer enkel, eftersom revisorerna redan är bekanta med din logik.

Vi kommer att släppa all dokumentation kring Kairo 1.0, tillsammans med tutorials och workshops under Q4 2022.

### Jag är en StarkNet User. Vad ska jag göra?

Som användare kommer du sannolikt att behöva vidta några åtgärder under Regenesis. Åtminstone måste du uppgradera ditt konto kontrakt. Att inte göra det under (några månader lång) övergångsperioden kommer att resultera i förlust av ditt konto. Beroende på den uppgraderingsväg som valts av utvecklarna av StarkNet-appar som du använder, kan du behöva ta extra steg.

Vi påminner alla om att StarkNet fortfarande är i Alpha fas, och användare måste hålla sig uppmärksamma på kommunikation från StarkNet och appar som de använder. Det är ditt ansvar att se till att du uppgraderar tidigt till det nya systemet. *Att vara en tidig användare är inte alltid lätt, och vi räknar med att du gör din del!*

### För att avsluta

Cairo 1.0 är precis runt hörnet, vilket ger många spännande fördelar och förbättringar för StarkNet och dess utvecklare. För att skörda dessa behövs en Regenesis event i nätverket. Lyckligtvis har vi en design i åtanke som gör denna process minimalt störande – helt sömlös för användare, och ganska enkel för applikationer.

Vi uppmanar dig att delta i[community-diskussionen](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080)och dela dina kommentarer och funderingar, samt hålla dig uppdaterad om de steg du behöver för att ta som applikationsutvecklare på StarkNet.