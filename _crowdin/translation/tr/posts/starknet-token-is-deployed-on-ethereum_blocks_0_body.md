### TL;DR

* StarkNet Token (STRK) artık Ethereum Mainnet'te konuşlandırıldı
* **Dolandırıcılığa dikkat!**StarkNet Jetonu satışa sunulmadı
* Vakfın tokenlerini dağıtma mekanizmasını belirlemesi zaman alacaktır.
* StarkWare hissedarları, çalışanları ve bağımsız ortak yazılım geliştiricileri tarafından tutulan belirteçler, bir yıldan sonra kademeli olarak serbest bırakılmak üzere dört yıllık bir süre için kilitlenir.
* Belirteç, oylama, staking ve ücret ödeme için kullanımı sayesinde StarkNet'in ademi merkeziyetçiliğini daha da ileriye taşıyacak.

Bugün,[StarkNet](https://starknet.io/)merkezsizleşmeye doğru bir adım daha atıyor. StarkNet belirteci artık Ethereum</a>

. Hızlı bir şekilde özetleme: STRK, StarkNet'in mutabakat mekanizmalarına katılım için bir Staking belirteci olarak, bir Yönetişim belirteci olarak ve işlem ücretlerini ödemek için kullanılacaktır. Bu yardımcı programların[](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)mantığı, "Belirteçler ne için kullanılacak?"</p> 

***Dolandırıcılığa dikkat edin:**bu yazıyı yazarken StarkNet Jetonlarını satın almanın bir yolu yoktur; bu satış dışı dönem,[StarkNet Foundation](https://twitter.com/StarkNetFndn)tarafından bir sonraki duyuruya kadar yürürlükte kalacaktır; STRK'nın durumundaki herhangi bir güncellemeyi öğrenmek için StarkNet Foundation'dan gelen resmi iletişimi takip edin. [StarkNet Discord](http://starknet.io/discord)sunucusundaki[scam-report](https://discord.gg/qypnmzkhbc)kanalında dolandırıcılığı bildirebilir ve diğer dolandırıcılık raporlarını kontrol edebilirsiniz.*

Bu gönderi, belirteç tahsis sürecini ve dağıtılan belirteç sözleşmelerinin, belirtecin tasarlanmış üç yardımcı programından ikisine, yani oylama ve staking'e nasıl hizmet ettiğini açıklar. Üçüncü hizmet - StarkNet ücretlerini ödemek - daha sonra tartışılacaktır.



### Belirteç tahsis sürecini planlama

Daha önce belirteçlerin ilk tahsisi için bir[planı](https://medium.com/starkware/part-3-starknet-token-design-5cc17af066c6)önerdik. Hissedarlara, çalışanlara ve bağımsız yazılım geliştiricilere tahsis edilen jetonlar, bir yıldan sonra başlayan kademeli bir serbest bırakma programı ile dört yıl süreyle kilitlenir. Kilitli jetonlar, oylama ve staking için kullanılabilir, ancak transfer edilemez veya alınıp satılamaz. Jetonlardan bazıları, Ethereum üzerindeki özel bir akıllı sözleşme ile kilitlenirken, diğer jetonlar emanetçiler tarafından kilitlenir.

Ayrı olarak, mevcut StarkNet jetonlarının %50,1'i,[hedefine](https://medium.com/@StarkNet_Foundation/welcome-to-the-world-starknet-foundation-7bd55d5dbc59)ulaşmak için kullanılmak üzere StarkNet Foundation'a tahsis edilmiştir (bkz[StarkWare'in gönderisi](https://medium.com/starkware/introducing-the-starknet-foundation-bd4b4379fbb)). Bu jetonlar kilitli değildir. Ancak, Vakfın bu belirteçleri daha fazla tahsis etmek için kesin mekanizmayı formüle etmesi için zamana ihtiyacı olacak ve planlarını zamanında paylaşacaktır.



#### Neden kilit?

Belirteçleri yukarıda belirtilen süre için kilitlemek, mevcut katkıda bulunanların StarkNet'in uzun vadeli teşvikleriyle uyumlu olmasını sağlar. Ayrıca, amaçlanan amaçlar için yaygın kullanımdan önce belirteç üzerindeki spekülasyonları caydırır: ağı güvence altına almak, ücretleri ödemek ve yönetişimi merkezden uzaklaştırmak.

Ardından, belirteç uygulamasının oylamayı ve staking'i nasıl desteklediğini açıklıyoruz.



### oylama

Vakıf, sağlam yönetişimi kolaylaştırmaktan ve oylama mekanizmalarını formüle etmekten sorumlu olacaktır. StarkNet Jetonu, hem doğrudan oylamaya hem de bir dizi delegasyon mekanizmasına izin verecek şekilde tasarlanmıştır.



#### L1 oylama

[</strong>modülünün](https://docs.compound.finance/v2/governance/)isteğe bağlı**kullanımını içermektedir. Bu modül, zincir üzerinde oylama için yaygın olarak kullanılır. StarkNet'te isteğe bağlı olmasının ve varsayılan olarak kapalı olmasının nedeni, maliyetin dikkate alınmasıdır. Açmak, L1'deki her StarkNet Token transferinin, yalnızca oylama gücündeki değişimleri izlemek amacıyla ihtiyaç duyulan ekstra gaz gerektirdiği anlamına gelir.</p> 



#### L1 dışı oylama

Compound'un delegasyon modülüyle L1 on-chain oylamanın alternatifleri, zincir dışı oylamanın yanı sıra StarkNet tabanlı zincir içi oylama sistemlerini ([SnapshotX](https://snapshot.mirror.xyz/cUOrwdtEs5PvNh0sqYWWxPjt8GdJWn_Qp3cl7E3_8IU)gibi) içerir. L1 aktarımları için gaz tüketimini önemli ölçüde azaltan bu alternatifler, şu anda kullanılan ERC-20 kodundan açık destek gerektirmez ve bu nedenle doğal olarak desteklenir.

Yukarıda bahsedildiği gibi, kilitli ve kilidi açılmış tüm jetonlar StarkNet'in oylama mekanizmasında kullanılabilecektir.



### Staking

StarkNet'in izinsiz ve sansüre dayanıklı çalışması, sıralayıcıların rastgele seçilmesini gerektirir. Bir bloğu sıralamak ve önermek için bir düğümün seçilme olasılığı, düğümün stake ettiği StarkNet Jetonlarının sayısıyla orantılıdır. StarkNet Jetonlarını kullanmanın mantığı (örneğin, Ethereum veya Bitcoin yerine)[yönetişim teklifinde](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)açıklanmaktadır ve StarkNet'te staking, sıralama ve blok oluşturmanın kesin ayrıntıları topluluk</a>tarafından devam edentartışma altındadır ve henüz kesinleşmedi.</p> 

Oylamada olduğu gibi, tokenlar kilitli olsalar bile staking için kullanılabilir. Bu, StarkNet operatörlerinin çeşitliliğine ve StarkNet'in dayanıklılığına katkıda bulunur.



### Özet

StarkNet Token sözleşmelerinin Ethereum üzerinde konuşlandırılması, StarkNet ademi merkeziyetçiliğinde bir başka adımdır.

Geliştiricileri ve kullanıcıları dolandırıcılıklara karşı dikkatli olmaya davet ediyoruz! Yayınlandığı tarihte, hiçbir jeton takas edilemez ve bu ticaret yasağı durumu, StarkNet Vakfı tarafından bir sonraki duyuruya kadar yürürlükte kalacaktır.

Daha fazla soru için[StarkNet Discord](http://starknet.io/discord)sunucusundaki[Token-tartışmalar](https://discord.gg/qypnmzkhbc)kanalına gidebilirsiniz.