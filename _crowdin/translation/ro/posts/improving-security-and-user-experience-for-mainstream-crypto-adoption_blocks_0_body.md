Inovarea tehnologică în blockchain a înflorit în ultimii câțiva ani — STARKs, SNARKs, EIP-1559, Ethereum Merge — toate sunt realizări tehnologice enorme. Cu toate acestea, design-ul UX şi UI nu a reuşit să ţină pasul. Oamenii încă rămân blocaţi pe nişte fraze de sămânţă, iar intrarea în DeFi fără un intermediar centralizat este încă prea intimidantă pentru mulţi . Pentru a îmbarca următorul miliard de utilizatori în Web3, îmbunătăţirea experienţei de înregistrare a utilizatorului este esenţială.

După cum a demonstrat FTX (și Gemini, Celsius și Muntele Gox), păstrarea reținerii asupra activelor unei persoane este extrem de importantă. Cu toate acestea, până de curând, portofelele autocolante au fost neplăcute și derutante pentru utilizatorul obișnuit. Majoritatea oamenilor uită lunar de parolele Web2; cum se aşteaptă utilizatorii să îşi păstreze fraza de sămânţă şi cheile private sigure pentru eternitate?

Pur şi simplu, este un coşmar de securitate. După cum am văzut de nenumărate ori, o mișcare greșită, indiferent dacă a fost inițiată de actori răi sau neglijență, poate duce la pierderea a milioane de dolari.

Fiind primul punct de contact pentru noii utilizatori cripto, portofelele Ethereum trebuie să fie ușor de utilizat, sigur și personalizabile pentru a se potrivi nevoilor fiecărui utilizator. Acest lucru necesită ca dezvoltatorii să integreze simplitatea produselor financiare Web2 cu caracteristicile Web3.

Aceasta este exact ceea ce realizează abstractizarea contului.

abstractizarea contului îmbunătățește siguranța și securitatea produselor portofelului cu auto-custodie, eliminând încrederea utilizatorilor în cheia privată și făcând portofelele mai programabile. Cu ajutorul UX îmbunătățit, portofelele non-custodiene pot în cele din urmă să se ridice la milioane de cripto-utilizatori obișnuiți.

Dar pentru a înțelege pe deplin impactul abstractizării conturilor, trebuie să ne actualizăm modul în care funcționează conturile Ethereum.

### Elementele de bază ale conturilor Ethereum

Există două tipuri de conturi Ethereum:

1. Conturi deținute extern (EOA)
2. Conturile contractuale (CA)

Hai să defalcăm fiecare câte puțin mai mult.

### Conturi externe

Conturile externe cum ar fi MetaMask și Coinbase Wallet, sunt tipul de cont tipic pentru utilizatorii Ethereum. Fiecare EOA constă dintr-o cheie publică și privată, numită tastatură.

Toate tranzacțiile sunt autorizate și semnate cu chei private. Odată ce o tranzacție este semnată, EVM verifică dacă semnătura este valabilă folosind adresa contului EOA. Logica greu codificată din EVM înseamnă că contul (obiectul care ține tokenurile) și cheia privată (semnatarul) sunt cuplate ca unul.

Pierderea cheii tale private înseamnă pierderea fondurilor, sau chiar controlul contului tău pentru totdeauna.

### Conturi contractuale

Între timp, conturile contractuale, sinonime cu captarea conturilor, sunt contracte inteligente implementate pe Ethereum blockchain. Aceste contracte sunt controlate prin logica codurilor și nu necesită chei private. Spre deosebire de EOA, conturile contractuale nu pot iniția tranzacții. În schimb, tranzacțiile lor sunt declanșate de instrucțiuni din partea EOA.

### De ce captarea contului contează

abstractizarea contului implică captarea logicii de autorizare greu codificată în afara EOA, transformarea fiecăruia într-un contract inteligent programabil, care să poată fi adaptat nevoilor oricărei persoane.

