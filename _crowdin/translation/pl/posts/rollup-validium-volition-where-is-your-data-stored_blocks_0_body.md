### TL;DR

* StarkWare oferuje klientom różne tryby dostępności danych (DA) w zależności od ich priorytetu
* Istnieją trzy podejścia do dostępności danych dla dowodów STARK, wszystkie z nich są już dostępne w produkcji:\
  —**Rollup**: księga jest publikowana bezpośrednio w łańcuchu bloków\
  —**Validium**: Komitet ds. Dostępności Danych zabezpiecza księgę, tylko przy hashu przechowywanym w łańcuchu\
  —**Volition**: aplikacje mogą pozwolić użytkownikom wybrać tryb DA — Rollup lub Validium — dla każdej transakcji
* Bez względu na to, z którego korzysta się DA – ważność wszystkich transakcji jest gwarantowana przez STARK

### Wprowadzanie

Od listopada 2022 r.[StarkEx](https://starkware.co/starkex/)rozlicza ponad 750 mld USD wolumenu obrotu i ponad 270 mln transakcji na Ethereum. W przestrzeni NFT zasilają aplikacje takie jak ImmutableX i Sorare, StarkEx wybił ponad 85 milionów NFT po cenie 1000 razy tańszej niż robić to bezpośrednio na Ethereum. Technologia oparta na STARK skaluje Ethereum. Na przykład w ciągu jednego tygodnia StarkEx prowadził 1,6x liczby transakcji jako Ethereum (12m na StarkEx vs 7. na Ethereum) przyjmując mniej niż 0,1% przestrzeni blokowej Ethereum. I to wszystko robi, dając użytkownikom taki sam poziom bezpieczeństwa, jak gdyby mogli oni osiedlić się bezpośrednio na Ethereum.

### Jak to osiąga StarkWare?

Użytkownicy wysyłają transakcje na warstwie 2 (StarkEx lub StarkNet), które są wgrywane i wysyłane do Provera STARK. Ten dowód STARK zna stan księgi przed i po przetworzeniu tych transakcji. Dowód STARK stanowi dowód potwierdzający ważność nowej księgi po przeprowadzeniu tych transakcji. Nowy stan i dowód STARK są wysyłane do weryfikatora STARK w łańcuchu dostaw. Weryfikacja tego dowodu odbywa się w sposób autonomiczny za pomocą niezmiennego inteligentnego kontraktu na Ethereum.

Ta architektura zapewnia najlepsze z obu światów: możemy mieć niskie koszty transakcyjne, a jednocześnie Ethereum w środku będzie neutralnym arbitrem. Ethereum jako arbiter nie jest jedynie miłym, ale zapewnia krytyczne bezpieczeństwo użytkownikowi końcowemu. Transakcja użytkownika może być teraz pewna, że jego środki są zabezpieczone przez Ethereum, a transakcje są niezmienne, gdy zostaną zweryfikowane na Ethereum. Użytkownik posiada również pełną kontrolę nad swoimi środkami. Opieka nad samodzielnością jest ważna, ponieważ zapewnia użytkownikowi dostęp do swoich środków przez cały czas bez konieczności polegania na jakiejkolwiek osobie trzeciej.

### Gdzie jest w tym wszystkim dostępność danych?

Ważne jest, aby podkreślić zarówno to, co robi ten dowód jak i to, co*nie robi*. Dowód potwierdza ważność nowego stanu, ale nie mówi Panu, czym jest nowy stan. W tym celu potrzebne są dostępne dane. Jeśli mamy tylko dowód, to blockchain wie, że to, co zostało przesłane, jest ważne, ale nie wie, jaki jest nowy stan (np. Saldo księgi) jest! Do konsumentów tych danych należą użytkownicy, którzy zawarli transakcje w ramach tych dowodów. Dane te powinny być im udostępniane, jeżeli chcą wypłacić środki na Ethereum bez konieczności ufania operatorowi warstwy 2. Zapewnia to użytkownikom pełną kontrolę nad swoimi środkami.

Jedną z analogii dla tego jest Twój nauczyciel w szkole średniej, prosząc cię o udowodnienie, że x równa się x. Jest to niezmiernie do udowodnienia. Trudniej jest odpowiedzieć: co jest x tak naprawdę równe? W tym celu potrzebne są osobne informacje. Może to być wartość x równa 5 lub inna wartość. Podobnie w blockchain, dowód STARK może zostać przekazany do inteligentnego kontraktu weryfikatora STARK do weryfikacji. Weryfikator może potwierdzić, że dowód jest ważny (czyli x=x). Potrzebujesz jednak osobnego wejścia, aby powiedzieć co x (nowe saldo księgi).

Istnieją trzy sposoby udostępniania tych danych:

#### Tryb Rollup

Tryb Rollup gwarantuje, że stan księgi jest przechowywany na Ethereum wraz z dowodami. Tryb Rollup jest obecnie używany przez[dYdX](https://dydx.exchange/)w produkcji i jest również używany przez[publiczną sieć StarkNet](http://starknet.io/)L2. Korzyści są jasne: można odtworzyć stan księgi jedynie poprzez interakcję z blockchainem Ethereum. Skutkiem tego jest to, że jako użytkownik końcowy możecie bez wątpienia rozmawiać z odpowiednim inteligentnym kontraktem na Ethereum, i wypłacić środki nawet jeśli system warstwy 2 zostanie wyłączony.

#### Walidacja

W trybie Rollup większość kosztów gazu Ethereum trafia do dostępności danych, a nie do weryfikacji dowodów. Dzieje się tak dlatego, że przechowywanie danych w blockchain jest bardzo gazochłonne. W trybie walidacji informacje o księdze nie są wysyłane do Ethereum. Jest on raczej przechowywany poza łańcuchem dostaw przez Komitet ds. Dostępności Danych. Ethereum przechowuje hash tych informacji o księdze. Komitet ds. Dostępności Danych składa się z kworum niezależnych członków, którzy nadzorują prawidłową aktualizację stanu oraz przechowują kopię przetwarzanych danych. Każda instancja StarkEx może utworzyć własne kworum. Członkowie kworum dla istniejących aplikacji działających na StarkEx obejmują takie podmioty, jak[Konsensys](https://consensys.net/),[Omdlenie](https://nethermind.io/),[Iqlusion](https://iqlusion.io/)i[Głowonogi](https://cephalopod.equipment/).

Korzyści w tym zakresie są oczywiste. Nie ma potrzeby wnoszenia opłat za gaz Ethereum w celu przechowywania informacji księgowych w łańcuchu dostaw. Jedyną rzeczą przechowywaną w Ethereum jest raczej pojedynczy skrót informacji o księdze. Jeśli chcesz bez zaufania wycofać środki z warstwy 2 rozmawiając z Ethereum, Wymagają Państwo jedynie podpisu cyfrowego jednego z członków Komitetu ds. Dostępności Danych. Członkowie DAC będą korzystać z kryptografii, aby udowodnić, że posiadasz własność tych funduszy.

Inną ukrytą zaletą dostępności danych walidacyjnych jest poufność osób czytających blockchain. W trybie Rollup saldo każdego rachunku w momencie przedkładania każdego dowodu jest znane opinii publicznej. Z poprawnością, dane te są ukryte w łańcuchu bloków — tylko Komitet ds. Dostępności Danych jest tego świadomy, ponieważ są one przechowywane poza łańcuchem. Taki poziom poufności umożliwia szeroki wachlarz przypadków, w których istotne jest utrudnienie danych dotyczących transakcji.

#### Zmienność

Walidacja jest architekturą dostępności danych, która zapewnia wybór pomiędzy trybem walidacji a trybem skręcania na poziomie transakcji. Prowadzi to do tego, utrzymując jedną księgę na łańcuch, a drugą księgę wraz z Komitetem ds. Dostępności Danych. Użytkownicy mogą wybierać pomiędzy trybem walidacji i Rollup dla każdej transakcji.

Wyobraź sobie, że kupujesz naprawdę drogie NFT jak Bored małp lub Cryptopunk, w aplikacji uruchomionej na StarkEx. Możesz użyć trybu Rollup do zabezpieczenia danych dla tego NFT, ponieważ chcesz, aby zapisy tej konkretnej transakcji były przechowywane w Ethereum. Jednak wtedy możesz kupić naprawdę tanie NFT (np. płaszcz dla swojej postaci w grze blockchain) i w tej sytuacji chętnie zaoszczędzisz pieniądze za pomocą Validium.

Jeśli jesteś zainteresowany skalą uzyskaną dzięki dowodom STARK, proszę przyjść i budować na nas.



Zawsze możesz wysłać wiadomość e-mail na adres[info@starkware.co](mailto:info@starkware.co), a człowiek dostanie się na Twój adres e-mail.