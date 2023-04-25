### TL;DR

* A STARK-ok lehetővé teszik a blokklánc skálázást azáltal, hogy hatékonyan bizonyítják a számítások integritását
* A StarkEx egy alkalmazás-specifikus skálázómotor
* A StarkNet egy engedély nélküli, intelligens szerződéses Layer 2 hálózat

### **STARKok**

A STARK-ok (Scalable, Transparent ARgument of Knowledge) egy bizonyító rendszer, amely lehetővé teszi a számítások bizonyítását és ellenőrzését. Lehetővé teszi egy nagy számítás feldolgozását, a számítás helyességének bizonyítását, majd a bizonyítás nagyon kevés lépésben történő ellenőrzését.

A STARK-ok kulcsszerepet játszhatnak a blokklánc skálázhatóságában azáltal, hogy lehetővé teszik a nagy számítások elvégzését a láncon kívül, ahol ez olcsóbb, így csak az ellenőrzést kell elvégezni, amely a számítás töredékét igényli a láncon. Más szavakkal, azáltal, hogy nagyon kevés lépést hajt végre a láncon, a hitelesítő megerősíti egy sokkal nagyobb, a láncon kívül végzett számítás integritását.

A STARK-ok használatával a 2. rétegbeli megoldások kötegelt köteggel dolgoznak és tranzakciók ezreit számítják ki, majd egyetlen STARK-bizonyítvánnyal ellenőrizhetik azok érvényességét a láncon. A láncon belüli folyamat költsége fel van osztva a kötegelt**mind**tranzakció között. Ez Ethereum biztonságot és alacsony tranzakciónkénti gázköltséget eredményez.

Az alacsony számítási költség az alkalmazások új osztályát nyitja meg, amelyek korábban nem voltak megvalósíthatók a láncon. Ezek a tulajdonságok a STARK-okat kiváló építőelemgé teszik a felhasználói élmény javításához és a gázköltségek csökkentéséhez, miközben megőrzik az Ethereum települési réteg biztonságát.

A StarkWare két megoldást kínál az Ethereum méretezésére STARK-okkal: StarkEx és StarkNet.

### **StarkEx**

[A StarkEx](https://starkware.co/starkex/)egy keretrendszer engedélyezett, alkalmazás-specifikus skálázási megoldások létrehozására. A StarkEx egy hasznos[alkalmazásfolyamat](https://docs.starkware.co/starkex-v4/starkex-deep-dive/regular-flows)tartalmazó eszköztár, amelyet a projektek olcsó, láncon kívüli számítások megvalósítására használhatnak. A végrehajtás helyességét tanúsító STARK-bizonyíték a láncon kívül jön létre. Egy ilyen igazolás legfeljebb 12 000–500 000 tranzakciót tartalmazhat (a tranzakció típusától függően). A bizonyítást ezután elküldik a STARK Verifier-nek, hogy elfogadják a láncon. Ez egy ellenőrzést jelent az összes tranzakcióhoz – hihetetlenül alacsony tranzakciónkénti amortizált gázköltségért.

Néhány példa a StarkEx-en telepített alkalmazásokra: dYdX (perpetuals trade), Immutable and Sorare (NFT-k – pénzverés és kereskedés), DeversiFi (spot kereskedés) és Celer (DeFi Pooling).

A StarkWare folyamatosan újabb alkalmazásfolyamokat ad a StarkEx-hez, követve a piacot és ügyfelei igényeit.

### **StarkNet**

*[A StarkNet](https://starkware.co/starknet/)egy engedély nélküli 2. rétegű hálózat, ahol bármely felhasználó vagy fejlesztő telepíthet kairói nyelven kifejlesztett intelligens szerződéseket.*

Az Ethereum intelligens szerződéses tapasztalatához hasonlóan a StarkNet ökoszisztémán belül az Ön szerződése kölcsönhatásba léphet bármely más, a StarkNeten telepített szerződéssel, így gazdagon összeállítható protokollokat tesz lehetővé. A StarkNet-szerződések az Ethereum-szerződésekkel is kapcsolatba léphetnek aszinkron üzenettovábbítással.

Ellentétben a StarkEx-szel, ahol az alkalmazások felelősek a tranzakciók benyújtásáért, a StarkNet szekvenátorok kötegelt tranzakciókat hajtanak végre, és elküldik feldolgozásra és bizonyításra. (A StarkNet szekvenszereit jelenleg a StarkWare üzemelteti, és a jövőbeni tervek szerint decentralizálják.) Ez azt jelenti, hogy miután az alkalmazások telepítik a kairói szerződéseiket, nem kell aggódniuk a további üzemeltetői infrastruktúra futtatása miatt. A StarkNet támogatja az összesítő adatok rendelkezésre állási módját, ami azt jelenti, hogy az összesítés állapota a STARK-bizonyítványokkal együtt az Ethereumba kerül.

Egy hatalmas fejlesztői közösség mélyen foglalkozik a StarkNet ökoszisztémával, alkalmazásokat, eszközöket és infrastruktúrát épít. A testneten már több tucat alkalmazás elérhető – DeFi, játékok, szavazás, mesterséges intelligencia és még sok más. Ráadásul a StarkNet közösség olyan fejlesztői eszközöket hoz létre, mint például a blokkböngésző, a helyi tesztelési környezet és keretrendszer, az SDK-k több nyelven és még sok más. Emellett aktív megbeszélések zajlanak a[Shamans' platformon](https://community.starknet.io/), amelyek fejlesztési javaslatokat, lehetséges funkciókat és bevált gyakorlatokat tartalmaznak.

### **Összefoglalva**

[StarkEx](https://youtu.be/P-qoPVoneQA)és a StarkNet is STARK-alapú skálázási megoldás. Mindkettő méretezhetőséget, alacsony gázköltséget és biztonságot nyújt, de eltérő működési követelményekkel és interoperabilitási mintákkal rendelkeznek. A StarkEx lehet a megfelelő megoldás egy olyan alkalmazáshoz, amely nagyrészt önálló, és illeszkedik a StarkEx által biztosított API-khoz. A StarkNet jobban megfelelhet olyan protokollokhoz, amelyek más protokollokkal való szinkron interakciót igényelnek, vagy amelyek túlmutatnak a StarkEx által kínált szükségleteken.

A STARK-ok forradalmasították az alkalmazások Ethereumra való építését. A StarkEx és a StarkNet továbbra is engedélyezni fogja az olyan alkalmazásokat, amelyek korábban életképtelenek voltak, és feszegetik a blokkláncban elérhető lehetőségek határait.

Ezt a cikket[Tim Gestson](https://twitter.com/IcemanTim)és a[StarkWare](https://starkware.co/)csapata közösen írta