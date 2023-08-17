### TL;DR

* **El Caire 1.0 és de codi obert! Aquest és només el primer pas cap a l'obtenció de la pila StarkNet.**
* Ara</a>

compilador Cairo 1.0. Ara podeu començar a experimentar amb el codi bàsic de Cairo 1.0</li> 
  
  * Cairo 1.0 en el seu nucli és molt similar a Rust
* Considereu-ho un primer tast, no un llançament. Hi ha més millores en camí. La primera versió del compilador està prevista per a principis del primer trimestre de l'any vinent.
* Cairo 1.0 encara no és compatible amb StarkNet. Serà compatible a StarkNet el primer trimestre de l'any vinent.</ul> 



### Introducció

El 2020, vam llançar[Cairo](https://eprint.iacr.org/2021/1063.pdf), un llenguatge de programació complet de Turing que admet càlculs verificables. El Caire va començar com un llenguatge assemblador i a poc a poc es va anar fent més expressiu. Fa dos mesos, vam anunciar[Cairo 1.0](https://medium.com/starkware/cairo-1-0-aa96eefb19a0), que aborda alguns problemes importants en la situació actual:

* Tot i que la sintaxi del Caire ha experimentat una millora significativa des dels seus inicis, l'experiència del desenvolupador sempre pot millorar. Cairo 1.0 és un llenguatge totalment escrit inspirat en l'òxid, que fa que escriure la mateixa lògica sigui molt més fàcil i menys propens a errors.
* El compilador existent es desenvolupa al mateix repositori que el mateix StarkNet, cosa que dificulta el seguiment dels canvis d'idioma. El compilador Cairo 1.0 està escrit des de la base, cosa que permet un desenvolupament de funcions més ràpid i una major implicació de la comunitat.
* Ara tots els càlculs són demostrables. Actualment, un programa del Caire pot fallar amb entrades específiques (per exemple, en arribar a una instrucció \`assert 1=2\` en alguna branca de càlcul), fent que el càlcul no sigui demostrable. Amb Cairo 1.0, els programes es poden demostrar en totes les branques possibles. Això és especialment important per a la protecció de DOS i la resistència a la censura a StarkNet.

Avui marquem la primera fita per assolir els objectius anteriors mentre passem el desenvolupament a un repo públic i**de codi obert Cairo 1.0!**Els desenvolupadors ara poden, per primera vegada, compilar i executar programes senzills de Cairo 1.0. Això permet als desenvolupadors començar a experimentar amb Cairo 1.0 i anar acostumant-se gradualment a les noves funcions, encara que, en aquesta fase, encara no la puguin implementar a StarkNet.



### Capacitats actuals

Actualment, podeu compilar i executar programes bàsics nadius del Caire. Tot i que moltes de les millores de sintaxi/idioma encara estan en curs, això permet acostumar-se a Cairo 1.0 i gaudir de les actualitzacions a mesura que arriben.

**Tingueu en compte que l'escriptura de contractes StarkNet encara no és compatible.**sintaxi de StarkNet (variables d'emmagatzematge/contractes de trucada/esdeveniments i altres trucades al sistema) s'afegirà durant les properes setmanes.



### Exemples de codi

Per il·lustrar les diferències entre la sintaxi antiga i el Caire 1.0, hem optat per mostrar algunes implementacions/sabors diferents per trobar el n'èsimo nombre de Fibonacci.



### Exemple I: Relacionar expressions

A Cairo 1.0, podeu utilitzar expressions de coincidència[semblants](https://doc.rust-lang.org/rust-by-example/flow_control/match.html?highlight=match#match)l'oxidació. Ja no tindràs por de les declaracions if/else que puguin provocar la revocació de referència!

![](/assets/code01.png)



### Exemple II: Tipus de dades

Mentre que Cairo 0 funcionava amb feltres i punters, a Cairo 1.0 tenim accés natiu a tipus de dades complexos en l'idioma. A continuació podeu trobar un exemple que genera una matriu dels primers n nombres de Fibonacci.

![](/assets/code02.png)

Com podeu veure més amunt, en lloc de treballar directament amb punters de memòria, utilitzem el `Array::<felt>\` type i la funció \`array_append\`.



### Exemple III: estructura & propietat

El codi següent il·lustra l'ús de les estructures a Cairo 1.0.

![](/assets/code03.png)



> El paràgraf següent està pensat per als rustacis entre el públic. Cairo 1.0 gestiona la memòria de manera semblant a l'oxidació. En particular, utilitza els conceptes de[propietat i préstec](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html). Per tant, en accedir a un membre de l'estructura \`FibResult\` (en aquest cas, \`result.value\`), hem mogut \`result\`, el que significa que tret que FibResult sigui copiable, no podem accediu-hi de nou a \`result.index\`. Per superar-ho, afegim l'atribut \`#\[derive(Copy)]\` del tipus \`FibResult\`. En futures versions, afegirem la deconstrucció automàtica per a les estructures. Això permetrà moure la propietat d'un membre sense tocar els altres (en particular, el codi anterior es compilaria encara que \`FibResult\` no tingués l'atribut copy).

**En particular, tingueu en compte que Cairo 1.0 està abstraint completament el model de memòria original (no de només lectura determinista) del Caire.**



## Exemple IV: propagació d'errors

El codi següent calcula l'nèsimo nombre de Fibonacci, però a diferència dels exemples anteriors, totes les entrades són del tipus uint128. Tingueu en compte que això resol un problema important de la manipulació d'uints al Caire 0. Aquí, uint128 (i en el futur uint256) són tipus natius.

![](/assets/0_s8bhjf_ade3carmi.png)

L'addició de dos nombres enters de 128 bits pot provocar un desbordament. El codi anterior utilitza l'enumeració[de l'opció](https://doc.rust-lang.org/rust-by-example/std/option.html)i l'operador de signe d'interrogació[](https://doc.rust-lang.org/rust-by-example/std/result/question_mark.html)per gestionar el cas de desbordament en una de les addicions intermèdies. Compareu això amb la sintaxi d'addició</a>uint256 actual, on s'havia de cridar la funció \`unit256_check\` per garantir la solidesa. A més, en un futur proper, afegirem el concepte de \`pànic\` al llenguatge (semblant a la macro[panic](https://doc.rust-lang.org/rust-by-example/std/panic.html)a rust), i errors simples com el desbordament d'addició no es detectaran i es propagaran automàticament, el que significa que no haureu d'utilitzar \`Option\` o \`?\` quan afegiu uints.</p> 



## Prova-ho tu mateix

Ara podeu compilar i executar els programes Cairo 1.0 compatibles actualment! Seguiu aquestes[instruccions](https://github.com/starkware-libs/cairo/tree/main/crates/cairo-lang-runner)sobre com utilitzar l'ordre \`cairo-run\`. Tingueu en compte que sota el capó, s'utilitza el[Rust Cairo VM](https://github.com/lambdaclass/cairo-rs), desenvolupat per[Lambdaclass](https://lambdaclass.com/), per a l'execució.

Podeu trobar més exemples que us ajudaran a començar[aquí](https://github.com/starkware-libs/cairo2/tree/main/examples). Tingueu en compte que aquest és només el primer cop d'ull al desenvolupament del compilador; en les properes setmanes, millorarem la CLI juntament amb el compilador.



## Plans futurs

L'objectiu de la primera versió del compilador, que està prevista per al primer trimestre del primer trimestre, és donar suport a totes les funcionalitats existents de StarkNet al Caire 1.0. A més, estem treballant per ampliar les capacitats del compilador Cairo 1.0. En les properes setmanes, podeu esperar:

* Capacitats de StarkNet: escriure contractes intel·ligents i utilitzar trucades al sistema.
* Bucles
* Noves funcions de la biblioteca
* Servidor d'idiomes millorat
* Una noció nativa del gas StarkNet

Assegureu-vos d'estar atents i fer un seguiment del progrés del compilador!