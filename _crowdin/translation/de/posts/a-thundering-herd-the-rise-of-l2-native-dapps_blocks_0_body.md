### TL;DR

L2-native dApps können jetzt ohne traditionelle L1-Gasbeschränkungen gedeihen

### Einführung

dApp-Entwickler waren aufgrund des Blockgas-Limits von Ethereum (L1) schon immer mit starken Einschränkungen konfrontiert. Es beschränkt nicht nur*, wie*diese dApps funktionieren, sondern auch*, wozu*diese dApps in der Lage sind.

Layer 2 (L2) bietet dApp-Entwicklern eine rechnerische grüne Wiese, frei von dieser Gasglasdecke. Wir gehen davon aus, dass die überwiegende Mehrheit der dApps innerhalb weniger Jahre L2-nativ sein wird: Sie werden von Grund auf auf L2 aufgebaut sein, um von diesem Grad an rechnerischer Freiheit zu profitieren.

### L1-Gasgrenzwerte prägen L1-native dApps

*Betrachten wir zwei Beispiele beliebter dApps, deren Design stark von L1-Gasbeschränkungen geprägt ist: AMMs und DEX-Aggregatoren.*

Ein Automated Market Maker (AMM) ist im Wesentlichen eine Low-Gas-Näherung an eine Orderbuch-basierte Börse. Anstatt Benutzern das Platzieren und Entfernen von Limits, Stop-Loss oder einer Vielzahl anderer Auftragsarten zu ermöglichen, ermöglichen L1-AMMs nur einfache Swaps mit einem zentralen zugrunde liegenden Liquiditätspool – um den hohen Rechenaufwand von L1 zu bewältigen.

DEX-Aggregatoren benötigen im Idealfall Zugang zu allen möglichen Liquiditätspools, selbst zum kleinsten Liquiditätspool, um die besten Preise für Benutzer zu erzielen. Aufgrund der Kosten für die Abfrage vieler verschiedener Pools lohnt es sich jedoch einfach nicht, Transaktionen über L1 durchzuführen. Der Zugriff auf Pools und die Zahlung der damit verbundenen Transaktionsgebühren ist nur dann gerechtfertigt, wenn die Liquiditätspools über eine ausreichend hohe Liquidität verfügen. In ähnlicher Weise könnten Liquidationen bei Kreditvergaben und anderen auf Sicherheiten basierenden dApps viel genauer sein, wenn die Differenz zwischen Liquidationsrabatt und Transaktionsgebühr viel geringer wäre.

Die eingeschränkte Funktionalität und das eingeschränkte Design vieler L1-dApps sind direkt darauf zurückzuführen, dass Entwickler ihren Code optimieren, um die Gasbeschränkungen von Ethereum einzuhalten. Warum, fragen Sie sich vielleicht, sagen wir Ethereum? Kann Solidity-Code nicht auf vielen L1s und sogar einigen L2s ausgeführt werden? Allerdings ist Ethereum von diesen die teuerste (und daher sicherste) Umgebung. Solidity dApps sind für die „teuerste Verbindung“, also Ethereum, konzipiert. Daher profitieren sie nicht von den Rechenvorteilen, die kostengünstigere Laufzeitumgebungen bieten. Um Funktionen freizuschalten, die beim Entwerfen einer dApp für die teuerste Laufzeitumgebung entfallen, muss der Code der dApp angepasst werden.

### Der Aufstieg L2-nativer dApps

Gültigkeits-Rollups (auch bekannt als ZK-Rollups) ermöglichen eine äußerst kostengünstige Berechnung. Im Gegensatz zu jeder anderen Skalierungslösung kann die L2-Berechnung exponentiell wachsen, mit nur geringen Auswirkungen auf die Gaskosten für die On-Chain-Verifizierung. Darüber hinaus verarbeitet ein Validity Rollup Eingaben in die Berechnungen – „Zeugendaten“ – ohne zusätzliche L1-Ressourcen zu verbrauchen, was Berechnungen mit vielen Eingaben ermöglicht.

