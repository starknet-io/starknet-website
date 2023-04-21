L'innovazione tecnologica nella blockchain è fiorita negli ultimi anni - STARKs, SNARKs, EIP-1559, Ethereum Merge - sono tutti grandi risultati tecnologici. Tuttavia, la progettazione di UX e UI non è riuscita a tenere il passo. La gente rimane bloccata sulle frasi a 16 parole, e entrare in DeFi senza un intermediario centralizzato è ancora troppo intimidatorio per molti . A bordo del prossimo miliardo di utenti in Web3, migliorare l'esperienza di onboarding utente è fondamentale.

Come ha dimostrato FTX (e Gemini, Celsius e Mt. Gox), mantenere l’autocustodia sui propri beni è di fondamentale importanza. Tuttavia, fino a poco tempo fa, i portafogli autodiali sono stati clunky e confuso per l'utente medio. La maggior parte delle persone dimenticano le loro password Web2 su base mensile; come si prevede che gli utenti mantengano la loro seed phrase e le chiavi private sicure per l'eternità?

In poche parole, è un incubo di sicurezza. Come abbiamo visto innumerevoli volte, una mossa sbagliata, che sia iniziata da cattivi attori o negligenza, può portare alla perdita di milioni di dollari.

Come primo punto di contatto per i nuovi utenti di criptovalute, i portafogli Ethereum devono essere facili da usare, sicuri e personalizzabili per soddisfare le esigenze di ogni utente. Ciò richiede agli sviluppatori di integrare la semplicità dei prodotti finanziari Web2 con le caratteristiche di Web3.

Questo è esattamente ciò che l'astrazione di conto raggiunge.

L'astrazione dell'account migliora la sicurezza e la sicurezza dei prodotti di portafogli self-custodial rimuovendo la dipendenza degli utenti sulla chiave privata e rendendo i portafogli più programmabili. Con questo UX migliorato, i portafogli non custodiali possono finalmente scalare a milioni di cripto-utenti tradizionali.

Ma per comprendere appieno l'impatto dell'astrazione del conto, dobbiamo aggiornarci su come funzionano i conti Ethereum.

### Le basi dei conti Ethereum

Ci sono due tipi di account Ethereum:

1. Conti Esternamente Posseduti (EOA)
2. Conti Contratti (CA)

Facciamo cadere un po 'più lontano.

### Account di proprietà esterna

Account di proprietà esterna, come MetaMask e Coinbase Wallet, sono il tipo tipico di account per gli utenti Ethereum. Ogni EOA è costituito da una chiave privata e pubblica, chiamata una coppia chiave.

Tutte le transazioni sono autorizzate e firmate da chiavi private. Una volta firmata una transazione, EVM verifica che la firma sia valida utilizzando l’indirizzo del conto EOA. La logica hard-coded in EVM significa che l'account (l'oggetto contenente i tuoi token) e la chiave privata (signer) sono accoppiati come uno.

Perdere la tua chiave privata significa perdere i tuoi fondi, o anche controllare il tuo account, per sempre.

### Conti contrattuali

Nel frattempo, gli account di contratto, sinonimo di astrazione dell'account, sono smart contract distribuiti sulla blockchain Ethereum. Questi contratti sono controllati dalla logica del codice e non richiedono chiavi private. A differenza di EOA, i conti contrattuali non possono avviare transazioni. Invece, le loro transazioni sono attivate da istruzioni da EOA.

### Perché l'astrazione dell'account conta

L'astrazione dell'account comporta l'astrazione della logica di autorizzazione codificata in modo rigido lontano da EOA, trasformare ogni conto in un smart contract programmabile che può essere adattato per soddisfare le esigenze di ogni individuo.

