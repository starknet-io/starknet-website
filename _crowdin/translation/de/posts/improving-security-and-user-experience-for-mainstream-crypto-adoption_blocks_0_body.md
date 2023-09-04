Technologische Innovationen in der Blockchain haben in den letzten Jahren floriert – STARKs, SNARKs, EIP-1559, Ethereum Merge – allesamt große technologische Errungenschaften. Allerdings konnten UX- und UI-Design nicht mithalten. Die Leute stecken immer noch in 16-Wort-Seed-Phrasen fest, und der Einstieg in DeFi ohne einen zentralen Vermittler ist für viele immer noch zu einschüchternd. Um die nächste Milliarde Benutzer in Web3 einzubinden, ist die Verbesserung des Benutzer-Onboarding-Erlebnisses von entscheidender Bedeutung.

Wie FTX (und Gemini, Celsius und Mt. Gox) gezeigt haben, ist die Selbstverwaltung der eigenen Vermögenswerte von entscheidender Bedeutung. Allerdings waren Self-Custodial Wallets bis vor Kurzem für den Durchschnittsnutzer klobig und verwirrend. Die meisten Leute vergessen monatlich ihre Web2-Passwörter; Wie sollen Benutzer ihre Seed-Phrase und ihre privaten Schlüssel für die Ewigkeit sicher aufbewahren?

Einfach ausgedrückt ist es ein Sicherheitsalbtraum. Wie wir unzählige Male gesehen haben, kann ein falscher Schritt, sei es durch schlechte Akteure oder durch Nachlässigkeit, zum Verlust von Millionen Dollar führen.

Als erste Anlaufstelle für neue Krypto-Benutzer müssen Ethereum-Wallets einfach zu verwenden, sicher und anpassbar sein, um den Bedürfnissen jedes Benutzers gerecht zu werden. Dies erfordert, dass Entwickler die Einfachheit der Web2-Finanzprodukte mit den Funktionen von Web3 integrieren.

Genau das erreicht die Kontoabstraktion.

Die Kontoabstraktion verbessert die Sicherheit von selbstverwahrenden Wallet-Produkten, indem sie die Abhängigkeit der Benutzer vom privaten Schlüssel beseitigt und Wallets programmierbarer macht. Mit dieser verbesserten UX können nicht verwahrte Wallets endlich auf Millionen von Mainstream-Krypto-Benutzern skaliert werden.

Um jedoch die Auswirkungen der Kontoabstraktion vollständig zu verstehen, müssen wir uns mit der Funktionsweise von Ethereum-Konten vertraut machen.

### Die Grundlagen von Ethereum-Konten

Es gibt zwei Arten von Ethereum-Konten:

1. Externe Konten (EOA)
2. Vertragskonten (CA)

Lassen Sie uns die einzelnen Punkte etwas weiter aufschlüsseln.

### Externe Konten

Externe Konten wie MetaMask und Coinbase Wallet sind der typische Kontotyp für Ethereum-Benutzer. Jeder EOA besteht aus einem privaten und einem öffentlichen Schlüssel, einem sogenannten Schlüsselpaar.

Alle Transaktionen werden durch private Schlüssel autorisiert und signiert. Sobald eine Transaktion signiert ist, überprüft das EVM anhand der Kontoadresse der EOA, ob die Signatur gültig ist. Die fest codierte Logik im EVM bedeutet, dass das Konto (das Objekt, das Ihre Token enthält) und der private Schlüssel (Unterzeichner) als eins gekoppelt sind.

Der Verlust Ihres privaten Schlüssels bedeutet, dass Sie Ihr Geld oder sogar die Kontrolle über Ihr Konto für immer verlieren.

### Vertragskonten

Unterdessen sind Vertragskonten, gleichbedeutend mit Kontoabstraktion, intelligente Verträge, die auf der Ethereum-Blockchain eingesetzt werden. Diese Verträge werden durch Codelogik gesteuert und erfordern keine privaten Schlüssel. Im Gegensatz zu EOAs können Vertragskonten keine Transaktionen initiieren. Stattdessen werden ihre Transaktionen durch Anweisungen von EOAs ausgelöst.

### Warum Kontoabstraktion wichtig ist

Bei der Kontoabstraktion geht es darum, die fest codierte Autorisierungslogik von EOAs zu abstrahieren und jedes Konto in einen programmierbaren Smart Contract umzuwandeln, der auf die Bedürfnisse jedes Einzelnen zugeschnitten werden kann.

