### TL;DR

* Rekursive Proving ist live auf Mainnet, Skalierung von StarkEx Apps und StarkNet mit einem einzigen Nachweis
* Es erhöht die Skalierung und bringt Kostenvorteile und Latenz (ein seltenes und aufregendes Auftreten von Skalierung und Latenz, die sich parallel bewegt, und kein Kompromiss darf)
* Es setzt die Bühne für L3 und andere Vorteile, lesen Sie den Blog-Beitrag auf[Rekursive Proving](https://medium.com/@starkware/recursive-starks-78f8dd401025). Es ist cooles Zeug 😉

### Erhöhen Sie!

Rekursive Beweise – angetrieben von Kairos allgemeiner Berechnung – sind jetzt in der Produktion. Dadurch wird die Leistung des L2-Skalierens mit STARKs deutlich gesteigert. Es wird schnell zu einer Vervielfachung der Anzahl von Transaktionen führen, die durch einen einzigen Beweis an Ethereum geschrieben werden können.

Bisher hat STARK-Skalierung funktioniert, indem Zehntausende oder sogar Hunderttausende Transaktionen zu einem einzigen Beweis „rollen“. die nach Ethereum geschrieben wurde. Bei Rekursionen können viele solcher Beweise zu einem einzigen Beweis „aufgerollt“ werden.

Diese Methode wird jetzt für eine Vielzahl von Kairo-basierten Anwendungen produziert: Apps mit StarkEx, StarkWare's SaaS Skalierungs-Engine und StarkNet, dem zulässigen Rollup.

### Die bisherige Geschichte

Seit dem ersten Nachweis auf Mainnet, im März 2020, haben die folgenden Entwicklungen die Verwendung von STARKs geprägt.

### STARK-basierte Skalierung

Im Juni 2020 wurde die erste STARK-basierte Skalierungslösung –[StarkEx](https://youtu.be/P-qoPVoneQA)– im Ethereum Mainnet eingesetzt. StarkEx hat einen Prover, der große Berechnungen außerhalb der Kette durchführt und einen STARK-Beweis für ihre Richtigkeit erzeugt, und einen Verifier der diesen Nachweis on-chain überprüft. Die Einschränkungen für diesen ersten Einsatz waren „handgeschrieben“ von StarkWares Ingenieuren, wodurch die Geschwindigkeit der Funktionen für StarkEx. Wir kamen zu dem Schluss, dass eine Programmiersprache zur Unterstützung der nachweislichen allgemeinen Berechnung benötigt wird – Kairo.

#### Cairo

Im Sommer 2020 erschien Cairo zum[Mal im Ethereum Mainnet](https://medium.com/starkware/hello-cairo-3cb43b13b209). Kairo steht für CPU Algebraic Intermediate Representation (AIR) und enthält eine einzige AIR, die den Befehlssatz dieser „CPU“ überprüft. Es öffnete die Tür für Codierungsfahnen für komplexere Geschäftslogik, für beliebige Rechenanweisungen, und dafür auf schnellere und sicherere Weise. Ein Kairoer Programm kann die Ausführung der Logik einer einzelnen Anwendung beweisen. Aber ein Kairoer Programm kann auch eine Verkettung mehrerer solcher Anwendungen sein – SHARP.

#### SHARP

SHARP — ein SHARed Prover — nimmt Transaktionen aus mehreren verschiedenen Apps auf und beweist sie alle in einem einzigen STARK-Proof. Apps kombinieren ihre Transaktionen, füllen die Kapazität eines STARK-Proofs schneller. Transaktionen werden mit einem verbesserten Tempo und einer verbesserten Latenz verarbeitet. Die nächste Grenze: Rekursive Proofs, aber nicht nur für eine hart kodierte Logik, sondern auch für**allgemeine Berechnung**.

Um den vollen Nutzen des rekursiven Nachweises zu verstehen, lohnt es sich, ein wenig mehr darüber zu verstehen, wie (nicht-rekursiv) der Nachweis bisher von SHARP durchgeführt wurde. Zeichnung 1 stellt einen typischen nicht-rekursiven Fluss dar:

![Zeichnung 1: Ein typischer nicht-rekursiver Nachweisfluss](/assets/recursive_starks_01.png "Zeichnung 1: Ein typischer nicht-rekursiver Nachweisfluss")

Hier kommen Anweisungen im Laufe der Zeit an. Wenn eine bestimmte Kapazität (oder Zeit) Grenze erreicht wird, wird eine große kombinierte Anweisung (a.k.a Zug) erzeugt. Diese kombinierte Abfrage wird erst dann bewiesen, wenn alle einzelnen Abfragen empfangen wurden. Dieser Beweis braucht lange Zeit (ungefähr die Summe der Zeit, die benötigt wird, um jede Aussage einzeln zu beweisen).

Das Nachweisen extrem großer Anweisungen wird schließlich durch verfügbare Rechenressourcen wie Speicher begrenzt. Vor der Rekursion war dies praktisch die beschränkte Skalierbarkeitsbarriere von STARK bewiesen.

### Was ist die Rekursive Provence?

Bei STARK-Proofs dauert die Zeit für den Nachweis einer Anweisung grob linear mit der Zeit, die für die Ausführung der Anweisung benötigt wird. Wenn der Nachweis einer Anweisung T Zeit braucht, dauert die Überprüfung des Beweises ungefähr log(T) Zeit, was typischerweise als „logarithmische Kompression“ bezeichnet wird. Mit anderen Worten, mit STARKs verbringen Sie viel weniger Zeit für die Überprüfung der Anweisung als für die Berechnung.

[Kairo](https://starkware.co/cairo/)erlaubt das Ausdrücken allgemeiner Rechenanweisungen, die von STARK-Proofs nachgewiesen und von den entsprechenden STARK-Prüfern überprüft werden können.

Hier setzt die Möglichkeit ein,[Rekursion](https://en.wikipedia.org/wiki/Recursion)durchzuführen: So wie wir ein Cairo-Programm schreiben, das die Korrektheit von Tausenden von Transaktionen beweist, können wir auch ein Cairo-Programm schreiben, das mehrere STARK-Beweise verifiziert. Wir können einen einzigen Nachweis erstellen, der die Gültigkeit mehrerer „Upstream“-Beweise bestätigt. Das nennen wir Rekursive Proving.

Wegen der logarithmischen Komprimierung und grob linearer Probezeit Der Nachweis eines STARK-Nachweises dauert relativ kurze Zeit (in naher Zukunft nur wenige Minuten).

Bei der Umsetzung von Recursion kann SHARP Aussagen bei ihrer Ankunft beweisen. Ihre Beweise können in verschiedenen Mustern immer und immer zu rekursiven Druckfahnen zusammengeführt werden, bis zu einem bestimmten Zeitpunkt wird der daraus resultierende Nachweis einem On-Kettenverifizierervertrag übergeben. Ein typisches Muster wird in Zeichnung 2 dargestellt

![Zeichnung 2: Ein typischer rekursiver Nachweisstrom.](/assets/recursive_starks_02.png "Zeichnung 2: Ein typischer rekursiver Nachweisstrom.")

### Sofortige Vorteile rekursiver Nachweis

#### Reduzierte On-Kettenkosten

Wir erreichen "Kompression" mehrerer Druckfahnen in einem. , was niedrigere Kosten für die Überprüfung auf der Kette pro Transaktion beinhaltet (wobei jede Anweisung viele Transaktionen umfassen kann).

Bei Rekursion wird die Rechenressourcen-Barriere (z. -Speichern), die bisher nur begrenzt groß war, wird eliminiert, da jede begrenzte Größenanweisung separat nachgewiesen werden kann. Daher ist bei der Rekursion die effektive Rekursionsgröße fast unbegrenzt und die Kosten pro Transaktion können durch Größenordnungen gesenkt werden.

In praktischer Hinsicht hängt die Reduzierung von der akzeptablen Latenz (und dem Tempo ab, zu dem die Transaktionen eintreffen). Zusätzlich dazu, da jeder Beweis typischerweise auch von einer Ausgabe wie On-Kettendaten begleitet wird Es gibt Grenzen für die Datenmenge, die zusammen mit einem einzigen Nachweis auf die Kette geschrieben werden kann. Nichtsdestotrotz ist eine Senkung der Kosten um eine Größenordnung und sogar noch besser machbar.

#### Reduzierte Latenz

Das Rekursive Proving-Muster reduziert die Latenz des Nachweises großer Statement-Züge. Dies ist das Ergebnis zweier Faktoren:

1. Eingehende Anweisungen können gleichzeitig****nachgewiesen werden (im Gegensatz zu einer extrem großen kombinierten Anweisung).
2. Es ist nicht nötig zu warten, bis die letzte Aussage im Zug eintrifft, um zu beweisen. Vielmehr lassen sich Beweise mit neuen Aussagen kombinieren, sobald sie eintreffen. Dies bedeutet, dass die Latenz der letzten Aussage in einem Zug, ist ungefähr die Zeit, die es braucht, um diese letzte Anweisung zu beweisen, plus die Zeit, die es braucht, um eine Recursive Verifier Anweisung zu beweisen (die alle Aussagen bestätigt, die diesen Zug bereits „an Borde“ haben).

Wir entwickeln und optimieren aktiv die Latenz des Nachweises der Recursive Verifier Anweisung. Wir gehen davon aus, dass dies innerhalb weniger Monate die Reihenfolge einiger Minuten erreicht. Somit kann eine hocheffiziente SHARP Latenzen von wenigen Minuten bis zu ein paar Stunden anbieten je nach Trade-Versus on-chain-Kosten pro Transaktion. Dies stellt eine sinnvolle Verbesserung der Latenz von SHARP dar.

#### Erleichterung L3

Die Entwicklung der Rekursive Verifier Erklärung in Kairo eröffnet auch die Möglichkeit, Nachweise bei StarkNet einzureichen, da diese Aussage in einem StarkNet smart contract gebacken werden kann. Dies erlaubt das Erstellen von[L3-Einsätzen auf dem öffentlichen StarkNet](https://medium.com/starkware/fractal-scaling-from-l2-to-l3-7fe238ecfb4f)(ein L2-Netzwerk).

Das rekursive Muster gilt auch für die Aggregation von Druckfahnen aus L3, die durch einen einzigen Nachweis auf L2 verifiziert werden können. So wird auch dort eine Hyperskalierung erreicht.

### Weitere subtile Vorteile

#### Anwendbare Recursion

Recursion eröffnet noch mehr Möglichkeiten für Plattformen und Anwendungen, die ihre Kosten und Leistung weiter senken möchten.

Jeder STARK-Nachweis bestätigt die Gültigkeit einer Erklärung, die auf einige Eingaben angewendet wird, die als „öffentliche Eingabeaufforderung“ (oder „Programmausgabe“ in Kairo bezeichnet werden). Konzeptionell komprimiert STARK Rekursion zwei Proofs mit*zwei*Eingängen in*einem*Profit mit zwei Eingängen. Mit anderen Worten, während die Anzahl der Proofs reduziert wird, wird die Anzahl der Eingänge konstant gehalten. Diese Eingaben werden dann typischerweise von einer Anwendung verwendet, um einen Zustand auf L1 (e. , um einen Status Root zu aktualisieren oder einen On-Kettenabzug auszuführen).

Wenn die rekursive Anweisung*anwendungsbewusst sein darf*, d.h. erkennt die Semantik der Anwendung selbst es kann sowohl zwei Druckfahnen in einen*als auch*kombinieren die beiden Eingänge zu einem. Die resultierende Aussage bestätigt die Gültigkeit der Eingabekombination basierend auf der semantischen Anwendung Daher der Name Applicative Recursion (siehe Zeichnung 3, zum Beispiel)..

![Zeichnung 3: Anwendungsrekursionsbeispiel](/assets/recursive_starks_03.png "Zeichnung 3: Anwendungsrekursionsbeispiel")

Hier bestätigt Statement 1 ein Zustandsupdate von A auf B und Statement 2 ein weiteres Update von B auf C. Die Nachweise von Statement 1 und Statement 2 können zu einer dritten Anweisung zusammengefasst werden, um das direkte Update von A auf C zu bestätigen. Durch die Anwendung einer ähnlichen Logik kann man die Kosten für staatliche Aktualisierungen sehr deutlich reduzieren, um den Anforderungen an die Endgültigkeit der Latenz gerecht zu werden.

Ein weiteres wichtiges Beispiel für Applicative Recursion ist die Komprimierung von Rollup-Daten aus mehreren Proben. Zum Beispiel für ein Validy-Rollup wie StarkNet, Jedes Speicherupdate auf L2 ist auch als Übertragungsdaten auf L1 enthalten, um die Verfügbarkeit der Daten sicherzustellen. Es besteht jedoch keine Notwendigkeit, mehrere Updates für dasselbe Speicherelement zu senden, da für die Datenverfügbarkeit nur der Endwert der durch den nachgewiesenen Nachweis bestätigten Transaktionen erforderlich ist. Diese Optimierung wird bereits innerhalb eines*einzigen*StarkNet Blocks durchgeführt. Durch das Erzeugen eines Nachweises pro Block kann jedoch die Anwendungsrekursion diese Rollup-Daten in*mehreren*L2-Blöcken komprimieren. Dies kann zu einer erheblichen Kostensenkung führen, wodurch kürzere Blockintervalle auf L2 ermöglicht werden, ohne die Skalierbarkeit von L1-Updates zu opfern.

Bemerkenswert: Anwendungsrekursion kann mit anwendungs-agnostischer Rekursion kombiniert werden, wie früher dargestellt. Diese beiden Optimierungen sind unabhängig.

#### Reduzierte On-Kettenüberprüfungskomplexität

Die Komplexität des STARK-Verifikators hängt von der Art der Anweisungen ab, die er überprüfen soll. Insbesondere für die Erklärungen von Kairo hängt die Komplexität des Prüfers von den spezifischen Elementen ab, die in der Sprache von Kairo erlaubt sind. und, genauer gesagt, die unterstützten Built-Ins (wenn wir die CPU-Metapher für Kairo verwenden, dann sind eingebaute Geräte das Äquivalent zu Mikrokreisläufen in einer CPU: Berechnungen durchgeführt so oft, dass sie eine eigene optimierte Berechnung benötigen).

Die Sprache von Kairo entwickelt sich weiter und bietet immer mehr nützliche Einbaumöglichkeiten. Auf der anderen Seite benötigt der Rekursive Verifier nur eine kleine Teilmenge dieser eingebauten Ins. So kann eine rekursive SHARP jede Aussage in Kairo erfolgreich unterstützen, indem sie die Vollsprache in den rekursiven Überprüfern unterstützt. Konkret muss der L1 Solidity Verifier nur rekursive Beweise verifizieren, und kann daher auf eine stabilere Untergruppe der Kairoer Sprache beschränkt werden: Der L1 Verifier muss nicht mit den neuesten und größten Built-Ins Schritt halten. Mit anderen Worten: Die Verifizierung komplexer Anweisungen, die sich ständig weiterentwickeln, wird auf L2 reduziert, so dass der L1 Verifier einfachere und stabilere Anweisungen überprüft.

#### Reduzierter RechenFootprint

Vor der Rekursion, die Fähigkeit, mehrere Anweisungen zu einem einzigen Beweis zusammenzufassen, wurde durch die maximale Größe der Anweisung begrenzt, die auf verfügbaren Recheninstanzen nachgewiesen werden konnte (und die Zeit, die nötig war, um solche Beweise zu erstellen).

Angesichts einer Wiederholung ist es nicht mehr notwendig, so große Aussagen zu beweisen. Infolgedessen kleiner, Es können weniger teure und mehr verfügbare Recheninstanzen verwendet werden (obwohl mehr davon benötigt werden können als bei großen monolithischen Proversen). Dies ermöglicht die Bereitstellung von Prover-Instanzen in mehr physischen und virtuellen Umgebungen als bisher möglich.

### Summary

Rekursive Nachweise allgemeiner Berechnungen dienen nun mehreren Produktionssystemen, darunter StarkNet, auf Mainnet Ethereum.

Die Vorteile der Rekursion werden schrittweise realisiert, da sie weiterhin neue Verbesserungen ermöglichen und es wird bald Übermaßstäbe liefern, Gasgebühren senken und die Latenz verbessern, indem das Potenzial der Parallelisierung freigeschaltet wird.

Sie wird erhebliche Kosten- und Latenzvorteile mit sich bringen, zusammen mit neuen Möglichkeiten wie L3 und Anwenderrekursion. Eine weitere Optimierung des Recursive Verifier wird fortgeführt und mit der Zeit wird noch bessere Leistung und Kostenvorteile erwartet.



**Gidi Kaempfer**, Leiter der Kerntechnik, StarkWare