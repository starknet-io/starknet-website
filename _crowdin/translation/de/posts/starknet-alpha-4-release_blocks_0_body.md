### Spannende Zeiten liegen vor uns

Alpha 4 wurde heute auf Goerli veröffentlicht. Diese Version ist der Mainnet-Release-Kandidat und wird, wenn alles nach Plan läuft, bis zum Monatsende im Mainnet bereitgestellt.

Alpha 4 folgt auf die funktionsreiche Version von Alpha 3, die unter anderem Verbesserungen der Cairo-Kompilierungszeiten, Vertragskonstruktoren und vieles mehr beinhaltete (siehe die [Versionshinweise](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.5.0)).

Wichtiger Hinweis: Dies ist immer noch eine Alpha-Version. Um Ihren Vertrag auf der Mainnet-Bereitstellung bereitzustellen, befolgen Sie bitte die [Onboarding](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu) Richtlinien der neuen Apps.

### Neue Eigenschaften

Obwohl der Schwerpunkt dieser Version auf der Vorbereitung auf die Mainnet-Bereitstellung liegt, enthält sie auch mehrere neue Funktionen:

#### Holen Sie sich die Adresse dieses Vertrags

Verträge können nun ihre eigene Adresse über den neuen Systemaufruf „get_contract_address“ erhalten. Endlich können wir den Selfie-Vertrag auflösen.

RIP-Selfie-Vertrag: September 2021 – November 2021

— Francesco Ceccon (@ceccon_me) [10. November 2021](https://twitter.com/ceccon_me/status/1458410251078836227?ref_src=twsrc%5Etfw)

#### Hash blockieren

Blöcke werden jetzt über Hash statt über ID identifiziert. Dies folgt unserem jüngsten Übergang zu Transaktions-Hashes. Alle APIs wurden entsprechend aktualisiert. Wir werden in Kürze eine vollständige technische Dokumentation des Systems veröffentlichen, die auch die Spezifikation der Blockstruktur umfassen wird.

#### Vertragsadressen

Diese Version führt eine Änderung an der Art und Weise ein, wie Vertragsadressen berechnet werden. Die Adresse ist ein Pedersen-Hash für die Aufruferadresse, ein Salt (zufällig oder vom Bereitsteller ausgewählt), der Vertragscode-Hash und der Hash der Konstruktorargumente, alle mit einem Präfix angehängt.



In der aktuellen Version ist die Anruferadresse immer gleich 0, in zukünftigen Versionen wird dies jedoch die Bereitstellung von Verträgen direkt aus bestehenden Verträgen ermöglichen.

Beachten Sie, dass dieses Schema CREATE2 sehr ähnlich ist.

[Sehen Sie sich die vollständigen Versionshinweise an](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.6.0)

#### Token-Brücken

Token-Brücken sind ein wesentlicher Bestandteil der Starknet-Infrastruktur. Sie ermöglichen den Transfer von Geldern von und zu Starknet. Die Bridge ist zum Zeitpunkt der Veröffentlichung noch nicht im Einsatz, dürfte aber in wenigen Tagen verfügbar sein – zusammen mit der vollständigen Dokumentation ihrer Funktionalität und Nutzung. Es ist wichtig zu beachten, dass die Bridge das Protokoll [L1<>L2 Messaging](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html) verwendet. Daher bietet es kurze Auszahlungszeiten – sobald eine Auszahlung in einen Stapel aufgenommen und auf L1 akzeptiert wird, steht das Geld dem Benutzer auf L1 sofort zur Verfügung.

Dies ist die erste Version der Token-Brücken und wir würden gerne Feedback vom Ökosystem dazu erhalten.

### Treten Sie Starknet bei

Es gab noch nie einen besseren Zeitpunkt, der wachsenden Starknet-Community beizutreten. Sie können sich im [Starknet-Discord](https://discord.gg/uJ9HZTUk2Y)an der Diskussion beteiligen, an einem [Online-Workshop](https://forms.reform.app/starkware/join-a-starknet-workshop/2ma1x8)teilnehmen oder eines der [Tutorials](https://www.cairo-lang.org/docs/hello_starknet/index.html) nutzen, um mit der Erstellung Ihrer ersten eigenen App zu beginnen.

Update (November 2021): Starknet Alpha ist live im Ethereum Mainnet