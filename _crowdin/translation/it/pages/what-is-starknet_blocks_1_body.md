## I<unk> ntroduction

Starknet è uno strato di rollup di validità 2. Fornisce alti livelli di prestazione, bassi costi del gas e mantiene i livelli di sicurezza Ethereum Layer 1

Dato un puzzle sudoku, verificare una soluzione è più facile che risolvere da zero. Se il nostro obiettivo è quello di convincere le persone della dichiarazione “questo puzzle è stato risolto”, possiamo salvare un sacco di calcolo avendo una persona a calcolare una soluzione e poi propagarlo per gli altri a verificare. In questa strategia, ogni calcolo di una soluzione diventa un evento una tantum che non richiede la replica da parte della società. In una vena simile, Starknet bilancia Ethereum sostituendo il pesante calcolo L1 con più leggero (quindi più economico!) Verifica L1 utilizzando prove STARK calcolate off-chain.

## H<unk> ow funziona

Con l'analogia di cui sopra, il tempo è maturo per qualche gergo. Starknet è una Validity-Rollup senza permesso (noto anche come “ZK-Rollup”) che supporta il calcolo generale e attualmente opera in produzione come una rete L2 su Ethereum. L'eventuale sicurezza L1 di Starknet è garantita dal suo uso del sistema di prova crittografica più sicuro e scalabile – [STARK](https://starkware.co/stark/).

I contratti Starknet sono (per la maggior parte) scritti nel linguaggio del Cairo – Un linguaggio di programmazione completo Turing progettato per prove STARK.