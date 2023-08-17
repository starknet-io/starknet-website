### TL;DR

* StarkNet'in ademi merkeziyetçiliği yerel bir simge ve yeni bir temel içerir.
* StarkNet belirteci, yönetişim için ve ağın ödeme ve staking varlığı olarak kullanılır.
* On milyar jeton basıldı ve bunların tahsisi başladı.
* Şu anda kurulmakta olan StarkNet Vakfı, StarkNet'i bir kamu malı olarak sürdürme misyonuna sahip olacak.

StarkNet, Ethereum'un temel ademi merkeziyet, şeffaflık, kapsayıcılık ve güvenlik ilkelerinden ödün vermeden, Ethereum'un STARK adı verilen kriptografik protokoller aracılığıyla ölçeklenmesine izin vermek için oluşturulmuş, izinsiz, merkezi olmayan bir Katman 2 (L2) geçerlilik toplamasıdır.

StarkNet's Alpha, Kasım 2021'de Mainnet'te kullanıma sunuldu. Bir yıldan kısa bir süre içinde dünya çapında düzinelerce ekibin üzerinde çalıştığı bir ekosistem oluşuyor. Şimdi ağın ademi merkeziyetçiliğini ilerletme zamanı, böylece Ethereum'da bir L2'nin talep ettiği canlılığı, sansür direncini, şeffaflığı ve kapsayıcılığı elde ediyor.

Ademi merkeziyetçilik, ağın işleyişinin ve evriminin StarkWare dahil tek bir varlığa dayanmayacağı anlamına gelir. Her ikisi de yerel bir belirteç kullanan izinsiz bir hisse kanıtı lider seçim mekanizması ve işlem ücretlerinin zincir üzerinde ödenmesi, StarkWare'in varlığı sona erdiğinde bile ağın Ethereum üzerinde bir L2 olarak güvenilir bir şekilde çalışmasını sağlayacaktır. StarkNet'in devam eden bakımıyla ilgili kararlar, StarkWare'den topluluğa geçecek. Bir StarkNet Simgesi ve Vakfı, bu çabanın temel unsurları olacaktır.

Aynı anda yayınlanan üç gönderiden ilki olan bu gönderi, StarkNet'in şimdiye kadarki yolculuğunu özetliyor ve StarkNet Token ile StarkNet Foundation'ı tanıtıyor. [sonraki gönderi](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)StarkNet yönetişim modelini tartışıyor ve[üçüncü](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6)StarkNet'in simge modeline odaklanıyor.

*Aşağıdaki StarkNet destekçilerine (alfabetik olarak sıralanmış) bu gönderilerin taslağı hakkındaki yorumları için teşekkür ederiz: Guily_Gioza (Topoloji), Itamar Lesuisse (Argent), Jonas Nelle (Pontis), Martin Triay (OpenZeppelin), Polynya, Sylve Chevet (Briq) ve Tomasz Stańczak (Nethermind).*

### Hikaye şimdiye kadar

