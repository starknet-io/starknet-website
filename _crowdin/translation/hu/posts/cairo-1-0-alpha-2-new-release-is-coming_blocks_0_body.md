### TL;DR

* Kiadjuk a Cairo 1.0-alpha.2 verziót, amely számos új funkciót hoz a nyelvbe
* Mostantól lehetőség van egy ERC20 szerződés végrehajtására
* Az új nyelvi funkciók a következő StarkNet-v0.11.0 verzióban is alkalmazhatók lesznek

### Friss új funkciók!

A Cairo 1.0 folytatja gyors fejlődési ütemét. A mai kiadás többek között bemutatja az ERC-20 szerződés megírásához szükséges összes funkciót.

Hogy néhány új funkciót említsünk:

* Szótárak
* Események a szerződésekben
* Tárolási változók leképezése
* Tulajdonságok támogatása
* Típuskövetkeztetés
* Mód

Tekintse meg a teljes listát a GitHub [adattárában.](https://github.com/starkware-libs/cairo)

Vessünk egy példát egy ERC20-szerződésre (a teljes konkrét példa természetesen a[GitHubon](https://github.com/starkware-libs/cairo/blob/main/crates/cairo-lang-starknet/test_data/erc20.cairo)van), hogy bemutassuk egy esemény használati esetét és a tárolóban lévő leképezéseket:

![](/assets/0_i4ch5-4rxxal4rkt.png)

### Ugorj a vízbe!

Folytatjuk a munkát két párhuzamos vektoron:

1. Fejlessze a Cairo 1.0-t teljes sebességgel a teljes funkciós kompatibilitás érdekében a régi Kairóval.
2. A Starknet v0.11.0 fejlesztése, amely támogatja a Cairo 1.0-ban írt szerződéseket

Addig is arra biztatjuk a fejlesztőket, hogy kezdjenek el írni a Cairo 1.0-val, és ismerkedjenek meg vele.

Bármilyen kérdés esetén használhatja a Cairo 1.0 Discord[](https://discord.com/channels/793094838509764618/1065544063245365288)csatornát.

Bármilyen javaslatért vagy visszajelzésért – ne habozzon megnyitni egy[számú](https://github.com/starkware-libs/cairo/issues)kérdést a kairói repóban.