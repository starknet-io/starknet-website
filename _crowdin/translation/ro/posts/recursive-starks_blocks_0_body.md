### TL;DR

* Proving Recursive este live pe Mainnet, scalând aplicații StarkEx, precum și StarkNet cu o singură dovadă
* Aceasta mărește scara și generează beneficii în materie de costuri; și latență (o apariție rară și interesantă a scării și a latenței care se deplasează în tandem, fără a fi un compromis)
* Setează etapa pentru L3 și alte beneficiiCitiți postarea pe blog[Proving Recursiv](https://medium.com/@starkware/recursive-starks-78f8dd401025). Este lucruri interesante 😉

### Scalare în sus!

Dovezile recurente – alimentate de calculele generale ale Cairo – sunt în prezent în producție. Acest lucru reprezintă un impuls major pentru puterea scării L2 cu STARKs. Aceasta va produce rapid o creștere multiplă a numărului de tranzacții care pot fi scrise în Ethereum printr-o singură dovadă.

Până în prezent, scalarea STARK a funcționat prin „ridicarea” a zeci sau chiar sute de mii de tranzacții într-o singură dovadă, care a fost scris la Ethereum. Cu recursie, multe astfel de dovezi pot fi „rulate” într-o singură dovadă.

Această metodă este acum în producție pentru o multitudine de aplicații Cairo: aplicații care rulează pe StarkEx, motorul de scalare StarkWare SaaS și StarkNet, rollup inadmisibil.

### Povestirea de până acum

De la prima dovadă de pe Mainnet, în martie 2020, următoarele evoluții au conturat modul în care sunt utilizate STARK-urile.

### Scalare pe bază de STARK

În iunie 2020 prima soluție de scalare STARK -[StarkEx](https://youtu.be/P-qoPVoneQA)- a fost implementată pe Ethereum Mainnet. StarkEx are un Prover care execută calcule mari în afara lanțului și produce un STARK rezistent pentru corectitudinea lor, și un Verifier care verifică această dovadă în lanț. Constrângerile pentru această primă implementare au fost „scrise manual” de inginerii lui StarkWare, limitând astfel viteza StarkEx. Am ajuns la concluzia că este necesar un limbaj de programare care să sprijine dovedirea unui calcul general – Cairo.

#### Cairo

În vara anului 2020, Cairo și-a făcut[prima apariție pe Ethereum Mainnet](https://medium.com/starkware/hello-cairo-3cb43b13b209). Cairo reprezintă Reprezentanţa mediată Algebrică a procesorului (AIR) şi include un singur AIR care verifică setul de instrucţiuni al acestui „CPU”. Aceasta a deschis calea pentru dovezile de codificare pentru o logică comercială mai complexă, pentru declarații de calcul arbitrare și pentru acest lucru într-o manieră mai rapidă și mai sigură. Un program Cairo poate dovedi executarea logicii unei singure aplicații. Dar un program Cairo poate fi, de asemenea, o concatenare a mai multor astfel de aplicații — SHARP.

#### CUMPĂRĂ

SHARP — un Prover SHARed Prover — efectuează tranzacții din mai multe aplicații separate și le dovedește toate într-o singură probă de tip STARK. Aplicațiile combină loturile lor de tranzacții, completând mai rapid capacitatea unui STARK. Tranzacțiile sunt procesate cu o rată și o latență îmbunătățite. Următoarea frontieră: Dovezile recurente, dar nu doar pentru o logică bine codificată, ci mai degrabă pentru**calculul general**.

Pentru a înțelege întregul beneficiu al Profesiei Recursive merită să înțelegem mai multe despre cum dovezile (nerecurente) au fost efectuate până acum de către SHARP. Desen 1 reprezintă un flux tipic non-recursiv:

![Desen 1: Un flux tipic non-recursiv de proba](/assets/recursive_starks_01.png "Desen 1: Un flux tipic non-recursiv de proba")

Aici, declaraţiile sosesc în timp. Atunci când se atinge un anumit prag de capacitate (sau timp), se generează o declarație combinată mare (a.k.a Train). Această declarație combinată este dovedită numai după primirea tuturor declarațiilor individuale. Această dovadă necesită mult timp pentru a dovedi (este nevoie de aproximativ o perioadă de timp pentru a dovedi fiecare declarație în mod individual).

Declarațiile extrem de mari sunt în cele din urmă limitate de resursele disponibile de calcul, cum ar fi memoria. Înainte de recidivă, aceasta a fost efectiv bariera de scalabilitate limitată la proba STARK.

### Ce este Provincia Recursivă?

Cu dovezi STARK, timpul necesar pentru a dovedi că o declaraţie este aproximativ liniară cu timpul necesar pentru a executa declaraţia. În plus, dacă se dovedește că o declarație necesită timp T, atunci verificarea dovezii necesită aproximativ log(T), timp care se numește de obicei „compresie logaritmică”. Cu alte cuvinte, cu STARK-uri, petreci mult mai puțin timp pentru verificarea declarației decât pentru calcularea ei.

[Cairo](https://starkware.co/cairo/)permite exprimarea declarațiilor generale de calcul care pot fi dovedite de dovezile STARK și verificate de verificatorii STARK corespunzători.

Aici oportunitatea de a efectua[recursion](https://en.wikipedia.org/wiki/Recursion)lovește în: În același mod în care scriem un program Cairo care dovedește corectitudinea a mii de tranzacții, putem de asemenea să scriem un program Cairo care să verifice multiple dovezi STARK. Putem genera o singură dovadă care să ateste validitatea mai multor dovezi „în amonte”. Asta este ceea ce numim Provingul Recursiv.

Din cauza compresiei logaritmice și a timpului aproximativ liniar de probă, verificarea probei STARK durează relativ scurt (se preconizează că va fi la doar câteva minute în viitorul apropiat).

La punerea în aplicare a recuperării, SHARP poate dovedi declarații la sosirea lor. Dovezile lor pot fi îmbinate din nou şi din nou în dovezi recurente până la diferite tipuri, la un moment dat, dovada rezultată este prezentată unui contract de verificare în lanț. Un model tipic este prezentat în Drawing 2:

![Desen 2: Un flux tipic de probă recursiv.](/assets/recursive_starks_02.png "Desen 2: Un flux tipic de probă recursiv.")

### Beneficii imediate ale Profesiunilor Recursive

#### Cost redus în lanț

La indepartare obtinem "compresie" de mai multe dovezi intr-un singur dovada, ceea ce implică costuri mai mici de verificare în lanț per tranzacție (unde fiecare declarație poate include mai multe tranzacții).

Prin recursie, bariera resurselor computaționale (de ex. memorie) că dimensiunea probelor este limitată până în prezent este eliminată, deoarece fiecare declarație de dimensiune limitată poate fi dovedită separat. Prin urmare, atunci când se utilizează recursul, valoarea efectivă a plății trenului este aproape nelimitată, iar costul pe tranzacție poate fi redus prin ordinele de mărime.

Practic, reducerea depinde de latența acceptabilă (și de rata la care ajung tranzacțiile). În plus, deoarece fiecare dovadă este însoțită, de asemenea, de unele rezultate, cum ar fi datele în lanț, numărul de date care pot fi scrise în lanţ este limitat, împreună cu o singură dovadă. Cu toate acestea, reducerea costurilor cu un ordin de mărime și chiar mai bine este realizabilă trivial.

#### Latență redusă

Modelul de Provingere Recursivă reduce latența demonstrării unor trase de instrucțiuni de amploare. Acesta este rezultatul a doi factori:

1. Declarațiile primite pot fi dovedite**în paralel**(spre deosebire de o declarație combinată extrem de mare).
2. Nu este nevoie să aştepţi până când ultima declaraţie a trenului ajunge să se dovedească. Mai degrabă, dovezile pot fi combinate cu noi declaraţii la sosire. Aceasta înseamnă că perioada de latență a ultimei declarații care se alătură unui train, este aproximativ timpul necesar pentru a dovedi că ultima declarație plus timpul necesar pentru a dovedi o declarație de verificare recurentă (care atestă toate declarațiile care au „perimat” deja acest curs de formare).

Dezvoltăm și optimizăm activ latența de a dovedi declarația verificatorului Recursiv. Ne aşteptăm ca acest lucru să ajungă la ordinea a câtorva minute în câteva luni. Prin urmare, un SHARP foarte eficient poate oferi latențe de la câteva minute până la câteva ore, în funcție de costurile de echilibrare versus costurile în lanț per tranzacție. Aceasta reprezintă o îmbunătățire semnificativă a latenței SHARP.

#### Facilitarea L3

Dezvoltarea declaraţiei de verificare Recursive din Cairo deschide de asemenea posibilitatea de a prezenta dovezi către StarkNet, întrucât această declarație poate fi coaptă într-un contract inteligent StarkNet. Acest lucru permite construirea[L3 implementări în partea de sus a StarkNet public](https://medium.com/starkware/fractal-scaling-from-l2-to-l3-7fe238ecfb4f)(o rețea L2).

Modelul recursiv se aplică, de asemenea, agregării probelor din L3, care urmează să fie verificate de o singură dovadă privind L2. Prin urmare, și aici se realizează hiperscalarea.

### Mai multe beneficii subtile

#### Recursiunea Aplicativă

Recursiunea oferă și mai multe oportunități platformelor și aplicațiilor care doresc să își sporească în continuare costurile și performanțele.

Fiecare dovadă a STARK atestă valabilitatea unei declarații aplicate unor date cunoscute sub numele de „intrare publică” (sau „ieșire program” în termenii Cairo). Din punct de vedere conceptual, recursia STARK comprimă două dovezi cu*două*intrări în*una*dovadă cu două intrări. Cu alte cuvinte, în timp ce numărul dovezilor este redus, numărul de intrări este menţinut constant. Aceste intrări sunt apoi folosite de obicei de către o aplicație pentru a actualiza o anumită stare pe L1 (e. . pentru a actualiza o rădăcină de stare sau pentru a efectua o retragere în lanț).

În cazul în care se permite ca declarația recurentă să fie*conștientă de aplicație*, adică recunoaște semantica aplicației în sine, poate combina două dovezi într-un singur*și*combină cele două intrări într-unul singur. Declarația rezultată atestă validitatea combinației de date pe baza semantelor de aplicare; prin urmare, denumirea de Recursie Aplicativă (a se vedea desenul 3, de exemplu).

![Desen 3: Exemplu de Recursie Aplicativă](/assets/recursive_starks_03.png "Desen 3: Exemplu de Recursie Aplicativă")

Aici, Declarația 1 atestă o actualizare a stării de la A la B și Declarația 2 atestă o actualizare suplimentară de la B la C. Dovezile Declarației 1 și ale Declarației 2 pot fi combinate într-o a treia declarație care atestă actualizarea directă de la A la C. Prin aplicarea repetată a unei logici similare, se poate reduce foarte semnificativ costul actualizărilor stării până la cerinţa de latenţă a finalităţii.

Un alt exemplu important de Recursie Aplicativă este să comprimăm datele de rollup din multiple dovezi. De exemplu, pentru un Rollup Validity cum ar fi StarkNet, fiecare actualizare de stocare din L2 este, de asemenea, inclusă ca date de transmisie în L1, pentru a asigura disponibilitatea datelor. Cu toate acestea, nu este nevoie să se trimită mai multe actualizări pentru același element de stocare, întrucât este necesară numai valoarea finală a tranzacțiilor atestată prin dovada verificată pentru disponibilitatea datelor. Această optimizare este deja realizată în interiorul unui*bloc*StarkNet. Cu toate acestea, prin generarea unei dovezi per bloc, Recursiunea Aplicativă poate comprima aceste date de rollup în*mai multe*blocuri L2. Acest lucru poate duce la o reducere semnificativă a costurilor, permițând intervale mai scurte de bloc pe L2, fără a sacrifica scalabilitatea actualizărilor L1.

Notă nordică: Recuperarea solicitantă poate fi combinată cu o recurență de diagnosticare a aplicației, așa cum este descris mai devreme. Aceste două optimizări sunt independente.

#### Reducere verificare în lanț Complexitate

Complexitatea verificatorului STARK depinde de tipul de declarații pe care este conceput să le verifice. În special, în cazul declarațiilor de la Cairo, complexitatea verificatorului depinde de elementele specifice permise în limba Cairo, şi, mai exact, încorporările acceptate (dacă folosim metafora CPU pentru Cairo; apoi încorporarea este echivalentă cu microcircuitele într-o unitate centrală: calculele efectuate atât de frecvent încât necesită un calcul optimizat propriu).

Limbajul Cairo continuă să evolueze și să ofere din ce în ce mai multe elemente încorporate utile. Pe de altă parte, verificatorul Recursive necesită doar utilizarea unui subset mic din aceste încorporate. Prin urmare, un SHARP recursiv poate sprijini cu succes orice declarație în Cairo prin susținerea limbii complete în verificatorii recursivi. Mai precis, L1 Solidity Verifier trebuie să verifice numai dovezile recurente, și astfel pot fi limitate la un subset mai stabil al limbii Cairo: Verificatorul L1 nu trebuie să țină pasul cu cele mai recente și mai mari încorporări. Cu alte cuvinte, verificarea declarațiilor complexe în continuă evoluție este retrogradată la nivelul L2, lăsând verificarea L1 pentru a verifica declarațiile mai simple și mai stabile.

#### Calculul redus al amprentei

Înainte de recursie, capacitatea de a agrega mai multe declarații într-o singură dovadă a fost limitată de dimensiunea maximă a declarației care a putut fi dovedită în cazurile de calcul disponibile (și de timpul necesar pentru a genera astfel de dovezi).

Recuperarea nu mai este necesară demonstrarea unor declaraţii atât de mari. Prin urmare, mai mici, se pot utiliza metode de calcul mai puțin costisitoare și mai disponibile (deși poate fi nevoie de mai mult din acestea decât în cazul marilor dovezi monolitice). Acest lucru permite desfășurarea de cazuri de perfecționare în medii mai fizice și virtuale decât era posibil.

### Summary

Dovezile recursive de calcul general deservesc în prezent mai multe sisteme de producţie, inclusiv StarkNet, pe Mainnet Ethereum.

Beneficiile recurenței se vor realiza treptat, deoarece permit în continuare noi îmbunătățiri, și va livra în curând taxe la scară hiper-scară, va reduce costurile gazului și va îmbunătăți latența prin deblocarea potențialului de paralelizare.

Aceasta va aduce beneficii semnificative în materie de costuri și latență, alături de noi oportunități, cum ar fi L3 și recursul aplicativ. Optimizarea în continuare a verificatorului Recursive este în curs de desfășurare și se preconizează că va fi furnizată în timp o performanță și beneficii de cost chiar mai bune.



**Gidi Kaempfer**, șef de inginerie de bază, StarkWare