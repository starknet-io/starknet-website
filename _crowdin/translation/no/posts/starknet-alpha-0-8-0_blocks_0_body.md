### TL;DR

* StarkNet Alpha 0.8.0 presenterer den første versjonen av gebyrordningen (valgfritt til StarkNet Alpha 0.9.0.)
* Nye API anroper for å beregne transaksjonsgebyret for å hente inn transaksjonssporet, slik at dere kan se bedre og feilsøke funksjonen
* Ytelseforbedringer for StarkNetto sekvenser
* →L1→L2 melding kansellering

### Introduksjon

Som delt i vårt[veikart](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51), etter siste tillegg til StarkNetts funksjonalitet og funksjoner, vår oppmerksomhet skifter mot ytelsesforbedring og protokollutforming (herunder avgifter, abstraksjon, desentralisering osv.). StarkNet Alpha 0.8.0 starter prosessen med å tilføye transaksjonsavgifter og med å forbedre sekvensens ytelse.

Veikartet for StarkNet inneholder en gebyrmekanisme. og vi går videre med denne versjonen og tar et viktig skritt nærmere plattformen for å få full ytelse.

Å legge til gebyrmekanismen er en viktig del av StarkNetts ytelsesdesign. Uten et minimalt gebyr risikerer vi å stå overfor uendelige transaksjoner: noe som gjør det umulig for systemet å stå stille, uavhengig av sekvenseringsoptimaliseringer.

### Funksjoner

#### Gebyr støtte

StarkNet Alpha støtter nå den første versjonen av gebyrmekanismen. Dette er en viktig mekanisme, også på dette tidlige stadiet, og av to hovedårsaker:

1. Det gjør det mulig for utviklerne å begynne å optimalisere kontraktene i henhold til StarkNetts kostnadsmodell.
2. Det er en viktig motpart til å forbedre systemets ytelse, da det hindrer spamming ved å sende utallige transaksjoner.

Denne versjonen introduserer utviklerne nødvendige komponenter for å innlemme gebyrbetaling i verktøyene og søknadene. Utviklere kan nå estimere transaksjonsgebyret ved å ringe \`estimate_fee\` -endepunktet, og få gebyret betalt som en del av transaksjonsgjennomføringen.

Siden denne funksjonen ikke er bakoverkompatibelt vil vi ikke håndheve gebyret på dette tidspunktet, men bare fra versjon 0. 0, som skal frigjøres i løpet av noen uker. Denne gradvise overgangen vil gjøre det mulig for brukere og utviklere å tilpasse seg den nye modellen.

#### Gebyrstruktur på 0,8,0

Den 0.8.0 skal det betales gebyrer kun med beregningskompleksitet, mens StarkWare vil subsidiere L1 kommunikasjonskostnad. Vi vil oppdatere avgiftsmekanismen med disse L1 drifts- og kommunikasjonskostnadene de neste ukene. Betalingen vil bli samlet inn atomisk med transaksjonsgjennomføringen på StarkNet L2. Se[gebyrer dokumentasjon](https://starknet.io/documentation/fee-mechanism/)for en grundig beskrivelse.

Det er viktig å merke seg at vi vil jobbe tett med utviklermiljøet for å tilpasse oss gebyrmekanismen som StarkNet evolusjoner.

#### L2 Goerli ETH Faucet

Vi lanserte[L2 Goerli ETH Faucet](https://faucet.goerli.starknet.io/)for å gjøre brukere i stand til å betale avgifter på Testnet. Dette Faucet sender små beløp av L2 Goerli ETH til din kontoadresse på StarkNet Goerli, som du kan bruke til å betale transaksjonsavgift.

#### Trace API

Vi la til muligheten til å hente kjøresporet til StarkNetts API. Inne i transaksjonens spor er alle interne samtaler synlige, ledsages av informasjon som gjennomføringsressurser forbruk, returverdi, utsendte hendelser og meldinger sendt. Denne nye samtalen forenkler forståelsen av en kontrakts oppførsel eller feilsøkingstransaksjoner. I tillegg kan verktøy som[Voyager](https://voyager.online/)eller[StarkTx](https://starktx.info/)ha disse dataene; å skaffe en mer detaljert analyse av brukerne, særlig for å ta hensyn til samhandling mellom kontrakter.

For å få sporing kan du bruke \`get_transaction_trace\` i StarkNet’s CLI. For å se et eksempel på hvordan du bruker det, sjekk[veiledningen](https://www.cairo-lang.org/docs/hello_starknet/cli.html?#get-transaction-trace).

#### Beskjed avbestilling

En ekstra funksjon for denne versjonen er muligheten til å kansellere L1→L2 meldinger. Hvorfor er dette nyttig? Tenk deg et scenario der en bruker overfører en ressurs fra L1 til L2. Strømningen starter med at brukeren sender eiendel til en StarkNet bro og tilsvarende L1 →L2 meldinggenerasjon. Se nå for deg at L2 meldingsforbruket ikke fungerer (dette kan skje på grunn av en feil i dappens Cairo-kontrakt). Dette kan føre til at brukeren mister driftsavstanden over aktiva for alltid.

For å redusere denne risikoen. vi tillater kontrakten som har initiert L1→L2 meldingen å kansellere den - etter å ha erklært intensjonen om å gjøre det og vente på en passende tid (se[dokumentasjonen](https://starknet.io/l1-l2-messaging/#cancellation)).

### Forbedringer av ytelse

Denne versjonen reduserer tiden en sekvens er nødvendig for å utføre en strøm av innkommende Cairo-transaksjoner betydelig.

Dette er bare det første trinnet! Neste store prestasjonsmilepæl, som vil bli presentert snart (0,9.0), er parallell gjennomføring av sekvensen, og det er mange flere optimaliseringer som ventes å komme ned på veien.

### What now?

Les den tekniske dokumentasjonen[her](https://starknet.io/documentation/fee-mechanism/).

Gå til[starknet.io](https://starknet.io/)for all informasjon om StarkNet , dokumentasjon, veiledning og oppdateringer.

Bli med[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)for hjelp til økosystemkunngjøringer, og bli en del av samfunnet.

Besøk[StarkNet Shamans](https://community.starknet.io/)for å holde seg oppdatert og delta i alle StarkNet forskningsdiskusjoner.