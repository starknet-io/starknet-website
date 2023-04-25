#### **TL;DR**

StarkNet'i dört adımda inşa ediyoruz:

* Adım 0 — Temeller (tamamlandı*)
* Adım I — Gezegenler: Tek Uygulama Toplamaları
* Adım II — Takımyıldızlar: Çoklu Uygulama Toplamaları
* Adım III — Evren: Merkezi Olmayan Bir Toplama

Birkaç kısa ay içinde Adım I'in devreye alınmasını ve 2021'in sonuna kadar Adım II & III'e doğru yolumuza devam etmeyi umuyoruz.

### **giriiş**

StarkWare, Ethereum üzerinden genel hesaplamayı destekleyen merkezi olmayan, izinsiz ve sansüre dayanıklı STARK destekli L2 ZK-Toplaması olan StarkNet'i inşa ediyor. Turing-complete[Kahire dilini](https://www.cairo-lang.org/)temel alır.

Geliştiriciler, kullanıcılar ve StarkNet düğümleri, izinsiz bir L2 Toplamasından beklenebilecek her şeyi yapabilecekler: Geliştiriciler, kendi iş mantıklarını uygulayan uygulamalar geliştirebilir ve bunları StarkNet'te konuşlandırabilir. Kullanıcılar, tıpkı bugün Ethereum ile etkileşime girdikleri gibi StarkNet'e yürütülmek üzere işlem gönderebilirler. StarkNet düğümleri ve katılımcıları, ağın verimli ve adil bir şekilde çalışmasını sağlamak için kripto-ekonomik olarak teşvik edilecektir.

Tüm StarkNet işlemleri periyodik olarak toplu hale getirilecek ve bunların geçerliliği, Ethereum'da doğrulanmak üzere bir STARK kanıtıyla kanıtlanacaktır. STARK kanıtlarını doğrulamak için gereken hesaplama çabası, kanıtlanmış hesaplamaya kıyasla katlanarak küçük olduğundan, StarkNet Ethereum'u büyüklük sırasına göre ölçekleyecektir.

Tüm StarkNet durum geçişleri STARK tarafından kanıtlanmış olacağından, Ethereum'da yalnızca geçerli olanlar kabul edilecektir. Tam StarkNet durumunu yeniden oluşturmak için gereken tüm veriler zincir üzerinde yayınlanacaktır. Herkes kendi StarkNet düğümünü çalıştırabilecek. Bu özellikler, StarkNet'i Ethereum kadar güvenli ve izinsiz yapacaktır.

Üç yıldır bu işin içindeyiz ve "Moon Math"ı Ethereum üzerinde çalışan üretim sınıfı ve verimli bir yazılıma dönüştürmede şimdiden bazı dikkate değer kilometre taşlarına ulaştık. StarkWare'in işleri yapma şekli, önce zor sorunların üstesinden gelmek, temel teknolojiyi oluşturmak ve ardından onu parça parça üretime sunmaktır. StarkNet'i tamamlarken bu şekilde inşa etmeye devam edeceğiz.

![](/assets/ontheroad_02.png)

**Adım 0 – Temeller**

StarkWare, StarkNet için bazı önemli temelleri atmayı tamamladı.

#### **Kahire**

