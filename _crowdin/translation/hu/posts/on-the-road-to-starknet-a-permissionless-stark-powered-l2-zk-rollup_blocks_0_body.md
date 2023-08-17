#### **TL;DR**

A StarkNetet négy lépésben építjük fel:

* 0. lépés – Alapozás (befejezve*)
* I. lépés – Bolygók: egyetlen alkalmazás összesítése
* II. lépés – Csillagképek: Több alkalmazásból álló összesítés
* III. lépés – Univerzum: Decentralizált összesítés

Várakozásaink szerint néhány hónapon belül bevezetjük az I. lépést, és 2021 végére már jó úton haladunk a Steps II & III felé.

### **Bevezetés**

A StarkWare a StarkNetet építi, egy decentralizált, engedély nélküli és cenzúraálló STARK-alapú L2 ZK-Rollup-ot, amely támogatja az Ethereumon keresztüli általános számításokat. A Turing-teljes[kairói nyelven](https://www.cairo-lang.org/)alapul.

A fejlesztők, a felhasználók és a StarkNet csomópontok mindent megtehetnek, amit egy engedély nélküli L2 Rolluptól elvárhat: A fejlesztők saját üzleti logikájukat megvalósító alkalmazásokat készíthetnek, és telepíthetik azokat a StarkNeten. A felhasználók tranzakciókat küldhetnek a StarkNetnek végrehajtásra, ugyanúgy, ahogy ma az Ethereummal kommunikálnak. A StarkNet csomópontjai és résztvevői kripto-gazdasági ösztönzésben részesülnek, hogy biztosítsák a hálózat hatékony és tisztességes működését.

Minden StarkNet-tranzakciót rendszeres időközönként kötegelni kell, és érvényességüket egy STARK-bizonyítványban igazolják, amelyet az Ethereumon kell ellenőrizni. Mivel a STARK-bizonyítások ellenőrzéséhez szükséges számítási erőfeszítés a bizonyított számításokhoz képest exponenciálisan kicsi, a StarkNet nagyságrendekkel méretezi az Ethereumot.

Mivel az összes StarkNet állapotátmenet STARK által igazolt lesz, csak az érvényeseket fogadja el az Ethereum. A teljes StarkNet állapot rekonstrukciójához szükséges összes adatot közzéteszik a láncon. Bárki futtathatja a saját StarkNet csomópontját. Ezek a tulajdonságok a StarkNet olyan biztonságossá és engedély nélkülivé teszik, mint az Ethereum.

Három éve dolgozunk ezen, és máris elértünk néhány figyelemre méltó mérföldkövet a „Moon Math” gyártási szintű és hatékony szoftverré alakítása terén, amely az Ethereumon fut. A StarkWare úgy csinálja a dolgokat, hogy először megbirkózik a nehéz problémákkal, megépíti az alapvető technológiát, majd részenként bocsátja gyártásba. A StarkNet befejezésekor továbbra is ezen a módon fogunk építeni.

![](/assets/ontheroad_02.png)

**0. lépés – Alapok**

A StarkWare befejezte néhány fontos alap lefektetését a StarkNet számára.

#### **Kairó**

[Cairo](https://twitter.com/StarkWareLtd/status/1300353049836376066?s=20)a Turing-Complete High-Level Language & keretrendszerünk STARK bizonyítások előállítására általános számításokhoz. A bonyolult „áramkörök” vagy AIR-ek kézi megalkotása helyett az alkalmazásfejlesztő a Kairót használhatja bármilyen üzleti logika meghatározására, a láncon kívüli bizonyításra és a láncon belüli ellenőrzésre. A Cairo[gyártásban van a Mainnet](https://twitter.com/StarkWareLtd/status/1320695603492507648?s=20)-en, és[elérhető a fejlesztők számára is](http://cairo-lang.org/).

Néhány héten belül egy nyilvános Ethereum teszthálózaton elindítjuk a kairói Generic Proof Service (GPS) alfa verzióját. *Ez lehetővé teszi a fejlesztők számára, hogy saját alkalmazásaikat Kairó használatával építsék fel, bármilyen üzleti logikát megvalósítva. Elküldik a kairói kódjukat a GPS-nek, hogy bizonyítsák, majd ellenőrizzék a láncon.*

A GPS egyetlen bizonyítást tesz lehetővé teljesen különálló és független alkalmazások végrehajtásának integritásának igazolására, ezáltal lehetővé téve az alkalmazások számára, hogy amortizálják a bizonyítási ellenőrzés gázköltségét köztük.

Kairó és a GPS a StarkNet alapja – az a döntésünk, hogy mindkettőt kiszervezzük a fejlesztőknek, korán megismerkedhetnek ezzel a technológiával, nem csak azért, hogy elkezdhessék az építkezést, hanem azért is, hogy befolyásolhassák a StarkNet fejlődését.

Folytatjuk Kairó fejlesztését a fejlesztői közösség igényei és visszajelzései alapján. Bővíteni fogjuk ezt a nyelvet új funkciókkal, szintaxissal és beépített modulokkal, amelyek javítják a használhatóságát, és továbbra is fejlesztjük és fejlesztjük a Kairói eszközöket: fordítókat, nyomkövetőt/hibakeresőt és a közös IDE-ekhez való integrációkat.

A StarkNet burkolata alatt Kairó fut majd.

#### **A STARK szoftververem**

A StarkWare kifejlesztette az ökoszisztéma legerősebb proof rendszerét, és hónapok óta[él a Mainnet](https://medium.com/starkware/starks-over-mainnet-b83e63db04c0)en. A StarkWare emellett kifejlesztette[ethSTARK](https://twitter.com/StarkWareLtd/status/1264911004099543040?s=20), a nyílt forráskódú próbaverziónkat, amely 20-szor gyorsabb, mint bármely más tesztelő;[zéró tudást és posztkvantumbiztonságos aláírást is kínál](https://twitter.com/StarkWareLabs/status/1331930111227080709).

A skálázási*méréseink*– nem extrapolációk vagy ígéretek – 300 000 tranzakció feldolgozását tartalmazzák egyetlen próbaverzióban a Mainnet hálózaton, amivel[világrekordot értünk el az összesítő átviteli sebességben: 3K tps](https://twitter.com/StarkWareLtd/status/1287770381525422082?s=20). A folyamat során elértük a Rollup gázhatékonyság világrekordját: 315 gáz/tx, ami nagyságrendekkel olcsóbb, mint az Ethereum L1 tranzakciói.

Ez a technológia lesz a StarkNet decentralizált bizonyítási rétegének sarokköve, ezért a StarkNet fejlesztésének részeként további és továbbfejlesztett bizonyítókat fogunk kiadni (erről bővebben egy következő blogbejegyzésben).

#### **StarkEx**

A StarkEx az L2-es skálázhatósági motorunk. 2020 júniusa óta[DeversiFi](https://twitter.com/deversifi)ügyfelet szolgál ki a Mainnet hálózaton. Mind[dYdX](https://twitter.com/dydxprotocol), mind[ImmutableX](https://twitter.com/Immutable)tápellátását néhány hét múlva kezdi. A StarkEx képes kezelni az összetett kereskedési logikát (azonnali kereskedés, származtatott ügyletek, NFT-k), valamint a fizetéseket.

A StarkEx fejlesztése volt az eszközláncunk dogfood-módosításának és a valós világ igényeinek megfelelő tesztelésének módja. Semmi sem hasonlítható a tényleges alkalmazások és az élő felhasználók igényeihez, hogy segítsék az eszközök kifejlődését és fejlődését. Segít abban is, hogy megértsük, mely elemekkel kell foglalkozni az ökoszisztéma jobb kiszolgálása érdekében – például a pénztárcákkal és a blokkfelfedezőkkel való integrációt.

A StarkEx élő példa arra, hogy az alkalmazások méretezhetők STARK-alapú ZK-Rollup segítségével, és ez az első, Kairóban írt éles alkalmazás a Mainnet hálózaton. Mint ilyen, a StarkNeten futó alkalmazások egyike is lesz.

![](/assets/ontheroad_03.png)

### **Az előttünk lévő út**

#### **I. lépés – Bolygók: egyetlen alkalmazás összesítése**

Ez a lépés lehetővé teszi a fejlesztők számára, hogy saját méretezhető alkalmazásaikat építsék fel és telepítsék a StarkNeten.

Ezen a ponton minden StarkNet-példány egyetlen alkalmazás futtatására lesz képes. A különböző példányok különböző alkalmazásokat futtathatnak.\
A StarkNet keretrendszer a következőket tartalmazza:

* A tetszőleges kairói logika STARK-bizonyítványainak előállításához, majd az Ethereumon való elküldéséhez és ellenőrzéséhez szükséges mechanizmusok.
* Interakciók az L1 Ethereummal: L1 tokenek be- és visszavonása, a láncon belüli adatok közzététele, a StarkNet felhasználókat a rosszindulatú StarkNet operátoroktól megvédő menekülési mechanizmusok stb.
* Az L2 felhasználói egyenlegek, valamint az alkalmazás tárhelyének és memóriájának kezelése.

A fejlesztők kizárólag az alkalmazásuk üzleti logikájának felépítésére koncentrálhatnak, majd áttérhetnek a termelésbe: telepíthetik és nagy méretben futtathatják a StarkNeten.

Ami lehetővé teszi számunkra egy általános számítási skálázható ZK-Rollup felépítését, az a következők kombinációja:

* Cairo, amely egy általános célú Turing-komplett programozási nyelv
* Erős STARK-veremünk (próbáló és ellenőrző), amely lehetővé teszi óriási számítások egyetlen bizonyítványba történő összevonását

#### **II. lépés – Csillagképek: Több alkalmazásból álló összesítés**

A következő lépés több alkalmazást támogat, amely ugyanazon a StarkNet-példányon fut, és ugyanahhoz a globális L2-állapothoz fér hozzá. Ez lehetővé teszi a különböző alkalmazások közötti átjárhatóságot, valamint a jobb méretgazdaságosságnak köszönhetően csökkenti a gázköltséget.

A Cairo, az erőteljes STARK stack és a GPS felerősíti a StarkNet versenyelőnyét a többalkalmazásos összesítés támogatásában.

Ebben a szakaszban a StarkNet egy teljesen működőképes keretrendszer lesz*több*alkalmazás futtatásához, tetszőleges üzleti logikával az Ethereum tetején, és minden példányt egyetlen operátor futtat.

Egy üzemeltető most létrehozhat egy StarkNet csomópontot, és az alkalmazásfejlesztők telepíthetik rá szerződéseiket. A felhasználók szemszögéből a StarkNet most úgy néz ki, mint az Ethereum, magasabb léptékkel.

#### **III. lépés – Univerzum: Decentralizált összesítés**

A StarkNet fejlődésének utolsó lépése a működés decentralizálása.

Az érdekes kutatási kérdések, amelyekkel most foglalkozunk, és amelyek ezt a szakaszt érintik, a következők: (i) a ZK-Rollupok használata a konszenzus elérésére szolgáló mechanizmusok javítására, és (ii) a kripto-gazdasági mechanizmusok tervezése a decentralizált StarkNet közreműködőinek&üzemeltetőinek (tranzakciós szekvenálóknak) ösztönzésére. bizonyítók stb.), hogy hatékonyan, tisztességesen és biztonságosan működjenek.

### **Következtetés**

A StarkWare a StarkNet-et, egy decentralizált, engedély nélküli STARK-alapú L2 ZK-Rollup-ot épít az Ethereum felett, amely támogatja a kairói nyelven alapuló általános számításokat.

A StarkNet lehetővé teszi az alkalmazások méretezését a biztonság veszélyeztetése nélkül, a felhasználókat ésszerű tranzakciós díjak megfizetését, valamint az egész ökoszisztéma jelentős növekedését és ígéreteinek teljesítését.

Örömmel hívjuk meg a fejlesztői közösséget, hogy[csatlakozzanak hozzánk](https://twitter.com/StarkWareLtd)ezen az úton.

**Frissítés (2021. november):**StarkNet Alpha élőben az Ethereum Mainnet oldalon