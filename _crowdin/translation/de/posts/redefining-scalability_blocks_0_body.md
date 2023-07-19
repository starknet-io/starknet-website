Die Skalierbarkeit von Blockchain war schon immer ein heißes Thema. Nahezu jedes Blockchain-Netzwerk wirbt mit einer hohen Anzahl an Transaktionen pro Sekunde (TPS) als Verkaufsargument. TPS ist jedoch keine gültige Messgröße für den Vergleich von Blockchain-Netzwerken – was es zu einer Herausforderung macht, ihre relative Leistung zu bewerten. Darüber hinaus sind große TPS-Zahlen in der Regel mit Kosten verbunden – was die Frage aufwirft: Sind diese Netzwerke tatsächlich skalierbar oder erhöhen sie nur ihren Durchsatz?

Sehen wir uns also an, wie Skalierbarkeit definiert wird, welche Kompromisse eingegangen werden müssen, um sie zu erreichen, und warum Validity Rollups die ultimative Skalierbarkeitslösung sind.

### Nicht alle Transaktionen sind gleich

Zunächst müssen wir unsere Behauptung begründen, dass die einfache und praktische TPS-Metrik kein genaues Maß für die Skalierbarkeit ist.

Um Knoten für die Ausführung von Transaktionen zu entschädigen (und um Benutzer davon abzuhalten, das Netzwerk mit unnötigen Berechnungen zu überlasten), erheben Blockchains eine Gebühr, die proportional zur Rechenlast ist, die der Blockchain auferlegt wird. In Ethereum wird die Komplexität des Rechenaufwands in*Gas gemessen.*Da Gas ein sehr praktisches Maß für die Transaktionskomplexität ist, wird der Begriff in diesem Artikel auch für Nicht-Ethereum-Blockchains verwendet, auch wenn er typischerweise Ethereum-spezifisch ist.

Transaktionen unterscheiden sich erheblich in ihrer Komplexität und damit in der Menge an Gas, die sie verbrauchen. Bitcoin, der Pionier vertrauenswürdiger Peer-to-Peer-Transaktionen, unterstützt nur das rudimentäre Bitcoin-Skript. Diese einfachen Überweisungen von Adresse zu Adresse verbrauchen wenig Treibstoff. Im Gegensatz dazu unterstützen intelligente Vertragsketten wie Ethereum oder Solana eine virtuelle Maschine und Turing-vollständige Programmiersprachen, die viel komplexere Transaktionen ermöglichen. Daher benötigen dApps wie Uniswap viel mehr Gas.

Aus diesem Grund macht es keinen Sinn, die TPS verschiedener Blockchains zu vergleichen. Was wir stattdessen vergleichen sollten, ist die Rechenkapazität – oder der Durchsatz.

Alle Blockchains haben eine (variable) Blockgröße und Blockzeit, die bestimmen, wie viele*Recheneinheiten*pro Block verarbeitet werden können und wie*schnell*ein neuer Block hinzugefügt werden darf. Zusammen bestimmen diese beiden Variablen den*Durchsatz*einer Blockchain.

### Was schränkt die Skalierbarkeit ein?

Blockchains streben danach, maximal dezentrale, integrative Netzwerke zu sein. Um dies zu erreichen, müssen zwei grundlegende Eigenschaften unter Kontrolle gehalten werden.

#### **1. Hardware-Anforderungen**

Die Dezentralisierung eines Blockchain-Netzwerks wird durch die Fähigkeit des schwächsten Knotens im Netzwerk bestimmt, die Blockchain zu überprüfen und ihren Zustand beizubehalten. Daher sollten die Kosten für den Betrieb eines Knotens (Hardware, Bandbreite und Speicher) so gering wie möglich gehalten werden, um möglichst vielen Personen die Möglichkeit zu geben, erlaubnislose Teilnehmer am vertrauenswürdigen Netzwerk zu werden.

#### 2**.**Staatswachstum

Das Staatswachstum bezieht sich darauf, wie schnell die Blockchain wächst. Je mehr Durchsatz eine Blockchain pro Zeiteinheit zulässt, desto schneller wächst die Blockchain. Vollständige Knoten speichern den Verlauf des Netzwerks und müssen in der Lage sein, den Status des Netzwerks zu validieren. Der Zustand von Ethereum wird mithilfe effizienter Strukturen wie Bäumen gespeichert und referenziert. Wenn der Staat wächst, werden ihm neue Blätter und Zweige hinzugefügt, was die Durchführung bestimmter Aktionen immer komplexer und zeitaufwändiger macht. Wenn die Kette größer wird, verschlechtert sich die Worst-Case-Ausführung durch Knoten, was dazu führt, dass die Zeit für die Validierung neuer Blöcke immer länger wird. Mit der Zeit erhöht sich dadurch auch die Gesamtzeit, die für die Synchronisierung eines vollständigen Knotens benötigt wird.

