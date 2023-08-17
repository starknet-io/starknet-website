### TL;DR

L2-native apper kan nå blomstrende gratis av tradisjonelle restriksjoner på L1-gass

### Introduksjon

dapputviklerne har alltid dekket alvorlige begrensninger på grunn av gassgrensen i Ethereums blokk (L1). Det begrenser ikke bare*hvordan*de med dApps fungerer men også*hva*disse dappene er i stand til å gjøre.

Lag 2 (L2) tilbyr utviklere en dateringsgrønnsak, fri for denne glasskaketten. Vi tror at det store flertallet av apper vil være L2-native i løpet av et par år: de vil være bygget fra bakken på L2 til nytte for denne beregningsgraden av frihet.

### L1 gas limit shape L1-native dApps

*La oss ta hensyn til to eksempler på populære apper med design som er sammensatt av L1 gassbegrensninger: AMMs og DEX aggregatorer.*

Et automatisert marked Maker (AMM) er i hovedsak en lavgass-tilnærming til en ordrebasert utveksling. I stedet for å la brukere plassere og fjerne grenser, stoppe tapet eller en rekke andre ordretyper, L1 AMMs åpner bare for enkle bytteavtaler med en sentral underliggende likviditetsreserve – for å ta høyde for de intense beregningskostnadene på L1.

Det er ideelt sett behov for tilgang til alle likviditetspor, selv i det minste likviditetsbassenget, for å belyse de beste prisene på brukere. På grunn av kostnadene ved å spørre mange forskjellige basseng, er det imidlertid rett og slett ikke verdt å handle over L1. Tilgangsplikter og betaler de tilhørende transaksjonsavgiftene kan rettferdiggjøres bare ved at likviditetsreservene har tilstrekkelig høy likviditet. I en liknende vene, Væsker i utlån/opplåning og andre sikkerhetsbaserte dApper kan være mye mer nøyaktig hvis forskjellen mellom konkursrabatt og transaksjonsgebyret var mye mindre.

Den begrensede funksjonaliteten og utformingen av mange L1-apper er direkte et resultat av utviklere som optimaliserer koden sin for å overholde Ethereums gassbegrensninger. Hvorfor kan du spør, sier vi Ethereum? Kan ikke Soliditet kode kjøre på mange L1 og enda noen L2s? Disse er jo det dyrest (og dermed også i et sårbarhet). Solidity dApps er utformet for "den dyreste linken", dvs. Ethereum. Derfor drar de ikke nytte av beregningsfordelen som følge av billige rulletidsmiljøer. For å låse opp funksjonaliteten i forgrunnen ved å designe en dApp for det dyreste kjøretidsmiljøet, må dapps kode konfigureres.

### Oppgangen i L2-native Applikasjoner

Valideringsrullere (aka ZK-Rollups) gjør at data er svært billigere. I motsetning til annen skaleringsløsning – kan L2 beregningen øke eksponensielt med bare en liten innvirkning på gasskostnaden på kontrollen av kjeden. I tillegg vil en prosess for validitetsrulling kunne tilføres beregningene – "vitnedata" – uten å kunne bruke ytterligere L1-ressurser, slik at det kan beregnes med mange innspill.

