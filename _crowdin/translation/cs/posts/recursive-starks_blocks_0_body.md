### TL;DR

* Rekurentní Proving je živý na Mainnet, škálování aplikací StarkEx i StarkNet s jedním důkazem
* Zvyšuje rozsah a přináší prospěch nákladům, a latence (vzácný a vzrušující výskyt rozsahu a latence se pohybují v tandemu a nejsou kompromisem)
* Nastavuje scénu pro L3 a další výhody Go přečtěte si blogový příspěvek na[Rekurentní Proving](https://medium.com/@starkware/recursive-starks-78f8dd401025). Je to skvělé věci 😉

### Škálování!

Rekurentní důkazy – poháněné všeobecným výpočtem Káhiry – jsou nyní ve výrobě. To znamená výrazné zvýšení síly škálování L2 pomocí STARKů. Rychle přinese mnohonásobný nárůst počtu transakcí, které lze do Ethereum zapsat prostřednictvím jediného důkazu.

Škálování STARK až dosud fungovalo tím, že „valí nahoru“ desítky nebo dokonce statisíce transakcí do jediného důkazu, který byl napsán do Etherea. S rekurzivou lze mnoho takových důkazů „přenést na jediný důkaz“.

Tato metoda je nyní ve výrobě pro řadu počítačových aplikací: aplikace běžící na StarkEx, součinitel SaaS a nepřípustný rollup StarkWare's a StarkNet.

### Dosud tento příběh

Od prvního důkazu o Mainnetu v březnu 2020 tento vývoj formoval způsob používání STARKů.

### Škálování na základě STARKU

V červnu 2020 bylo v Ethereum Mainnet, zavedeno první scaling řešení založené na STARKu –[StarkEx](https://youtu.be/P-qoPVoneQA). StarkEx má Prover, který provádí velké výpočty mimo řetězec a produkuje STARK-proof pro jejich správnost, a ověřovatel, který ověřuje tento důkaz v řetězci. Omezení pro toto první nasazení byla „ručně psaná“ od inženýrů Hvězdné flotily a tím značně omezovala rychlost rysu StarkEx. Dospěli jsme k závěru, že programovací jazyk, který by podpořil prokázání celkového výpočtu, je zapotřebí – Káhira.

#### Cairo

V létě 2020 se Káhira[objevila na Ethereum Mainnet](https://medium.com/starkware/hello-cairo-3cb43b13b209). Kairo znamená CPU Algebraic Intermediate Representation (AIR) a zahrnuje jeden AIR, který ověřuje sadu instrukcí tohoto „CPU“. Otevřela dveře pro kódování důkazů pro složitější obchodní logiku, pro svévolná výpočetní prohlášení, a to rychleji a bezpečněji. Program Káhira může prokázat provedení logiky jediné aplikace. Ale program Káhira může být také spojením několika takových aplikací – SHARP.

#### SHARP

SHARP – SHARed Prover – provádí transakce z několika různých aplikací a potvrzuje je v jediném důkazu STARKu. Aplikace zkombinují své transakce, čímž rychleji naplní kapacitu odolnosti proti STARKu. Transakce se zpracovávají se zvýšeným tempem a zpožděním. Další hranice: rekurentní důkazy, ale nejen pro nějakou tvrdou logiku, ale spíše pro**obecný výpočet**.

Abychom rozuměli plnému přínosu rekurentního poskytování, stojí za to trochu více porozumět tomu, jak (rekurentní) dokázala společnost SHARP až doposud. Výkres 1 znázorňuje typický nerekurentní tok:

![Výkres 1: Typický nerekurentní prokazující tok](/assets/recursive_starks_01.png "Výkres 1: Typický nerekurentní prokazující tok")

Zde přicházejí výpovědi postupem času. Pokud je dosaženo určité prahové hodnoty kapacity (nebo času), vygeneruje se velké kombinované prohlášení (též Train). Toto kombinované prohlášení je prokázáno až po obdržení všech jednotlivých prohlášení. Tento důkaz trvá dlouhou dobu, než se prokáže (zhruba součet času potřebného k prokázání každého prohlášení jednotlivě).

Prokázání extrémně velkých prohlášení je nakonec omezeno dostupnými výpočetními zdroji, jako je paměť. Před rekurzí to byla fakticky omezená bariéra škálovatelnosti u provinění STARK.

### Co je rekurentní poskytování?

S důkazy STARK je doba, po kterou je potvrzení potvrzení vyžadováno, přibližně lineární s časem, který trvá na provedení výpisu. Kromě toho, pokud prokázání prohlášení trvá T čas, pak ověření důkazu trvá zhruba čas log(T), což se obvykle nazývá „logaritmická komprese“. Jinými slovy, se STARKy trávíte mnohem méně času ověřováním prohlášení než jeho výpočtem.

[Kairo](https://starkware.co/cairo/)umožňuje vyjádřit obecná výpočetní prohlášení, která mohou být doložena důkazy STARK a ověřena příslušnými ověřovateli STARK.

Zde se vybírá příležitost k provedení[opakování](https://en.wikipedia.org/wiki/Recursion)v: stejným způsobem, jakým napíšeme program Káhira, který dokazuje správnost tisíců transakcí, můžeme také napsat program Káhira, který ověřuje více důkazů STARK. Můžeme vygenerovat jediný důkaz potvrzující platnost více důkazů „proti vysílání“. To nazýváme rekurentním poskytováním.

Kvůli logaritmickému stlačení a přibližně lineárnímu čase prokazování prokázání ověření STARK důkazu trvá relativně krátký čas (v blízké budoucnosti se očekává jen pár minut).

Při zavádění rekurence může SHARP prokázat výpovědi při příjezdu. Jejich důkazy mohou být znovu a znovu sloučeny do rekurentních důkazů v různých vzorech, dokud v určitém okamžiku je výsledný důkaz předložen k dohodě o ověřovateli řetězu. Typický vzor je znázorněn v výkresu 2:

![Výkres 2: Typický rekurentní prokazující tok.](/assets/recursive_starks_02.png "Výkres 2: Typický rekurentní prokazující tok.")

### Okamžité přínosy rekurentního poskytování

#### Snížené náklady na On-chain

Mimo chod, docílíme „komprese“ několika důkazních prostředků do jednoho, z toho vyplývá nižší náklady na ověření transakcí v řetězci (pokud může každé prohlášení zahrnovat mnoho transakcí).

Při rekurzi překážka ve výpočetních zdrojích (např. paměť), že až dosud byla odstraněna omezená velikost důkazů, protože každá omezená velikost může být prokázána samostatně. Proto při použití rekurence je efektivní velikost vlaku rekurze téměř neomezená, a náklady na transakci lze snížit o příkazy velikosti.

V praxi to znamená, že snížení závisí na přijatelné latenci (a na sazbě transakcí). Navíc vzhledem k tomu, že každý důkaz je obvykle doprovázen i některými výstupy, jako jsou údaje v řetězci, množství údajů, které lze psát on-chain spolu s jedním důkazem, je omezeno. Nicméně snížení nákladů o řádově velké množství a ještě lépe je triviálně dosažitelné.

#### Snížená odezva

Rekurentní předváděcí schéma snižuje latenci prokazování velkých vlaků v prohlášeních. To je důsledkem dvou faktorů:

1. Příchozí prohlášení lze prokázat**souběžně**(na rozdíl od prokázání extrémně velkého kombinovaného prohlášení).
2. Není třeba čekat až do posledního výpisu v příjezdu vlaku, aby začal prokazovat. Důkazy lze spíše zkombinovat s novými prohlášeními, která přijíždí. To znamená, že doba platnosti posledního výpovědi pro vlak je zhruba doba, kterou je třeba prokázat, že velmi poslední prohlášení a doba, kterou potřebuje k prokázání prohlášení rekurentního ověřovatele (které potvrzuje všechna prohlášení, která již „zapojila“ tento konkrétní vlak).

Aktivně vyvíjíme a optimalizujeme latenci dokazování prohlášení rekurentního ověřovatele. Očekáváme, že během několika měsíců dosáhneme řádu několika minut. Proto může vysoce efektivní SHARP nabídnout zpoždění od několika minut do několika hodin, v závislosti na kompromisu a nákladech v řetězci na transakci. To představuje smysluplné zlepšení latence SHARP.

#### Usnadnění L3

Vývoj prohlášení rekurentního ověřovatele v Káhiře rovněž otevírá možnost předložit důkazy společnosti StarkNet, vzhledem k tomu, že toto prohlášení lze upadnout do chytré kontrakce StarkNet. To umožňuje stavbu[L3 nasazení nad veřejnou StarkNet](https://medium.com/starkware/fractal-scaling-from-l2-to-l3-7fe238ecfb4f)(síť L2).

Rekurentní schéma se vztahuje také na shromažďování důkazů z L3, které musí být ověřeno jediným důkazem na L2. Proto se zde také dosahuje hyperškálování.

### Další výhody

#### Recirkulace

Recenze otevírá ještě více příležitostí pro platformy a aplikace, které si přejí dále své náklady a výkon.

Každý důkaz STARK potvrzuje platnost prohlášení, které se použije na některé vstupy známé jako „veřejný vstup“ (nebo „programový výstup“ za Káhiry). Koncepční rekurze STARK komprimuje dva důkazy s*dvěma*vstupy do*jednoho*důkazu se dvěma vstupy. Jinými slovy, zatímco se počet důkazů snižuje, počet vstupů se udržuje konstantně. Tyto vstupy pak obvykle používá aplikace k aktualizaci určitého stavu na L1 (např. . pro aktualizaci kořene stavu nebo provedení online stahování).

Je-li rekurzivní tvrzení povoleno*aplikací-vědět*, tj. uznává sémantiku aplikace samotné, může obě komprimovat dva důkazy do jednoho*a*kombinovat oba vstupy do jedné. výsledné prohlášení potvrzuje platnost vstupní kombinace na základě sémantiky aplikace, název Aplikující Recurze (viz například Drawing 3).

![Výkres 3: Příklad aplikační rekurze](/assets/recursive_starks_03.png "Výkres 3: Příklad aplikační rekurze")

Zde se osvědčuje prohlášení 1 o aktualizaci stavu z osvědčení A na B a prohlášení 2 na další aktualizaci z B na C. Doklady o prohlášení 1 a prohlášení 2 lze kombinovat do třetího prohlášení, které potvrzuje přímou aktualizaci z A na C. Uplatňováním podobné logiky rekurentně lze snížit náklady na aktualizace stavu velmi významně až na požadavek na latenci finality.

Dalším důležitým příkladem aplikační rekurze je komprimace údajů o rollupu z více důkazů. Například pro Validity Rollup jako StarkNet, každá aktualizace úložiště na L2 je rovněž zahrnuta jako údaje o přenosu na L1, aby byla zajištěna dostupnost dat. Není však nutné zasílat více aktualizací pro stejný úložný prvek, vzhledem k tomu, že pro dostupnost údajů se vyžaduje pouze konečná hodnota transakcí potvrzená důkazem. Tato optimalizace je již prováděna v rámci*jednoho*bloku StarkNet. Generování důkazu pro každý blok však může aplikační rekurze komprimovat tato data přes*více*bloků L2. To může vést k výraznému snížení nákladů, což umožní kratší intervaly bloků na L2 bez obětování škálovatelnosti aktualizací L1.

Pozn.: Aplikační rekurze může být kombinována s rekurzí aplikací-agnostickou, jak je znázorněno dříve. Tyto dvě optimalizace jsou nezávislé.

#### Snížená složitost On-chain ověřovatele

Složitost ověřovatele STARK závisí na druhu prohlášení, které má ověřovat. Zejména u prohlášení v Káhiře závisí složitost ověřovatele na konkrétních prvcích povolených v Káhiře, a přesněji řečeno, podporované vestavěné soubory (pokud používáme metaforu CPU pro Káhiru, pak jsou vestavěné mikroobvody v procesoru ekvivalentní: výpočty se provádějí tak často, že vyžadují vlastní optimalizovaný výpočet).

Káhirský jazyk se nadále vyvíjí a nabízí stále více užitečnějších vestavěných. Na druhé straně rekurentní ověřovatel vyžaduje pouze použití malé podmnožiny těchto vestavěných. Rekurentní SHARP proto může úspěšně podpořit jakékoli prohlášení v Káhiře tím, že podpoří celý jazyk rekurentních ověřovatelů. Ověřovatel solidarity L1 musí ověřovat pouze rekurentní důkazy, a proto může být omezena na stabilnější podmnožinu Káhiry: Ověřovatel L1 nemusí držet krok s nejnovějšími a největšími vestavěnými prvky. Jinými slovy, ověření stále se vyvíjejících složitých prohlášení je odloženo na L2, takže ověřovatel L1 ověřuje jednodušší a stabilnější prohlášení.

#### Snížená informativní stopa

před rekurencí, schopnost sloučit vícenásobná prohlášení do jednoho důkazu byla omezena maximální velikostí prohlášení, která by mohla být prokázána v dostupných výpočtových instancích (a dobou, kterou by bylo možné získat k získání takových důkazů).

S rekurzivou již není třeba dokazovat tak mimořádně velká prohlášení. V důsledku toho je menší lze použít méně nákladné a dostupnější výpočetní instance (i když jich může být zapotřebí více než u velkých monolitických provenienců). To umožňuje nasazení provinčních instancí ve více fyzických a virtuálních prostředích, než bylo dříve možné.

### Summary

Rekurentní důkazy všeobecného výpočetního výkonu nyní slouží k mnoha výrobním systémům, včetně StarkNet, na Mainnet Ethereum.

Přínosy zotavení budou realizovány postupně, neboť i nadále umožňují nová zlepšení, a brzy dodá hyperměřítko, sníží poplatky za plyn a zlepší latenci uvolněním potenciálu paralelizace.

Přináší spolu s ní značné přínosy v oblasti nákladů a latinky, společně s novými příležitostmi, jako je L3 a rekurence aplikací. Další optimalizace rekurentního ověřovatele probíhá a očekává se, že bude v průběhu času poskytován ještě lepší výkon a nákladové přínosy.



**Gidi Kaempfer**, vedoucí hlavní inženýrství, StarkWare