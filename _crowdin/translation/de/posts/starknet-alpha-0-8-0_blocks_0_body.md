### TL;DR

* Starknet Alpha 0.8.0 präsentiert die erste Version des Gebührenmechanismus (optional bis Starknet Alpha 0.9.0).
* Neue API-Aufrufe zur Schätzung der Transaktionsgebühr für den Erhalt der Transaktionsverfolgung, was eine bessere Sichtbarkeit und Debugging-Funktionen ermöglicht
* Leistungsverbesserungen am Starknet-Sequenzer
* Löschung der L1→L2-Nachricht

### Einführung

Wie in unserer [Roadmap](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51)dargelegt, verlagert sich unsere Aufmerksamkeit nach der neuesten Erweiterung der Funktionalität und Merkmale von Starknet auf Leistungsverbesserungen und Protokolldesign (einschließlich Gebühren, Kontoabstraktion, Dezentralisierung usw.). Starknet Alpha 0.8.0 beginnt mit der Einführung von Transaktionsgebühren und der Verbesserung der Leistung des Sequenzers.

Die Roadmap für Starknet beinhaltet einen Gebührenmechanismus, und durch die Weiterentwicklung dieser Version kommen wir der vollen Leistung der Plattform einen wichtigen Schritt näher.

Das Hinzufügen des Gebührenmechanismus ist ein wesentlicher Bestandteil des Leistungsdesigns von Starknet. Ohne eine minimale Gebühr laufen wir Gefahr, mit unendlichen Transaktionen konfrontiert zu werden: Dies würde es für das System unmöglich machen, unabhängig von Sequenzeroptimierungen leistungsfähig zu sein.

### Merkmale

#### Gebührenunterstützung

Starknet Alpha unterstützt jetzt die erste Version des Gebührenmechanismus. Dieser Mechanismus ist bereits in diesem frühen Stadium und sogar im Testnet aus zwei Hauptgründen unerlässlich:

1. Es ermöglicht Entwicklern, mit der Optimierung ihrer Verträge gemäß dem Kostenmodell von Starknet zu beginnen.
2. Es ist ein entscheidendes Gegenstück zur Verbesserung der Systemleistung, da es Spam durch das Versenden unzähliger Transaktionen verhindert.

Diese Version stellt die Komponenten vor, die Entwickler benötigen, um Gebührenzahlungen in ihre Tools und Anwendungen zu integrieren. Entwickler können jetzt die Transaktionsgebühr schätzen, indem sie den Endpunkt „estimate_fee“ aufrufen und die Gebührenzahlung im Rahmen der Transaktionsausführung vornehmen.

Da dieses Feature nicht abwärtskompatibel ist, werden wir die Gebührenzahlung zum jetzigen Zeitpunkt nicht erzwingen, sondern erst ab der Version 0.9.0, die in wenigen Wochen erscheinen soll. Dieser schrittweise Übergang wird es Benutzern und Entwicklern ermöglichen, sich an das neue Modell anzupassen.

#### Gebührenstruktur am 0.8.0

Ab 0.8.0 werden die Gebühren allein nach der Rechenkomplexität erhoben, während StarkWare weiterhin die L1-Kommunikationskosten subventioniert. Wir werden den Gebührenmechanismus in den nächsten Wochen aktualisieren, um diese L1-Betriebs- und Kommunikationskosten einzubeziehen. Die Zahlung wird atomar mit der Transaktionsausführung auf Starknet L2 eingezogen. Eine ausführliche Beschreibung finden Sie in der [Gebühren-Dokumentation](https://starknet.io/documentation/fee-mechanism/).

Es ist wichtig zu beachten, dass wir eng mit der Entwicklergemeinschaft zusammenarbeiten, um den Gebührenmechanismus im Zuge der Weiterentwicklung von Starknet zu optimieren und weiterzuentwickeln.

#### L2 Goerli ETH Wasserhahn

Wir haben den [L2 Goerli ETH Faucet](https://faucet.goerli.starknet.io/) eingeführt, um Benutzern die Zahlung von Gebühren auf Testnet zu ermöglichen. Dieser Faucet sendet kleine Mengen L2 Goerli ETH an Ihre Kontoadresse bei Starknet Goerli, die Sie zur Zahlung der Transaktionsgebühr verwenden können.

#### Trace-API

Wir haben der Starknet-API die Möglichkeit hinzugefügt, die Ausführungsverfolgung einer Transaktion abzurufen. Im Trace der Transaktion sind alle internen Aufrufe sichtbar, begleitet von Informationen wie verbrauchten Ausführungsressourcen, Rückgabewert, ausgegebenen Ereignissen und gesendeten Nachrichten. Dieser neue Aufruf vereinfacht das Verständnis des Verhaltens eines Vertrags oder das Debuggen von Transaktionen. Darüber hinaus könnten Tools wie [Voyager](https://voyager.online/) oder [StarkTx](https://starktx.info/) diese Daten integrieren; Bereitstellung detaillierterer Analysen für die Nutzer, insbesondere zur Kontovertragsinteraktion.

Um den Trace zu erhalten, können Sie „get_transaction_trace“ in der Starknet-CLI verwenden. Ein Beispiel für die Verwendung finden Sie im [Tutorial](https://www.cairo-lang.org/docs/hello_starknet/cli.html?#get-transaction-trace).

#### Nachrichtenstornierung

Eine zusätzliche Funktion dieser Version ist die Möglichkeit, L1→L2-Nachrichten zu löschen. Warum ist das nützlich? Stellen Sie sich ein Szenario vor, in dem ein Benutzer einen Vermögenswert von L1 auf L2 überträgt. Der Ablauf beginnt damit, dass der Benutzer das Asset an eine Starknet-Brücke sendet und die entsprechende L1→L2-Nachricht generiert. Stellen Sie sich nun vor, dass der L2-Nachrichtenverbrauch nicht funktioniert (dies könnte aufgrund eines Fehlers im Kairo-Vertrag der dApps passieren). Dies könnte dazu führen, dass der Benutzer das Sorgerecht für sein Vermögen für immer verliert.

Um dieses Risiko zu mindern, gestatten wir dem Vertrag, der die L1→L2-Nachricht initiiert hat, diese zu stornieren – nachdem wir die entsprechende Absicht erklärt und eine angemessene Zeitspanne abgewartet haben (siehe [-Dokumentation](https://starknet.io/l1-l2-messaging/#cancellation)).

### Leistungsverbesserungen

Diese Version verkürzt die Zeit, die ein Sequenzer benötigt, um einen Strom eingehender Cairo-Transaktionen auszuführen, erheblich.

Dies ist nur der erste Schritt! Unser nächster großer Leistungsmeilenstein, der bald eingeführt wird (0.9.0), ist die parallele Ausführung des Sequenzers, und in der Zukunft werden noch viele weitere Optimierungen erwartet.

### Was jetzt?

Lesen Sie hier die technische Dokumentation [](https://starknet.io/documentation/fee-mechanism/).

Gehen Sie zu [starknet.io](https://starknet.io/), um alle Starknet-Informationen, Dokumentationen, Tutorials und Updates zu erhalten.

Treten Sie [Starknet Discord](https://discord.gg/uJ9HZTUk2Y) bei, um Entwicklerunterstützung, Ökosystem-Ankündigungen zu erhalten und Teil der Community zu werden.

Besuchen Sie [Starknet Shamans](https://community.starknet.io/) , um auf dem Laufenden zu bleiben und an allen Starknet-Forschungsdiskussionen teilzunehmen.