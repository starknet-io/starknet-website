### TL;DR

* Validitetsruller er ikke begrænset i gennemløb på samme måde som L1s. Dette giver anledning til potentielt meget højere TPS på L2 validitetstavler.
* StarkNet ydeevne køreplan adresserer et centralt element i systemet: sequencer.
* Vi præsenterer her køreplanen for forbedringer af ydeevne:\
  — Parallelisering af Sequencer\
  — En ny rust implementering af Cairo VM\
  — Sequencer re-implementering i rust\
* Ordsprogene, som de er, er ikke flaskehalsen og kan håndtere meget mere, end de gør nu!

### Introduktion

StarkNet lanceret på Mainnet for næsten et år siden. Vi begyndte at bygge StarkNet ved at fokusere på funktionalitet. Nu flytter vi fokus til at forbedre ydeevnen med en række trin, der vil bidrage til at forbedre den StarkNet oplevelse.

I dette indlæg, forklarer vi, hvorfor der er en bred vifte af optimeringer, der kun er gældende i gyldigheden rollups, og vi vil dele vores plan om at gennemføre disse skridt på StarkNet. Nogle af disse trin er allerede implementeret i StarkNet Alpha 0.10.2, som blev udgivet på Testnet den 16. november og i går på Mainnet. Men før vi diskuterer løsningerne, lad os gennemgå begrænsningerne og deres årsag.

### Blokbegrænsninger: validitetslipper i forhold til L1

En potentiel tilgang til at øge blokkædens skalerbarhed og øge TPS ville være at ophæve blokbegrænsningerne (med hensyn til gas/størrelse), samtidig med at blokens tidskonstant. Dette ville kræve en større indsats fra blokproducenterne (validatorer på L1, sequencere på L2) og dermed kræver en mere effektiv gennemførelse af disse komponenter. Til dette formål flytter vi nu fokus til StarkNet sequencer optimeringer, som vi beskriver mere detaljeret i de følgende afsnit.

Her opstår der et naturligt spørgsmål. Hvorfor er sequencer optimeringer begrænset til validitet rollups, det er, hvorfor kan vi ikke gennemføre de samme forbedringer på L1 og undgå kompleksiteten af gyldigheden ruller helt? I næste afsnit hævder vi, at der er en grundlæggende forskel mellem de to, giver mulighed for en bred vifte af optimeringer på L2, der ikke gælder for L1.

### Hvorfor er L1 gennemstrømningen begrænset?

Desværre lider en større faldgrube ved at ophæve blokbegrænsningerne for L1. Ved at øge kædens vækstrate øger vi også kravene fra hele kæden der forsøger at holde trit med den seneste tilstand. Da L1 fulde noder skal genudføre hele historikken en høj stigning i blokkens størrelse (med hensyn til gas) lægger en betydelig belastning på dem igen fører til svagere maskiner droppe ud af systemet og efterlader evnen til at køre fuld noder kun til store nok enheder. Som et resultat, brugere vil ikke være i stand til at kontrollere staten selv og deltage i netværket troværdigt.

Det giver os forståelse for, at L1-gennemstrømningen bør begrænses, så vi kan opretholde et virkelig decentraliseret og sikkert system.

### Hvorfor påvirker de samme barrierer ikke gyldigheden rollups?

**Kun når man overvejer den fulde node perspektiv ser vi den sande magt tilbydes af validitet rollups.**En L1 fuld node skal genudføre hele historikken for at sikre den nuværende stats korrekthed. StarkNet noder behøver kun at kontrollere STARK beviser, og denne verifikation tager en eksponentielt lavere mængde af beregningsmæssige ressourcer. Det er navnlig ikke nødvendigt at synkronisere fra bunden at involvere henrettelser a node may receive a dump of the current state from its peers and only verify via a STARK proof that this state is valid. (Automatic Copy) Dette giver os mulighed for at øge nettets gennemløb uden at øge kravene fra hele knudepunktet.

Vi konkluderer derfor, at L2 sequencer er underlagt et helt spektrum af optimeringer, der ikke er mulige på en L1.

### Ydeevne køreplan fremad

I de næste afsnit, vi diskutere, hvilke af dem der i øjeblikket er planlagt til StarkNet sequencer.

### Parallelisering af Sequencer

Det første skridt på vores køreplan var at indføre parallelisering til transaktionen udførelse. Dette blev indført i StarkNet alpha 0.10.2, som blev frigivet i går på Mainnet. Vi dykker nu ned i, hvad parallelisering er (dette er en semi-teknisk sektion, at fortsætte på køreplanen, hoppe til næste afsnit).

Så hvad betyder “transaktion parallelisering” ? Det er umuligt at gennemføre en sideløbende blok af transaktioner, da forskellige transaktioner kan være afhængige. Dette er illustreret i følgende eksempel. Overvej en blok med tre transaktioner fra samme bruger:

* Transaktion A: swap USDC til ETH
* Transaktion B: Betal ETH for en NFT
* Transaktion C: swap-USDT til BTC

Det er klart, at Tx A skal ske før Tx B, men Tx C er helt uafhængig af begge og kan udføres parallelt. Hvis hver transaktion kræver 1 sekund til at udføre, så blokken produktionstid kan reduceres fra 3 sekunder til 2 sekunder ved at indføre parallelisering.

