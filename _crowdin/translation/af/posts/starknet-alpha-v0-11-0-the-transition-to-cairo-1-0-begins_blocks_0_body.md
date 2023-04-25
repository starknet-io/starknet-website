## TL; DR

* Starknet alpha v0.11.0 is uit en regstreeks op Testnet
* U kan nou Kaïro 1.0-kontrakte op Starknet Testnet ontplooi en daarmee interaksie hê!
* Berekening op Starknet is 5x goedkoper!
* Vir die eerste keer sal die Mainnet-opgradering na Starknet alpha v0.11.0 vir 'n bestuursstemming geplaas word
* Dit dui die begin aan van die oorgangstydperk voor[Regenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)
* Die implementering van Kaïro 1.0-kontrakte op Mainnet sal eers geaktiveer word na 'n paar weke se loop op Testnet, sodra ons verseker het dat die nuwe stelsel glad verloop.

## Inleiding

Ons is opgewonde om aan te kondig dat die langverwagte Starknet alpha v0.11.0 regstreeks op Testnet is! Hoekom is dit 'n groot stap vir Starknet? In Starknet v0.11.0 kan jy[Cairo 1.0](https://medium.com/starkware/cairo-1-0-is-here-7e1ac8377038)slim kontrakte verklaar, ontplooi en laat loop. Ons stel ook 'n nuwe stelseloproep bekend wat 'n gladde oorgang van bestaande kontrakte na 'n Cairo 1.0-implementering moontlik maak.

Cairo 1.0 verbeter Starknet in twee verskillende aspekte. Eerstens verbeter dit die ontwikkelingservaring deur 'n ryker programmeertaal aan te bied, wat (onder andere) tipes/generika/eienskappe/fouthantering aan Kaïro bekendstel. Tweedens speel Cairo 1.0 'n sleutelrol in Starknet se desentralisasiereis: Cairo 1.0-kontrakte wat in Starknet alpha v0.11.0 saamgestel word na Sierra. Sierra waarborg dat elke kontrakuitvoering bewysbaar is, wat 'n deurslaggewende eiendom in 'n gedesentraliseerde Starknet is.

Nog 'n belangrike verbetering wat in hierdie weergawe kom, is 'n 5x kostevermindering vir berekening. Dit sal Starknet selfs meer vriendelik maak vir rekenaarintensiewe toepassings. Meer besonderhede hieronder.

## Maak gereed vir Regenesis

Starknet alpha v0.11.0 merk die begin van die oorgangstydperk, wat voorbereiding voor Starknet se Regenesis sal toelaat. Starknet se Regenesis-plan is[gepubliseer](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)'n paar maande gelede, en dit fokus op die oorgang van 'n stelsel gebaseer op Kaïro 0 na 'n stelsel gebaseer op Kaïro 1.0.

Gedurende die oorgangstydperk het bestaande Kaïro 0-kontrakte (indien hulle opgradeerbaar is) die geleentheid om hul adres en berging te behou, en die implementering daarvan moeiteloos na Kaïro 1.0 oor te skakel (sien volgende afdeling).

As 'n Starknet-gebruiker beteken dit dat jy eers jou beursie hoef op te gradeer sodra die nuwe Cairo 1.0-implementering van jou rekening vrygestel is (jy sal dit enige tyd tot en met die Regenesis self kan doen). Geen stilstand word verwag nie, al die dapps in die stelsel sal voortgaan om soos gewoonlik te werk.

Ná die Regenesis sal Starknet ophou om die oorblywende Kaïro 0-kontrakte regdeur die stelsel te ondersteun. Dit sal vooraf goed gekommunikeer word, en ontwikkelaars sal genoeg tyd gegun word om hul kontrakte te migreer. Die oorgangstydperk sal na verwagting 'n paar maande duur, en dapp-ontwikkelaars kan reeds begin om hul implementering na Cairo 1.0 te migreer. Aan die einde van die Oorgangstydperk sal die Regenese plaasvind.

## Gladde migrasie na Kaïro 1.0

