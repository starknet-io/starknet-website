### TL;DR

Az L2-natív dApps-ok most virágozhatnak a hagyományos L1 gázkorlátozások nélkül

### Bevezetés

A dApp fejlesztők mindig is komoly korlátokkal szembesültek az Ethereum (L1) blokkgáz-korlátja miatt. Nemcsak*korlátozza, hogy*hogyan működnek ezek a dapp-ok, hanem*re azt is, hogy ezek a dApp-k mire*képesek.

A Layer 2 (L2) a dApp fejlesztői számára zöldmezőt kínál a dApp fejlesztői számára, anélkül, hogy ezt a gázüveg mennyezetet használja. Úgy gondoljuk, hogy a dApp-ok túlnyomó többsége néhány éven belül L2-natív lesz: az alapoktól kezdve az L2-re épülnek, hogy kihasználják ezt a számítási szabadságfokot.

### Az L1 gáz korlátozza az L1 natív dApps-ok alakját

*Tekintsünk két példát a népszerű dApp-okra, amelyek kialakítását alapvetően az L1 gázkorlátok határozzák meg: AMM-eket és DEX-aggregátorokat.*

Az Automated Market Maker (AMM) lényegében az ajánlati könyv alapú tőzsde alacsony gázfogyasztású közelítése. Ahelyett, hogy lehetővé tennék a felhasználók számára limitek elhelyezését és megszüntetését, veszteségleállítást vagy számos más megbízási típust, az L1 AMM-ek csak egyszerű csereügyleteket tesznek lehetővé egy központi likviditási készlettel – az L1 intenzív számítási költségeinek kielégítésére.

A DEX aggregátoroknak ideális esetben hozzá kell férniük az összes lehetséges likviditási poolhoz, még a legkisebb likviditási poolhoz is, hogy a felhasználók számára a legjobb árakat tudják kiaknázni. A sok különböző készlet lekérdezésének költsége miatt azonban egyszerűen nem éri meg az L1 feletti tranzakciókat lebonyolítani. A poolokhoz való hozzáférés és a kapcsolódó tranzakciós díjak kifizetése csak akkor indokolt, ha a likviditási poolok kellően nagy likviditással rendelkeznek. Hasonló módon a hitelezési/hitelfelvételi és egyéb fedezet alapú dApp-ok felszámolása sokkal pontosabb lenne, ha a felszámolási kedvezmény és a tranzakciós díj közötti különbség sokkal kisebb lenne.

Számos L1 dApp korlátozott funkcionalitása és kialakítása közvetlenül abból adódik, hogy a fejlesztők optimalizálják kódjukat, hogy megfeleljenek az Ethereum gázkorlátozásának. Kérdezhetik, miért mondjuk azt, hogy Ethereum? Nem futhat a Solidity kód sok L1-en és még néhány L2-n is? Valóban, de ezek közül az Ethereum a legdrágább (és ezért a legbiztonságosabb) környezet. A Solidity dApp-okat a „legdrágább linkhez”, azaz az Ethereumhoz tervezték. Ezért nem részesülnek az olcsóbb futási környezetek által nyújtott számítási előnyökből. A legdrágább futási környezethez való dApp tervezésével feloldott funkciók feloldásához a dApp kódját hozzá kell igazítani.

### Az L2-natív dApps térnyerése

A Validity Rollups (más néven ZK-Rollups) rendkívül olcsó számítást tesz lehetővé. Minden más skálázási megoldástól eltérően az L2 számítások exponenciálisan növekedhetnek, és csak kis hatással vannak a láncon belüli ellenőrzési gázköltségre. Ezen túlmenően, az érvényességi összesítő feldolgozza a számítások bemeneteit – „tanúadatokat” – anélkül, hogy további L1 erőforrásokat fogyasztana, lehetővé téve a sok bemenettel végzett számításokat.