Come spiegato da Argent co-fondatore e Chief Science Officer Julien Niset in un recente evento[Stark @ Home](https://www.crowdcast.io/e/7olimxqv), questa logica di autorizzazione flessibile dà libertà agli sviluppatori di giocare con funzioni account come…

**Firmatari hardware:**Utilizzando un iPhone o un'enclave sicura di Android per trasformare qualsiasi smartphone in un portafoglio hardware. Da lì, gli utenti possono verificare le transazioni utilizzando dati biometrici come un'impronta digitale o Apple Face ID. Abbiamo già iniziato a vedere portafogli autocustodiali come Braavos[stendere questa funzione.](https://medium.com/@braavos_starknet_wallet/hardware-signer-the-last-innovation-for-wallet-crypto-everyday-users-7e1974f93944)

**Paymasters:**Consenti agli utenti di pagare le commissioni del gas in qualsiasi token, o anche di avere un meccanismo progettato da terze parti pagare per le transazioni.

**Social Recovery:**Nel caso in cui una chiave privata venga persa o compromessa, gli utenti possono autorizzare una nuova chiave come legittimo proprietario del portafoglio. Questo può includere una varietà di metodi di recupero attraverso contatti affidabili, portafogli hardware, o servizi di terze parti. L'idea è quella di rendere il recupero dell'accesso al tuo conto così facile come recuperare la password del tuo conto bancario tramite un'e-mail.

**Autenticazione multifunzione:**Simile alle pratiche comuni Web2 2FA, gli utenti possono impostare due (o più) metodi di autenticazione per i loro portafogli criptovalute, dove una transazione è firmata solo una volta che un utente conferma l'approvazione tramite una seconda opzione come e-mail o SMS. Gli utenti possono anche impostare limiti di trasferimento giornaliero o elenchi di indirizzi di conto di cui il portafoglio è automaticamente bloccato dall'interazione.

**Quantum Resistant and Gas-Efficient Signatures:**Ethereum current signature scheme ECDSA, è computazionalmente esteso (leggi: tasse di gas più elevate) e può essere rotto da computer quantici. Attraverso l'estrazione della firma, diversi contratti di conto utilizzano sistemi di firma più efficienti e quantificabili. StarkNet utilizza la propria curva proprietaria STARK-friendly.

Non solo queste funzionalità offrono agli utenti una maggiore sicurezza e flessibilità, ma anche più importante, si traducono in una**migliore**esperienza utente.

Elencato da Vitalik Buterin come un “sogno di lunga durata” per la comunità di sviluppatori Ethereum, le innovazioni intorno all'astrazione dell'account, principalmente EIP-2938 e EIP-3074, hanno roteato dal 2020. Tuttavia, entrambi hanno richiesto compromessi in materia di sicurezza e attuazione. [EIP-4337](https://github.com/ethereum/EIPs/blob/3fd65b1a782912bfc18cb975c62c55f733c7c96e/EIPS/eip-4337.md), lo sviluppo più promettente finora, propone una versione di astrazione dell'account senza richiedere modifiche al protocollo Ethereum.

### **Estrazione account e Starknet**

A differenza di Bitcoin ed Ethereum che stanno adeguando i loro protocolli attuali per supportare l'astrazione dell'account,[StarkNet](https://starkware.co/starknet/)ha implementato l'astrazione dell'account dal primo giorno. Se abbinato alla scalabilità e alle capacità delle nostre prove STARK, il potenziale di innovazione del portafoglio è illimitato. Questo è il motivo per cui la prossima generazione di portafogli self-custodial, come Argent e Braavos, sono attualmente costruiti sulla nostra rete.

L’approccio di StarkNet è simile a EIP-4337,[riconoscendo che](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781)l'astrazione completa dell'account causerebbe ancora confusione UX e[potrebbe aprire la porta](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4337.md#rationale)per gli attacchi ai sequencer. Piuttosto, mira a ottenere sia l'astrazione delle firme che l'astrazione dei pagamenti, mutualizzando alcune delle infrastrutture necessarie e fuori catena.

E mentre c'è ancora molto più lavoro da fare, l'astrazione del conto sta guadagnando la trazione oltre un piccolo cerchio di nativi cripto. In dicembre,[Visa ha proposto l'idea](https://www.coindesk.com/tech/2023/01/11/ethereum-upgrade-could-make-it-harder-to-lose-all-your-crypto/)di utilizzare l'astrazione dell'account per impostare pagamenti ricorrenti automatici su StarkNet. Utilizzando un account delegabile, gli utenti possono concedere l'autorizzazione per avviare un pagamento a un contratto smart pre-approvato. Da lì, lo smart contract sarà programmato per dedurre un determinato importo di pagamento in un giorno specifico, per una durata determinata di tempo. Mentre Visa non ha ancora rivelato i suoi piani per i propri servizi, l'interesse da solo parla volumi, e può prefigurare un mondo in cui piattaforme di abbonamento di grande tecnologia come Netflix e Spotify potrebbero abbracciare cripto-adozione.

Quanto a ciò che il futuro contiene, solo il tempo lo dirà. Ma una cosa è certa. Rendendo i portafogli più facili e sicuri da usare, l'astrazione dell'account servirà da potente catalizzatore per i portafogli blockchain self-custodial da scalare a milioni di cripto-utenti tradizionali. Nel frattempo continueremo a costruire.