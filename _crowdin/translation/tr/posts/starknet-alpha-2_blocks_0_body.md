### TL;DR

* StarkNet artık StarkNet'in Takımyıldızları aşamasını tanımlayan ana özellik olan birleştirilebilirliği destekliyor.
* StarkNet için bir test çerçevesi yayınlıyoruz — geliştiriciler artık sözleşmelerini yerel ve etkili bir şekilde test edebilirler.
* Bu sürüm, Merkle-Patricia Tries desteği ve bitsel işlemler için bir yerleşik gibi birkaç önemli performans geliştirmesi içerir.
* Ekosistem cephesi:

1. **Standart Sözleşmeler**: OpenZeppelin, Ethereum için yaptıkları gibi StarkNet için standart sözleşmeler geliştirecek!
2. **EVM->Kahire Derleyici**: Warp ekibi @ Nethermind, ERC-20 Solidity kodunun StarkNet sözleşmelerine göre derlendiğini gösterdi

### Arka plan

StarkNet, izinsiz, merkezi olmayan bir Validity-Rollup'tur ("ZK-Toplaması" olarak da bilinir). [yol haritasını](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)yılın başında açıklamıştık. Şu anda halka açık bir Ethereum test ağında çalışan[Alpha](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), L1<>L2 mesajlaşma ve zincir üstü verilerle herhangi bir iş mantığını uygulayan akıllı sözleşmelerin izinsiz dağıtımını zaten destekliyor. Ayrıca, herhangi bir kullanıcının ağa izinsiz, Ethereum tarzı işlem göndermesine izin verir.

Bu sürüm: StarkNet Alpha 2, Gezegenlerden Takımyıldızlara ilerlememizi sağlayan temel özelliği içerir: dağıtılan akıllı sözleşmeler arasında birleştirilebilirlik.

### Özellikler

StarkNet Alpha 2 aşağıdaki özellikleri sunar:

* **Şekillendirilebilirlik:**StarkNet Alpha artık akıllı sözleşmeler arasındaki etkileşimi destekliyor — programın ilerisinde! Bu yükseltmenin güzelliği, geliştiricilerin Ethereum ile neredeyse aynı deneyimi bekleyebilmesidir; çağrılar senkronizedir ve fonksiyon çağrıları olarak kullanılabilir. StarkNet tarafından piyasaya sürüldüğü şekliyle hem sınırsız hesaplama ölçeğinden hem de sözleşme düzenlenebilirliğinden yararlanacak yeni uygulamaları sabırsızlıkla bekliyoruz. Bu özelliğin nasıl kullanılacağını anlamak için bu[öğreticiyi](https://www.cairo-lang.org/docs/hello_starknet/calling_contracts.html)izleyerek başlayabilirsiniz. Geri bildiriminizi duymak ve[StarkNet discord](https://discord.gg/uJ9HZTUk2Y)üzerinde neler inşa ettiğinizi görmek isteriz.
* **Yerel Test Çerçevesi:**Siz istediniz ve biz teslim ettik —[daha iyi bir test çerçevesi](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/starknet/testing). Bu, geliştiricilerin StarkNet sözleşme dağıtımlarını ve etkileşimlerini herhangi bir dış bağımlılık olmadan yerel olarak test ederek dApp geliştirmelerini hızlandırmalarına olanak tanıyacak. Bu sürüm yalnızca L2 etkileşimini içerir, sonraki sürümler işlevselliği ve kullanım kolaylığını genişletecektir. Öğreticiyi[buradan](https://www.cairo-lang.org/docs/hello_starknet/unit_tests.html)kontrol edin; bu özellikle ilgili geri bildirimlerinizi duymak isteriz.
* **Performans geliştirmeleri:**

**Patricia Trees:**Merkle-Patricia Tree durumu taahhüdüne geçerek StarkNet'in tasarımını daha yüksek çıktıları ve daha kısa kanıt oluşturma süresini destekleyecek şekilde geliştirdik ([belge](https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/cairo/common/patricia_utils.py)). Bu değişiklik, çok daha büyük blokların oluşturulmasına izin vererek işlem başına maliyeti düşürür. Daha sofistike bir devlet taahhüdüne geçiş, StarkNet işletim sisteminin temel bir bileşeni olan ZKP dili olan Cairo tarafından sağlandı.

**Bitsel İşlemler:**StarkNet sözleşmelerinde çok daha verimli bitsel işlemleri desteklemek için bir[yerleşik](https://www.cairo-lang.org/docs/how_cairo_works/builtins.html)ekledik ([belge](https://www.cairo-lang.org/docs/reference/common_library.html#common-library-bitwise)).

* **Goerli:**StarkNet, Ropsten'den[Goerli](https://goerli.etherscan.io/address/0xee02F29aE9A4988aE064940bF11954d6eafE26Ac)geçiyor! Sonunda sistemimizi Ropsten Tanrılarının kaprislerinden kurtardık. Alpha 2 artık daha istikrarlı bir geliştirme ortamı üzerinde çalışacak.

### Ekosistem

StarkNet ekosistemi sürekli büyüyor ve en son haberleri paylaşmaktan mutluluk duyuyoruz:

* **Standart Sözleşmeler**: OpenZeppelin ile StarkNet'in standart sözleşmeler kitaplığında çalışmaktan onur duyuyoruz. Ethereum'un standartlaştırılmış sözleşmeleri üzerindeki kanonik çalışmaları hepimize günlük olarak hizmet ediyor ve burada da etkili olacaklarından eminiz.
* **EVM->Kahire Derleyici**: Nethermind'in Warp ekibi[bir ERC-20 sözleşmesinin EVM bayt kodundan bir StarkNet sözleşmesine ve StarkNet'te konuşlandırmaya](https://medium.com/nethermind-eth/warp-your-way-to-starknet-ddd6856875e0)aktarımını gösterdi. Bu çaba hızla ilerliyor ve bir sonraki hedefimiz keyfi akıllı sözleşmelerin Yul'dan Kahire'ye aktarımı.
* **Maker-on-StarkNet**: Maker protokolünü StarkNet üzerinden uygulamak için Maker DAO'ya bir[teklif](https://forum.makerdao.com/t/mip39c2-sp19-adding-the-starknet-engineering-core-unit-sne-001/9745)sunuldu. İlk aşama, Ethereum'dan StarkNet'e bir DAI köprüsü öneriyor ve ardından StarkNet'te DAI basımı yapılıyor.
* **StarkNet/Kahire Denetim Hizmetleri**: StarkNet akıllı sözleşme ve Kahire programları denetim hizmetleri sağlamak için birden fazla denetim firmasıyla çalışıyoruz.

### Köşedeki Ana Ağ

Beyaz listeye alınmış bir dizi uygulama ile kademeli olarak başlayarak StarkNet Alpha Mainnet lansmanına hazırlanıyoruz. Birkaç proje devam ediyor ve gün geçtikçe daha fazlası aktif olarak ekleniyor. Partiye katılmak için[discord](https://discord.gg/uJ9HZTUk2Y)üzerinden ulaşmaya davetlisiniz.

**Güncelleme (Kasım 2021):**StarkNet Alpha, Ethereum Mainnet'te yayında