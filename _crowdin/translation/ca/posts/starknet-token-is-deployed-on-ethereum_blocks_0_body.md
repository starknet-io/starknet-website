### TL;DR

* El testimoni StarkNet (STRK) s'ha desplegat a Ethereum Mainnet
* **Compte amb les estafes! No s'ofereixen a la venda**fitxes StarkNet
* La Fundació necessitarà temps per determinar el mecanisme per distribuir les seves fitxes
* Els fitxes en poder dels accionistes, empleats i desenvolupadors de programari de StarkWare estan bloquejats durant un període de quatre anys, amb un llançament gradual a partir d'un any.
* El testimoni augmentarà la descentralització de StarkNet gràcies al seu ús per votar, apostar i pagar comissions.

Avui,[StarkNet](https://starknet.io/)està fent un pas més cap a la descentralització. El testimoni StarkNet ara és[a Ethereum](https://etherscan.io/address/0xca14007eff0db1f8135f4c25b34de49ab0d42766). Recapitulant ràpidament: STRK s'utilitzarà com a testimoni de participació per a la participació en els mecanismes de consens de StarkNet, com a testimoni de govern i per pagar comissions de transacció. La justificació de cadascuna d'aquestes utilitats es presenta a[la nostra proposta de descentralització](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), a la secció titulada "Per a què serviran els fitxes?"

***Compte amb les estafes:**en el moment d'escriure no hi ha manera de comprar fitxes StarkNet; aquest període de no venda es mantindrà fins a nou avís per part de la[StarkNet Foundation](https://twitter.com/StarkNetFndn); seguiu la comunicació oficial de la Fundació StarkNet per conèixer qualsevol actualització de l'estat de STRK. Podeu informar d'estafes i comprovar si hi ha altres informes d'estafes al canal[scam-report](https://discord.gg/qypnmzkhbc)al servidor[StarkNet Discord](http://starknet.io/discord).*

Aquesta publicació explica el procés d'assignació de testimonis i com els contractes de testimonis desplegats serveixen a dues de les tres utilitats dissenyades per a la fitxa, és a dir, la votació i la participació. La tercera utilitat, el pagament de les tarifes de StarkNet, es parlarà més endavant.

### Planificació del procés d'assignació de fitxes

Prèviament hem proposat un pla[](https://medium.com/starkware/part-3-starknet-token-design-5cc17af066c6)per a l'assignació inicial de les fitxes. Els fitxes assignats a accionistes, empleats i desenvolupadors de programari independents estan bloquejats durant quatre anys, amb un calendari de llançament gradual que comença al cap d'un any. Les fitxes bloquejades es poden utilitzar per votar i apostar, però no es poden transferir ni intercanviar. Alguns dels fitxes es bloquegen mitjançant un contracte intel·ligent dedicat a Ethereum, mentre que altres fitxes es bloquegen mitjançant custodis.

Per separat, el 50,1% dels fitxes de StarkNet existents s'assignen a la Fundació StarkNet, per ser utilitzats per assolir els seus objectius[](https://medium.com/@StarkNet_Foundation/welcome-to-the-world-starknet-foundation-7bd55d5dbc59)(vegeu[publicació de StarkWare](https://medium.com/starkware/introducing-the-starknet-foundation-bd4b4379fbb)). Aquestes fitxes no estan bloquejades. Tanmateix, la Fundació necessitarà temps per formular el mecanisme exacte per assignar encara més aquestes fitxes i compartirà els seus plans a temps.

#### Per què tancament?

Bloquejar les fitxes durant el període esmentat garanteix que els col·laboradors actuals s'alineen amb els incentius a llarg termini de StarkNet. També descoratja l'especulació sobre el testimoni abans d'un ús generalitzat per als propòsits previstos: assegurar la xarxa, pagar tarifes i descentralitzar la governança.

A continuació, expliquem com la implementació del testimoni admet la votació i la participació.

### Votació

La Fundació serà l'encarregada de facilitar un bon govern i de formular els mecanismes de votació. El testimoni StarkNet va ser dissenyat per permetre tant el vot directe com una sèrie de mecanismes de delegació.

#### Votació L1

La implementació ERC-20 desplegada ara inclou**ús opcional**del mòdul de delegació[de Compound](https://docs.compound.finance/v2/governance/). Aquest mòdul s'utilitza àmpliament per a la votació en cadena. El motiu pel qual és opcional a StarkNet i està desactivat per defecte és la consideració del cost. Engegar-lo vol dir que cada transferència de fitxes StarkNet a L1 requereix gas addicional necessari només amb el propòsit de fer un seguiment dels canvis en el poder de vot.

#### Votació no L1

Les alternatives a la votació en cadena L1 amb el mòdul de delegació de Compound inclouen la votació fora de la cadena, així com els sistemes de votació en cadena basats en StarkNet (com ara[SnapshotX](https://snapshot.mirror.xyz/cUOrwdtEs5PvNh0sqYWWxPjt8GdJWn_Qp3cl7E3_8IU)). Aquestes alternatives, que redueixen significativament el consum de gas per a les transferències L1, no requereixen suport explícit del codi ERC-20 desplegat actualment i, per tant, tenen suport inherent.

Com s'ha esmentat anteriorment, tots els fitxes, bloquejats i desbloquejats, es podran utilitzar al mecanisme de votació de StarkNet.

### Apostament

El funcionament sense permís i resistent a la censura de StarkNet requereix una selecció aleatòria de seqüenciadors. La probabilitat que un node sigui seleccionat per seqüenciar i proposar un bloc és proporcional al nombre de fitxes StarkNet que el node participa. La raó de l'ús de fitxes de StarkNet (en lloc de, per exemple, Ethereum o Bitcoin) s'explica a la proposta de govern[](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), i els detalls exactes de l'aposta, la seqüenciació i la creació de blocs a StarkNet estan en discussió[per part de la comunitat](https://community.starknet.io/t/starknet-decentralized-protocol-introduction/2671), i encara per finalitzar.

Igual que amb la votació, les fitxes es poden utilitzar per apostar fins i tot quan estiguin bloquejades. Això contribueix a la diversitat dels operadors de StarkNet i a la resiliència de StarkNet.

### Resum

El desplegament dels contractes StarkNet Token a Ethereum és un pas més en la descentralització de StarkNet.

Demanem als desenvolupadors i usuaris que tinguin cura de les estafes! En el moment de la publicació, no es poden comerciar cap fitxes i aquest estat de no comerç es mantindrà fins a nou avís per part de la Fundació StarkNet.

Per a més preguntes, podeu anar al canal[Token-discussions](https://discord.gg/qypnmzkhbc)al servidor[StarkNet Discord](http://starknet.io/discord).