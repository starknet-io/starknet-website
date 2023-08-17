### TL;DR

* Budujemy StarkNet w krokach, zaczynając od ustalenia**przydatności**, następnie poprawić**wydajność**i wreszcie przejść do**decentralizacji**
* Osiągnęliśmy nasz pierwszy cel: użyteczność. Oznacza to, że dostarczyliśmy ogólne obliczenia w stanie podobnym do Ethereum (lata zanim to było możliwe.
* Przechodzimy teraz do etapu 2 naszego trzyczęściowego planu: wydajności, skupiając się na przepustowości, kosztach transakcji i opóźnieniu.
* Następne góra: Decentralizacja

Zaledwie rok po ogłoszeniu planów dla[StarkNet](https://starknet.io/)platforma ma bardzo dobrą funkcjonalność. Społeczność deweloperów rozwija się poza naszymi najdziwniejszymi oczekiwaniami i zapewnia ciągłą fali nowych rodzimych projektów L2.

Naszym priorytetem w ciągu ostatniego roku było umożliwienie dokładnej realizacji tego zadania. poprzez stworzenie działającego StarkNet z szybkim rozszerzeniem zakresu funkcji, który umożliwia devs nurkowanie proste.

Zrobili to w dużej liczbie. Dobrym barometrem jest liczba pobieranych bibliotek[JavaScript dla StarkNet](https://www.starknetjs.com/): już o 5k od momentu udostępnienia 4 miesiące temu.

Mimo że StarkNet dostarcza magię kompresji obiecaliśmy teraz, jest daleka od tego, aby zrobić to dla wystarczającej ilości dApps z wystarczającą przepustowością, i może to być źródłem frustracji dla programistów w krótkim okresie.

Nasza testowana w bitwie technologia podstawowa, wykazująca wiele transakcji i kompresja dowodów, musi być poprzedzona partią lub kolejnością transakcji. Jest to proces, który zespół StarkWare już perfekcyjnie ulepszył się jeden raz dla silnika skalowania[StarkEx](https://starkware.co/starkex/), i obecnie pracujemy nad tym ponownie dla potrzeb StarkNet.

Teraz, gdy wiele z naszych celów użyteczności zostało osiągniętych, przesuwamy nacisk na to, by uczynić ten priorytet naszym najważniejszym. Jest to cały element naszej trzyetapowej mapy drogowej:**użyteczność**, a następnie**wydajność sieci**, a następnie**decentralizacja**. Rok za chcemy dać Ci podgląd pod kapturem — zarys tego, co są kawałki i co jest wciąż w toku.

### Opowieść tak Daleko

StarkNet Alpha została udostępniona do publicznego testnetu w czerwcu, a do Mainnet w listopadzie. Do czasu wdrożenia Mainnet StarkNet dostarczył już ogólne wyliczenia w stanie podobnym do Ethereum, co powszechnie uważa się za wiele lat.

Przez cały czas rozwoju wybraliśmy podejście, które skupiło się najpierw na najważniejszych funkcjach i udostępniło je natychmiast po ich udostępnieniu, zasadniczo dzieląc proces ewolucji ze społecznością. StarkNet jest daleki od ukończenia funkcji, ale nawet teraz, deweloperzy mogą już budować znaczące i złożone aplikacje. Dziś mamy setki deweloperów[budujących na StarkNet,](https://starkware.notion.site/Projects-Building-on-StarkNet-a33dee55778a4515a9be9bdae02ee682)dziesiątki dApp, i ponad dwanaście zespołów zewnętrznych opracowujących oprzyrządowanie i infrastrukturę dla ekosystemu StarkNet.

Ciąg ulepszeń dostarczył wiele ważnych funkcji, w tym komunikaty L1<>L2, dane w łańcuchu oraz wsparcie dla kompozycji, wsparcia wydarzeń, podstawowego mechanizmu opłat, aktualizacja kont, abstrakcja konta, testowanie ram, narzędzia deweloperów, szybkie potwierdzenie, numer bloku, znacznik czasu bloku, wsparcie dla kont kont.

Społeczność deweloperów jest zarówno głęboko zainteresowana StarkNet, jak i kształtuje jej rozwój. Funkcje zostały już wprowadzone na podstawie opinii programistów. Przyjęcie mogłoby znacznie przewyższyć wzrost przepustowości, dlatego właśnie ten impuls jest naszym obecnie najważniejszym priorytetem.

### Następne kroki

Teraz, gdy osiągnęliśmy użyteczność, nadszedł czas, aby poprawić wydajność systemu. System w swoim obecnym stanie jest zdolny do wspierania ograniczonej przepustowości transakcji. Sposobem na rozwiązanie tego problemu jest poprawa wydajności węzła sekwencyjnego, który jest odpowiednikiem StarkNet górnika. Jest to „maszyna”, która sekwencjonuje transakcje po ich złożeniu. Kiedy to jest zoptymalizowane, przepustowość nieba rakietowa.

W tym celu analizujemy jednocześnie wąskie gardła i zajmujemy się nimi jeden po drugim. Obecnie wszystkie wąskie gardła są związane z procesem sekwencyjnym, który pojawia się przed powołaniem się na przysłowie STARK. Przetestowany w bitwie stos jest gotowy do wsparcia przepustowości podobnej do StarkEx-like na StarkNet.

Oczekujemy, że optymalizacja sekwenatora będzie procesem trwającym kilka miesięcy, przy stopniowej poprawie w całym procesie H1/22. Naszym celem jest osiągnięcie do początku drugiej połowy 2022 r. co najmniej jednego rzędu wielkości większego TPS niż Ethereum, po koszcie, który jest co najmniej dwa rzędy wielkości niższy niż Ethereum. I to dopiero początek.

Istnieje dobry powód, dla którego potrzebna jest faza optymalizacji. i że StarkNet nie został uruchomiony z gotowym zoptymalizowanym sekwencerzem: StarkNet był w stanie osiągnąć przydatność tak szybko, ponieważ udało nam się zacząć z głową. Zamiast zaczynać od podstaw i budować zupełnie nowy sekwenator, użyliśmy batchera ze StarkEx jako głównego komponentu.

To był świetny sposób na budowę. To nie tylko szybko się dostarczyło. Oznacza to, że jesteśmy pewni, że zbudowaliśmy na solidnych podstawach. StarkEx zasadniczo przetestował podstawową funkcjonalność, która napędza StarkNet, ponieważ odnotowała setki miliardów dolarów w handlu skumulowanym.

[StarkEx](https://starkware.co/starkex/)to silnik skalowania dla najbardziej udanych dApps przy użyciu L2: dYdX (perpetual contracts), DeversiFi (handel na rynku kasowym i płatności na rynku kasowym), jak również dla niezmiennego i sortowania (NFT minting and trading).

Ale sekwencerz zbudowany dla nich i innych klientów StarkEx może do tej pory zabrać StarkNet. Każdy z nich obsługuje zasadniczo ten sam rodzaj transakcji każdego dnia. StarkNet to wszystko o**ogólnych obliczeniach**, więc jego potrzeby są niekończone. Kiedy sekwencerz pobiera transakcje z puli mempolu, pojawiają się one w różnych kształtach i rozmiarach. Ponadto StarkNet jest również otwartą siecią, co oznacza, że istnieje dodatkowy koszt obliczeniowy, który nie występuje w StarkEx.

Obecne wyzwanie, mianowicie zoptymalizowanie sekwencyjnego charakteru tych nowych potrzeb, jest ważnym przedsięwzięciem, ale w oparciu o nasz udany rozwój StarkEx mamy do czynienia z potrzebną drogą.

### Następny: Decentralizacja

StarkNet ma być w pełni zdecentralizowaną siecią bezuprawnieniową, wraz z liderami w wyborach i mechanizmami zarządzania. Osiągnięcie tego celu stanie się naszym głównym tematem po spadku przepustowości rakiet i kosztów. i mamy nadzieję na pierwszą zdecentralizowaną wersję do końca 2022 roku. Przewidujemy publiczny podział naszego planu decentralizacji w nadchodzących miesiącach.

Podobnie jak obecna ograniczona przepustowość stanowi tymczasową fazę rozwoju StarkNet, obecny poziom zaangażowania StarkWare ma również charakter tymczasowy. Uważamy się za rusztowanie, które pełni ważną funkcję w fazie budowy, ale w odpowiednim czasie cofa się.

Pełny rozwój węzłów, będący ekscytującym pierwszym krokiem w kierunku decentralizacji, jest już w toku. Pełne węzły umożliwią każdemu utrzymanie i weryfikację stanu sieci lokalnie, śledząc dokładnie to, co się dzieje. Trzy drużyny —*Erigon, Omdlenie i Equilibrium*— rozwijają pełne węzły i potencjalnie w przyszłości rozpoczną się prace rozwojowe.

W ramach równoległego rozwoju trwają przygotowania do otwarcia sekwencji i udowodnienia społeczeństwu oprogramowania. Każdy będzie mógł uczestniczyć jako sekwencerz lub prover na StarkNet.

Zostanie stworzona struktura zachęcająca ludzi do zaangażowania, obejmująca nagrody gospodarcze. Opłaty StarkNet zostaną częściowo zwrócone do sekwenatorów i przysłowie.

W perspektywie średnioterminowej oczekujemy udostępnienia naszego sekwenatora stronom trzecim, i w dłuższej perspektywie oczekujemy również różnych zespołów tworzących sekwenatory sekwencyjne, które będą sekwencjonowane dla StarkNet.

### Zawsze ulepszaj; zawsze słuchaj

W miarę przesunięcia uwagi na kolejne wyzwanie, będziemy nadal ulepszać dotychczasowe osiągnięcia. A kontynuując pracę na wszystkich obszarach[StarkNet](https://starknet.io/)nasze uszy zawsze pozostaną otwarte dla całej społeczności programistów. Zaangażuj się w dyskusję, za pośrednictwem społeczności[Discord](https://discord.com/invite/uJ9HZTUk2Y),[StarkNet Shamans](https://www.google.com/search?client=safari&rls=en&q=StarkNet+Shamans&ie=UTF-8&oe=UTF-8)[Twitter](https://twitter.com/Starknet_Intern)lub inna droga i pomoc w kształtowaniu przyszłości blockchain.