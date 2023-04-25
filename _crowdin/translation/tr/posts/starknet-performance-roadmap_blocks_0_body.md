### TL;DR

* Geçerlilik özetleri, L1'lerle aynı şekilde üretilen iş açısından sınırlı değildir. Bu, L2 geçerlilik özetlerinde potansiyel olarak çok daha yüksek TPS'ye yol açar.
* StarkNet performans yol haritası, sistemdeki önemli bir öğeyi ele alır: sıralayıcı.
* Burada performans iyileştirmeleri için yol haritasını sunuyoruz:\
  — Sıralayıcı paralelleştirme\
  — Kahire VM için yeni bir pas uygulaması\
  — Sıralayıcının pas içinde yeniden uygulanması\
* Kanıtlayıcılar oldukları gibi savaş testlerinden geçirildiler, darboğaz değiller ve şu an yaptıklarından çok daha fazlasının üstesinden gelebilirler!

### Giriş

StarkNet, neredeyse bir yıl önce Mainnet'te kullanıma sunuldu. İşlevselliğe odaklanarak StarkNet'i oluşturmaya başladık. Şimdi, StarkNet deneyimini geliştirmeye yardımcı olacak bir dizi adımla performansı iyileştirmeye odaklanıyoruz.

Bu gönderide, neden yalnızca geçerlilik özetlerinde geçerli olan çok çeşitli optimizasyonlar olduğunu açıklıyoruz ve bu adımları StarkNet'te uygulama planımızı paylaşacağız. Bu adımlardan bazıları, 16 Kasım'da Testnet'te ve Dün Mainnet'te yayınlanan StarkNet Alpha 0.10.2'de zaten uygulandı. Ancak çözümleri tartışmadan önce, sınırlamaları ve nedenlerini gözden geçirelim.

### Blok sınırlamaları: L1'e karşı geçerlilik toplamaları

Blockchain ölçeklenebilirliğini artırmaya ve TPS'yi artırmaya yönelik potansiyel bir yaklaşım, blok süresini sabit tutarken blok sınırlamalarını (gaz/boyut açısından) kaldırmak olacaktır. Bu, blok üreticilerinden (L1'deki doğrulayıcılar, L2'deki sıralayıcılar) daha fazla çaba gerektirecek ve dolayısıyla bu bileşenlerin daha verimli bir şekilde uygulanmasını gerektirecektir. Bu amaçla, şimdi, sonraki bölümlerde daha ayrıntılı olarak açıklayacağımız StarkNet sıralayıcı optimizasyonlarına odaklanıyoruz.

Burada doğal bir soru ortaya çıkıyor. Sıralayıcı optimizasyonları neden geçerlilik toplamalarıyla sınırlıdır, yani neden aynı iyileştirmeleri L1'de uygulayamıyoruz ve geçerlilik toplamalarının karmaşıklığından tamamen kaçınamıyoruz? Bir sonraki bölümde, ikisi arasında L2'de L1'e uygulanamayan çok çeşitli optimizasyonlara izin veren temel bir fark olduğunu iddia ediyoruz.

### L1 verimi neden sınırlıdır?

Ne yazık ki, L1'deki blok sınırlamalarını kaldırmak büyük bir tuzaktan muzdariptir. Zincirin büyüme hızını artırarak, en son duruma ayak uydurmaya çalışan tam düğümlerden gelen talepleri de artırıyoruz. L1 tam düğümlerinin tüm geçmişi yeniden yürütmesi gerektiğinden, blok boyutundaki (gaz açısından) yüksek bir artış, onları önemli ölçüde zorlar ve yine daha zayıf makinelerin sistemden çıkmasına ve tam düğümleri çalıştırma yeteneğini bırakmasına yol açar. sadece yeterince büyük varlıklara. Sonuç olarak, kullanıcılar durumu kendileri doğrulayamaz ve ağa güvenle katılamaz.

Bu, gerçekten merkezi olmayan ve güvenli bir sistemi sürdürmek için L1 veriminin sınırlandırılması gerektiği anlayışını bize bırakıyor.

### Neden aynı engeller geçerlilik özetlerini etkilemiyor?

