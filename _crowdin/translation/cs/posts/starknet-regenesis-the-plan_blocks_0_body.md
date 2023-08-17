### TL;DR

* Sdílíme podrobný plán pro Regenesis, který byl vytvořen rozsáhlými diskusemi s komunitou StarkNet. Zvláštní poděkování patří Kuba@SWM.
* Regenesis bude následovat vydání Káhiry 1.0, takže systém bude bezpečnější tím, že umožní jednodušší a bezpečnější kontrakty StarkNet
* Uživatelé by měli být připraveni aktualizovat svou peněženku během přechodného období
* Vývojáři budou muset odeslat své smlouvy do Káhiry 1.0

### Úvod

StarkNet Alpha postupuje směrem k Regenesis, což je důležitý krok směrem k produkci. V této aktualizaci chceme sdílet více podrobností o hlavní motivaci Regenesis –[Káhira 1.](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)— a začít vysvětlovat, co bude vyžadovat od uživatelů a vývojářů. Po Regenesis bude StarkNet pracovat pouze se smlouvami založenými na Káhiře 1.0 a začne od nového bloku geneze se stávajícím stavem.

Co bude Regenesis od uživatelů vyžadovat? Jednoduchá aktualizace jejich peněženky. Co bude vyžadovat od tvůrců dappů StarkNet? Předání smluv do Káhiry 1.0 a podle jednoduchého pravidla pro modernizaci. Konkrétně nebude žádný restart od čistého stavu a zůstaneme na stejném příkladu StarkNet, což znamená, že migrace nebude nutná**.**

Plán Regenesis spočívá v úplném zachování stavu aplikací a v tom, že nevzniknou žádné výpadky aplikací. Proto aplikace, které se řídí pokyny, které poskytujeme, budou moci okamžitě spustit na StarkNet Alpha Mainnet bez jakéhokoliv narušení jejich provozu a jejich uživatelů během procesu Regenesis. e jsou odhodláni spolupracovat s komunitou a poskytnout veškerou podporu potřebnou k tomu, aby byl tento proces co nejhladší.

Tento směr se ubíráme v důsledku rozsáhlých diskusí s komunitou, které zahrnovaly důležitý návrh týmu Software Mansion .

### Proč regenesis?

#### Káhira 1.0 a Sierra

Hlavní motivací Regenesise je využití nových možností, které Káhira 1 přináší. – jmenovitě sekvencery ochrany DOS, cenzurní odpor a měření plynu, které jsou nezbytné pro StarkNet jako decentralizovanou síť.

Káhira 1.0 zajistí, aby každá transakce mohla být prokázána. To umožní StarkNet zahrnout reverzní transakce do bloků a vygenerovat důkaz o jejich provedení. Tento mechanismus umožní, aby následovníci byli placeni při provádění reverzních transakcí, čímž se zvýší ochrana DOS proti škodlivým hráčům. Kromě toho bude Káhira 1.0 podporovat měření plynu, které umožní StarkNet přechod na intuitivnější trh poplatků. A konečně to umožní StarkNet zavést nucené transakce z L1 a zvýší odolnost sítě vůči cenzuře.

Pro získání těchto výhod nelze smlouvy z Káhiry v0 a Káhiry 1.0 mísit. Nesprávná prohlášení se nemohou ukázat jako nesprávná, ani se nemůže stát sledování plynu, pokud máme kousky smluv z Káhiry v0. Za tímto účelem budeme muset postupně zrušit Káhiru v0 kód zcela ze stavu StarkNet, ergo Regenesis.

**Po Regenesis budeme mít systém Starknet založený plně na Káhiře 1.0.**

#### Zjednodušení kódu a protokolu

StarkNet, i když stále v Alfa prošel mnoha změnami. Každá verze zatím změnila StarkNet OS, bloky a transakční strukturu. To způsobilo zastarání některých kódů. Přesto je třeba si uvědomit plné uzly a poskytovatele infrastruktury (jako jsou indexátoři a státní průzkumníci), a proveďte všechny předchozí chování Alfa verzí StarkNet pro důvěryhodnou synchronizaci se státem. Bez Regenesis by toto břemeno mohlo být velkým odstrašujícím prostředkem pro vývojáře, kteří by zvažovali výstavbu těchto služeb pro StarkNet.