Problemets kerne er, at vi ikke kender transaktionernes afhængighed på forhånd. I praksis, kun når vi udfører transaktion B fra vores eksempel, kan vi se, at det afhænger af ændringer foretaget af transaktion A. Mere formelt følger afhængigheden af, at transaktion B læser fra lagerceller, som transaktion A har skrevet til. Vi kan tænke på transaktionerne som en afhængighedsgraf, hvor der er en kant fra transaktion A til transaktion B iff A skriver til en lagercelle, der læses af B, og skal således udføres før B. Følgende tal viser et eksempel på en sådan afhængighedsgraf:

![](https://miro.medium.com/max/641/0*I-qGgxdJJmqmgZWM)

I ovenstående eksempel kan hver kolonne udføres parallelt, og dette er den optimale ordning (mens naivt, vi ville have udført transaktioner 1-9 sekventielt).

For at overvinde det faktum, at afhængighedsgrafen ikke er kendt på forhånd, introducerer vi***optimistisk parallelisering***, i ånd af[BLOCK-STM](https://malkhi.com/posts/2022/04/block-stm/)udviklet af Aptos Labs, til StarkNet sequencer. Under dette paradigme forsøger vi optimistisk at køre transaktioner parallelt og re-eksekverer ved at finde en kollision. For eksempel kan vi udføre transaktioner 1-4 fra figur 1 parallelt, kun for at finde ud af, at Tx4 afhænger af Tx1. Derfor var dens henrettelse ubrugelig (vi kørte det i forhold til den samme tilstand vi kørte Tx1 imod, mens vi skulle have kørt det mod den stat, der er resultatet af anvendelsen af Tx1). I så fald vil vi genudføre Tx4.

Bemærk, at vi kan tilføje mange optimeringer på toppen af optimistisk parallelisering. I stedet for naivt at vente på, at hver henrettelse afsluttes, kan vi f.eks. afbryde en henrettelse, i det øjeblik vi finder en afhængighed, der annullerer den.

Et andet eksempel er at optimere valget af hvilke transaktioner at genudføre. Antag, at en blok, der består af alle transaktioner fra figur 1 er ført ind i en sequencer med fem CPU kerner. Først forsøger vi at udføre transaktioner 1-5 parallelt. Hvis rækkefølgen af færdiggørelsen var Tx2, Tx3, Tx4, Tx1, og endelig Tx5, så vil vi finde afhængigheden Tx1→Tx4 først efter Tx4 allerede blev udført — hvilket indikerer, at det skal re-eksekveres. Naively, vi måske ønsker at genudføre Tx5 så godt, da det kan opføre sig anderledes givet den nye udførelse af Tx4. Men i stedet for blot at genudføre alle transaktioner efter den nu ugyldige Tx4, vi kan krydse afhængighedsgrafen konstrueret fra de transaktioner, hvis udførelse allerede er afsluttet, og kun re-udføre transaktioner, der afhang af Tx4.

### En ny Rust implementering til Cairo-VM

Smart kontrakter i StarkNet er skrevet i Cairo og udføres inde i Cairo-VM, som specifikation vises i[Cairo papir](https://eprint.iacr.org/2021/1063.pdf). I øjeblikket bruger sequenceren en[python-implementering](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/cairo/lang/vm)af Cairo-VM. For at optimere VM implementering ydeevne, har vi lanceret en indsats for at omskrive VM i rust. Takket være det store arbejde[Lambdaclass](https://lambdaclass.com/), hvem er nu en uvurderlig team i StarkNet økosystem, denne indsats er snart ved at blive til virkelighed.

VM ‘ s rust implementering,[cairo-rs](https://github.com/lambdaclass/cairo-rs), kan nu udføre indfødte Kairo kode. Det næste skridt er at håndtere smart-kontrakter udførelse og integrationer med den pytoniske sequencer. Når først den er integreret med cairo-rs, forventes sequencerens præstation at forbedre sig betydeligt.

### Genimplementering af sequencer i Rust

Vores skift fra python til rust for at forbedre ydeevnen er ikke begrænset til Cairo VM. Sammen med de forbedringer, der er nævnt ovenfor, planlægger vi at omskrive sequencer fra bunden i rust. Ud over Rusts interne fordele, dette giver mulighed for andre optimeringer til sequencer. Oplister et par, kan vi nyde fordelene ved cairo-rs uden overhead af python-rust kommunikation, og vi kan helt redesigne den måde, staten er gemt og tilgået (hvilket i dag er baseret på[Patricia-Trie struktur](https://docs.starknet.io/documentation/develop/State/starknet-state/#state_commitment)).

### Hvad med provers?

Gennem hele dette indlæg, vi nævnte ikke den måske mest berømte element af gyldighed ruller — den prøve. Man kunne forestille sig at være den velsagtens mest sofistikerede komponent i arkitekturen, det bør være flaskehalsen og dermed fokus for optimering. Interessant, det er de mere “standard” komponenter, der nu er flaskehalsen af StarkNet. I dag, især med[rekursive beviser](https://medium.com/starkware/recursive-starks-78f8dd401025), kan vi passe en masse flere transaktioner end den aktuelle trafik på Testnet/Mainnet i et bevis. Faktisk, i dag, StarkNet blokke er bevist sammen med StarkEx transaktioner, hvor sidstnævnte undertiden kan pådrage sig flere hundrede tusinde NFT mønter.

### Summary

Parallelisering, Rust, og meget mere - hold jer for en forbedret TPS i de kommende StarkNet versioner.