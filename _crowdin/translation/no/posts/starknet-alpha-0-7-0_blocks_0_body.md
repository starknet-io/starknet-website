### TL;DR

* StarkNet Alpha 0,7,0 frigitt til Goerli; pakket med forbedringer
* Kontrakter kan nå oppgraderes ved hjelp av OppgraderingsMønsteret for mellomtjener
* Kontrakter kan nå avgi arrangement
* Støtte for langvarige numre og blokkerte tidsstempel-systemsamtaler

### Introduksjon

Vi lanserer gjerne Alfa 0.7.0, en versjon pakket med nye funksjoner og forbedringer. En av de beste stimulansene til StarkNet de siste månedene har vært den økte interessen til samfunnet i å forme StarkNets fremtid. Denne versjonen tar for seg noen av samfunnets brennende behov.

#### Endringer i navngivingskonvensjonen

Observantleseren kunne ha lagt merke til at den forrige utgaven av StarkNet Alpha var navngitt Alfa 4, mens vi nå frigir Alfa 0,7,0. Vi bestemte oss for å utelate det dedikerte Alpha versjonsnummeret og avhengige i stedet kun på den tilknyttede ciro-lang versjonen.

### Nye funksjoner

#### Kontraktsoppgraderbarhet

OpenZeppelins[Proxy Upgrade Pattern](https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies)er nå fullt støttet for kontraktsoppgraderinger i StarkNet. Proxy-mønsteret er den felles metoden for å muliggjøre oppgraderinger av kontrakten på Ethereum. Alfa 0.7.0 aktiverer dette mønsteret over StarkNet.

