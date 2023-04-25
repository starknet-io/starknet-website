Skalowalność łańcucha blokowego zawsze była gorącym tematem. Prawie każda sieć blockchain dotyka dużej liczby transakcji na sekundę (TPS) jako punktu sprzedaży. TPS nie jest jednak właściwą miarą do porównywania sieci blockchain z tym co sprawia, że jest wyzwaniem do oceny ich względnej wydajności. Co więcej, duże numery TPS generują zazwyczaj koszty, co rodzi pytanie: czy sieci te są rzeczywiście skali; czy też po prostu zwiększają swoją wydajność?

Sprawdzmy więc, jak zdefiniować skalowalność, które kompromisy są robione, aby je osiągnąć, i dlaczego rollupy poprawności są ostatecznym rozwiązaniem skalowalności.

### Nie wszystkie transakcje są równe

Po pierwsze, musimy stwierdzić, że prosta i wygodna miara TPS nie jest dokładną miarą skalowalności.

Aby zrekompensować węzłom wykonywanie transakcji (aby zniechęcić użytkowników do spamowania sieci niepotrzebnymi obliczeniami), blockchain naliczają opłatę proporcjonalną do obciążenia obliczeniowego nałożonego na blockchain. W Ethereum złożoność obciążenia obliczeniowego jest mierzona w*gazu.*Ponieważ gaz jest bardzo wygodną miarą złożoności transakcji, Termin ten będzie stosowany w całym tym artykule również w odniesieniu do łańcuchów blokowych innych niż Ethereum, mimo że jest on typowo specyficzny dla Ethereum.

Transakcje znacznie różnią się pod względem złożoności i w związku z tym ilości zużywanego przez nich gazu. Bitcoin, pionier transakcji bez zaufania peer-to-peer, obsługuje tylko podstawowy skrypt Bitcoina. Te zwykłe transfery z adresu na adres używają małej ilości gazu. Inteligentne łańcuchy kontraktów, takie jak Ethereum czy Solana, wspierają maszynę wirtualną i języki programowania, które pozwalają na znacznie bardziej złożone transakcje. Dlatego dApps takie jak Uniswap wymagają o wiele więcej gazu.

Dlatego nie ma sensu porównywać TPS różnych sieci blockchain. Zamiast tego powinniśmy porównać zdolność obliczeniową – lub przepustowość.

Wszystkie łańcuchy blokowe mają rozmiar (zmienny) bloku i czas bloku, który określa, ile*jednostek obliczeniowych*można przetworzyć na blok i jak*szybko*można dodać nowy blok. Razem te dwie zmienne określają*przepustowość*blockchain.

### Co ogranicza skalowalność?

Blockchain stara się być maksymalnie zdecentralizowane, integrujące sieci. Aby to osiągnąć, należy kontrolować dwie podstawowe właściwości.

#### **1. Wymagania sprzętowe**

decentralizacja sieci blockchain zależy od zdolności najsłabszego węzła w sieci do weryfikacji łańcucha bloków i utrzymania jego stanu. W związku z tym koszty uruchomienia węzła (sprzęt, przepustowość pasma, i składowanie) powinny być utrzymywane na jak najniższym poziomie, aby umożliwić jak największej liczbie osób bezwarunkowe uczestnictwo w sieci pozbawionej zaufania.

#### 2**.**Wzrost stanu

Wzrost państwa odnosi się do tego, jak szybko rozwija się blockchain. Im większa przepustowość blockchain, tym szybciej rozwija się blockchain. Pełne węzły przechowują historię sieci i muszą być w stanie zweryfikować stan sieci. Stan Ethereum jest przechowywany i odwoływany przy użyciu efektywnych struktur, takich jak drzewa. Wraz z rozwojem państwa dodaje się do niego nowe liście i oddziały, co sprawia, że wykonywanie określonych działań staje się coraz bardziej skomplikowane i czasochłonne. W miarę jak łańcuch rośnie wielkość, pogarsza on najgorsze przypadki egzekucji przez węzły, co prowadzi do coraz większego czasu na walidację nowych bloków. Z czasem zwiększa to również całkowity czas potrzebny do synchronizacji całego węzła.

