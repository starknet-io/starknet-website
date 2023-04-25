### TL;DR

* Kairo 1.0 ist die erste große Version nach der[Einführung von Kairo](https://medium.com/starkware/hello-cairo-3cb43b13b209)vor zwei Jahren
* Kairo 1.0 wird Entwicklern eine sicherere, einfachere, benutzerfreundlichere Programmiersprache geben
* Im Mittelpunkt von Kairo 1.0 steht**Sierra**, eine zwischengeschaltete Reprätionsschicht, die eine größere langfristige Stabilität für Kairoer Programme verspricht
* Sierra bringt Kairo dazu, in einem genehmigungsfreien Netzwerk zu dienen:\
  -**Schutz des Netzwerks**: Es ermöglicht einen robusteren DoS-Schutz\
  -**Schutz des Benutzers**: Es ermöglicht Zensurwiderstand auf Ethereum-Niveau Kairo 1.0 wird StarkNet in vielerlei Hinsicht beeinflussen. Es wirkt auch die[Regenesis](https://medium.com/starkware/regenesis-starknets-no-sweat-state-reset-e296b12b80ae). In den kommenden Wochen werden wir weitere Informationen über Regenesis veröffentlichen.

### Einführung

Im Jahr 2020 haben wir Kairo veröffentlicht, eine Turing-Komplett-Programmiersprache und einen großen Schritt zur Unterstützung überprüfbarer Berechnungen mit STARKs getan. Heute kündigen wir**Kairo 1.0**an, der bisher größte Fortschritt von Kairo. Es wird eine verbesserte Sprache einführen, mit Funktionen, die die Benutzerfreundlichkeit, Sicherheit und Komfort verbessern. Es wurde entwickelt, um die Anforderungen von StarkNet als unberechtigtes Netzwerk zu unterstützen und so das Protokoll einfacher und sicherer zu machen.\
Die Entwicklung läuft bereits, und wir erwarten, dass die erste Veröffentlichung bald stattfindet.

In diesem Beitrag beschreiben wir die Reise von Kairo so weit und teilen Details über die kommenden Funktionen.

### Die Reise von Kairo

Bis 2020 war Nischenwissen nötig, um STARK-nachweisbare Programme für die allgemeine Berechnung zu erstellen. Es war nur für diejenigen möglich, die die komplexe Mathematik hinter STARKs verstanden haben. Konkret für jede Geschäftslogik, z. jede Berechnung, die notwendig ist, um eine Algebraische Zwischenrepräsentation (AIR) zu generieren — eine Reihe polynomieller Einschränkungen, die die spezifische Berechnung repräsentieren.

Kairo entstand aus der Erkenntnis, dass überprüfbare Berechnungen für Entwickler überall zur Verfügung gestellt werden sollten. Kairo ermöglicht Entwicklern, die Kraft von STARK zu nutzen.

Die Entwicklergemeinschaft hat inzwischen Kairo beschlagnahmt, begeistert aufzubauen. Alles im heute blühenden Ökosystem von StarkNet basiert auf Kairo. Zwischen[StarkNet](https://starkware.co/starknet/)und[StarkEx](https://starkware.co/starkex/)haben Kairobetriebene Anwendungen über 220M Transaktionen abgewickelt Über 65M NFTs prägte und im Wert von 700B handelte es sich um Geschäfte, die alle auf Ethereum niedergelassen wurden.

Während Kairo die STARKs zugänglich machte, wurde sie ursprünglich als Montagesprache konzipiert und als solche als Sprache auf niedrigem Niveau geschrieben.

![Ein Beispiel für die frühen Programme, die in Kairo geschrieben wurden](/assets/cairocode_01.png "Ein Beispiel für die frühen Programme, die in Kairo geschrieben wurden")

Durch Feedback von Entwicklern und den Aufstieg von[StarkNet](https://starkware.co/starknet/)haben wir Kairo nach und nach ausdrucksvoller und entwicklerfreundlicher gemacht.

![Ein Beispiel aus dem ERC-20-Vertrag von Kairo, das die Unterstützung von Variablen demonstriert, wenn Anweisungen, Fehler und UINT256-Bibliothek](/assets/cairocode_02.png "Ein Beispiel aus dem ERC-20-Vertrag von Kairo, das die Unterstützung von Variablen demonstriert, wenn Anweisungen, Fehler und UINT256-Bibliothek")

Aber wir kamen bald zu dem Schluss, dass es an der Zeit ist, einen großen Schritt nach vorn zu tun und anstatt inkrementelle Verbesserungen in Kairo zu erreichen, gehen Sie auf eine mutigere Transformation.

### Cairo 1.0

Für Kairo 1. wir haben von Grund auf einen neuen Compiler aufgebaut, der Entwicklern Sicherheitsfunktionen zur Verfügung stellen wird. und wird es ihnen ermöglichen, Verträge einfacher und ausdrucksvoller zu schreiben.

#### Sierra einführen: Sicherstellen, dass jeder Run von Kairo nachgewiesen werden kann

Die wichtigste Ergänzung in Kairo 1. is Sierra (**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**tion). Sierra bildet eine neue mittlere Repräsentation Schicht zwischen Kairo 1.0 und Kairo Byte Code. Sierras Ziel ist es, sicherzustellen, dass jeder Kairo läuft – also ein Kairoer Programm und dessen Input – nachgewiesen werden kann (siehe weiter unten).

Sierra verspricht Kairo einen besseren zukunftssicheren Code. Für weitere Stabilität sorgt die Tatsache, dass StarkNet-Verträge im Falle von Verbesserungen des zugrunde liegenden Systems (e. ., CPU AIR-Architektur Änderungen, Verbesserungen der endgültigen Übersetzung von Sierra nach Kairo Byte-Code).

**Beweisen Sie jeden Kairo.**Im alten Kairo kann ein Kairoer Lauf in drei Fällen führen – TRUE, FALSE oder Misserfolg. Fehlgeschlagene Abläufe können nicht nachgewiesen werden. Sierra stellt sicher, dass ein Kairoer Lauf niemals scheitern wird und nur zu TRUE oder FALSE führen kann. Dies wiederum stellt sicher, dass jeder Lauf von Kairo nachgewiesen werden kann.

Diese Einführung von Sierra hat wichtige Auswirkungen auf StarkNet als unberechtigtes Netzwerk. Sierra stellt sicher, dass auch rückgängig getätigte Transaktionen in StarkNet-Blöcke aufgenommen werden können. Diese Eigenschaft erlaubt es dem StarkNet-Protokoll schlank und einfach zu bleiben, ohne komplexe krypto-ökonomische Mechanismen hinzuzufügen.\
Zwei aussagekräftige Beispiele:

1. Sequenzer können Gebühren für rückgängig gemachte Transaktionen erheben, so dass StarkNet Sequenzer DoS auf eine gut etablierte Weise verhindern kann.
2. Die Umsetzung erzwungener L1-Transaktionen wird möglich sein, wodurch StarkNet den vollständigen Widerstand gegen die Zensur von Ethereum erben kann.

### **Sprachfunktionen**

Kairo 1.0 wird viele Verbesserungen in der Programmiersprache selbst bieten. Nicht alles, was unten aufgeführt wird, wird Teil der ersten Veröffentlichung sein, aber es ist Teil der Roadmap.

#### **Verbesserte Syntax**

* Keine*lokale*und*tempvar* mehr. Wir brauchen jetzt nur*lassen*um alle Variablen zu regeln.
* *verbessert, wenn*Statement-Syntax

```python
#Alt
wenn cond ! 0 {
  tempvar x = x+1;
} else {
  tempvar x = x;
}
__________________________________
#Neu
wenn cond { x = x + 1; }
```

#### **Typsicherheitsgarantien**

Der Compiler wird starke Tippen verwenden, um die Sicherheit des Codes zu verbessern. Zum Beispiel:

* Zeiger werden immer auf initialisierten Speicher verweisen.
* Wörterbücher werden immer ausgequetscht werden, anstatt die Verantwortung zu überlassen, squash_dict an den Programmierer zu rufen.

#### **Einfacher Sprachkonstrukte zu verwenden**

Zum Beispiel:

* Für Schleifen

```
lasst Summe = 0
für x in iter {
  summe = summe + x;
}
```

* Boolesche Ausdrücke
* Ganzzahlen (mit regulärer Ganzzahl 👯)
* Überlaufschutz für die relevanten Typen
* Boolesche Bedingungen

```
#Alt
wenn cond1:
  if cond2:
       # Einige Code
  else wenn cond3:
       # Gleicher Code
__________________________________
#Neu
Wenn cond1 && (cond2 || cond3) { … }
```

#### **Ein vollwertiges System**

* Abstrakte Datentypen (z. Rust wie Enum)

```
enum Option<T> {
 einige: T,
 keine,
}
Treffer {
 Some(r) => {..},
 Keine => {..},
}
```

* Merkmale

```
Merkmal Hinzufügen<Uint256> {
    fn add(…) { … }
}

lassen Sie a: Uint256 = 1;
lassen Sie b: Uint256 = 4;
a + b; // Auswertet zu 5 des Typs Uint256.
```

#### **Mehr intuitive Bibliotheken**

(z.B. dict, Arrays)

* Diktat<Uint256, MyStruct>;
* Arrays<MyOtherStruct>;

#### **Optimierterer Code**

Keine Notwendigkeit, die Zuordnung lokaler Variablen explizit zu bestimmen — automatisch erkannt und automatisch erledigt.

#### **Bessere Compiler-Integration**

Verbesserung der IDE-Unterstützung, Paketverwaltung und bessere Erleichterung von Community-Beiträgen.

### **Schlussfolgerung**

Zwei Jahre, nachdem Kairo zum ersten Mal in der Produktion verwendet wurde, entwickeln wir Kairo 1,0, was eine verbesserte Ausdrucksfähigkeit, Sicherheit und Syntax liefern wird. Es wird einen großen Schritt nach vorn dauern, so dass Entwickler ihre StarkNet-Verträge leichter schreiben können.

In einem anderen Post, demnächst werden wir mehr Details darüber teilen, wie Kairo 1. wirkt sich auf StarkNets Regenese aus und wie Entwickler sich auf seine Veröffentlichung vorbereiten sollten.