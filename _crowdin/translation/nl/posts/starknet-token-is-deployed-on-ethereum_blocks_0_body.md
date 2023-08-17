### TL;DR

* De StarkNet Token (STRK) is nu geïmplementeerd op Ethereum-Mainnet
* **Pas op voor scams!**StarkNet Tokens worden niet aangeboden voor de verkoop
* Het zal tijd kosten voordat de Stichting het mechanisme voor de distributie van haar tokens vaststelt
* Tokens van StarkWare aandeelhouders, werknemers en onafhankelijke partner softwareontwikkelaars zijn geblokkeerd voor een periode van vier jaar. met een geleidelijke release die begint na een jaar
* De token zal verdere decentralisatie van StarkNet, dankzij het gebruik voor stemmen, staking en betalen van kosten

Vandaag zet[StarkNet](https://starknet.io/)nog een stap in de richting van decentralisatie. Het StarkNet token is nu[op Ethereum](https://etherscan.io/address/0xca14007eff0db1f8135f4c25b34de49ab0d42766). Snel: STRK zal worden gebruikt als een staking token voor deelname aan de consensusmechanismen van StarkNet, als Governance token, en voor het betalen van transactiekosten. De reden voor elk van deze hulpprogramma's wordt weergegeven in[ons decentralisatievoorstel](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), in de sectie met de titel "Waar worden de tokens voor gebruikt?"

***Pas op voor scams:**op het moment van schrijven is er geen manier om StarkNet Tokens te kopen; deze no-sale periode blijft van kracht tot verdere kennisgeving door de[StarkNet Foundation](https://twitter.com/StarkNetFndn); volg de officiële communicatie van de StarkNet Foundation om te leren van eventuele updates over de status van STRK. Je kunt oplichtingen rapporteren en controleren op andere oplichtingsrapporten in het[scam-rapport](https://discord.gg/qypnmzkhbc)kanaal op de[StarkNet Discord](http://starknet.io/discord)server.*

Deze post legt het token toewijzingsproces uit en hoe de gebruikte token contracten twee van de drie ontworpen nutsvoorzieningen van de token, namelijk stemmen en staken, dienen. De derde hulpbron - waarmee StarkNet-kosten worden betaald - zal later worden besproken.

### Plannen van het toewijzingsproces voor token

We hebben eerder een[plan](https://medium.com/starkware/part-3-starknet-token-design-5cc17af066c6)voorgesteld voor de eerste toewijzing van de tokens. Tokens toegewezen aan aandeelhouders, werknemers en onafhankelijke softwareontwikkelaars zijn vier jaar vastgezet, met een geleidelijk vrijgavingsplan dat na een jaar begint. Vergrendelde tokens kunnen worden gebruikt voor stemmen en verblijven, maar kunnen niet worden verplaatst of verhandeld. Sommige van de tokens zijn vergrendeld via een specifiek smart contract op Ethereum en andere tokens zijn vergrendeld via bewakers.

Scheid, 50.1% van de bestaande StarkNet tokens worden toegewezen aan de StarkNet Foundation, om te worden gebruikt om haar[doelen](https://medium.com/@StarkNet_Foundation/welcome-to-the-world-starknet-foundation-7bd55d5dbc59)(cf.[StarkWare is post](https://medium.com/starkware/introducing-the-starknet-foundation-bd4b4379fbb)). Deze tokens worden niet vergrendeld. De stichting zal echter tijd nodig hebben om precies het mechanisme te formuleren om die tokens verder toe te wijzen en zal haar plannen op tijd delen.

#### Waarom vergrendelen?

Het vergrendelen van de tokens voor bovengenoemde periode zorgt ervoor dat de huidige bijdragers in overeenstemming zijn met de langetermijnprikkels van StarkNet. Het ontmoedigt ook speculaties over het token voordat het wijdverbreide gebruik voor de beoogde doeleinden wordt gebruikt: het waarborgen van het netwerk, het betalen van vergoedingen en het decentraliseren van het bestuur.

Vervolgens leggen we uit hoe de token implementatie stemming en inzet ondersteunt.

### Stemmen

De stichting is belast met het faciliteren van goed bestuur en het formuleren van stemmechanismen. De StarkNet Token was ontworpen om zowel rechtstreekse als verschillende delegatiemechanismen toe te staan.

#### L1 stem

De ERC-20 implementatie omvat nu**optioneel**gebruik van Compound's[delegatiemodule](https://docs.compound.finance/v2/governance/). Deze module wordt op grote schaal gebruikt voor stemmen in on-chain De reden dat het optioneel is op StarkNet en standaard is uitgeschakeld, is kostenbeoordeling. Het inschakelen betekent dat elke overdracht van de StarkNet Tokens op L1 extra gas nodig heeft om verschuivingen in het stemvermogen te kunnen volgen.

#### Non-L1 voting

Alternatieven voor L1 on-chain stemmen met Compound's delegatiemodule omvatten off-chain stemmen, evenals StarkNetbased on-chain stemsysteem (zoals[SnapshotX](https://snapshot.mirror.xyz/cUOrwdtEs5PvNh0sqYWWxPjt8GdJWn_Qp3cl7E3_8IU)). Deze alternatieven, die het gasverbruik voor de overdracht van L1 beduidend verminderen, hebben geen expliciete steun nodig van de ERC-20-code die momenteel wordt toegepast, en worden dus intrinsiek ondersteund.

Zoals hierboven vermeld, zullen alle tokens – vergrendeld en ontgrendeld – bruikbaar zijn in het stemmechanisme van StarkNet.

### Uitzetten

StarkNet's toegestane en censuur-resistente operatie vereist een willekeurige selectie van sequenties. De kans dat een node wordt geselecteerd voor volgorde en een blok wordt voorgesteld, is evenredig met het aantal StarkNet Tokens dat het knooppunt maakt. De reden voor het gebruik van StarkNet Tokens (in plaats van bijvoorbeeld Ethereum of Bitcoin) wordt uitgelegd in het[governance voorstel](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), en de exacte gegevens van het verblijven, het maken van een reeks en blok op StarkNet wordt momenteel[besproken door de gemeenschap](https://community.starknet.io/t/starknet-decentralized-protocol-introduction/2671), en is nog niet afgerond.

Net als bij stemmen kunnen tokens worden gebruikt voor staking zelfs wanneer ze vergrendeld zijn. Dit draagt bij aan de diversiteit van de Starknet-exploitanten en de veerkracht van StarkNet.

### Summary

De inzet van de StarkNet Token contracten over Ethereum is een volgende stap in de decentralisatie StarkNet.

We dringen er bij ontwikkelaars en gebruikers op aan om voorzichtig te zijn met zwendel! Op het moment van bekendmaking zijn er geen tokens verhandelbaar, en deze handelsstatus blijft van kracht tot nader inzicht door de StarkNet-stichting.

Voor meer vragen kan je naar het[Token-discussie](https://discord.gg/qypnmzkhbc)kanaal gaan op de[StarkNet Discord](http://starknet.io/discord)server.