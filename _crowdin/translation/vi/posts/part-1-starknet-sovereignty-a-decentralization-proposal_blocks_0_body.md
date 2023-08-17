### TL; DR

* Phân cấp của StarkNet liên quan đến mã thông báo gốc và nền tảng mới.
* Mã thông báo StarkNet được sử dụng để quản trị và làm tài sản thanh toán và đặt cược của mạng.
* Mười tỷ mã thông báo đã được đúc và việc phân bổ của chúng đã bắt đầu.
* Quỹ StarkNet, hiện đang được thành lập, sẽ có nhiệm vụ duy trì StarkNet như một hàng hóa công cộng.

StarkNet là một bản tổng hợp hợp lệ Lớp 2 (L2) phi tập trung không được phép, được xây dựng để cho phép Ethereum mở rộng quy mô thông qua các giao thức mã hóa được gọi là STARK, mà không ảnh hưởng đến các nguyên tắc cốt lõi của Ethereum về phân cấp, minh bạch, bao gồm và bảo mật.

StarkNet's Alpha ra mắt trên Mainnet vào tháng 11 năm 2021. Chưa đầy một năm sau, một hệ sinh thái đang hình thành, với hàng chục nhóm trên toàn thế giới đang làm việc với nó. Bây giờ là lúc để nâng cao tính phi tập trung của mạng, để nó đạt được sự sống động, khả năng chống kiểm duyệt, tính minh bạch và tính toàn diện theo yêu cầu của một L2 trên Ethereum.

Phân quyền có nghĩa là hoạt động và sự phát triển của mạng sẽ không phụ thuộc vào bất kỳ thực thể đơn lẻ nào, kể cả StarkWare. Cơ chế bầu chọn nhà lãnh đạo bằng chứng cổ phần không cần xin phép và thanh toán phí giao dịch trên chuỗi, cả hai đều sử dụng mã thông báo gốc, sẽ cho phép mạng hoạt động đáng tin cậy như một L2 trên Ethereum ngay cả khi StarkWare ngừng tồn tại. Các quyết định liên quan đến việc bảo trì StarkNet đang diễn ra sẽ chuyển từ StarkWare sang cộng đồng. Mã thông báo và Quỹ StarkNet sẽ là những yếu tố chính của nỗ lực này.

Bài đăng này, bài đăng đầu tiên trong số ba bài đăng được xuất bản đồng thời, tóm tắt hành trình của StarkNet cho đến nay và giới thiệu Mã thông báo StarkNet và Quỹ StarkNet. Bài[tiếp theo](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)thảo luận về mô hình quản trị StarkNet và[](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6)tập trung vào mô hình mã thông báo của StarkNet.

*Chúng tôi cảm ơn những người ủng hộ StarkNet sau đây (sắp xếp theo thứ tự bảng chữ cái) vì nhận xét của họ về bản nháp của các bài đăng này: Guily_Gioza (Cấu trúc liên kết), Itamar Lesuisse (Argent), Jonas Nelle (Pontis), Martin Triay (OpenZeppelin), Polynya, Sylve Chevet (Briq) , và Tomasz Stańczak (Nethermind).*

### Câu chuyện cho đến nay

