## TL;DR

* Starknet alpha v0.11.0 çıktı ve Testnet'te yayında
* Artık Starknet Testnet'te Kahire 1.0 sözleşmelerini dağıtabilir ve bunlarla etkileşim kurabilirsiniz!
* Starknet'te hesaplama 5 kat daha ucuz!
* İlk kez, Starknet alpha v0.11.0'a Mainnet yükseltmesi yönetim oylamasına sunulacak
* Bu,[Regenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)önceki geçiş döneminin başlangıcını işaret eder.
* Kahire 1.0 sözleşmelerinin Mainnet üzerinde dağıtılması, yalnızca yeni sistemin sorunsuz çalışmasını sağladığımızda, Testnet üzerinde birkaç hafta çalıştıktan sonra etkinleştirilecektir.

## giriiş

Merakla beklenen Starknet alpha v0.11.0'ın Testnet'te yayında olduğunu duyurmaktan heyecan duyuyoruz! Bu Starknet için neden büyük bir adım? Starknet v0.11.0'da[Kahire 1.0](https://medium.com/starkware/cairo-1-0-is-here-7e1ac8377038)akıllı sözleşme ilan edebilir, dağıtabilir ve çalıştırabilirsiniz. Ayrıca, mevcut sözleşmelerin Kahire 1.0 uygulamasına sorunsuz bir şekilde geçişine izin veren yeni bir sistem çağrısı sunuyoruz.

Kahire 1.0, Starknet'i iki farklı açıdan geliştirir. İlk olarak, Kahire'ye (diğer şeylerin yanı sıra) türleri/jenerikleri/özellikleri/hata işlemeyi tanıtan daha zengin bir programlama dili sunarak geliştirme deneyimini geliştirir. İkincisi, Kahire 1.0, Starknet'in ademi merkeziyetçilik yolculuğunda kilit bir rol oynuyor: Starknet alpha v0.11.0 derlemesinde Sierra'ya gönderilen Kahire 1.0 sözleşmeleri. Sierra, merkezi olmayan bir Starknet'te çok önemli bir özellik olan her sözleşme uygulamasının kanıtlanabilir olduğunu garanti eder.

Bu sürümde gelen bir diğer önemli gelişme, hesaplama için maliyetin 5 kat düşürülmesidir. Bu, Starknet'i hesaplama açısından yoğun uygulamalar için daha da kolay hale getirecek. Daha fazla detay aşağıda.

## Yenilenmeye Hazırlanmak

Starknet alpha v0.11.0, Starknet'in Yenilenmesinden önce hazırlığa izin verecek olan Geçiş döneminin başlangıcını işaret ediyor. Starknet'in Regenesis planı birkaç ay önce yayınlandı[ve Kahire 0 tabanlı bir sistemden Kahire](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)tabanlı bir sisteme geçişe odaklanıyor.

Geçiş döneminde, mevcut Kahire 0 sözleşmeleri (yükseltilebilirlerse) adreslerini ve depolama alanlarını koruma ve uygulamalarını Kahire 1.0'a sorunsuz bir şekilde geçirme fırsatına sahiptir (sonraki bölüme bakın).

