### TL;DR

L2-native dApps kan nu blomstre fri for traditionelle L1 gasrestriktioner

### Indledning

dApp udviklere har altid stået over for alvorlige begrænsninger på grund af Ethereum er (L1) blok gasgrænse. Det begrænser ikke kun*hvordan*disse dApps fungerer, men også*hvad*disse dApps er i stand til at gøre.

Lag 2 (L2) tilbyder dApp udviklere en computerkraft greenfield, fri for dette gasglas loft. Vi tror, at langt størstedelen af dApps vil være L2-indfødte inden for et par år: de vil være blevet bygget fra bunden på L2 til at drage fordel af denne computerkraft grad af frihed.

### L1 gasgrænser form L1-native dApps

*Lad os overveje to eksempler på populære dApps, hvis design er dybt formet af L1 gasbegrænsninger: AMMs og DEX aggregatorer.*

En Automated Market Maker (AMM) er hovedsagelig en lavgastilnærmelse af en ordrebogbaseret børs. I stedet for at tillade brugere at placere og fjerne grænser, stoppe tab, eller en række andre ordretyper, L1 AMM'er giver kun mulighed for simple swaps med en central underliggende likviditetspulje — for at tage højde for de intense beregningsomkostninger for L1.

DEX-aggregatorer skal ideelt set have adgang til alle mulige likviditetspuljer, selv den mindste likviditetspulje for at udnytte de bedste priser for brugerne. Men på grund af omkostningerne ved at forespørge mange forskellige puljer, er det simpelthen ikke værd at handle over L1. Det er berettiget at få adgang til puljer og kun betale de tilhørende transaktionsgebyrer, når likviditetspuljen har tilstrækkelig dyb likviditet. I lignende tilfælde, likvidationer i lån/låntagning og andre sikkerhedsstillelsesbaserede dApps kunne være meget mere nøjagtig, hvis forskellen mellem likvidationsrabat og transaktionsgebyr var meget mindre.

Den begrænsede funktionalitet og design af mange L1 dApps direkte skyldes udviklere optimere deres kode til at overholde Ethereum s gasbegrænsninger. Hvorfor kan De spørge, siger vi Ethereum? Kan ikke Solidity kode køre på mange L1s og endda nogle L2s? Faktisk men af disse, Ethereum er det dyreste (og derfor sikker) miljø. Soliditet dApps er designet til “den dyreste link”, dvs., Ethereum. De drager derfor ikke fordel af den computermæssige fordel, som mindre dyre driftstid giver. For at låse op for funktionaliteten ved at designe en dApp til det dyreste driftstid miljø, skal dAppens kode tilpasses.

### Stigningen i L2-native dApps

Gyldighed Rollups (alias ZK-Rollups) muliggør ekstremt billig beregning. I modsætning til enhver anden skaleringsløsning - L2 beregning kan vokse eksponentielt med kun en lille indvirkning på on-chain verifikation gas omkostninger. Desuden input en Validity Rollup processer til beregningerne — “vidnedata” — uden at forbruge yderligere L1 ressourcer, der giver mulighed for beregninger med mange input.

