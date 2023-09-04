## Einführung

Speichernachweise sind eine kryptografische Möglichkeit, Blockchain-Informationen zu verfolgen, damit sie kettenübergreifend geteilt werden können. Ähnlich wie Orakel liefern Speicherbeweise den Beweis, dass die Informationen wahr sind. Im Gegensatz zu Orakeln erfordern sie für diesen Beweis jedoch**Vertrauen in einen Dritten; Vielmehr wird bei Speichernachweisen das Vertrauen in den Speicher eingebaut.

In manchen Fällen können Speicherbeweise Orakel ersetzen. In anderen Fällen können Speichernachweise sie verbessern und neue Blockchain-Anwendungsfälle eröffnen, die zuvor nicht möglich waren.

Werfen wir also einen detaillierten Blick auf Speichernachweise – was sie sind, wie sie funktionieren, welche Anwendungsfälle sie haben und wie sie Orakel verbessern (und manchmal ersetzen) können.

## Was sind Lagernachweise?

Mit Speichernachweisen können Sie kryptografische Staatsverpflichtungen öffnen. Sie können durch die Verbindung mit S\[N/T]ARKS optimiert werden. . Diese Gültigkeitsnachweise beweisen, dass ein bestimmter Zustand in der Vergangenheit in einem bestimmten Block existierte und gültig war.

Grundsätzlich handelt es sich bei Blockchains um Datenbanken, die kryptografisch mithilfe von Merkle-Bäumen, Merkle-Patricia-Bäumen, Verkle-Bäumen usw. übermittelte Daten enthalten. Da alle Daten festgeschrieben sind, können wir nachweisen, dass einige Informationen in einem bestimmten Zustand gekapselt sind. Bei einfachen Commitment-Schemata wird der Umfang dieses Beweises jedoch umso wichtiger, je größer die darin enthaltenen Daten sind. Die Überprüfung solcher Beweise in der Kette wird zu teuer, um praktikabel zu sein.

Speichernachweise hingegen können, wenn sie in Verbindung mit STARKs oder SNARKs verwendet werden, relativ klein sein und ermöglichen es Ihnen, einen bestimmten Zustand zu einem bestimmten Zeitpunkt und in jeder Domäne zu überprüfen – ohne einem Dritten zu vertrauen . Anstelle von Dritten verlassen sie sich auf die Sicherheit der zugrunde liegenden Kette selbst.

Warum ist das wichtig? Ethereum ist heute nicht mehr die einfache monolithische Kette (L1) wie vor einigen Jahren. Mit dem Aufkommen von L2-Lösungen sind die Daten nun über mehrere Ketten verteilt.

Synchrone Annahmen über den Zustand der Kette können nicht mehr getroffen werden. Viele Lösungen für den Datenaustausch sind jetzt live, wie z. B.>L2-Messaging-Systeme, Cross-Chain-Bridges und Orakel. Das Problem bei diesen aktuellen Lösungen besteht jedoch darin, dass sie Vertrauen in Dritte wie Relayer, Multisig-Unterzeichner und Komitees beinhalten. Speichernachweise ermöglichen es uns, den Zustand einer Blockchain zu jedem Zeitpunkt mithilfe kryptografischer Verpflichtungen zu validieren, wobei wir davon ausgehen, dass kein Vertrauen in Dritte besteht.

## Die Anwendungsfälle für Speichernachweise

Da Speichernachweise es uns ermöglichen, eine Blockchain effizient zu „komprimieren“ und die Daten an einen anderen Ort zu übertragen, gibt es für sie zahlreiche Anwendungen. Die erschwinglichen Verifizierungskosten, eine wesentliche Eigenschaft von Speichernachweisen, ermöglichen die Validierung des Nachweises auf der*Ziel-*Kette, wodurch die Notwendigkeit der Entwicklung kettenübergreifender Nachrichtensysteme minimiert wird.

Mögliche Anwendungsfälle sind:

