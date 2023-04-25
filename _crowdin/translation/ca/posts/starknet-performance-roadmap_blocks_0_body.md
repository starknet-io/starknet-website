### TL;DR

* Els acumulacions de validesa no estan limitats en el rendiment de la mateixa manera que els L1. Això dóna lloc a un TPS potencialment molt més alt en els paquets de validesa L2.
* El full de ruta de rendiment de StarkNet aborda un element clau del sistema: el seqüenciador.
* Presentem aquí el full de ruta per millorar el rendiment:\
  — Paral·lelització del seqüenciador\
  — Una nova implementació de rovell per al Cairo VM\
  — Reimplementació del seqüenciador en rovell\
* Els provadors, que estan provats a la batalla, no són el coll d'ampolla i poden manejar molt més que ara!

### Introducció

StarkNet es va llançar a Mainnet fa gairebé un any. Vam començar a construir StarkNet centrant-nos en la funcionalitat. Ara, ens centrem en la millora del rendiment amb una sèrie de passos que ajudaran a millorar l'experiència de StarkNet.

En aquesta publicació, expliquem per què hi ha una àmplia gamma d'optimitzacions que només s'apliquen als paquets de validesa, i compartirem el nostre pla per implementar aquests passos a StarkNet. Alguns d'aquests passos ja estan implementats a StarkNet Alpha 0.10.2, que es va publicar a Testnet el 16 de novembre i ahir a Mainnet. Però abans de discutir les solucions, revisem les limitacions i la seva causa.

### Limitacions del bloc: acumulacions de validesa versus L1

Un enfocament potencial per augmentar l'escalabilitat de la cadena de blocs i augmentar el TPS seria aixecar les limitacions del bloc (en termes de gas / mida) mantenint el temps de bloc constant. Això requeriria més esforç per part dels productors de blocs (validadors a L1, seqüenciadors a L2) i, per tant, demana una implementació més eficient d'aquests components. Amb aquesta finalitat, ara ens centrem en les optimitzacions del seqüenciador StarkNet, que descriurem amb més detall a les seccions següents.

Aquí sorgeix una pregunta natural. Per què les optimitzacions del seqüenciador es limiten als paquets de validesa, és a dir, per què no podem implementar les mateixes millores a L1 i evitar completament les complexitats dels paquets de validesa? A la següent secció, afirmem que hi ha una diferència fonamental entre ambdós, que permet una àmplia gamma d'optimitzacions en L2 que no són aplicables a L1.

### Per què el rendiment L1 està limitat?

Malauradament, aixecar les limitacions del bloc a L1 pateix un gran obstacle. En augmentar la taxa de creixement de la cadena, també augmentem les demandes dels nodes complets, que intenten mantenir-se al dia amb l'estat més recent. Atès que els nodes complets L1 han de tornar a executar tot l'historial, un gran augment de la mida del bloc (en termes de gas) els posa una tensió significativa, de nou provoca que les màquines més febles abandonin el sistema i deixin la capacitat d'executar nodes complets. només a entitats prou grans. Com a resultat, els usuaris no podran verificar l'estat ells mateixos i participar a la xarxa sense confiança.

Això ens deixa entendre que el rendiment L1 s'ha de limitar per mantenir un sistema veritablement descentralitzat i segur.

### Per què les mateixes barreres no afecten els paquets de validesa?

**Només quan considerem la perspectiva completa del node veiem la veritable potència que ofereixen les acumulacions de validesa.**Un node complet L1 ha de tornar a executar tot l'historial per garantir la correcció de l'estat actual. Els nodes de StarkNet només necessiten verificar les proves STARK, i aquesta verificació requereix una quantitat exponencialment menor de recursos computacionals. En particular, la sincronització des de zero no ha d'implicar l'execució; un node pot rebre un abocament de l'estat actual dels seus iguals i només verificar mitjançant una prova STARK que aquest estat és vàlid. Això ens permet augmentar el rendiment de la xarxa sense augmentar els requisits del node complet.

Per tant, concloem que el seqüenciador L2 està subjecte a tot un espectre d'optimitzacions que no són possibles en un L1.

### Full de ruta de rendiment per endavant

A les seccions següents, analitzarem quines d'elles estan planejades actualment per al seqüenciador StarkNet.

### Paral·lelització del seqüenciador

El primer pas del nostre full de ruta va ser introduir la paral·lelització a l'execució de la transacció. Això es va introduir a StarkNet alpha 0.10.2, que es va publicar ahir a Mainnet. Ara ens endinsem en què és la paral·lelització (és un apartat semitècnic, per continuar amb el full de ruta, aneu al següent apartat).

Aleshores, què vol dir "paral·lelització de transaccions"? Ingenuament, executar un bloc de transaccions en paral·lel és impossible, ja que diferents transaccions poden dependre. Això s'il·lustra a l'exemple següent. Considereu un bloc amb tres transaccions del mateix usuari:

* Transacció A: canvieu USDC per ETH
* Transacció B: pagar ETH per una NFT
* Transacció C: canvieu USDT per BTC

És evident que Tx A ha de passar abans que Tx B, però Tx C és totalment independent de tots dos i es pot executar en paral·lel. Si cada transacció requereix 1 segon per executar-se, el temps de producció del bloc es pot reduir de 3 segons a 2 segons introduint la paral·lelització.

