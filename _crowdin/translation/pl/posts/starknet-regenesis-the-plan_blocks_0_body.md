### TL;DR

* Podzielamy szczegółowy plan Regenesis, który został ukształtowany w wyniku szeroko zakrojonych dyskusji ze społecznością StarkNet. Specjalne podziękowania dla Kuba@SWM.
* Regeneza nastąpi po wydaniu Kairu 1.0, co zwiększy bezpieczeństwo systemu poprzez umożliwienie prostszych i bezpieczniejszych kontraktów StarkNet
* Użytkownicy powinni być przygotowani do aktualizacji swojego portfela w fazie przejścia
* Deweloperzy będą zobowiązani do przeniesienia swoich umów do Kairu 1.0

### Wprowadzanie

StarkNet Alpha postępuje w kierunku Regenesis, co jest ważnym krokiem w kierunku produkcji. W tej aktualizacji chcemy udostępnić więcej szczegółów na temat głównej motywacji do Regenesis —[Kair 1.](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)— i zacząć wyjaśniać, czego będzie potrzebować od użytkowników i programistów. Po regeneracji StarkNet będzie pracować tylko z umowami opartymi na Kairze 1.0 i rozpocznie się od nowego bloku genezy z istniejącym stanem.

Co będzie wymagało Regenesis od użytkowników? Prosta aktualizacja ich portfela. Co będzie wymagało od twórców aplikacji StarkNet? Przenoszenie umów do Kairu 1.0, zgodnie z prostymi wytycznymi dotyczącymi modernizacji. W szczególności nie nastąpi ponowne uruchomienie z czystego stanu i pozostaniemy w tym samym przypadku StarkNet, oznacza, że nie będzie potrzeby migracji**.**

Plan Regenesis ma na celu pełne zachowanie stanu wniosków i uniknięcie przestojów we wnioskach. Tak więc aplikacje, które będą zgodne z wytycznymi, które przedstawimy, będą mogły uruchomić na StarkNet Alpha Mainnet od razu bez zakłócania ich funkcjonowania i użytkowników podczas procesu Regenesis, e angażują się we współpracę ze społecznością i zapewniają wszelkie niezbędne wsparcie, aby proces ten przebiegał jak najsprawniej.

Podążamy tym kierunkiem w wyniku szeroko zakrojonych dyskusji ze społecznością, które zawierały ważną sugestię ze strony zespołu ds. zarządzania oprogramowaniem.

### Dlaczego Regenezja?

#### Kair 1.0 i Sierra

Główną motywacją dla Regenezy jest wykorzystanie nowych możliwości, jakie daje Kaira 1. — a mianowicie ochrona sekwencyjna, opór cenzury i pomiar gazu, które mają zasadnicze znaczenie dla StarkNet jako sieci zdecentralizowanej.

Kair 1.0 zagwarantuje, że każda transakcja może być udowodniona. Pozwoli to StarkNet na włączenie transakcji odwróconych do bloków i wygenerowanie dowodu ich realizacji. Mechanizm ten pozwoli na płacenie sekwenatorów za wykonanie odwracanych transakcji, zwiększając ochronę DOS przed szkodliwymi podmiotami. Ponadto Kair 1.0 wesprze opomiarowanie gazu, co umożliwi StarkNet przejście na bardziej intuicyjny rynek opłat. Pozwoli to StarkNet na wprowadzenie przymusowych transakcji z L1 i zwiększy możliwości cenzury w sieci.

Aby skorzystać z tych korzyści, umowy z Kairu v0 i Kairu 1.0 nie mogą być mieszane. Nie można udowodnić, że niepoprawne stwierdzenia są niepoprawne, ani nie można śledzić gazu, jeśli mamy bity kontraktów z Kaira v0. W tym celu będziemy musieli wycofać kod Cairo v0 całkowicie z stanu StarkNet, ergo Regenesis.

**Po rewizji będziemy mieć system Starknet w pełni oparty na Kairze 1.0.**

#### Uproszczenie kodu i protokołu

StarkNet, choć nadal w Alfa, przeszło już wiele zmian. Każda wersja zmieniła dotychczas strukturę systemu operacyjnego StarkNet, bloków i transakcji. Spowodowało to, że część kodu jest przestarzała. Należy jednak zdawać sobie sprawę z pełnych węzłów i dostawców infrastruktury (takich jak indeksatory i badacze państw), i zaimplementuj, wszystkie dotychczasowe zachowania w wersjach StarkNet Alpha w celu synchronizacji z państwem bez zaufania. Bez Regenesis obciążenie to może stanowić istotny czynnik odstraszający dla deweloperów, którzy rozważyliby budowę takich usług dla StarkNet.

