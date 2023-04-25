### TL;DR

* Cairo 1.0 és el primer llançament important després de la introducció[de Cairo](https://medium.com/starkware/hello-cairo-3cb43b13b209)fa dos anys
* Cairo 1.0 oferirà als desenvolupadors un llenguatge de programació més segur, més senzill i més utilitzable
* Al cor de Cairo 1.0 hi haurà**Sierra**, una capa de representació intermèdia que promet una major estabilitat a llarg termini per als programes del Caire.
* Sierra avança Cairo per servir en una xarxa sense permís:\
  -**Protecció de la xarxa**: permet una protecció DoS més robusta\
  -**Protecció de l'usuari**: permet una resistència a la censura de grau Ethereum Cairo 1.0 afectarà StarkNet de moltes maneres. També afectarà el[Regènesi](https://medium.com/starkware/regenesis-starknets-no-sweat-state-reset-e296b12b80ae). Publicarem més informació sobre Regenesis en les properes setmanes.

### Introducció

El 2020 vam llançar Cairo, un llenguatge de programació complet de Turing, i vam fer un gran pas per donar suport a la computació verificable mitjançant STARK. Avui anunciem**Cairo 1.0**, el major avenç del Caire fins ara. Introduirà un llenguatge millorat, amb funcions que milloraran la usabilitat, la seguretat i la comoditat. Està dissenyat per donar suport als requisits de StarkNet com a xarxa sense permís, permetent que el protocol sigui més senzill i segur.\
El desenvolupament ja està en curs i esperem que el primer llançament es produeixi aviat.

En aquesta publicació descriurem el viatge del Caire fins ara i compartirem detalls sobre les properes funcions.

### El viatge al Caire

Fins al 2020, es necessitava un coneixement de nínxol per crear programes demostrables amb STARK per a la computació general. Només era possible per a aquells que entenien les complexes matemàtiques darrere dels STARK. Concretament, per a cada lògica de negoci, és a dir, cada càlcul, calia generar una representació intermèdia algebraica (AIR), un conjunt de restriccions polinomials que representen el càlcul específic.

El Caire va néixer de la consciència que la computació verificable hauria d'estar disponible per als desenvolupadors de tot arreu. El Caire fa possible que els desenvolupadors aprofitin el poder dels STARK.

Des de llavors, la comunitat de desenvolupadors s'ha apoderat del Caire per construir amb entusiasme. Tot el pròsper ecosistema StarkNet actual es basa al Caire. Entre[StarkNet](https://starkware.co/starknet/)i[StarkEx](https://starkware.co/starkex/), les aplicacions impulsades pel Caire han processat més de 220 milions de transaccions, han encunyat més de 65 milions de NFT i han gestionat operacions per valor de 700 milions de dòlars, totes liquidades a Ethereum.

Tot i que el Caire va fer accessibles els STARK, es va dissenyar originalment com un llenguatge ensamblador i, com a tal, es va escriure com un llenguatge de baix nivell.

![Un exemple dels primers programes que es van escriure al Caire](/assets/cairocode_01.png "Un exemple dels primers programes que es van escriure al Caire")

Impulsats pels comentaris dels desenvolupadors i l'augment de[StarkNet](https://starkware.co/starknet/), a poc a poc vam fer que el Caire fos més expressiu i més amigable per als desenvolupadors.

![Un exemple del contracte ERC-20 El Caire que demostra el suport de variables, declaracions if, errors i biblioteca UINT256](/assets/cairocode_02.png "Un exemple del contracte ERC-20 El Caire que demostra el suport de variables, declaracions if, errors i biblioteca UINT256")

Però aviat vam concloure que és hora de fer un gran salt endavant i, en comptes de millores incrementals al Caire, buscar una transformació més audaç.

### El Caire 1.0

Per a Cairo 1.0 hem creat un compilador completament nou des de zero, que proporcionarà als desenvolupadors funcions de seguretat i els permetrà escriure contractes d'una manera més senzilla i expressiva.

#### Presentació de Sierra: assegurant-se que cada cursa del Caire es pot provar

L'addició principal a Cairo 1.0 és Sierra (**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**ció). Sierra constitueix una nova capa de representació intermèdia entre el Caire 1.0 i el codi de bytes del Caire. L'objectiu de Sierra és garantir que cada execució del Caire, és a dir, un programa del Caire i la seva aportació, es pugui provar (vegeu més a continuació).

Sierra promet als desenvolupadors del Caire un millor codi a prova de futur. Més estabilitat ve proporcionada pel fet que els contractes StarkNet no necessitaran recompilar-se en el cas de millores al sistema subjacent (per exemple, canvis en l'arquitectura de la CPU AIR, millores de la traducció final del codi de bytes de Sierra al Caire).

**Demostrant cada cursa del Caire.**Al Caire antic, una execució del Caire pot donar lloc a tres casos: VERTADER, FALS o fallada. Les execucions fallides no es poden demostrar. Sierra, assegura que una execució del Caire mai fallarà i només pot donar lloc a VERTADER o FALS. Això, al seu torn, garanteix que cada cursa del Caire es pugui provar.

Aquesta introducció de Sierra té implicacions importants per a StarkNet com a xarxa sense permís. Sierra assegura que fins i tot les transaccions revertides es poden incloure als blocs de StarkNet. Aquesta propietat permetrà que el protocol StarkNet es mantingui senzill i senzill sense necessitat d'afegir mecanismes criptoeconòmics complexos.\
Dos exemples significatius:

1. Els seqüenciadors podran cobrar comissions per les transaccions revertides, cosa que permetrà que StarkNet eviti el DoS de Sequencer d'una manera ben establerta.
2. La implementació de transaccions forçades L1 serà possible, cosa que permetrà a StarkNet heretar la total resistència a la censura d'Ethereum.

### **Característiques del llenguatge**

Cairo 1.0 oferirà moltes millores al propi llenguatge de programació. No tot el que es mostra a continuació formarà part del primer llançament, però forma part del full de ruta.

#### **Sintaxi millorada**

* No més*local*i*tempvar*. Ara només necessitem*i*per governar-les totes les variables.
* S'ha millorat la sintaxi*si*sentències

```python
#Old
if cond != 0 {
  tempvar x = x+1;
} else {
  tempvar x = x;
}
__________________________________
#Nou
si cond { x = x + 1; }
```

#### **Tipus de garanties de seguretat**

El compilador utilitzarà una escriptura forta per millorar la seguretat del codi. Per exemple:

* Els punters sempre apuntaran a la memòria inicialitzada.
* Els diccionaris sempre seran aixafats, en lloc de deixar la responsabilitat de cridar squash_dict al programador.

#### **Més fàcil d'utilitzar les construccions del llenguatge**

Per exemple:

* Per a bucles

```
siguem suma = 0
per a x en iter {
  suma = suma + x;
}
```

* Expressions booleanes
* Nombres enters (amb divisió sencer regular 👯)
* Protecció de desbordament per als tipus rellevants
* Condicions booleanes

```
#Antic
Si cond1:
  si cond2:
       # Algun codi
  més si cond3:
       # Mateix codi
__________________________________
#Nou
Si cond1 && (cond2 || cond3) { … }
```

#### **Un sistema de tipus complet**

* Tipus de dades abstractes (p. ex enumeració semblant a l'òxid)

```
enum Opció<T> {
 Alguns: T,
 Cap,
} Resultat de la coincidència
{
 Alguns (r) => {..},
 Cap => {..},
}
```

* Característiques

```
tret Add<Uint256> {
    fn add(…) { … }
}

sigui a: Uint256 = 1;
sigui b: Uint256 = 4;
a + b; // Avaluat a 5 de tipus Uint256.
```

#### **Biblioteques més intuïtives**

(p. ex. dict, matrius)

* Dict<Uint256, MyStruct>;
* Matriu<MyOtherStruct>;

#### **Codi més optimitzat**

No cal indicar explícitament l'assignació de variables locals: es detecta automàticament i es fa automàticament.

#### **Millor integració del compilador**

Permet un millor suport IDE, gestió de paquets i una millor facilitació de les contribucions de la comunitat.

### **Conclusió**

Dos anys després que el Caire es va utilitzar per primera vegada en producció, estem desenvolupant el Caire 1.0, que oferirà una expressivitat, seguretat i sintaxi millorades. Es farà un gran pas endavant, permetent als desenvolupadors escriure els seus contractes StarkNet amb més facilitat.

En una altra publicació, properament, compartirem més detalls sobre com afectarà Cairo 1.0 la regènesi de StarkNet i com els desenvolupadors s'han de preparar per al seu llançament.