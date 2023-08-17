## TL;DR

* Starknet alpha v0.11.0 is afwezig en live op Testnet
* U kunt nu gebruik maken van en communiceren met Cairo 1.0 contracten op Starknet Testnet!
* Berekening op Starknet is 5x goedkoper!
* Voor het eerst wordt de Mainnet upgrade naar Starknet alpha v0.11.0 in stemming gebracht
* Dit markeert het begin van de overgangsperiode vóór[Regenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)
* Caïro 1 implementeren. contracten voor Mainnet zullen pas na enkele weken op Testnet worden uitgevoerd, zodra we ervoor zorgen dat het nieuwe systeem soepel functioneert.

## Introductie

We zijn blij te kunnen aankondigen dat de langverwachte Starknet alpha v0.11.0 live is op Testnet! Waarom is dit een grote stap voor Starknet? In Starknet v0.11.0 kunt u[Cairo 1.0](https://medium.com/starkware/cairo-1-0-is-here-7e1ac8377038)smart contracts aangeven, implementeren en uitvoeren. We introduceren ook een nieuw systeem dat een soepele overgang van bestaande contracten naar een tenuitvoerlegging van Cairo 1.0 mogelijk maakt.

Caïro 1.0 verbetert Starknet in twee verschillende aspecten. Ten eerste wordt de ontwikkelingservaring verbeterd door een rijkere programmeertaal aan te bieden, die (onder andere) types/generics/traits/fouten in Caïro introduceert. Ten tweede speelt Cairo 1.0 een belangrijke rol in de decentralisatiereis van Starknet: Cairo 1.0 contracten verzonden in Starknet alpha v0.11.0 compile to Sierra. In Sierra wordt gewaarborgd dat elke uitvoering van het contract kan worden bewezen, wat een cruciaal onderdeel is van een gedecentraliseerde Starknet.

Een andere belangrijke verbetering in deze versie is een kostenverlaging van 5x voor de berekening. Dit zal Starknet nog vriendelijker maken voor berekende intensieve applicaties. Meer details hieronder.

## Klaar voor Regenes

Starknet alpha v0.11.0 markeert het begin van de overgangsperiode, waardoor Starknet's Regenese kunnen worden voorbereid. Starknet Regenesis plan werd een paar maanden geleden[gepubliceerd](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)en het richt zich op de overgang van een systeem gebaseerd op Caïro 0 naar een systeem gebaseerd op Caïro 1,0.

Tijdens de overgangsperiode hebben bestaande contracten van Caïro 0 contracten (als ze zijn verbeterd) de mogelijkheid om hun adres en opslag te behouden en een naadloze overgang naar Caïro 1. (zie volgende sectie).

Als een Starknet-gebruiker betekent dit dat u uw portemonnee alleen hoeft te upgraden zodra de nieuwe Cairo 1 is geïnstalleerd. de implementatie van uw account wordt vrijgegeven (u kunt het op elk moment tot de Regenesis zelf). Er wordt geen tijdverlies verwacht, alle dapps in het systeem blijven werken zoals gebruikelijk.

Na de Regenesis zal Starknet stoppen met het ondersteunen van de resterende Cairo 0 contracten in het hele systeem. Dit zal goed van tevoren worden gecommuniceerd, en ontwikkelaars zullen voldoende tijd krijgen om hun contracten te migreren. De overgangsperiode zal naar verwachting een paar maanden duren en dapp-ontwikkelaars kunnen hun implementatie al beginnen te migreren naar Cairo 1.0. Aan het einde van de overgangstijd zal de Regenesis plaatsvinden.

## Gladde migratie naar Caïro 1.0

Met de overgang naar Caïro 1.0 worden bestaande contracten van Caïro 0 niet meer ondersteund en wordt Regenesis niet langer ondersteund. Om upgradbare Caïro 0 contracten toe te staan om door te gaan, zelfs na de Regensis en houd de staat tot die tijd opgebouwd, we hebben een nieuwe systeemoproep toegevoegd — ['replace_class'](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#replace_class_syscall). Opwaarderen van contracten is geen probleem met upgraden naar een Caïro 1. De tenuitvoerlegging, maar de onderliggende proxy (het contract dat de feitelijke staat bezit) blijft steken in de tenuitvoerlegging van de tenuitvoerlegging van Caïro 0. De \`replace_class\` syscall lost dit probleem op door het proxycontract toe te staan de onderliggende klasse te vervangen. – hetzelfde adres en dezelfde opslag bewaren, maar de tenuitvoerlegging vervangt.

## Berekening is nu 5x Cheaper!

Vandaag de dag bestaan de Starknet transactiekosten uit twee belangrijke componenten: berekening en on-chain gegevens. De berekenings-element van de Starknet transactievergoeding wordt bepaald door de marginale kosten van het verifiëren van zijn bewijs op L1 (zie de[docs](https://docs.starknet.io/documentation/architecture_and_concepts/Fees/fee-mechanism/)voor meer details).

Oorspronkelijk stappen onze 200m Cairo in een bewijs dat 5 m gas vereist voor verificatie geleid tot een naïeve inschatting van 0,05 gas per stap van Caïro. Sindsdien we hebben verplaatst naar[recursieve bewijzen](https://medium.com/starkware/recursive-starks-78f8dd401025)die een aanzienlijke vermindering van de L1 verificatiekosten mogelijk maken (alleen de root van een recursie boom bereikt L1). Het is nu tijd om onze oorspronkelijke ramingen dienovereenkomstig aan te passen – de prijs van elke Cairo-stap op L2 zal met 5x worden verlaagd, en zal nu 0 kosten. 1 gas.

Deze kostenverlaging is significant voor berekende intensieve toepassingen, bijvoorbeeld contracten met niet-native handtekeningen. Eenvoudige transacties zullen een kleine kostenreductie zien (~ 5%). In toekomstige versies gaan we om met de tweede component, de on-chain gegevenskosten. Zodra er alternatieven voor on-chain gegevens worden geïntroduceerd in Starknet (aka Volition), zal de kostenverlaging over de hele linie worden gevoeld.

## Starknet Governance Eerste stem

De eerste fase van Starknet Governance is gestart (meer details[hier](https://medium.com/starknet-foundation/starknets-governance-first-phase-4614c7566f40)). Gemeenschapsleden kunnen nu deelnemen aan het vormgeven van Starknet via een extra kanaal, namelijk stemmen over veranderingen in het protocol.

De eerste fasen van Starknet governance zullen gericht zijn op upgrades van het Starknet protocol. Elke Starknet versie upgrade zal eerst worden ingezet op Testnet; De kiezers hebben een periode van zes dagen om de verbeterde versie zoals die op Goerli loopt te onderzoeken en te testen. In deze periode zal er een voorstel van Snapshot worden ingediend en de gemeenschap zal kunnen stemmen over de vraag of zij de nieuwe versie voor Mainnet zal goedkeuren.

Als het voorstel tijdens de zes dagen van stemming een meerderheid van de stemmen krijgt, wordt het voorstel goedgekeurd en Starknet Mainnet bijgeschaafd.

Starknet alpha v0.11.0 is de eerste Starknet versie waarover gestemd kan worden. De stemming met Starknet alpha v0.11.0 zal zes dagen duren vanaf de implementatie van het Testnet.

Relevante links:

* [Momentopname ruimte](https://snapshot.org/#/starknet.eth/proposal/0x00889bc468509610e516e8602f00b21ca8c32466dd4f0140eca38becb7f40bef)
* [Verkiezing pagina ontdekt](https://delegate.starknet.io/)
* Starknet alpha v0.11.0 discussiethread op het[Community forum](https://community.starknet.io/t/proposal-starknet-alpha-v0-11-0/50334)

## Caïro 1.0 en Sierra

Sierra (**S**afe**I**niet**e**rmediate**R**blaad**r**esent**a**tion) is een tussenvertegenwoordiging die samenstelt met de vergadering van Caïro (CASM). Pre Starknet alpha v0.11.0, een ontwikkelaar zal Cairo 0 samenstellen in CASM en het resultaat naar de Starknet sequencer sturen. Met Caïro 1.0 compileren ontwikkelaars hun code naar Sierra, en sturen ze deze tussenvertegenwoordiging naar de volgorde. De sequencer compileert deze vervolgens naar CASM. Sierra is gegarandeerd om “veilige CASM” te compileren, dat wil zeggen een subset van CASM dat niet mag falen, waardoor elke executie uitvoerbaar is. Dit garandeert dat de opvolger kosten in rekening kan brengen, zelfs voor omgekeerde transacties, waarbij hij beschermd is tegen DOS. Voor meer informatie, zie[de documenten](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/).

![](https://miro.medium.com/v2/resize:fit:1400/0*KsAwaJTIsOuCsJIe)

Starknet alpha 0.11.0 gebruikt de[Caïro 1.0-alpha.6 versie](https://github.com/starkware-libs/cairo/releases/tag/v1.0.0-alpha.6). Deze versie is dicht bij[functie pariteit](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)met Caïro 0, terwijl alle Starknet systeem oproepen al aanwezig zijn.

Merk op dat de Starknet sequencer een vaste compiler versie gebruikt, dat betekent dat taalverbeteringen niet onmiddellijk beschikbaar zijn in Starknet, en alleen beschikbaar zijn na een update van de Starknet-versie. Concreet gesproken zijn er verbeteringen in de eerste versie van Caïro. → Sierra compilatie kan onmiddellijk van kracht worden, veranderingen in de Sierra → CASM compiler (zie de[docs](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/)voor meer informatie) zullen moeten wachten op een Starknet upgrade.

## Wat is anders nieuw?

### Nieuw transactietype — Verklaar v2

We voegen[een nieuw transactietype](https://docs.starknet.io/documentation/architecture_and_concepts/Blocks/transactions/#declare_v2_cairo_1_0)toe om Caïro 1.0 lessen uit te roepen.

Deze nieuwe \`declare\` transactieversie is vergelijkbaar met de bestaande \`declare\`, met twee belangrijke verschillen:

* Het klassenobject dat nu wordt gestuurd vertegenwoordigt Sierra in plaats van CASM, dat wil zeggen dat de semantiek van de klasse wordt bepaald door de Sierra representatie.
* De gebruiker is ook de gecompileerde klasse hash aan het ondertekenen. Dit is een cruciale stap totdat het compileren van de CASM als onderdeel van het Starknet OS bewezen is.

Voor meer details, zie[de documenten](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#what_to_expect).

Vanuit het oogpunt van de ontwikkelaar blijft de ervaring hetzelfde. Na het schrijven van de Cairo 1.0 code kun je de CLI gebruiken om de les aan te melden.

**Merk op dat \`declare v2\` transacties niet worden geaccepteerd op Starknet Mainnet. Na een periode van experimenteren op Testnet, zal het nieuwe transactietype worden ingeschakeld op Mainnet en zullen Caïro 1.0 lessen beschikbaar zijn.**

### Poseidon is hier

[Poseidon](https://www.poseidon-hash.info/)is een familie van hash-functies ontworpen voor het hebben van zeer efficiënte algebraïsche circuits. Als zodanig kunnen ze zeer nuttig zijn wanneer ZK systemen zoals STARKs en SNARK's bewijst. Vanaf Starknet alpha v0.11.0 kunnen ontwikkelaars Poseidon gebruiken. Bovendien zullen sommige hash-berekeningen die deel uitmaken van het Starknet protocol overstappen naar Poseidon (met name de klassenhash, gecompileerde klasse hash, en delen van de staat commitment zullen Poseidon gebruiken, zie[de documentatie](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#poseidon_hash)voor meer details). In de toekomst zullen meer interne componenten overschakelen naar het gebruik van de Poseidon-hashfunctie.

De exacte versie en parameters die gebruikt worden in Starknet kan je vinden[hier](https://docs.starknet.io/documentation/architecture_and_concepts/Hashing/hash-functions/#poseidon_hash).

### Diverse wijzigingen

Zoals de vorige Starknet-versies, heeft een upgrade ook implicaties voor onze API's en andere componenten met een laag niveau. Hieronder geven we een lijst met de specifieke wijzigingen die zijn aangebracht:

* v0 invoke/declare transacties worden niet langer ondersteund
* L1→L2 berichten vereisen nu[kosten](https://docs.starknet.io/documentation/architecture_and_concepts/L1-L2_Communication/messaging-mechanism/#l1-l2_message_fees). Dat wil zeggen, berichten die met nultarief worden verzonden worden niet verwerkt door de Starknet-sequencer
* Het on-chain gegevensformaat is[gewijzigd](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/#on_chain_data_post_v0_11_0)
* [API wijzigingen](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#api_changes)(niet alle wijzigingen worden hier weergegeven, raadpleeg de documenten voor een uitputtende lijst) :
* voegde een nieuw \`get_compiled_class_by_class_hash\` eindpunt toe
* \`get_class_by_hash\` geeft beide Cairo 0 / Cairo 1.0 klassen terug (afhankelijk van de opgevraagde hash)
* \`get_state_update\` heeft een nieuw gedeelte voor vervangen klassen en verklaringen zijn verdeeld tussen Caïro 0 en Caïro 1 klassen.
* \`estimate_fee\` en \`simulate_tx\` kan nu validatie overslaan
* A[new](https://github.com/starkware-libs/starknet-specs/releases/tag/v0.3.0-rc1)Starknet JSON-RPC version

## Wat komt er nu?

Nu al de 1,0-aanverwante infrastructuur van Caïro is gecreëerd, kunt u het volgende verwachten:

* Verdere taalverbeteringen naar Caïro 1.0
* Verbeteringen in prestaties:[zoals beloofd](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de), we gaan vooruit naar een aanzienlijke verhoging van de TPS. De volgende stap in de routekaart is de overgang naar de[Rust sequenencer](https://github.com/starkware-libs/blockifier), die open is ontwikkeld onder de Apache 2. licentie. De nieuwe sequencer zal gebruik maken van de[rust CairoVM](https://github.com/lambdaclass/cairo-rs)en het[Papyrus](https://github.com/starkware-libs/papyrus)full node, wat de Prestatie Trio maakt.
* Offchain[DA](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/)! In deze versie hebben we de rekenkundige component van de transactiekosten behandeld. In de komende versies zullen we de kosten van de on-chain gegevens verwerken, die vandaag de dag de overhand hebben voor gemiddelde transacties.

![](/assets/starknet-alpha-v0.11.0-diagram.png)