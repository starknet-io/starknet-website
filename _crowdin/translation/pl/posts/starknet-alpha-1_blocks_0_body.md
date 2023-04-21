### TL;DR

StarkNet Alpha 1 posiada dwie nowe funkcje:

* Interakcja L1<>L2
* Dane w łańcuchu

### Wprowadzanie

Na początku roku ogłosiliśmy, że StarkWare buduje[StarkNet](https://starkware.co/product/starknet/), bezuprawnieniowe, zdecentralizowane, oparte na STARK ZK-Rollup1, działające jako sieć L2 przez Ethereum. StarkNet umożliwia dApp osiągnięcie nieograniczonej skali dla obliczeń – bez uszczerbku dla kompozycji i bezpieczeństwa Ethereum.

W ubiegłym miesiącu[StarkNet Alpha 0](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)został opublikowany na świecie. Po raz pierwszy deweloperzy są w stanie[zapisywać](https://kobi.one/2021/07/14/stardrop.html)każdy inteligentny kontrakt i wdrażać go bezwarunkowo do ZK-Rollup. Użytkownicy mogą wysyłać transakcje do sieci, styl Ethereum.

Dziś publikujemy nową wersję; Alfa 1. Udostępniamy funkcje na bieżąco, aby umożliwić programistom jak najszybsze wchodzenie w interakcje z nowymi funkcjami. Oczekujemy, że wzmocni to cykl informacji zwrotnych i umożliwi społeczeństwu szybką poprawę StarkNet.

### **Funkcje Alpha 1**

#### L1<>L2 Interakcja

Alpha 1 zawiera protokół wiadomości L1<>L2, który pozwala deweloperom wdrażać płynne przepływy transakcji pomiędzy L1 i L2. Deweloperzy mogą teraz wysyłać wiadomości z umów na L1 do umów na L2 i odwrotnie.

Jednym z piosenek ZK-Rollups jest to, że aktualizacje stanów są bezzwłoczne. Oznacza to, że komunikaty wysyłane z L2 do L1 mogą być niezwłocznie przekazywane do umowy o przeznaczenie. Otwiera to drogę do budowania aplikacji, które są naprawdę interoperacyjne między warstwami.

Chcesz to wypróbować? Najlepszym sposobem na rozpoczęcie jest przestrzeganie samouczka[tutaj](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html).

Nasz protokół L1<>L2 zawdzięcza wiele innym protokołom L2 (w szczególności Optymalizacji i Arbitrum), którego poprzednie prace w tym obszarze miały wpływ na nasz projekt.

#### Dostępność danych w łańcuchu

Aktualizacja stanu StarkNet jest teraz również publikowana jako dane w łańcuchu Ethereum. Pozwala to każdemu użytkownikowi na pełną konstrukcję stanu StarkNet na podstawie danych L1. Każda aktualizacja stanu zawiera różnicę stanu, tj. jaką pamięć zmieniono i jej nową wartość.

Również w tym przypadku ZK-Rollup pokazuje swoją siłę. W przeciwieństwie do optymistycznych kropów, w których pełne dane transakcji muszą być przesyłane w łańcuchu w kołysaniu ZK tylko minimalne dane bezwzględne wymagane do określenia różnicy stanu są wysyłane w łańcuchu.

Proszę wziąć pod uwagę podstawowy przykład, wyścigi cenowe. Transakcja do aktualizacji wyorty cenowej zwykle zawiera wiele transakcji, ale aktualizuje tylko jedną komórkę magazynującą; cenę pary Dane w łańcuchu wymagane do aktualizacji stanu zawierającej transakcje wylewu cenowego w optymistycznej Rollup rosną liniowo wraz z liczbą aktualizacji, podczas gdy w ZK-Rollup, zawsze będzie to pojedyncza aktualizacja pamięci.

Ponadto algorytmy kompresji mogą być stosowane do opublikowanych danych, a ich ważność zostanie potwierdzona dowodem STARK, dodatkowo zmniejszając ślad w łańcuchu produkcyjnym. Przyszłe wersje StarkNet wprowadzą innowacyjne optymalizacje w tym obszarze.

#### StarkNet OS

Udostępniamy również kod systemu operacyjnego StarkNet. StarkNet OS to program Cairo obsługujący StarkNet. System operacyjny obsługuje wszystko, co robi się w sieci — wdrożenie kontraktów, wykonanie transakcji, L1<>wiadomości L2 i więcej. Struktura i projekt systemu operacyjnego StarkNet zostaną szczegółowo wyjaśnione w osobnym stanowisku.

#### Dodatkowe funkcje

Nie tylko rozwija się StarkNet Alpha, ale również nieustannie poprawiamy Kaira. Aby uzyskać pełny opis nowych funkcji w Kairze v0.3.0, sprawdź informacje o wydaniu[tutaj](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.3.0).

### Ekosystem rośnie

Oprócz stałych prac nad StarkNet Core, prace ekosystemu nad StarkNet stale się rozwijają. Jesteśmy skłonni współpracować z najbardziej utalentowanymi zespołami z ekosystemu.

Fermion, pierwszy pełny wysiłek StarkNet jest opracowywany przez zespół Erigon (dawniej TurboGeth). Opierając się na ich ogromnej wiedzy zdobytej podczas pracy nad Ethereum, jesteśmy w stanie współpracować z nimi nad budowaniem potężnego pełnego Nodu, która uwzględnia wiele doświadczeń zdobytych podczas budowy Ethereum, korzystając jednocześnie ze skali zaproponowanej przez dowody STARK.

Niedźwiedź pracuje na Warp, kompilator od EVM do Cairo. Nasza kultura prezentowania nowych narzędzi tylko wtedy, gdy będą gotowe, Wszystko, co możemy powiedzieć, to oczekiwać ekscytujących wiadomości na tym froncie bardzo wkrótce! Możemy jednak powiedzieć, że poruszają się z szybkością wojny.

### Co za przyszłość

Następnym przystankiem na naszej drodze do StarkNet będzie możliwość współdziałania z umowami. Bądź czujny.

[StarkWare](https://starkware.co/)

1 Jak już wcześniej powiedzieliśmy, ZK-Rollup jest obecnie powszechnie stosowanym terminem, który jest jednak bardzo mylący: rozwiązania te nie oferują (obecnie) zerowej wiedzy.

**Aktualizacja (listopad 2021):**StarkNet Alpha jest żywa na Ethereum Mainnet