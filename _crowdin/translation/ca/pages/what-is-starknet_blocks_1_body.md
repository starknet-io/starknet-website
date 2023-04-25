## Introducció

Starknet és una capa acumulada de validesa 2. Proporciona un alt rendiment, baixos costos de gas i manté els nivells de seguretat Ethereum Layer 1

Tenint en compte un trencaclosques de sudoku, verificar una solució és més fàcil que resoldre des de zero. Si el nostre objectiu és convèncer la gent de l'afirmació "aquest trencaclosques s'ha resolt", podem estalviar molts càlculs fent que una persona calculi una solució i després la propagui perquè altres la verifiquen. En aquesta estratègia, cada càlcul d'una solució es converteix en un esdeveniment puntual que no requereix replicació per part de la societat. En una línia similar, Starknet escala Ethereum substituint el càlcul L1 pesat per més lleuger (per tant, més barat!) Verificació de L1 mitjançant proves STARK calculades fora de cadena.

## Com funciona

Tenint en compte l'analogia anterior, el moment és madur per a una mica d'argot. Starknet és un Validity-Rollup sense permís (també conegut com a "ZK-Rollup") que admet el càlcul general i que actualment funciona en producció com a xarxa L2 a través d'Ethereum. L'eventual seguretat L1 de Starknet es garanteix mitjançant l'ús del sistema de prova criptogràfica més segur i escalable: [STARK](https://starkware.co/stark/).

Els contractes Starknet estan (en la seva major part) escrits en el llenguatge Cairo: un llenguatge de programació complet de Turing dissenyat per a proves STARK.