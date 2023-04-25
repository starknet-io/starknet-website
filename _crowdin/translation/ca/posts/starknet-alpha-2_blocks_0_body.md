### TL;DR

* StarkNet ara admet la composició, la característica principal que defineix la fase de constel·lacions de StarkNet.
* Estem llançant un marc de proves per a StarkNet: ara els desenvolupadors poden provar els seus contractes de manera local i eficaç.
* Aquesta versió inclou diverses millores de rendiment notables, com ara el suport per a Merkle-Patricia Tries i una incorporació per a operacions per bits.
* Front de l'ecosistema:

1. **Contractes estandarditzats**: OpenZeppelin desenvoluparà contractes estandarditzats per a StarkNet, com ho van fer per a Ethereum!
2. **EVM->Cairo Compiler**: l'equip Warp @ Nethermind va demostrar la compilació del codi ERC-20 Solidity als contractes de StarkNet

### Fons

StarkNet és un Validity-Rollup descentralitzat sense permís (també conegut com a "ZK-Rollup"). Vam anunciar el seu full de ruta[](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)a principis d'any. El[Alpha](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), que s'executa actualment en una xarxa de proves pública d'Ethereum, ja admet el desplegament sense permís de contractes intel·ligents que implementen qualsevol lògica empresarial, amb missatgeria L1<>L2 i dades en cadena. A més, permet a qualsevol usuari enviar transaccions a la xarxa sense permís, a l'estil Ethereum.

Aquesta versió: StarkNet Alpha 2, inclou la característica bàsica que ens permet avançar de Planetes a Constel·lacions: la composició entre els contractes intel·ligents desplegats.

### Característiques

StarkNet Alpha 2 presenta les funcions següents:

* **Composabilitat:**StarkNet Alpha ara admet la interacció entre contractes intel·ligents, abans del previst! La bellesa d'aquesta actualització és que els desenvolupadors poden esperar gairebé la mateixa experiència que Ethereum; les trucades són sincròniques i es poden utilitzar com a trucades de funció. Esperem impacients les noves aplicacions que es beneficiaran tant de l'escala computacional il·limitada com de la composició del contracte, tal com ha llançat StarkNet. Per entendre com utilitzar aquesta funció, podeu començar seguint aquest[tutorial](https://www.cairo-lang.org/docs/hello_starknet/calling_contracts.html). Ens encantaria escoltar els vostres comentaris i veure què esteu construint a partir de la discordia[StarkNet](https://discord.gg/uJ9HZTUk2Y).
* **Marc de proves locals:**vau demanar i us vam oferir: un marc de proves[millor](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/starknet/testing). Això permetrà als desenvolupadors accelerar el seu desenvolupament dApp provant els desplegaments i les interaccions dels seus contractes StarkNet localment, sense cap dependència externa. Aquesta versió inclou només interacció L2, les properes versions ampliaran la funcionalitat i la facilitat d'ús. Consulteu el tutorial[aquí](https://www.cairo-lang.org/docs/hello_starknet/unit_tests.html)i ens agradaria rebre els vostres comentaris sobre aquesta funció.
* **Millores de rendiment:**

**Patricia Trees:**hem millorat el disseny de StarkNet per suportar un rendiment més alt i un temps de generació de proves més curt passant al compromís de l'estat de Merkle-Patricia Tree ([documentació](https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/cairo/common/patricia_utils.py)). Aquest canvi permet la creació de blocs molt més grans, reduint així el cost per transacció. El pas a un compromís estatal més sofisticat va ser habilitat pel Caire, el llenguatge ZKP, un component bàsic del sistema operatiu StarkNet.

**Operacions bit a bit:**hem afegit un[integrat](https://www.cairo-lang.org/docs/how_cairo_works/builtins.html)per donar suport a operacions bit a bit molt més eficients als contractes StarkNet ([documentació](https://www.cairo-lang.org/docs/reference/common_library.html#common-library-bitwise)).

* **Goerli:**StarkNet passa de Ropsten a[Goerli](https://goerli.etherscan.io/address/0xee02F29aE9A4988aE064940bF11954d6eafE26Ac)! Per fi, hem alliberat el nostre sistema dels capritxos dels déus Ropsten. Alpha 2 s'executarà ara en un entorn de desenvolupament més estable.

### Ecosistema

L'ecosistema StarkNet està en constant creixement i estem encantats de compartir les últimes notícies:

* **Contractes estandarditzats**: estem honrats de treballar amb OpenZeppelin a la biblioteca de contractes estàndard de StarkNet. El seu treball canònic sobre els contractes estandarditzats d'Ethereum ens serveix a tots diàriament i estem segurs que tindran un impacte tan important aquí.
* **EVM->Cairo Compiler**: l'equip Warp[de Nethermind va demostrar](https://medium.com/nethermind-eth/warp-your-way-to-starknet-ddd6856875e0)la transpiració d'un contracte ERC-20 des del codi de bytes EVM a un contracte StarkNet i el desplegament a StarkNet. Aquest esforç s'està movent ràpidament i el nostre proper objectiu és la transpiració de contractes intel·ligents arbitraris de Yul al Caire.
* **Maker</a>on-StarkNet**: es va presentar una proposta

al Maker DAO per implementar el protocol Maker a StarkNet. La primera fase proposa un pont DAI d'Ethereum a StarkNet amb encunyació de DAI a StarkNet per seguir.</li> 
  
  * **Serveis d'auditoria de StarkNet/Cairo**: estem contractant diverses empreses d'auditoria per oferir serveis d'auditoria de contractes intel·ligents StarkNet i programes del Caire.</ul> 



### Mainnet a la volta de la cantonada

Ens estem preparant per al llançament de StarkNet Alpha Mainnet, començant gradualment amb un conjunt d'aplicacions a la llista blanca. Hi ha diversos projectes en marxa i cada dia s'afegeixen més de manera activa. Per unir-vos a la festa, esteu convidats a contactar a través de[discord](https://discord.gg/uJ9HZTUk2Y).

Actualització **(novembre de 2021):**StarkNet Alpha està en directe a Ethereum Mainnet