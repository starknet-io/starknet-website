### TL;DR

* StarkNet Token (STRK) är nu utplacerad på Ethereum Mainnet
* **Se upp för bedrägerier!**StarkNet Tokens erbjuds inte till salu
* Det kommer att ta tid för stiftelsen att fastställa mekanismen för att fördela sina symboler
* Tokens innehas av StarkWare aktieägare, anställda och av oberoende partnerutvecklare är låsta för en fyraårsperiod. med en gradvis release som börjar efter ett år
* Den token kommer att främja StarkNet: s decentralisering tack vare dess användning för att rösta, satsa och betala avgifter

Idag[StarkNet](https://starknet.io/)tar ytterligare ett steg mot decentralisering. StarkNet token är nu[på Ethereum](https://etherscan.io/address/0xca14007eff0db1f8135f4c25b34de49ab0d42766). Omräkning snabbt: STRK kommer att användas som en insatstecken för deltagande i StarkNet konsensus mekanismer, som en styrande token, och för att betala transaktionsavgifter. Motiveringen för var och en av dessa verktyg presenteras i[vårt decentraliseringsförslag](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), i avsnittet med rubriken ”Vad kommer tokens att användas för?”

***Se upp för bedrägerier:**vid skrivande stund finns det inget sätt att köpa StarkNet Tokens; denna icke-försäljning period kommer att finnas kvar tills vidare av[StarkNet Foundation](https://twitter.com/StarkNetFndn); följa officiell kommunikation från StarkNet Foundation för att lära sig om eventuella uppdateringar till status STRK. Du kan rapportera bedrägerier och söka efter andra rapporter av bedrägerier i[bluffrapport-kanalen](https://discord.gg/qypnmzkhbc)på[StarkNet Discord](http://starknet.io/discord).*

Detta inlägg förklarar token fördelningsprocessen, och hur de utplacerade token kontrakt tjäna två av token tre utformade verktyg, nämligen röstning och insats. Det tredje verktyget — betalande StarkNet avgifter — kommer att diskuteras vid ett senare tillfälle.

### Planerar tilldelningsprocessen för token

Vi har tidigare föreslagit en[plan](https://medium.com/starkware/part-3-starknet-token-design-5cc17af066c6)för initial tilldelning av tokens. Tokens som tilldelas aktieägare, anställda och oberoende programvaruutvecklare är låsta i fyra år, med en gradvis utgivningsplan som börjar efter ett år. Låsta tokens kan användas för röstning och insats, men kan inte överföras eller handlas. Några av de polletter är låsta via en dedikerad smart kontrakt på Ethereum medan andra polletter är låsta via väktare.

Separat, 50,1% av de befintliga StarkNet tokens fördelas till StarkNet Foundation, för att användas för att uppfylla sina[mål](https://medium.com/@StarkNet_Foundation/welcome-to-the-world-starknet-foundation-7bd55d5dbc59)(jfr .[StarkWare inlägg](https://medium.com/starkware/introducing-the-starknet-foundation-bd4b4379fbb)). Dessa tokens är inte låsta. Men stiftelsen kommer att behöva tid för att formulera den exakta mekanismen för att ytterligare fördela dessa symboler och kommer att dela sina planer i sinom tid.

#### Varför låsa?

Låsa tokens för ovan nämnda period ser till att nuvarande bidragsgivare överensstämmer med de långsiktiga incitamenten av StarkNet. Det avskräcker också spekulationer över symbolen i förväg av utbredd användning för dess avsedda ändamål: att säkra nätverket, betala avgifter och decentralisera styrningen.

Därefter förklarar vi hur symboliskt genomförande stöder omröstningar och insatser.

### Röstning

Stiftelsen kommer att ansvara för att underlätta en sund styrning och formulera omröstningsmekanismer. StarkNet Token utformades för att möjliggöra både direkta omröstningar och en rad delegationsmekanismer.

#### L1 röstning

Den ERC-20 implementering som nu används innehåller**valfria**användning av Compound’s[delegationsmodul](https://docs.compound.finance/v2/governance/). Denna modul används i stor utsträckning för att rösta på kedjan. Anledningen till att det är valfritt på StarkNet och stängs av som standard, är kostnadsövervägande. Att slå på det innebär att varje överföring av StarkNet Tokens på L1 kräver extra gas enbart för att spåra skiften i röststyrka.

#### Non-L1 voting

Alternativ till L1 on-chain rösta med Compounds delegationsmodul inkluderar off-chain röstning, liksom StarkNet-baserade on-chain röstningssystem (såsom[SnapshotX](https://snapshot.mirror.xyz/cUOrwdtEs5PvNh0sqYWWxPjt8GdJWn_Qp3cl7E3_8IU)). Dessa alternativ, som avsevärt minskar gasförbrukningen för L1-överföringar, kräver inte uttryckligen stöd från den ERC-20-kod som för närvarande distribueras, och stöds därmed.

Som nämnts ovan, alla tokens — låst och olåst — kommer att vara användbar i StarkNet röstmekanism.

### Utsättning

Starknets tillståndsfria och censur-resistenta drift kräver slumpmässigt urval av sekvensansvariga. Sannolikheten att en nod väljs för att sekvensera och föreslå ett block är proportionell mot antalet StarkNet Tokens som nod insatser. Motiveringen för att använda StarkNet Tokens (snarare än, säg, Ethereum eller Bitcoin) förklaras i[styrningsförslag](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), och de exakta detaljerna i insatsen, sekvensering och blockskapande på StarkNet är under pågående[diskussion av gemenskapen](https://community.starknet.io/t/starknet-decentralized-protocol-introduction/2671), och är ännu inte färdigställd.

Som med röstning, polletter kan användas för att satsa även när de är låsta. Detta bidrar till mångfalden hos StarkNet-operatörerna och till StarkNets motståndskraft.

### Summary

Utnyttjandet av StarkNet Token kontrakt på Ethereum är ytterligare ett steg i StarkNet decentralisering.

Vi uppmanar utvecklare och användare att vara försiktig med bedrägerier! Vid tidpunkten för publicering, inga polletter är handelsbara, och denna icke-handel status kommer att förbli på plats tills vidare av StarkNet Foundation.

För fler frågor kan du gå till[Token-discussions](https://discord.gg/qypnmzkhbc)kanalen på[StarkNet Discord](http://starknet.io/discord).