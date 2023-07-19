### TL;DR

* Starknet unterstützt jetzt die Zusammensetzbarkeit, das Hauptmerkmal, das die Konstellationsphase von Starknet definiert.
* Wir veröffentlichen ein Test-Framework für Starknet – Entwickler können ihre Verträge jetzt lokal und effektiv testen.
* Diese Version enthält mehrere bemerkenswerte Leistungsverbesserungen, wie z. B. Unterstützung für Merkle-Patricia Tries und eine integrierte Funktion für bitweise Operationen.
* Ökosystemfront:

1. Standardisierte Verträge: OpenZeppelin wird standardisierte Verträge für Starknet entwickeln, wie sie es auch für Ethereum getan haben!
2. EVM->Cairo Compiler: Das Warp-Team @ Nethermind demonstrierte die Kompilierung von ERC-20 Solidity-Code für Starknet-Verträge

### Hintergrund

Starknet ist ein erlaubnisloses dezentrales Validity-Rollup (auch bekannt als „ZK-Rollup“). Die [Roadmap](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880) haben wir Anfang des Jahres bekannt gegeben. Der [Alpha](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), der derzeit auf einem öffentlichen Ethereum-Testnetz läuft, unterstützt bereits die erlaubnislose Bereitstellung von Smart Contracts, die jede Geschäftslogik implementieren, mit L1<>L2-Messaging und On-Chain-Daten. Darüber hinaus ermöglicht es jedem Benutzer, Transaktionen ohne Erlaubnis im Ethereum-Stil an das Netzwerk zu senden.

Diese Version: Starknet Alpha 2 enthält die Kernfunktion, die uns den Übergang von Planeten zu Sternbildern ermöglicht: Zusammensetzbarkeit zwischen bereitgestellten Smart Contracts.

### Merkmale

Starknet Alpha 2 führt die folgenden Funktionen ein:

* Zusammensetzbarkeit: Starknet Alpha unterstützt jetzt die Interaktion zwischen Smart Contracts – früher als geplant! Das Schöne an diesem Upgrade ist, dass Entwickler fast das gleiche Erlebnis wie bei Ethereum erwarten können; Aufrufe sind synchron und können als Funktionsaufrufe verwendet werden. Wir warten gespannt auf die neuen Anwendungen, die sowohl vom unbegrenzten Rechenumfang als auch von der Vertragszusammensetzbarkeit profitieren werden, wie sie Starknet eingeführt hat. Um zu verstehen, wie</a>

. Wir würden gerne Ihr Feedback hören und sehen, was Sie auf dem [Starknet Discord](https://discord.gg/uJ9HZTUk2Y)aufbauen.</li> 
  
  * Lokales Test-Framework: Sie haben gefragt, und wir haben geliefert – ein [besseres Test-Framework](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/starknet/testing). Dadurch können Entwickler ihre dApp-Entwicklung beschleunigen, indem sie ihre Starknet-Vertragsbereitstellungen und -Interaktionen lokal testen – ohne externe Abhängigkeiten. Diese Version beinhaltet nur L2-Interaktion, nächste Versionen werden die Funktionalität und Benutzerfreundlichkeit erweitern. Schauen Sie sich das Tutorial [hier](https://www.cairo-lang.org/docs/hello_starknet/unit_tests.html)an und wir würden uns über Ihr Feedback zu dieser Funktion freuen.
* Leistungsverbesserungen:</ul> 

Patricia Trees: Wir haben das Design von Starknet verbessert, um höhere Durchsätze und eine kürzere Beweiserstellungszeit zu unterstützen, indem wir auf Merkle-Patricia Tree State Commitment ([Dokumentation](https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/cairo/common/patricia_utils.py)) umgestiegen sind. Diese Änderung ermöglicht die Erstellung viel größerer Blöcke und senkt somit die Kosten pro Transaktion. Der Übergang zu einem ausgefeilteren staatlichen Engagement wurde durch Cairo, die ZKP-Sprache – eine Kernkomponente des Starknet-Betriebssystems – ermöglicht.

Bitweise Operationen: Wir haben eine [integrierte](https://www.cairo-lang.org/docs/how_cairo_works/builtins.html) hinzugefügt, um wesentlich effizientere bitweise Operationen in Starknet-Verträgen zu unterstützen ([Dokumentation](https://www.cairo-lang.org/docs/reference/common_library.html#common-library-bitwise)).

* Goerli: Starknet wechselt von Ropsten zu [Goerli](https://goerli.etherscan.io/address/0xee02F29aE9A4988aE064940bF11954d6eafE26Ac)! Endlich haben wir unser System von den Launen der Ropsten-Götter befreit. Alpha 2 wird nun über eine stabilere Entwicklungsumgebung laufen.



### Ökosystem

Das Starknet-Ökosystem wächst ständig und wir freuen uns, Ihnen die neuesten Nachrichten mitzuteilen:

* Standardisierte Verträge: Wir fühlen uns geehrt, mit OpenZeppelin an der Standardvertragsbibliothek von Starknet zusammenzuarbeiten. Ihre kanonische Arbeit an den standardisierten Verträgen von Ethereum dient uns allen täglich und wir sind zuversichtlich, dass sie hier ebenso wirkungsvoll sein werden.
* EVM->Cairo Compiler: Das Warp-Team [von Nethermind demonstrierte](https://medium.com/nethermind-eth/warp-your-way-to-starknet-ddd6856875e0) die Transpilierung eines ERC-20-Vertrags vom EVM-Bytecode in einen Starknet-Vertrag und die Bereitstellung auf Starknet. Diese Bemühungen schreiten schnell voran und unser nächstes Ziel ist die Übertragung beliebiger Smart Contracts von Yul nach Kairo.
* Maker-on-Starknet: Dem Maker DAO wurde ein [Vorschlag](https://forum.makerdao.com/t/mip39c2-sp19-adding-the-starknet-engineering-core-unit-sne-001/9745) zur Implementierung des Maker-Protokolls über Starknet vorgelegt. In der ersten Phase wird eine DAI-Brücke von Ethereum zu Starknet vorgeschlagen, gefolgt von der Prägung von DAI auf Starknet.
* Prüfungsdienstleistungen für Starknet/Kairo: Wir beauftragen mehrere Wirtschaftsprüfungsgesellschaften mit der Bereitstellung von Prüfungsdienstleistungen für Starknet-Smart-Verträge und Kairo-Programme.



### Mainnet um die Ecke

Wir bereiten uns auf den Start des Starknet Alpha Mainnet vor und beginnen schrittweise mit einer Reihe von Anwendungen auf der Whitelist. Mehrere Projekte sind im Gange und täglich kommen aktiv weitere hinzu. Um der Party beizutreten, sind Sie eingeladen, uns über [Discord](https://discord.gg/uJ9HZTUk2Y)zu kontaktieren.

Update (November 2021): Starknet Alpha ist live im Ethereum Mainnet