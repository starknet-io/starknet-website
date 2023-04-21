## Ntroducție

Starknet este un nivel de Validity Rollup 2. Reprezintă un nivel ridicat al tranzitului, costuri scăzute ale gazului și menține niveluri de securitate de nivel 1 Ethereum

Având un puzzle sudoku, verificarea unei soluţii este mai uşoară decât rezolvarea de la zero. Dacă obiectivul nostru este de a-i convinge pe cetăţeni de afirmaţia „acest puzzle a fost rezolvat”, putem salva o mulţime de calcule având o persoană să calculeze o soluţie şi apoi să o propagăm pentru ca alţii să o verifice. În această strategie, fiecare calcul al unei soluții devine un eveniment unic, care nu necesită replicare din partea societății. În mod similar, scările Starknet Ethereum prin înlocuirea calculelor L1 grele cu mai ușoare (de unde mai ieftine!) Verificarea L1 folosind dovezile STARK calculate în afara lanțului.

## Ati functioneaza

Având în vedere analogia de mai sus, este momentul potrivit pentru un jargon. Starknet este o Validity-Rollup fără permisiuni (cunoscută și ca „ZK-Rollup”) care suportă calculul general și funcționează în prezent în producție ca o rețea L2 prin Ethereum. Eventuala securitate L1 a Starknet este asigurată prin utilizarea celui mai sigur și mai scalabil sistem criptografic – [STARK](https://starkware.co/stark/).

Contractele Starknet sunt (în cea mai mare parte) scrise în limba Cairo – Un limbaj de programare Turing complet conceput pentru dovezile STARK.