### TL;DR

* StarkNet Alpha 0.7.0 rilasciato a Goerli; ricco di miglioramenti
* I contratti possono ora essere aggiornati utilizzando il modello di aggiornamento proxy
* I contratti possono ora emettere eventi
* Supporto per le chiamate del sistema Block Number e Block Timestamp tanto attese

### Introduzione

Siamo lieti di rilasciare Alpha 0.7.0, una versione ricca di nuove funzionalità e miglioramenti. Uno dei migliori stimolanti per StarkNet negli ultimi mesi è stato il maggiore coinvolgimento della comunità nel plasmare il futuro di StarkNet. Questa versione risponde ad alcune esigenze ardenti della comunità.

#### Modifiche alla convenzione sul nome

Il lettore osservante potrebbe aver notato che la precedente release di StarkNet Alpha si chiamava Alpha 4, mentre ora stiamo rilasciando Alpha 0.7.0. Abbiamo deciso di omettere il numero di versione alfa dedicato e di affidarci invece solo alla versione cairo-lang associata.

### Nuove Funzionalità

#### Potenziabilità Contratto

Il[modello di aggiornamento proxy](https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies)di OpenZeppelin è ora completamente supportato per gli aggiornamenti del contratto in StarkNet. Il modello Proxy è il metodo comune per abilitare gli aggiornamenti dei contratti su Ethereum. Alpha 0.7.0 abilita questo motivo su StarkNet.

Abbiamo fatto un breve[tutorial](https://starknet.io/docs/hello_starknet/default_entrypoint.html)per dimostrare un'implementazione di base del modello, e OpenZeppelin è già duro al lavoro implementando un contratto standard per il modello proxy; vedi il[prototipo](https://github.com/OpenZeppelin/cairo-contracts/pull/129).

#### Blocca numero e Blocca Timestamp

Alpha 0.7.0 aggiunge due nuove chiamate di sistema che molti dispositivi hanno chiesto. Queste chiamate consentono a un contratto di accedere al numero di blocco e al timestamp di blocco. Il numero di blocco restituisce il numero del blocco eseguito. Il timestamp del blocco restituisce il timestamp dato dal Sequencer alla creazione del blocco.

Puoi vedere un esempio di come utilizzare queste funzionalità nel[tutorial](https://starknet.io/docs/hello_starknet/more_features.html#block-number-and-timestamp).

#### Eventi

Sorpresa! Una caratteristica che è stata pianificata per una versione futura ha intrufolato la sua strada in questo precedente.

I contratti StarkNet ora supportano la definizione e l'emissione di eventi, consentendo loro di esporre le informazioni di esecuzione per le applicazioni off-chain da consumare. Gli sviluppatori di Ethereum troveranno la semantica e la sintassi molto simile a Solidity. Puoi leggere la documentazione[](https://starknet.io/documentation/events/)o seguire il[tutorial](https://starknet.io/docs/hello_starknet/events.html)che spiega questa funzione.

#### Rimosso %bdirettiva uiltins

La direttiva %builtin non è più necessaria nei contratti StarkNet. Questo cambiamento ha seguito una discussione della comunità sul modello di estensibilità del contratto[](https://community.starknet.io/t/contract-extensibility-pattern/210)su[StarkNet Shamans](https://community.starknet.io/). Semplifica in modo significativo l'usabilità di questo modello di estensibilità.

Ad esempio, il seguente contratto sarà modificato da:

```
%lang starknet

# Questa è la direttiva "%builtins".
# Non è più necessario.
%builtins range_check

@view
func add(x : felt, y : felt) -> (res : felt):
return (res=x + y)
end
```

A questo:

```
%lang starknet
@view
func add(x : felt, y : felt) -> (res : felt):
return (res=x + y)
end
```

Puoi controllare i contratti standard[ERC-20](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts/token), che utilizzano il nuovo modello.

#### Funzioni esterne Supporta rays of Structs

Alpha 0.7.0 supporta il passaggio e la restituzione di array di strutture in funzioni esterne. Questa funzionalità aggiuntiva consente ai Contratti Account di supportare meglio[multicalls](https://github.com/OpenZeppelin/cairo-contracts/pull/73#discussion_r753535751).

Multicall è una potente funzione di Astrazione dell'Account che consente ad un account di effettuare più chiamate in una singola transazione. Un caso di utilizzo ovvio è quello di creare una**singola transazione**che chiama la franchigia e poi il transferFrom.

Non vediamo l'ora di vedere cosa fa la comunità con esso.

#### Miglioramenti a StarkNet CLI

**Supporto per i blocchi in sospeso**

[I blocchi in sospeso](https://starknet.io/documentation/block-structure-and-hash/#pending_block)sono stati[introdotti](https://community.starknet.io/t/cairo-v0-6-2-api-change-pending-block/195)nell'ultima versione minore (v0.6.2) e hanno offerto conferme più veloci sulle transazioni. Questa versione include il supporto per la ricerca di questi blocchi tramite StarkNet CLI.

Per usarlo, in ogni comando CLI che prende block_number come argomento (contract_call/get_block/get_code/get_storage_at), possiamo interrogare StarkNet rispetto al blocco in sospeso specificando block_number=pendente.

**Supporto per i contratti account**

StarkNet utilizza l'astrazione del conto, cioè tutti gli account sono implementati come smart contract. Le prime implementazioni dei contratti di conto sono state effettuate da[Argent](https://github.com/argentlabs/argent-contracts-starknet)e[OZ](https://github.com/OpenZeppelin/cairo-contracts/blob/main/contracts/Account.cairo), ma ci aspettiamo molti altri a venire.

In StarkNet, tutte le transazioni devono passare attraverso un contratto di conto e il CLI ora permette l'interazione con StarkNet Alpha direttamente tramite contratti di conto. Vedi il[tutorial](https://starknet.io/docs/hello_starknet/account_setup.html#setting-up-a-starknet-account)su come configurarlo.

Funzionalità simili sono state aggiunte anche a[StarkNet.py](https://github.com/software-mansion/starknet.py/)e a[Nile](https://github.com/OpenZeppelin/nile)nell'ultimo mese.

#### L1<>L2 Messaggistica nel quadro di prova

Alpha 0.7.0 introduce il Postman. Il Postman consente agli sviluppatori di utilizzare il framework di test per testare i flussi più complicati.

Ad un alto livello — si calza la responsabilità di StarkNet Sequencer, di passare messaggi da L1 a L2 e L2 a L1. Si assicura che i messaggi inviati tramite il contratto di messaggistica di Solidity appariranno al contratto di destinazione StarkNet e i messaggi inviati da un contratto StarkNet appariranno nel contratto di messaggistica di Solidity.

#### E Più Caratteristiche

Alpha 0.7.0 fornisce molte altre funzionalità e modifiche, come l'aggiunta di una efficiente funzione radice quadrata alla libreria comune di matematica. Una lista completa appare nel[changelog](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.7.0).

### Prossimo Su?

Il supporto iniziale[Fee Mechanism](https://community.starknet.io/t/fees-in-starknet-alpha/286/29)sarà rilasciato in poche settimane, come una sub-versione di StarkNet.

### Maggiori Informazioni?

[starknet.io](https://starknet.io/): per tutte le informazioni StarkNet, tutorial e aggiornamenti.

[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y): unisciti per ottenere risposte alle tue domande, ottieni il supporto dev e diventa parte della comunità.

[StarkNet Shamans](https://community.starknet.io/): unisciti a seguire (e partecipare!) alle discussioni di ricerca StarkNet.