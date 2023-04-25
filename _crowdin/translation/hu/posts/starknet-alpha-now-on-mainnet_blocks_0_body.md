### TL;DR

* Alpha élőben a Mainneten
* Támogatja az általános számítást és az összeállítást
* Gyorsan növekvő közösség, fejlődő eszközök és alkalmazások
* A következő hetekben további funkciókat is folyamatosan vezetnek be
* Felelősség kizárása: ez egy alfa verzió (olvassa el az apró betűs részt lent)

### Bevezetés

A StarkNet Alpha ma elindul az Ethereum Mainnet-en!

A StarkNet egy engedély nélküli decentralizált Rollup, amely L2 hálózatként működik az Ethereumon keresztül. A StarkNet lehetővé teszi bármely dApp számára, hogy korlátlan méretarányt érjen el a számításai során, anélkül, hogy veszélyeztetné az Ethereum kompozícióját és biztonságát, köszönhetően a legbiztonságosabb és leginkább méretezhető kriptográfiai bizonyítékrendszernek –[STARK](https://starkware.co/stark/). A StarkNet a[Cairo](https://starkware.co/cairo/)programozási nyelvre épül, amely az első termelési szintű Turing teljes von-Neumann hitelesítő az Ethereumon. Mind a Cairot, mind a STARK-ot a StarkWare házon belül fejlesztette ki, és ezek működtetik az összes éles szintű alkalmazásunkat, amelyek 2020 nyara óta több mint 50 millió tx-t és 250 milliárd dollárt tettek ki.

Többek között a StarkNet Alpha általános számítási intelligens szerződéseket tesz lehetővé, amelyek támogatják az összeállítást, mind más StarkNet-szerződésekkel, mind L1<>L2 üzenetküldéssel az L1 szerződésekkel. A StarkNet Alpha összesítő módban működik, ami azt jelenti, hogy az összes állapot-diff adat a láncon belül kerül elküldésre.

Még januárban megosztottuk a StarkNet[ütemtervét](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880). Júniusban a StarkNet Alpha nyilvános tesztneten megjelent, és folyamatosan frissült új funkciókkal. Örülünk, hogy az ütemterv előtt járunk, részben annak köszönhetően, hogy támaszkodunk a gyártási szintű, harcedzett STARK/Cairo szoftvercsomagunkra.

### Hogyan kell kezelni a StarkNet Alfát?

Először is, nagy körültekintéssel, mivel az „Alfa” címke okkal van ott. Várható változások, javítások és fejlesztések. A StarkNet Alpha auditálása még nem történt meg, és előfordulhat, hogy elhalasztjuk az ellenőrzést, amíg a hálózat kifejlődik (további információért olvassa el a jelen bejegyzés végén található felelősségkizárást).

Általában az Optimistic Rollup munkatársaink által meghatározott óvatos és ésszerű utat követjük, nevezetesen az Arbitrumot és az Optimizmust: egyetlen szekvenszerrel indítsuk el a hálózatot, és engedélyezzük az alkalmazásokat annak érdekében, hogy a fejlesztők megértsék az ezzel járó kockázatokat. Továbbra is teljes mértékben elkötelezettek vagyunk a StarkNet teljes decentralizálása mellett.

És hogyan kell kezelni a StarkNet Alpha gazdaságtanát? Az Alpha tranzakciós díjak nélkül indul. A következő, csak néhány hét múlva esedékes frissítés díjmechanizmust vezet be – további részleteket egy külön bejegyzésben osztunk meg.

### Kezdje el az építést

Meghívjuk Önt, hogy kezdje el saját alkalmazásait a StarkNeten keresztül az (új!) [webhely](http://starknet.io/), vagy közvetlenül a[oktatóanyagra ugrás](https://starknet.io/docs/).

Ha készen áll a telepítésre, kövesse ezt a[beépítési folyamatot](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu); azért jött létre, hogy minden fejlesztő tisztában legyen a rendszer előzetes állapotával.

### Ökoszisztéma

Az elmúlt néhány hónapban elképesztő növekedést tapasztaltunk a StarkNet közösség méretében és aktivitásában, amely a[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)en gyűlik össze. Fejlesztők tucatjai – csapatok és magánszemélyek – a blokklánc ökoszisztémában járulnak hozzá ehhez az erőfeszítéshez. (Lásd a nyilatkozatot a bejegyzés végén)

#### Fejlesztői eszközök

* Az OpenZeppelin határozza meg a standard szerződéseket. Érdemes követni a[repo](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)és[megbeszéléseiket](https://github.com/OpenZeppelin/cairo-contracts/discussions)
* A Nethermind által kifejlesztett[Warp](https://github.com/NethermindEth/warp)Solidity–>Cairo transzpiler
* A Shard Labs[HardHat bővítménye](https://github.com/Shard-Labs/starknet-hardhat-plugin)és[StarkNet Devnet](https://github.com/Shard-Labs/starknet-devnet)
* Az Argent eszközöket fejleszt, beleértve a StarkNet.js-en végzett közös erőfeszítéseit, valamint[Sean Han](https://twitter.com/seanjameshan), annak készítője

#### Infrastruktúra

****blokkböngésző:

* [A Nethermind Voyager](http://voyager.online/)projektje
* [Az Eth.tx](https://ethtx.info/)támogatáselemzést és a StarkNet-tranzakciók részletes nézetét kínálja

**Teljes csomópont**: két erőfeszítés folyamatban: az egyik az Erigon által vezetett Fermion projekt, a másik a[Pathfinder](https://github.com/eqlabs/pathfinder)projekt, az Equilibrium vezetésével

**Pénztárcák**:

* [Az ArgentX](https://github.com/argentlabs/argent-x)az Argent által kifejlesztett böngészőbővítmény, amely már elérhető a fejlesztők számára
* A Torus kulcskezelési megoldása készen áll a StarkNetre
* A Ledger natív StarkNet alkalmazást fejleszt; év vége előtt elérhetővé kell tenni

**Cairo Audits**: A ConsenSys Diligence, a Trail of Bits, a Peckshield és az ABDK vagy már végez kairói auditokat, vagy hamarosan elkezdődik

**API-szolgáltatások**: miután a StarkNet teljes csomópontja elérhetővé válik, az API-szolgáltatásokat a Figment, a Chainstack és az Infura kínálja

**Indexer**: a Figment csapatával együtt azon fogunk dolgozni, hogy a TheGraph-t integráljuk a StarkNettel

### Az előttünk lévő út

Az elkövetkező hetekben és hónapokban a következő képességekkel frissítjük az Alfát:

* A szerződés bővíthetőségi mechanizmusa
* Díjmechanizmus
* Események
* Hiányzó rendszerhívások hozzáadása (get_block_number, get_block_timestamp stb.)
* A Volition csontvázas változata
* És még sok más …

Ennek az erőfeszítésnek a folyamatos nyomon követéséhez tekintse meg a funkciók[kísérleti útitervét](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51).

Tovább tekintve, továbbra is jelentős összegeket fektetünk be az aktív kutatásba több fronton (gyere, csatlakozz a[Shamans](https://community.starknet.io/)erőfeszítéshez):

* Decentralizálás
* Méretezés
* Az adatok elérhetősége
* Engedély nélküli ösztönzés

### Felhívás cselekvésre

* Kezdjen el szerződéseket írni a Goerli engedély nélküli StarkNet teszthálóján
* Csatlakozz a[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)hez
* Csatlakozzon a közösségi hívásokhoz
* Vegyen részt az első[StarkNet ökoszisztéma csúcstalálkozón](https://www.eventbrite.com/e/starknet-ecosystem-summit-2022-tickets-206671880157)(2022. január 27–28., Stanford CA)
* Csatlakozzon a[StarkNet Shamans](https://community.starknet.io/), hogy mélyebben belemerüljön a kutatási kihívásokba

### Jogi nyilatkozat

***A StarkNet Alpha egy új és összetett rendszer, amelyet még nem auditáltak teljesen. Mint minden összetett szoftverrendszer, a StarkNet rendszer is tartalmazhat hibákat, amelyek szélsőséges esetekben az összes pénzeszköz elvesztéséhez vezethetnek. Tehát***óvatosan lépj és vigyázz!******

*A StarkNet ökoszisztéma független csapatok és egyének nagy és gyorsan növekvő halmaza, amely felett a StarkWare nem rendelkezik felügyelettel, és nem vállal felelősséget. Az ökoszisztéma tagjai által kifejlesztett projektek bármelyike tartalmazhat olyan hibákat, amelyek szélsőséges esetekben az összes pénzeszköz elvesztéséhez vezethetnek. Továbbá, ahogy egyre több intelligens szerződés kerül bevezetésre, megnő a nem szándékos kártékony hibák, sőt a rosszindulatú csalások és szőnyeglehúzások lehetősége. Tehát kezelje a StarkNet összes intelligens szerződését úgy, mint az Ethereum intelligens szerződéseit, és csak azokat használja biztonságosnak, amelyekben alapos oka van megbízni.*