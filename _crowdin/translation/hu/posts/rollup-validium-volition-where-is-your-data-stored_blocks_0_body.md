### TL;DR

* A StarkWare számos adatelérhetőségi (DA) módot kínál az ügyfelek számára, amelyek közül választhatnak prioritásuk szerint
* Három megközelítés létezik a -bizonyítások</strong>vonatkozóan**mindegyik már elérhető a termelésben:\
  —**Rollup**: a főkönyvet közvetlenül a\
  teszik közzé. csak egy**van **\
  </p></li>
* Függetlenül attól, hogy melyik DA-t használják – az összes tranzakció érvényességét a STARK-ok garantálják</ul>

### Bevezetés

2022 novemberéig[StarkEx](https://starkware.co/starkex/)több mint 750 milliárd dollárnyi kereskedést és több mint 270 millió tranzakciót bonyolított le az Ethereumon. Az olyan NFT-területen, amely olyan alkalmazásokat működtet, mint az ImmutableX és a Sorare, a StarkEx több mint 85 millió NFT-t vert ki olyan áron, amely 1000-szer olcsóbb, mintha ezt közvetlenül az Ethereumon tenné. A STARK-alapú technológia méretezi az Ethereumot. Például egyetlen hét alatt a StarkEx 1,6-szor annyi tranzakciót bonyolított le Ethereum néven (12 millió StarkEx, vs 7,5 millió Ethereum), miközben az Ethereum blokkterületének kevesebb mint 0,1%-át foglalta el. Mindezt úgy teszi, hogy a felhasználók számára ugyanolyan szintű biztonságot nyújt, mintha közvetlenül az Ethereumon telepednének le.

### Hogyan éri el ezt a StarkWare?

A felhasználók a 2. rétegen (StarkEx vagy StarkNet) küldenek tranzakciókat, amelyeket kötegelt formában küldenek el egy STARK-ellenőrzőnek. Ez a STARK prover ismeri a főkönyv állapotát a tranzakciók feldolgozása előtt és után. A bizonyító STARK bizonyítványt állít elő, amely igazolja a főkönyv új állapotának érvényességét a tranzakciók végrehajtása után. Az új állapot és a STARK igazolás elküldésre kerül a láncon belüli STARK ellenőrzőnek. Ennek a bizonyítéknak az ellenőrzése önállóan történik egy megváltoztathatatlan intelligens szerződésen keresztül az Ethereumon.

Ez az architektúra mindkét világból a legjobbat nyújtja: alacsonyak lehetnek a tranzakciós költségek, miközben az Ethereum továbbra is a közepén áll, mint semleges választottbíró. Az Ethereum mint döntőbíró nem csak egy jó, ha megvan; kritikus biztonságot nyújt a végfelhasználó számára. A tranzakciót folytató felhasználó most biztos lehet abban, hogy pénzeszközeit az Ethereum biztosítja, és a tranzakciók megváltoztathatatlanok, miután ellenőrizték őket az Ethereumon. A felhasználó teljes körűen kezelheti pénzeszközeit. Az önőrzés azért fontos, mert biztosítja, hogy a felhasználó mindenkor hozzáférjen pénzeszközeihez anélkül, hogy harmadik félre támaszkodna.

### Hol illeszkedik mindehhez az adatok elérhetősége?

Fontos hangsúlyozni mind azt, amit ez a bizonyítás csinál, és azt is, amit*nem*tesz. A bizonyíték az új állapot érvényességét tanúsítja, de nem árulja el, hogy mi az új állapot. Ehhez adatok rendelkezésre állása szükséges. Ha csak a bizonyítványunk van, akkor a blokklánc tudja, hogy a leadott érvényes, de nem tudja, hogy mi az új állapot (pl. főkönyvi egyenleg)! Ezen adatok fogyasztói közé tartoznak azok a felhasználók, akiknek tranzakciói vannak ezeken a bizonyítékokon belül. Az adatokat elérhetővé kell tenni számukra, ha pénzt szeretnének felvenni az Ethereumon anélkül, hogy megbízniuk kellene a Layer 2 üzemeltetőjében. Ez lehetővé teszi a felhasználók számára, hogy teljes mértékben kezeljék pénzeszközeiket.

Ennek egyik analógiája az, hogy a középiskolai tanárod arra kér, bizonyítsd be, hogy x egyenlő x-szel. Ezt triviális bizonyítani. Mire nehezebb válaszolni: valójában mivel egyenlő x? Ehhez külön információra van szüksége. Lehet, hogy x egyenlő 5-tel, vagy egy másik érték. Hasonlóképpen, a blokkláncon a STARK igazolás benyújtható egy STARK hitelesítő intelligens szerződéshez ellenőrzés céljából. És az ellenőrző tanúsíthatja, hogy a bizonyíték érvényes (hogy x=x). De külön bemenetre van szükség, hogy megtudja, mi az x (az új főkönyvi egyenleg).

Három megközelítés létezik az adatok elérhetővé tételére:

#### Összegző mód

Az összesítő mód biztosítja, hogy a főkönyv állapotát a bizonyítványokkal együtt az Ethereum tárolja. Az összesítő módot jelenleg[dYdX](https://dydx.exchange/)használja a termelésben, és a[Public StarkNet](http://starknet.io/)L2 hálózat is használja. Az előnyök itt egyértelműek: csak az Ethereum blokklánccal való interakcióval lehet újra létrehozni a főkönyv állapotát. Ennek az a következménye, hogy Ön, mint végfelhasználó, bizalmatlanul beszélhet a vonatkozó intelligens szerződéssel az Ethereumon, és akkor is kiveheti a pénzét, ha a Layer 2 rendszer leáll.

#### Validium

Összegző módban az Ethereum gázköltségeinek többsége az adatok elérhetőségére, nem pedig a bizonyíték ellenőrzésére irányul. Ennek az az oka, hogy nagyon gázigényes az adatok tárolása a blokkláncon. Validium módban a főkönyvi információkat nem küldi el az Ethereum. Inkább a láncon kívül, egy adatelérhetőségi bizottsággal tárolják. Az Ethereum ezekből a főkönyvi információkból kivonatot tárol. Ez az Adatelérhetőségi Bizottság határozatképes független tagokból áll, akik felügyelik a helyes állapotfrissítést, valamint megőrzik a feldolgozott adatok másolatát. Minden StarkEx-példány létrehozhatja a saját kvórumát. A StarkEx-en futó alkalmazások kvórumának tagjai közé olyan entitások tartoznak, mint a[Consensys](https://consensys.net/),[Nethermind](https://nethermind.io/),[Iqlusion](https://iqlusion.io/)és[Cephalopod](https://cephalopod.equipment/).

Az előnyök itt egyértelműek. Nem kell Ethereum gázdíjat fizetni a főkönyvi információk láncon belüli tárolásához. Inkább az egyetlen dolog, amit az Ethereum tárol, a főkönyvi információk egyetlen hash-je. Ha bizalmatlanul szeretne pénzt kivenni a 2. rétegből az Ethereummal beszélve, csak az Adatelérhetőségi Bizottság egyik tagjának digitális aláírására van szüksége. A DAC-tagok titkosítást fognak használni annak bizonyítására, hogy Ön birtokolja ezeket az alapokat.

A Validium Data Availability másik rejtett előnye a blokkláncot olvasó emberek bizalmas kezelése. Az összesítő módban az egyes számlák egyenlege az egyes igazolások benyújtásakor ismert a nyilvánosság számára. A Validium esetében ezek az adatok el vannak rejtve a blokklánc elől – ezt csak az Adatelérhetőségi Bizottság tudja, mert a láncon kívül marad. Ez a titkossági szint sokféle használati esetet tesz lehetővé, ahol fontos a tranzakciós adatok elhomályosítása.

#### Akarat

A Volition egy olyan adatelérhetőségi architektúra, amely tranzakciós szinten biztosítja a választást a Validium és az Összegző mód között. Ezt úgy teszi, hogy egy főkönyvet a láncban tart, egy másik főkönyvet pedig egy adatelérhetőségi bizottsággal. A felhasználók minden egyes tranzakciónál választhatnak a Validium és az Összegzés mód között.

Képzelje el, hogy vásárol egy nagyon drága NFT-t, például egy Bored Ape-t vagy egy Cryptopunkot egy StarkEx-en futó alkalmazásban. Érdemes lehet az összesítő módot használni az adott NFT-hez tartozó adatok védelmére, mert szeretné az adott tranzakció rekordját az Ethereumon tárolni. Ekkor azonban vásárolhat egy igazán olcsó NFT-t (pl. egy köpenyt karakterének egy blokklánc játékban), és ebben az esetben szívesen spórolhat a Validium használatával.

Ha érdekli a STARK bizonyítások által elért lépték, akkor gyere és építs ránk.



Mindig írhat e-mailt[info@starkware.co](mailto:info@starkware.co)címre, és egy ember eljut az Ön e-mailjéhez.