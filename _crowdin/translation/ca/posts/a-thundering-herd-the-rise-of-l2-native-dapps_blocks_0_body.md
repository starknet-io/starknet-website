### TL;DR

Les dApps natives L2 ara poden prosperar sense les restriccions tradicionals de gas L1

### Introducció

Els desenvolupadors dApp sempre s'han enfrontat a greus limitacions a causa del límit de gas de bloqueig d'Ethereum (L1). Limita no només*com funcionen aquestes dApps, sinó també*què*són capaços de fer aquestes dApps*

La capa 2 (L2) ofereix als desenvolupadors dApp un camp verd computacional, lliure d'aquest sostre de vidre de gas. Creiem que la gran majoria de les dApps seran natives de L2 d'aquí a un parell d'anys: s'hauran construït des de la base a L2 per beneficiar-se d'aquest grau de llibertat computacional.

### Els límits de gas L1 formen les dApps natives L1

*Considerem dos exemples de dApps populars el disseny de les quals està profundament modelat per les restriccions de gas L1: AMM i agregadors DEX.*

Un creador de mercat automatitzat (AMM) és essencialment una aproximació de baix consum d'un intercanvi basat en llibres de comandes. En lloc de permetre als usuaris posar i eliminar límits, aturar les pèrdues o una varietat d'altres tipus d'ordres, els AMM L1 només permeten intercanvis senzills amb un conjunt de liquiditat subjacent central, per adaptar-se a l'intens cost computacional de L1.

Idealment, els agregadors DEX necessiten accedir a tots els grups de liquiditat possibles, fins i tot al conjunt de liquiditat més petit, per aprofitar els millors preus per als usuaris. Tanmateix, a causa del cost de consultar molts grups diferents, simplement no val la pena fer transaccions a través de L1. És justificable accedir als pools i pagar les comissions de transacció associades només quan els pools de liquiditat tinguin una liquiditat prou profunda. En una línia similar, les liquidacions en préstecs/préstecs i altres dApps basades en garanties podrien ser molt més precises si la diferència entre el descompte de liquidació i la tarifa de transacció fos molt menor.

La funcionalitat i el disseny limitats de moltes dApps L1 resulten directament dels desenvolupadors que optimitzen el seu codi per complir amb les limitacions de gas d'Ethereum. Per què, us podeu preguntar, diem Ethereum? El codi Solidity no es pot executar en molts L1 i fins i tot en alguns L2? De fet, però d'aquests, Ethereum és l'entorn més car (i, per tant, segur). Les dApps Solidity estan dissenyades per a "l'enllaç més car", és a dir, Ethereum. Per tant, no es beneficien de l'avantatge computacional que ofereixen els entorns d'execució menys costosos. Per desbloquejar la funcionalitat renunciada dissenyant una dApp per a l'entorn d'execució més car, s'ha d'adaptar el codi de la dApp.

### L'auge de les dApps natives de L2

Validity Rollups (també conegut com ZK-Rollups) permeten un càlcul extremadament barat. A diferència de qualsevol altra solució d'escala, el càlcul L2 pot créixer exponencialment amb només un petit impacte en el cost del gas de verificació a la cadena. A més, un Validity Rollup processa les entrades als càlculs («dades de testimoni») sense consumir recursos addicionals de L1, permetent càlculs amb moltes entrades.