După cum s-a explicat de către cofondatorul şi Responsabilul şef cu ştiinţa Argent, Julien Niset, într-un eveniment recent[Stark @ Home](https://www.crowdcast.io/e/7olimxqv), această logică de autorizare flexibilă oferă dezvoltatorilor libertatea de a juca cu caracteristici ale contului, cum ar fi…

**Semnături hardware :**Folosind o enclavă securizată de iPhone sau Android pentru a transforma orice smartphone într-un portofel fizic. De acolo, utilizatorii pot verifica tranzacțiile folosind date biometrice ca o amprentă sau un ID cu față Apple. Deja am început să vedem portofele cu auto-custodie, cum ar fi Braavos[lansați această funcție.](https://medium.com/@braavos_starknet_wallet/hardware-signer-the-last-innovation-for-wallet-crypto-everyday-users-7e1974f93944)

**Paymasters:**Permite utilizatorilor să plătească taxe pentru gaze în orice token, sau chiar să aibă un mecanism de plată pentru tranzacții conceput de o terță parte.

**Recuperare socială:**În cazul în care o cheie privată este pierdută sau compromisă, utilizatorii pot autoriza o nouă cheie ca proprietar legitim al portofelului. Aceasta poate include o varietate de metode de recuperare prin contacte de încredere, portofele hardware sau servicii de terță parte. Ideea este de a face ca recuperarea accesului la contul tău să fie la fel de ușoară ca recuperarea parolei contului tău bancar printr-un e-mail.

**Autentificare multifactori:**Similar practicilor obișnuite Web2 2FA utilizatorii pot configura două (sau mai multe) metode de autentificare pentru portofelele lor cripto, în cazul în care o tranzacție este semnată numai atunci când un utilizator confirmă aprobarea printr-o a doua opțiune, cum ar fi e-mail sau SMS. Utilizatorii pot de asemenea seta limite zilnice de transfer sau liste de adrese de cont la care portofelul este blocat automat să interacţioneze.

**Rezistență cantitativă și semnături eficiente de gaz:**Sistemul de semnătură curent Ethereum, ECDSA este extensiv din punct de vedere computerizat (citire: taxe mai mari pentru gaz) și poate fi rupt de calculatoarele cuantice. Prin abstractizarea semnăturilor, diferite contracte de cont utilizează sisteme de semnături mai eficiente și mai sigure din punct de vedere cantitativ. StarkNet îşi foloseşte propria curbă STARK prietenoasă.

Nu numai că aceste caracteristici oferă utilizatorilor mai multă securitate şi mai multă flexibilitate, dar mai important, au ca rezultat o**mai bună**experienţă de utilizare.

Listate de Vitalik Buterin ca un „vis de lungă durată” pentru comunitatea dezvoltatorilor Ethereum, inovaţiile în jurul captării conturilor, în principal EIP-2938 şi EIP-3074, se învârte din 2020. Cu toate acestea, amândouă au necesitat compromisuri în ceea ce priveşte securitatea şi implementarea. [EIP-4337](https://github.com/ethereum/EIPs/blob/3fd65b1a782912bfc18cb975c62c55f733c7c96e/EIPS/eip-4337.md), cea mai promițătoare evoluție de până acum, propune o versiune de captare a contului fără a necesita modificări ale protocolului Ethereum.

### **Capturarea contului şi Starknet**

Spre deosebire de Bitcoin și Ethereum, care își remodelează protocoalele curente pentru a sprijini captarea contului,[StarkNet](https://starkware.co/starknet/)a implementat captarea contului din prima zi. Atunci când este cuplat cu scalabilitatea și capacitățile dovezilor STARK, potențialul de inovare al portofelului este nelimitat. Acesta este motivul pentru care următoarea generație de portofele cu privare de sine cum ar fi Argent și Braavos, sunt construite în prezent pe rețeaua noastră.

Abordarea Starknet este similară EIP-4337,[recunoscând că](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781)complet abstractizarea contului ar duce la confuzii în UX și[ar putea deschide ușa](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4337.md#rationale)atacurilor asupra secvențelor. Mai degrabă, aceasta urmărește să obțină atât captarea semnăturilor, cât și captarea plăților, prin mutualizarea unora dintre cerințele impuse de infrastructura din afara lanțului și a celei din afara acestuia.

Și în timp ce mai sunt multe de făcut, captarea contului câștigă tracțiune dincolo de un cerc mic de cripto nati. În decembrie,[Visa a propus ideea](https://www.coindesk.com/tech/2023/01/11/ethereum-upgrade-could-make-it-harder-to-lose-all-your-crypto/)de utilizare a abstractizării contului pentru a configura plăţi recurente automate pe StarkNet. Utilizând un cont delegabil, utilizatorii pot acorda permisiunea de a iniția o plată către un contract inteligent aprobat în prealabil. De aici, contractul inteligent va fi programat pentru a deduce o sumă fixă de plată într-o anumită zi, pe o anumită durată de timp. În timp ce Visa nu şi-a dezvăluit încă planurile pentru propriile servicii, doar interesul vorbeşte foarte mult, și poate prezice o lume în care platformele de abonament pentru tehnologii mari precum Netflix și Spotify ar putea îmbrățișa adoptarea cripto-adopției.

În ceea ce priveşte ceea ce se va întâmpla în viitor, numai timpul va spune. Dar un lucru este sigur. Făcând portofelele mai ușor și mai sigure de folosit, abstractizarea contului va servi ca un catalizator puternic pentru auto-custodia portofelelor blockchain pentru a dimensiona la milioane de cripto-utilizatori tradiționali. Vom continua să construim între timp.