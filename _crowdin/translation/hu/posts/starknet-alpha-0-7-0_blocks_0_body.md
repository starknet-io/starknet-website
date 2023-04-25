### TL;DR

* A StarkNet Alpha 0.7.0 kiadása Goerli számára; tele van fejlesztésekkel
* A szerződések mostantól frissíthetők a Proxy frissítési mintával
* A szerződések mostantól eseményeket bocsáthatnak ki
* Támogatás a régóta várt blokkszám és blokkidőbélyeg rendszerhívásokhoz

### Intro

Örömmel jelentettük meg az Alpha 0.7.0-t, amely új funkciókkal és fejlesztésekkel van tele. A StarkNet egyik legjobb ösztönzője az elmúlt néhány hónapban a közösség fokozott bevonása volt a StarkNet jövőjének alakításában. Ez a verzió a közösség égető igényeit kielégíti.

#### Változások az elnevezési egyezményben

A figyelmes olvasó észrevehette, hogy az előző StarkNet Alpha kiadás az Alpha 4 nevet kapta, míg mi most az Alpha 0.7.0-t adjuk ki. Úgy döntöttünk, hogy elhagyjuk a dedikált Alpha verziószámot, és ehelyett csak a kapcsolódó cairo-lang verzióra hagyatkozunk.

### Új funkciók

#### A szerződés bővíthetősége

Az OpenZeppelin[Proxy Upgrade Pattern](https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies)immár teljes mértékben támogatja a StarkNet szerződéses frissítéseit. A proxy minta az Ethereumon keresztüli szerződésfrissítések általános módja. Az Alpha 0.7.0 lehetővé teszi ezt a mintát a StarkNeten keresztül.

