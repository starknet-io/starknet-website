### **TL;DR**

* [StarkNet Planets Alpha](https://voyager.online/)- הצעד הראשון בדרכנו ל- Mainnet - זמין כעת ב-Testnet!
* [StarkNet](https://starkware.co/product/starknet/)הוא ZK-Rollup ללא רשות ללא רשות טיורינג.
* מפתחים יכולים ליישם את ההיגיון העסקי המועדף עליהם בחוזה חכם ולפרוס אותו ללא רשות ב-StarkNet.
* מעברי המדינה של StarkNet מוכחים מחוץ לשרשרת ולאחר מכן מאומתים ברשת.
* בדומה ל-Ethereum, משתמשים יכולים ליצור אינטראקציה ישירה עם החוזים החכמים הללו.

### **מבוא**

[הכרזנו](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)על מפת הדרכים עבור[StarkNet](https://starkware.co/product/starknet/)בינואר 2021. הגביע הקדוש של פתרונות המדרגיות יתמוך ב(i) חוזים חכמים שרירותיים, עם (ii) יכולת קומפוזיציה, (iii) מופעלים על גבי רשת מבוזרת. היום אנו מכריזים על הפריסה ב-testnet של שלב 1: StarkNet Planets Alpha. מערכת אלפא תומכת בחוזים חכמים שרירותיים. יכולת ההרכבה תתמוך בהמשך השנה, ובהמשך ביזור.

חשוב לנו מאוד להיות שקופים לחלוטין ולקבוע ציפיות כמו שצריך. מטרת הפוסט הזה היא לרשום בבירור מה כבר נתמך ואילו פונקציות עדיין חסרות. מה שאנחנו משחררים היום הוא עבודה בתהליך ב-testnet. אנו מאמינים שהשחרור המוקדם הזה יעזור להיווצרות מערכת אקולוגית בריאה סביב StarkNet והכלים שלה. אנחנו להוטים לערב מפתחים בבניית הרשת איתנו ולקבל משוב רציף מהקהילה.

### **מה יש ב-StarkNet Planets Alpha?**

**פונקציונליות:**ה-Alpha מאפשר למפתחים לכתוב ולפרוס חוזי StarkNet לחישוב כללי. אין רשימת היתרים - כל מפתח יכול לכתוב ולפרוס כל חוזה שהוא רוצה. משתמשים יכולים ליצור אינטראקציה עם חוזים אלה, על ידי שליחת עסקאות אליהם ובדיקת מצבם. כל החוזים קיימים במדינה אחת². עדכונים למצב זה מוכחים מחוץ לשרשרת, ומאומתים על השרשרת - באלפא, האימות נעשה ב-testnet.

**StarkNet OS:**הפונקציונליות שלעיל נתמכת על ידי "מערכת הפעלה" חדשה שאנו קוראים לה StarkNet OS. הוא מציע*מעברי מצב*הניתנים להוכחה ב-StarkNet. מפתחי Ethereum עשויים לחשוב על זה כעל המקבילה ל-EVM: הוא אחראי להפעיל פונקציות חוזים חכמים, טיפול באחסון חוזים וכו'. אנו נפרסם פוסט נפרד המפרט את הארכיטקטורה של מערכת ההפעלה StarkNet.

**מה אין באלפא?**ל-Alpha עדיין חסרות כמה יכולות מפתח, כגון אינטראקציה L1<>L2, נתונים על השרשרת ויכולת חיבור. עוד על אלה למטה.

#### **להרטיב את הרגליים**

התחל עם[ההדרכה והתיעוד שלנו](https://www.cairo-lang.org/docs/hello_starknet/).

לאחר מכן, תוכל לקרוא את החוזה החכם[](http://cairo-lang.org/docs/hello_starknet/amm.html)של AMM שכתבנו ופרסו ב-StarkNet. זהו AMM פשוט, ואתה יכול ליצור איתו אינטראקציה[כאן](https://starkware-amm-demo.netlify.app/swap). כעת אתה מוכן לכתוב ולפרוס חוזים חכמים ב-StarkNet. סייר הבלוקים של StarkNet -[Voyager](https://voyager.online/)- מאפשר לכל אחד לבדוק את מצבה של StarkNet.\
על ידי הרטבת רגליים, אנו מאמינים שתהיה מוכנה יותר לבנות על StarkNet, ככל שאנו ממשיכים להשיק תכונות נוספות. אנחנו כבר עסוקים בתכנון האקתון ראשון, כמו גם סדנאות למפתחים.

### **השלבים הבאים עבור StarkNet**

יכולות המפתח שעדיין חסרות ב-Alpha יושקו החל מהשבועות הקרובים. אלו הם:

* אינטראקציה L1<>L2, למשל היכולת להפקיד ולמשוך כספים ב-L1.
* נתונים על השרשרת: פרסום כל שינויי האחסון ב-Ethereum.
* יכולת קומפוזיציה: מתן אפשרות לחוזים לתקשר זה עם זה.

עם תכונות אלו, נהיה מוכנים להביא את StarkNet ל-Ethereum Mainnet. אנו קוראים לשלב הזה באבולוציה של StarkNet Constellations, וכשנגיע אליו, תוכל לבנות ולפרוס ללא רשות על Ethereum Mainnet DApps L2 הניתנים להרחבה.

#### **המערכת האקולוגית של StarkNet**

אנחנו מאוד נרגשים מהמערכת האקולוגית שמתהווה סביב StarkNet אז נעצור כדי להודות למשתפי הפעולה שלנו עד כה.

אנו עובדים בשיתוף פעולה הדוק עם[Nethermind](https://twitter.com/nethermindeth)וצוות Nubia,[Alexey Akhunov](https://twitter.com/realLedgerwatch)(Erigon) &[Igor Mandrigin](https://twitter.com/mandrigin)(gateway.fm),[Iddo Bentov](https://www.cs.cornell.edu/~iddo/),[dOrg](https://twitter.com/dOrg_tech),[Prof. Tim Roughgarden](https://twitter.com/algo_class),[Prof. ג'רמי אביגד](https://www.andrew.cmu.edu/user/avigad/)& יואב סגינר, אחרון חביב - צוות[פרדיגמה](https://twitter.com/paradigm).\
השותפים המוקדמים שלנו -[dYdX](https://twitter.com/dydxprotocol),[Immutable](https://twitter.com/Immutable),[DeversiFi](https://twitter.com/deversifi), כמו גם[Sorare](https://twitter.com/SorareHQ),[Celer](https://twitter.com/CelerNetwork)ואחרים - מספקים לנו מידע רב ערך מהיום הראשון, ומאפשרים לנו לבנות הפקה רשת בדרגה למשתמשים אמיתיים.\
אנו ממשיכים להיות מופתעים מאיכות התוכן שנוצר על ידי הקהילה, על ידי אנשים כגון[Bobbin Threadbare](https://twitter.com/bobbinth),[Daniel Kroni](https://github.com/danielkroeni/cairo-playground/blob/main/anon-bank/README.md),[Adrian Hamelink](https://twitter.com/adr1anh),[perama](https://twitter.com/eth_worm),[Francesco Ceccon](https://twitter.com/ceccon_me),[Ilian](http://twitter.com/imalchev), וצוות[אלכסנדריה](https://blockchainpartner.fr/).

אנחנו להוטים לראות מה הקהילה תיצור בכל החזיתות: כלי מפתחים, תוכן וכמובן יישומי StarkNet שהם יבנו. בואו נמשיך את השיחה במדיה המועדפת עליכם:[דיסקורד](https://discord.gg/uJ9HZTUk2Y),[טוויטר](https://twitter.com/CairoLang),[אימייל](mailto:info@starkware.co), ובקרוב באמצעות צורות התקשורת המבוזרות ביותר: f2f.

¹ אנחנו לא מעריצים של המונח ZK-Rollup, שכן - מבחינה מתמטית - זה לא אפס ידע, אבל כולכם יודעים למה אנחנו מתכוונים

² בניגוד למצב הנפרד שנשמר עבור פריסות נוכחיות של StarkEx ב-Mainnet

**עדכון (נובמבר 2021):**StarkNet Alpha פעיל ב-Ethereum Mainnet