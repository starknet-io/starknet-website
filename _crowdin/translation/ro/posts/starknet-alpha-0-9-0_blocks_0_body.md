### TL;DR

* **Taxele sunt acum obligatorii pentru Testnet, în curând pe Mainnet**
* Modelul de fabrică al contractului este acum posibil!
* StarkNet introduce clase de contracte
* Apelul de delegare este înlocuit cu apelul din bibliotecă

### Introducere

Suntem bucuroşi să-l introducem pe StarkNet Alpha 0.9.0! Aceasta este o versiune importantă în care StarkNet face paşi semnificativi către maturitate, cu adăugiri substanţiale atât la funcţionalitate, cât şi la conceperea protocolului.

**Taxele sunt obligatorii**(în prezent numai pe Testnet, până la versiunea 0.9. va fi în viață pe Mainnet) – orice L2 prosper trebuie să aibă un sistem propriu de taxe. După introducerea taxelor ca o caracteristică opțională în versiunea 0.8. ne simțim acum încrezători să le includem ca o componentă esențială a protocolului și să le facem obligatorii. Mai multe detalii mai jos.

O altă modificare semnificativă la nivelul protocolului este introducerea claselor de contracte și a separării clasei/instanței. Acest lucru permite o utilizare mai simplă a funcționalității \`delegate_call\` și a implementărilor din contractele existente, permițând modelul de fabrică de pe StarkNet.

### Clase de contracte

Ca sursă de inspirație din programarea orientată spre obiecte, facem distincția între codul contractului și punerea sa în aplicare. Facem acest lucru prin separarea contractelor în clase şi instanţe.

O**clasă contractuală**este definiția contractului: Cairo bytecode, indicați informații, numele punctelor de intrare și tot ceea ce este necesar pentru a defini fără echivoc semanticii sale. Fiecare clasă este identificată prin hash (analog cu numele clasei din limbile OOP).

Un**caz contractual**, sau pur și simplu un contract, este un contract de implementare care corespunde unor clase. Țineți cont că numai cazurile de contract se comportă sub formă de contracte, adică au propria stocare și sunt apelabile prin tranzacții/alte contracte. O clasă contractuală nu are în mod necesar un exemplu implementat în StarkNet. Introducerea claselor vine cu mai multe modificări ale protocolului.

#### Tranzacție „declarare”

Introducem un nou tip de tranzacție în StarkNet: tranzacția["declarare"](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction), care permite declararea clasei**a contractului.**Spre deosebire de tranzacția \`deploy\`, aceasta nu implementează o instanță din acea clasă. Starea StarkNet va include o listă a claselor declarate. Noile clase pot fi adăugate prin noua tranzacţie \`declarare\`.

#### Sistemul de gestionare a apelurilor și a uzinelor contractuale.

Odată ce o clasă este declarată, adică, tranzacția \`declare\` corespunzătoare a fost acceptată, putem desfășura noi instanțe din acea clasă. În acest scop, folosim noul apel de sistem \`deploy\`, care ia următoarele argumente:

* Hash clasa
* Sare
* Argumente constructoare

Ulterior, sinscall „implementat” va desfășura o nouă instanță a acestei clase de contracte, a cărui adresă[](https://docs.starknet.io/docs/Contracts/contract-address)va fi determinată de cei trei parametri de mai sus și de adresa implementatorului (contractul care a invocat apelul de sistem).

Includerea trimiterilor în interiorul unei tranzacții de invocare ne permite să prețuim și să percepem taxe pentru implementări, fără a fi nevoiți să tratăm implementările și invocările în mod diferit. Pentru mai multe informații despre taxele de implementare, a se vedea[documentele](https://docs.starknet.io/docs/Fees/fee-mechanism#deployed-contracts).

Această caracteristică introduce fabricile de contracte în StarkNet, deoarece orice contract poate invoca sinovia \`deploy\`, creând noi contracte.

#### Trecerea de la „Delegate Apel” la „Bibliotecă apel”

Introducerea claselor ne permite să abordăm o problemă binecunoscută în mecanismul de apel delegat al Ethereum: atunci când un contract execută un apel la un alt contract, are nevoie doar de clasa sa (codul său) și nu de o instanță reală (stocarea acesteia). Prin urmare, faptul de a preciza o anumită situație contractuală atunci când efectuează o cerere de propuneri de delegare este o practică proastă (într-adevăr, a dus la câteva erori în contractele Ethereum – doar clasa trebuie specificată.

Vechiul apel de sistem \`delegate_call\` devine învechit (vechile contracte care sunt deja implementate vor continua să funcționeze, dar**contractele care folosesc \`delegate_call\` nu vor mai compila**), și este înlocuit cu un nou apel de sistem library_call care primește hash (dintr-o clasă declarată anterior) în locul unei adrese de instanță a contractului. Reţineţi că un singur contract real este implicat într-un apel la bibliotecă, astfel încât să evităm ambiguitatea dintre contractul apelant şi contractul de execuţie.

#### Obiective noi API

Am adăugat două criterii noi la API, permiţând recuperarea datelor legate de clasă:

* \`get_class_by_hash\`: returnează definiția clasei dată fiind hash clasa
* \`get_class_hash_at\\`: returnează hash-ul clasei unui contract implementat având în vedere adresa contractului

Rețineți că, pentru a obține direct clasa unui contract mobilizat, în loc să parcurgeți cele două metode de mai sus, poți folosi obiectivul \`get_full_contract\`, care va fi redenumit în versiunile viitoare. Toate punctele finale menționate mai sus sunt utilizabile din[StarkNet CLI](https://docs.starknet.io/docs/CLI/commands).

#### Taxe

Vom introduce taxe în StarkNet, făcându-le obligatorii (prima pe Testnet, și mai târziu, de asemenea pe Mainnet) pentru ``[invoke](https://docs.starknet.io/docs/Blocks/transactions#invoke-function)\` (https://docs.starknet.io/docs/Blocks/transactions#invoke-function)\`. Tranzacția \`declare\` nu va necesita taxe în acest moment. In mod similar, \`implementare`` tranzacţii nu vor necesita nici o taxă, dar reţineţi că acest tip de tranzacţie va fi cel mai probabil descurajat în versiunile viitoare.

În acest domeniu rămân câteva întrebări deschise, cele mai importante fiind modul de percepere a taxelor pentru declaraţiile de contract şi pentru desfăşurarea conturilor StarkNet. Vom aborda aceste probleme în versiunile viitoare.

### Ce urmează?

Pe baza foii de parcurs pe care am anunțat-o[în februarie](https://medium.com/starkware/starknet-on-to-the-next-challenge-96a39de7717), ne angajăm să îmbunătățim performanța StarkNet, în general, și, în special, performanța secvențatorului, pentru a obține feedback mai rapid din partea utilizatorilor cu privire la tranzacțiile lor. În versiunea următoare, intenționăm să introducem paralelizarea în secvențier, permițând o producție mai rapidă a blocurilor.

Următoarea versiune majoră a StarkNet se va concentra asupra structurii conturilor StarkNet într-un mod similar cu[ERC-4337](https://medium.com/infinitism/erc-4337-account-abstraction-without-ethereum-protocol-changes-d75c9d94dc4a). Prin aceasta, ne vom fi finalizat modul în care se comportă conturile StarkNet, făcând încă un pas important către adoptarea în masă!