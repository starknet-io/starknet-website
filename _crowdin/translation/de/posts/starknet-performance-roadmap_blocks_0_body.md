### TL;DR

* Validitäts-Rollups sind im Durchsatz nicht auf die gleiche Weise begrenzt wie L1s. Dies führt zu einem potenziell viel höheren TPS auf L2-Gültigkeitsrollen.
* Die StarkNet-Performance-Roadmap adressiert ein Schlüsselelement im System: den Sequenzer.
* Wir präsentieren hier die Roadmap für Performance-Verbesserungen:\
  – Sequenzer-Parallelisierung\
  – Eine neue Rost-Implementierung für den Kairo VM\
  – Sequenzer-Re-Implementierung in Rost\
* Beweise, die so getestet sind, wie sie sind, sind nicht der Engpass und können viel mehr handhaben als jetzt!

### Einleitung

StarkNet startete vor fast einem Jahr auf Mainnet. Wir haben mit dem Aufbau von StarkNet begonnen, indem wir uns auf die Funktionalität konzentrieren. Jetzt setzen wir den Fokus auf die Verbesserung der Leistung mit einer Reihe von Schritten, die dazu beitragen, das StarkNet-Erlebnis zu verbessern.

In diesem Beitrag erläutern wir, warum es eine breite Palette von Optimierungen gibt, die nur bei den Gültigkeitsaufnahmen anwendbar sind, und wir teilen unseren Plan, diese Schritte auf StarkNet umzusetzen. Einige dieser Schritte sind bereits in StarkNet Alpha 0.10.2 implementiert, die auf Testnet am 16. November und gestern auf Mainnet veröffentlicht wurde. Doch bevor wir über die Lösungen diskutieren, sollten wir uns die Grenzen und ihre Ursache anschauen.

### Blockbeschränkungen: Gültigkeits-Rollups versus L1

Ein potenzieller Ansatz zur Erhöhung der Skalierbarkeit der Blockketten und zur Erhöhung des TPS wäre, die Blockbeschränkungen (in Bezug auf Gas/Größe) aufzuheben und gleichzeitig die Blockzeit konstant zu halten. Dies würde von den Blockherstellern größere Anstrengungen erfordern (Validatoren auf L1, -Sequenzer auf L2) erfordern daher eine effizientere Implementierung dieser Komponenten. Zu diesem Zweck verlagern wir nun den Fokus auf StarkNet-Sequenzer-Optimierungen, die wir in den folgenden Abschnitten detaillierter beschreiben.

Hier stellt sich eine natürliche Frage. Warum sind Sequenzer-Optimierungen auf Rollups beschränkt, das heißt, Warum können wir die gleichen Verbesserungen bei L1 nicht durchführen und die Komplexität von Gültigkeitsrollups gänzlich vermeiden? Im nächsten Abschnitt behaupten wir, dass es einen grundlegenden Unterschied zwischen den beiden gibt, erlaubt eine breite Palette von Optimierungen auf L2, die nicht auf L1 anwendbar sind.

### Warum ist der L1-Durchsatz begrenzt?

Leider leidet die Aufhebung der Blockbeschränkungen für L1 unter einer großen Fallgrube. Durch die Erhöhung der Wachstumsrate der Kette erhöhen wir auch die Anforderungen von vollständigen Knoten, die versuchen, mit dem neuesten Stand Schritt zu halten. Da L1 vollständige Knoten den gesamten Verlauf erneut ausführen müssen eine hohe Erhöhung der Blockgröße (in Bezug auf Gas) belastet sie erheblich wieder dazu führen, dass schwächere Maschinen aus dem System fallen lassen und die Fähigkeit, vollständige Knoten nur zu großen Entitäten laufen lassen. Dadurch werden die Benutzer nicht in der Lage sein, den Status selbst zu überprüfen und sich vertrauenslos am Netzwerk zu beteiligen.

Damit bleibt uns klar, dass der L1-Durchsatz begrenzt werden sollte, um ein wirklich dezentralisiertes und sicheres System aufrechtzuerhalten.

### Warum beeinträchtigen die gleichen Hindernisse nicht die Gültigkeitsaufgaben?

