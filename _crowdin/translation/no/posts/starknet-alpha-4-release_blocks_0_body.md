### Spennende tider høyt

Alfa 4 ble i dag utgitt på Goerli. Denne versjonen er Mainnet-løsningskandidaten, og dersom alt går etter planen, vil bli satt ut på Mainnet innen månedens slutt.

Alfa 4 følger med funksjonspakket utslipp av Alfa 3, som blant annet omfattet forbedringer av Kairo sammenstillingstid, kontraktførere og mye mer (se[fulle utgivelsesmerknader](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.5.0)).

Viktig å merke: Dette er fortsatt en Alfa-versjon – å distribuere kontrakten din på Mainnet-distribusjonen, Følg de nye appenes[onboarding](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu)retningslinjer.

### Nye funksjoner

Selv om hovedfokus på denne versjonen er å gjøre seg klar for Mainnet-distribusjonen, har det også flere nye funksjoner:

#### Hent adressen til denne kontrakten

Kontrakter kan nå få sin egen adresse via den nye syscall \`get_contract_address\`. Vi kan endelig, legge selfie-kontrakten på hvile.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">RIP selfie kontrakt: September 2021-november 2021</p>&mdash; Francesco Ceccon (@ceccon_me) <a href="https://twitter.com/ceccon_me/status/1458410251078836227?ref_src=twsrc%5Etfw">November 10, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### Blokk Hash

Blokker er nå identifisert via hash i stedet for meg. Dette følger vår nyeste overgang til transaksjon hashes. Alle APIer er oppdatert i henhold til dette. Vi frigir snart fullstendig teknisk dokumentasjon for systemet, noe som også vil inkludere spesifikasjonen av blokkstrukturen.

#### Kontraktsadresse

Denne versjonen introduserer en endring i hvordan kontraktsadressene skal beregnes. Adressen er en Pedersen hash på innringeradressen, et salt (tilfeldig eller valgt av utbytte), kontraktskoden hash, og hashen til den utførende argumentene, alle tilføyde med en prefiks.

```
Hash(PREFIX, caller_address, salt, contract_hash, ctr_args_hash)
```

I den gjeldende versjonen vil calleradressen alltid lik 0, men i fremtidige versjoner vil dette gjøre det mulig å distribuere kontrakter direkte fra eksisterende kontrakter.

Vær oppmerksom på at denne ordningen ligner svært på CREATE2.

[Se hele utgivelsesnotatene](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.6.0)

#### Token Broer

Token-broer er viktig del av StarkNet infrastruktur. De tillater overføring av midler til og fra StarkNet. Broen er ikke utplassert på publiseringstidspunktet. men den bør være tilgjengelig om noen dager – sammen med fullstendig dokumentasjon av funksjonalitet og bruk. En ting viktig å bemerke er at broen bruker[L1<>L2 melding](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html)protokollen. Den tilbyr derfor korte uttakstider – når et uttak er inkludert i bunt og godkjent for L1, disse midlene er tilgjengelig umiddelbart for brukeren på L1.

Dette er den første versjonen av toktbroene, og vi vil gjerne få tilbakemeldinger fra økosystemet på det.

### Bli med i StarkNet

Det har aldri vært bedre tid på å bli med på det voksende StarkNet samfunnet. Du kan delta i samtalen i[StarkNet discord](https://discord.gg/uJ9HZTUk2Y), deltar på en[workshop](https://forms.reform.app/starkware/join-a-starknet-workshop/2ma1x8), eller bruke en av[veiledningene](https://www.cairo-lang.org/docs/hello_starknet/index.html)for å begynne å bygge din første egne app.

**Oppdatering (Nov. 2021):**StarkNet Alpha er live på Ethereum Mainnet