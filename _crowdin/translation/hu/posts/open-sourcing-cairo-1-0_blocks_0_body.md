### TL;DR

* **A Cairo 1.0 nyílt forráskódú! Ez csak az első lépés a StarkNet verem nyílt forráskódú beszerzése felé.**
* Most egy[első pillantást](https://github.com/starkware-libs/cairo)mutatunk be a Cairo 1.0 fordítóba. Most már elkezdheti a kísérletezést az alap Cairo 1.0 kóddal
* A Cairo 1.0 magjában nagyon hasonlít a Rusthoz
* Tekintsd első ízelítőnek, ne kiadásnak. További fejlesztések készülnek. A fordítóprogram első verzióját jövő év első negyedévére tervezik.
* A Cairo 1.0 még nem támogatott a StarkNeten. A StarkNet a jövő év első negyedévében támogatja.

### Intro

2020-ban kiadtuk[Cairo](https://eprint.iacr.org/2021/1063.pdf), egy Turing-komplett programozási nyelvet, amely támogatja az ellenőrizhető számításokat. Kairó assembly nyelvnek indult, és fokozatosan kifejezőbbé vált. Két hónappal ezelőtt bejelentettük[Cairo 1.0](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)verziót, amely a jelenlegi helyzetben néhány fontosabb problémát kezel:

* Míg a kairói szintaxis jelentős fejlődésen ment keresztül a kezdetek óta, a fejlesztői élmény mindig fejlődhet. A Cairo 1.0 egy rozsda által ihletett, teljesen gépelt nyelv, amely sokkal könnyebbé és kevésbé hibássá teszi ugyanazt a logikát.
* A meglévő fordító ugyanabban a tárban van kifejlesztve, mint maga a StarkNet, ami megnehezíti a nyelvi változások nyomon követését. A Cairo 1.0 fordító az alapoktól kezdve íródott, ami gyorsabb szolgáltatásfejlesztést és nagyobb közösségi részvételt tesz lehetővé.
* Most már minden számítás bizonyítható. Jelenleg egy kairói program bizonyos bemenetekkel meghibásodhat (pl. \`assert 1=2\` utasítás elérése valamelyik számítási ágban), ami bizonyíthatatlanná teszi a számítást. A Cairo 1.0-val a programok minden lehetséges ágban bizonyíthatók. Ez különösen fontos a DOS-védelem és a cenzúraállóság szempontjából a StarkNetben.

Ma jelöljük meg az első mérföldkövet a fenti célok elérésében, mivel a fejlesztést nyilvános repo-ra és**nyílt forráskódú Cairo 1.0-ra helyezzük!**A fejlesztők most először tudnak egyszerű Cairo 1.0 programokat fordítani és végrehajtani. Ez lehetővé teszi a fejlesztők számára, hogy elkezdjenek kísérletezni a Cairo 1.0-val, és fokozatosan hozzászokjanak az új funkciókhoz, még akkor is, ha ebben a fázisban még nem tudják megvalósítani a StarkNeten.

### Jelenlegi képességek

Jelenleg alapvető natív kairói programokat fordíthat és hajthat végre. Bár sok szintaxis/nyelvi fejlesztés még folyamatban van, ez lehetővé teszi a Cairo 1.0-hoz való hozzászokást, és a frissítések azonnali élvezetét.

**Vegye figyelembe, hogy a StarkNet szerződések írása továbbra sem támogatott.**StarkNet szintaxis (tárolási változók / hívási szerződések / események és egyéb rendszerhívások) a következő hetekben kerül hozzáadásra.

### Kódpéldák

A régi szintaxis és a Cairo 1.0 közötti különbségek szemléltetésére úgy döntöttünk, hogy bemutatunk néhány különböző megvalósítást/ízt az n-edik Fibonacci-szám megtalálásához.

### I. példa: Kifejezések egyezése

A Cairo 1.0-ban rozsdaszerű[match](https://doc.rust-lang.org/rust-by-example/flow_control/match.html?highlight=match#match)kifejezéseket használhat. Többé nem fog félni az if/else kijelentésektől, amelyek hivatkozási visszavonást okozhatnak!

![](/assets/code01.png)

### II. példa: Adattípusok

Míg a Cairo 0 filcekkel és mutatókkal dolgozott, a Cairo 1.0-ban natív hozzáférésünk van a nyelv összetett adattípusaihoz. Alább található egy példa, amely az első n Fibonacci-szám tömbjét generálja.

![](/assets/code02.png)

Mint fentebb látható, ahelyett, hogy közvetlenül a memóriamutatókkal dolgoznánk, a `Array::<felt>\` típust és a \`array_append\`függvényt.

### III. példa: & tulajdonjogot strukturál

A következő kód a struktúrák használatát mutatja be a Cairo 1.0-ban.

![](/assets/code03.png)

> A következő bekezdés a közönség körében a rusztáknak szól. A Cairo 1.0 a rozsdához hasonló módon kezeli a memóriát. Különösen[tulajdonjog és a kölcsönfelvétel](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html)fogalmát használja. Így a \`FibResult\` struktúra egy tagjának elérésével (jelen esetben \`result.value\`) áthelyeztük az \`eredményt\`, ami azt jelenti, hogy ha a FibResult nem másolható, akkor nem tudjuk érje el újra a \`result.index\` fájlban. Ennek kiküszöbölésére adjuk hozzá a \`#\[derive(Copy)]\` attribútumot a \`FibResult\` típushoz. A jövőbeli verziókban hozzáadjuk az automatikus dekonstrukciót a struktúrákhoz. Ez lehetővé teszi az egyik tag tulajdonjogának áthelyezését anélkül, hogy megérintené a többit (különös tekintettel arra, hogy a fenti kód akkor is lefordítható, ha a \`FibResult\` nem rendelkezik a copy attribútummal).

**Különösképpen vegye figyelembe, hogy a Cairo 1.0 teljesen absztrahálja Kairó eredeti (nem determinisztikus, csak olvasható) memóriamodelljét.**

## IV. példa: Hiba terjedése

A következő kód az n-edik Fibonacci-számot számítja ki, de az előző példákkal ellentétben az összes bemenet uint128 típusú. Ne feledje, hogy ez megoldja az uint-kezelés egyik fő fájdalmas pontját Kairó 0-ban. Itt az uint128 (és a jövőben az uint256) natív típus.

![](/assets/0_s8bhjf_ade3carmi.png)

Két 128 bites egész szám összeadása túlcsordulást okozhat. A fenti kód a[Option enum](https://doc.rust-lang.org/rust-by-example/std/option.html)és a[kérdőjeles](https://doc.rust-lang.org/rust-by-example/std/result/question_mark.html)operátort használja a túlcsordulás esetének kezelésére az egyik közbenső kiegészítésben. Hasonlítsa össze ezt a[jelenlegi](https://github.com/starkware-libs/cairo-lang/blob/9889fbd522edc5eff603356e1912e20642ae20af/src/starkware/cairo/common/uint256.cairo#L31)uint256 hozzáadási szintaxissal, ahol a \`unit256_check\` függvényt kellett meghívni a megbízhatóság garantálásához. Ezenkívül a közeljövőben hozzáadjuk a \`pánik\` fogalmát a nyelvhez (hasonlóan a rozsdás[panic](https://doc.rust-lang.org/rust-by-example/std/panic.html)makróhoz), és az olyan egyszerű hibák, mint az összeadás túlcsordulása, nem lesznek elfoghatók és automatikusan továbbterjednek, ami azt jelenti, hogy nem kell használnod az \`Option\` vagy \`?\` uints hozzáadásakor.

## Próbáld ki magad

Most már lefordíthatja és futtathatja a jelenleg támogatott Cairo 1.0 programokat! Kövesse ezeket</a>

\`cairo-run\` parancs használatához. Vegye figyelembe, hogy a motorháztető alatt a[Rust Cairo VM](https://github.com/lambdaclass/cairo-rs), amelyet[Lambdaclass](https://lambdaclass.com/)fejlesztett ki a végrehajtáshoz.</p> 

További példákat találhat az induláshoz[itt](https://github.com/starkware-libs/cairo2/tree/main/examples). Vegye figyelembe, hogy ez csak az első bepillantás a fordítóprogram fejlesztésébe; a következő hetekben a fordítóprogram mellett továbbfejlesztjük a CLI-t.



## Jövőbeli tervek

A Compiler első, az első negyedév elejére tervezett verziójának középpontjában a StarkNet összes meglévő funkciójának támogatása áll Kairóban 1.0. Emellett a Cairo 1.0 fordító képességeinek kibővítésén is dolgozunk. A következő hetekben a következőkre számíthatsz:

* StarkNet képességek – intelligens szerződések írása és rendszerhívások használata.
* Hurkok
* Új könyvtári funkciók
* Továbbfejlesztett nyelvi szerver
* A StarkNet gáz natív fogalma

Ügyeljen arra, hogy maradjon velünk, és kövesse nyomon a fordító folyamatát!