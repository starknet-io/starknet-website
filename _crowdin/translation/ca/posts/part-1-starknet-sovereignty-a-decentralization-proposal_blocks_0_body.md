### TL;DR

* La descentralització de StarkNet implica un testimoni natiu i una nova fundació.
* El testimoni StarkNet s'utilitza per a la governança i com a actiu de pagament i aposta de la xarxa.
* S'han encunyat deu mil milions de fitxes i la seva assignació ha començat.
* La Fundació StarkNet, que s'està creant, tindrà la missió de mantenir StarkNet com a bé públic.

StarkNet és un paquet de validesa descentralitzat de la capa 2 (L2) sense permís, creat per permetre a Ethereum escalar mitjançant protocols criptogràfics anomenats STARK, sense comprometre els principis bàsics d'Ethereum de descentralització, transparència, inclusió i seguretat.

L'Alfa de StarkNet es va llançar a Mainnet el novembre de 2021. En menys d'un any, s'està formant un ecosistema, amb desenes d'equips arreu del món treballant-hi. Ara és el moment d'avançar en la descentralització de la xarxa, de manera que s'aconsegueix la vivacitat, la resistència a la censura, la transparència i la inclusió exigides a una L2 a Ethereum.

La descentralització significa que el funcionament i l'evolució de la xarxa no dependran de cap entitat, inclòs StarkWare. Un mecanisme d'elecció de líders de prova de participació sense permís i el pagament en cadena de les tarifes de transacció, ambdós utilitzant un testimoni natiu, permetran que la xarxa funcioni de manera fiable com a L2 a Ethereum fins i tot si StarkWare deixés d'existir. Les decisions sobre el manteniment continu de StarkNet passaran de StarkWare a la comunitat. Un testimoni i una fundació StarkNet seran elements clau d'aquest esforç.

Aquesta publicació, la primera de les tres publicades simultàniament, resumeix el viatge de StarkNet fins ara i presenta el StarkNet Token i la StarkNet Foundation. El[següent post](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)parla del model de govern de StarkNet i el[terç](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6)se centra en el model de testimoni de StarkNet.

*Donem les gràcies als següents seguidors de StarkNet (ordenats alfabèticament) pels seus comentaris sobre un esborrany d'aquestes publicacions: Guily_Gioza (Topologia), Itamar Lesuisse (Argent), Jonas Nelle (Pontis), Martin Triay (OpenZeppelin), Polynya, Sylve Chevet (Briq) , i Tomasz Stańczak (Nethermind).*

### La història fins ara

[StarkNet](https://starknet.io/)està construït a partir de la criptografia i un ecosistema obert. La criptografia****és**[STARKs](https://eprint.iacr.org/2018/046.pdf)**. Es tracta de protocols basats en matemàtiques que escalen Ethereum per ordres de magnitud. No requereixen una configuració de confiança, són segurs postquàntics i es poden desplegar de manera succinta a qualsevol escala. L'ecosistema es compon de desenvolupadors bàsics que han volgut des de fa anys construir infraestructura i eines per escalar la tecnologia blockchain, així com dominis d'aplicacions nous i creatius que es fan possibles quan s'amplia el poder computacional d'Ethereum.

StarkNet ofereix a tots els desenvolupadors i usuaris accés a l'escala i els avantatges de seguretat dels STARK, amb el propòsit d'escalar Ethereum mantenint els valors fonamentals d'Ethereum. Els STARK van ser inventats pels cofundadors de StarkWare, que els van utilitzar per primera vegada per crear la solució d'escalat[StarkEx](https://starkware.co/starkex/)per als clients. Posteriorment, StarkWare i altres equips de desenvolupadors (col·lectivament "Colaboradors principals") van construir[StarkNet](https://starkware.co/starknet/), una infraestructura pública, descentralitzada i sense permís, per garantir que aquestes tecnologies d'escala siguin accessibles per a tothom a perpetuïtat.

El llançament de StarkNet Alpha fa gairebé un any va provocar l'aparició d'un ecosistema més gran que es compromet a construir i nodrir StarkNet. Hi ha nombrosos equips de desenvolupadors a tot el món que construeixen la seva infraestructura bàsica, així com noves aplicacions.

### **La manera de descentralitzar**

La tecnologia STARK és madura i segura, però StarkNet no ha aconseguit l'estatus de bé públic com Ethereum o Internet. Perquè StarkNet assoleixi aquest objectiu, la seva governança, funcionament i desenvolupament s'han de continuar descentralitzant. Això es facilitarà mitjançant dos mecanismes: el**StarkNet Foundation**i el**StarkNet Token**.

#### Fundació

Com a entitat sense ànim de lucre, la missió de la Fundació serà mantenir StarkNet com a bé públic, un bé o servei que es posa a disposició de tots els membres de la societat. StarkNet és una infraestructura sense permís que hauria d'estar disponible per a tothom. S'ha de mantenir bé per tal de ser segur i eficient per a l'ús públic. Tampoc ha de discriminar entre usuaris.

La Fundació es finançarà amb una subvenció única de StarkNet Tokens. Fomentarà el desenvolupament de mecanismes de baix a dalt per a la presa de decisions de la comunitat sobre qüestions tecnològiques essencials, com ara actualitzacions de protocols, resolució de disputes i finançament de béns públics.

#### Token

El Token StarkNet és necessari per operar l'ecosistema, mantenir-lo i assegurar-lo, decidir sobre els seus valors i objectius estratègics i dirigir la seva evolució. Aquest testimoni serà necessari per (i) el govern, (ii) el pagament de les tarifes de transacció a StarkNet i (iii) la participació en el mecanisme de consens de StarkNet.

Hem encunyat deu mil milions de fitxes inicials que s'estan assignant als col·laboradors principals de l'ecosistema StarkNet, inclosos els inversors de StarkWare i StarkWare, als socis desenvolupadors de programari de StarkNet i a la Fundació. Aviat (objectiu: setembre de 2022) el testimoni anirà a Ethereum com a testimoni ERC-20 i es sol·licitarà per al seu ús en la governança i la votació sobre les actualitzacions de la xarxa. Més endavant, les tarifes de StarkNet només es pagaran amb aquest testimoni, alhora que garanteix una bona experiència d'usuari per als usuaris interessats a pagar les tarifes en ETH. Més tard, començarà l'encunyació automàtica de fitxes StarkNet addicionals (és a dir, el nombre de fitxes circulants serà superior a deu mil milions).

El model StarkNet Token posa l'accent en la compensació dels desenvolupadors pel seu treball. Una part de les noves tarifes d'encunyació i transacció (comissions avaluades per a l'ús de StarkNet) es concediran als desenvolupadors d'infraestructura bàsica i als desenvolupadors de contracte intel·ligent pel treball que han fet per dissenyar i llançar el protocol, a més de compensar els operadors de StarkNet pel treball que han fet. han fet per operar-lo.

La justificació completa d'un nou i dedicat StarkNet Token s'explica a la nostra[publicació](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), i els principis de disseny de StarkNet Token i l'assignació inicial es discuteixen a la[publicació](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6).