Met die oorgang na Kaïro 1.0, word bestaande Kaïro 0-kontrakte opgeskort en sal dit nie meer op Regenesis ondersteun word nie. Om opgradeerbare Kaïro 0-kontrakte toe te laat om voort te gaan, selfs ná die Regenesis, en die staat tot op daardie tydstip opgebou te hou, het ons 'n nuwe stelseloproep bygevoeg - ['vervang_klas'](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#replace_class_syscall). Opgradeerbare kontrakte het geen probleem met die opgradering na 'n Cairo 1.0-implementering nie, maar die onderliggende volmag (die kontrak wat die werklike toestand hou) sal steeds by die Cairo 0-implementering bly. Die \`vervang_klas\`-stelseloproep los hierdie probleem op deur toe te laat dat die volmagkontrak sy onderliggende klas vervang, dws dieselfde adres en berging behou, maar die implementering vervang.

## Berekening is nou 5x goedkoper!

Vandag het Starknet-transaksiefooie twee hoofkomponente: berekening en on-ketting data. Die berekeningselement van die Starknet-transaksiefooi word bepaal deur die marginale koste om die bewys daarvan op L1 te verifieer (sien die[dokumente](https://docs.starknet.io/documentation/architecture_and_concepts/Fees/fee-mechanism/)vir meer besonderhede).

Oorspronklik het ons 200m Kaïro-stap in 'n bewys wat 5m gas vir verifikasie vereis, gelei tot 'n naïewe skatting van 0,05 gas per Kaïro-stap. Sedertdien het ons na[rekursiewe bewyse](https://medium.com/starkware/recursive-starks-78f8dd401025)beweeg wat voorsiening maak vir 'n aansienlike vermindering in L1-verifikasiekoste (slegs die wortel van 'n rekursieboom bereik L1). Dit is nou tyd om ons oorspronklike skattings dienooreenkomstig op te dateer - die prys van elke Kaïro-stap op L2 sal met 5x verminder word, en sal nou 0,01 gas kos.

Hierdie kostevermindering is beduidend vir rekenaarintensiewe toepassings, bv. rekeningkontrakte met nie-inheemse handtekeninge. Eenvoudige transaksies sal 'n geringe kostevermindering (~ 5%). In toekomstige weergawes sal ons die tweede komponent hanteer: on-chain data kostes. Sodra alternatiewe vir on-ketting-data aan Starknet (ook bekend as Volition) bekendgestel is, sal die kostevermindering oor die hele linie gevoel word.

## Starknet Governance Eerste Stem

Die eerste fase van Starknet Governance het van stapel gestuur (meer besonderhede[hier](https://medium.com/starknet-foundation/starknets-governance-first-phase-4614c7566f40)). Gemeenskapslede kan nou deelneem aan die vorming van Starknet deur 'n bykomende kanaal, naamlik om oor protokolveranderings te stem.

Starknet Governance eerste fases sal fokus op Starknet protokol opgraderings. Elke Starknet-weergawe-opgradering sal eers op Testnet ontplooi word; kiesers sal 'n tydperk van 6 dae hê om die opgegradeerde weergawe te ondersoek en te toets soos dit op Goerli loop. Gedurende hierdie tyd sal 'n Snapshot-voorstel oopgemaak word, en die gemeenskap kan stem oor die goedkeuring van die nuwe weergawe vir Mainnet-ontplooiing.

As die voorstel 'n meerderheid van 'JA' stemme kry gedurende die 6-dae stemperiode, word die voorstel geslaag en sal Starknet Mainnet dienooreenkomstig opgegradeer word.

Starknet alpha v0.11.0 is die eerste Starknet-weergawe waaroor gestem kan word. Die Starknet alpha v0.11.0-stem sal oop wees vir ses dae vanaf die Testnet-ontplooiing.

Relevante skakels:

* [Snapshot spasie](https://snapshot.org/#/starknet.eth/proposal/0x00889bc468509610e516e8602f00b21ca8c32466dd4f0140eca38becb7f40bef)
* [Bladsy vir delegering-ontdekking](https://delegate.starknet.io/)
* Starknet alpha v0.11.0 besprekingsdraad op die[Gemeenskapsforum](https://community.starknet.io/t/proposal-starknet-alpha-v0-11-0/50334)

## Kaïro 1.0 en Sierra

Sierra (**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**tion) is 'n intermediêre voorstelling wat saamstel na Cairo assembly (CASM). Voor Starknet alpha v0.11.0, sou 'n ontwikkelaar Cairo 0 in CASM saamstel en die resultaat na die Starknet-volgorder stuur. Met Cairo 1.0 stel ontwikkelaars hul kode saam na Sierra, en stuur hierdie intermediêre voorstelling na die sequencer. Die sequencer sal dit dan saamstel na CASM. Sierra is gewaarborg om saam te stel na “veilige CASM”, dws 'n subset van CASM wat nie kan misluk nie, wat elke uitvoering bewysbaar maak. Dit waarborg dat die sequencer fooie sal kan hef, selfs vir teruggekeerde transaksies, en beskerm teen DOS. Vir meer inligting, sien[die dokumente](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/).

![](https://miro.medium.com/v2/resize:fit:1400/0*KsAwaJTIsOuCsJIe)

Starknet alpha 0.11.0 sal die[Cairo 1.0-alpha.6 weergawe](https://github.com/starkware-libs/cairo/releases/tag/v1.0.0-alpha.6)gebruik. Hierdie weergawe is naby aan[kenmerkpariteit](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)met Kaïro 0, met alle Starknet-stelseloproepe reeds teenwoordig.

Let daarop dat die Starknet-volgorder 'n vaste samestellerweergawe gebruik, wat beteken dat taalverbeterings dalk nie onmiddellik in Starknet beskikbaar is nie, en slegs beskikbaar sal wees na 'n Starknet-weergawe-opdatering. Spesifiek, terwyl verbeterings wat die Cairo 1.0 → Sierra-samestelling raak onmiddellik in werking kan tree, sal veranderinge aan die Sierra → CASM-samesteller (sien die[docs](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/)vir meer besonderhede) moet wag vir 'n Starknet-opgradering.

## Wat anders is nuut?

### Nuwe transaksietipe — Verklaar v2

Ons voeg[n nuwe transaksie tipe](https://docs.starknet.io/documentation/architecture_and_concepts/Blocks/transactions/#declare_v2_cairo_1_0)by om Kaïro 1.0-klasse te verklaar.

Hierdie nuwe \`declare\`-transaksieweergawe is soortgelyk aan die bestaande \`declare\`, met twee belangrike onderskeidings:

* Die klasvoorwerp wat nou gestuur word, verteenwoordig Sierra eerder as CASM, dws die klas se semantiek word deur die Sierra-voorstelling gedefinieer.
* Die gebruiker onderteken ook die saamgestelde klashash. Dit is 'n belangrike stap totdat Sierra→CASM-samestelling as deel van die Starknet-bedryfstelsel bewys sal word.

Vir meer besonderhede, sien[die dokumente](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#what_to_expect).

Vanuit die ontwikkelaar se oogpunt bly die ervaring dieselfde. Nadat jy jou Cairo 1.0-kode geskryf het, kan jy die CLI gebruik om die klas te verklaar.

**Let daarop dat \`declare v2\`-transaksies aanvanklik nie op Starknet Mainnet aanvaar sal word nie. Na 'n tydperk van eksperimentering op Testnet, sal die nuwe transaksietipe op Mainnet geaktiveer word, en Cairo 1.0-klasse sal beskikbaar word.**

### Poseidon is hier

[Poseidon](https://www.poseidon-hash.info/)is 'n familie hash-funksies wat ontwerp is om baie doeltreffende algebraïese stroombane te hê. As sodanig kan hulle baie nuttig wees in ZK-bewysstelsels soos STARKs en SNARKs. Vanaf Starknet alpha v0.11.0 sal ontwikkelaars Poseidon kan gebruik. Daarbenewens sal sommige van die hash-berekenings wat deel is van die Starknet-protokol na Poseidon oorgaan (spesifiek, die klas-hash, saamgestelde klas-hash en dele van die staatsverbintenis sal Poseidon gebruik, sien[die dokumente](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#poseidon_hash)vir meer besonderhede). In die toekoms sal meer interne komponente oorgaan na die gebruik van die Poseidon-hash-funksie.

Die presiese weergawe en parameters wat in Starknet gebruik word, kan[hier](https://docs.starknet.io/documentation/architecture_and_concepts/Hashing/hash-functions/#poseidon_hash)gevind word.

### Diverse veranderinge

Soos vorige Starknet-weergawes, het 'n opgradering ook implikasies vir ons API's en ander laevlak-komponente. Hieronder lys ons dit en spreek die spesifieke veranderinge aan wat aangebring is:

* v0 oproep/verklaar-transaksies word nie meer ondersteun nie
* L1→L2-boodskappe vereis nou[fooie](https://docs.starknet.io/documentation/architecture_and_concepts/L1-L2_Communication/messaging-mechanism/#l1-l2_message_fees). Dit wil sê, boodskappe wat met geen fooi gestuur word, sal nie deur die Starknet-volgorder verwerk word nie
* Die on-chain data formaat is[verander](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/#on_chain_data_post_v0_11_0)
* [API-veranderinge](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#api_changes)(nie alle veranderinge word hier gelys nie, verwys asseblief na die dokumente vir 'n volledige lys):
* het 'n nuwe \`get_compiled_class_by_class_hash\` eindpunt bygevoeg
* \`get_class_by_hash\` gee beide Cairo 0 / Cairo 1.0 klasse terug (afhangende van die gevraagde hash)
* \`get_state_update\` het 'n nuwe afdeling vir vervangde klasse, en verklarings word verdeel tussen Kaïro 0 en Kaïro 1 klasse.
* \`estimate_fee\` en \`simulate_tx\` kan nou validering oorslaan
* 'n[nuwe](https://github.com/starkware-libs/starknet-specs/releases/tag/v0.3.0-rc1)Starknet JSON-RPC weergawe

## Wat kom volgende?

Noudat al die Kaïro 1.0-verwante infrastruktuur in plek gestel is, kan jy verwag:

* Verdere taalverbeterings aan Cairo 1.0
* Prestasieverbeterings:[soos belowe](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de), ons gaan voort om die TPS aansienlik te verhoog. Die volgende stap in die padkaart is die oorgang na die[Rust sequencer](https://github.com/starkware-libs/blockifier), wat in die oopte ontwikkel word onder die Apache 2.0-lisensie. Die nuwe sequencer sal gebruik maak van die[roes CairoVM](https://github.com/lambdaclass/cairo-rs)en die[Papyrus](https://github.com/starkware-libs/papyrus)volle nodus, wat die Performance Trio vorm.
* Offchain[DA](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/)! In hierdie weergawe het ons die berekeningskomponent van die transaksie se koste hanteer. In komende weergawes sal ons die on-ketting datakoste hanteer, wat vandag die dominante koste vir gemiddelde transaksies is.

![](/assets/starknet-alpha-v0.11.0-diagram.png)