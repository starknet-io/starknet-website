### TL;DR

* Die erste Version von StarkNet Bridge, StarkGate Alpha, ist live auf**[Testnet](https://goerli.starkgate.starknet.io/)**und auf**[Mainnet](https://starkgate.starknet.io/)**!
* Wir erwarten Feedback der Community darüber, wie die Dinge verbessert werden können. Sie können Ihr Feedback für[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)und[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx) senden.
* Mainnet-Bereitstellung wird bald folgen (Update, 9. Mai 2022: StarkGate ist live auf Mainnet)

Erstaunlich! Wir sind begeistert, StarkGate Alpha, die erste Version von StarkNet’s Bridge, zu veröffentlichen, jetzt live auf Goerli testnet, wobei der Einsatz von Mainnet bald folgen wird.*

\*(Update, 9. Mai 2022: StarkGate ist live auf Mainnet)

**Wichtiger Haftungsausschluss: Dies ist eine Alpha-Version auf StarkGate Alpha (lesen Sie unten den Feindruck!).**

![](/assets/starkgate_01.png)

Bevor Sie fortfahren, checken Sie es aus! [StarkGate Testnet](https://goerli.starkgate.starknet.io/),[StarkGate Mainnet](https://starkgate.starknet.io/)

StarkGate dient als Tor zwischen Ethereum und[StarkNet](https://starknet.io/)und erlaubt Benutzern alles zu tun, was sie von einer Brücke erwarten können.

#### **Wo finde ich Informationen darüber, wie StarkGate funktioniert?**

Um zu verstehen, wie StarkGate funktioniert, lesen Sie die[technische Dokumentation](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)und werfen Sie einen Blick auf den[Code](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate). Beachten Sie, dass dies die erste Version ist und wir laden Ihr Feedback und Vorschläge ein, wie Sie[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)und[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx) verbessern können.

#### **Welche Token werden von StarkGate unterstützt?**

* StarkGate Alpha auf Goerli unterstützt ETH und einige andere ERC-20-Tokens. Die vollständige Liste und die entsprechenden Vertragsadressen, sowohl auf Ethereum als auch auf StarkNet, sind in diesem[Repo](https://github.com/starkware-libs/starknet-addresses) verfügbar.
* Auf Mainnet wird StarkGate Alpha zunächst nur ETH unterstützen, um die Nutzung des Gebührenmechanismus zu ermöglichen. Später werden wir Unterstützung für WBTC, USDC, USDT und DAI hinzufügen. Die entsprechenden Vertragsadressen finden Sie in diesem[Repo](https://github.com/starkware-libs/starknet-addresses/blob/master/bridged_tokens/mainnet.json).

Weiter auf dem Weg werden wir den Mechanismus veröffentlichen, mit dem zusätzliche Tokens unterstützt werden können.

#### **Welche Sicherheitsbeschränkungen wird StarkGate Alpha in Mainnet haben?**

StarkGate Alpha auf Mainnet wird mit zwei Einschränkungen gestartet — um die Risiken bei der Verwendung einer Alpha-Version zu verringern:

1. Der gesperrte Gesamtwert (TVL) in der Bridge auf L1 limitiert die Anzahl der Token Typen.
2. Der maximale Betrag für jede Transaktion von L1 auf L2 (Ethereum→ StarkNet) über StarkGate wird begrenzt.

Wir planen, diese Einschränkungen schrittweise abzubauen und mit wachsendem Vertrauen vollständig aufzuheben. Die aktualisierten Parameter finden Sie in der Dokumentation[von StarkGate](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge).

![](/assets/starkgate_02.png)

### Alpha und was es bedeutet

Wie immer erinnern wir Sie daran, dass sich StarkNet derzeit in der**Alpha**Phase befinde:

* Die Dinge können kaputt gehen. Wenn sie katastrophal scheitern, könnte Ihr Geld verloren gehen (**lesen Sie den Haftungsausschluss unten**!).
* Sowohl StarkNet Alpha als auch StarkGate Verträge können ohne Timelock aufgerüstet werden. Obwohl wir erwarten, dass wir solche Upgrades rechtzeitig ankündigen, im Falle von bevorstehenden Sicherheitsrisiken (zum Beispiel wenn ein kritischer Fehler gefunden wird), kann das Upgrade mit wenig oder gar keiner Warnung angewendet werden.
* Der Code der Brücke sowie Teile von StarkNet Alpha wurden noch nicht geprüft. Die Prüfungen von ABDK und Nethermind von StarkGate Alpha werden bald abgeschlossen sein.

Wir ermutigen alle Benutzer, die Brücke zu verbessern, indem wir ihr Feedback über eine der folgenden Plattformen geben:

1. [StarkGate Frontend Repo](https://github.com/starkware-libs/starkgate-frontend)
2. [StarkGate Vertragsrepo](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate)
3. [StarkNet Schamanen](http://community.starknet.io/)

Bei Fragen und dev-Support betreten Sie den[StarkNet Discord Server](https://discord.gg/uJ9HZTUk2Y).

### Haftungsausschluss

***StarkNet Alpha ist ein neues und komplexes System, das noch nicht vollständig geprüft wurde. Dasselbe gilt für die StarkNet Brücke. Wie alle komplexen Softwaresysteme können sowohl StarkNet als auch die Bridge Fehler enthalten, die in Extremfällen zu einem Verlust aller Ihrer Mittel führen könnte. Also***vorsichtig herumreiten und Vorsicht!******

*Das StarkNet Ökosystem ist eine große und schnell wachsende Gruppe unabhängiger Teams und Einzelpersonen, über die StarkWare keine Aufsicht hat und keine Verantwortung übernimmt. Jedes der Projekte, die von Ökosystem-Mitgliedern entwickelt wurden, kann Fehler enthalten, die in Extremfällen zu einem Verlust aller Ihrer Gelder führen könnten. Darüber hinaus erhöht sich mit intelligenteren Verträgen das Potenzial für unbeabsichtigte schädliche Fehler und sogar böswillige Betrügereien und Teppiche. Also behandeln Sie alle intelligenten Verträge auf StarkNet bei der Behandlung intelligenter Verträge auf Ethereum, und verwenden Sie nur solche, denen Sie gute Gründe haben, als sicher zu vertrauen.*