KodingsdApps på L2 i**[Cairo](https://www.cairo-lang.org/)**(et svingende komplett språk til å skalere dApps via STARK bevis) låser opp en stor virkelighet av muligheter for utviklere. Den gjør dem i stand til å bruke betydelige mengder data – både beregningsdata og vitnedata – som de ikke kunne bruke tidligere.

La oss utforske slike L2-native apper og deres nye, berikede muligheter.

#### DeFi

Før onboarding til Starkef utføres valideringsrulleringen til StarkWare, dYdX, operert som en L1 dApp på Ethereum. Den tilbyr sine brukeres nytte av x10 i syntetiske eiendeler og har opplagte posisjoner med bare ett syntetisk asset. Gjenoppbygging av dYdX i Kairo som en L2-innfødt dApp gir en dramatisk mer skalerbar, billigere og effektiv DeFi plattform:

* Oracle price oppdateringer: Slike oppdateringer inkluderer vanligvis dusinvis av priser og signaturer fra ulike kilder for å beregne et median. En validitetsrull gir eksponensiell avskalling av pris-orakklogikken (signaturbekreftelse og beregning av median pris) – uten at det rapporteres at data er vitne til L1. Sammenlign dette med dYdXs L1-implementering, der hver pris oracle oppdaterer kostnader rundt 300K-gass, og var, Av den grunn er det begrenset i frekvensen og størrelsen på settet av prisreporter.
* Levering: Et nøyaktig prisfôr gjør det mulig å beregne risikoen for en posisjon i sanntid og tilby høyere belåning for brukerne. Takket være den forbedrede oracle prisoppdateringen, økte dYdX leveransen fra x10 på L1 til x25 på L2.
* Kryssmargin: Med dYdX på L2 kan markedskapere legge lenge/korte bestillinger på mange eiendeler ved bruk av samme pant. Gjennomsnittlig oppgjør på dYdX's L2 inneholder posisjoner med mer enn 10 ulike syntetiske eiendeler! Til sammenligning ville en mer enn doblet gasskostnaden på L1 med denne tverrmargin-evnen på L1.

#### Spill og generativ Kunst

Den nåværende planten av L1-native spill lagrer vanligvis spilleiendeler på L1, mens den implementerer hele spilllogikken i en klarert off-chain applikasjon. Dette mønsteret er et direkte resultat av de totale gassbegrensningene ved L1. Takket være billig beregning på L2, utviklere av L2-native gaming dApps kan nå implementere spilllogikken i en smart kontrakt og manipulere spillets eiendelene pålitelig, i stedet for å bare lagre dem. Å skape et viktig skritt mot en mye rikere verden av blokkjeder-baserte spill. L2-native spill blir allerede utviklet på StarkNet, StarkWare’s permisjonløse network (e.g.[Dope Wars](https://github.com/dopedao/RYO)and[Influence](https://medium.com/influenceth/influence-to-launch-on-starknet-afd3c26ea25a)).

Men hvor kompleks kan et blokkjedebasert spill virkelig være? For eksempel er direkte anvendelse av grafikk på kjeden umulig —[eller er det](https://twitter.com/guiltygyoza/status/1449637155001798657)? Løsing av differensialligninger og simulering av planar-bevegelse i en smart kontrakt representerer et vesentlig skritt mot det som i fremtiden kan være en blokkjede-fysikk. The implications are huge. Forestill deg et konkurransedyktig flerspillerspill som Counter-Strike. Hvis man kan simulere spillet logikk på-kjettingen, Mange skremte hacker ville blitt en ting av fortiden — spillerne kan nyte et rimelig spill.

Generativ kunst bruker databehandling, tilfeldighet og andre data for å lage en blokkjedebasert kunst. Jo mer kompleks logikk og beregning en kunstner kan bruke pålitelighet, jo flere alternativer eksisterer for å generere unike entall kunst. [WhaleStreet DAO](https://blog.whalestreet.xyz/whalestreet-dao-to-launch-gen-art-ecosystem-on-ethereum-with-starknet/)lanserer et av de første Gen Art prosjektene på StarkNet, og utnytter StarkNets ubegrensede dateringsressurser.

### Hva hender?

Gyldighetsrullere — og Kairo-drevet StarkEx og StarkNet, Spesielt — skaffe et miljø der man kan utvikle og drive dApps som konsumerer mye data eller vitnedata. Med alle fordelene av distribuert hovedkontorteknologi forutser vi en uhyre spennende fremtid for L2-native dapps.

Hva kan du**lage med generell beregning som støttes av komposittevne, trostløshet og desentralisering?