### TL;DR

Starknet Alpha 1 verfügt über zwei neue Funktionen:

* L1<>L2-Interaktion
* On-Chain-Daten

### Einführung

Anfang des Jahres gaben wir bekannt, dass StarkWare [Starknet](https://starkware.co/product/starknet/)aufbaut, ein erlaubnisloses dezentrales STARK-basiertes ZK-Rollup¹, das als L2-Netzwerk über Ethereum betrieben wird. Starknet ermöglicht es jeder dApp, eine unbegrenzte Skalierung ihrer Berechnungen zu erreichen – ohne die Zusammensetzbarkeit und Sicherheit von Ethereum zu beeinträchtigen.

Letzten Monat wurde [Starknet Alpha 0](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95) der Welt vorgestellt. Zum ersten Mal sind Entwickler in der Lage,</a>

Smart Contract zu schreiben und ihn ohne Erlaubnis in einem ZK-Rollup bereitzustellen. Benutzer können Transaktionen im Ethereum-Stil an das Netzwerk senden.</p> 

Heute veröffentlichen wir eine neue Version; Alpha 1. Wir veröffentlichen Funktionen fortlaufend, damit Entwickler so schnell wie möglich mit neuen Funktionen interagieren können. Wir gehen davon aus, dass dadurch der Feedback-Zyklus verkürzt wird und Community-Feedback ermöglicht wird, um Starknet schnell zu verbessern.



### Alpha 1-Funktionen



#### L1<>L2-Interaktion

Alpha 1 umfasst ein L1<>L2-Messaging-Protokoll, das es Entwicklern ermöglicht, nahtlose Transaktionsflüsse zwischen L1 und L2 zu implementieren. Entwickler können jetzt Nachrichten von Verträgen auf L1 an Verträge auf L2 und umgekehrt senden.

Eine der Schönheiten von ZK-Rollups besteht darin, dass Zustandsaktualisierungen ohne Verzögerung endgültig sind. Dies bedeutet, dass Nachrichten, die von L2 an L1 gesendet wurden, sofort an ihren Zielvertrag weitergeleitet werden können. Dies eröffnet die Möglichkeit, Apps zu erstellen, die zwischen den Ebenen wirklich interoperabel sind.

Lust es auszuprobieren? Der beste Einstieg ist, dem Tutorial [hier](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html)zu folgen.

Unser L1<>L2-Protokoll verdankt viel anderen L2s (insbesondere Optimism und Arbitrum), deren frühere Arbeit in diesem Bereich unser Design beeinflusst hat.



#### Datenverfügbarkeit in der Kette

Das Status-Update von Starknet wird nun auch als On-Chain-Daten auf Ethereum veröffentlicht. Dadurch kann jeder Benutzer den Starknet-Status vollständig aus L1-Daten erstellen. Jede Statusaktualisierung enthält den Statusunterschied, dh, welcher Speicher geändert wurde und sein neuer Wert.

Auch hier zeigt ZK-Rollup seine Stärke. Im Gegensatz zu Optimistic Rollups, bei denen die vollständigen Transaktionsdaten in der Kette gesendet werden müssen, werden bei ZK-Rollups nur die absoluten Mindestdaten, die zur Ableitung des Statusunterschieds erforderlich sind, in der Kette gesendet.

Betrachten Sie ein Paradebeispiel: Preisorakel. Eine Transaktion zur Aktualisierung eines Preisorakels enthält normalerweise mehrere Transaktionen, aktualisiert aber nur eine Speicherzelle; der Preis des Paares. Die On-Chain-Daten, die für eine Zustandsaktualisierung mit Preis-Oracle-Transaktionen in einem Optimistic Rollup erforderlich sind, wachsen linear mit der Anzahl der Aktualisierungen, während es sich in einem ZK-Rollup immer um eine einzelne Speicheraktualisierung handelt.

Darüber hinaus können Komprimierungsalgorithmen auf die veröffentlichten Daten angewendet werden, deren Gültigkeit durch den STARK-Beweis bestätigt wird, wodurch der Fußabdruck in der Kette weiter reduziert wird. Zukünftige Versionen von Starknet werden in diesem Bereich innovative Optimierungen einführen.



#### Starknet-Betriebssystem

Wir veröffentlichen auch den Starknet-Betriebssystemcode. Das Starknet-Betriebssystem ist das Kairo-Programm, das Starknet ausführt. Das Betriebssystem verwaltet alles, was im Netzwerk geschieht – Vertragsbereitstellung, Transaktionsausführung, L1<>L2-Nachrichten und mehr. Die Architektur und das Design des Starknet-Betriebssystems werden in einem separaten Beitrag ausführlich erläutert.



#### Zusatzfunktionen

Starknet Alpha hat sich nicht nur weiterentwickelt, wir verbessern Cairo auch ständig. Eine vollständige Beschreibung der neuen Funktionen in Cairo v0.3.0 finden Sie in den Versionshinweisen [hier](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.3.0).



### Das Ökosystem wächst

Abgesehen von der ständigen Arbeit an Starknet Core wird die Arbeit des Ökosystems an Starknet kontinuierlich erweitert. Wir freuen uns sehr, mit einigen der talentiertesten Teams aus dem Ökosystem zusammenzuarbeiten.

Fermion, Starknets erstes Full-Node-Projekt, wird vom Erigon-Team (ehemals TurboGeth) entwickelt. Basierend auf ihrem enormen Wissen, das sie bei der Arbeit an Ethereum gewonnen haben, sind wir in der Lage, mit ihnen zusammenzuarbeiten, um einen leistungsstarken Full Node zu bauen, der viele Erkenntnisse aus der Entwicklung für Ethereum einbezieht und gleichzeitig von der Skalierung profitiert, die STARK-Proofs bieten.

Nethermind arbeitet an Warp, einem Compiler von EVM nach Cairo. Getreu unserer Kultur, neue Tools erst zu präsentieren, wenn sie fertig sind, können wir nur sagen: Erwarten Sie bald spannende Neuigkeiten auf diesem Gebiet! Wir können jedoch sagen, dass sie sich mit Warpgeschwindigkeit bewegen.



### Was die Zukunft bringt

Die nächste Station auf unserem Weg zu Starknet wird die Zusammensetzbarkeit sein – die Interaktion von Verträgen untereinander. Bleiben Sie dran.

[StarkWare](https://starkware.co/)

1 Wie bereits erwähnt, ist ZK-Rollup mittlerweile ein gebräuchlicher, aber dennoch sehr irreführender Begriff: Diese Lösungen bieten (derzeit) kein Zero-Knowledge.

Update (November 2021): Starknet Alpha ist live im Ethereum Mainnet