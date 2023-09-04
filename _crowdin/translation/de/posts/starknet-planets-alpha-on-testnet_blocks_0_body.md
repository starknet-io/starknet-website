### TL;DR

* [Starknet Planets Alpha](https://voyager.online/) – der erste Schritt auf unserem Weg zum Mainnet – ist jetzt live auf Testnet!
* [Starknet](https://starkware.co/product/starknet/) ist ein erlaubnisloses Turing-vollständiges ZK-Rollup¹.
* Entwickler können die Geschäftslogik ihrer Wahl in einem Smart Contract implementieren und ihn ohne Erlaubnis auf Starknet bereitstellen.
* Die Zustandsübergänge von Starknet werden außerhalb der Kette nachgewiesen und dann in der Kette überprüft.
* Ähnlich wie bei Ethereum können Benutzer direkt mit diesen Smart Contracts interagieren.

### Einführung

Im Januar</a> haben wir

die Roadmap für [Starknet](https://starkware.co/product/starknet/) bekannt gegeben. Der Heilige Gral der Skalierbarkeitslösungen würde (i) beliebige Smart Contracts unterstützen, mit (ii) Zusammensetzbarkeit, (iii) die über ein dezentrales Netzwerk betrieben werden. Heute geben wir die Bereitstellung von Schritt 1: Starknet Planets Alpha im Testnetz bekannt. Das Alpha-System unterstützt beliebige Smart Contracts. Composability wird später in diesem Jahr unterstützt, die Dezentralisierung folgt.</p> 

Für uns ist es sehr wichtig, völlig transparent zu sein und die Erwartungen richtig zu formulieren. Der Zweck dieses Beitrags besteht darin, klar aufzulisten, was bereits unterstützt wird und welche Funktionalitäten noch fehlen. Was wir heute veröffentlichen, ist „Work in Progress“ auf testnet. Wir glauben, dass diese frühe Veröffentlichung zur Bildung eines gesunden Ökosystems rund um Starknet und seine Tools beitragen wird. Wir sind bestrebt, Entwickler in den Aufbau des Netzwerks einzubeziehen und kontinuierliches Feedback von der Community zu erhalten.



### Was ist in der Starknet Planets Alpha enthalten?

Funktionalität: Mit der Alpha können Entwickler Starknet-Verträge für allgemeine Berechnungen schreiben und bereitstellen. Es gibt kein Whitelisting – jeder Entwickler kann jeden beliebigen Vertrag schreiben und bereitstellen. Benutzer können mit diesen Verträgen interagieren, indem sie Transaktionen an sie senden und ihren Status überprüfen. Alle Verträge bestehen in einem einzigen Staat². Aktualisierungen dieses Status werden außerhalb der Kette nachgewiesen und in der Kette verifiziert – in der Alpha erfolgt die Verifizierung im Testnetz.

Starknet OS: Die oben genannte Funktionalität wird von einem neuen „Betriebssystem“ unterstützt, das wir Starknet OS nennen. Es bietet nachweisbare Zustandsübergänge auf Starknet. Ethereum-Entwickler können es sich als das Äquivalent des EVM vorstellen: Es ist für den Aufruf von Smart-Contract-Funktionen, die Verwaltung der Vertragsspeicherung usw. verantwortlich. Wir werden einen separaten Beitrag veröffentlichen, der die Architektur des Starknet-Betriebssystems detailliert beschreibt.

Was ist nicht in der Alpha? Dem Alpha fehlen noch einige wichtige Funktionen, wie z. B. L1<>L2-Interaktion, On-Chain-Daten und Zusammensetzbarkeit. Mehr dazu weiter unten.



#### Machen Sie Ihre Füße nass

Beginnen Sie mit unserem [Tutorial und unserer Dokumentation](https://www.cairo-lang.org/docs/hello_starknet/).

Anschließend können Sie den [Beispiel-AMM-Smart-Vertrag](http://cairo-lang.org/docs/hello_starknet/amm.html) durchlesen, den wir geschrieben und auf Starknet bereitgestellt haben. Es handelt sich um ein einfaches AMM, mit dem Sie [hier interagieren können](https://starkware-amm-demo.netlify.app/swap). Sie sind jetzt bereit, intelligente Verträge auf Starknet zu schreiben und bereitzustellen. Der Block-Explorer für Starknet – [Voyager](https://voyager.online/) – ermöglicht es jedem, den Zustand von Starknet zu überprüfen.\
Wir sind davon überzeugt, dass Sie durch die ersten Schritte besser darauf vorbereitet sind, auf Starknet aufzubauen, da wir weiterhin zusätzliche Funktionen einführen. Wir sind bereits mit der Planung eines ersten Hackathons sowie Workshops für Entwickler beschäftigt.



### Nächste Schritte für Starknet

Die in der Alpha noch fehlenden Schlüsselfunktionen werden in den kommenden Wochen ausgerollt. Diese sind:

* L1<>L2-Interaktion, z. B. die Möglichkeit, Geld in L1 einzuzahlen und abzuheben.
* On-Chain-Daten: Veröffentlichung aller Speicheränderungen auf Ethereum.
* Zusammensetzbarkeit: Ermöglichen, dass Verträge miteinander kommunizieren.

Mit diesen Funktionen sind wir bereit, Starknet in das Ethereum Mainnet zu integrieren. Wir nennen diesen Schritt in Starknets Evolutionskonstellationen, und wenn wir ihn erreicht haben, können Sie skalierbare L2-dApps auf dem Ethereum Mainnet erstellen und ohne Erlaubnis bereitstellen.



#### Das Starknet-Ökosystem

Wir sind sehr begeistert von dem Ökosystem, das sich rund um Starknet bildet, deshalb möchten wir uns bei unseren bisherigen Mitarbeitern bedanken.

Wir arbeiten eng mit [Nethermind](https://twitter.com/nethermindeth) und dem Nubia-Team, [Alexey Akhunov](https://twitter.com/realLedgerwatch) (Erigon) & [Igor Mandrigin](https://twitter.com/mandrigin) (gateway.fm), [Iddo Bentov](https://www.cs.cornell.edu/~iddo/), [dOrg](https://twitter.com/dOrg_tech), [Prof. Tim Roughgarden](https://twitter.com/algo_class), [Prof . Jeremy Avigad](https://www.andrew.cmu.edu/user/avigad/) & Yoav Seginer, zu guter Letzt – das [Paradigm](https://twitter.com/paradigm) Team.\
Unsere frühen Partner – [dYdX](https://twitter.com/dydxprotocol), [Immutable](https://twitter.com/Immutable), [DeversiFi](https://twitter.com/deversifi)sowie [Sorare](https://twitter.com/SorareHQ), [Celer](https://twitter.com/CelerNetwork)und andere – haben uns vom ersten Tag an unschätzbaren Input geliefert und uns den Aufbau einer Produktion ermöglicht Hochwertiges Netzwerk für echte Benutzer.\
Wir sind immer wieder erstaunt über die Qualität der von der Community erstellten Inhalte, von Leuten wie [Bobbin Threadbare](https://twitter.com/bobbinth), [Daniel Kroni](https://github.com/danielkroeni/cairo-playground/blob/main/anon-bank/README.md), [Adrian Hamelink](https://twitter.com/adr1anh), [perama](https://twitter.com/eth_worm), [Francesco Ceccon](https://twitter.com/ceccon_me), [Ilian Malchev](http://twitter.com/imalchev), und das [Alexandria-Team](https://blockchainpartner.fr/).

Wir sind gespannt, was die Community an allen Fronten schaffen wird: Entwicklertools, Inhalte und natürlich Starknet-Anwendungen, die sie erstellen wird. Lassen Sie uns die Konversation in Ihrem bevorzugten Medium am Laufen halten: [Discord](https://discord.gg/uJ9HZTUk2Y), [Twitter](https://twitter.com/CairoLang), E-Mail und bald auch über die dezentralste aller Kommunikationsformen: f2f.

¹ Wir sind keine Fans des Begriffs ZK-Rollup, da es sich – mathematisch gesehen – nicht um Zero-Knowledge handelt, aber Sie alle wissen, was wir meinen

² Im Gegensatz zum separaten Status, der für aktuelle StarkEx-Bereitstellungen im Mainnet beibehalten wird

Update (November 2021): Starknet Alpha ist live im Ethereum Mainnet