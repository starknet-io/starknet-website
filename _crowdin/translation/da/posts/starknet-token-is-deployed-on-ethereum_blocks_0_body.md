### TL;DR

* StarkNet Token (STRK) er nu indsat på Ethereum Mainnet
* **Pas på svindel!**StarkNet Tokens udbydes ikke til salg
* Det vil tage tid for instituttet at bestemme mekanismen til fordeling af sine tokens
* Tokens fra StarkWare aktionærer, medarbejdere og uafhængige partnersoftwareudviklere er låst i en periode på fire år, med en gradvis frigivelse begyndende efter et år
* Token vil yderligere StarkNets decentralisering takket være dens anvendelse til at stemme, satse og betale gebyrer

I dag tager[StarkNet](https://starknet.io/)endnu et skridt i retning af decentralisering. StarkNet token er nu[på Ethereum](https://etherscan.io/address/0xca14007eff0db1f8135f4c25b34de49ab0d42766). Kortlægning hurtigt: STRK vil blive brugt som en staking token for deltagelse i StarkNet's konsensusmekanismer, som en Governance token, og til betaling af transaktionsgebyrer. Baggrunden for hver af disse forsyningsselskaber er præsenteret i[vores decentraliseringsforslag](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), i afsnittet med overskriften “Hvad vil tokens blive brugt til?”

***Pas på svindel:**på tidspunktet for skrivning er der ingen måde at købe StarkNet Tokens; denne periode uden salg vil forblive på plads, indtil videre varsel af[StarkNet Foundation](https://twitter.com/StarkNetFndn)følge den officielle kommunikation fra StarkNet Foundation for at lære om eventuelle opdateringer af status for STRK. Du kan rapportere svindel og tjekke for andre rapporter om svindel i[scam-report](https://discord.gg/qypnmzkhbc)kanalen på[StarkNet Discord](http://starknet.io/discord)-serveren.*

Dette indlæg forklarer token allokeringsprocessen, og hvordan de indsatte token kontrakter tjene to af token's tre designede forsyningsselskaber, nemlig stemme og satse. Det tredje værktøj — betalende StarkNet gebyrer — vil blive drøftet på et senere tidspunkt.

### Planlægning af token-allokeringsprocessen

Vi har tidligere foreslået en[plan](https://medium.com/starkware/part-3-starknet-token-design-5cc17af066c6)for den første tildeling af tokens. Tokens allokeret til aktionærer, medarbejdere og uafhængige softwareudviklere er låst i fire år, med en gradvis udgivelse tidsplan starter efter et år. Låste tokens kan bruges til at stemme og satse, men kan ikke overføres eller handles. Nogle af tokens er låst via en dedikeret smart kontrakt på Ethereum, mens andre tokens er låst via depotejere.

Separat, 50,1% af de eksisterende StarkNet tokens er tildelt StarkNet Foundation, der skal bruges til at opfylde sine[mål](https://medium.com/@StarkNet_Foundation/welcome-to-the-world-starknet-foundation-7bd55d5dbc59)(jf.[StarkWare's indlæg](https://medium.com/starkware/introducing-the-starknet-foundation-bd4b4379fbb)). Disse tokens er ikke låst. Men instituttet har brug for tid til at formulere den nøjagtige mekanisme til yderligere tildeling af disse tokens og vil dele sine planer i god tid.

#### Hvorfor låse op?

Låsning af tokens for førnævnte periode sikrer, at de nuværende bidragsydere stemmer overens med StarkNets langsigtede incitamenter. Det afskrækker også spekulation over token forud for udbredt brug til de tilsigtede formål: sikring af netværket, betaling af gebyrer og decentralisering af styring.

Dernæst forklarer vi, hvordan den symbolske gennemførelse understøtter afstemning og indsats.

### Afstemning

Instituttet vil være ansvarlig for at fremme sund forvaltning og formulere afstemningsmekanismerne. StarkNet Token var designet til at tillade både direkte afstemning og en række delegering mekanismer.

#### L1 afstemning

ERC-20-implementeringen omfatter nu**valgfri**brug af Compounds[delegation modul](https://docs.compound.finance/v2/governance/). Dette modul er meget brugt til afstemning om kæder. Grunden til at det er valgfrit på StarkNet, og slukket som standard, er omkostningsmæssige hensyn. At tænde det betyder, at enhver overførsel af StarkNet Tokens på L1 kræver ekstra gas, der er nødvendig udelukkende til sporing af skift i stemmestyrken.

#### Non-L1 voting

Alternativer til L1 on-chain afstemning med Compounds delegation modul omfatter off-chain afstemning, samt StarkNet-baserede on-chain afstemningssystemer (såsom[SnapshotX](https://snapshot.mirror.xyz/cUOrwdtEs5PvNh0sqYWWxPjt8GdJWn_Qp3cl7E3_8IU)). Disse alternativer, som reducerer gasforbruget til L1-overførsler, kræver ikke eksplicit støtte fra ERC-20 kode i øjeblikket implementeret, og er dermed i sagens natur understøttet.

Som nævnt ovenfor, alle tokens — låst og låst op — vil være anvendelige i StarkNet afstemningsmekanisme.

### Indsats

StarkNet er tilladelsesfri og censur-resistent drift kræver tilfældig udvælgelse af sequencere. Sandsynligheden for en node bliver valgt til sekvens og foreslå en blok er proportional med antallet af StarkNet Tokens at node indsatser. Baggrunden for at bruge StarkNet Tokens (snarere end Ethereum eller Bitcoin) er forklaret i[regeringsforslag](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), og de nøjagtige oplysninger om indsatsen, sekventering og blokoprettelse på StarkNet er under løbende[diskussion af fællesskabet](https://community.starknet.io/t/starknet-decentralized-protocol-introduction/2671), og er endnu ikke afsluttet.

Som ved afstemning, kan tokens bruges til at satse selv når de er låst. Dette bidrager til mangfoldigheden af de StarkNet operatører og til StarkNets modstandsdygtighed.

### Summary

Indførelsen af StarkNet Token kontrakter på Ethereum er endnu et skridt i StarkNet decentralisering.

Vi opfordrer udviklere og brugere til at være på vagt over for svindel! På tidspunktet for offentliggørelsen er ingen tokens omsættelige, og denne no-trade status vil forblive på plads, indtil yderligere meddelelse fra StarkNet Foundation.

For flere spørgsmål kan du gå til[Token-diskussionskanalen](https://discord.gg/qypnmzkhbc)på[StarkNet Discord](http://starknet.io/discord)-serveren.