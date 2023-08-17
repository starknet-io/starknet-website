### TL;DR

* Recursive Proving jest żywy na platformie Mainnet, skalowanie aplikacji StarkEx oraz StarkNet z jednym dowodem
* Skala ta przyczynia się do zwiększenia skali i przynosi korzyści pod względem kosztów, i opóźnienie (rzadkie i ekscytujące występowanie skali i opóźnień w ruchu równoległym i niebędące kompromisem)
* Ustawia etap dla L3 i innych korzyści, przeczytaj post na blogu[Recursive Proving](https://medium.com/@starkware/recursive-starks-78f8dd401025). To fajne rzeczy 😉

### Rozwijanie!

Obecnie wytwarzane są dowody rekurencyjne – oparte na ogólnych obliczeniach Kairo. Oznacza to znaczne zwiększenie mocy skalowania L2 za pomocą STARK. Dzięki jednemu dowodowi szybko zwiększy się liczba transakcji, które można zapisać do Ethereum.

Jak dotąd, skalowanie STARK działało przez "wciąganie w górę" dziesiątek lub nawet setki tysięcy transakcji na jeden dowód, który został napisany do Ethereum. W przypadku rekurencji wiele takich dowodów może być „wrzuconych” do jednego dowodu.

Ta metoda jest obecnie produkowana dla wielu aplikacji Kairo: aplikacji działających na StarkEx, Silnik skalowania SaaS StarkWare oraz StarkNet, bezuprawnieniowej.

### Dotychczasowa historia

Od czasu pierwszego dowodu w sprawie Mainnet, w marcu 2020 r., następujące zmiany ukształtowały sposób stosowania STARK.

### Skalowanie oparte na STARK

W czerwcu 2020 r. pierwsze rozwiązanie skalowania oparte na STARK —[StarkEx](https://youtu.be/P-qoPVoneQA)— zostało wdrożone na Ethereum Mainnet. StarkEx ma Provera, który wykonuje duże obliczenia poza łańcuchem i wytwarza odporny na STARK dla ich poprawności, oraz weryfikatora, który weryfikuje ten dowód w łańcuchu. Ograniczenia związane z pierwszym wdrożeniem były „ręcznie napisane” przez inżynierów StarkWare, co znacznie ogranicza prędkość funkcjonalną StarkEx. Wyciągnęliśmy wniosek, że potrzebny jest język programowania służący do udowodnienia ogólnych obliczeń – Kairo.

#### Cairo

Latem 2020 r. Kairz zrobił[pierwszy wygląd na Ethereum Mainnet](https://medium.com/starkware/hello-cairo-3cb43b13b209). Kair oznacza CPU Algebraic Intermediate Reprezentacja Algebraic (AIR) i zawiera pojedynczą AIR, która weryfikuje zestaw instrukcji tego »CPU«. Otwiera ona możliwości kodowania dowodów dla bardziej złożonej logiki biznesowej, dla samowolnych zestawień obliczeniowych i do tego celu w szybszy i bezpieczniejszy sposób. Program kairski może udowodnić wykonanie logiki pojedynczego aplikacji. Ale program Kairski może być również konkatenacją wielu takich aplikacji – SHARP.

#### SKARP

SHARP – SHARed Prover – pobiera transakcje z kilku oddzielnych aplikacji i dowodzi ich wszystkich w jednym dowodzie STARK. Aplikacje łączą swoje partie transakcji, wypełniając pojemność odpornych na STARK szybciej. Transakcje są przetwarzane w podwyższonym tempie i opóźnieniu. Następna granica: Rekursywne Dowody ale nie tylko dla niektórych ciężko kodowanych logik, ale raczej dla**ogólnych obliczeń**.

Aby zrozumieć w pełni korzyści płynące z Recursive Proving warto nieco lepiej zrozumieć, jak (nieskrępowany) dowód był dotychczas wykonywany przez SHARP. Rysunek 1 przedstawia typowy przepływ nierekursywny:

![Rysunek 1: Typowy przepływ nierekurencyjny](/assets/recursive_starks_01.png "Rysunek 1: Typowy przepływ nierekurencyjny")

Tutaj wyciągi przychodzą z czasem. Po osiągnięciu określonego progu mocy (lub czasu), powstaje duże połączone oświadczenie (alias Train). To połączone stwierdzenie zostało udowodnione dopiero po otrzymaniu wszystkich oświadczeń indywidualnych. Dowód ten potrzebuje dużo czasu na udowodnienie (mniej więcej sumy czasu potrzebnego na udowodnienie każdego oświadczenia indywidualnie).

Udowodnienie bardzo dużych stwierdzeń jest ostatecznie ograniczone dostępnymi zasobami obliczeniowymi, takimi jak pamięć. Przed nawrotem było to skutecznie ograniczającą barierę skalowalności powodowaną przez STARK.

### Czym jest Recursive Proving?

Z dowodami STARK czas potrzebny na udowodnienie stwierdzenia jest w przybliżeniu liniowy i czas potrzebny na wykonanie tego oświadczenia. Dodatkowo, jeśli udowodnienie oświadczenia wymaga czasu T, weryfikacja dowodu wymaga w przybliżeniu czasu log(T), który zazwyczaj nazywany jest „kompresją logarytmiczną”. Innymi słowy, w przypadku STARK spędzasz znacznie mniej czasu na weryfikacji wyciągu, niż na jego obliczeniu.

[Kair](https://starkware.co/cairo/)pozwala na wyrażanie ogólnych wyrażeń obliczeniowych, które można udowodnić za pomocą dowodów STARK i zweryfikować przez odpowiednich weryfikatorów STARK.

Tutaj właśnie okazja do[recursion](https://en.wikipedia.org/wiki/Recursion)rozwija się w: W ten sam sposób, w jaki piszemy program Kaira, który dowodzi poprawności tysięcy transakcji, możemy również napisać program Kaira, który weryfikuje wiele dowodów STARK. Możemy wygenerować jeden dowód potwierdzający ważność wielokrotnych dowodów znajdujących się na wcześniejszych etapach łańcucha dostaw. To właśnie nazywamy Recursive Proving.

Ze względu na kompresję logarytmiczną i mniej więcej liniowy czas udowodnienia, udowodnienie weryfikacji dowodu STARK wymaga stosunkowo krótkiego czasu (oczekuje się, że w niedalekiej przyszłości będzie to zaledwie kilka minut).

Przy wdrażaniu Rekursu, SHARP może udowodnić oświadczenia po ich przybyciu. Ich dowody można połączyć w rekurencyjne dowody w różnych wzorcach, dopóki w określonym momencie otrzymany dowód jest przedkładany weryfikatorowi łańcucha dostaw. Typowy wzór przedstawiono na rysunku 2:

![Rysunek 2: Typowy przepływ proksusowy.](/assets/recursive_starks_02.png "Rysunek 2: Typowy przepływ proksusowy.")

### Natychmiastowe korzyści związane z profilowaniem rekursywnym

#### Zmniejszony koszt w łańcuchu

Z nietoperza, osiągamy kompresję wielu dowodów w jeden, co pociąga za sobą niższe koszty weryfikacji w łańcuchu na transakcję (przy czym każde oświadczenie może zawierać wiele transakcji).

Z rekurencją barierę zasobów obliczeniowych (np. Pamięć) eliminuje się ograniczony rozmiar dowodów do tej pory, ponieważ każda deklaracja o ograniczonym rozmiarze może być udowodniona oddzielnie. W związku z tym w przypadku korzystania z rekursji efektywny rozmiar pociągu jest prawie nieograniczony, a koszt przypadający na transakcję można zmniejszyć o kolejność wielkości.

W praktyce obniżka zależy od dopuszczalnego opóźnienia (i kursu, w jakim dochodzi do transakcji). Ponadto w związku z tym, że każdemu dowodowi towarzyszą również dane wyjściowe, takie jak dane on-chain, istnieją ograniczenia ilości danych, które mogą być napisane w łańcuchu wraz z jednym dowodem. Niemniej jednak zmniejszenie kosztów o rząd wielkości, a nawet lepsze jest osiągalne w stopniu potrójnym.

#### Zmniejszone opóźnienie

Wzorzec sprawdzania rekursywnego zmniejsza opóźnienie udowodnienia dużych pociągów instrukcji. Wynika to z dwóch czynników:

1. Przychodzące wyrażenia mogą być sprawdzone**równolegle**(w przeciwieństwie do udowodnienia niezwykle dużego połączonego wyrażenia).
2. Nie ma potrzeby czekania na ostatnią instrukcję w pociągu, aby zacząć zadawać. Dowody można raczej połączyć z nowymi oświadczeniami. Oznacza to, że opóźnienie ostatniego oświadczenia dołączającego do pociągu, jest to mniej więcej czas potrzebny na udowodnienie, że bardzo ostatnie oświadczenie oraz czas potrzebny na udowodnienie rekurencyjnego oświadczenia weryfikatora (co potwierdza wszystkie oświadczenia, które już „onboarde” tego konkretnego pociągu).

Aktywnie opracowujemy i optymalizujemy opóźnienie udowodnienia rekurencyjnego oświadczenia weryfikatora. Oczekujemy, że w ciągu kilku miesięcy osiągnie to kolejność na kilka minut. W związku z tym bardzo wydajny SHARP może oferować opóźnienia od kilku minut do kilku godzin, w zależności od kompromisu w stosunku do kosztu łańcucha na transakcję. Stanowi to znaczącą poprawę w stosunku do opóźnień SHARP.

#### Ułatwienie L3

Opracowanie instrukcji weryfikatora rekursywnego w Kairze otwiera również możliwość przedstawienia dowodów StarkNet, ponieważ oświadczenie to może zostać wypieknięte w inteligentny kontrakt StarkNet. Pozwala to na budowę[wdrożeń L3 ponad publiczną sieć StarkNet](https://medium.com/starkware/fractal-scaling-from-l2-to-l3-7fe238ecfb4f)(sieć L2).

Wzór rekursywny stosuje się również do agregacji dowodów z L3, które należy zweryfikować za pomocą pojedynczego dowodu na L2. Dlatego też osiąga się tam również nadmierne skalowanie.

### Więcej korzyści subtelnych

#### Rekursja wniosku

Rekursja otwiera jeszcze więcej możliwości dla platform i aplikacji, które pragną zwiększyć swoje koszty i wydajność.

Każdy dowód STARK poświadcza ważność oświadczenia stosowanego do niektórych danych wejściowych znanych jako »publiczne wejście« (lub »dane wyjściowe programu« w terminach Kaira). Koncepcyjnie, STARK kompresuje dwa dowody z*dwoma*wejściami w*jeden*dowód dwoma wejściami. Innymi słowy, podczas gdy liczba dowodów jest zmniejszona, liczba danych wejściowych jest utrzymywana na stałym poziomie. Następnie dane wejściowe są zazwyczaj wykorzystywane przez aplikację w celu aktualizacji niektórych stanów na L1 (e. . aby zaktualizować dane roota stanu lub wykonać wycofanie na łańcuch).

Jeśli polecenie rekurencyjne może być*o aplikacjach*, np. rozpoznaje semantykę samego wniosku, może kompresować dwa dowody w jeden*oraz*łączyć dwa wejścia w jeden. Wynikające z tego oświadczenie potwierdza ważność kombinacji danych wejściowych na podstawie wniosku semantyki, W związku z tym nazwa „Recursion Applicative recursion (jak na przykład rysunek 3).

![Rysunek 3: Przykładowy przykład reakcji](/assets/recursive_starks_03.png "Rysunek 3: Przykładowy przykład reakcji")

W tym przypadku oświadczenie 1 potwierdza aktualizację stanu od A do B i oświadczenia 2 na kolejne aktualizacje od B do C. Dowody oświadczenia 1 i oświadczenia 2 mogą zostać połączone w trzecie zeznanie, potwierdzając bezpośrednią aktualizację z A do C. Stosując podobną logikę rekurencyjnie, można bardzo znacznie obniżyć koszty aktualizacji stanu, aż do osiągnięcia wymogu ostatecznego opóźnienia.

Innym ważnym przykładem wnioskującej rekursji jest kompresja danych rollup z wielu dowodów. Na przykład dla Rollup Ważności, taki jak StarkNet, w celu zapewnienia dostępności danych uwzględnia się również wszystkie aktualizacje dotyczące przechowywania danych na L2. Nie ma jednak potrzeby wysyłania wielokrotnych aktualizacji dla tego samego elementu pamięci, ponieważ tylko wartość końcowa transakcji potwierdzona zweryfikowanym dowodem jest wymagana dla dostępności danych. Ta optymalizacja jest już wykonana w*pojedynczym*bloku StarkNet. Jednakże, poprzez generowanie dowodu na blok, Aplikacyjna Recursion może kompresować te dane rolowania pomiędzy*wieloma*blokami L2. Może to skutkować znacznym zmniejszeniem kosztów, umożliwiając skrócenie odstępów blokowych na L2 bez poświęcania skali aktualizacji L1.

Notacja wartościowa: Rekursja wzorcowa może być połączona z rekurencją zastosowania-agnostyczną, jak przedstawiono wcześniej. Te dwie optymalizacje są niezależne.

#### Zmniejszona złożoność weryfikatora w łańcuchu

Złożoność weryfikatora STARK zależy od rodzaju oświadczeń, które ma zweryfikować. W szczególności w przypadku instrukcji z kaira złożoność weryfikatora zależy od konkretnych elementów dozwolonych w języku Kaira, a dokładniej obsługiwane wbudowane (jeśli używamy metafazy CPU dla Kaira, następnie wbudowane układy są odpowiednikiem mikroobwodów w procesorze CPU: obliczenia wykonywane tak często, że wymagają one własnych zoptymalizowanych obliczeniów).

Język Kairu w dalszym ciągu ewoluuje i oferuje coraz bardziej użyteczne wbudowane elementy. Z drugiej strony weryfikator rekursywny wymaga tylko użycia małego podzbioru tych wbudowanych elementów. Dlatego też rekurencyjny SHARP może z powodzeniem poprzeć każde oświadczenie w Kairze poprzez wspieranie pełnego języka u rekurencyjnych weryfikatorów. W szczególności weryfikator L1 Solidity musi jedynie weryfikować dowody rekurencyjne, i dlatego można ograniczyć się do bardziej stabilnego podzbioru języka Kaira: Weryfikator L1 nie musi nadążać za najnowszymi i największymi wbudowanymi językami. Innymi słowy, weryfikacja ciągle zmieniających się złożonych stwierdzeń zostaje przeniesiona do L2, pozostawiając weryfikator L1 w celu weryfikacji prostszych i bardziej stabilnych oświadczeń.

#### Zmniejszony ślad obliczeniowy

Przed rekurencją, możliwość włączenia wielu deklaracji do jednego dowodu była ograniczona maksymalnym rozmiarem oświadczenia, które można udowodnić na dostępnych instancjach obliczeniowych (oraz czasem potrzebnym do wygenerowania takich dowodów).

W związku z rekurencją nie ma już potrzeby udowodnienia tak bardzo dużych stwierdzeń. W rezultacie mniej, można użyć mniej kosztownych i bardziej dostępnych instancji obliczeniowych (chociaż więcej z nich może być potrzebnych niż z dużymi monolitycznymi przekątnymi). Pozwala to na rozmieszczenie potworów w bardziej fizycznym i wirtualnym otoczeniu niż to wcześniej możliwe.

### Summary

Rekursywne dowody obliczeń ogólnych służą obecnie wielu systemom produkcji, w tym StarkNet, w Mainnet Ethereum.

Korzyści płynące z rekursji będą realizowane stopniowo, ponieważ nadal pozwalają na wprowadzenie nowych ulepszeń, i wkrótce doprowadzi do obniżenia opłat za gaz na dużą skalę, a także poprawi opóźnienie poprzez uwolnienie potencjału równoległości.

Przyniesie to znaczne korzyści w zakresie kosztów i opóźnień wraz z nowymi możliwościami, takimi jak L3 i rekurencja aplikacji. Trwa dalsza optymalizacja weryfikatora rekursywnego i oczekuje się, że w miarę upływu czasu zapewniona zostanie jeszcze lepsza wydajność i korzyści z kosztów.



**Gidi Kaempfer**, Head of Core Engineering, StarkWare