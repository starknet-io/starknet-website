### TL;DR

* STARKs ermöglichen die Skalierung von Blockchain durch den effizienten Nachweis der Integrität von Berechnungen
* StarkEx ist eine anwendungsspezifische Skalierungs-Engine
* StarkNet ist ein Netzwerk ohne Berechtigung, Smart Contract Layer 2

### **STARKs**

STARKs (Scalable, Transparent ARgument of Knowledge) sind ein Nachweissystem, das den Nachweis und die Überprüfung von Berechnungen ermöglicht. Es ermöglicht die Bearbeitung einer großen Berechnung, wodurch ein Nachweis für die Richtigkeit der Berechnung erstellt und der Nachweis in wenigen Schritten überprüft wird.

STARKs können eine Schlüsselrolle bei der Skalierbarkeit der Blockchain spielen, indem sie große Berechnungen außerhalb der Kette durchführen lassen, wo es billiger ist, so dass nur die Verifikation, die einen Bruchteil der Berechnung erfordert, auf der Kette durchgeführt werden. Mit anderen Worten: Indem der Verifikator sehr wenige Schritte auf der Kette durchführt, behauptet er die Integrität einer viel größeren Rechenleistung, die außerhalb der Kette durchgeführt wurde.

Mit STARKs werden Layer-2-Lösungen zusammengefasst und Tausende von Transaktionen berechnet und dann ihre Gültigkeit auf Kette mit einem einzigen STARK-Nachweis überprüft. Die Kosten für den On-Kettenprozess werden auf**alle**Transaktionen im Batch aufgeteilt. Dies führt zu Ethereum Sicherheit und niedrigen Gaskosten pro Transaktion.

Die niedrigen Rechenkosten werden eine neue Klasse von Anwendungen einführen, die bisher nicht auf der Kette realisierbar waren. Diese Eigenschaften machen STARKs zu einem ausgezeichneten Baustein für die Verbesserung der Nutzererfahrung und die Senkung der Gaskosten alles während der Aufrechterhaltung der Sicherheit der Siedlungsschicht Ethereum.

StarkWare bietet zwei Lösungen zur Skalierung von Ethereum mit STARKs: StarkEx und StarkNet.

### **StarkEx**

[StarkEx](https://starkware.co/starkex/)ist ein Framework zur Erstellung von genehmigten, anwendungsspezifischen Skalierungslösungen. StarkEx ist ein Werkzeugkasten mit nützlichen[Anwendungsflüssen](https://docs.starkware.co/starkex-v4/starkex-deep-dive/regular-flows)die Projekte nutzen können, um billige Off-Kettenberechnungen zu erreichen. Ein STARK-Nachweis, der die Richtigkeit der Ausführung bestätigt, wird außerhalb der Kette erzeugt. Ein solcher Nachweis kann bis zu 12.000 bis 500.000 Transaktionen umfassen (abhängig vom Transaktionstyp). Der Nachweis wird dann an den STARK Verifier geschickt, um auf der Kette angenommen zu werden. Dies bedeutet eine Überprüfung für alle Transaktionen – für unglaublich niedrige Amortisationskosten pro Transaktion.

Ein paar Beispiele für die Anwendungen auf StarkEx sind dYdX (ewig Handel), Unveränderlich und Sorare (NFTs — Prägen und Handel), DeversiFi (Spot Trading) und Celer (DeFi Pooling).

StarkWare fügt kontinuierlich weitere Anwendungsströme zu StarkEx hinzu, die dem Markt und den Bedürfnissen seiner Kunden entsprechen.

### **StarkNet**

*[StarkNet](https://starkware.co/starknet/)ist ein unberechtigtes Layer-2-Netzwerk, in dem jeder Benutzer oder Entwickler intelligente Verträge in der Kairoer Sprache umsetzen kann.*

Vergleichbar mit der Erfahrung des intelligenten Vertrags von Ethereum innerhalb des Ökosystems von StarkNet Ihr Vertrag kann mit jedem anderen Vertrag auf StarkNet interagieren, so dass reich zusammengesetzte Protokolle möglich sind. StarkNet-Verträge können auch mit Ethereum-Verträgen über die asynchrone Nachrichtenübergabe interagieren.

Im Gegensatz zu StarkEx, wo Anwendungen für das Absenden von Transaktionen verantwortlich sind, können StarkNet-Sequenzer Batch-Transaktionen ausführen und diese an die Verarbeitung senden und beweisen. (StarkNets Sequenzer werden derzeit von StarkWare betrieben, mit zukünftigen Plänen zur Dezentralisierung.) Das heißt, sobald die Anträge ihre Kairoer Verträge abschließen, müssen sie sich keine Sorgen um den Betrieb zusätzlicher Betreiberinfrastrukturen machen. StarkNet unterstützt den Rollup Datenverfügbarkeitsmodus, was bedeutet, dass der Zustand des Rollups zusammen mit den STARK-Prüfungen auf Ethereum geschrieben wird.

Eine riesige Entwicklergemeinschaft engagiert sich intensiv mit dem StarkNet-Ökosystem, dem Bau von Apps, Tools und Infrastruktur. Dutzende von Anwendungen sind bereits live auf testnet — DeFi, Spiele, Stimmen, KI und mehr. Mehr über Entwicklerwerkzeuge wie Blockexplorer, lokale Testumgebung und -Framework SDKs in mehreren Sprachen und mehr werden von der StarkNet Community gebaut. Darüber hinaus finden aktive Diskussionen auf der[Schamanenplattform](https://community.starknet.io/)statt, die Vorschläge für Verbesserungen, potenzielle Funktionen und bewährte Verfahren enthält.

### **Zum Summen oben**

Sowohl[StarkEx](https://youtu.be/P-qoPVoneQA)als auch StarkNet sind STARK-basierte Skalierungslösungen. Beide bieten Skalierbarkeit, niedrige Gaskosten und Sicherheit, haben aber unterschiedliche Betriebsanforderungen und Interoperabilitätsmuster. StarkEx könnte die richtige Lösung für eine Applikation sein, die weitgehend eigenständig ist und in die APIs passt, die StarkEx zur Verfügung stellt. StarkNet ist vielleicht besser geeignet für ein Protokoll, das synchron mit anderen Protokollen interagiert oder Bedürfnisse hat, die über das hinausgehen, was StarkEx bietet.

STARKs haben revolutioniert, wie Anwendungen auf Ethereum aufgebaut werden können. StarkEx und StarkNet werden weiterhin Anwendungen, die bisher nicht durchführbar waren, ermöglichen und die Grenzen dessen überschreiten, was auf der Blockchain möglich ist.

Dieser Artikel wurde in Zusammenarbeit von[Tim Gestson](https://twitter.com/IcemanTim)und dem[StarkWare](https://starkware.co/)Team geschrieben