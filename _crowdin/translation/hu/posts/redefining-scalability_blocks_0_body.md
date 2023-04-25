A blokklánc méretezhetősége mindig is heves téma volt. Szinte minden blokklánc-hálózat a másodpercenkénti tranzakciók magas számát (TPS) hirdeti értékesítési pontként. A TPS azonban nem egy érvényes mérőszám a blokklánc-hálózatok összehasonlítására – így kihívást jelent a relatív teljesítményük értékelése. Sőt, a nagy TPS-számok általában költséggel járnak – ami felveti a kérdést: ezek a hálózatok valóban méreteződnek, vagy csak növelik az áteresztőképességüket?

Vizsgáljuk meg tehát, hogyan határozhatjuk meg a méretezhetőséget, milyen kompromisszumokat kell megtenni ennek elérése érdekében, és miért a Validity Rollup a legjobb méretezhetőségi megoldás.

### Nem minden tranzakció egyenlő

Először is meg kell állapítanunk azt az állításunkat, hogy a TPS egyszerű és kényelmes mérőszáma nem a méretezhetőség pontos mértéke.

A csomópontok tranzakciók végrehajtásáért való kompenzálására (és arra, hogy a felhasználókat visszatartsák attól, hogy szükségtelen számításokkal spammeljék a hálózatot), a blokkláncok a blokkláncra háruló számítási terhekkel arányos díjat számítanak fel. Az Ethereumban a számítási terhelés összetettségét*gázban mérik.*Mivel a gáz nagyon kényelmes mérőszáma a tranzakciók bonyolultságának, a kifejezést ebben a cikkben a nem Ethereum blokkláncokra is használjuk, még akkor is, ha ez jellemzően Ethereum-specifikus.

A tranzakciók összetettsége és így mennyi gázfogyasztás tekintetében jelentősen eltér egymástól. A Bitcoin, a megbízható peer-to-peer tranzakciók úttörője, csak a kezdetleges Bitcoin-szkriptet támogatja. Ezek az egyszerű átvitelek címről címre kevés gázt igényelnek. Ezzel szemben az olyan intelligens szerződésláncok, mint az Ethereum vagy a Solana, támogatják a virtuális gépeket és a Turing-komplett programozási nyelveket, amelyek sokkal összetettebb tranzakciókat tesznek lehetővé. Ezért az olyan dApps-ok, mint az Uniswap, sokkal több energiát igényelnek.

Ezért nincs értelme összehasonlítani a különböző blokkláncok TPS-eit. Ehelyett a számítási kapacitást vagy az áteresztőképességet kellene összehasonlítanunk.

