### Spannende Zeiten vor sich liegen

Alpha 4 wurde heute auf Goerli veröffentlicht. Diese Version ist der Mainnet-Release-Kandidat und wenn alles planmäßig läuft, wird bis zum Ende des Monats auf Mainnet eingesetzt.

Alpha 4 folgt den Features der Alpha 3, die unter anderem enthalten sind Verbesserungen der Zeit der Zusammenstellung von Kairo, Vertragskonstruktoren und vieles mehr (siehe[vollständige Versionshinweise](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.5.0)).

Wichtiger Hinweis: Dies ist immer noch eine Alpha-Version — um deinen Vertrag auf dem Mainnet-Einsatz zu verteilen, folgen Sie bitte den Richtlinien der neuen Apps[an Bord](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu).

### Neue Funktionen

Obwohl das Hauptaugenmerk dieser Version auf der Vorbereitung auf den Mainnet-Einsatz liegt, enthält sie auch einige neue Features:

#### Adresse des Vertrages erhalten

Verträge können nun ihre eigene Adresse über die neue Syscall \`get_contract_address\` beziehen. Wir können endlich den Selbstbedienungsvertrag in Ordnung bringen.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">RIP Selfie Vertrag: September 2021-November 2021</p>&mdash; Francesco Ceccon (@ceccon_me) <a href="https://twitter.com/ceccon_me/status/1458410251078836227?ref_src=twsrc%5Etfw">10. November 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### Blockhash

Blöcke werden nun über Hash anstatt über Id identifiziert. Dies folgt unserem letzten Übergang zu Transaktions-Hashes. Alle APIs wurden entsprechend aktualisiert. Wir werden demnächst die vollständige technische Dokumentation des Systems veröffentlichen, die auch die Spezifikation der Blockstruktur enthalten wird.

#### Vertragsadressen

Diese Version führt eine Änderung der Art und Weise ein, wie Vertragsadressen berechnet werden. Die Adresse ist ein Pedersen-Hash auf der Anruferadresse, ein Salz (zufällig oder vom Verwender ausgewählt), den Vertrags-Code-Hash und den Hash der Konstruktor-Argumente angehängt durch ein Präfix.

```
Hash(PREFIX, Anrufer_Adresse, Salz, Contracct_hash, ctr_args_hash)
```

In der aktuellen Version entspricht die Anruferadresse immer 0, aber in zukünftigen Versionen wird dies den Einsatz von Verträgen direkt aus bestehenden Verträgen ermöglichen.

Beachten Sie, dass dieses Schema CREATE2 sehr ähnlich ist.

[Siehe die vollständigen Versionshinweise](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.6.0)

#### Token Brücken

Tokenbrücken sind ein entscheidender Teil der StarkNet-Infrastruktur. Sie ermöglichen die Übertragung von Guthaben zu und von StarkNet. Die Brücke wird zum Zeitpunkt der Veröffentlichung nicht eingesetzt; aber es sollte in ein paar Tagen verfügbar sein — zusammen mit der vollständigen Dokumentation seiner Funktionalität und Nutzung. Wichtig ist, dass die Brücke das[L1<>L2 Messaging-](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html)Protokoll verwendet. Als solcher bietet es kurze Auszahlungszeiten – sobald eine Auszahlung in einer Charge enthalten ist und auf L1 akzeptiert wird Das Guthaben steht dem Nutzer sofort auf L1 zur Verfügung.

Dies ist die erste Version der Tokenbrücken, und wir würden uns freuen, wenn das Ökosystem darauf Rückmeldungen erhält.

### StarkNet beitreten

Es hat noch nie eine bessere Zeit gegeben, der wachsenden StarkNet-Gemeinschaft beizutreten. Du kannst an der Unterhaltung im[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)teilnehmen, an einem[Online-Workshop teilnehmen](https://forms.reform.app/starkware/join-a-starknet-workshop/2ma1x8), oder verwenden Sie eines der[Tutorials](https://www.cairo-lang.org/docs/hello_starknet/index.html), um Ihre erste eigene App zu erstellen.

**Update (Nov. 2021):**StarkNet Alpha ist live auf Ethereum Mainnet