### TL;DR

* Împărtăşim un plan detaliat pentru Regeneză, care a fost modelat de discuţii ample cu comunitatea StarkNet. Mulţumiri speciale lui Kuba@SWM.
* Regeneză va urmări eliberarea Cairo 1.0, făcând sistemul mai sigur, permiţând contracte mai simple şi mai sigure StarkNet
* Utilizatorii trebuie să fie pregătiți să își actualizeze portofelul în timpul fazei de tranziție
* Dezvoltatorilor li se va cere să își porteze contractele la Cairo 1.0

### Introducere

StarkNet Alpha avansează către Regeneză, un pas important către producţie. În această actualizare dorim să împărtășim mai multe detalii despre motivația principală pentru Regeneză —[Cairo 1.](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)— și să începi să explici ce va cere de la utilizatori și dezvoltatori. După Regeneza, StarkNet va lucra doar cu contracte pe bază de Cairo 1.0 şi va începe dintr-un nou bloc genesis cu starea existentă.

Ce va necesita Regeneza de la utilizatori? O simplă actualizare a portofelului lor. De ce va avea nevoie de la constructorii de aplicații StarkNet? Transferarea contractelor lor către Cairo 1.0, urmând o simplă orientare de actualizare. Mai precis, nu va mai fi repornit de la un stat curat şi vom rămâne cu acelaşi exemplu StarkNet, ceea ce înseamnă că nu va fi nevoie de o migrare**.**

Planul Regenesis este de a păstra pe deplin starea cererilor şi de a nu suporta în timp util cererile. Astfel, aplicațiile care respectă orientările pe care le vom furniza vor putea lansa imediat pe StarkNet Alpha Mainnet fără a afecta funcționarea și utilizatorii lor în timpul procesului de Regeneză. e se angajează să colaboreze cu comunitatea și să ofere tot sprijinul necesar pentru ca acest proces să fie cât mai ușor cu putință.

Ne îndreptăm în această direcţie ca urmare a unor discuţii ample cu comunitatea, care au inclus o sugestie importantă din partea echipei Software Mansion .

### De ce Regenesis?

#### Cairo 1.0 şi Sierra

Principala motivaţie pentru Regeneză este valorificarea noilor posibilităţi create de Cairo 1. — adică secvențiatorii de protecție DOS, rezistența la cenzură și contorizarea gazului, care sunt esențiale pentru StarkNet ca rețea descentralizată.

Cairo 1.0 va garanta că fiecare tranzacție poate fi dovedită. Acest lucru va permite StarkNet să includă tranzacții reverse în blocuri și să genereze o dovadă a execuției lor. Acest mecanism va permite ca secvențiatorii să fie plătiți la executarea tranzacțiilor inversate, sporind protecția DOS împotriva actorilor răuvoitori. În plus, Cairo 1.0 va sprijini contorizarea gazului, ceea ce îi va permite lui StarkNet să treacă la o piață a comisioanelor mai intuitivă. În cele din urmă, acest lucru va permite StarkNet să introducă tranzacții forțate din L1 și va spori capacitățile de rezistență la cenzură ale rețelei.

Pentru a beneficia de aceste beneficii, contractele Cairo v0 și Cairo 1.0 nu pot fi amestecate. Declarațiile incorecte nu se pot dovedi a fi incorecte și nici urmărirea gazului nu se poate întâmpla, dacă avem părți din contractele Cairo v0. În acest scop, va trebui să eliminăm complet codul Cairo v0 din starea StarkNet, ergo Regenesis.

**După Regenezsis, vom avea un sistem Starknet bazat în totalitate pe Cairo 1.0.**

#### Simplificarea codului și a protocolului

StarkNet, în timp ce era încă în Alpha, a suferit deja multe schimbări. Fiecare versiune de până acum a modificat sistemul de operare StarkNet, blocurile și structura tranzacțiilor. Acest lucru a făcut ca o parte din cod să fie învechit. Cu toate acestea, nodurile complete și furnizorii de infrastructură (cum ar fi indexarea și exploratorii de stat) trebuie să fie conștienți, şi implementează, toate comportamentele trecute ale versiunilor StarkNet Alpha pentru a se sincroniza cu starea fără încredere. Fără Regenesis, această sarcină ar putea constitui un factor de descurajare major pentru dezvoltatorii care ar lua în considerare construirea unor astfel de servicii pentru StarkNet.

