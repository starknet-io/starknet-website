### TL;DR

* Recursive Proving är live på Mainnet, skalning StarkEx-appar samt StarkNet med ett enda bevis
* Det ökar skalan, och ger fördelar i kostnaden, och latens (en sällsynt och spännande förekomst av skala och latens rör sig i tandem, och inte vara en kompromiss)
* Det sätter scenen för L3 och andra fördelarGå läsa blogginlägget på[Recursive Beving](https://medium.com/@starkware/recursive-starks-78f8dd401025). Det är häftigt 😉

### Skalas upp!

Rekursiva bevis — drivs av Kairos allmänna beräkning — är nu i produktion. Detta markerar ett stort uppsving för kraften i L2-skalning med STARKs. Det kommer snabbt att leverera en flerfaldig ökning av antalet transaktioner som kan skrivas till Ethereum via ett enda bevis.

Fram till nu har STARK skalning fungerat genom att ”rulla upp” tiotals eller till och med hundratusentals transaktioner i ett enda bevis, som skrevs till Ethereum. Med rekursion, många sådana bevis kan "rullas upp" till ett enda bevis.

Denna metod är nu i produktion för en mängd Cairo-baserade applikationer: appar som körs på StarkEx, StarkWare SaaS skalning motor, och StarkNet, den tillståndsfria rollup.

### Berättelsen hittills

Sedan det första beviset på Mainnet, i mars 2020, har följande utvecklingar format hur STARKs används.

### STARK-baserad skalning

I juni 2020 lanserades den första STARK-baserade skalningslösningen —[StarkEx](https://youtu.be/P-qoPVoneQA)— på Ethereum Mainnet. StarkEx har en Prover som utför stora beräkningar off-chain och producerar ett STARK-bevis för deras korrekthet, och en Verifier som verifierar detta bevis on-chain. Begränsningarna för denna första utbyggnad var “handskrivna” av StarkWare ingenjörer, vilket kraftigt begränsar funktionshastigheten för StarkEx. Vi drog slutsatsen att ett programmeringsspråk för att stödja bevisade allmänna beräkningar behövs — Kairo.

#### Cairo

Sommaren 2020 gjorde Kairo sitt[första framträdande på Ethereum Mainnet](https://medium.com/starkware/hello-cairo-3cb43b13b209). Kairo står för CPU Algebraic Intermediate Representation (AIR), och innehåller en enda AIR som verifierar instruktionerna för denna “CPU”. Det öppnade upp dörren för kodningsbevis för mer komplex affärslogik, för godtyckliga beräkningsuttalanden, och för att göra det på ett snabbare och säkrare sätt. Ett Kairo program kan bevisa utförandet av en enda applikation logik. Men ett Kairo program kan också vara en sammanslagning av flera sådana program — SHARP.

#### SHARP

SHARP — en SHARed Prover — tar transaktioner från flera separata appar, och bevisar dem alla i en enda STARK-säker. Appar kombinerar sina serier av transaktioner, fylla upp kapaciteten hos en STARK-korrektur snabbare. Transaktioner behandlas i en förbättrad takt och latens. Nästa gräns: Rekursiva korrekturer, men inte bara för någon hårdkodad logik, utan snarare för**allmän beräkning**.

Att förstå den fulla nyttan av Recursive Bevisa det är värt att förstå lite mer om hur (icke-rekursiv) bevisar utfördes av SHARP fram till nu. Ritning 1 visar ett typiskt icke-rekursivt flöde:

![Ritning 1: Ett typiskt icke-rekursivt bevisat flöde](/assets/recursive_starks_01.png "Ritning 1: Ett typiskt icke-rekursivt bevisat flöde")

Här kommer uttalanden över tid. När en viss kapacitet (eller tid) tröskel uppnås, genereras en stor samlad sats (a.k.a Traf). Detta kombinerade uttalande bevisas först när alla enskilda uttalanden har mottagits. Detta bevis tar lång tid att bevisa (ungefär summan av tiden det tar att bevisa varje uttalande individuellt).

Bevisa extremt stora uttalanden är så småningom begränsad av tillgängliga beräkna resurser som minne. Före rekursion var detta effektivt den begränsande skalbarhetsbarriären av STARK bevisa.

### Vad är Recursive Proving?

Med STARK korrektur, den tid det tar att bevisa ett uttalande är ungefär linjär med den tid det tar att utföra uttalandet. Dessutom, om att bevisa ett uttalande tar T-tid, sedan verifiera beviset tar grovt log(T) tid, som typiskt kallas “logaritmisk kompression”. Med andra ord, med STARKs spenderar du mycket mindre tid på att verifiera utlåtandet än på att beräkna det.

[Kairo](https://starkware.co/cairo/)gör det möjligt att uttrycka allmänna beräkningsuttalanden som kan bevisas av STARK korrektur och verifieras av motsvarande STARK verifierare.

Det är här möjligheten att utföra[recursion](https://en.wikipedia.org/wiki/Recursion)sparkar i: På samma sätt som vi skriver ett Kairo program som bevisar riktigheten i tusentals transaktioner, vi kan också skriva ett Kairo program som verifierar flera STARK bevis. Vi kan generera ett enda bevis på giltigheten av flera "uppströms"-bevis. Detta är vad vi kallar Recursive Proving.

På grund av den logaritmiska kompression och grovt linjär bevistid, Att bevisa en verifiering av ett STARK-bevis tar relativt kort tid (förväntas vara bara några minuter inom en snar framtid).

Vid genomförandet av Recursion, SHARP kan bevisa uttalanden vid ankomst. Deras korrekturer kan slås samman om och om igen till rekursiva korrekturer i olika mönster tills, vid en viss tidpunkt, det resulterande beviset lämnas in till ett on-chain-verifieraravtal. Ett typiskt mönster skildras i Ritning 2:

![Ritning 2: Ett typiskt rekursivt bevisat flöde.](/assets/recursive_starks_02.png "Ritning 2: Ett typiskt rekursivt bevisat flöde.")

### Omedelbara fördelar med rekursiv bevisning

#### Minskad On-kedje-kostnad

Av fladdermössen, vi uppnå "kompression" av flera bevis till en, vilket innebär lägre verifieringskostnad på kedjan per transaktion (där varje sats kan innehålla många transaktioner).

Vid rekursion, den beräkningsresurser barriär (t.ex. minne) att begränsade korrekturer storlek fram till nu, elimineras, eftersom varje begränsad storlek uttalande kan bevisas separat. När man använder rekursion, är den effektiva tågstorleken på rekursion nästan obegränsad, och kostnaden per transaktion kan minskas genom storleksordningar.

I praktiken beror minskningen på den godtagbara fördröjningen (och den hastighet som transaktionerna kommer till). Dessutom, eftersom varje bevis är typiskt också åtföljs av vissa utdata såsom on-chain data, det finns gränser för hur mycket data som kan skrivas i kedjan tillsammans med ett enda bevis. Icke desto mindre är det trivialt möjligt att minska kostnaderna med en storleksordning och ännu bättre.

#### Minskad latens

Det rekursiva bevismönstret minskar latensen av att bevisa stora tåg av uttalanden. Detta är resultatet av två faktorer:

1. Inkommande uttalanden kan bevisas**parallellt**(i motsats till att bevisa ett extremt stort kombinerat uttalande).
2. Det finns ingen anledning att vänta tills det sista uttalandet i tåget anländer för att börja bevisa. Snarare kan bevis kombineras med nya uttalanden när de anländer. Detta innebär att latensen av det sista uttalandet går ett tåg, är ungefär den tid det tar att bevisa att mycket sista uttalande plus den tid det tar att bevisa en Recursive Verifier uttalande (vilket intygar att alla dessa uttalanden som redan har “onboarded” detta särskilda tåg).

Vi utvecklar och optimerar aktivt latensen för att bevisa rekursive Verifier uttalandet. Vi förväntar oss att detta når ordningen på några minuter inom några månader. Därför kan en mycket effektiv SHARP erbjuda latenser från några minuter upp till några timmar, beroende på tradeoff kontra on-chain kostnad per transaktion. Detta innebär en meningsfull förbättring av SHARP:s latens.

#### Underlättar L3

Utvecklingen av Recursive Verifier uttalande i Kairo öppnar också möjligheten att lämna in bevis till StarkNet, som detta uttalande kan bakas in i ett StarkNet smart kontrakt. Detta gör det möjligt att bygga[L3 distributioner ovanpå den offentliga StarkNet](https://medium.com/starkware/fractal-scaling-from-l2-to-l3-7fe238ecfb4f)(ett L2-nätverk).

Det rekursiva mönstret gäller även för aggregering av bevis från L3, som ska verifieras med ett enda bevis på L2. Därför uppnås hyper-skalning där också.

### Mer subtila fördelar

#### Sökande Rekursion

Rekursion öppnar upp ännu fler möjligheter för plattformar och applikationer som vill ytterligare skala deras kostnader och prestanda.

Varje STARK bevis vittnar om giltigheten av ett uttalande som tillämpas på vissa indata som kallas "offentlig inmatning" (eller "program utmatning" i Kairo villkor). Konceptuellt komprimerar STARK rekursion två korrekturer med*två*ingångar till*ett*korrektur med två ingångar. Med andra ord, medan antalet bevis minskas, hålls antalet ingångar konstant. Dessa ingångar används sedan typiskt av ett program för att uppdatera vissa tillstånd på L1 (e. . för att uppdatera ett tillstånd rot eller utföra en on-chain uttag).

Om det rekursiva uttalandet är tillåtet att vara*applikation-aware*, dvs erkänner semantiken i själva tillämpningen, den kan både komprimera två korrekturer till en*samt*kombinera de två ingångarna till en. Det resulterande uttalandet vittnar om giltigheten av ingångskombinationen baserat på applikationssemantik, därav namnet Applicative Recursion (se Ritning 3, till exempel)..

![Ritning 3: Tillämpad rekursion exempel](/assets/recursive_starks_03.png "Ritning 3: Tillämpad rekursion exempel")

Här vittnar Uttalande 1 om en statlig uppdatering från A till B och Uttalande 2 vittnar om en ytterligare uppdatering från B till C. Proofs of Statement 1 and Statement 2 kan kombineras till ett tredje uttalande som intygar en direkt uppdatering från A till C. Genom att tillämpa liknande logik rekursivt, kan man minska kostnaden för statliga uppdateringar mycket avsevärt upp till slutgiltighetskravet.

Ett annat viktigt exempel på Applicative Recursion är att komprimera data från flera korrekturer. Till exempel, för en validitet Rollup som StarkNet, varje lagringsuppdatering på L2 ingår också som överföringsdata på L1, för att säkerställa datatillgänglighet. Det finns dock inget behov av att skicka flera uppdateringar för samma lagringselement, eftersom endast det slutliga värdet av transaktioner som intygas av verifierade bevis krävs för data tillgänglighet. Denna optimering utförs redan inom ett*enda*StarkNet block. Men genom att generera ett bevis per block, kan Applicative Recursion komprimera denna rollup data över*flera*L2 block. Detta kan resultera i betydande kostnadsminskningar, vilket möjliggör kortare blockintervall på L2, utan att offra skalbarheten av L1-uppdateringar.

Värt att notera: Applicativ rekursion kan kombineras med applikation-agnostisk rekursion som skildras tidigare. Dessa två optimeringar är oberoende.

#### Minskad On-chain Verifier komplexitet

Komplexiteten hos STARK verifierare beror på vilken typ av uttalanden det är utformat för att verifiera. Särskilt när det gäller Kairo-uttalanden beror verifierarens komplexitet på de specifika element som tillåts i Kairo-språket. och, mer specifikt, de inbyggda (om vi använder CPU-metaforen för Kairo, sedan inbyggda är motsvarigheten till mikro-kretsar i en CPU: beräkningar som utförs så ofta att de kräver sin egen optimerade beräkning).

Kairo språket fortsätter att utvecklas och erbjuder mer och mer användbara inbyggda. Å andra sidan kräver Recursive Verifier endast en liten delmängd av dessa inbyggda. Därför kan en rekursiv SHARP framgångsrikt stödja alla uttalanden i Kairo genom att stödja det fullständiga språket i de rekursiva verifierarna. Specifikt, L1 Solidity Verifier behöver bara verifiera rekursiva korrektur, och därmed kan begränsas till en mer stabil delmängd av Kairo språk: L1 Verifier behöver inte hänga med de senaste och största inbyggda. Med andra ord, verifiering av ständigt föränderliga komplexa uttalanden förpassas till L2, vilket gör att L1-verifieraren kan verifiera enklare och stabilare uttalanden.

#### Minskad beräkning av fotavtryck

Före rekursion, möjligheten att sammanställa flera påståenden till ett bevis begränsades av den maximala storleken på uttalandet som kunde bevisas på tillgängliga beräkningsfall (och den tid det kunde ta att generera sådana bevis).

Med rekursion finns det inte längre något behov av att bevisa så extremt stora uttalanden. Som ett resultat, mindre, billigare och mer tillgängliga beräkna instanser kan användas (även om fler av dem kan behövas än med stora monolitiska provers). Detta möjliggör användning av prover instanser i mer fysiska och virtuella miljöer än tidigare möjligt.

### Summary

Rekursiva bevis på allmän beräkning tjänar nu flera produktionssystem, inklusive StarkNet, på Mainnet Ethereum.

Fördelarna med rekursion kommer att förverkligas gradvis, eftersom det fortsätter att möjliggöra nya förbättringar, och det kommer snart att leverera hyper-skala, minska gasavgifter, och förbättra latens genom att låsa upp potentialen av parallellisering.

Det kommer att medföra betydande kostnads- och latensfördelar tillsammans med nya möjligheter som L3 och applicative-recursion. Ytterligare optimering av Recursive Verifier pågår och ännu bättre prestanda och kostnadsfördelar förväntas tillhandahållas över tid.



**Gidi Kaempfer**, Head of Core Engineering, StarkWare