### **TL; DR**

* [StarkNet Planets Alpha](https://voyager.online/)— bước đầu tiên trên con đường tiến tới Mainnet của chúng tôi — hiện đã có trên Testnet!
* [StarkNet](https://starkware.co/product/starknet/)là ZK-Rollup¹ hoàn chỉnh Turing không cần cấp phép¹.
* Các nhà phát triển có thể triển khai logic kinh doanh mà họ lựa chọn trong một hợp đồng thông minh và triển khai nó mà không cần xin phép trên StarkNet.
* Quá trình chuyển đổi trạng thái của StarkNet được chứng minh ngoài chuỗi và sau đó được xác minh trên chuỗi.
* Giống như Ethereum, người dùng có thể tương tác trực tiếp với các hợp đồng thông minh này.

### **Giới thiệu**

Chúng tôi đã công bố[lộ trình cho[StarkNet](https://starkware.co/product/starknet/)vào tháng 1](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)2021. Chén Thánh của các giải pháp về khả năng mở rộng sẽ hỗ trợ (i) các hợp đồng thông minh tùy ý, với (ii) khả năng kết hợp, (iii) được vận hành trên một mạng phi tập trung. Hôm nay chúng tôi thông báo về việc triển khai trên testnet của Bước 1: StarkNet Planets Alpha. Hệ thống Alpha hỗ trợ các hợp đồng thông minh tùy ý. Khả năng kết hợp sẽ được hỗ trợ vào cuối năm nay, với sự phân cấp để tuân theo.

Điều rất quan trọng đối với chúng tôi là phải hoàn toàn minh bạch và đặt kỳ vọng đúng đắn. Mục đích của bài đăng này là liệt kê rõ ràng những gì đã được hỗ trợ và những chức năng nào vẫn còn thiếu. Những gì chúng tôi phát hành hôm nay là Work in Progress trên testnet. Chúng tôi tin rằng bản phát hành sớm này sẽ giúp hình thành một hệ sinh thái lành mạnh xung quanh StarkNet và công cụ của nó. Chúng tôi mong muốn các nhà phát triển tham gia xây dựng mạng với chúng tôi và nhận phản hồi liên tục từ cộng đồng.

### **Có gì trong StarkNet Planets Alpha?**

**Chức năng:**Alpha cho phép các nhà phát triển viết và triển khai các hợp đồng StarkNet để tính toán chung. Không có danh sách trắng — bất kỳ nhà phát triển nào cũng có thể viết và triển khai bất kỳ hợp đồng nào họ muốn. Người dùng có thể tương tác với các hợp đồng này bằng cách gửi các giao dịch tới chúng và kiểm tra trạng thái của chúng. Tất cả các hợp đồng tồn tại trong một trạng thái duy nhất². Các bản cập nhật cho trạng thái này được chứng minh ngoài chuỗi và được xác minh trên chuỗi — trong Alpha, việc xác minh được thực hiện trên testnet.

**Hệ điều hành StarkNet:**Chức năng trên được hỗ trợ bởi một “hệ điều hành” mới mà chúng tôi gọi là Hệ điều hành StarkNet. Nó cung cấp*chuyển đổi trạng thái*có thể chứng minh được trên StarkNet. Các nhà phát triển Ethereum có thể coi nó tương đương với EVM: nó chịu trách nhiệm gọi các chức năng hợp đồng thông minh, xử lý việc lưu trữ hợp đồng, v.v. Chúng tôi sẽ xuất bản một bài đăng riêng mô tả chi tiết kiến trúc của Hệ điều hành StarkNet.

**Có gì không có trong Alpha?**Alpha vẫn thiếu một số khả năng chính, chẳng hạn như tương tác L1<>L2, dữ liệu trên chuỗi và khả năng kết hợp. Thêm về những điều dưới đây.

#### **Bị ướt chân**

Bắt đầu với hướng dẫn[và tài liệu](https://www.cairo-lang.org/docs/hello_starknet/)của chúng tôi.

Sau đó, bạn có thể đọc qua[hợp đồng thông minh AMM mẫu](http://cairo-lang.org/docs/hello_starknet/amm.html)mà chúng tôi đã viết và triển khai trên StarkNet. Đó là một AMM đơn giản và bạn có thể tương tác với nó[tại đây](https://starkware-amm-demo.netlify.app/swap). Bây giờ bạn đã sẵn sàng để viết và triển khai các hợp đồng thông minh trên StarkNet. Trình khám phá khối cho StarkNet —[Du hành](https://voyager.online/)— cho phép mọi người kiểm tra trạng thái của StarkNet.\
Bằng cách bắt tay vào làm, chúng tôi tin rằng bạn sẽ chuẩn bị tốt hơn để xây dựng trên StarkNet khi chúng tôi tiếp tục tung ra các tính năng bổ sung. Chúng tôi đang bận rộn lên kế hoạch cho cuộc thi hackathon đầu tiên cũng như hội thảo dành cho các nhà phát triển.

### **Các bước tiếp theo cho StarkNet**

Các tính năng chính vẫn còn thiếu trong bản Alpha sẽ được triển khai bắt đầu trong vài tuần tới. Đó là:

* Tương tác L1<>L2, ví dụ như khả năng gửi và rút tiền trong L1.
* Dữ liệu trên chuỗi: xuất bản tất cả các thay đổi lưu trữ trên Ethereum.
* Khả năng kết hợp: cho phép các hợp đồng giao tiếp với nhau.

Với những tính năng này, chúng tôi sẽ sẵn sàng đưa StarkNet lên Ethereum Mainnet. Chúng tôi gọi bước này trong quá trình tiến hóa của StarkNet là Chòm sao và khi chúng tôi đạt được nó, bạn sẽ có thể xây dựng và triển khai không cần xin phép trên các dApp L2 có thể mở rộng của Ethereum Mainnet.

#### **Hệ sinh thái StarkNet**

Chúng tôi rất hào hứng với hệ sinh thái đang hình thành xung quanh StarkNet, vì vậy chúng tôi sẽ tạm dừng để cảm ơn các cộng tác viên của mình cho đến nay.

Chúng tôi đang hợp tác chặt chẽ với[Nethermind](https://twitter.com/nethermindeth)và nhóm Nubia,[Alexey Akhunov](https://twitter.com/realLedgerwatch)(Erigon) &[Igor Mandrigin](https://twitter.com/mandrigin)(gateway.fm),[Iddo Bentov](https://www.cs.cornell.edu/~iddo/),[dOrg](https://twitter.com/dOrg_tech),[Giáo sư Tim Roughgarden](https://twitter.com/algo_class),[Giáo sư .Jeremy Avigad](https://www.andrew.cmu.edu/user/avigad/)& Yoav Seginer, cuối cùng nhưng không kém phần quan trọng — nhóm[Mô hình](https://twitter.com/paradigm).\
Các đối tác ban đầu của chúng tôi —[dYdX](https://twitter.com/dydxprotocol),[Immutable](https://twitter.com/Immutable),[DeversiFi](https://twitter.com/deversifi), cũng như[Sorare](https://twitter.com/SorareHQ),[Celer](https://twitter.com/CelerNetwork)và những người khác — đã cung cấp cho chúng tôi thông tin đầu vào vô giá từ Ngày đầu tiên và cho phép chúng tôi xây dựng quy trình sản xuất -cấp mạng cho người dùng thực.\
Chúng tôi tiếp tục ngạc nhiên về chất lượng nội dung do cộng đồng tạo ra, bởi những người như[Bobbin Threadbare](https://twitter.com/bobbinth),[Daniel Kroni](https://github.com/danielkroeni/cairo-playground/blob/main/anon-bank/README.md),[Adrian Hamelink](https://twitter.com/adr1anh),[perama](https://twitter.com/eth_worm),[Francesco Ceccon](https://twitter.com/ceccon_me),[Ilian Malchev](http://twitter.com/imalchev), và đội[Alexandria](https://blockchainpartner.fr/).

Chúng tôi háo hức muốn xem cộng đồng sẽ tạo ra những gì trên tất cả các mặt: công cụ dành cho nhà phát triển, nội dung và tất nhiên là các ứng dụng StarkNet mà họ sẽ xây dựng. Hãy tiếp tục cuộc trò chuyện bằng phương tiện yêu thích mà bạn lựa chọn:[discord](https://discord.gg/uJ9HZTUk2Y),[Twitter](https://twitter.com/CairoLang),[email](mailto:info@starkware.co)và sớm sử dụng các hình thức liên lạc phi tập trung nhất: f2f.

¹ Chúng tôi không phải là người hâm mộ thuật ngữ ZK-Rollup, vì — nói một cách toán học — nó không phải là không có kiến thức, nhưng tất cả các bạn đều biết chúng tôi muốn nói gì

² Không giống như trạng thái riêng biệt được duy trì cho các triển khai StarkEx hiện tại trên Mainnet

**Update (tháng 11 năm 2021):**StarkNet Alpha hoạt động trên Ethereum Mainnet