* **Allgemeiner Informationszugriff**einer Kette von einer anderen über Status und Transaktionen auf der Blockchain.
* **Vereinfachte kettenübergreifende Abstimmungssysteme**. Häufig halten Benutzer ihre Vermögenswerte auf einer langsamen, aber sichereren Kette A, einige tokenbasierte Abstimmungen finden jedoch auf einer Kette B mit günstigeren Transaktionen statt. Dies zwingt den Benutzer dazu, entweder seine Stimme zu überspringen oder hohe Transaktionsgebühren zu zahlen, um sein Vermögen von A nach B zu überbrücken, seine Stimme abzugeben und sie dann zurück an A zu überbrücken. In solchen Fällen ermöglichen Speichernachweise Benutzern, ihr Token-Guthaben in Kette A nachzuweisen an einem bestimmten Block und geben nahtlos ihre Stimme auf Kette B ab.
* **Alternative zu Cross-Chain-Brücken**. Derzeit setzen Cross-Chain-Brücken ein gewisses Maß an Vertrauen in einen Dritten voraus, da sie typischerweise einen Vermittler wie eine Depotbank oder eine dezentrale autonome Organisation (DAO) einbeziehen. Dieser Vermittler ist dafür verantwortlich, sicherzustellen, dass der Vermittler eine bestimmte Menge an Token in der Quellkette erhält, und die Vermögenswerte in der Quellkette zu halten. Anschließend werden die entsprechenden Token in der Zielkette geprägt. Speichernachweise können vertrauenswürdige Cross-Chain-Brücken ermöglichen, da eine Smart-Contract-Anwendung in der Zielkette eine Transaktion validieren könnte, bei der Vermögenswerte an den Bridge-Smart-Vertrag in der Quellkette übertragen wurden, und die überbrückten Vermögenswerte prägen könnte. In vielen Fällen kann jedoch die Notwendigkeit der Übertragung von Vermögenswerten zwischen Ketten entfallen, da das Eigentum an Vermögenswerten in einer anderen Kette einfach durch Speichernachweise nachgewiesen werden kann.
* **Erweiterte UX für Anwendungsfälle der Kontoabstraktion (AA)**. AA wurde in verschiedenen Ketten implementiert und gilt als entscheidende Innovation bei der Einbindung der ersten Milliarde Benutzer in den Blockchain-Bereich. Mit Speichernachweisen könnten Wallets die zusätzliche Funktionalität beinhalten, den Zugriff nur dann wiederherzustellen, wenn das Wallet über einen längeren Zeitraum keine Transaktionen gesendet hat. Es könnten auch zusätzliche Prüfungen erzwungen werden, die erfordern, dass einige Daten von anderen Ketten verwendet werden.

![Typisches Strömungsbild einer Querbrücke](/assets/typical-cross.bridge-flog-imagewebp.webp "Typisches Strömungsbild einer Querbrücke")

## Ein Beispiel für einen Aufbewahrungsnachweis

Das Generieren von Speichernachweisen für EVM-kompatible Ketten ist unkompliziert. Beispielsweise verfügt die Web3.js-Bibliothek über die Funktion „getProof“, die einen Nachweis des Vertragsstatus auf Ethereum (und anderen EVM-kompatiblen Ketten wie Polygon oder BSC) generieren kann. Der Funktion müssen eine Vertragsadresse und der Speicherplatz für den Vertrag übergeben werden.

