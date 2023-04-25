### TL;DR

* Káhira 1.0 první vydání je tady!
* Vývojáři mohou začít psát a testovat programy Káhira 1.0
* V nadcházejících týdnech bude dosaženo parity funkcí se starší verzí Káhiry
* Podpora pro smlouvy StarkNet bude přidána do nadcházející Alfa verze StarkNet

### Pozadí

Jsme rádi, že oznamujeme, že první veřejná verze Káhiry 1.0 je nyní k dispozici. To představuje významný milník ve vývoji Káhiry, který byl poprvé zaveden v roce 2020 jako Tur-kompletní programovací jazyk pro efektivní psaní programů provežívajících STARK. Cairo 1.0 je vysoce kvalitní jazyk. Stejně jako Rust, je záměrem umožnit vývojářům snadno psát kód, který je účinný a bezpečný.

Od svého založení se Káhira používá k vytváření aplikací Layer-2, které[zpracovaly](https://dashboard.starkware.co/starkex)obchody v hodnotě přes 790 miliard dolarů, zpracovává více než 300 milionů transakcí a vytěžuje více než 90 milionů NFT, všechny provedené mimo řetězec a usazené na Ethereu s matematickou integritou zaručenou důkazy STARK. Káhira se obecně stala 4. nejpoužívanějším programovacím jazykem v ekosystému blockchainu[](https://defillama.com/languages). S uvolněním Káhiry 1. , usilujeme o to, aby byl jazyk ještě přístupnější a uživatelsky přívětivější a zároveň jsme zavedli nové funkce, které zvyšují bezpečnost a pohodlí.

Jednou z nejvýznamnějších změn v Káhiře 1.0 je syntaxe. Vybrali jsme inspiraci od**Rust**, abychom vytvořili vývojářsky přívětivější jazyk, který je snazší číst a psát. Nová verze Káhiry umožňuje psaní bezpečnějšího kódu (silně zadaného, vlastnictví a půjčky atd.), ale je také výraznější.

Káhira 1.0 také zavádí Sierru, novou přechodovou reprezentaci, která zajišťuje**každý**Káhirový běh lze prokázat. Díky tomu je Káhira 1.0 obzvláště dobře vhodná pro použití v bezpovolené síti, jako je StarkNet, kde může zajistit robustní ochranu DoS a cenzurní rezistenci. Více o Sierře si můžete přečíst v našem[předchozím](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)příspěvku.

## První taste!

### Co dnes můžete udělat?

Vývojáři mohou začít psát, sestavovat a testovat programy v Káhiře! Doporučujeme vývojářům, aby začali experimentovat s Káhirou 1.0 a zvykli na novou syntaxi a funkce.

Protože je Káhira 1.0 stále aktivně vyvíjen a nové funkce jsou neustále přidávány, podívejte se na[Káhirový repozitář](https://github.com/starkware-libs/cairo/)pro nejnovější aktualizace.

### Co bude dál?

V současné době Káhira 1. stále chybí některé funkce podporované ve starší verzi Káhiry ([viz tato tabulka pro podrobnosti](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)). Náš další milník, očekávaný v příštích několika týdnech, poskytne Káhiře 1.0 parity funkcí se starší verzí. Pokrok směrem k tomuto milníku[můžete sledovat zde](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md).

### Podpora Starknet

Psaní smluv StarkNet v Káhiře 1.0 je podporováno (i když některé funkce stále chybí). StarkNet však zatím nepodporuje rozmístění a plnění smluv z Káhiry o 1.0. StarkNet Alpha V0.11.0, plánované v nadcházejících týdnech, zavede schopnost rozmístit a provozovat smlouvy z Káhiry 1.0. Upgrade na v0.11.0 bude znamenat začátek přechodného období směrem k systému, který provozuje pouze smlouvy z Káhiry 1.0. Toto přechodné období skončí[Regenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4), očekáváno o několik měsíců později.

![](/assets/0_odxbxeacqdwizlfw.jpg)

### Pojďme stavět!

Cílem StarkNet je exponenciálně šířit Ethereum pomocí matematické integrity STARKů, a cílem Káhiry je zpřístupnit toto exponenciální měřítko vývojářům. Dostupnost znamená programovací jazyk, který je efektivní, snadno čitelný a psaný a bezpečný pro používání. Doufáme, že vydání Káhiry 1.0 inspiruje ještě více vývojářů, aby se připojili ke StarkNet a měřítku Ethereum, aby uspokojili globální poptávku.