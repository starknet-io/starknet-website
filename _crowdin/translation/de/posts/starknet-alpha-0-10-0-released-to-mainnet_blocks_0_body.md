### TL;DR

* Verbesserungen der Kontoabstraktion im Sinne von EIP-4337

1. Validieren – Trennung ausführen
2. Die Eindeutigkeit der Transaktion ist jetzt im Protokoll gewährleistet (Nonce)

* Der Gebührenmechanismus wird um Folgendes erweitert:

1. L1→L2-Nachrichten
2. Transaktionen deklarieren

* Wenige Änderungen an der Kairo-Syntax

### Einführung

Wir freuen uns, Starknet Alpha 0.10.0 vorstellen zu können. Diese Version ist ein weiterer Schritt zur Skalierung von Ethereum, ohne Kompromisse bei Sicherheit und Dezentralisierung einzugehen.

In diesem Blogbeitrag werden kurz die Hauptfunktionen dieser Version beschrieben. Die vollständige Liste der Änderungen finden Sie in den[Versionshinweisen](https://github.com/starkware-libs/cairo-lang/releases). Ausführlichere Informationen finden Sie in der[Dokumentation](https://docs.starknet.io/).

### Änderungen an der Kontoabstraktion

Wir machen mit[Starknets Kontoabstraktion](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781)weiter. Diese Version führt Änderungen ein, die von[EIP-4337](https://eips.ethereum.org/EIPS/eip-4337)inspiriert sind.

#### Trennung validieren/ausführen

Bisher war die Funktion \_\_execute\_\_ des Kontos sowohl für die Transaktionsvalidierung als auch für die Ausführung verantwortlich. In 0.10.0 lösen wir diese Kopplung und führen eine separate \_\_validate\_\_-Funktion in Konten ein. Beim Empfang einer Transaktion ruft der Kontovertrag zunächst \_\_validate\_\_ auf und fährt dann bei Erfolg mit \_\_execute\_\_ fort.

Die Validierungs-/Ausführungstrennung bietet eine Unterscheidung auf Protokollebene zwischen ungültigen und rückgängig gemachten (noch gültigen) Transaktionen. Dadurch können Sequenzierer Gebühren für die Ausführung einer gültigen Transaktion erheben, unabhängig davon, ob diese rückgängig gemacht wurde oder nicht.

#### Nonce

In Version 0.10.0 wurde ein Nonce-Feld hinzugefügt, um die Eindeutigkeit der Transaktion auf Protokollebene zu erzwingen. Bisher wurden Nonces auf Kontovertragsebene gehandhabt, was bedeutete, dass eine Transaktion mit demselben Hash theoretisch zweimal ausgeführt werden konnte.

Ähnlich wie bei Ethereum enthält nun jeder Vertrag eine Nonce, die die Anzahl der von diesem Konto ausgeführten Transaktionen zählt. Kontoverträge akzeptieren nur Transaktionen mit einer passenden Nonce. Das heißt, wenn die aktuelle Nonce des Kontos X ist, werden nur Transaktionen mit der Nonce X akzeptiert.

#### Neue Transaktionsversion

Um die Abwärtskompatibilität zu gewährleisten, werden wir diese beiden Änderungen über eine neue Transaktionsversion einführen –[v1](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C). Diese Änderungen gelten nur für die neue Version und ältere Konten können weiterhin Transaktionen der Version 0 ausführen.

Hinweis – Transaktion v0 ist jetzt veraltet und wird in Starknet Alpha v0.11.0 entfernt. Bitte stellen Sie sicher, dass Sie ein Upgrade durchführen, um die neue Transaktionsversion zu verwenden.

Für detailliertere Informationen zur Transaktionsversion lesen Sie bitte die[Dokumentation](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C).

#### Gebührenmechanismus

Die neue Version ermöglicht die Aufnahme von Gebühren für zwei erforderliche Komponenten:

* [L1→L2-Nachricht](https://docs.starknet.io/docs/L1-L2%20Communication/messaging-mechanism#l1--l2-message-fees)
* [Transaktion deklarieren](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)

Diese Gebühren sind in dieser Version nicht obligatorisch und werden erst ab Starknet Alpha v0.11.0 erhoben.

#### Änderungen der Kairo-Syntax

Um schrittweise Fortschritte bei der Aktualisierung von Cairo,[Cairo 1.0](https://www.youtube.com/watch?v=Ny4Rv6ztINU), zu erzielen, enthält diese Version mehrere Syntaxänderungen.

Um Unannehmlichkeiten zu minimieren, enthält die Versionsveröffentlichung ein[-Migrationsskript](https://www.youtube.com/watch?v=kXs59zaQrsc), das die oben genannten Änderungen automatisch anwendet. Weitere Details[finden Sie hier](https://github.com/starkware-libs/cairo-lang/releases).

### Was kommt als nächstes?

* In ein paar Wochen planen wir, die Parallelisierung in den Sequenzer einzuführen, um eine schnellere Blockproduktion zu ermöglichen (V0.10.1).
* Wir werden in Kürze den letzten Teil abschließen, der in der Gebührenzahlung enthalten sein muss – die Kontobereitstellung
* Veröffentlichung von Cairo 1.0! Weitere Informationen dazu in einem kommenden Beitrag.

### Wie kann ich engagierter sein?

* Gehen Sie zu[starknet.io](https://starknet.io/)für alle Starknet-Informationen, Dokumentationen, Tutorials und Updates.
* Treten Sie[Starknet Discord](http://starknet.io/discord)bei, um Entwicklerunterstützung, Ökosystem-Ankündigungen zu erhalten und Teil der Community zu werden.
* Besuchen Sie das[Starknet-Forum](http://community.starknet.io/), um auf dem Laufenden zu bleiben und an Starknet-Forschungsdiskussionen teilzunehmen.

Wir freuen uns immer über Feedback zu unserer[Dokumentation](https://docs.starknet.io/)!