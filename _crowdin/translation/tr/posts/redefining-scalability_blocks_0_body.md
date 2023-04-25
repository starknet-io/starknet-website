Blockchain ölçeklenebilirliği her zaman hararetli bir konu olmuştur. Neredeyse her blockchain ağı, bir satış noktası olarak saniyede yüksek sayıda işlem (TPS) sunar. Bununla birlikte, TPS, blockchain ağlarını karşılaştırmak için geçerli bir metrik değildir - bu da göreceli performanslarını değerlendirmeyi zorlaştırır. Ayrıca, büyük TPS sayılarının genellikle bir maliyeti vardır - bu da şu soruyu ortaya çıkarır: Bu ağlar gerçekten ölçekleniyor mu, yoksa sadece iş hacmini mi artırıyorlar?

Öyleyse, ölçeklenebilirliğin nasıl tanımlanacağını, bunu başarmak için hangi tavizlerin verildiğini ve Validity Rollups'ın neden nihai ölçeklenebilirlik çözümü olduğunu inceleyelim.

### Tüm İşlemler Eşit Yapılmaz

İlk olarak, TPS'nin basit ve kullanışlı metriğinin doğru bir ölçeklenebilirlik ölçüsü olmadığı iddiamızı oluşturmamız gerekiyor.

İşlemleri yürütmek için düğümleri telafi etmek (ve kullanıcıları gereksiz hesaplama ile ağa spam göndermekten caydırmak için), blok zincirleri, blok zincirine uygulanan hesaplama yüküyle orantılı bir ücret alır. Ethereum'da, hesaplama yükünün karmaşıklığı*gazıyla ölçülür.*Gaz, işlem karmaşıklığının çok uygun bir ölçüsü olduğu için, bu makale boyunca terim, tipik olarak Ethereum'a özgü olsa da, Ethereum olmayan blok zincirleri için de kullanılacaktır.

İşlemler, karmaşıklık ve dolayısıyla ne kadar gaz tükettikleri bakımından önemli ölçüde farklılık gösterir. Güvene dayalı olmayan eşler arası işlemlerin öncüsü olan Bitcoin, yalnızca ilkel Bitcoin betiğini destekler. Adresten adrese yapılan bu basit transferler çok az gaz kullanır. Buna karşılık, Ethereum veya Solana gibi akıllı sözleşme zincirleri, sanal bir makineyi ve çok daha karmaşık işlemlere izin veren Turing-complete programlama dillerini destekler. Bu nedenle, Uniswap gibi dApp'ler çok daha fazla gaz gerektirir.

Bu nedenle, farklı blok zincirlerinin TPS'sini karşılaştırmanın bir anlamı yoktur. Bunun yerine karşılaştırmamız gereken, hesaplama kapasitesi veya verimdir.

Tüm Blockchain'lerin</em>blok başına kaç tane*hesaplama*biriminin işlenebileceğini ve yeni bir bloğun ne kadar hızlı*eklenebileceğini belirleyen (değişken) bir blok boyutu ve blok süresi vardır. Birlikte, bu iki değişken bir blok zincirinin*verimini*belirler.</p>

### Ölçeklenebilirliği Ne Kısıtlar?

Blok zincirleri, maksimum düzeyde merkezi olmayan, kapsayıcı ağlar olmaya çalışır. Bunu başarmak için iki temel özellik kontrol altında tutulmalıdır.

#### **1. Donanım Gereksinimleri**

Bir blok zincir ağının merkezsizleştirilmesi, ağdaki en zayıf düğümün blok zinciri doğrulama ve durumunu koruma yeteneği ile belirlenir. Bu nedenle, bir düğümü çalıştırma maliyetleri (donanım, bant genişliği ve depolama), mümkün olduğu kadar çok kişinin güvene dayalı olmayan ağda izinsiz katılımcı olmasını sağlamak için mümkün olduğunca düşük tutulmalıdır.

#### 2**.**Eyalet Büyümesi

Durum büyümesi, blok zincirinin ne kadar hızlı büyüdüğünü ifade eder. Bir blok zinciri birim zaman başına ne kadar fazla iş hacmi sağlarsa, blok zinciri o kadar hızlı büyür. Tam düğümler, ağın geçmişini saklar ve ağın durumunu doğrulayabilmeleri gerekir. Ethereum'un durumu, ağaçlar gibi verimli yapılar kullanılarak depolanır ve referans alınır. Devlet büyüdükçe, ona yeni yapraklar ve dallar eklenerek, belirli eylemlerin gerçekleştirilmesi daha karmaşık ve zaman alıcı hale gelir. Zincirin boyutu büyüdükçe, düğümler tarafından en kötü durum yürütmesini kötüleştirir, bu da yeni blokları doğrulamak için sürekli büyüyen bir süreye yol açar. Zamanla bu, tam bir düğümün eşitlenmesi için geçen toplam süreyi de artırır.

