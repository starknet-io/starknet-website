### TL;DR

I dApps L2-nativi possono ora prosperare senza restrizioni tradizionali del gas L1

### Introduzione

gli sviluppatori di dApp hanno sempre dovuto affrontare gravi vincoli a causa del limite di gas di Ethereum (L1). Limita non solo*come*questi dApps operano, ma anche*quello che*quei dApps sono in grado di fare.

Layer 2 (L2) offre agli sviluppatori dApp un campo computazionale verde, libero da questo soffitto di vetro a gas. Crediamo che la stragrande maggioranza dei dApps sarà L2-nativo entro un paio di anni: saranno stati costruiti dal terreno su L2 per beneficiare di questo grado di libertà computazionale.

### L1 gas limita la forma L1-nativa dApps

*Prendiamo in considerazione due esempi di dApps popolari il cui design è profondamente modellato da vincoli di gas L1: AMM e aggregatori DEX.*

Un Automated Market Maker (AMM) è essenzialmente un'approssimazione a basso gas di uno scambio basato su un order-book. Invece di consentire agli utenti di posizionare e rimuovere limiti, stop loss, o una varietà di altri tipi di ordini, L1 AMM consente solo semplici swap con un portafoglio di liquidità sottostante centrale — per tenere conto dell'intenso costo computazionale di L1.

Gli aggregatori DEX hanno idealmente bisogno di accedere a tutti i possibili pool di liquidità, anche il più piccolo pool di liquidità, per sfruttare i migliori prezzi per gli utenti. Tuttavia, a causa del costo di interrogare molti pool diversi, è semplicemente non vale la pena di negoziare sopra L1. È giustificabile accedere ai pool e pagare le commissioni di transazione associate solo quando i pool di liquidità hanno liquidità sufficientemente profonda. In una vena simile, le liquidazioni in prestito/prestito e altri dApps basati su garanzie reali potrebbero essere molto più accurate se la differenza tra lo sconto di liquidazione e la commissione di transazione fosse molto più ridotta.

La funzionalità limitata e il design di molti dApps L1 derivano direttamente dagli sviluppatori ottimizzando il loro codice per rispettare i vincoli di gas di Ethereum. Perché, potete chiedere, diciamo Ethereum? Il codice Solidity non può essere eseguito su molti L1s e anche su alcuni L2? Infatti, ma di questi, Ethereum è l'ambiente più costoso (e, quindi, sicuro). Solidity dApps sono progettati per “il link più costoso”, cioè, Ethereum. Di conseguenza, non beneficiano del vantaggio computazionale offerto da ambienti di runtime meno costosi. Per sbloccare le funzionalità predefinite progettando un dApp per l'ambiente di runtime più costoso, il codice di dApp deve essere adattato.

### L'ascesa di dApps nativi L2

Validity Rollups (alias ZK-Rollups) consentono un calcolo estremamente economico. A differenza di qualsiasi altra soluzione di ridimensionamento — il calcolo L2 può crescere in modo esponenziale con un impatto limitato sul costo del gas di verifica in catena. Inoltre, un Rollup di Validità elabora gli input per i calcoli – “dati testimoni” – senza consumare risorse aggiuntive di L1, consentendo calcoli con molti input.

