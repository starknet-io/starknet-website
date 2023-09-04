Haben Sie jemals vergessen, Ihr Vermögen vom Mainnet abzuheben, nachdem Sie es über Starkgate überbrückt haben? Dank der unglaublichen Arbeit unserer Entwickler können Sie sich jetzt von dieser Sorge verabschieden.

### Wir freuen uns, Ihnen mitteilen zu können, dass[SpaceShard](https://www.spaceshard.io/)eine aufregende neue Funktion für Starkgate eingeführt hat: 1-Klick-Abhebungen!

Mit der 1-Klick-Auszahlungsfunktion können Sie Ihre überbrückten Vermögenswerte jetzt mühelos aus dem Mainnet abrufen, ohne eine separate Auszahlungstransaktion einleiten zu müssen. Machen Sie sich keine Sorgen mehr darüber, dass Sie die Auszahlung vergessen oder sich mit komplizierten Auszahlungsverfahren herumschlagen müssen. 🥳🥳🥳

![Diese Funktion vereinfacht den Vorgang und ermöglicht es Ihnen, Ihr Guthaben mühelos mit nur einem Klick abzuheben.](/assets/meme-image-spaceshard.jpg "Diese Funktion vereinfacht den Vorgang und ermöglicht es Ihnen, Ihr Guthaben mühelos mit nur einem Klick abzuheben.")

## Nehmen Sie an unserem Frühtesterprogramm teil!

