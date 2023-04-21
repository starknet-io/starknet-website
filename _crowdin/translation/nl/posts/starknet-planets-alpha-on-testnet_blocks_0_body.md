### **TL;DR**

* [StarkNet Planets Alpha](https://voyager.online/)- de eerste stap op onze weg naar Mainnet - is nu live op Testnet!
* [StarkNet](https://starkware.co/product/starknet/)is een goedbedoelde Turing-complete ZK-Rollup1.
* Ontwikkelaars kunnen hun zakelijke logica van keuze in een slim contract implementeren en deze op Starknet implementeren.
* De staatsovergangen van StarkNet zijn bewezen buiten de keten en vervolgens geverifieerd on chain.
* Veel zoals Ethereum kunnen gebruikers direct communiceren met deze slimme contracten.

### **Introductie**

We[kondigde](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)de roadmap aan voor[StarkNet](https://starkware.co/product/starknet/)in Jan 2021. De Heilige Grail of scalability oplossingen zouden (i) willekeurige smart contracts ondersteunen, met (ii) composability (iii) geopereerd via een gedecentraliseerd netwerk. Vandaag kondigen we de implementatie aan op het testnet van stap 1: StarkNet Planets Alpha. Het Alpha-systeem ondersteunt willekeurige smart contracts. Later dit jaar zal de samenstelling worden gesteund, met decentralisatie als volgende.

Het is heel belangrijk dat we volledig transparant zijn en goede verwachtingen hebben. Het doel van deze post is duidelijk te vermelden wat er al is ondersteund en welke functionaliteiten nog ontbreken. Wat we vandaag vrijgeven, is werk in uitvoering op het gebied van testnet. Wij geloven dat deze vroege vrijlating zal bijdragen aan de vorming van een gezond ecosysteem rond StarkNet en zijn hulpmiddel. We willen ontwikkelaars graag met ons betrekken bij het opbouwen van het netwerk en continue feedback van de gemeenschap.

### **Wat is er in het StarkNet Alpha?**

**Functionaliteit:**De Alpha stelt ontwikkelaars in staat om StarkNet-contracten te schrijven en te implementeren voor algemene berekening. Er is geen whitelisting - elke ontwikkelaar kan schrijven en implementeren welk contract hij wil. Gebruikers kunnen interactie voeren met deze contracten, door transacties naar hen te sturen en hun status te controleren. Alle contracten bestaan in één staat. Updates aan deze staat worden aangetoond buiten de keten en geverifieerd – in de Alpha, wordt controle uitgevoerd op testnet.

**StarkNet OS:**De bovenstaande functionaliteit wordt ondersteund door een nieuw "besturingssysteem" dat we StarkNet OS noemen. Het biedt*aantoonbare*staatsovergangen op StarkNet. Ethereum-ontwikkelaars zouden het kunnen beschouwen als het equivalent van het EVM: het is verantwoordelijk voor het aanroepen van functies voor smart contracts, het verwerken van de opslag van contracten, etc. We zullen een afzonderlijke post publiceren met daarin de architectuur van het StarkNet OS.

**Wat is er niet in de Alpha?**In de Alfa ontbreken nog belangrijke mogelijkheden, zoals L1<>L2 interactie, on-chain data en composabiliteit. Meer over deze hieronder.

#### **Je Voet Wet krijgen**

Begin met onze[handleiding en documentatie](https://www.cairo-lang.org/docs/hello_starknet/).

Vervolgens kun je het[voorbeeld AMM smart contract](http://cairo-lang.org/docs/hello_starknet/amm.html)lezen dat we hebben geschreven en geïmplementeerd op StarkNet. Het is een eenvoudige AMM, en je kunt er mee communiceren[hier](https://starkware-amm-demo.netlify.app/swap). Je bent nu klaar om smart contracts te schrijven en implementeren op StarkNet. De block explorer voor StarkNet —[Voyager](https://voyager.online/)- stelt iedereen in staat om StarkNet's staat te inspecteren.\
Door je voeten te laten naten, denken we dat je beter voorbereid bent om te bouwen op StarkNet, terwijl we doorgaan met het rollen van extra functies. We zijn al bezig met het plannen van een eerste hackathon, evenals workshops voor ontwikkelaars.

### **Volgende stappen voor StarkNet**

De belangrijkste capaciteiten die nog ontbreken in de Alpha zullen de komende weken worden uitgerold. Deze zijn:

* L1<>L2 Interactie, bijvoorbeeld de mogelijkheid om geld te storten en op te nemen in L1.
* On-chain gegevens: publiceer alle opslagwijzigingen op Ethereum.
* Composabiliteit: het mogelijk maken dat contracten met elkaar communiceren.

Met deze functies zijn we klaar om StarkNet naar Ethereum Mainnet te brengen. We noemen deze stap in het ontwikkelingsstandpunt van StarkNet, en wanneer we het bereiken u kunt op Ethereum Mainnet-schaalbare L2-dApps bouwen en zonder toestemming implementeren.

#### **Het StarkNet ecosysteem**

We zijn erg enthousiast over het ecosysteem dat wordt gevormd rond StarkNet dus we zullen tot nu toe pauzeren om onze medewerkers te bedanken.

We werken nauw samen met[Nethermind](https://twitter.com/nethermindeth)en het Nubia-team[Alexey Akhunov](https://twitter.com/realLedgerwatch)(Erigon) &[Igor Mandrigin](https://twitter.com/mandrigin)(gateway. m),[Iddo Bentov](https://www.cs.cornell.edu/~iddo/),[dOrg](https://twitter.com/dOrg_tech),[Prof. Tim Roughgarden](https://twitter.com/algo_class),[Prof. Jeremy Avigad](https://www.andrew.cmu.edu/user/avigad/)& Yoav Seginer, als laatste, maar niet in de laatste plaats — de[Paradigm](https://twitter.com/paradigm)team.\
Onze vroege partners —[dYdX](https://twitter.com/dydxprotocol),[Immutable](https://twitter.com/Immutable),[Deversifi](https://twitter.com/deversifi)en[Sorare](https://twitter.com/SorareHQ),[Celer](https://twitter.com/CelerNetwork)en anderen - hebben ons vanaf de eerste dag van de dag voorzien van onschatbare input en laat ons een productienetwerk bouwen voor echte gebruikers.\
We blijven verrast door de kwaliteit van de inhoud gemaakt door de gemeenschap, door mensen zoals[Bobbin Threadbare](https://twitter.com/bobbinth),[Daniel Kroni](https://github.com/danielkroeni/cairo-playground/blob/main/anon-bank/README.md),[Adrian Hamelink](https://twitter.com/adr1anh),[perama](https://twitter.com/eth_worm),[Francesco Ceccon](https://twitter.com/ceccon_me),[Ilian Malchev](http://twitter.com/imalchev), en het[Alexandrië team](https://blockchainpartner.fr/).

We zijn benieuwd wat de gemeenschap op alle fronten zal maken: ontwikkelaarshulpmiddelen, inhoud en natuurlijk StarkNet applicaties die ze zullen bouwen. Laten we het gesprek in je favoriete media van keuze laten gaan:[discord](https://discord.gg/uJ9HZTUk2Y),[Twitter](https://twitter.com/CairoLang),[e-mail](mailto:info@starkware.co), en binnenkort de meest gedecentraliseerde communicatieformulieren gebruiken: f2f.

1 We zijn geen fan van de term ZK-Rollup, zoals wiskundig spreken: het is geen nul-kennis, maar u weet allemaal wat we bedoelen.

2 Anders dan de aparte staat onderhoud voor huidige implementaties van StarkEx op Mainnet

**Update (Nov. 2021):**StarkNet Alpha is live op Ethereum Mainnet