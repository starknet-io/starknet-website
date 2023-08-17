### Khoảng thời gian thú vị phía trước

Alpha 4 đã được phát hành hôm nay trên Goerli. Phiên bản này là ứng cử viên phát hành Mainnet và, nếu mọi thứ diễn ra theo đúng kế hoạch, sẽ được triển khai trên Mainnet vào cuối tháng.

Alpha 4 tuân theo bản phát hành đầy đủ tính năng của Alpha 3, bao gồm các cải tiến về thời gian biên dịch Cairo, trình tạo hợp đồng, v.v. (xem[ghi chú phát hành đầy đủ](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.5.0)).

Điều quan trọng cần lưu ý: đây vẫn là phiên bản Alpha — để triển khai hợp đồng của bạn khi triển khai Mainnet, vui lòng tuân theo nguyên tắc[tích hợp](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu)của ứng dụng mới.

### Các tính năng mới

Mặc dù trọng tâm chính của phiên bản này là sẵn sàng cho việc triển khai Mainnet, nhưng nó cũng bao gồm một số tính năng mới:

#### Lấy địa chỉ của hợp đồng này

Giờ đây, các hợp đồng có thể nhận địa chỉ của riêng chúng thông qua tòa nhà chọc trời mới \`get_contract_address\`. Cuối cùng, chúng ta có thể tạm dừng hợp đồng chụp ảnh tự sướng.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Hợp đồng chụp ảnh tự sướng RIP: Tháng 9 năm 2021 - Tháng 11 năm 2021</p>&mdash; Francesco Ceccon (@ceccon_me) <a href="https://twitter.com/ceccon_me/status/1458410251078836227?ref_src=twsrc%5Etfw">ngày 10 tháng 11 năm 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### khối băm

Các khối hiện được xác định thông qua hàm băm thay vì Id. Điều này tuân theo quá trình chuyển đổi mới nhất của chúng tôi sang băm giao dịch. Tất cả các API đã được cập nhật tương ứng. Chúng tôi sẽ sớm phát hành tài liệu kỹ thuật đầy đủ của hệ thống, bao gồm cả thông số kỹ thuật của cấu trúc khối.

#### Địa chỉ hợp đồng

Phiên bản này giới thiệu một sự thay đổi đối với cách tính địa chỉ hợp đồng. Địa chỉ là hàm băm Pedersen trên địa chỉ người gọi, một muối (ngẫu nhiên hoặc do người triển khai chọn), hàm băm mã hợp đồng và hàm băm của các đối số hàm tạo, tất cả đều được thêm vào bởi một tiền tố.

```
Hash(PREFIX, caller_address, salt, contract_hash, ctr_args_hash)
```

Trong phiên bản hiện tại, địa chỉ người gọi luôn bằng 0, nhưng trong các phiên bản sau này, điều này sẽ cho phép triển khai các hợp đồng trực tiếp từ các hợp đồng hiện có.

Lưu ý rằng lược đồ này rất giống với CREATE2.

[Xem ghi chú phát hành đầy đủ](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.6.0)

#### Cầu mã thông báo

Cầu mã thông báo là một phần quan trọng của cơ sở hạ tầng StarkNet. Chúng cho phép chuyển tiền đến và đi từ StarkNet. Cầu không được triển khai tại thời điểm xuất bản, nhưng nó sẽ có sẵn sau vài ngày nữa — cùng với tài liệu đầy đủ về chức năng và cách sử dụng của nó. Một điều quan trọng cần lưu ý là cây cầu sử dụng giao thức[L1 <> L2 nhắn tin](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html). Do đó, nó cung cấp thời gian rút tiền ngắn — sau khi một lần rút tiền được đưa vào một đợt và được chấp nhận trên L1, tiền sẽ có sẵn ngay lập tức cho người dùng trên L1.

Đây là phiên bản đầu tiên của cầu nối mã thông báo và chúng tôi rất muốn nhận được phản hồi từ hệ sinh thái về nó.

### Tham gia StarkNet

Chưa bao giờ có thời điểm tốt hơn để tham gia cộng đồng StarkNet đang phát triển. Bạn có thể tham gia cuộc trò chuyện trong[StarkNet discord](https://discord.gg/uJ9HZTUk2Y), tham gia hội thảo trực tuyến[](https://forms.reform.app/starkware/join-a-starknet-workshop/2ma1x8)hoặc sử dụng một trong[hướng dẫn](https://www.cairo-lang.org/docs/hello_starknet/index.html)để bắt đầu xây dựng ứng dụng đầu tiên của riêng bạn.

**Update (tháng 11 năm 2021):**StarkNet Alpha hoạt động trên Ethereum Mainnet