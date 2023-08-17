Die technologische Innovation in der Blockchain hat sich in den letzten Jahren gedeihen lassen – STARKs, SNARKs, EIP-1559, die Zusammenführung von Ethereum – alles sind enorme technologische Errungenschaften. Allerdings haben UX und UI Design nicht Schritt gehalten. Man steckt immer noch auf 16-Wort-Samen-Phrasen fest, und wenn man ohne zentralisierten Vermittler nach DeFi kommt, ist das für viele immer noch zu einschüchternd. Um die nächsten Milliarden Nutzer in Web3 zu integrieren, ist es entscheidend, die Erfahrung des Benutzers an Bord zu verbessern.

Wie FTX gezeigt hat (und Gemini, Celsius und Gox), ist es von entscheidender Bedeutung, die Selbstverwahrung über sein Vermögen zu bewahren. Bis vor kurzem waren die Wallets für die Selbstverwahrung für den durchschnittlichen Benutzer unbeholfen und verwirrend. Die meisten Leute vergessen ihre Web2-Passwörter monatlich und wie sollen Benutzer ihre Seed-Phrase und private Schlüssel für Ewigkeit sicher halten?

Einfach ausgedrückt: Es ist ein Alptraum der Sicherheit. Wie wir unzählige Male gesehen haben, kann ein falscher Schritt, sei er nun von schlechten Schauspielern oder Nachlässigkeit initiiert wird, zum Verlust von Millionen von Dollar führen.

Als erste Kontaktstelle für neue Kryptobenutzer muss Ethereum Wallets einfach zu bedienen, sicher und anpassbar sein, um den Bedürfnissen jedes Benutzers gerecht zu werden. Dies erfordert Entwickler, die Einfachheit von Web2 Finanzprodukten mit den Eigenschaften von Web3 zu integrieren.

Das ist genau das, was die Abstraktion der Konten bewirkt.

Die Abstraktion des Kontos verbessert die Sicherheit und die Sicherheit der Wallet-Produkte, indem die Benutzer sich nicht auf den privaten Schlüssel verlassen und Brieftaschen programmierbarer machen. Mit dieser verbesserten UX können nicht-Custodial-Wallets endlich auf Millionen von herkömmlichen krypto-Benutzern skaliert werden.

Aber um die Auswirkungen der Abstraktion von Konten vollständig zu verstehen, müssen wir uns auf die Arbeit von Ethereum Konten erfrischen.

### Die Grundlagen der Ethereum-Konten

Es gibt zwei Arten von Ethereum-Konten:

1. Extern eigene Konten (EOA)
2. Vertragskonten (CA)

Lass uns jedes mal ein bisschen weiter auseinanderbrechen.

### Externe Konten

Externe Konten wie MetaMask und Coinbase Wallet sind der typische Kontotyp für Ethereum-Benutzer. Jede EOA besteht aus einem privaten und öffentlichen Schlüssel, der als Tastatur bezeichnet wird.

Alle Transaktionen sind autorisiert und von privaten Schlüsseln signiert. Sobald eine Transaktion unterzeichnet ist, überprüft der EVM, ob die Signatur unter der EOA-Kontonummer gültig ist. Die hart kodierte Logik in der EVM bedeutet, dass das Konto (das Objekt, das Ihre Tokens hält) und der private Schlüssel (Unterzeichner) als Eins gekoppelt sind.

Der Verlust Ihres privaten Schlüssels bedeutet, Ihr Guthaben oder sogar die Kontrolle über Ihr Konto für immer zu verlieren.

### Vertragskonten

Unterdessen sind Vertragskonten, synonym für Kontoabstraktion, intelligente Verträge auf der Ethereum Blockchain. Diese Verträge werden durch Code-Logik kontrolliert und erfordern keine privaten Schlüssel. Im Gegensatz zu EOAs können Vertragskonten keine Transaktionen initiieren. Stattdessen werden ihre Transaktionen durch Anweisungen von EOAs ausgelöst.

### Warum Abstraktion von Konten wichtig ist

Die Abstraktion der Konten beinhaltet die Abstraktion der hart kodierten Autorisierungslogik weg von den EOA, Jedes Konto wird zu einem programmierbaren intelligenten Vertrag, der auf die Bedürfnisse jedes Einzelnen zugeschnitten werden kann.

