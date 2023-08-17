### TL;DR

* Vi bygger StarkNet i steg, börjar med att etablera**användbarhet**, sedan förbättra**prestanda**och slutligen gå vidare till**decentralisering**
* Vi har uppnått vårt första mål: användbarhet. Det innebär att vi levererade generella beräkningar i ett Ethereum-liknande tillstånd (år innan det troddes vara möjligt)
* Vi går nu över till steg 2 i vår 3-delade byggplan: prestanda, med fokus på genomströmning, transaktionskostnader och latens.
* Nästa upp: Decentralisering

Bara ett år efter att planerna på[StarkNet](https://starknet.io/)först tillkännagavs har plattformen mycket bra funktionalitet. Utvecklargemenskapen blomstrar bortom våra vildaste förväntningar, och ger en konstant flurry av nya L2 Native projekt.

Vår prioritering under det senaste året var att möjliggöra just detta, genom att skapa ett fungerande StarkNet med ett snabbt växande utbud av funktioner, som gör det möjligt för devs att dyka rakt in.

De har gjort detta i stort antal. En bra barometer är nedladdningsräkningen för[JavaScript-biblioteket för StarkNet](https://www.starknetjs.com/): redan på 5k sedan den blev tillgänglig för 4 månader sedan.

Men medan StarkNet levererar den komprimering magi vi lovade, för tillfället, det är långt ifrån att kunna göra det för tillräckligt med dApps med tillräckligt genomströmning, och detta kan visa sig vara en källa till frustration för utvecklare på kort sikt.

Vår stridsprovade kärnteknik, STARK-bevisande många transaktioner och komprimering av korrekturer, måste föregås av batch- eller sekvensering av transaktioner. Det är en process StarkWare laget har redan fulländat en gång för[StarkEx](https://starkware.co/starkex/)skalning motor, och vi arbetar för närvarande på att göra det igen för StarkNets behov.

Nu när många av våra användbarhetsmål har uppnåtts skiftar vi fokus för att göra detta till vår högsta prioritet. Det är en del av vår 3-stegs färdplan:**användbarhet**, följt av nätverkets**prestanda**, och sedan**decentralisering**. Ett år in, vi vill ge dig en titt under huven – en översikt över vilka bitar som finns på plats och vad som fortfarande är ett pågående arbete.

### Berättelsen så långt

StarkNet Alpha släpptes på testnät i juni och till Mainnet i november. Vid tiden för Mainnet utbyggnaden var StarkNet redan leverera allmän beräkning i en Ethereum-liknande stat, som var allmänt tänkt att vara år bort.

Under hela utvecklingen har vi valt ett tillvägagångssätt som först fokuserade på de viktigaste funktionerna och släppte dem så snart de blev tillgängliga, i huvudsak dela utvecklingsprocessen med samhället. StarkNet är långt ifrån komplett men även nu, utvecklare kan redan bygga meningsfulla och komplexa program. Idag har vi hundratals utvecklare[som bygger på StarkNet,](https://starkware.notion.site/Projects-Building-on-StarkNet-a33dee55778a4515a9be9bdae02ee682)tiotals dApps, och mer än ett dussin externa team som utvecklar verktyg och infrastruktur för StarkNet ekosystem.

En rad uppgraderingar har levererat många viktiga funktioner, inklusive L1<>L2-meddelanden, kedjedata och stöd för kompositören, evenemangsstöd, grundläggande avgiftssystem, uppgraderingskontrakt, kontoabstraktion, testramverk, utvecklarverktyg, snabb bekräftelse, blocknummer, blocktimestamp, stöd för kontokontrakt.

Utvecklargemenskapen är både djupt intresserad av StarkNet och faktiskt forma sin utveckling. Redan nu har funktioner införts baserat på feedback från utvecklare. Antagandet skulle mycket väl kunna överträffa ökningen av genomströmningen, vilket är anledningen till att detta uppsving är vår stora prioritering nu.

### Nästa steg

Nu när vi har nått användbarhet, är det dags att förbättra systemets prestanda. Systemet är i sin nuvarande form kapabelt att stödja begränsad genomströmning av transaktioner. Sättet att lösa detta är genom att förbättra prestandan för Sequencer Node, som är StarkNet motsvarighet till en gruvarbetare. Det är ”maskinen” som sekvenser transaktioner efter att de har lämnats in. När detta optimeras, genomströmning kommer himmel raket.

I detta syfte analyserar vi samtidigt var flaskhalsar finns och tar itu med dem en efter en. För närvarande är alla flaskhalsar relaterade till sekvenseringsprocessen, som kommer innan vi åberopar STARK-proverna. Den stridsprovade prover-stack är redo att stödja StarkEx-liknande genomströmning på StarkNet.

Vi förväntar oss att optimeringen av sequencer blir en process som varar några månader, med gradvisa förbättringar under hela H1/22. Vårt mål är att i början av andra halvåret 2022 nå minst en storleksordning högre TPS än Ethereum, till en kostnad som är minst två storleksordningar lägre än Ethereum. Och det är bara början.

Det finns goda skäl till att denna optimeringsfas behövs, och att StarkNet inte lanserades med en färdig optimerad sequencer: StarkNet kunde uppnå användbarhet så snabbt eftersom vi fick ett försprång. Istället för att börja från början och bygga en helt ny sequencer, använde vi batchern från StarkEx som en central komponent.

Detta var ett bra sätt att bygga. Det inte bara leverera snabbt, det innebar att vi är säkra på att vi konstruerade på stabila fundament. StarkEx testade i huvudsak kärnfunktionalitet som driver StarkNet, eftersom det spårade upp hundratals miljarder dollar i kumulativ handel.

[StarkEx](https://starkware.co/starkex/)är skalmotorn för några av de mest framgångsrika dApps med L2: dYdX (eviga kontrakt), DeversiFi (spot trading och betalningar), samt för oföränderlig och Sorare (NFT minting och handel).

Men sequencer byggd för dem och andra StarkEx-klienter kan bara ta StarkNet hittills. Var och en av dem hanterar i stort sett samma typ av transaktion varje dag. StarkNet handlar om**allmän beräkning**, så dess behov är öppna . När dess sequencer tar transaktioner från mempoolen kommer de i olika former och storlekar. Plus, StarkNet är också ett öppet nätverk vilket innebär att det finns ytterligare computational overhead som inte påträffas i StarkEx.

Den nuvarande utmaningen, nämligen att optimera sekvenseringen för dessa nya behov, är ett viktigt åtagande, men vi har en stark förståelse för den väg som behövs, på grundval av vår framgångsrika StarkEx utveckling.

### Nästa upp: Decentralisering

StarkNet ska vara ett helt decentraliserat nätverk utan tillstånd, komplett med ledarvals- och styrningsmekanismer. Att uppnå detta kommer att bli vårt huvudsakliga fokus när genomströmning skyrockets och kostnadsfall, och vi hoppas att ha en första decentraliserad version i slutet av 2022. Vi räknar med att offentligt dela vår decentraliseringsplan under de kommande månaderna.

Precis som den nuvarande begränsade genomströmningen utgör en interimsfas i Starknets utveckling, är den nuvarande nivån av StarkWare engagemang temporärt. Vi ser oss själva som en ställning av slag, som tjänar en viktig funktion under byggfasen, men rullas tillbaka i sinom tid.

Full nod utveckling, ett spännande första steg mot decentralisering, är redan på gång. Fullständiga noder kommer att göra det möjligt för vem som helst att hålla och kontrollera tillståndet i nätverket lokalt, hålla reda på exakt vad som händer. Tre lag —*Erigon, Nederländerna och Equilibrium*— utvecklar hela noder, och potentiellt fler kommer att börja utvecklas i framtiden.

I en parallell utveckling pågår förberedelser för att öppna sekvenser och bevisa programvara för allmänheten. Vem som helst kommer att kunna delta som en sequencer eller ett prover på StarkNet.

En struktur kommer att utvecklas för att stimulera människor att engagera sig, vilket kommer att omfatta ekonomiska belöningar. StarkNet avgifter kommer delvis att gå till sekvenser och framställningar.

På medellång sikt förväntar vi oss att göra vår sequencer tillgänglig för tredje parter. och på lång sikt förväntar vi oss också att se olika team bygga sekvenser som kommer att sekvensera för StarkNet.

### Förbättra alltid; för alltid lyssna

Som fokus skiftar till nästa utmaning, kommer vi att fortsätta att förbättra tidigare prestationer. Och genom att fortsätta att arbeta på alla områden i[StarkNet](https://starknet.io/)kommer våra öron alltid att förbli öppna för hela utvecklargemenskapen. Så engagera dig i diskussionen, via[Discord](https://discord.com/invite/uJ9HZTUk2Y),[StarkNet Shamans](https://www.google.com/search?client=safari&rls=en&q=StarkNet+Shamans&ie=UTF-8&oe=UTF-8)-gemenskapen,[Twitter](https://twitter.com/Starknet_Intern), eller en annan rutt, och bidra till att forma framtiden för blockkedjeskalning.