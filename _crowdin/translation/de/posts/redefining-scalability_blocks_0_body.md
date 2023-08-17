Die Skalierbarkeit der Blockchain war schon immer ein erhitztes Thema. Fast jedes Blockchain-Netzwerk berührt eine hohe Anzahl von Transaktionen pro Sekunde (TPS) als Verkaufsstelle. Allerdings ist TPS kein gültiger Metrus, um Blockchain-Netzwerke mit — zu vergleichen, was es zu einer Herausforderung macht, ihre relative Leistung zu bewerten. Darüber hinaus kommen große TPS-Nummern normalerweise zu einem Preis – was die Frage aufwirft, ob diese Netze tatsächlich skaliert werden. oder erhöhen sie einfach ihren Durchsatz?

Lassen Sie uns also prüfen, wie man Skalierbarkeit definiert, welche Kompromisse gemacht werden, um sie zu erreichen, und warum Validity Rollups die ultimative Skalierbarkeitslösung sind.

### Nicht alle Transaktionen sind gleich gemacht

Erstens müssen wir unsere Behauptung festlegen, dass das einfache und bequeme TPS kein genaues Maß für Skalierbarkeit ist.

Knoten für die Ausführung von Transaktionen kompensieren (und Benutzer davon abzuhalten, das Netzwerk mit unnötiger Berechnung zu Spammen) blockchains berechnen eine Gebühr, die proportional zur rechnerischen Belastung der Blockchain ist. In Ethereum wird die Komplexität der Rechenlast in*Gas gemessen.*Weil Gas ein sehr praktisches Maß für die Komplexität der Transaktionen ist, der Begriff wird während dieses gesamten Artikels auch für nicht-Ethereum-Blockchains verwendet, obwohl er typischerweise Ethereum-spezifisch ist.

Die Transaktionen unterscheiden sich erheblich von der Komplexität und somit von der Höhe des Gasverbrauchs. Bitcoin, der Pionier vertrauensloser Peer-to-Peer-Transaktionen, unterstützt nur das rudimentäre Bitcoin-Skript. Diese einfachen Transfers von Adresse zu Adresse verwenden wenig Gas. Im Gegensatz dazu unterstützen intelligente Vertragsketten wie Ethereum oder Solana eine virtuelle Maschine und Turing-vollständige Programmiersprachen, die wesentlich komplexere Transaktionen ermöglichen. Daher benötigen dApps wie Uniswap viel mehr Gas.

Aus diesem Grund macht es keinen Sinn, den TPS verschiedener Blockketten zu vergleichen. Was wir stattdessen vergleichen sollten, ist die Fähigkeit zur Berechnung — oder zum Durchsatz.

Alle Blockchains haben eine (variable) Blockgröße und Blockzeit, die bestimmt, wie viele*Berechnungseinheiten*pro Block verarbeitet werden können und wie*schnell*ein neuer Block hinzugefügt werden kann. Zusammen bestimmen diese beiden Variablen den*Durchsatz*einer Blockchain.

### Was beschränkt die Skalierbarkeit?

Blockchains streben nach einer maximalen Dezentralisierung, inklusive Netzwerke. Um dies zu erreichen, müssen zwei grundlegende Eigenschaften unter Kontrolle gehalten werden.

#### **1. Hardwareanforderungen**

Die Dezentralisierung eines Blockchain-Netzwerks wird durch die Fähigkeit des schwächsten Knotens im Netzwerk bestimmt, die Blockchain zu überprüfen und ihren Status zu behalten. Daher die Kosten für den Betrieb eines Knotens (Hardware, Bandbreite, und Speicher) sollte so gering wie möglich gehalten werden, damit möglichst viele Personen unzulässige Teilnehmer im vertrauenslosen Netzwerk werden können.

#### 2**.**Zustandswachstum

Staatliches Wachstum bezieht sich darauf, wie schnell die Blockchain wächst. Je mehr Durchsatz eine Blockchain pro Zeiteinheit erlaubt, desto schneller wächst die Blockkette. Vollständige Knoten speichern den Verlauf des Netzwerks und müssen in der Lage sein, den Status des Netzwerks zu validieren. Der Zustand von Ethereum wird mit effizienten Strukturen wie Bäumen gespeichert und referenziert. Während der Staat wächst, werden ihm neue Blätter und Zweige hinzugefügt, was es immer komplexer und zeitaufwendiger macht, bestimmte Aktionen durchzuführen. Mit zunehmender Größe der Kette verschlimmert sich die Worst-Case-Ausführung durch Knoten, was zu einer immer größer werdenden Zeit führt, neue Blöcke zu validieren. Im Laufe der Zeit erhöht dies auch die Gesamtzeit, die benötigt wird, bis ein vollständiger Knoten synchronisiert wird.

