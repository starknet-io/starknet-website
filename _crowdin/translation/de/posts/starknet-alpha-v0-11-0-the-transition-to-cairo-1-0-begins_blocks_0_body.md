## TL;DR

* Starknet Alpha v0.11.0 ist verfügbar und live auf Testnet
* Sie können jetzt Cairo 1.0-Verträge auf Starknet Testnet bereitstellen und mit ihnen interagieren!
* Berechnungen auf Starknet sind 5x günstiger!
* Zum ersten Mal wird das Mainnet-Upgrade auf Starknet Alpha v0.11.0 einer Governance-Abstimmung unterzogen
* Dies markiert den Beginn der Übergangsperiode vor[Regenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)
* Die Bereitstellung von Cairo 1.0-Verträgen im Mainnet wird erst nach einigen Wochen der Ausführung im Testnet aktiviert, sobald wir sichergestellt haben, dass das neue System reibungslos läuft.

## Einführung

Wir freuen uns, Ihnen mitteilen zu können, dass die mit Spannung erwartete Starknet Alpha v0.11.0 live auf Testnet ist! Warum ist das ein großer Schritt für Starknet? In Starknet v0.11.0 können Sie[Cairo 1.0](https://medium.com/starkware/cairo-1-0-is-here-7e1ac8377038)Smart Contracts deklarieren, bereitstellen und ausführen. Wir führen außerdem einen neuen Systemaufruf ein, der einen reibungslosen Übergang bestehender Verträge auf eine Cairo 1.0-Implementierung ermöglicht.

Cairo 1.0 verbessert Starknet in zwei verschiedenen Aspekten. Erstens verbessert es die Entwicklungserfahrung, indem es eine umfangreichere Programmiersprache bietet, die (unter anderem) Typen/Generika/Merkmale/Fehlerbehandlung in Cairo einführt. Zweitens spielt Cairo 1.0 eine Schlüsselrolle auf dem Weg der Dezentralisierung von Starknet: Cairo 1.0-Verträge, die in Starknet Alpha v0.11.0 gesendet werden, werden in Sierra kompiliert. Sierra garantiert, dass jede Vertragsausführung nachweisbar ist, was in einem dezentralen Starknet eine entscheidende Eigenschaft ist.

Eine weitere wichtige Verbesserung, die diese Version mit sich bringt, ist eine 5-fache Reduzierung der Berechnungskosten. Dadurch wird Starknet noch benutzerfreundlicher für rechenintensive Anwendungen. Weitere Details weiter unten.

## Bereiten Sie sich auf die Regenese vor

Starknet Alpha v0.11.0 markiert den Beginn der Übergangsphase, die eine Vorbereitung auf die Regenesis von Starknet ermöglichen wird. Der Regenesis-Plan von Starknet wurde vor einigen</a>veröffentlicht und konzentriert sich auf den Übergang von einem auf Cairo 0 basierenden System zu einem auf Cairo

basierenden System.</p> 

Während des Übergangszeitraums haben bestehende Cairo 0-Verträge (sofern sie aktualisierbar sind) die Möglichkeit, ihre Adresse und Speicherung beizubehalten und ihre Implementierung nahtlos auf Cairo 1.0 umzustellen (siehe nächster Abschnitt).

Als Starknet-Benutzer bedeutet dies, dass Sie Ihr Wallet erst dann aktualisieren müssen, wenn die neue Cairo 1.0-Implementierung Ihres Kontos veröffentlicht wird (Sie können dies jederzeit bis zur Regenesis selbst tun). Es ist mit keiner Ausfallzeit zu rechnen, alle Dapps im System laufen wie gewohnt weiter.

Nach der Regenesis wird Starknet die Unterstützung der verbleibenden Cairo 0-Verträge im gesamten System einstellen. Dies wird im Voraus gut kommuniziert und den Entwicklern wird ausreichend Zeit gegeben, ihre Verträge zu migrieren. Die Übergangsphase wird voraussichtlich einige Monate dauern und Dapp-Entwickler können bereits mit der Migration ihrer Implementierung auf Cairo 1.0 beginnen. Am Ende der Übergangszeit findet die Regenese statt.



## Reibungslose Migration nach Kairo 1.0

Mit dem Übergang zu Cairo 1.0 sind bestehende Cairo 0-Verträge veraltet und werden bei Regenesis nicht mehr unterstützt. Damit aktualisierbare Cairo 0-Verträge auch nach der Regenesis weiterhin funktionieren und der Zustand bis zu diesem Zeitpunkt erhalten bleibt, haben wir einen neuen Systemaufruf hinzugefügt – ['replace_class'](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#replace_class_syscall). Aktualisierbare Verträge haben kein Problem mit der Aktualisierung auf eine Cairo 1.0-Implementierung, aber der zugrunde liegende Proxy (der Vertrag, der den tatsächlichen Status enthält) bleibt weiterhin bei der Cairo 0-Implementierung hängen. Der Systemaufruf „replace_class“ löst dieses Problem, indem er es dem Proxy-Vertrag ermöglicht, seine zugrunde liegende Klasse zu ersetzen, d. h. die gleiche Adresse und den gleichen Speicher beizubehalten, aber die Implementierung zu ersetzen.



## Die Berechnung ist jetzt 5x günstiger!

Heutzutage bestehen die Transaktionsgebühren von Starknet aus zwei Hauptkomponenten: Berechnung und On-Chain-Daten. Das rechnerische Element der Starknet-Transaktionsgebühr wird durch die Grenzkosten für die Überprüfung des Nachweises auf L1 bestimmt (weitere Einzelheiten finden Sie in den[Dokumenten](https://docs.starknet.io/documentation/architecture_and_concepts/Fees/fee-mechanism/)).

Ursprünglich führte unser 200-m-Kairo-Schritt in einem Beweis, der 5 m Gas zur Verifizierung erforderte, zu einer naiven Schätzung von 0,05 Gas pro Kairo-Schritt. Seitdem sind wir zu[rekursiven Beweisen](https://medium.com/starkware/recursive-starks-78f8dd401025)übergegangen, was eine erhebliche Reduzierung der L1-Verifizierungskosten ermöglicht (nur die Wurzel eines Rekursionsbaums erreicht L1). Jetzt ist es an der Zeit, unsere ursprünglichen Schätzungen entsprechend zu aktualisieren – der Preis für jede Kairo-Stufe auf L2 wird um das Fünffache reduziert und kostet nun 0,01 Benzin.

Diese Kostenreduzierung ist für rechenintensive Anwendungen, z. B. Kontoverträge mit nicht-nativen Signaturen, von Bedeutung. Bei einfachen Transaktionen kommt es zu einer geringfügigen Kostenreduzierung (~ 5 %). In zukünftigen Versionen werden wir uns um die zweite Komponente kümmern: die Datenkosten in der Kette. Sobald Alternativen zu On-Chain-Daten in Starknet (auch bekannt als Volition) eingeführt werden, wird die Kostensenkung überall spürbar sein.



## Erste Abstimmung zur Starknet-Governance

Die erste Phase der Starknet Governance ist gestartet (weitere Details[hier](https://medium.com/starknet-foundation/starknets-governance-first-phase-4614c7566f40)). Community-Mitglieder können sich nun über einen zusätzlichen Kanal an der Gestaltung von Starknet beteiligen, nämlich über Protokolländerungen abzustimmen.

Die ersten Phasen der Starknet-Governance werden sich auf die Aktualisierung des Starknet-Protokolls konzentrieren. Jedes Starknet-Versions-Upgrade wird zunächst auf Testnet bereitgestellt. Die Wähler haben sechs Tage lang Zeit, die aktualisierte Version zu prüfen und zu testen, während sie auf Goerli läuft. Während dieser Zeit wird ein Snapshot-Vorschlag geöffnet und die Community kann darüber abstimmen, ob die neue Version für die Mainnet-Bereitstellung genehmigt wird.

Wenn der Vorschlag während des sechstägigen Abstimmungszeitraums die Mehrheit der „JA“-Stimmen erhält, wird der Vorschlag angenommen und das Starknet-Mainnet wird entsprechend aktualisiert.

Starknet alpha v0.11.0 ist die erste Starknet-Version, die zur Abstimmung steht. Die Abstimmung über Starknet Alpha v0.11.0 wird ab der Testnet-Bereitstellung sechs Tage lang geöffnet sein.

Relevante Links:

* [Snapshot-Bereich](https://snapshot.org/#/starknet.eth/proposal/0x00889bc468509610e516e8602f00b21ca8c32466dd4f0140eca38becb7f40bef)
* [Seite zur Delegierungserkennung](https://delegate.starknet.io/)
* Diskussionsthread zu Starknet Alpha v0.11.0 im[Community-Forum](https://community.starknet.io/t/proposal-starknet-alpha-v0-11-0/50334)



## Kairo 1.0 und Sierra

Sierra (**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**tion) ist eine Zwischendarstellung, die zur Cairo Assembly (CASM) kompiliert wird. Vor Starknet Alpha v0.11.0 kompilierte ein Entwickler Cairo 0 in CASM und sendete das Ergebnis an den Starknet-Sequenzer. Mit Cairo 1.0 kompilieren Entwickler ihren Code in Sierra und senden diese Zwischendarstellung an den Sequenzer. Der Sequenzer kompiliert es dann zu CASM. Sierra kompiliert garantiert nach „sicherem CASM“, also einer Teilmenge von CASM, die nicht fehlschlagen kann, sodass jede einzelne Ausführung nachweisbar ist. Dadurch wird gewährleistet, dass der Sequenzer auch für rückgängig gemachte Transaktionen Gebühren erheben kann, was den Schutz vor DOS gewährleistet. Weitere Informationen finden Sie[den Dokumenten](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/).

![](https://miro.medium.com/v2/resize:fit:1400/0*KsAwaJTIsOuCsJIe)

Starknet Alpha 0.11.0 wird die[Cairo 1.0-alpha.6 Version](https://github.com/starkware-libs/cairo/releases/tag/v1.0.0-alpha.6)verwenden. Diese Version liegt nahe bei[Feature-Parität](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)mit Cairo 0, wobei alle Starknet-Systemaufrufe bereits vorhanden sind.

Beachten Sie, dass der Starknet-Sequenzer eine feste Compilerversion verwendet, was bedeutet, dass Sprachverbesserungen in Starknet möglicherweise nicht sofort verfügbar sind und erst nach einem Starknet-Versionsupdate verfügbar sind. Während Verbesserungen, die die Kompilierung von Cairo 1.0 → Sierra betreffen, möglicherweise sofort wirksam werden, müssen Änderungen am Sierra → CASM-Compiler (weitere Einzelheiten finden Sie in den[Dokumenten](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/)) auf ein Starknet-Upgrade warten.



## Was gibt es sonst Neues?



### Neuer Transaktionstyp – Deklarieren Sie v2

Wir fügen[einen neuen Transaktionstyp](https://docs.starknet.io/documentation/architecture_and_concepts/Blocks/transactions/#declare_v2_cairo_1_0)für die Deklaration von Cairo 1.0-Klassen hinzu.

Diese neue „declare“-Transaktionsversion ähnelt der bestehenden „declare“, mit zwei wichtigen Unterschieden:

* Das gesendete Klassenobjekt repräsentiert jetzt Sierra und nicht CASM, dh die Semantik der Klasse wird durch die Sierra-Darstellung definiert.
* Der Benutzer signiert auch den kompilierten Klassen-Hash. Dies ist ein entscheidender Schritt, bis sich die Sierra→CASM-Kompilierung als Teil des Starknet-Betriebssystems bewährt.

Weitere Einzelheiten finden Sie[den Dokumenten](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#what_to_expect).

Aus Sicht des Entwicklers bleibt das Erlebnis dasselbe. Nachdem Sie Ihren Cairo 1.0-Code geschrieben haben, können Sie die Klasse mit der CLI deklarieren.

**Beachten Sie, dass „declare v2“-Transaktionen zunächst nicht im Starknet-Mainnet akzeptiert werden. Nach einer Experimentierphase im Testnet wird der neue Transaktionstyp im Mainnet aktiviert und die Cairo 1.0-Klassen werden verfügbar sein.**



### Poseidon ist hier

[Poseidon](https://www.poseidon-hash.info/)ist eine Familie von Hash-Funktionen, die für sehr effiziente algebraische Schaltkreise entwickelt wurden. Daher können sie in ZK-Prüfsystemen wie STARKs und SNARKs sehr nützlich sein. Ab Starknet Alpha v0.11.0 können Entwickler Poseidon verwenden. Darüber hinaus werden einige der Hash-Berechnungen, die Teil des Starknet-Protokolls sind, auf Poseidon umgestellt (insbesondere der Klassen-Hash, der kompilierte Klassen-Hash und Teile der staatlichen Verpflichtung werden Poseidon verwenden, siehe[die Dokumente](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#poseidon_hash)für weitere Details). In Zukunft werden weitere interne Komponenten auf die Verwendung der Poseidon-Hash-Funktion umsteigen.

Die genaue Version und</a></p> 



### Verschiedene Änderungen

Wie bei früheren Starknet-Versionen hat ein Upgrade auch Auswirkungen auf unsere APIs und andere Low-Level-Komponenten. Im Folgenden listen wir diese auf und gehen auf die spezifischen Änderungen ein, die vorgenommen wurden:

* v0-Aufruf-/Deklarationstransaktionen werden nicht mehr unterstützt
* L1→L2-Nachrichten erfordern jetzt[Gebühren](https://docs.starknet.io/documentation/architecture_and_concepts/L1-L2_Communication/messaging-mechanism/#l1-l2_message_fees). Das heißt, dass gebührenfreie Nachrichten vom Starknet-Sequenzer nicht verarbeitet werden
* Das On-Chain-Datenformat ist[geändert](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/#on_chain_data_post_v0_11_0)
* [API-Änderungen](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#api_changes)(nicht alle Änderungen sind hier aufgeführt, eine vollständige Liste finden Sie in den Dokumenten):
* einen neuen \`get_compiled_class_by_class_hash\`-Endpunkt hinzugefügt
* \`get_class_by_hash\` gibt beide Klassen Cairo 0 / Cairo 1.0 zurück (abhängig vom angeforderten Hash)
* „get_state_update“ hat einen neuen Abschnitt für ersetzte Klassen und Deklarationen werden zwischen den Klassen Cairo 0 und Cairo 1 aufgeteilt.
* \`estimate_fee\` und \`simulate_tx\` können jetzt die Validierung überspringen
* Eine[neue](https://github.com/starkware-libs/starknet-specs/releases/tag/v0.3.0-rc1)Starknet JSON-RPC-Version



## Was kommt als nächstes?

Nachdem nun die gesamte Infrastruktur für Kairo 1.0 eingerichtet wurde, können Sie Folgendes erwarten:

* Weitere Sprachverbesserungen gegenüber Cairo 1.0
* Leistungsverbesserungen:[wie versprochen](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de), wir arbeiten weiterhin daran, den TPS deutlich zu steigern. Der nächste Schritt in der Roadmap ist der Übergang zum[Rust Sequencer](https://github.com/starkware-libs/blockifier), der offen unter der Apache 2.0-Lizenz entwickelt wird. Der neue Sequenzer wird den[Rust CairoVM](https://github.com/lambdaclass/cairo-rs)und den[Papyrus](https://github.com/starkware-libs/papyrus)Full Node nutzen und so das Performance Trio bilden.
* Offchain[DA](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/)! In dieser Version haben wir die rechnerische Komponente der Transaktionskosten verwaltet. In kommenden Versionen werden wir die On-Chain-Datenkosten berücksichtigen, die heute die dominierenden Kosten für durchschnittliche Transaktionen darstellen.

![](/assets/starknet-alpha-v0.11.0-diagram.png)