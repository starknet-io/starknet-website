### TL;DR

* EIP-4337 ruhuna uygun Hesap Soyutlama İyileştirmeleri

1. Doğrula — Ayrımı yürüt
2. İşlem benzersizliği artık protokolde sağlanmaktadır (Nonce)

* Ücret mekanizması aşağıdakileri içerecek şekilde genişletildi:

1. L1→L2 Mesajları
2. Beyan İşlemleri

* Birkaç Kahire sözdizimi değişikliği

### Giriş

StarkNet Alpha 0.10.0'ı sunmaktan heyecan duyuyoruz. Bu sürüm, güvenlik ve ademi merkeziyetten ödün vermeden Ethereum'u ölçeklendirmeye yönelik bir başka adımdır.

Bu blog yazısı, bu sürümün ana özelliklerini kısaca açıklamaktadır. Değişikliklerin tam listesi için[sürüm notlarını](https://github.com/starkware-libs/cairo-lang/releases)kontrol edin. Daha ayrıntılı bilgi için[belgelerine bakın](https://docs.starknet.io/).

### Hesap Soyutlama Değişiklikleri

[StarkNet'in hesap soyutlaması](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781)ile ilerliyoruz. Bu sürüm,[EIP-4337](https://eips.ethereum.org/EIPS/eip-4337)ilham alan değişiklikleri sunar.

#### Ayrımı Doğrula/Yürüt

Şimdiye kadar, hesabın \_\_execute\_\_ işlevi hem işlem doğrulamasından hem de yürütmeden sorumluydu. 0.10.0'da bu eşleşmeyi kırıyoruz ve hesaplara ayrı bir \_\_validate\_\_ işlevi ekliyoruz. Bir işlem alındığında, hesap sözleşmesi önce \_\_validate\_\_ öğesini arayacak ve ardından başarılı olursa \_\_execute\_\_ ile devam edecektir.

Doğrulama/yürütme ayrımı, geçersiz ve geri alınmış (ancak geçerli) işlemler arasında protokol düzeyinde bir ayrım sağlar. Bu sayede sıralayıcılar, geri alınıp alınmadığına bakılmaksızın geçerli bir işlemin yürütülmesi için ücret talep edebilecektir.

#### hiç

0.10.0 sürümünde, işlem benzersizliğini protokol düzeyinde zorlamak için bir nonce alanı eklenir. Şimdiye kadar, nonce'lar hesap sözleşmesi düzeyinde ele alınıyordu, bu da teorik olarak aynı hash'e sahip bir işlemin iki kez gerçekleştirilebileceği anlamına geliyordu.

Ethereum'a benzer şekilde, artık her sözleşme, bu hesaptan yürütülen işlemlerin sayısını sayan bir nonce içeriyor. Hesap sözleşmeleri yalnızca nonce ile eşleşen işlemleri kabul edecektir, yani hesabın mevcut nonce'si X ise, o zaman yalnızca nonce ile işlemleri kabul edecektir.

#### Yeni İşlem Sürümü

Geriye dönük uyumluluğa izin vermek için, bu iki değişikliği yeni bir işlem sürümü olan[v1](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C)aracılığıyla kullanıma sunacağız. Bu değişiklikler yalnızca yeni sürüm için geçerli olacak ve eski hesaplar yine de sürüm 0 işlemlerini gerçekleştirebilecek.

Not — v0 işlemi artık kullanımdan kaldırılmıştır ve StarkNet Alpha v0.11.0'da kaldırılacaktır. Lütfen yeni işlem sürümünü kullanmak için yükselttiğinizden emin olun.

İşlem sürümü hakkında daha ayrıntılı bilgi için lütfen[belgelerini](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C)okuyun.

#### Ücret Mekanizması

Yeni sürüm, gerekli iki bileşen için ücretlerin eklenmesine izin verir:

* [L1→L2 Mesajı](https://docs.starknet.io/docs/L1-L2%20Communication/messaging-mechanism#l1--l2-message-fees)
* [İşlemi beyan et](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)

Bu ücretler bu sürümde zorunlu olmayacak ve yalnızca StarkNet Alpha v0.11.0'dan itibaren uygulanacaktır.

#### Kahire Söz Dizimi Değişiklikleri

Kahire,[Kahire 1.0](https://www.youtube.com/watch?v=Ny4Rv6ztINU)yükseltmesine doğru kademeli ilerleme lehine, bu sürüm birkaç sözdizimi değişikliği içerir.

Rahatsızlığı en aza indirmek için sürüm sürümü, yukarıdaki değişiklikleri otomatik olarak uygulayan bir[geçiş komut dosyası](https://www.youtube.com/watch?v=kXs59zaQrsc)içerecektir. Daha fazla ayrıntıyı burada bulabilirsiniz[](https://github.com/starkware-libs/cairo-lang/releases).

### Sıradaki ne?

* Birkaç hafta içinde, daha hızlı blok üretimi (V0.10.1) sağlayan sıralayıcıya paralelleştirme getirmeyi planlıyoruz.
* Ücret ödemesine dahil edilmesi gereken son kısmı yakında tamamlayacağız - Hesap dağıtımı
* Kahire 1.0 sürümü! Gelecek bir gönderide bununla ilgili daha fazla bilgi.

### Nasıl Daha Etkileşimli Olabilirim?

* Tüm StarkNet bilgileri, belgeleri, eğitimleri ve güncellemeleri için[starknet.io](https://starknet.io/)adresine gidin.
* Geliştirici desteği, ekosistem duyuruları ve topluluğun bir parçası olmak için[StarkNet Discord](http://starknet.io/discord)katılın.
* Güncel bilgilerden haberdar olmak ve StarkNet araştırma tartışmalarına katılmak için[StarkNet Forum](http://community.starknet.io/)ziyaret edin.

[belgelerimiz](https://docs.starknet.io/)hakkında geri bildirim almaktan her zaman mutlu oluruz!