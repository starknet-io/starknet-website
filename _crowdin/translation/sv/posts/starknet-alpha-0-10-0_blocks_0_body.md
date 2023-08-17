### TL;DR

* Förbättringar av kontosammanfattningar i EIP-4337 anda

1. Validera — Utför separation
2. Transaktionens unika karaktär är nu säkerställd i protokollet (Nonce)

* Avgiftsmekanismen utökas till att inkludera:

1. L1→L2 Meddelanden
2. Förklara transaktioner

* Få syntaxändringar i Kairo

### Introduktion

Vi är glada att kunna presentera StarkNet Alpha 0.10.0. Denna version är ytterligare ett steg mot att skala Ethereum utan att kompromissa med säkerhet och decentralisering.

Detta blogginlägg beskriver kortfattat de viktigaste funktionerna i denna version. För den fullständiga listan över ändringar, se[versionsfakta](https://github.com/starkware-libs/cairo-lang/releases). För mer detaljerad information, se[dokumentationen](https://docs.starknet.io/).

### Ändringar i kontosammanfattningen

Vi går vidare med[StarkNet’s konto abstraktion](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781). Denna version introducerar förändringar inspirerade av[EIP-4337](https://eips.ethereum.org/EIPS/eip-4337).

#### Validera/Utför Separation

Hittills har kontots funktion \_\_execute\_\_ varit ansvarig för både transaktionsvalidering och utförande. På 0{,}0 bryter vi denna koppling och inför en separat \_\_validate\_\_ funktion i konton. Vid mottagande av en transaktion kommer kontots kontrakt först att ringa \_\_validate\_\_, och sedan, om det är framgångsrikt, fortsätta till \_\_execute\_\_\_.

Den validerade/exekverade separationen ger en skillnad på protokollnivå mellan ogiltiga och återställda (men ändå giltiga) transaktioner. Tack vare det kommer sequencers att kunna ta ut avgifter för utförandet av en giltig transaktion oavsett om det återställdes eller inte.

#### Nonce

I version 0.10.0 läggs ett nonce fält till för att genomdriva transaktionen unika på protokollnivå. Fram till nu hanterades nonces på konto kontraktsnivå, vilket innebar att en transaktion med samma hash kunde utföras två gånger teoretiskt.

På samma sätt som Ethereum innehåller varje kontrakt nu en nonce, som räknar antalet genomförda transaktioner från detta konto. Kontrakt kommer endast att acceptera transaktioner med en matchande nonce, dvs Om det nuvarande kontots nonce är X, kommer det bara att acceptera transaktioner med nonce X.

#### Ny transaktionsversion

För att tillåta bakåtkompatibilitet kommer vi att introducera dessa två ändringar via en ny transaktionsversion —[v1](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C). Dessa ändringar kommer endast att gälla för den nya versionen, och äldre konton kommer fortfarande att kunna köra version 0 transaktioner.

Obs — transaktion v0 är nu föråldrad och kommer att tas bort i StarkNet Alpha v0.11.0. Se till att du uppgraderar för att använda den nya transaktionsversionen.

För mer detaljerad information om transaktionsversionen, läs[dokumentationen](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C).

#### Avgiftsmekanism

Den nya versionen gör det möjligt att inkludera avgifter för två nödvändiga komponenter:

* [L1≥ L2 Meddelande](https://docs.starknet.io/docs/L1-L2%20Communication/messaging-mechanism#l1--l2-message-fees)
* [Deklarera transaktion](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)

Dessa avgifter kommer inte att vara obligatoriska i denna version och kommer endast att verkställas med start StarkNet Alpha v0.11.0.

#### Ändring av Cairo Syntax

Till förmån för gradvisa framsteg mot en uppgradering av Kairo,[Kairo 1.0](https://www.youtube.com/watch?v=Ny4Rv6ztINU), denna version innehåller flera syntaxändringar.

För att minimera olägenheter kommer versionen att innehålla ett[migreringsskript](https://www.youtube.com/watch?v=kXs59zaQrsc)som automatiskt tillämpar ovanstående ändringar. Du hittar mer detaljer[här](https://github.com/starkware-libs/cairo-lang/releases).

### Vad är nästa?

* Om några veckor planerar vi att introducera parallellisering i sekvensen, vilket möjliggör snabbare blockproduktion (V0.10.1)
* Vi kommer snart att slutföra den sista delen som måste ingå i avgiftsbetalningen — Konto distribution
* Cairo 1.0 release! Mer information om det i ett kommande inlägg.

### Hur kan jag vara mer engagerad?

* Gå till[starknet.io](https://starknet.io/)för all StarkNet information, dokumentation, tutorials och uppdateringar.
* Gå med i[StarkNet Discord](http://starknet.io/discord)för utvecklingsstöd, ekosystemmeddelanden och att bli en del av samhället.
* Besök[StarkNet Forum](http://community.starknet.io/)för att hålla dig uppdaterad och delta i StarkNet forskningsdiskussioner.

Vi är alltid glada att få feedback på vår[dokumentation](https://docs.starknet.io/)!