In Ethereum verwenden intelligente Verträge einen Schlüsselwertspeicher, um Daten in ihrem Speicher zu speichern. Jedes Datenelement wird an einem bestimmten Ort gespeichert, der als „Speicherplatz“ bezeichnet wird. Speicherplätze sind Speicherorte innerhalb des Vertragsspeichers und werden durch einen eindeutigen Index identifiziert. Schauen wir uns einen Beispiel-Smart-Vertrag mit dem folgenden Code an, der im Ethereum-Mainnet unter[0xcc…da8b](https://etherscan.io/address/0xcca577ee56d30a444c73f8fc8d5ce34ed1c7da8b#code)bereitgestellt wird.

![](/assets/blog-post-image-2-.webp)

Die Variable \`owner\` würde in Steckplatz 0 gespeichert. Um nun den Beweis zu generieren, dass der „Eigentümer“ dieses Vertrags eine Adresse A war, können wir die Funktion „getProof“ wie folgt verwenden:

![](/assets/blog-post-image-3-.webp)

\
Die Ausgabe des obigen Codes sieht in etwa so aus:

![](/assets/blog-post-image-4-.webp)

Der zurückgegebene „storageProof“ enthält den Speichernachweis für die Variable „owner“. Da Ethereum Merkle Patricia Trees verwendet, um den Status von Konten und deren Speicher in seinem Status festzulegen, kann der generierte Speicher zum Nachweis eines Speicherplatzes (oder Kontostatus) verwendet werden. Allerdings sind diese Beweise, wie bereits erwähnt, nicht skalierbar genug, um kettenübergreifende Nachrichtenübertragungen zu diskutieren. Die darüber hinausgehende Verwendung komplexer ZK-Mathematik kann den zur Überprüfung des Beweises erforderlichen Rechenaufwand verringern.

## Wie vergleichen und kontrastieren Speicherbeweise also mit Orakeln?

Blockchains können aufgrund ihres Designs keine Off-Chain-Daten abrufen. Dies sorgt dafür, dass eine Blockchain nicht vertrauenswürdig ist, schränkt aber auch die Fähigkeit eines Smart Contracts ein, Entscheidungen auf der Grundlage realer Ereignisse zu treffen. Orakel werden häufig auch zum Abrufen historischer Blockchain-Informationen eingesetzt, da die direkte Erfassung dieser Daten äußerst anspruchsvoll und daher fehleranfällig ist.

Um dieses Problem zu lösen, wurden spezielle Entitäten namens**Oracles**erstellt, um diese Off-Chain-Daten abzurufen (oder Ergebnisse aus einigen umfangreichen Off-Chain-Berechnungen abzurufen). Derzeit erfordern diese Orakel, dass ein Dritter, beispielsweise eine Institution oder ein dezentrales Netzwerk von Knotenbetreibern, Daten in der Kette übermittelt, die für Benutzer und Smart Contracts öffentlich werden. Diese Vertrauensannahme ist derzeit unvermeidlich, aber nicht ideal (obwohl mehrere Teams daran arbeiten, diese Vertrauensanforderung zu minimieren, wie z. B. Pragma).

**[Chainlink](https://chain.link/)**ist ein Beispiel für ein Blockchain-Orakel, das eine Vielzahl realer Daten (Aktienkurse, Wetterdaten usw.) und Off-Chain-Berechnungsdienste bereitstellt, um die Kosten für umfangreiche Berechnungen in der Kette zu minimieren Cross-Chain-Dienste, die Informationen zwischen verschiedenen Blockchains lesen und schreiben.

Da es bei Smart Contracts keine andere Möglichkeit gibt, zu erfahren, was in der realen Welt geschieht, als Orakel zu nutzen, sind Orakel zu einem unverzichtbaren Bestandteil des Blockchain-Ökosystems geworden.

## Der Zustand der Orakel auf Starknet

Auf dem Starknet-Testnetz stellt das zuvor erwähnte Chainlink derzeit Preisdaten-Feeds für sieben Kryptowährungspaare bereit und hat mit dem Starkware-Team[, um „die App](https://www.coindesk.com/business/2023/02/06/starkware-partnering-with-chainlink-for-starknet-growth/)Entwicklung und das allgemeine Wachstum des StarkNet-Ökosystems weiter zu beschleunigen“. Chainlink minimiert die Annahme von Vertrauen durch ein dezentrales Netzwerk von Knoten, die Daten aus Off-Chain-Quellen bereitstellen, die Datenaggregation erfolgt jedoch Off-Chain.

**[Pragma](https://www.empiric.network/)**und**[Stork Network](https://www.stork.network/)**sind zwei der größten Oracle-Anbieter im Starknet und operieren sowohl im Mainnet als auch im Testnet. Neben den Preistickern für mehrere Kryptowährungspaare arbeitet Pragma an der Implementierung eines überprüfbaren Zufälligkeits-Feeds im Mainnet, der es Protokollen ermöglichen würde, sichere Zufälligkeiten in der Kette anzufordern. Preis-Feeds auf Pragma basieren auf Preiseingaben großer Institutionen und Market Maker, und die Preisaggregation erfolgt in der Kette unter Nutzung der effizienten ZK-Technologie.

![](/assets/blog-post-image-5-.webp)



## Können Orakel durch Speicherbeweise ersetzt oder verbessert werden?

In manchen Fällen kann ein Aufbewahrungsbeweis ein Orakel ersetzen.

Nicht alle von Oracles bereitgestellten Daten müssen tatsächlich von einem Dritten bereitgestellt werden. In einigen Fällen waren die von einem Orakel bereitgestellten Daten bereits in der Kette verfügbar (in Form von On-Chain-Speicher oder einer Transaktion) und können durch einen Blick auf einen früheren Zustand der Blockchain abgerufen werden. In diesen Fällen kann ein Speichernachweis das Vertrauen in einen Dritten und das Orakel ersetzen und es Smart Contracts ermöglichen, sich vollständig auf die Sicherheit kryptografischer Verpflichtungen zu verlassen.

In anderen Fällen, in denen Speicherbeweise ein Orakel nicht vollständig ersetzen können, können sie</em>oft noch um zusätzliche Funktionen*, wie zum Beispiel die folgenden:</p>

* Orakel übertragen Informationen von Datenanbietern an Datenkonsumenten. Allerdings befinden sich nicht alle Datenkonsumenten in derselben Kette. Mit Hilfe von Speichernachweisen ist es möglich,**Berechnungen für die Daten aus verschiedenen Quellen durchzuführen und das Ergebnis in andere Ketten zu exportieren**.
* Die bevorzugte Quellkette für solche Daten ist diejenige mit kostengünstigen Berechnungen, und die Validierung des Nachweises kann kostengünstig auf anderen Zielketten durchgeführt werden.
* [Herodotus](https://www.herodotus.dev/)ist einer der Forschungsführer in diesem Bereich und bietet domänenübergreifenden Datenzugriff über verschiedene Ethereum-Ketten hinweg mithilfe von Speichernachweisen und ZK-Mathematik. Pragma arbeitet auch mit Herodotus zusammen, um in naher Zukunft eine kettenübergreifende Oracle-Unterstützung zu ermöglichen.
* Speichernachweise können**den Status mehrerer Rollups**vereinheitlichen und sogar synchrone Lesevorgänge*zwischen*Ethereum-Schichten ermöglichen.
* Eine weitere Verbesserung ist ein**Abruf historischer Daten, die in der Kette veröffentlicht werden**. Zustandsbehaftete Blockchains wie Ethereum und Starknet zeichnen ihren Zustand auf und bewahren ihn kryptografisch durch spezielle Datenstrukturen wie Merkle/Verkle-Bäume und MPTs. Dadurch ist es möglich, die Einbeziehung aller in diesen Strukturen gespeicherten Daten nachzuweisen. Daher können alle in der Kette veröffentlichten früheren Daten auch in anderen Anwendungen (nicht einmal unbedingt in derselben Kette) als vertrauenswürdig eingestuft, abgerufen und verwendet werden. Diese Speichernachweise ermöglichen es Smart Contracts, auf Informationen zuzugreifen, die sogar bis zum Genesis-Block zurückreichen.
* Pragma erforscht die Machbarkeit der Entwicklung eines Orakels als L3 auf Starknet, von dem aus Daten auf andere Ketten „abgerufen“ und mithilfe von Speichernachweisen verifiziert werden können. Zu den Vorteilen, das Orakel in einer anderen Domäne zusätzlich zu einem rechengünstigen Netzwerk wie Starknet zu haben, gehören die folgenden:
* Da es sich bei L3 um eine hochgradig anpassbare Kette handeln könnte, können verschiedene Parameter angepasst werden, um**einen Konsens in den Blöcken zu erreichen**, wodurch die Datenlatenz für das Oracle erheblich reduziert wird.
* In Kombination mit Speichernachweisen können die**Daten mit geringer Latenz asynchron an andere Ketten übertragen werden,**bei Erreichen eines Konsenses in der Quellkette.
* Die Möglichkeit,**das Vertrauen in Daten zu stärken**, indem ein integriertes System im L3 entwickelt wird, um unehrliche Datenanbieter auszumerzen. Bei entsprechenden Anreizen könnten die Datenanbieter auf der L3 ihre Vermögenswerte als Garantie für die Veröffentlichung korrekter Daten einsetzen. Da der Konsens des gesamten Netzwerks auf L3 erforderlich ist, bevor andere Ketten die Daten nutzen können, können die vom Orakel bereitgestellten Daten als durch den Anteil des Validators auf L3 gesichert angesehen werden.

# Abschluss

In den letzten Monaten hat uns der zunehmende Einsatz von L2s auf Ethereum einen klareren Blick auf die Zukunft der Branche gegeben. Die L2-Erzählung hat mit Netzwerken wie[Starknet](https://www.starknet.io/en),[Optimism](https://www.optimism.io/)und[Arbitrum](https://arbitrum.io/)an Bedeutung gewonnen. Eine der wichtigsten Stützen für sein Wachstum war jedoch die Implementierung eines dezentralen kettenübergreifenden Nachrichtensystems. Obwohl sie noch in den Kinderschuhen stecken, versprechen Speichernachweise unglaubliche Verbesserungen für dieses Problem.

Vielen Dank an[Marcello Bardus](https://twitter.com/0xmarcello)&[Kacper Koziol](https://twitter.com/kacperkozi)für die Durchsicht dieses Artikels.