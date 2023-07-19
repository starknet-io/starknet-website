### TL;DR

* Wir bauen Starknet schrittweise auf, beginnend mit der Etablierung der Benutzerfreundlichkeit, dann der Verbesserung der Leistung und schließlich der Dezentralisierung
* Wir haben unser erstes Ziel erreicht: Benutzerfreundlichkeit. Das bedeutet, dass wir allgemeine Berechnungen in einem Ethereum-ähnlichen Zustand geliefert haben (Jahre bevor dies für möglich gehalten wurde).
* Wir gehen jetzt zu Stufe 2 unseres dreiteiligen Aufbauplans über: Leistung, wobei wir uns auf Durchsatz, Transaktionskosten und Latenz konzentrieren.
* Als nächstes: Dezentralisierung

Nur ein Jahr nach der ersten Ankündigung der Pläne für [Starknet](https://starknet.io/) verfügt die Plattform über eine sehr gute Funktionalität. Die Entwickler-Community blüht über unsere kühnsten Erwartungen hinaus und sorgt für eine ständige Flut neuer L2-Native-Projekte.

Unsere Priorität im letzten Jahr bestand darin, genau dies zu ermöglichen, indem wir ein funktionierendes Starknet mit einem schnell wachsenden Funktionsumfang schaffen, das es Entwicklern ermöglicht, direkt einzusteigen.

Sie haben dies in großer Zahl getan. Ein gutes Barometer ist die Anzahl der Downloads für die [JavaScript-Bibliothek für Starknet](https://www.starknetjs.com/): bereits 5.000, seit sie vor 4 Monaten verfügbar wurde.

Doch obwohl Starknet die von uns versprochene Komprimierungsmagie liefert, ist es im Moment bei weitem nicht in der Lage, dies für genügend dApps mit ausreichendem Durchsatz zu tun, und dies könnte sich kurzfristig als Quelle der Frustration für Entwickler erweisen.

Unsere kampferprobte Kerntechnologie, die den STARK-Nachweis vieler Transaktionen und die Komprimierung der Beweise ermöglicht, muss durch Stapelverarbeitung oder Sequenzierung von Transaktionen vorangestellt werden. Es handelt sich um einen Prozess, den das StarkWare-Team bereits einmal für die Skalierungs-Engine [StarkEx](https://starkware.co/starkex/) perfektioniert hat, und wir arbeiten derzeit daran, ihn für die Bedürfnisse von Starknet noch einmal umzusetzen.

Da viele unserer Usability-Ziele nun erreicht sind, verlagern wir den Fokus, um dies zu unserer obersten Priorität zu machen. Das alles ist Teil unserer dreistufigen Roadmap: Benutzerfreundlichkeit, gefolgt von der Leistung des Netzwerks und dann Dezentralisierung. Nach einem Jahr möchten wir Ihnen einen Blick unter die Haube werfen – einen Überblick darüber, welche Teile vorhanden sind und was noch in Arbeit ist.

### Die Geschichte bisher

Starknet Alpha wurde im Juni im öffentlichen Testnetz und im November im Mainnet veröffentlicht. Zum Zeitpunkt der Mainnet-Bereitstellung lieferte Starknet bereits allgemeine Berechnungen in einem Ethereum-ähnlichen Zustand, von dem allgemein angenommen wurde, dass dies noch Jahre dauern würde.

Während der gesamten Entwicklung haben wir einen Ansatz gewählt, der sich zunächst auf die wichtigsten Funktionalitäten konzentrierte und diese veröffentlichte, sobald sie verfügbar waren, sodass wir im Wesentlichen den Entwicklungsprozess mit der Community teilten. Starknet ist noch lange nicht mit allen Funktionen ausgestattet, aber schon jetzt können Entwickler sinnvolle und komplexe Anwendungen erstellen. Heute haben wir [von Entwicklern, die auf Starknet aufbauen,](https://starkware.notion.site/Projects-Building-on-StarkNet-a33dee55778a4515a9be9bdae02ee682) Dutzend dApps und mehr als ein Dutzend externe Teams, die Tools und Infrastruktur für das Starknet-Ökosystem entwickeln.

Eine Reihe von Upgrades hat viele wichtige Funktionen bereitgestellt, darunter L1<>L2-Messaging, On-Chain-Daten und Unterstützung für Zusammensetzbarkeit, Ereignisunterstützung, grundlegender Gebührenmechanismus, Vertragsaktualisierbarkeit, Kontoabstraktion, Test-Framework, Entwicklertools, schnelle Bestätigung, Blocknummer , Zeitstempel blockieren, Unterstützung für Kontoverträge.

Die Entwicklergemeinschaft ist sowohl stark an Starknet interessiert als auch an der Gestaltung seiner Entwicklung beteiligt. Basierend auf dem Feedback der Entwickler wurden bereits Funktionen eingeführt. Die Akzeptanz könnte die Steigerung des Durchsatzes durchaus übertreffen, weshalb dieser Schub jetzt unsere höchste Priorität hat.

### Nächste Schritte

Da wir nun die Benutzerfreundlichkeit erreicht haben, ist es an der Zeit, die Leistung des Systems zu verbessern. Das System ist in seinem aktuellen Zustand in der Lage, einen begrenzten Transaktionsdurchsatz zu unterstützen. Die Lösung dieses Problems besteht darin, die Leistung des Sequencer-Knotens zu verbessern, der Starknets Äquivalent eines Miners ist. Es ist die „Maschine“, die Transaktionen nach deren Übermittlung sequenziert. Wenn dies optimiert wird, wird der Durchsatz rasant steigen.

Zu diesem Zweck analysieren wir gleichzeitig, wo die Engpässe liegen, und beheben sie nach und nach. Derzeit hängen alle Engpässe mit dem Sequenzierungsprozess zusammen, der vor dem Aufruf der STARK-Prüfer stattfindet. Der kampferprobte Prover-Stack ist bereit, einen StarkEx-ähnlichen Durchsatz auf Starknet zu unterstützen.

Wir gehen davon aus, dass die Optimierung des Sequenzers ein Prozess sein wird, der einige Monate dauern wird, mit schrittweisen Verbesserungen im Laufe des ersten Halbjahres 2022. Unser Ziel ist es, bis zum Beginn der zweiten Jahreshälfte 2022 einen um mindestens eine Größenordnung höheren TPS als Ethereum zu erreichen, und das zu einem Preis, der mindestens zwei Größenordnungen unter dem von Ethereum liegt. Und das ist erst der Anfang.

Es gibt gute Gründe dafür, dass diese Optimierungsphase notwendig ist und dass Starknet nicht mit einem fertig optimierten Sequenzer gestartet wurde: Starknet konnte die Benutzerfreundlichkeit so schnell erreichen, weil wir einen Vorsprung hatten. Anstatt bei Null anzufangen und einen völlig neuen Sequenzer zu bauen, haben wir den Batcher von StarkEx als zentrale Komponente verwendet.

Das war eine großartige Art zu bauen. Es lieferte nicht nur schnell; Das bedeutet, dass wir sicher sind, dass wir auf einem stabilen Fundament gebaut haben. StarkEx hat im Wesentlichen die Kernfunktionalität, die Starknet antreibt, auf die Probe gestellt und Hunderte Milliarden Dollar im kumulativen Handel eingesammelt.

[StarkEx](https://starkware.co/starkex/) ist die Skalierungs-Engine für einige der erfolgreichsten dApps, die L2 verwenden: dYdX (unbefristete Verträge), DeversiFi (Spot-Handel und Zahlungen) sowie für Immutable und Sorare (NFT-Minting und -Handel).

Aber der für sie und andere StarkEx-Clients entwickelte Sequenzer kann Starknet nur bis zu einem gewissen Grad bringen. Jeder von ihnen wickelt jeden Tag im Großen und Ganzen die gleiche Art von Transaktion ab. Bei Starknet dreht sich alles um allgemeine Berechnungen, daher sind die Anforderungen offen. Wenn sein Sequenzer Transaktionen aus dem Mempool übernimmt, gibt es diese in verschiedenen Formen und Größen. Darüber hinaus ist Starknet auch ein offenes Netzwerk, was bedeutet, dass ein zusätzlicher Rechenaufwand entsteht, der bei StarkEx nicht auftritt.

Die aktuelle Herausforderung, nämlich die Optimierung des Sequenzers für diese neuen Anforderungen, ist ein bedeutendes Unterfangen, aber wir haben aufgrund unserer erfolgreichen StarkEx-Entwicklung ein tiefes Verständnis für die erforderliche Route.

### Als nächstes: Dezentralisierung

Starknet soll ein vollständig dezentralisiertes, erlaubnisloses Netzwerk sein, komplett mit Führungswahl- und Governance-Mechanismen. Dies zu erreichen, wird unser Hauptaugenmerk sein, sobald der Durchsatz in die Höhe schnellen und die Kosten sinken, und wir hoffen, bis Ende 2022 eine erste dezentrale Version haben zu können. Wir gehen davon aus, dass wir unseren Dezentralisierungsplan in den kommenden Monaten öffentlich bekannt geben werden.

So wie der derzeit begrenzte Durchsatz eine Übergangsphase in der Entwicklung von Starknet darstellt, ist auch das derzeitige Ausmaß der Beteiligung von StarkWare vorübergehender Natur. Wir verstehen uns als eine Art Gerüst, das während der Bauphase eine wichtige Funktion erfüllt, aber zu gegebener Zeit wieder zurückgebaut wird.

Die vollständige Knotenentwicklung, ein spannender erster Schritt in Richtung Dezentralisierung, ist bereits im Gange. Vollständige Knoten ermöglichen es jedem, den Status des Netzwerks lokal zu verwalten und zu überprüfen und so genau zu verfolgen, was passiert. Drei Teams – Erigon, Nethermind und Equilibrium – entwickeln vollständige Knoten, und möglicherweise werden in Zukunft weitere mit der Entwicklung beginnen.

Parallel dazu laufen Vorbereitungen, um Sequenzierungs- und Testsoftware der Öffentlichkeit zugänglich zu machen. Jeder kann als Sequenzer oder Prüfer an Starknet teilnehmen.

Es wird eine Struktur entwickelt, um Menschen zu motivieren, sich zu engagieren, was auch wirtschaftliche Belohnungen beinhaltet. Die Starknet-Gebühren gehen teilweise an Sequenzierer und Prüfer.

Mittelfristig gehen wir davon aus, dass wir unseren Sequenzer Dritten zur Verfügung stellen werden, und langfristig erwarten wir auch, dass verschiedene Teams Sequenzer bauen, die für Starknet sequenzieren.

### Ständige Verbesserung; Für immer zuhören

Während wir uns auf die nächste Herausforderung konzentrieren, werden wir unsere bisherigen Erfolge weiter verbessern. Und wenn wir weiterhin an allen Bereichen von [Starknet](https://starknet.io/)arbeiten, bleiben unsere Ohren immer offen für die gesamte Entwicklergemeinschaft. Beteiligen Sie sich also über [Discord](https://discord.com/invite/uJ9HZTUk2Y), die [Starknet Shamans](https://www.google.com/search?client=safari&rls=en&q=StarkNet+Shamans&ie=UTF-8&oe=UTF-8) Community, [Twitter](https://twitter.com/Starknet_Intern)oder auf einem anderen Weg an der Diskussion und gestalten Sie die Zukunft der Blockchain-Skalierung mit.