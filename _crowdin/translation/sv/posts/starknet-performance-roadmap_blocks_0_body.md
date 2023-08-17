### TL;DR

* Valutajusteringar är inte begränsade i genomströmningen på samma sätt som L1s. Detta ger upphov till potentiellt mycket högre TPS på L2 validitet rollups.
* StarkNet prestanda färdplan adresserar ett nyckelelement i systemet: sekvenseraren.
* Vi presenterar här färdplanen för prestandaförbättringar:\
  — Sequencer parallellisering\
  — En ny rostimplementering för Cairo VM\
  — Sequencer återimplementering i rust\
* Proverna är inte flaskhalsen och klarar mycket mer än vad de gör nu!

### Introduktion

StarkNet lanserades på Mainnet för nästan ett år sedan. Vi började bygga StarkNet genom att fokusera på funktionalitet. Nu skiftar vi fokus till att förbättra prestanda med en rad steg som kommer att bidra till att förbättra StarkNet-upplevelsen.

I det här inlägget förklarar vi varför det finns ett brett spektrum av optimeringar som endast är tillämpliga vid valideringar och vi kommer att dela vår plan för att genomföra dessa steg på StarkNet. Några av dessa steg är redan implementerade i StarkNet Alpha 0.10.2, som släpptes på Testnet den 16 november och Igår på Mainnet. Men innan vi diskuterar lösningarna, låt oss granska begränsningarna och deras orsak.

### Blockbegränsningar: giltighet rollups kontra L1

En potentiell metod för att öka blockkedjans skalbarhet och öka TPS skulle vara att lyfta blockbegränsningarna (i form av gas/storlek) samtidigt som blocktiden är konstant. Detta skulle kräva mer ansträngning från blockproducenterna (validerare på L1, sequencers på L2) och kräver därmed ett effektivare genomförande av dessa komponenter. För detta ändamål flyttar vi nu fokus till StarkNet sequencer optimizations, som vi beskriver mer i detalj i följande sektioner.

Här uppstår en naturlig fråga. Varför är sequencer optimeringar begränsad till validitet rollups, det vill säga varför kan vi inte genomföra samma förbättringar på L1 och undvika komplexiteten i validitet rollups helt? I nästa avsnitt hävdar vi att det finns en grundläggande skillnad mellan de två, tillåter ett brett spektrum av optimeringar på L2 som inte är tillämpliga på L1.

### Varför begränsas L1-genomströmningen?

Att lyfta blockbegränsningarna på L1 lider tyvärr av ett stort fallgrop. Genom att öka tillväxttakten i kedjan ökar vi också kraven från hela noder, som försöker hålla jämna steg med den senaste staten. Eftersom L1 hela noder måste omköra all historik, en hög ökning av blockstorleken (i form av gas) innebär en betydande påfrestning på dem, igen leder till svagare maskiner släppa ut ur systemet och lämnar förmågan att köra hela noder bara till tillräckligt stora enheter. Som ett resultat, användare kommer inte att kunna verifiera staten själva och delta i nätverket på ett trovärdigt sätt.

Detta ger oss förståelse för att L1-genomströmningen bör begränsas för att upprätthålla ett verkligt decentraliserat och säkert system.

### Varför påverkar inte samma barriärer giltighetstiden rollups?

**Endast när man beaktar hela noden perspektiv ser vi den sanna kraften som erbjuds av giltighet rollups.**En L1-full nod måste omköra hela historiken för att säkerställa det aktuella tillståndets korrekthet. StarkNet noder behöver bara verifiera STARK korrekturer, och denna verifiering tar en exponentiellt lägre mängd beräkningsresurser. I synnerhet behöver synkronisering från början inte innebära genomförande; en nod kan få en dump av det aktuella tillståndet från sina jämlikar och bara verifiera via ett STARK-bevis att detta tillstånd är giltigt. Detta gör att vi kan öka genomströmningen av nätverket utan att öka kraven från hela noden.

Vi drar därför slutsatsen att L2 sequencer är föremål för ett helt spektrum av optimeringar som inte är möjliga på en L1.

### Prestanda färdplan framåt

I nästa avsnitt diskuterar vi vilka av dessa som för närvarande är planerade för StarkNet sequencer.

### Parallellisering av sekvenser

Det första steget på vår färdplan var att införa parallellisering till genomförandet av transaktionen. Detta introducerades i StarkNet alfa 0.10.2, som släpptes igår på Mainnet. Vi dyker nu in i vad parallellisering är (detta är en semi-teknisk sektion, för att fortsätta på färdplanen, hoppa till nästa avsnitt).

Så vad betyder “transaktion parallellisering” ? Att utföra ett parallellt transaktionsblock är omöjligt eftersom olika transaktioner kan vara beroende. Detta illustreras i följande exempel. Överväg ett block med tre transaktioner från samma användare:

* Transaktion A: byta USDC mot ETH
* Transaktion B: betala ETH för en NFT
* Transaktion C: byta USDT mot BTC

Tx A måste naturligtvis ske innan Tx B, men Tx C är helt oberoende av båda och kan utföras parallellt. Om varje transaktion kräver 1 sekund för att köra, då blockets produktionstid kan minskas från 3 sekunder till 2 sekunder genom att införa parallellisering.

