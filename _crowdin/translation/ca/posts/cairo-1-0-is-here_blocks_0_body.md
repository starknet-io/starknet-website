### TL;DR

* El primer llançament de Cairo 1.0 ja és aquí!
* Els desenvolupadors poden començar a escriure i provar els programes Cairo 1.0
* La paritat de funcions amb la versió anterior de Cairo s'aconseguirà en les properes setmanes
* El suport per als contractes de StarkNet s'afegirà a la propera versió de StarkNet Alpha

### Fons

Ens complau anunciar que la primera versió pública de Cairo 1.0 ja està disponible. Això marca una fita important en l'evolució del Caire, que es va introduir per primera vegada el 2020 com un llenguatge de programació complet de Turing per escriure de manera eficient programes demostrables amb STARK. Cairo 1.0 és un llenguatge d'alt nivell semblant a Rust. Igual que Rust, està pensat per permetre als desenvolupadors escriure codi fàcilment que sigui eficient i segur.

Des dels seus inicis, el Caire s'ha utilitzat per crear aplicacions de capa 2 que han gestionat[operacions per valor de més de 790.000 milions de dòlars, processat més de 300 milions de transaccions i encunyat més de 90 milions de NFT, totes realitzades fora de la cadena i liquidades a Ethereum](https://dashboard.starkware.co/starkex)el integritat matemàtica garantida per proves STARK. El Caire es va convertir en el quart llenguatge de programació més utilitzat a l'ecosistema blockchain[](https://defillama.com/languages)en general. Amb el llançament de Cairo 1.0, pretenem fer que l'idioma sigui encara més accessible i fàcil d'utilitzar alhora que introduïm noves funcions que milloren la seguretat i la comoditat.

Un dels canvis més significatius a Cairo 1.0 és la sintaxi. Ens hem inspirat en**Rust**per crear un llenguatge més amigable per a desenvolupadors que sigui més fàcil de llegir i escriure. La nova versió de Cairo permet escriure codis més segurs (mecanografiat fort, propietat i préstec, etc.), alhora que és més expressiu.

Cairo 1.0 també introdueix Sierra, una nova representació intermèdia que garanteix que es pugui provar**cada**carrera de Cairo. Això fa que Cairo 1.0 sigui especialment adequat per al seu ús en una xarxa sense permís com StarkNet, on pot proporcionar una robusta protecció DoS i resistència a la censura. Podeu llegir més sobre Sierra a la nostra publicació[](https://medium.com/starkware/cairo-1-0-aa96eefb19a0).

## Primer tast!

### Què pots fer avui?

Els desenvolupadors poden començar a escriure, compilar i provar els programes Cairo 1.0! Animem els desenvolupadors a començar a experimentar amb Cairo 1.0 i a acostumar-se a la nova sintaxi i funcions.

Com que Cairo 1.0 encara es desenvolupa activament i s'afegeixen noves funcions constantment, consulteu el repositori[Cairo](https://github.com/starkware-libs/cairo/)per obtenir les últimes actualitzacions.

### Que segueix?

De moment, a Cairo 1.0 encara li falten algunes de les funcions admeses a la versió anterior de Cairo ([vegeu aquesta taula per a més detalls](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)). La nostra propera fita, prevista en les properes setmanes, proporcionarà la paritat de funcions de Cairo 1.0 amb la versió anterior. Podeu fer un seguiment del progrés cap a aquesta fita[aquí](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md).

### Suport Starknet

S'admet l'escriptura de contractes StarkNet a Cairo 1.0 (tot i que encara falten algunes funcions). Tanmateix, StarkNet encara no admet el desplegament i l'execució dels contractes Cairo 1.0. StarkNet Alpha V0.11.0, previst per a les properes setmanes, introduirà la possibilitat de desplegar i executar contractes Cairo 1.0. L'actualització a la v0.11.0 marcarà l'inici del període de transició cap a un sistema que només executa contractes Cairo 1.0. Aquest Període de Transició finalitzarà amb el[Regenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4), previst uns mesos més tard.

![](/assets/0_odxbxeacqdwizlfw.jpg)

### Construïm!

L'objectiu de StarkNet és escalar de manera exponencial Ethereum utilitzant la integritat matemàtica dels STARK, i l'objectiu del Caire és fer que aquesta escala exponencial sigui accessible als desenvolupadors. Accessibilitat significa un llenguatge de programació eficient, fàcil de llegir i escriure i segur d'utilitzar. Esperem que el llançament de Cairo 1.0 inspiri encara més desenvolupadors a unir-se a StarkNet i escalar Ethereum per satisfer la demanda global.