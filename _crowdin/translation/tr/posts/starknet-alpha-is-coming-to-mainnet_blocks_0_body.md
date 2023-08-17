### TL;DR

* *StarkNet Alpha, Kasım ayına kadar Mainnet Ethereum'da başlatılıyor*
* StarkNet'te geliştirme zamanı şimdi

### Kısa bir tarihçe

Yılın başında[StarkNet](https://starkware.co/product/starknet/)vizyonumuzu duyurduk: L1 güvenliğini, izinsiz etkileşimleri ve merkezsizleştirmeyi korurken Ethereum'a büyük ölçeklenebilirlik getirmek.\
**[StarkNet Alpha](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)**Haziran ayında halka açık bir test ağında yayınladık. Bu sürüm, tamamen izinsiz genel hesaplama akıllı sözleşmelerini destekledi. O zamandan beri iki kez yükselttik: ilk olarak[L1<>L2 mesajlaşma ve zincir üstü veri sağlayan**Alpha 1**](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f)ve ardından[şekillendirilebilirliği destekleyen**Alpha 2**](https://medium.com/starkware/starknet-alpha-2-4aa116f0ecfc).

StarkNet Alpha 2 artık L1 ve L2 sözleşmelerinin birbiriyle etkileşime girme yeteneği ile Ethereum benzeri bir durumda genel hesaplamanın şekillendirilebilir akıllı sözleşmelerini destekliyor. Daha fazlasını okuyun[burada](https://www.cairo-lang.org/docs/hello_starknet/index.html).

### Ana ağda StarkNet Alpha nedir?

Ana ağdaki StarkNet Alpha, şu anda Goerli genel test ağında bulunanlara benzer özellikleri destekleyecektir.

#### **Ne bekleyebileceğinizi**

StarkNet hala geliştirme aşamasında olduğundan, yetenekleri adım adım sunmak ve geliştirici beklentilerinin her adımda karşılanmasını sağlamak istiyoruz. Vurgulamak istediğimiz özellikle önemli iki husus şunlardır:

* **İzin verilen akıllı sözleşme dağıtımı**: Optimistic Rollup meslektaşlarımız tarafından sunulan mantıklı başucu kitabını izleyeceğiz:*izin verilen*sözleşme dağıtımıyla başlayın. Akıllı sözleşmenizin bu ilk beyaz listeye dahil edilmesini nasıl talep edeceğinizi belirten protokol önümüzdeki haftalarda yayınlanacaktır.
* **Geriye dönük uyumluluk garantisi yok**: Gelecekteki StarkNet Alpha'dan StarkNet Beta'ya geçişin, durumun yenilenmesini içermesini bekliyoruz. Ağ 0 bloğundan başlayacak ve uygulamaların sözleşmelerini yeniden dağıtması gerekecek. Ayrıca geliştiriciler ve kullanıcılar, beklenen StarkNet Beta'nın StarkNet Alpha ile geriye dönük olarak uyumlu olmayabileceğini, örneğin geliştiricilerin sözleşmelerini değiştirmeleri gerekebileceğini dikkate almalıdır. Açıktır ki, gerekli minimum değişiklikle uygulamalar için kolay bir geçişe izin vermeye çalışacağız.

#### Ek Yakın Vadeli Özellikler

StarkNet Alpha'nın testnet'ten Mainnet'e geçişinin bir parçası olarak şunları yapacağız:

1. Sözleşmelere yapıcılar ekleyin.
2. Test çerçevesini geliştirin.
3. Bloklar ve işlemler için kimlik kullanmaktan karma kullanmaya geçin.

Herkese açık test ağında yaptığımız gibi, yeni özelliklerin dağıtımını düzenli bir tempoda sürdürmeyi planlıyoruz. Yakın vadede, aşağıdaki yükseltmeleri planlıyoruz:

1. Hesap Sözleşmeleri ve Token Sözleşmeleri — DeFi uygulamalarının aşina oldukları şekilde StarkNet ile etkileşim kurmasının yolunu açar.
2. Geliştirilmiş Sözleşme İşlevselliği — sözleşme yükseltilebilirliğini ve olayları destekler.
3. Warp: Nethermind tarafından geliştirilen Solidity-to-Cairo derleyicisi, Solidity akıllı sözleşmelerinden StarkNet akıllı sözleşmelerine sorunsuz bir geçiş sağlayacaktır.
4. Ethereum İmzaları: secp256k1 üzerinden ECDSA için yerel destek, mevcut cüzdanlarla daha kolay entegrasyona izin verecektir.
5. StarkNet Tam Düğüm: Bir Tam Düğüm, kullanıcıların bir Ethereum Tam Düğümü ile aynı donanım gereksinimleriyle ağa katılmalarına izin verecektir.

#### Ücret Mekanizması

Hesap sözleşmeleri ve token sözleşmeleri StarkNet Alpha'ya eklenir eklenmez ücret mekanizması açılacaktır.

StarkNet'e gönderilen tüm işlemler, L1 ve zincir dışı maliyetleri karşılamak üzere tasarlanmış bir ücrete tabi olacaktır. Ücret başlangıçta ETH cinsinden tahsil edilecektir. StarkNet ölçeğini artırdıkça tek bir işlemin maliyeti düşecektir (mevcut tüm STARK tabanlı sistemlerde olduğu gibi). İlk ücret mekanizmalarını oluştururken, işlemleri tükettikleri kaynaklara göre doğru şekilde fiyatlandırmaktansa basitliği tercih ediyoruz. Bu mekanizmanın zaman içinde iyileştirilmesini ve iyileştirilmesini bekleyin.

StarkNet'i sürdürülebilir bir ağ haline getirmek ve operatörlerini ve geliştiricilerini teşvik etmek amacıyla, ücretlerden toplanan gelirlerin bir kısmı uygulama geliştiricilerine ve StarkNet çekirdek geliştiricilerine dağıtılacak.

#### Güvenlik

StarkNet Alpha'nın Mainnet üzerindeki güvenlik modeli, testnet üzerindeki mevcut modeli takip edecektir:

* Her durum geçişi bir STARK kanıtı ile desteklenir, böylece geçerli olması sağlanır.
* Tüm durum verileri zincir üzerinde yayınlanacak, böylece durum tamamen L1'den inşa edilebilir olacaktır.
* Tek sıralayıcı olacak.
* Ağ herhangi bir zaman gecikmesi olmaksızın yükseltilebilir olacaktır.

### StarkNet Ekosistemi Büyüyor

StarkNet'i dünyaya açmak, Kahire'yi öğrenmek ve StarkNet üzerinden gelişmek isteyen büyük bir geliştirici dalgasını kendine çekti. Çok değerli geri bildirim sağladılar ve StarkNet[Discord](https://discord.gg/uJ9HZTUk2Y)canlı tartışmalar görmek gerçek bir zevkti.

Ayrıca StarkNet, yalnızca StarkWare ekibi tarafından değil, aynı zamanda blockchain ekosistemindeki en güçlü ekiplerden bazıları tarafından da geliştirilmektedir:

* Nethermind iki proje üzerinde çalışıyor:

1. **[Warp](https://github.com/NethermindEth/warp)**: Solidity to Kahire derleyicisi

2. **[Voyager](https://voyager.online/)**: StarkNet blok gezgini

* Open Zeppelin, StarkNet için bir[Standart Sözleşme](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)uygulaması üzerinde çalışıyor ve ayrıca bir geliştirici ortamı üzerinde çalışmaya başladı:[Nile](https://github.com/martriay/nile).
* ShardLabs,[StarkNet HardHat eklentisi](https://github.com/Shard-Labs/starknet-hardhat-plugin)ve daha iyi bir test çerçevesi üzerinde çalışıyor.
* Erigon ekibi, Ethereum Full Node'larını StarkNet'i (kod adı: Fermion) destekleyecek şekilde genişletmek için çalışıyor. StarkNet'in temel mekanizmalarını tasarlamak için bizimle birlikte çalışıyorlar.
* Equilibrium, Rust'ta bir StarkNet Tam Düğüm uygulaması üzerinde çalışıyor.
* Kahire denetim hizmetleri: Önümüzdeki aylarda ABDK, ConsenSys Diligence, Peckshield ve Trail of Bits Kahire denetimleri yürütecek.
* StarkNet denetimleri: ağın temellerini denetlemekle başladık:

1. **CryptoExperts**Cairo Solidity Verifier'ın denetimini yürütecek.
2. Kahire belirtimlerinin resmi bir**LEAN kanıtı**yakın zamanda tamamlandı ve bir[kağıt](https://arxiv.org/abs/2109.14534)ve bir GitHub[deposu](https://github.com/starkware-libs/formal-proofs)olarak yayınlandı.

Önümüzdeki aylarda yayınlanacak çok daha ilginç işbirliklerini bekleyin!

### STARK'lar Bugün Ölçekleniyor

Bağımsız ölçeklendirme Hizmet Olarak Sunulan Yazılımlarımız StarkEx, STARK'ların Ethereum uygulamalarını nasıl büyük ölçüde ölçekleyebileceğini gösterdiğinden, StarkNet Alpha'nın lansmanına güvenle yaklaşıyoruz. StarkEx'i[dYdX](https://dydx.exchange/)(kalıcı sözleşmeler),[DeversiFi](https://www.deversifi.com/)(spot ticaret ve ödemeler) ve ayrıca[Immutable](https://www.immutable.com/)ve[Sorare](https://sorare.com/)(NFT basımı ve ticareti) için başlattık. Gas/tx maliyetlerinin 100X–200X oranında, Validium'da (zincir dışı veriler) yaklaşık 650 gas/tx'e ve bir ZK-Rollup için 1100 gas/tx'e düştüğünü gördük.

Bugüne kadar, StarkEx 80 milyar $'lık ticaret ve 27 milyondan fazla işlem gerçekleştirerek, diğer tüm L2 çözümlerini ve hepsini bir arada gölgede bıraktı.

### Şimdi harekete geç

Bir sonraki dApp'inizi veya faydalı geliştirici araçlarınızı oluşturarak büyüyen StarkNet ekosistemine katılmak için bundan daha iyi bir zaman olamaz.

Sizi aşağıdakilere davet ediyoruz:

1. StarkNet topluluğuyla tanışabileceğiniz ve etkileşime geçebileceğiniz[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)katılın.
2. [StarkNet akıllı sözleşmelerinin nasıl yazılacağını](https://www.cairo-lang.org/docs/hello_starknet/index.html)öğrenmeye başlayın.
3. [Bize DM](https://twitter.com/StarkWareLtd)— ekibimiz fikirlerinizin ve girişimlerinizin hayata geçmesine yardımcı olmaya can atıyor.

**Güncelleme (Kasım 2021):**StarkNet Alpha, Ethereum Mainnet'te yayında