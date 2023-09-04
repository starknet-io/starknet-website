### TL;DR

* Die erste Version von Cairo 1.0 ist da!
* Entwickler können mit dem Schreiben und Testen von Cairo 1.0-Programmen beginnen
* Die Funktionsgleichheit mit der älteren Version von Cairo wird in den kommenden Wochen erreicht
* Unterstützung für StarkNet-Verträge wird in der kommenden StarkNet Alpha-Version hinzugefügt

### Hintergrund

Wir freuen uns, Ihnen mitteilen zu können, dass die erste öffentliche Version von Cairo 1.0 jetzt verfügbar ist. Dies stellt einen wichtigen Meilenstein in der Entwicklung von Cairo dar, das erstmals 2020 als Turing-vollständige Programmiersprache zum effizienten Schreiben von STARK-nachweisbaren Programmen eingeführt wurde. Cairo 1.0 ist eine Rust-ähnliche Hochsprache. Wie Rust soll es Entwicklern ermöglichen, auf einfache Weise effizienten und sicheren Code zu schreiben.

Seit seiner Gründung wurde Kairo zum Aufbau von Layer-2-Anwendungen genutzt, die[Transaktionen im Wert von über 790 Milliarden US-Dollar abgewickelt, über 300 Millionen Transaktionen verarbeitet und mehr als 90 Millionen NFTs geprägt haben](https://dashboard.starkware.co/starkex)die alle außerhalb der Kette ausgeführt und auf Ethereum abgewickelt wurden mathematische Integrität, garantiert durch STARK-Beweise. Kairo wurde zur vierthäufigsten verwendeten Programmiersprache im gesamten Blockchain[Ökosystem](https://defillama.com/languages). Mit der Veröffentlichung von Cairo 1.0 wollen wir die Sprache noch zugänglicher und benutzerfreundlicher machen und gleichzeitig neue Funktionen einführen, die die Sicherheit und den Komfort erhöhen.

Eine der bedeutendsten Änderungen in Cairo 1.0 ist die Syntax. Wir haben uns von**Rust**inspirieren lassen, um eine entwicklerfreundlichere Sprache zu schaffen, die einfacher zu lesen und zu schreiben ist. Die neue Version von Cairo ermöglicht das Schreiben von sichererem Code (stark typisiert, Besitz und Ausleihe usw.) und ist gleichzeitig ausdrucksstärker.

Cairo 1.0 führt außerdem Sierra ein, eine neue Zwischendarstellung, die sicherstellt, dass bei</strong>Cairo-Lauf**nachgewiesen werden können. Dadurch eignet sich Cairo 1.0 besonders gut für den Einsatz in erlaubnisfreien Netzwerken wie StarkNet, wo es robusten DoS-Schutz und Zensurresistenz bieten kann. Mehr über Sierra können Sie in unserem[vorherigen](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)Beitrag lesen.</p>

## Erster Vorgeschmack!

### Was können Sie heute tun?

Entwickler können mit dem Schreiben, Kompilieren und Testen von Cairo 1.0-Programmen beginnen! Wir ermutigen Entwickler, mit Cairo 1.0 zu experimentieren und sich an die neue Syntax und Funktionen zu gewöhnen.

Da Cairo 1.0 noch aktiv weiterentwickelt wird und ständig neue Funktionen hinzugefügt werden, schauen Sie sich das[Cairo-Repository](https://github.com/starkware-libs/cairo/)für die neuesten Updates an.

### Was kommt als nächstes?

Derzeit fehlen in Cairo 1.0 noch einige der in der älteren Version von Cairo unterstützten Funktionen ([Einzelheiten finden Sie in dieser Tabelle](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)). Unser nächster Meilenstein, der in den nächsten Wochen erwartet wird, wird die Funktionsparität von Cairo 1.0 mit der älteren Version gewährleisten. Sie können den Fortschritt in Richtung dieses Meilensteins[hier verfolgen](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md).

### Starknet-Unterstützung

Das Schreiben von StarkNet-Verträgen in Cairo 1.0 wird unterstützt (obwohl bestimmte Funktionen noch fehlen). StarkNet unterstützt jedoch noch nicht die Bereitstellung und Ausführung von Cairo 1.0-Verträgen. StarkNet Alpha V0.11.0, geplant in den kommenden Wochen, wird die Möglichkeit einführen, Cairo 1.0-Verträge bereitzustellen und auszuführen. Das Upgrade auf v0.11.0 markiert den Beginn der Übergangsphase hin zu einem System, das nur Cairo 1.0-Verträge ausführt. Diese Übergangsperiode endet mit der[Regenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4), die einige Monate später erwartet wird.

![](/assets/0_odxbxeacqdwizlfw.jpg)

### Lass uns bauen!

Das Ziel von StarkNet besteht darin, Ethereum mithilfe der mathematischen Integrität von STARKs exponentiell zu skalieren, und das Ziel von Cairo besteht darin, diese exponentielle Skalierung für Entwickler zugänglich zu machen. Unter Barrierefreiheit versteht man eine Programmiersprache, die effizient, einfach zu lesen und zu schreiben und sicher zu verwenden ist. Wir hoffen, dass die Veröffentlichung von Cairo 1.0 noch mehr Entwickler dazu inspirieren wird, sich StarkNet anzuschließen und Ethereum zu skalieren, um der globalen Nachfrage gerecht zu werden.