### TL;DR

* Gyldighetsprøving er ikke begrenset gjennom hele programmet på samme måte som L1. Dette gir opphav til potensielt mye høyere TPS på L2-validitetsruller.
* StarkNet performance roadmap tar opp et nøkkelelement i systemet: sekvensen.
* Vi presenterer her veikartet for ytelsesforbedringer:\
  — Sekvesterparallellisering\
  — En ny rust implementering for Cairo VM\
  — Sekvenser reimplementering i rust\
* Reklamekampanjer, som de er, er ikke flaskehalsen og kan håndtere mye mer enn de gjør nå!

### Introduksjon

StarkNet lanserte på Mainnet for snart ett år siden. Vi startet byggingen av StarkNet ved å fokusere på funksjonalitet. Nå vekker vi fokus på bedre ytelse med en rekke trinn som kan bidra til å forbedre opplevelsen på StarkNeto.

I dette innlegget forklarer vi hvorfor det er et bredt spekter av optimaliseringer som bare kan brukes i validitetsruller, og vi vil dele planen vår for å gjennomføre disse trinnene på StarkNet. Noen av disse trinnene er allerede implementert i StarkNet Alpha 0.10.2, som ble frigitt på Testnet på Nov 16 og i går på Mainnet. Men før vi diskuterer løsningene, kan vi se på begrensninger og sak.

### Blokkbegrensninger: opprulling av gyldighet versus L1

En mulig tilnærming til å øke blokkjedens skalerbarhet og øke TPS ville være å løfte blokkbegrensningene (i form av gass/størrelse) mens kvartalet holdes konstanten. Dette ville kreve mer innsats fra blokkprodusentene (validatorer på L1, sekvenserne på L2) og krever dermed en mer effektiv implementering av disse komponentene. For å gjøre dette endrer vi nå fokuset til StarkNet sekvensoptimaliseringer, som vi beskriver mer detaljert i de følgende avsnittene.

Et naturlig spørsmål oppstår her. Hvorfor er sekvenseringsoptimaliseringer begrenset til validitetsruller, det vil si: hvorfor kan vi ikke implementere de samme forbedringene på L1 og unngå de komplekse, at gyldigheten totalt rullerer seg? I neste avsnitt hevder vi at det er en grunnleggende forskjell mellom de to, tillater et bredt spekter av optimaliseringer på L2 som ikke er relevante for L1.

### Hvorfor er hele L1 begrenset?

Dessverre så er det stort fall å løfte blokkbegrensningene på L1 lider av dette. Ved å øke veksten i kjeden øker vi også kravene fra fullt merke, som forsøker å holde tritt med siste stat. Siden L1 full noder må utføre all historikken på nytt, en høy økning av blokkstørrelsen (i form av gass) utgjør en betydelig belastning for dem, igjen førte til svakere maskiner som faller ut av systemet, og forlater evnen til å kjøre fulle noder bare for store nok enheter. Derfor vil ikke brukere kunne bekrefte seg selv og delta i nettverket pålitelig.

Dette gir oss forståelse for at bøyningen til L1 bør begrenses for å kunne opprettholde et desentralisert og sikkert system.

### Hvorfor påvirker ikke de samme barrierene gyldighetspumpene?

**Bare når vi vurderer å gi full nodeperspektiv ser vi den virkelige makten som tilbys av gyldighetsruller.**En L1 full node må utføre hele loggen på nytt for å sikre at den aktuelle statusen er korrekt. StarkNet noder trenger bare å verifisere STARK-bevis, og denne verifikasjonen tar en eksponentielt lavere mengde beregningsressurser. Spesielt trenger ikke synkronisering fra riper å involvere gjennomføring; en node kan motta en dump av gjeldende tilstand fra mottakerne og bare verifisere det ved hjelp av en STARK bevis på at denne tilstanden er gyldig. Dette gjør at vi kan øke gjennomføringen av nettverket uten å øke kravene fra den fullstendige noden.

Derfor konkluderer vi med at L2-sekvensen er utsatt for et helt spekter av optimaliseringer som ikke er mulig på en L1.

### Prestasjon roadmap fremover

I de neste seksjonene diskuterer vi hvilke av dem som i dag er planlagt for StarkNeton-sekvensen.

### Sekvensar parallellasjon

Det første skrittet på vår veikart var å innføre parallell til transaksjonen. Dette ble introdusert i StarkNet alpha 0,10,2 som ble utgitt i går på Mainnet. Vi dykker nå over hvordan parallellisering er (dette er en halvteknisk del, for å fortsette på veikartet, og hopp til neste del).

Hva betyr "transaksjonsendring" likevel? Det kan nesten ikke oppstå parallelt med at forskjellige transaksjoner utføres slik, ettersom de forskjellige transaksjonene kan være avhengige. Dette er illustrert i det følgende eksemplet. Vurder en blokk med tre transaksjoner fra samme bruker:

* Transaksjon A: Bytt USDC for ETH
* Transaksjon: betal ETH for NFT
* Transaksjon: BTC bytte USDT

Klart, Tx A må skje før Tx B, men Tx C er helt uavhengig av begge og kan utføres parallelt. Hvis hver transaksjon krever 1 sekund å utføre, kan produksjonstiden for blokken reduseres fra 3 sekunder til 2 sekunder ved å innføre parallellfordeling.

