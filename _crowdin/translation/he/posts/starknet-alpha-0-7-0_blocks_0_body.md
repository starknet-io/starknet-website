### TL;DR

* StarkNet Alpha 0.7.0 שוחרר ל-Goerli; עמוס בשיפורים
* כעת ניתן לשדרג חוזים באמצעות דפוס שדרוג ה-Proxy
* חוזים יכולים כעת לפלוט אירועים
* תמיכה עבור שיחות מערכת חסימת מספר חסום וחסימה זמן המיוחל

### הקדמה

אנו שמחים לשחרר את Alpha 0.7.0, גרסה עמוסה בתכונות חדשות ושיפורים. אחד הממריצים הטובים ביותר ל-StarkNet במהלך החודשים האחרונים היה המעורבות המוגברת של הקהילה בעיצוב העתיד של StarkNet. גרסה זו נותנת מענה לחלק מהצרכים הבוערים של הקהילה.

#### שינויים באמנת השמות

הקורא המתבונן אולי שם לב שהמהדורה הקודמת של StarkNet Alpha נקראה Alpha 4, בעוד שאנו משחררים כעת את Alpha 0.7.0. החלטנו להשמיט את מספר גרסת האלפא הייעודי ולהסתמך במקום זאת רק על גרסת הקהיר-לנג המשויכת.

### תכונות חדשות

#### יכולת שדרוג חוזה

</a>

OpenZeppelin נתמך כעת באופן מלא עבור שדרוגי חוזים ב-StarkNet. דפוס ה-Proxy הוא השיטה הנפוצה לאפשר שדרוגי חוזה על פני Ethereum. Alpha 0.7.0 מאפשר דפוס זה דרך StarkNet.</p> 

