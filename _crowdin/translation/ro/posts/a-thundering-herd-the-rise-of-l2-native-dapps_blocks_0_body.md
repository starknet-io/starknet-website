### TL;DR

L2-native dApps poate acum să înflorească fără restricții tradiționale de gaze L1

### Introducere

dezvoltatorii dApp s-au confruntat întotdeauna cu constrângeri severe din cauza blocului de gaze Ethereum (L1). Aceasta limitează nu numai*modul în care*acele dApps funcționează, ci și*ce*acele dApps sunt capabile să facă.

Nivelul 2 (L2) oferă dezvoltatorilor dApp un greenfield computațional, fără acest tavan de sticlă. Credem că marea majoritate a dApps va fi L2-nativ în câţiva ani: acestea vor fi fost construite de pe pământ în sus pe L2 pentru a beneficia de acest grad de libertate computațională.

### L1 formă L1-native dApps

*Haideţi să luăm în considerare două exemple de aplicaţii dApps populare, a căror proiectare este profund modelată de constrângerile de gaze L1: agregatori AMM şi DEX.*

Un producător automatizat de piață (AMM) este în esență o aproximare mică de gaze a unui schimb de ordine pe bază de carte. În loc să permită utilizatorilor să plaseze și să elimine limite, stop loss, sau o varietate de alte tipuri de ordine, L1 AMM permit doar swapuri simple cu un portofoliu central de lichidități subiacent – pentru a ține cont de costurile de calcul intense ale L1.

În mod ideal, agregatorii DEX au nevoie de acces la toate pool-urile de lichidități posibile, chiar și la cel mai mic portofoliu de lichidități, pentru a obține cele mai bune prețuri pentru utilizatori. Cu toate acestea, din cauza costului de a interoga mai multe pool-uri diferite, pur și simplu nu merită să fie transferat peste L1. Este justificabil să se acceseze pool-urile și să se plătească comisioanele de tranzacție asociate numai atunci când fondurile de lichidități au lichidități suficient de mari. Într-o venă similară, lichidările în domeniul împrumuturilor/împrumuturilor și alte dApps bazate pe garanții reale ar putea fi mult mai precise dacă diferența dintre reducerea de lichidare și comisionul de tranzacție ar fi mult mai mică.

Funcționalitatea limitată și designul multor dApps L1 rezultă direct de la dezvoltatori care își optimizează codul pentru a respecta constrângerile legate de gaz ale lui Ethereum. De ce, ați putea întreba, noi spunem Ethereum? Nu se poate rula codul de soliditate pe multe L1s și chiar L2? Într-adevăr, dar dintre acestea, Ethereum este cel mai scump (și, prin urmare, sigur) mediu. DApps soliditar sunt proiectate pentru „cea mai scumpă legătură”, adică Ethereum. Prin urmare, ele nu beneficiază de avantajul computațional pe care îl oferă mediile mai puțin costisitoare. Pentru a debloca funcționalitatea a fost ignorată prin proiectarea unei dApp pentru cel mai scump mediu rulant, codul dApp trebuie adaptat.

### Creșterea dApp-ului L2-nativ

Validitatea Rollups (aka ZK-Rollups) permite un calcul extrem de ieftin. Spre deosebire de orice altă soluție de scalare – calculul L2 poate crește exponențial, cu doar un impact mic asupra costului gazului de verificare în lanț. În plus, o Validity Rollup procesează intrări în calcule – „date ale martorilor” – fără a consuma resurse suplimentare de nivel 1, permițând calcule cu multe intrări.