Problemet är att vi inte känner till transaktionsberoendena i förväg. I praktiken, först när vi utför transaktion B från vårt exempel, ser vi att den bygger på ändringar som görs genom transaktion A. Mer formellt följer beroendet av att transaktion B läser från lagringsceller som transaktionen A har skrivit till. Vi kan tänka oss att transaktionerna bildar ett beroendediagram, där det finns en kant från transaktion A till transaktion B iff A skriver till en lagringscell som läses av B, och på så sätt måste avrättas före B. Följande figur visar ett exempel på ett sådant beroende diagram:

![](https://miro.medium.com/max/641/0*I-qGgxdJJmqmgZWM)

I exemplet ovan kan varje kolumn utföras parallellt, och detta är det optimala arrangemanget (medan vi naivt skulle ha genomfört transaktioner 1–9 sekventiellt).

För att övervinna det faktum att beroendegrafen inte är känd i förväg, introducerar vi***optimistisk parallellisering***, i en anda av[BLOCK-STM](https://malkhi.com/posts/2022/04/block-stm/)utvecklat av Aptos Labs, till StarkNet sequencer. Under detta paradigm försöker vi optimistiskt att genomföra transaktioner parallellt och på nytt genomföra en kollision. Vi kan till exempel utföra transaktioner 1–4 från figur 1 parallellt, bara för att sedan ta reda på att Tx4 är beroende av Tx1. Därför var dess avrättning meningslös (vi körde den i förhållande till samma tillstånd vi körde Tx1 mot, medan vi borde ha köra det mot staten till följd av att tillämpa Tx1). I så fall kommer vi att omköra Tx4.

Observera att vi kan lägga till många optimeringar ovanpå optimistisk parallellisering. Till exempel, i stället för att naivt vänta på att varje utförande ska upphöra, kan vi avbryta ett utförande i det ögonblick vi finner ett beroende som ogiltigförklarar det.

Ett annat exempel är att optimera valet av vilka transaktioner som ska utföras på nytt. Antag att ett block som består av alla transaktioner från figur 1 matas in i en sequencer med fem CPU-kärnor. Först försöker vi genomföra transaktioner 1–5 parallellt. Om beställningen av slutförandet var Tx2, Tx3, Tx4, Tx1, och slutligen Tx5, då kommer vi att hitta beroendet Tx1≥ Tx4 först efter att Tx4 redan körts — vilket indikerar att det bör omköras. Naively, vi kanske vill re-execute Tx5 så bra eftersom det kan bete sig annorlunda med tanke på den nya exekveringen av Tx4. Men snarare än att bara omköra alla transaktioner efter den nu ogiltigförklarade Tx4, vi kan gå igenom beroendegrafen konstruerad från de transaktioner vars exekvering redan har avslutats och endast re-execute transaktioner som var beroende av Tx4.

### En ny Rust implementation för Cairo-VM

Smarta kontrakt i StarkNet är skrivna i Kairo och utförs inuti Cairo-VM, som specifikation visas i[Kairo papper](https://eprint.iacr.org/2021/1063.pdf). För närvarande använder sequencer en[python implementation](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/cairo/lang/vm)av Cairo-VM. För att optimera prestandan för VM-implementeringen har vi lanserat ett försök att skriva om VM i rost. Tack vare det stora arbetet med[Lambdaclass](https://lambdaclass.com/), som vid det här laget är ett ovärderligt team i StarkNet ekosystem, detta arbete kommer snart att förverkligas.

VM: s rost implementation,[cairo-rs](https://github.com/lambdaclass/cairo-rs), kan nu köra infödda Kairo kod. Nästa steg är att hantera smart-contract-utförande och integrationer med pythonic sequencer. En gång integrerad med cairo-rs, sekvenserarens prestanda förväntas förbättras avsevärt.

### Omimplementering av Sequencer i Rust

Vår övergång från python till rost för att förbättra prestandan är inte begränsad till Kairo VM. Vid sidan av de förbättringar som nämnts ovan, planerar vi att skriva om sequencer från grunden i rost. Förutom Rusts interna fördelar innebär detta en möjlighet för andra optimeringar till sekvensatorn. Notera ett par, kan vi njuta av fördelarna med kairo-rs utan overhead av python-rost kommunikation, och vi kan helt omforma hur staten lagras och nås (som idag bygger på[Patricia-Trie struktur](https://docs.starknet.io/documentation/develop/State/starknet-state/#state_commitment)).

### Vad sägs om bevis?

Under hela det här inlägget, vi nämnde inte den kanske mest kända inslag av giltighet rollups — bevis. Man kan föreställa sig att det är den utan tvekan mest sofistikerade komponenten i arkitekturen, det bör vara flaskhals och därmed fokus för optimering. Intressant nog är det de mer ”standard” komponenterna som nu är flaskhalsen på StarkNet. Idag, särskilt med[rekursiva bevis](https://medium.com/starkware/recursive-starks-78f8dd401025), kan vi passa en hel del fler transaktioner än den nuvarande trafiken på Testnet/Mainnet i ett bevis. I själva verket, idag, StarkNet block är bevisat tillsammans med StarkEx transaktioner, där den senare kan ibland medföra flera hundra tusen NFT myntar.

### Summary

Parallellisering, Rust, med mera – håll er till en förbättrad TPS i de kommande StarkNet-versionerna.