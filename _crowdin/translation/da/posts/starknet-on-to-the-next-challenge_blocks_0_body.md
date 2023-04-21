### TL;DR

* Vi bygger StarkNet i trin, begyndende med at etablere**brugervenlighed**, derefter forbedre**ydeevne**, og endelig gå videre til**decentralisering**
* Vi har nået vores første mål: anvendelighed. Det betyder, at vi leverede generel beregning i en Ethereum-lignende tilstand (år før det blev troet muligt)
* Vi er nu på vej til trin 2 i vores 3-delte bygningsplan: ydeevne, med fokus på gennemløb, transaktionsomkostninger og latens.
* Næste op: Decentralisering

Blot et år efter planerne for[StarkNet](https://starknet.io/)blev først annonceret, platformen har meget god funktionalitet. Udviklerfællesskabet blomstrer ud over vores vildeste forventninger og giver en konstant flurry af nye L2 indfødte projekter.

Vores prioritet i det seneste år var netop at muliggøre dette. ved at skabe en fungerende StarkNet med et hurtigt voksende udvalg af funktioner, der gør det muligt for udviklere at dykke lige i.

De har gjort dette i store tal. Et godt barometer er download tæller for[JavaScript-biblioteket til StarkNet](https://www.starknetjs.com/): allerede på 5k siden bliver tilgængelig for 4 måneder siden.

Men mens StarkNet leverer kompression magi, vi lovede i øjeblikket, det er langt fra at være i stand til at gøre det for nok dApps med nok gennemløb, og dette kan vise sig at være en kilde til frustration for udviklere på kort sigt.

Vores kamp-testet kerneteknologi, STARK-bevise mange transaktioner og komprimere beviser, skal være forud for batching eller sekventering af transaktioner. Det er en proces, StarkWare holdet allerede har perfektioneret én gang til[StarkEx](https://starkware.co/starkex/)skaleringsmotoren, og vi arbejder i øjeblikket på at gøre det igen for behovene i StarkNet.

Nu, hvor mange af vores brugbarhedsmål er nået, vi flytter fokus for at gøre dette til vores topprioritet. Det er alle en del af vores 3-trins køreplan:**usability**, efterfulgt af netværkets**performance**og derefter**decentralisering**. Et år i, vi ønsker at give dig et kig under kølerhjelmen - en oversigt over, hvilke stykker der er på plads, og hvad der stadig er et arbejde i gang.

### Historien Så Langt

StarkNet Alpha blev udgivet til offentlige testnet i juni, og til Mainnet i november. På tidspunktet for Mainnet-implementeringen, var StarkNet allerede levere generel beregning i en Ethereum-lignende tilstand, som var bredt menes at være år væk.

Gennem hele udviklingen har vi valgt en tilgang, der først fokuserede på de vigtigste funktioner og frigivet dem, så snart de blev tilgængelige, grundlæggende at dele udviklingsprocessen med fællesskabet. StarkNet er langt fra at være funktion komplet, men selv nu, udviklere kan allerede opbygge meningsfulde og komplekse applikationer. I dag har vi hundredvis af udviklere[der bygger på StarkNet,](https://starkware.notion.site/Projects-Building-on-StarkNet-a33dee55778a4515a9be9bdae02ee682)snesevis af dApps, og mere end et dusin eksterne teams udvikler værktøjer og infrastruktur til StarkNet økosystemet.

En streng af opgraderinger har leveret mange vigtige funktioner, herunder L1<>L2 messaging, on-chain data og understøttelse af kompostering, events support, grundlæggende gebyr mekanisme, kontrakter opgraderbarhed, konto abstraktion, test rammer, udviklere værktøjer, hurtig bekræftelse, blok nummer, bloktidsstempel, support til kontokontrakter.

Udviklerfællesskabet er både dybt interesseret i StarkNet, og faktisk forme sin udvikling. Funktionerne er allerede blevet introduceret baseret på udviklerfeedback. Adoption kunne meget vel overskride stigningen i gennemstrømningen, og derfor er dette løft vores store prioritet nu.

### Næste Trin

Nu hvor vi har nået brugervenlighed er det på tide at forbedre systemets ydeevne. Systemet er i sin nuværende tilstand i stand til at støtte en begrænset gennemstrømning af transaktioner. Den måde at løse dette på er ved at forbedre udførelsen af Sequencer Node, som er StarkNet svarer til en minearbejder. Det er den “maskine”, der sekvenser transaktioner, når de er indsendt. Når dette er optimeret, vil gennemstrømningen himmelske raket.

Til dette formål analyserer vi samtidig, hvor flaskehalsene er og tager fat på dem én efter én. I øjeblikket er alle flaskehalse relateret til sekventering proces, som kommer før vi påberåber STARK-ordrer. Den kamp-testet prover-stack er klar til at støtte StarkEx-lignende gennemløb på StarkNet.

Vi forventer, at optimeringen af sequencer er en proces, der varer et par måneder, med gradvise forbedringer i hele H1/22. Vores mål er at nå frem til i begyndelsen af anden halvdel af 2022, mindst en størrelsesorden højere TPS end Ethereum, til en pris, der er mindst to størrelsesordener lavere end Ethereum’s. Og det er bare begyndelsen.

Der er god grund til, at denne optimeringsfase er nødvendig. og at StarkNet ikke blev lanceret med en færdig-optimeret sequencer: StarkNet var i stand til at opnå brugervenlighed så hurtigt, fordi vi fik en head-start. I stedet for at starte fra bunden og bygge en helt ny sequencer, brugte vi batcher fra StarkEx som en central komponent.

Det var en fantastisk måde at bygge på. Det var ikke bare levere hurtigt; det betød, at vi er sikre på, at vi bygget på robuste fundamenter. StarkEx hovedsageligt kamp-testet den centrale funktionalitet, der driver StarkNet, som det notched op hundredvis af milliarder af dollars i kumulativ handel.

[StarkEx](https://starkware.co/starkex/)er skaleringsmotoren for nogle af de mest succesfulde dApps ved hjælp af L2: dYdX (perpetual contracts), DeversiFi (spot handel og betalinger), samt for uforanderlige og sorare (NFT prægning og handel).

Men sequencer bygget til dem og andre StarkEx kunder kan kun tage StarkNet indtil videre. Hver af dem håndterer stort set den samme type transaktioner hver dag. StarkNet handler om**generel beregning**, så dens behov er åbne. Når dens sequencer tager transaktioner fra mempool, de kommer i forskellige former og størrelser. Plus, StarkNet er også et åbent netværk, hvilket betyder, at der er yderligere computerkraft overhead, der ikke er stødt på i StarkEx.

Den aktuelle udfordring, nemlig at optimere sequencer til disse nye behov, er en betydelig opgave, men vi har en stærk forståelse af den nødvendige rute på grundlag af vores succesfulde StarkEx-udvikling.

### Næste Op: Decentralisering

StarkNet skal være et fuldt decentraliseret tilladelsesfrit netværk, komplet med ledervalg og styringsmekanismer. Opnåelse af dette vil blive vores primære fokus, når gennemløb skyraketter og omkostningsfald, og vi håber at få en første decentraliseret version inden udgangen af 2022. Vi forventer offentligt at dele vores decentraliseringsplan i de kommende måneder.

Ligesom den nuværende begrænsede gennemstrømning repræsenterer en midlertidig fase i StarkNets udvikling, det nuværende niveau af StarkWare engagement er midlertidig også. Vi ser os selv som en stilladser af slags, der tjener en vigtig funktion i byggefasen, men er rullet tilbage i rette tid.

Fuld nodeudvikling, et spændende første skridt i retning af decentralisering, er allerede i gang. Fuld noder vil gøre det muligt for nogen at holde og kontrollere tilstanden af netværket lokalt, holde styr på præcis, hvad der sker. Tre hold —*Erigon, Nethermind and Equilibrium*— udvikler fulde knudepunkter, og potentielt flere vil begynde udviklingen i fremtiden.

I en parallel udvikling er der forberedelser på vej til at åbne sekventering og bevise software til offentligheden. Alle vil være i stand til at deltage som en sequencer eller en prover på StarkNet.

En struktur vil blive udviklet for at tilskynde folk til at blive involveret, hvilket vil omfatte økonomiske belønninger. StarkNet gebyrer vil til dels gå til sequencere og ordregivere.

På mellemlang sigt forventer vi at gøre vores sequencer til rådighed for tredjeparter, og på lang sigt forventer vi også at se forskellige hold opbygge sequencers, der vil være sekventering for StarkNet.

### Forbedrer Altid; Altid Lytning

Som fokus skifter til den næste udfordring, vil vi fortsætte med at forbedre på tidligere resultater. Og i fortsat at arbejde på alle områder af[StarkNet](https://starknet.io/), vil vores ører altid være åbne for hele udviklerfællesskabet. Så bliv involveret i diskussionen via[Discord](https://discord.com/invite/uJ9HZTUk2Y),[StarkNet Shamans](https://www.google.com/search?client=safari&rls=en&q=StarkNet+Shamans&ie=UTF-8&oe=UTF-8)-fællesskabet,[Twitter](https://twitter.com/Starknet_Intern), eller en anden rute, og hjælpe med at forme fremtiden for blockchain skalering.