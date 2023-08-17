### TL;DR

* Valabilitatea rulusurilor nu este limitată la cantitatea tranzitată, în același mod ca L1s. Acest lucru ar putea duce la creșterea considerabilă a TPS în cazul rollupurilor cu privire la validitatea L2.
* Foaia de parcurs StarkNet abordează un element cheie din sistem: secvențiatorul.
* Vă prezentăm aici foaia de parcurs pentru îmbunătățirea performanței:\
  — Paralelizarea fotbalului\
  — O nouă implementare a deprinderilor pentru Cairo VM\
  — Reimplementarea în grabă
* Dovezii, fiind testați ca atare, nu sunt blocajele și pot face față mult mai mult decât în prezent!

### Introducere

StarkNet a fost lansat pe Mainnet în urmă cu aproape un an. Am început să construim StarkNet concentrându-ne pe funcționalitate. Acum, ne concentrăm asupra îmbunătăţirii performanţei cu o serie de paşi care vor ajuta la îmbunătăţirea experienţei StarkNet.

În acest post, explicăm de ce există o gamă largă de optimizări care sunt aplicabile numai în versiunea valabilității, și vom împărtăși planul nostru de a pune în aplicare acești pași cu privire la StarkNet. Unele dintre aceste măsuri sunt deja puse în aplicare în cadrul programului StarkNet Alpha 0.10.2, care a fost lansat pe Testnet în zilele de 16 şi de ieri pe Mainnet. Dar înainte de a discuta soluţiile, haideţi să revizuim limitele şi cauza lor.

### Limitări de bloc: validitate rulantă versus L1

O posibilă abordare în vederea creșterii scalabilității blockchain și a creșterii TPS ar fi ridicarea limitărilor blocului (în ceea ce privește gazul/dimensiunea), menținând în același timp constanta timpului de blocare. Acest lucru ar necesita mai multe eforturi din partea producătorilor în bloc (validatori în L1; secvențiere pe L2) și, prin urmare, necesită o punere în aplicare mai eficientă a acestor componente. În acest scop, acum transferăm atenţia către optimizările secvenţiale StarkNet, pe care le descriem mai în detaliu în următoarele secţiuni.

Aici apare o întrebare naturală. De ce sunt optimizările de secvențiere limitate la valabilitate, adică, de ce nu putem implementa aceleași îmbunătățiri pe L1 și să evităm în întregime complexitatea listelor de validitate? În următoarea secţiune, susţinem că există o diferenţă fundamentală între cele două, permițând o gamă largă de optimizări pentru L2 care nu se aplică pentru L1.

### De ce este limitată cantitatea de L1?

Din păcate, ridicarea limitărilor în bloc pentru L1 suferă de un pericol major. Prin creşterea ratei de creştere a lanţului, creştem, de asemenea, cererile din partea nodurilor complete, cine încearcă să țină pasul cu cel mai recent stat. Deoarece nodurile L1 trebuie să reexecute toată istoria, o creștere importantă a dimensiunii blocului (în ceea ce privește gazul) impune o presiune semnificativă asupra lui; din nou, conducând la mașini mai slabe care ies din sistem și lăsând capacitatea de a rula noduri întregi doar către entități destul de mari. Ca rezultat, utilizatorii nu vor putea verifica ei înșiși starea și participa la rețea fără încredere.

Acest lucru ne lasă să înţelegem că tranzitul L1 ar trebui să fie limitat, pentru a menţine un sistem cu adevărat descentralizat şi sigur.

### De ce nu afectează aceleași bariere valabilitatea?

**Doar dacă luăm în considerare perspectiva completă a nodului, vedem adevărata putere oferită de rulajele de validitate.**Un nod complet L1 trebuie să reexecute întreaga istorie pentru a asigura corectitudinea stării curente. Nodurile StarkNet trebuie doar să verifice dovezile STARK, iar această verificare ia o cantitate exponențial mai mică de resurse computaționale. În special, sincronizarea de la zero nu trebuie să implice execuția; un modul poate primi o copie de stare curentă de la colegii săi și poate verifica numai prin intermediul unei dovezi STARK că această stare este validă. Acest lucru ne permite să mărim cantitatea de trafic a rețelei fără a crește cerințele din întregul nod.

Prin urmare, conchidem că secvențierul L2 este supus unui întreg spectru de optimizări care nu sunt posibile pe un L1.

### Foaia de performanță avansată

În următoarele secţiuni, discutăm care dintre acestea sunt planificate în prezent pentru secvenţierul StarkNet.

### Paralelizarea sequencer

Primul pas al foii noastre de parcurs a fost introducerea unei paralelizări a execuției tranzacțiilor. Aceasta a fost introdusă în StarkNet alpha 0.10.2, care a fost lansată ieri pe Mainnet. Acum ne scufundăm în ceea ce este paralelizare (aceasta este o secţiune semi-tehnică, să continuăm pe foaia de parcurs, să sărim la următoarea secţiune).

Deci ce înseamnă „paralelizarea tranzacţiei”? În mod imposibil, executarea în paralel a unui bloc de tranzacții este imposibilă, deoarece diferite tranzacții pot fi dependente. Acest lucru este ilustrat în următorul exemplu. Luați în considerare un bloc cu trei tranzacții de la același utilizator:

* Tranzacția A: swap USDC pentru ETH
* Tranzacția B: plătește ETH pentru un NFT
* Tranzacție C: swap USDT pentru BTC

În mod clar, Tx A trebuie să se întâmple înainte de Tx B, dar Tx C este complet independent de ambele și poate fi executat în paralel. Dacă fiecare tranzacție are nevoie de 1 secundă pentru a executa, atunci timpul de producție al blocului poate fi redus de la 3 secunde la 2 secunde prin introducerea paralelizării.

