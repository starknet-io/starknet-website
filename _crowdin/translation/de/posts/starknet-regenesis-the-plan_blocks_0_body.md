### TL;DR

* Wir teilen einen detaillierten Plan für Regenesis, der durch umfangreiche Diskussionen mit der Starknet-Community gestaltet wurde. Besonderer Dank geht an Kuba@SWM.
* Nach der Veröffentlichung von Cairo 1.0 wird Regenesis das System sicherer machen, indem es einfachere und sicherere Starknet-Verträge ermöglicht
* Benutzer sollten bereit sein, ihr Wallet während der Übergangsphase zu aktualisieren
* Entwickler müssen ihre Verträge auf Cairo 1.0 portieren

### Einführung

Starknet Alpha schreitet in Richtung Regenesis voran, einem wichtigen Schritt in Richtung Produktion. In diesem Update möchten wir mehr Details über die Hauptmotivation für Regenesis –[Cairo 1.0](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)– mitteilen und erklären, was es von Benutzern und Entwicklern erfordert. Nach Regenesis wird Starknet nur noch mit auf Kairo 1.0 basierenden Verträgen funktionieren und mit einem neuen Genesis-Block mit dem bestehenden Zustand beginnen.

Was wird Regenesis von den Benutzern verlangen? Ein einfaches Update ihrer Brieftasche. Was wird von den Erbauern der Starknet-Dapps verlangt? Portierung ihrer Verträge auf Cairo 1.0 und Befolgen einer einfachen Upgrade-Richtlinie. Insbesondere erfolgt kein Neustart aus einem sauberen Zustand und wir bleiben bei der gleichen Starknet-Instanz, was bedeutet, dass keine Migration erforderlich ist**.**

Der Regenesis-Plan besteht darin, den Status der Anwendungen vollständig beizubehalten und keine Ausfallzeiten für die Anwendungen zu verursachen. Daher können Anwendungen, die den von uns bereitgestellten Richtlinien folgen, sofort auf dem Starknet Alpha Mainnet gestartet werden, ohne dass ihr Betrieb und ihre Benutzer während des Regenesis-Prozesses gestört werden. Wir sind bestrebt, mit der Community zusammenzuarbeiten und die erforderliche Unterstützung bereitzustellen um diesen Prozess so reibungslos wie möglich zu gestalten.

Wir schlagen diese Richtung als Ergebnis ausführlicher Diskussionen mit der Community ein, die einen wichtigen Vorschlag des Software Mansion-Teams beinhalteten.

### Warum Regenese?

#### Kairo 1.0 und Sierra

Die Hauptmotivation für Regenesis besteht darin, die neuen Möglichkeiten zu nutzen, die Cairo 1.0 mit sich bringt – nämlich den DOS-Schutz der Sequenzer, die Zensurresistenz und die Gasmessung, die für Starknet als dezentrales Netzwerk unerlässlich sind.

Mit Cairo 1.0 wird sichergestellt, dass jede Transaktion nachweisbar ist. Dadurch kann Starknet rückgängig gemachte Transaktionen in Blöcke einschließen und einen Nachweis ihrer Ausführung erstellen. Dieser Mechanismus ermöglicht es Sequenzern, für die Ausführung rückgängig gemachter Transaktionen bezahlt zu werden, wodurch der DOS-Schutz vor böswilligen Akteuren erhöht wird. Darüber hinaus wird Cairo 1.0 die Gasmessung unterstützen, was Starknet den Übergang zu einem intuitiveren Gebührenmarkt ermöglichen wird. Schließlich wird es Starknet dadurch ermöglicht, erzwungene Transaktionen von L1 aus einzuführen, und die Widerstandsfähigkeit des Netzwerks gegen Zensur wird verbessert.

Um von diesen Vorteilen zu profitieren, können die Verträge Cairo v0 und Cairo 1.0 nicht gemischt werden. Es kann nicht nachgewiesen werden, dass falsche Angaben falsch sind, und es kann auch keine Gasverfolgung stattfinden, wenn wir Teile von Cairo v0-Verträgen haben. Zu diesem Zweck müssen wir den Cairo v0-Code vollständig aus dem Starknet-Staat entfernen, also Regenesis.

**Nach Regenesis werden wir ein Starknet-System haben, das vollständig auf Cairo 1.0 basiert.**

#### Vereinfachung des Codes und Protokolls

Starknet hat bereits viele Änderungen erfahren, als es sich noch in der Alpha befand. Bisher hat jede Version das Betriebssystem, die Blöcke und die Transaktionsstruktur von Starknet verändert. Dies führte dazu, dass ein Teil des Codes veraltet war. Dennoch müssen vollständige Knoten und Infrastrukturanbieter (z. B. Indexer und Status-Explorer) alle früheren Verhaltensweisen der Starknet-Alpha-Versionen kennen und implementieren, um eine vertrauenswürdige Synchronisierung mit dem Status zu gewährleisten. Ohne Regenesis könnte diese Belastung eine große Abschreckung für Entwickler darstellen, die die Entwicklung solcher Dienste für Starknet in Betracht ziehen würden.

