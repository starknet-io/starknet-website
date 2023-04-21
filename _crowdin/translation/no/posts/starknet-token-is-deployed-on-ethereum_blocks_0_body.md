### TL;DR

* StarkNet Token (STRK) er nå satt ut på Ethereum Mainnet
* **Husk svindel**StarkNet Tokens tilbys ikke for salg
* Det vil ta tid før stiftelsen bestemmer mekanismen for å fordele tokenene sine.
* Tokens som StarkWare eier eiere, ansatte og av uavhengige programvareutviklere låses opp i en fireårsperiode. med oppstart på ett år med gradvis frigivelse
* Tokenet vil øke desentraliseringen av StarkNetts bruk til stemmegivning, staking og betaling av avgifter

I dag[StarkNet](https://starknet.io/)tar et annet steg mot desentralisering. StarkNet token er nå[på Ethereum](https://etherscan.io/address/0xca14007eff0db1f8135f4c25b34de49ab0d42766). Recapping hurtig: STRK brukes som et stakingstokt for deltagelse i StarkNetts konsensusmekanismer, som styringskode og for å betale transaksjonsavgifter. Begrunnelsen for hver av disse brukes presenteres i[vårt desentraliseringsforslag](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), i seksjonen med tittelen ”Hva skal tokenene brukes til?”

***Pass på å svindel**på tidspunktet for skriving er det ingen måte å kjøpe StarkNet Tokens; denne tomgangsperioden vil fortsatt være på plass til videre oppsigelse fra[stiftelsen StarkNet Foundation](https://twitter.com/StarkNetFndn); følge offisiell kommunikasjon fra StarkNet Foundation for å få informasjon om status på STRK. Du kan rapportere svindel og sjekke etter andre rapporter om svindel i[kanalen for scam-report](https://discord.gg/qypnmzkhbc)på[StarkNet Discord](http://starknet.io/discord)serveren.*

Posten forklarer klargjøringsprosessen for toktarbeidet, og hvordan de benyttede toktkontraktene har to av tokens tre prosjekterte hjelpesystemer, nemlig stemmegivning og staking. Det tredje verktøyet – betaling av StarkNet fees – vil drøftes senere.

### Planlegging av kode for tildeling

Vi har tidligere foreslått[plan](https://medium.com/starkware/part-3-starknet-token-design-5cc17af066c6)for første tildeling av tokenene. Tokens som tildeles aksjonærer, ansatte og uavhengige programvareutviklere låses i fire år, med et gradvis løsladingsprogram som starter etter ett år. Låste symboler kan brukes til stemmegivning og staking, men kan ikke overføres eller handles. Noen av tokenene er låst via en dedikert smartkontrakt på Ethereum, mens andre tokens er låst via depotbevis.

Minst 50,1% av de eksisterende StarkNet tokens er allokert til StarkNet Foundation, som skal brukes til å nå sine[mål](https://medium.com/@StarkNet_Foundation/welcome-to-the-world-starknet-foundation-7bd55d5dbc59)(jf.[StarkWare's post](https://medium.com/starkware/introducing-the-starknet-foundation-bd4b4379fbb)). Disse tokene er ikke låst. Stiftelsen vil imidlertid trenge tid til å utarbeide den eksakte mekanismen for ytterligere å kunne allokere tokens og dele planene sine i tide.

#### Hvorfor låse?

Låse tokenet for den nevnte perioden sikrer at nåværende bidragsytere samordner med de langsiktige insentivene til StarkNet. Den fraråder også spekulasjon over tokenet på forhånd bruk av det tiltenkte formål: å sikre nettverket, betale gebyr og å desentralisere styringen.

Så forklarer vi hvordan implementeringen av tokenet støtter stemmegivning og staking.

### Stemming

Stiftelsen vil være ansvarlig for å lette godt styresett og kunne utforme stemmeberettigede mekanismer. StarkNet Token ble utformet slik at både direkte stemmegivning og ulike delegeringsmekanismer.

#### stemmegivning fra L1

Nå gir ERC-20 implementeringen**valgfri**bruk av Compounds[delegasjonsmodul](https://docs.compound.finance/v2/governance/). Denne modulen er mye brukt til stemmegivning på nettet. Årsaken til at det er valgfritt for StarkNet og avrevet som standard, er kostnadsvurdering. Ved å slå på det betyr at hver overføring av StarkNet Tokens på L1 krever ekstra gass alene for å kunne spore endringer ved stemmekraften.

#### Non-L1 voting

Alternativer til L1 on-chain stemme med Compound delegasjonsmodul omfatter off-chain voting, samt Starknet-baserte stemmesystemer (for eksempel[SnapshotX](https://snapshot.mirror.xyz/cUOrwdtEs5PvNh0sqYWWxPjt8GdJWn_Qp3cl7E3_8IU)). Disse alternativene, som reduserer gassforbruket betydelig for L1-overføringer, krever ikke eksplisitt støtte fra den ERC-20-koden som er i bruk og støttes derfor av denne arven.

Som nevnt over, vil alle tokens — låst og låst opp — kunne brukes i StarkNetts stemmemekanisme.

### Strekking

StarkNetts tilgangsløse og censorshipresistente drift krever et tilfeldig utvalg av sekvenser. Sannsynligheten for at en EK-gruppe blir valgt til å sekvensere og foreslå en blokk er proporsjonal med antallet StarkNet Tokens som noden staker. Begrunnelsen for å bruke StarkNet Tokens (snarere enn, si: Ethereum eller Bitcoin) er forklart i[styringsforslaget](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), og de nøyaktige detaljene til staking, sekvensering og opprettelse av blokk på StarkNet er pågående[diskusjon av samfunnet](https://community.starknet.io/t/starknet-decentralized-protocol-introduction/2671), og er ennå ikke avsluttet.

Som ved stemmegivning, kan tokens brukes til å stå selv når de blir låst. Dette bidrar til mangfoldet av StarkNet operatører og til motstandsdyktigheten til StarkNet.

### Summary

Distribusjon av StarkNet Token-kontraktene på Ethereum er et annet steg i StarkNet desentralisering.

Vi oppfordrer utviklere og brukere til å være vareløse av svindel! I publiseringen er ingen tokens handel, og den ikke noe-handelsstatusen vil bli liggende inntil videre gjort kjent fra StarkNet Foundation.

For flere spørsmål kan du gå til[Token-diskusjonen](https://discord.gg/qypnmzkhbc)kanalen på[StarkNet Discord](http://starknet.io/discord)serveren.