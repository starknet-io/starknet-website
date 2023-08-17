### TL;DR

* StarkNet topluluğuyla yapılan kapsamlı tartışmalarla şekillenen Regenesis için ayrıntılı bir plan paylaşıyoruz. Kuba@SWM'ye özel teşekkürler.
* Regenesis, Kahire 1.0'ın piyasaya sürülmesini takip edecek ve daha basit ve daha güvenli StarkNet sözleşmelerine izin vererek sistemi daha güvenli hale getirecek.
* Kullanıcılar, geçiş aşamasında cüzdanlarını güncellemeye hazır olmalıdır.
* Geliştiricilerin sözleşmelerini Kahire 1.0'a taşımaları gerekecek

### giriiş

StarkNet Alpha, üretime yönelik önemli bir adım olan Regenesis'e doğru ilerliyor. Bu güncellemede, Regenesis'in ana motivasyonu -[Kahire 1.0](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)- hakkında daha fazla ayrıntı paylaşmak ve bunun kullanıcılardan ve geliştiricilerden ne gerektireceğini açıklamaya başlamak istiyoruz. Regenesis'ten sonra, StarkNet yalnızca Kahire 1.0 tabanlı sözleşmelerle çalışacak ve mevcut durumla yeni bir genesis bloğundan başlayacak.

Regenesis, kullanıcılardan ne talep edecek? Cüzdanlarının basit bir güncellemesi. StarkNet'in dapp'lerini oluşturucularından ne gerektirecek? Sözleşmelerini Kahire 1.0'a taşımak ve basit bir yükseltme yönergesini izlemek. Spesifik olarak, temiz bir durumdan yeniden başlatma olmayacak ve aynı StarkNet örneğiyle kalacağız, yani geçişe gerek kalmayacak**.**

Regenesis planı, uygulamaların durumunu tamamen korumak ve uygulamalarda herhangi bir kesinti süresine maruz kalmamaktır. Böylece, sağlayacağımız yönergeleri izleyen uygulamalar, Regenesis süreci sırasında operasyonlarına ve kullanıcılarına herhangi bir rahatsızlık vermeden hemen StarkNet Alpha Mainnet üzerinde başlatılabilecek. Toplulukla birlikte çalışmaya ve gereken tüm desteği sağlamaya kararlıyız. bu süreci olabildiğince sorunsuz hale getirmek için.

Software Mansion ekibinin önemli bir önerisini de içeren, toplulukla yaptığımız kapsamlı tartışmaların sonucunda bu yönde ilerliyoruz.

### Neden Regenesis?

#### Kahire 1.0 ve Sierra

Regenesis'in ana motivasyonu, Kahire 1.0'ın getirdiği yeni olanaklardan yararlanmaktır - yani merkezi olmayan bir ağ olarak StarkNet için gerekli olan sıralayıcılar DOS koruması, sansür direnci ve gaz ölçümü.

Kahire 1.0, her işlemin kanıtlanabilmesini sağlayacaktır. Bu, StarkNet'in geri alınan işlemleri bloklara dahil etmesine ve bunların yürütüldüğüne dair bir kanıt oluşturmasına izin verecektir. Bu mekanizma, sıralayıcılara geri alınan işlemlerin yürütülmesi için ödeme yapılmasına izin verecek ve kötü niyetli aktörlere karşı DOS korumasını artıracaktır. Ek olarak, Kahire 1.0, StarkNet'in daha sezgisel bir ücret piyasasına geçişini sağlayacak olan gaz ölçümünü destekleyecektir. Son olarak, bu, StarkNet'in L1'den zorunlu işlemleri başlatmasına izin verecek ve ağın sansüre dayanıklılık yeteneklerini artıracaktır.

Bu avantajlardan yararlanmak için Kahire v0 ve Kahire 1.0 sözleşmeleri karıştırılamaz. Kahire v0 sözleşmelerinden bir parçamız varsa, yanlış ifadelerin yanlış olduğu kanıtlanamaz ve gaz takibi de yapılamaz. Bu amaçla, Kahire v0 kodunu, Regenesis dolayısıyla StarkNet durumundan tamamen kaldırmamız gerekecek.

**Regenesis'ten sonra tamamen Kahire 1.0 tabanlı bir Starknet sistemimiz olacak.**

#### Kodu ve protokolü basitleştirme

StarkNet, hala Alfa'dayken, şimdiden birçok değişikliğe uğradı. Şimdiye kadarki her sürüm, StarkNet işletim sistemini, blokları ve işlem yapısını değiştirdi. Bu, bazı kodların eskimesine neden oldu. Yine de tam düğümlerin ve altyapı sağlayıcılarının (dizin oluşturucular ve durum kaşifleri gibi) durumla güvene dayalı bir şekilde eşitlemek için StarkNet Alpha sürümlerinin tüm geçmiş davranışlarının farkında olması ve bunları uygulaması gerekir. Regenesis olmadan bu yük, StarkNet için bu tür hizmetler oluşturmayı düşünen geliştiriciler için büyük bir caydırıcı olabilir.

