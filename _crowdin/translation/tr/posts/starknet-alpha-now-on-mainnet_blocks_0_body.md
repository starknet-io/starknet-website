### TL;DR

* Alpha Mainnet'te yayında
* Genel hesaplama ve şekillendirilebilirliği destekler
* Hızla büyüyen topluluk, gelişen araçlar ve uygulamalar
* Önümüzdeki haftalarda sürekli olarak kullanıma sunulacak ek özellikler
* Feragatname: Bu bir Alfa sürümüdür (aşağıdaki ince yazıları okuyun)

### giriiş

StarkNet Alpha bugün Ethereum Mainnet'te başlıyor!

StarkNet, Ethereum üzerinden bir L2 ağı olarak çalışan izinsiz merkezi olmayan bir Toplamadır. StarkNet, en güvenli ve en ölçeklenebilir kriptografik kanıt sistemi olan[STARK](https://starkware.co/stark/)bağlılığı sayesinde, Ethereum'un şekillendirilebilirliğinden ve güvenliğinden ödün vermeden herhangi bir dApp'in hesaplaması için sınırsız ölçek elde etmesine izin verir. StarkNet, Ethereum üzerinde ilk üretim sınıfı Turing eksiksiz von-Neumann doğrulayıcısı olan[Kahire](https://starkware.co/cairo/)programlama dili üzerine inşa edilmiştir. Hem Cairo hem de STARK, StarkWare tarafından kurum içinde geliştirildi ve 2020 Yazından bu yana 50 milyon txs ve 250 milyar doları aşan tüm üretim sınıfı uygulamalarımıza güç sağladı.

Diğer özelliklerin yanı sıra, StarkNet Alpha, hem diğer StarkNet sözleşmeleriyle hem de L1 sözleşmeleriyle L1<>L2 mesajlaşması yoluyla birleştirilebilirliği destekleyen genel hesaplama akıllı sözleşmelerine olanak tanır. StarkNet Alpha, Toplama modunda çalışır, yani tüm durum farkı verileri zincir üzerinde gönderilir.

Ocak ayında, StarkNet[yol haritasını](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)paylaşmıştık. Haziran ayında, StarkNet Alpha halka açık bir test ağında yayına girdi ve sürekli olarak yeni özelliklerle güncellendi. Kısmen, üretim sınıfı savaşta sertleştirilmiş STARK/Kahire yazılım yığınımıza olan güvenimiz sayesinde, programın ilerisinde olmaktan mutluluk duyuyoruz.

### StarkNet Alpha'ya Nasıl Davranmalısınız?

İlk olarak, büyük bir dikkatle, çünkü “Alpha” etiketinin orada olmasının bir nedeni var. Değişikliklerin, düzeltmelerin ve iyileştirmelerin gelmesini bekleyin. StarkNet Alpha henüz denetlenecek ve ağ biraz daha olgunlaşana kadar böyle bir denetimi erteleyebiliriz (daha fazla bilgi için bu yazının sonundaki feragatnameyi okuyun).

Genel olarak, İyimser Toplama meslektaşlarımız tarafından tanımlanan Tahkim ve İyimserlik adlı temkinli ve mantıklı yolu izliyoruz: ağı tek bir sıralayıcı ile başlatın ve geliştiricilerinin ilgili riskleri anlamasını sağlamak için uygulamaları beyaz listeye alın. StarkNet'in tamamen ademi merkezileştirilmesine tamamen bağlı kalmaya devam ediyoruz.

Ve StarkNet Alpha'nın ekonomisini nasıl ele almalısınız? Alpha, işlem ücreti ödemeden başlayacak. Sadece birkaç hafta sonra yapılacak bir sonraki yükseltme, bir ücret mekanizması getirecek - daha fazla ayrıntıyı ayrı bir gönderide paylaşacağız.

### İnşaata Başlayın

(Yeni!) [web sitesi](http://starknet.io/)veya doğrudan[öğretici](https://starknet.io/docs/)atlama.

Dağıtmaya hazırsanız, lütfen bu[katılım sürecini](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu)takip edin; tüm geliştiricilerin sistemin başlangıç durumundan haberdar olmasını sağlamak için oluşturulmuştur.

### Ekosistem

Geçtiğimiz birkaç ayda,[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)toplanan StarkNet topluluğunun boyutunda ve etkinliğinde inanılmaz bir büyüme gördük. Blok zinciri ekosistemindeki düzinelerce geliştirici - ekipler ve bireyler - bu çabaya katkıda bulunuyor. (Bu yazının sonundaki feragatnameye bakın)

#### Geliştirici Araçları

* OpenZeppelin standart sözleşmeleri tanımlamaktadır. [repo](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)ve[tartışmaları](https://github.com/OpenZeppelin/cairo-contracts/discussions)takip etmeye değer
* Nethermind tarafından geliştirilen[Warp](https://github.com/NethermindEth/warp)Solidity–>Kahire aktarıcı
* Shard Labs'[HardHat eklentisi](https://github.com/Shard-Labs/starknet-hardhat-plugin)ve[StarkNet Devnet](https://github.com/Shard-Labs/starknet-devnet)
* Argent, yaratıcısı[Sean Han](https://twitter.com/seanjameshan)ile birlikte StarkNet.js üzerindeki ortak çalışması da dahil olmak üzere araçları geliştiriyor

#### altyapı

**Blok gezgini**:

* [Nethermind'in Voyager](http://voyager.online/)projesi
* [Eth.tx](https://ethtx.info/)destek analizi ve StarkNet işlemlerinin ayrıntılı bir görünümünü sunacak

**Tam düğümler**: iki çalışma devam ediyor: biri Erigon liderliğindeki Fermion projesi, diğeri Equilibrium liderliğindeki[Pathfinder](https://github.com/eqlabs/pathfinder)projesi

**Cüzdan**:

* [ArgentX](https://github.com/argentlabs/argent-x), Argent tarafından geliştirilmiş bir tarayıcı uzantısıdır ve halihazırda geliştiriciler tarafından kullanılabilir
* Torus anahtar yönetimi çözümü StarkNet için hazır
* Ledger, yerel bir StarkNet uygulaması geliştiriyor; yıl sonuna kadar hizmete sunulacak

**Kahire Denetimleri**: ConsenSys Diligence, Trail of Bits, Peckshield ve ABDK Kahire denetimlerini ya hâlihazırda yürütüyor ya da yakında başlamak üzere

**API Hizmetleri**: StarkNet tam düğümü kullanıma sunulduktan sonra, API hizmetleri Figment, Chainstack ve Infura tarafından sunulacaktır

**Dizin Oluşturucu**: TheGraph'ı Figment ekibiyle birlikte StarkNet ile çalışacak şekilde entegre etmeye çalışacağız

### Öndeki yol

Önümüzdeki haftalarda ve aylarda, Alfa'yı aşağıdaki yeteneklerle yükselteceğiz:

* Sözleşme yükseltilebilirlik mekanizması
* Ücret Mekanizması
* Olaylar
* Eksik sistem çağrılarının eklenmesi (get_block_number, get_block_timestamp ve daha fazlası)
* Volition'ın iskelet versiyonu
* Ve çok daha fazlası …

Bu çabayı sürekli olarak izlemek için özelliklerin[geçici yol haritasına](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51)bakın.

Daha ileriye baktığımızda, birden fazla cephede aktif araştırmaya yoğun bir şekilde yatırım yapmaya devam ediyoruz (gelin,[Şaman](https://community.starknet.io/)çabasına katılın):

* ademi merkeziyetçilik
* ölçekleme
* Veri kullanılabilirliği
* İzinsiz teşvik

### Eylem çağrısı

* Goerli'deki izinsiz StarkNet test ağında sözleşme yazmaya başlayın
* [StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)Katılın
* Topluluk aramalarına katılın
* İlk[StarkNet Ekosistem Zirvesi](https://www.eventbrite.com/e/starknet-ecosystem-summit-2022-tickets-206671880157)katılın (27-28 Ocak 2022, Stanford CA)
* Araştırma zorluklarına daha derin bir dalış için[StarkNet Shamans](https://community.starknet.io/)katılın

### Feragatname

***StarkNet Alpha, tam olarak denetlenmemiş yeni ve karmaşık bir sistemdir. Tüm karmaşık yazılım sistemlerinde olduğu gibi, StarkNet sistemi aşırı durumlarda tüm paranızı kaybetmenize neden olabilecek hatalar içerebilir. Bu nedenle,***adımınızı dikkatli atın ve dikkatli olun!******

*StarkNet ekosistemi, StarkWare'in gözetimi ve sorumluluğu olmayan büyük ve hızla büyüyen bağımsız ekipler ve bireyler kümesidir. Ekosistem üyeleri tarafından geliştirilen projelerden herhangi biri, aşırı durumlarda tüm paranızı kaybetmenize neden olabilecek hatalar içerebilir. Ayrıca, daha fazla akıllı sözleşme devreye girdikçe, istenmeyen zararlı hatalar ve hatta kötü niyetli dolandırıcılık ve hile yapma potansiyeli artar. Bu nedenle, StarkNet'teki tüm akıllı sözleşmelere Ethereum'daki akıllı sözleşmelere davrandığınız gibi davranın ve yalnızca güvenmek için iyi nedenleriniz olanların güvenli olduğunu kullanın.*