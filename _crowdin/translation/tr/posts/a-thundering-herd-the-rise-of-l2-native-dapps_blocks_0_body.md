### TL;DR

L2-yerel dApp'ler artık geleneksel L1 gaz kısıtlamalarından bağımsız olarak gelişebilir

### giriiş

dApp geliştiricileri, Ethereum'un (L1) blok gaz limiti nedeniyle her zaman ciddi kısıtlamalarla karşı karşıya kalmıştır. Yalnızca bu dApp'lerin nasıl çalıştığını**, aynı zamanda bu dApp'lerin</em>ne yapabileceğini de*sınırlar.</p>

Layer 2 (L2), dApp geliştiricilerine bu gazlı cam tavandan arınmış hesaplamalı bir sıfırdan alan sunar. DApp'lerin büyük çoğunluğunun birkaç yıl içinde L2'ye özgü olacağına inanıyoruz: bu hesaplamalı serbestlik derecesinden yararlanmak için sıfırdan L2 üzerine inşa edilmiş olacaklar.

### L1 gaz limitleri, L1'e özgü dApp'leri şekillendirir

*Tasarımı büyük ölçüde L1 gaz kısıtlamaları tarafından şekillendirilen iki popüler dApp örneğini ele alalım: AMM'ler ve DEX toplayıcıları.*

Otomatik Piyasa Yapıcı (AMM), esasen sipariş defterine dayalı bir borsanın düşük yakıtlı bir yaklaşımıdır. L1 AMM'leri, kullanıcıların limit, stop stop veya diğer çeşitli emir türlerini koymasına ve kaldırmasına izin vermek yerine, L1'in yoğun hesaplama maliyetini karşılamak için yalnızca merkezi bir temel likidite havuzuyla basit takaslara izin verir.

DEX toplayıcıları, kullanıcılar için en iyi fiyatlardan yararlanmak için ideal olarak tüm olası likidite havuzlarına, hatta en küçük likidite havuzlarına erişmeye ihtiyaç duyar. Ancak, birçok farklı havuzu sorgulamanın maliyeti nedeniyle, L1 üzerinden işlem yapmaya değmez. Havuzlara erişmek ve ilgili işlem ücretlerini ödemek, yalnızca likidite havuzları yeterince derin likiditeye sahip olduğunda haklıdır. Benzer şekilde, borç verme/alma ve diğer teminata dayalı dApp'lerdeki tasfiyeler, tasfiye indirimi ile işlem ücreti arasındaki fark çok daha küçükse çok daha doğru olabilir.

Birçok L1 dApp'in sınırlı işlevselliği ve tasarımı, doğrudan geliştiricilerin kodlarını Ethereum'un gas kısıtlamalarına uyacak şekilde optimize etmesinden kaynaklanır. Neden Ethereum diyoruz diye sorabilirsiniz. Solidity kodu birçok L1'de ve hatta bazı L2'lerde çalışamaz mı? Gerçekten de, ancak bunlar arasında Ethereum en pahalı (ve dolayısıyla güvenli) ortamdır. Solidity dApp'leri “en pahalı bağlantı” yani Ethereum için tasarlanmıştır. Bu nedenle, daha ucuz çalışma zamanı ortamlarının sağladığı hesaplama avantajından yararlanamazlar. En pahalı çalışma zamanı ortamı için bir dApp tasarlayarak vazgeçilen işlevselliğin kilidini açmak için dApp'ın kodu uyarlanmalıdır.

### L2-yerel dApp'lerin yükselişi

Validity Rollups (aka ZK-Rollups) son derece ucuz hesaplama sağlar. Diğer herhangi bir ölçeklendirme çözümünün aksine, L2 hesaplaması, zincir üstü doğrulama gazı maliyeti üzerinde yalnızca küçük bir etki ile katlanarak büyüyebilir. Ek olarak, bir Geçerlilik Toplaması, ek L1 kaynakları tüketmeden hesaplamalara ilişkin girdileri - "tanık verileri" - işler ve birçok girdi içeren hesaplamalara izin verir.