### Nachteilige Auswirkungen des Anstiegs während des gesamten Prozesses

#### 1. Knotenanzahl

Die Mindestanforderungen für die Ausführung eines Knoten- und Knotenzählers sind:

* Bitcoin1: 350GB Festplattenspeicher, 5 Mbit/s Verbindung, 1GB RAM, CPU >1 Ghz. **Anzahl der Knoten: ~10.000**
* Ethereum2: 500GB+ SSD Festplattenspeicher, 25 Mbit/s Verbindung, 4–8GB RAM, CPU 2–4 Kerne. **Anzahl der Knoten: ~6.000**
* Solana3: 1.5TB+ SSD Festplattenspeicher, 300 Mbit/s Verbindung, 128 GB RAM CPU 12+ Kerne. **Anzahl der Knoten: ~1,200**

Beachten Sie, dass je größer CPU, Bandbreite und Speicheranforderungen für Knoten sind, die für den Durchsatz einer Blockchain erforderlich sind, die weniger Knoten im Netzwerk – was zu einer schwächeren Dezentralisierung und einem weniger integrativen Netzwerk führt.

#### 2. Zeit zum Synchronisieren eines vollständigen Knotens

Wenn ein Knoten zum ersten Mal ausgeführt wird, muss er auf alle vorhandenen Knoten synchronisieren, herunterladen, laden und validieren, den Zustand des Netzwerks bis zur Spitze der Kette. Dieser Prozess sollte so schnell und effizient wie möglich sein, damit jeder als unberechtigter Teilnehmer des Protokolls handeln kann.

