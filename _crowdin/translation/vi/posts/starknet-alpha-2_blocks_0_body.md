### TL; DR

* StarkNet hiện hỗ trợ khả năng kết hợp, tính năng chính xác định giai đoạn Chòm sao của StarkNet.
* Chúng tôi đang phát hành một khung thử nghiệm cho StarkNet — giờ đây các nhà phát triển có thể thử nghiệm hợp đồng của họ một cách cục bộ và hiệu quả.
* Bản phát hành này bao gồm một số cải tiến hiệu suất đáng chú ý, chẳng hạn như hỗ trợ cho Merkle-Patricia Tries và nội trang cho các hoạt động theo bit.
* Phía trước hệ sinh thái:

1. **Hợp đồng được tiêu chuẩn hóa**: OpenZeppelin sẽ phát triển các hợp đồng được tiêu chuẩn hóa cho StarkNet, giống như họ đã làm cho Ethereum!
2. **EVM->Trình biên dịch Cairo**: nhóm Warp @ Nethermind đã trình diễn việc biên dịch mã Solidity ERC-20 cho các hợp đồng StarkNet

### Lý lịch

StarkNet là một Rollup xác thực phi tập trung không được phép (hay còn gọi là “ZK-Rollup”). Chúng tôi đã công bố lộ trình[có](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)của mình vào đầu năm. [Alpha](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), hiện đang chạy trên mạng thử nghiệm Ethereum công khai, đã hỗ trợ triển khai hợp đồng thông minh không được phép thực hiện bất kỳ logic kinh doanh nào, với thông báo L1<>L2 và dữ liệu trên chuỗi. Hơn nữa, nó cho phép bất kỳ người dùng nào gửi giao dịch đến mạng mà không cần sự cho phép, theo kiểu Ethereum.

Bản phát hành này: StarkNet Alpha 2, bao gồm tính năng cốt lõi cho phép chúng tôi chuyển từ Hành tinh sang Chòm sao: khả năng kết hợp giữa các hợp đồng thông minh đã triển khai.

### Đặc trưng

StarkNet Alpha 2 giới thiệu các tính năng sau:

