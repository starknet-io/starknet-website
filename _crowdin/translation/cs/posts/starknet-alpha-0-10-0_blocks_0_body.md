### TL;DR

* Zlepšení Abstrakce účtu v duchu EIP-4337

1. Validate – Provést oddělení
2. Jedinečnost transakcí je nyní zajištěna v protokolu (jednou)

* Mechanismus poplatků se rozšiřuje na tyto oblasti:

1. L1→L2 zprávy
2. Vyhlásit transakce

* Jen málo změn v Káhiře

### Úvod

Jsme rádi, že jsme představili Alfa StarkNet 0.10.0. Tato verze je dalším krokem ke skalování Etherea, aniž by byla ohrožena bezpečnost a decentralizace.

Tento příspěvek stručně popisuje hlavní vlastnosti této verze. Pro úplný seznam změn se podívejte na[poznámky k vydání](https://github.com/starkware-libs/cairo-lang/releases). Podrobnější informace naleznete v[dokumentaci](https://docs.starknet.io/).

### Změny Abstrakce účtu

Postupujeme kupředu s abstrakcí účtu[StarkNet.](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781). Tato verze zavádí změny inspirované[EIP-4337](https://eips.ethereum.org/EIPS/eip-4337).

#### Ověření/vykonání oddělení

Až dosud byla funkce účtu \_\_execute\_\_ odpovědná za ověření i provedení transakce. V 0.10.0 rozbijeme tuto spojovací zařízení a do účtů zavedeme samostatnou funkci \_\_\_validate\_\_. Po obdržení transakce smlouva o účtu nejprve zavolá \_\_validate\_\_\_, a pokud uspějete, pokračujte do \_\_execute\_\_.

Potvrdit/spustit oddělení poskytuje rozlišení na úrovni protokolu mezi neplatnými a (dosud platnými) transakcemi. Díky tomu budou následníci moci účtovat poplatky za provedení platné transakce bez ohledu na to, zda byla zrušena či nikoli.

#### Nonce

Ve verzi 0.10.0 je přidáno nonce pole pro vynucení jedinečnosti transakcí na úrovni protokolu. Dosud byly na úrovni smlouvy o účtu vyřízeny, což znamenalo, že transakce se stejnou hash mohla být provedena dvakrát teoreticky.

Podobně jako v případě Ethereum každý kontrakt nyní obsahuje žádný obchod, který počítá počet provedených obchodů z tohoto účtu. Smlouvy o účtu budou přijímat pouze transakce s odpovídajícími žádnými, tj. pokud je aktuální nonce účtu X, pak bude přijímat pouze transakce s nonce X.

#### Nová verze transakce

Chcete-li povolit zpětnou kompatibilitu, zavedeme tyto dvě změny prostřednictvím nové transakce —[v1](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C). Tyto změny se budou vztahovat pouze na novou verzi a starší účty budou moci provádět transakce s verzí 0.

Poznámka – transakce v0 je nyní zastaralá a bude odstraněna ve StarkNet Alpha v0.11.0. Ujistěte se, že jste aktualizovali pro použití nové verze transakce.

Pro podrobnější informace o verzi transakce si prosím přečtěte[dokumentaci](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C).

#### Mechanismus poplatků

Nová verze umožňuje zahrnout poplatky za dva požadované komponenty:

* [L1→L2 zpráva](https://docs.starknet.io/docs/L1-L2%20Communication/messaging-mechanism#l1--l2-message-fees)
* [Vyhlásit transakci](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)

Tyto poplatky nebudou v této verzi povinné a budou vynuceny pouze spustit StarkNet Alpha v0.11.0.

#### Změny syntaxe Káhiry

Ve prospěch postupného postupu při aktualizaci Káhiry[Káhira 1.0](https://www.youtube.com/watch?v=Ny4Rv6ztINU)obsahuje tato verze několik změn syntaxe.

Pro minimalizaci nepříjemností bude vydání verze obsahovat[migrační skript](https://www.youtube.com/watch?v=kXs59zaQrsc), který automaticky aplikuje výše uvedené změny. Více informací[naleznete zde](https://github.com/starkware-libs/cairo-lang/releases).

### Co další?

* Za několik týdnů plánujeme zavést paralelizaci do sekvenčního nástroje umožňující rychlejší produkci bloků (V0.10.1)
* Brzy vyplníme poslední část, která musí být zahrnuta do platby poplatku – nasazení účtu
* Káhira 1.0 release! Více informací o tom v nadcházejícím příspěvku.

### Jak se mohu více zapojit?

* Přejděte na[starknet.io](https://starknet.io/)pro všechny informace od StarkNet, dokumentaci, návody a aktualizace.
* Připojte se k[StarkNet Discord](http://starknet.io/discord)pro podporu vývojáře, ekosystémová oznámení a staňte se součástí komunity.
* Navštivte[Fórum StarkNet](http://community.starknet.io/)abyste zůstali aktuální a účastnili se diskusí o výzkumu StarkNet.

Jsme vždy rádi, že obdržíme zpětnou vazbu na naši[dokumentaci](https://docs.starknet.io/)!