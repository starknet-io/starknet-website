

Hohe Rechenkosten haben die Einführung und Anwendung von Blockchain behindert

* Starknet, ein Layer-2-Ethereum-Rollup, ermöglicht kostengünstige Berechnungen
* Starknet ist bereits im Mainnet aktiv und hat Millionen von Transaktionen verarbeitet
* Möglichkeiten der KI/ML-Integration mit überprüfbarer Inferenz, On-Chain-Modellensembles und überprüfbarem Training
* Entwickler können das Starknet-Buch nutzen, um mehr über Kairo zu erfahren und auf Starknet aufzubauen

In den Bullenmärkten 2021 (oder Pepe-Saison im Mai 2023), als alle über Krypto sprachen und Millionen von Transaktionen auf Ethereum verschickten, könnten die Gaspreise bis zu 200 oder mehr Gwei erreichen. Das heißt, wenn Sie 10 USDC an jemanden auf Ethereum senden wollten, würde es Sie 50 $ oder mehr kosten. Kein besonders gutes Angebot.

Mit vielen neuen Nutzern der Blockchains stieg die Nachfrage nach Blockplatz sprunghaft an. Dieser Anstieg der Gaspreise auf Ethereum (und anderen Ketten) hat die Grenzen monolithischer Blockchains deutlich gemacht. Die Öffentlichkeit war bereit – die Technologie jedoch nicht.

