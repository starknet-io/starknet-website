### TL;DR

L2-native dApps können jetzt frei von traditionellen L1-Gas-Einschränkungen gedeihen.

### Einführung

Die dApp-Entwickler standen aufgrund von Ethereums (L1) Gasblockgrenze immer vor erheblichen Beschränkungen. Es begrenzt nicht nur*wie*diese dApps funktionieren, sondern auch*was*diese dApps tun können.

Layer 2 (L2) bietet dApp Entwicklern ein rechnerisches Grünfeld, frei von dieser gläsernen Decke. Wir glauben, dass die überwiegende Mehrheit der dApps in ein paar Jahren L2-gebürtig sein wird: Sie werden von Grund auf auf L2 gebaut worden sein, um von diesem Rechengrad zu profitieren.

### L1 Gas-Limits bilden L1-native dApps

*Lassen Sie uns zwei Beispiele für populäre dApps anführen, deren Design tief von L1-Gasbeschränkungen geprägt ist: AMMs und DEX-Aggregatoren.*

Ein Automated Market Maker (AMM) ist im Wesentlichen eine Niedriggas-Annäherung an eine Orderbuchbörse. Anstatt den Benutzern die Möglichkeit zu geben, Limits zu setzen und zu entfernen, den Verlust oder eine Vielzahl anderer Bestellarten zu stoppen, L1 AMMs erlauben nur einfache Swaps mit einem zentralen zugrunde liegenden Liquiditätspool — um die hohen Berechnungskosten von L1 abzudecken.

Die DEX-Aggregatoren benötigen idealerweise Zugang zu allen möglichen Liquiditätspools, selbst zum kleinsten Liquiditätspool, um die besten Preise für die Nutzer zu nutzen. Aufgrund der Kosten für die Abfrage vieler verschiedener Pools ist es jedoch einfach nicht wert, über L1 zu handeln. Es ist gerechtfertigt, auf Pools zuzugreifen und die damit verbundenen Transaktionsgebühren nur zu bezahlen, wenn Liquiditätspools ausreichend hohe Liquidität aufweisen. In ähnlicher Weise Liquidationen bei Kredit-/Kreditaufnahme und anderen sicherheitsorientierten dApps könnten viel genauer sein, wenn der Unterschied zwischen Liquidationsrabatt und Transaktionsgebühr viel geringer wäre.

Die eingeschränkte Funktionalität und das Design vieler L1 dApps ergibt sich direkt aus Entwicklern, die ihren Code optimieren und Ethereums Gasbeschränkungen einhalten. Warum können Sie fragen, sagen wir Ethereum? Kann Solidy-Code nicht auf vielen L1s und sogar auf einigen L2s laufen? In der Tat, aber von ihnen ist Ethereum die teuerste (und daher sichere) Umwelt. Solidity dApps sind für den „teuersten Link“ konzipiert, also Ethereum. Daher profitieren sie nicht vom Rechenvorteil, den weniger teure Laufzeitumgebungen bieten. Um die Funktionalität freizuschalten, indem eine dApp für die teuerste Laufzeitumgebung entworfen wird, muss der dApp-Code angepasst werden.

### Der Aufstieg von L2-native dApps

Validitäts-Rollups (auch ZK-Rollups) ermöglichen eine extrem günstige Berechnung. Anders als jede andere Skalierungslösung – die L2-Berechnung kann exponentiell wachsen, mit nur geringen Auswirkungen auf die On-Ketten-Verifikationskosten. Zusätzlich verarbeitet ein Validity-Rollup Eingaben in die Berechnungen — „Zeugendaten“ — ohne zusätzliche L1-Ressourcen zu verbrauchen, was Berechnungen mit vielen Eingaben erlaubt.

