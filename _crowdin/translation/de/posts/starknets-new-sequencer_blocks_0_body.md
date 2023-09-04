### TL;DR

* Ein neuer StarkNet-Sequenzer wird entwickelt
* Es ist Open Source unter der Apache 2.0-Lizenz
* Das erste Ziel besteht darin, den Durchsatz von StarkNet zu erhöhen

### Ein glänzender neuer Sequenzer

Wir freuen uns, Ihnen mitteilen zu können, dass ein neuer StarkNet-Sequenzer in Arbeit ist. Da sich der Tech-Stack von StarkNet nach[Cairo 1.0](https://medium.com/starkware/open-sourcing-cairo-1-0-b3100a664bb0)und[Papyrus Full Node](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202)in Richtung Open Source bewegt, fahren wir nun mit dem neuen Sequenzer von StarkNet fort. Es wird Open Source sein, verfügbar unter der Apache 2.0-Lizenz, und Sie können sich jetzt das Repo</a>

!</p> 

Der Aufbau eines neuen Sequenzers ist Teil der[StarkNet Roadmap](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de)die wir vor einigen Monaten vorgestellt haben. Die Implementierung des neuen Sequenzers beginnt mit dem Austausch des**Blockifiers**, dem Modul innerhalb des Sequenzers, das die Blockausführung durchführt. Wie in der Roadmap erläutert, wird erwartet, dass es Vorteile für die Leistung von StarkNet bringt.

Unser Ansatz zum Aufbau dieses Sequenzers ist derselbe Ansatz, der uns bei StarkNet Alpha geleitet hat. Der Sequenzer**wird in Stufe**implementiert und wir stellen heute sein erstes Modul vor. Im Laufe der Zeit werden neue Komponenten des Sequenzers fertiggestellt, bis schließlich ein Rust-basierter Sequenzer den aktuellen Python-basierten Sequenzer vollständig ersetzen wird.



### Was macht der Sequenzer?

Auf StarkNet sind die Sequenzer die erste Station auf dem Weg der Transaktion zur STARK-Skalierung, nachdem Benutzer Transaktionen gesendet haben. Im StarkNet-Protokoll sind die Sequenzer für die Reihenfolge der Transaktionen und die Produktion von Blöcken verantwortlich. Nachdem der Block von einem Sequenzer erstellt und vom Konsensprotokoll genehmigt wurde, übernehmen die Prüfer und generieren einen Beweis für L1.

![](/assets/1_ndrekwqunjixo_wskdeycw-1.png)



### Open-Sourcing

StarkNet Alpha wurde im November 2021 im Mainnet gestartet. Von Anfang an war es das Ziel, die Leistungsfähigkeit der STARK-Skalierung mit der Welt zu teilen.

Heute veröffentlichen wir das erste einer Reihe von Modulen des neuen Open-Source-Sequenzers. Es wird mehrere Monate dauern, bis alle Module und Untermodule bereitgestellt sind. Durch das Open-Sourcing von allem können Community-Mitglieder zur Entwicklung beitragen und die Codebasis prüfen.

Dies wird StarkNet einem Punkt der dezentralen, erlaubnislosen Sequenzierung näher bringen. Wir entwerfen derzeit das dezentrale Protokoll von StarkNet und ermutigen die Community, sich an der[Recherche und der Diskussion](https://community.starknet.io/t/starknet-decentralized-protocol-consensus/5386)zu beteiligen.



### Leistung

Der ursprüngliche Sequenzer von StarkNet ist größtenteils eine Adaption der StarkEx-Infrastruktur. Nun besteht Bedarf an einer Infrastruktur, die speziell auf die Anforderungen eines dezentralen Hochleistungsnetzwerks ausgelegt ist.

Der in Rust gebaute neue Sequenzer ist auf Leistung ausgelegt und entwickelt. Auch der neue Sequenzer baut auf einem soliden Fundament auf: Papyrus, der neue[StarkNet-Vollknoten,](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202)übernimmt die Zustandsverwaltung und cairo-rs, die neue Cairo-VM von LambdaClass, wird die Kairo-Ausführung beschleunigen. Wir erwarten, dass der neue Sequenzer den bestehenden Sequenzer in jeder Hinsicht verbessert. Es wird erwartet, dass sich der Durchsatz und die Latenz des Netzwerks durch die Integration dieses Sequenzers in StarkNet erheblich verbessern werden.

Wir erwarten auch, dass andere Infrastruktur- und Entwicklungstools den neuen Sequenzer nutzen können, um das Entwicklungserlebnis zu verbessern. Es wird erwartet, dass sich die Leistung des gesamten Knotens sowie aller Test-Frameworks verbessert.



### Zusammenfassung

Wir freuen uns, heute den neuen Open-Source-Sequenzer vorstellen zu können. Das erste Modul steht der Community bereits zur Überprüfung zur Verfügung und in den kommenden Monaten werden weitere Module folgen. Wir freuen uns auch, einen weiteren Schritt in unserer Roadmap zur Verbesserung der Leistung von StarkNet zu machen. Unser Ziel ist es, das Netzwerk effizienter und zugänglicher zu machen, und wir freuen uns über die Unterstützung aller, die uns auf diesem Weg begleitet haben.