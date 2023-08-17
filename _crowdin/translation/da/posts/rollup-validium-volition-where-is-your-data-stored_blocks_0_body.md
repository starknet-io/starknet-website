### TL;DR

* StarkWare tilbyder en række tilstande for datatilgængelighed (DA) for kunderne at vælge imellem, afhængigt af deres prioritet
* Der er tre tilgange til Data Tilgængelighed for STARK beviser, alle af dem er allerede tilgængelige i produktionen:\
  —**Rollup**: finanskontoret offentliggøres direkte på blokkæden\
  —**Validium**: en Datatilgængelighedskomité sikrer finanskontoret hvor kun en hash gemmes på kæden\
  —**Volition**: apps kan lade brugerne vælge deres DA-tilstand — Rollup eller Validium — for hver transaktion
* Uanset hvilken DA der anvendes — er gyldigheden af alle transaktioner garanteret af STARKs

### Indledning

Pr. november 2022,[StarkEx](https://starkware.co/starkex/)har afviklet over $750 milliarder af handelsmængde og over 270 millioner transaktioner på Ethereum. I NFT plads, strømforsyning apps som ImmutableX og Sorare, StarkEx har slået over 85 millioner NFTs til en pris, der er 1000x billigere end at gøre dette direkte på Ethereum. STARK-baseret teknologi skalerer Ethereum. For eksempel i en enkelt uge, StarkEx løb 1,6 x antallet af transaktioner som Ethereum (12m på StarkEx vs 7. m på Ethereum), mens du optager mindre end 0,1 % af Ethereum blokering. Og det gør alt dette samtidig give brugerne det samme niveau af sikkerhed, som om de var ved at afvikle direkte på Ethereum.

### Hvordan opnår StarkWare dette?

Brugere sender transaktioner på lag 2 (enten StarkEx eller StarkNet), som er batched og sendt til en STARK bevis. Denne STARK viser kender tilstanden af hovedstolen før og efter disse transaktioner er blevet behandlet. Beviset fremfører et STARK-bevis for, at det attesterer gyldigheden af hovedstolens nye tilstand, efter at disse transaktioner er blevet gennemført. Den nye stat og STARK bevis sendes til on-chain STARK verifikator. Kontrollen af dette bevis sker autonomt via en uforanderlig smart kontrakt på Ethereum.

Denne arkitektur giver det bedste fra begge verdener: Vi kan have lave transaktionsomkostninger, mens vi stadig har Ethereum midt som en neutral mægler. Ethereum som voldgiftsmand er ikke blot en nice-to-have; det giver slutbrugeren en kritisk sikkerhed. En bruger transaktion kan nu være sikker på, at deres midler er sikret ved Ethereum, og transaktioner er uforanderlige, når de er verificeret på Ethereum. Brugeren har også fuldstændig selvforvaring af deres midler. Selvforvaring er vigtigt, fordi det sikrer, at brugeren har adgang til deres midler på alle tidspunkter, uden at stole på nogen tredjepart.

### Hvor passer datatilgængeligheden ind i alt dette?

Det er vigtigt at understrege både hvad dette bevis gør, samt hvad det*ikke*gør. Beviset attesterer gyldigheden af den nye stat, men det er ikke fortæller dig, hvad den nye stat er. Til det, du har brug for data tilgængelighed. Hvis vi kun har bevis, så blockchain ved, at hvad der blev indsendt, er gyldigt, men det ved ikke, hvad den nye stat (fx. Bogførte saldo) er! Forbrugerne af disse data omfatter brugere, der har transaktioner inden for disse beviser. Dataene bør stilles til rådighed for dem, hvis de ønsker at hæve midler på Ethereum, uden at de har brug for tillid til Layer 2-operatøren. Dette giver brugerne fuld selvforvaring af deres midler.

En analogi til dette er din gymnasielærer beder dig om at bevise, at x er lig med x. Dette er trivielt for at bevise. Hvad er vanskeligere at besvare: Hvad er x faktisk lig med? Til det har du brug for en separat information. Det kunne være, at x er lig med 5 eller en anden værdi. På samme måde kan der på blokkæden indsendes et STARK-bevis til en STARK-verifikator smart kontrakt til verifikation. Og verifikatoren kan bekræfte, at beviset er gyldigt (at x = x). Men du har brug for en separat input til at fortælle dig, hvad x (den nye hovedsaldo) er.

Der er tre tilgange til at gøre disse data tilgængelige:

#### Rollup Tilstand

Rollup tilstand sikrer, at tilstanden af lysdioden er gemt på Ethereum sammen med beviser. Rollup mode bruges i øjeblikket af[dYdX](https://dydx.exchange/)i produktion, og bruges også af[Public StarkNet](http://starknet.io/)L2 netværket. Fordelene her er klart: Man kan genskabe den tilstand af lysdioden ved kun at interagere med Ethereum blockchain. Konsekvensen af dette er, at du, som slutbruger, kan troværdigt tale med den relevante smarte kontrakt på Ethereum, og hæve dine penge, selvom Layer 2 systemet lukker ned.

#### Validium

Under Rollup Mode, de fleste af Ethereum gas omkostninger gå til data tilgængelighed, og ikke bevis bekræftelse. Det skyldes, at det er meget gasintensivt at lagre data på blokkæden. I Validium-tilstand sendes regnskabsoplysningerne ikke til Ethereum. Det opbevares snarere uden for kæden med et udvalg for datatilgængelighed. Ethereum gemmer en hash af denne hovedbog oplysninger. Dette udvalg for datatilgængelighed består af et beslutningsdygtigt antal uafhængige medlemmer, der overvåger den korrekte statsopdatering samt opbevarer en kopi af de data, der blev behandlet. Hver StarkEx instans kan skabe deres eget beslutningsdygtighed. Quorum medlemmer til eksisterende apps, der kører på StarkEx omfatter enheder som[Consensys](https://consensys.net/),[Nethermind](https://nethermind.io/),[Iqlusion](https://iqlusion.io/)og[Cephalopod](https://cephalopod.equipment/).

Fordelene her er klare. Der er ingen grund til at betale Ethereum gas gebyrer for at gemme hovedparten oplysninger om kæden. Snarere, det eneste gemt på Ethereum er en enkelt hash af hovedbog oplysninger. Hvis du vil trække penge tilbage fra lag 2 uden tillid ved at tale med Ethereum, De kræver blot, at et af medlemmerne af Udvalget for Datatilgængelighed underskrives digitalt. DAC medlemmer vil bruge kryptografi til at bevise, at du har ejerskab af disse midler.

En anden skjult fordel ved Validium Data Tilgængelighed er fortrolighed fra folk, der læser blockchain. Under Rollup Mode, saldoen for hver konto på det tidspunkt, at hvert bevis er indsendt, er kendt for offentligheden. Med Validium, disse data er skjult fra blokkæden — kun Datatilgængelighedskomitéen er klar over dette, fordi det er holdt uden kæde. Dette fortrolighedsniveau muliggør en lang række forskellige anvendelsestilfælde, hvor det er vigtigt at forvirre transaktionsdataene.

#### Volisering

Volition er en datatilgængelighedsarkitektur, der giver valget mellem Validium og Rollup Mode på transaktionsniveau. Det gør den ved at holde en bog på kæden, og en anden bog med et udvalg for datatilgængelighed. Brugere kan vælge mellem Validium og Rollup tilstand for hver enkelt transaktion.

Forestil dig, at du køber en virkelig dyr NFT som en Bored Ape eller en Cryptopunk, på en app, der kører på StarkEx. Du kan ønsker at bruge Rollup Mode til at sikre data for at NFT, fordi du ønsker en registrering af den specifikke transaktion, der er gemt på Ethereum. Men du kan derefter købe en virkelig billig NFT (f.eks. en kappe til din karakter i et blockchain spil), og i den situation vil du være glad for at spare penge ved hjælp af Validium.

Hvis du er interesseret i den skala, der opnås ved STARK beviser, så skal du komme og bygge videre på os.



Du kan altid e-maile[info@starkware.co](mailto:info@starkware.co)og et menneske vil komme til din e-mail.