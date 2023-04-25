### TL;DR

* Перша версія StarkNet Bridge, StarkGate Alpha, жива на**[Testnet](https://goerli.starkgate.starknet.io/)**, та на**[Mainnet](https://starkgate.starknet.io/)**!
* Ми чекаємо на зворотній зв'язок спільноти щодо того, як все можна вдосконалити. Ви можете надіслати відгук для обох[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)і[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).
* Тривале розгортання в мережі скоро відбудеться (оновлення, 9 травня 2022: StarkGate жити в Main)

Вийнято! Ми з радістю опускаємо StarkGate Ala, першу версію Bridge, StarkNete, зараз ми живемо на тестовій мережі GoerY, а розгортання Mainnet доступне для скоро.*

\*(оновлення, 9 травня 2022: StarkGate живе на Main)

**Важливе зауваження: це альфа-версія StarkGate Alpha (прочитайте тонке друк нижче!).**

![](/assets/starkgate_01.png)

Перш ніж продовжити, йдіть і перевірте його! [StarkGate Testnet](https://goerli.starkgate.starknet.io/),[StarkGate Mainnet](https://starkgate.starknet.io/)

StarkGate служить шлюзом між Ethereum і[StarkNet](https://starknet.io/)і дозволяє користувачам робити все, що вони можуть очікувати від мосту.

#### **Де я можу знайти інформацію про те, як працює StarkGate ?**

Щоб зрозуміти, як працює StarkGate прочитайте[технічну документацію](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)і погляньте на[код](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate). Зверніть увагу, що це перша версія, і ми запрошуємо ваші відгуки та пропозиції, як поліпшити обидва[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)і[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).

#### **Які токени будуть підтримуватися StarkGate?**

* StarkGate Alpha на Goerli підтримує ETH і декілька інших токенів ERC-20. Повний список і відповідні контракти адреси, як на Ethereum так і StarkNet, доступні в цьому[repo](https://github.com/starkware-libs/starknet-addresses).
* В головній мережі "StarkGate Alpha підтримуватиме лише ETH", щоб дозволити використання тарифного механізму. Пізніше, ми додамо підтримку WBTC, USDC, USDT, і DAI. Тут ви можете побачити відповідні контрактні адреси в[repo](https://github.com/starkware-libs/starknet-addresses/blob/master/bridged_tokens/mainnet.json).

Далі вниз по дорозі ми опублікуємо механізм додавання підтримки для додаткових токенів.

#### **Які обмеження безпеки матимуть StarkGate на головній сторінці?**

StarkGate Alpha в Mainnet запускається з двома обмеженнями - для зменшення ризиків, пов'язаних із використанням версії Альфа:

1. Загальне значення, що заблоковане (TVL) в мості, буде зменшуватися на кількість кожного типу токена.
2. Максимальна сума в кожній транзакції, відправленій з L1 до L2 (Ethereum→StarkNet) через StarkGate буде обмежена.

Ми плануємо поступово полегшити ці обмеження і зняти їх повністю, оскільки зростає довіра. Оновлені параметри можна знайти в документації[StarkGate](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge).

![](/assets/starkgate_02.png)

### Альфа і що це означає

Як завжди, ми нагадуємо вам, що StarkNet зараз знаходиться на етапі**Альфа**:

* Речі можуть ламатися. Якщо вони не зазнали катастрофи, ваші кошти можуть бути втрачені (**прочитайте заяву нижче**!).
* Контакти StarkNet Alpha, StarkGate можна оновити без timelock. Хоча ми очікуємо оголосити про такі оновлення задовго до часу, у випадку неминучих ризиків безпеки (наприклад, якщо виявлена критична помилка), оновлення може бути застосоване з невеликим або відсутнім.
* Коди мосту, як і частини StarkNet Alpha, ще не пройшли аудиту. АБДК та Нідерланди аудиту StarkGate Альфа скоро завершиться.

Ми заохочуємо всіх користувачів допомагати покращити мост, надаючи відгуки від використання однієї з наступних платформ:

1. [Резиденція StarkGate](https://github.com/starkware-libs/starkgate-frontend)
2. [StarkGate контракти repo](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate)
3. [Шоманс СтаркНет](http://community.starknet.io/)

Щоб отримати відповіді на запитання та отримати підтримку розробників, приєднайтеся до[сервера Discord StarkNet](https://discord.gg/uJ9HZTUk2Y).

### Умови обмеженої відповідальності

***StarkNet Alpha - нова і складна система, яку не пройшли повністю. Те саме стосується StarkNet Bridge. Як і у всіх складних програмних системах, як і в StarkNet і в мості, можуть містити помилки, які можуть містити в крайніх випадках може призвести до втрати всіх ваших коштів. Отже,***крадіжки обережно і обережно!******

*Система StarkNet - це великий і швидко зростаючий набір незалежних команд і осіб, за яких Старквейр не має нагляду і не бере ніякої відповідальності. Будь-який один із проектів, розроблених членами екосистеми, може містити помилки, які, в крайньому випадку, можуть призвести до втрати всіх ваших коштів. Крім того, оскільки більш розумні договори розгортаються, потенціал для ненавмисних шкідливих помилок і навіть шкідливих аромат і кидання кишки збільшуються. Таким чином, ставлячись до всіх розумних контрактів на StarkNet через те, що ви ставитеся до розумних контрактів на Ethereum, і використовуйте тільки ті кому у вас є вагомі підстави довіряти як безпечні.*