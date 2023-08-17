### TL;DR

A StarkNet Alpha 1 két új funkcióval rendelkezik:

* L1<>L2 interakció
* Láncon belüli adatok

### Bevezetés

Az év elején bejelentettük, hogy a StarkWare megépíti[StarkNet](https://starkware.co/product/starknet/), egy engedély nélküli, decentralizált STARK-alapú ZK-Rollup¹ot, amely L2 hálózatként működik az Ethereumon keresztül. A StarkNet lehetővé teszi bármely dApp számára, hogy korlátlan méretarányt érjen el a számításaihoz – anélkül, hogy veszélyeztetné az Ethereum kompozícióját és biztonságát.

A múlt hónapban megjelent[StarkNet Alpha 0](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)a világnak. A fejlesztők most először tudnak</a>intelligens szerződést

megírni, és engedély nélkül telepíteni egy ZK-Rollupba. A felhasználók tranzakciókat küldhetnek a hálózatra, Ethereum-stílusban.</p> 

Ma új verziót adunk ki; Alfa 1. A funkciókat folyamatosan adjuk ki, hogy a fejlesztők a lehető leghamarabb kapcsolatba léphessenek az új funkciókkal. Arra számítunk, hogy ez megszorítja a visszajelzési ciklust, és lehetővé teszi a közösségi visszajelzések gyors fejlesztését a StarkNetben.



### **Alpha 1 jellemzői**



#### L1<>L2 Interakció

Az Alpha 1 tartalmaz egy L1<>L2 üzenetküldő protokollt, amely lehetővé teszi a fejlesztők számára, hogy zökkenőmentes tranzakciós folyamatokat hajtsanak végre az L1 és L2 között. A fejlesztők mostantól üzeneteket küldhetnek az L1-es szerződésekről az L2-es szerződésekre és fordítva.

A ZK-Rollups egyik szépsége, hogy az állapotfrissítések véglegesek, minden késedelem nélkül. Ez azt jelenti, hogy az L2-ről L1-re küldött üzenetek azonnal továbbíthatók a célszerződésükhöz. Ez megnyitja az utat olyan alkalmazások létrehozásához, amelyek valóban interoperábilisak a rétegek között.

Szeretné kipróbálni? Az első lépések legjobb módja az itt található[oktatóanyag követése](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html).

L1<>L2 protokollunk sokat köszönhet más L2-eknek (különösen az Optimism és az Arbitrum), amelyeknek ezen a területen végzett korábbi munkája befolyásolta a tervezésünket.



#### On-chain adatok elérhetősége

A StarkNet állapotfrissítése mostantól láncon belüli adatként is megjelent az Ethereumon. Ez lehetővé teszi bármely felhasználó számára a StarkNet állapotának teljes létrehozását az L1 adatokból. Minden állapotfrissítés tartalmazza az állapotkülönbséget, azaz azt, hogy melyik tárhelyet módosították és annak új értékét.

A ZK-Rollup itt is megmutatja erejét. Ellentétben az Optimistic Rollup-okkal, amelyekben a tranzakciók teljes adatait a láncon belül kell elküldeni, a ZK-Rollups-ban csak az állapotkülönbség származtatásához szükséges abszolút minimális adat kerül elküldésre a láncon.

Tekintsünk egy kiváló példát, az ár orákulumokat. Az ár-orákulum frissítésére irányuló tranzakció általában több tranzakciót tartalmaz, de csak egy tárolócellát frissít; a pár ára. Az Optimistic Rollupban az Oracle ártranzakciókat tartalmazó állapotfrissítéshez szükséges láncon belüli adatok a frissítések számával lineárisan nőnek, míg a ZK-Rollupban ez mindig egyetlen tárhelyfrissítés lesz.

Sőt, a közzétett adatokra tömörítési algoritmusok is alkalmazhatók, melyek érvényességét a STARK bizonyítvány igazolja, tovább csökkentve a láncon belüli lábnyomot. A StarkNet jövőbeli verziói innovatív optimalizálásokat vezetnek be ezen a területen.



#### StarkNet OS

Kiadjuk a StarkNet operációs rendszer kódját is. A StarkNet OS a kairói program, amely a StarkNet-et futtatja. Az operációs rendszer mindent kezel, ami a hálózaton történik – a szerződések telepítését, a tranzakciók végrehajtását, az L1<>L2 üzeneteket és egyebeket. A StarkNet OS architektúráját és kialakítását egy külön bejegyzésben ismertetjük részletesen.



#### Extra funkciók

Nem csak a StarkNet Alpha fejlődött, hanem folyamatosan fejlesztjük Kairót is. A Cairo v0.3.0 új funkcióinak teljes leírásához tekintse meg a kiadási megjegyzéseket[itt](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.3.0).



### Az ökoszisztéma növekszik

A StarkNet Core-on végzett folyamatos munka mellett az ökoszisztéma StarkNeten végzett munkája folyamatosan bővül. Nagy örömünkre szolgál, hogy az ökoszisztéma legtehetségesebb csapataival dolgozhatunk együtt.

A Fermiont, a StarkNet első teljes csomóponti erőfeszítését az Erigon (korábban TurboGeth) csapata fejlesztette ki. Az Ethereumon való munka során szerzett hatalmas tudásukra alapozva képesek vagyunk együttműködni velük egy erőteljes Full Node felépítésében, amely számos leckét tartalmaz az Ethereum építése során, miközben kihasználja a STARK bizonyítékok által kínált léptéket.

A Nethermind a Warp-on dolgozik, amely egy fordító az EVM-től Kairóig. Kötelezettek vagyunk a kultúránkhoz, miszerint az új eszközöket csak akkor mutatjuk be, ha már készen vannak, csak annyit mondhatunk, hogy hamarosan izgalmas hírekre számíthatunk ezen a téren! Azt azonban elmondhatjuk, hogy elvetemült sebességgel haladnak.



### Mit tartogat a jövő

A StarkNet felé vezető utunk következő állomása a kompozíció lesz, amely lehetővé teszi a szerződések egymás közötti kölcsönhatását. Maradjon velünk.

[StarkWare](https://starkware.co/)

1 Ahogy korábban is mondtuk, a ZK-Rollup mára egy általánosan használt kifejezés, mégis nagyon félrevezető: ezek a megoldások (jelenleg) nem kínálnak nulla tudást.

**Frissítés (2021. november):**StarkNet Alpha élőben az Ethereum Mainnet oldalon