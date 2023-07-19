Wir freuen uns, Ihnen mitteilen zu können, dass in Version 0.12.1 die integrierte Keccak-Funktion auf Starknet aktiviert wird.

Der Cairo-Stack und das Starknet-Protokoll verwenden integrierte Funktionen. Diese integrierten Funktionen rationalisieren den Berechnungsprozess, indem sie die Anzahl der erforderlichen Trace-Zellen reduzieren, was zu effizienteren Beweisen führt. Der aktuelle Ansatz, eine statische Liste von Layouts für verschiedene integrierte Funktionen zu verwenden, weist jedoch Einschränkungen auf.

Um dieses Problem anzugehen, plant das Entwicklungsteam die Implementierung dynamischer Layouts mit Keccak, die das Layout an jede Prüfungsaufgabe anpassen und so die Zuweisung von Spurenzellen optimieren. Dieser dynamische Ansatz wird die Effizienz steigern, die Integration neuer integrierter Funktionen vereinfachen und unnötige Kosten für Benutzer reduzieren, wodurch der Prüfprozess rationalisiert und effektiver wird.

Weitere Informationen zu integrierten und dynamischen Layouts [finden Sie hier](https://starkware.medium.com/builtins-and-dynamic-layouts-e419a73e29e).