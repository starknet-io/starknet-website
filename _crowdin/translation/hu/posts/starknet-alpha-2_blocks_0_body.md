### TL;DR

* A StarkNet mostantól támogatja a kompozíciót, amely a StarkNet Csillagképek fázisát meghatározó fő funkció.
* Kiadunk egy tesztelési keretrendszert a StarkNet számára – a fejlesztők mostantól helyben és hatékonyan tesztelhetik szerződéseiket.
* Ez a kiadás számos figyelemre méltó teljesítményjavítást tartalmaz, mint például a Merkle-Patricia Tries támogatása és egy beépített bitenkénti műveletek.
* Ökoszisztéma front:

1. **Szabványosított szerződések**: Az OpenZeppelin szabványos szerződéseket fog fejleszteni a StarkNet számára, ahogyan az Ethereum esetében is!
2. **EVM->Cairo Compiler**: a Warp csapata @ Nethermind bemutatta az ERC-20 Solidity kód összeállítását StarkNet szerződésekhez

### Háttér

A StarkNet egy engedély nélküli decentralizált Validity-Rollup (más néven „ZK-Rollup”). [útitervét](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)az év elején hirdettük meg. A jelenleg nyilvános Ethereum teszthálózaton futó[Alpha](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f)már támogatja az intelligens szerződések engedély nélküli telepítését, bármilyen üzleti logikát megvalósítva, L1<>L2 üzenetkezeléssel és láncon belüli adatokkal. Ezenkívül lehetővé teszi bármely felhasználó számára, hogy Ethereum-stílusban engedély nélkül küldjön tranzakciókat a hálózatra.

Ez a StarkNet Alpha 2 kiadás tartalmazza azt az alapvető funkciót, amely lehetővé teszi számunkra, hogy a bolygókról a Constellations felé haladjunk: a telepített intelligens szerződések közötti kompozíció.

### Jellemzők

A StarkNet Alpha 2 a következő funkciókat vezeti be:

* **Összeállíthatóság:**A StarkNet Alpha mostantól támogatja az intelligens szerződések közötti interakciót – a határidő előtt! Ennek a frissítésnek az a szépsége, hogy a fejlesztők szinte ugyanolyan élményre számíthatnak, mint az Ethereum; a hívások szinkronok és funkcióhívásként használhatók. Kíváncsian várjuk az új alkalmazásokat, amelyek a korlátlan számítási léptékből és a szerződéses kompozícióból egyaránt profitálnak, amint azt a StarkNet felszabadította. A funkció használatának megértéséhez először kövesse ezt a[oktatóanyagot](https://www.cairo-lang.org/docs/hello_starknet/calling_contracts.html). Szeretnénk hallani visszajelzését, és látni, hogy mit épít a[StarkNet diszkordon](https://discord.gg/uJ9HZTUk2Y).
* **Helyi tesztelési keretrendszer:**Ön kérte, és mi leszállítottunk –[jobb tesztelési keretrendszert](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/starknet/testing). Ez lehetővé teszi a fejlesztők számára, hogy felgyorsítsák dApp-fejlesztésüket azáltal, hogy helyileg tesztelik StarkNet szerződéses telepítéseiket és interakcióikat – külső függőségek nélkül. Ez a verzió csak az L2 interakciót tartalmazza, a következő verziók bővítik a funkcionalitást és a könnyű használatot. Tekintse meg az oktatóanyagot[itt](https://www.cairo-lang.org/docs/hello_starknet/unit_tests.html), és szeretnénk hallani visszajelzését erről a funkcióról.
* **Teljesítményfejlesztések:**

**Patricia Trees:**továbbfejlesztettük a StarkNet tervezését, hogy támogassa a nagyobb átviteli sebességet és a rövidebb próbagenerálási időt, áttérve a Merkle-Patricia Tree állam kötelezettségvállalására ([dokumentáció](https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/cairo/common/patricia_utils.py)). Ez a változtatás lehetővé teszi sokkal nagyobb blokkok létrehozását, így csökkentve a tranzakciónkénti költséget. A kifinomultabb állami elkötelezettség felé való elmozdulást a Kairó, a ZKP nyelv tette lehetővé, amely a StarkNet operációs rendszer alapvető összetevője.

**Bitenkénti műveletek:**hozzáadtunk egy[beépített](https://www.cairo-lang.org/docs/how_cairo_works/builtins.html), hogy támogassa a sokkal hatékonyabb bitenkénti műveleteket a StarkNet szerződésekben ([dokumentáció](https://www.cairo-lang.org/docs/reference/common_library.html#common-library-bitwise)).

* **Goerli:**StarkNet költözik Ropstenből[Goerli](https://goerli.etherscan.io/address/0xee02F29aE9A4988aE064940bF11954d6eafE26Ac)ba! Végre megszabadítottuk rendszerünket a Ropsten-istenek szeszélyeitől. Az Alpha 2 mostantól egy stabilabb fejlesztői környezetben fut majd.

### Ökoszisztéma

A StarkNet ökoszisztémája folyamatosan növekszik, és örömmel osztjuk meg a legfrissebb híreket:

* **Szabványos szerződések**: Megtiszteltetés számunkra, hogy az OpenZeppelinnel együtt dolgozhatunk a StarkNet szabványos szerződések könyvtárában. Az Ethereum szabványosított szerződéseivel kapcsolatos kanonikus munkájuk mindennap mindannyiunkat szolgálja, és biztosak vagyunk benne, hogy itt is ugyanolyan hatásosak lesznek.
* **EVM->Cairo Compiler**: A Nethermind's Warp[csapata](https://medium.com/nethermind-eth/warp-your-way-to-starknet-ddd6856875e0)ERC-20 szerződés transzpilációját EVM bájtkódról StarkNet szerződésre mutatta be, és telepítést StarkNeten. Ez az erőfeszítés gyorsan halad, és a következő célunk az önkényes intelligens szerződések átvitele Yulból Kairóba.
* **Maker-on-StarkNet**: egy[javaslatot](https://forum.makerdao.com/t/mip39c2-sp19-adding-the-starknet-engineering-core-unit-sne-001/9745)nyújtottak be a Maker DAO-nak a Maker protokoll StarkNeten keresztüli megvalósítására. Az első fázis DAI-híd létrehozását javasolja az Ethereum és a StarkNet között, majd a DAI-t a StarkNet-en verik.
* **StarkNet/Cairo Auditing Services**: több könyvvizsgáló céget bízunk meg a StarkNet intelligens szerződések és a kairói programok könyvvizsgálati szolgáltatásaival.

### Mainnet a sarkon

Készülünk a StarkNet Alpha Mainnet elindítására, fokozatosan kezdve az alkalmazások engedélyezési listájával. Számos projekt van folyamatban, és napról napra újabbak bővülnek. Ha csatlakozni szeretne a bulihoz, lépjen kapcsolatba[discord](https://discord.gg/uJ9HZTUk2Y)en keresztül.

**Frissítés (2021. november):**StarkNet Alpha élőben az Ethereum Mainnet oldalon