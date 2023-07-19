### TL;DR

* StarkWare bietet Kunden je nach Priorität eine Reihe von Data Availability (DA)-Modi zur Auswahl
* Es gibt drei Ansätze zur Datenverfügbarkeit für STARK-Beweise, die alle bereits in der Produktion verfügbar sind:\
  –**Rollup**: Das Hauptbuch wird direkt auf der Blockchain veröffentlicht\
  –**Validium**: Ein Datenverfügbarkeitsausschuss sichert das Hauptbuch. wobei nur ein Hash in der Kette gespeichert wird\
  –**Volition**: Apps können Benutzern die Wahl ihres DA-Modus – Rollup oder Validium – für jede einzelne Transaktion ermöglichen
* Egal welche DA verwendet wird – die Gültigkeit aller Transaktionen wird durch STARKs garantiert

### Einführung

Bis November 2022 hat[StarkEx](https://starkware.co/starkex/)ein Handelsvolumen von über 750 Milliarden US-Dollar und über 270 Millionen Transaktionen auf Ethereum abgewickelt. Im NFT-Bereich, der Apps wie ImmutableX und Sorare unterstützt, hat StarkEx über 85 Millionen NFTs zu einem Preis geprägt, der 1000-mal günstiger ist, als dies direkt auf Ethereum zu tun. Die auf STARK basierende Technologie skaliert Ethereum. Beispielsweise führte StarkEx in einer einzigen Woche die 1,6-fache Anzahl an Transaktionen durch wie Ethereum (12 Millionen bei StarkEx gegenüber 7,5 Millionen bei Ethereum) und belegte dabei weniger als 0,1 % des Ethereum-Blockplatzes. Und das alles, während den Benutzern das gleiche Maß an Sicherheit geboten wird, als ob sie sich direkt bei Ethereum niederlassen würden.

### Wie erreicht StarkWare dies?

Benutzer senden Transaktionen auf Schicht 2 (entweder StarkEx oder StarkNet), die gestapelt und an einen STARK-Prüfer gesendet werden. Dieser STARK-Prüfer kennt den Status des Hauptbuchs vor und nach der Verarbeitung dieser Transaktionen. Der Prüfer erstellt einen STARK-Beweis, der die Gültigkeit des neuen Zustands des Hauptbuchs bescheinigt, nachdem diese Transaktionen ausgeführt wurden. Der neue Status und der STARK-Beweis werden an den STARK-Verifizierer in der Kette gesendet. Die Überprüfung dieses Nachweises erfolgt autonom über einen unveränderlichen Smart Contract auf Ethereum.

Diese Architektur bietet das Beste aus beiden Welten: Wir können niedrige Transaktionskosten haben und gleichzeitig Ethereum als neutralen Schiedsrichter in der Mitte haben. Ethereum als Schiedsrichter ist nicht nur eine nette Sache; Es bietet dem Endbenutzer wichtige Sicherheit. Ein Benutzer, der Transaktionen durchführt, kann nun sicher sein, dass seine Gelder durch Ethereum gesichert sind und dass Transaktionen unveränderlich sind, sobald sie auf Ethereum verifiziert werden. Der Benutzer verfügt außerdem über die vollständige Selbstverwahrung seiner Gelder. Die Selbstverwahrung ist wichtig, da sie sicherstellt, dass der Benutzer jederzeit Zugriff auf seine Gelder hat, ohne auf Dritte angewiesen zu sein.

### Wo passt die Datenverfügbarkeit in all das?

Es ist wichtig, sowohl zu betonen, was dieser Beweis bewirkt, als auch, was er*und nicht*bewirkt. Der Beweis bestätigt die Gültigkeit des neuen Zustands, sagt Ihnen aber nicht, was der neue Zustand ist. Dafür benötigen Sie Datenverfügbarkeit. Wenn wir nur den Beweis haben, weiß die Blockchain, dass das, was übermittelt wurde, gültig ist, aber sie weiß nicht, wie der neue Status (z. B. Kontostand) ist! Zu den Verbrauchern dieser Daten gehören Benutzer, die Transaktionen innerhalb dieser Nachweise durchführen. Die Daten sollten ihnen zur Verfügung gestellt werden, wenn sie Geld auf Ethereum abheben möchten, ohne dem Layer-2-Betreiber vertrauen zu müssen. Dies gibt den Benutzern die vollständige Selbstverwahrung ihrer Gelder.

Eine Analogie hierfür ist, dass Ihr High-School-Lehrer Sie auffordert, zu beweisen, dass x gleich x ist. Das ist trivial zu beweisen. Was ist schwieriger zu beantworten: Was ist x eigentlich? Dafür benötigen Sie eine gesonderte Information. Es könnte sein, dass x gleich 5 oder ein anderer Wert ist. Ebenso kann auf der Blockchain ein STARK-Beweis zur Verifizierung an einen STARK-Verifizierer-Smart-Contract übermittelt werden. Und der Prüfer kann bestätigen, dass der Beweis gültig ist (dass x=x). Sie benötigen jedoch eine separate Eingabe, um zu erfahren, wie hoch x (der neue Kontostand) ist.

Es gibt drei Ansätze, diese Daten verfügbar zu machen:

#### Rollup-Modus

Der Rollup-Modus stellt sicher, dass der Status des Ledgers zusammen mit den Nachweisen auf Ethereum gespeichert wird. Der Rollup-Modus wird derzeit von[dYdX](https://dydx.exchange/)in der Produktion verwendet und wird auch vom[Public StarkNet](http://starknet.io/)L2-Netzwerk verwendet. Die Vorteile hier liegen klar auf der Hand: Man kann den Zustand des Hauptbuchs wiederherstellen, indem man nur mit der Ethereum-Blockchain interagiert. Dies bedeutet, dass Sie als Endbenutzer vertrauensvoll mit dem entsprechenden Smart Contract auf Ethereum kommunizieren und Ihr Geld abheben können, selbst wenn das Layer-2-System heruntergefahren wird.

#### Validium

Im Rollup-Modus entfallen die meisten Ethereum-Gaskosten auf die Datenverfügbarkeit und nicht auf die Beweisüberprüfung. Dies liegt daran, dass die Speicherung von Daten auf der Blockchain sehr gasintensiv ist. Im Validium-Modus werden die Ledger-Informationen nicht an Ethereum gesendet. Vielmehr werden sie außerhalb der Kette bei einem Data Availability Committee gespeichert. Ethereum speichert einen Hash dieser Ledger-Informationen. Dieses Data Availability Committee besteht aus einem Quorum unabhängiger Mitglieder, die die korrekte Statusaktualisierung überwachen und eine Kopie der verarbeiteten Daten aufbewahren. Jede StarkEx-Instanz kann ihr eigenes Quorum erstellen. Zu den Quorumsmitgliedern für bestehende Apps, die auf StarkEx laufen, gehören Entitäten wie[Consensys](https://consensys.net/),[Nethermind](https://nethermind.io/),[Iqlusion](https://iqlusion.io/)und[Cephalopod](https://cephalopod.equipment/).

Die Vorteile liegen hier klar auf der Hand. Es ist nicht erforderlich, Ethereum-Gasgebühren zu zahlen, um die Ledger-Informationen in der Kette zu speichern. Vielmehr ist das Einzige, was auf Ethereum gespeichert wird, ein einzelner Hash der Ledger-Informationen. Wenn Sie im Gespräch mit Ethereum vertrauensvoll Gelder von Layer 2 abheben möchten, benötigen Sie lediglich die digitale Signatur eines Mitglieds des Data Availability Committee. Die DAC-Mitglieder werden Kryptografie verwenden, um nachzuweisen, dass Sie Eigentümer dieser Gelder sind.

Ein weiterer versteckter Vorteil der Validium-Datenverfügbarkeit ist die Vertraulichkeit gegenüber Personen, die die Blockchain lesen. Im Rollup-Modus ist der Saldo jedes Kontos zum Zeitpunkt der Einreichung jedes Nachweises der Öffentlichkeit bekannt. Bei Validium werden diese Daten vor der Blockchain verborgen – nur das Data Availability Committee ist sich dessen bewusst, da sie außerhalb der Blockchain bleiben. Dieses Maß an Vertraulichkeit ermöglicht eine Vielzahl von Anwendungsfällen, bei denen die Verschleierung der Transaktionsdaten wichtig ist.

#### Wille

Volition ist eine Datenverfügbarkeitsarchitektur, die auf Transaktionsebene die Wahl zwischen Validium und Rollup-Modus bietet. Dies geschieht, indem ein Hauptbuch in der Kette und ein weiteres Hauptbuch bei einem Datenverfügbarkeitsausschuss geführt wird. Benutzer können für jede einzelne Transaktion zwischen Validium- und Rollup-Modus wählen.

Stellen Sie sich vor, Sie kaufen einen wirklich teuren NFT wie einen Bored Ape oder einen Cryptopunk über eine App, die auf StarkEx läuft. Möglicherweise möchten Sie den Rollup-Modus verwenden, um die Daten für dieses NFT zu sichern, da Sie eine Aufzeichnung dieser bestimmten Transaktion auf Ethereum speichern möchten. Allerdings können Sie dann einen wirklich günstigen NFT kaufen (z. B. einen Umhang für Ihren Charakter in einem Blockchain-Spiel) und in diesem Fall gerne Geld sparen, indem Sie Validium verwenden.

Wenn Sie sich für den durch STARK-Beweise erreichten Umfang interessieren, dann kommen Sie bitte vorbei und bauen Sie auf uns auf.



Sie können jederzeit eine E-Mail an[info@starkware.co](mailto:info@starkware.co)senden und ein Mensch wird sich an Ihre E-Mail wenden.