### TL;DR

* Goerli'ye yayınlanan StarkNet Alpha 0.7.0; iyileştirmelerle dolu
* Sözleşmeler artık Proxy Yükseltme Modeli kullanılarak yükseltilebilir
* Sözleşmeler artık Olayları yayabilir
* Uzun zamandır beklenen Blok Numarası ve Blok Zaman Damgası sistem çağrıları için destek

### Giriş

Yeni özellikler ve iyileştirmelerle dolu bir sürüm olan Alpha 0.7.0'ı yayınlamaktan mutluluk duyuyoruz. Son birkaç ayda StarkNet'i en çok teşvik eden şeylerden biri, topluluğun StarkNet'in geleceğini şekillendirmeye artan katılımı oldu. Bu sürüm, topluluğun yazma gereksinimlerinden bazılarını giderir.

#### Adlandırma Kuralındaki Değişiklikler

Dikkatli okuyucu, önceki StarkNet Alpha sürümünün adının Alpha 4 olduğunu fark etmiş olabilir, halbuki biz şimdi Alpha 0.7.0 yayınlıyoruz. Özel Alfa sürüm numarasını atlamaya ve bunun yerine yalnızca ilgili cairo-lang sürümüne güvenmeye karar verdik.

### Yeni özellikler

#### Sözleşme Yükseltilebilirliği

OpenZeppelin'in[Proxy Yükseltme Modeli](https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies)artık StarkNet'teki sözleşme yükseltmeleri için tamamen destekleniyor. Proxy kalıbı, Ethereum üzerinden sözleşme yükseltmelerini etkinleştirmek için yaygın bir yöntemdir. Alpha 0.7.0, bu modeli StarkNet üzerinden etkinleştirir.

