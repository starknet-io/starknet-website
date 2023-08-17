### TL;DR

* Kahire 1.0, iki yıl önce Kahire</a>

tanıtımından sonraki ilk büyük sürümdür.</li> 
  
  * Kahire 1.0, geliştiricilere daha güvenli, daha basit, daha kullanışlı bir programlama dili verecek
* Kahire 1.0'ın kalbinde, Kahire programları için daha uzun vadeli istikrar vaat eden bir aracı temsil katmanı olan**Sierra**olacaktır.
* Sierra, izinsiz bir ağda hizmet vermesi için Kahire'yi ilerletir:\
  -**Ağı korumak**: daha güçlü DoS koruması sağlar\
  -**Kullanıcıyı korumak**: Ethereum dereceli sansür direncine izin verir Kahire 1.0, StarkNet'i birçok yönden etkileyecektir. Ayrıca[Regenesis](https://medium.com/starkware/regenesis-starknets-no-sweat-state-reset-e296b12b80ae)de etkileyecektir. Önümüzdeki haftalarda Regenesis hakkında daha fazla bilgi yayınlayacağız.</ul> 



### giriiş

2020'de Turing-complete programlama dili olan Cairo'yu piyasaya sürdük ve STARK'ları kullanarak doğrulanabilir hesaplamayı desteklemek için büyük bir adım attık. Bugün, Kahire'nin bugüne kadarki en büyük gelişimi olan**Kahire 1.0**duyuruyoruz. Kullanılabilirliği, güvenliği ve rahatlığı artıracak özelliklerle geliştirilmiş bir dil sunacak. İzni olmayan bir ağ olarak StarkNet'in gereksinimlerini desteklemek üzere tasarlanmıştır ve protokolün daha basit ve daha güvenli olmasını sağlar.\
Geliştirme zaten devam ediyor ve ilk sürümün yakında çıkmasını bekliyoruz.

Bu gönderide, Kahire'nin şimdiye kadarki yolculuğunu anlatacağız ve gelecek özelliklerle ilgili ayrıntıları paylaşacağız.



### Kahire Yolculuğu

2020 yılına kadar, genel hesaplama için STARK tarafından kanıtlanabilir programlar oluşturmak için niş bilgiye ihtiyaç vardı. Sadece STARK'ların arkasındaki karmaşık matematiği anlayanlar için mümkündü. Spesifik olarak, her iş mantığı için, yani her hesaplama için, belirli hesaplamayı temsil eden bir dizi polinom kısıtlaması olan bir Cebirsel Ara Temsil (AIR) oluşturmak gerekiyordu.

Kahire, doğrulanabilir hesaplamanın her yerdeki geliştiricilere sunulması gerektiğinin farkına varılmasıyla doğdu. Kahire, geliştiricilerin STARK'ların gücünden yararlanmalarını mümkün kılar.

Geliştirici topluluğu o zamandan beri heyecanla inşa etmek için Kahire'yi ele geçirdi. Bugün gelişen StarkNet ekosistemindeki her şey Kahire'ye dayanmaktadır. [StarkNet](https://starkware.co/starknet/)ve[StarkEx](https://starkware.co/starkex/)arasında, Kahire destekli uygulamalar 220 milyonun üzerinde işlem gerçekleştirdi, 65 milyonun üzerinde NFT bastı ve 700 milyar dolar değerinde alım satım gerçekleştirdi ve bunların tümü Ethereum'da gerçekleşti.

Kahire, STARK'ları erişilebilir hale getirirken, orijinal olarak bir montaj dili olarak tasarlandı ve bu nedenle düşük seviyeli bir dil olarak yazıldı.

![Kahire'de yazılan ilk programlara bir örnek](/assets/cairocode_01.png "Kahire'de yazılan ilk programlara bir örnek")

Geliştiricilerden gelen geri bildirimler ve[StarkNet](https://starkware.co/starknet/)yükselişi ile Kahire'yi kademeli olarak daha anlamlı ve geliştirici dostu hale getirdik.

![ERC-20 Kahire sözleşmesinden değişkenlerin, if ifadelerinin, hataların ve UINT256 kitaplığının desteğini gösteren bir örnek](/assets/cairocode_02.png "ERC-20 Kahire sözleşmesinden değişkenlerin, if ifadelerinin, hataların ve UINT256 kitaplığının desteğini gösteren bir örnek")

Ancak çok geçmeden ileriye doğru büyük bir adım atmanın ve Kahire'de aşamalı iyileştirmeler yerine daha cesur bir dönüşüme gitmenin zamanının geldiğine karar verdik.



### Kahire 1.0

Cairo 1.0 için sıfırdan, geliştiricilere güvenlik özellikleri sağlayacak ve sözleşmeleri daha basit ve daha anlamlı bir şekilde yazmalarına olanak sağlayacak yepyeni bir derleyici oluşturduk.



#### Sierra ile tanışın: Her Kahire koşusunun kanıtlanabilmesini sağlamak

Kahire 1.0'daki ana eklenti Sierra'dır (**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**tion). Sierra, Kahire 1.0 ve Kahire bayt kodu arasında yeni bir ara gösterim katmanı oluşturur. Sierra'nın amacı, her Kahire çalışmasının - yani bir Kahire programı ve girdisinin - kanıtlanabilmesini sağlamaktır (aşağıda daha fazlasını görün).

Sierra, Kahire geliştiricilerine geleceğe yönelik daha iyi bir kod vaat ediyor. StarkNet sözleşmelerinin, altta yatan sistemde iyileştirmeler olması durumunda (örneğin, CPU AIR mimarisi değişiklikleri, Sierra'dan Kahire bayt koduna nihai çevirinin iyileştirmeleri) durumunda yeniden derlemeye ihtiyaç duymaması gerçeğiyle daha fazla kararlılık sağlanır.

**Her Kahire koşusunu kanıtlamak.**Eski Kahire'de bir Kahire çalışması üç durumla sonuçlanabilir - DOĞRU, YANLIŞ veya başarısızlık. Başarısız çalıştırmalar kanıtlanamaz. Sierra, bir Kahire çalışmasının asla başarısız olmayacağını ve yalnızca DOĞRU veya YANLIŞ ile sonuçlanabileceğini garanti eder. Bu da her Kahire koşusunun kanıtlanabilmesini sağlar.

Sierra'nın bu tanıtımı, izinsiz bir ağ olarak StarkNet için önemli sonuçlara sahiptir. Sierra, geri alınan işlemlerin bile StarkNet bloklarına dahil edilebilmesini sağlar. Bu özellik, karmaşık kripto-ekonomik mekanizmalar eklemeye gerek kalmadan StarkNet protokolünün yalın ve basit kalmasını sağlayacaktır.\
İki anlamlı örnek:

1. Sıralayıcılar, geri alınan işlemler için ücret toplayabilecek ve StarkNet'in Sequencer DoS'u köklü bir şekilde engellemesine izin verecektir.
2. Zorunlu L1 işlemlerinin uygulanması mümkün olacak ve StarkNet'in Ethereum'un sansür direncinin tamamını devralmasına olanak tanıyacak.



### **Dil özellikleri**

Kahire 1.0, programlama dilinin kendisinde birçok iyileştirme sunacak. Aşağıda listelenen her şey ilk sürümün parçası olmayacak, ancak yol haritasının bir parçası.



#### **Geliştirilmiş sözdizimi**

* Artık*yerel*ve*tempvar*yok. Şimdi tüm değişkenleri yönetmek için sadece*ve*ihtiyacımız var.
* Geliştirilmiş*if*ifadeleri sözdizimi



```python
#Eski
if cond != 0 {
  tempvar x = x+1;
} başka {
  tempvar x = x;
}
__________________________________
#New
if cond { x = x + 1; }
```




#### **Tip güvenlik garantileri**

Derleyici, kodun güvenliğini artırmak için güçlü yazmayı kullanacaktır. Örneğin:

* İşaretçiler her zaman başlatılmış belleğe işaret eder.
* Sözlükler, squash_dict'i çağırma sorumluluğunu programcıya bırakmak yerine, her zaman ezilecektir.



#### **Kullanımı daha kolay dil yapıları**

Örneğin:

* döngüler için



```
toplam = 0
için x in iter {
  toplam = toplam + x;
}
```


* Boole ifadeleri
* Tamsayılar (düzenli tamsayı bölmeli 👯)
* İlgili tipler için taşma koruması
* Boole koşulları



```
#Eski
Eğer koşul1:
  eğer koşul2:
       # Bazı kodlar
  aksi takdirde koşul3:
       # Aynı kod
__________________________________
#Yeni
Eğer koşul1 && (koşul2 || koşul3) { … }
```




#### **Tam teşekküllü bir tip sistem**

* Soyut veri türleri (örn. Pas benzeri numaralandırma)



```
enum Seçenek<T> {
 Bazıları: T,
 Yok,
}
maç sonucu {
 Bazıları(r) => {..},
 Yok => {..},
}
```


* Özellikler



```
özellik Ekle<Uint256> {
    fn ekle(…) { … }
}

a: Uint256 = 1;
olsun b: Uint256 = 4;
bir + b; // Uint256 türünde 5 olarak değerlendirildi.
```




#### **Daha sezgisel kitaplıklar**

(örneğin dict, diziler)

* dikte<Uint256, MyStruct>;
* Sıralamak<MyOtherStruct>;



#### **Daha fazla optimize edilmiş kod**

Yerel değişkenlerin tahsisini açıkça belirtmeye gerek yoktur — otomatik olarak algılanır ve otomatik olarak yapılır.



#### **Daha iyi derleyici entegrasyonu**

Daha iyi IDE desteği, paket yönetimi ve topluluk katkılarının daha iyi kolaylaştırılması.



### **Çözüm**

Kahire'nin üretimde ilk kez kullanılmasından iki yıl sonra, gelişmiş ifade, güvenlik ve sözdizimi sağlayacak olan Kahire 1.0'ı geliştiriyoruz. Geliştiricilerin StarkNet sözleşmelerini daha kolay yazmalarına olanak tanıyarak ileriye doğru büyük bir adım atacak.

Yakında gelecek başka bir gönderide, Kahire 1.0'ın StarkNet'in yenilenmesini nasıl etkileyeceği ve geliştiricilerin piyasaya sürülmesi için nasıl hazırlanmaları gerektiği hakkında daha fazla ayrıntı paylaşacağız.