Dlatego przed rozpoczęciem produkcji i przygotowaniem do zdecentralizowanego świata z wieloma narzędziami infrastrukturalnymi zamierzamy zmniejszyć złożoność protokołu. Osiągnęlibyśmy ten cel, nie wymagając od przyszłej infrastruktury uruchomienia StarkNet 0. kod i oznacz pierwszy blok po okresie przejściowym jako punkt genezy.

### Wygrałeś regenerację? Ogólny harmonogram

Regeneza nastąpi po wydaniu Kairu 1.0, który ma się odbyć do końca 2022 r. Podczas pierwszego kwartału 2023 r. StarkNet zostanie zaktualizowany w celu wsparcia Kaira 1. , a naszym celem jest migracja do w pełni bazującej na Kairze sieci 1.0 do końca pierwszego kwartału.

**Użytkownicy i aplikacje będą musieli dokonać zmiany w tym okresie.**

![](/assets/1_ef85shzd2uudwex-cy8wdg-1.png)

### Więc czego potrzebuję do Wiedzenia?

Programiści aplikacji muszą być świadomi następujących aspektów związanych z Regenesis:

1. Upewnij się, że kontrakt jest gotowy do aktualizacji. Pełna techniczność planu jest udostępniona na[Forum Społeczności StarkNet](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080). Po sfinalizowaniu szczegółów będziemy udostępniać zwięzłe wytyczne.
2. Upewnij się, że jesteś gotowy do przeniesienia kodu do Kairu 1.0. Najnowsze informacje znajdują się w następnej sekcji.

#### Portowanie umowy do Kairu 1.0

Kair 1.0 ma wielką obietnicę dla programistów StarkNet. Ulepszenie istniejącego Kairu, które będzie bezpieczniejsze, lepsze i łatwiejsze w przypadku umów na piśmie, z ulepszonym systemem składni, w pełni rozwiniętym (ktokolwiek inny256)? i więcej. Deweloperzy będą musieli przenieść swoje istniejące kontrakty StarkNet do Cairo 1.0. Ponieważ jednak logika i struktura kodu pozostaną takie same, oczekuje się, że ten wysiłek będzie nieistotny w porównaniu z wysiłkiem podjętym w celu opracowania aplikacji w pierwszej kolejności.

W tym kontekście warto zauważyć, że możesz zdecydować się na ponowną kontrolę wersji Kaira 1.0. Jeśli twoja aplikacja była już kontrolowana w przeszłości, proces rewizji będzie znacznie tańszy i prostszy, ponieważ biegli rewidenci znają już twoją logikę.

W czwartym kwartale 2022 roku opublikujemy całą dokumentację wokół Kairu 1.0, wraz z samouczkami i warsztatami.

### Jestem użytkownikiem StarkNet. Co powinnam zrobić?

Jako użytkownik, prawdopodobnie będziesz musiał wykonać kilka czynności podczas Regenezy. Należy co najmniej zaktualizować kontrakt na konto. Nie robiąc tego przez (kilka miesięcy) okres przejściowy spowoduje utratę Twojego konta. W zależności od ścieżki aktualizacji wybranej przez programistów aplikacji StarkNet, których używasz, być może będziesz musiał wykonać dodatkowe kroki.

Przypominamy wszystkim, że StarkNet nadal znajduje się w fazie Alpha, i użytkownicy muszą zwracać uwagę na komunikację StarkNet i aplikacje, których używają. Twoim obowiązkiem jest zapewnienie wcześniejszej aktualizacji do nowego systemu. *Jako wczesny adoptor nie zawsze jest łatwy i liczymy na to, że zrobisz swoją część!*

### Podsumowanie

Kair 1.0 jest tuż za rogiem, co daje wiele ekscytujących korzyści i ulepszeń StarkNet i jego programistom. Aby z nich skorzystać, potrzebne jest wydarzenie rewizji sieci. Na szczęście mamy projekt, który powoduje, że ten proces jest minimalnie zakłócający — całkowicie bezproblemowy dla użytkowników i całkiem prosty w zastosowaniach.

Nalegamy, abyś uczestniczył w[dyskusji społeczności](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080)i podzielił się swoimi komentarzami i obawami, a także bądź na bieżąco z krokami, które będziesz musiał podjąć jako twórca aplikacji w StarkNet.