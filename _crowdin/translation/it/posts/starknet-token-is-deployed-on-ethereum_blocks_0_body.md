### TL;DR

* Il token StarkNet (STRK) è ora distribuito su Ethereum Mainnet
* **Attenzione alle truffe!**StarkNet Tokens non sono offerti in vendita
* Ci vorrà tempo per la Fondazione per determinare il meccanismo di distribuzione dei suoi gettoni
* I token detenuti da azionisti StarkWare, dipendenti e sviluppatori di software partner indipendenti sono bloccati per un periodo di quattro anni, con rilascio graduale a partire da un anno
* Il token sarà ulteriormente il decentramento di StarkNet, grazie al suo utilizzo per votare, staking e pagare le tasse

Oggi,[StarkNet](https://starknet.io/)sta compiendo un altro passo verso il decentramento. Il token StarkNet è ora[su Ethereum](https://etherscan.io/address/0xca14007eff0db1f8135f4c25b34de49ab0d42766). Recupero rapido: STRK sarà utilizzato come un token di staking per la partecipazione ai meccanismi di consenso di StarkNet, come un token di Governance, e per il pagamento delle commissioni di transazione. La motivazione di ciascuna di queste utilità è presentata in[la nostra proposta di decentramento](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), nella sezione intitolata “A cosa serviranno i gettoni da usare?”

***Attenzione alle truffe:**al momento della scrittura non c'è modo di acquistare StarkNet Tokens; il periodo di divieto di vendita rimarrà in vigore fino a un ulteriore preavviso da parte della[StarkNet Foundation](https://twitter.com/StarkNetFndn); seguire la comunicazione ufficiale dalla Fondazione StarkNet per conoscere eventuali aggiornamenti sullo stato di STRK. Puoi segnalare truffe e controllare altri rapporti di truffe nel canale[truffa-report](https://discord.gg/qypnmzkhbc)sul server[StarkNet Discord](http://starknet.io/discord).*

Questo post spiega il processo di allocazione dei token e come i contratti token distribuiti servono due delle tre utenze progettate del token, vale a dire, il voto e la posta in gioco. La terza utility — pagando le tasse StarkNet — sarà discussa in un momento successivo.

### Pianificazione del processo di allocazione del token

In precedenza abbiamo proposto un piano[](https://medium.com/starkware/part-3-starknet-token-design-5cc17af066c6)per l'assegnazione iniziale dei token. I token assegnati agli azionisti, ai dipendenti e agli sviluppatori di software indipendenti sono bloccati per quattro anni, con un programma di rilascio graduale che inizia dopo un anno. I gettoni bloccati possono essere utilizzati per il voto e la posta in gioco, ma non possono essere trasferiti o scambiati. Alcuni dei token sono bloccati tramite uno smart contract dedicato su Ethereum mentre altri token sono bloccati tramite custodi.

Separatamente, il 50,1% degli attuali token StarkNet sono assegnati alla StarkNet Foundation, da utilizzare per raggiungere i suoi[obiettivi](https://medium.com/@StarkNet_Foundation/welcome-to-the-world-starknet-foundation-7bd55d5dbc59)(cfr.[StarkWare post](https://medium.com/starkware/introducing-the-starknet-foundation-bd4b4379fbb)). Questi token non sono bloccati. Tuttavia, la Fondazione avrà bisogno di tempo per formulare il meccanismo esatto per assegnare ulteriormente tali gettoni e condividerà i suoi piani a tempo debito.

#### Perché bloccare?

Bloccare i token per il periodo di cui sopra garantisce che gli attuali contributori si allineino con gli incentivi a lungo termine di StarkNet. Essa scoraggia inoltre la speculazione sul token prima di un uso diffuso per i suoi scopi previsti: garantire la rete, pagare le tariffe, e decentrare la governance.

In seguito, spieghiamo come l'attuazione del token sostenga il voto e la posta in gioco.

### Votazione

La Fondazione avrà il compito di facilitare una sana governance e di formulare i meccanismi di voto. Lo StarkNet Token è stato progettato per consentire sia il voto diretto che una serie di meccanismi di delega.

#### Votazione L1

L'implementazione ERC-20 implementata ora include**opzionale**uso del modulo[delega di Compound](https://docs.compound.finance/v2/governance/). Questo modulo è ampiamente utilizzato per la votazione on-chain. Il motivo per cui è opzionale su StarkNet, e disattivato per impostazione predefinita, è la considerazione dei costi. Attivare significa che ogni trasferimento di StarkNet Tokens su L1 richiede gas supplementare necessario esclusivamente per monitorare i turni di voto.

#### Non-L1 voting

Le alternative al voto on-chain L1 con il modulo di delega di Compound includono il voto off-chain, così come i sistemi di voto on-chain basati su StarkNet (come[IstantaneotX](https://snapshot.mirror.xyz/cUOrwdtEs5PvNh0sqYWWxPjt8GdJWn_Qp3cl7E3_8IU)). Queste alternative, che riducono significativamente il consumo di gas per i trasferimenti di L1, non richiedono un supporto esplicito dal codice ERC-20 attualmente utilizzato, e sono quindi intrinsecamente supportate.

Come accennato in precedenza, tutti i token — bloccati e sbloccati — saranno utilizzabili nel meccanismo di voto di StarkNet.

### Staking

L’operazione StarkNet senza permesso e resistente alla censura richiede una selezione casuale di sequenziatori. La probabilità che un nodo venga selezionato in sequenza e proposto un blocco è proporzionale al numero di StarkNet Tokens che il nodo punta. La motivazione per l'utilizzo di StarkNet Tokens (piuttosto che, ad esempio, Ethereum o Bitcoin) è spiegata nella[proposta di governance](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), e i dettagli esatti della posta in gioco, la sequenza e la creazione di blocchi su StarkNet sono in corso di[discussione da parte della community](https://community.starknet.io/t/starknet-decentralized-protocol-introduction/2671)e devono ancora essere finalizzate.

Come per il voto, i gettoni possono essere utilizzati per mettere in scena anche quando sono bloccati. Ciò contribuisce alla diversità degli operatori StarkNet e alla resilienza di StarkNet.

### Summary

Il dispiegamento dei contratti StarkNet Token su Ethereum è un altro passo nel decentramento StarkNet.

Esortiamo gli sviluppatori e gli utenti a diffidare di truffe! Al momento della pubblicazione, nessun token è negoziabile e questo status di no-trade rimarrà in vigore fino a nuovo avviso da parte della Fondazione StarkNet.

Per ulteriori domande puoi andare al canale[Token-Discussioni](https://discord.gg/qypnmzkhbc)sul server[StarkNet Discord](http://starknet.io/discord).