### TL;DR

* Wir teilen einen detaillierten Plan für Regenesis, der von umfangreichen Diskussionen mit der StarkNet-Community geprägt wurde. Vielen Dank an Kuba@SWM.
* Regenesis wird die Veröffentlichung von Kairo 1.0 folgen und das System durch einfachere und sicherere StarkNet-Verträge sicherer machen
* Benutzer sollten bereit sein, ihre Wallet während der Übergangsphase zu aktualisieren
* Entwickler werden aufgefordert, ihre Verträge nach Kairo 1.0 zu portieren

### Einführung

StarkNet Alpha schreitet in Richtung Regenesis voran, ein wichtiger Schritt in Richtung Produktion. In diesem Update möchten wir mehr Details über die Hauptmotivation für Regenesis teilen —[Kairo 1.](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)— und zu erklären, was es von Benutzern und Entwicklern verlangt. Nach Regenesis wird StarkNet nur mit Verträgen auf Basis von Cairo 1.0 arbeiten und von einem neuen Genesisblock mit dem bestehenden Staat beginnen.

Was wird Regenesis von Benutzern fordern? Ein einfaches Update ihrer Wallet. Was wird sie von den Erbauern der StarkNet-Dapps verlangen? Portierung ihrer Verträge nach Kairo 1.0, und Einhaltung einer einfachen Upgrade-Richtlinie. Insbesondere wird es keinen Neustart von einem sauberen Zustand geben und wir werden mit der gleichen StarkNet-Instanz bleiben bedeutet, dass es keine Notwendigkeit für eine Migration**gibt.**

Die Regenesis plant, den Stand der Anwendungen vollständig zu erhalten und keine Ausfallzeiten für die Anwendungen zu verursachen. So können Anwendungen, die die von uns bereitgestellten Richtlinien befolgen, sofort auf StarkNet Alpha Mainnet starten, ohne Störungen für ihren Betrieb und ihre Benutzer während des Regenesis-Prozesses. e sind verpflichtet, mit der Gemeinschaft zusammenzuarbeiten und die notwendige Unterstützung zu bieten, um diesen Prozess so reibungslos wie möglich zu gestalten.

Wir gehen in diese Richtung als Ergebnis ausführlicher Diskussionen mit der Gemeinschaft, die einen wichtigen Vorschlag des Software-Mansion-Teams enthielten.

### Warum Reumesis?

#### Kairo 1.0 und Sierra

Die Hauptmotivation für Regenesis besteht darin, die neuen Möglichkeiten von Kairo 1 zu nutzen. — nämlich DOS-Sequenzer Schutz, Zensurwiderstand und Gaszählung, die für StarkNet als dezentralisiertes Netzwerk wesentlich sind.

Kairo 1.0 stellt sicher, dass jede Transaktion nachgewiesen werden kann. Dies erlaubt StarkNet rückgängig gemachte Transaktionen in Blöcken einzubinden und einen Beweis für ihre Ausführung zu generieren. Dieser Mechanismus wird es ermöglichen, Sequenzer bei der Ausführung rückgängiger Transaktionen zu bezahlen, was den DOS-Schutz vor böswilligen Akteuren erhöht. Darüber hinaus unterstützt Kairo 1.0 Gaszählung, die es StarkNet ermöglicht, zu einem intuitiveren Gebührenmarkt überzugehen. Schließlich wird dies es StarkNet ermöglichen, erzwungene Transaktionen von L1 einzuführen und die Zensurwiderstandsfähigkeit des Netzes zu verbessern.

Um diese Vorteile zu nutzen, können Verträge von Kairo v0 und Kairo 1.0 nicht gemischt werden. Falsche Aussagen können nicht als falsch erwiesen werden, und es kann auch nicht passieren, wenn wir Teile von Kairoer v0-Verträgen haben. Zu diesem Zweck müssen wir Kairo v0-Code komplett aus dem StarkNet-Staat, ergo Regenesis, auslaufen.

**Nach Regenesis werden wir ein Starknet-System haben, das vollständig auf Kairo 1.0 basiert.**

#### Vereinfachung des Codes und des Protokolls

StarkNet, während noch in Alpha, bereits viele Veränderungen unterzogen. Jede Version hat bisher das Betriebssystem StarkNet verändert, Blöcke und Transaktionsstrukturen. Dies führte dazu, dass ein Teil des Codes veraltet war. Dennoch müssen vollständige Knoten und Infrastrukturanbieter (wie Indexer und Staatsexperten) sich bewusst sein. und implementieren, alle früheren Verhalten von StarkNet Alpha Versionen, um vertrauenslos mit dem Zustand zu synchronisieren. Ohne Regenesis könnte diese Belastung für Entwickler, die in Erwägung ziehen würden, solche Dienste für StarkNet zu bauen, eine große Abschreckung darstellen.

