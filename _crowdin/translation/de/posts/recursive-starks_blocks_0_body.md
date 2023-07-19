### TL;DR

* Recursive Proving ist live im Mainnet und skaliert sowohl StarkEx-Apps als auch StarkNet mit einem einzigen Beweis
* Es steigert die Skalierung und bietet Kosten- und Latenzvorteile (ein seltenes und aufregendes Ereignis, bei dem Skalierung und Latenz Hand in Hand gehen und kein Kompromiss sind).
* Es schafft die Voraussetzungen für L3 und andere Vorteile. Lesen Sie den Blogbeitrag zu[Recursive Proving](https://medium.com/@starkware/recursive-starks-78f8dd401025). Es ist cooles Zeug 😉

### Hochskalieren!

Rekursive Beweise – basierend auf der allgemeinen Berechnung von Cairo – sind jetzt in Produktion. Dies stellt einen erheblichen Leistungsschub der L2-Skalierung mit STARKs dar. Dadurch wird sich die Anzahl der Transaktionen, die mit einem einzigen Nachweis in Ethereum geschrieben werden können, schnell um ein Vielfaches erhöhen.

Bisher funktionierte die STARK-Skalierung dadurch, dass Zehntausende oder sogar Hunderttausende Transaktionen in einem einzigen Beweis „zusammengefasst“ wurden, der an Ethereum geschrieben wurde. Mit der Rekursion können viele solcher Beweise zu einem einzigen Beweis „zusammengefasst“ werden.

Diese Methode wird derzeit für eine Vielzahl von in Kairo ansässigen Anwendungen produziert: Apps, die auf StarkEx, der SaaS-Skalierungs-Engine von StarkWare, und StarkNet, dem erlaubnislosen Rollup, ausgeführt werden.

### Die Geschichte bisher

Seit dem ersten Nachweis im Mainnet im März 2020 haben die folgenden Entwicklungen die Verwendung von STARKs geprägt.

### STARK-basierte Skalierung

Im Juni 2020 wurde die erste STARK-basierte Skalierungslösung –[StarkEx](https://youtu.be/P-qoPVoneQA)– im Ethereum Mainnet bereitgestellt. StarkEx verfügt über einen Beweiser, der große Berechnungen außerhalb der Kette durchführt und einen STARK-Beweis für deren Richtigkeit erstellt, sowie über einen Verifizierer, der diesen Beweis in der Kette überprüft. Die Einschränkungen für diese erste Bereitstellung wurden von den Ingenieuren von StarkWare „handgeschrieben“, wodurch die Funktionsgeschwindigkeit für StarkEx erheblich eingeschränkt wurde. Wir kamen zu dem Schluss, dass eine Programmiersprache zur Unterstützung des Nachweises allgemeiner Berechnungen benötigt wird – Kairo.

#### Kairo

Im Sommer 2020 hatte Cairo seinen[Auftritt im Ethereum Mainnet](https://medium.com/starkware/hello-cairo-3cb43b13b209). Cairo steht für CPU Algebraic Intermediate Representation (AIR) und umfasst ein einzelnes AIR, das den Befehlssatz dieser „CPU“ überprüft. Es öffnete die Tür für die Codierung von Beweisen für komplexere Geschäftslogiken und für beliebige Rechenanweisungen, und zwar auf schnellere und sicherere Weise. Ein Kairo-Programm kann die Ausführung der Logik einer einzelnen Anwendung nachweisen. Ein Kairo-Programm kann aber auch eine Aneinanderreihung mehrerer solcher Anwendungen sein – SHARP.

#### SCHARF

SHARP – ein SHARed Prover – übernimmt Transaktionen von mehreren separaten Apps und weist sie alle in einem einzigen STARK-Proof nach. Apps kombinieren ihre Transaktionsstapel und füllen so die Kapazität eines STARK-Proofs schneller. Transaktionen werden mit einer verbesserten Geschwindigkeit und Latenz verarbeitet. Die nächste Grenze: Rekursive Beweise, aber nicht nur für eine fest codierte Logik, sondern für**allgemeine Berechnungen**.

Um den vollen Nutzen des rekursiven Beweisens zu verstehen, lohnt es sich, ein wenig mehr darüber zu verstehen, wie (nicht-rekursives) Beweisen bisher von SHARP durchgeführt wurde. Zeichnung 1 zeigt einen typischen nicht-rekursiven Ablauf:

![Zeichnung 1: Ein typischer nicht-rekursiver Prüfablauf](/assets/recursive_starks_01.png "Zeichnung 1: Ein typischer nicht-rekursiver Prüfablauf")

Hier treffen im Laufe der Zeit Aussagen ein. Wenn ein bestimmter Kapazitäts- (oder Zeit-)Schwellenwert erreicht ist, wird eine große kombinierte Anweisung (auch „Train“ genannt) generiert. Diese Gesamtaussage ist erst dann bewiesen, wenn alle Einzelaussagen vorliegen. Es dauert lange, diesen Beweis zu beweisen (ungefähr die Zeit, die benötigt wird, um jede Aussage einzeln zu beweisen).

Der Nachweis extrem großer Aussagen wird letztendlich durch die verfügbaren Rechenressourcen wie Speicher begrenzt. Vor der Rekursion war dies praktisch die begrenzende Skalierbarkeitshürde der STARK-Prüfung.

### Was ist rekursives Beweisen?

Bei STARK-Beweisen ist die Zeit, die zum Beweis einer Aussage benötigt wird, ungefähr linear mit der Zeit, die zum Ausführen der Aussage benötigt wird. Wenn außerdem der Beweis einer Aussage T Zeit in Anspruch nimmt, dann dauert die Überprüfung des Beweises ungefähr log(T) Zeit, was üblicherweise als „logarithmische Komprimierung“ bezeichnet wird. Mit anderen Worten: Mit STARKs verbringen Sie viel weniger Zeit damit, die Aussage zu überprüfen, als sie zu berechnen.

[Cairo](https://starkware.co/cairo/)ermöglicht die Formulierung allgemeiner rechnerischer Aussagen, die durch STARK-Beweise bewiesen und durch die entsprechenden STARK-Verifizierer verifiziert werden können.

Hier kommt die Möglichkeit ins Spiel,[Rekursion](https://en.wikipedia.org/wiki/Recursion)durchzuführen: So wie wir ein Kairo-Programm schreiben, das die Korrektheit von Tausenden von Transaktionen beweist, können wir auch ein Kairo-Programm schreiben, das mehrere STARK-Beweise überprüft. Wir können einen einzigen Beweis erstellen, der die Gültigkeit mehrerer „Upstream“-Beweise bestätigt. Das nennen wir rekursives Beweisen.

Aufgrund der logarithmischen Komprimierung und der annähernd linearen Prüfzeit dauert der Nachweis einer Verifizierung eines STARK-Beweises relativ kurz (in naher Zukunft voraussichtlich nur wenige Minuten).

Bei der Implementierung der Rekursion kann SHARP Aussagen bei ihrem Eintreffen beweisen. Ihre Beweise können in verschiedenen Mustern immer wieder zu rekursiven Beweisen zusammengeführt werden, bis der resultierende Beweis an einem bestimmten Punkt einem On-Chain-Verifizierervertrag vorgelegt wird. Ein typisches Muster ist in Zeichnung 2 dargestellt:

![Zeichnung 2: Ein typischer rekursiver Prüfablauf.](/assets/recursive_starks_02.png "Zeichnung 2: Ein typischer rekursiver Prüfablauf.")

### Unmittelbare Vorteile des rekursiven Beweisens

#### Reduzierte On-Chain-Kosten

Auf Anhieb erreichen wir eine „Komprimierung“ mehrerer Beweise zu einem, was geringere Kosten für die On-Chain-Verifizierung pro Transaktion mit sich bringt (wobei jede Abrechnung viele Transaktionen umfassen kann).

Mit der Rekursion wird die Barriere der Rechenressourcen (z. B. Speicher), die bisher die Beweisgröße begrenzte, beseitigt, da jede Aussage mit begrenzter Größe separat bewiesen werden kann. Daher ist bei Verwendung der Rekursion die effektive Train-Größe der Rekursion nahezu unbegrenzt und die Kosten pro Transaktion können um Größenordnungen reduziert werden.

In der Praxis hängt die Reduzierung von der akzeptablen Latenz (und der Rate, mit der Transaktionen ankommen) ab. Da außerdem jeder Beweis in der Regel auch von einer Ausgabe wie On-Chain-Daten begleitet wird, gibt es Grenzen für die Datenmenge, die zusammen mit einem einzelnen Beweis in die Kette geschrieben werden kann. Dennoch ist es trivial möglich, die Kosten um eine Größenordnung und sogar noch besser zu senken.

#### Reduzierte Latenz

Das rekursive Beweismuster reduziert die Latenz beim Beweisen großer Aussagefolgen. Dies ist auf zwei Faktoren zurückzuführen:

1. Eingehende Aussagen können**parallel**bewiesen werden (im Gegensatz zum Beweis einer extrem großen kombinierten Aussage).
2. Sie müssen nicht warten, bis die letzte Aussage im Zug eintrifft, um mit der Prüfung zu beginnen. Vielmehr können Beweise mit neuen Aussagen kombiniert werden, sobald sie eintreffen. Das bedeutet, dass die Latenz der letzten Anweisung, die einem Train beitritt, ungefähr der Zeit entspricht, die zum Beweis dieser allerletzten Anweisung benötigt wird, plus der Zeit, die zum Beweis einer Recursive Verifier-Anweisung benötigt wird (die alle Anweisungen bestätigt, die diese bereits „eingebunden“ haben). bestimmten Zug).

Wir entwickeln und optimieren aktiv die Latenz zum Nachweis der Recursive Verifier-Anweisung. Wir gehen davon aus, dass dieser Wert innerhalb weniger Monate die Größenordnung von wenigen Minuten erreichen wird. Daher kann ein hocheffizientes SHARP Latenzen von einigen Minuten bis zu einigen Stunden bieten, abhängig vom Kompromiss gegenüber den On-Chain-Kosten pro Transaktion. Dies stellt eine bedeutende Verbesserung der Latenz von SHARP dar.

#### Erleichterung von L3

Die Entwicklung der Recursive Verifier-Anweisung in Kairo eröffnet auch die Möglichkeit, Beweise an StarkNet zu übermitteln, da diese Aussage in einen StarkNet-Smart-Vertrag integriert werden kann. Dies ermöglicht den Aufbau von[L3-Bereitstellungen auf dem öffentlichen StarkNet](https://medium.com/starkware/fractal-scaling-from-l2-to-l3-7fe238ecfb4f)(einem L2-Netzwerk).

Das rekursive Muster gilt auch für die Aggregation von Beweisen aus L3, die durch einen einzelnen Beweis auf L2 überprüft werden sollen. Daher wird auch dort eine Hyperskalierung erreicht.

### Subtilere Vorteile

#### Anwendbare Rekursion

Die Rekursion eröffnet noch mehr Möglichkeiten für Plattformen und Anwendungen, die ihre Kosten und Leistung weiter skalieren möchten.

Jeder STARK-Beweis bescheinigt die Gültigkeit einer Aussage, die auf eine Eingabe angewendet wird, die als „öffentliche Eingabe“ (oder „Programmausgabe“ in Kairoer Sprache) bekannt ist. Konzeptionell komprimiert die STARK-Rekursion zwei Beweise mit*, zwei*Eingaben in*einen*Beweis mit zwei Eingaben. Mit anderen Worten: Während die Anzahl der Beweise reduziert wird, bleibt die Anzahl der Eingaben konstant. Diese Eingaben werden dann normalerweise von einer Anwendung verwendet, um einen Status auf L1 zu aktualisieren (z. B. um einen Statusstamm zu aktualisieren oder einen On-Chain-Entzug durchzuführen).

Wenn die rekursive Anweisung*anwendungsbewusst*sein darf, also die Semantik der Anwendung selbst erkennt, kann sie sowohl zwei Beweise zu einem komprimieren*als auch*die beiden Eingaben zu einem kombinieren. Die resultierende Anweisung bescheinigt die Gültigkeit der Eingabekombination basierend auf der Anwendungssemantik, daher der Name „Applicative Recursion“ (siehe Zeichnung 3 als Beispiel).

![Zeichnung 3: Beispiel für eine angewandte Rekursion](/assets/recursive_starks_03.png "Zeichnung 3: Beispiel für eine angewandte Rekursion")

Hier bezeugt Aussage 1 eine Zustandsaktualisierung von A nach B und Aussage 2 eine weitere Aktualisierung von B nach C. Beweise von Aussage 1 und Aussage 2 können zu einer dritten Aussage zusammengefasst werden, die die direkte Aktualisierung von A nach C bescheinigt Durch die rekursive Anwendung einer ähnlichen Logik können die Kosten für Zustandsaktualisierungen bis zur Endgültigkeitslatenzanforderung erheblich gesenkt werden.

Ein weiteres wichtiges Beispiel für applikative Rekursion ist die Komprimierung von Rollup-Daten aus mehreren Beweisen. Beispielsweise ist bei einem Validity Rollup wie StarkNet jedes Speicherupdate auf L2 auch als Übertragungsdaten auf L1 enthalten, um die Datenverfügbarkeit sicherzustellen. Es besteht jedoch keine Notwendigkeit, mehrere Aktualisierungen für dasselbe Speicherelement zu senden, da für die Datenverfügbarkeit nur der endgültige Wert der Transaktionen erforderlich ist, der durch den verifizierten Nachweis bestätigt wird. Diese Optimierung wird bereits innerhalb eines*einzelnen*StarkNet-Blocks durchgeführt. Durch die Generierung eines Beweises pro Block kann Applicative Recursion diese Rollup-Daten jedoch über*mehrere*L2-Blöcke komprimieren. Dies kann zu einer erheblichen Kostenreduzierung führen und kürzere Blockintervalle auf L2 ermöglichen, ohne die Skalierbarkeit von L1-Updates zu beeinträchtigen.

Erwähnenswert: Die applikative Rekursion kann mit der anwendungsunabhängigen Rekursion kombiniert werden, wie zuvor dargestellt. Diese beiden Optimierungen sind unabhängig.

#### Reduzierte Komplexität der On-Chain-Verifizierer

Die Komplexität des STARK-Verifizierers hängt von der Art der Aussagen ab, die er überprüfen soll. Insbesondere bei Cairo-Anweisungen hängt die Komplexität des Prüfers von den spezifischen Elementen ab, die in der Cairo-Sprache zulässig sind, und insbesondere von den unterstützten integrierten Funktionen (wenn wir die CPU-Metapher für Cairo verwenden, sind integrierte Funktionen das Äquivalent von micro). -Schaltkreise in einer CPU: Berechnungen, die so häufig durchgeführt werden, dass sie eine eigene optimierte Berechnung erfordern.

Die Kairo-Sprache entwickelt sich ständig weiter und bietet immer mehr nützliche integrierte Funktionen. Andererseits erfordert der rekursive Verifizierer nur die Verwendung einer kleinen Teilmenge dieser integrierten Funktionen. Daher kann ein rekursives SHARP jede Aussage in Kairo erfolgreich unterstützen, indem es die vollständige Sprache in den rekursiven Prüfern unterstützt. Insbesondere muss der L1 Solidity Verifier nur rekursive Beweise verifizieren und kann daher auf eine stabilere Teilmenge der Cairo-Sprache beschränkt werden: Der L1 Verifier muss nicht mit den neuesten und besten integrierten Funktionen Schritt halten. Mit anderen Worten: Die Verifizierung sich ständig weiterentwickelnder komplexer Aussagen wird auf L2 verlagert, sodass der L1-Verifizierer einfachere und stabilere Aussagen verifizieren kann.

#### Reduzierter Rechenaufwand

Vor der Rekursion war die Möglichkeit, mehrere Aussagen zu einem Beweis zusammenzufassen, durch die maximale Größe der Aussage, die auf verfügbaren Recheninstanzen bewiesen werden konnte, (und die Zeit, die zum Generieren solcher Beweise benötigt werden konnte) begrenzt.

Durch die Rekursion besteht keine Notwendigkeit mehr, solch extrem große Aussagen zu beweisen. Infolgedessen können kleinere, kostengünstigere und besser verfügbare Recheninstanzen verwendet werden (obwohl möglicherweise mehr davon benötigt werden als bei großen monolithischen Prüfern). Dies ermöglicht die Bereitstellung von Prüfinstanzen in mehr physischen und virtuellen Umgebungen als bisher möglich.

### Zusammenfassung

Rekursive Beweise allgemeiner Berechnungen dienen jetzt mehreren Produktionssystemen, einschließlich StarkNet, im Mainnet Ethereum.

Die Vorteile der Rekursion werden nach und nach zum Tragen kommen, da sie weiterhin neue Verbesserungen ermöglicht. Sie wird bald Hyperskalierung ermöglichen, die Gasgebühren senken und die Latenz verbessern, indem das Potenzial der Parallelisierung freigesetzt wird.

Es wird erhebliche Kosten- und Latenzvorteile mit sich bringen, zusammen mit neuen Möglichkeiten wie L3 und applikativer Rekursion. Die weitere Optimierung des rekursiven Verifizierers ist im Gange und es wird erwartet, dass im Laufe der Zeit noch bessere Leistungs- und Kostenvorteile erzielt werden.



**Gidi Kaempfer**, Leiter Core Engineering, StarkWare