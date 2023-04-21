### TL;DR

* Pierwsza wersja mostu StarkNet, StarkGate Alpha, jest dostępna na**[Testnet](https://goerli.starkgate.starknet.io/)**i**[Mainnet](https://starkgate.starknet.io/)**!
* Oczekujemy opinii społeczności na temat tego, w jaki sposób można poprawić sytuację. Możesz wysłać swoją opinię dla[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)i[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).
* Wdrożenie sieci bazowej wkrótce nastąpi (aktualizacja, 9 maja 2022 r.: StarkGate jest żywe w Mainnet)

Eksploatacja! Jesteśmy skłonni do wydania StarkGate Alpha, pierwszej wersji mostu StarkNet’s Bridge, teraz na żywo na serwerze Goerli, z wdrożeniem Mainnet i szybkim wykonaniem.*

\*(aktualizacja, 9 maja 2022 r.: StarkBate jest żywe w Mainnet)

**Ważne wyłączenie: jest to wersja alfa na StarkBate Alpha (przeczytaj drobny wydruk poniżej!).**

![](/assets/starkgate_01.png)

Zanim przejdziesz dalej, sprawdź to! [StarkBate Testnet](https://goerli.starkgate.starknet.io/),[StarkBate Mainnet](https://starkgate.starknet.io/)

StarkBate służy jako brama pomiędzy Ethereum i[StarkNet](https://starknet.io/)i pozwala użytkownikom robić wszystko, czego mogą oczekiwać od mostu.

#### **Gdzie mogę znaleźć informacje na temat tego, jak działa StarkGate?**

Aby zrozumieć, jak działa StarkBate, przeczytaj[dokumentację techniczną](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)i spójrz na[kod](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate). Pamiętaj, że jest to pierwsza wersja, i zapraszamy twoje opinie i sugestie dotyczące ulepszenia[StarkBate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)i[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).

#### **Które tokeny będą obsługiwane przez StarkGate?**

* StarkGate Alpha na Goerli wspiera ETH i kilka innych tokenów ERC-20. Pełna lista i odpowiednie adresy kontraktów, zarówno na Ethereum, jak i StarkNet, są dostępne w tym[repozytorium](https://github.com/starkware-libs/starknet-addresses).
* Początkowo StarkGate Alpha będzie wspierać ETH tylko w celu umożliwienia wykorzystania mechanizmu opłat. Później dodamy wsparcie dla WBTC, USDC, USDT i DAI. Możesz zobaczyć odpowiednie adresy umów w tym[repozytorium](https://github.com/starkware-libs/starknet-addresses/blob/master/bridged_tokens/mainnet.json).

Dalsza droga, opublikujemy mechanizm dodawania wsparcia dla dodatkowych tokenów.

#### **Jakie ograniczenia bezpieczeństwa będą miały StarkGate Alpha na Mainnet?**

StarkGate Alpha on Mainnet jest uruchamiany z dwoma ograniczeniami – w celu zmniejszenia ryzyka związanego z używaniem wersji Alpha:

1. Całkowita wartość zablokowana (TVL) w mostku na L1 ograniczy ilość każdego typu tokena.
2. Maksymalna kwota w każdej transakcji wysłanej od L1 do L2 (Ethereum→StarkNet) przez StarkGate będzie ograniczona.

Planujemy stopniowo złagodzić te ograniczenia i całkowicie je podnieść w miarę wzrostu zaufania. Zaktualizowane parametry można znaleźć w[dokumentacji StarkGate](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge).

![](/assets/starkgate_02.png)

### Alfa i co to oznacza

Jak zawsze, przypominamy Cię, że StarkNet jest obecnie w fazie**Alfa**:

* Rzeczy mogą się złamać. Jeśli zawiodą katastrofy, Twoje środki mogą zostać utracone (**przeczytaj wyłączenie poniżej**!).
* Zarówno kontrakty StarkNet Alpha jak i StarkBate mogą być aktualizowane bez blokowania czasu. Chociaż oczekujemy ogłoszenia takich ulepszeń znacznie przed upływem czasu, w przypadku nieuchronnych zagrożeń dla bezpieczeństwa (np. w przypadku wykrycia krytycznego błędu), aktualizacja może być zastosowana przy niewielkim ostrzeżeniu lub bez ostrzeżenia.
* Kod mostu oraz części StarkNet Alfa nie zostały jeszcze poddane audytowi. Audyty ABDK i Omdlenia StarkGate Alpha zostaną wkrótce zakończone.

Zachęcamy wszystkich użytkowników do pomocy w ulepszaniu mostu poprzez przekazywanie informacji zwrotnych za pomocą jednej z następujących platform:

1. [Repozytorium StarkBate](https://github.com/starkware-libs/starkgate-frontend)
2. [Zamówienia StarkBate](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate)
3. [Szamany StarkNet](http://community.starknet.io/)

W przypadku pytań i wsparcia deweloperskiego, dołącz do[serwera Discorda StarkNet](https://discord.gg/uJ9HZTUk2Y).

### Zastrzeżenie

***StarkNet Alpha jest nowym i złożonym systemem, który nie został w pełni skontrolowany. To samo dotyczy mostu StarkNet. Podobnie jak wszystkie złożone systemy oprogramowania, zarówno StarkNet, jak i most mogą zawierać błędy, które: w skrajnych przypadkach może doprowadzić do utraty wszystkich Twoich środków. Więc***bieżnika ostrożnie i zapamiętać!******

*Ekosystem StarkNet jest dużym i szybko rozwijającym się zbiorem niezależnych zespołów i jednostek, nad którymi StarkWare nie sprawuje nadzoru i nie ponosi odpowiedzialności. Każdy projekt opracowany przez członków ekosystemu może zawierać błędy, które w skrajnych przypadkach mogą doprowadzić do utraty wszystkich funduszy. Ponadto wraz z wprowadzeniem większej liczby inteligentnych kontraktów wzrasta potencjał niezamierzonych szkodliwych błędów, a nawet złośliwych oszustw i wykopów. Tak więc traktuje wszystkie inteligentne kontrakty na StarkNet, traktując inteligentne kontrakty na Ethereum, i używaj tylko tych, których masz uzasadnione powody, aby zaufać jako bezpieczne.*