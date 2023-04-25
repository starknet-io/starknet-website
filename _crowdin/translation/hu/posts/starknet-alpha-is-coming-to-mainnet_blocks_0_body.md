### TL;DR

* *A StarkNet Alpha novemberben indul a Mainnet Ethereumon*
* Itt az ideje a StarkNetre építeni

### Egy rövid történelem

Az év elején bejelentettük[StarkNet](https://starkware.co/product/starknet/)re vonatkozó víziónkat: hatalmas méretezhetőséget hozunk az Ethereumba, miközben megőrizzük az első szintű biztonságot, az engedély nélküli interakciókat és a decentralizációt.\
Júniusban megjelentettük a**[StarkNet Alpha](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)**et nyilvános tesztneten. Ez a verzió támogatta a teljesen engedély nélküli általános számítási intelligens szerződéseket. Azóta kétszer frissítettük: először**Alpha 1**re –[L1<>L2 üzenetküldést és láncon belüli adatokat biztosítva](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), majd**Alpha 2**– támogatja[kompozíciót](https://medium.com/starkware/starknet-alpha-2-4aa116f0ecfc).

A StarkNet Alpha 2 mostantól támogatja az általános számítások összeállítható intelligens szerződéseit Ethereum-szerű állapotban, azzal a képességgel, hogy az L1 és L2 szerződések kölcsönhatásba léphessenek egymással. Bővebben[itt](https://www.cairo-lang.org/docs/hello_starknet/index.html).

### Mi az a StarkNet Alpha a Mainneten?

A Mainneten található StarkNet Alpha a Goerli nyilvános teszthálózatán jelenleg elérhető funkciókhoz hasonló szolgáltatásokat fog támogatni.

#### **Mi várható**

Mivel a StarkNet még fejlesztés alatt áll, lépésről lépésre szeretnénk bevezetni a képességeket, és biztosítani szeretnénk, hogy a fejlesztői elvárások minden lépésben megfeleljenek. Két különösen fontos szempontot szeretnénk hangsúlyozni:

* **Engedélyezett intelligens szerződéses telepítés**: Követjük az Optimistic Rollup kollégák által bevezetett ésszerű útmutatót: kezdje*engedélyezett*szerződéses telepítéssel. Az elkövetkező hetekben közzétesszük azt a protokollt, amely meghatározza, hogyan kérheti az intelligens szerződés felvételét az eredeti engedélyezési listára.
* **Nincs garancia a visszamenőleges kompatibilitásra**: azt várjuk, hogy a StarkNet Alfáról a StarkNet Bétára való jövőbeni átállás magában foglalja az állapot újraképződését. A hálózat a 0. blokktól indul, és az alkalmazásoknak újra kell telepíteniük a szerződéseiket. Ezenkívül a fejlesztőknek és a felhasználóknak meg kell jegyezniük, hogy a várható StarkNet Beta nem biztos, hogy visszafelé kompatibilis a StarkNet Alpha-val, például a fejlesztőknek módosítaniuk kell a szerződéseiket. Nyilvánvalóan igyekszünk egyszerű átállást biztosítani az alkalmazások számára, minimális szükséges változtatásokkal.

#### További rövid távú szolgáltatások

A StarkNet Alpha testnetről Mainnetre való átállásának részeként:

1. Konstruktorok hozzáadása a szerződésekhez.
2. Javítsa a tesztelési keretet.
3. A blokkok és tranzakciók esetében térjen át az azonosító használatáról a hash használatára.

Azt tervezzük, hogy az új funkciók rendszeres ütemben történő bevezetését folytatjuk, ugyanúgy, mint a nyilvános teszthálózaton. A közeljövőben a következő fejlesztéseket tervezzük:

1. Számlaszerződések és token szerződések – megnyitják az utat a DeFi alkalmazások számára, hogy a StarkNettel az általuk ismert módon kommunikáljanak.
2. Továbbfejlesztett szerződési funkcionalitás – támogatja a szerződések frissítését és az eseményeket.
3. Warp: a Nethermind által kifejlesztett Solidity-to-Cairo fordító lehetővé teszi a zökkenőmentes átállást a Solidity intelligens szerződésekről a StarkNet intelligens szerződésekre.
4. Ethereum Signatures: Az ECDSA natív támogatása a secp256k1-en keresztül, könnyebben integrálható a meglévő pénztárcákkal.
5. StarkNet teljes csomópont: a teljes csomópont lehetővé teszi a felhasználók számára, hogy olyan hardverkövetelményekkel vegyenek részt a hálózatban, mint az Ethereum Full Node.

#### Díjmechanizmus

A díjmechanizmus bekapcsolódik, amint a számlaszerződések és a token szerződések hozzáadódnak a StarkNet Alpha-hoz.

A StarkNetnek benyújtott minden tranzakció díjat számít fel, amely fedezi az L1 és a láncon kívüli költségeket. A díj kezdetben ETH-ban kerül felszámításra. Egyetlen tranzakció költsége csökkenni fog, ahogy a StarkNet növeli a léptékét (mint az összes létező STARK-alapú rendszer esetében). A kezdeti díjmechanizmusok kialakításakor az egyszerűséget részesítjük előnyben a tranzakciók pontos árazásával szemben, az általuk felhasznált erőforrások szerint. Számíthat arra, hogy ezt a mechanizmust idővel finomítani és továbbfejleszteni fogják.

A StarkNet fenntartható hálózattá tétele és üzemeltetőinek és fejlesztőinek ösztönzése érdekében a díjakból befolyt bevétel egy részét az alkalmazásfejlesztők és a StarkNet alapfejlesztői között osztják szét.

#### Biztonság

A StarkNet Alpha biztonsági modellje a Mainnet hálózaton a jelenlegi modellt követi a testneten:

* Minden állapotátmenetet egy STARK bizonyítvány támogat, így biztosított az érvényesség.
* Az összes állapotadatot közzéteszik a láncon, így az állapot teljes mértékben létrehozható lesz az L1-ből.
* Egyetlen szekvenszer lesz.
* A hálózat időbeli késedelem nélkül frissíthető lesz.

### A StarkNet ökoszisztéma növekszik

A StarkNet megnyitása a világ előtt a fejlesztők hatalmas hullámát vonzotta, akik érdeklődtek Kairó tanulása és a StarkNeten keresztüli fejlesztés iránt. Felbecsülhetetlen értékű visszajelzést adtak, és igazi öröm volt látni élénk vitákat a StarkNet[Discord](https://discord.gg/uJ9HZTUk2Y)en.

Ráadásul a StarkNet-et nem csak a StarkWare csapata fejleszti, hanem a blokklánc ökoszisztéma legerősebb csapatai is:

* A Nethermind két projekten dolgozik:

1. **[Warp](https://github.com/NethermindEth/warp)**: a Solidity to Cairo fordító

2. **[Voyager](https://voyager.online/)**: egy StarkNet blokk felfedező

* Az Open Zeppelin egy[Standard Contracts](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)implementáción dolgozik a StarkNet számára, és elkezdett dolgozni egy fejlesztői környezeten is:[Nile](https://github.com/martriay/nile).
* A ShardLabs egy[StarkNet HardHat plugin](https://github.com/Shard-Labs/starknet-hardhat-plugin)és egy jobb tesztelési keretrendszeren dolgozik.
* Az Erigon csapata azon dolgozik, hogy kibővítse Ethereum Full Node-ját a StarkNet (kódnév: Fermion) támogatására. Velünk dolgoznak a StarkNet alapvető mechanizmusainak tervezésén.
* Az Equilibrium egy StarkNet Full Node implementáción dolgozik Rustban,
* Kairói audit szolgáltatások: A következő hónapokban az ABDK, a ConsenSys Diligence, a Peckshield és a Trail of Bits kairói auditokat fog végezni.
* StarkNet auditok: a hálózat alapjainak auditálásával kezdtük:

1. **CryptoExperts**fogja lefolytatni a Cairo Solidity Verifier auditálását.
2. A kairói specifikációk hivatalos**LEAN-próbája**nemrég készült el, és[papír](https://arxiv.org/abs/2109.14534)és GitHub[repo](https://github.com/starkware-libs/formal-proofs)formájában jelent meg.

További érdekes együttműködések megjelenésére számíthatunk a következő hónapokban!

### A STARK-ok ma skálázódnak

Magabiztosan közelítjük meg a StarkNet Alpha elindítását, mivel a StarkEx, az önálló skálázható SaaS-ünk bemutatta, hogy a STARK-ok miként képesek az Ethereum-alkalmazások masszív méretezésére. Elindítottuk a StarkEx-et[dYdX](https://dydx.exchange/)ért (örökös szerződések),[DeversiFi](https://www.deversifi.com/)ért (azonnali kereskedés és fizetés), valamint[Immutable](https://www.immutable.com/)ért és[Sorare](https://sorare.com/)ért (NFT pénzverés és kereskedés). Láttuk, hogy a gáz/tx-költségeik 100-200-szorosára csökkentek, körülbelül 650 gáz/tx-re a Validiumban (láncon kívüli adatok), és 1100 gáz/tx-re a ZK-Rollup esetében.

A StarkEx a mai napig 80 milliárd dollárt bonyolított le ügyletekben és több mint 27 millió tranzakcióban, messze felülmúlva minden más L2-es megoldást – és mindezt együttvéve.

### Cselekedj most

Soha nem volt jobb alkalom, hogy csatlakozzon a növekvő StarkNet ökoszisztémához a következő dApp vagy hasznos fejlesztői eszközök megépítésével.

Meghívjuk Önt, hogy:

1. Csatlakozz a[StarkNet Discordhoz](https://discord.gg/uJ9HZTUk2Y), ahol találkozhatsz a StarkNet közösséggel és kapcsolatba léphetsz vele.
2. [Kezdje el megtanulni](https://www.cairo-lang.org/docs/hello_starknet/index.html)hogyan írjon StarkNet intelligens szerződéseket.
3. [DM nekünk](https://twitter.com/StarkWareLtd)— csapatunk szívesen segít az Ön ötletei és kezdeményezései életre keltésében.

**Frissítés (2021. november):**A StarkNet Alpha élőben az Ethereum Mainnet oldalán