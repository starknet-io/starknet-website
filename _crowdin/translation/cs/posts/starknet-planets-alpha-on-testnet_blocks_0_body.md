### **TL;DR**

* [StarkNet Planets Alpha](https://voyager.online/)- první krok na cestě do Mainnet - je nyní živý na Testnet!
* [StarkNet](https://starkware.co/product/starknet/)je nepovolený Turing-complete ZK-Rollup1.
* Vývojáři mohou implementovat svou podnikatelskou logiku volby do chytré smlouvy a bezpodmínečně ji uplatnit na StarkNet.
* Přechody státu StarkNet jsou prokázány mimo řetězec a poté ověřeny on-chain.
* Stejně jako Ethereum mohou uživatelé komunikovat přímo s těmito chytrými smlouvami.

### **Úvod**

[jsme oznámili](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)plán[StarkNet](https://starkware.co/product/starknet/)v roce 2021. Svěcený Grail řešení škálovatelnosti by podporoval i) svévolné chytré smlouvy, ii) skladovatelnost, iii) fungoval na decentralizované síti. Dnes oznamujeme nasazení testnet z kroku 1: Alfa planet StarkNet. Systém Alpha podporuje libovolné chytré kontrakty. Schopnost bude v letošním roce podporována decentralizací.

Je velmi důležité, abychom byli zcela transparentní a řádně stanovili očekávání. Účelem tohoto příspěvku je jasně uvést, co je již podporováno a jaké funkce stále chybí. Dnes uvolňujeme práci na testnetu. Věříme, že toto předčasné vydání pomůže vytvořit zdravý ekosystém kolem StarkNet a jeho nástroje. Rádi bychom zapojili vývojáře do budování sítě s námi a získávat trvalou zpětnou vazbu od komunity.

### **Co je v Alphě planet StarkNet?**

**Funkce:**Alfa umožňuje vývojářům psát a využívat smlouvy StarkNet pro všeobecné výpočty. Neexistuje žádná bílá listina — každý vývojář může psát a využívat jakoukoliv smlouvu, kterou si přeje. Uživatelé mohou s těmito smlouvami komunikovat zasláním transakcí a kontrolou jejich státu. Všechny smlouvy existují v jednom státě2. Aktualizace tohoto stavu jsou prokázány mimo řetězec a ověřeny v řetězci – v alfě se ověření provádí na testnetu.

**StarkNet OS:**Výše uvedená funkce je podporována novým „operačním systémem“, který nazýváme StarkNet OS. Nabízí*prokazatelné*přechod na StarkNet. Vývojáři Ethereum jej mohou považovat za ekvivalent EVM: odpovídá za použití inteligentních funkcí smluv, skladování smluv atd. Zveřejníme samostatný příspěvek s podrobnými údaji o architektuře systému StarkNet.

**Co není v alfě?**Alfa stále postrádá některé klíčové schopnosti, jako je např. L1<>L2, interakce, on-chain data a skladovatelnost. Více v těchto bodech níže.

#### **Získávání nohou za mokra**

Začněte s naším[návodem a dokumentací](https://www.cairo-lang.org/docs/hello_starknet/).

Pak si můžete přečíst[vzorovou AMM chytrou smlouvu](http://cairo-lang.org/docs/hello_starknet/amm.html), kterou jsme napsali a nasazili na StarkNet. Je to jednoduchá AMM a můžete s ní komunikovat[zde](https://starkware-amm-demo.netlify.app/swap). Nyní jste připraveni psát a nasadit chytré kontrakty na StarkNet. Průzkumník bloků pro StarkNet –[Voyager](https://voyager.online/)– umožňuje komukoliv kontrolovat stav StarkNet.\
Tím, že se postavíte nohama za mokrou, věříme, že budeš lépe připraven stavět na StarkNet, vzhledem k tomu, že i nadále vykonáváme další funkce. Již jsme zaneprázdněni plánovat první hackathon, stejně jako workshopy pro vývojáře.

### **Další kroky pro StarkNet**

Klíčové možnosti, které v Alpha stále chybí, budou spuštěny v následujících týdnech. Jedná se o:

* Pohledávky z kreditních karet
* On-chain data: zveřejnění všech změn v úložišti na Ethereu.
* Kompatibilita: umožnění vzájemné komunikace mezi smlouvami.

S těmito funkcemi budeme připraveni přivést StarkNet do Ethereum Mainnet. Tento krok nazýváme evolučními konstelacemi StarkNet, a až se k němu dostaneme, budete moci bez povolení spustit na Ethereum Mainnet škálovatelné L2 dApps.

#### **Ekosystém StarkNet**

Jsme velmi nadšeni ekosystémem, který se utváří kolem StarkNet, takže se až dosud zastavíme, abychom našim spolupracovníkům poděkovali.

Spolupracujeme úzce s[nemysl](https://twitter.com/nethermindeth)a týmem Nubia,[Alexey Akhunov](https://twitter.com/realLedgerwatch)(rigon) &[Igor Mandrigin](https://twitter.com/mandrigin)(brána. m),[Iddo Bentov](https://www.cs.cornell.edu/~iddo/),[dOrg](https://twitter.com/dOrg_tech),[Prof. Tim Roughgarden](https://twitter.com/algo_class),[Prof. Jeremy Avigad](https://www.andrew.cmu.edu/user/avigad/)& Yoav Seginer, v neposlední řadě – tým[Paradigm](https://twitter.com/paradigm).\
Naši ranní partneři —[dYdX](https://twitter.com/dydxprotocol),[Neměnitelný](https://twitter.com/Immutable)[DeversiFi](https://twitter.com/deversifi)a[Omlouváme se](https://twitter.com/SorareHQ)[Celer](https://twitter.com/CelerNetwork)a další nám poskytli neocenitelný vstup ze dne 1. a umožněte nám vybudovat síť pro výrobní stupeň pro skutečné uživatele.\
Nadále jsme ohromeni kvalitou obsahu vytvořeného komunitou, od lidí jako[Bobbin Threadbare](https://twitter.com/bobbinth),[Daniel Kroni](https://github.com/danielkroeni/cairo-playground/blob/main/anon-bank/README.md),[Adrian Hamelink](https://twitter.com/adr1anh),[perama](https://twitter.com/eth_worm),[Francesco Ceccon](https://twitter.com/ceccon_me),[Ilian Malčov](http://twitter.com/imalchev)a[Alexandrijský tým](https://blockchainpartner.fr/).

Uvidíme, co komunita vytvoří na všech frontách: nástroje vývojáře, obsah a samozřejmě aplikace StarkNet, které budou vytvářet. Pojďme udržet konverzaci v tvém oblíbeném médiu dle výběru:[Discord](https://discord.gg/uJ9HZTUk2Y),[Twitter](https://twitter.com/CairoLang),[email](mailto:info@starkware.co), a brzy za použití nejdecentralizovanějších komunikačních formulářů: f2f.

1 Nejsme fanoušci výrazu ZK-Rollup jako — matematicky řečeno, není to nulové znalosti, ale všichni víte, co myslíme

2 Na rozdíl od samostatného stavu udržovaného pro současné nasazení StarkEx na Mainnet

**Aktualizace (Nov. 2021):**StarkNet Alpha je živá na Ethereum Mainnet