### TL;DR

* StarkNet Alpha 0.8.0 präsentiert die erste Version des Gebührenmechanismus (optional bis StarkNet Alpha 0.9.0.)
* Neue API-Aufrufe zur Schätzung der Transaktionsgebühr für das Erlangen der Transaktionsspur ermöglichen eine bessere Sichtbarkeit und Fehlersuche
* Leistungsverbesserung des StarkNet-Sequenzers
* L1 + L2 Nachricht stornieren

### Einleitung

Wie in unserer[-Roadmap](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51)geteilt, folgt die neueste Erweiterung der Funktionen und Funktionen von StarkNet, Unsere Aufmerksamkeit verlagert sich auf Leistungssteigerungen und Protokolldesign (einschließlich Gebühren, Abstraktion, Dezentralisierung usw.). StarkNet Alpha 0.8.0 startet den Prozess des Hinzufügens von Transaktionsgebühren und der Verbesserung der Performance des Sequenzers.

Der Fahrplan für StarkNet enthält einen Gebührenmechanismus, und mit dieser Version gehen wir der vollen Leistung der Plattform einen wichtigen Schritt näher.

Das Hinzufügen des Gebührenmechanismus ist ein wesentlicher Bestandteil des Leistungsdesigns von StarkNet. Ohne minimale Gebühr riskieren wir unendliche Transaktionen: Dies würde es unmöglich machen, dass das System unabhängig von Sequenzer-Optimierungen leistungsfähig ist.

### Eigenschaften

#### Gebührenunterstützung

StarkNet Alpha unterstützt nun die erste Version des Gebührenmechanismus. Dieser Mechanismus ist bereits in diesem frühen Stadium und sogar im Testnet aus zwei Hauptgründen von entscheidender Bedeutung:

1. Es ermöglicht Entwicklern die Optimierung ihrer Verträge nach dem Kostenmodell von StarkNet.
2. Es ist ein entscheidendes Gegenstück zur Verbesserung der Leistung des Systems, da es Spamming durch das Senden unzähliger Transaktionen verhindert.

Diese Version führt die Komponenten ein, die für Entwickler notwendig sind, um Gebührenzahlungen in ihre Tools und Anwendungen einzubinden. Entwickler können nun die Transaktionsgebühr abschätzen, indem sie den Endpunkt \`schätzen_fee\` aufrufen und die Gebühr als Teil der Transaktionsausführung bezahlen.

Da diese Funktion nicht abwärtskompatibel ist, werden wir die Gebührenzahlung an diesem Punkt nicht erzwingen, sondern nur ab Version 0. .0, das in ein paar Wochen freigegeben wird. Dieser schrittweise Übergang wird es Benutzern und Entwicklern ermöglichen, sich an das neue Modell anzupassen.

#### Gebührenstruktur auf 0.8.0

Bei 0.8.0 werden die Gebühren allein nach der Rechenkomplexität erhoben, während StarkWare die Kommunikationskosten für L1 subventioniert. Wir werden den Gebührenmechanismus in den nächsten Wochen aktualisieren, um diese L1-Operations- und Kommunikationskosten einzubeziehen. Die Zahlung wird atomar mit der Transaktion auf StarkNet L2 abgeholt. Eine ausführliche Beschreibung finden Sie in der[Gebührendokument](https://starknet.io/documentation/fee-mechanism/).

Es ist wichtig zu beachten, dass wir eng mit der Entwicklergemeinschaft zusammenarbeiten werden, um den Gebührenmechanismus im Zuge der Entwicklung von StarkNet zu optimieren und zu entwickeln.

#### L2 Goerli ETH Faucet

Wir haben das[L2 Goerli ETH Faucet](https://faucet.goerli.starknet.io/)gestartet, um es Benutzern zu ermöglichen, Gebühren auf Testnet zu bezahlen. Dieses Faucet sendet kleine Beträge von L2 Goerli ETH an Ihre Konto-Adresse auf StarkNet Goerli, die Sie zur Zahlung der Transaktionsgebühr verwenden können.

#### Trace API

Wir haben die Möglichkeit hinzugefügt, die Ausführungsverfolgung einer Transaktion in StarkNet's API abzurufen. Innerhalb der Spur der Transaktion sind alle internen Aufrufe sichtbar, begleitet von Informationen wie verbrauchten Ausführungsressourcen, Rückgabewert, abgestrahlten Ereignissen und gesendeten Nachrichten. Dieser neue Aufruf vereinfacht das Verständnis von Vertragsverhalten oder Debugging-Transaktionen. Zusätzlich könnten Werkzeuge wie[Voyager](https://voyager.online/)oder[StarkTx](https://starktx.info/)diese Daten integrieren; Bereitstellung einer detaillierteren Analyse, insbesondere für die Konto-Vertragsinteraktion.

Um die Spur zu erhalten, können Sie \`get_transaction_trace\` in StarkNet's CLI verwenden. Um ein Beispiel für die Verwendung zu sehen, schauen Sie in der[-Anleitung](https://www.cairo-lang.org/docs/hello_starknet/cli.html?#get-transaction-trace) nach.

#### Nachricht stornieren

Ein zusätzliches Feature dieser Version ist die Möglichkeit L1 L2-Nachrichten zu stornieren. Warum ist das nützlich? Stellen Sie sich ein Szenario vor, bei dem ein Benutzer ein Asset von L1 auf L2 überträgt. Der Fluss beginnt damit, dass der Benutzer das Asset an eine StarkNet-Brücke und die entsprechende L1-L2-Nachrichtenerzeugung sendet. Stellen Sie sich nun vor, dass der L2-Nachrichtenverbrauch nicht funktioniert (dies könnte aufgrund eines Fehlers im dApps-Vertrag von Kairo passieren). Dies könnte dazu führen, dass der Nutzer seine Verwahrung über sein Vermögen für immer verliert.

Um dieses Risiko abzumildern, wir erlauben dem Vertrag, der die Nachricht L1 L2 initiiert hat, ihn zu kündigen – nachdem wir die Absicht erklärt haben, dies zu tun und eine angemessene Zeit zu warten (siehe die Dokumentation[](https://starknet.io/l1-l2-messaging/#cancellation)).

### Leistungsverbesserungen

Diese Version verkürzt die Zeit, die ein Sequenzer benötigt, um einen Stream eingehender Kairoer Transaktionen auszuführen.

Dies ist nur der erste Schritt! Unser nächster wichtiger Performance-Meilenstein, der bald eingeführt wird (0.9.0), ist die parallele Ausführung des Sequenzers, und es werden noch viele weitere Optimierungen erwartet.

### Was jetzt?

Lesen Sie die technische Dokumentation[hier](https://starknet.io/documentation/fee-mechanism/).

Gehen Sie zu[starknet.io](https://starknet.io/), für alle StarkNet-Informationen, Dokumentationen, Tutorials und Updates.

Trete[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)bei für Entwicklerunterstützung, Ökosystemankündigungen und werde Teil der Gemeinschaft.

Besuche[StarkNet-Schamanen](https://community.starknet.io/)um auf dem Laufenden zu bleiben und an allen StarkNet-Forschungsdiskussionen teilzunehmen.