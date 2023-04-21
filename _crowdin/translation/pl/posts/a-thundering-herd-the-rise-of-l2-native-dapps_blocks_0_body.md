### TL;DR

L2 natywne aplikacje mogą teraz rozkwitać wolne od tradycyjnych ograniczeń dotyczących gazu L1

### Wprowadzanie

deweloperzy dApp zawsze borykają się z poważnymi ograniczeniami ze względu na limit gazu blokowego Ethereum (L1). Ogranicza to nie tylko*jak*te dApps działają, ale także*co*te dApps są w stanie zrobić.

Warstwa 2 (L2) oferuje dApp deweloperom komputerowe pole zielone, wolne od tego szklanego sufitu. Wierzymy, że zdecydowana większość dApps będzie miejscowa w ciągu kilku lat: zostaną one zbudowane od podstaw na L2, aby skorzystać z tego obliczeniowego stopnia wolności.

### L1 granica gazu kształtuje L1 natywne dApps

*Zastanówmy się nad dwoma przykładami popularnych aplikacji dApp, których projekt kształtuje głęboko ograniczenia gazowe L1: AMM i agregatorów DEX.*

Zautomatyzowany animator rynku (AMM) jest zasadniczo niewielkim zbliżeniem gazu na giełdzie opartej na księgach zamówień. Zamiast zezwalać użytkownikom na składanie i usuwanie limitów, stop loss, lub różnych innych rodzajów zamówień, PAMM L1 pozwalają jedynie na proste swapy z centralną bazową pulą płynności, aby pokryć intensywny koszt obliczeniowy L1.

W idealnym przypadku agregatorzy DEX potrzebują dostępu do wszystkich możliwych puli płynności, nawet najmniejszej puli płynności, aby uzyskać najlepsze ceny dla użytkowników. Jednak ze względu na koszt zapytania o wiele różnych pul nie warto po prostu dokonywać transakcji przez L1. Uzasadnione jest uzyskanie dostępu do pul i wnoszenie powiązanych opłat za transakcje tylko wtedy, gdy pule płynności posiadają dostatecznie dużą płynność. W podobnej żyle likwidacje w zakresie pożyczania/zaciągania pożyczek i innych zabezpieczonych dApps mogłyby być znacznie dokładniejsze, gdyby różnica między rabatem za likwidację a opłatą transakcyjną była znacznie mniejsza.

Ograniczona funkcjonalność i konstrukcja wielu aplikacji L1 wynika bezpośrednio z optymalizacji kodu przez deweloperów, aby przestrzegać ograniczeń gazowych Ethereum. Dlaczego może pan zapytać, czy mówimy o Ethereum? Nie można uruchomić kodu Solidity na wielu L1s, a nawet niektórych L2? W rzeczywistości, ale z nich Ethereum jest najdroższym środowiskiem (a tym samym bezpiecznym). Solidity dApps są zaprojektowane dla „najdroższego linku”, tj. Ethereum. W związku z tym nie korzystają one z przewagi obliczeniowej zapewnianej przez tańsze środowisko pracy. Aby odblokować utraconą funkcjonalność projektując dApp dla najdroższego środowiska pracy, należy dostosować kod dApp.

### Wzrost natywnych dApp L2

Walidity Rollups (aka ZK-Rollups) włącz niezwykle tanie obliczenia. W odróżnieniu od każdego innego rozwiązania skalowania — obliczanie L2 może rosnąć wykładniczo i mieć jedynie niewielki wpływ na koszt gazu weryfikującego w łańcuchu dostaw. Ponadto poprawność Rollup przetwarza dane wejściowe do obliczeń – »dane świadka« – bez korzystania z dodatkowych zasobów L1, co pozwala na obliczenia z wieloma danymi.

