### TL;DR

* A StarkNet Alpha 0.8.0 bemutatja a díjmechanizmus kezdeti verzióját (opcionális a StarkNet Alpha 0.9.0-ig)
* Az új API megköveteli a tranzakciós díj becslését a tranzakció nyomkövetéséért, ami jobb láthatóságot és hibakeresési képességet tesz lehetővé
* A StarkNet szekvenszer teljesítménybeli fejlesztései
* L1→L2 üzenet törlése

### Intro

Amint azt[ütemtervünkben](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51)megosztottuk, a StarkNet funkcionalitásának és szolgáltatásainak legújabb kiegészítését követően figyelmünk a teljesítménynövelés és a protokolltervezés felé fordul (beleértve a díjakat, a számlakivonást, a decentralizációt stb.). A StarkNet Alpha 0.8.0 elindítja a tranzakciós díjak hozzáadását és a szekvenszer teljesítményének javítását.

A StarkNet ütemterve díjmechanizmust tartalmaz, és ezzel a verzióval egy fontos lépést teszünk közelebb a platform teljes teljesítményéhez.

A díjmechanizmus hozzáadása a StarkNet teljesítménytervezésének lényeges része. Minimális díj nélkül azt kockáztatjuk, hogy végtelen tranzakciókkal kell szembenéznünk: ami ellehetetlenítené a rendszer teljesítményét, függetlenül a szekvenszer optimalizálástól.

### Jellemzők

#### Díjtámogatás

A StarkNet Alpha mostantól támogatja a díjmechanizmus első verzióját. Ez a mechanizmus még ebben a korai szakaszban is elengedhetetlen, és még a Testneten is, két fő okból:

1. Lehetővé teszi a fejlesztők számára, hogy megkezdjék szerződéseik optimalizálását a StarkNet költségmodellje szerint.
2. A rendszer teljesítményének javításának döntő párja, mivel számtalan tranzakció elküldésével megakadályozza a spamküldést.

Ez a verzió bemutatja azokat az összetevőket, amelyek szükségesek ahhoz, hogy a fejlesztők beépítsék a díjfizetést eszközeikbe és alkalmazásaikba. A fejlesztők most megbecsülhetik a tranzakciós díjat az \`estimate_fee\` végpont meghívásával, és a tranzakció végrehajtásának részeként befizethetik a díjat.

Mivel ez a funkció visszafelé nem kompatibilis, a díjfizetést jelenleg nem fogjuk érvényesíteni, hanem csak a 0.9.0-s verziótól, amely néhány héten belül megjelenik. Ez a fokozatos átállás lehetővé teszi a felhasználóknak és a fejlesztőknek, hogy alkalmazkodjanak az új modellhez.

#### Díjszerkezet a 0.8.0-n

0.8.0-n a díjakat kizárólag a számítási bonyolultságnak megfelelően szedik be, miközben a StarkWare továbbra is támogatja az L1 kommunikációs költségeket. A következő hetekben frissíteni fogjuk a díjmechanizmust, hogy az tartalmazza ezeket az L1 üzemeltetési és kommunikációs költségeket. A fizetés a StarkNet L2-n végrehajtott tranzakció végrehajtásával atomosan beszedésre kerül. A részletes leírást lásd a[díjak dokumentációjában](https://starknet.io/documentation/fee-mechanism/).

Fontos megjegyezni, hogy a StarkNet fejlődésével szorosan együttműködünk a fejlesztői közösséggel a díjmechanizmus finomítása és fejlesztése érdekében.

#### L2 Goerli ETH csaptelep

Bevezettük a[L2 Goerli ETH Faucet](https://faucet.goerli.starknet.io/), hogy lehetővé tegyük a felhasználók számára, hogy díjakat fizessenek a Testneten. Ez a csaptelep kis mennyiségű L2 Goerli ETH-t küld a StarkNet Goerli fiókcímére, amelyet a tranzakciós díj kifizetésére használhat fel.

#### Trace API

A StarkNet API-jához hozzáadtuk a tranzakció végrehajtási nyomkövetésének lekérésének lehetőségét. A tranzakció nyomkövetésén belül az összes belső hívás látható, olyan információk kíséretében, mint a felhasznált végrehajtási erőforrások, a visszatérési érték, a kibocsátott események és az elküldött üzenetek. Ez az új hívás leegyszerűsíti a szerződés viselkedésének megértését vagy a tranzakciók hibakeresését. Ezenkívül az olyan eszközök, mint[Voyager](https://voyager.online/)vagy[StarkTx](https://starktx.info/)tartalmazhatják ezeket az adatokat; részletesebb elemzések biztosítása a felhasználók számára, különösen a számlaszerződéses interakcióhoz.

A nyomkövetés megszerzéséhez használhatja a \`get_transaction_trace\` parancsot a StarkNet parancssori felületén. Ha példát szeretne látni a használatára, tekintse meg a[oktatóanyagot](https://www.cairo-lang.org/docs/hello_starknet/cli.html?#get-transaction-trace).

#### Üzenet törlése

A verzió további funkciója az L1→L2 üzenetek törlése. Miért hasznos ez? Képzeljünk el egy olyan forgatókönyvet, amelyben a felhasználó átvisz egy eszközt az L1-ből az L2-be. A folyamat azzal kezdődik, hogy a felhasználó elküldi az eszközt egy StarkNet hídnak, és a megfelelő L1→L2 üzenetet generál. Most képzelje el, hogy az L2 üzenetfogyasztás nem működik (ez a dApps kairói szerződésének hibája miatt fordulhat elő). Ez azt eredményezheti, hogy a felhasználó örökre elveszíti az eszköz feletti felügyeleti jogot.

Ennek a kockázatnak a mérséklése érdekében lehetővé tesszük, hogy az L1→L2 üzenetet kezdeményező szerződés – az erre irányuló szándék kinyilvánítása és megfelelő várakozás után – felmondja azt (lásd a[dokumentációt](https://starknet.io/l1-l2-messaging/#cancellation)).

### Teljesítményfejlesztések

Ez a verzió jelentősen csökkenti azt az időt, amelyre a szekvenszernek szüksége van a bejövő kairói tranzakciók folyamának végrehajtásához.

Ez még csak az első lépés! Következő nagy teljesítményű mérföldkőnk, amelyet hamarosan bemutatunk (0.9.0), a szekvenszer párhuzamos végrehajtása, és sok további optimalizálás várható az úton.

### És most?

Olvassa el a műszaki dokumentációt[itt](https://starknet.io/documentation/fee-mechanism/).

Nyissa meg[starknet.io](https://starknet.io/)webhelyet, ahol minden StarkNet-információt, dokumentációt, oktatóanyagot és frissítést talál.

Csatlakozz a[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)a fejlesztői támogatásért, az ökoszisztéma bejelentéseiért és a közösség részévé válásért.

Látogassa meg[StarkNet Shamans](https://community.starknet.io/), hogy naprakész legyen, és részt vegyen a StarkNet kutatási megbeszélésein.