### TL;DR

* Die Dezentralisierung von Starknet beinhaltet einen nativen Token und eine neue Grundlage.
* Der Starknet-Token wird für die Governance und als Zahlungs- und Einsatzmittel des Netzwerks verwendet.
* Zehn Milliarden Token wurden geprägt und ihre Zuteilung hat begonnen.
* Die derzeit gegründete Starknet Foundation hat die Aufgabe, Starknet als öffentliches Gut zu erhalten.

Starknet ist ein erlaubnisloses dezentrales Layer 2 (L2)-Gültigkeits-Rollup, das die Skalierung von Ethereum über kryptografische Protokolle namens STARKs ermöglicht, ohne die Kernprinzipien von Ethereum der Dezentralisierung, Transparenz, Inklusivität und Sicherheit zu gefährden.

Die Alpha von Starknet wurde im November 2021 im Mainnet gestartet. In weniger als einem Jahr entsteht ein Ökosystem, an dem weltweit Dutzende Teams arbeiten. Jetzt ist es an der Zeit, die Dezentralisierung des Netzwerks voranzutreiben, damit es die Lebendigkeit, Zensurresistenz, Transparenz und Inklusivität erreicht, die von einem L2 auf Ethereum gefordert werden.

Dezentralisierung bedeutet, dass der Betrieb und die Entwicklung des Netzwerks nicht von einer einzelnen Einheit, einschließlich StarkWare, abhängen. Ein erlaubnisfreier Proof-of-Stake-Leader-Wahlmechanismus und die On-Chain-Zahlung von Transaktionsgebühren, beide unter Verwendung eines nativen Tokens, werden es dem Netzwerk ermöglichen, zuverlässig als L2 auf Ethereum zu funktionieren, selbst wenn StarkWare nicht mehr existiert. Entscheidungen bezüglich der laufenden Wartung von Starknet werden von StarkWare auf die Community verlagert. Ein Starknet-Token und eine Stiftung werden Schlüsselelemente dieser Bemühungen sein.

Dieser Beitrag, der erste von drei gleichzeitig veröffentlichten Beiträgen, fasst Starknets bisherige Reise zusammen und stellt den Starknet-Token und die Starknet Foundation vor. Der [nächste Beitrag](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778) bespricht das Starknet-Governance-Modell und der [dritte Beitrag](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6) konzentriert sich auf das Token-Modell von Starknet.

Wir danken den folgenden Starknet-Unterstützern (in alphabetischer Reihenfolge) für ihre Kommentare zu einem Entwurf dieser Beiträge: Guily_Gioza (Topology), Itamar Lesuisse (Argent), Jonas Nelle (Pontis), Martin Triay (OpenZeppelin), Polynya, Sylve Chevet (Briq) , und Tomasz Stańczak (Nethermind).

### Die Geschichte bisher