Codificar dApps de manera nativa a L2 a**[Cairo](https://www.cairo-lang.org/)**(un llenguatge complet de Turing per escalar dApps mitjançant proves STARK) desbloqueja un ampli regne de possibilitats per als desenvolupadors. Els permet utilitzar quantitats importants de dades, tant dades computacionals com de testimoni, que abans no podien utilitzar.

Explorem aquestes dApps natives de L2 i les seves noves capacitats enriquides.

#### DeFi

Abans d'incorporar-se a StarkEx, el Validity Rollup de StarkWare, dYdX funcionava com a dApp L1 a Ethereum. Va oferir als seus usuaris un apalancament de x10 en actius sintètics i posicions compatibles amb només un actiu sintètic. Reconstruir dYdX al Caire com a dApp nativa de L2 proporciona una plataforma DeFi molt més escalable, més barata i eficient:

* Actualitzacions de preus d'Oracle: aquestes actualitzacions solen incloure desenes de preus i signatures de diverses fonts per calcular una mitjana. Un acumulador de validesa proporciona una escala exponencial de la lògica de l'oracle del preu (verificació de la signatura i càlcul del preu mitjà), sense informar d'aquestes dades de testimoni a L1. Compareu-ho amb la implementació L1 de dYdX, on cada actualització de l'oracle de preus costava uns 300K de gas i, per tant, estava limitada en la seva freqüència i la mida del conjunt de reporters de preus.
* Apalanquejament: un flux de preus precís permet a dYdX estimar el risc d'una posició en temps real i oferir un major apalancament per als usuaris. Gràcies a les actualitzacions de preus d'oracle millorades, dYdX va augmentar el palanquejament de x10 a L1 a x25 a L2.
* Marge creuat: amb dYdX a L2, els creadors de mercat poden posar comandes llargues i curtes en molts actius utilitzant la mateixa garantia. La liquidació mitjana a la L2 de dYdX inclou posicions amb més de 10 actius sintètics diferents! En comparació, tenir aquesta capacitat de marge creuat a L1 hauria més que duplicat el cost del gas a la cadena.

#### Joc i art generatiu

La collita actual de jocs nadius de L1 normalment emmagatzema actius de joc a L1 mentre implementa tota la lògica del joc en una aplicació fora de cadena de confiança. Aquest patró és un resultat directe de les limitacions de gas de L1. Gràcies al càlcul barat a L2, els desenvolupadors d'Apps de joc natives de L2 ara poden implementar la lògica del joc en un contracte intel·ligent i manipular els actius del joc sense confiança, en lloc d'emmagatzemar-los. Portar la lògica del joc al regne de la computació sense confiança és un pas important cap a un món molt més ric de jocs basats en blockchain. Els jocs nadius de L2 ja s'estan desenvolupant a StarkNet, la xarxa sense permís de StarkWare (per exemple,[Dope Wars](https://github.com/dopedao/RYO)i[Influence](https://medium.com/influenceth/influence-to-launch-on-starknet-afd3c26ea25a)).

Però, com de complex pot ser realment un joc basat en blockchain? Per exemple, el maneig de gràfics directament en cadena sembla impossible:[o és](https://twitter.com/guiltygyoza/status/1449637155001798657)? La resolució d'equacions diferencials i la simulació del moviment planar en un contracte intel·ligent representa un pas important cap al que en el futur podria ser un motor de física blockchain. Les implicacions són enormes. Imagineu un joc multijugador competitiu com Counter-Strike. Si es pogués simular la lògica del joc en cadena, molts pirates temuts es convertirien en cosa del passat: els jugadors podrien gaudir d'un joc prou just.

Generative Art utilitza la computació, l'aleatorietat i altres dades per crear art basat en blockchain. Com més complexa la lògica i la computació pot utilitzar un artista sense confiança, més opcions hi ha per generar peces d'art singulars úniques. [WhaleStreet DAO](https://blog.whalestreet.xyz/whalestreet-dao-to-launch-gen-art-ecosystem-on-ethereum-with-starknet/)està llançant un dels primers projectes Gen Art a StarkNet, aprofitant els recursos computacionals il·limitats de StarkNet.

### Que segueix?

Validity Rollups, i StarkEx i StarkNet impulsats pel Caire, en particular, proporcionen un entorn on es pot desenvolupar i operar dApps que consumeixen una gran quantitat de dades de càlcul o de testimoni. Amb tots els avantatges de la tecnologia de registre distribuït, predim un futur immensament emocionant per a les dApps natives de L2.

*pots*amb un càlcul general recolzat per la composició, la desconfiança i la descentralització?