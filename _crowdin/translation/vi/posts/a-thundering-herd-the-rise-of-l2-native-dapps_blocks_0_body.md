### TL; DR

Các dApp gốc L2 hiện có thể phát triển mà không bị hạn chế về gas L1 truyền thống

### Giới thiệu

Các nhà phát triển dApp luôn phải đối mặt với những hạn chế nghiêm trọng do giới hạn gas khối (L1) của Ethereum. Nó giới hạn không chỉ*về cách*dApp đó hoạt động mà còn*về khả năng của*dApp đó.

Lớp 2 (L2) cung cấp cho các nhà phát triển dApp một lĩnh vực tính toán mới, không có trần kính khí này. Chúng tôi tin rằng phần lớn các dApp sẽ có nguồn gốc từ L2 trong một vài năm tới: chúng sẽ được xây dựng từ đầu trên L2 để hưởng lợi từ mức độ tự do tính toán này.

### Hình dạng giới hạn khí L1 Các dApp gốc L1

*Chúng ta hãy xem xét hai ví dụ về các dApp phổ biến có thiết kế được định hình sâu sắc bởi các ràng buộc về khí L1: AMM và bộ tổng hợp DEX.*

Nhà tạo lập thị trường tự động (AMM) về cơ bản là một xấp xỉ gas thấp của một sàn giao dịch dựa trên sổ đặt hàng. Thay vì cho phép người dùng đặt và xóa giới hạn, dừng lỗ hoặc nhiều loại lệnh khác, AMM L1 chỉ cho phép các giao dịch hoán đổi đơn giản với nhóm thanh khoản cơ bản trung tâm — để đáp ứng chi phí tính toán cao của L1.

Lý tưởng nhất, các công cụ tổng hợp DEX cần có quyền truy cập vào tất cả các nhóm thanh khoản có thể có, ngay cả nhóm thanh khoản nhỏ nhất, để tận dụng mức giá tốt nhất cho người dùng. Tuy nhiên, do chi phí truy vấn nhiều nhóm khác nhau, đơn giản là không đáng để giao dịch trên L1. Việc truy cập các nhóm và thanh toán phí giao dịch liên quan chỉ hợp lý khi các nhóm thanh khoản có thanh khoản đủ sâu. Theo cách tương tự, thanh lý trong cho vay/vay và các dApps dựa trên tài sản thế chấp khác có thể chính xác hơn nhiều nếu chênh lệch giữa chiết khấu thanh lý và phí giao dịch nhỏ hơn nhiều.

Chức năng và thiết kế hạn chế của nhiều ứng dụng L1 là kết quả trực tiếp từ việc các nhà phát triển tối ưu hóa mã của họ để tuân thủ các ràng buộc về gas của Ethereum. Tại sao, bạn có thể hỏi, chúng tôi nói Ethereum? Mã Solidity không thể chạy trên nhiều L1 và thậm chí một số L2? Thật vậy, nhưng trong số này, Ethereum là môi trường đắt nhất (và do đó, an toàn). Solidity dApps được thiết kế cho “liên kết đắt nhất”, tức là Ethereum. Do đó, chúng không được hưởng lợi từ lợi thế tính toán do môi trường thời gian chạy ít tốn kém hơn mang lại. Để mở khóa chức năng bị bỏ qua bằng cách thiết kế dApp cho môi trường thời gian chạy đắt nhất, mã của dApp phải được điều chỉnh.

### Sự gia tăng của các dApp gốc L2

Rollup hiệu lực (còn gọi là ZK-Rollups) cho phép tính toán cực kỳ rẻ. Không giống như bất kỳ giải pháp mở rộng quy mô nào khác — tính toán L2 có thể tăng theo cấp số nhân chỉ với một tác động nhỏ đến chi phí gas xác minh trên chuỗi. Ngoài ra, Tổng số hiệu lực xử lý các đầu vào cho phép tính — “dữ liệu nhân chứng” — mà không tiêu tốn thêm tài nguyên L1, cho phép tính toán với nhiều đầu vào.