**Nur wenn wir die vollständige Knotenperspektive betrachten, sehen wir die wahre Kraft, die durch Gültigkeitsrollungen angeboten wird.**Ein L1 vollständiger Knoten muss den gesamten Verlauf erneut ausführen, um die Korrektheit des aktuellen Status zu gewährleisten. StarkNet-Knoten müssen nur STARK-Beweise verifizieren, und diese Überprüfung benötigt eine exponentiell geringere Menge an Rechenmitteln. Insbesondere muss die Synchronisierung von Grund auf keine Ausführung beinhalten; ein Knoten kann eine Ablage des aktuellen Status von seinen Partnern erhalten und nur über einen STARK-Nachweis überprüfen, ob dieser Status gültig ist. Dies erlaubt uns, den Durchsatz des Netzwerks zu erhöhen, ohne die Anforderungen vom vollständigen Knoten zu erhöhen.

Wir kommen daher zu dem Schluss, dass der L2-Sequenzer einem ganzen Spektrum von Optimierungen unterliegt, die auf einem L1 nicht möglich sind.

### Performance-Roadmap voraus

In den nächsten Abschnitten besprechen wir, welche dieser momentan für den StarkNet-Sequenzer geplant sind.

### Sequenzer-Parallelisierung

Der erste Schritt auf unserem Fahrplan bestand darin, eine Parallelisierung der Transaktionsausführung einzuführen. Dies wurde in StarkNet alpha 0.10.2 eingeführt, die gestern auf Mainnet veröffentlicht wurde. Wir tauchen nun in das, was Parallelisierung ist (dies ist ein semi-technischer Abschnitt, um auf der Roadmap fortzufahren, springen zum nächsten Abschnitt).

Was bedeutet also „Transaktionsparallelisierung“? Naively, das Ausführen eines Blocks von Transaktionen parallel ist unmöglich, da verschiedene Transaktionen abhängig sein können. Dies wird im folgenden Beispiel veranschaulicht. Betrachten Sie einen Block mit drei Transaktionen desselben Benutzers:

* Transaktion A: USDC für ETH tauschen
* Transaktion B: Zahlung ETH für NFT
* Transaktion C: USDT für BTC tauschen

Natürlich muss Tx A vor Tx B passieren, aber Tx C ist völlig unabhängig von beiden und kann parallel ausgeführt werden. Wenn jede Transaktion 1 Sekunde benötigt, kann die Blockproduktionszeit durch Einführung der Parallelisierung von 3 Sekunden auf 2 Sekunden reduziert werden.

Der Kern des Problems ist, dass wir die Transaktionsabhängigkeiten nicht im Voraus kennen. In der Praxis sehen wir, erst wenn wir Transaktionen B von unserem Beispiel aus ausführen, dass sie auf Änderungen der Transaktion A beruhen. Formell ergibt sich die Abhängigkeit aus der Tatsache, dass die Transaktion B aus Speicherzellen liest, an die die Transaktion A geschrieben hat. Wir können uns vorstellen, dass die Transaktionen ein Abhängigkeitsdiagramm bilden, wobei es einen Rand von der Transaktion A bis zur Transaktion B iff A in eine Speicherzelle gibt, die von B gelesen wird und muss daher vor B ausgeführt werden. Die folgende Abbildung zeigt ein Beispiel für ein solches Abhängigkeitsdiagramm:

