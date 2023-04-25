### TL;DR

* A Recursive Proving élőben működik a Mainneten, a StarkEx alkalmazások és a StarkNet skálázásával egyetlen bizonyítással
* Növeli a méretarányt, és előnyöket biztosít a költségek és a késleltetés terén (ritka és izgalmas előfordulása, hogy a méretarány és a késleltetés párhuzamosan mozog, és nem kompromisszum)
* Megalapozza a terepet az L3 és más előnyök számára. Olvassa el a blogbejegyzést a[Recursive Proving](https://medium.com/@starkware/recursive-starks-78f8dd401025)ről. Klassz cucc 😉

### Nagyítás!

A rekurzív bizonyítások – amelyeket Kairó általános számításai hajtanak végre – most készülnek. Ez jelentős növekedést jelent a STARK-okkal történő L2-skálázás teljesítményében. Gyorsan többszörösére növeli az Ethereumba egyetlen bizonyítással írható tranzakciók számát.

A STARK skálázás eddig úgy működött, hogy több tíz vagy akár több százezer tranzakciót „göngyölített fel” egyetlen bizonyítékba, amelyet az Ethereumra írtak. A rekurzióval sok ilyen bizonyítást egyetlen bizonyításra lehet „göngyölíteni”.

Ezt a módszert jelenleg számos kairói alkalmazáshoz használják: StarkEx-en futó alkalmazások, a StarkWare SaaS skálázómotorja és a StarkNet, az engedély nélküli összesítés.

### Az eddigi történet

A Mainneten történt első próbaverzió óta, 2020 márciusában, a következő fejlesztések határozták meg a STARK-ok használatát.

### STARK alapú méretezés

2020 júniusában az első STARK-alapú skálázási megoldást – a[StarkEx](https://youtu.be/P-qoPVoneQA)– telepítették az Ethereum Mainnet hálózatra. A StarkEx-nek van egy Prover-je, amely nagy számításokat hajt végre a láncon kívül, és STARK-bizonyítást állít elő a helyességükre, valamint egy ellenőrzője, amely ellenőrzi ezt a bizonyítékot a láncon. Az első üzembe helyezés korlátait a StarkWare mérnökei „kézzel írták”, így nagymértékben korlátozták a StarkEx funkcióinak sebességét. Arra a következtetésre jutottunk, hogy szükség van egy programozási nyelvre, amely támogatja az általános számítások bizonyítását – Kairó.

#### Kairó

2020 nyarán Cairo először[alkalommal jelent meg az Ethereum Mainnet](https://medium.com/starkware/hello-cairo-3cb43b13b209)-en. A Cairo a CPU Algebraic Intermediate Representation (AIR) rövidítése, és egyetlen AIR-t tartalmaz, amely ellenőrzi ennek a „CPU-nak” az utasításkészletét. Megnyílt az ajtó a bonyolultabb üzleti logika, tetszőleges számítási utasítások kódolása előtt, mégpedig gyorsabb és biztonságosabb módon. Egy kairói program képes igazolni egyetlen alkalmazás logikájának végrehajtását. De egy kairói program több ilyen alkalmazás – SHARP – összefűzése is lehet.

#### ÉLES

A SHARP – egy SHARed Prover – több különálló alkalmazásból veszi át a tranzakciókat, és mindezt egyetlen STARK-biztosan bizonyítja. Az alkalmazások egyesítik a tranzakciók kötegeit, így gyorsabban töltik fel a STARK-proofok kapacitását. A tranzakciók feldolgozása javított ütemben és késleltetésben történik. A következő határ: Rekurzív bizonyítások, de nem csak valamilyen keményen kódolt logikára, hanem inkább**általános számításra**.

A rekurzív bizonyítás teljes előnyeinek megértéséhez érdemes egy kicsit többet megérteni arról, hogyan hajtotta végre a SHARP eddig a (nem rekurzív) bizonyítást. Az 1. rajz egy tipikus nem rekurzív folyamatot ábrázol:

![1. rajz: Tipikus nem rekurzív bizonyítási folyamat](/assets/recursive_starks_01.png "1. rajz: Tipikus nem rekurzív bizonyítási folyamat")

Itt a nyilatkozatok idővel érkeznek. Egy bizonyos kapacitás (vagy idő) küszöb elérésekor egy nagy kombinált utasítás (más néven Train) jön létre. Ez a kombinált nyilatkozat csak akkor bizonyítható, ha az összes egyedi nyilatkozatot megkaptuk. Ennek a bizonyításnak a bizonyítása hosszú időt vesz igénybe (nagyjából annyi idő, mint az egyes állítások egyenkénti bizonyítása).

A rendkívül nagy állítások bizonyítását végül korlátozzák a rendelkezésre álló számítási erőforrások, például a memória. A rekurzió előtt ez volt a STARK-bizonyítás korlátozó skálázhatósági akadálya.

### Mi az a rekurzív bizonyítás?

A STARK bizonyításoknál az állítás bizonyításához szükséges idő nagyjából lineáris az állítás végrehajtásához szükséges idővel. Ezenkívül, ha egy állítás bizonyítása T időt vesz igénybe, akkor a bizonyítás ellenőrzése nagyjából log(T) időt vesz igénybe, amit általában „logaritmikus tömörítésnek” neveznek. Más szóval, a STARK-okkal sokkal kevesebb időt fordít az állítás ellenőrzésére, mint annak kiszámítására.

[Cairo](https://starkware.co/cairo/)lehetővé teszi olyan általános számítási állítások kifejezését, amelyek STARK bizonyítással igazolhatók és a megfelelő STARK hitelesítőkkel ellenőrizhetők.

Itt nyílik meg a lehetőség a[rekurzió](https://en.wikipedia.org/wiki/Recursion)végrehajtására: Ugyanúgy, ahogy egy Kairói programot írunk, amely több ezer tranzakció helyességét bizonyítja, úgy írhatunk egy Kairói programot is, amely több STARK bizonyítást is ellenőriz. Egyetlen bizonyítékot állíthatunk elő, amely több „felfelé irányuló” bizonyítás érvényességét tanúsítja. Ezt nevezzük rekurzív bizonyításnak.

A logaritmikus tömörítés és a durván lineáris bizonyítási idő miatt egy STARK-bizonyítás igazolása viszonylag rövid időt vesz igénybe (a közeljövőben várhatóan néhány perc).

A Recursion implementálásakor a SHARP be tudja bizonyítani az állításokat érkezésükkor. Bizonyításaik különböző mintákban újra és újra összevonhatók rekurzív bizonyításokká, amíg egy bizonyos ponton az eredményül kapott bizonyítást alá nem vetik egy on-chain hitelesítői szerződésnek. Egy tipikus minta látható a 2. rajzon:

![2. rajz: Egy tipikus rekurzív bizonyítási folyamat.](/assets/recursive_starks_02.png "2. rajz: Egy tipikus rekurzív bizonyítási folyamat.")

### A rekurzív bizonyítás azonnali előnyei

#### Csökkentett láncon belüli költség

Ezzel párhuzamosan több bizonyítást „tömörítünk” egybe, ami alacsonyabb tranzakciónkénti láncon belüli ellenőrzési költséget jelent (ahol minden kimutatás több tranzakciót is tartalmazhat).

A rekurzióval megszűnik a számítási erőforrás-korlát (pl. memória), amely eddig korlátozta a bizonyítások méretét, mivel minden korlátozott méretű állítás külön-külön bizonyítható. Ezért a rekurzió használatakor a rekurzió effektív Train mérete szinte korlátlan, és a tranzakciónkénti költség nagyságrendekkel csökkenthető.

Gyakorlatilag a csökkentés az elfogadható késleltetéstől (és a tranzakciók érkezési sebességétől) függ. Ezen túlmenően, mivel minden bizonyítást általában valamilyen kimenet is kísér, például láncon belüli adatok, korlátozottak az egyetlen bizonyítással együtt írható adatmennyiség. Mindazonáltal a költségek egy nagyságrenddel és még jobban csökkentése triviálisan elérhető.

#### Csökkentett késleltetés

A rekurzív bizonyítási minta csökkenti a nagy állítássorok bizonyításának késleltetését. Ez két tényező eredménye:

1. A bejövő állítások párhuzamosan**val igazolhatók**(ellentétben egy rendkívül nagy kombinált állítás bizonyításával).
2. A bizonyítás megkezdéséhez nem kell megvárni, amíg megérkezik az utolsó állítás a Vonatban. Inkább a bizonyításokat új állításokkal lehet kombinálni, ahogy megérkeznek. Ez azt jelenti, hogy a vonathoz csatlakozó utolsó utasítás látenciája nagyjából az az idő, amely a legutolsó állítás bizonyításához szükséges, plusz egy Rekurzív Verifier utasítás bizonyításához szükséges idő (amely igazolja mindazokat az állításokat, amelyek már „beépítették” ezt adott vonat).

Aktívan fejlesztjük és optimalizáljuk a Recursive Verifier utasítás bizonyításának késleltetését. Várakozásaink szerint ez néhány hónapon belül eléri a néhány perces nagyságot. Ennélfogva a rendkívül hatékony SHARP néhány perctől néhány óráig terjedő késleltetést kínálhat, attól függően, hogy milyen kompromisszum van a láncon belüli tranzakciónkénti költséggel szemben. Ez jelentős javulást jelent a SHARP késleltetésében.

#### Az L3 megkönnyítése

A Recursive Verifier utasítás kairói fejlesztése lehetőséget ad a bizonyítékok StarkNet felé történő benyújtására is, mivel ez az állítás StarkNet intelligens szerződésbe sütött. Ez lehetővé teszi[L3 telepítések építését a nyilvános StarkNet](https://medium.com/starkware/fractal-scaling-from-l2-to-l3-7fe238ecfb4f)(egy L2 hálózat) tetején.

A rekurzív minta vonatkozik az L3-ból származó bizonyítások összesítésére is, amelyet egyetlen bizonyítással kell ellenőrizni az L2-n. Ezért ott is elérhető a hiperskálázás.

### Kifinomultabb előnyök

#### Alkalmazó rekurzió

A rekurzió még több lehetőséget nyit meg azoknak a platformoknak és alkalmazásoknak, amelyek tovább kívánják növelni költségeiket és teljesítményüket.

Minden STARK-bizonyíték igazolja a „nyilvános bemenetnek” (vagy „program outputnak”) nevezett bemenetre alkalmazott állítás érvényességét. Koncepcionálisan a STARK rekurzió két*két*bemenetű bizonyítást tömörít*egy*bizonyításra két bemenettel. Más szóval, miközben a bizonyítások száma csökken, a bemenetek száma állandó marad. Ezeket a bemeneteket azután az alkalmazások általában arra használják, hogy frissítsenek bizonyos állapotokat az L1-en (pl. állapotgyökér frissítésére vagy láncon belüli visszavonásra).

Ha megengedjük, hogy a rekurzív utasítás*alkalmazástudatos*legyen, azaz felismeri magának az alkalmazásnak a szemantikáját, akkor két bizonyítást is tud tömöríteni egy*be, illetve*egyesíteni a két bemenetet egybe. Az eredményül kapott utasítás az alkalmazás szemantikája alapján igazolja a bemeneti kombináció érvényességét, innen ered az Applicative Recursion elnevezés (példaként lásd a 3. rajzot).

![3. rajz: Alkalmazó rekurziós példa](/assets/recursive_starks_03.png "3. rajz: Alkalmazó rekurziós példa")

Itt az 1. állítás az állapotfrissítést A-ról B-re, a 2. állítás pedig a B-ről C-re történő további frissítést tanúsít. Az 1. és a 2. állítás bizonyítása összevonható egy harmadik állítással, amely igazolja az A-ból C-be történő közvetlen frissítést. Hasonló logika rekurzív alkalmazásával jelentősen csökkenthető az állapotfrissítések költsége a véglegességi késleltetési követelményig.

Az Applicative Recursion másik fontos példája az összesítő adatok tömörítése több bizonyítványból. Például egy Validity Rollup esetében, mint például a StarkNet, az L2 minden tárhelyfrissítése az L1-en is átviteli adatként szerepel az adatok elérhetőségének biztosítása érdekében. Nem kell azonban több frissítést küldeni ugyanahhoz a tárolóelemhez, mivel az adatok elérhetőségéhez csak az ellenőrzött igazolással igazolt tranzakciók végső értéke szükséges. Ez az optimalizálás már megtörtént egy**StarkNet blokkon belül. Ha azonban blokkonként bizonyítást generál, az Applicative Recursion tömörítheti ezeket az összesítő adatokat*több*L2 blokkon keresztül. Ez jelentős költségcsökkentést eredményezhet, ami rövidebb blokkintervallumokat tesz lehetővé az L2-n anélkül, hogy az L1 frissítések méretezhetőségét feláldozná.

Érdemes megjegyezni: Az Applikatív rekurzió kombinálható az alkalmazás-agnosztikus rekurzióval, amint azt korábban bemutattuk. Ez a két optimalizálás független.

#### Csökkentett láncon belüli ellenőrző komplexitás

A STARK ellenőrző összetettsége attól függ, hogy milyen állítások ellenőrzésére tervezték. A kairói utasítások esetében az ellenőrző bonyolultsága a kairói nyelvben engedélyezett konkrét elemektől, pontosabban a támogatott beépített elemektől függ (ha a CPU metaforáját használjuk Kairóra, akkor a beépítettek a mikro megfelelői. -áramkörök a CPU-ban: olyan gyakran végzett számítások, hogy saját optimalizált számítást igényelnek).

A kairói nyelv folyamatosan fejlődik, és egyre több hasznos beépített modult kínál. Másrészt a Recursive Verifier csak ezeknek a beépített moduloknak egy kis részhalmazát igényli. Ennélfogva a rekurzív SHARP sikeresen tud támogatni minden utasítást Kairóban azáltal, hogy támogatja a teljes nyelvet a rekurzív hitelesítőkben. Pontosabban, az L1 Solidity Verifiernek csak a rekurzív bizonyításokat kell ellenőriznie, és így a kairói nyelv egy stabilabb részhalmazára korlátozható: Az L1 Verifiernek nem kell lépést tartania a legújabb és legjobb beépített modulokkal. Más szavakkal, a folyamatosan fejlődő összetett állítások ellenőrzése az L2-be kerül, így az L1 Verifier az egyszerűbb és stabilabb állítások ellenőrzését teszi lehetővé.

#### Csökkentett számítási lábnyom

A rekurzió előtt a több állítás egyetlen bizonyításban való összevonásának képességét korlátozta az állítás maximális mérete, amelyet a rendelkezésre álló számítási példányokon lehetett bizonyítani (és az ilyen bizonyítások előállításához szükséges idő).

A rekurzióval már nincs szükség ilyen rendkívül nagy állítások bizonyítására. Ennek eredményeként kisebb, olcsóbb és elérhetőbb számítási példányok használhatók (bár ezekből többre lehet szükség, mint a nagy monolit próbáknál). Ez lehetővé teszi a próbapéldányok telepítését a korábban lehetségesnél több fizikai és virtuális környezetben.

### Összegzés

Az általános számítások rekurzív bizonyításai ma már több éles rendszert is kiszolgálnak, beleértve a StarkNetet is a Mainnet Ethereumon.

A rekurzió előnyei fokozatosan érvényesülnek, mivel továbbra is új fejlesztéseket tesz lehetővé, és hamarosan hiperskálát biztosít, csökkenti a gázdíjat és javítja a késleltetést a párhuzamosítás lehetőségeinek felszabadításával.

Jelentős költség- és késleltetési előnyökkel jár, valamint olyan új lehetőségekkel, mint az L3 és az aplikatív rekurzió. A Recursive Verifier további optimalizálása folyamatban van, és idővel még jobb teljesítmény- és költségelőnyök várhatók.



**Gidi Kaempfer**, a StarkWare Core Engineering részlegének vezetője