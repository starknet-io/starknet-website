#### TL;DR

Wir bauen Starknet in vier Schritten auf:

* Schritt 0 – Grundlagen (abgeschlossen*)
* Schritt I – Planeten: Single-App-Rollups
* Schritt II – Konstellationen: Multi-App-Rollups
* Schritt III – Universum: Ein dezentrales Rollup

Wir gehen davon aus, dass Schritt I in wenigen Monaten implementiert sein wird und wir bis Ende 2021 auf dem besten Weg zu Schritt II & III sind.

### Einführung

StarkWare baut Starknet auf, ein dezentrales, erlaubnisloses und zensurresistentes STARK-basiertes L2 ZK-Rollup, das allgemeine Berechnungen über Ethereum unterstützt. Es basiert auf der Turing-vollständigen [-Sprache](https://www.cairo-lang.org/).

Entwickler, Benutzer und Starknet-Knoten können alles tun, was man von einem erlaubnislosen L2-Rollup erwartet: Entwickler können Anwendungen erstellen, die ihre eigene Geschäftslogik implementieren, und diese auf Starknet bereitstellen. Benutzer können Transaktionen zur Ausführung an Starknet senden, genau wie sie heute mit Ethereum interagieren. Starknet-Knoten und -Teilnehmer erhalten kryptoökonomische Anreize, um sicherzustellen, dass das Netzwerk effizient und fair funktioniert.

Alle Starknet-Transaktionen werden regelmäßig gebündelt und ihre Gültigkeit wird in einem STARK-Beweis nachgewiesen, der auf Ethereum verifiziert wird. Da der Rechenaufwand zur Verifizierung von STARK-Beweisen im Vergleich zu den nachgewiesenen Berechnungen exponentiell gering ist, wird Starknet Ethereum um Größenordnungen skalieren.

Da alle Starknet-Zustandsübergänge STARK-geprüft sein werden, werden auf Ethereum nur gültige Übergänge akzeptiert. Alle zur Rekonstruktion des vollständigen Starknet-Zustands erforderlichen Daten werden in der Kette veröffentlicht. Jeder kann seinen eigenen Starknet-Knoten betreiben. Diese Eigenschaften machen Starknet genauso sicher und erlaubnisfrei wie Ethereum.

Wir sind seit drei Jahren dabei und haben bereits einige bemerkenswerte Meilensteine bei der Umwandlung von „Moon Math“ in produktionstaugliche und effiziente Software erreicht, die auf Ethereum läuft. Die Art und Weise, wie StarkWare vorgeht, besteht darin, zunächst die schwierigen Probleme anzugehen, die Kerntechnologie aufzubauen und sie dann nach und nach für die Produktion freizugeben. Wir werden auf diese Weise weiterbauen, während wir Starknet zur Vollendung bringen.

Schritt 0 – Grundlagen

StarkWare hat einige wichtige Grundlagen für Starknet geschaffen.

#### Kairo

[Cairo](https://twitter.com/StarkWareLtd/status/1300353049836376066?s=20) ist unser Turing-Complete High-Level Language & Framework zur Erstellung von STARK-Beweisen für allgemeine Berechnungen. Anstatt komplexe „Schaltkreise“ oder AIRs von Hand zu erstellen, kann ein Anwendungsentwickler Cairo verwenden, um beliebige Geschäftslogiken zu definieren, sie außerhalb der Kette beweisen und in der Kette verifizieren zu lassen. Cairo befindet sich [in der Produktion im Mainnet](https://twitter.com/StarkWareLtd/status/1320695603492507648?s=20)und ist auch [für Entwickler verfügbar](http://cairo-lang.org/).

In ein paar Wochen werden wir auf einem öffentlichen Ethereum-Testnetz eine Alpha-Version von Kairos Generic Proof Service (GPS) starten. Dadurch können Entwickler ihre eigenen Anwendungen mit Cairo erstellen und dabei jede gewünschte Geschäftslogik implementieren. Sie senden ihren Kairo-Code zur Überprüfung an das GPS und verifizieren ihn dann in der Kette.

GPS ermöglicht einen einzigen Beweis, um die Integrität der Ausführung völlig separater und unabhängiger Anwendungen sicherzustellen, und gibt diesen Anwendungen so die Möglichkeit, den Gasaufwand für die Beweisüberprüfung zwischen ihnen zu amortisieren.

Kairo und GPS sind die Basis von Starknet – unsere Entscheidung, beides an Entwickler auszulagern, ermöglicht ihnen einen frühzeitigen Zugang zu dieser Technologie, nicht nur, damit sie darauf aufbauen können, sondern auch, damit sie die Entwicklung von Starknet beeinflussen können.

Wir werden Cairo basierend auf den Bedürfnissen und dem Feedback der Entwickler-Community weiterentwickeln. Wir werden diese Sprache mit neuen Funktionen, Syntax und integrierten Funktionen erweitern, die ihre Benutzerfreundlichkeit verbessern, und wir werden die Cairo-Tools weiter entwickeln und verbessern: Compiler, Tracer/Debugger und Integrationen in gängige IDEs.

Starknet wird Cairo unter der Haube haben.

#### Der STARK-Software-Stack

StarkWare hat das leistungsstärkste Proofsystem im Ökosystem entwickelt und ist seit Monaten [live auf Mainnet](https://medium.com/starkware/starks-over-mainnet-b83e63db04c0). StarkWare hat außerdem [ethSTARK](https://twitter.com/StarkWareLtd/status/1264911004099543040?s=20)entwickelt, unseren Open-Source-Prover, der 20-mal schneller ist als jeder andere Prover; Es bietet sowohl [Zero-Knowledge- als auch Post-Quantum-Secure-Signaturen](https://twitter.com/StarkWareLabs/status/1331930111227080709).

Unsere Skalierungsmessungen – weder Extrapolationen noch Versprechen – umfassen die Verarbeitung von 300.000 Transaktionen in einem einzigen Proof im Mainnet und erreichen damit [Weltrekord im Rollup-Durchsatz: 3.000 tps](https://twitter.com/StarkWareLtd/status/1287770381525422082?s=20). Dabei haben wir den Weltrekord für die Rollup-Gas-Effizienz erreicht: 315 Gas/tx, um Größenordnungen günstiger als Transaktionen auf Ethereum L1.

Diese Technologie wird der Eckpfeiler der dezentralen Prüfschicht von Starknet sein, und daher werden wir im Rahmen der Entwicklung von Starknet zusätzliche und verbesserte Prüfer veröffentlichen (mehr dazu in einem kommenden Blogbeitrag).

#### StarkEx

StarkEx ist unsere L2-Skalierbarkeits-Engine. Seit Juni 2020 bedient es [Kunden von DeversiFi](https://twitter.com/deversifi)im Mainnet. Es wird in wenigen Wochen sowohl [dYdX](https://twitter.com/dydxprotocol) als auch [ImmutableX](https://twitter.com/Immutable) mit Strom versorgen. StarkEx kann komplexe Handelslogiken (Spothandel, Derivate, NFTs) sowie Zahlungen abwickeln.

Die Entwicklung von StarkEx war unsere Art, unsere Toolchain zu verbessern und sie anhand realer Anforderungen zu testen. Es gibt nichts Besseres als die Anforderungen tatsächlicher Anwendungen und Live-Benutzer, um Tools bei der Reifung und Weiterentwicklung zu unterstützen. Es hilft uns auch zu verstehen, welche Elemente angegangen werden müssen, um dem Ökosystem besser zu dienen – zum Beispiel Integrationen mit Wallets und Block-Explorern.

StarkEx ist ein Live-Beispiel für die Möglichkeit, Anwendungen mithilfe eines STARK-basierten ZK-Rollups zu skalieren, und die erste in Kairo geschriebene Anwendung in Produktion auf dem Mainnet. Daher wird es auch eine der Anwendungen sein, die auf Starknet laufen.

### Die Straße entlang

#### Schritt I – Planeten: Single-App-Rollups

Dieser Schritt wird es Entwicklern ermöglichen, ihre eigenen skalierbaren Anwendungen auf Starknet zu erstellen und bereitzustellen.

Zu diesem Zeitpunkt kann jede Starknet-Instanz eine einzelne Anwendung ausführen. Verschiedene Instanzen können unterschiedliche Anwendungen ausführen.\
Das Starknet-Framework umfasst Folgendes:

* Erforderliche Mechanismen, um STARK-Beweise für beliebige Kairo-Logik zu generieren und diese dann auf Ethereum einzureichen und zu verifizieren.
* Interaktionen mit L1 Ethereum: Ein- und Auszahlungen von L1-Tokens, Veröffentlichung der On-Chain-Daten, Escape-Mechanismen zum Schutz von Starknet-Benutzern vor böswilligen Starknet-Betreibern usw.
* Verwaltung der L2-Benutzerguthaben sowie des Speichers und Arbeitsspeichers der Anwendung.

Entwickler können sich ausschließlich auf den Aufbau der Geschäftslogik ihrer Anwendung konzentrieren und dann mit der Produktion beginnen: Sie können sie in großem Maßstab auf Starknet bereitstellen und ausführen.

Was es uns ermöglicht, ein skalierbares ZK-Rollup für allgemeine Berechnungen zu erstellen, ist die Kombination aus:

* Cairo, eine Allzweck-Turing-vollständige Programmiersprache
* Unser starker STARK-Stack (Prover und Verifier), der es ermöglicht, enorme Berechnungen in einem einzigen Beweis zu bündeln

#### Schritt II – Konstellationen: Multi-App-Rollups

Im nächsten Schritt werden mehrere Anwendungen unterstützt, die auf derselben Starknet-Instanz ausgeführt werden und auf denselben globalen L2-Status zugreifen. Dies wird die Interoperabilität zwischen verschiedenen Anwendungen ermöglichen und aufgrund verbesserter Skaleneffekte die Gaskosten senken.

Cairo, der leistungsstarke STARK-Stack und GPS verstärken den Wettbewerbsvorteil von Starknet bei der Unterstützung eines Multi-App-Rollups.

Zu diesem Zeitpunkt wird Starknet ein voll funktionsfähiges Framework für die Ausführung mehrerer Anwendungen mit beliebiger Geschäftslogik auf Ethereum sein, wobei jede Instanz von einem einzelnen Betreiber betrieben wird.

Ein Betreiber kann nun einen Starknet-Knoten einrichten und Anwendungsentwickler können ihre Verträge darauf bereitstellen. Aus der Sicht der Benutzer sieht Starknet jetzt wie Ethereum aus und fühlt sich auch so an, mit einem höheren Maßstab.

#### Schritt III – Universum: Dezentrales Rollup

Der letzte Schritt in der Entwicklung von Starknet ist die Dezentralisierung seines Betriebs.

Zu den interessanten F&E-Fragen, mit denen wir uns jetzt befassen und die diese Phase betreffen, gehören (i) die Verwendung von ZK-Rollups zur Verbesserung der Konsensfindungsmechanismen und (ii) die Entwicklung kryptoökonomischer Mechanismen, um Anreize für die dezentralen Starknet-Mitwirkenden und -Betreiber zu schaffen (Transaktionssequenzer, Prüfer usw.), um effizient, fair und sicher zu funktionieren.

### Abschluss

StarkWare baut Starknet auf, ein dezentrales, erlaubnisloses, von STARK betriebenes L2 ZK-Rollup über Ethereum, das allgemeine Berechnungen basierend auf der Kairoer Sprache unterstützt.

Mit Starknet können Anwendungen ohne Kompromisse bei der Sicherheit skaliert werden, Benutzer können angemessene Transaktionsgebühren zahlen und das gesamte Ökosystem kann erheblich wachsen und sein Versprechen erfüllen.

Wir laden die Entwickler-Community gerne [, sich uns auf dieser Reise](https://twitter.com/StarkWareLtd).

Update (November 2021): Starknet Alpha ist live im Ethereum Mainnet