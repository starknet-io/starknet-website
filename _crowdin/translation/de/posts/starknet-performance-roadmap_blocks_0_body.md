### TL;DR

* Gültigkeits-Rollups sind im Durchsatz nicht auf die gleiche Weise wie L1s begrenzt. Dies führt zu potenziell viel höheren TPS bei L2-Gültigkeits-Rollups.
* Die Leistungs-Roadmap von Starknet befasst sich mit einem Schlüsselelement im System: dem Sequenzer.
* Wir präsentieren hier die Roadmap für Leistungsverbesserungen:\
  – Sequenzer-Parallelisierung\
  – Eine neue Rust-Implementierung für die Cairo VM\
  – Sequenzer-Neuimplementierung in Rust\
* Da Prüfer kampferprobt sind, stellen sie nicht den Engpass dar und können viel mehr bewältigen als jetzt!

### Einführung

Starknet wurde vor fast einem Jahr im Mainnet gestartet. Wir begannen mit dem Aufbau von Starknet, indem wir uns auf die Funktionalität konzentrierten. Jetzt verlagern wir den Fokus auf die Verbesserung der Leistung mit einer Reihe von Schritten, die dazu beitragen, das Starknet-Erlebnis zu verbessern.

In diesem Beitrag erklären wir, warum es eine Vielzahl von Optimierungen gibt, die nur bei Gültigkeits-Rollups anwendbar sind, und wir werden unseren Plan zur Implementierung dieser Schritte auf Starknet teilen. Einige dieser Schritte sind bereits in Starknet Alpha 0.10.2 implementiert, das am 16. November auf Testnet und gestern auf Mainnet veröffentlicht wurde. Aber bevor wir die Lösungen besprechen, werfen wir einen Blick auf die Einschränkungen und ihre Ursachen.

### Blockeinschränkungen: Gültigkeits-Rollups im Vergleich zu L1

Ein möglicher Ansatz zur Erhöhung der Blockchain-Skalierbarkeit und zur Erhöhung der TPS wäre die Aufhebung der Blockbeschränkungen (in Bezug auf Gas/Größe) bei gleichzeitiger Beibehaltung der Blockzeit. Dies würde einen höheren Aufwand seitens der Blockproduzenten (Validatoren auf L1, Sequenzer auf L2) erfordern und erfordert daher eine effizientere Implementierung dieser Komponenten. Zu diesem Zweck verlagern wir den Fokus nun auf Starknet-Sequenzeroptimierungen, die wir in den folgenden Abschnitten detaillierter beschreiben.

Hier stellt sich natürlich eine Frage. Warum sind Sequencer-Optimierungen auf Gültigkeits-Rollups beschränkt, das heißt, warum können wir nicht die gleichen Verbesserungen auf L1 implementieren und die Komplexität von Gültigkeits-Rollups vollständig vermeiden? Im nächsten Abschnitt behaupten wir, dass zwischen den beiden ein grundlegender Unterschied besteht, der eine Vielzahl von Optimierungen auf L2 ermöglicht, die auf L1 nicht anwendbar sind.

### Warum ist der L1-Durchsatz begrenzt?

Leider birgt die Aufhebung der Blockbeschränkungen auf L1 eine große Gefahr. Indem wir die Wachstumsrate der Kette erhöhen, erhöhen wir auch die Anforderungen von Full Nodes, die versuchen, mit dem neuesten Stand Schritt zu halten. Da vollständige L1-Knoten den gesamten Verlauf erneut ausführen müssen, stellt ein starker Anstieg der Blockgröße (in Bezug auf Gas) eine erhebliche Belastung für sie dar, was wiederum dazu führt, dass schwächere Maschinen aus dem System ausscheiden und die Möglichkeit zum Ausführen vollständiger Knoten verloren geht nur für ausreichend große Einheiten. Dies führt dazu, dass Benutzer den Status nicht selbst überprüfen und vertrauenswürdig am Netzwerk teilnehmen können.

Dies führt uns zu dem Verständnis, dass der L1-Durchsatz begrenzt werden sollte, um ein wirklich dezentrales und sicheres System aufrechtzuerhalten.

### Warum wirken sich dieselben Barrieren nicht auf Gültigkeits-Rollups aus?

