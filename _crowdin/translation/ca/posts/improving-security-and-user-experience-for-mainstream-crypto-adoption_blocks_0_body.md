La innovació tecnològica en blockchain ha florit durant els darrers anys: STARK, SNARK, EIP-1559, Ethereum Merge, són grans assoliments tecnològics. Tanmateix, el disseny d'UX i UI no ha pogut mantenir-se al dia. La gent encara es queda atrapada en frases de llavor de 16 paraules i entrar a DeFi sense un intermediari centralitzat encara és massa intimidant per a molts. Per incorporar els propers mil milions d'usuaris a Web3, és fonamental millorar l'experiència d'incorporació dels usuaris.

Tal com va demostrar FTX (i Gemini, Celsius i Mt. Gox), conservar l'autocustodia sobre els propis actius és de vital importància. No obstant això, fins fa poc, les carteres d'autocustodia han estat complicades i confuses per a l'usuari mitjà. La majoria de la gent oblida les seves contrasenyes Web2 mensualment; Com s'espera que els usuaris mantinguin la seva frase inicial i claus privades segures per a l'eternitat?

En poques paraules, és un malson de seguretat. Com hem vist innombrables vegades, un moviment equivocat, ja sigui iniciat per mals actors o per negligència, pot provocar la pèrdua de milions de dòlars.

Com a primer punt de contacte per als nous usuaris criptogràfics, les carteres Ethereum han de ser fàcils d'utilitzar, segures i personalitzables per adaptar-se a les necessitats de cada usuari. Això requereix que els desenvolupadors integrin la senzillesa dels productes financers Web2 amb les característiques de Web3.

Això és exactament el que aconsegueix l'abstracció del compte.

L'abstracció del compte millora la seguretat dels productes de cartera amb autocustodia eliminant la dependència dels usuaris de la clau privada i fent que les carteres siguin més programables. Amb aquesta UX millorada, les carteres sense custòdia finalment es poden escalar a milions d'usuaris criptogràfics principals.

Però per entendre completament l'impacte de l'abstracció del compte, hem d'actualitzar-nos sobre com funcionen els comptes d'Ethereum.

### Conceptes bàsics dels comptes Ethereum

Hi ha dos tipus de comptes d'Ethereum:

1. Comptes de propietat externa (EOA)
2. Comptes de contracte (CA)

Desglossem cadascun una mica més.

### Comptes de propietat externa

Els comptes de propietat externa, com MetaMask i Coinbase Wallet, són el tipus de compte típic per als usuaris d'Ethereum. Cada EOA consta d'una clau privada i pública, anomenada parell de claus.