Vi laget en kort[veiledning](https://starknet.io/docs/hello_starknet/default_entrypoint.html)for å demonstrere en grunnleggende implementering av mønsteret, og OpenZeppelin er allerede godt på jobb å implementere en standardkontrakt for proxymønsteret, se[prototype](https://github.com/OpenZeppelin/cairo-contracts/pull/129).

#### Antall blokker og tidsstempel for blokk

Alfa 0.7.0 tillegg til to nye systemanrop som mange utviklere har bedt om. Disse samtalene gir deg en kontrakt for tilgang til blokknummer og tidsstempel. Blokknummeret returnerer antallet som ble utført med den aktive blokken. Tidsstempelet i blokken returnerer tidsstempelet gitt av Sequencer ved etableringen av blokken.

Du kan se et eksempel på hvordan du bruker disse funksjonene i[veiledningen](https://starknet.io/docs/hello_starknet/more_features.html#block-number-and-timestamp).

#### Hendelser

Overraskelse! En funksjon som var planlagt for en fremtidig versjon, har sniket seg inn i denne tidligere en.

Starknett-kontrakter støtter nå at det defineres og sendes ut forslag som gjør at de kan utsette utførelsesinformasjon for søknader til fri kjede. Ethereum-utviklere vil finne den semantiske og syntaksen som ligner Soliditet. Du kan lese[dokumentasjon](https://starknet.io/documentation/events/), eller følge[opplæring](https://starknet.io/docs/hello_starknet/events.html), som forklarer denne funksjonen.

#### Fjernet %builtin-direktiv

%builitin-direktivet er ikke lenger nødvendig i StarkNet kontrakter. Denne endringen fulgte en diskusjon mellom samfunnene om[utvidbarhetsmønster for kontrakten](https://community.starknet.io/t/contract-extensibility-pattern/210)på[StarkNet Shamans](https://community.starknet.io/). Den gjør det vesentlig enklere å benytte dette mønsteret som er basert på bruk av avsetninger.

For eksempel vil følgende kontrakt endres fra:

```
%lang starknet

# Dette er "%builitt"-direktivet.
# Den er ikke nødvendig lenger.
%builtins range_check

@view
func add(x : felt, y : felt) -> (res : felt):
retur (res=x + y)
ende
```

Til dette:

```
%lang starknet
@view
funk add(x : felt, y : felt) -> (res : felt):
returner (res=x + y)
slutt
```

Du kan sjekke ut[ERC-20](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts/token)standard kontrakter, som bruker det nye mønsteret.

#### Støtte for eksterne funksjoner Lister av konstruksjoner

Alfa 0.7.0 støtter passering og returnering av konstruksjoner i eksterne funksjoner. Denne tilleggsfunksjonaliteten gjør at kontokontrakter bedre kan støtte[multicalls](https://github.com/OpenZeppelin/cairo-contracts/pull/73#discussion_r753535751).

Multicall er en kraftig funksjon for konto Abstraksjon som lar en konto foreta flere samtaler i en enkelt transaksjon. En åpenbar brukssak er at det er å opprette en**enkelt transaksjon**som kaller allowance og deretter transferFrom.

Vi ser fram til å se hva samfunnet gjør med den.

#### Forbedringer i StarkNet CLI

**Støtte for ventende blokker**

[Ventende blokker](https://starknet.io/documentation/block-structure-and-hash/#pending_block)ble[introdusert](https://community.starknet.io/t/cairo-v0-6-2-api-change-pending-block/195)i den siste mindre versjonen (v0.6.2) og tilbudte raskere bekreftelser på transaksjoner. Denne versjonen inkluderer støtte for spørring av disse blokkene via StarkNet CLI.

For å bruke det i hver CLI-kommando som krever block_number som argument (contract_call/get_block/get_code/get_storage_at), vi kan spørre StarkNet om den ventende blokken ved å angi block_number=ventende.

**Støtte for kontokontrakter**

StarkNet bruker abstraction, dvs. alle kontoer er implementert som smartkontrakter. De første implementeringene av kontonranser ble utført av[Argent](https://github.com/argentlabs/argent-contracts-starknet)og[OZ](https://github.com/OpenZeppelin/cairo-contracts/blob/main/contracts/Account.cairo), men vi forventer at flere vil komme.

I StarkNet må alle transaksjoner gå gjennom en kontontrakt, og CLI tillater nå samhandling med StarkNet Alpha direkte via avtalekontrakter. Se[veiledningen](https://starknet.io/docs/hello_starknet/account_setup.html#setting-up-a-starknet-account)om hvordan du setter den opp.

Liknende funksjonalitet ble også lagt til[StarkNet.py](https://github.com/software-mansion/starknet.py/)og[Nile](https://github.com/OpenZeppelin/nile)den siste måneden.

#### L1<>L2 meldinger i testingsrammeverket

Alfa 0.7.0 introduserer innlegget. Postmannen gjør det mulig for utviklerne å bruke testrammeverket for å teste mer kompliserte flyter.

På et høyt nivå - det preger StarkNet Sequencers ansvar å overføre meldinger fra L1 til L2 og L2 til L1. Det sørger for at meldinger som sendes via Soliditetsmeldingskontrakten dukker opp på destination StarkNet kontrakt og meldinger som sendes fra en StarkNet kontrakt vil dukke opp i Soliditetsmeldingen.

#### Og flere funksjoner

Alfa 0.7.0 gir mange flere funksjoner og endringer, som å legge til en effektiv firkant-rot-funksjon til det matematiske fellesbiblioteket. En komplett liste vises i[changelog](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.7.0).

### Neste opp?

Første[Fee Mechanism](https://community.starknet.io/t/fees-in-starknet-alpha/286/29)støtte utgis i løpet av uker som en underversjon av StarkNet.

### Mer informasjon?

[starknet.io](https://starknet.io/): for all informasjon om StarkNet og oppdatering.

[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y): Bli med for å få svar på dine spørsmål, få hjelp og bli en del av fellesskapet.

[StarkNet Shamans](https://community.starknet.io/): Bli med i å følge (og delta!) i StarkNet forskningsdiskusjoner.