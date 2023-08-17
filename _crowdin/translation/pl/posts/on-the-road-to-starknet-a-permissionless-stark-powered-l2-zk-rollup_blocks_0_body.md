#### **TL;DR**

Budujemy StarkNet w czterech etapach:

* Etap 0 – Fundacje (ukończone*)
* Krok I – Planety: Rollups z jednej aplikacji
* Etap II – Konstelacje: Rollupy wieloaplikacyjne
* Etap III – wszechświat: Zdecentralizowana Rollup

Oczekujemy, że krok zostanie wdrożony w ciągu kilku miesięcy, i być na dobrej drodze do etapu II & III do końca 2021 r.

### **Wprowadzanie**

StarkWare buduje StarkNet, zdecentralizowany, bezpermissionless i odporny na cenzurę STARK napędzany L2 ZK-Rollup, który obsługuje ogólne obliczanie przez Ethereum. Opiera się on na zakończonym[języku Kairu](https://www.cairo-lang.org/).

Deweloperzy, użytkownicy i węzły StarkNet będą w stanie zrobić wszystko, czego można oczekiwać od Rollup L2 bez uprawnień: deweloperzy mogą budować aplikacje wdrażające własną logikę biznesową i wdrażać je na StarkNet. Użytkownicy mogą wysyłać transakcje do StarkNet w celu wykonania, tak samo jak oni współdziałają z Ethereum dzisiaj. Węzły i uczestnicy StarkNet będą zachęcane kryptoekonomicznie, aby zapewnić sprawne i sprawiedliwe funkcjonowanie sieci.

Wszystkie transakcje StarkNet będą przeprowadzane okresowo, a ich ważność zostanie potwierdzona w dowodzie STARK, który zostanie zweryfikowany na Ethereum. Ponieważ wysiłek obliczeniowy wymagany do zweryfikowania dowodów STARK jest wykładniczo mały w porównaniu z udowodnionym obliczeniem, StarkNet będzie skalować Ethereum według rzędu wielkości.

Ponieważ wszystkie przejścia stanu StarkNet będą potwierdzone STARK, na Ethereum zaakceptowane zostaną tylko te poprawne. Wszystkie dane niezbędne do odbudowy pełnego stanu StarkNet zostaną opublikowane w łańcuchu dostaw. Każdy będzie mógł uruchomić swój własny węzeł StarkNet. Te właściwości sprawią, że StarkNet będzie bezpieczny i bezbronny jak Ethereum.

Jesteśmy w tym od trzech lat, i osiągnęły już pewne niezwykłe etapy przekształcając „Moon Math” w wydajne oprogramowanie na Ethereum klasy produkcyjnej. Sposób, w jaki StarkWare zajmuje się najpierw trudnymi problemami, budując podstawową technologię, a następnie uwalniając ją do produkcji w sposób fragmentaryczny. Będziemy nadal budować w ten sposób, kiedy doprowadzimy StarkNet do końca.

![](/assets/ontheroad_02.png)

**Krok 0 – Fundacje**

StarkWare zakończył tworzenie ważnych fundamentów dla StarkNet.

#### **Cairo**

[Kair](https://twitter.com/StarkWareLtd/status/1300353049836376066?s=20)to nasz pełnoprawny język wysokiego poziomu & ramy do sporządzania dowodów STARK do obliczeń ogólnych. Zamiast kompleksowych „obwodów rzemieślniczych” lub samolotów, programista aplikacji może używać Kaira do definiowania dowolnej logiki biznesowej, posiadać sprawdzone elementy poza łańcuchem dostaw i zweryfikowane w łańcuchu dostaw. Kair jest[w produkcji w Mainnet](https://twitter.com/StarkWareLtd/status/1320695603492507648?s=20), a także[dostępny dla programistów](http://cairo-lang.org/).

Za kilka tygodni uruchomimy publiczną wersję testnetu Ethereum w wersji Alfa Cairo’s Generic Proof Service (GPS). *Umożliwi to deweloperom tworzenie ich własnych aplikacji za pomocą Cairo, implementując logikę biznesową, jakiej chcą. Będą wysyłać swój kod Kaira do GPS, który ma zostać udowodniony, a następnie zweryfikowany w łańcuchu.*

GPS umożliwia jeden dowód potwierdzający integralność wykonania całkowicie odrębnych i niezależnych aplikacji, w ten sposób dając tym aplikacjom możliwość amortyzacji kosztów weryfikacji dowodów w odniesieniu do gazu.

Kair i GPS są podstawą StarkNet - nasza decyzja o eksternalizowaniu zarówno dla deweloperów daje im wczesne narażenie na tę technologię, Nie tylko, aby mogły one zacząć budować na jego podstawie, ale także aby mogły wpływać na rozwój StarkNet.

Będziemy kontynuować rozwój Kairu w oparciu o potrzeby i opinie społeczności programistów. Ulepszymy ten język dzięki nowym funkcjom, składni i budowie które poprawią jego użyteczność, i będziemy nadal rozwijać i udoskonalać narzędzia Kaira: kompilatory, znacznik/debugger, a także integrację ze wspólnymi IDE.

StarkNet będzie działał pod kapturem.

#### **STARK Software Stack**

StarkWare stworzył najpotężniejszy system odporny w ekosystemie, a[żyje na Mainnet](https://medium.com/starkware/starks-over-mainnet-b83e63db04c0)przez miesiące. StarkWare opracował również[ethSTARK](https://twitter.com/StarkWareLtd/status/1264911004099543040?s=20), nasz open-source prover, który jest 20X szybszy niż jakikolwiek inny przymiotnik; oferuje zarówno[zerowa wiedzę, jak i post-ilościowo bezpieczne podpisy](https://twitter.com/StarkWareLabs/status/1331930111227080709).

Nasze*pomiary skalowania*— nie ekstrapolacje ani obietnice — obejmują przetwarzanie transakcji 300K w jednym dowodzie na platformie Mainnet, osiągnięcie[rekordu świata w wydajności Rollup: 3K tps](https://twitter.com/StarkWareLtd/status/1287770381525422082?s=20). W tym procesie osiągnęliśmy światowy rekord wydajności gazu Rollup: 315 gazów/tx, rzędy wielkości tańsze niż transakcje na Ethereum L1.

Ta technologia będzie podstawą zdecentralizowanej warstwy dowodowej StarkNet, i w związku z tym wydamy dodatkowe i udoskonalone dowody w ramach rozwoju StarkNet (więcej na tym w nadchodzącym wpisie).

#### **StarkEx**

StarkEx to nasz silnik skalowalności L2. Od czerwca 2020 r. obsługuje klientów[DeversiFi](https://twitter.com/deversifi)na Mainnet. Zasili zarówno[dYdX](https://twitter.com/dydxprotocol)jak i[ImmutableX](https://twitter.com/Immutable)zaczynając od kilku tygodni. StarkEx może obsługiwać złożoną logikę handlu (transakcje kasowe, instrumenty pochodne, NFT) oraz płatności.

Rozwijanie StarkEx było naszym sposobem na dożywienie naszego łańcucha narzędzi i przetestowanie go pod kątem rzeczywistych potrzeb. Nie ma nic takiego jak żądania rzeczywistych aplikacji i użytkowników na żywo, aby pomóc w dojrzałości i ewolucji narzędzi. Pomaga nam to również zrozumieć, które elementy należy rozwiązać, aby lepiej służyć ekosystemowi – na przykład integracja z portfelami i odkrywcami bloków.

StarkEx jest żywym przykładem możliwości skalowania aplikacji przy użyciu ZK w oparciu o STARK, i jest pierwszym wnioskiem dotyczącym produkcji Mainnet napisanym w Kairo. Będzie to również jedna z aplikacji działających na StarkNet.

![](/assets/ontheroad_03.png)

### **Droga na przyszłość**

#### **Krok I – Planety: Rollups z jednej aplikacji**

Ten krok umożliwi programistom budowanie i wdrażanie własnych skalowalnych aplikacji na StarkNet.

W tym momencie każda instancja StarkNet będzie mogła uruchomić pojedynczą aplikację. Różne instancje mogą uruchamiać różne aplikacje.\
Struktura StarkNet obejmuje:

* Mechanizmy potrzebne do wygenerowania dowodów STARK dla arbitralnej logiki kaira, a następnie do przesłania i weryfikacji na Ethereum.
* Interakcje z L1 Ethereum: depozyty i wycofanie tokenów L1, publikacja danych w łańcuchu danych, mechanizmy escape chroniące użytkowników StarkNet przed złośliwymi operatorami StarkNet itp.
* Zarządzanie saldami użytkowników L2 oraz przechowywaniem i pamięcią aplikacji.

Deweloperzy będą mogli skupić się wyłącznie na budowaniu logiki biznesowej swojego zastosowania, a następnie przejść do produkcji: wdrożyć i uruchomić w skali StarkNet.

To, co pozwala nam zbudować skalowalne ogólne obliczenie ZK-Rollup to kombinacja:

* Kairo, który jest ogólnym językiem programowania tuing-complete
* Nasz silny stos STARK (prover i weryfikator), który umożliwia połączenie ogromnych obliczeń w jeden dowód

#### **Etap II – Konstelacje: Rollupy wieloaplikacyjne**

Następny krok będzie wspierał wiele aplikacji działających w tej samej instancji StarkNet i uzyskujących dostęp do tego samego globalnego stanu L2. Umożliwi to interoperacyjność między różnymi zastosowaniami, jak również obniżenie kosztów gazu dzięki poprawie ekonomii skali.

Kair, potężny stack STARK i GPS wzmacniają przewagę konkurencyjną StarkNet’ we wspieraniu wieloaplikacyjnego Rollup.

Na tym etapie StarkNet będzie w pełni funkcjonalną strukturą dla obsługi*wielu*aplikacji z dowolną logiką biznesową oprócz Ethereum, dla każdej instancji prowadzonej przez jednego operatora.

Operator może teraz rozdzielić węzeł StarkNet, a deweloperzy aplikacji mogą wdrażać swoje kontrakty na nią. Z punktu widzenia użytkowników StarkNet wygląda teraz i czuje się jak Ethereum o wyższej skali.

#### **Etap III – wszechświat: Zdecentralizowany rollup**

Ostatnim krokiem w rozwoju StarkNet jest decentralizacja jego działania.

Inaktywacja pytań R&D, które obecnie zajmujemy się tym etapem obejmuje: (i) wykorzystanie Rollups ZK do poprawy mechanizmów osiągających konsensus, oraz (ii) projektowanie mechanizmów kryptoekonomicznych w celu zachęcenia zdecentralizowanych uczestników i operatorów StarkNet (sekwencerzy transakcji, przysłowie itp. sprawne, sprawiedliwe i bezpieczne działanie.

### **W związku z tym Komisja stwierdza, że w okresie od dnia 1 stycznia 2014 r. do dnia 31 grudnia 2014 r. nie ma podstaw do stwierdzenia istnienia pomocy państwa w rozumieniu art. 107 ust. 1 TFUE.**

StarkWare buduje StarkNet, zdecentralizowany, bezuprawnieniowy STARK napędzany przez ZK-Rollup na Ethereum, który obsługuje ogólne obliczanie oparte na języku Kairy.

StarkNet umożliwi aplikacjom skalowanie bez uszczerbku dla bezpieczeństwa, użytkownicy uiszczają rozsądne opłaty transakcyjne, a cały ekosystem znacznie się rozwijał i wypełniał swoją obietnicę.

Cieszymy się, że zapraszamy społeczność programistów do[dołączenia do nas](https://twitter.com/StarkWareLtd)w tej podróży.

**Aktualizacja (listopad 2021):**StarkNet Alpha jest żywa na Ethereum Mainnet