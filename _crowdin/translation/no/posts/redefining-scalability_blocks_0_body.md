Blockchain skalerbarhet har alltid vært et oppvarmet tema. Det er nesten like mange transaksjoner i ett og samme blokkjeden som salgspunkt. TPS er imidlertid ikke et gyldig måltall for å sammenligne blokkeringskjedenettverk med – noe som gjør det utfordrende å vurdere sin relative ytelse. Dessuten har store TPS-tall vanligvis til en kostnad – som stiller spørsmålet: å få disse nettverkene faktisk skalere, eller øker de bare gjennomslaget?

La oss derfor undersøke hvordan vi kan definere skaleringsevnen, som omsetningen er gjort for å oppnå det, og hvorfor det er validitetsRollups den ultimate skaleringsløsningen.

### Ikke alle transaksjoner er laget lik

For det første må vi fastlegge vår påstand om at det enkle og praktiske måltallet for TPS ikke er et nøyaktig mål på skalabilitet.

For å kompensere EK-grupper for å utføre transaksjoner (og avskrekke brukere fra å spamme nettverket med unødvendig beregning), blokkjeder påtar seg gebyr proporsjonalt med den beregningsbelastningen som legges på blokkjeden. I Ethen måles kompleksiteten til beregningsbelastningen i*gass.*Fordi gass er et svært hensiktsmessig mål for transaksjonskompleksitet, Begrepet vil bli brukt gjennom hele denne artikkelen for såkalte non-Ethereum blockchains også, til tross for at det typisk er Ethereum-spesifikke.

Transaksjonene varierer betydelig i kompleksitet og dermed hvor mye gass de forbruker. Bitcoin, en pioner med partner-to-peer transaksjoner, støtter bare rudimentære Bitcoin skript. Disse enkle overføringene fra adresse bruker lite gass. På den annen side støtter smarte kontraktskjeder som Ethereum eller Solana en virtuell maskin og Turing-komplette programmeringsspråk som muliggjør mye mer komplekse transaksjoner. Derfor krever apper som Uniswap mye mer gass.

Derfor er det ikke fornuftig å sammenligne TPS for ulike blokkjeder. Det vi skal sammenligne med i stedet er kapasiteten til beregning – eller gjennomgang.

Alle Blockchains har en (variabel) blokkstørrelse og blokktid som bestemmer hvor mange*enheter beregnet*som kan behandles per blokk og hvor*raskt*som kan legges til en ny blokk. Sammen bestemmer disse to variablene*gjennom hele*av en blokkjede.

### Hva er skalabilitet?

Blockchains strever for å være maksimalt desentralisert, inkluderende nettverk. For å oppnå dette må to grunnleggende egenskaper holdes i kontrollen.

#### **1. Maskinvare krav**

Desentraliseringen av et blokkjedenettverk bestemmes av evnen til den svakeste noden i nettverket til å bekrefte blokkjeden og holde innens tilstand. Derfor kostnadene til å kjøre en node (maskinvare, båndbredde, og lagre) skal være så lav som mulig for å sette mest mulig på plass for så mange som mulig for å bli tillatelsesløse aktører i papirnettverket.

#### 2**.**State Growth

Statlig vekst refererer til hvor raskt blokkjeden vokser. Jo mer gjennomløpt en blokkjede gjør at det kan skje per tidsenhet, jo raskere vokser blokkjeden. Fullstendige noder lagrer nettets historie, og de må kunne validere tilstanden til nettverket. Ethereums tilstand lagres og vises til det ved hjelp av effektive strukturer som trær. Etter hvert som staten vokser, legges nye blader og grener til det og gjør det stadig mer komplisert og tidkrevende å utføre bestemte handlinger. Etter hvert som kjeden vokser i størrelse, blir den verst tilfelle utførelse av merker, noe som fører til en stadig voksende tid til å validere nye blokker. Over tid øker også dette den totale tiden det tar før full node blir synkronisert.

### Skadelig Påvirkning av økt overbelastning

#### 1. Antall noder

Minimumskravene til å kjøre en EK-gruppe og tellere er:

* Bitcoin1: 350GB HDD diskplass, 5 Mbit/s tilkobling, 1GB RAM, CPU >1 Ghz. **Antall noder: ~10,000**
* Ethereum2: 500GB+ SSD diskplass, 25 Mbit/s connection, 4–8GB RAM, CPU 2-4 kjerner. **Antall noder: ~6,000**
* Solana3: 1.5TB+ SSD diskplass, 300 Mbit/s tilkobling, 128GB RAM CPU 12+ kjerner. **Antall noder: ~1,200**

Legg merke til at det kreves større krav til prosessor-, båndbredde og lagringsmåte for EK-grupper som kreves for å gjennom hele en blokkjede, de færre nodene på nettverket — noe som fører til svakere desentralisering og et mindre inkluderende nettverk.

