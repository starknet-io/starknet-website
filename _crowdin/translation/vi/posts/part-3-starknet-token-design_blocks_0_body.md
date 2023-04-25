Trong bài đăng này, chúng tôi đi sâu hơn vào thiết kế của Mã thông báo StarkNet, lịch trình đúc và dòng thời gian dự kiến.

### cân nhắc

Thiết kế của Mã thông báo StarkNet được định hình bởi nhu cầu cung cấp năng lượng cho mạng bao gồm (i)**Người dùng**của StarkNet, (ii)**Người vận hành**— những người cung cấp cho mạng tài nguyên máy tính thực hiện trình tự các giao dịch, tạo ra Bằng chứng của STARK, và các nhà cung cấp dịch vụ lưu trữ dài hạn, và (iii)**Nhà phát triển**viết phần mềm cho cơ sở hạ tầng của nó và cho các ứng dụng chạy trên nó.

Các cơ chế cho cấu trúc phí và đúc mã thông báo phải là:

* Tự động hóa phần lớn, trái ngược với dựa trên sự can thiệp đáng kể của con người
* Được biết đến và thử nghiệm trong các hệ thống chuỗi khối khác
* Đơn giản để phân tích và giải thích; trong suốt
* Chống thao túng đầu cơ và trò chơi hóa không tạo ra giá trị
* Được coi là có trải nghiệm người dùng (UX) tốt

Các tùy chọn này sẽ định hình cơ chế phân bổ mã thông báo từ phí giao dịch và đúc mới do Người dùng thanh toán:

**Người vận hành**đảm bảo sự sống động liên tục của StarkNet và mang lại hiệu suất chất lượng cao của giao thức mà Người dùng yêu cầu.

**Nhà phát triển**xây dựng và duy trì phần mềm được Nhà điều hành sử dụng để bảo mật mạng và họ tạo các ứng dụng nâng cao chức năng của mạng cho người dùng. Do đó, một phần phí và tiền đúc mới sẽ được chuyển đến Nhà phát triển hợp đồng thông minh và Nhà phát triển cốt lõi, như sau:

* **Nhà phát triển hợp đồng thông minh:**giao thức StarkNet có thể tự động đo lường giá trị được cung cấp bởi các hợp đồng thông minh, thông qua phí L1 và L2 do Người dùng của các hợp đồng này trả. Giao thức StarkNet sẽ tự động phân bổ một phần phí và việc đúc tiền mới đang diễn ra cho Nhà phát triển hợp đồng thông minh. Các hợp đồng thông minh mang lại nhiều giá trị hơn cho Người dùng — được đo bằng các khoản phí trả cho họ — sẽ nhận được phần lớn mã thông báo được phân bổ cho mục đích này.
* **Nhà phát triển cốt lõi:**Giao thức StarkNet không có cách tự động định lượng sự đóng góp của các Nhà phát triển cốt lõi, chẳng hạn như những người viết mã cho trình kiểm chứng, trình sắp xếp thứ tự, nút đầy đủ, v.v. Do đó, việc phân bổ mã thông báo cho các Nhà phát triển cốt lõi đó và những người đóng góp khác mà giao thức không thể đo lường được đóng góp của họ nhất thiết phải có một số quyết định của con người. Một mô hình sẽ được thiết lập để áp dụng điều này theo cách nhất quán với mục tiêu phân quyền.
* Cơ chế chính xác để phân bổ mã thông báo từ việc đúc mới và phí cho cả hai loại Nhà phát triển vẫn chưa được xác định. Các nguyên tắc thiết kế sẽ bao gồm chống trò chơi điện tử và minh bạch.

### Phân bổ ban đầu của Mã thông báo StarkNet

Mười tỷ mã thông báo đã được StarkWare đúc ngoài chuỗi. Để làm rõ: các Mã thông báo StarkNet này không đại diện cho vốn chủ sở hữu trong StarkWare cũng như không cung cấp bất kỳ quyền tham gia nào trong StarkWare hoặc cấp bất kỳ quyền yêu cầu nào từ StarkWare. Việc cung cấp mã thông báo lưu hành sẽ tăng theo thời gian với việc đúc mã thông báo mới theo giao thức, theo một lịch trình sẽ được cộng đồng xác định sau này.\
*Do đó, nguồn cung tuần hoàn có thể không cố định.*

Do đó, việc phân bổ là:

**17%**— Nhà đầu tư của StarkWare

**32,9%**— Người đóng góp cốt lõi: StarkWare cùng các nhân viên và chuyên gia tư vấn của công ty cũng như các đối tác phát triển phần mềm của StarkNet

**50,1%**do StarkWare cấp cho Tổ chức, được phân bổ như sau:

