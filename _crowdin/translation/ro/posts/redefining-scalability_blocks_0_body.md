Scalabilitatea lanțului Blockchain a fost dintotdeauna un subiect încins. Aproape fiecare rețea blockchain duce la un număr mare de tranzacții pe secundă (TPS) ca punct de vânzare. Cu toate acestea, STP nu este o măsură valabilă pentru a compara rețelele blockchain cu – ceea ce reprezintă o provocare pentru evaluarea performanței lor relative. În plus, numerele TPS mari sunt de obicei la un cost – ceea ce ridică întrebarea: se realizează cu adevărat aceste rețele, sau doar măreşte cantitatea de carburanţi?

Așa că haideți să examinăm cum să definim scalabilitatea, care sunt compromisurile făcute pentru a le realiza, și de ce Validity Rollups sunt soluția finală a scalabilității.

### Nu toate Tranzacțiile sunt realizate egal

În primul rând, trebuie să ne stabilim afirmaţia că o măsură simplă şi convenabilă a TPS nu este o măsură exactă a scalabilităţii.

Compensarea nodurilor pentru executarea tranzacțiilor (și descurajarea utilizatorilor de a spamura rețeaua cu ajutorul unor calcule inutile), blockchain-uri percep o taxă proporțională cu sarcina computațională impusă pe blockchain. În Ethereum, complexitatea sarcinii de calcul este măsurată în*gaz.*Deoarece gazul este o măsură convenabilă a complexității tranzacțiilor, termenul va fi utilizat în tot acest articol și pentru blockchain-urile care nu sunt legate de Ethereum, chiar dacă este de obicei specific pentru Ethereum.

Tranzacțiile diferă semnificativ din punct de vedere al complexității și, prin urmare, al cantității de gaz consumat. Bitcoin, pionierul tranzacțiilor nesigure peer-to-peer, suportă doar scriptul rudimentar Bitcoin. Aceste transferuri simple de la adrese pentru a aborda utilizarea gazului mic. Spre deosebire de acestea, lanţurile inteligente de contracte precum Ethereum sau Solana sprijină un limbaj de programare virtual şi complet Turing-complete care permite tranzacţii mult mai complexe. Prin urmare, dApps ca Uniswap necesită mult mai mult gaz.

De aceea nu are niciun sens să comparăm TPS al diferitelor blockchain-uri. Ceea ce ar trebui să comparăm în schimb este capacitatea de calcul - sau a tranzitului.

Toate Blockchain-urile au o (variabilă) dimensiune a blocului și timp de bloc care determină câte*unități de calcul*pot fi procesate per bloc și cum*rapid*poate fi adăugat un nou bloc. Împreună, aceste două variabile determină*tranzitul*al unui blockchain.

### Ce constrânge Scalabilitatea?

Blockchain-urile se străduiesc să fie cât mai descentralizate și mai favorabile incluziunii. În acest scop, trebuie ţinute sub control două proprietăţi fundamentale.

#### **1. Cerințe hardware**

Descentralizarea unei rețele blockchain este determinată de capacitatea celui mai slab nod din rețea de a verifica blockchain-ul și de a-i păstra starea. Prin urmare, costurile de exploatare a unui nod (hardware, lățime de bandă; și stocare) ar trebui să fie menținut cât mai jos posibil, pentru a permite unui număr cât mai mare de persoane să devină participanți fără permisiune în rețeaua fără încredere.

#### 2**.**Creștere de stat

Creșterea statului se referă la cât de repede crește blocajul. Cu cât trece mai mult un blockchain permite să se întâmple pe unitate de timp, cu atât mai repede va crește blockchain-ul. Nodurile complete stochează istoricul rețelei și trebuie să poată valida starea rețelei. Starea lui Ethereum este stocată și menționată utilizând structuri eficiente, cum ar fi copacii. Pe măsură ce statul crește, i se adaugă noi frunze și ramuri, ceea ce face ca efectuarea anumitor acțiuni să fie din ce în ce mai complexă și mai îndelungată. Pe măsură ce lanţul creşte în dimensiune, acesta înrăutăţeşte execuţia cea mai proastă a cazurilor prin noduri, ceea ce duce la o creştere continuă a timpului de validare a noilor blocuri. În timp, acest lucru crește și timpul total necesar pentru sincronizarea unui nod complet.