Wir laden Sie ein, an unserem Frühtesterprogramm teilzunehmen, um den Komfort und die Effizienz der 1-Klick-Auszahlungsfunktion von Starkgate aus erster Hand zu erleben. Besuchen Sie noch heute die**[Starkgate-Website](https://starkgate.starknet.io/terms)**, um ein früher Tester zu werden und diesen aufregenden Fortschritt in der Überbrückungstechnologie zu erkunden.

## Wie benutzt man es?

Gehen Sie zu**[https://goerli.starkgate.starknet.io](https://goerli.starkgate.starknet.io/)für Testnet-Option**oder zu**\[https://starkgate.starknet.io/](https://starkgate.starknet.io/**)\ *\* für Mainnet.

Stellen Sie sicher, dass Sie eine Verbindung mit Ihren Metamask- und Argent/Braavos-Wallets herstellen.

![Stellen Sie sicher, dass Sie eine Verbindung mit Ihren Metamask- und Argent/Braavos-Wallets herstellen.](/assets/metamask-argent-braavos-connection.jpg)

Gehen Sie zur Registerkarte „Abhebung“, geben Sie den Betrag ein, den Sie abheben möchten, und aktivieren Sie dann „*Verwenden Sie den automatischen Abhebungsdienst von SpaceShard*“.

![](/assets/withdrawl-tab.jpg)

Abhängig von der von Ihnen verwendeten Wallet wird ein Popup angezeigt. In diesem Fall ist das Argent-Wallet mit Starkgate verbunden (siehe Bild unten).

![](/assets/argent-popup.jpg)

Bestätigen Sie die Transaktion auf der Argent-Wallet. Es hinterlegt die Token auf der Starkgate-Brücke und zahlt eine geringe ETH-Gebühr an den One-Click-Dienstleister.

Sobald die Transaktion bestätigt ist, können Sie den Status Ihrer Transaktion auf**[Starkscan](https://starkscan.co/)**oder**[Voyager](https://voyager.online/)überprüfen.**

![](/assets/transaction-is-being-processed-on-sn.jpg)

Der One-Click-Auszahlungsservice wartet, bis die Transaktion auf L1 akzeptiert wird.

![](/assets/transaction-gets-accepted-on-l1.-.jpg)

In der Zwischenzeit kann der Benutzer zu Starkgate zurückkehren, um den Status der Auszahlungsanforderung zu überprüfen. Um den Auszahlungsverlauf zu überprüfen, klicken Sie auf das Argent-Widget in der oberen rechten Ecke. Sobald es auf L1 akzeptiert wird, werden Benutzer per Popup auf Starkgate benachrichtigt.

![](/assets/starkgate-page.jpg)

Hier ist ein genauerer Blick auf die Auszahlungshistorie. Sobald die Auszahlung abgeschlossen ist, können Benutzer auf die Bestätigung zugreifen, indem sie auf die Schaltfläche „Ethereum Tx“ klicken. Dadurch werden sie zu StarkScan weitergeleitet.

![](/assets/withdrawal-history-confirmation.jpg)

Eine doppelte Überprüfung ist immer ein Muss und Benutzer können die Bestätigung auch auf**[Etherscan](https://etherscan.io/)**finden. Die letzte Phase der Auszahlung sollte wie im Bild unten aussehen, wo der USDC-Token auf das L1-Empfängerkonto übertragen wurde.

![](/assets/etherscan.jpg "Voila! So einfach, so Starknet!")

*Voila! So einfach, so Starknet!*

## F&A Wie kann ich meine Transaktion vom Starkgate-Relayer verarbeiten lassen?

> *Ermitteln Sie die aktuellen Gaskosten für die Abwicklung Ihrer Transaktion und erstellen Sie dann einen Mehrfachanruf auf L2. Diese Transaktion muss die Übertragung der Gaskosten an die Relayer-Adresse und den Abzug von Token aus dem Brückenvertrag beinhalten. Ihre Transaktion wird verarbeitet, sobald sie auf L1 akzeptiert wird. Ein Beispiel für eine Knotenanwendung finden Sie hier.*

## Mit welchen Wertmarken kann ich die Benzinkosten bezahlen?

> *Derzeit akzeptieren wir L2-ETH-Token. Später werden wir die Gebührenzahlungsoptionen auf andere Token wie WBTC und USDC/T ausweiten.*

## Welche Token werden vom Relayer unterstützt?

> *Im Mainnet verarbeitet der Relayer vier Token: ETH, USDC, USDT und WBTC. Weitere Informationen finden Sie in dieser Adressliste. Auf Testnet sind nur ETH-Token verfügbar.*

## Wie berechnet man die Gaskosten?

> *Die Gaskosten werden anhand des Durchschnitts des in den letzten 8 Stunden für L1-Blöcke erfassten Grundgebührenpreises berechnet. In Zukunft werden die Gaskosten aufgrund des von uns implementierten Batch-Mechanismus noch niedriger sein. Grundsätzlich gilt: Je mehr Benutzer den Dienst nutzen, desto günstiger wird er für alle! Pure Magie 🪄✨*

## Wie lange dauert es, bis der Relayer meine Auszahlung bearbeitet?

> *Der Relayer wird versuchen, Ihre Transaktion so schnell wie möglich auszuführen. In einigen Fällen sind die L1-Netzwerkgebühren jedoch höher als erwartet, was bedeutet, dass der Relayer auf bessere Preise wartet, bevor er die Abhebungen durchführt.*

## Wie führt der Relayer die Auszahlung durch?

> *Der Relayer führt Abhebungen pro Batch durch. Jedes Mal, wenn der Relayer gültige Abhebungen erkennt, puffert er diese und führt dann eine Abhebungsfunktion durch einen Mehrfachaufruf aus. Dieser Ansatz ermöglicht es uns, die Gaskosten für den Benutzer zu senken.*

## Was passiert, wenn ich einen Fehler gemacht und nicht die korrekten Benzinkosten eingestellt habe?

> *In diesem Fall ignoriert der Relayer Ihre Transaktion und die gezahlten Benzinkosten werden nicht erstattet. Die einzige Möglichkeit, Ihre Token zu erhalten, besteht darin, sie manuell abzuheben. Wir entwickeln die Version, bei der Sie eine Rückerstattung für den Versand erhalten und diese bei Bedarf schneller erledigen können, wenn Sie bereit sind, mehr Benzin zu zahlen.*

## Kann ich eine zweite Transaktion durchführen, um die fehlenden Benzinkosten zu decken?

> *Derzeit ist dies nicht möglich, aber wir sind dabei, eine Lösung zu entwickeln, damit Sie zwischen einer normalen und einer schnelleren Auszahlungsgeschwindigkeit wählen können.*

## Ich habe die korrekten Benzinkosten bezahlt, aber meine Transaktion wurde nicht verarbeitet. Warum?

> *Entweder wurde Ihre Transaktion nicht ordnungsgemäß ausgeführt:*
> 
> \- Die Transaktion ist kein Mehrfachaufruf
> 
> \- Der zur Bezahlung der Benzinkosten verwendete Token ist nicht ETH
> 
> *Oder:*
> 
> \- Der Relayer wartet auf einen Rückgang der Gaspreise auf L1. Wenn dies nicht der Fall ist, können Sie sich gerne an das SpaceShard-Team unter[Discord](https://discord.gg/6PKcsRPQKC)wenden.

## Wo kann ich den Starkgate-Relayer testen?

> *Sie haben über Starkgate, die offizielle Starknet-Brücke, Zugriff auf die Relayer-Funktion.*

Wir hoffen, dass dieser Leitfaden Ihnen dabei geholfen hat, Ihnen zu zeigen, wie Sie die Ein-Klick-Auszahlungsfunktion von SpaceShard auf Starkgate nutzen können.

Wenn Sie Fragen haben oder weitere Informationen benötigen, können Sie sich gerne über unsere**Discord**-Community an uns wenden. Wir arbeiten kontinuierlich daran, das Bridging-Erlebnis zu verbessern und freuen uns, Sie als Ersttester an Bord zu haben.

Viel Spaß beim Abheben!

[](https://medium.com/tag/starkware?source=post_page-----5e96e5dc152c---------------starkware-----------------)