* **9%**— Quy định của cộng đồng — dành cho những người đã thực hiện công việc cho StarkNet và hỗ trợ hoặc phát triển công nghệ cơ bản của nó, ví dụ như thông qua việc sử dụng các hệ thống StarkEx L2 trước đây. Điều quan trọng là tất cả các Điều khoản của Cộng đồng sẽ dựa trên công việc có thể kiểm chứng đã được thực hiện trong quá khứ. Ví dụ: trong phạm vi Điều khoản cộng đồng sẽ được trao cho người dùng StarkEx trước đây, việc phân bổ sẽ được xác định dựa trên việc sử dụng có thể kiểm chứng công nghệ của StarkEx diễn ra**trước ngày 1 tháng 6 năm**
* **9%**— Giảm giá cộng đồng — giảm giá bằng Mã thông báo StarkNet đến**phần**chi trả cho chi phí gia nhập StarkNet từ Ethereum. Để ngăn chặn trò chơi hóa, Giảm giá cộng đồng sẽ chỉ áp dụng cho các giao dịch xảy ra**sau**khi cơ chế giảm giá được công bố.
* **12%**— Tài trợ cho nghiên cứu và công việc được thực hiện để phát triển, thử nghiệm, triển khai và duy trì giao thức StarkNet
* **10%**— khoản dự trữ chiến lược, để tài trợ cho các hoạt động của hệ sinh thái phù hợp với sứ mệnh của Tổ chức như đã giải thích trong[bài đăng trước](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)trong loạt bài này.
* **2%**— Quyên góp cho các cơ quan và tổ chức được đánh giá cao, chẳng hạn như trường đại học, tổ chức phi chính phủ, v.v., theo quyết định của những người nắm giữ Mã thông báo StarkNet và Quỹ.
* **8,1%**Chưa phân bổ — ngân quỹ chưa phân bổ của Tổ chức được thiết lập để hỗ trợ thêm cho cộng đồng StarkNet theo cách thức do cộng đồng quyết định.

Để điều chỉnh các ưu đãi dài hạn của Người đóng góp cốt lõi và Nhà đầu tư với lợi ích của cộng đồng StarkNet và theo thông lệ chung trong các hệ sinh thái phi tập trung, tất cả các mã thông báo được phân bổ cho Người đóng góp cốt lõi và Nhà đầu tư sẽ phải chịu thời hạn khóa 4 năm, với phát hành tuyến tính và vách đá một năm.

![](/assets/1_qcosthgskfd-q6bn3yzghq-1.png)

### Có cách nào để nhận được Mã thông báo StarkNet không?

Câu trả lời ngắn gọn là có, nhưng không có lối tắt nào để nhận mã thông báo.

Phân bổ mã thông báo StarkNet và thị trường phí cũng như thiết kế đúc tiền mới ưu tiên cho các nhà phát triển cơ sở hạ tầng cốt lõi và ứng dụng dApp, cũng như những người khác đóng góp cho an ninh và sức khỏe của hệ sinh thái. Điều này có ý nghĩa gì trên thực tế liên quan đến mã thông báo?

Nếu bạn là nhà phát triển và bạn đã viết phần mềm cho cơ sở hạ tầng StarkNet hoặc cho hợp đồng thông minh, được người dùng cuối StarkNet đánh giá cao và sử dụng thực sự, thì bạn có thể mong đợi nhận được mã thông báo tự động thông qua giao thức. Một trong nhiều biện pháp bảo vệ chống lại trò chơi điện tử của cơ chế này là phí mà nhà phát triển nhận được sẽ hoàn toàn thấp hơn phí do người dùng trả.

Các nhà phát triển cũng có thể nhận được khoản trợ cấp mã thông báo cho công việc đã hoàn thành để phát triển, thử nghiệm và duy trì giao thức StarkNet. Bất kỳ khoản tài trợ nào như vậy sẽ được xác định đúng hạn bởi Tổ chức phù hợp với sứ mệnh của nó.

Nếu bạn là nhà phát triển chuỗi khối tin rằng StarkNet là câu trả lời cho nhu cầu mở rộng quy mô của Ethereum, chúng tôi khuyến khích bạn tìm hiểu thêm về[StarkNet](https://starknet.io/)và ngôn ngữ lập trình của nó,[Cairo](https://www.cairo-lang.org/)và bắt đầu phát triển hợp đồng thông minh của riêng bạn.

Nếu bạn là người dùng cuối, hãy sử dụng StarkNet — nhưng chỉ khi nó phục vụ nhu cầu của bạn hiện nay. Hãy sử dụng nó cho những giao dịch và ứng dụng mà bạn đánh giá cao,*phải để mong đợi bất kỳ phần thưởng nào trong tương lai của Mã thông báo StarkNet.*Khi Điều khoản cộng đồng được công bố, chúng sẽ chỉ đề cập đến các ảnh chụp nhanh đã xảy ra trước ngày thông báo, đồng thời sẽ lọc và loại trừ việc sử dụng được cho là lạm dụng và đánh bạc mạng, dựa trên thông tin có sẵn tại thời điểm đó thời điểm. Khi Giảm giá cộng đồng được thiết lập, chúng sẽ không bao giờ áp dụng cho các giao dịch xảy ra trước khi giảm giá được công bố, vì vậy giao dịch hôm nay với dự đoán giảm giá trong tương lai là vô ích.

### Đóng nhận xét

Xây dựng một mạng mở có nghĩa là nắm lấy những điều chưa biết. Internet, Bitcoin và Ethereum, được phát minh bởi những nhà đổi mới, những người tin rằng công cụ của họ có thể thay đổi thế giới, nhưng hoàn toàn không biết làm thế nào. Một cách khiêm tốn, chúng tôi hy vọng rằng khả năng mở rộng quy mô chuỗi khối của StarkNet sẽ tốt cho Ethereum và tốt cho một trang web phi tập trung. Chúng ta không thể biết những gì sẽ được xây dựng. Nhưng chúng tôi tin rằng StarkNet đặt khả năng công nghệ vượt trội vào tay cộng đồng sáng tạo và chúng tôi hy vọng sẽ thấy cộng đồng đó sử dụng nó theo vô số cách, nhiều cách trong số đó vẫn chưa được tưởng tượng.