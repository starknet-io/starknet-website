### TL;DR

* Starknet Alpha 0.7.0 für Goerli veröffentlicht; voller Verbesserungen
* Verträge können jetzt mithilfe des Proxy-Upgrade-Musters aktualisiert werden
* Verträge können jetzt Ereignisse ausgeben
* Unterstützung für die lang erwarteten Systemaufrufe Block Number und Block Timestamp

### Einführung

Wir freuen uns, Alpha 0.7.0 zu veröffentlichen, eine Version voller neuer Funktionen und Verbesserungen. Einer der besten Anreize für Starknet in den letzten Monaten war die verstärkte Beteiligung der Community an der Gestaltung der Zukunft von Starknet. Diese Version geht auf einige der dringenden Bedürfnisse der Community ein.

#### Änderungen an der Namenskonvention

Dem aufmerksamen Leser ist vielleicht aufgefallen, dass die vorherige Starknet-Alpha-Version den Namen Alpha 4 trug, während wir jetzt Alpha 0.7.0 veröffentlichen. Wir haben uns entschieden, die dedizierte Alpha-Versionsnummer wegzulassen und uns stattdessen nur auf die zugehörige Cairo-Lang-Version zu verlassen.

### Neue Eigenschaften

#### Vertragsaktualisierbarkeit

OpenZeppelins[Proxy Upgrade Pattern](https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies)wird jetzt für Vertrags-Upgrades in Starknet vollständig unterstützt. Das Proxy-Muster ist die gängige Methode, um Vertrags-Upgrades über Ethereum zu ermöglichen. Alpha 0.7.0 ermöglicht dieses Muster über Starknet.

