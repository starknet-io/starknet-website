### TL;DR

* StarkWare, müşterilerin önceliklerine göre seçebilecekleri bir dizi Veri Kullanılabilirliği (DA) modu sunar.
* STARK kanıtları için Veri Kullanılabilirliğine yönelik üç yaklaşım vardır ve bunların tümü halihazırda üretimde mevcuttur:\
  —**Toplama**: defter doğrudan blok zincirinde yayınlanır\
  —**Validyum**: defteri bir Veri Kullanılabilirliği Komitesi korur, zincirde depolanan yalnızca bir hash ile\
  —**Volition**: uygulamalar, kullanıcıların her bir işlem için DA modunu (Toplama veya Validyum) seçmelerine izin verebilir
* Hangi DA kullanılırsa kullanılsın — tüm işlemlerin geçerliliği STARK'lar tarafından garanti edilir

### giriiş

Kasım 2022 itibariyle,[StarkEx](https://starkware.co/starkex/)Ethereum'da 750 milyar doların üzerinde işlem hacmi ve 270 milyondan fazla işlem gerçekleştirdi. NFT alanında, ImmutableX ve Sorare gibi uygulamaları güçlendiren StarkEx, bunu doğrudan Ethereum üzerinde yapmaktan 1000 kat daha ucuz bir fiyata 85 milyondan fazla NFT bastı. STARK tabanlı teknoloji, Ethereum'u ölçeklendiriyor. Örneğin, tek bir haftada StarkEx, Ethereum blok alanının %0,1'inden daha azını alırken Ethereum olarak 1,6 kat daha fazla işlem gerçekleştirdi (StarkEx'te 12 milyon, Ethereum'da 7,5 milyon). Ve tüm bunları, kullanıcılara doğrudan Ethereum'a yerleşiyormuş gibi aynı düzeyde güvenlik sağlarken yapar.

### StarkWare bunu nasıl başarıyor?

Kullanıcılar, işlemleri Katman 2'de (StarkEx veya StarkNet) toplu halde gönderir ve bir STARK onaylayıcısına gönderir. Bu STARK kanıtlayıcı, defterin bu işlemler işlenmeden önceki ve sonraki durumunu bilir. Kanıtlayıcı, bu işlemler gerçekleştirildikten sonra defterin yeni durumunun geçerliliğini onaylayan bir STARK kanıtı üretir. Yeni durum ve STARK kanıtı, zincir üzerindeki STARK doğrulayıcıya gönderilir. Bu kanıtın doğrulanması, Ethereum üzerindeki değişmez bir akıllı sözleşme aracılığıyla otonom olarak gerçekleşir.

Bu mimari, her iki dünyanın da en iyisini sunar: Ortada tarafsız bir arabulucu olarak Ethereum'a sahipken düşük işlem maliyetlerine sahip olabiliriz. Bir hakem olarak Ethereum sadece sahip olunması güzel bir şey değildir; son kullanıcıya kritik güvenlik sağlar. İşlem yapan bir kullanıcı artık fonlarının Ethereum tarafından güvence altına alındığından ve Ethereum üzerinde doğrulandıktan sonra işlemlerin değişmez olduğundan emin olabilir. Kullanıcı ayrıca fonlarının tamamen kendi gözetimine sahiptir. Kişisel velayet önemlidir çünkü kullanıcının herhangi bir üçüncü tarafa güvenmeden fonlarına her zaman erişmesini sağlar.

### Veri kullanılabilirliği tüm bunların neresinde yer alıyor?

Hem bu ispatın ne yaptığını hem de*değil*ne yaptığını vurgulamak önemlidir. Kanıt, yeni durumun geçerliliğini onaylıyor, ancak size yeni durumun ne olduğunu söylemiyor. Bunun için veri kullanılabilirliğine ihtiyacınız var. Elimizde sadece kanıt varsa, blok zinciri gönderilenin geçerli olduğunu bilir, ancak yeni durumun ne olduğunu (örn. defter bakiyesi) bilmez! Bu verilerin tüketicileri, bu kanıtlar dahilinde işlem yapan kullanıcıları içerir. Katman 2 operatörüne güvenmek zorunda kalmadan Ethereum'dan para çekmek istiyorlarsa, veriler onlara sunulmalıdır. Bu, kullanıcılara fonlarının tam velayetini verir.

Bunun bir benzetmesi, lise öğretmeninizin sizden x'in x'e eşit olduğunu kanıtlamanızı istemesidir. Bunu kanıtlamak önemsiz. Hangisini cevaplamak daha zor: x gerçekte neye eşittir? Bunun için ayrı bir bilgiye ihtiyacınız var. X eşittir 5 veya başka bir değer olabilir. Benzer şekilde, blok zincirinde, doğrulama için bir STARK doğrulayıcı akıllı sözleşmesine bir STARK kanıtı gönderilebilir. Ve doğrulayıcı, ispatın geçerli olduğunu (x=x olduğunu) doğrulayabilir. Ancak size x'in (yeni defter bakiyesi) ne olduğunu söylemek için ayrı bir girdiye ihtiyacınız var.

Bu verileri kullanılabilir hale getirmek için üç yaklaşım vardır:

#### Toplama Modu

Toplama modu, defterin durumunun kanıtlarla birlikte Ethereum'da saklanmasını sağlar. Toplama modu şu anda üretimde[dYdX](https://dydx.exchange/)tarafından kullanılıyor ve ayrıca[Public StarkNet](http://starknet.io/)L2 ağı tarafından kullanılıyor. Buradaki faydalar açıktır: Biri, yalnızca Ethereum blok zinciriyle etkileşime girerek defterin durumunu yeniden oluşturabilir. Bunun anlamı, bir son kullanıcı olarak Ethereum'daki ilgili akıllı sözleşmeyle güvenle konuşabilir ve Layer 2 sistemi kapansa bile paranızı çekebilirsiniz.

#### Validyum

Toplama Modu altında, Ethereum gas maliyetlerinin çoğu kanıt doğrulamasına değil, Veri Kullanılabilirliğine gider. Bunun nedeni, blok zincirinde veri depolamanın çok gaz yoğun olmasıdır. Validium modunda defter bilgileri Ethereum'a gönderilmez. Bunun yerine, bir Veri Kullanılabilirliği Komitesi ile zincir dışında depolanır. Ethereum, bu defter bilgilerinin bir karmasını depolar. Bu Veri Kullanılabilirliği Komitesi, doğru durum güncellemesini denetleyen ve işlenen verilerin bir kopyasını tutan bağımsız üyelerden oluşan bir yetersayıdan oluşur. Her StarkEx örneği kendi çekirdeğini oluşturabilir. StarkEx üzerinde çalışan mevcut uygulamalar için çekirdek üyeler,[Consensys](https://consensys.net/),[Nethermind](https://nethermind.io/),[Iqlusion](https://iqlusion.io/)ve[Cephalopod](https://cephalopod.equipment/)gibi varlıkları içerir.

Buradaki faydalar açıktır. Defter bilgilerini zincir üzerinde depolamak için Ethereum gaz ücreti ödemeye gerek yoktur. Bunun yerine, Ethereum'da depolanan tek şey, defter bilgilerinin tek bir karmasıdır. Ethereum ile konuşarak Katman 2'den güvenle para çekmek istiyorsanız, yalnızca Veri Kullanılabilirliği Komitesi üyelerinden birinin dijital imzasına ihtiyacınız vardır. DAC üyeleri, bu fonların sahibi olduğunuzu kanıtlamak için kriptografi kullanacak.

Validium Data Availability'nin bir diğer gizli avantajı, blok zincirini okuyan kişilerin gizliliğidir. Toplama Modu altında, her kanıtın sunulduğu andaki her hesabın bakiyesi herkes tarafından bilinir. Validium ile bu veriler blok zincirinden gizlenir — zincir dışında tutulduğu için yalnızca Veri Kullanılabilirliği Komitesi bunun farkındadır. Bu gizlilik düzeyi, işlem verilerinin gizlenmesinin önemli olduğu çok çeşitli kullanım durumlarını mümkün kılar.

#### irade

Volition, işlem düzeyinde Validium ve Toplama Modu arasında seçim sağlayan bir veri kullanılabilirliği mimarisidir. Bunu, bir defteri zincirde ve diğer defteri bir Veri Kullanılabilirliği Komitesi ile tutarak yapar. Kullanıcılar, her bir işlem için Validium ve Toplama modu arasında seçim yapabilir.

StarkEx üzerinde çalışan bir uygulamadan Bored Ape veya Cryptopunk gibi gerçekten pahalı bir NFT satın aldığınızı hayal edin. Söz konusu NFT'nin verilerini güvence altına almak için Toplama Modunu kullanmak isteyebilirsiniz, çünkü söz konusu işlemin Ethereum'da saklanan bir kaydını istiyorsunuz. Ancak, daha sonra gerçekten ucuz bir NFT satın alabilirsiniz (ör. bir blockchain oyunundaki karakteriniz için bir pelerin) ve bu durumda Validium'u kullanarak tasarruf etmekten mutluluk duyacaksınız.

STARK ispatlarının ulaştığı ölçekle ilgileniyorsanız, lütfen gelin ve bizi geliştirin.



Her zaman[info@starkware.co](mailto:info@starkware.co)adresine e-posta gönderebilirsiniz ve e-postanıza bir insan ulaşacaktır.