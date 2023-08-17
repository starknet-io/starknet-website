## TL;DR

* Megjelent a Starknet alpha v0.11.0 és elérhető a Testneten
* Mostantól telepítheti a Cairo 1.0-s szerződéseket és kommunikálhat velük a Starknet Testneten!
* A Starkneten való számítás 5x olcsóbb!
* A Mainnet Starknet alpha v0.11.0 verzióra történő frissítése első alkalommal kerül irányítási szavazásra
* Ezzel kezdődik a[Regenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)előtti átmeneti időszak
* A Cairo 1.0-s szerződések telepítése a Mainnet hálózaton csak néhány héttel a Testneten való futtatás után válik lehetővé, miután biztosítjuk az új rendszer zökkenőmentes működését.

## Bevezetés

Örömmel jelentjük be, hogy a várva várt Starknet alfa v0.11.0 élőben elérhető a Testneten! Miért nagy lépés ez a Starknet számára? A Starknet v0.11.0 verziójában[Cairo 1.0](https://medium.com/starkware/cairo-1-0-is-here-7e1ac8377038)intelligens szerződést deklarálhat, telepíthet és futtathat. Bevezetünk egy új rendszerhívást is, amely lehetővé teszi a meglévő szerződések zökkenőmentes átállását a Cairo 1.0 implementációra.

A Cairo 1.0 két különböző szempontból javítja a Starknetet. Először is javítja a fejlesztési élményt azáltal, hogy gazdagabb programozási nyelvet kínál, amely (többek között) típusokat/generikusokat/jellemzőket/hibakezelést vezet be Kairóba. Másodszor, a Cairo 1.0 kulcsszerepet játszik a Starknet decentralizációs útjában: a Starknet alpha v0.11.0 verziójában elküldött Cairo 1.0 szerződéseket a Sierra fordítja le. A Sierra garantálja, hogy minden szerződés végrehajtása bizonyítható, ami egy decentralizált Starknet kulcsfontosságú tulajdonsága.

Egy másik fontos fejlesztés, amely ebben a verzióban érkezik, a számítási költségek 5-szörös csökkenése. Ezzel a Starknet még barátságosabb lesz a számításigényes alkalmazások számára. További részletek alább.

## Felkészülés a Regenesisre

A Starknet alpha v0.11.0 jelzi az átmeneti időszak kezdetét, amely lehetővé teszi a Starknet Regenesis előtti felkészülést. Starknet Regenesis tervét[tették közzé néhány hónapja](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4), és a Cairo 0 alapú rendszerről a Cairo 1.0 alapú rendszerre való átállásra összpontosít.

Az átmeneti időszakban a meglévő Cairo 0 szerződéseknek (ha frissíthetők) lehetőségük van fenntartani címüket és tárhelyüket, és zökkenőmentesen átállítani a megvalósítást a Cairo 1.0-ra (lásd a következő részt).

Starknet-felhasználóként ez azt jelenti, hogy csak akkor kell frissítenie pénztárcáját, ha fiókja új Cairo 1.0-s implementációja megjelenik (ezt magát a Regenesisig bármikor megteheti). Leállás nem várható, a rendszerben lévő összes dapp a megszokott módon működik tovább.

A Regenesis után a Starknet leállítja a fennmaradó Cairo 0 szerződések támogatását az egész rendszerben. Ezt jól előre közölni fogják, és a fejlesztőknek elegendő időt kapnak szerződéseik migrálására. Az átmeneti időszak várhatóan néhány hónapig tart, és a dapp fejlesztők már megkezdhetik implementációjuk áttelepítését a Cairo 1.0-ra. Az Átmeneti időszak végén megtörténik a Regenesis.

## Sima migráció Kairóba 1.0

A Cairo 1.0-ra való átállással a meglévő Cairo 0 szerződések elavultak, és a Regenesis után már nem támogatottak. Annak érdekében, hogy a frissíthető Cairo 0 szerződések továbbra is működjenek, még a Regenesis után is, és az állapotot addig is fenntartsuk, hozzáadtunk egy új rendszerhívást – ['replace_class'](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#replace_class_syscall). A frissíthető szerződések nem okoznak problémát a Cairo 1.0 implementációra való frissítéssel, de az alapul szolgáló proxy (a szerződés, amely az aktuális állapotot tartalmazza) továbbra is a Cairo 0 implementációnál marad. A \`replace_class\` rendszerhívás úgy oldja meg ezt a problémát, hogy lehetővé teszi a proxyszerződés számára, hogy lecserélje az alapul szolgáló osztályt, azaz megtartsa ugyanazt a címet és tárhelyet, de lecserélje a megvalósítást.

## A számítás most 5x olcsóbb!

Manapság a Starknet tranzakciós díja két fő összetevőből áll: számításból és láncon belüli adatokból. A Starknet tranzakciós díj számítási elemét az L1-es igazolás ellenőrzésének határköltsége határozza meg (további részletekért lásd a[doc](https://docs.starknet.io/documentation/architecture_and_concepts/Fees/fee-mechanism/)).

Eredetileg a mi 200 méteres kairói lépéseink egy bizonyításban, amely 5 méteres gázt igényel az ellenőrzéshez, naiv becsléshez vezetett, 0,05 gáz per lépés Kairóban. Azóta[rekurzív bizonyításra](https://medium.com/starkware/recursive-starks-78f8dd401025)tértünk át, amely lehetővé teszi az L1 ellenőrzési költség jelentős csökkentését (csak a rekurziós fa gyökere éri el az L1-et). Itt az ideje, hogy ennek megfelelően frissítsük eredeti becsléseinket – az L2-n minden egyes kairói lépés ára ötszörösére csökken, és mostantól 0,01 gázba kerül.

Ez a költségcsökkentés jelentős a számításigényes alkalmazásoknál, például a nem natív aláírásokkal rendelkező számlaszerződéseknél. Az egyszerű tranzakcióknál kisebb költségcsökkenés (~ 5%) lesz. A jövőbeni verziókban a második komponenst kezeljük: a láncon belüli adatköltségeket. Amint a láncon belüli adatok alternatíváit bevezetik a Starknetbe (más néven Volition), a költségcsökkentés mindenhol érezhető lesz.

## Starknet kormányzási első szavazás

Elindult a Starknet Governance első fázisa (további részletek[itt](https://medium.com/starknet-foundation/starknets-governance-first-phase-4614c7566f40)). A közösség tagjai ezentúl egy további csatornán keresztül is részt vehetnek a Starknet alakításában, nevezetesen a protokollmódosításokról szóló szavazáson keresztül.

A Starknet Governance első fázisai a Starknet protokoll frissítésére összpontosítanak. Minden Starknet verziófrissítés először a Testneten kerül telepítésre; A szavazóknak 6 nap áll rendelkezésükre, hogy megvizsgálják és teszteljék a frissített verziót, amint az a Goerli-n fut. Ez idő alatt megnyílik egy Snapshot javaslat, és a közösség szavazhat arról, hogy jóváhagyja-e az új verziót a Mainnet telepítéséhez.

Ha a javaslat a 6 napos szavazási időszak alatt az „IGEN” szavazatok többségét szerzi meg, a javaslat sikeres lesz, és a Starknet Mainnet ennek megfelelően frissítésre kerül.

A Starknet alpha v0.11.0 az első Starknet-verzió, amelyről szavazni kell. A Starknet alpha v0.11.0 szavazás a Testnet bevezetésétől számítva hat napig lesz nyitva.

Vonatkozó linkek:

* [Pillanatkép tér](https://snapshot.org/#/starknet.eth/proposal/0x00889bc468509610e516e8602f00b21ca8c32466dd4f0140eca38becb7f40bef)
* [Delegáció felderítési oldal](https://delegate.starknet.io/)
* Starknet alpha v0.11.0 vitaszál a[közösségi fórumon](https://community.starknet.io/t/proposal-starknet-alpha-v0-11-0/50334)

## Cairo 1.0 és Sierra

A Sierra (**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**tion) egy köztes reprezentáció, amely a Cairo assembly-re (CASM) fordítható. A Starknet alpha v0.11.0 előtt a fejlesztő a Cairo 0-t CASM-be fordítja, és az eredményt elküldi a Starknet szekvenszernek. A Cairo 1.0-val a fejlesztők lefordítják a kódjukat a Sierrára, és ezt a közbenső reprezentációt elküldik a szekvenszernek. A szekvenszer ezután CASM-be fordítja. A Sierra garantáltan a „biztonságos CASM-re” fordít, azaz a CASM egy olyan részhalmazára, amely nem tud meghibásodni, így minden egyes végrehajtás bizonyíthatóvá válik. Ez garantálja, hogy a szekvenszer még a visszaállított tranzakciókért is díjat számíthat fel, védve a DOS-tól. További információkért lásd:[a dokumentumok](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/).

![](https://miro.medium.com/v2/resize:fit:1400/0*KsAwaJTIsOuCsJIe)

A Starknet alpha 0.11.0 a[Cairo 1.0-alpha.6](https://github.com/starkware-libs/cairo/releases/tag/v1.0.0-alpha.6)es verzióját fogja használni. Ez a verzió közel áll[hoz](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)jellemzőparitáshoz a Cairo 0-val, az összes Starknet rendszerhívással.

Ne feledje, hogy a Starknet szekvenszer fix fordítóverziót használ, ami azt jelenti, hogy a nyelvi fejlesztések nem biztos, hogy azonnal elérhetők a Starknetben, és csak a Starknet verziófrissítés után lesznek elérhetők. Pontosabban, bár a Cairo 1.0 → Sierra fordítást érintő fejlesztések azonnal életbe léphetnek, a Sierra → CASM fordító módosításainak (további részletekért lásd a[docs](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/)) meg kell várniuk a Starknet frissítését.

## Mi még az új?

### Új tranzakciótípus – Nyilatkozat v2

[adunk hozzá egy új](https://docs.starknet.io/documentation/architecture_and_concepts/Blocks/transactions/#declare_v2_cairo_1_0)tranzakciótípussal a Cairo 1.0 osztályok deklarálásához.

Ez az új \`declare\` tranzakciós verzió hasonló a meglévő \`declare\`-hoz, két fontos különbséggel:

* A küldendő osztályobjektum most a Sierra-t képviseli, nem pedig a CASM-et, azaz az osztály szemantikáját a Sierra-reprezentáció határozza meg.
* A felhasználó aláírja a lefordított osztálykivonatot is. Ez egy döntő lépés, amíg a Sierra→CASM összeállítás a Starknet OS részeként be nem bizonyul.

További részletekért lásd:[a dokumentumok](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#what_to_expect).

A fejlesztő szemszögéből a tapasztalat ugyanaz marad. A Cairo 1.0 kód megírása után a CLI segítségével deklarálhatja az osztályt.

**Ne feledje, hogy kezdetben a \`declare v2\` tranzakciókat nem fogadja el a Starknet Mainnet. A Testneten végzett kísérletezés időszaka után az új tranzakciótípus engedélyezve lesz a Mainneten, és elérhetővé válnak a Cairo 1.0 osztályok.**

### Poszeidon itt van

[A Poseidon](https://www.poseidon-hash.info/)egy hash függvénycsalád, amelyet nagyon hatékony algebrai áramkörökre terveztek. Mint ilyenek, nagyon hasznosak lehetnek a ZK-ellenőrző rendszerekben, például a STARK-okban és a SNARK-okban. A Starknet alpha v0.11.0 verziójától kezdve a fejlesztők használhatják a Poseidont. Ezenkívül a Starknet protokoll részét képező hash-számítások egy része átáll a Poseidonra (konkrétan az osztálykivonat, a lefordított osztálykivonat és az állapotkötelezettség egyes részei a Poseidon-t fogják használni, további részletekért lásd a[a dokumentumokat](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#poseidon_hash)). A jövőben több belső komponens fog áttérni a Poseidon hash funkció használatára.

A Starknetben használt pontos verzió és paraméterek itt találhatók[](https://docs.starknet.io/documentation/architecture_and_concepts/Hashing/hash-functions/#poseidon_hash).

### Különféle változtatások

A korábbi Starknet-verziókhoz hasonlóan a frissítés az API-kra és más alacsony szintű összetevőkre is hatással van. Az alábbiakban felsoroljuk ezeket, és foglalkozunk a végrehajtott konkrét változtatásokkal:

* A v0 invoke/declare tranzakciók már nem támogatottak
* Az L1→L2 üzenetekért most[díjat kell fizetni](https://docs.starknet.io/documentation/architecture_and_concepts/L1-L2_Communication/messaging-mechanism/#l1-l2_message_fees). Vagyis a nulla díjjal küldött üzeneteket a Starknet szekvenszer nem dolgozza fel
* A láncon belüli adatformátum[megváltozott](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/#on_chain_data_post_v0_11_0)
* [API-módosítás](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#api_changes)(nem minden változás szerepel itt, kérjük, tekintse meg a dokumentumokat a teljes listáért):
* hozzáadott egy új \`get_compiled_class_by_class_hash\` végpontot
* A \`get_class_by_hash\` mindkét Cairo 0 / Cairo 1.0 osztályt adja vissza (a kért hashtől függően)
* A \`get_state_update\` új szekcióval rendelkezik a lecserélt osztályokhoz, és a deklarációk fel vannak osztva a Cairo 0 és Cairo 1 osztályok között.
* A \`estiimate_fee\` és a \`simulate_tx\` most kihagyhatja az érvényesítést
* Egy[új](https://github.com/starkware-libs/starknet-specs/releases/tag/v0.3.0-rc1)Starknet JSON-RPC verzió

## Mi jön ezután?

Most, hogy a Cairo 1.0-val kapcsolatos összes infrastruktúra a helyére került, a következőkre számíthat:

* További nyelvi fejlesztések a Cairo 1.0-hoz
* Teljesítményjavítások:[, ahogy ígértük](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de), folyamatosan haladunk a TPS jelentős növelése felé. Az ütemterv következő lépése a[Rust Sequenencer](https://github.com/starkware-libs/blockifier)re való átállás, amelyet az Apache 2.0 licenc alatt fejlesztenek a szabadban. Az új szekvenszer a[rozsdás CairoVM](https://github.com/lambdaclass/cairo-rs)és a[Papyrus](https://github.com/starkware-libs/papyrus)full node-ot fogja használni, így alkotva a Performance Triót.
* Offchain[DA](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/)! Ebben a verzióban a tranzakció költségének számítási komponensét kezeltük. A következő verziókban a láncon belüli adatköltségeket kezeljük, amelyek ma az átlagos tranzakciók domináns költsége.

![](/assets/starknet-alpha-v0.11.0-diagram.png)