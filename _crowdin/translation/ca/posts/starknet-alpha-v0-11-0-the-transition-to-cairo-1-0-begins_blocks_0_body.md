## TL;DR

* Starknet alpha v0.11.0 ja està disponible a Testnet
* Ara podeu implementar i interactuar amb els contractes de Cairo 1.0 a Starknet Testnet!
* La computació a Starknet és 5 vegades més barata!
* Per primera vegada, l'actualització de Mainnet a Starknet alpha v0.11.0 es sotmetrà a una votació de govern.
* Això marca l'inici del període de transició abans de[Regènesi](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)
* La implementació dels contractes de Cairo 1.0 a Mainnet només s'habilitarà després d'unes poques setmanes d'execució a Testnet, un cop ens assegurem que el nou sistema funciona correctament.

## Introducció

Ens complau anunciar que l'esperat Starknet alpha v0.11.0 està en directe a Testnet! Per què és un gran pas per a Starknet? A Starknet v0.11.0, podeu declarar, desplegar i executar[contractes intel·ligents Cairo 1.0](https://medium.com/starkware/cairo-1-0-is-here-7e1ac8377038). També introduïm una nova convocatòria de sistema que permet una transició suau dels contractes existents a una implementació de Cairo 1.0.

Cairo 1.0 millora Starknet en dos aspectes diferents. En primer lloc, millora l'experiència de desenvolupament oferint un llenguatge de programació més ric, que introdueix (entre altres coses) tipus/genèrics/trets/maneig d'errors al Caire. En segon lloc, Cairo 1.0 juga un paper clau en el viatge de descentralització de Starknet: els contractes de Cairo 1.0 enviats a Starknet alpha v0.11.0 es compilen a Sierra. Sierra garanteix que cada execució del contracte és demostrable, que és una propietat crucial en un Starknet descentralitzat.

Una altra millora important que arriba en aquesta versió és una reducció de costos de càlcul 5x. Això farà que Starknet sigui encara més amigable amb les aplicacions intensives en computació. Més detalls a continuació.

## Preparant-se per a la regenesi

Starknet alpha v0.11.0 marca l'inici del període de Transició, que permetrà preparar-se abans de la Regenesi de Starknet. El pla Regenesis de Starknet[va publicar fa](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)mesos i se centra en la transició d'un sistema basat en Cairo 0 a un sistema basat en Cairo 1.0.

Durant el període de transició, els contractes existents de Cairo 0 (si es poden actualitzar) tenen l'oportunitat de mantenir la seva adreça i emmagatzematge i fer una transició perfecta de la seva implementació a Cairo 1.0 (vegeu la secció següent).

Com a usuari de Starknet, això vol dir que només heu d'actualitzar la vostra cartera un cop s'alliberi la nova implementació de Cairo 1.0 del vostre compte (podreu fer-ho en qualsevol moment fins a la pròpia Regenesis). No s'espera cap temps d'inactivitat, tots els dapps del sistema continuaran funcionant com de costum.

Després de la Regènesi, Starknet deixarà de donar suport als contractes restants de Cairo 0 a tot el sistema. Això es comunicarà amb antelació i els desenvolupadors tindran temps suficient per migrar els seus contractes. Es preveu que el període de transició duri uns quants mesos i els desenvolupadors dapp ja poden començar a migrar la seva implementació a Cairo 1.0. Al final del període de Transició, es produirà la Regènesi.

## Migració suau al Caire 1.0

