### TL;DR

* Abstrakcja kont Poprawa w duchu EIP-4337

1. Walidacja – Wykonanie separacji
2. Wyjątkowość transakcji jest obecnie zapewniona w protokole (jednorazowo)

* Mechanizm opłat rozszerza się na następujące elementy:

1. Wiadomości L1→L2
2. Zgłoś transakcje

* Niewiele zmian składni Kaira

### Wprowadzanie

Jesteśmy podekscytowani prezentacją StarkNet Alpha 0.10.0. Ta wersja jest kolejnym krokiem w kierunku skalowania Ethereum bez narażania na szwank bezpieczeństwa i decentralizacji.

Ten wpis na blogu krótko opisuje główne cechy tej wersji. Aby uzyskać pełną listę zmian, sprawdź[informacje o wydaniu](https://github.com/starkware-libs/cairo-lang/releases). Aby uzyskać bardziej szczegółowe informacje, sprawdź[dokumentację](https://docs.starknet.io/).

### Zmiany Abstrakcji Klienta

Postępujemy do przodu z[abstrakcją konta StarkNet](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781). Ta wersja wprowadza zmiany zainspirowane[EIP-4337](https://eips.ethereum.org/EIPS/eip-4337).

#### Walidacja/Wykonanie oddzielenia

Do tej pory funkcja \_\_execute\_\_ była odpowiedzialna za walidację transakcji i jej wykonanie. W 0.10.0 przerywamy to sprzężenie i wprowadzamy osobną funkcję \_\_validate\_\_ na konta. Po otrzymaniu transakcji kontrakt na koncie zadzwonią najpierw \_\_validate\_\_, a następnie, jeśli zakończy się powodzeniem, przejdź do \_\_execute\_\_.

Weryfikacja/wykonanie separacji zapewnia rozróżnienie na poziomie protokołu między nieprawidłowymi i cofniętymi (ale ważnymi) transakcjami. Dzięki temu sekwenatorzy będą mogli pobierać opłaty za wykonanie ważnej transakcji niezależnie od tego, czy została ona cofnięta, czy nie.

#### Nonce

W wersji 0.10.0 dodaje się pole nonce w celu wymuszenia niepowtarzalności transakcji na poziomie protokołu. Do tej pory przypadki były obsługiwane na poziomie kontraktu na rachunek, co oznaczało, że transakcja z tym samym hasłem może być zrealizowana dwukrotnie teoretycznie.

Podobnie jak w przypadku Ethereum, każdy kontrakt zawiera obecnie brak licząc liczbę zrealizowanych transakcji na tym koncie. Umowy Klienta będą akceptować tylko transakcje z pasującym niedostępnością, tj. jeśli bieżący nonce konta jest X, to zaakceptuje tylko transakcje z nonce X.

#### Nowa wersja transakcji

Aby umożliwić wsteczną kompatybilność, wprowadzimy te dwie zmiany za pomocą nowej wersji transakcji —[v1](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C). Te zmiany będą miały zastosowanie tylko do nowej wersji, a starsze konta będą nadal mogły wykonywać transakcje w wersji 0.

Uwaga — transakcja v0 jest przestarzała i zostanie usunięta w StarkNet Alpha v0.11.0. Upewnij się, że aktualizujesz aby użyć nowej wersji transakcji.

Aby uzyskać bardziej szczegółowe informacje o wersji transakcji, zapoznaj się z[dokumentacją](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C).

#### Mechanizm opłat

Nowa wersja pozwala na uwzględnienie opłat za dwa wymagane komponenty:

* [Komunikat L1→L2](https://docs.starknet.io/docs/L1-L2%20Communication/messaging-mechanism#l1--l2-message-fees)
* [Zgłoś transakcję](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)

Opłaty te nie będą obowiązkowe w tej wersji i będą wymuszane dopiero począwszy od StarkNet Alpha v0.11.0.

#### Zmiany składni Kaira

Na korzyść stopniowego postępu w kierunku uaktualnienia Kaira,[Kair 1.0](https://www.youtube.com/watch?v=Ny4Rv6ztINU), ta wersja zawiera kilka zmian składni.

Aby zminimalizować niedogodności, wydanie wersji będzie zawierało[skrypt migracji](https://www.youtube.com/watch?v=kXs59zaQrsc), który automatycznie zastosuje powyższe zmiany. Więcej szczegółów[znajdziesz tutaj](https://github.com/starkware-libs/cairo-lang/releases).

### Co dalej?

* W ciągu kilku tygodni planujemy wprowadzić podobieństwo do sekwencjonowania, umożliwiając szybszą produkcję bloków (V0.10.1)
* Wkrótce zakończymy ostatnią część, która musi zostać uwzględniona w opłacie - rozmieszczenie rachunku
* Kair 1.0 wydanie! Więcej informacji na ten temat znajdziesz w nadchodzącym poście.

### Jak mogę być bardziej zaangażowany?

* Przejdź do[starknet.io](https://starknet.io/)po wszystkie informacje StarkNet, dokumentację, samouczki i aktualizacje.
* Dołącz do[StarkNet Discord](http://starknet.io/discord)dla deweloperskiego wsparcia, ogłoszeń ekosystemu i stania się częścią społeczności.
* Odwiedź[Forum StarkNet](http://community.starknet.io/), aby być na bieżąco i uczestniczyć w dyskusjach badawczych StarkNet.

Zawsze chętnie otrzymujemy opinie na temat naszej[dokumentacji](https://docs.starknet.io/)!