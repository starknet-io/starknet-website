### TL;DR

* **Kairo 1.0 ist Open Source! Dies ist nur der erste Schritt in Richtung Open-Sourcing des StarkNet-Stacks.**
* Wir präsentieren jetzt einen[ersten Blick](https://github.com/starkware-libs/cairo)in den 1.0 Compiler. Sie können jetzt mit dem Experimentieren mit dem Basiscode von Kairo 1.0 beginnen
* Kairo 1.0 im Kern ist Rust sehr ähnlich
* Betrachten Sie es als ersten Geschmack, nicht als Release. Weitere Verbesserungen sind im Gange. Die erste Version des Compilers ist für Anfang nächsten Jahres geplant.
* Kairo 1.0 wird auf StarkNet noch nicht unterstützt. Es wird im nächsten Jahr auf StarkNet in Q1 unterstützt.

### Einleitung

Im Jahr 2020 haben wir[Kairo](https://eprint.iacr.org/2021/1063.pdf)veröffentlicht, eine Turing-vollständige Programmiersprache, die überprüfbare Berechnungen unterstützt. Kairo begann als Montagesprache und wurde allmählich ausdrucksvoller. Vor zwei Monaten haben wir[Kairo 1.0](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)angekündigt, das einige wichtige Probleme in der aktuellen Situation angeht:

* Obwohl die Syntax von Kairo seit ihrer Gründung deutliche Verbesserungen erfahren hat, kann sich die Entwicklungserfahrung immer verbessern. Kairo 1.0 ist eine von Rost inspirierte vollständig tippte Sprache, wodurch das Schreiben der gleichen Logik viel einfacher und weniger fehleranfällig.
* Der vorhandene Compiler wird im selben Repository wie StarkNet selbst entwickelt, was es schwieriger macht, Sprachänderungen zu verfolgen. Der Cairo 1.0 Compiler ist von Grund auf geschrieben, was eine schnellere Feature-Entwicklung und mehr Beteiligung der Community ermöglicht.
* Jede Berechnung ist nun nachweisbar. Zurzeit kann ein Kairoer-Programm mit bestimmten Eingaben fehlschlagen (z.B. durch das Erreichen einer \`assert 1=2\` Anweisung in einigen Rechenzweigen), wodurch die Berechnung nicht nachweisbar wird. Mit Kairo 1.0 sind Programme in jedem möglichen Zweig nachweisbar. Dies ist besonders wichtig für DOS-Schutz und Zensur-Widerstand in StarkNet.

Heute markieren wir den ersten Meilenstein bei der Erreichung der oben genannten Ziele, während wir die Entwicklung zu einem öffentlichen Repo, und**Open Source Kairo 1. !**Entwickler können jetzt zum ersten Mal einfache 1.0 Programme von Kairo kompilieren und ausführen. Dies erlaubt Entwicklern mit dem Experimentieren mit Kairo 1. und sich allmählich an die neuen Funktionen gewöhnen, auch wenn sie es in dieser Phase noch nicht in StarkNet implementieren können.

### Aktuelle Fähigkeiten

Derzeit können Sie grundlegende native Kairoer Programme kompilieren und ausführen. Während viele der Syntax/Sprachverbesserungen noch im Gange sind, wird es möglich sein, sich an Kairo 1.0 zu gewöhnen und Upgrades zu genießen, sobald sie kommen.

**Beachten Sie, dass das Schreiben von StarkNet-Verträgen immer noch nicht unterstützt wird.**StarkNet-Syntax (Speichervariablen / aufrufende Verträge / Events und andere Systemaufrufe) werden in den kommenden Wochen hinzugefügt.

### Code-Beispiele

Um die Unterschiede zwischen der alten Syntax und Kairo 1 zu illustrieren. , haben wir ein paar verschiedene Implementierungen/Geschmacksrichtungen ausgewählt, um die n’th Fibonacci Nummer zu finden.

### Beispiel I: Passende Ausdrücke

In Cairo 1.0, you can use rust-like [match](https://doc.rust-lang.org/rust-by-example/flow_control/match.html?highlight=match#match) expressions. Nicht mehr fürchten Sie, wenn / sonst Anweisungen, die Referenzentzug verursachen können!

![](/assets/code01.png)

### Beispiel II: Datentypen

Während Kairo 0 mit Filzen und Zeigern arbeitete, haben wir in Kairo 1.0 native Zugriff auf komplexe Datentypen in der Sprache. Unten finden Sie ein Beispiel, das ein Array der ersten n Fibonacci Zahlen generiert.

![](/assets/code02.png)

Wie Sie oben sehen können, verwenden wir statt direkt mit Speicher-Zeigern die `Array::<felt>\` Typ und die \`array_append\`Funktion.

### Beispiel III: Strukturiert & Eigentum

Der folgende Code illustriert die Verwendung von Bauten in Kairo 1.0.

![](/assets/code03.png)

> Der folgende Absatz ist für die Rustaceans unter dem Publikum gedacht. Kairo 1.0 verwaltet Speicher ähnlich wie Rost. Insbesondere verwendet es die Begriffe von[Eigentum und Kreditaufnahme](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html). So, durch den Zugriff auf ein Mitglied des \`FibResult\` struct (in diesem Fall \`ergebnis). alue\`), wir haben \`result\` verschoben, was bedeutet, dass wir, sofern FibResult nicht kopierbar ist, in \`result.index\` nicht wieder darauf zugreifen können. Um dies zu überwinden, fügen wir das Attribut \`#\[derive(Copy)]\` des Typs \`FibResult\` hinzu. In zukünftigen Versionen werden wir automatisch Dekonstruktionen für Konstrukte hinzufügen. Dies erlaubt es, das Eigentum eines Mitglieds zu verschieben, ohne die anderen zu berühren (insbesondere der obige Code kompiliert auch wenn \`FibResult\` nicht das Kopier-Attribut hat).

**Insbesondere beachten Sie, dass Kairo 1.0 ist vollständig abstrahiert das Original (keine deterministische Lese-nur) Speichermodell von Kairo.**

## Beispiel IV: Fehlerausbreitung

Der folgende Code berechnet die N’th Fibonacci Nummer, aber im Gegensatz zu den vorherigen Beispielen sind alle Eingaben des Typs uint128. Beachten Sie, dass dies einen großen Schmerzpunkt bei der Behandlung von Uints in Kairo 0 löst. Hier sind uint128 (und in Zukunft uint256) native Typen.

![](/assets/0_s8bhjf_ade3carmi.png)

Das Hinzufügen von zwei 128-Bit-Integern kann zu einem Überlauf führen. Der obige Code verwendet die[Option enum](https://doc.rust-lang.org/rust-by-example/std/option.html)und den[Fragezeichenoperator](https://doc.rust-lang.org/rust-by-example/std/result/question_mark.html), um den Fall des Überlaufs in einem der Zwischenerfügungen zu behandeln. Vergleichen Sie dies mit der[aktuellen](https://github.com/starkware-libs/cairo-lang/blob/9889fbd522edc5eff603356e1912e20642ae20af/src/starkware/cairo/common/uint256.cairo#L31)uint256 Zusatzsyntax, wobei die \`unit256_check\` Funktion aufgerufen werden musste, um die Klangqualität zu gewährleisten. Darüber hinaus in naher Zukunft wir werden das Konzept von \`panic\` der Sprache hinzufügen (ähnlich der[Panik](https://doc.rust-lang.org/rust-by-example/std/panic.html)Makro in Rost), und einfache Fehler wie Additierungsüberlauf werden automatisch abgefangen und verbreitet, was bedeutet, dass Sie \`Option\` oder \` nicht verwenden müssen? ` beim Hinzufügen von Uints.

## Probieren Sie es selbst

Sie können jetzt kompilieren und laufen derzeit unterstützten Cairo 1.0 Programme! Follow these [instructions](https://github.com/starkware-libs/cairo/tree/main/crates/cairo-lang-runner) on how to use the \`cairo-run\` command. Beachten Sie, dass unter der Haube der[Rust Cairo VM](https://github.com/lambdaclass/cairo-rs), entwickelt von[Lambdaclass](https://lambdaclass.com/), zur Ausführung verwendet wird.

Weitere Beispiele für den Start von[finden Sie hier](https://github.com/starkware-libs/cairo2/tree/main/examples). Beachten Sie, dass dies nur der erste Blick in die Entwicklung des Compilers ist; in den kommenden Wochen werden wir den CLI neben dem Compiler verbessern.

## Zukünftige Pläne

Der Schwerpunkt der ersten Version des Compilers, die für Anfang Q1 geplant ist, ist die Unterstützung aller vorhandenen Funktionen von StarkNet in Kairo 1.0. Zusätzlich arbeiten wir an der Erweiterung der Möglichkeiten des 1.0 Compilers von Kairo. In den kommenden Wochen können Sie erwarten:

* StarkNet-Fähigkeiten — Schlaue Verträge schreiben und Systemaufrufe verwenden.
* Schleifen
* Neue Bibliotheksfunktionen
* Verbesserter Sprachserver
* Eine einheimische Vorstellung von StarkNet Gas

Vergewissern Sie sich, dass Sie auf dem Laufenden bleiben und den Compiler-Fortschritt verfolgen!