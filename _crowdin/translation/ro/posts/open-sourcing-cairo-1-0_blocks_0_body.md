### TL;DR

* **Cairo 1.0 este open source! Acesta este doar primul pas către open-sourcing a stivei StarkNet.**
* Acum prezentăm un[primul uitat](https://github.com/starkware-libs/cairo)în compilatorul Cairo 1.0. Acum poți începe să experimentezi cu codul simplu Cairo 1.0
* Cairo 1.0 în centrul său este foarte asemănător cu Rust
* Luați în considerare un prim gust, nu o eliberare. Mai multe îmbunătățiri sunt pe drum. Prima versiune a compilatorului este planificată pentru începutul Q1 anul viitor.
* Cairo 1.0 nu este acceptat pe StarkNet, încă. Acesta va fi sprijinit pe StarkNet în trimestrul 1 anul viitor.

### Introducere

În 2020, am lansat[Cairo](https://eprint.iacr.org/2021/1063.pdf), un limbaj de programare Turing-complete care susține un calcul verificabil. Cairo a început ca limbaj de asamblare şi a devenit treptat mai expresiv. Acum două luni, am anunțat[Cairo 1.0](https://medium.com/starkware/cairo-1-0-aa96eefb19a0), care abordează unele probleme majore în situația actuală:

* În timp ce sintaxa Cairo a înregistrat îmbunătățiri semnificative de la crearea sa, experiența dezvoltatorului se poate îmbunătăți întotdeauna. Cairo 1.0 este un limbaj complet tastat, făcând ca scrierea aceleiași logici să fie mult mai ușoară și mai puțin predispusă la erori.
* Compilatorul existent este dezvoltat în acelaşi repo cu StarkNet însuşi, ceea ce face mai dificilă urmărirea modificărilor de limbaj. Compilatorul Cairo 1.0 este scris de la zero, permițând dezvoltarea mai rapidă a caracteristicilor și o implicare mai mare a comunității.
* Fiecare calcul se poate dovedi acum. În prezent, un program Cairo poate eșua cu intrări specifice (de exemplu, atingând o instrucțiune \`assert 1=2\` în unele ramuri de calcul), făcând calculul neidentificabil. Cu Cairo 1.0, programele pot fi dovedite în fiecare ramură posibilă. Acest lucru este deosebit de important pentru protecția DOS și rezistența la cenzură în StarkNet.

Astăzi marcăm prima etapă importantă în atingerea obiectivelor de mai sus pe măsură ce avansăm către o repozitoare publică, şi**open source Cairo 1. !**Dezvoltatorii pot acum compila și executa programe simple Cairo 1.0 pentru prima dată. Acest lucru permite dezvoltatorilor să înceapă să experimenteze cu Cairo 1. şi să se obişnuiască treptat cu noile caracteristici, chiar dacă, în această fază, nu le pot implementa pe StarkNet încă.

### Capacităţile actuale

Momentan, poți compila și executa programe native de bază. În timp ce multe dintre îmbunătățirile de sintaxă/limbă sunt încă în curs de desfășurare, acest lucru permite să fii obișnuit cu Cairo 1.0 și să te bucuri de upgrade-uri pe măsură ce urmează.

**Rețineți că scrierea contractelor StarkNet este încă neacceptată.**Sintaxa StarkNet (variabile de stocare / contracte de apelare/evenimente și alte apeluri de sistem) va fi adăugată în săptămânile următoare.

### Exemple de cod

Pentru a ilustra diferențele dintre vechea sintaxă și Cairo 1. , am ales să arătăm câteva implementări/arome diferite de a găsi numărul n’th Fibonacci.

### Exemplul I: Asocierea expresiilor

În Cairo 1.0, poți utiliza expresii[asemănătoare rustului se potrivesc cu](https://doc.rust-lang.org/rust-by-example/flow_control/match.html?highlight=match#match)expresii. Nu vă veți mai teme dacă / altminteri declarații care pot cauza revocarea referinței!

![](/assets/code01.png)

### Exemplul II: Tipuri de date

În timp ce Cairo 0 lucra cu feluri și indicatoare, în Cairo 1.0 avem acces nativ la tipuri de date complexe în limbă. Mai jos poți găsi un exemplu care generează o mulțime de numere n Fibonacci.

![](/assets/code02.png)

După cum puteţi vedea mai sus, în loc să lucrăm direct cu indicatoarele de memorie, folosim `Array::<felt>\` tip si \`array_append\`functia.

### Exemplul III: lovită & proprietate

Următorul cod ilustrează utilizarea șubredelor în Cairo 1.0.

![](/assets/code03.png)

> Următorul punct se referă la Rustaceani în rândul publicului. Cairo 1.0 administrează memoria în mod similar cu rugina. În special, folosește conceptele de[proprietate și împrumut](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html). Astfel, accesând un membru al șocului \`FibResult\` (în acest caz, \`result. Ale\`), am mutat \`result\`, ceea ce înseamnă că, dacă FibResult nu poate fi copiat, nu îl putem accesa din nou în \`result.index\`. Pentru a depăși acest lucru, adăugăm atributul \`#\[derive(Copy)]\` de tipul \`FibResult\`. În versiunile viitoare vom adăuga dezasamblare automată pentru lovituri. Acest lucru va permite mutarea proprietății unui membru fără a-l atinge pe ceilalți (în special, codul de mai sus ar compila chiar dacă \`FibResult\` nu a avut atributul de copiere).

**În special, reţineţi că Cairo 1.0 este complet abstractizat de modelul original de memorie Cairo, (care nu este numai pentru citirea unui determinist).**

## Exemplul IV: Propagare eroare

Următorul cod calculează numărul n’th Fibonacci, dar spre deosebire de exemplele anterioare, toate intrările sunt de tipul uint128. Reţineţi că acest lucru rezolvă un punct major de durere în manevrarea uintelor în Cairo 0. Aici, uint128 (şi în viitor uint256) sunt indigene.

![](/assets/0_s8bhjf_ade3carmi.png)

Adăugarea a două numere întregi de 128 biți poate provoca o întoarcere. Codul de mai sus folosește[Opţiunea](https://doc.rust-lang.org/rust-by-example/std/option.html)şi[operatorul marcajului de întrebare](https://doc.rust-lang.org/rust-by-example/std/result/question_mark.html)pentru a se ocupa de caz de supra-flux într-una din completările intermediare. Compară acest lucru cu[sintaxa curentă](https://github.com/starkware-libs/cairo-lang/blob/9889fbd522edc5eff603356e1912e20642ae20af/src/starkware/cairo/common/uint256.cairo#L31)de adăugare uint256, unde funcția \`unit256_check\` a trebuit să fie apelată pentru a garanta sunetul. În plus, în viitorul apropiat, vom adăuga conceptul de \`panic\` în limba (similar cu macro[panic](https://doc.rust-lang.org/rust-by-example/std/panic.html)în rug), și erorile simple cum ar fi suprainfecțiile de adăugare vor fi necatchable și propagate automat, ceea ce înseamnă că nu va trebui să utilizați \`Option\` sau \`? " la adăugarea uninelor.

## Încearcă-l singur

Acum poți compila și rula programe Cairo 1.0 acceptate în prezent! Urmați aceste[instrucțiuni](https://github.com/starkware-libs/cairo/tree/main/crates/cairo-lang-runner)despre cum să folosiți comanda \`cairo-run\`. Țineți cont că sub hood,[Rust Cairo VM](https://github.com/lambdaclass/cairo-rs), dezvoltat de[Lambdaclass](https://lambdaclass.com/), este folosit pentru execuție.

Poți găsi mai multe exemple pentru a te ajuta să începi[aici](https://github.com/starkware-libs/cairo2/tree/main/examples). Reţineţi că aceasta este doar prima privire la dezvoltarea compilatorului; în săptămânile următoare, vom îmbunătăţi CLI alături de compilator.

## Planuri viitoare

Accentul primei versiuni a Compilatorului, care este planificată pentru începutul Q1, sprijină toate funcţionalităţile existente ale StarkNet în Cairo 1.0. În plus, lucrăm la extinderea capacităților compilatorului Cairo 1.0. În săptămânile următoare vă puteţi aştepta:

* Capacități StarkNet — scrierea de contracte inteligente și utilizarea apelurilor de sistem.
* Bucle
* Funcții noi ale bibliotecii
* Server de limbă îmbunătățit
* O noţiune nativă de gaz StarkNet

Asigură-te că stai pe fază și urmărești progresul compilatorului!