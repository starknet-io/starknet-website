### TL;DR

* StarkNet Alpha 0.7.0 llançat a Goerli; ple de millores
* Els contractes ara es poden actualitzar mitjançant el patró d'actualització de proxy
* Els contractes ara poden emetre Esdeveniments
* Suport per a les tan esperades trucades del sistema Block Number i Block Timestamp

### Introducció

Estem encantats de llançar Alpha 0.7.0, una versió plena de noves funcions i millores. Un dels millors estimulants de StarkNet durant els últims mesos ha estat la major implicació de la comunitat en la configuració del futur de StarkNet. Aquesta versió respon a algunes de les necessitats de gravació de la comunitat.

#### Canvis a la convenció de nomenclatura

El lector observador podria haver notat que la versió anterior de StarkNet Alpha es deia Alpha 4, mentre que ara estem llançant Alpha 0.7.0. Vam decidir ometre el número de versió Alpha dedicat i confiar només en la versió cairo-lang associada.

### Noves característiques

#### Actualització del contracte

El patró d'actualització</a>del servidor intermediari

d'OpenZeppelin ara és totalment compatible per a actualitzacions de contracte a StarkNet. El patró de proxy és el mètode comú per habilitar actualitzacions de contracte a través d'Ethereum. Alpha 0.7.0 permet aquest patró a StarkNet.</p> 

Hem fet un breu tutorial[](https://starknet.io/docs/hello_starknet/default_entrypoint.html)per demostrar una implementació bàsica del patró, i OpenZeppelin ja està treballant dur implementant un contracte estàndard per al patró de proxy; veure el[prototip](https://github.com/OpenZeppelin/cairo-contracts/pull/129).



#### Número de bloc i marca de temps del bloc

Alpha 0.7.0 afegeix dues noves trucades al sistema que molts desenvolupadors han estat demanant. Aquestes trucades permeten a un contracte accedir al número de bloc i a la marca de temps del bloc. El número de bloc retorna el número del bloc executat actual. La marca de temps del bloc retorna la marca de temps donada pel seqüenciador en la creació del bloc.

Podeu veure un exemple de com utilitzar aquestes funcions al tutorial[](https://starknet.io/docs/hello_starknet/more_features.html#block-number-and-timestamp).



#### Esdeveniments

Sorpresa! Una característica que estava planificada per a una versió futura s'ha colat en aquesta anterior.

Els contractes de StarkNet ara admeten la definició i l'emissió d'esdeveniments, cosa que els permet exposar informació d'execució per a les aplicacions fora de la cadena per consumir. Els desenvolupadors d'Ethereum trobaran la semàntica i la sintaxi molt semblants a Solidity. Podeu llegir la[documentació](https://starknet.io/documentation/events/), o seguir el[tutorial](https://starknet.io/docs/hello_starknet/events.html), que explica aquesta característica.



#### S'ha eliminat la directiva %builtins

La directiva %builtin ja no és necessària als contractes de StarkNet. Aquest canvi va seguir una discussió de la comunitat sobre el patró d'extensibilitat del contracte[](https://community.starknet.io/t/contract-extensibility-pattern/210)a[StarkNet Shamans](https://community.starknet.io/). Simplifica significativament la usabilitat d'aquest patró d'extensibilitat.

Per exemple, el següent contracte es canviarà de:



```
%lang starknet

# Aquesta és la directiva "%builtins".
# Ja no cal.
%builtins range_check

@view
func add(x: felt, y: felt) -> (res: felt):
return (res=x + y)
end
```


A això:



```
%lang starknet
@view
func add(x: felt, y: felt) -> (res: felt):
retorn (res=x + y)
final
```


Podeu consultar els contractes estàndard[ERC-20](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts/token), que utilitzen el nou patró.



#### Les funcions externes admeten matrius d'estructures

Alpha 0.7.0 admet passar i retornar matrius d'estructures en funcions externes. Aquesta funcionalitat addicional permet que els contractes de compte admetin millor[multitrucades](https://github.com/OpenZeppelin/cairo-contracts/pull/73#discussion_r753535751).

Multicall és una característica potent de l'abstracció del compte que permet a un compte fer diverses trucades en una sola transacció. Un cas d'ús evident és el de la creació d'una transacció**única**que crida a una assignació i després transfereix Des.

Esperem veure què en fa la comunitat.



#### Millores a la CLI de StarkNet

**Suport per a blocs pendents**

[Els blocs pendents](https://starknet.io/documentation/block-structure-and-hash/#pending_block)es van introduir[](https://community.starknet.io/t/cairo-v0-6-2-api-change-pending-block/195)en l'última versió menor (v0.6.2) i van oferir confirmacions més ràpides de les transaccions. Aquesta versió inclou suport per consultar aquests blocs mitjançant la CLI de StarkNet.

Per utilitzar-lo, en totes les ordres CLI que prenen nombre_bloc com a argument (contract_call/get_block/get_code/get_storage_at), podem consultar StarkNet pel que fa al bloc pendent especificant block_number=pending.

**Suport per a contractes de comptes**

StarkNet utilitza l'abstracció de comptes, és a dir, tots els comptes s'implementen com a contractes intel·ligents. Les primeres implementacions dels contractes de comptes les van fer[Argent](https://github.com/argentlabs/argent-contracts-starknet)i[OZ](https://github.com/OpenZeppelin/cairo-contracts/blob/main/contracts/Account.cairo), però esperem que en vinguin moltes més.

A StarkNet, totes les transaccions han de passar per un contracte de compte, i la CLI ara permet la interacció amb StarkNet Alpha directament mitjançant contractes de compte. Consulteu el tutorial[](https://starknet.io/docs/hello_starknet/account_setup.html#setting-up-a-starknet-account)sobre com configurar-lo.

Durant l'últim mes també es va afegir una funcionalitat similar a[StarkNet.py](https://github.com/software-mansion/starknet.py/)i a[Nile](https://github.com/OpenZeppelin/nile).



#### L1<>L2 Missatgeria en el marc de proves

Alpha 0.7.0 presenta el carter. El Postman permet als desenvolupadors utilitzar el marc de prova per provar fluxos més complicats.

A un alt nivell: es burla de la responsabilitat del seqüenciador StarkNet de passar missatges de L1 a L2 i de L2 a L1. Assegura que els missatges enviats mitjançant el contracte de missatgeria Solidity apareixeran al contracte StarkNet de destinació i els missatges enviats des d'un contracte StarkNet apareixeran al contracte de missatgeria Solidity.



#### I més característiques

Alpha 0.7.0 ofereix moltes més funcions i canvis, com ara l'addició d'una funció d'arrel quadrada eficient a la biblioteca comuna de matemàtiques. Apareix una llista completa al registre de canvis[](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.7.0).



### El següent?

El suport inicial[Fee Mechanism](https://community.starknet.io/t/fees-in-starknet-alpha/286/29)es publicarà en qüestió de setmanes, com a subversió de StarkNet.



### Més informació?

[starknet.io](https://starknet.io/): per a tota la informació, tutorials i actualitzacions de StarkNet.

[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y): uneix-te per obtenir respostes a les teves preguntes, obtenir suport per a desenvolupadors i formar part de la comunitat.

[StarkNet Shamans](https://community.starknet.io/): uneix-te per seguir (i participar!) a les discussions de recerca de StarkNet.