Das native Programmieren von dApps auf L2 in**[Kairo](https://www.cairo-lang.org/)**(eine Turing-vollständige Sprache um dApps mittels STARK-Beweise zu skalieren) schaltet eine riesige Bandbreite von Möglichkeiten für Entwickler frei. Es ermöglicht ihnen, erhebliche Datenmengen – sowohl rechnerische als auch Zeugendaten – zu verwenden, die sie vorher nicht verwenden konnten.

Erforschen wir solche L2-native dApps und ihre neuen, bereichernden Fähigkeiten.

#### DeFi

Vor dem Einstieg bei StarkEx operierte dYdX als L1 dApp auf Ethereum. Sie bot ihren Anwendern einen Hebel von x10 auf synthetische Assets und unterstützte Positionen mit nur einem synthetischen Vermögen. Der Wiederaufbau von dYdX in Kairo als L2-native dApp bietet eine dramatisch skalierbarere, kostengünstigere und effizientere DeFi-Plattform:

* Oracle-Preisaktualisierung: Solche Aktualisierungen beinhalten in der Regel Dutzende Preise und Signaturen aus verschiedenen Quellen zur Berechnung eines Mediums. Ein Validitäts-Rollup bietet exponentielle Skalierung der Preisorakellogik (Überprüfung der Unterschrift und Berechnung des Medianpreises) — ohne die Daten an L1 weiterzugeben. Vergleichen Sie dies mit der L1-Implementierung von dYdX, bei der jedes Preisorakel-Update etwa 300K Gas kostete und war Daher in seiner Häufigkeit und der Größe der Reihe von Preisreportern begrenzt.
* Hebel: Mit einem präzisen Preisfeed kann dYdX das Risiko einer Position in Echtzeit abschätzen und den Nutzern einen höheren Hebelfaktor bieten. Dank der verbesserten Aktualisierung der Orakelpreise hat dYdX den Hebel von x10 auf L1 auf x25 auf L2 erhöht.
* Cross-margin: Mit dYdX auf L2 können Market Maker auf viele Assets mit denselben Sicherheiten lange oder kurze Aufträge abgeben. Die durchschnittliche Abrechnung auf dYdX L2 umfasst Positionen mit mehr als 10 verschiedenen synthetischen Vermögenswerten! Im Vergleich dazu hätte die Fähigkeit zur Quermarge auf L1 die Gaskosten auf den Ketten mehr als verdoppelt.

#### Spiele und generative Kunst

Das aktuelle Zuschnitt von L1-nativen Spielen speichert üblicherweise Spielvermögen auf L1, während die gesamte Spiellogik in einer vertrauenswürdigen Offchain-Anwendung implementiert wird. Dieses Muster ist ein direktes Ergebnis der Gasbeschränkungen von L1. Dank der günstigen Berechnung auf L2 Entwickler von L2-native gaming dApps können nun die Spiellogik in einem intelligenten Vertrag implementieren und die Spielvermögen vertrauenslos manipulieren. anstatt sie einfach zu speichern. Die Spiellogik in den Bereich der vertrauenslosen Berechnung zu bringen, ist ein bedeutender Schritt hin zu einer viel reicheren Welt von Blockchain-basierten Spielen. L2-native Spiele werden bereits auf StarkNet, StarkWare's permissionless-Netzwerk entwickelt (z. B.[Dope Wars](https://github.com/dopedao/RYO)und[Einfluss](https://medium.com/influenceth/influence-to-launch-on-starknet-afd3c26ea25a)).

Aber wie komplex kann ein blockchain-basiertes Spiel wirklich sein? Zum Beispiel scheint es unmöglich zu sein, Grafiken direkt on-chain zu bearbeiten —[oder ist es](https://twitter.com/guiltygyoza/status/1449637155001798657)? Die Lösung von Differentialgleichungen und die Simulation von planaren Bewegungen in einem intelligenten Vertrag stellt einen bedeutenden Schritt hin zu einem in Zukunft möglichen Blockchain Physik-Motor dar. Die Auswirkungen sind enorm. Stellen Sie sich ein konkurrenzfähiges Mehrspieler-Spiel wie Counter-Strike vor. Wenn man die Spiellogik on-chain simulieren könnte, Viele gefürchtete Hacks würden der Vergangenheit angehören – Spieler konnten ein nachweislich faires Spiel genießen.

Generative Kunst verwendet Berechnung, Zufall und andere Daten, um blockchain-basierte Kunst zu erstellen. Je komplexer Logik und Berechnungen ein Künstler vertrauenslos nutzen kann, desto mehr Möglichkeiten gibt es, einzigartige einzigartige Kunstwerke zu erzeugen. [WhaleStreet DAO](https://blog.whalestreet.xyz/whalestreet-dao-to-launch-gen-art-ecosystem-on-ethereum-with-starknet/)startet eines der ersten Gen Art Projekte auf StarkNet, und nutzt die unbegrenzten Rechenressourcen von StarkNet.

### Was ist als Nächstes?

Gültigkeits-Rollups — und Kairobetriebene StarkEx und StarkNet, Insbesondere — bieten Sie ein Umfeld, in dem Sie dApps entwickeln und betreiben können, die viele Berechnungen oder Zeugendaten verbrauchen. Mit all den Vorteilen verteilter Technologieentwicklungen prognostizieren wir eine ungeheuer spannende Zukunft für L2-native dApps.

What can *you* create with general computation supported by composability, trustlessness, and decentralization?