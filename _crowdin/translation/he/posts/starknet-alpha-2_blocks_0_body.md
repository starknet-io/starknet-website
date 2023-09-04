### TL;DR

* Starknet תומכת כעת בשילוביות, התכונה העיקרית המגדירה את שלב הכוכבים של Starknet.
* אנו משחררים מסגרת בדיקה עבור Starknet - מפתחים יכולים כעת לבדוק את החוזים שלהם באופן מקומי ויעיל.
* מהדורה זו כוללת מספר שיפורים בולטים בביצועים, כגון תמיכה ב-Merkle-Patricia Tries ורכיב מובנה לפעולות סיביות.
* חזית המערכת האקולוגית:

1. חוזים סטנדרטיים: OpenZeppelin תפתח חוזים סטנדרטיים עבור Starknet, כפי שעשו עבור Ethereum!
2. EVM>Cairo Compiler: צוות Warp @ Nethermind הדגים קומפילציה של קוד ERC-20 Solidity לחוזי Starknet

### רקע כללי

Starknet היא אוסף חוקיות מבוזר ללא רשות (הידוע גם בשם "ZK-Rollup"). הכרזנו על</a> הדרכים

שלו בתחילת השנה. ה [Alpha](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), הפועל כעת על רשת Ethereum ציבורית, כבר תומך בפריסה ללא הרשאה של חוזים חכמים המיישמים כל היגיון עסקי, עם הודעות L1<>L2 ונתונים על השרשרת. יתר על כן, זה מאפשר לכל משתמש לשלוח עסקאות לרשת ללא רשות, בסגנון Ethereum.</p> 

מהדורה זו: Starknet Alpha 2, כוללת את תכונת הליבה המאפשרת לנו להתקדם מכוכבי הלכת לקונסטלציות: יכולת שילוב בין חוזים חכמים פרוסים.



### מאפיינים

Starknet Alpha 2 מציג את התכונות הבאות:

* יכולת חיבור: Starknet Alpha תומכת כעת באינטראקציה בין חוזים חכמים - לפני המועד! היופי בשדרוג הזה הוא שמפתחים יכולים לצפות כמעט לאותה חוויה כמו Ethereum; שיחות הן סינכרוניות וניתן להשתמש בהן כשיחות פונקציה. אנו ממתינים בכיליון עיניים ליישומים החדשים שייהנו הן מקנה מידה חישובי בלתי מוגבל והן מיכולת חיבור חוזים, כפי שפורסמה על ידי Starknet. כדי להבין כיצד להשתמש בתכונה זו, אתה יכול להתחיל על ידי ביצוע המדריך הזה [](https://www.cairo-lang.org/docs/hello_starknet/calling_contracts.html). נשמח לשמוע את המשוב שלך ולראות מה אתה בונה על [Starknet discord](https://discord.gg/uJ9HZTUk2Y).
* מסגרת בדיקה מקומית: ביקשת, ואנחנו סיפקנו - מסגרת בדיקה טובה [](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/starknet/testing). זה יאפשר למפתחים לזרז את פיתוח ה-dApp שלהם על ידי בדיקת הפריסה והאינטראקציות של חוזי Starknet שלהם באופן מקומי - ללא כל תלות חיצונית. גרסה זו כוללת רק אינטראקציה L2, הגרסאות הבאות ירחיבו את הפונקציונליות וקלות השימוש. בדוק את המדריך [כאן](https://www.cairo-lang.org/docs/hello_starknet/unit_tests.html), ונשמח לשמוע את המשוב שלך על תכונה זו.
* שיפורים בביצועים:

Patricia Trees: שיפרנו את העיצוב של Starknet כדי לתמוך בתפוקות גבוהות יותר ובזמן יצירת הוכחה קצר יותר על ידי מעבר למחויבות של מדינת Merkle-Patricia Tree ([תיעוד](https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/cairo/common/patricia_utils.py)). שינוי זה מאפשר יצירת בלוקים הרבה יותר גדולים, ובכך מוריד את העלות לעסקה. המעבר למחויבות מדינה מתוחכמת יותר התאפשר על ידי קהיר, שפת ה-ZKP - מרכיב ליבה של מערכת ההפעלה Starknet.

Bitwise Operations: הוספנו [מובנה](https://www.cairo-lang.org/docs/how_cairo_works/builtins.html) כדי לתמוך בפעולות bitwise הרבה יותר יעילות בחוזי Starknet ([תיעוד](https://www.cairo-lang.org/docs/reference/common_library.html#common-library-bitwise)).

* גורלי: סטארקנט עוברת מרופסטן ל [גורלי](https://goerli.etherscan.io/address/0xee02F29aE9A4988aE064940bF11954d6eafE26Ac)! סוף סוף, שחררנו את המערכת שלנו מגחמותיהם של האלים רופסטן. אלפא 2 יפעל כעת על סביבת פיתוח יציבה יותר.



### מערכת אקולוגית

המערכת האקולוגית של Starknet צומחת ללא הרף, ואנו שמחים לחלוק את החדשות האחרונות:

* חוזים סטנדרטיים: אנו מתכבדים לעבוד עם OpenZeppelin על ספריית החוזים הסטנדרטיים של Starknet. העבודה הקנונית שלהם על החוזים הסטנדרטיים של Ethereum משרתת את כולנו מדי יום, ואנו בטוחים שהם יהיו משפיעים כאן באותה מידה.
* מהדר EVM->Cairo: צוות Warp [של Nethermind הדגים](https://medium.com/nethermind-eth/warp-your-way-to-starknet-ddd6856875e0) טרנספילציה של חוזה ERC-20 מ-EVM bytecode לחוזה Starknet ופריסה ב-Starknet. המאמץ הזה מתקדם במהירות, והמטרה הבאה שלנו היא הטרנספילציה של חוזים חכמים שרירותיים מיול לקהיר.
* Maker-on-Starknet: הצעה [](https://forum.makerdao.com/t/mip39c2-sp19-adding-the-starknet-engineering-core-unit-sne-001/9745) הוגשה ל-Maker DAO ליישום פרוטוקול Maker על גבי Starknet. השלב הראשון מציע גשר DAI מאתריום ל-Starknet עם הטבעה של DAI ב-Starknet.
* שירותי ביקורת של Starknet/Cairo: אנו מזמינים מספר חברות ביקורת כדי לספק שירותי ביקורת חוזים חכמים של Starknet ותוכניות קהיר.



### Mainnet מעבר לפינה

אנחנו מתכוננים להשקת Starknet Alpha Mainnet, שמתחילה בהדרגה עם סט יישומים ברשימת ההיתרים. מספר פרויקטים נמצאים בעיצומם ועוד מתווספים באופן פעיל מדי יום. כדי להצטרף למסיבה, אתם מוזמנים לפנות דרך [דיסקורד](https://discord.gg/uJ9HZTUk2Y).

עדכון (נובמבר 2021): Starknet Alpha פעיל ב-Ethereum Mainnet