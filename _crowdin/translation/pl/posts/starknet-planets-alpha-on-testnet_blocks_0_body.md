### **TL;DR**

* [Planety StarkNet Alpha](https://voyager.online/)— pierwszy krok na naszej drodze do Mainnet — teraz żyje na Testnet!
* [StarkNet](https://starkware.co/product/starknet/)to kompletny bezpermisjonowy obrót ZK-Rollup1.
* Deweloperzy mogą wprowadzić swoją logikę biznesową w inteligentnej umowie i wdrożyć ją bez zgody na StarkNet.
* Przejścia stanu StarkNet są sprawdzone poza łańcuchem, a następnie zweryfikowane w łańcuchu.
* Podobnie jak Ethereum, użytkownicy mogą wchodzić bezpośrednio w interakcje z tymi inteligentnymi kontraktami.

### **Wprowadzanie**

[ogłosiliśmy](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)mapę drogową dla[StarkNet](https://starkware.co/product/starknet/)w Jan 2021. Święta szyna rozwiązań skalowalności wspierałaby (i) arbitralne inteligentne kontrakty z (ii) kompozycją, (iii) eksploatowane w sieci zdecentralizowanej. Dzisiaj ogłaszamy wdrożenie sieci testowej etapu 1: Planety StarkNet Alpha. System Alfa wspiera arbitralne inteligentne kontrakty. Kompetencje będą wspierane jeszcze w tym roku, z decentralizacją do naśladowania.

Bardzo ważne jest, abyśmy byli w pełni przejrzysti i właściwie ustalali oczekiwania. Celem tego stanowiska jest wyraźne wskazanie tego, co jest już wspierane i jakich funkcji nadal brakuje. Dzisiejsza publikacja to praca w toku w testnecie. Uważamy, że to wczesne wydanie pomoże w utworzeniu zdrowego ekosystemu wokół StarkNet i jego oprzyrządowania. Chcielibyśmy zaangażować deweloperów w budowanie sieci z nami, a także otrzymywać ciągłe opinie od społeczności.

### **Co jest na planetach StarkNet?**

**Funkcjonalność:**Alfa pozwala programistom pisać i wdrażać kontrakty StarkNet do obliczeń ogólnych. Nie ma białej listy — każdy deweloper może pisać i wdrażać dowolną umowę. Użytkownicy mogą wchodzić w interakcje z tymi umowami, wysyłając do nich transakcje i sprawdzając ich stan. Wszystkie umowy istnieją w jednym państwie2. Aktualizacje w tym stanie są sprawdzone poza łańcuchem i zweryfikowane w łańcuchu — w alfabecie — weryfikacja przeprowadzana jest w testnecie.

**StarkNet OS:**Powyższe funkcje są wspierane przez nowy „system operacyjny”, nazywany StarkNet OS. Oferuje*widocznych*stanów przejścia na StarkNet. Ethereum deweloperzy mogą uważać go za odpowiednik EVM: są odpowiedzialni za powoływanie się na inteligentne funkcje kontraktów, przechowywanie umów itp. Opublikujemy osobny wpis zawierający szczegóły architektury systemu operacyjnego StarkNet.

**Co nie znajduje się w Alfa?**Alfa nadal nie ma kluczowych możliwości, takich jak interakcja L1<>L2, dane w łańcuchu i kompozycja. Więcej na ten temat znajduje się poniżej.

#### **Otrzymywanie stóp Mokre**

Zacznij od naszego[samouczka i dokumentacji](https://www.cairo-lang.org/docs/hello_starknet/).

Następnie możesz przeczytać[przykładowy smart kontrakt AMM](http://cairo-lang.org/docs/hello_starknet/amm.html), który napisaliśmy i wdrożyliśmy na StarkNet. Jest to prosta AMM i możesz z nią wchodzić[tutaj](https://starkware-amm-demo.netlify.app/swap). Jesteś teraz gotowy do pisania i wdrażania inteligentnych kontraktów na StarkNet. Eksplorator bloków StarkNet —[Voyager](https://voyager.online/)— umożliwia każdemu sprawdzenie stanu StarkNet.\
Dzięki mokowi stóp wierzymy, że będziesz lepiej przygotowany do budowania StarkNet, w miarę jak nadal wprowadzamy dodatkowe funkcje. Już teraz planujemy pierwszy hakaton, a także warsztaty dla programistów.

### **Następne kroki dla StarkNet**

Kluczowe możliwości nadal brakujące w Alfie zostaną uruchomione w nadchodzących tygodniach. Są to:

* L1<>L2 Interakcja, np. możliwość wpłaty i wypłaty środków w L1.
* Dane w łańcuchu: publikowanie wszystkich zmian w pamięci na Ethereum.
* Skład: umożliwienie wzajemnej komunikacji między umowami.

Dzięki tym funkcjom będziemy gotowi wprowadzić StarkNet do Ethereum Mainnet. Nazywamy ten krok w ewolucji StarkNet i kiedy go dotrzemy, będziesz mógł budować i bez uprawnień wdrażać Ethereum Mainnet skalable L2 dApps.

#### **Ekosystem StarkNet**

Jesteśmy bardzo podekscytowani przez ekosystem, który tworzy się wokół StarkNet, więc do tej pory będziemy wznawiać podziękowania naszym współpracownikom.

Współpracujemy ściśle z[Nethermin](https://twitter.com/nethermindeth)i z zespołem Nubia,[Alexey Akhunov](https://twitter.com/realLedgerwatch)(Erigon) &[Igor Mandrigin](https://twitter.com/mandrigin)(brama. m),[Iddo Bentov](https://www.cs.cornell.edu/~iddo/),[dOrg](https://twitter.com/dOrg_tech),[Prof. Tim Roughgarden](https://twitter.com/algo_class),[Prof. Jeremy Avigad](https://www.andrew.cmu.edu/user/avigad/)& Yoav Seginer, ostatni — zespół[Paradigm](https://twitter.com/paradigm).\
Nasi wczesni partnerzy —[dYdX](https://twitter.com/dydxprotocol),[Niezmienny](https://twitter.com/Immutable)[DeversiFi](https://twitter.com/deversifi)oraz[Sorare](https://twitter.com/SorareHQ)[Celer](https://twitter.com/CelerNetwork)i inni — dostarczali nam bezcenny wkład od Dnia pierwszego, i pozwól nam zbudować sieć produkcyjną dla rzeczywistych użytkowników.\
Nadal jesteśmy zdumieni jakością treści stworzonych przez społeczność, przez osoby takie jak[Bobbin Threadbare](https://twitter.com/bobbinth),[Daniel Kroni](https://github.com/danielkroeni/cairo-playground/blob/main/anon-bank/README.md),[Adrian Hamelink](https://twitter.com/adr1anh),[perama](https://twitter.com/eth_worm),[Francesco Ceccon](https://twitter.com/ceccon_me)[Ilian Malchev](http://twitter.com/imalchev)i[Aleksandria](https://blockchainpartner.fr/).

Chcielibyśmy zobaczyć, co społeczność stworzy na wszystkich frontach: narzędziach deweloperskich, treściach i oczywiście aplikacjach StarkNet, które będą budowane. Zachowajmy rozmowę w wybranych przez Ciebie ulubionych mediach:[discord](https://discord.gg/uJ9HZTUk2Y),[Twitter](https://twitter.com/CairoLang),[e-mail](mailto:info@starkware.co), i wkrótce korzystając z najbardziej zdecentralizowanych formularzy komunikacji: f2f.

1 Nie jesteśmy wachlarzami terminu ZK-Rollup, jak — matematycznie mówiąc — nie jest to wiedza zerowa, ale wszyscy wiesz, co mamy na myśli

2 W odróżnieniu od oddzielnego stanu utrzymanego dla bieżących wdrożeń StarkEx w Mainnet

**Aktualizacja (listopad 2021):**StarkNet Alpha jest żywa na Ethereum Mainnet