Než tedy přejdeme k výrobě a jako příprava do decentralizovaného světa s mnoha implementacemi infrastrukturních nástrojů, hodláme omezit složitost protokolu. Toho bychom dosáhli tím, že bychom nevyžadovali budoucí infrastrukturu pro realizaci jakéhokoliv StarkNet 0. kódovat a označit první blok po přechodném období jako bod geneze.

### Byl zařazen? Celková časová osa

Regenesis bude následovat vydání Káhiry 1.0, které se plánuje do konce roku 2022. Během 1. čtvrtletí roku 2023 bude StarkNet aktualizován na podporu Káhiry 1. , a my se snažíme přejít do plně Káhiře 1.0 sítě do konce Q1.

**Uživatelé a aplikace budou muset během tohoto období provést přechod.**

![](/assets/1_ef85shzd2uudwex-cy8wdg-1.png)

### Takže co potřebuji vědět?

Vývojáři aplikací si musí být vědomi následujících aspektů týkajících se Regenesis:

1. Ujistěte se, že je váš kontrakt připraven na upgrade. Plné technické aspekty plánu jsou sdíleny v[StarkNet Community Forum](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080). Jakmile budou detaily dokončeny, budeme sdílet výstižné pokyny.
2. Ujistěte se, že jste připraveni portovat váš kód do Káhiry 1.0. Více informací naleznete v další sekci.

#### Přenos vaší smlouvy do Káhiry

Cairo 1.0 je skvělým příslibem pro vývojáře StarkNet. Zlepšení stávajícího Káhiry, které bude bezpečnější, lepší a snazší pro psaní smluv se zlepšenou syntaxí, plnohodnotný typ systém (nativní uint256 někdo? a další. Vývojáři budou muset nasměrovat své stávající smlouvy StarkNet do Káhiry 1.0. Protože však logika a struktura kódu zůstane stejná, očekává se, že toto úsilí bude zanedbatelné v porovnání s úsilím, které vyvinula při vývoji aplikace.

V této souvislosti stojí za to vzít na vědomí, že se můžete rozhodnout provést nový audit verze vaší aplikace v Káhiře 1.0. Pokud byla vaše aplikace již v minulosti podrobena auditu, proces nového auditu bude výrazně levnější a jednodušší, protože auditoři jsou s vaší logikou již obeznámeni.

V průběhu 4. čtvrtletí roku 2022 zveřejníme veškerou dokumentaci kolem Káhiry 1.0, společně s výukovými kurzy a dílnami.

### Jsem uživatel StarkNet. Co mám dělat?

Jako uživatel budete pravděpodobně muset podniknout několik kroků během Regenesis. Alespoň budete muset povýšit kontrakt na Vašem účtu. Nedělání v průběhu (několika měsíců) přechodného období bude mít za následek ztrátu vašeho účtu. V závislosti na cestě aktualizace zvolené vývojáři aplikací StarkNet, které používáte, budete možná muset podniknout další kroky.

Připomínáme všem, že StarkNet je stále v alfa fázi, a uživatelé jsou povinni dbát na komunikaci StarkNet a aplikací, které používají. Je vaší odpovědností, abyste se ujistili o brzké aktualizaci nového systému. *Být raným osvojitelem není vždy snadné a my se spolehneme na to, že uděláte svou část!*

### Uzavřít

Kairo 1.0 je hned za rohem a poskytuje mnoho vzrušujících výhod a vylepšení StarkNet a jeho vývojářům. K jejich sklízení je zapotřebí Regenesis událost sítě. Naštěstí máme na mysli design, který činí tento proces minimálně rušivým – zcela bezproblémovým pro uživatele a docela jednoduchým pro aplikace.

Naléhavě vás žádáme, abyste se zúčastnili[komunitní diskuse](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080)a sdíleli své komentáře a obavy, kromě toho, že budete mít aktuální informace o krocích, které budete muset udělat jako vývojář aplikace StarkNet.