Minden blokkláncnak van (változó</em>blokkmérete és blokkideje, amelyek meghatározzák, hogy blokkonként hány*számítási egység*dolgozható fel, és milyen gyorsan*adható hozzá új blokk. Ez a két változó együtt határozza meg a blokklánc**áteresztőképességét.</p>

### Mi korlátozza a méretezhetőséget?

A blokkláncok arra törekszenek, hogy maximálisan decentralizált, befogadó hálózatok legyenek. Ennek eléréséhez két alapvető tulajdonságot kell kordában tartani.

#### **1. Hardverkövetelmények**

A blokklánc hálózat decentralizációját az határozza meg, hogy a hálózat leggyengébb csomópontja képes-e ellenőrizni a blokkláncot és megtartani annak állapotát. Ezért a csomópontok futtatásának költségeit (hardver, sávszélesség és tárhely) a lehető legalacsonyabb szinten kell tartani, hogy a lehető legtöbb személy váljon engedély nélküli résztvevővé a megbízható hálózatban.

#### 2**.**Államnövekedés

Az állapotnövekedés arra utal, hogy milyen gyorsan növekszik a blokklánc. Minél nagyobb áteresztőképességet enged meg egy blokklánc időegységenként, annál gyorsabban növekszik a blokklánc. A teljes csomópontok tárolják a hálózat előzményeit, és képesnek kell lenniük a hálózat állapotának ellenőrzésére. Az Ethereum állapotát hatékony struktúrák, például fák segítségével tárolják és hivatkoznak rájuk. Ahogy az állam növekszik, új levelek és ágak jelennek meg, ami egyre bonyolultabbá és időigényesebbé teszi bizonyos műveletek végrehajtását. Ahogy a lánc mérete növekszik, rontja a csomópontok legrosszabb esetben történő végrehajtását, ami az új blokkok érvényesítésének egyre hosszabb időhöz vezet. Idővel ez megnöveli a teljes csomópont szinkronizálásához szükséges teljes időt is.

### Az áteresztőképesség növelésének káros hatásai

#### 1. Csomópontszám

A csomópontok és a csomópontszámok minimális követelményei a következők:

* Bitcoin¹: 350 GB HDD lemezterület, 5 Mbit/s kapcsolat, 1 GB RAM, CPU >1 Ghz. **Csomópontok száma: ~10 000**
* Ethereum²: 500 GB+ SSD lemezterület, 25 Mbit/s kapcsolat, 4–8 GB RAM, CPU 2–4 mag. **Csomópontok száma: ~6000**
* Solana³: 1,5 TB+ SSD lemezterület, 300 Mbit/s kapcsolat, 128 GB RAM CPU 12+ mag. **Csomópontok száma: ~1200**

Figyeljük meg, hogy minél nagyobb a CPU, a sávszélesség és a tárolási igény a blokklánc átviteléhez szükséges csomópontokhoz, annál kevesebb csomópont van a hálózaton – ami gyengébb decentralizációhoz és kevésbé befogadó hálózathoz vezet.

#### 2. Ideje szinkronizálni a teljes csomópontot

Egy csomópont első futtatásakor szinkronizálnia kell az összes meglévő csomóponttal, letöltenie és érvényesítenie kell a hálózat állapotát a keletkezési blokktól a lánc csúcsáig. Ennek a folyamatnak a lehető leggyorsabbnak és leghatékonyabbnak kell lennie, hogy bárki a protokoll engedély nélküli résztvevőjeként működhessen.

Jameson Lopp[2020 Bitcoin Node](https://blog.lopp.net/2020-bitcoin-node-performance-tests/)és[2021 Node Sync Tests](https://blog.lopp.net/2021-altcoin-node-sync-tests/)mutatóját figyelembe véve az 1. táblázat összehasonlítja a teljes Bitcoin és Ethereum vs. Solana csomópont szinkronizálásához szükséges időt egy átlagos fogyasztói minőségű PC-n.

![Asztal 1. Blockchain átviteli sebesség és csomópont-szinkron összehasonlítása](/assets/1_gmpi_1c9zipoc-znrh7b5q.png "Asztal 1. Blockchain átviteli sebesség és csomópont-szinkron összehasonlítása")

Az 1. táblázat bemutatja, hogy az átviteli sebesség növelése hosszabb szinkronizálási időt eredményez, mivel egyre több adatot kell feldolgozni és tárolni.

Míg a csomóponti szoftvereket folyamatosan fejlesztik a növekvő blokklánc kihívásainak mérséklésére (a lemezterület csökkentése, gyorsabb szinkronizálási sebesség, erősebb ütközésállóság, bizonyos komponensek modularizálása stb.), a csomópontok nyilvánvalóan még mindig nem tudnak lépést tartani a növekedéssel. az áteresztőképességhez.

### Hogyan kell definiálni a méretezhetőséget?

A skálázhatóság a leginkább félreértelmezett kifejezés a blokklánc térben. Bár az átviteli sebesség növelése kívánatos, ez csak egy része a rejtvénynek.

***A skálázhatóság**további**tranzakciót jelent****a hardverre**.*

Emiatt a méretezhetőség két kategóriába sorolható.

#### A szekvencer skálázhatósága

A szekvenálás a tranzakciók hálózaton belüli megrendelésének és feldolgozásának műveletét írja le. Amint azt korábban megállapítottuk, bármely blokklánc triviálisan növelheti áteresztőképességét a blokk méretének növelésével és a blokk idejének lerövidítésével – egészen addig a pontig, amikor a decentralizációra gyakorolt negatív hatást túl jelentősnek ítélik. De ezeknek az egyszerű paramétereknek a módosítása nem biztosítja a szükséges fejlesztéseket. Az Ethereum EVM elméletileg akár ~2000 TPS</a>kezelésére

képes, ami nem elegendő a hosszú távú blokkhelyigény kiszolgálásához. A szekvenálás méretezéséhez Solana lenyűgöző újításokat hozott: kihasználta a párhuzamosítható végrehajtási környezetet és az okos konszenzusos mechanizmust, amely sokkal hatékonyabb átvitelt tesz lehetővé. De a fejlesztései ellenére sem nem elégséges, sem nem méretezhető. Ahogy a Solana növeli az átviteli sebességet, a csomópontok futtatásához és a tranzakciók feldolgozásához szükséges hardverköltségek is növekednek.</p> 



#### Ellenőrzési skálázhatóság

*Az ellenőrzési skálázhatóság olyan megközelítéseket ír le, amelyek növelik az átviteli sebességet anélkül, hogy a csomópontokat folyamatosan növekvő hardverköltségekkel terhelnék.*Konkrétan olyan kriptográfiai újításokra vonatkozik, mint az érvényességi igazolások. Ezek az okai annak, hogy a Validity Rollupok fenntarthatóan méretezhetik a blokkláncot.

**Mi az az érvényességi összesítő?**

Az érvényességi összesítések (más néven „ZK-összegzések”) a számítási és állapottárolást a láncon kívülre helyezik, de bizonyos adatok egy kis részét a láncon belül tartják. Az alapul szolgáló blokkláncra vonatkozó intelligens szerződés fenntartja a Rollup állapotgyökerét. Az összesítőn a nagymértékben tömörített tranzakciók kötegét az aktuális állapotgyökérrel együtt elküldik egy láncon kívüli provernek. A Prover kiszámítja a tranzakciókat, érvényességi igazolást állít elő az eredményekről és az új állapotgyökérről, és elküldi egy láncon belüli ellenőrzőnek. A Verifier ellenőrzi az érvényességi igazolást, és az összesítő állapotát fenntartó intelligens szerződés frissíti azt a Prover által biztosított új állapotra.

**Hogyan skálázódnak az érvényességi összesítők azonos hardverkövetelmények mellett?**

Annak ellenére, hogy a Provers-nek csúcskategóriás hardverre van szüksége, nincsenek hatással a blokklánc decentralizálására; mert a tranzakciók érvényességét matematikailag igazolható bizonyítások garantálják.

Ami számít, az a bizonyítékok ellenőrzésére vonatkozó követelmények. Mivel az érintett adatok nagymértékben tömörítettek és a számítások során nagyrészt elvonatkoztattak, a mögöttes blokklánc csomópontjaira gyakorolt hatása minimális*.*

A hitelesítők (Ethereum csomópontok) nem igényelnek csúcsminőségű hardvert, és a kötegek mérete nem növeli a hardverkövetelményeket. A csomópontoknak csak az állapotátmeneteket és kis mennyiségű hívási adatot kell feldolgozniuk és tárolniuk. Ez lehetővé teszi az összes Ethereum csomópontnak, hogy a meglévő hardverével ellenőrizze az érvényességi összesítő kötegeket.

**Minél több tranzakció, annál olcsóbb lesz**

A hagyományos blokkláncokban minél több tranzakció történik, annál drágább lesz mindenki számára, mivel a blokkterület megtelik – és a felhasználóknak felül kell licitálniuk egymást a díjpiacon, hogy tranzakcióikat beleszámítsák.

Az érvényességi összesítésnél ez a dinamika megfordul. Egy köteg tranzakció ellenőrzése az Ethereumon bizonyos költségekkel jár. A kötegen belüli tranzakciók számának növekedésével a köteg ellenőrzésének költsége exponenciálisan lassabb ütemben nő. Ha több tranzakciót ad hozzá egy köteghez, az olcsóbb tranzakciós díjakat eredményez, még akkor is, ha a kötegellenőrzés költsége nő – mivel a kötegben lévő összes tranzakció között amortizálódik. Az érvényességi összesítők a lehető legtöbb tranzakciót kívánják kötegen belül, hogy az ellenőrzési díjat meg lehessen osztani az összes felhasználó között. Ahogy a köteg mérete a végtelenségig növekszik, a tranzakciónkénti amortizált díj nullához konvergál, azaz minél több tranzakciót hajtanak végre az érvényességi összesítőn, annál olcsóbb lesz mindenki számára.

A dYdX, egy Validity Rollup által működtetett dApp, gyakran több mint 12 000 tranzakció kötegméretét látja. Ugyanazon tranzakciók gázfogyasztásának összehasonlítása a főhálózaton és az érvényességi összesítőn keresztül szemlélteti a skálázhatósági előnyöket:

dYdX tranzakció kiegyenlítése az Ethereum Mainnet hálózaton:**200 000 gáz**

dYdX tranzakció kiegyenlítése StarkEx-en:**<500 gáz**

Egy másik szemléltetési mód: Az érvényességi összesítések fő költsége lineárisan skálázódik az azonos kötegben lévő felhasználók számával.



#### Miért nem olyan méretezhetőek az Optimista összesítők, mint gondolnánk

Elméletileg az Optimistic Rollupok közel ugyanazokat a méretezhetőségi előnyöket biztosítják, mint az érvényességi összesítők. De van egy fontos különbség: az Optimistic Rollups az átlagos esetre optimalizál, míg az érvényességi összesítés a legrosszabb esetre optimalizál. Mivel a blokklánc rendszerek rendkívül ellenséges körülmények között működnek, a biztonság elérésének egyetlen módja a legrosszabb esetre történő optimalizálás.

Az Optimistic Rollup legrosszabb esetben a felhasználó tranzakcióit nem ellenőrzik a csalásellenőrzők. Tehát a csalás elleni küzdelemhez a felhasználónak szinkronizálnia kell egy teljes Ethereum csomópontot, egy L2 teljes csomópontot, és magának kell kiszámítania a gyanús tranzakciót.

A Validity Rollup legrosszabb esetben a felhasználónak csak egy teljes Ethereum csomópontot kell szinkronizálnia az érvényesség igazolásának ellenőrzéséhez, ezzel megkímélve magát a számítási terhektől.

Az érvényességi összesítéssel szemben az Optimistic Rollups költsége lineárisan skálázódik a tranzakciók számával, nem pedig a felhasználók számával, ami drágábbá teszi őket.



### A rejtvény utolsó darabja – Engedély nélküli hozzáférés az összesítő állapothoz

A tranzakciók érvényességének garantálása érdekében a felhasználóknak csak egy Ethereum csomópontot kell futtatniuk. Előfordulhat azonban, hogy a felhasználók és a fejlesztők különféle célokra szeretnék megtekinteni és futtatni az összesítő állapotát és végrehajtását. Egy*indexelő L2 csomópont*tökéletesen kielégíti ezt az igényt. Nemcsak lehetővé teszi a felhasználók számára, hogy lássák a tranzakciókat a hálózatban, hanem az infrastruktúra kritikus eleme is, amely szükséges az ökoszisztéma-infrastruktúra működéséhez. Az indexelők, mint a The Graph, az Alchemy, az Infura; Az Oracle hálózatok, mint például a Chainlink és a blokkfelfedezők, mindegyiket teljes mértékben támogatja egy engedély nélküli, indexelő L2 csomópont.



### Következtetés

A blokklánc skálázhatóságának kezelésére szolgáló számos megközelítés tévesen*átviteli sebesség növelésére összpontosít*. Ez azonban figyelmen kívül hagyja az átviteli sebesség csomópontokra gyakorolt hatását: a blokkok feldolgozásához és a hálózati előzmények tárolásához szükséges folyamatosan növekvő hardverkövetelményeket, és azt, hogy ez hogyan gátolja a hálózat decentralizálását.

A Validity-proof kriptográfia megjelenésével a blokklánc**valódi méretezhetőséget**érhet el, amely nem terheli a csomópontokat folyamatosan növekvő költségekkel, és széles körű decentralizációt tesz lehetővé. Mostantól több tranzakció is lehetséges ugyanazon hardveren hatékony és összetettebb számításokkal, megfordítva ezzel a folyamatban a díjpiaci dilemmát – minél több tevékenységet végez az érvényességi összesítőn, annál olcsóbb lesz!

[SwagtimusPrime.eth](https://twitter.com/SwagtimusP?t=pO0L1vGIhuC-ZgWOusQYtA&s=09)és[Louis Guthmann](https://twitter.com/GuthL)

¹[-tól https://bitcoin.org/en/bitcoin-core/features/requirements](https://bitcoin.org/en/bitcoin-core/features/requirements)

²[-tól https://ethereum.org/en/developers/docs/nodes-and-clients/](https://ethereum.org/en/developers/docs/nodes-and-clients/)

³[-tól https://docs.solana.com/running-validator/validator-reqs](https://docs.solana.com/running-validator/validator-reqs)

⁴ Erősen leegyszerűsítve és az átlagos dinamikus blokkméretekhez igazítva