#### 2. Tid for å synkronisere en full node

Når du kjører en node for første gang, må den synkroniseres til alle eksisterende notater, laste ned, validere, tilstanden til nettverket helt fra geneblokken til tuppen av kjeden. Denne prosessen bør være en så rask og effektiv som mulig slik at alle kan opptre som en tillatelsesløs deltaker i protokollen.

Bruk Jameson Lopps[2020 Bitcoin Node](https://blog.lopp.net/2020-bitcoin-node-performance-tests/)og[2021 Node Sync Tester](https://blog.lopp.net/2021-altcoin-node-sync-tests/)som indikatorer, Tabell 1 sammenligner tiden det tar å synkronisere en full node for Bitcoin vs. Ethereum vs. Solana på gjennomsnittlig konsumgrad PC.

![Tabell 1. Blockchain throughput and node-sync sammenligning](/assets/1_gmpi_1c9zipoc-znrh7b5q.png "Tabell 1. Blockchain throughput and node-sync sammenligning")

Tabell 1 viser at gjennombruddsøkning fører til lengre synkroniseringstid fordi flere og flere data må behandles og lagres.

Mens forbedringer av nodeprogrammer kontinuerlig gjøres for å dempe utfordringen i den voksende blokkjeden (senking av diskfotavtrykket, raskere synkroniseringshastighet, sterkere krasjrobusthet, modularisering av visse komponenter osv. , den klart ikke holder seg godt nok i takt med stigningen.

### Hvordan skal skalerbarheten defineres?

Forskalbarheten er den mest feilrepresenterte termen i blokkjeden. Selv om økt gjennomstrømning er ønskelig, er det bare en del av oppgaven.

***Forskyvbarhet**betyr**flere transaksjoner**for**samme maskinvare**.*

Av den grunn kan skalerbarheten deles inn i to kategorier.

#### Sekvindusskalerbarhet

Sekvensering beskriver loven om ordre- og prosessering av transaksjoner i et nettverk. Som tidligere fastlagt, enhver blokkkjede kan direkte øke sin gjennomstrømning ved å heve blokkstørrelsen og forkorte blokktiden – opp til et punkt der den negative innvirkningen på desentraliseringen anses å være for betydelig. Men å svekke disse enkle parametrene gir ikke de forbedringen som kreves. Ethereums EVM kan i teorien[håndtere opptil ~2000 TPS](https://twitter.com/dankrad/status/1459607325854121989), som er utilstrekkelig til å betjene langsiktig etterspørsel av blokker. For å skalere sekvensering gjorde Solana noen imponerende innovasjoner: Fordel av et parallellmessig gjennomføringsmiljø og en smart konsensus mekanisme. noe som gjør det klart mer effektivt gjennom. Men, til tross for forbedringer, er det verken tilstrekkelig eller skalerbar. Siden Solana øker gjennomstrømningen, øker også maskinvare kostnadene til å drive node og prosesstransaksjoner.

#### Verifikasjon skalerbarhet

*Verifiseringsskalerbarhet beskriver tilnærminger som øker gjennom belastninger uten noder med stadig økende maskinvarekostnader.*Spesielt viser den til kryptografiske innovasjoner, som gyldighetsbevis. Det er grunnen til at validitetsRollups kan skalere en blokkkjede på en bærekraftig.

**Hva er en validitetsrolle?**

Validitetsrullere (også kjent som "ZK-Rollups") beveger seg i stykker og tar vare på lagringsfri kjede, men holder en liten mengde av visse data på kjeden. En smart kontrakt på den underliggende blokkjeden opprettholder statsroten til opprullingen. På opprullingen sendes en serie med svært komprimerte transaksjoner, sammen med dagens root, til en off-chain Prover. Proveren beregner transaksjonene, genererer en gyldighet bevis på resultatene og den nye staten root, og sender den til en lederfier. Verieren bekrefter gyldighetstegangen, og smartkontrakten som opprettholder tilstanden til rulleringen oppdaterer den til den nye tilstanden til Prover.

**Hvordan skalerer validitetsrullene med de samme maskinvare kravene?**

Selv om oppdragsgivere krever maskinvare med høy verdi, påvirker de ikke desentraliseringen av en blokkjede; fordi gyldigheten av transaksjonene er garantert med matematisk-verifiserbare bevis.

Hvilke forhold som er kravene til å verifisere bevisene. Fordi de involverte dataene er svært komprimert og i stor grad abstraherte bort ved beregning, er påvirkningen på lymfeknuter i den underliggende blokkjeden minimalt*.*

Verifiers (Ender) krever ikke maskinvare med høy senhet, og størrelsen på flagget øker ikke maskinvarekravene. Kun statusoverganger og en liten mengde call-data må behandles og lagres med EK-gruppene. Dette lar alle Ethereum noder verifisere validitetsrulleringen ved hjelp av eksisterende maskinvare.

**Jo flere transaksjoner, jo billigere blir den**

I tradisjonelle blokjeder skjer jo flere transaksjoner er, Den dyrere får den for alle når blokkplassen blir fylt – og brukerne må komme ut av hverandre i et gebyrmarked for å få dekket transaksjonene.

For en validitetsrulling reverseres. Denne dynamiske reverseres. Verifisering av transaksjoner i Ethereum har en viss kostnad. Etter hvert som antallet transaksjoner inne i en batch øker, vil kostnaden kontrollere satsen vokse med en eksponensielt langsommere hastighet. Tillegging av flere transaksjoner til et parti fører til billigere transaksjonsgebyrer selv om batchverifiseringskostnadene øker - fordi den avkortes mellom alle transaksjoner inne i batchen. ValiditetsRoller vil ha så mange transaksjoner som mulig inne i en sats — slik at godkjenningsgebyret kan deles blant alle brukere. I og med at satsen vokser uendelig, vil amortisert gebyr per transaksjon konverteres til null, i. jo flere transaksjoner for en validitetsrolle, jo billigere får den for alle.

dYdX, en dApp drevet av en validitetsrullering, ser ofte batchstørrelser på over 12 000 transaksjoner. En sammenligning av gassforbruket av de samme transaksjonene på Mainnet vs. på en validitetsrulling illustrerer skalabilitetsgevinstene:

Avregning en dYdX-transaksjon på Ethereum Mainnet:**200.000 gass**

Avgjør en dYdX-transaksjon på StarkEx:**<500 gass**

En annen måte å se på det: Validity Rollups’ hovedkostnadsskala er lineært med antall brukere innenfor samme batch.

#### Hvorfor optimistiske Rollups ikke er så skalerbare som én kan tenke

I teorien gir optimistiske Rollups omtrent de samme skalerbarhetsfordelene som validitetsRollups. Men det er en viktig forskjell: Optimistiske Rollups optimaliserer seg for et gjennomsnittlig tilfelle, mens validitet Rollups optimaliserer i verste tilfelle. Fordi blokkjedesystemer drives med svært ugunstige betingelser, er optimalisering for verste fall eneste måte å oppnå sikkerhet på.

I verste fall på optimistisk Rollups kontroll av en brukers transaksjoner vil ikke sjekkes av bedrageri. Så til å konkurrere bedrageri må brukeren synkronisere en Ethereum full node, en L2 full node, og beregne de mistenkelige transaksjonsmalene.

I verste fall på validitetsrollen trenger en bruker bare å synkronisere en fullstendig node for å verifisere gyldighetstesten, Spar deg selv den beregningsbyrden.

I motsetning til Validity Rollups, dreier optimistiske Rollups kostnadsskalaer seg lineært med antall transaksjoner i stedet for antall brukere, noe som gjør dem dyrere.

### Endelig bruddstykke av en oppgave - Permissionless Access to the Rollup State

For å garantere at transaksjonene er gyldige, må brukere bare kjøre en EK-gruppe . Imidlertid kan brukere og utviklere ønske å se, og løpe, staten og utførelsen av opprullingen for ulike formål. En*indeksering av L2 node*fyller dette behovet helt. Ikke bare tillate brukere å se transaksjonene i nettverket, men det er også en kritisk del av infrastruktur som er nødvendig for at økosysteminfrastrukturen skal fungere. Indekserere som Graph, Alchemy, Infura; Oracle-nettverk som Chainlink og blokkutforskere, støttes alle av en tilgangsløs, indeksering av L2 node.

### Konklusjon

Mange tilnærminger til å håndtere blokkjedes skaleringsevne er feilaktig fokus på å øke*gjennomstrømning*. Men dette negler gjennom støtet på ingen: de stadig økende maskinvare kravene til å behandle blokker og lagre nettverkshistorikken, og hvordan hemmer desentraliseringen av et nettverk.

Når du har tilgang til kryptering via gyldig kryptering, en blokkjede kan oppnå**sann skalerbarhet**som ikke belastes knuter med stadig økende kostnader og gir grunnlag for en bred desentralisering. Flere transaksjoner med kraftige og mer komplekse beregninger for samme maskinvare er nå mulig. om gebyrmarkedet dilemma i prosessen - jo mer aktivitet på en validitetsrull, desto billigere blir det!

[SwagtimusPrime.eth](https://twitter.com/SwagtimusP?t=pO0L1vGIhuC-ZgWOusQYtA&s=09)og[Louis Guthmann](https://twitter.com/GuthL)

1 Fra<https://bitcoin.org/en/bitcoin-core/features/requirements>

2 Fra<https://ethereum.org/en/developers/docs/nodes-and-clients/>

3 Fra<https://docs.solana.com/running-validator/validator-reqs>

4 Sterkt forenklet og justert for gjennomsnittlig dynamisk blokkstørrelse