A dApps natív kódolása L2-n a**[Cairo](https://www.cairo-lang.org/)**ban (a dAppsok STARK-próbákon keresztüli méretezésére szolgáló Turing-teljes nyelv) a lehetőségek hatalmas tárházát nyitja meg a fejlesztők számára. Lehetővé teszi számukra, hogy jelentős mennyiségű adatot – számítási és tanúi adatokat egyaránt – használhassanak, amelyeket korábban nem tudtak használni.

Fedezze fel az ilyen L2-natív dApp-okat és új, kibővített képességeiket.

#### DeFi

Mielőtt a StarkEx-be, a StarkWare Validity Rollupjába bekerült, a dYdX L1 dAppként működött az Ethereumon. 10-szeres tőkeáttételt kínált felhasználóinak szintetikus eszközökre, és csak egyetlen szintetikus eszközzel támogatott pozíciókat. A dYdX újjáépítése Kairóban L2-natív dAppként drámaian skálázhatóbb, olcsóbb és hatékonyabb DeFi platformot biztosít:

* Oracle árfrissítések: Az ilyen frissítések általában több tucat árat és különböző forrásokból származó aláírásokat tartalmaznak a medián kiszámításához. Az érvényességi összesítő exponenciális skálázást tesz lehetővé az ár-orákulum logikájában (aláírás-ellenőrzés és a mediánár kiszámítása) anélkül, hogy a tanúadatokat jelentené az L1-nek. Hasonlítsd össze ezt a dYdX L1 implementációjával, ahol minden ár Oracle frissítés körülbelül 300 000 gázba került, és ezért korlátozott volt a gyakorisága és az árriporterek készletének mérete.
* Tőkeáttétel: A pontos árfeed lehetővé teszi a dYdX számára, hogy valós időben becsülje meg egy pozíció kockázatát, és magasabb tőkeáttételt kínáljon a felhasználóknak. A továbbfejlesztett Oracle árfrissítéseknek köszönhetően a dYdX az L1-es 10-ről x25-re növelte a tőkeáttételt az L2-n.
* Cross-margin: A dYdX L2-nél az árjegyzők sok eszközre hosszú/short megbízást adhatnak ugyanazon fedezet felhasználásával. Az átlagos elszámolás a dYdX L2-jén több mint 10 különböző szintetikus vagyonnal rendelkező pozíciókat foglal magában! Összehasonlításképpen, ha az L1-en ez a határkeresztező képesség több mint kétszeresére nőtt volna a láncon belüli gázköltség.

#### Játék és generatív művészet

Az L1-es natív játékok jelenlegi választéka általában az L1-en tárolja a játékeszközöket, miközben a teljes játéklogikát egy megbízható off-chain alkalmazásban implementálja. Ez a minta az L1 gázkorlátozásának közvetlen következménye. Az L2-n végzett olcsó számításoknak köszönhetően az L2-natív játékra szánt dApp-ok fejlesztői immár intelligens szerződésben valósíthatják meg a játék logikáját, és megbízhatóan manipulálhatják a játék eszközeit, ahelyett, hogy csak tárolnák azokat. A játéklogika beemelése a megbízható számítások birodalmába jelentős lépés a blokklánc-alapú játékok sokkal gazdagabb világa felé. L2-natív játékokat már fejlesztenek a StarkNeten, a StarkWare engedély nélküli hálózatán (pl.[Dope Wars](https://github.com/dopedao/RYO)és[Influence](https://medium.com/influenceth/influence-to-launch-on-starknet-afd3c26ea25a)).

De mennyire lehet bonyolult egy blokklánc alapú játék? Például lehetetlennek tűnik a grafika közvetlenül a láncon történő kezelése –[vagy](https://twitter.com/guiltygyoza/status/1449637155001798657)? A differenciálegyenletek megoldása és a síkbeli mozgás szimulálása egy intelligens szerződésben jelentős lépést jelent afelé, hogy a jövőben egy blokklánc-fizikai motor legyen. A következmények óriásiak. Képzelj el egy kompetitív többjátékos játékot, mint a Counter-Strike. Ha sikerülne szimulálni a játék logikáját a láncon, akkor sok rettegett hack a múlté válna – a játékosok bizonyíthatóan tisztességes játékot élvezhetnének.

A Generative Art számításokat, véletlenszerűséget és egyéb adatokat használ a blokklánc alapú művészet létrehozásához. Minél összetettebb logikát és számítást tud használni egy művész bizalmatlanul, annál több lehetőség van egyedi, egyedi műalkotások létrehozására. [A WhaleStreet DAO](https://blog.whalestreet.xyz/whalestreet-dao-to-launch-gen-art-ecosystem-on-ethereum-with-starknet/)elindítja az egyik első Gen Art projektet a StarkNeten, kihasználva a StarkNet korlátlan számítási erőforrásait.

### Mi a következő lépés?

A Validity Rollupok – és különösen a kairói StarkEx és a StarkNet – olyan környezetet biztosítanak, ahol sok számítási vagy tanús adatot igénylő dApp-okat lehet fejleszteni és működtetni. Az elosztott főkönyvi technológia minden előnyével rendkívül izgalmas jövőt jósolunk az L2-natív dApps számára.

*tud*az összeállíthatóság, a megbízhatóság és a decentralizáció által támogatott általános számításokkal?