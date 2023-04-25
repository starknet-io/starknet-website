Önceki[yazımız](https://medium.com/@starkware/part-1-starknet-sovereignty-a-decentralization-proposal-bca3e98a01ef), StarkNet'in ne olduğunu, nasıl kademeli olarak merkezsizleştirildiğini açıkladı ve iki merkeziyetçilikten uzaklaştırma mekanizmasının bir özetini sağladı. Bu gönderi, StarkNet ademi merkeziyet süreci, StarkNet Foundation'ın rolü ve StarkNet için yeni bir yerel token ihtiyacını tartışıyor. Son olarak, StarkNet'in gelecekte yönetişimi için ek hususları tartışıyor.

### Ademi merkeziyetçilik ilkeleri

[STARK](https://eprint.iacr.org/2018/046.pdf)teknolojisi olgun ve güvenlidir, ancak şimdiye kadar esas olarak Ethereum üzerinde merkezi bir hizmet ([StarkEx](https://starkware.co/starkex/)) ve merkezi olmayan bir hizmetin Alfa sürümü ([StarkNet](https://starkware.co/starknet/)) olarak uygulanmış ve kullanılmıştır. StarkNet, Ethereum veya İnternet gibi gerçekten izinsiz bir kamu malı olarak mevcut olmalıdır. Bu nedenle, değişime rehberlik etmek için StarkNet'in ademi merkeziyetçiliğini ve aşağıdaki dört ilkeyi ilerletmeyi taahhüt ediyoruz:

**Canlılık.**StarkNet, operatörü olarak tek bir şirkete güvenmeyecektir. Şirketler var olmaya son verebilir veya ağa hizmet vermeyi durdurmaya karar verebilir. Ademi merkeziyetçilikten sonra, bu tür senaryolar StarkNet'i çökertmeyecektir.

**Sansür direnci.**Tek bir şirket, diğerlerini yerine getirirken belirli işlemleri ve akıllı sözleşmeleri sansürlemeye teorik olarak karar verebilir veya buna zorlanabilir. StarkNet, böyle bir senaryoya karşı korunmak için merkezi olmayan bir model kullanacaktır.

**Şeffaflık.**Yazılım yükseltmeleri ve bakımı, herhangi bir merkezi olmayan hizmetin kaçınılmaz bir parçasıdır. Bu tür eylemler şeffaf bir şekilde tartışılmalıdır, böylece topluluk bilgilendirilir ve teknoloji üzerinde kontrol sahibi olur. Daha geniş StarkNet kullanıcıları, operatörleri ve geliştiricileri topluluğu, yükseltmeleri ve bakımı şeffaf, adil, katılımcı ve kapsayıcı bir süreç aracılığıyla belirlemek için birlikte çalışmalıdır.

**Yaratıcılık.**StarkNet, tekelleşmeyi önlemek ve geniş ölçekte blokaj zincirlerinin yaratıcı ve sosyal açıdan faydalı kullanımlarını artırmak için herhangi bir geliştiricinin çekirdek altyapısını ve uygulamalarını oluşturmaya katılmasına izin vermelidir.

Ademi merkeziyetçilik, aceleyle yaklaşılmaması gereken zor bir sorundur. StarkNet'in burada paylaşılan yönetişim önerisi büyük olasılıkla zaman içinde gelişecek ve değişecektir. Aşağıdakiler yalnızca ilk yinelemesidir.

### Vakıf

Vakıf, misyon odaklı, kar amacı gütmeyen bir kuruluş olacak ve StarkNet Jetonları verilecek (bkz.[sonraki gönderi](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6)). Vakfın misyonunun StarkNet'i bir kamu malı olarak sürdürmek olacağını tahmin ediyoruz. StarkNet, herkes tarafından kullanılabilir olması gereken izinsiz bir altyapıdır. Kamu kullanımı için güvenli ve verimli olması için iyi muhafaza edilmelidir. Ayrıca kullanıcıları, operatörleri ve geliştiricileri arasında ayrım yapmamalıdır. Vakıf, yukarıda özetlenen ademi merkeziyetçilik hedeflerini ilerletmeye kendini adamıştır: canlılık, sansüre karşı direnç, şeffaflık ve yaratıcılık.

StarkNet'in canlılığı ve sansüre karşı direnci en iyi şekilde, STARK ile sıkıştırılmış işlemleri sıralamak ve kanıtlamak için bir hisse kanıtı lideri seçimi aracılığıyla izinsiz ve merkezi olmayan fikir birliği ile elde edilir. Bu mekanizma otomatik olsa da, ağdaki düğümler tarafından yürütülen iyi işleyen protokol yazılımına ve temeldeki Ethereum blok zincirinin geçerliliğine ve devam eden canlılığına dayanır. Bu nedenle Vakıf, özellikle hata düzeltmeleri ve verimlilik iyileştirmeleri ile ilgili olduğu için, bu protokol yazılımının devam eden gelişimi, belgelenmesi ve yayınlanması için bir kaynak görevi görecektir.

Rutin bakımın ötesinde, özellik değişiklikleri veya protokoldeki diğer daha temel yükseltmeler hakkında topluluk içinde hararetli tartışmalar olmasını bekliyoruz. Bu, izinsiz sistemlerde kaçınılmazdır, tarihsel olarak Bitcoin'in blok boyutu tartışması, Ethereum'un hisse kanıtı birleştirme ve kripto para birimi ekosistemindeki diğer birçok örnekle kanıtlandığı gibi. Bu yazılım geliştirme kararları, yalnızca nesnel matematik ve verimlilik kazanımlarından daha fazlasıdır, bunun yerine öznel değer yargılarını ve özellik değiş tokuşlarını içerir. Birçok blockchain topluluğunda bu kararlar, herhangi bir açık tartışma kuralı veya karar verme süreci olmaksızın gayrı resmi olarak alınır. Kararsızlık bile statükoyu destekleyen bir karardır. Bu sorunlardan kaçınmak için Vakfın misyonu, temel teknolojik soruları çözmek için topluluk karar verme süreçlerini geliştirmeyi, test etmeyi ve uygulamayı da içerecektir. Bu mekanizma, protokol güncellemeleri, uyuşmazlık çözümü ve kamu malları finansmanı konusundaki müzakerelerin merkezinde yer alacaktır. Vakıf, bu kararları almak için gerekli bilgileri dağıtarak şeffaflığı teşvik edecek ve gelecekte başvurmak üzere bu tür bilgilerin bir arşivini tutacaktır.

### Neden jeton?

StarkNet her zaman topluluk tarafından yürütülen bir protokol olarak tasavvur edilmiştir, ancak bu topluluğu tam olarak kimin oluşturduğunu tanımlamanın net bir yolu olmamıştır. *Belirteç, ekosistemin başarısına katkıda bulunan çalışmaları gerçekleştiren topluluğun destekçilerinin o ekosistemin yönetiminde rol oynamasına izin verecektir.*

Ek olarak, adil, açık ve sansüre dayanıklı bir hizmet, yalnızca birkaç tarafın merkezi olmayan hizmete güç veren işi yapmak için rekabet etmesi durumunda mümkündür ve bu, yalnızca bu çalışanlara ağın operatörleri olarak rolleri için ödeme yapılması durumunda garanti edilebilir. .

Bu nedenle, StarkNet gibi bir ağ teknolojisinin parçası olarak belirteçleri dahil etmek gereklidir. Ve ödeme sansürüne karşı direnç, örneğin Bitcoin veya Ether (ETH) gibi yerel olmayan mevcut bir token kullanılarak elde edilebilse de, böyle bir yaklaşımın ağ kullanıcılarına ayrı bir topluluk ve ses sağlamak için zamanla başarısız olacağına inanıyoruz. kararlar.

Ağı geliştiren topluluk üyelerini ödüllendiren yerel bir belirteç, ekosistemi, yerel olmayan bir belirteç kullanımının yapmayacağı bir dereceye kadar ilerletecektir. Ayrıca, belirteç yerel değilse, diğer ekosistemlerde alınan kararlardan kaynaklanan ekonomik şoklar, StarkNet'in hizmetini ve kullanıcılarını ve sağlayıcılarını etkileyebilir.

### Jeton ne için kullanılacak?

Belirteç, ağı işletmek (ücretler), ağı korumak ve güvence altına almak (uzlaşma katılımı) ve değerlerine ve stratejik hedeflerine (yönetişim) karar vermek için mekanizma olacaktır.

**İşlem ücretleri:**Şu anda StarkNet'teki ücretler Ether (ETH) cinsinden ödenmektedir. Ancak daha sonra, ücretlerin yalnızca yerel StarkNet Token ile ödeneceğini tahmin ediyoruz. İyi bir kullanıcı deneyimini desteklemek için, otomatikleştirilmiş ve merkezi olmayan zincir üstü mekanizmalar, kullanıcıların ETH'de ücret ödemesine izin verecektir.

**Staking:**StarkNet'in canlılığı ve güvenliği için kritik olan belirli hizmetler, StarkNet Tokenlarının stake edilmesini gerektirebilir. Bu hizmetler, birkaç örnek vermek gerekirse sıralama, L1 kesinliğine ulaşılmadan önce geçici L2 mutabakatına ulaşma, STARK kanıtlama hizmetleri ve veri kullanılabilirliği provizyonunu içerebilir. Bu hizmetlerin 2023'te yerelleştirilmesini bekliyoruz.

**Yönetişim:**StarkNet'i geliştirmeye yönelik öneriler, daha sonra tanımlanacak olan minimum bir simge destek eşiği gerektirecektir. StarkNet'in canlılığı, güvenliği ve bakımı için gerekli olan protokoldeki tüm değişiklikler için doğrudan veya delegasyon yoluyla oylama gerekli olacaktır. Örneğin, StarkNet İşletim Sistemindeki tüm büyük güncellemeler, belirteç sahiplerinin onayını gerektirecektir.

### Yönetişim üzerine kapanış düşünceleri

Merkezi olmayan yönetişim mekanizmaları henüz emekleme aşamasında ve bu alandaki hiçbir proje bize emülasyon için ikna edici bir model sağlamadı. Tüm token sahipleri tarafından düzenli ve doğrudan oylama en iyi yol mu? Bunu teknolojik bir mekanizma olarak tasarlamak nispeten basittir, ancak hantal olabilir ve ağı aktif olarak kullanan kişiler yerine çok sayıda token sahibine haksız yere ayrıcalık sağlayabilir.

En iyi yaklaşımı düşünürken, yetkilerini StarkNet Token sahipleri topluluğundan alan birkaç ayrı yapı arasındaki kontrol ve dengeleri dikkate almanızı öneririz.

Ayrıca StarkNet Token sahiplerinin temel geliştiricilerin uzmanlığından iyi bir şekilde yararlanmalarını tavsiye ediyoruz. Tüm blockchain ekosistemlerinde, çekirdek geliştiriciler, temeldeki teknolojiyi güvence altına alma, sürdürme ve ilerletmede merkezi bir rol oynar. Bu nedenle, yönetişim sürecinde onlar için resmi bir rol tanımlamak dikkate değerdir.

Bu dizideki[üçüncü yazı](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6), StarkNet Token'ın tasarımını açıklar: anahtar token tasarım hususları ve jeton tahsisinin farklı aşamaları.