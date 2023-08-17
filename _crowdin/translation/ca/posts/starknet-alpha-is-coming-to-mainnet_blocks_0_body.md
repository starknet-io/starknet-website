### TL;DR

* *StarkNet Alpha es llançarà a Mainnet Ethereum al novembre*
* El moment de construir a StarkNet és ara

### Una Breu Història

Vam anunciar la nostra visió per a[StarkNet](https://starkware.co/product/starknet/)a principis d'any: aportar una escalabilitat massiva a Ethereum tot preservant la seguretat L1, les interaccions sense permís i la descentralització.\
Vam llançar**[StarkNet Alpha](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)**en una xarxa de prova pública al juny. Aquesta versió admetia contractes intel·ligents de càlcul general totalment sense permís. Des de llavors, l'hem actualitzat dues vegades: primer a**Alpha 1**, que proporciona[missatges L1<>L2 i dades en cadena](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), i després a**Alpha 2**, que admet[composició](https://medium.com/starkware/starknet-alpha-2-4aa116f0ecfc).

StarkNet Alpha 2 ara admet contractes intel·ligents composables de càlcul general en un estat semblant a Ethereum, amb la possibilitat que els contractes L1 i L2 interactuïn entre ells. Llegeix més[aquí](https://www.cairo-lang.org/docs/hello_starknet/index.html).

### Què és StarkNet Alpha a Mainnet?

StarkNet Alpha a Mainnet admetrà funcions similars a les disponibles actualment a la xarxa de proves pública de Goerli.

#### **Què esperar**

Com que StarkNet encara està en desenvolupament, volem introduir les capacitats de manera gradual i garantir que les expectatives dels desenvolupadors es compleixin en cada pas. Dos aspectes especialment importants que ens agradaria destacar són:

* **Desplegament de contracte intel·ligent autoritzat**: seguirem el llibre de jocs assenyat presentat pels nostres col·legues d'Optimistic Rollup: començar amb*desplegaments*contractes autoritzats. En les properes setmanes es publicarà el protocol que especifica com sol·licitar la inclusió del teu contracte intel·ligent en aquesta llista blanca inicial.
* **Cap garantia de compatibilitat enrere**: esperem que la futura transició de StarkNet Alpha a StarkNet Beta inclogui la regènesi de l'estat. La xarxa començarà des del bloc 0, i les aplicacions hauran de redistribuir els seus contractes. A més, els desenvolupadors i usuaris haurien de tenir en compte que l'esperada StarkNet Beta pot ser que no sigui compatible amb StarkNet Alpha, per exemple, els desenvolupadors poden haver de modificar els seus contractes. Òbviament, intentarem permetre una transició fàcil per a les aplicacions, amb els mínims canvis requerits.

#### Característiques addicionals a curt termini

Com a part de la transició de StarkNet Alpha de testnet a Mainnet, farem el següent:

1. Afegiu constructors als contractes.
2. Millorar el marc de proves.
3. Per a blocs i transaccions, passeu de l'ús d'un identificador a l'ús d'un hash.

Tenim previst continuar amb el desplegament de noves funcions amb una cadència regular, tal com hem fet a la xarxa de proves pública. A curt termini, planifiquem les següents actualitzacions:

1. Contractes de compte i contractes de testimoni: obre el camí perquè les aplicacions DeFi interaccionin amb StarkNet de la manera que coneixen.
2. Funcionalitat del contracte millorada: admet l'actualització del contracte i els esdeveniments.
3. Warp: el compilador Solidity-to-Cairo desenvolupat per Nethermind permetrà una transició suau dels contractes intel·ligents Solidity als contractes intel·ligents StarkNet.
4. Signatures d'Ethereum: el suport natiu per a ECDSA a través de secp256k1 permetrà una integració més fàcil amb les carteres existents.
5. Node complet StarkNet: un node complet permetrà als usuaris participar a la xarxa amb requisits de maquinari iguals als d'un node complet Ethereum.

#### Mecanisme de tarifes

El mecanisme de comissions s'activarà tan bon punt s'afegeixin contractes de compte i contractes de testimoni a StarkNet Alpha.

Totes les transaccions enviades a StarkNet comportaran una tarifa dissenyada per cobrir els costos L1 i fora de la cadena. La tarifa es cobrarà inicialment en ETH. El cost d'una única transacció disminuirà a mesura que StarkNet augmenti la seva escala (com és el cas de tots els sistemes basats en STARK existents). A l'hora d'elaborar els mecanismes de comissions inicials, afavorim la simplicitat per sobre de fixar el preu de les transaccions amb precisió en funció dels recursos que consumeixen. Espereu que aquest mecanisme es perfeccioni i millori amb el temps.

Amb l'objectiu de fer de StarkNet una xarxa sostenible i d'incentivar els seus operadors i desenvolupadors, una part dels ingressos recaptats de les tarifes es distribuiran als desenvolupadors d'aplicacions i desenvolupadors principals de StarkNet.

#### Seguretat

El model de seguretat de StarkNet Alpha a Mainnet seguirà el model actual de testnet:

* Cada transició d'estat està recolzada per una prova STARK, per la qual cosa s'assegura que és vàlida.
* Totes les dades de l'estat es publicaran a la cadena, de manera que l'estat serà totalment construïble des de la L1.
* Hi haurà un únic seqüenciador.
* La xarxa es podrà actualitzar sense cap demora.

### L'ecosistema StarkNet està creixent

L'obertura de StarkNet al món va atreure una onada massiva de desenvolupadors interessats a aprendre El Caire i desenvolupar-se a través de StarkNet. Van proporcionar comentaris inestimables i va ser una autèntica delícia veure debats vibrants a StarkNet[Discord](https://discord.gg/uJ9HZTUk2Y).

A més, StarkNet està sent desenvolupat no només per l'equip de StarkWare, sinó també per alguns dels equips més forts de l'ecosistema blockchain:

* Nethermind està treballant en dos projectes:

1. **[Warp](https://github.com/NethermindEth/warp)**: un compilador Solidity to Cairo

2. **[Voyager](https://voyager.online/)**: un explorador de blocs de StarkNet

* Open Zeppelin està treballant en una implementació[Standard Contracts](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)per a StarkNet i també va començar a treballar en un entorn de desenvolupador:[Nile](https://github.com/martriay/nile).
* ShardLabs està treballant en un connector[StarkNet HardHat](https://github.com/Shard-Labs/starknet-hardhat-plugin)i en un marc de proves millor.
* L'equip d'Erigon està treballant per expandir el seu Ethereum Full Node per donar suport a StarkNet (nom en clau: Fermion). Estan treballant amb nosaltres en el disseny de mecanismes bàsics de StarkNet.
* Equilibrium està treballant en una implementació de StarkNet Full Node a Rust,
* Serveis d'auditoria del Caire: durant els propers mesos, ABDK, ConsenSys Diligence, Peckshield i Trail of Bits realitzaran auditories al Caire.
* Auditories StarkNet: vam començar amb l'auditoria dels fonaments de la xarxa:

1. **CryptoExperts**durà a terme una auditoria del Cairo Solidity Verifier.
2. Recentment es va completar una prova formal**LEAN**de les especificacions del Caire i es va publicar com a document[](https://arxiv.org/abs/2109.14534)i un repositori de GitHub[](https://github.com/starkware-libs/formal-proofs).

Espereu que es publiquin moltes més col·laboracions interessants durant els propers mesos!

### Els STARK estan augmentant avui

Ens acostem al llançament de StarkNet Alpha amb confiança, ja que StarkEx, el nostre SaaS d'escala autònom, ha demostrat com els STARK poden escalar de manera massiva les aplicacions d'Ethereum. Vam llançar StarkEx per a[dYdX](https://dydx.exchange/)(contractes perpetus),[DeversiFi](https://www.deversifi.com/)(comerç puntual i pagaments), així com per a[Immutable](https://www.immutable.com/)i[Sorare](https://sorare.com/)(encunyació i comerç de NFT). Hem vist els seus costos de gas/tx reduïts entre 100 i 200 vegades, fins a uns 650 gas/tx a Validium (dades fora de la cadena) i 1100 gas/tx per a un ZK-Rollup.

Fins ara, StarkEx ha liquidat 80 milions de dòlars en transaccions i més de 27 milions de transaccions, eclipsant amb escreix qualsevol altra solució L2, i totes combinades.

### Actua ara

Mai hi ha hagut un millor moment per unir-se al creixent ecosistema de StarkNet creant la vostra propera dApp o eines útils per a desenvolupadors.

Et convidem a:

1. Uneix-te a[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y), on pots conèixer i involucrar-te amb la comunitat StarkNet.
2. [Comença a aprendre](https://www.cairo-lang.org/docs/hello_starknet/index.html)com escriure contractes intel·ligents StarkNet.
3. [Envieu-nos un DM](https://twitter.com/StarkWareLtd): el nostre equip està disposat a ajudar a que les vostres idees i iniciatives cobren vida.

Actualització **(novembre de 2021):**StarkNet Alpha està en directe a Ethereum Mainnet