### TL;DR

* **Opłaty są teraz obowiązkowe w Testnet, wkrótce w Mainnet**
* Szablon fabryki kontraktu jest teraz możliwy!
* StarkNet wprowadza klasy umów
* Połączenie delegaturowe jest zastąpione wywołaniem biblioteki

### Wprowadzenie

Z przyjemnością wprowadzimy StarkNet Alpha 0.9.0! Jest to ważna wersja, w której StarkNet podejmuje istotne kroki w kierunku osiągnięcia dojrzałości, wraz ze znaczącym uzupełnieniem zarówno funkcjonalności, jak i projektu protokołu.

**Opłaty są obowiązkowe**(obecnie tylko na Testnet, do wersji 0.9. będzie żyć na platformie Mainnet) — każdy rozwijający się system L2 musi posiadać własny niezależny system opłat. Po wprowadzeniu opłat jako opcjonalnej funkcji w wersji 0.8. , teraz mamy pewność, że zostaną one włączone jako główny element protokołu i uczynią je obowiązkowymi. Więcej szczegółów poniżej.

Inną istotną zmianą na poziomie protokołu jest wprowadzenie klas umów oraz oddzielenia klasy/instancji. Pozwala to na bardziej proste korzystanie z funkcji \`delegate_call\` i wdrożeń z istniejących kontraktów, umożliwiając schemat fabryczny w StarkNet.

### Klasy umów

Biorąc pod uwagę inspirację z programowania ukierunkowanego na cel, rozróżniamy między kodeksem umowy a jego wdrażaniem. Czynimy to, dzieląc kontrakty na klasy i przypadki.

**klasa kontraktu**jest definicją kontraktu: jego bajtekod Kaira, wskazówki, nazwy punktów wejścia i wszystko, co jest konieczne do jednoznacznego zdefiniowania semantyki. Każda klasa jest identyfikowana za pomocą skrótu klasy (analogicznie do nazwy klasy z języków OP).

**instancja kontraktu**lub po prostu kontrakt jest wykonaną umową odpowiadającą określonej klasie. Należy zauważyć, że jedynie przypadki związane z umową zachowują się jako kontrakty, tj. mają własne przechowywanie i podlegają płatnościom za pomocą transakcji/innych umów. Klasa kontraktu nie musi mieć zainstalowanej instancji w StarkNet. Wprowadzenie klas wiąże się z kilkoma zmianami protokołu.

#### Transakcja „Deklarowana”

Wprowadzamy nowy rodzaj transakcji do StarkNet:["zadeklarować](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)transakcję, która pozwala na zadeklarowanie klasy**.**W przeciwieństwie do transakcji \`deploy\` nie wprowadza to instancji tej klasy. Stan StarkNet będzie zawierał listę zadeklarowanych klas. Nowe klasy mogą być dodane poprzez nową transakcję \`declare\`.

#### „Rozmieszczenie” fabryki połączeń telefonicznych i kontraktów.

Gdy klasa zostanie zadeklarowana, to znaczy odpowiadająca jej transakcja \`declare\` została zaakceptowana, możemy wdrożyć nowe instancje tej klasy. W tym celu używamy nowego połączenia systemowego \`deploy\`, które przyjmuje następujące argumenty:

* Skrót klasy
* Sól
* Argumenty konstruktora

W systemie „wdrożenia” zostanie następnie uruchomiona nowa instancja tej klasy umów, którego[adres](https://docs.starknet.io/docs/Contracts/contract-address)zostanie określony na podstawie trzech parametrów powyżej i adresu wdrożeniowego (kontrakt, który wywołał połączenie systemowe).

Włączenie wdrożenia w ramach transakcji wywołującej pozwala nam na ustalanie cen i pobieranie opłat za wdrożenia, bez konieczności różnego traktowania wdrożeń i wywołań. Więcej informacji na temat opłat za wdrożenie znajdziesz w[dokumentacji](https://docs.starknet.io/docs/Fees/fee-mechanism#deployed-contracts).

Ta funkcja wprowadza fabryki kontraktów do StarkNet, ponieważ każda umowa może powoływać się na system \`deploy\` tworząc nowe kontrakty.

#### Przejście z „Delegat Call” na „Library Call”

Wprowadzenie klas pozwala nam zająć się dobrze znanym problemem w mechanizmie zaproszenia delegatów Ethereum: gdy zamówienie wykonuje delegowany apel do innej umowy, potrzebuje tylko swojej klasy (kodu), a nie rzeczywistej instancji (przechowywania). W związku z tym niewłaściwą praktyką jest określenie konkretnej instancji kontraktu przy wykonywaniu wezwania przez delegata (rzeczywiście, doprowadził do kilku błędów w zamówieniach Ethereum) – tylko klasa musi zostać określona.

Stare połączenie systemowe \`delegate_call\` staje się przestarzałe (stare kontrakty, które są już rozmieszczone, będą nadal działać, ale**umów używając \`delegate_call\` nie będzie już kompilował**), i jest zastąpiony nowym wywołaniem systemowym library_call który otrzymuje skrót klasy (poprzednio zadeklarowanej klasy) zamiast adresu instancji umowy. Zauważ, że w rozmowach bibliotek uczestniczy tylko jedna umowa, a więc unikamy dwuznaczności między umową o połączenie a umową o wdrożenie.

#### Nowe punkty końcowe API

Dodaliśmy dwa nowe punkty końcowe do API, umożliwiając pobieranie danych związanych z klasą:

* \`get_class_by_hash\`: zwraca definicję klasy z podaniem skrótu klasy
* \`get_class_hash_at\`: zwraca skrót klasy wdrożonej umowy ze względu na adres umowy

Należy zauważyć, że aby uzyskać klasę rozmieszczonego kontraktu bezpośrednio, a nie przechodzić przez dwie metody wymienione powyżej, możesz użyć starego punktu końcowego \`get_full_contract\` który zostanie zmieniony w przyszłych wersjach. Wszystkie wymienione powyżej punkty końcowe są również użyteczne z[CLI StarkNet](https://docs.starknet.io/docs/CLI/commands).

#### Opłaty

Kontynuujemy włączanie opłat do StarkNet, nadając im obowiązek (najpierw na Testnet, a później również na Mainnet) dla ``[invoke](https://docs.starknet.io/docs/Blocks/transactions#invoke-function)\` transakcji. Transakcja \`declare\` nie będzie wymagała opłat w tym punkcie. Podobnie \`wdrożyj`` transakcji również nie będzie wymagała opłaty, jednak należy pamiętać, że ten typ transakcji będzie najprawdopodobniej przestarzały w przyszłych wersjach.

W tym obszarze pozostaje kilka otwartych pytań, z których najważniejsze to sposób pobierania opłat za deklaracje umów i rozmieszczenie rachunków StarkNet. W przyszłych wersjach zajmiemy się tymi zagadnieniami.

### Co dalej?

Zgodnie z naszą mapą drogową, którą[ogłosiliśmy w lutym](https://medium.com/starkware/starknet-on-to-the-next-challenge-96a39de7717), zobowiązaliśmy się ogólnie poprawić wydajność StarkNet. a zwłaszcza wyniki sekwenatora w celu uzyskania szybszych informacji zwrotnych o swoich transakcjach. W następnej wersji planujemy wprowadzić podobieństwo do sekwencyjnego, umożliwiając szybszą produkcję bloków.

Następna duża wersja StarkNet skoncentruje się na strukturze kont StarkNet w sposób podobny do[ERC-4337](https://medium.com/infinitism/erc-4337-account-abstraction-without-ethereum-protocol-changes-d75c9d94dc4a). Dzięki temu sfinalizujemy sposób postępowania z rachunkami StarkNet, czyniąc kolejny ważny krok w kierunku masowej adopcji!