### TL;DR

* Az érvényességi összesítések átviteli sebessége nincs korlátozva az L1-ekhez hasonlóan. Ez potenciálisan sokkal magasabb TPS-t eredményez az L2 érvényességi összegzőkön.
* A StarkNet teljesítmény ütemterve a rendszer egy kulcsfontosságú elemével foglalkozik: a szekvenszerrel.
* Bemutatjuk a teljesítményjavítás ütemtervét:\
  — Szekvencer párhuzamosítás\
  — Új rozsdás implementáció a Cairo VM-hez\
  — A szekvencer újbóli megvalósítása rozsdában\
* A próbák, mivel harci próbák vannak, nem jelentik a szűk keresztmetszetet, és sokkal többet tudnak kezelni, mint most!

### Intro

A StarkNet majdnem egy éve indult a Mainneten. A StarkNet felépítését a funkcionalitásra összpontosítva kezdtük. Most a teljesítmény javítására helyezzük a hangsúlyt egy sor lépéssel, amelyek elősegítik a StarkNet élményének javítását.

Ebben a bejegyzésben elmagyarázzuk, hogy miért létezik az optimalizálások széles skálája, amelyek csak érvényességi összesítésben alkalmazhatók, és megosztjuk tervünket e lépések végrehajtására a StarkNeten. Ezen lépések némelyike már megvalósult a StarkNet Alpha 0.10.2-ben, amely november 16-án jelent meg a Testneten és tegnap a Mainneten. Mielőtt azonban a megoldásokról beszélnénk, tekintsük át a korlátokat és azok okát.

### Blokkkorlátozások: érvényességi összesítés az L1-hez képest

A blokklánc skálázhatóságának és a TPS növelésének egy lehetséges megközelítése a blokkkorlátok feloldása (gáz/méret tekintetében), miközben a blokkidőt állandóan tartjuk. Ez több erőfeszítést igényel a blokk-előállítóktól (ellenőrzők az L1-en, szekvenszererek az L2-n), és így ezeknek a komponenseknek a hatékonyabb megvalósítását igényli. Ebből a célból most a StarkNet szekvenszer optimalizálásra helyezzük a hangsúlyt, amelyeket a következő szakaszokban írunk le részletesebben.

Felmerül itt egy természetes kérdés. Miért korlátozódik a szekvenszer optimalizálás az érvényességi összesítésekre, vagyis miért nem tudjuk végrehajtani ugyanazokat a fejlesztéseket az L1-en, és teljesen elkerülni az érvényességi összesítések bonyolultságát? A következő részben azt állítjuk, hogy van egy alapvető különbség a kettő között, ami az L2-n az L1-re nem alkalmazható optimalizálások széles skáláját teszi lehetővé.

### Miért korlátozott az L1 átviteli sebessége?

Sajnos az L1 blokkkorlátozásának feloldása komoly buktatóval jár. A lánc növekedési ütemének növelésével a teljes csomópontok igényeit is növeljük, akik igyekeznek lépést tartani a legújabb állapottal. Mivel az L1 teljes csomópontoknak újra végre kell hajtaniuk az összes előzményt, a blokk méretének nagymértékű növekedése (gázmennyiség szempontjából) jelentős terhelést jelent rájuk, ami ismét ahhoz vezet, hogy a gyengébb gépek kiesnek a rendszerből, és meghagyják a teljes csomópontok futtatásának lehetőségét. csak elég nagy entitásoknak. Ennek eredményeként a felhasználók nem tudják majd maguk ellenőrizni az állapotot, és nem tudnak bizalmatlanul részt venni a hálózatban.

Ez azt jelenti, hogy az L1 átviteli sebességet korlátozni kell egy valóban decentralizált és biztonságos rendszer fenntartása érdekében.

### Miért nem ugyanazok a korlátok befolyásolják az érvényességi összesítést?

