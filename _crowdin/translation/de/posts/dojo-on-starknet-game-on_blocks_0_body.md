### Die erste nachweisbare Game Engine für Starknet

#   

## TL;DR

* Dojo ist eine nachweisbare On-Chain-Spiele-Engine, die Spiele mit Eigenverantwortung, Interoperabilität und Erweiterbarkeit ermöglicht.
* Es läuft auf Starknet und stellt Spieleentwicklern ein Software-Framework zur Verfügung, das ihnen dabei hilft, ein qualitativ hochwertiges, nahtloses und schnelles Spiel zu erstellen.
* Dojo verbessert die Spieleentwicklung, indem es schnelle und kostengünstige Transaktionen ermöglicht, die für Kryptospiele in Produktionsqualität erforderlich sind.
* Komponenten wie ECS, Sozu, Torii und Katana unterstützen die Spieleentwicklung und -bereitstellung.
* Zu den zukünftigen Dojo-Verbesserungen gehören Layer-3-Spielforschung, optimistische Updates, clientseitige Tests und kettenübergreifende Übertragungen.
* Dojo-basierte Spiele auf Starknet, wie Dope Wars, Influence, Realms und CafeCosmos, nehmen zu, was einen steigenden Trend im On-Chain-Gaming markiert.

#  

*Blockchain-Spiele haben ihr Versprechen nicht gehalten. Aufgrund der Größenbeschränkungen und der hohen Kosten beschränken sich die meisten On-Chain-Spiele auf die Tokenisierung von In-Game-Assets. Aber mit den günstigen und schnellen Transaktionen, die Starknet und die neue Dojo-Krypto-Gaming-Engine ermöglichen, wird das Versprechen wahr, nicht nur Ihre In-Game-Assets zu besitzen, sondern auch die Spiellogik in der Kette zu beweisen.*  

