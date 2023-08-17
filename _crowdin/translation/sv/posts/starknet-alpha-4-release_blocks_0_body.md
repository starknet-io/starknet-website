### Spännande tider framåt

Alpha 4 släpptes idag på Goerli. Denna version är Mainnet release kandidat och, om allt går enligt planen, kommer att distribueras på Mainnet vid månadens slut.

Alpha 4 följer den funktionspackade utgåvan av Alpha 3, som bland annat inkluderade förbättringar av Kairo sammanställningstider, kontraktskonstruktörer och mycket mer (se[fullständiga versionsfakta](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.5.0)).

Viktigt att notera: detta är fortfarande en Alpha-version — för att distribuera ditt kontrakt på Mainnet-distributionen, följ de nya apps’[onboarding](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu)riktlinjer.

### Nya funktioner

Även om denna version huvudsakliga fokus är att göra sig redo för Mainnet distribution, det innehåller också flera nya funktioner:

#### Få det här kontraktets adress

Kontrakt kan nu få sin egen adress via den nya syscall \`get_contract_address\`. Slutligen kan vi lägga selfie-kontraktet i vila.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">RIP selfie kontrakt: september 2021-november 2021</p>&mdash; Francesco Ceccon (@ceccon_me) <a href="https://twitter.com/ceccon_me/status/1458410251078836227?ref_src=twsrc%5Etfw">10 november, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### Blockera Hash

Blocken identifieras nu via hash snarare än Id. Detta följer vår senaste övergång till transaktionshash. Alla API:er har uppdaterats därefter. Vi kommer snart att släppa full teknisk dokumentation av systemet, som också kommer att omfatta specifikationen av blockstrukturen.

#### Kontrakt Adresser

Denna version introducerar en ändring av hur kontraktsadresser beräknas. Adressen är en Pedersen hash på den uppringande adressen, ett salt (slumpmässigt eller valt av utplaceraren), kontraktskoden hash, och hashen av konstruktorns argument, alla läggs till av ett prefix.

```
Hash(PREFIX, samtalsadress, salt, kontrakt_hash, ctr_args_hash)
```

I den nuvarande versionen är den uppringande adressen alltid lika med 0, men i framtida versioner kommer detta att göra det möjligt att använda kontrakt direkt från befintliga kontrakt.

Observera att detta system är mycket likt CREATE2.

[Se fullständig versionsinformation](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.6.0)

#### Token Bridges

Token bridges är en viktig del av StarkNet infrastruktur. De tillåter överföring av medel till och från StarkNet. Bron är inte utplacerad vid tidpunkten för publicering, men den bör vara tillgänglig inom några dagar — tillsammans med den fullständiga dokumentationen av dess funktionalitet och användning. En sak som är viktig att notera är att bryggan använder protokollet[L1<>L2 meddelandehantering](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html). Som sådan, erbjuder det korta uttagstider - när ett uttag ingår i ett parti och accepteras på L1, de medel som är tillgängliga direkt för användaren på L1.

Detta är den första versionen av symboliska broar, och vi skulle älska att få feedback från ekosystemet på det.

### Gå med i StarkNet

Det har aldrig funnits en bättre tid att gå med i den växande StarkNet-gemenskapen. Du kan delta i konversationen i[StarkNet discord](https://discord.gg/uJ9HZTUk2Y), delta i en[online workshop](https://forms.reform.app/starkware/join-a-starknet-workshop/2ma1x8), eller använd en av[tutorials](https://www.cairo-lang.org/docs/hello_starknet/index.html)för att börja bygga din första egen app.

**Uppdatering (nov 2021):**StarkNet Alpha live på Ethereum Mainnet