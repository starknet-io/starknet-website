### TL;DR

* StarkNet Alpha 0.7.0 uwolniony do Goerli; zapakowany z ulepszeniami
* Kontrakty można teraz ulepszyć za pomocą wzoru aktualizacji serwera proxy
* Kontrakty mogą teraz emitować zdarzenia
* Obsługa długo oczekiwanego numeru bloku i blokowania połączeń systemowych znacznika czasu

### Wprowadzenie

Z radością wydajemy Alpha 0.7.0, wersja z nowymi funkcjami i ulepszeniami. Jednym z najlepszych bodźców do StarkNet w ciągu ostatnich kilku miesięcy było zwiększone zaangażowanie społeczności w kształtowanie przyszłości StarkNet. Ta wersja odpowiada na niektóre palące potrzeby społeczności.

#### Zmiany w konwencji nazewnictwa

Czytnik obserwujący mógł zauważyć, że poprzednia wersja StarkNet Alpha została nazwana Alpha 4, podczas gdy teraz publikujemy Alpha 0.7.0. Postanowiliśmy pominąć numer dedykowanej wersji Alfa i polegać tylko na powiązanej wersji cairo-lang.

### Nowe funkcje

#### Ulepszenie kontraktu

[Wzorzec aktualizacji proxy](https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies)OpenZeppelin jest obecnie w pełni obsługiwany dla aktualizacji kontraktowych w StarkNet. Wzorzec Proxy jest wspólną metodą umożliwiającą modernizację kontraktu przez Ethereum. Alfa 0.7.0 włącza ten wzór nad StarkNet.

