### TL;DR

* *StarkNet Alpha uruchamia się na Mainnet Ethereum do listopada*
* Czas na zbudowanie StarkNet jest teraz

### Krótka historia

Zapowiedzieliśmy naszą wizję[StarkNet](https://starkware.co/product/starknet/)na początku roku: aby zapewnić ogromną skalowalność Ethereum przy jednoczesnym zachowaniu bezpieczeństwa L1, bezpośrednia interakcja i decentralizacja.\
Wydaliśmy**[StarkNet Alpha](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)**w publicznej sieci testowej w czerwcu. Ta wersja wspierała w pełni bezwarunkowe ogólne umowy obliczeniowe. Od tego czasu ulepszyliśmy go dwukrotnie: najpierw do**Alpha 1**— dostarczając[L1<>L2 wiadomości i danych w łańcuchu](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), a następnie do**Alpha 2**— wspierając[kompozycyjność](https://medium.com/starkware/starknet-alpha-2-4aa116f0ecfc).

StarkNet Alpha 2 obsługuje obecnie kompozytowalne inteligentne kontrakty w ogólnym obliczeniu w stanie podobnym do Ethereum, ze zdolnością do interakcji między umowami L1 i L2. Przeczytaj więcej[tutaj](https://www.cairo-lang.org/docs/hello_starknet/index.html).

### Co to jest StarkNet Alpha na Mainnet?

StarkNet Alpha na Mainnet będzie obsługiwać funkcje podobne do tych, które są obecnie dostępne w publicznym testnecie Goerli.

#### **Czego oczekiwać**

Ponieważ StarkNet jest wciąż w fazie rozwoju, chcemy stopniowo wprowadzać możliwości i zapewnić spełnienie oczekiwań deweloperów na każdym etapie. Dwa szczególnie ważne aspekty, które chcielibyśmy podkreślić to:

* **Zezwolenie na inteligentne wdrożenie kontraktów**: Będziemy śledzić sensowny playbook wprowadzony przez naszych optymistycznych kolegów Rollup: zacznij od*uprawnionych*wdrożenia umowy. Protokół określający sposób żądania włączenia Twojego inteligentnego kontraktu do tej wstępnej białej listy zostanie opublikowany w najbliższych tygodniach.
* **Brak gwarancji dla kompatybilności wstecznej**: oczekujemy, że w przyszłości przejście ze StarkNet Alpha do StarkNet Beta uwzględni regenerację stanu. Sieć rozpocznie się od bloku 0, a aplikacje będą musiały przesunąć swoje umowy. Ponadto deweloperzy i użytkownicy powinni pamiętać, że oczekiwany StarkNet Beta może nie być wstecznie kompatybilny z StarkNet Alpha, e. . deweloperzy mogą potrzebować modyfikacji swoich umów. Oczywiście postaramy się umożliwić łatwe przejście do zastosowań przy minimalnych wymaganych zmianach.

#### Dodatkowe funkcje terminu bliskiego

W ramach przejścia StarkNet Alpha z testneta na Mainnet, zamierzamy:

1. Dodaj konstruktorów do umów.
2. Ulepszenie ram testowych.
3. Dla bloków i transakcji, przenieś się z ID na używanie hash.

Planujemy dalsze wdrażanie nowych funkcji w regularnych odstępach czasu, tak jak robimy to w ramach publicznej sieci testowej. W najbliższej perspektywie planujemy następujące ulepszenia:

1. Konto kontrakty i umowy z tokenami — otwieranie aplikacji DeFi możliwości interakcji z StarkNet w sposób ich znajomy.
2. Ulepszona funkcjonalność umów – wspieranie doskonalenia umów i wydarzeń.
3. Warp: Kompilator Solidity-to-Cairo opracowany przez Admiral pozwoli na płynne przejście od inteligentnych kontraktów Solidity do inteligentnych kontraktów StarkNet.
4. Podpisy Ethereum: natywne wsparcie dla ECDSA nad secp256k1 umożliwi łatwiejszą integrację z istniejącymi portfelami.
5. Pełny węzeł StarkNet: Pełny węzeł umożliwi użytkownikom uczestniczenie w sieci z wymogami sprzętowymi na równi z wymogami Ethereum Full Node.

#### Mechanizm opłat

Mechanizm opłat zostanie włączony, gdy tylko do StarkNet Alfa zostaną dodane umowy z kontem i kontrakty z tokenami.

Wszystkie transakcje zgłoszone do StarkNet będą musiały ponieść opłatę przeznaczoną na pokrycie kosztów L1 i poza łańcuchem. Opłata będzie początkowo pobierana w ETH. Koszt pojedynczej transakcji zmniejszy się wraz ze wzrostem skali StarkNet (podobnie jak we wszystkich istniejących systemach opartych na STARK). Tworząc mechanizmy opłaty początkowej, opowiadamy się za prostotą w stosunku do dokładnej wyceny transakcji w zależności od zasobów, które zużywają. Oczekiwanie na udoskonalenie i udoskonalenie tego mechanizmu z biegiem czasu.

mając na uwadze uczynienie StarkNet zrównoważoną siecią i zachęcenie jej operatorów i deweloperów, część przychodów uzyskanych z opłat zostanie rozdzielona pomiędzy deweloperów aplikacji i głównych deweloperów StarkNet.

#### Bezpieczeństwo

Model bezpieczeństwa StarkNet Alfa w Mainnet będzie zgodny z obecnym modelem w testnet:

* Każda transformacja państwa jest poparta dowodem STARK, dlatego też zapewnia się jej ważność.
* Wszystkie dane o stanie zostaną opublikowane w łańcuchu tak, aby stan był w pełni konstrukcyjny od L1.
* Będzie jeden sekwencer.
* Sieć będzie możliwa do unowocześnienia bez opóźnień.

### Ekosystem StarkNet rośnie

Otwarcie StarkNet na świat przyciągnęło ogromną falę deweloperów zainteresowanych nauką Kaira i rozwojem przez StarkNet. Dostarczyły nieocenionej informacji zwrotnej i to prawdziwa radość widzieć żywe dyskusje na[Discordzie StarkNet](https://discord.gg/uJ9HZTUk2Y).

Ponadto StarkNet jest rozwijany nie tylko przez zespół StarkWare, ale także przez niektóre z najsilniejszych zespołów w ekosystemie blockchain:

* Inwestor pracuje nad dwoma projektami:

1. **[Warp](https://github.com/NethermindEth/warp)**: kompilator Solidity do Kaira

2. **[Voyager](https://voyager.online/)**: eksplorator bloków StarkNet

* Open Zeppelin pracuje nad implementacją[standardowych umów](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)dla StarkNet, a także rozpoczął pracę nad środowiskiem programisty:[Nile](https://github.com/martriay/nile).
* ShardLabs pracuje nad[wtyczką StarkNet HardHat](https://github.com/Shard-Labs/starknet-hardhat-plugin)i lepszym testowaniem.
* Zespół Erigon pracuje nad rozszerzeniem swojego pełnego węzła Ethereum na wsparcie StarkNet (kod: Fermion). Współpracują z nami nad opracowaniem podstawowych mechanizmów StarkNet.
* Equilibrium pracuje nad wdrożeniem pełnego węzła StarkNet w Rust,
* Usługi audytu w Kairze: W nadchodzących miesiącach audyty w Kairze będą przeprowadzane przez ABDK, ConsenSys Diligence, Peckshield, oraz ślad Bitów.
* Audyty StarkNet: rozpoczęliśmy kontrolę fundacji sieci:

1. **CryptoExperts**przeprowadzi kontrolę weryfikatora Cairo Solidity.
2. Formalny**dowód LEAN**specyfikacji Cairo został niedawno ukończony i opublikowany jako[papier](https://arxiv.org/abs/2109.14534)oraz repozytorium GitHub[](https://github.com/starkware-libs/formal-proofs).

Spodziewaj się znacznie bardziej interesującej współpracy w nadchodzących miesiącach!

### Skalowanie STARK dzisiaj

Zbliżamy się do uruchomienia StarkNet Alpha z ufnością, jak StarkEx, nasz autonomiczny system skalowania SaaS, pokazał, jak STARK może masowo skalować aplikacje Ethereum. Uruchomiliśmy StarkEx dla[dYdX](https://dydx.exchange/)(perpetual contracts),[DeversiFi](https://www.deversifi.com/)(handel na rynku kasowym i płatności), a także dla[niezmiennego](https://www.immutable.com/)i[Sortuj](https://sorare.com/)(NFT minting and trading). Widzieliśmy, że ich koszty gazu/tx zmniejszyły się o 100X–200X, do około 650 gazu/tx w Validium (dane poza łańcuchem) i 1100 gazu/tx dla ZK-Rollup.

Do tej pory StarkEx dokonał rozliczenia 80B dolarów w transakcjach i ponad 27M transakcji, co jest bardzo odległe od innych rozwiązań L2 - i wszystkie z nich łącznie.

### Działaj teraz

Nigdy nie było lepszego czasu na dołączenie do rosnącego ekosystemu StarkNet poprzez budowę kolejnych dApp lub przydatnych narzędzi dla programistów.

Zapraszamy Cię do:

1. Dołącz do[Discorda StarkNet](https://discord.gg/uJ9HZTUk2Y), gdzie możesz spotkać się i zaangażować społeczność StarkNet.
2. [Zacznij uczyć się](https://www.cairo-lang.org/docs/hello_starknet/index.html)jak pisać inteligentne kontrakty StarkNet.
3. [DM nas](https://twitter.com/StarkWareLtd)— nasz zespół chętnie pomoże Twoim pomysłom i inicjatywom dotrzeć do życia.

**Aktualizacja (listopad 2021):**StarkNet Alpha jest żywa na Ethereum Mainnet