עשינו מדריך קצר[](https://starknet.io/docs/hello_starknet/default_entrypoint.html)כדי להדגים יישום בסיסי של התבנית, ו-OpenZeppelin כבר עובדת במרץ על יישום חוזה סטנדרטי עבור תבנית ה-proxy; ראה את[אב הטיפוס](https://github.com/OpenZeppelin/cairo-contracts/pull/129).



#### מספר חסום וחותמת זמן חסימה

Alpha 0.7.0 מוסיף שתי קריאות מערכת חדשות שמפתחים רבים ביקשו. שיחות אלו מאפשרות לחוזה גישה למספר החסימה ולחותמת הזמן של החסימה. מספר הבלוק מחזיר את המספר של הבלוק הנוכחי שבוצע. חותמת הזמן של הבלוק מחזירה את חותמת הזמן שניתן על ידי הרצף בעת יצירת הבלוק.

אתה יכול לראות דוגמה לשימוש בתכונות אלה במדריך[](https://starknet.io/docs/hello_starknet/more_features.html#block-number-and-timestamp).



#### אירועים

הַפתָעָה! תכונה שתוכננה לגרסה עתידית התגנבה לגרסה הקודמת הזו.

חוזי StarkNet תומכים כעת בהגדרה ופליטת אירועים, ומאפשרים להם לחשוף מידע ביצוע עבור יישומים מחוץ לרשת לצרוך. מפתחי Ethereum ימצאו את הסמנטיקה והתחביר דומים מאוד לסולידיטי. אתה יכול לקרוא את התיעוד[](https://starknet.io/documentation/events/), או לעקוב אחר המדריך[](https://starknet.io/docs/hello_starknet/events.html), המסביר תכונה זו.



#### הוסר %bUiltins Direktiv

ההנחיה %builtin כבר אינה נחוצה בחוזי StarkNet. שינוי זה בא בעקבות דיון קהילתי על דפוס ההרחבה[של חוזה](https://community.starknet.io/t/contract-extensibility-pattern/210)ב[StarkNet Shamans](https://community.starknet.io/). זה מפשט באופן משמעותי את השימושיות של דפוס הרחבה זה.

לדוגמה, החוזה הבא ישתנה מ:



```
%lang starknet

# זוהי הנחיית "%butilins".
# אין צורך בו יותר.
%builtins range_check

@view
func add(x : felt, y : felt) -> (res : felt):
return (res=x + y)
end
```


לזה:



```
%lang starknet
@view
func add(x : felt, y : felt) -> (res : felt):
return (res=x + y)
end
```


אתה יכול לבדוק את החוזים הסטנדרטיים[ERC-20](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts/token), המשתמשים בדפוס החדש.



#### פונקציות חיצוניות תומכות במערכים של מבנים

Alpha 0.7.0 תומך במעבר והחזרה של מערכים של מבנים בפונקציות חיצוניות. פונקציונליות נוספת זו מאפשרת לחוזי חשבון לתמוך טוב יותר[שיחות מרובות](https://github.com/OpenZeppelin/cairo-contracts/pull/73#discussion_r753535751).

Multicall היא תכונה רבת עוצמה של Account Abstraction המאפשרת לחשבון לבצע מספר שיחות בעסקה אחת. מקרה שימוש ברור הוא של יצירת**עסקה בודדת**שקוראת לקצבה ולאחר מכן העברה מאת.

אנחנו מצפים לראות מה הקהילה עושה עם זה.



#### שיפורים ל-StarkNet CLI

**תמיכה בבלוקים ממתינים**

[בלוקים ממתינים](https://starknet.io/documentation/block-structure-and-hash/#pending_block)הוצגו[](https://community.starknet.io/t/cairo-v0-6-2-api-change-pending-block/195)בגרסה המשנית האחרונה (v0.6.2) והציעו אישורים מהירים יותר על עסקאות. גרסה זו כוללת תמיכה בשאילתה של בלוקים אלה באמצעות StarkNet CLI.

כדי להשתמש בו, בכל פקודת CLI שלוקחת את block_number כארגומנט (contract_call/get_block/get_code/get_storage_at), נוכל לבצע שאילתות ב-StarkNet ביחס לבלוק הממתין על ידי ציון block_number=pending.

**תמיכה בחוזי חשבון**

StarkNet משתמשת בהפשטת חשבונות, כלומר, כל החשבונות מיושמים כחוזמים חכמים. ההטמעות הראשונות של חוזי חשבון נעשו על ידי[Argent](https://github.com/argentlabs/argent-contracts-starknet)ו[OZ](https://github.com/OpenZeppelin/cairo-contracts/blob/main/contracts/Account.cairo), אך אנו מצפים שיבואו רבים נוספים.

ב-StarkNet, כל העסקאות חייבות לעבור חוזה חשבון, וה-CLI מאפשר כעת אינטראקציה עם StarkNet Alpha ישירות דרך חוזי חשבון. עיין במדריך[](https://starknet.io/docs/hello_starknet/account_setup.html#setting-up-a-starknet-account)כיצד להגדיר אותו.

פונקציונליות דומה נוספה גם ל[StarkNet.py](https://github.com/software-mansion/starknet.py/)ול[Nile](https://github.com/OpenZeppelin/nile)בחודש האחרון.



#### L1<>L2 הודעות במסגרת הבדיקה

אלפא 0.7.0 מציגה את הדוור. The Postman מאפשר למפתחים להשתמש במסגרת הבדיקה כדי לבדוק זרימות מסובכות יותר.

ברמה גבוהה - הוא לועג לאחריותו של StarkNet Sequencer להעביר הודעות מ-L1 ל-L2 ו-L2 ל-L1. הוא מוודא שהודעות שנשלחות באמצעות חוזה הודעות Solidity יופיעו בחוזה StarkNet היעד והודעות שנשלחו מחוזה StarkNet יופיעו בחוזה הודעות Solidity.



#### ועוד תכונות

Alpha 0.7.0 מספקת עוד הרבה תכונות ושינויים, כמו הוספת פונקציית שורש ריבועית יעילה לספרייה המשותפת במתמטיקה. רשימה מלאה מופיעה ביומן השינויים[](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.7.0).



### הבא בתור?

תמיכה ראשונית[Fee Mechanism](https://community.starknet.io/t/fees-in-starknet-alpha/286/29)תשוחרר תוך מספר שבועות, כגרסת משנה של StarkNet.



### עוד מידע?

[starknet.io](https://starknet.io/): לכל המידע, ההדרכות והעדכונים של StarkNet.

[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y): הצטרף כדי לקבל תשובות לשאלות שלך, לקבל תמיכת מפתחים ולהיות חלק מהקהילה.

[שמאנים של StarkNet](https://community.starknet.io/): הצטרפו כדי לעקוב (ולהשתתף!) בדיוני המחקר של StarkNet.