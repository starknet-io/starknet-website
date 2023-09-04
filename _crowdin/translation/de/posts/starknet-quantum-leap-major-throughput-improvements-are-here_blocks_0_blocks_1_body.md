## TL;DR

* Starknet Alpha V0.12.0 wird auf Testnet bereitgestellt
* Starknet erzielte durch die Implementierung des Sequencers in Rust eine bemerkenswerte Steigerung des Durchsatzes um das Zehnfache. Dies wurde durch eine enge Zusammenarbeit zwischen StarkWare und LambdaClass vorangetrieben
* Für eine reibungslosere Benutzererfahrung wird gesorgt, da der Status „PENDING“ für Transaktionen entfernt wurde
* Es wurde ein neuer Systemaufruf eingeführt, der das einfache Abrufen vergangener Block-Hashes ermöglicht
* Starknet alpha V0.12.0 wird eine neue Kairo-Syntax unterstützen, die sich auf Sicherheit konzentriert
* Das Netzwerk-Upgrade auf diese Version wird einer Community-Abstimmung unterzogen, um eine breite Beteiligung und Beiträge zu gewährleisten

## Einführung

Wir freuen uns, die Veröffentlichung von Starknet Alpha V0.12.0 bekannt zu geben. Diese Version ist ein bedeutender Meilenstein, der den Beginn eines großen Fortschritts bei der Bereitstellung verbesserter Leistung und Skalierbarkeit markiert. Diese Version ist ein weiterer Schritt auf dem Weg von Starknet zur Skalierung von Ethereum, wobei der Schwerpunkt auf Durchsatz und Latenz liegt. Um diese Herausforderungen zu bewältigen, haben wir uns für den Sequencer von Starknet entschieden, da die Durchsatzgrenze größtenteils von seiner Leistung abhängt.\
Die Entwicklung von Starknet Alpha V0.12.0 ist größtenteils das Ergebnis einer produktiven und unterhaltsamen einjährigen Zusammenarbeit zwischen [LambdaClass](https://lambdaclass.com/) und StarkWare. Wir sind stolz darauf, Starknet mit dem LambdaClass-Team aufzubauen.

Da es sich bei dieser Version um eine wichtige Version handelt, steht sie zur Community-Abstimmung zur Verfügung. Wir laden die Community ein, sich an der Gestaltung der Zukunft von Starknet zu beteiligen.

## Leistung – Durchsatz ist da!

Der Schwerpunkt dieser Version liegt auf der Leistung und insbesondere auf einem verbesserten Durchsatz, was zu einer deutlichen Steigerung um das Zehnfache führt. Der Durchsatz ist von durchschnittlich 30.000 Kairo-Schritten pro Sekunde (CSPS) in Version 0.11.0 auf beeindruckende 220.000 CSPS in dieser neuesten Version gestiegen. Diese bemerkenswerte Leistung ist das Ergebnis gezielter Optimierungen, die die Effizienz des Starknet-Sequenzers untermauern, wie bereits in unserer [Performance-Roadmap](https://www.starknet.io/en/posts/engineering/starknet-performance-roadmap)beschrieben. Drei Hauptbestandteile haben zu dieser Verbesserung der Leistung von Starknet beigetragen: Cairo-rs, Blockifier und Papyrus, und sie alle profitieren von der Kraft von Rust.

Die erste Verbesserung des Sequencers ist die Integration von **[Cairo-rs](https://github.com/lambdaclass/cairo-vm)**, einem hocheffizienten Cairo-Runner, der in Rust geschrieben und von **LambdaClass**entwickelt wurde. Durch die Nutzung der Leistungsfähigkeit von Rust hat Cairo-rs die Ausführung von Kairo-Verträgen verbessert, was zu einer optimierten Benutzererfahrung führt.

Darüber hinaus hat die Einführung des **[Blockifier](https://github.com/starkware-libs/blockifier)**, einer Rust-basierten Blockausführungslogik, eine entscheidende Rolle bei der Verbesserung des Durchsatzes gespielt. Durch die Optimierung der Transaktionsausführungszeit hat diese Implementierung die Wartezeiten effektiv verkürzt und die Netzwerküberlastung verringert. Die Einbindung von **[Papyrus](https://github.com/starkware-libs/papyrus)**, einer lokalen Speicherlösung, hat zur effizienten Verwaltung des lokalen Status des Sequencers beigetragen. Diese Verbesserung hat die Gesamtleistung und Reaktionsfähigkeit des Systems weiter optimiert.

### Dies ist lediglich der erste Schritt

Die Sequencer-Optimierungen in dieser Version sind noch lange nicht das Ende des Weges zu Leistungsverbesserungen.

#### cairo_native

Starknet wird [cairo_native Compiler](https://github.com/lambdaclass/cairo_sierra2mlir)von LambdaClass integrieren, was die effizientere Ausführung von Kairo-Verträgen ermöglichen wird. Indem wir die Ausführung von Verträgen in „nativem Code“ wie Rust ermöglichen, anstatt sie in der Kairo-Umgebung auszuführen, erwarten wir noch größere Effizienz- und Leistungssteigerungen für Starknet.

#### Parallelisierung

Der vorherige Pythonic Sequencer von Starknet führte die [Parallelisierung von Transaktionen](https://www.starknet.io/en/posts/engineering/starknet-performance-roadmap)ein, was seine Leistung erheblich verbesserte. Es ist jedoch wichtig zu beachten, dass die erste Sequencer-Implementierung in Rust, die in der Version V0.12.0 enthalten ist, noch keine Parallelisierung beinhaltet. Die laufenden Entwicklungsbemühungen konzentrieren sich auf die Parallelisierung der Transaktionsausführung innerhalb des Blocks im Sinne von [Block-STM](https://malkhi.com/posts/2022/04/block-stm/). Aufbauend auf den erfolgreichen Demonstrationen in der Pythonic-Implementierung wird diese Optimierung den Durchsatz von Starknet weiter steigern und es ihm ermöglichen, erhöhte Transaktionsvolumina effizient zu bewältigen.

## Keine ausstehenden Transaktionen mehr

In früheren Versionen zeigte der Status „PENDING“ gültige Blöcke an, die vom Sequencer ausgeführt wurden, aber noch nicht voll waren, was darauf hindeutet, dass noch zusätzliche Transaktionen hinzugefügt werden konnten. In dieser neuesten Version wurde jedoch der Status „PENDING“ durch ACCEPTED_ON_L2 ersetzt, was den Endgültigkeitsstatus von Transaktionen widerspiegelt. Diese Änderung vereinfacht den Transaktionsbestätigungsprozess und bietet Benutzern ein reibungsloseres Erlebnis. 

## get_block_hash Systemaufruf

Eine weitere Ergänzung in Starknet Alpha V0.12.0 ist die Einführung des Systemaufrufs „get_block_hash“. Dieser neue Systemaufruf ermöglicht es Entwicklern, den Hash eines bestimmten Starknet-Blocks im Bereich von \`\[first_v0_12_0_block, current_block-10]\` abzurufen. Die Signatur dieses [Systemaufrufs](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/system-calls-cairo1/) lautet \`fn get_block_hash(u64 block_number) -> Felt252\`.

Die mit diesem Szenario verbundene Fehlermeldung lautet: „Blocknummer außerhalb des gültigen Bereichs“.

Um diese Änderung umzusetzen, schreibt das Betriebssystem am Anfang jedes Blocks eine Zuordnung unter „Adresse = 0x1“ mit „aktueller_Block - 10“ als Schlüssel und dem entsprechenden Hash als Wert.

Mit dem Systemaufruf „get_block_hash“ können Entwickler bequem Block-Hashes abrufen, die wesentliche Komponenten für die Erstellung und Validierung von [Speichernachweisen](https://www.starknet.io/en/posts/developers/what-are-storage-proofs-and-how-can-they-improve-oracles)sind. Diese Beweise ermöglichen einen effizienten kettenübergreifenden Datenzugriff und erhöhen die Vertrauenswürdigkeit von Blockchain-Daten, auch ohne dass man sich auf Orakel Dritter verlassen muss. Indem Entwickler den Block-Hash über diesen Systemaufruf erhalten, können sie den Status eines bestimmten Blocks, Transaktionen oder andere im [Block-Header](https://docs.starknet.io/documentation/architecture_and_concepts/Blocks/header/#block_header)festgeschriebene Informationen genau referenzieren

## Kairo – Verbesserte Vertragssyntax

In dieser Version führen wir wesentliche Verbesserungen der Smart-Contract-Syntax ein. Die neue Syntax legt den Schwerpunkt auf Sicherheit und legt den Grundstein für Erweiterbarkeit. Sicherheit bedeutet in diesem Zusammenhang, expliziter auf die nach außen gerichteten Komponenten des Vertrags (Schnittstelle/Speicher/Ereignisse) einzugehen, was Entwicklern eine bessere Vorstellung davon gibt, was sie bei der Interaktion mit dem Vertrag erwarten können. Die Erweiterbarkeit, die in einer späteren Version finalisiert wird, ermöglicht Verträgen die Nutzung von Komponenten aus externen Bibliotheken. Dies ist ein Schlüsselmerkmal jeder intelligenten Vertragssprache und wird ein wichtiges Problem in der Starknet-Entwicklergemeinschaft angehen. Eine ausführliche Darstellung der Motivation und Änderungen finden Sie im [Cairo Roadmap-Blogbeitrag](https://www.starknet.io/en/posts/ecosystem/cairo-roadmap-join-the-ride) und im [Community-Forumsbeitrag](https://community.starknet.io/t/cairo-1-contract-syntax-is-evolving/94794).

Während die [neue Compiler-Version](https://github.com/starkware-libs/cairo/releases/tag/v2.0.0-rc0) Breaking Changes enthält, **können Sie weiterhin die ältere Compiler-Version (v1.1.0) verwenden und die daraus resultierenden Verträge für die nächsten sechs Monate auf Starknet bereitstellen**. Dies spiegelt unser neues Compiler-Upgrade-Protokoll für Breaking Changes wider: Nach neuen Compiler-Versionen werden Verträge, die mit der alten Compiler-Version kompiliert wurden, noch mindestens sechs Monate lang akzeptiert, um der Community eine Anpassung zu ermöglichen. Sobald ein Kairo-Vertrag (nicht Kairo 0) auf Starknet deklariert wird, bleibt dieser natürlich auf unbestimmte Zeit für den Einsatz und die Interaktion verfügbar.

## Was kommt als nächstes?

### Kurzfristige Ziele: Version 0.12.1

Kurzfristig konzentriert sich Starknet auf die Verbesserung des Benutzererlebnisses und der Transaktionszuverlässigkeit. Die nächste Version, 0.12.1, wird eine weitere wesentliche Verbesserung einführen: die Einbeziehung fehlgeschlagener Transaktionen in den Block. Bisher wurden fehlgeschlagene Transaktionen nicht in den Block aufgenommen und der Sequencer konnte daher keine Gebühr erheben und die Nonce dafür nicht vorstrecken. Dies führte zu UX-Problemen für Entwickler. Sie konnten sich nicht auf die Weiterleitung der Nonce verlassen und waren daher gezwungen, den Transaktionsstatus kontinuierlich zu überwachen, bevor sie eine neue senden. Diese Änderung schützt den Sequencer auch davor, dass Benutzer das System mit fehlgeschlagenen Transaktionen zuspammen, ohne dafür zu bezahlen. Ziel dieses Updates ist es, Benutzern ein reibungsloseres und nahtloseres Erlebnis bei der Interaktion mit Starknet zu bieten.

### Langfristige Vision: Durchsatz, Latenz und Kosten

[Mit Blick auf die Zukunft](https://www.starknet.io/en/roadmap)besteht die übergeordnete Vision von Starknet darin, eine erhebliche Skalierbarkeit sowohl im Umfang als auch bei den Kosten zu erreichen. Die nächste Priorität auf der Agenda besteht darin, die Transaktionskosten drastisch zu senken.

Durch die Senkung der Kosten möchte Starknet Transaktionen erschwinglicher und integrativer machen, wodurch ein breiteres Spektrum an Anwendungsfällen möglich wird und Entwickler und Benutzer mehr Möglichkeiten erhalten. Das Engagement für Kostensenkung steht im Einklang mit der Mission von Starknet, eine skalierbare, flexible und kostengünstige Infrastruktur für dezentrale Anwendungen bereitzustellen.

## Starknet Alpha V0.12.0 Abstimmung

[Starknet Governance Phase 1](https://medium.com/starknet-foundation/starknets-governance-first-phase-4614c7566f40) konzentriert sich auf wichtige Aktualisierungen des Starknet-Protokolls.\
Jedes größere Starknet-Versions-Upgrade wird zunächst auf Testnet bereitgestellt, sodass die Starknet-Community ein paar Tage Zeit hat, die aktualisierte Version zu prüfen und zu testen. Während dieses Prüfungszeitraums wird ein Snapshot-Vorschlag geöffnet, der es der Community ermöglicht, darüber abzustimmen, ob die aktualisierte Version für die Mainnet-Bereitstellung genehmigt werden soll.

Wenn der Vorschlag während des Abstimmungszeitraums die Mehrheit der „JA“-Stimmen erhält, wird er angenommen und das Starknet-Mainnet wird entsprechend aktualisiert.

Die Abstimmung über Starknet Alpha V0.12.0 steht vor der Tür!\
Jeder ist eingeladen, sich für den Benachrichtigungsdienst im [Snapshot-Bereich von Starknet anzumelden.](https://snapshot.org/#/starknet.eth/proposal/0x00889bc468509610e516e8602f00b21ca8c32466dd4f0140eca38becb7f40bef) Schauen Sie sich den [Delegiertenprofil-Thread](https://community.starknet.io/t/delegate-profile-thread/4049) & die [Delegationserkennung](https://delegate.starknet.io/)an, um entweder Delegierter zu werden oder einen auszuwählen, und diskutieren Sie [Starknet Alpha v0.12.0-Vorschlag](https://community.starknet.io/t/proposal-starknet-alpha-v0-12-0/95997) im Community-Forum.

## Zusammenfassung

Starknet Alpha V0.12.0 konzentriert sich auf die Verbesserung der Leistung und des Benutzererlebnisses. Die neue Version führt eine Rust-basierte Implementierung des Sequencers ein, die den Durchsatz um das Zehnfache verbessert und die Transaktionslatenz reduziert. Zu den weiteren Funktionen gehören eine neue Compilerversion, das Entfernen des Status „Ausstehende Transaktion“ und das Hinzufügen eines Block-Hash-Systemaufrufs. 

Starknet-Entwickler sind in der Lage, Lösungen zu programmieren, die einen Unterschied machen. Beginnen Sie Ihre Cairo [Entwicklungsreise](https://twitter.com/Starknet/status/1674689343758168065?s=20), lesen Sie die [Cairo-Dokumente](https://www.cairo-lang.org/docs/), registrieren Sie sich für [Cairo Basecamp](https://docs.google.com/forms/d/e/1FAIpQLSf2k9vjPpeymbUpJMRDuN3QqNcHtjWx8whX2wY4EbihF1EaPg/viewform)oder gehen Sie [durch die Tutorials](https://www.starknet.io/en/tutorials). Möchten Sie über alle Versionsaktualisierungen auf dem Laufenden bleiben? Melden Sie sich für unseren [Starknet Developers Newsletter](https://starknet.substack.com/)an.