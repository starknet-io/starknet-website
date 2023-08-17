### TL;DR

* **Kairo 1.0 er åpen kildekode! Dette er bare det første steget mot åpen kildekodestasjon av StarkNet Stack.**
* Vi presenterer nå en[første gang](https://github.com/starkware-libs/cairo)på Kairo 1.0 kompileren. Nå kan du prøve å ta et forsøk med grunnleggende Cairo 1.0-kode
* Cairo 1.0 i sin kjerne er veldig lik Rust
* Vurder det en førstesmak, ikke et friløs. Flere forbedringer er på vei. Den første versjonen av kompilatoren er planlagt tidlig 1. kvartal neste år.
* Cairo 1.0 støttes ikke på StarkNet, ennå. Det vil bli støttet på StarkNet i 1. kvartal neste år.

### Introduksjon

I 2020 utgitt vi[Cairo](https://eprint.iacr.org/2021/1063.pdf), et skytekomplett programmeringsspråk som støtter verifiserbar datamaskin. Cairo startet som et forsamlingsspråk og ble gradvis mer ekspressiv. For to måneder siden annonserte vi[Cairo 1.0](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)som tar for seg noen større problemer i nåværende situasjon:

* Selv om aksjeeiers syntaks har vært en betydelig forbedring siden oppstarten kan utvikleren stadig bli bedre. Cairo 1.0 er et rust-inspirert fullt typet språk, noe som gjør det samme logikken mye enklere og mindre feilpron.
* Komileren er utviklet i samme område som StarkNet selv, og gjør det vanskeligere å spore endringer i språket. Kairo 1.0 kompilatoren er skrevet fra grunnen opp og åpner for en raskere funksjonsutvikling og mer samfunnsengasjement.
* Hver beregning er nå beviste. For tiden kan et Kairo-program mislykkes med bestemte inndata (f.eks. ved å nå en \`hevde 1=2\`-instruksjon i noen beregningsgrener) som gjør det mulig å beregne databehandlingen som ikke er protestert. Med Cairo 1.0, er programmer bevart i alle mulige grener. Dette er spesielt viktig for beskyttelse av og sensurering av DOS i StarkNet.

I dag markerer vi den første milepælen i å nå målene ovenfor når vi tar utviklingen til et offentlig repo. og**åpen kildekode Cairo 1.**Utviklere kan nå for første gang, kompilere og utføre enkle Cairo 1.0 programmer. Dermed kan utviklerne begynne å eksperimentere med Cairo 1. og blir gradvis vant til de nye funksjonene, selv om de i denne fasen ikke kan implementere på StarkNet akkurat ennå.

### Gjeldende kompetanse

Du kan for tiden utarbeide og utføre grunnleggende morsomme Kairo-programmer. Selv om mange av forbedringen av syntaksen/språk fortsatt er i gang, tillater dette å bli brukt til Cairo 1.0 og nyt med oppgraderinger som kommer.

**Merk at skriving av StarkNet kontrakter fortsatt ikke støttes.**StarkNet syntaks (variabler for lagring / anropskontrakter / hendelser og andre systemsamtaler) vil bli lagt til i ukene som kommer.

### Eksempler på kode

For å illustrere forskjellene mellom gammel syntaks og Kairo 1. , vi har valgt å vise noen forskjellige implementasjoner/smak av å finne det ni-Fibonacci nummeret.

### Eksempel I: Samsvar uttrykk

I Cairo 1.0, kan du bruke rust-like[match](https://doc.rust-lang.org/rust-by-example/flow_control/match.html?highlight=match#match)uttrykk. Ikke lenger vil du frykte hvis/andre påstander som kan forårsake referansegjengivelse!

![](/assets/code01.png)

### Eksempel II: Datatyper

Mens Cairo 0 jobbet med felter og pointere, har vi i Cairo 1.0 tilgang til komplekse datatyper på språket. Nedenfor kan du finne et eksempel som genererer en liste med de første n Fibonacci-tall.

![](/assets/code02.png)

Som du kan se ovenfor, i stedet for å arbeide direkte med minnepointere, bruker vi `Array::<felt>\` type og \`array_append\`-funksjonen.

### Eksempel III: Bærer & eierskap

Følgende kode illustrerer bruken av konstruksjoner i Kairo 1.0.

![](/assets/code03.png)

> Følgende avsnitt er ment for Rustaceans blant deltakerne. Cairo 1.0 behandler minne på liknende måte som rust. Spesielt bruker den begrepene[eierskap og låne](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html). Ved å gå til et medlem av \`FibResult\` er det derfor dekkende (i dette tilfellet,\`result. alue\`), vi har flyttet \`result\`, noe som betyr at med mindre FibResult er kopierbar, får vi ikke tilgang til det igjen i \`result.index\`. For å overkomme dette, legger vi til \`#\[derive(Copy)]\` attributtet av \`FibResult\` typen. I fremtidige versjoner vil vi legge til automatisk dekonstruksjon for konstruksjoner. Dette gjør det mulig å flytte eierskap til ett medlem uten å berøre de andre (særlig koden ovenfor ville kompilere selv om \`FibResult\` ikke hadde attributtet for kopi).

**Vær spesielt oppmerksom på at Cairo 1.0 er fullstendig mishandlet fra originalen (én bestemt lese) minnemodell for Cairo.**

## Eksempel IV: propagering av feil

Følgende koder beregnes det niende Fibonacci-nummeret, men i motsetning til det forrige eksemplet, er alle innspillene av typen uint128. Merk at dette løser et stort smertepunkt med håndtering i Kairo 0. Her er uint128 (og i fremtiden uint256) av typer naturlig reise.

![](/assets/0_s8bhjf_ade3carmi.png)

Det er to 128 bit-heltall som kan føre til overflyt. Koden over bruker[Alternativ enum](https://doc.rust-lang.org/rust-by-example/std/option.html)og[spørsmålsmerkeoperatør](https://doc.rust-lang.org/rust-by-example/std/result/question_mark.html)for å håndtere ved overflyt i et av de mellomliggende tillegg. Sammenlign dette med[gjeldende](https://github.com/starkware-libs/cairo-lang/blob/9889fbd522edc5eff603356e1912e20642ae20af/src/starkware/cairo/common/uint256.cairo#L31)uint256 tilleggs syntaks, der \`unit256_check\` funksjonen måtte kalles for å garantere lydhet. I tillegg i nær framtid vi vil legge til konseptet med \`panic\` til språket (lignende[panie](https://doc.rust-lang.org/rust-by-example/std/panic.html)makro i rust), og enkle feil som addisjon overflyt vil være ukyndig og propagert automatisk, noe som betyr at du ikke trenger å bruke \`Valg\` eller \`? ` når du legger til uints.

## Prøv selv

Du kan nå kompilere og kjøre nå støttede Cairo 1.0 programmer! Følg[-instruksjonene](https://github.com/starkware-libs/cairo/tree/main/crates/cairo-lang-runner)om hvordan du bruker \`cairo-run\` kommandoen. Merk at under hooden,[Rust Cairo VM](https://github.com/lambdaclass/cairo-rs), utviklet av[Lambdaclass](https://lambdaclass.com/), brukes til utførelse.

Du finner flere eksempler som hjelper deg å komme i gang[her](https://github.com/starkware-libs/cairo2/tree/main/examples). Legg merke til at dette er kun det første eksemplet til komilerutvikling, og i ukene som kommer, vil vi forbedre CLI ved siden av tvangsmannen.

## Fremtidige planer

Fokuset på den første versjonen av kompilatoren, som er planlagt for tidlig Q1, støtter alle eksisterende funksjoner av StarkNet i Cairo 1.0. I tillegg jobber vi med å utvide funksjonalitetene til kompilatoren til Cairo 1.0 I de kommende ukene kan du forvente:

* StarkNetto egenskaper - skrive smartkontrakter og ved hjelp av systemsamtaler.
* Løkker
* Funksjoner for nytt bibliotek
* Forbedret språkserver
* En nativ notering av StarkNet gass

Sørg for å holde deg oppdatert og følge med på kompilaren!