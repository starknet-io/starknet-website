## TL;DR

* Starknet alfa v0.11.0 jest wyłączony i żyje na serwerze Testnet
* Teraz możesz wdrożyć i współpracować z kontraktami z Cairo 1.0 na Starknet Testnet!
* Obliczanie na Starknet jest 5 razy tańsze!
* Po raz pierwszy aktualizacja Mainnet do Starknet alfa v0.11.0 zostanie poddana pod głosowanie w sprawie zarządzania
* To oznacza początek okresu przejściowego przed[Regenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)
* Wdrożenie Kairu 1. kontrakty na Mainnet będą włączone dopiero po kilku tygodniach pracy na Testnet, gdy zapewnimy sprawne funkcjonowanie nowego systemu.

## Wprowadzanie

Jesteśmy podekscytowani, aby ogłosić, że bardzo oczekiwany starknet alfa v0.11.0 jest żywy w Testnet! Dlaczego jest to duży krok dla Starknet? W Starknet v0.11.0 możesz zadeklarować, wdrożyć i uruchomić[Kair 1.0](https://medium.com/starkware/cairo-1-0-is-here-7e1ac8377038)inteligentnych kontraktów. Wprowadzamy również nowe wezwanie systemowe, które umożliwi sprawne przejście istniejących umów do Kairu w realizację 1.0.

Kair 1.0 ulepsza Starknet pod dwoma różnymi względami. Po pierwsze, poprawia on doświadczenia w zakresie rozwoju poprzez oferowanie bogatszego języka programowania, który wprowadza (między innymi) typy/rodzajy/cechy/obsługa błędów do Kairo. Po drugie, Kair 1.0 odgrywa kluczową rolę w decentralizacji Starknet: kontrakty z Kairu 1.0 wysłane w Starknet alfa v0.11.0 kompilacji do Sierra. Sierra gwarantuje, że każda realizacja umowy jest prowokacyjna, co jest kluczową nieruchomością w zdecentralizowanej Starknet.

Kolejną istotną poprawą, która pojawia się w tej wersji, jest pięciokrotna redukcja kosztów obliczeń. Dzięki temu Starknet będzie jeszcze bardziej przyjazny dla aplikacji wymagających dużej intensywności obliczeniowej. Więcej szczegółów poniżej.

## Przygotowanie do Regenezy

Starknet alfa v0.11.0 oznacza początek okresu przejściowego, który pozwoli na przygotowanie przed Regenezą Starkneta. Plan Regenesis Starknet został[opublikowany](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)kilka miesięcy temu, i skupia się na przejściu z systemu opartego na Kairze 0 do systemu opartego na Kairze 1.0.

W okresie przejściowym istniejące kontrakty z Kairu 0 (jeżeli są aktualizowane) mają możliwość utrzymania swojego adresu i przechowywania, bezproblemowe przejście ich do Kairu 1. (patrz następny punkt).

Jako użytkownik Starknet oznacza to, że musisz ulepszyć swój portfel tylko po nowym Kairze 1. implementacja Twojego konta została wydana (będziesz mógł to zrobić w dowolnym czasie aż do samego Regenezy). Nie oczekuje się przestoju, wszystkie dapps w systemie będą nadal działać jak zwykle.

Po rewizji Starknet przestanie obsługiwać pozostałe kontrakty Kaira 0 w całym systemie. Zostanie to z góry dobrze poinformowane, a deweloperzy otrzymają wystarczająco dużo czasu na migrację swoich umów. Przewiduje się, że okres przejściowy potrwa kilka miesięcy, a deweloperzy dapp mogą już rozpocząć migrację do Kairu 1.0. Pod koniec okresu przejściowego nastąpi Regeneza.

## Gładka migracja do Kairu 1.0

Wraz z przejściem do Kairu 1.0, istniejące kontrakty z Kairu 0 są przestarzałe i nie będą już wspierane przy Regenezie. Aby umożliwić modernizację kontraktów Kaira 0 w dalszym ciągu działać, nawet po Reenesis, i zachowaj stan zbudowany aż do tego czasu, dodaliśmy nowe połączenie systemowe — ['replace_class'](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#replace_class_syscall). Kontrakty podlegające modernizacji nie mają problemów z modernizacją do Kairu 1. wdrożenie, ale bazowy wskaźnik zastępczy (umowa zawierająca faktyczne państwo) nadal będzie tkwił w realizacji Kairu 0. Syscall \`replace_class\` rozwiązuje ten problem, zezwalając kontraktowi proxy na zastąpienie jego podstawowej klasy, i. . zachować ten sam adres i przechowywać, ale zastąpić wdrożenie.

## Obliczanie jest teraz 5 razy tańsze!

Obecnie opłaty transakcyjne Starknet składają się z dwóch głównych elementów: kalkulacji i danych w łańcuchu dostaw. Element obliczeniowy opłaty transakcyjnej Starknet jest określany przez koszt krańcowy weryfikacji jej dowodu na L1 (więcej szczegółów znajduje się w[dokumentach](https://docs.starknet.io/documentation/architecture_and_concepts/Fees/fee-mechanism/).

Pierwotnie nasze 200 m Kairu krok w kierunku dowodu, który wymaga 5 m gazu do weryfikacji, doprowadził do naiwnego oszacowania 0,05 gazu na Kair. Od tamtej pory przenieśliśmy się do[rekurencyjnych dowodów](https://medium.com/starkware/recursive-starks-78f8dd401025), które pozwalają na znaczne zmniejszenie kosztów weryfikacji L1 (tylko korzenie drzewa rekursji osiąga L1). Nadszedł czas, aby odpowiednio zaktualizować nasze pierwotne szacunki – cena każdego kaira na L2 zostanie obniżona o 5x, i teraz będzie kosztować 0. 1 gaz.

Obniżenie kosztów jest znaczne w przypadku aplikacji o dużej intensywności obliczeniowej, np. umów dotyczących kont z podpisami nierodzimymi. Proste transakcje zobaczą niewielką redukcję kosztów (~ 5%). W przyszłych wersjach zajmiemy się drugim komponentem: kosztami danych w łańcuchu dostaw. Po wprowadzeniu do Starknet alternatyw dla danych w łańcuchu (tzw. „Volition”) obniżenie kosztów będzie odczuwalne we wszystkich przypadkach.

## Zarządzanie Starknet Pierwsze Głosowanie

Pierwsza faza zarządzania Starknet rozpoczęła się (więcej szczegółów[tutaj](https://medium.com/starknet-foundation/starknets-governance-first-phase-4614c7566f40)). Członkowie społeczności mogą teraz uczestniczyć w kształtowaniu Starknet za pośrednictwem dodatkowego kanału, a mianowicie w głosowaniu nad zmianami protokołu.

Pierwsza faza zarządzania Starknet skupi się na ulepszeniach protokołu Starknet. Każda aktualizacja wersji Starknet zostanie najpierw uruchomiona w testnet; wyborcy będą mieli 6-dniowy okres na zbadanie i przetestowanie zaktualizowanej wersji w trakcie jej funkcjonowania na Goerli. W tym czasie zostanie otwarta propozycja Snapshot, a społeczność może głosować nad zatwierdzeniem nowej wersji dla wdrożenia Mainnet.

Jeżeli wniosek uzyska większość głosów „TAK” w ciągu 6-dniowego okresu głosowania, wniosek przejdzie i zostanie odpowiednio zaktualizowany.

Starknet alfa v0.11.0 jest pierwszą wersją Starknet, która jest gotowa do głosowania. Głosowanie w Starknet alfa v0.11.0 będzie otwarte przez sześć dni, począwszy od wdrożenia Testnet.

Odpowiednie linki:

* [Miejsce na zrzut ekranu](https://snapshot.org/#/starknet.eth/proposal/0x00889bc468509610e516e8602f00b21ca8c32466dd4f0140eca38becb7f40bef)
* [Strona odkrycia delegacji](https://delegate.starknet.io/)
* Starknet alfa v0.11.0 wątek dyskusyjny na[forum społecznościowym](https://community.starknet.io/t/proposal-starknet-alpha-v0-11-0/50334)

## Kair 1.0 i Sierra

Sierra (**S**a**I**nt**e**rmediate**R**ep**r**esent**a**tion) jest reprezentacją pośrednią, która kompiluje się do zespołu Kaira (CASM). Pre Starknet alfa v0.11.0, deweloper skompiluje Cairo 0 do CASM i wyśle wynik do sekwencji Starknet. Z Kairo 1.0, deweloperzy kompilują swój kod do Sierra i wysyłają tę reprezentację pośrednią do sekwencera. Następnie sekwencerz skompiluje go do CASM. Produkt Sierra ma gwarancję kompilacji do „bezpiecznej CASM”, tj. podzbioru CASM, który nie może się powieść, co sprawia, że każde wykonanie jest łatwe. To gwarantuje, że sekwencerz będzie mógł pobierać opłaty nawet za odwracane transakcje, chroniąc przed DOS. Aby uzyskać więcej informacji, zobacz[dokumentacji](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/).

![](https://miro.medium.com/v2/resize:fit:1400/0*KsAwaJTIsOuCsJIe)

Starknet alfa 0.11.0 użyje[Kair 1.0-alpha.6 wersja](https://github.com/starkware-libs/cairo/releases/tag/v1.0.0-alpha.6). Ta wersja jest bliska[parytetu funkcji](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)z Cair 0, z wszystkimi wywołaniami systemowymi Starknet już obecnymi.

Pamiętaj, że sekwencer Starknet używa stałej wersji kompilatora, co oznacza, że ulepszenia językowe mogą nie być natychmiast dostępne w Starknet i będą dostępne dopiero po aktualizacji wersji Starknet. Dokładniej rzecz ujmując, choć ulepszenia mające wpływ na Kaira 1. → Kompilacja Sierra może wejść w życie natychmiast, zmiany w Sierra → kompilator CASM (zobacz[dokumentację](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/)po więcej szczegółów) będzie musiał poczekać na ulepszenie Starknet.

## Co jeszcze jest nowe?

### Nowy typ transakcji – Deklaracja v2

Dodajemy[nowy typ transakcji](https://docs.starknet.io/documentation/architecture_and_concepts/Blocks/transactions/#declare_v2_cairo_1_0)do deklarowania klasy Cairo 1.0.

Ta nowa wersja transakcji \`declare\` jest podobna do istniejącej \`declare\`, z dwoma ważnymi różnicami:

* Obecnie wysyłany obiekt klasy reprezentuje raczej Sierra niż CASM, tj. semantykę klasy definiuje reprezentacja Sierra.
* Użytkownik również podpisuje skompilowany hash. Jest to kluczowy krok do czasu, aż kompilacja Sierra→CASM zostanie udowodniona jako część systemu operacyjnego Starknet.

Aby uzyskać więcej informacji, zobacz[dokumentacji](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#what_to_expect).

Z punktu widzenia dewelopera doświadczenia pozostają takie same. Po zapisaniu kodu Kaira 1.0, możesz użyć CLI do deklarowania klasy.

**Zauważ, że początkowo transakcje \`declared v2\` nie zostaną zaakceptowane na Starknet Mainnet. Po okresie eksperymentowania z testnetem nowy typ transakcji zostanie włączony na Mainnet, a klasy Kaira 1.0 staną się dostępne.**

### Posejdon jest tutaj

[Posejdon](https://www.poseidon-hash.info/)jest rodziną funkcji haszujących zaprojektowanych do posiadania bardzo wydajnych obwodów algebraicznych. Jako takie mogą być bardzo użyteczne w systemach dowodzących ZK, takich jak STARK i SNARK. Od Starknet alfa v0.11.0, deweloperzy będą mogli używać Poseidon. Ponadto niektóre obliczenia haszujące będące częścią protokołu Starknet przechodzą na Posejdon (w szczególności hash, skompilowana klasa hash, a części zobowiązania państwa będą używać Poseidon, zobacz[dokumentację](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#poseidon_hash), aby uzyskać więcej informacji). W przyszłości więcej komponentów wewnętrznych przejdzie na funkcję skrótu Posejdonu.

Dokładna wersja i parametry używane w Starknet można znaleźć[tutaj](https://docs.starknet.io/documentation/architecture_and_concepts/Hashing/hash-functions/#poseidon_hash).

### Różne zmiany

Podobnie jak poprzednie wersje Starknet, aktualizacja ma również wpływ na nasze API i inne komponenty niskiego poziomu. Poniżej wymieniamy te zmiany i zajmujemy się konkretnymi zmianami, które zostały wprowadzone:

* V0 wywołanie/deklarowanie transakcji nie są już obsługiwane
* Wiadomości L1→L2 teraz wymagają[opłat](https://docs.starknet.io/documentation/architecture_and_concepts/L1-L2_Communication/messaging-mechanism/#l1-l2_message_fees). Oznacza to, że wiadomości wysłane z zerową opłatą nie będą przetwarzane przez sekwencera Starknet
* Format danych w łańcuchu jest[zmieniony](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/#on_chain_data_post_v0_11_0)
* [Zmiany API](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#api_changes)(nie wszystkie zmiany są tutaj wymienione, zapoznaj się z dokumentami, aby uzyskać wyczerpującą listę) :
* dodał nowy punkt końcowy \`get_compiled_class_by_class_hash\`
* \`get_class_by_hash\` zwraca klasy Kair 0 / Kair 1.0 (w zależności od żądanego hash)
* \`get_state_update\` ma nową sekcję dla zastępowanych klas, a deklaracje są podzielone między klasy Kairu 0 i Kairu 1.
* \`estimate_fee\` i \`simulate_tx\` mogą teraz pominąć walidację
* [nowa](https://github.com/starkware-libs/starknet-specs/releases/tag/v0.3.0-rc1)wersja Starknet JSON-RPC

## Co dalej?

Teraz, gdy wdrożono całą infrastrukturę związaną z Kairem, można się spodziewać:

* Dalsze ulepszenia języka w Kairze 1.0
* Poprawa wydajności:[zgodnie z obietnicami](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de), nadal postępujemy w kierunku znacznego zwiększenia TPS. Następnym krokiem w mapie drogowej jest przejście na[sekwencer Rust](https://github.com/starkware-libs/blockifier), który powstaje w otwartym miejscu pod Apache 2. licencja. Nowy sekwencer wykorzysta[rust CairoVM](https://github.com/lambdaclass/cairo-rs)i[Papyrus](https://github.com/starkware-libs/papyrus)pełny węzeł, tworząc Trio.
* Offchain[DA](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/)! W tej wersji zajmowaliśmy się składnikiem obliczeniowym kosztu transakcji. W nadchodzących wersjach zajmiemy się kosztami danych w łańcuchu dostaw, które obecnie stanowią dominujący koszt średnich transakcji.

![](/assets/starknet-alpha-v0.11.0-diagram.png)