**[Kahire](https://www.cairo-lang.org/)**(STARK kanıtları yoluyla dApp'leri ölçeklendirmek için Turing-complete dili) L2'de yerel olarak dApp'leri kodlamak, geliştiriciler için geniş bir olasılıklar dünyasının kilidini açar. Daha önce kullanamadıkları önemli miktarda veriyi (hem hesaplama hem de tanık verileri) kullanmalarını sağlar.

Bu tür L2-yerel dApp'leri ve bunların yeni, zenginleştirilmiş yeteneklerini keşfedelim.

#### DeFi

StarkWare'in Validity Rollup'ı StarkEx'e katılmadan önce dYdX, Ethereum üzerinde bir L1 dApp olarak çalışıyordu. Kullanıcılarına sentetik varlıklarda x10 kaldıraç ve yalnızca bir sentetik varlıkla desteklenen pozisyonlar sunuyordu. Kahire'de dYdX'i L2 tabanlı bir dApp olarak yeniden inşa etmek, önemli ölçüde daha ölçeklenebilir, daha ucuz ve verimli bir DeFi platformu sağlar:

* Oracle fiyat güncellemeleri: Bu tür güncellemeler tipik olarak medyanı hesaplamak için çeşitli kaynaklardan düzinelerce fiyat ve imza içerir. Bir Geçerlilik Özeti, tanık verilerini L1'e bildirmeden fiyat kehaneti mantığının (imza doğrulaması ve medyan fiyatın hesaplanması) üstel ölçeklendirmesini sağlar. Bunu dYdX'in L1 uygulamasıyla karşılaştırın; burada her fiyat kehaneti güncellemesi yaklaşık 300.000 gaza mal olur ve bu nedenle sıklığı ve fiyat raporlayıcı setinin boyutu sınırlıdır.
* Kaldıraç: Doğru bir fiyat beslemesi, dYdX'in bir pozisyonun riskini gerçek zamanlı olarak tahmin etmesini ve kullanıcılar için daha yüksek kaldıraç sunmasını sağlar. İyileştirilmiş oracle fiyat güncellemeleri sayesinde dYdX, kaldıracı L1'de x10'dan L2'de x25'e yükseltti.
* Çapraz marj: L2'de dYdX ile piyasa yapıcılar aynı teminatı kullanarak birçok varlığa uzun/kısa emir koyabilirler. dYdX'in L2'sindeki ortalama yerleşim, 10'dan fazla farklı sentetik varlığa sahip pozisyonları içerir! Karşılaştırıldığında, L1'de bu çapraz marj yeteneğine sahip olmak, zincir üstü gaz maliyetini iki kattan fazla artıracaktı.

#### Oyun ve Üretken Sanat

L1'e özgü oyunların mevcut mahsulü, tipik olarak oyun varlıklarını L1'de depolarken tüm oyun mantığını güvenilir bir zincir dışı uygulamada uygular. Bu model, L1'in gaz sınırlamalarının doğrudan bir sonucudur. L2'deki ucuz hesaplama sayesinde, L2'ye özgü oyun dApp'lerinin geliştiricileri artık oyun mantığını akıllı bir sözleşmede uygulayabilir ve oyun varlıklarını yalnızca depolamak yerine güvenle kullanabilir. Oyun mantığını güvenilir olmayan hesaplama alanına getirmek, blockchain tabanlı oyunların çok daha zengin bir dünyasına doğru atılmış önemli bir adımdır. L2'ye özgü oyunlar, StarkWare'in izinsiz ağı olan StarkNet'te halihazırda geliştirilmektedir (örneğin,[Dope Wars](https://github.com/dopedao/RYO)ve[Influence](https://medium.com/influenceth/influence-to-launch-on-starknet-afd3c26ea25a)).

Ancak, blockchain tabanlı bir oyun gerçekten ne kadar karmaşık olabilir? Örneğin, grafikleri doğrudan zincir üzerinde işlemek imkansız görünüyor -[mı yoksa](https://twitter.com/guiltygyoza/status/1449637155001798657)mi? Akıllı bir sözleşmede diferansiyel denklemleri çözmek ve düzlemsel hareketi simüle etmek, gelecekte bir blockchain fizik motoru olabilecek şeye doğru önemli bir adımı temsil ediyor. Etkileri çok büyük. Counter-Strike gibi rekabetçi bir çok oyunculu oyun hayal edin. Zincir üzerinde oyun mantığı simüle edilebilseydi, pek çok korkunç bilgisayar korsanlığı geçmişte kalırdı - oyuncular kanıtlanabilir derecede adil bir oyunun keyfini çıkarabilir.

Generative Art, blockchain tabanlı sanat yaratmak için hesaplama, rastgelelik ve diğer verileri kullanır. Bir sanatçı güven duymadan ne kadar karmaşık mantık ve hesaplama kullanabilirse, benzersiz tekil sanat eserleri oluşturmak için o kadar fazla seçenek vardır. [WhaleStreet DAO](https://blog.whalestreet.xyz/whalestreet-dao-to-launch-gen-art-ecosystem-on-ethereum-with-starknet/), StarkNet'in sınırsız hesaplama kaynaklarından yararlanarak StarkNet'teki ilk Gen Art projelerinden birini başlatıyor.

### Sıradaki ne?

Geçerlilik Toplamaları - ve özellikle Kahire destekli StarkEx ve StarkNet - çok fazla hesaplama veya tanık verisi tüketen dApp'lerin geliştirilip çalıştırılabileceği bir ortam sağlar. Dağıtılmış defter teknolojisinin tüm faydalarıyla, L2-yerel dApp'ler için son derece heyecan verici bir gelecek öngörüyoruz.

Şekillendirilebilirlik, güvenilmezlik ve merkezi olmayan yönetim tarafından desteklenen genel hesaplama ile siz**yaratabilirsiniz?