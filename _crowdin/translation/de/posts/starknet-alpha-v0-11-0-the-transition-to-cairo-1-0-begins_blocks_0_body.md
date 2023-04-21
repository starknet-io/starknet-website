## TL;DR

* Starknet alpha v0.11.0 ist aus und live im Testnet
* Sie können nun mit Kairo 1.0 Verträgen auf Starknet Testnet arbeiten und interagieren!
* Die Berechnung auf Starknet ist 5x günstiger!
* Zum ersten Mal wird das Mainnet-Upgrade auf Starknet alpha v0.11.0 zur Abstimmung gestellt
* Dies markiert den Beginn der Übergangsperiode vor[Regenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)
* Einsatz von Kairo 1. -Verträge auf Mainnet werden erst nach wenigen Wochen Testnet aktiviert, wenn wir sicherstellen, dass das neue System reibungslos läuft.

## Einführung

Wir freuen uns, Ihnen mitteilen zu können, dass der lang erwartete Starknet alpha v0.11.0 live auf Testnet ist! Warum ist dies ein großer Schritt für Starknet? In Starknet v0.11.0 können Sie intelligente Verträge von[Cairo 1.0](https://medium.com/starkware/cairo-1-0-is-here-7e1ac8377038)deklarieren, bereitstellen und ausführen. Wir führen auch einen neuen Systemaufruf ein, der eine reibungslose Umstellung bestehender Verträge auf eine Implementierung von Kairo 1.0 ermöglicht.

Kairo 1.0 verbessert Starknet in zwei verschiedenen Aspekten. Erstens verbessert es die Entwicklungserfahrung, indem es eine reichere Programmiersprache anbietet, die (unter anderem) Typen/Generikate, Eigenschaften/Fehlerbehandlung in Kairo einführt. Zweitens spielt Kairo 1.0 eine Schlüsselrolle bei der Dezentralisierung von Starknet: Die 1,0-Kontrakte, die in Starknet alpha v0.11.0 verschickt werden, werden in Sierra zusammengestellt. Sierra garantiert, dass jede Vertragsausführung nachweisbar ist, was eine entscheidende Eigenschaft in einem dezentralen Starknet ist.

Eine weitere wichtige Verbesserung, die in dieser Version eintritt, ist eine 5x Kostenreduzierung für die Berechnung. Dadurch wird Starknet noch benutzerfreundlicher für rechenintensive Anwendungen. Weitere Details unten.

## Bereit für Regenesis

Starknet alpha v0.11.0 markiert den Beginn der Übergangsperiode, die eine Vorbereitung vor der Starknet-Regenese ermöglicht. Starknet’s Regenesis plan was [published](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4) a few months ago, and it focuses on transitioning from a system based on Cairo 0 to a system based on Cairo 1.0.

Während des Übergangszeitraums haben bestehende Verträge von Kairo 0 (wenn sie erweiterbar sind) die Möglichkeit, ihre Adresse und ihre Speicherung beizubehalten, und nahtlos ihre Umsetzung nach Kairo 1 übergehen. (siehe nächster Abschnitt).

Als Starknet-Benutzer bedeutet dies, dass Sie Ihre Brieftasche erst einmal aktualisieren müssen, wenn das neue Kairo 1 ist. Die Implementierung Ihres Kontos wird freigegeben (Sie können es jederzeit bis zur Regenesis selbst tun). Es wird keine Ausfallzeit erwartet, alle Dapps im System werden weiterhin wie gewohnt funktionieren.

Nach der Regenesis, Starknet wird die Unterstützung der verbleibenden Kairo 0 Verträge im gesamten System. Dies wird im Voraus gut kommuniziert und den Entwicklern wird genügend Zeit für die Migration ihrer Verträge zur Verfügung stehen. Die Übergangszeit wird voraussichtlich ein paar Monate dauern, und die Entwickler von dapp können bereits mit der Migration ihrer Implementierung auf Kairo 1.0 beginnen. Am Ende der Übergangszeit wird die Regenesis stattfinden.

## Sanfte Migration nach Kairo 1,0

Mit dem Übergang zu Kairo 1.0 werden bestehende Verträge von Kairo 0 veraltet und werden nicht mehr von Regenesis unterstützt. Damit verbesserungsfähige Kairoel-0-Verträge auch nach der Regenesis weiterlaufen können und den Zustand bis zu diesem Zeitpunkt aufgebaut, haben wir einen neuen Systemaufruf hinzugefügt — ['replace_class'](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#replace_class_syscall). Verbesserbare Verträge haben kein Problem mit der Aktualisierung auf Kairo 1. -Implementierung, aber der zugrundeliegende Proxy (der Vertrag, der den tatsächlichen Zustand hält) bleibt bei der Umsetzung von Kairo 0 stecken. Das \`replace_class\` syscall löst dieses Problem, indem es dem Proxy-Vertrag erlaubt, seine zugrundeliegende Klasse zu ersetzen, i. behalten Sie die gleiche Adresse und Speicherung, aber ersetzen Sie die Implementierung.

## Die Berechnung ist jetzt 5x günstiger!

Heute haben die Transaktionsgebühren von Starknet zwei Hauptkomponenten: die Berechnung und die On-Ketten-Daten. Das Berechnungselement der Starknet-Transaktionsgebühr wird durch die Grenzkosten für die Überprüfung des Nachweises auf L1 bestimmt (siehe[Dokumentation](https://docs.starknet.io/documentation/architecture_and_concepts/Fees/fee-mechanism/)für weitere Details).

Ursprünglich haben unsere 200 m Kairo Schritte in einem Nachweis, dass 5m Gas zur Überprüfung erforderlich ist, zu einer naiven Schätzung von 0,05 Gas pro Kairoer Schritt. Seitdem wir sind zu[rekursive Beweise](https://medium.com/starkware/recursive-starks-78f8dd401025)gewechselt, die eine deutliche Senkung der Kosten für die L1-Überprüfung ermöglichen (nur die Wurzel eines Rekursionsbaums erreicht L1). Es ist jetzt an der Zeit, unsere ursprünglichen Schätzungen entsprechend zu aktualisieren – der Preis für jeden Kairo-Schritt auf L2 wird um 5x gesenkt und wird nun 0 kosten. 1 Gas.

Diese Kostensenkung ist für rechenintensive Anwendungen wie z.B. Kontenverträge mit nicht gebürtigen Unterschriften von Bedeutung. Einfache Transaktionen sehen eine geringfügige Kostensenkung (~ 5%). In zukünftigen Versionen werden wir die zweite Komponente behandeln: die On-Chain-Datenkosten. Sobald Alternativen zu On-Chain-Daten zu Starknet (alias Volition) eingeführt werden, wird die Kostensenkung überall spürbar sein.

## Starknet Governance Erste Abstimmung

Die erste Phase von Starknet Governance hat begonnen (weitere Details[hier](https://medium.com/starknet-foundation/starknets-governance-first-phase-4614c7566f40)). Die Mitglieder der Gemeinschaft können nun über einen zusätzlichen Kanal an der Gestaltung von Starknet teilnehmen, nämlich über Änderungen des Protokolls.

Starknet Governance wird sich in den ersten Phasen auf das Starknet-Protokoll konzentrieren. Jedes Starknet-Upgrade wird zuerst auf Testnet bereitgestellt; Die Wähler werden einen Zeitraum von 6 Tagen haben, um die aktualisierte Version zu prüfen und zu testen, während sie auf Goerli läuft. Während dieser Zeit wird ein Snapshot-Vorschlag geöffnet und die Community kann darüber abstimmen, ob sie die neue Version für die Mainnet-Installation genehmigen soll.

Wenn der Vorschlag während der 6-Tage-Wahlperiode eine Mehrheit mit „Ja“ erhält, wird der Vorschlag angenommen und Starknet Mainnet entsprechend aufgerüstet.

Starknet alpha v0.11.0 ist die erste Starknet-Version, die zur Abstimmung steht. Die Stimme von Starknet alpha v0.11.0 wird für sechs Tage ab dem Testnet-Einsatz freigegeben.

Relevante Links:

* [Snapshot-Speicher](https://snapshot.org/#/starknet.eth/proposal/0x00889bc468509610e516e8602f00b21ca8c32466dd4f0140eca38becb7f40bef)
* [Delegation Entdeckungsseite](https://delegate.starknet.io/)
* Starknet alpha v0.11.0 Diskussionsbeitrag im[Gemeinschaftsforum](https://community.starknet.io/t/proposal-starknet-alpha-v0-11-0/50334)

## Kairo 1.0 und Sierra

Sierra (**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**tion) ist eine Zwischenrepräsenz, die zur Montage in Kairo kompiliert wird (CASM). Pre Starknet alpha v0.11.0, ein Entwickler kompiliert Cairo 0 in CASM und sendet das Ergebnis an den Starknet-Sequenzer. Mit Cairo 1.0 kompilieren Entwickler ihren Code nach Sierra und senden diese Zwischendarstellung an den Sequenzer. Der Sequenzer wird es dann in CASM kompilieren. Sierra wird garantiert in „safe CASM“ kompiliert, also in einer Teilmenge von CASM, die nicht scheitern kann, was jede einzelne Ausführung nachweislich macht. Dies garantiert, dass der Sequenzer auch bei rückgängigen Transaktionen Gebühren verlangen kann, die vor DOS geschützt sind. Weitere Informationen finden Sie unter[in der Dokumentation](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/).

![](https://miro.medium.com/v2/resize:fit:1400/0*KsAwaJTIsOuCsJIe)

Starknet alpha 0.11.0 wird die[Cairo 1.0-alpha.6 Version](https://github.com/starkware-libs/cairo/releases/tag/v1.0.0-alpha.6) verwenden. Diese Version ist in der Nähe von[Funktionsparität](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)mit Kairo 0, wobei alle Starknet-Systemaufrufe bereits vorhanden sind.

Beachten Sie, dass der Starknet-Sequenzer eine reparierte Compiler-Version verwendet was bedeutet, dass Sprachverbesserungen nicht sofort in Starknet verfügbar sind und erst nach einem Update der Starknet-Version verfügbar sein werden. Konkret, während Verbesserungen, die Auswirkungen auf die Kairo 1. → Sierra Kompilierung kann sofort in Kraft treten, Änderungen am Sierra → CASM-Compiler (siehe[Dokumentation](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/)für weitere Details) müssen auf ein Starknet-Upgrade warten.

## Was ist noch neu?

### Neuer Transaktionstyp — v2 erklären

Wir fügen[einen neuen Transaktionstyp](https://docs.starknet.io/documentation/architecture_and_concepts/Blocks/transactions/#declare_v2_cairo_1_0)hinzu, um Kairo 1.0 Klassen zu deklarieren.

Diese neue \`declare\` Transaktionsversion ähnelt der existierenden \`declare\`, mit zwei wichtigen Unterscheidungen:

* Das Klassenobjekt, das jetzt gesendet wird, repräsentiert Sierra statt CASM, d.h. die Semantik der Klasse wird durch die Sierra Repräsentation definiert.
* Der Benutzer unterschreibt auch den kompilierten Klassen-Hash. Dies ist ein entscheidender Schritt, bis die Sierra-Compilation als Teil des Starknet-Betriebssystems nachgewiesen wird.

Weitere Details finden Sie unter[in der Dokumentation](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#what_to_expect).

Aus der Sicht des Entwicklers bleibt die Erfahrung unverändert. Nachdem Sie Ihren 1.0 Code von Kairo geschrieben haben, können Sie das CLI verwenden, um die Klasse zu deklarieren.

**Beachten Sie, dass \`declare v2\` Transaktionen zunächst nicht auf Starknet Mainnet akzeptiert werden. Nach einer Periode des Experimentierens auf Testnet wird der neue Transaktionstyp auf Mainnet aktiviert, und Kairo 1.0 Klassen werden verfügbar sein.**

### Poseidon ist da

[Poseidon](https://www.poseidon-hash.info/)ist eine Familie von Hash-Funktionen, die für sehr effiziente Algebraische Schaltkreise entwickelt wurden. Sie können daher sehr nützlich sein, wenn es um nachweisbare Systeme wie STARKs und SNARK geht. Ab Starknet alpha v0.11.0 können Entwickler Poseidon verwenden. Zusätzlich werden einige der Hash-Berechnungen, die Teil des Starknet-Protokolls sind, zu Poseidon übergehen (insbesondere der Klassen-Hash, kompilierte Klassen-Hash, und Teile der Zustandsverpflichtung verwenden Poseidon, siehe[die Dokumentation](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#poseidon_hash)für weitere Details). In Zukunft werden mehr interne Komponenten zur Benutzung der Poseidon-Hash-Funktion übergehen.

Die genaue Version und die in Starknet verwendeten Parameter finden Sie[hier](https://docs.starknet.io/documentation/architecture_and_concepts/Hashing/hash-functions/#poseidon_hash).

### Verschiedene Änderungen

Wie bei früheren Starknet-Versionen hat auch ein Upgrade Auswirkungen auf unsere APIs und andere Low-Level-Komponenten. Im Folgenden finden Sie eine Liste mit den vorgenommenen Änderungen:

* v0 aufrufen/deklarieren Transaktionen werden nicht mehr unterstützt
* L1<unk> L2-Nachrichten erfordern jetzt[Gebühren](https://docs.starknet.io/documentation/architecture_and_concepts/L1-L2_Communication/messaging-mechanism/#l1-l2_message_fees). Das heißt, Nachrichten mit Null-Gebühr werden nicht vom Starknet-Sequenzer bearbeitet
* Das on-chain Datenformat wird[geändert](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/#on_chain_data_post_v0_11_0)
* [API-Änderungen](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#api_changes)(nicht alle Änderungen sind hier aufgelistet, bitte lesen Sie die Dokumentation für eine vollständige Liste) :
* hat einen neuen \`get_compiled_class_by_class_hash\` Endpunkt hinzugefügt
* \`get_class_by_hash\` gibt beide Klassen von Kairo 0 / Kairo 1.0 zurück (abhängig von dem angeforderten Hash)
* \`get_state_update\` hat einen neuen Abschnitt für ersetzte Klassen und Deklarationen werden zwischen Kairo 0 und Kairo 1 Klassen aufgeteilt.
* \`schätzen_fee\` und \`simulate_tx\` können jetzt die Validierung überspringen
* A [new](https://github.com/starkware-libs/starknet-specs/releases/tag/v0.3.0-rc1) Starknet JSON-RPC version

## Was kommt als Nächstes?

Jetzt, da alle 1,0 Kairoer Infrastrukturen eingerichtet sind, können Sie erwarten:

* Weitere Sprachverbesserungen zu Kairo 1.0
* Leistungsverbesserungen:[wie versprochen](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de), wir bewegen uns weiter in Richtung einer signifikanten Erhöhung des TPS. Der nächste Schritt in der Roadmap ist der Übergang zum[Rust Sequenzer](https://github.com/starkware-libs/blockifier), , die unter dem Apache 2 in der offenen Version entwickelt wird. lizenzieren. Der neue Sequenzer nutzt den[Rost-KairoVM](https://github.com/lambdaclass/cairo-rs)und den[Papyrus](https://github.com/starkware-libs/papyrus)Vollknoten, der das Performance Trio bildet.
* Offchain[DA](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/)! In dieser Version haben wir die Rechenkomponente der Transaktionskosten behandelt. In den kommenden Versionen werden wir die On-Chain-Datenkosten behandeln, die heute die vorherrschenden Kosten für durchschnittliche Transaktionen sind.

![](/assets/starknet-alpha-v0.11.0-diagram.png)