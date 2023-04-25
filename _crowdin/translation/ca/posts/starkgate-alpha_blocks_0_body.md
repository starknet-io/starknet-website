### TL;DR

* La primera versió de StarkNet Bridge, StarkGate Alpha, està en directe a**[Testnet](https://goerli.starkgate.starknet.io/)**i a**[Mainnet](https://starkgate.starknet.io/)**!
* Esperem els comentaris de la comunitat sobre com es poden millorar les coses. Podeu enviar els vostres comentaris tant per a[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)com per a[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).
* El desplegament de Mainnet seguirà aviat (actualització, 9 de maig de 2022: StarkGate està en directe a Mainnet)

Emoció! Estem encantats de llançar StarkGate Alpha, la primera versió de StarkNet's Bridge, ara en directe a Goerli testnet, amb el desplegament de Mainnet aviat.*

\*(actualització, 9 de maig de 2022: StarkGate està en directe a Mainnet)

**Avís important: aquesta és una versió alfa a StarkGate Alpha (llegiu la lletra petita a continuació!).**

![](/assets/starkgate_01.png)

Abans de continuar, aneu a comprovar-ho! [StarkGate Testnet](https://goerli.starkgate.starknet.io/),[StarkGate Mainnet](https://starkgate.starknet.io/)

StarkGate serveix com a porta d'entrada entre Ethereum i[StarkNet](https://starknet.io/)i permet als usuaris fer tot el que poden esperar d'un pont.

#### **On puc trobar informació sobre com funciona StarkGate?**

Per entendre com funciona StarkGate, llegiu la documentació tècnica[](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)i mireu el codi[](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate). Tingueu en compte que aquesta és la primera versió, i us convidem als vostres comentaris i suggeriments sobre com millorar tant[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)com[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).

#### **Quins fitxes seran compatibles amb StarkGate?**

* StarkGate Alpha a Goerli admet ETH i alguns altres fitxes ERC-20. La llista completa i les adreces de contracte rellevants, tant a Ethereum com a StarkNet, estan disponibles en aquest[repo](https://github.com/starkware-libs/starknet-addresses).
* A Mainnet, inicialment, StarkGate Alpha només admetrà ETH per permetre l'ús del mecanisme de tarifes. Més endavant, afegirem suport per a WBTC, USDC, USDT i DAI. Podeu veure les adreces de contracte rellevants en aquest[repo](https://github.com/starkware-libs/starknet-addresses/blob/master/bridged_tokens/mainnet.json).

Més endavant, publicarem el mecanisme per afegir suport per a fitxes addicionals.

#### **Quines limitacions de seguretat tindrà StarkGate Alpha a Mainnet?**

StarkGate Alpha a Mainnet es llança amb dues limitacions, per tal de reduir els riscos que comporta l'ús d'una versió Alpha:

1. El valor total bloquejat (TVL) al pont a L1 limitarà la quantitat de cada tipus de testimoni.
2. L'import màxim de cada transacció enviada de L1 a L2 (Ethereum→StarkNet) mitjançant StarkGate serà limitat.

Tenim previst alleujar gradualment aquestes limitacions i aixecar-les completament a mesura que la confiança creixi. Els paràmetres actualitzats es poden trobar a la documentació[de StarkGate](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge).

![](/assets/starkgate_02.png)

### Alfa i el que significa

Com sempre, us recordem que StarkNet es troba actualment en la seva fase**Alpha**:

* Les coses es poden trencar. Si fracassen de manera catastròfica, els vostres fons es podrien perdre (**llegiu l'exempció de responsabilitat sota**!).
* Tant els contractes StarkNet Alpha com StarkGate es poden actualitzar sense tancament de temps. Tot i que esperem anunciar aquestes actualitzacions amb molta antelació, en el cas de riscos de seguretat imminents (per exemple, si es troba un error crític), l'actualització es pot aplicar amb poc o cap avís.
* El codi del pont, així com parts de StarkNet Alpha, encara no s'han auditat. Les auditories ABDK i Nethermind de StarkGate Alpha es completaran aviat.

Animem a tots els usuaris a ajudar a millorar el pont proporcionant els seus comentaris mitjançant una de les plataformes següents:

1. [Repositori de la interfície StarkGate](https://github.com/starkware-libs/starkgate-frontend)
2. [Repositori de contractes StarkGate](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate)
3. [Xamans de StarkNet](http://community.starknet.io/)

Per a preguntes i suport per a desenvolupadors, uneix-te al servidor de discordia[StarkNet](https://discord.gg/uJ9HZTUk2Y).

### Exempció de responsabilitat

***StarkNet Alpha és un sistema nou i complex que no ha estat completament auditat. El mateix s'aplica al pont StarkNet. Com tots els sistemes de programari complexos, tant StarkNet com el pont poden contenir errors que, en casos extrems, podrien provocar la pèrdua de tots els vostres fons. Per tant,***trepitgeu amb compte i aneu amb compte!******

*L'ecosistema StarkNet és un conjunt gran i de ràpid creixement d'equips i individus independents, sobre els quals StarkWare no té cap supervisió i no assumeix cap responsabilitat. Qualsevol dels projectes desenvolupats pels membres de l'ecosistema pot contenir errors que, en casos extrems, poden provocar la pèrdua de tots els vostres fons. A més, a mesura que es despleguen més contractes intel·ligents, augmenta el potencial d'errors nocius no desitjats i fins i tot d'estafes malicioses i tirades de catifes. Per tant, tracteu tots els contractes intel·ligents a StarkNet com els contractes intel·ligents a Ethereum i utilitzeu només aquells en què tingueu bones raons per confiar com a segurs.*