### TL;DR

* StarkNet Alpha 0.7.0 veröffentlicht in Goerli; voll Verbesserungen
* Verträge können jetzt mit dem Proxy-Upgrade-Muster aktualisiert werden
* Verträge können nun Ereignisse emittieren
* Unterstützung für die lang erwarteten Blocknummer und Blockzeitstempel Systemaufrufe

### Einleitung

Wir freuen uns, die Alpha 0.7.0 zu veröffentlichen, eine Version voller neuer Funktionen und Verbesserungen. Einer der besten Anreize für StarkNet in den letzten Monaten war die zunehmende Beteiligung der Gemeinschaft an der Gestaltung der Zukunft von StarkNet. Diese Version berücksichtigt einige brennende Bedürfnisse der Gemeinschaft.

#### Änderungen der Namenskonvention

Der beobachtende Leser hat vielleicht bemerkt, dass die vorherige Version von StarkNet Alpha Alpha den Namen Alpha 4 trägt, während wir nun Alpha 0.7.0 veröffentlichen. Wir haben uns entschlossen, die dedizierte Alpha-Versionsnummer zu streichen und uns stattdessen nur auf die zugehörige Cairo-Sprachversion zu verlassen.

### Neue Funktionen

#### Vertragsverbesserung

OpenZeppelins[Proxy Upgrade Pattern](https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies)wird nun vollständig für Vertragsaktualisierungen in StarkNet unterstützt. Das Proxy-Muster ist die übliche Methode, um Vertragsaktualisierungen über Ethereum zu ermöglichen. Alpha 0.7.0 aktiviert dieses Muster über StarkNet.

