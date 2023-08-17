### TL;DR

* STARK umożliwia skalowanie blockchain poprzez skuteczne udowodnienie integralności obliczeń
* StarkEx to specyficzny dla danej aplikacji silnik skalowania
* StarkNet to bezzezwolenia, inteligentna warstwa kontraktowa 2

### **STARK**

STARK (skalowalne, przezroczyste ARGument wiedzy) są systemem dowodowym, który umożliwia udowodnienie i weryfikację obliczeń. Umożliwia przetwarzanie dużych obliczeń, generując dowód poprawności obliczeń, a następnie weryfikację dowodu w bardzo nielicznych krokach.

STARK może odegrać kluczową rolę w skalowalności łańcucha blokowego, pozwalając na wykonanie dużych obliczeń poza łańcuchem, w przypadku gdy jest tańsza, pomijając jedynie weryfikację, która wymaga ułamka obliczeń, przeprowadza się w łańcuchu. Innymi słowy, wykonując bardzo nieliczne etapy na łańcuchu, weryfikator stwierdza integralność znacznie większego obliczenia, które przeprowadzono poza łańcuchem.

Używając STARK, roztwory warstwy 2 grupować razem i obliczać tysiące transakcji, a następnie weryfikować ich ważność w łańcuchu z pojedynczym dowodem STARK. Koszt procesu w łańcuchu jest podzielony między**wszystkie**transakcje w partii. Prowadzi to do bezpieczeństwa Ethereum i niskich kosztów gazu na transakcję.

Niski koszt obliczeniowy wygeneruje nową klasę aplikacji, które wcześniej nie były wykonalne w łańcuchu dostaw. Właściwości te sprawiają, że STARK jest doskonałym elementem służącym poprawie doświadczenia użytkowników i zmniejszeniu kosztów gazu, przy zachowaniu bezpieczeństwa warstwy rozrachunkowej Ethereum.

StarkWare dostarcza dwa rozwiązania skali Ethereum z STARKs: StarkEx i StarkNet.

### **StarkEx**

[StarkEx](https://starkware.co/starkex/)to ramka do tworzenia dozwolonych, specyficznych dla aplikacji rozwiązań skalowania. StarkEx to zestaw narzędzi przydatnych[przepływów aplikacji](https://docs.starkware.co/starkex-v4/starkex-deep-dive/regular-flows), z których projekty mogą korzystać w celu uzyskania tanich obliczeń poza łańcuchem. Dowód STARK, potwierdzający poprawność wykonania, jest generowany poza łańcuchem. Dowód taki może obejmować do 12 000–500 000 transakcji (w zależności od rodzaju transakcji). Dowód jest następnie wysyłany do weryfikatora STARK w celu przyjęcia w łańcuchu dostaw. Oznacza to jedną weryfikację dla wszystkich transakcji – dla niezwykle niskich amortyzowanych kosztów gazu na transakcję.

Kilka przykładów aplikacji wdrożonych na StarkEx to dYdX (handel bezterminowy), Niezmienne i Sorare (NFT-minting and trading), DeversiFi (handel spot) i Celer (DeFi Pooling).

StarkWare nieustannie zwiększa przepływ aplikacji do StarkEx, podążając za rynkiem i potrzebami klientów.

### **StarkNet**

*[StarkNet](https://starkware.co/starknet/)to sieć 2 bezuprawnień, w której każdy użytkownik lub programista może wdrożyć inteligentne kontrakty opracowane w języku Kaira.*

Porównywalne z doświadczeniem w zakresie inteligentnych umów Ethereum, wewnątrz ekosystemu StarkNet, Twój kontrakt może wchodzić w interakcje z innymi kontraktami wdrożonymi w StarkNet, pozwalając na bogatą kompilację protokołów. Kontrakty StarkNet mogą również wchodzić w interakcje z kontraktami Ethereum poprzez asynchroniczne przekazywanie wiadomości.

W przeciwieństwie do StarkEx, gdzie aplikacje są odpowiedzialne za składanie transakcji, sekwencyjne sekwencje StarkNet i wysyłają je do przetworzenia i potwierdzenia. (sekwenatory StarkNet są obecnie obsługiwane przez StarkWare z przyszłymi planami decentralizacji.) Oznacza to, że po wprowadzeniu przez aplikacje umów z Kairu nie muszą się martwić o prowadzenie dodatkowej infrastruktury operatora. StarkNet obsługuje tryb dostępności danych Rollup, co oznacza, że stan Rollup jest zapisywany do Ethereum wraz z dowodami STARK.

Ogromna społeczność programistów jest głęboko zaangażowana w ekosystemy StarkNet, tworząc aplikacje, narzędzia i infrastrukturę. Dziesiątki aplikacji już teraz żyje w testnecie - DeFi, grach, głosowaniu, AI i więcej. Co więcej, narzędzia programistyczne, takie jak eksplorator bloków, lokalne środowisko testowe i ramy, Wspólnota StarkNet buduje SDK-y w kilku językach i więcej. Ponadto prowadzone są aktywne dyskusje na platformie[Shamans’](https://community.starknet.io/), zawierającej sugestie dotyczące ulepszeń, potencjalnych funkcji i najlepszych praktyk.

### **Do sumy**

Zarówno[StarkEx](https://youtu.be/P-qoPVoneQA)jak i StarkNet to rozwiązania skalowania oparte na STARK. Obydwa rodzaje zapewniają skalowalność, niskie koszty gazu i bezpieczeństwo, ale mają różne wymogi eksploatacyjne i modele interoperacyjności. StarkEx może być właściwym rozwiązaniem dla aplikacji, która jest w dużej mierze niezależna i pasuje do API dostarczanych przez StarkEx. StarkNet może być lepiej dostosowany do protokołu, który wymaga współdziałania z innymi protokołami lub ma potrzeby, które wykraczają poza to, co oferuje StarkEx.

STARK zrewolucjonizował, jak aplikacje można budować na Ethereum. StarkEx i StarkNet będą nadal włączać aplikacje, które były wcześniej niewykonalne i naciskają granice tego, co jest możliwe w blockchain.

Ten artykuł został napisany we współpracy przez zespół[Tim Gestson](https://twitter.com/IcemanTim)i[StarkWare](https://starkware.co/)