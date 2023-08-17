### TL;DR

* **Kair 1.0 jest otwartym oprogramowaniem! Jest to tylko pierwszy krok w kierunku open-sourcing StarkNet.**
* Teraz przedstawiamy[pierwszy raz](https://github.com/starkware-libs/cairo)kompilator Kaira 1.0. Teraz możesz zacząć eksperymentować z podstawowym kodem 1.0
* Kair 1.0 w rdzeniu jest bardzo podobny do Rust
* Uważaj to za pierwszy gust, a nie za wydanie. Trwają prace nad większą poprawą. Pierwsza wersja kompilatora jest planowana na początku pierwszego kwartału przyszłego roku.
* Kair 1.0 nie jest jeszcze obsługiwany na StarkNet. Będzie on wspierany w StarkNet w przyszłym roku.

### Wprowadzenie

W 2020 roku wydaliśmy[Kair](https://eprint.iacr.org/2021/1063.pdf), kompletny język programowania umożliwiający weryfikowalne obliczenia. Kair zaczął być językiem zgromadzenia i stopniowo stał się bardziej wyrazisty. Dwa miesiące temu ogłosiliśmy[Kair 1.0](https://medium.com/starkware/cairo-1-0-aa96eefb19a0), który zajmuje się niektórymi ważnymi problemami w obecnej sytuacji:

* Podczas gdy składnia Kaira od czasu jej powstania uległa znaczącej poprawie, doświadczenie programistów zawsze może się poprawić. Kair 1.0 jest w pełni zainspirowanym przez rusta językiem, co sprawia, że pisanie tej samej logiki jest łatwiejsze i mniej podatne na błędy.
* Istniejący kompilator jest rozwijany w tym samym repozytorium co sam StarkNet, co utrudnia śledzenie zmian językowych. Kompilator Kaira 1.0 jest napisany z ziemi, umożliwiając szybszy rozwój funkcji i większe zaangażowanie społeczności.
* Każde obliczenie jest teraz łatwe. Obecnie program Cairo może się nie udać z konkretnymi danymi wejściowymi (np. osiągając instrukcję \`assert 1=2\` w niektórych gałęziach obliczeniowych), renderowanie obliczeń. W przypadku Kaira 1.0, programy są w każdej możliwej gałęzie. Jest to szczególnie ważne dla ochrony DOS i odporności na cenzurę w StarkNet.

Dziś jesteśmy pierwszym etapem w osiąganiu powyższych celów, ponieważ przechodzimy rozwój do publicznego repozytorium, i**open source Kair 1. !**Deweloperzy mogą teraz po raz pierwszy skompilować i wykonać proste programy Kaira 1.0. Pozwala to programistom rozpocząć eksperymenty z Kairem 1. i stopniowo przyzwyczaić się do nowych funkcji, nawet jeśli na tym etapie nie mogą jeszcze wdrożyć ich na StarkNet.

### Aktualne możliwości

Obecnie możesz kompilować i wykonywać podstawowe programy natywnego Kaira. Podczas gdy wiele ulepszeń składni/języka jest nadal w toku, pozwala to na przyzwyczaić się do Kairu 1.0 i korzystać z ulepszeń w miarę potrzeb.

**Zauważ, że zapis kontraktów StarkNet jest nadal nieobsługiwany.**Składnia StarkNet (zmienne magazynowe / kontrakty wywoławcze / wydarzenia i inne połączenia systemowe) zostanie dodana w nadchodzących tygodniach.

### Przykłady kodu

Aby zilustrować różnice pomiędzy starą składnią a Kairem 1. , zdecydowaliśmy się pokazać kilka różnych wdrożeń/smaków znalezienia liczby n'th Fibonacci.

### Przykład I: Dopasowanie wyrażeń

W Kairze 1.0, możesz użyć wyrażeń[takich, jak rust-mecz](https://doc.rust-lang.org/rust-by-example/flow_control/match.html?highlight=match#match). Już nie obawiasz się, że polecenia, które mogą spowodować odwołanie referencji!

![](/assets/code01.png)

### Przykład II: Typy danych

Podczas gdy Kair 0 pracował z filtrem i wskaźnikami, w Kairze 1.0 mamy natywny dostęp do złożonych typów danych w języku. Poniżej znajdziesz przykład, który generuje tablicę pierwszych cyfr n Fibonacci.

![](/assets/code02.png)

Jak widzisz powyżej, zamiast pracować bezpośrednio ze wskaźnikami pamięci, używamy `Array::<felt>\` typ i funkcja \`array_append\`.

### Przykład III: tworzy & własność

Poniższy kod ilustruje użycie struktów w Kairze 1.0.

![](/assets/code03.png)

> Poniższy punkt przeznaczony jest dla Rustaceńczyków wśród odbiorców. Kair 1.0 zarządza pamięcią w sposób podobny do rusta. W szczególności wykorzystuje pojęcia[własności i pożyczki](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html). Zatem, uzyskując dostęp do użytkownika \`FibResult\` (w tym przypadku \`result. alue\`), przenieśliśmy \`result\`, co oznacza, że jeżeli FibResult nie będzie kopiowalny, nie będziemy mogli uzyskać dostępu do niego ponownie w \`result.index\`. Aby to przezwyciężyć, dodajemy atrybut \`#\[derive(Copy)]\` typu \`FibResult\`. W przyszłych wersjach dodamy auto dekonstrukcję dla instrukcji. Pozwoli to na przeniesienie własności jednego członka bez dotykania innych (w szczególności: powyższy kod skompilowałby nawet jeśli \`FibResult\` nie miał atrybutu kopiowania).

**W szczególności należy zauważyć, że Kaira 1.0 całkowicie oddaje oryginalny (tylko do odczytu – nie tylko deterministyczny) model pamięci Kairo.**

## Przykład IV: propagacja błędu

Poniższy kod oblicza liczbę n’th Fibonacci, ale w przeciwieństwie do poprzednich przykładów, wszystkie dane wejściowe są typu uint128. Należy zwrócić uwagę, że to rozwiązuje główny punkt bólu podczas zabiegu chirurgicznego w Kairze 0. Tutaj uint128 (i w przyszłości uint256) są rodzimymi typami.

![](/assets/0_s8bhjf_ade3carmi.png)

Dodanie dwóch 128 bitowych liczb całkowitych może spowodować przewrócenie. Powyższy kod używa[Opcja enum](https://doc.rust-lang.org/rust-by-example/std/option.html)i[Opcja znaku zapytania](https://doc.rust-lang.org/rust-by-example/std/result/question_mark.html)do obsługi przypadku przepełnienia w jednym z dodatków pośrednich. Porównaj to do[bieżącej składni dodawania](https://github.com/starkware-libs/cairo-lang/blob/9889fbd522edc5eff603356e1912e20642ae20af/src/starkware/cairo/common/uint256.cairo#L31)uint256, gdzie funkcja \`unit256_check\` musiała być wywołana, aby zagwarantować dźwięk. Ponadto w najbliższej przyszłości dodamy pojęcie \`panic\` do języka (podobne do[panic](https://doc.rust-lang.org/rust-by-example/std/panic.html)makro w rust), i proste błędy, takie jak dodawanie nadmiaru będą niezapłacalne i rozpowszechniane automatycznie, co oznacza, że nie będziesz musiał używać \`Opcja\` lub \`? ` podczas dodawania uintów.

## Wypróbuj samodzielnie

Możesz teraz skompilować i uruchomić aktualnie obsługiwane programy Cairo 1.0! Postępuj zgodnie z tymi[instrukcjami](https://github.com/starkware-libs/cairo/tree/main/crates/cairo-lang-runner)jak używać polecenia \`cairo-run\`. Zauważ, że pod kapturkiem do wykonania użyto[Rust Cair VM](https://github.com/lambdaclass/cairo-rs), opracowany przez[Lambdaclass](https://lambdaclass.com/).

Więcej przykładów pomoże Ci rozpocząć[tutaj](https://github.com/starkware-libs/cairo2/tree/main/examples). Zauważ, że jest to tylko pierwszy element rozwoju kompilatora; w nadchodzących tygodniach udoskonalimy CLI wraz z kompilatorem.

## Przyszłe plany

Celem pierwszej wersji Compilera, która jest planowana na wczesny kwartał 1, jest wspieranie wszystkich istniejących funkcji StarkNet w Kairze 1.0. Ponadto pracujemy nad rozszerzeniem zdolności kompilatora Kaira 1.0. W nadchodzących tygodniach można się spodziewać:

* Zdolności StarkNet – tworzenie inteligentnych umów i korzystanie z połączeń systemowych.
* Pętle
* Nowe funkcje biblioteki
* Ulepszony serwer językowy
* Natywne pojęcie gazu StarkNet

Upewnij się, że jesteś czujny i śledzisz postęp kompilatora!