Kodowanie dApps native na L2 w**[Kair](https://www.cairo-lang.org/)**(Przekształcający język do skalowania dApps za pomocą dowodów STARK) odblokowuje ogromną domenę możliwości dla programistów. Umożliwia im wykorzystanie znacznych ilości danych – zarówno danych obliczeniowych, jak i danych świadków – których wcześniej nie mogli.

Zbadajmy takie natywne dAppy L2 i ich nowe, wzbogacone zdolności.

#### DeFi

Przed wprowadzeniem do StarkEx, StarkWare Validity Rollup, dYdX działał jako aplikacja L1 dApp na Ethereum. Zaoferował swoim użytkownikom dźwignię x10 dla aktywów syntetycznych i pozycji wspieranych tylko jednym składnikiem aktywów syntetycznych. Odbudowa dYdX w Kairze jako natywnej aplikacji L2 zapewnia znacznie bardziej skalowalną, tańszą i efektywną platformę DeFi:

* Aktualizacje cen Oracle: Takie aktualizacje zazwyczaj obejmują dziesiątki cen i podpisów z różnych źródeł w celu obliczenia mediany. Ważność Rollup zapewnia wykładnicze skalowanie logiki wyceny (weryfikacja podpisu i obliczenie mediany ceny) – bez przekazywania danych świadka do L1. Porównaj to z wdrożeniem L1 dYdX, gdzie każda aktualizacja ceny gazu kosztowała około 300K i była, W związku z tym ich częstotliwość i wielkość są ograniczone do podmiotów zgłaszających ceny.
* Dźwignięcie: Dokładny kanał cenowy pozwala dYdX oszacować ryzyko pozycji w czasie rzeczywistym i oferować większą dźwignię finansową dla użytkowników. Dzięki udoskonalonym aktualizacjom cen wysiedlonych dYdX zwiększył dźwignię finansową z x10 na L1 do x25 na L2.
* Trans-marginal: przy dYdX na L2 animatorzy rynku mogą składać długie/krótkie zlecenia na wiele aktywów przy użyciu tego samego zabezpieczenia. Średni rozrachunek L2 dYdX obejmuje pozycje z ponad 10 różnymi syntetycznymi aktywami! Dla porównania, wprowadzenie tej wzajemnej marży w przypadku L1 zwiększyłoby się ponad dwukrotnie w łańcuchu dostaw gazu.

#### Gry i Sztuka Generalna

Obecne przycięcie gier L1 native zwykle przechowuje zasoby gry na L1 przy implementacji całej logiki gry w zaufanej aplikacji poza łańcuchem. Schemat ten wynika bezpośrednio z ograniczeń gazowych L1. Dzięki tanim obliczeniom na L2, deweloperzy L2-native Gaming dApps mogą teraz wdrożyć logikę gry w inteligentnym kontrakcie i bez zaufania manipulować aktywami gry, zamiast ich przechowywać. Wprowadzanie logiki gry do świata nieufnych obliczeń jest ważnym krokiem w kierunku bogatszego świata gier opartych na blockchain. L2-natywne gry są już rozwijane na StarkNet, bez uprawnień sieci StarkWare (np.[Wojny papierosowe](https://github.com/dopedao/RYO)i[Wpływ](https://medium.com/influenceth/influence-to-launch-on-starknet-afd3c26ea25a)).

Ale jak złożona może być prawdziwa gra oparta na blockchain? Na przykład obsługa grafiki bezpośrednio w łańcuchu wydaje się niemożliwa —[czy](https://twitter.com/guiltygyoza/status/1449637155001798657)? Rozwiązywanie różnicowych równań i symulacja ruchu planarnego w inteligentnym kontraktze stanowi znaczący krok w kierunku tego, co w przyszłości może być silnikiem fizyki blockchain. Konsekwencje są ogromne. Wyobraź sobie konkurencyjną grę wieloosobową, taką jak kontrgracza Jeśli można symulować logikę gry na łańcuch, wiele strasznych haków stałoby się czymś w przeszłości – gracze mogliby cieszyć się prowokująco uczciwą grą.

Sztuka Generalna wykorzystuje obliczanie, losowość i inne dane do tworzenia sztuki opartej na blockchain. Im bardziej złożona logika i obliczenia, z których artysta może korzystać bez zaufania, tym więcej jest możliwości generowania unikalnych pojedynczych dzieł sztuki. [WhaleStreet DAO](https://blog.whalestreet.xyz/whalestreet-dao-to-launch-gen-art-ecosystem-on-ethereum-with-starknet/)uruchamia jeden z pierwszych projektów Gen Art na StarkNet, korzystając z nieograniczonych zasobów obliczeniowych StarkNet.

### Co dalej?

Ważność kropel – oraz zasilane kailem StarkEx i StarkNet, w szczególności – zapewnić środowisko, w którym można opracować i obsługiwać dApp, które zużywa wiele danych obliczeniowych lub świadków. Przy wszystkich korzyściach z technologii rozproszonej księgi przewidujemy niezwykle ekscytującą przyszłość dla miejscowych aplikacji L2.

Co*możesz stworzyć*za pomocą ogólnych obliczeń wspieranych przez kompozyt, brak zaufania i decentralizację?