[StarkNet](https://starknet.io/)kriptografiden ve açık bir ekosistemden oluşturulmuştur. **kriptografi**,**[STARKs](https://eprint.iacr.org/2018/046.pdf)**. Bunlar, Ethereum'u büyüklük derecelerine göre ölçeklendiren matematiğe dayalı protokollerdir. Güvenilir bir kurulum gerektirmezler, kuantum sonrası güvenlidirler ve herhangi bir ölçekte kısaca devreye alınabilirler. Ekosistem, yıllarca blockchain teknolojisini ölçeklendirmek için altyapı ve araçlar oluşturmak isteyen çekirdek geliştiricilerin yanı sıra Ethereum'un hesaplama gücü genişletildiğinde mümkün olan yeni ve yaratıcı uygulama alanlarından oluşur.

StarkNet, Ethereum'un temel değerlerini korurken Ethereum'u ölçeklendirmek amacıyla tüm geliştiricilere ve kullanıcılara STARK'ların ölçek ve güvenlik avantajlarına erişim sağlar. STARK'lar, onları müşteriler için[StarkEx](https://starkware.co/starkex/)ölçeklendirme çözümünü oluşturmak için ilk kez kullanan StarkWare'in kurucu ortakları tarafından icat edildi. Ardından, StarkWare ve diğer geliştirici ekipleri (toplu olarak "Temel Katkıda Bulunanlar"), bu ölçeklendirme teknolojilerine sonsuza dek herkes tarafından erişilebilmesini sağlamak için halka açık, merkezi olmayan ve izin gerektirmeyen bir altyapı olan[StarkNet](https://starkware.co/starknet/)kurdu.

StarkNet Alpha'nın yaklaşık bir yıl önce piyasaya sürülmesi, kendini StarkNet'i oluşturmaya ve beslemeye adamış daha büyük bir ekosistemin ortaya çıkmasına neden oldu. Dünya çapında çekirdek altyapısını inşa eden çok sayıda geliştirici ekibi ve üzerinde yeni uygulamalar var.

### **Ademi merkezileşmenin yolu**

STARK teknolojisi olgun ve güvenlidir, ancak StarkNet, Ethereum veya İnternet gibi bir kamu malı statüsüne ulaşmamıştır. StarkNet'in bu hedefe ulaşabilmesi için yönetişimi, işleyişi ve gelişimi merkezsizleşmeye devam etmelidir. Bu, iki mekanizma aracılığıyla kolaylaştırılacaktır:**StarkNet Foundation**ve**StarkNet Token**.

#### Vakıf

Kâr amacı gütmeyen bir kuruluş olarak Vakfın misyonu, StarkNet'i toplumun tüm üyelerine sunulan bir mal veya hizmet olan bir kamu malı olarak sürdürmek olacaktır. StarkNet, herkes tarafından kullanılabilir olması gereken izinsiz bir altyapıdır. Kamu kullanımı için güvenli ve verimli olması için iyi muhafaza edilmelidir. Ayrıca kullanıcılar arasında ayrım yapmamalıdır.

Vakıf, bir kerelik StarkNet Token hibesi ile finanse edilecektir. Protokol güncellemeleri, uyuşmazlık çözümü ve kamu malları finansmanı gibi temel teknolojik sorularda topluluk karar verme için aşağıdan yukarıya mekanizmaların geliştirilmesini teşvik edecektir.

#### Jeton

StarkNet Token, ekosistemi işletmek, sürdürmek ve güvence altına almak, değerlerine ve stratejik hedeflerine karar vermek ve gelişimini yönlendirmek için gereklidir. Bu belirteç (i) yönetişim, (ii) StarkNet'te işlem ücretlerinin ödenmesi ve (iii) StarkNet'in mutabakat mekanizmasına katılım için gerekli olacaktır.

StarkWare ve StarkWare'in yatırımcıları da dahil olmak üzere StarkNet ekosisteminin Temel Katkıda Bulunanlarına, StarkNet yazılım geliştirici ortaklarına ve Vakıf'a tahsis edilen ilk on milyar jetonu bastık. Yakında (hedef: Eylül 2022) belirteç, ERC-20 belirteci olarak Ethereum'a gidecek ve yönetişimde ve ağ yükseltmelerinde oylamada kullanılması talep edilecek. Daha sonra StarkNet ücretleri sadece bu token ile ödenecek olup, ETH ile ücret ödemek isteyen kullanıcılar için iyi bir kullanıcı deneyimi sağlayacaktır. Daha sonra, ilave StarkNet Jetonlarının otomatik basımı başlayacak (yani, dolaşımdaki jetonların sayısı on milyardan fazla olacaktır).

StarkNet Token modeli, geliştiricilerin çalışmaları için ödeme yapmasını vurgular. Yeni basım ve işlem ücretlerinin bir kısmı - StarkNet kullanımı için değerlendirilen ücretler - StarkNet operatörlerine yaptıkları iş için tazmin etmenin yanı sıra, protokolü tasarlamak ve başlatmak için yaptıkları iş için çekirdek altyapı geliştiricilerine ve akıllı sözleşme geliştiricilerine verilecek. çalıştırmak için yaptık.

Yeni ve özel bir StarkNet Jetonunun arkasındaki tüm mantık,[saniyelik yazımızda](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)açıklanıyor ve StarkNet Token tasarım ilkeleri ve ilk tahsis,[üçüncü yazımızda](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6)tartışılıyor.