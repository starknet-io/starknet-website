Blockchain'deki teknolojik yenilikler son birkaç yılda gelişti - STARK'lar, SNARK'lar, EIP-1559, Ethereum Birleşmesi - hepsi çok büyük teknolojik başarılar. Ancak, UX ve UI tasarımı ayak uyduramadı. İnsanlar hala 16 kelimelik temel ifadelere takılıp kalıyor ve merkezi bir aracı olmadan DeFi'ye girmek birçok kişi için hala çok korkutucu. Bir sonraki milyar kullanıcıyı Web3'e dahil etmek için, kullanıcı katılım deneyimini iyileştirmek çok önemlidir.

FTX'in (ve İkizler, Celsius ve Mt. Gox) gösterdiği gibi, kişinin varlıkları üzerinde nefsine hakim olması kritik derecede önemlidir. Bununla birlikte, yakın zamana kadar, kişisel cüzdanlar, ortalama bir kullanıcı için hantal ve kafa karıştırıcıydı. Çoğu kişi Web2 parolalarını aylık olarak unutur; Kullanıcıların tohum cümlelerini ve özel anahtarlarını sonsuza kadar güvende tutmaları nasıl bekleniyor?

Basitçe söylemek gerekirse, bu bir güvenlik kabusu. Sayısız kez gördüğümüz gibi, ister kötü aktörler ister ihmaller olsun, tek bir yanlış hareket milyonlarca dolarlık zarara yol açabilir.

Yeni kripto kullanıcıları için ilk iletişim noktası olan Ethereum cüzdanlarının kullanımı kolay, güvenli ve her kullanıcının ihtiyaçlarına göre özelleştirilebilir olması gerekir. Bu, geliştiricilerin Web2 finansal ürünlerinin basitliğini Web3'ün özellikleriyle entegre etmelerini gerektirir.

Bu tam olarak hesap soyutlamanın başardığı şeydir.

Hesap soyutlama, kullanıcıların özel anahtara olan güvenini ortadan kaldırarak ve cüzdanları daha programlanabilir hale getirerek kendi kendine saklama cüzdan ürünlerinin güvenliğini ve güvenliğini artırır. Bu iyileştirilmiş kullanıcı deneyimi ile, gözetim dışı cüzdanlar nihayet milyonlarca ana akım kripto kullanıcısına ölçeklenebilir.

Ancak hesap soyutlamanın etkisini tam olarak anlamak için Ethereum hesaplarının nasıl çalıştığı konusunda kendimizi yenilememiz gerekiyor.

### Ethereum hesaplarının temelleri

İki tür Ethereum hesabı vardır:

1. Harici Sahipli Hesaplar (EOA)
2. Sözleşme Hesapları (CA)

Her birini biraz daha parçalayalım.

### Harici sahip olunan hesaplar

MetaMask ve Coinbase Wallet gibi harici sahipli hesaplar, Ethereum kullanıcıları için tipik hesap türüdür. Her EOA, anahtar çifti adı verilen özel ve genel bir anahtardan oluşur.

Tüm işlemler özel anahtarlarla yetkilendirilir ve imzalanır. Bir işlem imzalandıktan sonra EVM, EOA'nın hesap adresini kullanarak imzanın geçerli olduğunu doğrular. EVM'deki sabit kodlanmış mantık, hesabın (belirteçlerinizi tutan nesne) ve özel anahtarın (imzalayan) tek olarak birleştirildiğini gösterir.

Özel anahtarınızı kaybetmek, fonlarınızı ve hatta hesabınızın kontrolünü sonsuza kadar kaybetmek anlamına gelir.

### Sözleşme hesapları

Bu arada, hesap soyutlaması ile eşanlamlı olan sözleşme hesapları, Ethereum blok zincirinde dağıtılan akıllı sözleşmelerdir. Bu sözleşmeler kod mantığı ile kontrol edilir ve özel anahtar gerektirmez. EOA'ların aksine, sözleşme hesapları işlem başlatamaz. Bunun yerine, işlemleri EOA'lardan gelen talimatlarla tetiklenir.

### Hesap soyutlama neden önemlidir?

Hesap soyutlama, sabit kodlanmış yetkilendirme mantığını EOA'lardan soyutlamayı, her hesabı herhangi bir bireyin ihtiyaçlarını karşılayacak şekilde uyarlanabilen programlanabilir bir akıllı sözleşmeye dönüştürmeyi gerektirir.