Prin urmare, înainte de a merge la producție și ca pregătire pentru o lume descentralizată cu numeroase implementări de instrumente de infrastructură, intenționăm să reducem complexitatea protocolului. Am realiza acest lucru prin faptul că nu am nevoie de o infrastructură viitoare pentru a executa niciun StarkNet 0. să codifice şi să marcheze ca punct de geneză primul bloc după perioada de tranziţie.

### A fost regeneză? Calendarul global

Regeneza va urma eliberării Cairo 1.0, care este planificată să aibă loc până la sfârșitul anului 2022. În timpul Q1 din 2023, StarkNet va fi actualizat pentru a sprijini Cairo 1. și intenționăm să migrăm la o rețea bazată pe Cairo 1.0 până la sfârșitul Q1.

**Utilizatorii și aplicațiile vor trebui să facă tranziția în această perioadă.**

![](/assets/1_ef85shzd2uudwex-cy8wdg-1.png)

### Deci ce am nevoie să cunosc?

Dezvoltatorii de aplicaţii trebuie să fie conştienţi de următoarele aspecte din jurul Regenezei:

1. Asigurați-vă că contractul dvs. este gata pentru actualizare. Toate detaliile tehnice ale planului sunt partajate în[Forumul comunitar StarkNet](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080). Odată ce detaliile vor fi finalizate, vom împărtăși o orientare concisă.
2. Asigură-te că ești gata să porti codul în Cairo 1.0. Vezi secţiunea următoare pentru cele mai recente detalii.

#### Portarea contractului către Cairo 1.0

Cairo 1.0 este o mare promisiune pentru dezvoltatorii StarkNet. O îmbunătățire a actualului Cairo care va fi mai sigură, mai bună și mai simplă pentru scrierea contractelor, cu o sintaxă îmbunătățită, cu un sistem de tip complet (native uint256? şi multe altele. Dezvoltatorilor li se va cere să porteze contractele existente StarkNet cu sintaxa Cairo 1.0. Cu toate acestea, deoarece logica și structura de cod vor rămâne aceleași, se preconizează că acest efort va fi neglijabil în comparație cu efortul depus pentru a dezvolta aplicația în primul rând.

În acest context, merită menționat faptul că puteți alege să re-auditați versiunea Cairo 1.0 a aplicației dvs. Dacă aplicația dvs. a fost deja auditată în trecut, procesul de reaudit va fi semnificativ mai ieftin și mai simplu, deoarece auditorii sunt deja familiarizaţi cu logica dumneavoastră.

Vom publica toate documentatia in jurul Cairo 1.0, impreuna cu tutorialele si atelierele in timpul Q4 din 2022.

### Sunt utilizator StarkNet. Ce ar trebui să fac?

În calitate de utilizator, este posibil să trebuiască să întreprinzi câteva acţiuni în timpul Regenezei. Cel puțin, va trebui să actualizezi contul tău. Dacă nu faceți acest lucru în perioada de tranziție (lungă de câteva luni) va duce la pierderea contului. În funcție de calea de actualizare aleasă de dezvoltatorii aplicațiilor StarkNet pe care le folosiți, s-ar putea să fie nevoie să faceți pași suplimentari.

Le reamintim tuturor că StarkNet este încă în faza Alpha; iar utilizatorii trebuie să rămână atenţi la comunicarea StarkNet şi a aplicaţiilor pe care le folosesc. Este responsabilitatea ta să te asiguri că faci upgrade mai devreme la noul sistem. *A fi un adoptor timpuriu nu este întotdeauna ușor, și contăm pe tine să faci ceea ce faci!*

### La final

Cairo 1.0 se află chiar la colţ, oferind multe beneficii interesante şi îmbunătăţiri pentru StarkNet şi dezvoltatorii săi. Pentru a le culege, este nevoie de un eveniment Regeneză al rețelei. Din fericire, avem în vedere un design care face ca acest proces să fie minim perturbator - complet neîntrerupt pentru utilizatori, și destul de simplu pentru aplicații.

Vă îndemnăm să participați la[discuția privind comunitatea](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080)și să vă împărtășiți comentariile și preocupările, de asemenea să fii la curent cu privire la pașii pe care va trebui să îi iei ca dezvoltator de aplicații pe StarkNet.