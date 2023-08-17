#### **TL;DR**

Wir bauen StarkNet in vier Schritten:

* Schritt 0 — Stiftungen (abgeschlossen*)
* Schritt I — Planeten: Einzel-App-Rollups
* Schritt II — Constellation: Multi-App Rollups
* Schritt III — Universum: Eine dezentralisierte Rolle

Wir erwarten, dass Schritt I in wenigen Monaten eingesetzt wird und seien Sie gut auf unserem Weg zu Schritten II & III bis Ende 2021.

### **Einführung**

StarkWare baut StarkNet, ein dezentralisiertes, unberechtigtes und zensurfähiges STARK-gestütztes L2 ZK-Rollup, das general-computation über Ethereum unterstützt. Es basiert auf der Turing-complete[Kairo Sprache](https://www.cairo-lang.org/).

Entwickler, Benutzer und StarkNet-Knoten werden alles tun können, was man von einem unzulässigen L2-Rollup erwarten würde: Entwickler können Anwendungen erstellen, die ihre eigene Geschäftslogik implementieren und auf StarkNet einsetzen. Benutzer können Transaktionen an StarkNet schicken, um ausgeführt zu werden, genau wie sie heute mit Ethereum interagieren. StarkNet-Knoten und Teilnehmer werden kryptoökonomisch angetrieben, um sicherzustellen, dass das Netzwerk effizient und fair funktioniert.

Alle StarkNet-Transaktionen werden periodisch zusammengestellt und ihre Gültigkeit wird in einem STARK-Nachweis nachgewiesen, der auf Ethereum überprüft wird. Da der zur Überprüfung der STARK-Proofs erforderliche Rechenaufwand im Vergleich zur nachgewiesenen Berechnung exponentiell gering ist, skaliert StarkNet Ethereum um um Größenordnungen.

Da alle StarkNet-Statusübergänge STARK-belegt sind, werden nur gültige auf Ethereum akzeptiert. Alle Daten, die für die Rekonstruktion des gesamten StarkNet-Status benötigt werden, werden on-chain veröffentlicht. Jeder kann seinen eigenen StarkNet-Knoten betreiben. Diese Eigenschaften machen StarkNet so sicher und unzulässig wie Ethereum.

Wir sind seit drei Jahren dabei und haben bereits einige bemerkenswerte Meilensteine bei der Umwandlung von „Moon Math“ in produktionsfähige und effiziente Software erreicht, die auf Ethereum läuft. Die Art und Weise, wie StarkWare die harten Probleme anpackt, baut zuerst die Kerntechnologie auf und gibt sie dann in Stück für Stück zur Produktion frei. Wir werden weiterhin auf diese Weise bauen, sobald wir StarkNet fertigstellen.

![](/assets/ontheroad_02.png)

**Schritt 0 — Stiftungen**

StarkWare hat einige wichtige Grundlagen für StarkNet geschaffen.

#### **Cairo**

[Kairo](https://twitter.com/StarkWareLtd/status/1300353049836376066?s=20)ist unser Turing-Complete High-Level Language & Framework für die Erstellung von STARK Proofs für die allgemeine Berechnung. Anstelle komplexer „Schaltungen“ oder AIR kann ein Anwendungsentwickler Kairo verwenden, um jede Geschäftslogik zu definieren, sich außerhalb der Kette bewährt und on-chain verifiziert zu haben. Cairo ist[in der Produktion auf Mainnet](https://twitter.com/StarkWareLtd/status/1320695603492507648?s=20)und ist auch[für Entwickler verfügbar](http://cairo-lang.org/).

In ein paar Wochen werden wir ein öffentliches Ethereum testnet eine Alpha Version des Generic Proof Service (GPS) von Kairo auf den Markt bringen. *Dies wird Entwicklern erlauben, ihre eigenen Anwendungen mit Kairo zu erstellen und die Geschäftslogik zu implementieren, die sie wünschen. Sie werden ihren Kairo-Code an das GPS schicken, das nachgewiesen werden soll und dann auf der Kette verifiziert werden.*

GPS ermöglicht einen einzigen Beweis für die Integrität der Ausführung von völlig unabhängigen Anwendungen. Auf diese Weise haben diese Anträge die Möglichkeit, die Gaskosten der Nachprüfung unter ihnen zu amortisieren.

Kairo und GPS sind die Grundlage von StarkNet – unsere Entscheidung, beide Entwickler zu externalisieren, bietet ihnen frühzeitige Exposition gegenüber dieser Technologie. nicht nur, damit sie darauf aufbauen können, sondern auch, um die Entwicklung von StarkNet zu beeinflussen.

Wir werden Kairo auf der Grundlage der Bedürfnisse und des Feedbacks der Entwicklergemeinschaft weiterentwickeln. Wir werden diese Sprache mit neuen Features, Syntax und Builtins erweitern, die ihre Benutzerfreundlichkeit verbessern und wir werden weiterhin das Werkzeug von Kairo entwickeln: Compiler, Tracer/Debugger und Integrationen zu gemeinsamen IDDEs.

StarkNet wird Kairo unter der Haube laufen lassen.

#### **Der STARK-Software-Stack**

StarkWare hat das leistungsfähigste System im Ökosystem entwickelt und ist seit Monaten[live auf Mainnet](https://medium.com/starkware/starks-over-mainnet-b83e63db04c0)vertreten. StarkWare hat auch[ethSTARK](https://twitter.com/StarkWareLtd/status/1264911004099543040?s=20), unseren Open-Source-Prover, entwickelt, der 20X schneller ist als jeder andere Prover; es bietet sowohl[Null-Kenntnisse als auch nachquantensichere Signaturen](https://twitter.com/StarkWareLabs/status/1331930111227080709).

Unsere Skalierung*Messungen*– keine Extrapolationen oder Versprechungen – beinhalten die Verarbeitung von 300K Transaktionen in einem einzigen Nachweis auf Mainnet, erreiche[den Weltrekord in Rollup Durchsatz: 3K tps](https://twitter.com/StarkWareLtd/status/1287770381525422082?s=20). Dabei haben wir weltweit den Rekord für Rollup Gaseffizienz erreicht: 315 Gas/tx, Größenordnungen billiger als Transaktionen auf Ethereum L1.

Diese Technologie wird der Eckpfeiler der dezentralen Nachweisschicht von StarkNet sein, und damit werden wir im Rahmen der Entwicklung von StarkNet zusätzliche und erweiterte Prover freigeben (mehr dazu in einem kommenden Blog-Beitrag).

#### **StarkEx**

StarkEx ist unser L2-Skalierbarkeitsmotor. Seit Juni 2020 bedient es Kunden von[DeversiFi](https://twitter.com/deversifi)auf Mainnet. Es schaltet[dYdX](https://twitter.com/dydxprotocol)und[ImmutableX](https://twitter.com/Immutable)in wenigen Wochen an. StarkEx kann komplexe Handelslogik (Spot Trading, Derivate, NFTs) sowie Zahlungen verwalten.

Die Entwicklung von StarkEx war unsere Methode, unsere Toolchain auf die Bedürfnisse der realen Welt hin zu testen. Es gibt nichts Ähnliches zu den Anforderungen der aktuellen Anwendungen und Live-Anwender, um Tools ausgereift und weiterzuentwickeln. Es hilft uns auch zu verstehen, welche Elemente angesprochen werden müssen, um dem Ökosystem besser zu dienen – zum Beispiel Integrationen mit Brieftaschen und Blockforschern.

StarkEx ist ein Live-Beispiel für die Fähigkeit Anwendungen mit einem STARK-basierten ZK-Rollup skalieren zu können und ist die erste Anwendung in der Produktion auf Mainnet in Kairo. Daher wird es auch eine der Anwendungen sein, die auf StarkNet laufen.

![](/assets/ontheroad_03.png)

### **Der Weg vor uns**

#### **Schritt I — Planeten: Einzel-App-Rollups**

Dieser Schritt wird es Entwicklern ermöglichen, eigene skalierbare Anwendungen auf StarkNet zu erstellen und bereitzustellen.

An diesem Punkt kann jede StarkNet-Instanz eine einzelne Anwendung ausführen. Verschiedene Instanzen können verschiedene Anwendungen ausführen.\
Das StarkNet-Framework enthält Folgendes:

* Mechanismen, die notwendig sind, um STARK-Beweise für beliebige Kairoer Logik zu generieren und sie dann auf Ethereum einzureichen und zu überprüfen.
* Interaktionen mit L1 Ethereum: Ein- und Auszahlungen von L1-Token, Veröffentlichung der On-Chain-Daten, Escape Mechanisms zum Schutz von StarkNet-Benutzern vor böswilligen StarkNet-Betreibern usw.
* Verwaltung der L2-Benutzerbilanzen sowie des Speichers und Speichers der Anwendung.

Entwickler können sich ausschließlich auf den Aufbau der Geschäftslogik ihrer Anwendung konzentrieren, und gehen Sie dann in die Produktion: Deploy und führen Sie es im Maßstab auf StarkNet aus.

Was uns ermöglicht, eine general-computation skalierbare ZK-Rollup ist die Kombination von:

* Kairo, eine generelle Turing-vollständige Programmiersprache
* Unser starker STARK-Stack (Prover und Verifikator), der es ermöglicht, enorme Berechnungen in einem einzigen Nachweis zu bündeln

#### **Schritt II — Constellation: Multi-App Rollups**

Der nächste Schritt unterstützt mehrere Anwendungen, die auf derselben StarkNet-Instanz laufen und auf denselben globalen L2-Status zugreifen. Dies wird die Interoperabilität zwischen verschiedenen Anwendungen sowie die Senkung der Gaskosten aufgrund von verbesserten Skaleneffekten ermöglichen.

Kairo, der mächtige STARK-Stack und GPS verstärken den Wettbewerbsvorteil von StarkNet, um ein Multi-App Rollup zu unterstützen.

In diesem Stadium StarkNet wird ein voll funktionsfähiges Framework für*mehrere*Anwendungen mit beliebiger Geschäftslogik auf Ethereum, ausführen mit jeder Instanz, die von einem einzelnen Operator ausgeführt wird.

Ein Betreiber kann nun einen StarkNet-Knoten aufdrehen und Anwendungsentwickler können ihre Verträge darauf einsetzen. Aus der Sicht der Nutzer sieht StarkNet jetzt aus und fühlt sich wie Ethereum, mit einer höheren Skala.

#### **Schritt III — Universum: dezentralisiertes Rollup**

Der letzte Schritt in der Entwicklung von StarkNet ist die Dezentralisierung seiner Operation.

Inspirieren Sie R&D-Fragen, die wir jetzt in Angriff nehmen, wie (i) die Verwendung von ZK-Rollups zur Verbesserung der Konsensfindungsmechanismen, und (ii) die Entwicklung krypto-ökonomischer Mechanismen, um die dezentralen StarkNet-Mitarbeiter und -Operatoren (Transaktionssequenzer, Prover usw.) anzuregen. um effizient, fair und sicher zu funktionieren.

### **Schlussfolgerung**

StarkWare baut StarkNet, ein dezentralisiertes genehmigungsfreies STARK-basiertes L2 ZK-Rollup über Ethereum, das general-computation basierend auf der Kairoer Sprache unterstützt.

StarkNet ermöglicht Anwendungen, die skaliert werden können, ohne die Sicherheit zu beeinträchtigen Benutzer, um angemessene Transaktionsgebühren zu zahlen, und das gesamte Ökosystem zu wachsen und sein Versprechen zu erfüllen.

Wir laden die Entwickler-Community gerne ein,[uns](https://twitter.com/StarkWareLtd)auf dieser Reise zu begleiten.

**Update (Nov. 2021):**StarkNet Alpha ist live auf Ethereum Mainnet