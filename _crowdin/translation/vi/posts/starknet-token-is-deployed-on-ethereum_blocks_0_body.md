### TL; DR

* Mã thông báo StarkNet (STRK) hiện được triển khai trên Ethereum Mainnet
* **Coi chừng lừa đảo!**Mã thông báo StarkNet không được chào bán
* Sẽ mất thời gian để Foundation xác định cơ chế phân phối mã thông báo của mình
* Mã thông báo do các cổ đông, nhân viên của StarkWare và các nhà phát triển phần mềm đối tác độc lập nắm giữ sẽ bị khóa trong thời gian bốn năm, với việc phát hành dần dần bắt đầu sau một năm
* Mã thông báo sẽ tiếp tục phân cấp cho StarkNet nhờ được sử dụng để bỏ phiếu, đặt cược và thanh toán phí

Hôm nay,[StarkNet](https://starknet.io/)đang thực hiện một bước nữa hướng tới phân quyền. Mã thông báo StarkNet hiện là[trên Ethereum](https://etherscan.io/address/0xca14007eff0db1f8135f4c25b34de49ab0d42766). Tóm tắt nhanh: STRK sẽ được sử dụng làm mã thông báo đặt cược để tham gia vào các cơ chế đồng thuận của StarkNet, dưới dạng mã thông báo Quản trị và để thanh toán phí giao dịch. Cơ sở lý luận cho từng tiện ích này được trình bày trong[đề xuất phân cấp](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)của chúng tôi, trong phần có tiêu đề “Mã thông báo sẽ được sử dụng để làm gì?”

***Cẩn thận với những trò gian lận:**tại thời điểm viết bài này, không có cách nào để mua Token StarkNet; khoảng thời gian cấm bán hàng này sẽ được giữ nguyên cho đến khi có thông báo mới của[StarkNet Foundation](https://twitter.com/StarkNetFndn); theo dõi thông tin liên lạc chính thức từ StarkNet Foundation để tìm hiểu về bất kỳ cập nhật nào đối với trạng thái của STRK. Bạn có thể báo cáo lừa đảo và kiểm tra các báo cáo lừa đảo khác trong kênh[báo cáo lừa đảo](https://discord.gg/qypnmzkhbc)trên máy chủ[StarkNet Discord](http://starknet.io/discord).*

Bài đăng này giải thích quy trình phân bổ mã thông báo và cách các hợp đồng mã thông báo được triển khai phục vụ hai trong số ba tiện ích được thiết kế của mã thông báo, cụ thể là bỏ phiếu và đặt cược. Tiện ích thứ ba — thanh toán phí StarkNet — sẽ được thảo luận sau.

### Lập kế hoạch quy trình phân bổ mã thông báo

Trước đây chúng tôi đã đề xuất kế hoạch[](https://medium.com/starkware/part-3-starknet-token-design-5cc17af066c6)để phân bổ mã thông báo ban đầu. Mã thông báo được phân bổ cho các cổ đông, nhân viên và nhà phát triển phần mềm độc lập bị khóa trong bốn năm, với lịch phát hành dần dần bắt đầu sau một năm. Mã thông báo bị khóa có thể được sử dụng để bỏ phiếu và đặt cược, nhưng không thể chuyển nhượng hoặc giao dịch. Một số mã thông báo bị khóa thông qua hợp đồng thông minh chuyên dụng trên Ethereum trong khi các mã thông báo khác bị khóa thông qua người giám sát.

Một cách riêng biệt, 50,1% mã thông báo StarkNet hiện tại được phân bổ cho Tổ chức StarkNet, được sử dụng để đáp ứng các mục tiêu[](https://medium.com/@StarkNet_Foundation/welcome-to-the-world-starknet-foundation-7bd55d5dbc59)của nó (xem[bài đăng](https://medium.com/starkware/introducing-the-starknet-foundation-bd4b4379fbb)của StarkWare). Những mã thông báo này không bị khóa. Tuy nhiên, Quỹ sẽ cần thời gian để xây dựng cơ chế chính xác để phân bổ thêm các mã thông báo đó và sẽ chia sẻ kế hoạch của mình trong thời gian tới.

#### Tại sao lại khóa?

Khóa mã thông báo trong khoảng thời gian nói trên đảm bảo rằng những người đóng góp hiện tại phù hợp với các ưu đãi dài hạn của StarkNet. Nó cũng không khuyến khích đầu cơ vào mã thông báo trước khi sử dụng rộng rãi cho các mục đích dự định của nó: bảo mật mạng, thanh toán phí và quản trị phi tập trung.

Tiếp theo, chúng tôi giải thích cách triển khai mã thông báo hỗ trợ bỏ phiếu và đặt cược.

### bỏ phiếu

Quỹ sẽ chịu trách nhiệm hỗ trợ quản trị tốt và xây dựng các cơ chế bỏ phiếu. Mã thông báo StarkNet được thiết kế để cho phép bỏ phiếu trực tiếp và một loạt các cơ chế ủy quyền.

#### bỏ phiếu L1

Triển khai ERC-20 được triển khai hiện bao gồm**tùy chọn**sử dụng mô-đun ủy quyền[của Hợp chất](https://docs.compound.finance/v2/governance/). Mô-đun này được sử dụng rộng rãi để bỏ phiếu trực tuyến. Lý do tính năng này là tùy chọn trên StarkNet và được tắt theo mặc định, là do tính đến chi phí. Bật tính năng này có nghĩa là mọi lần chuyển Mã thông báo StarkNet trên L1 đều yêu cầu thêm gas cần thiết chỉ cho mục đích theo dõi sự thay đổi về quyền biểu quyết.

#### Bỏ phiếu không theo L1

Các lựa chọn thay thế cho bỏ phiếu trực tuyến L1 với mô-đun ủy quyền của Compound bao gồm bỏ phiếu ngoại tuyến, cũng như các hệ thống bỏ phiếu trực tuyến dựa trên StarkNet (chẳng hạn như[SnapshotX](https://snapshot.mirror.xyz/cUOrwdtEs5PvNh0sqYWWxPjt8GdJWn_Qp3cl7E3_8IU)). Các giải pháp thay thế này, giúp giảm đáng kể mức tiêu thụ gas cho các lần truyền L1, không yêu cầu hỗ trợ rõ ràng từ mã ERC-20 hiện được triển khai và do đó vốn đã được hỗ trợ.

Như đã đề cập ở trên, tất cả các mã thông báo — bị khóa và mở khóa — sẽ có thể sử dụng được trong cơ chế bỏ phiếu của StarkNet.

### đặt cược

Hoạt động không cần cấp phép và chống kiểm duyệt của StarkNet yêu cầu lựa chọn ngẫu nhiên các trình tự sắp xếp. Xác suất của một nút được chọn để sắp xếp và đề xuất một khối tỷ lệ thuận với số lượng Mã thông báo StarkNet mà nút đó đặt cược. Cơ sở lý luận cho việc sử dụng Mã thông báo StarkNet (chứ không phải Ethereum hoặc Bitcoin) được giải thích trong đề xuất quản trị[](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)và các chi tiết chính xác về đặt cược, sắp xếp thứ tự và tạo khối trên StarkNet đang được cộng đồng</a>thảo luận

và đang diễn ra vẫn chưa được hoàn thiện.</p> 

Cũng giống như biểu quyết, mã thông báo có thể được sử dụng để đặt cược ngay cả khi chúng bị khóa. Điều này góp phần vào sự đa dạng của các nhà khai thác StarkNet và khả năng phục hồi của StarkNet.



### Bản tóm tắt

Việc triển khai các hợp đồng Mã thông báo StarkNet trên Ethereum là một bước khác trong quá trình phân cấp StarkNet.

Chúng tôi kêu gọi các nhà phát triển và người dùng cảnh giác với những trò gian lận! Tại thời điểm xuất bản, không có mã thông báo nào có thể giao dịch được và trạng thái không giao dịch này sẽ được giữ nguyên cho đến khi có thông báo mới của StarkNet Foundation.

Để biết thêm câu hỏi, bạn có thể truy cập kênh[Token-thảo luận](https://discord.gg/qypnmzkhbc)trên máy chủ[StarkNet Discord](http://starknet.io/discord).