### TL;DR

* Megosztunk egy részletes Regenesis tervet, amelyet a StarkNet közösséggel folytatott kiterjedt megbeszélések alakítottak ki. Külön köszönet Kuba@SWM-nek.
* A Regenesis a Cairo 1.0 megjelenését követi, így a rendszer biztonságosabb lesz az egyszerűbb és biztonságosabb StarkNet szerződések lehetővé tételével
* A felhasználóknak fel kell készülniük arra, hogy frissítsék pénztárcájukat az átmeneti szakaszban
* A fejlesztőknek át kell vinniük szerződéseiket a Cairo 1.0-ra

### Bevezetés

A StarkNet Alpha a Regenesis felé halad, ami egy fontos lépés a gyártás felé. Ebben a frissítésben szeretnénk további részleteket megosztani a Regenesis fő motivációjáról –[Cairo 1.0](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)–, és el szeretnénk kezdeni elmagyarázni, mire lesz szükség a felhasználóktól és a fejlesztőktől. A Regenesis után a StarkNet csak a Cairo 1.0 alapú szerződésekkel fog működni, és egy új genesis blokkból indul a meglévő állapottal.

Mit kíván a Regenesis a felhasználóktól? Pénztárcájuk egyszerű frissítése. Mire lesz szükség a StarkNet dappjainak készítőitől? Szerződéseiket a Cairo 1.0-ra portolják át, és kövessenek egy egyszerű frissítési útmutatót. Pontosabban, nem lesz újraindítás tiszta állapotból, és ugyanazon StarkNet példánynál maradunk, vagyis nem lesz szükség**migrációra.**

A Regenesis terve az alkalmazások állapotának teljes megőrzése, és az alkalmazások leállásának elkerülése. Így azok az alkalmazások, amelyek követik az általunk megadott irányelveket, azonnal elindulhatnak a StarkNet Alpha Mainnet hálózaton, anélkül, hogy a Regenesis folyamata során működésüket és felhasználóikat zavarná. Elkötelezettek vagyunk a közösséggel való együttműködés mellett, és minden szükséges támogatást megadunk. hogy ez a folyamat minél gördülékenyebb legyen.

Ezt az irányt a közösséggel folytatott kiterjedt megbeszélések eredményeként választjuk, amelyek egy fontos javaslatot tartalmaztak a Software Mansion csapatától.

### Miért a Regenesis?

#### Cairo 1.0 és Sierra

A Regenesis fő motivációja a Cairo 1.0 által nyújtott új lehetőségek kihasználása – nevezetesen a szekvencerek DOS védelme, a cenzúraállóság és a gázmérés, amelyek elengedhetetlenek a StarkNet decentralizált hálózataként.

A Cairo 1.0 biztosítja, hogy minden tranzakció igazolható legyen. Ez lehetővé teszi a StarkNet számára, hogy blokkokba foglalja a visszavont tranzakciókat, és igazolást készítsen a végrehajtásukról. Ez a mechanizmus lehetővé teszi, hogy a szekvenszereket kifizessék a visszaállított tranzakciók végrehajtása után, növelve ezzel a DOS-os védelmet a rosszindulatú szereplőkkel szemben. Ezenkívül a Cairo 1.0 támogatja a gázmérést, ami lehetővé teszi a StarkNet számára, hogy átálljon egy intuitívabb díjpiacra. Végül, ez lehetővé teszi a StarkNet számára, hogy kényszerített tranzakciókat vezessen be az L1-ből, és fokozza a hálózat cenzúrával szembeni ellenállását.

Ezen előnyök kihasználása érdekében a Cairo v0 és a Cairo 1.0 szerződések nem keverhetők össze. A helytelen állítások nem bizonyíthatóak tévesnek, és a gázkövetés sem történhet meg, ha van egy darab Cairo v0 szerződésünk. Ebből a célból teljesen ki kell hagynunk a Cairo v0 kódot a StarkNet állapotból, vagyis a Regenesisből.

**A Regenesis után egy Starknet rendszerünk lesz, amely teljesen a Cairo 1.0-ra épül.**

#### A kód és a protokoll egyszerűsítése

A StarkNet még Alfában is sok változáson ment keresztül. Eddig minden verzió megváltoztatta a StarkNet operációs rendszert, a blokkokat és a tranzakciók szerkezetét. Emiatt a kód egy része elavulttá vált. A teljes csomópontoknak és infrastruktúra-szolgáltatóknak (például indexelőknek és állapotfelfedezőknek) azonban tisztában kell lenniük a StarkNet Alpha verzióinak múltbeli viselkedésével, és végre kell hajtaniuk azokat, hogy megbízhatóan szinkronizálhassanak az állapottal. Regenesis nélkül ez a teher komoly visszatartó erőt jelenthet a fejlesztők számára, akik fontolóra vennék ilyen szolgáltatások kiépítését a StarkNet számára.

