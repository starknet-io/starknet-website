### TL;DR

* Vi deler en detaljeret plan for gendannelse, som er blevet formet af omfattende diskussioner med StarkNet-fællesskabet. Særlig tak til Kuba@ SWM.
* Gengenese vil følge frigivelsen af Cairo 1.0, hvilket gør systemet mere sikkert ved at tillade enklere og sikrere StarkNet kontrakter
* Brugerne skal være parate til at opdatere deres tegnebog i overgangsfasen
* Udviklere vil blive forpligtet til at portere deres kontrakter til Cairo 1.0

### Indledning

StarkNet Alpha skrider frem mod Gengenesis, et vigtigt skridt i retning af produktion. I denne opdatering ønsker vi at dele flere detaljer om hovedmotivationen for genoprettelsen —[Kairo 1.](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)— og for at begynde at forklare, hvad det vil kræve fra brugere og udviklere. Efter gendannelse vil StarkNet kun arbejde med Cairo 1.0-baserede kontrakter, og vil starte fra en ny genese blok med den eksisterende tilstand.

Hvad vil Gengenesis kræve fra brugere? En simpel opdatering af deres tegnebog. Hvad vil det kræve fra bygherrer af StarkNet dapps? Portering af deres kontrakter til Cairo 1.0, og efter en simpel opgradering retningslinje. Konkret vil der ikke være nogen genstart fra en ren tilstand, og vi vil bo med den samme StarkNet eksempel, hvilket betyder, at der ikke vil være behov for en migration**.**

Regenesis planen er at fuldt ud bevare tilstanden af applikationer og ikke pådrage sig nogen nedetid til ansøgningerne. Således, applikationer, der følger de retningslinjer, vi vil give, vil være i stand til at lancere på StarkNet Alpha Mainnet med det samme uden nogen forstyrrelse for deres drift og deres brugere under Gengenesis proces. e er forpligtet til at arbejde sammen med samfundet og yde al den støtte, der er nødvendig for at gøre denne proces så glat som muligt.

Vi går i denne retning som følge af omfattende drøftelser med samfundet, som omfattede et vigtigt forslag fra Software Mansion teamet.

### Hvorfor Gengenesis?

#### Cairo 1.0 og Sierra

Hovedmotivationen for genoprettelsen er at udnytte de nye muligheder, som Kairo 1. har skabt. — nemlig sequencers DOS beskyttelse, censur modstand og gas måling, som er afgørende for StarkNet som et decentraliseret netværk.

Cairo 1.0 vil sikre, at alle transaktioner kan bevises. Dette vil gøre det muligt for StarkNet at inkludere tilbageførte transaktioner i blokke, og generere et bevis for deres udførelse. Denne mekanisme vil tillade sequencers skal betales på udførelsen af tilbageførte transaktioner, øge DOS beskyttelse mod ondsindede skuespillere. Derudover vil Cairo 1.0 understøtte gasmåling, hvilket vil gøre det muligt for StarkNet at gå over til et mere intuitivt gebyrmarked. Endelig vil dette gøre det muligt for StarkNet at indføre tvungne transaktioner fra L1 og vil øge netværkets censurerede modstandsdygtighed.

For at høste disse fordele kan Cairo v0 og Cairo 1.0 kontrakter ikke blandes. Ukorrekte udsagn kan ikke bevises at være forkert, ej heller kan gassporing ske, hvis vi har bits af Cairo v0 kontrakter. Til det formål bliver vi nødt til at udfase Cairo v0-koden helt fra StarkNet state, ergo Regenesis.

**Efter genoprettelsen vil vi have et Starknet system fuldt ud baseret på Cairo 1.0.**

#### Forenkling af kode og protokol

StarkNet, mens stadig i Alpha, gennemgik allerede mange ændringer. Hver version hidtil ændret StarkNet OS, blokke og transaktioner struktur. Dette forårsagede, at nogle af koden var forældet. Alligevel skal fulde knudepunkter og infrastrukturudbydere (såsom indekstal og statslige Explorers) være opmærksomme på, og implementere, alle tidligere adfærd StarkNet Alpha versioner for at synkronisere med staten troværdigt. Uden genskabelse kan denne byrde være en stor afskrækkende for udviklere, der ville overveje at opbygge sådanne tjenester til StarkNet.