Yakın tarihli bir[Stark @ Home etkinliğinde](https://www.crowdcast.io/e/7olimxqv)Argent'in kurucu ortağı ve Baş Bilim Sorumlusu Julien Niset tarafından açıklandığı gibi, bu esnek yetkilendirme mantığı, geliştiricilere…gibi hesap özellikleriyle oynama özgürlüğü verir.

**Donanım İmzacısı:**Herhangi bir akıllı telefonu bir donanım cüzdanına dönüştürmek için bir iPhone veya Android'in güvenli bölgesini kullanma. Oradan, kullanıcılar parmak izi veya Apple Face ID gibi biyometrik verileri kullanarak işlemleri doğrulayabilir. Braavos[gibi kendi kendini koruyan cüzdanların bu özelliği sunduğunu görmeye başladık bile.](https://medium.com/@braavos_starknet_wallet/hardware-signer-the-last-innovation-for-wallet-crypto-everyday-users-7e1974f93944)

**Paymaster'lar:**Kullanıcıların gas ücretini herhangi bir jetonla ödemesine veya hatta işlemler için üçüncü taraf tarafından tasarlanmış bir ödeme mekanizmasına sahip olmasına izin verin.

**Sosyal Kurtarma:**Özel bir anahtarın kaybolması veya güvenliğinin ihlal edilmesi durumunda, kullanıcılar yeni bir anahtarı meşru bir cüzdan sahibi olarak yetkilendirebilir. Bu, güvenilir kişiler, donanım cüzdanları veya üçüncü taraf hizmetleri aracılığıyla çeşitli kurtarma yöntemlerini içerebilir. Buradaki fikir, hesabınıza erişimi kurtarmayı, bir e-posta yoluyla banka hesabı şifrenizi kurtarmak kadar kolay hale getirmektir.

**Çok Faktörlü Kimlik Doğrulama:**Yaygın Web2 2FA uygulamalarına benzer şekilde, kullanıcılar kripto cüzdanları için iki (veya daha fazla) kimlik doğrulama yöntemi ayarlayabilirler; burada bir işlem yalnızca bir kullanıcı e-posta veya SMS gibi ikinci bir seçenek aracılığıyla onayı onayladığında imzalanır. Kullanıcılar ayrıca cüzdanın otomatik olarak etkileşime girmesi engellenen günlük transfer limitleri veya hesap adresleri listesi ayarlayabilir.

**Kuantuma Dayanıklı ve Gaz Verimli İmzalar:**Ethereum'un mevcut imza şeması ECDSA, hesaplama açısından kapsamlıdır (okuma: daha yüksek gaz ücretleri) ve kuantum bilgisayarlar tarafından kırılabilir. İmza soyutlama yoluyla, farklı hesap sözleşmeleri daha verimli ve kuantum açısından güvenli imza şemaları kullanır. StarkNet, kendi tescilli STARK dostu eğrisini kullanır.

Bu özellikler kullanıcılara yalnızca daha fazla güvenlik ve esneklik sağlamakla kalmaz, daha da önemlisi,**daha iyi**kullanıcı deneyimi sağlar.

Vitalik Buterin tarafından Ethereum geliştirici topluluğu için "uzun süredir devam eden bir rüya" olarak listelenen hesap soyutlama konusundaki yenilikler, özellikle EIP-2938 ve EIP-3074, 2020'den bu yana hızla arttı. Ancak, her ikisi de güvenlik ve uygulama konusunda tavizler gerektiriyordu. Şimdiye kadarki en umut verici gelişme olan [EIP-4337](https://github.com/ethereum/EIPs/blob/3fd65b1a782912bfc18cb975c62c55f733c7c96e/EIPS/eip-4337.md), Ethereum protokolünde değişiklik gerektirmeden bir hesap soyutlama sürümü önermektedir.

### **Hesap soyutlama ve Starknet**

Hesap soyutlamasını desteklemek için mevcut protokollerini güçlendiren Bitcoin ve Ethereum'un aksine,[StarkNet](https://starkware.co/starknet/)ilk günden beri hesap soyutlamayı uygulamıştır. STARK kanıtlarımızın ölçeklenebilirliği ve yetenekleriyle birleştiğinde, cüzdan yeniliği potansiyeli sınırsızdır. Bu nedenle, Argent ve Braavos gibi yeni nesil kişisel cüzdanlar şu anda ağımızın üzerinde inşa ediliyor.

StarkNet'in yaklaşımı EIP-4337'ye benzer,[,](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781)tam hesap soyutlamanın yine de UX'in kafa karıştırıcı olmasına neden olacağını ve[sıralayıcılara saldırılara kapı](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4337.md#rationale)açabileceğini kabul ediyor. Bunun yerine, gerekli zincir içi ve zincir dışı altyapının bir kısmını karşılıklı hale getirerek hem imza soyutlamayı hem de ödeme soyutlamasını gerçekleştirmeyi amaçlar.

Hâlâ yapılacak çok iş varken, hesap soyutlama, kripto yerlilerinden oluşan küçük bir çevrenin ötesinde ilgi görüyor. Aralık ayında[Visa, StarkNet'te otomatik yinelenen ödemeleri ayarlamak için hesap soyutlamayı kullanma fikrini](https://www.coindesk.com/tech/2023/01/11/ethereum-upgrade-could-make-it-harder-to-lose-all-your-crypto/)önerdi. Kullanıcılar, devredilebilir bir hesap kullanarak, önceden onaylanmış bir akıllı sözleşmeye ödeme başlatma izni verebilir. Buradan akıllı sözleşme, belirli bir günde, belirli bir süre boyunca belirli bir ödeme tutarını düşecek şekilde programlanacaktır. Visa henüz kendi hizmetlerine yönelik planlarını açıklamamış olsa da, ilgi tek başına çok şey ifade ediyor ve Netflix ve Spotify gibi büyük teknoloji abonelik platformlarının kripto benimsemeyi kucaklayabileceği bir dünyanın habercisi olabilir.

Geleceğin ne getireceğine gelince, sadece zaman gösterecek. Ama bir şey kesindir. Hesap soyutlama, cüzdanların kullanımını daha kolay ve güvenli hale getirerek, kendi kendini koruyan blockchain cüzdanlarının milyonlarca ana akım kripto kullanıcısına ölçeklenmesi için güçlü bir katalizör görevi görecek. Bu arada inşaata devam edeceğiz.