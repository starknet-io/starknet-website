### **TL;DR**

* [StarkNet Planets Alpha](https://voyager.online/)- Mainnet'e giden yolumuzun ilk adımı - şimdi Testnet'te yayında!
* [StarkNet](https://starkware.co/product/starknet/)izinsiz bir Turing-complete ZK-Toplamasıdır¹.
* Geliştiriciler, seçtikleri iş mantığını akıllı bir sözleşmede uygulayabilir ve bunu izinsiz olarak StarkNet'te dağıtabilir.
* StarkNet'in durum geçişlerinin zincir dışı olduğu ve ardından zincir üzerinde doğrulandığı kanıtlanmıştır.
* Ethereum'a çok benzer şekilde, kullanıcılar bu akıllı sözleşmelerle doğrudan etkileşim kurabilir.

### **giriiş**

Ocak 2021'de</a>StarkNet</a>

yol haritasınıduyurduk. Ölçeklenebilirlik çözümlerinin Kutsal Kâse'si, (i) merkezi olmayan bir ağ üzerinden çalıştırılan (ii) şekillendirilebilirlik (iii) ile isteğe bağlı akıllı sözleşmeleri destekleyecektir. Bugün, Adım 1: StarkNet Planets Alpha'nın test ağında dağıtımını duyuruyoruz. Alpha sistemi isteğe bağlı akıllı sözleşmeleri destekler. Şekillendirilebilirlik, bu yıl daha sonra desteklenecek ve ademi merkeziyetçilik bunu takip edecek.</p> 

Tamamen şeffaf olmak ve beklentileri doğru belirlemek bizim için çok önemli. Bu gönderinin amacı, neyin zaten desteklendiğini ve hangi işlevlerin hala eksik olduğunu net bir şekilde listelemektir. Bugün yayınladığımız şey, testnet üzerinde Work in Progress. Bu erken sürümün, StarkNet ve araçları etrafında sağlıklı bir ekosistemin oluşmasına yardımcı olacağına inanıyoruz. Geliştiricileri bizimle birlikte ağ oluşturmaya dahil etmeye ve topluluktan sürekli geri bildirim almaya can atıyoruz.



### **StarkNet Planets Alpha'da neler var?**

**İşlevsellik:**Alfa, geliştiricilerin genel hesaplama için StarkNet sözleşmeleri yazmasına ve dağıtmasına izin verir. Beyaz liste yoktur - herhangi bir geliştirici istediği sözleşmeyi yazıp dağıtabilir. Kullanıcılar, onlara işlem göndererek ve durumlarını inceleyerek bu sözleşmelerle etkileşime girebilir. Tüm sözleşmeler tek bir durumda mevcuttur². Bu duruma yapılan güncellemelerin zincir dışı olduğu kanıtlanmıştır ve zincir üzerinde doğrulanmıştır — Alfa'da, doğrulama test ağında yapılır.

**StarkNet OS:**Yukarıdaki işlevsellik, StarkNet OS dediğimiz yeni bir "işletim sistemi" tarafından desteklenir. StarkNet üzerinde*kanıtlanabilir*durum geçişi sunar. Ethereum geliştiricileri, bunu EVM'nin eşdeğeri olarak düşünebilir: akıllı sözleşme işlevlerinin başlatılmasından, sözleşmelerin depolanmasından vb. sorumludur. StarkNet işletim sisteminin mimarisini detaylandıran ayrı bir yazı yayınlayacağız.

**Alfa'da ne yok?**Alpha, L1<>L2 etkileşimi, zincir üstü veriler ve şekillendirilebilirlik gibi bazı temel yeteneklere hâlâ sahip değil. Bunlar hakkında daha fazlası aşağıda.



#### **Ayaklarınızı Islatmak**

[öğreticimiz ve belgelerimizle başlayın](https://www.cairo-lang.org/docs/hello_starknet/).

Ardından, StarkNet'te yazıp dağıttığımız[örnek AMM akıllı sözleşmesini](http://cairo-lang.org/docs/hello_starknet/amm.html)okuyabilirsiniz. Bu basit bir AMM'dir ve onunla[burada](https://starkware-amm-demo.netlify.app/swap)etkileşim kurabilirsiniz. Artık StarkNet'te akıllı sözleşmeler yazmaya ve dağıtmaya hazırsınız. StarkNet için blok gezgini -[Voyager](https://voyager.online/)- herkesin StarkNet'in durumunu incelemesine izin verir.\
Biz ek özellikler sunmaya devam ederken, ayaklarınızı ıslatarak StarkNet'i geliştirmeye daha iyi hazırlanacağınıza inanıyoruz. Geliştiriciler için atölye çalışmalarının yanı sıra ilk hackathon'u planlamakla meşgulüz.



### **StarkNet için Sonraki Adımlar**

Alfa'da hala eksik olan temel yetenekler, önümüzdeki haftalardan itibaren kullanıma sunulacak. Bunlar:

* L1<>L2 Etkileşim, örneğin L1'de para yatırma ve çekme yeteneği.
* Zincir üstü veriler: Ethereum'daki tüm depolama değişikliklerinin yayınlanması.
* Şekillendirilebilirlik: sözleşmelerin birbirleriyle iletişim kurmasına izin vermek.

Bu özellikler yerinde olduğunda, StarkNet'i Ethereum Mainnet'e getirmeye hazır olacağız. Bu adıma StarkNet'in evrim Takımyıldızları diyoruz ve ona ulaştığımızda, Ethereum Mainnet ölçeklenebilir L2 dApp'leri üzerinde izinsiz olarak konuşlandırabileceksiniz.



#### **StarkNet Ekosistemi**

StarkNet'in etrafında şekillenen ekosistem bizi çok heyecanlandırıyor, bu yüzden şu ana kadar işbirlikçilerimize teşekkür etmek için ara vereceğiz.

[Nethermind](https://twitter.com/nethermindeth)ve Nubia ekibi,[Alexey Akhunov](https://twitter.com/realLedgerwatch)(Erigon) &[Igor Mandrigin](https://twitter.com/mandrigin)(gateway.fm),[Iddo Bentov](https://www.cs.cornell.edu/~iddo/),[dOrg](https://twitter.com/dOrg_tech),[Prof. Tim Roughgarden](https://twitter.com/algo_class),[Prof. Jeremy Avigad](https://www.andrew.cmu.edu/user/avigad/)& Yoav Seginer, sonuncusu ama en önemlisi —[Paradigm](https://twitter.com/paradigm)takımı.\
İlk ortaklarımız —[dYdX](https://twitter.com/dydxprotocol),[Immutable](https://twitter.com/Immutable),[DeversiFi](https://twitter.com/deversifi), ayrıca[Sorare](https://twitter.com/SorareHQ),[Celer](https://twitter.com/CelerNetwork)ve diğerleri — Birinci Günden itibaren bize paha biçilmez girdiler sağlıyor ve bir prodüksiyon oluşturmamıza olanak tanıyor gerçek kullanıcılar için kaliteli ağ.\
32 Bobbin Threadbare[](https://twitter.com/bobbinth)[Daniel Kroni](https://github.com/danielkroeni/cairo-playground/blob/main/anon-bank/README.md),[Adrian Hamelink](https://twitter.com/adr1anh),[Perama](https://twitter.com/eth_worm),[Francesco Ceccon](https://twitter.com/ceccon_me),[Ilian Malchev](http://twitter.com/imalchev), ve[İskenderiye ekibi](https://blockchainpartner.fr/).

Topluluğun her cephede neler yaratacağını görmek için can atıyoruz: geliştirici araçları, içerik ve tabii ki geliştirecekleri StarkNet uygulamaları. Sohbeti en sevdiğiniz ortamda devam ettirelim:[discord](https://discord.gg/uJ9HZTUk2Y),[Twitter](https://twitter.com/CairoLang),[e-posta](mailto:info@starkware.co)ve yakında en merkezi olmayan iletişim biçimlerini kullanarak: f2f.

¹ ZK-Rollup teriminin hayranı değiliz çünkü - matematiksel olarak - sıfır bilgi değildir, ancak ne demek istediğimizi hepiniz biliyorsunuz

² Ana ağdaki mevcut StarkEx konuşlandırmaları için sağlanan ayrı durumun aksine

**Güncelleme (Kasım 2021):**StarkNet Alpha, Ethereum Mainnet'te yayında