### TL;DR

* STARK'lar, hesaplamaların bütünlüğünü verimli bir şekilde kanıtlayarak blok zinciri ölçeklendirmesini mümkün kılar
* StarkEx, uygulamaya özel bir ölçeklendirme motorudur
* StarkNet, izinsiz, akıllı sözleşmeli bir Katman 2 ağıdır

### **STARK'lar**

STARK'lar (Scalable, Transparent Argument of Knowledge), hesaplamaların kanıtlanmasını ve doğrulanmasını sağlayan bir ispat sistemidir. Büyük bir hesaplamanın işlenmesine, hesaplamanın doğruluğu için bir kanıt üretilmesine ve ardından kanıtın birkaç adımda doğrulanmasına izin verir.

STARK'lar, zincir üzerinde yapılacak yalnızca hesaplamanın bir kısmını gerektiren doğrulamayı bırakarak, büyük hesaplamaların daha ucuz olduğu zincir dışı yapılmasına izin vererek blok zinciri ölçeklenebilirliğinde önemli bir rol oynayabilir. Başka bir deyişle, doğrulayıcı, zincir üzerinde çok az adım gerçekleştirerek, zincir dışında yapılan çok daha büyük bir hesaplamanın bütünlüğünü onaylar.

Katman 2 çözümleri, STARK'ları kullanarak binlerce işlemi bir araya toplar ve hesaplar ve ardından tek bir STARK kanıtıyla zincir üzerindeki geçerliliklerini doğrular. Zincir üstü işlemin maliyeti, toplu işteki</strong>işlemin tamamı arasında**bölünür. Bu, Ethereum güvenliği ve işlem başına düşük gas maliyeti ile sonuçlanır.</p>

Düşük hesaplama maliyeti, daha önce zincir üzerinde mümkün olmayan yeni bir uygulama sınıfını başlatacaktır. Bu özellikler, STARK'ları, Ethereum yerleşim katmanının güvenliğini korurken, kullanıcı deneyimini iyileştirmek ve gaz maliyetlerini azaltmak için mükemmel bir yapı taşı haline getirir.

StarkWare, Ethereum'u STARK'larla ölçeklendirmek için iki çözüm sunar: StarkEx ve StarkNet.

### **StarkEx**

[StarkEx](https://starkware.co/starkex/)izin verilen, uygulamaya özel ölçeklendirme çözümleri oluşturmak için bir çerçevedir. StarkEx, projelerin ucuz zincir dışı hesaplama elde etmek için kullanabileceği kullanışlı[uygulama akışı](https://docs.starkware.co/starkex-v4/starkex-deep-dive/regular-flows)araç kutusudur. Yürütmenin doğruluğunu onaylayan bir STARK kanıtı, zincir dışında oluşturulur. Böyle bir kanıt, 12.000–500.000 adede kadar işlemi içerebilir (işlem türüne bağlı olarak). Kanıt daha sonra zincirde kabul edilmek üzere STARK Doğrulayıcıya gönderilir. Bu, tüm işlemler için tek bir doğrulama anlamına gelir — işlem başına inanılmaz derecede düşük amortize gaz maliyeti için.

StarkEx'te dağıtılan uygulamalara birkaç örnek, dYdX (sürekli alım satım), Immutable ve Sorare (NFT'ler - basım ve alım satım), DeversiFi (spot alım satım) ve Celer'dir (DeFi Pooling).

StarkWare, pazarı ve müşterilerinin ihtiyaçlarını takip ederek sürekli olarak StarkEx'e daha fazla uygulama akışı ekliyor.

### **StarkNet**

*[StarkNet](https://starkware.co/starknet/)herhangi bir kullanıcının veya geliştiricinin Kahire dilinde geliştirilmiş akıllı sözleşmeleri dağıtabileceği izinsiz bir katman 2 ağıdır.*

StarkNet ekosisteminin içindeki Ethereum akıllı sözleşme deneyimiyle karşılaştırılabilir şekilde, sözleşmeniz StarkNet'te dağıtılan diğer tüm sözleşmelerle etkileşime girerek zengin bir şekilde birleştirilebilir protokollere izin verir. StarkNet sözleşmeleri, eşzamansız mesaj geçişi yoluyla Ethereum sözleşmeleriyle de etkileşime girebilir.

Uygulamaların işlemleri göndermekten sorumlu olduğu StarkEx'in aksine, StarkNet toplu işlemleri sıralar ve bunları işlenmek ve kanıtlanmak üzere gönderir. (StarkNet'in sıralayıcıları şu anda StarkWare tarafından işletilmekte olup, gelecekte merkezden dağıtma planları yapılmaktadır.) Bu, uygulamaların Kahire sözleşmelerini dağıttıktan sonra, ek Operatör altyapısını çalıştırma konusunda endişelenmeleri gerekmediği anlamına gelir. StarkNet, Toplama verileri kullanılabilirlik modunu destekler, yani toplamanın durumu, STARK kanıtlarıyla birlikte Ethereum'a yazılır.

Devasa bir geliştirici topluluğu, uygulamalar, araçlar ve altyapı oluşturarak StarkNet ekosistemiyle derinden ilgileniyor. DeFi, oyunlar, oylama, AI ve daha fazlası gibi düzinelerce uygulama test ağında zaten yayında. Dahası, blok gezgini, yerel test ortamı ve çerçevesi, çeşitli dillerdeki SDK'lar ve daha fazlası gibi geliştirici araçları StarkNet Topluluğu tarafından oluşturulmaktadır. Ayrıca,[Shamans' platformunda](https://community.starknet.io/)iyileştirmeler, potansiyel özellikler ve en iyi uygulamalar için öneriler içeren aktif tartışmalar yer alır.

### **Özetlersek**

Hem[StarkEx](https://youtu.be/P-qoPVoneQA)hem de StarkNet, STARK tabanlı ölçeklendirme çözümleridir. Her ikisi de ölçeklenebilirlik, düşük gaz maliyetleri ve Güvenlik sağlar, ancak farklı çalışma gereksinimlerine ve birlikte çalışabilirlik modellerine sahiptir. StarkEx, büyük ölçüde kendi kendine yeten ve StarkEx'in sağladığı API'lere uyan bir uygulama için doğru çözüm olabilir. StarkNet, diğer protokollerle eş zamanlı etkileşim gerektiren veya StarkEx'in sunduklarının ötesine geçen ihtiyaçları olan bir protokol için daha uygun olabilir.

STARK'lar, uygulamaların Ethereum üzerinde nasıl inşa edilebileceği konusunda devrim yarattı. StarkEx ve StarkNet, daha önce uygulanamayan uygulamaları etkinleştirmeye ve blok zincirinde mümkün olanın sınırlarını zorlamaya devam edecek.

Bu makale,[Tim Gestson](https://twitter.com/IcemanTim)ve[StarkWare](https://starkware.co/)ekibi tarafından ortaklaşa yazılmıştır.