Totes les transaccions estan autoritzades i signades amb claus privades. Un cop signada una transacció, l'EVM verifica que la signatura és vàlida mitjançant l'adreça del compte de l'EOA. La lògica codificada en dur a l'EVM significa que el compte (l'objecte que conté els vostres fitxes) i la clau privada (firmant) s'acoblen com un sol.

Perdre la vostra clau privada significa perdre els vostres fons, o fins i tot el control del vostre compte, per sempre.

### Comptes contractuals

Mentrestant, els comptes de contracte, sinònim d'abstracció de comptes, són contractes intel·ligents desplegats a la cadena de blocs d'Ethereum. Aquests contractes es controlen mitjançant la lògica del codi i no requereixen claus privades. A diferència dels EOA, els comptes de contracte no poden iniciar transaccions. En canvi, les seves transaccions es desencadenen mitjançant instruccions dels EOA.

### Per què és important l'abstracció del compte

L'abstracció de comptes implica l'abstracció de la lògica d'autorització codificada en dur de les EOA, convertint cada compte en un contracte intel·ligent programable que es pot adaptar per satisfer les necessitats de qualsevol individu.

Tal com va explicar el cofundador i director científic d'Argent Julien Niset en un recent esdeveniment[Stark @ Home](https://www.crowdcast.io/e/7olimxqv), aquesta lògica d'autorització flexible dóna llibertat als desenvolupadors per jugar amb funcions del compte com ara….

**Signants de maquinari:**Ús d'un enclavament segur d'iPhone o Android per convertir qualsevol telèfon intel·ligent en una cartera de maquinari. A partir d'aquí, els usuaris poden verificar les transaccions mitjançant dades biomètriques com una empremta digital o Apple Face ID. Ja hem començat a veure carteres amb autocustodia com Braavos[desplegar aquesta funció.](https://medium.com/@braavos_starknet_wallet/hardware-signer-the-last-innovation-for-wallet-crypto-everyday-users-7e1974f93944)

**Paymasters:**Permet als usuaris pagar tarifes de gas amb qualsevol testimoni, o fins i tot tenir un mecanisme dissenyat per tercers per pagar les transaccions.

**Recuperació social:**En cas que es perdi o es comprometi una clau privada, els usuaris poden autoritzar una nova clau com a propietari legítim de la cartera. Això pot incloure diversos mètodes de recuperació mitjançant contactes de confiança, carteres de maquinari o serveis de tercers. La idea és fer que la recuperació de l'accés al vostre compte sigui tan fàcil com recuperar la contrasenya del vostre compte bancari mitjançant un correu electrònic.

**Autenticació multifactor:**De manera similar a les pràctiques habituals de Web2 2FA, els usuaris poden configurar dos (o més) mètodes d'autenticació per a les seves carteres criptogràfiques, on una transacció només es signa un cop l'usuari confirma l'aprovació mitjançant una segona opció, com ara correu electrònic o SMS. Els usuaris també poden establir límits de transferència diaris o llistes d'adreces de compte de les quals la cartera es bloqueja automàticament per interaccionar.

**Signatures resistents i eficients al gas quàntic:**L'esquema de signatura actual d'Ethereum, ECDSA, és ampli computacionalment (llegiu: tarifes més altes del gas) i es pot trencar amb ordinadors quàntics. Mitjançant l'abstracció de signatures, els diferents contractes de compte utilitzen esquemes de signatura més eficients i de seguretat quàntica. StarkNet utilitza la seva pròpia corba propietària compatible amb STARK.

Aquestes funcions no només proporcionen als usuaris una major seguretat i més flexibilitat, sinó que, el que és més important, donen com a resultat</strong>experiència d'usuari**millor.</p>

Classificat per Vitalik Buterin com un "somni de molt de temps" per a la comunitat de desenvolupadors d'Ethereum, les innovacions al voltant de l'abstracció de comptes, principalment EIP-2938 i EIP-3074, han girat des del 2020. Tot i això, tots dos van requerir compensacions en matèria de seguretat i implementació. [EIP-4337](https://github.com/ethereum/EIPs/blob/3fd65b1a782912bfc18cb975c62c55f733c7c96e/EIPS/eip-4337.md), el desenvolupament més prometedor fins ara, proposa una versió de l'abstracció del compte sense requerir canvis al protocol Ethereum.

### **Abstracció de comptes i Starknet**

A diferència de Bitcoin i Ethereum, que estan adaptant els seus protocols actuals per donar suport a l'abstracció del compte,[StarkNet](https://starkware.co/starknet/)ha implementat l'abstracció del compte des del primer dia. Quan es combina amb l'escalabilitat i les capacitats de les nostres proves STARK, el potencial d'innovació de la cartera és il·limitat. És per això que la propera generació de carteres d'autocustodia, com Argent i Braavos, s'estan construint actualment a la part superior de la nostra xarxa.

L'enfocament de StarkNet és similar a l'EIP-4337,[reconeixent que](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781)abstracció completa del compte encara donaria lloc a una UX confusa i[podria obrir la porta](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4337.md#rationale)als atacs als seqüenciadors. Més aviat, pretén aconseguir tant l'abstracció de signatures com l'abstracció de pagaments mutualitzant part de la infraestructura necessària dins i fora de la cadena.

I tot i que encara queda molta més feina per fer, l'abstracció del compte està guanyant força més enllà d'un petit cercle de criptonatius. Al desembre,[Visa va proposar la idea](https://www.coindesk.com/tech/2023/01/11/ethereum-upgrade-could-make-it-harder-to-lose-all-your-crypto/)d'utilitzar l'abstracció del compte per configurar pagaments recurrents automàtics a StarkNet. Mitjançant un compte delegable, els usuaris poden concedir permís per iniciar un pagament a un contracte intel·ligent pre-aprovat. A partir d'aquí, el contracte intel·ligent es programarà per deduir una quantitat de pagament fixada en un dia específic, durant un període de temps determinat. Tot i que Visa encara no ha revelat els seus plans per als seus propis serveis, l'interès per si sol diu molt i pot presagiar un món on plataformes de subscripció de gran tecnologia com Netflix i Spotify podrien adoptar la criptoadopció.

Pel que fa al futur, només el temps ho dirà. Però una cosa és certa. En fer que les carteres siguin més fàcils i segures d'utilitzar, l'abstracció de comptes servirà com a catalitzador poderós perquè les carteres de cadena de blocs d'autocustodia s'ampliïn a milions d'usuaris criptogràfics principals. Mentrestant, continuarem construint.