### TL;DR

* الإصدار الأول من StarkNet Bridge, StarkGate Alpha, هو مباشر على**[Testnet](https://goerli.starkgate.starknet.io/)**و**[Mainnet](https://starkgate.starknet.io/)**!
* ونحن ننتظر ردود فعل المجتمع حول كيفية تحسين الأمور. يمكنك إرسال ملاحظاتك لكل من[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)و[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).
* سيتم نشر Minnet قريبا (التحديث، 9 مايو 2022: StarkGate حية على Mainnet)

مثير! نحن سعداء بإطلاق نسخة StarkGate Alpha، وهي أول نسخة من جسر StarkNet، تعيش الآن على اختبار جويرلي، على أن يتبع ذلك قريبا نشر شبكة Mainnet .

\*(تحديث، 9 مايو 2022: StarkGate حية على Mainnet)

**تبرئة هامة: هذه نسخة ألفا على StarkGate Alpha (اقرأ الطباعة الدقيقة أدناه!).**

![](/assets/starkgate_01.png)

قبل المتابعة، قم بالتحقق منها! [StarkGate Testnet](https://goerli.starkgate.starknet.io/)،[StarkGate Mainnet](https://starkgate.starknet.io/)

يعمل StarkGate كبوابة بين إيثيريوم و[StarkNet](https://starknet.io/)، ويسمح للمستخدمين بالقيام بكل ما يمكن أن يتوقعونه من جسر.

#### **أين يمكنني العثور على معلومات عن كيفية عمل StarkGate؟**

لفهم كيفية عمل StarkGate، اقرأ الوثائق الفنية[](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)وألقي نظرة على[التعليمات البرمجية](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate). لاحظ أن هذه هي النسخة الأولى، ونحن ندعو ملاحظاتك واقتراحاتك حول كيفية تحسين[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)و[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).

#### **ما هي الرموز التي ستدعمها StarkGate؟**

* StarkGate Alpha على Goerli يدعم ETH وعدد قليل من الرموز الأخرى ERC-20. القائمة الكاملة وعناوين العقد ذات الصلة، وكلاهما على Ethereum و StarkNet، متاحة في هذا[repo](https://github.com/starkware-libs/starknet-addresses).
* في Mainnet، في البداية، ستدعم StarkGate Alpha ETH فقط للسماح باستخدام آلية الرسوم. لاحقاً، سوف نضيف الدعم ل WBTC، USDC، USDT ، وDAI. يمكنك رؤية عناوين العقد ذات الصلة في هذا[repo](https://github.com/starkware-libs/starknet-addresses/blob/master/bridged_tokens/mainnet.json).

على طول الطريق، سنقوم بنشر آلية لإضافة دعم للعملات الإضافية.

#### **ما هي قيود السلامة التي ستحصل عليها StarkGate Alpha على Mainnet؟**

يبدأ تشغيل StarkGate Alpha على Mainnet مع قيدين - من أجل الحد من المخاطر التي ينطوي عليها استخدام نسخة Alpha :

1. القيمة الإجمالية المقفلة (TVL) في الجسر على L1 ستحد من كمية كل نوع رمز.
2. الحد الأقصى للمبلغ في كل معاملة مرسلة من L1 إلى L2 (ستاركنت) عبر StarkGate سيكون محدودا.

ونخطط لتخفيف هذه القيود تدريجيا ورفعها تماما مع نمو الثقة. يمكن العثور على المعلمات المحدّثة في[مستندات StarkGate](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge).

![](/assets/starkgate_02.png)

### ألفا وما يعنيه

كما هو الحال دائما، نذكركم بأن StarkNet حاليا في مرحلتها**Alpha**:

* يمكن أن تقطع الأشياء. إذا فشلت بشكل كارثي، يمكن فقدان أموالك (**اقرأ إخلاء المسؤولية أدناه**!).
* ويمكن رفع مستوى كل من عقدي StarkNet Alpha و StarkGate دون أن يكون ذلك في وقت مناسب. وفي حين أننا نتوقع أن تعلن هذه التحسينات قبل وقت طويل، في حالة المخاطر الأمنية الوشيكة (على سبيل المثال، إذا تم العثور على خطأ حرج)، يمكن تطبيق الترقية مع القليل من التحذير أو بدون تحذيرات.
* ولم تتم بعد مراجعة شفرة الجسر وكذلك أجزاء من StarkNet Alpha. وستكتمل قريباً مراجعة حسابات شركة ABDK ومراجعة حسابات شركة StarkGate Alpha.

نشجع جميع المستخدمين على المساعدة في تحسين الجسر عن طريق تقديم تعليقاتهم باستخدام أحد المنصات التالية:

1. [مستودع واجهة StarkGate](https://github.com/starkware-libs/starkgate-frontend)
2. [استرداد عقود StarkGate](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate)
3. [شمانس StarkNet](http://community.starknet.io/)

للحصول على دعم للأسئلة ، انضم إلى خادم Discord[StarkNet](https://discord.gg/uJ9HZTUk2Y).

### إخلاء المسؤولية

***StarkNet Alpha هو نظام جديد ومعقد لم تتم مراجعة حساباته بالكامل. وينطبق الشيء نفسه على جسر StarkNet. مثل جميع أنظمة البرمجيات المعقدة، قد يحتوي كل من StarkNet والجسر على الأخطاء التي، في الحالات القصوى، من الممكن أن يؤدي إلى فقدان جميع أموالك. إذاً,***تردد بعناية و هز!******

*والنظام الإيكولوجي لشبكة StarkNet، مجموعة كبيرة وسريعة النمو من الأفرقة المستقلة والأفراد، ليس لشركة StarkWare أي رقابة عليها ولا تتحمل أي مسؤولية. وأي مشروع من المشاريع التي وضعها أعضاء النظام الإيكولوجي قد يحتوي على أخطاء يمكن أن تؤدي في الحالات القصوى إلى فقدان جميع أموالك. وعلاوة على ذلك، ومع نشر عقود ذكية أكثر، تزداد احتمالات حدوث أعطال ضارة غير مقصودة بل وحتى عمليات الاحتيال الضارة وسحب السجاد. لذا، تعامل مع جميع العقود الذكية على StarkNet كما تعامل العقود الذكية على Ethereum، واستخدم فقط تلك التي لديك سبب وجيه للثقة بها كآمنة.*