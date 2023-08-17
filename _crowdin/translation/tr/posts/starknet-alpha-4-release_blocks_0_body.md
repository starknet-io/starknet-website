### Önümüzdeki Heyecanlı Zamanlar

Alpha 4 bugün Görli'de yayınlandı. Bu sürüm, Mainnet yayın adayıdır ve her şey plana göre giderse, ay sonuna kadar Mainnet'te konuşlandırılacaktır.

Alpha 4, diğer şeylerin yanı sıra Kahire derleme sürelerindeki iyileştirmeler, sözleşmeli kurucular ve çok daha fazlasını içeren özelliklerle dolu Alpha 3 sürümünü takip eder ([tam sürüm notlarına bakın](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.5.0)).

Unutulmaması gereken önemli nokta: Bu hâlâ bir Alfa sürümüdür — sözleşmenizi Mainnet dağıtımında dağıtmak için lütfen yeni uygulamaların[katılım](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu)yönergelerini izleyin.

### Yeni özellikler

Bu sürümün ana odak noktası Mainnet dağıtımına hazırlanmak olsa da, birkaç yeni özellik de içerir:

#### Bu sözleşmenin adresini al

Sözleşmeler artık yeni sistem çağrısı \`get_contract_address\` aracılığıyla kendi adreslerini alabilir. Sonunda selfie sözleşmesini rafa kaldırabiliriz.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">RIP selfie sözleşmesi: Eylül 2021-Kasım 2021</p>&mdash; Francesco Ceccon (@ceccon_me) <a href="https://twitter.com/ceccon_me/status/1458410251078836227?ref_src=twsrc%5Etfw">Kasım 10, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### Blok Karması

Bloklar artık kimlik yerine karma yoluyla tanımlanıyor. Bu, işlem karmalarına son geçişimizi takip eder. Tüm API'ler buna göre güncellendi. Blok yapısının özelliklerini de içerecek olan sistemin tam teknik dokümantasyonunu yakında yayınlayacağız.

#### Sözleşme Adresleri

Bu sürüm, sözleşme adreslerinin hesaplanma biçiminde bir değişiklik getirmektedir. Adres, arayan adresinde bir Pedersen karması, bir salt (rastgele veya konuşlandıran tarafından seçilen), sözleşme kodu karması ve yapıcı bağımsız değişkenlerinin karması olup, tümü bir önekle eklenir.

```
Hash(PREFIX, arayan_adresi, tuz, sözleşme_hash, ctr_args_hash)
```

Mevcut sürümde arayan adresi her zaman 0'a eşittir, ancak gelecekteki sürümlerde bu, doğrudan mevcut sözleşmelerden sözleşmelerin konuşlandırılmasını sağlayacaktır.

Bu şemanın CREATE2'ye çok benzer olduğuna dikkat edin.

[Tam sürüm notlarına bakın](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.6.0)

#### Token Köprüleri

Token köprüleri, StarkNet altyapısının çok önemli bir parçasıdır. StarkNet'e ve StarkNet'ten para transferine izin veriyorlar. Köprü, yayınlandığı sırada konuşlandırılmamıştır, ancak birkaç gün içinde, işlevselliği ve kullanımına ilişkin eksiksiz belgelerle birlikte kullanıma sunulacaktır. Unutulmaması gereken önemli bir nokta, köprünün[L1<>L2 mesajlaşma](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html)protokolünü kullanmasıdır. Bu nedenle, kısa para çekme süreleri sunar — para çekme bir partiye dahil edildiğinde ve L1'de kabul edildiğinde, fonlar anında L1'de kullanıcıya sunulur.

Bu, belirteç köprülerinin ilk versiyonu ve ekosistemden bununla ilgili geri bildirim almayı çok isteriz.

### StarkNet'e Katılın

Büyüyen StarkNet topluluğuna katılmak için bundan daha iyi bir zaman olamaz. İlk kendi uygulamanızı oluşturmaya başlamak için[StarkNet anlaşmazlığında](https://discord.gg/uJ9HZTUk2Y)sohbete katılabilir, çevrimiçi bir[çalıştaya](https://forms.reform.app/starkware/join-a-starknet-workshop/2ma1x8)katılabilir veya[eğitimden](https://www.cairo-lang.org/docs/hello_starknet/index.html)birini kullanabilirsiniz.

**Güncelleme (Kasım 2021):**StarkNet Alpha, Ethereum Mainnet'te yayında