Codificarea dApps nativ pe L2 în**[Cairo](https://www.cairo-lang.org/)**(o limbă completă la scară dApps prin intermediul dovezilor STARK) deblochează un vast domeniu de posibilități pentru dezvoltatori. Aceasta le permite să utilizeze cantități semnificative de date – atât date de calcul, cât și date referitoare la martori – pe care nu le-au putut utiliza înainte.

Hai să explorăm astfel de aplicații L2-native și noile lor capacități îmbogățite.

#### DeFi

Înainte de a te înscrie pe StarkEx, Validitatea StarkWare Rollup, dYdX a funcționat ca un dApp L1 pe Ethereum. Acesta a oferit utilizatorilor săi un efect de levier de x10 pe active sintetice și poziții sprijinite cu un singur activ sintetic. Reconstruirea dYdX în Cairo ca L2-native dApp oferă o platformă DeFi mult mai scalabilă, mai ieftină și mai eficientă:

* Actualizări ale prețului oracului: Astfel de actualizări includ de obicei zeci de prețuri și semnături din diferite surse pentru a calcula un median. Un Rollup Validity oferă o scalare exponențială a logicii oracolului de preț (verificarea semnăturii și calcularea prețului mediu) – fără a raporta aceste date ale martorilor la L1. Compară acest lucru cu implementarea L1 a dYdX, unde fiecare oracle de preț actualizează costă aproximativ 300 K gaz și era, prin urmare, limitată ca frecvenţă şi ca mărime a setului de raportori de preţuri.
* Levier: Un flux de preț precis permite dYdX să estimeze riscul unei poziții în timp real și să ofere un efect de levier mai mare pentru utilizatori. Datorită îmbunătățirii actualizărilor de preț ale oracelelor, dYdX a crescut efectul de levier de la x10 la L1 x 25 la L2.
* Margine întreagă: Cu dYdX pe L2, formatorii de piață pot plasa ordine lungi/scurte pe multe active utilizând aceeași garanție. Tranzacția medie pe L2 dYdX implică poziții cu mai mult de 10 active sintetice diferite! Prin comparație, această capacitate a marjei încrucișate pe L1 ar fi fost mai mare decât dublul costului gazului în lanț.

#### Jocuri și artă generativă

Cultura curentă a jocurilor L1-native stochează de obicei activele jocului pe L1 în timp ce implementezi întreaga logică a jocului într-o aplicație de încredere în afara lanțului. Acest model este rezultatul direct al limitării gazului din L1. Datorită calculelor ieftine pe L2, dezvoltatorii de L2-native dApps de gaming pot implementa acum logica jocului într-un contract inteligent și manipula activele jocului fără încredere, în loc să le stocheze. Introducerea logicii jocurilor în domeniul calculelor fără încredere este un pas semnificativ către o lume mult mai bogată a jocurilor bazate pe blockchain. Jocurile L2-native sunt deja dezvoltate pe StarkNet, rețeaua fără permisiuni a StarkWare (de exemplu,[Dope Wars](https://github.com/dopedao/RYO)și[Influență](https://medium.com/influenceth/influence-to-launch-on-starknet-afd3c26ea25a)).

Dar cât de complex poate fi cu adevărat un joc bazat pe blockchain? De exemplu, manipularea graficelor direct în lanț pare imposibilă -[sau este](https://twitter.com/guiltygyoza/status/1449637155001798657)? Rezolvarea ecuațiilor diferențiate și simularea unei mișcări planare într-un contract inteligent reprezintă un pas important către ceea ce în viitor ar putea fi un motor fizic. Implicaţiile sunt imense. Imaginați-vă un joc multijucător competitiv precum Counter-Strike. Dacă cineva ar putea simula logica jocului în lanț, multe hack-uri temute ar deveni ceva de trecut - jucătorii s-ar putea bucura de un joc potrivit pentru totdeauna.

Generative Art folosește calculul, aleatoriu și alte date pentru a crea artă bazată pe blockchain. Logica mai complexă și computația pe care un artist le poate folosi fără încredere, cu cât există mai multe opțiuni pentru a genera piese unice de artă. [WhaleStreet DAO](https://blog.whalestreet.xyz/whalestreet-dao-to-launch-gen-art-ecosystem-on-ethereum-with-starknet/)lansează unul dintre primele proiecte de artă Gen pe StarkNet, profitând de resursele computaționale nelimitate ale StarkNet.

### Ce urmează?

Validity Rollups — and Cairo-powered StarkEx and StarkNet, în special — oferă un mediu în care se pot dezvolta și exploata aplicații dApps care consumă o mulțime de date de calcul sau de martori. Cu toate beneficiile tehnologiei de registru distribuite, prezicem un viitor extrem de interesant pentru L2-native dApps.

Ce puteți**crea cu calcule generale susținute de compozabilitate, neîncredere și descentralizare?