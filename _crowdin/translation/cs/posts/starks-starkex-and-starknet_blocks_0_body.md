### TL;DR

* STARKY umožňují škálování blockchainu účinným prokázáním integrity výpočtů
* StarkEx je aplikačně specifický motor pro škálování
* StarkNet je síť inteligentních smluvních vrstev 2 bez povolení

### **STARKY**

STARKY (Scalable, Transparent ARgument of Knowledge) jsou důkazním systémem, který umožňuje prokazování a ověřování výpočtů. Umožňuje zpracovat velký výpočet, vytvořit důkaz o správnosti výpočtu, a pak ověřit důkaz ve velmi malém počtu kroků.

STARKY mohou hrát klíčovou roli v škálovatelnosti blockchainu tím, že umožní provádění velkých výpočtů mimo řetězec, pokud je levnější, ponechá se pouze ověření, které vyžaduje zlomek výpočtu, a to v řetězci. Jinými slovy, provedením velmi malého počtu kroků v řetězci ověřovatel prosazuje integritu mnohem většího výpočtu, který byl proveden mimo řetězec.

Pomocí STARKů, vrstva 2 řešení dohromady a spočítat tisíce transakcí a pak ověřit jejich platnost v řetězci s jediným důkazem STARK. Náklady na proces v řetězci jsou rozděleny mezi**všechny**transakce v dávce. To má za následek zabezpečení Ethereum a nízké náklady na plyn na transakci.

Nízké výpočetní náklady přinesou novou třídu aplikací, které dříve nebyly proveditelné v řetězci. Tyto vlastnosti činí ze STARKů vynikající stavební kámen pro zlepšení uživatelských zkušeností a snížení nákladů na plyn. všechny při zachování bezpečnosti vrstvy vypořádání v Ethereu.

StarkWare nabízí dvě řešení pro rozsah Ethereum se STARKy: StarkEx a StarkNet.

### **StarkEx**

[StarkEx](https://starkware.co/starkex/)je rámec pro vytváření povolených řešení škálování specifických pro danou aplikaci. StarkEx je soubor užitečných[toků aplikací,](https://docs.starkware.co/starkex-v4/starkex-deep-dive/regular-flows), které mohou projekty využít k dosažení levných výpočtů mimo řetězec. Ve výchozím řetězci je generován důkaz STARK o správnosti provedení. U swapů s proměnlivou sazbou se kupóny považují za podkladové aktivum s proměnlivou sazbou. Důkaz je pak zaslán ověřovateli STARK, aby byl přijat on-line. To znamená jedno ověření všech transakcí – u neuvěřitelně nízkých nákladů na plyn na jednu transakci.

Několik příkladů aplikací používaných na StarkEx jsou dYdX (obchodování s perpetuály), Nemutovatelné a Sorare (NFTs – těžba a obchodování), DeversiFi (spotové obchodování) a Celer (DeFi Pooling).

StarkWare neustále přidává více aplikačních toků do StarkEx, což odpovídá potřebám trhu a jeho zákazníků.

### **StarkNet**

*[StarkNet](https://starkware.co/starknet/)je bezplatná síť druhé vrstvy, kde každý uživatel nebo vývojář může aplikovat chytré smlouvy vytvořené v Káhirském jazyce.*

Srovnatelné se zkušenostmi s chytrými smlouvami Etherea, uvnitř ekosystému StarkNet, Vaše smlouva může komunikovat s jakoukoliv jinou smlouvou zavedenou na StarkNet, která umožňuje bohaté kompozovatelné protokoly. Smlouvy StarkNet mohou také komunikovat se smlouvami z Ethereum prostřednictvím asynchronní zprávy.

Na rozdíl od StarkEx, kde jsou aplikace zodpovědné za předkládání transakcí, StarkNet posloupnosti dávají transakce a odesílají je ke zpracování a prokazování. (StarkNetovy posloupnosti jsou v současné době provozovány společností StarkWare s budoucími plány na decentralizaci.) To znamená, že jakmile aplikace rozmístí své smlouvy v Káhiře, nemusí se obávat provozování další infrastruktury operátorů. StarkNet podporuje režim dostupnosti dat Rollup, což znamená, že stav rollup je zapsán do Ethereum spolu s důkazy STARK.

Obrovská vývojářská komunita je hluboce zapojena do ekosystému StarkNet, budování aplikací, nástrojů a infrastruktury. Desítky aplikací již žijí na testnetu - DeFi, hry, hlasování, AI a další. Nástroje vývojáře jako například průzkumník bloků, lokální testovací prostředí a rámec, SDK, v několika jazycích a více, buduje Společenství StarkNet. Kromě toho se na[Shamansově platformě](https://community.starknet.io/)konají aktivní diskuse, které obsahují návrhy na zlepšení, potenciální funkce a osvědčené postupy.

### **K souhrnu**

[StarkEx](https://youtu.be/P-qoPVoneQA)i StarkNet jsou škálovací řešení založená na STARKu. Obě poskytují škálovatelnost, nízké náklady na plyn a bezpečnost, ale mají různé provozní požadavky a modely interoperability. StarkEx může být správným řešením pro aplikaci, která je do značné míry soběstačná a zapadá do API, které StarkEx poskytuje. StarkNet by mohl být vhodnější pro protokol, který vyžaduje synchronizaci s jinými protokoly nebo má potřeby, které jdou nad rámec toho, co StarkEx nabízí.

STARKy revolučně změnily způsob, jakým mohou být aplikace postaveny na Ethereu. StarkEx a StarkNet budou nadále umožňovat aplikace, které byly dříve neživotaschopné, a budou tlačit limity toho, co je možné na blockchainu.

Tento článek byl napsán ve spolupráci[Tim Gestson](https://twitter.com/IcemanTim)a tým[StarkWare](https://starkware.co/)