### TL;DR

* StarkWare biedt een bereik aan databeschikbaarheid (DA) modi voor klanten om uit te kiezen, volgens hun prioriteit
* Er zijn drie benaderingen voor de beschikbaarheid van gegevens voor STARK-proofs, allemaal zijn al beschikbaar in de productie:\
  -**Rollup**: de ledger wordt direct gepubliceerd op de blockchain\
  -**Validium**: een Comité voor gegevensbeschikbaarheid beveiligt het ledger, met slechts een hash wordt opgeslagen on-chain\
  —**Volition**: apps kunnen gebruikers hun DA modus laten kiezen — Rollup of Validium — voor elke transactie
* Het maakt niet uit welke DA wordt gebruikt - de geldigheid van alle transacties wordt gegarandeerd door STARKs

### Introductie

Vanaf 2022 november heeft[StarkEx](https://starkware.co/starkex/)meer dan $750 miljard aan handelsvolume en meer dan 270m transacties op Etherum. In de NFT ruimte, powering apps zoals ImmutableX en Sorare, StarkEx heeft meer dan 85 miljoen NFT's gedolven tegen een prijs die 1000x goedkoper is dan dit direct op Ethereum te doen. STARK-technologie schaalt Ethereum. StarkEx heeft bijvoorbeeld in één week tijd het aantal transacties als Ethereum (12m op StarkEx vs 7) op 1.6x gerund. m op Ethereum) terwijl je minder dan 0,1% van Ethereum-blokkeerruimte in beslag neemt. En het doet dit allemaal terwijl het gebruikers hetzelfde niveau van veiligheid biedt als alsof ze zich rechtstreeks op Ethereum zouden vestigen.

### Hoe kan StarkWare dit bereiken?

Gebruikers verzenden transacties op Layer 2 (StarkEx of StarkNet), welke worden beslagen en verzonden naar een STARK-prover. Deze STARK-prover kent de status van de grootboek voor en nadat deze transacties zijn verwerkt. De prover produceert een STARK bewijs dat de geldigheid van de nieuwe staat van de ledger na het uitvoeren van deze transacties bevestigd is. De nieuwe staat en de STARK-bewijzen worden verzonden naar de on-chain STARK-verificator. De verificatie van dit bewijs gebeurt autonoom via een onveranderlijk smart contract op Ethereum.

Deze architectuur biedt het beste van beide werelden: we kunnen lage transactiekosten hebben, terwijl we desondanks Ethereum midden in de rij hebben als neutrale scheidsrechter. Ethereum als scheidsrechter is niet alleen maar een leuke tovenaar; het biedt kritieke beveiliging aan de eindgebruiker. Een gebruiker die transacties uitvoert kan er nu op vertrouwen dat zijn fondsen door Ethereum worden beveiligd, en dat de transacties onveranderlijk zijn zodra ze op Ethereum zijn geverifieerd. De gebruiker heeft ook volledig zelf voogdij over zijn geld. Zelfvoogdij is belangrijk omdat het ervoor zorgt dat de gebruiker te allen tijde toegang heeft tot zijn geld, zonder op een derde partij te vertrouwen.

### Waar past de beschikbaarheid van gegevens in dit alles?

Het is belangrijk om te benadrukken wat dit bewijs doet, evenals wat het is*niet*doen. Het bewijs bevestigt de geldigheid van de nieuwe staat, maar vertelt u niet wat de nieuwe staat is. Daarvoor heeft u gegevensbeschikbaarheid nodig. Als we alleen het bewijs hebben, dan weet de blockchain dat wat is ingediend geldig is, maar dat het niet weet wat de nieuwe staat (bijv. ledger saldo) ! Consumenten van deze gegevens zijn gebruikers die transacties binnen deze bewijzen hebben. De gegevens moeten ter beschikking worden gesteld als ze Ethereum geld willen opnemen zonder de Layer 2-operator te vertrouwen. Dit geeft gebruikers volledig zelf voogdij over hun geld.

Een analogie hiervoor is je middelbare leraar die je vraagt te bewijzen dat x gelijk is aan x. Dit is onbeduidend om te bewijzen. Wat is moeilijker te beantwoorden: wat is x eigenlijk gelijk? Daarvoor is aparte informatie nodig. Het zou kunnen zijn dat x gelijk is aan 5, of een andere waarde. Op de blockchain kan ook een STARK-bewijs worden ingediend bij een Smart Contract voor verificatie. En de verificateur kan bevestigen dat het bewijs geldig is (die x=x). Maar je hebt een aparte input nodig om je te vertellen wat x (het nieuwe ledger saldo) is.

Er zijn drie manieren om deze gegevens beschikbaar te maken:

#### Rollup Modus

Rollup modus zorgt ervoor dat de status van het ledger samen met de bewijzen op Ethereum wordt opgeslagen. Rollup modus wordt momenteel gebruikt door[dYdX](https://dydx.exchange/)in productie, en wordt ook gebruikt door het[Public StarkNet](http://starknet.io/)L2 netwerk. De voordelen hier zijn duidelijk: je kunt de status van de ledger opnieuw maken door alleen met de Ethereum-blockchain te communiceren. De implicatie hiervan is dat u, als eindgebruiker, met het relevante smart contract op Ethereum vertrouwelijk kunt praten en neem uw geld op, zelfs als het Layer 2-systeem afsluit.

#### Validium

Onder Rollup Modus gaat het grootste deel van Ethereum naar gegevensbeschikbaarheid, en niet naar bewijs verificatie. Dit komt omdat het zeer gas-intensief is om gegevens op de blockchain op te slaan. In Validium modus wordt de grootboek informatie niet naar Ethereum gestuurd. Het wordt daarentegen in een off-chain opgeslagen met een comité voor de beschikbaarheid van gegevens. Ethereum slaat een hash van deze grootboek op. Deze gegevensbeschikbaarheidscommissie bestaat uit een quorum van onafhankelijke leden die toezicht houden op de juiste update van de staat en een kopie van de verwerkte gegevens bijhouden. Elke StarkEx instantie kan hun eigen quorum maken. Quorum leden voor bestaande apps die op StarkEx draaien inclusief entiteiten zoals[Consensys](https://consensys.net/),[Nethermind](https://nethermind.io/),[Iqlusion](https://iqlusion.io/)en[Cephalopod](https://cephalopod.equipment/).

De voordelen hiervan zijn duidelijk. Er is geen noodzaak om Ethereum gaskosten te betalen voor het opslaan van de ledger informatie on-chain. Het enige dat op Ethereum wordt opgeslagen, is één enkele hash van de ledgerinformatie. Als u zonder enige twijfel geld van Layer 2 wilt opnemen door met Ethereum te praten, u hoeft alleen maar de digitale handtekening te eisen van een van de leden van het Comité voor beschikbaarheid. De DAC leden zullen cryptografie gebruiken om te bewijzen dat u eigenaar bent van deze fondsen.

Een ander verborgen voordeel van Validium Data Beschikbaarheid is vertrouwelijkheid van mensen die de blockchain lezen. Onder Rollup Modus is het saldo van elke rekening op het moment dat elk bewijs wordt ingediend bekend bij het publiek. Met Validium worden deze gegevens verborgen voor de blockchain - alleen de Commissie voor beschikbaarheid van gegevens is hiervan op de hoogte, omdat ze uit de keten wordt gehouden. Dit niveau van vertrouwelijkheid maakt een breed scala aan gebruiksmogelijkheden mogelijk waarbij het verduisteren van de transactiegegevens belangrijk is.

#### Stem

De sloop is een architectuur voor gegevensbeschikbaarheid die de keuze biedt tussen Validium en Rollup Mode op transactieniveau. Dat gebeurt door de ene boekhouding in de keten te houden en een ander boekboek met een comité voor gegevensbeschikbaarheid. Gebruikers kunnen kiezen tussen Validium en Rollup modus voor elke individuele transactie.

Stel je voor dat je een echt dure NFT aankoopt zoals een geborgen Aap of een Cryptopunk, op een app met op StarkEx. U kunt Rollup Mode gebruiken om de gegevens voor die NFT-gegevens te beveiligen, omdat je een record wilt van die specifieke transactie die is opgeslagen op Ethereum. Maar je kunt dan een heel goedkope NFT kopen (bijv. een mantel voor je personage in een blockchain-spel), en onder die omstandigheden zal je graag geld besparen door Validium te gebruiken.

Als je geïnteresseerd bent in de schaal die behaald is door STARK proofs, ga dan verder op ons.



U kunt altijd[info@starkware.co](mailto:info@starkware.co)mailen en een mens krijgt uw e-mail.