Mã hóa dApps nguyên bản trên L2 trong**[Cairo](https://www.cairo-lang.org/)**(ngôn ngữ hoàn chỉnh Turing để mở rộng quy mô dApps thông qua bằng chứng STARK) mở ra vô số khả năng cho nhà phát triển. Nó cho phép họ sử dụng lượng dữ liệu đáng kể — cả dữ liệu tính toán và nhân chứng — mà trước đây họ không thể sử dụng.

Hãy cùng khám phá các dApp gốc L2 như vậy và các khả năng mới, phong phú của chúng.

#### DeFi

Trước khi gia nhập StarkEx, Bản tổng hợp hiệu lực của StarkWare, dYdX hoạt động như một dApp L1 trên Ethereum. Nó cung cấp cho người dùng đòn bẩy x10 đối với tài sản tổng hợp và các vị trí được hỗ trợ chỉ với một tài sản tổng hợp. Xây dựng lại dYdX ở Cairo dưới dạng dApp gốc L2 cung cấp một nền tảng DeFi có khả năng mở rộng hơn, rẻ hơn và hiệu quả hơn đáng kể:

* Cập nhật giá của Oracle: Những cập nhật như vậy thường bao gồm hàng tá giá và chữ ký từ nhiều nguồn khác nhau để tính trung bình. Tổng số hiệu lực cung cấp khả năng mở rộng theo cấp số nhân của logic tiên tri về giá (xác minh chữ ký và tính toán giá trung bình) — mà không cần báo cáo dữ liệu chứng kiến đó cho L1. So sánh điều này với triển khai L1 của dYdX, trong đó mỗi lần cập nhật tiên tri về giá tiêu tốn khoảng 300 nghìn gas và do đó, bị giới hạn về tần suất và quy mô của nhóm báo cáo giá.
* Đòn bẩy: Nguồn cấp giá chính xác cho phép dYdX ước tính rủi ro của một vị thế trong thời gian thực và cung cấp đòn bẩy cao hơn cho người dùng. Nhờ các bản cập nhật giá tiên tri được cải thiện, dYdX đã tăng đòn bẩy từ x10 trên L1 lên x25 trên L2.
* Ký quỹ chéo: Với dYdX trên L2, các nhà tạo lập thị trường có thể đặt lệnh mua/bán trên nhiều tài sản bằng cách sử dụng cùng một tài sản thế chấp. Thanh toán trung bình trên L2 của dYdX liên quan đến các vị trí có hơn 10 tài sản tổng hợp khác nhau! Để so sánh, việc có khả năng ký quỹ chéo này trên L1 sẽ tăng hơn gấp đôi chi phí gas trên chuỗi.

#### Trò chơi và nghệ thuật sáng tạo

Nhóm trò chơi gốc L1 hiện tại thường lưu trữ nội dung trò chơi trên L1 trong khi triển khai toàn bộ logic trò chơi trong một ứng dụng ngoại tuyến đáng tin cậy. Mô hình này là kết quả trực tiếp của các hạn chế về khí của L1. Nhờ khả năng tính toán rẻ trên L2, các nhà phát triển ứng dụng trò chơi gốc L2 giờ đây có thể triển khai logic trò chơi trong hợp đồng thông minh và thao tác tài sản trò chơi một cách đáng tin cậy, thay vì chỉ lưu trữ chúng. Đưa logic trò chơi vào lĩnh vực tính toán không tin cậy là một bước quan trọng hướng tới một thế giới trò chơi dựa trên chuỗi khối phong phú hơn nhiều. Các trò chơi gốc L2 đã được phát triển trên StarkNet, mạng không được phép của StarkWare (ví dụ:[Dope Wars](https://github.com/dopedao/RYO)và[Influence](https://medium.com/influenceth/influence-to-launch-on-starknet-afd3c26ea25a)).

Nhưng, một trò chơi dựa trên blockchain thực sự có thể phức tạp đến mức nào? Ví dụ: xử lý đồ họa trực tiếp trên chuỗi dường như là không thể —[hay là](https://twitter.com/guiltygyoza/status/1449637155001798657)? Việc giải các phương trình vi phân và mô phỏng chuyển động phẳng trong một hợp đồng thông minh thể hiện một bước quan trọng hướng tới những gì trong tương lai có thể là một công cụ vật lý chuỗi khối. Hệ lụy là rất lớn. Hãy tưởng tượng một trò chơi nhiều người chơi cạnh tranh như Counter-Strike. Nếu một người có thể mô phỏng logic trò chơi trực tuyến, nhiều vụ hack đáng sợ sẽ trở thành dĩ vãng — người chơi có thể tận hưởng một trò chơi có thể chứng minh là công bằng.

Nghệ thuật Sáng tạo sử dụng tính toán, tính ngẫu nhiên và các dữ liệu khác để tạo ra nghệ thuật dựa trên chuỗi khối. Một nghệ sĩ có thể sử dụng tính toán và logic càng phức tạp thì càng có nhiều lựa chọn để tạo ra các tác phẩm nghệ thuật độc nhất vô nhị. [WhaleStreet DAO](https://blog.whalestreet.xyz/whalestreet-dao-to-launch-gen-art-ecosystem-on-ethereum-with-starknet/)đang triển khai một trong những dự án Gen Art đầu tiên trên StarkNet, tận dụng tài nguyên tính toán không giới hạn của StarkNet.

### Cái gì tiếp theo?

Bản tổng hợp hiệu lực — và cụ thể là StarkEx và StarkNet do Cairo cung cấp — cung cấp một môi trường nơi người ta có thể phát triển và vận hành các dApp tiêu tốn nhiều dữ liệu tính toán hoặc nhân chứng. Với tất cả những lợi ích của công nghệ sổ cái phân tán, chúng tôi dự đoán một tương lai vô cùng thú vị cho các dApp gốc L2.

*bạn*có thể tạo gì với tính toán chung được hỗ trợ bởi khả năng kết hợp, không cần tin cậy và phân cấp?