Wie Argent Mitbegründer und Chief Science Officer Julien Niset in einem kürzlich erschienen[Stark @ Home Event erklärt hat,](https://www.crowdcast.io/e/7olimxqv), diese flexible Autorisierungslogik gibt Entwicklern die Freiheit, mit Kontofunktionen wie… zu spielen

**Hardware-Signierer:**Mit einem iPhone oder der sicheren Enklave von Android, um jedes Smartphone in eine Hardware-Wallet zu verwandeln. Von dort aus können Benutzer Transaktionen mit biometrischen Daten wie Fingerabdruck oder Apple Face ID verifizieren. Wir haben bereits damit begonnen, selbstverwaltete Wallets wie Braavos[zu sehen.](https://medium.com/@braavos_starknet_wallet/hardware-signer-the-last-innovation-for-wallet-crypto-everyday-users-7e1974f93944)

**Zahlmeister:**Erlaubt Benutzern Gasgebühren in beliebigem Zeichen zu zahlen oder sogar einen von Dritten entworfenen Mechanismus für Transaktionen zu haben.

**Soziale Erholung:**Falls ein privater Schlüssel verloren geht oder kompromittiert wird, können Benutzer einen neuen Schlüssel als legitimen Wallet-Besitzer autorisieren. Dies kann eine Vielzahl von Wiederherstellungsmethoden durch vertrauenswürdige Kontakte, Hardware-Wallets oder Dienste Dritter umfassen. Die Idee ist, den wiederherstellenden Zugriff auf Ihr Konto so einfach wie das Wiederherstellen Ihres Bankkonto-Passworts durch eine E-Mail.

**Multifaktor-Authentifizierung:**Ähnlich wie die üblichen Web2 2FA-Praktiken, Benutzer können zwei (oder mehrere) Authentifizierungsmethoden für ihre Krypto-Wallet einrichten, wobei eine Transaktion erst unterschrieben wird, wenn ein Benutzer die Genehmigung durch eine zweite Option wie E-Mail oder SMS bestätigt. Benutzer können auch tägliche Transfer-Limits oder Listen von Account-Adressen einrichten, von denen die Brieftasche automatisch blockiert wird.

**Quantenresistente und gaseffiziente Unterschriften:**Ethereums aktuelles Unterschriftenschema, Die ECDSA ist rechnerisch umfangreich (sprich: höhere Gasgebühren) und kann von Quantencomputern gebrochen werden. Durch die Abstraktion von Unterschriften verwenden verschiedene Kontenverträge effizientere und quantensichere Unterschriftensysteme. StarkNet verwendet eine eigene STARK-freundliche Kurve.

Diese Funktionen bieten nicht nur mehr Sicherheit und mehr Flexibilität, sondern führen vor allem zu einem**besseren**Benutzererlebnis.

Von Vitalik Buterin als „langjähriger Traum“ für die Entwicklergemeinschaft Ethereum gelistet, verwirren seit 2020 Innovationen rund um die Abstraktion, vor allem EIP-2938 und EIP-3074. Beide erforderten jedoch Kompromisse im Hinblick auf Sicherheit und Umsetzung. [EIP-4337](https://github.com/ethereum/EIPs/blob/3fd65b1a782912bfc18cb975c62c55f733c7c96e/EIPS/eip-4337.md), die bisher vielversprechendste Entwicklung, schlägt eine Version der Kontoabstraktion vor, ohne Änderungen am Ethereum-Protokoll zu erfordern.

### **Abstraktion und Starknet**

Im Gegensatz zu Bitcoin und Ethereum, die ihre aktuellen Protokolle aktualisieren, um die Abstraktion von Konten zu unterstützen, hat[StarkNet](https://starkware.co/starknet/)die Abstraktion von Konten seit dem ersten Tag implementiert. In Verbindung mit der Skalierbarkeit und den Fähigkeiten unseres STARK-Nachweises ist das Potenzial für Wallet-Innovation unbegrenzt. Aus diesem Grund wird die nächste Generation von Wallets, wie Argent und Braavos, derzeit über unser Netzwerk hinaus gebaut.

Der Ansatz von StarkNet ähnelt der EIP-4337,[anerkennen, dass](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781)eine vollständige Abstraktion des Kontos immer noch zu einer Verwirrung der UX führen würde und[die Tür](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4337.md#rationale)für Angriffe auf Sequenzer öffnen könnte. Vielmehr zielt sie darauf ab, sowohl die Abstraktion der Unterschriften als auch die Abstraktion der Zahlungen zu erreichen, indem sie einige der Erfordernisse auf und außerhalb der Ketteninfrastruktur vergemeinschaften.

Und obwohl es noch viel mehr zu tun gibt, gewinnt die Abstraktion der Rechenschaftspflicht über einen kleinen Kreis von Krypto-Einheimischen hinaus an Zugkraft. Im Dezember schlug[Visa die Idee](https://www.coindesk.com/tech/2023/01/11/ethereum-upgrade-could-make-it-harder-to-lose-all-your-crypto/)vor, die Abstraktion des Kontos zu nutzen, um automatische wiederkehrende Zahlungen auf StarkNet einzurichten. Über ein delegierbares Konto können Benutzer die Erlaubnis erteilen, eine Zahlung an einen vorab genehmigten intelligenten Vertrag einzuleiten. Von dort aus wird der intelligente Vertrag so programmiert, dass er einen festgelegten Zahlungsbetrag für einen bestimmten Tag über eine bestimmte Dauer abzieht. Obwohl Visa noch keine Pläne für eigene Dienstleistungen offenbart hat, sprechen die Zinsen allein Bände, und könnte eine Welt voraussehen, in der sich High-Tech-Abonnement-Plattformen wie Netflix und Spotify auf die Annahme von Verschlüsselungssystemen einlassen könnten.

Was die Zukunft betrifft, wird sich nur die Zeit zeigen. Aber eines ist sicher. Indem Brieftaschen einfacher und sicherer zu verwenden sind Abstraktion von Konten wird als mächtiger Katalysator für Wallets zur Selbstverwahrung von Blockchain dienen, um sich an Millionen von Krypto-Benutzern zu skalieren. In der Zwischenzeit werden wir weiter bauen.