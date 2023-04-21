### TL;DR

StarkNet Alpha 1 má dvě nové funkce:

* L1<>L2 interakce
* Údaje o řetězci

### Úvod

Na začátku roku jsme oznámili, že StarkWare buduje[StarkNet](https://starkware.co/product/starknet/). nepřípustný decentralizovaný ZK-Rollup1 se sídlem v STARKu fungující jako síť L2 přes Ethereum. StarkNet umožňuje libovolnému dApp dosáhnout neomezeného rozsahu pro svůj výpočet – aniž by byla ohrožena jeho skladovatelnost a bezpečnost.

Minulý měsíc byla[StarkNet Alpha 0](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)vydána světu. Vývojáři jsou poprvé schopni[napsat](https://kobi.one/2021/07/14/stardrop.html)jakoukoliv chytrou smlouvu a spustit ji bez svolení ZK-Rollup. Uživatelé jsou schopni odesílat transakce do sítě, Ethereum-stylu.

Dnes vydáváme novou verzi, Alfa 1. Vydáváme funkce průběžně, abychom vývojářům umožnili co nejdříve komunikovat s novými funkcemi. Předpokládáme, že to zpřísní cyklus zpětné vazby a umožní komunitní zpětnou vazbu rychle zlepšit StarkNet.

### **Funkce alfa 1**

#### L1<>L2 interakce

Alfa 1 obsahuje protokol L1<>L2 pro zprávy, který vývojářům umožňuje implementovat plynulé toky transakcí mezi L1 a L2. Vývojáři nyní mohou posílat zprávy ze smluv na L1 do smluv na L2 a naopak.

Jednou z krás ZK-Rollups je, že aktualizace státu jsou finální, bez prodlení. To znamená, že zprávy, které byly odeslány z L2 do L1, mohou být okamžitě odeslány do cílové smlouvy. Tím se otevírá cesta k vytváření aplikací, které jsou skutečně interoperabilní mezi vrstvami.

Máte zájem o to vyzkoušet? Nejlepší způsob, jak začít, je sledovat kurz[zde](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html).

Náš protokol L1<>L2 dluží mnoho ostatním L2 (konkrétně optimismu a arbitráru), jejichž předchozí práce v této oblasti ovlivnila náš design.

#### Dostupnost online dat

Státní aktualizace StarkNetu je nyní také publikována jako online data na Ethereu. To umožňuje každému uživateli plně vybudovat stav StarkNetu z dat L1. Každá aktualizace stavu obsahuje rozdílný stav, tzn. jaký byl změněn úložiště a jeho nová hodnota.

I v tomto případě ukazuje ZK-Rollup svou sílu. Na rozdíl od optimistických Rollups musí být úplné údaje o transakcích zaslány v řetězci, v ZK-Rollups je odesílána v řetězci pouze absolutní minimální data potřebná k odvození rozdílu stavu.

Vezměme si příklad, cenové věže. Transakce k aktualizaci ceny obvykle obsahuje více transakcí, ale aktualizuje pouze jeden úložný článek; cena páru. On-chain data požadovaná pro aktualizaci stavu obsahující cenovou věrnostní transakce v Optimistickém Rollup rostou lineárně s počtem aktualizací, zatímco v ZK-Rollup, bude to vždy jediná aktualizace úložiště.

Kromě toho lze na zveřejněná data použít kompresní algoritmy, a jejich platnost bude potvrzena důkazem STARK, čímž se dále sníží on-chain stopa. Budoucí verze StarkNet zavedou v této oblasti inovativní optimalizace.

#### StarkNet OS

Také uvolňujeme kód operačního systému StarkNet. StarkNet OS je program Cairo, který běží na StarkNet. OS zpracovává vše, co se děje v síti - smluvní nasazení, provádění transakcí, L1<>L2 zprávy a další. Architektura a design StarkNet OS budou podrobně vysvětleny na samostatném příspěvku.

#### Další funkce

Nejenže se vyvinula Alfa StarkNet, ale také neustále zlepšujeme Káhiru. Pro úplný popis nových funkcí v Káhiře v0.3.0 se podívejte na poznámky k vydání[zde](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.3.0).

### Ekosystém roste

Vedle neustálé práce na StarkNet Core se práce ekosystému na StarkNet neustále rozšiřuje. Jsme nadšeni spoluprací s některými nejtalentovanějšími týmy z ekosystému.

Fermion, první plné úsilí StarkNetu, je vyvinuto týmem Erigona (dříve TurboGeth). Na základě jejich obrovských znalostí získaných při práci na Ethereu jsme s nimi schopni spolupracovat na vybudování mocného Full Node, která zahrnuje mnoho zkušeností získaných při budování Etherea, přičemž využívá stupnice nabízené důkazy STARK.

S vědomím pracujeme na Warpu, kompilátoru z EVM do Káhiře. Vázáno naší kulturou představení nových nástrojů teprve tehdy, když jsou připraveny, Vše, co můžeme říci, je velmi brzy očekávat vzrušující zprávy na této frontě! Můžeme však říci, že se pohybují rychlostí osnovy.

### Co drží budoucnost

Dalším zastávkou na naší cestě do StarkNet bude skladovatelnost – což umožní vzájemné působení smluv. Zůstaňte naladěni.

[StarkWare](https://starkware.co/)

1 Jak jsme již řekli, ZK-Rollup je nyní běžně používaným termínem, ale velmi zavádějící: tato řešení nenabízejí (nyní) žádné znalosti.

**Aktualizace (Nov. 2021):**StarkNet Alpha je živá na Ethereum Mainnet