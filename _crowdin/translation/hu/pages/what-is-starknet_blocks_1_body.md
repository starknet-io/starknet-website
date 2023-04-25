## Bevezetés

A Starknet egy 2. érvényességi összesítő réteg. Nagy áteresztőképességet, alacsony gázköltséget biztosít, és megőrzi az Ethereum Layer 1 biztonsági szintjét

Adott egy sudoku rejtvény, a megoldás ellenőrzése könnyebb, mint a semmiből. Ha az a célunk, hogy meggyőzzük az embereket a „ez a rejtvény megoldódott” kijelentésről, sok számítási időt megspórolhatunk, ha egy személy kiszámítja a megoldást, majd továbbadja másoknak, hogy ellenőrizzék. Ebben a stratégiában a megoldás minden egyes számítása egyszeri eseménnyé válik, amely nem igényel replikációt a társadalom részéről. Hasonló módon a Starknet az Ethereumot úgy méretezi, hogy a nehéz L1 számításokat könnyebbre (tehát olcsóbbra) cseréli. L1-ellenőrzés a láncon kívüli STARK-bizonyítékokkal.

## Hogy működik

A fenti hasonlatot szem előtt tartva, megérett az idő egy kis zsargonra. A Starknet egy engedély nélküli Validity-Rollup (más néven „ZK-Rollup”), amely támogatja az általános számításokat, és jelenleg L2 hálózatként működik az Ethereumon keresztül. A Starknet végső L1 biztonságát a legbiztonságosabb és leginkább méretezhető kriptográfiai bizonyítási rendszer – [STARK](https://starkware.co/stark/)használata biztosítja.

A Starknet szerződések (többnyire) Kairó nyelven íródnak – ez egy teljes Turing programozási nyelv, amelyet STARK bizonyításra terveztek.