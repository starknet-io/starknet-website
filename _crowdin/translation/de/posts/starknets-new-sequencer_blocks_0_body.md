### TL;DR

* Ein neuer StarkNet-Sequenzer wird entwickelt
* Es ist Open-Source unter der Apache 2.0-Lizenz
* Das erste Ziel ist es, den Durchsatz von StarkNet zu erhöhen

### Ein glänzender neuer Sequenzer

Wir freuen uns, einen neuen StarkNet Sequencer ankündigen zu können. Während sich der Technologiestapf von StarkNett in Richtung Open-Source bewegt, folgt[Kairo 1.](https://medium.com/starkware/open-sourcing-cairo-1-0-b3100a664bb0)und[Papyrus Full Node](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202), fahren wir nun mit dem neuen Sequenzer von StarkNet fort. Es wird Open-Source, verfügbar unter Apache 2.0 Lizenz und Sie können sich[das Repo](https://github.com/starkware-libs/blockifier)jetzt ansehen!

Der Aufbau eines neuen Sequenzers ist Teil der[StarkNet Roadmap](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de)die wir vor einigen Monaten vorgestellt haben. Die Implementierung des neuen Sequenzers beginnt mit dem Ersetzen des**Blockierers**, des Moduls innerhalb des Sequenzers, der die Blockausführung ausführt. Wie in der Roadmap erklärt, wird erwartet, dass sie Vorteile für die Leistung von StarkNet bringt.

Unser Ansatz zum Aufbau dieses Sequenzers ist der gleiche Ansatz, der uns in StarkNet Alpha geführt hat. Der Sequenzer**wird in Stufe**implementiert und wir teilen heute sein erstes Modul. Im Laufe der Zeit werden neue Komponenten des Sequenzers fertiggestellt, bis schließlich ein rostbasierter Sequenzer den aktuellen Python basierten Sequenzer vollständig ersetzt.

### Was macht der Sequenzer?

Bei StarkNet sind nach dem Absenden von Transaktionen die Sequenzer der erste Stopp der Transaktion zur STARK-Skalierung. Im StarkNet-Protokoll sind die Sequenzer für die Bestellung der Transaktionen und die Erzeugung von Blöcken verantwortlich. Nachdem der Block von einem Sequenzer erstellt und durch das Konsensprotokoll genehmigt wurde, übernehmen die Prover die Kontrolle und erstellen einen Nachweis für L1.

![](/assets/1_ndrekwqunjixo_wskdeycw-1.png)

### Open-Sourcing

StarkNet Alpha startete im November 2021 auf Mainnet. Von Anfang an war es verpflichtet, die Macht der STARK-Skalierung mit der Welt zu teilen.

Heute werden die ersten in einer Reihe von Modulen des neuen Open-Source-Sequenzers veröffentlicht. Es wird mehrere Monate dauern, bis alle Module und Submodule eingesetzt werden. Alles Open Sourcing ermöglicht es den Mitgliedern der Gemeinschaft, zur Entwicklung beizutragen und die Codebase zu prüfen.

Dies wird StarkNet näher an einen Punkt dezentralisierter permissionless Sequenzierung heranrücken. Wir entwerfen jetzt das dezentrale Protokoll von StarkNet und ermutigen die Gemeinschaft, an der[Forschung und Diskussion](https://community.starknet.io/t/starknet-decentralized-protocol-consensus/5386) teilzunehmen.

### Leistung

StarkNets ursprünglicher Sequenzer ist weitgehend eine Anpassung der StarkEx-Infrastruktur. Jetzt besteht Bedarf an Infrastruktur, die speziell für die Anforderungen eines dezentralisierten und leistungsstarken Netzwerks aufgebaut ist.

Der neue Sequenzer wurde in Rust gebaut und entwickelt unter Berücksichtigung der Performance. Der neue Sequenzer baut auch auf soliden Fundamenten auf: Papyrus, der neue[StarkNet Vollknoten,](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202)kümmert sich um die Staatsverwaltung, und Cairo-Rs, das neue Cairo-VM von LambdaClass, wird die Ausführung von Kairo beschleunigen. Wir erwarten, dass der neue Sequenzer den bestehenden Sequenzer in jeder Hinsicht verbessert. Der Durchsatz und die Latenz des Netzwerks wird durch die Integration dieses Sequenzers in StarkNet drastisch verbessert.

Wir erwarten auch, dass andere Infrastruktur- und Entwicklungstools den neuen Sequenzer nutzen können, um die Entwicklungserfahrung zu verbessern. Es wird erwartet, dass die volle Knotenleistung sowie alle Test-Frameworks verbessert werden.

### Summary

Wir freuen uns, heute den neuen Open-Source-Sequenzer bekanntgeben zu können. Sein erstes Modul ist bereits für die Community verfügbar und wird in den kommenden Monaten mit weiteren Modulen folgen. Wir freuen uns auch über einen weiteren Schritt in unserer Roadmap zur Verbesserung der Leistung von StarkNet. Unser Ziel ist es, das Netz effizienter und zugänglicher zu machen, und wir freuen uns über die Unterstützung all derer, die auf dieser Reise zu uns gekommen sind.