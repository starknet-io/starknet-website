### TL;DR

* Özyinelemeli Kanıtlama, Mainnet'te yayında, StarkEx uygulamalarının yanı sıra StarkNet'i tek bir kanıtla ölçeklendiriyor
* Ölçeği artırır ve maliyet ve gecikme süresinde fayda sağlar (bir arada hareket eden ve bir değiş tokuş olmayan ölçek ve gecikmenin nadir ve heyecan verici bir oluşumu)
* L3 ve diğer avantajlar için sahneyi hazırlar.[Recursive Proving](https://medium.com/@starkware/recursive-starks-78f8dd401025)hakkındaki blog gönderisini okuyun. Harika şeyler 😉

### Ölçeklendirme!

Kahire'nin genel hesaplamasıyla desteklenen yinelemeli ispatlar artık üretimde. Bu, STARK'larla L2 ölçeklemenin gücünde büyük bir artışı işaret ediyor. Tek bir kanıtla Ethereum'a yazılabilecek işlem sayısında hızlı bir şekilde çok kat artış sağlayacaktır.

Şimdiye kadar, STARK ölçeklendirme, Ethereum'a yazılan onlarca hatta yüzbinlerce işlemi tek bir kanıta "toplayarak" çalıştı. Özyineleme ile, bu tür birçok kanıt tek bir kanıtta "toplanabilir".

Bu yöntem şu anda çok sayıda Kahire tabanlı uygulama için üretim aşamasındadır: StarkEx üzerinde çalışan uygulamalar, StarkWare'in SaaS ölçeklendirme motoru ve izinsiz toplama olan StarkNet.

### Hikaye şimdiye kadar

Mart 2020'de Mainnet'teki ilk kanıttan bu yana, aşağıdaki gelişmeler STARK'ların nasıl kullanıldığını şekillendirdi.

### STARK tabanlı ölçeklendirme

Haziran 2020'de ilk STARK tabanlı ölçeklendirme çözümü —[StarkEx](https://youtu.be/P-qoPVoneQA)— Ethereum Mainnet üzerinde konuşlandırıldı. StarkEx, zincir dışında büyük hesaplamalar gerçekleştiren ve bunların doğruluğu için bir STARK kanıtı üreten bir Kanıtlayıcıya ve bu kanıtı zincir üzerinde doğrulayan bir Doğrulayıcıya sahiptir. Bu ilk dağıtımın kısıtlamaları, StarkWare'in mühendisleri tarafından "elle yazılmıştı", bu nedenle StarkEx için özellik hızını büyük ölçüde sınırladı. Genel hesaplamayı kanıtlamayı desteklemek için bir programlama dilinin gerekli olduğu sonucuna vardık - Kahire.

#### Kahire

2020 yazında Kahire, Ethereum Mainnet</a>



ilk görünümünü yaptı. Kahire, CPU Cebirsel Ara Temsili (AIR) anlamına gelir ve bu "CPU"nun komut setini doğrulayan tek bir AIR içerir. Daha karmaşık iş mantığı, keyfi hesaplama ifadeleri ve bunu daha hızlı ve daha güvenli bir şekilde yapmak için kanıtları kodlamak için kapıyı açtı. Bir Kahire programı, tek bir uygulamanın mantığının yürütülmesini kanıtlayabilir. Ancak bir Kahire programı, bu tür birden çok uygulamanın bir birleşimi de olabilir - SHARP.</p> 



#### KESKİN

SHARP - bir SHARed Prover - birkaç ayrı uygulamadan işlem alır ve hepsini tek bir STARK-proofunda kanıtlar. Uygulamalar, işlem gruplarını birleştirerek bir STARK'ın kapasitesini daha hızlı doldurur. İşlemler, geliştirilmiş bir hız ve gecikmeyle işlenir. Bir sonraki sınır: Özyinelemeli Kanıtlar, ancak yalnızca bazı sabit kodlanmış mantıklar için değil, daha çok**genel hesaplama için**.

Özyinelemeli Kanıtlamanın tüm faydasını anlamak için, SHARP tarafından şimdiye kadar (özyinelemesiz) kanıtlamanın nasıl gerçekleştirildiğini biraz daha anlamaya değer. Çizim 1 tipik bir özyinelemeli olmayan akışı göstermektedir:

![Çizim 1: Tipik bir yinelemesiz kanıtlama akışı](/assets/recursive_starks_01.png "Çizim 1: Tipik bir yinelemesiz kanıtlama akışı")

Burada ifadeler zamanla gelir. Belirli bir kapasite (veya zaman) eşiğine ulaşıldığında, büyük bir birleşik ifade (Tren olarak da bilinir) oluşturulur. Bu birleşik ifade, yalnızca tüm bireysel ifadeler alındığında kanıtlanmıştır. Bu kanıtın kanıtlanması uzun zaman alır (kabaca her ifadeyi ayrı ayrı kanıtlamak için geçen sürenin toplamı).

Son derece büyük ifadelerin kanıtlanması, sonunda bellek gibi kullanılabilir bilgi işlem kaynaklarıyla sınırlıdır. Özyinelemeden önce, bu, STARK kanıtlamanın sınırlayıcı ölçeklenebilirlik engeliydi.



### Özyinelemeli Kanıtlama Nedir?

STARK kanıtlarıyla, bir ifadeyi kanıtlamak için geçen süre, ifadeyi yürütmek için geçen süre ile kabaca doğrusaldır. Ek olarak, bir ifadenin kanıtlanması T süresi alıyorsa, ispatın doğrulanması kabaca log(T) süresi alır ve bu genellikle "logaritmik sıkıştırma" olarak adlandırılır. Başka bir deyişle, STARK'larla, ifadeyi doğrulamak için onu hesaplamaktan çok daha az zaman harcarsınız.

[Kahire](https://starkware.co/cairo/)STARK kanıtlarıyla kanıtlanabilen ve karşılık gelen STARK doğrulayıcıları tarafından doğrulanabilen genel hesaplamalı ifadelerin ifade edilmesine izin verir.

İşte burada[özyineleme](https://en.wikipedia.org/wiki/Recursion)gerçekleştirme fırsatı devreye giriyor: Binlerce işlemin doğruluğunu kanıtlayan bir Kahire programı yazdığımız gibi, çoklu STARK kanıtlarını doğrulayan bir Kahire programı da yazabiliriz. Birden çok "yukarı akış" kanıtın geçerliliğini kanıtlayan tek bir kanıt üretebiliriz. Yinelemeli İspatlama dediğimiz şey budur.

Logaritmik sıkıştırma ve kabaca doğrusal kanıtlama süresi nedeniyle, bir STARK kanıtının doğrulanması nispeten kısa sürer (yakın gelecekte yalnızca birkaç dakika olması beklenmektedir).

Özyinelemeyi uygularken, SHARP ifadeleri geldiklerinde kanıtlayabilir. Kanıtları, belirli bir noktada, ortaya çıkan kanıt bir zincir üstü doğrulayıcı sözleşmesine sunulana kadar çeşitli modellerde tekrar tekrar tekrar tekrar birleştirilebilir. Tipik bir model Çizim 2'de gösterilmektedir:

![Çizim 2: Tipik bir yinelemeli kanıtlama akışı.](/assets/recursive_starks_02.png "Çizim 2: Tipik bir yinelemeli kanıtlama akışı.")



### Özyinelemeli Kanıtlamanın Anlık Faydaları



#### Azaltılmış Zincir Maliyeti

Yarasadan, birden çok kanıtın "sıkıştırılmasını" bir hale getiriyoruz, bu da işlem başına daha düşük zincir içi doğrulama maliyeti anlamına geliyor (burada her ifade birçok işlemi içerebilir).

Özyineleme ile, her bir sınırlı boyut ifadesi ayrı ayrı kanıtlanabildiğinden, şimdiye kadar ispat boyutlarını sınırlayan hesaplama kaynakları engeli (örn. bellek) ortadan kalkar. Bu nedenle, özyineleme kullanılırken, yinelemenin etkili Train boyutu neredeyse sınırsızdır ve işlem başına maliyet büyüklük sırasına göre azaltılabilir.

Pratik açıdan, azalma kabul edilebilir gecikme süresine (ve işlemlerin ulaşma hızına) bağlıdır. Ek olarak, her kanıta tipik olarak zincir üstü veriler gibi bazı çıktılar da eşlik ettiğinden, tek bir kanıtla birlikte zincir üzerine yazılabilecek veri miktarının sınırları vardır. Bununla birlikte, maliyeti bir büyüklük sırasına göre azaltmak ve hatta daha iyisi önemsiz bir şekilde başarılabilir.



#### Azaltılmış Gecikme

Özyinelemeli Kanıtlama modeli, büyük ifade dizilerini ispatlama gecikmesini azaltır. Bu iki faktörün sonucudur:

1. Gelen ifadeler paralel</strong>**olarak kanıtlanabilir (son derece büyük bir birleşik ifadenin kanıtlanmasının aksine).</li> 
   
   2 Kanıtlamaya başlamak için Trendeki son ifadenin gelmesini beklemeye gerek yok. Aksine, kanıtlar geldikçe yeni ifadelerle birleştirilebilir. Bu, bir Trene katılan son ifadenin gecikme süresinin, kabaca bu son ifadeyi kanıtlamak için geçen süre artı bir Özyinelemeli Doğrulayıcı ifadesini kanıtlamak için geçen süre olduğu anlamına gelir (bu, bu ifadeye halihazırda "katılmış" tüm ifadeleri doğrular) belirli Tren).</ol> 

Özyinelemeli Doğrulayıcı deyimini kanıtlama gecikmesini aktif olarak geliştiriyor ve optimize ediyoruz. Bunun birkaç ay içinde birkaç dakika mertebesine ulaşmasını bekliyoruz. Bu nedenle, oldukça verimli bir SHARP, işlem başına zincir içi maliyete karşı takasa bağlı olarak birkaç dakikadan birkaç saate kadar gecikmeler sunabilir. Bu, SHARP'ın gecikme süresinde anlamlı bir gelişmeyi temsil eder.



#### Kolaylaştırıcı L3

Kahire'de Özyinelemeli Doğrulayıcı bildiriminin geliştirilmesi, aynı zamanda, bu ifade bir StarkNet akıllı sözleşmesine dönüştürülebileceğinden, kanıtların StarkNet'e sunulması olasılığını da açar. Bu, halka açık StarkNet</a>(bir L2 ağı) üzerindeL3 konuşlandırması oluşturmaya izin verir.</p> 

Özyinelemeli model, L2'deki tek bir kanıtla doğrulanacak olan L3'teki kanıtların toplanması için de geçerlidir. Dolayısıyla, burada da hiper ölçeklendirme elde edilir.



### Daha İnce Avantajlar



#### Uygulamalı Özyineleme

Yineleme, maliyet ve performanslarını daha da ölçeklendirmek isteyen platformlar ve uygulamalar için daha da fazla fırsat açar.

Her STARK ispatı, "kamusal girdi" (veya Kahire terimleriyle "program çıktısı") olarak bilinen bazı girdilere uygulanan bir ifadenin geçerliliğini tasdik eder. Kavramsal olarak, STARK özyinelemesi,*iki*girişli iki ispatı, iki girişli*bir*ispata sıkıştırır. Yani ispat sayısı azaltılırken girdi sayısı sabit tutulmaktadır. Bu girişler daha sonra tipik olarak bir uygulama tarafından L1'deki bazı durumları güncellemek için kullanılır (örneğin, bir durum kökünü güncellemek veya zincir üzerinde bir geri çekme gerçekleştirmek için).

Özyinelemeli ifadenin*application-aware*olmasına izin verilirse, yani uygulamanın semantiğini tanırsa, hem iki ispatı bir*sıkıştırabilir hem de*iki girişi bir hale getirebilir. Ortaya çıkan ifade, uygulama anlambilimine dayalı girdi kombinasyonunun geçerliliğini doğrular, bu nedenle Uygulamalı Özyineleme adı verilir (bir örnek için bkz. Çizim 3).

![Çizim 3: Uygulamalı Özyineleme örneği](/assets/recursive_starks_03.png "Çizim 3: Uygulamalı Özyineleme örneği")

Burada, İfade 1, A'dan B'ye bir durum güncellemesini tasdik eder ve İfade 2, B'den C'ye bir sonraki güncellemeyi tasdik eder. Beyan 1 ve Beyan 2'nin Kanıtları, A'dan C'ye doğrudan güncellemeyi tasdik eden üçüncü bir beyanda birleştirilebilir. • Benzer mantığı yinelemeli olarak uygulayarak, durum güncellemelerinin maliyeti, kesinlik gecikmesi gereksinimine kadar çok önemli ölçüde azaltılabilir.

Uygulamalı Özyinelemenin bir başka önemli örneği, birden çok kanıttan toplama verilerini sıkıştırmaktır. Örneğin, StarkNet gibi bir Validity Rollup için L2'deki her depolama güncellemesi, veri kullanılabilirliğini sağlamak için L1'de iletim verileri olarak dahil edilir. Ancak, aynı depolama öğesi için birden fazla güncelleme göndermeye gerek yoktur, çünkü veri kullanılabilirliği için yalnızca doğrulanan kanıt tarafından tasdik edilen işlemlerin nihai değeri gereklidir. Bu optimizasyon zaten*tek*StarkNet bloğu içinde gerçekleştirilir. Bununla birlikte, Applicative Recursion, blok başına bir kanıt üreterek, bu toplama verilerini*çoklu*L2 blok boyunca sıkıştırabilir. Bu, L1 güncellemelerinin ölçeklenebilirliğinden ödün vermeden L2'de daha kısa blok aralıkları sağlayarak önemli ölçüde maliyet düşüşü sağlayabilir.

Kayda değer: Uygulamalı Özyineleme, daha önce gösterildiği gibi uygulamadan bağımsız özyineleme ile birleştirilebilir. Bu iki optimizasyon bağımsızdır.



#### Azaltılmış On-chain Doğrulayıcı Karmaşıklığı

STARK doğrulayıcının karmaşıklığı, doğrulamak için tasarlandığı ifadelerin türüne bağlıdır. Özellikle, Kahire ifadeleri için doğrulayıcı karmaşıklığı, Kahire dilinde izin verilen belirli öğelere ve daha spesifik olarak desteklenen yerleşiklere bağlıdır (Kahire için CPU mecazını kullanırsak, yerleşikler mikronun eşdeğeridir. -bir CPU'daki devreler: kendi optimize edilmiş hesaplamalarını gerektirecek kadar sık gerçekleştirilen hesaplamalar).

Kahire dili gelişmeye ve giderek daha kullanışlı yerleşikler sunmaya devam ediyor. Öte yandan, Özyinelemeli Doğrulayıcı, bu yerleşiklerin yalnızca küçük bir alt kümesinin kullanılmasını gerektirir. Dolayısıyla özyinelemeli bir SHARP, özyinelemeli doğrulayıcılarda tüm dili destekleyerek Kahire'deki herhangi bir ifadeyi başarıyla destekleyebilir. Spesifik olarak, L1 Solidity Verifier'ın yalnızca özyinelemeli ispatları doğrulaması gerekir ve bu nedenle Kahire dilinin daha istikrarlı bir alt kümesiyle sınırlandırılabilir: L1 Verifier'ın en son ve en büyük yerleşiklerle ayak uydurması gerekmez. Başka bir deyişle, sürekli gelişen karmaşık ifadelerin doğrulanması L2'ye devredilir ve L1 Doğrulayıcı daha basit ve daha kararlı ifadeleri doğrulamaya bırakılır.



#### Azaltılmış Bilgi İşlem Ayak İzi

Yinelemeden önce, birden çok ifadeyi tek bir kanıtta toplama yeteneği, ifadenin mevcut bilgi işlem örneklerinde kanıtlanabilecek maksimum boyutuyla (ve bu tür kanıtları oluşturmak için gereken süreyle) sınırlıydı.

Özyineleme ile, artık bu kadar büyük ifadeleri kanıtlamaya gerek yoktur. Sonuç olarak, daha küçük, daha ucuz ve daha fazla kullanılabilir bilgi işlem bulut sunucuları kullanılabilir (yine de büyük yekpare kanıtlayıcılardan daha fazlasına ihtiyaç duyulabilir). Bu, kanıtlayıcı örneklerinin daha önce mümkün olandan daha fazla fiziksel ve sanal ortamda konuşlandırılmasına izin verir.



### Özet

Genel hesaplamanın özyinelemeli kanıtları artık Mainnet Ethereum'da StarkNet dahil olmak üzere birden fazla üretim sistemine hizmet ediyor.

Özyinelemenin faydaları, yeni iyileştirmelere izin vermeye devam ettikçe kademeli olarak fark edilecek ve kısa süre içinde paralelleştirme potansiyelinin kilidini açarak hiper ölçek, indirim ücretleri ve gecikmeyi iyileştirecek.

L3 ve aplicative-recursion gibi yeni fırsatlarla birlikte önemli maliyet ve gecikme avantajları getirecektir. Özyinelemeli Doğrulayıcı'nın daha fazla optimizasyonu devam etmektedir ve zaman içinde daha da iyi performans ve maliyet avantajlarının sağlanması beklenmektedir.

**Gidi Kaempfer**, Temel Mühendislik Başkanı, StarkWare