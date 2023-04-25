### TL;DR

* **Kostnader er nå obligatorisk i Testnet, snart på Mainnet**
* Kontrakt fabrikkmønster er nå mulig!
* StarkNet innfører kontraktsklasser
* Delegert samtale erstattes med biblioteks-samtale

### Introduksjon

Vi introduserer gjerne StarkNet Alpha 0.9.0! Dette er en viktig versjon hvor StarkNet gjør vesentlige steg mot modning, og har betydelige tillegg til både funksjonalitet og protokolldesign.

**Gebyrer er obligatoriske**(kun på Testnet, til versjon 0.9. Laget ligger rett på Mainnet) – en hvilken som helst L2 må ha sitt eget uavhengige gebyrsystem. Når gebyrer er introdusert som en valgfri funksjon i versjon 0.8. , vi føler oss trygge på å inkludere dem som en kjernekomponent i protokollen, og gjøre dem obligatoriske. Mer informasjon under.

En annen vesentlig endring på protokollnivå er innføring av Kontraktsklasser og skilletegn for klassen/eksempel. Dette gjør det mulig å bruke funksjonen \`delegate_call\` og distribuere fra eksisterende kontrakter, slik at det blir mulig for fabrikkmønsteret på StarkNet.

### Kontrakt Klasser

Med inspirasjon fra objektorientert programmering skiller vi mellom kontraktskoden og implementeringen av den. Det gjør vi ved å dele kontrakter inn i klasser og tilfeller.

En**-kontraktsklasse**er definisjonen av kontrakten: Its Cairo bytecode, hintopplysninger, inngangspunktnavn og alt som er nødvendig for å entydig definere sitt semantikk. Hver klasse identifiseres ved sin klasse hash (analog til et klassenavn fra OOP språk).

Et**kontraktinstans**, eller rett og slett en kontrakt, er en distribuert kontrakt som korresponderer med noen klasse. Legg merke til at det bare skjer en avtale som f.eks. har egen lagring og innkalles av transaksjoner/andre kontrakter. En kontraktsklasse har ikke nødvendigvis en distribuert forekomst i StarkNet. Innføringen av klassene kommer med flere protokollendringer.

#### "Deklarer" Transaksjon

Vi introduserer en ny type transaksjon til StarkNet:[‘declare’](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)transaksjonen, som tillater å erklære en kontrakt****I motsetning til \`deploy\` transaksjonen, distribuerer ikke dette en forekomst av den klassen. Tilstanden til StarkNet vil inneholde en liste over deklarerte klasser. Nye klasser kan legges til via den nye \`declare\` transaksjonen.

#### Distribueringssystemsamtale og Kontraktsfaktorer.

Når en klasse er deklarert, det er den tilsvarende \`declare\` transaksjonen ble akseptert, kan vi distribuere nye forekomster av den klassen. For å denne enden, bruker vi den nye \`deploy\` systemsamtalen, som tar følgende argumenter:

* Klassen hash
* Salt
* Konstruktor argumenter

«deploy»-syscall vil deretter utplassere en ny forekomst av den kontraktsklassen, Deres[adresse](https://docs.starknet.io/docs/Contracts/contract-address)vil bli bestemt av de tre parametrene ovenfor og utplassering adresse (kontrakten som påberopet systemsamtalen).

Inkludert distribusjoner i en såkalt tvangstransaksjon gjør at vi kan prises og belastningsgebyrer for distribusjon, uten at vi må måtte behandle investeringer og tilbakekall på en annen måte. For mer informasjon om bruk av gebyrer, se[dokumentasjonen](https://docs.starknet.io/docs/Fees/fee-mechanism#deployed-contracts).

Denne funksjonen introduserer kontrakt fabrikker i Starknet, siden hvilken som helst kontrakt kan påberope seg \`deploy\` syscall, og opprette nye kontrakter.

#### Flytter fra "Delegate Call" til "Bibliotek Call"

Innføringen av klasser gir oss mulighet til å løse et kjent problem i Ethereums delegatutlysning: Når en kontrakt innkaller til en annen kontrakt, den trenger bare sin klasse (dens kode) i stedet for en faktisk forekomst (dens lagring). Det er derfor dårlig praksis (faktisk at det må spesifiseres et eget kontraktstilbud når en delegat skal foreta en utlysning. den har ført til noen få feil i Ethereum-kontrakter) — bare klassen trenger å spesifiseres.

Systemanropet \`delegate_call\` blir nå avskrevet (gamle kontrakter som allerede er distribuert vil fortsette å fungere. men**kontrakter med \`delegate_call\` vil ikke lenger kompilere**), og erstattes av en ny library_call system samtale som får klasse hash (i en tidligere deklarert klasse) i stedet for en kontraktsporingsadresse. Legg merke til at bare én kontrakt er involvert i en biblioteksamtale, og dermed slipper vi tvetydigheten mellom oppdragskontrakten og implementeringskontrakten.

#### Nye API endepunkter

Vi har lagt til to nye endepunkter i API, noe som tillater gjenfinning av klasse-relaterte data:

* \`get_class_by_hash\`: returnerer klassedefinisjonen gitt klassen hash
* \`get_class_hash_at\`: returnerer klassen hash av en distribuert kontrakt gitt kontraktadressen

Legg merke til at klassen for en utplassert kontrakt direkte, i stedet for å gå gjennom de to metodene ovenfor du kan bruke den gamle \`get_full_contract\` slutt, som vil bli omdøpt i fremtidige versjoner. Alle endepunktene nevnt ovenfor er også brukbare fra[StarkNet CLI](https://docs.starknet.io/docs/CLI/commands).

#### Gebyrer

Vi går videre til å innlemme avgifter i StarkNet, gjør dem obligatoriske (først på Testnet, og senere også på Mainnet) i ``[invoke](https://docs.starknet.io/docs/Blocks/transactions#invoke-function)\` transaksjoner. \`declare\` transaksjonen vil ikke kreve gebyrer på dette punktet. På samme måte vil \`deploy`` transaksjoner heller ikke kreve et gebyr, men merk at denne transaksjonstypen mest sannsynlig vil være avskred i fremtidige versjoner.

Flere åpne spørsmål ligger på dette området, de mest fremtredende i hvilken grad de skal ta gebyrer for avtaledeklarasjoner og StarkNet Regnskapssatsing. Dette skal vi ta tak i i i fremtidige versjoner.

### Hva er neste?

Etter vårt veikart som vi[varslet i februar](https://medium.com/starkware/starknet-on-to-the-next-challenge-96a39de7717)er vi opptatt av å forbedre Starknets resultater generelt. og spesielt sekvensens ytelse for å få brukerne til å få raskere tilbakemelding på transaksjonene. I neste versjon planlegger vi å innføre parallellføring i sekvensen for en raskere blokkproduksjon.

Den neste hovedversjonen av StarkNet vil fokusere på StarkNetts kontoer, på en måte som ligner[ERC-4337](https://medium.com/infinitism/erc-4337-account-abstraction-without-ethereum-protocol-changes-d75c9d94dc4a). Med dette har vi fullført måten StarkNet kontoer har, men tatt enda et stort steg mot masseadopsjon!