### TL; DR

* StarkNet Alpha 0.7.0 được phát hành cho Goerli; đóng gói với những cải tiến
* Hợp đồng hiện có thể được nâng cấp bằng Mẫu nâng cấp proxy
* Hợp đồng hiện có thể phát ra Sự kiện
* Hỗ trợ cho các lệnh gọi hệ thống Block Number và Block Timestamp được chờ đợi từ lâu

### giới thiệu

Chúng tôi rất vui khi phát hành Alpha 0.7.0, một phiên bản có nhiều tính năng và cải tiến mới. Một trong những yếu tố kích thích tốt nhất đối với StarkNet trong vài tháng qua là sự tham gia ngày càng tăng của cộng đồng trong việc định hình tương lai của StarkNet. Phiên bản này giải quyết một số nhu cầu bức thiết của cộng đồng.

#### Thay đổi quy ước đặt tên

Độc giả tinh ý có thể nhận thấy rằng bản phát hành StarkNet Alpha trước đó được đặt tên là Alpha 4, trong khi chúng tôi hiện đang phát hành Alpha 0.7.0. Chúng tôi đã quyết định bỏ qua số phiên bản Alpha chuyên dụng và thay vào đó chỉ dựa vào phiên bản cairo-lang được liên kết.

### Các tính năng mới

#### Khả năng nâng cấp hợp đồng

OpenZeppelin's[Proxy Upgrade Pattern](https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies)hiện được hỗ trợ đầy đủ để nâng cấp theo hợp đồng trong StarkNet. Mẫu Proxy là phương pháp phổ biến để cho phép nâng cấp hợp đồng trên Ethereum. Alpha 0.7.0 kích hoạt mẫu này trên StarkNet.