Daher beabsichtigen wir, vor der Produktion und als Vorbereitung auf eine dezentrale Welt mit vielen Implementierungen von Infrastrukturtools die Komplexität des Protokolls zu reduzieren. Dies würden wir erreichen, indem wir von der zukünftigen Infrastruktur nicht verlangen, dass sie Starknet 0.x-Code ausführt, und den ersten Block nach der Übergangsperiode als Entstehungspunkt markieren.

### Wen Regenese? Die Gesamtzeitleiste

Regenesis folgt auf die Veröffentlichung von Cairo 1.0, die für Ende 2022 geplant ist. Im ersten Quartal 2023 wird Starknet aktualisiert, um Cairo 1.0 zu unterstützen, und wir beabsichtigen, bis zum Ende des ersten Quartals auf ein vollständig auf Cairo 1.0 basierendes Netzwerk zu migrieren.

**Benutzer und Anwendungen müssen in diesem Zeitraum die Umstellung durchführen.**

![](/assets/1_ef85shzd2uudwex-cy8wdg-1.png)

### Was muss ich also wissen?

Anwendungsentwickler müssen sich der folgenden Aspekte rund um Regenesis bewusst sein:

1. Stellen Sie sicher, dass Ihr Vertrag für das Upgrade bereit ist. Die vollständigen technischen Details des Plans werden im[Starknet Community Forum](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080)geteilt. Sobald die Details festgelegt sind, werden wir eine kurze Richtlinie veröffentlichen.
2. Stellen Sie sicher, dass Sie bereit sind, Ihren Code nach Cairo 1.0 zu portieren. Alle aktuellen Details finden Sie im nächsten Abschnitt.

#### Portierung Ihres Vertrags nach Kairo 1.0

Cairo 1.0 ist für Starknet-Entwickler vielversprechend. Eine Verbesserung gegenüber dem bestehenden Cairo, die das Schreiben von Verträgen sicherer, besser und einfacher macht, mit verbesserter Syntax, einem vollwertigen Typsystem (natives uint256 irgendjemand?) und mehr. Entwickler müssen ihre bestehenden Starknet-Verträge auf die Syntax von Cairo 1.0 portieren. Da die Logik und die Codestruktur jedoch gleich bleiben, dürfte dieser Aufwand im Vergleich zum ursprünglichen Aufwand für die Entwicklung der App vernachlässigbar sein.

In diesem Zusammenhang ist zu beachten, dass Sie sich möglicherweise für eine erneute Prüfung der Cairo 1.0-Version Ihrer App entscheiden. Wenn Ihre App bereits in der Vergangenheit geprüft wurde, ist der Prozess der erneuten Prüfung deutlich günstiger und unkomplizierter, da die Prüfer bereits mit Ihrer Logik vertraut sind.

Wir werden die gesamte Dokumentation rund um Cairo 1.0 sowie Tutorials und Workshops im vierten Quartal 2022 veröffentlichen.

### Ich bin ein Starknet-Benutzer. Was soll ich machen?

Als Benutzer müssen Sie während der Regenesis wahrscheinlich einige Aktionen ausführen. Zumindest müssen Sie Ihren Kontovertrag aktualisieren. Wenn Sie dies während der (einige Monate dauernden) Übergangszeit nicht tun, führt dies zum Verlust Ihres Kontos. Abhängig vom Upgrade-Pfad, den die Entwickler der von Ihnen verwendeten Starknet-Apps gewählt haben, müssen Sie möglicherweise zusätzliche Schritte unternehmen.

Wir erinnern alle daran, dass sich Starknet noch in der Alpha-Phase befindet und Benutzer aufgefordert werden, aufmerksam auf die Kommunikation von Starknet und den von ihnen verwendeten Apps zu achten. Es liegt in Ihrer Verantwortung, sicherzustellen, dass Sie frühzeitig auf das neue System aktualisieren. *Ein Early Adopter zu sein ist nicht immer einfach, und wir zählen darauf, dass Sie Ihren Teil dazu beitragen!*

### Schlussfolgern

Cairo 1.0 steht vor der Tür und bietet Starknet und seinen Entwicklern viele spannende Vorteile und Verbesserungen. Um diese zu nutzen, ist ein Regenesis-Ereignis des Netzwerks erforderlich. Glücklicherweise haben wir ein Design im Kopf, das diesen Prozess minimal störend macht – völlig nahtlos für Benutzer und recht einfach für Anwendungen.

Wir bitten Sie dringend, an der[Community-Diskussion](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080)teilzunehmen und Ihre Kommentare und Bedenken mitzuteilen sowie über die Schritte auf dem Laufenden zu bleiben, die Sie als Anwendungsentwickler auf Starknet unternehmen müssen.