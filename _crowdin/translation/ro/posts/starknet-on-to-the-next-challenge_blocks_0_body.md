### TL;DR

* Construim StarkNet în pași, începând cu stabilirea**utilizabilității**, apoi îmbunătățește**performanța**, și în cele din urmă, trecând la**descentralizarea**
* Ne-am atins primul obiectiv: utilitatea. Asta înseamnă că am livrat un calcul general în stare asemănătoare Ethereum (cu ani înainte ca el să fie crezut posibil)
* Trecem acum la etapa a 2-a a planului nostru de construcție cu 3 părți: performanța, concentrarea asupra tranzacţiilor, costurile de tranzacţie şi întârzierea.
* Următorul pas: Descentralizare

La doar un an după ce planurile pentru[StarkNet](https://starknet.io/)au fost anunțate prima dată, platforma are funcționalitate foarte bună. Comunitatea dezvoltatorilor înflorește peste așteptările noastre cele mai sălbatice și oferă o grămadă constantă de noi proiecte L2.

Prioritatea noastră faţă de ultimul an a fost să permitem exact acest lucru. prin crearea unui StarkNet care funcționează cu o gamă de caracteristici în expansiune rapidă, care permite dezvoltatorilor să se scufunde direct în ea.

Au făcut asta în număr mare. Un barometru bun este numărul de descărcări pentru[librăria JavaScript pentru StarkNet](https://www.starknetjs.com/): deja la 5k de când a devenit disponibilă acum 4 luni.

Cu toate acestea, în timp ce StarkNet oferă magia de compresie pe care am promis-o în acest moment, este departe de a fi în măsură să facă acest lucru pentru destule dApps cu un flux suficient, iar acest lucru se poate dovedi a fi o sursă de frustrare pentru dezvoltatori pe termen scurt.

Tehnologia noastră de bază, testată de luptă, care atestă STARK-ul și comprimă dovezile, trebuie să fie precedată de batching sau secvențierea tranzacțiilor. Este un proces pe care echipa StarkWare l-a perfecționat o dată pentru motorul de scalare[StarkEx](https://starkware.co/starkex/), iar în prezent lucrăm din nou la acest lucru pentru nevoile lui StarkNet.

Acum, că multe dintre obiectivele noastre de utilizare au fost atinse, ne deplasăm atenţia pentru a face din aceasta prioritatea noastră principală. Este o parte a foii noastre de parcurs în 3 etape:**utilizabilitatea**, urmată de performanța**a rețelei**, și apoi**descentralizarea**. Un an în: vrem să îți oferim o privire sub cucerire — o prezentare a ceea ce sunt piesele și ceea ce este încă în desfășurare.

### Povestea atât de departe

StarkNet Alpha a fost pus la testnet public în iunie şi la Mainnet în noiembrie. La momentul instalării rețelei Mainnet, StarkNet oferea deja un calcul general într-un stat similar Ethereum, despre care se credea că va mai dura câţiva ani.

Pe tot parcursul dezvoltării am ales o abordare care s-a concentrat în primul rând asupra celor mai importante funcționalități și le-a eliberat de îndată ce au devenit disponibile, partajează în mod esențial procesul evoluției cu comunitatea. StarkNet este departe de a fi complet funcțional, dar chiar și acum, dezvoltatorii pot deja să construiască aplicații semnificative și complexe. Astăzi avem sute de dezvoltatori[care construiesc pe StarkNet,](https://starkware.notion.site/Projects-Building-on-StarkNet-a33dee55778a4515a9be9bdae02ee682)zeci de dApps, şi peste douăsprezece echipe externe care dezvoltă instrumente şi infrastructură pentru ecosistemul StarkNet.

Un șir de actualizări a furnizat multe caracteristici importante, inclusiv mesajele L1<>L2, datele în lanț și suportul pentru compozabilitate, suport pentru evenimente, mecanism de comision de bază, actualizare contractelor, captarea contului, cadru de testare, instrumente pentru dezvoltatori, confirmare rapidă, număr blocare, marcare temporală, suport pentru contractele de cont.

Comunitatea dezvoltatorilor este deopotrivă profund interesată de StarkNet, şi de modelarea dezvoltării sale. Deja au fost introduse caracteristici bazate pe feedback-ul dezvoltatorilor. Adoptarea ar putea foarte bine să depășească creșterea volumului de resurse, motiv pentru care acest impuls reprezintă în prezent principala noastră prioritate.

### Pașii următori

Acum că am devenit utilizabili, este timpul să îmbunătățim performanța sistemului. Acest sistem, în starea sa actuală, este capabil să sprijine un flux limitat de tranzacţii. Modul de a rezolva acest lucru este prin îmbunătăţirea performanţei Nodului Sequencer care este echivalentul unui miner al StarkNet. „Mașina” este cea care secvenționează tranzacțiile după ce sunt depuse. Când acest lucru este optimizat, traseul va schia racheta.

În acest scop, analizăm simultan unde sunt blocajele și le eliminăm una câte una. În prezent, toate blocajele sunt legate de procesul de secvenţiere, care vine înainte de a apela la proverşii STARK. Bătălia testată este gata să sprijine strălucirea lui StarkEx, ca a lui StarkNet.

Ne aşteptăm ca optimizarea secvenţialului să fie un proces care durează câteva luni, cu îmbunătăţiri treptate pe tot parcursul H1/22. Scopul nostru este de a atinge, până la începutul celei de-a doua jumătăți a anului 2022, cel puțin un ordin de mărime mai mare decât Ethereum, la un cost cu cel puțin două ordine de mărime mai mic decât cel al Ethereum. Şi acesta este doar începutul.

Există un motiv întemeiat pentru ca această fază de optimizare să fie necesară, iar acel StarkNet nu a fost lansat cu un secvenţier optimizat gata: StarkNet a reuşit să obţină o utilizare atât de rapidă pentru că am pornit cu capul. În loc să începem de la zero şi să construim un secvenţier complet nou, l-am folosit pe batcher de la StarkEx ca o componentă centrală.

A fost un mod grozav de a construi. Nu doar că a livrat repede; înseamnă că suntem siguri că am construit pe fundații robuste. StarkEx a testat în esenţă funcţionalitatea de bază care conduce StarkNet, după cum a observat sute de miliarde de dolari în comerţul cumulat.

[StarkEx](https://starkware.co/starkex/)este motorul de scalare pentru unele dintre cele mai de succes dApps folosind L2: dYdX (contracte perpetue), DeversiFi (tranzacționare la fața locului și plăți), precum și pentru operațiunile Immutable și Sorare (monetăria și comerțul NFT).

Dar secvenţialul construit pentru ei şi alţi clienţi StarkEx îl pot lua doar pe StarkNet până acum. Fiecare dintre ele efectuează în fiecare zi acelaşi tip de tranzacţie. StarkNet este despre**calcule generale**, deci nevoile sale sunt deschise. Atunci când secvenţialul face tranzacţii din mempool, ele vin în diferite forme şi mărime. În plus, StarkNet este, de asemenea, o rețea deschisă, ceea ce înseamnă că există cheltuieli de calcul suplimentare care nu sunt întâlnite în StarkEx.

Provocarea actuală, și anume optimizarea succesiunii în funcție de aceste noi necesități, este un angajament semnificativ, dar înţelegem foarte bine calea care trebuie urmată, pe baza dezvoltării noastre de succes StarkEx.

### Următoarea Up: Descentralizare

StarkNet va fi o reţea complet descentralizată fără permisiuni, cu mecanisme de alegere a liderului şi de guvernare. Realizarea acestor obiective va deveni principala noastră preocupare de îndată ce vom trece cu rachete și se vor reduce costurile, şi sperăm să avem o primă versiune descentralizată până la sfârşitul anului 2022. Anticipăm împărţirea publică a planului nostru de descentralizare în lunile următoare.

La fel cum fluxul actual limitat reprezintă o etapă intermediară în dezvoltarea StarkNet, nivelul actual de implicare a lui StarkWare este, de asemenea, temporar. Ne vedem ca pe un fel de schelă, care serveşte o funcţie importantă în timpul fazei de construcţie, dar este rulată înapoi în timp util.

Dezvoltarea nodului complet, un prim pas interesant către descentralizare, este deja în curs de desfăşurare. Nodurile complete vor permite oricui să țină și să verifice starea rețelei la nivel local, urmărind exact ceea ce se întâmplă. Trei echipe —*Erigon, Nethermind și Eilibrium*— dezvoltă noduri complete, și poate chiar mai multe vor începe dezvoltarea în viitor.

În paralel, se pregătesc deschiderea secvenţelor şi a programelor informatice destinate publicului. Oricine va putea să participe ca un secvenţial sau ca un prover pe StarkNet.

Va fi dezvoltată o structură care să stimuleze implicarea oamenilor, inclusiv recompensele economice. Taxele StarkNet vor merge parţial, la secvenţieri şi protestatari.

Pe termen mediu, ne aşteptăm să punem secvenţialul nostru la dispoziţia terţilor, și pe termen lung ne așteptăm să vedem diverse echipe care să construiască secvențiere pentru StarkNet.

### Îmbunătățire întotdeauna; Ascultare pentru totdeauna

Pe măsură ce atenția se îndreaptă către următoarea provocare, vom continua să îmbunătățim realizările din trecut. Şi continuând să lucrăm în toate domeniile[StarkNet](https://starknet.io/), urechile noastre vor rămâne întotdeauna deschise întregii comunităţi de dezvoltatori. Așa că participați la discuție, prin[Discord](https://discord.com/invite/uJ9HZTUk2Y), comunitatea[StarkNet Shamans](https://www.google.com/search?client=safari&rls=en&q=StarkNet+Shamans&ie=UTF-8&oe=UTF-8),[Twitter](https://twitter.com/Starknet_Intern), sau o altă rută și ajută la modelarea viitorului scalării blockchain.