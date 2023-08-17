### TL;DR

* StarkWare nabízí řadu režimů dostupnosti dat (DA) pro zákazníky, ze kterých si mohou vybrat podle jejich priority
* Existují tři přístupy k dostupnosti dat pro důkazy STARK, všechny jsou již k dispozici ve výrobě:\
  –**Rollup**: kniha je zveřejněna přímo na blockchainu\
  –**Validium**: Výbor pro dostupnost dat zajišťuje knihu, pouze hash uloženou v řetězu\
  –**Volition**: Aplikace může uživatelům umožnit vybrat si jejich DA mód – Rollup nebo Validium – pro každou transakci
* Bez ohledu na to, které DA se používá – platnost všech transakcí je zaručena STARKY

### Úvod

Od listopadu 2022[StarkEx](https://starkware.co/starkex/)vypořádal obchodní objem ve výši více než 750 miliard dolarů a více než 270 m transakcí s Ethereem. V prostoru NFT napájení aplikací jako je ImmutableX a Sorare, StarkEx vytěžil více než 85 milionů NFT za cenu, která je 1000x levnější, než to dělat přímo na Ethereu. Technologie založená na STARKu je škálování Ethereum. Například za jediný týden měl StarkEx 1,6násobek počtu transakcí jako Ethereum (12m na StarkEx oproti 7. m na Ethereum) při zabírání méně než 0.1% blokového prostoru Ethereum. A to vše dělá, zatímco uživatelům poskytuje stejnou úroveň bezpečnosti, jako kdyby se usadili přímo na Ethereu.

### Jak toho StarkWare dosáhne?

Uživatelé odesílají transakce na vrstvě 2 (StarkEx nebo StarkNet), které jsou dávkovány a odeslány STARK provést. Tento STARK proveď zná stav knihy před a po zpracování těchto transakcí. Dodavatel předloží důkaz STARK, že po provedení těchto transakcí potvrzuje platnost nového stavu knihy. Nový stav a potvrzení STARK jsou odeslány on-chain STARK ověřovateli. Ověření tohoto důkazu probíhá samostatně prostřednictvím neměnné chytré smlouvy na Ethereu.

Tato architektura poskytuje nejlepší z obou světů: můžeme mít nízké transakční náklady, zatímco budeme mít Ethereum uprostřed jako neutrální rozhodce. Ethereum jako rozhodce není jen hezký; poskytuje kritickou bezpečnost konečnému uživateli. Uživatel, který obchoduje, si nyní může být jistý, že jejich prostředky jsou zajištěny Ethereem, a transakce jsou neměnné, jakmile jsou ověřeny v Ethereu. Uživatel má také úplnou samoobslužnost svých financí. Samoopatřování je důležité, protože zajišťuje, aby měl uživatel vždy přístup ke svým finančním prostředkům, aniž by se spoléhal na jakoukoli třetí stranu.

### Kde se do toho všeho vejde dostupnost údajů?

Důležité je zdůraznit jak to, co tento důkaz dělá, tak i to, co*nedělá*. Důkaz potvrzuje platnost nového státu, ale neříká vám, jaký je nový stát. K tomu potřebujete dostupnost dat. Pokud máme pouze důkaz, pak blockchain ví, že to, co bylo předloženo, je platné, ale neví, co nový stav (např. Účetní zůstatek) je! Spotřebitelé těchto údajů zahrnují uživatele, kteří v rámci těchto důkazů uskutečňují transakce. Tyto údaje by měly být zpřístupněny, pokud chtějí odebrat finanční prostředky z Etherea, aniž by museli důvěřovat hospodářskému subjektu Layer 2. To dává uživatelům plnou péči o jejich finanční prostředky.

Jednou z analogií je váš středoškolský učitel, který vás žádá, abyste dokázali, že x je rovno x. To je triviální. Co je obtížnější odpovědět: Co je x vlastně rovná? K tomu potřebujete samostatné informace. Mohlo by to být, že x je 5 nebo jiná hodnota. Stejně tak v blockchainu lze důkaz STARK předložit ověřovateli chytré smlouvy k ověření. A ověřovatel může potvrdit, že důkaz je platný (že x=x). Ale potřebujete samostatný vstup, abyste vám řekli, co x (nová účetní bilance) je.

Existují tři přístupy, jak tyto údaje zpřístupnit:

#### Režim rolování

Režim Rollup zajišťuje, že stav účetní knihy je uložen v Ethereu spolu s důkazy. Režim Rollup je v současné době používán[dYdX](https://dydx.exchange/)při výrobě a je také používán sítí[Public StarkNet](http://starknet.io/)L2. Výhody zde jsou jasné: lze znovu vytvořit stav knihy pouze interakcí s blockchainem Ethereum. Důsledkem toho je, že vy jako koncový uživatel můžete spolehlivě hovořit s příslušnou chytrou smlouvou o Ethereu, a výběrujte své prostředky i v případě, že systém Layer 2 skončí.

#### Platné

V režimu Rollup je většina nákladů na Ethereum k dispozici a nikoli k ověření důkazů. Je to proto, že ukládání dat do blockchainu je velmi náročné na plyn. V Validium módu nejsou informace v knize odeslány do Etherea. Spíše se uchovává mimo řetězec s Výborem pro dostupnost údajů. Ethereum ukládá hash těchto informací z knihy Výbor pro dostupnost údajů se skládá z nezávislého počtu členů, kteří dohlížejí na správnou aktualizaci stavu a uchovávají kopii zpracovávaných údajů. Každá instance StarkEx může vytvořit vlastní usnášeníschopnost. Členové kvorum pro existující aplikace běžící na StarkEx zahrnují entity jako[Consensys](https://consensys.net/)[nevadí](https://nethermind.io/),[Iqlusion](https://iqlusion.io/)a[Cephalopod](https://cephalopod.equipment/).

Výhody zde jsou jasné. Není třeba platit poplatky za Ethereum plyn za uložení účetní knihy v řetězci. Spíše jedinou věcí uloženou na Ethereum je jediná hash informací z účetní knihy. Pokud chcete bezdůvěryhodně vybrat finanční prostředky z Layer 2 tím, že budete hovořit s Ethereem, vyžadujete pouze digitální podpis jednoho z členů Výboru pro dostupnost údajů. Členové DAC budou používat kryptografii, aby prokázali, že máte vlastnictví těchto prostředků.

Dalším skrytým přínosem validní dostupnosti dat je důvěrnost informací od lidí, kteří čtou blockchain. V režimu Rollup je zůstatek každého účtu v okamžiku předložení každého důkazu veřejnosti znám. V případě validia jsou tato data skryta před blockchainem – je si toho vědoma pouze Výbor pro dostupnost dat, protože jsou umístěna mimo řetězec. Tato úroveň důvěrnosti umožňuje širokou škálu případů, kdy jsou důležité údaje o transakcích.

#### Volby

Volition je architektura dostupnosti dat, která poskytuje volbu mezi režimem Validium a Rollup na úrovni transakce. Činí to tak, že vede jednu knihu v řetězci a druhou knihu s Výborem pro dostupnost údajů. Uživatelé si mohou vybrat mezi režimem Validium a Rollup pro každou jednotlivou transakci.

Představte si, že si zakoupíte opravdu drahé NFT jako Bored Ape nebo Cryptopunk na aplikaci běžící na StarkEx. Možná budete chtít použít Rollup režim pro zabezpečení dat pro toto NFT, protože chcete záznam konkrétní transakce uložené v Ethereu. Můžete si však koupit opravdu levné NFT (např. plášť pro vaši postavu v blockchainové hře) a za těchto okolností budete rádi ušetřit peníze pomocí Validium.

Pokud máte zájem o rozsah dosažený důkazy STARK, přijďte prosím a stavějte se na nás.



Vždy můžete napsat e-mail[info@starkware.co](mailto:info@starkware.co)a člověk se dostane na váš e-mail.