Kalıbın temel bir uygulamasını göstermek için kısa bir[öğretici](https://starknet.io/docs/hello_starknet/default_entrypoint.html)hazırladık ve OpenZeppelin, vekil kalıp için standart bir sözleşme uygulamak için şimdiden yoğun bir şekilde çalışıyor;[prototip](https://github.com/OpenZeppelin/cairo-contracts/pull/129)bakın.

#### Blok Numarası ve Blok Zaman Damgası

Alpha 0.7.0, birçok geliştiricinin istediği iki yeni sistem çağrısı ekler. Bu çağrılar, bir sözleşmenin blok numarasına ve blok zaman damgasına erişmesine izin verir. Blok numarası, geçerli olarak yürütülen bloğun numarasını döndürür. Blok zaman damgası, sıralayıcı tarafından blok oluşturulurken verilen zaman damgasını döndürür.

[öğretici](https://starknet.io/docs/hello_starknet/more_features.html#block-number-and-timestamp)bu özelliklerin nasıl kullanılacağına dair bir örnek görebilirsiniz.

#### Olaylar

Sürpriz! Gelecekteki bir sürüm için planlanan bir özellik, bu önceki sürüme gizlice girdi.

StarkNet sözleşmeleri artık olayların tanımlanmasını ve yayınlanmasını destekleyerek, zincir dışı uygulamaların tüketmesi için yürütme bilgilerini açığa çıkarmalarına izin veriyor. Ethereum geliştiricileri, anlambilim ve sözdizimini Solidity'ye çok benzer bulacaktır. Bu özelliği açıklayan[belgelendirmeyi](https://starknet.io/documentation/events/)okuyabilir veya[öğreticiyi](https://starknet.io/docs/hello_starknet/events.html)takip edebilirsiniz.

#### %builtins Yönergesi kaldırıldı

%builtin yönergesine artık StarkNet sözleşmelerinde gerek yoktur. Bu değişiklik,[StarkNet Shamans](https://community.starknet.io/)üzerindeki[sözleşme genişletilebilirlik modeli](https://community.starknet.io/t/contract-extensibility-pattern/210)hakkında bir topluluk tartışmasının ardından geldi. Bu genişletilebilirlik modelinin kullanılabilirliğini önemli ölçüde basitleştirir.

Örneğin, aşağıdaki sözleşme şu şekilde değiştirilecektir:

```
%lang starknet

# Bu "%builtins" direktifidir.
# Artık gerekli değil.
%builtins range_check

@view
func add(x : keçe, y : keçe) -> (res : keçe):
dönüş (res=x + y)
bitiş
```

Buna:

```
%lang starknet
@view
func add(x : keçe, y : keçe) -> (res : keçe):
dönüş (res=x + y)
bitiş
```

Yeni modeli kullanan[ERC-20](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts/token)standart sözleşmelerine göz atabilirsiniz.

#### Dış İşlevler Yapı Dizilerini Destekler

Alpha 0.7.0, harici işlevlerde yapı dizilerini geçirmeyi ve döndürmeyi destekler. Bu ek işlevsellik, Hesap Sözleşmelerinin[çoklu aramayı](https://github.com/OpenZeppelin/cairo-contracts/pull/73#discussion_r753535751)daha iyi desteklemesini sağlar.

Çoklu arama, bir hesabın tek bir işlemde birden çok arama yapmasına izin veren güçlü bir Hesap Soyutlama özelliğidir. Bariz bir kullanım durumu, ödenek ve ardından transferFrom'u çağıran**tek işlem**oluşturmaktır.

Topluluğun bununla ne yapacağını görmek için sabırsızlanıyoruz.

#### StarkNet CLI'deki İyileştirmeler

**Bekleyen Bloklar için Destek**

[Bekleyen Bloklar](https://starknet.io/documentation/block-structure-and-hash/#pending_block)son küçük sürümde (v0.6.2)[tanıtıldı](https://community.starknet.io/t/cairo-v0-6-2-api-change-pending-block/195)ve işlemlerde daha hızlı onaylar sunuyordu. Bu sürüm, bu blokları StarkNet CLI aracılığıyla sorgulama desteği içerir.

Bunu kullanmak için, blok_numarası'nı bağımsız değişken olarak alan her CLI komutunda (contract_call/get_block/get_code/get_storage_at), blok_numarası=pending belirterek bekleyen bloğa göre StarkNet'i sorgulayabiliriz.

**Hesap Sözleşmeleri için Destek**

StarkNet hesap soyutlamayı kullanır, yani tüm hesaplar akıllı sözleşmeler olarak uygulanır. Hesap sözleşmelerinin ilk uygulamaları[Argent](https://github.com/argentlabs/argent-contracts-starknet)ve[OZ](https://github.com/OpenZeppelin/cairo-contracts/blob/main/contracts/Account.cairo)tarafından yapıldı, ancak daha fazlasının gelmesini bekliyoruz.

StarkNet'te, tüm işlemler bir hesap sözleşmesi üzerinden yapılmalıdır ve CLI artık doğrudan hesap sözleşmeleri aracılığıyla StarkNet Alpha ile etkileşime izin vermektedir. Nasıl ayarlanacağına ilişkin[öğretici](https://starknet.io/docs/hello_starknet/account_setup.html#setting-up-a-starknet-account)bakın.

Geçen ay[StarkNet.py](https://github.com/software-mansion/starknet.py/)ve[Nile](https://github.com/OpenZeppelin/nile)de benzer işlevsellik eklendi.

#### Test Çerçevesinde L1<>L2 Mesajlaşması

Alpha 0.7.0, Postacı'yı tanıtıyor. Postacı, geliştiricilerin daha karmaşık akışları test etmek için test çerçevesini kullanmalarını sağlar.

Yüksek düzeyde - StarkNet Sequencer'ın mesajları L1'den L2'ye ve L2'den L1'e iletme sorumluluğuyla alay eder. Solidity mesajlaşma sözleşmesi yoluyla gönderilen mesajların hedef StarkNet sözleşmesinde ve bir StarkNet sözleşmesinden gönderilen mesajların Solidity mesajlaşma sözleşmesinde görünmesini sağlar.

#### Ve Daha Fazla Özellik

Alpha 0.7.0, matematik ortak kitaplığına verimli bir karekök işlevinin eklenmesi gibi daha birçok özellik ve değişiklik sağlar. [değişiklik günlüğünde](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.7.0)tam bir liste görünür.

### Sıradaki?

İlk[Ücret Mekanizması](https://community.starknet.io/t/fees-in-starknet-alpha/286/29)desteği, StarkNet'in bir alt sürümü olarak birkaç hafta içinde piyasaya sürülecek.

### Daha fazla bilgi?

[starknet.io](https://starknet.io/): tüm StarkNet bilgileri, eğitimleri ve güncellemeleri için.

[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y): sorularınıza yanıt almak, dev desteği almak ve topluluğun bir parçası olmak için katılın.

[StarkNet Shamans](https://community.starknet.io/): StarkNet araştırma tartışmalarını takip etmek (ve katılmak!) için katılın.