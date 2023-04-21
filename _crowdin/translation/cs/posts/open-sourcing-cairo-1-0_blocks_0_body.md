### TL;DR

* **Káhira 1.0 je open source! Toto je pouze první krok k otevřenému získávání zásobníku StarkNet.**
* Nyní představíme[první pohled](https://github.com/starkware-libs/cairo)do Káhiry 1.0. Nyní můžete začít experimentovat se základním Káhirou 1.0 kódem
* Káhira 1.0 v jádře je velmi podobná Rust
* Považujte to za první chuť, ne za vydání. Další zlepšení jsou na cestě. První verze kompilátoru je naplánována na začátku prvního Q1 příštího roku.
* Káhira 1.0 zatím není na StarkNet podporována. Bude v příštím roce podporována na StarkNet v Q1.

### Úvod

V roce 2020 jsme vydali[Káhira](https://eprint.iacr.org/2021/1063.pdf), Turing-kompletní programovací jazyk podporující ověřitelný výpočet. Káhira začala jako montážní jazyk a postupně se projevila. Před dvěma měsíci jsme oznámili[Káhira 1.0](https://medium.com/starkware/cairo-1-0-aa96eefb19a0), která se zabývá některými důležitými problémy v současné situaci:

* Káhirská syntaxe sice od svého vzniku zaznamenala významné zlepšení, avšak zkušenosti vývojářů se vždy mohou zlepšit. Káhira 1.0 je inspirovaný plně psaný jazyk, díky čemuž je psaní stejné logiky mnohem jednodušší a méně náchylné k chybám.
* Stávající kompilátor je vyvinut ve stejném repozitáři jako StarkNet samotný, takže je těžší sledovat změny jazyka. Káhira 1.0 kompilátor je napsán od země nahoru, což umožňuje rychlejší vývoj funkcí a větší zapojení komunity.
* Každý výpočet je nyní prokazatelný. V současné době může program Káhira selhat se specifickými vstupy (např. dosažením \`assert 1=2\` instrukce v některé výpočetní větvi), což činí výpočet neproveditelným. S Káhirou 1.0 jsou programy prokazatelné ve všech možných větvích. To je důležité zejména pro ochranu DOS a cenzurní odpor v StarkNetu.

Dnes si připomínáme první milník při dosahování výše uvedených cílů, když posuneme vývoj k veřejnému repou, a**open source Káhira 1. !**Vývojáři nyní mohou poprvé zkompilovat a spustit jednoduché programy v Káhiře. To umožňuje vývojářům začít experimentovat s Káhirou 1. a postupně si zvykněte na nové funkce, i když ji v této fázi ještě nemohou implementovat na StarkNet.

### Aktuální možnosti

V současné době můžete kompilovat a spustit základní programy z Káhiry. Zatímco mnoho vylepšení syntaxe/jazyka stále probíhá, to umožňuje zvyknout se na Káhiru 1.0 a vychutnat si aktualizace tak, jak přicházejí.

**Všimněte si, že psaní smluv StarkNet stále není podporováno.**Syntaxe StarkNet (proměnné pro ukládání / smlouvy o volání / události a další systémové hovory) bude přidána v nadcházejících týdnech.

### Příklady kódů

Pro ilustraci rozdílů mezi starou syntaxí a Káhirou 1. , rozhodli jsme se ukázat několik různých implementací/variant pro nalezení čísla n’th Fibonacci.

### Příklad I: Shoda výrazů

V Káhiře 1.0 můžete použít retenční[shodu](https://doc.rust-lang.org/rust-by-example/flow_control/match.html?highlight=match#match)výrazů. Už se nebudete obávat, pokud by jinak prohlášení, která mohou způsobit referenční odvolání!

![](/assets/code01.png)

### Příklad II: Druhy dat

Zatímco Káhira 0 spolupracovala s pijavci a ukazateli, v Káhiře 1.0 máme původní přístup ke komplexním datovým typům v jazyce. Níže můžete najít příklad, který generuje pole prvních n Fibonacci čísel.

![](/assets/code02.png)

Jak vidíte výše, místo abychom pracovali přímo s ukazateli paměti, používáme `pole::<felt>\` zadejte a \`array_append\`funkci.

### Příklad III: struktury & vlastnictví

Následující kód ilustruje použití konstrukcí v Káhiře 1.0.

![](/assets/code03.png)

> Následující odstavec je určen pro Rustaceany mezi publiky. Káhira 1.0 spravuje paměť podobným způsobem jako rust. Používá zejména pojmy[vlastnictví a půjčky](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html). Proto přístupem k členovi \`FibResult\` strukce (v tomto případě \`výsledek. alue\`), přesunuli jsme \`výsledek\`, což znamená, že pokud FibResult není autorizovatelný, nemůžeme k němu znovu přistupovat v \`result.index\`. Abychom to překonali, přidáváme atribut \`#\[derive(Copy)]\` typu \`FibResult\`. V budoucích verzích přidáme pro stavby automatickou dekonstrukci. To umožní přesunout vlastnictví jednoho člena, aniž by se dotkl ostatních členů (zejména výše uvedený kód by zkompiloval i v případě, že \`FibResult\` nemá atribut kopírování).

**Zejména všimněte si, že Káhira 1.0 zcela abstrahuje původní (žádný deterministický model jen pro čtení) paměťový model Káhiry.**

## Příklad IV: Rozšíření chyb

Následující kód počítá n’th Fibonacci číslo, ale na rozdíl od předchozích příkladů jsou všechny vstupy typu uint128. Všimněte si, že to řeší velkou bolest v Káhiře 0. Zde uint128 (a v budoucnu uint256) jsou rodné typy.

![](/assets/0_s8bhjf_ade3carmi.png)

Přidání dvou 128 bitových celých čísel může způsobit přetížení. Výše uvedený kód používá[možnost](https://doc.rust-lang.org/rust-by-example/std/option.html)a operátor[otazníku](https://doc.rust-lang.org/rust-by-example/std/result/question_mark.html)pro zvládnutí případu přetečení v jednom z mezilehlých přírůstků. Porovnejte to s[aktuální syntaxí](https://github.com/starkware-libs/cairo-lang/blob/9889fbd522edc5eff603356e1912e20642ae20af/src/starkware/cairo/common/uint256.cairo#L31)uint256, kde \`unit256_check\` musí být volána pro zaručení zvuku. Kromě toho v blízké budoucnosti přidáme pojem \`panic\` do jazyka (podobné[panické](https://doc.rust-lang.org/rust-by-example/std/panic.html)makro) a jednoduché chyby, jako je přídavné překrytí, budou automaticky nesmazatelné a propagované, což znamená, že nebudete muset používat \`Option\` nebo \`? ` při přidávání uintů.

## Vyzkoušejte to sami

Nyní můžete zkompilovat a spustit aktuálně podporované programy Káhira 1.0! Postupujte podle těchto[instrukcí](https://github.com/starkware-libs/cairo/tree/main/crates/cairo-lang-runner)jak použít \`cairo-run\` příkaz. Všimněte si, že pod holem se k provedení používá[VM Rust Cairo](https://github.com/lambdaclass/cairo-rs), vyvinutý[Lambdaclass](https://lambdaclass.com/).

Další příklady, které vám pomohou začít[zde](https://github.com/starkware-libs/cairo2/tree/main/examples). Všimněte si, že se jedná pouze o první pohled do vývoje kompilátoru; v nadcházejících týdnech zdokonalíme CLI vedle kompilátoru.

## Budoucí plány

Soustředění první verze Compiler, která je plánována na počátku Q1, podporuje všechny existující funkce StarkNet v Káhiře 1.0. Kromě toho pracujeme na rozšíření schopností Káhiry 1.0. V nadcházejících týdnech můžete očekávat:

* Funkce StarkNet – psaní inteligentních smluv a používání systémových hovorů.
* Cykly
* Nové funkce knihovny
* Vylepšený jazykový server
* Domácí pojem StarkNet plyn

Ujistěte se, že zůstanete naladěni a sledujte postup kompilátoru!