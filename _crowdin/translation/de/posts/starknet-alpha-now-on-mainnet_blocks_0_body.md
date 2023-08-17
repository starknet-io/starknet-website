### TL;DR

* Alpha ist live auf Mainnet
* Es unterstützt allgemeine Berechnungen und Kompatibilität
* Schnellwachsende Gemeinschaft, Entwicklung von Werkzeugen und Anwendungen
* Zusätzliche Funktionen, die in den kommenden Wochen laufend ausgebaut werden sollen
* Haftungsausschluss: Dies ist eine Alpha-Version (lesen Sie unten den Feindruck)

### Einführung

StarkNet Alpha startet heute auf Ethereum Mainnet!

StarkNet ist ein unzulässig dezentralisierter Rollup, der als L2-Netzwerk über Ethereum arbeitet. StarkNet erlaubt es jeder dApp, eine unbegrenzte Skala für seine Berechnung zu erreichen, ohne die Kompatibilität und Sicherheit von Ethereum zu beeinträchtigen Dank seiner Abhängigkeit vom sichersten und skalierbarsten kryptographischen System —[STARK](https://starkware.co/stark/). StarkNet ist auf der[Kairo](https://starkware.co/cairo/)Programmiersprache aufgebaut, dem ersten produktionsfähigen Turing kompletten von-Neumann Verifikator auf Ethereum. Sowohl Kairo als auch STARK wurden von StarkWare selbst entwickelt und haben alle unsere produktionsorientierten Anwendungen betrieben die sich seit Sommer 2020 über 50M txs und $250B niedergelassen haben.

Unter anderem ermöglicht StarkNet Alpha allgemeine Rechenkontrakte, die die Zusammensetzbarkeit unterstützen, sowohl mit anderen StarkNet-Verträgen als auch über L1<>L2-Messaging mit L1-Verträgen. StarkNet Alpha arbeitet im Rollup-Modus, was bedeutet, dass alle Daten über den Zustandsvergleich auf die Kette gesendet werden.

Im Januar haben wir die StarkNet[Roadmap](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880) geteilt. Im Juni ging StarkNet Alpha in einem öffentlichen Testnetz und wurde mit neuen Funktionen auf einer rollenden Basis aktualisiert. Wir freuen uns sehr, dem Zeitplan voraus zu sein, zum Teil dank unserer Abhängigkeit von unserem produktionsorientierten Softwarestapel STARK/Kairo.

### Wie sollen Sie StarkNet Alpha behandeln?

Erstens, mit großer Sorgfalt, da das Label „Alpha“ aus gutem Grund da ist. Änderungen, Korrekturen und Verbesserungen werden erwartet. StarkNet Alpha muss noch geprüft werden, und wir können eine solche Prüfung verzögern, bis das Netzwerk einige mehr (lesen Sie den Haftungsausschluss am Ende dieses Beitrags für weitere Informationen).

Im Allgemeinen folgen wir dem vorsichtigen und vernünftigen Weg, der von unseren optimistischen Kollegen im Rollup festgelegt wurde, nämlich Arbitrum und Optimismus: Starten Sie das Netzwerk mit einem einzigen Sequenzer und Whitelist-Anwendungen, um sicherzustellen, dass ihre Entwickler die damit verbundenen Risiken verstehen. Wir engagieren uns weiterhin voll und ganz für eine vollständige Dezentralisierung von StarkNet.

Und wie soll man mit der Ökonomie von StarkNet Alpha umgehen? Die Alpha startet ohne Transaktionsgebühren. Das nächste Upgrade, das nur wenige Wochen entfernt ist, wird einen Gebührenmechanismus einführen – wir werden weitere Details in einem separaten Beitrag teilen.

### Bauen beginnen

Wir laden Sie ein, Ihre eigenen Anwendungen über StarkNet zu schreiben, indem Sie entweder die (neu!) überprüfen [Website](http://starknet.io/), oder direkt zum[Tutorial](https://starknet.io/docs/) springen .

Wenn Sie bereit sind zu installieren, folgen Sie bitte diesem[Onboarding-Prozess](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu); erstellt wurde, um sicherzustellen, dass alle Entwickler sich des vorläufigen Zustands des Systems bewusst sind.

### Ökosystem

In den letzten Monaten haben wir eine erstaunliche Zunahme der Größe und Aktivität der StarkNet-Gemeinschaft erlebt. welche sich auf der[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y) versammelt. Dutzende Entwickler – Teams und Einzelpersonen – über das Blockchain-Ökosystem hinweg tragen dazu bei. (Siehe den Haftungsausschluss am Ende dieses Beitrags)

#### Entwicklerwerkzeuge

* OpenZeppelin definiert die Standardverträge. Ihr[Repo](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)und[Diskussionen](https://github.com/OpenZeppelin/cairo-contracts/discussions)sind es wert, zu folgen
* Der[Warp](https://github.com/NethermindEth/warp)Solidity–>Kairoer Transpiler, entwickelt von Nethermind
* Shard Labs’[HardHat Plugin](https://github.com/Shard-Labs/starknet-hardhat-plugin)und[StarkNet Devnet](https://github.com/Shard-Labs/starknet-devnet)
* Argent entwickelt Werkzeuge, einschließlich seiner gemeinsamen Anstrengungen auf StarkNet.js, neben[Sean Han](https://twitter.com/seanjameshan), seinem Schöpfer

#### Infrastruktur

**Blockexplorer**:

* [Das Voyager](http://voyager.online/)Projekt von Nethermind
* [Eth.tx](https://ethtx.info/)bietet Support-Analyse und eine detaillierte Ansicht der StarkNet-Transaktionen

**Vollständige Knoten**: Zwei laufende Anstrengungen: Einer ist das von Erigon geleitete Fermion Projekt das andere ist das Projekt[Pathfinder](https://github.com/eqlabs/pathfinder)unter der Leitung von Equilibrium

**Wallets**:

* [ArgentX](https://github.com/argentlabs/argent-x)ist eine von Argent entwickelte Browser-Erweiterung, die bereits für Entwickler verfügbar ist
* Torus Key Management Lösung ist StarkNet bereit
* Ledger entwickelt eine native StarkNet-App, die vor Ende des Jahres verfügbar gemacht werden soll

**Kairoer Prüfungen**: ConsenSys Diligence, Spur der Bits, Peckshield und ABDK führen entweder bereits Kairoer Prüfungen durch, oder bald beginnen

**API Services**: Nachdem ein StarkNet vollständig verfügbar ist, werden API-Dienste von Figment, Chainstack und Infura angeboten

**Indexer**: Wir werden an der Integration von TheGraph arbeiten, um mit StarkNet zusammen mit dem Figment-Team zu arbeiten

### Der Weg vor uns

In den kommenden Wochen und Monaten werden wir die Alpha mit den folgenden Fähigkeiten erweitern:

* Kontraktverbesserungsmechanismus
* Gebührenmechanismus
* Ereignisse
* Hinzufügen von fehlenden Syscalls (get_block_number, get_block_timestamp und mehr)
* Skelett-Version von Volition
* Und noch viel mehr …

Um diesen Aufwand kontinuierlich zu überwachen, schauen Sie sich die[vorläufige Roadmap](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51) der Funktionen an.

Wenn wir weiter schauen, investieren wir weiterhin stark in aktive Forschung an mehreren Fronten (kommen Sie zu den[Schamanen](https://community.starknet.io/)Anstrengung):

* Dezentralisierung
* Skalierung
* Datenverfügbarkeit
* Berechtigungslose Ansteckung

### Aktion aufrufen

* Beginnen Sie, Verträge auf dem unzulässigen StarkNet testnet auf Goerli zu schreiben
* Trete dem[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y) bei
* Community-Anrufe beitreten
* Besuchen Sie den ersten[StarkNet Ecosystem Gipfel](https://www.eventbrite.com/e/starknet-ecosystem-summit-2022-tickets-206671880157)(27. bis 28. Januar 2022, Stanford CA)
* Trete den[StarkNet Schamanen](https://community.starknet.io/)bei, um tiefer in die Herausforderungen der Forschung einzutauchen

### Haftungsausschluss

***StarkNet Alpha ist ein neues und komplexes System, das noch nicht vollständig geprüft wurde. Wie alle komplexen Softwaresysteme kann das StarkNet-System Fehler enthalten, die in Extremfällen zu einem Verlust aller Ihrer Gelder führen könnten. Also***vorsichtig herumreiten und Vorsicht!******

*Das StarkNet Ökosystem ist eine große und schnell wachsende Gruppe unabhängiger Teams und Einzelpersonen, über die StarkWare keine Aufsicht hat und keine Verantwortung übernimmt. Jedes der Projekte, die von Ökosystem-Mitgliedern entwickelt wurden, kann Fehler enthalten, die in Extremfällen zu einem Verlust aller Ihrer Gelder führen könnten. Darüber hinaus erhöht sich mit intelligenteren Verträgen das Potenzial für unbeabsichtigte schädliche Fehler und sogar böswillige Betrügereien und Teppiche. Also behandeln Sie alle intelligenten Verträge auf StarkNet bei der Behandlung intelligenter Verträge auf Ethereum, und verwenden Sie nur solche, denen Sie gute Gründe haben, als sicher zu vertrauen.*