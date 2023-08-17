### TL;DR

* Abstracție de cont Îmbunătățiri în spiritul EIP-4337

1. Validare — Separare executivă
2. Caracterul unic al tranzacției este acum asigurat în protocol (Numa)

* Mecanismul de taxe este extins pentru a include:

1. L1→L2 Mesaje
2. Declară Tranzacțiile

* Câteva modificări de sintaxă Cairo

### Introducere

Suntem entuziasmaţi să-l prezentăm pe StarkNet Alpha 0.10.0. Această versiune este încă un pas spre extinderea Ethereum fără a compromite securitatea și descentralizarea.

Acest articol de blog descrie pe scurt principalele caracteristici ale acestei versiuni. Pentru lista completă de modificări, verificați[notele de lansare](https://github.com/starkware-libs/cairo-lang/releases). Pentru informații mai detaliate, consultați documentația[](https://docs.starknet.io/).

### Modificări ale Abstracției Contului

Facem progrese cu[abstractizarea contului StarkNet](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781). Această versiune introduce modificări inspirate de[EIP-4337](https://eips.ethereum.org/EIPS/eip-4337).

#### Validare/Executare Separare

Până acum, funcția \_execut\_execute\_\_ a contului a fost responsabilă atât pentru validarea tranzacției, cât și pentru execuție. În 0.10.0 vom strica acest cuplaj și vom introduce o funcție \_\_validate\_\_ separată în conturi. La primirea unei tranzacții, contractul de cont va apela mai întâi \_\_validate\_\_, și apoi, dacă va avea succes, va trece la \_\_execute\_\_.

Separarea validată/executată oferă o distincție la nivel de protocol între tranzacțiile invalide și cele reversibile (totuși valabile). Datorită acestui fapt, secvențiatorii vor putea percepe taxe pentru executarea unei tranzacții valabile, indiferent dacă aceasta a fost retransferată sau nu.

#### Nonce

În versiunea 0.10.0 un câmp nonce este adăugat pentru a consolida unicitatea tranzacției la nivelul protocolului. Până în prezent, aceste neconcordanțe erau tratate la nivelul contractului de cont, ceea ce a însemnat că o tranzacție cu același hash putea fi executată de două ori din punct de vedere teoretic.

La fel ca Ethereum, fiecare contract include acum un nonce, care ia în calcul numărul de tranzacții executate din acest cont. Contractele de cont vor accepta doar tranzacții cu o neconcordanță, adică dacă nuna curentă a contului este X, atunci va accepta tranzacții doar cu no X.

#### Versiune nouă pentru Tranzacție

Pentru a permite invers-compatibilitatea, vom introduce aceste două modificări printr-o nouă versiune de tranzacție —[v1](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C). Aceste modificări se vor aplica doar noii versiuni, iar conturile vechi vor putea încă executa tranzacțiile versiunea 0.

Notă - tranzacția v0 este acum învechită și va fi eliminată în StarkNet Alpha v0.11.0. Vă rugăm să vă asigurați că faceți upgrade pentru a utiliza noua versiune a tranzacției.

Pentru informații mai detaliate despre versiunea tranzacției, vă rugăm să citiți[documentația](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C).

#### Mecanismul de taxe

Noua versiune permite să se includă taxe pentru două componente necesare:

* [Mesaj L1→L2](https://docs.starknet.io/docs/L1-L2%20Communication/messaging-mechanism#l1--l2-message-fees)
* [Declară tranzacția](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)

Aceste taxe nu vor fi obligatorii în această versiune și vor fi aplicate doar pornirea StarkNet Alpha v0.11.0.

#### Modificări de sintaxă Cairo

În favoarea progresului treptat către o actualizare a Cairo,[Cairo 1.0](https://www.youtube.com/watch?v=Ny4Rv6ztINU), această versiune include mai multe modificări de sintaxă.

Pentru a minimiza neplăcerile, versiunea lansată va include un[script de migrare](https://www.youtube.com/watch?v=kXs59zaQrsc)care aplică automat modificările de mai sus. Mai multe detalii pot fi găsite[aici](https://github.com/starkware-libs/cairo-lang/releases).

### Ce urmează?

* În câteva săptămâni, plănuim să introducem paralelizarea în secvențier, permițând o producție mai rapidă de blocuri (V0.10.1)
* Vom finaliza în curând ultima parte care trebuie inclusă în plata prin taxă — Trimiterea contului
* Versiune Cairo 1.0 Mai multe informaţii despre asta într-o postare viitoare.

### Cum pot fi mai implicat?

* Mergeți la[starknet.io](https://starknet.io/)pentru toate informațiile StarkNet, documentație, tutoriale și actualizări.
* Alătură-te[StarkNet Discord](http://starknet.io/discord)pentru a sprijini dezvoltatorii, anunțuri despre ecosistem și a deveni o parte a comunității.
* Vizitați[Forumul StarkNet](http://community.starknet.io/)pentru a rămâne la curent și pentru a participa la discuțiile de cercetare StarkNet.

Suntem întotdeauna bucuroși să primim feedback despre documentația noastră[](https://docs.starknet.io/)!