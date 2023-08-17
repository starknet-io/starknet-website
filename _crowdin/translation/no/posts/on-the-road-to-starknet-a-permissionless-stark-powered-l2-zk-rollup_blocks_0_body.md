#### **TL;DR**

Vi bygger StarkNet i fire steg:

* Trinn 0 – Underlag (fullført*)
* Steg I — Planer: Single-App Rollups
* Steg II — Constellations: Multi-App Rollups
* Trinn III – Univers: En desentralisert opprulling

Vi forventer å ha trinn jeg distribuert i løpet av noen korte måneder. og være på god vei til skritt II & III innen slutten av 2021.

### **Introduksjon**

StarkWare bygger StarkNet, en desentralisert, tillatelsesløst og kostholdsbestandig STARK-drevet L2 ZK-Rollup som støtter generell datamaskin over Ethereum. Det er basert på språket Turing-komplett[Cairo](https://www.cairo-lang.org/).

Utviklere, brukere og StarkNet noder vil kunne gjøre alt det ene vil forvente fra en permisjonsløs L2 Rollup: Utviklere kan bygge programmer som implementerer sin egen forretningslogikk og distribuerer dem på StarkNet. Brukere kan sende transaksjoner til StarkNet for å bli gjennomført, akkurat som de jobber med Ethereum i dag. StarkNet noder og deltakere vil bli krypto-økonomisk inspirert for å sikre at nettverket drives effektivt og rettferdig.

Alle StarkNet Transaksjoner vil bli periodisk bundet, og gyldigheten vil bli påvist i en STARK sonde, for å bli verifisert på Ethereum. Fordi beregningsinnsatsen som kreves for å verifisere STARK-bevisene er eksponentielt liten i forhold til det som er påvist, vil StarkNet skalere etter ordre av størrelse.

Siden alle StarkNet state overganger vil bli STARK-proven, vil bare gyldige bli godtatt på Ethereum. Alle data som kreves for gjenoppbygging av hele StarkNet state vil bli publisert på kjeden. Alle vil kunne kjøre sin egen StarkNet node. Disse egenskapene vil gjøre StarkNet til sikker og permisjonsløs som Ethereum.

Vi har stått på i tre år og har allerede oppnådd noen bemerkbare milepæler når "Moon Math" skal gjøres til produksjonskvalitet og effektiv programvare som kjører på Ethereum. Måten StarkWare gjør ting på er å håndtere de harde problemene først, bygge kjerneteknologien og slippe den deretter ut i stykketid. Vi vil fortsette å bygge på denne måten da vi bringer StarkNet til ferdigstillelse.

![](/assets/ontheroad_02.png)

**Trinn 0 – Fundament**

StarkWare har avsluttet nedleggingen av noen viktige fundamenter for StarkNet.

#### **Cairo**

[Cairo](https://twitter.com/StarkWareLtd/status/1300353049836376066?s=20)er vårt Turing-Complete High-Level Language & rammeverk for å produsere STARK bevis for generell beregning. I stedet for håndskapende komplekse "kretser" eller AIR-er, kan en programutvikler bruke Cairo til å definere enhver forretningsmessig logikk, få den påvist off-chain, og verifisert onchain. Cairo er[i produksjon på Mainnet](https://twitter.com/StarkWareLtd/status/1320695603492507648?s=20), og er også[tilgjengelig for utviklerne](http://cairo-lang.org/).

I et par uker vil vi starte på en offentlig Ethereum testnet en Alfa versjon av Cairo’s Generic Proof Service (GPS). *Dette vil tillate utviklere å bygge sine egne applikasjoner ved hjelp av Cairo, implementerer den uansett logikk de ønsker. De vil sende sin Cairo-kode til GPS-en for å kunne bevise, og deretter verifisere pålogget.*

GPS muliggjør et enkelt bevis på å hevde integriteten til gjennomføringen av separate og uavhengige applikasjoner, ved derved å gi de anvendelsene muligheten til å forbedre gasskostnaden for å verifisere dem ytterligere.

Cairo og GPS er grunnlaget for StarkNet — vår beslutning om å eksternt både til utviklere gir dem tidlig eksponering for denne teknologien. ikke bare så de kan bygge oppå den, men også slik at de kan påvirke StarkNets utvikling.

Vi skal fortsette å utvikle Cairo basert på behov og tilbakemeldinger fra utviklersamfunnet. Vi skal forbedre dette språket med nye funksjoner, syntaks og bygdiner som forbedrer brukervennheten, og vi skal fortsette å utvikle og forbedre Kairo verktøyet: kompilatorer, sporer/feilsøker, og integrasjoner mot felles IDEer.

StarkNet vil få Kairo til å kjøre under verten.

#### **STARK programvarestabel**

StarkWare har utviklet det mest kraftfulle systemet i økosystemet, og det har vært[live på Mainnet](https://medium.com/starkware/starks-over-mainnet-b83e63db04c0)i måneder. StarkWare har også utviklet[ethSTARK](https://twitter.com/StarkWareLtd/status/1264911004099543040?s=20), vår åpen kildekode-prover, som er 20X raskere enn noen andre leveranser; Den tilbyr både[nullkunnskap og postkantum-sikre signaturer](https://twitter.com/StarkWareLabs/status/1331930111227080709).

Vår skalering*målinger*– ikke ekstrapolering eller lovnader – inkluderer prosessering av 300K transaksjoner i ett enkelt punkt på Mainnet, oppnå[verdensopptak under Rulling gjennom: 3K tps](https://twitter.com/StarkWareLtd/status/1287770381525422082?s=20). I prosessen har vi oppnådd verdensrekord for Rollup gasseffektivitet: 315 gass/tx, størrelsesorden billigere enn transaksjoner på Ethereum L1.

Denne teknologien vil være hjørnesteinen i det desentraliserte testlaget i StarkNet. – og derfor skal vi slippe ut flere og forbedrede prober som en del av StarkNetts utvikling (mer om det i en kommende bloggpost).

#### **StarkEx**

StarkEx er vår L2-skalabilitetsmotor. Det har vært servering[DeversiFi](https://twitter.com/deversifi)sine kunder på Mainnet siden juni 2020. Det vil føre til at både[dYdX](https://twitter.com/dydxprotocol)og[ImmutableX](https://twitter.com/Immutable)starter om få korte uker. StarkEx kan håndtere kompleks handelslogikk (spothandel, derivater, FTer) og også betalinger.

Å utvikle StarkEx var vår måte å understøtte vår verktøykjede og teste den mot behovene i virkelig verden. Ingenting er det som kravene til faktiske applikasjoner og levende brukere å hjelpe med å modne og utvikle seg videre. Det hjelper oss også å forstå hvilke elementer som må adresseres for å bedre betjene økosystemet — for eksempel integrering av lommebøker og blokker oppdagere.

StarkEx er et levende eksempel på evnen til å skalere applikasjoner ved hjelp av en STARK-basert ZK-Rollup, og er den første søknaden i produksjon på Mainnet, skrevet i Kairo. Slik sett blir det også en av søknadene som kjører på StarkNet.

![](/assets/ontheroad_03.png)

### **Veien foran**

#### **Steg I — Planer: Single-App Rollups**

Dette trinnet vil gjøre utviklerne i stand til å bygge og utnytte sine egne skalerbare applikasjoner på StarkNet.

På dette tidspunktet vil hver StarkNet forekomst kunne kjøre én enkelt applikasjon. Forskjellige forekomster kan kjøre forskjellige applikasjoner.\
Rammeverket StarkNet vil omfatte følgende:

* Mekanismer som trengs for å generere STARK-bevis for vilkårlig Cairo logisk, og deretter sende inn og verifisere dem ved Ethereum.
* Interaksjoner med L1 Ethereum: Innskudd og uttak av L1-token, publisering av elektroniske data, ESS-mekanismer som beskytter StarkNet brukere mot ondsinnede StarkNet operatører osv.
* Styring av L2 brukerbalanser og av søkerens lagring og hukommelse.

Utviklere vil kunne fokusere bare på å bygge applikasjonens forretningslogikk, og så flytte inn i produksjonen: distribuere og kjøre den i skala på StarkNet.

Hva gjør det mulig å bygge en general-beregningsskalerbar ZK-Rollup er kombinasjonen av:

* Kairo, som er et generellt kaldformende og komplette programmeringsspråk
* Vår sterke STARK-stabel (tilbyder og verifiserer), som muliggjør samkjøring med enorme data i ett enkelt bevis

#### **Steg II — Constellations: Multi-App Rollups**

Neste steg vil støtte flere applikasjoner som kjører på samme StarkNet instance og tilgang til samme globale L2-tilstand. Dette vil muliggjøre interoperabilitet mellom ulike applikasjoner, samt reduserte gasskostnader som følge av bedre stordriftsfordeler.

Kairo, den kraftige STARK-stabelen og GPS forsterker StarkNet’ konkurransefordel ved å støtte en flerapp rolle.

På dette stadiet StarkNet vil være et fullt funksjonelt rammeverk for å drive*flere*applikasjoner med vilkårlig logikk for virksomheter øverst i Ethereum, med hver forekomst kjører med en enkelt operatør.

En operatør kan nå starte opp en StarkNet node, og applikasjonsutviklere kan distribuere kontraktene sine. Fra brukerperspektivet ser StarkNet nå ut og føles som Ethereum, med høyere skala.

#### **Trinn III – Univers: Desentralized Rollup**

Det siste trinnet i utviklingen av StarkNet har desentralisert operasjonen.

Intriving R&D spørsmål vi nå tar tak i som påvirker dette stadiet inkluderer (i) ved hjelp av ZK-Rollups for å forbedre konsensusoppnåelige mekanismer, og (ii) utforme krypto-økonomiske mekanismer for å incentifisere de desentraliserte StarkNet bidragsyterne og operatører (transaksjonssekvenser, leverandører, osv. Å fungere effektivt, nokså og sikkert.

### **Konklusjon**

StarkWare bygger StarkNet, en desentralisert tillatelsesfri STARK-drevet L2 ZK-Rollup over Ethereum, som støtter generell datamaskin basert på Cairo-språket.

StarkNet vil sette søknader i stand til å skalere uten å gå på akkorden. Brukerne skal betale rimelige transaksjonsgebyrer, og hele økosystemet skal vokse betydelig og oppfylle sitt løfte.

Vi inviterer gjerne utviklerfellesskapet til[bli med oss](https://twitter.com/StarkWareLtd)på denne reisen.

**Oppdatering (Nov. 2021):**StarkNet Alpha er live på Ethereum Mainnet