El quid del problema és que no coneixem les dependències de la transacció per endavant. A la pràctica, només quan executem la transacció B a partir del nostre exemple veiem que es basa en els canvis fets per la transacció A. Més formalment, la dependència es deriva del fet que la transacció B llegeix de les cel·les d'emmagatzematge a les quals la transacció A ha escrit. Podem pensar que les transaccions formen un gràfic de dependència, on hi ha una vora de la transacció A a la transacció B si A escriu en una cel·la d'emmagatzematge que és llegida per B i, per tant, s'ha d'executar abans que B. La figura següent mostra un exemple d'aquest gràfic de dependència:

![](https://miro.medium.com/max/641/0*I-qGgxdJJmqmgZWM)

A l'exemple anterior, cada columna es pot executar en paral·lel, i aquesta és la disposició òptima (tot i que de manera ingènua, hauríem executat les transaccions 1-9 de manera seqüencial).

Per superar el fet que el gràfic de dependència no es coneix per endavant, introduïm***paral·lelització optimista***, en l'esperit de[BLOCK-STM](https://malkhi.com/posts/2022/04/block-stm/)desenvolupat per Aptos Labs, al seqüenciador StarkNet. Sota aquest paradigma, intentem de manera optimista executar transaccions en paral·lel i tornar-les a executar en trobar una col·lisió. Per exemple, podem executar les transaccions 1-4 de la figura 1 en paral·lel, només per descobrir després que Tx4 depèn de Tx1. Per tant, la seva execució va ser inútil (l'hem executat en relació amb el mateix estat contra el qual vam executar Tx1, mentre que l'hauríem d'haver executat contra l'estat resultant d'aplicar Tx1). En aquest cas, tornarem a executar Tx4.

Tingueu en compte que podem afegir moltes optimitzacions a la paral·lelització optimista. Per exemple, en lloc d'esperar ingènuament que acabi cada execució, podem avortar una execució en el moment que trobem una dependència que la invalida.

Un altre exemple és l'optimització de l'elecció de quines transaccions es tornaran a executar. Suposem que un bloc que consta de totes les transaccions de la figura 1 s'introdueix a un seqüenciador amb cinc nuclis de CPU. Primer, intentem executar les transaccions 1-5 en paral·lel. Si l'ordre de finalització era Tx2, Tx3, Tx4, Tx1 i finalment Tx5, trobarem la dependència Tx1→Tx4 només després que Tx4 ja s'hagi executat, cosa que indica que s'ha de tornar a executar. Ingènuament, potser voldrem tornar a executar Tx5 també, ja que pot comportar-se de manera diferent donada la nova execució de Tx4. Tanmateix, en lloc de tornar a executar totes les transaccions després del Tx4 ara invalidat, podem recórrer el gràfic de dependència construït a partir de les transaccions l'execució de les quals ja ha finalitzat i només tornar a executar les transaccions que depenien de Tx4.

### Una nova implementació de Rust per al Cairo-VM

Els contractes intel·ligents a StarkNet s'escriuen al Caire i s'executen dins del Cairo-VM, especificació que apareix al document[Cairo](https://eprint.iacr.org/2021/1063.pdf). Actualment, el seqüenciador utilitza una implementació[python](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/cairo/lang/vm)del Cairo-VM. Per optimitzar el rendiment de la implementació de la VM, hem llançat un esforç per reescriure la VM en rovell. Gràcies al gran treball de[Lambdaclass](https://lambdaclass.com/), que a hores d'ara són un equip inestimable a l'ecosistema StarkNet, aquest esforç es portarà a terme aviat.

La implementació rust de la VM,[cairo-rs](https://github.com/lambdaclass/cairo-rs), ara pot executar codi natiu del Caire. El següent pas és gestionar l'execució de contractes intel·ligents i les integracions amb el seqüenciador pythonic. Un cop integrat amb Cairo-rs, s'espera que el rendiment del seqüenciador millori significativament.

### Reimplementació del seqüenciador a Rust

El nostre canvi de python a l'òxid per millorar el rendiment no es limita a la VM del Caire. Al costat de les millores esmentades anteriorment, tenim previst reescriure el seqüenciador des de zero en òxid. A més dels avantatges interns de Rust, això presenta una oportunitat per a altres optimitzacions del seqüenciador. Enumerant un parell, podem gaudir dels avantatges dels cairo-rs sense la sobrecàrrega de la comunicació python-rust, i podem redissenyar completament la manera com s'emmagatzema i s'accedeix a l'estat (que avui es basa en l'estructura[Patricia-Trie](https://docs.starknet.io/documentation/develop/State/starknet-state/#state_commitment)).

### Què passa amb els provadors?

Al llarg d'aquesta publicació, no hem esmentat l'element potser més famós dels paquets de validesa: el provador. Es podria imaginar que sent el component més sofisticat de l'arquitectura, hauria de ser el coll d'ampolla i, per tant, el focus d'optimització. Curiosament, són els components més "estàndards" els que ara són el coll d'ampolla de StarkNet. Avui, sobretot amb[proves recursives](https://medium.com/starkware/recursive-starks-78f8dd401025), podem encaixar moltes més transaccions que el trànsit actual a Testnet/Mainnet en una prova. De fet, avui en dia, els blocs StarkNet estan demostrats al costat de les transaccions StarkEx, on aquestes últimes de vegades poden incórrer en diversos centenars de milers de moneda de moneda NFT.

### Resum

Paral·lelització, Rust i molt més: prepareu-vos per a un TPS millorat a les properes versions de StarkNet.