### TL;DR

StarkNet Alpha 1 hat zwei neue Features:

* L1<>L2-Interaktion
* On-Kettendaten

### Einführung

Anfang des Jahres haben wir angekündigt, dass StarkWare[StarkNet](https://starkware.co/product/starknet/)baut , ein permissionless dezentralisiertes STARK-basiertes ZK-Rollup1, das als L2-Netzwerk über Ethereum arbeitet. StarkNet ermöglicht es jeder dApp, eine unbegrenzte Skala für seine Berechnung zu erreichen — ohne Ethereums Verbundbarkeit und Sicherheit zu beeinträchtigen.

Letzten Monat wurde[StarkNet Alpha 0](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)in die Welt veröffentlicht. For the first time, developers are able to [write](https://kobi.one/2021/07/14/stardrop.html) any smart contract and deploy it, permissionlessly, to a ZK-Rollup. Benutzer können Transaktionen ins Netzwerk versenden, Ethereum-Stil.

Heute gibt es eine neue Version, Alpha 1. Wir veröffentlichen Funktionen auf einer rollenden Basis, um Entwicklern die Möglichkeit zu geben, so bald wie möglich mit neuen Funktionen zu interagieren. Wir gehen davon aus, dass dies den Feedback-Zyklus verkürzen und Community-Feedback ermöglichen wird, StarkNet schnell zu verbessern.

### **Alpha 1 Funktionen**

#### L1<>L2-Interaktion

Alpha 1 enthält ein L1<>L2-Messaging-Protokoll, das es Entwicklern erlaubt, nahtlose Transaktionsströme zwischen L1 und L2 zu implementieren. Entwickler können nun Nachrichten von Verträgen auf L1 an Verträge auf L2 und umgekehrt senden.

Eine der Schönheiten von ZK-Rollups ist, dass Zustandsaktualisierungen ohne Verzögerung endgültig sind. Das bedeutet, dass Nachrichten, die von L2 an L1 gesendet wurden, sofort an ihren Bestimmungsvertrag weitergeleitet werden können. Dies öffnet den Weg zur Erstellung von Apps, die wirklich interoperabel zwischen den Ebenen sind.

Sind Sie daran interessiert, es auszuprobieren? Der beste Weg, um loszulegen, ist dem Tutorial[hier](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html) zu folgen.

Unser L1<>L2-Protokoll verdankt viel anderen L2s (insbesondere Optimismus und Arbitrum), deren bisherige Arbeit in diesem Bereich unser Design beeinflusst hat.

#### On-Chain Datenverfügbarkeit

Das Status-Update von StarkNet wird nun auch als on-chain Daten auf Ethereum veröffentlicht. Dies erlaubt jedem Benutzer, den Status von StarkNet vollständig aus L1-Daten zu erstellen. Jede Status-Aktualisierung enthält den Status Diff, also den geänderten Speicher und seinen neuen Wert.

Auch hier zeigt ZK-Rollup seine Stärke. Im Gegensatz zu optimistischen Rollups, bei denen die Daten der gesamten Transaktionen auf die Kette geschickt werden müssen, in ZK-Rollups werden nur die absoluten Mindestdaten für den Abzug des Zustandsdiffs auf die Kette gesendet.

Nehmen wir ein Paradebeispiel: Preisorakel. Eine Transaktion zur Aktualisierung eines Preisorakels enthält in der Regel mehrere Transaktionen, aktualisiert aber nur eine Speicherzelle, den Preis des Paars. Die On-Kettendaten, die für eine Statusaktualisierung mit Preisorakeltransaktionen in einem optimistischen Rollup benötigt werden, wachsen mit der Anzahl der Updates linear an. während in einem ZK-Rollup wird es immer ein einziges Speicher-Update sein.

Außerdem können Kompressionsalgorithmen auf die veröffentlichten Daten angewendet werden und ihre Gültigkeit wird durch den STARK-Nachweis bestätigt, wodurch der on-chain-Fußabdruck weiter verringert wird. Zukünftige Versionen von StarkNet werden innovative Optimierungen in diesem Bereich einführen.

#### StarkNet OS

Wir veröffentlichen auch den StarkNet Operating System Code. Das StarkNet OS ist das Kairoer Programm, das StarkNet ausführt. Das Betriebssystem verarbeitet alles, was im Netzwerk geschieht – Vertragsbereitstellung, Transaktionsausführung, L1<>L2-Nachrichten und mehr. Die StarkNet OS-Architektur und -Design werden in einem separaten Beitrag ausführlich erläutert.

#### Zusätzliche Funktionen

StarkNet Alpha hat sich nicht nur weiterentwickelt, wir verbessern auch ständig Kairo. Eine vollständige Beschreibung der neuen Funktionen in Kairo v0.3.0 finden Sie in den Versionshinweisen[hier](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.3.0).

### Das Ökosystem wächst

Neben der kontinuierlichen Arbeit am StarkNet Core wächst auch die Arbeit des Ökosystems an StarkNet ständig. Wir freuen uns über die Zusammenarbeit mit einigen der talentiertesten Teams des Ökosystems.

Fermion, StarkNet’s erster Full Node Aufwand, wurde vom Erigon (ehemals TurboGeth) Team entwickelt. Basierend auf ihrem enormen Wissen, das sie aus der Arbeit an Ethereum gewonnen haben, können wir mit ihnen zusammenarbeiten, um einen mächtigen Full Node aufzubauen, die viele Lektionen beinhaltet, die während des Gebäudes für Ethereum gelernt wurden, während sie von der Skala der STARK-Proofs profitieren.

Nichtsdestotrotz arbeiten wir an Warp, einem Compiler von EVM nach Kairo. Gebunden durch unsere Kultur der Präsentation neuer Werkzeuge nur dann, wenn sie bereit sind, alles, was wir sagen können, ist, erwarten Sie spannende Neuigkeiten an dieser Front sehr bald! Wir können jedoch sagen, dass sie sich mit Warpgeschwindigkeit bewegen.

### Was die Zukunft hält

Der nächste Stopp auf unserem Weg nach StarkNet wird die Verbundbarkeit sein — so dass Verträge miteinander interagieren können. Bleiben Sie dran.

[StarkWare](https://starkware.co/)

1 Wie wir bereits gesagt haben, ist ZK-Rollup inzwischen ein gängiger Begriff, aber sehr irreführend: Diese Lösungen bieten (aktuell) kein Nullwissen.

**Update (Nov. 2021):**StarkNet Alpha ist live auf Ethereum Mainnet