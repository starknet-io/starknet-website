### TL;DR

StarkNet Alpha 1 har to nye funksjoner:

* L1<>L2 interaksjon
* Data fra On-chain

### Introduksjon

Vi kunngjorde ved årsskiftet at StarkWare er bygget[StarkNet](https://starkware.co/product/starknet/)a tillatelsesløst desentralisert STARK-basert ZK-Rollup1 som et L2-nettverk over Ethereum. StarkNet allows any dApp to achieve unlimited scale for its computation - without compromising Ethereums composability and security.

I forrige måned[StarkNet Alpha 0](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)ble sluppet ut til verden. For første gang kan utviklere skrive[](https://kobi.one/2021/07/14/stardrop.html)hvilken som helst smart kontrakt, og distribuere den, helt uten tillatelse, til en ZK-Rollup. Brukere kan sende transaksjoner til nettverket, Ethereum-style.

I dag lanserer vi en ny versjon; Alpha 1. Vi frigir funksjoner på et rullende fundament, slik at utviklere kan kommunisere med nye funksjoner så snart som mulig. Vi forutser at dette vil strammes inn tilbakemeldingssyklusen og tillate tilbakemelding fra samfunnet til å forbedre StarkNet.

### **Alfa 1 funksjoner**

#### L1<>L2 Interaksjon

Alfa 1 omfatter en L1<>L2 meldingsprotokoll, som gjør det mulig for utviklerne å implementere sømløse transaksjonsstrømmer mellom L1 og L2. Utviklere kan nå sende meldinger fra kontrakter på L1 til kontrakter på L2 og omvendt.

Et av advarslene til ZK-Rollups er at det er endelige med oppdateringer uten forsinkelse. Dette innebærer at meldinger som ble sendt fra L2 til L1, kan sendes videre umiddelbart til destinasjonskontrakten. Dette åpner for å bygge programmer som virkelig kan samoperere mellom lagene.

Interessert med å prøve den? Den beste måten å komme i gang på er å følge opplæringen[her](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html).

Vår L1<>L2 protokoll skylder mye til andre L2s (spesifikt Optimisme og Arbitrum) som har hatt tidligere arbeid på dette området har påvirket designet vårt.

#### Data-tilgjengelighet på nett

StarkNetts statsoppdatering publiseres nå også som on-chain data for Ethereum. Dette tillater enhver bruker å fullstendig konstruere StarkNetts tilstand fra L1-data. Hver tilstandsoppdatering har ulik tilstand, dvs. hvilken lagring som ble endret og dens nye verdi.

Også her viser ZK-Rollup sin styrke. I motsetning til optimistiske Rolluper, der fullstendige transaksjonenes data skal sendes inn til kjeden. i ZK-Rollups, er kun de absolutte minstemata som trengs for å utlede tilstandsdiff sendt på kjeden.

Vurder et godt eksempel, pris oracles. En transaksjon om å oppdatere et prisoracle inneholder vanligvis flere transaksjoner, men oppdaterer bare en lagringscelle, men paret har dermed sin pris. Kjededededata som kreves for en statlig oppdatering med pris-oracle-transaksjoner i en optimistisk Rollup vokser lineært med antall oppdateringer, Når det er i en ZK-Rollup, vil det alltid være en enkelt oppdatering av lagringsplass.

Videre kan komprimeringsalgoritmer anvendes på de publiserte dataene, validiteten vil bli ivaretatt på STARK-beviset og ytterligere reduksjon i kjedeavtrykket. Fremtidige versjoner av StarkNet vil introdusere innovative optimaliseringer på dette området.

#### StarkNet OS

Vi frigir også StarkNet Operating System-koden. StarkNet OS er Cairo-programmet som kjører StarkNet. OS håndterer alt som blir gjort på nettverk — kontraktdistribusjon, transaksjonsutførelse, L1<>L2 meldinger og mer. Arkitektur og design i StarkNet OS vil bli forklart i et eget innlegg.

#### Ekstra funksjoner

Ikke bare utviklingen i StarkNet Alpha, vi bedrer også stadig Kairo. For en fullstendig beskrivelse av de nye funksjonene i Cairo v0.3.0, sjekk utgivelsesnotatene[her.](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.3.0).

### Økosystemet er Økende

Bortsett fra hele arbeidet på StarkNet Core, utvider økosystemets arbeid med StarkNet kontinuerlig. Vi er begeistret for samarbeid med noen av de mest talentfulle lagene fra økosystemet.

Fermion, StarkNetts første fulle node-innsats, er utviklet av teamet Erigon (tidligere TurboGeth). Med utgangspunkt i deres enorme kunnskap fra arbeid på Ethereum, kan vi jobbe med dem for å bygge en sterk full Node, som tar med mange erfaringer mens vi bygger for Ethereum, samtidig som vi har nytte av skalaen som STARK tilbyr.

Bortsett fra ham jobber vi med Warp, og en kompilator fra EVM til Cairo. Runde av kulturen vår med å presentere nye verktøy bare når de er ferdige, det eneste vi kan si er å forvente spennende nyheter på denne fronten snart! Vi kan likevel si at de er på vei i hagefart.

### Hva The Future Holds

Neste stopp på veien vår til StarkNet vil være komponistbarhet, slik at kontrakter kan samhandle med hverandre. Følg med

[StarkWare](https://starkware.co/)

1 Som vi tidligere har sagt, er ZK-Rollup et brukt, men svært misvisende: disse løsningene gir for tiden ikke nullkunnskap.

**Oppdatering (Nov. 2021):**StarkNet Alpha er live på Ethereum Mainnet