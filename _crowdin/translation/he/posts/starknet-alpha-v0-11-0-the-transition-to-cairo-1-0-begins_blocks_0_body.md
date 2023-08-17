## TL;DR

* Starknet alpha v0.11.0 יצא ופעיל ב-Testnet
* כעת אתה יכול לפרוס ולקיים אינטראקציה עם חוזי Cairo 1.0 ב-Starknet Testnet!
* החישוב ב-Starknet זול פי 5!
* בפעם הראשונה, השדרוג של Mainnet ל-Starknet alpha v0.11.0 יובא להצבעת ממשל
* זה מסמן את תחילת תקופת המעבר לפני[רג'נסיס](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)
* פריסת חוזי Cairo 1.0 ב-Mainnet תתאפשר רק לאחר מספר שבועות של ריצה ב-Testnet, ברגע שנוודא שהמערכת החדשה פועלת בצורה חלקה.

## מבוא

אנו נרגשים להכריז ש-Starknet alpha v0.11.0 המיוחל פעיל ב-Testnet! למה זה צעד גדול עבור Starknet? ב-Starknet v0.11.0, אתה יכול להכריז, לפרוס ולהפעיל[חוזים חכמים של Cairo 1.0](https://medium.com/starkware/cairo-1-0-is-here-7e1ac8377038). אנו מציגים גם קריאת מערכת חדשה המאפשרת מעבר חלק של חוזים קיימים למימוש Cairo 1.0.

Cairo 1.0 משפר את Starknet בשני היבטים שונים. ראשית, הוא משפר את חווית הפיתוח על ידי הצעת שפת תכנות עשירה יותר, המציגה (בין היתר) סוגים/גנריות/תכונות/טיפול בשגיאות לקהיר. שנית, קהיר 1.0 ממלאת תפקיד מפתח במסע הביזור של Starknet: חוזי קהיר 1.0 שנשלחו ב-Starknet alpha v0.11.0 קומפלט לסיירה. סיירה מבטיחה שכל ביצוע חוזה ניתן להוכחה, שהוא נכס מכריע ב-Starknet מבוזרת.

שיפור חשוב נוסף שמגיע בגרסה זו הוא הפחתת עלות חישוב פי 5. זה יהפוך את Starknet אפילו יותר ידידותי ליישומים עתירי חישוב. פרטים נוספים בהמשך.

## מתכוננים לרג'נסיס

Starknet alpha v0.11.0 מסמנת את תחילת תקופת המעבר, שתאפשר הכנה לקראת ה-Regenesis של Starknet. תוכנית Regenesis של Starknet פורסמה[](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)לפני מספר חודשים, והיא מתמקדת במעבר ממערכת המבוססת על קהיר 0 למערכת המבוססת על קהיר 1.0.

במהלך תקופת המעבר, לחוזי קהיר 0 קיימים (אם הם ניתנים לשדרוג) יש הזדמנות לשמור על הכתובת והאחסון שלהם, ולהעביר בצורה חלקה את היישום שלהם לקהיר 1.0 (ראה סעיף הבא).

כמשתמש Starknet, זה אומר שאתה צריך לשדרג את הארנק שלך רק ברגע שהיישום החדש של Cairo 1.0 של חשבונך ישוחרר (תוכל לעשות זאת בכל עת עד ל-Regenesis עצמו). לא צפויה השבתה, כל ה-dapps במערכת ימשיכו לפעול כרגיל.

לאחר ה-Regenesis, Starknet תפסיק לתמוך בחוזי קהיר 0 הנותרים בכל המערכת. זה יועבר היטב מראש, ולמפתחים יינתן מספיק זמן להעביר את החוזים שלהם. תקופת המעבר צפויה להימשך כמה חודשים, ומפתחי dapp כבר יכולים להתחיל להעביר את היישום שלהם לקהיר 1.0. בסוף תקופת המעבר תתרחש ה-Regenesis.

## הגירה חלקה לקהיר 1.0

עם המעבר לקהיר 1.0, חוזי קהיר 0 הקיימים בוטלו ולא ייתמכו עוד ב-Regenesis. כדי לאפשר לחוזי קהיר 0 הניתנים לשדרוג להמשיך לפעול, גם לאחר ה-Regenesis, ולהשאיר את המדינה בנויה עד אותה עת, הוספנו קריאת מערכת חדשה - ['replace_class'](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#replace_class_syscall). לחוזים הניתנים לשדרוג אין בעיה עם שדרוג למימוש קהיר 1.0, אבל ה-proxy הבסיסי (החוזה שמחזיק את המצב בפועל) עדיין יהיה תקוע עם היישום של קהיר 0. ה-syscall \`replace_class\` פותרת בעיה זו בכך שהיא מאפשרת לחוזה ה-proxy להחליף את המחלקה הבסיסית שלו, כלומר לשמור על אותה כתובת ואחסון, אך להחליף את המימוש.

## החישוב זול כעת פי 5!

כיום, לעמלות העסקאות של Starknet יש שני מרכיבים עיקריים: חישוב ונתונים על השרשרת. האלמנט החישובי של עמלת העסקה של Starknet נקבע על פי העלות השולית של אימות ההוכחה שלה ב-L1 (ראה[מסמכים](https://docs.starknet.io/documentation/architecture_and_concepts/Fees/fee-mechanism/)לפרטים נוספים).

במקור, צעדי 200 מ' קהיר שלנו בהוכחה הדורשת 5 מ' גז לאימות הובילו להערכה נאיבית של 0.05 גז לכל צעד קהיר. מאז עברנו ל[הוכחות רקורסיביות](https://medium.com/starkware/recursive-starks-78f8dd401025)המאפשרות הפחתה משמעותית בעלות האימות של L1 (רק השורש של עץ הרקורסיה מגיע ל-L1). כעת הגיע הזמן לעדכן את ההערכות המקוריות שלנו בהתאם - המחיר של כל צעד קהיר ב-L2 יופחת פי 5, ויעלה כעת 0.01 דלק.

הפחתת עלויות זו משמעותית עבור יישומים עתירי חישוב, למשל חוזי חשבון עם חתימות שאינן מקוריות. עסקאות פשוטות יראו הפחתה קלה בעלויות (~ 5%). בגרסאות עתידיות, נטפל ברכיב השני: עלויות נתונים על השרשרת. ברגע שחלופות לנתונים ברשת יוצגו ל-Starknet (המכונה Volition), הפחתת העלויות תורגש בכל רחבי הלוח.

## הצבעה ראשונה של ממשל סטארקנט

השלב הראשון של Starknet Governance יצא לדרך (פרטים נוספים[כאן](https://medium.com/starknet-foundation/starknets-governance-first-phase-4614c7566f40)). חברי הקהילה יכולים כעת להשתתף בעיצוב Starknet באמצעות ערוץ נוסף, כלומר הצבעה על שינויי פרוטוקול.

השלבים הראשונים של Starknet Governance יתמקדו בשדרוגי פרוטוקול Starknet. כל שדרוג גרסת Starknet ייפרס לראשונה ב-Testnet; לבוחרים תהיה תקופה של 6 ימים לבחון ולבדוק את הגרסה המשודרגת כפי שהיא פועלת על Goerli. במהלך תקופה זו, תיפתח הצעת סנאפצ'ט, והקהילה תוכל להצביע אם לאשר את הגרסה החדשה לפריסת Mainnet.

אם ההצעה תזכה לרוב קולות 'כן' במהלך תקופת ההצבעה בת 6 הימים, ההצעה תעבור וסטרקנט Mainnet תשודרג בהתאם.

Starknet alpha v0.11.0 היא גרסת Starknet הראשונה שעומדת להצבעה. הצבעת Starknet alpha v0.11.0 תהיה פתוחה למשך שישה ימים החל מפריסת Testnet.

קישורים רלוונטיים:

* [שטח תמונת מצב](https://snapshot.org/#/starknet.eth/proposal/0x00889bc468509610e516e8602f00b21ca8c32466dd4f0140eca38becb7f40bef)
* [דף גילוי משלחת](https://delegate.starknet.io/)
* שרשור דיון של Starknet alpha v0.11.0 בפורום[הקהילה](https://community.starknet.io/t/proposal-starknet-alpha-v0-11-0/50334)

## קהיר 1.0 וסיירה

Sierra (**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**tion) הוא ייצוג ביניים שמתחבר להרכבה בקהיר (CASM). לפני Starknet alpha v0.11.0, מפתח יקמפל את Cairo 0 לתוך CASM ושולח את התוצאה לרצף של Starknet. עם Cairo 1.0, מפתחים מרכיבים את הקוד שלהם לסיירה, ושולחים את ייצוג הביניים הזה לרצף. לאחר מכן הרצף יקמפל אותו ל-CASM. סיירה מובטחת לבצע קומפילציה ל-"CASM בטוח", כלומר תת-קבוצה של CASM שאינה יכולה להיכשל, מה שהופך כל הפעלה לניתנת להוכחה. זה מבטיח שהסיקוונסר יוכל לגבות עמלות גם עבור עסקאות שהוחזרו, תוך הגנה מפני DOS. למידע נוסף, ראה[המסמכים](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/).

![](https://miro.medium.com/v2/resize:fit:1400/0*KsAwaJTIsOuCsJIe)

Starknet alpha 0.11.0 ישתמש</a>

Cairo 1.0-alpha.6. גרסה זו קרובה ל[תכונה זוגית](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)עם קהיר 0, כאשר כל קריאות מערכת Starknet כבר קיימות.</p> 

שימו לב שהרצף של Starknet משתמש בגרסת מהדר קבועה, מה שאומר ששיפורי השפה לא יהיו זמינים באופן מיידי ב-Starknet, ויהיו זמינים רק לאחר עדכון גרסת Starknet. באופן ספציפי, בעוד שיפורים המשפיעים על הידור Cairo 1.0 → Sierra עשויים להיכנס לתוקף באופן מיידי, שינויים במהדר Sierra → CASM (ראה[docs](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/)לפרטים נוספים) יצטרכו להמתין לשדרוג של Starknet.



## מה עוד חדש?



### סוג עסקה חדש - הכרזה v2

אנו מוסיפים[סוג עסקה חדש](https://docs.starknet.io/documentation/architecture_and_concepts/Blocks/transactions/#declare_v2_cairo_1_0)להכרזה על מחלקות קהיר 1.0.

גרסת העסקה החדשה של \`declare\` דומה ל-\`declare\` הקיימת, עם שתי הבחנות חשובות:

* אובייקט המחלקה הנשלח כעת מייצג את סיירה ולא את CASM, כלומר הסמנטיקה של המחלקה מוגדרת על ידי הייצוג של סיירה.
* המשתמש חותם גם על ה-hash המחלקה המהידור. זהו צעד מכריע עד שהידור של סיירה → CASM יוכח כחלק ממערכת ההפעלה של Starknet.

לפרטים נוספים, ראה[המסמכים](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#what_to_expect).

מנקודת מבטו של המפתח, החוויה נשארת זהה. לאחר כתיבת קוד Cairo 1.0 שלך, תוכל להשתמש ב-CLI כדי להכריז על המחלקה.

**שימו לב שבתחילה, עסקאות \`declare v2\` לא יתקבלו ב-Starknet Mainnet. לאחר תקופה של ניסויים ב-Testnet, סוג העסקאות החדש יופעל ב-Mainnet, ומחלקות Cairo 1.0 יהפכו לזמינות.**



### פוסידון כאן

[Poseidon](https://www.poseidon-hash.info/)היא משפחה של פונקציות Hash המיועדות למעגלים אלגבריים יעילים מאוד. ככאלה, הם עשויים להיות שימושיים מאוד במערכות להוכחת ZK כגון STARKs ו- SNARKs. החל מ-Starknet alpha v0.11.0, מפתחים יוכלו להשתמש ב-Poseidon. בנוסף, חלק מחישובי הגיבוב המהווים חלק מפרוטוקול Starknet יעברו ל-Poseidon (באופן ספציפי, ה-Hash המחלקה, ה-Hash של הכיתה וחלקים מהמחויבות של המדינה ישתמשו ב-Poseidon, עיין[המסמכים](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#poseidon_hash)לפרטים נוספים). בעתיד, רכיבים פנימיים נוספים יעברו לשימוש בפונקציית הגיבוב של Poseidon.

את הגרסה המדויקת והפרמטרים המשמשים ב-Starknet ניתן למצוא[כאן](https://docs.starknet.io/documentation/architecture_and_concepts/Hashing/hash-functions/#poseidon_hash).



### שינויים שונים

כמו גרסאות קודמות של Starknet, לשדרוג יש גם השלכות על ממשקי ה-API שלנו ורכיבים אחרים ברמה נמוכה. להלן נפרט את אלה ונתיחס לשינויים הספציפיים שבוצעו:

* עסקאות v0 invoke/declare אינן נתמכות עוד
* הודעות L1→L2 דורשות כעת[עמלות](https://docs.starknet.io/documentation/architecture_and_concepts/L1-L2_Communication/messaging-mechanism/#l1-l2_message_fees). כלומר, הודעות שנשלחו בתשלום אפס לא יעובדו על ידי הרצף של Starknet
* פורמט הנתונים על השרשרת הוא[שונה](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/#on_chain_data_post_v0_11_0)
* [שינויים ב-API](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#api_changes)(לא כל השינויים מפורטים כאן, אנא עיין במסמכים לרשימה ממצה):
* הוסיף נקודת קצה חדשה של \`get_compiled_class_by_class_hash\`
* \`get_class_by_hash\` מחזיר את שתי המחלקות Cairo 0 / Cairo 1.0 (בהתאם ל-hash המבוקש)
* ל\`get_state_update\` יש סעיף חדש למחלקות שהוחלפו, וההצהרות מחולקות בין מחלקות קהיר 0 וקהיר 1.
* \`estimate_fee\` ו-\`simulate_tx\` יכולים כעת לדלג על אימות
* [גרסה חדשה](https://github.com/starkware-libs/starknet-specs/releases/tag/v0.3.0-rc1)Starknet JSON-RPC



## מה יבוא אחר כך?

כעת, כשכל התשתית הקשורה לקהיר 1.0 הוכנסה למקום, אתה יכול לצפות:

* שיפורי שפה נוספים לקהיר 1.0
* שיפורי ביצועים:[כפי שהובטח](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de), אנו ממשיכים להתקדם לקראת הגדלה משמעותית של ה-TPS. השלב הבא במפת הדרכים הוא המעבר ל[Rust sequencer](https://github.com/starkware-libs/blockifier), אשר פותח בשטח פתוח תחת רישיון Apache 2.0. הרצף החדש יעשה שימוש ב[rust CairoVM](https://github.com/lambdaclass/cairo-rs)ובצומת[Papyrus](https://github.com/starkware-libs/papyrus)המלא, ויהווה את ה- Performance Trio.
* Offchain[DA](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/)! בגרסה זו טיפלנו במרכיב החישובי של עלות העסקה. בגרסאות הקרובות נטפל בעלויות הנתונים על השרשרת, שהן היום העלות הדומיננטית בעסקאות ממוצעות.

![](/assets/starknet-alpha-v0.11.0-diagram.png)