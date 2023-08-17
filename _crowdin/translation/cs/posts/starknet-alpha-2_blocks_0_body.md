### TL;DR

* StarkNet nyní podporuje skladatelnost, hlavní funkci definující fázi Constellations StarkNet.
* Vydáváme testovací rámec pro StarkNet – vývojáři nyní mohou testovat své smlouvy lokálně a efektivně.
* Toto vydání obsahuje několik pozoruhodných vylepšení výkonu, jako je podpora Merkle-Patricia Tries a vestavěný nástroj pro operace v bitwise.
* fronta ekosystému:

1. **Standardizované kontrakty**: OpenZeppelin bude vyvíjet standardizované kontrakty pro StarkNet, stejně jako pro Ethereum!
2. **EVM->Káhira Compiler**: Warp tým @ nemysl prokázal kompilaci kódu solidarity ERC-20 pro smlouvy StarkNet

### Pozadí

StarkNet je nepovolený decentralizovaný validity-Rollup (tzv. „ZK-Rollup“). Na začátku roku jsme oznámili svůj[plán](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880). [Alpha](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), v současné době běží na veřejném Ethereum testnet, již podporuje nepovolené zavádění chytrých smluv implementujících jakoukoliv obchodní logiku, s L1<>L2 zprávami a on-chain daty. Kromě toho umožňuje každému uživateli odesílat transakce do sítě bez oprávnění Ethereum-styl.

Tato verze: StarkNet Alpha 2 obsahuje základní funkci, která nám umožňuje pokročit od planet k Constellations: skladovatelnost mezi zavedenými chytrými smlouvami.

### Vlastnosti

StarkNet Alpha 2 zavádí následující funkce:

* **Kompozitelnost:**StarkNet Alpha nyní podporuje interakci mezi inteligentními smlouvami – před plánem! Krása této modernizace spočívá v tom, že vývojáři mohou očekávat téměř stejné zkušenosti jako Ethereum; hovory jsou synchronní a lze je použít jako volání funkcí. Rádi čekáme na nové aplikace, které budou mít prospěch jak z neomezené výpočetní velikosti, tak z kontraktní skladby, jak je uvolněno StarkNet. Chcete-li pochopit, jak používat tuto funkci, můžete začít sledováním tohoto[tutoriálu](https://www.cairo-lang.org/docs/hello_starknet/calling_contracts.html). Rádi bychom slyšeli tvou zpětnou vazbu a viděli, co budeš stavět na[StarkNet discordu](https://discord.gg/uJ9HZTUk2Y).
* **Místní testovací rámec:**zeptal jste se, a my jsme dodali —[lepší testovací rámec](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/starknet/testing). To umožní vývojářům urychlit vývoj dApp testováním svých smluvních nasazení StarkNet a interakcí lokálně – bez vnějších závislostí. Tato verze obsahuje pouze interakci L2, další verze rozšíří funkčnost a snadnost používání. Podívejte se na výukový kurz[zde](https://www.cairo-lang.org/docs/hello_starknet/unit_tests.html)a rádi bychom slyšeli zpětnou vazbu k této funkci.
* **Vylepšení výkonu:**

**Patricia Stromy:**Zlepšili jsme návrh StarkNetu, abychom podpořili vyšší průchody a kratší čas vytvoření důkazu přechodem na závazek Merkle-Patricia Stree ([dokumentace](https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/cairo/common/patricia_utils.py)). Tato změna umožňuje vytvořit mnohem větší bloky, a tím snížit náklady na transakci. Káhira, jazyk ZKP – základní složka operačního systému StarkNet – umožnila přechod k sofistikovanějšímu státnímu závazku.

**Bitwise Operation:**Přidali jsme[vestavěný](https://www.cairo-lang.org/docs/how_cairo_works/builtins.html)na podporu mnohem efektivnějších bitwise operací ve smlouvách StarkNet ([dokumentace](https://www.cairo-lang.org/docs/reference/common_library.html#common-library-bitwise)).

* **Goerli:**StarkNet se přesouvá z Ropsten do[Goerli](https://goerli.etherscan.io/address/0xee02F29aE9A4988aE064940bF11954d6eafE26Ac)! Konečně jsme náš systém osvobodili od rozmarů Boha Ropstena. Alfa 2 bude nyní běžet nad stabilnějším vývojovým prostředím.

### Ekosystém

StarkNet ekosystém neustále roste a rádi sdílíme nejnovější zprávy:

* **Standardizovaná smlouva**: jsme ctí pracovat s OpenZeppelin na standardní knihovně smluv StarkNet. Jejich kanonická práce na standardizovaných smlouvách Ethereum nám slouží každý den a my jsme přesvědčeni, že v tomto případě budou mít stejný dopad.
* **EVM->Káhiro Compiler**: Nethermind's Warp team[prokázal](https://medium.com/nethermind-eth/warp-your-way-to-starknet-ddd6856875e0)transpilaci smlouvy ERC-20 od EVM bytecode ke smlouvě StarkNet a nasazení na StarkNet. Toto úsilí se rychle vyvíjí a naším dalším cílem je proměňování svévolných inteligentních smluv z Yulu do Káhiry.
* **Maker-on-StarkNet**:[návrh](https://forum.makerdao.com/t/mip39c2-sp19-adding-the-starknet-engineering-core-unit-sne-001/9745)byl předložen Maker DAO k provedení Maker protokolu přes StarkNet. První fáze navrhuje DAI most z Ethereum do StarkNet s těžbou DAI na StarkNet k následování.
* **StarkNet/Kairo Auditing Services**: zapojujeme více auditorských společností k poskytování služeb v oblasti inteligentních kontraktů StarkNet a programů Káhira.

### Hlavní síť v rohu

Připravujeme se na spuštění Alpha StarkNet Mainnet a postupně začínáme s povolenou sadou aplikací. Probíhá několik projektů a další jsou do dne aktivně přidány. Chceš-li se připojit ke straně, budeš pozván, abys se spojil přes[Discord](https://discord.gg/uJ9HZTUk2Y).

**Aktualizace (Nov. 2021):**StarkNet Alpha je živá na Ethereum Mainnet