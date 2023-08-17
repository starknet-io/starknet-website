### Izgalmas idők előtt

Az Alpha 4 ma megjelent a Goerli-n. Ez a verzió a Mainnet kiadás jelöltje, és ha minden a terveknek megfelelően alakul, a hónap végéig a Mainnet-en kerül forgalomba.

Az Alpha 4 az Alpha 3 funkciókkal teli kiadását követi, amely többek között a kairói fordítási idők javítását, a szerződéses konstruktőröket és még sok mást tartalmazott (lásd a[teljes kiadási megjegyzéseket](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.5.0)).

Fontos megjegyezni: ez még mindig egy Alpha verzió – a szerződés Mainnet rendszeren történő telepítéséhez kövesse az új alkalmazások[onboarding](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu)irányelveit.

### Új funkciók

Bár ennek a verziónak a fő célja a Mainnet bevezetésre való felkészülés, számos új funkciót is tartalmaz:

#### Szerezze meg a szerződés címét

A szerződések mostantól megkaphatják saját címüket az új \`get_contract_address\` syscall segítségével. Végül leállíthatjuk a szelfiszerződést.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">RIP szelfi szerződés: 2021. szeptember – 2021. november</p>&mdash; Francesco Ceccon (@ceccon_me) 2021. november <a href="https://twitter.com/ceccon_me/status/1458410251078836227?ref_src=twsrc%5Etfw">1.</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### Hash blokkolása

A blokkokat immár hash segítségével azonosítják, nem pedig azonosítóval. Ez a tranzakciós hashekre való legutóbbi átállásunkat követi. Az összes API-t ennek megfelelően frissítettük. Hamarosan kiadjuk a rendszer teljes műszaki dokumentációját, amely a blokkszerkezet specifikációját is tartalmazza.

#### Szerződési címek

Ez a verzió megváltoztatja a szerződési címek kiszámításának módját. A cím egy Pedersen-kivonat a hívó címén, egy só (véletlenszerű vagy a telepítő által választott), a szerződéskód-kivonat és a konstruktor argumentumainak hash-je, mindegyik előtaggal hozzáfűzve.

```
Hash(PREFIX, hívó_címe, só, szerződés_kivonat, ctr_args_hash)
```

A jelenlegi verzióban a hívó címe mindig 0, de a jövőbeli verziókban ez lehetővé teszi a szerződések közvetlenül a meglévő szerződésekből történő telepítését.

Vegye figyelembe, hogy ez a séma nagyon hasonlít a CREATE2-hez.

[Tekintse meg a teljes kiadási megjegyzéseket](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.6.0)

#### Token Bridges

A token hidak a StarkNet infrastruktúra kulcsfontosságú részét képezik. Lehetővé teszik pénzeszközök átutalását a StarkNetbe és onnan. A hidat a közzététel időpontjában még nem telepítették, de néhány napon belül elérhető lesz – a funkcionalitásának és használatának teljes dokumentációjával együtt. Egy dolgot fontos megjegyezni, hogy a híd a[L1<>L2 üzenetküldő](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html)protokollt használja. Mint ilyen, rövid kifizetési időket kínál – amint a kifizetés egy kötegbe kerül, és az L1-en elfogadásra kerül, az alap azonnal elérhető a felhasználó számára az L1-en.

Ez a token hidak első verziója, és szeretnénk visszajelzést kapni az ökoszisztémától.

### Csatlakozz a StarkNethez

Soha nem volt jobb alkalom a növekvő StarkNet közösséghez való csatlakozásra. Csatlakozhat a beszélgetéshez a[StarkNet diszcordban](https://discord.gg/uJ9HZTUk2Y), részt vehet egy[online workshopon](https://forms.reform.app/starkware/join-a-starknet-workshop/2ma1x8), vagy használhatja a[oktatóanyag egyikét](https://www.cairo-lang.org/docs/hello_starknet/index.html)az első saját alkalmazás elkészítéséhez.

**Frissítés (2021. november):**StarkNet Alpha élőben az Ethereum Mainnet oldalon