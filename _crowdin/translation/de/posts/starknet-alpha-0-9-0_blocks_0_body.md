### TL;DR

* **Gebühren sind jetzt obligatorisch auf Testnet, bald auf Mainnet**
* Vertragswerksmuster ist jetzt möglich!
* StarkNet führt Vertragsklassen ein
* Delegierter Aufruf wird durch Bibliotheksaufruf ersetzt

### Einleitung

Wir freuen uns, StarkNet Alpha 0.9.0 vorstellen zu können! Dies ist eine wichtige Version, in der StarkNet bedeutende Schritte in Richtung Laufzeit unternimmt, mit erheblichen Erweiterungen sowohl der Funktionalität als auch des Protokoll-Designs.

**Gebühren sind obligatorisch**(derzeit nur auf Testnet, bis Version 0.9. wird auf Mainnet leben) — jeder gedeihende L2 muss ein eigenständiges Gebührensystem haben. Nach der Einführung von Gebühren als optionale Funktion in Version 0.8. , sind wir nun zuversichtlich, sie als Kernkomponente des Protokolls einzubeziehen und verpflichtend zu machen. Weitere Details unten.

Eine weitere bedeutende Änderung auf der Protokollebene ist die Einführung von Contract Classes und die Klassen-/Instanztrennung. Dies ermöglicht eine unkompliziertere Nutzung der \`delegate_call\` Funktionalität und Deployments aus bestehenden Verträgen, wodurch das Fabrikmuster auf StarkNet aktiviert wird.

### Vertragsklassen

Inspiriert von der objektorientierten Programmierung unterscheiden wir zwischen dem Vertragscode und seiner Umsetzung. Wir tun dies, indem wir Verträge in Klassen und Instanzen aufteilen.

Eine**Vertragsklasse**ist die Definition des Vertrags: Der Kairo-Bytecode Hinweise auf Informationen, Einstiegspunktnamen und alles, was notwendig ist, um seine Semantik eindeutig zu definieren. Jede Klasse wird durch ihren Klassen-Hash identifiziert (analog zu einem Klassennamen aus OOP-Sprachen).

Eine**Vertragsinstanz**, oder einfach nur ein Vertrag, ist ein eingesetzter Vertrag, der einer Klasse entspricht. Beachten Sie, dass sich nur Vertragsinstanzen als Verträge verhalten, d.h. über eigene Lagerhaltung verfügen und durch Transaktionen/andere Verträge abrufbar sind. Eine Vertragsklasse hat nicht notwendigerweise eine installierte Instanz in StarkNet. Die Einführung von Klassen kommt mit mehreren Protokolländerungen.

#### Dezimaltransaktion

Wir führen eine neue Transaktion in StarkNet ein: die[“declare”](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)Transaktion, die es erlaubt, einen Vertrag**Klasse zu deklarieren.**Im Gegensatz zur \`deploy\` Transaktion wird hier keine Instanz dieser Klasse bereitgestellt. Der Status von StarkNet wird eine Liste der deklarierten Klassen enthalten. Neue Klassen können über die neue \`declare\` Transaktion hinzugefügt werden.

#### Die „Deploy“ System Call and Contract Factories.

Sobald eine Klasse angegeben ist, das heißt, die zugehörige \`declare\` Transaktion akzeptiert wurde, können wir neue Instanzen dieser Klasse bereitstellen. Zu diesem Zweck verwenden wir den neuen \`deploy\` Systemaufruf, der folgende Argumente erfordert:

* Der Klassen-Hash
* Salz
* Konstruktorargumente

Das „Bereitstellen“ syscall wird dann eine neue Instanz dieser Contract-Klasse bereitstellen, deren[-Adresse](https://docs.starknet.io/docs/Contracts/contract-address)von den drei obigen Parametern und der Bereitstelleradresse bestimmt wird (der Vertrag, der den Systemaufruf aufgerufen hat).

Inklusive der Einsätze im Rahmen einer Aufruftransaktion können wir Gebühren und Gebühren für den Einsatz berechnen, ohne dass wir Einsätze und Anrufe anders behandeln müssen. Weitere Informationen zu den Bereitstellungskosten finden Sie unter[in der Dokumentation](https://docs.starknet.io/docs/Fees/fee-mechanism#deployed-contracts).

Diese Funktion führt Vertragsfabriken in StarkNet ein, da jeder Vertrag die \`deploy\` Syscall aufrufen und neue Verträge erstellen kann.

#### Verschieben von 'Anruf' auf 'Anruf' der Bibliothek

Die Einführung von Klassen ermöglicht es uns, ein bekanntes Problem im Absenderrufmechanismus von Ethereum anzugehen: Wenn ein Vertrag einen Absenderaufruf zu einem anderen Vertrag ausführt, benötigt er nur seine Klasse (seinen Code) und nicht eine tatsächliche Instanz (seinen Speicher). Eine bestimmte Vertragsinstanz beim Absenden eines Anrufs anzugeben ist daher eine schlechte Praxis (tatsächlich es hat zu einigen Fehlern in Ethereum-Verträgen geführt) — nur die Klasse muss angegeben werden.

Der alte \`delegate_call\` Systemaufruf wird veraltet (alte Verträge, die bereits eingesetzt werden, werden weiterhin funktionieren, aber**Verträge mit \`delegate_call\` werden nicht mehr kompiliert**), und wird durch einen neuen library_call Systemaufruf ersetzt, der statt einer Contract-Instanz-Adresse den Klassen-Hash (einer zuvor deklarierten Klasse) bekommt. Beachten Sie, dass nur ein tatsächlicher Vertrag an einem Bibliotheksaufruf beteiligt ist, so dass wir die Unklarheiten zwischen dem Anrufvertrag und dem Durchführungsvertrag vermeiden.

#### Neue API-Endpunkte

Wir haben der API zwei neue Endpunkte hinzugefügt, die das Abrufen von klassenbezogenen Daten ermöglichen:

* \`get_class_by_hash\`: Gibt die Klassendefinition zurück, die den Klassen-Hash erhalten hat
* \`get_class_hash_at\`: Gibt den Klassen-Hash eines ausgelieferten Vertrages aufgrund der Vertragsadresse zurück

Beachten Sie, dass Sie die Klasse eines ausgelieferten Vertrags direkt erhalten können, anstatt die beiden oben genannten Methoden zu durchlaufen, du kannst den alten \`get_full_contract\` Endpunkt verwenden, der in zukünftigen Versionen umbenannt wird. Alle oben genannten Endpunkte sind auch im[StarkNet CLI](https://docs.starknet.io/docs/CLI/commands) verwendbar.

#### Gebühren

Wir werden Gebühren in StarkNet einbinden, was sie für ``[invoke](https://docs.starknet.io/docs/Blocks/transactions#invoke-function)\` Transaktionen obligatorisch macht. Die \`declare\` Transaktion erfordert an dieser Stelle keine Gebühren. Ebenso werden \`Deploy`` Transaktionen auch keine Gebühr erfordern. Beachten Sie jedoch, dass dieser Transaktionstyp höchstwahrscheinlich in zukünftigen Versionen veraltet sein wird.

In diesem Bereich gibt es noch einige offene Fragen. Die prominentesten sind die Erhebung von Gebühren für Vertragsabschlüsse und die Bereitstellung von StarkNet-Konten. Wir werden diese Fragen in zukünftigen Versionen angehen.

### Was ist als Nächstes?

Nach unserem Fahrplan, den wir[im Februar](https://medium.com/starkware/starknet-on-to-the-next-challenge-96a39de7717)angekündigt haben, haben wir uns verpflichtet, die Leistung von StarkNet im Allgemeinen zu verbessern und insbesondere die Performance des Sequenzers, um die Nutzer schneller über ihre Transaktionen zu informieren. In der nächsten Version wollen wir die Parallelisierung in den Sequenzer einführen und so eine schnellere Blockproduktion ermöglichen.

Die nächste Hauptversion von StarkNet wird sich auf die Struktur der Konten von StarkNet konzentrieren, ähnlich wie[ERC-4337](https://medium.com/infinitism/erc-4337-account-abstraction-without-ethereum-protocol-changes-d75c9d94dc4a). Damit haben wir das Verhalten von StarkNet abgeschlossen, was einen weiteren wichtigen Schritt in Richtung Massenadoption bedeutet!