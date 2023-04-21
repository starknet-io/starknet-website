### TL;DR

* Rekursivt funn er live på Mainnet, skalering av StarkEx applikasjoner, i tillegg til StarkNet med ett enkelt bevis
* Det øker omfanget og gir kostnadsmessig nytte og latens (en sjelden og spennende forekomst av skala og latens som beveger seg i telandem, og ikke er omsettelig)
* Den angir stadiet for L3 og andre fordeler. Gå og les blogginnlegget på[Gjentakende bekreftelse](https://medium.com/@starkware/recursive-starks-78f8dd401025). Det er kule ting 😉

### Skalering opp!

Refeldige bekreftelser – drevet av denne generelle databeregningen – er nå i produksjon. Dette er et viktig løft for L2-skaleringens styrke med STARKs. Den vil raskt levere en flerfoldig økning i antallet transaksjoner som kan skrives til Ethereum via ett bevis.

Fram til nå har STARK skalering arbeidet med "rullende opp" titusenvis av transaksjoner i én enkelt prøve, eller til og med hundretalls enkeltprøve. som er skrevet til Ethereum. Ved rekursjon kan mange slike lydhoder "rulles opp" inn i ett enkelt bevis.

Metoden går nå i produksjon for en mengde Cairo-baserte anvendelser: apps som kjører på StarkEx, StarkWare’s SaaS skaleringsmotor, og StarkNet, den permisjonløse rulleringen.

### Historien så langt

Siden det første beviset på Mainnet i mars 2020 har utviklingen formet hvordan bruk av STARKer.

### STARK-basert skalering

I juni 2020 ble den første STARK-baserte skaleringsløsningen —[StarkEx](https://youtu.be/P-qoPVoneQA)distribuert på Ethereum Mainnet. StarkEx har en netthotell som utfører store dataoverføringer uten kjede og produserer et STARK-bevis for sin riktighet og en Verifisering som bekrefter denne bekreftelsen på kjeden. Kryptene for denne første utplasseringen var dermed «håndskrevet» av StarkWares ingeniører, og det var dermed sterkt begrensende funksjonshastighet for StarkEx. Vi konkluderte med at et programmeringsspråk som støtter å påvise generell beregning er nødvendig – Kairo.

#### Cairo

Sommeren 2020 gjorde sitt[første utseende på Ethereum Mainnet](https://medium.com/starkware/hello-cairo-3cb43b13b209). Cairo står for CPU Algebraic Intermediate Representation (AIR), og inkluderer en enkelt AIR som verifiserer instruksjonssettet til dette «CPU». Selskapet åpnet dør for kodebevis for mer komplisert forretningsmessig logikk, for vilkårlige beregningsuttalelser, og for å gjøre det på en raskere og tryggere måte. Et Cairo program vil kunne bevise utførelsen av søknadens logikk. Men et Cairo program kan også være en sammenblanding av flere slike søknader – SHARP.

#### DEL

SHARP – en SHARed Prover – tar transaksjoner fra flere separate apper og beviser dem alle i ett enkelt STARK-bevis. Apper kombinerer sine satser på transaksjoner, fyller opp kapasiteten til en STARK-prool raskere. Transaksjonene behandles med bedret rate og forsinkelse. Neste forsider: rekursive alternativer, men ikke bare for noen hardkodet logikk, men snarere for**generell beregning**.

For å forstå den fulle nytten av rekursiv påvisning er det verdt å forstå litt mer om hvordan (ikke kursiv) forsøk ble utført ved SHARP inntil nå. Tegning 1 viser en typisk ikke-rekursiv flyt:

![Tegning 1: En typisk ikke-rekursiv flyt](/assets/recursive_starks_01.png "Tegning 1: En typisk ikke-rekursiv flyt")

Her kommer utsagn over tid. Når en bestemt terskel (eller tid) nås, genereres det en stor kombinert erklæring (Cr.k.a Train). Denne samlede erklæringen bevises bare når alle de enkelte erklæringene er mottatt. Bevisstgjøringen tar lang tid (omtrent den tiden det tar å dokumentere hver enkelt utsagn.

Det å sørge for ekstremt store utsagn er eventuelt begrenset av tilgjengelige beregningsressurser, for eksempel hukommelse. Før tilbakefall var dette effektivt den begrensende skalabarrieren for STARK-manifestasjonen.

### Hva skjer med rekursiv rekruttering?

Når lagene inneholder STARK, er tiden det tar å dokumentere erklæringen grovt lineært så lang tid den tar å gjennomføre påstanden. I tillegg, hvis en projeksjon av erklæringen tar T-tid, så verifiseres at beviset tar tilnærmet log tid (T), som typisk kalles "logaritmisk trykk". Med andre ord, med STARKer bruker du mye mindre tid på å verifisere erklæringen enn å beregne den.

[Cairo](https://starkware.co/cairo/)tillater å uttrykke generelle beregningsanvisninger som kan bevises av STARK-demonstrasjoner og verifiseres av de tilsvarende STARK-verifiserere.

Her er muligheten til å utføre[rekursjon](https://en.wikipedia.org/wiki/Recursion)vist i: på samme måte som vi skriver et Kairo-program som viser at det er riktig med tusenvis av transaksjoner, vi kan også skrive et Cairo program som bekrefter flere STARK-bevis. Vi kan generere en enkel dokumentasjon som handler om gyldigheten av flere "opp-stream"-bevis. Det er dette vi kaller rekursiv behandling.

På grunn av logaritmisk kompresjon og grov lineær projeksjonstid. det tar relativt kort tid (forventet å være noen få minutter i nær fremtid å verifisere et STARK-bevis).

Ved gjennomføring av gjentagende aktivitet, kan SHARP bevise utsagn når de blir ankomst. Deres lamper kan flettes sammen på nytt og igjen i rekursive bevis i forskjellige mønstre, på et visst tidspunkt vil den resulterende beviset gjennomgå en verifikasjonskontrakt i kjettingen. Et typisk mønster er avbildet under tegning 2:

![Tegning 2: En typisk rekursiv gjennomstrømning.](/assets/recursive_starks_02.png "Tegning 2: En typisk rekursiv gjennomstrømning.")

### Umiddelbare fordeler ved rekursiv anskaffelse

#### Redusert kostnader

Ved batet får vi "kompresjon" med flere prober til én, som innebærer lavere kostnader for verifikasjon av elektroniske kontroller per transaksjon (der hver erklæring kan omfatte mange transaksjoner).

Ved rekursjon barriere mot beregnede ressurser (f.eks. Minne) at et begrenset antall bevis fram til nå elimineres, siden hver begrensede størrelsesbestemmelse kan påvises separat. Ved rekursjon er derfor den effektive Trainstørrelsen nesten ubegrenset, og kostnaden per transaksjon kan reduseres på grunn av ordre.

I praksis avhenger reduksjonen av akseptabel forsinkelse (og raten på hvilke transaksjoner som kommer til). I tillegg, siden hvert enkelt bevis typisk også følges av noe utgang, for eksempel data i kjeden. det er grenser for hvor mye data som kan skrives på kjeden, sammen med én bevis. Likevel blir kostnaden redusert gjennom en størrelsesorden og enda bedre tredoblet.

#### Redusert latens

I motsatt retning reduserer bestemmelsesmønsteret holdningen av de store togene. Dette er resultatet av to faktorer:

1. Innkommende uttalelser kan påvises**i parallell**(i motsetning til å påvise en svært stor sammenslått setning).
2. Det er ikke behov for å vente til den siste erklæringen i toget kommer i gang med innspillingen. Tvert imot kan bevisene kombineres med nye utsagn slik de kommer. Det betyr at sistnevnte erklæring går inn i en tog, er omtrent tiden det tar å bevise at den siste erklæringen pluss tiden det tar å vise en rekursiv Verifier-erklæring (som deltar i alle disse utsagnene som allerede har «onboarded» denne bestemte toget).

Vi utvikler og optimaliserer målheten av å påvise gjentakende Viser-påstand. Det regner vi med å nå noen minutter i løpet av noen få måneder. Derfor kan en svært effektiv SHARP tilby latenser fra noen minutter til noen få timer, avhengig av handelslaget eller on-chain kostnadene per transaksjon. Dette representerer en meningsfull forbedring til SHARP.

#### Fasiliterer L3

Utviklingen av erklæringen fra Recursive Verifier i Cairo åpner også for å sende bevis til StarkNet. da denne erklæringen kan bakes inn i en smartkontrakt med StarkNet Det gjør det mulig å bygge[L3 distribusjoner oppå den offentlige StarkNet](https://medium.com/starkware/fractal-scaling-from-l2-to-l3-7fe238ecfb4f)(et L2-nettverk).

Det rekursive mønsteret gjelder også for aggregering av stammer fra L3, som skal verifiseres ved et enkelt bevis på L2. Derfor oppnås også hyperskalering der.

### Flere subtilt fordeler

#### Gjentakelse av søknad

Tilbakefall gir ytterligere muligheter for plattformer og søknader som ønsker å skalere kostnadene og ytelsen ytterligere.

Hver STARK dokumentasjon på gyldigheten av en setning anvendt på noen inndata kjent som "offentlige inngang" (eller "program output" på Kairo-vilkår). Konseptuelt komprimerer STARK rekursiv to bevis med*to*inndata i*ett*bevis med to innganger. Med andre ord, mens antall bevis reduseres, blir antall innsatsfaktorer holdt konstant. Disse innspillene brukes vanligvis av et program for å oppdatere en viss tilstand på L1 (e. for å oppdatere roten til en tilstand eller utføre tilbaketrekking fra kjeden).

Hvis rekursive påstanden tillates å være*programoppmerksom*, dvs. kjenner igjen semantikken til selve applikasjonen: det kan begge komprimere to projeksjoner i én*samt*kombinere de to innspillene i en. Den resulterende erklæringen forholder seg til gyldigheten av den innlagte kombinasjonen basert på semantikk, Dermed vil navnet som vender gjentagende behandling (se tegning 3 for eksempel)..

![Tegning 3: Eksempel på realgjentakelse](/assets/recursive_starks_03.png "Tegning 3: Eksempel på realgjentakelse")

Her Statement 1 attester til en statlig oppdatering fra A til B og Statement 2 attester til en oppdatering fra B til C. Dato for utsagn 1 og egenerklæring 2 kan kombineres i en tredje utsagn, der man kan bekrefte den direkte oppdateringen fra A til C. Ved å anvende lignende logikk rekursivt, kan man redusere kostnadene ved statlig oppdatering svært betydelig opp til planhetskravet.

Et annet viktig eksempel på programgjentakelse er å komprimere opprullingsdata fra flere bevis. For eksempel for en validitetsrulling som StarkNet, hver oppdatering av lagringsplass på L2 tas også med som overføringsdata fra L1 for å sikre datatilgjengelighet. Imidlertid er det ikke nødvendig å sende flere oppdateringer for samme lagringselement, siden bare den endelige verdien av transaksjoner godkjent av den verifiserte dokumentasjonen er nødvendig for datatilgjengelighet. Denne optimaliseringen er allerede utført i en*enkel*StarkNet blokk. Ved å generere et bevis per blokk, kan imidlertid Applicative Recursion comprimere denne opprullingsdataene over*flere*L2-blokker. Dette kan føre til betydelig kostnadsreduksjon, og muliggjør kortere blokkintervaller på L2, uten å hindre skalerbarheten til L1 oppdateringer.

Verdt notat: Reaksjonen i søknaden kan kombineres med program-agnostisk rekursjon som beskrevet tidligere. Disse to optimaliseringene er uavhengige.

#### Redusert leverandørers kompleks kapasitet

Kompleksiteten til STARK-verifiserende er avhengig av hvilken type utsagn den er utformet for å verifisere. Spesielt for Kairo-påstander er kompleksiteten til verifiserer avhengig av de bestemte elementene som er tillatt i Kairo-språket, og nærmere bestemt brukes de støttede bygningsdelene (hvis vi bruker CPU metafor Cairo, som deretter er innebygde ekvivalente med mikrokretser i et CPU: beregninger som utføres så ofte at de krever sin egne optimaliserte beregning).

Kairo-språket utvikler seg fortsatt og tilbyr mer og mer nyttige bebygde byggelser. På den andre siden krever kun den rekursive viseren å bruke en liten undergruppe av disse innebygde enhetene. Derfor kan en rekursiv SHARP vellykket støtte alle uttalelser i Cairo ved å støtte hele språket i de rekursive bekreftelsene. Spesielt trenger L1 Solidity Verifier bare verifisere rekursive bevis, og dermed kan være begrenset til et mer stabilt delsett av språket Cairo : L1 Verifier trenger ikke holde følge med det nyeste og største innebygde anlegget. Verifikasjon av kontinuerlige komplekse utsagn er med andre ord hevdet til L2, og etterlater L1 Verifier for å verifisere enklere og mer stabile påstander.

#### Redusert kaldstyrt footprint

Før rekurjon, evnen til å tilføre flere instruksjoner til å utføre én verifikasjon var begrenset av den største størrelsen på erklæringen, som kunne bevises på tilgjengelige beregningstilfeller (og når det kunne ta å generere slike bevis).

Ved tilbakefall er det ikke lenger nødvendig å vise så ekstremt store utsagn. Som et resultat mindre, rimeligere og mer tilgjengelige beregningstilfeller kan brukes (selv om det kan være behov for flere av de store monolittoperatørene). Dermed kan bruken av behovsstyrte forekomster i mer fysiske og virtuelle miljøer enn det som var mulig tidligere.

### Summary

I tillegg tilbyr reformer for generell beregning nå flere produksjonssystemer, inkludert StarkNet, på Mainnet Ethereum.

Fordelene med tilbakefall vil gradvis bli realisert, ettersom det fortsatt gir rom for nye forbedringer. og den vil snart levere hyperskala, kutte gassgebyrene og forbedre latensen ved å låse opp potensialet til parallellalisering.

Det vil gi betydelige kostnads- og forsinkelsesfordeler med seg, sammen med nye muligheter som for eksempel L3 og applicative-rekursjon. Det er forventet at ytterligere optimalisering av den gjentakende Viseren pågår og enda bedre ytelse og kostnadsfordeler vil bli gitt over tid.



**Gidi Kaempfer**, leder for Core Engineering, StarkWare