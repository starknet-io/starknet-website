### **TL;DR**

* [StarkNet Planets Alpha](https://voyager.online/)– a Mainnet felé vezető utunk első lépése – már elérhető a Testneten!
* [A StarkNet](https://starkware.co/product/starknet/)egy engedély nélküli Turing-teljes ZK-Rollup¹.
* A fejlesztők az általuk választott üzleti logikát egy intelligens szerződésben implementálhatják, és engedély nélkül telepíthetik a StarkNeten.
* A StarkNet állapotátmenetei bizonyítottan off-chain, majd láncon belüli ellenőrzések.
* Az Ethereumhoz hasonlóan a felhasználók közvetlenül kommunikálhatnak ezekkel az intelligens szerződésekkel.

### **Bevezetés**

2021 januárjában bejelentettük[](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)[StarkNet](https://starkware.co/product/starknet/)ütemtervét. A skálázhatósági megoldások Szent Grálja támogatná (i) tetszőleges intelligens szerződéseket, (ii) kompozícióval, (iii) decentralizált hálózaton keresztül működtetve. Ma bejelentjük az 1. lépés: StarkNet Planets Alpha tesztneten történő telepítését. Az Alpha rendszer tetszőleges intelligens szerződéseket támogat. A kompozíciót még ebben az évben támogatni fogják, majd decentralizáció következik.

Nagyon fontos számunkra, hogy teljesen átláthatóak legyünk, és megfelelően fogalmazzuk meg az elvárásokat. Ennek a bejegyzésnek az a célja, hogy egyértelműen felsorolja, mi a már támogatott, és mely funkciók hiányoznak még. Amit ma adunk ki, az a Work in Progress on testneten. Meggyőződésünk, hogy ez a korai kiadás elősegíti a StarkNet és eszközei körüli egészséges ökoszisztéma kialakulását. Szeretnénk bevonni a fejlesztőket a velünk közös hálózatépítésbe, és folyamatos visszajelzést kapni a közösségtől.

### **Mi van a StarkNet Planets Alfában?**

**Funkcionalitás:**Az Alpha lehetővé teszi a fejlesztők számára, hogy StarkNet szerződéseket írjanak és telepítsenek általános számításokhoz. Nincs engedélyezőlista – bármely fejlesztő bármilyen szerződést írhat és telepíthet. A felhasználók úgy léphetnek kapcsolatba ezekkel a szerződésekkel, hogy tranzakciókat küldenek nekik, és ellenőrizhetik állapotukat. Minden szerződés egyetlen államban létezik². Az ehhez az állapothoz tartozó frissítések bizonyítottan off-chain, és láncon belül ellenőrzik – az Alfában az ellenőrzés a testneten történik.

**StarkNet OS:**A fenti funkcionalitást egy új „operációs rendszer” támogatja, amelyet StarkNet OS-nek hívunk. *bizonyítható*állapotátmenetet kínál a StarkNeten. Az Ethereum fejlesztői úgy gondolhatják, mint az EVM megfelelőjét: felelős az intelligens szerződéses funkciók előhívásáért, a szerződések tárolásának kezeléséért stb. A StarkNet OS architektúráját külön bejegyzésben fogjuk közzétenni.

**Mi nincs az Alfában?**Az Alpha-ból még mindig hiányzik néhány kulcsfontosságú képesség, mint például az L1<>L2 interakció, a láncon belüli adatok és a kompozíció. Ezekről bővebben alább.

#### **Nedvesítse a lábát**

Kezdje[oktatóanyagunkkal és dokumentációnkkal](https://www.cairo-lang.org/docs/hello_starknet/).

Ezután elolvashatja az általunk írt és a StarkNeten telepített[minta AMM intelligens szerződést](http://cairo-lang.org/docs/hello_starknet/amm.html). Ez egy egyszerű AMM, és itt[kommunikálhat vele](https://starkware-amm-demo.netlify.app/swap). Most már készen áll az intelligens szerződések megírására és telepítésére a StarkNeten. A StarkNet blokkböngészője –[Voyager](https://voyager.online/)– bárki számára lehetővé teszi a StarkNet állapotának ellenőrzését.\
Ha megnedvesíti a lábát, úgy gondoljuk, hogy jobban felkészült lesz a StarkNetre való építkezésre, mivel folytatjuk a további funkciók bevezetését. Már az első hackathon, valamint a fejlesztői workshopok tervezésén dolgozunk.

### **A StarkNet következő lépései**

Az Alfából még hiányzó kulcsfontosságú képességek a következő hetekben kerülnek bevezetésre. Ezek:

* L1<>L2 Interakció, pl. az L1-ben történő befizetés és pénzfelvétel lehetősége.
* Láncon belüli adatok: az összes tárolási változás közzététele az Ethereumon.
* Összeállíthatóság: lehetővé teszi, hogy a szerződések kommunikáljanak egymással.

Ha ezekkel a funkciókkal a helyükön van, készen állunk arra, hogy a StarkNet az Ethereum Mainnet-re hozzuk. Ezt a lépést a StarkNet evolúciós konstellációiban hívjuk, és amikor elérjük, képes lesz az Ethereum Mainnet méretezhető L2 dApps-ok létrehozására és engedély nélküli telepítésére.

#### **A StarkNet ökoszisztéma**

Nagyon izgatottak vagyunk a StarkNet körül kialakuló ökoszisztéma miatt, ezért megállunk, hogy megköszönjük eddigi munkatársainknak.

Szorosan együttműködünk[Nethermind](https://twitter.com/nethermindeth)és a Nubia csapattal,[Alexey Akhunov](https://twitter.com/realLedgerwatch)(Erigon) &[Igor Mandrigin](https://twitter.com/mandrigin)(gateway.fm),[Iddo Bentov](https://www.cs.cornell.edu/~iddo/),[dOrg](https://twitter.com/dOrg_tech),[Prof. Tim Roughgarden](https://twitter.com/algo_class),[Prof. Jeremy Avigad](https://www.andrew.cmu.edu/user/avigad/)& Yoav Seginer, végül, de nem utolsósorban a[Paradigm](https://twitter.com/paradigm)csapat.\
Korai partnereink –[dYdX](https://twitter.com/dydxprotocol),[Immutable](https://twitter.com/Immutable),[DeversiFi](https://twitter.com/deversifi), valamint[Sorare](https://twitter.com/SorareHQ),[Celer](https://twitter.com/CelerNetwork)és mások – már az első naptól kezdve felbecsülhetetlen értékű inputot nyújtottak számunkra, és lehetővé teszik számunkra, hogy egy produkciót építsünk. - minőségű hálózat valódi felhasználók számára.\
Továbbra is lenyűgöz bennünket a közösség által létrehozott tartalom minősége, olyan emberek által, mint[Bobbin Threadbare](https://twitter.com/bobbinth),[Daniel Kroni](https://github.com/danielkroeni/cairo-playground/blob/main/anon-bank/README.md),[Adrian Hamelink](https://twitter.com/adr1anh),[perama](https://twitter.com/eth_worm),[Francesco Ceccon](https://twitter.com/ceccon_me),[Mala](http://twitter.com/imalchev)és a[Alexandria csapata](https://blockchainpartner.fr/).

Kíváncsian várjuk, hogy a közösség mit fog létrehozni minden területen: fejlesztői eszközöket, tartalmat és természetesen StarkNet alkalmazásokat, amelyeket ők fognak építeni. Folytassuk a beszélgetést az Ön által választott kedvenc médián:[discord](https://discord.gg/uJ9HZTUk2Y),[Twitter](https://twitter.com/CairoLang),[email](mailto:info@starkware.co), és hamarosan a legdecentralizáltabb kommunikációs formák használatával: f2f.

¹ Nem rajongunk a ZK-Rollup kifejezésért, mivel – matematikailag – ez nem nulla tudás, de mindenki tudja, mire gondolunk.

² Ellentétben a Mainnet jelenlegi StarkEx-telepítéseihez fenntartott külön állapottal

**Frissítés (2021. november):**A StarkNet Alpha élőben az Ethereum Mainnet oldalán