### TL;DR

* *StarkNet Alpha startet auf Mainnet Ethereum bis November*
* Die Zeit für das Aufbauen auf StarkNet ist jetzt

### Eine kurze Geschichte

Wir haben unsere Vision für[StarkNet](https://starkware.co/product/starknet/)zu Beginn des Jahres angekündigt: um Ethereum eine massive Skalierbarkeit zu bringen und gleichzeitig die Sicherheit von L1 zu erhalten permissionless Interaktionen und Dezentralisierung.\
Wir haben im Juni**[StarkNet Alpha](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)**in einem öffentlichen Testnetz veröffentlicht. Diese Version unterstützte uneingeschränkt permissionless generelle Computation-Smart-Verträge. Wir haben ihn inzwischen zweimal aktualisiert: zuerst auf**Alpha 1**— Bereitstellung von[L1<>L2 Messaging und on-chain Daten](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), und dann zu**Alpha 2**— Unterstützung[Composability](https://medium.com/starkware/starknet-alpha-2-4aa116f0ecfc).

StarkNet Alpha 2 unterstützt jetzt zusammenfassbare intelligente Verträge mit allgemeinen Berechnungen in einem ätherischen Zustand mit der Fähigkeit L1 und L2 Verträge miteinander zu interagieren. Lies mehr[hier](https://www.cairo-lang.org/docs/hello_starknet/index.html).

### Was ist StarkNet Alpha auf Mainnet?

StarkNet Alpha auf Mainnet wird ähnliche Funktionen wie die im öffentlichen Testnetz von Goerli unterstützen.

#### **Was zu erwarten ist**

Da StarkNet noch in der Entwicklung ist, wollen wir schrittweise Fähigkeiten einführen und sicherstellen, dass die Erwartungen der Entwickler in jedem einzelnen Schritt erfüllt werden. Zwei besonders wichtige Aspekte, die wir hervorheben möchten:

* **Berechtigte Smart Contract Bereitstellung**: Wir folgen dem vernünftigen Spielbuch, das von unseren optimistischen Rollup Kollegen eingeführt wurde: Beginnen Sie mit*genehmigter*Vertragsbereitstellung. Das Protokoll, in dem festgelegt wird, wie Sie die Aufnahme Ihres intelligenten Vertrags in diese erste Whitelist beantragen, wird in den kommenden Wochen veröffentlicht.
* **Keine Garantie für Abwärtskompatibilität**: Wir erwarten, dass der zukünftige Übergang von StarkNet Alpha auf StarkNet Beta die Regenese des Staates einschließt. Das Netzwerk beginnt bei Block 0, und Anwendungen müssen ihre Verträge neu verteilen. Außerdem sollten Entwickler und Benutzer beachten, dass die erwartete StarkNet Beta möglicherweise nicht abwärtskompatibel mit StarkNet Alpha ist, e. . Entwickler müssen möglicherweise ihre Verträge ändern. Natürlich werden wir versuchen, einen einfachen Übergang für Anwendungen mit minimalen erforderlichen Änderungen zu ermöglichen.

#### Zusätzliche Funktionen in der Nähe

Als Teil des Übergangs von StarkNet Alpha von testnet zu Mainnet werden wir Folgendes tun:

1. Konstruktoren zu Verträgen hinzufügen.
2. Verbessern Sie das Test-Framework.
3. Wechseln Sie bei Blöcken und Transaktionen von einer ID zu einem Hash.

Wir planen, den Einsatz neuer Funktionen in einer regulären Kadenz fortzusetzen, so wie wir es im öffentlichen Testnetz getan haben. In naher Zukunft planen wir folgende Upgrades:

1. Kontenverträge und Token Contracts – das öffnet DeFi-Anwendungen die Möglichkeit, mit StarkNet so zu interagieren, wie sie vertraut sind.
2. Verbesserte Vertragsfunktionalität - Unterstützung der Vertragsverbesserung und Veranstaltungen.
3. Warp: Der von Nethermind entwickelte Solidity-to-Kairoer Compiler ermöglicht einen reibungslosen Übergang von Solidy-Smart-Verträgen zu StarkNet-Smart-Verträgen.
4. Ethereum Signaturen: native Unterstützung für ECDSA über secp256k1 ermöglicht eine einfachere Integration in bestehende Wallets.
5. StarkNet Full Node: Ein Full Node ermöglicht Benutzern die Teilnahme am Netzwerk mit Hardwareanforderungen auf der gleichen Höhe wie die eines Ethereum Full Node.

#### Gebührenmechanismus

Der Gebührenmechanismus wird eingeschaltet, sobald bei StarkNet Alpha Kontrakte und Tokenverträge hinzukommen.

Bei allen Transaktionen bei StarkNet wird eine Gebühr erhoben, die zur Deckung von L1- und Offchain-Kosten konzipiert ist. Die Gebühr wird zunächst in ETH berechnet. Die Kosten einer einzelnen Transaktion sinken, wenn StarkNet seine Skala erhöht (wie es auf allen bestehenden STARK-basierten Systemen der Fall ist). Bei der Erstellung der anfänglichen Gebührenmechanismen bevorzugen wir Einfachheit gegenüber der korrekten Preisgestaltung von Transaktionen nach den Ressourcen, die sie verbrauchen. Erwarten Sie, dass dieser Mechanismus im Laufe der Zeit verfeinert und verbessert wird.

Mit dem Blick darauf, StarkNet zu einem nachhaltigen Netzwerk zu machen und seine Betreiber und Entwickler anzureizen, ein Teil der Einnahmen aus den Gebühren wird an Anwendungsentwickler und StarkNet Kernentwickler verteilt.

#### Sicherheit

Das Sicherheitsmodell von StarkNet Alpha auf Mainnet folgt dem aktuellen Modell auf testnet:

* Jeder staatliche Übergang wird durch einen STARK-Nachweis gestützt, so dass die Gültigkeit gewährleistet ist.
* Alle Zustandsdaten werden on-chain veröffentlicht, so dass der Zustand von L1 vollständig konstruierbar ist.
* Es wird einen einzigen Sequenzer geben.
* Das Netzwerk kann ohne Zeitverzögerungen aktualisiert werden.

### Das Ökosystem StarkNet wächst

Die Öffnung von StarkNet für die Welt zog eine massive Welle von Entwicklern, die daran interessiert sind, Kairo zu lernen und über StarkNet zu entwickeln. Sie lieferten unschätzbare Rückmeldungen, und es war eine wahre Freude, lebhafte Diskussionen auf der StarkNet[Discord](https://discord.gg/uJ9HZTUk2Y) zu sehen.

Darüber hinaus wird StarkNet nicht nur vom StarkWare-Team entwickelt, sondern auch von einigen der stärksten Teams im Blockchain-Ökosystem:

* Nethermind arbeitet an zwei Projekten:

1. **[Warp](https://github.com/NethermindEth/warp)**: eine Solidität zum Kairoer Compiler

2. **[Voyager](https://voyager.online/)**: ein StarkNet Blockexplorer

* Open Zeppelin arbeitet an einer[Standard Contracts](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)Implementierung für StarkNet und arbeitet auch an einer Entwicklerumgebung:[Nile](https://github.com/martriay/nile).
* ShardLabs arbeitet an einem[StarkNet HardHat Plugin](https://github.com/Shard-Labs/starknet-hardhat-plugin)und an einem besseren Test-Framework.
* Das Erigon-Team arbeitet daran, ihren Ethereum Full Node zu erweitern und StarkNet (Codename: Fermion) zu unterstützen. Sie arbeiten mit uns an der Entwicklung von Kernmechanismen von StarkNet.
* Equilibrium arbeitet an einer StarkNet Full Node Implementierung in Rust
* Kairoer Auditdienst: In den kommenden Monaten werden ABDK, ConsenSys Diligence, Peckshield und Trail of Bits Kairoer Audits durchführen.
* StarkNet Audits: Wir haben mit der Prüfung der Grundlagen des Netzwerks begonnen:

1. **CryptoExperts**wird eine Prüfung des Soliditätsüberprüfers von Kairo durchführen.
2. Ein formeller**LEAN-Nachweis**der Kairoer Spezifikationen wurde kürzlich abgeschlossen und als[Papier](https://arxiv.org/abs/2109.14534)und ein GitHub[Repo](https://github.com/starkware-libs/formal-proofs) veröffentlicht.

Erwarten Sie weitere interessante Kooperationen in den kommenden Monaten!

### STARKs skalieren heute

Wir nähern uns dem Start von StarkNet Alpha mit Vertrauen, wie StarkEx, unsere eigenständige Skalierung SaaS, gezeigt hat, wie STARKs Ethereum Anwendungen massiv skalieren können. Wir starteten StarkEx für[dYdX](https://dydx.exchange/)(ewige Kontrakte),[DeversiFi](https://www.deversifi.com/)(Spot Trading und Zahlungen) sowie für[Unveränderliche](https://www.immutable.com/)und[Sorare](https://sorare.com/)(NFT-Prägung und Handel). Ihre Gas/tx Kosten wurden um 100X–200X auf etwa 650 Gas/tx in Validium (off-chain data) und 1100 gas/tx für einen ZK-Rollup gesenkt.

Bis heute hat StarkEx $80B im Handel und über 27 Millionen Transaktionen abwickeln und dabei jede andere L2-Lösung in den Schatten gestellt – und alle diese kombiniert.

### Jetzt handeln

Es hat noch nie eine bessere Zeit gegeben, dem wachsenden StarkNet Ökosystem beizutreten, indem du entweder deine nächste dApp oder nützliche Entwicklerwerkzeuge baust.

Wir laden Sie ein:

1. Trete dem[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)bei, wo du die StarkNet Community treffen und einbinden kannst.
2. [Lernen Sie](https://www.cairo-lang.org/docs/hello_starknet/index.html)wie man StarkNet Smart-Verträge schreibt.
3. [DM uns](https://twitter.com/StarkWareLtd)— unser Team ist eifrig darum bemüht, Ihre Ideen und Initiativen zum Leben zu erwecken.

**Update (Nov. 2021):**StarkNet Alpha ist live auf Ethereum Mainnet