Problema principală este că nu cunoaştem în prealabil dependenţele de tranzacţionare. În practică, doar atunci când executăm tranzacţia B din exemplul nostru vedem că aceasta se bazează pe modificările făcute de tranzacţia A. Mai formal, dependența rezultă din faptul că tranzacția B citește din celulele de stocare la care a scris tranzacția. Putem considera tranzacțiile ca formând un grafic de dependență, unde există o muchie de la tranzacţia A la tranzacţia B iff A scrie către o celulă de stocare citită de B, şi prin urmare trebuie executate înainte de B. Următoarea cifră arată un exemplu de grafic de dependență:

![](https://miro.medium.com/max/641/0*I-qGgxdJJmqmgZWM)

În exemplul de mai sus, fiecare coloană poate fi executată în paralel, iar acesta este mecanismul optim (deşi naiv, am fi executat tranzacţiile în mod secvenţial 1-9).

Pentru a depăși faptul că graficul de dependență nu este cunoscut în avans, introducem***paralelizare optimistă***, în spiritul[BLOCK-STM](https://malkhi.com/posts/2022/04/block-stm/)dezvoltat de laboratoarele Aptos, la secvențierul StarkNet. Conform acestei paradigme, încercăm cu optimism să efectuăm tranzacții în paralel și să reexecutăm după găsirea unei coliziuni. De exemplu, putem executa în paralel tranzacții 1-4 din figura 1, doar pentru a afla ulterior că Tx4 depinde de Tx1. Prin urmare, execuţia a fost inutilă (am rulat-o în raport cu aceeaşi stare în care am rulat Tx1 împotrivă, în timp ce ar fi trebuit să ne opunem statului care rezultă din aplicarea Tx1). În acest caz, vom reexecuta Tx4.

Reţineţi că putem adăuga multe optimizări pe lângă paralelizarea optimistă. De exemplu, în loc să așteptăm ca fiecare execuție să se încheie, putem renunța la execuție în momentul în care găsim o dependență care o invalidează.

Un alt exemplu este optimizarea alegerii pe care tranzacțiile trebuie reexecutate. Să presupunem că un bloc care constă din toate tranzacţiile din figura 1 este introdus într-un secvenţial cu cinci nuclee CPU. În primul rând, încercăm să executăm tranzacțiile 1-5 în paralel. În cazul în care ordinea completării a fost Tx2, Tx3, Tx4, Tx1, și în final Tx5, apoi vom găsi dependența Tx1→Tx4 doar după ce Tx4 a fost deja executat – indicând faptul că ar trebui să fie reexecutat. În mod incredibil, am putea dori să reexecutăm și Tx5, deoarece s-ar putea să se comporte diferit, având în vedere noua execuție a Tx4. Cu toate acestea, în loc să fie reexecutate toate tranzacțiile după Tx invalidat în prezent4, putem traversa graficul de dependență construit din tranzacțiile a căror execuție a încetat deja și doar a reexecuta tranzacții care depindeau de Tx4.

### O nouă punere în aplicare necesară pentru Cairo-VM

Contractele inteligente din StarkNet sunt scrise în Cairo şi sunt executate în interiorul Cairo-VM, care specificaţia apare în[hârtia Cairo](https://eprint.iacr.org/2021/1063.pdf). În prezent, secvențialul folosește[implementarea python](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/cairo/lang/vm)a Cairo-VM. Pentru a optimiza performanţa punerii în aplicare a MV, am lansat un efort de a rescrie în grabă MV. Mulțumită muncii extraordinare a[Lambdaclass](https://lambdaclass.com/), care sunt până acum o echipă inestimabilă în ecosistemul StarkNet, acest efort va da rezultate în curând.

Implementarea impulsului VM,[cairo-rs](https://github.com/lambdaclass/cairo-rs), poate executa acum codul nativ Cairo. Pasul următor este gestionarea execuției contractelor inteligente și integrarea cu secvențierul pantonic. Odată integrat cu cairo-rs, se preconizează o îmbunătățire semnificativă a performanței secvențiatorului.

### Refacerea fotbalului în Rust

Trecerea noastră de la python la împingere pentru a îmbunătăți performanța nu este limitată la Cairo VM. Pe lângă îmbunătăţirile menţionate mai sus, intenţionăm să rescriem secvenţialul de la zero. Pe lângă avantajele interne ale lui Rust, acest lucru reprezintă o oportunitate pentru alte optimizări ale secvențiatorului. Includerea în listă a unui cuplu se poate bucura de beneficiile cairo-erilor fără cheltuieli de comunicare de tip pthon-push; și putem reproiecta complet modul în care starea este stocată și accesată (care se bazează pe[structura Patricia-Trie](https://docs.starknet.io/documentation/develop/State/starknet-state/#state_commitment)).

### Ce se întâmplă cu demonstranții?

De-a lungul acestui post, nu am menționat probabil cel mai faimos element de validitate - propul. Ne putem imagina că fiind probabil cea mai sofisticată componentă a arhitecturii, ar trebui să fie blocajul şi, prin urmare, punctul central al optimizării. În mod interesant, componentele mai „standard” sunt acum blocajele din StarkNet. Astăzi, în special cu[dovezile recursive](https://medium.com/starkware/recursive-starks-78f8dd401025), putem încăpea mult mai multe tranzacții decât traficul actual pe Testnet/Mainnet într-o dovadă. De fapt, astăzi, blocurile StarkNet sunt dovedite alături de tranzacţiile cu StarkEx, unde acestea din urmă pot acumula uneori câteva sute de mii de monetării NFT.

### Summary

Paralelizarea, Rust, și multe altele — înscrie-te pe tine însuți pentru un TPS îmbunătățit în viitoarele versiuni StarkNet.