Stworzyliśmy[samouczek](https://starknet.io/docs/hello_starknet/default_entrypoint.html), aby zademonstrować podstawową implementację wzorca, i OpenZeppelin jest już ciężko pracować, wdrażając standardową umowę dla wzoru proxy; zobacz[prototyp](https://github.com/OpenZeppelin/cairo-contracts/pull/129).

#### Numer bloku i znacznik czasu blokowania

Alfa 0.7.0 dodaje dwa nowe połączenia systemowe, o które prosi wiele devów. Te połączenia pozwalają na dostęp do numeru bloku i znacznika czasu bloku. Numer bloku zwraca numer bieżącego wykonanego bloku. Blok znacznik czasu zwraca znacznik czasu podany przez Sequencer przy tworzeniu bloku.

Możesz zobaczyć przykład jak korzystać z tych funkcji w[samouczku](https://starknet.io/docs/hello_starknet/more_features.html#block-number-and-timestamp).

#### Wydarzenia

Niespodziana! Funkcja, która została zaplanowana dla przyszłej wersji, znalazła się w tej poprzedniej wersji.

Kontrakty StarkNet wspierają obecnie określanie i emitowanie zdarzeń, co pozwala im na wystawianie informacji o wykonywaniu zleceń dla aplikacji poza łańcuchem dostaw na potrzeby konsumpcji. Deweloperzy Ethereum znajdą semantykę i składnię bardzo podobną do Solidity. Możesz przeczytać[dokumentację](https://starknet.io/documentation/events/)lub zastosować się do[samouczka](https://starknet.io/docs/hello_starknet/events.html), który wyjaśnia tę funkcję.

#### Usunięto %bdyrektywę uiltins

Dyrektywa „ %b” nie jest już potrzebna w umowach StarkNet. Ta zmiana nawiązała do dyskusji społeczności na temat[wzoru rozszerzenia umowy](https://community.starknet.io/t/contract-extensibility-pattern/210)na[StarkNet Shamans](https://community.starknet.io/). Znacznie upraszcza użyteczność tego wzoru rozszerzenia.

Na przykład następująca umowa zostanie zmieniona z:

```
%lang starknet

# Jest to dyrektywa "%builtins"
# Nie jest już potrzebne.
%builtins range_check

@view
func add(x : felt, y : felt) -> (res : felt):
return (res=x + y)
end
```

Do tego:

```
%lang starknet
@view
func add(x : felt, y : felt) -> (res : felt):
return (res=x + y)
end
```

Możesz sprawdzić standardowe kontrakty[ERC-20](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts/token), które używają nowego wzorca.

#### Funkcje zewnętrzne Obsługi Struktów

Alfa 0.7.0 obsługuje przekazywanie i zwracanie tablic struktów w funkcjach zewnętrznych. Ta dodatkowa funkcjonalność pozwala Kontraktom Klienta na lepszą obsługę[wielopoziomowych](https://github.com/OpenZeppelin/cairo-contracts/pull/73#discussion_r753535751).

Multicall jest potężną funkcją Abstrakcji Klienta, która pozwala na wykonywanie wielu połączeń w jednej transakcji. Oczywiste jest użycie**pojedynczej transakcji**, która wywołuje dodatek, a następnie transferFrom.

Z niecierpliwością czekamy na to, co społeczność z nią robi.

#### Ulepszenia do StarkNet CLI

**Wsparcie dla oczekujących bloków**

[Bloki oczekujące](https://starknet.io/documentation/block-structure-and-hash/#pending_block)zostały[wprowadzone](https://community.starknet.io/t/cairo-v0-6-2-api-change-pending-block/195)w ostatniej mniejszej wersji (v0.6.2) i zaoferowane szybsze potwierdzenia transakcji. Ta wersja obejmuje obsługę zapytań o te bloki za pośrednictwem CIS StarkNet.

Aby go użyć, w każdym poleceniu CLI, które przyjmuje numer block_number jako argument (contract_call/get_block/get_code/get_storage_at), możemy zapytać StarkNet w odniesieniu do oczekującego bloku określając block_number=w toku.

**Wsparcie dla umów Klienta**

StarkNet wykorzystuje abstrakcję konta, tj. wszystkie konta są wdrażane jako inteligentne kontrakty. Pierwsze implementacje umów kont zostały wykonane przez[Argent](https://github.com/argentlabs/argent-contracts-starknet)i[OZ](https://github.com/OpenZeppelin/cairo-contracts/blob/main/contracts/Account.cairo), ale oczekujemy znacznie więcej.

W StarkNet wszystkie transakcje muszą przejść przez umowę konta, a CLI pozwala teraz na interakcję z StarkNet Alpha bezpośrednio poprzez umowy konta. Zobacz[samouczek](https://starknet.io/docs/hello_starknet/account_setup.html#setting-up-a-starknet-account)jak go skonfigurować.

Podobna funkcjonalność została również dodana do[StarkNet.py](https://github.com/software-mansion/starknet.py/)i do[Nile](https://github.com/OpenZeppelin/nile)w ostatnim miesiącu.

#### L1<>L2 Wiadomości w ramce testowej

Alfa 0.7.0 wprowadza Postmana. Postman umożliwia programistom korzystanie z frameworka testowego do testowania bardziej skomplikowanych przepływów.

Na wysokim poziomie – widnieje w nim odpowiedzialność StarkNet za przekazywanie komunikatów od L1 do L2 i L2 do L1. Zapewnia to, że wiadomości, które są wysyłane za pośrednictwem umowy o wysyłanie wiadomości Solidity pojawią się w umowie StarkNet, a wiadomości wysłane z kontraktu StarkNet pojawią się w umowie o wysyłaniu wiadomości Solidity.

#### I więcej funkcji

Alfa 0.7.0 zapewnia o wiele więcej funkcji i zmian, takich jak dodanie efektywnej funkcji pierwiastka kwadratowego do wspólnej biblioteki matematycznej. Pełna lista pojawia się w[dzienniku zmian](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.7.0).

### Następny?

Początkowe wsparcie[mechanizmu opłat](https://community.starknet.io/t/fees-in-starknet-alpha/286/29)zostanie opublikowane w ciągu kilku tygodni, jako subwersja StarkNet.

### Więcej informacji?

[starknet.io](https://starknet.io/): dla wszystkich informacji StarkNet, samouczków i aktualizacji.

[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y): dołącz do uzyskania odpowiedzi na Twoje pytania, uzyskaj wsparcie dev i stań się częścią społeczności.

[Szamans StarkNet](https://community.starknet.io/): dołącz do obserwowania (i weź udział!) w dyskusjach badawczych StarkNet.