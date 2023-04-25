Blockchainová škálovatelnost byla vždy vyhřívaným tématem. Téměř každá síť blockchainu vyzdvihuje vysoký počet transakcí za sekundu (TPS) jako bod prodeje. TPS však není platná metrika pro porovnání sítí blockchainu s - což dělá výzvu pro hodnocení jejich relativního výkonu. Kromě toho velká čísla TPS obvykle vznikají za cenu – což vyvolává otázku: skutečně se tyto sítě zvětšují, nebo jen zvýší svůj výkon?

Přezkoumejme si tedy, jak definovat škálovatelnost, jaké kompromisy jsou pro dosažení tohoto cíle a proč jsou validity Rollups konečným řešením škálovatelnosti.

### Ne všechny transakce jsou vytvořeny jako stejné

Za prvé musíme potvrdit, že jednoduchá a pohodlná metrika TPS není přesným měřítkem škálovatelnosti.

kompenzovat uzly za provádění transakcí (a odrazovat uživatele od spamování sítě zbytečným výpočtem), blockchainy účtují poplatek úměrný výpočetnímu zatížení blockchainu. V Ethereu se komplexnost výpočetního zatížení měří v*plynu.*Protože plyn je velmi pohodlná míra složitosti transakcí, Termín bude použit v celém tomto výrobku také pro blokové řetězce mimo Ethereum, i když je obvykle specifický pro Ethere.

Transakce se výrazně liší složitostí, a tedy tím, kolik plynu spotřebovává. Bitcoin, pionýr důvěryhodných transakcí peer-to-peer podporuje pouze základní skript Bitcoinu. Tyto jednoduché transfery z adresy používají malý plyn. Naproti tomu chytré smluvní řetězce, jako jsou Ethereum nebo Solana, podporují virtuální stroj a programovací jazyky kompletní Turingu, které umožňují mnohem složitější transakce. Proto dApps jako Uniswap vyžaduje mnohem více plynu.

Proto nemá smysl porovnávat TPS různých blockchainů. Místo toho bychom měli porovnat kapacitu pro výpočet – nebo výkon.

Všechny blokové řetězce mají (proměnný) velikost bloku a čas bloku, který určuje, kolik*jednotek výpočtu*lze zpracovat na blok a jak*rychle*může být přidán nový blok. Společně tyto dvě proměnné určují*propustnost*blockchainu.

### Co svazuje škálovatelnost?

Blokové řetězce usilují o maximální decentralizaci a začleňování sítí. Aby toho bylo dosaženo, musí být v kontrole zachovány dvě základní vlastnosti.

#### **1. Hardwarové požadavky**

decentralizace sítě blockchainu je určena schopností nejslabšího uzlu v síti ověřit blockchain a držet jeho stav. Proto náklady na provoz uzlu (hardware, šířka pásma, a skladování) by měly být udržovány co nejnižší, aby se co nejvíce jednotlivců mohlo stát bezsvolnými účastníky důvěryhodné sítě.

#### 2****Státní růst

Růst stavu říká, jak rychle blockchain roste. Čím více výkonů blockchainu může dojít za jednotku času, tím rychleji se blockchain zvyšuje. Úplné uzly ukládají historii sítě a musí být schopny ověřit stav sítě. Stav Etherea je uložen a na něj odkazován s použitím účinných konstrukcí, jako jsou stromy. S růstem státu se do něj přidávají nové listy a pobočky, takže je stále složitější a časově náročnější provádět určité kroky. S rostoucí velikostí řetězu zhoršuje popravu nejhorších případů uzlů, což vede ke stále rostoucímu času na validaci nových bloků. Postupem času to také zvyšuje celkovou dobu potřebnou k synchronizaci celého uzlu.

### Dráždivé dopady rostoucího průchodu

#### 1. Počet uzlů

Minimální požadavky na spuštění uzlu a počtu uzlů jsou:

* Bitcoin1: 350GB místa na disku, 5 Mbit/s, 1 GB RAM, CPU >1 Ghz. **Počet uzlů: ~10,000**
* Ethereum2: 500GB+ SSD disk, 25 Mbit/s připojení, 4–8GB RAM, CPU 2–4 jádra. **Počet uzlů: ~6,000**
* Solana3: místo na disku 1.5TB+ SSD, 300 Mbit/s, připojení 128GB RAM CPU 12+ jádra. **Počet uzlů: ~1,200**

Všimni si, že čím větší jsou požadavky na CPU, šířku pásma a ukládání pro uzly potřebné pro průchod blockchainu, méně uzlů v síti – což vede k oslabení decentralizace a méně inkluzivní síti.

#### 2. Čas synchronizovat celý uzel

