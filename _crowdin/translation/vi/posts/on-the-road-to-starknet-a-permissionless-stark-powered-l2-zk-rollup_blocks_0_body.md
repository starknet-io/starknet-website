#### **TL; DR**

Chúng tôi đang xây dựng StarkNet theo bốn bước:

* Bước 0 — Nền tảng (đã hoàn thành*)
* Bước I — Các hành tinh: Tổng hợp một ứng dụng
* Bước II — Chòm sao: Tổng hợp nhiều ứng dụng
* Bước III — Vũ trụ: Tổng hợp phi tập trung

Chúng tôi hy vọng sẽ triển khai Bước I trong một vài tháng ngắn ngủi và đang trên đường đến Bước II & III vào cuối năm 2021.

### **Giới thiệu**

StarkWare đang xây dựng StarkNet, một L2 ZK-Rollup phi tập trung, không được phép và chống kiểm duyệt do STARK cung cấp, hỗ trợ tính toán chung trên Ethereum. Nó dựa trên ngôn ngữ Turing-đầy đủ[Cairo](https://www.cairo-lang.org/).

Các nhà phát triển, người dùng và các nút StarkNet sẽ có thể thực hiện mọi thứ mà người ta mong đợi từ Bản tổng hợp L2 không được phép: Các nhà phát triển có thể xây dựng các ứng dụng triển khai logic nghiệp vụ của riêng họ và triển khai chúng trên StarkNet. Người dùng có thể gửi giao dịch tới StarkNet để được thực thi, giống như họ tương tác với Ethereum ngày nay. Các nút và người tham gia StarkNet sẽ được khuyến khích về mặt kinh tế bằng tiền điện tử để đảm bảo mạng hoạt động hiệu quả và công bằng.

Tất cả các giao dịch StarkNet sẽ được thực hiện theo đợt theo định kỳ và tính hợp lệ của chúng sẽ được chứng minh bằng bằng chứng STARK, sẽ được xác minh trên Ethereum. Vì nỗ lực tính toán cần thiết để xác minh các bằng chứng của STARK là nhỏ theo cấp số nhân so với tính toán đã được chứng minh, StarkNet sẽ mở rộng quy mô Ethereum theo các cấp độ lớn.

Vì tất cả các chuyển đổi trạng thái của StarkNet sẽ được chứng minh bằng STARK nên chỉ những chuyển đổi hợp lệ mới được chấp nhận trên Ethereum. Tất cả dữ liệu cần thiết để tái tạo lại trạng thái StarkNet đầy đủ sẽ được xuất bản trên chuỗi. Bất kỳ ai cũng có thể chạy nút StarkNet của riêng họ. Các thuộc tính này sẽ làm cho StarkNet trở nên an toàn và không cần cấp phép như Ethereum.

Chúng tôi đã làm việc đó được ba năm và đã đạt được một số cột mốc đáng chú ý trong việc biến “Moon Math” thành phần mềm cấp sản xuất và hiệu quả chạy trên Ethereum. Cách mà StarkWare thực hiện là giải quyết các vấn đề khó khăn trước tiên, xây dựng công nghệ cốt lõi, sau đó đưa nó vào sản xuất theo kiểu từng phần. Chúng tôi sẽ tiếp tục xây dựng theo cách này khi chúng tôi hoàn thành StarkNet.

![](/assets/ontheroad_02.png)

**Bước 0 — Cơ sở**

StarkWare đã hoàn thành việc đặt một số nền tảng quan trọng cho StarkNet.

#### **Cairô**

[Cairo](https://twitter.com/StarkWareLtd/status/1300353049836376066?s=20)là khung Ngôn ngữ cấp cao hoàn chỉnh Turing & của chúng tôi để tạo ra các bằng chứng STARK cho tính toán chung. Thay vì chế tạo thủ công các “mạch” hoặc AIR phức tạp, nhà phát triển ứng dụng có thể sử dụng Cairo để xác định bất kỳ logic kinh doanh nào, đã được chứng minh ngoài chuỗi và đã được xác minh trên chuỗi. Cairo là[trong sản xuất trên Mainnet](https://twitter.com/StarkWareLtd/status/1320695603492507648?s=20)và cũng là[có sẵn cho các nhà phát triển](http://cairo-lang.org/).

Trong vài tuần nữa, chúng tôi sẽ ra mắt trên mạng thử nghiệm Ethereum công khai, phiên bản Alpha của Dịch vụ Bằng chứng Chung (GPS) của Cairo. *Điều này sẽ cho phép các nhà phát triển xây dựng các ứng dụng của riêng họ bằng cách sử dụng Cairo, triển khai bất kỳ logic nghiệp vụ nào họ muốn. Họ sẽ gửi mã Cairo của mình tới GPS để được xác minh và sau đó được xác minh trên chuỗi.*

GPS cho phép một bằng chứng duy nhất khẳng định tính toàn vẹn của việc thực thi các ứng dụng hoàn toàn riêng biệt và độc lập, do đó cung cấp cho các ứng dụng đó khả năng phân bổ chi phí gas cho việc xác minh bằng chứng giữa chúng.

Cairo và GPS là nền tảng của StarkNet — quyết định của chúng tôi để đưa cả hai ra bên ngoài cho các nhà phát triển giúp họ tiếp xúc sớm với công nghệ này, không chỉ để họ có thể bắt đầu xây dựng dựa trên nó mà còn để họ có thể ảnh hưởng đến quá trình phát triển của StarkNet.

Chúng tôi sẽ tiếp tục phát triển Cairo dựa trên nhu cầu và phản hồi của cộng đồng nhà phát triển. Chúng tôi sẽ nâng cao ngôn ngữ này với các tính năng, cú pháp và nội dung mới để cải thiện khả năng sử dụng của nó, đồng thời chúng tôi sẽ tiếp tục phát triển và cải thiện công cụ Cairo: trình biên dịch, trình theo dõi/trình gỡ lỗi và tích hợp với các IDE phổ biến.

StarkNet sẽ có Cairo chạy ngầm.

#### **Ngăn xếp phần mềm STARK**

StarkWare đã phát triển hệ thống bằng chứng mạnh mẽ nhất trong hệ sinh thái và nó đã[hoạt động trên Mainnet](https://medium.com/starkware/starks-over-mainnet-b83e63db04c0)trong nhiều tháng. StarkWare cũng đã phát triển[ethSTARK](https://twitter.com/StarkWareLtd/status/1264911004099543040?s=20), trình chứng thực mã nguồn mở của chúng tôi, nhanh hơn 20 lần so với bất kỳ trình chứng minh nào khác; nó cung cấp cả[chữ ký không kiến thức và bảo mật hậu lượng tử](https://twitter.com/StarkWareLabs/status/1331930111227080709).

Phép đo tỷ lệ**của chúng tôi — không phải phép ngoại suy, cũng không phải lời hứa — bao gồm việc xử lý 300K giao dịch trong một bằng chứng duy nhất trên Mainnet, đạt[kỷ lục thế giới về Thông lượng cuộn: 3K tps](https://twitter.com/StarkWareLtd/status/1287770381525422082?s=20). Trong quá trình này, chúng tôi đã đạt được kỷ lục thế giới về hiệu quả sử dụng gas Rollup: 315 gas/tx, đơn đặt hàng rẻ hơn nhiều so với giao dịch trên Ethereum L1.

Công nghệ này sẽ là nền tảng của Lớp chứng minh phi tập trung của StarkNet và do đó chúng tôi sẽ phát hành các chứng minh bổ sung và nâng cao như một phần trong quá trình phát triển của StarkNet (thêm về điều đó trong một bài đăng trên blog sắp tới).

#### **StarkEx**

StarkEx là công cụ có khả năng mở rộng L2 của chúng tôi. Nó đã phục vụ[khách hàng của DeversiFi](https://twitter.com/deversifi)trên Mainnet kể từ tháng 6 năm 2020. Nó sẽ cung cấp năng lượng cho cả[dYdX](https://twitter.com/dydxprotocol)và[ImmutableX](https://twitter.com/Immutable)bắt đầu sau vài tuần nữa. StarkEx có thể xử lý logic giao dịch phức tạp (giao dịch giao ngay, công cụ phái sinh, NFT) cũng như các khoản thanh toán.

Phát triển StarkEx là cách chúng tôi dogfood chuỗi công cụ của mình và thử nghiệm nó với các nhu cầu trong thế giới thực. Không có gì giống như nhu cầu của các ứng dụng thực tế và người dùng trực tiếp để giúp các công cụ hoàn thiện và phát triển. Nó cũng giúp chúng tôi hiểu những yếu tố nào cần được giải quyết để phục vụ hệ sinh thái tốt hơn — ví dụ: tích hợp với ví và trình khám phá khối.

StarkEx là một ví dụ trực tiếp về khả năng mở rộng ứng dụng bằng cách sử dụng ZK-Rollup dựa trên STARK và là ứng dụng đầu tiên được sản xuất trên Mainnet được viết ở Cairo. Như vậy, nó cũng sẽ là một trong những ứng dụng chạy trên StarkNet.

![](/assets/ontheroad_03.png)

### **Con đường phía trước**

#### **Bước I — Các hành tinh: Tổng hợp một ứng dụng**

Bước này sẽ cho phép các nhà phát triển xây dựng và triển khai các ứng dụng có thể mở rộng của riêng họ trên StarkNet.

Tại thời điểm này, mỗi phiên bản StarkNet sẽ có thể chạy một ứng dụng. Các phiên bản khác nhau có thể chạy các ứng dụng khác nhau.\
Khung StarkNet sẽ bao gồm những điều sau đây:

* Các cơ chế cần thiết để tạo bằng chứng STARK cho logic Cairo tùy ý, sau đó gửi và xác minh chúng trên Ethereum.
* Tương tác với L1 Ethereum: gửi và rút mã thông báo L1, xuất bản dữ liệu trên chuỗi, Cơ chế thoát bảo vệ người dùng StarkNet khỏi các nhà khai thác StarkNet độc hại, v.v.
* Quản lý số dư người dùng L2 cũng như bộ nhớ và bộ nhớ của ứng dụng.

Các nhà phát triển sẽ có thể chỉ tập trung vào việc xây dựng logic nghiệp vụ của ứng dụng, sau đó chuyển sang sản xuất: triển khai và chạy ứng dụng đó trên quy mô lớn trên StarkNet.

Điều cho phép chúng tôi xây dựng một ZK-Rollup có khả năng mở rộng tính toán chung là sự kết hợp của:

* Cairo, một ngôn ngữ lập trình hoàn chỉnh Turing có mục đích chung
* Ngăn xếp STARK mạnh mẽ của chúng tôi (người chứng minh và người xác minh), cho phép gộp các phép tính khổng lồ vào một bằng chứng duy nhất

#### **Bước II — Chòm sao: Tổng hợp nhiều ứng dụng**

Bước tiếp theo sẽ hỗ trợ nhiều ứng dụng chạy trên cùng một phiên bản StarkNet và truy cập cùng một trạng thái L2 toàn cầu. Điều này sẽ cho phép khả năng tương tác giữa các ứng dụng khác nhau, cũng như giảm chi phí gas do quy mô kinh tế được cải thiện.

Cairo, ngăn xếp STARK mạnh mẽ và GPS khuếch đại lợi thế cạnh tranh của StarkNet trong việc hỗ trợ Tổng hợp nhiều ứng dụng.

Ở giai đoạn này, StarkNet sẽ là một khung đầy đủ chức năng để chạy*nhiều*ứng dụng với bất kỳ logic kinh doanh tùy ý nào trên Ethereum, với mỗi phiên bản được điều hành bởi một nhà điều hành duy nhất.

Giờ đây, một nhà điều hành có thể tạo ra một nút StarkNet và các nhà phát triển ứng dụng có thể triển khai các hợp đồng của họ trên đó. Từ quan điểm của người dùng, StarkNet giờ đây trông giống như Ethereum, với quy mô cao hơn.

#### **Bước III — Vũ trụ: Tổng hợp phi tập trung**

Bước cuối cùng trong quá trình phát triển của StarkNet là phi tập trung hóa hoạt động của nó.

Các câu hỏi R&D hấp dẫn mà chúng tôi hiện đang giải quyết có ảnh hưởng đến giai đoạn này bao gồm (i) sử dụng ZK-Rollups để cải thiện các cơ chế đạt được sự đồng thuận và (ii) thiết kế các cơ chế kinh tế tiền điện tử để khuyến khích những người đóng góp và nhà điều hành StarkNet phi tập trung (trình tự giao dịch, chứng minh, v.v.) để hoạt động hiệu quả, công bằng và an toàn.

### **Phần kết luận**

StarkWare đang xây dựng StarkNet, một L2 ZK-Rollup phi tập trung do STARK cung cấp trên Ethereum, hỗ trợ tính toán chung dựa trên ngôn ngữ Cairo.

StarkNet sẽ cho phép các ứng dụng mở rộng quy mô mà không ảnh hưởng đến bảo mật, người dùng trả phí giao dịch hợp lý và toàn bộ hệ sinh thái sẽ phát triển đáng kể và thực hiện lời hứa của nó.

Chúng tôi vui mừng mời cộng đồng nhà phát triển[gia](https://twitter.com/StarkWareLtd)chúng tôi trên hành trình này.

**Update (tháng 11 năm 2021):**StarkNet Alpha hoạt động trên Ethereum Mainnet