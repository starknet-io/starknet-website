### TL;DR

* Stiamo rilasciando il Cairo 1.0-alpha.2, che porta una serie di nuove funzionalità alla lingua
* È ora possibile attuare un contratto ERC20
* Queste nuove caratteristiche linguistiche saranno applicabili nella prossima versione StarkNet-v0.11.0

### Nuove funzionalità!

Cairo 1,0 sta continuando il suo ritmo di miglioramento veloce. Il rilascio di oggi introduce, tra le altre cose, tutte le caratteristiche necessarie per scrivere un contratto ERC-20.

Per citare alcune delle nuove funzionalità:

* Dizionari
* Eventi nei contratti
* Variabili di memorizzazione mappatura
* Trait support
* Incidenza del tipo
* Metodi

Vedi l'elenco completo nel repository GitHub [.](https://github.com/starkware-libs/cairo)

Diamo un’occhiata ad un esempio di contratto ERC20 (l’esempio concreto completo è, ovviamente, su[GitHub](https://github.com/starkware-libs/cairo/blob/main/crates/cairo-lang-starknet/test_data/erc20.cairo)) per dimostrare un caso di utilizzo di un evento e mappature nello storage:

![](/assets/0_i4ch5-4rxxal4rkt.png)

### Saltate nell'acqua!

Continuiamo a lavorare su due vettori paralleli:

1. Evolvi il Cairo 1.0 a tutta velocità verso la piena compatibilità con il vecchio Cairo.
2. Sviluppa Starknet v0.11.0 che sosterrà i contratti scritti in Cairo 1.0

Nel frattempo, incoraggiamo gli sviluppatori a iniziare a scrivere con il Cairo 1.0 e familiarizzarsi con esso.

Per qualsiasi domanda — è possibile utilizzare il Cairo 1.0 Discord[canale](https://discord.com/channels/793094838509764618/1065544063245365288).

Per qualsiasi suggerimento o feedback — non esitate ad aprire un[problema](https://github.com/starkware-libs/cairo/issues)nel repo del Cairo.