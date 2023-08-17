### TL;DR

* *StarkNet Alpha lansează pe Mainnet Ethereum până în noiembrie*
* Timpul de a construi pe StarkNet este acum

### Un scurt istoric

Am anuntat viziunea noastra pentru[StarkNet](https://starkware.co/product/starknet/)la inceputul anului: pentru a aduce o scalabilitate masiva pentru Ethereum in timp ce pastram securitatea L1, interacțiuni nepermise și descentralizare.\
Am lansat**[StarkNet Alpha](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)**pe un testnet public în iunie. Această versiune este susţinută de contracte generale de calcul complet nepermise. De când l-am actualizat de două ori: prima dată la**Alpha 1**— oferind[L1<>L2 mesagerie și date în lanț](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), și apoi la**Alpha 2**— sprijinind[compozabilitatea](https://medium.com/starkware/starknet-alpha-2-4aa116f0ecfc).

StarkNet Alpha 2 suportă acum contracte compozabile inteligente de calcul general într-un stat asemănător Ethereum, cu capacitatea contractelor L1 și L2 de a interacționa între ele. Citește mai multe[aici](https://www.cairo-lang.org/docs/hello_starknet/index.html).

### Ce este StarkNet Alpha pe Mainnet?

StarkNet Alpha on Mainnet va avea caracteristici similare cu cele disponibile în prezent pe plasa publică Goerli.

#### **Ce aştepta**

Pentru că StarkNet este încă în curs de dezvoltare, vrem să introducem capacităţi într-un mod pas cu pas şi să ne asigurăm că aşteptările dezvoltatorilor sunt îndeplinite la fiecare pas. Două aspecte deosebit de importante pe care am dori să le subliniem sunt:

* **Implementarea inteligentă a contractului acceptată**: Vom urmări manualul de redare sensibil introdus de colegii noștri Rollup optimiști: începe cu*permisiuni*implementarea contractului. Protocolul care specifică modul de solicitare a includerii contractului dvs. inteligent în această listă albă inițială va fi publicat în săptămânile următoare.
* **Nici o garanție pentru compatibilitatea înapoiere**: ne așteptăm ca viitoarea tranziție de la StarkNet Alpha la StarkNet Beta să includă regeneza statului. Rețeaua va începe din blocul 0, iar aplicațiile vor trebui să își redistribuie contractele. În plus, dezvoltatorii și utilizatorii ar trebui să ia notă de faptul că este posibil ca StarkNet Beta să nu fie invers compatibil cu StarkNet Alpha, . dezvoltatorii ar putea fi nevoiți să își modifice contractele. Evident, vom încerca să permitem o tranziție ușoară pentru cereri, cu modificările minime necesare.

#### Caracteristici adiționale pe termen scurt

Ca parte a tranziţiei StarkNet Alpha de la testnet la Mainnet, vom face:

1. Adăugați constructori la contracte.
2. Să îmbunătățească cadrul de testare.
3. Pentru blocuri și tranzacții, treceți de la utilizarea unui ID la folosirea unui hash.

Plănuim să continuăm implementarea noilor caracteristici la un nivel regulat, aşa cum am făcut şi în cazul plasei publice de testare. Pe termen scurt, avem în vedere următoarele modernizări:

1. Contractele de cont și contractele token - deschizând calea pentru ca aplicațiile DeFi să interacționeze cu StarkNet modul în care sunt familiarizate.
2. Îmbunătățirea funcționalității contractelor – sprijinirea actualizării și a evenimentelor contractelor.
3. Perturbare: compilatorul Solidity-to-Cairo dezvoltat de Nethermind va permite o tranziție lină de la contractele inteligente de compatibilitate la contractele inteligente StarkNet.
4. Semnături Ethereum Signatures: sprijinul nativ pentru ECDSA prin secp256k1 va permite o integrare mai ușoară cu portofelele existente.
5. Nod Complet StarkNet: un Nod complet va permite utilizatorilor să participe în rețea cu cerințe hardware la egalitate cu cele ale unui Nod Complet Ethereum.

#### Mecanism de taxe

Mecanismul de taxare va fi activat de îndată ce contractele de cont și contractele token vor fi adăugate la StarkNet Alpha.

Toate tranzacțiile prezentate la StarkNet vor suporta o taxă menită să acopere costurile L1 și off-chain (off-chain). Taxa va fi percepută iniţial în ETH. Costul unei singure tranzacții va scădea pe măsură ce StarkNet va crește amploarea acesteia (cum este cazul tuturor sistemelor existente bazate pe STARK). Atunci când elaborăm mecanismele inițiale de comisioane, suntem în favoarea simplității în raport cu stabilirea cu precizie a tranzacțiilor în funcție de resursele pe care le consumă. Se așteaptă ca acest mecanism să fie perfecționat și îmbunătățit în timp.

având în vedere transformarea StarkNet într-o reţea durabilă şi stimularea operatorilor şi a dezvoltatorilor săi; o parte din veniturile colectate din taxe vor fi distribuite dezvoltatorilor de aplicații și dezvoltatorilor de bază StarkNet.

#### Securitate

Modelul de securitate al StarkNet Alpha, pe Mainnet, va urma modelul actual pe plasa de testare:

* Fiecare tranziție a statului este susținută de o dovadă a unui STARK, prin urmare este garantat că este valabilă.
* Toate datele de stare vor fi publicate în lanț astfel încât starea va fi complet constructibilă din L1.
* Va exista un singur secvenţial.
* Rețeaua va putea fi modernizată fără nicio întârziere.

### Ecosistemul StarkNet este în creștere

Deschiderea StarkNet către lume a atras un val masiv de dezvoltatori interesaţi să înveţe Cairo şi să se dezvolte peste StarkNet. Ei au oferit feedback neprețuit și a fost o adevărată plăcere să vezi discuții vibrante pe StarkNet[Discord](https://discord.gg/uJ9HZTUk2Y).

În plus, StarkNet este în curs de dezvoltare nu numai de către echipa StarkWare, ci și de către unele dintre cele mai puternice echipe din ecosistemul blockchain:

* Nethermind lucrează la două proiecte:

1. **[Urzeală](https://github.com/NethermindEth/warp)**: o soliditate pentru compilatorul Cairo

2. **[Voyager](https://voyager.online/)**: un Explorator StarkNet

* Open Zeppelin lucrează la[Contractele standard](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)de implementare pentru StarkNet și, de asemenea, a început să lucreze la mediul dezvoltatorului:[Nile](https://github.com/martriay/nile).
* ShardLabs lucrează la[plugin-ul StarkNet HardHat](https://github.com/Shard-Labs/starknet-hardhat-plugin)și la un framework de testare mai bun.
* Echipa Erigon lucrează la extinderea Nodului Complet Ethereum pentru a sprijini StarkNet (codename: Fermion). Ei lucrează cu noi la proiectarea mecanismelor de bază ale StarkNet.
* Echilibrul lucrează la o implementare completă StarkNet în Rust,
* Servicii de audit Cairo: În lunile următoare, ABDK, ConsenSys Diligence, Peckshield și traseul Bits vor efectua audituri de la Cairo.
* Auditul StarkNet: am început cu auditarea fundaţiilor reţelei:

1. **CryptoExperts**va efectua un audit al verificatorului Cairo Solidity.
2. O dovadă formală**LEAN**a specificațiilor Cairo a fost recent finalizată și publicată ca[ziar](https://arxiv.org/abs/2109.14534)și un repo GitHub[](https://github.com/starkware-libs/formal-proofs).

Așteptați ca multe alte colaborări interesante să fie publicate în lunile următoare!

### STARK-uri se scalează azi

Ne apropiem de lansarea lui StarkNet Alpha cu încredere, după cum StarkEx, scara noastră de sine stătătoare SaaS, a demonstrat cum STARKs pot mări enorm aplicațiile Ethereum. Am lansat StarkEx pentru[dYdX](https://dydx.exchange/)(contracte perpetue),[DeversiFi](https://www.deversifi.com/)(tranzacţii la vedere şi plăţi), precum și pentru[Immutable](https://www.immutable.com/)și[Sorare](https://sorare.com/)(monetăria NFT și tranzacționarea). Am observat că costurile gazelor/tx au fost reduse cu 100X – 200X, la aproximativ 650 gaze/tx în Validium (date din afara lanțului) și 1 100 gaze/tx pentru un ZK-Rollup.

Până în prezent, StarkEx a decontat $80B în tranzacții și peste 27M și a eclipsat orice altă soluție L2 - și toate au fost combinate.

### Acționează acum

Nu a existat niciodată un moment mai bun pentru a te alătura ecosistemului StarkNet aflat în creștere prin construirea următoarei tale dApp sau a uneltelor de dezvoltator folositoare.

Vă invităm să:

1. Alătură-te[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y), unde te poți întâlni și angaja comunitatea StarkNet.
2. [Începe să înveți](https://www.cairo-lang.org/docs/hello_starknet/index.html)cum să scrii contracte inteligente StarkNet.
3. [DM pe noi](https://twitter.com/StarkWareLtd)- echipa noastră este dornică să vă ajute ideile și inițiativele să vină în viață.

**Actualizare (Nov. 2021):**StarkNet Alpha este live pe Ethereum Mainnet