Daher beabsichtigen wir, die Komplexität des Protokolls zu verringern, bevor wir zur Produktion gehen und als Vorbereitung auf eine dezentralisierte Welt mit vielen Implementierung von Infrastrukturwerkzeugen. Wir würden dies erreichen, indem wir keine zukünftige Infrastruktur benötigen, um StarkNet 0 auszuführen. , und markieren Sie den ersten Block nach der Übergangszeit als den Genesispunkt.

### Wen Regenesis? Die gesamte Zeitleiste

Regenesis wird die Veröffentlichung von Kairo 1.0 folgen, die bis Ende 2022 stattfinden soll. Während des 1. Quartals 2023 wird StarkNet aktualisiert, um Kairo 1 zu unterstützen. , und wir streben an, bis zum Ende des Q1 zu einem vollständig Cairo 1.0 basierten Netzwerk zu migrieren.

**Benutzer und Anwendungen müssen den Übergang während dieses Zeitraums.**

![](/assets/1_ef85shzd2uudwex-cy8wdg-1.png)

### Was muss ich also wissen?

Anwendungsentwickler müssen sich der folgenden Aspekte rund um Regenese bewusst sein:

1. Stellen Sie sicher, dass Ihr Vertrag für das Upgrade bereit ist. Die vollständigen technischen Details des Plans werden im[StarkNet Community Forum](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080) geteilt. Sobald die Details fertig gestellt sind, teilen wir eine kurze Leitlinie.
2. Stellen Sie sicher, dass Sie bereit sind, Ihren Code nach Cairo 1.0 zu portieren. Lesen Sie den nächsten Abschnitt für alle aktuellen Details.

#### Portierung Ihres Vertrags auf Kairo 1.0

Kairo 1.0 ist für StarkNet-Entwickler sehr vielversprechend. Eine Verbesserung der bestehenden Kairo, die sicherer, besser und einfacher beim Schreiben von Verträgen, mit einer verbesserten Syntax, vollwertigen Art System (native uint256 jedem? und mehr. Entwickler werden aufgefordert, ihre bestehenden StarkNet-Verträge auf Kairo 1.0 zu portieren. Da jedoch die Logik und die Code-Struktur unverändert bleiben, dieser Aufwand wird voraussichtlich vernachlässigbar im Vergleich zu den Anstrengungen, die er zur Entwicklung der App unternommen hat.

In diesem Zusammenhang lohnt es sich anzumerken, dass Sie sich für eine erneute Überprüfung der Version 1.0 von Kairo entscheiden können. Wenn Ihre App in der Vergangenheit bereits überprüft wurde, wird der Neu-Audit-Prozess wesentlich billiger und einfacher sein, da die Rechnungsprüfer bereits mit Ihrer Logik vertraut sind.

Wir werden die gesamte Dokumentation rund um Kairo 1.0, zusammen mit Tutorials und Workshops im 4. Quartal 2022 veröffentlichen.

### Ich bin ein StarkNet-Benutzer. Was soll ich tun?

Als Benutzer müssen Sie wahrscheinlich einige Aktionen während der Regenesis durchführen. Zumindest müssen Sie Ihren Kontovertrag aktualisieren. Wenn Sie dies nicht über die (einige Monate lang) Übergangszeit hinweg tun, wird dies zu einem Verlust Ihres Kontos führen. Abhängig von dem von den Entwicklern der StarkNet-Apps gewählten Pfad müssen Sie eventuell zusätzliche Schritte unternehmen.

Wir erinnern alle daran, dass sich StarkNet noch in der Alpha-Phase befindet, und Benutzer müssen auf die Kommunikation von StarkNet und von ihnen genutzten Apps achten. Es liegt in Ihrer Verantwortung, sicherzustellen, dass Sie frühzeitig auf das neue System upgraden. *Early Adopter zu sein ist nicht immer einfach, und wir zählen auf Sie, dass Sie Ihr Teil machen!*

### Zum Beenden

Kairo 1.0 steht kurz vor der Tür, bietet viele aufregende Vorteile und Verbesserungen für StarkNet und seine Entwickler. Um diese zu ernten, wird eine Regenesis-Veranstaltung des Netzwerks benötigt. Glücklicherweise denken wir an ein Design, das diesen Prozess minimal störend macht – komplett nahtlos für Benutzer und ganz einfach für Anwendungen.

Wir bitten Sie dringend, an der[-Community-Diskussion teilzunehmen](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080)und Ihre Kommentare und Bedenken mitzuteilen, sowie über die Schritte, die Sie als Anwendungsentwickler auf StarkNet ergreifen müssen, auf dem Laufenden bleiben.