[Cairo](https://twitter.com/StarkWareLtd/status/1300353049836376066?s=20)genel hesaplama için STARK kanıtları üretmek için Turing-Complete High-Level Language & çerçevemizdir. Bir uygulama geliştiricisi, el yapımı karmaşık "devreler" veya AIR'ler yerine herhangi bir iş mantığını tanımlamak, zincir dışı olarak kanıtlamak ve zincir üzerinde doğrulatmak için Kahire'yi kullanabilir. Kahire, Mainnet</a>üretimde[ve ayrıca geliştiriciler](https://twitter.com/StarkWareLtd/status/1320695603492507648?s=20)için

.</p> 

Birkaç hafta içinde, Kahire'nin Genel Kanıt Hizmetinin (GPS) Alfa sürümünü halka açık bir Ethereum test ağında başlatacağız. *Bu, geliştiricilerin Kahire'yi kullanarak istedikleri iş mantığını uygulayarak kendi uygulamalarını oluşturmalarına olanak tanır. Kahire kodlarını kanıtlanması için GPS'e gönderecekler ve ardından zincir üzerinde doğrulanacaklar.*

GPS, tamamen ayrı ve bağımsız uygulamaların yürütülmesinin bütünlüğünü iddia etmek için tek bir kanıt sağlar ve böylece bu uygulamalara, aralarındaki kanıt doğrulama gaz masrafını amorti etme yeteneği verir.

Kahire ve GPS, StarkNet'in temelidir - her ikisini de geliştiricilere dışsallaştırma kararımız, onların bu teknolojiyle erken tanışmalarını sağlar; bu, yalnızca üzerine inşa etmeye başlayabilmeleri için değil, aynı zamanda StarkNet'in gelişimini etkileyebilmeleri için de geçerlidir.

Geliştirici topluluğunun ihtiyaçları ve geri bildirimlerine dayanarak Kahire'yi geliştirmeye devam edeceğiz. Bu dili, kullanılabilirliğini artıran yeni özellikler, sözdizimi ve yerleşiklerle geliştireceğiz ve Kahire araçlarını geliştirmeye ve iyileştirmeye devam edeceğiz: derleyiciler, izleyici/hata ayıklayıcı ve ortak IDE'lere entegrasyonlar.

StarkNet, Kahire'yi kaputun altında çalıştıracak.



#### **STARK Yazılım Yığını**

StarkWare, ekosistemdeki en güçlü kanıt sistemini geliştirdi ve aylardır Mainnet</a>yayında. StarkWare ayrıca, diğer tüm kanıtlayıcılardan 20 kat daha hızlı olan açık kaynaklı kanıtlayıcımız[ethSTARK](https://twitter.com/StarkWareLtd/status/1264911004099543040?s=20)geliştirmiştir; hem[sıfır bilgi hem de post-quantum-güvenli imzalar sunar](https://twitter.com/StarkWareLabs/status/1331930111227080709).</p> 

*ölçüm*ölçeklendirmemiz - ekstrapolasyonlar veya vaatler değil - Mainnet üzerinde tek bir kanıtta 300.000 işlemin işlenmesini içerir ve Toplama veriminde[dünya rekoru elde eder: 3K tps](https://twitter.com/StarkWareLtd/status/1287770381525422082?s=20). Bu süreçte, Toplama gaz verimliliğinde dünya rekorunu elde ettik: 315 gas/tx, Ethereum L1'deki işlemlerden çok daha ucuz.

Bu teknoloji, StarkNet'in merkezi olmayan Kanıtlama Katmanının mihenk taşı olacak ve bu nedenle, StarkNet'in gelişiminin bir parçası olarak ek ve geliştirilmiş kanıtlayıcılar yayınlayacağız (bununla ilgili daha fazla bilgi gelecek bir blog gönderisinde).



#### **StarkEx**

StarkEx, L2 ölçeklenebilirlik motorumuzdur. Haziran 2020 tarihinden itibaren Mainnet üzerinde[DeversiFi](https://twitter.com/deversifi)müşterisine hizmet vermektedir. Birkaç kısa hafta içinde başlayarak hem[dYdX](https://twitter.com/dydxprotocol)hem de[ImmutableX](https://twitter.com/Immutable)güç verecek. StarkEx, ödemelerin yanı sıra karmaşık ticaret mantığını (spot ticaret, türevler, NFT'ler) yönetebilir.

StarkEx'i geliştirmek, alet zincirimizi test etme ve onu gerçek dünya gereksinimlerine karşı test etme yolumuzdu. Araçların olgunlaşmasına ve gelişmesine yardımcı olmak için gerçek uygulamaların ve canlı kullanıcıların talepleri gibisi yoktur. Ayrıca, ekosisteme daha iyi hizmet vermek için hangi öğelerin ele alınması gerektiğini anlamamıza da yardımcı olur - örneğin, cüzdanlar ve blok gezginleriyle entegrasyonlar.

StarkEx, STARK tabanlı bir ZK-Rollup kullanarak uygulamaları ölçeklendirme yeteneğinin canlı bir örneğidir ve Kahire'de yazılmış Mainnet üzerinde üretimdeki ilk uygulamadır. Bu haliyle StarkNet üzerinde çalışan uygulamalardan biri de olacaktır.

![](/assets/ontheroad_03.png)



### **Öndeki yol**



#### **Adım I — Gezegenler: Tek Uygulama Toplamaları**

Bu adım, geliştiricilerin kendi ölçeklenebilir uygulamalarını StarkNet üzerinde oluşturmasına ve dağıtmasına olanak sağlayacaktır.

Bu noktada, her bir StarkNet örneği tek bir uygulamayı çalıştırabilecektir. Farklı örnekler farklı uygulamaları çalıştırabilir.\
StarkNet çerçevesi aşağıdakileri içerecektir:

* Keyfi Kahire mantığı için STARK kanıtları oluşturmak ve ardından bunları Ethereum'da gönderip doğrulamak için mekanizmalara ihtiyaç vardı.
* L1 Ethereum ile Etkileşimler: L1 jetonlarının yatırılması ve çekilmesi, zincir üstü verilerin yayınlanması, StarkNet kullanıcılarını kötü niyetli StarkNet operatörlerinden koruyan Kaçış Mekanizmaları, vb.
* L2 kullanıcı bakiyelerinin ve uygulamanın depolama ve belleğinin yönetimi.

Geliştiriciler, yalnızca uygulamalarının iş mantığını oluşturmaya odaklanabilecek ve ardından üretime geçebilecek: onu StarkNet'te geniş ölçekte dağıtıp çalıştırabilecek.

Genel hesaplamalı, ölçeklenebilir bir ZK-Toplaması oluşturmamızı sağlayan şey, aşağıdakilerin birleşimidir:

* Genel amaçlı bir Turing-complete programlama dili olan Kahire
* Muazzam hesaplamaları tek bir kanıtta bir araya getirmeye olanak tanıyan güçlü STARK yığınımız (kanıtlayıcı ve doğrulayıcı)



#### **Adım II — Takımyıldızlar: Çoklu Uygulama Toplamaları**

Bir sonraki adım, aynı StarkNet eşgörünümü üzerinde çalışan ve aynı global L2 durumuna erişen birden fazla uygulamayı destekleyecektir. Bu, farklı uygulamalar arasında birlikte çalışabilirliğin yanı sıra gelişmiş ölçek ekonomileri nedeniyle daha düşük gaz maliyeti sağlayacaktır.

Kahire, güçlü STARK yığını ve GPS, StarkNet'in çoklu uygulama Toplamasını destekleme konusundaki rekabet avantajını artırıyor.

Bu aşamada, StarkNet, her örnek tek bir operatör tarafından çalıştırılan, Ethereum'un üzerinde herhangi bir keyfi iş mantığıyla*çoklu*uygulama çalıştırmak için tamamen işlevsel bir çerçeve olacaktır.

Bir operatör artık bir StarkNet düğümünü başlatabilir ve uygulama geliştiricileri sözleşmelerini bu düğüm üzerinde devreye alabilir. Kullanıcıların bakış açısından, StarkNet artık daha yüksek bir ölçeğe sahip Ethereum gibi görünüyor ve hissediliyor.



#### **Adım III — Evren: Merkezi Olmayan Toplama**

StarkNet'in evrimindeki son adım, operasyonunu dağıtmaktır.

Şu anda bu aşamayı etkileyen ilgi çekici R&D soruları arasında (i) fikir birliğine varma mekanizmalarını iyileştirmek için ZK-Rollup'ların kullanılması ve (ii) merkezi olmayan StarkNet katılımcılarını ve operatörlerini (işlem sıralayıcılar, kanıtlayıcılar, vb.) verimli, adil ve güvenli bir şekilde çalışmak.



### **Çözüm**

StarkWare, Kahire diline dayalı genel hesaplamayı destekleyen, Ethereum üzerinden merkezi olmayan, izinsiz STARK destekli L2 ZK-Toplaması olan StarkNet'i inşa ediyor.

StarkNet, uygulamaların güvenlikten ödün vermeden ölçeklenmesini, kullanıcıların makul işlem ücretleri ödemesini ve tüm ekosistemin önemli ölçüde büyümesini ve sözünü yerine getirmesini sağlayacaktır.

Geliştirici</a>etmekten memnuniyet duyarız.</p> 

**Güncelleme (Kasım 2021):**StarkNet Alpha, Ethereum Mainnet'te yayında