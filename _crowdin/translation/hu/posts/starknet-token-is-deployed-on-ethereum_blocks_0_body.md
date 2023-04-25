### TL;DR

* A StarkNet Token (STRK) most már telepítve van az Ethereum Mainnet hálózaton
* **Óvakodj a csalásoktól!**StarkNet token nem kínált eladásra
* Időbe fog telni, amíg az Alapítvány meghatározza a tokenek elosztásának mechanizmusát
* A StarkWare részvényesei, alkalmazottai és független partnerszoftver-fejlesztői által birtokolt tokeneket négy évre zárolják, és egy év után fokozatosan kibocsátják.
* A token elősegíti a StarkNet decentralizációját, köszönhetően szavazásra, tétre és díjfizetésre

Ma[StarkNet](https://starknet.io/)újabb lépést tesz a decentralizáció felé. A StarkNet token most[az Ethereum](https://etherscan.io/address/0xca14007eff0db1f8135f4c25b34de49ab0d42766)-en. Gyors összefoglaló: Az STRK-t tét tokenként fogják használni a StarkNet konszenzusos mechanizmusaiban való részvételhez, kormányzási tokenként és tranzakciós díjak fizetésére. Az egyes segédprogramok indoklását[decentralizációs javaslatunk](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)tartalmazza, a „Mire fogják használni a tokeneket?” című részben.

***Óvakodj a csalásoktól:**a cikk írásakor nincs lehetőség StarkNet token vásárlására; ez az értékesítés tilalmi időszak a[StarkNet Foundation](https://twitter.com/StarkNetFndn)további értesítéséig érvényben marad; kövesse a StarkNet Alapítvány hivatalos közleményét, hogy tájékozódjon az STRK állapotával kapcsolatos frissítésekről. A[StarkNet Discord](http://starknet.io/discord)szerver[scam-report](https://discord.gg/qypnmzkhbc)csatornáján jelentheti az átveréseket, és kereshet más átverési jelentéseket.*

Ez a bejegyzés elmagyarázza a jogkivonat kiosztási folyamatát, és azt, hogy a telepített jogkivonat-szerződések hogyan szolgálnak ki a token három tervezett segédprogramja közül kettőt, nevezetesen a szavazást és a tétet. A harmadik segédprogramról – a StarkNet díjak fizetéséről – egy későbbi időpontban lesz szó.

### A token kiosztási folyamat megtervezése

Korábban[](https://medium.com/starkware/part-3-starknet-token-design-5cc17af066c6)tervet javasoltunk a tokenek kezdeti kiosztására. A részvényesek, alkalmazottak és független szoftverfejlesztők számára kiosztott tokeneket négy évre zárolják, a fokozatos kiadási ütemezés pedig egy év után kezdődik. A zárolt tokenek felhasználhatók szavazásra és tétre, de nem ruházhatók át vagy kereskedhetnek velük. A tokenek egy részét az Ethereum dedikált intelligens szerződése zárolja, míg más tokenek a letétkezelők révén vannak zárolva.

Külön-külön, a meglévő StarkNet tokenek 50,1%-át a StarkNet Alapítvány kapja, hogy[cél](https://medium.com/@StarkNet_Foundation/welcome-to-the-world-starknet-foundation-7bd55d5dbc59)teljesítésére használják fel (vö.[StarkWare bejegyzése](https://medium.com/starkware/introducing-the-starknet-foundation-bd4b4379fbb)). Ezek a tokenek nincsenek zárolva. Az alapítványnak azonban időre van szüksége, hogy megfogalmazza a pontos mechanizmust a tokenek további kiosztásához, és kellő időben megosztja a terveit.

#### Miért zárás?

A tokenek zárolása a fent említett időszakra biztosítja, hogy a jelenlegi közreműködők igazodjanak a StarkNet hosszú távú ösztönzőihez. Ezenkívül elriasztja a tokennel kapcsolatos spekulációkat, mielőtt a széles körben elterjedt volna a rendeltetési célokra: a hálózat biztosítására, díjak fizetésére és az irányítás decentralizálására.

Ezután elmagyarázzuk, hogyan támogatja a token megvalósítása a szavazást és a tétet.

### Szavazás

Az alapítvány feladata lesz a megbízható kormányzás elősegítése és a szavazási mechanizmusok kialakítása. A StarkNet Tokent úgy tervezték, hogy lehetővé tegye mind a közvetlen szavazást, mind a delegálási mechanizmusok széles skáláját.

#### L1 szavazás

A most telepített ERC-20 megvalósítás**opcionális**használatát tartalmazza a Compound[delegációs moduljában](https://docs.compound.finance/v2/governance/). Ezt a modult széles körben használják a láncon belüli szavazáshoz. Az ok, amiért opcionális a StarkNeten, és alapértelmezés szerint ki van kapcsolva, a költségmegfontolás. A bekapcsolása azt jelenti, hogy a StarkNet Tokenek minden átvitele az L1-en extra gázt igényel, amely kizárólag a szavazati jogok változásainak nyomon követéséhez szükséges.

#### Nem L1 szavazás

Az L1 láncon belüli szavazás alternatívái a Compound delegálási moduljával a láncon kívüli szavazás, valamint a StarkNet alapú láncon belüli szavazási rendszerek (mint például[SnapshotX](https://snapshot.mirror.xyz/cUOrwdtEs5PvNh0sqYWWxPjt8GdJWn_Qp3cl7E3_8IU)). Ezek az alternatívák, amelyek jelentősen csökkentik a gázfogyasztást az L1-es átviteleknél, nem igényelnek kifejezett támogatást a jelenleg telepített ERC-20 kódtól, ezért természetesen támogatottak.

Ahogy fentebb említettük, minden token – zárolt és feloldott is – használható lesz a StarkNet szavazási mechanizmusában.

### Staking

A StarkNet engedély nélküli és cenzúraálló működéséhez a szekvenszerek véletlenszerű kiválasztására van szükség. Annak a valószínűsége, hogy egy csomópontot kiválasztanak a szekvenciára és a blokk javaslatára, arányos az adott csomópontban lévő StarkNet tokenek számával. A StarkNet tokenek (nem pedig mondjuk az Ethereum vagy a Bitcoin) használatának indokait a[irányítási javaslat](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)magyarázza el, és a StarkNeten történő kockáztatás, szekvenálás és blokkok létrehozásának pontos részleteiről a közösség jelenleg is tárgyal[](https://community.starknet.io/t/starknet-decentralized-protocol-introduction/2671)és még véglegesítendő.

Akárcsak a szavazásnál, a tokenek akkor is használhatók tétre, ha zárolva vannak. Ez hozzájárul a StarkNet operátorok sokféleségéhez és a StarkNet rugalmasságához.

### Összegzés

A StarkNet Token szerződések telepítése az Ethereumon egy újabb lépés a StarkNet decentralizációjában.

Kérjük a fejlesztőket és a felhasználókat, hogy óvakodjanak a csalásoktól! A közzététel időpontjában a tokenekkel nem lehet kereskedni, és ez a no-trade státusz a StarkNet Alapítvány további értesítéséig érvényben marad.

További kérdésekért keresse fel a[Token-discussions](https://discord.gg/qypnmzkhbc)csatornát a[StarkNet Discord](http://starknet.io/discord)szerveren.