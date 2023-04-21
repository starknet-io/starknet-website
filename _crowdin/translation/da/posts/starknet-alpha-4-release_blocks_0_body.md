### Spændende Tider Forude

Alpha 4 blev udgivet i dag på Goerli. Denne version er Mainnet release kandidat, og hvis alt går i overensstemmelse med planen, vil blive indsat på Mainnet ved månedens afslutning.

Alpha 4 følger funktionerne pakket udgivelse af Alpha 3, som inkluderet, blandt andet forbedringer af Cairo kompileringstider, kontraktentreprenører og meget mere (se[fulde udgivelsesnoter](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.5.0)).

Vigtigt at bemærke: dette er stadig en Alpha version — at implementere din kontrakt på Mainnet implementering, Følg venligst de nye apps’[onboarding](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu)retningslinjer.

### Nye Funktioner

Selv om denne version primære fokus er på at blive klar til Mainnet implementering, det indeholder også flere nye funktioner:

#### Få denne kontrakts adresse

Kontrakter kan nu få deres egen adresse via den nye syscall \`get_contract_address\`. Endelig kan vi sætte selfie-kontrakten i stå.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">RIP selfie kontrakt: September 2021-november 2021</p>&mdash; Francesco Ceccon (@ceccon_me) <a href="https://twitter.com/ceccon_me/status/1458410251078836227?ref_src=twsrc%5Etfw">November 10, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### Blokér Hash

Blokke er nu identificeret via hash snarere end Id. Dette følger vores seneste overgang til transaktion hashes. Alle API'er er blevet opdateret i overensstemmelse hermed. Vi vil snart frigive fuld teknisk dokumentation af systemet, som også vil omfatte specifikationen af blokstrukturen.

#### Kontrakt Adresser

Denne version introducerer en ændring af den måde kontraktadresser beregnes. Adressen er en Pedersen hash på opkaldsadressen, et salt (tilfældigt eller valgt af installatøren) den aftalekode, hash og hash af konstruktørens argumenter, som alle er vedlagt et præfiks.

```
Hash(PREFIX, caller_address, salt, contract_hash, ctr_args_hash)
```

I den nuværende version er opkaldsadressen altid lig med 0, men i fremtidige versioner vil dette gøre det muligt at indgå kontrakter direkte fra eksisterende kontrakter.

Bemærk, at denne ordning er meget lig CREATE2.

[Se de fulde udgivelsesnoter](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.6.0)

#### Token Broer

Token broer er en afgørende del af StarkNet infrastruktur. De gør det muligt at overføre midler til og fra StarkNet. Broen er ikke indsat på tidspunktet for offentliggørelsen. men den bør være tilgængelig i et par dage — sammen med den fulde dokumentation af dens funktionalitet og brug. En ting vigtigt at bemærke, er, at broen bruger[L1<>L2 messaging](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html)protokollen. Som sådan tilbyder den korte tilbagetrækningstider — når en tilbagetrækning er inkluderet i et parti og accepteret på L1 midlerne er til rådighed øjeblikkeligt for brugeren på L1.

Dette er den første version af de symbolske broer, og vi ville elske at få feedback fra økosystemet på det.

### Deltag I StarkNet

Der har aldrig været et bedre tidspunkt at deltage i det voksende StarkNet-fællesskab. Du kan deltage i samtalen i[StarkNet discord](https://discord.gg/uJ9HZTUk2Y), deltage i et[online værksted](https://forms.reform.app/starkware/join-a-starknet-workshop/2ma1x8), eller brug en af de[tutorials](https://www.cairo-lang.org/docs/hello_starknet/index.html)for at begynde at bygge din første egen app.

**Opdatering (Nov. 2021):**StarkNet Alpha er live på Ethereum Mainnet