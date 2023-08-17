### TL;DR

* StarkWare bietet eine Reihe von Datenverfügbarkeitsmodi (DA) an, aus denen Kunden wählen können, je nach ihrer Priorität
* Es gibt drei Ansätze zur Datenverfügbarkeit für STARK-Proofs, alle sind bereits in der Produktion verfügbar:\
  —**Rollup**: der Platzhalter wird direkt in der Blockchain\
  —**Validium**: ein Datenverfügbarkeitskomitee sichert den Platzhalter, mit nur einem Hash auf chain\
  —**Volition**: Apps können Benutzern den DA-Modus – Rollup oder Validium – für jede Transaktion auswählen
* Egal welche DA verwendet wird — die Gültigkeit aller Transaktionen wird von STARKs garantiert

### Einführung

Ab November 2022 hat[StarkEx](https://starkware.co/starkex/)über 750 Milliarden Dollar an Handelsvolumen und über 270 Millionen Transaktionen auf Ethereum abgewickelt. Im NFT-Bereich werden Apps wie ImmutableX und Sorare betrieben StarkEx hat mehr als 85 Millionen NFTs zu einem Preis geprägt, der 1000x billiger ist als dies direkt auf Ethereum. Die STARK-basierte Technologie skaliert Ethereum. Zum Beispiel führte StarkEx in einer einzigen Woche 1.6x die Anzahl der Transaktionen als Ethereum (12m auf StarkEx gegen 7. m auf Ethereum) während weniger als 0,1% des Ethereum-Blockspace. Und dies alles während es den Benutzern das gleiche Sicherheitsniveau gibt, als ob sie sich direkt auf Ethereum niederlassen würden.

### Wie erreicht StarkWare das?

Benutzer senden Transaktionen auf Layer 2 (entweder StarkEx oder StarkNet), die an einen STARK-Prover gesendet werden. Dieser STARK-Prover kennt den Zustand der Vor- und Nachbearbeitung dieser Transaktionen. Der Prover erstellt einen STARK-Nachweis, der die Gültigkeit des neuen Status des Spielers bestätigt, nachdem diese Transaktionen ausgeführt wurden. Der neue Zustand und der STARK-Nachweis werden an den On-Kette STARK Prüfer geschickt. Die Überprüfung dieses Beweises erfolgt autonom durch einen unveränderlichen intelligenten Vertrag auf Ethereum.

Diese Architektur bietet das Beste aus beiden Welten: Wir können niedrige Transaktionskosten haben, während wir Ethereum in der Mitte als neutraler Schiedsrichter haben. Ethereum als Schiedsrichter ist nicht nur ein netter Schiedsrichter, sondern bietet auch kritische Sicherheit für den Endverbraucher. Ein Nutzer kann nun darauf vertrauen, dass sein Geld durch Ethereum gesichert ist und die Transaktionen unveränderlich sind, sobald sie auf Ethereum überprüft sind. Der Nutzer hat auch die vollständige Selbstverwahrung seiner Gelder. Die Selbstverwahrung ist wichtig, weil sie sicherstellt, dass der Nutzer jederzeit Zugang zu seinem Geld hat, ohne sich auf Dritte zu verlassen.

### Wo passt die Verfügbarkeit von Daten in all diese?

Es ist wichtig, sowohl zu betonen, was dieser Beweis tut, als auch, was*und nicht*tut. Der Beweis zeugt von der Gültigkeit des neuen Staates, aber er sagt Ihnen nicht, was der neue Staat ist. Dazu benötigen Sie die Datenverfügbarkeit. Wenn wir nur den Beweis haben, dann weiß die Blockchain, dass das, was eingereicht wurde, gültig ist, aber sie weiß nicht, was der neue Zustand ist (zB. ist der Saldo! Zu den Verbrauchern dieser Daten gehören Benutzer, die Transaktionen mit diesen Nachweisen haben. Die Daten sollten ihnen zur Verfügung gestellt werden, wenn sie Geld bei Ethereum abheben wollen, ohne dem Betreiber der Ebene 2 vertrauen zu müssen. Dies gibt den Nutzern die volle Selbstverwahrung ihrer Gelder.

Eine Analogie dafür ist Ihr High-School-Lehrer fordert Sie auf, zu beweisen, dass x x gleich x ist. Das ist trivial zu beweisen. Was ist schwieriger zu beantworten: Was ist x eigentlich gleich? Dazu benötigen Sie eine separate Information. Es kann sein, dass x 5 oder ein anderer Wert entspricht. Ebenso kann an der Blockchain ein STARK-Nachweis bei einem smarten STARK-Verifizierungsvertrag zur Überprüfung eingereicht werden. Und der Verifikator kann bestätigen, dass der Nachweis gültig ist (dass x=x). Aber Sie benötigen einen separaten Eingabe, um Ihnen zu sagen, was x (der neue Spaltausgleich) ist.

Es gibt drei Ansätze, diese Daten zur Verfügung zu stellen:

#### Rollup Modus

Der Rolllup-Modus stellt sicher, dass der Zustand des Ledgers zusammen mit den Proofs auf dem Ethereum gespeichert wird. Der Rollup-Modus wird derzeit von[dYdX](https://dydx.exchange/)in der Produktion verwendet und wird auch vom[Public StarkNet](http://starknet.io/)L2 Netzwerk verwendet. Die Vorteile sind hier klar: Man kann den Zustand des Vorsprungs wiederherstellen, indem man nur mit der Ethereum-Blockchain interagiert. Das impliziert, dass Sie als Endbenutzer vertrauenslos mit dem entsprechenden intelligenten Vertrag über Ethereum sprechen können und Ihr Guthaben auch dann auszahlen, wenn das System Ebene 2 herunterfährt.

#### Validium

Im Rollup-Modus gehen die meisten der Gaskosten von Ethereum auf die Verfügbarkeit von Daten und nicht auf den Nachweis der Verifikation. Das liegt daran, dass es sehr gasintensiv ist, Daten auf der Blockchain zu speichern. Im Validium-Modus werden die Informationen nicht an Ethereum gesendet. Vielmehr wird sie außerhalb der Kette mit einem Datenverfügbarkeitskomitee gespeichert. Ethereum speichert einen Hash dieser Ledgerinformationen. Dieser Verfügbarkeitskomitee besteht aus einem Quorum unabhängiger Mitglieder, die die korrekte Statusaktualisierung überwachen und eine Kopie der verarbeiteten Daten aufbewahren. Jede StarkEx-Instanz kann ihr eigenes Quorum erstellen. Quorum-Mitglieder für existierende Apps auf StarkEx enthalten Entitäten wie[Konsens](https://consensys.net/),[Bitte beachten Sie](https://nethermind.io/),[Iqlusion](https://iqlusion.io/)und[Cephalopod](https://cephalopod.equipment/).

Hier sind die Vorteile klar. Es besteht keine Notwendigkeit, die Gasgebühren von Ethereum zu zahlen, um die Informationen über die Kette zu speichern. Das Einzige, was auf Ethereum gespeichert ist, ist vielmehr ein einziger Hash der Ledgerinformationen. Wenn Sie vertrauenslos Geld von Ebene 2 auszahlen möchten, indem Sie mit Ethereum sprechen Sie benötigen lediglich die digitale Signatur eines der Mitglieder des Datenverfügbarkeitsausschusses. Die Mitglieder des DAC werden Kryptographie nutzen, um zu beweisen, dass Sie Eigentümer dieser Fonds sind.

Ein weiterer versteckter Vorteil der Validium Datenverfügbarkeit ist die Vertraulichkeit von Personen, die die Blockchain lesen. Unter Rollup Modus ist das Guthaben jedes Kontos zu dem Zeitpunkt, an dem jeder Nachweis eingereicht wird, der Öffentlichkeit bekannt. Mit Validium sind diese Daten vor der Blockchain verborgen — nur das Datenverfügbarkeitskomitee ist sich dessen bewusst, da diese Daten außerhalb der Kette gehalten werden. Dieses Maß an Vertraulichkeit ermöglicht eine Vielzahl von Anwendungsfällen, in denen die Verschleierung der Transaktionsdaten wichtig ist.

#### Vernichtung

Volition ist eine Datenverfügbarkeitsarchitektur, die die Wahl zwischen Validium und Rollup Modus auf der Transaktionsebene ermöglicht. Dies geschieht dadurch, dass ein Ledger auf der Kette bleibt und ein weiterer Ledger mit einem Data Availability Committee. Benutzer können für jede einzelne Transaktion zwischen dem Validium- und dem Rollup-Modus wählen.

Stellen Sie sich vor, du kaufst einen wirklich teuren NFT wie einen Bored Affe oder einen Cryptopunk, auf einer Anwendung, die auf StarkEx läuft. Möglicherweise möchten Sie den Rollup Modus verwenden, um die Daten für diesen NFT zu sichern, weil Sie einen Datensatz für die bestimmte Transaktion auf Ethereum haben möchten. Allerdings können Sie dann eine wirklich billige NFT (z. Ein Umhang für deinen Charakter in einem Blockchain-Spiel) und unter diesen Umständen wirst du gerne Geld sparen, indem du Validium nutzt.

Wenn Sie an der von STARK Proofs erzielten Skala interessiert sind, dann bauen Sie bitte auf uns auf.



Du kannst immer eine E-Mail an[info@starkware.co](mailto:info@starkware.co)senden und ein Mensch wird zu deiner E-Mail gelangen.