Koraller av problemet er at vi på forhånd ikke kjenner transaksjonsavhengighetene. Bare når vi gjennomfører transaksjon B fra vårt eksempel ser vi at den er avhengig av endringer gjort av transaksjon A. Mer formelt følger avhengigheten av at transaksjon B leser fra lagerceller som transaksjon A har skrevet til. Vi kan tenke oss på transaksjonene i form av avhengighet i grafen, der det er en kant fra transaksjon A til transaksjon B iff A skriver til en lagringscelle som leses av B, og skal således utføres før B. Den følgende figuren viser et eksempel på en slik avhengighetsgraf:

![](https://miro.medium.com/max/641/0*I-qGgxdJJmqmgZWM)

I eksempelet ovenfor kan hver kolonne utføres parallelt, og dette er det optimale (mens vi i undersøkelsen hadde utført transaksjoner 1–9 sekvensielt).

For å overvinne faktum at avhengighetsdiagrammet ikke er kjent på forhånd, introduserer vi***optimistisk parallellisering***, i ånden av[BLOCK-STM](https://malkhi.com/posts/2022/04/block-stm/)utviklet av Aptos Labs, til StarkNet-sekvensen Under dette paradigumet vil vi optimalisere å forsøke å gjennomføre transaksjoner parallelt med nytt, ved å finne en kollisjon. For eksempel kan vi utføre transaksjoner 1–4 fra figur 1 parallelt, bare for å finne ut av etterpå at Tx4 er avhengig av Tx1. Derfor var innføringen ubrukelig (vi løp den i forhold til den samme tilstanden vi løp Tx1 mot. mens vi skulle ha kjørt den mot staten som et resultat av å bruke Tx1). I så fall vil vi gjennomføre Tx4 på nytt.

Merk at vi kan legge til mange optimaliseringer på toppen av en optimistisk parallellgrad. For eksempel vil vi i stedet for å vente til hver utføring av slutten, stanser vi et henrettelsestidspunkt vi finner en avhengighet som ugyldiggjør det.

Et annet eksempel optimaliserer valget av hvilke transaksjoner som skal gjenutføres. Anta at en blokk som består av alle transaksjoner fra figur 1, overføres til sekvenser med fem CPU-kjerner. Først prøver vi å gjennomføre transaksjoner 1–5 parallelt. Hvis rekkefølgen på fullføringen var Tx2, Tx3, Tx4, Tx1, og til slutt Tx5, så vil vi finne avhengigheten Tx1→Tx4 bare etter at Tx4 allerede er utført – indikerer at den skal gjenutføres. Det kan også være ønskelig at Tx5 gjennomføres på nytt, siden det kanskje vil gi en annen utførelse av Tx4. I stedet for bare å gjennomføre alle transaksjonene etter dagens ugyldiggjøring av Tx4, Vi kan traversere avhengighetsgrafen fra de transaksjoner som allerede har avsluttet utførelsen, og bare utføre transaksjoner som er avhengig av Tx4 på nytt.

### En ny Rust implementering for Cairo-VM

Smartkontrakter i StarkNet er skrevet i Kairo og utføres inne i Cairo-VM, som spesifiserer i[Kairo-papiret](https://eprint.iacr.org/2021/1063.pdf). For øyeblikket bruker sekvensen et[python-implementeringen](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/cairo/lang/vm)av Cairo-VM. For å optimalisere VM-implementeringen har vi lansert et arbeid for å omskrive VM i rust. Takk til det store arbeidet på[Lambdaclass](https://lambdaclass.com/), som nå er et uvurderlig team i StarkNet-økosystemet, får denne innsatsen raskt til å virke.

VMs rust implementering,[cairo-rs](https://github.com/lambdaclass/cairo-rs), kan nå kjøre innebygd Kairo-kode. Neste trinn jobber med å utføre smarte kontrakter og integrasjoner med pythonsekvenseren. Når sekvenserens ytelse er integrert med omsorgspersoner og forventes å forbedre seg betraktelig.

### Sekvens/gjenbruk i Rust

Vårt skifte fra python til rust for å forbedre ytelsen er ikke begrenset til Cairo VM. Ved siden av forbedringene nevnt ovenfor ønsker vi å skrive om sekvensen fra bunnen av i rust. I tillegg til Rustnings interne fordeler gir dette mulighet til å optimalisere forløpet. Ved å selge et par, så får vi glede av kaverner uten bruk av overhodet av python-rust kommunikasjon og vi kan helt omforme måten staten lagres og nås på (som i dag er basert på[Patricia-Trie strukturen](https://docs.starknet.io/documentation/develop/State/starknet-state/#state_commitment)).

### Hva med provers?

I løpet av denne posten nevnte vi ikke det kanskje mest berømte elementet av gyldighetspuller – beviset. Det er mulig å tenke seg at det er den nyeste, mest avanserte delen av arkitekturen, det bør være flaskehalsen og dermed fokus på optimalisering. Det er interessant å merke seg at det er de "standard"-komponentene som nå er flaskehalsen av StarkNet. I dag er det særlig[rekursive bevis](https://medium.com/starkware/recursive-starks-78f8dd401025), vi kan få flere transaksjoner enn dagens trafikk på Testnet/Mainnet i et bevis. Faktisk er det i dag påvist StarkNet blokker ved siden av StarkEx-transaksjoner, hvor sistnevnte av og til kan pådra seg flere hundre tusen miner.

### Summary

Parallellisering, Rust, og mer – ta høyde for en forbedret TPS i kommende StarkNet versjoner.