### TL;DR

* Prima versiune a Cairo 1.0 este aici!
* Dezvoltatorii pot începe să scrie și să testeze programe Cairo 1.0
* Caracteristicile paritate cu versiunea mai veche a Cairo vor fi atinse în săptămânile următoare
* Sprijinul pentru contractele StarkNet va fi adăugat în viitoarea versiune StarkNet Alpha

### Context

Suntem încântați să anunțăm că prima versiune publică a lui Cairo 1.0 este acum disponibilă. Acest lucru marchează o etapă importantă în evoluția Cairo, care a fost introdus pentru prima dată în 2020 ca un limbaj de programare Turing-complete pentru redactarea eficientă a programelor STARK; Cairo 1.0 este un limbaj de înalt nivel asemănător lui Rust. Ca Rust, este destinat să permită dezvoltatorilor să scrie cu ușurință un cod eficient și sigur.

De la începuturile sale, Cairo a fost folosit pentru a construi aplicații Layer-2 care au[manipulat](https://dashboard.starkware.co/starkex)tranzacții în valoare de peste 790 miliarde USD, au procesat peste 300 de milioane de tranzacții și au bătut peste 90 de milioane de operațiuni neperformante; toate au fost realizate în afara lanțului și s-au așezat pe Ethereum cu integritatea matematică garantată de dovezile STARK. Cairo a devenit al 4-lea cel mai utilizat limbaj de programare din ecosistemul[blockchain](https://defillama.com/languages)în general. Odată cu eliberarea Cairo 1. , dorim să facem limbajul și mai accesibil și mai ușor de utilizat, introducând, în același timp, noi caracteristici care să sporească siguranța și confortabilitatea.

Una dintre cele mai semnificative modificări ale Cairo 1.0 este sintaxa. Ne-am inspirat din**Rust**pentru a crea un limbaj mai prietenos cu dezvoltatorii, care este mai ușor de citit și scris. Noua versiune a Cairo permite scrierea unui cod mai sigur (puternic scris, proprietate și împrumut etc.), fiind în același timp mai expresiv.

Cairo 1.0 introduce de asemenea Sierra, o nouă reprezentare intermediară care asigură**la fiecare**Cairo run poate fi dovedită. Acest lucru face ca Cairo 1.0 să fie foarte potrivit pentru a fi utilizat într-o reţea fără permisiuni, cum ar fi StarkNet, unde poate oferi o protecţie robustă în doS şi rezistenţă la cenzură. Poţi citi mai multe despre Sierra în[postarea noastră](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)anterioară.

## Prima bucată!

### Ce puteți face astăzi?

Dezvoltatorii pot începe scrierea, compilarea și testarea programelor Cairo 1.0 Încurajăm dezvoltatorii să înceapă să experimenteze cu Cairo 1.0 şi să se obişnuiască cu noua sintaxă şi noile caracteristici.

Deoarece Cairo 1.0 este încă dezvoltat activ, iar noi caracteristici sunt adăugate constant, verificați[depozitul Cairo](https://github.com/starkware-libs/cairo/)pentru cele mai recente actualizări.

### Ce urmează?

În acest moment, Cairo 1. încă lipsește unele dintre caracteristicile acceptate în versiunea mai veche a Cairo ([a se vedea acest tabel pentru detalii](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)). Următoarea noastră piatră de hotar, aşteptată în următoarele câteva săptămâni, va oferi paritate caracteristică Cairo 1.0 cu versiunea mai veche. Poți urmări progresul către acea piatră de hotar[aici](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md).

### Suport Starknet

Se acceptă scrierea de contracte StarkNet în cadrul programului Cairo 1.0 (deși lipsesc încă anumite caracteristici). Cu toate acestea, StarkNet nu sprijină încă desfăşurarea şi executarea contractelor de la Cairo 1.0. StarkNet Alpha V0.11.0, planificată pentru săptămânile următoare, va introduce capacitatea de a implementa şi conduce contracte Cairo 1.0. Actualizarea la v0.11.0 va marca începutul Perioadei de Tranziție către un sistem care rulează doar contracte Cairo 1.0. Această perioadă de tranziție se va încheia cu[Regenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4), așteptat câteva luni mai târziu.

![](/assets/0_odxbxeacqdwizlfw.jpg)

### Hai să construim!

Țelul lui StarkNet este la scară exponențială Ethereum folosind integritatea matematică a STARK-urilor, și scopul lui Cairo este să facă această scară exponențială accesibilă dezvoltatorilor. Accesibilitatea înseamnă un limbaj de programare care este eficient, ușor de citit și scris, și care este sigur de utilizat. Sperăm că eliberarea Cairo 1.0 va inspira şi mai mulţi dezvoltatori să se alăture StarkNet şi scara Ethereum pentru a satisface cererea globală.