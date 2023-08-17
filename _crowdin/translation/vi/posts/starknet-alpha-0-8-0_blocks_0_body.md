### TL; DR

* StarkNet Alpha 0.8.0 giới thiệu phiên bản ban đầu của cơ chế tính phí (tùy chọn cho đến StarkNet Alpha 0.9.0.)
* Các cuộc gọi API mới để ước tính phí giao dịch để có được dấu vết giao dịch, cho phép khả năng hiển thị và gỡ lỗi tốt hơn
* Cải thiện hiệu suất cho trình sắp xếp chuỗi StarkNet
* L1 → L2 hủy tin nhắn

### giới thiệu

Như đã chia sẻ trong lộ trình[](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51)của chúng tôi, sau phần bổ sung mới nhất cho chức năng và tính năng của StarkNet, sự chú ý của chúng tôi chuyển sang cải tiến hiệu suất và thiết kế giao thức (bao gồm phí, trừu tượng hóa tài khoản, phân quyền, v.v.). StarkNet Alpha 0.8.0 bắt đầu quá trình thêm phí giao dịch và cải thiện hiệu suất của trình sắp xếp thứ tự.

Lộ trình cho StarkNet bao gồm một cơ chế tính phí và bằng cách phát triển phiên bản này, chúng tôi đang tiến một bước quan trọng đến gần hơn với hiệu suất đầy đủ cho nền tảng.

Thêm cơ chế tính phí là một phần thiết yếu trong thiết kế hiệu suất của StarkNet. Nếu không có một khoản phí tối thiểu, chúng tôi có nguy cơ phải đối mặt với các giao dịch vô hạn: điều này sẽ khiến hệ thống không thể hoạt động hiệu quả, bất kể tối ưu hóa trình tự sắp xếp.

### Đặc trưng

#### Hỗ trợ phí

StarkNet Alpha hiện hỗ trợ phiên bản đầu tiên của cơ chế tính phí. Cơ chế này rất cần thiết ngay cả ở giai đoạn đầu này và thậm chí trên Testnet, vì hai lý do chính:

1. Nó cho phép các nhà phát triển bắt đầu tối ưu hóa hợp đồng của họ theo mô hình chi phí của StarkNet.
2. Nó là một đối tác quan trọng để cải thiện hiệu suất của hệ thống, vì nó ngăn chặn gửi thư rác bằng cách gửi vô số giao dịch.

Phiên bản này giới thiệu các thành phần cần thiết để nhà phát triển kết hợp các khoản thanh toán phí vào các công cụ và ứng dụng của họ. Giờ đây, các nhà phát triển có thể ước tính phí giao dịch bằng cách gọi điểm cuối \`estimate_fee\` và thực hiện thanh toán phí như một phần của quá trình thực hiện giao dịch.

Vì tính năng này không tương thích ngược nên chúng tôi sẽ không thực thi thanh toán phí vào thời điểm này mà chỉ áp dụng từ phiên bản 0.9.0, phiên bản này sẽ được phát hành trong vài tuần nữa. Quá trình chuyển đổi dần dần này sẽ cho phép người dùng và nhà phát triển điều chỉnh theo mô hình mới.

#### Cấu trúc phí trên 0.8.0

Vào ngày 0.8.0, phí sẽ chỉ được thu theo độ phức tạp tính toán, trong khi StarkWare vẫn sẽ trợ cấp chi phí truyền thông L1. Chúng tôi sẽ cập nhật cơ chế phí để bao gồm các chi phí liên lạc và vận hành L1 này trong vài tuần tới. Khoản thanh toán sẽ được thu thập nguyên tử khi thực hiện giao dịch trên StarkNet L2. Xem tài liệu[lệ phí](https://starknet.io/documentation/fee-mechanism/)để biết mô tả chuyên sâu.

Điều quan trọng cần lưu ý là chúng tôi sẽ hợp tác chặt chẽ với cộng đồng nhà phát triển để điều chỉnh và phát triển cơ chế tính phí khi StarkNet phát triển.

#### Vòi L2 Goerli ETH

Chúng tôi đã ra mắt Vòi[L2 Goerli ETH](https://faucet.goerli.starknet.io/)để cho phép người dùng thanh toán phí trên Testnet. Vòi này gửi một lượng nhỏ L2 Goerli ETH đến địa chỉ tài khoản của bạn trên StarkNet Goerli mà bạn có thể sử dụng để thanh toán phí giao dịch.

#### API theo dõi

Chúng tôi đã thêm khả năng truy xuất dấu vết thực thi của giao dịch vào API của StarkNet. Bên trong dấu vết của giao dịch, tất cả các cuộc gọi nội bộ đều hiển thị, kèm theo thông tin như tài nguyên thực thi đã sử dụng, giá trị trả về, sự kiện phát ra và thông báo đã gửi. Cuộc gọi mới này giúp đơn giản hóa việc hiểu hành vi của hợp đồng hoặc gỡ lỗi các giao dịch. Ngoài ra, các công cụ như[Voyager](https://voyager.online/)hoặc[StarkTx](https://starktx.info/)có thể kết hợp dữ liệu này; cung cấp cho người dùng phân tích chi tiết hơn, đặc biệt đối với tương tác hợp đồng tài khoản.

Để có được dấu vết, bạn có thể sử dụng \`get_transaction_trace\` trong CLI của StarkNet. Để xem ví dụ về cách sử dụng nó, hãy xem hướng dẫn[](https://www.cairo-lang.org/docs/hello_starknet/cli.html?#get-transaction-trace).

#### Hủy tin nhắn

Một tính năng bổ sung của phiên bản này là khả năng hủy các tin nhắn L1 → L2. Tại sao điều này hữu ích? Hãy tưởng tượng một kịch bản trong đó người dùng chuyển tài sản từ L1 sang L2. Luồng bắt đầu với việc người dùng gửi nội dung tới cầu nối StarkNet và tạo thông báo L1→L2 tương ứng. Bây giờ, hãy tưởng tượng rằng mức tiêu thụ tin nhắn L2 không hoạt động (điều này có thể xảy ra do lỗi trong hợp đồng Cairo của dApps). Điều này có thể dẫn đến việc người dùng mất quyền giám sát tài sản của họ mãi mãi.

Để giảm thiểu rủi ro này, chúng tôi cho phép hợp đồng khởi tạo thông báo L1→L2 hủy hợp đồng đó — sau khi tuyên bố ý định làm như vậy và đợi một khoảng thời gian thích hợp (xem tài liệu[](https://starknet.io/l1-l2-messaging/#cancellation)).

### Cải tiến hiệu suất

Phiên bản này giảm đáng kể thời gian mà trình sắp xếp thứ tự cần thực hiện luồng giao dịch đến Cairo.

Đây chỉ là bước đầu tiên! Cột mốc quan trọng tiếp theo về hiệu suất của chúng tôi, sắp được giới thiệu (0.9.0), là thực thi song song trình sắp xếp thứ tự và dự kiến sẽ có nhiều tối ưu hóa khác trong tương lai.

### Gì bây giờ?

Đọc tài liệu kỹ thuật[tại đây](https://starknet.io/documentation/fee-mechanism/).

Truy cập[starknet.io](https://starknet.io/)để biết tất cả thông tin, tài liệu, hướng dẫn và cập nhật về StarkNet.

Tham gia[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)để được hỗ trợ nhà phát triển, thông báo về hệ sinh thái và trở thành một phần của cộng đồng.

Truy cập[StarkNet Shamans](https://community.starknet.io/)để được cập nhật và tham gia vào tất cả các cuộc thảo luận về nghiên cứu của StarkNet.