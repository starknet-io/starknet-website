### TL;DR

* Первая версия StarkNet Bridge, StarkGate Alpha, жива на**[Testnet](https://goerli.starkgate.starknet.io/)**, а на**[Mainnet](https://starkgate.starknet.io/)**!
* Мы ожидаем обратной связи сообщества о том, как можно улучшить. Вы можете оставить свой отзыв о[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)и[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).
* Скоро начнется установка Mainnet (обновление, 9 мая 2022: StarkGate живет в Mainnet)

Розыгрыш! Мы рады выпустить StarkGate Alpha, первую версию моста StarkNet, которая теперь живет на Goerli testnet, с установкой Mainnet в ближайшее время.*

\*(обновление, 9 мая 2022: StarkGate живет в Mainnet)

**Важный отказ от ответственности: это альфа-версия StarkGate Alpha (читайте тонкую распечатку ниже!).**

![](/assets/starkgate_01.png)

Прежде чем продолжить, проверьте его! [StarkGate Testnet](https://goerli.starkgate.starknet.io/),[StarkGate Mainnet](https://starkgate.starknet.io/)

StarkGate служит шлюзом между Ethereum и[StarkNet](https://starknet.io/), и позволяет пользователям делать все, что они могут ожидать от моста.

#### **Где можно найти информацию о том, как работает StarkGate?**

Чтобы понять, как работает StarkGate, прочитайте[техническую документацию](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)и ознакомьтесь с[кодом](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate). Обратите внимание, что это первая версия, и мы приглашаем вас оставить отзыв и предложения по улучшению и[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)и[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).

#### **Какие токены будут поддерживаться StarkGate?**

* StarkGate Alpha on Goerli поддерживает ETH и несколько других ERC-20 токенов. Полный список и соответствующие контрактные адреса, как на Ethereum и StarkNet, доступны в этом[репозитории](https://github.com/starkware-libs/starknet-addresses).
* На Mainnet, первоначально StarkGate Alpha будет поддерживать только ETH для разрешения использования механизма комиссии. Позже мы добавим поддержку WBTC, USDC, USDT и DAI. Вы можете увидеть соответствующие адреса контракта в этом[репозитории](https://github.com/starkware-libs/starknet-addresses/blob/master/bridged_tokens/mainnet.json).

Далее мы опубликуем механизм добавления поддержки дополнительных токенов.

#### **Какие ограничения безопасности будут иметь StarkGate Alpha на Mainnet?**

Выпуск StarkGate Alpha на Mainnet имеет два ограничения — для уменьшения рисков, связанных с использованием альфа-версии:

1. Общее значение заблокированного (TVL) моста на L1 будет ограничивать количество каждого типа токенов.
2. Максимальная сумма каждой транзакции, отправленной с L1 на L2 (соответственно, StarkNet) через StarkGate будет ограничена.

Мы планируем постепенно смягчить эти ограничения и полностью поднять их по мере укрепления доверия. Обновленные параметры можно найти в[документации StarkGate](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge).

![](/assets/starkgate_02.png)

### Альфа и что это значит

Как всегда, мы напоминаем, что StarkNet находится в стадии**Альфа**:

* Вещи могут ломаться. Если они катастрофически потерпели неудачу, ваши средства могут быть потеряны (**прочитайте заявление об отказе от ответственности ниже**!).
* Как StarkNet, так и StarkGate контракты могут быть обновлены без временных рамок. Хотя мы ожидаем объявить о таких усовершенствованиях заблаговременно, в случае неминуемого риска для безопасности (например, при обнаружении критической ошибки), обновление может быть применено с маленьким предупреждением или без него.
* Код моста, а также части StarkNet Alpha, еще не проверены. Аудитория ABDK и Нидерландов StarkGate Alpha скоро будет завершена.

Мы призываем всех пользователей помочь улучшить мост, предоставив свои отзывы, используя одну из следующих платформ:

1. [StarkGate репозиторий](https://github.com/starkware-libs/starkgate-frontend)
2. [StarkGate Repo](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate)
3. [StarkNet Shamans](http://community.starknet.io/)

Для вопросов и поддержки разработчика присоединяйтесь к[серверу discord StarkNet](https://discord.gg/uJ9HZTUk2Y).

### Оговорка

***StarkNet Alpha является новой и сложной системой, которая не была полностью проверена. То же самое относится и к мосту StarkNet. Как и все сложные программные системы, StarkNet и мост могут содержать ошибки, которые, в крайних случаях может привести к потере всех Ваших средств. Итак,***протектор осторожно и остерегайся!******

*экосистема StarkNet является крупным и быстро растущим набором независимых команд и людей, в отношении которых StarkWare не контролирует и не берет на себя никакой ответственности. Любой проект, разработанный участниками экосистем, может содержать ошибки, которые в экстремальных случаях могут привести к потере всех ваших средств. Кроме того, по мере внедрения более интеллектуальных контрактов увеличивается вероятность непреднамеренных вредных ошибок, а даже злоумышленных мошенничеств и подталкивания сурков. Таким образом, обрабатывайте все смарт-контракты на StarkNet как вы относитесь к смарт-контрактам на Ethereum, и используйте только те, которые у вас есть веские причины доверять как безопасные.*