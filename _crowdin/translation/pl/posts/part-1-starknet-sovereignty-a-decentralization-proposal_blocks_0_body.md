### TL;DR

* decentralizacja StarkNet obejmuje natywny token i nową podstawę.
* Token StarkNet jest używany do zarządzania oraz jako składnik płatności i stawek.
* Dziesięć miliardów tokenów zostało wybitnych, a ich przydział się rozpoczął.
* Obecnie tworzona Fundacja StarkNet będzie miała za zadanie utrzymanie StarkNet jako dobra publicznego.

StarkNet jest rollupem ważności bezpermisjonowej zdecentralizowanej warstwy 2 (L2), zbudowanym w celu umożliwienia Ethereum skalowania za pomocą protokołów kryptograficznych zwanych STARK, bez naruszania podstawowych zasad decentralizacji, przejrzystości, włączenia społecznego i bezpieczeństwa.

Alfa StarkNet uruchomiona na Mainnet w listopadzie 2021 r. W ekosystemie powstaje niecały rok, a nad nim pracują dziesiątki zespołów na całym świecie. Teraz nadszedł czas, aby przyspieszyć decentralizację sieci, aby osiągnąć żywotność, opór cenzury, przejrzystość i integralność wymagane od L2 na Ethereum.

Decentralizacja oznacza, że działanie sieci, a jej rozwój nie będzie polegał na żadnym pojedynczym podmiocie, w tym na StarkWare. Bezpermisjonowy mechanizm wyboru lidera dowodu, jak również płatność w łańcuchu opłat transakcyjnych, przy użyciu natywnego tokenu, umożliwi niezawodne działanie sieci jako L2 na Ethereum nawet w przypadku przestawienia się StarkWare Decyzje dotyczące bieżącej konserwacji StarkNet zostaną przeniesione z StarkWare na społeczność. Kluczowymi elementami tych działań będą token StarkNet i Fundacja.

Ten post, pierwszy z trzech opublikowanych jednocześnie, podsumowuje dotychczasową podróż StarkNet i wprowadza token StarkNet oraz Fundację StarkNet. [następny post](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)omawia model zarządzania StarkNet, a[trzeci](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6)koncentruje się na modelu tokenów StarkNet.

*Dziękujemy następującym zwolennikom StarkNet (alfabetycznie uporządkowanym) za ich komentarze do projektu tych wpisów: Guily_Gioza (Topologia), Itamar Lesuisse (Argentyna), Jonas Nelle (Pontis), Martin Triay (OpenZeppelin), Polynya, Sylve Chevet (Briq) i Tomasz Stan<unk> czak (żelatyna).*

### Dotychczasowa historia

[StarkNet](https://starknet.io/)jest zbudowany z kryptografii i otwartego ekosystemu. **kryptografia**to**[STARK](https://eprint.iacr.org/2018/046.pdf)**. Są to protokoły oparte na matematyce, która skaluje Ethereum według rzędu wielkości. Nie wymagają one żadnej zaufanej konfiguracji, są zabezpieczone po kwancie i mogą być rozmieszczone w sposób zwięzły na każdą skalę. W skład ekosystemu wchodzą główni deweloperzy, którzy od lat chcieli zbudować infrastrukturę i narzędzia do skalowania technologii blockchain, jak również nowe i kreatywne domeny aplikacji, które stają się możliwe po rozszerzeniu mocy obliczeniowej Ethereum.

StarkNet zapewnia wszystkim programistom i użytkownikom dostęp do korzyści skali i bezpieczeństwa wynikających z STARK, w celu skalowania Ethereum przy zachowaniu podstawowych wartości Ethereum. STARK zostały wynalezione przez współzałożycieli StarkWare, którzy najpierw użyli ich do zbudowania rozwiązania skalowania[StarkEx](https://starkware.co/starkex/)dla klientów. Następnie StarkWare i inne zespoły deweloperskie (łącznie „Core Contributors”) zbudowały[StarkNet](https://starkware.co/starknet/), publiczny, zdecentralizowana i pozbawiona uprawnień infrastruktura w celu zapewnienia, że te technologie skalowania są stale dostępne dla wszystkich.

Uruchomienie StarkNet Alpha prawie rok temu doprowadziło do powstania większego ekosystemu, który jest zaangażowany w budowę i pielęgnowanie StarkNet. Na całym świecie istnieje wiele zespołów deweloperów budujących swoją podstawową infrastrukturę, a także nowych aplikacji.

### **Sposób decentralizacji**

Technologia STARK jest dojrzała i bezpieczna, ale StarkNet nie osiągnęła statusu dobra publicznego, takiego jak Ethereum czy Internet. Aby StarkNet osiągnął ten cel, należy nadal zdecentralizować jego zarządzanie, funkcjonowanie i rozwój. Zostanie to ułatwione dzięki dwóm mechanizmom:**StarkNet Foundation**i**StarkNet Token**.

#### Fundacja

jako non-profit, misją Fundacji będzie utrzymanie StarkNet jako dobra publicznego – towaru lub usługi udostępnianej wszystkim członkom społeczeństwa. StarkNet to bezwarunkowa infrastruktura, która powinna być dostępna dla wszystkich. Musi być utrzymywana w dobrym stanie, aby była bezpieczna i wydajna do użytku publicznego. Nie może ona również dyskryminować użytkowników.

Fundacja będzie finansowana z jednorazowej dotacji StarkNet Tokens. Będzie ona zachęcać do rozwoju oddolnych mechanizmów podejmowania decyzji na szczeblu wspólnotowym w zakresie istotnych kwestii technologicznych, takich jak aktualizacja protokołów, rozstrzyganie sporów i finansowanie dóbr publicznych.

#### Token

Token StarkNet jest potrzebny do obsługi ekosystemu, utrzymania i zabezpieczenia go, podejmowania decyzji o swoich wartościach i celach strategicznych oraz kierowania jego ewolucją. Ten token będzie wymagany do: (i) zarządzania, (ii) uiszczania opłat transakcyjnych na StarkNet oraz (iii) udziału w mechanizmie konsensusu StarkNet.

Wybiliśmy pierwsze dziesięć miliardów żetonów, które są przydzielane głównym współtwórcom ekosystemu StarkNet, w tym inwestorom StarkWare i StarkWare, partnerom programistycznym StarkNet, a także Fundacji. Wkrótce (cel: wrzesień 2022 r.) token przejdzie do Ethereum jako token ERC-20 i zostanie poproszony o użycie go w zarządzaniu i głosowaniu nad modernizacją sieci. Później opłaty StarkNet będą uiszczane tylko w tym tokenu, przy jednoczesnym zapewnieniu dobrego doświadczenia użytkowników zainteresowanych uiszczaniem opłat w ETH. Następnie rozpocznie się automatyczne wykrywanie dodatkowych tokenów StarkNet (tj. liczba krążących tokenów będzie większa niż dziesięć miliardów).

Model StarkNet Token podkreśla rekompensatę dla deweloperów za ich pracę. Część nowych opłat za wydobycie i transakcje – opłat ocenianych za wykorzystanie StarkNet – zostanie przyznana programistom infrastruktury podstawowej i programistom inteligentnych kontraktów za prace, które wykonali w celu opracowania i uruchomienia protokołu, oprócz rekompensaty dla operatorów StarkNet za pracę wykonaną przez nich w celu jego eksploatacji.

Pełne uzasadnienie nowego i dedykowanego tokena StarkNet jest wyjaśnione w naszym[drugim poście](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), oraz zasady projektowania tokena StarkNet i wstępnego przydziału zostały omówione na[trzecim stanowisku](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6).