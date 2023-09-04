## Einführung

Starknet ist ein Validity Rollup Layer 2. Es bietet einen hohen Durchsatz, niedrige Gaskosten und behält das Sicherheitsniveau der Ethereum-Schicht 1 bei

Bei einem Sudoku-Rätsel ist es einfacher, eine Lösung zu überprüfen, als sie von Grund auf neu zu lösen. Wenn es unser Ziel ist, Menschen von der Aussage „Dieses Rätsel wurde gelöst“ zu überzeugen, können wir viel Rechenaufwand einsparen, indem wir eine Person eine Lösung berechnen lassen und sie dann zur Überprüfung an andere weitergeben. Bei dieser Strategie wird jede Berechnung einer Lösung zu einem einmaligen Ereignis, das keiner Replikation durch die Gesellschaft bedarf. In ähnlicher Weise skaliert Starknet Ethereum, indem es umfangreiche L1-Berechnungen durch leichtere (und damit günstigere!) ersetzt. L1-Verifizierung mithilfe von STARK-Beweisen, die außerhalb der Kette berechnet werden.

## Wie es funktioniert

Angesichts der obigen Analogie ist die Zeit reif für etwas Fachjargon. Starknet ist ein erlaubnisloses Validity-Rollup (auch bekannt als „ZK-Rollup“), das allgemeine Berechnungen unterstützt und derzeit in der Produktion als L2-Netzwerk über Ethereum betrieben wird. Die letztendliche L1-Sicherheit von Starknet wird durch die Verwendung des sichersten und skalierbarsten kryptografischen Beweissystems gewährleistet – [STARK](https://starkware.co/stark/).

Starknet-Verträge sind (größtenteils) in der Kairo-Sprache geschrieben – einer vollständigen Turing-Programmiersprache, die für STARK-Beweise entwickelt wurde.