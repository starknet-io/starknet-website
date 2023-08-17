### TL;DR

* **Kahire 1.0 açık kaynaklıdır! Bu, StarkNet yığınının açık kaynak kullanımına yönelik yalnızca ilk adımdır.**
* Şimdi Kahire 1.0 derleyicisine[ilk bakış](https://github.com/starkware-libs/cairo)sunuyoruz. Artık temel Kahire 1.0 kodunu denemeye başlayabilirsiniz
* Kahire 1.0 özünde Rust'a çok benziyor
* Bunu bir çıkış değil, ilk tatma olarak kabul edin. Daha fazla iyileştirme yolda. Derleyicinin ilk sürümünün gelecek yılın 1. çeyreğinin başlarında çıkması planlanıyor.
* Kahire 1.0 henüz StarkNet'te desteklenmiyor. Gelecek yılın 1. çeyreğinde StarkNet'te desteklenecek.

### Giriş

2020'de, doğrulanabilir hesaplamayı destekleyen bir Turing-complete programlama dili olan[Cairo](https://eprint.iacr.org/2021/1063.pdf)yayınladık. Kahire bir montaj dili olarak başladı ve giderek daha anlamlı hale geldi. İki ay önce, mevcut durumdaki bazı önemli sorunları ele alan[Kahire 1.0](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)duyurduk:

* Kahire'nin sözdizimi başlangıcından bu yana önemli ölçüde gelişme gösterse de, geliştirici deneyimi her zaman gelişebilir. Cairo 1.0, aynı mantığı yazmayı çok daha kolay ve daha az hataya açık hale getiren, tamamen yazılmış bir pas esintili dildir.
* Mevcut derleyici, StarkNet'in kendisi ile aynı depoda geliştirildiğinden, dil değişikliklerini izlemeyi zorlaştırır. Kahire 1.0 derleyicisi, daha hızlı özellik geliştirme ve daha fazla topluluk katılımı için sıfırdan yazılmıştır.
* Her hesaplama artık kanıtlanabilir. Şu anda, bir Kahire programı belirli girdilerle başarısız olabilir (örneğin, bazı hesaplama dallarında bir \`assert 1=2\` talimatına ulaşarak), hesaplamayı kanıtlanamaz hale getirebilir. Kahire 1.0 ile programlar mümkün olan her dalda kanıtlanabilir. Bu, StarkNet'teki DOS koruması ve sansür direnci için özellikle önemlidir.

Bugün, geliştirmeyi bir kamu deposuna ve**açık kaynak Kahire 1.0'a taşıyarak yukarıdaki hedeflere ulaşmada ilk kilometre taşını işaretliyoruz!**Geliştiriciler artık ilk kez basit Kahire 1.0 programlarını derleyebilir ve yürütebilir. Bu, geliştiricilerin Kahire 1.0 ile denemeye başlamalarına ve bu aşamada henüz StarkNet'te uygulayamasalar bile yeni özelliklere yavaş yavaş alışmalarına olanak tanır.

### Mevcut yetenekler

Şu anda, temel yerel Kahire programlarını derleyebilir ve çalıştırabilirsiniz. Sözdizimi/dil iyileştirmelerinin çoğu hala devam ederken, bu Kahire 1.0'a alışmanızı ve güncellemeler geldikçe keyfini çıkarmanızı sağlar.

**StarkNet sözleşmelerinin yazılmasının hala desteklenmediğini unutmayın.**StarkNet sözdizimi (depolama değişkenleri / çağrı sözleşmeleri / olaylar ve diğer sistem çağrıları) önümüzdeki haftalarda eklenecektir.

### Kod örnekleri

Eski sözdizimi ile Kahire 1.0 arasındaki farkları göstermek için, n'inci Fibonacci sayısını bulmanın birkaç farklı uygulamasını/tadını göstermeyi seçtik.

### Örnek I: Eşleştirme ifadeleri

Kahire 1.0'da rust benzeri[maç](https://doc.rust-lang.org/rust-by-example/flow_control/match.html?highlight=match#match)ifadeleri kullanabilirsiniz. Referans iptaline neden olabilecek if/else ifadelerinden artık korkmayacaksınız!

![](/assets/code01.png)

### Örnek II: Veri türleri

Cairo 0, keçeler ve işaretçilerle çalışırken, Cairo 1.0'da dildeki karmaşık veri türlerine yerel erişimimiz var. Aşağıda, ilk n Fibonacci sayısından oluşan bir dizi oluşturan bir örnek bulabilirsiniz.

![](/assets/code02.png)

Yukarıda görebileceğiniz gibi, doğrudan bellek işaretçileriyle çalışmak yerine, `Array::<felt>\` türü ve \`array_append\`işlevi.

### Örnek III: & sahiplik yapıları

Aşağıdaki kod, Kahire 1.0'daki yapıların kullanımını göstermektedir.

![](/assets/code03.png)

> Aşağıdaki paragraf, seyirciler arasındaki Rustacean'lar içindir. Cairo 1.0, belleği paslanmaya benzer şekilde yönetir. Özellikle[sahiplik ve ödünç alma](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html)kavramlarını kullanır. Böylece, \`FibResult\` yapısının bir üyesine erişerek (bu durumda \`result.value\`), \`result\` öğesini taşıdık, yani FibResult kopyalanabilir olmadığı sürece kopyalayamayız. \`result.index\` içinde tekrar erişin. Bunun üstesinden gelmek için \`FibResult\` tipinin \`#\[türet(Kopyala)]\` özniteliğini ekliyoruz. Gelecekteki sürümlerde, yapılar için otomatik yapısöküm ekleyeceğiz. Bu, bir üyenin sahipliğini diğerlerine dokunmadan taşımanıza olanak tanır (özellikle, yukarıdaki kod \`FibResult\` kopya özelliğine sahip olmasa bile derlenir).

**Özellikle, Kahire 1.0'ın Kahire'nin orijinal (belirleyici olmayan salt okunur) bellek modelini tamamen soyutladığını unutmayın.**

## Örnek IV: Hata yayılımı

Aşağıdaki kod n'inci Fibonacci sayısını hesaplar, ancak önceki örneklerden farklı olarak tüm girişler uint128 türündedir. Bunun, Kahire 0'daki birimleri ele almanın önemli bir sıkıntı noktasını çözdüğünü unutmayın. Burada uint128 (ve gelecekte uint256) yerel tiplerdir.

![](/assets/0_s8bhjf_ade3carmi.png)

İki 128 bit tam sayının eklenmesi taşmaya neden olabilir. Yukarıdaki kod, ara eklemelerden birinde taşma durumunu işlemek için[Seçenek sıralaması](https://doc.rust-lang.org/rust-by-example/std/option.html)ve[soru işareti işleci](https://doc.rust-lang.org/rust-by-example/std/result/question_mark.html)kullanır. Bunu, sağlamlığı garanti etmek için \`unit256_check\` işlevinin çağrılması gereken[geçerli](https://github.com/starkware-libs/cairo-lang/blob/9889fbd522edc5eff603356e1912e20642ae20af/src/starkware/cairo/common/uint256.cairo#L31)uint256 ekleme sözdizimiyle karşılaştırın. Ayrıca yakın gelecekte \`panic\` kavramını dile ekleyeceğiz (rusttaki[panik](https://doc.rust-lang.org/rust-by-example/std/panic.html)makrosuna benzer) ve ek taşma gibi basit hatalar yakalanamayacak ve otomatik olarak yayılacaktır, yani uint eklerken \`Option\` veya \`?\` kullanmanıza gerek kalmayacak.

## Kendin dene

Artık şu anda desteklenen Kahire 1.0 programlarını derleyebilir ve çalıştırabilirsiniz! \`cairo</a>

. Başlık altında, yürütme için[Lambdaclass](https://lambdaclass.com/)tarafından geliştirilen[Rust Cairo VM](https://github.com/lambdaclass/cairo-rs)kullanıldığını unutmayın.</p> 

Başlamanıza yardımcı olacak daha fazla örnek bulabilirsiniz[burada](https://github.com/starkware-libs/cairo2/tree/main/examples). Bunun derleyici geliştirmeye yalnızca ilk bakış olduğunu unutmayın; önümüzdeki haftalarda derleyici ile birlikte CLI'yi iyileştireceğiz.



## Gelecek planları

İlk Çeyrek için planlanan Derleyici'nin ilk sürümünün odak noktası, StarkNet'in Kahire 1.0'daki tüm mevcut işlevlerini desteklemektir. Ek olarak, Kahire 1.0 derleyicisinin yeteneklerini genişletmek için çalışıyoruz. Önümüzdeki haftalarda şunları bekleyebilirsiniz:

* StarkNet yetenekleri — akıllı sözleşmeler yazmak ve sistem çağrılarını kullanmak.
* döngüler
* Yeni kitaplık işlevleri
* Geliştirilmiş dil sunucusu
* Yerel bir StarkNet gazı kavramı

Bizi izlemeye devam ettiğinizden ve derleyici ilerlemesini takip ettiğinizden emin olun!