### Impacturi dăunătoare ale creșterii pe întregul teritoriu

#### 1. Numărul de module

Cerințele minime pentru rularea unui nod și numărul de noduri sunt:

* Bitcoin1: spaţiu 350GB HDD disc, 5 Mbit/s connection, 1GB RAM, CPU >1 Ghz. **Număr de noduri: ~10.000**
* Ethereum2: spațiu de disc 500GB+ SSD, conexiune 25 Mbit/s, 4–8GB RAM, CPU 2-4 nuclee. **Număr de noduri: ~6,000**
* Solana3: spațiu disc de 1,5 TB+ SSD, 300 Mbit/s conectat, 128GB RAM CPU 12 + nuclee. **Număr de noduri: ~1,200**

Observă că cu cât CPU, lățimea de bandă și cerințele de stocare sunt mai mari pentru nodurile necesare pentru trecerea unui blockchain, reducerea numărului de noduri din rețea – ceea ce duce la o descentralizare mai slabă și la o rețea mai puțin favorabilă incluziunii.

#### 2. Este timpul să sincronizăm un modul complet

Când rulează un nod pentru prima dată, trebuie să se sincronizeze cu toate nodurile existente, descarcă, și validează, starea rețelei până la vârful lanțului, de la blocul genesis. Acest proces ar trebui să fie cât mai rapid şi mai eficient cu putinţă, pentru a permite oricui să participe necondiţionat la protocol.