![](https://miro.medium.com/max/641/0*I-qGgxdJJmqmgZWM)

Im obigen Beispiel kann jede Spalte parallel ausgeführt werden, und dies ist die optimale Anordnung (während wir naiv Transaktionen 1–9 sequentiell ausgeführt hätten).

Um die Tatsache zu überwinden, dass das Abhängigkeitsdiagramm nicht im Voraus bekannt ist, führen wir***optimistische Parallelisierung***ein, im Geiste von[BLOCK-STM](https://malkhi.com/posts/2022/04/block-stm/)entwickelt von Aptos Labs, zum StarkNet-Sequenzer. Unter diesem Paradigma versuchen wir optimistisch, Transaktionen parallel auszuführen und bei der Suche nach einer Kollision erneut auszuführen. Zum Beispiel können wir Transaktionen 1–4 parallel von Abbildung 1 ausführen, nur um anschließend festzustellen, dass Tx4 von Tx1 abhängt. Daher war seine Hinrichtung nutzlos (wir haben sie relativ zu dem gleichen Zustand ausgeführt gegen den wir Tx1 geführt haben, obwohl wir es gegen den Staat hätten laufen sollen, der aus der Anwendung von Tx1 resultiert. In diesem Fall werden wir Tx4 erneut ausführen.

Beachten Sie, dass wir zusätzlich zur optimistischen Parallelisierung viele Optimierungen hinzufügen können. So können wir zum Beispiel, anstatt naiv auf das Ende jeder Hinrichtung zu warten, eine Hinrichtung abbrechen, sobald wir eine Abhängigkeit finden, die sie außer Kraft setzt.

Ein weiteres Beispiel ist die Optimierung der Auswahl, welche Transaktionen neu ausgeführt werden sollen. Nehmen wir an, dass ein Block, der aus allen Transaktionen von Abbildung 1 besteht, in einen Sequenzer mit fünf CPU-Kernen eingespeist wird. Zuerst versuchen wir, Transaktionen 1–5 parallel auszuführen. Wenn die Reihenfolge der Fertigstellung Tx2, Tx3, Tx4, Tx1 und schließlich Tx5 war dann werden wir die Abhängigkeit Tx1·Tx4 erst finden, nachdem Tx4 bereits ausgeführt wurde — was darauf hinweist, dass sie erneut ausgeführt werden soll. Naively können wir auch Tx5 erneut ausführen wollen, da es sich aufgrund der neuen Ausführung von Tx4 möglicherweise anders verhalten kann. Anstatt jedoch alle Transaktionen nach dem nun ungültigen Tx4 erneut auszuführen können wir die Abhängigkeitsgrafik aus den Transaktionen durchlaufen, deren Ausführung bereits beendet hat, und nur Transaktionen, die von Tx4 abhängen, erneut ausführen.

### Eine neue Rost-Implementierung für den Cairo-VM

Intelligente Verträge in StarkNet sind in Kairo geschrieben und werden innerhalb der Kairo-VM ausgeführt, welche Spezifikation im[Kairo-Briefpapier](https://eprint.iacr.org/2021/1063.pdf) erscheint. Derzeit verwendet der Sequenzer eine[Python-Implementierung](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/cairo/lang/vm)der Kairo-VM. Um die VM-Implementierungsleistung zu optimieren, haben wir uns bemüht, den VM rost neu zu schreiben. Dank der großartigen Arbeit von[Lambdaclass](https://lambdaclass.com/), die inzwischen ein unschätzbares Team im StarkNet Ökosystem sind, wird diese Anstrengung bald verwirklicht werden.

Die Rost-Implementierung des VM,[Kairo-rs](https://github.com/lambdaclass/cairo-rs), kann nun den nativen Kairo-Code ausführen. Der nächste Schritt ist die Abwicklung von intelligenten Aufträgen und Integrationen mit dem pythonischen Sequenzer. Einmal in Kairors integriert, wird eine deutliche Verbesserung der Performance des Sequenzers erwartet.

### Sequenzer-Neuimplementierung in Rost

Unser Wechsel von Python zu Rost zur Leistungssteigerung ist nicht auf den Kairo VM beschränkt. Neben den oben genannten Verbesserungen planen wir, den Sequenzer von Grund auf neu zu schreiben. Zusätzlich zu den internen Vorteilen von Rust bietet dies eine Möglichkeit für weitere Optimierungen für den Sequenzer. Wenn wir ein Paar aufzählen, können wir die Vorteile von Kairors ohne den Overhead der Python-Rost Kommunikation genießen und wir können die Art und Weise, wie der Zustand gespeichert und zugegriffen wird, komplett neu gestalten (was heute auf der[Patricia-Trie Struktur](https://docs.starknet.io/documentation/develop/State/starknet-state/#state_commitment) basiert).

### Wie sieht es mit den Beweisen aus?

Während dieses gesamten Beitrags haben wir das vielleicht berühmteste Element der Gültigkeitsrollups nicht erwähnt – den Beweis. Man könnte sich vorstellen, dass die wohl anspruchsvollste Komponente der Architektur sein sollte, es sollte der Engpass und damit der Schwerpunkt der Optimierung. Interessanterweise sind es nun die eher „Standardkomponenten“ die Engpässe von StarkNet. Heute, insbesondere mit[rekursiven Beweisen](https://medium.com/starkware/recursive-starks-78f8dd401025)können wir viel mehr Transaktionen als der aktuelle Datenverkehr auf Testnet/Mainnet in einen Beweis einfügen. Tatsächlich sind StarkNet-Blöcke heute neben StarkEx-Transaktionen nachgewiesen, bei denen letztere manchmal mehrere Hunderttausend NFT-Münzen aufweisen können.

### Summary

Parallelisierung, Rust und mehr – lasst euch auf einen verbesserten TPS in den kommenden StarkNet-Versionen ein.