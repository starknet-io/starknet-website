### TL;DR

* Der Starknet Token (STRK) wird jetzt im Ethereum Mainnet bereitgestellt
* Vorsicht vor Betrug! Starknet-Tokens werden nicht zum Verkauf angeboten
* Es wird einige Zeit dauern, bis die Stiftung den Mechanismus für die Verteilung ihrer Token festgelegt hat
* Von StarkWare-Aktionären, Mitarbeitern und unabhängigen Partnersoftwareentwicklern gehaltene Token sind für einen Zeitraum von vier Jahren gesperrt, wobei eine schrittweise Freigabe nach einem Jahr beginnt
* Der Token wird die Dezentralisierung von Starknet vorantreiben, da er für Abstimmungen, Einsätze und die Zahlung von Gebühren verwendet wird

Heute macht [Starknet](https://starknet.io/) einen weiteren Schritt in Richtung Dezentralisierung. Der Starknet-Token ist jetzt [auf Ethereum](https://etherscan.io/address/0xca14007eff0db1f8135f4c25b34de49ab0d42766). Um es kurz zusammenzufassen: STRK wird als Staking-Token für die Teilnahme an den Konsensmechanismen von Starknet, als Governance-Token und zur Zahlung von Transaktionsgebühren verwendet. Die Begründung für [dieser Dienstprogramme wird in unserem Dezentralisierungsvorschlag](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)im Abschnitt „Wofür werden die Token verwendet?“ dargelegt.

\*Vorsicht vor Betrug: Zum Zeitpunkt des Verfassens dieses Artikels gibt es keine Möglichkeit, Starknet-Tokens zu kaufen; dieser Verkaufsverbotszeitraum bleibt bis auf Weiteres durch die [Starknet Foundation](https://twitter.com/StarkNetFndn)bestehen; Verfolgen Sie die offizielle Mitteilung der Starknet Foundation, um sich über Aktualisierungen des STRK-Status zu informieren. Sie können Betrugsfälle melden und im Kanal [scam-report](https://discord.gg/qypnmzkhbc) auf dem [Starknet Discord](http://starknet.io/discord) Server nach anderen Betrugsberichten suchen.*

In diesem Beitrag wird der Token-Zuteilungsprozess erläutert und erläutert, wie die bereitgestellten Token-Verträge zwei der drei vorgesehenen Funktionen des Tokens erfüllen, nämlich Abstimmung und Einsatz. Der dritte Nutzen – die Zahlung der Starknet-Gebühren – wird zu einem späteren Zeitpunkt besprochen.

### Planung des Token-Zuteilungsprozesses

Wir haben zuvor einen [Plan](https://medium.com/starkware/part-3-starknet-token-design-5cc17af066c6) für die anfängliche Zuteilung der Token vorgeschlagen. An Aktionäre, Mitarbeiter und unabhängige Softwareentwickler vergebene Token sind für vier Jahre gesperrt, wobei nach einem Jahr ein schrittweiser Veröffentlichungsplan beginnt. Gesperrte Token können für Abstimmungen und Einsätze verwendet werden, können jedoch nicht übertragen oder gehandelt werden. Einige der Token sind über einen dedizierten Smart Contract auf Ethereum gesperrt, während andere Token über Depotbanken gesperrt sind.

Unabhängig davon werden 50,1 % der vorhandenen Starknet-Tokens der Starknet Foundation zugeteilt, um sie zur Erreichung ihrer [Ziele](https://medium.com/@StarkNet_Foundation/welcome-to-the-world-starknet-foundation-7bd55d5dbc59) zu verwenden (vgl. [Beitrag von StarkWare](https://medium.com/starkware/introducing-the-starknet-foundation-bd4b4379fbb)). Diese Token sind nicht gesperrt. Die Stiftung wird jedoch Zeit benötigen, um den genauen Mechanismus für die weitere Zuteilung dieser Token zu formulieren, und wird ihre Pläne zu gegebener Zeit mitteilen.

#### Warum einsperren?

Durch die Sperrung der Token für den oben genannten Zeitraum wird sichergestellt, dass aktuelle Mitwirkende an den langfristigen Anreizen von Starknet ausgerichtet sind. Es entmutigt auch Spekulationen über den Token, bevor er für die beabsichtigten Zwecke weit verbreitet verwendet wird: Sicherung des Netzwerks, Zahlung von Gebühren und Dezentralisierung der Governance.

Als nächstes erklären wir, wie die Token-Implementierung Abstimmungen und Einsätze unterstützt.

### Wählen

Die Stiftung wird dafür verantwortlich sein, eine solide Regierungsführung zu ermöglichen und die Abstimmungsmechanismen zu formulieren. Der Starknet-Token wurde entwickelt, um sowohl direkte Abstimmungen als auch eine Reihe von Delegationsmechanismen zu ermöglichen.

#### L1-Abstimmung

Die jetzt bereitgestellte ERC-20-Implementierung umfasst die optionale Verwendung des [Delegierungsmoduls](https://docs.compound.finance/v2/governance/)von Compound. Dieses Modul wird häufig für On-Chain-Abstimmungen verwendet. Der Grund dafür, dass es bei Starknet optional und standardmäßig deaktiviert ist, liegt in der Kostenerwägung. Das Einschalten bedeutet, dass jede Übertragung der Starknet-Tokens auf L1 zusätzliches Gas erfordert, das ausschließlich zum Zweck der Verfolgung von Stimmrechtsveränderungen benötigt wird.

#### Nicht-L1-Abstimmung

Zu den Alternativen zur L1-On-Chain-Abstimmung mit dem Delegationsmodul von Compound gehören Off-Chain-Abstimmung sowie Starknet-basierte On-Chain-Abstimmungssysteme (wie [SnapshotX](https://snapshot.mirror.xyz/cUOrwdtEs5PvNh0sqYWWxPjt8GdJWn_Qp3cl7E3_8IU)). Diese Alternativen, die den Gasverbrauch für L1-Transfers erheblich reduzieren, erfordern keine explizite Unterstützung durch den derzeit eingesetzten ERC-20-Code und werden daher von Natur aus unterstützt.

Wie oben erwähnt, können alle Token – gesperrt und entsperrt – im Abstimmungsmechanismus von Starknet verwendet werden.

### Abstecken

Der erlaubnislose und zensurresistente Betrieb von Starknet erfordert eine zufällige Auswahl von Sequenzern. Die Wahrscheinlichkeit, dass ein Knoten ausgewählt wird, um einen Block zu sequenzieren und vorzuschlagen, ist proportional zur Anzahl der Starknet-Tokens, die der Knoten einsetzt. Der Grund für die Verwendung von Starknet-Tokens (anstelle von beispielsweise Ethereum oder Bitcoin) wird im [Governance-Vorschlag](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)erläutert, und die genauen Details des Staking, der Sequenzierung und der Blockerstellung auf Starknet werden derzeit von der Community</a>diskutiert

und sind es auch muss noch finalisiert werden.</p> 

Wie bei Abstimmungen können Token auch dann zum Einsatz verwendet werden, wenn sie gesperrt sind. Dies trägt zur Vielfalt der Starknet-Betreiber und zur Widerstandsfähigkeit von Starknet bei.



### Zusammenfassung

Der Einsatz der Starknet-Token-Verträge auf Ethereum ist ein weiterer Schritt in der Dezentralisierung von Starknet.

Wir fordern Entwickler und Benutzer dringend auf, sich vor Betrügereien in Acht zu nehmen! Zum Zeitpunkt der Veröffentlichung sind keine Token handelbar und dieser No-Trade-Status bleibt bis auf Weiteres durch die Starknet Foundation bestehen.

Für weitere Fragen können Sie den Kanal [Token-Diskussionen](https://discord.gg/qypnmzkhbc) auf dem [Starknet Discord](http://starknet.io/discord) Server besuchen.