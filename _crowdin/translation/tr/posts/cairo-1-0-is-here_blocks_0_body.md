### TL;DR

* Kahire 1.0 ilk sürümü burada!
* Geliştiriciler, Kahire 1.0 programlarını yazmaya ve test etmeye başlayabilir
* Kahire'nin eski sürümüyle özellik eşitliğine önümüzdeki haftalarda ulaşılacak
* StarkNet sözleşmeleri için destek, yaklaşan StarkNet Alpha sürümüne eklenecektir.

### Arka plan

Kahire 1.0'ın ilk genel sürümünün kullanıma sunulduğunu duyurmaktan heyecan duyuyoruz. Bu, ilk olarak 2020'de STARK tarafından kanıtlanabilen programları verimli bir şekilde yazmak için Turing-complete programlama dili olarak tanıtılan Kahire'nin evriminde önemli bir kilometre taşını işaret ediyor. Cairo 1.0, Rust benzeri üst düzey bir dildir. Rust gibi, geliştiricilerin kolayca verimli ve güvenli kod yazmasına izin vermek için tasarlanmıştır.

Başlangıcından bu yana, Kahire, 790 milyar doların üzerinde[işlem gerçekleştiren, 300 milyondan fazla işlemi gerçekleştiren ve 90 milyondan fazla NFT basan, tümü zincir dışı](https://dashboard.starkware.co/starkex)ve Ethereum'a yerleşen Katman-2 uygulamaları oluşturmak için kullanıldı. STARK kanıtları tarafından garanti edilen matematiksel bütünlük. Kahire, genel olarak blockchain[ekosisteminde](https://defillama.com/languages)en çok kullanılan 4. programlama dili oldu. Kahire 1.0'ın piyasaya sürülmesiyle, güvenliği ve rahatlığı artıran yeni özellikler sunarken dili daha da erişilebilir ve kullanıcı dostu hale getirmeyi amaçlıyoruz.

Kahire 1.0'daki en önemli değişikliklerden biri söz dizimidir. Okuması ve yazması daha kolay, geliştirici dostu bir dil oluşturmak için**Rust**ilham aldık. Kahire'nin yeni sürümü, daha güvenli kod yazmaya (kesinlikle yazılmış, sahiplik ve ödünç alma, vb.) ve aynı zamanda daha anlamlı olmasına izin verir.

Kahire 1.0 ayrıca, her</strong>Kahire çalıştırmasında**kanıtlanabilmesini sağlayan yeni bir ara temsil olan Sierra'yı sunar. Bu, Kahire 1.0'ı, güçlü DoS koruması ve sansür direnci sağlayabildiği StarkNet gibi izinsiz bir ağda kullanım için özellikle çok uygun hale getirir. [önceki](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)gönderimizde Sierra hakkında daha fazla bilgi edinebilirsiniz.</p>

## İlk tat!

### Bugün ne yapabilirsin?

Geliştiriciler, Kahire 1.0 programlarını yazmaya, derlemeye ve test etmeye başlayabilir! Geliştiricileri, Kahire 1.0 ile denemeye başlamaya ve yeni sözdizimine ve özelliklere alışmaya teşvik ediyoruz.

Kahire 1.0 hala aktif olarak geliştirildiğinden ve sürekli olarak yeni özellikler eklendiğinden, en son güncellemeler için[Kahire deposu](https://github.com/starkware-libs/cairo/)bakın.

### Sıradaki ne?

Şu anda, Kahire 1.0'da Kahire'nin eski sürümünde desteklenen bazı özellikler hala eksik ([ayrıntılar için bu tabloya bakın](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)). Önümüzdeki birkaç hafta içinde beklenen bir sonraki dönüm noktamız, Kahire 1.0'ın eski sürümle aynı özellikte olmasını sağlayacak. Bu kilometre taşına[doğru ilerlemeyi buradan](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)takip edebilirsiniz.

### Starknet desteği

Kahire 1.0'da StarkNet sözleşmelerinin yazılması desteklenmektedir (ancak bazı özellikler hala eksiktir). Ancak StarkNet, Kahire 1.0 sözleşmelerinin konuşlandırılmasını ve yürütülmesini henüz desteklememektedir. Önümüzdeki haftalarda planlanan StarkNet Alpha V0.11.0, Kahire 1.0 sözleşmelerini devreye alma ve çalıştırma becerisini tanıtacak. v0.11.0'a yükseltme, yalnızca Kahire 1.0 sözleşmelerini çalıştıran bir sisteme doğru Geçiş Döneminin başlangıcını işaretleyecektir. Bu Geçiş Dönemi, birkaç ay sonra beklenen[Regenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)ile sona erecek.

![](/assets/0_odxbxeacqdwizlfw.jpg)

### Hadi yapalım!

StarkNet'in amacı, STARK'ların matematiksel bütünlüğünü kullanarak Ethereum'u katlanarak ölçeklendirmek ve Kahire'nin amacı, bu üstel ölçeği geliştiriciler için erişilebilir kılmaktır. Erişilebilirlik, verimli, okuması ve yazması kolay ve kullanımı güvenli bir programlama dili anlamına gelir. Kahire 1.0 sürümünün daha da fazla geliştiriciye StarkNet'e katılmaları ve küresel talebi karşılamak için Ethereum'u ölçeklendirmeleri için ilham vermesini umuyoruz.