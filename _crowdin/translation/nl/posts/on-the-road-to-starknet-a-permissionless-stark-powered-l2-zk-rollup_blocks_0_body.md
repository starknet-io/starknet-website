#### **TL;DR**

We bouwen StarkNet in vier stappen:

* Stap 0 – Stichtingen (voltooid*)
* Stap I — Planets: Single-App Rollups
* Stap II — Constellingen: Multi-App Rollups
* Stap III — Universiteit: Een gedecentraliseerde Rollup

We verwachten dat ik in een paar maanden tijd stappen zal ondernemen en ben goed op weg naar stappen II & III aan het eind van 2021.

### **Introductie**

StarkWare is StarkNet, een gedecentraliseerde, permissieveloze en censuur-resistente STARK-aangedreven L2 ZK-Rollup die algemene berekening over Ethereum ondersteunt. Het is gebaseerd op de Turing-complete[Caïro-taal](https://www.cairo-lang.org/).

Ontwikkelaars, gebruikers en StarkNet nodes zullen alles kunnen doen wat je van een toegeefloze L2 Rollup verwacht: ontwikkelaars kunnen applicaties bouwen die hun eigen zakelijke logica implementeren en ze op StarkNet implementeren. Gebruikers kunnen transacties naar StarkNet sturen om uit te voeren, net zoals ze vandaag met Ethereum communiceren. StarkNet nodes en deelnemers zullen economisch worden gestimuleerd om ervoor te zorgen dat het netwerk efficiënt en eerlijk werkt.

Alle StarkNet-transacties zullen periodiek worden beslagen, en hun geldigheid zal worden bewezen in een STARK-bewijs, dat op Ethereum moet worden gecontroleerd. Omdat de vereiste inspanning om STARK proofs te verifiëren exponentieel klein is in vergelijking met de berekening bewezen, zal StarkNet Ethereum schalen op orders van magnitude.

Omdat alle StarkNet staat overgangen STARK-bewezen zullen zijn, zullen alleen geldige worden geaccepteerd op Ethereum. Alle gegevens die nodig zijn voor de wederopbouw van de volledige StarkNet-staat zullen worden gepubliceerd on-chain. Iedereen zal zijn eigen StarkNet node kunnen beheren. Deze eigenschappen maken StarkNet zo veilig en rechteloos als Ethereum.

We zijn er drie jaar bij geweest. en hebben al enkele opmerkelijke mijlpalen behaald door ‘Maan Math’ om te vormen tot productie-efficiënte software die op Ethereum draait. De manier waarop StarkWare dingen doet, is eerst de moeilijke problemen aanpakken, de kerntechnologie bouwen en vervolgens in de productie op stukjes en beetjes. We zullen blijven bouwen op deze manier terwijl we StarkNet tot een goed einde brengen.

![](/assets/ontheroad_02.png)

**Stap 0 – Stichtingen**

StarkWare heeft een aantal belangrijke fundamenten voor StarkNet gelegd.

#### **Cairo**

[Caïro](https://twitter.com/StarkWareLtd/status/1300353049836376066?s=20)is onze Turing-Complete High-Level Taal & framework voor de productie van STARK bewijzen voor algemene berekening. In plaats van het maken van complexe “circuits” of AIRs, kan een applicatieontwikkelaar Cairo gebruiken om elke bedrijfslogica te definiëren, deze te laten bewijzen buiten de keten en te controleren. Caïro is[in productie op Mainnet](https://twitter.com/StarkWareLtd/status/1320695603492507648?s=20)en is ook[beschikbaar voor ontwikkelaars](http://cairo-lang.org/).

Over een paar weken starten we met een openbaar Ethereum-testnet een Alpha versie van Cairo's Algemene Proof Service (GPS). *Dit stelt ontwikkelaars in staat om hun eigen toepassingen met behulp van Caïro te bouwen, welke bedrijfslogica ze ook willen. Ze sturen hun Cairo-code naar het GPS-systeem om te bewijzen en vervolgens te controleren on-chain.*

Met behulp van de GPS kan de integriteit van de uitvoering van afzonderlijke en onafhankelijke toepassingen worden bevestigd, Op die manier krijgen deze toepassingen de mogelijkheid om de gaskosten van de bewijsvoering te verdelen.

Cairo en GPS zijn de basis van StarkNet - onze beslissing om beide aan ontwikkelaars uit te besteden biedt hen een vroege blootstelling aan deze technologie. Niet alleen zodat ze kunnen beginnen met bouwen, maar ook de evolutie van StarkNet.

We zullen Cairo blijven ontwikkelen op basis van de behoeften en feedback van de ontwikkelaarsgemeenschap. We zullen deze taal verbeteren met nieuwe functies, syntax en builtins die de bruikbaarheid ervan verbeteren. en we zullen doorgaan met het ontwikkelen en verbeteren van de tools van Cairo: compilers, tracer/debugger, en integraties naar gemeenschappelijke IDEs.

StarkNet zal Caïro laten rennen onder de kap.

#### **De STARK Software Stack**

StarkWare heeft het krachtigste bewijs systeem in het ecosysteem ontwikkeld en het is maandenlang[live on Mainnet](https://medium.com/starkware/starks-over-mainnet-b83e63db04c0)geweest. StarkWare heeft ook[ethSTARK](https://twitter.com/StarkWareLtd/status/1264911004099543040?s=20)ontwikkeld, onze open-source prover, die 20X sneller is dan elke andere prover; het biedt zowel[zero-knowledge als post-quantum-beveiligde handtekeningen](https://twitter.com/StarkWareLabs/status/1331930111227080709).

Ons schalen van*metingen*– geen extrapolaties, noch beloften – omvatten de verwerking van 300K transacties in één bewijs op Mainnet, bereikt[het wereldrecord in de doorvoer van Rollup: 3K tps](https://twitter.com/StarkWareLtd/status/1287770381525422082?s=20). In het proces hebben we het wereldrecord voor de efficiëntie van Rollup bereikt: 315 gas/tx, orders van magnitude goedkoper dan transacties van Ethereum L1.

Deze technologie zal de hoeksteen vormen van de gedecentraliseerde Proving Layer of StarkNet, en daarom zullen we extra en uitgebreidere provers vrijgeven als onderdeel van de ontwikkeling van StarkNet(meer op dat op een aankomende blogpost).

#### **StarkEx**

StarkEx is onze L2 schaalbaarheidsmotor. Klanten van[DeversiFi](https://twitter.com/deversifi)worden sinds juni 2020 bediend op Mainnet. Het zal zowel[dYdX](https://twitter.com/dydxprotocol)als[ImmutableX](https://twitter.com/Immutable)aandragen vanaf een paar korte weken. StarkEx kan omgaan met complexe handelslogica (spot trading, derivaten, NFT's) en betalingen.

StarkEx ontwikkelden was onze manier om onze toolchain te dogmeren en te testen met de behoeften van de echte wereld. Er is niets dat overeenkomt met de eisen van feitelijke toepassingen en levende gebruikers om tools te helpen rijpen en zich te ontwikkelen. Het helpt ons ook te begrijpen welke elementen moeten worden aangesproken om het ecosysteem beter te kunnen dienen – bijvoorbeeld integraties met portemonnees en blokkeer verkenners.

StarkEx is een live voorbeeld van de mogelijkheid om applicaties te schalen met behulp van een STARK-gebaseerde ZK-Rollup, en is de eerste aanvraag in de productie van Mainnet geschreven in Caïro. Als zodanig zal het ook een van de toepassingen zijn die op StarkNet lopen.

![](/assets/ontheroad_03.png)

### **De weg vooruit**

#### **Stap I — Planets: Single-App Rollups**

Deze stap stelt ontwikkelaars in staat om hun eigen schaalbare applicaties te bouwen en te implementeren op StarkNet.

Op dit moment kan elke StarkNet-instantie één enkele applicatie uitvoeren. Verschillende instanties kunnen verschillende applicaties uitvoeren.\
Het StarkNet framework zal het volgende bevatten:

* Mechanismen zijn nodig om STARK-bewijzen voor de willekeurige logica van Caïro te genereren en ze vervolgens op Ethereum in te dienen en te verifiëren.
* Interacties met L1 Ethereum: stortingen en opnames van L1 tokens, publicatie van de on-chain gegevens, Escape Mechanisms die StarkNet gebruikers beschermen tegen kwaadaardige StarkNet-exploitanten, etc.
* Beheer van de L2 gebruikers saldi, en opslag en geheugen van de applicatie.

Ontwikkelaars kunnen zich uitsluitend richten op het opbouwen van de zakelijke logica van hun applicatie, en verplaats zich vervolgens in productie: implementeer en voer het op schaal uit op StarkNet.

Wat ons in staat stelt een algemene berekening schaalbare ZK-Rollup te bouwen is de combinatie van:

* Cairo, wat een algemene Turing-complete programmeertaal is
* Onze sterke STARK stapel (prover en verificatie), die het mogelijk maakt om enorme berekeningen te bundelen in een enkele proof

#### **Stap II — Constellingen: Multi-App Rollups**

De volgende stap ondersteunt meerdere applicaties die op hetzelfde StarkNet-exemplaar draaien en toegang krijgen tot de dezelfde globale L2-staat. Dit zal interoperabiliteit tussen verschillende toepassingen mogelijk maken, evenals lagere gaskosten als gevolg van verbeterde schaalvoordelen.

Cairo, de krachtige STARK-stapel en GPS versterken het concurrentievoordeel van StarkNet, door een multi-app Rollup te steunen.

In dit stadium StarkNet is een volledig functioneel kader voor het uitvoeren van*meerdere*applicaties met een willekeurige zakelijke logica bovenop Ethereum, met elke instantie die wordt uitgevoerd door één enkele operator.

Een operator kan nu een StarkNet-node draaien en ontwikkelaars van toepassingen kunnen hun contracten erop implementeren. Vanuit het perspectief van de gebruikers ziet StarkNet er nu uit als Ethereum, met een grotere omvang.

#### **Stap III — Universiteit: Ongecentraliseerde Rollup**

De laatste stap in de evolutie van StarkNet is het decentraliseren van de werking ervan.

Intriguing R&D vragen die we nu aanpakken wat van invloed is op deze fase inclusief (i) met behulp van ZK-Rollups om consensusbereik te verbeteren, en (ii) het ontwerpen van crypto-economische mechanismen om de gedecentraliseerde Starknet-bijdragers en -exploitanten (transactie-sequencers, provers, etc. te stimuleren. efficiënt, eerlijk en veilig functioneren.

### **Conclusie**

StarkWare is StarkNet aan het bouwen, een gedecentraliseerde toelatingsloze STARK-aangedreven L2 ZK-Rollup over Ethereum, dat algemene berekening ondersteunt op basis van de taal van Caïro.

StarkNet zal toepassingen in staat stellen te schalen zonder de veiligheid in gevaar te brengen gebruikers om redelijke transactiekosten te betalen, en het hele ecosysteem om substantieel te groeien en zijn belofte na te komen.

We nodigen de ontwikkelaarsgemeenschap graag uit om[deel te nemen](https://twitter.com/StarkWareLtd)aan deze reis.

**Update (Nov. 2021):**StarkNet Alpha is live op Ethereum Mainnet