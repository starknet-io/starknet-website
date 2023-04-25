### TL;DR

* Opracowywany jest nowy sekwencer StarkNet.
* Jest open source na licencji Apache 2.0
* Pierwszym celem jest zwiększenie wydajności StarkNet

### Błyszczący nowy sekwencerz

Z przyjemnością ogłaszamy nowy Sequencer StarkNet. W miarę jak stos technologii StarkNet porusza się w kierunku open-source, podążając za[Kair 1.](https://medium.com/starkware/open-sourcing-cairo-1-0-b3100a664bb0)i[Papyrus Full Node](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202), teraz kontynuujemy z nowym sekwenatorem StarkNet. Będzie to open source, dostępne na licencji Apache 2.0 i możesz teraz sprawdzić[repozytorium](https://github.com/starkware-libs/blockifier)!

Budowanie nowego Sequencer jest częścią[mapy drogowej StarkNet](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de), którą przedstawiliśmy kilka miesięcy temu. Wdrożenie nowego sekwencera zacznie się od zamiany**Blockifier**, modułu sekwencera wykonującego wykonanie bloku. Jak wyjaśniono w planie działania, oczekuje się, że przyniesie on korzyści w zakresie wyników StarkNet.

Nasze podejście do budowania tego sekwencera jest takie samo jak podejście, które kierowało nas w StarkNet Alpha. Sekwencja**zostanie zaimplementowana na etapach**, a dziś udostępniamy jej pierwszy moduł. Z czasem nowe komponenty sekwencera zostaną ukończone, aż ostatecznie sekwencerz Rusta całkowicie zastąpi aktualny sekwencerz oparty na Pythonie.

### Co robi sekwencer?

Na StarkNet, po wysłaniu transakcji przez użytkowników, pierwszym zatrzymaniem przejazdu transakcji do STARK jest skalowanie sekwencyjne. W protokole StarkNet sekwenciery są odpowiedzialne za zamawianie transakcji i tworzenie bloków. Po utworzeniu bloku przez sekwencera i zatwierdzeniu go przez protokół konsensusu jego autorzy przejmują i generują dowód dla L1.

![](/assets/1_ndrekwqunjixo_wskdeycw-1.png)

### Otwarte źródło

StarkNet Alpha uruchomiona na platformie Mainnet w listopadzie 2021 r. Od samego początku zobowiązano się do dzielenia się potęgą STARK ze światem.

Dziś publikujemy pierwszy w linii modułów nowego sekwenatora open source. Wdrożenie wszystkich modułów i podmodułów zajmie kilka miesięcy. Otwarte pozyskiwanie wszystkiego umożliwi członkom społeczności przyczynianie się do rozwoju i kontrolowanie kodebazy.

Spowoduje to pojawienie się StarkNet bliżej punktu zdecentralizowanego sekwencjonowania bez uprawnień. Projektujemy teraz zdecentralizowany protokół StarkNet i zachęcamy społeczność do udziału w[badaniach i dyskusji](https://community.starknet.io/t/starknet-decentralized-protocol-consensus/5386).

### Efektywność

Pierwotny sekwencer StarkNet jest w dużej mierze dostosowaniem infrastruktury StarkEx. Teraz potrzebna jest infrastruktura, która zostanie zbudowana szczególnie w celu spełnienia wymogów zdecentralizowanej sieci o wysokich wynikach.

Zbudowany w Rust, nowy sekwencerz jest zaprojektowany i rozwijany z myślą o wydajności. Nowy sekwencerz opiera się również na solidnych fundamentach: Papyrus, nowy[pełny węzeł StarkNet,](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202)będzie zajmować się zarządzaniem państwem, a kairo-rs, nowy Cairo-VM LambdaClass, przyspieszy egzekucję Kairo. Oczekujemy, że nowy sekwencerz poprawi się pod każdym względem. Przewiduje się, że przepustowość i opóźnienie sieci ulegną dramatycznej poprawie wraz z włączeniem tego sekwenatora do StarkNet.

Oczekujemy również, że inne narzędzia infrastrukturalne i rozwojowe będą mogły korzystać z nowego sekwenatora w celu poprawy doświadczenia w zakresie rozwoju. Oczekuje się, że pełna wydajność węzła ulegnie poprawie, jak również wszystkie ramy testowe.

### Summary

Jesteśmy podekscytowani, aby ogłosić dziś nowy sekwencerz open-source. Jego pierwszy moduł jest już dostępny dla społeczności do przeglądu i będzie obserwowany z większą ilością modułów w nadchodzących miesiącach. Cieszymy się również, że możemy zrobić kolejny krok w naszej mapie drogowej na rzecz poprawy wydajności StarkNet. Naszym celem jest zwiększenie efektywności i dostępności sieci i doceniamy poparcie wszystkich, którzy przyłączyli się do nas w tej podróży.