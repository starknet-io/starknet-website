### TL;DR

StarkNet Alpha 1 are două caracteristici noi:

* Interacţiunea L1<>L2
* Date în lanț

### Introducere

La începutul anului, am anunţat că StarkWare construieşte[StarkNet](https://starkware.co/product/starknet/), o rețea STARK, ZK-Rollup1, descentralizată, care funcționează ca o rețea L2 prin Ethereum. StarkNet permite oricărui dApp să atingă o scară nelimitată pentru calculul său – fără a compromite compozabilitatea și securitatea lui Ethereum.

Luna trecută,[StarkNet Alpha 0](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)a fost lansat în lume. Pentru prima dată, dezvoltatorii pot[scrie](https://kobi.one/2021/07/14/stardrop.html)orice contract inteligent și îl pot implementa, fără permisiune, la un ZK-Rollup. Utilizatorii pot trimite tranzacții la rețea, stilul Ethereum.

Astăzi lansăm o nouă versiune, Alpha 1. Eliberăm caracteristici în mod continuu pentru a permite dezvoltatorilor să interacționeze cu noile funcții cât mai curând posibil. Anticipăm că acest lucru va întări ciclul de feedback și va permite feedback-ului comunității să îmbunătățească rapid StarkNet.

### **Caracteristici Alpha 1**

#### Interacţiune L1<>L2

Alpha 1 include un protocol de mesagerie L1<>L2, care permite dezvoltatorilor să implementeze fluxuri neîntrerupte de tranzacții între L1 și L2. Dezvoltatorii pot trimite acum mesaje de la contractele pentru L1 la contractele pentru L2 și viceversa.

Una dintre frumusețile ZK-Rollups este că actualizările stării sunt finale, fără întârziere. Aceasta înseamnă că mesajele care au fost trimise de la L2 la L1 pot fi transmise imediat în contractul lor de destinație. Acest lucru deschide calea pentru a construi aplicații care sunt cu adevărat interoperabile între niveluri.

Ești interesat să încerci acest lucru? Cea mai bună modalitate de a începe este de a urma tutorialul[aici](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html).

Protocolul nostru L1<>L2 reduce semnificativ alte L2s (în special optimismul şi Arbitrum) ale căror lucrări anterioare din acest domeniu au influenţat designul nostru.

#### Disponibilitatea datelor în lanț

Actualizarea stării StarkNet este publicată acum și ca date în lanț despre Ethereum. Acest lucru permite oricărui utilizator să construiască complet starea StarkNet din datele L1. Fiecare actualizare de stare include diff-ul de stare, adică, ce a fost schimbată stocarea și noua sa valoare.

De asemenea, ZK-Rollup îşi arată tăria. Spre deosebire de Rollups optimiste, în care trebuie transmise datele complete ale tranzacțiilor în lanț; în ZK-Rollups, numai datele minime absolute necesare pentru determinarea diffului de stare sunt trimise în lanț.

Gândiți-vă la un exemplu primordial al prețurilor. O tranzacție pentru a actualiza un oracle de obicei conține mai multe tranzacții, dar actualizează doar o singură celulă de stocare; prețul perechii. Datele în lanț necesare pentru o actualizare a stării care conține tranzacții cu oracle de preț într-un Rollup optimist cresc liniar cu numărul de actualizări; în timp ce se află într-un ZK-Rollup, va fi întotdeauna o singură actualizare de stocare.

În plus, algoritmii de compresie pot fi aplicați la datele publicate; iar validitatea acestora va fi atestată prin dovada STARK, reducând și mai mult amprenta în lanț. Versiunile viitoare ale StarkNet vor introduce optimizări inovatoare în acest domeniu.

#### StarkNet OS

De asemenea, lansăm codul sistemului de operare StarkNet. Sistemul de operare StarkNet este programul Cairo care rulează StarkNet. Sistemul de operare gestionează tot ceea ce se face pe rețea - implementarea contractelor, execuția tranzacțiilor, L1<>L2 și multe altele. Structura şi designul sistemului de operare StarkNet vor fi explicate în detaliu într-un post separat.

#### Caracteristici suplimentare

Pe lângă faptul că StarkNet Alpha a evoluat, noi îmbunătăţim în mod constant Cairo. Pentru o descriere completă a noilor caracteristici din Cairo v0.3.0, verificați notele de lansare[aici](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.3.0).

### Ecosistemul este în creștere

Pe lângă munca constantă la StarkNet Core, ecosistemul lucrează la StarkNet se extinde continuu. Suntem încântaţi să colaborăm cu unele dintre cele mai talentate echipe din ecosistem.

Primul efort Nodul Complet al lui StarkNet, Fermion, este dezvoltat de echipa Erigon (fost TurboGeth). Pe baza cunoștințelor lor enorme acumulate lucrând la Ethereum, putem lucra cu ei pentru a construi un nod complet, puternic. care încorporează multe lecții învățate în timp ce se construiește pentru Ethereum, beneficiind în același timp de dimensiunea oferită de dovezile STARK.

Nethermind lucrează la Warp, un compilator de la EVM la Cairo. Legat de cultura noastră de a prezenta instrumente noi numai după ce acestea sunt gata, tot ce putem spune este să ne așteptăm la vești interesante în acest front foarte curând! Putem spune totuşi că se mişcă cu viteză de deformare.

### Ce deţine viitorul

Următoarea oprire de pe drumul nostru către StarkNet va fi compozabilitatea - permițând contractelor să interacționeze între ele. Rămâi pe fază!

[StarkWare](https://starkware.co/)

1 Așa cum am spus anterior, ZK-Rollup este acum un termen utilizat în mod obișnuit, însă foarte înșelător: aceste soluții nu oferă (în prezent) cunoștințe zero.

**Actualizare (Nov. 2021):**StarkNet Alpha este live pe Ethereum Mainnet