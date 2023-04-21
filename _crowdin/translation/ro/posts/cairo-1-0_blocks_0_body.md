### TL;DR

* Cairo 1.0 is the first major release following the [introduction of Cairo](https://medium.com/starkware/hello-cairo-3cb43b13b209) two years ago
* Cairo 1.0 va oferi dezvoltatorilor un limbaj de programare mai sigur, mai simplu și mai utilizabil
* În centrul Cairo 1.0 va fi**Sierra**, un strat de reprezentare intermediar care promite o stabilitate mai mare pe termen lung pentru programele Cairo
* Sierra avansează Cairo pentru a servi într-o rețea fără permisiuni:\
  -**Protejarea rețelei**: permite o protecție DoS mai robustă\
  -**Protejarea utilizatorului**: permite rezistența la cenzură în sens EthereCairo 1. va afecta StarkNet în multe feluri. De asemenea, va afecta[Regenesis](https://medium.com/starkware/regenesis-starknets-no-sweat-state-reset-e296b12b80ae). Vom publica mai multe informaţii despre Regenesis în săptămânile următoare.

### Introducere

În 2020 l-am publicat pe Cairo, un limbaj de programare Turing-complete și am făcut un pas important spre susținerea calculelor verificabile folosind STARKs. Astăzi, anunțăm**Cairo 1.0**, cel mai mare progres al Cairo de până acum. Acesta va introduce un limbaj îmbunătățit, cu caracteristici care vor spori gradul de utilizare, siguranța și confortabilitatea. Acesta este conceput pentru a sprijini cerințele StarkNet ca o rețea fără permisiuni, permițând protocolului să devină mai simplu și mai sigur.\
Dezvoltarea este deja în desfășurare și ne așteptăm ca prima versiune să se întâmple în curând.

În acest post vom descrie călătoria lui Cairo până acum și vom împărtăși detalii despre caracteristicile viitoare.

### Călătoria din Cairo

Până în 2020, trebuiau cunoștințe de nișă pentru a construi programe STARK care să poată fi dovedite pentru calculul general. Era posibil doar pentru cei care au înţeles matematica complexă din spatele STARK-urilor. Mai precis, pentru fiecare logică a afacerii: fiecare calcul, unul necesar pentru a genera o Reprezentaţie Algebrică Intermediară (AIR) – un set de constrângeri polinomiale care reprezintă calculul specific.

Cairo s-a născut din realizarea că un calcul verificabil ar trebui pus la dispoziția dezvoltatorilor de pretutindeni. Cairo face posibilă exploatarea de către dezvoltatori a puterii STARK-urilor.

Între timp, comunitatea dezvoltatorilor a confiscat oraşul Cairo pentru a se construi cu entuziasm. Totul din ecosistemul StarkNet înfloritor de azi se bazează pe Cairo. Între[StarkNet](https://starkware.co/starknet/)și[StarkEx](https://starkware.co/starkex/), aplicațiile Cairo-motorizate au procesat peste 220M tranzacții, Am făcut tranzacții în valoare de peste 65M NFT, și au gestionat tranzacții în valoare de 700B și toate au decontat pe Ethereum.

În timp ce Cairo a făcut STARKs accesibil, acesta a fost proiectat inițial ca limbă de asamblare, și ca atare a fost scris ca un limbaj de nivel scăzut.

![Un exemplu pentru programele timpurii care au fost scrise în Cairo](/assets/cairocode_01.png "Un exemplu pentru programele timpurii care au fost scrise în Cairo")

Promptat de feedback-ul din partea dezvoltatorilor și de dezvoltarea[StarkNet](https://starkware.co/starknet/), am făcut Cairo mai expresiv și mai prietenos cu dezvoltatorul.

![Un exemplu din contractul ERC-20 Cairo care demonstrează sprijinul variabilelor în cazul declarațiilor, al erorilor și al bibliotecii UINT256](/assets/cairocode_02.png "Un exemplu din contractul ERC-20 Cairo care demonstrează sprijinul variabilelor în cazul declarațiilor, al erorilor și al bibliotecii UINT256")

Dar, în curând, am ajuns la concluzia că este timpul să facem un mare pas înainte şi în loc de îmbunătățiri treptate aduse Cairo, mergeți la o transformare mai îndrăzneață.

### Cairo 1.0

Pentru Cairo 1. am construit un nou compilator de la zero, care va oferi dezvoltatorilor caracteristici de siguranță, și le va permite să scrie contractele într-un mod mai simplu și mai expresiv.

#### Introducerea Sierra: demonstrarea faptului că fiecare cursă Cairo poate fi dovedită

Principalul adaos la Cairo 1. este Sierra (**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**tion). Sierra constituie un nou strat intermediar de reprezentare între codul Cairo 1.0 şi codul octet Cairo. Obiectivul Sierra este de a se asigura că fiecare rulare Cairo – adică un program Cairo și contribuțiile sale – poate fi dovedit (a se vedea mai jos).

Sierra promite Cairo devs un cod mai bun rezistent la viitor. Stabilitatea sporită este asigurată de faptul că contractele StarkNet nu vor trebui recompilate în cazul îmbunătățirii sistemului de bază (e. ., modificări ale arhitecturii AIR a procesului, îmbunătăţiri ale traducerii finale din Sierra în codul de byte Cairo).

**Dovada fiecărei rulări Cairo.**În vechiul Cairo, o operație Cairo poate avea ca rezultat trei cazuri — TRUE, FALSE sau eșec. Executările eșuate nu pot fi dovedite. Sierra, asigură că o cursă Cairo nu va da niciodată greș și poate avea ca rezultat doar TRUE sau FALSE. Acest lucru asigură, la rândul său, că fiecare rulare a Cairo poate fi dovedită.

Această introducere a Sierra are implicaţii importante pentru StarkNet ca o reţea fără permisiuni. Sierra asigură posibilitatea includerii tranzacţiilor inversate în blocurile StarkNet. Această proprietate va permite protocolului StarkNet să rămână slab și simplu fără a fi nevoie să adăugați mecanisme cripto-economice complexe.\
Două exemple semnificative:

1. Sequencerii vor putea colecta taxe pentru tranzacțiile inversate, permițând lui StarkNet să prevină Sequencer DoS într-un mod bine stabilit.
2. Implementarea tranzacțiilor L1 forțate va fi posibilă, permițând lui StarkNet să moștenească rezistența totală la cenzură a lui Ethereum.

### **Caracteristici Limbă**

Cairo 1.0 va oferi multe îmbunătățiri limbajului de programare în sine. Nu toate cele enumerate mai jos vor face parte din prima lansare, dar fac parte din foaia de parcurs.

#### **Sintaxă îmbunătățită**

* Nu mai sunt*locale*şi*tempvar*. Acum avem nevoie doar*let*to rule them all variables.
* Îmbunătățiți*dacă*sintaxa declarațiilor

```python
#Vechea
dacă contează ! 0 {
  tempvar x = x+1;
} else {
  tempvar x = x;
}
__________________________________
#New
dacă cond { x = x + 1; }
```

#### **Garanții de securitate de tip**

Compilatorul va folosi tastarea puternică pentru a îmbunătăți securitatea codului. De exemplu:

* Indicatorii vor indica întotdeauna memoria inițializată.
* Dicţionarele vor fi întotdeauna distruse, spre deosebire de a lăsa responsabilitatea de a apela squash_dict în seama programatorului.

#### **Ușor de folosit construcțiile lingvistice**

De exemplu:

* Pentru bucle

```
let sum = 0
for x in iter {
  sum = sum + x;
}
```

* Expresii booleene
* Integrări (cu diviziunea obișnuită de număr întreg 👯)
* Protecție suplimentară pentru tipurile relevante
* Afecţiuni booleene

```
#Old
Dacă cond1:
  if cond2:
       # Un cod
  altfel dacă cond3:
       # Același cod
__________________________________
#New
Dacă cond1 && (cond2 <unk> cond3) { … }
```

#### **Un sistem de tip complet**

* Tipuri de date abstracte (de ex. Numarul de divertisment)

```
Opţiunea enum<T> {
 Some: T,
 Niciunul,
}
potrivire rezultat {
 Some(r) => {..},
 Nici unul => {..},
}
```

* Trăsături

```
trăsătură Adaugă<Uint256> {
    fn add(…) { … }
}

let a: Uint256 = 1;
let b: Uint256 = 4;
a + b; // Evaluată la 5 din tipul Uint256.
```

#### **Biblioteci mai intuitive**

(de exemplu, dict, matrici)

* Dict<Uint256, MyStruct>;
* Array<MyOtherStruct>;

#### **Cod mai optimizat**

Nu este nevoie să se prevadă în mod explicit alocarea variabilelor locale – auto detectate și efectuate automat.

#### **O mai bună compilare a integrării**

Facilitarea unui sprijin mai bun pentru IDDE, gestionarea pachetelor şi facilitarea mai bună a contribuţiilor comunitare.

### **Concluzii**

La doi ani după ce Cairo a fost folosit pentru prima dată în producţie, dezvoltăm Cairo 1.0, care va asigura o mai bună expresivitate, securitate şi sintaxă. Aceasta va duce mai departe şi va permite dezvoltatorilor să îşi scrie mai uşor contractele StarkNet.

Într-o altă funcţie, în curând, vom împărtăşi mai multe detalii despre cum va fi Cairo 1. va avea efect asupra regenezei StarkNet și asupra modului în care dezvoltatorii ar trebui să se pregătească pentru lansarea sa.