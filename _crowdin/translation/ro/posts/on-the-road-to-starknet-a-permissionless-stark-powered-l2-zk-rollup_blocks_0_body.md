#### **TL;DR**

Construim StarkNet în patru etape:

* Pasul 0 — Fundații (finalizate*)
* Pasul I — Planete: Rollups Single App
* Pasul II – Constellations: Rollups Multi-App
* Etapa III – Universe: Un rulou descentralizat

Ne aşteptăm să avem pasul pe care l-am realizat în câteva luni, și să fim pe drumul cel bun până la pașii II & III până la sfârșitul anului 2021.

### **Introducere**

StarkWare construiește StarkNet, un sistem descentralizat, fără permisiuni și rezistent la cenzură, STARK-motorizat L2 ZK-Rollup, care suportă computația generală peste Ethereum. Este bazat pe limba Turing-complete[Cairo](https://www.cairo-lang.org/).

dezvoltatori; utilizatorii și nodurile StarkNet vor fi în măsură să facă tot ce se așteaptă de la un Rollup fără permisiuni, L2: Dezvoltatorii pot construi aplicații care implementează propria logică de afaceri și le pot implementa pe StarkNet. Utilizatorii pot trimite tranzacții la StarkNet pentru a fi executate, la fel cum interacționează cu Ethereum astăzi. Nodurile StarkNet și participanții vor fi stimulați în mod cripto-economic pentru a se asigura că rețeaua funcționează în mod eficient și echitabil.

Toate tranzacțiile StarkNet vor fi controlate periodic, iar valabilitatea lor va fi dovedită într-o dovadă STARK care va fi verificată pe Ethereum. Deoarece efortul de calcul necesar pentru verificarea dovezilor STARK este exponențial mic în comparație cu calculele dovedite, StarkNet va scala Ethereum în ordine de magnitudine.

Deoarece toate tranzițiile StarkNet vor fi dovedite prin STARK, doar cele valide vor fi acceptate pe Ethereum. Toate datele necesare pentru a reconstrui starea completă StarkNet vor fi publicate în lanț. Oricine va putea să ruleze propriul nod StarkNet. Aceste proprietăți vor face StarkNet la fel de sigur și fără permisiune ca Ethereum.

Suntem la ea de trei ani, și au atins deja câteva repere remarcabile în transformarea „Moon Math” în programe de producție și eficiente care rulează pe Ethereum. Modul în care StarkWare face lucrurile este să abordeze problemele dificile mai întâi, să construiască tehnologia de bază, şi apoi să le elibereze pentru a produce în mod fragmentat. Vom continua să construim în acest mod pe măsură ce îl vom finaliza pe StarkNet.

![](/assets/ontheroad_02.png)

**Pasul 0 — Fundații**

StarkWare a finalizat aşezarea unor fundaţii importante pentru StarkNet.

#### **Cairo**

[Cairo](https://twitter.com/StarkWareLtd/status/1300353049836376066?s=20)este limbajul nostru Turing-Complete la nivel înalt & pentru producerea dovezilor STARK pentru calcule generale. În locul „circuitelor” complexe meşteşugăreşti manuale sau AIR, un dezvoltator de aplicaţii poate utiliza Cairo pentru a defini orice logică de afaceri, dacă aceasta este dovedită în afara lanţului şi verificată în lanţ. Cairo este[în producție pe Mainnet](https://twitter.com/StarkWareLtd/status/1320695603492507648?s=20), și este, de asemenea,[disponibil pentru dezvoltatori](http://cairo-lang.org/).

În câteva săptămâni vom lansa pe un testnet public Ethereum versiunea Alpha a serviciului generic de Proof Service (GPS) al lui Cairo. *Acest lucru va permite dezvoltatorilor să își construiască propriile aplicații folosind Cairo, implementând orice logică de afaceri doresc. Ei vor trimite codul lor Cairo către GPS-ul care va fi dovedit și apoi verificat în lanț*

GPS permite o singură dovadă de integritate în execuţia totală a aplicaţiilor separate şi independente. oferind astfel acestor cereri posibilitatea de a amortiza cheltuielile cu gazul pe care le implică verificarea probelor.

Cairo și GPS stau la baza StarkNet — decizia noastră de a externaliza ambele către dezvoltatori le oferă acestora o expunere timpurie la această tehnologie. nu numai ca să înceapă să construiască deasupra lui, dar și ca să influențeze evoluția StarkNet.

Vom continua să dezvoltăm Cairo pe baza nevoilor și a feedback-ului comunității dezvoltatorilor. Vom îmbunătăți acest limbaj cu noi caracteristici, sintaxe și constructori care îi îmbunătățesc capacitatea de utilizare, şi vom continua să dezvoltăm şi să îmbunătăţim instrumentele Caro: compilatoare, urmărire/debugger şi integrarea IDE-urilor comune.

StarkNet îl va avea pe Cairo alergând sub hood.

#### **Stivă de software STARK**

StarkWare a dezvoltat cel mai puternic sistem rezistent din ecosistem, iar acesta este[live pe Mainnet](https://medium.com/starkware/starks-over-mainnet-b83e63db04c0)de luni întregi. StarkWare a dezvoltat, de asemenea,[ethSTARK](https://twitter.com/StarkWareLtd/status/1264911004099543040?s=20), proverbul nostru open-source, care este de 20X mai rapid decât orice alt prover; oferă atât[zero cunoștințe, cât și semnături post-quantum securizate](https://twitter.com/StarkWareLabs/status/1331930111227080709).

Măsurătorile noastre la scară**— nu sunt extrapolări, nici promisiuni — includ procesarea tranzacțiilor de 300 K într-o singură dovadă pe Mainnet, realizarea[a recordului mondial în Rollup throughput: 3K tps](https://twitter.com/StarkWareLtd/status/1287770381525422082?s=20). În acest proces, am obținut recordul mondial pentru eficiența gazului Rollup: 315 gaze/tx, comenzi de magnitudine mai ieftine decât tranzacțiile din Ethereum L1.

Această tehnologie va fi piatra de temelie a Stratului Profesional descentralizat StarkNet, și, prin urmare, vom pune la dispoziție noi profesioniști suplimentari și îmbunătățiți, ca parte a dezvoltării StarkNet's (mai multe despre asta într-o viitoare postare de blog).

#### **StarkEx**

StarkEx este motorul nostru de scalabilitate L2. Funcționează clienții[DeversiFi](https://twitter.com/deversifi)pe Mainnet din iunie 2020. Va alimenta atât[dYdX](https://twitter.com/dydxprotocol)cât și[ImmutableX](https://twitter.com/Immutable)începând în câteva săptămâni. StarkEx poate face față logicii complexe de tranzacționare (tranzacționare la vedere (spot), instrumente financiare derivate, INFT), precum și plăților.

Dezvoltarea lui StarkEx a fost modul nostru de a ne încurca lanţurile de instrumente şi de a le testa în funcţie de nevoile lumii reale. Nu este nimic asemănător cu cererile aplicațiilor reale și ale utilizatorilor în direct pentru a ajuta instrumentele să se maturizeze și să evolueze. De asemenea, aceasta ne ajută să înțelegem elementele care trebuie să fie abordate pentru a servi mai bine ecosistemului – de exemplu, integrarea cu portofelele și cu exploratorii de blocuri.

StarkEx este un exemplu live al abilității de a scala aplicațiile folosind un ZK-Rollup cu baza STARK, şi este prima cerere de producţie pe Mainnet scrisă în Cairo. Ca atare, va fi, de asemenea, una dintre aplicațiile care rulează pe StarkNet.

![](/assets/ontheroad_03.png)

### **Drumul urmează**

#### **Pasul I — Planete: Rollups Single App**

Acest pas va permite dezvoltatorilor să construiască și să implementeze propriile lor aplicații scalabile pe StarkNet.

În acest moment, fiecare instanță StarkNet va putea rula o singură cerere. Diferite instanțe pot rula aplicații diferite.\
Cadrul StarkNet va include următoarele:

* Mecanisme necesare pentru a genera dovezi STARK pentru logica arbitrară Cairo și apoi pentru a le trimite și verifica pe Ethereum.
* Interacţiuni cu L1 Ethereum: depozite şi retrageri de jetoane L1, publicarea datelor în lanţ, mecanisme de evacuare care protejează utilizatorii de StarkNet de operatorii răuvoitori de la StarkNet etc.
* Gestionarea soldurilor utilizatorilor L2, precum și a stocării și memoriei aplicației.

Dezvoltatorii vor putea să se concentreze exclusiv asupra construirii logicii antreprenoriale a aplicaţiei, şi apoi să se mute la producţie: lansaţi-l şi rulaţi-l la scară pe StarkNet.

Ceea ce ne permite să construim un sistem general de calcul scalabil ZK-Rollup este combinaţia:

* Cairo, care este un limbaj de programare complet, cu scop general,
* Stack-ul nostru puternic STARK (prover and verifier), care permite reunirea calculelor enorme într-o singură dovadă

#### **Pasul II – Constellations: Rollups Multi-App**

Următorul pas va sprijini mai multe aplicații care rulează în aceeași instanță StarkNet și care accesează același stat L2 global. Acest lucru va permite interoperabilitatea între diferite aplicații, precum și reducerea costurilor gazului datorită îmbunătățirii economiilor de scară.

Cairo, puternicul stivă STARK și GPS-ul amplifică avantajul competitiv al StarkNet-ului în sprijinirea unui Rollup multi-app.

În acest stadiu, StarkNet va fi un cadru complet funcțional pentru rularea*mai multor aplicații*cu orice logică arbitrară de afaceri deasupra Ethereum, cu fiecare instanță administrată de un singur operator.

Un operator poate acum să se îndrepte către un nod StarkNet, iar dezvoltatorii de aplicații își pot desfășura contractele pe baza acestuia. Din perspectiva utilizatorilor, StarkNet arată acum şi se simte ca Ethereum, la o scară mai mare.

#### **Etapa III – Universe: Descentralizat**

Ultimul pas în evoluţia lui StarkNet este descentralizarea operaţiunii sale.

Intriguing R&D Întrebări pe care le abordăm acum care afectează această etapă includ (i) utilizarea ZK-Rollups pentru a îmbunătăți mecanismele de atingere a consensului, și (ii) proiectarea de mecanisme cripto-economice pentru stimularea contribuitorilor și operatorilor descentralizați de la StarkNet (secvențiere de tranzacții, provers, etc. să funcţioneze eficient, corect şi sigur.

### **Concluzii**

StarkWare construiește StarkNet, un STARK-motorizat L2 ZK-Rollup prin Ethereum, descentralizat, care suportă computația generală bazată pe limba Cairo.

StarkNet va permite extinderea aplicaţiilor fără compromiterea securităţii, utilizatorii să plătească taxe de tranzacție rezonabile și întregul ecosistem să se dezvolte substanțial și să își îndeplinească promisiunile.

Invităm comunitatea dezvoltatorilor[să ni se alăture](https://twitter.com/StarkWareLtd)în această călătorie.

**Actualizare (Nov. 2021):**StarkNet Alpha este live pe Ethereum Mainnet