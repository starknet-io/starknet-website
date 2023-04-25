La nostra publicació[anterior](https://medium.com/@starkware/part-1-starknet-sovereignty-a-decentralization-proposal-bca3e98a01ef)va explicar què és StarkNet, com s'està descentralitzant progressivament i va oferir un resum dels seus dos mecanismes de descentralització. En aquesta publicació es parla del procés de descentralització de StarkNet, el paper de la Fundació StarkNet i la necessitat d'un nou testimoni natiu per a StarkNet. Finalment, es discuteixen consideracions addicionals per al govern de StarkNet en el futur.

### Principis de descentralització

La tecnologia [STARK](https://eprint.iacr.org/2018/046.pdf)és madura i segura, però fins ara s'ha implementat i utilitzat principalment com a servei centralitzat a Ethereum ([StarkEx](https://starkware.co/starkex/)) i una versió Alpha d'un servei descentralitzat ([StarkNet](https://starkware.co/starknet/)). StarkNet hauria d'estar disponible com un bé públic realment sense permís, com Ethereum o Internet. Per tant, ens comprometem a impulsar la descentralització de StarkNet i els quatre principis següents per guiar el canvi:

**Viva.**StarkNet no dependrà d'una sola empresa com a operador. Les empreses poden deixar d'existir o poden decidir deixar de donar servei a la xarxa. Després de la descentralització, aquests escenaris no faran caure StarkNet.

**Resistència a la censura.**En teoria, una sola empresa pot decidir, o veure's obligada, a censurar transaccions concretes i contractes intel·ligents mentre en compleix amb altres. StarkNet utilitzarà un model descentralitzat per protegir-se d'aquest escenari.

**Transparència.**Les actualitzacions i el manteniment del programari són una part inevitable de qualsevol servei descentralitzat. Aquestes accions s'han de discutir de manera transparent, perquè la comunitat estigui informada i tingui el control de la tecnologia. La comunitat més gran d'usuaris, operadors i desenvolupadors de StarkNet ha de treballar col·lectivament per determinar les actualitzacions i el manteniment mitjançant un procés transparent, just, participatiu i inclusiu.

**Creativitat.**StarkNet ha de permetre que qualsevol desenvolupador participi en la construcció de la seva infraestructura i aplicacions bàsiques, per evitar la monopolització i per augmentar els usos creatius i socialment beneficiosos de les cadenes de blocs a escala.

La descentralització és un problema difícil, que no s'ha d'abordar de manera precipitada. La proposta de govern de StarkNet, compartida aquí, probablement es desenvoluparà i canviarà amb el temps. El que segueix és només la seva primera iteració.

### Fundació

La Fundació serà una organització sense ànim de lucre impulsada per una missió i se li atorgarà fitxes StarkNet (vegeu[següent post](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6)). Preveiem que la missió de la Fundació serà mantenir StarkNet com a bé públic. StarkNet és una infraestructura sense permís que hauria d'estar disponible per a tothom. S'ha de mantenir bé per tal de ser segur i eficient per a l'ús públic. Tampoc ha de discriminar entre els seus usuaris, operadors i desenvolupadors. La Fundació es dedicarà a promoure els objectius de descentralització esmentats anteriorment: vivacitat, resistència a la censura, transparència i creativitat.

La vivacitat i la resistència a la censura de StarkNet s'aconsegueixen millor amb un consens descentralitzat i sense permís a través d'una elecció líder de prova de participació per seqüenciar i demostrar transaccions comprimides per STARK. Tot i que aquest mecanisme està automatitzat, es basa en un programari de protocol que funciona bé gestionat per nodes de la xarxa, així com en la validesa i la vitalitat contínua de la cadena de blocs Ethereum subjacent. Per tant, la Fundació també actuarà com a recurs per al desenvolupament, la documentació i la publicació en curs d'aquest programari de protocol, especialment pel que fa a correccions d'errors i millores d'eficiència.

Més enllà del manteniment rutinari, preveiem debats vibrants dins de la comunitat sobre canvis de funcions o altres actualitzacions més fonamentals del protocol. Això és inevitable en sistemes sense permís, com ho demostren històricament el debat sobre la mida del bloc de Bitcoin, la fusió de prova de participació d'Ethereum i molts altres exemples a l'ecosistema de criptomoneda. Aquestes decisions de desenvolupament de programari són més que només guanys d'eficiència i matemàtiques objectives, sinó que impliquen judicis de valor subjectius i intercanvis de característiques. En moltes comunitats blockchain, aquestes decisions es prenen de manera informal sense regles clares de debat ni un procés per a la presa de decisions. Fins i tot una no decisió és una decisió que afavoreix l'statu quo. Per evitar aquests problemes, la missió de la Fundació també inclourà desenvolupar, provar i implementar processos comunitaris de presa de decisions per resoldre qüestions tecnològiques essencials. Aquest mecanisme serà fonamental per a les deliberacions sobre actualitzacions de protocols, resolució de disputes i finançament de béns públics. La Fundació promourà la transparència mitjançant la distribució de la informació necessària per a la presa d'aquestes decisions, i mantindrà un arxiu d'aquesta informació per a futura consulta.

### Per què testimoni?

StarkNet sempre es va imaginar com un protocol gestionat per la comunitat, però no hi ha hagut una manera clara de definir qui forma exactament aquesta comunitat. *El testimoni permetrà als seguidors de la comunitat que realitzen treballs que han contribuït a l'èxit de l'ecosistema jugar un paper en la governança d'aquest ecosistema.*

A més, un servei just, obert i resistent a la censura només és possible si es presenten diverses parts per competir per realitzar tasques que impulsen el servei descentralitzat, i això només es pot garantir si aquests treballadors són compensats pel seu paper com a operadors de la xarxa. .

Per tant, és necessari incloure fitxes com a part d'una tecnologia de xarxa com StarkNet. I encara que la resistència a la censura de pagaments es pot aconseguir utilitzant un testimoni no natiu existent, per exemple Bitcoin o Ether (ETH), creiem que aquest enfocament fallaria amb el temps per proporcionar als usuaris de la xarxa una comunitat diferent i una veu en decisions.

Un testimoni natiu que premia els membres de la comunitat que desenvolupen la xarxa farà avançar l'ecosistema fins a un punt que l'ús d'un testimoni no natiu no ho farà. A més, si el testimoni no és natiu, els xocs econòmics de les decisions preses en altres ecosistemes poden afectar el servei de StarkNet i els seus usuaris i proveïdors.

### Per a què servirà el testimoni?

El testimoni serà el mecanisme per operar la xarxa (comissions), mantenir i assegurar la xarxa (participació consensuada) i decidir sobre els seus valors i objectius estratègics (governança).

**Comissions de transacció:**Actualment, les tarifes a StarkNet es paguen en Ether (ETH). Però més endavant, preveiem que les tarifes es pagaran exclusivament amb el token StarkNet natiu. Per donar suport a una bona experiència d'usuari, els mecanismes automatitzats i descentralitzats en cadena permetran als usuaris pagar tarifes en ETH.

**Staking:**Alguns serveis que són crítics per a la vitalitat i la seguretat de StarkNet poden requerir l'apostament de StarkNet Tokens. Aquests serveis poden incloure seqüenciació, assolir un consens temporal de L2 abans que s'assoleixi la finalitat de L1, serveis de prova STARK i subministrament de disponibilitat de dades, per citar alguns exemples. Esperem que aquests serveis estiguin descentralitzats el 2023.

**Governació:**Les propostes per millorar StarkNet requeriran un llindar mínim de suport de testimoni, que es definirà més endavant. Es requerirà la votació, directament o per delegació, per a tots els canvis al protocol que siguin essencials per a la vida, la seguretat i el manteniment de StarkNet. Per exemple, totes les actualitzacions importants del sistema operatiu StarkNet requeriran l'aprovació dels titulars de fitxes.

### Reflexions de tancament sobre la governança

Els mecanismes de governança descentralitzada encara es troben en els seus inicis i cap projecte en aquest espai ens ha proporcionat un model convincent d'emulació. La votació regular i directa de tots els titulars de fitxes és el millor camí? És relativament senzill dissenyar-ho com a mecanisme tecnològic, però pot ser difícil de manejar i pot privilegiar injustament els titulars d'un gran nombre de fitxes, en lloc de les persones que utilitzen activament la xarxa.

A l'hora de considerar el millor enfocament, us suggerim tenir en compte els controls i equilibris entre diverses estructures separades que deriven la seva autoritat de la comunitat de titulars de fitxes StarkNet.

També recomanem que els titulars de StarkNet Token facin un bon ús de l'experiència dels desenvolupadors principals. En tots els ecosistemes de cadena de blocs, els desenvolupadors bàsics tenen un paper central a l'hora de garantir, mantenir i avançar la tecnologia subjacent. Per tant, val la pena tenir en compte definir un paper formal per a ells dins del procés de govern.

El[post](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6)d'aquesta sèrie descriu el disseny del testimoni StarkNet: les consideracions clau del disseny del testimoni i les diferents fases d'assignació del testimoni.