Wir haben ein kurzes[Tutorial](https://starknet.io/docs/hello_starknet/default_entrypoint.html)erstellt, um eine grundlegende Implementierung des Musters zu demonstrieren, und OpenZeppelin arbeitet bereits intensiv an der Implementierung eines Standardvertrags für das Proxy-Muster; siehe[Prototyp](https://github.com/OpenZeppelin/cairo-contracts/pull/129).

#### Blocknummer und Blockzeitstempel

Alpha 0.7.0 fügt zwei neue Systemaufrufe hinzu, nach denen viele Entwickler gefragt haben. Diese Aufrufe ermöglichen einem Vertrag den Zugriff auf die Blocknummer und den Blockzeitstempel. Die Blocknummer gibt die Nummer des aktuell ausgeführten Blocks zurück. Der Block-Zeitstempel gibt den Zeitstempel zurück, den der Sequenzer bei der Erstellung des Blocks angegeben hat.

Ein Beispiel für die Verwendung dieser Funktionen finden Sie im[Tutorial](https://starknet.io/docs/hello_starknet/more_features.html#block-number-and-timestamp).

#### Veranstaltungen

Überraschung! Eine Funktion, die für eine zukünftige Version geplant war, hat sich in diese frühere Version eingeschlichen.

Starknet-Verträge unterstützen jetzt das Definieren und Ausgeben von Ereignissen und ermöglichen es ihnen, Ausführungsinformationen für Off-Chain-Anwendungen zur Nutzung offenzulegen. Ethereum-Entwickler werden feststellen, dass die Semantik und Syntax Solidity sehr ähnlich sind. Sie können die[Dokumentation](https://starknet.io/documentation/events/)lesen oder dem[Tutorial](https://starknet.io/docs/hello_starknet/events.html)folgen, in dem diese Funktion erklärt wird.

#### %builtins-Direktive entfernt

Die %builtin-Direktive wird in Starknet-Verträgen nicht mehr benötigt. Diese Änderung folgte einer Community-Diskussion über das[Vertragserweiterbarkeitsmuster](https://community.starknet.io/t/contract-extensibility-pattern/210)auf[Starknet-Schamanen](https://community.starknet.io/). Es vereinfacht die Benutzerfreundlichkeit dieses Erweiterbarkeitsmusters erheblich.

Beispielsweise wird der folgende Vertrag geändert von:

```
%lang starknet

# Dies ist die „%builtins“-Direktive.
# Es wird nicht mehr benötigt.
%builtins range_check

@view
func add(x : Felt, y : Felt) -> (res : Felt):
return (res=x + y)
end
```

Dazu:

```
%lang starknet
@view
func add(x : Felt, y : Felt) -> (res : Felt):
return (res=x + y)
end
```

Sie können sich die[ERC-20](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts/token)Standardverträge ansehen, die das neue Muster verwenden.

#### Externe Funktionen unterstützen Arrays von Strukturen

Alpha 0.7.0 unterstützt die Übergabe und Rückgabe von Arrays von Strukturen in externen Funktionen. Diese zusätzliche Funktionalität ermöglicht es Account Contracts,[Multicalls](https://github.com/OpenZeppelin/cairo-contracts/pull/73#discussion_r753535751)besser zu unterstützen.

Multicall ist eine leistungsstarke Funktion von Account Abstraction, die es einem Konto ermöglicht, mehrere Anrufe in einer einzigen Transaktion zu tätigen. Ein offensichtlicher Anwendungsfall besteht darin, eine**Einzeltransaktion**zu erstellen, die „allowance“ und dann „transferFrom“ aufruft.

Wir sind gespannt, was die Community damit macht.

#### Verbesserungen an der Starknet-CLI

**Unterstützung für ausstehende Blöcke**

[Ausstehende Blöcke](https://starknet.io/documentation/block-structure-and-hash/#pending_block)wurden[in der letzten Nebenversion (v0.6.2) eingeführt](https://community.starknet.io/t/cairo-v0-6-2-api-change-pending-block/195)und boten schnellere Bestätigungen für Transaktionen. Diese Version bietet Unterstützung für die Abfrage dieser Blöcke über die Starknet-CLI.

Um es zu verwenden, können wir in jedem CLI-Befehl, der block_number als Argument verwendet (contract_call/get_block/get_code/get_storage_at), das Starknet in Bezug auf den ausstehenden Block abfragen, indem wir block_number=pending angeben.

**Unterstützung für Kontoverträge**

Starknet nutzt die Kontoabstraktion, d. h. alle Konten werden als Smart Contracts implementiert. Die ersten Implementierungen von Kontoverträgen wurden von[Argent](https://github.com/argentlabs/argent-contracts-starknet)und[OZ](https://github.com/OpenZeppelin/cairo-contracts/blob/main/contracts/Account.cairo)durchgeführt, aber wir gehen davon aus, dass noch viele weitere folgen werden.

In Starknet müssen alle Transaktionen über einen Kontovertrag abgewickelt werden, und die CLI ermöglicht nun die Interaktion mit Starknet Alpha direkt über Kontoverträge. Weitere Informationen zur Einrichtung finden Sie im[-Tutorial](https://starknet.io/docs/hello_starknet/account_setup.html#setting-up-a-starknet-account).

Ähnliche Funktionen wurden im letzten Monat auch zu[Starknet.py](https://github.com/software-mansion/starknet.py/)und zu[Nile](https://github.com/OpenZeppelin/nile)hinzugefügt.

#### L1<>L2-Messaging im Testing Framework

Alpha 0.7.0 führt den Postman ein. Mit dem Postman können Entwickler das Testframework verwenden, um kompliziertere Abläufe zu testen.

Auf hoher Ebene – es verspottet die Verantwortung des Starknet-Sequenzers, Nachrichten von L1 an L2 und L2 an L1 weiterzuleiten. Es stellt sicher, dass Nachrichten, die über den Solidity-Messaging-Vertrag gesendet werden, im Ziel-Starknet-Vertrag angezeigt werden und Nachrichten, die von einem Starknet-Vertrag gesendet werden, im Solidity-Messaging-Vertrag angezeigt werden.

#### Und weitere Funktionen

Alpha 0.7.0 bietet viele weitere Funktionen und Änderungen, wie die Hinzufügung einer effizienten Quadratwurzelfunktion zur allgemeinen Mathematikbibliothek. Eine vollständige Liste erscheint im[Changelog](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.7.0).

### Next Up?

Die erste Unterstützung für den[Gebühren-Mechanismus](https://community.starknet.io/t/fees-in-starknet-alpha/286/29)wird in wenigen Wochen als Unterversion von Starknet veröffentlicht.

### Mehr Informationen?

[starknet.io](https://starknet.io/): für alle Starknet-Informationen, Tutorials und Updates.

[Starknet Discord](https://discord.gg/uJ9HZTUk2Y): Treten Sie bei, um Antworten auf Ihre Fragen zu erhalten, Entwicklerunterstützung zu erhalten und Teil der Community zu werden.

[Starknet-Schamanen](https://community.starknet.io/): Treten Sie bei, um Starknet-Forschungsdiskussionen zu verfolgen (und daran teilzunehmen!).