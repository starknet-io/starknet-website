### TL;DR

* Alfa je živá na Mainnet
* Podporuje obecné výpočty a skladovatelnost
* Rychle rostoucí komunita, rozvoj nástrojů a aplikací
* Další prvky, které mají být zavedeny v nadcházejících týdnech
* Upozornění: Toto je alfa verze (přečtěte si jemný tisk níže)

### Úvod

StarkNet Alpha dnes začíná na Ethereum Mainnet!

StarkNet je nepřípustný decentralizovaný Rollup fungující jako síť L2 přes Ethereum. StarkNet umožňuje libovolnému dApp dosáhnout neomezeného rozsahu pro svůj výpočet, aniž by byla ohrožena jeho skladovatelnost a bezpečnost, díky své závislosti na nejbezpečnějším a nejškálovatelnějším kryptografickém systému –[STARK](https://starkware.co/stark/). StarkNet je postaven na programovacím jazyce[Káhira](https://starkware.co/cairo/), prvním Turing kompletní von-Neumann ověřovateli na Ethereu. Káhira i STARK byly vyvinuty firmou StarkWare a jsou napájeny všemi našimi výrobními aplikacemi. které se od léta 2020 usadily přes 50M txs a 250B.

StarkNet Alpha kromě jiných funkcí umožňuje obecné výpočetní chytré smlouvy, které podporují skladatelnost, a to jak s ostatními smlouvami StarkNet, tak přes L1<>zprávy L2 se smlouvami L1. StarkNet Alpha funguje v režimu Rollup, což znamená, že všechna data o stavu jsou odesílána v řetězci.

V lednu jsme sdíleli plán[StarkNet](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880). StarkNet Alpha v červnu žil ve veřejném testnetu a byl aktualizován s novými funkcemi na klouzavém základě. Jsme potěšeni, že jsme předvedli časový plán, částečně díky našemu spoléhání na náš bojově zpevněný softwarový stack STARK/Káhira.

### Jak byste měli zacházet s Alfa StarkNet?

Za prvé je to velká pozornost, neboť označení „Alfa“ existuje z důvodu. Očekávejte změny, opravy a vylepšení. StarkNet Alpha musí být ještě podroben auditu, a můžeme takový audit odložit až do doby, než síť dozrá nějaké další (přečtěte si prohlášení na konci tohoto příspěvku pro více informací).

Obecně se držíme opatrné a rozumné cesty, kterou definovali naši optimističtí kolegové z Rollupu, konkrétně Arbitrum a Optimism: spusťte síť s jedním sekvenčním a bílou aplikací, aby zajistili, že jejich vývojáři chápou rizika s tím spojená. Jsme i nadále plně odhodláni k úplné decentralizaci StarkNet.

A jak byste se měli chovat k ekonomice StarkNet Alphy? Alfa začne bez transakčních poplatků. Další aktualizace, jen několik týdnů dále, zavede mechanismus poplatků - budeme sdílet více podrobností na samostatném příspěvku.

### Začít stavět

Zveme vás, abyste začali psát své vlastní aplikace přes StarkNet kontrolou (nové!) [webové stránky](http://starknet.io/)nebo skok přímo do[tutoriálu](https://starknet.io/docs/).

Pokud jste připraveni k nasazení, postupujte prosím podle tohoto[procesu zapojení](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu); vytvořeno tak, aby všichni vývojáři byli dobře obeznámeni s předběžným stavem systému.

### Ekosystém

V posledních několika měsících jsme zaznamenali úžasný růst velikosti a aktivity komunity StarkNet, která se shoduje na[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y). K tomuto úsilí přispívají desítky vývojářů – týmů a jednotlivců – napříč ekosystémem blockchainu. (Viz prohlášení na konci tohoto pracovního místa)

#### Nástroje vývojáře

* OpenZeppelin definuje vzorové smlouvy. Jejich[repo](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)a[diskuze](https://github.com/OpenZeppelin/cairo-contracts/discussions)stojí za to sledovat
* [Warp](https://github.com/NethermindEth/warp)Solidity–>Káhira, vyvinutý nemysl
* Shard Labs“[HardHat plugin](https://github.com/Shard-Labs/starknet-hardhat-plugin)a[StarkNet Devnet](https://github.com/Shard-Labs/starknet-devnet)
* Argent vyvíjí nástroje, včetně jeho společného úsilí na StarkNet.js, vedle[Sean Han](https://twitter.com/seanjameshan), jeho tvůrce

#### Infrastruktura

**Průzkumník bloků**:

* [Voyager](http://voyager.online/)projekt Nethermind
* [Eth.tx](https://ethtx.info/)nabídne analýzu podpory a podrobný přehled transakcí StarkNet

**Úplné uzly**: dvě probíhající úsilí: jeden je projekt Fermion vedený Erigonem, druhý je projekt[Pathfinder](https://github.com/eqlabs/pathfinder)vedený Equilibrium

**peněženky**:

* [ArgentX](https://github.com/argentlabs/argent-x)je rozšíření prohlížeče vyvinuté Argentem, které je již k dispozici pro devs
* Řešení řízení torusů je připraveno na StarkNet
* Ledger vyvíjí původní aplikaci StarkNet, která má být k dispozici před koncem roku

**Káhirské audity**: ConsenSys Diligence, Trail of Bits, Peckshield a ABDK buď provádějí Káhirské audity nebo brzy začínají

**API Services**: po zpřístupnění úplného uzlu StarkNet budou služby API nabízeny společnostmi Figment, Chainstack a Infura

**Indexer**: budeme pracovat na integraci TheGraphu s firmou StarkNet, společně s týmem Figment

### Cesta vpřed

V nadcházejících týdnech a měsících povýšíme Alfa s následujícími schopnostmi:

* Mechanismus modernizace kontraktů
* Mechanismus poplatků
* Události
* Přídavek chybějících syscalls (get_block_number, get_block_timestamp, a další)
* Skeletální verze Volition
* A mnohem více …

Pro průběžné sledování tohoto úsilí viz[předběžný plán](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51).

Když se podíváme dále, nadále intenzivně investujeme do aktivního výzkumu na více frontách. (připojte se k[Shamans](https://community.starknet.io/)úsilí):

* Decentralizace
* Měřítko
* Dostupnost údajů
* Nepovolená pobídka

### Zavolat na akci

* Začněte psát smlouvy na bezpovoleném StarkNet testnet na Goerli
* Připojte se k[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)
* Připojte se k komunitním hovorům
* Zúčastněte se prvního[summitu o ekosystému StarkNet](https://www.eventbrite.com/e/starknet-ecosystem-summit-2022-tickets-206671880157)(Jan 27–28 2022, Stanford CA)
* Připojte se k[StarkNet Shamans](https://community.starknet.io/)pro hlubší výzkum

### Odmítnutí odpovědnosti

***StarkNet Alpha je nový a komplexní systém, který nebyl plně auditován. Stejně jako všechny komplexní softwarové systémy může i systém StarkNet obsahovat chyby, které by v extrémních případech mohly vést ke ztrátě všech vašich prostředků. Takže***běhoun opatrně a chovat se!******

*StarkNet ekosystém je velkým a rychle rostoucím souborem nezávislých týmů a jednotlivců, nad nimiž StarkWare nemá dohled a nepřevezme žádnou odpovědnost. Kterýkoli z projektů vyvinutých členy ekosystému může obsahovat chyby, které by v extrémních případech mohly vést ke ztrátě všech vašich prostředků. Navíc vzhledem k tomu, že se zavádějí chytrější smlouvy, zvyšuje se potenciál nechtěných škodlivých chyb a dokonce i škodlivých podvodů a tahání koberců. Takže přistupujte ke všem chytrým smlouvám na StarkNet jako k chytrým smlouvám na Ethereu a používejte pouze ty, kterým máte dobrý důvod důvěřovat jako bezpečné.*