Derfor, før vi går til produktion, og som forberedelse til en decentraliseret verden med mange infrastrukturværktøjer implementeringer, vi har til hensigt at reducere protokollens kompleksitet. Det ville vi opnå ved ikke at kræve, at den fremtidige infrastruktur skal køre StarkNet 0. kode, og markere den første blok efter overgangsperioden som genese point.

### Var Gengenesis? Den samlede tidslinje

Gengenese vil følge frigivelsen af Cairo 1.0, som er planlagt til at finde sted inden udgangen af 2022. I løbet af 1. kvartal 2023 vil StarkNet blive opdateret til at understøtte Cairo 1. , og vi sigter mod at migrere til et fuldt ud Cairo 1.0-baseret netværk ved udgangen af Q1.

**Brugere og applikationer vil være nødt til at foretage overgangen i denne periode.**

![](/assets/1_ef85shzd2uudwex-cy8wdg-1.png)

### Så hvad har jeg brug for at vide?

Programudviklere skal være opmærksomme på følgende aspekter omkring genesis:

1. Sørg for, at din kontrakt er klar til opgraderingen. Planens fulde tekniske detaljer er delt i[StarkNet Community Forum](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080). Når detaljerne er færdige, vil vi dele en kortfattet retningslinje.
2. Sørg for at du er klar til at overføre din kode til Cairo 1.0. Se næste afsnit for alle de seneste oplysninger.

#### Portering af din kontrakt til Cairo 1.0

Cairo 1.0 holder godt løfte til StarkNet udviklere. En forbedring af eksisterende Cairo, der vil være sikrere, bedre og lettere at skrive kontrakter, med forbedret syntaks, fuldt udviklet typesystem (native uint256 nogen? og meget mere. Udviklere vil blive forpligtet til at portere deres eksisterende StarkNet kontrakter til Cairo 1.0 syntaks. Men da logik og kodestruktur vil forblive den samme, denne indsats forventes at være ubetydelig i forhold til den indsats, det tog at udvikle app i første omgang.

I denne forbindelse er det værd at bemærke, at du kan vælge at revidere Cairo 1.0-versionen af din app. Hvis din app allerede er blevet revideret tidligere, vil re-audit-processen være betydeligt billigere og mere ligetil, da revisorerne allerede er bekendt med din logik.

Vi vil udgive al dokumentation omkring Cairo 1.0, sammen med tutorials og workshops i løbet af 4. kvartal 2022.

### Jeg er en StarkNet bruger. Hvad Skal Jeg gøre?

Som bruger, vil du sandsynligvis nødt til at tage et par handlinger under Gengenese. I det mindste er du nødt til at opgradere din konto kontrakt. Ikke at gøre det i løbet af (få måneder lang) overgangsperiode vil resultere i tab af din konto. Afhængigt af den opgradering sti valgt af udviklerne af StarkNet apps, du bruger, kan du nødt til at tage ekstra skridt.

Vi minder alle om, at StarkNet stadig er i Alpha fasen, og brugere er forpligtet til at være opmærksomme på kommunikation af StarkNet og apps, de bruger. Det er dit ansvar at sørge for, at du opgraderer tidligt til det nye system. *At være en tidlig adopter er ikke altid let, og vi regner med dig til at gøre din del!*

### Til Konklusion

Cairo 1.0 er lige rundt om hjørnet, hvilket giver mange spændende fordele og forbedringer for StarkNet og dets udviklere. For at høste disse, en Gengenesis begivenhed af netværket er nødvendig. Heldigvis har vi et design i tankerne, som gør denne proces minimalt forstyrrende — helt problemfri for brugerne, og ganske enkel for applikationer.

Vi opfordrer dig til at deltage i[community discussion](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080)og dele dine kommentarer og bekymringer, samt holde dig opdateret om de skridt, du bliver nødt til at tage som en ansøgning udvikler på StarkNet.