### Uszkodzony wpływ rosnącego zachmurzenia

#### 1. Liczba węzłów

Minimalne wymagania do uruchomienia liczby węzłów i węzłów to:

* Bitcoin1: 350GB przestrzeni dyskowej HDD, połączenia 5 Mbit/s, 1GB RAM, CPU >1 Ghz. **Liczba węzłów: ~10,000**
* Ethereum2: 500GB+ przestrzeń na dysku SSD, połączenie 25 Mbit/s, pamięć RAM 4–8GB CPU 2–4. **Liczba węzłów: ~6 000**
* Solana3: 1.5TB+ przestrzeń na dysku SSD, 300 Mbit/s połączenie, 128GB RAM CPU 12 rdzeni. **Liczba węzłów: ~1200**

Zauważ, że większe wymagania dotyczące CPU, przepustowości i przechowywania dla węzłów wymagane dla przepustowości blockchain, mniejszej liczby węzłów w sieci – co prowadzi do słabszej decentralizacji i mniej integracyjnej sieci.

#### 2. Czas na synchronizację całego węzła

Podczas uruchamiania węzła po raz pierwszy, musi zsynchronizować się ze wszystkimi istniejącymi węzłami, pobierz, i sprawdzaj stan sieci na całej drodze od bloku genezy do końcówki łańcucha. Proces ten powinien być możliwie szybki i skuteczny, aby każdy mógł działać jako bezwarunkowy uczestnik protokołu.

