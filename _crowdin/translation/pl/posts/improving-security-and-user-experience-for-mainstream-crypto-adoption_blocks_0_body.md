Innowacje technologiczne w blockchain rozwijały się w ciągu ostatnich kilku lat – STARK, SNARK, EIP-1559, Ethereum Merge – to ogromne osiągnięcia technologiczne. Jednakże projekt UX i interfejsu użytkownika nie został utrzymany. Ludzie wciąż utknęli na 16-słownych frazach seedowych, a wejście do DeFi bez scentralizowanego pośrednika wciąż jest zbyt zastraszone dla wielu . Kluczowe znaczenie dla włączenia kolejnych miliardów użytkowników do sieci Web3 ma poprawa doświadczenia użytkowników w zakresie wprowadzania na pokład.

Jak pokazał FTX (i Gemini, Celsius i Mt. Gox), zachowanie nad majątkiem jest niezwykle ważne. Jednak do niedawna portfele z własnym systemem detencyjnym były niezrozumiałe i mylące dla przeciętnego użytkownika. Większość ludzi zapomina swoje hasła Web2 co miesiąc; w jaki sposób oczekuje się, że użytkownicy utrzymają swoje frazy seed i klucze prywatne bezpiecznie dla wieku?

Po prostu to koszmar bezpieczeństwa. Ponieważ byliśmy świadkami niezliczonych razy, jeden zły ruch zainicjowany przez złych aktorów lub niedbalstwo może spowodować utratę milionów dolarów.

Jako pierwszy punkt kontaktowy dla nowych użytkowników kryptowalut, portfele Ethereum muszą być łatwe w obsłudze, bezpieczne i dostosowane do potrzeb każdego użytkownika. Wymaga to od programistów integracji prostoty produktów finansowych Web2 z funkcjami Web3.

Właśnie to osiąga abstrakcje.

Abstrakcja konta zwiększa bezpieczeństwo i bezpieczeństwo produktów z portfeli samodzielnych poprzez usunięcie zależności użytkowników od klucza prywatnego i uczynienie portfeli bardziej programowalnymi. Dzięki udoskonalonym portfelom UX, portfele niezdolne do przechowywania mogą ostatecznie skalować się do milionów głównych użytkowników kryptowalut.

Aby jednak w pełni zrozumieć wpływ abstrakcji konta, musimy odświeżyć się od tego, jak działają konta Ethereum.

### Podstawy rachunków Ethereum

Istnieją dwa rodzaje kont Ethereum:

1. Konta zewnętrzne (EOA)
2. Konta kont kont (CA)

Rozłóżmy każdy z nich nieco dalej.

### Rachunki zewnętrzne

Konta zewnętrzne, takie jak MetaMask i Coinbase Wallet, są typowym typem konta dla użytkowników Ethereum. Każdy EOA składa się z klucza prywatnego i publicznego, zwanego klawiaturą.

Wszystkie transakcje są autoryzowane i podpisywane przez klucze prywatne. Po podpisaniu transakcji EVM sprawdza, czy podpis jest ważny przy użyciu adresu EOA. Twarda kodowana logika w EVM oznacza, że konto (obiekt przechowujący tokeny) i klucz prywatny (podpis) są połączone jako jeden.

Utrata klucza prywatnego oznacza utratę środków lub nawet kontrolę nad kontem na zawsze.

### Konta kont kont kont

Tymczasem konta, synonimy z abstrakcją konta, to inteligentne kontrakty stosowane w blockchainu Ethereum. Kontrakty te są kontrolowane logiką kodu i nie wymagają kluczy prywatnych. W przeciwieństwie do EOA, rachunki kont nie mogą inicjować transakcji. Zamiast tego ich transakcje są inicjowane przez instrukcje od agencji ratingowych.

### Dlaczego abstrakcja konta ma znaczenie

abstrakcja konta pociąga za sobą abstrakcję ciężko zakodowanej logiki autoryzacji z dala od EOA, przekształcenie każdego rachunku w programowalną inteligentną umowę, która może być dostosowana do potrzeb każdej osoby.

