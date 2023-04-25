### TL; DR

* Cải thiện trừu tượng hóa tài khoản theo tinh thần của EIP-4337

1. Xác thực - Thực hiện phân tách
2. Tính duy nhất của giao dịch hiện được đảm bảo trong giao thức (Nonce)

* Cơ chế phí được mở rộng để bao gồm:

1. Tin nhắn L1 → L2
2. Khai báo giao dịch

* Ít thay đổi cú pháp Cairo

### Giới thiệu

Chúng tôi rất vui mừng được giới thiệu StarkNet Alpha 0.10.0. Phiên bản này là một bước nữa để mở rộng quy mô Ethereum mà không ảnh hưởng đến bảo mật và phân cấp.

Bài đăng trên blog này mô tả ngắn gọn các tính năng chính của phiên bản này. Để biết danh sách đầy đủ các thay đổi, hãy kiểm tra[ghi chú phát hành](https://github.com/starkware-libs/cairo-lang/releases). Để biết thêm thông tin chi tiết, hãy xem tài liệu[](https://docs.starknet.io/).

### Thay đổi trừu tượng hóa tài khoản

Chúng tôi tiếp tục với[tóm tắt tài khoản của StarkNet](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781). Phiên bản này giới thiệu các thay đổi lấy cảm hứng từ[EIP-4337](https://eips.ethereum.org/EIPS/eip-4337).

#### Xác thực/Thực hiện phân tách

Cho đến bây giờ, chức năng \_\_execute\_\_ của tài khoản chịu trách nhiệm cho cả việc xác thực và thực hiện giao dịch. Trong 0.10.0, chúng tôi ngắt kết nối này và giới thiệu một hàm \_\_validate\_\_ riêng biệt cho các tài khoản. Khi nhận được một giao dịch, trước tiên, hợp đồng tài khoản sẽ gọi \_\_validate\_\_, sau đó, nếu thành công, hãy chuyển sang \_\_execute\_\_.

Việc phân tách xác thực/thực thi cung cấp sự phân biệt ở cấp độ giao thức giữa các giao dịch không hợp lệ và được hoàn nguyên (chưa hợp lệ). Nhờ đó, các trình sắp xếp thứ tự sẽ có thể tính phí cho việc thực hiện một giao dịch hợp lệ bất kể giao dịch đó có được hoàn nguyên hay không.

#### nonce

Trong phiên bản 0.10.0, một trường nonce được thêm vào để thực thi tính duy nhất của giao dịch ở cấp độ giao thức. Cho đến nay, nonce được xử lý ở cấp độ hợp đồng tài khoản, điều đó có nghĩa là một giao dịch có cùng hàm băm có thể được thực hiện hai lần về mặt lý thuyết.

Tương tự như Ethereum, mọi hợp đồng hiện bao gồm một nonce, đếm số lượng giao dịch được thực hiện từ tài khoản này. Hợp đồng tài khoản sẽ chỉ chấp nhận các giao dịch có nonce phù hợp, nghĩa là nếu nonce hiện tại của tài khoản là X, thì nó sẽ chỉ chấp nhận các giao dịch với nonce X.

#### Phiên bản giao dịch mới

Để cho phép khả năng tương thích ngược, chúng tôi sẽ giới thiệu hai thay đổi đó thông qua phiên bản giao dịch mới —[v1](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C). Những thay đổi đó sẽ chỉ áp dụng cho phiên bản mới và các tài khoản cũ hơn sẽ vẫn có thể thực hiện các giao dịch phiên bản 0.

Lưu ý — giao dịch v0 hiện không được dùng nữa và sẽ bị xóa trong StarkNet Alpha v0.11.0. Vui lòng đảm bảo bạn nâng cấp để sử dụng phiên bản giao dịch mới.

Để biết thêm thông tin chi tiết về phiên bản giao dịch, vui lòng đọc tài liệu[](https://docs.starknet.io/docs/Blocks/transactions/#invoke-transaction-version-1%5C).

#### Cơ chế phí

Phiên bản mới cho phép gộp phí cho 2 thành phần bắt buộc:

* [Thông điệp L1→L2](https://docs.starknet.io/docs/L1-L2%20Communication/messaging-mechanism#l1--l2-message-fees)
* [Khai báo giao dịch](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction)

Các khoản phí này sẽ không bắt buộc trong phiên bản này và sẽ chỉ được thực thi kể từ StarkNet Alpha v0.11.0.

#### Thay đổi cú pháp Cairo

Để dần dần nâng cấp Cairo,[Cairo 1.0](https://www.youtube.com/watch?v=Ny4Rv6ztINU), phiên bản này bao gồm một số thay đổi cú pháp.

Để giảm thiểu sự bất tiện, phiên bản phát hành sẽ bao gồm tập lệnh di chuyển[](https://www.youtube.com/watch?v=kXs59zaQrsc)tự động áp dụng các thay đổi trên. Bạn có thể tìm thêm chi tiết[tại đây](https://github.com/starkware-libs/cairo-lang/releases).

### Cái gì tiếp theo?

* Trong một vài tuần nữa, chúng tôi dự định giới thiệu tính năng song song hóa vào trình sắp xếp thứ tự, cho phép sản xuất khối nhanh hơn (V0.10.1)
* Chúng tôi sẽ sớm hoàn thành phần cuối cùng phải có trong thanh toán phí — Triển khai tài khoản
* Cairo 1.0 phát hành! Thông tin thêm về điều đó trong một bài viết sắp tới.

### Làm thế nào tôi có thể tham gia nhiều hơn?

* Truy cập[starknet.io](https://starknet.io/)để biết tất cả thông tin, tài liệu, hướng dẫn và cập nhật về StarkNet.
* Tham gia[StarkNet Discord](http://starknet.io/discord)để được hỗ trợ nhà phát triển, thông báo về hệ sinh thái và trở thành một phần của cộng đồng.
* Truy cập[Diễn đàn StarkNet](http://community.starknet.io/)để cập nhật thông tin và tham gia các cuộc thảo luận nghiên cứu về StarkNet.

Chúng tôi luôn sẵn lòng nhận phản hồi về tài liệu[](https://docs.starknet.io/)của chúng tôi!