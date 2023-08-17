### TL;DR

* Új StarkNet szekvenszer fejlesztés alatt áll
* Az Apache 2.0 licenc alatt nyílt forráskódú
* Az első cél a StarkNet átviteli sebességének növelése

### Egy fényes új szekvenszer

Örömmel jelentjük be, hogy egy új StarkNet Sequencer készül. Ahogy a StarkNet technológiai stackje a nyílt forráskód felé halad,[Cairo 1.0](https://medium.com/starkware/open-sourcing-cairo-1-0-b3100a664bb0)és[Papyrus Full Node](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202)után, most a StarkNet új szekvenszerével folytatjuk. Nyílt forráskódú lesz, Apache 2.0 licenc alatt érhető el, és most megnézheti[a repo](https://github.com/starkware-libs/blockifier)!

Az új Sequencer építése a néhány hónappal ezelőtt bemutatott[StarkNet Roadmap](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de)része. Az új szekvenszer megvalósítása a**Blockfier**cseréjével kezdődik, amely a szekvenszeren belüli blokkvégrehajtást végző modul. Az ütemtervben leírtak szerint várhatóan előnyökkel jár a StarkNet teljesítménye szempontjából.

A szekvenszer felépítéséhez ugyanaz a megközelítés, mint a StarkNet Alpha esetében. A**szekvenszert**szakaszban fogjuk megvalósítani, és ma megosztjuk az első modulját. Idővel a szekvenszer új összetevői elkészülnek, míg végül egy Rust-alapú szekvenszer teljesen felváltja a jelenlegi Python-alapú szekvenszert.

### Mit csinál a szekvenszer?

A StarkNeten, miután a felhasználók tranzakciókat küldtek, a tranzakció STARK skálázáshoz vezető útjának első állomása a szekvenszerek. A StarkNet protokollban a szekvenszerek felelősek a tranzakciók megrendeléséért és a blokkok előállításáért. Miután a blokkot egy szekvenszer létrehozta, és a konszenzus protokoll jóváhagyta, a bizonyítók átveszik az irányítást és létrehoznak egy bizonyítást az L1-hez.

![](/assets/1_ndrekwqunjixo_wskdeycw-1.png)

### Nyílt forráskódú

A StarkNet Alpha 2021 novemberében indult a Mainneten. Kezdettől fogva elkötelezte magát, hogy megossza a világgal a STARK méretezés erejét.

Ma adjuk ki az első modult az új nyílt forráskódú szekvenszer moduljai közül. Az összes modul és almodul üzembe helyezése több hónapot vesz igénybe. A nyílt forráskódú minden lehetővé teszi a közösség tagjainak, hogy hozzájáruljanak a fejlesztéshez, és ellenőrizzék a kódbázist.

Ezzel közelebb kerül a StarkNet a decentralizált engedély nélküli szekvenálás pontjához. Jelenleg a StarkNet decentralizált protokollját tervezzük, és arra ösztönözzük a közösséget, hogy vegyen részt a[kutatásban és a vitában](https://community.starknet.io/t/starknet-decentralized-protocol-consensus/5386).

### Teljesítmény

A StarkNet eredeti szekvenszere nagyrészt a StarkEx infrastruktúra adaptációja. Most olyan infrastruktúrára van szükség, amelyet kifejezetten a decentralizált, nagy teljesítményű hálózat követelményeihez építettek.

A Rustba épített új szekvenszert a teljesítményt szem előtt tartva tervezték és fejlesztették. Az új szekvenszer is szilárd alapokra épít: a Papyrus, az új[StarkNet teljes csomópont,](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202)kezeli az állapotkezelést, a cairo-rs, a LambdaClass új Cairo-VM pedig felgyorsítja a Cairo végrehajtását. Arra számítunk, hogy az új szekvenszer minden szempontból jobb lesz a meglévő szekvenszerhez képest. A hálózat átviteli sebessége és késleltetése várhatóan drámai mértékben javulni fog a szekvenszer StarkNetbe történő integrálásával.

Arra számítunk, hogy más infrastruktúra és fejlesztési eszközök is képesek lesznek az új szekvenszerrel javítani a fejlesztési élményt. A csomópont teljes teljesítménye várhatóan javulni fog, csakúgy, mint az összes tesztelési keretrendszer.

### Összegzés

Örömmel jelentjük be ma az új nyílt forráskódú szekvenszert. Ennek első modulja már elérhető a közösség számára, és a következő hónapokban további modulokkal követhető. Örülünk annak is, hogy újabb lépést teszünk a StarkNet teljesítményének javítására irányuló ütemtervünkben. Célunk, hogy a hálózatot hatékonyabbá és elérhetőbbé tegyük, és köszönjük mindenkinek, aki csatlakozott hozzánk ezen az úton.