Luând ca indicator testele Jameson Lopp[2020 Bitcoin Node](https://blog.lopp.net/2020-bitcoin-node-performance-tests/)și[2021 Node Sync Testele](https://blog.lopp.net/2021-altcoin-node-sync-tests/)Tabelul 1 compară timpul necesar pentru sincronizarea unui nod complet de Bitcoin vs. Ethereum vs. Solana în medie la un PC de grad de consumator.

![Tabelul 1. Comparație fluxuri blockchain și node-sync](/assets/1_gmpi_1c9zipoc-znrh7b5q.png "Tabelul 1. Comparație fluxuri blockchain și node-sync")

Tabelul 1 demonstrează că o creștere a fluxului duce la timpi de sincronizare mai lungi, deoarece din ce în ce mai multe date trebuie prelucrate și stocate.

Deși se realizează în mod constant îmbunătățiri ale software-ului nod pentru a atenua provocarea reprezentată de creșterea blockchain-ului (scăderea amprentei pe disc, viteze sincronizate mai rapide, rezistență mai mare la erori, modularizarea anumitor componente etc. , este evident că nodurile încă nu pot ține pasul cu creșterea fluxului.

### Cum ar trebui definită calitatea?

Scalabilitatea este termenul cel mai greșit din spațiul blockchain. În timp ce creșterea fluxului este de dorit, aceasta este doar o parte a problemei.

***Scalabilitatea**înseamnă**mai multe tranzacții**pentru**același hardware**.*

Din acest motiv, scalabilitatea poate fi separată în două categorii.

#### scalabilitatea ulcerului

Sequencing descrie acțiunea de ordonare și procesare a tranzacțiilor într-o rețea. Așa cum s-a stabilit anterior, orice blockchain ar putea să își mărească trivial fluxul mărind dimensiunea blocului și scurtând timpul acestuia - până la un punct în care impactul negativ asupra descentralizării este considerat prea semnificativ. Dar, modificarea acestor parametri simpli nu oferă îmbunătățirile necesare. Ethereum EVM poate, teoretic,[să gestioneze până la ~2.000 TPS](https://twitter.com/dankrad/status/1459607325854121989), care este insuficient pentru a deservi cererea de blocare a spațiului pe termen lung. La scară secvenţială, Solana a făcut câteva inovaţii impresionante: profitând de un mediu de execuţie paralel şi de un mecanism de consens inteligent. care permite o trecere mult mai eficientă. Dar, în ciuda îmbunătăţirilor făcute, nu este nici suficientă, nici scalabilă. Pe măsură ce Solana îşi măreşte tranzitul, costurile hardware pentru administrarea unui nod şi procesarea tranzacţiilor cresc, de asemenea.

#### Verificare scalabilitate

*Verificarea scalabilității descrie abordările care cresc cantitatea de noduri fără a împovăra costurile hardware.*Mai precis, se referă la inovații criptografice cum ar fi dovezile validității. Ele sunt motivul pentru care Validity Rollups poate dimensiona un blockchain în mod durabil.

**Ce este Validity Rollup?**

Valabilitatea Rollups (cunoscută și sub denumirea de „ZK-Rollups”) mută calculul și depozitarea de către stat în afara lanțului, dar păstrează o cantitate mică de anumite date în lanț. Un contract inteligent pe blockchain-ul subiacent menține rădăcina statului Rollup. Pe Rollup, un lot de tranzacții puternic comprimate, împreună cu actualul rădăcină de stat, sunt trimise la un Prover în afara lanțului. Prover calculează tranzacțiile, generează o dovadă de validitate a rezultatelor și a noii rădăcini de stat și o trimite unui Verifier în lanț. Verificatorul verifică validitatea dovezii și contractul inteligent care menține starea Rollup îl actualizează la noua stare furnizată de Prover.

**Cum se poate scara Validity Rollups cu aceleași cerințe hardware?**

Chiar dacă Provers are nevoie de echipamente de vârf, ele nu afectează descentralizarea unui blockchain; deoarece valabilitatea tranzacțiilor este garantată prin dovezi care pot fi verificate matematic.

Ceea ce contează sunt cerințele pentru verificarea dovezilor. Deoarece datele implicate sunt puternic comprimate și în mare parte abstractate prin calcul, impactul său asupra nodurilor blockchain-ului subiacent este minim*.*

Verificatorii (Ethereum nodes) nu necesită echipamente hardware de vârf, iar dimensiunea loturilor nu crește cerințele hardware. Doar tranzițiile de stat și o cantitate mică de date de apel trebuie să fie procesate și stocate de noduri. Acest lucru permite tuturor nodurilor Ethereum să verifice loturile de valabilitate Rollup folosind echipamentele lor existente.

**Cu cât sunt mai multe tranzacții, cu atât mai ieftine**

În blockchain-urile tradiționale, cu cât se întâmplă mai multe tranzacții, cu cât este mai scump pentru toată lumea, pe măsură ce spațiul din bloc se completează — iar utilizatorii trebuie să se depășească pe o piață de taxe pentru a putea include tranzacțiile.

Pentru o Validity Rollup, această dinamică este inversată. Verificarea unui lot de tranzacții pe Ethereum are un anumit cost. Pe măsură ce numărul de tranzacţii din interiorul unui lot creşte, costul pentru a verifica că lotul creşte exponenţial la o rată mai mică. Adăugarea mai multor tranzacții la un lot duce la taxe de tranzacționare mai ieftine, chiar dacă costurile de verificare a lotului cresc — deoarece sunt amortizate între toate tranzacțiile din lot. Valabilitatea Rollups dorește cât mai multe tranzacții în interiorul unui lot — astfel încât taxa de verificare să poată fi partajată între toți utilizatorii. Pe măsură ce mărimea lotului crește la infinit, taxa amortizată per tranzacție converge la zero, i. ., cu cât sunt mai multe tranzacții pe Validity Rollup, cu atât mai ieftin este pentru toată lumea.

dYdX, un dApp alimentat de un Validity Rollup, vede frecvent mărimi în lot de peste 12 000 de tranzacții. Compararea consumului de gaze pentru aceleași tranzacții pe Mainnet cu cel de Validity Rollup ilustrează creșterea scalabilității:

Setarea unei tranzacții dYdX pe ethereum Mainnet:**200,000 gaz**

Setarea unei tranzacții dYdX pe StarkEx:**<500 gaz**

O altă modalitate de a privi astfel: Validity Rollups - principalele scări de costuri sunt liniare cu numărul de utilizatori din același lot.

#### De ce Rollups optimist nu sunt la fel de scalabile cum ar putea crede cineva

Teoretic, Rollups-urile optimiste oferă aproape aceleași beneficii de scalabilitate ca Rollups-ul validității. Dar există o distincție importantă: Rollups optimist optimizează pentru cazul mediu, în timp ce Validity Rollups se optimizează pentru cel mai rău caz. Deoarece sistemele blockchain funcționează în condiții extrem de dificile, optimizarea în cel mai rău caz este singura modalitate de a obține securitate.

În cel mai rău caz al Rollup optimist, tranzacțiile unui utilizator nu vor fi verificate de verificatorii de fraudă. Deci, pentru a contesta frauda, utilizatorul trebuie să sincronizeze un nod complet Ethereum, un nod complet L2 și să calculeze singuri tranzacția suspectă.

În cel mai rău caz Validity Rollup, un utilizator ar trebui doar să sincronizeze un nod complet Ethereum pentru a verifica validitatea, să economisească sarcinile de calcul.

Spre deosebire de Validity Rollups, costurile Rollup optimist sunt liniare cu numărul de tranzacții în loc de numărul de utilizatori, făcându-le mai scumpe.

### Piesa finală din Puzzle — Acces fără permisiuni în statul Rollup

Pentru a garanta validitatea tranzacțiilor, utilizatorii trebuie să execute doar un nod Ethereum. Cu toate acestea, utilizatorii și dezvoltatorii pot dori să vizioneze și să ruleze, starea și executarea Rollup în diferite scopuri. Un*modul de indexare L2*completează perfect acest lucru. Nu numai că permite utilizatorilor să vadă tranzacțiile în rețea, este însă și o componentă esențială a infrastructurii, necesară pentru funcționarea infrastructurii ecosistemice. Indexări ca The Graph, Alchemy, Infura; Oracle networks like Chainlink, and block explorers, all are supports all by a permissioness, indexing L2.

### Concluzii

Multe abordări pentru a aborda scalabilitatea blockchain se concentrează fals pe creșterea*fluxului*. Dar, acest lucru neglijează impactul fluxurilor asupra nodurilor: cerințele hardware tot mai mari pentru a procesa blocurile și a stoca istoricul rețelei, şi cum împiedică aceasta descentralizarea unei reţele.

Odată cu apariția criptografiei care nu poate fi validată, un blockchain poate atinge**adevărata scalabilitate**care nu împovărează nodurile cu costuri din ce în ce mai mari și permite descentralizarea pe scară largă. Acum sunt posibile mai multe tranzacții cu calcule puternice și mai complexe pentru același hardware, inversarea dilemei pieței de taxe în acest proces - cu cât mai multă activitate pe un Rollup validitate, cu atât mai ieftin va fi mai ieftin!

[SwagtimusPrime.eth](https://twitter.com/SwagtimusP?t=pO0L1vGIhuC-ZgWOusQYtA&s=09)și[Louis Guthmann](https://twitter.com/GuthL)

1 De la<https://bitcoin.org/en/bitcoin-core/features/requirements>

2 De la<https://ethereum.org/en/developers/docs/nodes-and-clients/>

3 Din<https://docs.solana.com/running-validator/validator-reqs>

4 Simplificat și ajustat cu fermitate pentru dimensiunile medii dinamice ale blocului