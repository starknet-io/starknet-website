### TL;DR

* StarkNet'i**kullanılabilirlik**oluşturmakla başlayıp ardından performansı**iyileştirmekle**ve son olarak**ademi merkeziyetçiliğe**geçerek adım adım inşa ediyoruz.
* İlk hedefimize ulaştık: kullanılabilirlik. Bu, genel hesaplamayı Ethereum benzeri bir durumda (mümkün olduğu düşünülenden yıllar önce) teslim ettiğimiz anlamına gelir.
* Şimdi 3 parçalı oluşturma planımızın 2. aşamasına geçiyoruz: performans, iş hacmine odaklanma, işlem maliyeti ve gecikme.
* Sıradaki: Ademi merkeziyetçilik

[StarkNet](https://starknet.io/)planlarının ilk duyurulmasından sadece bir yıl sonra, platform çok iyi bir işlevselliğe sahip. Geliştirici topluluğu, en çılgın beklentilerimizin ötesinde gelişiyor ve sürekli bir yeni L2 Native proje akışı sağlıyor.

Geçen yıla göre önceliğimiz, geliştiricilerin doğrudan dalmasına olanak tanıyan, hızla genişleyen bir özellik yelpazesine sahip çalışan bir StarkNet oluşturarak tam olarak bunu sağlamaktı.

Bunu çok sayıda yaptılar. İyi bir barometre, StarkNet</a>için

JavaScript kitaplığının indirme sayısıdır: 4 ay önce kullanıma sunulduğundan beri zaten 5 binde.</p> 

Yine de StarkNet, söz verdiğimiz sıkıştırma büyüsünü sunsa da, şu anda yeterli veri hacmine sahip yeterli sayıda dApp için bunu yapabilmekten çok uzak ve bu, kısa vadede geliştiriciler için bir hayal kırıklığı kaynağı olabilir.

Savaşta test edilmiş temel teknolojimiz olan, STARK tarafından birçok işlemi kanıtlayan ve kanıtları sıkıştıran, işlemlerin gruplanması veya sıralanmasından önce gelmelidir. Bu, StarkWare ekibinin[StarkEx](https://starkware.co/starkex/)ölçeklendirme motoru için zaten bir kez mükemmelleştirdiği bir süreçtir ve şu anda StarkNet'in ihtiyaçları için bunu tekrar yapmak için çalışıyoruz.

Artık kullanılabilirlik hedeflerimizin çoğuna ulaşıldığına göre, bunu birinci önceliğimiz yapmak için odağımızı değiştiriyoruz. Hepsi 3 aşamalı yol haritamızın bir parçası:**kullanılabilirlik**, ardından ağın**performansı**ve ardından**merkezi olmayan yönetim**. Bir yıl sonra, size kaputun altına bir göz atmak istiyoruz - hangi parçaların yerinde olduğuna ve hangilerinin hala devam etmekte olduğuna dair bir özet.



### Hikaye şimdiye kadar

StarkNet Alpha, Haziran ayında halka açık test ağında ve Kasım ayında Mainnet'te yayınlandı. Ana ağ konuşlandırılması sırasında, StarkNet zaten genel hesaplamayı Ethereum benzeri bir durumda sağlıyordu, ki bunun genellikle yıllar sonra olduğu düşünülüyordu.

Geliştirme boyunca, öncelikle en önemli işlevlere odaklanan ve bunları kullanılabilir olur olmaz yayınlayan, temel olarak evrim sürecini toplulukla paylaşan bir yaklaşım seçtik. StarkNet tam bir özellik olmaktan çok uzak ama geliştiriciler şimdiden anlamlı ve karmaşık uygulamalar oluşturabiliyor. Bugün, StarkNet ekosistemi için araçlar ve altyapı geliştiren StarkNet üzerinde inşa eden[geliştiricimiz,](https://starkware.notion.site/Projects-Building-on-StarkNet-a33dee55778a4515a9be9bdae02ee682)dApp'imiz ve bir düzineden fazla harici ekibimiz var.

Bir dizi yükseltme, L1<>L2 mesajlaşma, zincir üstü veriler ve birleştirilebilirlik desteği, etkinlik desteği, temel ücret mekanizması, sözleşmelerin yükseltilebilirliği, hesap soyutlama, test çerçevesi, geliştirici araçları, hızlı onay, blok numarası dahil olmak üzere birçok önemli özellik sunmuştur. , blok zaman damgası, hesap sözleşmeleri için destek.

Geliştirici topluluğu hem StarkNet ile derinden ilgileniyor hem de gelişimini şekillendiriyor. Zaten, geliştirici geri bildirimlerine dayalı olarak özellikler tanıtıldı. Benimseme, verimdeki artışı geride bırakabilir, bu nedenle bu artış şu anda bizim büyük önceliğimizdir.



### Sonraki adımlar

Artık kullanılabilirliğe ulaştığımıza göre, sistemin performansını artırmanın zamanı geldi. Sistem, mevcut durumunda, sınırlı işlem hacmini destekleyebilir. Bunu çözmenin yolu, StarkNet'in bir madenci eşdeğeri olan Sequencer Node'un performansını iyileştirmektir. İşlemleri gönderildikten sonra sıralayan "makine" dir. Bu optimize edildiğinde, verim fırlayacak.

Bu amaçla, darboğazların nerede olduğunu eş zamanlı olarak analiz ediyor ve bunları tek tek ele alıyoruz. Şu anda, tüm darboğazlar, biz STARK kanıtlayıcılarını çağırmadan önce gelen sıralama süreciyle ilgilidir. Savaşta test edilmiş ispat yığını, StarkNet'te StarkEx benzeri verimi desteklemeye hazır.

Sıralayıcının optimizasyonunun, 1/22 boyunca kademeli iyileştirmelerle birkaç ay süren bir süreç olmasını bekliyoruz. Amacımız, 2022'nin ikinci yarısının başlangıcına kadar, Ethereum'dan en az iki kat daha düşük bir maliyetle, Ethereum'dan en az bir kat daha yüksek TPS'ye ulaşmaktır. Ve bu sadece başlangıç.

Bu optimizasyon aşamasına ihtiyaç duyulmasının ve StarkNet'in kullanıma hazır optimize edilmiş bir sıralayıcı ile başlatılmamasının iyi bir nedeni var: StarkNet, avantajlı bir başlangıç yaptığımız için kullanılabilirliği çok hızlı bir şekilde elde edebildi. Sıfırdan başlayıp tamamen yeni bir sıralayıcı oluşturmak yerine, StarkEx'in toplu işleyicisini merkezi bir bileşen olarak kullandık.

Bu, inşa etmenin harika bir yoluydu. Sadece hızlı teslim olmadı; sağlam temeller üzerine inşa ettiğimizden emin olduğumuz anlamına geliyordu. StarkEx, kümülatif ticarette yüz milyarlarca doları çentiklediği için, StarkNet'i yönlendiren temel işlevselliği esasen savaşta test etti.

[StarkEx](https://starkware.co/starkex/)L2 kullanan en başarılı dApp'lerden bazıları için ölçeklendirme motorudur: dYdX (sürekli sözleşmeler), DeversiFi (spot ticaret ve ödemeler), ayrıca Immutable ve Sorare (NFT basım ve ticaret).

Ancak onlar ve diğer StarkEx müşterileri için oluşturulan sıralayıcı, StarkNet'i yalnızca şimdiye kadar götürebilir. Her biri, her gün genel olarak aynı türde işlemleri gerçekleştiriyor. StarkNet tamamen**genel hesaplama**ile ilgilidir, bu nedenle ihtiyaçları açık uçludur. Sıralayıcısı mempool'dan işlemler aldığında, bunlar çeşitli şekil ve boyutlarda gelir. Artı, StarkNet ayrıca açık bir ağdır, bu da StarkEx'te karşılaşılmayan ek hesaplama yükü olduğu anlamına gelir.

Mevcut zorluk, yani sıralayıcıyı bu yeni ihtiyaçlar için optimize etmek, önemli bir girişimdir, ancak başarılı StarkEx geliştirmemize dayanarak, ihtiyaç duyulan rota hakkında güçlü bir anlayışa sahibiz.



### Sıradaki: Ademi merkeziyetçilik

StarkNet, lider seçim ve yönetişim mekanizmalarıyla tamamlanan, tamamen merkezi olmayan, izinsiz bir ağ olacaktır. Verim hızla arttığında ve maliyet düştüğünde bunu başarmak ana odak noktamız olacak ve 2022'nin sonuna kadar ilk merkezi olmayan sürüme sahip olmayı umuyoruz. Önümüzdeki aylarda adem-i merkeziyet planımızı kamuoyuyla paylaşmayı planlıyoruz.

Mevcut sınırlı iş hacminin StarkNet'in gelişiminde bir ara aşamayı temsil etmesi gibi, StarkWare'in mevcut katılım düzeyi de geçicidir. Kendimizi yapım aşamasında önemli bir işlevi olan, ancak zamanla geri çekilen bir tür iskele olarak görüyoruz.

Ademi merkeziyetçiliğe doğru heyecan verici bir ilk adım olan tam düğüm geliştirme halihazırda devam ediyor. Tam düğümler, herkesin tam olarak ne olduğunu takip ederek ağın durumunu yerel olarak tutmasına ve doğrulamasına olanak tanır. Üç ekip -*Erigon, Nethermind ve Equilibrium*- tam düğümler geliştiriyor ve potansiyel olarak daha fazlası gelecekte geliştirmeye başlayacak.

Paralel bir geliştirmede, sıralama ve kanıtlama yazılımlarının halka açılması için hazırlıklar devam etmektedir. StarkNet'te herkes sıralayıcı veya kanıtlayıcı olarak katılabilir.

İnsanları dahil olmaya teşvik etmek için ekonomik ödülleri de içerecek bir yapı geliştirilecektir. StarkNet ücretleri kısmen sıralayıcılara ve doğrulayıcılara gidecek.

Orta vadede sıralayıcımızı üçüncü taraflara sunmayı umuyoruz ve uzun vadede çeşitli ekiplerin StarkNet için sıralama yapacak sıralayıcılar oluşturduğunu görmeyi bekliyoruz.



### Daima Gelişmek; Sonsuza Kadar Dinlemek

Odak bir sonraki mücadeleye kayarken, geçmiş başarıları geliştirmeye devam edeceğiz. Ve[StarkNet](https://starknet.io/)tüm alanlarında çalışmaya devam ederken kulaklarımız her zaman tüm geliştirici topluluğuna açık olacaktır. [Discord](https://discord.com/invite/uJ9HZTUk2Y),[StarkNet Shamans](https://www.google.com/search?client=safari&rls=en&q=StarkNet+Shamans&ie=UTF-8&oe=UTF-8)topluluğu,[Twitter](https://twitter.com/Starknet_Intern)veya başka bir yol aracılığıyla tartışmaya katılın ve blockchain ölçeklendirmesinin geleceğini şekillendirmeye yardımcı olun.