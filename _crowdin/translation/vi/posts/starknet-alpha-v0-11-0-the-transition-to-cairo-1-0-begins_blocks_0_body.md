## TL; DR

* Starknet alpha v0.11.0 đã ra mắt và hoạt động trên Testnet
* Giờ đây, bạn có thể triển khai và tương tác với các hợp đồng Cairo 1.0 trên Starknet Testnet!
* Tính toán trên Starknet rẻ hơn gấp 5 lần!
* Lần đầu tiên, bản nâng cấp Mainnet lên Starknet alpha v0.11.0 sẽ được bỏ phiếu quản trị
* Điều này đánh dấu sự khởi đầu của giai đoạn chuyển tiếp trước[Regenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)
* Việc triển khai các hợp đồng Cairo 1.0 trên Mainnet sẽ chỉ được kích hoạt sau vài tuần chạy trên Testnet, sau khi chúng tôi đảm bảo hệ thống mới hoạt động trơn tru.

## Giới thiệu

Chúng tôi rất vui mừng thông báo rằng Starknet alpha v0.11.0 rất được chờ đợi đã có mặt trên Testnet! Tại sao đây là một bước tiến lớn đối với Starknet? Trong Starknet v0.11.0, bạn có thể khai báo, triển khai và chạy[hợp đồng thông minh Cairo 1.0](https://medium.com/starkware/cairo-1-0-is-here-7e1ac8377038). Chúng tôi cũng giới thiệu một lệnh gọi hệ thống mới cho phép chuyển đổi suôn sẻ các hợp đồng hiện tại sang triển khai Cairo 1.0.

Cairo 1.0 cải thiện Starknet ở hai khía cạnh khác nhau. Đầu tiên, nó cải thiện trải nghiệm phát triển bằng cách cung cấp một ngôn ngữ lập trình phong phú hơn, ngôn ngữ này giới thiệu (trong số những thứ khác) các loại/điểm chung/đặc điểm/xử lý lỗi cho Cairo. Thứ hai, Cairo 1.0 đóng một vai trò quan trọng trong hành trình phân cấp của Starknet: các hợp đồng Cairo 1.0 được gửi trong bản biên dịch Starknet alpha v0.11.0 tới Sierra. Sierra đảm bảo rằng mọi việc thực hiện hợp đồng đều có thể chứng minh được, đây là một tài sản quan trọng trong Starknet phi tập trung.

Một cải tiến quan trọng khác sắp có trong phiên bản này là giảm chi phí tính toán gấp 5 lần. Điều này sẽ làm cho Starknet trở nên thân thiện hơn với các ứng dụng chuyên sâu về tính toán. Thêm chi tiết dưới đây.

## Sẵn sàng cho Tái sinh

Starknet alpha v0.11.0 đánh dấu sự khởi đầu của Giai đoạn chuyển đổi, giai đoạn này sẽ cho phép chuẩn bị trước quá trình Tái tạo của Starknet. Kế hoạch Tái tạo của Starknet là[được xuất bản](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)vài tháng trước và nó tập trung vào việc chuyển đổi từ một hệ thống dựa trên Cairo 0 sang một hệ thống dựa trên Cairo 1.0.

Trong giai đoạn Chuyển đổi, các hợp đồng Cairo 0 hiện tại (nếu chúng có thể nâng cấp được) có cơ hội duy trì địa chỉ và bộ nhớ của chúng, đồng thời chuyển đổi liền mạch việc triển khai của chúng sang Cairo 1.0 (xem phần tiếp theo).

Là người dùng Starknet, điều này có nghĩa là bạn chỉ cần nâng cấp ví của mình sau khi triển khai Cairo 1.0 mới cho tài khoản của bạn được phát hành (bạn sẽ có thể thực hiện việc này bất kỳ lúc nào cho đến chính Regenesis). Dự kiến sẽ không có thời gian ngừng hoạt động, tất cả các dapp trong hệ thống sẽ tiếp tục hoạt động như bình thường.

Sau Regenesis, Starknet sẽ ngừng hỗ trợ các hợp đồng Cairo 0 còn lại trên toàn hệ thống. Điều này sẽ được thông báo trước và các nhà phát triển sẽ có đủ thời gian để di chuyển hợp đồng của họ. Giai đoạn chuyển đổi dự kiến sẽ kéo dài vài tháng và các nhà phát triển dapp đã có thể bắt đầu chuyển việc triển khai của họ sang Cairo 1.0. Khi kết thúc giai đoạn Chuyển đổi, Quá trình Tái tạo sẽ xảy ra.

## Di chuyển suôn sẻ đến Cairo 1.0

Với quá trình chuyển đổi sang Cairo 1.0, các hợp đồng Cairo 0 hiện có không được dùng nữa và sẽ không còn được hỗ trợ khi Regenesis. Để cho phép các hợp đồng Cairo 0 có thể nâng cấp tiếp tục hoạt động, ngay cả sau khi Regenesis và duy trì trạng thái được xây dựng cho đến thời điểm đó, chúng tôi đã thêm một lệnh gọi hệ thống mới — ['replace_class'](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#replace_class_syscall). Các hợp đồng có thể nâng cấp không có vấn đề gì với việc nâng cấp lên triển khai Cairo 1.0, nhưng proxy cơ bản (hợp đồng nắm giữ trạng thái thực tế) sẽ vẫn bị kẹt với triển khai Cairo 0. Toà nhà chọc trời \`replace_class\` giải quyết vấn đề này bằng cách cho phép hợp đồng proxy thay thế lớp bên dưới của nó, tức là giữ nguyên địa chỉ và bộ nhớ, nhưng thay thế việc triển khai.

## Tính toán bây giờ rẻ hơn gấp 5 lần!

Ngày nay, phí giao dịch Starknet có hai thành phần chính: Tính toán và dữ liệu trên chuỗi. Yếu tố tính toán của phí giao dịch Starknet được xác định bởi chi phí cận biên của việc xác minh bằng chứng của nó trên L1 (xem[tài liệu](https://docs.starknet.io/documentation/architecture_and_concepts/Fees/fee-mechanism/)để biết thêm chi tiết).

Ban đầu, các bước 200m ở Cairo của chúng tôi trong một bằng chứng yêu cầu 5 triệu khí để xác minh dẫn đến ước tính ngây thơ là 0,05 khí cho mỗi bước ở Cairo. Kể từ đó, chúng tôi đã chuyển sang[bằng chứng đệ quy](https://medium.com/starkware/recursive-starks-78f8dd401025)cho phép giảm đáng kể chi phí xác minh L1 (chỉ gốc của cây đệ quy đạt đến L1). Bây giờ là lúc để cập nhật các ước tính ban đầu của chúng tôi cho phù hợp — giá của mỗi bậc thang Cairo trên L2 sẽ giảm 5 lần và hiện sẽ tiêu tốn 0,01 gas.

Việc giảm chi phí này là đáng kể đối với các ứng dụng chuyên sâu về tính toán, chẳng hạn như các hợp đồng tài khoản có chữ ký không phải bản địa. Các giao dịch đơn giản sẽ giảm một chút chi phí (~5%). Trong các phiên bản sau, chúng tôi sẽ xử lý thành phần thứ hai: chi phí dữ liệu trên chuỗi. Sau khi các lựa chọn thay thế cho dữ liệu trên chuỗi được giới thiệu với Starknet (hay còn gọi là Volition), việc giảm chi phí sẽ được cảm nhận trên toàn diện.

## Bầu chọn đầu tiên về quản trị Starknet

Giai đoạn đầu tiên của Quản trị Starknet đã ra mắt (chi tiết khác[tại đây](https://medium.com/starknet-foundation/starknets-governance-first-phase-4614c7566f40)). Các thành viên cộng đồng hiện có thể tham gia định hình Starknet thông qua một kênh bổ sung, cụ thể là bỏ phiếu về các thay đổi giao thức.

Các giai đoạn đầu tiên của Quản trị Starknet sẽ tập trung vào nâng cấp giao thức Starknet. Mọi bản nâng cấp phiên bản Starknet trước tiên sẽ được triển khai trên Testnet; người bình chọn sẽ có khoảng thời gian 6 ngày để kiểm tra và thử nghiệm phiên bản nâng cấp khi phiên bản này chạy trên Goerli. Trong thời gian này, một đề xuất Ảnh chụp nhanh sẽ được mở và cộng đồng có thể bỏ phiếu về việc có phê duyệt phiên bản mới để triển khai Mainnet hay không.

Nếu đề xuất nhận được đa số phiếu bầu 'CÓ' trong thời gian bỏ phiếu 6 ngày, thì đề xuất được thông qua và Starknet Mainnet sẽ được nâng cấp tương ứng.

Starknet alpha v0.11.0 là phiên bản Starknet đầu tiên được bình chọn. Bình chọn Starknet alpha v0.11.0 sẽ mở trong sáu ngày kể từ khi triển khai Testnet.

Liên kết có liên quan:

* [không gian chụp nhanh](https://snapshot.org/#/starknet.eth/proposal/0x00889bc468509610e516e8602f00b21ca8c32466dd4f0140eca38becb7f40bef)
* [Trang khám phá ủy quyền](https://delegate.starknet.io/)
* Chuỗi thảo luận Starknet alpha v0.11.0 trên[Diễn đàn cộng đồng](https://community.starknet.io/t/proposal-starknet-alpha-v0-11-0/50334)

## Cairo 1.0 và Sierra

Sierra (**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**tion) là một biểu diễn trung gian biên dịch thành Cairo assembly (CASM). Trước Starknet alpha v0.11.0, một nhà phát triển sẽ biên dịch Cairo 0 thành CASM và gửi kết quả tới trình giải mã Starknet. Với Cairo 1.0, các nhà phát triển biên dịch mã của họ sang Sierra và gửi biểu diễn trung gian này tới trình sắp xếp thứ tự. Trình sắp xếp thứ tự sau đó sẽ biên dịch nó thành CASM. Sierra được đảm bảo biên dịch thành “CAM an toàn”, tức là một tập hợp con của CASM không thể bị lỗi, làm cho mỗi và mọi lần thực thi đều có thể chứng minh được. Điều này đảm bảo rằng trình sắp xếp chuỗi sẽ có thể tính phí ngay cả đối với các giao dịch được hoàn nguyên, bảo vệ khỏi DOS. Để biết thêm thông tin, hãy xem[tài liệu](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/).

![](https://miro.medium.com/v2/resize:fit:1400/0*KsAwaJTIsOuCsJIe)

Starknet alpha 0.11.0 sẽ sử dụng phiên bản[Cairo 1.0-alpha.6](https://github.com/starkware-libs/cairo/releases/tag/v1.0.0-alpha.6). Phiên bản này gần bằng[tính năng tương đương](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)với Cairo 0, với tất cả các cuộc gọi hệ thống Starknet đã có mặt.

Lưu ý rằng trình sắp xếp chuỗi Starknet sử dụng phiên bản trình biên dịch cố định, có nghĩa là các cải tiến ngôn ngữ có thể không khả dụng ngay lập tức trong Starknet và sẽ chỉ khả dụng sau khi cập nhật phiên bản Starknet. Cụ thể, trong khi những cải tiến ảnh hưởng đến quá trình biên dịch Cairo 1.0 → Sierra có thể có hiệu lực ngay lập tức, thì những thay đổi đối với trình biên dịch Sierra → CASM (xem[tài liệu](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/)để biết thêm chi tiết) sẽ cần đợi bản nâng cấp Starknet.

## Cái nào là mới?

### Loại giao dịch mới — Khai báo v2

Chúng tôi đang thêm[một loại giao dịch mới](https://docs.starknet.io/documentation/architecture_and_concepts/Blocks/transactions/#declare_v2_cairo_1_0)để khai báo các lớp Cairo 1.0.

Phiên bản giao dịch \`declare\` mới này tương tự như \`declare\` hiện có, với hai điểm khác biệt quan trọng:

* Đối tượng lớp đang được gửi hiện đại diện cho Sierra chứ không phải CASM, tức là ngữ nghĩa của lớp được xác định bởi biểu diễn Sierra.
* Người dùng cũng đang ký mã băm lớp đã biên dịch. Đây là một bước quan trọng cho đến khi quá trình biên dịch Sierra→CASM được chứng minh là một phần của Hệ điều hành Starknet.

Để biết thêm chi tiết, hãy xem[tài liệu](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#what_to_expect).

Theo quan điểm của nhà phát triển, trải nghiệm vẫn như cũ. Sau khi viết mã Cairo 1.0, bạn có thể sử dụng CLI để khai báo lớp.

**Lưu ý rằng ban đầu, các giao dịch \`declare v2\` sẽ không được chấp nhận trên Starknet Mainnet. Sau một thời gian thử nghiệm trên Testnet, loại giao dịch mới sẽ được kích hoạt trên Mainnet và các lớp Cairo 1.0 sẽ khả dụng.**

### Poseidon ở đây

[Poseidon](https://www.poseidon-hash.info/)là một họ các hàm băm được thiết kế để có các mạch đại số rất hiệu quả. Do đó, chúng có thể rất hữu ích trong các hệ thống chứng minh ZK như STARK và SNARK. Kể từ Starknet alpha v0.11.0, các nhà phát triển sẽ có thể sử dụng Poseidon. Ngoài ra, một số tính toán hàm băm là một phần của giao thức Starknet sẽ chuyển sang Poseidon (cụ thể là hàm băm lớp, hàm băm lớp đã biên dịch và các phần của cam kết trạng thái sẽ sử dụng Poseidon, xem[tài liệu](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#poseidon_hash)để biết thêm chi tiết). Trong tương lai, nhiều thành phần bên trong sẽ chuyển sang sử dụng hàm băm Poseidon.

Bạn có thể tìm thấy phiên bản và tham số chính xác được sử dụng trong Starknet[tại đây](https://docs.starknet.io/documentation/architecture_and_concepts/Hashing/hash-functions/#poseidon_hash).

### thay đổi linh tinh

Giống như các phiên bản Starknet trước đây, bản nâng cấp cũng có ý nghĩa đối với các API của chúng tôi và các thành phần cấp thấp khác. Dưới đây chúng tôi liệt kê những điều đó và giải quyết những thay đổi cụ thể đã được thực hiện:

* giao dịch gọi/khai báo v0 không còn được hỗ trợ
* Tin nhắn L1→L2 hiện yêu cầu[phí](https://docs.starknet.io/documentation/architecture_and_concepts/L1-L2_Communication/messaging-mechanism/#l1-l2_message_fees). Nghĩa là, các tin nhắn được gửi với mức phí bằng 0 sẽ không được xử lý bởi trình sắp xếp chuỗi Starknet
* Định dạng dữ liệu trên chuỗi là[thay đổi](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/#on_chain_data_post_v0_11_0)
* [API thay đổi](https://docs.starknet.io/documentation/starknet_versions/upcoming_versions/#api_changes)(không phải tất cả các thay đổi đều được liệt kê ở đây, vui lòng tham khảo tài liệu để biết danh sách đầy đủ):
* đã thêm điểm cuối \`get_compiled_class_by_class_hash\` mới
* \`get_class_by_hash\` trả về cả hai lớp Cairo 0 / Cairo 1.0 (tùy thuộc vào hàm băm được yêu cầu)
* \`get_state_update\` có một phần mới dành cho các lớp được thay thế và các khai báo được phân chia giữa các lớp Cairo 0 và Cairo 1.
* \`estimate_fee\` và \`simulate_tx\` hiện có thể bỏ qua xác thực
* A[mới](https://github.com/starkware-libs/starknet-specs/releases/tag/v0.3.0-rc1)phiên bản JSON-RPC của Starknet

## Điều gì sắp tới?

Hiện tại, tất cả cơ sở hạ tầng liên quan đến Cairo 1.0 đã được đưa vào sử dụng, bạn có thể mong đợi:

* Cải tiến ngôn ngữ hơn nữa cho Cairo 1.0
* Cải thiện hiệu suất:[như đã hứa](https://medium.com/starkware/starknet-performance-roadmap-bb7aae14c7de), chúng tôi tiếp tục hướng tới việc tăng đáng kể TPS. Bước tiếp theo trong lộ trình là chuyển đổi sang trình tự sắp xếp thứ tự[Rust](https://github.com/starkware-libs/blockifier), được phát triển mở theo giấy phép Apache 2.0. Trình sắp xếp thứ tự mới sẽ sử dụng nút đầy đủ[Rust CairoVM](https://github.com/lambdaclass/cairo-rs)và nút đầy đủ[Papyrus](https://github.com/starkware-libs/papyrus), tạo thành Bộ ba hiệu suất.
* Ngoại tuyến[DA](https://docs.starknet.io/documentation/architecture_and_concepts/Data_Availability/on-chain-data/)! Trong phiên bản này, chúng tôi đã xử lý thành phần tính toán của chi phí giao dịch. Trong các phiên bản sắp tới, chúng tôi sẽ xử lý chi phí dữ liệu trên chuỗi, hiện là chi phí chiếm ưu thế đối với các giao dịch trung bình.

![](/assets/starknet-alpha-v0.11.0-diagram.png)