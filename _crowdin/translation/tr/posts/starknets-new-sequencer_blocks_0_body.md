### TL;DR

* Yeni bir StarkNet sıralayıcı geliştiriliyor
* Apache 2.0 lisansı altında açık kaynaklıdır.
* İlk hedefi, StarkNet'in verimini artırmaktır.

### Parlak yeni sıralayıcı

Yeni bir StarkNet Sequencer'ın yapım aşamasında olduğunu duyurmaktan mutluluk duyuyoruz. StarkNet'in teknoloji yığını açık kaynağa doğru ilerlerken,[Kahire 1.0](https://medium.com/starkware/open-sourcing-cairo-1-0-b3100a664bb0)ve[Papirüs Tam Düğüm](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202)ardından, şimdi de StarkNet'in yeni sıralayıcısı ile devam ediyoruz. Açık kaynak olacak, Apache 2.0 lisansı altında mevcut olacak ve şimdi[repo](https://github.com/starkware-libs/blockifier)göz atabilirsiniz!

Yeni bir Sıralayıcı oluşturmak, birkaç ay önce sunduğumuz[StarkNet Yol Haritası](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de)bir parçasıdır. Yeni sıralayıcının uygulanması, blok yürütmeyi gerçekleştiren sıralayıcı içindeki modül olan**Blockifier**değiştirilmesiyle başlayacaktır. Yol haritasında açıklandığı gibi, StarkNet'in performansına fayda sağlaması bekleniyor.

Bu sıralayıcıyı oluşturma yaklaşımımız, StarkNet Alpha'da bize rehberlik eden yaklaşımla aynıdır. Sıralayıcı**, aşama**uygulanacaktır ve bugün onun ilk modülünü paylaşıyoruz. Zamanla, sıralayıcının yeni bileşenleri tamamlanacak ve sonunda Rust tabanlı bir sıralayıcı mevcut Python tabanlı sıralayıcının tamamen yerini alacak.

### Sıralayıcı ne yapar?

StarkNet'te, kullanıcılar işlemleri gönderdikten sonra, işlemin STARK ölçeklendirmesine giden yolculuğundaki ilk durak sıralayıcılardır. StarkNet protokolünde sıralayıcılar, işlemlerin sıralanmasından ve blokların üretilmesinden sorumludur. Blok bir sıralayıcı tarafından oluşturulduktan ve mutabakat protokolü tarafından onaylandıktan sonra, kanıtlayıcılar devralır ve L1 için bir kanıt oluşturur.

![](/assets/1_ndrekwqunjixo_wskdeycw-1.png)

### Açık Kaynak Kullanımı

StarkNet Alpha, Kasım 2021'de Mainnet'te kullanıma sunuldu. En başından beri, STARK ölçeklemenin gücünü dünya ile paylaşmaya kararlıydı.

Bugün, yeni açık kaynak sıralayıcının bir dizi modülünün ilkini yayınlıyoruz. Tüm modüllerin ve alt modüllerin konuşlandırılması birkaç ay alacaktır. Her şeyi açık kaynak yapmak, topluluk üyelerinin geliştirmeye katkıda bulunmasını ve kod tabanını denetlemesini sağlayacaktır.

Bu, StarkNet'i merkezi olmayan izinsiz sıralama noktasına yaklaştıracaktır. Şimdi StarkNet'in merkezi olmayan protokolünü tasarlıyoruz ve topluluğu[araştırma ve tartışmaya](https://community.starknet.io/t/starknet-decentralized-protocol-consensus/5386)katılmaya teşvik ediyoruz.

### Verim

StarkNet'in orijinal sıralayıcısı, büyük ölçüde StarkEx altyapısının bir uyarlamasıdır. Şimdi, özellikle merkezi olmayan, yüksek performanslı bir ağın gereksinimleri için oluşturulmuş bir altyapıya ihtiyaç var.

Rust'ta yerleşik olan yeni sıralayıcı, performans göz önünde bulundurularak tasarlanmış ve geliştirilmiştir. Yeni sıralayıcı ayrıca sağlam temeller üzerine kuruludur: Papyrus, yeni[StarkNet tam düğümü,](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202)devlet yönetimini yönetecek ve LambdaClass'ın yeni Kahire-VM'si olan cairo-rs, Kahire yürütmesini hızlandıracak. Yeni sıralayıcının mevcut sıralayıcıyı her açıdan geliştirmesini bekliyoruz. Bu sıralayıcının StarkNet'e entegrasyonuyla ağın veriminin ve gecikmesinin önemli ölçüde artması bekleniyor.

Ayrıca diğer altyapı ve geliştirme araçlarının da geliştirme deneyimini iyileştirmek için yeni sıralayıcıyı kullanabilmesini bekliyoruz. Tüm test çerçevelerinin yanı sıra tam düğüm performansının da gelişmesi bekleniyor.

### Özet

Bugün yeni açık kaynak sıralayıcıyı duyurmaktan heyecan duyuyoruz. İlk modülü, topluluğun incelemesi için hazır ve önümüzdeki aylarda daha fazla modülle devam edecek. Ayrıca StarkNet'in performansını artırmaya yönelik yol haritamızda bir adım daha atmaktan mutluluk duyuyoruz. Ağı daha verimli ve erişilebilir hale getirmeyi hedefliyoruz ve bu yolculukta bize katılan herkesin desteğini takdir ediyoruz.