### TL;DR

* **Kairo 1.0 ist Open Source! Dies ist nur der erste Schritt in Richtung Open-Sourcing des StarkNet-Stacks.**
* Wir präsentieren nun einen[ersten Blick](https://github.com/starkware-libs/cairo)auf den Cairo 1.0-Compiler. Sie können jetzt mit dem grundlegenden Cairo 1.0-Code experimentieren
* Cairo 1.0 ist im Kern Rust sehr ähnlich
* Betrachten Sie es als einen ersten Vorgeschmack, nicht als eine Veröffentlichung. Weitere Verbesserungen sind in Vorbereitung. Die erste Version des Compilers ist für Anfang des ersten Quartals nächsten Jahres geplant.
* Cairo 1.0 wird auf StarkNet noch nicht unterstützt. Es wird im ersten Quartal nächsten Jahres auf StarkNet unterstützt.

### Einführung

Im Jahr 2020 haben wir[Cairo](https://eprint.iacr.org/2021/1063.pdf)veröffentlicht, eine Turing-vollständige Programmiersprache, die überprüfbare Berechnungen unterstützt. Kairo begann als Assemblersprache und wurde nach und nach ausdrucksvoller. Vor zwei Monaten haben wir[Cairo 1.0](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)angekündigt, das einige wichtige Probleme in der aktuellen Situation angeht:

* Während sich die Syntax von Cairo seit seiner Einführung erheblich verbessert hat, kann die Entwicklererfahrung immer verbessert werden. Cairo 1.0 ist eine von Rust inspirierte, vollständig typisierte Sprache, die das Schreiben derselben Logik viel einfacher und weniger fehleranfällig macht.
* Der bestehende Compiler wird im selben Repo wie StarkNet selbst entwickelt, was es schwieriger macht, Sprachänderungen zu verfolgen. Der Cairo 1.0-Compiler wurde von Grund auf neu geschrieben, was eine schnellere Funktionsentwicklung und eine stärkere Einbindung der Community ermöglicht.
* Jede Berechnung ist nun beweisbar. Derzeit kann ein Cairo-Programm bei bestimmten Eingaben fehlschlagen (z. B. durch Erreichen einer „Assert 1=2“-Anweisung in einem Berechnungszweig), wodurch die Berechnung nicht beweisbar wird. Mit Cairo 1.0 sind Programme in allen möglichen Zweigen nachweisbar. Dies ist besonders wichtig für den DOS-Schutz und die Zensurresistenz in StarkNet.

Heute markieren wir den ersten Meilenstein beim Erreichen der oben genannten Ziele, indem wir die Entwicklung auf ein öffentliches Repo und**Open Source Cairo 1.0 verlagern!**Entwickler können jetzt erstmals einfache Cairo 1.0-Programme kompilieren und ausführen. Dies ermöglicht es Entwicklern, mit Cairo 1.0 zu experimentieren und sich nach und nach an die neuen Funktionen zu gewöhnen, auch wenn sie es zu diesem Zeitpunkt noch nicht auf StarkNet implementieren können.

### Aktuelle Fähigkeiten

Derzeit können Sie grundlegende native Cairo-Programme kompilieren und ausführen. Während viele der Syntax-/Sprachverbesserungen noch im Gange sind, können Sie sich auf diese Weise an Cairo 1.0 gewöhnen und die kommenden Upgrades genießen.

**Beachten Sie, dass das Schreiben von StarkNet-Verträgen immer noch nicht unterstützt wird.**StarkNet-Syntax (Speichervariablen/Aufrufverträge/Ereignisse und andere Systemaufrufe) wird in den kommenden Wochen hinzugefügt.

### Codebeispiele

Um die Unterschiede zwischen der alten Syntax und Cairo 1.0 zu veranschaulichen, haben wir uns entschieden, einige verschiedene Implementierungen/Varianten zum Ermitteln der n-ten Fibonacci-Zahl zu zeigen.

### Beispiel I: Vergleichsausdrücke

In Cairo 1.0 können Sie rostähnliche[Match-](https://doc.rust-lang.org/rust-by-example/flow_control/match.html?highlight=match#match)Ausdrücke verwenden. Sie müssen keine Angst mehr vor If/Else-Anweisungen haben, die zum Widerruf Ihrer Referenz führen könnten!

![](/assets/code01.png)

### Beispiel II: Datentypen

Während Cairo 0 mit Filzen und Zeigern arbeitete, haben wir in Cairo 1.0 nativen Zugriff auf komplexe Datentypen in der Sprache. Unten finden Sie ein Beispiel, das ein Array der ersten n Fibonacci-Zahlen generiert.

![](/assets/code02.png)

Wie Sie oben sehen können, verwenden wir das Array:, anstatt direkt mit Speicherzeigern zu arbeiten.<felt>\`-Typ und die \`array_append\`-Funktion.

### Beispiel III: Strukturiert & Eigentum

Der folgende Code veranschaulicht die Verwendung von Strukturen in Cairo 1.0.

![](/assets/code03.png)

> Der folgende Absatz richtet sich an die Rustaceaner im Publikum. Cairo 1.0 verwaltet den Speicher auf ähnliche Weise wie Rust. Dabei werden insbesondere die Konzepte[Eigentum und Kreditaufnahme](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html)verwendet. Durch den Zugriff auf ein Mitglied der Struktur „FibResult“ (in diesem Fall „result.value“) haben wir „result“ verschoben, was bedeutet, dass dies nicht möglich ist, sofern FibResult nicht kopierbar ist Greifen Sie erneut in \`result.index\` darauf zu. Um dies zu umgehen, fügen wir das Attribut „#\[derive(Copy)]“ vom Typ „FibResult“ hinzu. In zukünftigen Versionen werden wir die automatische Dekonstruktion für Strukturen hinzufügen. Dies ermöglicht das Verschieben des Besitzes eines Mitglieds, ohne die anderen zu berühren (insbesondere würde der obige Code kompiliert, selbst wenn \`FibResult\` nicht über das Copy-Attribut verfügt).

**Beachten Sie insbesondere, dass Cairo 1.0 das ursprüngliche (nicht deterministische, schreibgeschützte) Speichermodell von Cairo vollständig abstrahiert.**

## Beispiel IV: Fehlerausbreitung

Der folgende Code berechnet die n-te Fibonacci-Zahl, aber im Gegensatz zu den vorherigen Beispielen sind alle Eingaben vom Typ uint128. Beachten Sie, dass dies einen großen Problempunkt bei der Handhabung von Uints in Cairo 0 löst. Hier sind uint128 (und künftig uint256) native Typen.

![](/assets/0_s8bhjf_ade3carmi.png)

Die Addition von zwei 128-Bit-Ganzzahlen kann zu einem Überlauf führen. Der obige Code verwendet die[Option enum](https://doc.rust-lang.org/rust-by-example/std/option.html)und den[Fragezeichenoperator](https://doc.rust-lang.org/rust-by-example/std/result/question_mark.html), um den Fall eines Überlaufs in einer der Zwischenadditionen zu behandeln. Vergleichen Sie dies mit der[aktuellen](https://github.com/starkware-libs/cairo-lang/blob/9889fbd522edc5eff603356e1912e20642ae20af/src/starkware/cairo/common/uint256.cairo#L31)uint256-Additionssyntax, bei der die Funktion „unit256_check“ aufgerufen werden musste, um die Korrektheit zu gewährleisten. Darüber hinaus werden wir in naher Zukunft das Konzept von „Panic“ zur Sprache hinzufügen (ähnlich dem[Panic](https://doc.rust-lang.org/rust-by-example/std/panic.html)Makro in Rust), und einfache Fehler wie Additionsüberlauf werden nicht abfangbar sein und automatisch weitergegeben, was bedeutet, dass Sie müssen beim Hinzufügen von Uints weder \`Option\` noch \`?\` verwenden.

## Versuch es selber

Sie können jetzt aktuell unterstützte Cairo 1.0-Programme kompilieren und ausführen! Befolgen Sie diese[Anweisungen](https://github.com/starkware-libs/cairo/tree/main/crates/cairo-lang-runner)zur Verwendung des Befehls „cairo-run“. Beachten Sie, dass unter der Haube die von[Lambdaclass](https://lambdaclass.com/)entwickelte[Rust Cairo VM](https://github.com/lambdaclass/cairo-rs)zur Ausführung verwendet wird.

Weitere Beispiele, die Ihnen den Einstieg erleichtern[finden Sie hier](https://github.com/starkware-libs/cairo2/tree/main/examples). Beachten Sie, dass dies nur der erste Einblick in die Compiler-Entwicklung ist. In den kommenden Wochen werden wir neben dem Compiler auch die CLI verbessern.

## Zukunftspläne

Der Schwerpunkt der ersten Version des Compilers, die für Anfang des ersten Quartals geplant ist, liegt auf der Unterstützung aller vorhandenen Funktionen von StarkNet in Cairo 1.0. Darüber hinaus arbeiten wir an der Erweiterung der Funktionen des Cairo 1.0-Compilers. In den kommenden Wochen erwartet Sie:

* StarkNet-Funktionen – intelligente Verträge schreiben und Systemaufrufe verwenden.
* Schleifen
* Neue Bibliotheksfunktionen
* Verbesserter Sprachserver
* Eine native Vorstellung von StarkNet-Gas

Bleiben Sie auf dem Laufenden und verfolgen Sie den Compiler-Fortschritt!