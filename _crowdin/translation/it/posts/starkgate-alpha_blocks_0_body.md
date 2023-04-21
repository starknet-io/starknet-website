### TL;DR

* La prima versione di StarkNet Bridge, StarkGate Alpha, è in diretta su**[Testnet](https://goerli.starkgate.starknet.io/)**e su**[Mainnet](https://starkgate.starknet.io/)**!
* Attendiamo il feedback della comunità su come le cose possono essere migliorate. Puoi inviare il tuo feedback sia per[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)che per[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).
* L'implementazione di Mainnet seguirà presto (aggiornamento, 9 maggio 2022: StarkGate è in diretta su Mainnet)

Emozione! Siamo entusiasti di rilasciare StarkGate Alpha, la prima versione di StarkNet’s Bridge, ora in diretta su Goerli testnet, con distribuzione Mainnet da seguire presto.*

\*(aggiornamento, 9 maggio 2022: StarkGate è in diretta su Mainnet)

**Importante disclaimer: questa è una versione alpha su StarkGate Alpha (leggi la stampa fine qui sotto!).**

![](/assets/starkgate_01.png)

Prima di continuare, vai a controllarlo! [StarkGate Testnet](https://goerli.starkgate.starknet.io/),[StarkGate Mainnet](https://starkgate.starknet.io/)

StarkGate funge da gateway tra Ethereum e[StarkNet](https://starknet.io/)e permette agli utenti di fare tutto ciò che possono aspettarsi da un bridge.

#### **Dove posso trovare informazioni su come funziona StarkGate?**

Per capire come funziona StarkGate, leggere la[documentazione tecnica](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)e dare un'occhiata al[codice](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate). Si noti che questa è la prima versione, e invitiamo i tuoi commenti e suggerimenti su come migliorare sia[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)che[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).

#### **Quali token saranno supportati da StarkGate?**

* StarkGate Alpha su Goerli supporta ETH e alcuni altri token ERC-20. L'elenco completo e gli indirizzi contrattuali pertinenti, sia su Ethereum e StarkNet, sono disponibili in questo[repo](https://github.com/starkware-libs/starknet-addresses).
* Su Mainnet, inizialmente StarkGate Alpha supporterà solo ETH per consentire l'uso del meccanismo di tassa. Più tardi, aggiungeremo il supporto per WBTC, USDC, USDT e DAI. Puoi vedere gli indirizzi relativi al contratto in questo[repo](https://github.com/starkware-libs/starknet-addresses/blob/master/bridged_tokens/mainnet.json).

Più avanti lungo la strada, pubblicheremo il meccanismo per l'aggiunta di supporto per ulteriori gettoni.

#### **Quali limitazioni di sicurezza avranno StarkGate Alpha su Mainnet?**

StarkGate Alpha on Mainnet è lanciato con due limitazioni, al fine di ridurre i rischi connessi all'utilizzo di una versione Alpha:

1. Il valore totale bloccato (TVL) nel ponte su L1 limiterà la quantità di ciascun tipo di token.
2. L'importo massimo di ogni transazione inviata da L1 a L2 (Ethereum→StarkNet) tramite StarkGate sarà limitato.

Abbiamo in programma di allentare gradualmente questi limiti e sollevarli completamente man mano che la fiducia cresce. I parametri aggiornati possono essere trovati nella documentazione[di StarkGate](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge).

![](/assets/starkgate_02.png)

### Alpha e cosa significa

Come sempre, ti ricordiamo che StarkNet è attualmente nella sua fase**Alpha**:

* Le cose possono rompersi. Se falliscono catastroficamente, i tuoi fondi potrebbero essere persi (**leggi la clausola di esclusione di responsabilità sotto**!).
* Sia i contratti StarkNet Alpha che StarkGate possono essere aggiornati senza timelock. Mentre ci aspettiamo di annunciare tali aggiornamenti molto prima del tempo, in caso di rischi imminenti per la sicurezza (ad esempio, se viene trovato un bug critico), l'aggiornamento può essere applicato con pochi o nessun avvertimento.
* Il codice del ponte, così come le porzioni di StarkNet Alpha, non sono ancora stati verificati. Gli audit ABDK e Dutch mind di StarkGate Alpha saranno presto completati.

Incoraggiamo tutti gli utenti a migliorare il bridge fornendo il loro feedback utilizzando una delle seguenti piattaforme:

1. [Repo frontend StarkGate](https://github.com/starkware-libs/starkgate-frontend)
2. [Repo contratti StarkGate](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate)
3. [StarkNet Shamans](http://community.starknet.io/)

Per domande e supporto anti-riserva, unisciti al[server Discord StarkNet](https://discord.gg/uJ9HZTUk2Y).

### Disclaimer

***StarkNet Alpha è un sistema nuovo e complesso che non è stato completamente controllato. Lo stesso vale per il ponte StarkNet. Come tutti i sistemi software complessi, sia StarkNet che il bridge possono contenere bug che, in casi estremi, potrebbe portare a una perdita di tutti i fondi. Così,***battuta con attenzione e attenzione!******

*L'ecosistema StarkNet è un insieme ampio e in rapida crescita di team e individui indipendenti, su cui StarkWare non ha alcuna supervisione e non si assume alcuna responsabilità. Qualsiasi progetto sviluppato da membri dell'ecosistema può contenere bug che, in casi estremi, potrebbero portare a una perdita di tutti i fondi. Inoltre, man mano che vengono utilizzati più smart contract, aumenta il potenziale di insetti dannosi non voluti e persino truffe e tappeto dannosi. Quindi, trattare tutti gli smart contract su StarkNet come si tratta smart contract su Ethereum, e utilizzare solo quelli che hai buone ragioni per fidarti come sicuro.*