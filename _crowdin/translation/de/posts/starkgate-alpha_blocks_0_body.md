### TL;DR

* Die erste Version von StarkNet Bridge, StarkGate Alpha, ist auf**[Testnet](https://goerli.starkgate.starknet.io/)**und auf**[Mainnet](https://starkgate.starknet.io/)**live!
* Wir warten auf das Feedback der Community, wie Dinge verbessert werden können. Sie können Ihr Feedback sowohl für[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)als auch für[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx)senden.
* Die Mainnet-Bereitstellung folgt in Kürze (Update, 9. Mai 2022: StarkGate ist live im Mainnet)

Aufregung! Wir freuen uns, StarkGate Alpha, die erste Version von StarkNets Bridge, jetzt live im Goerli-Testnetz zu veröffentlichen. Die Bereitstellung im Mainnet folgt bald.*

\*(Update, 9. Mai 2022: StarkGate ist live im Mainnet)

**Wichtiger Haftungsausschluss: Dies ist eine Alpha-Version von StarkGate Alpha (lesen Sie das Kleingedruckte unten!).**

![](/assets/starkgate_01.png)

Bevor Sie fortfahren, schauen Sie es sich an! [StarkGate Testnet](https://goerli.starkgate.starknet.io/),[StarkGate Mainnet](https://starkgate.starknet.io/)

StarkGate dient als Gateway zwischen Ethereum und[StarkNet](https://starknet.io/)und ermöglicht Benutzern, alles zu tun, was sie von einer Brücke erwarten können.

#### **Wo finde ich Informationen zur Funktionsweise von StarkGate?**

Um zu verstehen, wie StarkGate funktioniert, lesen Sie die[technische Dokumentation](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)und werfen Sie einen Blick auf den[Code](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate). Beachten Sie, dass dies die erste Version ist. Wir freuen uns über Ihr Feedback und Ihre Vorschläge zur Verbesserung von[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)und[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).

#### **Welche Token werden von StarkGate unterstützt?**

* StarkGate Alpha auf Goerli unterstützt ETH und einige andere ERC-20-Token. Die vollständige Liste und die relevanten Vertragsadressen, sowohl auf Ethereum als auch auf StarkNet, sind in diesem[Repo](https://github.com/starkware-libs/starknet-addresses)verfügbar.
* Im Mainnet wird StarkGate Alpha zunächst nur ETH unterstützen, um die Nutzung des Gebührenmechanismus zu ermöglichen. Später werden wir Unterstützung für WBTC, USDC, USDT und DAI hinzufügen. Die entsprechenden Vertragsadressen können Sie diesem[Repo](https://github.com/starkware-libs/starknet-addresses/blob/master/bridged_tokens/mainnet.json)entnehmen.

Zu einem späteren Zeitpunkt werden wir den Mechanismus zum Hinzufügen von Unterstützung für zusätzliche Token veröffentlichen.

#### **Welche Sicherheitseinschränkungen wird StarkGate Alpha im Mainnet haben?**

StarkGate Alpha im Mainnet wird mit zwei Einschränkungen gestartet – um die Risiken zu reduzieren, die mit der Verwendung einer Alpha-Version verbunden sind:

1. Der in der Brücke auf L1 gesperrte Gesamtwert (TVL) begrenzt die Menge jedes Tokentyps.
2. Der maximale Betrag in jeder Transaktion, die über StarkGate von L1 an L2 (Ethereum→StarkNet) gesendet wird, ist begrenzt.

Wir planen, diese Einschränkungen schrittweise zu lockern und mit zunehmendem Selbstvertrauen ganz aufzuheben. Die aktualisierten Parameter finden Sie in der[Dokumentation](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)von StarkGate.

![](/assets/starkgate_02.png)

### Alpha und was es bedeutet

Wie immer möchten wir Sie daran erinnern, dass sich StarkNet derzeit in der Phase**Alpha**befindet:

* Dinge können kaputt gehen. Wenn sie katastrophal ausfallen, könnte Ihr Geld verloren gehen (**, lesen Sie den Haftungsausschluss unten,**!).
* Sowohl StarkNet Alpha- als auch StarkGate-Verträge können ohne Zeitsperre aktualisiert werden. Wir rechnen zwar damit, solche Upgrades lange im Voraus anzukündigen, doch im Falle drohender Sicherheitsrisiken (z. B. wenn ein kritischer Fehler gefunden wird) kann das Upgrade ohne oder mit geringer Vorwarnung durchgeführt werden.
* Der Code der Brücke sowie Teile von StarkNet Alpha wurden noch nicht geprüft. Die ABDK- und Nethermind-Prüfungen von StarkGate Alpha werden bald abgeschlossen sein.

Wir ermutigen alle Benutzer, zur Verbesserung der Brücke beizutragen, indem sie ihr Feedback über eine der folgenden Plattformen abgeben:

1. [StarkGate-Frontend-Repo](https://github.com/starkware-libs/starkgate-frontend)
2. [StarkGate Contracts Repo](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate)
3. [StarkNet-Schamanen](http://community.starknet.io/)

Für Fragen und Entwicklerunterstützung treten Sie dem[StarkNet-Discord-Server](https://discord.gg/uJ9HZTUk2Y)bei.

### Haftungsausschluss

***StarkNet Alpha ist ein neues und komplexes System, das noch nicht vollständig geprüft wurde. Gleiches gilt für die StarkNet Bridge. Wie alle komplexen Softwaresysteme können sowohl StarkNet als auch die Bridge Fehler enthalten, die im Extremfall zum Verlust aller Ihrer Gelder führen können. ***Sie also vorsichtig und seien Sie vorsichtig!******

*Das StarkNet-Ökosystem besteht aus einer großen und schnell wachsenden Gruppe unabhängiger Teams und Einzelpersonen, über die StarkWare keine Aufsicht hat und keine Verantwortung übernimmt. Jedes der von Ökosystemmitgliedern entwickelten Projekte kann Fehler enthalten, die im Extremfall zum Verlust aller Ihrer Gelder führen können. Darüber hinaus steigt mit der Einführung immer mehr Smart Contracts das Potenzial für unbeabsichtigte schädliche Fehler und sogar böswillige Betrügereien und Rug Pulls. Behandeln Sie also alle Smart Contracts auf StarkNet so, wie Sie Smart Contracts auf Ethereum behandeln, und verwenden Sie nur solche, bei denen Sie guten Grund haben, dass sie sicher sind.*