### Nachteilige Auswirkungen eines steigenden Durchsatzes

#### 1. Knotenanzahl

Die Mindestanforderungen für den Betrieb eines Knotens und die Anzahl der Knoten sind:

* Bitcoin¹: 350 GB Festplattenspeicher, 5 Mbit/s-Verbindung, 1 GB RAM, CPU >GHz. **Anzahl der Knoten: ~10.000**
* Ethereum²: 500 GB+ SSD-Speicherplatz, 25 Mbit/s-Verbindung, 4–8 GB RAM, CPU 2–4 Kerne. **Anzahl der Knoten: ~6.000**
* Solana³: 1,5 TB+ SSD-Festplattenspeicher, 300 Mbit/s Verbindung, 128 GB RAM CPU 12+ Kerne. **Anzahl der Knoten: ~1.200**

Beachten Sie, dass je größer die CPU-, Bandbreiten- und Speicheranforderungen für Knoten sind, die für den Durchsatz einer Blockchain erforderlich sind, desto weniger Knoten im Netzwerk vorhanden sind – was zu einer schwächeren Dezentralisierung und einem weniger integrativen Netzwerk führt.

#### 2. Zeit, einen vollständigen Knoten zu synchronisieren

Wenn ein Knoten zum ersten Mal ausgeführt wird, muss er sich mit allen vorhandenen Knoten synchronisieren, den Status des Netzwerks vom Genesis-Block bis zur Spitze der Kette herunterladen und validieren. Dieser Prozess sollte so schnell und effizient wie möglich sein, damit jeder als erlaubnisloser Teilnehmer des Protokolls agieren kann.

