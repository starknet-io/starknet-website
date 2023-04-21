### TL;DR

* Verbesserungen der Abstraktion im Geiste der EIP-4337

1. Validieren — Trennung ausführen
2. Transaktions-Einzigartigkeit ist nun im Protokoll (neonce) gewährleistet

* Der Gebührenmechanismus wird erweitert um folgendes einzuschließen:

1. L1, L2 Nachrichten
2. Transaktionen erklären

* Wenige Änderungen der Kairoer Syntax

### Einführung

Wir freuen uns, StarkNet Alpha 0.10.0 präsentieren zu können. Diese Version ist ein weiterer Schritt in Richtung Skalierung von Ethereum, ohne Kompromisse bei Sicherheit und Dezentralisierung einzugehen.

Dieser Blog-Beitrag beschreibt kurz die wichtigsten Merkmale dieser Version. Die vollständige Liste der Änderungen finden Sie in den[Versionshinweisen](https://github.com/starkware-libs/cairo-lang/releases). Nähere Informationen finden Sie in der[-Dokumentation](https://docs.starknet.io/).

### Änderungen der Kontoauszug

Wir gehen vorwärts mit der Abstraktion des[StarkNet-Kontos](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781). Diese Version führt Änderungen ein, inspiriert von[EIP-4337](https://eips.ethereum.org/EIPS/eip-4337).

#### Separation überprüfen/ausführen

Bisher war die Funktion \_\_execute\_\_ sowohl für die Validierung als auch für die Ausführung der Transaktion verantwortlich. In 0.10.0 brechen wir diese Kopplung und führen eine separate \_\_validate\_\_ Funktion in Konten ein. Nach dem Erhalt einer Transaktion ruft der Konto-Vertrag zunächst \_\_validate\_\_\_, und, falls erfolgreich, mit \_\_execute\_\_.

Die Validierung/Ausführen Trennung stellt eine Unterscheidung auf Protokollebene zwischen ungültigen und rückgängigen (noch gültigen) Transaktionen dar. Damit können Sequenzer Gebühren für die Ausführung einer gültigen Transaktion erheben, unabhängig davon, ob sie rückgängig gemacht wurde oder nicht.

#### Nonce

In Version 0.10.0 wird ein nonce Feld hinzugefügt, um die Eindeutigkeit der Transaktion auf der Protokollebene durchzusetzen. Bislang wurden Noncen auf der Kontovertragsebene behandelt, was bedeutete, dass eine Transaktion mit dem gleichen Hash zweimal theoretisch ausgeführt werden konnte.

Ähnlich wie Ethereum enthält jetzt auch jeder Vertrag eine Nonce, die die Anzahl der ausgeführten Transaktionen von diesem Konto zählt. Kontenverträge akzeptieren nur Transaktionen mit einer übereinstimmenden Nichtzahl, d.h. wenn das aktuelle Nonce des Kontos X ist, dann akzeptiert es nur Transaktionen mit nonce X.

#### Neue Transaktionsversion

Um die Rückwärtskompatibilität zu ermöglichen, werden wir diese beiden Änderungen über eine neue Transaktionsversion einführen —[v1](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C). Diese Änderungen gelten nur für die neue Version, und ältere Konten können weiterhin Versionen 0 Transaktionen ausführen.

Hinweis — Transaktion v0 ist jetzt veraltet und wird in StarkNet Alpha v0.11.0 entfernt. Bitte stellen Sie sicher, dass Sie upgraden, um die neue Transaktionsversion zu verwenden.

Für genauere Informationen über die Transaktionsversion lesen Sie bitte die[-Dokumentation](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C).

#### Gebührenmechanismus

Die neue Version erlaubt es, Gebühren für zwei benötigte Komponenten einzuschließen:

* [L1, L2 Nachricht](https://docs.starknet.io/docs/L1-L2%20Communication/messaging-mechanism#l1--l2-message-fees)
* [Transaktion angeben](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)

Diese Gebühren werden in dieser Version nicht zwingend vorgeschrieben und werden erst ab StarkNet Alpha v0.11.0 erzwungen.

#### Kairo Syntaxänderungen

Für einen schrittweisen Fortschritt hin zu einem Upgrade von Kairo,[Kairo 1.0](https://www.youtube.com/watch?v=Ny4Rv6ztINU)enthält diese Version mehrere Syntaxänderungen.

Um Unannehmlichkeiten zu minimieren, wird die Version ein[Migrationsskript](https://www.youtube.com/watch?v=kXs59zaQrsc)enthalten, das die obigen Änderungen automatisch anwendet. Weitere Details findest du[hier](https://github.com/starkware-libs/cairo-lang/releases).

### Was ist als Nächstes?

* In wenigen Wochen planen wir, die Parallelisierung in den Sequenzer einzuführen und so eine schnellere Blockproduktion zu ermöglichen (V0.10.1)
* Wir werden in Kürze den letzten Teil abschließen, der in der Gebührenzahlung enthalten sein muss – Account-Bereitstellung
* Kairo 1.0 Release! Mehr Informationen zu diesem in einem kommenden Beitrag.

### Wie kann ich mehr engagieren?

* Gehen Sie zu[starknet.io](https://starknet.io/)für alle StarkNet-Informationen, Dokumentationen, Tutorials und Updates.
* Trete[StarkNet Discord](http://starknet.io/discord)bei für Entwicklerunterstützung, Ökosystemankündigungen und werde Teil der Gemeinschaft.
* Besuchen Sie das[StarkNet Forum](http://community.starknet.io/)um auf dem Laufenden zu bleiben und an Diskussionen über StarkNet teilzunehmen.

Wir freuen uns immer über Feedback zu unserer[-Dokumentation](https://docs.starknet.io/)!