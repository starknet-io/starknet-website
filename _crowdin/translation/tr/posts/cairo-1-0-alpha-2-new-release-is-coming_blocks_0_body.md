### TL;DR

* Dile bir dizi yeni özellik getiren Kahire 1.0-alpha.2'yi yayınlıyoruz
* Artık bir ERC20 sözleşmesi uygulamak mümkün
* Bu yeni dil özellikleri, gelecek StarkNet-v0.11.0 sürümünde uygulanacaktır.

### Taze yeni özellikler!

Kahire 1.0 hızlı gelişme hızını sürdürüyor. Bugünkü sürüm, diğer şeylerin yanı sıra, bir ERC-20 sözleşmesi yazmak için gerekli tüm özellikleri sunuyor.

Bazı yeni özelliklerden bahsetmek için:

* sözlükler
* Sözleşmelerdeki olaylar
* Depolama değişkenlerini eşleme
* Özellik desteği
* Tür çıkarımı
* Yöntemler

GitHub [deposundaki tam listeye bakın.](https://github.com/starkware-libs/cairo)

Bir olayın kullanım durumunu ve depodaki eşlemeleri göstermek için bir ERC20 sözleşmesi örneğine bir göz atalım (tam somut örnek, elbette,[GitHub](https://github.com/starkware-libs/cairo/blob/main/crates/cairo-lang-starknet/test_data/erc20.cairo)):

![](/assets/0_i4ch5-4rxxal4rkt.png)

### Suya atlamak!

İki paralel vektör üzerinde çalışmaya devam ediyoruz:

1. Kahire 1.0'ı eski Kahire ile tam özellikli uyumluluğa doğru tam hızda geliştirin.
2. Kahire 1.0'da yazılan sözleşmeleri destekleyecek Starknet v0.11.0'ı geliştirin

Bu arada, geliştiricileri Kahire 1.0 ile yazmaya ve ona aşina olmaya teşvik ediyoruz.

Herhangi bir sorunuz için — Kahire 1.0 Discord[kanal](https://discord.com/channels/793094838509764618/1065544063245365288)kullanabilirsiniz.

Herhangi bir öneri veya geri bildirim için — Kahire deposunda[sayı](https://github.com/starkware-libs/cairo/issues)açmaktan çekinmeyin.