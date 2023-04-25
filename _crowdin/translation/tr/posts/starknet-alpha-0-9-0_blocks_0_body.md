### TL;DR

* **Ücretler artık Testnet'te zorunlu, yakında Mainnet'te olacak**
* Sözleşmeli fabrika modeli artık mümkün!
* StarkNet, sözleşme sınıflarını tanıtıyor
* Delege araması, kitaplık çağrısıyla değiştirilir

### Giriş

StarkNet Alpha 0.9.0'ı sunmaktan mutluluk duyuyoruz! Bu, StarkNet'in hem işlevsellik hem de protokol tasarımına önemli eklemelerle olgunluğa doğru önemli adımlar attığı önemli bir versiyondur.

**Ücretler zorunludur**(şu anda yalnızca Testnet'te, sürüm 0.9.0'a kadar Mainnet'te yayınlanacaktır) — gelişen L2'nin kendi bağımsız ücret sistemi olmalıdır. 0.8.0 sürümünde isteğe bağlı bir özellik olarak ücretleri tanıttıktan sonra, artık bunları protokolün temel bir bileşeni olarak dahil etmekten ve zorunlu kılmaktan eminiz. Daha fazla detay aşağıda.

Protokol seviyesindeki bir diğer önemli değişiklik, Sözleşme Sınıflarının ve sınıf/örnek ayrımının getirilmesidir. Bu, \`delegate_call\` işlevselliğinin ve mevcut sözleşmelerden konuşlandırmaların daha doğrudan kullanımına izin vererek StarkNet'te fabrika modelini etkinleştirir.

### Sözleşme Sınıfları

Nesne yönelimli programlamadan ilham alarak, sözleşme kodu ile uygulanmasını birbirinden ayırıyoruz. Bunu, sözleşmeleri sınıflara ve örneklere ayırarak yapıyoruz.

**sözleşme sınıfı**, sözleşmenin tanımıdır: Kahire bayt kodu, ipucu bilgileri, giriş noktası adları ve semantiğini açık bir şekilde tanımlamak için gereken her şey. Her sınıf, sınıf karması ile tanımlanır (OOP dillerinden bir sınıf adına benzer).

**sözleşme örneği**veya yalnızca bir sözleşme, bazı sınıflara karşılık gelen konuşlandırılmış bir sözleşmedir. Yalnızca sözleşme örneklerinin sözleşme gibi davrandığını, yani kendi depolama alanlarına sahip olduğunu ve işlemler/diğer sözleşmeler tarafından çağrılabileceğini unutmayın. Bir sözleşme sınıfının StarkNet'te dağıtılmış bir örneği olması gerekmez. Sınıfların tanıtımı, birkaç protokol değişikliği ile birlikte gelir.

#### Beyan Etme İşlemi

StarkNet'e yeni bir işlem türü sunuyoruz:**sınıfı bir sözleşmenin bildirilmesine izin veren['bildir'](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)işlemi.**\`deploy\` işleminden farklı olarak bu, o sınıfın bir örneğini dağıtmaz. StarkNet'in durumu, beyan edilen sınıfların bir listesini içerecektir. Yeni \`declare\` işlemi ile yeni sınıflar eklenebilir.

#### 'Deploy' Sistemi Çağrısı ve Sözleşme Fabrikaları.

Bir sınıf ilan edildiğinde, yani karşılık gelen \`declare\` işlemi kabul edildiğinde, o sınıfın yeni örneklerini konuşlandırabiliriz. Bu amaçla, aşağıdaki argümanları alan yeni \`deploy\` sistem çağrısını kullanıyoruz:

* sınıf karması
* Tuz
* Yapıcı bağımsız değişkenler

'Konuşlandırma' sistem çağrısı daha sonra,[adresi](https://docs.starknet.io/docs/Contracts/contract-address)yukarıdaki üç parametre ve dağıtım adresi (sistem çağrısını başlatan sözleşme) tarafından belirlenecek olan söz konusu sözleşme sınıfının yeni bir örneğini konuşlandıracaktır.

Dağıtımları bir çağırma işlemine dahil etmek, dağıtımları ve çağrıları farklı şekilde ele almak zorunda kalmadan dağıtımlar için fiyatlandırma ve ücret almamızı sağlar. Dağıtım ücretleri hakkında daha fazla bilgi için bkz.[belgeler](https://docs.starknet.io/docs/Fees/fee-mechanism#deployed-contracts).

Bu özellik, sözleşmeli fabrikaları StarkNet'e tanıtır, çünkü herhangi bir sözleşme \`dağıt\` sistem çağrısını başlatarak yeni sözleşmeler oluşturabilir.

#### "Delege Çağrısı"ndan "Kütüphane Çağrısı"na Geçiş

Sınıfların tanıtılması, Ethereum'un temsilci çağırma mekanizmasındaki iyi bilinen bir sorunu ele almamızı sağlar: Bir sözleşme, başka bir sözleşmeye temsilci çağrısı yaptığında, gerçek bir örnek (depolama) yerine yalnızca kendi sınıfına (koduna) ihtiyaç duyar. Bu nedenle, bir temsilci çağrısı yaparken belirli bir sözleşme örneği belirtmek zorunda olmak kötü bir uygulamadır (aslında, Ethereum sözleşmelerinde birkaç hataya yol açmıştır) - yalnızca sınıfın belirtilmesi gerekir.

Eski \`delegate_call\` sistem çağrısı artık kullanımdan kaldırılıyor (zaten dağıtılan eski sözleşmeler çalışmaya devam edecek, ancak \`delegate_call\` kullanan**sözleşme artık derlenmeyecek**) ve yeni bir library_call sistem çağrısı ile değiştirildi. bir sözleşme örneği adresi yerine (önceden bildirilen bir sınıfın) sınıf karmasını alır. Bir kitaplık çağrısında yalnızca bir gerçek sözleşmenin yer aldığını unutmayın, bu nedenle çağıran sözleşme ile uygulama sözleşmesi arasındaki belirsizliği önleriz.

#### Yeni API uç noktaları

API'ye, sınıfla ilgili verilerin alınmasına izin veren iki yeni uç nokta ekledik:

* \`get_class_by_hash\`: verilen sınıf karmasını verilen sınıf tanımını döndürür
* \`get_class_hash_at\`: sözleşme adresi verilen dağıtılmış bir sözleşmenin sınıf karmasını döndürür

Dağıtılan bir sözleşmenin sınıfını doğrudan elde etmek için yukarıdaki iki yöntemi kullanmak yerine, gelecekteki sürümlerde yeniden adlandırılacak olan eski \`get_full_contract\` bitiş noktasını kullanabileceğinizi unutmayın. Yukarıda belirtilen tüm bitiş noktaları,[StarkNet](https://docs.starknet.io/docs/CLI/commands)de kullanılabilir.

#### ücretler

Ücretleri ``[invoke](https://docs.starknet.io/docs/Blocks/transactions#invoke-function)\` işlemleri için zorunlu hale getirerek (önce Testnet'te ve daha sonra ayrıca Mainnet'te) StarkNet'e dahil etmeye devam ediyoruz. \`Beyan\` işlemi bu noktada ücret gerektirmeyecektir. Benzer şekilde, \`deploy`` işlemleri de bir ücret gerektirmez, ancak bu işlem türünün büyük olasılıkla gelecekteki sürümlerde kullanımdan kaldırılacağını unutmayın.

Bu alanda cevaplanmamış birkaç soru var, en öne çıkanları, sözleşme bildirimleri ve StarkNet hesaplarının konuşlandırılması için ücretlerin nasıl tahsil edileceğidir. Bu sorunları gelecek sürümlerde ele alacağız.

### Sıradaki ne?

[Şubat'ta duyurduğumuz yol haritamızı takiben, kullanıcılara işlemleri hakkında daha hızlı geri bildirim almak için genel olarak StarkNet'in performansını ve özel](https://medium.com/starkware/starknet-on-to-the-next-challenge-96a39de7717)sıralayıcının performansını iyileştirmeye kararlıyız. Bir sonraki sürümde, sıralayıcıya paralelleştirmeyi tanıtarak daha hızlı blok üretimi sağlamayı planlıyoruz.

StarkNet'in bir sonraki ana sürümü,[ERC-4337](https://medium.com/infinitism/erc-4337-account-abstraction-without-ethereum-protocol-changes-d75c9d94dc4a)benzer bir şekilde StarkNet'in hesaplarının yapısına odaklanacak. Bununla, StarkNet hesaplarının davranış şeklini kesinleştirmiş olacağız ve kitlesel benimsemeye doğru bir başka büyük adım daha atmış olacağız!