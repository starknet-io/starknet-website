### TL;DR

* StarkNet Alpha 0.8.0 przedstawia początkową wersję mechanizmu opłat (opcjonalnie do StarkNet Alpha 0.9.0.)
* Nowe API wzywa do szacowania opłaty transakcyjnej za uzyskanie śladu transakcji, umożliwiając lepszą widoczność i debugowanie
* Poprawa wydajności sekwencera StarkNet
* Anulowanie komunikatu L1→L2

### Wprowadzenie

Jak udostępniono w naszej[mapie drogowej](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51), po ostatnim dodaniu funkcji i funkcji StarkNet, nasza uwaga przenosi się na ulepszenia wydajności i projektowanie protokołów (w tym opłaty, pobranie rachunku, decentralizacja itp.). StarkNet Alpha 0.8.0 rozpoczyna proces dodawania opłat transakcyjnych i poprawy wyników sekwencyjnych.

Plan działania dotyczący StarkNet zawiera mechanizm opłat, a także postępując zgodnie z tą wersją robimy ważny krok bliżej pełnej wydajności platformy.

Dodanie mechanizmu opłat stanowi zasadniczy element projektu wydajności StarkNet. Bez minimalnej opłaty ryzykujemy, że mamy do czynienia z nieskończonymi transakcjami, co uniemożliwiłoby wykonanie systemu, niezależnie od optymalizacji sekwencyjnej.

### Funkcje

#### Obsługa opłat

StarkNet Alpha obsługuje teraz pierwszą wersję mechanizmu opłat. Mechanizm ten ma zasadnicze znaczenie nawet na tym wczesnym etapie, a nawet w przypadku Testnet, z dwóch głównych powodów:

1. Pozwala on programistom na rozpoczęcie optymalizacji swoich umów zgodnie z modelem kosztów StarkNet.
2. Jest to kluczowy odpowiednik poprawy wydajności systemu, ponieważ zapobiega on spamowaniu poprzez wysyłanie niezliczonych transakcji.

Ta wersja wprowadza elementy niezbędne dla programistów do włączenia opłat do ich narzędzi i aplikacji. Deweloperzy mogą teraz oszacować opłatę transakcyjną wywołując punkt końcowy \`estimate_fee\` i pobierać opłatę w ramach realizacji transakcji.

Ponieważ ta funkcja nie jest kompatybilna wstecz, nie będziemy wymuszać opłacenia opłaty w tym momencie, ale tylko z wersji 0. .0, który ma zostać uwolniony w ciągu kilku tygodni. To stopniowe przejście umożliwi użytkownikom i programistom dostosowanie się do nowego modelu.

#### Struktura opłat 0.8.0

W dniu 0.8.0 opłaty będą pobierane wyłącznie na podstawie złożoności obliczeniowej, podczas gdy StarkWare nadal będzie subsydiować koszty komunikacji L1. W ciągu najbliższych kilku tygodni zaktualizujemy mechanizm opłat, aby uwzględnić koszty związane z operacją L1 i komunikacją. Płatność zostanie zebrana w sposób atomowy wraz z realizacją transakcji na StarkNet L2. Zobacz[dokumentację opłat](https://starknet.io/documentation/fee-mechanism/), aby uzyskać szczegółowy opis.

Należy zauważyć, że będziemy ściśle współpracować ze społecznością programistów w celu ulepszenia i rozwinięcia mechanizmu opłat w miarę ewolucji StarkNet.

#### L2 Goerli ETH Faucet

Uruchomiliśmy[L2 Goerli ETH Faucet](https://faucet.goerli.starknet.io/), aby umożliwić użytkownikom wnoszenie opłat w Testnet. Ten Faucet wysyła niewielkie kwoty L2 Goerli ETH na Twój adres konta StarkNet Goerli, z którego możesz skorzystać do uiszczenia opłaty transakcyjnej.

#### Trace API

Dodaliśmy możliwość pobrania śladu wykonania transakcji do API StarkNet. Wewnątrz śladu transakcji wszystkie połączenia wewnętrzne są widoczne, wraz z informacjami takimi jak zużyte zasoby wykonawcze, wartość zwrotu, wyemitowane zdarzenia i wysłane wiadomości. To nowe zaproszenie upraszcza zrozumienie zachowań kontraktu lub debugowania transakcji. Ponadto narzędzia takie jak[Voyager](https://voyager.online/)lub[StarkTx](https://starktx.info/)mogą zawierać te dane; zapewnienie użytkownikom bardziej szczegółowej analizy, w szczególności w odniesieniu do interakcji kont kont.

Aby uzyskać ślad, możesz użyć \`get_transaction_trace\` w CIS StarkNet. Aby zobaczyć przykład jak z niego korzystać, sprawdź[samouczek](https://www.cairo-lang.org/docs/hello_starknet/cli.html?#get-transaction-trace).

#### Anulowanie wiadomości

Dodatkową cechą tej wersji jest możliwość anulowania komunikatów L1→L2. Dlaczego jest to przydatne? Wyobraź sobie, że użytkownik przenosi składnik aktywów z L1 do L2. Przepływ zaczyna się od wysłania przez użytkownika zasobu do mostka StarkNet i odpowiedniego generowania komunikatu L1→L2. Teraz wyobraź sobie, że zużycie wiadomości L2 nie działa (może się to zdarzyć z powodu błędu w umowie dApps'a). Może to skutkować utratą przez użytkownika przechowywania swoich aktywów na zawsze.

Aby zmniejszyć to ryzyko, Zezwalamy kontraktowi, który zainicjował komunikat L1→L2 na jego anulowanie – po zadeklarowaniu zamiaru tego działania i oczekiwaniu na odpowiednią ilość czasu (patrz[dokumentacja](https://starknet.io/l1-l2-messaging/#cancellation)).

### Poprawa wydajności

Ta wersja znacznie zmniejsza czas, jaki sekwencerz musi wykonać strumień przychodzących transakcji z Caira.

To tylko pierwszy krok! Naszym kolejnym ważnym etapem skuteczności działania, który ma zostać wkrótce wprowadzony (0,9.0), jest równoległe wykonanie sekwencyjnego, a wiele więcej optymalizacji oczekuje się na drogę.

### Co teraz?

Przeczytaj dokumentację techniczną[tutaj](https://starknet.io/documentation/fee-mechanism/).

Przejdź do[starknet.io](https://starknet.io/), dla wszystkich informacji StarkNet, dokumentacji, samouczków i aktualizacji.

Dołącz do[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)dla deweloperskiego wsparcia, ogłoszeń ekosystemu i stania się częścią społeczności.

Odwiedź[StarkNet Shamans](https://community.starknet.io/), aby być aktualizowanym i uczestniczyć we wszystkich dyskusjach badawczych StarkNet.