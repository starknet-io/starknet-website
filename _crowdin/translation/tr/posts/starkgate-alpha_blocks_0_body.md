### TL;DR

* StarkNet Bridge'in ilk versiyonu olan StarkGate Alpha,**[Testnet](https://goerli.starkgate.starknet.io/)**ve**[Mainnet](https://starkgate.starknet.io/)**yayında !
* İşlerin nasıl iyileştirilebileceği konusunda topluluk geri bildirimlerini bekliyoruz. Hem[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)hem de[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx)için görüşlerinizi iletebilirsiniz.
* Ana ağ dağıtımı yakında başlayacak (güncelleme, 9 Mayıs 2022: StarkGate, Ana ağda yayında)

Heyecanlanmak! StarkNet's Bridge'in ilk versiyonu olan StarkGate Alpha'yı artık Goerli test ağında canlı olarak yayınlamaktan heyecan duyuyoruz ve yakında Mainnet konuşlandırması yapılacak.*

\*(güncelleme, 9 Mayıs 2022: StarkGate, Mainnet'te yayında)

**Önemli sorumluluk reddi beyanı: Bu, StarkGate Alpha'daki bir alfa sürümüdür (aşağıdaki ince yazıyı okuyun!).**

![](/assets/starkgate_01.png)

Devam etmeden önce gidip kontrol edin! [StarkGate Testnet](https://goerli.starkgate.starknet.io/),[StarkGate Mainnet](https://starkgate.starknet.io/)

StarkGate, Ethereum ile[StarkNet](https://starknet.io/)arasında bir ağ geçidi görevi görür ve kullanıcıların bir köprüden bekleyebilecekleri her şeyi yapmalarına olanak tanır.

#### **StarkGate'in nasıl çalıştığına dair bilgileri nereden bulabilirim?**

StarkGate'in nasıl çalıştığını anlamak için[teknik dokümantasyonu](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)okuyun ve[koduna bir göz atın](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate). Bunun ilk sürüm olduğunu unutmayın ve hem[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)hem de[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx)nasıl iyileştirileceğine ilişkin geri bildirimlerinizi ve önerilerinizi bekliyoruz.

#### **StarkGate tarafından hangi belirteçler desteklenecek?**

* Goerli'deki StarkGate Alpha, ETH'yi ve diğer birkaç ERC-20 jetonunu destekler. Hem Ethereum hem de StarkNet'teki tam liste ve ilgili sözleşme adresleri bu[repo](https://github.com/starkware-libs/starknet-addresses)mevcuttur.
* Ana ağda, başlangıçta StarkGate Alpha, ücret mekanizmasının kullanımına izin vermek için yalnızca ETH'yi destekleyecektir. Daha sonra WBTC, USDC, USDT ve DAI için destek ekleyeceğiz. Bu[deposunda](https://github.com/starkware-libs/starknet-addresses/blob/master/bridged_tokens/mainnet.json)ilgili sözleşme adreslerini görebilirsiniz.

Yolun ilerleyen kısımlarında, ek belirteçler için destek ekleme mekanizmasını yayınlayacağız.

#### **StarkGate Alpha'nın Mainnet üzerinde hangi güvenlik sınırlamaları olacak?**

Ana ağda StarkGate Alpha, bir Alfa sürümünün kullanılmasıyla ilgili riskleri azaltmak için iki sınırlamayla başlatılır:

1. L1'deki köprüde kilitlenen toplam değer (TVL), her bir belirteç türünün miktarını sınırlayacaktır.
2. StarkGate aracılığıyla L1'den L2'ye (Ethereum→StarkNet) gönderilen her işlemdeki maksimum tutar sınırlı olacaktır.

Bu sınırlamaları kademeli olarak hafifletmeyi ve güven arttıkça tamamen kaldırmayı planlıyoruz. Güncellenen parametreler StarkGate'in[belgelerinde](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)bulunabilir.

![](/assets/starkgate_02.png)

### Alfa ve Anlamı

Her zaman olduğu gibi, size StarkNet'in şu anda**Alfa**aşamasında olduğunu hatırlatıyoruz:

* İşler bozulabilir. Feci bir şekilde başarısız olurlarsa, paranız kaybolabilir (**aşağıdaki sorumluluk reddini okuyun**!).
* Hem StarkNet Alpha hem de StarkGate sözleşmeleri zaman kilidi olmadan yükseltilebilir. Bu tür yükseltmeleri çok önceden duyurmayı beklesek de, olası güvenlik riskleri durumunda (örneğin, kritik bir hata bulunursa), yükseltme çok az uyarıyla veya hiç uyarı yapılmadan uygulanabilir.
* Köprünün kodu ve StarkNet Alpha'nın bölümleri henüz denetlenmedi. StarkGate Alpha'nın ABDK ve Nethermind denetimleri yakında tamamlanacak.

Tüm kullanıcıları, aşağıdaki platformlardan birini kullanarak geri bildirimde bulunarak köprünün geliştirilmesine yardımcı olmaya teşvik ediyoruz:

1. [StarkGate ön uç deposu](https://github.com/starkware-libs/starkgate-frontend)
2. [StarkGate Sözleşmeleri deposu](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate)
3. [StarkNet Şamanları](http://community.starknet.io/)

Sorular ve geliştirici desteği için[StarkNet discord sunucusuna katılın](https://discord.gg/uJ9HZTUk2Y).

### Feragatname

***StarkNet Alpha, tam olarak denetlenmemiş yeni ve karmaşık bir sistemdir. Aynısı StarkNet Köprüsü için de geçerlidir. Tüm karmaşık yazılım sistemlerinde olduğu gibi, hem StarkNet hem de köprü aşırı durumlarda tüm paranızı kaybetmenize neden olabilecek hatalar içerebilir. Bu nedenle,***adımınızı dikkatli atın ve dikkatli olun!******

*StarkNet ekosistemi, StarkWare'in gözetimi ve sorumluluğu olmayan büyük ve hızla büyüyen bağımsız ekipler ve bireyler kümesidir. Ekosistem üyeleri tarafından geliştirilen projelerden herhangi biri, aşırı durumlarda tüm paranızı kaybetmenize neden olabilecek hatalar içerebilir. Ayrıca, daha fazla akıllı sözleşme devreye girdikçe, istenmeyen zararlı hatalar ve hatta kötü niyetli dolandırıcılık ve hile yapma potansiyeli artar. Bu nedenle, StarkNet'teki tüm akıllı sözleşmelere Ethereum'daki akıllı sözleşmelere davrandığınız gibi davranın ve yalnızca güvenmek için iyi nedenleriniz olanların güvenli olduğunu kullanın.*