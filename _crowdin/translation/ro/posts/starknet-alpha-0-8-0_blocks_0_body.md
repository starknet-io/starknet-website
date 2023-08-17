### TL;DR

* StarkNet Alpha 0.8.0 prezintă versiunea iniţială a mecanismului de taxare (opţional până la StarkNet Alpha 0.9.0.)
* Noi apeluri API pentru estimarea taxei de tranzacție pentru obținerea traseului tranzacției, permițând o mai bună vizibilitate și capacități de depanare
* Îmbunătățiri ale performanțelor la secvențialul StarkNet
* L1→L2 anularea mesajelor

### Introducere

Ca partajat în[foaia noastră de parcurs](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51), urmând ultima completare la funcționalitatea și funcțiile StarkNet, atenţia noastră se îndreaptă către îmbunătăţirea performanţei şi proiectarea protocolului (inclusiv onorarii, abstractizarea contului, descentralizare etc.). StarkNet Alpha 0.8.0 începe procesul de adăugare a taxelor de tranzacție și de îmbunătățire a performanței secvențatorului.

Foaia de parcurs pentru StarkNet include un mecanism de taxe, și progresând cu această versiune facem un pas important mai aproape de performanța completă a platformei.

Adăugarea mecanismului de taxe este o parte esențială a designului performanței StarkNet. Fără o taxă minimă, riscăm să ne confruntăm cu tranzacții infinite: ceea ce ar face imposibilă performanța sistemului, indiferent de optimizările secvențiale.

### Caracteristici

#### Suport comision

StarkNet Alpha suportă acum prima versiune a mecanismului de taxe. Acest mecanism este esențial chiar și în acest stadiu incipient, chiar și în ceea ce privește Testnet, din două motive principale:

1. Acesta permite dezvoltatorilor să înceapă optimizarea contractelor în conformitate cu modelul costului StarkNet.
2. Aceasta este o contrapartidă esențială pentru îmbunătățirea performanței sistemului, deoarece previne spamarea prin trimiterea a nenumărate tranzacții.

Această versiune introduce componentele necesare pentru ca dezvoltatorii să încorporeze plățile de taxe în instrumentele și aplicațiile lor. Dezvoltatorii pot estima acum taxa de tranzacție prin apelarea obiectivului \`estimate_fee\` și să facă plata taxei ca parte din execuția tranzacției.

Deoarece această caracteristică nu este compatibilă pentru înapoi, nu vom impune plata taxei în acest moment, ci doar din versiunea 0. .0, care urmează să fie eliberat în câteva săptămâni. Această tranziție treptată va permite utilizatorilor și dezvoltatorilor să se adapteze la noul model.

#### Structură Taxă pe 0.8.0

La 0.8.0, taxele vor fi colectate numai în funcție de complexitatea calculului, în timp ce StarkWare va subvenționa în continuare costurile de comunicare L1. Vom actualiza mecanismul de taxe pentru a include aceste costuri de operare L1 și de comunicare în următoarele săptămâni. Plata va fi colectată atomic cu execuţia tranzacţiei pentru StarkNet L2. Vezi[documentația privind taxele](https://starknet.io/documentation/fee-mechanism/)pentru o descriere detaliată.

Este important de remarcat că vom colabora îndeaproape cu comunitatea dezvoltatorilor pentru a ajusta și dezvolta mecanismul de taxare pe măsură ce StarkNet evoluează.

#### L2 Goerli ETH Faucet

Am lansat[Faucet L2 Goerli ETH](https://faucet.goerli.starknet.io/)pentru a permite utilizatorilor să plătească taxe pe Testnet. Acest Faucet trimite sume mici de L2 Goerli ETH la adresa contului tău de pe StarkNet Goerli, pe care le poți utiliza pentru plata taxei de tranzacție.

#### Trace API

Am adăugat abilitatea de a recupera urma de execuție a tranzacției la API-ul StarkNet. În cadrul traseului tranzacției, toate apelurile interne sunt vizibile, însoțite de informații precum resursele executate consumate, valoarea returnării, evenimentele emise și mesajele trimise. Acest nou apel simplifică înțelegerea comportamentului unui contract sau depanarea tranzacțiilor. În plus, instrumente precum[Voyager](https://voyager.online/)sau[StarkTx](https://starktx.info/)ar putea încorpora aceste date; furnizarea către utilizatori a unei analize mai detaliate, în special în ceea ce privește interacțiunea contractului de cont.

Pentru a obține urmărirea, poți folosi \`get_transaction_trace\` în CLI-ul StarkNets. Pentru a vedea un exemplu de utilizare a acestuia, verificați tutorialul[](https://www.cairo-lang.org/docs/hello_starknet/cli.html?#get-transaction-trace).

#### Anulare mesaj

O caracteristică suplimentară a acestei versiuni este capacitatea de a anula mesajele L1→L2. De ce este util? Imaginați-vă un scenariu în care un utilizator transferă un activ din L1 în L2. Fluxul începe cu trimiterea de către utilizator a activului către un pod StarkNet şi către generaţia corespunzătoare de mesaje L1→L2. Acum, imaginați-vă că consumul de mesaje L2 nu funcționează (acest lucru s-ar putea întâmpla din cauza unei erori în contractul Cairo al dApps). Acest lucru ar putea duce la pierderea pentru totdeauna de către utilizator a custodiei.

Pentru a reduce acest risc, permitem contractului care a inițiat mesajul L1→L2 să-l anuleze — după ce și-a declarat intenția de a face acest lucru și după ce a așteptat o perioadă de timp potrivită (a se vedea[documentația](https://starknet.io/l1-l2-messaging/#cancellation)).

### Îmbunătățiri ale performanței

Această versiune scade semnificativ timpul pe care un secvenţial trebuie să-l execute un flux de tranzacţii Cairo primite.

Acesta este doar primul pas! Următoarea noastră etapă importantă de performanță, care urmează să fie introdusă în curând (0,9.0), este execuția paralelă a secvențierului și se așteaptă mult mai multe optimizări pe drum.

### Ce se întâmplă acum?

Citiți documentația tehnică[aici](https://starknet.io/documentation/fee-mechanism/).

Accesați[starknet.io](https://starknet.io/), pentru toate informațiile StarkNet, documentație, tutoriale și actualizări.

Alătură-te[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)pentru a sprijini dezvoltatorii, anunțuri despre ecosistem și a deveni o parte a comunității.

Vizitați[StarkNet Shamans](https://community.starknet.io/)pentru a rămâne actualizat și a participa la toate discuțiile de cercetare StarkNet.