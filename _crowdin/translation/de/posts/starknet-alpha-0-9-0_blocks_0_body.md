### TL;DR

* Gebühren sind jetzt im Testnet obligatorisch, bald auch im Mainnet
* Vertragsfabrikmuster sind jetzt möglich!
* Starknet führt Vertragsklassen ein
* Der Delegate-Aufruf wird durch einen Bibliotheksaufruf ersetzt

### Einführung

Wir freuen uns, Starknet Alpha 0.9.0 vorstellen zu können! Dies ist eine wichtige Version, in der Starknet bedeutende Fortschritte in Richtung Reife macht, mit wesentlichen Ergänzungen sowohl der Funktionalität als auch des Protokolldesigns.

Gebühren sind obligatorisch (derzeit nur im Testnet, bis Version 0.9.0 im Mainnet verfügbar sein wird) – jedes prosperierende L2 muss über ein eigenes, unabhängiges Gebührensystem verfügen. Nachdem wir in Version 0.8.0 Gebühren als optionale Funktion eingeführt haben, sind wir nun zuversichtlich, sie als Kernbestandteil des Protokolls aufzunehmen und verpflichtend zu machen. Weitere Details weiter unten.

Eine weitere bedeutende Änderung auf Protokollebene ist die Einführung von Vertragsklassen und die Trennung von Klasse und Instanz. Dies ermöglicht eine einfachere Nutzung der „delegate_call“-Funktionalität und Bereitstellungen aus bestehenden Verträgen, wodurch das Factory-Muster auf Starknet ermöglicht wird.

### Vertragsklassen

Inspiriert von der objektorientierten Programmierung unterscheiden wir zwischen dem Vertragscode und seiner Implementierung. Dies erreichen wir, indem wir Verträge in Klassen und Instanzen unterteilen.

Eine Vertragsklasse ist die Definition des Vertrags: sein Kairo-Bytecode, Hinweisinformationen, Einstiegspunktnamen und alles, was zur eindeutigen Definition seiner Semantik erforderlich ist. Jede Klasse wird durch ihren Klassen-Hash identifiziert (analog zu einem Klassennamen aus OOP-Sprachen).

Eine Vertragsinstanz oder einfach ein Vertrag ist ein bereitgestellter Vertrag, der einer Klasse entspricht. Beachten Sie, dass sich nur Vertragsinstanzen wie Verträge verhalten, dh über einen eigenen Speicher verfügen und durch Transaktionen/andere Verträge aufgerufen werden können. Eine Vertragsklasse muss nicht unbedingt über eine bereitgestellte Instanz in Starknet verfügen. Die Einführung von Klassen bringt mehrere Protokolländerungen mit sich.

#### Transaktion „deklarieren“.

Wir führen einen neuen Transaktionstyp in Starknet ein: die [„declare“](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction) -Transaktion, die die Deklaration einer Vertragsklasse ermöglicht. Im Gegensatz zur Transaktion „deploy“ wird hier keine Instanz dieser Klasse bereitgestellt. Der Bundesstaat Starknet wird eine Liste der deklarierten Klassen enthalten. Neue Klassen können über die neue Transaktion „declare“ hinzugefügt werden.

#### Das „Deploy“-System ruft Fabriken auf und beauftragt sie mit Verträgen.

Sobald eine Klasse deklariert ist, d. h. die entsprechende Deklarationstransaktion akzeptiert wurde, können wir neue Instanzen dieser Klasse bereitstellen. Zu diesem Zweck verwenden wir den neuen Systemaufruf „deploy“, der die folgenden Argumente annimmt:

* Der Klassen-Hash
* Salz
* Konstruktorargumente

