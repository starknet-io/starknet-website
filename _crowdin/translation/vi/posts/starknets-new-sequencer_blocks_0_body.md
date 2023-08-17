### TL; DR

* Một trình sắp xếp chuỗi StarkNet mới đang được phát triển
* Nó là mã nguồn mở theo giấy phép Apache 2.0
* Mục tiêu đầu tiên của nó là tăng thông lượng của StarkNet

### Một trình sắp xếp mới sáng bóng

Chúng tôi vui mừng thông báo rằng một StarkNet Sequencer mới đang được phát triển. Khi ngăn xếp công nghệ của StarkNet chuyển sang nguồn mở, sau[Cairo 1.0](https://medium.com/starkware/open-sourcing-cairo-1-0-b3100a664bb0)và[Papyrus Full Node](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202), bây giờ chúng ta tiếp tục với trình sắp xếp thứ tự mới của StarkNet. Nó sẽ là nguồn mở, có sẵn theo giấy phép Apache 2.0 và bạn có thể kiểm tra[repo](https://github.com/starkware-libs/blockifier)ngay bây giờ!

Xây dựng một Sequencer mới là một phần của Lộ trình[StarkNet](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de)mà chúng tôi đã trình bày cách đây vài tháng. Việc triển khai trình sắp xếp thứ tự mới sẽ bắt đầu bằng việc thay thế Trình chặn**bằng**, mô-đun trong trình sắp xếp thứ tự thực hiện thực thi khối. Như đã giải thích trong lộ trình, dự kiến sẽ mang lại lợi ích cho hiệu suất của StarkNet.

Cách tiếp cận của chúng tôi để xây dựng trình sắp xếp thứ tự này giống như cách tiếp cận đã hướng dẫn chúng tôi trong StarkNet Alpha. Trình sắp xếp thứ tự**sẽ được triển khai trong giai đoạn**và hôm nay chúng tôi sẽ chia sẻ mô-đun đầu tiên của nó. Theo thời gian, các thành phần mới của trình sắp xếp thứ tự sẽ được hoàn thiện, cho đến khi cuối cùng, trình sắp xếp dựa trên Rust sẽ thay thế hoàn toàn trình sắp xếp dựa trên Python hiện tại.

### Trình sắp xếp thứ tự làm gì?

Trên StarkNet, sau khi người dùng gửi giao dịch, điểm dừng đầu tiên trong hành trình mở rộng quy mô STARK của giao dịch là trình sắp xếp thứ tự. Trong giao thức StarkNet, trình sắp xếp thứ tự chịu trách nhiệm sắp xếp các giao dịch và tạo khối. Sau khi khối được tạo bởi trình sắp xếp thứ tự và được phê duyệt bởi giao thức đồng thuận, người chứng minh sẽ tiếp quản và tạo bằng chứng cho L1.

![](/assets/1_ndrekwqunjixo_wskdeycw-1.png)

### nguồn mở

StarkNet Alpha ra mắt trên Mainnet vào tháng 11 năm 2021. Ngay từ đầu, nó đã cam kết chia sẻ sức mạnh của quy mô STARK với thế giới.

Hôm nay, chúng tôi sẽ phát hành mô-đun đầu tiên trong dòng mô-đun của trình sắp xếp mã nguồn mở mới. Sẽ mất vài tháng để tất cả các mô-đun và mô-đun con được triển khai. Nguồn mở mọi thứ sẽ cho phép các thành viên cộng đồng đóng góp vào sự phát triển và kiểm tra cơ sở mã.

Điều này sẽ đưa StarkNet tiến gần hơn đến điểm sắp xếp thứ tự phi tập trung. Chúng tôi hiện đang thiết kế giao thức phi tập trung của StarkNet và chúng tôi khuyến khích cộng đồng tham gia vào nghiên cứu[và thảo luận](https://community.starknet.io/t/starknet-decentralized-protocol-consensus/5386).

### Hiệu suất

Trình sắp xếp ban đầu của StarkNet phần lớn là sự điều chỉnh của cơ sở hạ tầng StarkEx. Giờ đây, cần có cơ sở hạ tầng được xây dựng đặc biệt cho các yêu cầu của một mạng phi tập trung có hiệu suất cao.

Được xây dựng bằng Rust, trình sắp xếp thứ tự mới được thiết kế và phát triển có tính đến hiệu suất. Trình sắp xếp thứ tự mới cũng được xây dựng trên nền tảng vững chắc: Papyrus, nút đầy đủ[StarkNet mới,](https://medium.com/starkware/papyrus-an-open-source-starknet-full-node-396f7cd90202)sẽ xử lý việc quản lý trạng thái và cairo-rs, Cairo-VM mới của LambdaClass, sẽ tăng tốc quá trình thực thi Cairo. Chúng tôi hy vọng trình sắp xếp thứ tự mới sẽ cải thiện trình sắp xếp thứ tự hiện tại ở mọi khía cạnh. Thông lượng và độ trễ của mạng dự kiến sẽ cải thiện đáng kể với sự tích hợp của trình sắp xếp thứ tự này trong StarkNet.

Chúng tôi cũng mong đợi các công cụ phát triển và cơ sở hạ tầng khác có thể sử dụng trình sắp xếp thứ tự mới để cải thiện trải nghiệm phát triển. Hiệu suất của nút đầy đủ cũng như tất cả các khung thử nghiệm dự kiến sẽ được cải thiện.

### Bản tóm tắt

Hôm nay, chúng tôi rất vui mừng thông báo trình sắp xếp chuỗi nguồn mở mới. Mô-đun đầu tiên của nó đã có sẵn để cộng đồng xem xét và sẽ được theo sau với nhiều mô-đun hơn trong những tháng tiếp theo. Chúng tôi cũng rất vui khi thực hiện một bước nữa trong lộ trình nâng cao hiệu suất của StarkNet. Chúng tôi mong muốn làm cho mạng trở nên hiệu quả và dễ tiếp cận hơn, đồng thời chúng tôi đánh giá cao sự hỗ trợ của tất cả những người đã tham gia cùng chúng tôi trên hành trình này.