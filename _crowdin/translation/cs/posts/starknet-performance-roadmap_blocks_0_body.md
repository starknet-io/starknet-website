### TL;DR

* „Technologie“ ve smyslu všeobecné poznámky k technologii pro „vývoj“, „výrobu“ nebo „užití“ zařízení nebo „softwaru“ uvedených v položkách 3A, 3B nebo 3C. To vede k potenciálně mnohem vyššímu TPS u válcových článků s platností L2.
* Plán výkonnosti StarkNet řeší klíčový prvek systému: posloupnost.
* Zde představíme plán pro zlepšení výkonnosti:\
  – Sequencer parallelization\
  – Nová implementace reklam pro Káhiru VM\
  – opětovné zavedení Sequencer v rustu\
* Poskytovatelé, kteří jsou testováni na bitvu, nejsou překážkou a dokážou zvládnout mnohem více než dosud.

### Úvod

StarkNet zahájil na Mainnet téměř před rokem. Začali jsme budovat StarkNet se zaměřením na funkčnost. Nyní zaměříme pozornost na zlepšení výkonnosti pomocí řady kroků, které pomohou zlepšit zkušenosti StarkNet.

V tomto příspěvku vysvětlujeme, proč existuje široká škála optimalizací, které se vztahují pouze na články validity, a budeme sdílet náš plán na zavedení těchto kroků na StarkNet. Některé z těchto kroků jsou již implementovány v StarkNet Alpha 0.10.2, který byl vydán na Testnet v Novu 16 a včera v Mainnet. Než však začneme diskutovat o řešeních, přehodnotme omezení a jejich příčinu.

### Omezení bloku: validita rollups versus L1

