#### **TL;DR**

Vytváříme StarkNet ve čtyřech krocích:

* Krok 0 – Základy (dokončené*)
* Krok I – Planety: Jednoaplikační Rollupy
* Krok II – Konsteliva: Víceaplikační kolejnice
* Krok III – Univers: Decentralizovaný Rollup

Očekáváme, že během několika krátkých měsíců jsem rozmístil krok, a buďte na naší cestě k krokům II & III do konce roku 2021.

### **Úvod**

StarkWare buduje StarkNet, decentralizovaný, nepřípustný a cenzurovaný STARK-powered L2 ZK-Rollup, který podporuje všeobecný výpočet přes Ethereum. Je založen na Turingově kompletním[Káhiře](https://www.cairo-lang.org/).

vývojáři, uživatelé a uzly StarkNet budou moci udělat vše, co by člověk očekával od nepřípustného L2 Rollup: Vývojáři mohou vytvářet aplikace implementující vlastní obchodní logiku a nasadit je na StarkNet. Uživatelé mohou posílat transakce na StarkNet a tak jako dnes komunikují s Ethereem. StarkNet uzly a účastníci budou kryptograficky ekonomicky motivováni, aby zajistili, že síť bude fungovat efektivně a spravedlivě.

Všechny transakce StarkNet budou pravidelně dávkovány a jejich platnost bude prokázána v důkazu STARK, který bude ověřen na Ethereu. Vzhledem k tomu, že výpočetní úsilí potřebné k ověření důkazů STARK je ve srovnání s prokázaným výpočtem exponenciálně malé, provede StarkNet měřítko Ethereum podle řádů velikosti.

Protože všechny přechody ve stavu StarkNet budou STARK-prokázány, na Ethereu budou přijaty pouze platné. Všechna data potřebná k rekonstrukci celého stavu StarkNet budou publikována v řetězci. Každý bude moci spustit svůj vlastní uzel StarkNet. Tyto vlastnosti učiní StarkNet bezpečným a nepřípustným jako Ethereum.

Jsme u nás tři roky, a již dosáhly některých pozoruhodných milníků tím, že proměnily „Měsíc math“ v výrobní stupeň a efektivní software běžící na Ethereu. StarkWare se snaží řešit problémy nejdřív a poté je uvolnit do výroby postupným způsobem. Budeme i nadále stavět tímto způsobem, jak dovést StarkNet do konce.

![](/assets/ontheroad_02.png)

**Krok 0 – Základy**

StarkWare dokončil položení některých důležitých základů pro StarkNet.

#### **Cairo**

[Káhira](https://twitter.com/StarkWareLtd/status/1300353049836376066?s=20)je náš Turing-Complete High-Level Language & framework pro výrobu STARK důkazů pro všeobecné výpočty. Namísto ruční výroby komplexních „obvodů“ nebo AIR, může vývojář aplikací použít Káhiru k definování jakékoliv obchodní logiky, prokázat se mimo řetězec a ověřit v řetězci. Káhira je ve výrobě[na Mainnet](https://twitter.com/StarkWareLtd/status/1320695603492507648?s=20)a je také[k dispozici vývojářům](http://cairo-lang.org/).

Za několik týdnů spustíme veřejnou Ethereum testnet alfa verzi Káhirské obecné Proof Service (GPS). *To umožní vývojářům vytvářet si vlastní aplikace pomocí Káhiry a realizovat jakoukoliv obchodní logiku, kterou si přejí. Zasílají svůj Káhirový kód na GPS, který má být prokázán, a poté ověří on-chain.*

GPS umožňuje jediný důkaz o bezúhonnosti provádění oddělených a nezávislých aplikací, Tím se těmto žádostem dává možnost odepisovat mezi sebou náklady na ověřování důkazu na plyn.

Kairo a GPS jsou základem StarkNet – naše rozhodnutí externalizovat obě vývojáře jim poskytuje včasné vystavení této technologii, nejen proto, aby mohli začít stavět na vrcholu, ale také proto, aby mohli ovlivnit vývoj StarkNetu.

Budeme pokračovat v rozvoji Káhiry na základě potřeb a zpětné vazby developerské komunity. Vylepšíme tento jazyk s novými funkcemi, syntaxí a vestavěnými prvky, které zlepší jeho použitelnost, a budeme pokračovat ve vývoji a zdokonalování nástrojů Káhiro: kompilátorů, vypalovačů/odladění a integrace společných IDE.

StarkNet bude mít klima pod hoškou.

#### **Sada softwaru STARK**

StarkWare vyvinul nejvýkonnější důkazní systém v ekosystému a je[živý na Mainnet](https://medium.com/starkware/starks-over-mainnet-b83e63db04c0)již měsíce. StarkWare také vyvinul[ethSTARK](https://twitter.com/StarkWareLtd/status/1264911004099543040?s=20), našeho operátora s otevřeným zdrojem, který je o 20X rychlejší než kterýkoli jiný provizor; nabízí[bezvědomosti a podpisy po kvantu zabezpečené](https://twitter.com/StarkWareLabs/status/1331930111227080709).

Naše měřítko*měření*– ne extrapolace, ani sliby – zahrnuje zpracování 300K transakcí v jediném důkazu na Mainnet, dosažení[světového rekordu v Rollup propustnosti: 3K tps](https://twitter.com/StarkWareLtd/status/1287770381525422082?s=20). Při tomto procesu jsme dosáhli světového rekordu pro účinnost plynu Rollup: 315 plyn/tx, řádově levnější než transakce s Ethereum L1.

Tato technologie bude úhelným kamenem decentralizované provizorní vrstvy StarkNet, a proto uvolníme další a lepší provenience v rámci vývoje StarkNetu (více na tom v nadcházejícím blogu post).

#### **StarkEx**

StarkEx je náš nástroj pro škálovatelnost L2. Od června 2020 slouží zákazníkům[DeversiFi](https://twitter.com/deversifi)v Mainnetu. Vypne[dYdX](https://twitter.com/dydxprotocol)a[ImmutableX](https://twitter.com/Immutable)počínaje za několik krátkých týdnů. StarkEx dokáže zpracovat komplexní obchodní logiku (spotové obchodování, deriváty, NFT) i platby.

Rozvoj StarkEx byl naším způsobem, jak stravovat náš řetězec nástrojů a testovat jej proti potřebám reálného světa. Neexistuje nic podobného požadavkům na aktuální aplikace a živé uživatele, kteří by pomohli zraje a vyvíjet nástroje. Pomáhá nám také pochopit, které prvky je třeba řešit, aby lépe sloužily ekosystému – například integrace s peněženkami a blokování průzkumníků.

StarkEx je živý příklad schopnosti měřit aplikace pomocí ZK-Rollup se sídlem v ZK-STARKu. a je prvním použitím při výrobě na Mainnet napsaném v Káhiře. Jako taková bude také jednou z aplikací, které běží na StarkNet.

![](/assets/ontheroad_03.png)

### **Cesta vpřed**

#### **Krok I – Planety: Jednoaplikační Rollupy**

Tento krok umožní vývojářům vytvářet a nasazovat vlastní škálovatelné aplikace na StarkNet.

V tomto okamžiku bude každá instance StarkNet moci spustit jednu aplikaci. Různé instance mohou spouštět různé aplikace.\
StarkNet framework bude obsahovat následující:

* Mechanismy potřebné k vytvoření STARK důkazů pro svévolnou logiku Káhira a pak je odešlete a ověřte na Ethereu.
* Interakce s L1 Ethereum: vklady a výběry žetonů L1, zveřejnění údajů o řetězu, Escape Mechanisms ochrany uživatelů StarkNet před škodlivými operátory StarkNet atd.
* Správa zůstatků uživatelů L2 a uchovávání a paměti aplikace.

Vývojáři se budou moci zaměřit výhradně na budování obchodní logiky svých aplikací, a pak přejít do produkce: rozmístit a spustit ji v měřítku na StarkNet.

To, co nám umožňuje vytvořit všeobecný výpočetní škálovatelný ZK-Rollup je kombinace:

* Káhira, což je univerzální Turing-kompletní programovací jazyk
* Náš silný STARK stack (proveďte a ověřovatel), který umožňuje propojit obrovské výpočty do jediného důkazu

#### **Krok II – Konsteliva: Víceaplikační kolejnice**

Další krok bude podporovat více aplikací běžících na stejné instanci StarkNet a přístup ke stejnému globálnímu stavu L2. To umožní interoperabilitu mezi různými aplikacemi a také snížení nákladů na plyn díky vyšším úsporám z rozsahu.

Káhira, výkonný STARK stack a GPS zesilují konkurenční výhodu StarkNetu při podpoře vícejazyčného Rollup.

V této fázi StarkNet bude plně funkční rámec pro běh*více*aplikací s libovolnou obchodní logikou vedle Etherea, s každou jednotlivou instancí provozovanou jedním provozovatelem.

Provozovatel může nyní vytrhnout uzel StarkNet a vývojáři aplikací na něj mohou své smlouvy uzavřít. Z pohledu uživatelů teď StarkNet vypadá a cítí se jako Ethereum s vyšším stupnicí.

#### **Krok III – Univers: Decentralized Rollup**

Posledním krokem ve vývoji StarkNet je decentralizace jeho provozu.

Intriguing R&D otázky, které nyní řešíme a které ovlivňují tuto fázi, zahrnují i) využití ZK-Rollups ke zlepšení konsensuálních mechanismů, a ii) navrhování kryptografických ekonomických mechanismů, které by motivovaly decentralizované přispěvatele a operátory StarkNet (posloupnosti transakcí, provize, atd. efektivně, spravedlivě a bezpečně fungovat.

### **Závěr**

StarkWare buduje StarkNet, decentralizovaný nepřípustný STARK-powered L2 ZK-Rollup přes Ethereum, který podporuje všeobecné výpočty založené na klirském jazyce.

StarkNet umožní aplikacím měřítko, aniž by došlo k ohrožení bezpečnosti, uživatelé platí rozumné transakční poplatky a celý ekosystém, aby podstatně rostl a splnil svůj slib.

Rádi pozveme vývojářskou komunitu, aby se na této cestě[připojila](https://twitter.com/StarkWareLtd)k nám.

**Aktualizace (Nov. 2021):**StarkNet Alpha je živá na Ethereum Mainnet