[Starknet](https://starknet.io/) basiert auf Kryptographie und einem offenen Ökosystem. Die Kryptographie ist [STARKs](https://eprint.iacr.org/2018/046.pdf). Hierbei handelt es sich um auf Mathematik basierende Protokolle, die Ethereum um Größenordnungen skalieren. Sie erfordern keine vertrauenswürdige Einrichtung, sind Post-Quantum-sicher und können in jeder Größenordnung problemlos eingesetzt werden. Das Ökosystem besteht aus Kernentwicklern, die seit Jahren Infrastruktur und Tools zur Skalierung der Blockchain-Technologie aufbauen möchten, sowie aus neuen und kreativen Anwendungsbereichen, die möglich werden, wenn die Rechenleistung von Ethereum erweitert wird.

Starknet bietet allen Entwicklern und Benutzern Zugriff auf die Umfangs- und Sicherheitsvorteile von STARKs, um Ethereum zu skalieren und gleichzeitig die Kernwerte von Ethereum zu bewahren. STARKs wurden von Mitbegründern von StarkWare erfunden, die sie zunächst zum Aufbau der [StarkEx-](https://starkware.co/starkex/) Skalierungslösung für Kunden verwendeten. Anschließend bauten StarkWare und andere Entwicklerteams (gemeinsam „Hauptmitwirkende“) [Starknet](https://starkware.co/starknet/)auf, eine öffentliche, dezentrale und erlaubnislose Infrastruktur, um sicherzustellen, dass diese Skalierungstechnologien dauerhaft für alle zugänglich sind.

Der Start von Starknet Alpha vor fast einem Jahr löste die Entstehung eines größeren Ökosystems aus, das sich dem Aufbau und der Förderung von Starknet widmet. Weltweit gibt es zahlreiche Entwicklerteams, die die Kerninfrastruktur sowie neue Anwendungen darauf aufbauen.

### Der Weg zur Dezentralisierung

Die STARK-Technologie ist ausgereift und sicher, aber Starknet hat nicht den Status eines öffentlichen Guts wie Ethereum oder das Internet erreicht. Damit Starknet dieses Ziel erreichen kann, müssen Governance, Betrieb und Entwicklung weiterhin dezentralisiert werden. Dies wird durch zwei Mechanismen erleichtert: die Starknet Foundation und den Starknet Token.

#### Stiftung

Als gemeinnützige Organisation besteht die Aufgabe der Stiftung darin, Starknet als öffentliches Gut zu erhalten – eine Ware oder Dienstleistung, die allen Mitgliedern der Gesellschaft zur Verfügung steht. Starknet ist eine erlaubnislose Infrastruktur, die allen zur Verfügung stehen sollte. Es muss gut gewartet werden, um für die öffentliche Nutzung sicher und effizient zu sein. Es darf auch keine Diskriminierung zwischen Benutzern geben.

Die Stiftung wird durch einen einmaligen Zuschuss von Starknet-Tokens finanziert. Es wird die Entwicklung von Bottom-up-Mechanismen für die Entscheidungsfindung der Gemeinschaft in wesentlichen technologischen Fragen wie Protokollaktualisierungen, Streitbeilegung und Finanzierung öffentlicher Güter fördern.

#### Zeichen

Der Starknet-Token wird benötigt, um das Ökosystem zu betreiben, zu erhalten und zu sichern, über seine Werte und strategischen Ziele zu entscheiden und seine Entwicklung zu steuern. Dieser Token wird für (i) Governance, (ii) Zahlung von Transaktionsgebühren auf Starknet und (iii) Teilnahme am Konsensmechanismus von Starknet benötigt.

Wir haben zunächst zehn Milliarden Token geprägt, die an Hauptmitwirkende des Starknet-Ökosystems, darunter StarkWare und die Investoren von StarkWare, an Starknet-Softwareentwicklerpartner und an die Stiftung verteilt werden. Bald (Ziel: September 2022) wird der Token als ERC-20-Token auf Ethereum gehen und zur Verwendung bei der Governance und Abstimmung über Netzwerk-Upgrades angefordert werden. Später werden die Starknet-Gebühren nur noch in diesem Token gezahlt, wobei gleichzeitig eine gute Benutzererfahrung für Benutzer gewährleistet wird, die an der Zahlung von Gebühren in der ETH interessiert sind. Noch später wird mit der automatischen Prägung zusätzlicher Starknet-Token begonnen (dh die Anzahl der im Umlauf befindlichen Token wird mehr als zehn Milliarden betragen).

Das Starknet-Token-Modell legt Wert darauf, Entwickler für ihre Arbeit zu entlohnen. Ein Teil der neuen Präge- und Transaktionsgebühren – Gebühren, die für die Nutzung von Starknet erhoben werden – wird den Kerninfrastrukturentwicklern und Smart-Contract-Entwicklern für die Arbeit gewährt, die sie zum Entwurf und zur Einführung des Protokolls geleistet haben, zusätzlich zur Vergütung der Starknet-Betreiber für die von ihnen geleistete Arbeit getan haben, um es zu bedienen.

Der vollständige Grundgedanke hinter einem neuen und dedizierten Starknet-Token wird in unserem [Sekunden-Beitrag](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)erläutert, und die Starknet-Token-Designprinzipien und die anfängliche Zuteilung werden im [Dritten-Beitrag](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6)besprochen.