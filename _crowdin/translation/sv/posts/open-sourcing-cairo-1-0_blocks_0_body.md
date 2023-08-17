### TL;DR

* **Kairo 1.0 är öppen källkod! Detta är bara det första steget mot öppna inköp av StarkNet-stacken.**
* Vi presenterar nu en[första titt](https://github.com/starkware-libs/cairo)i Kairo 1.0 kompilatorn. Du kan nu börja experimentera med grundläggande Kairo 1.0 kod
* Kairo 1,0 i dess kärna är mycket lik Rust
* Betrakta det en första smak, inte en release. Fler förbättringar är på väg. Den första versionen av kompilatorn är planerad till början av Q1 nästa år.
* Cairo 1.0 stöds inte på StarkNet ännu. Det kommer att stödjas på StarkNet i Q1 nästa år.

### Introduktion

År 2020 släppte vi[Kairo](https://eprint.iacr.org/2021/1063.pdf), ett Turing-komplett programmeringsspråk som stöder verifierbar beräkning. Kairo började som monteringsspråk och blev gradvis mer uttrycksfull. För två månader sedan meddelade vi[Kairo 1.0](https://medium.com/starkware/cairo-1-0-aa96eefb19a0), som tar upp några stora problem i den aktuella situationen:

* Medan Cairos syntax har sett betydande förbättringar sedan starten, kan utvecklaren erfarenhet alltid förbättra. Kairo 1.0 är ett rostiga språk som är fullt skrivet, vilket gör att skriva samma logik mycket enklare och mindre felbenägen.
* Den befintliga kompilatorn är utvecklad i samma repo som StarkNet själv, vilket gör det svårare att spåra språkförändringar. Kompilatorn Cairo 1.0 är skriven från grunden och möjliggör snabbare utveckling av funktioner och för mer delaktighet i samhället.
* Varje beräkning är nu bevisbar. För närvarande kan ett Kairo-program misslyckas med specifika ingångar (t.ex. genom att nå en \`assert 1=2\` instruktion i vissa beräkningsgrenar), vilket gör beräkningen obevisbar. Med Kairo 1.0, program är bevisbara i alla möjliga grenar. Detta är särskilt viktigt för DOS skydd och censur motstånd i StarkNet.

I dag markerar vi den första milstolpen i att nå ovanstående mål när vi flyttar utvecklingen till ett offentligt repo, och**öppen källkod Kairo 1. !**Utvecklare kan nu för första gången kompilera och köra enkla program i Kairo 1.0. Detta gör det möjligt för utvecklare att börja experimentera med Kairo 1. och gradvis vänja sig vid de nya funktionerna, även om de i detta skede inte kan genomföra det på StarkNet ännu.

### Nuvarande förmågor

För närvarande kan du kompilera och utföra grundläggande inhemska Kairo program. Medan många av syntax/språkförbättringarna fortfarande pågår, gör detta att du kan vänja dig vid Kairo 1.0 och njuta av uppgraderingar när de kommer.

**Notera att det fortfarande inte stöds att skriva StarkNet-avtal.**StarkNet syntax (lagringsvariabler / samtalskontrakt / händelser och andra systemsamtal) kommer att läggas till under de kommande veckorna.

### Kod exempel

För att illustrera skillnaderna mellan den gamla syntaxen och Kairo 1. , Vi har valt att visa några olika implementationer/smaker av att hitta den n'th Fibonacci nummer.

### Exempel I: Matchande uttryck

I Kairo 1.0, kan du använda rostiga[matcha](https://doc.rust-lang.org/rust-by-example/flow_control/match.html?highlight=match#match)uttryck. Du kommer inte längre att frukta om/annat påståenden som kan orsaka återkallande av referenser!

![](/assets/code01.png)

### Exempel II: Datatyper

Medan Kairo 0 arbetade med filt och pekare, har vi i Kairo 1.0 tillgång till komplexa datatyper på språket. Nedan hittar du ett exempel som genererar en rad av de första n Fibonacci nummer.

![](/assets/code02.png)

Som du kan se ovan, istället för att arbeta direkt med minnespekare, använder vi `Array::<felt>\` typ och \`array_append\`-funktionen.

### Exempel III: strukturerar & ägande

Följande kod illustrerar användningen av strukturer i Kairo 1.0.

![](/assets/code03.png)

> Följande punkt är avsedd för Rustaceans bland publiken. Kairo 1.0 hanterar minnet på ett liknande sätt som rost. I synnerhet använder den begreppen[ägande och upplåning](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html). Således, genom att komma åt en medlem av \`FibResult\` struct (i det här fallet, \`resultat. alue\`), vi har flyttat \`result\`, vilket innebär att om inte FibResult är kopierbar, kan vi inte komma åt det igen i \`result.index\`. För att övervinna detta lägger vi till attributet \`#\[derive(Copy)]\` av typen \`FibResult\`. I framtida versioner kommer vi att lägga till automatisk dekonstruktion för konstruktioner. Detta kommer att göra det möjligt att flytta äganderätten till en medlem utan att röra de andra (särskilt ovanstående kod skulle kompilera även om \`FibResult\` inte har kopieringsattributet).

**I synnerhet notera att Kairo 1.0 är helt abstrahera bort den ursprungliga (ingen deterministisk skrivskyddad) minnesmodell av Kairo.**

## Exempel IV: Felförökning

Följande kod beräknar det n'th Fibonacci nummer, men till skillnad från tidigare exempel, alla ingångar är av typen uint128. Observera att detta löser en stor smärtpunkt för hantering av uints i Kairo 0. Här är uint128 (och i framtiden uint256) infödda typer.

![](/assets/0_s8bhjf_ade3carmi.png)

Tillägget av två 128 bitars heltal kan orsaka ett överflöd. Ovanstående kod använder[alternativ enum](https://doc.rust-lang.org/rust-by-example/std/option.html)och[frågetecken-operatören](https://doc.rust-lang.org/rust-by-example/std/result/question_mark.html)för att hantera fallet med överflöd i en av de mellanliggande tilläggen. Jämför detta med[nuvarande](https://github.com/starkware-libs/cairo-lang/blob/9889fbd522edc5eff603356e1912e20642ae20af/src/starkware/cairo/common/uint256.cairo#L31)uint256 addition syntax, där funktionen \`unit256_check\` måste anropas för att garantera sundhet. Dessutom, inom den närmaste framtiden, vi kommer att lägga till begreppet \`panic\` till språket (liknande[panik](https://doc.rust-lang.org/rust-by-example/std/panic.html)makro i rosa), och enkla fel som addition overflow kommer att vara oåtkomliga och förökas automatiskt, vilket innebär att du inte behöver använda \`Option\` eller \`? ` när du lägger till uints.

## Prova själv

Du kan nu kompilera och köra för närvarande stödda Cairo 1.0-program! Följ dessa[instruktioner](https://github.com/starkware-libs/cairo/tree/main/crates/cairo-lang-runner)om hur man använder \`cairo-run\`-kommandot. Notera att under huven används[Rust Cairo VM](https://github.com/lambdaclass/cairo-rs), utvecklad av[Lambdaclass](https://lambdaclass.com/), för utförande.

Du kan hitta fler exempel som hjälper dig att komma igång[här](https://github.com/starkware-libs/cairo2/tree/main/examples). Observera att detta bara är den första titt i kompilatorn utveckling; under de kommande veckorna kommer vi att förbättra CLI tillsammans med kompilatorn.

## Framtida planer

Fokus för den första versionen av Compiler, som är planerad till tidigt Q1, stöder all befintlig funktionalitet av StarkNet i Kairo 1.0. Dessutom arbetar vi på att utöka funktionerna i Kairo 1.0 kompilatorn. Under de kommande veckorna kan du förvänta dig:

* StarkNet funktioner — skriva smarta kontrakt och använda systemsamtal.
* Loopar
* Nya biblioteksfunktioner
* Förbättrad språkserver
* En infödd föreställning om StarkNet gas

Se till att hålla ögonen öppna och spåra kompilatorn fortskrider!