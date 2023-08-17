### TL;DR

* **A díjak mostantól kötelezőek a Testneten, hamarosan a Mainneten**
* Szerződéses gyári minta már lehetséges!
* A StarkNet szerződéses osztályokat vezet be
* A delegált hívás helyébe a könyvtári hívás lép

### Intro

Örömmel mutatjuk be a StarkNet Alpha 0.9.0-t! Ez egy fontos verzió, amelyben a StarkNet jelentős lépéseket tesz a kiforrottság felé, jelentős kiegészítéssel mind a funkcionalitás, mind a protokolltervezés terén.

**A díjak kötelezőek**(jelenleg csak a Testneten, amíg a 0.9.0-s verzió nem lesz elérhető a Mainnet-en) – minden virágzó L2-nek saját független díjrendszerrel kell rendelkeznie. Miután a 0.8.0-s verzióban opcionális szolgáltatásként bevezettük a díjakat, most már biztosak vagyunk abban, hogy ezeket a protokoll alapvető összetevőjeként beépítjük, és kötelezővé tesszük. További részletek alább.

Egy másik jelentős változás protokoll szinten a szerződésosztályok bevezetése és az osztály/példány szétválasztás. Ez lehetővé teszi a \`delegate_call\` funkció egyszerűbb használatát és a meglévő szerződésekből származó telepítéseket, lehetővé téve a gyári mintát a StarkNeten.

### Szerződéses osztályok

Az objektum-orientált programozásból merítve különbséget teszünk a szerződéskód és annak megvalósítása között. Ezt úgy tesszük, hogy a szerződéseket osztályokra és példányokra osztjuk.

A**szerződési osztály**a szerződés meghatározása: Kairói bájtkódja, tippinformációi, belépési pontok nevei és minden, ami a szemantikájának egyértelmű meghatározásához szükséges. Minden osztályt az osztálykivonat azonosít (hasonlóan az OOP nyelvekből származó osztálynévvel).

A**szerződéspéldány**, vagy egyszerűen egy szerződés, valamely osztálynak megfelelő telepített szerződés. Ne feledje, hogy csak a szerződéses példányok viselkednek szerződésként, azaz saját tárral rendelkeznek, és tranzakciók/egyéb szerződések hívhatják le őket. Egy szerződésosztálynak nem feltétlenül van telepített példánya a StarkNetben. Az órák bevezetése több protokollmódosítással is jár.

#### Tranzakció „bejelentése”.

Egy új típusú tranzakciót vezetünk be a StarkNeten: a['declare'](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)tranzakciót, amely lehetővé teszi a szerződés**osztályú deklarálását.**A \`deploy\` tranzakcióval ellentétben ez nem telepíti az adott osztály példányát. A StarkNet állapota tartalmazni fogja a deklarált osztályok listáját. Új osztályok adhatók hozzá az új \`declare\` tranzakcióval.

#### A „telepítési” rendszerhívási és szerződéses gyárak.

Ha egy osztály deklarálva van, azaz a megfelelő \`declare\` tranzakció elfogadásra került, telepíthetjük az osztály új példányait. Ebből a célból az új \`deploy\` rendszerhívást használjuk, amely a következő argumentumokat veszi fel:

* Az osztály hash
* Só
* Konstruktori argumentumok

A „telepítési” rendszerhívás ezután a szerződésosztály egy új példányát telepíti, amelynek[](https://docs.starknet.io/docs/Contracts/contract-address)címét a fenti három paraméter és a telepítő címe (a rendszerhívást meghívó szerződés) határozza meg.

A telepítések meghívási tranzakcióba való belefoglalása lehetővé teszi számunkra, hogy a telepítésekért árat és díjat számítsunk fel, anélkül, hogy a telepítéseket és a meghívásokat eltérően kellene kezelnünk. A telepítési díjakkal kapcsolatos további információkért lásd:[a dokumentumok](https://docs.starknet.io/docs/Fees/fee-mechanism#deployed-contracts).

Ez a funkció bevezeti a szerződéses gyárakat a StarkNetbe, mivel bármely szerződés meghívhatja a \`deploy\` syscall-t, új szerződéseket hozva létre.

#### Áttérés a „Delegate Call”-ról a „Library Call”-ra

Az osztályok bevezetése lehetővé teszi egy jól ismert probléma megoldását az Ethereum delegált hívási mechanizmusában: Amikor egy szerződés delegált hívást hajt végre egy másik szerződéshez, akkor csak az osztályára (kódjára) van szüksége, nem pedig egy tényleges példányra (tárhelyére). Ezért rossz gyakorlat egy konkrét szerződéspéldány megadása delegált hívás során (valóban néhány hibához vezetett az Ethereum-szerződésekben) – csak az osztályt kell megadni.

A régi \`delegate_call\` rendszerhívás elavulttá válik (a régi szerződések, amelyek már telepítve vannak, továbbra is működni fognak, de a \`delegate_call\`**szerződések már nem fordítják le**), és egy új library_call rendszerhívás váltja fel, amely az osztály hash-jét kapja meg (egy korábban deklarált osztályé) a szerződéspéldány címe helyett. Vegye figyelembe, hogy egy könyvtári felhívásban csak egy tényleges szerződés szerepel, így elkerüljük a felhívási szerződés és a megvalósítási szerződés közötti félreértést.

#### Új API-végpontok

Két új végpontot adtunk az API-hoz, lehetővé téve az osztályokhoz kapcsolódó adatok lekérését:

* \`get_class_by_hash\`: az osztálykivonat alapján az osztálydefiníciót adja vissza
* \`get_class_hash_at\`: egy telepített szerződés osztálykivonatát adja vissza a szerződés címének megadásával

Vegye figyelembe, hogy a telepített szerződés osztályának közvetlen megszerzéséhez a fenti két módszer végrehajtása helyett használhatja a régi \`get_full_contract\` végpontot, amely a jövőbeni verziókban át lesz nevezve. A fent említett összes végpont a[StarkNet CLI](https://docs.starknet.io/docs/CLI/commands)-ből is használható.

#### Díjak

Folytatjuk a díjak beépítését a StarkNetbe, kötelezővé téve azokat (először a Testneten, majd később a Mainneten is) ``[invoke](https://docs.starknet.io/docs/Blocks/transactions#invoke-function)\` tranzakciókhoz. A \`declare\` tranzakció ezen a ponton nem igényel díjat. Hasonlóképpen, a \`deploy`` tranzakciók sem igényelnek díjat, azonban vegye figyelembe, hogy ez a tranzakciótípus valószínűleg elavult lesz a jövőbeli verziókban.

Számos nyitott kérdés maradt ezen a területen, a legszembetűnőbbek a szerződésnyilatkozatok és a StarkNet-fiókok telepítésének díjak felszámítása. A következő verziókban ezekkel a problémákkal foglalkozunk.

### Mi a következő lépés?

Február[](https://medium.com/starkware/starknet-on-to-the-next-challenge-96a39de7717)jén bejelentett ütemtervünket követve elkötelezettek vagyunk a StarkNet teljesítményének általános, és különösen a szekvenszer teljesítményének javítása mellett, hogy a felhasználók gyorsabb visszajelzést kapjunk tranzakcióikról. A következő verzióban a párhuzamosítást tervezzük bevezetni a szekvenszerbe, ami gyorsabb blokkgyártást tesz lehetővé.

A StarkNet következő nagyobb verziója a StarkNet fiókjainak szerkezetére fog összpontosítani, a[ERC-4337](https://medium.com/infinitism/erc-4337-account-abstraction-without-ethereum-protocol-changes-d75c9d94dc4a)hez hasonló módon. Ezzel véglegesítjük a StarkNet fiókok viselkedését, ami újabb jelentős lépést tesz a tömeges elfogadás felé!