Tabelle 1 nimmt Jameson Lopps[2020 Bitcoin Node](https://blog.lopp.net/2020-bitcoin-node-performance-tests/)und[2021 Node Sync Tests](https://blog.lopp.net/2021-altcoin-node-sync-tests/)als Indikator und vergleicht die Zeit, die benötigt wird, um einen vollständigen Bitcoin-Knoten vs. Ethereum vs. Solana auf einem durchschnittlichen Verbraucher-PC zu synchronisieren.

![Tabelle 1. Vergleich von Blockchain-Durchsatz und Knotensynchronisierung](/assets/1_gmpi_1c9zipoc-znrh7b5q.png "Tabelle 1. Vergleich von Blockchain-Durchsatz und Knotensynchronisierung")

Tabelle 1 zeigt, dass ein steigender Durchsatz zu längeren Synchronisierungszeiten führt, da immer mehr Daten verarbeitet und gespeichert werden müssen.

Während ständig Verbesserungen an der Node-Software vorgenommen werden, um die Herausforderung der wachsenden Blockchain zu mildern (Verringerung des Festplatten-Footprints, schnellere Synchronisierungsgeschwindigkeiten, stärkere Absturzresistenz, Modularisierung bestimmter Komponenten usw.), können die Nodes offensichtlich immer noch nicht mit den Zuwächsen Schritt halten zum Durchsatz.

### Wie sollte Skalierbarkeit definiert werden?

Skalierbarkeit ist der am häufigsten falsch dargestellte Begriff im Blockchain-Bereich. Eine Erhöhung des Durchsatzes ist zwar wünschenswert, aber nur ein Teil des Puzzles.

***Skalierbarkeit**bedeutet**weitere Transaktionen**für die**gleiche Hardware**.*

Aus diesem Grund kann die Skalierbarkeit in zwei Kategorien unterteilt werden.

#### Skalierbarkeit des Sequenzers

Sequenzierung beschreibt den Vorgang der Bestellung und Verarbeitung von Transaktionen in einem Netzwerk. Wie bereits festgestellt, könnte jede Blockchain ihren Durchsatz trivial steigern, indem sie die Blockgröße erhöht und ihre Blockzeit verkürzt – bis zu einem Punkt, an dem die negativen Auswirkungen auf ihre Dezentralisierung als zu groß erachtet werden. Die Optimierung dieser einfachen Parameter führt jedoch nicht zu den erforderlichen Verbesserungen. Das EVM von Ethereum kann theoretisch bis zu ~2.000</a>

, was nicht ausreicht, um den langfristigen Blockraumbedarf zu decken. Um die Sequenzierung zu skalieren, hat Solana einige beeindruckende Innovationen vorgenommen: die Nutzung einer parallelisierbaren Ausführungsumgebung und eines cleveren Konsensmechanismus, der einen weitaus effizienteren Durchsatz ermöglicht. Aber trotz seiner Verbesserungen ist es weder ausreichend noch skalierbar. Da Solana seinen Durchsatz erhöht, steigen auch die Hardwarekosten für den Betrieb eines Knotens und die Verarbeitung von Transaktionen.</p> 



#### Skalierbarkeit der Verifizierung

*Verifizierungsskalierbarkeit beschreibt Ansätze, die den Durchsatz erhöhen, ohne Knoten mit ständig steigenden Hardwarekosten zu belasten.*Konkret bezieht es sich auf kryptografische Innovationen wie Validitätsnachweise. Sie sind der Grund, warum Validity Rollups eine Blockchain nachhaltig skalieren können.

**Was ist ein Gültigkeits-Rollup?**

Gültigkeits-Rollups (auch als „ZK-Rollups“ bekannt) verschieben Berechnungen und Statusspeicherung außerhalb der Kette, behalten jedoch eine kleine Menge bestimmter Daten in der Kette. Ein Smart Contract auf der zugrunde liegenden Blockchain verwaltet die Statuswurzel des Rollups. Beim Rollup wird ein Stapel hochkomprimierter Transaktionen zusammen mit dem aktuellen Statusstamm an einen Off-Chain-Prover gesendet. Der Prüfer berechnet die Transaktionen, generiert einen Gültigkeitsnachweis der Ergebnisse und der neuen Statuswurzel und sendet ihn an einen Verifizierer in der Kette. Der Prüfer überprüft den Gültigkeitsnachweis und der Smart-Vertrag, der den Status des Rollups verwaltet, aktualisiert ihn auf den neuen Status, der vom Prüfer bereitgestellt wird.

**Wie skalieren Validity Rollups bei gleichen Hardware-Anforderungen?**

Auch wenn Provers High-End-Hardware erfordern, haben sie keinen Einfluss auf die Dezentralisierung einer Blockchain; denn die Gültigkeit von Transaktionen wird durch mathematisch überprüfbare Beweise garantiert.

Entscheidend sind die Anforderungen zur Überprüfung der Nachweise. Da die beteiligten Daten stark komprimiert sind und weitgehend durch Berechnungen abstrahiert werden, ist ihre Auswirkung auf Knoten der zugrunde liegenden Blockchain minimal*.*

Verifizierer (Ethereum-Knoten) erfordern keine High-End-Hardware und die Größe der Stapel erhöht die Hardwareanforderungen nicht. Lediglich Zustandsübergänge und eine kleine Menge an Anrufdaten müssen von den Knoten verarbeitet und gespeichert werden. Dadurch können alle Ethereum-Knoten Validity Rollup-Batches mithilfe ihrer vorhandenen Hardware überprüfen.

**Je mehr Transaktionen, desto günstiger wird es**

Bei traditionellen Blockchains gilt: Je mehr Transaktionen stattfinden, desto teurer wird es für alle, da der Blockraum voll wird – und Benutzer müssen sich auf einem Gebührenmarkt gegenseitig überbieten, um ihre Transaktionen einzubeziehen.

Bei einem Gültigkeits-Rollup ist diese Dynamik umgekehrt. Die Überprüfung einer Reihe von Transaktionen auf Ethereum ist mit bestimmten Kosten verbunden. Wenn die Anzahl der Transaktionen innerhalb eines Stapels zunimmt, steigen die Kosten für die Überprüfung des Stapels exponentiell langsamer. Das Hinzufügen weiterer Transaktionen zu einem Batch führt zu günstigeren Transaktionsgebühren, auch wenn die Kosten für die Batch-Verifizierung steigen – da diese auf alle Transaktionen innerhalb des Batches verteilt werden. Validity Rollups wollen so viele Transaktionen wie möglich in einem Stapel – damit die Verifizierungsgebühr auf alle Benutzer aufgeteilt werden kann. Wenn die Batch-Größe ins Unendliche anwächst, nähert sich die amortisierte Gebühr pro Transaktion gegen Null an, d. h. je mehr Transaktionen in einem Validity Rollup enthalten sind, desto günstiger wird es für alle.

dYdX, eine dApp, die auf einem Validity Rollup basiert, sieht häufig Batch-Größen von über 12.000 Transaktionen. Der Vergleich des Gasverbrauchs derselben Transaktionen im Mainnet mit einem Validity Rollup verdeutlicht die Skalierbarkeitsgewinne:

Abwicklung einer dYdX-Transaktion im Ethereum Mainnet:**200.000 Gas**

Abwicklung einer dYdX-Transaktion auf StarkEx:**<500 Gas**

Anders ausgedrückt: Die Hauptkosten von Validity Rollups skalieren linear mit der Anzahl der Benutzer innerhalb desselben Batches.



#### Warum Optimistic Rollups nicht so skalierbar sind, wie man vielleicht denkt

Theoretisch bieten Optimistic Rollups nahezu die gleichen Skalierbarkeitsvorteile wie Validity Rollups. Es gibt jedoch einen wichtigen Unterschied: Optimistische Rollups optimieren für den Durchschnittsfall, während Validitäts-Rollups für den schlechtesten Fall optimieren. Da Blockchain-Systeme unter extrem schwierigen Bedingungen arbeiten, ist die Optimierung für den schlimmsten Fall der einzige Weg, Sicherheit zu erreichen.

Im schlimmsten Fall des Optimistic Rollup werden die Transaktionen eines Benutzers nicht von Betrugsprüfern überprüft. Um Betrug vorzubeugen, muss der Benutzer also einen Ethereum-Vollknoten und einen L2-Vollknoten synchronisieren und die verdächtige Transaktion selbst berechnen.

Im schlimmsten Fall des Validity Rollup müsste ein Benutzer nur einen vollständigen Ethereum-Knoten synchronisieren, um den Gültigkeitsnachweis zu überprüfen, was ihm den Rechenaufwand erspart.

Im Gegensatz zu Validity Rollups skalieren die Kosten von Optimistic Rollups linear mit der Anzahl der Transaktionen statt mit der Anzahl der Benutzer, was sie teurer macht.



### Letzter Teil des Puzzles – Erlaubnisloser Zugriff auf den Rollup-Status

Um die Gültigkeit von Transaktionen zu gewährleisten, müssen Benutzer lediglich einen Ethereum-Knoten betreiben. Benutzer und Entwickler möchten jedoch möglicherweise den Status und die Ausführung des Rollups für verschiedene Zwecke anzeigen und ausführen. Ein*indizierender L2-Knoten*erfüllt diesen Bedarf perfekt. Es ermöglicht Benutzern nicht nur, die Transaktionen im Netzwerk zu sehen, sondern ist auch ein wichtiger Teil der Infrastruktur, der für das Funktionieren der Ökosysteminfrastruktur erforderlich ist. Indexer wie The Graph, Alchemy, Infura; Oracle-Netzwerke wie Chainlink und Block-Explorer werden alle vollständig von einem erlaubnisfreien, indizierenden L2-Knoten unterstützt.



### Abschluss

Viele Ansätze zur Verbesserung der Blockchain-Skalierbarkeit konzentrieren sich fälschlicherweise auf die Erhöhung*Durchsatzes*. Dabei werden jedoch die Auswirkungen des Durchsatzes auf Knoten vernachlässigt: die ständig steigenden Hardwareanforderungen für die Verarbeitung von Blöcken und die Speicherung des Netzwerkverlaufs sowie die Art und Weise, wie dies die Dezentralisierung eines Netzwerks behindert.

Mit dem Aufkommen der validitätssicheren Kryptografie kann eine Blockchain**echte Skalierbarkeit**erreichen, die Knoten nicht mit ständig steigenden Kosten belastet und eine umfassende Dezentralisierung ermöglicht. Jetzt sind mehr Transaktionen mit leistungsfähigeren und komplexeren Berechnungen für dieselbe Hardware möglich, wodurch sich das Dilemma des Gebührenmarktes umkehrt – je mehr Aktivität auf einem Validity Rollup, desto günstiger wird es!

[SwagtimusPrime.eth](https://twitter.com/SwagtimusP?t=pO0L1vGIhuC-ZgWOusQYtA&s=09)und[Louis Guthmann](https://twitter.com/GuthL)

¹ Von<https://bitcoin.org/en/bitcoin-core/features/requirements>

² Von<https://ethereum.org/en/developers/docs/nodes-and-clients/>

³ Von<https://docs.solana.com/running-validator/validator-reqs>

⁴ Stark vereinfacht und an durchschnittliche dynamische Blockgrößen angepasst