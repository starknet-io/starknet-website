### TL;DR

* STARKer muliggjør blokkjedesskalering ved å effektivt påvise integriteten til beregninger
* StarkEx er en programspesifikk skaleringsmotor
* StarkNet er et tillatelsesløst, smart kontraktslag 2 nettverk

### **STARKer**

STARKs (Scalable, Transparent ARgument of Knowledge) er et system for dokumentasjon og verifisering av datamaskiner. Det gjør det mulig å behandle en stor databehandling som genererer et bevis på at beregningen er korrekt, og deretter kontrollere om den er svært få skritt.

STARKer kan spille en nøkkelrolle i blokkjedekningsskalerbarheten ved å la store beregninger gjøres utenfor kjeden, der det er billigere, og bare etterlate verifikasjonen som krever at en del av beregningen utføres på kjeden. Ved å utføre svært få trinn på-kjetting, hevder verifiserer integriteten til en mye større beregning som ble foretatt uten kjede.

Ved å bruke STARKs, satser lag 2 løsninger sammen og beregner tusenvis av transaksjoner, og deretter verifisere gyldigheten av disse på kjeden med en enkelt STARK-bevis. Kostnaden for selve kjedeprosessen er delt mellom**alle**transaksjoner i batch. Det gir Ethereum sikkerhet og lave gasskostnader per transaksjon.

De lave beregningskostnadene vil gå gjennom en ny søknadsklasse som tidligere ikke var gjennomførbar på kjeden. Disse egenskapene gjør STARK en meget god byggestein for å forbedre brukeropplevelsen og redusere gasskostnadene. alle samtidig som sikkerheten for Ethereum-bosettingsområdene er ivaretatt.

StarkWare tilbyr to løsninger for å skalere Ethereum med STARKs: StarkEx og StarkNet.

### **StarkEx**

[StarkEx](https://starkware.co/starkex/)er et rammeverk for å lage tillatte, applikasjonsspesifikke skaleringsløsninger. StarkEx er en verktøykasse av nyttige[programstrømmer](https://docs.starkware.co/starkex-v4/starkex-deep-dive/regular-flows)som prosjekter kan brukes for å oppnå billig jedekopi. En STARK projeksjon etter at den er korrekte, genereres off-chain. Et slikt bevis kan omfatte inntil 12 000–500 000 transaksjoner (avhengig av transaksjonstype). Beviset sendes deretter til STARK viseren som aksepteres i kjeden. Det betyr én verifikasjon for alle transaksjonene – for utrolig lave amortiserte gasskostnader per transaksjon.

Noen eksempler på applikasjoner som er benyttet på StarkEx, er dYdX (evigvarende handel). Uforanderlige og sorterbare (NFTs – mindrehandel og handling), omvendinger (spot-kompilering), og Kaller (DeFi Pooling).

StarkWare legger kontinuerlig til flere programstrømmer til StarkEx, etter markedet og kundenes behov.

### **StarkNet**

*[StarkNet](https://starkware.co/starknet/)er et permisjonsløst lag 2, der en hvilken som helst bruker eller utvikler kan distribuere smarte kontrakter utviklet i airo-språket.*

Sammenlignet med Ethereum smartkontrakt-erfaring innenfor StarkNet økosystem, din kontrakt kan samhandle med hvilken som helst annen kontrakt levert på StarkNet, slik at det blir mulig å komprimere komponerende protokoller. I tillegg kan StarkNet kontrakter ha samspill med Ethereum via asynkront budskap.

I motsetning til StarkEx, der søknader er ansvarlige for å sende transaksjoner, kommer StarkNet sekvenseringstransaksjoner og sender dem til behandling og projeksjon. (StarkNetts sekvenser betjenes for øyeblikket av StarkWare med framtidige planer om desentralisering.) Det betyr at når applikasjoner utplasserer sine Cairo-kontrakter, trenger de ikke å bekymre seg for å drive ytterligere operatør-infrastruktur. StarkNet støtter tilgjengelighetsmodus for rulletallet, noe som betyr at opprullingen er skrevet i Ethereum sammen med STARK sonene.

Et stort samfunn som utvikler seg er dypt engasjert sammen med StarkNet økosystem, bygget apper, verktøy og infrastruktur. applikasjoner eksisterer allerede på testnet – DeFi, spill med stemme, AI og mer. Mer over, verktøy fra utviklere som utforsker, lokalt testmiljø og rammeverk, SDKs på flere språk og mer, blir bygd av StarkNet Community. I tillegg finner det sted aktive diskusjoner på[Shamans plattform](https://community.starknet.io/), med forslag til forbedringer, potensielle funksjoner og beste praksis.

### **Til Sum Det Opp**

Både[StarkEx](https://youtu.be/P-qoPVoneQA)og StarkNet er STARK-baserte skaleringsløsninger. Begge gir skalabilitet, lave gasskostnader og sikring, men har ulike driftskrav og mønstre for interoperabilitet. StarkEx kan være den riktige løsningen for en søknad som i stor grad er selvforsynt og passer i APIene som StarkEx tilbyr. StarkNet kan bli bedre egnet for en protokoll som krever samvirkende synkronisering med andre protokoller eller krever overskridelser av StarkEx tilbud.

STARKer har revolusjonert hvordan programmer kan bygges på Ethereum. StarkEx og StarkNet vil fortsette med søknader som tidligere var uholdbare og presse grensene for hva som er mulig på blokkeringskjeden.

Denne artikkelen er skrevet i samarbeid av[Tim Gestson](https://twitter.com/IcemanTim)og[StarkWare](https://starkware.co/)teamet