Der globale Gaming-Markt [wird im Jahr 2023 auf 245 Milliarden US-Dollar](https://www.mordorintelligence.com/industry-reports/global-gaming-market) und ist eines der größten Segmente der weltweiten Unterhaltungsindustrie. Und *-Blockchain-* Gaming bietet mit seinem Versprechen, grenzenlose Interoperabilität zu ermöglichen, einen Zugang zu einer Welt des Spielens, die viel spannender ist als das aktuelle Szenario. Ähnlich wie Multiplayer-Spiele dem Gaming-Ökosystem eine völlig neue Dimension an Möglichkeiten hinzugefügt haben, können On-Chain-Spiele noch unterhaltsamer und relevanter werden.

Doch dieses Versprechen steht im Widerspruch zur Realität der Blockchain – Transaktionen sind teuer und langsam. Das sind zwei Probleme, die Spiele einfach nicht haben können. Aus diesem Grund war es nahezu unmöglich, erfolgreiche On-Chain-Spiele zu entwickeln.

Aber mit der Reife der Validitäts-Rollup-Technologie wird das Versprechen von On-Chain-Spielen endlich erfüllt. 

In diesem Artikel schauen wir uns an, wie die hohe TPS, die **Starknet** ermöglicht, das Versprechen von On-Chain-Spielen wahr werden lässt. Und wir werden uns ansehen, wie **Dojo**– die erste von der Community erstellte nachweisbare Gaming-Engine – Starknet nutzt, um Entwickler zu stärken. Abschließend werfen wir einen Blick auf die Zukunft von Dojo und darauf, was es für Blockchain-Gaming eröffnet.

## Krypto-Gaming

Wenn wir über Blockchain-Gaming sprechen, sind die beiden beliebtesten Ideologien, die Blockchain ermöglicht, **Besitz von In-Game-Assets** und **Interoperabilität**. 

**Eigentum an In-Game-Assets** bedeutet, dass Spiel-Assets zu einer Wallet gehören, die dem *Benutzer gehört*. Mit anderen Worten: Sie gehören nicht dem Spieleentwickler oder einem einfachen E-Mail-Konto, das auf einem zentralen Server gespeichert ist und von den Spieleentwicklern aus der Ferne gelöscht werden kann. Beim Blockchain-Gaming gehören die Vermögenswerte, die Sie erstellen oder verdienen, wirklich Ihnen.

Und sobald diese Vermögenswerte *Ihnen gehören*– Spiele können **Interoperabilität ermöglichen**. Durch Interoperabilität können Charaktere und Assets aus einem Spiel in ein anderes Spiel oder eine andere Welt übertragen werden. Wenn Sie Hunderte von Stunden in ein Spiel investieren, sich aber dazu entschließen, es nicht mehr zu spielen, können Sie diese hart erarbeiteten Ressourcen zum neuen Spiel Ihrer Wahl mitnehmen. 

Um diese beiden Konzepte umzusetzen, müssen Spiele **in der Kette**erstellt werden. Das bedeutet, dass alle Vermögenswerte im Spiel, alle vom Spieler durchgeführten Aktionen und alle anderen Zustandsänderungen *als Transaktion auf der Blockchain* stattfinden müssen (entweder separat für jede Aktion oder als aggregierte Transaktion, die regelmäßig gepusht wird). Auf einer ziemlich dezentralisierten Blockchain kann es ein paar Cent *bis ein paar hundert Dollar* kosten (bei Überlastung) und mehrere Minuten oder länger für eine einzelne Transaktion dauern. Dies macht den Betrieb einer großen Gaming-Infrastruktur auf solchen Plattformen offensichtlich unerschwinglich teuer, langsam und unpraktisch.

## Starknet und günstige Berechnungen 

Doch all das ändert sich mit der Einführung von Validitäts-Rollups wie Starknet. 

**Starknet** ist ein von [StarkWare](https://starkware.co/starknet/) entwickeltes Layer-2-Gültigkeits-Rollup (allgemein bekannt als Zero-Knowledge-Rollup), das kryptografische Systeme namens STARKs verwendet, um die Rechen- und Speicherkosten massiv zu senken. (Weitere Informationen zu kryptografischen Beweisen auf Starknet [Sie in einem Einführungsartikel hier](https://starkware.medium.com/cambrian-explosion-of-cryptographic-proofs-5740a41cdbd2#:~:text=The%20Cambrian%20explosion%20of%20cryptographic,currently%20being%20used%20in%20web3).) 

Starknet (und Cairo, die intelligente Vertragssprache für Starknet) ermöglichen es dApps, hohe TPS zu minimalen Kosten zu verarbeiten und dennoch die Sicherheit von Ethereum zu nutzen. Diese günstigen und schnellen Transaktionen sind genau das, was Sie brauchen, um das Potenzial des Blockchain-Gamings auszuschöpfen. Spiele können jetzt vollständig in der Kette, schnell und erschwinglich sein.   

Aber selbst mit der Fähigkeit, in der Kette zu sein, benötigen Blockchain-Spiele einen zweiten wichtigen Baustein, damit sie gedeihen können: eine nachweisbare Spiel-Engine.

## Was sind Game Engines?

Eine **Game Engine** ist das Software-Framework, das schöne Einstellungen, schnelle Spielerbewegungen und realistisches Charakterverhalten in den Spielen ermöglicht, die Sie lieben. Eine Spiel-Engine umfasst normalerweise Bibliotheken und Unterstützungsprogramme, die Entwicklern ein Framework bieten, damit sie nicht für jedes Spiel grundlegende Systeme (wie Physik, Grafik und Spielmechanik) von Grund auf neu erstellen müssen. Spiel-Engines können auch Audio- und Videoverarbeitung, das Rendern von 3D-Effekten und KI-Funktionen umfassen. 

Eine Spiel-Engine ist die Bühne, auf der ein Spiel aufgebaut ist. 

Die meisten Spiele, die wir gerne spielen, verdanken ihre Existenz zwei der beliebtesten Spiele-Engines der Welt: Unity und Unreal Engine. Die von Epic Games entwickelte Unreal Engine wurde in beliebten Titeln wie „Fortnite“, „Street Fighter V“ und der „Gears of War“-Reihe eingesetzt. Unity, ein weiterer wichtiger Akteur in der Spiele-Engine-Branche, hat Spiele wie „Hearthstone“, „Ori and the Blind Forest“ und „Pokémon Go“ zum Leben erweckt.

Da Starknet das Versprechen von Krypto-Gaming freisetzt, haben zahlreiche Projekte mit der Entwicklung von Spielen auf Starknet begonnen. Aber was immer noch fehlt, ist eine *Krypto-* Spiel-Engine, die es Entwicklern ermöglicht, Spiele zu entwickeln, ohne benutzerdefinierten Code für grundlegende Physik, Logik und Spielmechanik schreiben zu müssen – und das alles, während sie in der Kette bleiben. 

## Dojo – die erste nachweisbare Game Engine

**[Dojo](https://dojoengine.org/)** ist diese Krypto-Spiel-Engine. Es handelt sich um eine von der Community erstellte, nachweisbare Spiel-Engine und Toolchain zum Aufbau von On-Chain-Spielen und autonomen Welten. Es lässt das Versprechen des Krypto-Gamings Wirklichkeit werden.

Die Zahl der Spiele auf Starknet, die Dojo nutzen, wächst schnell. Zu den beliebtesten gehören:

* [Einfluss](https://www.influenceth.io/) – Ein großartiges Strategie-MMO, das in einem fernen Asteroidengürtel mit einer offenen Wirtschaft im Besitz des Spielers spielt. Die Benutzer können NFTs kaufen, die es ihnen ermöglichen, Asteroiden zu erforschen und zu entwickeln. Alle Asteroiden leben in derselben Welt und die Spieler können miteinander interagieren. 
* [Realms](https://linktr.ee/BibliothecaDAO) – Ein Strategiespiel mit 8.000 Landkarten mit spezifischen Namen, Formen, Größen und geografischen Merkmalen, die den Benutzern (Eigentümern dieser Länder) On-Chain-Nutzung bieten, wie z. B. Ressourcengenerierung und fungible Wohngrundelemente, die Wirtschaftsspiele ermöglichen.
* [CafeCosmos](https://www.cafecosmos.io/) – Ein landbasiertes On-Chain-Spiel, bei dem Benutzer Ressourcen effizient verwalten müssen. Dazu gehören das Sammeln von Ressourcen, die Zucht und Aufzucht von Tieren, die Herstellung von Geräten und Möbeln, der Handel mit Vermögenswerten und vieles mehr. 

## Dojo-Komponenten

Das Dojo-Ökosystem besteht aus den folgenden Komponenten: 

* ECS (Entity Component System), geschrieben in [Cairo](https://github.com/starkware-libs/cairo)
* Sozu-Migrationsplaner
* Torii Networking & Indexierungsstapel
* Katana RPC-Entwicklungsnetzwerk

Lassen Sie uns die einzelnen Punkte im Detail durchgehen. 

Ein **ECS-System** ist ein Entwurfsmuster, das in der Spieleentwicklung verwendet wird, um wartbareren Code zu fördern. Ein ECS-System ermöglicht es dem Spieleentwickler, den Objekten (Entitäten) des Spiels einzigartige Merkmale (Komponenten) zu verleihen, sodass die gesamte Szene als integriertes System funktionieren kann. 

Das ECS-Framework von Dojo, das speziell für die Blockchain-basierte Spieleentwicklung entwickelt wurde, fördert Modularität, Effizienz und Flexibilität, die für die Bewältigung der einzigartigen Herausforderungen von Blockchain-Umgebungen von entscheidender Bedeutung sind. Dies ermöglicht die Erstellung komplexer, dynamischer Spiele auf der Blockchain, unterstützt verschiedene Spielmechanismen und Interaktionen und nutzt gleichzeitig die transparenten, dezentralen Vorteile der Blockchain-Technologie. 

Und da Dojo in Kairo geschrieben wird, maximiert es die Effizienz des zu beweisenden Codes. (Um mehr über die Feinheiten von Kairo zu erfahren und was wir unter beweisbar verstehen, empfehlen [diesen Artikel](https://starkware.medium.com/moving-from-solidity-to-cairo-7d44f9723c68)) 

**Sozo** ist eine Toolchain, die speziell für die Gebäude- und Migrationsplanung angepasst wurde. Mit anderen Worten: Sozo kann für die Bereitstellung der entwickelten Spiele auf Starknet verwendet werden. Mit einem einfachen Befehl „sozo migrate“ ist die Bereitstellung einer Instanz des Spiels „world“ in der Kette möglich. Sozo ist nur als Befehlszeilenschnittstellentool (CLI) verfügbar. Allerdings befindet sich derzeit eine GUI-Schnittstelle in der Entwicklung.

**Torii** ist eine umfassende Indexierungs- und Netzwerkschicht für Dojo-Welten. Da das Torii-System auf Dojo aufbaut, ist es darauf ausgelegt, alle Ereignisse zu indizieren, die in den in der Kette bereitgestellten Spielwelten stattfinden. Es organisiert systematisch den Zustand der Dojo-Welten und macht die Datenabfrage für Kunden bequem und effizient. Angesichts vieler Zustandsänderungen in Spielen – stellen Sie sich vor, jeder Klick ist eine Zustandsänderung – sind effiziente Abfragesysteme eine nützliche Funktion zusätzlich zum Dojo-Stack. Abfragen zu Torii erfolgen in [GraphQL](https://www.apollographql.com/blog/graphql/basics/what-is-graphql-introduction/).

**Katana** ist ein extrem schneller lokaler Starknet-Knoten, der die lokale Entwicklung mit Dojo unterstützt. Mit Katana können Entwickler ihre Anwendungen auf diesem „Devnet“ testen, um eine schnelle lokale Entwicklung zu ermöglichen. Entwickler können das Katana-Netzwerk nutzen, um die während des Spiels gesendeten Transaktionen zu testen. Katana bietet praktische RPC-Methoden, mit denen sich die Netzwerkkonfiguration nach Bedarf ändern lässt (z. B. die Blockzeit ändern oder gebührenfreie Transaktionen zulassen usw.). Darüber hinaus unterstützt Katana Version [v0.3.0](https://github.com/starkware-libs/starknet-specs/tree/v0.3.0) der Starknet JSON-RPC-Spezifikationen (die neueste Version vom Juni 2023). Native Starknet-JSON-Aufrufe wie starknet_getTransactionReceipt und starknet_getStorageAt können auf Katana verwendet werden. 

## Die Zukunft von Dojo und Krypto-Gaming 

Die Dojo-Community forscht und entwickelt kontinuierlich, um Krypto-Gaming voranzutreiben. Neben der Verbesserung der aktuellen Komponenten arbeiten die leitenden Entwickler an:

* L3s für Spiele
* Optimistische Updates
* Kundenseitige Prüfung 
* Kettenübergreifende Vermögensübertragungen

Schauen wir uns jeden einzelnen an und was er für das Spielen bedeutet.

**L3s für Spiele** – Dojo untersucht die Machbarkeit der Entwicklung von Spielen als L3s auf Starknet. Dies bedeutet, dass auf Starknet eine separate Kette eingesetzt wird, die regelmäßig die Ausführung ihrer Transaktionen nachweist und den Beweis auf Starknet (dem L2) übermittelt. Starknet aggregiert diesen Beweis mit anderen Transaktionen im Netzwerk und übermittelt den Beweis an Ethereum L1, wo der Beweis überprüft wird. [Diese Lösung könnte die Skalierbarkeit von Spielen](https://medium.com/starkware/fractal-scaling-from-l2-to-l3-7fe238ecfb4f) sogar um ein Vielfaches steigern. (Denken Sie als zusätzlichen Schritt darüber nach, ob jedes Mal, wenn ein Spieler ein Level im Spiel versucht, eine neue Ebene zur einmaligen Verwendung über der Spielebene erstellt wird.)

**Optimistische Updates** – Wie oft haben wir still gesessen und darauf gewartet, dass der Text „Transaktion in Bearbeitung…“ in unseren Geldbörsen grün wird und die Transaktion als „verifiziert“ anzeigt? Eine Menge. Wenn jeder Zug</em> den ein Spieler im Spiel ausführt, als separate Transaktion gesendet wird, würde der Spieler *Zeit damit verschwenden, auf die Annahme der Transaktion zu warten. </p>

Optimistische Updates – die Dojo als zusätzliche Funktion zu seinem Stack hinzufügen möchte – beseitigen dieses Problem, indem sie die Transaktion optimistisch auf der Clientseite (im Browser selbst) ausführen und es dem Spieler ermöglichen, das Spiel fortzusetzen. Wenn sich das Ergebnis der Transaktion aus irgendeinem Grund von dem unterscheidet, was im Browser ausgeführt wurde, gleicht das Spiel die Änderungen ab.

**Clientseitige Prüfung**– Neben optimistischen Updates, die auf der Clientseite ausgeführt werden, prüft Dojo die Möglichkeit, Teile von in der Kette gesendeten Transaktionen clientseitig zu prüfen. Dies würde es den auf Dojo aufbauenden Spielen ermöglichen, einige der vom Benutzer übergebenen Eingaben effektiv auszublenden, da ein ZK-Beweis für den Empfang dieser Eingaben auf der Clientseite erstellt werden kann. Dieser ZK-Beweis könnte wiederum in der Kette an den Sequenzer gesendet werden, der den Rest der Transaktion ausführt. 

**Verwendung von Speichernachweisen** – Speichernachweise sind eine kryptografische Möglichkeit, Blockchain-Informationen zu speichern, damit sie über Ketten hinweg gemeinsam genutzt werden können. Ähnlich wie Orakel liefern sie den Beweis, dass Informationen wahr sind. Aber im Gegensatz zu Orakeln benötigen sie für diesen Beweis kein Vertrauen in einen Dritten – bei Speichernachweisen ist das Vertrauen in den Speicher integriert. Speichernachweise ermöglichen auch den Nachweis der Gültigkeit des Zustands für eine andere Kette oder Schicht, die auf Ethereum aufbaut. 

Dojo arbeitet mit dem [Herodotus](https://www.herodotus.dev/) -Team zusammen, um Speichernachweise in Dojo zu implementieren, sodass eine kettenübergreifende Übertragung von Asset ** nicht erforderlich ist. Der Besitz eines Vermögenswerts aus einer anderen Kette könnte durch einen Speichernachweis nachgewiesen werden, und der Benutzer wäre in der Lage, seine Vermögenswerte in verschiedenen Spielen auf unterschiedlichen Ketten oder Ebenen zu verwenden. (Siehe den oben besprochenen Teil über Spiele, die als separate L3s auf Starknet erstellt werden.)

## Abschluss

Dojo ist die weltweit erste nachweisbare Spiel-Engine und wird durch die Verfügbarkeit von Starknet und Cairo ermöglicht. Mit nachweisbaren Gaming-Engines wie Dojo beginnen echte On-Chain-Krypto-Spiele das Licht der Welt zu erblicken. Das Versprechen „Interoperabilität und Eigenverantwortung“ wird Schritt für Schritt erfüllt.

Wenn Sie der Dojo-Community beim Aufbau der Zukunft helfen möchten, besuchen Sie sie unter [https://dojoengine.org](https://dojoengine.org/) oder wenden Sie sich an ihren Discord.