### TL;DR

StarkNet Alpha 1'in iki yeni özelliği var:

* L1<>L2 etkileşimi
* Zincir üstü veriler

### giriiş

Yılın başında, StarkWare'in Ethereum üzerinden bir L2 ağı olarak çalışan izinsiz merkezi olmayan STARK tabanlı ZK-Rollup¹ olan[StarkNet](https://starkware.co/product/starknet/)inşa ettiğini duyurduk. StarkNet, herhangi bir dApp'in, Ethereum'un şekillendirilebilirliğinden ve güvenliğinden ödün vermeden hesaplaması için sınırsız ölçek elde etmesine izin verir.

Geçen ay[StarkNet Alpha 0](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)dünyaya yayınlandı. Geliştiriciler ilk kez herhangi</a>akıllı sözleşmeyi

yazabiliyor ve bunu izinsiz olarak bir ZK-Toplaması'na dağıtabiliyor. Kullanıcılar işlemleri ağa Ethereum tarzı gönderebilirler.</p> 

Bugün yeni bir sürüm yayınlıyoruz; Alfa 1. Geliştiricilerin yeni özelliklerle mümkün olan en kısa sürede etkileşime geçmesini sağlamak için sürekli olarak özellikler yayınlıyoruz. Bunun geri bildirim döngüsünü sıkılaştıracağını ve topluluk geri bildiriminin StarkNet'i hızla iyileştirmesine olanak tanıyacağını tahmin ediyoruz.



### **Alfa 1 Özellikleri**



#### L1<>L2 Etkileşimi

Alpha 1, geliştiricilerin L1 ve L2 arasında kesintisiz işlem akışları uygulamasına olanak tanıyan bir L1<>L2 mesajlaşma protokolünü içerir. Geliştiriciler artık L1'deki sözleşmelerden L2'deki sözleşmelere ve tersi yönde mesajlar gönderebilir.

ZK-Toplamalarının güzelliklerinden biri, durum güncellemelerinin herhangi bir gecikme olmaksızın nihai olmasıdır. Bu, L2'den L1'e gönderilen mesajların hedef sözleşmelerine anında iletilebileceği anlamına gelir. Bu, katmanlar arasında gerçekten birlikte çalışabilir uygulamalar oluşturmanın yolunu açar.

Denemek ister misiniz? Başlamanın en iyi yolu, öğreticiyi[burada](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html)takip etmektir.

L1<>L2 protokolümüz, bu alandaki önceki çalışmaları tasarımımızı etkileyen diğer L2'lere (özellikle İyimserlik ve Arbitrum) çok şey borçludur.



#### Zincir Üzerinde Veri Kullanılabilirliği

StarkNet'in durum güncellemesi artık Ethereum'da zincir üstü veri olarak da yayınlandı. Bu, herhangi bir kullanıcının StarkNet'in durumunu L1 verilerinden tam olarak oluşturmasına izin verir. Her durum güncellemesi, durum farkını, yani hangi depolamanın değiştirildiğini ve yeni değerini içerir.

Burada da ZK-Rollup gücünü gösteriyor. Tüm işlemlerin verilerinin zincir üzerinde gönderilmesi gereken İyimser Toplamaların aksine, ZK-Toplamalarında yalnızca durum farkını türetmek için gereken mutlak minimum veriler zincir üzerinde gönderilir.

En iyi örneği ele alalım, fiyat kehanetleri. Bir fiyat kehanetini güncelleme işlemi genellikle birden fazla işlem içerir ancak yalnızca bir depolama hücresini günceller; çiftin fiyatı. İyimser Toplamada fiyat kehaneti işlemlerini içeren bir durum güncellemesi için gereken zincir üstü veriler, güncelleme sayısıyla doğrusal olarak artarken, ZK Toplamasında her zaman tek bir depolama güncellemesi olacaktır.

Ayrıca, yayınlanan verilere sıkıştırma algoritmaları uygulanabilir ve bunların geçerliliği, zincir üzerindeki ayak izini daha da azaltan STARK kanıtı ile tasdik edilecektir. StarkNet'in gelecek sürümleri, bu alanda yenilikçi optimizasyonlar sunacaktır.



#### StarkNet işletim sistemi

Ayrıca StarkNet İşletim Sistemi kodunu da yayınlıyoruz. StarkNet İşletim Sistemi, StarkNet'i çalıştıran Kahire programıdır. İşletim sistemi, ağ üzerinde yapılan her şeyi yönetir — sözleşme dağıtımı, işlem yürütme, L1<>L2 mesajları ve daha fazlası. StarkNet OS mimarisi ve tasarımı ayrı bir gönderide detaylı olarak anlatılacaktır.



#### Ekstra Özellikler

StarkNet Alpha sadece gelişmekle kalmadı, aynı zamanda Kahire'yi de sürekli iyileştiriyoruz. Kahire v0.3.0'daki yeni özelliklerin tam açıklaması için sürüm notlarını[buradan](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.3.0)kontrol edin.



### Ekosistem Büyüyor

StarkNet Core üzerindeki sürekli çalışmanın yanı sıra, ekosistemin StarkNet üzerindeki çalışmaları sürekli genişlemektedir. Ekosistemdeki en yetenekli ekiplerden bazılarıyla işbirliği yapmaktan heyecan duyuyoruz.

StarkNet'in ilk Tam Düğüm çalışması olan Fermion, Erigon (eski adıyla TurboGeth) ekibi tarafından geliştirildi. Ethereum üzerinde çalışmaktan edindikleri muazzam bilgilere dayanarak, STARK kanıtlarının sunduğu ölçekten yararlanırken, Ethereum için inşa edilirken öğrenilen birçok dersi içeren güçlü bir Tam Düğüm oluşturmak için onlarla birlikte çalışabiliyoruz.

Nethermind, EVM'den Kahire'ye bir derleyici olan Warp üzerinde çalışıyor. Yeni araçları yalnızca hazır olduklarında sunma kültürümüze bağlı olarak, tek söyleyebileceğimiz, bu cephede çok yakında heyecan verici haberler beklemek! Yine de warp hızında hareket ettiklerini söyleyebiliriz.



### Gelecek Ne Tutar

StarkNet'e giden yolumuzdaki bir sonraki durak, kontratların birbiriyle etkileşime girmesine izin veren şekillendirilebilirlik olacak. Bizi izlemeye devam edin.

[StarkWare](https://starkware.co/)

1 Daha önce de söylediğimiz gibi, ZK-Rollup artık yaygın olarak kullanılan bir terimdir, ancak çok yanıltıcıdır: bu çözümler (şu anda) sıfır bilgi sunmuyor.

**Güncelleme (Kasım 2021):**StarkNet Alpha, Ethereum Mainnet'te yayında