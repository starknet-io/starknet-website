### TL;DR

* A Cairo 1.0 az első nagyobb kiadás a Cairo</a>két évvel ezelőtti

bevezetése után</li> 
  
  * A Cairo 1.0 biztonságosabb, egyszerűbb és használhatóbb programozási nyelvet ad a fejlesztőknek
* A Cairo 1.0 középpontjában**Sierra**áll majd, egy közvetítő reprezentációs réteg, amely nagyobb hosszú távú stabilitást ígér a kairói programok számára
* A Sierra továbbfejleszti Kairót, hogy egy engedély nélküli hálózatban szolgálhasson:\
  -**A hálózat védelme**: robusztusabb DoS védelmet tesz lehetővé\
  -**A felhasználó védelme**: lehetővé teszi az Ethereum-minőségű cenzúra ellenállást A Cairo 1.0 sokféleképpen hatással lesz a StarkNetre. Ez hatással lesz a[Regenesis](https://medium.com/starkware/regenesis-starknets-no-sweat-state-reset-e296b12b80ae)is. A következő hetekben további információkat teszünk közzé a Regenesisről.</ul> 



### Bevezetés

2020-ban kiadtuk a Cairo-t, egy Turing-komplett programozási nyelvet, és nagy lépést tettünk a STARK-ok segítségével történő, ellenőrizhető számítások támogatása felé. Ma bejelentjük**Cairo 1.0**verziót, amely Kairó eddigi legnagyobb fejlesztése. Továbbfejlesztett nyelvet vezet be olyan funkciókkal, amelyek javítják a használhatóságot, a biztonságot és a kényelmet. Úgy tervezték, hogy támogassa a StarkNet engedély nélküli hálózat követelményeit, lehetővé téve a protokoll egyszerűbbé és biztonságosabbá válását.\
A fejlesztés már folyamatban van, és várhatóan hamarosan megtörténik az első kiadás.

Ebben a bejegyzésben leírjuk Kairó eddigi utazását, és megosztjuk a részleteket a közelgő funkciókról.



### A kairói utazás

2020-ig niche tudásra volt szükség a STARK által igazolható általános számítási programok elkészítéséhez. Ez csak azok számára volt lehetséges, akik megértették a STARK-ok mögött rejlő összetett matematikát. Pontosabban, minden üzleti logikához, azaz minden számításhoz egy algebrai köztes reprezentáció (AIR) generálásához szükséges – polinomiális kényszerek halmaza, amely az adott számítást reprezentálja.

Kairó abból a felismerésből született, hogy az ellenőrizhető számításokat mindenhol elérhetővé kell tenni a fejlesztők számára. Kairó lehetővé teszi a fejlesztők számára, hogy kihasználják a STARK-ok erejét.

A fejlesztői közösség azóta megragadta Kairót, hogy lelkesen építsen. A virágzó StarkNet ökoszisztémában ma minden Kairón alapul. [StarkNet](https://starkware.co/starknet/)és[StarkEx](https://starkware.co/starkex/)között a kairói alkalmazások több mint 220 millió tranzakciót dolgoztak fel, több mint 65 millió NFT-t vertek, és 700 milliárd dollár értékű ügyletet bonyolítottak le, mindezt az Ethereumon rendezték el.

Míg Kairó elérhetővé tette a STARK-okat, eredetileg assembly nyelvnek tervezték, ezért alacsony szintű nyelvnek írták.

![Példa a korai programokra, amelyeket Kairóban írtak](/assets/cairocode_01.png "Példa a korai programokra, amelyeket Kairóban írtak")

A fejlesztők visszajelzései és[StarkNet](https://starkware.co/starknet/)térnyerése miatt fokozatosan kifejezőbbé és fejlesztőbarátabbá tettük Kairót.

![Példa az ERC-20 Kairói szerződésből, amely bemutatja a változók, if utasítások, hibák és UINT256 könyvtár támogatását](/assets/cairocode_02.png "Példa az ERC-20 Kairói szerződésből, amely bemutatja a változók, if utasítások, hibák és UINT256 könyvtár támogatását")

Ám hamarosan arra a következtetésre jutottunk, hogy ideje nagyot ugrani előre, és Kairó fokozatos fejlesztése helyett egy merészebb átalakításra fogunk.



### Kairó 1.0

A Cairo 1.0-hoz az alapoktól kezdve egy teljesen új fordítót építettünk fel, amely biztonsági funkciókkal látja el a fejlesztőket, és lehetővé teszi számukra a szerződések egyszerűbb és kifejezőbb megírását.



#### Bemutatkozik Sierra: minden kairói futás bizonyítható legyen

A Cairo 1.0 fő kiegészítése a Sierra (**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**tion). A Sierra egy új köztes reprezentációs réteget képez a Cairo 1.0 és a Cairo byte kód között. A Sierra célja annak biztosítása, hogy minden kairói futtatás – azaz egy kairói program és annak bemenete – bizonyítható legyen (lásd alább).

A Sierra azt ígéri, hogy a Cairo jobb, jövőbiztos kódot fejleszt. További stabilitást biztosít az a tény, hogy a StarkNet szerződéseket nem kell újrafordítani az alapul szolgáló rendszer fejlesztése esetén (pl. CPU AIR architektúra változásai, a Sierráról Kairóba való végleges fordítás javítása).

**Minden kairói futás bizonyítása.**A régi Kairóban egy kairói futtatás három esetet eredményezhet – IGAZ, HAMIS vagy kudarcot. A sikertelen futásokat nem lehet bizonyítani. Sierra biztosítja, hogy a kairói futás soha ne kudarcot valljon, és csak IGAZ vagy HAMIS eredményt eredményezhet. Ez viszont biztosítja, hogy minden kairói futás bizonyítható legyen.

A Sierra ezen bevezetése fontos hatással van a StarkNetre, mint engedély nélküli hálózatra. A Sierra biztosítja, hogy még a visszaállított tranzakciók is bekerüljenek a StarkNet blokkba. Ez a tulajdonság lehetővé teszi, hogy a StarkNet protokoll karcsú és egyszerű maradjon anélkül, hogy bonyolult kripto-gazdasági mechanizmusokat kellene hozzáadni.\
Két értelmes példa:

1. A Sequencerek díjakat szedhetnek be a visszaváltott tranzakciók után, így a StarkNet jól bevált módon megakadályozhatja a Sequencer DoS-t.
2. Lehetővé válik a kényszerített L1-tranzakciók végrehajtása, ami lehetővé teszi, hogy a StarkNet örökölje az Ethereum teljes cenzúra-ellenállását.



### **Nyelvi jellemzők**

A Cairo 1.0 számos fejlesztést kínál magának a programozási nyelvnek. Nem minden alább felsorolt lesz az első kiadás része, de az ütemterv része.



#### **Továbbfejlesztett szintaxis**

* Nincs több*helyi*és*tempvar*. Most már csak*legyen*, hogy az összes változót szabályozzuk.
* Javított*ha*utasítások szintaxisa



```python
#Old
if cond != 0 {
  tempvar x = x+1;
} else {
  tempvar x = x;
}
__________________________________
#Új
if cond { x = x + 1; }
```




#### **Típusbiztonsági garanciák**

A fordító erős gépelést használ a kód biztonságának javítása érdekében. Például:

* A mutatók mindig az inicializált memóriára mutatnak.
* A szótárak mindig összeomlanak, ahelyett, hogy a squash_dict meghívását a programozóra bíznák.



#### **Könnyebben használható nyelvi konstrukciók**

Például:

* Hurkokhoz



```
legyen összeg = 0
x-re az iterben {
  összeg = összeg + x;
}
```


* Logikai kifejezések
* Egész számok (szabályos egész osztással 👯)
* Túlfolyás elleni védelem a megfelelő típusokhoz
* Logikai feltételek



```
#Régi
Ha feltétel1:
  ha feltétel2:
       # Valami
  as kód, ha feltétel3:
       # Ugyanaz a kód
__________________________________
#Új
Ha feltétel1 && (2. feltétel || kond.3) { … }
```




#### **Teljesen kiforrott típusú rendszer**

* Absztrakt adattípusok (pl rozsdaszerű enum)



```
enum Opció<T> {
 Néhány: T,
 Nincs,
}
találat eredménye {
 Néhány(r) => {..},
 Nincs => {..},
}
```


* Tulajdonságok



```
vonás Add<Uint256> {
    fn add(…) { … }
}

legyen a: Uint256 = 1;
legyen b: Uint256 = 4;
a + b; // Uint256 típusú 5-re értékelve.
```




#### **Intuitívabb könyvtárak**

(pl. dict, tömbök)

* Dict<Uint256, MyStruct>;
* Sor<MyOtherStruct>;



#### **Optimalizáltabb kód**

Nem kell kifejezetten megadni a helyi változók kiosztását – a rendszer automatikusan észleli és automatikusan megtörténik.



#### **Jobb fordítóintegráció**

Jobb IDE-támogatás, csomagkezelés és a közösségi hozzájárulások jobb elősegítése.



### **Következtetés**

Két évvel azután, hogy a Kairót először gyártásban használták, fejlesztjük a Cairo 1.0-t, amely javítja a kifejezhetőséget, a biztonságot és a szintaxist. Ez nagy lépést tesz majd előre, lehetővé téve a fejlesztők számára, hogy könnyebben írják meg StarkNet-szerződéseiket.

Egy másik, hamarosan megjelenő bejegyzésben további részleteket fogunk megosztani arról, hogy a Cairo 1.0 hogyan befolyásolja a StarkNet újjászületését, és hogyan kell a fejlesztőknek felkészülniük a megjelenésére.