Ezért a termelés megkezdése előtt, és egy decentralizált világra való felkészülésként, számos infrastrukturális eszköz implementációval, csökkenteni kívánjuk a protokoll bonyolultságát. Ezt úgy érnénk el, hogy a jövőbeli infrastruktúrának nem kellene StarkNet 0.x kódot végrehajtania, és az átmeneti időszak utáni első blokkot jelölnénk meg keletkezési pontként.

### Wen Regenesis? Az általános idővonal

A Regenesis a Cairo 1.0 megjelenését követi, amelyre a tervek szerint 2022 végén kerül sor. 2023 első negyedévében a StarkNet frissítésre kerül, hogy támogassa a Cairo 1.0-t, és célunk, hogy az első negyedév végére áttérjünk egy teljesen Cairo 1.0-alapú hálózatra.

**A felhasználóknak és az alkalmazásoknak ebben az időszakban kell áttérniük.**

![](/assets/1_ef85shzd2uudwex-cy8wdg-1.png)

### Tehát mit kell tudnom?

Az alkalmazásfejlesztőknek tisztában kell lenniük a Regenesis következő szempontjaival:

1. Győződjön meg arról, hogy szerződése készen áll a frissítésre. A terv teljes technikai részleteit a[StarkNet közösségi fórum](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080)megosztja. Amint a részleteket véglegesítjük, megosztunk egy tömör iránymutatást.
2. Győződjön meg arról, hogy készen áll arra, hogy kódját a Cairo 1.0-ra portolja. A legfrissebb részletekért lásd a következő részt.

#### Szerződés portolása Kairóba 1.0

A Cairo 1.0 nagy ígéreteket rejt a StarkNet fejlesztői számára. A meglévő Kairó továbbfejlesztése, amely biztonságosabb, jobb és egyszerűbb lesz a szerződések írásához, továbbfejlesztett szintaxissal, teljes értékű típusrendszerrel (natív uint256 bárkivel?) és még sok mással. A fejlesztőknek a meglévő StarkNet szerződéseiket a Cairo 1.0 szintaxisra kell portolniuk. Mivel azonban a logika és a kódstruktúra változatlan marad, ez az erőfeszítés várhatóan elhanyagolható lesz ahhoz képest, ami az alkalmazás fejlesztéséhez szükséges volt.

Ebben az összefüggésben érdemes megjegyezni, hogy dönthet úgy, hogy újra auditálja az alkalmazás Cairo 1.0-s verzióját. Ha alkalmazását már korábban auditálták, az újbóli auditálási folyamat lényegesen olcsóbb és egyszerűbb lesz, mivel az auditorok már ismerik az Ön logikáját.

2022 negyedik negyedévében közzétesszük a Cairo 1.0 körüli összes dokumentációt, valamint az oktatóanyagokat és a workshopokat.

### StarkNet felhasználó vagyok. Mit kellene tennem?

Felhasználóként valószínűleg meg kell tennie néhány műveletet a Regenesis során. Legalább frissítenie kell a fiókszerződését. Ennek elmulasztása a (néhány hónapos) átmeneti időszak alatt fiókja elvesztését eredményezi. Az Ön által használt StarkNet alkalmazások fejlesztői által választott frissítési útvonaltól függően előfordulhat, hogy további lépéseket kell tennie.

Emlékeztetünk mindenkit, hogy a StarkNet még mindig alfa fázisban van, és a felhasználóknak figyelniük kell a StarkNet és az általuk használt alkalmazások kommunikációjára. Az Ön felelőssége, hogy mielőbb frissítse az új rendszert. *Korai alkalmazónak lenni nem mindig könnyű, és számítunk rá, hogy megteszi a részét!*

### Következtetni

A Cairo 1.0 a sarkon van, és számos izgalmas előnyt és fejlesztést kínál a StarkNet és fejlesztői számára. Ezek kihasználásához a hálózat Regenesis eseményére van szükség. Szerencsére olyan tervezést tartunk szem előtt, amely ezt a folyamatot minimálisan zavaróvá teszi – a felhasználók számára teljesen zökkenőmentes, az alkalmazások számára pedig meglehetősen egyszerű.

Arra biztatjuk, hogy vegyen részt a[közösségi megbeszélésen](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080), és ossza meg észrevételeit és aggályait, valamint legyen naprakész a StarkNet alkalmazásfejlesztőjeként szükséges lépésekkel kapcsolatban.