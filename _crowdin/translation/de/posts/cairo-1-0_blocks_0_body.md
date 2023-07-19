### TL;DR

* Cairo 1.0 ist die erste Hauptversion nach der[von Cairo](https://medium.com/starkware/hello-cairo-3cb43b13b209)vor zwei Jahren
* Cairo 1.0 bietet Entwicklern eine sicherere, einfachere und benutzerfreundlichere Programmiersprache
* Das Herzstück von Cairo 1.0 wird**Sierra**sein, eine zwischengeschaltete Repräsentationsschicht, die eine größere langfristige Stabilität für Cairo-Programme verspricht
* Sierra bringt Cairo dazu, in einem erlaubnislosen Netzwerk zu arbeiten:\
  -**Schutz des Netzwerks**: Es ermöglicht einen robusteren DoS-Schutz\
  -**Schutz des Benutzers**: Es ermöglicht Zensurresistenz auf Ethereum-Niveau. Cairo 1.0 wird StarkNet in vielerlei Hinsicht beeinflussen. Es wirkt sich auch auf die[Regenesis](https://medium.com/starkware/regenesis-starknets-no-sweat-state-reset-e296b12b80ae)aus. Wir werden in den kommenden Wochen weitere Informationen zu Regenesis veröffentlichen.

### Einführung

Im Jahr 2020 veröffentlichten wir Cairo, eine Turing-vollständige Programmiersprache, und machten einen großen Schritt in Richtung Unterstützung überprüfbarer Berechnungen mithilfe von STARKs. Heute kündigen wir**Cairo 1.0**an, die bislang größte Weiterentwicklung von Cairo. Es wird eine verbesserte Sprache mit Funktionen einführen, die die Benutzerfreundlichkeit, Sicherheit und Bequemlichkeit verbessern. Es wurde entwickelt, um die Anforderungen von StarkNet als erlaubnisloses Netzwerk zu unterstützen und das Protokoll einfacher und sicherer zu machen.\
Die Entwicklung ist bereits im Gange und wir gehen davon aus, dass die erste Veröffentlichung bald erfolgen wird.

In diesem Beitrag beschreiben wir die bisherige Reise von Kairo und geben Einzelheiten zu den kommenden Features bekannt.

### Die Kairo-Reise

Bis 2020 war Nischenwissen erforderlich, um STARK-nachweisbare Programme für allgemeine Berechnungen zu erstellen. Dies war nur für diejenigen möglich, die die komplexe Mathematik hinter STARKs verstanden. Konkret musste man für jede Geschäftslogik, also jede Berechnung, eine algebraische Zwischendarstellung (AIR) generieren – einen Satz polynomialer Einschränkungen, die die spezifische Berechnung darstellen.

Cairo entstand aus der Erkenntnis heraus, dass überprüfbare Berechnungen allen Entwicklern überall zur Verfügung gestellt werden sollten. Cairo ermöglicht es Entwicklern, die Leistungsfähigkeit von STARKs zu nutzen.

Seitdem hat die Entwicklergemeinde Kairo zum Bau mit Begeisterung genutzt. Alles im florierenden StarkNet-Ökosystem basiert heute auf Kairo. Zwischen[StarkNet](https://starkware.co/starknet/)und[StarkEx](https://starkware.co/starkex/)haben von Kairo betriebene Anwendungen über 220 Millionen Transaktionen verarbeitet, mehr als 65 Millionen NFTs geprägt und Geschäfte im Wert von 700 Milliarden US-Dollar abgewickelt, die alle über Ethereum abgewickelt wurden.

Während Cairo STARKs zugänglich machte, war es ursprünglich als Assemblersprache konzipiert und daher als Low-Level-Sprache geschrieben.

![Ein Beispiel für die frühen Programme, die in Kairo geschrieben wurden](/assets/cairocode_01.png "Ein Beispiel für die frühen Programme, die in Kairo geschrieben wurden")

Angeregt durch das Feedback von Entwicklern und den Aufstieg von[StarkNet](https://starkware.co/starknet/)haben wir Cairo nach und nach ausdrucksvoller und entwicklerfreundlicher gemacht.

![Ein Beispiel aus dem ERC-20-Kairo-Vertrag, das die Unterstützung von Variablen, if-Anweisungen, Fehlern und der UINT256-Bibliothek demonstriert](/assets/cairocode_02.png "Ein Beispiel aus dem ERC-20-Kairo-Vertrag, das die Unterstützung von Variablen, if-Anweisungen, Fehlern und der UINT256-Bibliothek demonstriert")

Aber wir kamen bald zu dem Schluss, dass es an der Zeit ist, einen großen Schritt nach vorne zu machen und statt schrittweiser Verbesserungen in Kairo eine mutigere Transformation anzustreben.

### Kairo 1.0

Für Cairo 1.0 haben wir einen völlig neuen Compiler entwickelt, der Entwicklern Sicherheitsfunktionen bietet und es ihnen ermöglicht, Verträge einfacher und aussagekräftiger zu verfassen.

#### Wir stellen Sierra vor: Sicherstellen, dass jeder Lauf in Kairo beweisbar ist

Die wichtigste Ergänzung in Cairo 1.0 ist Sierra (**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**tion). Sierra stellt eine neue Zwischendarstellungsschicht zwischen Cairo 1.0 und dem Cairo-Bytecode dar. Ziel von Sierra ist es, sicherzustellen, dass jeder Kairo-Durchlauf – also ein Kairo-Programm und sein Beitrag – nachgewiesen werden kann (mehr dazu weiter unten).

Sierra verspricht Entwicklern in Kairo besseren, zukunftssicheren Code. Für weitere Stabilität sorgt die Tatsache, dass StarkNet-Verträge im Falle von Verbesserungen am zugrunde liegenden System (z. B. Änderungen der CPU-AIR-Architektur, Verbesserungen der endgültigen Übersetzung vom Sierra- in den Cairo-Bytecode) nicht neu kompiliert werden müssen.

**Der Beweis für jeden Lauf in Kairo.**Im alten Kairo kann ein Kairo-Lauf in drei Fällen enden: WAHR, FALSCH oder Misserfolg. Fehlläufe können nicht nachgewiesen werden. Sierra stellt sicher, dass ein Kairo-Lauf niemals fehlschlägt und nur WAHR oder FALSCH ergeben kann. Dies wiederum stellt sicher, dass jeder Lauf in Kairo nachweisbar ist.

Diese Einführung von Sierra hat wichtige Auswirkungen auf StarkNet als erlaubnisloses Netzwerk. Sierra stellt sicher, dass auch rückgängig gemachte Transaktionen in StarkNet-Blöcke aufgenommen werden können. Diese Eigenschaft wird es ermöglichen, dass das StarkNet-Protokoll schlank und einfach bleibt, ohne dass komplexe kryptoökonomische Mechanismen hinzugefügt werden müssen.\
Zwei aussagekräftige Beispiele:

1. Sequencer werden in der Lage sein, Gebühren für rückgängig gemachte Transaktionen zu erheben, sodass StarkNet Sequencer-DoS auf bewährte Weise verhindern kann.
2. Die Implementierung erzwungener L1-Transaktionen wird möglich sein, wodurch StarkNet die vollständige Zensurresistenz von Ethereum übernehmen kann.

### **Sprachmerkmale**

Cairo 1.0 wird viele Verbesserungen an der Programmiersprache selbst bieten. Nicht alles, was unten aufgeführt ist, wird Teil der ersten Veröffentlichung sein, aber es ist Teil der Roadmap.

#### **Verbesserte Syntax**

* Nicht mehr*local*und*tempvar*. Wir brauchen jetzt nur noch*mal*um alle Variablen zu beherrschen.
* Verbesserte Syntax für*wenn*Anweisungen

```python
#Old
if cond != 0 {
  tempvar x = x+1;
} else {
  tempvar x = x;
}
__________________________________
#Neu
if cond { x = x + 1; }
```

#### **Typensicherheitsgarantien**

Der Compiler verwendet starke Typisierung, um die Sicherheit des Codes zu verbessern. Zum Beispiel:

* Zeiger zeigen immer auf den initialisierten Speicher.
* Wörterbücher werden immer gestaucht, anstatt die Verantwortung für den Aufruf von „squash_dict“ dem Programmierer zu überlassen.

#### **Einfacher zu verwendende Sprachkonstrukte**

Zum Beispiel:

* Für Schleifen

```
sei sum = 0
für x in iter {
  sum = sum + x;
}
```

* Boolesche Ausdrücke
* Ganze Zahlen (mit regulärer ganzzahliger Division 👯)
* Überlaufschutz für die entsprechenden Typen
* Boolesche Bedingungen

```
#Old
If cond1:
  if cond2:
       # Irgendein Code
  else if cond3:
       # Gleicher Code
__________________________________
#New
If cond1 && (cond2 || cond3) { … }
```

#### **Ein vollwertiges Typensystem**

* Abstrakte Datentypen (z. B Rostartige Aufzählung)

```
enum Option<T> {
 Some: T,
 None,
}
match result {
 Some(r) => {..},
 None => {..},
}
```

* Züge

```
Merkmal Add<Uint256> {
    fn add(…) { … }
}

let a: Uint256 = 1;
let b: Uint256 = 4;
a + b; // Ausgewertet als 5 vom Typ Uint256.
```

#### **Intuitivere Bibliotheken**

(z. B. Diktat, Arrays)

* Diktat<Uint256, MyStruct>;
* Array<MyOtherStruct>;

#### **Optimierter Code**

Es ist nicht erforderlich, die Zuweisung lokaler Variablen explizit anzugeben – wird automatisch erkannt und durchgeführt.

#### **Bessere Compiler-Integration**

Ermöglicht eine bessere IDE-Unterstützung, Paketverwaltung und eine bessere Erleichterung von Community-Beiträgen.

### **Abschluss**

Zwei Jahre nachdem Cairo zum ersten Mal in der Produktion eingesetzt wurde, entwickeln wir Cairo 1.0, das eine verbesserte Ausdrucksfähigkeit, Sicherheit und Syntax bieten wird. Es wird einen großen Schritt nach vorne machen und es Entwicklern ermöglichen, ihre StarkNet-Verträge einfacher zu schreiben.

In einem weiteren Beitrag, der demnächst erscheint, werden wir weitere Einzelheiten darüber mitteilen, wie sich Cairo 1.0 auf die Regenerierung von StarkNet auswirken wird und wie Entwickler sich auf die Veröffentlichung vorbereiten sollten.