Um dieses Problem anzugehen, kam es zu einem Wechsel zum modularen Design mit „Layer-2“-Lösungen, einer Reihe von Technologien, die auf einer Basis-Blockchain aufbauen und die Skalierbarkeit und Kosteneffizienz erhöhen. Im[Artikel](https://polynya.mirror.xyz/wnt16H0VnFoCGDK_ds5H4J1ZcHepZfQr1DQHCzw940o)von Polynya heißt es: „Alle Blockchains, die ihr Geld wert sind, werden sich in den kommenden Jahren auf die eine oder andere Weise von rein monolithischen abwenden (es sei denn, die Skalierung ist nicht erforderlich, wie bei Bitcoin).“

**Starknet –**ein Validitäts- (oder Zero-Knowledge-) Rollup – ist führend unter diesen Layer-2-Lösungen und hat die Rechenkosten massiv gesenkt. In diesem Artikel untersuchen wir, wie die hohen Rechenkosten die Blockchain gebremst haben, und schauen uns dann im Detail mehrere neue Anwendungsfälle an, die jetzt durch die günstigen Rechenkosten von Starknet möglich sind.

## Ethereum L2s

Auf Ethereum wurde eine Vielzahl dieser L2s entwickelt, hauptsächlich innerhalb von drei Lösungskategorien:[optimistische Rollups](https://ethereum.org/en/developers/docs/scaling/optimistic-rollups/),[Zero-Knowledge-Rollups](https://ethereum.org/en/developers/docs/scaling/zk-rollups/)und[State Channels](https://ethereum.org/en/developers/docs/scaling/state-channels/).

Das Tolle an Rollups ist, dass sie ihre Sicherheit von Ethereum L1 ableiten (und somit ein dezentrales Netzwerk von über[Validatoren nutzen1](https://beaconcha.in/validators). Allerdings bieten sie auch eine viel schnellere und günstigere Ausführung als eine Transaktion im Mainnet. Sie erreichen dies, indem sie die Berechnungen außerhalb der ersten Schicht durchführen (wo die Berechnung billiger ist), aber den Status von L2 regelmäßig als Paket im Mainnet veröffentlichen (um die Sicherheit des Mainnets zu wahren) (daher werden die Transaktionen „zusammengerollt“). .

## Was ist Starknet?

**Starknet**ist ein Gültigkeits-Rollup (allgemein bekannt als Zero-Knowledge-Rollup), das von[StarkWare](https://starkware.co/starknet/)entwickelt wurde und kryptografische Systeme namens STARKs verwendet, um die Rechenkosten zu senken.

Schon heute sind die Transaktionsgebühren der Mainnet-Version von Starknet deutlich niedriger als bei Ethereum. In Version 0.13.0 (Veröffentlichung voraussichtlich im dritten Quartal 2023) werden die Transaktionskosten von Starknet mit der Einführung von Volition (oder Off-Chain) voraussichtlich noch weiter sinken Datenverfügbarkeit). Derzeit sind 95 % der Transaktionsgebühren auf Starknet auf die Transaktionskosten auf dem Ethereum Mainnet zurückzuführen (die restlichen 5 % werden berechnet). Darüber hinaus wird das Team, sobald EIP 4844 auf Layer 1 implementiert ist, Upgrades vorantreiben, um es so schnell wie möglich anzupassen. Durch diese beiden Upgrades werden die Transaktionskosten voraussichtlich drastisch sinken.

## Einschränkungen hoher Rechenkosten

Abgesehen von den unverschämt hohen Gebühren allein für den Token-Versand gibt es noch andere Probleme mit hohen Rechenkosten. Noch heute sind viele Anwendungen aufgrund dieses hohen Rechenaufwands in ihren Anwendungsfällen eingeschränkt. Und da sich die Blockchain-Technologie weiter weiterentwickelt, wird die Nachfrage nach komplexen Berechnungen steigen. Die hohen Rechenkosten schränken das Wachstum und die Einführung dezentraler Anwendungen ein. Zum Beispiel:

1. **Tagesgeschäfte**. Das Versprechen „Krypto als Bargeld“ muss noch wahr werden (mit Ausnahme von[oder](https://www.pwc.com/gx/en/financial-services/pdf/el-salvadors-law-a-meaningful-test-for-bitcoin.pdf)Ausnahmen, in denen man „von Krypto überleben kann“). Neben der regulatorischen Unsicherheit sind teure Transaktionen einer der Hauptgründe für die mangelnde Akzeptanz im Alltag. Niemand möchte für einen Kaffee im Wert von 2 US-Dollar Transaktionsgebühren in Höhe von 1 US-Dollar zahlen.
2. **Orakel**. Aufgrund ihres inhärenten Designs und ihrer Prinzipien können Blockchains keine realen Daten außerhalb der Kette abrufen. Um Daten wie Aktienkurse, Wetterdaten, Sportspielergebnisse usw. zu erhalten, werden spezielle Anwendungen namens Orakel verwendet. Diese Orakel veröffentlichen regelmäßig Daten in der Kette, die dann durch intelligente Verträge abgerufen werden können. Aufgrund der hohen Transaktionskosten können die Orakel die Daten jedoch nicht regelmäßig in der Kette veröffentlichen, sondern oft nur in großen Abständen. Dadurch veralten die Daten in der Kette und könnten möglicherweise dazu führen, dass Smart Contracts schlechte Entscheidungen treffen. Dies ist besonders wichtig, um Handelserlebnisse auf Augenhöhe mit Web 2 bieten zu können. Darüber hinaus ist aufgrund der teuren Ausführung jede Art von Datenaggregation oder zusätzliche Berechnung nicht durchführbar.
3. **Governance**. On-Chain-Governance oder On-Chain-Voting ist ein wirksames Mittel, um Entscheidungsprozesse transparent und dezentral zu gestalten. Damit eine Abstimmung in der Kette stattfinden konnte, mussten die Wähler bisher ihre Stimme (basierend auf der Menge an Token X, die sie besitzen, oder einem anderen Mechanismus zur Erlangung der Stimmmacht) durch Senden einer Transaktion abgeben. Damit die Governance jedoch dezentralisiert werden kann, müssen häufig und schnell wirksame Entscheidungen getroffen werden. Aufgrund der hohen Rechenkosten ist die On-Chain-Abstimmung zu einem ineffizienten Abstimmungssystem geworden. Es ist zu teuer, zu wählen – also tun die Leute es einfach nicht. Infolgedessen haben sich viele Projekte für eine Off-Chain-Governance entschieden, was den Zweck von Blockchains untergräbt.
4. **Gaming**. Wenn wir von On-Chain-Gaming hören, fällt uns das einst virale Spiel[Axie Infinity](https://axieinfinity.com/)ein. In dem von Sky Mavis entwickelten Spiel wurden die Spielcharaktere Axies durch NFTs repräsentiert. Allerdings lief die Spiellogik ähnlich wie bei allen anderen traditionellen Spielen – auf einem zentralen Server. Bei Spielen müssen die Spieler in kurzer Zeit zahlreiche Entscheidungen treffen, von denen jede eine Art Transaktion darstellt. Und basierend auf der Entscheidung des Spielers kann sich die Spielhandlung ändern, was einen hohen Rechenaufwand erfordert. Diese Einschränkung der teuren Berechnung führte dazu, dass Spiele wie CryptoKitties und Axie Infinity nur über begrenzte On-Chain-Komponenten verfügten. Indem sie sich jedoch als „Web3“-Spiele vermarkteten, erreichten sie in ihrer Blütezeit eine Marktkapitalisierung von mehreren Milliarden Dollar, obwohl sie nicht wirklich repräsentativ für Blockchain-Gaming waren.

## Mit günstiger Berechnung die Tür zu neuen Anwendungsfällen öffnen

Wenn wir jedoch kostengünstige Berechnungen erreichen können, eröffnen wir eine Reihe neuer Blockchain-Anwendungsfälle. Starknet ist bereits im Mainnet aktiv und verarbeitet täglich Zehntausende Transaktionen (bis heute wurden mehr als 7 Millionen Transaktionen durchgeführt). Wie bereits erwähnt, werden die Transaktionskosten nach der Integration von EIP-4844 um Größenordnungen sinken.

Schauen wir uns einige der Anwendungsfälle an, die diese kostengünstige Berechnung auf Starknet ermöglicht.

### Erschwingliche Transaktionen und Kontoabstraktion

Das einfachste daran ist, dass bei günstigen Transaktionen</strong>**. Die Bezahlung Ihres Kaffees kostet Sie jetzt nur noch ein paar Cent (oder sogar den Bruchteil eines Cents). Darüber hinaus funktioniert Ihr Krypto-Wallet aufgrund der Kontoabstraktion</a>

ähnlich wie ein herkömmliches Wallet. Ähnlich wie Sie den Großteil Ihrer Finanzen auf einem sicheren Sparkonto aufbewahren, speichern Sie den Großteil Ihres Vermögens in einer Wallet mit mehreren Sicherheitsebenen (z. B. indem Sie große Überweisungen von einer vertrauenswürdigen Person mitzeichnen lassen oder einen einzigartigen privaten Schlüssel verwenden).</p> 



### Transformieren Sie Datenfeeds mit erschwinglicher On-Chain-Berechnung

Mit der Einführung kostengünstiger On-Chain-Berechnungen werden Orakel ganz anders aussehen als heute.

Erstens werden**häufige Aktualisierungen**von Oracle-Feeds möglich, da einzelne Transaktionen viel weniger kosten. Dies führt zu genaueren Datenfeeds und ermöglicht den Benutzern mehr Anwendungsfälle zum Aufbau von Märkten auf der Grundlage dieser Daten (komplizierte Optionsprotokolle, Prognosemärkte usw.).

Da Starknet ein Rollup ist, muss es regelmäßig eine**Verpflichtung**an das Ethereum-Mainnet senden, um den Status des Rollups zu aktualisieren (im Allgemeinen kann die Lücke zwischen den Verpflichtungen einige Minuten bis Stunden betragen). Diese Verpflichtung ist einer der erheblichen Kosten, die ein Benutzer zahlt, wenn er Transaktionsgebühren auf einem L2 bezahlt. Rollups dürfen jedoch nur den letzten</em>Status*an L1 übergeben. Das mehrmalige Überschreiben desselben Speicherslots in einem einzigen Block verursacht keine hohen Speicherkosten. Wenn im Falle von Orakeln eine Variable (z. B. der Preis eines Vermögenswerts) innerhalb derselben Verpflichtung häufig aktualisiert wird, entsprechen die L1-Kosten immer noch einem einzelnen Schreibvorgang, da nur der endgültige Status als Aufrufdaten im Mainnet veröffentlicht wird.</p> 

**Computer-Feeds**– oder Feeds aggregierter und berechneter Daten – werden aufgrund der günstigeren Ausführungskosten möglich. Im traditionellen Finanzwesen nutzen Finanzanwendungen hochentwickelte Datenfeeds, einschließlich Risiko, Rendite und Volatilität. Teams wie[Pragma](https://www.pragmaoracle.com/)arbeiten daran, diese Feeds auf web3 zu übertragen. Pragma verfügt bereits über zwei Live-Rechner-Feeds im Starknet-Testnetz – einen Volatilitätsindex und eine Renditekurve.

Die Verwendung von**Speicherbeweisen**wird auch die Orakellandschaft verändern. Speichernachweise sind eine kryptografische Möglichkeit, den Überblick über die Speicherung zu behalten. Die Verwendung dieser kryptografischen Verpflichtungen ermöglicht den vertrauenswürdigen Nachweis, dass ein bestimmter Zustand zu einem bestimmten Zeitpunkt (oder im Fall von Blockchains in einem bestimmten Block) existierte. Um diese Beweise zu verifizieren, sind Berechnungen erforderlich (obwohl diese sehr einfach sind), und kostengünstige Berechnungen werden die UX verbessern. Mit Speichernachweisen wird es möglich, Informationen dezentral zwischen verschiedenen Ketten zu übertragen, historische Daten aus der Blockchain anzubieten und vieles mehr. Wenn Sie tiefer in die Speicherbeweise eintauchen möchten,[Sie sich unseren Medium-Artikel](https://starkware.medium.com/what-are-storage-proofs-and-how-can-they-improve-oracles-e0379108720a)an.



### Der Übergang zur On-Chain-Spiellogik

Die Welt des Gamings ist riesig. Der größte Gaming**[USD</strong>pro Jahr](https://www.statista.com/forecasts/308454/gaming-revenue-countries)an Einnahmen aus Gaming. Blockchain-Spiele standen in letzter Zeit im Rampenlicht, aber wie bereits erwähnt, gehören diese Spiele hauptsächlich zu „web2.5“ und sind keine echten „web3“-Spiele.</p> 

Damit Spiele tatsächlich als Blockchain-Spiel gelten, müssen sie:

![](/assets/cheap-computation-image-2.webp)

Damit die Spiellogik vollständig in der Kette läuft, ist eine kostengünstige Ausführung unerlässlich.

Damit das Spiel als Web3-Spiel gilt, könnte ein elementarer „Lackmustest“ sein, ob das Spiel überleben könnte, wenn die Entwickler hinter dem Spiel plötzlich verschwinden. Dies ist der Art und Weise, wie ein Smart Contract in der Kette lebt, sehr ähnlich; Egal ob der Entwickler des Smart Contracts noch aktiv ist oder nicht, das Spiel soll weitergehen. Auf der Spiellogik könnten verschiedene Schnittstellen aufgebaut werden, wenn die grundlegenden Spielmechanismen und Regeln in der Kette liegen. Die Entwickler hingegen würden einen Anreiz erhalten, mit spielspezifischen Token zu bauen. Auch wenn derzeit kein großes Spiel vollständig in der Kette erstellt wird, arbeiten mehrere Projekte auf Starknet in die richtige Richtung, darunter[Realms](https://linktr.ee/BibliothecaDAO)und[Influence](https://venturebeat.com/games/unstoppable-games-will-launch-web3-sci-fi-mmo-influence-on-starknet/).

Ökosystementwickler wie[Dojo](https://dojoengine.org/)arbeiten an der Bereitstellung eines Open-Source-ECS-Frameworks (Entity-Component-System) für das Starknet-Ökosystem. Ein ECS-Framework ist ein grundlegendes Entwurfsmuster, das zum modularen Aufbau von Spielen verwendet wird. Im Fall von Mario Kart wären Mario und sein Auto beispielsweise Entitäten, die Position und Geschwindigkeit der Autos wären Komponenten und die Logik für Autokollisionen würde als System implementiert. Der Spieleentwickler würde diese Komponenten dann verwenden, um das Spiel zu erstellen. Projekte wie dieses werden benötigt, da das Ökosystem wächst und sich immer mehr Spieleentwickler zusammenschließen, um Spiele auf Starknet zu entwickeln.



### Transparente KI-Anwendungen

Angesichts der jüngsten Begeisterung für künstliche Intelligenz scheint es, dass KI bald in unser digitales Wesen integriert werden könnte. Obwohl es nicht sicher ist, dass KI-Modelle in die Kette integriert werden, gibt es mehrere Gründe, warum dies von Vorteil sein könnte. Und für diese Anwendungsfälle sind kostengünstige Berechnungen ein Muss.

1. **Überprüfbare Inferenz**bedeutet, dass Modelle auf zentralen Servern vorab trainiert werden. Sobald das Training jedoch abgeschlossen ist, könnten die Modellgewichte in der Kette veröffentlicht werden. Sobald dies erledigt ist, könnten Eingaben an das Modell in der Kette weitergeleitet werden, und die Ausgaben würden die Transparenz wahren, da der Benutzer einen Beweis dafür hätte, dass das Modell eine bestimmte Ausgabe generiert.
2. **On-Chain-Modellensembles**könnten ermöglicht werden, wenn die Berechnung kostengünstig genug ist, damit Modelle ausgeführt werden können, um Ausgaben in der Kette zu generieren. Die Ausgaben mehrerer Modelle könnten dann zu einem „Ensemble“-Modell zusammengefasst werden, das üblicherweise in ML-Anwendungen verwendet wird.
3. **Überprüfbares Training**würde bedeuten, dass Modelle in der Kette trainiert werden könnten, wodurch ein überprüfbarer Beweis für ein gutartiges Training erhalten bleibt, ohne dass externe Vorurteile eingeführt werden. Dies ist möglicherweise die rechenintensivste der oben genannten Anwendungen und auch die mit der geringsten Wahrscheinlichkeit, bald in Betrieb genommen zu werden. Heutzutage dauert es Tage (oder Jahre), bis große KI/ML-Modelle auf GPUs mit enormen Ressourcen trainiert sind. Darüber hinaus wäre die Generierung von S\[N/T]ARK-Beweisen für die während des Trainings durchgeführten Berechnungen derzeit ein Mehraufwand. Darüber hinaus läuft Cairo speziell auf CPUs (die viel langsamer sind als GPUs).

![](/assets/cheap-computation-image-3.webp)

Quelle:[https://www.moduluslabs.xyz](https://www.moduluslabs.xyz/)

[Giza](https://starknet.substack.com/p/all-roads-lead-to-giza-starknet-roadmap?utm_source=substack&utm_medium=email)und[Modulus Labs](https://www.moduluslabs.xyz/)(*, was auch als ML*abgekürzt wird) sind einige der führenden Forschungsteams, die daran arbeiten, KI mithilfe von ZK-Beweisen in die Kette zu bringen.



## Wie sieht die Zukunft für Starknet aus?

In naher Zukunft konzentriert sich die Roadmap von Starknet auf Leistung und eine bessere UX. Bis zum dritten Quartal 2023 werden ein höherer Durchsatz, eine geringere Latenz und niedrigere Transaktionsgebühren erwartet. Weitere Einzelheiten zu den Entwicklungsplänen finden Sie in der hier[angegebenen Roadmap](https://medium.com/starkware/starknet-goals-and-roadmap-for-2023-fe7b89eead3b).

Cairo wurde speziell für STARK-Beweise entwickelt und eignet sich daher optimal für die Nutzung der Vorteile algebraischer Beweissysteme und die Gewährleistung effizienter Berechnungs- und Verifizierungsprozesse.

Starknet ist auf Skalierbarkeit ausgelegt und stellt sicher, dass es exponentielles Wachstum ohne Einbußen bei Sicherheit oder Dezentralisierung bewältigen kann.

![](/assets/cheap-computation-image-4.webp)



## Abschluss

Mit der intensiven Forschung rund um den „modularen Blockchain“-Bereich rückt das Ziel „eine Milliarde Nutzer zu bringen“ immer näher. Und mit Starknet gibt es günstige Berechnungen,[, und sie werden nur noch billiger,](https://www.starknet.io/de/posts/engineering/starknet-performance-roadmap).

Das wachsende[Starknet-Buch](https://book.starknet.io/chapter_2/index.html)bietet einen hervorragenden Ausgangspunkt für Entwickler, die ihre Kairo-Reise für Starknet antreten, wobei die Kapitel 0 bis 2 eine Einführung in verschiedene Themen bieten.