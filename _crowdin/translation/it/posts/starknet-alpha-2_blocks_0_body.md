### TL;DR

* StarkNet ora supporta la compostabilità, la caratteristica principale che definisce la fase di StarkNet’s Constellations.
* Stiamo rilasciando un framework di test per StarkNet — gli sviluppatori ora possono testare i loro contratti localmente ed efficacemente.
* Questa versione include diversi notevoli miglioramenti delle prestazioni, come il supporto per Merkle-Patricia Tries e un builtin per operazioni bitwise.
* Fronte dell’ecosistema:

1. **Contratti Standardizzati**: OpenZeppelin svilupperà contratti standardizzati per StarkNet, come hanno fatto per Ethereum!
2. **EVM->Cairo Compiler**: il team Warp @ Dutch mind ha dimostrato la compilazione di ERC-20 codice di solidarietà per i contratti StarkNet

### Sfondo

StarkNet è una Validity-Rollup decentrata senza permesso (aka a “ZK-Rollup”). Abbiamo annunciato la sua[roadmap](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)all'inizio dell'anno. The[Alpha](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), currently running on a public Ethereum testnet, supporta già l'implementazione senza permesso di smart contract che implementa qualsiasi logica aziendale, con messaggi L1<>L2 e dati on-chain. Inoltre, consente a qualsiasi utente di inviare transazioni alla rete senza permessi, Ethereum-style.

Questa versione: StarkNet Alpha 2, include la caratteristica principale che ci permette di passare da Planets a Constellations: la composizione tra smart contract distribuiti.

### Caratteristiche

StarkNet Alpha 2 introduce le seguenti caratteristiche:

* **Composability:**StarkNet Alpha ora supporta l'interazione tra smart contract — prima della pianificazione! La bellezza di questo aggiornamento è che gli sviluppatori possono aspettarsi quasi la stessa esperienza di Ethereum; le chiamate sono sincrone e possono essere utilizzate come chiamate di funzione. Attendiamo con ansia le nuove applicazioni che beneficeranno sia di scala computazionale illimitata sia di composizione contrattuale, come scatenato da StarkNet. Per capire come utilizzare questa funzione, puoi iniziare seguendo questo[tutorial](https://www.cairo-lang.org/docs/hello_starknet/calling_contracts.html). Ci piacerebbe sentire il tuo feedback e vedere cosa stai costruendo sul discord[StarkNet](https://discord.gg/uJ9HZTUk2Y).
* **Local Testing Framework:**you asked and we delivered — a[better testing framework](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/starknet/testing). Questo consentirà agli sviluppatori di accelerare il loro sviluppo dApp testando le loro distribuzioni di contratti StarkNet e interazioni localmente — senza dipendenze esterne. Questa versione include solo l'interazione L2, le versioni successive espanderanno la funzionalità e la facilità d'uso. Controlla il tutorial[qui](https://www.cairo-lang.org/docs/hello_starknet/unit_tests.html)e ci piacerebbe sentire il tuo feedback su quella funzione.
* **Miglioramenti Delle Prestazioni:**

**Patricia Trees:**abbiamo migliorato il design di StarkNet per supportare velocità superiori e tempi di generazione più brevi passando all'impegno di Stato di Merkle-Patricia Tree ([documentazione](https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/cairo/common/patricia_utils.py)). Questo cambiamento consente la creazione di blocchi molto più grandi, riducendo così il costo per transazione. Il passaggio a un impegno statale più sofisticato è stato permesso dal Cairo, il linguaggio ZKP — una componente fondamentale del sistema operativo StarkNet.

**Bitwise Operations:**we have added a[builtin](https://www.cairo-lang.org/docs/how_cairo_works/builtins.html)to support much more efficient bitwise operations in StarkNet contracts ([documentation](https://www.cairo-lang.org/docs/reference/common_library.html#common-library-bitwise)).

* **Goerli:**StarkNet si sta muovendo da Ropsten a[Goerli](https://goerli.etherscan.io/address/0xee02F29aE9A4988aE064940bF11954d6eafE26Ac)! Finalmente abbiamo liberato il nostro sistema dai capricci degli Dei di Ropsten. Alpha 2 sarà ora in esecuzione su un ambiente di sviluppo più stabile.

### Ecosistema

L'ecosistema StarkNet è in continua crescita e siamo felici di condividere le ultime notizie:

* **Contratti standardizzati**: siamo onorati di lavorare con OpenZeppelin sulla libreria di contratti standard di StarkNet. Il loro lavoro canonico sui contratti standardizzati di Ethereum ci serve tutti quotidianamente, e siamo fiduciosi che saranno così influenti qui.
* **EVM->Cairo Compiler**: il team Warp[ha dimostrato](https://medium.com/nethermind-eth/warp-your-way-to-starknet-ddd6856875e0)transpilazione di un contratto ERC-20 da EVM bytecode a un contratto StarkNet e deployment su StarkNet. Questo sforzo si sta muovendo rapidamente, e il nostro prossimo obiettivo è la transpilazione di contratti intelligenti arbitrari da Yul al Cairo.
* **Maker-on-StarkNet**: una[proposta](https://forum.makerdao.com/t/mip39c2-sp19-adding-the-starknet-engineering-core-unit-sne-001/9745)è stata presentata al DAO Maker per implementare il protocollo Maker su StarkNet. La prima fase propone un ponte DAI da Ethereum a StarkNet con il minting DAI su StarkNet da seguire.
* **StarkNet/Cairo Auditing Services**: stiamo impegnando più società di revisione contabile per fornire servizi di revisione dei programmi StarkNet smart contract e Cairo.

### Mainnet Intorno all'angolo

Ci stiamo preparando per il lancio StarkNet Alpha Mainnet, iniziando gradualmente con un set di applicazioni whitelisted. Diversi progetti sono in corso e si aggiungono attivamente di giorno in giorno. Per partecipare alla festa, sei invitato a raggiungere via[discord](https://discord.gg/uJ9HZTUk2Y).

**Aggiornamento (novembre 2021):**StarkNet Alpha è in diretta su Ethereum Mainnet