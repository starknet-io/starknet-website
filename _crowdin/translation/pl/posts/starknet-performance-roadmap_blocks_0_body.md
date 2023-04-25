### TL;DR

* Przepusty ważnościowe nie są ograniczone pod względem przepustowości w taki sam sposób jak L1. Prowadzi to do potencjalnie znacznie wyższego TPS w rolkach do ważności L2.
* Plan działania StarkNet dotyczy kluczowego elementu systemu: sekwencera.
* Przedstawiamy tutaj mapę drogową dotyczącą poprawy wydajności:\
  — Sequencer parallelization\
  — Nowa implementacja rust dla Kaira VM\
  — Sequencer re-implementation in rust\
* Dowody, że przetestowani w bitwie nie są wąskimi gardłami i potrafią radzić sobie o wiele więcej niż teraz!

### Wprowadzenie

StarkNet uruchomiony na Mainnet prawie rok temu. Zaczęliśmy budować StarkNet, koncentrując się na funkcjonalności. Teraz koncentrujemy się na poprawie wyników poprzez szereg kroków, które pomogą wzmocnić doświadczenia StarkNet.

W tym stanowisku wyjaśniamy, dlaczego istnieje szeroki wachlarz optymalizacji, które mają zastosowanie tylko w rolkach do ważności, i podzielamy nasz plan wdrożenia tych działań w sprawie StarkNet. Niektóre z tych działań zostały już wdrożone w StarkNet Alpha 0.10.2, która została wydana w Testnet 16 i wczoraj w Mainnet. Zanim jednak będziemy dyskutować nad rozwiązaniami, dokonajmy przeglądu ograniczeń i ich przyczyn.

### Ograniczenia bloku: rolki ważności w porównaniu z L1

Potencjalnym podejściem do zwiększania skalowalności łańcucha blokowego i zwiększania TPS byłoby zniesienie ograniczeń blokowych (pod względem gazu/rozmiaru) przy zachowaniu stałej czasowej bloku. Wymagałoby to większego wysiłku ze strony producentów bloków (podmioty zatwierdzające na L1, sekwencyjne na L2) i w związku z tym wzywa do skuteczniejszego wdrożenia tych komponentów. W tym celu teraz skupiamy się na optymalizacji sekwencera StarkNet, którą opisujemy bardziej szczegółowo w kolejnych sekcjach.

Pojawia się tutaj pytanie naturalne. Dlaczego optymalizacje sekwencyjne są ograniczone do sprawdzania poprawności, to znaczy, dlaczego nie możemy wprowadzić tych samych ulepszeń w odniesieniu do L1 i całkowicie uniknąć złożoności poprawek? W następnej części twierdzimy, że istnieje zasadnicza różnica między tymi dwiema kwestiami, umożliwienie szerokiego zakresu optymalizacji L2, które nie mają zastosowania do L1.

### Dlaczego przepustowość L1 jest ograniczona?

Niestety, zniesienie ograniczeń bloku L1 cierpi na poważną pułapkę. Zwiększając tempo rozwoju łańcucha, zwiększamy również zapotrzebowanie ze strony pełnych węzłów, którzy próbują dotrzymać kroku najnowszemu państwu. Ponieważ wszystkie węzły L1 muszą ponownie wykonać całą historię, wysoki wzrost wielkości bloku (pod względem gazu) nakłada na niego znaczne obciążenie, znowu prowadząc do likwidacji słabszych maszyn z systemu i pozostawiając możliwość obsługi pełnych węzłów tylko dla wystarczająco dużych jednostek. W rezultacie użytkownicy nie będą mogli samodzielnie weryfikować państwa i uczestniczyć w sieci bez zaufania.

Pozostawia nam to zrozumienie, że przepustowość L1 powinna być ograniczona, aby utrzymać prawdziwie zdecentralizowany i bezpieczny system.

### Dlaczego te same bariery nie mają wpływu na sprawdzanie zasadności?