Przyjmując Jameson Lopp’s[2020 Bitcoin Node](https://blog.lopp.net/2020-bitcoin-node-performance-tests/)i[2021 Node Sync Tests](https://blog.lopp.net/2021-altcoin-node-sync-tests/)jako wskaźnik, Tabela 1 porównuje czas potrzebny do synchronizacji całego węzła Bitcoin z serwerem Ethereum vs. Solana średnio na komputerze klasy konsumenckiej.

![Tabela 1. Porównanie przepustowości blockchain i zsynchronizowanych węzłów](/assets/1_gmpi_1c9zipoc-znrh7b5q.png "Tabela 1. Porównanie przepustowości blockchain i zsynchronizowanych węzłów")

Tabela 1 pokazuje, że zwiększenie przepustowości prowadzi do dłuższych czasów synchronizacji, ponieważ coraz więcej danych wymaga przetwarzania i przechowywania.

Podczas gdy ulepszenia oprogramowania węzłów są stale wprowadzane w celu złagodzenia wyzwań rosnącego łańcucha bloków (zmniejszenie śladu dysku, szybsze tempo synchronizacji, większa odporność na awarie, modulacja niektórych elementów itp. , węzły najwyraźniej nie są w stanie dotrzymać kroku wzrostowi przepustowości.

### Jak zdefiniować skalowalność?

Skalowalność jest najbardziej błędnie reprezentowanym terminem w przestrzeni blockchain. Chociaż pożądane jest zwiększenie przepustowości, jest to tylko jedna część układanki.

***Skalowalność**oznacza**więcej transakcji**dla**tego samego sprzętu**.*

Z tego powodu skalowalność można podzielić na dwie kategorie.

#### Skalowalność sekwentora

Sekwencjonowanie opisuje czynność zamawiania i przetwarzania transakcji w sieci. Jak wcześniej ustalono, każdy łańcuch blokowy może trivialnie zwiększyć swoją przepustowość poprzez zwiększenie rozmiaru bloku i skrócenie czasu jego bloków — aż do momentu, w którym negatywny wpływ na jego decentralizację jest uważany za zbyt znaczący. Ulepszenie tych prostych parametrów nie zapewnia jednak wymaganych ulepszeń. EVM Ethereum może teoretycznie[do ~2000 TPS](https://twitter.com/dankrad/status/1459607325854121989), co jest niewystarczające do obsłużenia długoterminowego zapotrzebowania na przestrzeń blokową. Skala sekwencjonowania Solana wprowadziła pewne imponujące innowacje: skorzystanie z równoległego środowiska realizacji i mądry mechanizm konsensusu, co umożliwia znacznie bardziej efektywną przepustowość. Jednak pomimo poprawy nie jest ona ani wystarczająca, ani skalowalna. Ponieważ Solana zwiększa swoją wydajność, wzrastają również koszty sprzętu związane z prowadzeniem węzła i transakcjami przetwarzania.

#### Skalowalność weryfikacji

*Skalowanie weryfikacji opisuje podejścia, które zwiększają przepustowość bez obciążania węzłów przy stale rosnących kosztach sprzętowych.*W szczególności odnosi się do innowacji kryptograficznych, takich jak dowody poprawności. Oto powód, dla którego Rollups Validity może trwale skalować blockchain.

**Co to jest Rollup Ważności?**

Przenieś obliczenia i stan pamięci poza łańcuchem, ale przechowuj niewielką ilość niektórych danych w łańcuchu. Inteligentny kontrakt na bazowym blockchainu utrzymuje stan roota Rollup. Na Rollup partia wysoko skompresowanych transakcji wraz z bieżącym rootem stanu jest wysyłana do Prover poza łańcuchem. Prover oblicza transakcje, generuje prawidłowy dowód wyników i nowego roota stanu i wysyła go do weryfikatora on-chain. Weryfikator weryfikuje dowód ważności, oraz inteligentna umowa, która utrzymuje stan Rollup aktualizuje go do nowego stanu udostępnionego przez Provera.

**W jaki sposób skala Rollups z tymi samymi wymaganiami sprzętowymi?**

Nawet jeśli Provers wymaga sprzętu wysokiej klasy, nie mają one wpływu na decentralizację blockchain; ponieważ ważność transakcji jest gwarantowana za pomocą sprawdzalnych dowodów matematycznych.

Istotne znaczenie mają wymogi weryfikacji dowodów. Ponieważ dane są w dużym stopniu skompresowane i w dużej mierze abstraktowane przez obliczenia, ich wpływ na węzły podstawowego blockchain jest minimalny*.*

Weryfikatorzy (węzły Ethereum) nie wymagają sprzętu wysokiej jakości, a wielkość partii nie zwiększa wymagań sprzętowych. Tylko stan przejścia i mała ilość danych połączeń muszą być przetwarzane i przechowywane przez węzły. Pozwala to wszystkim węzłom Ethereum zweryfikować partie Rollup przy użyciu ich istniejącego sprzętu.

**Im więcej transakcji, tym tańsze dostaje**

W tradycyjnych sieciach blockchain, tym więcej transakcji ma miejsce, im droższe staje się dla wszystkich, kiedy blok zostanie wypełniony — a użytkownicy muszą się nawzajem przebijać na rynku opłat, aby uwzględnić swoje transakcje.

Dla Rollupa poprawności dynamika jest odwrócona. Weryfikacja partii transakcji na Ethereum wiąże się z pewnymi kosztami. W miarę wzrostu liczby transakcji w partii, koszt weryfikacji partii wzrasta wykładniczo w wolniejszym tempie. Dodanie większej liczby transakcji do partii prowadzi do tańszych opłat za transakcje, mimo że koszt weryfikacji zbiorczej wzrasta – ponieważ jest amortyzowany wśród wszystkich transakcji w partii. Ważność Rollups chce jak największej ilości transakcji w partii - tak, aby opłata weryfikacyjna mogła być udostępniona wszystkim użytkownikom. Ponieważ wielkość partii wzrasta do nieskończoności, opłata amortyzowana za transakcję zmienia się na zero, tj. ., im więcej transakcji na Validity Rollup, tym tańszy jest dla wszystkich.

dYdX, dApp zasilana przez Rollup Validity często widzi rozmiary partii ponad 12 000 transakcji. Porównanie zużycia gazu w tych samych transakcjach na Mainnet z poprawnym Rollup ilustruje zyski skalowalności:

Rozliczanie transakcji dYdX na Ethereum Mainnet:**200 000 gazu**

Rozliczanie transakcji dYdX na StarkEx:**<500 gazu**

Inny sposób na zapoznanie się z nim: główna skala kosztowa ważności Rollups liniowo wraz z liczbą użytkowników w tej samej partii.

#### Dlaczego optymistyczne Rollupy nie są tak skalowalne, jak mogą myśleć

W teorii optymistyczne Rollupy zapewniają prawie takie same korzyści skalowalności jak Rollups Validity. Istnieje jednak jedno ważne rozróżnienie: Optymistyczne Rollups optymalizują dla przeciętnego przypadku, podczas gdy Rollups Validity optymalizuje dla najgorszego przypadku. Ponieważ systemy blockchain działają w niezwykle kontradyktoryjnych warunkach, optymalizacja w najgorszym przypadku jest jedynym sposobem na osiągnięcie bezpieczeństwa.

W najgorszym przypadku optymistycznego Rollupa transakcje użytkownika nie będą sprawdzane przez sprawdzanie oszustw. Zatem, aby sprzeciwić się oszustwom, użytkownik musi zsynchronizować pełny węzeł Ethereum, pełny węzeł L2 i obliczyć podejrzaną transakcję.

W najgorszym przypadku poprawności Rollup użytkownik musiałby zsynchronizować tylko pełny węzeł Ethereum, aby zweryfikować dowód poprawności, zapisywanie własnego obciążenia obliczeniowego.

W przeciwieństwie do Rollups Ważności, skala kosztów optymistycznych Rollup liniowo wraz z liczbą transakcji, a nie liczbą użytkowników, co sprawia, że są droższe.

### Końcowa część łamigłówki – Dostęp bez uprawnień do stanu Rollup

Aby zagwarantować prawidłowość transakcji, użytkownicy muszą uruchamiać tylko węzeł Ethereum. Jednakże użytkownicy i deweloperzy mogą chcieć przeglądać i uruchamiać stan i wykonanie Rollup w różnych celach. *indeksujący węzeł L2*wypełnia to idealnie. Pozwala to użytkownikom zobaczyć transakcje w sieci. ale jest to również kluczowy element infrastruktury, który jest niezbędny do funkcjonowania infrastruktury ekosystemowej. Indeksy takie jak The Graph, Alchemy, Infura; Sieci Oracle, takie jak Chainlink, oraz odkrywcy bloków, są w pełni wspierane przez bezpodstawny, indeksujący węzeł L2.

### W związku z tym Komisja stwierdza, że w okresie od dnia 1 stycznia 2014 r. do dnia 31 grudnia 2014 r. nie ma podstaw do stwierdzenia istnienia pomocy państwa w rozumieniu art. 107 ust. 1 TFUE.

Wiele podejść do walki z skalowalnością łańcucha blokowego niesłusznie skupia się na zwiększaniu*przepustowości*. Nie uwzględnia to jednak wpływu przepustowości na węzły: stale rosnące zapotrzebowanie na sprzęt do przetwarzania bloków i przechowywania historii sieci, i w jaki sposób to hamuje decentralizację sieci.

wraz z pojawieniem się kryptografii zabezpieczającej przed ważnością, blockchain może osiągnąć**prawdziwą skalowalność**, która nie obciąża węzłów rosnącymi kosztami i pozwala na szeroką decentralizację. Możliwa jest więcej transakcji z potężnymi i bardziej złożonymi obliczeniami dla tego samego sprzętu, odwrócenie dylematu rynkowego opłat w tym procesie — im więcej aktywności na Rollup Walidity, tym tańsze zyski!

[SwagtimusPrime.eth](https://twitter.com/SwagtimusP?t=pO0L1vGIhuC-ZgWOusQYtA&s=09)i[Louis Guthmann](https://twitter.com/GuthL)

1 z<https://bitcoin.org/en/bitcoin-core/features/requirements>

2 Z[https://ethereum.org/pl/developers/docs/nodes-and-clients/](https://ethereum.org/en/developers/docs/nodes-and-clients/)

3 z<https://docs.solana.com/running-validator/validator-reqs>

4 Silnie uproszczone i dostosowane do średniej wielkości bloków dynamicznych