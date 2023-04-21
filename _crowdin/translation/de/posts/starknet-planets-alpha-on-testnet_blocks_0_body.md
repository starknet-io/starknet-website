### **TL;DR**

* [StarkNet Planets Alpha](https://voyager.online/)– der erste Schritt auf unserem Weg nach Mainnet – ist jetzt live auf Testnet!
* [StarkNet](https://starkware.co/product/starknet/)ist ein unzulässiger Turing-vollständiger ZK-Rollup1.
* Entwickler können ihre Geschäftslogik der Wahl in einem intelligenten Vertrag implementieren und sie unerlaubt auf StarkNet einsetzen.
* Die staatlichen Übergänge von StarkNet werden außerhalb der Kette nachgewiesen und anschließend auf der Kette überprüft.
* Ähnlich wie Ethereum, können Nutzer direkt mit diesen intelligenten Verträgen interagieren.

### **Einführung**

Wir[haben](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)die Roadmap für[StarkNet](https://starkware.co/product/starknet/)im Januar 2021 angekündigt. Der Heilige Gral der Skalierbarkeitslösungen würde (i) willkürliche intelligente Verträge unterstützen, wobei (ii) Verbundbarkeit (iii) über ein dezentralisiertes Netzwerk betrieben wird. Heute kündigen wir den Einsatz auf Testnet von Schritt 1: StarkNet Planets Alpha an. Das Alpha-System unterstützt beliebige intelligente Verträge. Die Komponierbarkeit wird noch in diesem Jahr unterstützt und die Dezentralisierung wird folgen.

Es ist sehr wichtig, dass wir vollkommen transparent sind und die Erwartungen richtig setzen. Der Zweck dieses Beitrags ist eine klare Auflistung dessen, was bereits unterstützt wird und was Funktionalitäten noch fehlen. Was wir heute veröffentlichen, ist Work in Progress auf testnet. Wir glauben, dass diese frühe Version dazu beitragen wird, ein gesundes Ökosystem rund um StarkNet und sein Werkzeug aufzubauen. Wir sind sehr daran interessiert, Entwickler in den Aufbau des Netzwerks mit uns einzubinden und kontinuierliche Rückmeldungen von der Community zu erhalten.

### **Was ist in den StarkNet Planets Alpha?**

**Funktionalität:**Die Alpha erlaubt Entwicklern StarkNet-Verträge für allgemeine Berechnungen zu schreiben und bereitzustellen. Es gibt keine Whitelisting — jeder Entwickler kann schreiben und verteilen, was er will. Die Benutzer können mit diesen Verträgen interagieren, indem sie ihnen Transaktionen schicken und ihren Status überprüfen. Alle Verträge existieren in einem einzigen Staat. Aktualisierungen auf diesen Status werden außerhalb der Kette nachgewiesen und on-chain überprüft — in der Alpha wird die Verifizierung im Testnetz durchgeführt.

**StarkNet OS:**Die obige Funktionalität wird von einem neuen „Betriebssystem“ unterstützt, das wir StarkNet OS nennen. Es bietet*nachweisbare*Statusübergänge auf StarkNet. Ethereum-Entwickler können es als das Äquivalent zum EVM bezeichnen: Es ist für das Aufrufen intelligenter Vertragsfunktionen, die Abwicklung der Lagerung von Verträgen usw. verantwortlich. Wir werden einen separaten Beitrag veröffentlichen, der die Architektur des StarkNet Betriebssystems beschreibt.

**Was ist nicht in der Alpha?**In der Alpha fehlen noch einige Schlüsselfunktionen, wie zum Beispiel L1<>L2 Interaktion, On-Kettendaten und Kompositabilität. Mehr dazu unten.

#### **Hole deinen Fuß Nass**

Beginnen Sie mit unserer[Anleitung und Dokumentation](https://www.cairo-lang.org/docs/hello_starknet/).

Dann können Sie den[-Beispiel-AMM-Smart-Vertrag durchlesen](http://cairo-lang.org/docs/hello_starknet/amm.html), den wir auf StarkNet geschrieben und eingesetzt haben, lesen. It is a simple AMM, and you can interact with it [here](https://starkware-amm-demo.netlify.app/swap). Sie sind nun bereit, intelligente Verträge auf StarkNet zu schreiben und umzusetzen. Der Block-Explorer für StarkNet —[Voyager](https://voyager.online/)— erlaubt es jedem, den Status von StarkNet zu untersuchen.\
Wenn Sie Ihre Füße nass bekommen, glauben wir, dass Sie besser vorbereitet sind, auf StarkNet zu bauen, da wir auch weiterhin zusätzliche Funktionen ausführen. Wir planen bereits einen ersten Hackathon sowie Workshops für Entwickler.

### **Nächste Schritte für StarkNet**

Die Schlüsselfunktionen, die in der Alpha noch fehlen, werden in den nächsten Wochen implementiert. Diese sind:

* L1<>L2 Interaktion, z.B. die Möglichkeit, Ein- und Auszahlungen in L1 vorzunehmen.
* On-Ketten-Daten: Veröffentlichung aller Änderungen der Speicherung auf Ethereum.
* Komponierbarkeit: Es ist möglich, Verträge miteinander zu kommunizieren.

Mit diesen Features werden wir bereit sein, StarkNet nach Ethereum Mainnet zu bringen. Wir nennen diesen Schritt in StarkNet's Entwicklung Konstellationen und wenn wir ihn erreichen, können Sie auf Ethereum Mainnet skalierbare L2 dApps erstellen und unberechtigt bereitstellen.

#### **Das Ökosystem StarkNet**

Wir freuen uns sehr über das Ökosystem, das sich rund um StarkNet bildet, so dass wir unseren Mitarbeitern bis jetzt unseren Dank aussprechen werden.

Wir arbeiten eng mit[zusammen. Bitte](https://twitter.com/nethermindeth)und dem Nubia Team[Alexey Akhunov](https://twitter.com/realLedgerwatch)(Erigon) &[Igor Mandrigin](https://twitter.com/mandrigin)(Gateway. m),[Iddo Bentov](https://www.cs.cornell.edu/~iddo/),[dOrg](https://twitter.com/dOrg_tech),[Prof. Tim Roughgarden](https://twitter.com/algo_class),[Prof. Jeremy Avigad](https://www.andrew.cmu.edu/user/avigad/)& Yoav Seginer, last but not least — das[Paradigm](https://twitter.com/paradigm)Team.\
Unsere frühen Partner —[dYdX](https://twitter.com/dydxprotocol),[Unveränderlich](https://twitter.com/Immutable),[DeversiFi](https://twitter.com/deversifi), sowie[Sorare](https://twitter.com/SorareHQ),[Celer](https://twitter.com/CelerNetwork)und andere — haben uns einen unschätzbaren Beitrag vom ersten Tag geliefert, und erlauben Sie uns, ein produktionsorientiertes Netzwerk für echte Benutzer aufzubauen.\
Wir sind weiterhin erstaunt über die Qualität der von der Community erstellten Inhalte. von Personen wie[Bobbin Threadbare](https://twitter.com/bobbinth),[Daniel Kroni](https://github.com/danielkroeni/cairo-playground/blob/main/anon-bank/README.md),[Adrian Hamelink](https://twitter.com/adr1anh),[perama](https://twitter.com/eth_worm),[Francesco Ceccon](https://twitter.com/ceccon_me),[Ilian Malchev](http://twitter.com/imalchev)und das[Alexandria Team](https://blockchainpartner.fr/).

Wir sind gespannt, was die Community an allen Fronten erstellen wird: Entwicklerwerkzeuge, Inhalte und natürlich StarkNet-Anwendungen, die sie erstellen werden. Lass uns das Gespräch in deinen Lieblingsmedien fortsetzen:[Discord](https://discord.gg/uJ9HZTUk2Y),[Twitter](https://twitter.com/CairoLang),[E-Mail](mailto:info@starkware.co)und bald mit den dezentralsten Kommunikationsformularen: f2f.

1 Wir sind keine Fans des Begriffs ZK-Rollup, wie – mathematisch gesprochen – es ist nicht Null-Wissen, aber Sie alle wissen, was wir meinen.

2 Im Gegensatz zum separaten Status für aktuelle StarkEx-Installationen auf Mainnet

**Update (Nov. 2021):**StarkNet Alpha ist live auf Ethereum Mainnet