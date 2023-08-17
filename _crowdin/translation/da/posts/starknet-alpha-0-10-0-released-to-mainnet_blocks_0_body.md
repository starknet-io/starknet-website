### TL;DR

* Konto Abstraktion Forbedringer i EIP-4337 ånden

1. Validér — Udfør adskillelse
2. Transaktionen entydighed er nu sikret i protokollen (Nonce)

* Gebyrmekanismen udvides til at omfatte:

1. L1→L2 Beskeder
2. Erklære Transaktioner

* Kun få ændringer i Kairo syntaks

### Introduktion

Vi er glade for at præsentere StarkNet Alpha 0.10.0. Denne version er endnu et skridt i retning af skalering Ethereum uden at gå på kompromis med sikkerhed og decentralisering.

Dette blogindlæg beskriver kort de vigtigste funktioner i denne version. For den fuldstændige liste over ændringer skal du kontrollere[udgivelsesbemærkningerne](https://github.com/starkware-libs/cairo-lang/releases). For mere detaljerede oplysninger, tjek[dokumentation](https://docs.starknet.io/).

### Konto Abstraktionsændringer

Vi bevæger os fremad med[StarkNet’s kontoabstraktion](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781). Denne version introducerer ændringer inspireret af[EIP-4337](https://eips.ethereum.org/EIPS/eip-4337).

#### Validering/Udfør Adskillelse

Indtil nu var kontoens \_\_execute\_\_ funktion ansvarlig for både validering og udførelse af transaktionen. I 0.10.0 bryder vi denne kobling og introducerer en separat \_\_validate\__ funktion på konti. Ved modtagelse af en transaktion, vil kontokontrakten først kalde \_\_validate\_\__, og derefter, hvis den lykkes, gå videre til \_\_execute\_\_.

Validate/execute separation giver en protokol-niveau skelnen mellem ugyldige og tilbageførte (endnu gyldige) transaktioner. Takket være det, sequencers vil være i stand til at opkræve gebyrer for udførelsen af en gyldig transaktion, uanset om den blev tilbageført eller ej.

#### Nonce

I version 0.10.0 tilføjes et nonce felt for at håndhæve transaktionens entydighed på protokolniveau. Indtil nu blev nonces håndteret på kontokontraktniveau, hvilket betød, at en transaktion med samme hash kunne udføres to gange teoretisk.

På samme måde som Ethereum, indeholder hver kontrakt nu en nonce, som tæller antallet af gennemførte transaktioner fra denne konto. Konto kontrakter vil kun acceptere transaktioner med en matchende nonce, dvs. hvis den aktuelle nonce af kontoen er X, så vil det kun acceptere transaktioner med nonce X.

#### Ny Transaktionsversion

For at tillade bagudkompatibilitet vil vi introducere disse to ændringer via en ny transaktionsversion —[v1](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C). Disse ændringer vil kun gælde for den nye version, og ældre konti vil stadig kunne udføre version 0-transaktioner.

Note — Transaktionen v0 er nu forældet og vil blive fjernet i StarkNet Alpha v0.11.0. Kontroller, at du opgraderer for at bruge den nye transaktionsversion.

Læs venligst[dokumentationen](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C) for mere detaljeret information om transaktionsversionen.

#### Gebyrer Mekanisme

Den nye version gør det muligt at medtage gebyrer for to nødvendige komponenter:

* [L1→L2-meddelelse](https://docs.starknet.io/docs/L1-L2%20Communication/messaging-mechanism#l1--l2-message-fees)
* [Deklare transaktion](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)

Disse gebyrer vil ikke være obligatoriske i denne version og vil kun blive håndhævet starter StarkNet Alpha v0.11.0.

#### Ændringer I Kairo Syntaks

Til fordel for gradvise fremskridt mod en opgradering af Cairo,[Cairo 1,0](https://www.youtube.com/watch?v=Ny4Rv6ztINU)indeholder denne version flere syntaksændringer.

For at minimere ulejligheden, vil versionsudgivelsen indeholde et[migrationsscript](https://www.youtube.com/watch?v=kXs59zaQrsc), der automatisk anvender ovenstående ændringer. Du kan finde flere detaljer[her](https://github.com/starkware-libs/cairo-lang/releases).

### Hvad Er Næste?

* Om et par uger planlægger vi at indføre parallelisering i sequencer, hvilket muliggør hurtigere blok produktion (V0.10.1)
* Vi vil snart færdiggøre den sidste del, der skal være inkluderet i gebyret betaling — Indsættelse af konto
* Cairo 1.0 udgivelse! Mere info om det i et kommende indlæg.

### Hvordan Kan jeg Være Mere Engaged?

* Gå til[starknet.io](https://starknet.io/)for alle StarkNet oplysninger, dokumentation, vejledninger og opdateringer.
* Deltag i[StarkNet Discord](http://starknet.io/discord)for dev support, økosystem annonceringer og blive en del af fællesskabet.
* Besøg[StarkNet Forum](http://community.starknet.io/)for at holde dig opdateret og deltage i StarkNet forskningsdiskussioner.

Vi er altid glade for at modtage feedback på vores[dokumentation](https://docs.starknet.io/)!