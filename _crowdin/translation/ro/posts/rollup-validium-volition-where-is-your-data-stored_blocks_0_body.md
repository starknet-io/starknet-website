### TL;DR

* StarkWare oferă o gamă de moduri de disponibilitate a datelor (DA) din care clienții pot alege, în funcție de prioritatea lor
* Există trei abordări cu privire la disponibilitatea datelor pentru dovezi STARK, toate sunt deja disponibile în producție:\
  -**Rollup**: Registrul este publicat direct pe blockchain\
  -**Validium**: un Comitet pentru disponibilitate a datelor securizează registrul, cu doar un hash stocat în lanț\
  —**Volition**: aplicațiile pot permite utilizatorilor să își aleagă modul DA — Rollup sau Validium — pentru fiecare tranzacție
* Indiferent de ce DA este folosit — valabilitatea tuturor tranzacțiilor este garantată de STARK-uri

### Introducere

Începând din noiembrie 2022,[StarkEx](https://starkware.co/starkex/)a decontat peste 750 de miliarde de dolari din volumul de tranzacționare, și peste 270 de milioane de tranzacții pe Ethereum. În spațiul NFT, alimentând aplicații precum ImmutableX și Sorare, StarkEx a bătut peste 85 de milioane de INFT la un preţ care este de 1000 de ori mai ieftin decât să facă asta direct pe Ethereum. Tehnologia bazată pe STARK se extinde pe Ethereum. De exemplu, într-o singură săptămână, StarkEx a înregistrat 1,6 ori numărul de tranzacții ca Ethereum (12 m on StarkEx vs 7. m pe Ethereum) cât timp ocupă mai puțin de 0,1% din spațiul de blocare Ethereum. Și face toate astea în timp ce le oferă utilizatorilor același nivel de securitate ca și cum s-ar stabili direct pe Ethereum.

### Cum realizează StarkWare acest lucru?

Utilizatorii trimit tranzacții pe nivelul 2 (fie StarkEx sau StarkNet), care sunt în loturi și trimise la un proverb STARK. Acest prover STARK știe starea registrului înainte și după ce aceste tranzacții au fost procesate. Protestatarul prezintă o dovadă STARK care atestă validitatea noului stat al registrului după ce aceste tranzacții au fost executate. Noul stat şi dovada STARK sunt trimise verificatorului STARK aflat în lanţ. Verificarea acestei dovezi are loc în mod autonom prin intermediul unui contract inteligent pe Ethereum.

Această arhitectură oferă cele mai bune dintre cele două lumi: putem avea costuri de tranzacție scăzute, în timp ce încă avem Ethereum la mijloc ca arbitru neutru. Ethereum ca arbitru nu este doar o fațadă; oferă o securitate critică pentru utilizatorul final. Un utilizator care efectuează tranzacții poate avea acum încredere că fondurile sale sunt asigurate de Ethereum, iar tranzacțiile sunt imutabile odată ce sunt verificate pe Ethereum. Utilizatorul are, de asemenea, întreaga custodie a fondurilor sale. Deținerea este importantă deoarece asigură accesul utilizatorului la fondurile sale în orice moment, fără a se baza pe o terță parte.

### Unde se potrivește disponibilitatea datelor cu toate acestea?

Este important să se pună accentul atât pe ceea ce face această dovadă cât și pe ceea ce*nu este*face. Dovada atestă validitatea noului stat, dar nu vă spune care este noul stat. Pentru aceasta, aveţi nevoie de date disponibile. Dacă avem doar dovada, atunci blockchain-ul știe că ceea ce a fost depus este valabil, dar nu știe ce este nou stat (de ex. Balanța registrului este! Consumatorii acestor date includ utilizatorii care efectuează tranzacții în cadrul acestor dovezi. Datele ar trebui puse la dispoziția acestora în cazul în care doresc să retragă fonduri pentru Ethereum fără a fi nevoie să aibă încredere în operatorul de nivel 2. Acest lucru le oferă utilizatorilor deplina custodie a fondurilor lor.

O analogie pentru asta este profesorul tău de liceu care îți cere să dovedești că x este egal cu x. Acest lucru este banal de dovedit. Ce este mai greu de răspuns: ce este de fapt egal? Pentru asta, ai nevoie de o informaţie separată. Ar putea fi x egal cu 5 sau cu o altă valoare. De asemenea, pe blockchain, o dovadă STARK poate fi trimisă unui verificator de STARK contract inteligent pentru verificare. Și verificatorul poate atesta că dovada este validă (acea x=x). Dar aveți nevoie de o intrare separată pentru a vă spune ce este x (noul balanță de registru).

Există trei abordări pentru a pune la dispoziție aceste date:

#### Mod Rollup

Modul Rollup asigură că starea registrului este stocată pe Ethereum, împreună cu dovezile. Modul Rollup este folosit în prezent de[dYdX](https://dydx.exchange/)în producție și este de asemenea utilizat de rețeaua[Public StarkNet](http://starknet.io/)L2. Avantajele aici sunt clare: se poate recrea starea registrului doar interacționând cu Ethereum blockchain. Implicaţia acestui lucru este că dumneavoastră, în calitate de utilizator final, puteţi vorbi cu încredere cu contractul inteligent relevant privind Ethereum, și retrageți fondurile chiar dacă sistemul de nivel 2 se închide.

#### Validium

Conform Rollup Mode, majoritatea costurilor cu gazele Ethereum sunt suportate de disponibilitatea datelor, iar verificarea nu este probabilă. Asta pentru că este foarte enervant să stochezi date pe blockchain. În modul Validium informația registrger nu este trimisă la Ethereum. Mai degrabă, este stocată în afara lanțului, cu un comitet pentru disponibilitatea datelor. Ethereum stochează un hash al informațiilor acestui registru. Acest comitet pentru disponibilitatea datelor constă dintr-un cvorum de membri independenți care supraveghează actualizarea corectă a stării și păstrează o copie a datelor care au fost prelucrate. Fiecare instanță StarkEx își poate crea propriul cvorum. Membrii de cvorum pentru aplicațiile existente care rulează pe StarkEx includ entități precum[Consensys](https://consensys.net/),[Nethermind](https://nethermind.io/),[Iqlusion](https://iqlusion.io/)și[Cephalopod](https://cephalopod.equipment/).

Beneficiile sunt clare. Nu este necesar să se plătească taxe pentru gazele Ethereum pentru stocarea informațiilor de registru în lanț. Mai degrabă, singurul lucru stocat pe Ethereum este o singură hash a informațiilor de registru. Dacă doriți să retrageți cu încredere fonduri de la nivelul 2 discutând cu Ethereum, aveţi nevoie doar de semnătura digitală a unuia dintre membrii Comitetului pentru disponibilitate a datelor. Membrii CAD vor folosi criptografia pentru a dovedi că aveți dreptul de proprietate asupra acestor fonduri.

Un alt beneficiu ascuns al Disponibilității datelor Validium este confidențialitatea persoanelor care citesc blockchain. Conform modului Rollup, soldul fiecărui cont în momentul depunerii fiecărei dovezi este cunoscut publicului. Cu Validium, aceste date sunt ascunse din blockchain - doar Comitetul de Disponibilitate a datelor este conștient de acest lucru, deoarece sunt păstrate în afara lanțului. Acest nivel de confidențialitate permite o mare varietate de cazuri de utilizare în care obfuscarea datelor privind tranzacțiile este importantă.

#### Voltație

Volația este o arhitectură a disponibilității datelor care oferă posibilitatea de a alege între Validium și Rollup Mode la nivel de tranzacție. Acest lucru se realizează prin menținerea unui registru în lanț și a unui alt registru cu un comitet pentru disponibilitatea datelor. Utilizatorii pot alege între modul Validium și Rollup pentru fiecare tranzacție individuală.

Imaginați-vă că cumpărați un NFT foarte scump ca un Bored Ape sau un Cryptopunk, pe o aplicație care rulează pe StarkEx. Poate doriți să utilizați modul Rollup pentru a securiza datele pentru NFT, pentru că doriți o înregistrare a acelei tranzacții specifice stocate pe Ethereum. Cu toate acestea, puteți achiziționa un NFT foarte ieftin (de ex. un cloak pentru caracterul tău într-un joc blockchain) și în această situație vei fi fericit să economisești bani folosind Validium.

Dacă sunteți interesat de scara atinsă de dovezile STARK, atunci vă rugăm să veniți și să ne construiți.



Poți întotdeauna să trimiți un e-mail la[info@starkware.co](mailto:info@starkware.co)și un om va primi e-mailul tău.