**Tylko rozważając perspektywę całego węzła widzimy rzeczywistą moc oferowaną przez kropki ważności.**Pełny węzeł L1 musi ponownie wykonać całą historię, aby zapewnić poprawność bieżącego stanu. Węzły StarkNet muszą tylko weryfikować dowody STARK, a weryfikacja ta wymaga wykładniczo mniejszej ilości zasobów obliczeniowych. W szczególności synchronizacja od podstaw nie musi wiązać się z wykonaniem; węzeł może odbierać zrzut bieżącego stanu od swoich rówieśników i weryfikować tylko poprzez dowód STARK, że ten stan jest prawidłowy. Pozwala nam to zwiększyć przepustowość sieci bez zwiększania wymagań z całego węzła.

W związku z tym wnioskujemy, że sekwencerz L2 podlega całemu zakresowi optymalizacji, które nie są możliwe w przypadku L1.

### Plan działania na następny rok

W kolejnych sekcjach omawiamy, które z nich są obecnie planowane dla sekwenatora StarkNet.

### Równoległość do sekwentora

Pierwszym krokiem na naszej mapie drogowej było wprowadzenie podobieństwa do realizacji transakcji. Zostało to wprowadzone do StarkNet alfa 0.10.2, który został wydany wczoraj w Mainnet. Teraz bierzemy pod uwagę podobieństwo (jest to część półtechniczna, aby kontynuować realizację planu działania, przejść do następnej sekcji).

Co więc oznacza „paralelizacja transakcji”? Wykonanie równoległego bloku transakcji jest niemożliwe, ponieważ różne transakcje mogą być zależne. Jest to ilustracja poniższego przykładu. Rozważ blok z trzema transakcjami tego samego użytkownika:

* Transakcja A: swap USDC na ETH
* Transakcja B: zapłać ETH za NFT
* Transakcja C: swap USDT dla BTC

Oczywiste jest, że Tx A musi mieć miejsce przed Tx B, ale Tx C jest całkowicie niezależny od obu i może być wykonany równolegle. Jeśli każda transakcja wymaga 1 sekundy do wykonania, wtedy czas produkcji bloku może zostać skrócony z 3 sekund do 2 sekund poprzez wprowadzenie równoległości.

Sednem problemu jest to, że nie znamy z góry zależności od transakcji. W praktyce tylko wtedy, gdy realizujemy transakcję B z naszego przykładu, widzimy, że opiera się ona na zmianach dokonanych przez transakcję A. Bardziej formalnie zależność wynika z faktu, że transakcja B odczytuje z ogniw magazynowych, do których napisano transakcję A. Możemy myśleć o transakcjach jako o tworzeniu wykresu zależności, gdzie istnieje krawędź transakcji A do transakcji B iff A zapisuje do komórki magazynującej, która jest odczytywana przez B, i w związku z tym musi zostać wykonany przed B. Poniższy rysunek pokazuje przykład takiego wykresu zależności:

![](https://miro.medium.com/max/641/0*I-qGgxdJJmqmgZWM)

W powyższym przykładzie każda kolumna może być wykonana równolegle, i jest to optymalne rozwiązanie (choć naiwnie realizowalibyśmy transakcje 1–9 kolejno).

Aby przezwyciężyć fakt, że wykres zależności nie jest znany z wyprzedzeniem, wprowadzimy***optymistyczne podobieństwo***, w duchu[BLOCK-STM](https://malkhi.com/posts/2022/04/block-stm/)opracowanego przez Aptos Labs, dla sekwencera StarkNet. W ramach tego paradygmatu optymistycznie staramy się prowadzić transakcje równolegle i ponownie wykonywać po znalezieniu kolizji. Na przykład możemy wykonać transakcje 1–4 z cyfry 1 równolegle, aby dowiedzieć się, że Tx4 zależy od Tx1. W związku z tym jego egzekucja była bezużyteczna (prowadziliśmy ją w stosunku do tego samego stanu, przeciwko któremu pracowaliśmy Tx1, podczas gdy powinniśmy byli przeciwstawiać się państwu wynikającemu z zastosowania Tx1). W takim przypadku ponownie wykonamy Tx4.

Zauważ, że możemy dodać wiele optymalizacji do optymistycznych równoległości. Na przykład, zamiast naiwnie czekać na zakończenie każdego egzekucji, możemy przerwać egzekucję w momencie, gdy znajdziemy zależność, która ją unieważnia.

Innym przykładem jest optymalizacja wyboru transakcji do ponownego wykonania. Załóżmy, że blok składający się ze wszystkich transakcji z cyfry 1 jest wprowadzany do sekwenatora z pięcioma rdzeni procesora. Najpierw próbujemy wykonać transakcje 1–5 równolegle. Jeśli kolejność ukończenia wynosiła Tx2, Tx3, Tx4, Tx1 i ostatecznie Tx5, wtedy znajdziemy zależność Tx1→Tx4 dopiero po wykonaniu Tx4 - wskazując, że powinna być ponownie wykonana. Możemy również chcieć ponownie wykonać Tx5, ponieważ może zachowywać się inaczej w związku z nową egzekucją Tx4. Jednakże zamiast powtórzyć wszystkie transakcje po obecnie unieważnionym Tx4, możemy przejść od wykresu zależności zbudowanego z transakcji, których wykonanie już się zakończyło i ponownie wykonać tylko transakcje, które zależą od Tx4.

### Nowa implementacja Rust dla Cairo-VM

Inteligentne kontrakty w StarkNet są napisane w Kairze i są realizowane wewnątrz Cairo-VM, która zawiera specyfikację[Papier Kairowy](https://eprint.iacr.org/2021/1063.pdf). Obecnie sekwencerz używa implementacji[pythona](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/cairo/lang/vm)Cairo-VM. Aby zoptymalizować skuteczność wdrażania VM, podjęliśmy starania o ponowne zapisanie wirtualnego pieniądza elektronicznego. Dzięki wspaniałej pracy[Lambdaclass](https://lambdaclass.com/), który jest obecnie bezcennym zespołem w ekosystemie StarkNet, to wysiłek wkrótce zacznie przynosić efekty.

Wdrażanie rust VM,[kairo-rs](https://github.com/lambdaclass/cairo-rs), może teraz wykonać natywny kod Kairo. Kolejnym krokiem jest obsługa wykonania inteligentnych kontraktów i integracji z sekwenatorem pytonicznym. Po zintegrowaniu z kairorami oczekuje się, że wyniki sekwencyjne ulegną znaczącej poprawie.

### Ponowne wdrożenie sekwencji w Rust

Nasze przejście z Pythona na rust w celu poprawy wydajności nie jest ograniczone do VM Kairy. Oprócz wspomnianych powyżej usprawnień, planujemy przepisać sekwencera od podstaw w rdzeniu. Oprócz korzyści wewnętrznych Rusta stanowi to okazję do innych optymalizacji sekwencyjnych. Wymieniając parę, możemy cieszyć się korzyściami kairorów bez nadrzędnej komunikacji python-rust i możemy całkowicie przeprojektować sposób przechowywania i dostępu do stanu (który dziś opiera się na strukturze[Patricia-Trie](https://docs.starknet.io/documentation/develop/State/starknet-state/#state_commitment)).

### A co z przerobieniem?

Przez cały ten post nie wspominaliśmy być może najsłynniejszego elementu poprawności - provera. Można sobie wyobrazić, że będąc prawdopodobnie najbardziej wyrafinowanym składnikiem architektury, powinna to być wąskie gardło, a tym samym skupiać się na optymalizacji. Co ciekawe, to bardziej „standardowe” komponenty są obecnie wąskim gardłem StarkNet. Dzisiaj, szczególnie z[rekurencyjnymi dowodami](https://medium.com/starkware/recursive-starks-78f8dd401025), możemy dopasować do dowodu o wiele więcej transakcji niż obecny ruch na Testnet/Mainnet. W rzeczywistości bloki StarkNet są dziś sprawdzane równolegle z transakcjami StarkEx, gdzie te ostatnie mogą czasem spędzić kilkaset tysięcy minut NFT.

### Summary

Równolegle z poprawą TPS w nadchodzących wersjach StarkNet.