[StarkNet](https://starknet.io/)được xây dựng từ mật mã và một hệ sinh thái mở. **mật mã**là**[STARK](https://eprint.iacr.org/2018/046.pdf)**. Đây là các giao thức dựa trên toán học mở rộng quy mô Ethereum theo các đơn đặt hàng lớn. Chúng không yêu cầu thiết lập đáng tin cậy, an toàn sau lượng tử và có thể được triển khai ngắn gọn ở mọi quy mô. Hệ sinh thái bao gồm các nhà phát triển cốt lõi, những người đã muốn xây dựng cơ sở hạ tầng và công cụ trong nhiều năm để mở rộng quy mô công nghệ chuỗi khối, cũng như các miền ứng dụng mới và sáng tạo có thể thực hiện được khi sức mạnh tính toán của Ethereum được mở rộng.

StarkNet cung cấp cho tất cả các nhà phát triển và người dùng quyền truy cập vào các lợi ích về quy mô và bảo mật của STARK, nhằm mục đích mở rộng quy mô Ethereum trong khi vẫn duy trì các giá trị cốt lõi của Ethereum. STARK được phát minh bởi những người đồng sáng lập StarkWare, người đầu tiên sử dụng chúng để xây dựng giải pháp mở rộng quy mô[StarkEx](https://starkware.co/starkex/)cho khách hàng. Sau đó, StarkWare và các nhóm nhà phát triển khác (gọi chung là “Những người đóng góp cốt lõi”) đã xây dựng[StarkNet](https://starkware.co/starknet/), một cơ sở hạ tầng công khai, phi tập trung và không cần cấp phép, để đảm bảo rằng tất cả mọi người đều có thể truy cập vĩnh viễn các công nghệ mở rộng quy mô này.

Sự ra mắt của StarkNet Alpha gần một năm trước đã thúc đẩy sự xuất hiện của một hệ sinh thái lớn hơn cam kết xây dựng và nuôi dưỡng StarkNet. Có rất nhiều nhóm các nhà phát triển trên toàn thế giới đang xây dựng cơ sở hạ tầng cốt lõi cũng như các ứng dụng mới trên đó.

### **Cách phân quyền**

Công nghệ của STARK đã trưởng thành và an toàn, nhưng StarkNet vẫn chưa đạt được trạng thái hàng hóa công cộng như Ethereum hoặc Internet. Để StarkNet đạt được mục tiêu này, việc quản trị, vận hành và phát triển của nó phải tiếp tục phi tập trung hóa. Điều này sẽ được hỗ trợ thông qua hai cơ chế:**StarkNet Foundation**và**StarkNet Token**.

#### Sự thành lập

Là một tổ chức phi lợi nhuận, sứ mệnh của Quỹ sẽ là duy trì StarkNet như một hàng hóa công cộng — một loại hàng hóa hoặc dịch vụ được cung cấp cho tất cả các thành viên trong xã hội. StarkNet là cơ sở hạ tầng không cần cấp phép nên có sẵn cho tất cả mọi người. Nó phải được duy trì tốt để được an toàn và hiệu quả cho việc sử dụng công cộng. Nó cũng không được phân biệt đối xử giữa những người dùng.

Quỹ sẽ được tài trợ bởi khoản trợ cấp một lần của Mã thông báo StarkNet. Nó sẽ khuyến khích phát triển các cơ chế từ dưới lên để cộng đồng ra quyết định đối với các câu hỏi công nghệ thiết yếu, chẳng hạn như cập nhật giao thức, giải quyết tranh chấp và tài trợ cho hàng hóa công cộng.

#### Mã thông báo

Mã thông báo StarkNet là cần thiết để vận hành hệ sinh thái, duy trì và bảo mật nó, quyết định các giá trị và mục tiêu chiến lược cũng như chỉ đạo quá trình phát triển của nó. Mã thông báo này sẽ được yêu cầu để (i) quản trị, (ii) thanh toán phí giao dịch trên StarkNet và (iii) tham gia vào cơ chế đồng thuận của StarkNet.

Chúng tôi đã đúc mười tỷ mã thông báo ban đầu đang được phân bổ cho các Nhà đóng góp cốt lõi của hệ sinh thái StarkNet, bao gồm cả StarkWare và các nhà đầu tư của StarkWare, cho các đối tác phát triển phần mềm của StarkNet và cho Tổ chức. Sắp tới (mục tiêu: tháng 9 năm 2022), mã thông báo này sẽ xuất hiện trên Ethereum dưới dạng mã thông báo ERC-20 và được yêu cầu sử dụng trong quản trị và bỏ phiếu khi nâng cấp mạng. Sau này, phí StarkNet sẽ chỉ được thanh toán bằng mã thông báo này, đồng thời đảm bảo trải nghiệm người dùng tốt cho những người dùng quan tâm đến việc thanh toán phí bằng ETH. Sau đó, quá trình tự động đúc thêm các Mã thông báo StarkNet bổ sung sẽ bắt đầu, (nghĩa là số lượng mã thông báo lưu hành sẽ lớn hơn mười tỷ).

Mô hình Mã thông báo StarkNet nhấn mạnh đến việc đền bù cho các nhà phát triển cho công việc của họ. Một phần phí đúc và giao dịch mới — phí được đánh giá để sử dụng StarkNet — sẽ được cấp cho các nhà phát triển cơ sở hạ tầng cốt lõi và nhà phát triển hợp đồng thông minh cho công việc họ đã thực hiện để thiết kế và khởi chạy giao thức, ngoài việc đền bù cho các nhà khai thác StarkNet cho công việc họ đã làm. đã làm để vận hành nó.

Lý do đầy đủ đằng sau Mã thông báo StarkNet mới và chuyên dụng được giải thích trong bài đăng[giây](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)của chúng tôi và các nguyên tắc thiết kế Mã thông báo StarkNet và phân bổ ban đầu được thảo luận trong[bài đăng thứ ba](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6).