Při prvním spuštění uzlu musí být synchronizován se všemi existujícími uzly, stáhnout, a potvrdit stav sítě po celou dobu od bloku geneze k vrcholu řetězce. Tento proces by měl být co nejrychlejší a co nejúčinnější, aby mohl kdokoli jednat jako bezplatný účastník protokolu.

bere Jameson Lopp[2020 Bitcoin Node](https://blog.lopp.net/2020-bitcoin-node-performance-tests/)a[2021 Node Sync testy](https://blog.lopp.net/2021-altcoin-node-sync-tests/), Tabulka 1 porovnává dobu potřebnou k synchronizaci celého uzlu Bitcoinu vs. Ethereum vs. Solana na průměrném spotřebitelském stupni PC.

![Tabulka 1 Srovnání propustnosti a Node-synchronizace blockchainu](/assets/1_gmpi_1c9zipoc-znrh7b5q.png "Tabulka 1 Srovnání propustnosti a Node-synchronizace blockchainu")

Tabulka 1 prokazuje, že zvýšení kapacity vede k delší době synchronizace, protože je třeba zpracovávat a ukládat stále více dat.

Zatímco vylepšení softwaru Node jsou neustále prováděna, aby se zmírnil problém rostoucího blockchainu (snížení stopy disku, rychlejší synchronizace rychlostí, silnější odolnost při pádu, modularizace určitých komponent atd. , uzly evidentně stále nemohou držet tempo s nárůstem propustnosti.

### Jak by měla být definována škálovatelnost?

Škálovatelnost je nejzkreslenější termín v prostoru blockchainu. I když je potřeba zvýšit výkon, je to jen jedna část hádanky.

***Škálovatelnost**znamená**další transakce**pro**stejný hardware**.*

Z tohoto důvodu lze škálovatelnost rozdělit do dvou kategorií.

#### Scalovatelnost sekvenceru

Sekvencování popisuje akt objednávání a zpracování obchodů v síti. Jak bylo zjištěno dříve, jakýkoli blockchain by mohl triviálně zvýšit jeho průchod zvýšením velikosti bloku a zkrácením jeho doby blokování – až do bodu, kdy je negativní dopad na jeho decentralizaci považován za příliš významný. Zlepšení těchto jednoduchých parametrů však nezajišťuje potřebná zlepšení. Ethereum EVM může teoreticky[zpracovat až ~2000 TPS](https://twitter.com/dankrad/status/1459607325854121989), což nestačí na obsluhu dlouhodobé poptávky po blokových prostorech. Aby bylo možné provést sekvenci, učinila Solana několik působivých inovací: využít paralelního exekučního prostředí a chytrého mechanismu konsensu, která umožňuje mnohem účinnější výkon. Navzdory jeho zlepšením však není dostatečná, ani škálovatelná. Vzhledem k tomu, že Solana zvyšuje svůj výkon, rostou i náklady na provoz uzlu a zpracování transakcí.

#### Ověřovací škálovatelnost

*Ověřovací škálovatelnost popisuje přístupy, které zvyšují výkon, aniž by zatěžovaly uzly s neustále rostoucími náklady na hardware.*Konkrétně odkazuje na kryptografické inovace, jako jsou důkazy o validitě. Jsou důvodem, proč Validity Rollups může omezit blockchain udržitelně.

**Co je to věrnost?**

Validity Rollups (známé také jako „ZK-Rollups“) přesouvají výpočty a stav úložiště mimo řetězec, ale uchovávají malé množství určitých dat v řetězci. Chytrá smlouva o základním blockchainu udržuje kořenovou složku loděnice Rollup. Na Rollup je dodávka vysoce komprimovaných transakcí společně s kořenem aktuálního stavu zasílána poskytovateli mimo řetězec. Poskytovatel vypočítává transakce, vytváří důkaz platnosti výsledků a nového kořenového adresáře a odesílá jej on-chain ověřovateli. Ověřovatel ověřuje platnost důkazu, a inteligentní smlouva, která udržuje stav Rollup aktualizuje na nový stát poskytovaný poskytovatelem.

**Jak se stupnice Validity Rollups stupnice se stejnými požadavky na hardware?**

Ačkoliv Provers vyžadují špičkové hardware, neovlivňují decentralizaci blockchainu; protože platnost transakcí je zaručena matematicky ověřitelnými důkazy.

Důležité jsou požadavky na ověření důkazů. Protože jsou dotčená data vysoce stlačena a z velké části abstraktní pomocí výpočtu, její dopad na uzly základního blockchainu je minimální*.*

Ověřovatelé (Ethereum nodes) nevyžadují špičkové technické vybavení a velikost šarží nezvyšuje požadavky na hardware. Uzly musí zpracovávat a uchovávat pouze přechody ve stavu a malé množství volaných dat. To umožňuje všem Ethereum uzlům ověřit Validity Rollup dávky pomocí jejich stávajícího hardwaru.

**Čím více transakcí, tím levnější je**

V tradičních blockchainech se čím více transakcí uskuteční, Čím dražší se dostane pro všechny, když se vyplní blokový prostor – a uživatelé si musí navzájem předjímat na trhu s poplatky, aby si mohli zahrnout své transakce.

Pro Validity Rollup je tato dynamika vratná. Ověření série transakcí na Ethereu má určité náklady. Jak roste počet transakcí uvnitř dávky, náklady na ověření šarže rostou exponenciálně pomalejším tempem. Přidání více transakcí do dávky vede k levnějším transakčním poplatkům, i když se zvyšují náklady na ověření dávky – protože jsou umořeny mezi všemi transakcemi uvnitř dávky. Validity Rollups si přeje co nejvíce transakcí uvnitř šarže – aby ověřovací poplatek mohl být rozdělen mezi všechny uživatele. Jak velikost dávky roste do nekonečna, amortizovaný poplatek za transakci se konvertuje na nulu, tj. ., čím více transakcí na Validity Rollup, tím levnější je pro každého.

dYdX, dApp poháněná Validity Rollup, často vidí velikost více než 12 000 transakcí. Porovnání spotřeby plynu u stejných transakcí na Mainnet vs. na Validity Rollup ilustruje nárůst škálovatelnosti:

Vyrovnání transakce dYdX na Ethereum Mainnet:**200,000 plynu**

Vyrovnání transakce dYdX na StarkEx:**<500 plynu**

Další způsob, jak se na to podívá: hlavní nákladové stupnice validity Rollups lineárně s počtem uživatelů ve stejné dávce.

#### Proč optimistické Rollupy nejsou tak škálovatelné, jak si člověk může myslet.

Optimistické Rollupy teoreticky poskytují téměř stejné výhody pro škálovatelnost jako Validity Rollups. Existuje však jeden důležitý rozdíl: Optimistická Rollupy optimalizují průměrný případ, zatímco Validity Rollups optimalizují pro nejhorší případ. Protože blockchainové systémy fungují v extrémně nepřátelských podmínkách, jediným způsobem, jak dosáhnout bezpečnosti, je optimalizace nejhoršího případu.

V nejhorším případě Optimistického Rollupa nebudou transakce uživatele kontrolovány kontrolory podvodů. Takže aby mohl být podvod napaden, musí uživatel synchronizovat celý uzel Ethereum, úplný uzel L2 a sám vypočíst podezřelou transakci.

V nejhorším případě Validity Rollup by uživatel musel synchronizovat pouze kompletní Ethereum uzel pro ověření platnosti důkazů. Úspora výpočetního břemene.

Na rozdíl od Validity Rollups se náklady optimistických Rollup lineárně stupnice s počtem transakcí namísto počtu uživatelů, takže jsou dražší.

### Závěrečný kus hádanky – neomezený přístup do státu Rollup

Aby byla zaručena platnost transakcí, musí uživatelé používat pouze Ethereum uzel. Uživatelé a vývojáři však mohou pro různé účely chtít prohlížet a běžet stav a provádění Rollup. *indexování L2 uzel*dokonale vyplní tuto potřebu. Nejenže umožňuje uživatelům vidět transakce v síti. je to však také kritický kus infrastruktury, který je nezbytný pro fungování infrastruktury ekosystémů. Indexy jako The Graph, Alchymy, Infura; Oracle sítě jako Chainlink, nebo blokování průzkumníků jsou plně podporovány bezpřípustným indexováním L2.

### Závěr

Mnoho přístupů k řešení škálovatelnosti blockchainu se mylně zaměřuje na zvýšení*propustnosti*. To však zanedbává dopad přenosů na uzly: stále se zvyšující hardwarové požadavky na zpracování bloků a ukládání historie sítě, a jak to brzdí decentralizaci sítě.

s příchodem šifrování, která je důkazní platností, blockchain může dosáhnout**skutečné škálovatelnosti**, která nezatěžuje uzly se stále rostoucími náklady a umožňuje širokou decentralizaci. Více transakcí s výkonnými a složitějšími výpočty pro stejný hardware je nyní možné, Obrácení dilema trhu poplatků v procesu — čím více aktivit na Validity Rollup, tím levnější!

[SwagtimusPrime.eth](https://twitter.com/SwagtimusP?t=pO0L1vGIhuC-ZgWOusQYtA&s=09)a[Louis Guthmann](https://twitter.com/GuthL)

1 od<https://bitcoin.org/en/bitcoin-core/features/requirements>

2 od[https://ethereum.org/cs/developers/docs/nodes-and-clients/](https://ethereum.org/en/developers/docs/nodes-and-clients/)

3 od<https://docs.solana.com/running-validator/validator-reqs>

4 Silně zjednodušené a upravené o průměrné velikosti dynamických bloků