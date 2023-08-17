### TL;DR

* S'està desenvolupant un nou seqüenciador StarkNet
* És de codi obert sota la llicència Apache 2.0
* El seu primer objectiu és augmentar el rendiment de StarkNet

### Un nou seqüenciador brillant

Ens complau anunciar que un nou seqüenciador StarkNet està en marxa. A mesura que la pila tecnològica de StarkNet avança cap al codi obert, després de[Cairo 1.0](https://medium.com/starkware/open-sourcing-cairo-1-0-b3100a664bb0)i[Papyrus Full Node](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202), ara continuem amb el nou seqüenciador de StarkNet. Serà de codi obert, disponible amb llicència Apache 2.0, i ja podeu anar a comprovar[el repo](https://github.com/starkware-libs/blockifier)!

La creació d'un nou seqüenciador forma part del full de ruta[StarkNet](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de)que vam presentar fa uns mesos. La implementació del nou seqüenciador començarà amb la substitució del**Blockifier**, el mòdul dins del seqüenciador que realitza l'execució del bloc. Tal com s'explica al full de ruta, s'espera que ofereixi beneficis per al rendiment de StarkNet.

El nostre enfocament per construir aquest seqüenciador és el mateix que ens va guiar a StarkNet Alpha. El seqüenciador**s'implementarà en les etapes**, i avui compartim el seu primer mòdul. Amb el temps, s'aniran completant nous components del seqüenciador, fins que finalment un seqüenciador basat en Rust substituirà completament el seqüenciador basat en Python actual.

### Què fa el seqüenciador?

A StarkNet, després que els usuaris enviïn transaccions, la primera parada en el viatge de la transacció cap a l'escala STARK són els seqüenciadors. En el protocol StarkNet, els seqüenciadors s'encarreguen d'ordenar les transaccions i de produir blocs. Després que el bloc sigui creat per un seqüenciador i aprovat pel protocol de consens, els provadors prenen el relleu i generen una prova per a L1.

![](/assets/1_ndrekwqunjixo_wskdeycw-1.png)

### Open-Sourcing

StarkNet Alpha es va llançar a Mainnet el novembre de 2021. Des del primer moment, es va comprometre a compartir el poder de l'escala STARK amb el món.

Avui, estem llançant el primer d'una línia de mòduls del nou seqüenciador de codi obert. Es necessitaran diversos mesos perquè tots els mòduls i submòduls es desplegaran. L'open sourcing tot permetrà als membres de la comunitat contribuir al desenvolupament i auditar la base de codi.

Això aproparà StarkNet a un punt de seqüenciació descentralitzada sense permís. Ara estem dissenyant el protocol descentralitzat de StarkNet i estem animant la comunitat a participar en la investigació[i la discussió](https://community.starknet.io/t/starknet-decentralized-protocol-consensus/5386).

### Rendiment

El seqüenciador original de StarkNet és en gran mesura una adaptació de la infraestructura de StarkEx. Ara, hi ha una necessitat d'una infraestructura que es construeixi especialment per als requisits d'una xarxa descentralitzada d'alt rendiment.

Construït a Rust, el nou seqüenciador està dissenyat i desenvolupat tenint en compte el rendiment. El nou seqüenciador també es basa en unes bases sòlides: Papyrus, el nou node complet[StarkNet,](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202)s'encarregarà de la gestió de l'estat, i cairo-rs, el nou Cairo-VM de LambdaClass, accelerarà l'execució del Caire. Esperem que el nou seqüenciador millori el seqüenciador existent en tots els aspectes. S'espera que el rendiment i la latència de la xarxa millorin dràsticament amb la integració d'aquest seqüenciador a StarkNet.

També esperem que altres infraestructures i eines de desenvolupament puguin utilitzar el nou seqüenciador per millorar l'experiència de desenvolupament. S'espera que el rendiment complet del node millori, així com tots els marcs de prova.

### Resum

Ens complau anunciar avui el nou seqüenciador de codi obert. El seu primer mòdul ja està disponible perquè la comunitat pugui revisar-lo, i es seguirà amb més mòduls en els propers mesos. També estem encantats de fer un pas més en el nostre full de ruta per millorar el rendiment de StarkNet. Volem que la xarxa sigui més eficient i accessible, i agraïm el suport de tots els que ens han unit en aquest viatge.