### TL;DR

L2-nativní dApps mohou nyní vzkvétat bez tradičních omezení L1 plynu

### Úvod

vývojáři dApp vždy čelili vážným omezením kvůli limitu plynu bloku Ethereum (L1). Omezuje nejen*jak*tyto dApps fungují, ale také*, co*tyto dApps jsou schopny dělat.

Vrstva 2 (L2) nabízí vývojářům dApp výpočetní "zelené", bez tohoto stropu plynového skla. Věříme, že drtivá většina dApps bude během několika let L2-nativní: budou postaveny ze základů na L2, aby mohly těžit z tohoto výpočetního stupně svobody.

### L1 mezní hodnoty plynu tvaru L1-nativní dApps

*Podívejme se na dva příklady populárních dApp, jejichž design je hluboce formován plynovými omezeními L1: AMM a DEX agregátory.*

Automatizovaný tvůrce trhu (AMM) je v podstatě málo plynárenskou aproximací s knihou pokynů. Namísto umožnění uživatelům umístit a odstranit limity, zastavit ztrátu nebo celou škálu jiných typů pokynů, L1 mechanismy AMM umožňují pouze jednoduché swapy s centrálním podkladovým portfoliem likvidity – pokrýt intenzivní výpočetní náklady na L1.

Pro získání nejlepších cen pro uživatele potřebují agregátoři DEX ideálně přístup ke všem možným rezervám likvidity, a to i k nejmenšímu souboru likvidity. Avšak kvůli nákladům na dotazování se na mnoho různých sdružení jednoduše nestojí za to převést na L1. Je odůvodněné získat přístup k souborům a uhradit související transakční poplatky pouze v případě, že soubory likvidity mají dostatečně hlubokou likviditu. V podobném duchu Likvidace půjček a půjček a dalších dApps založených na zajištění by mohla být mnohem přesnější, pokud by byl rozdíl mezi likvidační slevou a transakčním poplatkem mnohem menší.

Omezená funkčnost a design mnoha aplikací L1 přímo vyplývá z vývojářů, kteří optimalizují svůj kód tak, aby dodržovali Ethereum omezení plynu. Proč se můžete zeptat, řekneme Ethereum? Nemohu spustit kód Solidity na mnoha L1s, a dokonce i na některých L2? Ethereum je skutečně nejdražší (a tedy nejbezpečnější) životní prostředí. Soliditní dApps jsou určeny pro „nejdražší spojení“, tj. Ethereum. Proto nemají prospěch z výpočetní výhody, kterou jim poskytují méně nákladné provozní prostředí. Pro odemknutí funkce předem navržením dApp pro nejdražší runtime prostředí musí být kód dAppu upraven.

### Vzestup L2-native dApps

Validity Rollups (také znám jako ZK-Rollups) umožňuje extrémně levný výpočet. Na rozdíl od jiných škálovacích řešení – výpočet L2 může exponenciálně růst s malým dopadem na náklady ověřování na zemní plyn v řetězci. Kromě toho validita Rollup zpracovává vstupy do výpočtů – „svědková data“, aniž by spotřebovávala další zdroje L1, což umožňuje výpočty s mnoha vstupy.

