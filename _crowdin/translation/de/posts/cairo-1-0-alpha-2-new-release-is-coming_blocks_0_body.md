### TL;DR

* Wir veröffentlichen Cairo 1.0-alpha.2, das eine Reihe neuer Funktionen in die Sprache bringt
* Es ist jetzt möglich, einen ERC20-Vertrag zu implementieren
* Diese neuen Sprachfunktionen werden in der kommenden Version von StarkNet-v0.11.0 verfügbar sein

### Neue Features!

Kairo 1.0 setzt seine schnelle Verbesserungsgeschwindigkeit fort. Die heutige Veröffentlichung führt unter anderem alle notwendigen Funktionen ein, um einen ERC-20-Vertrag zu schreiben.

Um einige der neuen Funktionen zu nennen:

* Wörterbücher
* Ereignisse in Verträgen
* Speichervariablen zuordnen
* Merkmalsunterstützung
* Eingabeinferenz
* Methoden

Sehen Sie sich die komplette Liste im GitHub [Repository an.](https://github.com/starkware-libs/cairo)

Werfen wir einen Blick auf ein Beispiel für einen ERC20-Vertrag (ganz konkretes Beispiel ist natürlich auf[GitHub](https://github.com/starkware-libs/cairo/blob/main/crates/cairo-lang-starknet/test_data/erc20.cairo)), um einen Anwendungsfall eines Ereignisses und Mappings im Speicher zu zeigen:

![](/assets/0_i4ch5-4rxxal4rkt.png)

### Springe ins Wasser!

Wir arbeiten weiterhin an zwei parallelen Vektoren:

1. Evolve Cairo 1.0 in voller Geschwindigkeit auf dem Weg zur vollständigen Kompatibilität mit dem alten Kairo.
2. Starknet v0.11.0 entwickeln, um in Kairo 1.0 geschlossene Verträge zu unterstützen

In der Zwischenzeit ermutigen wir Entwickler, mit Kairo 1.0 zu schreiben und sich damit vertraut zu machen.

Für alle Fragen – du kannst den Kairo 1.0 Discord[Kanal](https://discord.com/channels/793094838509764618/1065544063245365288) benutzen.

Für Anregungen oder Feedback – zögern Sie nicht, ein[-Problem](https://github.com/starkware-libs/cairo/issues)im Repo von Kairo zu öffnen.