Der Systemaufruf „deploy“ stellt dann eine neue Instanz dieser Vertragsklasse bereit, deren [-Adresse](https://docs.starknet.io/docs/Contracts/contract-address) durch die drei oben genannten Parameter und die Deployer-Adresse (den Vertrag, der den Systemaufruf aufgerufen hat) bestimmt wird.

Durch die Einbeziehung von Bereitstellungen in eine Aufruftransaktion können wir Preise für Bereitstellungen festlegen und Gebühren erheben, ohne Bereitstellungen und Aufrufe unterschiedlich behandeln zu müssen. Weitere Informationen zu Bereitstellungsgebühren finden Sie</a>

</p> 

Mit dieser Funktion werden Vertragsfabriken in Starknet eingeführt, da jeder Vertrag den Systemaufruf „deploy“ aufrufen und so neue Verträge erstellen kann.



#### Von „Delegierter Anruf“ zu „Bibliotheksanruf“ wechseln

Durch die Einführung von Klassen können wir ein bekanntes Problem im Delegate-Call-Mechanismus von Ethereum angehen: Wenn ein Vertrag einen Delegate-Aufruf an einen anderen Vertrag ausführt, benötigt er nur seine Klasse (seinen Code) und keine tatsächliche Instanz (seinen Speicher). Die Angabe einer bestimmten Vertragsinstanz bei einem Delegate-Aufruf ist daher eine schlechte Praxis (tatsächlich hat dies zu einigen Fehlern in Ethereum-Verträgen geführt) – es muss nur die Klasse angegeben werden.

Der alte Systemaufruf „delegate_call“ ist jetzt veraltet (alte Verträge, die bereits bereitgestellt wurden, funktionieren weiterhin, Verträge, die „delegate_call“ verwenden, werden jedoch nicht mehr kompiliert) und wird durch einen neuen Systemaufruf „library_call“ ersetzt, der das erhält Klassen-Hash (einer zuvor deklarierten Klasse) anstelle einer Vertragsinstanzadresse. Beachten Sie, dass an einem Bibliotheksaufruf nur ein tatsächlicher Vertrag beteiligt ist, sodass wir die Mehrdeutigkeit zwischen dem aufrufenden Vertrag und dem Implementierungsvertrag vermeiden.



#### Neue API-Endpunkte

Wir haben der API zwei neue Endpunkte hinzugefügt, die den Abruf klassenbezogener Daten ermöglichen:

* \`get_class_by_hash\`: gibt die Klassendefinition anhand des Klassen-Hashs zurück
* \`get_class_hash_at\`: gibt den Klassen-Hash eines bereitgestellten Vertrags anhand der Vertragsadresse zurück

Beachten Sie, dass Sie zum direkten Abrufen der Klasse eines bereitgestellten Vertrags anstelle der beiden oben genannten Methoden den alten Endpunkt „get_full_contract“ verwenden können, der in zukünftigen Versionen umbenannt wird. Alle oben genannten Endpunkte sind auch über die [Starknet CLI](https://docs.starknet.io/docs/CLI/commands)nutzbar.



#### Gebühren

Wir führen weiterhin Gebühren in Starknet ein und machen sie\[invoke\](zuerst im Testnet, später auch im Mainnet) für Transaktionen. Für die Transaktion „declare“ fallen zu diesem Zeitpunkt keine Gebühren an. Ebenso fallen für „Deploy“-Transaktionen keine Gebühren an. Beachten Sie jedoch, dass dieser Transaktionstyp in zukünftigen Versionen höchstwahrscheinlich veraltet sein wird.

In diesem Bereich bleiben noch einige offene Fragen offen. Die wichtigste davon ist die Frage, wie Gebühren für Vertragserklärungen und die Bereitstellung von Starknet-Konten erhoben werden sollen. Wir werden diese Probleme in zukünftigen Versionen beheben.



### Was kommt als nächstes?

Gemäß unserer Roadmap, die wir am [](https://medium.com/starkware/starknet-on-to-the-next-challenge-96a39de7717)angekündigt haben, sind wir bestrebt, die Leistung von Starknet im Allgemeinen und die Leistung des Sequenzers im Besonderen zu verbessern, um den Benutzern schnelleres Feedback zu ihren Transaktionen zu geben. In der nächsten Version planen wir, Parallelisierung in den Sequenzer einzuführen, um eine schnellere Blockproduktion zu ermöglichen.

Die nächste Hauptversion von Starknet wird sich auf die Struktur der Starknet-Konten konzentrieren, ähnlich wie [ERC-4337](https://medium.com/infinitism/erc-4337-account-abstraction-without-ethereum-protocol-changes-d75c9d94dc4a). Damit haben wir das Verhalten von Starknet-Konten finalisiert und machen einen weiteren großen Schritt in Richtung Massenakzeptanz!