Erst wenn wir die Full-Node-Perspektive betrachten, erkennen wir die wahre Stärke, die Validitäts-Rollups bieten. Ein L1-Vollknoten muss den gesamten Verlauf erneut ausführen, um die Richtigkeit des aktuellen Status sicherzustellen. Starknet-Knoten müssen nur STARK-Beweise verifizieren, und diese Verifizierung erfordert exponentiell weniger Rechenressourcen. Insbesondere muss die Synchronisierung von Grund auf nicht mit der Ausführung verbunden sein; Ein Knoten kann von seinen Peers einen Dump des aktuellen Status erhalten und nur über einen STARK-Beweis überprüfen, ob dieser Status gültig ist. Dadurch können wir den Durchsatz des Netzwerks erhöhen, ohne die Anforderungen des gesamten Knotens zu erhöhen.

Wir kommen daher zu dem Schluss, dass der L2-Sequenzer einem ganzen Spektrum an Optimierungen unterliegt, die auf einem L1 nicht möglich sind.

### Leistungs-Roadmap voraus

In den nächsten Abschnitten diskutieren wir, welche davon derzeit für den Starknet-Sequenzer geplant sind.

### Sequenzer-Parallelisierung

Der erste Schritt unserer Roadmap bestand darin, eine Parallelisierung der Transaktionsausführung einzuführen. Dies wurde in Starknet Alpha 0.10.2 eingeführt, das gestern im Mainnet veröffentlicht wurde. Wir befassen uns nun mit der Bedeutung von Parallelisierung (dies ist ein halbtechnischer Abschnitt; um mit der Roadmap fortzufahren, springen Sie zum nächsten Abschnitt).

Was bedeutet also „Transaktionsparallelisierung“? Naiverweise ist es unmöglich, einen Block von Transaktionen parallel auszuführen, da verschiedene Transaktionen voneinander abhängig sein können. Dies wird im folgenden Beispiel veranschaulicht. Betrachten Sie einen Block mit drei Transaktionen desselben Benutzers:

* Transaktion A: USDC gegen ETH tauschen
* Transaktion B: ETH für einen NFT bezahlen
* Transaktion C: USDT gegen BTC tauschen

Natürlich muss Tx A vor Tx B erfolgen, aber Tx C ist völlig unabhängig von beiden und kann parallel ausgeführt werden. Wenn die Ausführung jeder Transaktion 1 Sekunde benötigt, kann die Blockproduktionszeit durch Einführung der Parallelisierung von 3 Sekunden auf 2 Sekunden reduziert werden.

Der Kern des Problems besteht darin, dass wir die Transaktionsabhängigkeiten nicht im Voraus kennen. In der Praxis sehen wir erst, wenn wir Transaktion B aus unserem Beispiel ausführen, dass sie auf Änderungen beruht, die von Transaktion A vorgenommen wurden. Formaler ergibt sich die Abhängigkeit aus der Tatsache, dass Transaktion B aus Speicherzellen liest, in die Transaktion A geschrieben hat. Wir können uns die Transaktionen so vorstellen, dass sie einen Abhängigkeitsgraphen bilden, in dem es eine Kante von Transaktion A zu Transaktion B gibt, wenn A in eine Speicherzelle schreibt, die von B gelesen wird und daher vor B ausgeführt werden muss. Die folgende Abbildung zeigt eine Beispiel für einen solchen Abhängigkeitsgraphen:

