### TL;DR

* Der StarkNet Token (STRK) wird nun auf Ethereum Mainnet eingesetzt
* **Vorsicht vor Betrug!**StarkNet Marken werden nicht zum Verkauf angeboten
* Es wird einige Zeit dauern, bis die Stiftung den Mechanismus für die Verteilung ihrer Token ermittelt hat
* Token, die von StarkWare-Aktionären, Mitarbeitern und unabhängigen Software-Entwicklern gehalten werden, sind für einen Zeitraum von vier Jahren gesperrt mit einer schrittweisen Freigabe nach einem Jahr
* Der Token wird die Dezentralisierung von StarkNet durch die Verwendung für Abstimmung, Abrechnung und Zahlung von Gebühren weiter vorantreiben

[StarkNet](https://starknet.io/)unternimmt heute einen weiteren Schritt in Richtung Dezentralisierung. Der StarkNet-Token ist jetzt[auf Ethereum](https://etherscan.io/address/0xca14007eff0db1f8135f4c25b34de49ab0d42766). Schnelles Recording läuft: STRK wird als Absicherungszeichen für die Teilnahme an den Konsensmechanismen von StarkNet, als Governance-Token und zur Zahlung von Transaktionsgebühren verwendet. Die Begründung für jedes dieser Hilfsprogramme wird in[unserem Dezentralisierungsvorschlag](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)vorgestellt, in der Sektion „Wofür werden die Token verwendet? “

***Vorsicht vor Betrug:**zum Zeitpunkt des Schreibens gibt es keine Möglichkeit, StarkNet Tokens zu kaufen; diese Zeitspanne ohne Verkauf bleibt bis auf weiteres durch die[StarkNet Foundation](https://twitter.com/StarkNetFndn)gültig ; folgen Sie der offiziellen Mitteilung der StarkNet Foundation, um über alle Aktualisierungen des STRK-Status zu erfahren. Du kannst Betrügereien melden und auf andere Betrugsberichte im[Betrugsbericht](https://discord.gg/qypnmzkhbc)Kanal auf dem[StarkNet Discord](http://starknet.io/discord)Server überprüfen.*

Dieser Beitrag erklärt den Prozess der Zuweisung von Token, und wie die eingesetzten Tokenverträge zwei der drei entworfenen Hilfsmittel des Tokens bedienen, nämlich Abstimmung und Einsatz. Das dritte Dienstprogramm – die Zahlung von StarkNet-Gebühren – wird zu einem späteren Zeitpunkt diskutiert werden.

### Den Tokenzuweisungsprozess planen

Wir haben bereits einen[Plan](https://medium.com/starkware/part-3-starknet-token-design-5cc17af066c6)für die anfängliche Zuweisung der Token vorgeschlagen. Die den Aktionären, Mitarbeitern und unabhängigen Softwareentwicklern zugewiesenen Tokens sind für vier Jahre gesperrt, wobei ein schrittweiser Release-Zeitplan nach einem Jahr beginnt. Gesperrte Token können zur Stimm- und Einsteckung verwendet werden, können aber nicht übertragen oder gehandelt werden. Einige der Token sind über einen dedizierten Smart Contract auf Ethereum gesperrt, während andere Token über Custodians gesperrt werden.

Teilweise werden 50,1% der vorhandenen StarkNet-Token der StarkNet-Stiftung zugewiesen, um ihre[Ziele zu erreichen](https://medium.com/@StarkNet_Foundation/welcome-to-the-world-starknet-foundation-7bd55d5dbc59)(vgl.[StarkWare's Beitrag](https://medium.com/starkware/introducing-the-starknet-foundation-bd4b4379fbb)). Diese Token sind nicht gesperrt. Die Stiftung benötigt jedoch Zeit, um den genauen Mechanismus zur weiteren Zuweisung dieser Marken zu formulieren und ihre Pläne rechtzeitig zu teilen.

#### Warum sperren?

Die Sperrung der Token für den genannten Zeitraum stellt sicher, dass die derzeitigen Beitragenden mit den langfristigen Anreizen von StarkNet übereinstimmen. Außerdem schreckt es vor einer weitverbreiteten Nutzung für die vorgesehenen Zwecke vor Spekulationen über das Zeichen ab: Netzsicherung, Bezahlung von Gebühren und Dezentralisierung der Regierungsführung.

Als nächstes erklären wir, wie die Tokenumsetzung die Abstimmung und den Einsatz unterstützt.

### Abstimmungen

Die Stiftung wird für die Erleichterung einer soliden Regierungsführung und die Formulierung der Wahlmechanismen zuständig sein. Das StarkNet Token wurde entwickelt, um sowohl direkte Abstimmungen als auch eine Reihe von Delegationsmechanismen zu ermöglichen.

#### L1 Stimmen

Die ERC-20-Implementierung beinhaltet jetzt**optionale**Nutzung des Delegationsmoduls[der Compound-Gruppe](https://docs.compound.finance/v2/governance/). Dieses Modul ist weit verbreitet für On-Kettenabstimmungen. Der Grund, warum es optional auf StarkNet und standardmäßig ausgeschaltet ist, ist Kostenüberlegung. Das Einschalten bedeutet, dass für jede Übertragung der StarkNet Token auf L1 zusätzliches Gas benötigt wird, das ausschließlich zum Nachverfolgen von Veränderungen in der Stimmmacht benötigt wird.

#### Non-L1 voting

Alternativen zu L1 On-Kettenabstimmungen mit Compound's Delegationsmodul umfassen off-chain voting, sowie StarkNet-basierte On-Kettenstimmsysteme (wie[SnapshotX](https://snapshot.mirror.xyz/cUOrwdtEs5PvNh0sqYWWxPjt8GdJWn_Qp3cl7E3_8IU)). Diese Alternativen, die den Gasverbrauch für L1-Transfers deutlich reduzieren, benötigen keine explizite Unterstützung durch den derzeit eingesetzten ERC-20-Code und werden daher von Natur aus unterstützt.

Wie bereits erwähnt, können alle Spielsteine – gesperrt und freigeschaltet – im StarkNet-Abstimmungsmechanismus verwendet werden.

### Absteckung

Die unzulässige und zensursichere Operation von StarkNet erfordert eine zufällige Auswahl der Sequenzer. Die Wahrscheinlichkeit, dass ein Knoten ausgewählt wird, um einen Block zu sequenzieren und vorschlagen, ist proportional zur Anzahl der StarkNet-Token, die Knotenpunkte gesetzt werden. Die Gründe für die Verwendung von StarkNet-Token (anstelle von beispielsweise Ethereum oder Bitcoin) werden im[Governance-Vorschlag](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)erläutert, und die genauen Einzelheiten des Staking, der Sequenzierung und der Blockerstellung auf StarkNet werden von der Community</a>laufend

diskutiert und werden derzeit diskutiert noch nicht abgeschlossen.</p> 

Wie bei der Abstimmung können Tokens auch dann zum Abstecken verwendet werden, wenn sie gesperrt sind. Dies trägt zur Vielfalt der StarkNet-Betreiber und zur Widerstandsfähigkeit von StarkNet bei.



### Summary

Der Einsatz der StarkNet Token Verträge auf Ethereum ist ein weiterer Schritt in der Dezentralisierung von StarkNet.

Wir fordern Entwickler und Benutzer auf, sich vor Betrug zu warten! Zum Zeitpunkt der Veröffentlichung sind keine Token handelbar, und dieser No-Trade-Status bleibt bis auf weiteres durch die StarkNet Foundation gültig.

Für weitere Fragen kannst du den[Token-Diskussionen](https://discord.gg/qypnmzkhbc)Kanal auf dem[StarkNet Discord](http://starknet.io/discord)Server besuchen.