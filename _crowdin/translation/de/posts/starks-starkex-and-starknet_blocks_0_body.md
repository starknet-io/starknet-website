### TL;DR

* STARKs ermöglichen die Skalierung der Blockchain, indem sie die Integrität von Berechnungen effizient nachweisen
* StarkEx ist eine anwendungsspezifische Skalierungs-Engine
* Starknet ist ein erlaubnisloses, intelligentes Vertrags-Layer-2-Netzwerk

### STARKs

STARKs (Scalable, Transparent ARgument of Knowledge) sind ein Beweissystem, das den Beweis und die Verifizierung von Berechnungen ermöglicht. Es ermöglicht die Durchführung einer großen Berechnung, die Erstellung eines Beweises für die Richtigkeit der Berechnung und die anschließende Überprüfung des Beweises in sehr wenigen Schritten.

STARKs können eine Schlüsselrolle bei der Skalierbarkeit der Blockchain spielen, indem sie es ermöglichen, große Berechnungen außerhalb der Kette durchzuführen, wo es billiger ist, und nur die Verifizierung, die einen Bruchteil der Berechnungen erfordert, in der Kette durchzuführen. Mit anderen Worten: Durch die Ausführung sehr weniger Schritte in der Kette stellt der Verifizierer die Integrität einer viel größeren Berechnung sicher, die außerhalb der Kette durchgeführt wurde.

Mithilfe von STARKs bündeln und berechnen Layer-2-Lösungen Tausende von Transaktionen und überprüfen dann ihre Gültigkeit in der Kette mit einem einzigen STARK-Beweis. Die Kosten des On-Chain-Prozesses werden auf alle Transaktionen im Batch aufgeteilt. Dies führt zu Ethereum-Sicherheit und niedrigen Gaskosten pro Transaktion.

Der niedrige Rechenaufwand wird eine neue Klasse von Anwendungen einleiten, die bisher in der Kette nicht möglich waren. Diese Eigenschaften machen STARKs zu einem hervorragenden Baustein zur Verbesserung des Benutzererlebnisses und zur Reduzierung der Gaskosten, während gleichzeitig die Sicherheit der Ethereum-Abwicklungsschicht gewahrt bleibt.

StarkWare bietet zwei Lösungen zur Skalierung von Ethereum mit STARKs: StarkEx und Starknet.

### StarkEx

[StarkEx](https://starkware.co/starkex/) ist ein Framework zum Erstellen autorisierter, anwendungsspezifischer Skalierungslösungen. StarkEx ist eine Toolbox mit nützlichen [Anwendungsflüssen](https://docs.starkware.co/starkex-v4/starkex-deep-dive/regular-flows) , die Projekte nutzen können, um kostengünstige Off-Chain-Berechnungen zu erreichen. Ein STARK-Beweis, der die Korrektheit der Ausführung bescheinigt, wird außerhalb der Kette generiert. Ein solcher Nachweis kann bis zu 12.000–500.000 Transaktionen umfassen (abhängig von der Transaktionsart). Der Beweis wird dann an den STARK-Verifizierer gesendet, um in der Kette akzeptiert zu werden. Das bedeutet eine Verifizierung für alle Transaktionen – und das zu unglaublich niedrigen amortisierten Gaskosten pro Transaktion.

Einige Beispiele für die auf StarkEx bereitgestellten Anwendungen sind dYdX (Perpetuals Trading), Immutable und Sorare (NFTs – Prägung und Handel), DeversiFi (Spot-Handel) und Celer (DeFi Pooling).

StarkWare fügt StarkEx kontinuierlich weitere Anwendungsabläufe hinzu und folgt dabei dem Markt und den Bedürfnissen seiner Kunden.

### Starknet

[Starknet](https://starkware.co/starknet/) ist ein erlaubnisloses Layer-2-Netzwerk, in dem jeder Benutzer oder Entwickler intelligente Verträge einsetzen kann, die in der Sprache Kairo entwickelt wurden.

Vergleichbar mit der Smart-Contract-Erfahrung von Ethereum kann Ihr Vertrag innerhalb des Starknet-Ökosystems mit jedem anderen auf Starknet bereitgestellten Vertrag interagieren, was umfassend zusammensetzbare Protokolle ermöglicht. Starknet-Verträge können auch über asynchrone Nachrichtenübermittlung mit Ethereum-Verträgen interagieren.

Im Gegensatz zu StarkEx, wo Anwendungen für die Übermittlung von Transaktionen verantwortlich sind, bündeln Starknet-Sequenzer Transaktionen und senden sie zur Verarbeitung und Prüfung. (Starknets Sequenzer werden derzeit von StarkWare betrieben, eine zukünftige Dezentralisierung ist geplant.) Dies bedeutet, dass sich Anwendungen, sobald sie ihre Kairo-Verträge bereitstellen, nicht um den Betrieb zusätzlicher Betreiberinfrastruktur kümmern müssen. Starknet unterstützt den Rollup-Datenverfügbarkeitsmodus, was bedeutet, dass der Status des Rollups zusammen mit den STARK-Beweisen in Ethereum geschrieben wird.

Eine riesige Entwicklergemeinschaft beschäftigt sich intensiv mit dem Starknet-Ökosystem und entwickelt Apps, Tools und Infrastruktur. Dutzende Anwendungen sind bereits im Testnetz verfügbar – DeFi, Spiele, Abstimmungen, KI und mehr. Darüber hinaus werden von der Starknet-Community Entwicklertools wie der Block-Explorer, eine lokale Testumgebung und ein Framework, SDKs in mehreren Sprachen und mehr entwickelt. Darüber hinaus finden auf der Plattform [Schamanen](https://community.starknet.io/)aktive Diskussionen mit Verbesserungsvorschlägen, möglichen Funktionen und Best Practices statt.

### Etwas zusammenfassen

Sowohl [StarkEx](https://youtu.be/P-qoPVoneQA) als auch Starknet sind STARK-basierte Skalierungslösungen. Beide bieten Skalierbarkeit, niedrige Gaskosten und Sicherheit, haben jedoch unterschiedliche Betriebsanforderungen und Interoperabilitätsmuster. StarkEx könnte die richtige Lösung für eine Anwendung sein, die weitgehend eigenständig ist und in die von StarkEx bereitgestellten APIs passt. Starknet eignet sich möglicherweise besser für ein Protokoll, das eine synchrone Interaktion mit anderen Protokollen erfordert oder Anforderungen hat, die über die Angebote von StarkEx hinausgehen.

STARKs haben die Art und Weise revolutioniert, wie Anwendungen auf Ethereum erstellt werden können. StarkEx und Starknet werden weiterhin Anwendungen ermöglichen, die bisher nicht realisierbar waren, und die Grenzen dessen erweitern, was auf der Blockchain möglich ist.

Dieser Artikel wurde in Zusammenarbeit von [Tim Gestson](https://twitter.com/IcemanTim) und dem [StarkWare](https://starkware.co/) Team verfasst