**Yalnızca tam düğüm perspektifi göz önüne alındığında, geçerlilik özetlerinin sunduğu gerçek gücü görebiliriz.**Bir L1 tam düğümünün mevcut durumun doğruluğunu sağlamak için tüm geçmişi yeniden yürütmesi gerekir. StarkNet düğümlerinin yalnızca STARK kanıtlarını doğrulaması gerekir ve bu doğrulama katlanarak daha az miktarda hesaplama kaynağı gerektirir. Özellikle, sıfırdan eşitlemenin yürütülmesini içermesi gerekmez; bir düğüm, eşlerinden mevcut durumun bir dökümünü alabilir ve yalnızca bu durumun geçerli olduğunu bir STARK kanıtı aracılığıyla doğrulayabilir. Bu, gereksinimleri tam düğümden artırmadan ağın verimini artırmamıza olanak tanır.

Bu nedenle, L2 dizileyicinin, bir L1'de mümkün olmayan tüm bir optimizasyon yelpazesine tabi olduğu sonucuna vardık.

### İleride performans yol haritası

Sonraki bölümlerde, bunlardan hangilerinin şu anda StarkNet sıralayıcı için planlandığını tartışacağız.

### sıralayıcı paralelleştirme

Yol haritamızdaki ilk adım, işlem yürütmeye paralelleştirme getirmekti. Bu, Dün Mainnet'te yayınlanan StarkNet alpha 0.10.2'de tanıtıldı. Şimdi paralelleştirmenin ne olduğuna dalıyoruz (bu yarı teknik bir bölümdür, yol haritasına devam etmek için bir sonraki bölüme atlayın).

Peki "işlem paralelleştirme" ne anlama geliyor? Saf olarak, farklı işlemler bağımlı olabileceğinden, bir işlem bloğunu paralel olarak yürütmek imkansızdır. Bu, aşağıdaki örnekte gösterilmektedir. Aynı kullanıcıdan üç işlem içeren bir blok düşünün:

* İşlem A: USDC'yi ETH ile takas edin
* İşlem B: NFT için ETH ödeyin
* İşlem C: USDT'yi BTC ile takas edin

Açıktır ki, Tx A, Tx B'den önce gerçekleşmelidir, ancak Tx C her ikisinden de tamamen bağımsızdır ve paralel olarak yürütülebilir. Her işlemin yürütülmesi 1 saniye gerektiriyorsa, paralelleştirme getirilerek blok üretim süresi 3 saniyeden 2 saniyeye düşürülebilir.

Sorunun özü, işlem bağımlılıklarını önceden bilmememizdir. Uygulamada, yalnızca örneğimizden B işlemini yürüttüğümüzde, bunun A işlemi tarafından yapılan değişikliklere dayandığını görürüz. Daha resmi olarak, bağımlılık, B işleminin A işleminin yazdığı depolama hücrelerinden okuması gerçeğinden kaynaklanır. İşlemleri, A işleminden B işlemine bir kenarın olduğu, A'nın B tarafından okunan bir depolama hücresine yazdığı ve bu nedenle B'den önce yürütülmesi gereken bir bağımlılık grafiği oluşturduğunu düşünebiliriz. Aşağıdaki şekil bir böyle bir bağımlılık grafiği örneği:

