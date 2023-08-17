## Iśntroduktion

Starknet er et Validity Rollup Layer 2. Det giver høj gennemstrømning, lave gasomkostninger og bevarer Ethereum Layer 1 niveauer af sikkerhed

I betragtning af en sudoku puslespil, verificering af en løsning er nemmere end at løse fra bunden. Hvis vores mål er at overbevise folk om erklæringen “dette puslespil er blevet løst”, vi kan spare en masse beregning ved at have en person beregne en løsning og derefter udbrede det for andre at verificere. I denne strategi bliver hver beregning af en løsning en engangs-begivenhed, som ikke kræver samfundets replikation. I en lignende retning, Starknet skalaer Ethereum ved at erstatte tunge L1 beregning med lighter (dermed billigere!) L1 verifikation ved hjælp af STARK beviser beregnet off-chain.

## Låg det virker

Med ovenstående analogi i tankerne, tiden er moden for nogle jargon. Starknet er en tilladelsesfri Validity-Rollup (også kendt som en “ZK-Rollup”), der understøtter generel beregning og i øjeblikket opererer i produktion som et L2-netværk over Ethereum. Den endelige L1-sikkerhed i Starknet er sikret ved dets brug af det sikreste og mest skalerbare kryptografiske bevis system – [STARK](https://starkware.co/stark/).

Starknet kontrakter er (for det meste) skrevet i Cairo sprog – A Turing komplet programmeringssprog designet til STARK beviser.