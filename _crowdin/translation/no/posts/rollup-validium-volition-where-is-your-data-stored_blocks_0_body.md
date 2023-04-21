### TL;DR

* StarkWare tilbyr en rekke data tilgjengelighet (DA) moduser til å velge mellom, ifølge deres prioritet
* Det er tre tilnærminger til data Tilgjengelighet for STARK-bevis, alle er allerede tilgjengelige under produksjon:\
  —**Rollup**: Lederen publiseres direkte på blokkjeden\
  —**Validium**: en Data Availability Committee sikrer veilederen med bare en hash som lagres på chain\
  —**Volition**: apper kan la brukerne velge DA-modus — Rullopp eller Validium — for hver og hver transaksjon
* Uansett hvilket DA som brukes — gyldigheten av alle transaksjoner garanteres av STARKs

### Introduksjon

[StarkEx](https://starkware.co/starkex/)har per november 2022 gjort seg gjort opp over 750 milliarder dollar, og over 270 millioner transaksjoner på Ethereum. I NFT-rommet kan programmer som «ImmutableX og sorter», aktiveres apper som «ImmutableX», StarkEx har minket til en pris på over 85 millioner NFTer som er 1000 billigere enn å gjøre dette direkte på Ethereum. STARK-basert teknologi skalerer Ethereum. For eksempel kjørte StarkEx 1,6x antallet transaksjoner i en enkelt uke da Ethereum (12m på StarkEx i mot 7. m på Ethereum) mens du tar opp mindre enn 0,1 % av Ethereum blokkeringsplass. Og det gjør alt dette samtidig som man gir brukerne samme sikkerhetsnivå som om de bosatte seg direkte på Ethereum.

### Hvordan oppnår StarkWare dette?

Brukere sender transaksjoner på Lag 2 (enten StarkEx eller StarkNet), som settes i gang og sendes til en STARK-sone. Denne STARK driven kjenner til regnskapet før og etter at disse transaksjonene er behandlet. Prospekteren produserer et STARK-bevis som bekrefter at hovedårsregnskapet er gyldig etter at disse transaksjonene er utført. Den nye tilstanden og STARK-beviset sendes til STARK-verifiseringsprogrammet på internett. Verifiseringen av dette beviset skjer autonom via en uforanderlig smartkontrakt på Ethereum.

Arkitekturen er det beste fra begge verdenene: Vi kan ha lave transaksjonskostnader, samtidig som vi har gjort Ethereum i midten som en nøytral voldgiftsgiver. Det er ikke bare en nike-to-have; det gir kritisk sikkerhet til sluttbrukeren. En bruker som handler er sikre på at pengene deres sikres av Ethereum, og at transaksjoner kan merkes etter at de er verifisert på Ethereum. Brukeren har også fullført selvsikring av sine midler. Selvvaretekt er viktig fordi det sikrer at brukeren til enhver tid har tilgang til midlene sine, uten å basere seg på noen tredjepart.

### Hvor finnes det data i alt dette?

Det er viktig å understreke både hva dette bevis gjør, og hva det er*ikke*gjør. Dokumentasjonen er på gyldigheten til den nye staten, men det handler ikke om hva den nye staten er. Det trenger du datatilgjengelighet. Har vi bare beviset, vet blokkkjeden at det som er sendt, er gyldig, men vet ikke hva den nye staten (f.eks. boksaldoen er ! Forbrukerne av disse dataene omfatter brukere som har transaksjoner innenfor disse bevisene. Dataene bør gjøres tilgjengelig for dem dersom de ønsker å trekke ut penger på Ethereum uten å måtte stole på Layer 2. operatør. Dette gir brukerne full selvstendighet av sine midler.

En analog for dette er læreren i videregående, som ber deg bevise at x er like. Dette er trihetteglasset til prøving. Hva er vanskeligere å svare: Hva er x egentlig lik? Det skal du ha separat informasjon til deg. Det kan være at x lik 5, eller en annen verdi. På samme måte kan en STARK-dokumentasjon sendes til en STARK-verifisering smartkontrakt for verifisering for verifisering. Og verifiserer kan attestere at dokumentasjonen er gyldig (som x=x). Men du trenger et eget bidrag for å fortelle deg hva x (den nye boksaldoen) er.

Det finnes tre metoder for å gjøre disse dataene tilgjengelige:

#### Modus for rulling

Opprullingsmodus sikrer at tilstanden til hovedboken lagres på Ethereum sammen med bevisene. Opprullemodus brukes for øyeblikket av[dYdX](https://dydx.exchange/)i produksjon, og brukes også av[Public StarkNet](http://starknet.io/)L2. Gevinsten er klar: En kan gjenskape regnskapet ved å bare interagere med blokkjeden i Ethereum. Dette betyr at du som bruker kan stolt på å snakke med den relevante smartkontrakten på Ethereum, når du blir tvunget til å nevne noe. og ta ut penger selv om systemet Lag 2 avsluttes.

#### Validium

Under rulleringsmodus går mesteparten av gass i Ethereum til Datatilgjengelighet og verifiserer ikke. Det skyldes at det er svært gassintensivt å lagre data for blokkjeden. I Validiummodus sendes ikke hovedinndelingene til Ethereum. Det lagres derimot off-chain med en datalengibilitetskomité. Ethereum lagrer en hash av denne plagginformasjonen. Datamaterialet består av en kvor av uavhengige medlemmer, som overvåker riktig statusoppdatering og beholder en kopi av dataene som ble behandlet. Hver StarkEx instans kan lage sitt eget quorum. Kvorummedlemmer for eksisterende apper som kjører på StarkEx inkluderer enheter som[Consensys](https://consensys.net/),[Bortefritt](https://nethermind.io/),[Iqlusion](https://iqlusion.io/)og[Cephalopod](https://cephalopod.equipment/).

Fordelene her er klare. Det er ikke behov for å betale avgifter på Ethereum for å lagre hovedinformasjonskjeden. Det eneste som lagres på Ethereum er derimot én strek av hovedboksinformasjonen. Hvis du ønsker å trekke ut penger fra Layer 2 ved å snakke til Ethereum, Du krever kun en digital underskrift av ett av medlemmene av datatilsynskomiteen. DAC-medlemmene vil bruke kryptografi til å bevise at du har eierskap til disse fondene.

En annen skjult fordel ved Validium Data Accability er konfidensialitet ved lesing av blokkjeden. Under opprullingsmodus er balansen til hver konto på det tidspunktet hvert enkelt bevis sendes inn, kjent for offentligheten. Med Validium, skjuler disse dataene i blokkkjeden — bare datatilsynskomiteen er klar over dette, fordi den oppbevares off-chain. Dette konfidensialitetsnivået gjør det mulig å bruke en rekke ulike anvendelsessaker der det er viktig å formidle transaksjonsdata.

#### Løvning

Volition er en data tilgjengelig arkitektur som gir valget mellom Validium og Rollup-modus på transaksjonsnivå. Det gjør dette ved å føre en "registerrett" og en annen avtale med et Data Availability Committee. De kan velge mellom Validium og Rollup-modus for hver enkelt transaksjon.

Forestill deg at du kjøper en veldig dyr NFT som en Bored Ape eller en Cryptopunk, på en app som kjører på StarkEx. Du ønsker kanskje å bruke opprullingsmodus for å sikre dataene for den NFT, fordi du vil ha en registrering av den spesifikke transaksjonen lagret på Ethereum. Du kan imidlertid kjøpe en reelt billig NFT (f.eks. en kappe for din karakter i et blokk-kjede-spill), og i den sammenheng vil du gladelig spare penger ved å bruke Validium.

Hvis du er interessert i skalaen som oppnås ved STARK-bevis, vennligst kom og bygg på oss.



Du kan alltid sende e-post til[info@starkware.co](mailto:info@starkware.co)og en person vil ta kontakt med din epost.