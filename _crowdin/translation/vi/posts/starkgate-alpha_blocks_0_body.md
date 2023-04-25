### TL; DR

* Phiên bản đầu tiên của StarkNet Bridge, StarkGate Alpha, được phát hành trên**[Testnet](https://goerli.starkgate.starknet.io/)**và trên**[Mainnet](https://starkgate.starknet.io/)**!
* Chúng tôi đang chờ phản hồi của cộng đồng về cách cải thiện mọi thứ. Bạn có thể gửi phản hồi của mình cho cả[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)và[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).
* Việc triển khai Mainnet sẽ sớm diễn ra (cập nhật, ngày 9 tháng 5 năm 2022: StarkGate hoạt động trên Mainnet)

Sự phấn khích! Chúng tôi rất vui mừng được phát hành StarkGate Alpha, phiên bản đầu tiên của StarkNet's Bridge, hiện đã có trên mạng thử nghiệm Goerli, với việc triển khai Mainnet sẽ sớm được triển khai.*

\*(cập nhật, ngày 9 tháng 5 năm 2022: StarkGate hoạt động trên Mainnet)

**Tuyên bố từ chối trách nhiệm quan trọng: đây là phiên bản alpha trên StarkGate Alpha (hãy đọc bản in đẹp bên dưới!).**

![](/assets/starkgate_01.png)

Trước khi bạn tiếp tục, hãy kiểm tra nó! [StarkGate Testnet](https://goerli.starkgate.starknet.io/),[StarkGate Mainnet](https://starkgate.starknet.io/)

StarkGate đóng vai trò là cổng kết nối giữa Ethereum và[StarkNet](https://starknet.io/)và cho phép người dùng làm mọi thứ họ có thể mong đợi từ một cây cầu.

#### **Tôi có thể tìm thông tin về cách thức hoạt động của StarkGate ở đâu?**

Để hiểu cách thức hoạt động của StarkGate, hãy đọc tài liệu kỹ thuật[](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)và xem mã[](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate). Lưu ý rằng đây là phiên bản đầu tiên và chúng tôi mời phản hồi cũng như đề xuất của bạn về cách cải thiện cả[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)và[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).

#### **Những token nào sẽ được StarkGate hỗ trợ?**

* StarkGate Alpha trên Goerli hỗ trợ ETH và một vài mã thông báo ERC-20 khác. Danh sách đầy đủ và các địa chỉ hợp đồng có liên quan, cả trên Ethereum và StarkNet, đều có sẵn trong[repo](https://github.com/starkware-libs/starknet-addresses)này.
* Trên Mainnet, ban đầu, StarkGate Alpha sẽ chỉ hỗ trợ ETH để cho phép sử dụng cơ chế tính phí. Sau này, chúng tôi sẽ thêm hỗ trợ cho WBTC, USDC, USDT và DAI. Bạn có thể xem các địa chỉ hợp đồng có liên quan trong[repo](https://github.com/starkware-libs/starknet-addresses/blob/master/bridged_tokens/mainnet.json)này.

Xa hơn nữa, chúng tôi sẽ xuất bản cơ chế thêm hỗ trợ cho các mã thông báo bổ sung.

#### **StarkGate Alpha sẽ có những giới hạn an toàn nào trên Mainnet?**

StarkGate Alpha trên Mainnet được ra mắt với hai hạn chế — để giảm rủi ro liên quan đến việc sử dụng phiên bản Alpha:

1. Tổng giá trị bị khóa (TVL) trong cầu trên L1 sẽ giới hạn số lượng của từng loại mã thông báo.
2. Số tiền tối đa trong mỗi giao dịch được gửi từ L1 đến L2 (Ethereum → StarkNet) qua StarkGate sẽ bị giới hạn.

Chúng tôi dự định sẽ dần dần giảm bớt những hạn chế này và dỡ bỏ chúng hoàn toàn khi sự tự tin tăng lên. Bạn có thể tìm thấy các tham số được cập nhật trong tài liệu[của StarkGate](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge).

![](/assets/starkgate_02.png)

### Alpha và ý nghĩa của nó

Như mọi khi, chúng tôi xin nhắc bạn rằng StarkNet hiện đang ở giai đoạn**Alpha**:

* Mọi thứ có thể phá vỡ. Nếu chúng thất bại thảm hại, tiền của bạn có thể bị mất (**hãy đọc tuyên bố từ chối trách nhiệm bên dưới**!).
* Cả hai hợp đồng StarkNet Alpha và StarkGate đều có thể được nâng cấp mà không cần khóa thời gian. Mặc dù chúng tôi dự kiến sẽ thông báo trước các bản nâng cấp như vậy, nhưng trong trường hợp rủi ro bảo mật sắp xảy ra (ví dụ: nếu phát hiện thấy một lỗi nghiêm trọng), bản nâng cấp có thể được áp dụng mà không có hoặc có rất ít cảnh báo.
* Mã của cây cầu, cũng như các phần của StarkNet Alpha, vẫn chưa được kiểm tra. Quá trình kiểm tra ABDK và Nethermind của StarkGate Alpha sẽ sớm hoàn tất.

Chúng tôi khuyến khích tất cả người dùng giúp cải thiện cây cầu bằng cách cung cấp phản hồi của họ bằng một trong các nền tảng sau:

1. [Kho giao diện người dùng StarkGate](https://github.com/starkware-libs/starkgate-frontend)
2. [Kho lưu trữ hợp đồng StarkGate](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate)
3. [StarkPháp Sư Mạng](http://community.starknet.io/)

Đối với các câu hỏi và hỗ trợ nhà phát triển, hãy tham gia máy chủ bất hòa[StarkNet](https://discord.gg/uJ9HZTUk2Y).

### từ chối trách nhiệm

***StarkNet Alpha là một hệ thống mới và phức tạp chưa được kiểm toán đầy đủ. Điều tương tự cũng áp dụng cho Cầu StarkNet. Giống như tất cả các hệ thống phần mềm phức tạp, cả StarkNet và cầu nối đều có thể chứa các lỗi mà trong một số trường hợp cực đoan có thể dẫn đến việc bạn mất toàn bộ số tiền. Vì vậy,***bước đi cẩn thận và hãy cẩn thận!******

*Hệ sinh thái StarkNet là một tập hợp lớn và phát triển nhanh chóng gồm các nhóm và cá nhân độc lập, mà StarkWare không giám sát và không chịu trách nhiệm. Bất kỳ dự án nào được phát triển bởi các thành viên hệ sinh thái đều có thể chứa lỗi, trong trường hợp cực đoan, có thể dẫn đến việc bạn mất toàn bộ số tiền. Hơn nữa, khi nhiều hợp đồng thông minh được triển khai, khả năng xảy ra các lỗi có hại ngoài ý muốn và thậm chí là các trò gian lận độc hại và kéo thảm sẽ tăng lên. Vì vậy, hãy coi tất cả các hợp đồng thông minh trên StarkNet giống như bạn coi các hợp đồng thông minh trên Ethereum và chỉ sử dụng những hợp đồng mà bạn có lý do chính đáng để tin tưởng là an toàn.*