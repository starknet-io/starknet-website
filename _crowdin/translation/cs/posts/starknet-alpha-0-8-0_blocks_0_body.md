### TL;DR

* StarkNet Alpha 0.8.0 představuje původní verzi mechanismu poplatků (volitelné až do StarkNet Alpha 0.9.0.)
* Nové API volání k odhadu transakčního poplatku pro získání transakční trasy, což umožní lepší viditelnost a ladění
* Zlepšení výkonnosti posloupnosti StarkNet
* L1→zrušení zprávy L2

### Úvod

Jak je sdíleno v naší[cestovní mapě](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51)a v souladu s nejnovějším doplňkem k funkcím a funkcím StarkNet, Naše pozornost posune směrem k vylepšení výkonu a návrhu protokolu (včetně poplatků, abstrakce účtů, decentralizace atd.). StarkNet Alpha 0.8.0 spustí proces přidávání transakčních poplatků a zlepšení výsledků posloupnosti.

Plán pro StarkNet zahrnuje mechanismus poplatků, a pokračováním v této verzi učiníme důležitý krok blíže k plnému výkonu platformy.

Přidání mechanismu poplatků je nezbytnou součástí výkonnostního návrhu StarkNet. Bez minimálního poplatku riskujeme, že budeme čelit nekonečným transakcím: což by znemožnilo provedení systému, bez ohledu na optimalizaci posloupnosti.

### Vlastnosti

#### Podpora poplatků

StarkNet Alpha nyní podporuje první verzi mechanismu poplatku. Tento mechanismus je nezbytný i v této rané fázi, a dokonce i v testnetu, ze dvou hlavních důvodů:

1. Umožňuje vývojářům začít optimalizovat své kontrakty podle nákladového modelu StarkNet.
2. Je to klíčový protějšek zlepšení výkonu systému, neboť brání spamování tím, že vysílá bezpočet transakcí.

Tato verze zavádí komponenty potřebné k tomu, aby vývojáři začlenili platby poplatků do svých nástrojů a aplikací. Vývojáři nyní mohou odhadnout transakční poplatek tím, že zavolají koncový bod \`estimate_fee\` a provedou platbu poplatku v rámci provedení transakce.

Vzhledem k tomu, že tato funkce není zpětně kompatibilní, nebudeme v tomto okamžiku vymáhat platbu poplatku, ale pouze od verze 0. .0, které má být uvolněno za několik týdnů. Tento postupný přechod umožní uživatelům a vývojářům přizpůsobit se novému modelu.

#### Struktura poplatku na 0.8.0

V případě 0.8.0 budou poplatky vybírány pouze podle výpočetní složitosti, zatímco StarkWare bude nadále dotovat náklady na komunikaci L1. Mechanismus poplatků aktualizujeme tak, aby zahrnoval tyto náklady na provoz a komunikaci L1 v příštích několika týdnech. Platba bude vybrána na základě provedení transakce na StarkNet L2. Podrobný popis viz[dokumentace o poplatcích](https://starknet.io/documentation/fee-mechanism/).

Je důležité si uvědomit, že budeme úzce spolupracovat s vývojářskou komunitou na vylepšení a vývoji mechanismu poplatků, jak se vyvíjí StarkNet.

#### L2 Goerli ETH Faucet

Zahájili jsme[L2 Goerli ETH Faucet](https://faucet.goerli.starknet.io/), aby uživatelé mohli platit poplatky na Testnet. Tato Faucet posílá malé částky L2 Goerli ETH na vaši adresu na StarkNet Goerli, kterou můžete použít pro zaplacení transakčního poplatku.

#### Trace API

Přidali jsme možnost získat stopu provedení transakce do API StarkNet. V rámci sledování transakce jsou viditelná všechna interní volání spolu s informacemi, jako jsou spotřebované zdroje exekuce, návratová hodnota, emitované události a odeslané zprávy. Tento nový hovor zjednodušuje pochopení chování smlouvy nebo ladění transakcí. Kromě toho by tyto údaje mohly zahrnovat nástroje jako[Voyager](https://voyager.online/)nebo[StarkTx](https://starktx.info/); poskytuje uživatelům podrobnější analýzu, zejména pokud jde o interakci se smlouvami o účtu.

K získání trasy můžete použít \`get_transaction_trace\` v CLI StarkNet. Chcete-li vidět příklad jak jej použít, podívejte se na[tutoriál](https://www.cairo-lang.org/docs/hello_starknet/cli.html?#get-transaction-trace).

#### Zrušení zprávy

Další funkcí této verze je schopnost zrušit zprávy L1→L2. Proč je to užitečné? Představte si scénář, kdy uživatel převádí aktivum z L1 na L2. Tok začíná tím, že uživatel odešle aktivum na most StarkNet a odpovídající generaci zpráv L1→L2. Představte si, že spotřeba zpráv L2 nefunguje (k tomu může dojít kvůli chybě ve smlouvě dApps). To by mohlo vést k tomu, že uživatel navždy ztratí úschovu nad svým aktivem.

Aby se toto riziko zmírnilo, dovolíme, aby smlouva, která iniciovala zprávu L1→L2, zrušila ji – poté, co vyhlásí záměr a čeká na přiměřenou dobu (viz[dokumentace](https://starknet.io/l1-l2-messaging/#cancellation)).

### Vylepšení výkonu

Tato verze výrazně zkracuje čas, kdy sekvencer potřebuje provést proud příchozích transakcí v Káhiře.

To je jen první krok! Náš další velký výkonový milník, který bude brzy zaveden (0.9.0), je paralelní popravou sekvencí, a očekává se, že po cestě půjde mnohem více optimalizací.

### Co teď?

Přečtěte si technickou dokumentaci[zde](https://starknet.io/documentation/fee-mechanism/).

Přejděte na[starknet.io](https://starknet.io/), pro všechny informace od StarkNet , dokumentaci, návody a aktualizace.

Připojte se k[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)pro podporu vývojáře, ekosystémová oznámení a staňte se součástí komunity.

Navštivte[StarkNet Shamans](https://community.starknet.io/)abyste zůstali aktualizováni a zúčastnili se všech diskusí o výzkumu StarkNet.