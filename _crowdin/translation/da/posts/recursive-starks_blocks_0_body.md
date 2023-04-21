### TL;DR

* Rekursiv Proving er live på Mainnet, skalering StarkEx apps samt StarkNet med et enkelt bevis
* Det øger skalaen, og leverer fordele i omkostninger, og latens-tid (en sjælden og spændende forekomst af skala og latens-tid bevæger sig i tandem, og ikke at være en tradeoff)
* Det sætter scenen for L3 og andre fordeleGo læse blogindlægget på[Rekursiv Beving](https://medium.com/@starkware/recursive-starks-78f8dd401025). Det er cool ting 😉

### Skalering op!

Rekursive beviser — drevet af Cairos generelle beregning — er nu i produktion. Dette markerer et stort løft til kraften i L2 skalering med STARKs. Det vil hurtigt levere en flerfoldig stigning i antallet af transaktioner, der kan skrives til Ethereum via et enkelt bevis.

Indtil nu har STARK skalering arbejdet ved at “rulle op” tiere eller endda hundredtusinder af transaktioner til et enkelt bevis, som er skrevet til Ethereum. Med rekursion, mange sådanne beviser kan “rulles op” til et enkelt bevis.

Denne metode er nu i produktion til en lang række Cairo-baserede applikationer: apps, der kører på StarkEx, StarkWare’s SaaS-skaleringsmotor og StarkNet, den tilladelsesfri rullefrit.

### Historien indtil videre

Siden det første bevis på Mainnet i marts 2020 har følgende udvikling formet, hvordan STARKs anvendes.

### STARK-baseret skalering

I juni 2020 blev den første STARK-baserede skaleringsløsning —[StarkEx](https://youtu.be/P-qoPVoneQA)— implementeret på Ethereum Mainnet. StarkEx har en Prover, der udfører store beregninger uden for kæden og producerer et STARK-bevis for deres korrekthed, og en verifikator, der verificerer dette bevis på kæden. De begrænsninger for denne første implementering var “håndskrevet” af StarkWare ingeniører, hvilket i høj grad begrænser funktionen hastighed for StarkEx. Vi konkluderede, at et programmeringssprog til støtte for at bevise generel beregning er nødvendig — Cairo.

#### Cairo

I sommeren 2020 Kairo gjorde sin[første optræden på Ethereum Mainnet](https://medium.com/starkware/hello-cairo-3cb43b13b209). Cairo står for CPU Algebraisk Intermediate Representation (AIR), og omfatter en enkelt AIR, der verificerer instruktionen sæt af denne “CPU”. Det åbnede døren for kodning beviser for mere komplekse business logik, for vilkårlige beregninger og for at gøre det på en hurtigere og sikrere måde. Et Kairo program kan bevise udførelsen af en enkelt applikations logik. Men et Kairo program kan også være en sammenkædning af flere sådanne applikationer — SHARP.

#### DEL

SHARP — en SHARed Prover — tager transaktioner fra flere separate apps, og beviser dem alle i en enkelt STARK-bevis. Apps kombinerer deres partier af transaktioner, fylder kapaciteten af en STARK-beviser hurtigere. Transaktionerne behandles med en forbedret hastighed og forsinkelse. Den næste grænse: Rekursive Proofs, men ikke kun for nogle hårdtkodede logik, men snarere for**generel beregning**.

For at forstå den fulde fordel ved rekursiv bevise det er værd at forstå en lille smule mere om, hvordan (ikke-rekursive) bevise blev udført af SHARP indtil nu. Tegning 1 viser en typisk ikke-rekursiv strømning:

![Tegning 1: Et typisk ikke-rekursivt flow](/assets/recursive_starks_01.png "Tegning 1: Et typisk ikke-rekursivt flow")

Her kommer der erklæringer over tid. Når en bestemt kapacitetstærskel (eller tid) er nået, genereres en stor kombineret erklæring (alias: et tog). Denne kombinerede erklæring er kun bevist, når alle de individuelle udtalelser er modtaget. Dette bevis tager lang tid at bevise (omtrent summen af tid det tager at bevise hver erklæring individuelt).

Beviser ekstremt store udsagn er i sidste ende begrænset af tilgængelige beregninger ressourcer såsom hukommelse. Forud for rekursion var dette effektivt den begrænsende skalerbarhedsbarriere af STARK beviser.

### Hvad er rekursiv frembringelse?

Med STARK beviser, den tid det tager at bevise en erklæring er omtrent lineær med den tid det tager at udføre erklæringen. Desuden, hvis bevise en erklæring tager T tid, derefter kontrollere beviset tager groft log(T) tid, som typisk kaldes “logaritmisk komprimering”. Med andre ord, med STARKs bruger du meget mindre tid på at kontrollere erklæringen end ved beregning af den.

[Cairo](https://starkware.co/cairo/)giver mulighed for at udtrykke generelle beregningserklæringer, der kan bevises af STARK-beviser og verificeres af de tilsvarende STARK-verifikatorer.

Det er her, muligheden for at udføre[rekursion](https://en.wikipedia.org/wiki/Recursion)sparker i: På samme måde som vi skriver et Kairo-program, der beviser rigtigheden af tusindvis af transaktioner, Vi kan også skrive et Cairo program, der verificerer flere STARK beviser. Vi kan generere et enkelt bevis for validiteten af flere “up-stream” beviser. Det er det, vi kalder rekursiv fremgang.

På grund af logaritmisk komprimering og nogenlunde lineær bevise tid, at bevise en verifikation af en STARK bevis tager relativt kort tid (forventes at være blot et par minutter i den nærmeste fremtid).

Når du implementerer Recursion, kan SHARP bevise erklæringer ved deres ankomst. Deres beviser kan fusioneres igen og igen i rekursive beviser i forskellige mønstre indtil, på et bestemt tidspunkt forelægges den resulterende dokumentation for en kontrakt om verifikator for en kædeverifikator. Et typisk mønster er afbildet i Tegning 2:

![Tegning 2: En typisk rekursiv gennemstrømning.](/assets/recursive_starks_02.png "Tegning 2: En typisk rekursiv gennemstrømning.")

### Øjeblikkelige fordele ved rekursiv bevise

#### Reduceret On-chain Omkostning

Fra flagermus, vi opnår “komprimering” af flere beviser til én, hvilket indebærer lavere omkostninger til kontrol af kæden pr. transaktion (hvor hver opgørelse kan omfatte mange transaktioner).

Med rekursion af beregningsmæssige ressourcer barriere (f.eks. hukommelse), at begrænsede beviser størrelse indtil nu, elimineres, da hver begrænset størrelse udsagn kan bevises separat. Når der anvendes rekursion, er den effektive togstørrelse af rekursion næsten ubegrænset, og omkostningerne pr. transaktion kan reduceres ved størrelsesordener.

I praksis afhænger reduktionen af den acceptable latenstid (og den sats, hvormed transaktionerne ankommer). Desuden, da hvert bevis typisk også ledsages af nogle output såsom on-chain data, der er grænser for mængden af data, der kan skrives på kæden sammen med et enkelt bevis. Ikke desto mindre er det trivielt muligt at reducere omkostningerne med en størrelsesorden og endnu bedre.

#### Reduceret Latens

Den rekursive Beving mønster reducerer latenstiden af at bevise store tog af udsagn. Dette er resultatet af to faktorer:

1. Indgående udsagn kan bevises**parallelt**(i modsætning til at bevise en ekstremt stor kombineret udsagn).
2. Der er ingen grund til at vente til den sidste erklæring i toget ankommer for at begynde at bevise. Tværtimod kan beviser kombineres med nye udsagn, når de ankommer. Det betyder, at latenstiden af den sidste erklæring tiltræder et tog, er omtrent den tid, det tager at bevise, at allersidste erklæring plus den tid, det tager at bevise en rekursiv verifikator erklæring (som attesterer til alle de udtalelser, der allerede har “onboarde” dette særlige tog).

Vi er aktivt ved at udvikle og optimere latenstiden for at bevise den rekursive verifikator erklæring. Vi forventer, at dette vil nå op på et par minutter i løbet af et par måneder. Derfor kan en meget effektiv SHARP tilbyde latencies fra et par minutter op til et par timer, afhængigt af afvejning versus on-chain omkostninger per transaktion. Dette er en meningsfuld forbedring af SHARP's latens.

#### Lettere L3

Udviklingen af den rekursive verifikatorerklæring i Cairo åbner også mulighed for at indsende beviser til StarkNet, som denne erklæring kan bages i en StarkNet smart kontrakt. Dette gør det muligt at bygge[L3 installationer på toppen af det offentlige StarkNet](https://medium.com/starkware/fractal-scaling-from-l2-to-l3-7fe238ecfb4f)(et L2 netværk).

Den rekursive mønster gælder også for sammenlægning af beviser fra L3, der skal kontrolleres ved en enkelt bevis på L2. Derfor er der også opnået hyperskalering.

### Flere Subtile Fordele

#### Applikativ Rekursion

Rekursion åbner endnu flere muligheder for platforme og applikationer, der ønsker at skalere deres omkostninger og præstationer yderligere.

Hver STARK bevis bekræfter gyldigheden af en erklæring, der anvendes på nogle input kendt som den “offentlige input” (eller “program output” i Cairo udtryk). Begrebet komprimerer STARK rekursion to beviser med*to*indgange i*et*bevis med to indgange. Med andre ord, mens antallet af beviser er reduceret, antallet af input holdes konstant. Disse input bruges derefter typisk af et program for at opdatere en vis tilstand på L1 (f. eks. . for at opdatere en tilstandsrod eller udføre en on-chain tilbagetrækning).

Hvis den rekursive erklæring er tilladt at være*application-aware*, dvs. anerkender selve applikationens semantik det kan begge komprimere to beviser i én*samt*kombinere de to input i én. Den resulterende erklæring attesterer gyldigheden af inputkombinationen baseret på applikationssemantik dermed navnet Applicative Recursion (se Tegning 3, for et eksempel)..

![Tegning 3: Applicative Recursion eksempel](/assets/recursive_starks_03.png "Tegning 3: Applicative Recursion eksempel")

Her attesteres erklæring 1 til en statusopdatering fra A til B og erklæring 2 til en yderligere opdatering fra B til C. Bevis for erklæring 1 og erklæring 2 kan kombineres i en tredje erklæring, der attesterer den direkte opdatering fra A til C. Ved at anvende lignende logik rekursivt, kan man reducere omkostningerne ved statslige opdateringer meget væsentligt op til finality latens-tid krav.

Et andet vigtigt eksempel på Applicative Recursion er at komprimere rollup data fra flere beviser. For eksempel for en Gyldighed Rollup såsom StarkNet, alle lagringsopdateringer på L2 er også inkluderet som transmissionsdata på L1 for at sikre datatilgængelighed. Der er dog ingen grund til at sende flere opdateringer til det samme lagerelement, da kun den endelige værdi af transaktioner, der attesteres ved beviset, er nødvendig for datatilgængelighed. Denne optimering er allerede udført i en*enkelt*StarkNet blok. Ved at generere et bevis pr. blok, kan Applicative Recursion dog komprimere denne rollup data på tværs af*flere*L2 blokke. Dette kan resultere i en betydelig omkostningsreduktion, hvilket muliggør kortere blokintervaller på L2, uden at ofre skalerbarheden af L1 opdateringer.

Værd at bemærke: Applicative Recursion kan kombineres med application-agnostic rekursion som afbildet tidligere. Disse to optimeringer er uafhængige.

#### Reduceret Bekræftelseskompleksitet På Kæde

Kompleksiteten af STARK verifikator afhænger af den slags udsagn, det er designet til at verificere. Navnlig afhænger verifikatorens kompleksitet af de specifikke elementer, der er tilladt på Kairo-sproget, for så vidt angår Cairo-erklæringerne. og, mere specifikt, de understøttede indbyggere (hvis vi bruger CPU-metaforen for Cairo derefter indbygninger svarer til mikrokredsløb i en CPU: beregninger udført så ofte, at de kræver deres egen optimeret beregning).

Kairo sproget fortsætter med at udvikle sig og tilbyder flere og mere nyttige indbyggere. På den anden side kræver rekursiv verifikator kun en lille delmængde af disse indbyggere. Derfor kan en rekursiv SHARP med held støtte enhver erklæring i Cairo ved at støtte det fulde sprog i rekursive verifikatorer. Specifikt, L1 Solidity Verifier behøver kun kontrollere rekursive beviser, og dermed kan begrænses til en mere stabil delmængde af Cairo sprog: L1 verifikatoren behøver ikke holde trit med de nyeste og største indbyggere. Med andre ord er verifikation af stadigt udviklende komplekse udsagn henvist til L2, hvilket efterlader L1 verifikatoren til at verificere enklere og mere stabile udsagn.

#### Reduceret Beregn Fodaftryk

Før recursion evnen til at samle flere udsagn i ét bevis var begrænset af den maksimale størrelse af den erklæring, der kunne bevises på tilgængelige beregninger tilfælde (og den tid det kunne tage at generere sådanne beviser).

Med rekursion er der ikke længere behov for at bevise så meget store udtalelser. Som et resultat, mindre, billigere og mere tilgængelige beregningstilfælde kan bruges (selvom flere af dem kan være nødvendige end med store monolitiske provers). Dette giver mulighed for indsættelse af prover forekomster i mere fysiske og virtuelle miljøer end tidligere muligt.

### Summary

Rekursive beviser for generel beregning nu tjene flere produktionssystemer, herunder StarkNet, på Mainnet Ethereum.

Fordelene ved rekursion vil blive realiseret gradvist, da det fortsat giver mulighed for nye forbedringer, og det vil snart levere hyper-skala, skære gas gebyrer, og forbedre latens-tid ved at frigøre potentialet for parallelisering.

Det vil medføre betydelige omkostninger og latensydelser sammen med nye muligheder som L3 og anvendelig-rekursion. Yderligere optimering af rekursiv verifikator er igangværende og endnu bedre ydeevne og omkostningsfordele forventes at blive givet over tid.



**Gidi Kaempfer**, Head of Core Engineering, StarkWare