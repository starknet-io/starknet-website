## giriş

Starknet bir Geçerlilik Toplama Katmanı 2'dir. Yüksek verim, düşük gaz maliyetleri sağlar ve Ethereum Layer 1 güvenlik seviyelerini korur.

Bir sudoku bulmacası verildiğinde, bir çözümü doğrulamak sıfırdan çözmekten daha kolaydır. Amacımız insanları "bu bilmece çözüldü" ifadesine ikna etmekse, bir kişinin bir çözümü hesaplamasını ve ardından başkalarının doğrulaması için bunu yaymasını sağlayarak çok fazla hesaplama tasarrufu sağlayabiliriz. Bu stratejide, bir çözümün her hesaplaması, toplum tarafından tekrarlanmasını gerektirmeyen tek seferlik bir olay haline gelir. Benzer şekilde Starknet, ağır L1 hesaplamasını daha hafif (dolayısıyla daha ucuz!) Zincir dışı hesaplanan STARK kanıtlarını kullanan L1 doğrulaması.

## nasıl çalışır

Yukarıdaki benzetmeyi göz önünde bulundurarak, bazı jargonlar için zaman olgunlaşmıştır. Starknet, genel hesaplamayı destekleyen ve şu anda üretimde Ethereum üzerinden bir L2 ağı olarak çalışan izinsiz bir Validity-Rollup'tur ("ZK-Rollup" olarak da bilinir). Starknet'in nihai L1 güvenliği, en güvenli ve en ölçeklenebilir kriptografik kanıt sistemi olan [STARK](https://starkware.co/stark/)kullanılmasıyla sağlanır.

Starknet sözleşmeleri (çoğunlukla) Kahire dilinde yazılmıştır - STARK kanıtları için tasarlanmış eksiksiz bir Turing programlama dili.