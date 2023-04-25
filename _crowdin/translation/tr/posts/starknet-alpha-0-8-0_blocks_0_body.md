### TL;DR

* StarkNet Alpha 0.8.0, ücret mekanizmasının ilk sürümünü sunar (StarkNet Alpha 0.9.0'a kadar isteğe bağlıdır).
* İşlem izini elde etmek için işlem ücretinin tahmin edilmesini gerektiren yeni API, daha iyi görünürlük ve hata ayıklama yetenekleri sağlar
* StarkNet sıralayıcıda performans iyileştirmeleri
* L1→L2 mesaj iptali

### Giriş

[yol haritamızda](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51)paylaşıldığı gibi, StarkNet'in işlevsellik ve özelliklerine yapılan son eklemenin ardından, dikkatimiz performans geliştirmelerine ve protokol tasarımına (ücretler, hesap soyutlama, merkezden uzaklaştırma, vb. dahil) kayıyor. StarkNet Alpha 0.8.0, işlem ücretleri ekleme ve sıralayıcının performansını artırma sürecini başlatır.

StarkNet'in yol haritası bir ücret mekanizması içeriyor ve bu sürümde ilerleyerek platformun tam performansına önemli bir adım daha yaklaşıyoruz.

Ücret mekanizmasının eklenmesi, StarkNet'in performans tasarımının önemli bir parçasıdır. Minimum bir ücret olmadan, sonsuz işlemlerle karşı karşıya kalma riskini alıyoruz: bu da sıralayıcı optimizasyonlarından bağımsız olarak sistemin performans göstermesini imkansız hale getirir.

### Özellikler

#### Ücret Desteği

StarkNet Alpha artık ücret mekanizmasının ilk sürümünü destekliyor. Bu mekanizma, bu erken aşamada ve hatta Testnet'te bile iki ana nedenden dolayı önemlidir:

1. Geliştiricilerin sözleşmelerini StarkNet'in maliyet modeline göre optimize etmeye başlamasına olanak tanır.
2. Sayısız işlem göndererek istenmeyen e-postaları önlediğinden, sistemin performansını iyileştirmenin çok önemli bir karşılığıdır.

Bu sürüm, geliştiricilerin ücret ödemelerini araçlarına ve uygulamalarına dahil etmeleri için gerekli bileşenleri sunar. Geliştiriciler artık \`estimate_fee\` uç noktasını arayarak işlem ücretini tahmin edebilir ve işlem yürütmenin bir parçası olarak ücret ödemesini yapabilir.

Bu özellik geriye dönük uyumlu olmadığından, bu noktada ücret ödemesini zorunlu kılmayacağız, yalnızca birkaç hafta içinde piyasaya sürülecek olan 0.9.0 sürümünden itibaren uygulayacağız. Bu kademeli geçiş, kullanıcıların ve geliştiricilerin yeni modele uyum sağlamasına olanak tanıyacak.

#### 0.8.0'daki Ücret Yapısı

0.8.0'da, ücretler yalnızca hesaplama karmaşıklığına göre toplanırken, StarkWare yine de L1 iletişim maliyetini sübvanse edecektir. Önümüzdeki birkaç hafta içinde bu L1 operasyon ve iletişim maliyetlerini içerecek şekilde ücret mekanizmasını güncelleyeceğiz. Ödeme, işlemin StarkNet L2'de gerçekleştirilmesiyle otomatik olarak tahsil edilecektir. Kapsamlı bir açıklama için[ücret belgelerine](https://starknet.io/documentation/fee-mechanism/)bakın.

StarkNet geliştikçe ücret mekanizmasını değiştirmek ve geliştirmek için geliştirici topluluğuyla yakın bir şekilde çalışacağımızı belirtmek önemlidir.

#### L2 Görli ETH Musluğu

Kullanıcıların Testnet'te ücret ödemelerini sağlamak için[L2 Goerli ETH Faucet](https://faucet.goerli.starknet.io/)piyasaya sürdük. Bu Musluk, işlem ücretini ödemek için kullanabileceğiniz StarkNet Goerli'deki hesap adresinize küçük miktarlarda L2 Goerli ETH gönderir.

#### İzleme API'sı

Bir işlemin yürütme izini alma özelliğini StarkNet'in API'sine ekledik. İşlemin izinde, tüketilen yürütme kaynakları, dönüş değeri, yayılan olaylar ve gönderilen mesajlar gibi bilgilerle birlikte tüm dahili çağrılar görünür. Bu yeni çağrı, bir sözleşmenin davranışını anlamayı veya işlemlerde hata ayıklamayı basitleştirir. Ek olarak,[Voyager](https://voyager.online/)veya[StarkTx](https://starktx.info/)gibi araçlar bu verileri içerebilir; kullanıcılara, özellikle hesap sözleşmesi etkileşimi için daha ayrıntılı analiz sağlamak.

İzi elde etmek için StarkNet'in CLI'sinde \`get_transaction_trace\` kullanabilirsiniz. Nasıl kullanılacağına dair bir örnek görmek için[eğitimine bakın](https://www.cairo-lang.org/docs/hello_starknet/cli.html?#get-transaction-trace).

#### Mesaj İptali

Bu sürümün ek bir özelliği de L1→L2 mesajlarını iptal etme yeteneğidir. Bu neden yararlıdır? Bir kullanıcının bir varlığı L1'den L2'ye aktardığı bir senaryo düşünün. Akış, kullanıcının varlığı bir StarkNet köprüsüne göndermesi ve karşılık gelen L1→L2 mesaj oluşturmasıyla başlar. Şimdi, L2 mesaj tüketiminin çalışmadığını hayal edin (bu, dApp'lerin Kahire sözleşmesindeki bir hata nedeniyle olabilir). Bu, kullanıcının varlıkları üzerindeki velayetini sonsuza kadar kaybetmesine neden olabilir.

Bu riski azaltmak için, L1→L2 mesajını başlatan sözleşmenin, niyetini beyan ettikten ve uygun bir süre bekledikten sonra mesajı iptal etmesine izin veriyoruz (bkz.[dokümantasyonu](https://starknet.io/l1-l2-messaging/#cancellation)).

### Performans geliştirmeleri

Bu sürüm, bir sıralayıcının gelen Kahire işlemleri akışını yürütmek için ihtiyaç duyduğu süreyi önemli ölçüde azaltır.

Bu sadece ilk adım! Yakında (0.9.0) tanıtılacak olan bir sonraki önemli performans dönüm noktamız, sıralayıcının paralel çalıştırılmasıdır ve ileride çok daha fazla optimizasyon yapılması beklenmektedir.

### Şimdi ne var?

Teknik belgeleri[buradan okuyun](https://starknet.io/documentation/fee-mechanism/).

Tüm StarkNet bilgileri, belgeleri, eğitimleri ve güncellemeleri için[starknet.io](https://starknet.io/)adresine gidin.

Geliştirici desteği, ekosistem duyuruları ve topluluğun bir parçası olmak için[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)katılın.

Gelişmelerden haberdar olmak ve tüm StarkNet araştırma tartışmalarına katılmak için[StarkNet Shamans](https://community.starknet.io/)ziyaret edin.