Amb la transició a Cairo 1.0, els contractes existents de Cairo 0 queden obsolets i ja no seran compatibles amb Regenesis. Per permetre que els contractes actualitzables de Cairo 0 continuïn operant, fins i tot després de la Regènesi, i mantenir l'estat construït fins a aquest moment, hem afegit una nova trucada al sistema: ['replace_class'](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#replace_class_syscall). Els contractes actualitzables no tenen cap problema amb l'actualització a una implementació de Cairo 1.0, però el proxy subjacent (el contracte que manté l'estat real) encara es quedarà enganxat amb la implementació de Cairo 0. El syscall \`replace_class\` resol aquest problema permetent al contracte de proxy substituir la seva classe subjacent, és a dir, mantenir la mateixa adreça i emmagatzematge, però substituir la implementació.

## La computació és ara 5 vegades més barata!

Avui, les tarifes de transacció de Starknet tenen dos components principals: la computació i les dades en cadena. L'element computacional de la tarifa de transacció de Starknet està determinat pel cost marginal de verificar la seva prova a L1 (vegeu els[documents](https://docs.starknet.io/documentation/architecture_and_concepts/Fees/fee-mechanism/)per a més detalls).

Originalment, els nostres passos del Caire de 200 m en una prova que requereixen 5 m de gas per a la verificació van conduir a una estimació ingenua de 0,05 gasos per pas del Caire. Des de llavors, hem passat a[proves recursives](https://medium.com/starkware/recursive-starks-78f8dd401025)que permeten una reducció significativa del cost de verificació de L1 (només l'arrel d'un arbre de recursivitat arriba a L1). Ara és el moment d'actualitzar les nostres estimacions originals en conseqüència: el preu de cada pas del Caire a L2 es reduirà 5 vegades i ara costarà 0,01 gasolina.

Aquesta reducció de costos és important per a aplicacions de càlcul intensiu, per exemple, contractes de comptes amb signatures no natives. Les transaccions simples veuran una reducció de costos menor (~ 5%). En futures versions, gestionarem el segon component: els costos de dades en cadena. Un cop s'introdueixin alternatives a les dades de la cadena a Starknet (també conegut com a Volition), la reducció de costos es notarà a tots els nivells.

## Primera votació del govern de Starknet

S'ha llançat la primera fase de Starknet Governance (més detalls[aquí](https://medium.com/starknet-foundation/starknets-governance-first-phase-4614c7566f40)). Els membres de la comunitat ara poden participar en la configuració de Starknet mitjançant un canal addicional, és a dir, votar els canvis de protocol.

Les primeres fases de Starknet Governance se centraran en les actualitzacions del protocol Starknet. Cada actualització de la versió de Starknet es desplegarà primer a Testnet; els votants tindran un període de 6 dies per examinar i provar la versió actualitzada mentre s'executa a Goerli. Durant aquest temps, s'obrirà una proposta de Snapshot i la comunitat pot votar si s'aprova la nova versió per al desplegament de Mainnet.

Si la proposta obté la majoria de vots "SÍ" durant el període de votació de 6 dies, la proposta passa i Starknet Mainnet s'actualitzarà en conseqüència.

Starknet alpha v0.11.0 és la primera versió de Starknet que es vota. La votació de Starknet alpha v0.11.0 estarà oberta durant sis dies a partir del desplegament de Testnet.

Enllaços rellevants:

* [Espai d'instantànies](https://snapshot.org/#/starknet.eth/proposal/0x00889bc468509610e516e8602f00b21ca8c32466dd4f0140eca38becb7f40bef)
* [Pàgina de descobriment de delegacions](https://delegate.starknet.io/)
* Fil de discussió Starknet alpha v0.11.0 al fòrum de la comunitat[](https://community.starknet.io/t/proposal-starknet-alpha-v0-11-0/50334)

## El Caire 1.0 i Sierra

Sierra (**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**tion) és una representació intermèdia que es compila a l'assemblea del Caire (CASM). Abans de Starknet alpha v0.11.0, un desenvolupador compilaria Cairo 0 a CASM i enviava el resultat al seqüenciador Starknet. Amb Cairo 1.0, els desenvolupadors compilen el seu codi a Sierra i envien aquesta representació intermèdia al seqüenciador. El seqüenciador el compilarà a CASM. Sierra té la garantia de compilar a "CASM segur", és a dir, un subconjunt de CASM que no pot fallar, fent que totes i cadascuna de les execucions siguin demostrables. Això garanteix que el seqüenciador podrà cobrar comissions fins i tot per transaccions revertides, protegint-se del DOS. Per obtenir més informació, consulteu[the docs](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/).

![](https://miro.medium.com/v2/resize:fit:1400/0*KsAwaJTIsOuCsJIe)

Starknet alpha 0.11.0 utilitzarà la versió</a>de[Cairo 1.0-alpha.6. Aquesta versió s'aproxima a la paritat](https://github.com/starkware-libs/cairo/releases/tag/v1.0.0-alpha.6)de

amb Cairo 0, amb totes les trucades al sistema Starknet ja presents.</p> 

Tingueu en compte que el seqüenciador de Starknet utilitza una versió del compilador fixa, la qual cosa significa que les millores d'idioma poden no estar disponibles immediatament a Starknet i només estaran disponibles després d'una actualització de la versió de Starknet. Concretament, tot i que les millores que afecten la compilació Cairo 1.0 → Sierra poden tenir efecte immediatament, els canvis al compilador Sierra → CASM (vegeu els[docs](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/)per a més detalls) hauran d'esperar una actualització de Starknet.



## Què més hi ha de nou?



### Nou tipus de transacció: declarar v2

Estem afegint[un nou tipus de transacció](https://docs.starknet.io/documentation/architecture_and_concepts/Blocks/transactions/#declare_v2_cairo_1_0)per declarar classes Cairo 1.0.

Aquesta nova versió de transacció \`declare\` és similar a la \`declare\` existent, amb dues distincions importants:

* L'objecte de classe que s'està enviant ara representa Sierra en lloc de CASM, és a dir, la semàntica de la classe està definida per la representació de Sierra.
* L'usuari també està signant el hash de classe compilada. Aquest és un pas crucial fins que la compilació Sierra→CASM es demostri com a part del sistema operatiu Starknet.

Per obtenir més detalls, consulteu[the docs](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#what_to_expect).

Des del punt de vista del desenvolupador, l'experiència segueix sent la mateixa. Després d'escriure el vostre codi Cairo 1.0, podeu utilitzar la CLI per declarar la classe.

**Tingueu en compte que inicialment, les transaccions \`declare v2\` no s'acceptaran a Starknet Mainnet. Després d'un període d'experimentació a Testnet, el nou tipus de transacció s'habilitarà a Mainnet i les classes Cairo 1.0 estaran disponibles.**



### Poseidó és aquí

[Poseidó](https://www.poseidon-hash.info/)és una família de funcions hash dissenyades per tenir circuits algebraics molt eficients. Com a tal, poden ser molt útils en sistemes de prova ZK com ara STARK i SNARK. A partir de Starknet alpha v0.11.0, els desenvolupadors podran utilitzar Poseidon. A més, alguns dels càlculs hash que formen part del protocol Starknet passaran a Poseidon (específicament, el hash de classe, el hash de classe compilat i parts del compromís estatal utilitzaran Poseidon, vegeu[els documents](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#poseidon_hash)per a més detalls). En el futur, més components interns passaran a utilitzar la funció hash de Poseidon.

La versió i els paràmetres exactes que s'utilitzen a Starknet es poden trobar[aquí](https://docs.starknet.io/documentation/architecture_and_concepts/Hashing/hash-functions/#poseidon_hash).



### Canvis diversos

Igual que les versions anteriors de Starknet, una actualització també té implicacions per a les nostres API i altres components de baix nivell. A continuació els enumerem i tractem els canvis específics que s'han fet:

* Les transaccions d'invocació/declaració v0 ja no s'admeten
* Els missatges L1→L2 ara requereixen[tarifes](https://docs.starknet.io/documentation/architecture_and_concepts/L1-L2_Communication/messaging-mechanism/#l1-l2_message_fees). És a dir, els missatges enviats amb una tarifa zero no seran processats pel seqüenciador de Starknet
* El format de dades en cadena és[canviat](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/#on_chain_data_post_v0_11_0)
* [Canvis de l'API](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#api_changes)(no es mostren tots els canvis aquí, consulteu els documents per obtenir una llista exhaustiva):
* ha afegit un nou punt final \`get_compiled_class_by_class_hash\`
* \`get_class_by_hash\` retorna les dues classes Cairo 0 i Cairo 1.0 (segons el hash sol·licitat)
* \`get_state_update\` té una nova secció per a les classes substituïdes i les declaracions es divideixen entre les classes Cairo 0 i Cairo 1.
* \`estimate_fee\` i \`simulate_tx\` ara poden ometre la validació
* Una versió[nova](https://github.com/starkware-libs/starknet-specs/releases/tag/v0.3.0-rc1)Starknet JSON-RPC



## Què ve després?

Ara que s'ha posat en marxa tota la infraestructura relacionada amb Cairo 1.0, podeu esperar:

* Més millores d'idioma a Cairo 1.0
* Millores de rendiment:[tal com s'havia promès](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de), seguim avançant cap a augmentar significativament el TPS. El següent pas del full de ruta és la transició al seqüenciador[Rust](https://github.com/starkware-libs/blockifier), que es desenvolupa a l'aire lliure sota la llicència Apache 2.0. El nou seqüenciador farà ús del node complet[rust CairoVM](https://github.com/lambdaclass/cairo-rs)i[Papyrus](https://github.com/starkware-libs/papyrus), formant el Performance Trio.
* Offchain[DA](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/)! En aquesta versió, vam gestionar el component computacional del cost de la transacció. En les properes versions, gestionarem els costos de dades en cadena, que avui són el cost dominant per a les transaccions mitjanes.

![](/assets/starknet-alpha-v0.11.0-diagram.png)