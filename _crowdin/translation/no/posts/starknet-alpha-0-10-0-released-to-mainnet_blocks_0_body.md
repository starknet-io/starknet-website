### TL;DR

* Konto forbedring i henhold til EIP-4337

1. Valider — Kjør separasjon
2. Transaksjonsuniquity er nå sikret i protokollen (Nonce)

* Vedriftsmekanismen er utvidet til å omfatte følgende:

1. →L1 →L2 Meldinger
2. Deklarere transaksjoner

* Få endringer i Cairo syntaks

### Introduksjon

Vi er glade for å presentere StarkNet Alpha 0,10.0. Denne versjonen er et annet skritt mot skalering av Ethereum uten å gå ut over sikkerhet og desentralisering.

Denne bloggen beskriver kort hovedfunksjonene i denne versjonen. For en fullstendig liste over endringer, sjekk[release notes](https://github.com/starkware-libs/cairo-lang/releases). For mer detaljert informasjon, se[dokumentasjonen](https://docs.starknet.io/).

### Kontoabstraksjon endringer

Vi går framover med[StarkNetts konto abstraction](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781). Denne versjonen introduserer endringer inspirert av[EIP-4337](https://eips.ethereum.org/EIPS/eip-4337).

#### Godkjenne/kjøre skilletegn

Til nå var kontoens \_\_execute\_\_ funksjon ansvarlig både for validering og utførelse av transaksjonen. I 0.10.0 bryter vi denne koblingen og introduserer en separat \_\_validate\__ funksjon i kontoer. Når kontrakten har mottatt en transaksjon, vil den først ringe \_\_validate\_\_, og deretter, hvis vellykket, fortsette til \_\_execute\_\_.

Validate/utføre skillet gir et protokollnivåskille mellom ugyldige og reversert (men foreløpig gyldige) transaksjoner. Dermed vil sekvenserne kunne ta gebyrer for utførelsen av en gyldig transaksjon uavhengig av om den ble tilbakestilt eller ikke.

#### Nonce

I versjon 0.10.0 er et nonce felt lagt til for å håndheve transaksjonen unikitet på protokollnivå. Frem til nå ble det behandlet avvik på kontonskontraktenivået, noe som medførte at en transaksjon med samme hash kunne gjennomføres to ganger i teorien.

På samme måte er det nå satt et avvik i hver kontrakt som teller antallet gjennomførte transaksjoner fra denne kontoen. Kontonekontrakter vil bare akseptere transaksjoner med et matchende avvik, dvs. hvis den nåværende nien av kontoen er X, vil den bare godta transaksjoner med nonce X.

#### Ny transaksjonsversjon

For å tillate bakoverkompatibilitet vil vi introdusere de to endringene via en ny transaksjonsversjon —[v1](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C). Disse endringene vil bare gjelde for den nye versjonen, og eldre kontoer vil fortsatt kunne utføre versjon 0 transaksjoner.

Merknad — transaksjon v0 er nå utdatert og vil bli fjernet i StarkNet Alpha v0.11.0. Vennligst sørg for at du oppgraderer for å bruke den nye transaksjonsversjonen.

For mer detaljert informasjon om transaksjonsversjonen, vennligst les[dokumentasjonen](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C).

#### Gebyr Mekanisme

Den nye versjonen kan inkludere avgifter for to påkrevde komponenter:

* [L1→L2 Melding](https://docs.starknet.io/docs/L1-L2%20Communication/messaging-mechanism#l1--l2-message-fees)
* [Erklære transaksjonen](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)

Disse avgiftene vil ikke være obligatoriske i denne versjonen og vil kun bli tvunget å starte StarkNet Alpha v0.11.0.

#### Cairo Syntaks-endringer

I favør av gradvis fremdrift i retning av en oppgradering av Kairo,[Kairo 1.0](https://www.youtube.com/watch?v=Ny4Rv6ztINU), inkluderer denne versjonen flere syntaksendringer.

For å minimalisere ulempe vil versjonen omfatte et[migrasjonsskript](https://www.youtube.com/watch?v=kXs59zaQrsc)som automatisk tar i bruk endringene ovenfor. Du finner flere detaljer[her](https://github.com/starkware-libs/cairo-lang/releases).

### Hva er neste?

* Om noen få uker planlegger vi å innføre parallalisering i sekvensen, og muliggjøre raskere blokkproduksjon (V0.10.1)
* Vi vil snart fullføre den siste delen som må være med i gebyrbetalingen – Kontoutgivelse
* Cairo 1.0 utgivelse! Mer info om det i en kommende post.

### Hvordan kan jeg bli motor mer?

* Gå til[starknet.io](https://starknet.io/)for all informasjon om StarkNet , dokumentasjon, veiledning og oppdateringer.
* Bli med[StarkNet Discord](http://starknet.io/discord)for hjelp til økosystemkunngjøringer, og bli en del av samfunnet.
* Besøk[StarkNet Forum](http://community.starknet.io/)for å holde seg oppdatert og delta i StarkNet forskningsdiskusjoner.

Vi er alltid glade for å få tilbakemelding på vår[dokumentasjon](https://docs.starknet.io/)!