### TL;DR

* Wir bauen StarkNet in Schritten auf, beginnend mit der Erstellung von**Benutzerfreundlichkeit**, dann die Leistung**verbessert**und schließlich auf**Dezentralisierung**
* Wir haben unser erstes Ziel erreicht: Usability. Dies bedeutet, dass wir allgemeine Berechnungen in einem ätherischen Zustand geliefert haben (Jahre bevor es für möglich gehalten wurde)
* Wir bewegen uns jetzt auf die zweite Stufe unseres 3-teiligen Bauplans: Leistung, Fokussierung auf Durchsatz, Transaktionskosten und Latenz.
* Nächste: Dezentralisierung

Nur ein Jahr nachdem die Pläne für[StarkNet](https://starknet.io/)zum ersten Mal angekündigt wurden, hat die Plattform eine sehr gute Funktionalität. Die Entwicklergemeinschaft gedeiht über unsere kühnsten Erwartungen hinaus und bietet eine konstante Blüte neuer L2 Native Projekte.

Unsere Priorität im letzten Jahr war es, genau dies zu ermöglichen. durch die Erstellung eines funktionierenden StarkNet mit einer schnell wachsenden Bandbreite von Funktionen, das es devs ermöglicht, gerade einzutauchen.

Sie haben dies in großer Zahl getan. Ein gutes Barometer ist die Downloadanzahl für die[JavaScript-Bibliothek für StarkNet](https://www.starknetjs.com/): bereits bei 5k seit 4 Monaten verfügbar.

Doch während StarkNet die Komprimierungsmagie liefert, die wir im Moment versprochen haben es ist weit davon entfernt, dies für genug dApps mit genügend Durchsatz tun zu können, und dies kann sich kurzfristig als Frustration für Entwickler erweisen.

Unsere battgetestete Kerntechnologie, STARK beweisen viele Transaktionen und komprimieren die Beweise, muss durch Batching oder Sequenzierung von Transaktionen vorausgehen. Es ist ein Prozess, den das StarkWare-Team bereits einmal für den[StarkEx](https://starkware.co/starkex/)Skalierungsmotor perfektioniert hat und wir arbeiten derzeit daran, dies wieder für die Bedürfnisse von StarkNet.

Jetzt, da viele unserer Usability Ziele erreicht wurden, verschieben wir den Fokus auf diesen Punkt zu unserer obersten Priorität. Es ist alles Teil unserer 3-stufigen Roadmap:**Usability**, gefolgt von der**Leistung des Netzwerks**und dann**Dezentralisierung**. Ein Jahr ins wir möchten dir einen Blick unter die Haube geben – eine Übersicht darüber, welche Teile vorhanden sind und was noch in Bearbeitung ist.

### Die Geschichte ist so weit entfernt

StarkNet Alpha wurde im Juni in das öffentliche Testnet und im November in Mainnet veröffentlicht. StarkNet wurde von der Sternenflottenakademie in den USA und in den USA von der Sternenflottenakademie gegründet.

Während der gesamten Entwicklung haben wir einen Ansatz gewählt, der sich zunächst auf die wichtigsten Funktionalitäten konzentrierte und sie veröffentlichte, sobald sie verfügbar waren Im Wesentlichen teilt der Entwicklungsprozess mit der Gemeinschaft. StarkNet ist noch lange nicht vollständig funktionsfähig, aber selbst jetzt können Entwickler bereits sinnvolle und komplexe Anwendungen erstellen. Heute haben wir Hunderte von Entwicklern[auf StarkNet,](https://starkware.notion.site/Projects-Building-on-StarkNet-a33dee55778a4515a9be9bdae02ee682)Dutzende dApps, und mehr als ein Dutzend externe Teams entwickeln Werkzeuge und Infrastruktur für das StarkNet Ökosystem.

Eine Reihe von Upgrades hat viele wichtige Funktionen geliefert, darunter L1<>L2-Nachrichten, On-Kettendaten und Unterstützung für Composability, Ereignis-Support, Basisgebührenmechanismus, Upgradeability, Account-Abstraktion, Test-Framework, Entwickler-Tools, schnelle Bestätigung, Blocknummer, Zeitstempel blockieren, Unterstützung für Account-Verträge.

Die Entwicklergemeinde ist sowohl an StarkNet sehr interessiert als auch an der Gestaltung ihrer Entwicklung. Bereits jetzt wurden Funktionen auf Basis von Entwickler-Feedback eingeführt. Die Annahme könnte den Anstieg des Durchsatzes deutlich übersteigen, und deshalb ist dieser Anschub jetzt unsere große Priorität.

### Nächste Schritte

Jetzt, da wir die Usability erreicht haben, ist es an der Zeit, die Leistung des Systems zu verbessern. Das System ist in seinem derzeitigen Zustand in der Lage, einen begrenzten Transaktionsdurchsatz zu unterstützen. Um dies zu beheben, muss man die Leistung des Sequencer Node verbessern, der StarkNet's Äquivalent zu einem Miner ist. Es ist die „Maschine“, die Transaktionen nach der Abgabe abfolgt. Wenn dies optimiert wird, wird der Durchsatz explodieren.

Zu diesem Zweck analysieren wir gleichzeitig, wo die Engpässe sind, und adressieren sie nacheinander. Derzeit stehen alle Engpässe im Zusammenhang mit dem Sequenzierungsprozess, der kommt, bevor wir die STARK-Prover aufrufen. Der im Kampf getestete Prover-Stack ist bereit, den StarkEx-ähnlichen Durchsatz auf StarkNet zu unterstützen.

Wir erwarten, dass die Optimierung des Sequenzers ein Prozess sein wird, der einige Monate dauert, mit allmählichen Verbesserungen in der gesamten H1/22. Unser Ziel ist es, zu Beginn der zweiten Hälfte des Jahres 2022 mindestens eine Größenordnung höherer TPS als Ethereum zu erreichen zu einem Preis, der mindestens zwei Größenordnungen niedriger ist als das von Ethereum. Und das ist erst der Anfang.

Es gibt gute Gründe, dass diese Optimierungsphase erforderlich ist und dass StarkNet nicht mit einem vorgefertigten Sequenzer gestartet wurde: StarkNet war in der Lage, die Usability so schnell zu erreichen, weil wir einen Head-Start hatten. Anstatt bei Null anzufangen und einen völlig neuen Sequenzer zu bauen, haben wir den Batcher von StarkEx als zentrale Komponente verwendet.

Dies war ein großartiger Weg, um zu bauen. Es hat nicht nur schnell geliefert, sondern wir sind uns sicher, dass wir auf soliden Fundamenten gebaut haben. StarkEx hat im Wesentlichen die Kernfunktionalität getestet, die StarkNet antreibt, da es hunderte von Milliarden Dollar in kumulativen Handel einstuft.

[StarkEx](https://starkware.co/starkex/)ist die Skalierungs-Engine für einige der erfolgreichsten dApps mit L2: dYdX (Dauerverträge), DeversiFi (Spot Trading und Zahlungen) sowie für Immutable und Sorare (NFT Minting und Trading).

Aber der für sie und andere StarkEx-Clients gebaute Sequenzer kann StarkNet bisher nur nutzen. Jeder von ihnen behandelt im großen und ganzen dieselbe Art von Transaktionen jeden Tag. Bei StarkNet geht es um**allgemeine Berechnung**, also sind die Bedürfnisse offen. Wenn der Sequenzer Transaktionen aus dem Mempool nimmt, kommen sie in verschiedenen Formen und Größen. Außerdem ist StarkNet auch ein offenes Netzwerk, was bedeutet, dass es zusätzliche rechnerische Overhead gibt, die in StarkEx nicht vorkommen.

Die gegenwärtige Herausforderung, nämlich den Sequenzer für diese neuen Bedürfnisse zu optimieren, ist ein bedeutendes Unterfangen. aber wir haben ein starkes Verständnis für den Weg, der auf der Grundlage unserer erfolgreichen StarkEx-Entwicklung.

### Weiter oben: Dezentralisierung

StarkNet soll ein vollständig dezentralisiertes Netzwerk ohne Erlaubnis sein, das mit Wahl- und Verwaltungsmechanismen für Führungskräfte ausgestattet ist. Dies zu erreichen, wird unser Hauptfokus werden, sobald die Durchsatzraketen sinken und die Kosten sinken, und wir hoffen, bis Ende 2022 eine erste dezentrale Version zu haben. Wir erwarten in den kommenden Monaten eine öffentliche Teilung unseres Dezentralisierungsplans.

So wie der derzeitige begrenzte Durchsatz eine Zwischenphase in der Entwicklung von StarkNet darstellt, so ist auch der derzeitige Grad der Beteiligung von StarkWare vorübergehend begrenzt. Wir verstehen uns als ein Gerüst, das während der Bauphase eine wichtige Rolle spielt, aber zu gegebener Zeit zurückgerollt wird.

Vollständige Knotenentwicklung, ein spannender erster Schritt in Richtung Dezentralisierung, ist bereits im Gange. Vollständige Knoten werden es jedem ermöglichen, den Status des Netzwerks lokal zu halten und zu überprüfen, was genau passiert. Drei Teams –*Erigon, Nethermind und Equilibrium*– entwickeln vollständige Knoten, und möglicherweise mehr werden in Zukunft mit der Entwicklung beginnen.

Parallel dazu laufen Vorbereitungen für die Öffnung der Sequenzierung und den Nachweis von Software für die Öffentlichkeit. Jeder kann als Sequenzer oder Prover auf StarkNet teilnehmen.

Es wird eine Struktur entwickelt, um die Menschen dazu anzuregen, sich zu engagieren, die wirtschaftliche Belohnung einschließt. Die Gebühren von StarkNet gehen teilweise an Sequenzer und Prover.

Mittelfristig erwarten wir, dass unser Sequenzer Dritten zur Verfügung gestellt wird. und langfristig erwarten wir, dass auch verschiedene Teams Sequenzer erstellen, die für StarkNet sequenzieren.

### Immer verbessern; ewig zuhören

Da sich der Fokus auf die nächste Herausforderung verlagert, werden wir die bisherigen Errungenschaften weiter verbessern. Und wenn wir weiterhin in allen Bereichen von[StarkNet](https://starknet.io/)arbeiten, bleiben unsere Ohren immer offen für die gesamte Entwicklergemeinschaft. Also beteilige dich an der Diskussion, via[Discord](https://discord.com/invite/uJ9HZTUk2Y), der[StarkNet Shamans](https://www.google.com/search?client=safari&rls=en&q=StarkNet+Shamans&ie=UTF-8&oe=UTF-8)Community[Twitter](https://twitter.com/Starknet_Intern), oder eine andere Route und gestalten die Zukunft der Blockchain Skalierung mit.