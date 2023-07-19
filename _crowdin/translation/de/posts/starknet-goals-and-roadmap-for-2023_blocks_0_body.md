Dieser Beitrag befasst sich mit der Roadmap von Starknet für 2023 und erläutert die Überlegungen, die ihr zugrunde liegen. Die Roadmap konzentriert sich auf Leistung und UX.\
Wir möchten der Community die nötige Transparenz bieten und teilen die Roadmap daher so früh wie möglich mit. Natürlich bedeutet die frühzeitige Veröffentlichung der Roadmap auch, dass sich Dinge ändern können.

Wir möchten der Entwicklergemeinschaft von Starknet und insbesondere dem[Builders Council](https://community.starknet.io/t/starknet-builders-council-mission-statement/4045)unseren Dank für die unschätzbaren Einblicke und Rückmeldungen bei der Definition dieser Roadmap aussprechen. Besonderer Dank geht an Sylve von briq, Federico von LambdaClass und Jorik von Nethermind für ihr wertvolles Feedback. Wir laden die Community ein, weiterhin Teil dieses wichtigen Prozesses zu sein.

## Die Starknet-Reise

Starknet wurde entwickelt, um Entwicklern die Nutzung der Leistungsfähigkeit von STARKs und Cairo für die Entwicklung ihrer App zu ermöglichen. Bisher konzentrierte sich die Entwicklung von Starknet darauf, Entwicklern zukunftssichere*Funktionalität zur Verfügung zu stellen.*Die Funktionalität von Starknet, unterstützt durch Cairo 1.0, ist bis auf Regenesis inzwischen größtenteils vollständig.

## Regenese

Starknet wird dieses Jahr Regenesis durchlaufen. Dies wird ein nahtloser Vorgang für das Netzwerk sein, da es**mal**Ausfallzeit und**mal**Zurücksetzen des Netzwerkstatus zur Folge hat.

**Für neue Cairo 1.0-Verträge sind keinerlei Maßnahmen erforderlich – für sie ist Regenesis kein Ereignis.**\
Cairo 0-Verträge müssen den Übergang zu Cairo 1.0 abschließen. Die Regenese, bei der Cairo 0 geschlossen wird, wird erst dann stattfinden, wenn wir sichergestellt haben, dass der Löwenanteil der Community diesen Übergang abschließen konnte.\
Die Regenesis wird die letzte geplante bahnbrechende Änderung auf der Roadmap von Starknet sein, und wir gehen davon aus, dass alle zukünftigen bahnbrechenden Änderungen durch Governance-Entscheidungen überprüft werden, wie dies bei Ethereum der Fall ist.

Oder um Regenesis anhand von Cairo 1.0 selbst zu erklären:

![](/assets/regenesis-image-.webp)

## Roadmap für 2023

Der aktuelle Entwicklungsschwerpunkt von Starknet liegt auf*Performance und UX*. Hier ist ein geschätzter Zeitplan:

![](/assets/roadmap-timeline-2023-image-.webp)

#### Leistung

Unser Hauptziel für die kommenden Monate ist die Verbesserung der Netzwerkleistung, um den erwarteten Anstieg der Anzahl von Benutzern und Entwicklern zu unterstützen. Aus unserer Sicht wird Leistung natürlich durch Durchsatz und Latenz, aber auch durch Transaktionskosten definiert.\
Wir listen hier die Schwerpunktbereiche nach ihrer Priorität auf und geben (wenn möglich) die geplante Version für ihre Veröffentlichung an.

#### Durchsatz & Latenz

Das kommende Starknet v0.12.0 wird erhebliche Durchsatz- und Latenzverbesserungen beinhalten. Dies ist das Ergebnis der in den letzten sechs Monaten durchgeführten Arbeiten zur Rustifizierung des Starknet-Stacks. Diese Version umfasst den Übergang zu einem Rust-basierten Sequenzer (entwickelt von StarkWare) und die neue Rust-Cairo VM ([cairo-rs](https://github.com/lambdaclass/cairo-rs), entwickelt von LambdaClass) – zwei Open-Source-Projekte. Wir gehen davon aus, dass es bald Leistungsbenchmarks geben wird.

Dieser Übergang wird die Blockausführungszeit drastisch verkürzen und somit den Durchsatz erhöhen. Wenn keine Überlastung auftritt, erwarten wir auch Verbesserungen bei der Transaktionslatenz, da die Hauptursache für die Latenz die Blockausführungszeit ist.

Höherer Durchsatz und geringere Latenz werden auch nach Version 0.12.0 weiterhin oberste Priorität haben, und die Arbeit an deren Verbesserung wird zu einer tragenden Säule der Starknet-Entwicklung werden.

#### Transaktionsgebühr

In v0.13.0 werden die Transaktionskosten von Starknet drastisch reduziert. Dies wird erreicht, indem man sich auf die Hauptkomponente der Transaktionskosten konzentriert: die L1-Datenkosten (Ethereum), die heute 95 % der Tx-Kosten ausmachen. Volition wird es Entwicklern ermöglichen, Starknet-Anwendungen mit einem hybriden Data Availability (DA)-Modus zu erstellen: sowohl On-Chain- als auch Off-Chain-Daten. In Kürze wird ein Beitrag zu Volition veröffentlicht, der ausführliche Informationen zum Design und zu den Entwicklerschnittstellen enthält.

Ethereums[EIP-4844](https://eips.ethereum.org/EIPS/eip-4844)(Shard Blob Transaction) wird im vierten Quartal 2023 erwartet. Starknet wird sich so schnell wie möglich anpassen, um zusätzlich zur Einführung von Volition davon zu profitieren.

Wir erwarten eine drastische Reduzierung der Datenkosten dank EIP-4844 von Ethereum und Volition von Starknet (Datenverfügbarkeit außerhalb der Kette).

## Schnellere Endgültigkeit

Während wir uns der Veröffentlichung von Starknet v0.14.0 und v0.15.0 nähern, sind wir weiterhin bestrebt, den Benutzern von Starknet ein nahtloses und vorhersehbares Erlebnis im Netzwerk zu bieten, unabhängig vom Grad der Überlastung. Um dies zu erreichen, priorisieren wir zwei Schlüsselbereiche der Entwicklung: den Gebührenmarkt und die Blockintervalle.

#### Gebührenmarkt

Die geplanten Leistungsverbesserungen werden für Entwickler und Benutzer sichtbar sein, solange das Netzwerk nicht überlastet ist. Wenn es jedoch zu einer Überlastung des Netzwerks kommt, führt dies zu längeren Wartezeiten für alle. Um dieses Problem zu lösen, wird in Version 0.14.0 ein Gebührenmarkt für Starknet eingeführt, um eine effiziente Zuteilung der begrenzten Ressourcen von Starknet zu ermöglichen, basierend auf der Zahlungsbereitschaft der Benutzer für eine Transaktion und nicht nur auf deren Platz in der Schlange.

#### Kürzere & feste Blockintervalle

In v0.15.0 wird Starknet auf konstante und kürzere Blockintervalle umstellen. Derzeit wird jeder Block durch einen eigenen Beweis bewiesen und die Blockintervalle sind variabel – die Erhaltungsmenge sind die Blockkosten. Um diese festen Blockkosten zu erreichen, wartet das Netzwerk darauf, dass sich genügend Transaktionen ansammeln, was zu variablen Blockintervallen führt. Um dieses Problem zu lösen, planen wir, die 1:1-Beziehung zwischen einem Starknet-Block und seinem Beweis zu entkoppeln. Ab v0.15.0 wird ein Beweis die Integrität eines oder mehrerer Starknet-Blöcke bescheinigen. Dadurch wird das Blockintervall korrigiert und die Benutzeroberfläche von Starknet verbessert.

## Kompromisse & Überlegungen

Welche Kompromisse haben wir bei der Festlegung dieser Roadmap berücksichtigt?

Leistung hat höchste Priorität – das ist auch das laute und klare Feedback, das wir von unserem Ökosystem erhalten haben. Dies wird vor allem durch die Erhöhung des Durchsatzes des Sequenzers ab Version 0.12.0 verbessert.

In Version 0.13.0 mussten wir uns zwischen niedrigeren Transaktionskosten und besserer UX (kürzere/feste Blockintervalle und vorhersehbarere Netzwerkreaktion bei Überlastung) entscheiden. Wir haben uns entschieden, uns auf niedrigere Transaktionskosten und nicht auf UX zu konzentrieren, weil wir das erwarten v0.12.0 führt zu einer viel besseren Latenz (in der Größenordnung von Sekunden). Wie oben erwähnt, wird der wichtigste Hebel zur Reduzierung der Transaktionskosten die Einführung von Volition und – sobald weitere Details bekannt werden – EIP-4844 sein.\
Wir würden eine Abweichung von diesem Plan in Betracht ziehen, wenn sich die Latenz nach v0.12.0 nicht ausreichend verbessert.

Die Verbesserung des Netzwerkverhaltens bei Überlastung (durch Einführung eines Gebührenmarktes) wird wahrscheinlich auf Version 0.14.0 warten. Obwohl es nach Version 0.12.0 durchaus zu einer Überlastung kommen kann, gehen wir davon aus, dass die erheblichen Durchsatzverbesserungen die Wahrscheinlichkeit verringern werden. Aus diesem Grund haben wir uns entschieden, niedrigeren Transaktionskosten eine höhere Priorität einzuräumen.

## Zusammenfassung

Die Veröffentlichung von Cairo 1.0 markiert die Stabilisierung der Funktionsentwicklung von Starknet. Der Rest des Jahres 2023 wird der Verbesserung der Leistung von Starknet & UX gewidmet sein. Wir gehen davon aus, dass die Basisschicht des Netzwerks bis Ende dieses Jahres einen gesunden und stabilen Zustand in Bezug auf Funktionalität, Leistung und UX erreicht hat. Wir gehen davon aus, dass das Tempo großer Veränderungen stark zurückgehen wird und natürlich von allen Netzwerkteilnehmern gesteuert wird. Im Jahr 2024 wird die Dezentralisierung zum Schwerpunkt des Netzwerks, sowohl in seinem Betrieb als auch in seiner Entscheidungsfindung.

Wir sind zuversichtlich, dass die Kombination aus zukunftssicherer Funktionalität und verbesserter erstklassiger Leistung & UX weiterhin einen Zustrom von Entwicklern und Anwendungen zu Starknet antreiben wird.

aktualisiert: April 2023