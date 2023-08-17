### TL;DR

* **Cairo 1.0 er open source! Dette er kun det første skridt mod open-sourcing StarkNet stack.**
* Vi præsenterer nu et[første kig](https://github.com/starkware-libs/cairo)ind i Cairo 1.0 compileren. Du kan nu begynde at eksperimentere med grundlæggende Cairo 1,0-kode
* Cairo 1.0 i sin kerne er meget lig Rust
* Overvej det en første smag, ikke en udgivelse. Der er flere forbedringer på vej. Den første version af compileren er planlagt til begyndelsen af Q1 næste år.
* Cairo 1.0 understøttes ikke på StarkNet, endnu. Det vil blive støttet på StarkNet i første kvartal næste år.

### Introduktion

I 2020 har vi udgivet[Cairo](https://eprint.iacr.org/2021/1063.pdf), et Turing-komplet programmeringssprog, der understøtter verificerbar beregning. Kairo startede som et samlesprog og blev gradvist mere ekspressiv. For to måneder siden annoncerede vi[Cairo 1,0](https://medium.com/starkware/cairo-1-0-aa96eefb19a0), som behandler nogle store problemer i den aktuelle situation:

* Mens Cairos syntaks har set betydelige forbedringer siden sin begyndelse, kan udvikleroplevelsen altid forbedres. Cairo 1.0 er et rust-inspireret fuldt indtastet sprog, hvilket gør det meget lettere at skrive den samme logik og mindre fejlbehæftet.
* Den eksisterende compiler er udviklet i samme repo som StarkNet selv, hvilket gør det sværere at spore sprogændringer. Den Cairo 1.0 compiler er skrevet fra bunden op, giver mulighed for hurtigere funktion udvikling og for mere fællesskab involvering.
* Alle beregninger kan nu bevises. I øjeblikket, et Cairo program kan mislykkes med specifikke input (fx ved at nå en \`hævde 1=2\` instruktion i nogle beregningsgrene, hvilket gør beregningen unprovable. Med Cairo 1.0, programmer er bevisligt i alle mulige gren. Dette er især vigtigt for DOS beskyttelse og censur modstand i StarkNet.

I dag markerer vi den første milepæl i at nå ovenstående mål, når vi flytter udviklingen til en offentlig repo, og**open source Cairo 1. !**Udviklere kan nu, for første gang, kompilere og udføre simple Cairo 1.0 programmer. Dette giver udviklere mulighed for at begynde at eksperimentere med Cairo 1. og gradvist vænne sig til de nye funktioner, selv om de i denne fase, de ikke kan gennemføre det på StarkNet endnu.

### Aktuelle kapaciteter

I øjeblikket kan du kompilere og udføre grundlæggende indfødte Cairo-programmer. Mens mange af de syntaks/sprogforbedringer stadig er i gang, giver dette mulighed for at vænne sig til Cairo 1.0 og nyde opgraderinger, som de kommer.

**Bemærk, at skrivning af StarkNet kontrakter stadig er uunderstøttet.**StarkNet syntaks (lagervariabler / opkaldskontrakter / begivenheder og andre systemopkald) vil blive tilføjet i de kommende uger.

### Eksempler på kode

For at illustrere forskellene mellem den gamle syntaks og Kairo 1. , Vi har valgt at vise et par forskellige implementeringer / varianter af at finde den n'th Fibonacci nummer.

### Eksempel I: Match udtryk

I Cairo 1.0, kan du bruge rust-lignende[match](https://doc.rust-lang.org/rust-by-example/flow_control/match.html?highlight=match#match)udtryk. Ikke længere vil du frygte, hvis/ellers udsagn, der kan forårsage henvisning tilbagekaldelse!

![](/assets/code01.png)

### Eksempel II: Datatyper

Mens Cairo 0 arbejdede med filt og pointers, har vi i Cairo 1.0 indbygget adgang til komplekse datatyper på sproget. Nedenfor kan du finde et eksempel, der genererer en række af de første n Fibonacci-numre.

![](/assets/code02.png)

Som du kan se ovenfor, i stedet for at arbejde direkte med hukommelse pointers, vi bruger `Array::<felt>\` type og funktionen \`array_append\`.

### Eksempel III: Bygninger & ejerforhold

Følgende kode illustrerer brugen af strukturer i Cairo 1.0.

![](/assets/code03.png)

> Følgende afsnit er beregnet til rustaceanerne blandt publikum. Cairo 1.0 styrer hukommelsen på samme måde som rust. Den anvender navnlig begreberne[ejerskab og låntagning](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html). Således ved at få adgang til et medlem af \`FibResult\` struct (i dette tilfælde, \`resultat. alue\`), vi har flyttet \`result\`, hvilket betyder, at medmindre FibResult kan kopieres, kan vi ikke få adgang til det igen i \`result.index\`. For at overvinde dette, tilføjer vi \`#\[derive(Copy)]\` attribut for \`FibResult\` typen. I fremtidige versioner, vil vi tilføje auto-dekonstruktion for konstruktioner. Dette vil gøre det muligt at flytte ejerskabet til et medlem uden at røre ved de andre (især ovenstående kode ville kompilere, selvom \`FibResult\` ikke har kopi-attributten).

**Bemærk især, at Cairo 1.0 er helt abstraherende væk den oprindelige (ingen deterministiske read-only) hukommelse model af Cairo.**

## Eksempel IV: Fejludbredelse

Den følgende kode beregner n'th Fibonacci nummer, men i modsætning til de tidligere eksempler, alle input er af typen uint128. Bemærk, at dette løser et stort smertepunkt for håndtering af uints i Kairo 0. Her er uint128 (og i fremtiden uint256) hjemmehørende typer.

![](/assets/0_s8bhjf_ade3carmi.png)

Tilføjelsen af to 128 bit heltal kan forårsage et overløb. Ovenstående kode bruger[Option enum](https://doc.rust-lang.org/rust-by-example/std/option.html)og[spørgsmålsoperatøren](https://doc.rust-lang.org/rust-by-example/std/result/question_mark.html)til at håndtere tilfælde af overløb i en af de mellemliggende tilføjelser. Sammenlign dette med den[aktuelle](https://github.com/starkware-libs/cairo-lang/blob/9889fbd522edc5eff603356e1912e20642ae20af/src/starkware/cairo/common/uint256.cairo#L31)uint256 tilføjelsessyntaks, hvor \`unit256_check\` funktionen skulle kaldes for at garantere lydstyrken. Desuden i den nærmeste fremtid vi vil tilføje begrebet \`panik\` til sproget (svarende til[panik](https://doc.rust-lang.org/rust-by-example/std/panic.html)makro i rust), og enkle fejl som addition overløb vil være uncatchable og formeres automatisk, hvilket betyder, at du ikke behøver at bruge \`Option\` eller \`? ` når du tilføjer uints.

## Prøv det selv

Du kan nu kompilere og køre aktuelt understøttede Cairo 1.0-programmer! Følg disse[instruktioner](https://github.com/starkware-libs/cairo/tree/main/crates/cairo-lang-runner)om, hvordan du bruger \`cairo-run\` kommandoen. Bemærk, at under hætten,[Rust Cairo VM](https://github.com/lambdaclass/cairo-rs), udviklet af[Lambdaclass](https://lambdaclass.com/), anvendes til udførelse.

Du kan finde flere eksempler til at hjælpe dig i gang[her](https://github.com/starkware-libs/cairo2/tree/main/examples). Bemærk, at dette kun er den første kig ind i compiler udvikling; i de kommende uger, vil vi forbedre CLI sammen med compileren.

## Fremtidige Planer

Fokus for den første version af Compileren, som er planlagt til begyndelsen af 1. kvartal, understøtter alle eksisterende funktionalitet af StarkNet i Cairo 1.0. Derudover arbejder vi på at udvide funktionerne i Cairo 1.0 compiler. I de kommende uger kan du forvente:

* StarkNet kapaciteter — skrive smarte kontrakter og bruge systemopkald.
* Løkker
* Nye biblioteks funktioner
* Forbedret sprogserver
* Et indfødt begreb om StarkNet gas

Sørg for at holde sig tunet og spore compiler fremskridt!