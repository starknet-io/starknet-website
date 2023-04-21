### TL;DR

* Kair 1.0 jest pierwszą wielką wersją po[wprowadzeniu Kairu](https://medium.com/starkware/hello-cairo-3cb43b13b209)dwa lata temu
* Kair 1.0 da programistom bezpieczniejszy, prostszy, bardziej użyteczny język programowania
* W sercu Kairu 1,0 będzie**Sierra**, pośrednią warstwą reprezentacyjną, która obiecuje większą długoterminową stabilność dla programów Kairu
* Sierra postępuje w Kairze do obsługi w sieci bezuprawnień:\
  -**Ochrona sieci**: umożliwia bardziej solidną ochronę DoS\
  -**Ochrona użytkownika**- pozwala na opór cenzury klasy Ethereum 1. wpłynie na StarkNet na wiele sposobów. Spowoduje to również efekt[Regenesis](https://medium.com/starkware/regenesis-starknets-no-sweat-state-reset-e296b12b80ae). W najbliższych tygodniach opublikujemy więcej informacji na temat Regenezy.

### Wprowadzanie

W 2020 roku wydaliśmy Cair, kompletny język programowania i zrobiliśmy duży krok w kierunku wspierania weryfikowalnych obliczeń przy użyciu STARK. Dzisiaj ogłaszamy**Kair 1.0**, największy do tej pory postęp w Kairze. Wprowadzone zostaną ulepszone języki wraz z funkcjami, które zwiększą użyteczność, bezpieczeństwo i wygodę. Ma on na celu wsparcie wymogów StarkNet jako sieci bezuprawnieniowej, co pozwoli na uproszczenie i zwiększenie bezpieczeństwa protokołu.\
Rozwój jest już w toku, a my oczekujemy, że pierwsze wydanie nastąpi wkrótce.

W tym poście opiszemy dotychczasową podróż w Kairze i podzielimy się szczegółami na temat nadchodzących funkcji.

### Podróż Kairu

Do 2020 r. niezbędna była niszowa wiedza, aby stworzyć programy łatwe do realizacji w STARK do ogólnych obliczeń. Było to możliwe tylko dla tych, którzy zrozumieli skomplikowane matematyki za STARK. W szczególności w odniesieniu do każdej logiki biznesowej, tj. każde obliczenie, jedno potrzebne do wygenerowania algebraicznej pośredniej reprezentacji (AIR) — zbiór wiązań wielomianów, które reprezentują określone obliczenia.

Kairz zrodził się z realizacji, że weryfikowalne obliczenia powinny być dostępne dla deweloperów wszędzie. Kair umożliwia programistom wykorzystanie mocy STARK.

Społeczność deweloperów od tamtego czasu przejęła Kaira, aby budować entuzjastycznie. Wszystko w dobrze prosperującym ekosystemie StarkNet opiera się na Kairo. Między[StarkNet](https://starkware.co/starknet/)a[StarkEx](https://starkware.co/starkex/), aplikacje zasilane przez Kaio przetwarzały ponad 220M transakcji, pokonał ponad 65M NFT i obsługiwał transakcje warte 700B USD, wszystkie rozliczone na Ethereum.

Podczas gdy Kair udostępnił STARK, pierwotnie został on zaprojektowany jako język montażowy i jako taki został napisany jako język niskiego poziomu.

![Przykłady wczesnych programów napisanych w Kairze](/assets/cairocode_01.png "Przykłady wczesnych programów napisanych w Kairze")

Opierając się na opiniach od deweloperów i wzroście[StarkNet](https://starkware.co/starknet/), stopniowo czyniliśmy Kaira bardziej ekspresywnym i bardziej przyjaznym dla deweloperów.

![Przykład umowy ERC-20 z Kaira wykazujący poparcie dla zmiennych, w przypadku stwierdzeń, błędów i biblioteki UINT256](/assets/cairocode_02.png "Przykład umowy ERC-20 z Kaira wykazujący poparcie dla zmiennych, w przypadku stwierdzeń, błędów i biblioteki UINT256")

Wkrótce jednak doszliśmy do wniosku, że nadszedł czas, aby zrobić wielki krok naprzód i Zamiast przyrostowych usprawnień w Kairze należy dążyć do odważniejszego przekształcenia.

### Cairo 1.0

Dla Kairu 1. zbudowaliśmy cały nowy kompilator od podstaw, który zapewni programistom funkcje bezpieczeństwa, i umożliwi im pisanie umów w sposób prostszy i bardziej wyrazisty.

#### Wprowadzenie do Sierra: zapewnienie możliwości udowodnienia każdej operacji w Kairze

Główny dodatek w Kairze 1. is Sierra (**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**). Sierra stanowi nową warstwę reprezentacyjną między Kairem 1.0 a kodem bajtowym Kairy. Celem Sierra jest zapewnienie możliwości udowodnienia każdego uruchomionego Kairu – tj. programu Kaira i jego wkładu – (zob. bardziej szczegółowe).

Sierra obiecuje Kair devs lepiej odporny na przyszłość kod. Dalsza stabilność wynika z faktu, że umowy StarkNet nie będą wymagały ponownego kompilacji w przypadku ulepszeń systemu bazowego (np. , zmiany architektury CPU AIR, ulepszenia ostatecznego tłumaczenia z Sierra na kod bajtu Kairu).

**Dowiedz się, że Kaira będzie działać.**W starym Kairze przebieg może skutkować trzema przypadkami — TRUE, FALSE lub awarią. Nie można udowodnić nieudanych uruchomień. Sierra zapewnia, że operacja w Kairze nigdy nie zakończy się niepowodzeniem i może doprowadzić tylko do TRUE lub FALSE. To z kolei gwarantuje, że każdy przejazd z Kairu może być udowodniony.

To wprowadzenie Sierra ma istotne konsekwencje dla StarkNet jako sieci bezuprawnieniowej. Sierra zapewnia, że nawet odwrócone transakcje mogą być włączone do bloków StarkNet. Ta właściwość pozwoli protokołowi StarkNet pozostać prostym i prostym bez konieczności dodawania złożonych mechanizmów kryptoekonomicznych.\
Dwa znaczące przykłady:

1. Sequencery będą mogły pobierać opłaty za odwracane transakcje, co pozwoli StarkNet na zapobieganie Sequencer DoS w dobrze ugruntowany sposób.
2. Wdrożenie wymuszonych transakcji L1 będzie możliwe, umożliwiając StarkNet odziedziczenie pełnej odporności Ethereum na cenzurę.

### **Funkcje języka**

Kair 1.0 zapewni wiele ulepszeń w samym języku programowania. Nie wszystko wymienione poniżej będzie częścią pierwszego wydania, ale jest częścią planu działania.

#### **Ulepszona składnia**

* Nie ma więcej*lokalnych*i*tempvar*. Teraz potrzebujemy tylko*niech*aby wyrządzić im wszystkie zmienne.
* Poprawiono*jeśli*składnia instrukcji

```python
#Stary
jeśli cond! 0 {
  tempvar x = x+1;
} else {
  tempvar x = x;
}
__________________________________
#New
if cond { x = x + 1; }
```

#### **Gwarancje bezpieczeństwa typu**

Kompilator użyje silnego pisania, aby poprawić bezpieczeństwo kodu. Na przykład:

* Punkty będą zawsze wskazywać na zapoczątkowaną pamięć.
* Słowniki będą zawsze trwonione, zamiast pozostawienia odpowiedzialności za wywołanie squash_dict programistowi.

#### **Łatwiej używać konstrukcji językowych**

Na przykład:

* Pętle for

```
let suma = 0
za x w swoim {
  suma = suma + x;
}
```

* Wyrażenia logiczne
* Liczba całkowita (z regularnym podziałem całkowitym :people_with_bunny_uss:)
* Ochrona przed przewróceniem dla odpowiednich typów
* Warunki logiczne

```
#Old
If cond1:
  if cond2:
       # some code
  else if cond3:
       # Same code
__________________________________
#New
If cond1 && (cond2 || cond3) { … }
```

#### **System typu w pełni rozwiniętego**

* Abstrakcyjne typy danych (tj. Rusty enum)

```
enum Option<T> {
 Some: T,
 Brak,
}
wynik dopasowania {
 Some(r) => {..},
 Żaden => {..},
}
```

* Cechy

```
cecha Dodaj<Uint256> {
    fn add(…) { … }
}

let a: Uint256 = 1;
let b: Uint256 = 4;
a + b; // Evaluated to 5 of type Uint256.
```

#### **Więcej intuicyjnych bibliotek**

(np. tablice, tablice)

* Kierunek<Uint256, MyStruct>;
* Tablica<MyOtherStruct>;

#### **Więcej zoptymalizowanych kodów**

Nie ma potrzeby jednoznacznie określania alokacji lokalnych zmiennych — automatycznie wykrywa się i wykonuje automatycznie.

#### **Lepsza integracja kompilatora**

Umożliwienie lepszego wsparcia IDE, zarządzania pakietami i lepszego ułatwiania wkładu Wspólnoty.

### **W związku z tym Komisja stwierdza, że w okresie od dnia 1 stycznia 2014 r. do dnia 31 grudnia 2014 r. nie ma podstaw do stwierdzenia istnienia pomocy państwa w rozumieniu art. 107 ust. 1 TFUE.**

Dwa lata po pierwszym wykorzystaniu Kairu do produkcji rozwijamy Kaira 1.0, co zapewni lepszą ekspresję, bezpieczeństwo i składnięcie. Zajmie to duży krok naprzód, umożliwiając programistom łatwiejsze zapisywanie kontraktów StarkNet.

W innym wpisie, już wkrótce, udostępnimy więcej szczegółów na temat Kairu 1. wpłynie na regenerowanie StarkNet i jak deweloperzy powinni przygotować się do jego wydania.