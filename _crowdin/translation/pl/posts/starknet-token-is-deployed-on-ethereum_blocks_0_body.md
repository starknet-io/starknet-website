### TL;DR

* Token StarkNet (STRK) jest teraz uruchomiony na Ethereum Mainnet
* **Uważaj na oszustwa!**Żetony StarkNet nie są oferowane do sprzedaży
* Ustalenie mechanizmu dystrybucji tokenów przez Fundację będzie wymagało czasu.
* Tokeny będące w posiadaniu udziałowców StarkWare, pracowników i niezależnych partnerskich programistów są zablokowane na okres czterech lat, stopniowe uwalnianie rozpoczynające się po roku
* Token przyczyni się do decentralizacji StarkNet dzięki wykorzystaniu go do głosowania, stawienia na siebie i uiszczania opłat

Dzisiaj[StarkNet](https://starknet.io/)robi kolejny krok w kierunku decentralizacji. Token StarkNet jest teraz[na Ethereum](https://etherscan.io/address/0xca14007eff0db1f8135f4c25b34de49ab0d42766). Szybkie ponowne ograniczenie: STRK będzie używany jako token stawkowy do udziału w mechanizmach konsensualnych StarkNet jako token zarządzania oraz do uiszczania opłat za transakcje. Uzasadnienie dla każdego z tych narzędzi przedstawiono w[naszej propozycji decentralizacji](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), w sekcji zatytułowanej „Do czego będą użyte tokeny?”

***Uważaj na oszustwa:**w momencie pisania nie ma możliwości zakupu tokenów StarkNet; ten okres zakazu sprzedaży pozostanie w mocy do czasu powiadomienia[Fundacji StarkNet](https://twitter.com/StarkNetFndn); śledzić oficjalną komunikację Fundacji StarkNet, aby dowiedzieć się o wszelkich aktualizacjach statusu STRK. You can report scams and check for other reports of scams in the [scam-report](https://discord.gg/qypnmzkhbc) channel on the [StarkNet Discord](http://starknet.io/discord) server.*

To stanowisko wyjaśnia proces przydzielania tokenów oraz sposób, w jaki wdrożone kontrakty tokenów służą dwóm z trzech zaprojektowanych narzędzi tokenów, a mianowicie głosowaniu i stawkowaniu. Trzecia spółka komunalna – uiszczanie opłat StarkNet – zostanie omówiona w późniejszym terminie.

### Planowanie procesu alokacji tokenów

Zaproponowaliśmy wcześniej[plan](https://medium.com/starkware/part-3-starknet-token-design-5cc17af066c6)dotyczący wstępnego przydziału tokenów. Tokeny przydzielone akcjonariuszom, pracownikom i niezależnym deweloperom oprogramowania są zablokowane na cztery lata, przy czym harmonogram stopniowego wydawania rozpoczyna się po jednym roku. Zablokowane tokeny mogą być używane do głosowania i stawkowania, ale nie mogą być przekazywane ani wymieniane. Niektóre tokeny są zablokowane za pomocą dedykowanego inteligentnego kontraktu na Ethereum, podczas gdy inne tokeny są zablokowane za pośrednictwem powierników.

Oddzielnie, 50,1% istniejących tokenów StarkNet przydziela się Fundacji StarkNet, która ma być wykorzystana do osiągnięcia jej[celów](https://medium.com/@StarkNet_Foundation/welcome-to-the-world-starknet-foundation-7bd55d5dbc59)(por.[Post StarkWare](https://medium.com/starkware/introducing-the-starknet-foundation-bd4b4379fbb)). Te tokeny nie są zablokowane. Fundacja będzie jednak potrzebowała czasu na sformułowanie dokładnego mechanizmu dalszej alokacji tych tokenów i udostępni swoje plany w odpowiednim czasie.

#### Dlaczego lokalizacja?

Zablokowanie tokenów dla wyżej wymienionego okresu gwarantuje, że aktualni twórcy będą zgodni z długoterminowymi zachętami StarkNet. Zniechęca to również do spekulacji tokenem z wyprzedzeniem do powszechnego wykorzystania go zgodnie z jego przeznaczeniem: zabezpieczenia sieci, uiszczania opłat i decentralizacji zarządzania.

Następnie wyjaśniamy, w jaki sposób token implementacji wspiera głosowanie i stawkę.

### Głosowanie

Fundacja będzie odpowiedzialna za ułatwianie należytego zarządzania i formułowanie mechanizmów głosowania. Token StarkNet został zaprojektowany tak, aby umożliwić zarówno bezpośrednie głosowanie, jak i szereg mechanizmów delegowania.

#### Głos L1

Wdrożenie ERC-20 obecnie obejmuje**opcjonalne**użycie[modułu delegowania Compound](https://docs.compound.finance/v2/governance/). Moduł ten jest powszechnie wykorzystywany do głosowania w łańcuchu. Powodem, dla którego jest on opcjonalny w StarkNet, i domyślnie wyłączony jest koszt opłaty. Włączenie tego oznacza, że każdy transfer tokenów StarkNet na L1 wymaga dodatkowego gazu potrzebnego wyłącznie do śledzenia zmian w uprawnieniach do głosowania.

#### Non-L1 voting

Alternatywy dla głosowania w łańcuchu L1 z modułem delegowania Compound obejmują głosowanie poza łańcuchem, a także systemy głosowania w łańcuchu oparte na StarkNet (takie jak[SnapshotX](https://snapshot.mirror.xyz/cUOrwdtEs5PvNh0sqYWWxPjt8GdJWn_Qp3cl7E3_8IU)). Te alternatywy, które znacznie zmniejszają zużycie gazu w przypadku transferów L1, nie wymagają wyraźnego wsparcia z obecnie stosowanego kodu ERC-20, a zatem są z natury wspierane.

Jak wspomniano powyżej, wszystkie tokeny - zablokowane i odblokowane - będą użyteczne w mechanizmie głosowania StarkNet.

### Tyczenie

Operacja bez uprawnień StarkNet i odporna na cenzurę wymaga losowego wyboru sekwencerów. Prawdopodobieństwo wybrania węzła do sekwencji i zaproponowania bloku jest proporcjonalne do liczby tokenów StarkNet które węzły stawek. Uzasadnienie użycia tokenów StarkNet (raczej niż Ethereum lub Bitcoin) jest wyjaśnione w[wniosku dotyczącym zarządzania](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), oraz szczegółowe informacje na temat zainteresowania, sekwencjonowanie i tworzenie bloków na StarkNet są w trakcie[dyskusji prowadzonych przez społeczność](https://community.starknet.io/t/starknet-decentralized-protocol-introduction/2671), i nie zostały jeszcze sfinalizowane.

Podobnie jak w przypadku głosowania, tokeny mogą być używane do stawienia na stok nawet wtedy, gdy są zablokowane. Przyczynia się to do różnorodności operatorów StarkNet i odporności StarkNet.

### Summary

Wdrożenie kontraktów StarkNet Token na Ethereum jest kolejnym krokiem w decentralizacji StarkNet.

Apelujemy do deweloperów i użytkowników, aby uważali się na oszustwa! W chwili publikacji żadne tokeny nie są zbywalne i ten status niehandlowy pozostanie w mocy do czasu powiadomienia przez Fundację StarkNet.

Aby uzyskać więcej pytań, możesz przejść do kanału[Token-discussion](https://discord.gg/qypnmzkhbc)na serwerze[StarkNet Discord](http://starknet.io/discord).