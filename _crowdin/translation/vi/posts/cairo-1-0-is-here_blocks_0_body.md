### TL; DR

* Phiên bản đầu tiên của Cairo 1.0 đã có tại đây!
* Các nhà phát triển có thể bắt đầu viết và thử nghiệm các chương trình Cairo 1.0
* Tính năng tương đương với phiên bản cũ hơn của Cairo sẽ đạt được trong vài tuần tới
* Hỗ trợ cho các hợp đồng StarkNet sẽ được bổ sung trong phiên bản StarkNet Alpha sắp tới

### Lý lịch

Chúng tôi rất vui mừng thông báo rằng phiên bản công khai đầu tiên của Cairo 1.0 hiện đã có sẵn. Điều này đánh dấu một cột mốc quan trọng trong quá trình phát triển của Cairo, được giới thiệu lần đầu tiên vào năm 2020 dưới dạng ngôn ngữ lập trình hoàn chỉnh Turing để viết các chương trình có thể chứng minh được STARK một cách hiệu quả. Cairo 1.0 là một ngôn ngữ cấp cao giống như Rust. Giống như Rust, nó nhằm mục đích cho phép các nhà phát triển dễ dàng viết mã hiệu quả và an toàn.

Kể từ khi thành lập, Cairo đã được sử dụng để xây dựng các ứng dụng Lớp 2 có[xử lý](https://dashboard.starkware.co/starkex)giao dịch trị giá hơn 790 tỷ đô la, xử lý hơn 300 triệu giao dịch và đúc hơn 90 triệu NFT, tất cả đều được thực hiện ngoài chuỗi và thanh toán trên Ethereum với tính toàn vẹn toán học được đảm bảo bởi các bằng chứng của STARK. Cairo trở thành ngôn ngữ lập trình được sử dụng nhiều thứ 4 trong hệ sinh thái blockchain[](https://defillama.com/languages)nói chung. Với việc phát hành Cairo 1.0, chúng tôi đặt mục tiêu làm cho ngôn ngữ này trở nên dễ tiếp cận và thân thiện với người dùng hơn đồng thời giới thiệu các tính năng mới giúp nâng cao tính an toàn và tiện lợi.

Một trong những thay đổi quan trọng nhất trong Cairo 1.0 là cú pháp. Chúng tôi đã lấy cảm hứng từ**Rust**để tạo ra một ngôn ngữ thân thiện với nhà phát triển hơn, dễ đọc và viết hơn. Phiên bản mới của Cairo cho phép viết mã an toàn hơn (được gõ mạnh, quyền sở hữu và mượn, v.v.), đồng thời mang tính biểu đạt cao hơn.

Cairo 1.0 cũng giới thiệu Sierra, một đại diện trung gian mới đảm bảo có thể chứng minh**trong mỗi**chạy Cairo. Điều này làm cho Cairo 1.0 đặc biệt phù hợp để sử dụng trong mạng không cần cấp phép như StarkNet, nơi nó có thể cung cấp khả năng chống kiểm duyệt và bảo vệ DoS mạnh mẽ. Bạn có thể đọc thêm về Sierra trong[trước](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)bài đăng của chúng tôi.

## hương vị đầu tiên!

### Bạn có thể làm gì hôm nay?

Các nhà phát triển có thể bắt đầu viết, biên dịch và thử nghiệm các chương trình Cairo 1.0! Chúng tôi khuyến khích các nhà phát triển bắt đầu thử nghiệm với Cairo 1.0 và làm quen với các tính năng và cú pháp mới.

Vì Cairo 1.0 vẫn đang được phát triển tích cực và các tính năng mới liên tục được bổ sung, hãy kiểm tra kho lưu trữ[Cairo](https://github.com/starkware-libs/cairo/)để biết các bản cập nhật mới nhất.

### Cái gì tiếp theo?

Hiện tại, Cairo 1.0 vẫn thiếu một số tính năng được hỗ trợ trong phiên bản Cairo cũ hơn ([xem bảng này để biết chi tiết](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)). Cột mốc tiếp theo của chúng tôi, dự kiến trong vài tuần tới, sẽ cung cấp tính năng của Cairo 1.0 ngang bằng với phiên bản cũ hơn. Bạn có thể theo dõi tiến trình hướng tới mốc[đó tại đây](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md).

### hỗ trợ starnet

Viết hợp đồng StarkNet ở Cairo 1.0 được hỗ trợ (mặc dù vẫn còn thiếu một số tính năng). Tuy nhiên, StarkNet chưa hỗ trợ triển khai và thực hiện các hợp đồng Cairo 1.0. StarkNet Alpha V0.11.0, được lên kế hoạch trong vài tuần tới, sẽ giới thiệu khả năng triển khai và chạy các hợp đồng Cairo 1.0. Việc nâng cấp lên v0.11.0 sẽ đánh dấu sự khởi đầu của Thời kỳ chuyển đổi hướng tới một hệ thống chỉ chạy các hợp đồng Cairo 1.0. Giai đoạn Chuyển tiếp này sẽ kết thúc với[Tái tạo](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4), dự kiến một vài tháng sau đó.

![](/assets/0_odxbxeacqdwizlfw.jpg)

### Nào cùng xây!

Mục tiêu của StarkNet là mở rộng Ethereum theo cấp số nhân bằng cách sử dụng tính toàn vẹn toán học của STARK và mục tiêu của Cairo là làm cho quy mô theo cấp số nhân này có thể truy cập được đối với các nhà phát triển. Khả năng truy cập có nghĩa là ngôn ngữ lập trình hiệu quả, dễ đọc và viết cũng như an toàn khi sử dụng. Chúng tôi hy vọng việc phát hành Cairo 1.0 sẽ truyền cảm hứng cho nhiều nhà phát triển hơn nữa tham gia StarkNet và mở rộng quy mô Ethereum để đáp ứng nhu cầu toàn cầu.