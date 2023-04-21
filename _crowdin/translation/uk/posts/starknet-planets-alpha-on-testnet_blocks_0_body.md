### **TL;DR**

* [StarkNet Planets Alpha](https://voyager.online/)— перший крок на нашому шляху до Mainnet — тепер працює за тестовою мережею!
* [StarkNet](https://starkware.co/product/starknet/)є допустимим завершенням ZK-Rollup1.
* Розробники можуть реалізувати свою ділову логіку вибору в розумному договорі і розгортати її допустимо на StarkNet.
* Статистичні переходи від StarkNet є перевіреними за ланцюгом, а потім підтвердженими у режимі ланцюга.
* Так само, як і Ethereum, користувачі можуть взаємодіяти безпосередньо з цими розумними контрактами.

### **Вступ**

Ми[оголосили](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)дорожню карту на[StarkNet](https://starkware.co/product/starknet/)в січні 2021. Святий Грааль рішень масштабованості підтримував би (i) довільні розумні договори, з (ii) спільністю, діяв над децентралізованою мережею. Сьогодні ми оголошуємо розгортання на тестовій мережі Крок 1: StarkNet Planets Alpha. Альфа-система підтримує довільні розумні контракти. Композитність буде підтримуватися пізніше цього року, з децентралізацією буде підтримуватись.

Для нас дуже важливо бути повністю прозорими та правильно налаштовувати очікування. Мета цього допису полягає в тому, щоб чітко перерахувати те, що вже підтримується, і які функції досі відсутні. Ми випускаємо роботу в процесі тестування. Ми вважаємо, що цей ранній випуск допоможе формуванню здорової екосистеми навколо StarkNet та її інструменту. Ми хочемо залучити розробників до створення мережі з нами і отримати безперервний зворотній зв'язок від спільноти.

### **Що таке в планетах StarkNet Alpha?**

**Функціональність:**Альфа дозволяє розробникам записувати та розгортати договори StarkNet для загального обчислення. Білий список - будь-який розробник може писати та розгортати будь-який контракт, який він забажає. Користувачі можуть взаємодіяти з цими договорами, відправляючи їм транзакції та перевіряючи їхній стан. Всі контракти існують в одній державі 2. Оновлення цієї держави є перевіреними за межами ланцюжка і підтверджених у мережі - в Альфі, виконується перевірка в тестуванні.

**StarkNet OS:**Вища функціональність підтримується новою "операційною системою", яку ми називаємо StarkNet OS. Він пропонує*можливі переходи станів*на StarkNet. Розробники Ethereum можуть вважати це еквівалентом EVM: він відповідає за висловлення розумних функцій договору, обробки сховища договорів, тощо. Ми опублікуємо окрему публікацію, де детально описував архітектуру StarkNet OS.

**Що немає в Альфі?**Альфа все ще не вистачає деяких ключових можливостей, таких як L1<>L2 взаємодія, дані по ланцюгу і композитність. Детальніше про це нижче.

#### **Отримуєте ваші футля**

Розпочніть із нашого[посібника та документації](https://www.cairo-lang.org/docs/hello_starknet/).

Потім ви можете прочитати через[приклад розумного договору](http://cairo-lang.org/docs/hello_starknet/amm.html)ми написали і розгорнули його на StarkNet. Це проста AMM і ви можете взаємодіяти з нею[тут](https://starkware-amm-demo.netlify.app/swap). Ви вже готові до написання та розгортання розумних контрактів на StarkNet. Explorer блоку для StarkNet -[Voyager](https://voyager.online/)- дозволяє кожному, хто досліджує штат StarkNet.\
Змінюючи себе ногами, ми вважаємо, що вам буде краще змайструватися на StarkNet, оскільки ми продовжуємо виводити додаткові можливості. Ми вже зайняті плануванням першого хакатона, а також майстерні для розробників.

### **Наступні кроки для StarkNet**

Можливості ключів, які досі відсутні в Альфі, будуть розкидані починаючи з найближчих тижнів. Ось це:

* L1<>Взаємодія L2, наприклад, можливість поповнити рахунок та вивести кошти у L1.
* Дані про ланцюг: публікуйте всі зміни зі сховищами на Ethereum.
* Композитність: дозволяючи договори спілкуватися один з одним.

Запам'ятаючи ці можливості, ми будемо готові привести StarkNet до Ethereum Mainnet. Ми називаємо це кроком в еволюційних сузірцях StarkNett, і коли ми досягаємо цього, ви зможете будувати і дозволяти розгортання на додатку Ethereum Mainnet scalable L2.

#### **Старкнет-екосистема**

Нас дуже захоплює екосистема, яка формується навколо StarkNet, тому ми зробимо паузу, щоб подякувати нашим колегам досі.

We’re working closely with [Nethermind](https://twitter.com/nethermindeth) and the Nubia team, [Alexey Akhunov](https://twitter.com/realLedgerwatch) (Erigon) & [Igor Mandrigin](https://twitter.com/mandrigin) (gateway.fm), [Iddo Bentov](https://www.cs.cornell.edu/~iddo/), [dOrg](https://twitter.com/dOrg_tech), [Prof. Tim Roughgarden](https://twitter.com/algo_class), [Prof. Jeremy Avigad](https://www.andrew.cmu.edu/user/avigad/) & Yoav Seginer, last but not least — the [Paradigm](https://twitter.com/paradigm) team.\
Our early partners — [dYdX](https://twitter.com/dydxprotocol), [Immutable](https://twitter.com/Immutable), [DeversiFi](https://twitter.com/deversifi), as well as [Sorare](https://twitter.com/SorareHQ), [Celer](https://twitter.com/CelerNetwork), and others — have been providing us with invaluable input from Day One, and allow us to build a production-grade network for real users.\
We continue to be amazed by the quality of content created by the community, by people such as [Bobbin Threadbare](https://twitter.com/bobbinth), [Daniel Kroni](https://github.com/danielkroeni/cairo-playground/blob/main/anon-bank/README.md), [Adrian Hamelink](https://twitter.com/adr1anh), [perama](https://twitter.com/eth_worm), [Francesco Ceccon](https://twitter.com/ceccon_me), [Ilian Malchev](http://twitter.com/imalchev), and the [Alexandria team](https://blockchainpartner.fr/).

Ми хочемо побачити, що спільнота створить на всіх фронтах: інструменти розробників, зміст і, звичайно ж, програми StarkNet будуть побудовані. Давайте продовжимо розмову у ваших улюблених медіа варіантів:[discord](https://discord.gg/uJ9HZTUk2Y),[Твіттер](https://twitter.com/CairoLang),[написати](mailto:info@starkware.co), і незабаром використовуючи найбільш децентралізовані комунікаційні форми: f2f.

Одна з них не є фанатами типу ZK-Rollup, як - математично говоритиму-- це не знання з нуля, але всі ви знаєте, що ми маємо на увазі

2 На відміну від окремих держав, які підтримуються для поточного розгортання StarkEx на Mainnet

**Оновлення (Новин. 2021):**StarkNet Alpha активована на Ethereum Mainnet