Kodning dApps indbygget på L2 i**[Cairo](https://www.cairo-lang.org/)**(et Turing-komplet sprog til skalering af dApps via STARK-beviser) låser op for et stort område af muligheder for udviklere. Det gør det muligt for dem at bruge betydelige mængder af data - både computerkraft og vidne data - at de ikke kunne bruge før.

Lad os udforske sådanne L2-native dApps og deres nye, berigede kapaciteter.

#### DeFi

Før onboarding til StarkEx, StarkWare's Validity Rollup, fungerede dYdX som en L1 dApp på Ethereum. Det tilbød sine brugere gearing af x10 på syntetiske aktiver og støttede positioner med kun ét syntetisk aktiv. Genopbygning af dYdX i Cairo som en L2-indfødt dApp giver en dramatisk mere skalerbare, billigere og effektiv DeFi platform:

* Oracle prisopdateringer: Sådanne opdateringer omfatter typisk snesevis af priser og underskrifter fra forskellige kilder til at beregne en median. En Validity Rollup giver eksponentiel skalering af kursorakel logik (signaturverifikation og beregning af medianprisen) — uden at indberette, at vidnedata til L1. Sammenlign dette med dYdX ‘ s L1 gennemførelse, hvor hver pris oracle opdatering koster omkring 300K gas og var, derfor begrænset med hensyn til frekvensen og størrelsen af de rapporterende prismodtagere.
* Gearing: En nøjagtig prisfeed giver dYdX mulighed for at estimere risikoen for en position i realtid og tilbyde større gearing for brugerne. Takket være de forbedrede orakle prisopdateringer, dYdX øget gearing fra x10 på L1 til x25 på L2.
* Cross-margin: Med dYdX på L2 kan prisstillere afgive lange / korte ordrer på mange aktiver med samme sikkerhedsstillelse. Den gennemsnitlige afvikling på dYdX L2 involverer positioner med mere end 10 forskellige syntetiske aktiver! Til sammenligning ville denne krydsmarginevne på L1 have mere end fordoblet omkostningerne til on-chain gas.

#### Gaming og generativ kunst

Den aktuelle afgrøde af L1-indfødte spil gemmer typisk spilaktiver på L1 mens implementere hele spillet logik i en betroet off-chain ansøgning. Dette mønster er et direkte resultat af L1's gasbegrænsninger. Takket være billig beregning på L2, udviklere af L2-native gaming dApps kan nu gennemføre spillet logik i en smart kontrakt og manipulere spillets aktiver troværdigt, i stedet for bare at opbevare dem. At bringe spil logik ind i riget af troværdig beregning er et vigtigt skridt i retning af en meget rigere verden af blockchain-baserede spil. L2-indfødte spil er allerede ved at blive udviklet på StarkNet, StarkWare's tilladelsesfrie netværk (f.eks.[Dope Wars](https://github.com/dopedao/RYO)og[Indflydelse](https://medium.com/influenceth/influence-to-launch-on-starknet-afd3c26ea25a)).

Men hvor kompleks kan en blockchain-baseret spil virkelig være? Håndtering af grafik direkte on-chain synes for eksempel umuligt —[eller er det](https://twitter.com/guiltygyoza/status/1449637155001798657)? Løsning af differentialligninger og simulering af planar bevægelse i en smart kontrakt repræsenterer et betydeligt skridt i retning af, hvad i fremtiden kunne være en blockchain fysik motor. Konsekvenserne er enorme. Forestil dig en konkurrencedygtig multiplayer spil som Counter-Strike. Hvis man kunne simulere spillogik on-chain, mange frygtede hacks ville blive en saga af fortiden - spillere kunne nyde en dygtig fair spil.

Generative Art bruger beregning, tilfældighed og andre data til at skabe blockchain-baseret kunst. Den mere komplekse logik og beregning en kunstner kan bruge troværdigt, de flere muligheder findes for at generere unikke ental stykker af kunst. [WhaleStreet DAO](https://blog.whalestreet.xyz/whalestreet-dao-to-launch-gen-art-ecosystem-on-ethereum-with-starknet/)lancerer et af de første Gen Art projekter på StarkNet, der udnytter StarkNets ubegrænsede computerressourcer.

### Hvad er det næste?

Gyldighedsruller — og Cairo-drevne StarkEx og StarkNet navnlig — give et miljø, hvor man kan udvikle og drive dApps, der forbruger en masse beregnings- eller vidnedata. Med alle fordelene ved distribueret hovedteknologi forudsiger vi en uhyre spændende fremtid for L2-native dApps.

Hvad kan*du*oprette med generel beregning, der understøttes af kompostering, tillidsløshed og decentralisering?