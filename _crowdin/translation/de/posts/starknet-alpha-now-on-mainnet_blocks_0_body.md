### TL;DR

* Alpha ist live im Mainnet
* Es unterstützt allgemeine Berechnungen und Zusammensetzbarkeit
* Schnell wachsende Community, die Tools und Anwendungen entwickelt
* Weitere Funktionen werden in den kommenden Wochen fortlaufend eingeführt
* Haftungsausschluss: Dies ist eine Alpha-Version (lesen Sie das Kleingedruckte unten)

### Einführung

Starknet Alpha startet heute im Ethereum Mainnet!

Starknet ist ein erlaubnisloses dezentrales Rollup, das als L2-Netzwerk über Ethereum betrieben wird. Starknet ermöglicht es jeder dApp, eine unbegrenzte Skalierung ihrer Berechnungen zu erreichen, ohne die Zusammensetzbarkeit und Sicherheit von Ethereum zu beeinträchtigen, da es sich auf das sicherste und skalierbarste kryptografische Beweissystem verlässt – [STARK](https://starkware.co/stark/). Starknet basiert auf der Programmiersprache [Cairo](https://starkware.co/cairo/) , dem ersten vollständigen Turing-Von-Neumann-Verifizierer in Produktionsqualität auf Ethereum. Sowohl Cairo als auch STARK wurden intern von StarkWare entwickelt und basieren auf allen unseren produktionstauglichen Anwendungen, die seit Sommer 2020 über 50 Millionen Sendungen und 250 Milliarden US-Dollar abgewickelt haben.

Neben anderen Funktionen ermöglicht Starknet Alpha die allgemeine Berechnung intelligenter Verträge, die die Zusammensetzbarkeit sowohl mit anderen Starknet-Verträgen als auch über L1<>L2-Nachrichten mit L1-Verträgen unterstützen. Starknet Alpha arbeitet im Rollup-Modus, was bedeutet, dass alle Statusunterschiedsdaten in der Kette gesendet werden.

Bereits im Januar haben wir die Starknet [Roadmap](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)veröffentlicht. Im Juni ging Starknet Alpha in einem öffentlichen Testnetz live und wurde fortlaufend mit neuen Funktionen aktualisiert. Wir freuen uns, dem Zeitplan voraus zu sein, was zum Teil auf unser Vertrauen in unseren produktionstauglichen, kampferprobten STARK/Cairo-Software-Stack zurückzuführen ist.

### Wie sollten Sie Starknet Alpha behandeln?

Erstens mit großer Sorgfalt, denn das „Alpha“-Label hat seinen Grund. Erwarten Sie Änderungen, Korrekturen und Verbesserungen. Starknet Alpha muss noch geprüft werden, und wir können eine solche Prüfung verschieben, bis das Netzwerk weiter ausgereift ist (weitere Informationen finden Sie im Haftungsausschluss am Ende dieses Beitrags).

Im Allgemeinen folgen wir dem vorsichtigen und vernünftigen Weg, der von unseren Kollegen von Optimistic Rollup, nämlich Arbitrum und Optimism, definiert wurde: Starten Sie das Netzwerk mit einem einzigen Sequenzer und setzen Sie Anwendungen auf die Whitelist, um sicherzustellen, dass ihre Entwickler die damit verbundenen Risiken verstehen. Wir setzen uns weiterhin voll und ganz für eine vollständige Dezentralisierung von Starknet ein.

Und wie sollte man die Wirtschaftslage von Starknet Alpha behandeln? Die Alpha startet ohne Transaktionsgebühren. Mit dem nächsten Upgrade, das nur noch wenige Wochen entfernt ist, wird ein Gebührenmechanismus eingeführt – weitere Details dazu geben wir in einem separaten Beitrag bekannt.

### Beginnen Sie mit dem Bauen

Wir laden Sie ein, mit dem Schreiben Ihrer eigenen Anwendungen über Starknet zu beginnen, indem Sie entweder die (neue!) [Website](http://starknet.io/)oder direkt zum [Tutorial](https://starknet.io/docs/)springen.

Wenn Sie zur Bereitstellung bereit sind, folgen Sie bitte diesem [Onboarding-Prozess](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu); erstellt, um sicherzustellen, dass alle Entwickler über den vorläufigen Zustand des Systems informiert sind.

### Ökosystem

In den letzten Monaten haben wir ein erstaunliches Wachstum in der Größe und Aktivität der Starknet-Community beobachtet, die sich auf dem [Starknet Discord](https://discord.gg/uJ9HZTUk2Y)versammelt. Dutzende Entwickler – Teams und Einzelpersonen – im gesamten Blockchain-Ökosystem tragen zu diesen Bemühungen bei. (Siehe den Haftungsausschluss am Ende dieses Beitrags)

#### Entwicklerwerkzeuge

* OpenZeppelin definiert die Standardverträge. Es lohnt sich, ihren [Repo](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts) und [Diskussionen](https://github.com/OpenZeppelin/cairo-contracts/discussions) zu folgen
* Der von Nethermind entwickelte [Warp](https://github.com/NethermindEth/warp) Solidity–>Cairo-Transpiler
* Shard Labs‘ [HardHat-Plugin](https://github.com/Shard-Labs/starknet-hardhat-plugin) und [Starknet Devnet](https://github.com/Shard-Labs/starknet-devnet)
* Argent entwickelt Tools, einschließlich seiner gemeinsamen Arbeit an Starknet.js, zusammen mit [Sean Han](https://twitter.com/seanjameshan), seinem Schöpfer

#### Infrastruktur

Block-Explorer:

* [Das Voyager](http://voyager.online/) Projekt von Nethermind
* [Eth.tx](https://ethtx.info/) bietet Supportanalysen und eine detaillierte Ansicht der Starknet-Transaktionen

Vollständige Knoten: Zwei Projekte sind im Gange: eines ist das von Erigon geleitete Fermion-Projekt, das andere ist das von Equilibrium geleitete [Pathfinder](https://github.com/eqlabs/pathfinder) Projekt

Geldbörsen:

* [ArgentX](https://github.com/argentlabs/argent-x) ist eine von Argent entwickelte Browsererweiterung, die Entwicklern bereits zur Verfügung steht
* Die Torus-Schlüsselverwaltungslösung ist Starknet-fähig
* Ledger entwickelt eine native Starknet-App; noch vor Jahresende zur Verfügung gestellt werden

Audits in Kairo: ConsenSys Diligence, Trail of Bits, Peckshield und ABDK führen entweder bereits Audits in Kairo durch oder beginnen bald damit

API-Dienste: Nachdem ein Starknet-Vollknoten verfügbar gemacht wurde, werden API-Dienste von Figment, Chainstack und Infura angeboten

Indexer: Wir werden gemeinsam mit dem Figment-Team an der Integration von TheGraph für die Zusammenarbeit mit Starknet arbeiten

### Die Straße entlang

In den kommenden Wochen und Monaten werden wir die Alpha mit den folgenden Funktionen aufrüsten:

* Mechanismus zur Vertragsaktualisierung
* Gebührenmechanismus
* Veranstaltungen
* Hinzufügung fehlender Systemaufrufe (get_block_number, get_block_timestamp und mehr)
* Skelettversion von Volition
* Und vieles mehr …

Um diese Bemühungen fortlaufend zu überwachen, sehen Sie sich die [vorläufige Roadmap](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51)der Funktionen an.

Mit Blick auf die Zukunft investieren wir weiterhin stark in die aktive Forschung an mehreren Fronten (schließen Sie sich der Initiative [Shamans](https://community.starknet.io/) an):

* Dezentralisierung
* Skalierung
* Datenverfügbarkeit
* Erlaubnislose Anreize

### Aufruf zum Handeln

* Beginnen Sie mit dem Schreiben von Verträgen im erlaubnislosen Starknet-Testnetz auf Goerli
* Treten Sie dem [Starknet Discord](https://discord.gg/uJ9HZTUk2Y)bei
* Nehmen Sie an den Community-Aufrufen teil
* Nehmen Sie am ersten [Starknet Ecosystem Summit](https://www.eventbrite.com/e/starknet-ecosystem-summit-2022-tickets-206671880157) teil (27.–28. Januar 2022, Stanford, Kalifornien).
* Schließen Sie sich den [Starknet-Schamanen](https://community.starknet.io/) an, um tiefer in die Forschungsherausforderungen einzutauchen

### Haftungsausschluss

\*Starknet Alpha ist ein neues und komplexes System, das noch nicht vollständig geprüft wurde. Wie alle komplexen Softwaresysteme kann das Starknet-System Fehler enthalten, die im Extremfall zum Verlust aller Ihrer Gelder führen können. Gehen Sie also vorsichtig vor und seien Sie vorsichtig!\*

Das Starknet-Ökosystem besteht aus einer großen und schnell wachsenden Gruppe unabhängiger Teams und Einzelpersonen, über die StarkWare keine Aufsicht hat und keine Verantwortung übernimmt. Jedes der von Ökosystemmitgliedern entwickelten Projekte kann Fehler enthalten, die im Extremfall zum Verlust aller Ihrer Gelder führen können. Darüber hinaus steigt mit der Einführung immer mehr Smart Contracts das Potenzial für unbeabsichtigte schädliche Fehler und sogar böswillige Betrügereien und Rug Pulls. Behandeln Sie also alle Smart Contracts auf Starknet so, wie Sie Smart Contracts auf Ethereum behandeln, und verwenden Sie nur solche, bei denen Sie guten Grund haben, dass sie sicher sind.