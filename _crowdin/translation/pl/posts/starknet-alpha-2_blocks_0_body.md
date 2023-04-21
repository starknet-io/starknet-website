### TL;DR

* StarkNet wspiera obecnie kompozycję, która jest główną cechą definiującą fazę konstelacji StarkNet.
* Udostępniamy ramy testowe dla StarkNet - deweloperzy mogą teraz przetestować swoje kontrakty lokalnie i skutecznie.
* To wydanie zawiera kilka znaczących ulepszeń wydajności, takich jak wsparcie dla Merkle-Patricia Tries i wbudowane dla operacji bitwise
* Z przodu ekosystemu:

1. **Standaryzowane Kontrakty**: OpenZeppelin opracuje znormalizowane kontrakty dla StarkNet, tak jak to miało miejsce dla Ethereum!
2. **EVM->Kompilator Kairo**: Zespół Warp @ Nethermin zademonstrował kompilację kodu ERC-20 Solidity do kontraktów StarkNet

### Kontekst

StarkNet jest zdecentralizowaną walidacją bezpermisjonową-Rollup (znaną również jako »ZK-Rollup«). Zapowiedzieliśmy[mapę drogową](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)na początku roku. [Alfa](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), aktualnie działa na publicznej sieci testowej Ethereum, już teraz obsługuje bezwarunkowe wdrażanie inteligentnych kontraktów wdrażających dowolną logikę biznesową, z wiadomościami L1<>L2 i danymi on-chain. Ponadto umożliwia on każdemu użytkownikowi wysyłanie transakcji do sieci bez uprawnień do stylu Ethereum.

Ta wersja: StarkNet Alpha 2, zawiera podstawową cechę, która umożliwia nam przejście od Planet do Constellation: kompozycja między wprowadzonymi inteligentnymi kontraktami.

### Funkcje

StarkNet Alpha 2 wprowadza następujące cechy:

* **Kompozycja:**StarkNet Alpha obsługuje teraz interakcje pomiędzy inteligentnymi kontraktami — przed planem! Piękno tego ulepszenia jest takie, że deweloperzy mogą oczekiwać prawie tego samego doświadczenia co Ethereum; wywołania są synchroniczne i mogą być używane jako wywołania funkcji. Z niecierpliwością czekamy na nowe aplikacje, które skorzystają zarówno z nieograniczonej skali obliczeniowej, jak i z kompozycji umów, jak i ze StarkNet. Aby zrozumieć, jak korzystać z tej funkcji, możesz zacząć obserwować ten[samouczek](https://www.cairo-lang.org/docs/hello_starknet/calling_contracts.html). Chcielibyśmy usłyszeć Twoją opinię i zobaczyć, co budujesz na[dysku StarkNet](https://discord.gg/uJ9HZTUk2Y).
* **Lokalne ramy testowe:**zapytałeś i dostarczyliśmy[lepsze ramy testowe](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/starknet/testing). Pozwoli to programistom przyspieszyć rozwój dApp poprzez testowanie wdrożeń kontraktów StarkNet i interakcji lokalnie — bez żadnych zewnętrznych zależności. Ta wersja zawiera tylko interakcje L2, następne wersje rozszerzą funkcjonalność i ułatwią użytkowanie. Sprawdź samouczek[tutaj](https://www.cairo-lang.org/docs/hello_starknet/unit_tests.html)i chcielibyśmy usłyszeć Twoją opinię na temat tej funkcji.
* **Poprawa wydajności:**

**Drzewa Patricii:**ulepszyliśmy projekt StarkNet, aby wspierać wyższe przepustowości i krótszy odporny czas generowania, przechodząc do zobowiązania państwa Merkle-Patricia Tree ([dokumentacja](https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/cairo/common/patricia_utils.py)). Zmiana ta pozwala na utworzenie znacznie większych bloków, obniżając w ten sposób koszt każdej transakcji. Przejście na bardziej wyrafinowane zobowiązania ze strony państwa było możliwe przez Cairo, język ZKP – główny element systemu operacyjnego StarkNet.

**Operacje bitwise**dodaliśmy[wbudowaną](https://www.cairo-lang.org/docs/how_cairo_works/builtins.html)do wsparcia znacznie bardziej efektywnych operacji bitowych w kontraktach StarkNet ([dokumentacja](https://www.cairo-lang.org/docs/reference/common_library.html#common-library-bitwise)).

* **Goerli:**StarkNet przenosi się z Ropsten do[Goerli](https://goerli.etherscan.io/address/0xee02F29aE9A4988aE064940bF11954d6eafE26Ac)! W końcu uwolniliśmy nasz system od kaprysów Bogów Ropsten. Alpha 2 będzie teraz działać w bardziej stabilnym środowisku rozwoju.

### Ekosystem

Ekosystem StarkNet nieustannie rośnie i z przyjemnością podzielamy się najnowszymi wiadomościami:

* **Standaryzowane umowy**: mamy zaszczyt współpracować z OpenZeppelin w standardowej bibliotece umów StarkNet. Ich kanoniczna praca nad znormalizowanymi kontraktami Ethereum służy nam wszystkim codziennie i jesteśmy pewni, że będą one miały taki wpływ.
* **EVM->Kompilator Kaira**: Zespół Warp Nethermind’s[zademonstrował](https://medium.com/nethermind-eth/warp-your-way-to-starknet-ddd6856875e0)przeszczep umowy ERC-20 z bajtecode EVM do umowy StarkNet i rozmieszczenia na StarkNet. Wysiłki te szybko ruszą, a naszym kolejnym celem jest przetaczanie arbitralnych inteligentnych kontraktów z Yula do Kaira.
* **Maker-on-StarkNet**: a [proposal](https://forum.makerdao.com/t/mip39c2-sp19-adding-the-starknet-engineering-core-unit-sne-001/9745) was submitted to the Maker DAO to implement the Maker protocol over StarkNet. W pierwszej fazie proponuje się most DAI od Ethereum do StarkNet z rozkopaniem DAI na StarkNet.
* **Usługi rewizji finansowej StarkNet/Kairo**: angażujemy wiele firm audytorskich w celu świadczenia usług rewizji inteligentnego kontraktu StarkNet oraz usług rewizji programów Cairo.

### Główna sieć wokół narożnika

Przygotowujemy się do uruchomienia StarkNet Alpha Mainnet, zaczynając stopniowo od białej listy aplikacji. Trwają prace nad kilkoma projektami i do dnia ich przyjęcia są aktywniejsze. Aby dołączyć do drużyny, zaprasza się Cię do kontaktu przez[discord](https://discord.gg/uJ9HZTUk2Y).

**Aktualizacja (listopad 2021):**StarkNet Alpha jest żywa na Ethereum Mainnet