Bir Starknet kullanıcısı olarak bu, cüzdanınızı yalnızca hesabınızın yeni Kahire 1.0 uygulaması yayınlandıktan sonra yükseltmeniz gerektiği anlamına gelir (bunu Regenesis'in kendisine kadar istediğiniz zaman yapabilirsiniz). Herhangi bir kesinti beklenmiyor, sistemdeki tüm dapp'ler her zamanki gibi çalışmaya devam edecek.

Regenesis'ten sonra, Starknet sistem genelinde kalan Kahire 0 sözleşmelerini desteklemeyi bırakacaktır. Bu önceden iyi bir şekilde iletilecek ve geliştiricilere sözleşmelerini taşımaları için yeterli zaman verilecektir. Geçiş döneminin birkaç ay sürmesi bekleniyor ve DApp geliştiricileri şimdiden uygulamalarını Kahire 1.0'a taşımaya başlayabilirler. Geçiş döneminin sonunda, Yenilenme gerçekleşecektir.

## Kahire 1.0'a Sorunsuz Geçiş

Kahire 1.0'a geçişle birlikte mevcut Kahire 0 sözleşmeleri kullanımdan kaldırıldı ve Regenesis'te artık desteklenmeyecek. Yükseltilebilir Kahire 0 sözleşmelerinin Yeniden Doğuştan sonra bile çalışmaya devam etmesine izin vermek ve durumu o zamana kadar kurulu halde tutmak için yeni bir sistem çağrısı ekledik — ['replace_class'](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#replace_class_syscall). Yükseltilebilir sözleşmelerin Kahire 1.0 uygulamasına yükseltmeyle ilgili bir sorunu yoktur, ancak temel proxy (gerçek durumu tutan sözleşme) yine de Kahire 0 uygulamasında sıkışıp kalacaktır. \`replace_class\` sistem çağrısı, proxy sözleşmesinin temeldeki sınıfı değiştirmesine izin vererek bu sorunu çözer, yani aynı adres ve depolamayı korurken uygulamayı değiştirir.

## Hesaplama Artık 5 Kat Daha Ucuz!

Bugün, Starknet işlem ücretlerinin iki ana bileşeni vardır: Hesaplama ve zincir üstü veriler. Starknet işlem ücretinin hesaplama unsuru, L1'deki kanıtını doğrulamanın marjinal maliyeti tarafından belirlenir (daha fazla ayrıntı için[belge](https://docs.starknet.io/documentation/architecture_and_concepts/Fees/fee-mechanism/)bakın).

Başlangıçta, doğrulama için 5m gaz gerektiren bir kanıtta 200m Kahire adımlarımız, Kahire adımı başına 0,05 gaz gibi saf bir tahmine yol açtı. O zamandan beri, L1 doğrulama maliyetinde önemli bir azalmaya izin veren[özyinelemeli kanıta](https://medium.com/starkware/recursive-starks-78f8dd401025)geçtik (yalnızca bir özyineleme ağacının kökü L1'e ulaşır). Şimdi orijinal tahminlerimizi buna göre güncelleme zamanı — L2'deki her Kahire adımının fiyatı 5 kat azaltılacak ve şimdi 0,01 gaza mal olacak.

Bu maliyet düşüşü, yerel olmayan imzalara sahip hesap sözleşmeleri gibi hesaplama açısından yoğun uygulamalar için önemlidir. Basit işlemlerde küçük bir maliyet düşüşü (~ %5) görülecektir. Gelecek sürümlerde, ikinci bileşeni ele alacağız: zincir üstü veri maliyetleri. Zincir üstü verilere alternatifler Starknet'e (diğer adıyla Volition) sunulduğunda, maliyet düşüşü her yerde hissedilecektir.

## Starknet Yönetişimi İlk Oylama

Starknet Yönetişiminin ilk aşaması başladı (daha fazla ayrıntı[burada](https://medium.com/starknet-foundation/starknets-governance-first-phase-4614c7566f40)). Topluluk üyeleri artık ek bir kanal aracılığıyla Starknet'i şekillendirmeye, yani protokol değişiklikleri üzerinde oylamaya katılabilirler.

Starknet Yönetişiminin ilk aşamaları, Starknet protokol yükseltmelerine odaklanacak. Her Starknet sürüm yükseltmesi, önce Testnet'te konuşlandırılacaktır; seçmenlerin, Goerli'de çalışırken yükseltilmiş sürümü incelemek ve test etmek için 6 günlük bir süresi olacak. Bu süre zarfında, bir Anlık Görüntü teklifi açılır ve topluluk, Mainnet dağıtımı için yeni sürümün onaylanıp onaylanmayacağını oylayabilir.

Teklif, 6 günlük oylama döneminde 'EVET' oylarının çoğunluğunu alırsa, teklif geçer ve Starknet Mainnet buna göre yükseltilir.

Starknet alpha v0.11.0, oylamaya sunulan ilk Starknet sürümüdür. Starknet alpha v0.11.0 oylaması, Testnet dağıtımından itibaren altı gün boyunca açık olacaktır.

İlgili bağlantılar:

* [Anlık görüntü alanı](https://snapshot.org/#/starknet.eth/proposal/0x00889bc468509610e516e8602f00b21ca8c32466dd4f0140eca38becb7f40bef)
* [Temsilci bulma sayfası](https://delegate.starknet.io/)
* [Topluluk forumu](https://community.starknet.io/t/proposal-starknet-alpha-v0-11-0/50334)Starknet alpha v0.11.0 tartışma dizisi

## Kahire 1.0 ve Sierra

Sierra (**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**tion), Kahire meclisine (CASM) derlenen bir ara temsildir. Starknet alpha v0.11.0 öncesi, bir geliştirici Kahire 0'ı CASM'de derler ve sonucu Starknet sıralayıcıya gönderirdi. Cairo 1.0 ile, geliştiriciler kodlarını Sierra'ya derler ve bu ara gösterimi sıralayıcıya gönderir. Sıralayıcı daha sonra onu CASM'ye derleyecektir. Sierra'nın "güvenli CASM"ye, yani CASM'nin başarısız olamayacak bir alt kümesine derlemesi garanti edilir ve her yürütme kanıtlanabilir hale gelir. Bu, sıralayıcının DOS'tan koruyarak geri alınan işlemler için bile ücret talep edebileceğini garanti eder. Daha fazla bilgi için bkz.[belgeler](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/).

![](https://miro.medium.com/v2/resize:fit:1400/0*KsAwaJTIsOuCsJIe)

Starknet alpha 0.11.0,[Kahire 1.0-alpha.6 sürüm](https://github.com/starkware-libs/cairo/releases/tag/v1.0.0-alpha.6)kullanacak. Bu sürüm, tüm Starknet sistem çağrıları zaten mevcutken, Kahire 0 ile[özellik paritesi](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)yakındır.

Starknet sıralayıcının sabit bir derleyici sürümü kullandığını unutmayın; bu, dil iyileştirmelerinin Starknet'te hemen mevcut olmayabileceği ve yalnızca bir Starknet sürüm güncellemesinden sonra mevcut olacağı anlamına gelir. Spesifik olarak, Kahire 1.0 → Sierra derlemesini etkileyen iyileştirmeler hemen yürürlüğe girebilse de, Sierra → CASM derleyicisindeki değişikliklerin (daha fazla ayrıntı için[docs](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/)bakın) bir Starknet yükseltmesini beklemesi gerekecektir.

## Başka yeni ne var?

### Yeni İşlem Türü — v2'yi Bildir

Kahire 1.0 sınıflarını bildirmek için[yeni bir işlem türü](https://docs.starknet.io/documentation/architecture_and_concepts/Blocks/transactions/#declare_v2_cairo_1_0)ekliyoruz.

Bu yeni \`beyan\` işlem sürümü, iki önemli farkla mevcut \`beyan\` işlemine benzer:

* Gönderilen sınıf nesnesi artık CASM yerine Sierra'yı temsil ediyor, yani sınıfın semantiği Sierra temsili tarafından tanımlanıyor.
* Kullanıcı ayrıca derlenmiş sınıf karmasını da imzalıyor. Bu, Sierra→CASM derlemesinin Starknet İşletim Sisteminin bir parçası olduğu kanıtlanana kadar çok önemli bir adımdır.

Daha fazla ayrıntı için bkz.[belgeler](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#what_to_expect).

Geliştiricinin bakış açısından, deneyim aynı kalır. Cairo 1.0 kodunuzu yazdıktan sonra, sınıfı bildirmek için CLI'yi kullanabilirsiniz.

**Başlangıçta, Starknet Mainnet'te \`v2 beyanı\` işlemlerinin kabul edilmeyeceğini unutmayın. Testnet üzerinde bir süre deneme yaptıktan sonra Mainnet üzerinde yeni işlem türü etkinleştirilecek ve Kahire 1.0 sınıfları kullanıma sunulacaktır.**

### Poseidon Burada

[Poseidon](https://www.poseidon-hash.info/)çok verimli cebirsel devrelere sahip olmak için tasarlanmış bir sağlama fonksiyonları ailesidir. Bu nedenle, STARK'lar ve SNARK'lar gibi ZK kanıtlama sistemlerinde çok faydalı olabilirler. Starknet alpha v0.11.0'dan itibaren, geliştiriciler Poseidon'u kullanabilecekler. Ek olarak, Starknet protokolünün parçası olan bazı karma hesaplamalar Poseidon'a geçiş yapacaktır (özellikle, sınıf karma, derlenmiş sınıf karma ve durum taahhüdünün bazı bölümleri Poseidon'u kullanacaktır, daha fazla ayrıntı için[belgeler](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#poseidon_hash)bakın). Gelecekte, daha fazla dahili bileşen Poseidon hash işlevini kullanmaya geçiş yapacaktır.

Starknet'te kullanılan tam sürüm ve parametreler[burada bulunabilir](https://docs.starknet.io/documentation/architecture_and_concepts/Hashing/hash-functions/#poseidon_hash).

### Çeşitli değişiklikler

Önceki Starknet sürümlerinde olduğu gibi, bir yükseltmenin de API'lerimiz ve diğer düşük seviyeli bileşenlerimiz üzerinde etkileri vardır. Aşağıda bunları listeliyoruz ve yapılan belirli değişiklikleri ele alıyoruz:

* v0 çağırma/bildirme işlemleri artık desteklenmiyor
* L1→L2 mesajları artık[ücret gerektiriyor](https://docs.starknet.io/documentation/architecture_and_concepts/L1-L2_Communication/messaging-mechanism/#l1-l2_message_fees). Yani sıfır ücretle gönderilen mesajlar Starknet sıralayıcı tarafından işlenmeyecektir.
* Zincir üstü veri formatı[değiştirildi](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/#on_chain_data_post_v0_11_0)
* [API değişiklikleri](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#api_changes)(tüm değişiklikler burada listelenmemiştir, lütfen kapsamlı bir liste için belgelere bakın):
* yeni bir \`get_compiled_class_by_class_hash\` bitiş noktası ekledi
* \`get_class_by_hash\` Kahire 0 / Kahire 1.0 sınıflarının ikisini de döndürür (istenen karmaya bağlı olarak)
* \`get_state_update\`, değiştirilen sınıflar için yeni bir bölüme sahiptir ve bildirimler Kahire 0 ile Kahire 1 sınıfları arasında bölünmüştür.
* \`estimate_fee\` ve \`simulate_tx\` artık doğrulamayı atlayabilir
* [yeni](https://github.com/starkware-libs/starknet-specs/releases/tag/v0.3.0-rc1)Starknet JSON-RPC sürümü

## Sırada ne var?

Artık Kahire 1.0 ile ilgili tüm altyapı uygulamaya konduğuna göre şunları bekleyebilirsiniz:

* Kahire 1.0'da daha fazla dil geliştirmesi
* Performans iyileştirmeleri:[söz verildiği gibi](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de), TPS'yi önemli ölçüde artırma yolunda ilerlemeye devam ediyoruz. Yol haritasındaki bir sonraki adım, Apache 2.0 lisansı altında açıkta geliştirilen[Rust sıralayıcıya](https://github.com/starkware-libs/blockifier)geçiş yapmaktır. Yeni sıralayıcı, Performance Trio'yu oluşturan[paslı CairoVM](https://github.com/lambdaclass/cairo-rs)ve[Papyrus](https://github.com/starkware-libs/papyrus)tam düğümünü kullanacak.
* Zincir dışı[DA](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/)! Bu versiyonda, işlem maliyetinin hesaplama bileşenini ele aldık. Gelecek sürümlerde, bugün ortalama işlemler için baskın maliyet olan on-chain veri maliyetlerini ele alacağız.

![](/assets/starknet-alpha-v0.11.0-diagram.png)