![](https://lh5.googleusercontent.com/OXpkhtGdVlJsLZ9fkz4bFdTIqkOyvGYDaqP3mz_XZSPmPtqy7uZFwlOIHy8e3E4N4rGEPBj0kBpYTsXfIS7q3WURb6kO7HIIZ9cWHaADaPVZoCTdUEQ-uBDLz8e2so0smCleiJRZyZqVLaDVGX3aiJo)

Im obigen Beispiel kann jede Spalte parallel ausgeführt werden, und dies ist die optimale Anordnung (obwohl wir naiverweise die Transaktionen 1–9 nacheinander ausgeführt hätten).

Um die Tatsache zu überwinden, dass der Abhängigkeitsgraph nicht im Voraus bekannt ist, führen wir eine optimistische Parallelisierung im Geiste von [BLOCK-STM](https://malkhi.com/posts/2022/04/block-stm/) , entwickelt von Aptos Labs, in den Starknet-Sequenzer ein. Unter diesem Paradigma versuchen wir optimistisch, Transaktionen parallel auszuführen und bei Feststellung einer Kollision erneut auszuführen. Beispielsweise können wir die Transaktionen 1–4 aus Abbildung 1 parallel ausführen, nur um anschließend herauszufinden, dass Tx4 von Tx1 abhängt. Daher war seine Ausführung nutzlos (wir haben es relativ zu demselben Status ausgeführt, für den wir Tx1 ausgeführt haben, während wir es für den Status hätten ausführen sollen, der sich aus der Anwendung von Tx1 ergibt). In diesem Fall führen wir Tx4 erneut aus.

Beachten Sie, dass wir zusätzlich zur optimistischen Parallelisierung viele Optimierungen hinzufügen können. Anstatt beispielsweise naiv auf das Ende jeder Ausführung zu warten, können wir eine Ausführung abbrechen, sobald wir eine Abhängigkeit finden, die sie ungültig macht.

Ein weiteres Beispiel ist die Optimierung der Auswahl der erneut auszuführenden Transaktionen. Angenommen, ein Block, der aus allen Transaktionen aus Abbildung 1 besteht, wird in einen Sequenzer mit fünf CPU-Kernen eingespeist. Zunächst versuchen wir, die Transaktionen 1–5 parallel auszuführen. Wenn die Reihenfolge der Fertigstellung Tx2, Tx3, Tx4, Tx1 und schließlich Tx5 war, dann finden wir die Abhängigkeit Tx1→Tx4 erst, nachdem Tx4 bereits ausgeführt wurde – was darauf hinweist, dass es erneut ausgeführt werden sollte. Naiverweise möchten wir vielleicht auch Tx5 erneut ausführen, da es sich angesichts der neuen Ausführung von Tx4 möglicherweise anders verhält. Anstatt jedoch einfach alle Transaktionen nach dem nun ungültig gewordenen Tx4 erneut auszuführen, können wir den Abhängigkeitsgraphen durchlaufen, der aus den Transaktionen erstellt wurde, deren Ausführung bereits beendet wurde, und nur Transaktionen erneut ausführen, die von Tx4 abhingen.

### Eine neue Rust-Implementierung für die Cairo-VM

Intelligente Verträge in Starknet werden in Kairo geschrieben und innerhalb der Cairo-VM ausgeführt, deren Spezifikation im [Cairo Paper](https://eprint.iacr.org/2021/1063.pdf)enthalten ist. Derzeit verwendet der Sequenzer eine [Python-Implementierung](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/cairo/lang/vm) der Cairo-VM. Um die Leistung der VM-Implementierung zu optimieren, haben wir versucht, die VM in Rust neu zu schreiben. Dank der großartigen Arbeit von [Lambdaclass](https://lambdaclass.com/), die mittlerweile ein unschätzbar wertvolles Team im Starknet-Ökosystem sind, werden diese Bemühungen bald Früchte tragen.

Die Rust-Implementierung der VM, [cairo-rs](https://github.com/lambdaclass/cairo-rs), kann jetzt nativen Cairo-Code ausführen. Der nächste Schritt ist die Abwicklung der Smart-Contracts-Ausführung und der Integration mit dem Python-Sequenzer. Nach der Integration in Cairo-RS wird die Leistung des Sequenzers voraussichtlich erheblich verbessert.

### Neuimplementierung des Sequenzers in Rust

Unser Wechsel von Python zu Rust zur Verbesserung der Leistung beschränkt sich nicht auf die Cairo VM. Neben den oben genannten Verbesserungen planen wir, den Sequenzer in Rust von Grund auf neu zu schreiben. Zusätzlich zu den internen Vorteilen von Rust bietet dies die Möglichkeit für weitere Optimierungen des Sequenzers. Um nur einige zu nennen: Wir können die Vorteile von cairo-rs ohne den Aufwand der Python-Rost-Kommunikation genießen und die Art und Weise, wie der Zustand gespeichert und abgerufen wird (die heute auf der [Patricia-Trie-Struktur](https://docs.starknet.io/documentation/develop/State/starknet-state/#state_commitment)basiert).

### Was ist mit Prüfern?

In diesem Beitrag haben wir das vielleicht berühmteste Element von Validitäts-Rollups – den Prüfer – nicht erwähnt. Man könnte sich vorstellen, dass sie als wohl anspruchsvollste Komponente der Architektur den Flaschenhals und damit den Schwerpunkt der Optimierung darstellen sollte. Interessanterweise sind es die eher „Standard“-Komponenten, die jetzt den Flaschenhals von Starknet darstellen. Heutzutage können wir, insbesondere mit [rekursiven Beweisen](https://medium.com/starkware/recursive-starks-78f8dd401025), viel mehr Transaktionen als den aktuellen Datenverkehr auf Testnet/Mainnet in einen Beweis unterbringen. Tatsächlich werden Starknet-Blöcke heute neben StarkEx-Transaktionen eingesetzt, wobei letztere manchmal mehrere hunderttausend NFT-Mints nach sich ziehen können.

### Zusammenfassung

Parallelisierung, Rust und mehr – machen Sie sich auf ein verbessertes TPS in den kommenden Starknet-Versionen gefasst.