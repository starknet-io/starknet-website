## TL;DR

* Kairo entwickelt sich weiter. Zur Vereinfachung für die Community haben wir ein öffentliches Forum erstellt, in dem die kommenden coolen Funktionen beschrieben werden.
* In Kürze wird zusammen mit Starknet Alpha v0.12.0 eine neue Vertragssyntax eingeführt, die nur minimale Codeänderungen erfordert und die intelligente Vertragssprache erheblich bereichert.
* Mit Cairo 1.1.0 auf dem Starknet Mainnet und der baldigen Veröffentlichung von Version 2 auf Starknet haben wir einen wichtigen Meilenstein in der Reife der Sprache erreicht. Zwischen den [Dokumenten](https://cairo-lang.org/docs/v1.0/), [Buch](https://cairo-book.github.io/title-page.html)und dem Starknet [Discord](https://discord.gg/qypnmzkhbc)sollten Sie über genügend Ressourcen verfügen, um loszulegen und von Kairo 0 zu migrieren.



## Einführung

Cairo v1 hat sich seit seinen frühen Alpha-Tagen erheblich weiterentwickelt, hat die Funktionsparität mit Cairo 0 erreicht und darüber hinaus neue Funktionen angehäuft (grundlegende Schleifen sind jetzt verfügbar und viele weitere Funktionen sind in Arbeit). Unser Ziel in diesem Beitrag ist es, mehr Licht auf die kurzfristige Roadmap von Kairo zu werfen: Woran derzeit gearbeitet wird und was Entwickler in den kommenden Wochen und Monaten erwarten können. In Zukunft können Sie über die neuesten Entwicklungen oder Pläne für die Sprache auf dem Laufenden bleiben, indem Sie das [cairo-roadmap board](https://github.com/orgs/starkware-libs/projects/1/views/1) auf Github verfolgen.



## Warum Kairo?

Neben den großen Fortschritten in der Hochsprache halten wir es für wichtig, den grundlegenden Nutzen von Kairo hervorzuheben und zu betonen, warum es unserer Meinung nach die Grundlage für die zukünftige Skalierung der Blockchain ist. 

Kairo wurde von Anfang an mit dem alleinigen Ziel entwickelt, die effizienteste Sprache zum Schreiben beweisbarer Programme zu sein. Die Architektur der Cairo VM, wie sie im Originalpapier [beschrieben wurde, wurde für die effiziente Generierung](https://eprint.iacr.org/2021/1063.pdf)STARK-Proofs für die Ausführung von Cairo-Programmen entwickelt und ist damit die ideale Grundlage für Validity Rollups. Cairo v2, die neue rostähnliche Sprache, die wir heute haben, basiert auf diesen Grundlagen, ist jedoch im Hinblick auf Ergonomie, Sicherheit und einfache Lern- und Schreibfreundlichkeit darauf ausgelegt, einer breiten Entwicklergemeinschaft zu dienen. Die Entwicklung, die Cairo in den letzten zwei Jahren durchgemacht hat, hat es von einer Nischen-Low-Level-Sprache zu einer entwicklerfreundlichen High-Level-Sprache gemacht, die einen Vorsprung in Bezug auf Beweise und Skalierungseffizienz bietet.

## Sagen Sie einfach Kairo

Sagen Sie nicht mehr „Cairo 1 – Compiler-Version vX.YZ“. Sagen Sie von nun an einfach Kairo. Yai! 

Mit dem neuen Cairo-Compiler folgen wir dem Standard [semantische Versionierung](https://semver.org/) ; Das heißt, Compiler-Versionen bestehen aus drei Ziffern, und eine Änderung der höchstwertigen Ziffer weist auf Breaking Changes hin. Mit der nächsten Cairo-Version haben wir bahnbrechende Änderungen in der Smart-Contract-Syntax (später im Beitrag beschrieben), daher ist es richtig, die Version auf Cairo v2 zu aktualisieren. Um eine umständliche Notation zu vermeiden, hören wir auf, Cairo 1 zu sagen, und identifizieren von nun an die Sprachversion mit der (einzigen) Compiler-Version. Die ursprüngliche Sprache, die auch in Zukunft in verschiedenen Kontexten außerhalb von Starknet verwendet werden könnte, wird als „Cairo 0“ bezeichnet.

![](/assets/screenshot-2023-06-29-at-17.04.49.png)

## Was kommt als nächstes für Kairo?

In den folgenden Abschnitten gehen wir auf die kommenden wichtigen Entwicklungen in der Sprache ein und erklären, wie sie sich auf das Entwicklererlebnis in Kairo auswirken.

### Kommende Funktionen

Obwohl die Feature-Parität mit Cairo 0 ein wichtiger Meilenstein war, ist sie definitiv nicht das endgültige Ziel. Die Hochsprache kann jederzeit verbessert werden und viele weitere Funktionen sind in Vorbereitung. Sie können sich die [Roadmap](https://github.com/orgs/starkware-libs/projects/1/views/1) ansehen, um die Funktionen zu sehen, an denen gearbeitet wird, und den Rückstand zu verfolgen. Einige bemerkenswerte Erwähnungen sind:

* **Komponenten**: Die nächste Phase in der neuen Vertragssyntax, die es Verträgen ermöglicht, in externen Bibliotheken definierte Komponenten zu importieren
* **Keccak und Secp-k1**: Diese sind bereits in Cairo v2 enthalten und ermöglichen die Überprüfung von Ethereum-Signaturen in der kommenden Version von Starknet.
* **Unterstützung für vorzeichenbehaftete Ganzzahlen**
* **Secp-r1-Kurvenoperationen**: Dies ermöglicht die Verwendung nativer Hardware zum Signieren von Transaktionen, was zu einer viel einfacheren Benutzeroberfläche für die Interaktion mit Starknet führt
* **Strings**: Ein nativer Typ für (lange) Strings, der die Standard-String-Manipulation ermöglicht. Hierbei handelt es sich um eine Grundfunktion, die auch bei NFT- und Gaming-Projekten stark nachgefragt wird.
* **Iteratoren**: Diese ermöglichen es uns, die Schleifensyntax zu erweitern und viel bequemer über Arrays/Spans zu iterieren



### Cairo v2 – Neue Vertragssyntax

Die aktuelle Syntax des Smart-Vertrags von Starknet übernimmt größtenteils das vorherige Design von Cairo 0. Dieses Design weist einige Probleme auf, die wir gerne ansprechen würden. Unser Ziel bei der Umstellung auf eine neue Syntax besteht darin, die Sicherheit zu erhöhen, indem wir das Verhalten des Vertrags expliziter gestalten. Indem wir den externen Funktionen, der Speicherung und den Ereignissen des Vertrags mehr Struktur verleihen, können wir die Wahrscheinlichkeit von Fehlern erheblich verringern. Dies wird dazu beitragen, Protokolle vor potenziellen Hacks und Geldverlusten zu schützen. Darüber hinaus können wir mit der neuen Syntax die *Erweiterbarkeit*einführen, eine von der Community stark nachgefragte Funktion, die es Entwicklern ermöglicht, in externen Bibliotheken geschriebene Komponenten problemlos zu verwenden.

Die neue Syntax erfordert grundlegende Änderungen. Während wir uns in dieser Phase dafür entscheiden, Breaking Changes so weit wie möglich zu vermeiden, sind wir nach internen und Community-Diskussionen zu dem Schluss gekommen, dass dies der richtige Weg ist, der sich in Zukunft auszahlen wird.

Diese Änderungen werden ausführlich in einem [technischeren Beitrag](https://community.starknet.io/t/cairo-1-contract-syntax-is-evolving/94794/20) besprochen, der im Community-Forum veröffentlicht wurde (einen umfassenden Überblick über die bevorstehenden Änderungen finden Sie hier). An dieser Stelle möchten wir nur betonen, dass **nur die „äußerste Ebene“ Ihres Vertrags (Definition externer Funktionen und Ereignisse) geändert werden muss**. Ihr vorhandener Cairo v1-Code erfordert nur geringfügige Anpassungen (eine [Kurzanleitung zur Migration finden Sie in den Dokumenten](https://docs.starknet.io/documentation/architecture_and_concepts/Cairo_on_Starknet/contract-syntax/)). Der Vorteil der neuen Syntax ist jedoch von großer Bedeutung: Die Verwendung von Komponenten aus externen Bibliotheken (ein kritisches Feature bei der Arbeit an großen Projekten) wird alltäglich und erfordert keine Ad-hoc-Problemumgehungen mehr.

### Abwärtskompatibilitätsgarantie

Einige der im Beitrag beschriebenen bevorstehenden Änderungen (insbesondere die neue Vertragssyntax) werden bahnbrechende Änderungen in der Sprache mit sich bringen. Während nach Cairo v2 der Großteil der bahnbrechenden Änderungen hinter uns liegt, ist es noch zu früh, sich ab diesem Zeitpunkt auf die Abwärtskompatibilität festzulegen. Allerdings erfordern Projekte, die intelligente Verträge auf Basis von Starknet entwickeln, Stabilität und sorgfältige Prüfungen, und das ist für uns ein wichtiger Gesichtspunkt. Um diese Bedenken auszuräumen, bieten wir die folgenden Stabilitätsgarantien:

1. Jede auf Starknet deklarierte Klasse funktioniert weiterhin wie zuvor und bleibt von Änderungen in der Sprache unberührt
2. Jeder auf Starknet bereitgestellte Vertrag funktioniert weiterhin wie bisher und bleibt von Änderungen in der Sprache unberührt
3. Für jedes fehlerhafte Sprach-Upgrade bleiben in der vorherigen Version verfasste Verträge für einen Zeitraum von mindestens sechs Monaten weiterhin auf Starknet deklarierbar.

Wenn Sie beispielsweise Ihr Projekt mit Cairo **sechs Monate**. Das heißt, Sie haben mindestens sechs Monate Zeit, um Ihre Verträge auf Starknet bereitzustellen. Ab diesem Zeitpunkt sind sie für immer durch die Punkte 1 & und 2 geschützt.

## Wann sollte ich migrieren?

Nachdem die neue Vertragssyntax veröffentlicht (und in der kommenden Version 0.12.0 auf Starknet verfügbar gemacht) wurde und die meisten wichtigen Änderungen hinter uns liegen, ist Cairo nun stabil und umfangreich genug, um komplexe Anwendungen zu unterstützen und die bestehende Cairo-0-Logik zu portieren. Darüber hinaus stellen die Abwärtskompatibilitätsgarantien von Starknet sicher, dass Sie selbst bei wichtigen Änderungen in der Sprache genügend Zeit (mindestens sechs Monate) haben, um die Entwicklung oder Prüfung und Bereitstellung Ihrer Verträge abzuschließen.

## Zusammenfassung

Kairo entwickelt sich weiter und hat einen Punkt erreicht, an dem es die Originalsprache weitgehend umgeht. Wenn Sie es noch nicht getan haben, ist es jetzt an der Zeit, sich zu engagieren. Wir laden die Entwickler-Community dazu ein, sich aktiv an den Diskussionen zu beteiligen, entweder direkt im [Compiler-Repo](https://github.com/starkware-libs/cairo) , indem sie Probleme ansprechen oder im [Cairo Discord-Kanal](https://discord.gg/qypnmzkhbc) oder im Starknet [Community-Forum](https://community.starknet.io/latest)posten. Hoffentlich hat dieser Beitrag (zusammen mit seinem eher technischen Gegenstück [](https://docs.google.com/document/d/1qemNmIWYuYyVg0f9J_SO6SqGQVDPOBVt10wXH0rrT_U/edit#)) dazu beigetragen, etwas Licht auf die erwarteten Änderungen zu werfen und einen Großteil der Zweifel an der Zukunft von Kairo auszuräumen.