![](https://miro.medium.com/max/641/0*I-qGgxdJJmqmgZWM)

Yukarıdaki örnekte, her sütun paralel olarak yürütülebilir ve bu en uygun düzenlemedir (safça olsa da, 1-9 arasındaki işlemleri sırayla yürütürdük).

Bağımlılık grafiğinin önceden bilinmemesi gerçeğinin üstesinden gelmek için, Aptos Labs tarafından geliştirilen[BLOCK-STM](https://malkhi.com/posts/2022/04/block-stm/)ruhuna uygun olarak StarkNet sıralayıcıya***iyimser paralelleştirme***ekliyoruz. Bu paradigma altında, iyimser bir şekilde işlemleri paralel olarak yürütmeye ve bir çakışma bulduğumuzda yeniden yürütmeye çalışıyoruz. Örneğin, Şekil 1'deki 1-4 işlemlerini paralel olarak yürütebilir, ancak daha sonra Tx4'ün Tx1'e bağlı olduğunu bulabiliriz. Bu nedenle, yürütülmesi yararsızdı (Tx1'i uyguladığımız duruma göre çalıştırdık, oysa Tx1'i uygulamaktan kaynaklanan duruma karşı çalıştırmamız gerekirdi). Bu durumda, Tx4'ü yeniden çalıştıracağız.

İyimser paralelleştirmenin üstüne birçok optimizasyon ekleyebileceğimizi unutmayın. Örneğin, her yürütmenin bitmesini safça beklemek yerine, onu geçersiz kılan bir bağımlılık bulduğumuz anda yürütmeyi iptal edebiliriz.

Başka bir örnek, hangi işlemlerin yeniden yürütüleceğinin seçimini optimize etmektir. Şekil 1'deki tüm işlemlerden oluşan bir bloğun beş CPU çekirdeği olan bir sıralayıcıya beslendiğini varsayalım. İlk olarak, 1-5 arasındaki işlemleri paralel olarak yürütmeye çalışıyoruz. Tamamlanma sırası Tx2, Tx3, Tx4, Tx1 ve son olarak Tx5 ise, Tx1→Tx4 bağımlılığını ancak Tx4 yürütüldükten sonra bulacağız — yeniden yürütülmesi gerektiğini belirtir. Naif bir şekilde, Tx4'ün yeni yürütülmesi göz önüne alındığında farklı davranabileceğinden, Tx5'i de yeniden yürütmek isteyebiliriz. Ancak artık geçersiz olan Tx4'ten sonraki tüm işlemleri yeniden yürütmek yerine, yürütmesi zaten sona ermiş işlemlerden oluşturulan bağımlılık grafiğini geçebilir ve yalnızca Tx4'e bağlı işlemleri yeniden yürütebiliriz.

### Cairo-VM için yeni bir Rust uygulaması

StarkNet'teki akıllı sözleşmeler Kahire'de yazılır ve Kahire-VM içinde yürütülür, bu özellik[Kahire makalesinde](https://eprint.iacr.org/2021/1063.pdf)görünür. Şu anda sıralayıcı, Kahire-VM'nin[python uygulamasını](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/cairo/lang/vm)kullanıyor. VM uygulama performansını optimize etmek için, VM'yi pas içinde yeniden yazmak için bir çalışma başlattık. Şimdiye kadar StarkNet ekosisteminde paha biçilmez bir ekip olan[Lambdaclass](https://lambdaclass.com/)harika çalışması sayesinde, bu çaba yakında meyvelerini veriyor.

Sanal makinenin pas uygulaması,[cairo-rs](https://github.com/lambdaclass/cairo-rs), artık yerel Kahire kodunu yürütebilir. Bir sonraki adım, akıllı sözleşmelerin yürütülmesini ve Pythonic sıralayıcı ile entegrasyonları ele almaktır. cairo-rs ile entegre edildikten sonra sıralayıcının performansının önemli ölçüde artması bekleniyor.

### Sıralayıcının Rust'ta yeniden uygulanması

Performansı artırmak için python'dan rust'a geçişimiz Kahire VM ile sınırlı değil. Yukarıda belirtilen iyileştirmelerin yanı sıra sıralayıcıyı pas içinde sıfırdan yeniden yazmayı planlıyoruz. Rust'ın dahili avantajlarına ek olarak bu, sıralayıcıya yönelik diğer optimizasyonlar için bir fırsat sunar. Bir çift listeleyerek, python-rust iletişim ek yükü olmadan cairors'un avantajlarından yararlanabiliriz ve durumun depolanma ve erişilme şeklini tamamen yeniden tasarlayabiliriz (bugün[Patricia-Trie yapısını](https://docs.starknet.io/documentation/develop/State/starknet-state/#state_commitment)temel alır).

### Peki ya kanıtlayıcılar?

Bu gönderi boyunca, belki de geçerlilik özetlerinin en ünlü öğesi olan kanıtlayıcıdan bahsetmedik. Mimarinin tartışmasız en karmaşık bileşeni olarak, optimizasyonun darboğaz ve dolayısıyla odak noktası olması gerektiği düşünülebilir. İlginç bir şekilde, artık StarkNet'in darboğazı olan daha "standart" bileşenlerdir. Bugün özellikle[özyinelemeli ispat](https://medium.com/starkware/recursive-starks-78f8dd401025)ile Testnet/Mainnet'teki mevcut trafikten çok daha fazla işlemi bir ispata sığdırabiliyoruz. Aslında, bugün StarkNet blokları, StarkEx işlemlerinin yanı sıra kanıtlanmıştır ve bu işlemler bazen birkaç yüz bin NFT darphanesine neden olabilir.

### Özet

Paralelleştirme, Rust ve daha fazlası — gelecek StarkNet sürümlerinde geliştirilmiş bir TPS için kendinizi hazırlayın.