**Csak a csomópont teljes perspektívájának figyelembevételével látjuk az érvényességi összesítések által kínált valódi teljesítményt.**Az L1 teljes csomópontnak újra végre kell hajtania a teljes előzményt, hogy biztosítsa az aktuális állapot helyességét. A StarkNet csomópontoknak csak a STARK igazolásokat kell ellenőrizniük, és ez az ellenőrzés exponenciálisan kevesebb számítási erőforrást igényel. Különösen a semmiből történő szinkronizálásnak nem kell végrehajtania; egy csomópont fogadhatja az aktuális állapot kiíratását társaiktól, és csak STARK-bizonyítvánnyal ellenőrizheti, hogy ez az állapot érvényes. Ez lehetővé teszi a hálózat átviteli sebességének növelését anélkül, hogy növelnénk a teljes csomópont követelményeit.

Ezért arra a következtetésre jutottunk, hogy az L2 szekvenszer olyan optimalizálások teljes spektrumának van kitéve, amelyek L1-en nem lehetségesek.

### Teljesítmény ütemterv előttünk

A következő részekben megvitatjuk, hogy ezek közül melyeket tervezik jelenleg a StarkNet szekvenszerhez.

### Szekvencer párhuzamosítás

Útitervünk első lépése a párhuzamosítás bevezetése volt a tranzakció-végrehajtásba. Ezt a StarkNet alpha 0.10.2-ben vezették be, amely tegnap jelent meg a Mainnet-en. Most belemerülünk abba, hogy mi is az a párhuzamosítás (ez egy félig műszaki rész, az ütemterv folytatásához ugorjunk a következő részre).

Mit jelent tehát a „tranzakció párhuzamosítása”? Naiv módon egy tranzakcióblokk párhuzamos végrehajtása lehetetlen, mivel a különböző tranzakciók függőek lehetnek. Ezt a következő példa szemlélteti. Tekintsünk egy blokkot három tranzakcióval ugyanattól a felhasználótól:

* A tranzakció: USDC csere ETH-ra
* B tranzakció: fizessen ETH-t egy NFT-ért
* C tranzakció: USDT csere BTC-re

Nyilvánvaló, hogy a Tx A-nak Tx B előtt kell megtörténnie, de a Tx C mindkettőtől teljesen független, és párhuzamosan is végrehajtható. Ha minden tranzakció végrehajtásához 1 másodpercre van szükség, akkor a blokkgyártási idő 3 másodpercről 2 másodpercre csökkenthető párhuzamosítás bevezetésével.

A probléma lényege, hogy nem ismerjük előre a tranzakciós függőségeket. A gyakorlatban csak akkor látjuk, ha a példánkból végrehajtjuk a B tranzakciót, hogy az az A tranzakció által végrehajtott változtatásokra támaszkodik. Formálisabban a függőség abból a tényből következik, hogy a B tranzakció beolvassa azokat a tárolócellákat, amelyekbe az A tranzakció írt. A tranzakciókat felfoghatjuk úgy, mint egy függőségi gráfot, ahol van egy él az A tranzakciótól a B tranzakcióig, ha A olyan tárolócellába ír, amelyet B olvas be, és így B előtt kell végrehajtani. A következő ábra egy példa egy ilyen függőségi gráfra:

