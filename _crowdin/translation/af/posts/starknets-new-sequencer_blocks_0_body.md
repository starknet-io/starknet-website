### TL; DR

* 'n Nuwe StarkNet-volgorder word ontwikkel
* Dit is oopbron onder die Apache 2.0-lisensie
* Sy eerste doelwit is om StarkNet se deurset te verhoog

### 'n Blink nuwe sequencer

Ons is bly om aan te kondig dat 'n nuwe StarkNet Sequencer in die werke is. Soos StarkNet se tegnologiestapel na oopbron beweeg, na[Cairo 1.0](https://medium.com/starkware/open-sourcing-cairo-1-0-b3100a664bb0)en[Papyrus Full Node](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202), gaan ons nou voort met StarkNet se nuwe sequencer. Dit sal oopbron wees, beskikbaar onder Apache 2.0-lisensie, en jy kan nou na[die repo](https://github.com/starkware-libs/blockifier)gaan kyk!

Die bou van 'n nuwe reeksvormer is deel van die[StarkNet Padkaart](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de)wat ons 'n paar maande gelede aangebied het. Implementering van die nuwe sequencer sal begin met die vervanging van die**Blockifier**, die module binne die sequencer wat blokuitvoering uitvoer. Soos in die padkaart verduidelik, word verwag dat dit voordele vir StarkNet se prestasie sal lewer.

Ons benadering tot die bou van hierdie sequencer is dieselfde benadering wat ons in StarkNet Alpha gelei het. Die sequencer**sal in fases**geïmplementeer word, en ons deel vandag sy eerste module. Met verloop van tyd sal nuwe komponente van die sequencer voltooi word, totdat uiteindelik 'n Rust-gebaseerde sequencer die huidige Python-gebaseerde sequencer heeltemal sal vervang.

### Wat doen die sequencer?

Op StarkNet, nadat gebruikers transaksies gestuur het, is die eerste stop in die transaksie se reis na STARK-skaal die volgordebepalings. In die StarkNet-protokol is die volgordehouers verantwoordelik vir die ordening van die transaksies en die vervaardiging van blokke. Nadat die blok deur 'n sequencer geskep is, en deur die konsensusprotokol goedgekeur is, neem die beoordelaars oor en genereer 'n bewys vir L1.

![](/assets/1_ndrekwqunjixo_wskdeycw-1.png)

### Oopbronne

StarkNet Alpha is in November 2021 op Mainnet bekendgestel. Van die begin af was dit daartoe verbind om die krag van STARK-skaal met die wêreld te deel.

Vandag stel ons die eerste in 'n reeks modules van die nuwe oopbron-volgorder vry. Dit sal etlike maande neem vir alle modules en sub-modules om ontplooi te word. Open source alles sal gemeenskapslede in staat stel om by te dra tot die ontwikkeling en om die kodebasis te oudit.

Dit sal StarkNet nader bring aan 'n punt van gedesentraliseerde toestemminglose volgordebepaling. Ons ontwerp nou StarkNet se gedesentraliseerde protokol en ons moedig die gemeenskap aan om deel te neem aan die[navorsing en die bespreking](https://community.starknet.io/t/starknet-decentralized-protocol-consensus/5386).

### Optrede

StarkNet se oorspronklike volgorder is grootliks 'n aanpassing van StarkEx-infrastruktuur. Nou is daar 'n behoefte aan infrastruktuur wat spesiaal gebou is vir die vereistes van 'n gedesentraliseerde hoogs-presterende netwerk.

Gebou in Rust, is die nuwe sequencer ontwerp en ontwikkel met prestasie in gedagte. Die nuwe volgorder bou ook op soliede fondamente: Papyrus, die nuwe[StarkNet-volle nodus,](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202)sal staatsbestuur hanteer, en cairo-rs, die nuwe Cairo-VM deur LambdaClass, sal die uitvoering van Kaïro bespoedig. Ons verwag dat die nuwe sequencer in elke aspek op die bestaande sequencer sal verbeter. Die deurset en latensie van die netwerk sal na verwagting dramaties verbeter met die integrasie van hierdie sequencer in StarkNet.

Ons verwag ook dat ander infrastruktuur en ontwikkelingshulpmiddels die nuwe sekwenseerder sal kan gebruik om die ontwikkelingservaring te verbeter. Daar word verwag dat volledige nodusprestasie sal verbeter, sowel as al die toetsraamwerke.

### Opsomming

Ons is opgewonde om vandag die nuwe oopbron-volgorder aan te kondig. Die eerste module daarvan is reeds vir die gemeenskap beskikbaar om te hersien, en sal in die volgende maande met meer modules gevolg word. Ons neem ook graag nog 'n stap in ons padkaart om StarkNet se prestasie te verbeter. Ons poog om die netwerk meer doeltreffend en toeganklik te maak, en ons waardeer die ondersteuning van almal wat by ons aangesluit het op hierdie reis.