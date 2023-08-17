### TL;DR

* Fiókabsztrakciós fejlesztések az EIP-4337 szellemében

1. Érvényesítés – Elválasztás végrehajtása
2. A tranzakció egyedisége mostantól biztosított a protokollban (Nonce)

* A díjmechanizmus a következőkre terjed ki:

1. L1→L2 Üzenetek
2. Tranzakciók deklarálása

* Néhány kairói szintaxis változás

### Bevezetés

Izgatottan várjuk a StarkNet Alpha 0.10.0 bemutatását. Ez a verzió egy újabb lépés az Ethereum méretezéséhez anélkül, hogy a biztonság és a decentralizáció veszélyeztetné.

Ez a blogbejegyzés röviden ismerteti ennek a verziónak a főbb jellemzőit. A változtatások teljes listájáért tekintse meg a[kiadási megjegyzéseket](https://github.com/starkware-libs/cairo-lang/releases). További részletekért tekintse meg a[dokumentációt](https://docs.starknet.io/).

### Fiókabsztrakciós változások

Továbblépünk[StarkNet fiókabsztrakciójával](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781). Ez a verzió a[EIP-4337](https://eips.ethereum.org/EIPS/eip-4337)által ihletett változtatásokat vezet be.

#### Elválasztás érvényesítése/végrehajtása

Eddig a fiók \_\_execute\_\_ funkciója volt felelős mind a tranzakció érvényesítéséért, mind a végrehajtásért. A 0.10.0-ban megszakítjuk ezt a csatolást, és bevezetünk egy külön \_\_validate\_\_ függvényt a fiókokba. A tranzakció beérkezésekor a számlaszerződés először a \_\_validate\_\_ parancsot hívja meg, majd ha sikeres, akkor folytatja a \_\_execute\_\_ műveletet.

Az érvényesítés/végrehajtás szétválasztás protokollszintű különbséget tesz az érvénytelen és a visszaállított (még érvényes) tranzakciók között. Ennek köszönhetően a szekvenszerek díjat számíthatnak fel egy érvényes tranzakció végrehajtásáért, függetlenül attól, hogy azt visszaállították-e vagy sem.

#### Nonce

A 0.10.0-s verzióban egy nonce mező került hozzáadásra a tranzakció egyediségének kényszerítésére a protokoll szintjén. Eddig a nonces-eket a számlaszerződés szintjén kezelték, ami azt jelentette, hogy elméletileg kétszer is végrehajtható egy tranzakció azonos hash-sel.

Az Ethereumhoz hasonlóan most minden szerződés tartalmaz egy nonce-t, amely az ebből a számlából végrehajtott tranzakciók számát számolja. A számlaszerződések csak az egyező nonce-szel rendelkező tranzakciókat fogadják el, azaz ha a számla aktuális nonce-je X, akkor csak az X nonce-szel rendelkező tranzakciókat fogadja el.

#### Új tranzakció verzió

A visszamenőleges kompatibilitás érdekében ezt a két változtatást egy új tranzakcióverzión keresztül vezetjük be –[v1](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C). Ezek a módosítások csak az új verzióra vonatkoznak, és a régebbi fiókok továbbra is végrehajthatják a 0-ás verziójú tranzakciókat.

Megjegyzés – a tranzakció v0-s verziója elavult, és a StarkNet Alpha v0.11.0 verziójában eltávolítjuk. Kérjük, mindenképpen frissítsen az új tranzakciós verzió használatára.

A tranzakció verziójával kapcsolatos részletesebb információkért olvassa el a[dokumentációt](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C).

#### Díjmechanizmus

Az új verzió lehetővé teszi, hogy két szükséges összetevő díját tartalmazza:

* [L1→L2 Üzenet](https://docs.starknet.io/docs/L1-L2%20Communication/messaging-mechanism#l1--l2-message-fees)
* [Tranzakció deklarálása](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)

Ezek a díjak ebben a verzióban nem kötelezőek, és csak a StarkNet Alpha 0.11.0-s verziójától kezdődően lesznek érvényesítve.

#### Kairói szintaxis változásai

A Cairo,[Cairo 1.0](https://www.youtube.com/watch?v=Ny4Rv6ztINU)frissítése felé vezető fokozatos előrelépés érdekében ez a verzió számos szintaxis-módosítást tartalmaz.

A kellemetlenségek minimalizálása érdekében a verzió kiadása tartalmazni fog egy[](https://www.youtube.com/watch?v=kXs59zaQrsc)migrációs szkriptet, amely automatikusan alkalmazza a fenti változtatásokat. További részleteket[itt talál](https://github.com/starkware-libs/cairo-lang/releases).

### Mi a következő lépés?

* Néhány héten belül a párhuzamosítást tervezzük bevezetni a szekvenszerbe, ami gyorsabb blokkgyártást tesz lehetővé (V0.10.1)
* Hamarosan elkészül az utolsó rész, amelyet a díjfizetésbe bele kell foglalni – Fióktelepítés
* Cairo 1.0 kiadás! Erről bővebb információ egy következő bejegyzésben.

### Hogyan lehetek elkötelezettebb?

* Keresse fel[starknet.io](https://starknet.io/)webhelyet az összes StarkNet információért, dokumentációért, oktatóanyagokért és frissítésekért.
* Csatlakozz a[StarkNet Discord](http://starknet.io/discord)a fejlesztői támogatásért, az ökoszisztéma bejelentéseiért és a közösség részévé válásért.
* Látogassa meg a[StarkNet Forum](http://community.starknet.io/), hogy naprakész legyen, és részt vegyen a StarkNet kutatási megbeszélésein.

Mindig örömmel fogadunk visszajelzést[dokumentációnkkal](https://docs.starknet.io/)!