Jak wyjaśnia argent współzałożyciel i główny oficer ds. nauki Julien Niset w ostatnim[Stark @ Home event](https://www.crowdcast.io/e/7olimxqv), ta elastyczna logika autoryzacji daje deweloperom swobodę w graniu z funkcjami konta, takimi jak…

**Signery sprzętowe:**Korzystanie z bezpiecznej enklawy iPhone lub Androida do zamiany dowolnego smartfona w portfel sprzętowy. Od tamtej pory użytkownicy mogą weryfikować transakcje przy użyciu danych biometrycznych, takich jak odcisk palca lub identyfikator Apple Face ID. Zaczęliśmy już widzieć własne portfele takie jak Braavos[i uruchomiliśmy tę funkcję.](https://medium.com/@braavos_starknet_wallet/hardware-signer-the-last-innovation-for-wallet-crypto-everyday-users-7e1974f93944)

**Płatniki:**Pozwól użytkownikom płacić opłaty za gaz w dowolnym tokenu, a nawet dysponować mechanizmem trzecim za transakcje.

**Odzyskiwanie społecznościowe:**W przypadku utraty lub naruszenia klucza prywatnego użytkownicy mogą autoryzować nowy klucz jako uprawnionego właściciela portfela. Może to obejmować różne metody odzyskiwania danych poprzez zaufane kontakty, portfele sprzętowe lub usługi innych firm. Pomysł polega na tym, aby odzyskanie dostępu do Twojego konta było tak łatwe jak odzyskanie hasła do konta bankowego za pomocą wiadomości e-mail.

**Uwierzytelnianie wieloskładnikowe:**Podobne do powszechnie stosowanych praktyk Web2 2FA, użytkownicy mogą skonfigurować dwie (lub więcej) metody uwierzytelniania dla swoich portfeli kryptowalut, w przypadku gdy transakcja jest podpisana tylko wtedy, gdy użytkownik potwierdzi zgodę za pomocą drugiej opcji, takiej jak e-mail lub SMS. Użytkownicy mogą również ustawić dzienne limity przelewów lub listy adresów konta, których portfel jest automatycznie blokowany w interakcjach.

**Quantum Resistant and Gas-Efficient Signatures:**Aktualny schemat podpisu Ethereum, ECDSA jest ekstensywny (czytanie: wyższe opłaty za gaz) i może zostać przerwany przez komputery kwantowe. Poprzez abstrakcję podpisu w różnych kontach stosuje się bardziej wydajne i bezpieczne ilościowo systemy podpisów. StarkNet wykorzystuje własną własną krzywą przyjazną dla STARK.

Te funkcje nie tylko zapewniają użytkownikom większe bezpieczeństwo i większą elastyczność, ale co ważniejsze, skutkują znacznie**lepszymi**doświadczeniami użytkowników.

Wymienione przez Vitalik Buterin jako „długotrwałe marzenie” dla społeczności programistów Ethereum, od 2020 r. pojawiły się innowacje wokół abstrakcji konta, głównie EIP-2938 i EIP-3074. Jednak oba te elementy wymagały kompromisów dotyczących bezpieczeństwa i wdrożenia. [EIP-4337](https://github.com/ethereum/EIPs/blob/3fd65b1a782912bfc18cb975c62c55f733c7c96e/EIPS/eip-4337.md), jak dotąd najbardziej obiecujący rozwój, proponuje wersję abstrakcji konta bez konieczności wprowadzania zmian do protokołu Ethereum.

### **Pobieranie konta i Starknet**

W przeciwieństwie do Bitcoin i Ethereum, które doposażają swoje aktualne protokoły w celu wsparcia abstrakcji konta,[StarkNet](https://starkware.co/starknet/)zaimplementował abstrakcję konta od pierwszego dnia. W połączeniu z skalowalnością i możliwościami naszych dowodów STARK, potencjał innowacyjności portfela jest nieograniczony. Dlatego też następna generacja portfeli samodzielnego przetrzymywania, takich jak Argent i Braavos, jest obecnie budowana na szczycie naszej sieci.

Podejście StarkNet jest podobne do podejścia EIP-4337,[uznanie, że](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781)pełna abstrakcja konta nadal doprowadziłaby do pomylenia UX i[może otworzyć](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4337.md#rationale)drzwi do ataków na sekwencery. Ma ona raczej na celu osiągnięcie zarówno abstrakcji podpisów, jak i abstrakcji płatniczej poprzez uwspólnienie części wymaganej infrastruktury w obrębie łańcucha i poza nim.

I chociaż wciąż jest jeszcze wiele do zrobienia, abstrakcja konta zyskuje poza małe kręgi kryptowalut. W grudniu[Visa zaproponowała pomysł](https://www.coindesk.com/tech/2023/01/11/ethereum-upgrade-could-make-it-harder-to-lose-all-your-crypto/)wykorzystania abstrakcji konta do ustawiania automatycznych płatności cyklicznych na StarkNet. Korzystając z konta delegowanego, użytkownicy mogą udzielić zezwolenia na inicjowanie płatności na wstępnie zatwierdzoną inteligentną umowę. Od tego czasu inteligentny kontrakt będzie zaprogramowany w celu odliczenia ustalonej kwoty płatności w określonym dniu, w określonym okresie. Podczas gdy wiza nie ujawniła jeszcze swoich planów dotyczących własnych usług, same zainteresowania mówią o wolumenie, i może wyprzedzać świat, w którym duże platformy abonamentowe takie jak Netflix i Spotify mogą obejmować adopcję kryptowalut.

Jeśli chodzi o to, co się dzieje w przyszłości, to tylko czas powie. Jedno jest jednak pewne. Dzięki łatwiejszemu i bezpiecznemu stosowaniu portfeli, abstrakcja konta posłuży jako potężny katalizator dla własnych portfeli blockchain, aby skalować je do milionów głównych użytkowników kryptowalut. W międzyczasie będziemy nadal budować.