Kódování dApps nativně na L2 v**[Káhiře](https://www.cairo-lang.org/)**(Turing-kompletní jazyk pro škálování dApps prostřednictvím důkazů STARK) odemkne rozlehlou říši možností pro vývojáře. Umožňuje jim využít značné množství dat – výpočetní i svědkové údaje –, které předtím nemohly použít.

Pojďme prozkoumat takové L2-nativní dApps a jejich nové, obohacené schopnosti.

#### DeFi

Před nástupem do StarkEx, společnost StarkWar Validity Rollup, dYdX fungovala jako L1 dApp na Ethereu. Nabízela svým uživatelům pákový efekt x10 na syntetických aktivech a podporované pozice s pouze jedním syntetickým aktivem. Rekonstrukce dYdX v Káhiře jako L2-nativní dApp poskytuje dramaticky škálnější, levnější a účinnější platformu pro DeFi:

* Aktualizace cen společnosti Oracle: Tyto aktualizace obvykle zahrnují desítky cen a podpisů z různých zdrojů pro výpočet mediánu. Validity Rollup poskytuje exponenciální škálování cenové věrnostní logiky (ověření podpisu a výpočet mediánu ceny) – bez oznámení svědčících údajů L1. Porovnejte to s dYdX implementací L1, kde každá cena oracle aktualizuje cenu asi 300K plynu a byla, Proto je jeho četnost a velikost souboru poskytovatelů cenových reportérů omezená.
* Finanční páka: Přesný cenový kanál umožňuje dYdX odhadnout riziko pozice v reálném čase a nabídnout uživatelům vyšší finanční páku. Díky vylepšeným věrnostním aktualizacím ceny dYdX zvýšil finanční páku z x10 na L1 na x25 na L2.
* Cross-margin: S dYdX na L2 mohou tvůrci trhu vkládat dlouhé nebo krátké pokyny na mnoho aktiv pomocí stejného kolaterálu. Průměrné vypořádání na L2 dYdX zahrnuje pozice s více než 10 různými syntetickými aktivy! Pro srovnání, pokud by tato schopnost křížové marže u L1 byla více než zdvojnásobena cena zemního plynu v řetězci.

#### Herní a obecné umění

Současná plodina L1-native her obvykle ukládá herní aktiva na L1 při implementaci celé herní logiky v důvěryhodné off-chainové aplikaci. Tento vzorec je přímým důsledkem omezení plynu L1. Díky levnému výpočtu na L2, vývojáři L2-native gaming dApps nyní mohou implementovat herní logiku v chytré smlouvě a manipulovat s aktivy hry důvěryhodně, místo aby je jen ukládaly. Přinesení logiky her do říše bezdůvěryhodných výpočtů je významným krokem k mnohem bohatšímu světu her založených na blockchainu. L2-nativní hry jsou již vyvíjeny na StarkNet, nepřípustná síť StarkWare (např.[Dope Wars](https://github.com/dopedao/RYO)a[Influence](https://medium.com/influenceth/influence-to-launch-on-starknet-afd3c26ea25a)).

Jak složitá však může být hra založená na blockchainu? Například zpracování grafiky přímo on-chain se zdá nemožné -[nebo](https://twitter.com/guiltygyoza/status/1449637155001798657)? Řešení diferenciálních rovnic a simulace pohybu planaru v chytré smlouvě představuje významný krok k tomu, co by v budoucnu mohlo být fyzickým motorem blockchainu. Důsledky jsou obrovské. Představte si konkurenční hru pro více hráčů, jako je Counter-Strike. Kdybychom mohli simulovat herní logiku on-line, Mnoho obávaných hacků by se stalo věcí minulosti — hráči by se mohli těšit z prokazatelně spravedlivé hry.

Obecný umění využívá výpočet, náhodnost a další data k vytvoření umění založeného na blockchainu. Složitější logika a výpočet, které umělec může spolehlivě využívat, čím více možností existuje k vytvoření jedinečných uměleckých dílů. [WhaleStreet DAO](https://blog.whalestreet.xyz/whalestreet-dao-to-launch-gen-art-ecosystem-on-ethereum-with-starknet/)spouští jeden z prvních projektů Gen Art na StarkNet, který využívá neomezených výpočetních zdrojů StarkNet.

### Co bude dál?

Validity Rollups – a Cairo-powered StarkEx a StarkNet, zejména – poskytnout prostředí, kde lze vyvíjet a provozovat dApps spotřebovávající spoustu výpočetních nebo svědkových dat. Se všemi výhodami distribuované technologie účetní knihy předpovídáme nesmírně vzrušující budoucnost pro L2-nativní dApps.

Co můžete*vytvořit*vytvořit pomocí obecného výpočtu, který je podporován složitelností, nedůvěryhodností a decentralizací?