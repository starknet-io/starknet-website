### TL;DR

* Káhira 1.0 je první velké vydání po[zavedení Káhiry](https://medium.com/starkware/hello-cairo-3cb43b13b209)před dvěma lety
* Kairo 1.0 poskytne vývojářům bezpečnější, jednodušší a použitelnější programovací jazyk
* V srdci Káhiry 1.0 bude**Sierra**, zprostředkující vrstva zastoupení, která slibuje větší dlouhodobou stabilitu programů Káhira
* Sierra postupuje v Káhiře, aby sloužila v bezpovolené síti:\
  -**Ochrana sítě**: umožňuje robustnější DoS ochranu\
  -**ochranu uživatele**: umožňuje cenzuru Ethereum-grade resistanceKairo 1. v mnoha ohledech se projeví StarkNet. Bude mít také vliv[Regenesis](https://medium.com/starkware/regenesis-starknets-no-sweat-state-reset-e296b12b80ae). Budeme zveřejňovat více informací o Regenesis v nadcházejících týdnech.

### Úvod

V roce 2020 jsme vydali Cairo, Turing-kompletní programovací jazyk a udělali velký krok k podpoře ověřitelných výpočtů pomocí STARKů. Dnes oznamujeme**Káhira 1.0**, což je zatím největší pokrok Káhiry. Zavede vylepšený jazyk s prvky, které zvýší použitelnost, bezpečnost a pohodlí. Je navržen tak, aby podporoval požadavky StarkNetu jako nepřípustnou síť, což umožní jednodušší a bezpečnější protokol.\
Vývoj již probíhá a očekáváme, že se první vydání stane brzy.

Na tomto místě budeme popsat cestu Káhiry až dosud a sdílet podrobnosti o nadcházejících funkcích.

### Káhirská cesta

Až do roku 2020 byly zapotřebí specializované znalosti k vybudování programů pro všeobecný výpočetní program STARK. Bylo to možné pouze pro ty, kdo pochopili složitou matematiku STARKů. Konkrétně pro každou podnikatelskou logiku, tj. každý výpočet, jeden potřebný k vytvoření Algebraické meziodvětvové reprezentace (AIR) – soubor polynomických omezení, která představují specifický výpočet.

Káhira se zrodila z pochopení, že ověřitelný výpočet by měl být zpřístupněn vývojářům všude na světě. Káhira umožňuje vývojářům využít sílu STARKů.

Vývojářská komunita od té doby využila Káhiru k nadšené výstavbě. Vše v prosperujícím ekosystému StarkNet je dnes založeno na Káhiře. Mezi[StarkNet](https://starkware.co/starknet/)a[StarkEx](https://starkware.co/starkex/), aplikace na Cairo-powered zpracovávají více než 220M transakcí, vytěžil více než 65M NFT a objednal obchody v hodnotě $700B, vše bylo vypořádáno na Ethereu.

Zatímco Káhira STARKům zpřístupnila, byla původně navržena jako montážní jazyk a jako taková byla napsána jako nízký jazyk.

![Příklad raných programů, které byly napsány v Káhiře](/assets/cairocode_01.png "Příklad raných programů, které byly napsány v Káhiře")

Na základě zpětné vazby od vývojářů a vzestupu[StarkNet](https://starkware.co/starknet/)jsme postupně učinili Káhiru výraznější a přátelštější vývojáře.

![Příklad z Káhiry smlouvy ERC-20 prokazující podporu proměnných, pokud jsou vyjádření, chyby a knihovna UINT256](/assets/cairocode_02.png "Příklad z Káhiry smlouvy ERC-20 prokazující podporu proměnných, pokud jsou vyjádření, chyby a knihovna UINT256")

Brzy jsme však dospěli k závěru, že nastal čas udělat velký skok vpřed, a místo přírůstkových vylepšení v Káhiře, přejděte na tučnější transformaci.

### Cairo 1.0

Pro Káhiru 1. Vytvořili jsme celý nový kompilátor ze země, který poskytne vývojářům bezpečnostní prvky, a umožní jim psát smlouvy jednodušším a výraznějším způsobem.

#### Zavedení Sierra: zajištění každého kairského běhu lze prokázat

Hlavní dodatek v Káhiře 1. je Sierra (**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**tion). Sierra představuje novou přechodovou reprezentační vrstvu mezi Káhirou 1.0 a Káhirou byte kód. Sierra si klade za cíl zajistit, aby každý běh Káhiry – tj. program Káhira a jeho vstup – mohl být prokázán (viz více níže).

Sierra slibuje Káhiru lepší kód pro budoucnost. Další stabilitu zajišťuje skutečnost, že smlouvy StarkNet nebudou v případě zlepšení základního systému nutné přepracovávat. ., CPU AIR architecture changes, vylepšení konečného překladu z Sierry do Cairo byte code).

**Prokázání každého běhu v Káhiře.**Ve staré Káhiře může běh v Káhiře vyústit ve tři případy – TRUE, FALSE, nebo selhání. Selhalo běhy nelze provést. Sierra zajišťuje, že běh v Káhiře nikdy neselže, a může mít za následek pouze TRUE nebo FALSE. To zase zajišťuje, že každý běh v Káhiře může být prokázán.

Toto zavedení Sierry má důležité důsledky pro StarkNet jako nepovolenou síť. Sierra zajišťuje, že i vrácené transakce mohou být zahrnuty do bloků StarkNet. Tato vlastnost umožní, aby protokol StarkNet zůstal jednoduchý a nemusel přidávat komplexní krypto-ekonomické mechanismy.\
Dva smysluplné příklady:

1. Sekvencery budou moci vybírat poplatky za stornované transakce, což StarkNet umožní zabránit Sequencer DoS zavedeným způsobem.
2. Zavedení nucených transakcí L1 bude možné, což společnosti StarkNet umožní zdědit plnou cenzurní rezistenci Ethereum.

### **Vlastnosti jazyka**

Káhira 1.0 nabídne mnoho vylepšení samotného programovacího jazyka. Ne vše uvedené níže bude součástí prvního vydání, ale je součástí plánu.

#### **Vylepšená syntaxe**

* Žádné další*lokální*a*tempvar*. Nyní potřebujeme pouze*let*k tomu, abychom jim vládli všechny proměnné.
* Vylepšená*pokud*syntaxe výkazů

```python
#Starý
pokud je cond ! 0 {
  tempvar x = x+1;
} else {
  tempvar x = x;
}
__________________________________
#New
, pokud cond { x = x + 1; }
```

#### **Typové záruky**

Kompilátor bude používat silné psaní pro zvýšení bezpečnosti kódu. Například:

* Ukazatele budou vždy ukazovat na inicializovanou paměť.
* Dictionaries budou vždy shazovány na rozdíl od toho, že odpovědnost za volání squash_dict na programátora.

#### **Snadnější používat jazykové konstrukce**

Například:

* Pro cykly

```
let součet = 0
pro x in iter {
  součet = součet + x;
}
```

* Logické výrazy
* Celá čísla (s pravidelnou divizí integer 👯)
* Ochrana před nadměrným tokem pro příslušné typy
* Logické podmínky

```
#Old
If cond1:
  if cond2:
       # Some code
  else if cond3:
       # Same code
__________________________________
#New
If cond1 && (cond2 || cond3) { … }
```

#### **Systém plnohodnotného typu**

* Abstraktní typy dat (tj. Rustově podobný enum)

```
enum Možnost<T> {
 Některá: T,
 žádná,
}
shodit výsledek {
 Some(r) => {..}
 None => {..},
}
```

* Vlastnosti

```
znak Přidat<Uint256> {
    fn add(…) { … }
}

let a: Uint256 = 1;
let b: Uint256 = 4;
a + b; // Vyhodnoceno podle 5 typu Uint256.
```

#### **Více intuitivních knihoven**

(např. dikt, pole)

* Dikt<Uint256, MyStruct>
* Pole<MyOtherStruct>;

#### **Více optimalizovaný kód**

Není třeba výslovně uvádět přidělování místních proměnných – automaticky zjišťováno a prováděno automaticky.

#### **Lepší integrace kompilátoru**

Umožňuje lepší podporu IDE, správu balíčků a lepší podporu příspěvků komunity.

### **Závěr**

Dva roky po prvním použití Káhiry ve výrobě vyvíjíme Káhiru 1.0, která přinese lepší vyjádření, bezpečnost a syntaxi. Bude to vyžadovat velký krok vpřed, což umožní vývojářům snáze psát své kontrakty StarkNet.

V jiném příspěvku, který přijde brzy, budeme sdílet více podrobností o tom, jak Káhira 1. bude mít vliv na regenezi StarkNetu a na to, jak by se vývojáři měli připravit na jeho vydání.