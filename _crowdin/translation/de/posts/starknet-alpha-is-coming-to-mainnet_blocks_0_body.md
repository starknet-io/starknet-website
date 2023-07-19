### TL;DR

* Starknet Alpha startet im November auf dem Mainnet Ethereum
* Es ist jetzt an der Zeit, auf Starknet aufzubauen

### Eine kurze Geschichte

Zu Beginn des Jahres haben wir unsere Vision für [Starknet](https://starkware.co/product/starknet/) bekannt gegeben: Ethereum eine enorme Skalierbarkeit zu verleihen und gleichzeitig die L1-Sicherheit, erlaubnislose Interaktionen und die Dezentralisierung zu wahren.\
Wir haben im Juni [Starknet Alpha](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95) auf einem öffentlichen Testnetz veröffentlicht. Diese Version unterstützte vollständig erlaubnislose Smart Contracts für allgemeine Berechnungen. Seitdem haben wir es zweimal aktualisiert: zuerst auf Alpha 1 – Bereitstellung von [L1<>L2-Nachrichten und On-Chain-Daten](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), und dann auf Alpha 2 – Unterstützung [Zusammensetzbarkeit](https://medium.com/starkware/starknet-alpha-2-4aa116f0ecfc).

Starknet Alpha 2 unterstützt jetzt zusammensetzbare Smart Contracts für allgemeine Berechnungen in einem Ethereum-ähnlichen Zustand, mit der Möglichkeit für L1- und L2-Verträge, miteinander zu interagieren. Lesen Sie hier mehr [](https://www.cairo-lang.org/docs/hello_starknet/index.html).

### Was ist Starknet Alpha im Mainnet?

Starknet Alpha im Mainnet wird ähnliche Funktionen unterstützen wie die, die derzeit im öffentlichen Testnetz von Goerli verfügbar sind.

#### Was zu erwarten ist

Da sich Starknet noch in der Entwicklung befindet, möchten wir die Funktionen schrittweise einführen und sicherstellen, dass die Erwartungen der Entwickler bei jedem einzelnen Schritt erfüllt werden. Zwei besonders wichtige Aspekte möchten wir hervorheben:

* Permissioned Smart Contract Deployment: Wir folgen dem sinnvollen Playbook unserer Optimistic Rollup-Kollegen: Beginnen Sie mit dem Permissioned Contract Deployment. Das Protokoll, das festlegt, wie Sie die Aufnahme Ihres Smart-Vertrags in diese erste Whitelist beantragen können, wird in den kommenden Wochen veröffentlicht.
* Keine Garantie für Abwärtskompatibilität: Wir gehen davon aus, dass der zukünftige Übergang von Starknet Alpha zu Starknet Beta eine Neubildung des Staates beinhalten wird. Das Netzwerk beginnt bei Block 0 und Anwendungen müssen ihre Verträge neu bereitstellen. Darüber hinaus sollten Entwickler und Benutzer beachten, dass die erwartete Starknet Beta möglicherweise nicht abwärtskompatibel mit Starknet Alpha ist, z. B. müssen Entwickler möglicherweise ihre Verträge ändern. Selbstverständlich werden wir versuchen, den Anwendungen einen einfachen Übergang mit minimalen erforderlichen Änderungen zu ermöglichen.

#### Zusätzliche kurzfristige Funktionen

Im Rahmen des Übergangs von Starknet Alpha vom Testnet zum Mainnet werden wir:

1. Fügen Sie Konstruktoren zu Verträgen hinzu.
2. Verbessern Sie das Test-Framework.
3. Wechseln Sie bei Blöcken und Transaktionen von der Verwendung einer ID zur Verwendung eines Hashs.

Wir planen, die Bereitstellung neuer Funktionen in regelmäßigen Abständen fortzusetzen, so wie wir es im öffentlichen Testnetz getan haben. Kurzfristig planen wir folgende Upgrades:

1. Kontoverträge und Token-Verträge – eröffnen DeFi-Anwendungen die Möglichkeit, mit Starknet auf die gewohnte Weise zu interagieren.
2. Verbesserte Vertragsfunktionalität – Unterstützung der Vertragsaktualisierbarkeit und -ereignisse.
3. Warp: Der von Nethermind entwickelte Solidity-to-Cairo-Compiler ermöglicht einen reibungslosen Übergang von Solidity-Smart-Verträgen zu Starknet-Smart-Verträgen.
4. Ethereum-Signaturen: Die native Unterstützung von ECDSA über secp256k1 ermöglicht eine einfachere Integration in bestehende Wallets.
5. Starknet Full Node: Ein Full Node ermöglicht Benutzern die Teilnahme am Netzwerk mit Hardwareanforderungen, die denen eines Ethereum Full Node entsprechen.

#### Gebührenmechanismus

Der Gebührenmechanismus wird aktiviert, sobald Kontoverträge und Token-Verträge zu Starknet Alpha hinzugefügt werden.

Für alle an Starknet übermittelten Transaktionen wird eine Gebühr erhoben, die die L1- und Off-Chain-Kosten abdeckt. Die Gebühr wird zunächst in ETH erhoben. Die Kosten einer einzelnen Transaktion werden sinken, wenn Starknet seinen Umfang vergrößert (wie es bei allen bestehenden STARK-basierten Systemen der Fall ist). Bei der Gestaltung der anfänglichen Gebührenmechanismen bevorzugen wir Einfachheit gegenüber einer genauen Preisgestaltung für Transaktionen entsprechend den von ihnen verbrauchten Ressourcen. Erwarten Sie, dass dieser Mechanismus im Laufe der Zeit verfeinert und verbessert wird.

Mit dem Ziel, Starknet zu einem nachhaltigen Netzwerk zu machen und Anreize für seine Betreiber und Entwickler zu schaffen, wird ein Teil der Einnahmen aus den Gebühren an Anwendungsentwickler und Starknet-Kernentwickler verteilt.

#### Sicherheit

Das Sicherheitsmodell von Starknet Alpha im Mainnet folgt dem aktuellen Modell im Testnet:

* Jeder Zustandsübergang wird durch einen STARK-Beweis abgesichert und ist somit gültig.
* Alle Zustandsdaten werden in der Kette veröffentlicht, sodass der Zustand von L1 aus vollständig konstruierbar ist.
* Es wird einen einzigen Sequenzer geben.
* Das Netzwerk ist ohne Zeitverzögerung erweiterbar.

### Das Starknet-Ökosystem wächst

Die Öffnung von Starknet für die Welt zog eine riesige Welle von Entwicklern an, die daran interessiert waren, Cairo kennenzulernen und über Starknet zu entwickeln. Sie lieferten unschätzbares Feedback und es war eine wahre Freude, lebhafte Diskussionen auf dem Starknet [Discord](https://discord.gg/uJ9HZTUk2Y)zu sehen.

Darüber hinaus wird Starknet nicht nur vom StarkWare-Team, sondern auch von einigen der stärksten Teams im Blockchain-Ökosystem entwickelt:

* Nethermind arbeitet an zwei Projekten:\
  \
  1. [Warp](https://github.com/NethermindEth/warp): ein Solidity to Cairo-Compiler\
     \
  2. [Voyager](https://voyager.online/): ein Starknet-Block-Explorer
* Open Zeppelin arbeitet an einer [Standard Contracts](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts) Implementierung für Starknet und hat auch mit der Arbeit an einer Entwicklerumgebung begonnen: [Nile](https://github.com/martriay/nile).
* ShardLabs arbeitet an einem [Starknet HardHat-Plugin](https://github.com/Shard-Labs/starknet-hardhat-plugin) und an einem besseren Test-Framework.
* Das Erigon-Team arbeitet an der Erweiterung seines Ethereum Full Node, um Starknet (Codename: Fermion) zu unterstützen. Sie arbeiten mit uns an der Entwicklung der Kernmechanismen von Starknet.
* Equilibrium arbeitet an einer Starknet Full Node-Implementierung in Rust.
* Prüfungsdienste in Kairo: In den kommenden Monaten werden ABDK, ConsenSys Diligence, Peckshield und Trail of Bits Prüfungen in Kairo durchführen.
* Starknet-Audits: Wir begannen mit der Prüfung der Grundlagen des Netzwerks:

1. CryptoExperts wird eine Prüfung des Cairo Solidity Verifier durchführen.
2. Ein formeller LEAN-Beweis der Kairo-Spezifikationen wurde kürzlich fertiggestellt und als [Paper](https://arxiv.org/abs/2109.14534) und GitHub [Repo](https://github.com/starkware-libs/formal-proofs)veröffentlicht.

Erwarten Sie, dass in den kommenden Monaten noch viele weitere interessante Kooperationen veröffentlicht werden!

### STARKs skalieren heute

Wir gehen mit Zuversicht auf den Start von Starknet Alpha, da StarkEx, unser eigenständiges Skalierungs-SaaS, gezeigt hat, wie STARKs Ethereum-Anwendungen massiv skalieren können. Wir haben StarkEx für [dYdX](https://dydx.exchange/) (unbefristete Verträge), [DeversiFi](https://www.deversifi.com/) (Spot-Handel und Zahlungen) sowie für [Immutable](https://www.immutable.com/) und [Sorare](https://sorare.com/) (NFT-Prägung und -Handel) eingeführt. Wir haben gesehen, dass ihre Gas-/Sendekosten um das 100- bis 200-fache gesenkt wurden, auf etwa 650 Gas/Sendekosten in Validium (Off-Chain-Daten) und 1100 Gas/Sendekosten für einen ZK-Rollup.

Bis heute hat StarkEx 80 Milliarden US-Dollar an Trades und über 27 Millionen Transaktionen abgewickelt und damit jede andere L2-Lösung bei weitem in den Schatten gestellt – und zwar alle zusammen.

### Handel jetzt

Es gab noch nie einen besseren Zeitpunkt, sich dem wachsenden Starknet-Ökosystem anzuschließen, indem Sie entweder Ihre nächste dApp oder nützliche Entwicklertools erstellen.

Wir laden Sie ein:

1. Treten Sie dem [Starknet Discord](https://discord.gg/uJ9HZTUk2Y)bei, wo Sie die Starknet-Community treffen und engagieren können.
2. [Beginnen Sie mit dem Lernen](https://www.cairo-lang.org/docs/hello_starknet/index.html) , wie man Starknet-Smart-Verträge schreibt.
3. [DM uns](https://twitter.com/StarkWareLtd) – unser Team ist bestrebt, Ihre Ideen und Initiativen zum Leben zu erwecken.

Update (November 2021): Starknet Alpha ist live im Ethereum Mainnet



### TL;DR

* Starknet Alpha startet im November auf dem Mainnet Ethereum
* Es ist jetzt an der Zeit, auf Starknet aufzubauen

### Eine kurze Geschichte

Zu Beginn des Jahres haben wir unsere Vision für [Starknet](https://starkware.co/product/starknet/) bekannt gegeben: Ethereum eine enorme Skalierbarkeit zu verleihen und gleichzeitig die L1-Sicherheit, erlaubnislose Interaktionen und die Dezentralisierung zu wahren.\
Wir haben im Juni [Starknet Alpha](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95) auf einem öffentlichen Testnetz veröffentlicht. Diese Version unterstützte vollständig erlaubnislose Smart Contracts für allgemeine Berechnungen. Seitdem haben wir es zweimal aktualisiert: zuerst auf Alpha 1 – Bereitstellung von [L1<>L2-Nachrichten und On-Chain-Daten](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), und dann auf Alpha 2 – Unterstützung [Zusammensetzbarkeit](https://medium.com/starkware/starknet-alpha-2-4aa116f0ecfc).

Starknet Alpha 2 unterstützt jetzt zusammensetzbare Smart Contracts für allgemeine Berechnungen in einem Ethereum-ähnlichen Zustand, mit der Möglichkeit für L1- und L2-Verträge, miteinander zu interagieren. Lesen Sie hier mehr [](https://www.cairo-lang.org/docs/hello_starknet/index.html).

### Was ist Starknet Alpha im Mainnet?

Starknet Alpha im Mainnet wird ähnliche Funktionen unterstützen wie die, die derzeit im öffentlichen Testnetz von Goerli verfügbar sind.

#### Was zu erwarten ist

Da sich Starknet noch in der Entwicklung befindet, möchten wir die Funktionen schrittweise einführen und sicherstellen, dass die Erwartungen der Entwickler bei jedem einzelnen Schritt erfüllt werden. Zwei besonders wichtige Aspekte möchten wir hervorheben:

* Permissioned Smart Contract Deployment: Wir folgen dem sinnvollen Playbook unserer Optimistic Rollup-Kollegen: Beginnen Sie mit dem Permissioned Contract Deployment. Das Protokoll, das festlegt, wie Sie die Aufnahme Ihres Smart-Vertrags in diese erste Whitelist beantragen können, wird in den kommenden Wochen veröffentlicht.
* Keine Garantie für Abwärtskompatibilität: Wir gehen davon aus, dass der zukünftige Übergang von Starknet Alpha zu Starknet Beta eine Neubildung des Staates beinhalten wird. Das Netzwerk beginnt bei Block 0 und Anwendungen müssen ihre Verträge neu bereitstellen. Darüber hinaus sollten Entwickler und Benutzer beachten, dass die erwartete Starknet Beta möglicherweise nicht abwärtskompatibel mit Starknet Alpha ist, z. B. müssen Entwickler möglicherweise ihre Verträge ändern. Selbstverständlich werden wir versuchen, den Anwendungen einen einfachen Übergang mit minimalen erforderlichen Änderungen zu ermöglichen.

#### Zusätzliche kurzfristige Funktionen

Im Rahmen des Übergangs von Starknet Alpha vom Testnet zum Mainnet werden wir:

1. Fügen Sie Konstruktoren zu Verträgen hinzu.
2. Verbessern Sie das Test-Framework.
3. Wechseln Sie bei Blöcken und Transaktionen von der Verwendung einer ID zur Verwendung eines Hashs.

Wir planen, die Bereitstellung neuer Funktionen in regelmäßigen Abständen fortzusetzen, so wie wir es im öffentlichen Testnetz getan haben. Kurzfristig planen wir folgende Upgrades:

1. Kontoverträge und Token-Verträge – eröffnen DeFi-Anwendungen die Möglichkeit, mit Starknet auf die gewohnte Weise zu interagieren.
2. Verbesserte Vertragsfunktionalität – Unterstützung der Vertragsaktualisierbarkeit und -ereignisse.
3. Warp: Der von Nethermind entwickelte Solidity-to-Cairo-Compiler ermöglicht einen reibungslosen Übergang von Solidity-Smart-Verträgen zu Starknet-Smart-Verträgen.
4. Ethereum-Signaturen: Die native Unterstützung von ECDSA über secp256k1 ermöglicht eine einfachere Integration in bestehende Wallets.
5. Starknet Full Node: Ein Full Node ermöglicht Benutzern die Teilnahme am Netzwerk mit Hardwareanforderungen, die denen eines Ethereum Full Node entsprechen.

#### Gebührenmechanismus

Der Gebührenmechanismus wird aktiviert, sobald Kontoverträge und Token-Verträge zu Starknet Alpha hinzugefügt werden.

Für alle an Starknet übermittelten Transaktionen wird eine Gebühr erhoben, die die L1- und Off-Chain-Kosten abdeckt. Die Gebühr wird zunächst in ETH erhoben. Die Kosten einer einzelnen Transaktion werden sinken, wenn Starknet seinen Umfang vergrößert (wie es bei allen bestehenden STARK-basierten Systemen der Fall ist). Bei der Gestaltung der anfänglichen Gebührenmechanismen bevorzugen wir Einfachheit gegenüber einer genauen Preisgestaltung für Transaktionen entsprechend den von ihnen verbrauchten Ressourcen. Erwarten Sie, dass dieser Mechanismus im Laufe der Zeit verfeinert und verbessert wird.

Mit dem Ziel, Starknet zu einem nachhaltigen Netzwerk zu machen und Anreize für seine Betreiber und Entwickler zu schaffen, wird ein Teil der Einnahmen aus den Gebühren an Anwendungsentwickler und Starknet-Kernentwickler verteilt.

#### Sicherheit

Das Sicherheitsmodell von Starknet Alpha im Mainnet folgt dem aktuellen Modell im Testnet:

* Jeder Zustandsübergang wird durch einen STARK-Beweis abgesichert und ist somit gültig.
* Alle Zustandsdaten werden in der Kette veröffentlicht, sodass der Zustand von L1 aus vollständig konstruierbar ist.
* Es wird einen einzigen Sequenzer geben.
* Das Netzwerk ist ohne Zeitverzögerung erweiterbar.

### Das Starknet-Ökosystem wächst

Die Öffnung von Starknet für die Welt zog eine riesige Welle von Entwicklern an, die daran interessiert waren, Cairo kennenzulernen und über Starknet zu entwickeln. Sie lieferten unschätzbares Feedback und es war eine wahre Freude, lebhafte Diskussionen auf dem Starknet [Discord](https://discord.gg/uJ9HZTUk2Y)zu sehen.

Darüber hinaus wird Starknet nicht nur vom StarkWare-Team, sondern auch von einigen der stärksten Teams im Blockchain-Ökosystem entwickelt:

* Nethermind arbeitet an zwei Projekten:\
  \
  1. [Warp](https://github.com/NethermindEth/warp): ein Solidity to Cairo-Compiler\
     \
  2. [Voyager](https://voyager.online/): ein Starknet-Block-Explorer
* Open Zeppelin arbeitet an einer [Standard Contracts](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts) Implementierung für Starknet und hat auch mit der Arbeit an einer Entwicklerumgebung begonnen: [Nile](https://github.com/martriay/nile).
* ShardLabs arbeitet an einem [Starknet HardHat-Plugin](https://github.com/Shard-Labs/starknet-hardhat-plugin) und an einem besseren Test-Framework.
* Das Erigon-Team arbeitet an der Erweiterung seines Ethereum Full Node, um Starknet (Codename: Fermion) zu unterstützen. Sie arbeiten mit uns an der Entwicklung der Kernmechanismen von Starknet.
* Equilibrium arbeitet an einer Starknet Full Node-Implementierung in Rust.
* Prüfungsdienste in Kairo: In den kommenden Monaten werden ABDK, ConsenSys Diligence, Peckshield und Trail of Bits Prüfungen in Kairo durchführen.
* Starknet-Audits: Wir begannen mit der Prüfung der Grundlagen des Netzwerks:

1. CryptoExperts wird eine Prüfung des Cairo Solidity Verifier durchführen.
2. Ein formeller LEAN-Beweis der Kairo-Spezifikationen wurde kürzlich fertiggestellt und als [Paper](https://arxiv.org/abs/2109.14534) und GitHub [Repo](https://github.com/starkware-libs/formal-proofs)veröffentlicht.

Erwarten Sie, dass in den kommenden Monaten noch viele weitere interessante Kooperationen veröffentlicht werden!

### STARKs skalieren heute

Wir gehen mit Zuversicht auf den Start von Starknet Alpha, da StarkEx, unser eigenständiges Skalierungs-SaaS, gezeigt hat, wie STARKs Ethereum-Anwendungen massiv skalieren können. Wir haben StarkEx für [dYdX](https://dydx.exchange/) (unbefristete Verträge), [DeversiFi](https://www.deversifi.com/) (Spot-Handel und Zahlungen) sowie für [Immutable](https://www.immutable.com/) und [Sorare](https://sorare.com/) (NFT-Prägung und -Handel) eingeführt. Wir haben gesehen, dass ihre Gas-/Sendekosten um das 100- bis 200-fache gesenkt wurden, auf etwa 650 Gas/Sendekosten in Validium (Off-Chain-Daten) und 1100 Gas/Sendekosten für einen ZK-Rollup.

Bis heute hat StarkEx 80 Milliarden US-Dollar an Trades und über 27 Millionen Transaktionen abgewickelt und damit jede andere L2-Lösung bei weitem in den Schatten gestellt – und zwar alle zusammen.

### Handel jetzt

Es gab noch nie einen besseren Zeitpunkt, sich dem wachsenden Starknet-Ökosystem anzuschließen, indem Sie entweder Ihre nächste dApp oder nützliche Entwicklertools erstellen.

Wir laden Sie ein:

1. Treten Sie dem [Starknet Discord](https://discord.gg/uJ9HZTUk2Y)bei, wo Sie die Starknet-Community treffen und engagieren können.
2. [Beginnen Sie mit dem Lernen](https://www.cairo-lang.org/docs/hello_starknet/index.html) , wie man Starknet-Smart-Verträge schreibt.
3. [DM uns](https://twitter.com/StarkWareLtd) – unser Team ist bestrebt, Ihre Ideen und Initiativen zum Leben zu erwecken.

Update (November 2021): Starknet Alpha ist live im Ethereum Mainnet