Coding dApps nativamente su L2 in**[Cairo](https://www.cairo-lang.org/)**(un linguaggio Turing-complete per scalare dApps tramite prove STARK) sblocca un vasto regno di possibilità per gli sviluppatori. Permette loro di utilizzare quantità significative di dati – sia computazionali che testimoni – che non potevano usare prima.

Esploriamo tali dApps nativi L2 e le loro nuove capacità arricchite.

#### DeFi

Prima dell’onboarding a StarkEx, StarkWare’s Validity Rollup, dYdX ha funzionato come un L1 dApp su Ethereum. Ha offerto ai suoi utenti la leva di x10 su attività sintetiche e posizioni supportate con una sola attività sintetica. Rebuilding dYdX in Cairo come dApp nativa L2 fornisce una piattaforma DeFi drammaticamente più scalabile, più economica ed efficiente:

* Aggiornamenti del prezzo di Oracle: Tali aggiornamenti includono tipicamente decine di prezzi e firme da varie fonti per calcolare un mediano. A Validity Rollup fornisce una scala esponenziale della logica dell'oracolo di prezzo (verifica della firma e calcolo del prezzo mediano) — senza segnalare i dati dei testimoni a L1. Confrontare questo per dYdX L1 implementazione, dove ogni prezzo oracolo aggiornamento costano circa 300K gas e era, di conseguenza, la sua frequenza e le dimensioni della serie di importatori di prezzi.
* Leverage: Un feed di prezzo accurato permette a dYdX di stimare il rischio di una posizione in tempo reale e offrire una leva maggiore per gli utenti. Grazie agli aggiornamenti migliorati del prezzo dell'oracolo, dYdX ha aumentato la leva da x10 su L1 a x25 su L2.
* Cross-margin: Con dYdX su L2, i market maker possono effettuare ordini lunghi/brevi su molte attività utilizzando la stessa garanzia. Il regolamento medio su dYdX L2 comporta posizioni con più di 10 diversi asset sintetici! A titolo di confronto, avere questa capacità incrociata su L1 avrebbe più che raddoppiato il costo del gas nella catena.

#### Giochi e arte generativa

Il raccolto corrente dei giochi nativi L1 in genere memorizza gli asset di gioco su L1 mentre implementa l'intera logica di gioco in un'applicazione off-chain affidabile. Questo modello è un risultato diretto delle limitazioni del gas di L1. Grazie al calcolo a buon mercato su L2, gli sviluppatori di L2-native gaming dApps possono ora implementare la logica del gioco in un contratto intelligente e manipolare le risorse del gioco in modo affidabile, piuttosto che semplicemente memorizzarli. Portare la logica del gioco nel regno del calcolo senza fiducia è un passo significativo verso un mondo molto più ricco di giochi basati sulla blockchain. I giochi L2-nativi sono già in fase di sviluppo su StarkNet, la rete permissionless di StarkWare (ad esempio,[Dope Wars](https://github.com/dopedao/RYO)e[Influenza](https://medium.com/influenceth/influence-to-launch-on-starknet-afd3c26ea25a)).

Ma, quanto complesso può essere un gioco basato sulla blockchain? Ad esempio, gestire la grafica direttamente on-chain sembra impossibile —[o è](https://twitter.com/guiltygyoza/status/1449637155001798657)? Risolvere le equazioni differenziali e simulare il movimento planare in uno smart contract rappresenta un passo significativo verso quello che in futuro potrebbe essere un motore di fisica blockchain. Le implicazioni sono enormi. Immagina un gioco multigiocatore competitivo come Counter-Strike. Se si può simulare la logica di gioco on-chain, molti hack temuti sarebbero diventati una cosa del passato — i giocatori potrebbero godere di un gioco provabilmente equo.

Generative Art utilizza il calcolo, la casualità e altri dati per creare l'arte basata su blockchain. La logica più complessa e il calcolo che un artista può utilizzare senza fiducia, più opzioni esistono per generare pezzi unici di arte singolare. [WhaleStreet DAO](https://blog.whalestreet.xyz/whalestreet-dao-to-launch-gen-art-ecosystem-on-ethereum-with-starknet/)lancia uno dei primi progetti Gen Art su StarkNet, sfruttando le risorse computazionali illimitate di StarkNet.

### Cosa c'è dopo?

Rollup di validità — StarkEx e StarkNet, alimentati al Cairo, in particolare — fornire un ambiente in cui è possibile sviluppare e gestire dApps che consumano molti dati di calcolo o testimoni. Con tutti i vantaggi della tecnologia a libro mastro distribuito, prevediamo un futuro immensamente emozionante per L2-native dApps.

Cosa puoi*creare*con il calcolo generale supportato da compostabilità, affidabilità e decentramento?