* **Khả năng kết hợp:**StarkNet Alpha hiện hỗ trợ tương tác giữa các hợp đồng thông minh — trước thời hạn! Cái hay của bản nâng cấp này là các nhà phát triển có thể mong đợi trải nghiệm gần giống như Ethereum; các cuộc gọi là đồng bộ và có thể được sử dụng như các cuộc gọi chức năng. Chúng tôi háo hức chờ đợi các ứng dụng mới sẽ được hưởng lợi từ cả quy mô tính toán không giới hạn và khả năng kết hợp hợp đồng do StarkNet tung ra. Để hiểu cách sử dụng tính năng này, bạn có thể bắt đầu bằng cách làm theo hướng dẫn[](https://www.cairo-lang.org/docs/hello_starknet/calling_contracts.html)này. Chúng tôi rất muốn nghe phản hồi của bạn và xem những gì bạn đang xây dựng trên[StarkNet discord](https://discord.gg/uJ9HZTUk2Y).
* **Khung kiểm tra cục bộ:**bạn đã hỏi và chúng tôi đã cung cấp —[khung kiểm tra tốt hơn](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/starknet/testing). Điều này sẽ cho phép các nhà phát triển đẩy nhanh quá trình phát triển dApp của họ bằng cách thử nghiệm các tương tác và triển khai hợp đồng StarkNet của họ cục bộ — mà không có bất kỳ phụ thuộc bên ngoài nào. Phiên bản này chỉ bao gồm tương tác L2, các phiên bản tiếp theo sẽ mở rộng chức năng và dễ sử dụng. Kiểm tra hướng dẫn[tại đây](https://www.cairo-lang.org/docs/hello_starknet/unit_tests.html)và chúng tôi rất muốn nghe phản hồi của bạn về tính năng đó.
* **Cải tiến hiệu suất:**

**Cây Patricia:**chúng tôi đã cải thiện thiết kế của StarkNet để hỗ trợ thông lượng cao hơn và thời gian tạo bằng chứng ngắn hơn bằng cách chuyển sang cam kết trạng thái Cây Merkle-Patricia ([tài liệu](https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/cairo/common/patricia_utils.py)). Thay đổi này cho phép tạo ra các khối lớn hơn nhiều, do đó giảm chi phí cho mỗi giao dịch. Việc chuyển sang một cam kết nhà nước tinh vi hơn đã được kích hoạt bởi Cairo, ngôn ngữ ZKP — một thành phần cốt lõi của hệ điều hành StarkNet.

**Hoạt động theo bit:**chúng tôi đã thêm nội trang[](https://www.cairo-lang.org/docs/how_cairo_works/builtins.html)để hỗ trợ các hoạt động theo bit hiệu quả hơn nhiều trong các hợp đồng StarkNet ([tài liệu](https://www.cairo-lang.org/docs/reference/common_library.html#common-library-bitwise)).

* **Goerli:**StarkNet đang chuyển từ Ropsten sang[Goerli](https://goerli.etherscan.io/address/0xee02F29aE9A4988aE064940bF11954d6eafE26Ac)! Cuối cùng, chúng tôi đã giải phóng hệ thống của mình khỏi những ý tưởng bất chợt của các vị thần Ropsten. Alpha 2 hiện sẽ chạy trên một môi trường phát triển ổn định hơn.

### hệ sinh thái

Hệ sinh thái StarkNet không ngừng phát triển và chúng tôi rất vui được chia sẻ những tin tức mới nhất:

* **Hợp đồng tiêu chuẩn hóa**: chúng tôi rất vinh dự được làm việc với OpenZeppelin trên thư viện hợp đồng tiêu chuẩn của StarkNet. Công việc kinh điển của họ về các hợp đồng được tiêu chuẩn hóa của Ethereum phục vụ tất cả chúng ta hàng ngày và chúng tôi tin rằng họ sẽ có tác động như vậy ở đây.
* **EVM->Trình biên dịch Cairo**: Nhóm Warp[của Nethermind đã trình diễn](https://medium.com/nethermind-eth/warp-your-way-to-starknet-ddd6856875e0)bản dịch hợp đồng ERC-20 từ mã byte EVM sang hợp đồng StarkNet và triển khai trên StarkNet. Nỗ lực này đang tiến triển nhanh chóng và mục tiêu tiếp theo của chúng tôi là chuyển đổi các hợp đồng thông minh tùy ý từ Yul sang Cairo.
* **Maker-on-StarkNet**: đề xuất[](https://forum.makerdao.com/t/mip39c2-sp19-adding-the-starknet-engineering-core-unit-sne-001/9745)đã được gửi tới Maker DAO để triển khai giao thức Maker qua StarkNet. Giai đoạn đầu tiên đề xuất một cầu nối DAI từ Ethereum đến StarkNet với việc đúc DAI trên StarkNet để tuân theo.
* **Dịch vụ kiểm toán StarkNet/Cairo**: chúng tôi đang hợp tác với nhiều công ty kiểm toán để cung cấp dịch vụ kiểm toán hợp đồng thông minh StarkNet và các chương trình Cairo.

### Mainnet quanh góc

Chúng tôi đang chuẩn bị sẵn sàng cho sự ra mắt của StarkNet Alpha Mainnet, bắt đầu dần dần với một bộ ứng dụng được đưa vào danh sách cho phép. Một số dự án đang được tiến hành và nhiều dự án khác đang được bổ sung tích cực vào ban ngày. Để tham gia bữa tiệc, bạn được mời liên hệ qua[discord](https://discord.gg/uJ9HZTUk2Y).

**Update (tháng 11 năm 2021):**StarkNet Alpha hoạt động trên Ethereum Mainnet