Készítettünk egy rövid[oktatóanyagot](https://starknet.io/docs/hello_starknet/default_entrypoint.html)a minta alapvető megvalósításának bemutatására, és az OpenZeppelin már keményen dolgozik a proxy minta szabványos szerződésének megvalósításán; lásd a[prototípust](https://github.com/OpenZeppelin/cairo-contracts/pull/129).

#### Blokkszám és Blokkidőbélyeg

Az Alpha 0.7.0 két új rendszerhívást ad hozzá, amelyeket sok fejlesztő kért. Ezek a hívások lehetővé teszik a szerződés számára, hogy hozzáférjen a blokkszámhoz és a blokk időbélyegzőjéhez. A blokkszám az aktuálisan végrehajtott blokk számát adja vissza. A blokk időbélyege azt az időbélyeget adja vissza, amelyet a Sequencer adott a blokk létrehozásakor.

Példát láthat ezeknek a funkcióknak a használatára a[oktatóanyagban](https://starknet.io/docs/hello_starknet/more_features.html#block-number-and-timestamp).

#### Események

Meglepetés! Egy jövőbeli verzióhoz tervezett funkció belopakodott ebbe a korábbi verzióba.

A StarkNet szerződések mostantól támogatják az események meghatározását és kibocsátását, lehetővé téve számukra, hogy végrehajtási információkat tárjanak fel a láncon kívüli alkalmazások számára. Az Ethereum fejlesztői a szemantikát és a szintaxist nagyon hasonlónak találják a Solidity-hez. Elolvashatja a[dokumentációt](https://starknet.io/documentation/events/)vagy kövesse a[oktatóanyagot](https://starknet.io/docs/hello_starknet/events.html), amely elmagyarázza ezt a funkciót.

#### %builtins irányelv eltávolítva

A %builtin direktíva már nem szükséges a StarkNet szerződésekben. Ez a változás a[StarkNet Shamans](https://community.starknet.io/)-on a[szerződés-bővíthetőségi mintáról](https://community.starknet.io/t/contract-extensibility-pattern/210)szóló közösségi megbeszélést követte. Jelentősen leegyszerűsíti ennek a bővíthetőségi mintának a használhatóságát.

Például a következő szerződés módosul a következőről:

```
%lang starknet

# Ez a "%builtins" direktíva.
# Nincs rá többé szükség.
%builtins range_check

@view
func add(x : filc, y : filc) -> (res : filc):
return (res=x + y)
end
```

Ehhez:

```
%lang starknet
@view
func add(x : filc, y : filc) -> (res : filc):
return (res=x + y)
end
```

Megtekintheti a[ERC-20](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts/token)szabványos szerződést, amelyek az új mintát használják.

#### A külső funkciók struktúrák tömbjeit támogatják

Az Alpha 0.7.0 támogatja a struktúrák átadását és visszaadását a külső függvényekben. Ez a kiegészítő funkció lehetővé teszi, hogy a fiókszerződések jobban támogassák[többszörös hívást](https://github.com/OpenZeppelin/cairo-contracts/pull/73#discussion_r753535751).

A Multicall a fiókabsztrakció egyik hatékony funkciója, amely lehetővé teszi, hogy egy fiók több hívást kezdeményezzen egyetlen tranzakció során. Egy kézenfekvő használati eset egy**egyetlen tranzakció**létrehozása, amely felhívja a ráhagyást, majd az átadást.

Kíváncsian várjuk, mit kezd vele a közösség.

#### A StarkNet CLI továbbfejlesztései

**Függőben lévő blokkok támogatása**

[Függőben lévő blokkok](https://starknet.io/documentation/block-structure-and-hash/#pending_block)[került bevezetésre](https://community.starknet.io/t/cairo-v0-6-2-api-change-pending-block/195)az utolsó kisebb verzióban (v0.6.2), és gyorsabb visszaigazolást kínáltak a tranzakciókról. Ez a verzió támogatja a blokkok StarkNet CLI-n keresztüli lekérdezését.

Használatához minden CLI-parancsban, amely a blokk_számot veszi argumentumként (contract_call/get_block/get_code/get_storage_at), lekérdezhetjük a StarkNet-et a függőben lévő blokkra vonatkozóan a block_number=pending megadásával.

**Számlaszerződések támogatása**

A StarkNet fiókabsztrakciót használ, azaz minden fiók intelligens szerződésként valósul meg. A számlaszerződések első implementációit[Argent](https://github.com/argentlabs/argent-contracts-starknet)és[OZ](https://github.com/OpenZeppelin/cairo-contracts/blob/main/contracts/Account.cairo)végezte el, de várhatóan még sok ilyen lesz.

A StarkNetben minden tranzakciónak számlaszerződésen kell keresztülmennie, és a CLI mostantól lehetővé teszi a StarkNet Alpha-val való interakciót közvetlenül a számlaszerződéseken keresztül. Tekintse meg a[oktatóanyagot](https://starknet.io/docs/hello_starknet/account_setup.html#setting-up-a-starknet-account)a beállításáról.

Hasonló funkciókkal bővült[StarkNet.py](https://github.com/software-mansion/starknet.py/)és a[Nile](https://github.com/OpenZeppelin/nile)is az elmúlt hónapban.

#### L1<>L2 üzenetküldés a tesztelési keretrendszerben

Az Alpha 0.7.0 bemutatja a Postást. A Postman lehetővé teszi a fejlesztők számára, hogy a tesztelési keretrendszert bonyolultabb folyamatok tesztelésére használják.

Magas szinten – kigúnyolja a StarkNet Sequencer azon felelősségét, hogy üzeneteket továbbítson az L1-ből L2-be és L2-ből L1-be. Biztosítja, hogy a Solidity üzenetküldési szerződésen keresztül küldött üzenetek megjelenjenek a cél StarkNet szerződésben, a StarkNet szerződésből küldött üzenetek pedig a Solidity üzenetküldési szerződésben.

#### És további funkciók

Az Alpha 0.7.0 számos további szolgáltatást és változtatást kínál, például egy hatékony négyzetgyök függvény hozzáadása a matematikai közös könyvtárhoz. A teljes lista megjelenik a[változásnaplóban](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.7.0).

### Következö?

Az Initial[Fee Mechanism](https://community.starknet.io/t/fees-in-starknet-alpha/286/29)támogatás heteken belül megjelenik a StarkNet alváltozataként.

### Több információ?

[starknet.io](https://starknet.io/): minden StarkNet-információ, oktatóanyag és frissítés.

[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y): csatlakozzon, hogy választ kapjon kérdéseire, fejlesztői támogatást kapjon, és részese legyen a közösségnek.

[StarkNet Shamans](https://community.starknet.io/): csatlakozzon, hogy kövesse (és vegyen részt!) a StarkNet kutatási megbeszélésein.