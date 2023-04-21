### TL;DR

* StarkNet Alpha 0.7.0 uvolněn do Goerli; zabaleno vylepšeními
* Kontrakty lze nyní aktualizovat pomocí vylepšení Proxy
* Smlouvy mohou nyní vysílat události
* Podpora pro dlouho očekávaný hovor s blokovým číslem a blokováním časových značek

### Úvod

Rádi uvolníme alfa 0.7.0, verzi s novými funkcemi a vylepšeními. Jedním z nejlepších stimulantů StarkNet za posledních několik měsíců byla zvýšená účast komunity při formování budoucnosti StarkNetu. Tato verze se zabývá některými hořícími potřebami komunity.

#### Změny úmluvy o názvů

Pozorovatel si možná všiml, že předchozí vydání StarkNet Alpha bylo pojmenováno Alpha 4, zatímco nyní uvolňujeme Alpha 0.7.0. Rozhodli jsme se vynechat vyhrazené číslo alfa verze a místo toho se spoléhat pouze na přidruženou cairo-lang verzi.

### Nové funkce

#### Vylepšení kontraktu

Vzhled[Proxy Upgrade pro OpenZeppelin](https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies)je nyní plně podporován pro vylepšení kontraktů v StarkNet. Proxy vzor je běžným způsobem pro povolení vylepšení kontraktů přes Ethereum. Alfa 0.7.0 zapne tento vzor přes StarkNet.

Vytvořili jsme krátký[tutoriál](https://starknet.io/docs/hello_starknet/default_entrypoint.html)k prokázání základní implementace vzoru, a OpenZeppelin je již tvrdý na práci implementující standardní smlouvu pro proxy vzor; viz[prototyp](https://github.com/OpenZeppelin/cairo-contracts/pull/129).

#### Číslo bloku a blokování časové značky

Alfa 0.7.0 přidá dvě nová systémová volání, o které žádali mnozí vývojáři. Tyto hovory umožňují smlouvě přístup k číslu bloku a časovému razítku bloku. Číslo bloku vrátí číslo aktuálně provedeného bloku. Časové razítko bloku vrátí časové razítko udané sektorem při vytvoření bloku.

Příklad jak používat tyto funkce můžete vidět v[tutoriálu](https://starknet.io/docs/hello_starknet/more_features.html#block-number-and-timestamp).

#### Události

Překvapit! Funkce, která byla naplánována pro budoucí verzi, se do ní vložila dříve.

Smlouvy StarkNet nyní podporují definování a emitování událostí, což jim umožňuje spotřebovávat informace o exekuci pro off-chainové aplikace. Vývojáři Ethereum budou považovat sémantické a syntaxe za velmi podobné solidaritě. Můžete si přečíst[dokumentaci](https://starknet.io/documentation/events/)nebo následovat[tutoriál](https://starknet.io/docs/hello_starknet/events.html), který tuto funkci vysvětluje.

#### Byla odebrána %builtiny

direktiva %builtinu již není v kontraktech StarkNet zapotřebí. Tato změna následovala po diskuzi komunity o[vzorci rozšíření smlouvy](https://community.starknet.io/t/contract-extensibility-pattern/210)na[StarkNet Shamans](https://community.starknet.io/). Výrazně zjednodušuje použitelnost tohoto vzorce rozšiřitelnosti.

Například, tato smlouva se změní z:

```
%lang starknet

# Toto je direktiva "%builtins.
# Už to není potřeba.
%builtins range_check

@view
func add(x : felt, y : felt) -> (res : felt):
return (res=x + y)
end
```

K tomu patří:

```
%lang starknet
@view
func add(x : felt, y felt) -> (res : felt):
return (res=x + y)
end
```

Můžete se podívat na standardní smlouvy[ERC-20](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts/token), které používají nový vzor.

#### Pole pro podporu vnějších funkcí struktur

Alfa 0.7.0 podporuje průchozí a vracející pole konstrukcí v externích funkcích. Tato další funkce umožňuje smlouvy o účtu lépe podporovat[multicalls](https://github.com/OpenZeppelin/cairo-contracts/pull/73#discussion_r753535751).

Multicall je mocná funkce Abstrakce účtu, která umožňuje účtu provádět více hovorů v jedné transakci. Zjevným užitným případem je vytvoření**jediné transakce**, která volá povolenky a pak převod.

Těšíme se na to, co s ním dělá komunita.

#### Zlepšení služby StarkNet CLI

**Podpora pro čekající bloky**

[Nevyřízené bloky](https://starknet.io/documentation/block-structure-and-hash/#pending_block)byly[zavedeny](https://community.starknet.io/t/cairo-v0-6-2-api-change-pending-block/195)v poslední menší verzi (v0.6.2) a nabídly rychlejší potvrzení transakcí. Tato verze obsahuje podporu pro dotazování těchto bloků prostřednictvím CLI StarkNet.

Pro použití v každém příkazu CLI, který bere block_number jako argument (contract_call/get_block/get_code/get_storage_at), můžeme se zeptat StarkNet s ohledem na čekající blok zadáním block_number=nevyřízené.

**Podpora pro smlouvy o účtu**

StarkNet používá abstrakci účtu, tzn. všechny účty jsou prováděny jako chytré smlouvy. První implementace smluv na účtu proběhla od[Argent](https://github.com/argentlabs/argent-contracts-starknet)a[OZ](https://github.com/OpenZeppelin/cairo-contracts/blob/main/contracts/Account.cairo), ale očekáváme mnohem více.

V StarkNet musí všechny transakce procházet smlouvou na účtu a CLI nyní umožňuje interakci se StarkNet Alpha přímo prostřednictvím smluv na účet. Podívejte se na[tutoriál](https://starknet.io/docs/hello_starknet/account_setup.html#setting-up-a-starknet-account)jak je nastavit.

Podobná funkce byla také přidána do[StarkNet.py](https://github.com/software-mansion/starknet.py/)a[Nile](https://github.com/OpenZeppelin/nile)v minulém měsíci.

#### L1<>L2 SMS a MMS ve zkušebním rámci

Alfa 0.7.0 zavádí poštu. Postman vývojářům umožňuje použít zkušební rámec k testování složitějších toků.

Na vysoké úrovni – zesiluje odpovědnost StarkNet Sequencera za předávání zpráv z L1 do L2 a L2 do L1. Zajistí, aby se zprávy zasílané prostřednictvím smlouvy Solidity objevily v cílové destinaci smlouvy StarkNet a zprávy odeslané ze smlouvy StarkNet se objeví ve smlouvě Solidity.

#### A další funkce

Alfa 0.7.0 nabízí mnoho dalších funkcí a změn, jako je přidání efektivní odmocniny do knihovny matematiky. Úplný seznam se zobrazí v[seznamu změn](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.7.0).

### Další?

Počáteční[mechanismus poplatků](https://community.starknet.io/t/fees-in-starknet-alpha/286/29)bude uvolněn během několika týdnů, jako podverze StarkNet.

### Více informací?

[starknet.io](https://starknet.io/): pro všechny informace StarkNet a aktualizace.

[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y): připojte se k odpovědím na vaše otázky, získejte podporu pro vývojáře a staňte se součástí komunity.

[StarkNet Shamans](https://community.starknet.io/): připojte se k následujícím (a účastnit!) diskusím o výzkumu StarkNet.