Chúng tôi đã thực hiện một hướng dẫn[ngắn](https://starknet.io/docs/hello_starknet/default_entrypoint.html)để minh họa cách triển khai cơ bản của mẫu và OpenZeppelin đã rất nỗ lực để triển khai một hợp đồng tiêu chuẩn cho mẫu proxy; xem nguyên mẫu[](https://github.com/OpenZeppelin/cairo-contracts/pull/129).

#### Số khối và dấu thời gian khối

Alpha 0.7.0 thêm hai lệnh gọi hệ thống mới mà nhiều nhà phát triển đã yêu cầu. Các cuộc gọi này cho phép một hợp đồng truy cập vào số khối và dấu thời gian của khối. Số khối trả về số của khối được thực hiện hiện tại. Dấu thời gian của khối trả về dấu thời gian do Trình tạo chuỗi cung cấp khi tạo khối.

Bạn có thể xem ví dụ về cách sử dụng các tính năng này trong hướng dẫn[](https://starknet.io/docs/hello_starknet/more_features.html#block-number-and-timestamp).

#### Sự kiện

Sự ngạc nhiên! Một tính năng được lên kế hoạch cho một phiên bản trong tương lai đã lẻn vào phiên bản trước đó.

Các hợp đồng của StarkNet hiện hỗ trợ xác định và phát ra các sự kiện, cho phép chúng hiển thị thông tin thực thi cho các ứng dụng ngoài chuỗi sử dụng. Các nhà phát triển Ethereum sẽ thấy ngữ nghĩa và cú pháp rất giống với Solidity. Bạn có thể đọc tài liệu[](https://starknet.io/documentation/events/)hoặc làm theo hướng dẫn[](https://starknet.io/docs/hello_starknet/events.html)giải thích tính năng này.

#### Đã xóa %builtins Chỉ thị

Lệnh %builtin không còn cần thiết trong các hợp đồng StarkNet. Thay đổi này diễn ra sau một cuộc thảo luận cộng đồng về mẫu khả năng mở rộng hợp đồng[](https://community.starknet.io/t/contract-extensibility-pattern/210)trên[StarkNet Shamans](https://community.starknet.io/). Nó đơn giản hóa đáng kể khả năng sử dụng của mẫu mở rộng này.

Ví dụ: hợp đồng sau sẽ được thay đổi từ:

```
%lang starknet

# Đây là chỉ thị "%builtins".
# Nó không còn cần thiết nữa.
%builtins range_check

@view
func add(x : nỉ, y : nỉ) -> (res : nỉ):
return (res=x + y)
kết thúc
```

Về điều này:

```
%lang starknet
@view
func add(x : nỉ, y : nỉ) -> (res : nỉ):
return (res=x + y)
kết thúc
```

Bạn có thể kiểm tra các hợp đồng tiêu chuẩn[ERC-20](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts/token)sử dụng mẫu mới.

#### Chức năng bên ngoài hỗ trợ Mảng cấu trúc

Alpha 0.7.0 hỗ trợ truyền và trả về các mảng cấu trúc trong các hàm bên ngoài. Chức năng bổ sung này cho phép Hợp đồng tài khoản hỗ trợ tốt hơn[cuộc gọi nhiều lần](https://github.com/OpenZeppelin/cairo-contracts/pull/73#discussion_r753535751).

Nhiều cuộc gọi là một tính năng mạnh mẽ của Trừu tượng tài khoản cho phép một tài khoản thực hiện nhiều cuộc gọi trong một giao dịch. Một trường hợp sử dụng rõ ràng là tạo một giao dịch**duy nhất**gọi trợ cấp và sau đó chuyểnTừ.

Chúng tôi mong muốn được xem những gì cộng đồng làm với nó.

#### Các cải tiến đối với StarkNet CLI

**Hỗ trợ cho các khối đang chờ xử lý**

[Khối đang chờ xử lý](https://starknet.io/documentation/block-structure-and-hash/#pending_block)là[được giới thiệu](https://community.starknet.io/t/cairo-v0-6-2-api-change-pending-block/195)trong phiên bản nhỏ cuối cùng (v0.6.2) và cung cấp xác nhận giao dịch nhanh hơn. Phiên bản này bao gồm hỗ trợ truy vấn các khối đó thông qua StarkNet CLI.

Để sử dụng nó, trong mọi lệnh CLI lấy block_number làm đối số (hợp đồng_call/get_block/get_code/get_storage_at), chúng ta có thể truy vấn StarkNet đối với khối đang chờ xử lý bằng cách chỉ định block_number=pending.

**Hỗ trợ cho hợp đồng tài khoản**

StarkNet sử dụng tính trừu tượng của tài khoản, nghĩa là tất cả các tài khoản được triển khai dưới dạng hợp đồng thông minh. Việc triển khai hợp đồng tài khoản đầu tiên được thực hiện bởi[Argent](https://github.com/argentlabs/argent-contracts-starknet)và[OZ](https://github.com/OpenZeppelin/cairo-contracts/blob/main/contracts/Account.cairo), nhưng chúng tôi mong đợi nhiều điều nữa sẽ đến.

Trong StarkNet, tất cả các giao dịch phải thông qua hợp đồng tài khoản và CLI hiện cho phép tương tác trực tiếp với StarkNet Alpha thông qua hợp đồng tài khoản. Xem hướng dẫn[](https://starknet.io/docs/hello_starknet/account_setup.html#setting-up-a-starknet-account)về cách thiết lập.

Chức năng tương tự cũng đã được thêm vào[StarkNet.py](https://github.com/software-mansion/starknet.py/)và[Nile](https://github.com/OpenZeppelin/nile)trong tháng trước.

#### Nhắn tin L1<>L2 trong Khung kiểm tra

Alpha 0.7.0 giới thiệu Người đưa thư. Postman cho phép các nhà phát triển sử dụng khung thử nghiệm để kiểm tra các luồng phức tạp hơn.

Ở cấp độ cao — nó chế giễu trách nhiệm của StarkNet Sequencer trong việc truyền thông điệp từ L1 đến L2 và L2 đến L1. Nó đảm bảo các tin nhắn được gửi qua hợp đồng nhắn tin Solidity sẽ xuất hiện tại hợp đồng StarkNet đích và các tin nhắn được gửi từ hợp đồng StarkNet sẽ xuất hiện trong hợp đồng nhắn tin Solidity.

#### Và nhiều tính năng khác

Alpha 0.7.0 cung cấp nhiều tính năng và thay đổi hơn, chẳng hạn như bổ sung một hàm căn bậc hai hiệu quả vào thư viện toán học chung. Một danh sách đầy đủ xuất hiện trong[changelog](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.7.0).

### Tiếp theo?

Hỗ trợ Cơ chế[phí ban đầu](https://community.starknet.io/t/fees-in-starknet-alpha/286/29)sẽ được phát hành sau vài tuần nữa, dưới dạng phiên bản phụ của StarkNet.

### Thêm thông tin?

[starknet.io](https://starknet.io/): cho tất cả thông tin, hướng dẫn và cập nhật về StarkNet.

[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y): tham gia để nhận câu trả lời cho câu hỏi của bạn, nhận hỗ trợ của nhà phát triển và trở thành một phần của cộng đồng.

[StarkNet Shamans](https://community.starknet.io/): tham gia để theo dõi (và tham gia!) vào các cuộc thảo luận nghiên cứu về StarkNet.