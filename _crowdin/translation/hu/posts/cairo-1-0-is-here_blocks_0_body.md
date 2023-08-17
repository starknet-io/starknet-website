### TL;DR

* Megérkezett a Cairo 1.0 első kiadása!
* A fejlesztők megkezdhetik a Cairo 1.0 programok írását és tesztelését
* A Cairo régebbi verziójával a funkciók párosítása a következő hetekben fog megvalósulni
* A StarkNet-szerződések támogatása a következő StarkNet Alpha verzióban lesz hozzáadva

### Háttér

Örömmel jelentjük be, hogy a Cairo 1.0 első nyilvános verziója már elérhető. Ez jelentős mérföldkövet jelent Kairó fejlődésében, amelyet először 2020-ban vezettek be, mint Turing-komplett programozási nyelvet a STARK által igazolható programok hatékony írásához. A Cairo 1.0 egy Rust-szerű magas szintű nyelv. A Rusthoz hasonlóan ez is lehetővé teszi a fejlesztők számára, hogy hatékony és biztonságos kódot írjanak könnyen.

Megalakulása óta Kairót olyan Layer-2 alkalmazások készítésére használták, amelyek[több mint 790 milliárd dollár értékű ügyletet bonyolítottak le, több mint 300 millió tranzakciót dolgoztak fel és több mint 90 millió NFT-t vertek](https://dashboard.starkware.co/starkex)mindezt a láncon kívül hajtották végre, és az Ethereumon számoltak el a a STARK bizonyítások által garantált matematikai integritás. Kairó lett a 4. leggyakrabban használt programozási nyelv a blockchain[ökoszisztémában](https://defillama.com/languages). A Cairo 1.0 kiadásával arra törekszünk, hogy a nyelvet még elérhetőbbé és felhasználóbarátabbá tegyük, miközben olyan új funkciókat is bevezetünk, amelyek növelik a biztonságot és a kényelmet.

A Cairo 1.0 egyik legjelentősebb változása a szintaxis. **Rust**ből merítettünk ihletet egy fejlesztőbarátabb nyelv létrehozásához, amely könnyebben olvasható és írható. A Cairo új verziója lehetővé teszi a biztonságosabb kód írását (erősen gépelt, tulajdonjog és kölcsönzés stb.), miközben kifejezőbb is.

A Cairo 1.0 bemutatja a Sierra-t is, egy új köztes reprezentációt, amely biztosítja, hogy minden</strong>kairói futás**legyen. Ez teszi a Cairo 1.0-t különösen alkalmassá olyan engedély nélküli hálózatokban, mint a StarkNet, ahol robusztus DoS-védelmet és cenzúraállóságot tud biztosítani. A Sierráról bővebben[előző](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)bejegyzésünkben olvashat.</p>

## Első ízelítő!

### Mit tehetsz ma?

A fejlesztők megkezdhetik a Cairo 1.0 programok írását, fordítását és tesztelését! Arra biztatjuk a fejlesztőket, hogy kezdjenek kísérletezni a Cairo 1.0-val, és szokjanak hozzá az új szintaxishoz és funkciókhoz.

Mivel a Cairo 1.0-t még mindig aktívan fejlesztik, és folyamatosan új funkciókat adnak hozzá, tekintse meg a[Cairo](https://github.com/starkware-libs/cairo/)adattárat a legújabb frissítésekért.

### Mi a következő lépés?

Jelenleg a Cairo 1.0-ból még hiányzik néhány, a Cairo régebbi verziójában támogatott funkció ([a részletekért lásd ezt a táblázatot](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)). Következő mérföldkövünk, amely a következő hetekben várható, a Cairo 1.0 funkciója egyenértékű lesz a régebbi verzióval. Itt követheti nyomon a[mérföldkő felé tett előrehaladást](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md).

### Starknet támogatás

A StarkNet szerződések Kairo 1.0-ban történő írása támogatott (bár bizonyos funkciók még hiányoznak). A StarkNet azonban még nem támogatja a Cairo 1.0-s szerződések telepítését és végrehajtását. A következő hetekben tervezett StarkNet Alpha V0.11.0 lehetővé teszi a Cairo 1.0 szerződések telepítését és futtatását. A 0.11.0-s verzióra való frissítés az átmeneti időszak kezdetét fogja jelölni egy olyan rendszer felé, amely csak a Cairo 1.0-s szerződéseket futtatja. Ez az átmeneti időszak a[Regenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)vel zárul, várhatóan néhány hónappal később.

![](/assets/0_odxbxeacqdwizlfw.jpg)

### Építsünk!

A StarkNet célja az Ethereum exponenciális skálázása a STARK-ok matematikai integritásának felhasználásával, Kairó célja pedig az, hogy ezt az exponenciális skálát elérhetővé tegye a fejlesztők számára. Az akadálymentesítés olyan programozási nyelvet jelent, amely hatékony, könnyen olvasható és írható, valamint biztonságosan használható. Reméljük, hogy a Cairo 1.0 megjelenése még több fejlesztőt ösztönöz majd arra, hogy csatlakozzanak a StarkNethez, és az Ethereumot a globális kereslet kielégítésére méretezzék.