Die native Codierung von dApps auf L2 in**[Cairo](https://www.cairo-lang.org/)**(einer Turing-vollständigen Sprache zur Skalierung von dApps über STARK-Proofs) eröffnet Entwicklern eine Vielzahl von Möglichkeiten. Es ermöglicht ihnen, erhebliche Datenmengen – sowohl Rechen- als auch Zeugendaten – zu nutzen, die sie zuvor nicht nutzen konnten.

Lassen Sie uns solche L2-native dApps und ihre neuen, erweiterten Funktionen erkunden.

#### DeFi

Vor dem Onboarding bei StarkEx, dem Validity Rollup von StarkWare, operierte dYdX als L1-dApp auf Ethereum. Es bot seinen Benutzern eine Hebelwirkung von x10 auf synthetische Vermögenswerte und unterstützte Positionen mit nur einem synthetischen Vermögenswert. Der Umbau von dYdX in Kairo als L2-native dApp bietet eine deutlich skalierbarere, günstigere und effizientere DeFi-Plattform:

* Oracle-Preisaktualisierungen: Solche Aktualisierungen umfassen typischerweise Dutzende von Preisen und Signaturen aus verschiedenen Quellen, um einen Median zu berechnen. Ein Validity Rollup ermöglicht eine exponentielle Skalierung der Preis-Oracle-Logik (Signaturüberprüfung und Berechnung des Medianpreises) – ohne die Zeugendaten an L1 zu melden. Vergleichen Sie dies mit der L1-Implementierung von dYdX, bei der jedes Price Oracle-Update etwa 300.000 Gas kostete und daher in seiner Häufigkeit und der Größe der Preisreporter begrenzt war.
* Hebelwirkung: Ein genauer Preis-Feed ermöglicht es dYdX, das Risiko einer Position in Echtzeit abzuschätzen und den Benutzern eine höhere Hebelwirkung zu bieten. Dank der verbesserten Oracle-Preisaktualisierungen erhöhte dYdX den Leverage von x10 auf L1 auf x25 auf L2.
* Cross-Margin: Mit dYdX auf L2 können Market Maker mit denselben Sicherheiten Long-/Short-Orders für viele Vermögenswerte platzieren. Die durchschnittliche Abwicklung auf dYdXs L2 umfasst Positionen mit mehr als 10 verschiedenen synthetischen Vermögenswerten! Im Vergleich dazu hätte diese Cross-Margin-Fähigkeit auf L1 die Gaskosten in der Kette mehr als verdoppelt.

#### Gaming und generative Kunst

Die aktuellen L1-nativen Spiele speichern Spielressourcen typischerweise auf L1 und implementieren gleichzeitig die gesamte Spiellogik in einer vertrauenswürdigen Off-Chain-Anwendung. Dieses Muster ist eine direkte Folge der Gasbeschränkungen von L1. Dank der kostengünstigen Berechnung auf L2 können Entwickler von L2-nativen Gaming-dApps nun die Spiellogik in einem Smart Contract implementieren und die Spielressourcen vertrauenswürdig manipulieren, anstatt sie nur zu speichern. Die Einbeziehung der Spiellogik in den Bereich der vertrauenswürdigen Berechnung ist ein bedeutender Schritt hin zu einer viel reichhaltigeren Welt Blockchain-basierter Spiele. L2-native Spiele werden bereits auf StarkNet entwickelt, dem erlaubnislosen Netzwerk von StarkWare (z. B.[Dope Wars](https://github.com/dopedao/RYO)und[Influence](https://medium.com/influenceth/influence-to-launch-on-starknet-afd3c26ea25a)).

Doch wie komplex kann ein Blockchain-basiertes Spiel wirklich sein? Beispielsweise scheint es unmöglich, Grafiken direkt in der Kette zu verarbeiten –[oder ist es](https://twitter.com/guiltygyoza/status/1449637155001798657)? Das Lösen von Differentialgleichungen und die Simulation planarer Bewegungen in einem Smart Contract stellen einen bedeutenden Schritt hin zu einer zukünftigen Blockchain-Physik-Engine dar. Die Auswirkungen sind enorm. Stellen Sie sich ein kompetitives Multiplayer-Spiel wie Counter-Strike vor. Wenn man die Spiellogik in der Kette simulieren könnte, würden viele gefürchtete Hacks der Vergangenheit angehören – Spieler könnten ein nachweislich faires Spiel genießen.

Generative Kunst nutzt Berechnungen, Zufälligkeit und andere Daten, um Blockchain-basierte Kunst zu schaffen. Je komplexer die Logik und Berechnungen sind, die ein Künstler vertrauensvoll nutzen kann, desto mehr Möglichkeiten gibt es, einzigartige, einzigartige Kunstwerke zu schaffen. [WhaleStreet DAO](https://blog.whalestreet.xyz/whalestreet-dao-to-launch-gen-art-ecosystem-on-ethereum-with-starknet/)startet eines der ersten Gen Art-Projekte auf StarkNet und nutzt dabei die unbegrenzten Rechenressourcen von StarkNet.

### Was kommt als nächstes?

Validity Rollups – und insbesondere die von Kairo betriebenen StarkEx und StarkNet – bieten eine Umgebung, in der man dApps entwickeln und betreiben kann, die viel Rechen- oder Zeugendaten verbrauchen. Angesichts aller Vorteile der Distributed-Ledger-Technologie prognostizieren wir eine äußerst spannende Zukunft für L2-native dApps.

Was können*mit allgemeinen Berechnungen*, die durch Zusammensetzbarkeit, Vertrauenslosigkeit und Dezentralisierung unterstützt werden?