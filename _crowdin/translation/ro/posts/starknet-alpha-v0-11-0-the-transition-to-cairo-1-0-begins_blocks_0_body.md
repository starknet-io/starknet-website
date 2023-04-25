## TL;DR

* Starknet alpha v0.11.0 este afară şi live pe Testnet
* Acum puteţi implementa şi interacţiona cu Cairo 1.0 contracte pe Starknet!
* Calculul pe Starknet este de 5x mai ieftin!
* Pentru prima dată, upgradarea Mainnet la Starknet alpha v0.11.0 va fi supusă unui vot de guvernare
* Acesta marchează începutul perioadei de tranziție înainte de[Regenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)
* Deploying Cairo 1. contractele pentru Mainnet vor fi activate numai după câteva săptămâni de funcționare pe Testnet, odată ce se va asigura buna funcționare a noului sistem.

## Introducere

Suntem încântați să anunțăm că mult-așteptatul Starknet alfa v0.11.0 este în direct pe Testnet! De ce este acesta un pas mare pentru Starknet? În Starknet v0.11.0, poți declara, implementa și executa[Cairo 1.0](https://medium.com/starkware/cairo-1-0-is-here-7e1ac8377038)contracte inteligente. De asemenea, introducem un nou apel de sistem care permite o tranziție lină a contractelor existente către o punere în aplicare de la Cairo 1.0.

Cairo 1.0 îmbunătăţeşte Starknet în două aspecte diferite. În primul rând, îmbunătățește experiența de dezvoltare prin oferirea unui limbaj de programare mai bogat, care introduce pentru Cairo, printre altele tipurile/genericele/caracterele/tratarea erorilor. În al doilea rând, Cairo 1.0 joacă un rol cheie în călătoria de descentralizare a lui Starknet: contractele Cairo 1.0 trimise în Starknet alpha v0.11.0 se compilează cu Sierra. Sierra garantează că fiecare execuţie a contractului este dovedită, o proprietate crucială într-un Starknet descentralizat.

O altă îmbunătăţire importantă care apare în această versiune este o reducere de 5x a costurilor pentru calcul. Acest lucru va face ca Starknet să fie şi mai prietenos cu aplicaţiile care folosesc intensiv calculul. Mai multe detalii mai jos.

## Pregătirea pentru regeneză

Starknet alfa v0.11.0 marchează începutul perioadei de tranziţie, ceea ce va permite prepararea înaintea Regenezei Starknet. Planul Regenesis al lui Starknet a fost publicat[acum câteva luni și se concentrează pe tranziția de la un sistem bazat pe Cairo 0 la un sistem bazat pe](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)1.0.

În perioada de tranziție, contractele existente de la Cairo 0 (dacă sunt modernizabile) au posibilitatea de a-și păstra adresa și depozitarea; și să treacă în mod continuu la Cairo 1. (vezi punctul următor).

Ca utilizator Starknet, acest lucru înseamnă că trebuie să vă actualizați portofelul doar după ce noul Cairo 1. implementarea contului tău a fost lansată (o vei putea face oricând până la Regeneză). Nu este așteptat niciun timp, toate aplicațiile dapps din sistem vor continua să funcționeze ca de obicei.

După Regeneză, Starknet va înceta să sprijine restul contractelor Cairo 0 din sistem. Acest lucru va fi bine comunicat în avans, iar dezvoltatorilor li se va acorda timp suficient pentru a migra contractele lor. Se preconizează că perioada de tranziție va dura câteva luni, iar dezvoltatorii de aplicații pot deja să migreze implementarea lor la Cairo 1.0. Regeneza va avea loc la sfârşitul perioadei de tranziţie.

## Migrare lentă la Cairo 1.0

Odată cu tranziția la Cairo 1.0, contractele existente de la Cairo 0 sunt învechite și nu vor mai beneficia de sprijin în urma Regenezei. pentru a permite contractelor modernizabile de la Cairo 0 să continue să funcționeze, chiar și după Regeneză; și menține starea construită până atunci, am adăugat un nou apel de sistem - ['replace_class'](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#replace_class_syscall). Contractele modernizabile nu au nicio problemă cu actualizarea la Cairo 1. punerea în aplicare, dar proxy-ul subiacent (contractul care deține statul propriu-zis) va rămâne blocat în punerea în aplicare a proiectului Cairo 0. syscall \`replace_class\` rezolvă această problemă permițând contractului proxy să înlocuiască clasa sa de bază, i. . să păstreze aceeași adresă și aceeași stocare, dar să înlocuiască punerea în aplicare.

## Calculul este acum de 5 ori mai ieftin!

Astăzi, taxele de tranzacție Starknet au două componente majore: date de calcul și date în lanț. Elementul de calcul al taxei de tranzacție Starknet este determinat de costul marginal de verificare a dovezii sale pe L1 (a se vedea[documentele](https://docs.starknet.io/documentation/architecture_and_concepts/Fees/fee-mechanism/)pentru mai multe detalii).

Inițial, pașii noștri de 200 m Cairo într-o dovadă care necesită 5 m gaz pentru verificare au dus la o estimare naivă de 0,05 gaz per Cairo. De atunci, ne-am mutat la[dovezile recursive](https://medium.com/starkware/recursive-starks-78f8dd401025)care permit o reducere semnificativă a costurilor de verificare L1 (doar rădăcina unui copac de recurență ajunge la L1). Acum este momentul să ne actualizăm estimările inițiale în consecință — prețul fiecărei Cairo-etape pentru L2 va fi redus cu 5x; și acum va costa 0. 1 gaz.

Această reducere a costurilor este semnificativă pentru aplicațiile cu utilizare intensivă pe calcul, de exemplu contractele de cont cu semnături nenative. Tranzacțiile simple vor beneficia de o reducere minoră a costurilor (~ 5%). În versiunile viitoare, vom gestiona cea de-a doua componentă: costurile legate de datele în lanț. Odată ce alternativele la datele în lanț vor fi introduse pentru Starknet (aka Volition), reducerea costurilor va fi resimțită în toate domeniile.

## Primul vot pentru guvernarea Starknet

Prima fază a guvernării Starknet a lansat (mai multe detalii[aici](https://medium.com/starknet-foundation/starknets-governance-first-phase-4614c7566f40)). Membrii comunităţii sunt acum capabili să participe la modelarea Starknet printr-un canal suplimentar, şi anume votarea modificărilor protocolului.

Primele faze ale guvernării Starknet se vor concentra pe actualizările protocolului Starknet. Fiecare actualizare a versiunii Starknet va fi implementată mai întâi pe Testnet; Alegătorii vor avea la dispoziţie o perioadă de 6 zile pentru a examina şi testa versiunea actualizată în timp ce se desfăşoară pe Goerli. În acest timp, va fi deschisă o propunere de imagine Snapshot şi comunitatea poate vota dacă să aprobe noua versiune pentru desfăşurarea Mainnet.

În cazul în care propunerea câștigă o majoritate de voturi pentru „DA” în perioada de vot de 6 zile, propunerea și Starknet Mainnet vor fi actualizate în consecință.

Starknet alpha v0.11.0 este prima versiune Starknet, care este gata pentru vot. Votul Starknet alpha v0.11.0 va fi deschis timp de şase zile începând cu desfăşurarea testnet.

Legături relevante:

* [Spațiu de imagine](https://snapshot.org/#/starknet.eth/proposal/0x00889bc468509610e516e8602f00b21ca8c32466dd4f0140eca38becb7f40bef)
* [Pagina de descoperire a delegării](https://delegate.starknet.io/)
* Tema de discuţie Starknet alpha v0.11.0 pe[forumul comunitar](https://community.starknet.io/t/proposal-starknet-alpha-v0-11-0/50334)

## Cairo 1.0 şi Sierra

Sierra (**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**) este o reprezentare intermediară care se compilează la asamblarea Cairo (CASM). Pre Starknet alpha v0.11.0, un dezvoltator ar compila Cairo 0 în CASM şi ar trimite rezultatul către secvenţierul Starknet. Cu Cairo 1.0, dezvoltatorii își compilează codul pentru Sierra, și trimit această reprezentare intermediară către secvențier. Ulterior, secvențialul îl va compila la CASM. Sierra are garanția că va compila „safe CASM”, adică un subset de CASM care nu poate eșua, ceea ce va face ca fiecare execuție să fie dovedită. Acest lucru garantează că secvențialul va putea percepe taxe chiar și pentru tranzacțiile inversate, protejând de DOS. Pentru mai multe informații, a se vedea[documentele](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/).

![](https://miro.medium.com/v2/resize:fit:1400/0*KsAwaJTIsOuCsJIe)

Starknet alpha 0.11.0 va folosi[Versiunea Cairo 1.0-alpha.6](https://github.com/starkware-libs/cairo/releases/tag/v1.0.0-alpha.6). Această versiune este aproape de[paritatea caracteristicilor](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)cu Cairo 0, cu toate apelurile de sistem Starknet deja prezente.

Reţineţi că secvenţialul Starknet foloseşte o versiune fixă de compilare, care înseamnă că îmbunătăţirile lingvistice nu pot fi disponibile imediat în Starknet, şi vor fi disponibile numai după o actualizare a versiunii Starknet. Mai precis, îmbunătățirile care afectează Cairo 1. → Compilarea Sierra poate avea efect imediat, modificări la compilatorul Sierra → CASM (vezi[documentele](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/)pentru mai multe detalii) va trebui să aștepte pentru o actualizare Starknet.

## Ce este Else nouă?

### Noul tip de tranzacție — Declare v2

Adăugăm[un nou tip de tranzacție](https://docs.starknet.io/documentation/architecture_and_concepts/Blocks/transactions/#declare_v2_cairo_1_0)pentru declararea claselor Cairo 1.0.

Această nouă versiune de tranzacţie \`declare\` este similară cu \`declare\` existentă, cu două distincţii importante:

* Obiectul clasei trimis acum reprezintă Sierra mai degrabă decât CASM, adică semantica clasei este definită de reprezentarea Sierra.
* Utilizatorul semnează și hash-ul din clasa compilată. Acesta este un pas crucial până când compilarea Sierra→CASM va fi dovedită ca parte a sistemului de operare Starknet.

Pentru mai multe detalii, a se vedea[documentele](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#what_to_expect).

Din punctul de vedere al dezvoltatorului, experiența rămâne aceeași. După ce ați scris codul Cairo 1.0, puteți utiliza CLI pentru a declara clasa.

**Țineți cont că, inițial, tranzacțiile \`declare v2\` nu vor fi acceptate pe Starknet Mainnet. După o perioadă de experimentare pe Testnet, noul tip de tranzacție va fi activat pe Mainnet, iar clasele Cairo 1.0 vor deveni disponibile.**

### Poseidon este aici

[Poseidon](https://www.poseidon-hash.info/)este o familie de funcții hash concepute pentru a avea circuite algebrice foarte eficiente. Ca atare, acestea ar putea fi foarte utile în sisteme de testare ZK, precum STARKs și SNARKs. Începând cu Starknet alpha v0.11.0, dezvoltatorii vor putea folosi Poseidon. În plus, unele dintre calculele hash care fac parte din protocolul Starknet vor trece la Poseidon (în mod specific, clasa hash, compilate pe hash-uri de clasă și părți din angajamentul statului vor folosi Poseidon, vezi[documentele](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#poseidon_hash)pentru mai multe detalii). În viitor, mai multe componente interne vor trece la utilizarea funcţiei de hash Poseidon.

Versiunea exactă și parametrii utilizați în Starknet pot fi găsiți[aici](https://docs.starknet.io/documentation/architecture_and_concepts/Hashing/hash-functions/#poseidon_hash).

### Modificări diverse

La fel ca versiunile anterioare Starknet, o actualizare are implicații și pentru API-urile noastre și alte componente de nivel scăzut. Mai jos le enumerăm și adresăm schimbările specifice care au fost făcute:

* v0 invocă/declarare tranzacții nu mai sunt acceptate
* Mesajele L1→L2 necesită[taxe](https://docs.starknet.io/documentation/architecture_and_concepts/L1-L2_Communication/messaging-mechanism/#l1-l2_message_fees). Adică, mesajele trimise cu taxă zero nu vor fi procesate de secvenţialul Starknet
* Formatul de date în lanț este[modificat](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/#on_chain_data_post_v0_11_0)
* [Modificări API](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#api_changes)(nu toate modificările sunt listate aici, vă rugăm să consultați documentele pentru o listă exhaustivă) :
* a adăugat un nou final \`get_compiled_class_by_class_hash\`
* \`get_class_by_hash\` returnează ambele clase Cairo 0 / Cairo 1.0 (în funcție de hash-ul solicitat)
* \`get_state_update\` are o nouă secțiune pentru clasele înlocuite, iar declarațiile sunt împărțite între clasele Cairo 0 și Cairo 1.
* \`estimate_fee\` și \`simulate_tx\` pot sări peste validare
* O[nouă](https://github.com/starkware-libs/starknet-specs/releases/tag/v0.3.0-rc1)Versiune Starknet JSON-RPC

## Ce urmează?

Acum că toată infrastructura asociată cu Cairo 1.0 a fost implementată, vă puteți aștepta:

* Îmbunătățiri suplimentare ale limbajului la Cairo 1.0
* Îmbunătățiri ale performanței:[așa cum am promis](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de), continuăm să avansăm către creșterea semnificativă a TPS. Următorul pas din foaia de parcurs este trecerea la[secvenţialul Rust](https://github.com/starkware-libs/blockifier), care este dezvoltată în mod deschis în cadrul Apache 2. Licență. Noul secvenţial va folosi modulul complet[rust CairoVM](https://github.com/lambdaclass/cairo-rs)and the[Papyrus](https://github.com/starkware-libs/papyrus), formand the Performance Trio.
* Offchain[DA](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/)! În această versiune, am gestionat componenta computațională a costului tranzacției. În versiunile viitoare, ne vom ocupa de costurile legate de datele în lanț, care sunt în prezent costul dominant al tranzacțiilor medii.

![](/assets/starknet-alpha-v0.11.0-diagram.png)