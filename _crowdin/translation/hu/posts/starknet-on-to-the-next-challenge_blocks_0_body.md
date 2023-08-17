### TL;DR

* Lépésben építjük fel a StarkNet-et, kezdve**használhatóság megteremtésével**, majd**teljesítmény javításával**és végül továbblépve a**decentralizációra**
* Elértük első célunkat: a használhatóságot. Ez azt jelenti, hogy általános számításokat végeztünk Ethereum-szerű állapotban (évekkel azelőtt, hogy lehetségesnek hitték volna)
* Most haladunk a 3 részből álló építési tervünk 2. szakaszához: a teljesítmény, az átviteli sebességre, a tranzakciós költségekre és a késleltetésre összpontosítva.
* Következő: Decentralizáció

Alig egy évvel[StarkNet](https://starknet.io/)terveinek első bejelentése után a platform nagyon jó funkcionalitással rendelkezik. A fejlesztői közösség a legmerészebb várakozásainkon felül virágzik, és folyamatosan új L2 Native projekteket kínál.

Az elmúlt évben az volt a prioritásunk, hogy pontosan ezt tegyük lehetővé egy működő StarkNet létrehozásával a funkciók gyorsan bővülő skálájával, amely lehetővé teszi a fejlesztők számára, hogy azonnal belemerüljenek.

Ezt nagy számban megtették. Jó barométer a[JavaScript-könyvtár letöltési száma a StarkNet](https://www.starknetjs.com/)hez: már 5 ezernél tart, mióta 4 hónappal ezelőtt elérhetővé vált.

Noha a StarkNet biztosítja az általunk megígért tömörítési varázslatot, pillanatnyilag távolról sem képes erre elegendő átviteli sebességű dApps számára, és ez rövid távon frusztrációt okozhat a fejlesztők számára.

Harcban tesztelt alaptechnológiánkat, amely a STARK-val számos tranzakciót bizonyít és tömöríti a bizonyítékokat, a tranzakciók kötegelésnek vagy sorrendbe állításának kell megelőznie. Ez egy olyan folyamat, amelyet a StarkWare csapata már egyszer tökéletesített a[StarkEx](https://starkware.co/starkex/)skálázómotorhoz, és jelenleg is dolgozunk azon, hogy a StarkNet igényeinek megfelelően újra megtegyük.

Most, hogy sok használhatósági célunkat elértük, áthelyezzük a hangsúlyt, hogy ez legyen a legfontosabb prioritásunk. Mindez a 3 szakaszból álló ütemtervünk része:**használhatóság**, ezt követi a hálózat**teljesítménye**, majd**a decentralizáció**. Egy év múlva szeretnénk egy pillantást vetni a motorháztető alá – egy vázlatot arról, hogy mely darabok vannak a helyükön, és mi az, ami még folyamatban van.

### Az eddigi történet

A StarkNet Alpha júniusban jelent meg a nyilvános testneten, novemberben pedig a Mainnet-en. A Mainnet bevezetésekor a StarkNet már Ethereum-szerű állapotban végezte az általános számításokat, amiről széles körben azt hitték, hogy évek múlva van.

A fejlesztés során olyan megközelítést választottunk, amely először a legfontosabb funkciókra összpontosított, és amint elérhetővé váltak, azonnal kiadtuk őket, lényegében megosztva az evolúciós folyamatot a közösséggel. A StarkNet még korántsem teljes körű, de a fejlesztők még most is tudnak értelmes és összetett alkalmazásokat készíteni. Ma már több száz fejlesztőnk[épít a StarkNetre,](https://starkware.notion.site/Projects-Building-on-StarkNet-a33dee55778a4515a9be9bdae02ee682)tíz dApps, és több mint tucat külső csapatunk fejleszt eszközöket és infrastruktúrát a StarkNet ökoszisztéma számára.

A frissítések sorozata számos fontos funkciót biztosított, beleértve az L1<>L2 üzenetküldést, a láncon belüli adatokat és az összeállítás támogatását, az események támogatását, az alapdíj-mechanizmust, a szerződések frissíthetőségét, a fiókok absztrakcióját, a tesztelési keretrendszert, a fejlesztői eszközöket, a gyors megerősítést, a blokkszámot. , blokk időbélyegzője, számlaszerződések támogatása.

A fejlesztői közösség mélyen érdeklődik a StarkNet iránt, és valójában alakítja annak fejlesztését. A fejlesztői visszajelzések alapján már bevezettek funkciókat. Az átvétel jóval meghaladhatja az átviteli sebesség növekedését, ezért ez a fellendítés most kiemelten fontos számunkra.

### Következő lépések

Most, hogy elértük a használhatóságot, ideje javítani a rendszer teljesítményét. A rendszer jelenlegi állapotában képes a tranzakciók korlátozott átvitelére. A probléma megoldásának módja a Sequencer Node teljesítményének javítása, amely a StarkNet egy bányásznak felel meg. Ez a „gép”, amely sorrendbe állítja a tranzakciókat azok benyújtása után. Ha ez optimalizálva van, az átviteli sebesség rakéta lesz.

Ennek érdekében egyszerre elemezzük, hol vannak a szűk keresztmetszetek, és egyenként kezeljük azokat. Jelenleg az összes szűk keresztmetszet a szekvenálási folyamathoz kapcsolódik, amely még azelőtt következik be, hogy meghívnánk a STARK-próbákat. A csatákban tesztelt prover-stack készen áll a StarkEx-szerű átviteli sebesség támogatására a StarkNeten.

Arra számítunk, hogy a szekvenszer optimalizálása néhány hónapig tartó folyamat lesz, fokozatosan javulva az első félévben. Célunk, hogy 2022 második felének elejére legalább egy nagyságrenddel magasabb TPS-t érjünk el, mint az Ethereum, olyan költséggel, amely legalább két nagyságrenddel alacsonyabb, mint az Ethereumé. És ez még csak a kezdet.

Jó oka van annak, hogy szükség van erre az optimalizálási fázisra, és hogy a StarkNet nem egy készen optimalizált szekvenszerrel indult: a StarkNet azért tudta ilyen gyorsan elérni a használhatóságot, mert előrébb jutottunk. Ahelyett, hogy a nulláról kezdtük volna, és egy teljesen új szekvenszert építettünk volna, a StarkEx adagolóját használtuk központi komponensként.

Ez nagyszerű módja volt az építkezésnek. Nem csak gyorsan szállított; ez azt jelentette, hogy biztosak vagyunk abban, hogy erős alapokra építkeztünk. A StarkEx lényegében harcban tesztelte a StarkNetet hajtó alapvető funkciókat, mivel több százmilliárd dolláros kumulatív kereskedést termelt.

[A StarkEx](https://starkware.co/starkex/)az L2-t használó legsikeresebb dApp-ok skálázómotorja: dYdX (örökös szerződések), DeversiFi (spot kereskedés és fizetés), valamint az Immutable és Sorare (NFT pénzverés és kereskedés).

De a nekik és más StarkEx-klienseknek épített szekvenszer csak eddig tudja elvinni a StarkNet-et. Mindegyikük nagyjából ugyanazt a típusú tranzakciót bonyolítja le minden nap. A StarkNet**általános számításról szól**, tehát igényei nyílt végűek. Amikor a szekvenszere tranzakciókat vesz át a mempoolból, azok különböző formájú és méretűek lehetnek. Ráadásul a StarkNet egy nyílt hálózat is, ami azt jelenti, hogy további számítási többletterhelések vannak, amelyekkel a StarkEx nem találkozik.

A jelenlegi kihívás, nevezetesen a szekvenszer optimalizálása ezekre az új igényekre, jelentős vállalkozás, de a sikeres StarkEx fejlesztésünk alapján jól ismerjük a szükséges útvonalat.

### Következő: Decentralizáció

A StarkNet egy teljesen decentralizált, engedély nélküli hálózat lesz, vezetőválasztási és irányítási mechanizmusokkal kiegészítve. Ennek elérése lesz a fő célunk, amint az átviteli sebesség az egekbe szökik és a költségek csökkennek, és reméljük, hogy 2022 végére elkészül az első decentralizált verzió. Arra számítunk, hogy a következő hónapokban nyilvánosan megosztjuk decentralizációs tervünket.

Ahogyan a jelenlegi korlátozott átviteli sebesség a StarkNet fejlesztésének egy átmeneti szakaszát jelenti, a StarkWare részvételének jelenlegi szintje is átmeneti. Egyfajta állványzatnak tekintjük magunkat, amely fontos funkciót tölt be az építési szakaszban, de idővel visszagurul.

A csomópontok teljes fejlesztése, amely izgalmas első lépés a decentralizáció felé, már folyamatban van. A teljes csomópontok lehetővé teszik, hogy bárki megőrizze és ellenőrizze a hálózat állapotát helyben, pontosan nyomon követve, mi történik. Három csapat –*Erigon, Nethermind és Equilibrium*– fejleszti a teljes csomópontokat, és a jövőben várhatóan többen is megkezdik a fejlesztést.

Ezzel párhuzamosan folynak az előkészületek a szekvenáló és bizonyító szoftverek nyilvános megnyitására. Bárki részt vehet szekvenszerként vagy proverként a StarkNeten.

Kidolgoznak egy olyan struktúrát, amely ösztönzi az embereket a részvételre, amely magában foglalja a gazdasági jutalmakat is. A StarkNet díjai részben a szekvenszereket és a provereket terhelik.

Középtávon azt várjuk, hogy a szekvenszerünket harmadik felek számára is elérhetővé tegyük, hosszú távon pedig arra is számítunk, hogy különböző csapatok szekvenszereket építenek majd a StarkNet számára.

### Mindig fejlődik; Örökké hallgatni

Ahogy a hangsúly a következő kihívásra helyeződik, továbbra is javítani fogunk a korábbi eredményeken. És ha folytatjuk a munkát[StarkNet](https://starknet.io/)minden területén, fülünk mindig nyitva marad az egész fejlesztői közösség előtt. Tehát vegyen részt a vitában[Discord](https://discord.com/invite/uJ9HZTUk2Y), a[StarkNet Shamans](https://www.google.com/search?client=safari&rls=en&q=StarkNet+Shamans&ie=UTF-8&oe=UTF-8)közösség,[Twitter](https://twitter.com/Starknet_Intern)vagy más útvonalon keresztül, és segítsen a blokklánc-skálázás jövőjének kialakításában.