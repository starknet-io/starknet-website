### TL;DR

* Alfa jest żywa w Mainnet
* Wspiera ogólne obliczanie i kompozycja
* Szybko rozwijająca się społeczność, opracowywanie narzędzi i aplikacji
* Dodatkowe elementy, które należy wprowadzić na bieżąco w nadchodzących tygodniach
* Zastrzeżenie: jest to wersja Alfa (przeczytaj drobny wydruk poniżej)

### Wprowadzanie

StarkNet Alpha uruchamia się dzisiaj na Ethereum Mainnet!

StarkNet to zdecentralizowany rollup działający jako sieć L2 przez Ethereum. StarkNet umożliwia dApp osiągnięcie nieograniczonej skali dla jego obliczeń, bez narażania na szwank kompozycji i bezpieczeństwa Ethereum, dzięki jego poleganiu na najbezpieczniejszym i najbardziej skalowalnym systemie odpornym na kryptografię —[STARK](https://starkware.co/stark/). StarkNet jest zbudowany na[Kair](https://starkware.co/cairo/)języku programowania, pierwszym kompletnym weryfikatorem von-Neumann na Ethereum. Zarówno Kair, jak i STARK zostały opracowane przez StarkWare i napędzały wszystkie nasze aplikacje klasy produkcyjnej. który od lata 2020 r. dokonał rozliczenia ponad 50 mln ton txów i 250 mld USD.

Wśród innych elementów StarkNet Alpha umożliwia ogólne obliczanie inteligentnych kontraktów, które obsługują kompozycję, zarówno z innymi kontraktami StarkNet, jak i z wykorzystaniem komunikatów L1<>L2 z kontraktami L1. StarkNet Alpha działa w trybie Rollup, co oznacza, że wszystkie dane różnicy stanów są wysyłane w łańcuchu.

Już w styczniu udostępniliśmy mapę drogową StarkNet[](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880). W czerwcu StarkNet Alpha działała w publicznej sieci testowej i została zaktualizowana o nowe funkcje na bieżąco. Cieszymy się, że wyprzedzamy harmonogram, częściowo dziękujemy za poleganie na naszym stosie oprogramowania STARK/Kaira pod względem jakości produkcyjnej.

### Jak należy traktować StarkNet Alpha?

Po pierwsze, z wielką ostrożnością, jak znak "Alfa" jest tam z powodu. Oczekiwanie na zmiany, poprawki i ulepszenia. StarkNet Alpha nie została jeszcze skontrolowana, i możemy opóźnić taki audyt do czasu, gdy sieć dojdzie do jeszcze większej dojrzałości (aby uzyskać więcej informacji przeczytaj zastrzeżenie na końcu tego stanowiska).

Ogólnie rzecz biorąc, podążamy ostrożną i rozsądną ścieżką określoną przez naszych optymistycznych kolegów z Rollup, a mianowicie: Arbitrum i Optymalizacja: uruchom sieć za pomocą jednej aplikacji sekwencyjnej i białej listy w celu zapewnienia, aby ich deweloperzy zrozumieli związane z tym zagrożenia. Nadal jesteśmy w pełni zaangażowani w całkowitą decentralizację StarkNet.

I jak należy traktować ekonomię StarkNet Alfa? Alfa rozpocznie się bez opłat transakcyjnych. Następna aktualizacja, zaledwie kilka tygodni, wprowadzi mechanizm opłat. Będziemy udostępniać więcej szczegółów na osobnym stanowisku.

### Rozpocznij budynek

Zapraszamy Cię do pisania własnych aplikacji przez StarkNet poprzez sprawdzenie (nowej!) [strona](http://starknet.io/)lub skocz bezpośrednio do[samouczka](https://starknet.io/docs/).

Jeśli jesteś gotowy do wdrożenia, wykonaj ten[proces wdrażania](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu); stworzone w celu zapewnienia, aby wszyscy deweloperzy byli dobrze świadomi wstępnego stanu systemu.

### Ekosystem

W ciągu ostatnich kilku miesięcy byliśmy świadkami niesamowitego wzrostu wielkości i aktywności społeczności StarkNet, który konsoliduje się na[Discordzie StarkNet](https://discord.gg/uJ9HZTUk2Y). Do tych wysiłków przyczyniają się dziesiątki twórców – zespoły i jednostki – w całym ekosystemie blockchain. (Patrz: zastrzeżenie na końcu tego stanowiska)

#### Narzędzia deweloperskie

* OpenZeppelin definiuje umowy standardowe. Ich[repozytorium](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)i[dyskusje](https://github.com/OpenZeppelin/cairo-contracts/discussions)są warte obserwacji
* [Warp](https://github.com/NethermindEth/warp)Solidity–>transpiler Kaira, opracowany przez Nethermind
* Odłamek Labs’[wtyczka HardHat](https://github.com/Shard-Labs/starknet-hardhat-plugin)i[Devnet StarkNet](https://github.com/Shard-Labs/starknet-devnet)
* Argent opracowuje narzędzia, w tym wspólne wysiłki na StarkNet.js, obok[Sean Han](https://twitter.com/seanjameshan), jego twórca

#### Infrastruktura

**Eksplorator bloków**:

* [Projekt Voyager](http://voyager.online/)wykonany przez Nethermind
* [Eth.tx](https://ethtx.info/)zaoferuje analizę wsparcia i szczegółowy widok transakcji StarkNet

**Pełne węzły**: dwa trwające wysiłki: jeden z nich to projekt Fermion prowadzony przez Erigon, drugi to projekt[Pathfinder](https://github.com/eqlabs/pathfinder)prowadzony przez Equilibrium

**Portfele**:

* [ArgentX](https://github.com/argentlabs/argent-x)jest rozszerzeniem przeglądarki opracowanym przez Argent, już dostępnym do devs
* Rozwiązanie zarządzania kluczem Torus jest gotowe do StarkNet
* Ledger opracowuje natywną aplikację StarkNet; zostanie udostępniona przed końcem roku

**Audyty Kaira**: ConsenSys Diligence, Ślad Bits, Peckshield i ABDK albo przeprowadzają już audyty Kaira lub wkrótce rozpoczną się

**API Services**: po udostępnieniu pełnego węzła StarkNet usługi API będą oferowane przez Figment, Chainstack i Infurę

**Indekser**: będziemy pracować nad integracją teGraph do pracy z StarkNet, wraz z zespołem Figment

### Droga na przyszłość

W nadchodzących tygodniach i miesiącach ulepszymy Alfa z następującymi możliwościami:

* Mechanizm udoskonalania umów
* Mechanizm opłat
* Wydarzenia
* Dodanie brakujących syscalls (get_block_numer, get_block_timestamp, i więcej)
* Szkieletowa wersja Volition
* I wiele więcej …

Aby stale monitorować te wysiłki, zobacz[wstępny plan działania](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51).

Patrząc dalej, nadal intensywnie inwestujemy w aktywne badania na wielu frontach (dołącz do wysiłków[Szamanów](https://community.starknet.io/)):

* Decentralizacja
* Skalowanie
* Dostępność danych
* Zachęty bez uprawnień

### Wezwanie do akcji

* Zacznij pisać umowy na bezpodstawnej sieci testowej StarkNet na Goerli
* Dołącz do[Discorda StarkNet](https://discord.gg/uJ9HZTUk2Y)
* Dołącz do rozmów społecznościowych
* Weź udział w pierwszym[Szczycie Ekosystemów StarkNet](https://www.eventbrite.com/e/starknet-ecosystem-summit-2022-tickets-206671880157)(Jan 27–28 2022, Stanford CA)
* Dołącz do[Szamanów StarkNet](https://community.starknet.io/)dla głębszego nurku w wyzwaniach badawczych

### Zastrzeżenie

***StarkNet Alpha jest nowym i złożonym systemem, który nie został w pełni skontrolowany. Podobnie jak wszystkie złożone systemy oprogramowania, system StarkNet może zawierać błędy, które w skrajnych przypadkach mogą doprowadzić do utraty wszystkich Twoich środków. Więc***bieżnika ostrożnie i zapamiętać!******

*Ekosystem StarkNet jest dużym i szybko rozwijającym się zbiorem niezależnych zespołów i jednostek, nad którymi StarkWare nie sprawuje nadzoru i nie ponosi odpowiedzialności. Każdy projekt opracowany przez członków ekosystemu może zawierać błędy, które w skrajnych przypadkach mogą doprowadzić do utraty wszystkich funduszy. Ponadto wraz z wprowadzeniem większej liczby inteligentnych kontraktów wzrasta potencjał niezamierzonych szkodliwych błędów, a nawet złośliwych oszustw i wykopów. Tak więc traktuje wszystkie inteligentne kontrakty na StarkNet, traktując inteligentne kontrakty na Ethereum, i używaj tylko tych, których masz uzasadnione powody, aby zaufać jako bezpieczne.*