Bu nedenle, üretime geçmeden önce ve birçok altyapı aracı uygulamasıyla merkezi olmayan bir dünyaya hazırlık olarak, protokolün karmaşıklığını azaltmayı amaçlıyoruz. Bunu, gelecekteki altyapının herhangi bir StarkNet 0.x kodunu çalıştırmasını gerektirmeyerek ve geçiş döneminden sonraki ilk bloğu oluşum noktası olarak işaretleyerek başarabiliriz.

### Wen Regenesis? genel zaman çizelgesi

Regenesis, 2022'nin sonunda gerçekleşmesi planlanan Kahire 1.0'ın piyasaya sürülmesini takip edecek. 2023'ün 1. Çeyreği boyunca StarkNet, Kahire 1.0'ı destekleyecek şekilde güncellenecek ve 1. Çeyreğin sonuna kadar tamamen Kahire 1.0 tabanlı bir ağa geçmeyi hedefliyoruz.

**Kullanıcıların ve uygulamaların bu süre zarfında geçiş yapması gerekecektir.**

![](/assets/1_ef85shzd2uudwex-cy8wdg-1.png)

### Peki Neleri Bilmem Gerekiyor?

Uygulama geliştiricilerin, Regenesis ile ilgili aşağıdaki hususların farkında olmaları gerekir:

1. Sözleşmenizin yükseltme için hazır olduğundan emin olun. Planın tüm teknik ayrıntıları[StarkNet Topluluk Forumu'nda](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080)paylaşılır. Ayrıntılar kesinleştiğinde, özlü bir kılavuz paylaşacağız.
2. Kodunuzu Kahire 1.0'a taşımaya hazır olduğunuzdan emin olun. En son ayrıntılar için bir sonraki bölüme bakın.

#### Sözleşmenizi Kahire'ye Taşımak 1.0

Kahire 1.0, StarkNet geliştiricileri için büyük umut vaat ediyor. Geliştirilmiş sözdizimi, tam teşekküllü yazı sistemi (herkes için yerel uint256?) ve daha fazlası ile sözleşme yazmak için daha güvenli, daha iyi ve daha kolay olacak mevcut Kahire'de bir gelişme. Geliştiricilerin mevcut StarkNet sözleşmelerini Kahire 1.0 sözdizimine taşımaları gerekecektir. Ancak mantık ve kod yapısı aynı kalacağı için ilk etapta uygulamayı geliştirmek için harcanan emeğin yanında bu çabanın önemsiz kalması bekleniyor.

Bu bağlamda, uygulamanızın Kahire 1.0 sürümünü yeniden denetlemeyi seçebileceğinizi belirtmekte fayda var. Uygulamanız geçmişte zaten denetlendiyse, denetçiler mantığınıza zaten aşina oldukları için yeniden denetim süreci önemli ölçüde daha ucuz ve daha kolay olacaktır.

2022'nin 4. çeyreğinde, Kahire 1.0 ile ilgili tüm belgeleri, öğreticiler ve atölye çalışmaları ile birlikte yayınlayacağız.

### Ben bir StarkNet Kullanıcısıyım. Ne yapmalıyım?

Bir kullanıcı olarak, Regenesis sırasında muhtemelen birkaç işlem yapmanız gerekecek. En azından, hesap sözleşmenizi yükseltmeniz gerekecek. Bunu (birkaç aylık) geçiş süresi boyunca yapmamanız, hesabınızın kaybedilmesiyle sonuçlanacaktır. Kullanmakta olduğunuz StarkNet uygulamalarının geliştiricileri tarafından seçilen yükseltme yoluna bağlı olarak, ekstra adımlar atmanız gerekebilir.

Herkese StarkNet'in hala Alfa aşamasında olduğunu ve kullanıcıların StarkNet iletişimlerine ve kullandıkları uygulamalara dikkat etmeleri gerektiğini hatırlatıyoruz. Yeni sisteme erken yükseltme yaptığınızdan emin olmak sizin sorumluluğunuzdadır. *Erken benimseyenler olmak her zaman kolay değildir ve üzerinize düşeni yapacağınıza güveniyoruz!*

### Sonuçlandırmak

StarkNet ve geliştiricileri için pek çok heyecan verici avantaj ve iyileştirme sağlayan Kahire 1.0 çok yakında. Bunları toplamak için, ağın bir Regenesis olayı gereklidir. Neyse ki, aklımızda bu süreci en az kesintiye uğratan — kullanıcılar için tamamen sorunsuz ve uygulamalar için oldukça basit — yapan bir tasarımımız var.

[topluluk tartışmasına](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080)katılmanızı ve yorumlarınızı ve endişelerinizi paylaşmanızı ve StarkNet'te bir uygulama geliştiricisi olarak atmanız gereken adımlarla ilgili güncel bilgileri almanızı öneririz.