### Verim Artışının Zararlı Etkileri

#### 1. Düğüm Sayısı

Bir düğümü çalıştırmak için minimum gereksinimler ve düğüm sayıları şunlardır:

* Bitcoin¹: 350 GB HDD disk alanı, 5 Mbit/s bağlantı, 1 GB RAM, CPU >1 Ghz. **Düğüm sayısı: ~10.000**
* Ethereum²: 500 GB+ SSD disk alanı, 25 Mbit/s bağlantı, 4–8 GB RAM, CPU 2–4 çekirdeği. **Düğüm sayısı: ~6.000**
* Solana³: 1,5 TB+ SSD disk alanı, 300 Mbit/s bağlantı, 128 GB RAM CPU 12+ çekirdek. **Düğüm sayısı: ~1.200**

Bir blok zincirinin verimi için gereken düğümler için CPU, bant genişliği ve depolama gereksinimleri ne kadar büyükse, ağdaki düğümlerin o kadar az olduğuna dikkat edin - bu da daha zayıf merkezsizleşmeye ve daha az kapsayıcı bir ağa yol açar.

#### 2. Tam Bir Düğümü Senkronize Etme Zamanı

Bir düğümü ilk kez çalıştırırken, başlangıç bloğundan zincirin ucuna kadar ağın durumunu mevcut tüm düğümlerle senkronize etmesi, indirmesi ve doğrulaması gerekir. Bu süreç, herhangi birinin protokolün izinsiz bir katılımcısı olarak hareket etmesine izin vermek için mümkün olduğunca hızlı ve verimli olmalıdır.

Jameson Lopp'un[2020 Bitcoin Düğüm](https://blog.lopp.net/2020-bitcoin-node-performance-tests/)ve[2021 Düğüm Senkronizasyon Testleri](https://blog.lopp.net/2021-altcoin-node-sync-tests/)bir gösterge olarak alan Tablo 1, ortalama bir tüketici sınıfı bilgisayarda tam bir Bitcoin ile Ethereum ve Solana düğümünün senkronize edilmesi için gereken süreyi karşılaştırır.

![Tablo 1. Blockchain verimi ve düğüm senkronizasyonu karşılaştırması](/assets/1_gmpi_1c9zipoc-znrh7b5q.png "Tablo 1. Blockchain verimi ve düğüm senkronizasyonu karşılaştırması")

Tablo 1, giderek daha fazla verinin işlenmesi ve depolanması gerektiğinden, artan verimin daha uzun senkronizasyon sürelerine yol açtığını göstermektedir.

Büyüyen blok zincirinin zorluklarını hafifletmek için düğüm yazılımında sürekli iyileştirmeler yapılırken (disk ayak izinin düşürülmesi, daha yüksek senkronizasyon hızları, daha güçlü kilitlenme direnci, belirli bileşenlerin modülerleştirilmesi, vb.), düğümlerin hala artışlara ayak uyduramadığı açıktır. verim için.

### Ölçeklenebilirlik nasıl tanımlanmalı?

Ölçeklenebilirlik, blockchain alanındaki en yanlış ifade edilen terimdir. Verimi artırmak istense de, yapbozun yalnızca bir parçasıdır.

***Ölçeklenebilirlik****aynı donanım**için**işlem daha**anlamına gelir.*

Bu nedenle ölçeklenebilirlik iki kategoriye ayrılabilir.

#### Sıralayıcı ölçeklenebilirliği

Sıralama, bir ağda işlemlerin sıralanması ve işlenmesi eylemini tanımlar. Daha önce belirlendiği gibi, herhangi bir blok zinciri, blok boyutunu artırarak ve blok süresini kısaltarak - ademi merkeziyetçiliği üzerindeki olumsuz etkinin çok önemli olduğu bir noktaya kadar - verimini önemsiz bir şekilde artırabilir. Ancak, bu basit parametreleri değiştirmek gerekli iyileştirmeleri sağlamaz. Ethereum'un EVM'si teorik olarak ~2.000</a>kadar