Wir haben ein kurzes[Tutorial](https://starknet.io/docs/hello_starknet/default_entrypoint.html)gemacht, um eine grundlegende Implementierung des Musters zu demonstrieren und OpenZeppelin ist bereits in der Lage, einen Standardvertrag für das Proxy-Muster zu implementieren; siehe den[Prototyp](https://github.com/OpenZeppelin/cairo-contracts/pull/129).

#### Nummer und Zeitstempel blockieren

Alpha 0.7.0 fügt zwei neue Systemaufrufe hinzu, nach denen viele Entwickler gefragt haben. Mit diesen Anrufen kann ein Vertrag auf die Blocknummer und den Blockzeitstempel zugreifen. Die Blocknummer gibt die Anzahl des aktuell ausgeführten Blocks zurück. Der Block-Zeitstempel gibt den Zeitstempel zurück, den der Sequencer bei der Erstellung des Blocks angibt.

Ein Beispiel für die Verwendung dieser Funktionen finden Sie im[Tutorial](https://starknet.io/docs/hello_starknet/more_features.html#block-number-and-timestamp).

#### Ereignisse

Überraschung! Ein Feature, das für eine zukünftige Version geplant war, hat sich in diese frühere Version eingeschlichen.

StarkNet-Verträge unterstützen nun das Definieren und Emittieren von Ereignissen, was es ihnen erlaubt, Ausführungsinformationen für den Verbrauch außerhalb der Kette zu veröffentlichen. Ethereum Entwickler werden die Semantik und Syntax sehr ähnlich zu Solidity finden. Sie können die[-Dokumentation](https://starknet.io/documentation/events/)lesen oder dem[Tutorial](https://starknet.io/docs/hello_starknet/events.html)folgen, das diese Funktion erklärt.

#### %builtins-Richtlinie entfernt

Die %b-uiltin-Direktive wird in StarkNet-Verträgen nicht mehr benötigt. Diese Änderung folgte einer Gemeinschaftsdiskussion über das[Vertragserweiterbarkeitsmuster](https://community.starknet.io/t/contract-extensibility-pattern/210)auf[StarkNet Schamanen](https://community.starknet.io/). Es vereinfacht die Benutzbarkeit dieses Erweiterbarkeitsmusters erheblich.

Zum Beispiel wird der folgende Vertrag geändert von:

```
%lang starknet

# Dies ist die "%builtins" Direktive.
# Es wird nicht mehr benötigt.
%builtins range_check

@view
func add(x : felt, y : felt) -> (res : felt):
return (res=x + y)
end
```

Hierfür:

```
%lang starknet
@view
func add(x : felt, y : filt) -> (res : felt):
return (res=x + y)
end
```

Sie können sich die[ERC-20](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts/token)Standardverträge anschauen, die das neue Muster verwenden.

#### Externe Funktionen unterstützen Arrays von Strukturen

[Placeholder] Alpha 0.7.0 supports passing and return arrays of structs in external functions. Diese zusätzliche Funktionalität ermöglicht Konto-Verträgen eine bessere Unterstützung von[Multicalls](https://github.com/OpenZeppelin/cairo-contracts/pull/73#discussion_r753535751).

Multicall ist ein mächtiges Feature der Account-Abstraktion, das es einem Konto erlaubt, mehrere Anrufe in einer einzigen Transaktion zu tätigen. Ein offensichtlicher Anwendungsfall ist die Erstellung einer**-Transaktion**die die Erlaubnis aufruft und dann überträgt.

Wir freuen uns darauf, zu sehen, was die Community damit macht.

#### Verbesserungen des StarkNet CLI

**Unterstützung für ausstehende Blöcke**

[Pending Blocks](https://starknet.io/documentation/block-structure-and-hash/#pending_block) were [introduced](https://community.starknet.io/t/cairo-v0-6-2-api-change-pending-block/195) in the last minor version (v0.6.2) and offered faster confirmations on transactions. Diese Version enthält Unterstützung für die Abfrage dieser Blöcke über das StarkNet CLI.

Um es zu verwenden, in jedem CLI-Befehl, der block_number als Argument verwendet (contract_call/get_block/get_code/get_storage_at), können wir das StarkNet in Bezug auf den ausstehenden Block abfragen, indem wir block_number=pending.

**Unterstützung für Konto-Verträge**

StarkNet verwendet Kontoabstraktion, d.h. alle Konten werden als intelligente Verträge implementiert. Die ersten Implementierungen von Kontenverträgen wurden von[Argent](https://github.com/argentlabs/argent-contracts-starknet)und[OZ](https://github.com/OpenZeppelin/cairo-contracts/blob/main/contracts/Account.cairo)durchgeführt, aber wir erwarten noch viel mehr.

In StarkNet müssen alle Transaktionen einen Konto-Vertrag durchlaufen und das CLI ermöglicht nun eine direkte Interaktion mit StarkNet Alpha über Konto-Verträge. Sehen Sie sich das[Tutorial](https://starknet.io/docs/hello_starknet/account_setup.html#setting-up-a-starknet-account)an, wie Sie es einrichten.

Ähnliche Funktionalität wurde auch zu[StarkNet.py](https://github.com/software-mansion/starknet.py/)und zu[Nile](https://github.com/OpenZeppelin/nile)im letzten Monat hinzugefügt.

#### L1<>L2 Nachrichten im Test-Framework

[Placeholder] Alpha 0.7.0 introduces the Postman. Die Postman ermöglicht Entwicklern, das Test-Framework zu nutzen, um kompliziertere Strömungen zu testen.

Auf hohem Niveau verspottet es die Verantwortung des StarkNet Sequenzers, Nachrichten von L1 auf L2 und L2 auf L1 zu übergeben. Es stellt sicher, dass Nachrichten, die über den Solidy-Nachrichtenvertrag versandt werden, am Bestimmungsort StarkNet-Vertrag erscheinen und Nachrichten aus einem StarkNet-Vertrag im Solidy-Messaging-Vertrag erscheinen.

#### Und mehr Funktionen

[Placeholder] Alpha 0.7.0 provides many more features and changes such as the addition of an efficient square root function to the math common library. Eine vollständige Liste erscheint im[Changelog](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.7.0).

### Weiter oben?

Der erste[Gebührenmechanismus](https://community.starknet.io/t/fees-in-starknet-alpha/286/29)Support wird in wenigen Wochen als Subversion von StarkNet freigegeben.

### Mehr Informationen?

[starknet.io](https://starknet.io/): für alle StarkNet-Informationen, Tutorials und Updates.

[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y): Trete bei um Antworten auf deine Fragen zu bekommen, dev Support zu erhalten und Teil der Community zu werden.

[StarkNet Schamanen](https://community.starknet.io/): Join to follow (und teilnehmen!) in StarkNet Forschungsdiskussionen.