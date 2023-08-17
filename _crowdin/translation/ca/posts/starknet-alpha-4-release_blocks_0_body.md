### Temps emocionants per davant

Alpha 4 s'ha llançat avui a Goerli. Aquesta versió és la candidata al llançament de Mainnet i, si tot va segons el previst, es desplegarà a Mainnet a finals de mes.

Alpha 4 segueix el llançament ple de funcions d'Alpha 3, que incloïa, entre altres coses, millores en els temps de compilació del Caire, constructors de contractes i molt més (vegeu les notes de la versió[completes](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.5.0)).

És important</a>

les noves aplicacions.</p> 



### Noves característiques

Tot i que l'objectiu principal d'aquesta versió és preparar-se per al desplegament Mainnet, també inclou diverses funcions noves:



#### Obteniu l'adreça d'aquest contracte

Els contractes ara poden obtenir la seva pròpia adreça mitjançant el nou syscall \`get_contract_address\`. Podem, finalment, posar fi al contracte de selfie.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Contracte de selfie RIP: setembre de 2021-novembre de 2021</p>&mdash; Francesco Ceccon (@ceccon_me) <a href="https://twitter.com/ceccon_me/status/1458410251078836227?ref_src=twsrc%5Etfw">10 de novembre de 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### Bloqueja Hash

Els blocs ara s'identifiquen mitjançant hash en lloc d'Id. Això segueix la nostra darrera transició als hash de transaccions. Totes les API s'han actualitzat en conseqüència. Aviat publicarem la documentació tècnica completa del sistema, que també inclourà l'especificació de l'estructura del bloc.



#### Adreces del contracte

Aquesta versió introdueix un canvi en la forma en què es calculen les adreces dels contractes. L'adreça és un hash de Pedersen a l'adreça de la persona que truca, un salt (aleatori o escollit pel desplegador), el hash del codi del contracte i el hash dels arguments del constructor, tots afegits per un prefix.



```
Hash (PREFIX, caller_address, sal, contract_hash, ctr_args_hash)
```


En la versió actual, l'adreça de la persona que truca sempre és igual a 0, però en futures versions, això permetrà el desplegament de contractes directament des dels contractes existents.

Tingueu en compte que aquest esquema és molt semblant a CREATE2.

[Consulteu les notes completes de la versió](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.6.0)



#### Ponts de fitxes

Els ponts testimonis són una part crucial de la infraestructura de StarkNet. Permeten transferir fons cap a i des de StarkNet. El pont no està desplegat en el moment de la publicació, però hauria d'estar disponible en pocs dies, juntament amb la documentació completa de la seva funcionalitat i ús. Una cosa important a tenir en compte és que el pont utilitza el protocol de missatgeria[L1<>L2](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html). Com a tal, ofereix temps de retirada curts: un cop s'inclou una retirada en un lot i s'accepta a L1, els fons estan disponibles a l'instant per a l'usuari a L1.

Aquesta és la primera versió dels ponts testimonis i ens agradaria rebre comentaris de l'ecosistema.



### Uneix-te a StarkNet

Mai hi ha hagut un millor moment per unir-se a la creixent comunitat StarkNet. Podeu unir-vos a la conversa al[StarkNet discord](https://discord.gg/uJ9HZTUk2Y), participar en un taller en línia[](https://forms.reform.app/starkware/join-a-starknet-workshop/2ma1x8)o utilitzar un dels[tutorials](https://www.cairo-lang.org/docs/hello_starknet/index.html)per començar a crear la vostra primera aplicació.

Actualització **(novembre de 2021):**StarkNet Alpha està en directe a Ethereum Mainnet