, bu da uzun vadeli blok alanı talebini karşılamak için yetersizdir. Solana dizilemeyi ölçeklendirmek için bazı etkileyici yenilikler yaptı: paralelleştirilebilir bir yürütme ortamından ve çok daha verimli iş hacmine izin veren akıllı bir fikir birliği mekanizmasından yararlanarak. Ancak iyileştirmelere rağmen, ne yeterli ne de ölçeklenebilir. Solana iş hacmini artırdıkça, bir düğümü çalıştırmak ve işlemleri işlemek için gereken donanım maliyetleri de artar.</p> 



#### Doğrulama ölçeklenebilirliği

*Doğrulama ölçeklenebilirliği, düğümleri sürekli artan donanım maliyetleriyle zorlamadan verimi artıran yaklaşımları tanımlar.*Spesifik olarak, Geçerlilik kanıtları gibi kriptografik yenilikleri ifade eder. Validity Rollups'ın bir blok zincirini sürdürülebilir bir şekilde ölçeklendirmesinin nedeni bunlardır.

**Geçerlilik Özeti nedir?**

Geçerlilik Toplamaları ("ZK Toplamaları" olarak da bilinirler), hesaplamayı ve durum depolamayı zincir dışına taşır ancak az miktarda belirli veriyi zincir üzerinde tutar. Temel blok zincirindeki bir akıllı sözleşme, Toplamanın durum kökünü korur. Toplamada, geçerli durum köküyle birlikte bir dizi yüksek oranda sıkıştırılmış işlem, zincir dışı bir Prover'a gönderilir. Prover, işlemleri hesaplar, sonuçların geçerlilik kanıtını ve yeni durum kökünü oluşturur ve bunu zincir üstü bir Doğrulayıcıya gönderir. Doğrulayıcı, geçerlilik kanıtını doğrular ve Toplamanın durumunu koruyan akıllı sözleşme, Kanıtlayıcı tarafından sağlanan yeni duruma günceller.

**Geçerlilik Toplamaları aynı donanım gereksinimleriyle nasıl ölçeklenir?**

Provers, üst düzey donanım gerektirse de, bir blok zincirinin merkezsizleştirilmesini etkilemez; çünkü işlemlerin geçerliliği matematiksel olarak doğrulanabilir kanıtlarla garanti edilmektedir.

Önemli olan delilleri doğrulamak için gerekli şartlardır. İlgili veriler yüksek oranda sıkıştırıldığından ve hesaplama yoluyla büyük ölçüde soyutlandığından, temeldeki blok zincirinin düğümleri üzerindeki etkisi minimum*.*

Doğrulayıcılar (Ethereum düğümleri) üst düzey donanım gerektirmez ve partilerin boyutu donanım gereksinimlerini artırmaz. Düğümler tarafından yalnızca durum geçişlerinin ve az miktarda çağrı verisinin işlenmesi ve saklanması gerekir. Bu, tüm Ethereum düğümlerinin mevcut donanımlarını kullanarak Validity Rollup partilerini doğrulamasını sağlar.

**Ne kadar çok işlem olursa o kadar ucuzlar**

Geleneksel blok zincirlerinde, ne kadar çok işlem gerçekleşirse, blok alanı dolduğunda herkes için o kadar pahalı olur ve kullanıcıların işlemlerini dahil etmek için bir ücret piyasasında birbirlerinden daha yüksek teklif vermeleri gerekir.

Geçerlilik Toplaması için bu dinamik tersine çevrilir. Ethereum'da bir grup işlemi doğrulamanın belirli bir maliyeti vardır. Bir parti içindeki işlemlerin sayısı arttıkça, partiyi doğrulama maliyeti katlanarak daha yavaş bir oranda artar. Toplu işleme daha fazla işlem eklemek, toplu doğrulama maliyeti artsa bile daha ucuz işlem ücretlerine yol açar - çünkü toplu iş içindeki tüm işlemler arasında amortismana tabi tutulur. Validity Rollups, doğrulama ücretinin tüm kullanıcılar arasında paylaşılabilmesi için bir toplu iş içinde mümkün olduğunca çok işlem ister. Toplu iş boyutu sonsuza kadar büyüdükçe, işlem başına amorti edilmiş ücret sıfıra yaklaşır, yani bir Geçerlilik Toplaması üzerinde ne kadar çok işlem olursa, herkes için o kadar ucuz olur.

Validity Rollup tarafından desteklenen bir dApp olan dYdX, sıklıkla 12.000'den fazla işlemin toplu boyutlarını görür. Ana ağdaki aynı işlemlerin gaz tüketimi ile Geçerlilik Toplamasındaki gaz tüketiminin karşılaştırılması, ölçeklenebilirlik kazanımlarını gösterir:

Ethereum Mainnet'te bir dYdX işlemi gerçekleştirme:**200.000 gaz**

StarkEx'te bir dYdX işlemi gerçekleştirme:**<500 gas**

Buna bakmanın başka bir yolu: Validity Rollups'ın ana maliyeti, aynı toplu iş içindeki kullanıcı sayısıyla doğrusal olarak ölçeklenir.



#### İyimser Toplamalar neden sanıldığı kadar ölçeklenebilir değil?

Teorik olarak, İyimser Toplamalar, Geçerlilik Toplamaları ile neredeyse aynı ölçeklenebilirlik avantajlarını sağlar. Ancak önemli bir ayrım vardır: İyimser Toplamalar ortalama durum için optimize ederken Geçerlilik Toplamaları en kötü durum için optimize eder. Blockchain sistemleri son derece çekişmeli koşullarda çalıştığından, güvenliği sağlamanın tek yolu en kötü durum için optimizasyon yapmaktır.

İyimser Toplama'nın en kötü durumunda, bir kullanıcının işlemleri dolandırıcılık denetçileri tarafından kontrol edilmeyecektir. Bu nedenle, dolandırıcılığa itiraz etmek için kullanıcının bir Ethereum tam düğümünü, bir L2 tam düğümünü senkronize etmesi ve şüpheli işlemi kendisinin hesaplaması gerekir.

Validity Rollup'ın en kötü durumunda, bir kullanıcının geçerlilik kanıtını doğrulamak için yalnızca bir Ethereum tam düğümünü senkronize etmesi gerekir ve bu da kendisini hesaplama yükünden kurtarır.

Geçerlilik Toplamalarının aksine, İyimser Toplamaların maliyeti, kullanıcı sayısı yerine işlem sayısıyla doğrusal olarak ölçeklenir ve bu da onları daha pahalı hale getirir.



### Bulmacanın Son Parçası — Toplama Durumuna İzinsiz Erişim

İşlemlerin geçerliliğini garanti etmek için kullanıcıların yalnızca bir Ethereum düğümü çalıştırması gerekir. Bununla birlikte, kullanıcılar ve geliştiriciler, çeşitli amaçlarla Toplama'nın durumunu ve yürütülmesini görüntülemek ve çalıştırmak isteyebilir. *indeksleme L2 düğümü*bu ihtiyacı mükemmel bir şekilde karşılar. Kullanıcıların ağdaki işlemleri görmesini sağlamakla kalmaz, aynı zamanda ekosistem altyapısının çalışması için gerekli olan kritik bir altyapı parçasıdır. The Graph, Alchemy, Infura gibi indeksleyiciler; Chainlink gibi Oracle ağları ve blok kaşifler, bunların tümü, izinsiz, indeksleme L2 düğümü tarafından tamamen desteklenir.



### Çözüm

Blok zinciri ölçeklenebilirliğini ele almaya yönelik birçok yaklaşım, yanlış bir şekilde*çıktıyı*artırmaya odaklanır. Ancak bu, iş hacminin düğümler üzerindeki etkisini göz ardı eder: blokları işlemek ve ağ geçmişini depolamak için sürekli artan donanım gereksinimleri ve bunun bir ağın dağıtılmasını nasıl engellediği.

Geçerlilik-kanıtlı kriptografinin ortaya çıkmasıyla, bir blok zinciri, düğümleri sürekli artan maliyetlerle zorlamayan ve geniş bir ademi merkeziyetçiliğe izin veren**gerçek ölçeklenebilirlik**elde edebilir. Aynı donanım için güçlü ve daha karmaşık hesaplamalara sahip daha fazla işlem artık mümkün, bu da süreçteki ücret piyasası ikilemini tersine çeviriyor — Validity Rollup'ta ne kadar çok etkinlik olursa, o kadar ucuz oluyor!

[SwagtimusPrime.eth](https://twitter.com/SwagtimusP?t=pO0L1vGIhuC-ZgWOusQYtA&s=09)ve[Louis Guthmann](https://twitter.com/GuthL)

¹<https://bitcoin.org/en/bitcoin-core/features/requirements>

²<https://ethereum.org/en/developers/docs/nodes-and-clients/>

³<https://docs.solana.com/running-validator/validator-reqs>

⁴ Büyük ölçüde basitleştirilmiş ve ortalama dinamik blok boyutları için ayarlanmıştır