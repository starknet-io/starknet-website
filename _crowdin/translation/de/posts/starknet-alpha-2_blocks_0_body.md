### TL;DR

* StarkNet unterstützt nun Composability, das Hauptmerkmal der StarkNet-Konstellationsphase.
* Wir veröffentlichen ein Test-Framework für StarkNet — Entwickler können ihre Verträge nun lokal und effektiv testen.
* Diese Version enthält einige bemerkenswerte Leistungsverbesserungen, wie die Unterstützung von Merkle-Patricia Tries und ein eingebautes Paket für bitweise Operationen.
* Ecosystem Front:

1. **Standardisierte Verträge**: OpenZeppelin wird standardisierte Verträge für StarkNet entwickeln, wie sie es für Ethereum getan haben!
2. **EVM->Kairo Compiler**: Das Warp Team @ Nethermind hat die Zusammenstellung von ERC-20 Soliditätscode zu StarkNet Verträgen demonstriert

### Hintergrund

StarkNet ist ein permissionless dezentralisierter Validity-Rollup (auch „ZK-Rollup“). Wir haben ihre[-Roadmap](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)Anfang des Jahres angekündigt. Die[Alpha](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), die derzeit auf einem öffentlichen Ethereum Testnetz läuft unterstützt bereits den unzulässigen Einsatz von intelligenten Verträgen, die jede Geschäftslogik umsetzen, mit L1<>L2 Messaging und On-Ketten-Daten. Darüber hinaus erlaubt es jedem Benutzer, Transaktionen an das Netzwerk unzulässig zu schicken, Ethereum-Stil.

Dieses Release: StarkNet Alpha 2 enthält die Kernfunktionalität, die es uns ermöglicht, von Planeten auf Constellations voranzukommen: Kompatibilität zwischen eingesetzten intelligenten Verträgen.

### Eigenschaften

StarkNet Alpha 2 führt folgende Funktionen ein:

* **Komponierbarkeit:**StarkNet Alpha unterstützt jetzt die Interaktion zwischen intelligenten Verträgen — vor dem Zeitplan! Die Schönheit dieses Upgrades ist, dass Entwickler fast die gleiche Erfahrung erwarten können wie Ethereum; -Aufrufe sind synchron und können als Funktionsaufrufe verwendet werden. Wir warten gespannt auf die neuen Anwendungen, die sowohl von unbegrenzten Rechenmaßstäben als auch von der Vertragszusammensetzbarkeit profitieren werden, wie sie StarkNet entfesselt hat. Um zu verstehen, wie Sie diese Funktion nutzen können, folgen Sie bitte dieser[Anleitung](https://www.cairo-lang.org/docs/hello_starknet/calling_contracts.html). Wir würden uns über dein Feedback freuen und sehen was du auf der[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y) aufbaust.
* **Lokales Test-Framework:**Sie gefragt, und wir lieferten — ein[besseres Test-Framework](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/starknet/testing). Dadurch können Entwickler ihre dApp-Entwicklung beschleunigen, indem sie ihre StarkNet-Vertragsverträge und -Interaktionen lokal testen – ohne externe Abhängigkeiten. Diese Version enthält nur L2-Interaktion, nächste Versionen erweitern die Funktionalität und Benutzerfreundlichkeit. Schauen Sie sich das Tutorial[hier](https://www.cairo-lang.org/docs/hello_starknet/unit_tests.html)an, und wir würden uns freuen, wenn Sie Ihr Feedback zu dieser Funktion hören würden.
* **Leistungsverbesserungen:**

**Patricia Trees:**Wir haben das Design von StarkNet verbessert, um höhere Durchsätze und kürzere Zeit für die sichere Generierung zu unterstützen, indem wir zu Merkle-Patricia Tree Zustandsverpflichtung wechseln ([Dokumentation](https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/cairo/common/patricia_utils.py)). Diese Änderung ermöglicht das Erstellen von wesentlich größeren Blöcken, wodurch die Kosten pro Transaktion gesenkt werden. Der Übergang zu einem ausgeklügelteren staatlichen Engagement wurde durch Kairo, die ZKP-Sprache, ermöglicht — eine Kernkomponente des StarkNet-Betriebssystems.

**Bitweise Operationen:**Wir haben ein[eingebautes](https://www.cairo-lang.org/docs/how_cairo_works/builtins.html)hinzugefügt, um wesentlich effizientere bitweise Operationen in StarkNet-Verträgen zu unterstützen ([Dokumentation](https://www.cairo-lang.org/docs/reference/common_library.html#common-library-bitwise)).

* **Goerli:**StarkNet bewegt sich von Ropsten nach[Goerli](https://goerli.etherscan.io/address/0xee02F29aE9A4988aE064940bF11954d6eafE26Ac)! Endlich haben wir unser System von den Launen der Ropsten Götter befreit. Alpha 2 wird nun über eine stabilere Entwicklungsumgebung laufen.

### Ökosystem

Das Ökosystem von StarkNet wächst stetig und wir freuen uns über die neuesten Nachrichten:

* **Standardisierte Verträge**: Wir haben die Ehre, mit OpenZeppelin an der StarkNet-Standardverträge Bibliothek zu arbeiten. Ihre kanonische Arbeit an den standardisierten Verträgen von Ethereum dient uns allen täglich, und wir sind zuversichtlich, dass sie hier genauso wirkungsvoll sein werden.
* **EVM->Kairo Compiler**: Das Nethermind’s Warp Team[hat](https://medium.com/nethermind-eth/warp-your-way-to-starknet-ddd6856875e0)Transpilation eines ERC-20-Vertrags von EVM Bytecode auf einen StarkNet-Vertrag und den Einsatz auf StarkNet demonstriert. Diese Bemühungen gehen zügig voran, und unser nächstes Ziel ist die Transplantation beliebiger intelligenter Verträge von Yul nach Kairo.
* **Maker-on-StarkNet**: Ein[Vorschlag](https://forum.makerdao.com/t/mip39c2-sp19-adding-the-starknet-engineering-core-unit-sne-001/9745)wurde beim Maker DAO eingereicht, um das Maker-Protokoll über StarkNet zu implementieren. In der ersten Phase wird eine DAI-Brücke von Ethereum nach StarkNet mit nachgeahmtem DAI auf StarkNet vorgeschlagen.
* **StarkNet/Kairoer Auditing Services**: Wir engagieren mehrere Audit-Unternehmen für die Bereitstellung von StarkNet Smart Contract und Kairoer Programme Auditing-Dienstleistungen.

### Mainnet um die Ecke

Wir bereiten uns auf den StarkNet Alpha Mainnet-Start vor, der schrittweise mit einer Reihe von Anwendungen auf der Whitelist beginnt. Mehrere Projekte sind im Gange, und mehr werden täglich hinzugefügt. Um der Party beizutreten, sind Sie eingeladen, sich über[Discord](https://discord.gg/uJ9HZTUk2Y) anzumelden.

**Update (Nov. 2021):**StarkNet Alpha ist live auf Ethereum Mainnet