Potenciálním přístupem ke zvýšení škálovatelnosti blockchainu a ke zvýšení TPS by bylo zrušit omezení bloků (pokud jde o plyn/velikost) při zachování konstanty času bloku. To by vyžadovalo větší úsilí od výrobců bloků (osoby provádějící ověření na L1, následovníci na L2, a proto požadují účinnější provádění těchto složek. Za tímto účelem nyní zaměříme pozornost na optimalizaci posloupnosti StarkNet, kterou podrobněji popisujeme v následujících oddílech.

Zde vyvstává přirozená otázka. Proč jsou optimalizace posloupnosti omezeny na rollps, tj. Proč nemůžeme implementovat stejná vylepšení na L1 a vyhnout se složitosti rollups validity? V další části tvrdíme, že mezi těmito dvěma body existuje zásadní rozdíl. umožňuje širokou škálu optimalizací na L2, které nejsou použitelné pro L1.

### Proč je množství L1 omezené?

Odstranění blokových omezení na L1 bohužel trpí velkou nástrahou. Zvyšováním tempa růstu řetězce, také zvyšujeme požadavky z celých uzlů, kteří se snaží držet krok s nejnovějším stavem. Vzhledem k tomu, že L1 plné uzly musí znovu spustit celou historii, vysoký nárůst velikosti bloku (z hlediska plynu) na ně působí značný tlak, opět vedlo k tomu, že slabší stroje vyřadily ze systému a ponechaly schopnost spustit plné uzly pouze na dostatečně velké objekty. V důsledku toho nebudou uživatelé schopni ověřit sám stát a nedůvěryhodně se zapojit do sítě.

To nás přivádí k pochopení, že průchod L1 by měl být omezený, abychom udrželi skutečně decentralizovaný a bezpečný systém.

### Proč tytéž bariéry nemají vliv na hodnocení platnosti?

**Pouze při zvažování pohledu na celý uzel vidíme skutečný výkon nabízený válcem.**L1 úplný uzel musí znovu spustit celou historii, aby se zajistila správnost aktuálního státu. StarkNet uzly musí ověřit pouze důkazy STARK a toto ověření je exponenciálně nižší množství výpočetních zdrojů. Zejména synchronizace od nuly nemusí zahrnovat provádění; uzel může obdržet výpis aktuálního stavu od jeho klientů a ověřit pouze prostřednictvím potvrzení STARK, že tento stav je platný. To nám umožňuje zvýšit výkonnost sítě, aniž bychom zvýšili požadavky z celého uzlu.

Dospíváme proto k závěru, že posloupnost L2 podléhá celému spektru optimalizací, které není v případě L1 možné.

### Plánování výkonu před

V následujících oddílech diskutujeme o tom, které z nich se v současné době plánuje pro sekvenování StarkNet.

### Paralelizace sekvenceru

Prvním krokem na našem plánu bylo zavedení paralelizace s transakčním provedením. To bylo představeno v alfě StarkNet 0.10.2, která byla včera uvolněna v Mainnet. Nyní se ponoříme do toho, co je paralelizace (toto je polotechnická část, pokračovat na cestovní mapě, skočit na další sekci).

Co tedy znamená „paralelizace transakcí“? Naprosto je souběžné provedení bloku transakcí nemožné, protože mohou záviset různé transakce. To je znázorněno v následujícím příkladu. Zvažte blok se třemi transakcemi od stejného uživatele:

* Transakce A: swap USDC pro ETH
* Transakce B: zaplatí ETH za NFT
* Transakce C: swap USDT pro BTC

Je zřejmé, že k Tx A musí dojít dříve, než je Tx B, ale Tx C je zcela nezávislá na obojí a může být provedena souběžně. Pokud každá transakce vyžaduje provedení 1 sekundy, pak může být doba výroby bloku zkrácena ze 3 sekund na 2 sekundy zavedením paralelnosti.

Jádrem problému je to, že předem neznáme závislosti na transakcích. V praxi pouze tehdy, když provádíme transakci B z našeho příkladu, vidíme, že se spoléhá na změny provedené transakcí A. Z formálnějšího hlediska vyplývá závislost ze skutečnosti, že transakce B čte ze skladovacích buněk, na které transakce A napsala. Transakce můžeme považovat za vytvoření grafu závislosti, kde je marka od transakce A k transakci B iff A zapsána do úložné buňky, která je přečtena B, a tudíž musí být provedeny před datem B. Následující obrázek znázorňuje příklad takového grafu závislosti:

![](https://miro.medium.com/max/641/0*I-qGgxdJJmqmgZWM)

Ve výše uvedeném příkladu lze každý sloupec provést paralelně. a to je optimální uspořádání (zatímco naivně bychom provedli transakce 1-9 postupně).

Abychom překonali skutečnost, že graf závislosti není znám předem, představíme***optimistickou paralelizaci***. v duchu[BLOCK-STM](https://malkhi.com/posts/2022/04/block-stm/)vyvinutého společností Aptos Labs, na sekvenci StarkNet. V rámci tohoto paradigmatu se optimisticky snažíme paralelně uskutečňovat transakce a znovu provádět při hledání kolize. Můžeme například provádět transakce 1–4 z obrázku 1 paralelně, jen abychom zjistili, že Tx4 závisí na Tx1. Proto jeho poprava byla zbytečná (spálili jsme ji vzhledem ke stejnému stavu, proti němuž jsme Tx1 běželi, i když jsme to měli vést proti státu, který je výsledkem aplikace Tx1). V takovém případě znovu spustíme Tx4.

Všimněte si, že kromě optimistické paralelizace můžeme přidat mnoho optimalizací. Namísto naivního čekání na ukončení každé popravy můžeme například popravu přerušit okamžikem, kdy zjistíme závislost, která ji zneplatní.

Dalším příkladem je optimalizace výběru, které transakce mají být znovu provedeny. Předpokládejme, že blok, který se skládá ze všech transakcí z obrázku 1, je vložen do posloupnosti s pěti jádry CPU. Zaprvé se snažíme provádět transakce 1–5 souběžně. Pokud bylo pořadí dokončení Tx2, Tx3, Tx4, Tx1 a nakonec Tx5, pak závislost Tx1→Tx4 najdeme až poté, co byl Tx4 již spuštěn - což naznačuje, že by měl být znovu spuštěn. Naproti tomu možná budeme chtít znovu spustit Tx5, protože se vzhledem k nové popravě Tx4 může chovat jinak. Avšak spíše než jen opětovné provedení všech transakcí po nyní zneplatněném Tx4, můžeme procházet graf závislosti vytvořený z transakcí, jejichž provedení již skončilo, a pouze opakovat transakce, které závisely na Tx4.

### Nová implementace Rust pro Káhiro-VM

Chytré zakázky v StarkNet jsou napsány v Káhiře a jsou prováděny v Káhiro-VM, což je specifikace uvedena v[Káhiře](https://eprint.iacr.org/2021/1063.pdf). V současné době posloupnost používá[implementaci pythonu](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/cairo/lang/vm)Kairo-VM. Abychom optimalizovali výkonnost implementace VM, zahájili jsme úsilí o přepsání VM v důvěře. Díky skvělé práci[Lambdaclass](https://lambdaclass.com/), kteří jsou dosud neocenitelným týmem ekosystému StarkNet, toto úsilí se brzy dostane do ovoce.

Realizace VM –[kairo-rs](https://github.com/lambdaclass/cairo-rs)– může nyní spustit původní Káhiru kód. Dalším krokem je řešení provádění chytrých smluv a integrace s pythonickým sekventorem. Očekává se, že jakmile se spojuje s kairo-ry, výrazně se zlepší výkonnost sekvenčního.

### Sekvencer opětovné provedení v Rust

Náš posun od pythonu k rust ke zlepšení výkonu se neomezuje na Káhiru VM. Vedle výše uvedených vylepšení plánujeme přepsat posloupnost od nuly. Kromě Rustových vnitřních výhod to představuje příležitost k další optimalizaci postupníka. Když posloucháme pár, můžeme si vychutnat výhody kairo-rs bez režie komunikace python-rust, a můžeme zcela přebudovat způsob, jakým je stav uložen a přístupný (který dnes vychází ze struktury[Patria-Trie](https://docs.starknet.io/documentation/develop/State/starknet-state/#state_commitment)).

### A co provést?

Po celou dobu tohoto příspěvku jsme nezmínili snad nejznámější prvek platnosti – provenience. Lze si představit, že se jedná o pravděpodobně nejdůmyslnější součást architektury, měla by to být překážka, a tedy zaměření optimalizace. Zajímavé je, že právě „standardnější“ komponenty jsou dnes překážkou StarkNet. Dnes, zejména s[rekurentními důkazy](https://medium.com/starkware/recursive-starks-78f8dd401025), můžeme do důkazu zařadit mnohem více transakcí než aktuální provoz na Testnet/Mainnet. Ve skutečnosti dnes jsou bloky StarkNet prokázány spolu s transakcemi StarkEx, kde mohou vzniknout několik stovek tisíc NFT mins.

### Summary

Paralelizace, Rust, a další – připravte se na lepší TPS v nadcházejících verzích StarkNet.