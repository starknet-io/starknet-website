### TL;DR

* Kair 1.0 pierwsza wersja jest tutaj!
* Deweloperzy mogą zacząć pisać i testować programy Kair 1.0
* Parytet funkcji ze starszą wersją Kaira zostanie osiągnięty w nadchodzących tygodniach
* Wsparcie dla kontraktów StarkNet zostanie dodane w nadchodzącej wersji StarkNet Alpha

### Kontekst

Z przyjemnością ogłosimy, że pierwsza publiczna wersja Kairu 1.0 jest już dostępna. Stanowi to ważny krok w rozwoju sytuacji w Kairze, która została po raz pierwszy wprowadzona w 2020 r. jako język programowania tuing-complete w celu skutecznego pisania programów łatwych do realizacji w STARK. Kair 1.0 to język wysokiego szczebla podobny do Rusta. Podobnie jak Rust, ma on na celu umożliwienie programistom łatwego pisania kodu, który jest efektywny i bezpieczny.

Od samego początku Cairo był używany do tworzenia aplikacji warstwy 2, które obsłużyły[transakcje o wartości ponad 790 miliardów dolarów, przetworzyły ponad 300 milionów transakcji i wybiły ponad 90 milionów NFT](https://dashboard.starkware.co/starkex)wszystkie działały poza łańcuchem i rozliczały się na Ethereum z integralność matematyczna gwarantowana przez dowody STARK. Kair stał się czwartym najczęściej używanym językiem programowania w ekosystemie[blockchain](https://defillama.com/languages)na ogół. Wraz z uwolnieniem Kaira 1. , dążymy do uczynienia języka jeszcze bardziej dostępnym i przyjaznym dla użytkownika, wprowadzając jednocześnie nowe funkcje, które zwiększają bezpieczeństwo i wygodę.

Jedną z najważniejszych zmian w Kairze 1.0 jest składnia. Znaleźliśmy inspirację od**Rust**, aby stworzyć bardziej przyjazny dla programisty język, który jest łatwiejszy do czytania i pisania. Nowa wersja Kaira pozwala na pisanie bezpieczniejszego kodu (mocno wpisywany, własność i zaciąganie pożyczek itp.), a jednocześnie jest bardziej wyrazista.

Kair 1.0 wprowadza również Sierrę, nową reprezentację pośrednią, która zapewnia**co**wykonanie kaira może być udowodnione. Dzięki temu Kair 1.0 jest szczególnie dobrze przygotowany do użytku w bezpermisyjnej sieci, takiej jak StarkNet, gdzie może zapewnić solidną ochronę DoS i odporność cenzury. Więcej informacji na temat Sierra znajdziesz w naszym[poprzednim](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)postie.

## Pierwszy smak!

### Co możesz dzisiaj zrobić?

Deweloperzy mogą zacząć pisać, kompilować i testować programy Kaira 1.0! Zachęcamy programistów do eksperymentowania z Kairem 1.0 i przyzwyczajania się do nowych składni i funkcji.

Ponieważ Kair 1.0 jest nadal aktywnie rozwijany, a nowe funkcje są stale dodawane, sprawdź[repozytorium Kaira](https://github.com/starkware-libs/cairo/), aby uzyskać najnowsze aktualizacje.

### Co dalej?

W chwili obecnej Kair 1. nadal brakuje niektórych funkcji obsługiwanych w starszej wersji Cairo ([zobacz tę tabelę po więcej informacji](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)). Nasz następny kamień milowy, oczekiwany w ciągu najbliższych kilku tygodni, zapewni parytet funkcji Kaira 1.0 ze starszą wersją. Możesz śledzić postęp w kierunku tego kamienia milowego[tutaj](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md).

### Obsługa Starknet

Obsługiwane jest pisanie kontraktów StarkNet w Kairze (chociaż nadal brakuje pewnych elementów). StarkNet nie wspiera jednak jeszcze wdrażania i realizacji umów z Kairu 1.0. StarkNet Alpha V0.11.0, zaplanowane na nadchodzące tygodnie, wprowadzi możliwość realizacji i realizacji umów 1.0 z Caira. Ulepszenie do wersji v0.11.0 oznacza początek okresu przejściowego w kierunku systemu, który obsługuje tylko kontrakty z Kairem 1.0. Ten okres przejściowy zakończy się[Regenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4), spodziewany kilka miesięcy później.

![](/assets/0_odxbxeacqdwizlfw.jpg)

### Zbudujmy!

Celem StarkNet jest wykładnicza skala Ethereum przy użyciu matematycznej integralności STARK, a celem Kairu jest zapewnienie deweloperom tej wykładniczej skali. Dostępność oznacza efektywny, łatwy w czytaniu i pisaniu język programowania, bezpieczny w użyciu. Mamy nadzieję, że uwolnienie Kaira 1.0 zainspiruje jeszcze więcej deweloperów do przyłączenia się do StarkNet i skali Ethereum, aby zaspokoić globalny popyt.