![](https://miro.medium.com/max/641/0*I-qGgxdJJmqmgZWM)

A fenti példában az egyes oszlopok párhuzamosan is végrehajthatók, és ez az optimális elrendezés (miközben naivan, az 1-9. tranzakciókat szekvenciálisan hajtjuk végre).

Annak kiküszöbölésére, hogy a függőségi gráf előre nem ismert,***optimista párhuzamosítást***vezetünk be az Aptos Labs által kifejlesztett[BLOCK-STM](https://malkhi.com/posts/2022/04/block-stm/)szellemében a StarkNet szekvenszerbe. Ebben a paradigmában optimistán megkíséreljük a tranzakciókat párhuzamosan futtatni, és újra végrehajtani, ha ütközést találunk. Például az 1. ábra 1–4. tranzakcióit párhuzamosan hajthatjuk végre, csak utólag kiderül, hogy a Tx4 függ a Tx1-től. Ezért a végrehajtása haszontalan volt (azon állapothoz viszonyítva futtattuk, amely ellen a Tx1-et, míg a Tx1 alkalmazásából származó állapot ellen kellett volna futtatni). Ebben az esetben újra végrehajtjuk a Tx4-et.

Vegye figyelembe, hogy az optimista párhuzamosításon túl sok optimalizálást is hozzáadhatunk. Például ahelyett, hogy naivan várnánk az egyes végrehajtások végét, megszakíthatjuk a végrehajtást abban a pillanatban, amikor olyan függőséget találunk, amely érvényteleníti azt.

Egy másik példa az újra végrehajtandó tranzakciók kiválasztásának optimalizálása. Tegyük fel, hogy egy blokk, amely az 1. ábra összes tranzakcióját tartalmazza, egy öt CPU maggal rendelkező szekvenszerbe kerül. Először megpróbáljuk párhuzamosan végrehajtani az 1–5. tranzakciót. Ha a teljesítési sorrend Tx2, Tx3, Tx4, Tx1 és végül Tx5 volt, akkor a Tx1→Tx4 függőséget csak a Tx4 végrehajtása után fogjuk megtalálni – jelezve, hogy újra végre kell hajtani. Naivan, érdemes lehet a Tx5-öt is újra végrehajtani, mivel a Tx4 új végrehajtása miatt másként viselkedhet. Azonban ahelyett, hogy az összes tranzakciót újra végrehajtanánk a most érvénytelenített Tx4 után, bejárhatjuk azokból a tranzakciókból összeállított függőségi gráfot, amelyek végrehajtása már leállt, és csak azokat a tranzakciókat hajthatjuk végre újra, amelyek a Tx4-től függtek.

### Egy új Rust implementáció a Cairo-VM-hez

A StarkNet intelligens szerződéseit Kairóban írják, és a Cairo-VM-en belül hajtják végre, amely specifikáció a[Cairo papíron](https://eprint.iacr.org/2021/1063.pdf)található. Jelenleg a szekvenszer a Cairo-VM[python implementációját](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/cairo/lang/vm)használja. A virtuális gép megvalósítási teljesítményének optimalizálása érdekében megkezdtük a virtuális gép rozsdásodásának újraírását. A[Lambdaclass](https://lambdaclass.com/)nagyszerű munkájának köszönhetően, akik mára felbecsülhetetlen értékű csapatot alkotnak a StarkNet ökoszisztémában, ez az erőfeszítés hamarosan megvalósul.

A virtuális gép rozsda implementációja,[cairo-rs](https://github.com/lambdaclass/cairo-rs)most már képes végrehajtani a natív Kairói kódot. A következő lépés az intelligens szerződések végrehajtása és a pythonic szekvenszerrel való integráció kezelése. A cairo-rs-szel való integráció után a szekvenszer teljesítménye várhatóan jelentősen javulni fog.

### Szekvencer újraimplementáció a Rustban

A pythonról a rozsdára való átállásunk a teljesítmény javítása érdekében nem korlátozódik a Cairo virtuális gépre. A fent említett fejlesztések mellett azt tervezzük, hogy a szekvenszert a semmiből átírjuk a rozsdába. A Rust belső előnyei mellett ez más optimalizálási lehetőségeket is kínál a szekvenszer számára. Egy párat felsorolva élvezhetjük a cairo-rs előnyeit a python-rust kommunikáció rezsije nélkül, és teljesen újratervezhetjük az állam tárolási és hozzáférési módját (ami ma a[Patricia-Trie struktúrán](https://docs.starknet.io/documentation/develop/State/starknet-state/#state_commitment)alapul).

### Mi a helyzet a bizonyítókkal?

Ebben a bejegyzésben nem említettük az érvényességi összegzés talán leghíresebb elemét – a bebizonyítást. Elképzelhető, hogy az architektúra vitathatatlanul legkifinomultabb összetevőjeként ez lesz a szűk keresztmetszet, és így az optimalizálás középpontja. Érdekes módon a „szabványosabb” komponensek jelentik a StarkNet szűk keresztmetszetét. Ma, különösen[rekurzív bizonyítással](https://medium.com/starkware/recursive-starks-78f8dd401025), sokkal több tranzakciót illeszthetünk egy bizonyításra, mint amennyi a jelenlegi forgalom a Testnet/Mainnet-en. Valójában ma már a StarkNet blokkok is beváltak a StarkEx-tranzakciók mellett, ahol az utóbbiak esetenként több százezer NFT pénzverést vonhatnak maguk után.

### Összegzés

Párhuzamosítás, rozsda és még sok más – készüljön fel egy továbbfejlesztett TPS-re a közelgő StarkNet verziókban.