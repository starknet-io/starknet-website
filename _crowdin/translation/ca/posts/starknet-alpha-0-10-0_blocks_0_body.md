### TL;DR

* Millores en l'abstracció de comptes en l'esperit de l'EIP-4337

1. Validar — Executar la separació
2. Ara s'assegura la singularitat de la transacció al protocol (Noce)

* El mecanisme de comissions s'amplia per incloure:

1. Missatges L1→L2
2. Declarar transaccions

* Pocs canvis de sintaxi al Caire

### Introducció

Estem encantats de presentar StarkNet Alpha 0.10.0. Aquesta versió és un pas més cap a l'escalada d'Ethereum sense comprometre la seguretat i la descentralització.

Aquesta entrada del blog descriu breument les característiques principals d'aquesta versió. Per a la llista completa de canvis, consulteu les notes de la versió[](https://github.com/starkware-libs/cairo-lang/releases). Per obtenir informació més detallada, consulteu la documentació[](https://docs.starknet.io/).

### Canvis en l'abstracció del compte

Avancem amb[abstracció del compte de StarkNet](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781). Aquesta versió introdueix canvis inspirats en[EIP-4337](https://eips.ethereum.org/EIPS/eip-4337).

#### Valida/executa la separació

Fins ara, la funció \_\_execute\_\_ del compte era responsable tant de la validació com de l'execució de la transacció. A la 0.10.0 trencarem aquest acoblament i introduïm una funció \_\_validate\_\_ separada als comptes. En rebre una transacció, el contracte del compte trucarà primer a \_\_validate\_\_ i, si té èxit, procedirà a \_\_execute\_\_.

La separació validar/executar proporciona una distinció a nivell de protocol entre transaccions no vàlides i revertides (encara vàlides). Gràcies a això, els seqüenciadors podran cobrar comissions per l'execució d'una transacció vàlida independentment de si es va revertir o no.

#### Nonce

A la versió 0.10.0 s'afegeix un camp nonce per tal d'aplicar la singularitat de la transacció a nivell de protocol. Fins ara, les noces es gestionaven a nivell de contracte de compte, la qual cosa significava que una transacció amb el mateix hash es podia executar teòricament dues vegades.

De la mateixa manera que Ethereum, cada contracte ara inclou un nonce, que compta el nombre de transaccions executades d'aquest compte. Els contractes de compte només acceptaran transaccions amb un nonce coincident, és a dir, si el nonce actual del compte és X, només acceptarà transaccions amb un nonce X.

#### Nova versió de transacció

Per permetre la compatibilitat enrere, introduirem aquests dos canvis mitjançant una nova versió de transacció:[v1](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C). Aquests canvis només s'aplicaran a la versió nova i els comptes més antics encara podran executar transaccions de la versió 0.

Nota: la transacció v0 ara està obsoleta i s'eliminarà a StarkNet Alpha v0.11.0. Assegureu-vos d'actualitzar per utilitzar la nova versió de transacció.

Per obtenir informació més detallada sobre la versió de la transacció, llegiu la documentació[](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C).

#### Mecanisme de taxes

La nova versió permet incloure tarifes per dos components obligatoris:

* [Missatge L1→L2](https://docs.starknet.io/docs/L1-L2%20Communication/messaging-mechanism#l1--l2-message-fees)
* [Declarar transacció](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)

Aquestes tarifes no seran obligatòries en aquesta versió i només s'aplicaran a partir de StarkNet Alpha v0.11.0.

#### Canvis de sintaxi del Caire

A favor del progrés gradual cap a una actualització de Cairo,[Cairo 1.0](https://www.youtube.com/watch?v=Ny4Rv6ztINU), aquesta versió inclou diversos canvis de sintaxi.

Per minimitzar les molèsties, la versió inclourà un script de migració[](https://www.youtube.com/watch?v=kXs59zaQrsc)que aplica automàticament els canvis anteriors. Podeu trobar més detalls[aquí](https://github.com/starkware-libs/cairo-lang/releases).

### Que segueix?

* D'aquí a unes setmanes, tenim previst introduir la paral·lelització al seqüenciador, permetent una producció de blocs més ràpida (V0.10.1)
* Aviat completarem l'última part que s'ha d'incloure en el pagament de la quota — Desplegament del compte
* Lançament de Cairo 1.0! Més informació sobre això en una propera publicació.

### Com puc estar més compromès?

* Aneu a[starknet.io](https://starknet.io/)per obtenir tota la informació, documentació, tutorials i actualitzacions de StarkNet.
* Uneix-te a[StarkNet Discord](http://starknet.io/discord)per obtenir suport per a desenvolupadors, anuncis d'ecosistema i formar part de la comunitat.
* Visiteu el[StarkNet Forum](http://community.starknet.io/)per estar al dia i participar en els debats de recerca de StarkNet.

Sempre estem encantats de rebre comentaris sobre la nostra[documentació](https://docs.starknet.io/)!