## TL;DR

* Alfa Starknet v0.11.0 je venku a žije na Testnet
* Nyní můžete rozmístit a komunikovat s Káhirou 1.0 kontraktů na Testnet!
* Výpočet na Starknet je 5x levnější!
* Poprvé bude o Mainnet upgrade na Starknet alpha v0.11.0 hlasováno
* Označuje začátek přechodného období před[Regenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)
* Nasazení Káhiry 1. smlouvy na Mainnet budou povoleny až po několika týdnech chodu na Testnet, jakmile zajistíme, že nový systém běží hladce.

## Úvod

Jsme rádi, že oznamujeme, že tolik očekávaný Starknet alpha v0.11.0 je živý na Testnet! Proč je to velký krok pro Starknet? Ve Starknet v0.11.0 můžete vyhlásit, rozmístit a spustit[Káhira 1.0](https://medium.com/starkware/cairo-1-0-is-here-7e1ac8377038)chytrých smluv. Zavádíme také nový systémový požadavek, který umožní hladký přechod stávajících smluv na provádění v Káhiře.

Káhira 1.0 vylepšuje Starknet ve dvou různých aspektech. Za prvé vylepšuje vývojové zkušenosti tím, že nabízí bohatší programovací jazyk, který zavádí (mimo jiné) typy/generické rysy/chyby do Káhiry. Zadruhé, Káhira 1.0 hraje klíčovou roli v decentralizační cestě Starknetu: smlouvy z Káhiry 1.0 odeslané do Alfa Starknet v0.11.0 kompilace do Sierra. Sierra zaručuje, že každá smlouva je prokazatelná, což je klíčový majetek v decentralizovaném Starknetu.

Dalším důležitým zlepšením v této verzi je 5x snížení nákladů na výpočet. Díky tomu bude Starknet ještě přívětivější k výpočetně náročným aplikacím. Další podrobnosti níže.

## Získání připravenosti na Regenesis

Alfa Starknet v0.11.0 označuje začátek přechodného období, které umožní přípravu před Starknetovou regenezi. Plán společnosti Starknet Regenesis[byl zveřejněn před několika měsíci](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4), a zaměřuje se na přechod ze systému založeného na Káhiře 0 do systému založeného na Káhiře 1.0.

Během přechodného období mají stávající smlouvy z Káhiry 0 (pokud jsou modernizovatelné) možnost zachovat si adresu a skladování, a bezproblémově přejít na Káhiru 1. (viz další sekce).

Jako uživatel Starknet to znamená, že musíte upgradovat svou peněženku až po novém Káhiře 1. implementace vašeho účtu je uvolněna (budete ji moci kdykoliv až do samotného Regenesisu). Není očekáván žádný výpadek, všechny dapps v systému budou fungovat jako obvykle.

Po regenesi přestane Starknet podporovat zbývající kontrakty z Káhiry 0 v celém systému. To bude dobře předem projednáno a vývojáři budou mít dostatek času na migraci svých smluv. Očekává se, že přechodné období bude trvat několik měsíců a vývojáři dapp již mohou začít migrovat svou implementaci do Káhiry 1.0. Na konci přechodného období se stane Regenesis.

## Hladká migrace do Káhiry

S přechodem na Káhira 1.0 jsou stávající smlouvy z Káhiry 0 zastaralé a již nebudou podporovány v Regenesis. aby bylo možné pokračovat v provozu smluv uzavřených v Káhiře 0, a to i po regenezi, a udržujte stav postavený do té doby, přidali jsme nový systémový hovor — ['replace_class'](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#replace_class_syscall). Upgradovatelné smlouvy nemají problém s upgradem na Káhiru 1. realizace, ale základní zástupný indikátor (smlouva, která drží skutečný stát) bude stále uvíznout v provádění Káhiry 0. \`replace_class\` syscall řeší tento problém tím, že umožní, aby proxy kontrakt nahradil základní třídu, tj. . uchovává stejnou adresu a skladování, ale nahrazuje provádění.

## Výpočet je nyní 5x levicový!

Dnes mají transakční poplatky Starknet dvě hlavní složky: výpočetní a on-chain data. Výpočetní prvek transakčního poplatku Starknet je určen marginálními náklady na ověření jeho důkazu na L1 (podrobněji viz[dokumentace](https://docs.starknet.io/documentation/architecture_and_concepts/Fees/fee-mechanism/)).

Původně naše 200 m Káhira kroky v důkazu, který vyžaduje ověření 5 m, vedly k naivnímu odhadu 0,05 plynu na Káhiru. Od té doby přesunuli jsme se na[rekurentní doklady](https://medium.com/starkware/recursive-starks-78f8dd401025), které umožňují výrazné snížení nákladů na ověření L1 (pouze kořen rekurzivního stromu dosáhne L1). Nyní nastal čas odpovídajícím způsobem aktualizovat naše původní odhady – cena každého kairo-kroku na L2 bude snížena o 5x, a nyní bude stát 0. 1 plyn.

Tyto prostředky jsou určeny na pokrytí výdajů na zaměstnance a správních výdajů agentury (hlavy 1 a 2) a provozních výdajů na pracovní program (hlava 3). Jednoduché transakce budou zaznamenány menší snížení nákladů (~ 5 %). V budoucích verzích se budeme zabývat druhou složkou: náklady na data v řetězci. Jakmile budou do Starknet zavedeny alternativy k údajům o řetězci (tzv. Volition), bude snížení nákladů pociťováno po celé ploše.

## První hlasování o řízení Starknet

První fáze řízení Starknet byla zahájena (více informací[zde](https://medium.com/starknet-foundation/starknets-governance-first-phase-4614c7566f40)). Členové Společenství se nyní mohou podílet na formování Starknet prostřednictvím dalšího kanálu, konkrétně hlasování o změnách protokolu.

První fáze řízení Starknet se zaměří na aktualizace protokolu Starknet. Každá aktualizace Starknet bude nejprve nasazena na Testnet; Voliči budou mít šestidenní lhůtu na přezkoumání a testování aktualizované verze při jejím běhu na Goerli. Během této doby bude zahájen návrh Snapshotu a komunita může hlasovat o tom, zda schválí novou verzi pro nasazení sítě Mainnet.

Pokud návrh získá většinu hlasů „ANO“ během šestidenního období hlasování, návrh bude schválen a Starknet Mainnet bude odpovídajícím způsobem vylepšen.

Alfa Starknet v0.11.0 je první verze Starknet, která je připravena pro hlasování. Hlasy Starknet alfa v0.11.0 budou otevřeny šest dní počínaje nasazením Testnet.

Příslušné odkazy:

* [Mezera při snímku](https://snapshot.org/#/starknet.eth/proposal/0x00889bc468509610e516e8602f00b21ca8c32466dd4f0140eca38becb7f40bef)
* [Stránka pro vyhledání delegací](https://delegate.starknet.io/)
* Diskusní vlákno pro Starknet alpha v0.11.0 na[Komunitní fóru](https://community.starknet.io/t/proposal-starknet-alpha-v0-11-0/50334)

## Káhira 1.0 a Sierra

Sierra (**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**tion) je prostřední zastoupení, které kompiluje do káhirského shromáždění (CASM). Před alfou Starknet v0.11.0 by vývojář zkompiloval Káhiru 0 do CASM a výsledek poslal na sekvenci Starknet. S Káhirou 1.0, vývojáři zkompilují svůj kód do Sierry a posílají toto přechodné zastoupení do sekvence. Skvencer ji pak zkompiluje do CASM. Sierra má zaručenou kompilaci do "bezpečného CASM", tj. podmnožiny CASM, která nemůže selhat, což znamená, že každá exekuce je prokazatelná. To zaručuje, že následný subjekt bude moci účtovat poplatky i za vrácené transakce, které chrání před DOS. Více informací naleznete v[dokumentaci](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/).

![](https://miro.medium.com/v2/resize:fit:1400/0*KsAwaJTIsOuCsJIe)

Alfa-0.11.0 Starknet bude používat[Káhira 1.0-alfa.6 verze](https://github.com/starkware-libs/cairo/releases/tag/v1.0.0-alpha.6). Tato verze je blízko[funkce parity](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)s Káhirou 0, přičemž všechny Starknet systémové hovory již existují.

Všimněte si, že posloupnost Starknet používá pevnou verzi kompilátoru, což znamená, že vylepšení jazyka nemusí být okamžitě k dispozici ve Starknetu a bude k dispozici až po aktualizaci verze Starknet. Konkrétně, zatímco zlepšení, která se dotýkají Káhiry 1. → Sierra kompilace může nabýt účinnosti okamžitě, změny v Sierra → CASM kompilátoru (více informací viz[dokumentace](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/)) budou muset čekat na aktualizaci Starknet.

## Co jiného je nového?

### Nový typ transakce – Delare v2

Přidáváme[nový typ transakce](https://docs.starknet.io/documentation/architecture_and_concepts/Blocks/transactions/#declare_v2_cairo_1_0)pro deklaraci Káhiry 1.0 tříd.

Tato nová verze transakce \`declare\` je podobná existující \`declare\`, se dvěma důležitými odlišnostmi:

* Objekt třídy, který je nyní odesílán, představuje spíše Sierru než CASM, tj. sémantika třídy je definována reprezentací Sierra.
* Uživatel také podepisuje zkompilovaný hash třídy. Je to klíčový krok, dokud nebude kompilace Sierra→CASM prokázána jako součást operačního systému Starknet.

Více informací naleznete v[dokumentaci](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#what_to_expect).

Z pohledu vývojáře zůstávají zkušenosti stejné. Po psaní kódu Káhira 1.0 můžete použít CLI k deklaraci třídy.

**Všimněte si, že zpočátku nebudou na Starknet Mainnet přijímány transakce v2\`. Po období experimentování na Testnet bude nový typ transakce povolen na Mainnet, a bude k dispozici Káhira 1.0 tříd.**

### Poseidon je zde

[Poseidon](https://www.poseidon-hash.info/)je rodina hash funkcí navržených pro velmi účinné algebraické obvody. Jako taková mohou být velmi užitečné v systému ZK prokazujícím například STARK a SNARK. Počínaje alfou Starknet v0.11.0, vývojáři budou moci používat Poseidon. Kromě toho některé výpočty hash, které jsou součástí protokolu Starknet, přejdou na Poseidon (konkrétně třída hash, zkompilovaný hash třídy a části státního závazku budou používat Poseidon, více detailů viz[dokumentace](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#poseidon_hash)). V budoucnu bude více interních komponentů přecházet na používání funkce Poseidon hash.

Přesná verze a parametry, které se používají v Starknetu, naleznete[zde](https://docs.starknet.io/documentation/architecture_and_concepts/Hashing/hash-functions/#poseidon_hash).

### Různé změny

Stejně jako předchozí verze Starknet má i aktualizace důsledky pro naše API a další komponenty nízké úrovně. Níže je vyjmenujeme a řešíme konkrétní změny, které byly provedeny:

* v0 vyvolávat/deklarovat transakce již nejsou podporovány
* L1→L2 zprávy nyní vyžadují[poplatky](https://docs.starknet.io/documentation/architecture_and_concepts/L1-L2_Communication/messaging-mechanism/#l1-l2_message_fees). To znamená, že zprávy odeslané s nulovým poplatkem nebudou zpracovávány sekventorem Starknet
* On-řetězový datový formát je změněn[](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/#on_chain_data_post_v0_11_0)
* [Změny API](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#api_changes)(ne všechny změny jsou zde uvedeny, podívejte se na dokumenty pro úplný seznam) :
* přidal nový koncový bod \`get_compiled_class_by_class_hash\`
* \`get_class_by_hash\` vrátí obě třídy Káhira 0 / Káhira 1.0 (v závislosti na požadovaném hashu)
* \`get_state_update\` má novou sekci pro nahrazené třídy a deklarace jsou rozděleny mezi třídy Káhira 0 a Káhira 1.
* \`estimate_fee\` a \`simulate_tx\` nyní může přeskočit ověření
* [nová](https://github.com/starkware-libs/starknet-specs/releases/tag/v0.3.0-rc1)verze Starknet JSON-RPC

## Co přijde dál?

Nyní, když byla zavedena veškerá infrastruktura související s Káhirou 1.0, můžete očekávat:

* Další vylepšení jazyka Káhiry 1.0
* Zlepšení výkonnosti:[jak bylo slíbeno](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de), pokračujeme směrem k významnému zvýšení TPS. Dalším krokem na cestovní mapě je přechod na[sekvenčního pracovníka Rust](https://github.com/starkware-libs/blockifier), která je vyvinuta v otevřeném prostoru pod Apache 2. licenci. Nový sekvencer využije[rust CairoVM](https://github.com/lambdaclass/cairo-rs)a[Papyrus](https://github.com/starkware-libs/papyrus)plného uzlu tvořícího Performance Trio.
* Offchain[DA](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/)! V této verzi jsme zpracovali výpočetní složku nákladů transakce. V nadcházejících verzích se budeme zabývat náklady na údaje o řetězci, které jsou dnes dominantními náklady na průměrné transakce.

![](/assets/starknet-alpha-v0.11.0-diagram.png)