Jameson Lopps[2020 Bitcoin Node](https://blog.lopp.net/2020-bitcoin-node-performance-tests/)und[2021 Node Sync Tests](https://blog.lopp.net/2021-altcoin-node-sync-tests/)als Indikator nehmen Tabelle 1 vergleicht die Zeit, die benötigt wird, um einen vollständigen Knoten von Bitcoin vs zu synchronisieren. Ethereum gegen Solana auf einem durchschnittlichen verbraucherfähigen PC.

![Tabelle 1. Blockchain-Durchsatz und Knoten-Sync-Vergleich](/assets/1_gmpi_1c9zipoc-znrh7b5q.png "Tabelle 1. Blockchain-Durchsatz und Knoten-Sync-Vergleich")

Tabelle 1 zeigt, dass ein höherer Durchsatz zu längeren Synchronisationszeiten führt, weil immer mehr Daten verarbeitet und gespeichert werden müssen.

Während Verbesserungen an Knotensoftware fortwährend gemacht werden, um die Herausforderung der wachsenden Blockchain zu mildern (Verringerung des Plattenfußabdrucks, schnellere Synchronisationsgeschwindigkeiten, stärkere Absturzbelastung, Modularisierung bestimmter Komponenten, etc. , können die Knoten offensichtlich immer noch nicht mit Steigerungen zum Durchsatz Schritt halten.

### Wie soll Skalierbarkeit definiert werden?

Skalierbarkeit ist der am meisten falsch dargestellte Begriff im Blockchain-Raum. Obwohl ein höherer Durchsatz wünschenswert ist, ist er nur ein Teil des Puzzles.

***Skalierbarkeit**bedeutet**weitere Transaktionen**für die**gleiche Hardware**.*

Aus diesem Grund kann die Skalierbarkeit in zwei Kategorien unterteilt werden.

#### Skalierbarkeit des Sequenzers

Sequencing beschreibt den Akt der Bestellung und Verarbeitung von Transaktionen in einem Netzwerk. Wie zuvor festgelegt, jede Blockchain könnte ihren Durchsatz trivial erhöhen, indem sie die Blockgröße erhöht und ihre Blockzeit verkürzt – bis zu einem Punkt, an dem die negativen Auswirkungen auf ihre Dezentralisierung als zu bedeutend angesehen werden. Aber eine Anpassung dieser einfachen Parameter bringt nicht die erforderlichen Verbesserungen. Das EVM von Ethereum kann theoretisch bis zu ~2.000</a>

, was nicht ausreicht, um den langfristigen Bedarf an Blockspeicherplatz zu decken. Um die Sequenzierung zu skalieren, hat Solana einige beeindruckende Neuerungen gemacht: die Nutzung einer parallelizierbaren Umgebung für die Ausführung und einen klugen Konsensmechanismus, was einen deutlich effizienteren Durchsatz erlaubt. Aber trotz seiner Verbesserungen ist er weder ausreichend noch skalierbar. Während Solana seinen Durchsatz erhöht, steigen auch die Hardwarekosten für den Betrieb eines Knotens und die Abwicklung von Transaktionen.</p> 



#### Verifizierungsskalierbarkeit

*Verifizierungsskalierbarkeit beschreibt Ansätze, die den Durchsatz erhöhen, ohne Knoten mit immer höheren Hardwarekosten zu belasten.*Insbesondere bezieht sie sich auf kryptographische Innovationen wie Validitätsdichtungen. Sie sind der Grund, warum Validy-Rollups eine Blockchain nachhaltig skalieren können.

**Was ist eine Gültigkeits-Rollup?**

Validy-Rollups (auch bekannt als „ZK-Rollups“) verschieben die Berechnung und den Zustandsspeicher außerhalb der Kette, behalten aber eine kleine Menge bestimmter Daten auf der Kette. Ein intelligenter Vertrag über die zugrunde liegende Blockchain behält die Zustandswurzel der Rollup bei. Auf dem Rollup wird ein Stapel hochkomprimierter Transaktionen zusammen mit dem aktuellen State root an einen off-chain Prover gesendet. Der Prover berechnet die Transaktionen, erzeugt einen Validitätsnachweis der Ergebnisse und der neuen Zustandswurzel und sendet sie an einen On-Kette Verifier. Der Verifier überprüft die Gültigkeit der Prüfung, und der intelligente Vertrag, der den Status des Rollup beibehält, aktualisiert ihn in den neuen Zustand des Prover.

**Wie skalieren Validy-Rollups mit den gleichen Hardware-Anforderungen?**

Auch wenn Provers High-End-Hardware erfordert, wirken sie sich nicht auf die Dezentralisierung einer Blockchain aus; da die Gültigkeit von Transaktionen durch mathematisch überprüfbare Beweise gewährleistet ist.

Worauf es ankommt, sind die Anforderungen an die Prüfung der Beweise. Da die Daten hochgradig komprimiert und weitgehend durch Berechnungen abstrahiert sind, sind ihre Auswirkungen auf die Knoten der zugrunde liegenden Blockchain minimal*.*

Verifikatoren (Ethereum-Knoten) benötigen keine High-End-Hardware und die Größe der Batches erhöht die Hardwareanforderungen nicht. Nur Statusübergänge und eine geringe Menge an Anrufdaten müssen von den Knoten verarbeitet und gespeichert werden. Dies erlaubt allen Ethereum-Knoten Validy-Rollup-Batches mit ihrer vorhandenen Hardware zu überprüfen.

**Je mehr Transaktionen, desto billiger wird es**

In den traditionellen Blockchains, je mehr Transaktionen stattfinden, Je teurer es für jeden wird, wenn der Blockplatz aufgebraucht wird — und die Nutzer müssen sich auf einem Gebührenmarkt überbieten, um ihre Transaktionen einbeziehen zu können.

Bei einem Validy-Rollup wird diese Dynamik umgekehrt. Die Überprüfung einer Reihe von Transaktionen auf Ethereum hat bestimmte Kosten. Wenn die Anzahl der Transaktionen innerhalb eines Batches steigt, steigen die Kosten für die Verifizierung des Batches exponentiell langsamer. Das Hinzufügen von mehr Transaktionen zu einem Batch führt zu günstigeren Transaktionsgebühren, obwohl die Kosten für die Stapelprüfung steigen – weil sie bei allen Transaktionen innerhalb des Batches abgeschrieben werden. Gültigkeits-Rollups wollen so viele Transaktionen wie möglich in einem Batch — so dass die Verifizierungsgebühr unter allen Benutzern aufgeteilt werden kann. Da die Batch-Größe unendlich zunimmt, konvertiert sich die amortisierte Gebühr pro Transaktion auf Null, i. ., je mehr Transaktionen auf einem Validy-Rollup sind, desto billiger wird es für alle.

dYdX, eine dApp mit einem Validy-Rollup, sieht häufig Batchgrößen von über 12.000 Transaktionen. Vergleicht man den Gasverbrauch der gleichen Transaktionen bei Mainnet vs. bei einem Validy-Rollup die Skalierbarkeitsgewinne:

Abschluss einer dYdX-Transaktion auf Ethereum Mainnet:**200.000 Gas**

Abschluss einer dYdX-Transaktion auf StarkEx:**<500 Gas**

Eine andere Möglichkeit, sich anzuschauen: Validitäts-Rollups Hauptkosten skalieren linear mit der Anzahl der Benutzer innerhalb der gleichen Charge.



#### Warum optimistische Rollups nicht so skalierbar sind, wie man denken könnte

Theoretisch bieten optimistische Rollups fast die gleichen Skalierbarkeitsvorteile wie Validity-Rollups. Aber es gibt eine wichtige Unterscheidung: Optimistische Rollups optimieren für den Durchschnittsfall, während Validity Rollups für den schlimmsten Fall optimieren. Weil Blockchain-Systeme unter äußerst widersprüchlichen Bedingungen arbeiten, ist die Optimierung im schlimmsten Fall der einzige Weg, um Sicherheit zu erreichen.

Im schlimmsten Fall von optimistischem Rollup werden die Transaktionen eines Benutzers nicht von Betrugschecks überprüft. Um also Betrug anzufechten, muss der Benutzer einen Ethereum Vollknoten, einen L2-Vollknoten synchronisieren und die verdächtige Transaktion selbst berechnen.

Im schlimmsten Fall von Validity-Rollup müsste ein Benutzer nur einen vollständigen Ethereum-Knoten synchronisieren, um den Validitätsnachweis zu überprüfen, Ersparen Sie sich die Rechenlast.

Im Gegensatz zu Validitäts-Rollups skalieren die Kosten optimistischer Rollups linear mit der Anzahl der Transaktionen statt der Anzahl der Benutzer, wodurch sie teurer werden.



### Endstück des Puzzles — Erlaubtloser Zugriff auf den Rollenstatus

Um die Gültigkeit von Transaktionen zu garantieren, müssen die Benutzer nur einen Ethereum-Knoten ausführen. Benutzer und Entwickler können jedoch den Zustand und die Ausführung des Rollup für verschiedene Zwecke ansehen und ausführen. Ein*L2-Knoten indizieren*erfüllt diese Anforderung perfekt. Es erlaubt Benutzern nicht nur Transaktionen im Netzwerk zu sehen aber es ist auch ein kritischer Teil der Infrastruktur, die für das Funktionieren der Ökosysteminfrastruktur notwendig ist. Indexer wie The Graph, Alchemy, Infura; Oracle-Netzwerke wie Chainlink und Block-Explorer, alle diese werden vollständig von einem permissionlosen, indexierenden L2-Knoten unterstützt.



### Schlussfolgerung

Viele Ansätze zur Bekämpfung der Skalierbarkeit von Blockchain konzentrieren sich fälschlicherweise auf die Erhöhung des*Durchsatzes*. Doch vernachlässigt dies die Auswirkungen der Durchsätze auf Knoten: die ständig steigenden Hardwareanforderungen für die Verarbeitung von Blöcken und die Speicherung der Netzwerk-Historie und wie dies die Dezentralisierung eines Netzwerks behindert.

Mit der Einführung einer Validity-sicheren Kryptographie eine Blockchain kann**echte Skalierbarkeit**erreichen, die Knoten nicht mit immer höheren Kosten belastet und eine breite Dezentralisierung ermöglicht. Mehr Transaktionen mit leistungsstarken und komplexeren Berechnungen für die gleiche Hardware sind jetzt möglich Das Gebührenmarktdilemma im Prozess invertieren – je mehr Aktivität auf einem Validitäts-Rollup stattfindet, desto billiger wird es!

[SwagtimusPrime.eth](https://twitter.com/SwagtimusP?t=pO0L1vGIhuC-ZgWOusQYtA&s=09)und[Louis Guthmann](https://twitter.com/GuthL)

1 Von[https://bitcoin.org/de/bitcoin-core/features/requirements](https://bitcoin.org/en/bitcoin-core/features/requirements)

2 Von[https://ethereum.org/de/developers/docs/nodes-and-clients/](https://ethereum.org/en/developers/docs/nodes-and-clients/)

3 Von<https://docs.solana.com/running-validator/validator-reqs>

4 Stark vereinfacht und angepasst an durchschnittliche dynamische Blockgrößen