### TL;DR

* Stavíme StarkNet v krocích, počínaje stanovením**použitelnosti**, pak zlepšení**výkonu**a konečně přechod na**decentralizaci**
* Dosáhli jsme svého prvního cíle: použitelnosti. To znamená, že jsme dodali obecný výpočet ve stavu podobném Ethereu (roky před tím, než se to považovalo za možné)
* Nyní přejdeme do druhé etapy našeho třídílného stavebního plánu: výkonnost, zaměření na prostor, transakční náklady a zpoždění.
* Další nahoru: Decentralizace

Jen rok poté, co byly poprvé oznámeny plány pro[StarkNet](https://starknet.io/), má platforma velmi dobrou funkčnost. Vývojářská komunita kvete nad naše nejdivočejší očekávání a poskytuje neustálý vzkříšení nových Nativních projektů.

Naší prioritou před minulým rokem bylo právě toto umožnit, vytvořením fungujícího StarkNet s rychle se rozšiřujícím rozsahem funkcí, který umožní devům se dostat rovnou rovinou.

Udělali to ve velkém počtu. Dobrý barometr je počet stahování pro[JavaScript knihovnu pro StarkNet](https://www.starknetjs.com/): již na 5k od doby, kdy byla k dispozici před 4 měsíci.

Přestože StarkNet zajišťuje kompresní magii, kterou jsme v tuto chvíli slíbili. zdaleka to není schopno udělat pro dostatek dApps s dostatkem výkonu, a to může být krátkodobým zdrojem frustrace pro vývojáře.

Našim bojově testovaným jádrovým technologiím STARK, která dokazuje mnoho transakcí a komprimuje důkazy, musí předcházet dávkování nebo sekvenování transakcí. Je to proces, který už tým StarkWare jednou dokončí pro škálovací motor[StarkEx](https://starkware.co/starkex/), a v současné době na tom znovu pracujeme pro potřeby StarkNet.

Teď když bylo splněno mnoho našich cílů využitelnosti, přesouváme pozornost k tomu, aby se tato priorita stala naší nejvyšší prioritou. Je součástí naší 3-fázové mapy:**použitelnost**, po níž následuje výkon sítě****a poté**decentralizace**. rok v: chceme vám dát náhled pod kapotou — nástin toho, co je na místě a co stále probíhá.

### Příběh tak daleko

StarkNet Alpha byla v červnu uvolněna do veřejného testnetu a v listopadu do Mainnetu. V době zavedení systému Mainnet už StarkNet poskytoval všeobecné výpočty ve státě podobném Ethereu, který byl všeobecně pokládán za roky vzdálený.

V průběhu vývoje jsme zvolili přístup, který se nejprve zaměřil na nejdůležitější funkce a uvolnil je, jakmile budou k dispozici, v zásadě sdílí evoluční proces s komunitou. StarkNet zdaleka není kompletní, ale i nyní mohou vývojáři vytvářet smysluplné a složité aplikace. Dnes máme stovky vývojářů[na StarkNet,](https://starkware.notion.site/Projects-Building-on-StarkNet-a33dee55778a4515a9be9bdae02ee682)desítky dApps, a více než tucet externích týmů vyvíjejících nástroje a infrastrukturu pro ekosystém StarkNet.

Řetězec vylepšení přinesl mnoho důležitých funkcí, včetně L1<>L2 zpráv, online dat a podpory skladby, podpory událostí, mechanismu základního poplatku, aktualizovatelnost kontraktu, abstrakce účtu, rámec testování, nástroje vývojářů, rychlé potvrzení, číslo bloku, časové razítko, podpora pro smlouvy na účet.

Vývojářská komunita má hluboký zájem o StarkNet a ve skutečnosti utvářejí jeho vývoj. Funkce již byly zavedeny na základě zpětné vazby vývojáře. Přijetí by mohlo docela dobře předstihnout nárůst propustnosti, a proto je toto posílení naší hlavní prioritou nyní.

### Další kroky

Teď když jsme dosáhli použitelnosti, nastal čas zlepšit výkon systému. Systém je ve svém současném stavu schopen podporovat omezené množství transakcí. Způsob, jak to vyřešit, spočívá ve zlepšení výkonu Sequencer Node, který je ekvivalentem StarkNetu horníka. Je to „stroj“, že posloupnosti transakcí po jejich předložení. Jakmile bude optimalizováno, průchodnost bude raketa obloha.

Za tímto účelem zároveň analyzujeme, kde jsou překážky a jak je řešit jeden po druhém. V současné době všechny překážky souvisejí s postupným postupem, který přichází před tím, než se odvoláme na provincie STARK. Bojovně testovaný provokační štos je připraven podpořit výkony podobné StarkExu na StarkNet.

Očekáváme, že optimalizace posloupnosti bude proces, který trvá několik měsíců, s postupnými zlepšeními napříč H1/22. Naším cílem je dosáhnout na začátku druhé poloviny roku 2022 alespoň o jeden řád vyššího TPS než Ethereum, za cenu, která je nejméně o dva řády nižší než Ethereum. A to je jen začátek.

Existuje dobrý důvod, proč je tato fáze optimalizace potřebná, a že StarkNet nebyl spuštěn s hotově optimalizovaným sekvenčním vybavením: StarkNet dokázal dosáhnout použitelnosti tak rychle, protože jsme dostali head-start. Místo abychom začali od nuly a stavěli jsme zcela novou sekvenci, použili jsme jako ústřední složku batcher ze StarkEx.

To byl skvělý způsob, jak postavit. Nepřineslo to jen rychle; znamenalo to, že jsme vybudovali na stabilních základech. StarkEx v podstatě otestoval stěžejní funkčnost, která vede StarkNet, neboť v kumulativním obchodování zaznamenala stamiliardy dolarů.

[StarkEx](https://starkware.co/starkex/)je nástroj pro škálování některých z nejúspěšnějších dApps pomocí L2: dYdX (trvalé smlouvy), DeversiFi (spotové obchodování a platby), stejně jako pro neměnitelné a Sorare (NFT těžba a obchodování).

Řetězec vytvořený pro ně a další klienty StarkEx však může až dosud použít StarkNet. Každý z nich přistupuje ke stejnému typu transakcí každý den. StarkNet je o**obecných výpočtech**, takže jeho potřeby jsou otevřené. Když její posloupnost provádí transakce z mempoolu, jsou v různých tvarech a velikostech. Plus, StarkNet je také otevřená síť, což znamená, že existují další výpočetní režijní náklady, které se nezabývají ve StarkEx.

Současná výzva, totiž optimalizace posloupnosti těchto nových potřeb, je významným podnikem, na základě našeho úspěšného vývoje StarkEx však dobře rozumíme potřebné cestě.

### Další nahoru: Decentralizace

StarkNet má být plně decentralizovanou bezpřípustnou sítí doplněnou o mechanismy voleb a vládnutí. Dosažení tohoto cíle se stane naším hlavním zaměřením, jakmile se raketové rakety a propady nákladů, a doufáme, že do konce roku 2022 budeme mít první decentralizovanou verzi. V nadcházejících měsících očekáváme veřejné sdílení našeho plánu decentralizace.

Stejně jako současná omezená kapacita představuje přechodnou fázi vývoje StarkNet, je i současná míra angažovanosti StarkWare dočasná. Sami sebe vnímáme jako lešení druhu, které ve fázi výstavby plní důležitou funkci, ale v pravý čas se opět otočí.

Úplný vývoj uzlu, vzrušující první krok k decentralizaci, již probíhá. Kompletní uzly umožní každému, aby držel a ověřoval stav sítě lokálně, přičemž bude sledovat přesně to, co se děje. Tři týmy –*Erigon, Nethermind a equilibrium*– vyvíjejí plné uzly a potenciálně více se v budoucnu začne vyvíjet.

V paralelním vývoji probíhají přípravy na sekvenování a prokazování softwaru veřejnosti. Každý se bude moci účastnit jako posloupník nebo provize StarkNet.

Bude vytvořena struktura, která bude motivovat lidi k účasti na životě, což bude zahrnovat ekonomické odměny. StarkNet poplatky budou částečně směřovat k následovníkům a provinýrům.

Ve střednědobém horizontu očekáváme, že naše posloupnost zpřístupníme třetím stranám, a v dlouhodobém horizontu očekáváme, že uvidíme také různé týmové sekvence, které budou sekvencovat pro StarkNet.

### Vždy zlepšovat; navždy poslouchat

Až se zaměříme na další výzvu, budeme se i nadále zlepšovat při minulých úspěších. A při další práci na všech oblastech[StarkNet](https://starknet.io/)budou naše uši vždy otevřeny celé vývojářské komunitě. Takže se zapojte do diskuse, prostřednictvím[Discord](https://discord.com/invite/uJ9HZTUk2Y), komunity[StarkNet Shamans](https://www.google.com/search?client=safari&rls=en&q=StarkNet+Shamans&ie=UTF-8&oe=UTF-8),[Twitter](https://twitter.com/Starknet_Intern)nebo jiná trasa a pomoci utvářet budoucnost škálování blockchainu.