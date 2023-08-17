### **TL;DR**

* [StarkNet Planets Alpha](https://voyager.online/)— det første steget på vår vei til Mainnet — lever nå på Testnet!
* [StarkNet](https://starkware.co/product/starknet/)er et permisjonsløst Turing-komplett ZK-Rollup1.
* Utviklere kan implementere sin forretningslogikk for valg i en smartkontrakt, og bruke den på StarkNet.
* Tilstandsovergangen til StarkNet er påvist off-chain og verifisert på kjede.
* Mye som Ethereum, brukerne kan kommunisere direkte med disse smartkontraktene.

### **Introduksjon**

Vi[annonserte](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)veikartet for[StarkNet](https://starkware.co/product/starknet/)ved Jan 2021. Den Hellige Grail av skaleringsløsninger vil støtte (i) vilkårlige smartkontrakter, med (ii) komponister, (iii) operert over et desentralisert nettverk. I dag kunngjør vi distribusjonen på testnet av trinn 1: StarkNet Planets Alpha. Alfa-systemet støtter vilkårlige smartkontrakter. Kompetansen støttes senere i år, med desentralisering som følger.

Det er svært viktig at vi er helt gjennomsiktige og stiller forventningene skikkelig. Formålet med denne posten er å tydelig liste opp hva som allerede støttes og hvilke funksjoner som fortsatt mangler. Det vi lanserer i dag, er arbeid i gang på testnet. Vi tror at denne tidlige frigjøringen vil hjelpe dannelsen av et sunt økosystem rundt StarkNet og dets verktøy. Vi er ivrige etter å involvere utviklere i å bygge nettverket med oss, og få løpende tilbakemeldinger fra fellesskapet.

### **Hva er i StarkNet Planets Alpha?**

**Funksjonalitet:**Alfa lar utviklerne skrive og distribuere StarkNet kontrakter for generell beregning. Det er ingen hvitelisting — enhver utvikler kan skrive og utplassere hvilken som helst kontrakt de ønsker. Brukere kan samhandle med disse kontraktene, ved å sende transaksjoner til dem og inspisere deres tilstand. Det foreligger alle kontrakter i en enkelt stat 2. Oppdateringer til denne tilstanden er bevist off-chain, og verifisert på kjeden – i Alpha, skjer verifikasjonen på testnet.

**StarkNet OS:**The above functionality is supported by a new “operativsystem” vi ringer StarkNet OS. Den tilbyr*provoserbare*state overganger på StarkNet. De som utvikler seg, kan tenke på det som tilsvarer EVM: det er ansvarlig for å påberope seg smarte kontrakter, håndtere kontraktene osv. Vi vil publisere et eget innlegg om arkitekturen til StarkNet OS.

**Hva er det som ikke er i Alfa?**Alfa mangler fortsatt noen nøkkelmuligheter, for eksempel L1<>L2 interaksjon, on-kjededata og komponistbarhet. Mer om disse nedenfor.

#### **Kommer Føtte Våte**

Start med vår[veiledning og dokumentasjon](https://www.cairo-lang.org/docs/hello_starknet/).

Deretter kan du lese gjennom[sample AMM smart contract](http://cairo-lang.org/docs/hello_starknet/amm.html)vi har skrevet og distribuert på StarkNet. Det er et enkelt AMM, og du kan kommunisere med det[her](https://starkware-amm-demo.netlify.app/swap). Du er nå klar til å skrive og bruke smarte kontrakter på StarkNet. Blokkutforskeren for StarkNet -[Voyager](https://voyager.online/)- tillater alle å inspisere StarkNets tilstand.\
Ved å få føttene dine være, tror vi at du vil være bedre forberedt til å bygge på StarkNet, etterhvert som vi fortsetter å rulle ut flere funksjoner. Vi er allerede opptatt med å planlegge en førstegangs hackathon, samt workshops for utviklere.

### **Neste skritt for StarkNet**

Nøkkelen manglet fortsatt i Alpha vil bli rullet med start de neste ukene. Dette er:

* L1<>L2 Interaksjon, f.eks. evne til å deponere og trekke penger ut i L1.
* On-chain data: Publisere all lagerendringer på Ethereum.
* Sammensetning: Å tillate kontrakter å kommunisere med hverandre.

Med disse funksjonene på plass vil vi være klare for å ta med StarkNet til Ethereum Mainnet. Vi kaller dette steget i StarkNetts evolusjonskonstellasjoner, og når vi når frem til dette, du vil kunne bygge og tillatelsesløse distribuere på Ethereum Mainnet skalerbar L2 dApps.

#### **The StarkNet Ecosystem**

Vi er svært glade for at økosystemet som danner seg rundt StarkNet så vi vil pausere samarbeidspartnerne våre så langt.

Vi samarbeider tett med[Nederant](https://twitter.com/nethermindeth)og Nubia-teamet.[Alexey Akhunov](https://twitter.com/realLedgerwatch)(Erigon) &[Igor Mandrigin](https://twitter.com/mandrigin)(gateway. m),[Iddo Bentov](https://www.cs.cornell.edu/~iddo/),[dOrg](https://twitter.com/dOrg_tech),[Prof. Tim Roughgarden](https://twitter.com/algo_class),[Prof. Jeremy Avigad](https://www.andrew.cmu.edu/user/avigad/)& Yoav Seginer, sist, men ikke minst —[Paradigm](https://twitter.com/paradigm).\
Våre tidlige partnere —[dYdX](https://twitter.com/dydxprotocol),[Ummelig](https://twitter.com/Immutable)[DeversiFi](https://twitter.com/deversifi)samt[Sorterer](https://twitter.com/SorareHQ)[Celer](https://twitter.com/CelerNetwork)og andre - har bidratt med uvurderlige inndata fra dag en, og gi oss mulighet til å bygge et produksjonsklare nettverk for virkelige brukere.\
Vi fortsetter å bli fantastisk av kvaliteten på innhold laget av fellesskapet, av personer som[Bobbin Threadbare](https://twitter.com/bobbinth),[Daniel Kroni](https://github.com/danielkroeni/cairo-playground/blob/main/anon-bank/README.md),[Adrian Hamelink](https://twitter.com/adr1anh),[perama](https://twitter.com/eth_worm),[Francesco Ceccon](https://twitter.com/ceccon_me),[Ilian Malchev](http://twitter.com/imalchev), og[Alexandria-teamet](https://blockchainpartner.fr/).

Vi er ivrige etter å se hva samfunnet vil lage på alle fronter: verktøy, innhold, og selvfølgelig StarkNet applikasjoner de kommer til å bygge. La oss holde samtalen i dine favorittmedier valg:[discord](https://discord.gg/uJ9HZTUk2Y),[Twitter](https://twitter.com/CairoLang),[e-post](mailto:info@starkware.co), og snart bruk de mest desentraliserte kommunikasjonsformene f2f.

1 Vi er ikke tilhengere av begrepet ZK-Rollup, som - matematisk snakk - det er ikke nullkunnskap, men dere vet alle hva vi mener

2 I motsetning til den separate tilstanden for nåværende StarkEx-distribusjon på Mainnet

**Oppdatering (Nov. 2021):**StarkNet Alpha er live på Ethereum Mainnet