Wie Julien Niset, Mitbegründer und Chief Science Officer von Argent, kürzlich in einem[Stark @ Home-Event](https://www.crowdcast.io/e/7olimxqv)erklärte, gibt diese flexible Autorisierungslogik Entwicklern die Freiheit, mit Kontofunktionen wie…herumzuspielen

**Hardware-Signierer:**Verwenden Sie ein iPhone oder die sichere Enklave von Android, um jedes Smartphone in eine Hardware-Wallet zu verwandeln. Von dort aus können Benutzer Transaktionen mithilfe biometrischer Daten wie einem Fingerabdruck oder einer Apple Face ID überprüfen. Wir haben bereits damit begonnen, selbstverwahrende Wallets wie Braavos[zu beobachten, die diese Funktion einführen.](https://medium.com/@braavos_starknet_wallet/hardware-signer-the-last-innovation-for-wallet-crypto-everyday-users-7e1974f93944)

**Zahlmeister:**Ermöglichen Sie Benutzern die Zahlung von Benzingebühren in beliebigen Token oder lassen Sie Transaktionen sogar über einen von einem Drittanbieter entwickelten Mechanismus bezahlen.

**Social Recovery:**Für den Fall, dass ein privater Schlüssel verloren geht oder kompromittiert wird, können Benutzer als rechtmäßiger Wallet-Besitzer einen neuen Schlüssel autorisieren. Dies kann eine Vielzahl von Wiederherstellungsmethoden über vertrauenswürdige Kontakte, Hardware-Wallets oder Dienste von Drittanbietern umfassen. Die Idee besteht darin, die Wiederherstellung des Zugriffs auf Ihr Konto so einfach zu gestalten wie die Wiederherstellung des Passworts Ihres Bankkontos per E-Mail.

**Multifaktor-Authentifizierung:**Ähnlich wie bei den gängigen Web2-2FA-Praktiken können Benutzer zwei (oder mehr) Authentifizierungsmethoden für ihre Krypto-Wallets einrichten, bei denen eine Transaktion erst dann signiert wird, wenn ein Benutzer die Genehmigung über eine zweite Option wie E-Mail oder SMS bestätigt. Benutzer können auch tägliche Überweisungslimits oder Listen mit Kontoadressen einrichten, deren Interaktion mit dem Wallet automatisch blockiert wird.

**Quantenresistente und gaseffiziente Signaturen:**Das aktuelle Signaturschema von Ethereum, ECDSA, ist rechenintensiv (sprich: höhere Gasgebühren) und kann von Quantencomputern gebrochen werden. Durch die Signaturabstraktion nutzen verschiedene Kontoverträge effizientere und quantensicherere Signaturschemata. StarkNet verwendet seine eigene proprietäre STARK-freundliche Kurve.

Diese Funktionen bieten Benutzern nicht nur mehr Sicherheit und mehr Flexibilität, sondern, was noch wichtiger ist, sie führen auch zu einem**besseren**.

Von Vitalik Buterin als „langfristiger Traum“ der Ethereum-Entwicklergemeinschaft bezeichnet, sind seit 2020 Innovationen rund um die Kontoabstraktion, hauptsächlich EIP-2938 und EIP-3074, im Umlauf. Allerdings erforderten beide Kompromisse hinsichtlich Sicherheit und Implementierung. [EIP-4337](https://github.com/ethereum/EIPs/blob/3fd65b1a782912bfc18cb975c62c55f733c7c96e/EIPS/eip-4337.md), die bisher vielversprechendste Entwicklung, schlägt eine Version der Kontoabstraktion vor, ohne dass Änderungen am Ethereum-Protokoll erforderlich sind.

### **Kontoabstraktion und Starknet**

Im Gegensatz zu Bitcoin und Ethereum, die ihre aktuellen Protokolle nachrüsten, um die Kontoabstraktion zu unterstützen, hat[StarkNet](https://starkware.co/starknet/)die Kontoabstraktion vom ersten Tag an implementiert. In Verbindung mit der Skalierbarkeit und den Fähigkeiten unserer STARK-Proofs ist das Potenzial für Wallet-Innovationen grenzenlos. Aus diesem Grund wird derzeit die nächste Generation selbstverwahrender Wallets wie Argent und Braavos auf der Grundlage unseres Netzwerks aufgebaut.

Der Ansatz von StarkNet ähnelt EIP-4337, wobei[anerkannt wird, dass](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781)vollständige Kontoabstraktion immer noch zu einer verwirrenden Benutzeroberfläche führen würde und[Angriffen auf Sequenzer Tür und Tor öffnen könnte](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4337.md#rationale). Vielmehr zielt es darauf ab, sowohl eine Signaturabstraktion als auch eine Zahlungsabstraktion zu erreichen, indem einige der erforderlichen On- und Off-Chain-Infrastrukturen gemeinsam genutzt werden.

Und obwohl es noch viel zu tun gibt, gewinnt die Kontoabstraktion über einen kleinen Kreis von Krypto-Natives hinaus an Bedeutung. Im Dezember schlug[Visa die Idee](https://www.coindesk.com/tech/2023/01/11/ethereum-upgrade-could-make-it-harder-to-lose-all-your-crypto/)vor, mithilfe der Kontoabstraktion automatische wiederkehrende Zahlungen auf StarkNet einzurichten. Mithilfe eines delegierbaren Kontos können Benutzer die Berechtigung erteilen, eine Zahlung an einen vorab genehmigten Smart Contract zu veranlassen. Von dort aus wird der Smart-Vertrag so programmiert, dass er an einem bestimmten Tag und über einen festgelegten Zeitraum hinweg einen festgelegten Zahlungsbetrag abbucht. Obwohl Visa seine Pläne für seine eigenen Dienste noch nicht bekannt gegeben hat, spricht allein das Interesse Bände und könnte ein Vorbote einer Welt sein, in der große Technologie-Abonnementplattformen wie Netflix und Spotify die Krypto-Einführung übernehmen könnten.

Was die Zukunft bringt, wird nur die Zeit zeigen. Aber eines ist sicher. Indem sie die Verwendung von Wallets einfacher und sicherer macht, wird die Kontoabstraktion als starker Katalysator für die Skalierung selbstverwahrender Blockchain-Wallets auf Millionen von Mainstream-Krypto-Benutzern dienen. In der Zwischenzeit bauen wir weiter.