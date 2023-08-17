### TL;DR

* הגרסה הראשונה של StarkNet Bridge, StarkGate Alpha, פעילה ב**[Testnet](https://goerli.starkgate.starknet.io/)**וב**[Mainnet](https://starkgate.starknet.io/)**!
* אנו ממתינים למשוב מהקהילה כיצד ניתן לשפר דברים. אתה יכול לשלוח את המשוב שלך עבור[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)ו[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).
* פריסת Mainnet תגיע בקרוב (עדכון, 9 במאי 2022: StarkGate פעיל ב-Mainnet)

התרגשות! אנו נרגשים לשחרר את StarkGate Alpha, הגרסה הראשונה של StarkNet's Bridge, פעילה כעת ב-Goerli testnet, עם פריסת Mainnet בקרוב.*

\*(עדכון, 9 במאי 2022: StarkGate פעיל ב-Mainnet)

**כתב ויתור חשוב: זוהי גרסת אלפא ב-StarkGate Alpha (קרא את האותיות הקטנות למטה!).**

![](/assets/starkgate_01.png)

לפני שתמשיך, לך תבדוק! [StarkGate Testnet](https://goerli.starkgate.starknet.io/),[StarkGate Mainnet](https://starkgate.starknet.io/)

StarkGate משמש כשער בין Ethereum ל[StarkNet](https://starknet.io/), ומאפשר למשתמשים לעשות כל מה שהם יכולים לצפות מגשר.

#### **היכן אוכל למצוא מידע על אופן הפעולה של StarkGate?**

כדי להבין איך StarkGate עובד, קרא את התיעוד הטכני[](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)והסתכל על קוד[](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate). שים לב שזו הגרסה הראשונה, ואנו מזמינים את המשוב וההצעות שלך כיצד לשפר את[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)ו[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).

#### **אילו אסימונים יתמכו על ידי StarkGate?**

* StarkGate Alpha ב-Goerli תומך ב-ETH ובכמה אסימוני ERC-20 אחרים. הרשימה המלאה וכתובות החוזים הרלוונטיות, הן ב-Ethereum והן ב-StarkNet, זמינות ב[repo](https://github.com/starkware-libs/starknet-addresses)זה.
* ב-Mainnet, בתחילה, StarkGate Alpha תתמוך רק ב-ETH כדי לאפשר שימוש במנגנון העמלות. בהמשך, נוסיף תמיכה עבור WBTC, USDC, USDT ו-DAI. אתה יכול לראות את כתובות החוזה הרלוונטיות ב[repo](https://github.com/starkware-libs/starknet-addresses/blob/master/bridged_tokens/mainnet.json)זה.

בהמשך הדרך, נפרסם את המנגנון להוספת תמיכה באסימונים נוספים.

#### **אילו מגבלות בטיחות יהיו ל-StarkGate Alpha ב-Mainnet?**

StarkGate Alpha ב- Mainnet מושק עם שתי מגבלות - על מנת להפחית את הסיכונים הכרוכים בשימוש בגרסת אלפא:

1. הערך הכולל הנעול (TVL) בגשר על L1 יגביל את הכמות של כל סוג אסימון.
2. הסכום המקסימלי בכל עסקה שנשלחה מ-L1 ל-L2 (Ethereum →StarkNet) דרך StarkGate יהיה מוגבל.

אנו מתכננים להקל בהדרגה את המגבלות הללו ולהרים אותן לחלוטין ככל שהביטחון גדל. ניתן למצוא את הפרמטרים המעודכנים בתיעוד[של StarkGate](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge).

![](/assets/starkgate_02.png)

### אלפא ומה זה אומר

כמו תמיד, אנו מזכירים לכם ש-StarkNet נמצאת כעת בשלב**אלפא**שלה:

* דברים יכולים להישבר. אם הם נכשלים בצורה קטסטרופלית, הכספים שלך עלולים ללכת לאיבוד (**קרא את כתב הוויתור למטה**!).
* ניתן לשדרג גם את חוזי StarkNet Alpha וגם את StarkGate ללא נעילת זמן. למרות שאנו מצפים להכריז על שדרוגים כאלה הרבה לפני הזמן, במקרה של סיכוני אבטחה קרובים (לדוגמה, אם נמצא באג קריטי), השדרוג עשוי להיות מיושם עם אזהרה מועטה או ללא אזהרה.
* הקוד של הגשר, כמו גם חלקים של StarkNet Alpha, טרם עברו ביקורת. הביקורות של ABDK ו-Nethermind של StarkGate Alpha יושלמו בקרוב.

אנו מעודדים את כל המשתמשים לעזור לשפר את הגשר על ידי מתן המשוב שלהם באמצעות אחת מהפלטפורמות הבאות:

1. [ריפו חזיתי של StarkGate](https://github.com/starkware-libs/starkgate-frontend)
2. [ריפו חוזי StarkGate](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate)
3. [שמאנים של StarkNet](http://community.starknet.io/)

לשאלות ותמיכה במפתחים, הצטרף לשרת דיסקורד[StarkNet](https://discord.gg/uJ9HZTUk2Y).

### כתב ויתור

***StarkNet Alpha היא מערכת חדשה ומורכבת שלא עברה ביקורת מלאה. אותו הדבר חל על גשר StarkNet. כמו כל מערכות התוכנה המורכבות, גם StarkNet וגם הגשר עלולים להכיל באגים שבמקרים קיצוניים עלולים להוביל לאובדן של כל הכספים שלך. אז,***לדרוך בזהירות ולהיזהר!******

*המערכת האקולוגית של StarkNet היא קבוצה גדולה וצומחת במהירות של צוותים ויחידים עצמאיים, שעליהם אין ל-StarkWare פיקוח ואינה נוטלת אחריות. כל אחד מהפרויקטים שפותחו על ידי חברי המערכת האקולוגית עלול להכיל באגים שבמקרים קיצוניים עלולים להוביל לאובדן כל הכספים שלך. יתר על כן, ככל שנפרסים יותר חוזים חכמים, הפוטנציאל לבאגים מזיקים לא מכוונים ואפילו הונאות זדוניות ומשיכת שטיחים גדל. לכן, התייחס לכל החוזים החכמים ב-StarkNet כפי שאתה מתייחס לחוזים החכמים ב-Ethereum, והשתמש רק באלו שיש לך סיבה טובה לסמוך עליהם כמאובטחים.*