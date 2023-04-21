### TL;DR

* STARK-uri permit scalarea blockchain prin demonstrarea eficientă a integrității calculelor
* StarkEx este un motor de dimensionare specific aplicaţiei
* StarkNet este o rețea de nivel 2 fără permisiune, contract inteligent

### **STARK-uri**

STARK-uri (ARK-uri Cale, Transparente ale Cunoașterii) sunt un sistem de dovezi care permite dovedirea și verificarea calculelor. Permite procesarea unei calcule mari, generarea unei dovezi pentru corectitudinea calculului, şi apoi verificarea dovezii în foarte puţini paşi.

STARK-uri pot juca un rol cheie în scalabilitatea blockchain, permițând calculelor mari să fie făcute în afara lanțului, atunci când este mai ieftin, numai verificarea, care necesită o parte din calcul, trebuie efectuată în lanț. Cu alte cuvinte, efectuând foarte puțini pași în lanț, verificatorul afirmă integritatea unui calcul mult mai mare care a fost făcut în afara lanțului.

Folosind STARK-uri, stratul 2 de soluţii grupează împreună şi calculează mii de tranzacţii, şi apoi verifică valabilitatea acestora în lanţ cu o singură dovadă de STARK. Costul procesului în lanț este împărțit între**toate**tranzacțiile din lot. Acest lucru duce la securitate Ethereum și la costuri scăzute ale gazului pe tranzacție.

Costurile de calcul scăzute vor atrage după sine o nouă clasă de aplicații care anterior nu erau fezabile în lanț. Aceste proprietăți fac din STARK-uri un excelent element de bază pentru îmbunătățirea experienței utilizatorilor și reducerea costurilor gazelor, păstrând în acelaşi timp siguranţa stratului de decontare Ethereum.

StarkWare oferă două soluţii pentru a scala Ethereum cu STARKs: StarkEx şi StarkNet.

### **StarkEx**

[StarkEx](https://starkware.co/starkex/)este un cadru pentru crearea soluțiilor permise, specifice aplicației. StarkEx este un set de unelte de[aplicații utile fluxează](https://docs.starkware.co/starkex-v4/starkex-deep-dive/regular-flows)pe care proiectele le pot utiliza pentru a realiza calculul off-chain ieftin. O dovadă STARK, care atestă corectitudinea execuției, este generată în afara lanțului. O astfel de dovadă poate include până la 12 000–500 000 de tranzacții (în funcție de tipul de tranzacție). Dovada este apoi trimisă către verificatorul STARK pentru a fi acceptată în lanț. Aceasta înseamnă o verificare pentru toate tranzacțiile — pentru un cost al gazului amortizat incredibil de scăzut per tranzacție.

Câteva exemple de aplicații utilizate pe StarkEx sunt dYdX (comerț cu perpetuate), Immutable and Sorare (NFT – mintea și tranzacționarea), DeversiFi (spot trading) și Celer (DeFi pooling).

StarkWare adaugă continuu mai multe aplicații la StarkEx, urmărind piața și nevoile clienților săi.

### **StarkNet**

*[StarkNet](https://starkware.co/starknet/)este o rețea fără permisiuni 2 unde orice utilizator sau dezvoltator poate implementa contracte inteligente dezvoltate în limba Cairo.*

Comparabil cu experiența contractuală inteligentă Ethereum, în cadrul ecosistemului StarkNet, contractul dumneavoastră poate interacționa cu orice alt contract implementat pe StarkNet, permițând protocoale compozite bogat. Contractele StarkNet pot interacţiona cu contractele Ethereum prin intermediul mesajelor asincrone.

Spre deosebire de StarkEx, unde cererile sunt responsabile pentru trimiterea de tranzacții, secvențierii StarkNet fac tranzacții multiple și le trimit pentru a fi procesate și dovedite. (secvențierele StarkNet, operate în prezent de StarkWare, cu planuri viitoare de descentralizare.) Aceasta înseamnă că, odată ce aplicațiile își implementează contractele de la Cairo, acestea nu trebuie să se îngrijoreze cu privire la funcționarea infrastructurii operatorilor suplimentari. StarkNet suportă modul de disponibilitate a datelor Rollup, ceea ce înseamnă că starea rostului este scrisă pe Ethereum împreună cu dovezile STARK.

O comunitate de dezvoltatori uriaşi este profund angajată de ecosistemul StarkNet, construind aplicaţii, unelte şi infrastructură. Zeci de aplicații sunt deja live pe o plasă testată — DeFi, jocuri, votare, IA și multe altele. Mai mult, instrumente de dezvoltare, cum ar fi exploratorul de blocaje, mediul și cadrul de testare locală; SDK în mai multe limbi şi mai multe sunt construite de Comunitatea StarkNet. În plus, au loc discuții active în cadrul platformei[Shamanss](https://community.starknet.io/), cu sugestii pentru îmbunătățiri, caracteristici potențiale și bune practici.

### **Pentru a o umple sus**

Atât[StarkEx](https://youtu.be/P-qoPVoneQA)cât şi StarkNet sunt soluţii de scalare STARK. Ambele oferă scalabilitate, costuri scăzute ale gazelor și securitate, dar au cerințe de operare și modele de interoperabilitate diferite. StarkEx ar putea fi soluţia potrivită pentru o cerere care este în mare parte autonomă şi se încadrează în API-urile pe care le oferă StarkEx. StarkNet ar putea fi mai potrivit pentru un protocol care necesită interacțiunea sincronă cu alte protocoale sau care are nevoi ce depășesc ceea ce oferă StarkEx.

STARK-uri au revoluționat modul în care pot fi construite aplicațiile pe Ethereum. StarkEx și StarkNet vor continua să activeze aplicații care anterior erau neviabile și vor împinge limitele a ceea ce este posibil în blockchain.

Acest articol a fost scris în colaborare de[Tim Gestson](https://twitter.com/IcemanTim)și echipa[StarkWare](https://starkware.co/)