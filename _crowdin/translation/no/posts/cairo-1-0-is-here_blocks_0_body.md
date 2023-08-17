### TL;DR

* Cairo 1.0 første utgivelse er her!
* Utviklere kan begynne å skrive og teste Cairo 1.0 programmer
* Enhetsvariant med den eldre versjonen av Kairo vil bli nådd i løpet av de kommende ukene
* Støtte for StarkNet kontrakter vil bli lagt til i den kommende versjonen av StarkNet Alpha.

### Bakgrunn

Vi er glade for å kunngjøre at den første offentlige versjonen av Cairo 1.0 nå er tilgjengelig. Det markerer en stor milepæl i utviklingen av Kairo. som først ble introdusert i 2020 som et skytespill programmeringsspråk for effektiv skriving av STARK-provoserbare programmer. Cairo 1.0 er et rust-lignende høynivåspråk. På samme måte er den ment å gjøre utviklerne lett å skrive kode som er effektiv og trygg.

Siden starten har Cairo blitt brukt til å bygge Layer-2 applikasjoner som har[håndtert](https://dashboard.starkware.co/starkex)over $790 milliarder fagverdig, over 300 millioner transaksjoner og mer enn 90 millioner NFT, alle utført off-chain og bosatt seg på Ethereum med den matematiske integriteten som STARK bevis garanterer. Cairo ble det fjerde mest brukte programmeringsspråket i blokkjeden[økosystemet](https://defillama.com/languages)stort. Med utgivelsen av Cairo 1. Målet er å gjøre språket mer tilgjengelig og brukervennlig, samtidig som vi introduserer nye funksjoner som gjør det enklere å ivareta sikkerheten.

En av de mest signifikante endringene i Cairo 1.0 er syntaksen. Vi har tatt inspirasjon fra**Rust**for å lage et mer utviklervennlig språk som er enklere å lese og skrive. Den nye versjonen av Cairo gjør det mulig å skrive en sikrere kode (sterkt skrevet, eierskap og lån, etc), samtidig som den også er mer ekspressiv.

Cairo 1.0 introduserer også Sierra, en ny formidlingsrepresentant som sikrer at**alle**Kairo kjører, kan påvises. Dette gjør Cairo 1.0 spesielt egnet til bruk i et tillatelsesløst nettverk som StarkNet, der det kan gi robust DoS-beskyttelse og bestandighet mot sensur. Du kan lese mer om Sierra i vårt[forrige](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)innlegg.

## Første smak!

### Hva kan du gjøre i dag?

Utviklere kan starte skriving, kompilering og teste Cairo 1.0 programmer! Vi oppfordrer utviklere til å starte eksperimentering med Cairo 1.0 og bli vant til de nye syntaksene og funksjonene.

Siden Cairo 1.0 fremdeles er aktivt utviklet, og nye funksjoner er stadig lagt til, se på[Kairo-depotet](https://github.com/starkware-libs/cairo/)for de nyeste oppdateringene.

### Hva kommer nå?

For øyeblikket Cairo 1. mangler fremdeles noen av funksjonene som er støttet i den eldre versjonen av Cairo ([se denne tabellen for detaljer](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)). Den neste milepælen, som forventes de neste ukene, vil gi Cairo 1.0 funksjonssammenheng med eldre versjon. Du kan spore fremdriften opp mot den milepælen[her](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md).

### Starknet støtte

Skrive StarkNet kontrakter i Cairo 1.0 støttes (selv om visse funksjoner fortsatt mangler). StarkNet støtter imidlertid ikke deployering og utførelse av Cairo 1.0 kontrakter. StarkNet Alpha V0.11.0, som er planlagt de kommende ukene, vil introdusere muligheten til å levere og kjøre Cairo 1.0 kontrakter. Oppgraderingen til v0.11.0 markerer starten på overgangsperioden mot et system som bare kjører Cairo 1.0 kontrakter. Denne overgangsperioden avsluttes med[Regenesen](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4), forventet noen måneder senere.

![](/assets/0_odxbxeacqdwizlfw.jpg)

### La oss bygge!

StarkNet har som mål å eksponensielt skala Ethereum ved bruk av den matematiske integriteten til STARKer, og målet med Cairo er å gjøre denne eksponentielle skalaen tilgjengelig for utviklerne. Tilgjengelighet betyr et programmeringsspråk som er effektivt, enkelt å lese og skrive, og trygt å bruke. Vi håper at frigivelsen av Cairo 1.0 kan inspirere enda flere utviklere til å bli med StarkNet og skala Ethereum til å dekke det globale etterspørselen.